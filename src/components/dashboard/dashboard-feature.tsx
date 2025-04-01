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
    "zVUr7z6nzMQjR2r3mrotg4MEkZv8AWQwvRa6yQXVHrFq6RPdcN6uvwxjHbZKHGzYqGy2hVuwrLRjcBAUqUfqNek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GK131hxTghgieTC2bgbMU3ZysrJ7zFczKtrHQsezq4zvaRwL7ozstpjnmjTr94TemMAyACMFYzq8CSo2pojGYxB",
  "key1": "4QTUUrPrdsi9LnZdWv1BhDTGrHNKQdTiYk1rs6KwKXYNiGNWWjPkUGzarTwqK3vVNDfVbqB6GsLGznm6BHLiaTTL",
  "key2": "3nJb1CYwVt7ZconzFLUZhC9nrKYicAtbX6Np3qNGVUMS4NTRdsoR6GF3JdMNSzzpjroRwioKyXqjgZXqHWhyYymY",
  "key3": "5rDkAfusnz962oX3NQxTLQACnJsKAHNBTsLbjAbg6wpxNxdpK9B4u4smMPbRsKt5DpwHvmTEmGEPE4JBtBgQZ2j6",
  "key4": "4QMkmp2jRaXYc9ybqLVxUVBBpmqkhqmWMsURWguLvSJoRhsTvU17Uce4ws71Qp2x74dTZLYKcaM2g8qN8DrQ8nVH",
  "key5": "eoRFcwuT9MrZNFvrVwoPuh3ydVmmUdEfuVS79Y6S2t9RUjqQX7jbxK4tQ6txSYJ4McLrDcxyu9fckpryUB4ebq7",
  "key6": "Cx8rZFehdHc3YrDXBwMWVngwu92SUZ4J8Yg1tK2HcZASagL3cDZrSo3aHg2gmvsJgbWvTXbyRD8vMEkFRm2uKkF",
  "key7": "3WyKxmh9QzFPbXH6idaFHrsvSFXLcPTAiFefi9p6KJaLJ848xpgKUi5JKXrHUM2djMLQaGnAmzcmYHJWY8zcpcCr",
  "key8": "3nKadgQXGDZQ46ciJsHDy1FZhCGAZTq6v7dVaS4CULbD1mSY7kN9RATKotpcZ1ZiG3HCVrUuGR4hYeXa9H4By1NY",
  "key9": "ZBWhXQq5V22cFwN7Un1hnCJ29Rtx5D9qMTTLCF3nUmB58228as2WY3UgJtudJsFezTKeXGAeSkXWP7s7CLw37ds",
  "key10": "reZzPVTx8zdEzQ7aTY1bBZfZmnskSEEN4PEqgfPmfo8xSCT4YHSDrZ6NDXmDHKchA4rq24m8zYpaK4VvSiybQ8B",
  "key11": "4UCFHqeR9o4Br3T4S4Aj15yZd1FTwMeFePM1TaYKLto56L4gTGFpT5jWFPov95A8zpzU5qcsYYebq9cJUy1F7zK5",
  "key12": "5HjoSKZgQNkksmtBtkZUXGhDCP24mMnqE17vkHYYFpQ3uLFBTsfSutu5mFdk9DrbogKknFdwj2vomrVeBAfAmv9A",
  "key13": "4LdY8wtdyiJ7H8BrGWvhcBh836ajoohLF2dYcku8jC7MtQ7xFZwNo93egxoY7h9LSNvPXvtv5r72SVbAtL3Y3VKG",
  "key14": "4wYG617vPDzyyhTE1VefqqiEbBWh8ojqBynFqMFs7J4sAbzn48VfFyXpBbfSbDati98mgT3mW7WD5S2dWyJjo3dt",
  "key15": "5JCJvpkSfh6ohp1HjQ9JiW6ExZxLSXGJSYcYcisGyo7uUzH5TjDZJNGnnHQBH66LS9i94nsZpGk6sd1bzvxAFH9v",
  "key16": "fnex4FPv2CMncP5S4sDsyKQqrQiSukyuUQ3oL4C5TNYUNbU76V7SStgrAn59wBw81LEE8kUk4BioiF76B1JfQiW",
  "key17": "2UppwTuQ93GSuNvMLoQzQ13ux3TSSAxasEYBwNBNktBzQbR11uu4tN8sm3DREkoqsUH3MZF8RXWjahpMX9Cm2P4n",
  "key18": "4QxRtrpmVwwrJdRBget2MgDyX3Wbh5XLU4ebSo8vZGKAePkijDrdbRKMFkdk7vpTC52PWanZtvuxxv9uQiNXESbV",
  "key19": "3ATtz49TQPoAuWAeJ2MxeZMppGjeR13MewP7VQEzew5XwGpSXLsXVKeVpFaU7Z5FtHB4j4ZNJQ5xsbEJYKiSe5WZ",
  "key20": "pQyKg1DSmG1thPsGzYnoHpNtutvjajFPFmAqiqzsyEgQKmBtn8M9WEaidjyK7XsTFBgJP55kP2SspKVW2Ksq2GT",
  "key21": "2spYQye4s7bHkFhMX2UxGcbSfH8C7KhomZkunMnKzz356QQFAjpqdm4NpYctk23LdrdeTqCzBpSfsyGQHMKcnyVp",
  "key22": "42GYy9ayPYQrv5qJ6AvA4jHCuU68h8rdVxuXgVF5ZqF7st8WhfBwGdWGPWZeMMiaNqqUi4F3WEyk532VJprBfc7X",
  "key23": "Vi3eUDQYZwqVdrf3Lmyr7uv9PZyve6vKi7Q5P5v1PoXdKbgkDZfTFbqyhRUh2qnYi13on36pLsQn1jqNm5cRCzq",
  "key24": "3hyvvMeEtfsYG3CxaedScSDa3GdXmnpyHT2uBhpawZwcaUtZViNegXBXmCmNS9upF8hTcqEcPVwJCdoUKvRMT7T8",
  "key25": "3pm4nUvHVjTUH2s9aJ3eFZbKeDTVyFiZJC3QeQh2FtTcGYQdF5rmDL7XPYtbRcTAM2y6BBU91VJfrdafxjtFzS4q",
  "key26": "4mcRk6amVkEUw5Guhp6mA2ppTuP8pAPv2a5z5Svy8zz2KdxhsAvBjkezvj2TrYABfD7ixh3p73VFk93WhM4u2CyM",
  "key27": "4h26segraAmr2q6fWkwkXbLERzfmtASP1hSurmJGzK1MLCNjrd2S8CX2BCd9ZZDxTd7mZWzN8MUmCWMDbviHT4tE",
  "key28": "2GGjmZUhZ9Vr9aLqeVUXWhofXd3hWiPnS8zaRh24QYJwT6WUsfNWGWsHN2nqsFba8pCb1zvmdLR6bQSBzN8TUMc3",
  "key29": "3v4oCcsx8ZkeJ7hAYUSgZF479ewxgqQptZCfhLHXdxn3USobm8KRRUQXY1k18bDASPUUA52sSuB9oSqJHtLgkAqX",
  "key30": "2UTF5jidjdGma1meZX7gXem6DXujkNT59Z8yNwgvktT4AE3yZdE3btK7VXDD3PctN29vshjgnMS2BPR4cRaxm8K2",
  "key31": "47Zuk3K5GxpoNfiU58frTVQBsx6xBLrs2A8JVduChTDc7WzjRDHVujwJ8JzqvktwLMPJSvn8HxyrYGwJbejmri4G",
  "key32": "3JmZRZkboNizUQQy51iAKgrXGymEimiwhJC5C6Q6yPPn4eE41Kuyi9q8x1opwQ3V3eDAApDSxomXugzxpRGGfWLf",
  "key33": "wfTAsbLoxvrWJWVGfDRRUpxoXbHfDDRVDEdsgxaWpe312dyh2pg48wZ7qj9RGfW4RdkLKDtmM6Ps3Qe7qVkenVJ",
  "key34": "61maXeF2pgQrwtf2oQftx6kB6W6i6V5zmpvGHnEqYETeZntRKLQN4NL3UiJ33eVu8jRJr63Svkrnvubx6rqSFSkf"
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
