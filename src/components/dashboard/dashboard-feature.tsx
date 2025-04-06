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
    "61eAYSAwTkG9oY92yQ8Q32a6dZk1ZpkD7g42HDTg2HM3uvjDq7YSy9mYKecACrGwJTQjvcxK7kAAqVnpTgFj9LRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J1UtYXaPJhX9JXBPSiv9f53yV9yfud2DBo14zyLtfjAPU9F8TfeF6b9wkPnpqLYURpxhm1HPAsdRrjyGkiRfDEb",
  "key1": "5sjpFkhXVVSXbFFstGCszeqyHW7RXRxCUNkX9dASRMgdDVAZoEqqBBLLQZBvjvA2bxEPxCiTZD77ncsZoSR2GRkF",
  "key2": "3GwdFHJ3cdfMSYX1qngH3TATFZBWoHetGt8ydqtyYydWEsvzCmRAmMzzwqvD7H4YcLP4VYAL5YuzF5U6q9xNSaiP",
  "key3": "3vYECS7fcZZyR6ChUvwa1eLTyenhQowu7MMYREbFQwzxGod3Jr71zugewmWYeGfiZ9ZVA1L9Cn8AiQ6jCA4u8oco",
  "key4": "33CDdYTHNFBtkL911LL4dddj8qLEEUCdEnqw3obE6NeuiLQqFtuRaEcvPSSHHXVDQcRP1om6V2UzaEhVApWgkMKB",
  "key5": "5SRTfGpMXifHd99oniWV4QZRmNMYN5AiBf2Wta77zqqAegjjKgMjgnSM1tgKoV6vJHApRSRgV74oTcyaMYyLzura",
  "key6": "RiufLizyCE3hQgY1pXJqPZVaRLYKVW1uZajxCW35vMRUY85uW4axrgKrQyptcGgst48atWARcW5GvSLusmiz8jH",
  "key7": "99nUJpc4sjSdKMSMvGCgx2JuPLHX96ZcuJB2gX6A71P4kALoVmWwFwn5Z9i5ptcvxLmbbiETHgxH4J7anpWzX7K",
  "key8": "533ybaMtra243iLZiMBa4TwmfDBD4PPppbo8gB1gNymc2r6LkTvUBEPUoitnJXn5Lmx9bfdnhsU1PdZ2hMi6U3oU",
  "key9": "5AdhQbAiMXw2rUnHN7aE7L8tKrywhnZmNU5i8WVS6929cCue7dwx4XHxyPcG6fgqR9GSFn1NcMFKrRUnT1gg7usJ",
  "key10": "QR95GbD56UzgLGcmao4tWjPUDbXfKkUq7x5akk4FRJaiLHUq1SeRSxRVzt5K5e1jeMPsiQZaoDU5NfFpTvxc3aj",
  "key11": "w1f9rtUKCerhL3ihZzePFtS2bY2gnciZZsWRS7PnGRaErokfkeHXz4ihUhbisGaq63nZthw6tbfFGLZKQFa523V",
  "key12": "5QbNWyB7YqeFZHrk6dPaoXxuvLG3NhcAFcGEq6oUXF6sV25gMxk2jLXaAMmPVgxJN3fRrvYwLtAG5KPJ6K2NAenT",
  "key13": "5SJ9c2X9yziFjGbKnzVDJgDeExLwzrXd1pLo4aoBdkziqq3YV4PeP2gW2YR1GQH8FnDphTfgratoujvJnsizkUCU",
  "key14": "23aCpk1EkfAiaHDGfyA9ecWJDrPxmdZMeo4HcR6zxUuMmu6oVeFe4qFjTfJgBGqXyVeLX63TQ88wvP8W6EK5fHmk",
  "key15": "cN5iirWAWAffguqaMzk32LHyZrxHMNfw6MwshNTDBYieMHgC7gb2jggF5XTd4Kv5G9JiWGSpodBaXSBExMqmT9r",
  "key16": "4a4Xn6jDNpA9Fy4zGMqHiVfmQYjBvWTMHPguGRpZChHtrEnNvQBSBFC4mCVWaqtBNtprUQWbegb2y1oeCEsUuwq",
  "key17": "3LJ9F2Vh67AQE2XT7hVw3paEXD2Tx4vMAoMdbp2adKwnAavHn2DRnw3x2Q3LbzzEYX76u3GtdRGaY54NnnVJQrYE",
  "key18": "41QhzCm3X5ZixbGnuFVTsZbzFqcbJ1FEAEQM5VLqkCtpo9yry9RokNqPNHyoBVhJR1XAHiF8ehaZy4DUaunUiECV",
  "key19": "2vzC3UP45scBPZV1S5NcGrZCCTw7XxBMsptnjw5FFHod7QfQWDW1TXQah2LTTspMbj3X131YJPk9xGrNb4MEBjJr",
  "key20": "2vFTnRdVsvrJqaiGFJQAPAxw3dv3PQqWuww8gZ1sJFXkGFd3SoSvXLFNmkEK9UK4ZLoCBXepFdAhSLvDcCGqRRYV",
  "key21": "4wjEVzKucYDuZ3vZNnDRGFrsoSoY9eHwpqA4gtGAirfvTo7DtKKu4ZHNR2yDjg9R4XyRBiBGPNXwj4uQqF1EwT8n",
  "key22": "2kgbexLwNQFimPiXRoMTag6Xg3kb3mAqdMZHsk4iQvGTGp18UZUnm2Vqjr2tEYErCqMc8iXPXSaC64vieebECA2t",
  "key23": "3JpRpAszm4LNZQ51QfJq9bUhojSAQ1D9pGQDrDscyQuhNM131gGV55ZYnJMXjrzWK6kgUgzLnUxbAtny7jFQFgLH",
  "key24": "5QkdFGdUureX3PWYbKV9GybZqHQ1x2NpbLcBbgfsvH5PaXYKrfVEN3ZUtWbZjvdDhDA8KrB8jVNEwpuqwanZGG1q",
  "key25": "5CJ15TivmiML52hGGbxSQLCJMTysb1eGu96aCZf71nbnZTzPPPiSBGqXUrxuTchcT7CjRfnaFAsczqqbCNtqTdJ6",
  "key26": "t4MMPy19wf3ixCBoMNk8EsrsVUbC3Se4aN5yYrVmBpmWk2Wtt8EhBiFMnQZLvQcJWVqxYHmyaxcPaUrQEKxw3TF",
  "key27": "2updWUT4HE6nkYQKYDxxMGEXy4B7TGHERcBUqH9Di1pHQWLXTrP4ydW6obFrsWVnafKHHQPDsTjeHfKrNeGEPgkZ",
  "key28": "2oz4buXy17AQq1hug58fnvTnaAFi9SgwvCZemFkJpHGHKK5afRoA5H5XLtJfHM1ddPPhVmFVXKBzvxonfBh7MVWG",
  "key29": "3PS7cPJpXdBFAK7X5mD4jaRPvrXhqwmA2P6PDGjbfT8JDjwkr9f2nwj8SiBKu3fSfaB8WanADk4G3bMhL111XrGC",
  "key30": "5m2eUthcHbrej6znt1CjaCXzbxUuNQbvGjN92e7yBtQC7h3WtKddyG4SehzEvhdnyrh1Cd8cSMp3RqttueXHaYm6",
  "key31": "5AXommRpT1SSAdNhujtqZKGWfkakPPDKAfyxKAZCmpq8ryHUYwLQEBv7YNwgqqBSLbCLxtoKSv4nGPZQvwpoUZxw",
  "key32": "iHm6888KpYe1mPdKN9nGvn4Q8Z9EXpFsqjNwbr25j9z6jEEjt1tz652wf8U6ruLjHcJpwnjrQVVkuKZEEAzgtJC",
  "key33": "5sXkmmHZCCpZa8EsizwP8eTmZG42h6CNearujzGwmfKXmP2gmdo7vo9N1mTPizvnRyJWSj6GX4W5Ep1oUDuUpXbh",
  "key34": "4kyXQDUwq7iy6ci5N72yuh6DcJmszjYd7Sp8QfZGmp2XwNSoRfLE7z55boiBE282W7u4AYifLHxzmU7A2MyD7dgy",
  "key35": "Sv1R7Unzd4QXsPxXqS7ncnvYs2iZ5F3Kr4sugkUJ3587y7nrhBoKSrLad1kXz6EiwS1U19WFDKiQK4XUhbrCj16",
  "key36": "axvCrtAzToHo87B3xQgh7hgeMKzSk2j1tYtynumSPQDS9wudLxjmcD5CVGrRvt95HGZgSJmyWEwmf1rqRjNNsU1",
  "key37": "5oai4pwCrToUX3sfS9gR3eTheFxcTFQ1H9wXJEEJVK8rzxv7LkUrsayJmXf2Yh6SEFbveLCCfWZSFHhQmuvAQj47"
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
