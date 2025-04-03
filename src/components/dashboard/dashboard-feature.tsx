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
    "eK3XREeX9TErxuVntgFFchXdFm1HAmkmLeej44DsJYx5vSSHdobRdAL5FxSP35cS1rquZ3AtLRLdjQZg8krzw1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4csfDjB3CLXN692ztE8hSYwp6aLt3B2D2tdrHVsNCBxTD2EuyC5VoWiKuxVJwqMAcgCKYK5s52Fip94FCvM8WiYd",
  "key1": "4JeCAE3w77C2HauPa6ja9XvQx9n2bozmQ4KquAvdptmFuqGHrm1LhrJUJy7yRwUgJnxJJDM1rjgtC4iGB1QeffGs",
  "key2": "XpnDvvsm3H7m26mpPusoFp2ehzXcTYDeM2pSXa3wC8ayEbcqqkesYetdjySDat6UWCkK3bSA8ZfKksYjWyGHhvd",
  "key3": "38Ck8GEwjNxTEsrygjAD9ixNP8rKzSHE6v2fSFbD8WMPUipWuh3Fg623psLX7T2UVG8dVV5GPczMHMR92AtR62Ju",
  "key4": "5UUtQLtT93vfuXG4GtTy8UKMYRy5Zahg7tyKF5CkBB2RJxGvFjKzCP6EbaZPicbWAy1Yt5SjZ4CXJGddU3JrdKs4",
  "key5": "3p9GgFrwWPUbwMrTSMFZSvB1LR763qu5kEd1gV9RYEAGqQdKjWYZbexSCh9kkA2X3fy8tz37MQSr1MWXoMu5Lvit",
  "key6": "2FcABsUZ6edeL3pWXaV2u9FWj27NRazsHbWL9FCAcMuQ5MA6KQFRU8PEtoMA2fBXF3cWjKt9j37kRXedxXrUsiZs",
  "key7": "21L7nWFQ97tbK92JpzuyBWN5y8MW2XAtibWiKzbdgr1cQrNwLeSCAp1RLEkbZsdAcjg4FMnYScjz6CiqRKZZGyee",
  "key8": "ojPhgFDZyEPZp9FCAgnpwydeE6e6MqLcb2HWw2K8iELBEHWfSgUkGoR2iFQaxe5N3Tw5RqATu9R5ajbEVfDRdwL",
  "key9": "2M3kidsA17KQ29wrNYTkepZFjXp1KXwdB6jaJofPXKPXiu1A8y5bbE8DfUpeHgn9eUCC9LdiFiZMqme4KpxZdKXB",
  "key10": "oMPXQ3XfeWcjxQUu5TpyQ3pV4QzwQjcu2f8Fx4RZBddgVzFUS9MCbwsobw5acHBWd5xYH9GND86fxQkgQvhtKxf",
  "key11": "JkoLgCGaitcYsxWMus2uB5f4EF3xqChzcVo5K57HkYHDsde9csdQya7QmJUau3vTKFchDMHThBjVS2Qj3CTwZb8",
  "key12": "VWp8Hwd8eAqsx8JGwHoe3AMmgms4qFLxqReDbyWFKQEg5aAG69KxXxT7SvuNsSgMNcyxaAvbeojqaxG9nQTyaBo",
  "key13": "3oAL8YDPQfMqV82VfJQ8xp58MbpaYF41oeCXW5gsgQdv2zivSXQ4XAeo4gFb7gxVvLQgoSq6GAFzxZgcq5h1Ypbo",
  "key14": "5Sanew8Whr378XquaX1Dhpk56w4iKqEVJkZmVPKPkgA2X5LCEuLWmtsKw9jNKz7YxuyMs3QMADyJDSTiZRhrTMXc",
  "key15": "24AmzJ5giptQipnCepERXJMWXLYkmYoL7wvSHoZJarNJL5UzfWixZTy7HUTJYb2521RPWEKqmy8pdXkpjPsYzBSo",
  "key16": "2HUbyUciSAFbMbfL9cfu4uaSBkTM3GhFKQmL9ccmh9QFaTj85MGQU4dfsAxwHzwTei2AVPeqkjSGNM1yHhwZKfJj",
  "key17": "4vYA1i276ZjbR4ApYvdKXuzwGxKP5MLJakXEVoUf97Q2aWxdjeRk6x2xcVvPt8BbmEobG9FWTciPNAeL9g9RY6xf",
  "key18": "2zBF5sFGopLspJzUWWnRtYtjfeuy4QUEttc6jwpD6wzyuujVYCAvFDUtE3rxZWxGzVJ6oLXx3hvttGwhTwBC52id",
  "key19": "cZuoCzBrRf4DeZUBTPadoH5it2ZUWh7JwpFse9QxHnhSeTsCvPX8QiHdE6QuxwKo41sGzdWoqUVRJqeXZd29bD1",
  "key20": "3v3sY27R4SCCeAFRfSvBLSB71o2fiW6bBJU8c9XDJo4G1hkPEavsaM5ixzpQx4NE2togcd5ZdHAvk6JVY8RA6pt4",
  "key21": "2PKgZv9N9Vd6CPsCrHMxDdxHE7EH6qvALac3tnXMustbcceP41GSbSFQuLBzVsZ1dekDY9k2WtxSGm4jm8Xmaw96",
  "key22": "2N25jMHuJboPgDZhCNRUVZNZo7t6h9trXJQbtcGGymcuDuobMBeghz1uz6V2XMhcLK8S2kGTPgwLV9tAH1GrcLQW",
  "key23": "4SS8eqXxYiKhrkKMMpyqX4Jyig7NfgoXLfuK2KbPiHpHLTZuU6ZbepFiQR8NhaGfZWVGUoAxFS9t1GoLhaQhNWnP",
  "key24": "DUr1cNjiqDtkkUjzRwYUnR4dTxgh72CaXr44KdBUHoLcs8dou87rYVk2fG1ANoSzx4brMJhRGLtsqf6tJPbayYy",
  "key25": "a64Mx1mshT4TJckiEywN32a6CFWALWBdHDPdzWdtmNrgMTM32iQUirGnjceUNV7c75aGgpieCTK6uVpSCG1prJz",
  "key26": "3CFxzyQMekbWBCv7q8TCPYodsK7Gxs5kEpcdxbsgiMKdU76ggMdmHsdU2nHj442LfFCjwDo72ZartRaHkrYZagRP",
  "key27": "2uLVSDVEThH38HHmnym6RZ8MnQjBt5bHEzoy2CfuDjfzWKhxbkr345s9vEGG7uo1Pcd4Df2KQhKnCQ3zX8s68GyQ",
  "key28": "3eaVuej5P4qDjucELiaW2wzTQszMERFJj5HEXEHxE7ykT3mWkq93bofhpsz6Y7e8MwKhvNE9Qb6cfi5yrCzcTH7b",
  "key29": "64BphhY3v1vHxoXwge9ocpqoRXrLt92ptnMHwECm1xhfcM7EmZ33Eqofp7CkkApcKQ69PvZAoU1BCmdLV8TLoYEv",
  "key30": "42BpnxMbSkstvyHeo2uAj1BqozRb1yuwH5QpZ7ZXFtCdHQy8XNXT4YaThdy5N51qXL2fPFooCE2ToUWczJQKMHgZ",
  "key31": "27uxzEvxkVE7eysMxMcYPnh63R1z96Q1GqJYf3cUfeYxDUBKrzEccKwCc8aa8fmZZ577qgPAi66kK5WUBPudCU3Z",
  "key32": "BDAnK8e2sRZj3zwx1sQLECb4uhmVVaNd7RWdnrd3ry231X2gCVzbh112ThaoiANREf9HquTmncKnn3ER3nN8aFp"
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
