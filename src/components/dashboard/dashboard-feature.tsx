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
    "3gZXfcYB4GGzF8xZu9WUJAYKD7YQifD6XqP5Pe55NX3HSRojW9dkXbTddyfdpcvfjTFZEtkDwgM3AKaaVq6csDi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xNauXmKJJJLJYxwdkU3HvPQHKLcYLvT4nLBsfoT2iTiVYcsvoHtT7mgLY22RQTpYmEJawARG9J6VNM6rb7nW2Md",
  "key1": "uuNurusBKVgqi7PkbxkaQwh3yLuFC8NTqbLdkX31fS1XvxhDXRmDtHz9R2HEUHYS3C1Jh4iFf3JvbHNHb41jLDe",
  "key2": "6385FyYPUJJjAXv5PdHSnoGsWprnTUstWeLHBxRj21JvU3Pv3SZmcXSJkoLkhVCS5bHPVqRbruDiGv19vFjfmEv8",
  "key3": "2j6hqsnAEXhRVBxmVT3hsGy1U4emBEuC8pD4byyi8dEFQPm7oXdrVtMmNXvJD4MSMbnAJ5xcgLVY6ViKkHWwUVgF",
  "key4": "42try2AC7eNYGvTgAuzr5LqQn92pLUzi1cQxKGJsYma6DprogxLpzaWHBimZdsPp63GjTzxqws3SVooseFCCtdWQ",
  "key5": "3ybGHHeM94wFEi1ZWuhGkXxSq4dwShoxdeaU4XpKKMWY8u17qnXW6bNHhzADcJJ6hWxhSB9aWGtAtcjFdNFBXSS1",
  "key6": "2rhXfsLCnHiND55fdZhgeTeyGnGqvigmFBFA8GJNTj6RMDStGiJJWSGe9zpfCM2VBLkF69ANjhXCDERvPwPVfzLN",
  "key7": "41LyugeMa2bdvXMkJsRBZF3RK5DeZ3ZJkfsbJZoAXoMAdXNGP5TSVmi5CkFyRXapcZWPnffjJ8uaj9gF1SGPnzxF",
  "key8": "42MnQFKPM7VBN2bRKGz7AgKJNeV2CPTaBrRYoXD8EQ3bvJHgDsK5ktUSprxWjJifwRPdYyGpjCg9iWWxdP5gRByo",
  "key9": "4qMoGjNdfhbufwCzs6HjNqdRNPF23XjZuB65GFUXvZpBCa4uGYPMT8B2wLSy3HNHPdYbGspWGLt4ghfSPudxEGjt",
  "key10": "2YMape4bRM2o6qkCM16HjgGtGh7n52SXXPdw2o3YCsojqPk4Wvig4UmdvLJx6cGx9RqePe17L1kvGVu4WXT2YnpN",
  "key11": "CwrSerfgtHWK5bXPshswbqZhrQvrsRc7RXabyqyC6NLC5ts3SvCCvR394usvX1cU9Qu4nDwVoqPp2CEMM3esuRp",
  "key12": "4xZ3QPi8ro8E5z1Nj6MWaqW4dTwYqkZRfzPsrKXzuBZfihfXPWebvCM8BfTD2BqTD8DKtQrbRwYRPQnVCVr6tm7M",
  "key13": "4EwpsiLrRMRyf3Bk8JX6YRVWREUQ8vxuH2sKt7j5FphdskLehAFTtYtS88mMxAuGw1QHek65Qj26MCdR72ebwjA7",
  "key14": "3vHziUFeavqRzMQu7W39x5W4fDJ2EWxELnC87HHpFLr9p1fjF9uSzMoCUga8fzHTctoA3QFzDpGBJFgrMvi8VrHg",
  "key15": "29T91su7WXQBrYx42fjp359HzNpQW5A5TTiTvRtd3Xci1YrGF7Sgou9pkzwK8gPbe9LUFAmEpGux5Z9LUhyGtVuq",
  "key16": "t27FxZErDG8bZ43JHBkD4dEzSun8SnDFhEneftk44ZhcaA5BG8UXDktjyUWADf1NzjFrVB6wSfk1ALhb7jWzXJM",
  "key17": "vCNQ2ZbNB78RHiJ77dacofXfwgLfJjsiPXFwCdABk4LUNZuAKcaahAqDqeozdXuzag6Nga5qtmDuUZdhgRpxhB3",
  "key18": "2XgEHkPSss9VzhFwghXwe2u3we6msfjt1weHsu5FUWTEgdKZjv7nrefpfCmBGQarTPSYweu7nFcGjDkwJ8xfLRJf",
  "key19": "wvxyofNkH17Ze1hzx2YhVxchkbHDtm8QFbHr6JRzpu5mVYALqiU5HDioyCipiPtHY6wuWJfms298f4uohrKCwjr",
  "key20": "5sPfQSLa7dssGVZY8nisGUJcB9AiuYy9hmt8X265w9wV94ZL4a1tRbFff9f25LKDkiYp72uvdZiME8QtmhXjzaDn",
  "key21": "3m6Kun8T86JhVnziH3pXhmVvxUodssgxLuRavnYNFFVebBj87ErRGDW5qr8H24TGCwdjQjM7QZoa9iayNTDRegBP",
  "key22": "4JqJRpZ88XcWn8gE5PuVYo6CtmrGCimqM7z7apXVMLDooQNcLqkpJP46N5ApBuGc8FH9PYdgJFkPoqfidRNwnrCm",
  "key23": "5wNKszmMxRJbKdCExQXgaph7Lcra6dwEFP2s8iMoM8USDXHxEG6uJZTJ4xuc8YuGea4rGMQ6TLcjEvSYdfS8UyYQ",
  "key24": "SK79U26j3AhJ3PKd2GHHo2xcK8XG8SLxJbJnox6FGSPfGQrVQicvZ1j23fLSyJ6DkoK3vrbdYs3bQv3kLMG5NCc"
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
