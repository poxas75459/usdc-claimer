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
    "3jKMJJQQ1y2zjZPrpoWhY9P31twyGnW9tDRoVhhXbfnJDfGV6UviXuAfpSqKn8jpcsN3uLqp2ZzbjN1E3a3XiAv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fsf4arMyvWviCoap7SUikVKvcCxNa3QEHSVQGWnecQVGP1YsVaKqX8L368tQYjQSNndmsNFmdAGMt8gNgsBoGdy",
  "key1": "3f754PPtSm7YrkjhEEUSKUQ6fDUa8LP2gvUcvYyYfk4stwLR9xAaHY5BWRQNjHwr95B9dNJWyZvYc7EtPeUfmRjJ",
  "key2": "4EYjjQ8rde9LEa8nqssMUDekyW6gZdNVgQwAxFhahmD9XP9VLS14aEcYdKwCwffjzuht7xkc9JCWhSBY6u9He2bz",
  "key3": "4NxTPWcMgqqyihv83GY7gyzQTsPrYw7qseiurk7kaPHMVdzTaNYxKXQVDwxSpMEC6HSvBm8C1dSu2pVxYDHNhYhc",
  "key4": "W1247qLs63kD5MW9aDo8twqZpN7xXAufjrtnRtq94fuUjdeMYKAxCabX5qoNqo7WAsjkjLt22YaJYTcCrvKDBg8",
  "key5": "4i1v29UfQTbYvBGMahcF33z6eLPr1Brzkv2KvXhcBzVaTzUzoN525faT828fPh8YhPkr3QeemtU6TFUTaNmRufGq",
  "key6": "T736gUR2oFL74N9PtcKry63xZ7qv1RHeHMfy2jrrDAnx27kJoxb4XFkvnFE4T2wANxFYbfAoQW2Y2A5dfCgR13e",
  "key7": "4MtmyGNSj7VvvmLVWyquXiMQJzRBb8w5N9yrvWK6YH9DKmWevBFRKqQYFHZWjJ5KCvjhHgNoAn1aR3cvDNy2NKKg",
  "key8": "4QZeP5jYwUYsMsWaZaNFC3s2gygu6Z9qStF6ivozkqFnxGX4dEjX1vJaf3Bf1w2y56NMd3M4LALXiy2yvxae3dyV",
  "key9": "2jmSHW4J7YUPxfA7H5ocUMADfrdrb71PGbymvDViEFyks8vzQ17Qx9q4A6Bs3T2QiQcUPnji5PEpVgFPvH2viPPK",
  "key10": "51wojYNhVK1ifu631ssbtt5oUaE3rEs9N7JLDTjTQ5sgnjeeDpXznz3H6LLsgxiXiP1WGXuTv7Acip7qUmkWtJxY",
  "key11": "4aWrBUtk3EmWSCPLM2ejLazAgLZ1stTVYqmz2FGW1wTZfAtgCyEt9XUNV9qKxt9Gz7rDBfyhdUsyBmDUJkRQcNW2",
  "key12": "5i4pyotyTQfppGXrpjTJP8nSygLz9cNiook94Sn88LNf8K2AnoP99j4DwYYRQZkyG1QBVbmDK4TrgYAzLrPZAhs",
  "key13": "4GfajboixnvrE9gqEn6UGUWfxs9bHiTTsbwuFKJq7RUBJYNmsLSBH7sVAnjts34ccxmhsMiZAB1Yh88spqiFUEG",
  "key14": "2fyY6iw27j5GGmFD7Keekyx89w9zh8uhE7iENnk7FKjCzJQ6xE3C9QSspp5ZhUY5Pt9CBefvskNTNYPXa8u96K3E",
  "key15": "5TREpd2GRP6gm3cyEDbnCF2UvxV71anVEnNz5R5jkodXbcyu6BzsiU9u4FWYravG2oiB3FkorzACaui9T89qAaHn",
  "key16": "65katD1YKo5KfojPbTVSCqLFG6P7ioHHUGJ5hyn1dLsSGox6gbpe48mHFpzReQs5NadS24TtkHTtK9QF8YiRiQ6H",
  "key17": "5Jidmb5KoCLzTB8xjdrHtGSdZcatM2qVAwbyiM4HuMrLp1yvN9hZyqBskUh2GevcBuUXJEZ1SJGhQ7Qw1o3SSWSf",
  "key18": "5nbPef2aP1g3odXwb1MQAzJpGVp9wfvzsLzkEc1XRHUHs24Nj4QXLKAdAkwBErWPQjNkVeW1M7E14j3ZkE4f7Kf1",
  "key19": "5sZhPyuSjY3zorvMMHpHqsLkJuTSpvf4YKeADhawpWULtdL3xXqL5DyvE5EmwVrRzkcS8MhxbjaxQu3TeSY7xuon",
  "key20": "5P5mA9rQ1xVR59XWT1cw4tkGd7gEWLCr74TeqCCitYYyW1VsbRdU88Eb5dLarum24NozhK1NedaVLfW368qyuTR1",
  "key21": "3xC2tqPQbiGZkcwqJVhGPwkggwWMVs7BpsjQ6LQBse4jXHfeRCC7Qzy68cwPJwQf3yEcsPGjcKM4S414xdAMexji",
  "key22": "5bg2UUXiS9xQfWe9eg4T4vQLZmcwqXg34g6VCsggccHC7XtkkcBuLTZzotLVTW2i5wjPEPajt2pC7LbZFtYffxLe",
  "key23": "G7B2cs4vofVbNrVqFxw7dwmXsEqWATNN7yR5XFR5g7BM6WRLomX7JsyZsLaBRzfcLcxE3D3SGzUPwjkjjYC6Qjw",
  "key24": "5g2hswwBYq8YLgyGZ1BGQ8rt1KJVJ2SiiLQ8krYhySUPXZY8em4iAwkUKQ3qKhtPYuf5bQj2oSM18CqBwjhcwPzK",
  "key25": "3WvP2ujiXmz1gPHeANCkvLBHEA1NNnT7pYrpJokN9vNyMxCUEa7fzUGqPtZCY4t5BnDSVkUbvmrcytuxq9TQQr1V",
  "key26": "4SnaTCNAzvNnHUsPsQzEo8BexMmsqSxZw4JjKYFh6F9iSWJEagpzRoLcCtaV3NcS27RV6uhkQD22bScPsv8yH7tN",
  "key27": "2kv7o2ACpBfLBfzd38PGgHJStTuHVAaCav9U1517c4D5SZtYJTyiBGAKuJnm6Dy6PqoyVCjWeJEMYdiJR1S6b4D7",
  "key28": "5158zmkd6Npu5KUpCUi6Ldg9izULbPTCJSKVvor9PimzczWpEq9C3HCeB4CetX3sSsGLsJVReVTPiiP7v8DaLJQn",
  "key29": "5DYQ3L3MKoDf9Ca6jPXCPfxDZGnZEYDZqP7JWEX4NoW2FWsxu4zxwyb1sVFranKQYSTZzJXHR7XGRwaoE2KYtYpM",
  "key30": "4Dpw1tw6jyMMeSktWSyckLUW5uzsPD7S2GuMWxh7ht1bQTfouqgFLd1gYQLrKWNuQDpfKh4xk4BRFLn7PJPRKmmW",
  "key31": "3a4KUbCy8GcbVqCFZfNfK9xTzGVKxQtETszuPHBBqzjCSrXbbcnnyjHrCZH53k8uVjw6qnQgdE5YwcCDTr8aumzs",
  "key32": "4U3XVFw5PFwGXUqqTqoCLWexkNN5DuG1BrvwX6zk3hU2SxwDtRdEgu9UE6vVZ1j9hQdeqZE5NwGxSSySi7q2mjVL",
  "key33": "5sn5aQjL9162VUzmZVuibZ1eZj9zC77vXabMdw3A2tganzXTEUg2oonfR1ubaXmVEEZyTGLMiR8wAJVSkmmtK16D",
  "key34": "4KZXMp4u1YK2fUQDD7qRJjGqUdUNj5JqpHrFvC24YNjcDeWjZVX2BD74ytqjHdHPnTdFJ2xPJtbAootYZwj4yJah",
  "key35": "3Yd1YVb2BydjDWdRtp1mFv3sWP5vAtsN4Guz8HShmv77pJvTjHLBw4c9KZv88BWSE7za61cNwg9fUuVbD2AWs8eB",
  "key36": "2C6wx54wBEpUR6tLfNgnUVo7ytD88bPeVrCf1sdEjKqpqGiaTp3ZdayCeLJyqjtgFWW2gGwdLovKSRKLtAQg8tm9",
  "key37": "4msn8Ys4VrBqkTvd4UdZZh8zVqnUPy1iK6EgJkHQUiWiXoSUfxNzUxuF3dK89kPxgq5Bbmy2K97DUeTXskysYZ5F",
  "key38": "4GKcXihTN9QxrB3uC77bpku38MptfcRNjC9ETqLpCC3dXDKYCBStZYL8AYbT6Nz2cyjz9KFu4pqi6yf6GQjCzQq3",
  "key39": "2QGNFXED3kCEwsiNAXqjJnD5EKrwG5LQyvMxKukbJ2H9LqpXHbddWVprQJRFmp92jy75RytMGLecp944BjkfjMCJ"
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
