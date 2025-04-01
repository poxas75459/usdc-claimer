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
    "5ANgMzAph1CJXXmH3FbFy3xQ82QsS3M89KzhRanvLamGm6CbnksHrnYXq3H22XsjNf7S4epJGbf2u5CZ8hVicwRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PiGNpmcDMM5HQVDx1TL7xhALGAeEymv5a4Np6XbCJCu9HwGvb64GgubmkPpb4VZj7h3YG2zy8TMboZxfjpFqvUC",
  "key1": "wAtSf9LwWQ6t31vknuMiX5FVL2cUisKrxSuUr3gNBm4qQE1QfZ1kF7ywsevbvZfsUoq3yNcpJSQsiJc2W5oGNMF",
  "key2": "4XuJF7R4kJNP5oWRYW9msG72LQZPzxvL2y6NFiuoAzGT3h2GoQixQ9naQPj62VRaicJMUVVpqcybinRgRcmgMqZ7",
  "key3": "4ZxX8c5mfqVAoW1ggjGYfQPySUotqxsMSgPoxiMP46526ykZAU19FbaYmGHrt6BQhyUYXPRYRxU1WgrGwJJfdr5f",
  "key4": "a13KhM6MxNq9CPg3HjE4MiUSiqq1xd5JMaYT2WUKwjk7K6JXqAs3yBPGM6ZwUvcM5Ma9tX3mjzMKYr7rwc9aVJd",
  "key5": "2AwBkktFQY6ynHvn1S2GcE7qon2kTRZTuoNSEyE5LNPbXWuYyuDS2SrhfLVsZX8YzTxptMeBEtSYUrBVyXMR3stq",
  "key6": "3tT1yrvoBRsAMVbJwwKUhqR5Cypss3xG5HKHs9fsi3C8DSbwcQkoVKuyfpMBWKNfkqeZMK6V5bCsRVPzojgJoTzz",
  "key7": "fr3c5yP4K3sjmSFL2pJZmQYN8qnj9MnCHXme9Veb5os9TXCoBR4RvMWegu6zNKNpyYHdnAFKJ25JMu9n4u1mcM8",
  "key8": "Zqzjs83niXC8VKPeKprdSgbwentpyyQeK1EHfXwkCHLfQ6MoNnkdXtMwBHfctSuiko47GngpBdhBUC22kAwBJSE",
  "key9": "TST9LSn9sstJEEXnfbMsjY3ppgXLPkq6KutUsFL8CTaoMvf59qXvsp5NgkmV3ecxQX61HYD568bFofFFzUQ16Rf",
  "key10": "4FBxnMi6FZmjho7dwoVRc6LydbiZPY9r9qLe4wvdjRjSTbzVwbjufvdW8nmCtkQwQUWRHC8SoxCmHqeAuc454XrQ",
  "key11": "4UqRrYPQoG6KgjaPbqJbQ3HbDuZo8X1jvPZ1FK1DuPRwqornrMDSq8o4SmGWuBsgfkxkjtDQxLcmrLgaFXvwxwUA",
  "key12": "dy2iMmZBnrUfFGcG6C6fjY3JpbeooD17c5BQ4iBs6fdqm1wr8hy1doRRBKsSeiSv8QWBhD89mZcC6UuruTdKVNW",
  "key13": "2B7UjzFpXSyALyV5c3CDmEdjLrw5f51UW7abi9Wgatc61UwT6BbaJv1kbUSW7YXnvjbFDUiWntqPUoujFkFk2pT4",
  "key14": "2BKizZBo97vAY89EPVvLCkxcQtNrdUNMU7u3WAmk176j6a9E36mJstnvjtzuVzwqhp8ZHQ8nS3DmEMLPQBuDPUAx",
  "key15": "32CzHnx7CnNJoDjD4qdhSsYBYRMenetgufq5vBt6GdxWmnVHdmw2Qhi72boo8uvGhiMDRASe1fxeYeFCzRgP1cyf",
  "key16": "3jjqCWdgFhJf4LeWT2jY541WvqZPXrPt9gAcFUPhGY6FMJ25q39Ak9cpsTiELL5Fg7uMSD6BGiJ331h9UopLq8eP",
  "key17": "4wMHNi7eFCLC4MARtWDZ98KRHb1LVFJP7c6Ds5yosA2g6EHVqVK96XptQm75E8byhfKfKmU6UZZzxgg3oHa1GdPs",
  "key18": "25anku7gioJf5urND7pW6aJHbAci2yUFiW8jfvz2dafwoaEBb61NTD2rZjxVwXE2CC52KeUXPaDNFyXzQjBV4U9D",
  "key19": "4G2KWfdZAFGP76q7YNS2Zp9UJszigQXFcbLGtnfQcuRnPerkN6Bs8zGgcrLqecjY9iRiCoAgvHRBxC8CXW53KKSE",
  "key20": "4oF8vyuQxa376pjteduSe5TrGpkh1gtNciB6EmouQq9veCBu4wVYt5n6pkZkTDY9oZRjGuU5CtRGfxMahRN2hDwK",
  "key21": "5M1KpuMCpFB4rjxkJ6Zk9BLxw77S6EnbP8YGr9Nn7DivkCifm7CkFhkaEyLKCkQd4sxG5Wtz5gBBjtoqqMvExwhi",
  "key22": "3Nw9boVqg5n8eKC7o5bNmfJHKtZPD3MWJK5M28xF9bAHjZqfesB8czyhcsAQBe9rEuXAcir2j8fgZdTSzzzrQs8x",
  "key23": "2PREMr4Vw4yaAJPSgAMHq9QMDEmm7Led8nHvsqLmhPDxUSSZnJiyrCHCZ5w59U1Mp7k4XdYVng6sFTtaaovBVevj",
  "key24": "2tapjgMXmCuo2j46pAqoELgG1u6vCNTwtAGCBYpoy5HRumnccrP8dS97mC3mBVBrQMFzrLvwz9q9UxtEXvqLJvea",
  "key25": "5SorB4JkTgcyHnnYCZiMJ87Q6NPmpycBB31CX6EzhB9kNVPzpG1rAWit2hLHcHyao8xLN4D281oAgaFJzhEQ545u",
  "key26": "2fPoXyovuZ6g8haJh4L6jBXjd6QZkSG54M7yqNK1QVGnGR798TGh26BEQhXxPX3kAvmnV2J8KSoW8i1saNx3x3Nj",
  "key27": "3aRCpnw3QNDa51VWqgTDwBMo6vw25QweAQ6modkFcrHkiK7qUf9rBW3xvzCn569LZ4eMGfu5DGqfKizTvPExmy6e"
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
