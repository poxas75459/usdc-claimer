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
    "nUEDAWwiDFpna1yY49EYKVmopDRYBnvHMSEdSNVgQb1dxbZ4FT1Pyv35psjv7nfaKmDRVgFpWSdg9cABCy4zxzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qcWUgDMRNCToE2vKidrgFbo7ZG4HqZKfLKmXMSvMjwDAXvqtuEhJSZFHiZZvgwMJNWuszaDz57wd9zMsD2SBAdg",
  "key1": "3mywJCPJCqvEyCxcGSdNvFDkuXvXmUkKcyCycoqCbgEY7Ps2cdKG3YpN9XCXY1ukki4ihow2U1BCQrGmzaSd1LHn",
  "key2": "5kQzfg2cakzKFDosWbSUNWpUHHBTGZDwgDRcfehsXknSKfY9JBaHtYWgdYqxBcKVyvuLXH2fsaEh4G6WoqQA78J4",
  "key3": "3fNYACVQDRHPf4Kvcj6iXPFbTk5skcczTbVBkhK3AjXfwgJByh2BYLe6DintJJqPUpx8skA21fCsJdn5zkSMUAXB",
  "key4": "XmBBEcq5F8j5BB1rSqUbSVh3NMgyosfoLafiqJGZQcXYKkKhpYYuhpZ3tsnzKPspPfJidDwvVJdLQ8RKjRJ5SRc",
  "key5": "2ht9sJc6giSyk6is16U6BDgJrXNk9j5nKVPYn6BojYu9Z6W19ABX8iU24NeqL8yvvneQD7wrK3fzr4EVrNpi4SSH",
  "key6": "568dnDBouYmUjhJqDeoS24mtjx7sjpNmyCbEbWwD1Amk6n5v51yyCb1DHbbg9R2pbWPonT5w9X636aBYCbvEfK3f",
  "key7": "2AtZQDAr5ueYNAmuMpTJ2hej9fqKX5z9s34Lbw1BLCTsyZhDrSG4iMUi5Rh2CmCdfHusn8HCtUATMeLRUHNfWasX",
  "key8": "CP5xHdxmk7yaWyGqMgHa5LRhEHpxE5kjfP9bm9HrzSp8TV1f76JdpxWenvSMjoHicSYraCA6G2JnesJ5Siwiv8J",
  "key9": "33hzc4hbC3Q5PnfSFUSZsQC2PBqU2Go3GYs24XDnhKhiLS47n5zHZGXRB6LNDdFFutmQChMYEPjKDMz5mvSaWdH9",
  "key10": "2NfWYVh5BFrJuS8D8ZeZVmdHUeZ64536fVo6zbwQUNg2jUBA1JtqNJvKoZxAcyqzJ7ojSgpJRjmLwAqfD7AEqNiy",
  "key11": "5LCPpuNGV1Haru5AF842Fevas95r6CHDDjZGwzT5VywrrXxFqeNnL93u5As12XwJMScqMV9pS1wpfpGS2dzkN55",
  "key12": "5gnEmM6f3YA66vS5LHRWPx6iy1uLoUD3XegTnSyUppnwDSEUbBcDaHN1onHoKVrCD17erMEh8kTEhdkecycngV2x",
  "key13": "2yPgN6gYAUrUeDTRq5tMkdbVbNjQNM4dFMcSLQ38HQVriAV82JdRPSJhQ8zUA9UWPQDZ6Mh4j8Ubu9KXyCBmjqdp",
  "key14": "5Us6gbR7saym4b6cmYT5BT2Hcrsu7NKmh7Ro2QwD9yQSigNqGA8NRG91wZozqdQ2zUzjtopggvT6XEYZ2mdq8mE1",
  "key15": "mtxRD7Kn5ZaCCfPpBwzzmsRtSvjYqLizPG542DXVEUm1eVLUZb2w5uxHcJUU6EUPGbxNeRuPaAGKGNT2wbvdr7J",
  "key16": "4i3skyWkJGEaB9kYuvunWdkR1sY8jxngAPM9UVZnjKqRx9RDA65x22hyPsiEeGbzQoxStVFWBnxeaphKfMYBkDdf",
  "key17": "VkQFQTic8EGEDowDAoFpfktZnWEsjCwMhME2SuW6meiKE7pJxLM8NtB8rjQwcCBHmWifLPLyzG6cwZevExhjw6V",
  "key18": "5MGGs2Xugy3DRfYm1MVsmx6bwSCFcpEB6R9Jo2VMQLDMvytekpDa8ygPDUucSzhkwW6NRyWmvLnrkWneeR3gdE5h",
  "key19": "2BoEzrTXvo5jc7uJz3UiF8UAejnuvcwnjaXnBUpTVcWBSt3ujxNa4JirVZT4FUbFQmsWGdo6a69VJE1xoKgWfrLo",
  "key20": "1VvMNUj14ZkdJmtryX1hxaoE4Z2RBk4Nqgd6AGRGYehNxQfE98NFLpw5y7FnwL8ptWk3fjntEhmgY3sRUJqGozE",
  "key21": "25hhxDbiJH33TfCPV4R2hqAKpXfm8zozjjsXWm7hn4XdPxydersyayyERpU4Nou7KMQS6yJLBi5KPaRfyxGdBqn8",
  "key22": "rbesC6rNFFA1yaEHrTYt26mzCm9o5D3gwjqP4nmeMFDqZad7kb6K1burGrsW6MC1VLN7qYnPG3XiJ4V8vJ81Apn",
  "key23": "z48WrrrmbsnHGVr53a36mJDaAPabxQgoSmmj8H9ZCngLuj5kz53VpjiDQunhSzvaRkLbrV5nZ3EQweHCTRJFfXm",
  "key24": "223BCBpZnnGNzuetUosk8ifqmRchpyWJpSf6D4RPRqyB9GXX2V8hjDgifGAnZz3rzWqTP1tb8CJrkNrCD8zcmTxx",
  "key25": "5bwFKCXTXy56GWZnBwSrEcpMZC1drSHfmtcghfmEjPfTVjKWUer2u4bRFzwQ6vZREYzwd1uXYCfLk92YZ8zevcFM",
  "key26": "4xACUtjhHqT8Gq38SwQJwGwxJAKS971seSgwn6KZdYXAzLLnqzy2GL9DdT9UFu1qbCbbLRXW6U9waP7cKZeaEx4a",
  "key27": "33aGbsnhGpHci6FVvdtSVzYCdaKzRCwEXAhfGQJT76RziTgGMhiUjdoTQGXpMppKRsFWQutcbWJTiLYFsPV648qc",
  "key28": "5QsDDm5zYnwvoeVTxThESEvBr8eKLiZyvmoMQu1TiP1qVKKP31LU9QXrQ9pJwr9CVSX995dvvNxn8BzBoJJc1NSh"
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
