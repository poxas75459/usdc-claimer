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
    "2gjqzARwKPHmeJLDEW1sWQnhex3ANo2MoiTeq1VQe6xsiXsEBCrtiyNn88LBcaVmTfs5YxFMn3EfrEjDK4ksxW3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J2BEeQpU5BAqSduQuwandVr2G5oeTbEVdj8moWpPaRyDvo1ia4hYPXwyEEDVWY8FVJWbSoZwWyeC4NT1ccgZPXZ",
  "key1": "3ci8TqSDX5Nx6nKeEZRJKiWi2viasMRWWdMRze1UACCLmGCCKhcakKJ3Gfpd6UzH1u7YpRCXsvLv1LuhJLHUw5um",
  "key2": "5K56utdD8FJAYRu15NGxHjQjybPR4oPxZHJsmVt5ayE9kzyCtwyh78eBij4mxRGBFiPBBxvWivhP7wASXBoBM2DW",
  "key3": "utHVR2yWdDb43rU1CTn6inXEsn6WoEk5Vsi4pEyLFFndHNrCTvrEVPxnHb66TmBvw7K2rotSfxXZFuACS7JhEa9",
  "key4": "64igqnEuA1XAgTadVBQWAraUAtkyoMNLh1u8gGZ8nAsBczp2WDrUbR7pRhkxA7CpssBtDTkaqmZRnbyDQEDaJHUZ",
  "key5": "5fiR2YNcAXgGtRmEYHG5zhYUyjQM4GTpT6YLb143jGmXGNALae9M4PzZGdcm8rt2gwCjzbX95rnD57kMpL6c2sik",
  "key6": "3pHytDaJDBFUg7YmkL4uZw9gZREWS1bkWxzk2BSXmgoJZDXQ3qZEKGJFP7uSJou7H4V18XsmZtegnrueTr3G9Wnk",
  "key7": "5eBkMqhxBiAwtu7zQjRrbRGUay9hUEPzAd6x4qCdByJfnpmFpMbdpfG2dqC6n5iUGiGM7XCSwsjCZQRbj6GwTisk",
  "key8": "4SYsiMBJq4ChebFrQEPcwhyXLAhbwTiPxgzB24j56CsjMGZpYwaNFwFPJZW78XW6jMefaGcCaNrBUh6vGW1qXzA2",
  "key9": "5rnSiSV32Z422Nwk47DLvxvFkcmjjnBr1ciP53akGWMaXzqkQN4gK6V8xzRRpRfga7FQ2fv2547JAFUWJwyvQimo",
  "key10": "5yoWWkcebX247oUXU3V5aPvuFVZaHaGFxjKKJCk7YqXG7yse7PsaJFfJ5j4eEaXgE4m5Fs7WcCqRnZviGYremP91",
  "key11": "4oh5YzFEPcHpUwVvLUESEZ9zH3jkWqN7GRw85oSZogGLjufH4JY92rdiX8tu1NJSnMiJMjbnRTPBAVUEk83Drk7P",
  "key12": "4dzMNJQbmVezzCu8t1CRAFbZm61B51rGabEBSpifMXfTeGCHqR3C48bJT5uEEo8eZWaczJTPqM2tMZT85oQvCtP3",
  "key13": "3GVUSx8aPV8VWMhd1fGCdqnTinoYsuw5m7HezJiPyHRNTvL5ir1qRzjsrCdmL6E1gnPsWUHZeDbeTYTd2Db5VTyh",
  "key14": "4Wft2538eNR54cjnnSgP24G8j7w4rKPVKWF7Y7P1WGH8UH9hpHSLtF3Afm5QZ1affCoU7ikfLMHBdQoEm4sAzig3",
  "key15": "9jjyVg4TG6EtH1SxkN1DDc6ViEpbcJQYxrs2gf3Kyhkq1NJy7DgLch4zPEmwqi1zgcFVvA6JPyKm3CRVTAwLVN2",
  "key16": "Xj7gAo2HdAZmDWr98FjX4q8BQAq9d8a358vWXmQHKPRB6uzZN64UZe7nj5MwUmMaCm3HDnsgMXUdnWyP4oQkZU2",
  "key17": "4mtvVy81J6Xe95GskTexAbDUCTP6Y8e23k9uMneDLPzQeTW4XHVinbSt4GmU9ozxVJWjsiFbVuXf3KPNav5ePXC9",
  "key18": "328DGu63uKXdtPEWLSxtHT6wnURN1irSDhdkdhw9khWSxoJRL6LpZcj6v2FRVhFsixAJeDP59ESxXi152rJ8reDk",
  "key19": "53MEHH4jn3MgWf6jSM7Zv8e1PcrSTSGGYohTAXFkSUViJjrLBmkxK3ieUsKeQhghni3UTEuR6eLD9LVwSvqpTerV",
  "key20": "3zBtshAP9XG9Y7bfnRUVZhtkEy4gknjoHkis6nyw844AC2d4fbNhbSKJJoMdsoNsCTipvTroY7eDDD1abJe2u3m4",
  "key21": "E7CMaAAbqbetTVxUcf2dBHpji6K6nGDuMU8ugRXo1hy3s6h1HfpAkcWkEUJVqFwMTKauTtSWaoTWEGFZBKVUjaf",
  "key22": "5K8zpRZtJovccM3b6QaHcs2PDHU7ZwnPFDuM6AVejA7m1LauPeUQPzVeG9eBQsHUkhQPZTsQ1CJMc8FLVgPXZPAb",
  "key23": "2qJqHbBhvVe4b7yeikmpbfuRWE6BfDpeLckGPxmNM7pazi7m5nEakE6ttFzYGZDWUTSa6mVs3wwToY6pAyMpqfCR",
  "key24": "4qq1bCNQxZi49B8V7cdeFYk2sw2QNUX3Hh7TB7aYYs3rYQP3uw8WjFPTYNkn7EzQUunsH8KXsYE61FSUD4PG1p45",
  "key25": "5FpCC8thTk7q11wVAhTSUoVndQKAXF3a4cf1KC4EXhfzhyiseYHsHo4fykpsWJj7KvJ65Jh7zLvP5qJYDP5NKZXb",
  "key26": "4QwNd5EFeuvUxabE2h5ZKWpCPgWaW7jDgQzTLwaPZpnxWJxSYoYBDwPgo5dGkvUh5kS9LGCuFPC2DJpNzGhS6m1K",
  "key27": "TnqA5E2kEPs6EQSXhpTaiXjR75f8MbxYR9yaR7d7L2Bv8yHX1B2vK21RScgkqmPkEgzHH3DqRhEvxXTDn8hSn4x",
  "key28": "4gSEpkDzAMzt2NPAKxLD2SiumYG3dB8x751XsNeLcQoWrp9QYQUTddLqqUzMb8i8VcEDuYcJnJdAzwJRecM1Cj8L",
  "key29": "42pUS86sfnYsvwwBwhACXSWXr4m3q8amTpzScQ44iQP6rZQ8aq3MpAoC2sAKDMUnBBuz2PJnnQiPLkwB9Vjk4Dxm",
  "key30": "41PjbPUY2iLcgi6ZSevZK66zRFYMgFos7oCs4n3RQXTgUJMPjohmvmLxAaGPCgK9Vo9tf6afM4391bTkF2znc2ZL",
  "key31": "5isu9crkbLaLWHCwPx7gVJFr6SkxZEnPEypnyk7t4CSfXz7tCEdPMMwJpiDkUWLjuN8F2bXd2PcMN492L73A2aEE",
  "key32": "PVM1sC6pwbtLzheEqftdfvEXNs1uKfEcoUzH61VxrorP1uh7eck4BCpjmNU5ty8ALGUCEE9mUsaAyi6iscBpamu",
  "key33": "2sSCPB9rspNQ4XXR1kYnqb344vZkMdtvbXUjsXqxm9MNnVm7bGVGSPuWu4qab12yguDoJweURcCRXDng3aUH9ZFK",
  "key34": "qHycyoGocR4MvQT4qVio5sUEwPYa2dyriJHAF16LiwkUdpgVQdDVk3KwtnkHHRJpfP1PmeJ5wmTXTWxyqaXiWZa",
  "key35": "32M7gSmfSwgRECk6CCCwn9zN16FYzdZoUrFN7m5Ls4KU75NFVv4FusnSWSqvXPdJTASyXwcqRRdE9JzBpV9V6asP",
  "key36": "22B2uoyZdSjQfhJiUDeN4ChhNN5PDNFTq9HpVr7LyoVZnUwoMz5pX8eu2z6f9JADhfSCZ4ZxNxCweKon125vvfvT",
  "key37": "3LJ4eQwuFdSn5bAmoCK5yRiz4yjUT3AWnZezk8ShsRFovVbuuXbougKfkV4ohfQFqvaJUXPbXfsx7FQXp1MjSeaX",
  "key38": "45om5d4DzfutKXmdTWkEECJTDHimbYi8Y2HfgkVxiwBDeZ83V4kqr38W71yETnfLm2aPesE2quowKt6DijBP1KgL",
  "key39": "3QLQkmR2S69RC4Rr2XmPBvLQ21W4qvd5a54cXnY388omPz8ZFVnTEiSmFDEUqh4dUuYtA7Hoe5Hr5bGz6FeTGHt3",
  "key40": "546NLy65XecSxKkmJ3ow46cYYT29stS6uMofSqgrwk2YCgiPyYWVdZxZDyGKqSNYkqyfufnvmdJS4ngjo8APx7LR",
  "key41": "5X9AZBdRZkCkPZ7kiR1uywC4onKNqpM92SN3t65YWLB4ZEUP8vVo34LvSngtQuS3mobGCfbJT4toXW6MCfutEqb5",
  "key42": "KL1C2B175tzNwGMDSuDMBze7wqunoSjYWnrmpV3exzba34unGjmAhHiXHupqFD9f2DtrUw7vpjD3kdLgJyqk1Y2",
  "key43": "rDYiEhjX8m6XPxUc82uHzMeTNVEHaS71VXGi1bTc1pLYRY2X3zbfTfaqTLEeDNtzjiTyfNfc7EcBSvkaENEfo5W",
  "key44": "66r5wirHg83o24dpRcksi35QpRUhpoiAqaQ56wtTXTVuzt9j3cxDFdXu7sRzR21CugJ22nYpifLhPJTwXJws1cth",
  "key45": "7AZudzv7XvqCn5qdvgDmH365nPc6WWXDjq9ekgFtBmFcf1Kr8j4oLgf3vDP7N9QwAPJuEW2Y3GsSDZYQAfD4uRY",
  "key46": "5ar2xfbwM7mwqyhTWc9NhHK3WcXzQfAFHeb2thyLZpBn3phEjiae8UVNshe7ueEF3nx7PFLgpnFysRDd1VqTd8JT",
  "key47": "2esRusn82RqxKww5grfNfZEcx9ETBEfNkDak3FEWFw99zyZQvTrRT5Q1AfpoeKj4jY6tQMc2hfXDkisRR9xBfkR3"
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
