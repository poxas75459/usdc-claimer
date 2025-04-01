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
    "vz1jyVAy9XnHbZbwQE7C843EYVAnK8SRYmiKURBUuEUky2Len8QBagyCdoYGnRxKzc9v93wqcp9id2kMiFneN9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B3WUHgnGanmLKwebLpCFJHD2FTRgT3rDXRCKfNbFbSKjfkXiNJ1J1K184yr8hYotjwSENdZmyjFgYUKZezWaWAx",
  "key1": "3zQnRSHJjn5XKqSRZWtoWJA6p17j784BNd5ajdGEe9d8hdG9DgTrCZr9JTmjakdKesb2158KG4JiXAHPePg21fYv",
  "key2": "3t4ta9T2RxmAC5dNqJWdPw2ww3reFXrcsmRoiiQ8DdD94nCTJF1mQyXyKosKK1h1XQBDfc4NiRGkHnMu72XwgwBn",
  "key3": "2NeGD8g4dgUUSK9YMkrarY5rzgp4eryJMMt1hX7wC13Phk5HuapzqhFFFXBvfBbUYRv9uzCS4STVnrXFpGzmokMt",
  "key4": "27vNc9hxZEqFVrJpy8zLqPJn5sLgCUDdRhQXp4dc16rz2JfeAufx3DX68vS1oaM2hoRZGU3pBUJBjcKvTXtoHRFo",
  "key5": "533rW4FGfcpXK4j32khxi4geuJCnBhNaLoTSLmrydpJXDXm5LVUzVYa1K9yaisRrAvEbtbNbHtrJsoTezVdzZEH5",
  "key6": "2vdptTJM2KQc37vxXbMArnfXgYjUpuqsCSEKzgtAse8DDozyxs297qtQVT1pXCxnFXaxKjz5aTNh9DyQfAS9fsgW",
  "key7": "2sXDYDf4N8u22c5c8WsR7UuHTZncNKVrxdY6fMPia24Drbb85WoPHQEL4a4oBABom8AiNjXLehHgkdeHSxyiAJLf",
  "key8": "3vNEdnRqvQAUmD6LByNTMaqxWn6e5amQXRkLMdTA2oL2oMooR8dQuyTMo9TyerXJ3qtXiwgx4DN1ZzGudsgb72BC",
  "key9": "5Hp9a5nSpUjojcZDsE2WqxXvn4CTXWdkjyET9p7Vcv7y9Raje2WkcdNkspqPffDiAYp7gMeSbGjvNQuUkPPHKLJf",
  "key10": "4yU7dmFmfejTYMdqxoTXQbdW5WgSQCyrxKAxgcaYt9aUsv3bvXZ5e1KkcV4XMMoXYUsoCSUvxxgMERa7bpPfC2rY",
  "key11": "4vgf1T3DbjaD7n5nxRhfFKVJpoFMk5RCfTaxPafopo8qwNC5s1yP5Nj3mpKg91jFA9eSs1YdgUd8ueu34uvDrmZS",
  "key12": "25CQbfDqEq2tuU4NpBdBSPckKRNczGTgQMdTLHP6E3GkcyrE2xPQ9s4Aj5sfTPSVHxRSo2jLkrugd1Mvhah6gxxp",
  "key13": "65HC5oHBxvaGsy4bcEawi9m9vhqfEshQ4bw9uQmKae8HD5y6kETcLusjqkh2igV4w8bVha8FECLvaiP8nJgJytUe",
  "key14": "2uGweqt2MxcdKhFxCYMN18LZEeiqkSV6C4JXZnvSTDk55N4K2qytykYvC3Zvp6VDF99N7m5mkrbQzWMgirVTczQN",
  "key15": "5pUKKZLYpwjYmxVCr9mAWrVxbqRS5xoNqHg931QPv6oPjMWADC6ymFNidgXDEgdypS6fn6wLt3GRpiZXPXBFcJQo",
  "key16": "2yrku5YKYX7MKvLsazBQKR1u7qzdMvCeJhRvUKRAocmaQgkx9hqpL5HrBiEFp7wFccGkLWbmoghyTqpP2Sfsaioo",
  "key17": "2EZL2VnzCQz6K3eiMVHuBLSV9ET8hzfozVs9ReMwT1nyQ28oLGeXrHtHpm62GWo2JeBgxRthqWLKV8ouucjvyuoo",
  "key18": "5qtHvdqyY2TYeA3G9v2YqdryvvFVUccABrNEn6enhCtpRnokD8AzipNSCqFnipKfSGFzL4yRFKa18mhxDFmqsNsL",
  "key19": "4UrStEZ7HS4XjowQAFPNRkKcYbKeSjG636RRF82Dj8oXFBP32F9zk8a1XQxVeWqeUPmDcr5D4PFjftnqjmqmJaM8",
  "key20": "3MdX7JTKTsnex3DxZnVmVUpYc9Z3dfGxgBbHyDetm9B6cAkWYWVXVwNifFhpjrm2vza49vq8sBYcfc7UuRw9oFiU",
  "key21": "3rV6ruZuwgGvtzQdgwg9BtDkFvWTX1jYa1w3MFJBbRHKTnNbkYQkS3C9rTWQ7vnbqT2V2aE9CMbAAnwZwn7aceqd",
  "key22": "nFVP2czuhbREQpf46oYCQUbB5yQd7JE5RqRv3zyQPnk5qLXJ7kd1jPRaQcPM3p246VJfRKWr5jHDSTCfXWbBwaq",
  "key23": "KUU1quENom36yeeQmofYvqxjTJrrrW8ubQUNQ32SKmEbTQdUftaiNT7j2q6MBLpDD5X2hceQswWB82bP8oYsETQ",
  "key24": "2XDoZznuBnz1e2yUtRFmU2hEE2hLDbjcyMUs6AJ32WqVzUdqRWCyBaASZ5df9z9GCyqmwFpHtXrXUPFu4DoSAtNT",
  "key25": "38dd4cciHuxgKEDprah1x5xJENzrbyrjSTeDA2ycqiMkAn2JxCrzoKDhYmozdVg88Y6rR7ken3UVne3WoVfUDNGQ",
  "key26": "5evrCacE2Ph1fqmHfNqKHEDLLcaSNHKtW4dBNhYddKp8pmU35qtEonvQuqdq9QWkveYKHrx2PArnZCorqb31fgpC",
  "key27": "29FXbiurbghhoZR4ejtSQF1Dpdf9T5ptHZZTNV5Uxk5xAMKiwDydDLcGhqqZmwqn8zBc6R5UZiQ2EGN4oZmzRR4S",
  "key28": "2WqMAHgvmfdNiEwY6mKnM3JQqLkSCaJmQfdWUTMgUTdzU5icqUzPWvUg5kmkdYT9gSoVaarNoqZLtYQZ3DihbzpR",
  "key29": "ojRWQenUDviFAaHYDjCTF5nhFgTEh3WwrzcnASDdJjtNZtHrSh5Aafm42pufFw8GTJgfGpAMyHaqxGabRKMVGwa",
  "key30": "58wWC5MgfawmK4UUw9A42QgZQWXNJ1YHjU4oMw6goX6TwqN1LQjNzeLKZYBjNpZFCVwT7HzmNGqxm2LL2DYGj4R",
  "key31": "5GMBFsqRo2Ra4AEfpDhK6MqCnF9WvfCRjGUfhcU3g2PdxCKqy88wjPJFBy9tYqJvgq3jd15uSmzeV9CMBQErnyhP",
  "key32": "1aV3mjy3hLvZax9Qk2V9nKxecArbbZ9KJBQFt4DguqPYXE4Kd2sF88PTtThYWPsPGdecCNYSYCeTVVASABTeh6o",
  "key33": "4rZNrBXXNmbqY7wb6LBUXhcQCaVibUmWGutxTyA9j4jYfxAkbED8LuNkKxFcEUc21ZK2aSV6KQAeE45VJXGZrxKV",
  "key34": "4YpxJg13PYLKuW7q1zVgxkyBMuV76wEDbD2D8z1P9zewi6mbVyhXymzbTV11sLZZRgu2DDxpFTcb4a1yXjbQaUnS",
  "key35": "KvmKLrnCcSGunU5HVaCkBA17do2Wzvi7wiWLN9nXsqFrqJGU6e21cX1MCiwNXmri4EfhPVD1hkjWTRHeoctjpna",
  "key36": "5LEjHBkpZ5R5NfkToGUw9bxs72Po7papSqbtZSim2PyNnFfdK3mfmaf9DJRbxyXazsFGmd9Sba3U94qWhnG5YGqe",
  "key37": "34CFydutr6mZAgdbXiSmjCfDnbgqk9sRZaf7ygTJCF3kvqSheATahjf58B1LUGmJRa3BcXi5tDqxu6wYaXRoKoK3",
  "key38": "5sVUxZMw3jqaU3BsAN8ahRfggz1oJ7tVzHgfus5UfyHru5PMNmbaxbEWx5teofhviJmPoeHmpgMzN4wEeV9RHnUA",
  "key39": "2Hen2jX6yH2mmqyrdYHKXdbC6kf8bfeKVB4d1jzaKwZbcxk4TyLvTybPbW1zfq2qJvRDi2zvE39LDxv6hkdZyB3b",
  "key40": "4JFgeGfZn2FnBWm8pwAyvVzL9Ha5StnVZQ8oqCh49o9fqtEV9rcpT5KWap1UtDbykZ2cXXB5YqViEoQ4ni2xVihS",
  "key41": "2aGcosatJtdhW71a38o3TwBXuqKjJGVqFxVam3DSmBJr2P4M1ERFuxNhg1cLiFGCGncLs7bPTNtsbtUmbeG1kmkP",
  "key42": "65d2vWmNPp3yPPSAuNnhPqSw9CxdKY8EUrT97JrRtqsCqu9avYBV1anGt8VufoeEGat2e5CJjgYguTYGjU4ZMhRf"
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
