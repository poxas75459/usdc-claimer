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
    "55bz5jJxH9dSGhCee548ivhjC6dH6dn18rVoQhFdrk1LwwH1egBag9bf8rb2wfUtDbfKEyuSy6XAG6p8oKL4Pe1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pkn8ymnV5S4praRAe1JrifmHPS1iArENMhmo51xXNSUYc9GtPa1gL3UCthfQdJLmEQoLoTYoq6cTc6KEx22d62A",
  "key1": "2VE3BuzJWWFxF5hzGUASNR7sDUWyBeeCvgdJHnhREGQ3tg7krKM9qNzUry6Yk7vfz7cmA8hvdiRtm9Sr3FVHUjth",
  "key2": "7kVq1gGf8bGiUaFzyzcVXBr3GqpMrwKkripym8ZEf19Vm18G8U257uxr3ByqJtzbueUTZ71vhBYbkSSMWZQMfyP",
  "key3": "2qRmbRWFFQ4RZspmGSm4AKUyoi9BSozH5tdd5dTfzGHCMfZg9zUP5frxLhQtMa9WwCP4bwUxv5KHsHgAJkZPZ5u4",
  "key4": "539aBwLPf5kozH6qfB45AMPS7QXNXP5jkLE4VFp9TQW8Rbvs5aXSea9R1eYkmtEAbPJZHM4Nysh5uQKfjEqv4PKn",
  "key5": "5jDUUWezKEnDa2MAqr7peGwAWxd1C1NUJvxpBmYfcu7kRTdq9mtRowcjW7dKnxeDZBZ51addwecsHA7FVnTP7zmj",
  "key6": "3ANoxQnXxEdi8V1pbeaRLNgctzhJS3ehN6A1dtCsYwuHYabF9sfHUBX5E5rCq1VR8pjG2qmSejD686RQ8ZeH29Fs",
  "key7": "3rpRJvPtqupZF5X7RBf3JcNZGPScRonZ6XgZUAi79om8BXjGB284aaTN86p64r9o6Zh6sRE9D9UTDZB5bj6utmAB",
  "key8": "4UZ6cBEsKGQbRCEddQZJStVr9F5JHc99wVnZzjFi53HuxS396S1JouC2E7j6VmeV1UPf8YntQLvvs39uEwsU1fpW",
  "key9": "59dDr9Gy1R7qdCDdXGawSC9soLo8aUdupzu88Xop89QN2NmpsWLWE7UJqxyKTbTpGt46KrTKNwbPZL27Jd3737DA",
  "key10": "yNpkuqNVhvUuDLJ953sJg2MXFdoCjXMAvzF2siC1jveK5iakRueVRGyguJux6HnHhKGrptxZ9v1VfFfmo5G8yTu",
  "key11": "3hbivAGpfYPCEHyVqFWciQWdEUBFsB6Pby9dUjGZfvPo9CRQfc1V8ApVp1edJSuQpRCiebR47ZMbMBFtB4GdEzTM",
  "key12": "p78RTsftRn1mxcNvukmnjjtgZecNTiBx984MkYT9h5AGdrFW3KKFg4nma45aC8EBxDDgudrViHUjbRaJaH5FLJQ",
  "key13": "2brqGSmg3Lk7ukYZ2GgdXWopbvpWcpjpnyb1WUf4WeaynuwQaPJTwUco2A9rThLqnFD551JmjZawXG4F3HmCAaXZ",
  "key14": "3MiXmaozHJx5JkfB1PjhLGjrsMeDQyMVbJBnWiV2pHVcggfs9zUhnfxefT6pfFzGDV6bPtjgEyXFNYYK5YLjMaPy",
  "key15": "4suQnfdApxuckUcihmKWXfzRBgn8GivQBSt7RMYckSqxa4bo88vnFp3KXccV3k6DbKtnR612axGGw6iFBkxkKyAa",
  "key16": "2jsevkfygVnMAo62iwxupDb3vhXJDubCFj18dra5bFAwC3VvqgBAsk171ui4oLpM7CZRbt6nRYkZfyXAWgm6q16M",
  "key17": "3ScuJF1fdxVm2eg7QZWRAfC78a1zAF3P6zzGzYPgnfDGWzH8TGZ2hscFb4cXWhXQFkx3ZGLUQ3ZVfyJZPcSo7yab",
  "key18": "75CEWNGTLicWVfX3GmSqSQJ6x3ahiVjabUzuEhv8L6gQFoNsx9KBGQKArDEmTdc4HfuVFqwAs2CrnXoSEm4dDre",
  "key19": "2KKo5xdwxjbGG1Z1YVjqBjyBzMytcgjk2D8NgioMWoTxESWNqSRfd9FtTWETZyQbaQYfeXDgWx8XrJUJFYrFBZs",
  "key20": "j2RnZzwtZoBxVKPGTGrjiHeAKkeDRqkeur67Q8pmR3PdALdD1NsbdCdo6BXaPEUpSUgqoBopQzqVhz7fA2rmmNL",
  "key21": "4pVoFNzNe4RsVhU7phdSDEJEwoCcvfGbbEAXk8Z4oHeYCUvwPep8TzV97xrZnsTFsC4dvjpZEDP8pMRyxZcKh7DX",
  "key22": "ocWSsgGw6pg87hsbAs7AW5ahk8QxGGSbPtnAMnMAmF3HBu9yPnv9k4ydBq4nvG1eeaYintnBvYe1k1qW33RQmzv",
  "key23": "53rkpSbZG6oCxgEgANzsa6P5aD9cCX7Kt7M42cah2My4BaNvpKDGRcWwvQbjqB4ENUgnGgAiCvofVKmZ8WvyWf5D",
  "key24": "m2veSBhf14fAZKhUz4qu4b1DiBg86eqvKcSxb4g5VecCxHP5LrwieezYfTEXDz5ArvKK3Bq1hPHVwzmc2e8R9kv",
  "key25": "5yMGsVkYyC52M4QvUKPBMYPDeUPhapkJCZQ5jSRcezXAaXMRZR2Buvk3UP7YTqKHKxPMkveeP6V8Ui6Uiop4Jr3L",
  "key26": "27eqfin6DXrccDikcbE63jxHRxsZxC7mUFzKWsva5HX2xod5qoDiHhzid494QrynxtP2k91wKBnvjcVcCC1KEZmg",
  "key27": "BHh5sNgNq8ff3ytGKjaZuC5fkuQ1mjg77UffZD4cu12nrSJ8fvRM52ud7n82bkNDavBXXVrtyejLt7tGQGeMgMg",
  "key28": "yE5himRmt3R18dwatakB145aCWutNn34hTagqaLN9gjfeGPUbRtH4VQNGzHjxgq7UtLtXRPXUsTwNxFw9DQApZj",
  "key29": "53D3eQynkJ7uoqDdJtJWobkUdSvFRKpk1Vk6pf5ESAsSryU7xRKCKryNNX2d34FYewap9XHuYNJUNreAmhn9KzhB",
  "key30": "2fFyxLVEV8KTtBBLCCNPu59D69VsckHp2AiB2NR9hqXfpa9FjuXd2Wcf47NP9vvLypgQGRugdHSH9QmGGbATy6Rh",
  "key31": "5cEdzpsXWaViakTKUjbo9PE3DBXfwSghEvesZfnqkJSV4iNV6Wr3jAfHev1aXLgvZuKrU28LnjL9Ey64RUZcYP9B",
  "key32": "5U3qrC5o4WCY4Q9JoBfgX1A51Lhsx33yjKCXAWg2zSkKh1erpGDmfHSJsa5ACAfoR4qsMKJLWQoLuFu6RkgzGyCP",
  "key33": "5sBMHsjBHcprHZYQxDbdGZTCtgV3LawBTC3AZX9j97yQ43VRK3T8uqqXoqSD5jD1eybB9hhd7KJwEuW56YLLTRXJ",
  "key34": "3eVYxVrXD7Ee52TZTrK3S42rR8z7ZAsdCwn4sjeuSH5HxEuZ8NvwPqNYcBV4cK8gWpXHjRdZjJdyWtW9QE7tG9Ka",
  "key35": "UhaC2WqTkZ2go33uUHEDVroywDQLNu84ZiJdfBXEBuCiF9fxJWvuMy7rognN7xbnYQo8L1e85ACYGh4vt2TMBQV",
  "key36": "2ZBS4k3YYvGavuMwNWxtSS9xDmc7Zv9gDpVyfr7Mv1LdZKD623Zwn1i7vJdMisozQdFcLsZPPhe5NC1K2tQAc5uX",
  "key37": "5pxeenAgTj1m4PfsuKxpwQ6rUzAeLhY1QwfX3z7NaXejhhYMEDZECLuJJ53ry9n2V7fBViQiP1MYmoKzznXv7Q4U",
  "key38": "5XtP2qqjKh4KLfjLxY5wyMn7hzE1pHsCNFKem6AVcnBmwqwKXfDeU2uP1e8fqNxxfPe2Q8qEyhQJBqYQJSihcPBa",
  "key39": "5yTUVpjgAT4vd9ja9QqCRQWUk967ipKn3yRouk63w6mjRCtbjCCBs4LHKBdaWugf8MhnJiMWs1ZmJsf62Rh7LcSj"
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
