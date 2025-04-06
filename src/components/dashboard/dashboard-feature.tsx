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
    "25ogzNZTnnSe3xXU1jUvKqNhkAs6XUc77tR9fUePrD74tABMiAbVRj3HEZuSuCUKzFJpRz7Mu1B7BEGVCQFN9xE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BsqBcRo6NRXQNE5F6ghYxHnfB1ZcX4bRU6z9C6wkZcDp4dZeAq9ZofB3AJ5zrhCRT1DQ6qu3NYfR3VGaevvwKK5",
  "key1": "3Mp5a9m9YW8TWs2UTUdW68Zz7Dp4waGZSZy2qiEZUGRapmXje458uu77Ck4FgKrp2CAnAgEDt1fPpvciSKszjqAc",
  "key2": "3LtbJvuUZfFJz2cvS7tfnWHr5AAQEPUNqTh8GsxEraES25RkBq2gxiX5kRHDFgXC4eXYXakYcyy97q8iXsAMXxUe",
  "key3": "4y3BHF8Fd99tsQCwEKz4DdN6DDo7nTEaPFF1vpQv7xHViobrahSmMHyMhpbDCoMyTwtSFwu7jy5HU4oKk5GNMoG9",
  "key4": "3o4vFWByeJkeEXqvkfroA7QWf2mpKGaAZ63LHYRczPk8JWrAHtNidazGxMaYS4yKrnaUPZhNe68aeVq14tnxyiUg",
  "key5": "5K1nKVMujcRQ7mC13tWARxnh9zQFJLp4TNvFKaQE7CuJoDaw3NCJu3Rm2snCsxwcbB5nGazsw8WmPTXa4nt2tvHG",
  "key6": "SWagZ5UNQ8dbVZCX54fZC4FegvBttoF66Qob2xxRqkGaLT4e9Gb2BwWKtH1ujeAVZbb3tdYTVwS9oh7EhpFeGV4",
  "key7": "4mffX21Xwy8sRKVL9YQBx9qvgNswBVJU6SDooqXUVqJgLj3enUw2bgbVvVgH2sYAZwij1W25CdWq1wXzNm1NWR41",
  "key8": "5b6Uj5k2zZihtQzif1xKYBGbh879iKa77minzAPGUUftxK271vHJ4LMSBPrzwbYqCKyhS3NPo7WrCmHAajVmji62",
  "key9": "24JTHzcwTZSTvjy9jyAuFxKqr3tQC6WrgcuQTcC1NBjPLySZyJ9MagSSK6DrGECrkQPbjktubWQMnmhQQfcn1aic",
  "key10": "4YEvhLqp8vCuiQPdm7522naUyro9kn5dqQJpGqMu3LaKVrGDxTfYkHLvs2UAnTvxv5JRxNXyQMwpQ83dwQE7LD93",
  "key11": "4vzhUD1JDPfxKh9wmgY4G2xn2Tzy4qvf1xa2t1cDBfMHD3vkEX5v4fkbwYWrLS9HXfxonN3uksi5yaJdWcCzDBes",
  "key12": "39Hwg9E6BWFVAEdkJGU7Ywb9kLaWeefWUYszNLbPtqmYzLaWV6REtAdFZLuour6mviD53qcy1T2fJgckkgg7CNuv",
  "key13": "5n3184hc6ZyzaMAp7riWmsFwVx4a5gjry8C6XHpZtxDFxmQxYcGyuYWYnkQVAveDuS4fQeyiQmegjWjTVrBS2xeB",
  "key14": "45foPpTFbdqS58kVnHGGyJ3eUR2pySHdrdFo7aERCckSQ2imSA4uHpR3D6pCcBU7SXHFB8p95ZYFdJU3deuZ4HyN",
  "key15": "Zrega8Uusoif3xdUK7k4uAjDoNqo1HbQ9F4XmK6X8WN5wNeMkLUmFrCW1uZSCnjFoGyUxTY8HFPPsPKD4edeXqM",
  "key16": "2oEucbFGo6rsVGk2YxHRRKpd5756fUCcoTVpKsJpB9JVZdPE9QpWD8GFLQ74YLecCw3bn7JXJgRZdeq67NE8QGH6",
  "key17": "5ZkCFd6JzuFf5GQ7bgeM3yv7wPmVby26isbXi7JKeswbVq49QSS39Tx3zss4pxG5q4dssmCh3o1dQSYPXoyzSbne",
  "key18": "3SRZ124pp145kv12sdxU1QW2Hk6DrivHVZiMnKjAhNiE1UfcRmfyM4ticYTBo1qbS5yF4pLeMWWASErPq8yj65z4",
  "key19": "4rNciMVWpTRkAA6sUZFuQV63Srs2Z77YBFNyD4GKjwXujzBkwzSNVAqa4zvinVohTDvu3V1LSDt827W2KPMBgP28",
  "key20": "28rbqDP8pCZZJaxegPZZKdmZf3zaWyFG2EpcyGNnxTBfXPdt4XnnzsmwCFFaCv2KNgCh3msbt1mLvorGiZsSSfCs",
  "key21": "4uKQ7dafwW8hEqmMj4E5R1XhknwGkw9kogkJuDm6nNR1S2DL2jQLM1juPLkhTUMTZ8d3DC21ERYzcvMEEWbt9iHa",
  "key22": "621ebAuCnY3ECq7nJtKgFsqYM9H4cBmYQK8sShWuuogtwcGNffoSsLPn7cPDstzerseMdQpyvzJbUrZwoo3P1a1P",
  "key23": "4qci41vPALe9g8MXmTmziQfRpH3khYeSURhGW3yPuurobFvwrdeqTNmd6c3o6UhRQSxpdmKVVrBsRB6B4Jz9ntjL",
  "key24": "2s4D44ExThqQCBvaVz4erZoYe23zJ4w9oJw5atdQD5E5aV2sh9qYS3DXjXDY9LgnZjk84gsff3FKv3SGxnWmP3DE",
  "key25": "3qyc7TYTBH2HbSf11S1vB1QA6odoJZfeCmNfbnwxttDf2FZ4ifA4XGvvbYGxUL1zCdh71SykqwgUS5dbccD2Fiff",
  "key26": "55SFw4q31saYm9NYZkN45n7VXvJkFE8wZmAJoZpNBYXCnPSnyP1VZgX8E67Uy1gG83KwA2qWu7WfQBFPWnTHUtcM",
  "key27": "33jjYsc7cv6EHmrbiTw3oP7afsSKZrMeUMyym9iD16M2Vjw3cB5pekeoumDVo14S9DnZr5V9UBPN5jhrgyvMYxDa",
  "key28": "QgPzmAvcHd2SRSGACm2jne8KvNSxHDoMv5NzqYBApVdRoEssii6nGEK3174VXjjuFFLdvVBjKN8hdfCkuoTJQnm",
  "key29": "4mZ9rP6gqj8LCkQ3r2CFNVoyL1APQ6D13U694FXcCRb1RGJKQ8UGcgM7uxQhZKJZNqa42tZTjwLgqLtahYmHDTxi",
  "key30": "2xLt6p7fQjAyAbcTcCPE1CCkTzD3ifouriRzHfBnDUCnYBVCATD8mzXLRmqfsDCmwHccxgPKHLDDGo8PN99nZVsy",
  "key31": "2QEL7bkeuFSr7gBgbuHFKJoMD3AxEhkbDVPZpXA1DYLZ4Fk61cWZ4pRKGtQKBK7bfogVrGC3SX6Tnn3bFsVbWY8x",
  "key32": "561Yp1LreSaKpbbqTjEhQpoewFdURKaeRb7pMkcphZSDdK9oaFsSE8zhtUj71z7KTMcg3TF7UHqupnMAWndnnu6M",
  "key33": "4NAR6Mc1HgtAB9mKaPid6xFiPu34bPpt9RNiVpQQxZVCB9nrkh12E6kUiQifwGX5DNovCKL6hwHP1SnGvS5vX1Lf",
  "key34": "8rJDcAXifUgaTbQDzsvumdbnoS2xwxfwVLHtDsYMgmAVckEunZGKfcgE9mrgMoX9P5eWjENRsZFomdih71vo9Sd",
  "key35": "5CCyUpCG2bVJTCwniC3ZjKe8HdomQXcBPA6rJDaQ7yz3kiXbq5tMntTmJA9dhwD4hw8TQdZ8R2iXV4iNFWeud3bV",
  "key36": "22bL4HLzoiVdsovaM15CR9eu31U7BsN9exsV7qrqMQLVssRcA79DUm7t2BKE9tjefLFDkLtsb4cHEPhuN239avQT",
  "key37": "3RZQGy5m9Z8kgoWypX2Mh7gai9h6ebbXupHYRWSmLewARvQptsMTjgHo8zC1MQoUTixf3MieT1gintw4yPXrNcez",
  "key38": "4ZqkHsQiyJFYZdzFqp34uZgzCZpa7qX8P8dSwSj7UfZMBbdD7t784BCmkwAYKAkNk2YnPkiL2bSuMGHvjAKzjNaA",
  "key39": "N9r4KS7zT58ZH91g89ACgLzq81fXpnchjfaLcaWuregkvyeCscX8C6J9upcHqRhuMcTj2gpogWJv6xRiqFEt28k",
  "key40": "4AWqWQEhPugrPKMAnZwG777BLip319akFhyiHCrDNopmZCcK8v5Dz36VeySLW5ZNGdAM3DjvnRAekbFhBSGv2SMd",
  "key41": "ewrZyrWtCTApXjuEykyFXzi5u8X41iVMxeewpNhKCb6dtDsFQg8Um26V6dZi5BHTqYFjFz6cbjB7XqUHPBysHBU",
  "key42": "4xJvVLwTsfgoL93g2hPxsnWqUD9NrQ4A6r3Xd88ULRnv5rJ6StDaopXKkHbC8xSbmX5fj78XuLx7k9sWWqKg25KC",
  "key43": "3eLRV8DFxRFBQUfhdEoGD1JRaFXhau5ttU3gJ2FuyBMq2nCGvjb4VmarwQCGa2dtuegNiK8J4P7A73f975ZK8rqT",
  "key44": "25hab3oAkY1bq3vq5HSzQJfky5udBh1etP7VWKUPFKWTghKb3G9fHoJLo7ycKTcLoWp8V4ehzcj15GY9hfwLZtbU",
  "key45": "4qhjdbqe3wuMtwiKAVYGggFkyYVtanECmUsddx1j6P4TXbsnF33oEMGRGQqbXEZ8E8bYMKtinJzXyFgGcF4V7LL7",
  "key46": "3PP6hJCMxxU12kFyWKbMpwyFWgrVsffnvqnRHHWKoePwPDwxDQ7iAcevivyoVevMnN59PELxzDqvw5GnM97iKdz5",
  "key47": "4LAeSXA1qM9TX9mvu7FkL2knmHoQx9za8obYAwEUbdY8sb4zVt9EqBMRdjru1Sqmt6dwfiuxG75EgjYynXPqnCWK"
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
