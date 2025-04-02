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
    "rpAks5MGaTjGWXGDrD7SNUKxuH4Bp22emHfkRox6vqVJS3GKXjkaUeQAjqXt5e1umM9onneRXjFeGx1ivcfZEiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bqcsWXhhqJeuTs661PJRUvnn117nBDgV7TNUKMX7twqrodNKzdkJFhh78wAey7iiQRPFRN6JHNJjYhwaRLzPous",
  "key1": "4BWnu6RMFM1rFtatFMDa2seoqpqd5qqiLebThPA9XXZ3aNvpzkT2VcBKFtkgPE8t4eBwH3WhJuLSP6cBLzHdwzgP",
  "key2": "38D74e7RKiKpdz2xP1eZParhB8vYrckheoxBGK4emCw3DDkGU3KUrb5KixDHzQyTPFnQv8KwYqAVHNbg8SARFTm",
  "key3": "4KvT5MGhhK3aesXobtADBuojMXb24XJsWNpfQeVzr7JiTMUgtGcdbFoNipoFbiV6kmK3raTGzpDKMMzgusQc3sHH",
  "key4": "2QD5Rjr718V2bVvQWgEMcrUCG4WJxLrJn6xx17hNjpFpEzDYrrR4JRJNfwtvbYb6iCopwU1jZWJodgfs8qAS97Fm",
  "key5": "nhaV3qvZWg8fohJvinFERWnrBKCT1KLYhrki7LxSkaMfCZxL9NccvydLKxDPZMyfe1r4jFcByBDk5T13dU1FY2e",
  "key6": "44R5tYEwoPUugnv1nSgvvmiQRb3cbWY4TFvvpW98zwYCobixhmNSTKGCCf2tGbU3ZK17qGzd3AJ6h2kSQySPY38r",
  "key7": "qBeHHSCcGvry1dJ27Lvd27ZcdCFEu5J7pu6rHnD7jsszg4sDe8zr6MvUbKGD2pN7uDeFPAoHJL81BzJGQsmLcYP",
  "key8": "q9W81KPjdHrCnxkjrnaxaQSUS8pvUAWPcBiJtUN95fEqQWquZ48fC3i2vvwTswZzygyWHLBDodZRGPBecSUis6Y",
  "key9": "5gNqW4qs3e3PmDKoPpcS9q4EkF4osBdAWpeHUYVpczJaYxTAydt1Dw9s8WbR7BtyTFPsTJ384Urkxkoc7y1oUyUu",
  "key10": "5EaCrGVWxNMMACizJnaD6iYWjfdpYyNqHu5T8ymbVfJ7vuSb89BQTuUkGRFjVhKSTmXTmADZoaW9q1fGUzkJ4Kmh",
  "key11": "5Bq12kjYHE439DFWbcaiJ13H8ZMcwQmDaG5cDLofj4horjPmxQdB4X3V5u5ZGb2z8xZoehu6DTq51J7joHu2uRtp",
  "key12": "ZYcqsWkKB7STxFGwRxzW6ae58o6hdaD5a9pk1JE8JCxM2C4HWA9YB4iSjxmMzpXptJLwyUCg34ewmmboPxkXAFs",
  "key13": "5tkUjcJhXDQnBb32se3dNCmrNw5MgWCfD23T3zgd1gQ2pLKSvZC54fLtp8ogc2oPS53qVmXMUWKgrE668W7mohPo",
  "key14": "2uefYNz38HRCzx3SMt5YpvnFqmumj3huay2vKjryzFyXShE8ysD3jBoKnPFeWggwYJKfeMgdrGfoxPPW2coQwUMF",
  "key15": "3v9VR1Zkax6Ah3PFMhNwZnXjDtMsYshYUME97xmwgprGmv8dFazPy4UVPF6jWbjGRotV8W8Mv299TWcbpEyJf8yq",
  "key16": "46CEU3qs7XXw1u44AZsn5ZzvwgyVtWdc4gmwEHXfENo4xCBgmftKtavEwgehATrkxd2s3uyJTTvvVr4DKNVrGRpv",
  "key17": "2ni3ggB9ZBL2PahL3ctPYVB6oSwXamh5at1VZYZCa6a9wuqhnyUm37vZZ8iqH4RKQUagTqhY79urAhrYh1q8bd7Z",
  "key18": "5qeR1Cn4f1kFiCNSRLpJozBm856bnhexoZ7RQKdUsbYLokobPm2mdTgY3XGMaxNyXhUSeNHLYamQAAGHgWSnCw7m",
  "key19": "3CNMyUMHWjSpvoBNvQuQYf1Lfisjqzcbapc7uQM8E6VkHs9N2MMLhgBfpTfPjg6g6Qm97ivUF5fH9HvRZvBeCfrN",
  "key20": "64uTxXtr3ktfwX3ryvWLu2dxwtJVxtrJe8QArcgJbcgrHwtWomSkriX3VnxfXMH5Cnq3qxZMgBKtSfYTB7DBkcaq",
  "key21": "4JBi5eQy5LTA56YWJ2jspuMCAAmjd2QS3bEpew1CJpkJA11BhW8UPcFQJpvYnDSJu7wfWPs6GvyAdzj45MVoPZ3m",
  "key22": "yaRan4BifqChhgJ1p6696ZpgthGuPtKzWwASQesQ5UGP5fmyULF2LcQuFDuWCJoF5MJmRMnyZwp9BpPdf5sch14",
  "key23": "3Sc6tEFKHWfXtkm98cR3kGN5SQowhdAtxgGQQerBHHQnwapCMy4wRQBTrA5dWXA1SRDXyfPL1m9wyLcAKnZHqHoK",
  "key24": "3EJgWSap1enh2f8Morxp9U1XQo59daLQxMYmqbY56riDL9kSPdUao45k5hPFCKaB4uQT9K7cU21bF7BYkE3Xff9R",
  "key25": "5z93RH2KxAMa9GcUgDwBJPQPRfwfqrZHDf64Yi2ga7zdDhco6tWHQ3zJzctA2Mg5UvYTAJThVY16d3we128kdfbi",
  "key26": "2g3cowPyMYs1HpwgTVYYNbdobYeuwr88K3k2d7s2ibjb59ME3VoyHiHBTBKziEbDPXGRWnh4tMSZ2L7JsJsfWTBU",
  "key27": "3JL9e26fr4mpTV5X8BYuaSks894U3JEQ8SpYPKofdGJprz6cUsKeNAru4jbxqVKA28omv74D7PheLFWbDQZVRwFF",
  "key28": "52PFLfoPLvPhagFSmi31uWQzC4hmKtmDLddEiQphbxE6pVU9p2QU8AvPervRhDn5v4cRtWivQJTz36L5sHP31MJW",
  "key29": "p4fsEtzkgVZbRdoyDri9oTgm6EBYttEWzvyUWTCTw8zk7AmpKseNhsEYHJka1jqJWmhHMb2aXE1fJ5TwHYK5ZF9",
  "key30": "5wiT6Zcw1vDkztjPe7njPhnpCf3qgnrVFnJh5vpo3hhkEJjEpF1hVQokuHzCHcrA1bTYCvpy7hu6b6TNBDmrDwcf",
  "key31": "37wTwPXBoCF38prFmjrRhyCkipy7xzaP3mz6Z92iF87vae5ococb8p78rCpQxPXyrNyXELH2r6dNza81xeA1fioq",
  "key32": "2uiDgotGVYj2RTYjBAyw2CXUD1nVTGFeMx9sm9zmMTzBRDUUnybpMXDtxWqMHNew3afau8PwbiAmbxDPRAAgJzmF",
  "key33": "uD6XkRapjqqzVzsETujgoEDAiZJuhkNkhgaK5fDH8gtVNTpRpaUcN6y5dU9CWgUZ1sJgWTmwxpmpjCtmscsqbLU",
  "key34": "2jXSLjoFtXuiJRM63Bsbw4U53tBFTF2bAJHhTMTYNZKoLYPqRba1Qe5agch8v6A4VuQyHBVCZj41fCyA9g8bA2tD",
  "key35": "41w1oThVP9KwBMirTmRXaniJn1yJynEFGYKy245DNz37kxgABTWyHnwNf5ZUDg34UVApt33C8hZCFzxpmfyHWpiJ",
  "key36": "3EmTsn8zKioXxZYZaMn42HmvnkKzT9JU4R3C99zzSNQhPQVXLTyZCVqYyShVFjkGa4c9icZiN5t56a48fzvxvQ4R",
  "key37": "2BjVsJhZJQzoDCQeUas7sfgWxxMwATmNC7kpuZeo3LBADxqzSRi91K6w3xrN9G1rzAUpAyXHJWr6SKv96ZG8qCf2",
  "key38": "4aVw6i2mdW1Ku3PpF4pQani1Gj3SPdj34Y1h4TXRgjAzHvELuUwqK8bqrTgTCeq21EQFTsreRqaktCkx5gr3j4S",
  "key39": "5fL5rzbv96TWNeaU6aE9rVYFvDt5VpSp89eTRCXMiCXG3YAg5FwgWnbjYK31EBHq1D2dRBVQt729g218kcmFjnny",
  "key40": "MpreGkmy8LiKvpegA2TE1CCE2Do6vkxHkuDLJJC31UCj18skjeMy8MiZFeQywtj5m1QJuu3VsEk8ghqGGduC2y5",
  "key41": "fqtRTLyGTJag3cRPWe4xN4AMbnSMPFxUuRb52SLTjeE5XLwVgifcgvETjLapgh4pCCKRZL2XyJv7dEoWnJk2ymb",
  "key42": "4GAaFFENptWyXsMH4iQ6gkMNF4cxgZ64k4GT8bRqJ6FX6UvfFjf39jvvygb5j7dbo5NdKjApaFyQvo1xsU8g8NLD",
  "key43": "4DVGUfcnuxZoA3rGRiDy4EhvzbBa1MFyRHWYjazEuNgw7qb7x5wcjxeNjCwWdBWHktLsdLjxN5np6yJKpNyCDhGf",
  "key44": "37RZ4yY1f9PMZS9GKk9QJjYbk9Rp2HYmEErf61BQwVkERTb9Gvi3Af5T9Mk8V1fZxmCyLsg5MVbMGun6EwYywND5",
  "key45": "3NS5e67nupvbeq4TJu2SUqNx9Rh3h5yCNihyvs2cjaabY13ijqD8B9Lsr744c7YfQXPh4rJGwaDgvAQXEreSaJvB",
  "key46": "6GU3q61Hfiw3W9Aygu7GWDLgRhqZ1jFE2cGik2iiM7FzV7V67KmfyUEh2zotwadDGkRVf4CBWanPBVdVZTgvk5H",
  "key47": "36W5WH3kEgEe1v4RqVHPFUzmhjqaPuEVgdmCNVaNj6xtQkbs5s6qqQzweHrUtQcuDXdzLuVGgGfYC4tqbQyoyd1U",
  "key48": "4C7WWDuQmc8qWXtZMBYWP5hBeTZRRGkBmqVL8HNMD5t11ntiNqcPyJbYjvYzdyp6jPSJmxZvwPQEv2g4EjXi7ffr",
  "key49": "5wxhTG6JGicUSUrYZhJ8rfZZXnYxoKxK66tkt9APpQRdxJuV8PUQCu5G3HkHfV7gLTnsVFMyF4VffV6wsmupXZYc"
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
