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
    "5Z6P78wk3ktM3mHhMkMMTPnnxATSmxZifTHZdeC576r9roC6pTrHVAD4Mr1uyQTd4QUaRFBtWPt8tQCw4uqt2vmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41C9KfkmiQzaE1Y19biZzgod262CrfBXfTo41C78nX4ud3cPvtu1GcV5YiC5v94hm7dGLXUvTo7fZ6WiHzsaDg4y",
  "key1": "25nQAAqTrcco9CmciLr258VJstpVA722Q1Esj8qxvG4yKt9C4vVMsRxNHMJhZiVsC8c1DXLqDct9YLNZseQeVDyh",
  "key2": "4r8mefyhrUjvkKtZ9zHacDDXBahUAuQpeEfxrdUP29u6YzehQU94CdpMSwS1k5ENopnkucwiVnVasc7A6wQmHLRv",
  "key3": "49217GxcEKDFbmu4Hgx25uGCpdKcecjeTjv8tdZwgsVAgoZvRoPxjEh8BASYgVGodwpWwevM6tRm1co4dsaVsSeh",
  "key4": "5bRLphd1UgTNGiPmJcQgKAUsEByXZ5EALFhizC9bc8s9eH73RMVnaonwpC3nvBoMKe68uq7Avzh7iiyk8W4T5PXh",
  "key5": "4cpdbjvoGcBFBAujiMq4A2WcKriAY91bLfUahu8uWsE1acH1F73j2J4BeQZvPjMMx2NVjDCWiJ3FwwFpnxKjdoLL",
  "key6": "mCxnEcQphu1KozYLe3NshjBFAsAawuqX4119HwwJQaQckpDXWcgC3b4AbYC6WUQCciW3qCNTSjGK8w9bTw3Z8yW",
  "key7": "3yeGvCuMDE4FANSG8psvy4mHxtdBFhZwxzi8AXCvszJXv3x6EtHsvGTZFyw3ZsfZJBJf71BKDs3RKqFiwHhTyFGY",
  "key8": "5Zmjua1j8BDVeL9Nw2ny37ctTSq8uwj7C9RAA7AZ3docEhyZzQTwjxYGpzNyKBpX1FjfPww38hm6HmGXsim5EvcS",
  "key9": "2KsQ4AasqmJREfJ3MFbtpLYeKqyqkJ1kMXxmgxUxcWNGYphKRNDfCv2Wgvt6k2rM3tPgyFBZvP9Z5yjSxqa18mtC",
  "key10": "4NjkAiopzBE2LuxnYvkkPdeknEgFCCZjkjSsnPecWGLFKCiJDd2NwmRdetb5gTiKYkgHXavmNYphfb8CN3XjTGVq",
  "key11": "2EUwC3An1wiR7K648Lb8W2ooCHRVD7goMf4fRBdabp8LokWXNUggzedbSBECAhZepLuTL5ZydemmhLK5JDYaWtao",
  "key12": "GkBe96pBs7NPVnK42Ah4gvdeSonB9BSE4okRnG6B4nVxKro7n1RTA8YALSTNdz2WbaXqjFZpwr5mFzCtR384dn6",
  "key13": "4ev69WxYsE8eBvMcjEn3zwob55zmFhTUxwK5ruoh5NFyz6kjGj1hHepK3tWDKujPgz7j3L1HYW28B3BXZb9dgNMp",
  "key14": "3uuMiRxET9cU1L35FizhpwGPaaNenrCsQRZUVZM2vo2bsRttyTxRUn8ZB8QkRthDViJtb9wuxB7L2jCh5bknEfug",
  "key15": "3ffqVoJh2mv7qM7SyE8oQ2n9Vd6ZacugcsPyhy36xexN8ySXmP1HqhvqyYBmNaiK9J9oX2i8iyecoEwfMBTX3iNP",
  "key16": "3katirGKUwRahUDJ2Jt3ZW5npPNTmfjkhpmhoiQyVJt66mZCU3oYjJim8145sti2ANm2YXT3awpbA497CXUcD7re",
  "key17": "4CTixoBE3yKAXW57QPHQphiHsZrEmSQkAgxGKxykJYscmXoCLFy56TSNFFCw9eTWH4eyNiYgCSVTDCbqe4gHk9W5",
  "key18": "3aZDcy5R1uPHHnS5BNLd7j2HuCt6ADm4aduGbA5MHJcKfWaVJ8gDTCunvfJLobvgUvj2gpHaP15pg7Ns2doUkVy6",
  "key19": "3XFwRVWpTWL69NuHPddPPrWa6rpmNdKwe7VJH92eFtkgkwD2AfFmmxWeV36JdiS12sX6hBQeMXT4vZ2od626p13f",
  "key20": "5rGboHRXJaoaV3qoe3ZYwrZdDwFM1SczqTfNNia2oMj4vyrbxsNskq7nFmCcXY397GoLT8kXk5Dts9yVuV8AX87z",
  "key21": "jhr1WTK3adfK45YYhFrC5tKYKx19fb6gmy3YAsa3fw1xfZMypwCDrH9wUitUzkEbkfRytgRUiJ2SjM9JYEmx9yT",
  "key22": "bLS2aBkdWHvn5zwBMG99JXwCg8fn69sQ9b8iDc1qbo9r12qbBc2AHUZxr6yAZWZd87DQmjLtV8GdWuYeunz38vy",
  "key23": "3jiU6KB8Wa2dkRs3zYsziET385Kej8sJAKJi7ueoqS26nfpANAKVC7p9gsbW92h6ijo3J1byNx6gPUPyEHpPRcJA",
  "key24": "taKvLoLRsWp8toUFZiEi8F4wLt67DcZxAmB26aMRncC9gp11GK1VuX8cDbW8de9cfvBkKyAVoz4exHEZKsukhoS",
  "key25": "2Snr8ufZCpziMJF9JctH7tqL7sz7DLV5SPjYPDmSVm6Ne4ikvcf1Ae8fPAWxrNexmpAzEVfKJrWkHfGZowPXvrqL",
  "key26": "3wghUHyesrKvw3qkwsayTdJZ6JohV85SJxo3TrGnMaG4UPkZuYq3DntF74eTW4DD7ZXohMbnonnuiG7GWNS4VkEs",
  "key27": "38xNxQQZ9WRSDEwXjhWmCoMqu6W2HK1W1qp6YeshnpK3pj1x5kZG74PyNsvKqF3iJeQjEV2GQcearm2GXKGNA2yJ",
  "key28": "2s8LUrE6orGtMnspDwNdB3jCeM2KyiEffmjNFfRMBykna2rxVMck4Lpw778svF3NAX7YsYuxhdaase1ycWGw5hKh",
  "key29": "4o8dSmJUeWaqRmdzBBwNA4SEAbZ1wntAXRt19mwfCETBrTd4VxdkWMA9QeJVnoB4odsMU97QacoTmsi6pUdsmDBu",
  "key30": "2kuTiT8xC6S1nrmyJbtA7LwFYBrihGMNztESrCWQd7kzafRiXTf7qBsrNbaDJLb2tN3PVB9Sfz8DCdwG1wnuveUv",
  "key31": "2KHbXyLZgrS5S31SSQUo9iBRqMr9rai1ev3v4ug33mmX2N1YihGfzURAT987Mdjb1wCuhu1CcrczNY2CznBQF1EX",
  "key32": "5ELKekUia8TiXEELC9iUj7rHNVZUynn9PvhsYEiXct1GwSmB7zMCkNdBmPszHyxkAk4cv6fFz4zE2CtqBc3yvkW",
  "key33": "2mCNWPGxj2dsfYcKD4eieqrzbs281cA8NzFULW6FnGvqj1zV8uA44MJtyn1KtGvrQuW1nsfx6odFkaTgfzgCaMyq",
  "key34": "3yCwhrL2dZxchYW8t4F3dCV4HyC57Rt5NwtgD63R2PMP3uQKM5L2TWjXqs2e1B6AZjVMwyfqhaRAcPxe3pz4RZYt",
  "key35": "m7nt1ZsUkiUR4aAL2vmPwApmELZkSWH5hDYTqjqzZPejf7WujGXXQ4jMHCP7DUGPG5NJo9CjH9rYFiiNrddLqmP",
  "key36": "sd6gsKaMjrY2LkT9mgg5h5WmMRcDzP1uFdN1jSkbeipd6BiR77jLCZDY1AnauGkne75RR6A4W3c31YdCDWZzsmC",
  "key37": "4arE2NmhDtdd8SFQdfeVTdHf6mu1uU9aGSwc3pC4UVk6syr7kAbwHQqQNHR3Gf2vzMwYxhZzxDqJ1NUSneWCEUsn",
  "key38": "r4Ftoqicz4QQi1rgYmznRD3iHzgw1Cna8tqpqjDex28sTVVtrGiQ7q8uADoAaft739A8mzdHjKMdiG3hCvBngCL",
  "key39": "5PJCm3cLBhndUu7WPZPJesvUFNNCfhGdEdQerWS5hjWVt61ej2aYxGo12oCGrYQEz3thk2qc7nNYQ6HL5upzTRrd",
  "key40": "G33qaU4PUnLgqSQTKAm2zmfsinUi5x4sZPjFMx3KDEfYB94iGSZi5ZKE3pCDsPtusA4JzDsgSTLcGM2VMETFTWK",
  "key41": "5MjMqZwT3j31zsqzAb9S15JYKRPtJFaauhvDzRapU3Z5JR4kSZdqro53PPj14Zu9u4vRQCgLhEdWLNrGnQsW8G3r",
  "key42": "3hkRWt6e9z3JidtM8VPhhZKrpnsEcTBQpFfh2Jdo6NtHNc7Rk6L1doVfUXWFv7F2dzZjwgNGBbim9BMeUsS25Jgu",
  "key43": "3hD62UXYzLm7SdPyJMLV54Q1skuWpyqzWLoJUQrvFAaKAeP34q8ZPCyiJkRzGhFYGgtw6YDqCivdihgxpMdWwmgc",
  "key44": "4GwSzLrSTiBRwwrmB2zoqiAsJ7BwWEXvbZhZm4NjA6aDcz2bjS25LETNHRSVcyAW6dZeYBqYv7n4fcECcnJF1Z2J",
  "key45": "5fRXK524xQp9nEWQC8PtkvquhDfioWQDRXWPpDYKcQP4PjmFERoorCw7aAPjxxu99NsGmusZ9J7fHDJLuZKWvRqJ",
  "key46": "386qoMNuv7QMaa5cAuQPyhNBQeovE1YTnjC4ufaPLmxgSrtQsGLsfEpAd1R4P2A8pHSsAHTmXDJAY8mEjfe1SmnP",
  "key47": "42kFJoYaqb7yosGj29ZaW9CBagxjH7aqFesA87nzupHm5YriTyWAtq5PHG99FzrgVt8xwGHJMaMMVjnWEqTh4TE8"
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
