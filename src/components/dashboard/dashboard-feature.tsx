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
    "7J4fmh3DwV3JSH1ibuHkeKFyqWmAz146gswHkGCRZbUhwpz7FNVfcx3Ve9U5mRAnfVrPyMzEGKR5Uonp13ecVrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7CmyyBofmdjvYApm6eY6D7ujXkQf7eJUmGdspzyj9xMC8BuA38eGCipqV6ZpJhbeCZBR1zmsnkv8pUbaRAUYTUu",
  "key1": "51me5sRQHxqxh3YJCEce26jybjz3BjpG7ectWyVknDjFm1dk4SVMg2156nM31dPynkCtDBiop82nUunXhodhgWVG",
  "key2": "sDdJpDXFDzMimB4SDqnUhn2oBpFkz2P17GXDoPbmNBjWKDa99q1vfb8dd8TcERYBWwyZ79ixtRgRTknxaak4WoM",
  "key3": "3kNtDUBfAfCjvgHARoD3gTqUYdsmrcE4qWdZ2592TBGUqZYqQ2W9KX212oLQhrxYzECMmbB7jw4RnAHnJrQbovb",
  "key4": "2jBhxBprFLibg79yGAgJRE6ws4zAXpZaEhrgY4rV3vYLG5HZn13YZR4PqNJouNxhRkxX1mwrbrb5TPRp1GFPtKpo",
  "key5": "3F18YPbebenZpViW3jqnWmHQrbQ4PVVaMsDCyvAJiDZsS5CHN1j21L2DBadk8EuAw92zid7d3KDwnKcYSVHmRX4Q",
  "key6": "4EBG8Z2BGjot1DTDre6VYa1zrDFzkL7T5h4LQMH5aBpcM3d6TdKMZEs6wLkHKy73AvB2QMDZa37uNRRwxpxhQcGK",
  "key7": "2Xvgtw76TH4Z9LTZq73dq8DFrzRwEKwzEFAQdgt3gxcGSMheVfyX6B6FXNP26p3PBwFvGm51bPauXFSirGfAwvfh",
  "key8": "trQJ24bC7Yx76kotC4zmEVrcNg1svjemLCDk4grm2b1LksSkd8GDgeror5J2cMQFbpJAYrFRvh7jdYeNkbhfLgk",
  "key9": "58Z3xEFmLN9neXu4Esrssqepad5E7Pde2YmBDdhgcqRsn5c47YfacdefXT35NDYQrwsnZcbRwenTW2wdAifeUU5g",
  "key10": "bdKZdzWT75AvJ7XtyD1yALPN2wEXfUBS5YRbC1tSzZ446YxpXcX7maZnAPuYC8TEDKjDJGbjyUBnfyAGx9PUmVd",
  "key11": "52m9pPuXtWnvvVkjAGpiofYXrnjiyFqg5pXjHon34j5CK1sAzPmwKDKeErGheBhEn2Qi8vXokufFujKUUxteMqgT",
  "key12": "4LJaNt9hxsWtizfB8JSPjMaEu1qJ9Fgy5HDZn2XPxC53NuBjPJ9RVkmguKr96MiV1jE5sJzRXNHCDGDymv1ghVDk",
  "key13": "2hRUZnRsEzrSqPEJCog7AwzSEdVBA3NbAPvJRRPcJKsPAooxnUTt1Pjpq2BQSzwU2c44owzFXSw3sJcPCdBnSu2t",
  "key14": "2JFDGR4fXk2PLtCCegBhJ32ugsaNQbNa7BetogomHbxz56QK4SFbU7nDsCsS3vK6fntaZnQJdUZvJukPU8U5f21Y",
  "key15": "KMY8znovWaCfjFQbwtLCwpW8wgJTsSt1LacE8Gox2HQTmpiMXjWNatKGD4YvQW3za6H2AiZnoeNsZvn5qLQTeS3",
  "key16": "2gjvWRsbBgN1m6HirCjqZxwsQoHnazEkvp4CrqGqzRTJB6z9aM9hfQsm2qEGdajGoZEHQGhdyNhV5K9Dyo6fywRg",
  "key17": "4Q2aTF7MeZTH7HmGMkGYrDb8zhmSJp5HLsVsq2v33wDHSggNHmxZ4mWZ7mHhTGoD9XHsR4fQ5HWk4mVzxraK74EJ",
  "key18": "3qkjPf38z2xhCcuLSmwitvbawvUK2tbtPoKqYVatKZfLPtQQDJNvDbNhaaGXcQH4Rwftn1Y1kYJXoYsJoZDskive",
  "key19": "4DoDycWbHujGjjmy9Ehfgo3ii3acwsFr6EAHS1SVcmN2W47qSg5NNPghWoyK64Y68tksyJfhvZkPzgCZygYNQtyy",
  "key20": "2951FqBavPXvtYKBpsQfKiF2NJiLT4bDqRePZNyRghEX5mhX4uQQ6UaxWFt8QKpG4KkEMxoxjLN97q5jVmvKYHVR",
  "key21": "2GMsiJjm73SGyHzkovDvNeDHf2VRACZoSdPxVY8YAczT6XdVAsqiuLQJ99NZFGoAFYQKS4hskXWHPkTc8uFGkoku",
  "key22": "5nS9NVZR3uNaQaifQjtiUBcuEVkdLu3bxE1rPNecVi5F1k1G8Kg1ajz2UYhXUc4AnQGSaNpw51sGiYPfaFh6kj7H",
  "key23": "48iKPDZxfvWR5aCgoUaaLA7UfRKWKHXmfpc97eS1JtSo66YyDvsx4Pfh3exM8J8nPuLet5ht8q3RNs6gp5WyCfyi",
  "key24": "4vp2fZSS3yqXU25K4N88113QYdwa9f4MV8rmPuvneMAHtMCqbBk7KYppWvPBxYaVCPNz3fNdvnVRoHQsfv2cVrTp",
  "key25": "2uBPiGxaGVM3T8itJB5og1cRp1nUHqCPqsHeRTUaKxzkKMqbPZ5qVmW16E1Q3CZsyP21CNQN7FFktHCvAnJ4NXGr",
  "key26": "DNtUxBjS79AKedeiwF2RGQFCkhRQccHuwPhmWzsX48Zi93LNnPXXyefV7h5nz53mEKL5pGTkgU1ZczRD3V7WCai",
  "key27": "4ZnCwwdQeTtx22r54pJo144s8TuxqthM8B1Ft1ELAiMa7WgPkinVimh1gG4AjHixHzeJ6Udre6E2sx4weQvQ5ruf",
  "key28": "5KhMgvZ1kX24G7CBVLF4Jfxidk2KASTrYPnU8twdVKzsNSXN4Dz9iiT8VhsQiiBMmoiMwFRk5UbaFndZA3bVmycs",
  "key29": "3xTcQDsGzYHXv1ZyhwChrwBrKdourgKHY118Z8Vx5k3UsdAk8HqRciZrnkonwPr22E1dyZD4vaXwM43rCMrs5z8D",
  "key30": "4c9dHoPam3sYUeRcV3a3eBHsUJCMeqoi7XHD9pHfXf5ML9ycWqhDEcFDYHjWwdgNR9ZjSPpSxWEksG9yMhoh68xN",
  "key31": "338eF722bsKSpJ4n7t1zFmYY862HF8K1nUN1HJSnriAkEuUB4ya3m2fKaN6JkWz1mo2XZunrs8F45f7xfbXgVVRH"
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
