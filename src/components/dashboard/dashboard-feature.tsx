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
    "2V469VmryXS2MRbP1LkCm8Kj5Wgkk7imnkz23sEf74vLxW6pS8QF8C5d5see5xzfKSudtGjAPnNgAcfKCLfxjwou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wEqnbbjgud7JySFW55duANZb7zXK4FycukPYDcZbJdvWzW2Xgs9GGRFoMwBXyaMpv1tM5HED6Ydg2wnKnRTyeVA",
  "key1": "4HbBc918M5iX57RazEvzfRTnURM69SGsskuknj6s78X8Cjeaxg5VqWXaQzVZfvZWyDuvnonSDNxbdctdxBpHb7h4",
  "key2": "48XPch4U2Fr5gA8zsTjSMFELu6PhvXnHaoErU4TNFo5SgAuXZH4yz6qe4YV1KnZTcbm9jBpq5w1bhG91ort6S9aE",
  "key3": "5hCLBtawLXMx3ohoVEThLVAoG4BpZRB8Qev2te4CY5L1eEVBkHRXUEXhGGPXepJjRm84DnZDEATt3yk7x5juSEji",
  "key4": "4Ay5Zz7cH1KFifwQoNG72ANYwZqeZQPn1jJtMiv11DRe7e2aN49hANnfMAHKa71uuXXNGyqjzwUHiopK9mq4PHa",
  "key5": "2cp2Xc2LuyXtYnaF7UDH2Ew1nPoTSVkv8qKKVYwhSApGbTwcqpwnfz2BuZqdWu42W7vfFMWAkZwMfJHJ1J6P32Su",
  "key6": "3GdWGeQzyrpermCrBzjQV5gDCz6NF4zUkSYYATbtACr5JpzYX6hvtWQpdQa5i9ajAHdbs22Ci2MssGF4kVhXLYYz",
  "key7": "54qMiHcH1si15vz4BskpYG6mbc3rnCp3tveGLHJF4qR8tE6xrHR2HRLNcYjttyqiGW7T9TbP2st95rioLBcSdY9C",
  "key8": "zoRUYeDDdeBxRBVYKgrwWX64hvdbsAoEndHcY8z2oygYCvZ6TeRb5xec7rLxM33GoayP81RL7Wp7z92aRPPY3iJ",
  "key9": "3FnwGiQjAViUWAUCiWxrM7BTqoi96CjqqfaYNt9HBAuczneN2Vcw9Us2GQAGxNgCqVEFdV2jJ43TFq5bKa8YPRQo",
  "key10": "4fwgHeU4QjsiT2x9rct2jEFeRuFArg2T5aGCB2ABcUiFzkioR2Cjnf8tNouPwPusbNzyxwSsV37PA9wzgykPzjsL",
  "key11": "AHXXZYwgFUR1hBwSCJMvB3TBRqfo8xDmtQL9qY36qt8N14u5kF3WXdUUx3ZD6hG3BDYWN4K8rjGAKTTMharMjPR",
  "key12": "2sorUgxaPP5Dj9RbYJAJ6Z6yqTBHnhcKBmgQaNZdXeKLdn9bqZweyHqNNPLbMNpGDn3z6TGxu2dNNhY41HZhjy6A",
  "key13": "5GrDeZ9reDhqKKKFWALX4waUkPGCy1py58LAANnrfGwy4czXAS6ba95kYBUUAuRd4UR6eYMq6frQBarXQiCyvjQL",
  "key14": "499zdHVrBCp6HkfMytiKD1b5q869MGdJswuTeLzCNuQv97iWGenxpEDLxjZr94ASKAz5QCzveLxaF4J8ca6nbeZk",
  "key15": "38Ff7DzZoUE9GUQeQ1fXsefQZhhvuHM8wFBJmZP9QathCTXmX2eq8wdydob9CXej9nzHhLLb8VuwMFWrV4paorx2",
  "key16": "eLnhPpSo7AnkaPNZV6yMWyESodgzSnkEDwWdymW8yn59nto8Fzwrt8FdNreMj4daEEK6FegPACoiqZ1w1Mqm9P2",
  "key17": "5hQdiyMf8WpyXa6Snk8GH7kLSLs7KPQ9qeiMPCycuMXj572CeyWSr6mH2fa7SnSRuvzWKZDthpAu4ePQX5ZeAVjt",
  "key18": "2ffemrxSykEj95y8q2ZpU35e4ZZ7XR3gCRYu7zBWaFrgWz67bdCGuH9EnxQU2T5EoNecuQmQrifu6EBxtmZ2hdBW",
  "key19": "5FQsWQwm5ktNNLWtVvRxGnk6vEM8YQCDUiX5vZK8xSAoyPjA25gErVL7oZaat5c8g2aho2c7aJ9L7tNw8ueuKyQS",
  "key20": "5zWAnbcygEKBF1AuBGGRRpXyNGEQV4r5thQJ8NPqtn9FUKSupxBYTXQsimTjQoko8MMLtEbTuSJvRenkgfa4ZdAk",
  "key21": "3HGQToabUgA58cPeb4Y8qMR51kho1yyJDdowpZ9ofBUWYSQjNvDzopdCkuQxASZvfWHbJxhXiJWPZ5gS5BvnkApD",
  "key22": "561gJpzi18vMcNFu6BaBzLfvgwKofja5Zdsnm8uv95RfaaohRJYZ6gFp9dKoEkEadoXQUCAN7wu3QzRvWLkzmbeq",
  "key23": "2DNuXPnN1Q47zQMoydRYwqtEwrmAhGEEC7kqqzVfy88kQ9F8pnuxP2ewXnhJJP5thBpfcbozTsCugiRynTaDhCKX",
  "key24": "4B9dAisVVznFGtQ3b1jwsy7uiZJqTKJrZTm2Qf7F7h5jBgfBY8eijv5fH72XzN7JsvQTTkpLEBdjLV3LMD3Hxg96",
  "key25": "3w3e9zhPRsNDSyR3kJeyCB5j2XV8T1T4prAuMTiYZratxNHnE3332Qayy4n26uEbgevWL5WV1s5HL12maC9F5EbQ",
  "key26": "4Jq97h4od1kRDLjeFuJ7nEvMyMFjj3AiXgfKmoKmezUbaBiDRgEpYVvWYquwG6JJuhTU97UdQ9M9W4h1RVLBAThk",
  "key27": "GbUHkEKr4iossRgqhFEQwzf3hFX2AgpCtYPuJ3WoGyYNeqgNnNEbrDzgEHQ7LfS9HxsB66EHPXAtdKAewCzymts",
  "key28": "5K1Sgp2XFRRoubhTZopMmWPFbgiJQXLaSZS4nkdQ93q6L7EjfeRMks3hPNgcmXansdHdnJgFMmPorehB7wVTjTzE",
  "key29": "YZ86hwdfPCRSfvLHTw5foGHstPFkrKXKoWt3mo38TQZdKuBD1kK6DMxAibLLkeGRSYSH2gtRFgobkEGMHS2h3pw",
  "key30": "SKNUXA2fDWkwoCS9TGcQ3zL97QPTKLMt1LUJerjjEr9Kha2NTvGtDFFtHKtvHQHw7HKk9iYgqASS4fyvYDgJKDj",
  "key31": "Hs3KkkKW8MGe6DitK6whhpKQkE7V5yN7KhTCcumsvyR2vNtkzYgCG4nCTntftTtfAXid2kqn8pQSMme7hYCkysr",
  "key32": "37kXBDwShJw5tZJDH5kY9qceVk3bRaNaPXuoQ4jRaD5K6ckLBQuE66x4C3mMxJ5X26aAGsHhkKhBeBC5HdsaWZcP",
  "key33": "5B9Pd18SDLruEf8n9TFn1i7NU2RYVsqNqrV5QRchmTfB9HnPv5V654nmWavcWhw1v2S6pskQMKt5JkTprnw3JCqk",
  "key34": "5f44zMtNtBPTKsfTjEKCrUEe54aQqdTuDUhM4NvtLm5GMjuo7SaApdf91h3jtt13KybhY68bjYa78hjnXLSrYueU",
  "key35": "2h2TNH91kb5fKqU4ECERHEEDAP9ryGPAg2qYrkbSALTxcaiexVazJJzoeajxLgddPnnWmBVPRu8qawjDdYvNRREZ",
  "key36": "4kcQuPDvZZ9UF9yxSTEYXNfWGafokW7m5h3JjwLyazpacYkaAVCxHaw4L1QAVv8GQYB9KeV9Eon7Sxb7mHfrTmMV",
  "key37": "3fLsS59RPwmS5HQcBD415ThGuh5dnjLwS7C5hrE1uBeUCJobjENfAxVEYqc85gvkZHaTcGAdd3Y5c7k8jtpNN2Kp",
  "key38": "28TWW97PF6DKsSdAnqNkQrmohxFfmBuWfrYudcVUns1Qvo31HKdgZP2XUUT1WVCoXVQhLdEmpQuXRWvqsnxfEcBV",
  "key39": "3xtLFiWX6KCUQVWxL45TDVC7Lz3SFBgs81EjPBXVKPHeNb4ww3vDBMQyLFZvT6Ng7oXomVXKxQJcyrBYZCYhB3r4"
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
