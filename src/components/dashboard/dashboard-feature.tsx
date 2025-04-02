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
    "5MWycvLeJJhZ8UGA6ykunezzcQ2KgWtLRg6N2tuhX8KcmWo684Lv13TfTa45MMFhxWRsvZKhHbtMmbjvbLnRYyjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hc54ePAQbnzJFVa1djWhg9heyDDihKEt6hLWSiQ769hdKWqRV2kEQTpikVCYpGBiYAJopH3T4s3PLECu7JpSfjY",
  "key1": "3ySZFLswdHNHyQb1GQYvL3KK2nBfz8zqwSxxb6aTdJqhnQEXxA8aHBQRZWJsN1WwwimbhhoGwJghGiQntQm3aBtA",
  "key2": "4Etr4yxXxxWaiWWntWQVBRJJh2eQ5mTbNZvPah8wyanMcsamZqbdntCmT6B9atByHABppLHH96fTp7Yww31MjDsc",
  "key3": "2iug5oFtRfdy6sj69gVGYUdFHjovgvGuFgroYKLHBD2p37ofZPv76gUeNb1ok1cMWF4vH6WFtsmtSSwa97baiLpT",
  "key4": "o8nrMMLAMnytws6PbkEDJS99jfFxn2YisZ6eGVNDnQrzLisF7eWAkq6WyuZDa8iMYj6NSaTH4uYVo7DQgnwsixe",
  "key5": "3k9BHNkzh4SspTEQzHBCcCVEyuGGo8hhyoyBaML8SKUzcYP9TwXoWqiBuvpvYFWCiGfmt3dbxsg11opA4bHbRTaG",
  "key6": "3wj7SAjFUmSz4WpHPiPhFAcEmxkZspBo7ZYkFGsYirAQTWmippBHTrVGYWBiJbxdoVCWXNGKP3gXbFzShVQwBN4",
  "key7": "2BE6XZcgdEyJFGfAjtXJgHAp3rUs83kGNtJSVj2iDRFkHquvQfThdbWW9jwfa9nS67ytid1XCd4VdcAZdFkRjHgN",
  "key8": "3rxa8UcrBDN4t32Z7JMHFqvmQaLNUYeV8DMFWHL9nd75VhXdo1CZZWbUiN6zQj3JaUGanrB928aquwmvPmsEPg4Q",
  "key9": "37bW5ndmJjkuJtKgqs64k3nb5YD9CKELEw3LCqdXMhZfHuAHdxs8eVwreDJnVGWTRFJhQD313eSQMfA9zZnTEXt",
  "key10": "4dcdHzFRdhXnNvU9LRbgjB9mRXJXpxMvUZcCVacsZzJpUdeAJUojAu83wxJ4VMz7yW1uttaq8d7khqGTvzwwwsSt",
  "key11": "43H6xm7JowtQy8oQBLbPkPr2792yCxeuY54mBGjQtFxRjcP3nHTVgeMVQ5MZyuiS22FKAa6hw1QKvfaza24BLhxU",
  "key12": "5VGUevsC1aE24RUpBY9Qf6uHBWr62uETkzbW29kfvZYeRB7t1YbP7tCvhENS9pqaNSHqhKx5tMa4dDrkEGaDS2sX",
  "key13": "2gzkAyFgqZ7GbdB8THznN95CC6DAEwigzR1NgUVuSJAyWGKrkzbT7PQc7Gv5b2XgJaqC8MWGtWBTxh4HKLL1kHHj",
  "key14": "5bbJwbbP1KYHgj4Q3tbrnPGCQESzASwDGJTAYAizZzcxcwGATFN86dU9twKPQij3pk61kKqgGDyFe5kSkC8uyZ2z",
  "key15": "4C3V1tGexVFXnaubR5Y4tpnFQWzyvFXgnfpbzXcKet617UcdEtRbB4uCGreU8kCc29xvFNm14SQ2uQfS4LZ33C7Y",
  "key16": "3GyRtUsgU95jmYndpayXohHxVRP4zBrhFEzif6SJZ4GuTpuG6qebmN5PCjkSBG6Zv7zCJyJXa3FWWUJsAdhtLBLj",
  "key17": "DUULT9A78wn9rYq2fHSUSa8Npe3ifK6EyeWfwdHM9DL8CHC6UyR4s9Sxfu1SbZ2kzXWp81makBYCDULkFGCXkv9",
  "key18": "Gkc369L4XJGUbKGLJPrg6ujgxgmKKvE1fshKZDwyTKC4vGT2EYa6Q4n3j9r1yziqEB23ASKuE4tgNjJ3Q5qofkF",
  "key19": "UFUzAgAaYxstg5G2ykPmsiKWbJDc1yhsPb9Brp2KgzjTtZhQwUikhZibuLUh5br6T1PYdGjA3XB4T1Hb9Gw3DQP",
  "key20": "54WMMFnacxFHL37yPVwBqdzP9u54JNeSuftBLavDeU5FJVxPNbi2Z6Lqr58MeTt4otEr5khvqgz5tL5PbC6dp3oA",
  "key21": "52thkPtu4YyyU3QQ3J3qjymQ6PRJRhdhxCiDMvMGFdCs7Uy3x16t5BDCQhj9rx3hnZv5F484Jp3eURvTafLX2Xh3",
  "key22": "5ZkKvb3s6KToEo2e7dNBYjwX5XzPD3Qn8TVPZL8roWAxBr1yqKFgJN6DsosKiqvMCA4bUdseUwvP3kFkARkxDgQn",
  "key23": "2SNDVmRygSvuA1taHPpPGudb61WfUUwzRTYJkbgGRRE7rjveycRrk2v9NX7t7P9CotMotkvcnJTBYx73Hxab2d88",
  "key24": "2x1iZ8jnFwpZi1BV56wPgt9cxRVTqujH4SSVKxi56f6vAW7hSs86vWR1qnSXoq65LshEwjY8iHKvXgEMqyiceTkG",
  "key25": "Fbx9vfmZbr8ZdxDpG15Dahc5S3UWx8GbZYD9TnjfVKJSs6WPScH71jyyeDbFhX4bJjRXfP67EPBX3wGHc45yeft",
  "key26": "DVt2Tr9daGeHqFQVFHV3cNZmfshEDfoaMNM3ZcLr997hnk1qzdFud5V5C9S7ygbm24mxNq3nuWq3h4DaE2H41rP",
  "key27": "2eZAixKN3bcLLqgdYNBn3SFumuDcKQVigEksj3TFFopqpuA4aUvfD2W2SN4T7cg7FjkFnVecpEjXDF77Y5W6mViQ"
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
