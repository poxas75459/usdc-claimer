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
    "56N7xRKUaDHw6caVM8mFUAXpji8geHy4BKZST3cZg37zrvTBecwNWrW3hHavH79rMJRxBdCnG7rAmMwbuJrSaE2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ud3rfxZoAyZ7676msrbpcuVg3eMykqP1uh3hTyL8EVzgByhT1mQ8uVBL5eu8At5RrV1srR6kNz3cK5MhEuaBCTZ",
  "key1": "5ZmJe9DFx26UHyVBwJJXADp64Tra3eLa5fvxHruf9jMJ92yJ2SZrje4LxwcaV2JGGKvwUAdm4DwqJQ8RzQmjPooM",
  "key2": "2FwWYEgkAXdmPGP2mkfFj5peutnT74MowU2sPBdpG1Qb8Roe9M69ZwFo5skQygEqQhHxfhBfq9ByqTTx43JNEv1K",
  "key3": "3MuSzbZ7iMxsPdvTFsaWp9qu6fmchWi77Z3T1Z1FkJoDTUEMXmoS7aMWtHn4XsDnL4XXJ2eom8RDDR8NDiFhiGLN",
  "key4": "48rG5stGrbJQ2Z1yaEPa8zbxBsFh9nrM3XEZaHtLMto5ZFk7aKTw8MMZTStxhAQJoR3AAkoUg4e6v2b7w825HrE8",
  "key5": "4oJqFY9xe97q4QNXrBJjbShiWutV2DcDX4UAgFK9QZ2HaHGAgP8rs7DsAcx5hCmdJvyb2tsm6uDjfu6LcTWCkApo",
  "key6": "54Dza4pz6A4KD6yDQX5pEFdukg4LdftUEoDiHhwtPdipQ9bUwmRK6JEjNRBeAg224hywP4img8LmnVfKAYWV2g8k",
  "key7": "3zqTop73astymsvPff36ycqyignEQMU39Jqhi8f9omJARSDk23NQPVDUTP2eEX3LKZHcGAoZU9GRpwxD1btnfkSV",
  "key8": "4B8sRfGk7EAER8rFJG9rUNjCMuxkwuCRHbWKFb5wALfbMQSUbZ9z7QmYXjhPaS8pBLgnj8MJewcS8YFjzj3PtMJ",
  "key9": "212qPh1o1n1VtGt74Ea5TVWGGz2hgiiLkrsnYrV1XaRgvgueZo2V6EciLcMVLjiG98bHDab2U8rCMSakuuhtHC39",
  "key10": "3dQQAYzPorTmAhscM7HMQXt3JgQXoDDAixn7YvbAWveGJ2mZQHfKx1jM3gZdejGpUjZFvej4LqTrdbY9N4zGBgPP",
  "key11": "5BkiMzdDomqz4DJLF4KcTcK5bzwZQ11FzVKqmfEpYPob4mStX3dNuQQEwSK4ebHjqEoEhu1xmtQFsVJ8CGSai4J3",
  "key12": "4qcRDSKvvK6Qtz3vPbnm3o6yu4yBGBREXgC4a8G5HEDQVCtMzWbjtBtXNoTUvBf4Qq9afmMaUj6pADkfUWCDDTsA",
  "key13": "58ynEAw6xR6jgJmRgHYJpVKr15j577NsNo6AEKuy7WEk5VScgVfcxPoC9Sdd2V8yd2bWfPe5YCYp8vQdxjYx11YY",
  "key14": "5CK9s8xjF15YC8BsRNQEKxNQVbboeKzWXNo48r5HPbpcru4LU4KJgwbFAQuNEiZ9JozB9eVpPPpvfbZpb6igJibE",
  "key15": "35f56WDeXNj19REFfpfk8fQnE9L4Sq1aoxdUE5JiZJg7Z6SJS7EXvC8mm1PW7sWWogts2kDABuVgSxkfvHqqbc1f",
  "key16": "2yTdBAgzEV9zPbKhT5vTRv1eryUACKTbAmtGeXpha8FdpqsEBoHhjQDcvbFpixNFXtWENy1TCLHQ2eR67QbD7P95",
  "key17": "eqNtdz15JQKke1WNZpHVgJfxcktEix9th7vEZxVHowGxVqgcxqu1oxeFPLY32iQ8Mx3LZVZ4XrmE72kX8B1J27S",
  "key18": "3o8CdnBH26r2xpcHgCXZXxn551Hwpx3CWxDAQojTK3KwNNCoC7LXhbQWU1r2BnimkiXGB68SBbxJm34HpqUy4THy",
  "key19": "HukQFmSjPJgAibaxvFu28vWJVunsQ5D6Pq6FQWbMTaYedAEFyB8kn7ZmoDFBfD9NjbjE6p5tTfFxCCePrN7GBC9",
  "key20": "5qEM1vpBb3tmB2u3jZYorx5ScR4uan71fuDQzCy8ejtN5CPiSTBqr56gWAeYtKsSawX1MTJVXBG1fTntd8gt3XGi",
  "key21": "XJ1vyaCYdaK1vtbDYhWRwWDenX8T6F5sUvpwxY5VzVhcJigBr5a9jdnsMXMNAKuY318iaj76AdArcBjduHRpYT9",
  "key22": "5kaCqMH4x3wnw16qDbRxFoRi4Prhc8uTXmYowkXKYBTHsTVY2cnutqKC8RYKuV8kabxkp6hpWWcHm1o57uPN96YJ",
  "key23": "5XEqYb4v6JEAefYqLS9F774mB1QRNPeKntDpxH92z5vigR8pSmiZfMqfcHefpC2vPbLn2cxjxqsahZEkRrUDfyj9",
  "key24": "49bh9hxcobgh7h9a33TiettsGjCbNdeMwrtj8mbcrWP5TcRy5qzPYVFtrtGWiDYVKwnjSjeLGcUUWEwuQWAbDjyR",
  "key25": "VuLUbrwAiTiVdUsJ1dcqzHW5kAfohcJSqSPPUyyKGZ4o77rgEJoenKdBigfQ8SczM4CK31EM58LY448BUDdxc3c",
  "key26": "NjD4yRgkcBoyKse27c7B8wzXweSUy3P3fDEnd3AhXnjfcbxkrA25vbwQFGn91ykHJfPguEh6SnXAybBeEKBVdDa",
  "key27": "548SuVnXJJ459CAiaXEFz4YgXn6A3Kx4khQWfz4NZ3cFCfhJTamkYdb7eR7rL77zLz4L7ASSM6AvJrjwFwVBq5PL",
  "key28": "65dPEabJ4QK2tkJMMg7cup3jqKSXuqVNutAapCBzUDFTfJvbsD7M5gzNKZvHR5pAzeeC5HbJCRTdq26NE4mHWQa9",
  "key29": "536XPANhGbkVVqn7WuxoCmGFZrWGqscxhkCHE6BF7YiuMfAncaG9vS9Mcah1z1mY5KWGpSGhDbFrkoH7fMjY7Vdk"
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
