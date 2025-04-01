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
    "56ntV3BwfXX9hPTUkMzuegWrYFgXpx3emGfh4XpprxwEwr5SGs1yqeNuk8ggk3yWeKanWgWJci5pJj6YTvrRvixa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nxm4UaecfVthKjDJQ1KTKjJ3tvq9TMYbJS8GLLMtStDytkrXPuFFY3inBh4voCewozGHfaL8Lz9gzmZtcwaSv8m",
  "key1": "5WzCSbpDtM67JgUFbxkFQpWSmAqDjwAvw7pUuxiixNRsG3DK7YaBGFhr9i5nFXyDxUoMAMoqiryjXABo4cVdqu4a",
  "key2": "3Nm24x4gKVqzKxuSKKWUNjh9stA4kUzDoc2n8xqggrnkp9Zb2mhymoMPtrFDAxPZpi46dfXWdR28rPocBMd7qyg4",
  "key3": "58R9BsCBrNvgPmrWeuNerVP7d2Dg8GZDYhEYfUBUfaxh3R5Nw7FcaZrH2k6xG5SmmARbcQshjvTA4D3QeoTPGPvM",
  "key4": "3jpsrVsNLN5bVLUtyKrGQxYYHKV7ViaWuuaghuspmtpw1uxX2erj9NzZwPaCW1VKfA1Gmgd2v9cLtdj2w22UFof3",
  "key5": "2CBtt7LZswXg72a72gZArwg8aMuki2Y1TiVGchcQFSjGfxjHsty8DiZAgq88nJmAbXUK4o3WwZyECV14vWpNK915",
  "key6": "4PaWLz1zyf4vyt4oy1Se33v3GW6QPY9tquznWHJ47RAASPYN9HP4CswHUH5pyn3aRGDXTr8XD2GXMLiovrLeURYX",
  "key7": "32kFYwRHPmAd8iqXGbCg8DMzfrnjfGVKjAzy4xKCmkzqCq33FpcFzuQ2z3bdndi6jxZ1gYknye8pMmFTQZProCim",
  "key8": "4HTFWqnj4vpukKakXS1wX7QUVkWQhKi5mLZSBDhy1j8VyaKqt3uTBu1T7nybf5P2G2Bsyq3Rp157UdVREbWaprpp",
  "key9": "EyK3j4w9862xhFTPZ7tSN2nzwUi44bb1ZJ2GUCr5mCrAQZsR73cgkNw7rjrtiidrTztrgWegtsZV2F8zcChVTyx",
  "key10": "2r1WSCu5nAh4E9jbcruQGgQiBYzwzJL3cfarhFmwGKTJwijxpXGetDQYhKGwTkUir237ujpgXeoahEWZzWt8nhYm",
  "key11": "38i3qHDEXa5WjD6w37UbTvPPhh6JBeBZA4WrxVoppLJBobhYyicopmk26PbP1gH2YpRbqqUUAo5ca5pFfXLjcVed",
  "key12": "BGMc5zK3hoMBrJgk96Kf94J7okexPFdJWbFMt3kgTNNZkSNPWrmLY5PQn6y4RQZHPSb42hQR7hNSAeee4NhwBEJ",
  "key13": "2bfnsZvcmoyTNh5ufj4CjduP35dM8tbFs655wE7Qhh5jPELXYfQXbjbcNyW2qeuu3kruRTaquEUTQxii8iqUG91R",
  "key14": "2nUfoS29wNBZNYfEQMDM5QrDZikZ75eX5BZFJGkT1rBzC6Wa7ZqRJBUC9WzGcyuzMwU6wgnaFB4XRzEg8weLJ1qv",
  "key15": "5FuCh38BN7jaLXBB3jTzDA6BeAc4pGoSA9P9axZhSknHsNcXTZgmWWi2RaPV9EYgDJrjVeWxAiCA3r3NDyiGPmJD",
  "key16": "599iFC7gFg9Sw8HGCc8r4EmDay9VbAFxLfsVbo9XGU9sXNsvA6iY28RS7FFYxXx9FxsxLfL34uzmQ8DUycbyaNty",
  "key17": "4yZgZyFcK3wJvWuSbwuhUBzXDS5xEWmGa4L9iFmAhibsNggTuFxxaF2wtiiBi7XyPvXw3MBAEonVfwKW33jWoLzj",
  "key18": "nHYjzJmSw7FAN3JpqB643E1QgrsTZiygcHFmY1xoT5Sye8fK3eqZ7eniSahaGBhsQEYNuPCvcQX7fixcWbAsTnM",
  "key19": "4jfm5NjBAyHMcGANmH9nP7qNXLdDGZuuui7eFBmxKaaqYkx566L36rvdi5aHvbFiCquBD826XTrarg24GD7QuJEi",
  "key20": "1tU8sNXzrfoDZ7TCRAGXxT7FqUZVzVBScBd1GfrGum38tov2R9QVtMM1ensQPCD2vz373unEpTYmiGHZ81QGE8k",
  "key21": "2E3TFSuYKdzXjrrXrhUYqmQqnxk89TSC3CFMaBjLUbCtVeMyXrtcM4rX77uWbALxKhS58igZ94K26QgSeKsEQxET",
  "key22": "5zWwwJmJ631wVtuAyoQi9xLVRxayQqjFrXv7n8huMfYg4oVM19zhkRThyg26KiEHqjBz7zdzCn9UinZtbinTqd29",
  "key23": "5HSqi3m5nwtSFzYT6r6KMtbT47NwXi75DkViUwiDwpBCu1k7oHnw9Vs9qsg99hRtHnf8SgXBWu9ehTsEUVvi5BP4",
  "key24": "5ZnxLouN4nnjo42Znef7qoH1vKrKGnR1z4Si4qEU8tvZVofMyRxovW6sGPxA4wSxQP7UqDks5d28MwCcqnNBDm1H"
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
