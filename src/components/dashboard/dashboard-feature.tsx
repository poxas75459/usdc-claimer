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
    "n8oYK49CBy17ViWsoVtttyd4xQYbNWBd2m5dQcPGYbecaFLUdT2cMEQWJTnVSeN6cbL13gMjqvms41zqTK34wcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v82GDGKUoq1VV6LFVTVFhWedWRTutiyCwEPzzsQnAErEPFYNpQNLnZU97GHRtQAxvHrwH1B1S99n1ZjjzwKaySy",
  "key1": "4T3hLnPXkhcYHjshA5hn21GRDTpuFmnQccxjU75hVqMX8azLDi6Q7EhkThjgcKDV4FaFz3Em5VGT7wirWhDXXi2L",
  "key2": "tWvdzqrEWKx92MqXvryj8Grgo6CjgSPXazgugBrx4zWzHfebb3vtjdKnUwAwWzG4ocv3AQ4suWrzjpdHL8urxhd",
  "key3": "GAhLFg59V6sacTrasiy5aBhCmTEoyeMZNstsi27chPyswMpVKNYmFjNq5dEq2eUXm3YFjCrqnZ2osRe7iLm9qke",
  "key4": "5anPa4MiXHS19s39LY7ZaxURh9iJza2ZrYJAgn5uPkrLrD15MPAcPUsiQECs4iS277ZiVEqsek1MpDXmknnT8Dbg",
  "key5": "5DGo7gTT6VcqknXjn8okegT4TzHfiQzQun9mZHS236Nqypcg1J2tE3wkmbMEQPovqMoPmeG4YFArFLm7NgPGLoDw",
  "key6": "4jPMACWg8r5e5qYZmsc3QZ7cMq5qd8qkDqeyqKnmaUjM4PPeYEBL16JQ9wCsGNNAWXcQGFRY7BwVyCtR3zKWUpf8",
  "key7": "5qCf7sjfypdUyniTTqhQmAZDphU5TepZe5ctmxvKsnvi4RsJC84serdiYDSriXJk3geHTJDud5WVo424DWjBpgMK",
  "key8": "4vQRx26oLVc49AdfDPxEDLEFcJzQQdDgJ5miXA5jfmqD3QtF1vNbPkyyD2dJheqN8d6JYQZJYT6tS6hVPft8hU9K",
  "key9": "5nodWMX87sTQxr4KCLTjPCqfY94vWGKhQuPhJYnhgjpH6HcUxkq1cYrcafFK9Z2S93DUczephWtNC9A5SKLHo6cA",
  "key10": "4ss9d97x2bcRMSGy6WCPsJ3b4MNCLPGPpsBGfgbWooDdi2J9SzJ2USA5WBDxaPCqWwWc9CGmCUyUohgEvksiMEPD",
  "key11": "LWxHHGqpVyndNP8dunoJTxKVjSYExGDwmCEX6APoyXujnnFdTveXMy5tJMZfVuQq7Hi3rSWDjmBsp2mGntoAsxY",
  "key12": "2SZUWUyakactbnXdaWVcNJUffRUCPZbefTTo2UBLipwLvuRtUDaRMQgGxUngbxKeZMjt5wDGHSPc8L7Srhe5XFKZ",
  "key13": "3aLHS5xzC65uPkf3BBiQb3YTUL1UQULjH1J6veYTPB4vAiVMxtadA2h3HqgPTsQsRjZ2UKUXZmJZrQwTVWpUto7Z",
  "key14": "3ZHCheBeWL9GGZu9o1Kt6hNxqKkjvsHq91dbJE459rVuPJEo2mXEPcZFeJzPZTf2zacg4tGvFXU9hs5NdxsBimvc",
  "key15": "MPWsGx51m6RFSECy68h6tHhmgYGaT1gZhsqpcK987TSBWKvgzjDY3RzN2NQM2K4FpycZ4A3rHLHy8xGmiTmNLVj",
  "key16": "5pekWrb9TPMfohnNWrFcV9pEd4rVcebFxWyNnPRut9Kf41JLMttwUox54e3LF3wBrXcm8zYMGVpoX6fLSdYWhH4G",
  "key17": "2UkE6yL6Bt1qxf3UG41uEKrdx4cozmAT8ozxB5JVgCvXAAkew8QeyQJ1ftfAba6DtV2WMErebx2SphsmtAwgtTAD",
  "key18": "2NQWKP3RJ3keHka5LqmLsmoY5RaLFoeHFVNAYGo2M62qzm4rgcENMWsC2w6JiajLVgLGLxmvtdeasomqP4PcKuDc",
  "key19": "2ZArTrXtoqawmnHHpmWrxp8t9rRELvdMkK3htP2oGkpPWaNVtWBMcvKmfYTzd2KmL1opkmitEPSGqsugju6vv3z8",
  "key20": "48WmXdXnagH56sXnQ2NaGvf335pdX988Hzvh5peGF9PbECtz1JvJcYSvucYa4VwbXDy5g8JWRit2csZupuoQ5xpr",
  "key21": "WwHMggRNforeNKXG2P336W7DSxUAn4vZaD3KPaQRv9QWdRaGSMMKVDid6fGVSrHpsQzRFmTxiqndm9wJyAPj4ui",
  "key22": "2sPdXWThstuz46UyptEA6pTAfbE84owCtey9KKQokfrA2Gepk9zhr2MmCkdUqbuv3pUHYsEZ3j9y71bZSYbTLjY3",
  "key23": "3Em7VfQudFU4etCMZRbvAPMfDQw6r5Z2sKe71BDdb4qkGcR21zngKUxTgZ9LjkXdiS1uKK732tEs222T9zsWyA4y",
  "key24": "4Nuba1rmFzE1zyzzsbCR3a9xcQUZ37ZLF1vnMiYvzcZQ6wf65JvfXtBS2gtQnckaybXwgvesXHtAToADXaAdQ69c",
  "key25": "3SV6YicrSeALjLF8spXYebbLjpus4zkYN6BhpoogaSxZUCks2XftqtnBCw32QUpRwkKuVHFn9miBs78trqn4W4FH",
  "key26": "2PJwj6vMQyF5NorGULgHbm8zmVRXFvth7LV7swJxa218sEPVLyVtZKvZFX8t38U9uNbSM2hs7x5FwkYET4MMVRv9",
  "key27": "8W364FzPf7E17r7MFVM4vstVQSoSZGkonVUDuWDaTcVWKYrygnNQmeaP1L5bS7eH9k7c1fiPFwLyvPokm3H7kvC",
  "key28": "netHMR1iufMwF86fZRYRC12mn4JJCm6SaJW95DW6Awep2i7t5aZndjSPT1vek882tpfH5MfrQjdbok1vMqdwsLB",
  "key29": "kijbUhihZNY211tFkpQ7RpFPYf92Vgr2wNxUSuQ38q8ZHfy5yajZ2wgsJJrxKDnrbJX71pYYMZDVgNk6BpYmWmY",
  "key30": "Gk6MbBq7keNjHJ3fBu2HwSptAdHFfkUhxs4MNpDUiKpNyTAgCwqnUn7UaN41Rmq1cptZit7v5YvBMHHKwTtmvbV",
  "key31": "4Ufwsx6YR95GBEQm8EByPWfE6b7U7c9RqxW4TXvKcnfS5x3hzdDnDoP5tkm2BP8cDPngTryzfya3BMNZDJpwkFq",
  "key32": "2GCka7UJ58LoHSJLRdMown2YGX11up6BoGwFZatwuZLPWyA4k6Pa4cWjnNVq6MLKVtUCcXk2nPDBfjKTanmtoL5P",
  "key33": "CByZ5yngpiJLPo1F2xuxDEC96yUXM5PKMgyruWys5N3LmFw7YzSSrvYoHXVME7SPGKt9jGTRkRPhUKXijKigPLp",
  "key34": "AtbZiUjG1wAVRMXUYqbEeQnpEsu67CNgGJYj8V4NnrpwHXJmaYZ9VTdgzd1kNPP5B4L1Hw3UJXo6r6C6yTnV6hX",
  "key35": "3Jzd1PjAT9BrJkA4q6e6nnXHougHJPtgC1kmwVuEz2MWr8BkJ3SyVC7VGyqQA7m5VCjKYp32bEA4tzSC167rSzti"
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
