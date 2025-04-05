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
    "5V5Q1GQsbMDXuQwVW1d6qLQ1L2tHnzEzxJDUZNgRJdLcX4fxb5aMMKBenzRwgurq3SuH9MLPLdTSK5XQvTg9u8UK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J7XZbjWzQBcobS86gwDgDcfAPKxTwougceaEs3BDiBwbWR6L3nsZAXCemiV9q3MkDA6b9KrAmUiFeYx8MkNJacU",
  "key1": "2yWMY9qHtNtq3xM38QjzHQmXbwgc5MpcDRJeunD7GQarosjMm1q4FoEHQzZh56QBk2JXdbQGDbrLLdpbro38q8Vx",
  "key2": "sxvsCe8TX59KBzxy9nQphXzEfQA5fdKJJXZ8jou2uYBQZKcS65APwevpzf8K5Cs89bgzgwJ9E3sEiXkkN4JxzA8",
  "key3": "4WjtHmKoKz1pG9XKXcGAKwwByaNAHU7VA6yg6PxDJxcV3CGQQabHGJrKt5R1eFsTfmgR3Q2ezio54F52LAnm19Dj",
  "key4": "3T6urFEonqN2B5V12uwfHGXhV2HQnb7T4nWLP9Him2a961TG5CLpjKkKZFVrZpn5KNhqCuVL1dxe33t9dh3dwvP5",
  "key5": "4uPtrkNE4D9LGmC79xTGQ2f8uBGdHD8eDus7r2ZcTGugv7rp7Hr1rLwEATSNf35YauvB2DEQ7HvK93dUL4V2cVyA",
  "key6": "5zscBevvtSZcViG9JDnM7z5yFPR4nsRADCJ7CA3HwHY8amqA1u6L7b4FkCQNKrRmkW6oKMCZTxd4PX9yctHHZHuV",
  "key7": "5HMLP9ZKZ53Bt3jQiM7hTpCHMS85pDUwHFLLbsGF4QRLAQqS2wWLGquGWjPih5cbe15UjK8pHjX2A6qdKyjpxMjA",
  "key8": "2dXfGjwsYnKxMaQ98MhJ44qQXFvunCMGLcWfwKLcJhuR42X7u1nWL4SmjybGr1QtunMNJZbggrYXvdWc8oec8C4i",
  "key9": "5uFcRqgDw7KBYaFJ7aAzb4MF2JZuwHbRLvx8huEdL7VR4kvV7hqApA81iNRLsmrNbzuZ7sstzopfu9k8oMB2BhFk",
  "key10": "35rQN7t6zUH9JF6k55etzo1JYrhpLzjBac54c59rYypvWDsSJaG8uqV5zCvSEH9era3VsHdvowwDC7MZkGJZqsCT",
  "key11": "JGYhy6iU8vTSpeP4C1PdpNFDReL93i97yQXrKeByQMUZauzz2uc9yxnECKMjTV7uQLabn6qVzD4wd4BEDJUBqM4",
  "key12": "4QmnQEYFNjLWjVixYY71N81KP26wXWynrB8oPAxJWzaG9DEuSGR4JdzQBhTAZMBfEDJUsK8T6yqnh5VoAvSPoxpq",
  "key13": "3qif53CPLQbGpaV2tMZ4JC7aZXwc4yrPbFNUxx7NQyzB2M8UrBdbd955yZvNS7QP519ioXJ6mZxBkwhqwMeBFkyR",
  "key14": "3e7XjETU1vFAhZBD1KjU2JMkXGxtJtGuMdKmbcGQcSPXpexUssUeAWTPkiat42U7UoyMqZ7Eqt89MpaiLuSfBo1X",
  "key15": "6gQWgw4rgo3dHuj8X7pCAo52kNiP4jPC6Pif886HetRZ5AULZG4HA9QTaUSjpwg9jjYBaRotSpBjikgaWets37T",
  "key16": "5sJThmGHcRgANSEWb7QkYXgqj7EKwozyeaPtfbwf3ZbMaTH5efTuiPiH12ZLqmZZBWsyko9bsPsgbq3kV9VFJb77",
  "key17": "4RxzLjUZfUd1sKnfW5c4Vio9jDBJ7AjY1HWhrwRmxfMkjAmwVCAUGpfNcSDKGUp9nLXCEuLuHkyfTLGM6gRA2xcC",
  "key18": "2mRxmGnN6VBvMLYBBrVpsVywERTQVwoLsTc9yG3UoveKXLn76W2zZy7JBtqtafRks1h4rAjJors1FASJKx69PW7q",
  "key19": "34ihZ9HEpMqr8trRUkRP3NbDcgMAtQFsiNagzzuqXumkyZ3FR3qMjFBdFhvrvTjUQPoYfUziquVTN4LFXnx55Dnw",
  "key20": "2DAGuSi4WjRTYHQdWd5uhAxJvEdwZzqPsa9LUjF9Z514km9TnDQk6V763bQCSzDXCp4wzLdPTiSW4ALksBWsS1wi",
  "key21": "LpGPjGvj3KmHDqeXsuTvz79a4wrajs3RTcRW7jJSEEiqjbzHT29dKNrMvb7qUEV81vNansak9CwcHXx9ihxShYj",
  "key22": "3VJF65T6xV641hqRzYNwhCcVsiMrmVJiKE7dBPUn5fLhNKT2Y4CvqivMyT2CDGgBGf8i6u4QQi4DqZPSVwz8hHQB",
  "key23": "38R5Y3CxiKcPcP9cFNpymEdrXxCNY9yEt3NYYVpADCHrdrboefeSkirx1YhdkgCUTg6UQWPTB9fok7h68yCR4ZkC",
  "key24": "2SU5Zu9GosXFy9sBiri5AFrP9gEoUWwH65Yq3YexWhhCyYmHphyV41moCmGpNdEThybEFf3pfSyJWirL5EMqhvAo",
  "key25": "6Znx8L1WBxWWUG7itk78F2sc4RULNkQaSP25BtfxrqbwszjaLE46syBCf1gNz7ZH6ysJCXhKSpaWQzG5f9zC58N",
  "key26": "5UwFZq83JRF8Gw55NpA753RmQwDR5cHcaFHiJp3sTtHd433SmcJ9PBFiELfM7ZgqXQXzW2orrtSRgZhvQUcBJGn",
  "key27": "5ZKfSC79NLbvrK4ByLJHAnKjQ2EqHpgfg2RBhfyPvpd5XzzHhgqk17r8RKYiC49dcwEYhiwMsbdFSBXeALL4fwrn",
  "key28": "5j416EoTiYBtgVceKb72dUPHmJm972vv7TJb1yth51HmK9uBDgCAsiHS5MDcYDaM1dJe7U3NHSr7SHCZXFb7j8nW",
  "key29": "2iXccmDTaTMzgsBFW97MKygNfx3yAVQwHjaBgSD1hquPKoUDLtk4zeZmikokFLXo4P5E7LXXGFgHu36WGZCCnbZP",
  "key30": "5XhsUoBbTr2FTffFjut92jgwUMrugwQtRsXTwSvtoSKYA5AdNa4AfH4xArU8d4K3TE8GtJxLrT3U9poio5LHCf7b",
  "key31": "5L19unocLCJHautyg2veZJ1sMw1Y5SBoCN7so8gaRmvqUFJjWYMGhE83wBE4iD16HpZn5YXLe4bRFxSBWWZ38KLn",
  "key32": "4BKFUc2yMWwyhdpgTFxziJCMasuVzVRjgYLB4mn3pCvk3Q81xAWaPFjE2JEdFf2NXU1tRMsA3nwk3Fuskr61zdRK",
  "key33": "38xooktse58Gu6TVhm8Q1EKgpoTLwK5LUsdS6m9Rirhg4BHEYqJCTapksjVQCKccPMEA8ogCLtzLMx4fuf7261Sr",
  "key34": "jHfXxDm7Qbdu3z5Vf5m1CNgtF69afqCfnoyqXKH8LjBAJviAhihCAvQqo5ePDEcw1BX55SkSB2CekGUZFHNAxNt",
  "key35": "Ufou3DCEnz5hyBgZypxoZ4pRFtUioyumLpHBdoMsMuiB93Afw5dujs5Dc4io5tT8B1GjXJN2jfQgvNPAu9kRsDs",
  "key36": "4evGECB1NcndbB39xVhoPupUsfSNk2obQKZ6EYsHnA2Wki2GGyHzVYPVD2i7JxhhQapZDo1gvvhTsSVVgppMByQd",
  "key37": "23x7CWJFqPHqG1UD6NFxxkdJmRVuQooof5CFgQgGgUGeye8RXeoWw5871RxAELjUZaBxweT5DbfnwpS8RKNicWuh",
  "key38": "4GxPbDW7Zarhqe5tPwq5Fc25ubFxeypKviHieJCtbEoocntDj1bXwjSvdiHcvCxB3iRva1KKoQh7K5ssVSHaLHmb",
  "key39": "4G6zqGdpTeW5DM3geGW3kzMubPjebyraJTW3mJsuYqJyBmU9dkhMAshEydwHRK9yFW8ALrZ3XL5TkFnFNZNveAw2",
  "key40": "2qArCjBiHBYNqPdXBiojo2U4A782AyGcZmRWeZ4ZEyX3dYgHk4FWdTVY9e1NLPqzZBoCV32hvWVW9gtBySAnbH4B",
  "key41": "4MrtHXXeZgCEWTd9fbKfTDWRYaL3jjGsFDVd3jLxSLYsh4WF5MHFBVDwmkovmC6jQ2BT5LPsqByHozbfRz5VPH3",
  "key42": "5tgmJPR5a6QLGZPxunJGTY9gKX9K9mrKR4nHEcYsbvE4HYuC1pSUqn1TFK11weTRq817RYnRzcWukKZEsh9FPuiK",
  "key43": "56CDKqWdv7iwWsPebW22ZkgE8SdzLS4FxvaCjSydwsfxzMj2HUmZad6nsCgzRt54hVtLoe7V8ySK9UJFbSh62nLE",
  "key44": "4jwTwmfmWahyYET6kgEqjuVrjTfaFMbRcEoXxAnKsYNTn8LrCkrpk4w2XQGT2pDLyjjGKgJkNtMYT9wooNpwcqNi",
  "key45": "4uszQQoLjNDRisKHauUsncduhuvAg3nhetgwP1Y3wWSoJTSHFo411kc161oSPL85QDipCboNWM2s7u6HbqgebCC9"
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
