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
    "4AX9sH7b2oySyrjU5MFZqYu8MwkNvn8Z9GvJmfSF9sH9Bod7xEhMekMvXfjC1Qdj7udzHmt145hhRRvpygNn8Kjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1KNgx8VPrSNPMpmW6QxEtAjmihXn5GiUpv6BN8oDJ1CtgApJFmKNs2zKBLqTdJNG6CdLLgxRdoaA2w5tdyzPMSV",
  "key1": "5RgsNJqA5E2Ge2YdNCf68qsbQBmGgSFVgwARDUWGGGkVP3bBPHT6TLJCm9s4ELuzDgXpsrdRpLNAZPAbNaqf77ra",
  "key2": "o6Fr4GhXo7yaLnqD4kz7SxzrNUmgDGeLduBZEfAot73oMfDbsB4pnFvqu33kHbSNjUP9W4V6JzdBTN37mjTpo5f",
  "key3": "4wbK9dTV8QpbHwDxY9i2zXPZBEmyWTgHiQbk3R5sYFyhu6wg51jchCjgKVyWLEa1KU57LPtkFviF7L9ZZjA83Xu8",
  "key4": "2ZNNu1wPiqYCiimmbG2f3MdkHCErdeNWcjaPDVsMEo7vQpuoodwTq6osy4MBJiv1B9xcE7W7BT8Z4ozZuZ5Za4Li",
  "key5": "4NjpM2quDgJeK3LoenLoa3jYkQjWF7EzUVnW5FsBHSDQLdu4bSA4i3PJdsdsoxFzi1SPk9v4Ct3cw4JNuv2ebHmf",
  "key6": "4W8fCGSxWErEQBpGgFyZ2JJ4vpv1x86kHcdk5U9abkCN9qgEbxexYyFxitasyAqW6s7W6xQScc1guDooz2J4REcr",
  "key7": "4KN6TBQUCUgAgebxqKrjUCeJEYybfdfH3QjXHS3Jfsuz5JyyZpoGyHvoFiAL1jQpwEsXeLbHWpDxx2LFdcJcSfGy",
  "key8": "4BQmus79RuthfbqGHBHmu6vmwXYGUTjKDvhaiMtr5njuK9BWxmQh7XciD1i751B6ufJA8b1hE2VHEU7zbzPiUCcz",
  "key9": "47FGHkP7uY9nNh59AfvNZs7FHLasgh9968z2ZycqkU7776KRt97c2S6Fobgog3vAU32shAVutxQ3WhW75CVkjK7m",
  "key10": "tGJJbf7uCot7WS49pTXYU8ffxjFPQBn4gcZ5oB8CqK2No7eZBkQVcHYZE3NSzCHTSGhK4rTpDDz5nSeSjfhTGRP",
  "key11": "5TuJHJ19GrPr3Povd7M5rYBctbgBvRjvoGrehwDfQPMPGZQPy4DgDBrFxTAmBVvinMUK2Km9u6y9Uh9hdCREnnww",
  "key12": "U6qbAkAX3LcftzvpND45GpGA2ASoavtkdHiDnbSDg9cVD7takbY4dn29WQ1WvJtTQZsTiRoZSYe2w92pARV5KLM",
  "key13": "4aMWsb9QJDCh9Y9qaE6P3PfinevVM1Xbihma5Xhr6v1J4eCoa9sh6xhWa1RStYRtb312irQwFxYWXnQH98mAV8ZC",
  "key14": "5AWv6htVG1qnTBExBC9SzLzCBj9Ds66u3w4cXFcfDEc4y37EvQ5g5B5zfTbyZKE91aoBMyJA6i6E7Mm8Z38VPBY4",
  "key15": "y6NEbQueqoiiRPkCw1ZR19o8GkNyG394N8iUvRhAzNFEs7MXbx9NENTE8aq9hr2KJ8XfpkEBaJ83NRGfNDTnGf5",
  "key16": "JQMw1mQXNB3NQTiTxfYwucEp4br8XtcAyvpgzU3knKA7VX5rjE1v9k7zh3Xv8Z9SFZGACJQkyfgWCeyxDxdfh6G",
  "key17": "3ftvbxdRQWRsPij9nGFaciM9UPa9GZYmfZPJGCYoRN8wF4DeoHhgPBJvFZamBq8YskZFA64LzhrdmW21AUbFEHcN",
  "key18": "5oQ5isK9s9qsouMhXgnyEYFxTwMRjnuUJbDh3kjCS6HDUibU4byCiqcKQRok7JNgi4KbLahmBPLexKpsLeNJyVwp",
  "key19": "51YJ5JpsyQmYtv56pRcVCzu77N2t3V7yUfXZmtg6rpdTxu5vAeFfteS4pPUYGvfFV6cRH8jvAqw5W2aY2cY1Cy7q",
  "key20": "2xd34aK7JF1VCZV1FXfPcK1NcjpiHMSscfCMYLpTGQ3xXkDa2eD46xqZYkgoqqQkpJGN9F7QnNN5jBN1xnN4zqCD",
  "key21": "2rg5yqB47LmTw89owKoeiE7bHQhLqaXF2z6o32VZLji7bxVb3CQgooLbL5WwV7W6B8T4YMRjA9yPF8h41aJEmWnD",
  "key22": "66rivPBhyPfyd1Zgw2vCVFFpx65vj7DfWJyZYiPk6iFQPgMp4LFQqbvNgdeZSVcJJkPATTpZ6krqjvDjiBm9Lj6z",
  "key23": "3EBLZ7xuS3ahVys4Qt8M3toQKidU4zNzNaTj5iuawMaNWDFCASVcuPu9hxBTr6vpRfBFr4NzPDEVGXiy43vTTKYQ",
  "key24": "34n1oE7BaTHKPNavA8n8QaUWMBK65QG5eArCiysWc4cZWyeRZNGyNkvqvFwcRGdKD3ArJZg7MHCHGLaL8b74dJpd",
  "key25": "4e3UZr1eTr5W72ipFp7B9KYYDtuRMzbgNWxV49LAZXtmH1YHcAzwjiV8dX6sNqeQms5usTrFutng7Dd1D3GDS6Yi",
  "key26": "X5ZXngUhKN6rUJgiAMbaH5pqGrk8nkVzggBbUhWhj2YGyaHsQsVSdmvr4e79qRDbfEae37HE5CVHuj6ub6vPipt",
  "key27": "4X9VEbAxyE4Upc7sT91fhxCNzssvxNT9We2dyGfKWAHyVUoc8befyNAKtr9tRhwrrowbYXwhewqAZ8wy6NwLEmKz",
  "key28": "4HH4Kn2TpwbJU5LJFVM7YFVXep9P5Crg8MJeT9ywTQ7LSfmbrDDwWb8t1rTWmMBu3B2snayWYKV6A1Zkfsb2Ebow",
  "key29": "4BwsECsEcNV5PuR5eapwkLfACDPH3KVcYeqyDPje9rwmhGHWSuqSp7E9VQ8CPp9zF9jcCo87woiZ7hiFjKMhHe3y",
  "key30": "WoWaCw5K3R4LdDjYfb7ym4Yxadym19sTbDHXZujsqv6KbxQDYGUsryPzLCZQmxFoytMxX27jsedoHbwwQ6RiFwp",
  "key31": "d2mkv8SQYmtpYwsQLH51uU2fNTxrLSzAUjqhzaf7Afhf7PVjAFRaTTMXnsyneAV2WFV8coyC9PaQuNmA8FKUZRD",
  "key32": "oSuWMcUZnskRuE53gvUs3PgiXm3KSTnFHN9Ejvezd8qqdJcVfTyVrfbbU9mJp7J6JnogBQ4SgjjR1BYd7cnwvzq",
  "key33": "47DTAazZss4Hb8EqVLW1Hq9NKXpsdMmZXWvcY51FeZdQJuAj2mnFJHVdaaUgy83Wzi6yQmQ5jeXdJCvvXFeMC2SE",
  "key34": "2MHV2wGFGzh4NQQGRPBBLeCeJtfeNYy4D1uC8TRrjbW1d6e6GAX8kuFfF4ynEgappUSk5YWYwG37egVw7pQAEvv",
  "key35": "5rjeoWHtwKzPcGCqtqy4CffchRQKB2gJws2J9KAY5NEEcwyUMNtyoAkCgYCYfSRgbdE1NF2pKKA4FJtzTaMdpwyi"
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
