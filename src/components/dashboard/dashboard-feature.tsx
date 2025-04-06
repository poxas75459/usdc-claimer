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
    "2MbP18oVPd9ASuuUAmQhvVsP4ozLanpBbmpCRxWt7vGbwcWC6drtW18Es8cKtDvZBZR6PdjP78mSXioD2Su1wN52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24JVMywhCeZaVNv6h4cpctXm9w8Nr9G6RMQrQYLL7bXQwdi7DaJW7MS57QvMJg6VYKyhqcvuPrCX8D7P2uM6MuuF",
  "key1": "2MuLvLiLGJhViacdx7dtt6pvSrXXnAGUKSoQzWi8NYWUGcNGdKXPRzLg8VZf5MgWyVMTasxf6EbQkgkC1guapNv2",
  "key2": "9TXQnobbrbwktizvx47wZPBSxuHxJeC5gZUMLPTrNyq2wcvDqirLubqGmbWYS6NSsQLXG3KMgRtcSGW13zZKUtV",
  "key3": "56hVP2E1XMT7A2DzXa9WRTmcqFyoKa4A9nhi6HzzzUPatUz9WbGhEKsZetB312MwzK8tjrpU8drgyuzVGmPpCcYZ",
  "key4": "3VBEA11zNxDzngYD1Q5kYU8fnBP2CR5yWgt5arT4FLMv71cDhHcYvV7PqsR6GHZ5htKEAWVexCDW54DCfJ14eHii",
  "key5": "31kvf3TPnCap64C9yFFKwnUWEYyCxn2PAoFTwbp8EvdvbrDV1fJ6opoXbURsQzbrpcqP9uj8b1UGNWRDpVR6jBxf",
  "key6": "3ptqranAvujXp2mHPCd4jxeetHfnhyy83eQEbtbvpXksgf9THHwbnVXJtbq5hT8VhgC1wHj71nGm2JwefpNz9HF3",
  "key7": "4jhHYPDExMK6SHCyroFjiU2fGzheRv2PQnghFg6E32Wzby48NmrDtNx1gc6FHAh8HB4RfqzW4wvC8ca7DBL287t1",
  "key8": "4G5quKccX5BuvEckDgwb1K9hTYEdmQDhEj6F3cZrx9aTZkb1vxweDLNBaLGszMergF1qSnN8C2kkJkzjRWnzKiGL",
  "key9": "64vSPQ96h29vAetcymdGmfcTZ5HFZMUjrEEvXTVZpnSYTsD1BVNes7m8PgFuCoRr163aV21TmP6nXhnKux7y7ni1",
  "key10": "2FUQ2QrgzHZfkNf9hFHmaHKniC8qpbspdnQ65p2T1V85azTF3KTqEhozwrKcMV7DpvwR82H6YyTHYUmaBKtnjcbi",
  "key11": "jtEQvJ1QRdpYzG5p91EQgbBuAA26fkQinmrAEgyngEkzWdMUVGrnBTbQxpi6kxpH3xMMvhwS7WMZrZnenk4JPhW",
  "key12": "4uWtUsHkviEBG5PSoEWuBZGJZbCnMQ4qQ3ESdLf6kPMDZ62TbzcxQ5YqGCg5B7UEfD6nma75aHMmAMQVHUoxLdEr",
  "key13": "qAnzAP5xGedBp9bw8f383dMwC2iqkL4f8jSj1ZDUkAXKBAC1VXbnv7LzwG3faSNQcoDxaKMCbfodAKBpLMQvRM4",
  "key14": "2GEBqte8Yedsta5smcKbZZGjAjx2PP1VbtbW29qodLUPhv8nimfAjgPvz9vz2MNfAdLY8LziwScp292zNV88uV1W",
  "key15": "5E2z4svpfayjr5F8owzJuC9kwSp2U2sP4iFtRinVYAWd4vvCjrHismr5jrfnvorEFR7tjrKnf8tpmXwKz6TXtXDq",
  "key16": "2mxbDAAZLt6YWkNNken5tMeRRHAuem92WiYiaQnCoHdQu5Wyipfzg7TGU6po1HxAmw8uyQYJVvuwMXMjuYdUsE1m",
  "key17": "3o5jac8B2RnDH69nmNoWH7tjv6JY1v36Jo9YUA8h9BYmLvUVa7M1oqG616saypxeHKSg5E7gFMUA7ZU5jAESYChs",
  "key18": "CPBtXrpmGan9JHQMv412uAGxjBPHDdxx9d26oPG2Qf733x8cstcZunDE5k4rhB8XNSguWdR1an9xY8rTxNmacgt",
  "key19": "Ji9qxc7gu5iLCngujjC5KZ9eeC6ZPuFA5XaFQku9yY71a4n2wXf84ZQAVXBBmsJhUeJZLGDSgbwzZ9XUqcwh6p6",
  "key20": "2bFpLMT7kX27PTNAFN7bHLAsk3AoqDJQLuXejzzJxGMWwSmjCxrkvBprzCGAwUdR41UFqs3p8mqbdDGLormA1GB1",
  "key21": "5TjWFDD7mnkp9vA48Rn46dcuBpWxiApyrpAxDmrjL2nfpm9dd96vmrCzLksPKMJsE1cy4izxHdzmUfCBykpBmtSk",
  "key22": "mK1RMuFFPsS6zE8NYaiPc6M3B4qFY5pzNvCwnkCJYbeGmmyo3FVxevNekR16vEyTsUQBJZMEweofVKmFHjY9ze9",
  "key23": "3GgRK2mbUavvBvpN8R87ywC8Xz6vLZGL43piyAJdzNvfce8s4JyrTQTVpse3zF4H5wiBTk9Xa5W9Rdmrn5oRDG3p",
  "key24": "3XLq2jHRCBKKKsc24YH3Hs85MAtmFPABRPoDtK7ZuGUQRMvitsE3B95SmKSSMkSzHf6y3UfhwxMojsfMcfhgFo7G",
  "key25": "cDeCH5VLk8zpayy4rXQEN4yeQCSodHM9QaDk2wTqtosNHVZY9hokohhbX8Ln3yPYW2XjEJVGPazF5oYhgy5n8dA",
  "key26": "45GDzLQN7A2FRU5e52STAcZnCgBUhL9ic1wMr3H2EWzpjBbPpTBb2zyYniAiywC1dPtrsxHnYehF8jNCLVwpJXUQ",
  "key27": "57ZmaWELugnfWAsuUsDNyj4M9rnEv5f1yyGeNixqdZQFEwqGb9L3w9kn8gfmpYWWfEC5vksoe4mW9ooiW6hWW2NV",
  "key28": "mLzjvsKFm639PP5wSkPVm97aPdAoiTj6cPegSJbCXJoCTMfiDkpWGWz67kW6qxorZRB4udrADTSdpwb5YMRXAdg",
  "key29": "2tGQfpp57H5a2ZW3W8EcjYFjjJR2Fh7YQdWez6ozyXSWYt8XnfdC5dVM89gevZ8sX6zQDLPMxFfg2G1nrsnNVx15",
  "key30": "3iBLnD8LXVww8dN5isJq8X4TxaZZnJDesVLUJBjwK12ySq9dXdanunyA18RNUnQJcCbB9aueTtawfbvdam4wgvQH",
  "key31": "4V2wju56vSyfirCK4VWt6iUag3G7T385dXCaUTnKoAsHBPu1FpLijf1x99DgW1UtyCawvPLxZ8bTYoBhq4AvhwEp",
  "key32": "5rXX9f9GkzPJ2iTB9uVwnroWe38CoJdpu5PrrdrEPRkgQfboFgZb198PkaGGwhZNu6DWUkkwUS98RDfDpPXUG3Ds",
  "key33": "43cfb9AKgsd2SpczRK6x1SteVVkM8CiaDXpwe7MdUvr3Q5RxeFg8Wgba4DaPLipGvJQAgkFye8CteiMpDr99kkeB",
  "key34": "3B1aRkQGe8ZH2tVzBLpi2z7HqsUZCzs5qqp2GeeSsQBgcELgPpYQjVevh9a41x5ouYsshbaCbiJEBWCavmWqDDc8",
  "key35": "5i3psk3rGVQ6wKYKqXWm7gjE4MNk4coexXJH1hdyqqrQgR9rLxZWiRdTduCiyq8bBNdppxkStKPNRUCCzTwbgk7j",
  "key36": "4eb14kkecBaMtPwYJndoPYNvoBTiGBYp6oThM3QgY9Vqwv5TK2PYXTkDFc4geXatSqLtqgdembSX7xe9mXNtXQv"
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
