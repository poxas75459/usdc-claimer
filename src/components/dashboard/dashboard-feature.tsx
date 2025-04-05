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
    "2SLQm3xSX4NMNfhst7tYoywgyvBAhMJe7wq9SSiAiRik5UBmKkjc4rSxe6pYsdRo5SZzg46h5o5bLWok9vgtw6yE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMS3EUv3gt7mBeHSSWb52W73MJFbYJB4NKQPBePTVfshhnqYjrupfYVQM4a7P7mPWbiQt7znEiEarpNANyxS36Y",
  "key1": "5H1SUyckx1hnmMPr4gRV2WpcfydAEdVuuZBS29eaJugTbbSPNzenNnivERbgLh21DD1fNfYUd7H5vPQcMhPBrHPD",
  "key2": "2zkvLZXjDbwuagWxAZi3AtiEw21gH5Y5nbueSQfvnMNHY75xXVZhvAkTAkdLhnccPHbUq64R9Mu2k1NcA6PM1C8y",
  "key3": "2ZC7Mgg7hMhjWHTJneTHaGshHdPrdFYmDmhLXXQufEj3V2rL2iDUDhWoLDNyoQ7DaUyYQkR4qAjSKTeZF36qzpZX",
  "key4": "2vMiA7i2oNC13Fw6HNWSaqBoZ7ojHCLTVXKUdVUGAQmb4nLsiJPUYf3ob68FkvRYp22EsiqkrniuTHSHWfGxj9L3",
  "key5": "2YZATQi7EpJXMMBHyTc9KULYus5mP5TNPtmHHXFydyRsmoSGfs18zBi9ywnZ2uptvVSe7W6rZGL1pkxaYYa8EaMe",
  "key6": "5ggsBjQxbJc1Nfekukb2hAvS649WfQGBzbnFzLjG8yy6mLj1gZX5zNPMfEnyWF8wAzuYUzUXR3CVUiAFxqn8Wj9R",
  "key7": "3ixBJ4HGuGFuLrjL7VPoZdHSWbWKTp2x9Tt89uWSNurGnQs1LQJFjknLzbTtsw3Ff28AgoXXcnLyqbT3pEaqsykg",
  "key8": "3q8NYNBQQrwt1humFeBJnWt4Vv7cBw5NUvqjDnqwwUUKeX5U9wxVVTWj1rmE1Cpw8uN3b86vrzwVwfvF9VnpUz5b",
  "key9": "CF5dhfqHQVmYjsyf9zzPE2PV6UhvLvvQPkBG4Rj8HtF96HJerc5RUkBz87bMPKnUabiT6YQ9uEKQ8J1p2cmgRJT",
  "key10": "36qa4xuwPntPzWYFtNsCZKAZ9qDZd6C75nRGvjkn92JcpcS2EQRpf1vG6Nnc3n8MMsY77Kh89miFgYPWNwS8jmnL",
  "key11": "fTgWz74M6Wv3C2KTPnv1QJfWQfrGFBf5zuxnDZCEe6UmB9mcTSx9horpoCHQTwpW8wZAZ2vRpFFK9BeiGPyXMCG",
  "key12": "4Hip77QTZeCFFAR2aqdAP12qAT65nViwnNn98wVmvCKgch4RLVj4XngVhsQr9CSnTRYxXAdZ1ErB5xPGPTSj4J22",
  "key13": "2aVCbvJy3PCDjXwz4eV5Pwyj5RzQLpVPKWEatMTuJGYcLVC5KXz8fSthgKnJkBpisEj9YKaBxvoqsVvecnx3a565",
  "key14": "xtEsbmgfkXsFMnELB9AGMUuuVnXDFRxg9B7MqxDHN9CzbjgrpGcpDPxTGqvM3gficmtG3JSRhfMMQxQrE2FpLXk",
  "key15": "3AqZBHSXWu6hodwczTVgAN14QRejeZjywfL6DWqQnp6KnpuRw2b52bmWCkAJX6p1VKshf3NA1GBMM3GnZYB7VyXB",
  "key16": "2hjuij1APe5hyy2cj5y5t9BxgN7B9RCCYcvHSzpwZ2DHRMXkpyhfMYvJ9waskXwL44vLjkYTPeqP2iEQXficWpME",
  "key17": "5NLi8Vdbj4MPR19n1qGaokiLEpf4mZL71ARfU5FWVYXZ2Fu7kNU7467QRtPAzudfugSmer71fHBmiLnoLyb8juAA",
  "key18": "3TwaxXkv1xqx5ZaSyPAggAUWFQq5g3w2YwxW8MU5gujknzus3nh3Tr86uA7pWocaVK3umn2W8X8qUsk4B2q73XYN",
  "key19": "5nb9QREwMzuLPnJmDa5itdc4Dr1oZKHAaa8bGh8bQafQXUE31h3MdPf7HXd8AkFU5agP3WdjfQstqS244JE4vP45",
  "key20": "517SpXsnEnsW85ti8n3xjVKvcLDhoAc3ehG4QKGh7cxQ4hxu6U4umVwpBSfTopqjRYbUXhmDxHmwo1H4JPA6stdX",
  "key21": "31wsdhQm9wvdYwuq1r7AAWarLvVpE9RmosjQMvLGyvnyXV56CuL2wa4QPitJGin4NRg8hFsphzM5qC26iZWQzQnJ",
  "key22": "2wrscFmfcpKqpuowwif2iDqW9qRzvauK374yhoohCfX2GqnCYev3wvd2fm6ANWxuVgyBJMGhGhMnB4dcfLtiCL6U",
  "key23": "2wCakdR9Nh8P1ViTm5KPj3VpbkXKfTLUYxmkNAMEqsSefLVcmXA8HkmtjguHiMgqte3MJFvajDTse2ViTMCEW1jo",
  "key24": "675yewCmXs95ePT4n7vegcHq7vzot76mUnUSMmpj5SKJbvdkr4d5XPbZ3tRkditu3vxqcPGj2MVoZRwQQNwxW33A",
  "key25": "5RqadJGq6mN4B2bXLECvQTLxAUBN5AkFj1E9wnJzo28bmyDnZFvoDJBvMs1ss1iWYdngp2Atgxnpknr1LLSSC1Hh",
  "key26": "3Ub2LxksyxVGoZP6a6wwtm3nGzwwkhkS1PrVc2oemFrRQxNy5DiCrp9ocvxGpnG9gJnkxD3ppH9HGLD6B9tGp8V4",
  "key27": "52diHEAf3bX2KgZz5oXWAD6b9d6CWxiqRJMhFm9weW75GYZvvyHXuShApCokakccYted1zLwCQaSZyU1fEnheCfM",
  "key28": "4EFfbQAjcC9SKrqe64WyEu3psAZfZwWYfYEZjvhbCFpG3qwAyZA7cfsJfUoScqcjaerDTjg64qec6zHVc6xbkMXp",
  "key29": "8kG1pMrqUc1qBcGciLDqPYxeq17jjwURnwpCFegKtAD1WZ3ommpFxDpqphxHdpVg9WRKCe7XDt3y64fJMrkzP6T",
  "key30": "5RE1znk1jELcj1ZQWz7c43xLLz4ECPVren6amgi1qqvQMUwC4vPhyhELwmiqutk79UghzbAbJs1mKZLup1VaN4eS",
  "key31": "41iGnrqyi9pAzqquCVsz32DB7o9tho41rco4BsxAPEqDUXy4twSqZYaeN5Cw9QqB7HBUFoartmAtmxhyzb84DeAJ",
  "key32": "4MACWtdPn9VtmUWj9psi33fekEQeAhsq83K2aDNCNo65jcHrJZz6zoWJdAQ7XcHSy3HrQ4UVbjfdx4ymF7JDBSFN",
  "key33": "5UzM4FP1DWGekHKU2Rem111Rg7Sy1p7v3Kg7oqgyRyA9S5ywJxDkJXmKFs7nme7zRvJAT1YXGBxSJB9p6ZYd3gho",
  "key34": "rGQLpPPUe8acyHVyVWQLF6YMiMwwK4BiAPPVJQXmL9PbbLGeu7XqdgRvb1c2KQRezyDvcMTsbSdYjLTE1Eobbk3"
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
