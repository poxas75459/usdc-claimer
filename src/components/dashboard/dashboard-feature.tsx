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
    "2erFH4ybHiKpm3nxWXKyKZXQoGmaLSgRj5ysNDw7T512czThdNvzRjnoPGjmYhGz5hn2wDzLfSZnRaqqvyZUXKmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v2JjmKs9bZXJjmWpSwdBZQ7NdDQGgbG4jQDDiVf29F3N8fLVXCnyzzhkz3rVygzKcGhLSMbg6pRqrstQDKB3qgX",
  "key1": "X1Sj4ni1odbNJnR5Dsye5WWwtNzc7ZVfG3fJwqvjBXBCeDLHbypTKr3KZbw1hcB4ChJref31qRT7KneVEdi4hBf",
  "key2": "2ZGMoAkgJTF7w2ER1i9CbyZT1AgGHgb61SJvagbpzPb83frKg1UxfU5zh4ymZdiFXpdzTNkJDXMrjsZdMvv6fUSz",
  "key3": "4iA5YmYwg4LyCV1UUFT4FGApkh8UeiNFQVRaPytpazXf2atbnuP1G4ps4JBec4QvonepMM9zYHN35rZ1SkYewdAy",
  "key4": "5Qy8j1caS3qZoNLuGaoiDXmTiJf634ABXJ6g8ZhckN4B1bkerbfuEUhtRLLyV58WzeFL9sRqJZJPuo5bahinZ8vf",
  "key5": "LiBYif5jhW5YtWJEU47K1VTdapoLPW3GCXaoyqddG8djcRHZXFAxo8U4JL264dg8Ptv4Ljv5wC9toBFRuSurYTT",
  "key6": "4Abw7iaWZsV2dpBneo8SWvGrwngM4FQaKXZMX8soNZT18yjLKxW3tLkaJfemz2RFZhhqUZZuXbhUv8bTvVAiKURG",
  "key7": "3eKK64v7137JJ5poV6pkdr41YpPzk8XSC6Cg8kZpHoxg8BaJkQcpb85YKqE85ycjRED4B19RdBCEjaKGt6TkkGzg",
  "key8": "2uBatSVM3ymUVXjRM9C8myvsf6SR7WQZaZkGoZiQCcEr49hxfBwvJYY1N5fW8isCnZvuP4zyCzBuejX5ynifgPA5",
  "key9": "5FiqGLHpxp1ZQkGWTF52ncjd92C7vX6Q1gyVit1cmi32QuPuj5rhR2L6LbQdTWn8FvjF5V2gEqv1vRkEXMkj6Msr",
  "key10": "222Gi87Pzw8jZsfWWfwKpS3Baj9cACnW7J4aVooNTUYpBLoJnoSgwvTB4yd1y31f8yx82zHs8RR7aZmr1D94JLSR",
  "key11": "5boBn2Kv6WvJooaPjNFvnrM1e7B1s9m5qfFDHYPp2aFRUinLPUxbfRUHMDas55RHT9T774jGdF3V3R4GxVTXk7J8",
  "key12": "5AgFHQ4YN8mHCZVNDQpQejgbCeENbMZL5rixKMv28cVeAwKF57hWRBhxzpsk84H2AY6MG8owJLh3RRPtou23yPWz",
  "key13": "2W1FuoJZNrvnDNwDoDRVYP2Knx5kbRcQsqwz8v3pccKgd7ujGSqMcxp3xADzCPHcf6sLJ1BxgdS2dMgGmWhEbMqK",
  "key14": "4LBxQ5NU8Ym8ibWRuyPzMCHWvScVMpxAA1TZyz2jZoMboDfG8164gvjJWRXWM1fysmfrd5NmHeDX8VatkTxXRc1m",
  "key15": "3rmERsyw6y2uasnip2ho4EoxRGtLwkbALjmpUBjTXuyG7xoPktAJhSoP6xJA1sQ5DVgtG64EipQ56KFwC5aGAuww",
  "key16": "4ArG9ymZR93jM2tUVZaobENh6b4Wkc7df72SrBFdn3SZeZDqjVAfDZqV4FN8NQeG22fKzdPwP2MK5Ha89PxnxquC",
  "key17": "3EAsSpv71yXPXxwJggj3F6s76hAfKj8yTE7nm7UAmb9dAtAXvwqHZnEsy2pVWzcF92EEpZKy2uxG331KfX9BNymW",
  "key18": "5zk1FjKL2mQEk1HrkixprirPGfrnrD6KhpJW2BduzXFeYHwsw92XNc9yxy3fLkTt2q9k5n7qPyn2n6puesD3qVtd",
  "key19": "2KU1GhEjKzP4qNDmrHqve85QRFZzDuS1Jm5ReZuj2oPSC3pupCSbB3MEgJiePVfgFcpQDZqzPF2DwcUtpJjSYQLZ",
  "key20": "5LY6pQsE5i89iPZcUWk3GYvX2rnGvgGhZCj554rqtmUfRXrZzZENkCY3PYrTJQWiB98yqhxLopDrrZh1sMDrfuyD",
  "key21": "3zi2eJCBh2YaMvYQ6NEb5NKkJ1fvHyqUJEm3XaXzA6tosByoj3aPgRRFwoacVCuBxsXfqFHV1cfQy1Rk2yydFL3U",
  "key22": "5i12KmrgiN8chyeBGrjtPXETesuxxa85iSRp79zAespNxDP81ca3VwVrSMKg8mQmMAjaoRHpWw7v6gFkzbdYbfPy",
  "key23": "4ynGaGZSHjqPMAndsCDU3Zhsav85ZeAfY7ECAoF2Bw2iBTCDqpNH19jvzvCesvU4oiLHXAbVgzUDVoL1XdwiBQuB",
  "key24": "3Lke4vYcftcFgj2tpKQwrkBT9DsBSQxDjxT8Tr2jB7zV9qQMLGQ3jrwHSrUNTP66Hc2Lq9gh4ErBRVNYZFXTyfoU",
  "key25": "5s6twUmXxMYgdQzPqAbgqmodsSZ3JuqPZKNPH9WdN5MDfsJr5Uzuyr3x8RXVLoS5XHJpLK6uT7B1jZRB2FroLZZP",
  "key26": "564BsfsKjpijjYcwoF4fQc2W5MtG5SHiRrTURymLaLVARu2sJLpuwHXwrgnXepCqS6jLoRmwgjHUNeV9y9Q5DeFS",
  "key27": "HWbpcGsAVMsJ2kMD5R1XvjVXUM1YuHXpSrZNm7R6nSQt7qJPriAaMqm9smisQZVBajecLQAWUb62Y1rtCHmV2Hm",
  "key28": "2wg5Ue2Dpuhmy7g7bR3xoU4PMZpZPvYyAaJ1r2XcRPKngBSJf69ntWAigFpWUa7FhdopyRRVPmk7ya9afUMsxnfr"
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
