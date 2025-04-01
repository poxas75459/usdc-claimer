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
    "2LknL1eecnaxvLHUYvbAbmPSJaWJycQwCWPv5FyFDB7UBWkxjmZjm6sx2gQwPjcx54VtdM8Bnk5PJ98MHtUgKeLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3JRdLWH4RKkFayMDr943FNC1AcWv7YtqGwjBYZoeSodCvzHhghVpMPVR9EVBtFSAUGYweQiAaLMTaRbjpokWDj",
  "key1": "3oqSukmDjFGD6NMAMcjFppLt4cTyxuvCrCS2dDE32Cp1V9e1Y31bcwyy9zKLRWVq9s8YbZa72GidWPLX9kCAUiRY",
  "key2": "3UNgajYX2eJXqRtxcp1utFi99sGS85LEHeTrKGWf69psRgXWdztKcfwzZDoLY4xbtG337uczyzP6TpUMRqVAxw6N",
  "key3": "4Y424g4cUqUKf86r8kQ87Yi4kWcqcqd289uHpaNVQ2hgmG4CS3fkkWxCN3b5WZUNGUVbQTWBZcVxG7mFd4k3XnzB",
  "key4": "2JcUVWUXCjfGds769nFXRW59U9EwDZfEeLvsc6LMemgbppaasc2brJfvVBEKCgK1cBQqVVJKYJqDGsax5kaFdHns",
  "key5": "5qTN9vYyQqfqgbSwHPQT1e9pvVaH3XThcHGXS9ETM5K2b9Lixjr7KMNzuMMDjJidRKWYBo8gAw927muvoS7vCAst",
  "key6": "2zEqWAjVj3Tqbc7q66AoHjmj4tBpL5Aku9CWhJz4465BoE6e6eGrjqYyF3uSg1f4847pguUXnu1cpyCz8B6cpTFY",
  "key7": "dxh9Uoh1sE6Gk6n6zrDVBB1eDPpoTwSGkfbKdYmnKay8xXDZromXkQySNLPZ5fTBPcBpdUpurNE3hBVq27UDgnP",
  "key8": "66u4WxYyHoqwADE67ubuKvGNJmkUhDrTpqS2SZvPV4DhGgdvCxtDbRH37FZt5NCBcM11Zoau1G9qzt2ex1apfrPx",
  "key9": "56sfT7QziUYsfNp6rHzqRXhyd16o7FjsKBRjSYbSvvHuiPXN1d2sTVw6opJqbV922mcpWSnuBaMnGd9Ci8vfa5VX",
  "key10": "3BNG6f1RxsZRBpSY82R67owmitAHavJWkPrZaYEwcRHyWme9mCn4p8soeJCyChgbJeeDTsrPMWThD2fSBFLWLM6x",
  "key11": "3oHJAHibM7GLypuCppdAukX6bysZ8iMg2J6W1xB2gr8n7xFkVrPXUFmS5qEAuarAQMJXV5ETn5VMQMA5V3DKVe96",
  "key12": "5R7uq63RdF4mdLjTw4A3DMB1ArGNzs3F9z7y1bmArsCcofAcYz7cAWesBcVGnRwshT9R4uawqCvoYk1mr18k8Rgo",
  "key13": "2iCDNnUZANXg6VMEh3HtEB1gHFVjVire5NxkCNVrGbV3vM6r6Zont5BA9kGWxZwpSHJRD7h8K9R4q6zMpJw97wiT",
  "key14": "oJNeB7tnAuvGvKNN5YQ1oAPkRNb6guuURbkJYiw6hy3fmV1m6YXNxTES2yBS4VTyPTE3g6VjC4J5ZA6Xjsw9wLa",
  "key15": "3cA19GWBWJXcBJuwmtnwsEG5Qwie5TywPwtEfJokb3st93CerG5q7Ck5FtpL9dSMo6KAgvaMMaa5iPmmeoAVLZ5g",
  "key16": "fY2FtkBEQSKGJ4J6LK9itScfxiv9jCST8v7QwwGG299oC6SgPTAGZjgwnMr4YhWEgio8518PpuSTrwX8jubtAer",
  "key17": "4J6pxjPXv5eEpGoQrScpYpmow8A1J5Pj8JEbGYZ5FXc4W9ivGZDtrB5ETgbkeCRULv8UBVxmyYBCG3HCmzCbQQhK",
  "key18": "5xavaEMVxgWGhi3nT18fwEXh1czU2wamrzRLospyvSfeUdXTw8m7WtQGk6oNzgSXmEncDw6YtspK6LatV8ipdHcD",
  "key19": "4siNQivsdfe8L7rb5yyxY4EDCMZpifv5CHroJTGpmWBdGd7DAYDCdVeV1QBjMLMCi6W3weJsHkU61VfpLu1LpJRz",
  "key20": "ivF59YDZoxQhB2hBYTecJ5jK2ps9xMaHNvB67hdHxadZccWXJS2URSZPL5qxSW27TG26vaKkmB9kGghpiuFrF5V",
  "key21": "3iUWXhbpnpaZpmHRNuGeDyt2k7xpSKXdvzVUgk5PggbTHMiLYTzQjYrTsj5fLHgZsrecebPLJrXu43HtfMd6b2qj",
  "key22": "5419nWy7YWHkNRPMZF6Ki5YUKp5b8GNnL5bJd85KsvbtRr2emFEWWFa3KGTjmmVsjwn5RDf6Va7cwuWSN98NMxjT",
  "key23": "VFwbTPiWdiJdFw8PL4qQUaKFwueuPGUNucZ9AYkYX6E8oQb5FaCtmvdkEXjM38s1VYAAhYg5ZjoonPiCnuUiYc4",
  "key24": "4Re6i53MEq4tBT5DJAFPdq29N4N6P1T1YgnVERDimX1MXErFBaEdwQwyvwE2cX3jfox2TYKNNpkNV141Mg5QNKSy",
  "key25": "38sCXcCKWKVcTY2Y5iJxnuzV9ZYsbHABAd7ucgTXAo6WqetAYfiRUdL8V1SqZns6PFJxn3oCmvB3hpZa6geeohnJ",
  "key26": "mqV4JfpiECThnxhqDEyhh4BDWWg9NRNrB1JoQHZadCNQ3eSXkrA9EeZKFJfssY8g6g8PwBEq7FtbFVmaweE6HGM",
  "key27": "35z6pPrbrs1kG6zmuTnML8y8mcQ9sHUHb2jLtefsJGJreEhnFTYKj6AVQ5DpSTS26PhtU4ANtRnDK8uZYGkSo7do",
  "key28": "37hxqLPu7rdhRTMoZui8mQWWTJxceD85HRHCtMkQAmFDqrJfYE4vCNHFrnHAnanR3inqisbNFxM1PSgJdUeQZwnq",
  "key29": "4BKP4a1QqMe6NFanSrVvDXDTQr7KCAUU6mXVLJTPM66hohW9mwYkZLt8vp7v4NDcriH1m7cXagvWSy9sYG6YYnjc",
  "key30": "5XXD4cAi2ieCxFZJKweeQEWZ4bebEs9fkkR8xg3AfEEd323XK32A5NUfmMFmHSWDvsqyrHr2YjzVccNsUtvHieG2",
  "key31": "2xvN3562S9TPfH9dMdM5PeX47XD3oCfdwQyeay49WCKLDCYZRJuDdFNPY4qFEJ7eNrgqmKnp6LSk5EXNPWLWSnKa",
  "key32": "2bwre6gdy1AxpqHysE7JPSZFUfTB6VgbSFvM1ZaHZN3i5L5UyXK7rZKRszXuFmMmPPLykf7f6UR7ZcdHvcvB9S2A",
  "key33": "2pftPd2wG63KQqWiHYahK3RZ72SErvUPehe6CphPw7yLWbQ6Xs3esqn6vrKbfEV2MkaNGruYeGdth77YchG3c8Vr",
  "key34": "36iFcxAQwg3iBMJV4V35xf9jY6Kgtr9ViWWNkkapw5NEzLRqMjPeVNm3YEvfsZjDAz1anVrxg3VWSJ5Z7ixtHe3j",
  "key35": "2RbbCEikyhHwdfyQqZEBHozzeXQ4DkFH2cbKEJxhH9t3bdr4kqwgYP6JGDioPi3fHAffUNoto5xoMH3X27nUZYi2",
  "key36": "486Yz4h9ySHacm4hcameZ28BFwBawzmyDLQKQAzafQ2PbBMWeuHNXsrLQwMgx1eoQx1zjwBJYnYjF17dWyDSVgjG",
  "key37": "5NUj4g26wDYVaBFSYMNgsDnaKX6pdmjqTWEqf3SLgypSZ4z1e11rpaoLvNiNqtdWYYa1tyPCUDL4tb47nzZXJrFf",
  "key38": "X9EeCPXnr4sVUefJrxm9SyzCab2iKJbFSajrptH4NfErbujJf971fco5eemfWM2YtsM6zMQMJsfsu5MqKEZH5XM",
  "key39": "3XYFw2ze1skEgCoDhNEyY2XyKoC7BxazZLNEGKGjDyfw5epm7FTqCcdK5bz9mvc8C9NoZYh2HFqneF73MoZAQH67",
  "key40": "29QBbHrcuVPXvJsxndQWVdBZdeSVki2P8BJmzfE8XNoHq6WDa3QF3m4fbRdUnTi3C8KQk3QaSf9F2TjKLVhooHdd",
  "key41": "3hjwRUMc5iJHtY8JJmenfcLhHXtGizVSwwgUpamsALQ6k6nR7N62q4LYPoQfrVZVn8399ivjVzACoVpuMEmNmTmt",
  "key42": "2pXpCm6JoCSdS2LAsJxHqhYac8eZu8S3k3hwTdrFt9NyH8RMXrecNuNDHbg8BmmEErkdB6A333Dee8Qs9qbh9vBZ",
  "key43": "5JsgXXKvWXrXx1h4De7SxcQurUNMfCM61ic1oXLqDUpnqtxN6XMGPhscsUXnzmTFs5aTYz2LmpG4qLTPeuvXvHvC",
  "key44": "A9MWCpQe8RhFJMp93sk3AaCehRTT6GBx6Dp3TBWbZaZAbT7DVvGvH2f3dtpe9cWZYDXw4g4Ys81NRWcsCGWrAtj",
  "key45": "7znUJ4JsepSKSTd9KeUuaF5xHNAnCzves1SvZyERzN2dgj5TdGYopGEmHJWGZgpyNnwBRWJAer7RFqtoSZdAyxB",
  "key46": "5MJwhwRs9L66kmTD6uhHzpF6dxPisPAerJc9y8X2LRuzoM4bQ6ErTcMKG3ovaKbr5MET4TK6A5RnozmHePDN4sAq"
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
