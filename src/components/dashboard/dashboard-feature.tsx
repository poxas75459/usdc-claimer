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
    "2ifrQrwVsj3Hpuy4MDj8miqPsDyNt1Lhszmr254MmU4LKTdZEDsxCfH5EEmEu9VW6zwRauuMtYRsuFzgzTE91QXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PKmHbzsX5YMr4rjYAih2dwPj7As45UwtGZDHCUgtvUdZtx1k62N4kHatKJAejHbGG2vboYrHS9SacGjXhB7c8MG",
  "key1": "4E2bE1EFPbFrm9iEVN3jNftix1ikgzwoX1CmqzNddCy3oDcmGbhmQayHBC8DMLY7UvTdh44AWWcWGvVw9LFf58qn",
  "key2": "2xFyGpdwpZe1tkUb1iS7yBXbatZSTSzpinTnwotzzfpei3xhRkmPEoYoih8UhSN22ZMk1QiaMC6Mca9kvQeG8GeZ",
  "key3": "5YUXX99Z7y8Q1J63M6kfmvxmTAAUSLBDqjtce3sjg395RNv7U4CmZuKt7Ww7KFtfEr44xZJcbzhojmmbHxDDNCko",
  "key4": "4yzJyzBzZoDsjBChC4yZUcatWkFo7MCXRykPS3uq2NTWDKLF2xMQtDhVdiYTyQyA9bhX736sw2jwifN53GLY9T5b",
  "key5": "4VN2sjxy54r3HDPxMQ7yo4UmuQtyBpn5HWLsLaNbPJmvkFwWrnSaxxVrirsxnF8sRvTZWzR94ZxMN4QSxjVG7iFx",
  "key6": "2BscnPnnvbMDMz4AZFrTu2GFSqDTsiwunBRTX1i8k8gKqbqeJsXexG9eFoExPs4oDSmyTWureJuacYZCJp9sawG2",
  "key7": "3RoCcMQWn5EwJTYhn6Y3Ln4v8t5EosTzGva8A2ZiUBdcFgo22m5UQVv32AGtn6H6eAfQock7kzX6ohJsjBvBXzvU",
  "key8": "4EhfpdBEK2gkDoRwh33BXrhScStieN6RV9iiE99h914J61WuzgNAeDNseeEdp2rEKyi781PkLCKntqTfCDAg9oeD",
  "key9": "5kJF2avK8ybRDyVjbK6cjGjUTMehr6grNuooKNBmtZxhYbs3ZoYDYQL1B3trWtkeYQs7tCErr8DbhnC1nE9PGgZ6",
  "key10": "3qRYHhd98jhVjZNU4cjHCmVPSFPCf25yyVpawUtx5GQA9pUcTudoe1e9Qzo7L6ePo9M29YFqQX5BZJ3wu5D9kwoK",
  "key11": "81DUcu66tXb2ePJ1k6Qu8z8LrWzKwjLdeV3KGuBcPX5Rejb7ecF7upzigCpupZ7qr7tiswS7GqwqYBM6a2piqba",
  "key12": "55t2DhL9XKQUuv4aGam7mu97ddgN8eRt1tguGYBTT8XA2ncbKGACcYSbS5Yo8T7Ddc5pm8YY7UruK7h9TcYUefB7",
  "key13": "5ThGivGi1g35KjJ8zY4ozeSWF7W4V4WUW3DDJY8XW413UzJywPY1K6qWiJdSoFuG5XkU9XDqY1gMoS7tCxFgSQLM",
  "key14": "2Y3dmfUk43AG6tBq2EUo3zyjBEkxvjq38XdF51UmXRMxbw3unh5GJaDWBvWygDfSaU6LZudeCdpoQiZdwJwrjwQ5",
  "key15": "2KBa5WDn7zbJRyWWA3U11nphYkymjt8oLN9uemi69tv2NoV4LDQuvzLFwGqZ4auqEXkcit4e8WZmRyUJ7bP6tVpz",
  "key16": "2K2FEm375R1s41qd7oYQzEc13SXqZamfesBEutRvJDmjyiaSk5bxcR8wNPGJBc2rKNLuL3i8yNumBhQkhfoPZLc",
  "key17": "JCw9fx4RqFwvKpkhadhd1gYphdrfeaU8ZyrAYjN6GhqqbdJyLsV93UXEF8aT7DmRsyjnbhrcNA2PCYjUUefCcJL",
  "key18": "4AfE7BBYSNXgR9LoMLWzGWPnau1tyR1RaxBjYpM7ezo3uCsjFGcax1mGyybs5WZMRmNm5W3JzyjYnNSH7UFBZbfF",
  "key19": "39LFTZFZt6RMGxbiitqA4b4dTfRtbVYjjam7D9wVeQGWF5dbA5W1fwdjjJ19Ug9s4jd4pZuFECEpZ1AmAwjHzCWo",
  "key20": "3T9o4QcrUhpxSnpGuQYFvzJHgeTwjNP46yTuH3Te6Gq8RrdVZEp5qt4ftjZy4DVQFEiXggSzRPQmzNgFBCvW4ERq",
  "key21": "4MrtzbhFXWzL5uv9ZNE2HuZs4QH8hdjdKPAwWMv3Ktvjhnu39uY7N5dco2Ht5BWTQ1iosyeFJkguqd6LQZ2ojVXP",
  "key22": "26LRoppv2VmZ72GHHsF2QZgUTMHuSaFsZFfVHnj9fiuGWRU4uhvXjya9HbiCEBdmTMxhWVn6omy1oiWcdibM6NpT",
  "key23": "5nAhsHPXpBfS7JVGJwZWse9hbwxxswrQbZ3pHq9PBzRYQXKCahZQCznSYS6jYqYYbMQGYipsT4TqAcRgzPX9oxD6",
  "key24": "5gYHJ73zbWznTy6HDV7FyQEVLw9JMGGFxV7R3tiaKncLWgcUpvRrcZts4pNiLqqLnKowHqqdYrJRPmKh7JeGgUTY",
  "key25": "54q2JmszRjFWFt3YGfxLowA2v7TpkbhGhCAJCWkMyZ58hK1cnZVDtKoTsCPpuTVyMja3fKr2W3VFkDHdyjJ93rXk",
  "key26": "4JYmfJTBMf6QpRDaN9DNwdBjTwnKJQTBLSjC9yAf9G8QoZvptSsEcBkEMfKUbKFk9a2e4WgHRgtQdqaVreJwqBBE",
  "key27": "51VEmh9RmaoVUsgL4BSewpRN1UCRDhPWPwaJjqanhKPS6SKui4WJEqUVfVcLbzoz7tfFgLjjMDHcV71kiQpH6Zme",
  "key28": "2bpJNpiqpDEFbZiMgCi1Jb8eGC8rky92aRv6GnTLFhzEjZ27ipsbJfJv9kiADSH3m77HRyZ72Cd5kp7CogrbSgoU",
  "key29": "2bu7nCuJaNVp4bwW6rhuhC4ZZ9synRvABFf77wQFRJHtxw134zHeHJfFifyqg6TsgmmpCUMPLzBac2jnQjhqWaQo",
  "key30": "2he4VNZhGxPnrfuv2kSrcjCweNpMRbVLnoRVoL59jD9yMcrZwzD7qsxkvCJKvBveJwNeyPYqXHF9mRBHohivVgXe",
  "key31": "53RXPGeKm6Vd1opgV8yubTe8PQ82JQ2ShQL2yRZhi2zpnyuM6CmMQ9Sms44rp6Qads1c97WvqmYGCB3Yyc51Yrvw",
  "key32": "5KaepVC3GoEgGWzHyvSxRTUk5ai8zr5UcwtEHwU8Ko4AfC7Mpkjm5KqqxAKqddef17Ly3uGPQ2rx28bhcHQefFGg",
  "key33": "uFNSgiMiXo95Dcnu4z4FnKtfo4cAbFhKkP7mTvX6Zpporo3h7KLBThkkhBokdvEBrzd6NMzp4kdAPhFiiRycDAB",
  "key34": "3NGnWcihy9YSaXkczYT2KS2txGe6dAAYcFXv2o7p5JhkmLooUHLsoEy22yRsAyK1tB14FqE8E6gSCtsDy1yq7X7i",
  "key35": "5gMGJqJ687sP8NfWPGkPNaitM2y1b3b8m6PdCVhJVDb7HiNEZunZ3TCQkmprqW98uCJnAKWWvXPHRStmBwdkfGQv",
  "key36": "5m8SSCpFaLVumLi8fU53H21kKFjLcTjynRrZdSYzJwQobUsGAX5wCGeR6ksRJkw8kYVyFpjPtsLoxkubzE2vfque",
  "key37": "35QHsQgY5Y9k6ALfX4xpK6P7bSzc3n3XEfHqipPp5g1F6NHC3fW23xawQMvefKPoQVsdfJG2ygvDaZVoAmk8KEbz",
  "key38": "26ZJ5xCRCynvxNV9MQxZLUCUKgB1uyUidkNyySmaxnkpxopyeVaNTTpKsXrf7NVuXBtKPit5nDCpLRubVwojGaxD",
  "key39": "u9JmQhNXC595vks5ZTHb5HegrmBnHbosbiMYnjQoj8nyjwChrhSSmSfUgYY7ZsJHAKC3eoXQX6LoyiasJM2gJpj",
  "key40": "5Xsa6uXaWmfjFfboLQdYQ8WQ9DfuWYdMe8qm7jirZpQZwz3A4npUJUnFi2ao9QFcL7rbrGqr8X6D8GgQ5MFtskXN",
  "key41": "3hDBUfiD3CNvpWz5Rree7qajdKf9zHmpUxHipfcjH3eJcoU7pJRhxmPkUwtAnEg9RMxanTBkFsiet64jMeU31Mi8",
  "key42": "62dKanj6x7SimRvea1jQeRXUdMe15RWtQbJUzYPJsLymEQaxpy9xFFRsCCpY4VNCp6tGPhB7czXY3Jw8QAshP9aw",
  "key43": "2sXpspHzUFkFHkpACHob2pyA2TYnjyh8VrWCkUGnjaBTBhvNaysKPTMabDdAGgeE9545WVgdRGDT32wpSrgQ7jUw",
  "key44": "2egthYYWsfHYnC2aiBXW7nrDytX2xuAsoDfKg4hJfu9NHRYnDm5xBjUKviCNLv3aQtCrWQ5bRpxnDGUBY9STjTEt",
  "key45": "44uGktB1vcRNiLTmN5nk7wwXMUxs5p3tV5xbaqmcXuPhzBupYTpUfycuQPjRu3aJnaZhTnBdu844U224udDQaPhv",
  "key46": "3QTF1WyZnVW7nzUVGhpb1rTHNM5aHqBqDwFa3HU84yHMijuRmcb3q6veXPKxs36N3wnm9EYxFWBupdVoiUMuULri",
  "key47": "4LkCSZ7TesqoLMC8q7bX8Zc6YzqxQ1wDEtPaLbGUeFLG44L2JycdHoejQmUYfhcXHo3KaxhNvM8LwRWDVCcSJ1nv",
  "key48": "5HemJrDCENGNnZRzxCKB3wknYNjc1uFrvBD82eoQn2rt9oEdiGDST2CDWZwLPMxFJHb3DDyhcpM5mqrrmoP65Lz"
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
