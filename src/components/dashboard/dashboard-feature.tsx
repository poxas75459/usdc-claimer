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
    "5qLtT6CeMJDKpdFm2RBDhtU9HkxtafFYwErBxBbZfWbmgUVtDRV5UXyTHUqJxTWdBmGPhyqZuHpp7ZKuw7dZ2fuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VoS2gz6S3rCoCzz3V8NDYfg5xEHcSUG6cGWaADwrmRcs4tXo67STZ7A7VANq19jqFTJvXmvAkABbgHK8r288FBH",
  "key1": "3hPYrUG2eK82MGxNKc8NJJM7HuMRNh1CFfSfS8udvGySwC41ngJJJDvmkW25UBYGUydc3ZkJNZYyBvfbBjCRpwEi",
  "key2": "2bLDzFa5uzkUSsnqiDxdb6tnhUWAz7VgxFnJwcu7eG8RwjJFG7ajf56SwtJoLzTtyKbta26RUGioCmxEYVo6biMq",
  "key3": "2MKBNpy4VaerAMczvk1ZASkTA1GfDmp4emW2GV4Jjzr1gnMbxkQMM8RsVidQ9p2ydKmm6tSvnzJePqvNxtUR96gW",
  "key4": "3UGBrW7qseJz4q3aeWKMnBJgpfYQymGv7VvQePDLkMBRRNV2irac2RzzhRiwoH4YkpvKhXjcyMPEwTZd1kKfR1vK",
  "key5": "5eqheXrAVXbF9vyzCQB8CAvk9nvoP8qE5dJuJb2t1QdmaC94jjSaq13mQZvcgCDQW3qPcrGNrLME1EsbAe6qDkvw",
  "key6": "4yoe5Q9L6NMYdDnWDnzBREaewvyMW3sDS3U5wWEUR6gC9kRs1zV7jS2GKq8KCnyTHV5ERruMUqhCBk4QEfYEKiku",
  "key7": "4D6B4vzgZtWGRW94yU9DmV9eMF61VyVNV4NAcBnKkdeLPhMBo9qjH7upCAum5vAy4w5aVkhPd8zbCQHJkzLZFB5p",
  "key8": "XwhGakUf2E92Ekz9btCZoUoJtrVMVEzNdKyBvDVLWkHHtHwZ972yrU7FkkGfUw2xomdKEkhRjNVNF92h7oxL6Qz",
  "key9": "4WhXGt67LG1a5HbMa4wXHs9QhHfLRK2RvTW5jbWFiwBeRXcboxgCgXHpxhns4xxFZJiwJjpQXm4memUmyivZpMnr",
  "key10": "yjA5eyrsuF8uf61saEryfhChxgmfFAvdmAhkpeS7syCxcYnUP86NetM6TqTpQWjWmEhMNG26z1f8aEKwRLY3haK",
  "key11": "3nForirb6CRdvNPjSocYRct6zMPGuFNoLuooh4P7KJeG38BHugsn7rWHmuGgNK4K7rX6LQ9P1K1jCYR83xrMzEHc",
  "key12": "WV2v1d2e8horJCDZ6iEdttNDqKyKmjvWzdCUGvJ1u9oVFmnP2nVQsuBicrniZaVTA85VGFezSntn2acNEdD2bXt",
  "key13": "ydxkV9eQW4pwmcSJpCkk49aysRASWfj2ngv9U9EWm7wzhmqFmmKMoM1Lcg2h8YyYAJZjJ6XXo2TJcfKtjdj6Tgw",
  "key14": "5Euwpxv21QDPT7NdTaa48EqjyjMktvZXZ5VkUCvkPj7tpRfzhyFj8Jb7BXqtjeRSBPovDGiALvQbtpnM4KmD4HyM",
  "key15": "3eX8ayCJKq9WVrLsmud8asa9QDzXvLbY1JhW1xVmd2EbwyqKrVxXudGLooEPiWVj2TyPs9u66bo1jTDetiPCw7dM",
  "key16": "2VKR5Rshu6t6VoEdu1E6CP5JaVwhB4tpTYZgQbZDPFUNaRb9FaSiNpaFfQTFuc6rYKbRFnUcs9DpFdxDRqGPheAz",
  "key17": "29TBdJZdjgy7MhGeNsJWoniSddReXkSTLcHvWYTWT8MU3s1L7eQDQTpsmwRnEkr9txXKFHMEW1bxgwF6z6A8kvi8",
  "key18": "5m2FY7jLpgSvN556JLPxAMpMb39u8DG1sSawQ8U6x5S5KxxNZnPnWch8Zadyxcv1SH6HufFGWHikHdVY5nN5S4K2",
  "key19": "m9t6Pq9hsUGrwrgzWNvjaxDurcmdbd6tnUEyAnFckksuHVjQQH8qde9HCdyqfuc1unoDy2GSJRvVKKzbhktrh9k",
  "key20": "27pBrpFyAzJWMMtpVwULrdvuZaimACPf2YrRgjhfaRBLeE1AJ6DwdF9TuTbQVkV2hCiv8XtwSgbe9SKxShzgpSFH",
  "key21": "5FoMVxH82NDFAhi1H8GeJAhDo5hTp5Fz472vxEqoyme5DvP6FVKrb4wspD8h3z68hrbUpBToHjarJ43ai8DZ4QCR",
  "key22": "3ToJjjuniM9chwxLKyz2EY7qCczpgDiNB95cFyGvEQi1ifV6ksRGB5dbutzHcGinrbcnT9BmDc8QVqE14NbofY4c",
  "key23": "2aktCsWuR9ZbRYFeGTAGxbBa3g39S5XTRaBypBq45PxtJ7di8fCC3UYsXr6c9EMZYKpd2FHLC5UjU5n5qnrniCdv",
  "key24": "4Ue4jaxM84uuvVQsnoVsCqgZ2Ryid8hvftefVAZdPub4DTgeaJgHC68CpuycjAorsSFxczj2YEZnRzdwEJcWSgBw",
  "key25": "5DT8WVzubWBeNT4WnULCqwv5sEKSVrNkUN3iCt9Uc6Qu61CuR6i652r2wPP8bJtZMucCDqBEuVNG8AR4nBjLSQEE",
  "key26": "LBYmYbB5VKvz8K4Rz6aM7dRjypPbHvLc3g53mWSj6oPw2xUejCnCU1x3DF2MSDMfJoQhzrzWwK1tjBM13QPcWkz",
  "key27": "3QHNwRzxkEQ6ta1XdmQRx6C4iYFpR9UyUFLZTXEszppy6zQpvDSoWeeQZUWXEqdm3E7eF4AQLxqnSCQpNo6n2SvZ",
  "key28": "5kQxazs6U6NuCTjfqN3i6UWXogvGFUSKvvdXe1J6VbD2CVzECm2WKxs4ZD1XU2Y4FqhaCFLV3jBDCBgCFgywcHUN",
  "key29": "4pyz295umU6hw7yqKaaCT9X9Cr4M2jRnB5zcVtiLYJ4S64TSR7QkpVjxszkjiPM4JsBotMJMGhWYMwpckAAX7ibV",
  "key30": "2dTtCH292amoBdqUN5KnshSwPDtsV3cZfK3GoSAqF7Hh5TqTa2KkjwxmhgC9hf4BrW3nke25aqvvKXJkdfjsa47"
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
