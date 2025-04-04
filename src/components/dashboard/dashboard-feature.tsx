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
    "5UYy7mebNvGazWNRiyMKEUN2y69x8L29gUggAeFgN84cFsVWu3y8NfBeehk7erpzhxjYu4ZC2UATHBS1h13HFPwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCMVGW6P25oeSiny4zaXXvjfj82eikABAGdpjSDGSkasT238vUAWMRvPh6whp64UcyYNqfxhV5fNXjuSTcM3Qcm",
  "key1": "2QYLeKrTQx1WTgTm8JM6t8gnpQRV4r147oqCwsZgrNcRFM9UZsUsWVPyJ7F5ouwmuX9M3bH6a9RRLZtGvnj7MSkv",
  "key2": "59ptaZ73Ac24cLEZKVfgs6HaUhEoUhfPNRUoTfGLqdnpzLoQeFGuMLwekGThc92oYg8MGuhNQgM6iraA6L1EEshU",
  "key3": "3FB5Joz5rk4McmVAS6J6HMPxWwudgocCyCs3bzqTavzdpqmwtgbJ8hXAhd4j5F9iJMPZGMcJvMrSyAxFQjhpfNua",
  "key4": "2hzJBJoVRbALMbLY9QWEpSnaDsEVdC6QkmcZqBKXyYFMfUQyemfnQW9syf7kHzk4tfT6sDgaHGjC7CmSzLzZvq7x",
  "key5": "AWdr2HjzboZ2XjCTQjHG5e6SU68f4mPpZdeVtmXMV8zyZyi4h1Ped8Y7qCBUrL4VkTDBa5skDBDWcnEAVfeM6xy",
  "key6": "5XS7dWE35kAYnkPNhDNFKVxM2fwgdJrgNfrfEHLhuhYLLGZMTX8ZxExTPNiG5JyL2yon49Lx3XfC378CDyExKJdu",
  "key7": "5csfJCTiRL8Fc4imwggd6YA61Sd2WtyLYodWiZFCCTrZhHqr56WBEziUE2S5FveNqwUoSAYSvbyKdrkozd8zyQKP",
  "key8": "4PViiDJ96ZoaUo7wkdkc4Gn6tq2ADXEnh7dKF4H27SUfmz7pLgvafZkQQEbJdBXjZ7F8LqkywVxr3Qw6RwjKS3fK",
  "key9": "2tJu8NujDX4WXhf36y7rTYnr8RRcC1hiCqQUYwqic6ELZz5xtCnA3WRiJkSAyAScKtJuEEZaWYCnmq3KJYkWf4ow",
  "key10": "2g5nR4RZuCDWgRHMSPFe1XJgrt6kCNajVWAxS7Pu7DTkHqZ5xyPwf9TPURyZXyTjMdwwZ9yA6RgB1o4L8kh9PAWo",
  "key11": "NLB5bPi71HfuWwYXBMkSPceKsJrrarVZmhyYkXXjbh7Q6DunnL15ZcDjJMCRLUGQYKcPip9i7tpZtB5zjvrpima",
  "key12": "2iFVgwWqnzTbyM3StL9Sq8LrxuACZF7aaiMD8edFx4bzLEwWN2TvBSCNV8qMb4hcsdeHBpzZHUBfmEuSBPbPpttv",
  "key13": "4xNSCQZNbeLPbETtFZxkV6NfxFLtVopb5inBMghULSUmdx9eCRBH74nrUoeRGJ7p4wXsRfDo71jAPXoyVZazfzE9",
  "key14": "4XGspzeZM7iNAS8NVZ2mSzy5L6StesG3zLPUmTqV74rhqMR1ponkPExisEeM1kajv9GRYDxQkfhT675KbaCZjTd7",
  "key15": "4sSkR4grxsiRjqQqjyuUkkru8MoPJXHpgd2AzaCgCWGf9fHvxmPLtbYSYHA6NShq8VtJC3Bm86m4Badvv7mkehbh",
  "key16": "3ywTwVddgtacBoQ4pcsi7DpiZbrqdoEm7guVXCQ7YZJ6zLDfMD9foLfcyRA23oR69VTXs2MRPUGoy1tVvrgyURrv",
  "key17": "SwayKsPjkty4FZCYJvz5eX6BgeLsGVBWNGjGoPDiBeKqTZfdAcYY9A9bgxD7Pm5o9XJVWHTgLUwFCscMTpiwAGf",
  "key18": "264sDidd8gnAR4UhVkCTpRRWZvwZMw6uxZW3tHoBeZc2D7yqwbXSDS2Y7YDHZJmBk3Ld4JRzXh9p4YoEud8dYzRZ",
  "key19": "3qe8594QcgF6bKkueHaek4vVAoshgciGVEr8ZPbcX4oKAHvpLGbQzEqExdnYEASxSMJWxnrGfJaG4dRZHeW5ue9h",
  "key20": "5SmcAerTZQmCPznFdwSk1M5xn4HFCdNH5Ee5XSzaQdeawKyZf2yxb3usxN2o7A32e4cizhNht9q9KrxcjjSpyyxx",
  "key21": "hLLvGzQkx7o78KN87m6Ztr2kUiYdso1FPNe6NyanCMmAiM9E5iAjNKXJtxpKmbRzjQ8Z1pMAD2qP75eb7DAJFuN",
  "key22": "2aCFTQrDa1evPpwZ8Mp7Qw6ovCxKwfpBDxPF2V17xnYAZzd1i1pmX7YAk7nqwQApMAMcQNs9o1FgDJKFSL5uNYYv",
  "key23": "5QKZ4QwS2mT2BbXpjmxMJsyBMq3beuYgpPuWSDKssY4So3fqTmnLnCVTALt83DWQQUDudJ8bxaG4bhpQKU5dLyqF",
  "key24": "5ekUT27hRsEed5C7669NbXCpBPFrerWUnu2FpaEjxDjJKjvxsEjaibZqW4Xru7YendKT91rEPfgecNMG9vtHXvSM",
  "key25": "2kG5FYUSp7d5fmasSoS7AzY8nwqkwTEqDgs4EBcmQ8ihvan5K2rmhUymPugxdQgStsa6curvgCJmVMhQ9d1VHrDK",
  "key26": "aLpDYxbzTBJRoQuCcRh8kX8eBy8SKbwvfrNr2Z9EWS7fZGzeCzbLWaxkEw8n4N2KnqSmwe2UJmFsCPRxQAsr9Dv",
  "key27": "2CTTg4KWGhunq3nx6HnQmCe4h52njT9sdWEfhKinRDi9mXUkwqyXx5BmZ1MqXqAyCuGvw7hSe8kEs5oHMtV5vWev",
  "key28": "4jT8e8wRYvbNxaeK7dtNgJANwXUP8zCXjchY43PY56zSbmTAgaxzrcsp4RgJfyQr1Nx8Ur5x6TdsZKaDjnGuFcTF",
  "key29": "2TjWEvaPGaNWkRxxZ3XhhHH9tfMk1ZxMtTi7PsxvR1PMZCe7kFzJLXgBexxkY3wrmwoy8PeNYkNE9zDjj6ACNzTd",
  "key30": "VpE7oAkeyWbigjNWibvmM3yW5JuEpkqKoi7UwFh5V3ZbcBkmWf3Kf8qS8yguA7tqTRr3tUeuxWnsQdCVKNwWAsG",
  "key31": "5tTToXFxnZLv2rZhvjgL7YSconUyVpXmwwvqRN8RdR8jn6v3xjWQGYr6vYRZcQZiSiGwni8UJuW3vCdyJ4aF8xdD",
  "key32": "4AuXAoJpDtZpAz7Q1f6Zs9UQgegQa9kVjoYAqmyWepSs7nfm5UDPqSYvqX95BgciVHQWgZJ2frh7oR9R5MMRErqQ",
  "key33": "2CY8cCEwfqJGWCvQHnkN8sNb38Jr3zFnzQVuT4uDpxiQhpgBmn57jh2goefHzYkzVr5wDExBR1LAtc8xQek6dG4b",
  "key34": "2qrVYV3DLCZyoJaiCYPLE2nBcLnewbCHBJJnJdQMxXkuMoRftBrzv9c5kWCWnM7rQysRN8nGPM9x3MJKFX2UgfUC",
  "key35": "3XfNB7H4vxjq1kqN5Pf3Mq4jCWVCMcsNxSmRLrbe6q2BvopwF7yD7EszTnsLms9JxbyNC1zcU11pXXWnQnLeoqe",
  "key36": "3pugD4VKdXnECoSt1S9T95Ru7RG7eWh1YBsEC59zaz8NPG8r8u1b2mWWZ6XN8S4D8yuVnZgdy9kMxreKSpvvHnz7",
  "key37": "312dyz2qTUr3VVTMTYdGstjEnX3xSpi2bN15r98xEt1KU6pn9YNHgTWZz7oNGoYyKPmwCfNNfrhGBWbGtwaR3MgJ",
  "key38": "bi2daQtWu3qLaZPhcMFnr8RXbJ7ET2x8navmKUzzvV5uBDBwnT162xTtLFeRuE9ss2v5yR1ZjsLqs1zRP2JZ9Je",
  "key39": "2HuPS9L4Gs3a2Kdx7MFQW4FQ2E8gQm5MngeJ8jev6V8cBzSFLonVCXCr5VToPsp9cdbkFiAwb4ZNKdx6iHUsvD7H",
  "key40": "4aT73BVY2iCKeA4yh2jQ3jz9Rq59F3jhy8Xvqaz3w5SxNGsmMReu4uKBZbuYLiFE41AX5TFeJZGHrpfBFx96mTED",
  "key41": "4JQoerGjy4QDoQ7ApyEy5XS1eYSSVkwGTL6PgavaEdx7bM1TAbt8Dt59qBzuDzya7HjBYguXByXVizk1jyyegQyF",
  "key42": "3s7Zkx1PFgfnRwJceCdswCQF6stcGv8BjGtn3CwywBLah4EzduXNstXMJgKRjud4W18y5mPUjJWgpRzMYTYnQKPL",
  "key43": "2FyxYJsjNv2Coo1bLDi8KkeSP2XhvpHnf1YmQnkSCH26DY2WrGrPBPqVGBAqZz5QWajSiRDZgrLxNJex9K1QAspM",
  "key44": "2PXVeD9WKoGNrJUFqaya2saNaByQrrA24qseyvC62yrBLDZdeMsjzZoQH1afosm9NnzUn7atNzQe3B23ssYbfL7e",
  "key45": "5keGAcU1uKaogS5kZvihDAyKWtKvS6v3dTVL9kqFxfdQUoWsZ9REKoaPnahqhy2cheFre1ijCA65vdiWUDAKB5ua",
  "key46": "u3wuYWtdquV9dWZcDKbQMX7wCaq59DTRiy1sY8MPm5yQYvHA8e9xr9g9SHsHYZfnVMUvT9hBJMfYFHPawZPRhYj",
  "key47": "3euMRqUDxmmQGy37ukWzMYSQN9SF1pRm4vqYaDWhBqCsmUwwCYpGZzA4ptJ8QG7CFL5SZzSttrcc2umJEU7vRfEx"
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
