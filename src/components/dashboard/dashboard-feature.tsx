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
    "3bivpS3oUN6roo9h19iMJRQ3uY96Jq4WBuDwUJtAhof6zLjHF1qqFCHBN5dCgidLrYwcyPLvxyKDMSbvBfkv4EAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fBgDN3gCVWcQtxZqnZqsnaadaMADzrJmcPGLyoCB88kZn1hJ2DJKpACVf3ddnmRF6rsNaFW1LyGioFuUDJX6xBF",
  "key1": "4hJzXqQoT2DszzWB393F3fGSoxsMgDC5kTBhbK9bJrj7YsJt34bUurE13nEAfo8i1vzKBmEfiEDzCA3tDzNGedC8",
  "key2": "MhTTYE1obAgy8rFVnF71d1kjWA3ttHMzPqUXM6MdiwWnK93RxEUr4tgDga7pDXFNtWjBBxkqhDZ73vUWuzb8az4",
  "key3": "44bPpHkENnHkeVrichUH4pmxT5BZpaTsAHp3go3EJSttLKVgvmqJX8xsAgBtR9jGQcXFLBDBsmr92V7BLrccRwjS",
  "key4": "2aAoCsatiw6pX92fhxfR1qdtNtCyQXBKBXuWoPmvribXia4P3J4jn4hY2AUQAo77EjQDhtwoWYJPJu7m4TefKt2W",
  "key5": "4YBfrRWvVK5THQUJQGKEZRwN1Hq4ZuxHzvYENcdDNuMvPqA2c29LrEHbMhZ2D7wigdPuqi4LfLGfra9VkpQcPuAx",
  "key6": "2KvoDbuqpGQWULSMJvm2LTG6zhNjp4eF1VwZsZtVJKtUo6fQrXmJzykgEtmun5Hb3h8cZhRemNbDgt5b4HmBy8mV",
  "key7": "AxRo54eKMtDkzG3gN2pJC7Au1m5GwLaH2NRUgyLbmEQYPh1VcL7WU8qdLbUFv3S1WzYdG7ixLspydcmUsWVNRhK",
  "key8": "2s1uBVm8shGBeZpS6Niw599TJJny2Ez3eEHkjAWiyMjQuUqjjaCPaTLQ9bvDgBBoQLBuST6wyqVB6dDEGEcktVFX",
  "key9": "5Ko4NWUX5FCaSasnSaC1u7KPYhEeXEReUGi7qM4uNyY63ijcCLxkt8qWit77iivVkrLtSgvNiC5NEotr1H7tW9Mn",
  "key10": "5BtYBKi7ZmWXJSpbknboYMHd4b4JYtkFwkgKJjHH5K6hZxanqmuK71ka76iEWess79EvrHZy4sDnvn6hSPieELo7",
  "key11": "2ogFvKtZFPR5V1msL6mDJa5BdVSxGPSMvYqtkPKz2V3kA4MJ1HHZHFnTDpMmtfEyEF1R2XknRcH9hD5pRSWdA8Si",
  "key12": "4CkDayXotYGgKZns9KYQANH4KfLkqG1NJP3w3hivpCy45bcJ19n6tydTDPhTVk5Fmi1bKoMSMTE7T16xSW4CGDdk",
  "key13": "57GVU27dt6bkaKHh45LGfZbkM5FtKc49sEBW4tygzzQQ9dW9oV13igLMmBY6GPzJed93YnUAXfzzHCGZMqSA52jB",
  "key14": "2vCkxsai2XYf3yYhykeAb5z5t5L9cUamC7Lmw2GHse8PNmjiCraWak6FuQuE1XKDwEvZBW6grbqKWRKeBWrFEjBa",
  "key15": "3kuhoFeACAaAPAKsTNJ5GqbxsQwtqY5zwAjoZDtjAUt9jNFPKcKbaiUCds29JFidMbJzscMJo7sch1wfWtJMU72u",
  "key16": "X1J9cJ9HdwTPEwhG48cbCTEgAfbcGaQeRWa1vvQuqsYkZwER3VgynjchJRgCAUU1ZPqgHteTqszXXzpr2xjmoAy",
  "key17": "3hBJu9E2E7VFSWeSrJ6J71z6hodwTfim45bA1bdRYet8EEJHtCrgF95jJNKuRg9ETgjkSARcFKGgm6rTkEonLHYX",
  "key18": "4vi8xzhumpADsWG6afMficqGGtkkn7uai5aakuXDpbCkutbcthaGx3iMAzDaJgi4xEFX1qvuwHHqxBtTz9CSpR3g",
  "key19": "2d5TuknzfUK7p9fyJYCTrCJkPxBqUBNVeUsmXfazRwvSdji9GEJbbMn5DtAFxMon1RFtkob7qZqW3q6jLyEwQBh6",
  "key20": "42i6Ug1PMDo2Buct3AbSdzZ9KNanK5gkcqFfG7fFJa1UV4p3pK6LmKPamp7Sj9zxd9YHJsfDYK8ERuoDoUPpTpaH",
  "key21": "3hGu9S7Hw7QHj2vWxb5Qz1wQhQLPLarv8GBiigdKad8pZ1F9DkTyQG4bUogQbDx7o17uRHD52XA427gWjQ5gc1mP",
  "key22": "4Hdv9JsqJyjst7bzbzgAebHSWdJ1PmL2mewMcezozVQDz5PprGGPdfFjzyxiZ6HgpGRSRdwCW8r7ehy33yyjiBFn",
  "key23": "5iNmFQDATWHkR3oD6YHrZNFeDReKinBozeCEQqfBErtBywn28pSqqNf3FJV6jyvgVTXoTp8j7PfnwdFzZwf2VFAH",
  "key24": "5oE2R778fyCfTY2JN3SZi24vJ8MoqbcXbiW6jXByhSZJ2WuXppKUjihevKkneqFSsXNMnEHH4TLm3bw2zCGqwZyt",
  "key25": "5nZDhzvD78CmQujMrHGTEMjhJTgjpUKaeTYNbcDFE6p2evYrZH4Wino7KtJdRLRWDJMAM6Zoaw4cXF7JTkrH2FS1",
  "key26": "4cUbKNb4QSead3rynh2i7rvjLAafT4B51A7EnCLqnzmGQ8aMGqyxafT7B1hKnEkG7NFcDf6fnEQm1f4GaNGH2Gab",
  "key27": "53rb6hC6zRseMxPZ2SZEWmxaXKrKee8XXQHuNKg4y3GgnJbXM4PUQNukaCmjtXLLK2jh5e8rCvE3Ko4P5A3A2bXm"
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
