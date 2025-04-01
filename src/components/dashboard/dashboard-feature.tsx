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
    "UYZsYeZ38Ta6PdF1aWeQMbidCKqCwpFbbFtywyeHkHX6J2STs7EZTJ7mJxsmaaVFKHNwRhe3TsEPWk6RJ7JdqT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BhNkYd9Fu6y4CpvsGVrJWNmLWWGrynggqmSpk2Ui38UPtinMjeYSB1ptWoebrbEBGcSNTWYp7f5ny4wB1KnwiZG",
  "key1": "5Yoa9akY1nRjUavEMTB4529X5L4XUWjSHPwc9C6LcQ6cXLoANihguAfqbMY8Udofe2Ziorox8V9sRYBzfFKk1APx",
  "key2": "8Ht1u7c3ujk2BuLMAoFdRMCGLDnCkXGYn6SiKS8KUmstN8S3pGutWjLbvhk2h6DYEB1j8AzksuWgjMFdM6uaGsU",
  "key3": "4K81dvjMLwhP3Pc6cY42HTj5grX5JqebKth7cv7nvAMkkJSMQsLdZBHHzgVQndxnegw7SuyvHP1CU7VZ8DoRPdZD",
  "key4": "2gqvaJUkzs2CpVsekT3p49erryf7hkq8oVRoM7QqvDub7eexVwU5PLkAuPyWuTyMZu3meqcPnArwhatif3kbYFQ3",
  "key5": "kSbqqFieqUkZrKB3YKTi7Goem2Mu5R1qXR3qdaFzhTYjyLuHMpYoy5o6183M2KFXLccbJ9wJPtUQECEBURVzkYC",
  "key6": "4eqB9kCVc6ZHisVCnCfj2bezX96uPHhmS7nxmFNFpS7bzQ1y1FbdxVwwV4gKDGnm912zKSdvP3QFgoDJvaoMUKZr",
  "key7": "5L9ffJEL6fS68svGWHApAjhCED71NTSmLjhnn2Ueq1FB6JC9pCM7YAy5o3pGUsABkxcx8A5oNGx4iCKQuLGxRyAU",
  "key8": "4PpjBp1Zn9UiYvW7k8QyySY5Nr8rvPLjnZdLVgP37rGTK1f42qvMb3jTK12yksLvavrCUPKZk4PAPM9TMsSvVyYj",
  "key9": "3jNkG33NvP57XMrTxfb5FGP5KdKNVqcqi6CHHfii9Y4Rb8T5Lx8CfwucMHuypnAQfRrATrGDrTuaaVSWos8A92Uz",
  "key10": "5CEntooo5xqMLDu4WeJY3JFYCfg3nw1v5JnubaFZv8HPwdFoT8d5P31egMxYc3rfovNnmdvArvHrL7Q7if6XcWxg",
  "key11": "3U3x2Q4dHKf8ciZ7u9uY7HegL4fLwnwUECs1yFRQc3fbBXvW2DVCTM693jaqND2xD4CMcPTZrdf5Fpnjdie44AVR",
  "key12": "44jG8EUSi1MroP6cXczsYF8MUiFbSaV9sRDNZNs4GFagCP6AfKnizW76hJmNycwdDYB7uJqfBcnueZczQvj8LgJk",
  "key13": "uXrCXcyPDYmDRasy8X4dEG3iYcCcmPptBVuLSqw54ufzk4GMsWCcR7oweXQSML7JD57vAnMoBnnEXZNwzMH5C51",
  "key14": "5jKt2bJVhU8GXiBWNeYGMe4VG6VqeKkkuSHt4srkQU6oPNELNMa7Fx8N7SUgJEQzVYoY9d4emU7GE6ZkfcPbT3LC",
  "key15": "4Er97LPpA6Dsp2UM9ooS9EDfe1Qt4LXQe8reQfmK2JKLvwbVrMu11Mpt1mBWm14V7jB78unwMb78NqHV2gm1zgw8",
  "key16": "viyNsFafu6oeJ6XxkzL5RB99XuZ3QZMYiA4Ajh9XahPkJVrzCh6oR9VLCtz73jtkrjAL3PkqH5JQXuXaoBRNTe7",
  "key17": "22BL7LzYXuRag8TPHkgpf9H3Edw5AExPPd2yiLLFGAaxhBoxBJruPXBTzTdVaL3hyJQSE6U9sSF4FevKifBZc7t7",
  "key18": "5F4ZYAwEzxiuAfjeMfAfiJb9nRfDniBDpttNVQvaXkzAVW9ZdiPTLgvprtYYUezo3YKtxzD3Q51huyhmzCEWAutp",
  "key19": "5KSEZZ5GDdKwFRm3C3KLL7sAcNjkRqZwt8CgQVuHrSvjKiq55VvHtnYuSFyEzPMsvd79ciAm7t7QW8skLbmUFqbH",
  "key20": "2H4EhqeBZ2EjWpP4QVhqq9dNcrdWq1bk9tVSFUtatV1feb3fx87kDcNCkiDBqphCn8EHZioQyHYYgKNBnCSbUFce",
  "key21": "4o89X1FnLVvw21cunDQLoJDP3AgDXAXAoPtn7YDkf1kY7roYhdN1xFvWJva6HJRZo4kngcawTSh4VeD3ng6jSAFp",
  "key22": "4B9nbjBU2eAvvwPrFTQqGNUvmXXRvzJfMpYzT7dNtzmiP9PcM3L55vzWh8tSw8isUoFLi1YgungFNkpeK4sgWmK6",
  "key23": "EKTVTLQwJ69DiC4iRGYV76zXAUA4tbhVzab6crQtcMKeUSzScX45DJ2Q8DH2kQ4JcqzJLNrgYKcyRXWTbuVtxTU",
  "key24": "7Z4PsJhCMRAmyeDt1UCqT43NKbSvwt75CgndwcmTcmzS7ACwd72xL3xpGMgd8n8tN5a997LvtFeskvYkZ8F8jbf",
  "key25": "poRJm5pbCQZNFsekaxPwD4Q49bzswZ9fvyp2xMTWaz8jQtDaWpuLqFQcfNfjUAFSLwTfAw9icE2rLWAXQhpq4eP",
  "key26": "2XxHHChyzyZo8F4j6JYjTVaQqitCmEPgyi1uy1MunGB5ojzbp1LcgbvpezLsTSE9UTPigo2Z28Mio1fiPKpFBSwF",
  "key27": "55afAxXMjuoe4vT5hjYjCG1EaHmFBgRMWUNssD4b33KDTCHN3f1PFHGmsmaNzmVPwrQCF7S1o9ciZoi9QaVSFD9U",
  "key28": "okBb4CLdrY8J5gcGckGA1Wiuji6TKpZrbAJabNUF8eLw4BeALR8xLMdn4enqThHjhtDdVGcqYjgna6UY7rghNQt",
  "key29": "2dop13nJg7T1ZRtrtxgg7Y3KqjCBbQViZwBi8hV7xTiWfnJ4EtYYLLzAPzHw4pUT7rb5Afy2wDHr6fZp3dHenYhg",
  "key30": "4SLdkcBWSXJaMXkn8tQknvNKzoB3hkVaxnvJtDcWUqUXjVJV1YwTJ7xpBEVKrvGEcPV4d2rWjWDzDDDRP39RNsWP",
  "key31": "XTFhDcLTve6o77dK5FRibBFx9bggPmgGTdXXT4fNhqun3bRuBAGvrkW1ns3efuaRMvJjdqaCyzhSEXfNvMpAWMt",
  "key32": "2dCmUFDp3eqq757wVkmUBB5sEF29nu1Rb4VwHh1Uttizqqv3FJaHA36kEQJtYBGGPFHozhJWkbMUEcArqSFvL2gN",
  "key33": "5R3vju53HUWddocF4kAdcT9MeX99zrgNvSfgv3aJfqGf8jrPWBmBfFWJcB7Qawir1rAZdigobDkSPC53852ezxVr",
  "key34": "2PJVzc79r5XhRkRqRCc3eshF9DaNx3qH28WxiduzGfzGawKaBLvYipwZgjoF7W9EqMkZrkdHJQJLJpM1aBFpgEwD"
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
