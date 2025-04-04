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
    "53jzVRZR6cR8VeHfSYnmtTSgHeexFL9watEtZrKC63ugvHePUoUQEAGRz5B8ryZmonEqHB82JzoFTBdSnjxWxjva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGiLHHBVCKnvNz5wtxbTdW4D85MesY7eZSrEPLdxPFU5FZyP3uhe9EukQtjPU2xkCBbHrUgdTkxqg3doettVNAM",
  "key1": "4ukssGgkstMjYbu983T1j1h3mqm89WB3WBKmdQBqR89xF9f7bM1bXcpxPEnjjoKwQw7Ry7ZFtYNSyDmrTm9nXj6M",
  "key2": "35Cc68FrgYrdY7KMnKXsfuL1AdKmsk7wTmXfwZJY6c3Aqw2NvzZC3NqHV8UUCNkMUHtyUzUhFnKXTPe19vdwenj3",
  "key3": "4KwuYNYPRxc8iR1UadP2QTQFen6hhNTr4vUPKpkhiwmD9osQJeAdTe8rbeQvc8RDqyU8c7fuhpcxktuzzT3NAmso",
  "key4": "5UYe2gaqUVKJhFd7eDsrdrmwBL2BsHGUNesCCXKT2YzJpJoqrAngJnDupQbpjniYReBBwqqQfqoyYzoyLmGV6AMC",
  "key5": "2aDf3VEUV8MJKVUe1hM6VYz9D9U98PHU6QURNcK6MYKbyjKiBhrANfCucaJ26DgZoA2aabVZ8vL1Teh1WQCVhiMu",
  "key6": "3AYqm6XjbyX6yy1Ck4XoNt1XutYydYBBS3YF8mHi7pk58S5K6ZJXMsr2F6damz7d7E2YstHzUrNcmdiXnQEMDtE7",
  "key7": "5t3g3u8MEjbUrKWgHpBCyrAiPPV9pHLUU4i6HQtao4xnKjHMJk8Mq1sBTu81zCdNqtQqri4goadimJPENzAJ26LV",
  "key8": "2NVT5emhvbxWZmwve9zU7F1LEJVsM7XEnXuS1gE4mAus1ZdohohtM7UkKpMRSPp7FydCWagztsm699bcdKiCoUZw",
  "key9": "2qWTmSSNmxrensvdWJRndRsAt34P9FGeMSHCZarQeNUXtCRrLMCb1tFm1SmDjxGWfnF6C9R8rRt8hCQXKBvwaGd3",
  "key10": "5tEiXftDhA5amayY4a3CnCLRYVWaMHud9phYJXjvA52Fdu6GksPASYMpkeG8vskJd6gL5zxtrCyTvXBHg8Mh3eE1",
  "key11": "V8H8cjYbC88p4LfLi8rUvoV2ebZxXy1qK6EiyCTzFErUxgUvGECggHYZScexFNRNAvc2atce7JCFVnFDxp2Jvth",
  "key12": "4MxVBtuGo13dR1DHnKo2neSVYuFQtcm6mpavXBBhiFTJoU9Di6umLWGtQhCwxcTF9ReGu6EY1xevsVZKT9EY7mS5",
  "key13": "9sohmnnytAAZp12LyziZ87sFwVgHT1N8gLbZteRxycGZerQs2wTaY151SeKHNdWJNsi5RwT8LVB5mtLGgF4bRAa",
  "key14": "2ZPfuoUNVoUrSVEdbdtScrjfPhfsxPM6jA2Wk3B8dKt44RczoSFPZ6yGEFwFfAfkBVjECmjHaA4NqzL7KSiFWRX8",
  "key15": "2BRus9fjDeRNxPhb5tNxz1x1fDSHQ2Zqygp64VmPG3V4MscwiDpEBcmyzeJ2UBSzNXjfozSCXsBXm81kqdCA1ktp",
  "key16": "2AHHpPVvHok6pV4WixPVhwFYDXhh538pu6RwbNA5AjecMpk1vqeUgfij8o6U56a8rneeNWwWQYeDoGYubSjgwtNL",
  "key17": "47ssB4HMvvD47PUjVEnRRqmsZLbH6Q8yJ1sn2C5zavHpWkDZW3W5TJe574ggicwFnMdfjFT6ZemXsEeuNqbLE8se",
  "key18": "5Aq4PFbdSoaqMZkyag5WmBohwTK7Z7tFupJgwjyL173aFAG51f73o6xResjLNnAETXoHWKagTBjPB86q6v1V5AMV",
  "key19": "2TDtyTJ8MNnBgG315JUQGzPbRKUJMJoJzJCGmBsYXvbgPZRER9u7AijJaxmDjJjTG64kTo7mkuhkk89je68JSFE5",
  "key20": "2mfuVKn8vksThUjwcsHEsiUfDfiJ5D7AGuKHwyuwEUGFehqFTHzy2CwYP1Vn37yLVhsbrbDdyVTrs4582SCyaZfG",
  "key21": "3ts7c4gQt1ZGVKHCJiWpvTs24J5GVKK7fWiWx3ngiAuxdr5SLvBYC7bEsmdYCzJkVBT6fcJhCHiNfSqvTdqG1jrZ",
  "key22": "4kT86Nb3PAdYbcEEpyTzChKZgR37QXfyghiviESAR2vBQouimcktJ3qnTmmW3FdW42gpBvjKR1MmpGKNzGHJ95Ld",
  "key23": "2RugoF1DELpKCsvLSUzSdxdQ7ffxNKewQ2Bm2iVTCfiBj4tU6Tu6o2LvYfKrAgF1VM6XBzVzKnThWUvKgZmFZYn6",
  "key24": "K2FtPd4sKxHK5Gyn899oxmZYsUG4iE1CeGMvbcnuGpgZxFG5SBREPvTnJb5L5Qi1qnHE5mdbM3r4hyB2eXFiRGG",
  "key25": "sjNqtyYmNKiZsrBAduPB5AP36jjPix9j8heTWQAnqZxj46aezAe9qXrHcnGFpcCMy8pVqWpMoX49aAQvk7AzhZS",
  "key26": "5vBfgr1nzV1sM74sT2b8bkZ23CkTNmizRE4yTKSwQ8tVPu4EwGhc7F4C79ahsC8eryzEcvSj1mmnSFg81tKGcuMM",
  "key27": "45BP2gF9qbn8Sv6TAnNRMeWArThDeCt34qcFWYWkbNKbc1QcKkRDNH3yzUfLXt4L5sV5kszfF1nyRYf6gSSnA9R2"
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
