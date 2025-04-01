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
    "48psJZNhNYLNPmYdW4qtMdtojf53V14rNj6vLDv8Y5yBawfgPCtco8zX2aCpcyDWmBEEKpPQYVSZ4zgYrmXCfvJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xnjZopbWym9JM38s7zmrbF5mwigJosxXV537yZi9w3xuZx5NqSK5uxYPoUyiMRb6tiYh3qHK3xBRuXu8R3MWxXb",
  "key1": "65eueYWuA4JqUKs9uauWCyA2Crnnc1FFmuGESfEjfSC7qwvxAD9VFwja5EyoYHArgjiitiQMPK8ybqgRnveBVeA",
  "key2": "4bku9U3Wdr8KMANphM3YmoM2bWtUs8FEBJDMiBfCKaBwvMupZnYzmCFrGwsAwDjCFCnMyqv9gWhMNLEmmtyZAsMA",
  "key3": "3gDQaQ3nywGAJM3dtEwaEiSH5t5h4aQFehgxfkL4tYBoJgWRjnh7upv9a3Uyh5zR4agwFFYyS6z35ZdRnEMaCjjH",
  "key4": "2kmJQWG5V2XocF6JSTHwhPiihtZCZJdfnNzejaxRkB1SWnSWrK3h66mA3yimb8YESre3gFWUyjyQTLXtQVhb2MAk",
  "key5": "3PA1Cja8B9tzHDB7yHqL8duBN4AaRbg6MWX8eqTpFh2giNKhZMYcMc3EzYjwnWy2v4hL7Cnvrgs1W4pymp53uoiB",
  "key6": "2J4yQbzyjqvr6fqUYSV3E4WvTx9YACSCpPGxf6GqenRN81fU38JxaRVRX2K48GU8f3ccz8oVUJ81KwdM8Vv14WS4",
  "key7": "vRcTzhHY7xFrW3Lzr98kMuaac1qFwLvwbEVHkxyQFawS49SKko7ZLBZUXBTvucY3KVyyaY5qtyV7cgaVA6vys1q",
  "key8": "R3H3Q8b9jQS1L3g2xP6rNZqgGktt5zKGXWmmyF8EbcpnnNA1wc6FxYvdmTE76EF6ByKqTNcS246bLkhA1yrwXMo",
  "key9": "5AzNkGzkgpzwFnu6DsvRc1ZbUCM4RrBCaEB9GyqDrR6NZN9MB37ja9NRyA21EBEFeZZ7Kdko7m6p4iXvQVHmFeKj",
  "key10": "3wav2JpJw2EeZPwuZsJ85PpboQbNKpN1s7vxHqtsV3UjfjbyTZiwT9zMDurmYY6ymdapwuUuvXkAo1Sc9MB3qBf6",
  "key11": "5C5vzzt8fERpo4Rha5HTNcDQgJxpnoeNsd9bW77YANraPNnrMrTW6JxrdL1sG9VrG5qSim3rbMaxZcDvqzMfFqfm",
  "key12": "2yuuhEidLgfoZFkq8psBreJ9S3FppCBc1RPBQ6M4hHegcwWwhZZVCuHusuHHY3nGmJ6H2Sgt2XnAxoTQUDN5fWKQ",
  "key13": "5vvJr56j7Kc6GHRr2ryixZHXkfTEFMQQti4MgZrrJuZ3ibdErFpn8PzDkGGt4eZDEctWN7NNZuwyMdGxQZtH4c25",
  "key14": "3zwgXpeHRfJhPsTGJLyRKc8uHzLDPbeaXbhrhGRF9A7yuqNryjUzsh8RJUEyzwYuF2gZyD32we8DN5p95urQoQoM",
  "key15": "5cYCsphA5D6gz94YEPu1Ymbqxfg98qzDQU1NsigDRZyxwxMn4B9pGug3FtLLBkE5hjeKD6dTFK3SiXb8rH7MGaoH",
  "key16": "2KxQGbebDBVbpUvm9GbTEvK94ZZranv5rUTaHV8DUBdxbJuTbnvvzz5rXvKAsTv5P9XwamKpuAzETqzhCa7CvBWQ",
  "key17": "QEEhKPQ6umTdiCySUcSg37Dj5J8jmD8DrrAgVgcrn4CNF1oU9Qm1nPa7xykvbWrnGz8cA96PqWFjaoqGWU1dx8z",
  "key18": "4UPP7KxyKixU2cs4sTcZxvCrYf1DYFsvcrGqQc43R7ppeweAXUGLTebc27VU2uz8PGfz7utDtKoaBRmHgYanLWsy",
  "key19": "3WRAHpvUwnyffm38tN9EgPzrRC6pb1UmZLfX46Lj7GkJ7ewFNrgxwNiSUuu69W27WjRqpi5vEZis24hswbxJpANF",
  "key20": "ypsARJLhCP9xFP1zqQun5bY8uFJkkfKhinf1u1DTVc9CKuEHMMwsj4LAtv7Qkrr2vE8VP7BSZDHrNE15SqV8y92",
  "key21": "3gnGbbSqW4dADYq7K4Qngmr8V5y5x4Y6aGnRVkf2y94uWWhEA3xhzMSEMXU8MdnxHxbGFq8ZY8LkVEAgFYMfEcik",
  "key22": "4B9Evabe8missrG4rv7pE6cR4Z4ANYY9y9Ny3QzThGBYvHcH5kAAHusJsnsVKW38AtQAUpsg6twJhoBijk3Y7NMN",
  "key23": "3mx2CRGQE4irrGmkPt9oa88wyUzAYkd9QPCpheMXUhsvo6q3FXTnagYdyXamhhvjDVxm9jQEpFjKPQq5ej6sdBtq",
  "key24": "46cgwjJX2u6iJj2zXfkkKhp3K4HXUUMtF9qdecvXzeFQKyRqH3zS68w4jNrL6E6XxmE9bQzgvRyb1ri96b9ofCRD",
  "key25": "4Hs9vg6iEqU8U4NVbVmCS6gN1gcPih5HhwfhjGYM9rsedMa89GNDep15BJ8vmfJeRtdPhBPzmP1GgRHKZ4rZArqM",
  "key26": "5gxbxVPmxJFqfxNC8AdJZXGdt2SN5rpYCt9sgsa1guMcMZmbkbVMNrA2HTi3xrXJsU5cEQxFg8SM7keX5P444fxM",
  "key27": "yjLPHZ9g1AU1vUTKtSutNb76f7zq2mzrQWqmvq7Mr4B5aqe4JbfsB4gbVbpBSCzpEAPwxPmjFRCYp1JNr6wU63Q",
  "key28": "5msNHBpxuGup6hoRMf8YZVTQ8wimdXBUzWvCL7GuqPJ7QT22WdZTGfx2BbaViKRTytSNLMgLsAG26FGzPR4wDjBn",
  "key29": "4RQZv7V82RjPjyM86zGNEWxyb7HVGZLc9TC7zsmYCeWsVFvFRhREJjz8dHmF9PviaZ6gAKrcQKrgWRUdu9w8v9yw",
  "key30": "5EdjuPN1PSQcwyUYTc6tMddJtYEfKwLrCGFUZAMWL6USfmn4MpD3CiPSDA7LNwFw7wZGYoM6TW2DDk7Z9PXTdkpM",
  "key31": "2FvAnd4SFjBPpp27QWrPzoxofMWX3nmMX2xJW6HxqU2FKFuaa242HBuoDZFtjE44h3uP7h7cNoNm7ZSJqjCpYWJW",
  "key32": "5r4hzFHQu8GfZkSJX7eRAPU1zHTG69Aj7PbmxoEdpDqJVSwSAQXJJqWhvq2AnHMja71n89x2T4wEEVd3mPrf9Jn9",
  "key33": "86NMn1NJ2YSjBr99zvX29WWUvQAaaqChXT8Rt7XefPQ4gFAKPumPi1Z9eknnhpWb721eSyiGZGwvMTT3irAMGAu",
  "key34": "3mEzBmku4N4sLkhwB6xKpBmyiaC8BNKfWbL1wjoTZG6gM7imTLVrEKm5e2dTQP3yBskqqHqY8SqDn4m2cjn31HxH",
  "key35": "5rbRnafFrNUapY4mxWaY23xrbKdDB3XghBA2vfATAAK3QVPiNLGiZ3azJbxCW8PPLkK3TuzY4YhH9ePSeaFp2vok",
  "key36": "4qu4eFzeom2BMAW6pYhMWiJj1MJFppayoUUBQ5dpbPGyfb3uwyHXqZTAAx8woVdhkfhNRLCSQgoGNqPNgFi3v9eE",
  "key37": "5mk2pn4P1BQ2ddwLpjuyMU563jiE2oojthypW8iZNgBHg79RwA2EVJLZpPfkQE7Z5sMurrtYdPvq63vPMkGQJrn3",
  "key38": "gxMfUQ2usegBLh2jV8mQZpphHCTcSB2Ha4TPwGC4vLpcJX7RzC28kCpUr3TcwY7fiLA9sm7vSkN3M44mM6vF6vF",
  "key39": "3hH4LtxVzeDMWZy3fVPAR4ETWSKxxPgLqPdc1YKBJXQJcaccihp1e74pwcXdAFzkKpjEvCg3gkskhbiCHKZJVYYp"
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
