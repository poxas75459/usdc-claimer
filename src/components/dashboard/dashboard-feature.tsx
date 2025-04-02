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
    "VR7WeYntGxgBLaXvjdShKULR8NzfQMRaYjM4fuRCi7US2zaYaXHaTCBHQcwjndF7LQrKgtw8HfmnsxraMZmwYXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63r2LHmyVEcjiSZ974JsAhQQxa7eft8Mp333aH638LWhkEp7iaPRg5KphxmPiwg6cBRzcR3LU8M4D9CBwkdKboeV",
  "key1": "2ZDYguAMybz5gFZv63FGDy3qCPdkMo1xx6dWLh6oS4UyydohThdZ9CtTLsku1qiWiEvxCT8axSm1zh1yCu5mBCTb",
  "key2": "5KCERoSUroh9asjU9wkrJETEGfymfZy5fHpRHyp4ng3enKhk95ymaVDcLNMZtyHVTaR2jKUXBbC87G5kEnWp5Lao",
  "key3": "W5hXvLaqH5Dt171saStLPBWN4T7wLpzmM7sabbJXSoWxAjY4Sz5dZY8WxiZ4ZmfegUUJxvbGwi1kAmdkF6anpaK",
  "key4": "5ZLPBCQjy6uHeRKgsm3G7cvkXsadWk3ZkZv2xjBrSw3JVCtmu7Jx5eoT3bhn6r7UZuPjMoKa4CNSkHsLMStwvpSc",
  "key5": "4wADAPUHgVAw7kiCPKiaMLyCpcF7PJxYatX14ipZgE7m3cs6K7uQrXktUGMaRVzYKVQXWchKEjvoDVTKNZ2q3wfh",
  "key6": "juKWMys4FP7HYYL7GpLwjSUR3fsvvSm5qadHF1kV6tRfbb21Veto5Tk9EPBUZMCw9LSLn1Ac8V3RfF256gf6Mvk",
  "key7": "4h6rWoeWZoUAGTdDoEHjGFUkKbNMRWW9j3PSjSQq8c5x6SRHjEFCiqEUmW6iVvSwd1Vi2V2r79ZAHc6PXpf3ghw",
  "key8": "4CPPn7ftFTB94FYCBS5eUnK2jsffENJJQYMrzeDACiGjjttGQ2y53GmxH8wbbCLfgC8RCeDrd4NCHFG1rDQxGPrR",
  "key9": "5tGb3CFTErBBrS68dphou8nqzsf652REN38mZnmeSMB1vnQ1TGU5QNoAPb5Y5AC6K5r7n4h8A8vTTiFzCWzbHeTC",
  "key10": "5gM6FMkpmrruqwG4sbJWkFSiCANMbQZwtpUbSoipueQ7Z1MBUmyBFAvZfBimUjn7B1yfWagdsjcdxQsb7Jf6hBgp",
  "key11": "3sEyjJZa5F1PDUwEQtHKSd7LdXiggy9n5k3j7TADFQTKwp7CDkU52dQQb4YYq4jcev7arS6QLn7Fr3QLCT85iHr5",
  "key12": "MgWBzWCSZWoAcxx8nu63yHmPVcbEwqSae7CAziKGqUii7yr6WbFrAbGn3E96NxDVvJV4syB1BsY3HFYwfgw4iGE",
  "key13": "eDEMApMB1xXPD6B5REfzNCnyLQKgkuKmLm834KjntuAwPnVCxwY665Hj7AJU5ZidvAEZ3hRdPko24MJ3toGnTAp",
  "key14": "eHg7GfsjpGP4QkWYA8Gc22dbGsoSi6tTnKxJuZNbNHYoKfqvM3Tt84kmvLBPuEJDFeaKYeTFfjoh15XCoiJdo9B",
  "key15": "61ewxxDXLaEmNYukSTxYv5gZPuTnjkFb8xmQwdw8uKtzDq8ywyFJ3YzmoL835XodY7S9stikGB6wnoRwEaMZwBXa",
  "key16": "28yAUaAbDK1ExvQ1HR6JW6AwD5MEfogTzKSeKvNhJoqPB22XUHNdhHfa4cfB2ho7JmmfRHFSFjkAQDrNyRRoCyFP",
  "key17": "4qDUkwXWygi5L4FaUhgtZ6KVgF8SoAEdtjiHDaqUhVV7ebsNSawe5EWUHnY9RAeEcoLCuaMjCXUGzbd3qm8KtK6t",
  "key18": "4zK6m3Xy8GimcQAiEGZLgn8qzwd5Kp267XFu5KoRY2gE15dnFuaC7Gz5XP1xCb2D2NB7vvMK6fdMrMy5V52KHuZt",
  "key19": "5VVAb2NL3qXhyXoSV5e9VdSYQYiafhZNEAjRveUXNmXL9HDLqhrmXn9kPJrNFSnmGKHoRsbXMiPFrpwD8XhN8ejB",
  "key20": "2DwxCd25ggnfwHC36DDP5B48kkY6NLTs4mDYH5Wc77qok2j3pCgLUPSyBzz1gxL9jZUNoAkrV92c8SqQqskNRExA",
  "key21": "5bhiScdaY8CqCKyXz6eZV7LcKHymQUYRbwRNF6Wfn8CGfz9sUCrkhFQbis2ZdyBT5cwv28EjPp5Ws8dN561azVGG",
  "key22": "3ES54gfrZSu4CADKjwhW8Z2C6rER6r9qtqcXHMxKe39Stf71EWXPseB7mCgFYWsHQHDQttAecRkvdCvnSt5whMj7",
  "key23": "3HMmdy7ErX5Wv79icMtKocEiG4QDGwSME2Se36r6kw9WZxcjLLnH2JjRyGmaPtxjakNYPMKdhYEyMX6jAZqezhTu",
  "key24": "GhzzcNcH7vYHS1ffSdMT149a28eCKTs5y4y2Cdvn5oD9pLVUukT3uA8HgRLU5zYed8kwUf2cUqYnPSqkv7rVghF",
  "key25": "3uZCDibiiczdiR49Y6eN3spparF8r9DVjg3nwvmFacVttF9cjp3Kd2iJ4d4wqZPE5MtLsUDvrmQTWWimGCfaVcR8",
  "key26": "4shdij5ahwWcivmM1YuTw1NHwitrZFyKJcoXPNaAj1V2Tu2afpAnJzn3KokobmMEf65Dnp2jXzwjNtCb1c7gp1JE",
  "key27": "4aws1Vr5kFPqVxWkvoYQre4YcjsWps8Qf2hQ8xeCmooZ8MiYvgJw5RXqnos2yXdANSWFK32BZCQ8dP5GR3rTnMqk",
  "key28": "3b8oZAABUk82qNvyuXHbHQdK6nDVvCcgaxnNx5tRMdC2qrvRBieDEXytX42NPMcboyvoJB3pi9mN4Lqb7LWjvWvV"
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
