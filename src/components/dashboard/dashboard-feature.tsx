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
    "3prJNWpb1LCJSUDLhAVkYKNx2ttyiTyQRnyAJYuCN9DEJnBfgh7Ek2d6ae4RQ7yc1WCsdZ1xmHjeh3cPmttG445Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LWsvKXb8w4KVTGAqpuhRscwvSUjhNtNtaxRfgiaQTDv88v7kcrkQbdSZWQkUegCqzwfobuLUwBGifLgRLkH41Xe",
  "key1": "5V2LHZn5REo7JBDRjA37sf6btiUe3JNrUwxZJ34wNViJ1gkrV4wwPToejrYg4osdC42gdgNzRieC4gEmcLHJ9uoV",
  "key2": "2b6uB9rzUBUhbe23v7d9WvuaZayNc8FSG2Rsvu1RJogv1Awzmjn3Z1JJNYFVKhABzcz6AVFeAexstcKXEEBa6Hv6",
  "key3": "588rdhEhKGWrHz74qReys7ww2iozWCUkaaNPJz2kKVUBg4gyY2pkr5WZr8sKRxRngEvxhd8ufVGNeiYYMUuruDKa",
  "key4": "5USG9kyA6NyLJizwDKbTBYo8T1fVzNXP6fKE45CDFEsjNPaW6eNR3SXX5sAYL2B9jw77vgbfK4aHGPFvDtVSHGXj",
  "key5": "3qHS2PXu8pP7bJuEZJ28bzeHs2M5cxoPiu71so6CDabXHz5HkNVCH7fFPbFSBndrvoad23SFcZTKV5gWFdCMgRKQ",
  "key6": "2x62ichunv4QHQ1WX4Dz36LypFrimuyGprePLVFxD5Y4p6bT7adYUEnrZGHCXTe78ZGyEvjjuUx85CgFYUDdfL7",
  "key7": "2C8ghsbHdzS9vfHNC3XaTyz8omqFzgX1GSqZcWa1STXTvkqCUPoykNCaMWL5WoXJfu4jTeN4UfJV4ANW963EWCiY",
  "key8": "5D8K7MhyZbWoV7SMUmnuteyFJE5eDX6eZ1WUm2FG6odnAZv1KXwMxoHittX4tFajdod6cYFAyHRW9UkNmApYAn58",
  "key9": "55ZhFGBCptsgNma4du23ZTuEKcRxD48Q4Wm83mECGBAV9QbBvFF8a5yaRZwYELsvCyTwgNtYENdPPb47aeaq1a45",
  "key10": "5cXzUg1G6dBUyDvDjK4559AXZ6hoq39fLFKBErfjN1oUcA4pxtLq8Rx32bg6WRNLuvfoqZGs1ZL7xFL4Byio2WaE",
  "key11": "2dkZTkAv8Mbsnfhk53KDkYiXyztNrVJha1wf967pugq4mm8Q2YostyvXuZuPhrTy1xntuuBPCcNWBnxG3MwvNztt",
  "key12": "4G8R5DZUoxSQxbVeMpB1hgHtnkFQPYoqeuH6p2rMwjVuFZY3eqA5h1CHcxNFqUqFLnvfTu8mAS2txCN7zgEnpBcY",
  "key13": "43ZH7Ptst2YLJBWpaW2pyjLnyyrj3HYhoWaKWjRq2Et5tzeRyBY2PiZvTG2GSgyiTQ7ihruj2tdWLWZEyHTuZDYp",
  "key14": "R3kYVF6kgiFprSf2xcjPPcnAuFVzqnS3cbG7i8RjiajBPHLNdckEFeTw2wJMjV34YxzCRgKkM9irgbiwcTQBbCa",
  "key15": "e3wmCQqkiqk55p47CeSQmAKcLhq2Aj4utCDJnxB93VLRYKwtbLyuWWBmnFixHpPnPPh2b7MiPUyx6D1LHiMYGPn",
  "key16": "5xTG86YTKH6cMUkg2D5UkdQ5Q33ngP1xLxF152chz7HAmn1nKjKDsa6NifyHfVk6yxWMDprBdGMPbPVZtuFPXGBf",
  "key17": "KbHKPZzxNqs8se8zViqNZjmse4HogJ6KSJE1QUadPTTXcDCRboDVPdS8axHTuS3pq5m9TtvdLvJnZgUkp61HGEt",
  "key18": "2gSqVy8oQ4KX3cUpoHB3cDcUkmW9DQcHp7XCkqW2AaXN6tLMqoKwPbeA2PMZWDYmZTy7EERaM7t3nSp8Gfs3y5Jm",
  "key19": "Tk2Cb2BnLRwAjeSyYgmU7yVW5rbGifLmXXJ1Pfc5CQDM2QeuovQ3A3oTQ2cCNcpHWAXQTVzJHpNzVnmJxseKfpT",
  "key20": "mZwR3S1D4KBAyLBgpVeSijr7AnxVvtmJxcaBHBnV2WQDFqxt4pdVV529gus9QvRSygsq3BzJRZ1xrE29b2Sg48S",
  "key21": "2gPdCvfdwGCi5pptJTNMMCf63Mw4mc8EKhkqqwTRbEWir8sRuEMmYjaoKFFoTLWAwjrgyH4fbDFvHcSnNn4eVi9e",
  "key22": "52mMQtoup9RkgoJJiKsyvWgZR4b4Utn5hWd7qHmk7C3oJgVTJKrrCfVMxf15TKEL7mY2J2Zq8NGY3X5bKuT2D4hZ",
  "key23": "25cB8CgZLeNfvjYG9UfCkQ7BLZV5AXZYdcyk4UyiSRzuQG4Uucgu9r3vbznaKymXZMM6ETedXtEMLvf1EpBdAKyM",
  "key24": "3BznsLwPKUCztVBKjnyqxVCmcP5MHXizDmqVi8tGeTw7rwqoApjZYu923ki53MZWXwH84uukvViVRbWVtnsCsX7Y",
  "key25": "3S1vAPbELR3zzychJdR855oQ8rjufjuHbdVxYh6hjfZUiP3CP4qboZdw8ENTLaeUTT99ncodpCbo4SpjtmtS4Fkq",
  "key26": "RKbpZuw7a6ektBY7q3yrLd2oXUE8gpXd75W8dBDZZ4v2TKpfCu6rk4sL6BjWY5RD4wCZtSAudu3zYiNTF6Xqz9a",
  "key27": "2xUh6cTW1YQDyT6qVMwrdvFdg2EbW6EScHCbiL3LQZSzhDo3JCr3TKKeKn4cNE4iomY48qJLmV7hYP9V5mSrYheh",
  "key28": "42TA16NRoLYZaWFe1272WJPJYpUQRnFcS5Hc8WbsfzhpiXVii7Vha2TEk4JKR8MBXJpF19RxnF74gGXg7nRiwvh7",
  "key29": "57iWPCAXMW3ChacY4QQrvJh3qgVBPa2v17pCbQscUHJeKzD7f5w9SZTahkovkXtC6fMikh4cpEcbdFNBrn3pHNi6",
  "key30": "4q7T2LvQRAPieTigtHJLJZkmFqdZW92s7wPNUKzmiB4gFJXrnJk1iZmZLjDawdVsZk9FYL9QF8e3XHcuCiRp8kqY",
  "key31": "4aLtyKoEzXtQRG1bF4iFfkJHukV3hg2pbWL7xcZYx49e86EmQQhnduCs7wJNBUwPQVfEWaoEpvCFECKWo1uWSF4B"
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
