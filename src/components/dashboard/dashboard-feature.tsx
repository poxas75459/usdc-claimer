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
    "4pmo12MULkiKs4snXJTP7PuvmjYzHuApW3EMtHYepsC1yJFjTPHGeK38t6dmsu9xvZVmBibrqJGy9g5jRv2Ufvuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ACkha6DtLujUKfwRUb2uLdCLBtwwogSyvVtAk76JbgXiHixiKEhanq7DjcjAAkPWWCmQ3izMxxuM19oBkxpG3t",
  "key1": "4QF5nSNrBuMkFmAw8RXEd2S5PBfwepbfWJEZMPyWCvbEBtGquo7XGx9zAs1uX6mGdtNern3f4QbhGoMBcBi4TYoJ",
  "key2": "2hTVtCWPuK6X52TXqeiy8JXBonysATS9TYoXD63h6zaWrhNGdxeL6NMQpEeXNWBRLDUNVDm3GoAxLfgkotAb79pH",
  "key3": "121NvzTtteD9mSL7gyaxEMLiZtyNBGYB6W1zywc4vcA6GhXM8gSc6g354hkjqHir6XqvatHuaWEaaXUXfjVRsvT3",
  "key4": "54aEcp2G4gCrh2TjrSswCwncoUZNXE3Fx5ihkyqH7H6fSp5B27rJGUhEtY4SA2DpiiKqkKXXmuNYChaX9QBQjefn",
  "key5": "5Wdm6f2Zj7sjbeexs3w1kDHq9BGnFta4hniD7KqLJXruoh9BK8SiX4Txm1BGTXLbx99awU3ThbJtzvtkYbruVouT",
  "key6": "2Ye2Lm1egtFA293RRbB6Jh7d7YGrXKA6enSGEMxyELj9bB6nffnc8j2c6YsMhQcWZP4wRAnzCCuYELipi7yCMAxz",
  "key7": "4tVzADbxxMhugMJgtJB7Vo5EcocRYGzZ5WMiQiTjg7e9xYHLGVooQzMLcYA99Dw92DGufjZQtvagtXHY9Ac4HDaQ",
  "key8": "ConqhL9iVNPpYME3pEqJKB11nL4y9p2mqwT5FtBVg47qZjL2XXXmPJCMmLQobRHaQn63PkodxaMoBFzmFRib2Jh",
  "key9": "4v2pqpGvzvLGfAK2ZzCyHUAiXBDdArUdY2YGoKcHwxUR4GRk5N1nqiWBB9whFJ7hnPj6QjF5Ac4qqFEujVprKAVZ",
  "key10": "29eqjzuyH2h7PJzbQDRBYAbdhZaEukoQTn8CFs4L9pM17co48Sr2bftnS9wShhqjgKcBjgRX8NE327rrCFqtzQpt",
  "key11": "B4D3pQF77hV3MigJ6DP1z5n3eGDSZ65yVM329gATUJjDviQG21zYHjq9oZGLZXLq7xW8HHGHyufxo6TQmw1b5EK",
  "key12": "5MeoF4muJvCAg9VbN6Pj9wNprWrfLUrnATdk7b2aywDQWpL2h6tkeFwWECXLBkbV9qrztm782XKUHE4vpHYi6fjU",
  "key13": "41APwksK3gwKYXP4xBSmrs4vtYiYnSjQT37vcUNiebY9nS8aeYvKA5W3gUHjpA4SfnDerp3SS7RZr7NPwCqBBC5h",
  "key14": "4L84vQn6gwCGEEJxQoXNhhaeRG7G72q1585hmFpt43YWozBt2aFsauAkyQi3wR9QWx83c4Xi7iC6QMErJC9jtAj8",
  "key15": "3oP5PCoBTKMxkqCSUokqUXcM6LbWGFy4ZfbHMGAQsqZrZBLr8BwnK8qJUvnpmt2ivbd57Tr1r73T6ARu9XUpkJrd",
  "key16": "3TaoE1yxm8T3WBtj1T9iizef8f5TX6sVoQX3DgwVg7KW2RFd6n1AM5XN188phTHPZDfMqkeDXHbHiVxNPHhBgoDY",
  "key17": "44ZCjrxzrEVjEEnYsSrExq2art8EGzT3HerSYvA5AX2u7LDmK9f8jedYFgsPZGJpmySAuQ1HcEMxDnALB3WPr1Fs",
  "key18": "2TLk7BnTNze1o4rwmNERWNwPNenctJwCR1EYMxKdAEqssMXn8B8K1s4mkACosmkZGMeYMepyHeTAVmPWDddD8mpi",
  "key19": "5bx9HfumSPHQwhMtKj3c9KLKGcQDRgVF8jS1uaD2xwyDpkMtvUR4u2XkySUbexFNDTntspGkKFizQhJYNy3KhRgC",
  "key20": "3SkexodzfQRTg1aU4WXYvSPm1VZhZ4cWcGGNEp5VNZg3frae8hhD6ToNuUHC4tTB754ajsbuoukNstTKk4fbgQAc",
  "key21": "ckXdGMpXhGu9ptFgRQuTsv5aJoV4mJTendi4YEXJoBRanvgtvJkKjm1JQkkB7jceWBFPf2i8Uoth1TPNYZpBvmv",
  "key22": "29JitaZJn4qNWrH8cgeJg5SmxaEc7TdgZqAEnw9TwbRgyD4AfvMKeiAJt2maFkedSiwcgbwu8zXQ3VQn4dDq1jm6",
  "key23": "3MCYCSiqNYKYFFqm8mzkWj7rjmAa6p646Ei1XFU46MFTCXkm5hpwFtEpb9GDGvvLQGpPp7x7qeYUv8wJVkDU232D",
  "key24": "4arEk9ijbAKDfxg9n4v3iR3gpgu4ErFXJUBTJkppwWi8KnXwMQnAEBtEh25eARxRZWvaG7oKXu8yeBHXkgXwVyPL",
  "key25": "3x3jytVKyfA7uM86q2J5MsEhsafd2XNWMsR4V5Y48qUHsKZTQdsKqYGstKjUP4wKr9GZ78BJqKZRurLT381mmtwE",
  "key26": "9xwcQZXpvJstiQGUmFHb2ywVzCfyv9HBrvc4Y9BxnzkCqYveKX5f5RU5BHUTrKzsvxpco832QkZyMTahMjKBi7Z"
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
