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
    "5c8bnhGadVe9Vq41zng3GzgLtYPdrrdYkrcboX2BvuU4q8UE3apeH9XKrNyNE8W22sYcGd6KzvSWw8Cf4z2m68Kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GeHa6yPSiLgazXEjeXecMWGe2Y2Gc8VmtidKoF8p3FdJQiuRA3tugsGdEgX4BCoU9tLmQq19KhNvbSSrTU2Xqs4",
  "key1": "5rZBvLRM8i1TLwPyyQoEXLQkB7YbzEQGWQtPz5o29g9pD5ax5nQCW3eRf1mQbLzDm4dpLQnd9hgczjncoSGouqZC",
  "key2": "xBXftukCCZ34wwue8sjYNo6ZAdxR23ZNoNPn1YnZVWWsGGbSomatEWHnNaS6WBf8SZhQwyMhMxqk6PcjpYZveM2",
  "key3": "4LwdkUXn4KAtbjQBTaEewQgDyKpDJEndeM7xreseWyu8QhAUzQFYCTKj4jaJmbfd7PzePongdaqXvpy6CNJmyVfR",
  "key4": "48XajRgwU3JUaMF5DQdSHczFGTdjXZXbZJ4ksEkJzH2dvhECi1y3EszkxChyfPYfQVq7sNG1rHTZ6pXzbCJLDhrF",
  "key5": "5XE5DE13fnRUhB5Qne11WXKJJxtZtXHYJRmizmzb7hTuh9N77aHDpGCH8kyDkRbBf6jjtWMQfismxkRUhL7t463c",
  "key6": "2bCYDs19yUjssEDjw1L5ZFNv9doz8uHKt6asPNSFcyLM2exKfzyte5p7sx3reeTDN8jseKhguX3Wf8445kV1CNvq",
  "key7": "67kAMsxzddeTZxHrQVWScBtgbbE45fjjv9oZzsHbamJVyJ9XAUuu2Drwyf1feNTh1JnDnfpzjTATd36ZvE2bk8FS",
  "key8": "55bPHwuZfKtb62UtdMk2xe5ViZeVWeJMthvJ7LuVnmqqrSHzKY5BcZgbCSMmDNLUdnmJwD5PgiyYBFcmBCYHak4y",
  "key9": "bUa1saLaPF4ZQnZZGQ9bPedsked6sgnk75MgJV8TeBDbgHmhJQrRgma7aUB6DzsMyqkMak7gmMRLQXFP9sX6JZy",
  "key10": "2VcFoiU6TzY2NkPD546C97rrToKqFRAYC2rGa5icExT1D8DLEPw3J5PpcRTecy56DF17x8nDzdEqMSScZminJ5XD",
  "key11": "3gjUZeMHNQM4XR1BB6EK7qAhQifKTnLfdjYHQrPiLXQcReSxzkvkbPbobuomG2EpMtcefT5hdLBBeJTn8PT4zbDN",
  "key12": "j78TjPyJQAvRQbdkap2g46k9Gvjjqjrr2hLq4UnHZM4gLJ41TatPaTExEUz6YdH5Ty4dC9g1v6mr3kr3NSMzi3k",
  "key13": "5j7BJXeCMTShX4CQoNDHNpCNpNEHZzbH6uKFVeXt76nu4Qe2NgxbWfy6gjn1KpZK3XXMQ1cdeJ9mv48P7j3xNjAA",
  "key14": "4DDVkgjXY35ChKGiKbq6NRXMrzWBPT3NwestWBviZioUp55TbgEiEAwrqVfxcmkjbcpXZa9XysUgNw7B7smRDrUf",
  "key15": "gsHntAXnh14tmYLmgQWbcBsZaNmBomaerLqrUfhzP44XzqmWwqdyAKnMZSrVS5Gyb4XPr11ymKoXxZwtQyar8ae",
  "key16": "5UqjYUZDFkV6ngvo1vpQACb8PFNf4QEKBUtwux4NGiiS7ZtJAa1onghUh1MGXcsBcZoz9DP1stkShKxN4BUNo4BP",
  "key17": "2kdi6gS47KzR3CgYSMgc2R4bHVPGJBjCgEi9aeeGPjVs6QLroRkzgNqSQsWF85qSUoz28VDJGcCeuwtuSoLJztCy",
  "key18": "3jzA531tLYa2r1RSPDKtJwEEMsYAMBq4VwA8sTVmgZQPtdZspWoYZ3RyAB8bDbE3AhuqoCCRVcen9VVVVA1sbe1B",
  "key19": "4o8TSJzBPVjVqS4L7EHqCaRk1rCUgMBAtxkznGTYJa3s8vaSRCxfp23S3CxmEbVTnG9zGePPc2rmjTfXk1rvM7ot",
  "key20": "4MFaZfNqpDkM821ZoLHd4tfXSzTTwregoTCzX7Pa1p7gzo36nHGt6XkRKuhdefuf6D16sRCSLh96ZY8C1MtZ5UHz",
  "key21": "4o4AFXDeo2HLRk5boERan3TVGWpf7HD7bQm4sQG1ZK9MLRcjNpDbBe4BDVWbtba4nAojj6D4yoqAFePNKs34iFRi",
  "key22": "56U6rqA3ktmvhWU5b5CZ5yu5nAH1WeNLiLDeuyHrtLrVuSbG7nEokAMrnyT42jErWfMEQm1WcdHey27J7XtpR32f",
  "key23": "5cqgBJuo9vvpDSt2eTqWWk52vqXMu6dMoqupzHF1oKBGMkUF6BNYwhzbeQVkzgDRLN3G7DcL2w33FJVwWVQM8VMJ",
  "key24": "4KmvEopw9rSDsx9enDUjSSDKYycpR7CChUuEY9ZWEqVwr6Z7oRfYwZkxymiR2nTdhLbj7PEPpFapabuguGazfvgJ",
  "key25": "EVvczaMmWZujNCDKVwsW1PbPJdbb8Vp5ytqP72NuNnSr8EEKHh8SnLbK5HYHyrjBVi7TJFW5cLViXyWtpvc7oU7",
  "key26": "3vFMvbJyogPkAE6ZysbTbhD1C2mmeBvbbpTF4RfC23pX6VDVuzQxqnJmk1RWvYinHGFjLLEfYvvb2GTo84Nz75KE",
  "key27": "2w2V272aLbjuSar4ZT71hmRZ5c58rsE6o1pSA8vruEHFiCsqT9Jc1LKCLNNZLWYiboU3ym5eCuodJQek4zeo5P1",
  "key28": "2ArLwzhEqbAdiBAJS4hjxwFFDTzYLf8XBwaWchk4cSoLZ2ka9ypqF1Sza5fafT3VvyFXu1HCNVwEWU5RxXdLbYB3",
  "key29": "3bRY4cvKrmyGDjbs1GPJ2R9Z3qZtde64REgpQfYskeizRu8aUQzxB1eJF2Bsyh8KeNAgfRBDuE6qNKK33qjZQ7wt",
  "key30": "38pJwBymeU2zPRoiqsUhC3TtxeLoSyG9sBvFAE7N2wNoLPpw4uNaDkQLtATQVuHhrQ9NQNSp57MkP5E6nYvAah8W",
  "key31": "2iCgaJgpcD98SopPCM2tw9a4gopuC42LDdNScc6oPkxisxwvSUAR6kgnQDR8G6oj3jFTgt5khJHhaSgHZPfGJxqE",
  "key32": "YP6nQNFt7ibifr31JTv1XYXEWwVzWVevjs6DkMS98tVD4D9zBgCerddjE9fBiMCGnyUVR81qLqH2RwJGJYw8fDF"
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
