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
    "4FRVxeuSokmBeMBzmYhnCmzvo1Kae8deaPxfweiC3zPV5eqzYbtN3yx5LciWQpzpkCXM2kWn4McvjXNcifJwVSQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ksjUq36d28rtSNtH2s3QWHFCbyug6KjvmcnSM82dmVYctHzq7vVAVdH5f7chLfqDWV74AJ4ScCzEn3BLvC2F4M",
  "key1": "4UtvQtZhuqYVTXkSti5uqEGfXsE5qGVHnTGzPSZwjpobkmkf3beLBpWufxQ8np154sD7C7oicHp1vskDcx4S81mg",
  "key2": "59Ui2hg5Bk6nP4fbrxkAaKeGenXcKmZnfLDhmqqkn9Lk8rPhvNvY1WnrjnUz5kYXzvvjXgjSwxaQU54toTtVvqyG",
  "key3": "HDbtAaPHK1fBZNjm5WSGNc7tq21FhhcK6LzzHVZb4xin2JqRkGjE4Q6vF3TcYBnJ1kjnhMUvBAHFRYhVWWWtm7r",
  "key4": "2A6piB3HLPNLvK9AQUGP7Lxsffay7ogbeaXmt2DSutKCM5rcjdDYVvspuUqcMiGg54rq5U9R98RMaUdraiDTE8mb",
  "key5": "2zJF89bR3GcqsX2iBpE2vaVwqh6Q57XnTSTGLp5Pnr1YUJsNRTUadAAseBzsxg2X7rHsaF5dcL46QjujFvhEWJHs",
  "key6": "5gkU1fTjpESX2MmpEb2TCVzdJmZj4ZhRUKwMsQz5wf9mSkjn7RPy3E8SdiphCeZzNr5Y3WsUsohB32ockdxfyc2Z",
  "key7": "3ucHcrXq3jgiqFmwDhxLWE8LxpedQq8pPTwjhMHhrouMSs71kL3WwMySZbCugRBxwsEGgbKjdnxu8WRy3XQWHH1z",
  "key8": "24aW4GAXDS4i9ssBLsB3xptf8dNhc2A1YGmP6Z5vLVQYsoHNPTWdnGuW9yYKM7F8iUncEzDbBwDLS2b7yTBQWKoT",
  "key9": "5ZCZiEQGaHk4TDrm5Ur4YmU5RZdEGKxthsNzgJPU8xmTgR6sBq85t4USpQoZxi7Ksvb1ddEBXZ7zVJQuz3b7JBL",
  "key10": "3rRMHc8onzcSX5LUX97MWova4RC6bm6Lkaawc4musPkqSyXEB78BrPxud7ME6MedRAeeXfVYrYo9BJARAb29nv9c",
  "key11": "3998XAaYX6emhSBgeDTtAtTRphHWU6Dbjsy8qfJTrtXRARumsyaZrDdaUUJ7rrCY51o1o17pjvkedmZagpg4tccm",
  "key12": "54mmxpzZkt51aZMKzziUahJF7V3PwubCqtcoyV5DuDLEGzXBxpBDDx4tob2qS9iGBmgiFpYscN8QQc5gfB6myZ4Z",
  "key13": "4X6kY9Hi7YUzfbXUCa3Qc9mkwMJB3WkvmNmdo5JWsDFRq7vUKkvj65DeZHQ85rcTYCwXM4SnUNA2zq9FZTLXrBXN",
  "key14": "3aUdnSmDDKpxn2uoouth5K3CzTfvkBX184TteM2gae2NYLisFuFtbyzpwhkjXh6pUKNa9UVKdvnv7g9ZPuf1EdM",
  "key15": "5cCTT8P6rwBrzFevPBicCzCyjmDhCYGpDP4AvCiUMaxZ1bcraYBTEvytNR8nuEyKd4aKzRZLZ124DnqMnChajGCW",
  "key16": "2CiodhhxmUSNbeYaTqLyAk48Mf1smV1kmcLhoitiZX9RcCxTepBjn8S4EptpGeg7qMqxyGg9LRA8LRfmPUtAEjVo",
  "key17": "3mwmgEe5VzVFiuLtx8JifU1yfjW9fBukUG7whXdnyf9nttCFReEaA1PwFB2TtMzEU1no7bGfEK89wTKE5KL3cQYg",
  "key18": "2pqHSUA2VQCLgR23M2CCWk4qJ7fM3eQEUjQ1QBTK6rkWi3km7yH9kaSvRawvKfwqXnVXReVjYxHUuX9HrQ19zcw6",
  "key19": "2JWnSCzB1y2Q2LqpZHJy3ZPq1FBuFzdFZx3Zzax3vJiUxt8hbHGLroRvB4BujCnHDfKWT5vZBiW71MzE5PqZicBJ",
  "key20": "inc95Sd1J5gHNjEKtSqAAwKiBPGxVL2P88ajoQQrNgY7qejpBumqtQpUKWYv8ANpFWutQkMCK5nhjmj9yyhcwEV",
  "key21": "45XQ2PpsxVy5Tqw2cH6Z2XjWFzez9YS4J5L6kGhE5f1sFqaHnoFMC1yz8H4hckipdpfn1qpXc2TroB4B3zEE7XsJ",
  "key22": "KAicMXw9vXCJXtMogXiNxyFRCZjYzRGjiJUT8Z2rgeH7nnYQiPC4k85nRTAKcmTx9JXdzzu623dEyRpxaYP6igP",
  "key23": "3VoCvM7VWpeaYv6pYtvqwtRRYMQyfPdJX42RbRF83pecfgdK3jCx7Bk8nCo4rxLjxus5ZXWeJCddD9x8XAvpf3Vs",
  "key24": "2D5TsFg1g2oZtE5X822uzYVCZQWBZe1AfZQ55out8rYt74MPWMF2FWfJSpY7xkrNbve2LrLZ3u8Mjd1VCNFnuCnk",
  "key25": "3d66p9475rR6fWpwnGTexgswXhMDDpUwtTz8rpcamVWZK7L6tTRhpCcRVqYLLfcoqz8qQ3xvZSJnHuMhZDRLA4dy",
  "key26": "53v4nNGeBX3NM6pQcVmKW6MyrEPxnwtdna3QvUp21vMYepre4FGE4H7mBtcSnyCMJGtftEZDPvaTxVyY971p12WW",
  "key27": "4LsbpwizhYRNqUqDujnApahTP3zFseEbcSF4heEovsUfmkhCVpXdWrjvTr32p2KvUT7PEY9fRwz6VEgzeFHhbXrU",
  "key28": "4HaaMyvihs9r67bYiXbYMhewBtLRuvKCVSQyHni7L4QCruWVWByZpqKt8yveFwQXbByccTMkSzBmN7UTwugv9nUP",
  "key29": "2Kc1Dn9FWJxj9wFC6EbScXEgPUMrqm59Y3tEvWhPX4iwsy8xqmoZheUbYa1HcK7BUeQxkvvK4rrsN9JX1LwJgvuD",
  "key30": "27X5xrdyAWMdPdRu7BRbLiDxtQzJBcBnuxf3ZwAn4izdbKHm26Eq57fHuANMDeM1Ru7To4wEok2gfgJAxAyZQDxV",
  "key31": "42hvq97tyZLn8Lv6sVCxGkb3rFAsnWpp2DRaPAmCckfFzqv1iv1qkMeYRL2iWXQ3g6eJLrdA3APP5QMYh25T1twN",
  "key32": "5xuJdnDVcFfZ2o1TjDGDqapCQohYnAUaMdxe93fX6tWQTMWrcQqgfVmVhifgjrRmYr6M7a8aroh1QZp8kcByue5E",
  "key33": "3XzbGNcPy3FrN48iTKCEAvNHUCr6BnFowsP9q4oRTDYoDoWji4ffu5pA5dVD2Kw8gazWJ5976JoPG2No5CA1AvxS",
  "key34": "42nmh3xVHoKWus7mHa4Udr7yuz8283hSM42hhCcZEB8hV3MVYeyVSUSBmQXAN91uCMmTd3UM4SYzpLMBt4RfFmUv",
  "key35": "Nq8LpjZsU8ngcV4FDKh56XBj8A3QZ6BWnoH7w82Adi8fBdUPaXxQDfNKJMALAVs3jbsXA9o5Uj2ecr2R8wN53wK",
  "key36": "k1j5b9jJWvVfN9ptK9T4uPUXv2GEx7VKtanddd3NAcdcoBHdSmGPk2xPbJeu91HxMg8bkqTSax7BrGmxQKidJVr",
  "key37": "5i5akiVPppueJf2XSdVxFdYtBGSzEhFWKa95VEiugEF8epVVntdDUwX5YHzwYXdGjhKLXhhhMiV267FPUtK2mPMU",
  "key38": "567KnXmbqWuCMsgL2C9tdhz78N2gP5wZdNe2qXVviVFokEDrmYsCu8JNjWvxrRMoGGgxZ7eLfgBkMfTbPJUW37wP",
  "key39": "4Gjvhr7vx2UDunhuoJGn7TkyAAjSoAyETJwZSoaVJ3KmzJBtkAovd4YYuVvm7BCyxajeoaVYGohfedgha49bmVEN",
  "key40": "2mUf2CRu19WsiALq4XkbFS2jWKmXgUcvKvTo4YRPGFmKKDfNdR1DHzHeAAFHrT9zUPaUm8p8sWLsGfTdeUipAt7a",
  "key41": "5DSowsDxqXFJ1N47tvVdEocTcGaejZkHX68MjSNawoqMDx8VBhCaGvJrCtzmaqKVtBJoh2Rta9mmYbZxjpLCUqu1",
  "key42": "2SbcSPHsppwFBixiVQJEp8LSVMaywGDutHTRVo75rQPNVSfaquUkTMnELUvodmGVz7NgmTNDtc5CdLraty5kQEKg",
  "key43": "2guK1CmLnsaJ6yaUXR8CwbHBkAEpqWeufTK8HN9iaa2VeVYfeQpT7tEM2Pq5MknuwPCQupkqbZMchMzCJW1VxZvs"
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
