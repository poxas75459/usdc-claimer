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
    "56jGQbZR7rX6kSJJBTACE5kpnVXq93JZB1PdCfyXAhzmyNXGEVG6a6N7z58M7EVkEoU57cJVPkbSjixodAVGWMhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nncLYi4bgoQurM72tuaAvXeLqtoiKEWhJtwhSf5gMm1xyjfVsANgiwkQyv8tCo9Kn7RSxFrnaaCCSk3miM9sZyN",
  "key1": "H9Uq2ryZLNtN4oXpBixiaYB1QZ5EXfcX7SCetZ8J8z7sfeuML4Edmav6vWz6H6kjx4zvQmSpxKPFgqRHhCPrgiZ",
  "key2": "2SVJzyaLk9cqJDTrNFNxRs8QC2UnReuqNKitK9njgeBZA131S4drTTzW4AzGKDvw7xVqFva1KejmkJ75WMDCvxdi",
  "key3": "4Jbp4NMM1aTB2c8dWN6u4MwnLwDQFgr5Peah637wGo7CHtB7ZpXjVcfHSBf2UfFFV28Rq1eGtjs9RcY8YkGHsbYK",
  "key4": "5P4QAmfhXdLghUmkaH8fiPRvcvhPvrvqTtrLFgJGYyXqauAFd9eb2GUrDGYYn6NpTeo8ZsetGm4VTEMyXyKBeJhb",
  "key5": "diUytnq8Tzfon671xyx5N2Vw4o2uXL41kY3Xju5xbHVkpEWP9WYaTEbt1AFQ1fN89qtKYZ8BcGjhJ1acgXGUE8b",
  "key6": "2Bnxi61Mf6iNdDMcUV14nVVu4kTX1qQuRbWwp6jWzDNVWwU6kEAcva8uZBGvgKLmtxCLPgTzvRsmFN14DzLhhSbc",
  "key7": "2fnTRsQqPzhTtYUTPb6iAGNJMp6Yp1WhkoUuV2gy3DFuppWRZtefbrpd3qKUbJrZdp2MDfLYFfmCqCqhmo4LoMJk",
  "key8": "5LL2HAmdivah63ZjPSfqtpa4j2P6S75ufkpKusGoQxHemVGvPVhMJ6Li1SDyGejiGr1cyvgDLiBNoVJnt9bAH4h6",
  "key9": "2tUEQ6jZbAh4vU7SCrMeszfvHusqAKHEThac7RWb9ss8XdGQE2Az8GDF76AK42rWTxMLgCfb76FJfC2w4D5MKBv4",
  "key10": "4un1M2vT9VKVQRuLfZfpjxMJUjTt2kGGzW4v8SF3x3Trz1FvAfLhYKKDyVRM1BxFFTEED2SYN5VV3jsayt9PAaTL",
  "key11": "5FuXFBTSBNvf4c4UemRogiovRuT6ba7PF4EutK9sgtv3JGPFgS28nvRuTP7qvMzvK8wF7UivZUStdf9MkNprKcGf",
  "key12": "5gbUnzivCFgpVr9Yvtj9ZVDAq41p53gRURM57qMi4k5vPeG9PZA8iGXPYGMGLBBQTtpSGAQynMkv3kAnc29NXkW1",
  "key13": "4dNc7qMayvWcG2ooMxUp56ZHHxrqBxFsLzn7BnZSSfwWsAfgf8rLkjKnw5yEqqLAUkcCHwxMm7TtfK19MzU8mFfX",
  "key14": "a2bUR4AnK1pWkbRGGuAm1DMMcMTuFwkq2RGW1xEDSwK8DQgeJ3BaMCUkBMPnTJtWgXyFBBbnFMvaLthsjmkeKhq",
  "key15": "5XKJ2jnyJHFfFVBePaPfb6tzmmaTKvCHUr64yPsR1dEwzZdfVRpkHvJ8AKVy15tkgNdV9zhg4ZZZZcb8YijQnWPB",
  "key16": "2qaPPfpNfiCVkKJmmVevwVLiGuBYSVN4dKzdYkQPyXCdNR85CbxZaERVfm1z1JPMNzhnkXvnPEHmjiPTqfXADp32",
  "key17": "2uWet1JMzkbHWNfNcqX8jmSomigVdBboV9c2Yxxmg8MJBWz2FY56yBqtGGGmMfCyrYu4dAFT6fyCB7nmQ32vsZbt",
  "key18": "2fq3RuYhCrVtVpUC88YFPULEA8sWp6mvNimoi16MGg1ue9Bzi6G9N3Q8S2fukjsz7e6fyzzzmLT6sghfkHF7PxeG",
  "key19": "4imMAwUtmo88G8F51RhXecpsY89rx3g8fQAPgPD6wPRLHpFYgjXeLyUMprwoETnTuRwMBX9WmHG5U9osx9oHSLwy",
  "key20": "3grhqx1yqDnTHHdfK6TKWgpa4HY7Aovj8WETJQPQbgkcLuPPhHbMNERyy9AM7d69Jq4Uhw6AxmgDWZR2XLuGXS43",
  "key21": "2uaGu5xp8uVbYfK4J9DAzuC2skqTf1dGNuGg7Kk96HwDXMVxVZ7Xp9mwfavNT3RPsdA2brWKZ593iezWvFfXVx52",
  "key22": "4ePrTwHFuBt2FsonyTPvLRxNCBeCwPLcK5oj1U43GcDfSuBFrBAyXrDNzi1V38ZdAv1Jttf5SsH7YRFWDBnNm5Dp",
  "key23": "3bhiCLKozrJzZXuWLTNZfBZw2kw5XqbDNgEfAttmtZyTYsCFoqWFG3GXMXtLTaRNkW19QRvF3xKWheQTiN9c1yHc",
  "key24": "2EaeEuEZVk2Kuw4sCbciMgv3mxjhN51PrzxuzXEcKs5NHhDtrSbvdwbYgHQpUB5kw9b6etoQSxzUgmsGDyQsUr5v"
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
