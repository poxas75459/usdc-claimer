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
    "4eYAvi7mXGQPJGkAhFcP7pHjVMjx6X6gKfEeByo4wrz9iLWrsC3q9erH2RQ2e9PWYWXAgYAbuMikgKqDqvCe6ztB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i7wgVLjffxpeBuhTG4wttBrfwMiBvocihPcBYHo4rxC5zuZxr7Xai7krJxCksM1qCp6PUXCos8k6NDDJDfkz6QL",
  "key1": "VdxzfBy5FWNdvdsoBDHU77vRuJ9Z7RUhU5SDQGxRXmkCy2U9EVPvAcrHwaXJoTkApaKgY8kAHzFE9NHkvoo2Ez9",
  "key2": "4QfN8zu4MocEftTydhdigFzeGhM3x8UaW9XswsJATZwsAazCnUaFeMsSNEJTwBT3rHMetThB181chC6CB2JZMHes",
  "key3": "64VqLvTWcXUXrqeo71j7hUChHUSvGBhzmT64rFNsiiXvV4STyda7JowMGGMhhfdjevJFQWkwwLfx4h8AtWJQYCyB",
  "key4": "3eMufw1w89xCJi1oyvjeu9RmEnwnXm9a47rrrEcA7uunMpXvNLakcKGGS4sajhVH7n2WQ96EPLboWPEACGCLKJCr",
  "key5": "4eyUvLDugWibhS5swBhJ55sPbWMTBXiHQZFhj4gk64NtgAzyHJybD2sK6AWJrFsKSAmBy33oYrFbRX4kDg3XGRQ2",
  "key6": "27gM4TcXoFiYar9DcQhf2D4vAxsVHCW4KM5bsctxqmQhcFTkpfT38yTUhkWukZuSAExjZN5MVKVMyGNUAFk8yjbn",
  "key7": "3LS5FxtmF7Szk6z8sMR8fjioi5Q4U7ki6GTERX88nJkK6Xs1VCXfs4TrCP6HBm5R2ZJihCEjsSLmGRHViJncukiG",
  "key8": "5pTWjNgJy11gJdzKsEx3WT7aev65anpCKw46Jiaw6hUBAAHQ9dihLiYw3PZqnFztC7irwg73YQqEZ78wFwk6GWDd",
  "key9": "2VEKFqTSNMHTN9DrEimXRjzQ5N7YZR7pdJbE7yRwSNJXaZnRrwMjM6mbAqzntjTEg9rpELwKzMiJEjESmU1mQPUj",
  "key10": "2oK57ySypz3TcATG94BeZ6FPzT8vC8Tk68A9XuAsrG5vuCeA53D2Vj8mNoy7YLWoQMTTcoGSBi6ypiV7sB4FyRxo",
  "key11": "4zMC181pt8QcKzxDSBjKGyGNeJ5SkFAEDVhBNwHgvV51GUojM8dpwFYVbuNBa9qiZhdrPYJL4iraaV5yDGvrKipU",
  "key12": "2gfeXfYFt6CVwBBvSfkL8TfW7TWxdb8rCoXqyyUjztjiin7ZL1FWs9kQZKxNMtNP9rkc6Nu51qDbtTCRxUqM8727",
  "key13": "2Hw2nejFAgfQafDVnA41JRDyhDVwN7umuN1xrkFcX3E8PZbmfFB9ucPgsifyzxdU7gvthx9HmUevhRzungeM9Hxv",
  "key14": "4YvLmSteoWYvujYMmSnRLK5ZTij86ssCQYGMqjpbofqMrWPuAB4Zbn4wccS89uuNXhiFid9ppxJEvct1Vaj5VXuY",
  "key15": "YUkACFRKU6hKokGMQMb2GwDrfFJSwi8Rpg4KkJPeThNdnAdZxWjSHZygf7gSiUapVc3WJRm6t3DLN73gaBZswiv",
  "key16": "5DqCcQ5V2hTdiEzbkcxDzcEbHx2LGKCcB7rmRcuLzVF5ajv4v8ndRFoaLxEW3ppaVz3GWiqFjDVJve4KtrFnofrH",
  "key17": "CaiopvmckAtLPrsVKMxPdomgNvkxKx9UV7Ndv1CUhFedhPEubStocwD5ciB1CAskVdutaSCAv9Njhs235MRYExF",
  "key18": "2QvJpKciTsTbapMK6P13i3dLrqXy6QX7BtXkziShWqoyjMXitUAk5AcSvZNVcUx3hbDQc1RBfAmxeroPVRBmSnXE",
  "key19": "3viAZ3yyNDviiRgpRjGoBvHanDrpxqE1sDnipAFVf2iRDmNVEwkfx5BuHzqmdiJd2jD4ya5EF9Wz8DyEtFCS9Hv3",
  "key20": "GwSytaGb1D68Qa23wpimitYu9uehAwTr9LN1Zp7sx6nmrgeZLaNjPxsz2N3gkGuT1tz1xaEyfS5FAzwS3GkvZvC",
  "key21": "3cz5tPrgjuFR55ATtK7qjLam4Moe4ACxAyorJwFKdvvqFEfHc3RYb79DMi6GjAuRzDXVdnBvecoT4VwHaJoYjTbr",
  "key22": "2DZzN488eh19ykfAw4a89PssXLYPenQBDszB3c8xHShXPiqJqP6UYHVb2FbBFSUTAUkp95PMmH2csbU1d8ZCGLXt",
  "key23": "4L9fhh4PpLhxUTZh32ea1VZ7QKz79Wo2wpDazDUhpi1qPPFZzJrvhLCZwGdL7aBSNZn9XYXUP5wDMUGsP5Rgrg2R",
  "key24": "5MWtVAwSScfitAXVUM62zsVzx1LSfQ4o9dxejfYJnfhJryV37XJeZZrFHT638ZLyCGFDSgbfENvmEF8qqa2vUTRW",
  "key25": "3mZBT4muKXhVb9rk6Xe6JzsjFUBMQpFP31KUuB5WMYkSTAbe8VgNanR2Sczx8qTjtTysk5oV8XhGTAJcxdUXqJ1f",
  "key26": "4fpTG9X428E6CagxoN12Z72yqv8kLx4bUQUSRqQArW1BRZ7uF5o3QJWxSvESypqqXonz54d8jcDjmjna6EW16VAn",
  "key27": "4Um4w1zYiWdfg4MB6sqgvDPcGoGgQaZMQpJCfeNVxYmg1TywdhU1NRFb1ufVcbzf5CLujsnzBhYCn4Le7D2fVRtY",
  "key28": "3swMdCfe3A8FSniC6kDZiat5Diyca2nc7Ft4RaD7UvfYdZ2DLDh2YC5sxFrWRSwddoE5E1G4Zz2VJVB1kcprB4wN",
  "key29": "5i77mJbFU2GpB6xdck6ek8HboXjNKrYmXsFX9FhzCsxnZem2KHRUv6eDYLgaDmuc5mvXr6x4xEAE7JGKqNdfW5eC",
  "key30": "3r87h11cFrxVzvpGZWZX1vrgHxRVpCWC81gHNei5pJJteuQxxjUw42Np11FAiJQbpf3WcJKHUHzGBnWW6BfoJgEn",
  "key31": "4csJfi1nNzuq79n58bvBtJjWUbaNwFg1n3W7Qzg5DVUf7kao2NpvFizp6ATepzo3D9qe99LXHwJqZFGdVuLMQm6c",
  "key32": "2uuK7E9sa8vnhR1xLNGWPwFagsom2zffT5R2Pnk9DaSGsLisstXxFhAzHuZ4Hduy1v3NRZjWSuDohWa9QGajv2Pj",
  "key33": "JRXzZEPdCZi33qeyxwH2D5EbxQ1a33ef18PzRN2711pfFiXSnx8bNNwvVi1nbJfGNZUBH4PxTyJxzEasDsJpNR3",
  "key34": "5CqzhNbXt2Jt7xs7rhQ1zmfaYbBsxSbJz1Sz6EQ8pqREGoCMwwa4Zj3VNDrX3vBm1yAvNTvuHTV1hphhxoshMcEp"
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
