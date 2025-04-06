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
    "uicPuum3h75Kxtb3PAUBGZmCXgAAhgDAKjPmsu26KfC8Jm8CZziBxAsS4C9p2PFTUeodpmcEqbz57KYYutquCWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39S8Epfft6Qgng3ahFq2dubqLyohAug7F5gtJ9GP6wQrffMwt7uqbg8d9FQyq8QPUYSJAsLXSE7sK93r5MSfTyr5",
  "key1": "5VuLckQys4TX2vSft7hDkkehgLtH4KyJPTeNveTRcfztKeQxbrwQ3BMBoT8jBXN4dHGJTYCtYh6ys9TTfHifg9n1",
  "key2": "5VCmxNENTy3cukezPmToghwc8JZqSgYDk886n3MBKuKSttpuWidWfbfgnq5PwudjrqS2QaSSsxVQTpguUVVk7SHJ",
  "key3": "2zZATe3vUiuw3QE5X7HVmPJTfgRo1ZyCSNKDs3nhCx1sweGTLu57ujQuQ8M3y7bGAK9CHtn3mFMPmkQeKEM5HYYm",
  "key4": "aYEPQTNePEXK6gkSxJ7Q89YnosAyVyMWrJev879LQyBBCDrGoAAMbRbig8xemZPEdhxF2GHL7gQwBZ3pHZfg6dg",
  "key5": "4ShhKwDjnkBgjw3eEBjD9UtPTJ6AxmFCF6shNt7ZMtVqZxiinXjNhvWqtGbgZKCPCVDBqepB8fGdtTeeVKevA1pQ",
  "key6": "3wke2ivnTuNjCg49w5nebWjnb5fHwCtmohZ86hXaPy3qs3eUnQe5HQzbH6C9Q1ofotRcsJEqSGiRXe9tq8jLY2LE",
  "key7": "4iTwrjcgXjvFmiYewhXXGor471RbEn26A1tZpw4saEaowsxEZWAXQVm3JMVBAsYGEduUL8zNfHhScugSwZGXBEC7",
  "key8": "VBMtu84dUCrJ4rUNEMCkMSwFmfBAjpFWAoabhgUJDqtXYDkAtSe6MctmVyEWUB4CtAoQFfnM7KWEmtQGBLcfnmH",
  "key9": "5ck2saWjj7oXt6a9DZr6MTpCGCdTg3k45ReTi41LRFbNiiKbP5djFP8tvd4yYFpuiVicioE7KsDj4NAcJi1DXRmr",
  "key10": "2LHSjH3YsmekgZbXRt7LoxMch9GWNZH98TZkQizp9RujK6WdXvcMfCuFNZD9gQVACugV8WMPHaGTAWXvE7aTE9EC",
  "key11": "2ULAJABhhNvj9UR6jYgaWKPyJdtLoMDZEf5shhFTUSr7gGqgUjvwTAe2bBEG27JJdeSzRCZsg95wdVAtcKAFbDgZ",
  "key12": "2aid6hLK91TUsTQXYVS1RQj3ZYwvtSDHYn4mQrCUDYm15gVeoi7j1383D6AqLGKdRzo4BEk6SqrrAiVZTMQZtxvH",
  "key13": "1YJxVG5k7DPgRYLwdrWwPbnPY8xLjWGP6mCdf9xpFdJgttktnbJEAcn3p3aCwkTtCB5Czdm7qnPNJg9idmcacPG",
  "key14": "318afTMnZV65GYiREDbXGnKwNyev5Su392ApR1KZgXwg5Ji7Yv2zWD1KeQiqui3pgHNJEFgjvj8HLDVc5VRT8Mh3",
  "key15": "2VNv4cp9D2Vge3sYUiP4LDcWRXpYbdBu4LZh7ca3jDj5FbVT2Uo6MV83K6PF9bx4szhAVKBoXTiKLdLpmE16RXfY",
  "key16": "4sA6pM3kirgBdueMsqMar9zKFsyRJMePeakyo4q9A1kjmmGodd9Rtke6XcBvH2m9suQngPJkhjGHnUnBEnQnimVQ",
  "key17": "31RSAUJkEB9WqgmzUEgvSiqFxwbYDwF3WQ3jseNqN6H87tGMJSajK14dRt79TPsFTjdjc4iSGiNvi5ykRGBroC8r",
  "key18": "4PgEgWxmaLm3bkx5tUDJ9Q5hbh5dbeRcEy1QYp8Lcbqi7NZhPc3JXq1zT3v3sS8GSYcnGRvyEg7bjWpc9gEtSqEh",
  "key19": "5zbeo8MGAGxPsXvwMaGxvYMwegj3BjvSGejCnDDBgkJZFNvotKN1KH4EdTFRisynJDsAz5Re4hBcdGpp4RYgMTg7",
  "key20": "4Sv9vNTUroE2cNoxcPuRyoZeUx8EEeFAkVJksZiFfraTLvdACivXEWHLuvSeCCGTNZ65gqwxV7WuU8yXxxgwMuKi",
  "key21": "42bHdj536wDd39cA76FkLMSkz3vAjLAd4pHo4of4vUY5sk8TUBBoXbKxUaZghTyfCMhrM7BhWHy4o86uYFQG5WNe",
  "key22": "5HwU21K4UBzH8h229Wc8tq7Q3kWqytJNBohc41JYgbREZXJoMKy5Ettgi34AVXuVdxBv8V4oDAuCwKZC4h8t2swq",
  "key23": "wXSJKRBawoC9Z9XS1edHwZ8eUSMLNDeC37tywSkD3ezbxC4wso23DxhXrJmjBjjSdm1VxUByHpxEtUL4ukuiyYA",
  "key24": "ayzNbU9dFheo1p6iFo3VodNvD6mUqBqZqSfJqxj8zc18ofoNgE2WQkWj7aa6W4RMwekFADr5XasMDHBeNbfDvLb",
  "key25": "2xoPWXgPL5t31y6Xx2GKCCivjSofRZ3W69XcTVbAo9bjVbzYhberSNH92FmRpJrSAwrdjr3u7zfUE2AWg1Qm62oP",
  "key26": "5mL1MXQ2KPZuXUVxR18RgjhDMJktYWsdTJPLRmD1JsjC9i6P5JrpsQP2dbQ9RcZjs4d28X3LrFrp5mUdMs6aep6T",
  "key27": "L5J5kUfWRhvXrRSXcWUC9W2f3dSk1exRDqKmqQprPcpy5948SyYvE8KGjq9pWgWZyLrxzAGLxRWuCMpV3cEz1p3",
  "key28": "4sohKY9s6s7VJaEajSBMtYL7UEW3pvy5zffrsntzAAwv4ic7zHMpwjMvUxZLuWB6KUneXcU5atSM81NVLc9Jk4Md",
  "key29": "5Gze6qC9md9HLgpJv2RL9RrUQoGW1ZHY5Mua2of6QWrpWZzeGgCFCiA2XofPWVixJgKo8p3iFAAoYVKSyao8of2g",
  "key30": "4g5xB2w5at8bgwM47opSAxQVXDyvFf7Jp1LsnLf7rfnvNB6SmY3GgzWdz6A1KNvGksyxmwV3gMXdzZn6uTsKYYzd",
  "key31": "47AQn19Q9AadB14cLZN9WVx4gVpwqLzxYKqvbe6ouZukYWyyUgtq88Ubm4441f9wDs3g5cprrDuzzDdY54eXCqTt"
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
