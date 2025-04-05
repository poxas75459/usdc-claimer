/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5WpUL4tPbBCkvUnxY9pR8WWMnq4WGgq7BfYAtG6JtBcFhnEZTMYFbtn4DUMtJiRmhbNFuCc9DuRcjx8VxvcRR6QE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SFYzymaZsSesBAPW4qrfCpzKHy8Q5pEy6DaetT9USBiSVYv1BLMzHPsLjWiynzA739wUoCu2vriUf6HJ8VFQGUW",
  "key1": "4YXJEocUHzFpwjWYfeoXTwrT3hVpZghgPuGEuxEAoVDaUoCfKYBE7JS7TBt9aw82CfJfeMTnGiWV5QnvCgoZa6Dx",
  "key2": "4LEnXehbGbvGvew6XPyAhNTFXYyE9M31t8F8B3aefrDPzC2PBtSFBXKks2HMgNJa3CkApULutNBouDNSe9cBiJre",
  "key3": "rRRvgqSCX2JYW4DZTQMD7c2scrtnMJbvFxQGraX8duKLjicnuEQdhn2Ktsqrhj5nrPz2LfGbF5uW95hYNMZA9kp",
  "key4": "ThbBV4zjU6Ywszy9pSS8BFkRuaLborQ4hDGHuwXLUW7V5TwaFnXS6ojddaLkA4Ci28RBRshyifFUuzWNdU7b68b",
  "key5": "5Zssmaj9vvN8g5mgk5ntibXLyWeZxhbxt7RmNvFKUj2qusPN9om9BMCDSNSLVr26Sj4iAqkW2E4jDc3cXe4yZ1HG",
  "key6": "62FkttA535CNFL1xdnJPfKQfXNWtKHXTpf1QX9F2u8xaTuaQ2ZMrCfwYACA9ZP4pSVvjSyigWhmSHG19oeJG5J9D",
  "key7": "4ABg4V1v2j2jDxAYsrLSPLToaahBanPf6Ts6GMtJznwVnzoawDNqJtsDsqdRpKtmFv61b26XD35W6atGVSDWHVoJ",
  "key8": "GNCMNSBmqXFgePf2ewU8XHWL2rVRUW8uER2gTz3LcV7Z9TiQ5YCd9v1fNya2GLzv13VhSr2YX5RLDmLRCnUypSW",
  "key9": "27rtJ5SbSE6nYxsKiyFuaXHutrdkcUtJ7pbexpNv7TWYw3jemZW7wVpRTXVanzWTXxm8D7LsNqHSFdZ8pTbRnhY1",
  "key10": "5hZpgT8QTYKJQWmbByyh8JtBSrxyFfK56dSRFEkHWgcNWYmXb3ZZdYTvFgYSKGUoxCpGmL1pYAGiER8cPqPdnyHJ",
  "key11": "4MZdbwV67H8mBRqUUcmMi9ttVcUdhsJ52HLrcpP8TQPi8vD7Xrmzz5k7zaaQEYiLfvbkdsJMWm4Fbu8ETDiXNRLt",
  "key12": "2H3wkKJf4zFFUFRBEZxrQfi96QgFWvbdEwsEaoVqN2dGwUsRu9WAznp4f2nDR6eo1Z4CY7uGR5K9cDCbtZo7GquA",
  "key13": "61JgWSJsWcjJTgPLfup3ycrUmQRpzptz7aCcbxRqQtyc9JPvW5hNyHnc319mcHgcQoWQ2gKY2kBhRtvBE1DvFjhA",
  "key14": "35e3ci9dCaFnfjz1KgJeHASrjo65bTptNt2n4JCuobWA1NYarU7rFoMaj4huNg4HuWzqvaTeS8pwMVSpY2rJuZHn",
  "key15": "2yHg1DLjvXksTS3WM7qcqRBDRr9yVq8FCdLrCKg7Y7HxvdRUwg4PrKiGkK1KUuz3BsdiM4qzPNSpdVrqUXzajfAq",
  "key16": "YJdyVTBCgtPguTtbkptSQ1Pb88p3asUpQjb62MDPYqqZgvSRsPhD6zkpNwgYFBARy9mmNsbCunCMEzGicTjmH4Z",
  "key17": "tEw5qk38BuaxzSDmSGU71xHo3gFZtfEMHk4kGZ8VqubBrPFXEpdaHeocTe3uLp6gsMLirB1MhJsvkfC4S6dT42m",
  "key18": "2cspZRrjHH9YwahH8hvJT5dvpA6HY4eTq9T8HwGxghj9ykZVeLosw7WanNnqVMYvZ8qD42aFdBgo8DBRdzp8wWcs",
  "key19": "2hxYdWw3WDAfX4SF6ayntSrx2WH2wnZa1sT6jSesgB1JHPQkYkDimrSh3wvYJmzoJHBA3J1kn7T8QsWept1zAREy",
  "key20": "4hdKjFegsYs2fNwPNfKzM5meBEZEx1rUrGP2DiyGFAPdKN96tdDsuCABNKBH7CJ3mewcknXjct69ddL78NFKqwxu",
  "key21": "4T3aYkTmHHwiVwPwzZ5XFapB3Qvc8hTKTmHY9RgoJXGrsPCwwRteyKRS4ZRDQ3m9kAbaLpyGhL989WznHpoihyM2",
  "key22": "3ELARNR7JCVa7X4LLN5QNECpzt1ySat6pRQ74yxVmkRSP5r8qhxYm4iAHV15ZEfWz1qmpRjjRfWWdXpiQZwRBonm",
  "key23": "3uGTVkzJ9VHT2aak8kZK5bjEcoTMBxGnbELBw9fh8edQNj6LeGpbYAY7iwBf2qdh6ARAJLWnijXtF6rFtG1cLZ8P",
  "key24": "668NbbedPgD9wmV4dkcz98BcsSrk38SEJSNaqX8YNBiRTaHXXWLaXxzB7aJC5azcgUA9qw8i2AWBWT9c2uxi2S1k"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
