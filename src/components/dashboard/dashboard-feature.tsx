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
    "5yaCRab6RQYA3nDtzzZHWHSbPtfwXRqkCESf8hS9vTo6a1yYRGrKuazuPYJBqsfhAkZ4n9UFBgDsTF9yVxpUHQuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UpMHDzy7CLw56Y6m75Y8vZqmYT6PeuZeWsrE4mc6wBQ2XU9fgwKuKezF2YXnK3AY7anaxRgooF1MkjFomA9HFQb",
  "key1": "5zD3QHzsJ9E8Dd8thLwc9xSt35Rgystffy42JJa9qXnSbXSYmoWwFrwgr7tKegrAbpBBjyDLnqz2E3hg656Fk7ey",
  "key2": "5x8ZcEda8acjTy6GM61n3FdFYhGsoR3R3TfeAQiN5gJTqcJNrETNAiNu4N1MPe7jdhsJniLZmtaGTPgBUt3HtGT6",
  "key3": "vABJg8AZpXxuy2xgokTrxMooiJJ9hPjvfWUd8WGotKND3sQgKTANM7Vv6kj4ykge9mkhf3aUPepVquQn8HzXqSU",
  "key4": "4yqmDbAMq9ZYYbajhSNRQEGeqfKgLW2Qk6PKA38ED27RRNTNcyDQ327279dC3tiP5DixGAtwvHCknyHJeQ7Udr7C",
  "key5": "4JAoA8Lq6G1Hp4oyiotE6Swm64ebn821pWfzaMZksHz3bX6HuLCLoiQbiXoqFzheeCGmErcnEJAR3iXyzGdiq22r",
  "key6": "5V27qyAdXTQqSTwQfZwcJxzdyVmGMPa3UH8NvydQwYC9E5E4HtBK2s7FWxXMgRhpdSrqkyPaGFG897PMBwkVyvqv",
  "key7": "5WHwkCK3JxQoy41SxgYDLggmKi7S7YeRcGHhzV8Vg15dt3AY8AxxekMzDsxkaPeb8GLTF8RU6c94KjaszsfDEsNw",
  "key8": "4uSyj5ZmNdkZewdPfWJsbYBSEKtanPk7CDAkPBUZrmxkg1q42iHPnY7aLfDGbMM5zgEn7MaUEg1W2AwD4erc2npm",
  "key9": "4qLcGVB6SFG6N3uRXC8DhCVvth5LSL4gbhC3cdgTThYUBuZwkKaH99VGnH87tbp1L8fjF75gLURpZaBD6NvDdveD",
  "key10": "4k3Bq7xEA3eaCHXJy36Xy3Dp32f6HTBtfoYVKeJzVcGnz2tSyeUJFDcJ41CCjXU1LHk8VomA9Qu6xP2nA2qdkSNH",
  "key11": "3LKR3qNEdKqn77PjiZRaRy73s1Sqj26F35WLazdpsPTRAuHdSDjWpHgHXj9AiNE2e5j3VpA2igc9rfbN9wEDuSyj",
  "key12": "4ZtcHj9NFfviWvsdDvcnPfKpN6RMTCrfNvhKaPH63g19smVY4yqF7tWNzv88TaVAdEQ6QQb8YWo8u2NecHEkHFam",
  "key13": "25tZ3s66NPnWjZsYd9SNLCyrRTpix5GLoZeiJcvhNHZbwfucQpdt1mjRnGPFW5YWvykKVDwgWvo3FK5iWehLkXfm",
  "key14": "3QXKTqu6nCmVrfcDLZVdk3QKEh7HSrxPjwhqFFV3BDEDnHPNY6K5vACJr9ooihtB6s49NVCo1mX5EaWddMqPvdSd",
  "key15": "4aqq5GMGA6FhxoPUYMDLgPXoWXEhYBBGJ53gcNmUzf31uTrMe1hw3LNLCahNJbfjJDJMc5pkfmsqqYzvTbYbcGF4",
  "key16": "2mCTYkfUQEGUyALf5MC57hdDTtfmjHHHfKhoMN95BLCC1jf2fmMDMv6RsgGGwHzGLTJceEgPxuSatK57P1B5eHfH",
  "key17": "3KZMB7pVddDEszSJxSECbQPRoF2ePNU5ivrSt2BwEqgyopvRU7NZbVY63qDHEKezDwpRm9h1QMbb4g7RCGSRCX5K",
  "key18": "i5if86PXP4UopiYpUmUX1m6W79mnC1h7fi4VDFSdNBApWu4skydED31uLBWRWyp79AYVhrssdHUTF7YJV7Pi5rW",
  "key19": "29QZNtghMcjkZi931EHct7wb8fSY1yF4YMgFVjAUtHz8cj7HVU3qCzVj8dT69CMQ2DaT6NbvUJkq3XKHFX1ZqPUu",
  "key20": "5GoLuTi8syEs2oHRNPTCVaerB24Vxp4vWkCseND2f8AYth3J7QeHg8JsStawzdpeciM9t5aLy8YJ9g7w7thXTEWo",
  "key21": "3A9FwuheQtKPpvGaT9s7TVWv9QqmAQ4Q4SzMKVhFC5SHQz4thdJoEGstJbZFCfqy2S2w9LxdDKdNyACUxLmuq3jq",
  "key22": "4roi92hkoKnpcCzXMGpX6SDf79ARjADDGPdQwdR3rGzmnRmvgCEnJWtBCkwe6KvVRwv6i7qAfKtfzPggbeBuATCq",
  "key23": "4tUB9Cp48L3QZVn1LRVMSbxus5pWudHrsbQ6n1PwJWV63SMcMt8c7j9QsLhsFoVCEmpJUVrtNSQjG8X8LE44d3WQ",
  "key24": "49bEsyMdb6Ta1GSpu7GBghzwMy1nDwM6Y73zFrKvdGdZpAyUXpG8TvHfNcUGyhNWhYBgufkHqVgMpGd8D3HuCN9g",
  "key25": "3YVztmWhfk3YBUeStDLxTbVdvLTjuuCPtkphVfznzg3FrT1UWuCocrjVwHufkZKh6T6dNabkvEdE5Rg2k7hYW2V2",
  "key26": "3puzXG6HMse84Q3y4KgoV3Ey6xurH9rFrnCWoBZya374RioPRcNffgGh9CvsjjZXWY8A39L3386DMzcTJMRNns9s",
  "key27": "WCAj4n4c8S65QificVi7KkYyAwJBTx4wKS72gQawJahY1mdeNRxi916S7NrqYgw8ERdboUh4uRpA8TqSVzzP8YU",
  "key28": "5EmuwXCmbj95qm37cBWc5ipgDmGmYKpAqrsms3YhphQcBSs3r4kG6mKzm5Ujk2S83V6s44AX6j5LqSEk248wHnCy",
  "key29": "5cKt68e5Dc3ZeiQNeSXm839g9bnsmLcPXAyMM6FWT9mCV4HvQa7cYLPajy4DNRpPFKv72cjZ6633uAV1s6rsGn45",
  "key30": "YanBtAWWVJ3aXCzXoE5Y8uqMinvWZNPQRHFK7vUDvL6Qd5digad4V5wj6awUcc35hw3T5r4KFqxtN45Ti5GURgX",
  "key31": "4yTsAYyG6z1q7aKc3HZUt7uEa1vMFB7GZX17yQwd8svSeDNameNCkNErZNnTDxSwnHbQNpQqkY3gHETHUNKufm5",
  "key32": "2haM3XhV3mc9s4N6r2TLsZdrHdxEo31VL72m5PKp236WwFCQWFMMG2a9KnGEq8UKfyQPeyZKXxKLdwFoJLQxYzG3",
  "key33": "4CdfyyYAt7LrCZVCusD4p7EhBAxyeruK2QGoFhbtYxobj8MfGUtoELiFzWXbMoHeUzQUrYSNEg29WevxbFwLm73A",
  "key34": "4SUorMhrYNXibC3Vg1kg6JK88aPFXZPs8xYvzqEeszwGut2xWWZMZgnH7gsfppc87FzZMopAP1gdo6HhJY95K5hY",
  "key35": "2YxP4cj8Rk6tpQsByxwkxG8oyHf4hbhvdMEX2nmUxTBJbD4Tfz8NNAQGqUSsDBFKE39qmochgVmuHEbdxXynmHhd",
  "key36": "3iYHLGS8iTczJZug2f96boHnK9qxLioJeKiwVrzCCvafEaUVjJ3g1JvFv3vvZM3tZ5HXKasn7LwiKFN33XtnNHXc",
  "key37": "ZEBBCYRMuBvG3AKeK9wEqYayToSK33FYj7FgjRUEUPmFippLZ6H4Dz5EcdE2dZNXvVJK8VukifRq7dUh8EmGyjA",
  "key38": "46H59hUDawsjsMwifrnZFdpNwFSkQNSCm5q2CbuSZViDZYnXPv577QswzGAWyQfAGiEvFNbHXopTYPeMVJMe1Nuw",
  "key39": "3u1bRYqNEYEyxKxPFY1ssGnyzBprU3S7zFGTEagwPtqqNtLQL2xLHr6mTvP9SvbK6uMa6956yx9HV2BnEe3hFVqE"
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
