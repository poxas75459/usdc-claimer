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
    "4nvyPHrB49rNkKA9KkXBNCdmrje6hnwcx6cT7Vp9RhEwV9WLS5XoVMdUAz4jzYHiy3b1HZz2vbVTo8U2p95towva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFRjb4Fq9TCUKw2HCzpP6vZ6Sezec5ceFLB75XA15ZykRpeRv1Wt4L44Y9M9bniTJkisAsF6FtRddiu7wgNYfZA",
  "key1": "36yExrHn1u3SriNA4whkHTggz7soinCqCWeVrgK2qVN3YbidF2W9u4Z8PZapuBsh9ae29aEyvJagpdXBdLbxwTDq",
  "key2": "62zFSjwqFY9K96zKE5NvkdCQ7cHRx3Ryxfd8FM7e2Cm4U2mMVjAcA3Fojb7QRSH8WSS5yniV1xqSrQXrcta2aYAC",
  "key3": "3LX4zHWubWawx9Ac43MLbU17u7Tddct5xKZo4bdXzxVJC14bsxnFv5eW7W6noRatXVpui67BgF6Jj3JuVfkCXSfz",
  "key4": "4fCRQsUMQj6ngdkniWUGKUsMimWkrmWrMcdsAAosPeBM2wczhwj3attUx1UnvxL91iQcZoWskAmKtkQMtLBrJV2v",
  "key5": "384vr3vnriReieSMAKXe21jiAnczh1TDHRDUQDVPxkDxXx5DmtcEMSXwzPYbgKbdND4rdZ7r2H1x1SxjDAcdhv8A",
  "key6": "2y8azf2X3MDFsHyiBQKs1nySUfn8qEUUVrpbDBSkN39CkxUnb6fzrpkJG3viphRwN2rbTXzghqobkWaPC5hHnrmU",
  "key7": "58AkYvxDR1TR8SX7GAFePwi7EEvUDiThtWVrmG8kpBUX4rEEtKWLQZKHG7LSftFQznA5fpSeaNpaR9gNUoVPdji8",
  "key8": "MUYAtWtAyTPGiiJBSnH4uTmUgUkJwwrGY151enNqKXsnoZwYbLJvm64hDmTkmMgt6QMsHeJ7xLiH4GiGgpbfGbS",
  "key9": "2Xu1Hm4pyQbYctBnPHXnH6iKPLPnNo3KWY2FYG78Lz2EgYB42Mh1KcBf9FqzQbczrc3H1MQwxJyHvp2eDZgrXkMa",
  "key10": "2K3ei8y6JU6EULznfNWwZ6vxgtXNL7oujd57xazZabsc8umE66W4jyDho8rut2bdWzynqsSqfqX7Gj3kCNNQMco7",
  "key11": "43EUofLTbCUcmgyk5cXuvNQnYgrfKRTS4HBdRFMz3j3zdeugZED6kvewvQvW7gSyMPzmo6Wh4e8fTna9PUkZjg6h",
  "key12": "26wuezMsp9SVZrmATpShUMEBKj1D6fc2LzubiCX4ieehVpoFPS3VKHGfG3Nyyejx9NEFjATFGgvV5ykEhFvDgFPX",
  "key13": "Diay1d1XABmJVsrnWr5hKr4tpnEYDsq8mU2s3cuiSMmJM9TpUpWUaMumXfS4QUodnhw9W2PJzm5F1RFbkF5FnZs",
  "key14": "5AWxkJThDmhWrGwEP6SjGNoE1RoDTW118fskz3pAHR8adRDKojP8LHevLkmHKkoTNcZN2CQedjU7RPxjHSJzHtqb",
  "key15": "8T9kGikutFVLaRqyrzt1yBbwyq5CYWGkgzzBvBHeYXHYZLC9WbKAht9r4n2p8J1u9cTCe4Lnq7oraUHUiTVek5j",
  "key16": "4FmMtHy484bBtvJdAD9FK9ph9WAReVhpB9p4bY7FSqCRYYuMDvLyQJX1BuFVThghivVYQeUanPJ56UEFPZDGkgtS",
  "key17": "2ph7cr75YQ8BsX5wqY3NPf8k4qxVw2xdAztFq5ZENsajjgUnLKCc3pLc4t6crk3FtG6KtvB97T6XihTXUkTQyNaw",
  "key18": "QQTRD9Xws83kCC5ubUnDfnA3UK2H49fJcHYMzTVfnXEP8pwkmmsnc9kevWmnQNQo9VKMg8GN7cHLrbZbgNTSMGy",
  "key19": "5xWN3KUJgKoDEZrTNj9qwdzkwZkvjHt8LBbbBxGN66CYepzfcKywpeZEtakuEAActm3X2HgG1f9EECqNw9mtLEvB",
  "key20": "3fqoCM3kF7kHATQ7JvTZK3E2vN4dVBhXcBq8eTDiaxccSFA2RF8i1mkHw2qomTryGZL41ze29VA5Ew6MpsMDbhdg",
  "key21": "5kTmwDfF4ReERWpCQSAY5tjDpfSyQMsFLEbyk7H3EhqVAchSHCr1DHdUtvJ71KCbQsXavusTFQjyr48yieTL4eCz",
  "key22": "512KVD6g59CuMSya9HuuSFxCBHoZ6hzLxjtXVkx5cqnc24XRQZo4AiXLBp9LqvwEH7wY8vzKfuAzfZnPKf3bu5kN",
  "key23": "5Ndbb7bxU3LVfSAkEgMrZsFh4mFALtdAqnRvhfG8M1tcHoLuEbkUXvXPCxpjBaFxmykeBACZgYYCTFwtMHYHo7eX",
  "key24": "46jTVdTS76BgLJyi4kspGVvhhZZG6bawGdD7kqfRutvjoo84TNekstsG8t3PQiHpNnTw5UhksyhNVkCrbTabidJ4",
  "key25": "5mpMnhfY1HE9A1YfuPa39RCvpUam8bkw4qGXfJ7Ta39cQ8gZfbjkNx9d5To5PbyqbBDvBA8dDCdWCC1LPGQXKKbS",
  "key26": "4uSEHJv7H5MVq8LhCYy9bXF6idaqYyGCSDwm31tKTi7VFSwvvPj148MBLgrzDSkG1pfV2kN4YpexGRHQSj36yUKF",
  "key27": "4aahLyPBQ2jkYtc2TNyB4pKNTimVfmuTedgNzTVzpjuNYc3GygVmuwCpMhwuqrPH65Waze7o4CSenrnvhGCCpmPx",
  "key28": "pCni7D3Q6eh4dXHqVtu6Q1JTxiZ3gYmKv9MntqTJgbUo23rDfvfNPKd2xzSu668zzsGRmdAQoR7p6knJgj2dVZe",
  "key29": "EzkDQWEQwuDuurLmZ7G45antnduFx5f562TxLS69Y74Y4hmBbVEuvHB2uatQh9VAyoGo3qPKtCvmBtBHSEZim9u",
  "key30": "M1M4on3NMiq2u9AyPR2XLpYH4erYohAzGzZZQERaaQ4KDp9bPYGK6vzv6WykQubkBweoFJoRMbBqmzRXcpJmJoT",
  "key31": "BagkZiruTZEtgkrkezuemKEy5bqCnDd73T21ohPvkoKD52wi73ZvY8dtZRaCTzLkF47PeGxKVenSHUKUvSKdxNf",
  "key32": "2jSKiJEBWXddo3F1ycXWUtexY7dbtMR2v23EZs9htmMq1zXo5qYoX4wvbEe6knD2oZqwPvyuTP7cAD3cSAzvoroc",
  "key33": "5iHwUpL5RE4uQCGm3pFc7JziGE7pYwuzUarEWGx5dcQ7RDojmx8t5XM2Kuwfg1wMCsc4epNcXBUt8RRsZ21tAUgS",
  "key34": "4w5KMhEVoZY61y2YpDZvW2vu3CMCJYKETLd3k3TcnAPhVxgkMN6tTZudv482nULgE9DH5T67CbytuBRUSfy5cwXf",
  "key35": "4jJc8F9okT5iUEuRf1GCr3Ebg5sA6k415eibxfWb69wQj6NKmHVicoP8gKn9Jqj6tbqmbTfQJ98XSLLmVMn8iu3J",
  "key36": "4gJfJkJNribywFb9JZBsMbJbdWbsU2W1Hj5xnwrGrVUeRwLTG1wGAbcU1HhPKcUZyH5DALb3sVezsMWpRuUzPP51",
  "key37": "3NVcXev4fXNRSfYzPoxw7kAVcKyat1Ch3APvYTy9b7E6rZFbupnMMuaV4LpBdTGfyF6fkeEDi9RSDuyUvh7cWM7C",
  "key38": "2p825vp3Fe3mF8bAHF9ugDPZ4AhyNNw1KcbvkZe3iJMAjFDLx5UdoZtsA1An26V5pDZvcBKffnAKdsDDNAdvo2Ad",
  "key39": "2vgJPJ4iFGwWzyKxtqWHTbwQrxPuaPDJWU5ha9eUzX7WKTo6brn2C7mFJXEWNbegwRY8Hf3KYYR65DQg7JcSmYp1",
  "key40": "4xs23peb9GqYKWnHnQtxsan5s1P2mVXRfZ8fbq8HK4KozoLRjm4yRunRQ4CbeQvVNHzEhAtuECpdz2UvdLYBFwCC",
  "key41": "4gWqXvZWJvuZ6Xr3QcipMyKTrKiLZJ8N6FDAcutBtWBGoKQt2KzhezLBjZVMjBzhQpfokjxyB1LqYp3pSdjFq6kj",
  "key42": "4N2UaWpJNGdzNbEaEJQsfajPwuDGdzEBJqHwhDj9w7TKwHQv86r6tuGpQDpxiSSKkq34SEi7pLbuJ9ju9oYq2M8m"
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
