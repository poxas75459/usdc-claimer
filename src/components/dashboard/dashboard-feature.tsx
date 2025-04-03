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
    "55NRQz93TtQQ9fsPeLypvX9boTN2Qz1p5bWiPmRgXPvKvhMyQqeG3hMUjL5pXupCFxFbYdRHwk4k4ziQZW4bzAjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c6Wiwarnhyr8tJuxFBAXRdCcrwENBJHisqdnSgowkW5RPhmyXP9kdWALNN3W8NqBELWcStYb3jEphg4LeibsnCM",
  "key1": "5sN8ZGS3vERn2rBqazJRLBeogeydDP4aPZSH4QcFtHbeBfq6yj46R4JbgnTrV2AuNT1AjgtnPuCkspgT6QFa89Qf",
  "key2": "Egzo5cEVfN5WmHJ2poq1m5beNrfFWM69rQHPsT8V5V4V99fKQ6v1wVKLpJkAET15jk4XmijtiFw8qeGGYSjUmzS",
  "key3": "5ygnXLfHG9xTkLDd4jFK6YLukSVUeNBe5QJb5phVHkoNkRsRPRDJpXKtigo2LFpHuZa2mqVV9JFVuRyDWXugncPu",
  "key4": "pTDpejbnvzKJ77zzVLxHRMzzyXvfV3R3MvJkrV8DFua9kcvuEnEqYfYc2QxSbdSgkWMqDvgKgkuo541TBDQEUrP",
  "key5": "ajp5SkPiGpmSjZjTXkNSoeEK5Na1HDkS6isuFka5pAmEQvkoNhiz3x41eZFBTsNFwQnwbqhiZdCP2v6BwgT1wML",
  "key6": "3aeaZvbLw11aHgcmD1JumH1GakrBzkpX31iYZNfDrnjozwYNy4eoTvoZgy4ySNYzGiKojVWXUZQG462rXz2VLkyD",
  "key7": "iKt4VNEYBJroRzNDjm4kbg5GTbNJt5nyheTi2FegmJ6hgFnEscJVZ6gA3xuBJsgoWRu2hCUtHhnVwcDTAWR2RQ4",
  "key8": "4L65bqgxS5qFRJ81ctcUs3zPQEn8bzja3KNiuu51o97QuUs7U7YAceiXjBK1jHRzR6TJA2Zkut2WjoipcXZnqSpu",
  "key9": "kNmV8cHzcDijLTDyGmQoGc49soRZNSViWfU1TfaLhUGquxHbFULCuuwFes9FFFiBTWR6Lr8hdz4iTwg5xGjoo23",
  "key10": "3kDoBiRqeE4gc5Jjr5vdoWo32w1TqNsCkCnsKYqLtGph5VDv2xMXDsPaAKwWFfyd3N2Fqi7hpD5RKTp5oBVM7sUW",
  "key11": "2h9CNVfArZTvzrA3HD5rpkepR7fz5MSm944QH6kViBuxsL7ymzdR6bL4yHCbJ71GY2oT4SvVb3outGkTfyeJMEXL",
  "key12": "dNHHwDzgpX9SXGmAXjf9UE328C1eQjF73ELF51JqKr6SD3Eo4Q7xVcMhGMFP3BzJyCT5mEjW53rZgGtnMJatymB",
  "key13": "2d6yTpRsA53QVqvaPXqykeE8wYRir2Pshr25gx99wXZc99dYve5yGbsAE68MXhKhKaZ7Y7utLKHvtGqVth3SwERU",
  "key14": "4BKKBVuxWga43TiJMNBTrrFthV4nYcPu21iv5tUQZYmMJcziEyezKsoXEahEFRBFuYn4jtZPjFDzVzFmGdeRUppz",
  "key15": "21zrxC6a7ehUHeiS5vTVZu8Syp2BJsBR7DEpvCZenMtf5PRQDmbPnAkUxMYqUtBp1Djf9hsWLBNjuzbQ5naxv6Yv",
  "key16": "5bkcXwdrsRHyx6MipiifceVVeHHEkdjwgmwxXKdDUQjEn69RN4WrVQ8Z359Hg9MrHdJ16SDkqeGSDZzfmAsMtcpd",
  "key17": "nfdK4cTDjm6btpRXmhma944dKT8uDHvCwy9wzFr1wb9923AU9yiGFVTHKVKpJoeqiSexXzxSZw9aXy2jQQXs4a7",
  "key18": "4jarUHnuFeq4HWoT45jLimeyaxmT5ms3fzkWiCZxsawGRKFJTAWb5mJgGtmEod1DVbcXvfueZSGuoUJMWejCPJXZ",
  "key19": "24cYpVbiPdgQDTM2DXJvBujjoDAaT135uggqXTSpRwgGs1CosLAp3iUztBkvqu2Dh19WyuKd5Awtw9oyhWWXWRqb",
  "key20": "5EEuonZATcC8BKrGN953wpXG4aWUPqFMdsWu4ijtPHFC3ESbDzK1EC8RxFG2yZ6dpRL6sxaH9AZtuABn55czhuVj",
  "key21": "nMWNYNJw7erRntEemyN1Lqmqu1DgQw2LZhCXuDdX9sAJpNfHR3pwCDSpRWhP7w6iBhVBvxR5vdNVJ6A6rZhdiv3",
  "key22": "4uoDu6sD74Xjk623TmJZEx7bXUVnuR77ErESvdxfrEgwHQPushzRX3w5sewHvX991RDw2ckEmLQUm7navGDGDH9q",
  "key23": "3TcH5Bnh6gpXBRfcnn1yHZWQ8uZWoSNU6EQEFDeEGYVu1C8ALnJdeJZntfxJhh6hY7KQZdHNjDm3fKPNweAgc1Q2",
  "key24": "YFhnrNmgS8knYSziwuwFh6xVj8ZGo6ibAS5Z81XUihHZZsmdpxdS4QMwrEFJ85dHVgwbUYTKM6hXEFck4fAdAMS",
  "key25": "2QniwAmaUH2njkjVdNvn7Zs8tcYc9EDjf54P3hyto2ZAjitDkCk2FiMtmZLtJ7jgYWu4NoFJmXy4eVQTkF8Mnggh",
  "key26": "5K9Z9oGT8HyxamT7ddeX2nM9yCigjYwKwMGZeDdwTa9A6RVHMdjTbSzeXc3SDjGQmB4krnmQHAP5PbCcjobeHYSn",
  "key27": "4ZQKwjMv4PM2WyZBT6GEhuJ6iWfWaFHgcaQ4ZVtZ7CzbbeawmCyscEwsDNzVzra5GtCowSRtqmTievcxuUoL8Nm3",
  "key28": "3G1mA5WUwva8yNHk6B3uqhLTjmNuAXsQg9Z1oCLB3ML6ddHZJjbegwNukj2ZqQNdVnsBnUu6EubGVJq8yyvn2dMV",
  "key29": "jc9YiJUzHe4iRZGBj455c1amCeG3ZeHmKhJncHeSUz2r14XF92tKh1p1k26e4ZDehUnQoDNbqSMXMLstBye7Eq5",
  "key30": "5rvjnmvESLZ3qNZ1cVPuc7hKJf6fVXxtFcprfhwQDRNk3LpH6kE1sNQw8PDvp899HZkgHAVrsVXMkWrAVfXp68gZ",
  "key31": "5JtaFNXDE6fxk6vUox5DWDqERYag9GRqa9kqXYazR3vgFtutR4QGr9ZrexU5CYP2av9CQHPUPTh1meukzye1p7ur",
  "key32": "4T4GA4W2C1TWgedhtfykUTzEcvkui1q3jnWDmgXbj4sQ1KgbkeqBD7PVuEf4XGvbq9RrC1qHHoZWB93zrJbiTL9W",
  "key33": "4DW8zdXNS6bCnJLNVC4w8sPbmYdCy6HwdTUxWdZBaENUSGxxMvM2WuyuqK1ZFWPUh9N5Asakadv41guAPgWNBMW9",
  "key34": "4ChsP36Tir6fErdbKnbrg5NWMqtzbnPuSADNthsyre9jmxUK8YfXtmGnjgPaYp4SQu7tofT5sZVuC67TQAW3Geeo",
  "key35": "4GBfaNM88g6cZpmPEiPxNGVvXpw4ULwJaCVUbzFPqj4pFEpmhPBpmKdJjxoSeYGaY5m4HzgBsN2Xy9gtHAsge1V3",
  "key36": "2zLwT5kAeWUsThEUsZs4KDYWqA3KSDhLn1YouL9iXWFMuANKH2Y372zsQayTDzd3VTUtncGEiUUrJy4esQKjqU26",
  "key37": "539AWHQXsyCta48Jso4PRRi678TTBZ9G2CCiChfkdjRoNQK8gwfDNmJ9pN4DZmz1rhUWJyapfnLkLG3DKFELqdR8",
  "key38": "4ttTtKR3W1NgBcGFXm4NAk9BmbN5HUnAue7JiX6FZMiefTKWsKe5TWEQBdrkqZyt2gK9rt8t9EZrsKLyJg17yxQZ",
  "key39": "3GC4M35GqcLTnkhiVUqKbDhKdHQVSZ8CA7cn8XpstiFHdWr7hhT8RfrZBeDSs53jWKJbdha8p9xkKGxHsrS2386y",
  "key40": "2Y1EAyR4Bo8wgJbRKEreTibHoFRyshuvBwf3gMbpU3yG152SRiLm8AAM7sQr3MNAuGdWdvGXHjPS6YkaSgHFSDUo"
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
