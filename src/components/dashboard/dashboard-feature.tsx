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
    "22cvyRgiSCfNeVbvr5AdT8kzVx4U4KVKoUJoV37B2Y8x8Qp3LBLqgH8TABHbRSCnQ1mGfjwJNK1HKQb4JCBLKKj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66QUkscvRQ3TnvM1gBAPyakBaSayBY1NkDR6A7Vd6bg71c128mWFnbREcspCozNxkVsPewvnaMPZXE4hq5uhSAr3",
  "key1": "2rcGa2Xhnay4bR27t3NNwFJEfdiBZhsST9KK346k9m2szBCG4oadiDxvFvyjjyXJK825KKDWRuzVsQDw9vKtiTvS",
  "key2": "3zusTSfzvmyxSRJ6ERdxZgfnEG6tRsw1qW83gzeoFB7WtyF9Bj8KamifRYrPCj5PxVJrDsGLFTn1qKDbb9Gh2avw",
  "key3": "2nLPdRCV5826fQxaUYUDJZyjSpG79497RWfH71XNfHoKkKpPZh7zuj8AMNKbWuN2LMrkeDJrCnpszGhGPVFiZnv7",
  "key4": "46sbyhNaZtgGqwvGw6GqaJBryyro8C2nN32iPegozULkccvYPoJKNAmB8NM1aDAh1sd4GkSPAsPHtbL779eDLTAE",
  "key5": "VYZe2CDjjDfBirSXcRdN3BosV2u9736V1bwADBorNZDJtpJEtmFnmVib9dzejXNPhMYja1Xf8xTzDVtsD3nrp77",
  "key6": "WbU28yvEubLtrCPfksEUV2NDGMRzWMADqYMAVt3ZQarHFXR9Es8dPW9sm5taZs4SnAbcyjYi7tUehjd1VktTUxb",
  "key7": "3iXG38SuEtKy9PVqDsotk6r1NL7HRtE6iks3wJnK3rv3be4eW7RxsPXvQNJswQoeWowZ7p9c3YdLd9q6ypSA9hmk",
  "key8": "3281Tf66yZC7JsQR3FYt3tqg6Z9CZv1YXukwdDfum5fHKkN6LaFdC8k6GXf6wEoLYsYCvcnRCY9vmjLb16E3b1NF",
  "key9": "5fEUsGXva4nLZtwx4Q9nkee8yjB3k1JQ7fgrn7Fkkrny4UgW3ap4fcZfEqHPzM3Aq6VmEtcJino2RD7v2VPEYjfL",
  "key10": "3rT1EqrAMdA5iGL1Ag4VLDSqHixuvESpj2bYi1gfTHGkVVtoUeZtk3t86UJJYcGs8nkrx6CL8Kpv4EmUNyvBUBHf",
  "key11": "389XFBzHiq7MmpMwSH32dtmWxkV5PHeG6Pypk58u6NvGX8rxfivpJV7u2SV2nGoiozffs7Eof7mJa5uMoWWUVNKA",
  "key12": "bVq1JoV7eFHAU3mtfMvtpoE4tmianPT2VGTwFEGDnqYeUQ4VVUBbhSQ7eXHKKHvM3N4W7EkMeMV5N1xDoRdruJ9",
  "key13": "yDH4Qbj7sPVGYNY5CFw5dbRPNeBexHMpQykSWmL4oNYP38pE5zF47wnZF6HPK1MoCwSUzo6N5hkr6DVdqiv4SiA",
  "key14": "3H8syfJtdANLUVpaS97JiDwFtX3Rz4yjoqSaATxRHYWyDwuEurbGhznemTvqn3Bzm3cTQWa1FqLsMC4xCG13RQz2",
  "key15": "5nGigd9Xyhr3Tn375sATTDyiQNcbKyWonXUyzyGt8dSjpWdWe2XBNiM5yNxmtf8avuuuXFea3VBXiLm4xGZ7U6fH",
  "key16": "3jurAiQLkQg7H6UNjdNLjswtfUZf4QkVJLSxSnd3DeHpttEZBLtWwgnoEecHTrxJcPbraTxU4wuvmAQH7zaDWFQg",
  "key17": "3N9aN11CEcW9w2VmXTjqEULrLaXK3S7M8ru9FEpkZXT14FtLATqq1TqbdkBHA6vJkdXik7bh9mz1KGJ1z47B7bJF",
  "key18": "4JzWTHx2qGbsPrLRYVEZAw3fgjJu8GLaCwccaxt2VNWCJhvFfc8kW6Cg2WbkXB7YLiw8M32BXn3zdhohqGFUcsL3",
  "key19": "44nX4adtvB5pMhHHYnBg5W44qh18cPeKP3h5fpg1PoeD2Nsdh59xq8woZzubMCDp8K4BKinTU4RKHaAuesS1YzCu",
  "key20": "5vVpNj4izdkZErUkmjLBPjhBC7cFCoj3afVsjdmPvRi72mHNab8AB2K5ktGnQF8K2ieeW1hWG79h4LZi2UCgYUbc",
  "key21": "4fnLVVjGTvquVG5LQdV9rKyaKCq6KKLwftkPocDffthfFzyVXkR5kaJdNGAaaeEFpdyCMo8aSEE1NMvBjk3Ywuxc",
  "key22": "4UVhrxof76J9pML8Gx7s2foeBfnRpqqYab1P13p7qaKyFf2LvGqEtH26pzVW3vikafBHwPztw2onQ79Q1rQKGgtL",
  "key23": "5jRiYbWJbZSkGCegfk5QAGFXWoRJQnen2AeKNqytVDegWnYkpRaMrqYDjYTyWsBMeJXqg9QRRYdwDTao5TzuGYdr",
  "key24": "g7qEiwREBfV9zzTjUmCrLUoesE53D9aNDLbRUhANpr3gkQcb8J37SvBTZkz9R9LTqC1s9WwwBNvqzxMB2HkkL7J",
  "key25": "5Zomayus3oHr5hJZDRAnR1zZZnM6rGUXa3iRTrCrFj458LSU8pepfSn5N6ZSnMiQfVzniKhgg5QSeiiSrjaBbsws",
  "key26": "66ZQChCyPPiTsDvCCgVYyGWopgxbs18bmETQkxTZ1ajbqrSZtPQWztK6oAoJoCse4GDJ1ysvhuxG4dyDWE1TKxFx",
  "key27": "2Ty1JQUCChPwbMmCXC7zHf7mMo7HzkU7vvBb9V2dygQNnGKAhLTpEAziQwkXvGF5RuMS3Yu59x3AEJsF6hXMjZD3",
  "key28": "2W5j85rU5XDmzjiZag5nXhZ4fPT9zL3bYaqH5PkwuQoKDWEKAskf7USkcMRv8oJs66Qfm7EaFxnZZzahLxXPHCqK",
  "key29": "4w4XCXQ367Wtp21QDWDgTT8GbjuZDycwDLWvW2T9YsWf5ndCQdnJ7YbnFcxJtp8iGjcdkxCYkoXgL9HK1wAjWrju"
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
