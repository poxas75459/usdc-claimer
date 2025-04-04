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
    "5H1yt5M9xwKeTh9Dny69uzw8iMH5jLRELdvB7mJs9pKDZfQymuvs9TfzhhweqBSq3N5fiTffWMy2DuepBZ6usDe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BjSAM1kNueX8W3FjRjZ1RgsGR34tzhpGkGFzTYdFWAN5axhHLpv7qaCxNwdwj4opmaiBhwvPwrVSHbEfF3xJkxd",
  "key1": "4QbKgB8MBfuR7BSdXKZvjhuaGFA6ADmVdbm7ep8A7fbkht7b3rgauwKQQvp3cCXpzLWFBLurtV5mkLYMWitFjp59",
  "key2": "3wpqA5ySz9hHtrSqESNLUhhfzFgR1wCWGQPFsYCsXGw4AekgEkiVatVd8j4U7jVHDmdJX4WwExRhTuBFXpsen7TH",
  "key3": "u2f5tQWGhhC2UsVSP75rW4NFpv3DnjY7JGWKGCaC92PNjcgFAWoVR7G7aGnoC6L4WjY8yqqE8T8DcX7eGoZoj5d",
  "key4": "3xjBWawARa5CdrAuWsBRbiwERdLmmtd82ytiZvXWv9KWcPuAn3CLQE5EWKGhuzq8dZwbpGiTKXDxGVzV57LrHUH",
  "key5": "2uaTdcgXwtLLVBK2LoVYZZxqmYN3ve1QWhTbVaKD6RKypLNuTFCNA59BmxsYWLMyjwwbnNphvEpde92aRQEzaVSx",
  "key6": "2qGhAf18Lj1T5V7QsBJzG9P7aN7NgJ6BXxB3kn3Sk3jekdhszFrbSYPYKHx7aizSXFac32G8jDST6eRNG5LyVMeT",
  "key7": "4pY3iQPAbsLofUjHfewCcpDmyAztotdhVMznb5mvKQWnxTBGwaLFYkQa2UTsE2EuDyZigLnNRJ6ZyxxHywYHinwG",
  "key8": "4zM17GXhA3jCZfuGEA2NHMDbGd9zdbiT4FtoT2P7Nxjxd9h2voUeoVE1k4TDuZrLJPVgo1oThJaeig2SWuAtghXh",
  "key9": "4mtECEEcy4LQUyKWTy6t4Ju5GaSYCZQeXGpvYsLFMMZU8DTsYGetqQfk1JEUEvG3B3xnh71UvL3HSysxWvkjLGVN",
  "key10": "weXk2nVJHnU8Lg9BXeg5HY6cTYWeg2VAW45LZCDvNX96cmFyRnmY7TXKMhqb5jiMxYgdoNhdppnBFKfJggQEqXh",
  "key11": "yuRzi5KfjxXRMjxDZ4WdL2gXD17pvujHXKNDi4tQTsBxLH8hzA3Su8e2M9jAzYRpHRoMhtQP74PdpTWSXQCMi93",
  "key12": "qSA2JVCzYhfjndtECjysKuhFyk4fpEdPABzyVRFPAewgVBQWyu11hbMtnLphVzxMbMLJPdRkAxPmTDu6pEqBVof",
  "key13": "5xGBGkcAPsso3tghPKX28eJ2meaE1fHqrjGDd3Ez1MuXqEWn5PiVhNLHwo3F2TdzNyBEcCxHXSLP2NM52eahzeXo",
  "key14": "EvCvLeCzWyECHWuXnLSR2L7HDuQYxtAYKRJDLRKF4HPjhfGgztHEJVcDWfuj4jTDSx3vY5zMaE9TDxBHL3uySvc",
  "key15": "2JCgNszf7mEAnbYbs8kV1j94tu8KDny4oy45ZK3Nx4Y4n5qWECahTU6s7ebZhNWJF9BsrZohsJFkZ7MAGWwuGvfh",
  "key16": "9puJaN2iDgTXbYkK2yYfGUTiVdBStyYQYwd7Nq4t1QV3oUQeHQf8dRg1BVR19SPsUjkfqACP3CPReM44ZGA1xxF",
  "key17": "21pfQ7Jwg5GHHHGgwkN2t313YErjzKVA5mt6dDjuZBEs3tabkt2AxxxkfKvEDCKobcqcNWtPtq5hxvHDXkzveveX",
  "key18": "4dkX2VQLf2JriH43Q5ykW4Gj5MHvTnW7ipv2UywwHwhJTWCReCMCB5VzPa9yPeXwhjPXgeRjbWn4mKgM7gkKTo3N",
  "key19": "5YBURw8jsVvsPWtHyqURKynBRkrLkevnYp9CwY28RxTVgcveqiWv9ztn3vB1JDm3ufhjKGFh6rZG8M8zHNwskwYT",
  "key20": "579LcE416Bqso7JpD6weTfhRWAg3CTEsbZp9W81sFQNZDELesfm4w67RmCgFnvFdVQG38BiiT37ZvQ5PJdgmU4qd",
  "key21": "3SXm6AYssjs6SbpkH3iU6FZmyEFVYMK4Xos9aLq46J1gutqw7J7DpDHzDQoHUwinV2GiWL5bR6YxDywXoLihh8Uq",
  "key22": "5p4uU4An9wTNthBkfbmeSkKUGm89o5mnzEbxW2u59Nm4Lzxfn48K9BsiGuqREM4cf5D3bfy9F8ptyqMMgYNNKr9L",
  "key23": "2hHTLbDKDeUfvJVAvXJdoDF9bLa3zVxmysMg83B2kWtZaj7g3cRFtstpPsZR1eQ7iqbUeU8vZX6YxL1TwpLK4DJp",
  "key24": "58q9WG72SFg44GUsfsAdEpwxXg6rEU1m2LcMrWbYSV7BTq4U5Edj6pLjB7UocigB8EGxTjzZNjjWq3xzZ1GNW2v4"
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
