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
    "2WsQsH6NXN3oyiEUCnwUMscHwwtkjAPmzVdGW8XaiC64DebFZJpCxxoaCwL6spFYksCb7MrkTYJYitNz7JSWaNrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qdC7TQ1XbSVNT3bpEFkB4UDjfj2TXpkcL14iiWEERw8wd8PFyX6BY3M2PP5yAfUmn9KZPMMftTKHrqzqvfRfbeX",
  "key1": "62UDeQ2Tb4QudiLZzMMqkUk24gGid5115MgkSfhiHJABbQesDrBEU5XSAhb6iEZ9JtvN3R2K16sPoiZ1LsNEpNCC",
  "key2": "3Fs6SSVBQpsWAEyfBjqLb6pjxhd6w5QsDTGinyH9ubrziZzcoHcWJNhcGRFjfsyDca5P8eZjthdcH1v8eevc1kda",
  "key3": "66jnqaz2Q6ZfGqUqoPToy4BCbU55N17GzoqvVpdc9yhiyfiKgvGYzmDgDHPkKmKZ6UJJEuriJ6af9xgxESJh41MS",
  "key4": "3ZXCi9Es29zqxyKpop2Lg2vu1HrVZkgZRVHQRwdejPx9NnkqV25CxMVcHNttYxT8e3b6UX3n5EkRi8ct7SYw6MRw",
  "key5": "4zKc8UrBuHb5SbQTuWJVYm1kCrpdYspxWrBYxEnNX4g1acDCwxfoQuLSFza2hUvuqQuHsjkMbv16i2wjLmWdr6gy",
  "key6": "382GBXHGXdXZoUdibJNvYhxu57TucqE6L8NdQNNZQEpzmiEqVaqmJ2uDJZjcjWy3oaDi2MTw92bzH6rFZWUkTJq9",
  "key7": "4N79w3i6F9wYozUpttWCZLKuLsHpAtDouY3ugDvEyMTQwUrMM7PdrK4kfKqz11c3kkjXnKSEXWmaQXn9XQctgdKx",
  "key8": "2w6skGETQLiNZPwf5rqzMoRSbyAJKykAcy9fVaKouU7yYoEda2Gs6hn49VBKWfVdY5DgdfncStELmZpguN2ZQpp9",
  "key9": "eY7XdUhi7MzUUbvKHioewUThUqRkJygXB73ZXMb7evfUnwjCyuHGjWqWDXgvZm77XrTzjZQQn264Zu1zAhhdR1g",
  "key10": "2Coi3r8gjQRVrpTF1SbuKRLAi2g8zwZUFjeGRHRUUg8Hk9sRPhcSmBWt9227Kwd6jWGx69FQ91umj5dUtHXiHsbS",
  "key11": "xJr6mkoHDcBGGnL6EYE9EhndvNbVwvPYqJEn85YZhdUN1CiUW3NvQhznYD1dBWUuqmbTTCFrg68DGGgGUMebU26",
  "key12": "WmVrkCgumRU3WexxmmtChiDzEe864SNQTHpA4pigoMa4HJE2RxdQUqZcGCYkPoSDguE6dS6H6zqCECEg1tjtHif",
  "key13": "RVsrToEouKT4xwoDGSMrixc7fkm9F7om8eFYPkJAAgrpXa3E5bFvatfXXpEXo3Q3e8xSy62UpzTdwsV1QDKKcau",
  "key14": "36GyHUTtLJdtU4iZeEpW1HGioKfuVP9jJvvt5wbUhpBZJQbyeX4EuxTMuk7xv5vgq3ZbCuJKgaSSA7hbh1FEQqG7",
  "key15": "2fw5D4mRh7ktcXVsGH2Z6v5tzMsGPyzjeYCk7tYf5HRV1fi33i6WsMmnrPL9jdTim37scGpQ32w5rcA2bbTrREdM",
  "key16": "VGj8y53XU3cYL4JnFr3E1iCBnVWAqAmrG6ftipPS7xg1FuYoaWg9ows2rmxtCmu7cByJ8cfcKfm14UxBY1mRpax",
  "key17": "WvxHj2JJQDt9Fzr8TU35V9eBujoEw2vCHoYKr4qh3dqCLRxg6zUnNy3gJHzgS1zNusnNTYBYGkBnPsAj1iwa3GA",
  "key18": "2EPdvjBZjYZndnHgQMzrdMexfQ5xyVeAKSuCEFJhjJEZ9gqnbcCUJX3Tj8jp7FN69SgYFmWvNTvEE6XBvxFLk5fA",
  "key19": "4BjE9R8afYPE2sijAnchYMo4uPXXz2Nr7vnEknRfHeuvsw19PW4iuQCGNeYCuumYox44wwynbheSzxShVgu7egD8",
  "key20": "gC3iXLCpGyukv52FzCA36TvuQPx4HGrnibaA1bvh6CngQD2AGV3a8jn8fkZXbqRfAFANmxEW7qy7AMcNNmHWW53",
  "key21": "2VHX3Hobo7GqDFa8Pat9mznu7hKEpZpFx7P5gVuDngjrTFTZVfbAoqKAvD4zZJAF3wVtxEsAUEziXPCAhniQ6Zr7",
  "key22": "2MyG5oLdjcYFQTttcKoRjhUpfC5c8Rajts1V2nwYSLbzvraR4ahgXqbSJNDAbsZvGbiBGWuaSs5GAPP1SpjCBe7v",
  "key23": "66zjPdLMehBPrVNtykY31aArc573CvKDokBs4CXPCjCSy19pHkd33YqR8ywDshi5FRnLNgW57mKmbF2N4rLbxvUp",
  "key24": "5o7exRYYWNqdrXQwUXELBZE3TZ8TtA6rc7Hig1uFm9PmkQsoJ96iHTCUZoj3xWbRwocnrvLCgbwHcs3xg8gy5Ugb",
  "key25": "3PsZhZyYtG2dAbY9LEJU9Qg2oRWMrLu7PXKTY346TivHyTTn5tnuUPPF4rSgaqkYY92Uu5x95MLnZfuZdUDny7D",
  "key26": "4x2GHrL1j7ierJi4U3fvceHmXAmCBsaUiuf6zyveR6t2PWJXrjhiPWz8VdsbrLeMzwGTNANesJJRGdrMEVMFFSD3",
  "key27": "3UdkrStJ4aXw4omzRVCqzJjrFMQgA7tnmUGXi1pjaaykJTPFYwBeqKTkYbjmhiG34zTaZwVuNBLxgmamhXk3VkeS",
  "key28": "5yxuWuH8XdGLEYgxKrfxyVNazaKfdux7yxGivm917MxPbapzJqqrHKvowuE6BF7RSa5uyMaGnRTmAUw43g2MZLd5",
  "key29": "5UUP3mZpuMiVJH5PaQF2pwNCS2a8oiLoSn1xWKRziuTSmej2yCcZ4qjxDbL5rjCjafW6vqqX1aQgwst9rFDksHk7",
  "key30": "5hMUnZtv7c1EsUvBSubokKS9ck6bzM2QCRg2dhSB9yMaPgEdYkWfmMdXMbheJFAdLdUDkVMNG955kc7gaiw5V1JB",
  "key31": "33F31rNbhB6DkoraaSjJTU2MbApJFwX4n5Q1tttQAvQSTpvnUUMhpSi9CLeTDEHTfb5z2XNBViBD56PcXGn9YZU3",
  "key32": "56HEnwQRD7aJtUXWHXUftE4b8V1sjvg9CxRCBNSjo79rbyJurKjDS6ntTc8keJrKvPdjmKypxsbAzo7mFLTwL9J9",
  "key33": "M81Y5u45HJ8JHGXF4wS1uygLrihe3PuPYzF55Xi6uyAkQGMEtnTqgWoe9Aofw1RNDrGT3Jcqd2boegF8E79sY9c",
  "key34": "3yY5qdQWarqunexB11DQ1K84LD2evnxDwVKTMKjeTAGMN1hVqsLon9EZdkB7CAktJJnajvkhudaWdpKH9CjbeJA8",
  "key35": "Qjmc52q43zMqWtBLWnbSqi6eFvk2x8Heasze5b6UYGpzD1YungkXR4PuQqRJz93MLn3ujjYXudRMYxQtrGqFfGy",
  "key36": "56fFNGdRT3f5YYtsNWgj3oD1XTyZd6fJcsNGWvQL1XjpmPVmVe584KDy9tz6cidAywvZA7R6Csnra7kejDrfFypz",
  "key37": "2rgd8DQzrAhyNZZLkrHphTodvWLnXDh5nyiDNRvy7bMTvDeLv3wKBreCEUYsP3mEw7JUfKWdzjYqYQVoEjhyh4MD",
  "key38": "5DZJA33RzB7YpxGCfERJS4a4cRqFS5tF1ghQrPNbcttaNnQLEHpgbHr3Q4ta3ov1REHkrqMAj9CUC9o9gPmtkgkp",
  "key39": "4aFsZPJK6DHU7nny5fmSCyzAvchPFZg3kGP62txyMuZ3e5fqb1zHPMdtAwmKvsxbojw1MicYdtxLrDU3zmwWR5DB",
  "key40": "3uCKx2MKuEGC9v5TxAznU4P9ReMKG7rUZ3Ss1dFzhaUV9HubkCYXdvzYD25c2R742373MMd83jhNP6RDeB5PoDVA",
  "key41": "5vMGXiJQ48bUhurR9we1Js2KTYYwx4RprwTPdeiNsZG4dASjnXWXbwuwYfMeZusSH7UDhXGK2xWwjKiJEoopeDda",
  "key42": "2jhxo3LfcueiBphs4HmuEyqCu8u8TQMEw79C5LGtdLKhSieSsnVsnjo3VsAmy5sctAaGd8o5YDR751pwqK3H8DnD",
  "key43": "46FicSTaMTosZNnA5Baco8T7R8duZRqrTx1ynoJHB6mvnuiMSNSC2TXudtTKXUqtAM6YLfwGqxNUuqXrDgnZZVkV",
  "key44": "4g2K9vD3hb6sgzMmtt4ZSthsHeK7XETeR9WBCexLkM7ZSPJmKy1oUGvTVs4m5Cm51gC9EReZonCXcYBj4cb6V4aC",
  "key45": "3euEk7dMJJcq4ePEMAZS15CLJbKgFf3z3VUcDGnoRJhsa7oNZMEYKauQd8FuJLoz8dBbvchZ8J64fSU4ow4jpjSw",
  "key46": "bfKwsVg1zP4XS4WDEVxUQobEBpvcNDwTP3AG2S8c4Yowchp2aZKaxVrmat4Cj53rA8gFM6JPpQ11Kt7XWfn86xZ",
  "key47": "55zNCGT5E7jSLC8J9dfkXYczQH98oga3LwbP3MTFMMjMYY7dirg2u7KxpbLMbQqaYd3ep5GJCSJenmPovULszXqT",
  "key48": "3H6mbM3J7mvwSrGo7JFAsUkNUgwKBKE8189DrdArvWGfdoVHhZHMr3iDrEsHEJoXHw4JJdpnUy8Sr5Eye8WFXaY3",
  "key49": "2C7bBRjZfRCoT3sws4DisdJNVNwBZLB8fJz6myyT2KCYorn1CCA8U7q7yBjpj1Lpf7kcYKUCjcMVss9pquQ9Lt9C"
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
