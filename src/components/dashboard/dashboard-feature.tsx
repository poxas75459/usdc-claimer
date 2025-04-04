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
    "455azpLsjijvVpcReo2qQSsEZScUYLjrzyaxVFyVEo2vdWZnJoK8f2Hsmqsy6aVf81d4rbVmVAkinFMpGxpiAfTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nNoJrDbkYskG27ch3ZBdz7pnrMw7CyHWvun6CJfLAud2fKv7MKANLdatDoY27ZMtwjuATALPrGyktSuCFWcDS11",
  "key1": "4Xdug1ANfmhumyjmxXsi57cEr4mWAjqX1Fxhubym7poAY6r4KWRNJ67QGQ6xvJHg7EbZBqXcT8jSP74s5A7LE7HF",
  "key2": "2BpPxGLceAS6EcSxkw5mL1J2HaC521NA9VYSw7NqgTGmikyVqsggXknyjNZ3YNYd4Lpm6JbmmqKGGXj13jZcLFag",
  "key3": "tHi3X5RfojHvMkdSWe6w3E8N6guKeDPjTifn1c6sZE2nUpGpHkPVD8ytGGGNcZs68Tqn5xGscTVEppz4NkDwhcM",
  "key4": "417jLcuArptLcokkLQkZ2oYdK28FmMSmbnn1ViBPEFgHD9dQHXWCywmJrMsjGK2gGSLMV6N1SgqrPX5nbSZDoKc8",
  "key5": "VkxjoPCUSnPDtr9xTVSMNaBpae9scKD2AKoNhjabUeMychGfqevLPKGUKMV6sJ9faoVgLL53QedrtsgWdDNVrka",
  "key6": "2teGwVjmeLGJ2pkfucS5YNftnmhGfCboc2nhQ2JDsB83218qcPvf3FM2YvDnhtwmHnuh1gT1caFw64VY3eQvDLTs",
  "key7": "4eSzNAMdZoo3tRVgiRtEaF668y2RJxS7qL9RyBVaFVvWuyq5DzbByUHqQnokiLmYDxMRXHfJN29mECJ8by1ipnKw",
  "key8": "4nfQKPifeJUEhETx7EWDBLTPfju1FteNq22hrR37ybmN5Af7UcLHmLLtc6jyyBrHdkTx6ChM4rafqVGRdLGnVTGo",
  "key9": "SFD5pjofZFb5WijAsmCsKPuMNJj5HrL5PPLLbsfa4o5QHwczz4Stf5s5uoNYn7Lu22YJJiALzWJuDeSHE2aM7HK",
  "key10": "4nakQY4AhDfCVsxuaB8yYD5SCUE5pPCd753wvd3XTsv24EQhS4CbFEriuhvJntAxidahF6vyPUe5zZxnwkpP2YP5",
  "key11": "3dWYJ5r8DzSYmgLYJATiX9aBxS3h3sKoDx8dMT8tBeruSxuDAr8Wpyg8MQUBzmGikCUVUtZLyzyEnTemv8BqHBNf",
  "key12": "AVh8wiS5qwtnEdKECmMAhyW5Jhy7kWsezzMeF6si6j8MWPVo2JYCaqT3bSa8vaagcfYoWaXDxCETfy8ZwkYnayg",
  "key13": "3kNpB1mTWYFFKvMfDEJeQDZZ6dnE796Znri6uLmsA1ZgHzLiqBjkDEWnGMmBUXsvizfXcp7mj1ubHTdQnbpPyZMv",
  "key14": "5qauS6KJVHWXv5ykGjHzCzg7w11ZsQAtdvTQxkNNRJwwA1gKqXb1eseBomjCh9ZENx5RmZPbxgwryfmUwbXK1wzK",
  "key15": "cRj8qaRGcfPV3V4k8mpThW4pHabKKmbNcovBbW8MHYRA6ZE2ENWE42ax6WHKoBArXWLbd2WmKcSkjucuW58Ffqg",
  "key16": "2UsN9tJTjqUaCiD2TFrG4n8ES5hGr3CCrNfY6MJPoXAYGBUK1kCaNqDnrXJCFRscqkVkYZkGiPLCYfcHyfupG49X",
  "key17": "4dWwAFq1AEriVdRSTCTognezzcAkZYWds6nQUojVW8dMVrp1Hi7556U5TVdKP1KZWzqyc2ioiR8ztBA9xe16YXSZ",
  "key18": "5AdomcESVFVhNprWwZbjgoMENWFUFShDDTZX84uqdH26nk8ioXKKGCT3HeMKEmYpiH8Vrho7DNJZBua9Tf5CrapH",
  "key19": "3JBVM8KNC7FKQwtfZd4i8mhCHa4WQ1hBeD9xEyeh3AYhvSjHAF32LZkx2tnL4tg8sHHk4qdPn918i3EoWersEeiP",
  "key20": "4yoxxCtk8giDNvTjQnYg3jz6n9ru1uC36j4Wk6kGGTKoRPp1jDZ8RH7CyVaQ2kzxJtj7dJXGec2VbJUuwq8bMypJ",
  "key21": "2NFeTWccxiXHmyfzSVG194sZx81wUrHzdpjXedjuFfJAKerbnh5NQtWYz6Ao9bYEhdi4YaSEpvQ84J1AmEdWRMvJ",
  "key22": "37yJDJoj4uWU6npqnqWeobRN3GqtjHpbs7gNtG7KNU2vhsc9DfaoN86yshXRHhSymyvPKAYSgQfVYcuYUksh3fAo",
  "key23": "2ENkLWHFFTXyouhVb9b3mzdpahhNag7eaXs97JGrYWGZTyMQAWmrF65mVaycV8ER7b5Wk7Rt3MZcDz6kvJRCCubu",
  "key24": "4eUKr84ooMJcyLgb7Wp2wnpr5sfGBj4UfYM97CX6XtM2BVFYXxVch3veP6HNTchPoBzeCgmVcTKTuWe4sfdxETVg",
  "key25": "MjqsMX4vH8gQfj5yDC1agJSX7MBmoMkHTQ9qrXLRYuv155SojMUTNFPNqCqzpn5hr2bXqaAkDTLosn8VPnXXf5F",
  "key26": "2gkEdgNou6d5skS2krqRFZrLVm14DbqTagBAszqvTZPSJ6ngxYSarij4sSa8BF5fpHoXsKvwgi4xu25MnVP1ZaVA",
  "key27": "4B5YAqQz6fXDJZQQiV9dAd18FAqrWiJChwVWbVQWfLoLUsqpsVajLfC56o9xk8j1HMjnZrxvRBYNVkbdBM8Rw5dQ",
  "key28": "c2K84ibpjdvowBP6zLMnQYKt9WsYXSTPXR2GYsTkF9TuqwyabNb2qsauWqDTfVa8KQx77bFTLSGANLhz9B7vcnJ",
  "key29": "49DFkb99XNHWm4DUAnRBW9SM9Gu6W643W3uyBUWzHi5thfu9CmDKMWagiAyEQAuCN383y7urxefT2PzNcxYNtzoG",
  "key30": "3e4G4Ns6aFCMCfEjJu3fgimSiqMthvJq5hRejyLq5Ho5NpCoff1NyABoEjBgzvRdewNLZmZDV8u61VLDUVSnAoGf",
  "key31": "22wavWRaNJ5uTrEo1PfzgJkVsoksRvpfHneHLcQriGjS5ovmbwyQ43cRaQZ1shot5MncKwxiCqUfb3ZaUutqTVKK",
  "key32": "4DBaaBQyvSfG9S3sXAUGkiE4YL5qAce1CZVBhUftCtP38Ja7qSCVPiP18v9shnPNyNW7kRcXnwCY7g11Gamfum1w",
  "key33": "5DnH8jvxMgYBSKLCuqFWKDJ9tJ12LYJBaHM2zqJSxVU5h6T7BEiizjbDV1MMDo1oGVvSC1WQiPgFH9tnPUbpj1wY",
  "key34": "5VPdpAa3hu4iSc9rb11uHfMuzjvdnKdA19yjhvExRXZRGkT6DB3m3vUqqDQYBezdjAkpcg7QcmwmTY7mGBcjJsSf",
  "key35": "5iHX9hdCyHJcYXxt3nQQcTBKVgKjgTJv2CKsSXVxXa45gtMXYoz1MeGsKnrcxnxGuwkczhG6sDtzxaSGcm4hu7we",
  "key36": "4DU7DJqtwVSMqahT3FGaPfuzwd47UXaR99bAP7YBcfFb9FH47a91Qw5A7S4uuwXfF4SAYjgubd4GjPGp5NRLU6JP",
  "key37": "2zG9FWLEgSwZfPM2uDyH5ZqHWhk2iaDn4aevgL7DQLjMxqN6QCo9kMyYqx238yVHksoawisZQQTQhnHGDw69LyBQ",
  "key38": "Z17PkWhM3wwcHEoSW93aHPe3A3k1HoBu2bUz775q8U83NvEpCcTynafz6LKDRUP6AqtE9Nqg2mrTq2FD3FTjcpx",
  "key39": "2TFcvRBNCH5YpAeyAggRnjYvEhhTbKLEoHNeh7QqE8qX6pb1JE7UKoP2nCqWhQ19gP2cHs674ox9nEMx6wUwtoUe",
  "key40": "3sSGe2XPYzpqbxMqpkYxAXrNegTfK6J6zUjfye3nM4gKxVuLNcEkSA2mRHJxDkRMNJEs57x4VEJmDvuD5fFDUkQG",
  "key41": "23ftNPcNYkx6EsDZMBUDgEAoi7rQ6d7aJt2JTgwMeR2GReDw1Foxjrdk4Qt73mrvCN5safWaRpvzXpqfRK2oWPmE"
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
