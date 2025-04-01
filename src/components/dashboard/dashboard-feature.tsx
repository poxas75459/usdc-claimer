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
    "tapHzsmrLRtzvFTSK1esmUEVJ79skdaeCCFZXA5uTAiQMyi7ZMijPVUVeUso9k3ZA6eFyesAzszNpTLWhJGmPty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c4pSaQS8nmPHDsnHNL7nB4L3qoikiSLCLKLyfq67xHXQhBWFMwPetHnCyTaeAuy74otqQP1VohgUGaPDUDY9vLm",
  "key1": "4TbsBLSr1uk8EJR4HTFrvvDGgAwufdpcDpuS9xHfpimMRYgLEnhDx9F9ELJCeXLPq8p1YR1qk8ZrtX7ndqiKdLMv",
  "key2": "5X9z7NMLL82fgm2vSvjxYB9GXnQCDE3p9HaZAWvd4B1DymkvibUR8Hme6qmNWwKVrfDTFNPfLYuujQRi9vHkZXyA",
  "key3": "4qoTnkq2E8XHLd3YyBhAUnXT829MC8pF9Mrc6FSAYWhBP3cKMeoVuLAeJSkYY49dyLgVvnYi6g8wx6iQrwDmtpdE",
  "key4": "Bp4Z5ox7VZpVz7U8386RLpj9adUKjQR5j9FV9tV3ykb5TGJ4BVYePrYQPREiENBcBkDDdkxDX4Nptup5cVvrVyP",
  "key5": "4pGENq92m2erzp14Dbpn9Gmdps9V9xvAkZg5FqHQxwBGEKPLwBuLSU1WZzwdm4Kef2PiCWABdycLTtnTwwbVtb8Z",
  "key6": "5QnoF9PKYn1DLWxqcUxVZBGsE8PuiUVc14wEatJpvYmpQRSkfstpa9pQTuamMBnKUxJAziEd9Af6G9PKNFWrgEW7",
  "key7": "XYYLKGfZFmXNxAgQgfkRTMxDN5enp1VwPvaW9x9vrHZbSAvMHWRZwtzdrmivp98dUatoiG2icTbFB3gRNB1zyCe",
  "key8": "HoqKFHt1mgY26Y4CBnAwFsUBycGvHmrH7g1J3yPFecEC4oqG46vpy5iR7FbrHV8dsp8eCp1k6f9z9RzW2FXA4y2",
  "key9": "3S9V36AetuQbcd3KsrsrRQLUXfeddVAsBpRscuA9ruVv4rxakf9MkQqbYZxco1WdGNGKWg5KpVD6dYwd7qpQ1CZC",
  "key10": "3waR7dWg5v5VuNNPzCudCxF9g6ttsw8izRxNsERsxeMGtKwgw1FVVYnqgDc4ybA2p6s2vwmJSMt4vGfva275SS8v",
  "key11": "3NkxrJCzXNzH7xaPiqMT1JV39BDJdv1vmaapx3JiVPHUKYLGwgQhyg32eyPREnFPFVMTuEsWcKbXEaTjnAfSQdtK",
  "key12": "47Lg47mqKSMdq2X7XduTBc4z1AW8qzdJGKsoSzpXYwazPHX81AQju6iqZJQExLi2Z175kp2FG37fGqVT7sMojWdF",
  "key13": "k1WH4Qx3SKLRiNJi1XbT1v18EPS42C5B9enRHTaDZhvXYkq7a57UA2bcTFgZzgQXGDbedSUTu5GCEs9yU2QYbwv",
  "key14": "3abawrscKeEhG1TD3z4KkQpkc7hiHnqGVMiMyPwmMn3HxdG3SsHKAF9ZRi7Pv17Nv3XpA77twLPC4q1Jvk5uFMK6",
  "key15": "2ffh27PS5CVzaDAGuwWd3Lj2pbyyBWE4n6Zfz73LU8ACxKeBTe3yvCLwEDWr7mBfXCE5YGfxxTh9yDH2peDjDMjF",
  "key16": "3PRC8CGM9rZNUywV61fi9o3sWt2ANkHGn6ho1kMr2DvyQCS1ErBBF8mm417kJ4DYMAhSxztVEK6T6eJ4KbGsaMGc",
  "key17": "2Kxjhpy3ZNKU5Gcooyvee7pMMi81KCnsVGFkQ3LPA62CtMQhqELBrz3iEUfm5DkyP7uvREobGjEQBupahVznhF7G",
  "key18": "2ZENTGJy56K9H2gPNSd4gXPX88UmgX4o2Ju6yw6aeVQV5Bi3g3FfdFtmyfkABTesXsFNmqVFX9ACm8y6RVsFXjn1",
  "key19": "5uDoRZ6fP6XABt4EkJBBpttdhjmEjjyaJBxXMf8WdnzWYmuywRBim6xmUEz3PviBEj3DVcoow3yeGif1hwGZ84X9",
  "key20": "3ZrBT64DTmfNLgcdJXUNLvYCcbmwDSY3o6G4ZHekGiURHqTgxU6FB4VTNKx1raMkmE6sEGphfng8CsAfXeiJak9X",
  "key21": "wgzxRksZ3QHnebvgMUz1cHbNMWsVCDjwwvzhsELKZoKwPAmv2r386BVWKr7Y9iWMYcgN8tYg4WjcTnZfkMAtEhY",
  "key22": "5giTMbuRUWrdbHY4JUK3E9YAHZustp21vx3U9htgaKnEkgYw74DxwgYaRNJSbedyQ9kQ4U5zMWaGMef3UrYKiJsS",
  "key23": "5L9NsG5wLhZTtn99CivRSKZXKhseSamtK33PcmhxT7Gm9Cr83kEYhp27FsaHtaMZ9dNVE82XUVbCeHiV8s8fXogq",
  "key24": "nYs9rSPcFjn3bLySbo1pL9z7dLUtDv4Ti8wxPgt5to9VqZRtFj4VPvu6PgSNn9tUd1NZdzrTpTuurhiPPRaQt5i",
  "key25": "3dgmU7yNeCcGMSYVgDsJzerkdWiun9E6WkSdc7t25z4u5rtjxz6DKpDKD5MDdLCmAB1kVaTTx7mrLHBNwmk6MtQ1",
  "key26": "5tomfPzmPMmSPD7jLThpaFKNdm1Tj6Tu3Dk4nr9nHSajpNpvUkDvv32mSkgh9TgDVE9hZvPFCHqhn9HbFmnjNxTs",
  "key27": "3ekNCXkQS1gJj96qtpsiv3RqHP7ZPx878M1HQBntG2LX3YtA8gQQUSWVjLpKW1vheG94MrG49AP7UsY9HrSnZhWn",
  "key28": "5DHRJ5qJ4BYN2XFqNhnbzx37K6dxmjKuPNJ2JFnZPmbhXj22kUYNvbQ2j71sCGKigh13Q1C2ESDfPk3hYGEJ5u3B",
  "key29": "2Pxq9yy4dHSsNjYcaodASQaY45pAyduMVrsBFqf1KVXtBvMpLpdKckwdYq7Q9KYXJFXSRmN4M9Pfk1A4BN61PTHy",
  "key30": "5aD1UBuzKQrmvUi8uAptpFYpcaydvXJUCtRi8wo2MV825ZrtBwtrRhm5qXcpqxbAGa2HZPWACSog7Lb15LQPo2bQ",
  "key31": "4RJHRyCN3iMZsrBPaTWjbxjBBSq4A7skPXoPBEHLM4RqVHzxDEJLtpuKs7R6MgvsEqUfz3LsogJWoAQJDvEJD2AB",
  "key32": "57UQDM1vBgWnfUBNrAofG2PLAwqym9mCdCwVWHQvxvFTjxctefg933sEp9AqPAwTTbHrqa6JcDDekWqyuzyUptA9",
  "key33": "2c198fzKXvybkN4LhcqZuxDxFn3hZRvr8XMxxj375PQkqcL6j8GYth8RNKkN744ZEYP7LyxxSpg37EPXcrD5SBS8",
  "key34": "2BeYDaV1ji2jrxQKJRnNTK3m3KUa9RpuQJAXnGCpvSJJU166yMuPRFxZ98gJ2KCWfKtjoHYge64td7ewHW124nsh",
  "key35": "4NGRQ3QaGcVifcciT7VoWmZv2wrcswPDHB8p5pJBRMZ3RhLkv9t9szmrtcRgFhPUowNNsVi5VNgPkzm3rXM8rfnM",
  "key36": "4nemA8g66Zhpp152yiMBBpgMDjHhAQfxYHFi8FFVv48TSZPadKae2LFxStExqMSyPmDTenB5pi2aKdgna743K4wb",
  "key37": "5vaNioe4UFyWfw5jfRMxci9cDDq8y61kgLiJ4XJkgWbKDn9qh3dD5HiqrK1yz1grVGk8UC7ZxXCtGUSjHbfwK5Xp",
  "key38": "67SLuG7Fjgxk4zaGn8ft6wc1xFFEuFBq8T9Z3Sca6W5MKnF4vyjqG1yLdsasv1tMZmbWKGbtxaH14aDGhTEVWdJv",
  "key39": "m273YY4bxKFQA64wt2VJA6ooJciXxYwhsKQckwv2gBUx7X1ehTCCAaH8ZXcQkpGdM1Qhx6aV9YLWt6Xi5krf4xw",
  "key40": "58QxP99jyW73qB3f4qo12MSEL3mwZhZLa7tZBQEWrsWAzf1psbwsUPkP7mk6t5vEajy5qhHUihTMDGsP3RY8hn6M",
  "key41": "61saMy9H8hmVU4XeotdvZEgdXKyEaf9M1Uu9H696NSLQUpt6qjvzFVpHwJjS9VKVKNSHoDGJw7hoxvboDAvW5GWR",
  "key42": "29ewBTn5VLDDQwhhW4hUfhoAgv8Y8BYiaB1pAgzyMYTYyYuTW5nYgjkbaWbCsQP69hhN3yrZ5Uf8EVsYggjtTzV2",
  "key43": "37WfqrNmFPFhtL6avq6Fmb5LWDzFHuJpRr3Sz2soZLhgraWk3PQ4G4pJpTE8hSCkQxTnhaBGBgmXHAHMNFPWxqqc",
  "key44": "4zVrHAmGZ6VZ1THpFwY3HYFfTxAwDpAh7nmG6UZn8nPyXXdQAGGb9Qx1thHUxZLRa86fyad7P8s7RtoWXLHbx1Pv",
  "key45": "5UCXGTEtGh1C7NqUX18uSKWQauNFxxsJyGnAANLBm6cKYqZhMVQxxe94m67gjhMUxKpWPkqBtBdRh4tSk2w6HhfC",
  "key46": "iriw8JVcLS2FJWCjjc4cE47JHKS2jmQySB4n63rKCM5fpWWjE5sdDZaagGgqfcDAXcpuxwZqWScshtLsuFAFHaA",
  "key47": "2Rk3MiX5wz7Mami827DLDKyt3ZXogED2ZxLainucjSBaoyzuNCLwoaxr4gjkMYwxeV5fDRFgbso1dAbAup7QfoTv",
  "key48": "5nDgs2EWj7jrbyh5TTHNhG1Y94XiK1VfU2BVg9RTYdamvPdaR1RbFaQGFoarhSNNRECJBXCfhjSAMXdbZeGLZYae",
  "key49": "5zZ23tLmAPjfokEQQdacXFBJKkdXHrQB3qPJeFhsPf276Rjw6PwZogkQ79tkiyGVFm5vm4kPAJ1A5QiTVyJZeeK5"
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
