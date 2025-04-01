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
    "2jKzUvGDuTPwRqA7yBos13uzuX46t8a4ECzJsmxmTXJMAoqJNKAzugsLch2FWpct6hpriWSqm9K4aUamp1uWxLwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sopiBdnaWQ12QkBo7ADaTwKNaSRSPNAsRSP3T2n66hHZ1tqb8VLFNrd7ph9RTn1PjsMQ9CHmeNByD5fVF4PrTPu",
  "key1": "4Hx9s5Liox2FsEZQzDwkxoPEfj6EHaUhySDQd39YdprBb1d4ML9AcmdT2Scf9PouUGBpSG8dUj3iV1ecMrXodqdG",
  "key2": "2iUzhih5Tom1SCasLvcZ6opMf2w5mbYa5jW3RAq2ZJdisZF2i7NRkAwzE9kh4CFBzfhZmqwcoa8DLxcov27XCrL8",
  "key3": "4fFPGUAA5v7oZeQhfJoa39aFSvV8atFRerAWMG7gsqpnwdxTykmbMLtt8JmeR4EkHJXFMRfmHhormBjmgDbTey9f",
  "key4": "3rB2yxm38hfYCw1wVB91Ss9BxGh29CGeHgbco1fbGnYtmu2LdWyyLJd4PkxD7yqqaeSkNoTM3sHCDdCcijBbe7nN",
  "key5": "5LnSscGnSTkJABKYFLQLmJQe1KoUR7UVMEsysr17aDubKrXQ49FGjRZdRbtnKTHqsqCdCDTCyH8pEwcxJhy95o1u",
  "key6": "4FTsQGzEcy8adfCrdtLgUAm2JcnYXfTuvfs7k5zqfHQHGv5xxN5jGwX4jUEA4oNFih1hB21NJem6roXPtQ6kpdHE",
  "key7": "3kR7nskmEgHX6zt7Lw5r1hSbB7r32hW63xDF27NaTFPg1e2xnGSM3z6kupFTLzvmxz2uaBfM9vm9iHmib9AA4QNn",
  "key8": "b9TRUN4EkkmoFiD9pScCvXd7HnzXEP3YwZUcjBnUZk5tueUYBWY6GtcMyZxiCeKCw2pZeXBjaesM1JKC3V9UWXR",
  "key9": "2qzWrKHyvz1V1uZSF3HtQXnNBPvUfFk1Jd7xpRK9vV4AGe9bkLLyCAFvjPGshdpShWAPjDszpTeDpAG688XSRgA3",
  "key10": "4Pxt6Y84Eu7cr4JbuT4e6cMmXoi5NTXCjKvX3MmskUj21EWmZnRoajpoBVEQ4d7pwt7Vg8snfthGukvyycevDebd",
  "key11": "3QQGv6BcThQEzXh6uGURJVigVPWDU3bEmAN4HYRE6qcrsoha9aa9V4uS3FqVspSNGzqo5M7owQzVrs3zvJUEcnU8",
  "key12": "24LJcQXB8nRakZQzBUgofJTxExEaugGvj5R869Wtyk1rtCTkzbpPLpk2cMMdBW2Hf5b8zngM6GBjFtXfKDThX7tk",
  "key13": "2Ev6Xo6v1wTUkpc7BQKnvh5bWFbaQu8WYTGqmSLf6f68Ah9fd2egbvLxxtCd6WYTQ6hEy4zJGosQJpjXZ3iGtPAj",
  "key14": "2NEYzimkhjfLBvV1vHUScxvjSsBtQxFUgnDy7JJnZt6HGuW9TTrpm9GrZSeJr28CCxc6tePAUoFoYreJtH3cHSRq",
  "key15": "sh5cLjaT4U1wshVjP7p2t2ygR9Kp6bPbA9sfrqSesiEq2ZtgbpUqnBF1SUW9DW889xQzxXXjSxFW4f26ATuxidB",
  "key16": "2uPxq5sH4LNetcYS3bgpqL4NKGh3j3vs4jMP3StD6frWk1hAAv4VPM7n5e4SYzTiiw142QLkcNqhojTPtp8eVrTs",
  "key17": "GUcyynytJEwmrFyMCYhRUQLKECatJWG4nPgRxwRbVF3jmgvp1ECHu681GtzEp7eQmZoTqh7c4cccciDQoDrtge7",
  "key18": "i4i1QHbNxjFtfhJfufK1VngfCGbWUnHQ8CmfxJQLUgwP7An1auVzRWrEW6VzDU2fRnEr2gVS8nPo5oMGbDN4g1H",
  "key19": "4Ar9a6UY2LXDZgxs4bMMZpZhmev7pyXUwcd6r2PVwGkZXrQtoaBX1zf1YwvFjwVPxXwZ5WKWa2DiXSD8t7mVUrXb",
  "key20": "4BRdk4Kqggf5fqhidVr2DMH5mGRJibfH8KWHAB2HAiFHQWKAqovBXv41zMZ7gixpsTxaxm2UTEvmSbprVcU9z4NE",
  "key21": "3gAP4rSQN9Ek5phc6o4oa5qE3C3BpnNPy8vLDqBpxw3aM1zhn1HUDt6ybufnuyFGoxh67DkQ5LiWoa9T2uawY6YZ",
  "key22": "NcqSjzEuUVWv5qWz6FcNRvT8Smg8XhsU5fY12FrDgbfNkZL1J2AWLL2V4sCfHoBURk2y1rz15AS3QTpSaJ2EwQq",
  "key23": "5pygHgfyPmmqUXXvFZBHAjCxacXxzSwKoG2xwASNxaktsmb8jLrxEjSxS91wGkBkdYoSwbwiLQns2KN5PfKsD7tN",
  "key24": "47QcBch7FhGNZ8LDTTy2kJHsHGTy1Ek678pmRK17vtuURT1xq5MnY5ixA9jLTFi35GByZ6rp3cSy1em6kFMt9E3r",
  "key25": "32eFKC3QQQByxFhJKhKnfR1mjBRKN4quKjkrQwTD5iNLssGAiZjnT6T9wxy144PPe2R15YVSonC6nvrfSRnqfPHM",
  "key26": "2EtnJvGDksN9EsJQbF3xDenZ8hnYy71HTELXaEkiaksmvjBkyWmvtiRfh8aZTDCZH2fD85vTKCvfAFgCYsE2oRKr",
  "key27": "2KVFe65mxdsJzJ2dLKASdSi57JL7bbqnZ27ot7CTRyAWSNQ2ZEuM6rHQELoidCsbMtY48zYKB2vUURoYqwvCcpqN",
  "key28": "5RD1immZF3oJQNRUXN4C8Nmr6mqw6XE1w5SapxXa1QRwP3BseGFztNPcEGX16bt6JYETbURJeVkzSAVLNg1Pm4Lo",
  "key29": "2mtbxKJd8JRsjxfofxToXwi6SnGc3P4D5eVaWNVnyLyCcFSD7f5iG5e82DWs2Vxvh3p1e7qxxSTHbwNBB339xGvH",
  "key30": "2DGDhVz2yNrsT6d4LYQBDS38retUvcoteW66eSyMYXNfzxH45oDriaMfbtbQLGS3N5edUb5ZRyhzFXwMzHARkE4E",
  "key31": "5oPCYTfWtJfKa1Vyud7iaWVxFo32bh8cnYE3iV7NQ17ouNGzBh2Pq4kemKUbY9mUafZxMXSYX3Y55eM6Gd1qUwLb",
  "key32": "3YFzGFNVJ6gZzaWk1r6tpkBBwm5m43YVEf6sEfAPTWRvLLVhUYcxYUc9RVoggpmHtMf5Sy8qFjCSNM8NXNmRwTtw",
  "key33": "76a83xcPT2vsJqfnSgGRDkyvJ9XFBfuRnsoUiwsFMeYQk3iHjWUXPGwxD9F9vzRYrsYErxUbhx9AVXLUULQbk4G",
  "key34": "2HeCNjWRbX74BNxp21xFSg55TPnoUZhCEmoKa7eNxojgfzQFT4z6Y8DGSBcdHeMDYKt8Lu5xbGDXjg2A4zkLXmVo"
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
