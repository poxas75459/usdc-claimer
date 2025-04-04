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
    "F9cm7hxjo8V1GUKAruhy2VDSeYxU15bHSMz5Amwp8D2kJgCKjbcbGF6N6ctm1LvzF8dXc6CAMpF2JWnspye5phh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPjEiXJUVDWc8aE5x81Hw5J4h1o62L5VR53thC16Mx7KWTQHs1L4WpAQc9yJiVgzwQg9x712WJ3xPprY31sUrsC",
  "key1": "3reAr2vDAWwiF48VQS6dCBafKe6hBodV3yvvFfHqrcrcbDyHcgjBdGBK1mZp167t8XXHV7ChhYrePt7BWtUriA3p",
  "key2": "5eJ6Au64wPr2gemCeeWpiVJHi7dzu5714CSbW18tWfsiEWjSnF2vFQCRhwg22DQzeWFGBM76brsrVtHEFP4HZ1TV",
  "key3": "3ofpwQNJQzwtg8o6EM5fDBASWxNCS9TahTKyJjsEyBeEsfS6ezVUMiPiUaqKnZmhicKNnS52bSHd5thH6uPpsqc4",
  "key4": "3n7nXiY69WJ3k3ya8ApNAzJKsgQYiZhxSPRn51Do3bV77DSk6qN9VBV7m24yDjois2rqqXtAPfAfocZti8ZP7Yyc",
  "key5": "3fudK5usPwmSUFAiBnZivqAzEWMvGRdaxeZUUta23FELcxp1wWjZAgHejKxPwFjgpWiyJDrzvZaS3qs1yqVWLTPJ",
  "key6": "5pzbes6rTT6hcfzZeauwFumCYWqadzx1jtUGYT5czhHkGCdGZU2CAXggupBiB5y9TdsTKJ9gpWU1hGYqKFTfXsyq",
  "key7": "2pe6T8NWsXtejUPLV1g52chX8UxMLdi8tTNh8iziVQBPSTNKrrfuTBrEWksowEsUJrAxMjaT1AqxyTiHrNWC7LqF",
  "key8": "2JsJifZyCZMnAUHLaghajWwfzMb9iFFekxQ4jTh2xcZHVaeL3zodh2tuoR7GMntCp2ULQ5ssykuoYXq9m3CwTRFq",
  "key9": "5cCovLt9hoZX8K61Cb1dyhh9JcPxyNb26vqbBbNLEUPWbEBsQ8SuxkGTCCWRePDtRvYRYs2FbqgmixJkF7rWruEK",
  "key10": "4SkteEGricjVRNaVQAYJRxaiiUpPnYrmcQD1mhqcSLuQufSj2n5FBKqQtQEab1kjpsQtH1p4Z132eSXfLfXjDo3e",
  "key11": "43dKAjHTtoTsESZhiyMhUDRZB2FiM879fvr1hrPxwQN84u37LLJfXSZ8wGxhFzKaChK6jgcvadbjgSc8J2bo9hFd",
  "key12": "2u4FpL2ALwVLu61YA6sdk5ua6stCKwfZogxjMACtgRGf4Ewzb51u9nNrShCS3phqdeZJMNdZmHB1bvE2kZ6w6Mg4",
  "key13": "5rVuwGdbmyseCYxeXmrakpo4Up7f3q8N3goSqQafemqeBnVMqSDBHvhSHs5aaYZzepSzzwDhRWhARFvMAdfW28WS",
  "key14": "4pHAYus7EW318FGtpVhvAdGJW5XGJ4xU8AnwHSWPGhL8Emr7dFEsxhgMGAdFvvXjKg3dkQqtcjDgDaCy3w8hgZoD",
  "key15": "4PjzjcJ6T199jVbTMkVrbS8L8L6jWwWrx5v3ZZh378PNyeMqCesiem761TLR7jtWpnWRnBuWb4ya2yAPtvvyEbTM",
  "key16": "3pYykk3EVhnkN6LYATWt2naqgCgeu67wpBkffURxvu365v4y1C9GUP9RRjKUj3bhpDY4kVdoL3vajmfskf2umQLt",
  "key17": "2w3WFCT3gzBSkBSbuo4RGTgzdzXPSaTUjZuEunrEJDch9crLFdqh2wtBYBMcjxmT9WH1eoC28upXdqpaJqFyZVqb",
  "key18": "541gPchGNqcAufjGngKT9UCQF3SLdpCwcBJPAER5vWdoRxKVtQC2rhWgAzA3bbqDY51CimKZUsaa7qwTG1W9QiJS",
  "key19": "azXfL9G8JZYAPRhcFX2DHcf2EdsqVgHUsDcGBxjqfKiWUcWH37g76EmUwYGeQArvg8pd39r2HsrZ7S4NmNUwZx6",
  "key20": "468cu4YCoB88uxSZUsgMgBcAs2bhcpisPbF47pFi3UFqAmurYUN8xrigZPT7Z63jbJFdriDF7umcpdvKCoikj2aK",
  "key21": "2Tpx7skFCnvt1yW12D3CXJVNtmF1NNSpNwU91BRok9gMFAfm74uNXNK7UFBaJcJxgyhMygFTNPm9ZW95PhCPVWH7",
  "key22": "5duErP8Ejytntf2gaRW6xe9BaUxFPvYsq1CnTWDkaiKq1gjCeMJsWZg7g9BoraKYfuB7pwhYkPkx2kxfjxP93WaG",
  "key23": "4Vjwf6FNWMSJfzpsjEd8iuabssZkSxBwm75b2CfxntGkwNpgBcdXryt796ZMJW6x4g8QSvty8sWTuuC5mC5ogELX",
  "key24": "3EZANzMZN54DMC6R8PjWYUJztGbDof6Uz5FNeSVWBfHbJUdht18YDUz65qspY9cMd8cDXSgFTSNCEzFsfWW6LWWA",
  "key25": "p1nhgx9iTou74NNtyU3M3bpGkYeHBcWJtAWkavSogUEpcEpcGPj5BW3Uqpf22TV2SyVB6WMCDEVWQGug6Gnn1We",
  "key26": "csve9Mx2zmTDQEiccVJGRfL9GhgPPCtUTr7urGp5wnsX6mwP8NSK4TDQhcXNH5863ZoEz8rceZse9Z9VewqHyPC",
  "key27": "4xbUxfZCFvRp1i3yEDA67Us56bANsG1nJnVmDT1zxyeoHtnCviaS74g4tRkJs8jZ57rCaxM8jfTYSSjfTzfW1akj",
  "key28": "4b9CdHNDwLay3CBr3W8PsnFAh7f26mX5xZ1kEp6dHx2jT9KoZUxkuvYZRL1nvZC2Fqu6d8K8ZNy1Kqzb7VUUENRH",
  "key29": "3PgYE5FubhQptJmzYq74TWZJZjQfXLeinjiiJMwEPWiK8mMR5xiK6P812KAfRvYwNpgGmeXmuCpcycHN8JgBBnxR",
  "key30": "65jFTC1n6Wt9TgqQ4N9N3MmdDi6xLQmfEW5Mhn5p9zaYzW4C7HnDjwdn6qXSYuQQrfBTbau1emCJrPYtbXXxKANi",
  "key31": "2vyzQqLc6DUuPwLbL93Cgfiw8x7XJmmEbC2TZBFTuYSPmy59FxNhGvZScANCnySSgWTK5FKXsFLiDPmn1VyUykU8",
  "key32": "3G8Wvs1A6vaWvGmg7bxYKnDCvEoatLeaxXoGSizpKvfEpKJvmwvejnua9uqjTRvhh3nY4Bf8fjqeF3yTjsGrXrN2",
  "key33": "dE1DoXzb8oQseVbMrZYoJySZiLmTutFRuynBamSWNqMiCTsGVbqrsMbJQ1psKjojzFncWUnei7prT8XeEvUiVAi",
  "key34": "2Gig82JDiAb3v29EbiiQ3puCV82zNwtjNihrtEqwfgo6f633XzCteQ48HCN46X5xhHso42MTFPBPYLGb73CUVWxb",
  "key35": "2XCYtghrWpmN6pMgah3m12d9PHMny4C8CyZChM1g8ywENFpnCRsUujogKXX7B3oW2jXdY2fBURFxD3hjwKuzBi3d",
  "key36": "5SaWcM9PTuy63fqSPprSbgSP7kgBCoSip3FschZ18CR9BNhwpJQUzxo9FMV1kULX8M3qta2AyR1rV2wPFcWFMAgU",
  "key37": "3CL7N1cQaUziVEt4bcsjShjpEhjGBXiwcJY7dfqnWNXoUCVJrF4dZwQL6PaGcMbjwZ4NCbGdcewYjgKTHTmf49M4",
  "key38": "3YnLmM3tA63yakU1hhm3LWDnTgg68wTkFYMD5sk5NkDpZyBrebgC7nSnJgfAJUvQPbpVCBnWQFsz3rETnAj9AaLJ",
  "key39": "5ZWjtecVSspsiHAaZpWkH2H4ccN3111q4YghMk6vTZApsmgFYxw2UDzUGZ9QneUUYz4RyEPDCejJFFRYbTJd7mRt",
  "key40": "3m64hrYM21pwcKjRtx2RsGQzWdGopyxD8vXoA2bFL7i8NGwdeha8nkr9wQW3NbxbyxiVFLEcu9ZnkRfvcQNWGKg2",
  "key41": "4zCCQ8P5JJEXNiLMoL3a4z4iqTRLRDDNk474Ajnme6e9Nv7aqCn6kSGPsfWWN46CHRDPVvdZSJBMS7WigcatmEtZ",
  "key42": "3hoveRByk4H9r8ZovqC6RDGfRFeQpYgYSJvib99D7bAzg9TCAsjTBnwLjXfduVyDH19cJPPuRey75vAr4g9fRLQZ",
  "key43": "5Rk5816iKZkQiYPNgrEvVQepfKVwvY6REgnqcCqhFji4VFRn1PfPbY9cA2L1GtWSzT65UyrBLM8Rma5Ma4XekK8h"
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
