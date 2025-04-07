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
    "5sx2PkUJ1ghqX8X4WnPgodJXirJbPhN8yoJnmsvEy9NwhECwLU7Zk1VjQBwvgcEBAk4R84G3tQTNFm2bhPyCaeB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fKhQaKQeKhmzH6VuvXBBHCuFr7VWqeqrw2uRPpVePLeUnYKZBjkwbdsT1WRXm2vnskKyBLggrRRmQfx1MgYMXXK",
  "key1": "5U3cUkMC7DmDGn8hbZFWtzDYxufBzaGG1WYLjDnMjDTyu65uXxWJRnGwUFyrEA4qaWEaopS3GcjSUaBg26rti17N",
  "key2": "2iFFi9CusEnqh9Tzzdrpkf1rrmyEjy1EHSgPcPeYsBdThhJwxutwgWi6qd2AfYxt6fajS1NaBygBR8YYQDPDdJNz",
  "key3": "FkK8oyHc9HDieW7otJhghx2EGJ6sv4HVByup1bU2XXvSMZG9o1VZ1jc27j78hohBF6wRvohywHZZNszv8Cqhnct",
  "key4": "4iB6KBkZqWwk4ghfbUARQUZ3oPDoTzj5awzm4zhuFGH4hH8vfKdeMRgEar4szZiQHkaqe592VUGCLS3yd7LvB8J9",
  "key5": "59tENuCeeXaE8ECcHcz5WiYrALm4K1vBeQGQUZEky6fWXp3tALmnzrgfYCcBoznZPjqo3YRP8g8ZWkgjFd55bzVn",
  "key6": "49FJRsC68pzm4RQAg9guxQPJNrBAo8YgBaJuiFsMpTwqFtdwzBjWySG5wDAhPJ7cUpXnGAV7RaobBaNPAA8phuZm",
  "key7": "JyS8SKsRQdJJiZfk8w6w5dvjr6bz4HRndEmLY9YkWrX9SasFGc1sSEEoRAtdsuLxXcqzTtge2YiUFhweDSA8Azg",
  "key8": "5GPb7g7ujPzktKjCHhRGEbFwbeyLMo63kamzBrue3LAGrhwx4PUMbQQNRzR6GBkXYaq1zwMJfVwCtAryfBf8Q1MY",
  "key9": "LD6cSW3wf8JkzGFfoFPkZ9HePPCW5v6Y2y7pH1E3jHWUicBizFgiwXccLxgL61S4QuH6eizByjxDaAZ6gmvQ6d6",
  "key10": "5d8zMWeZoWhr9HEWUoK9CR6sLXYXXPEyt1UQCjxLXN4VMKeZqUMbkw3CCkVyJnH3fnmTDjCoZxzcNLtKDPu6ba6Z",
  "key11": "YQNinKFgwx9cADXMbQrc8Xx6e427ZosTRT6apQndyH4LGEXjVPHyjzt3vrv8WtKBMqXJ9bSNz9nZZ42SQHSfnje",
  "key12": "3pRXGiUkNb5ix9Cbmze4DTCxAjX9xK1km6bfsd5CmPKNFRzM2c8LchGDmyGRazYKttDNYnvx5g6xaonheiGm5Apv",
  "key13": "3ZFYj3zJYmiouxiW24RaV9h53cRi9LFoQk8bRo8RkBbSj2qZUAzmdGncL5MUdMAt2dwoCq9TwnzvHUG2nAHw2EV7",
  "key14": "4mk29EwK38vybLs2E5xKVm38MxwWDSHRGCjyv52eQTfsu61q3kDZhxFRDNP7HCKa4yCFmJHTXxrCTXBeNvJgGaAy",
  "key15": "3fNdqgVAc9aY8WBf86XB15qRYVKRbY3HUzgsPAARtDNvvLZky1TQbVS1swAvYqD9tKc76pyC2Xiri8tTF5petcVY",
  "key16": "3KVtEWqso7jcBB9dn9bpxGGPPGcLBTnPNggbiiwHDuFrpjCwUgM5TBX9dt9CwTBrTNtt9b5d9CqHPeXo76Hwto2s",
  "key17": "EGCnwS3GshA6kxRTEBKRxevNC78Txg3CGFP2zRnf6DFLAdCdcdgVr4eQXohkqQrGw5VxMsav4pLTmh9KJsEUCq2",
  "key18": "4XeTHWLYEDMzuxCwzvhLX5yUWCSQt2oPDpD9wmwMWKDav1MWGJWuQKpyrJFLcrFjLfz33zRX8Ku3Qv1PeHqDQkjP",
  "key19": "2wch27HcrEqh2UemDiqB3pwPKHJqGkwXetZ2PBZfYobobsnvamKJAjQPt71tPraUrcgRYW59idNV2dXKhj8uq8Yh",
  "key20": "28jUSn9Hb2tGGV3jcdi2JMaYdBowePK2P1HfqM7ohoDnAEqbTtR7xWGupevn6nTg1SnVuFcnDaJQFBVUqRw5CHb6",
  "key21": "2Wxy7us9Yodtfco6UKoXcWeGvJMM8B4uiuacTeyaU53y1xxAttCWcfKCP9jjvDeL2XRJ2gocZjyT9ocwnqnsNaNx",
  "key22": "2pR7P4uEc6cot1U3UtWwwu7Mpo4xm9fKfxfSGJnnc6EV3wDY81btYt43twP2EkvbdT2f2DJuQRh5cng4jL114zBd",
  "key23": "23XyC33Pjs1cXej5J1NCY9xiHbHLoNWFhVeGLTCELoZrDktUhbBFG2axXj1CqcqcmXC3ofi7amHj5XMnamF8u4vt",
  "key24": "4C2ymakEKBPki25wczDHGFKCeN9kVSqakJ8SA1dxFKi5f9tFct9Y1uWFkVE6sqnEnsWQKXZGi4dk39DFUZDY1ZM3",
  "key25": "539W1XdQ1p8Qwp5SE9LbcBoFtZeDU5p7uT4QPYQFpe8BaFStY6AHKqSP96XSjB5UPRdXM6oN94t5SAp95NTm9Sho",
  "key26": "4gPUqd9zKjLWy3R9kwb6bAAx7169Pi4AeBy2YbmJgsujYZrwq5j9oqvb6fyMC2hCDxHQxhLfdBgVnmVGTQ2fPdPL",
  "key27": "3wYdQsnjGcZikaev5d4CoPQHXEmmJAsabH5ZcNWYbux7VeDPQsVeAmA9KyRZFgnaFSwvjKrX24wMWW13o3Rpas6H",
  "key28": "3GJBcMyfPr4AswCzXPGJvwrDVPEEgRqbmP8zcggur5ACz3urWS4bzHtDNdtGc2TL4AyVRQKuaA1JdWgH5sPvfy54",
  "key29": "3AMccECS6miCBs9p4BoE15r7kfpZbLdMhkq9cxsvicdecYGzFwzWXuRwW48rDuNHxMjMekXUzSxYqXMji9xpWGcx",
  "key30": "4Y1ZFXEfKEPwZA4SKmtaTaEuaR6bTHS7jWCzY6eSfzSotv9cyH2yFm3R5u5LMouXFjJwX5vXi4cdFcJMhfMNiru1",
  "key31": "M5uZ1J8m8VRiCgXHsb8kHpMQKPLpYVmyTE5PFirFXDjtt8zmCJz1UqrfNHtnu5oa31UF3tuzeLiBtbYrk75ziv1",
  "key32": "8QWzxHtFRmFu961QSdKQBvZPZmLnb4wsPipMv9nBZDTLsMNEhGLoCqueeF6Wx8r9DTYM668b2BUUfxXDZKmmYdK",
  "key33": "ddAS6sRAUuZQp4B68WVk4yS9tauAokYC5LpiXeVBML2PWB9EhJfbL3R3htQ7NVFE3fAtsTm3mNStuKMm8tqoFRM",
  "key34": "5W5YiJYTmp8GZPy4WLwjc5iNRLAqDpfCuA33Dzf3EERwMDo3AyLmBU8hTYiyU6SavFpAk9LwdeSxPM2V2ePE3AZS",
  "key35": "41uXLk5FEgYBAUKHYksQctUHmtw66oFDnyadeUbPyLQLWZXoRk9f9KXWrUFszz7GBmk2ZBzYiodXvFGrpR8kqyuz",
  "key36": "5Ez7N1kiNC4ESQ8QavE4ymLfrAQ3DAQ7eWmUqSvpRoKFuj6PFD21rMxP7rRPYTeM3nAbEVMBFHWSfVGFtYJdWuhC",
  "key37": "2pibdfqbtxSfNgWooDAc7FT2vxAJsNBvxjPGFyoHhv6rbhaRkUCWP1VuSCGXqnyBFWg6uxq1nT3eLbwRtF2pxtde",
  "key38": "nePnaAghZ4GENE7wHEG57mAKUwCPgcpa28vYMfL6gBX54RUgpuomuiwZvSr4zNxNWXCgJb2jAVjdLYFHbGw26HR",
  "key39": "2jhKWZL3DUZ6LSkNj3tFYEg2zmC1VXyci9DEdaTZHSrVky66GYhNeXnpn8eHeyZ1jDpuCFpXPJzqavtH7RjBV1U4",
  "key40": "2cmtaornQyQCKPsrBRwp1S8kX7L7iNGUXgAim5F3G2WPCWXCfA8LtyaFG3z5cViPBq83Rc249fgzEJ4TQzSjuQCj",
  "key41": "2oeMHGj67SAydVQdnW7MSqMbGGd1LAtBB1xQx26beFjSda4hh7yc4sFSAymEjqG4iVWCacKqBfvYdL6x1ypmyC1Z",
  "key42": "5mSHbqxxaVjCS4tLJE3CnJL5fCsVtvhdkejW7TNBP17w8ZmteZM82QYv1PK1mVkgMxqPHujTykhcJrXVdF1q94qN",
  "key43": "3L5nxk5M4pKyT1k93KxXgoV5EznzWg5YLxg6ZFwPHzJtkbwWP418KeBEvvXCCttQvsHvWaqHKLaxixxFDLSpQ7av",
  "key44": "3FXkCttL9hpTXAbFybrQvK5otixFbt3UUkaghWiPB8nRzuKQnWGBLiQqEWGzdzA6m1i8RYGiQor3VNYZdF19q867"
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
