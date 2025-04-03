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
    "kiAiRGzoSnZXK5pN2zVrgkUL7WBSzwumbwCdfVSEPZf8AU56S8XuLcA2RLYnba8cYE4KxF8s3giVYQt9CPGPygV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5KnNa2F2jewTPGBET4r2A3gQLBkFN8tm8uTTNTjdHt3zMbRqW2spg5edWNXsyBz4vcf2YNwhFFk1EZja1kUJm8",
  "key1": "3Qid1TBAwGZyxSXJWRwxi6dpA1UbLfZCKjS9AYHXKSzpjagkcNsgZ22FABB4jCtheC8ZhD2pqwSggHoxV1d1u2KB",
  "key2": "5JeMqPFrME9a2XQoXu8ghEBoPSfBFcUM6rgswmeH53M9kTJyjxjGKscep4Bbwb5Jh5vwyFB2xZrRyh1xtQAwT5J1",
  "key3": "2t9o4RWf5d8LjwqymMkLtDG6jg8X4ZuJ2yN7SJ5RLrpDTszL9ahBt7Sehh6CL57DGsUtbWfKAsEtXCMNVP4hfvfA",
  "key4": "4eRcNwB2FZUCJvuSNLviwopvSWb43ozPbScT5ACet8yLw5nY3jc3dY5sevwwB7GoyoXkJktdgafdpFGKkdowZhBN",
  "key5": "4tEgymRKFhJL48bQa8quwF4Qpzf7NBqhTZKpW4DmU99tLtqyW7xjwcJaGvpJV4vwzVdg1p1WwvxBFwfwaqvBjWaW",
  "key6": "4z6ALevcFrPbbdFEVccA2SuG2tLf3gXiNYuW6zUzpYkv93vXdtuid8BVpg3aRsoRhYxgnmV1WHLzVMxuinfTaGjH",
  "key7": "5m8nijNhKXT7Bek76Hj6FeY2ECz2fK25fYUPC4SduoLMp7R1f9VgbFwrsdso5kjpKhWVuaEvY6Krs8aiT9m7AkUo",
  "key8": "xcMuFA7xnePUAtJs9omYthDp1js3VGsTod8TG9Ut4QzmaRsvKeQuv2ACgFFVuoLp7FA2mcKtKJLgeuhQ7C73DE8",
  "key9": "21MALecSUTzuyMdYFCtKsvmTAyvpdwJthWTJFHeLYLP6L7e9hKPLmMaGkUwBe5SWsAmK76u2RBpMSUxYpNTTHv96",
  "key10": "3PUtCPCmbCsN7QtNhNCf3V9QWmSkfmtJTz88Ug8NcDjBEDJrxDf4LcbjNiMZGU5u8r3wu8oaB3cVjjsjF1uria6s",
  "key11": "3Ni1K6vsPYDzArYQcU78g9kqeh3V6MMazdeYPDnsP3er2Zpeqxx5hCLFL3rnPDdFfSiy9PqpDDBubpfbEamAeKF8",
  "key12": "2p4V88GoAomg44SHkL1VUjTi8vT9koGo66tevNLmwdZ6yiYeRgavvWW9somkWuGBWDvBHPHLoS7hBxCqx5Wf2Mfv",
  "key13": "38wULp6Rd6DGv1Ux7zpia6yzRAsUBueKt1TCfBh22dhRR9Fiq3h1V1SAze2DWJ3qxrAm4ywFRVDknNvPFK6pLxZK",
  "key14": "qAuwBPCXwEnSuT1mffrjJPJs7hofTZ7z6RpHPoEDXnfVoBfbChd98ytpkxQvWNQEZrEjqhNtzzfQ2EtfYj8Q4ZW",
  "key15": "5g77k91JYUSHFTsASQ2sUYppZfZt8sjeLrbyBEW7XnkEgiEYAv6R2gyeaaNLsh8VJsJhCVr6uv77fpMAEL6jRnGX",
  "key16": "3qVPUUN6D8oQeNX5QgTtqVdBiCpPcnWDUseLorvad1PwRdLjkyLNBtRcXFqqsXASRQs3AR1KWY64e1mWUYP18msJ",
  "key17": "3HkkE9TjGo5g8KFuwDZQKEu3WZS9TgpMrEiCRhR89NFRsa6yyEfAMvuzBU8MBWHoLNSdRV9pNuZ3yaJnfTB8xUZi",
  "key18": "5qnFDwchCzrdNFZbNVK53ARZRd4Bd3Wpenz9N4dHxSbVrFpw15SuHFZ4fP7ynYCzdVprGK5pT9yopzzTGP11rrdW",
  "key19": "t8VyqdfRFwqxTy8eWrmPntcgvPrD5akkS3p8KtHZ9mBW4MDBiHqubgq1HHcsLyQVoPZYcVGY2EGVFhbTwdHyeRg",
  "key20": "2tV67hDXrDFNoBwJWtYNEQygk49niVYN9N4yj3xdMwz7XgF8kJnAYLZydG4gsbpovxcrHsE98kZVWP7er3f1cJDo",
  "key21": "4ju1cJ6AE7GpPxACWcaeLwXZYh9oAMzoaiJuxtA1BDJCCPydm12ivTpMTGZX2BCD2Sux3o1ThdYfKP6LvbJaVXdU",
  "key22": "33ZfssZACqw7mcQCFeVGsmdbRXxES1ihQGTstzu3z3Vb5mNxDGPsUgMdf8DMTuEDftpuLkv66e4opECjE9ALDCtt",
  "key23": "2ZUt42rBpbM1Ck9QUeACipLfqZWqKtHjcz5H9GoyYmkXi5QxQ5aDSf5rqSsHjUnQxDr95hQ5x3LPf93AxzP4Pc93",
  "key24": "2BsAqspWS6ZBdRUwipbxo1uYnh3bN5oXjtMKJvuzNMV16Aqz2FoF9eMZTFK9XB5SxcBrMjyAebvEgNnG1UmTHvkc",
  "key25": "3XL3XyvRAYWJvsH3FTKxSYyGZXEqe6tvf8ppHmcMsKX828P4aMmLf3SX3BJ56ZqLmDK6k7A2kjdYvFZdJqSAHAUw",
  "key26": "2jQvtPoztqkqTscp5B3g7X5bmCPzzqwCmHRvpEs6bW7nDCsB2SRGFbrc7Yo5w1HQBCy9Jzb7aMR1Xz8Asq6cE3hd"
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
