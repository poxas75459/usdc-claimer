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
    "4PkxDXw8VxTSegFLSZ3aEcdYXczSo5gSwrb4sdF6xrRYLGAbqGEEZzYCf6DB92k5C2yun7nYjUu8cjcMHnCXe9uU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JD1xNZKK6VVYLRgfcAfSRupbscFA1HijJ67inDnCjL2qBsUKPv2CWpFEiiwDoS6faCFvJxxgnzDTuawkzfjXZ72",
  "key1": "2tZ7vMZyEB8xNv6hRnJHn6vj2gF3mNBWByxXhyFZZynRsnS7GFHgyYWLuQ12BAw3PBny7BHE1b4S6TBixTH3GAew",
  "key2": "u4YQGYBDkJXsij5uJa5dwcQfSJSW6zBxLJcaGa7mxPB26JStVwaFWVF5uXhAYFuZkiod3jFQ8LBfcKvDoUgVdD7",
  "key3": "35vnjeaZ5Jv1j4kecch1hiEQuDTpVszgQnDMyceiB4ns7oAj4diT9a7YwCgeBfs5HuN1dct1kx5iKZaGgWdJ3t6T",
  "key4": "5Ghma4jWU1JupxD2p1p5CqMJ3GHhqVfmLHkxCbov4rU32GJZvMPmwf1B3mBhoVinfgcr54a8UwmJTPPYHrhi3FWH",
  "key5": "UBASDgSiDHBWyCxHMMtCk62MuG6TEt8TzY7Vgs3VGqWfJtV7t5v6kLhpPFTPZGaDDMM9XeDbxVqFWDL8Kq64gs9",
  "key6": "DAaMRCYM3XSUWuxUeDHDurVHtkUbuCU4ACYcqFDb2Phtk3nvCXnWLT6eNePmmjgtEiqzKW2REq3RunuH9a99LSh",
  "key7": "4Zuim3roxauYdacHUYcCS8emXs2Tb7CKhmLKGzbTcnsyJnMppdVj3v5tuGWHQvDBNxu1WY6regLQJtJMs2jizxai",
  "key8": "2abtcUq6soQ21fLYLV1k2EbHbDoD1BG2mvJbhr3pC9puSy7fFVWKbQbWu3a5PV6xAuFJAuWni5PcBqhA2vxYTsu2",
  "key9": "2oCHwt9ZFbLMKFkbSoV7cyUvFpfr54L1QsA9keRkQRGbyFTsyFBTfWD1f9kVBenQvKrFcbDma3SDepS6GzSy7zCX",
  "key10": "2y2UdxLXChJ6SuNo9KwBcsNRgdkKZTN6C3JvG2zq7oLMBfTJqurxVhXXKR46tyCFeQpBkZUucFybcbDGq75KpKPN",
  "key11": "44sGdjA3XZR6FGXuFaUR9CsSNrqQJ5Vrk6YFsKWgsf94bp1cDMBJZxBTVj8UNgXFq7xjE7wN5N7SGhneZzLoYJcb",
  "key12": "4Va1CDZiYefqV46SVytEU2eWb4mETU5Ct6nmpRgJzgjAkrMbKcnaif4vzEoybw34JiDemCcrK88E1wFudjXhrzWv",
  "key13": "2M1VaGSc1kqtazTw2cF5nN3VGDLpngDHz83cbrYnpuF44SiriRYrZAJgx7f2czRN1TKKpdZLc728FhgC6iR6QR7t",
  "key14": "QbWPF5Ss2hF9wsZAGfdVJzrBAsNhSLcTVYWL5mZUefFZ2bwkdCNi3WCBE1AdSN2r1APK424z8wXCfyEYUo58rEa",
  "key15": "5QnaNTLgRL9z7zkXsdbCAk1vQLA63i17jFfyiR5oVr2z8aPqLJ1d7XE3R4uSGpVbUzvbGP86V6oC2VXX8L1KcAxu",
  "key16": "EPvQrsFcfWGB94jptRCxEK4vx7cTGtQx6oVrgU73JByXLUWt1G9GTVtdZ5hGXKa1aDfWJtsTdVBpuefqfn1yEmC",
  "key17": "4BgcZpkhomVPw2NLQLgexoyU4HLvu1g8PpfknGQC8pg3JNo6TaVJ9kjHGyE7MtGYgRX9V8niEpHgiX7hmY61SfLX",
  "key18": "2PfWhoSmqAF7uyw1YJRafF2pMFCaW3xByyXF6G3MXcShpTrYXC9UFEBMF6hf8UssEGWUoJtm93TzDdGBxgRQWA3K",
  "key19": "2t33a4NhjoKMWU2q6CpEVBqxDsrjdVy2BTf8GkJpw6oJSinrKWo7BYr1hnBSKPUi4NHmKv5MaqTWRZPDihddLgRW",
  "key20": "21F13havMk5sKBEPauSSMrR44KascZDcRbQrS1sn4Ur9roJi5ba9jRnqzXpHhoYoXY9EeggvJkbDu6gTcCCbjzBx",
  "key21": "5pYE5KKMsAnzT6Dsm71vaZVmrTdy7BeUyo6XSyvECFgYfSEyH7xjEAj5UYonaBhRQs11tuTaDKdr6gr3KaxhJyAR",
  "key22": "2PEKxKWoaiRP6sJnZAiDVM1tUQF8ZuRNuLuno7g3AY6Gmezyxt3Juz1sDquhanZMQVnBa5nuaYdBtvXXQF8hG1Qo",
  "key23": "2o9Y6oTdyvETz7yfRChYuJbjELvpbU2DNtA48EM2NznENiNJGmZXr4RvULHG9tRNNBRRDSeKZdVGAVtJVNX1Xa7n",
  "key24": "4xz5h8NoPcT7x5kfj2N9FQUMwpfH89HaEyYiXRR3bwH4BPUN5APo3YToN3bV1ho1fXy56UJ8ctQbiqBnBd7uxQeJ"
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
