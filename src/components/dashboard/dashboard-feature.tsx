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
    "3uRjzJdVx2wqVLeVZaMcFzLAA11CYRdnNtX7AC4mMCURts2zjsVPmMZV2daDv9ygxAcCDQ6gvGd2f6WF3BZEA1Ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P9LubYse3Z5aLubysEkdpD6LbqBcVukXcevsNxBdRnPqN7FvbfWpi8Nf8wv7wgdcH9aNRMUFYpCsKArykXQMUqf",
  "key1": "2zkbgKkhVtZjsbwLQmcsTTnMGCngQHSi9uTEgqxBFLZpvKx7aRoPHqTKccddfVJi6hjqU9pZyiRRbAwzsEURWPgo",
  "key2": "2uxwiDrELsBc95k7bVBkd9wEwDu6ePmje8E7Zi76LTBEdSroEr61XpZrM69qT4bgJUydB5r6J2MudsVTVcGpS1Q2",
  "key3": "2EnPipwHpAi6oxxG21ps6Rc2rZen74tNhX9t3YnbMJ6oEZiH27wzTvDSnt9yuMsj6W1j93ivu8NM3taEcJbHUVK8",
  "key4": "3NuXrdWvaXRU8Q8LHcK8N5fy6mwdGibMZ8G57M8zBJjTjHxdtfF9xyBmAawaPgsxzwDsT38WhvQBbKUZ2cf4idU6",
  "key5": "42VMnnyyQENjSxgTFUjqYQ4iMo6VUsWsBve3TtABoiQtxvUMwpp3KYosHgwMeffMuRK6Gu4m5n8pYYmxCqhREqWw",
  "key6": "2CHLvYw8yQpM7hcw31wdXssCkmoawiEk9t3nxaaU1GzLVGfAbk8tL9gY15h9pxLS8gWhGoefnuVC1RAGyRf8efab",
  "key7": "7kPKDkKPnG6P2nthXzeyki8TAGbSKHqne5Nt1Ex5dy2jMejXYzU9sJ3we78WSH6suWLFy6ATGavgand3eTbdXJR",
  "key8": "63rd73KwUQrW8eXV9xynHQCrTgMkEMHyqogepQj2WM52j45fagy3J5d5RMnyVrhpxD6LbfM1c8niVUD4JQiHaPun",
  "key9": "3i51BQXiJMZVERbV4rE8LYXtK2Xmwqsi14yRum3D1ctnyfXuUP3SGGtqRJyW6yMeSnsMLS8qSugBRhqGVqj5pKdn",
  "key10": "21mCPjYYkMWDks82KyqLDJyWuTW2AeTFNYVerwDpm3S9oVr6FrdW8EAMmTgzRaoeqjMkTLGcsdGG25vtrZts2yrq",
  "key11": "2JMmY1BepsSAYNtznRmMzZq25oPxT81nguuyeo8X81pNBgFDYK4PBkKCPMvihcsLHyVAVSWuK9gEPJFwioXKeKG7",
  "key12": "5tHbf4abQmvUhnUNxWjDwHphsxXbPJWBTNzVwY8cMdjnJd2nwBK5oyY3i2jCzmw1NxqZw6BchBCAcTHqekPURvJV",
  "key13": "67KJNpXrDZztSeXjMSwsCTVyuyNektFEUojZDCpZCjwyxtMJGs5CdpVtfi85nKRa9vpcnyedSZETtrAZZgZftB3y",
  "key14": "hiTtgGK4NLoekaUtPX9ZYGoSgpocn142oJYojukvd64aLaX9Zchy7RuSryLF42BWmGmzM9o88SXEr9uwz73uVGB",
  "key15": "395bmpsVP5DZ5N4nR95VN18CU9PA6PCzCkC2z89fdiPASGDxZ8uHKNHHKCP48n4W2knSwuaGZVATwqxy37bHWYpx",
  "key16": "5Kw1QmgZHLzkbUbuKAHodJnq5DLTDuywXeeHDuAUBsJinTT5aq7DmFBv2SM4DBAMqNApM5E6x9Buv5WAjjGC5B1y",
  "key17": "3w2wFZy6vpj71hRyTa1t9EU5yN8nUjRoN2cPVy1gT7M7ANyBVUvGmWB6SmV44SQkafJMgK2ErAirLa5MHrPWr3os",
  "key18": "4dUtsmpupksbZc6Q25KjAxd1jW7m7XiwipC8Hi5CRaYv1NHVcdmeugtXq9n1YKp1e8LBhyLHWQHmtWmawQmJSzHf",
  "key19": "2wYKinyuKad1GdkSEASZST18FooPFYrkN85pv9cWsEERA37UmpKR6YHubnvNmfftocr6t4WoAECYLi5B8s5y8j2T",
  "key20": "5VDe3pn3Ni8nJYuoMsRuEW6UQoLXXPS2kMFsi2AhneAVtj1ZSCBe2g84it4gVinCbk5w4N7DMiLB6QScu51Q54wY",
  "key21": "5QNLyk3CyCc76kAtMwxxbwzzRNmQPwzCF71pYEeX269pjDxyJ6i7cP7zDSCD9ZwtWsbiSUV7gGPdbvT9DBB7skG1",
  "key22": "3kPsgn7TShrrx2ys9SVsiwpupBiGXCJpZ1ttRJZ9agoX35r3CEkq61fFXNRr55GsdiwLdFp3YLgQGoTVbdkYh2yQ",
  "key23": "2V6NnxX7CkzgY6Ueczbm4nCTv4746YYZjQwTa9L8Gwj5eXQTyXnV4nbm7d6PBpKHNhCajBLniAu5Rf8inHh9mRMq",
  "key24": "5uLfCL2hLTqR8mnYtpj6BaWoWXAGQ8YMsZmuZYbppthcmEKcj6vJkNLpYQNzjaihzUzuJbq1BcVX7TXSaE1QDoBA",
  "key25": "4FDfVKTEbz7w5o9HsbMVcUT9a82FemY51je47NFU7xaYZ7EXa631uYsKk3cYu3Cw2j3dswdiu2MB6upunZiwB1UF",
  "key26": "5LkaEzDHFesXMeuB5NyE53PStC7pBqcafcqrYJTk7QyXBU3Z3rwbcEHhq3L57UPKGsTyTeHNb9wcQi4NjguGfUGE",
  "key27": "3FnfJs4R1bia89UFGVPmkcTC5PyKtR5zB6FDqoDxBG2wXM9vX1u3FVxpKWrhXrJU6dfaMtooMFZKNipB5sNTqkAc",
  "key28": "2WqdLp87ibYoNebknFga6Cn1zcXEGTHWPne3ewUVdG9Us1bZWU4ejSmpN2BJrzKiNsoh55e7gKbJif9ox9TP9yPF",
  "key29": "2JWiaeqkJeVS65KP3HEMkKHXWXtWus8mjxg656GCf5jgEMTWFHmUiyYsJh2z4c5sNPwGDtUnBtLPCkw7XTz6w7jt",
  "key30": "5ogHarTc5cdcPZ7jRzsHuXcS1jim1wg5u7G6mgVkRgEboMqADjs4ByYnhR6q1ULjRk6r95cuCeW9Bnbcmz5Z3g11",
  "key31": "3nAUjVq2JLS7UjJjWnaF9N5KkYQpcc2Kv2HZPKZP9mJoHnRi9B9kRKN1g3a4Dx9gs5HgCc1n5Eaicz14byccknAy",
  "key32": "3E2GLrCk7jkA2WPX2kEmmu5xfAmbxf99dJRyPDNQ77P4MqiXQAh2PWWCwK1HaiUji8Vn78R8QGmDHKy4UGNJB4ht",
  "key33": "5Jj33grTaVzgsmKNN1iNhgx1rpGmnZSKZXw1s345X44xqVhNg9jdeZ1Voa1w4nf5xcUEV48GAwwMzvcbn6Pm4kuC",
  "key34": "5wtV9iCpGzmHi4ZSSz5PLD8yK2RUduBT5QRWVQc9Yw3E4KSd62nLUfc6pcCbZi4coqfyCLBcwGFkJfvp7afccUX3",
  "key35": "5q1skNzUBgDNWR8ZGpzXGhch3jfCbzgp9xzkN2LTcL17LmsKcqJ1vfPjSwpcYco6n56sevDpThRWJX6MwDEE7Q6E",
  "key36": "B8vJFKJKH7Gzcivi5J1irbLin87G1piwFQmZLEUWsuhewwhSwK8md5wJaJ9inyQz2iYfBBzU3pHdhpc2U8n5p5E",
  "key37": "5BdQ87hcQii2JvscVf9pS9XEAWz5W4RC1dYaXTurVaq5gbCxbB7Exo2qrijtV46nNBf89H1g5U5GXfHcFJWBSYtZ",
  "key38": "uNor8QLY2nUMAWqQnK3qRWD9L6mhmNwNQhz6niqwauE1G2voQfmo51W1Rq8QXCg1tTiDHCncEPDo3CiRWZ8K9E4",
  "key39": "3nxtVKzYY9NdXMV2nsC9BdRuUi84VBHh52RrxitBGqBgXskZAQefpXwTXgcGtv8mezxZzsZCJh9YrpPeRNY4cEC9",
  "key40": "2DYvcoLjFKDFpxkmMdkBuFSv1SVZ7yY8AQqUYZrSV8JFH7sH9cpoLueGkqu7r1ibmzjNw9Q3DxXfc3bi4ts3h7FV",
  "key41": "2Ys4bRC3C7CboyzHkBKQwLTH5FGFd3pLJxLa62qD9nhbLgPV2YnCvAyuJgQ7KRbuzJ5BtTswUR8HRB69dxwgWeNH",
  "key42": "36ERZByfX5Q6tjVUd2Ymf54L2ocZZzMCcAJGx2GLPcaYyUcB87jQEiRQKKo64eskEjBFKu52A2kUQrpbzUTc9Rke",
  "key43": "5ThoHJ23EDhhcA2uk3PnTC8KdkiwbxrVqtuweYKVZKP2RKjL4nGeRHjRnpBFndiA4RZuGZt21ZPriPwKXfKb47ht",
  "key44": "57dHGGmgqHR6dmtUH56rFffyVgmHKrgNGVijsYHWDpNQ7Nq9iPWURafyeF5w1nWjvn57Cw5ChyxkCbjGVJr9vis8",
  "key45": "4ocrtP81ugSiqLCAJcUn5Bsjzaw6Fc3wNFBhghL3zF6a7p7DeEEKqUh3m3uz8qVeeHvzA8AW8nVDQZWhJZQdE5op"
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
