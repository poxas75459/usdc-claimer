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
    "2YRf7rqFG7aM53RfYC7XupqtzbLoqh5DNeBG6ZiFZCCZBhDVp2ha1rZznAQMSuBqBfXsFJpKx7vCiK2QQpiEFYoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t5mVFcrAmvXqboxg9TLbaJQMDjFbrYAHcciGGJ9tiwTp5RcCpVZ3stp8AfN5YbuJ15jvq9T2cEpEEgJoYfVHfN1",
  "key1": "5uYZenMpupbAcV3ozjHmxUk5cPte8n6dD4ppv4MvShckJEMP2dtHJhzwquYy7PdPKugAtFqGPritwmpkaTHEA8Ty",
  "key2": "VVjhhzvW9jvwEN93h651vZ4XTQtLrGDcNkgm7TwSSyh2nybFQMrY5uEQGoRENHM9CAYdETjGABcpNCr1WVsh1S5",
  "key3": "57mwVQHfPxgeWayoXE84tN4xmk4EVJbW1UzuY7N1ckFhsHUCSE5o9LmwKaeAJfMEZG41fAmS4x7YR8Le5eAh6b2D",
  "key4": "pNNxkBPwBTqN4adcyMvA7Y9HqdpfETmccLs9kf5TGvLMTTCyNYqkWrLWAKXTiCM3p4ScMqr72Wz2xBGZhMBn7eB",
  "key5": "VH4nUpxja8zUiU21QBRruyy95Ya6FdhWSLmj6JBfffY22MHn6GEo183RiiCdLHSu2fL2oeTYQrZeXSPpadH9EUk",
  "key6": "2FdkybBy1BvQmZcZCeV4jfBeWMfDhPxtwrdqQGhCsj64EQSjCnrMejDyH2wYR9mcCk35J5Lu1Q45H8ktcDctcu1v",
  "key7": "5UvgroE719TkGhnrv9svB3PxfpGELtrD2hKARDt2wpFBH2mdoSYjwKbeEt89vqzYi7zA5SEXqCJfTc7ui9daTLRu",
  "key8": "3h33eR8geNWFGXgkj5xN8BoSk28QMnCaxV8HwGULLjBP1HE9XULntnK2hPkwMG9gVPxyqKLX1yzFjoH41Rr595ka",
  "key9": "665wMQNieognZHiDVqQZeY2uu7MtVn8TG2swvQXRgGZkqppmNcNn42Xxfn1oLBrADRCu2ZWgNZdjXSnF7S2rDnbd",
  "key10": "4dBtfCmHt4nhFpchZurhbtiQL5tJv3zrsgJ5HRa8fVGu8vDz6Jn8vSNEkjvJ7gJSb5FLt9AujTeiDzWJALfaN2mA",
  "key11": "aMmAFrbaaLXX4BeAyCmag3HzPqfqAh16vuanucgUXMYcwXLwmNPdVMLRDgBXSTiKrqg2daUmdkpwVu8YG5nXdLA",
  "key12": "4LGBC9UaobU7en467wXrTooLCVyxRQccdYZB1br8WR4tEC3mu92TPQEyGkLbC7kb6SzjbWTpMALnbp3gRuWRjeya",
  "key13": "36ywWvustgKSNo6jJMYkr76vrGGzVrVBmgav66pfsTWgFqbf6UhhSDhJoAj3FrdsNv6ue6E5F59xjRwTb5ABNjjp",
  "key14": "5tepdNha3cggfZnx1ctTM6froBDfijFqdjwVP6hDfDmJguYyAzwNEQmwJFxo9ykGs7e9RtZURPieN888TibJJtZ7",
  "key15": "ZoG2figvFuuHfcuMaqCpnyotc3VJKNdNDDer3SGTeiMcej5LDDsejx9WBYgsqr26k21x2aW8de2ErHXuAuS6fTb",
  "key16": "5dimxTvqZsii36mWb1YShvUK98UtMm7mttv7Rq351dGDF67RpEANN3EYGY6zUTJmFBgmAipGu5XUVRRE6A8TVqiT",
  "key17": "4i1z3woYg6aNg2gu17EpY9szyKZrrNCXMjoMxbCxvp1aLkg97VRsHdRGio6gFYsaqLX4TzJJtpooiMTmsaaTQFiT",
  "key18": "5zcpuc96SX5wCA21XE6gsHzdZ58P7YB1CcNFTqRCRdcuUCLUABLU5DLHmvagwY1zKFBWr17rBDM2NcsE4cgZX38K",
  "key19": "3CPYBt41SoqveFDxMYtz666zzbFXzUojmR2WExnJxNFPX7WAeSw49YgKZceF6owRu19hrcQctDBwDSoACvreK31x",
  "key20": "o6U4dPzKVq2kYJdVik5h2UkF2zCJbour88q6rCAeN5BrRHdDytjPsgCNBXNCct8e51K4Kc9vKbBEkxys28SLUBE",
  "key21": "MxzHNN6Hxt5TTnSSigSmsYeYJp1bW7mUo3LLFzFjrZPLLrYhiEonFTrtn3LL6TbjVtG6feLp3aVKffRVG1kKtv6",
  "key22": "66LjRrUKuftyQpAMCVR8rHWGUWz9g8JQ6PGdc92q8xLQXVuAHVKxqRyJmquGy6GFQTuNMjEZYdJNoUYAd2bkKSPj",
  "key23": "2hU1FKXXsrB3fVVfextdSpdKWMwtieajYRssPEUc3KDX2Cm6iWcXLmqPjuBxcmDPyQC4YtMdQXn716SemNRud6bN",
  "key24": "KrAdrUPfBovnPQoGmRuw5RwYG6cvGLnBycG7GFNXYSLstL7FFWcWFzEdJj7WbC7CxeP5BeC5HBaxj7pMCZLeYuK",
  "key25": "4LAxwPZCrkz5FzUVMZsq4CrrGxrQNAwqWRF2g5gzsin6TDaDqtusCUbaY2MQ2TSMFtxbS6Eh2ygSw8QRx9s34MmQ",
  "key26": "Hnau4RMtUjPkZ8gYDLAbSMCfj9HVn1bFuVBV3jaPSdZpQqNzBixjrua4xWnz6z1WjN7bEby94FA5ac2nXvb4cyJ",
  "key27": "44TYrYHZfBeLmCbHKhDasoApBhznrRWVHj4qeEnU5M93upYF2VVRdHngijav9czczU5nxMkJa2ecrUn6S3W7Qyr3",
  "key28": "4avXDFva6kshQixoYFKnHskSGwnT4VELAah1cu94QTPcCXmZ4ptmQgTuyUEkn1p4eNjenJwzKi9ikRruekTtYEjy",
  "key29": "3mfpx4mJCgf1E2uHHGTxcF8VCFJLTGXmsziY77AeCejj3TGfqxh56aCg9FxanMJVFVJSKHFvxR1Swonu28EFJKXh",
  "key30": "56wQLvNzUtNQYGU8bKpm3w5S9RFKnCPkbNfetLQJBKkH6hSwbqttaQPizJC86wG5ic3x5EJ4hieTH9YuZDe5YV8R",
  "key31": "3XeQ9kXQ73ZrcDYgBTdQRK96bcfnNvyagHi9H364Wqqi6rN8QATuQgv7mSpYQENkJp1FBjJMc391PD7jZZu8BsG8",
  "key32": "HH7ukr7tLfUkwRXnJYn21rhsQadAro2bJTVCfpM6RfQeLTNL5uehhBtNzhU6yg42kddB5U7o7k3McexBGUZovjb",
  "key33": "5nq7Rw52jGjfRYAkNn8938FxVAhHyvM45FoDGMqEeJ2GAQmFe7VqbMmtkspKKvfdwCXMe5aSHt4pTVBtWSBWYQLw",
  "key34": "3GtxSC4NHqkEp1cNP1x5S6BPqSSxMKY37CzoTuNcSFvwrX5kiZnuPMn8pe8N7FvSv2oFMBwfGjwk3LenPgPeRRqB",
  "key35": "352HDss88YnDWkHUvpoxLXuxvcXtD6gAEbPXhzVRqshkM8PboQzH5MwUVtm5kaR75atdsPP8RhQe6163PvzkjYJM",
  "key36": "5EX2aJQnjM2qeNVfcM4mpLviK9T2zWxcSE4LEdC4NyBswGowM6gcwBNbhw5Q1kauRiLH78wuTqvn3kz9CgQr2U3n",
  "key37": "3fiZAKn593tg7Tg75tajVbH1qaYevY4f6xTSQkZgST3HEZUbRrgjJnJsL7KaYQV5wpb3rTyAYJdnS1C1eCv2ksrB",
  "key38": "61z7ff7anPzBGFKaUraHc9rCPfW7XXPWsKNLb1v5gkqenrxw1BTgvhmrYcyXp2agqVz2g1dnRt9eH3432QP99ru7",
  "key39": "5DErs3DZ58QfiKXCAMXkFdyeGdX31WtvooGyjpQsntYriCtTt28Mq3PRcHPk3gEKedbRdpurCGHccHCUhVVkLFsZ",
  "key40": "5yJ4xBiwVvPim9cayxMLkSPuCQvzLGNMfB2BVWxSnUzY7vNxD9jCwZx6Vbxv6vC6FrYp3RzPRrxnHchEWD8gCZ3u",
  "key41": "4ckDJumtjtqfPzWtGtDTzddosdhBt5z6nahZMfXZWSXWEfN261ZquC2pPjgL8UNWuxZgkfyXHErBxbTDQBUpie6C"
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
