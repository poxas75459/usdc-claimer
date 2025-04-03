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
    "DLHDA8eFftLUdWm92N6dnEeF4VTyKqpMeY9K8K5fGcTTy4xUForCiPQZ61oAKSabyKzSMxaTX81GUeGLCzLNNYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wBM8pQZHHTS4A7ye9hbuQfqkDVbThXk6ALpdx5motpp4TnWp3Hc6QmUZ2kurA5HGTuE8hej7VPhYtG6eQ8YRW5B",
  "key1": "4xwJba7s1yeSaQPgTKD5hqDsNo92cBjCDvzhcrzz4J7XLAu3aX7dpvFGkkDFRJ1q2gzhFfi55RzUpiSRL59APDX7",
  "key2": "H1jiUs93FrtKNDwAS14Hs3m6vScBnhDYPZtFWdDJBY4g82p8HQA3DscwTGLdshZEGBqi9c5K8ENgWLDHpfQZDdN",
  "key3": "4YfhGd9W5K3Xx3dPiC13wXriCEPoCn9AV9gVVkU1nkjCwjtxvqETu5CQ6yKrHsSUKnbTgpCzJMUKdyNrMmBiDHsM",
  "key4": "3nTbR5BKUyAPRnaTo2aeamF7P711aJF5VEFNjxZhrJURMdfXbbc7ChCLzPDUE4LPtKqvGBauQCoR2P1shjPwRGPt",
  "key5": "2DMTe498PvGrw5JUkcBAWQ5phiat9YQptYdub57VNGrV4LULWU5ky52dWMS8FfEuWNaibxuBVxoB14SHd2NeSdKj",
  "key6": "4tYgrEyPKzaGuT9ymKHptmwUeW9o5q894JwMGiK9Kwz5QJVAr2BKf27bgkLTicogDnQxA2npBjPLBmPugHAzTSu4",
  "key7": "4c8dHm3jPvJQxAaW9nGfvubYeokiQTF71M2k3JV3y712DkdXLa2TwLxvsChcWeybgEQsuKv1onLCbCysVm6MWPSU",
  "key8": "5rKadQ9wBdgAhupAeKcy5wsUAAshGk67wFN3T4zQjJAsMQBzuJyThDudoL9zagnJ76mcoJchdfCvGjPXz4dQ2LPe",
  "key9": "3tLVdh2Y7KcTrHEiAwNMKte4yvoyZKmCHdqkvLm54Do8wk7coLk7hQzYo5N7MyA1x6iwUocxeZA2JSeiQKFv6rjY",
  "key10": "5DAFgh4DeNtyVke25MCN8G8bmKb3oMx7ENTvzwrRY5RCgRmeLeBzKs6deR7rGX3meUpsNpVvEkPsEewDjt85q7NC",
  "key11": "4iYo248J3Amzwi2j41JeCCTny3RnpHydQ3t3mFeT7vDX8JdmT63AL9VwN5ECubqGWmgtrcp7TvYHZr96X3u1XCCe",
  "key12": "v9hfx9MARhhyGS1WnQJc2qxdkrG3kxsRMLnZEyyNTBg4ZJrBJ5bXfqyiNEuRepsKXeq6QsDbi4Pzyf9CzmXzCQA",
  "key13": "67hcPfGe3cPx1WAe5LrYALxBkVc1jbvPatPWBaEbvPkxfWmz7KKVNnZPC6dxVLPm2vTkVF1FDfXNSHDRc9VkZRFN",
  "key14": "5zh3PP6xpQLcvTUisRXKUvVnmLcLBwKUaKHKvY4wRAHu8iqTzuvZCFvTdmRSc6NxRtQKxCc4ybo9PvP5TtnXqkSt",
  "key15": "5DikmKEFR4KU1UasjdaA5zmbzdb5iAPvZTmD9SNrCqcqeeRTmqNsUsf1c4LFUPZc8Tyx9CBzKbgdqvayMxtn3Nw5",
  "key16": "4Yp144AJ2Zh2tJB7mL3TH3xsHBcZLNDLJUjERDW1wgAN3NAmFfNRZz4kCabdoqVBGsQfzZ5gwQ5sn1uxGmHCoQVm",
  "key17": "3sfB9rztv8Nix7QskDjVfV1wvbH15nuqmPamP4wXrJNwF5UBbyAatTcLTHwJNQ5PcRw7aF7f2VSUeWMKokqXCbmu",
  "key18": "of79hktF7xJUNXZLgcgnGZnpNeC632jpcKqoqPzZT1KB83Riv4YKHJ3GmavstrL5hApFZz2uv7oUpGRrgs64Ske",
  "key19": "4YFnh3fhNbZscR7odLeWWhPz6kmWcvJkW5ogHYRi1NbSXgaVQUTur4vS1uBiKvcHtAbwYLNtfecByCxVGVHxhjYB",
  "key20": "22Vbw5oGzraqWPfZH4x1zcy2JZrXYqELHFdGFUBTXbsH4MaFrZfKK7bpZdYrDRkLMjmfapG5gD59kJri6ST2LUbL",
  "key21": "3e4PHAWtM7Kb62e8UkwNLo3JP3ZDzPXHAVTcFPpu2QDKn4iG969E7BpTdoYdny7VfMEkv1e9YT9u99oxAtBL4LhF",
  "key22": "5DhJrcvpTQCBttiKQFo1PvwnEDo8e9Zf29wU3GjuoXAHLokuY4BJBCGt3kqgMut8MPDKMC2QtoEBv78ie11kpHip",
  "key23": "2cZqpwuGLvrsCPhsPG6uwjfhYgSB12k7dHhDDRitBYGBChMSQYXQ8NfFqvFwLedch9Wb7i4G6QR6Z8DvLdUPsbXY",
  "key24": "2fhgifc87NA8prCDAnwyNRd2WvfzmXc6FeMyxdDT9NKM2RHYS6UruuhbQdwxy2X1tNACQgzf5F4XKDsnELtgDpiZ",
  "key25": "488x1xUgEg6evdrKYnjq6J2aMbAW6eqGhkgQatHCmWvMnoapigGrrmGhpHAm99g6j3zwZ5jZDb695iagVhSJLtLG",
  "key26": "4mm89M3KUk32z142VhrmgeVhPnUuWfKR3cRZi6LtEGxBaJbz3hVhXCoHeTaTREW3qXAR4ZeRVW8qtd6WHyp21KVz",
  "key27": "3hheygEXuQYsK3zKgN2rpqervgTyeprYsWkU7gAQCqzwnmKPJEizMgB5USBpRdoMtYD5d2kmg2CxNfYSefEaVrAi",
  "key28": "LStspo9WN8yJB26zBMTu6DW3n1RS72FCv3BtxPdq29Pxvgk7wCcmgNpssqpiU1B3GAcdWt6gRm7zbXGDgNswjz5",
  "key29": "3ixdqRaH6cHbBKzGrPB12h8sY2VXJ1HiWJts2FEdAFfa2nLzjDt7qmWsej37UxtErnvYnd5T3ghaWrMHeVJH64ZN",
  "key30": "9pnfLxZBLHqoLazr2cZ3UmHBEyYY5jj16KbfbtHc8BNsBpg6BAjaKMrnXZLWi6JSNwDEVW8NVbcLtRwdDuNXDdk",
  "key31": "25mHhJt2Fp1hBouYszsMLRakp9gg5QbskcQfyDAF5JLXqdWBP5nmFz4vP68odtyZVRwN1eLsXh9LWZEs9QmwPRBr",
  "key32": "5FjKuMcZWzM1pYFnpYMjyeQ4h9vVqUemrwTU4jD6RZmc8n9RSrebMcjz8xQWQLf6Sdn9hBpKm5FiWAdA7bLRKPJJ",
  "key33": "5YoKTf9qAduygURqhyC6MnjtR1TLXHVKSfdFGBexQebnL1YXYAVnbLNBjXRvRS2rSBd4Xt7Nk8H8c1a8Jpgixgfo",
  "key34": "2FnJE2FXESDhgyAuWWR269dtDdF5NVkqm8mnBBMAgqHA9p9u4j74apMMBFweAw8Khv3Dy9DBSizoPY2eYutkVuvF",
  "key35": "2mdjfDR95Hh6JhD9EhPBLWFJvn667rZxtKEDErxSYCrw9qBcMX6ia9tpJQ7a1V87AUyiVuZootUP3M34S8ZSN6Xd"
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
