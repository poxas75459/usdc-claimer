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
    "48R8JoBZkUz8uLTw7vfzLxtBmZRFHUfveUyaiRpSTm17sL5wNVr7XpBRbsocCB7ZgtQRaRgGEhUjU87WyEyFiTBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H8LTUGWRrzzYbxzLJfdg4QpjCesF72xAewmXSURnHXfNqnNNS6YFuhFicTGbWmeS2xRhcDEVcKjg7hKsJ28jQBM",
  "key1": "5cqEFcMbDqp8sMEt438uqhSZHjaWuxvKxW3vPXN7zwwN8dwXmqbJT2ykg3pr68mre3A5qUNbP8pkGjrwrNjtYVKG",
  "key2": "3BFAu8pLfMagxD51P5CxNn7Wz8Ma1c7u8RvoRpLQtTMNbW8nyjcphmGBXtM5wprb1kvyDt2okDmxpm5LwYjd86Bx",
  "key3": "52bU94dgH5Vjsrf1RawvNyHunHyeHxVM39vPQQBi12PpYntbiYV8TEjQKcvgnJZb1zcWrADXQwRq82kQU68EAuw",
  "key4": "5ap4SUMd5tiNJD3mbViVDt9QjafoeVqWPt9rNTDSXUkJDirLNKh2jRuUm9Wk8UwAjhXhbPKsAiZBUbdBt765vHPu",
  "key5": "4s4m5wjoCkSzf4qng2ifja8VNiemu1jZC1pZuDAEV5tbAgEudrMkuw2ukgHvcrp9aWeyBu3LUQSdTnCS2FmaV6Ls",
  "key6": "5VcxpHZLusqDi5wSoSRfQgW2kPv4DRZxMf1MAqgJ3bA32MF8aANYgyJUTnwLaFoSYPhtu4BAKpkSkqDdPirJ7c5G",
  "key7": "21orGEDRdvkJtFa7GixmVnurB4e2CvYGfoXcD8kAjQhXDsMqBGjexhP6f9qJQcxg6Xe59av8NqZMRBm5MJyoUoaP",
  "key8": "nTFC3p5zYYLPFN86Sw3B4JqiRNHmpLnvrM72qd9RfbCNXawCg8s52nHghUY8B81cykC9B7Dky8aPcG1xdrwjJrS",
  "key9": "5YpwBMbUf5YjAzK32G3RNod1HmCDyxYkJkEG6aCM918jJxL1f3My6G3ZDoBpJK2xx22vLzD6qGnZ6EwWHKwtXJqe",
  "key10": "634Up1uWSF8L5fF7WiCLyr6nYuLen2i6ZDkKeL8drDLLig7xiB8WXBvBq8yX7FgA3NCFr7UVjbL2sQCsfdrjRaLg",
  "key11": "58CMz2UHYjx2gaiU5j4VdKmizjvc8GmDFVSJe3CCh7UiGHPcEBj49p79uiCm5iDaPoS7nJ8DRFR2q8QfJuezhMVT",
  "key12": "p7eUzT57eUr5Fo8bNdRuy5niZgedYYxBcJ4TyzEgWPeY42DbXQjUVR8w6mNaWc3SqbUezbkK5eV2wC34dXwBQkj",
  "key13": "2nBjaPkXMEFxzxY3NC4UXtU3cBoyufLCvAiiztgp48k1ZHGp58prfu8djsf1xxgF82YuJhuHRBHWLDnXD6JNHuuZ",
  "key14": "2ocaLUR9NdW3oTwXaGet5vKSFiP3p9ArPfNfLhPBEPaJb3A27f2FAXpTNcFDhjXvd4tJodgS1CCa4brLErizCT9",
  "key15": "YyWZVEBzGSvcjFuPm3C118pJn5UTisYqHGEGuBcqSrPuM26PD5NgjkwuZeidBEnugqehdAxXWZeB1JrxpcuPzQc",
  "key16": "3TJGt9zLSuxA6nhbjC5GL9BJTZ5ZzP5hy84xfGPgezkQtbiWSpBwAvLRWGBWAKXAT7vxt55UYJWhzWf63fco6wTR",
  "key17": "24rdi4Lbo7E9uKqBa3dpGU67Pi2vUXCwGtd9bGD3uB6gpzrDnFH1DYooaFSaSkubgtZ5pUaHTbG2cJXVK6vhKQ8K",
  "key18": "3QHrLYYCiZKk8ZQFLU2nQpPEVRZKiRxBYcK7i7jDQ2adUVRUWE4Wcn9mDbVPraSGAxHPWW9dB4kwtXnhhMPAL5uE",
  "key19": "4dnMRNsnPLc6zutwfALRnqRn6MN19VKrBUUTFixG8woqCpa1cZMQ3dju6eBotajrnfAUotKbi5HNbKn9myrg3qBq",
  "key20": "27raVj9VF2Gv8aLNv1z1pXQCwzky9xEtCGBoxeuQPecofkwFBJrbHovSrtmkKGDtmNzEjhzeBtbDk8RADNh8Vwnc",
  "key21": "5FXTWwpPG7hsjTSeure5C6bdusCVmMZRSpsw5FjCdTGwJmbSy87mFCFTz8bVRkQQXGJz4AB4kaniLwQBCi9LzXam",
  "key22": "4D4DSKXEs438y5zd2iMbSvCA87ZqxeGtZtSb7TSW6Kjc8M4jNZdKNvJrqJAgaacbtRjNScSM1RHcgXamujVocUcT",
  "key23": "2onUuzBrNtUE8H5L4JCoG8mVEB3dVurnPRSo276xhp9mCsa1mN68swk3pQj9P6k6aNM19azqLNmgZfTkrgHmYndW",
  "key24": "219WpeyWgRFRAPNTuWVp4buEAPEKmNWuVrTu2qFRGTF2EPgVKqjd5pW2rY7FQ2FZPo84zE5rXcs8PEhuEmy4BdbC",
  "key25": "29yDwnCNh2JYR1kRsFNEWBUr4Dqqh5Dtym4i1a9HVShN7wD8AdvUo4qRKWQwbBkyQchohFTGdnkJHS7Vka14Ur7c"
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
