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
    "4YmuiHtqMd15PbuVXtxmXGHqTZrTLEcYGq42pPBsVnfopp4hg9bn38oEh3rDzi5Xqs2SQRaTR7HCoyZCBidyQL7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R3y6BZcbeyZwfq34MAc6afSK2xodrAxaKPzdYkgo8wWB2z5ywBGqn4zf2paCTvgkQFz3cfdwL3mhzHQk88wVWC8",
  "key1": "f7PCmdqyrSsX1RjM82xr9wZevAQVTW8k57edWgPd55v6nENeByPoGAQKtZkPo4qEm9m7bmHUkt1ZFcbNPWon1Wa",
  "key2": "4mW72Bc3MCBkr7kyLPDENAGZLZBFpzGJay3yiPcLPdbGHinMLq1NNXaGvQJuVSmN6UnBLZ1WLfeEXPHabUXiwA7w",
  "key3": "44u12UVcWTNLom73oXJcxxsqiyRCUTq7s2ZXi5oHgXX87a4vibYUTZibes1D94mbBrohrXfyaxBUNMmUZRU5YJ2w",
  "key4": "5Bu3ZzqYXAbDRWsboTMesJ1PAzPRrZkNKTvT6DEnAQjgoCZL1w1mZPxqDxp6DUX4MQSRAeQtmP2szbjM4jAEtJGq",
  "key5": "NaWddyqkYgKLtAqbEzkkqko8NNinjyWx5hcgrLEKvBgZsfKmUKMfaMKe7SV3yhToMmeZjVz3X8PpLbYLxpmXMhZ",
  "key6": "5bdp5GagQDBt7e2HjD9KnHGv1m22XaUCZzMaj3G6j4SrhTtTDJDFxjno99SVZZYWJ1BkBa82TMmdqt4TCaLc2stg",
  "key7": "2bbPDpp4qaYTqnB5tqoGWzM1wrpmFq5wYSHqa47W48XuDxzBh8fct1R1mU91A7XUKzXQxVHFSubHFssA93EMbtSD",
  "key8": "2nP6u69huSAGGpzByKnFeQQE4kD2hehxB7V52169c28MSh6Dx8dpZTZ7a4Xwg8hQmHYg4V7RfgEZQehCa3RQDvzw",
  "key9": "5x34RLugvPnFBJoRF47PsQHUg58qa5aJCy6vAVqzURgWPqUfYdBfP8NvihGUwDxw8xjWUFEydmXJ6XcwP5WMV4zh",
  "key10": "3HVQPDNUHBFWzSiVtMo7GCinzBFKm1eijTJksEbK283wQeNq4exFkFc6YXSUrwDufXroLf4QCDmMeoXKJ9ZWohFC",
  "key11": "25FF8neC79mJkUdj7EuEKtKMrTjEg2Pj9BUun19BVdzvaWjji3ohRhiBn1NkwTDq8LoFnoHDaha7dNWVqU3i6bnU",
  "key12": "5YkNLgUcakDzbfFQocUvv9NUFP462w9BswaCdsxa4EfJZ3GWxfeq2YJcXad8Ad7H23nCzQMNekypuE6ZkLnMcym4",
  "key13": "3PCv9krnNK5JGSN2pSorpeVEtfkrkgfS5LRHGb6d9JEj8L1Qhg7fxGZ6QTnNZCzXouHXDEZ2Uu7kZd2MWia13eK1",
  "key14": "2WDiwyUbBAbcfLHBj3DJeo2G9MoYfir8Msd25nXkzG5csDxeHyBXZXJUmNDyxpX4KgL33kwpb24iy35J7Raz2CX6",
  "key15": "26vHZaUfYeXbwTwxyHL2Z8iDiANwkvKLpA4bEsPby24dgTpsAcigo5rj4JBfiL3ze13P1VDsPZhoUZVmvDqqvSUZ",
  "key16": "4durz5Nos7CtNpszE5kEXNt5WTJ9C7vrhVL8ShHy9ZesYnN7hfDZdXmRNmzCWknQtWW9qwRUwGfRsyZoLjz9xiAb",
  "key17": "4iqm4zeuuRakNaKae2Wb6D2T319pZXTAsf7qDDowHCLN1KpFVwM51NfGr6DVpkwXrSNU4JmaVmm9AFedqo1AUkpA",
  "key18": "2eFcEtDvFxKdRVcBfxMEZ4bhUec3HkTxHcfLmGrQK4LjhgepdjCCPGmNMP8vDPSaBmkTvqBmu6DPWG7mgY5xXmsk",
  "key19": "2Bc5VZp8Vr9dFZXFxXYipeL6vDDEKztc1Sw54n2Uff6gxLyk9zeudzUjQWPANs135786MFyFEMC7inXR8MBeg1gS",
  "key20": "3oUhnSZ8shqHdnQq8Mu6xb9urtEqAdTJdZPmtLfKUqNwtzDhYJaYD7qkPNbfqf3TzSyfseFtty7brwXK9AewdBb7",
  "key21": "4Q1yGzkhNjPe1ECf8snzrvjw6AxSMvDnisVQn3fFoC2toNzRYZsH2LsYCg6PszZiXpBowcHBTYUc9aA9bvTZv4SJ",
  "key22": "3UHqWeJqqGBr4r3G4p1w3FV3YWbbkZPiih9k7UCGZZasP5nyWuVaHrnU9v89b5kHxv769cPrm8fN8yHUWbP6TwHQ",
  "key23": "53aBp1E8nKaWVaLUjBmY8wzBEeZi1nTYZfXsCpZv5F4XFTMZ9MGWgkpkAqn95SQsMtdDFqnNDnsyrr8dEAV2WiCM",
  "key24": "4NpT2NczB3LM1ezVzJGoue2GLWLYzjadk65CToDZbgMTNt4sMpETjFKjLZFvDMPxBYKmhBAcbsk7C2gC2nrvf3TS",
  "key25": "3EQRjMwJVa7EZbb13CiA6MRcSiXH97Ei7E2LW3maHkAHsPtFH1PDzegHqHfynp2Ac41SRvLf4gEf965jTtrbu49T",
  "key26": "baT9SF9N5oc8n2XGxJKjaxJWJfYGEx96w7o9yAf5gEsQhsXH9VsN6v6NHjTGGF1wm7z3Zu5of6LV1Soe3tC5mTd",
  "key27": "FtMGE67NAva49vCDoG4hhVzCinMopdqBxnNnEjvocMjDTv46BbneYzPBT59ucSDpL6qdESbNUw3ekmKGmqRJRC6"
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
