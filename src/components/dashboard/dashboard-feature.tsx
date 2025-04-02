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
    "2GBLew3jDFD8NWfcCCnN1Nz9S3c5ajAFf7X4e65UsrLKaKZ34QdXsigD92RqVQ9AqzWSvhND9jHZRgHkZQrWiPLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjeVczDEanxX5RYB8ELsyGh5wbTgRy5sd6vUkjEe6SB4e7bs4coqFJQHE1UWUHbYcVGnCPXsJkPcDEf3KLrToNs",
  "key1": "U6isfFrzFAgiD65VS9FrszGsfB2Gw85FxLxGJ8RBywL7V2jjGqvYMmyUQoxCVSLrQfbcXC7zWNR1SRr5knfsHQZ",
  "key2": "3ESjxbzXyKfhWZePhcowmDauMd5uYogumxkEs6jXPEfctvw7RYe5mAm4KqatqwViYk5ocdt91pajy3SwgBNUyRNP",
  "key3": "5QVopoYyHGZJaKPrwjYchjytGdkQNdrWc2pHZBcpyR7RDgjvCaD9xHSeuTyCpu69WAQ9VpUZ8wRcj2cEEsBLAQVF",
  "key4": "4ecPrqt5wfAusuRJNuiQS8JxffxAuKSa1KbsrVY1MWtqoe8RQCcDGUSv8S7dPoXpsTkjZnGfx4srfJ6vnaTs2DKJ",
  "key5": "5S2wEmnDvKpEL2rYQRd7Pa6QpgNQG4pgbUkL65u6Mxf3NRMcwN4VCx4kUdRamCGQb9ivnG77oAZ4hhhnr1FSnUsc",
  "key6": "2VdnpNQokQMfZ2kQr9Qjz1EdhGWv7cMxUVJgLn4DeayTbah4Q3LVVTE1frUVdYebqSwKh3EMeQjuuyKjh7tznxQ3",
  "key7": "2VbyZhDBSe6ZzyCsx4DRUFMmHKxTz7WH9wmAipAgLEYnQTzX6XJskuw9yk9ofvPgQSrsfa2PGad9VUkiCcHJ63HM",
  "key8": "5dww2N1h49DH3WDaoY7kvWnhLMNjmBycjjGDwHorRcE6P318w5PoFdY8WRzFDcq8zHLC53wGSE8xfLmSKGe6vbUd",
  "key9": "3b2ZvM4BGvERbSKGQqEWiaUvxNrnghVfyBN78AeefiMPodbCwzFaznRgwZoUNZGAcGUKe7q8TcRZpc8DPnH1BgVV",
  "key10": "7ALcU4a57RYst5WboyJnQZFhvqwjSEQZpBmtzmSLRWUdkxifvCP4K8bwigMhzGxSSj5DYLQ8kvEuuPK6Wss4b2g",
  "key11": "9p5YT5dSCZY27WfLSJsWJuKKkvECxLSWMpfsWLFd1RzqZsGWv5Fk9NoVgeQjW27hY6FBbo6S7yEkjZtYp4Tk3yK",
  "key12": "grhRfLwSjWsj7RuNdnCvzWaXnLqB634yXpLpE2jjYSLoFEEEbSS23G4bCYogPZhGC1PyzMSbJePHxCUmXLGDTEf",
  "key13": "5HG83tVVMVnzqbRWN65cXqGpL1gqKwKd6mvFAGrCVZMcERfA5sokY27d61CVfXRaPPr2JHdHPumgmgPR6qkZg57",
  "key14": "f54JaNjmKxHiNoBiY3dYi6ni5NHzmLZjKs2yjLRixeTRqQEhod83MPWcSd8kv1qDHH3kjb1xqBAd7pf3eUgVeQY",
  "key15": "4pskyavuTp245vajJrVEhBGbQw6JoXCoZrKNNyhWRdPvxJSJY3XuLfe264Eqt5r2sCahkwJxdrJFHXqXkzKgwK8f",
  "key16": "2LdF4zLcMwZDie4SKz7tRLUMGCa9bCFpfqvCRFtQmnXjPQgwrUKj8m5Er7A9VqkyyeHmjMjT4qMDq9Cibzjo5Tuu",
  "key17": "2JakhgLy1hbjkzwCZnREosrK9V1VDBzzeswba8c3XvbrwQiZtCb5jzMNjP8d7bdHmHsYEeByRoACS3dfNej6hTiU",
  "key18": "2uPqM6RvvaPm5uFwbu66YzejKndpmKcS8xCw5NFfhwRqJDCnwyneMbTU6GGmBFtmdEDhDdfBm3ATv1xWWT7aLVkR",
  "key19": "4defDqQvjQwMAq4LZ2LeYH4p7H6vvJUCEHChFnbdVdxfY1ZsNYFAw77m7huaDqc2ZvWhkQnEQvxgvWJ4mmcjBMDj",
  "key20": "5e9vHgimVEFwQwXLPtbfqKCpSzrZjRPmWQ9KNznFr8kLbF9zrUVfcyWszMRuY4iMpF74T7K6ifxJCTDxUXQ7bX3z",
  "key21": "59SpUXUT8z5cUvrxxshu8AdqZrFFsHJct9eY5WrbRyfE6TiQbsgqwSyMcsznfh6Ka2q6yJ9v9McoKAkvFkPm7bPm",
  "key22": "54AqvfkCdgdE6p7BTHxvThDmzFtNqVfjWJ89t3GdsAfjE1QUwVWEB22TLdTKLrCUPkqvGfM8PtVkzFwcMjtxi67t",
  "key23": "61aLp9aNoTV3GiBhEdrQ98M3wdjcjBt2LU1UzJ8w8Jqb9NgHYjLszgJYrsMWtNVPhUmQr9sD2wydpzcFKYtsfSXN",
  "key24": "yugT8ZJgBLBpQ9u3t7wahevSQV4MZYCMwtwMom58idrMb92YuqXZg3VrgMfMNn5dcXxnkPn4N4Gtx3hUTXUMQo1",
  "key25": "5FAKktSUPVsznUtqPscRyCTgvndExENVvwEhHN8ppjfpQeozkiUQzNCojLJJySSTwpu7iWDSpUjLbX3myNznWJnY",
  "key26": "wwrimth9BYU8rwiDcwynUQjSsGnRezLfhXufas1ggdCjCWQCmw8eHMkYhEPJx7ptpEHdt9fHhPQP5Yhq4wrGQZA",
  "key27": "2nkjeqSjcVvExrLws4eAxafoN3uuqoNAycZJ8uNcto9w7HVjy2i5vJBrnyKJY4HEsWNxh2R788muLZ9VoKnxpVsb",
  "key28": "6EP9m5dnt6ffjnQNRvMePdFrAp39UPaysPKdQaXsh2SCn7vLC8BShcyKptQfC5nb54h2yw5EtwBj4H1HCxSSFSi",
  "key29": "bLkxMXMGijFjEewJKtCXKsMeGftpA4xxoTFoUUn3CaLTumSiTsuA99AyUDqz71vwRB6PpqT6MwhedTJ3YBvBwRy",
  "key30": "2piEQP9QHuh2zPuHi4ocLs8SzqYVMDyhxWbGmzvLzz3asZCacR61oGYQtmwhaD8avTMawxAtnkvWRkiqZK89CBzP",
  "key31": "2W92aSJtbrpFzJ9qEo4qjTzHGncc4g1TpaXK6oEqKUjz4PNenhda65LstSk53LZLWx8PsfnBXdCzUvGNApffkRti",
  "key32": "LHMbLfayiBoJMn8q2oYojZwhieWGLQubUmVth5y69hxuMxENPVcZoL69dVpbh1MMxsjFGwrbrHtZJ6JNrQDKx8N",
  "key33": "4RqH9Bt5jEXR7ZddZ7adXhtgDJTgCZGisuANzqG78FzqGnpLqjvALtXmb2a1ASAQbz4FZA1uaE91fSaLHDpnWyMU",
  "key34": "2PBW1BioUkPxE7W1YGnq9TQQuHNKcqxPEXdD8krdkefzaaVzAX9CaNs5PKCnvzYoooce2fC5yYvfkwFHUVg9yBc4",
  "key35": "7cUNG6vgU1Te6X8DNKcTYa38CXo2WugKDQc6Pmj54nMELMyi5LSNcDGbVmN5FDfHw79QXm3nGsqzkwW4vpisrhf",
  "key36": "3oNqMsDKRca92XAYQfmdNzGWrRXG2jNG3caMGc1up9iXQ6gtpMcBCVchAiWnZM7NBt2jG2dqQHL81hcBqb2ee2zf"
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
