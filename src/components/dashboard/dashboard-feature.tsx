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
    "ThHcLrZp4hRjGMP8Vn6monDuXb8m6Dd1QyCEsVcKzcstEdRfXTS7GSaHsi2CWE2xxDsWBA3SkrbtZYrPYVxhhFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QNeGvUwrTU9y3w87Gm7Vpiv5MsggfejfF3LnwN9JrRiAFnCmnbscvtFp468cgn1w3wTBHsc8GiryD2vCT7HmRgt",
  "key1": "5vskWCUyrxohvuTx1zAvrrUTvQHMQgFu7qTWmjTxz4EKhyGK2LpVZbckWwWDkLirspf2QwkvZhXKtL7fUb2YwtnA",
  "key2": "21pqPCxTrmWERMKTaKpabM7K75nNem9ibQ1LSVVaWhgGUy2gmuV6rhJewPAuWvbkyKMk8tJYPjUW3p5W5zdEr9cP",
  "key3": "3pATs3YTuaLFzRgZH5mqF6EApfgXvhRvu2rW6hiC1uEzDixRxDeT7qZeDhdgHuahputGWFLW6FkSsCDtxHDnUng5",
  "key4": "5YXuB2gYQL237dbwRxqa2baLTYG8uJzHbY2cvPRBH5p9RAKe8sYn5nz8n2RwmRG4CPdVFzZRAcFTd6ANgHgBD4aZ",
  "key5": "2vDL4LZ4VxHcPWd2drRiNUjEa9LgvKJcvvgJsHKBPjNQeMV2s1ccGGUsbP1o6yZa6VoXzH3HpmfZZ1zwCeBpUD7T",
  "key6": "3gqCem9Fv2QfVsagDBfeAC4oJSpHy9SZ8tjo2swbLdztQ6oH1NqpNxZxMqP3arBXVKPbL8PjvAVZHLGX24iArHFb",
  "key7": "5g2gQdxTQHu7utKHd3ZvDj9HEiLJC8BbewEabfggEKPmauyxyJScpGFyXGmAq9B3RU5XVwCNtXmeaSFGz1Wbs6ee",
  "key8": "66mt4GisK4pA6yLwYorSsPn1zs83DKtC9GYiFbTyhdVoQWuPA1PEcRWuGfCgnZtDkhPAffLU6FhpSjHDt3xiW98z",
  "key9": "VXJypDLM9gDj5fYAyqCsB6fAQyr2XWKTwKrMyo1zfEfZVMxcprqLRiNuv6XDYZgkdwp5RDQfL9NSSy1atc6ArKa",
  "key10": "4TTwJJLW9TcSAKtTMz9CN8ntkh7mXAqcZSCL6f3FXSy9RWZLbyueGfMdBvSBZLZ8A9U5AzzhiTLQqixuSSHRwCu2",
  "key11": "RFMLtyz8V7e7NKJuzqUhJUrwaPx8qwv4N25PxvCbKtMPS7EnsZKCD9oHZEsZrZLkS9uzYpdubzBt5wexnxThMGm",
  "key12": "3qC4jzp25GMVU31dxokrmTKmYMSf4aYumjoaKsJ6M8UzmpscriUtdGuJKkF7xqG6ZedEHcidgFH7stAx6GtpdeXX",
  "key13": "2sF5tm6egpmDxtDbSqPT3UR7BB6zxg8GTBu5vCqZU7ETQHso38nNUcUNVFbov7Pz3C7ZipCBekhn8DVaWnrnVuzh",
  "key14": "4FsnpvKQrmhpZ5VDmka3YS4dJqfzHWBTycVKG5MRBtcypF3KwqpELpngMBprveYHXhZcsyTBbsL7bo8LAXKBLeNp",
  "key15": "4ydYW4qLUVQEUtyWVWCEEyUDxC8AoH128BJzmuh8Pq4aefFZbHpobNmYVCAd3G12ufuhDgCiSybSY6Gjb1F63EMW",
  "key16": "4mgQRfxU8U4kzGBTNRFq2CuczhbqKxK2biLabUrJzZnqdS6sGVW86TikoLcUJGCqisDa9odtH5A5QkXW3Hj5Z3PB",
  "key17": "FXvbSMR9Kb3MQnUcesdC3V4raRDzyCY8M7bpdC5pZvgQkEtvDY6LiHSwG3uUESBitBkkSQwURVdCZ7epkG9GmXE",
  "key18": "5gFP1BZ6a45mrayaHHm4ECQcJT3SuRaJe8rLwMwGA1MMR7fAZGoYrXa8ejSsRez6rdTYPcEiQsXzyZDzsRoJm6mF",
  "key19": "5i3zYmwYPp3ANMc9qEJnGfcHVmCsMqyciivfD9SA7ndsGD936AQxDSoK6BaLTZdVcFzRATvtpqYJoJzgEHWpCSKr",
  "key20": "3ugbgdXFnrnscrjr2uMExrGKmyXTPsNHd7LZsudQnD6dbaJWMbLsU7Ti4FfAbEfv4g42VZpLMQfepVUwLRfSiuR7",
  "key21": "xwbxgp8ysU66wSqRidV74gHXLXwgNjWnAZA1ZTfs98HL1GimUy5Ce4hubUTMghopE7McmhaXUDTLVpo5Y1qYpD9",
  "key22": "4x8C9wgeJjvJ28omPJWbymjMGQJca1YxLYvqzHJ1567DHuhMZcPaDSD9YzZEJUf2NBAeK4qnjFthS1iMKCh3viDm",
  "key23": "3Km5qVqGYyQqHGGkAMkTkpWCCjQxb6zwgeJENz4mMcJiBbZYBLdMarT3B36zpb5UTc6xVgP3uNLkGkkx3qYmEWhh",
  "key24": "4kdxDMicDiseXdUEhMBL42VDhrHhhqadZ8H55hiTYTupCirevP3h5MZ6sTMQgxpc1rbMPcvfXGQEg3sgG4PhsSsv",
  "key25": "PwkLsTjNpkKzLE7KY1ABpnUHRMFZh8e19TL46pcugxoZtMHzABgUxaRghHx7hNBGFsWF62S8CxgMyheriMfnrtJ",
  "key26": "3Z2jkJK7mXtERsjsqcFzUwWy97bWPrbnicSutH4R3LFw9EWuxdtjeycmNHVRfS11JEr2QsU1cFVJ5AP2yJQwNK6Y",
  "key27": "43dSkQNUDWVckNYpez826o2iasK7wVfchr1feRfxpxUyye6au6WLmzYbRpn73eehhikewzCtzXwVwpXhHPsPwvAw",
  "key28": "2ghC1Pyn1osxFhhGZM1WMNSDjnH44YLjYzvfSpq1ganjkrGHT6cMv8NEqoYNYrujGKaovV8GkkUyJNy8A3XfDuZW",
  "key29": "61so49bsCdLu6U5Ap2MTmi5nzm4AMm7z9SoGbdJXq2WRGerdHWFfCjRnisPm2RYhM4urHxCdZckgUCu7c71bEAZr",
  "key30": "4GYZDMtsCxVmVbck4AiYePAaTqctkDfYHxzoQ8eJ4QitMaEDYJFxtEvaxTnC5vB1QERfYrdswNVpGUBrpf4zgCEH",
  "key31": "2q3LNBTjEhMqzwWyw1WiFdmfNRu68LpUPY5ktemp3E2waPtRzhM4d4DrZag8Bx8nwnYjqH8kDSopH6PPyQATjpU6",
  "key32": "uapCn2r33vdQjYiLidwyeuk9RZwztMX2QmMcGzwQkbG2U2VwVaRAPkBi41qk6Fwo3ML1RHJwSS4hmQCsJTDxD6E",
  "key33": "3MfwWHfsFKiyqxY84HjM7nA64FdsC1TF5nYjrKoTwNu5PTfKdAkbAAjYkAdUR2Zn569LAb2ntKp9VwNeYF32r5a2",
  "key34": "t3Hv4ruXhsd6ykwnjdeXHKGSREwxFAZkZBxVJSR9fLtGSrJSFG1WBULeHzQAR3rNrhXpr2bjeEmtjGoFGUt6WvH"
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
