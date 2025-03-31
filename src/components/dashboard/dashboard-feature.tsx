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
    "5an3vXvDe7aCKtfrZkYc6jBvCHJNqFvV7817Ar1kQdCUNNfPNNnowA6iPNEcQ9Mqe5Ds4itqDmLxHwnHiRkj1yUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W7u6Kxvo3ExjsWS1B4KuXGEuniDg8kx7ppuGbYgzGZdWUQtHgrq1Ju5qfW862Bx9eJDRxiEhptupDUALkrQdLsp",
  "key1": "4moSQq3uBQQamrpfz8TLLjMbQXT3k7Z9gvw4aNGGpASGTj86nRdXM6T7g4FYdvBtr5M4CuWcTWUBuw6bPRRxTDmq",
  "key2": "278dfVURLdhxALVTeiutbJf9FQQUQ2bZrxgPZmG9cAvoLv8yY5pW5jbPHCFHHJHNEAu18yBv6TA1mE4Htswe9jdq",
  "key3": "5Ufehxmk4EHyhjFdHDajnfpwRCveVXjFeBU3CrTuZz2KQAgDNFshhajedW5va9BmH3vMKcnVpWGbPWCdpEaA9U7E",
  "key4": "48k8zNe8uqi3TQDerUNPxdK9Jhod97R1WNkLt8skf8SoahwXSxDmjBW6pmdsedqcPoqmKFCsAsGvRGQcJCbKQkn",
  "key5": "2cUWQw1ug1juEuX33qFzLRe8a3z3nqfdrJVk6Ujuc45CfyJDDTkfK1Hd9eBKruBr7bp52yDKFuroU5mJ6PbXWWyB",
  "key6": "2Txf7ijZ24hbrQiDHtcUpnWAqJLLNpKkczjCZ9asQ63DNp7tMgCvCJPwVzCjxU7tRG6otqtiD9nCjjTUfAaid4Ho",
  "key7": "4bw9nYriys3GBKj1b9bt1rNkNhM4wxF1LWe4kYgB8jwmn6CTbFfPf3eM2Yq1HyuUQLXpnCWLtsZyGqS5Av4LE5CJ",
  "key8": "4DMPvK6KJj6kbCX6JpVTQpxRZczN26mjGLZxTUFSpdBt6iqqNg5bXUvkwpSwxJhtPmoaU55sUVSpJRmTU1N2pM7J",
  "key9": "24GfkX5Yu1K8JuT7GaW64PShcqV74Dq7eqEfR24Xk3WHLsikMeTPyfymzdaKo5WeoKVAsKi4UhioF9vLKR4CEAxi",
  "key10": "2BAWofsEtu6GrQiP2yykxTqK8up2fq8MbwsuRnD19coKTMWjiQuV7uR64fPL6NcLkV3ikeKmoiedbib12urhSEkg",
  "key11": "2yoApnePkvU3qyF4JLaCiYBtAzKfAxQ5iiv51SsVWthL7uxywHJknv6kambgMfeRkhTghEchQHR6JyxzwwsFjugQ",
  "key12": "54YLviTnKc2VSuvrfrkraEKJrfm3Vq6R9Ys9S1EzoatQen84EVWcTFRvcHowPjdmL9JEEB43H2eZ5vWpodCchoZA",
  "key13": "2gxELougzkNZxi13yhnd5g1YRr3rXBi72bkZ62wZEZnovf5Mcm8r9EaqfF5aryH9wfNhZ9yjEzPMfUcvnK1TLsFt",
  "key14": "5tCGG7qW4wxeYBbtaGXTfopUBcMoXu7D2Lzj5m7EXRKEbwqqsEwNrgNd79ehfUPmNWimQhGF9hF5RiL9ibJsVCRK",
  "key15": "3SVvWW5H5F8kNRSWWDL3didrZH3yUFLNx15zpjcb7UCXuMGNHRHCDhFVuKSasxZnXoQirxT62htWCPXyKwCsAyrX",
  "key16": "4M2jQAPvwrhk1mKpr61coW4pefrV59GQnLwZ28ixetc9KrdZvhum1Tw72K1E1NvwgKqBfgJ6Qnz8kTarCSKEvCrZ",
  "key17": "3CqPpuDnFbrMMuvKJHgsxgRUn9ymm7WdGC9zgTdSM7RAQrcUbfx6xbNBBmZhuYtbo38R3Eb1Yc4NsobMsDbXFkgr",
  "key18": "4Us7XcZomV5FsPF9urvchi7DfeMSzCEPkMy9PTndY4MnaBvoQ2RrucXwGsYWMkWfRYsqGP1rCojGupL1zUMipRcw",
  "key19": "5uvuUnpFs3kWDbke48uNqsSpPipw7KGrFXeRDS8mhXVbRvzycd2JebLGstJ8sXe5VvawizwHVR7Z8Z5AWP8oPdAG",
  "key20": "2WjwKgAZSRkVyYPVJRsD8aV9yeXbTqK6DguNC5nARGDx4rBqx8YNc9be5sdAbyVhTmiuLfa1HDvRWb4a471zzPg",
  "key21": "2YfvQZ4kzD9JDKAZW2r4Rs2fw8wAASJ4KVhB7pPFADYAUCmsvjy61a1NDwP6ScY6RPHNXRa4weUcfED3kmSUNXM4",
  "key22": "hy6KKfA7kkEwS815FozoZ8auQYEZ9tJYCwWujyDEsmDeMT1FVjyQ8ABxjVQBQ1kQjL9h9vG1fFUjNHVFsV3wW1f",
  "key23": "49rXcG1bhhZ6SN4BqHjmqpBNLBkFyKRzWnSMuALKSPFYbp1DPBps4WXH3WsESw2MTxXCVnVe8sBFnHoPaCgQgxqG",
  "key24": "2sqAvJNcfa1kaLVyYCijAkdiaNLMczXyE6y2AcHrd3YQVwNk8m5nk6CcfYPHb4Z89g2bcKipE2o8rCWMUf2LBHcx",
  "key25": "5TFJzjKCNacYRKbKRymdjfkTtnCAo6u6PhHm2Kqs4oFxkRC44PyD1WxYDQYaJm4EVyGx9ch7h8qdP7WQFmiVUA6i",
  "key26": "58xG7yrFJyHjrbZ5ZrYDQwKgz9FfKwj79Fhw2Soa82RJgTfpYcDEbDpRQ9usaq8QWGrsFEhS1TptC9dx6qdrjZC6",
  "key27": "4xCc4jFsHBAN6Sx6w6TrwibVdC8JvCJUg5FmNQ99hRdUjt5X9ZAiyoqHCmBSf5UGeyt2KLJYVz2t9fdYE2NuBTak",
  "key28": "5353pBMhjLoBviUChKV8o1gcMH58PQN4pYoGaphSu7NGfvkWo25Mr99Kj3jaKrvRocLYFPAesVuPVu1WhsDNRUfb",
  "key29": "23KpWPcrT9J2jbMVGS68bVeqUF5oG6FmWnzUNTGcj2TNsUTfThXWczgRDT3gXjEqJXxEFDQDrYJ91231bhFm1Em7",
  "key30": "3fMJ7bfBtdmXgq3h6pVKDvPc8EJEbb52mBYrh2dxZ92Uaxa2PP57dQz4STyJ8XhcbYZUyhbNpq14gDV9YMm4SPep",
  "key31": "5avpFWBmkgXsget4S78dwpR2GSGdbPBoHxkr8sU46TJGbiwdQmLP9RrsL9Nk9C6qx5WVrz6rr4M6UTDE5cMu32uH",
  "key32": "qZvxtuZ3ZT8KHYtxYKmpjQDfZ29xgZYsSezLWfEtfxPBye8qWvKp6gSHV5qfZsad1jrTK5Y6rgLZraN6iu1BbT2",
  "key33": "2PXRFdH4rR3WwPMHzP1wUj5dxbqS1CauuRZepZHUcL9GfiGa3X3zx6e46xUJ1iAa2oovN2ZYVG72mJJNRQVD2P2Z",
  "key34": "4B97YP4iR6fDKJAJK8q3nsFLK8eb3rx8XW4UcKU6qq83VSCyndWhQ1VfvvcvygGE9f55ysuqqxNf19xrvj4SQnqy",
  "key35": "Ao7ALy95u4W3xMkerURSkQwrKAfnRAb9me2Q2qPvaeyydU1vE8NPPy8X64XzjYk4x7wX7NqBnpefaTt1bWwyHG6",
  "key36": "3L5yDkAq9QSPDFEspGZJvThxfxpZUt5iiNLTSV6iJcyaP4XBgYZoiWtoWsSgKGfaqEhH4ttzAdMqqjLVgdryLMea",
  "key37": "23vxNFcJvaEhgiGjNM4PQCT4qMPxa1G4WkRCGbH32PUaTRJkcUsBfcbTGRC7diE4dPNMAzUnf6gmA44FWFYXdDcp",
  "key38": "tdLjFBPfjJWJ5Zo5VysT7ntwumcCMoSg3ZhBCADFNXHk9FYB6rGnTzaY8ppSw1aGELQvSiA3ZAS2eTbd55TKvnw"
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
