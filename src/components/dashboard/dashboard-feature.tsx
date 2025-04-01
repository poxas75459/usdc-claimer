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
    "52TiXww37gVJoFAtBC5HaqB278FsYvzk1iMkDh3hcp6GZ7LhXkEnWLYgzLWAoMzyWdGuvP9sRG9z2sfdEHNd9WRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jR94NJ529hDX1tpGDj7WSh7JRP7XpZANSjSnoQuiqaNqQbd2D49aPoX63PWtVTfkkDDQ2y6bWxJTJyqtNYQ6jwa",
  "key1": "4t6hpWsEcMtU4aKbVLiSEWDixXJUsJpYE7246NaGphDpmUKv6aAMyngeYKU2dmtGECLLuZe2LZQNF7Q3hdksWaxc",
  "key2": "65TsriaESuourUZFSYDJWwg9zCSSyJzzzh7JUNWpx4g1owrdytYf8fPiGZAFnUhS7XrXqbrCoEMTtq7VYe4oHQWc",
  "key3": "52d8cdkcx8J5ac5PVpphYNVbpQTzsZGbwmQTqw157QY2gzzN176vXQe6YsH38NmL1BtCMaGFkHSKea5kWz26om4R",
  "key4": "h96znSmnT2FaceNp4oTTEtQyjjAD84nQ9EZ9RxQvk9topamBTnTrydTxu7qqTbPy1tHDTEkHmr3t9T4mEm7PnbE",
  "key5": "2URM1fW3RTECXuJzMijsAN1vbriMPUrj61jG1vPQA6UtTDdxUSk4WnUZvzz3VnZmjALKVzsubJ3NGmKywywU1Dof",
  "key6": "2SREgaNfCAbLn8EK7m984EupqVirD2S4fbQZFW1QmRCkUfGtdc3pwJUBQSDhyyXGtRCRs7HdSgXBvSC1h72LU495",
  "key7": "2X3MNJWvxxRNWUrbTCBLXZKdDP6JAmHXHi9HHzpMV4BQvbZJyY8UbS8NewBQvhox2i8XUR9FBHdDGvGCUVG5FnvY",
  "key8": "5TNZBvoJ1VNsGFbnrPUDV8JCAKidHQ7VdiyHyJCn4oPLYQAgcgkP5JLaX8bxxh9DHTPhSbrG6eakkr9jgYLs4APn",
  "key9": "63T953rMVoB2jRDgGcHSCnDE6mo77fHFN3rji8VxyeaXPRsBxuuDFdJSvUpC5L4WDe75ZX5yELzLjCMMvhPrJwoq",
  "key10": "4h38GLALG8yR1V6DemtA1U2XP1neTRMRWj3Hf4rnRr8ZYY5fvArjcZQKbbVRKdzbsZhvU3BfvCusgBSXQ3XL5W9g",
  "key11": "FNtDGQY2gs3bZXiJJ8kCUqwTpY5HkKBPDpiC9oS6ZJu25EZMFjnpPxhfrtvyHLwfFdicj7zk6wAJUfWXSegun3M",
  "key12": "4NRveAGZUqeoe3Qb9KZPLYRPDmkWtetSKLnQ91LJHm5ko1Lq2mKF5ZKq4m6GNdsQiiQ6bYpff3PX3gNpgP1B5Q1z",
  "key13": "2q2JdQTNFfY45YhWLBHCHzd8MZw5QBPuEdGXRS7z3dU8u9orji7FjGWGcof6dNDGMosc8Yw3rAbCPtkCLVyzFwx1",
  "key14": "pwRgE1irh9RiU7T9BdjiXXmLhcgTCkZtq76W5XMDHPhUDF8PvWPPpLQkLkBd2baTSDUg6ndu5uQBdRvBCwNmsbq",
  "key15": "5pJu9Shw7zNGzTP37PvhikMp7mmhd6qYEqbETTywFR6MYVV85MNEHnx5f5aEHefx8pKebJV9BMUzRC4q3dFqkvT7",
  "key16": "27QSujMVpv3qE4JFgTk5ssdCi5UmfrPT2C48pvYuhWmyWeuBPECu7rajTTSFhqPLXHYntvJ5b1NeTjF3mC6cJgto",
  "key17": "4Uxr7HBp8HCxEQ59GRk4sfcAMbpYFQxUsfbmTUXNAmXRyQTVMLWgDkmnTEZcruFqmYPZVjSV9Rm2YhVxMMzDvnJ7",
  "key18": "3yGgXW7yZPooSpFtbiscXRJy4rBRhLbHS9RThRCNBeUgQ4kqYDTERcF9wAD8q86uAaRrfH7C5P3ALs67NBgWEVSQ",
  "key19": "2Hto3DUH6atcBYrXAmaNuqJYARb1RQXMMDuEKBSeegxhEgHpudpAWm6TsPmp8Gau2BeqmELVaQMwe4V81Fw7u9dY",
  "key20": "3yvzbMDDZCuFjrjDZaVWu71q753Df1C7i3KvmqMmxbuMtmkf6AmMRqJFXhA9e8L7r5JR4Lu3eZwSxDHkK8SNYP4k",
  "key21": "4zmPagqML2GJxM4HEvCi19iYv7aNcfGSwR4UEhyuTpf1jbyHWYeJ3J1h8UrNhZAYdjZVi7NwAFtABMY5QqLGxzn3",
  "key22": "LBthti8gRP3q1LMo5U7zYGyZ4QaA6F8zBdrH7msdKu2LZZSn9S1zaYDQ7oYXvv3CrjKbjrBbj8ps97M9Xe2AXQe",
  "key23": "2kVwtbj3jVZ96XwjGzZy9DcWC5EgC7buBsamaYByedxKS7gdQEFDXaYXUmccqQgJDGx2AcEFjixULYFTqfmBuwuF",
  "key24": "5xKTqFNfMWGfwh2cTzvzEwd7WDm1gAQNfASbCekpuhkwcFzLzLPmCufR1WVU3n1ADe74mjYtoC7EZZaaWRiPAFPS",
  "key25": "3UbgwzkdQkzKrWzEkdnQDvqP5aQnvjdyoRagPTqiU3v6CmMeb6etFWEsgKPxjzhMrqQq2PEdprHWmHKYJoX8MFsH",
  "key26": "3HEsCvyd5tfQYGLwEiL5EKn5HAbfP33CiDkbuk4EedQhMC1HN8HjfE5jzuFKowCXKAgqtQvNCqivQNWBSX2Pszzo",
  "key27": "5gfZ7pWNTX4Bk4hks7pTVtcrBNxjvP4BHqusavhFy2x9kjoscQG4Gfn8Nnnwo9J3xA4GK2j4oNBW9Yj2qdhEh6Ji",
  "key28": "4CKXNGnC8aQojvTRwZAhAjxWsL4X4kLJZbAmWEG6ei92kGN3HBYZVq9CvZyxRjVsksscej1aPK8d4h8R2LvVwK3v",
  "key29": "5UibEgzyzeyg4UUbddQDLdpFLF2P34ecJK9FDCBUYNbNoMgMXZMCFJmwZ9Ze6Y4goyZZbXvLBVsti53WKhQrE1et",
  "key30": "37h5Hz9XDKzfRSt3PM2qGToNq6kGke85SmwKH8dYvfuzZy5vP1o7hH9REpXc9eBoEFcC8gPW2VHbgMkrowDTJHVB",
  "key31": "5dPKXH33XmWurzkCEYFC4wakPScFwBj9zM1a6Ko44XmMofymk3AUJ1WXw8z8BfwFhJRa6iYKz2utQ76mSTHWtHjC",
  "key32": "EwHskvFcs3LYn7j77svKzKxaV8exAdCoZvF5kqp2PpxUmb8gXeBpSsuS62SGGqmrgwcV6EXkRFqCGBSDrA57YLj",
  "key33": "5NrAt4Z5hrVPrYu77hJ5XaMtbnEtU6phtXWgTHiGz6k78rpdxRedjL6VeH5DjizwCnKzKYKxGFU7K9xV7pESr3Ub",
  "key34": "67pRfV3Mza4uW1rgi4cWJo849tcettSxGceWBtCj1h68pTYirKU8Am6rpeVruZQZvbDcprU2cdUPgr2jjqPyGxRf",
  "key35": "4joqHqc6S67xQtL1usGVMqVvrXnemUtPLzVoZdRKACPPX9VSBtL9eG3fxawSoHrcaqxZuPtVF9yvGmDZkb9YVtab",
  "key36": "58P7bx4uftDpXcsbDyhPTjRBtSvxuCFz2dVjWsL6gLkniKXhzacXQbC9qqxzva17jgNEDRkwaKtcyEZhFRPi1TLM",
  "key37": "3B5Q3b4W5XKCHqmaxbjsmaehXN2yBC3ozebQU4Gp7qdzbgXvmTFNXQMe6Jo8V7TsLZ2Qu1tgDj1xbm48c2aSMGJR",
  "key38": "23xsxXYgfMWMaEKsftumpBwMyVmQxW8jsM4D2CRnuBpA7WgqwD1LFCrmXPUurzTdrGTCf8Fb73Gj9KkDT9fYRpxa",
  "key39": "JCRKeamM3FJLbgmiweNenfJZzZLyz3RyosstYgWKcxyXC9WanYbND79NAckPQqyM9bJtE2Vnn7xzxppx3iqovGQ",
  "key40": "2DmGM6tHcWU4CM3TWyTCBQkMnb8GG3Ub36MDZWnbUwR7bwsbwsF7hwsjep8MJBeLpwpdQpHzM4NdN2bnNkqUBdL",
  "key41": "3jPn1UsrB9siUXLM5Yp1GStE5ubhvmFhKBpf4rjzFQSEwwfTUHKCfznVvfj91vaNzBafrwMkmsE3pweGZWsNWJkY",
  "key42": "4UjJYMHfB3iSFoKCAYoF3G98tm5sdE9fiKYFyNC4QZgtXKd94ScY49kMYwX5AXu9UwkND2XRv2B9iLKPBNvB87TQ",
  "key43": "2LtKbdTGWZRuvPKeXv8muKF98gUdz636ZVuHdgZV8PzXye4bgTwQrLUisxAe6pyttRyVAGhrkqcH7zgfeP7uwUtd",
  "key44": "5H2BQE4QmickDCNGSD5G1nm5eZK6jyatsk1Cb58hEeZAJ2MKpGrb2yAPwEs9dEye1qbdNe6KVDM7bmUFZWUivYsH",
  "key45": "5fq48yqEWa6PeN9h79mqgmWnam2quWSmXcQjG8kR99vX2aPDtNv4joqfp4Yfk94KuNv4ShTV8EmTJoYkTeA5qoNT",
  "key46": "5cQ2yduhpoHa9LZcU8RhmDS3PrJKkdprV6XUqLvjWNfmrZBLmht4JY6xaJSywSoa4Ggwz3jokWABNNtRzsc5H6hG"
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
