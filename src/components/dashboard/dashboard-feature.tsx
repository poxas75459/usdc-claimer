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
    "yfJZRR5QNKdy2fwj17d4fJop8EPEwnRdvs4uS1g1kSjA9a1pdcCdVcUfEn5NGu8tpBBUMEr98bxc5S1dxGQXPRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pSa9o4Doq6aiVqJn2S4BT8B63CtK4fMYTm5JHTT2YpH8tYcmhcTrVx94k46vGSDwL2j2esrwYmXNBUsZmqPmMvu",
  "key1": "2KxjJQ9pemCXKf4pN9iNJ2uPLqAdqBKXfqiSq796oJxb3chQV3czmav97qg3XQL3vZAMi8Fh8f9PNBNxR2dDKtN9",
  "key2": "3nL2QKHrc93uNaonJZwW5THSYGXKTTRphNb1icQZrpYgu1aKPz9ssa7ZVYtPkru8nLkTbpY3BiLpp1RTL5EbgLps",
  "key3": "45ewoiJEMsnHXM4jrVdFwgvdmFq5WAWCP8W1tsNbyMUZBz6nTZwa48eJBA3LsQrrxy8sMQYuTLjfd44CjsnxNNRn",
  "key4": "3sdbZSkaQE9z1bESe68VfcTMLtsAmQTfa5Rp43JbLvcvSfxPcfVZycRcd2zjUyAdEm5jxn93ZKADd774M4KVDwDN",
  "key5": "5CD7ggSbU23aJfvhv5eP8nr36P1BvzXahLfSsdr1aYxokYaV7JiqTT69CXZtpUzccU46ykLyWrgrutzC4hPCQHm7",
  "key6": "i5zeLgJtyumYMNZeabUUzzQ9f93Avobq1j26NfyvhN3k7ARB6u3krsngYVBoTqjbBPuhMQieDmcoNhPgReazQFE",
  "key7": "3evZLUSdmwmBHhT9oRB2Dj2MvViT2NtGQ42pB5NWjMfeqEcGPztAyZpzHdLmJVc1CGgF2NZ4yy5Me6KnatDw6TJL",
  "key8": "4ZLd2s1C4SaG5gN87LP2LHBPG4Fsgw6hEe4bGAis9nFiz55gEc6BL6vTyP7t7ZtWtUENhepVc5M8e3N9WXw6jSH8",
  "key9": "3zXKet7MEV4okrJVn5rqQouuBvwdAGwJG1cmk9PuEu5ip3srscrj8EBmWZZj3YpHWE9XgFGYX2M69c8AWh59nss7",
  "key10": "66MT3yeUoh4ZVR3SbxQHiohYggVwBy1qkyLrmuQsEiFnMdfccY7irgyaZRF9wySZEvyuLmset8DN4X8xXcfctErp",
  "key11": "3TTz6qZMraEErkw77RKvbxsqfykcLZtyrkpCQjoXztgp2uw5CYeYnnkfUjdVAEg9sv98hjVjJCA2sBnJrhDjPu4y",
  "key12": "3gXK3ujj2XZ8Qgy5XADmDaKWsTeSvVQT1wdb7y5tYDi2Zr9wa6zRnH9P39FG7BKEjDKSsNxcc663ixR5zjSok38E",
  "key13": "PucKxDKqCFqunvmxFg938vAcrM182NEzeck9QvmbRKRByFGsBucSenJ9CCDDwNNm9EUqiD9Nxoxdmuriezxm4ih",
  "key14": "4SLvQdAcTEgELZB83GxQSresvUo249aU8XKyzSnFTtM6hHjbTJmdKAGbhA7eY8xFFz8g7i8dMEWSNg6TuTyWoyN1",
  "key15": "Z4X2uDajDRRuKW7oCXAE3mQuSKEK49hvDrNjz49yeywNzjuWSjHai3XVqsxNqhpBpRBeqRKYerBCVnSgp9UZBzd",
  "key16": "3v7QGqtsMwCFR7JKkDz16zAvXFpKuTPXMjf2PYfjfehYeRrD2FEC9tmcN1oHrufU8teEeBpozbJmgKQi8unYLTiP",
  "key17": "3aJ3dfGVgYgBLHrxzEtt8uTFiZcRptsZzS5pfEMNXBQcj1QdgykpLqmAfyDPRZ5w5hP2VdiT8B4995p7Qja8tfy9",
  "key18": "61vNfFpj5tvtkUTW1v5Zea1eVYLng71xhQdzto7NB6eTCjyGKFku1geLpor8gVTEYokVwGrLX2qGFsYf5nAgKf9j",
  "key19": "2PRnVXeXYAxauVur6WcDCU4gs7ZWeeR1xK9bN4bm5gpeuS5NJJUyxEqHF3id6v5pKLbiADegZZ8P4N2S4Qq4mpke",
  "key20": "Dw3Fennpv7QoL6Zm5mXgA84ptfGpKf31rwbQ31NEtH194RkpPY2rtewYCJ2DvUcRgU4jGygK4DCAACwAWvfgURv",
  "key21": "xS2E6T2yQ5cy6t5qw5LTfEp8wMavaBYoj12Qumu6kezdTqj9XY75SWywAqPyEQzypRf4wyBWK882y7dbztV32wq",
  "key22": "4qqN8wR8rrsnL7LezuisUAmCfc5RuEwPR7rxWSrkhfcjNU2WU8eCwqU4kdGRPDCRRzDW5B4DKmk9XyGvFHAiyk2u",
  "key23": "LFgCPsLNt5zFvaQPCszJoGjwsX8czDAdLEwUcrf5z749oxsXedwJDdmbPQKMZZAsWJgnaFzkJ4dCJeoFeSkVy3g",
  "key24": "5zE1LDkBqskLGteRspozuM84VFxtoNJKRupUxcHJUWGwp3vysYHwm93ocVuPKYtTNbXBkNKKCU8obuy43crfy5XX",
  "key25": "YRu8JuNz1gNsJQsHDBSBni4qG42sWeUqQqvwYZn8op6zxAZNuRL29r7NzsLP2YYGgEiLpmAySKL6arp7saZYYLp",
  "key26": "22TgXgnP3wPabvAz4Ptws41hrpuuofjtwg5xMA9cuFa6ZDzVarKi2bwsGVhWXBWCjuT8XH59nfHyXrcBYEqPQXJK",
  "key27": "UHEtpExebcyNH7C82CncniY6xc2LpymWkKyvQG4okofPEqZenEjGGPfVc1nHu5SVuy98McyzKbMf67DPqWR21fW",
  "key28": "2TdwzfGJtP1Ts7L73sRHdKbBkrrdgwNtWXHSPH6QhxMLBQ5wH42GKRwLtA2K1ZRj66CM4PrE4ZeLKQciwDfjUQ6x",
  "key29": "43NBN4gwbFi6YcHkQRECBudEm6cQfuyExYbHJLjAMoTpuQqsr2oAXEHK79afkgApnoQ8zYydwQpG3o7QhY9XLvjV",
  "key30": "4C9uboRcnYNG9ET84nunkG4UmyRsQfEp9EnSpHvdGF3Am1SGtPdPbDgrSvu1hfGCvf9cMcQQiVghvEuuPDC8wRVa",
  "key31": "4VsT5QBy2tvTPrYbyfjZKD7DmJEeCpJ43YGWNYid6G7Zab8mRHLyayjeGQSgfFWRshnUkbv9HjQEErbLJSArBSwz"
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
