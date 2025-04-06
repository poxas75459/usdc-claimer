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
    "5HAnT5wzXkRERhPPFiW5S3WHTt8DtLbLeTMW2acpdBJmjbYWDi5a4TCVhf8c8v9sEaFnhUz6NWf7xevuPz6PT2LD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hPYtHHSeyD9bFfZAfFtsHZYiCQ4Zi8hPwuwToiU5spagX78zT2uWcbVAAdQJ9SrBwNQUz2FSTEWvp1qbxCJJpcF",
  "key1": "5VHjX3jZtU1D1fmsW8FSYZyJoQTcntgm1Urp2t8bnKfTf6vJ9SWXbZhGjTzJWtjCgZCaLm1o8N7dWW7gXj2yTRZw",
  "key2": "3MrEzvMvG4kMYQWezWDhhqbqXPnaRWTwTF1obcgrqw4J66fz7RbytUouroH6SUrKY4dFE14s8Exgaqbo2B3qqMww",
  "key3": "3eytNdKx2DDkM3HcsxWh1PeEESQnpS96MpvkHSF3pEoX9fmMVB7DB7VkLwVGAsMdFPXBryE8bJ8qH7zNLggtW7sH",
  "key4": "32Yop4mRo4ec8nLk9opHricugHmGm3oaf4LCaBs5StovrhHEfEXh2fE7akFhYV9S8C8PtFoWomvoN6yckRYon3dt",
  "key5": "2baVwhTJqr4r57eDEToVRtfznYZYdiKFVAD1YTP618kHt1RRRs5Y1BrGjVSY6n3UkTS61XbDijVwzWRQskoCtZXv",
  "key6": "5sLsHvqwfdJ3fSz54LjUjrwmdhXQkbnGApbXhjARqzrWuisf9a5a715yf55TvyXyeFboW5ezDocyd33uUde9r7h8",
  "key7": "4JEJuyiLJyhcqDAs8xrxnSuxkxecM6iynN7JhdLsN991BNJm9KBivRoG5cZrua4RJJnYqRaZtZp2wrEnw4rPrc1P",
  "key8": "XabHa1PdCfCFWDZpKQjm2QyHyBjns1mhNWwxkZA5oA4Md6tFtj3ZKEguiK4ShG6pa6xR8PUvSnDiar93r74WgjY",
  "key9": "5U19bxzNwwQ6BCjEX6wefoYXxLGy8LfupdALfhrhCs3MPxfeoCQzUqa98aq8p4mHtNp7yUoEk2ia2nBgq4prfgZ5",
  "key10": "4UfvF4og1KRBVEjQv9TTxrwiEpGjNoqguRCMfLnjmeobb42e3RfpyAxo34iFeCf2VjLWHM2zk3YW4VWE9ieTyZn",
  "key11": "2oXRC4ghiLA7ZmbBPAbGxUtYTxhoLoZRGCYSaH8hEsEqdyRBB6Dkp24aSfKG9LhkyLtVQajPGz15xTjnibYrFB7U",
  "key12": "4NqDh87mX2n2FyWFJoXoAvBB9oZRTkqp3MkhTRFJGuNgsk27dxNsgy8rTv1zftiNxPCDL1PnuYrRbY3SGeqhktMM",
  "key13": "pnXG9b4ePPkwiFAchoBzfPi9EDmnohL1wFSrWGn6UUf6ucaQpFM7hhcYVUDdt9NtB7rnUf9oFWDfUu89pfdyWb3",
  "key14": "4xVLvQr7Eeu7yNwTNp1EG3DtVZJ2L4bHdMfWjMTNDAB1LCj3qLrcacYJjrYnReoMAcAZe3fTWT1shkguB8w7siC1",
  "key15": "3t4gFtAXguUB4r7j7M4UXfgENJYw3NQVWLKfEnHBfTYZMKxUF8VsENndkLEdRVB1Gwff13yk29MpKy6Av2TDZhmG",
  "key16": "2HnR9XoyaYx4dquiCgV2QQDkj8NXtEL97YUzH7WCafVVv7TM7iTT5d9tC8vUUFjeC1Ey4kP1WSujxdaNcxqMMx2f",
  "key17": "AR1PFrrLEdHXDRrhbYTM9dmxHMKucmzDVwRGoj568Ude6UnXfP1KhCjNuYS1dLxQVz5Z9tve4LPripKRPuQGu89",
  "key18": "2EGTx9d1TXQcsvgPPEgimPtHa9WZbiXnksx28f7fTFd1xTkhrE5LwCq7WGXPv37c8nAhuCYcjqizGYw1jzjDWTZu",
  "key19": "57WsPD4iagMmETwnRHvCsRzzBLxdcq2bi1ALSmSm2fYoiyHaJ3jWyYLujMwSAttCpnQQrH5QYeZAZVShyjmZaXPP",
  "key20": "65WngXKTuh8uxCoQAkpHEejyNzNKbBurHf6RpmSU3QRrEKnteqkaP3YkkrVfWJ63yJasUFozT9jVLmPcDE89SK8L",
  "key21": "3qdiRXsE9Htw986rJ3r26PcXnATfZbsFck2n5zorUdT12MnarvHR3VSbTjcPdgKkfPxD1ZgbeFGhsUr87Pw5qaRD",
  "key22": "2cD8iohHKohQFwXNMhodfCE3TmveChGuoWixsmXBrqzJtwGixp6xkErSewZC1Jn9WgCGLrXTVjeXpjfzndTMSdym",
  "key23": "5PEhEfDqz7Z7w5pJxXqXUWCfEeQANVT7yPeeqTcX6NpUvyNZteC7qaLVda2tNR1ta8hxAGHcCM1Gf8K4KUdrF9Pf",
  "key24": "5N2dQQTJ4ftGJSwU8GB9Tsufaj1JLTTnwCEkHVXEBFyvkx5S3XX7sippSF3TiJkNJRaEPyHp7LxYQxTpw21ZrPMk"
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
