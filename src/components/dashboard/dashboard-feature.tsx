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
    "2BauVeu8B8o9A6BsYWrkfVygXEPHJK33FBpG6qBMqoALJfVtBHX4PBc73ctTKsDN3NhVU5JpwtfkA4QfKLLxWBsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBBMivM6tygmiiWM3FDJYwLThHD4zkKj7oCu51hb4sjxGkz8mcobv99mqj4J4dVXc2Zgy74PAFXSvzbvXvj8Nd6",
  "key1": "47rwU1RpSxSJphCLrfHz9XVRMYf3EvVwwgdVvSMYeQoUPvDmW6jDo5rA88y9bVfovwA9gntxHCTHtBzzvWBpzwtu",
  "key2": "3AdyRv8S1aqxgq5wpgQyWNrSjWroKZizov8KukoMdpsPbkfgdTqxeVpAHEP2evWG7SZArmNe5mGLVtrNUxaT1HjC",
  "key3": "34XxU7a8DqWrBVAdzbetEqUDpoWV5hXb8FSCSWTFMkzoXBRbay7n51ZuGB2RXkqG5V1uBK8gZ8zgJPFhFmQvpA4d",
  "key4": "57JN2YuVN5bgJrmcTrek67du4ApuFhsi4qv5hazyMoVNdBZ5fYjT2XW2kPDNCFgdy94rp4KD6VxGt1it2ychR5PB",
  "key5": "3oqnHBFrtHmWjdkGBPKj51dd9gSmJKrLkbeq5Vb5DvQMMpYoPMGq8c5jq8qmqR5Q14yeKfkCzu3MSuKzuegCAMw6",
  "key6": "2DWMneoq3cDcxqqfFHWiaMeRUE16u8b8gQ6umqcemdAEY4qDsdLNqqyDJFajbju7dzMipt1sdEtFFfTgiGFATcsf",
  "key7": "bfk11WcYmJqiDMjtwcbS6kLWz48BzohP3zeJSPgJZaEpTCbakWgr79HbYSVvC99Pb3fi6uonbixsB27PZsbk7tP",
  "key8": "2oW77NtFw9D7cj4sfRzwdv3A35LtCyoXyxVUreP322Xe5nBHzGwajaCurX4orc9fC4CzYfcjnLJbohnJcCAnxCee",
  "key9": "5JzetrSi6haRMNp5JXDjQLqMVqEsATruaynpAaSAK7LXGtyNCpxHcKgT6UabybKtkFaimwbRavvUqfX95gSoB8G2",
  "key10": "K4KvF8ULbKK4XQW8s7hypDijCtex5yw5a44yBB7kvuyKpc8sNFienZ67mM7TrNHuxH9tHrFc3pfcotDvZrNSy9W",
  "key11": "4851vjW6YXjGGdsi53eWXsC9iv5LwdhPMT4AJnEEYMG1umrZEjxwEz9SgrAV47iut1A6QwBtavqAuty2T6ir6Mr4",
  "key12": "p6BXHEtkwsHiSpzjQCGU3nCQNppH2dpfWvcNC9qzTV2FovZE6FhbzKCzn588kFYcAXFPsp6Fcmn1TtUQdDzQamQ",
  "key13": "4to3v7EskLLC6VrJhqdtu2ghCkoY5fUcbDWzNhULv4TutmCTG4Jh6AqQD1qEk5SDbEs3jTqtUoNMcxhVENY1ppa3",
  "key14": "2GyZbhF3NRVWV1U75keVM4itD8kPArqJRuy7xDHVUpiyH4Rr6iH17Rujg41J85KdYe5EPauTnuxXdgf9ihcRDzfq",
  "key15": "3dEEqgqNdrGKFwnZfn4EEupBBbCS6EaUtVPrsQUSM7US9U3w594QCigEUPnMUWskzF6bYd2Mx8nXY1DQyVJ7zxs4",
  "key16": "3KLZyx5A8iGeEeXVPiRytuEwoD4eKV7ZJAyG7Fr7GgAhRJjzZr5aHmDyPFHyoKA3vJyrXutPFEQiE89uAhycssae",
  "key17": "2VfuQjV3nZ9T1K5ZR4qca4VsQsGHostYHwV7zsWTpPrEq3tb1GzccwNJw4tvLXxKgAjfWzeYSfMAjGX2Y9TS3SMV",
  "key18": "2b3VzM2PLozP3Fan3vhMqwBpGgGnucFQdmG3LjRceLixtPzctDE18bjGJ5n1TbftPGKNUJZuTv7q8g87KuU7sCf4",
  "key19": "5mZWjm4c6N6SSkSj2ZvfSApEhiGuEn8B2XBTHiWwxu1gRCDJheRnimNjYG9xDFPDP4nsLWWhJ9V2epkD39fe3zaH",
  "key20": "2wgZKbFAMTR9sH37nV6YByyVVHRwdN7q75eaFketvDtCHU9c89ZFjnjKVtXf3TuSvsmh7kDadaCNgy2mzU6vPesm",
  "key21": "3zvV3YZSgCWtzaScDLdA8Fz7xY6yHA3cF4UmgXX9vTQry45DMjqwT9csk3k8Yxm9Crv872F5ovR6hyToATsy5qPC",
  "key22": "63jKmd18HJPxZ7RHPKXpVY1Bi2h7QgSCoDxr6fPRD5Md1LZppZW5fn5dyChGhLnMqfZVC2RhtH2jTjZiT9ArzSHW",
  "key23": "3rJ6tpTxzHjcX55S5MeRBv7NdSfaeTy2fjHf7gGz4C1CtBUTwNXgmh2mic6L4H4jeDTNtA16bNQ2rFRabeaqSCq6",
  "key24": "6wD6H2h9dsH7VQesMbwq4geSieuZBRuMzM1DeY9p1p4eDnnzkKSEsZJhxzKvpNhfUxFSCNaP5ZSM2A4S7ZP8YQ1",
  "key25": "5T7S9mENRvFUk3LCUs3SS6ZtMNFeaXP7QzQduTG1kxft4ayWnZ3XmXevB249CUBxAnu5sBshThLz7wUCnsQVoEDL",
  "key26": "5YKALzrpgV5J3JoyKUup5sfgA9UvVhrSaEVmdbxbehwqrajj59hwSK9e7BTu8hnToKRrwGUqzJFvUR1JP6ougnJZ",
  "key27": "jChB4HCC7wyJkLqqdooKWn4rYRJxbM9FRvLL95BvGbSDjBbXHALHbDXoP7fCRhAkw2qrUCfFpMeZD17PSZRFcCn",
  "key28": "5RjDDDKmvkRXaXJQxA9dwcBzxQL3KSBnseHHbaFcMgaBxcJVviHMKq8a5s7wkcRXwDJFswSUA7yWa8vA5F6cUkwa",
  "key29": "NCjbH8UBgfDyATBm2mL6nxq5jBRmv4rLNd6QTn5cE22R6Yf2sbxDdsVknewdfUwghAowZ9wo6XUXjMRmA4UmMWt",
  "key30": "46zrHo69V3myA4ngjSgeozpYtHDqcxj1VQ8HgerWJLLq1U1Gz4vdExQPxyk1Y2UVYcDiVsPMub7rdirJxKqa2DaG",
  "key31": "2MVhsJzqiPn5SRE9cpHBWjk56V16Fz7FcbY4pjeazsXLG9Q71HR86P15N14QpjX5CVMesKSkHVnTfPTvi2UxkBrq",
  "key32": "exwkucvhkS5vJ9uHf6bxp9wdSHdgHe86C7tjCg11Ph3MGGuRqn8383Hq4hqbixXkeLK23cRJJJFMeXKPgZAjKvT",
  "key33": "Tzkasw2gsZ3ydFFiscxdXEcmAojtEB7KKRXbYeuY3ok8wYoPjZuBEwvFL4gKw2DPHQ13RKijRWy7msXZPFw6a5G",
  "key34": "2EDi2p5qdNemZrvJ3WAY95VT1VQiGpXjkQ9fL8WuobaC9hNccN7HA2qdSdV7q6uPeABhGcuqVDcXY3dcQdU4NAw2"
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
