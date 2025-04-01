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
    "L9GR5nt6RLJWUNpDB5VEHJf1kKt98FAtdfeGUqtXDHFy2c4hc11KyEZFAV9dcez7scKssjtdNcARCPoMQg2xwKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oppEZoqdy8DmDGPWTyzGpio6vALfA4LK2zcPxCaNgVoDJ587Dha4mVsT2CKFa4LtYDMpHp7KPTGicwgwwffhc5U",
  "key1": "5fAP5i1G7QMLn9Mfnt16QJqs2PT9UXDEVic23YDiPQrD3qAczyQYrg5r1HSM8Cpe3HazpcNqUn7FqNdAx1B2dkgK",
  "key2": "453mAaMoko5t8s9A6tfX4YUdJ1Tfkpxzoh3wXszWxMtPf92X7fYkDBWccsLDf8gmcKWehwX6o1Ah6XWUowW1RVBh",
  "key3": "411nKao6aqgffkysjGY9u1fNp5cLTfXWWrtJ2BPJZDndYPF8jAeW7bMheabr7f2EKgRfJcPRtGt8fSeFuJpqtmMK",
  "key4": "4DEdDdYQcxakosUyCD4d3M25npM4NrrFCXiYGQ4mdprsrCTQTZvH2rNS9guMZez2LFmWLpZX9MgiTbRoijEBWqip",
  "key5": "4PqYJsqqBR4B7jKdwMW2KNgG1VkFahNmxxNkG8hJ9Ye5tvpu5RaNVhMT94pzyV6E8k1z8XTfKF6xKVTkbGr5wVcg",
  "key6": "4UzmZZ6UVtnKHSUVjoAKpcrusKXimpa7y9DhSpBGnzq2CihRjiDoc7skmMTKGX5HEbPHUb8eJZevkQeucGRZpsP7",
  "key7": "Gzsnj4tXrzLWmGeMYYdPy3CYqTQ4aYuLufxVLhkSMya9bsF8BYGj8B7eevNxmsjWDnwsCpRpzLM17GEiQEgK97V",
  "key8": "3mexUexhexRYqEzfBFf41cgFBB7w3UYnsg4cb7HwyWbf5niMHGoCj2uUdPHVyNAJKz7q2hQgHBRpscHGtpbQkp7H",
  "key9": "5j9P2zRNfnohhVaM5N8bHPfJdceAREvu2XDsyGvqwrq3dLnRTtxDbnqnZPsvBZuJ3gRe6cvcmHfdVSdoNTvtVEZF",
  "key10": "PaDjrVePeyTyrhXRrb2L4JqwsDiUTL5X5BqpaeskcFKoxnpTs7brSd41ekXwqRpAxjGu9ej6j6ByJKL7QdtbtxE",
  "key11": "5vQqUYooWQgxGRp9XC3ugPX3NLwJYNq8aB7WJbjyqZmxXJhgd9ce2aNc4bLA5mJDRQeYMVcCSVmojW7HuJJSZU8j",
  "key12": "SPVHWvQ1LYTmSj3PjkD56NiAHeeJmM9o1qEnLLgMGW2w4b7R7HT23Skxn3BZWjYeT8L7n3NEykmTHy6iEBxTL4S",
  "key13": "3zSNoVLmBBH3D4RCETapmKSC4qabfHdLJWUeB4yttvMsjCo8twUVH4ShLHkwqiVqGvJ2S8JMM4pGwYYGVxnPkGF8",
  "key14": "bi9ghp8aMrsCGQ3TU5uangQQkjpx7FrYqYPHPcpK3Ku9UhebiFcGw4deHaeoJSD7jTndPMz5o98zemMM3faewvC",
  "key15": "57FKtLZXXSwZXgMVFn7fV51wd8y7aypotViNyKRExCJMaV4eMk71Udi7KGnBeo3eL71TrsHdY3VoqMZFM9oqNH55",
  "key16": "2E8df5gdx2939XxVjfQV3YFjWFbdgModxCEbrq4tY385YgeD9NQxv2bJp1Y4WMFWsChF3g2XWDux5rB7JANpyWtA",
  "key17": "rQMPo7jA6w8ckEcLxHD9PJ8CLqqYTuUDoLV3JA31DoALf7dK8hLCoHbkmMFs7y5GvAQvrvtYpaJTuujyzoW24Cx",
  "key18": "4jyGeewststLBc9uCbAdz24kQKpyidJp6pZL1FXE61MS9BkBxwmEGx6SiCckm28q7TMxEHjYMFKJAgzzYDygTCGb",
  "key19": "2Tn2RncBKQyrvwuE7cJu4C3dTgbjzQtCEj46FNnrHXTsQqxHHj126fiXGqGSUW6aA9eZmHXrNnYcJayCjUi4mDAe",
  "key20": "63jfd964ZKkLAoYTM6kQmyFMVtBKLVqUpvoYVUHfcEwsMUQQfm89mUuxWxEBi6wcBgJa2nBkgnScgPgrrJUArvD3",
  "key21": "4JHwMgQTzhaLRYueAwRVRP4uohob4dvU86rNRp2wNqZWZFrhroTsVajWsxKhwyakTVygk5aScaayEA5gQQeTMdjQ",
  "key22": "2XAE3KhunLB1qtJvf9sR3qeSvwF2nMzZaw6b9XXp4aJnZs2ovRqfgMi4Z2oW53dgdnhJiH6Kj2m7s5YD4ZXyB7Q",
  "key23": "381WzkXVQWMwe6XukgjHU9YK7Lmha663KFAVQDx7nY3hLgREdbM2BymQAXZcPZRQKyyvzjmweas5xUKWzNndi8Sz",
  "key24": "4zT8KXaUHAkZRuHJjimwqqvRjqtHdzkv4jgGWPTZE8jYjgvSaqq1osTCeBDqJJibrki42ZF5HF184G9wCiKXv4Zs",
  "key25": "skwQJwvPoCaS5y2MGUJJV9pmByZ1SXk2nGh17rM9Aci1SqApXsrbPwZmAavtjqEW42PgWmMZiG5f7HCRGxYSzAw",
  "key26": "VBpgpDzgCbXqWeqdXqZLA9LyJxwjzqVRb5orLrGR3EmATht8xoUicM6THBdZRxMZzy9Q45rMoeNzLcG48YjrTMQ"
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
