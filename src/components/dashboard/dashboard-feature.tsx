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
    "8pJjnSu2ZtdZ1oojkbz97cETLS8b6u8XNdkND3g2Yfw7mFyA7EARkd76B4t88nN9SDcrFcpuM8BVShgHEMngvrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25vQFBhAbnAhZho2b7oEPaFSt9AXNA5rpD2U8vHQYnVQRcHyGyAxpg4Km4spZEEMWRX8NfyXnYkvwhdGfJTUm9ps",
  "key1": "3V8j5x9pogwppH5FWjmsH5ZwHzFdmgsPJdP1LWyfc52HuggxSSSEvLJh5dGK6jyG7Qg3n4U9tFL7rtmbcn3719vG",
  "key2": "4yGxf7CeZY9fD676EhJPjLQqcB5xgtCY7GiTtk4cfbVqaz3FAUfpN48WAtaTqJaW6hGCs3jWdeN6Juq2z58y8TTE",
  "key3": "4tfF5giTvphKGS14JAnhR8QFTCVAY3WDE6voLWRHnCpGQCE6pQxRGtCVduxfUGucAL83uNJ8N9XxxLWnjPUuzFgW",
  "key4": "5XB7cyL7TT9R9tCrwfjpy18uekUeY3YdwU6iUTercajwX6Fhucc8JXP7XqZNtYihPmPxP5VE42DKcPjRjxbUiYoj",
  "key5": "3ZQoZ1hiJ9BMer75JEgj3wQaovzqBCJX4xeh7yt19oR3L6esoveZ3KNYirYY6tEYv21bUSmWDssP1HkMWz4wn24f",
  "key6": "RGRCeubKZooG1A9FQo32F59EoAVnSP4ZMJa3RZwS5rvWvwuLfHNpcyYPSHp3x88848VZaM4VdMXi56aeygY8d96",
  "key7": "38ma8NSSy8d4f2PERbb2k8Vy35VmMofgDBBMRcYcd65MJDUAhZGFnexguuZAvQ86xJiW4mzwzYjBrJ2gAUhUF9Wt",
  "key8": "ZGcGNv8wAAYEGAguPCcykCPGp4yzHQcSbg7y1y5sdn1qZsWTwNQghT5AmyG2yhrijU7NTi4vSBYT5j9hfYAK2mB",
  "key9": "2Mi4SetF1teMo9Wwb8kvT3GX2JiXRAeFxEYUsWN9onPep5Q6UqZMcpwQtZuBYJTbcBzy5FqTk8dCyJ8BV9XtDpWE",
  "key10": "5QUFEZBYRrufZkUwhVy23vDUnWNazRJgPb2iEHM5Sa3kjy316wbS2BAzZLF3DxnYwxjbA5yE44jE2U5QbgpyuUrb",
  "key11": "4F4ipBp9urd4MZfCH8BgQ8Pch4cmMuQ229D4yVRSgCUm7UH8ekTvEYrVAmbgidtJ7iLUoTXL1wKDcZC3StwJ9JXP",
  "key12": "rudnMSwPWgrhaeSgFoFLHVKkeDdKVfxKpvBz7g7V1qfXQNKqGY53LaAskYXRurdC2xWBB12n1VRaQyrtcFz6dUB",
  "key13": "4pFME6QbLVFcryQ3TaXsETqFu3bMPFdMjnQtWtyBFjsquQAAjatCcRtNS6Wo2VM6GBaA6XcpnMRuAwrnvE7Esew6",
  "key14": "3r8g6iVUvJwSBD4548uRKj6wKoiYE1Tp2NvcDfk3pFoA8z23gajgYKomUzAfbY2WcgF4m26nSbhaJY21emVVQm3u",
  "key15": "2Ps76n3xbPydNZSSdezKbWZFew6o6mRxg7UuKrNQaeXKxpiFGYRjwrnZDUoryAvssc1btUQvM8rLHsNQ3VsxxLC3",
  "key16": "3LmEpqB9NgKbaDz6vUGA8Pd8AY3WuqHZgqSGAr8S8Hrj42GfbuechwAq6wuCLYAaUGULhi2FmCDi3JQY6whg51f",
  "key17": "2uukjVVnGDL3YHrn9aw5HakRgRDwXCRVkn5RKxNr9T4Lw6BNqFLJgZxVcCsa1oeSYWkoZszk6p32i5KRySKARTZv",
  "key18": "5zEhaLR1Smda6qcVX7oxRHanDc6j9uWz79qF8zaYbogTHzjQ96cr2WSbaK4owWBpUTdDEW3YXEQkj5ksLLzPrLvJ",
  "key19": "4vAVoFVoZEvL3R5XwLeYM4mFFrWkRAqc1j9Jjgdd8LsJ1Jhy8HMoagUWhmnLsRo2gTkA1BBsdaCPW8DPnHpx3ace",
  "key20": "5BFcNMTpk4YF1ebqRupH7iEvCFNnwJcR7oDXAKePyfEiSQ8tdbQXvGrHRBcQmNGmiTFvwGyuqtum9A2CXqDwzJ7U",
  "key21": "46aUPi1sVGnphTEJWkgm9xLWJtDUXvChXFRxKseNKE2J3hvfRk3A7qJUPxydgoN6CKd17SFsjT7gVohq4W1JUoSR",
  "key22": "4BupD22X8mJKsL3VwAwBYTcZTHnmXovcdt9XM8pfCNBqwvUMErhsTq1kUto3HeZV6WWQzx9r529aAQpBseW3eKZH",
  "key23": "5CCS5CQn6fDrTob1sZPLjr9U8uTCLbuWBWtkG9ZJuj9a6ehBVREAXByecSHpN2RgtZ4UYr6k9KwZzKFyxHRHqWa5",
  "key24": "466eHWYzZrgFxpfM4jpFFYw5mfpJ2DEbe3H9rnQyKEFf3LYNjdThAPznJskcbyXSWYyrf4YHHUmQRrVz2LtJR7rf",
  "key25": "2YGgWaUhHiricNMXLVSWqiHEzJPHxJRezDDD5o4yesYHsu69CZz9haNW5dp7zDEQhGDNz5BSmEwqA6qTvJFkcoyN",
  "key26": "3N7BZuJxKa3BifA8YugU6KYcAhqLatZApxSCqNQyHYhPSxi46aPuv8u1xNeE6Dr8g38DNF51aZiBB6cBQTBgkaAY",
  "key27": "rNGL2X52qvkdDVkpaca7SDE826bB1R8P484S28pXCm2DfcUZqq9NzgHSKxtE22EeVfTrhroTbxrHrnK2wKJR2uB",
  "key28": "5hTiXQoCw4GpeZWM2LFm36bcBtLCMUvno4MVNFSANb8y68nzmDtcxnPsM2HhGmw45YpkepUS4PGJPvWyLXwnKoWn",
  "key29": "3j51AXjMd1L1kFB3HEeoicysi7kfAZQXCZdXh5dEDiZMyZebTF78riXwiZes7doegVTFTAb2SvWfpn781kX7sdgX",
  "key30": "4BwU6WsWQCyPCmYMCPTWaMuXk5UBXD2AGPxX4kDQ5CRb6sW3H6PyN1LGPEEN11aKqn3Edi9XgsQgyHSpt4232KNc",
  "key31": "4HJmNnGGEbcvoCnwoxrtm2XxyzyYQQXYnfb7uF3LJNJR91gDcmENMUUe2TRwKVGwq9BSuQAHkbofHVgiFaqDQaJQ",
  "key32": "3HMM5M4bzQLmrodwck5q3CXAaXETjg2xTGdBN9qDbz8hBhM3Pr8AirikRNEwkgoPDaFjXkh5KURdq3ZK6WgT7grN",
  "key33": "5HCYSoNZoUrHbGEwdLuC4kkFZWqWnxxgTJW37qeWpn74xytYbzksEEAZeyRtLPSHyy7E9iEhW268wbBgDW1pvcMu",
  "key34": "4k1LwTbEPK8dKKUsa8mUDVhBMCDGVQcd8Vgcjce3VB3XNWTT8B62tujJFeFBqyc9RjXem4rtEZNwdN6ECQJJtTDF",
  "key35": "2usuTXP12cq9GtNk9K9byE57jHN2JnLCWM1hzLcXi5ENhSnzYkYDb6bbJV9Eh2PJezHZv44CXgEtUaFUjkKdA4ZW",
  "key36": "4yib1LNMC6tQ32Q7cjEZsJyDKnhzkYWBkeiEp3bDrLrmHqGG73R1qBZ3CAXnWKRbwDgvEHjCcHvQ9UNrYjEvbsAU",
  "key37": "V9W3upriCwtTEJ2oxxT5XZWHme6imm9hQbUGhhPi8LQM5hRwNaGym4A7SiGSVyBo9z1AEudmwxCgX75bXLh9VGC",
  "key38": "3keJgV8ZqDqoPKzNbr1qRrENvytJom3GDDu3c6hyJwBBgEd4jgV6YZ9hmg212iupxhDPsAiRPgX83bT5ejv62nFg",
  "key39": "s2DmJBrJZ7jiebec8FaXvZwo84T5WXt1skvrWxCjX6yADFd3EFrsbD2pdN7T7gLG4hDffixumxqY4YQEBEoYAf7",
  "key40": "4SHkTBCwzwUCr83rCFpBU7oZcK2v7AycEeXqsxi7qPefZsfdthsA2h4WjdqG9KeonvBGuwso7owG4uEpcmFsVn3o",
  "key41": "3YY7hXRXUDXv1mXsAXwGMSywMKxN5WpZMYoRGiB8zPKy3Dqpnqhzd7k3WFSraAxhJSwbRTfHaCEhg1SPTcHnwuR3"
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
