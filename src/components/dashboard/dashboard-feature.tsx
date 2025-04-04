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
    "5rdJ9auvaexsQ5AoqDyJWaCnhn68SGAmaHzp1WFwEWiUVFf3BKpehfaY8RGTwHvRzntcVKEuvdZYqHVrhZ13JtKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29dVyLKtAWLQqhv9uB1J3rRNcoh4tZ8vHnRkdaR84ftmyiBfnc3acnRLzua2o1kazMw1oAgRUW3rg56uqAhuYodM",
  "key1": "4pEtLrqEDad7XJ67R3i35fEb8p8YjPRrXaTFqA6WmGVcc1j6mJMUemyDU65EWE9jVL5QsVQz51yZkhjeaSoHopg6",
  "key2": "3N7nvg8jFpCscfPcU9zcJ2ANkbTnJxAdWfDzGKTmovTGH96DabuqnG2WbnEiK4x191BiXhAuR5epVFVjmNDYtnZi",
  "key3": "4WC1XG93iGu2Hms1oBrVaNFqXdayCSpPCiYnqTg14dcPtAt8odrd7DcrHHaUzMnU4md39BTBgZxjnpVZQwM5kGyf",
  "key4": "2DEuyQFqHv12m8ApnY9mULuwEvo3CYk1w1gro6pvSrCjPjH8iHCLWnVbhSLwrjzjYNRb4swvRutDjU3wT7WvRVds",
  "key5": "3hrMidDFzFSXQh3Douux2LjUGwTxTSKUeTDYuAa4yCpD2A8Lb7p3uKAPowyuE77VEDJcLF8P8GYtkJ8Ma8bvZ9pt",
  "key6": "2kNL5WZjVx9rf4CvxPgW4H5NypQjfNXD8Amqgqwj3Adk3daW6grhgZf5tnU9Jr5ghaq1HSVrDvug6DcKBhtQKeej",
  "key7": "crUpNjWDoXBgghnjRszzZ7LKf7BSgDGRJFqT37u7yHA9EVFKmxswhiCXA2mKEyzBaQPpTav39y2BMFvieLkty5F",
  "key8": "4H4JbdZEnEjF4NSGoEEFvArJUS3SPmdq32qZGbdP6cMFH2tMepHar7h3aCiTCy63uHTSXXTE8xzx5tSWem9PXSqg",
  "key9": "3Ae8czwxDBPGW9xiGWUFuDeATcJWyMDF6A3V6vXMCfDMiLW4bFjmigPK3ukFoscmiYtN95TSTVMpK73v76ENSDTh",
  "key10": "4KDQdDvwJHAX9a4bbWg1RMWjVPuxXzAqpPhaYsgfQHARs3rFZibwEsMVLW8tfxMvjcNR19FJCt88mjXjHhfR8PBs",
  "key11": "3u4AvQowDt3cZCQRH1QbVdpvC4PgNfjFCSXU6MyHfjoox7u9oFdViwbzwe64WRHmEp3GiuPvCKBqT1ZdKdUFjkDu",
  "key12": "BY4d5vqB1VQpgxTKnzo7WLij9P5p3aMpR39ycdZPoeyCEDmsFA9USuydBCPSqsZCDWP5FRMtkq7UbmpJw9Ywns6",
  "key13": "5EKgnRSJmfzU6AG7wqWFhzKESfW7kxkFz92xW12y4LficTEevoP5ooGNDEcqXkcsJcU4RfV13KTtQifSanNeqszq",
  "key14": "65iFDo5xqsZqRfgAtvYLTAkve9PkLb7pqh3tL3qr57Vsc12GMTPgHKwyDmZCiwVG5q3iNEa7sPo56L11k5FKYr4u",
  "key15": "CDDuwQasebBgd5N2q3RFToHQzvrJxDVnYbgWwuadWY4hvzo4nNLdXWMrhBHrjL7ZpZ6uw6UHRUmjmhs4exMmYF7",
  "key16": "zuaYvLZj3h7cg2fMPfc3brUmR1SpZzfAqNv1hh4y9VKuXMMo3f6G7gvXwviMP35cb1shnwebEBfLbMnDeNfZrqq",
  "key17": "cKhGPuTxXZhJrKZkDrLfC4QxMwMjA3EQ51n1vE1aQ4rGqgWSqAv7Jj93Kpokn7EGyk3kqwRNqjCgb287zuQwahJ",
  "key18": "5CKQSb8uqSGLWXYzagELTQkDyaotiAhpbqVM7dxEpGrB7VNmQj8qpb5qbqinYYUctmgMhVy96UP9MVNyDjkfani4",
  "key19": "oL1ht6FoW4i9b9JeEKVY3rL6vxoa95c5NW4nS9mdoV1kn6veBXDdQafHDerNXcHKX5zHxfzfvJ7YnpPQWbsRhpe",
  "key20": "22r13L89tgefdSUGq3rhaki4annu8cym3tw41Z2A54ZfkhTPvqRTpyJYWKYXtwJjetvucfX6EeFiLE2NgDMgi7WE",
  "key21": "nxrgVM9vFeANAD162LCdmFGvptKnfRAY4tH1ZYzffQg21UWJsNLf5XB9YcEYDLCJ62vS835auA9SS2JCAS1h7yT",
  "key22": "5q9YkLFwrB9rcY892AWLiDSwQ12WZBxSS4GxsEzQ3442vFEBseLGhh37W63fgG2pKsrxPhGiUpZ1MNA41Q1baBLa",
  "key23": "2cvTbunN68J3ZGLVG8wsPHv1FgdGwAHeEUrThNioWtq9cutjzD7eCJfADSewAw6J5GwCtDs4ynKwuibrsBoCxung",
  "key24": "5TqSeK99MjR6qGTBjDoKH8PptoxLJwTvAjtoWGzSCTfi4x5najbfLzFzZUCbTXHLcn6cB5tVANuCdBzZ8kv1xR7w",
  "key25": "24rPx2Un7JkV35vzJ7hqPvWk7mgTH5JjhmMLfDURd3kN3o7epgNerj5YFMGRznKVjTTZxz1YJZcTERXEeyJWCpUM",
  "key26": "4983k3itjTQiUTMAwPZ2ubACxbFyNbn95CTB8ZgCg23MyPZhfnFvCoPPGjjaC9ou4rDc4kTD9DEUTmM9Biztu1Ws",
  "key27": "5S9QSXBE92kYRHQk2FNA7E8J1htAAS24tqGSQLVmoXo9Lx4amXwVZmfowT5Q5FZvquWtCbacuLuNJvZ2avZ1PwZK",
  "key28": "dD9XfSDi4PjPgeyrbfrzVr5U8xjrdyHHaWjMDFb47xU92bF3g52vZ1YQ1HftvukcTfGXb4qnnGG9Gb95ACAPigJ",
  "key29": "4EWj9XMJfTAAorQf27ASPCC56QAepRcoUmAAkVJF5sWYyiLewkHhz2sQJKGvXBmPCSCc29VJoHvwqri9WF31sBA4",
  "key30": "2vbsJnScPqjgvudEDEZQd97Lg5sdAtuJWynFM6tHNsDWU4FBfkAs5sW2YYobyq6aw3AFgynHvGZBoyX2MYP6YMLb",
  "key31": "5FzMab3uXgvSLBViFUSnq2QzmHxNAXsheDy9p2iQRW3tohVDeFGGJ82Wa3btsAd23k3rTQJ7xxGaMCSQvy7LNEQp",
  "key32": "5Vtj8z8qyEGi5HEetuGxXEgt1Kv58FWm5NxwJoMA4UpHNwK1hMmoM1oneC21DECQCqd91bvRdZxPgTbibwN2HPbj",
  "key33": "5AQYusoXeGxJdSrBLNyNwsFeZ5zvfLzZZhffB2AT2KBNqMdiphBxPGbrvAYdFLWsinrCwWYXKyhJUGpw3Ks3jdSt",
  "key34": "41v7ZiQKtNaQMSafqanv9MU6qMhn5JfZb6euFN6Lj5ZHF3MCyCsVSaUTm6Z95ccJ33KfHqnnbfKWANgwfb2U1vDB",
  "key35": "2kPRAyRaz7HaF4cEaGEJPkx1mNE2vt4ti2GRQnGKs568g8WPL6D7LZCrtDJR7Hang5dwSYTaReuMkvFkJpCHsbEv",
  "key36": "5g1P8Xn1qwmtyhQ8PbMFuUjYiZhyKekYH1uq15X1hNZeS4CW4yJhqeKT6yeYoH8h33ai46vqoDj7xgJG8hjoQCtz",
  "key37": "3kpUpA2xoR7x1Efpug8BTR9YRx47FALrAG18AQZZu6LFCnM8PqqnoDRcF8BUkSQo3aocUk8ZumB67iHnDeiGQcDT",
  "key38": "3QunYznHL9CGg2FZziwJNqYaYekgMVxETCZ7cQjUnAGeB4DRxEXEhsmHHkqE6t6bUNGxTDJdtxebUzhum4txS3pu",
  "key39": "24MqoufYvWoyVnZikwz43Pxbrbi1YmyBHH5RkA2JTaMjD9EYAwdUwBpjgwERc7eCFbVgygZpFxwH3dCH6vLYGoVX",
  "key40": "4dQT41W3sZkF9g5MBMqatkdAqf97ZA9JJaKDKG1Vg6PnGqPo1gf51hX5SDGPhY3AWHJcoB94KE93uSMtzTDssRTU"
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
