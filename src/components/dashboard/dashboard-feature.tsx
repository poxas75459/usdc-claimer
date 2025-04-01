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
    "2fpxH8vGMWmNzYc5vjEnyJ5NT7L3tUN4t8iNfiKCbv2gpixhHsj6eqPrkgAYb6Xte6NgPJd1sh5FyYWqsQyaBUPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vffHypHUuAan7nhS8g5UqVytYQuNysQzpBCNURLhixfktzRwM59LqVXh6w84ZUTQoZzgxGSpHHwRoZfTHnctfsx",
  "key1": "FX1JtMyjwxM8zuyVrynmTvhGK3SYJiasJib6TdMxMbE63JTL39Jn5xzwXBWguM8mi1GhskGoavGFxTukqQ3Hqb9",
  "key2": "4XDUGwMoX58Nk7eJUnemnWwZhukzbqjDQzcUv4bGsHACpZo6tSyR646UCHyad66QFbmPuWCf99dFDWpL2RYXQcPD",
  "key3": "yzxUkQdcoarSy1zh6ePXfw8p47jHGw4hTqsVKb2pvYRuWHwBDat49A9LwTZJ18wXtdSfZ3JvzJBCwTNTrc3ggsR",
  "key4": "2R17uw4Ak4NtPTGb4Mw88zLnz7mWo7koQRQ5SgMjdixuYHU2BuyGH9NvUVrK4sZASpCbqNmFwqmWEMHNM9zLx2oN",
  "key5": "2tKnRYFeWciTm55jgGnywQqHLu9AUzGucScpyzeFLa4yoycqRh7Nf7CW9uCmYqc1ucpiJcpjPphU6gJwxTPgBAW5",
  "key6": "iXbf4BiKajVmXC2A9b5eRiE4emMGdDb3W41aQ96HgDeii11pf67NiVziZDyMPoG1Aa8h5L2peVdeYcSKWjyrMim",
  "key7": "3RZn2BHvaGSRzg1McyaQDayo4QSp3BrCpysLkpgaXHKZLRkUp7HDLhbiVBh1vbnuootjkLbLrdFHdX1wrY6FXKhr",
  "key8": "3z6L5MY9Nf57QrTDhdgacEYKZkLTe4S27QaBzFfmZrGdod7Sebp4jjmsjvh6qJu5pZonqygZdoVV9vuGmhfkYZv9",
  "key9": "4aB2kLYMgKu1BBhT6EiWfQgtPoMCVs2H6pcYuhtp5T6NpVDm9HVXxFs7Ssp4She9fHdbUMNLP53qG67W2pazaeKj",
  "key10": "2oBSuDENSSBZtxpMYVbK5TbT1WY4gh6UnTwnbPW2VyL7mqvLWDG1Z5sSEpfaMwwX5kbXKbse1QuNn6EKr2RadU8S",
  "key11": "4mCnz8hAPKzTxNMdugCixX1sw3jzbQC7Nt98u4EawXVHTVoqfBcNG8peePjnDKa54twFaJPya38FdwcE6V4HrD24",
  "key12": "29Qi548DhqjBviqPdonAFTXP31HQJVgNSjVGEhyNKEQPtFZeiLc9cU32BzD7gMhVtCdGBzimrgcMvX2G8UdoF9Nv",
  "key13": "4hsqgEsyEFfoPV9MKNwxiQfPWJURwVDpgkN5zn7Z2stYvhC1XsVSxDMp4ZjTPDknW9UMQHKQzop5BwfyhA86iPD7",
  "key14": "4Yn2wg28wt6JepT5waPnmczisZ7VsJCwhcpqaHiE28dJm3mioKuLixgJy8Gd42bohK57mu5ADvkyUZEPdRkqVd8p",
  "key15": "3z7K6Yf9iaqrrdWouhGMtbYffB8tB1TJxk1JLogabU692eGcmSBrjyGveAMSskr2BJRGLNjhbE8FK1Qi4RSE8jhj",
  "key16": "5Z1E2wUeJUqPxkkhVf6ru6ntUTKF1qNUucgVajbAFVHdeWmJvcQzmnd4hvmd2TxSMBMFWVX8mxRRBGf77dsCTefz",
  "key17": "4CMa2XZWNac2CZxd4CbMPYrrD8Qp84FHkpXr1NzrRoZwBdNmoZzxZP7f7aw2zxU2FdXVkKc7V1JrjHUMrGCBguMx",
  "key18": "5TNvoUCfc51te8dWexEJ8QQANkw4xe2k7UFy2t976hKczQ1tAS1mTaGjSYk1xUTXAtUbcrrkKADquQurRyeBwXqY",
  "key19": "3fcsegxQqrCzohgf2ZKdSrtJQKjRMgvGK8p9ry2DACNyzVg17rM8uQP7sTbbDMuq8o5VzT9BF745XYGjafPbSavg",
  "key20": "411sEZBEzmxM58up1DnsinLWXfpDhPJY7dK8TX5U6sLEz7qtXtY7vS7SxdvywD6YbuB5sx9DC79a9o52WFnNBxvB",
  "key21": "28nbgmoDEzuorYGBJxPjLKfUDHUW49hx4BmnH6n2QNWHFxhFBA8ktYwtyShXc2EvjNYoD2RCiAd7ay3793QawA8C",
  "key22": "2FnkzEnqCBt5iN5sqR2oawcDJHK2iEHG69Xefyzq53LQz9bZgve4AKeeQhVcgAyGgTvFWrE1wLLyeusoyo217cqs",
  "key23": "5e7bsDCK6XK2n4t6Xksdu3SEQF1WHL66PokPccB7YfuzeUZZGSYSwqEoFL8U9pvbop5p3w4mnHTCm1CdyrbZUaEY",
  "key24": "WMqmdw8KALc9MUDzJd9QXS8y5d1oQAa9TrUTmuAzfwvXayLTVtVAUVcidTNxW8hTPBBMK6JhEi5G1QtjjyucnAF",
  "key25": "38enBFa9Tw6bjUG2mq2kDysJiHd6gPFtp5b5FyCxHiYRAyy9GPMkvNWFFhk8yci3FuJ4pnp3yRS4BaMuU1iRXmy2",
  "key26": "3RPaYVsA611nUE8F9TSNiefoqn5j3Dh79Bgta3DYQ7CJ8R282qAwH3pfWhZUbSDS1cNu9wXCgLj8txrJJsGza3tY",
  "key27": "4mDVDbn7yVXcytmyCKHJQDczNBGEJDZj8JfSy1Wgp88e7FrUEi6gKNLvkERrSvSBNf9S64XrCcXyUum56smcFWvu",
  "key28": "5fBG2JBLbTSjqCscFgLQiMBTKniRPt4iwWspPqGY7pyKEzResB19gFa8uQWhpa2vLYftDoPHA9mJa4xzUENnxKVr",
  "key29": "7EwXKX1cewAsrJ9NurdzFidxKTDb5oLYPHCuNeCRYd53WgKzYPTCLYs7D1c1RRnoq36ZF5RXqvvdCPf7i52SoKD",
  "key30": "5vChfRDdTQWpD38gZNdv53AMQgxow9evE2Gmf2xe34GwBDDourZTWV5hpsoRmuruPj68Li1cd1q25hXR1eV2TUn4",
  "key31": "3mNNBLKvWbuQdFYygizmZsZvKswWkQCwgkcJ66CiNT8Ax8gKe85z3WmUgmnaz7eVcc5m1EjnMeBwHv9kdiKfV38d",
  "key32": "5oa4F8ifRyxD185h4sLwR94tc2U82d7PxiDL8tFz94R1FbQ7LijLyDjH8zDqcJBKv2sRMaTxqTDUx56kZgZf2ysS",
  "key33": "5Jd9wnfxiuyAX7SjkYF6Sw1M5EWx3LMBpA5KWv9a7rKPu6tVjBf3uye4TauU2mocr24UcqFNEik73cwZAsh6debB",
  "key34": "3mgC57YAewaqoexbv5k8SJ6XgYqY2ww9kShzvn4pBghtqLhQU4khfNyj6EC9m9141a7JLDaAFBrgmCSFnJostz3u",
  "key35": "5dXmBCjGaqDdJUd7de8xDuKAKkD6e3tinJad71ojeverMJEZ65fFv7odf9sVC5tHsDS5NmCYQdvFMDFikz87JUUS",
  "key36": "5DU69JjW8Na7NULWH9v3ArwA6GbmkmJNBv4cQ6XUZgmjd8bJkQu3eqz1d5V54CnK4wMzF8ozb5MbGB16nQ7Md9xr",
  "key37": "bpwK1RYqhDNnNi2izmWxVuEFQVHQPENutG4Lb9f5GbfGszUt3pUcK75FQqfazfakdxWMwKH7VCeKZWaDar4JdSm",
  "key38": "4yQ3DMjfM5pJSEqZPSuGsQv43QiRptSmk4wdQTcC5Wbe7KTfkAQnYsnu7GHaCJR2s78y4LFVawnnmdK4b7Ck1sFi",
  "key39": "wcETBc8TZn2Y9M8f8HcbBBNSvsyZPf1at3NVu629vK9HvizBDDSYhAQkH8AGQ5Kp52sDoKvb2iqWy5bTzwWwAcC"
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
