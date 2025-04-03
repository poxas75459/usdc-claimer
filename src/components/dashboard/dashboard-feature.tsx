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
    "64GDRrXN5X7nVD45QdTT9HJi8aD3xyxgoMmU4LUyydbaFucgJHpxQ8PuP9SQwZ53PdemXtAfHyLvuX5RrHHZoXdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R2J9DSCXu5PuexgkG1YNRMeLjeeoYdUsvcReeCULHA4ukppaqa31z4EDKEbv1qMqjsio51dm55zd9ajuE1VNimz",
  "key1": "5cfJrfn7Lif1jyPk3siTVfjaDqhcFtMqUgSiGfsdSPCesaJsVbb61xpKnQ85JdR4W5iB7j7DXi9342vdYz5SktDH",
  "key2": "4DrSmwu2F8yCUfkhLtv9uLLJVZUagfBkYJKQna8Wcyp8Wgp2KVjkuLheMJYqFVUtqS7GyUBCoat8Gy6qAixcgs5R",
  "key3": "54dsH5JHuzjtF93y14CkomLAcJAH68xcEQjqRC1HzyezzHeuPjb11NWDPoiizMaqBdF2QHeLMm8zCboouYUGdMTr",
  "key4": "4nvqVNpTjwP3bVwgFtv13Dm7Vme5cmfBVGQXqQsiSskz4iETepyp9jbckhxscnWgF2LxjdK4D52asA619aWne699",
  "key5": "LQ7FBi3cdUo69b7PnCeq9uV1Rn2BiBYdi9qB78diSr7e3hW7uuzuw3Jzz94w8ooCHehMNe1GZQZ1kxPaKLfZHTj",
  "key6": "3yTZvxPp6uZWup7Gab9NvrKB22DAiBr8L7Zi7PymksVtB2h47khJHZ9vwbb2rxkcYh8cUbq9C9cyarQ1jZoo5Y6c",
  "key7": "5zx864uE9Z8Wsu6ADmJTQco128XKTk1EbQ2fNPXhTDodo7AgMRRktjZeqXL4oDUoTDGd9njzsyBYMxCdPjSvMj1j",
  "key8": "Px6FfK31NmNhupTz8XDGyszxus4fCoBxKsy9Z3ynmUEk4CvKoWyAabrYfyMysAuWVsg5pLcUn9VgdoaT2mf5jWQ",
  "key9": "43wN4WvartkPEYrvxwAqY6Ks8NB1FGqxRkpicoczcNQntEzNUz76dd3a9ce8tsxdeTQoxQzuYTXiBCoKaCAuXRg",
  "key10": "5aJeX42DKyFDjCgjdtcPjtHHpE2zBSLcrUsyUzVCutZ4EyT9bDsqQDjT764xf3sZwc4TnTHH63wLnJTgbCThgW8p",
  "key11": "467HcC4DzXkTsreAdVfKzmUUXDRRikKnTUeFKDyXc4ch9Z9mBWgtAyhwaT1NTga3gxa5EAfM3czja9w2yqzKZqtw",
  "key12": "2k2DnRLtwT5bCj2VXcge41cvgjtsxGmNMFx9SYePw1rGgxQHqHLRswe9azMJdNgnoCwJZKyrJk66Z2xBY9S6cJ9h",
  "key13": "aUDEhn297QE1gkZ7QHPnu1ypbTTQ3JxNLZ2bnuCxaqt7grT4HCw5fAVhdTDL8iVn5A2ueFasiGe4dtaxGAfTt4X",
  "key14": "3zdiPWZPYgScrMAxfpeFE9DAzWNzJNWHbKhxUsngjDE66WdEppg8x83TB1Xy2HPMnAoXyMho96BaCqfMnqURxs2x",
  "key15": "4Yzca6eGVk3Gc8cJvKBLcT1FrM4nYsjDQrJhn7DGiP7zGin862YmL46BSx8gcXd2BkajDnWGpS6FHpMG53w65Cqx",
  "key16": "NrBnrskGZmyNduR88n3keP7iDAasNYavGi9Wy4Zp8ig2aibtqzLw7r8pJ6c1CHDMqejQpQNW8r6Ep6GJAvea8jM",
  "key17": "3pBpVvAHvDnYiYYb1EjRZYeE6kUhUAjVDV7C7Dw8BUvfYKrdFt9hMqjeRwHyh58TaLJHZJ316hV5YU9UqBHZwwP2",
  "key18": "5nwxhYG4EENZrT1zahvC9AMy2jCYHQzLsEFA4Nh1ai4YnyoswYHJHDdgj3ig8st9daqix2kgX9DLcY1FCWxLCNAe",
  "key19": "8231jWqXRUMwxz4HXMabRzdJgwmgPam5Ugqw9TDyh5Er8CRA1ovDahs2CsXnWJm7vnqTT8G8UJhCkpZ5u9gHAwM",
  "key20": "4xs4TDruDQGdekseNtNEGNzF5XThkFvgMWt4o3cCMLsvgtP3CMKzjc6GXsusJm93UdVy66DuA4ypA7sz7g56oBQ7",
  "key21": "QyXXkG7HgvKizNzmVwmKdsCMmXAAmf9oX7AQM7VhsqhGAjwPZ4sWekW4U12zUEH57wGBEp8rptjrBvcpdWF9VGy",
  "key22": "4svo4BLkEJgotzSoZgd5wM7iZ8q3KtC6yTaznQn3iE16SUFyym81PfY8S4KhfsExB1k3vuLpv7oo2QfKjfPo1UnH",
  "key23": "2TXP5CXFuA1LcdzMUnCqDocRtn3RpAjBy1wS3D8XuFsBsG13xhwDTVpA4ovY9mEaSnGkYhDcv65eesFzJbrDgnHk",
  "key24": "3xWEyjSqwfHTzuS7ZYJHaQeMsHsKNS26MsaBgRgzZJBEPmEs57ZkqyFXSFbaDfJbuVMg1QDEKjdp4V574LpUiCT3",
  "key25": "53Rjo8BdfNvryvg1cHMFALBmGvVib93pQ1FYENKipX4zoJV2PvgJAJE91cfKtzEt46ZPBSqYiCKyALLCHiRpTJ1t",
  "key26": "3q4nu59KqxtLbyHtkNCS8cxV6WkMZ9n2ZTTH13wnL1FnVndvrM9g9XL8tdJ2PriKfLVBZoiECX59AJqY1rRoMQ27",
  "key27": "3Jxdepp2deZadLM4Dr6HVJuGjUmhiYUZjCSfpB6wBjQ3j8LTxPMim2WXzuLqTs2KL8UbqsFduHcAhVfA5GZHFHKZ"
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
