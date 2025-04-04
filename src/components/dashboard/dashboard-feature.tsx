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
    "vH3dZyAcf3Jtk6QGJqbKS2bMjEgQBs8cyMHAuE4G79XKnWtCW632Y3k9aUM9Vnc3wd6QsxsAirYGkkAuL4mAGh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZoumXg1qGaXbZpKBTkUC1N9dUeFBGd9N5md4rj7ys82VJMNBn6ZAYSNLnW9aZSYgkRboQPSfvFj3i57T195xGcH",
  "key1": "4gLNMVoeGQXTqVjnbP6cXQeLfB3K85hmuDYfsGHVP1PnAhDXbuyTcngeX6mMxyYxDcPnd66DZu1YriyhX76dpX6G",
  "key2": "3j6VCFxSMh1TnYgnUCQjcap1sQ2TCMBpoKiLERSmcSPozuhHwPz1vWGDrANmv5PgjM29hSrNoqxAQNrB7dmtPmQd",
  "key3": "3syXXih26ZMbxefpKUGEevSPYgfqjJqfiXViXnHLrVH2ccvLuk84AacrVvqM8zW1zLbR8LyThL67CHANUJWCRmkE",
  "key4": "4vLtKU96deAivgsVmKTh1cVfzVDmykZTr3CChTvyjpr9nwXyhXu6f14TbJZ4xCsykzHqBmJ5WHogLXqDuBUB1MDK",
  "key5": "3n2wmzPhF3vsdPCafKZU4YVw7XG2uQC1rWRQeXat6bzmcAX4NLpsNoNhSMAd9Ss4X1kjdtmDtXukm1oHvWs29gCq",
  "key6": "6SkcZ6cLhzfZmvvoXLRzb17MXv7Such2GDXnAWJP2TcgCyw59Jgyj9MgXnRQwdAUAZaiPHQ82Aj11YnivgY7DEL",
  "key7": "4eSFZ117cAgkhdWQvtKzoJvVKm4jd6rtjZV5ukZcwkpbBH7SNx8TGud3kqjXVUmWTHtRbsS4iGyDFTePhXBBoSrU",
  "key8": "4GDXGUbGk8gR3N2gaK4tmRDb3rYdtmZs2PQfU4kvTVbSHT6CKwqVCYEMsaipquu94DrDU9rLHJxyT855CBQpWCFk",
  "key9": "5uomAs1ABA8Msxy1wiJbjx8bJh7qUhbZdhPvvrRQqXcZYjCmFRP7nynsUk9cmck4KrtuRwdkzsL2AZga9Y1FZ7oD",
  "key10": "bYkm7E1tBvbYJnVPQ26VQAkfXaYYUdyrrSTsKEJyLT3fz2V2B5g7NZqKtJoVLjYZbgHdiVaw2E63LJQrLnyyieV",
  "key11": "5SmGTwSbG5ntDzFCGCJZfJrMDdovnXdbUWFEM7auFuz6uMh4TUMckG1axFSueiHZW4pgHLqKgZKX1A15jdg2RN8B",
  "key12": "3KmZbQWYFDoufdh5X9nBnMKvvVQg1bRatK8LHZ6cdJ15XeJv2rHatjx4NCHvq921AEWf5VZBFRF9P89GX1rxbfSN",
  "key13": "5HsttvobrCHnXuXSt9xEzBHNNDrU4mCbv42qBT2tHA4tmEd4S9kT8HuV8KGNjANPnBzgYEV6UcLeiGB1ssfi1NvE",
  "key14": "4e6AYNyzHPHCzjxW3JWH886ZhacMBTDABvbxX5G4KFRDrdfQjVcDBPYimGyC6jqFXFhWpteRJERBdnrghBy1YyiQ",
  "key15": "JPYCwcjfNHi3c1FP58zVJfqkmHR1Vj5xQPPZbwBrFGBiwvNoAktdeJS74DkUu1KNx34mtXTpAc4ygK3q3DEmE2D",
  "key16": "2wPJcQ53zp8FnyKLRtTgpzuW3jQuwJkS56fnrc2P7cnFzn6mUGgenEu5dqer92SyTnkuHqyFGsHVvBA3pwjPxU2v",
  "key17": "vMgWCkqZ5eh8HB87HzfutppKoVAEW4c4TXNgcq32sQhwB5rpEygW8KbpRgrUMNKBZxGUvwmo93QhEj5KRLppPwY",
  "key18": "PksnbR4KJUN7tNc7Xg6XbsHwHYpe4TUERtnUAzeBWVBeGkSj47j2iNMccLwjwjW3diEdV9ucRkE8bh9X2AmxTsT",
  "key19": "44UAtJssHGXKJ2qjRqXvug3U4icW4cjgjE2vyLm8Uz1yciHP9cWZMsphMcMbS6SVvRbm5w813wY7GEue94hxTw2n",
  "key20": "2EaNWtom397U9Cu9aYeJLusewRK4RtZUpeNtqUkcwfx8BfaL3RCffE42kcBpe172Xu1KY9HCotVsjyy9TAiVB9K3",
  "key21": "CFrwf1CxWq7pT494hfxazZn497zsVaVkdMaQctUTUDcM8ApvHVKKnorWVCETSzM3VCq3QzmQofE37YmPqYntwfG",
  "key22": "m6KBLLUb6JP82C42Yv3Kg2TfdzQEnTn3tT2bjTve17Kquksixk7fDw62bR2WifTUeyPdXPi9m3JM8MoT4u1SwZh",
  "key23": "293cnks1EaBbnAPqejgp11VaBL6spQvyR8ffk5Fvd96huAJEsKkg2C7nPrWUAeZiqqM7yptrYA66EqXNfzRvvDvC",
  "key24": "2SF82zdDWq4KWdtZ3N1Tx2xsoTCGqsgVGJDKj4CEfUY83iX5yfsCLKtGk1Ftheaw3exfBdrakCq9B9hXhEnnwHCx",
  "key25": "4p9ra8KG6wSNyk1Q5fp7W7hARWsxibErPycEjSRNFv3KQNWJdQYGbNrnAagzjDFPfy4ctrDz3NUt71faTj4Xawkd",
  "key26": "2T88vamWcReBH98Y9jmy2wxiM5BM3N4FSWyiPzdkLGjUphq5YpT9DLJiRyaFpHPXAbG3tUVa753AKKYzCpd7KKh3",
  "key27": "3kdSog54PQBwXNJXGLP7P67jVgyppE5jvzNQo7obcoq8fQfFKc1YEp6JPQiziYoiEJMAxNfWPXoJzT3sx6gYt289",
  "key28": "4bUtwJaJfz7nRPwT5b9Xqbygq1bo9ymBSmifXjQKzYZKbAioW33iNdKrpicfBRJ1reVTcXEWup6TnA9m8cHUtDWm",
  "key29": "5i1wiXHMcdhqqHD9UfWP1bEbCdGwZj9h1ZVv4pU3N6zrwyZq4KGd1eJQkvr4cvMeUh3E9XP1tTvUjHBp34bM1pUP",
  "key30": "3RuquFwbCuCw21wSBRkqf7ty5fhg4gNHAVrAvWhqBCmhjWYFhwmfRwMnoyJKwnH7JJfA5rDQ6DtNwgp1ifvyqENV",
  "key31": "5nVmJRo5CmKTMuZg6HpC2aWbsdmfXgRpHSp8RxNxMKnCag76JdVkcRUabCQirS8Hqgguatt9XszhacaezHFG8kL7",
  "key32": "hrHTNNWzsg8sEk8AfpZ7uWAwPxtat7gPXxAAmPV7ypitucdMRRr6wShtYhnaTtnYymaEwa5hQaPSkhgQhTLpCUx",
  "key33": "5a1Rwqxkp6fhY11WvYEnKqbCawd9LKKBDVTEfyEv8By87weyzHnUdqdxtNQTmELCTKSzvsXbwUzV4uG154nSx7aB",
  "key34": "2e8HPZ6EYurwYpJJKYaPPf3cY7DJ5uY96FKDTGeRNHcxd3shWsgaEajuJqVQWDoyVGxkUsRHk1dqUSYWRHBe8jhh",
  "key35": "3Y3FAbMP8e6kP9Qv572pgprdQypTmoXz9vQRW7r9URsQX7JQwvEv7e9tiFnZ6nex5T9tosYedxrZe2QqgeGEQYDR",
  "key36": "4BVA7YGnFe78Tng39CeHY21TXQ1XXuYiW8fTpZV8hKCzbVEgYZ21bg9Yvu2sJncW4QZtzSR59VUJHsHp1X7ABmcu",
  "key37": "4oiRPyAxzPEwnnJD2HJApvdLAnx15VfmKykADwvW8LLSjJWvZyV55GjuQUPz6azQ5exsrxv77QdYsak7KgbooMYS",
  "key38": "5RTdvjCZxEqSCfLQ3QWQRksQzK3iW6ZTuCyrRz39ozJXLPQP3wya2pPJQULnSTdcRdh97yqTwrwKWy5sRsudizee",
  "key39": "5tHE9tuJrMFaXWX5SPykLZzKgBx7uQh8eiki4C7RmBqNHmM22awK8oNoapSm9jQ7SERbCXjbN7vsLeAzgyZPEARA",
  "key40": "3cWQSBk6xJUTHxxjnGAGbGcYjxcxutC798cxAsbkBd4RwgNRYfDod98LWTDZuHT1fYeTX6MHvg3ym84uT4uwMKMn",
  "key41": "4nQhZouWxu3g21jZ8mAXEip87HoUMcnG4Roo4LsUfwgnhaHx6xTQ8uhe9xQk1sGAfoznWUwJupZd4Hq9K1KVsNwb",
  "key42": "23R5taSYcTKxF2KfkTQXczNqc568uf2tpBWm4D1fiMod5Xai4H1gb3LANzAY1SKYaER92j5Ue2eEnvXufQRneGHo",
  "key43": "4cQHoj6vbDuvihauFz2WBncmo9MP6oMjvT5GZ9f98bYb65cwMifbVjoVNaYKSza5FxgnpmE2yvUE5MaWEJGGEW3Q",
  "key44": "4UueobPUyU3NNy852JVoynHyQcfrsRnUy1GMiqF8sVFx7TcESgAQP2PFSQPaMyiKPeBvZ7uZ5PCVwekFiV3u63jj",
  "key45": "39YXDcxvUqvVvchd63fhBcfNh55Wz5byV1MHHq8LKDBU7A5CqWxPFH1cT5pCbCjinujnq5ATQupqRaF68HPqVKpE",
  "key46": "2RsmCHhvLmTrvWEKhZtxnqYEK5j4kbR5E7PoLhdcAkFNDMSGFtE8iYMqmKmaVSu3UBMF1VBrKtAJ8yjdQDUnEzzo",
  "key47": "3hyniEn8izCL2cVQt5pNqnx8rriqacaDVy7Tc3UdGgX4q98LBYPC3yha2xWhpQpVEs2JNARgvaW8dzbypU3hDca9",
  "key48": "2gbZBCGcPgVixFebc27kLqYqpfuDCC1JPENVxzjdAFczBiY9qYCtLxFzaAkgCu1ekNzbZFLXjK2MSoiSBfhm5RdN",
  "key49": "2FThox61n94GpZyQKXk9VHRt4EmKQpj5Psn4Y5vHHLn19jALS1hVh2Amok4C3hTQ4Fi48WYmQatEKpLEhtNsp5Jd"
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
