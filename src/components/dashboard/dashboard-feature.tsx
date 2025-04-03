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
    "3M22VFXKKCHtiNHuxDH172RGRMkKqnQ4AgCJf9zrdRbjxxZ6FjGNarKcV78reRd1ef6V6SiMNHqafsXDMqWo3LP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A1Zy1FxyGscNrZvZ29cH7NtyCvq7BCdks4YiNFwoYpf8hBq5ouaub2eV7ogdSBxD7p7tmJ3LgChDq8qGWQi2q1X",
  "key1": "wpD8d6wjmf6GwgsFyn39biPu9SPkty6a9piReJnwUxPQ8NSBdvP3JkLS1FNXJtDvLr6zzDfgPi5v5NwEywXJLBi",
  "key2": "4e1jdiMy8mA5R1ccE4DZDJuP713DofdjzehgPcLSfYXFtPCEcgYt3kv1yDnovAn1SSZa2W4m6YrnzYZLo942R9uK",
  "key3": "5w7ptkProo7xHhjha6RtsUVP9r3UwcCAmALyW5KfXTgRBp3xNbaiqJ7Y2EV83tjFbA83YBSyehiBSMGqmkJT4UyQ",
  "key4": "4k76jntpz3V4MdLVbQshgGs2SDiynHfvW2ci5DfuxM5rDerDJVbmYMU8pRkziXL4Y7kabjGauPiUU3yak94SAFPN",
  "key5": "2FhkdVrpqBrcUiezGdvV92dMgv4dYGbwTRJZPiv1HPhTzqEE8mYtLrz9g5YR5zxBn8Fwz3F7evZxrLos14SAHaSX",
  "key6": "47XpduFc3jaRiK696VEjJ6ecAXNqaWVBJ6BKSUsMhhs4wghGA2voAkaxQAThvnHDGBEj26AHphtdaMDtFnYBCPuR",
  "key7": "58GR2vxppAfwHXCjYmUXh3jbH1Nvin3Mx9eQdDQtQxcbswy4kVZVfrwW3u3VmtfvLRUPi7CG1RwMbaRoEtBQwM8s",
  "key8": "28AehvBruhstZuNU5jWX4NZgKpYM3mhcTN1wGURdpsvhQzPP5FrPASKrmFFSfSVCwQ4EyWrJsdW3VMRjeLSfhgQY",
  "key9": "4xyJYkh8CKV8Rkqv3NaETmk1ZuSC4u76ZG5Gzt9s9TK6U7KZJuN3BA71dbQoR9LtJnzSkUCF4dvY3a8ZfW2QcA5i",
  "key10": "8CZk79VzC6h92qXMyo2gHcEJwDyudTp2qUg2CQJh62MUXhvB6QuqY34qUYViETxtRDeqWGVMKK9xyu7fx3KzjS4",
  "key11": "5bvDjvAyi3bp74aFPFC43VE1j6YP6XHDR3TSdu7JwGX53jxeMzcFi5jVkNU3HCW6CybRiTyop1xoDL1fmNmeYKCi",
  "key12": "2fBC7T1PS3vRvGrnCyDXXvhFM1dsb3mxXsssrXdEA7jGBBtBEXtPhTNu3cbCjz2fUpvgpmH2qiBwDTx7csh8FSe7",
  "key13": "3H5Ho2w81HCkd1jBQQuiHWLPyc3KGaYiUP5ZXxEPAES7vwtnF7NrPtoubxi4xegYjtAn4jZ2G67Eq9sGXVpzAvat",
  "key14": "4HC2vA2p3CGonz3vLtXekG93nKUJcAtXM3GfLMDsEK3c79LFxiFqqsG7hHpygz3a3qRXSWrh6SVCsbD2opd8vtCh",
  "key15": "4kMkfWhRg1EWLL94VY7JuBtFQdJHeRhVE5JhKWYXrgPXyNr2nfwJQZ7WosNsmYKP3dGYhNjVxmMv698kRaMiF8fD",
  "key16": "3G7jdKvF7YtrRoMVZApCwHbKLFCovDXLyA6q3d41hLUYZ7kRafevpQ9swB7rUBimK3Es3pC6uV9wWepSqNYYiR1X",
  "key17": "55QVTV641kSS6ptcDQyJA6yFpfXEKy1zbrQLnRTFYaWZmhVeBmujurv2hC2nowk3qEui1Z16sqwKK6d42EDPWovg",
  "key18": "2WSWj5E1c8cbA2FZhHg5mV8TVemJP375v8rrbdKsvKekY27eCUcUbYgg2aDKgTV9HXH38rFDajpjv8eKjEgQC91M",
  "key19": "4obo1VE9FxisWacFdEx7vxnGzaVyixkeL5LjgPQW3BRVniVoJVuYHdjRZFvJGxzhFxS4makxn362QasnYxjpyRrR",
  "key20": "66W7AEExu6MoELL6ovj5hZ2JtxkmLXjTXpDY9AyRkLZx2bRmVjPf7RMTnbVrFmxpH4kjcnsBEJyFE3PDEiHCoQ36",
  "key21": "3vWTL1sDZjp9qLTGCxGW2Hnv8osPfRoCNeK3Gto9PY6SEuFieJ4ko6hMpETtmktHKBidMzhq1PJRaRNcgWHvPdYS",
  "key22": "3ek8NvoD5gvNzTNHr75x1RhashaciyraZ8TaoaNAFZEMpyesCFT6LumfLafT9xqn5YqkjFU2XeKTjEkqF9X2Retj",
  "key23": "5hyxng6EcCUWHdfWzzvS6Vx5JgX9wz9xQEwfwuuStenUyaJHmeC5Kv7gERFgRMQqspCvASxMh1NWVq5BUuhVmm61",
  "key24": "3XEBnmJHkzELQnxGykzuKHVff9m4VYK7sHsdhEqN9ELj9PLbeAWQUauiQEoLVt7MriXf9V1dFKj2XkuPW6VRZf3E",
  "key25": "En7vFL6BDpbktVk9BiDZDpEVKe9AYD7bkiqzCH17Fw3Ln19SPLt1PCw5cKPMrhjNswVvtQ1geLLttPHXE1eEHkd",
  "key26": "4ZyKb6rW2U8mpZoVan2h7bZrryqhnpop8QkwhPR9VUhpP9ansdaqb8EaQH2nbYJGdtupEiHdar58ddvtmS9UyfBc",
  "key27": "2JQfZyygnNu4vKKZEKB6kjsUsZvPYiRxB4LZ3nfE98ydPXxWeRznjVUi2Y7pwoYgZjVTaKWMgdaJ1Yw2yCkYTww6",
  "key28": "1NUDikkGUAoSxwgcibtjos73nPbotVpuTrt9ByavxSAuRkcq2fzBWDA9fMi59nDtwyViZ28MXddBqjZTevnWu1g",
  "key29": "5vHtXxWRDCeYZmgyc95sfnsYaxG9dodA1WR8Up2pgiNs35Smy8pnm6YuDQvrxzgJ9VKwgx5zUVAyNfJ1hd3gXTpY",
  "key30": "2gYqw3rW9AE38uu9NxeDt35kC8AgMVySdTmTNHDqkbeeWyqn3ttYFJY58cLUnt6FjR6y3XPC7ejFJ2BTLTu75SCn",
  "key31": "3DcjjuibY4fzHK3BmQa4i9zBN683Br3c6oGJWpgQ94aEpi6q6VkFknhvcYWEtcCFaJfuGPJH4wXmccgvoTvaU4HN"
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
