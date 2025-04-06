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
    "4M3nsfniWHMxAi8hmkKHJY7Yj85Bqu3Ybua8RPnqXqfCR8xZk3hWqMBf7MYvjdBinxFpkArAg9L7p3wXPNz6HUn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WFGpr3ThssyYdJe23gzqAUF8pJKGDq78ZQNzd9W8xRy1PTBrnVGaZLcrZQzBiMs9BV4biCcbNNRTofhfiFvzZa3",
  "key1": "2hMh53JmELJgVpj1sEZBVnUk8QgxEr7XH4L8dDYTxGqrQXt2cwh8mDExvSnGC5Gjo5fTGqCH2ZRhJZzGDEJYMjxT",
  "key2": "3iorzYrZqxv2Uw8VdbLiuEUCL2vP7mBDjvb7xdo6xm4zLkH1KtejpnFT2vymCPZbVhXN7KnQsN3CHziAHwc9D7tg",
  "key3": "kc9nzuhuhrXqkNvi7FgsAxEJ1JLBdizhumgnXcPKGpiJCJXZkCwRaQup36i96eLQuvyGTCdTd7qmBkhRnz3bap5",
  "key4": "4JqZJSgkbbuYfMLAjswSxXRoCsquwE4XsYW3D9GhWYfU5Jd6fvCuMxdgxBqshEL5iDN2ouhLjcFsPwMXZ9sZPhd2",
  "key5": "73fRvUUg4yggtAjauGtbsdD8mdCATcbnKKxFjpiNv3GMY7UgGzkZDvQqN2wcboxNLGxVr2W78V4ocT3X6qbCGCN",
  "key6": "fqTtMehqFmYpy6t6pFxUU883Wsx2yy6j94T1uA63iSKddaaR5p5jaQb6D9cEp7Aa3D5EbRpshesfv7o2kiBa3a4",
  "key7": "5UHgBXDUWhN65ZSuiMZJFCABB8NdXiPUNy8TBqFYRonvGt5haEDTt5mHVL2T9EdRVzhgPQeNwrgTrKnhsgJkrMy9",
  "key8": "4jrYb2vrHVHYxKBUwcJ5sVJ79fAdEmSqTCMQemSpqMLh4Yczj4d5KhCRjg3W6V41Avd6gTCZUjEE9G9Nnjuea28B",
  "key9": "Yvb1T5epJfG2de4FmbD4VM1aTzjQoFASsrCFMrXJQFgU9nbtjoHA1n9vyfWVCSH11oxxusv6AnFyVuczhGksTQa",
  "key10": "59DzgYAF62qwjCfMJ7DeusLaXoGT1BCa47QqdFptq56MCECgca9SbecwJDXt8VrZJvdNcYTYSrZEDBwQmntnJYNm",
  "key11": "5tqYtFqGQQxDRaMEg6ir1nzs81wpRe1CA8vbw2taJk1NnU2fYPaNPHVo7PeyKsefm7uyyunrLzNBNv3KThcTQBUL",
  "key12": "4YAnjRjYanXdAC1gJ1ioupgHcMUJ6HhcLirLdRwtdNQnbfm4oFwfyNZur2mdvVGpmAtQYUMEHu5gnj4VCfQm9x2b",
  "key13": "PdjZ1d2FMWP8ETE1jzAGnhTwYuZKMX4DZgGuYo9mRUHYn39X183snSN6Ed3ng1vUpLNMUbLpD3TunV8U2tLfNMm",
  "key14": "4SJAU3uhhjY9rWqkZnyn5tbPNRTas2SMm85Qm14hpGKGcXbs6AxS3mHthYQkcxiq2XJ46FwiXHrCesnMbU9XAKid",
  "key15": "3CQ5DzugNB2CM9PT2dqBhPFuXnZVndkSdTUx8WS4hQ818NHg7HRWbnezqmKhMhbif3QZVnSKJr6nxyTMty5Up8ru",
  "key16": "51po8gseJn3Z1qWTNHD8YEQTbBSbSA2SSqBTUfqfaT5R1tWjYmN7RQnNK27otUihiN1FSXnKhmL5hKLEQTdSBFqn",
  "key17": "5yTyZJ6iiHw3vaL1yu33wTD7AxSQqgUG7RZSHEbZdEp7z8SCaFCN6Jc3ULpaAPf9itoF2JA2L5fAV9muUy7kkoLV",
  "key18": "4HXEvCkGGPGDRA2kFQj68ktGT3Svvk5TZkF1Nw1Jxu3BtQxpoifi83Z7fWAeA3ca7kHMKt1jDEMESXtpYuJPfHjH",
  "key19": "3vwMNxybHg3Re2Meqq7ugpUEhHXXndb9NmLBpBtCfHTd7A1Cghw922Yb8bH6LEqk1AEGfDPicZGT2MTSNnzmEqx5",
  "key20": "4sD1oY9XfqZU6MGFwiqQ3D7jK4Ge9f1u5p2YneJLzkCs5GayNNojsaixF4WhCwWtafVYLE6dfje2PjyV1mivWCba",
  "key21": "4VV3TBDwAQUDvMK3J3xQERRgD5uXmmguknozNJUSzWZqwuTSNa8EVB1eg99UCn2pKpEcRPneAoHEWT7Sqwhs56eM",
  "key22": "E7L6obnZxu2Abijtdgjtk9JcbxZ7w8VGVVzDQp3wfXEv8t2MrUPpTpGTdLp4Ah4X11295QVDcB3GNCLZUtfd8Aq",
  "key23": "32xYzZXDQqbL5XFt2SXW2TwfqNUw44HuuaZvNjrjVeLSp5nGM3GeXjR6YBCMHyG9y5rMQ7N3RBRNvfyUQg4yVYQ7",
  "key24": "5SiUosp1UqHemwJqXo1G9W4N4eaytrP25q7ntX2hBt6Bxi3LzG51uqtn6vQDikvx5wbdrW4xJGkbE7LpiztbtUSB",
  "key25": "2As26RvBs2Add9Tsua564ZjFA4j8KHTD2sbRb8LbvagsEo8QULkpsXGVvYN8jU3dumVM7ibzqmARRFY1rycDYDPx",
  "key26": "38VQn3oQDaBRSfGDxUkYKPgtewkDhJGvAtXNw7YSCEN6HanVG5Eso77ezFWd8TBZwXxLfLxK88u6dCYVHGEfpjX1",
  "key27": "52kR4TbWumXLbQqUjHsVqT1PVZDfKyYjSvZGU9ZUsBP3X4mkVqRgTpDs7B7kKGW7GKcjocMB2TFxW68RcdBhE9B1",
  "key28": "53er1BT8vCh7PFQXQK6vSy9uUxiwHXDEt7ezmBppVusfy9m5dAsGJjNeWtBThFVVUoCYwdAyt7aqy3o39CYRkEH8",
  "key29": "3ADL4NMY7VLYYyABrtQzEKNAqqUkMrciXjtj6Z7umLZcBcfK9d4wqY6ykWdzcEv3nRSDPDvRw4PahdEAwwQMYDKM",
  "key30": "5GdANV1qt7MYBjBx2DMN1hTzkiiHVunuHTSTZxVQzdNH3qSQZXdyCMdyRoPXQVbFgUxNQF7EHEHT4WKdRcb4pRx8",
  "key31": "499F3Vs2VkfLSbNBhdDkcfBiE3djan12fNF9eo7rRVsgmEDhWm2kRB2mFH9UaWoafCunGQEgKmih8uJQF1JtetXs",
  "key32": "5A9hitJG52nQyRK2uevtjyEWjKMW3sQdXEwUDjat668UE4udcA9Z8i2r9ckdLPhG8c99Effqw2HHsrc3FvPAtXk3"
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
