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
    "5PqKJ8amb1q7UygzgRTc2uWRZNx5yKbRd4ktvnVVdobjPJkhLB29zcELSTEvgxDRDg6s4urFvNqwezkSxvoPWguw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24cWGRpnrktqm52PUztSsYvM9MVCX3B3Umo1yVf1AvH6sFLe7NvDsBAUKXtnxr2SEPwp3atvCwLSx2NhqQVUcDj4",
  "key1": "27LLgihuQ9HkwjovF3U4T3FaBfcFu5ssjMQE2pRkryFuY5wv3bKp7EhTR7PrAreha1XXQnkb4XoqTqSUau5jf7gh",
  "key2": "5HPRk1WrnLQWGZFyWJFBDJCzUCAtPdQjCUt8kebNyibYhW6XqyHjGPD1QpzH9gdw8t6fsXP8voqbZznqhgMda9zE",
  "key3": "2te4Ti87DZeCnhQ4KEZaZ9EeD7QVQj9nkfT7HsVtsrExGLGyFrFJSEN2NgVQN12DFLXrYNduqgxnAQKtRDgokT6c",
  "key4": "2muUhufyQuTD7mpMqjMKfTTNqwyNU8RLxwnXs67sqU7TrkdKDWtbiPSnmsTN9ArN26mccQEw2AE32m3NyQptWhVk",
  "key5": "ZAoZDKuRB2ozu8nu3ZPk2K6NGvXK9hDQmk7UdqjTUjqKvGdnyjPnSfRg1YXYTvebJeR3Y8BsokFZK68ihDExCQW",
  "key6": "2YXFKScN65BiwiZveFXFp9h4fhyrXYGTpzEiGkH5wGsU43K8Rs8grKpUa3vTK4uUkg1JKWPB6SWL3pCMGiNdbS94",
  "key7": "78J3uvtWTVhSYzDm5TSesACV3PmDvAFQswFjyeHSygvGLTBgjAXHuMXoPpQbusYTvmchtV6h7T2o1xsyrf1jsGj",
  "key8": "2LfSm4pBoZfbT34vhjrpuCZ6TEFG8pMojiovZ6avcRKNx2dk6uFir5CH2RXYhvf5H7YrkscrFzBLpxbFFkQ2GQfX",
  "key9": "Y77drj5rf58M2s8iEfm3znyYNDhDbCyqQNpqH7cq5ApXmcwaWAaUT4US13yinvfZtrVs4hXdj2Qsk3H1Hc5vYG2",
  "key10": "4WWcRuGr6ktomzVwGiLWdPrSu3x9CkqWfYrJDCWPxRY8BUVGp8tZ8bY8m4hr5RfXEUuVkPz4iokaayBhLckXK2EM",
  "key11": "ByPDwufhbhKozYhTZfQnTwoP4u4gWZGPeydYPgWFZqTs2jr6xvTdJnkdCSsVG5nZR9VizSs1ZnVk3mr9DGmSqWJ",
  "key12": "5FEJUgqRNy9BWhbUhghK4eTcFbN6f3ncWorCzb6Xmv9s7QSV5VtDLLUzrN55VTcR64kPUdNP2rAWdMtE87oxDaMp",
  "key13": "5DHdioQaaCa3CoXoZKL7Ra3UyLUC8QqsZYXC4gS8wTMqo125TDL5kMK7hsrGMKswS8h7jzssZ6YmZYNt1U2dmDvX",
  "key14": "3RtHQydh56CLgVpcmhFbrtebCHAYF4cjRf3yfo85uF3JkN2WLbzkYpJ2ESCSuEdU3rfvm4osib63UqquF119x78h",
  "key15": "2kUKYysfJCErfC1rLfFVUu9dLEtbzUWtEH8A13NPvDXnCfUsz3xPPKhG1vKy3hWNCnZr9kGmehCYrpUm64jjLeM8",
  "key16": "57hu3WE6vNyZSJqbsegzBGa7Cksx6KLT3VPFY4MVwNSe7tUC6aznusFDuSv3b4qosZDiiiFx2DoFAVRsD5MLvVp2",
  "key17": "5AUu3Rsq6jVjfk4UMgDPNwxVFozC5h4kfMQKN1NBAuVvpPt9FGV5jggQjzzprbLkThJ7M2bBj3xrxcAv29abUhkv",
  "key18": "5jxo75UGBhqnyUMdc7QZCyZDY3GELNFiZwHTJHcfkvgARXPNxHUYuSyDGzLaRbpVLGh6XuMZRgCTkvvqFbxpNQW5",
  "key19": "3AANQefdRteqrdPdHt6vvt8PmmDAYKuxDyEL9V8tDha9uPJtLpH7ntkp4PFmUKoLhzym66xzAwL9cickRePGC9mH",
  "key20": "iNyFzHdUxpgCcmJQapDqYJAWYo2yAbJ4UnK6nHnkkYMRXCbVudBUfHWUQ4ADoqQytxi3opMjQWfyiRqBCnP299f",
  "key21": "Ay4odJnoN4yDuajyxG7ds8iTZPoRUrfrgTiQRBa6kbhTCWfBvwAFZzWxYzZ2Y77u6QDdL5taDR2QwfJFixjgoBN",
  "key22": "4EAKt5XKrmZqLhVoaGTzP3JAYou25NHuTEprCzbDbJEuSpd8yNbKozaY823p3tmbiTUHx23RHYAbE1vfWoaoTyBn",
  "key23": "45gR6wqiwybbmAt7B3HURcNsRyJgCAJZ4W2Bj8XRQBfNxGS3ryLYbWXKKLrDHtVtaU9QHKv4LKpwXnx7fb45bGZh",
  "key24": "3vwj8ZgFGsk1RTW4gMfW4tSooDNhnWPbg5c1HdAmsZZY4TpYmdiWT9J3jH15Aq3HvqtRA6zGi8rMN92XQWbXqDrJ",
  "key25": "u81mK1PJ6qrqyJ4m3jJG92GYF2XTYuLwyPEJp6y3Sz8uTz7chYMeCJTiyKXppUSUvsPBKHkWAFe9tseFbGDpFBR",
  "key26": "3kXn8Ftef9phPqQdcLsSREtTqbHiMygVKttEAMgux5oNtCv1xP2WDkL4CE6H5vwbofjTUMrmWZTHbwbdKtbVQAnm",
  "key27": "52f94hnQmNRdxFgpUhsdnjMBsuTYr3BatZt14xDELosNxwup5qP2Vi9Gf4w8ZCf4zKEJXom34EcVZPaxx7ssFThm",
  "key28": "4BXNraNA1SyEMy4iB27dts1X6dWP2AUbV62DR2cYg5669qyZeYuNfDUNWsMVhjjQ2Sgng2MLFgU5DBuiS2aNfr6J",
  "key29": "4qnPTaKQfMCsiNGEFqQ9AKLv6tydk6ZsKBXF4v4tX6GgDrNaPTKNWPBmADqnUL7yRgnYjWDZ6ori2GtxBQiAi2tA",
  "key30": "4gAsX75kLdnGTkuZFDkLYER7bvCRkd9cNjuFprR36JsJzrL2rhSdSf8oMtffwiWh6cZFELzWiMR9zT9Q9DoY3MnK",
  "key31": "3uPBcCK466jkJG4iH5qUpHWmZ9HcLXxZvAmXvBtd62wm7QEQrAUQsGhq7ybHsUqvHEkmnj3oGXJd7w9njRoc1qoa",
  "key32": "2aHM46K2sM8puB7c9vtRSeK8avXA9dRnmwZhFMAfh8o9LuARMHZWennaNgG9wcG3HU3tnC2zsi3n5FjekRbNpqi5",
  "key33": "3K1PEnQNWqipXzPuUcQ9FFbMGVeMRBywGhVU4VXKzTu9c8abk6WTSVkAsrv84SFeC1MnxyeD6H2FD9QmmBERvMXz",
  "key34": "3ircGMWQLZkjtQMxhRLNhVggTjdN9irPYbqTWMVGRe7t9v4zpDXi71tRwTyowFAhdnknTXnQfMu1GrfKSDW7QutP",
  "key35": "QsqPyGBR55eS8iuWtSwGVdf8en7SuVzZZTMfx6v2MHCUfYgePgz5pP2VrWFeSVVW31EjKxBizY7uQGc5LnFq2NM",
  "key36": "3kdQdHrv8xTr1ezKCCJ2Vme9Z46PkojEBBYwSKvcRS6B5N2eCQXMHEFUsLwnJ6yzVanfcFnhSXjHhsMpR8bkqDyz",
  "key37": "we8vY5HvQ2tAUy9c8JVPuyKy1rG43FEk81dabqJvnof8H1qTkDhH4Cwm4g8nw7Gqcj1jfT5hgbXzawU43hDQbdn",
  "key38": "mbwreN2NJsvka4ctTUWvK3F4dm3DWLoMEWL1Ui3VeYrnQfFAZKzUCVjQHmbWhJQxDaFwihLxdyvMSDCVv3xDbJk",
  "key39": "61aFeqRk9Hti7b789pi5x7eSAkUpy6V2saKYpmUGtkvHyzgkDvT9LTgHBaETUUoffK9jETSmm6oNMdHk1Z4Xaxrq"
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
