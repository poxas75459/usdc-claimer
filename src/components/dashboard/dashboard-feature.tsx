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
    "4PPB1Yc92RRpKPeVxofCPEWqoM1SiRqSGRTNR2U1bhcxbseM6c2hvFoREW54NLH5i1PogQbU66aTJ6sMSoJDjPMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DvLKH1LDYbiwcaa1gnzC77xMxnyK9KFxmg4MTfdohgYF8bjNMLddeNrdo5fJ4d4pZNqnTYF97oKFMDcJzKyN5VB",
  "key1": "4PC7CARocFTJph7SSgamCuTyVJseHoM3mufmCijxuMrJtAvoEZ7PBCb4y5wXybdyTLCCqtjv23hsC2BHLWwehfdP",
  "key2": "awnhk1FqNt21yWRhyH3ozairxez9A2mk6NCUi5cb5YSWUyttVk77YnVmR5pFzH6Nph6JZWohfveG3StatR8pHFB",
  "key3": "3ibRU5YoQjoTDsFK2kcn19K48ZUcHbLLRCvAxqaPjtwAFir1ifrTquyPtQZ37cLvwxXvjUf2nQDABC8xjoETQsN6",
  "key4": "4AyGQFKJxm24QHxT5GJCPPNbmcPiHgtrMiyykNmuXYn4LXCVAwF6ZUWLYnj4zuh5jpcvmB8KcABcuVvKea3aXLqE",
  "key5": "j9X8NEw2E4Esn6wFVpkfXpVcUzPZsNU6chEifHAAsSja8YiQmDZgnvxqE5A8uZyL7JB2ewViWi68RcLm1TjDER1",
  "key6": "5jRG8xsDD5fFhi6oDzc8QQmfd4vMvkM8kDeRCEDGyN9YoyNw3fDsZed3ckyJdDswL5MaxvKrCwqJT3d1FTWddUk4",
  "key7": "29oJfTVBNt7bYaw387kcZwEpsHqLAMvByrk3AYLqXiKvRmguYbCgFs5m5r2Biihefm7iLvCqy52xsswYZ9VdxtiY",
  "key8": "dD3goxc4Q99jisXVsJPofkpa7HURfqsqb5QbDB7ER4tseguvMpuWqMjs4pr99xdNXNr13bsPc5uXEt5hG1A4bFe",
  "key9": "29WyGNvkMyWxK7kcMpDSqNYf2wvcdVJxq9DEp25XL1ETMFn5yWxo6HKJsNbzuFboWrHuaoRBhmvRH35qs8F3AZxt",
  "key10": "52W3zAtZEXKV2kTLfTMwnMJyDD7WkLUxaHv5A4cWajnMxnrX2DDJUG5JbMyZUzsFjWvuqE6DMaqYj3z9kSPcCDNA",
  "key11": "46FRZYouexXQNveEt4ZZLknPUgigQPgwiMMt2kX5zQAYwrb5XwY433oD3sTZGUnEu1MswRPmRSaneEsQHc8ZE9yt",
  "key12": "5bEQYJUr1pJrm8iYXqfnaX2RyXbveJC8UvzKNtsrZ5AHqWkn1u7xRNX4gnyQAFbAo25ZeWY8rBvrxeWTxWaXHiGG",
  "key13": "5XC1wNqwvmg2HxfwSL5QCuLu92swuTBw1NhuoXUWTsKrr1NernG3fwH36Q2wLopA9ugVJnqjHmB3ufFjtbj7BqY3",
  "key14": "41YeZi2TjhybqGZ59iwVkywzQBZ9JiDUQys8Qv3BKkkqG2h1hJihiCZnosrh4Um2AugXKrMV6MdpJYTMT8urRSKH",
  "key15": "dFJrcjDc2ctUSqWcFZ39u75udpQgVbpm3jcsQKRGXU43ao1TKVvfx2CTTzaC74bzySHCZXKLhAgN47sRFr1qXaU",
  "key16": "3PZg3vK6Wh13FYj3nCkwUzPegbybxJRLJzYgBByTrafBonorFtC8bxRepuH3xWcmMmTnPu9oiu3d5SGBFqsBmrpG",
  "key17": "4cveCaGogak9bu8Tkbn7DqdkxC18fsD8J5jJsrF6WLSViXpUwBkva2gtDBaDNp2CjEYuP16hfzPyNyd9dprDKsC1",
  "key18": "3gxovEAMSnqekdr673fEkgGptkoWzWknpSzQvTtSxpkZ8tyjtyUFseag8DXLGTnHkznvtn2WGzsivLjvSY7yoRcS",
  "key19": "4SFvwjLrb8qGT1mzGkoTrrJAm65JKxbtpJYJjL1KprQ74dBYkEbC2ZBWpjrnP8LxqFappauFS6dgbWz2nGrwy65y",
  "key20": "3GSLZWYtA54XBEaD2jDhiDA4R9LVW8ya4rxm2JiWQFuMu3SgYd7tNNX2E2dPobnCZGvj2DFMF9nrsJHrroCBtRVT",
  "key21": "3SCeYAnuvpKrHSiwdqdiomY9wfj18iC3bZm2bXDckcer93LjWjwBCpgbcPDZvRKoB4YtrnJbHAu6d5wEXXLSsjAv",
  "key22": "53ys2967Kp26BEgrAgS1o6L1EKn9vHPWTiGfFKx2ukqHjCgjXzv6Qg3ER6CrHmNZXTBUTBCV2vzrifoUymbQ91pe",
  "key23": "sQVn8UdsNeLK3GJXkhot6JPUknxKzB8QmQeoVaTnt4RjV2UA29DLqT11xTNe1VmEdjanb6NhwbypokjmVyQovfC",
  "key24": "2UbeqNKkK7QZH39mJ731EFr47juFZd13JoUssKrgfQkUeETooH1PuYdHbAxGkMeoarUB6XfibHf3RZD8wCAGhrAx"
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
