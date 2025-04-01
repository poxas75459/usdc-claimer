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
    "4zA3pbsrsVVRTLCQmhhV2MBMwoqPSBMJDYa6Ve8kPPnmMgiaypZP4C4iSgGeNNbnu9piwQ7EoftYqvYdPD9Y1gtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NXb6FyE2v5jGPVEMCHzwHQjHzQyREBHGRTdLgFmyNXRpe5YwfEWgZ8umG6ZZQwwrcpc1C5NkRtB3UEx5Tyu3J3",
  "key1": "5k83zC1oEkq1QqJew1VDWHc4y16g8aZbGKgLgduZgVDHLrpsqKDXqQvf56LaZYVgb4k6qi4Qa4n27kZRZtuSpxp9",
  "key2": "2ddUCkHGEvGNyFgMdu6Zy2afhQWKNi4LeV2fNb7WDYrAYhXREqq48ccdkW6VgJL9ZZNhqerW4Y45CF4qd22Evi44",
  "key3": "4dGb6tvnEMMv9Fs66d6HHeVsxRtLn5jVEeumqRYgbjNjww1rsAae7Wu7ue2tWpajzC8fw2JvUSr4WEEhBgDsA8iB",
  "key4": "4jVmvE4ZcjaFTqPA7a2JDSXUVwRFpeioL6G1KHmbWRLJ2BYApwtabWjq77nbjwPLNxntNaetGdjAR1WJyWChbPSN",
  "key5": "4BRztJ6Q7Y2wTbEYB6eaP1iczJZm4M8isEcxUkefq454gn2tzdyTwLy1HWZdmcuwjj8fexoVXnnQTAJNrknPrCrW",
  "key6": "2AdJgFFttbhjibDkBwFWj2MhtB5e17GBBtPhvLLcT61UUdppZ5zKBUZ8HHVh44TnHPws8bBLayFKo5bwuyHGddJn",
  "key7": "2ZC2at9wxnTdnfXNq2Bim139tHVhCUKzwwzfHtiSQNRVz8Ca4tHGNF1fq2WTpmwzPmjPi6nHmKe5ZhJmoQr8B6Tx",
  "key8": "Xj7BeF85ELhYzNYmVYYYcziEhJT7sMgr29uKWYh7spFTyN1sxZH2npgxrPdYAUmNR478f71eyRCg1cKEwTPSZcp",
  "key9": "4GE5UigxUfvRt9pFDxPusar2HYHGnU1W7VGGPHXZwmzifbniexXieZMEgaWEBmSyUTChgxUNSjCoVLx7UnobHbhX",
  "key10": "3xPy5DBooxoZZ4pHgBpivExBj7T3gngZBcYgNTxcjtxcFMQu9kNhU2mQEihi59eWcdvGtHuTWfgYsYQcTT8tBwg7",
  "key11": "4NSmx4y5QUX4voUXSZvegJ1BTTtVcQAc8fSCxuT8FwfCPv1c4f4SvQVWxLcGSW8zdagsZtwASrH6NhbJtdW8r4Bg",
  "key12": "2rWKus51Wp8aYm42M7sXbZN7r1CtPMGRJoErzNeD2iVii3t33gAXpnrEBan5rtDLZfYhrukCTx99pSunP6BynzyF",
  "key13": "5rRt5WEmTxrAfaWQw4SUXhGnjM4K6oRQLeZkiDJwNjaKLkpbUmE5HAjkqFssJ3ehmVfkbMXBYUSVkPFFjJyoHENp",
  "key14": "2Z3f9kBniLnmX39FKUTcpzZyTZcuETJW5JfwFWoPKhPd9u2erVW7jPXWhWttgYbUp3vALi37Ed1pvvr5rjV1hvN4",
  "key15": "3K3FJKHNgzT2nQHYCfgHVHQwaGVLNmKayZE6ridRwGBax8P7BdAXxy1W8TrWT6iZfVcxGbpEHX5EzxunLjRNKEj1",
  "key16": "4DaA58Sd6koaQudsXd13AHEEKom3iLAkD5jYwNoDaJQuqpctVssEP82d4nDE35F8JbTqJhTJkL2iZccbTuE3LH7h",
  "key17": "4CdbyDa5ihnu2LRwFZqZbg6p1D4PHCWNLwJXnHoijZWPuiPG9dBetwxe6iB1tKF56KNgM9sSfBFSDmERv5HjWk11",
  "key18": "LEC6EXYDpBcXEni5cvLCwsqzQ9NFMrPpWjtW8pSAp7HzYhEEBq1326GS5TtFzjsdkv14VxdhFaXVXpZPEzHrV6i",
  "key19": "pUPMX89UZ46bPJReF4DSp3v33zMX276Cha4mkMXc9HTVeCMVxrGFn2moLXcYTpnHGgLn4VNwSxZcBvFKfSUDK5z",
  "key20": "4fYHNcUFqQwP8nnkMtxcSGUVQGnVvMC5tD1cmQRWypCwGLKQff8HFPCiYwWgKKCQ8hQyLh5439CSA5sNiAbgBvzT",
  "key21": "4h6q2kZtznjQDetzMY9j6aaYWXktXbLLdWCuqPFifF4EGAnqizZkfUxfiE6acRNAasRcH7J6wjEnAZQZDhTG74ag",
  "key22": "3qAvTiPtZrtwvqa6c8dFJTiXnmNA6yiCKYCoF989xefoDbgkQ8YSFtbJfesdcwNuD6S4QtrEFZDj4R3uhbKKEbvg",
  "key23": "5SYsuTiwDNY9BGexSF1UWVJJTeAk3VFWBnekD4RjBsdMepPrK2xRZdo59mz79RiE8qGdRknjUD5wxGdMw8pxMZnc",
  "key24": "53nbBajrQpTzfH2CgZRARd4qo5dDn9BmWerkMpymrN8S1TpDf9e1o354Lr4Phy2q4EqsRqqtWa7NPxaHFnDY6NSb",
  "key25": "4ZCxyo17P4eneWcD8R69BcwRCeBcffEpkXBu84WbFS6Yw3EG3pdiJMGXq4eqdVuN2KgS2t5rPXqmDVGXmqrmBL6n",
  "key26": "57iwvCzgZEDrQfXRt7wx1aquZ7TU3MzoJuK62NnJFv2VJ5DkJRLKxUpntT3bc1cWipoZMNmFwk9ck7Ae252tK7LW",
  "key27": "UJhm1X2W8LBmvq8zzewK5rMRx2u1kZpHoWjdsey1XBr8pcSLxQ7Pzwjs2fCs2uwJZRCq6K3UecWNRfvpAj99LBW",
  "key28": "4KgCWjX6hZCKVknhxKBBgsExfeF5XDBRX7LzBgRR6FuLeeMC3AxhHw1BmsUyRAQ6h42hQdUhz3FRR8yXxYd6kCgP",
  "key29": "3JphMok9PwxMDvy47EEpmdxRwuspQNoVZgxBjNAXafoRM3fxbJw6LTynMf9Q57KRb88J7BE8ciyfUZUNmndipMyz",
  "key30": "21XpTuJTdYQJzq85Zv4LCruMd6Qi33tujNJjnAJZrqiAuK94iNCM8s2FJbMEZy5yEytwyVtebA3qgKCf4RXv4Xf7",
  "key31": "2RJf8uxwMeyxBp21EZE4HairXbFcTWV74sKNZYi8NrLvtxGvbAjJvs2bmvS5XBUpYdHcDqF2oU7b1phXSt9rVEbf",
  "key32": "fPR53e6pVxtCKoHuqfTriyJDu7XwqHSapC7c8szQN2V1Vnygw6RecDtKwnEvtbkNip4c2DufoDwcLC8UyFyKAFx",
  "key33": "39CwmJCVDK8Bxn1KmToXfWHU7CNZtTSfGrQGqU4MysR4s86oph2DZ3HzvjtnFcZumvBKUtaUPDUyNZ98saN4RRJs",
  "key34": "4Q9sN14U6674qiWHCzWVderPhFCsXJXw2fiK76p9amD59iSYJCU1rEzebuS5NuT4iuAvGEaqB7VF8keBpzauWQsS",
  "key35": "2yhW8sXcoKh7mDA6XQsvrMh4jRkJf7ejABANPxYd8qEdXRs7zHtXquWEqaNSm8Sttjqf8GyynyQ4CTv7Z3BotXwd",
  "key36": "D6XcHoQ5vNV12wR9iN5E6nsN2qecp8spBe8n7bydpLs6bk62JPp9GdWkMhxghq6cNNgsQteTsfAC9erbjdfYsBj",
  "key37": "5yBWCWcEHxptrvmY62u7R4CsSRB67LjZZ3qbkrb42b5c4sxt98xPzEveFuBmypHStpuzfwnjbppYnGivrZpbtJdY",
  "key38": "3RDb2jHtV5DLmYHQiPvp3iAD6FvqUcRk4XjV5JxdLQ5DV37hYT2jYDhXN2ny2E3eX6f5PpbfVa4MkpT1yhhhqZ6T",
  "key39": "5RSPGefxFgBDEtWJyE9W2Ujyb4cUHtCWpwAhqibXnfBtwM29QUCwEhMdY2PSSJrnJ1cF9pwPBCks1n5fN18DEorf",
  "key40": "JX7DwKMDxmmeDBpmWSTNvhU9Tj9VdmTnxpBxGAtC9L4HWnESF8y4QCsdR3GUA5Pg8YutTvXgf8jkbVvEq5jQ23u"
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
