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
    "5zsoA9B6oRHJQJ7nyrqoX59Dy65uKq67t6oGVWVcLMugUX3T5Kc2Phx371FGrTj5qxzbjWqxtqUGMq8ZBZJv5LyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TsTGmXFXCqCPHgWDAJApRqK5ordPRNbQurn9Us7gGb2xNG5ACqfZnFqzYXC8Yb7hbCJYtUBuAtNtHrdM81RkLPR",
  "key1": "xxErVTnLEPELdGNCz5UYCLkiGLWKGrwLRp5wFiutpSwkArYoEsFiRGPYpcNUX5vkSXF9sdrhSAYNrHLqNrwqwFu",
  "key2": "4HPKZReXCh1RnBY8Q9AYnTBoWhC6Q1YynyWGSesbCgdktUm4gKYjUvRGdfjHx1SCvRH9q5zXqMLYBSdtSL6UVTPK",
  "key3": "3Gq3hYyu3jyReXEaM6q6a1ZiXRiq7zWbokCK74XwiDwh4LPArEB2XXDuVDrXRVimoq5DBej46t9n8C3c9ThHJ7Bw",
  "key4": "4qF5jLhJvj7Xd16AfbPDtZh5C68wqTudAV4Y5KZnrd2KjTkK6kovyjRdKDejNqJum8XJtCTgnPZQLh2WimRvGckm",
  "key5": "zw53rKTVZ6fcCdFrMdptqSCv7oCBcYroW3gmiKDt4FC1LCsjRp2dHFqKkshJ63szoS6oqTQJJFMV17eyaPygBJe",
  "key6": "2AHzdVm7hGid7KMjZKqUvDcpXsqorjnNYmgxwRvQsduchEDdh5wffiGPcjsZb2sU3uPos9qvwGKJ1c3XPWEjQqBC",
  "key7": "5jidBE7gNzQLrHhwGWUVYqr1k8Nn6A1V6z3dcCHyWixgX6dG3vH5WJ4jMrKCv1hvZMJ96gKfzR191VE8d98bjUGY",
  "key8": "2sV5hcN9XhwhgCDiQKHMA4CfEyT5TqRv1BDjNVSakRu8VPUKeJu3HufUyn8z33qNbHeJSQmumvevSnQ8EJntEBCa",
  "key9": "5Ewcw438uj38eBxzqkuQoSRvAmh2Es3HQiwbxVfC3HArRRx6D9AMETd5WuwcZ8Zz4PHj6LZWeoYAdutYq7jp8NVs",
  "key10": "3rH5t34oJnh9wqWPPh6ZnCxvufVG8JwC9n5bgf9hDyyhXwkQS6GZozrY5JSMHe2yn4NyBNeCZcaTyfhz6etRwbNL",
  "key11": "2bVrBQLcicZeC8pqsd4zUefWhRPk66mwfbSGi387vETMcbosModaJLiTg7pBHAsW5AfQ1kQB9FA4upfMVD9vpMgx",
  "key12": "jdYNV7ofE6BxPkuZThujqPk8QQf8ecRBRrSZ6yk6QyyR876MDEwdNVsF8S7xUBC2cpnm8Yv1UEgPmSASkiGRzfx",
  "key13": "3XGPMqjn4M362yWXgr6z6mFFyVwSzpAFySM5QMKUAEbeB2Skzy8a6QGxwHwgHCSx8i7U7dXkZjJ3vW8p4UpFJHwG",
  "key14": "3SqSWJ1pT8yfdqeVDN9BvFJ1imYVYk3HFgBWRYcCuguitonJv87ZPruhkARxcBmUPyBzoC1tZHWdFFCoWnWXZUw4",
  "key15": "64dSWcm6pQXrmvBe5naNKsjbNTBMe72zMoDk2hQY8KBcNTvFr5qQG7jo1jj5WYz5Pkgoo9UbwqokqhJmmZEwDQP9",
  "key16": "2ahFWmSjf3Myh7Zf7tExcsRzmBRryKWfwwMESezu3GhUxVCHAMB7UiLFB6Da5EcCtvViQcjF4RhZ2V5s7BH3QF6d",
  "key17": "3bfiFDoqLHPnss3u8GVnsnKav3wg1Tc5Z5MzheGbDdmz9Wftbibci24eBmM2QR3rJvLFXFEz7ehpDemgT98gfxRh",
  "key18": "25tCZnZdc7rwpVbWR3SgPejmwKNYxDnpvk2zHNzgYyx3AYQPXp2S8oDWh8kSdrKysvqaRCt7NoqGcN9a3KdwRkcZ",
  "key19": "hxCjyyE7NS2H3VhqzUHtyjC5tb6xHkKJYPj6tHvZzenAG9cwC5RnQNjQCqAr3YqE6gfBL68hTQYSty5dmC5TAyQ",
  "key20": "2BtvJSEWV61jXNediUcTaFm9CwUvE6TqdiTdxSRLisvvEBDXwFzakEfJXYtz8ascDeeMTa4HdgCgpRFLEMcYiGGk",
  "key21": "DmLcWu4vW55tTMU6vwkGgAWzeGGujWfgjEsUQU56GpZ9o5Bpon3LKkySdHBnoH74ECtHEQQ2ZXw8eVpWHPZ4pvv",
  "key22": "3Bq4wcKBRAy671pGpWpgG97tM24ydiXkvCCi6tMSnGaAF6b9U4sR8h9jqM7ertoqNGxAE3XcWh6BDKX9NnmKGYmn",
  "key23": "3M2ZtANWjGEqG9odJ4jtxt5k7i9XR2BMuPkdv1Wv3BPaLmrkgbdfDuThr4ccpU6uuBXKCSVdjb1u5J5fqKoNyEro",
  "key24": "3fZZCbJ2n1je4pvxBoSN8SrSpNz9R5vCZow2tUYmbzHCpeJAwVQRYj3f2hMnv8gqHEpYJCd7mX12XvcHKjhZDkgK",
  "key25": "2QcigZ3uJvBkB1W6LPY4zsk1JXqPT52S238uzLuLuighGUESTrZS1ZEJVvaDn6KHjrwouoKNSJz17AivHeqkLTPj",
  "key26": "2At2B2kohCNYt6mYney5ZbRP1yeRSLqEAk1Vky3HRi2KkkZxD32hqN5er7sGDUxBAiypfnPFJKnyJ5RQ3GAg9gG8",
  "key27": "2cy44MvxkXULecwys9VKBVWw4isohka9YZWjn2tDUTX6jw3fnRAE5sMwwyk33ZMXn9MQoDMeP5Cr9meYEnL3LnjG",
  "key28": "64cj3AwGMwFiUEQCUu5AekCJBWBYJSZz5fAS8XAQHy6FRS3GjBhiBBKs9uEJySfmpPJVQDgzxoEFbQUEeZuVSBPV",
  "key29": "DVvjeAiTbwUsbuESzD2nxbGdtWQuYgQgzTDWRMAVHMQsWXmeQiRyN9FmkP9CWLxZmg4byM7ThHgPQ9BJDC6c9e6",
  "key30": "2AS21VV6Q3PmkHUsaWvsQJzmTWcPWtdXLaU6rHB8R8j3kdsgnZPspgtTUgsVYDRg1BfysQr1zhm6GNHSY78JZ132",
  "key31": "2XWBYuuFio8Az596NGUpGdG5q8qi2SZkt5NgkUpo1tGxkmMmUQrp6sJxFpXYNkTYN3J6K3cY7AN5JbzUKGia1tWr",
  "key32": "2T5Wo2TiLcRd5C96Wi3ahwxZTJ8zimf6Jfga1qJtr29i2hWCE3nP1AjcZY64Fz3rzaJ6D6NVxCzQ4xtJ8RSBrHW6",
  "key33": "5uNSSWE1MKT8pCnccYrUmhuJTjk668PXjv1DKakDmgUeFAFmcE9MJ6MCijbNiD7qMpAbuzHoz9ajZ9UpssJafSjE",
  "key34": "3QHBoXxLDE4ooLKj12PE54TNhUts7g4v3PD5JC6jNphGYwnr6SBFvMjwXJuGkwoxHXqVCaD9duvFXfCDs5zavx5g",
  "key35": "5DJBZaTh8UkWgwpVVHsj9Exxbujg4YeoXuQFi311gYzb8CYCUzWapY2aUboRm3x3VNc2N63f6JbojxTMB6D5sFq3",
  "key36": "65SGmP4K52cWz7HHPbrgvf9vZRE5ogdnKyerExjpvuG6V72ZJaUj4VNCfS2QXLZpv8GTbu76F3FDrG6HQAWn1ekL",
  "key37": "xXzd2PuG2eUG2EV4Na1AKQ5zSVTpvFHcae377LbaDGsx97zUYa27AdoDFnbvKoyxHbLBM3E2zDvEBTQNDiFoyLR",
  "key38": "xtoqnCxM4s1PdQdEtHTZyNA97E8FQVHvz2tfqaYQi18nbDiTbzptH1VGRRr7as1VwA2fM5uVb3qm8STk8ccQ6ox",
  "key39": "31Pxi1XGU65oFM5wgR9PswSzhR4E4BkeGzgUyzqB4Y6VT3VnJxajTxR9enEA5jNeiV8Ax3tJibTgVkQiXMkNPPjx",
  "key40": "KBkV4kyXaqk2mSy7tX1LEsQj5iFVeJqLS9A17UHHL9oMUM7K1id7ZaPKYTTq7Pw4n97nnWn3gqsGYGx6xEGBXXo",
  "key41": "3E1KsGfaFhB9op9gs9uuw38xiaYMfcSGV3KzMmrsoK6iTmWLG46ULPUh7n1J6r76zaxpVEw2vcQyXABbAdCQY44H",
  "key42": "2RTVTUzRy542ZVsLV9thQ4cNqAxPzdvQMmEhfHdHdobnGcAWJ7kepgHc8GqyHnyo7gsmzQ27ek4FHNH5cRBut8cA",
  "key43": "9WE6FZBqDt6Dp6cdV8XdMUz4L6ZUYfx8Q1HrdvZ9M8mNV68mamD4fdZxaXwDzP5pFQx8Cy2Gipq4x2izZnz3UmD",
  "key44": "4zf3LN4XKqxtpHan7JHcMzCi4gQdJm3dAdePXBhQkFrtPdKfGZLyJERhXSwHNwVoAgwFcJhPhY8ZRQ5sxCr2cwCk",
  "key45": "2Nzjdyf1wYaCZYgbYVDkWmmQHs7pqXmBYXJFRArwdazpG2ZA12LFAjw1x4wm2kFou9umzvA5A6M66Xu1BFm2PUsr",
  "key46": "5yACEtcSHVswswJz5xNfJgcqWB76bUS2amJDXNnY5EX6gQ9MaZdPK4SgHKchkwCxuKZ9N7xkz2A6b4y4MGHRWBWf",
  "key47": "3kPqxDVDiDarJJoacRe4MMrXD7w4ZiMd2iUFNPksBQUVQCcT6qTZeiCfnzAu7E6nX33Mk13GwNWTnnD8TTEK1V1u",
  "key48": "npy1y5oNRg7r7yGpzu1GXj1uT6qhAkisuNN1ybZMW7rjRtmyovHQs69viu2hfUERqK4qzAeptUndzGc8VKpzdk2"
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
