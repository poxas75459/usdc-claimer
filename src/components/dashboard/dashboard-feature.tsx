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
    "4QWbtK1oVsv586ryHsbLqbaM7k8RV2wmnzorCGTTyh8smo25L1YdXQ11NjUrfg3pGwbNkhPERcF3SwpEYeUcvyez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CBrwHDhsfFRi2kP3hSBkMdsEGNT9RLtsJfcERc1YvASAcREzxe2PGX1K3EjG8SjWr3U8cJbvk8zT71JZikWV64v",
  "key1": "2HfdiPMG9QUPuYWVTdPAHpdPxCP4Byc1BjjGNE2oWfVkP9qbG9MrMY9pnDaK4Nv2V5StRVqC5dQXMk4oL14pqrCQ",
  "key2": "2CDJwiALaKdEDsbaNw1XpbF7mXWaA8SfBAqsWmYiT6XrGSAQ5m8iizswQYq3HobCMeJuZ5NWCDzcvpaxv2U1BxFP",
  "key3": "2vLi612KjDwSMVmPpmDcEfmLLzqNCus5QAuZEsGcDHYJa8LYcybo1nXze5VyLDB6BD98pZj94HZUa48VUd48CVyW",
  "key4": "2uapYA1nPRbGLoDqYDbd4BcZ7RfkczNmge7UjASEHnDTxKWrKpg9qA58JLzNXbkwvJ83KQNHfJGSLMfGPBRSaHk8",
  "key5": "4kAMk8yerfgkVACdP6oUZWwAgDwqFLwe7wmx5EjvuCvqPGgxroLPmzjra7B9ze9v42utigZByiSNQZbKDKf4DAF5",
  "key6": "2sxshzqC1z822e3487udVFyPgtNi7CGUPzj1d6njHz9yEqT54NzzD7uLiejS8ooUJznFtY1juo3tdmt3koWvaZ3H",
  "key7": "UnrgxqaPXK8E6zAKbgeTDatdhzNNkBcaS4YL7q5PyeWz7VhHg5LBofDKj1iSouvKwUhhpF6rnWADC7FnxDoDCWF",
  "key8": "2KDFQdVE1RnjNkv6GAX3Gzuxz5Fg7guHM5tKoE7tmAgijVJfaS9vNMUqTYPgAZE9tBembcKEy443TRQV4gEDJBYJ",
  "key9": "2DmanLwWXUgDRzkLBNr7McQjJEqAxmv9ogsQxtaSpqdjwBYNqEikynjAZ1dAaX6XNYq6gzXqNDES9F6xw5KHvUMb",
  "key10": "3C7fqMd1mfbmKB1zaAd8sZ3bZGvMC9k4nmE2HpxZr2FmmiKHrJ1B2oBT9hef3hgqtAZq6NNG9zVM4rc3NwtuSVfB",
  "key11": "2tyX3HFYKnAZjHrjpDyaaU1sVG9Vvjdpic9N4NN7QLrc8zSpCEJqXqwct65tcPp8a6K55qCf79yGESyqnut8goeL",
  "key12": "3sk264bKdFHGBhCn311ZU4cVG9re9PQqNZ6TvT8zK4YN5wBmcpZJG43yz1zXS1Yqf7id28zVPzr3ap37pLUd1pkk",
  "key13": "4RYqe8za5u3An8B7EQCtGdskvfRinmKKhpusshQHwLEFsfuMGaGjERfFe6gnsuC9JXt9jFs9TYg4fsoYroq257Bg",
  "key14": "3E8hLf7cg5PfEFUALa6PKwCH8Eam9qzw8JqaJVzRekt5CbZuC8nutoQeA82pPaWX3sH8UxTSkC26u8sZeLZRbC54",
  "key15": "27ns68aApBnZ6jV7UjcdEATVdpX2Hjpsv8mojewpAWFJS3A7xzn6RRGeZUrSb4kz7SNLgDMx5uzXo99zHhRpqqWc",
  "key16": "3KydaiMeEXjqJnLdAfLLwK1STqV4dvZh8cMoMyMSY8LKz4dGFtwJR6PKAGTUaeqoXe5ksvNjUFJPCUgncqUuewsF",
  "key17": "653MSGmaum8oj47ptQAJQDJoRN4fpy2iX4bmxir7PPrvTFDGpxWnA1qucSkqTR4XPHNTV6tUnjCPnb2iAM29XZjT",
  "key18": "4usnKi5KzTD6pgQMvEr79wN4ZU6RkeRUnYYrTBj2cq3V9eTfwM7GQDkGjZdKYHkqhzC2BaDRKvzF9MSTVBamRGap",
  "key19": "312XTvN9U3pKUwqD6mrdaTW9YS3k26YJBjiNoHLmgjUnrty1jwv8Lez8Du3yr7P4SdZ4gHw8oxLF9WGtG84hqyaK",
  "key20": "5erG9V28Nma8o4EK3LGxCbrp6cEfvUPmCMZvtTXNWkmS51MAGSheuGQjdajKBUfKVJAo7TPvo3BLjEdGBSuCzUai",
  "key21": "3gtJMqimrZoS8on35ibqFtZoxq2YbtZio2od28ke7ZHpqYyuJHYzBtW9BSNsmJYDTF6EENp3QkpPmemBzXQYZT78",
  "key22": "54YKDCSM8E1KeNM4ktGUkxYGLHHyG1fevbGqNVd8rHByYqn9RZFRP3mBxqqsTVUKXVyAyRkUrrc8LCaVtzba9Xmq",
  "key23": "REP8BzivzmZWxfo8HycyCkmFPgBPGS62gXxDkBAtvN6SsSPZ77xwSR5gL8WMUg5PhHNst7k2mCHFMrmzyiSAaK6",
  "key24": "y9VtUvB2eTS2yLBFiLV1YXzJZ2iQbyjFSWLT2LDiC1oHjfLJReZuqjye39cLtjavzgZV5JYf5tbBDuaLQu3gmwQ",
  "key25": "G5GdQn79GmywbuwqqTfhMWihW4oGe2EWrF1VHYukhbvFhgk6NBCEAknaSihgkBPWtc4hLt1KbeFze1sB4ApsK6p",
  "key26": "2uSVZiu1rxStkJe6tQyiRM9uDRrqaNv84fdwLM7QYP1u54SGxHfrmBGXUjVBts2aWz7bd7DmRNsz7VjsgFnirNni",
  "key27": "YgdY8sFFvxzpCY9BNwiECLmZmxg9PYEDLX6tWDKSTG2U4q67tmFpFA6w7qNTKgdqmAJYzPFuYkEmKiwVgQXNKAC",
  "key28": "47AqS3QVLHrgQifNjJrJTckVyyTocC5QA3myqLYDzhjHdFkq8LFGRkfp73zgq91LHTad1US3iLToCDwXGVLG2zjJ",
  "key29": "3EvrP6Fj6W1Z3xNwzr4FdeeFpLJZWMWAfA3t6YCKdVAsfCRRBRzqtYkKFV1aT2Y8gKbfp1kfJXn6KvjYKHmefMhT",
  "key30": "4jrq3A54AqiHes7i7KuGB4UurhuXsvEJJ1EEqdDQXW4Rzkk3m6obTNWzL9qQ1z4GUWyv6a1TyG2gyCoeHnTF4RXv",
  "key31": "4JzmNudBQ8wPLjMuYsNQenSAVuoxxsN7aGAv38WhkSCTBNS8J7taDi7J88HEmaVqGnWQVxoMXcszqVJGYZSsjdZE",
  "key32": "4SiCycmNRH9FDFdhj4rMx3nVPgzzWE95YgSC7yH9yuUb8crvmtGiKNmKQu6s1yAXfH9K3ebRycMdxbywVteWu1RY",
  "key33": "Z37AFTXDTsBZ3ywviYeMsiQ7dDM3x2yGBFU3i3gTvZZEfJqsMarDwkMRUq5ymiZeC2NVqiFdDU4datAe2GFQNed",
  "key34": "36nbLdAT6UUtZh1cHbPbsLCf4daTydewH8VwkGALL4FL3QhZGtjeviYu3h2kw58aDAKtyCTcdkLZEc3W6iqGeJKh",
  "key35": "2d7TECCoNtiKvWVmMWDE4q7inadcTHhnSVk2SxEastUVcxtkG58bdQqp95QzjTuEwXhznNVJVUsEhYqZmGQFCK5g",
  "key36": "62LZT23LbkrF4WooFv6qpxx4x7uCcNzDyguVhva3GCoE4iMspirjya984k1y4uiMRtuLAPTUpmD3E8vzKmDYPt7p",
  "key37": "3zQxH3928jnoMN6myzsJjM2at22qxA7CyJ39iUx6zE7qngg8g3RmVAXTfju7T6rxiazoUQfjcc8pf54Sw5Jh8Z1B",
  "key38": "5vV7rSMmGPdo2E3wuRpBesrJqq6HvrruuQKWePmffk1vdhxdWWTF2RKK2N3absuwnZL4833HRDNwZ7z8Ui2r3wcx",
  "key39": "3aThQLTZAGutpimCF9WShuVTGoPdu1oxz3JiB4a2WDcfZTgbrxVQyuAUidDBeR3RcdCu8fozDQdZ32CB88wAXfsm",
  "key40": "4R5ERkXsvX1ecvoovVWHerEg7uQvdkHmutD5a3AcC1Cfb6vspkdzTTN6Ns1Yayyd3ZwWm2y4Vn3q7NJ6XGBWeLnb",
  "key41": "32gfKu4E54VVKNEAwGvKcNswy3NhDkXCSHby2tXHRVgeFwGtqCSN5tDW5RJH5pbdJgHmXpT3u4bQA8cGzq7bDX1B",
  "key42": "2f5bCUP15Bau553P92LwCjmTt13kmWxaXkfvaCFtktg88JWXVyxy8WJMQMad7kqHtuxVrNbgDc94rQJRRBHvcJ7B",
  "key43": "4Nb9gS6aNtFp4XE9eLHX2DiY7fdKZ9gxQxPqAG22zKGcBUWxHjQBaZzu65RDQL8VJsd36AM4meirUo6dyJCDCowv",
  "key44": "5nYDDCdRAG6ZRRA7uDHb2ycRwsyqeprQ8h83VmBvSuJEPwfpew1aowHktue2y86S5Kv5LfUyfyNGTtt9i8p3H4vV"
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
