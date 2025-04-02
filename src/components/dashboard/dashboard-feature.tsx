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
    "5Ns37BCdv69CGjmE4zXXm5F4irJCcY3EzjpCQYyCqmdc92Sk92f7vfghphyCHbzxq93WPYLMioW2sihoy16TzmWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o7gZh6suhup6ihTrPBQitbU1MFHLbXk11tzf5YYY39HLdKzmfrXkTLjtLQLmnhVGh6c59ZG35JarfHv8WaFHVcN",
  "key1": "4GMJ548PkvYdiMNTXTsnKZG5uS3CSB9t2bSXkeaMsjgU3CTF7nqQRufH2RXhbJ1cuwAnheWehPeXtRLngk3QHcYL",
  "key2": "22NQRgPh5bp2WadCnPnhRAyrCejoL8MRxUcDgWF2P5Cai2qK1q6wAYSM1CtmpyC47gpmt4CX5kJjCHEWSGUs1G2E",
  "key3": "3JJxtS95MKFayFbTnDavRpabv9CZ1oh4hU3PEP76G8MBGD1MwFS38y4kwTv5EwZFf2SdXVRg7o1KsxaFohUFgjLA",
  "key4": "4MvZ1Sfiu2rBqLm7amXXmr1kwAS951GFfZhMN4w35piV7AijtfwSy2X9hc95MoZUVTuXPxKPrgPfksnw1bte21Zg",
  "key5": "x6D4UEXe9n3nw23m5CaH5uk2awTc9xj5hHNoVzuC5yysX6NeBvXmqAbjMmi4fQTH1RaQ7tyYfDJ72LoV2B1d69q",
  "key6": "2uW53gSjYFv87mkpxr8USM7FZHro1J2xBE779e1dSdq8H1VfYm4FYegsiH14SwYubTEfNeQ7R3FeHSXxLaFSLD2m",
  "key7": "bbN1LMguaRek1HhhABekzcLEXYpDDgEaAb1T5kobz1GtjDneqaMxDX2hNqDh1bSYkeXRCADRs3zF6tcJyagje8r",
  "key8": "5aNTU4pWJ9uGawicTEbMSM4Y9mk8nWx36f8exXkQZ8c3UMFzDjtmV3AffN75kQgaSKH4h2uvnHynkNhZTRtcYZek",
  "key9": "2u9Zb8MA7dQqm9zS5D5rS8RdB1qkaoCinRdzBUonUUnAc6UwP6PonhxJ3sRFguAiHnzLqbjfTYRWECRi7F3ePKmY",
  "key10": "5SV5aVaH8aNMr9ncsRVMcK8qHBnHvhnC9t3gWwob9bcGXmoERZA99Aj7XDxaSBvyDVaZF3AgPYe4bBYAwXDf3YA",
  "key11": "845L3hUJemg7dXayUSspUZqfmmvBJgjor94YjMpoc6auFwwFCfpmKdmvmefHC3H8gJzohU33tsLWiBheVKJiTLS",
  "key12": "3251kwR1oCZJFsmcrMkzCf9ZhLit9Sa9X6iL42oAYt13RmEdALmQRxEUgRey1mvrdUkChaEozJeSL98i6K3MaJRm",
  "key13": "3mQBUP98gZPKtrDhcaPGVeM1gz6AAyRXwTxoYPVbrxjhnStvf436vAS8kxjTJpxJyeLv1Gsv8K1dnsMNRB17woTH",
  "key14": "3dVDrHS4jsteKZxiU2uraz6sgi94pQypRGC2s2fTtH3zkKTq3a1gbCfi69U7HKaL1YY65xXYkqxfKGjJS75AUtiT",
  "key15": "A64rRheZsBiW5jUtTwVbwgA5JjTddSNeDaCmnpTP3vWoJz5CTE7QKbZM9FHdyW7J5rVDvwjzyKN5kRYcYiChSpz",
  "key16": "5PiQY9MmZCiSJYFL8fJAT2KSphg6efQH9tLUuMGvRDvNUgrnofM3MmLnUxmRhyRyURjWfeL2v72796bQTGFPPDTD",
  "key17": "3JyoGVjBKsTmEJ42AWfcktofDadSzUEBHc3H27UHg9sBhaBSZzMbZ7kjAuqB9Yk2GPChJZunLaTKuFhjRXEho8U5",
  "key18": "31nant7D5VJANKviLMzJNfbyR4sF8BWLTSESYaebPLKsDG4agTr3W3ZAMv5ZMHDmWwctScwyPfE2tg94jM9sVUas",
  "key19": "3xwM5PcDrDcQcvV25ZdpRfva5j5sQUgnxvubNiqtkUhfaV1wGvA9Z17tuNMSTNTG6pN2TiGftuR6kQKGofkU9K1Z",
  "key20": "9PdJrZNiQVzr1y8ZtyYkZG7RLdZ4Jrpnpf1dSxL5d5QSUEA5hNbvDvCKJYeNbcvGunmDzhWwdQXysXbsmHqeQ5s",
  "key21": "8w1oiAZ25MKQ2YmvMAMB9zCr9uFzHihnkwsDwGaAXSKiusH7FF4jNFDBZzJxf9uTvUS4zv1dytcLNvLEYETpYJg",
  "key22": "47f4FjnYUKWutfiXeg8gtDe5Uxpd4Si7dKFDSYbKP4GFp6xQ5XgtcYP8FJn8Caf6afgqEve2L4t7o6xAwo4pnYna",
  "key23": "Cyu6CA9aH3GpeY1LbiYBhjGbGaUeQgStC38VQq8mzD7mYiXHagRvP6omZStAqxyUrqhJhmLRZvQUFo5fT1goZSz",
  "key24": "4kSuyiG1cL7QsrXWfVf3isfuBik4zBM1nYnZw1ptQLEsuqJi1oGHshXkzE28Tbgpi4DK3J6yX74Y1PUMeRh4tDRi",
  "key25": "Vqs3ruPQpRuD23EBUxU4bN5do4oKxaLLHTHYLkQYfBYNDo5zfHkYYdStTP74P9F1F6ATDDoYtogJbJr4Rb31qQZ",
  "key26": "2syUmHn8Eqa45JKFhFSGY8nrFNwe11K9FkRgaJJfKPM26bCN6qjwtuSNLQ82swxZWAhpi6dZ8BCvTmuAWSfCxuJc",
  "key27": "AdXaoB3KDDu2A53yu4kceS9t1YLRD8JWU53zSq6n8HMthPWmcUVJUwgYTGZhzvFcxNoyGonfHZ9XguSwphSsfjT",
  "key28": "oMkuunL4CvQxSveyhdW7bpi4nhT456SNpqutUS3RTnaxCPgKUh2J4ZvTm1pdXhy7FrPRwGjCGGAkJidEbgj7JPf",
  "key29": "5sQe99hcUMRyzSMNa8pkeDv2TPTTU4EVhMTnTsFtUjsTNQ7SHFUCk1sm6aCHwXntXrTyngPenjt5ciETSdygGSyg",
  "key30": "2GsbSz15yEcrGGHFCeFfguBDehyV8U7rF99FVNwqjrRTyDNQDfJur5EMPB1s9bjfvubDeafXFvr65QA8BaY87ru9",
  "key31": "4ALhENipdR2tfFw1z4ojQDeZwF1Bzeq4uExa7pcG27CGBhAYKhRYUUe6SsgwXXVrfSTD9Tv8SRaQv61JCdBtvo2V",
  "key32": "3s4WDRws68Gf8Jqzj4XKuexiXHPcoms6AJwaxMqYbnVfxgv5NB3N1yeUdbiWdcVbqynfoiDbfxmnym2Xdt1N7k6P",
  "key33": "2G8dH8VpLjRrWFLGAyiheK7GyPcnzed71yLDecK4MBdJBMFYofyWuiCU4VUrzRku3drgsiq9aeqrXqH9Tggrtnvd",
  "key34": "5aiPafHetDY11zABCVwB81ZU1ez6rijtVnD6jbz6tyQsbkJSQyXNkz9BFLVSNNcmzqDdnFedDmzEmG4SMLyiH3E9",
  "key35": "49FoQebPR2iDFQ7uTZR8neVTTfhDGQJRxYRrbejPgXeFjFoBUFEfe28nzXeweJDQEHgWvs9UmVfUMYn9KRasUL9M"
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
