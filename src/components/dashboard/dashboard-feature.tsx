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
    "rTzi81gTPKv9TW95ib7Ce8VwbyMbQV7aAg4Mjzj3Jeg78VFyxzx5pxkDciWxtdmHuUAyDLpGiTrhXrFq12jgFo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CwGw2pTZqWnnbPJ9mS2P9VA6aQixU7b8Rszw7RVTtMKa48kPqLLum7r947gTTFg9PdPhTdEqPFvTofbDeRQswHv",
  "key1": "4sLzioNrUvSfRvwHb25f3ZU86Ad2VjampzgLMG3QzJmVzzHZsDazzah1c4UKkPBciFnGcSGpxNbCwGPFVTWe1FWZ",
  "key2": "2qHhSkjN3W4maYPUPE8afovkjHLYyEVsA3BFhbCmvjJFyZyke1xHJTY1RRktgRHX7oMNdWQW69aMiFiWxMRwWJgi",
  "key3": "aJH4DFZrnWYzEyfwxWQbpVgEH818Y2gqgvjMoTFC4bbqbo22upzyph6Lah59vdHcRhB4cRhMXaGWuwtDntX4oqK",
  "key4": "5gU9ZTmMrhrwcret21WSxqVrNEtv9jWXAky8eXxSqyvRDE9jsf7MeQGfEz3kLQHwfz3bHXbv8skqbnw4nPcXxKan",
  "key5": "4NrJkNmdh8vwQ2XtxEwf84AKwfwhQGk1xRVT9F8bFsiYG3kwYpr4cUZrrgeg3bK4izaaQD6WfMVU7rYsJuotdmQv",
  "key6": "5b66TJHojhnsMLUcf8YpnUukzaRPHEgV2DTqD7gTxacvvZMy1zVZUGUawMv8sPVxbTVKAGpGoKY4J1ZAFaPoEucX",
  "key7": "4LVRtyvszURwZdYBCG4s6ehHr11stPyaq6WGUkTPXyFVTfQaR9xb7uSjERmMzThBXskep5SEayEV5a6vKJUFHh2j",
  "key8": "5sgoRjF3QbKZMBLuG35tBazB1H6W174eM7GXiv9CDzMeHhD4GJwbX7ecB178kpHMNbaJ1GaJ3JvcKLa6chFoYoQh",
  "key9": "SD3urcfvH2ucxy439rQoJK5fKAJKfgASfnU5fqZpSesYE1zjxzzCxEQQJoE4mAwSsKwf8rUMVDMxyXztLWXYq78",
  "key10": "55pN91CNTE13YkBxCkvWaC2G2RvWt6vbapK2uH85z9d6mRkRwoctUJgwz6kYQpGqzqd1iTZpG75X7bgHaz8c32Zi",
  "key11": "32y7tdQdoZYKV2Q3Ei1Bt4a7h93Z1KyvuP1BpyMkc6CgAPNn3ahuSbGVia6VxhMVpMmg6cEGfJSXHPKgJSe2EHpF",
  "key12": "5iESSKeNjabiD4yDBb5xSQ2SNJM5qLQyDYt3Qs9vXDXZPr3hhP4GA4kDkHZV87nyFvSCWpqK9S2UyA7KNzB7LKyV",
  "key13": "4VM2KpXRJ4N2t3D6LuEsKjT224XvEr3mMeUFETZvUXBuXjab9UEc17j4iZ9wwhvPJUvBnwkDruk9tBDGELysudMz",
  "key14": "5VGdxnMWqAitMZarfaRuLeK8vaR5tpoPTSA4RTDwsJqYWRTwAQTPk15bt3SfjFhrrGtcuZEn9jinbVAQCCQLVNqW",
  "key15": "5Ci9eXEHiG5S7Mv9aVkDcJtvpGbmnhMmfcqE3Jq1HBT9UbyvUzp7DUMXSb7rvX1YTDwotjQcm5h5UWCNsU2YdsV8",
  "key16": "3vbynisBukkohnNhk9GQdRyxnBUyRaNVqutETxgvumJ5dyMjB4JDp9zsXkqe4CEttspDmtrtDiJo1jMB4cKxCjo9",
  "key17": "5RaHn8v1bkdZbqQxserK3UzvAW1SfivirUaW44uWUwKrhnuLWZhWf9i56o1hjtJhyhxiBMxM4Q3VwKDYMGmMGxRC",
  "key18": "UuojvWovrrTSYmazgBGjPPJbvmzRd7WdvKX4s68E736HBDFjiyyNQwL863FEnSS2nXQR5B8UJaRf8cTY8zL712T",
  "key19": "668RxqYoKPETzBcRFqh8GbQ7iXJGf39BzTikZuhxg78KwYJFJwgqTQN4oRjAsf3AvQPNkx2isPHPuaKA6ic5ur59",
  "key20": "4xMeW17juzZQuRaZtMHQdoSKoMMeVMCjeGb3DQRQYkxfJfGkigRoDWi73GsvBtHZVw3sjT1yTQpZK3y7gg7mLufp",
  "key21": "3BdtBCMVZ1esFMGpjF7Sb6ANDe14kti7BSUXAu1AwoHwGNjzyarmkCuSkA1tcKRpH7ZR9oex2R2Ek4iJ3cTVMBAb",
  "key22": "4NMrgdWHwQt8tkmdrLFa5h2WoFakMnPorbddtBvrQ4tUL7SeRS32aBCtQHrnrLzvgCtnSjatgJXkgbTkcg9gPC7m",
  "key23": "2CKEGmt9tDHPEVN3uhbm3VWhQohkaiA7w7U4UWAyA1Dk2eED2xKCoKDTGzyCY4sbGpp7ZB1rTSwL44AqEtuBLRMz",
  "key24": "3GTDm4fdY9vKNKHPuCo5KUnzTGPJaggL44XYBrCn7bkDxLiixraRLB6ZdMztV3mgQyUfjoTh9mqV94xr7zqdjusD",
  "key25": "2C9cbz5ZauM4daTWHfcBZrNQQmctC8z72w8ZT67Kw27De8unp2tU3pXyp69AkShNju7nXnKY4dZ4wWmgnyrQbP51",
  "key26": "5BFqbdvod8fjRvB8eeyfdcXdfNTchiUs7wTaWpc1EXc9THTa7dW4UYhHfYjWrJw5V1YmyHR9cNijbVs1LKudxRQK",
  "key27": "4BK2tjtzX1K3XM21VPuUQZ36UerLejiN7H2y2GphCKNAtzxcavQtXVkGsmnSawyuaUMDSFo1qQ8i2gHrPetvEbsJ",
  "key28": "ZX8rQBSH9DQvMvJca9rseZ3TTyLB3wYU1BMZGG6doD4AJUVhHVPGMfkemmpPy5ua4wfQu97fHeAEsvB6gN1e647",
  "key29": "2saGYJsd7ebf2XvY96ktrnJTkKLVPM4ofRSEF3NeYwXSgKzhpNYT6bYugKvqJ7TJtoSpzXYd8yXkmM7RxmY87Jow",
  "key30": "4mtjejXv93hdeLTNHTMQsz8csF1rLcz4KCRPSF7dhwa1tDP3F6WSPXeNh61aZkBCH44cPes5aYxm3YKGWwy1NgMf",
  "key31": "2ePY69NJXTkLYs8MuCpqbBBc3J8NtBN4xwbiKHLsNEdQirSuZG6TTEj7U5oWBAzXq2JiAH363A2HubhRz1BfWfF",
  "key32": "4jU47vvTwKiDMnF46pBFn1kceWrJHeDCBBg1qQhhsxgM2Ba7riQMuVAsGYJcWzQUF5bzLksmNL56G4W5FetCEXHd",
  "key33": "SKZTnkVVuMsKd8B6x1akagihTXMDFPQJz1iE3vqzT4bXB4MdQdtGDrutcYkZLUZK7fXRWVN8sBZQpkERKFwzN4v",
  "key34": "37YVdQqgFarcVGAKiAhYucwR5FX3R17pPJGPGJq5UoKafzHqErJjrHL7Yr9c1RwQVphtNdnK4TVP3jf1SbPGErnT",
  "key35": "whyem1GPqaj18ZpRWDscCEVX3tNkhLWvVqkds6KXCeQDcURvPW5DPuV5NtqR8UdQymJERt6xdQidMi4PFbUrNnB",
  "key36": "eXCp614KnsjEa4iyEVpXdtaL32rE8qKF6TEd1268tSGEWx1XVztA2gCyxLzDMZ9a52NFpuZ6r8G1rtUirC6xKcV",
  "key37": "uXrqgaoNEbvtq5Nc6YABuHgrS6XYzF2SbPDs16NjJKgSqRNEuZ8RiHigRfmGVtUxi8NFnQfVxKrXKEMLSxMZDdM",
  "key38": "2bPNAab2pGEqrHA1jfQzvrtFCE8FysWzcm1YPes7RRXkAKuG4XRnxAcVSYBkksEuwy2bJ7CM7Mr2eWgTjTqbeUPA",
  "key39": "3pdf2RjoyURYXsVvGCvoUuNt9hoS32rdGJjbbXXGc6gChsTypCgLYTMAMxLZExaKid1iRQQnPQZ8QCNrEAcUdMfN",
  "key40": "rDoqgE7PTNFHpQqa3HHSKsfGtnTpZkZBpBtnbsGYrnHXQBus9aAudbYdktYQBcJBR5idpfuD6d76NFpz3xxmtpx",
  "key41": "KFCoWs5yWpjaupfy7fg3pp9FBeawyKz9YBE1Vered1BJ6oZE2mFFKSXSNYNSucKChiGdb7BsPJ96FhHStPzvupu",
  "key42": "ww8EUmoy8AdPpP5V5tibA8vPWBuCFssQNnwEnTYaWKd2rTcnXLHu3wEuLwYeZq5fPCBr9n531qCT82EdSr4CyJV",
  "key43": "4o5bbhtfPiqfSk8tqCZtnksas3KeZVVo13r91JRKD5gQCAfiveaHF8Bjpf5DEecPnyHbpfxMB7vufXMaXsHF8nXY",
  "key44": "SJLY5ded8Kf1tWTetAvEgYc282jyQjLWm3yP5BkX82sL2HA9PN1bpTPSy2i9JfuiW5bQm972D1pctCDRBKmk67Q",
  "key45": "3Wts1kgRfdwXyXBCNCbP6chgHyQjbMssFuY7FQixjFu9BpP3GaFbm1QwQE6MAPBrhfnJYefcaBkLRr47opFVP6Sh",
  "key46": "2tTcMqVAAUqF8RuiLGW5C2UoTCdh5cuMcuESTTFhq9ZKMPwZjKtL8guR3UE5GduwScPS9ESycKTQJYgpQYiFhMuY"
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
