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
    "39HiB7LrBFK4sTRFWGXHPvJ44AB5eMFPod47VV3eXq9tSQBch48YvjWPy6iqTWrLhmaUsBPX9s9eYCqrD9cis3YE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pRKYSpJ5ex5SYuuKwtdc57yW6iQcJu94wjwAsq74Lme3LuLqg6VoWLs6Vdm4KiA4Y1yf22VHUSM1jsY4TWH3pEL",
  "key1": "211tQRuEFkvbSsei1kKYuMjvoqHEq8DWRuXsUhNXVpna28tRCstPPpY8ZJQ9TYk3wkMvLgbfeNsRDDBcSrEByxyL",
  "key2": "vGDrAEZD7CM5RT4v9wzfA1xmewskLSmNXdkPkwRJ6VtbdztC7ynQccgyJNuFGJgK3EL5SvTAaxKs14i1u7tNC9v",
  "key3": "3x8gB9RwLXwDuJnpxTDLHjGLWwM3QvTG7NHdq3W4vCmpyjQHcao3DezVQbyyS4NTo6fpp9h9Eg2vuemcRBtDTxwC",
  "key4": "24zpeAJCNAYJSWR29J8zxoeoDULdFiPBM5L6gtuGVn8TevuQRnYWnna6AjfEG5hrE4PWQL6C8cvoiKSKUqzZYwpY",
  "key5": "2UX5SjaNdW5je7sXfmpPnR524RuV7c3HBPrWS9fBAt6Uaf2ZNc96QJpJsT8T5taVFz1aY6kpKUV4AnAAoreKbajd",
  "key6": "susfkfdHG9Gcj1T1BMGKrPnw699hRryzxccKgZfaRptyC6Ec3jdmAuJTT4JajtRsKkaF3gQXJ9iYAgvfNYzxA32",
  "key7": "4XYLrFLPsdzLCEcZhzXbX3zREH37TbT7DrsqGhmNucQXpVk46qe8jrxiMn6U2P1czZYFnY1N7RsmQas1nnCXiLsK",
  "key8": "8kepic3BaPoNXPKx2WWKKKYCHPUJY4pGc7J81Jzo3NcKtHJ2ssxgp2pLEg4h46crTJLGqLDbaBp337Hr8qKAwfK",
  "key9": "3KuM4zbS1Wo5H9oWP7ieUuLBqpNLFk2jSZYf8YjRiZSKcV3v3tX1ZMQLP6KV6DaMyWdN6NnM9bvNHUH8ipDTHSoz",
  "key10": "3kGyarF5Yj5bJk9iyh45ed6DiuMvH6jSQnAuLB4jrdei8gMrPSPpN1hiEZg8oqpFWF43euB2rYTYfwYMoTt3iFvD",
  "key11": "4uwsQojR81Vnnbrc97YgnkkMGGXRmQqNpvarT1b3ZoeY6KeeD2Jyc8oEBRB1f9Qb2CedmbtwMrhEFZJ3scaANsmB",
  "key12": "NHJ73D1xZbVCnkakjp9nas9Bi2xvAmPEaqcNRAEqMEyFnKYWNQ1e7tgajKTUQMUqH12yM9ZwAn3Gjou8HTPhf34",
  "key13": "JGJB7JWNSyW8pR6JQYE84CukGQN3dX2jUuaCwQwnieAUdvGoTp6uPbDnbq73yojRDnmM43UX1qz3z3eeT3ct1w3",
  "key14": "41mjQ9trezsJgTKKsjNM1xa5TANZRyTMw4D8ttnNGPmKYEYzgCZ3n2GwDyhum3SQRhhRVDHjZsup8S6mYSTKbMTd",
  "key15": "5YCa8d3qz8fo3F1oHHFkcTzSmqFDAHXjP53ZG5Sc65FsWYQXN9P6aRQe6Hf2KePt7TSLrSNTTmrGfL6tD64Ys7mR",
  "key16": "4VMoJNVLm4oCtmEXQJjx7UE9yKLq2Cg6m8CdqWSxvTeCAqef9eUryhGFWrdMi6zCDdsu4ypsaUZdCh1FR7v2JXyf",
  "key17": "3PNrWAZvSqYosbkP8k4GvYXzn15HrSxGa7Nx28532XFUbFNZFtmZfBqepd8E12reksKF63siA5Qks1Wko4x3Wuse",
  "key18": "2FUeWGwoikK5nbPqMNJq9QbjsRmEh6h2F13Bs86ZsZFjMGo3BBs8RBPGhbXyEpM5ohawNS81YXnVGUE3k9jRq4qE",
  "key19": "36PctmNKcifbp566ZcJxqb3psSQbWFcSbzZMyGrLLT3zaTjvjAjDTZRrrjhbpUjxubTjbHoNxxaKqcXyP9VbZio",
  "key20": "5s4T1hW3P66TyzZzU6FrsFQsdYpCC28J6vJRufQsr4hemSMCFBuoefXoAg5Ma35542n8ZhRmFJcLAjNzdUMJtSTZ",
  "key21": "5WE2WTUr6nTKsHwsTTtFNb1zGWkAdKZWzUHCTmkep2WdfF4Rp4smTvZHHUKiHZGRWg52vjMiNrmnA74AeRMbQni7",
  "key22": "3F7r4PEKhNwRGbXQz9Hax6ae3rnwnaTCFajodLu23vXm1RvdiyD9U3GUF12KPn8BaJqNpEHjG1qRuafqeKskNKfi",
  "key23": "329jAgtXjNb91B4YfL7ujE16QMcMnU3e26XaJr3ukPcjme2m9rG6oSkDFU9vscEJyA5eUfF6zbYZ5aYyT3LimUhJ",
  "key24": "APMNK5xHc7x57gWpJVZPu94FedjD5k7fx94G1TTGTEJdJqBbtb8VjLwebSuMpQ6nCkiErneH1AdSKExBpn7RmVg",
  "key25": "4h3EwrpowVL9zg5Eo9Yo7hxALDJNdgAf5UfFZ6EQNfbu7R3LmKAK12CUPkTBactPUbhBdmTmR4HWnGNVLBJcqmz4",
  "key26": "4b1f68DkgdH1cVDpHmx9tpia62UapPyjPaukRKpc72QFRssgKxr2vEojMb53qby1Wjzo3CGtARpRgTat4RsyMuvh",
  "key27": "2FZSEbfsNatKGLYsiUbeb28QTsJoek8mfne6vz4kGWRz8vp11o2VJ1tY4aR9EXoE87THVP67i7TExd84pwD1d2sc",
  "key28": "4PMJjcPrhTBHZ8iCzhQJZtBjNtBRGWLXC7yNdfr3xTdBibtoZkrRw1uXMHbNncEQPDFRzUoWGMwPSWCodS6m1ySo",
  "key29": "4qr2jS57m1czyhMW4ZTyPxi8eTUpKBkp61RASRDchSdNkrvQM8peD9Dc6LiRSQRm8AFqyc5WWqzqsnumEJsKpM8k",
  "key30": "qKtc2aWYBqatWZoi3i9nux29oHUxoM9VaqbRQYR348jkP4nWJie9sTo2sP2rqKNSoWRCxdkuNKfMAJDbJ64MVEJ",
  "key31": "SHHG2MqzQBbmspsVBfRk3bLnctqYudnuwH5SNJNFrT6FsAHXXsMDN5Lsp5ycrUrmuhB8xGDupk2WARuMgcXkjGz",
  "key32": "32h3Rprzo9kttKjiMKv1kk3AEsd7quYtXUMBtTkY3khHpZH2mSK2h1TxPpQhHqYWix3pNVk3SwhyGaoz4UWjnByQ"
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
