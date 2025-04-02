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
    "3ZbEE2rZ6La3vHnb9BWpsGCLsan9JpPKyFa3VEKFZmd8nNnmhjKw9JdmBBGsHWrChGoyEmR6sKVcA6N4NkhasvuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZjG73Qvs2STQWhEvq5tcKXEx3HQGkMG4PkJvE2bvYJ761GKpDjLqstGrCu4tXorJFwZQ1sPWzo8Jdbgshk7y96j",
  "key1": "Z35BphVoVFxkR6R68YiFnGkAfPd6xmqAqpLePSWzNef6MVS8ksjcoXSYv57HYzrhhnzpAGrwK7h1pj6TtdiK7vD",
  "key2": "6789ZHATx7cPMwRXyHXoLServ1KV87PeigqdHgAitWHN69W4cpvdopE8KnJovrMR8vjNSeDTqTaRbgtVh4kdVCY7",
  "key3": "4eBWfnY3H8kkktCr8Lw1vJ7oW8u7eSzZwhHE4PAiuubVNy1uNumSuQJKCRXqdiJ9YZ3smLk3u5smiJjzNZESeVhi",
  "key4": "N5iGDKsZn5gwiNH94UboDpvmeYHoyE1SaXdLoszL7XiV8gPVm7besiccmMYB9DcNzHpLzi4xx3fP1c9An4CniL8",
  "key5": "3mQvK3UXmkWuGrYq7maA9YEryuMioKpgvsH8W3ataJBtVnUj5xXCQfpV1gHCA4cxnATqrjWJBprVuMYwb1vu7v3B",
  "key6": "3E2Zoq5VsigjbiTuTaKWEsfmSBuY15EAiVEU2rKSD6h6hwPKDqRg2GGZPgYfvcAEsmohpgzftn226ghM7vHxCQNP",
  "key7": "4VP7WKYxQF98ibXu3yFBgDoDGSk3o7ACogWznfLxxDaijpnYPFKn4JHc2nd9oc4NNfijZrBEpQgsbG5DvzGkhcrd",
  "key8": "53WJ2VEzom94sRJTmA7kXPbwyk8ho4z1UzA1smoJDv59HHKYoPnotmrJo683TWp8quSkHRGdGR5TQkUqhEo8eQ8M",
  "key9": "4o9jZ9U8Zk7dFDegai5mjy44pMt2Tctssg7R9Xzjp9iixKvu7u7V2wpF36m7UdLYpazLexJFBf2UYg5sL4ajrej5",
  "key10": "3qE8Hz18sWftp5PE9rBbffNrG9dQPhYEdbJgss6GAYxKzzVScw8oyCU7PbUBZ6wt6spcvnoJXF315DxJCdYPps4Z",
  "key11": "4BRSVxELcf6hdneaUdiY4o6tYEjB2NfQDrhHGfXXg5ixxg2H6ESS59DFCeEzMDr5uCyHkghbkbyiYw2ohuL2da9f",
  "key12": "5GBErzGgNzCfLvpasfCJsqPKqFubL3rm77SjFXQ5Rd7xKVHanueXyf79dC7heg8VQEXdXY3uJ3b9a4WP48Xjkqn",
  "key13": "LroZBF7nQ22eGVhf4PyE95dAmhsoaGdg9yDdP6tgcVUaTYpnYpkP6zvXZmismDnoVcLsqSyPo4G12w1qHc4Qxkj",
  "key14": "3uhaC5XUcR2MxpQsWGX3Jo5DeJa2h2DNvwSZYMc5uYW3C8WMJLi2MBD9BfbfYKJNhz818LYqSzUcd16RV8t9fCxD",
  "key15": "5Y9Yv2ckJQyAsH91zfrBpoMyTZzX7THZNTtCBtLuNCWCmpXHAK4xCyUyQ1mpsyCAG8UgTwCrpSUFNttyYymrRAM8",
  "key16": "4iyq8xFGzzqihzbrEdb9YZsUBNFkqaY2jPJX5UwNSvMPVcXCjYfmi6gbP4mFhw7DUQcm9PFZEPv9nkYjBou4yVF2",
  "key17": "2fqbLkYYiZ4Y2TN3nDk7qbf4xh1i8XsykEkXMv3KxnYkNPduCPVYLP4adStB7CqSqqpLV1Mze9R29JA3u6xyRGv3",
  "key18": "3VhekZm5AvP6rUGS1za61pV94ev42YY2KuSxy8E6xpvcWkaFHvwaoZDsg1WEA58eEY1zkyXUpFiUiBNjDAdW18yK",
  "key19": "4ahW7uy6Kps6E1DVXeFwSPBJk3uXVqA9iXULQPiQfqF4NSB6gWFXKDZsC4kDVNX8qaRMwVScssjMtGFtmPNRaN1R",
  "key20": "jKHGrdK7CRDq1VNHfaefY2AcpiguGbheSTkVzq9eycb1jZuBTyqk9f22EBoPrwhsT4mYzWXG2cUU448Mqxaayv2",
  "key21": "5QJmRFRuSMUQ67B4aQBbTu8qx42WvSL3vjzvXzQ59jRQ2haW3Tk7dEPDJNJA46nN5KLXn2zKe1yPUZeKPC2GyjAj",
  "key22": "4dS8LP1E41qWok4pG5pjUmiPBUKmT6Pn8Gnb7QRt6gj8tMfiKXMxE7qxhtura82Hb2a1CbfvhKQ2qaWKcxtdMZfv",
  "key23": "2Q64ZJpkEHYfF1V7eZYp4fB3XhhewVHu7pq1oMiaSqkJuAKzT1MnwdBKFYoqEHGUiqt6Fq7GfFgk4moKKDqSmq7A",
  "key24": "2mtJD9LjmEbxY5fqhwuEYJnJacajN7LxAP39kZEYAqKq4ok3eHrhP2nsWBiiiV8swF7pgA2RyqA94P7VciDEK56H",
  "key25": "5q3vWPXX3n5rKGPeKNSzTvKcij6Abmy4Pk9vvQkRMewaPfexZtywsayRrVbkVFWaVoVK33mZxGCMkURYnbyXFnpm",
  "key26": "5ij2pGv8ELkVyvPhS2LjuvGsuTTnKWNDde4qevbirraMucP6diX2CWcX44GU4eiiWBUbbD7wHYYWAok8GpuCymGH",
  "key27": "5tQAUnvpuafBHN9QnybQFxfNr27GyCnwkYji1LF1fYPUitdAbLRCVfSJwZt6yCxbcBDRMMCgXPefJP7m5R2EXNRw",
  "key28": "2ZkPmGc9XiYbxstCBdWrY6i9bTb9idt84rkBCCNmLN6xdhpsxEitaQ7MRFJgF5SavjzTAhxE62Z8D7tJSgScW2Ja",
  "key29": "3DbJkZfw1aS6DKqHdhdAiV5VFLaHkrkdjt8MCEB82zkso1kye3vFaxUqHnF1bEs8uhtSoRjcL2HYAuLeJAgtYgeT",
  "key30": "5xjyM2tGXkYGQouUhubM398JzMydrP1DA9Svmaev73U9AsTfhFBbovwHqgBMN3nrgaxnDGitU9GFYQHrZFPGxpL1",
  "key31": "3EfrzZeAmWpkLoUV4avUKmnBesQzditUFio6BwWKgCpncDyMG6C8KP4yN2mtC4Z6qa3maGu66n5Wp4kUgmpx2dEi",
  "key32": "2J9EDzetwvejorUzkFgrVnN5recvrcy4od5dog6ySwG7n1rGEMBV3XgFk9t36u3b8iiqfs8NxttpiJGt3Qsgmkan",
  "key33": "62e1r6r8uvrBeZfwuxLmYpHdjrbE5EdNdn32DNHBPUky4DP6eTC7sprf3SpTyf42qncJLXhNyyWtS17Tq8P5iD1F",
  "key34": "44yyxc2636xckcBpKP4fnqYEAPzJxv3Bkhye3SJmc7dAyNePs2SJX7yZuEghcLcQXwbdhiFMc2K4FX9DHrWqo5W5",
  "key35": "zhVU7vJNRvqP1Sb7SjwAttNyUy8nspbyy1DdeKBkxTiBNtAErb3YKR1CRQD913vHLobu3hC3wnRu5V6oaafRQBD",
  "key36": "4Kxt4qGCfNuLfFDCv1os4RUsFkBkezQd7ikxGvuYfWVtZjbMy86gwipWyPSSDMF5mLUgmvyDAdcgooxSqhF1EA4D",
  "key37": "58p9V2nFJ5ZsK2jt7BqY6Kj9f8f7onq7jDB8it1mvNi4tjUv8mpvB3WyBCBQ1BfTchs82g3oBosGLDKi1F9uJmCs",
  "key38": "4wr78JwYg4syQxfTHSbML3sWMomMLVj2dSaF8GKLYBP4yhZFJ8YeFGU63TkgF5brSrMq95bY21BQoPNLLrpCSyp7"
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
