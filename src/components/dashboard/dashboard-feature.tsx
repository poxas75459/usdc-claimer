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
    "2VHh4xndcTwftewDwwHWj3pCzhvn71kkxv5J2sr2KAhx1Mvcxx7p7JLGeXVKBTBDCjTDVYNTyQMqjhMZED95pqWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26E7TWvZNeAUMaQYWrWotuoiz9pufe9hqd13e3Fc7MqwD5AF1XxemuRjp3NMzYgudH94USq35UFBTvhBpScUB527",
  "key1": "4hLrTVEiX7aY6qwQjahUPyZNb5z6Fu7vxpP2G9M8bnQ3qzfuo391gNvehHoNL94wMRCziYU6qdWYdKxEXHvgEPsc",
  "key2": "jgakKGLDGspc4oXYMLEdXwkJxvLkLgtRKsS82kd614QryKeVNrguALuDg6XdbvVMzQuDEnvH1z1Z5sJ4n3nPN5R",
  "key3": "3G86CHUa6WoeH3aTf3vdQHdUP8QEGHxqfokdVPFXitZQdSY2XwLRhXyJNU898BmWqntANAPR6d7trutJH6Ptt8JH",
  "key4": "3q889W9MEtuEPQWZmaNDoeYEKKpnLYTfgwgoTB8Th6juZsCgbdH3VUj3z4gHZchKp14Mcqf9YrfAbEUZPnKUoMKz",
  "key5": "3Jjk6JMTF36WB6xndLj4v3Z9jRv4BGn73xEHUfNZJ8YTZGijh8QB2YMjiYQah26Kusa6anhBC9e2bEKgk6EmRP6z",
  "key6": "nm43VRrSu9cRria1hLhKZjt113QamJKEweckvdQtMg9Rc2RUuWXsapoEvy4iKWSWSRdZAy3V76cYWfvrVWpSuWF",
  "key7": "5AD92G9H9KBvyuu5zrUnVH1creC9pi3fNhwfaAL4jcbUCECDabxT9iTebLgxFLYQ4o1C6R2BdedTydJCX9WDHw4c",
  "key8": "3VAqMiKQHDocYTChcqsyyhggtHLoCSej2B11uQuqaSMwvXmZTY1y8hqG3yZowmgxyfiAHXRMUQJiA95dDx4TPY5D",
  "key9": "5vysgfThvpHbfWkM8GpNLq5jhCXUT4hyRZrayRvqFZYk8rL3qHjs2MEiZynimk4bekUVwvXeNMRge6noaTkSFSyv",
  "key10": "3dwoi5CQcQBi7FixMBTmC82pxTnFCuCfJHJcWLaLfxLf1EoG1yiHZHsDJ9iMw4iMCpQoc5EYRGSaRfLDTaS3NFup",
  "key11": "2UoWMKHwD1XAZYLUaoSq6drTxcnxkxkKaSQf28BkfV8NXkfz7uagsLVgE6zzwyVVyLQ2gqRRutBFSmuJ1a7Yz6AF",
  "key12": "2NSPEFVjsBbZ7ap74f3VySmoeLQvPFSGku7tPMA8pyhUcQ1sY6bBvVY7uEAExRHG13YmwzzV8ym2AKm2emEkRjNY",
  "key13": "3j6NzxwvdSYENXF1MMkBUArDvxfb9JpD53TxDYH8hBZkC82yJPPZnkBZExJrbuoQLSQuskuginYpZYqPqL3xnRE4",
  "key14": "42NHBmYgkREcsaxpwJasThFRBeJb7iUtJdmUt9zGsaJGEFXJ8pRo6Mvrxh3gwjKMhGqNYb7u7VQva4nvbPKKVC1o",
  "key15": "55SA5DkVPTjMAfSjvtxfJdWtW9xNVs7pnayUE7wUAv8ckVPFqGXGX9Q7Pu9bxR9aqT751nmhh6oqAFRAjSYxKRP1",
  "key16": "5Mhkir5uHC9e6J7hqkNxRyLtCZiZqQDpaTRiLZYeFh4Aou7t4JGNabx4XoLpbQDRqFiMkZ3WjENQouT3CLND1D5y",
  "key17": "3FtVxa5QimE6w397uD4s9piuj46C4SUbEg4yX3nY5Mn12YdF6GSPvKeQiWX2PkbnyS819JpEQvHpze3z4UzQhxBk",
  "key18": "4vEx3mnTq2iQZDJgLEFoKE5mBuiGdWzfm9Sb2eenTZyvB21C1mVCaMVFxytsikbGmTVWUTiRA3esWTXfySenMrDU",
  "key19": "5gNm56jhpFeASd7shS9X5Su4tKQVk38KMZBePkbXVSAfXzoyDFXMPgtYsDWSY13CdBhVcxgJDHeDbxP3zSATq8is",
  "key20": "5AS4DsrJwwkmHN7LEkXn1h3xkfk3cDPnpSr7m5ebMSQYBARifVEzL6axDjLHRfLgV59nhFoK8SWH3viQ2CDsGVL8",
  "key21": "2vWknbzrgrt5Yh1RXtkWARBFgffEZkpujp3jKYgXA5TM36HejY6ZGsKXtNFLCK8cLrVgkVFesBfxL9pZYuhs5M6r",
  "key22": "5xKELZ6AuntmxgZebvQroSMt2X6qe3YXLzqenUkBoAcAc6juXGyks1A7hGoudn2KmdzAPascPBihjvJ8SwNSTrV3",
  "key23": "TAnk3VG1pprL31iCrB3qFuv2obmKFnkY8qYJhDKYcrTdHX3q6H8gLkkCYfr6ro4CKGH6WbocMndVjW3kiHsGCwD",
  "key24": "3oUR6BynybxnTR7URTYnkK6NJmiT6Fwi5YNvmaytqnnjsy8ckqdLZBMU1P8nBW5ZsTNYUWUvAErdFYfnkDJL14Cz",
  "key25": "5yCDTDqSzYrNmhjBg8hiNs5hGuiMXFdjwYS4QwYH88r4ZWujbL5toaTWpSDPQmde629H3xwxfPaKXoe76Vyxef1x",
  "key26": "3KSPHKCF1rq4kw1mxoE7UCYbnDP2KnZxYn1iAvPnFH4E6ZEEXnoDmZy8kxoe4HeSedPVavvCWJXh7YaQsr6q6iSa",
  "key27": "5VrScQx61YsegnatDbFpjCWfiZZZhbR3jc9yAPv8pFkbDTpT7e7r2Tc1DwpS2SgMWhQZkjivzTQYkoEVF4VjVPWk",
  "key28": "cYTdkzTpNzYYCXBttfgLVKdZAUnc5S9tUy8RDLSpxiGDo7Ust6qZbSA1wqLaRnKFyCGd6F8cu8W48HCrMPSUfLQ",
  "key29": "Y6f6e8vNMdiZ6LZGqakrmngJ1edRuaZNZySZtkyQ3opfmDUkbeqxA4qcATtEAnD1yq5AcXTSf8vUe3HpLmxsWDi",
  "key30": "5LMfNAzpLxkGqn4YT6rYDK3wFUXKW73BVURKNJSF7grz1KjiPoAksiDhcTJH1THYZ9nsWAL3Ju2XH41LCrYSAToP",
  "key31": "5ziPwP4TvxGnDtUrxzS8PeDGVUoqP77HCqANySKxXsVfxYjH5sxN1jacNqnwwDP6mq4TYLyx3nZjGneS8qSQKqfz",
  "key32": "5KjkcXMo5FCSNKQQJSrc66raCqc4RCmWvNGp2xVqapkcHSUTvxackK6MN7aRYHKiaPs5rrwseSwkJX1gVjC4yXyx",
  "key33": "3yc3mXbBf2gY6jD3hjLSAWLSEMJBc7n1wbTRjVSVgNTa3pEzwcL8NDk1fegqJ2g48BFG2SaCqFdjKBchzjSvs7gi",
  "key34": "5dM2rUfhfGUFc2844cWsaRKuWXKmkbcRrK3MWvjqJ6YeS72Q15eooNADAUodHmn7wZenaEJqhEb6uwGCo2pnFFpw",
  "key35": "2J37QnurR2Vz26YJ2Y1QMnra67p9Ar2tE73n4jYEXZnee99pnD9Xt7SbhywEdxdhe7S2uet4vMyjFjiUWLswSqYd",
  "key36": "2aoLAe2itJfKnf5bHoj8fFh9x64Dafn6k2Qt8A7CNxkzUfhnmLnFFf2aYqDemE9DVGU8snfKhqJLAZwUYE1tUBmt",
  "key37": "2FgKaxTKveHG8RnsXw6HsJcGLKbwAD3qqYGyyaSpWC5CuCHdDEanCdZ2PE59C1dg2n7uwMwxZge6hFNASiLp4NeD",
  "key38": "5T3WE4TNUZwggzku3E9J5NDMmUiLGJGiKXyhfiibAATYpdMu1DjhCcVRCyWxQnnkwNKz9PDbFrGAkK4kyk5sUiWy",
  "key39": "2nMnV9SCrseUEZZ8oENgSSbLWTpoj6GbtiXdp1cEPP6XWmSWuhwuZh4Xk1GCwPCyQ2duWBbiEf5nhEoXfACtPssf",
  "key40": "5YeECNTReCX8wpgSo7Nn18MukpRBbVVA2D94ujtudGtVikuBVUT8jyEgiAbAnRrVm3XBoUXMNecoYW8dgLwb6Br9",
  "key41": "3cGm1L7F5JwWcq4f5j5oFNZfarjPTY5B5zvdMG7jnzfqj8hWT35aui4wYhWNoSKWWSLCAWinSamyCuyJZTMWz1iP"
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
