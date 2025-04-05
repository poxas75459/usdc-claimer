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
    "A2ysVdS954mfwRcrysWREHxo1fgKNZfH6cz7HcAVd6zKDYXYoRby5EnZBDt9CDegnAv34vqhVFzDZfwUGMFt1bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7WhHT2ZMPJCfA8pfrhZTPWjYHfV8ys1HZ9GbudWkgq5QHkVEkPiUAQwmt38WHz3NcyhAPoUR5MyQVXJAcTJ8ey",
  "key1": "3EreJenBYsrwdrmb3QGC7NAHsNa9NukutzViWw9yXXLmRyMUab95BCyhqcK2DiC9UpTKocUAbAWFi3ypRUxRVhJ1",
  "key2": "3RD4DQh5KAmQRZ5CuZaebZB85QQdkJwteG1kcQiD11CMPoUFpFUuVhHHRbFET9eonrWw6BVtYaNzeTuBomNHmkvb",
  "key3": "2tTGxGYMjN1oa41eYGJHerYb9gznSkeJYiYBqdr9SMztPrkCHsZhFjBrn3s4Wp3WZR353u3u5qwgVTN7p9xuMGpy",
  "key4": "4HmzAjpSjUGtKAU6uQwAUQSP2479FLETwqYrbvfWAnkSEvwvvzHSZ8hx5n67TCbQtbzixoywFYj5LjMwGqfsZTSH",
  "key5": "3dyM69MufXnvij923AAjhTQGsqYj7N4smvsxPG6BaHEkyWGpcpyUe5EUyV9W1tP2HP3h8TjVvgFuKxUYhZ4UJAVa",
  "key6": "5F6x1P5zsiu8rUv4U9WGBL2Kyio6283XvxMTVmmSkhDbNxnmJbqkyi361wdrDq6z9QC7nyWd5uDLUwdJySUnniNc",
  "key7": "35sHXUKXLhkhGfAaF2gzbhrNK95yzoLVo4oTGbJPNnoQykFM2BuyDadbgKq11yoAgPPVU9jhi3reP5RiZCZKtaaM",
  "key8": "41AY2Gg1og8jaHV7pQPr83WYguovUNZBacRtmkKUHsrEbqbSj8RTSvUr5Qp8SwySo9FCXPDQwg1fwihPiukdVrZd",
  "key9": "2J3WNXtE5FxKEUgTc11z7rMSi4GVVAhPrjqmVjUb8bxJetHq1ddPCFt1iQA7DWcx7kbbVYzV53M6JTHkDYyKvR1g",
  "key10": "2v1U2kXH85zVhNUcEM4CjbCdDhMpLwnWbp1qRhfNhe9qjB2fypGDvEuDbY39jbCNoDrKrGjd4zeWAWgnYsxQdQwY",
  "key11": "2Cuz8ugr6iA5rZEynDgjJqguCV8uRJGBMb6pJAaQSSE7ur15SJiMfn7ju5N73EbDNEQvZSPsqMZGj6bXUaA3nUmL",
  "key12": "66aXbFCjHsa5Z7CG37XazFaW6zrzCGiKujmRxJBzTiGxGwVBKKBGd6vkGCq9kTiw42debBXWE4g6J4ujzmWXrna1",
  "key13": "46iFgW2snQtqwXQKr8ZUGFprQo2tzPsnHHPZnY6iPtg9U5qJ9cp24dUBTMGu8ygJDnsTWnn47UwvMxkMcggokNPF",
  "key14": "57hNVtyyCT74G4KEcCEMm1WNCB7hHwpqvXxD6ZUrh6NnVwt2t7AnyjDHEvqcndrN3FXucqDr3GmK4LshKzttC7S3",
  "key15": "3pNwYg4XyFQy5zXNAXumWW6iHAu2PG154LZxiqY1mhyPo3stEZCGaAcRCwy8As9uSLqxMxLnkK1kQvsBZ5coTs5f",
  "key16": "55Mzumd3Bda1VRLii6Xns8VX3dfSHNEHADrkyu2JmJ56sqU4FNhdDU5UwUHi6CfPCuDBXJUCUsYSdjNKsHFMfHbn",
  "key17": "3A49vaFeyoCCgx4SGdkR4v4vJKmjMYSgAXnMZEPMZXGwCdEF1GrUxKN1t1j3uC9XmLYCTWSQxKAoYTZ7LsUbazAA",
  "key18": "4VKMWHbJixyAp6HyxgQyiXMrep8aNdm8kpo9nZZ5DLA2Q6LRQjTHTzwrNtAfQMYZsqsSdSS3FwJ2vXpn5uHmMjgU",
  "key19": "MUqfL6CJpc8PHNRm29ZMmjMRgp1GQxxESq7QNkeuB8tuaNcqjcefCKpgwohBGaGjJNPaot4tp9fsYg8TZL3bxPy",
  "key20": "3cZC264bbfEHfmvV2x6GrznnKAnzBGyQTDk44f91mm2VKQYwCJiYAniMtRewaNHkXqpLaV7divhGBSFcHkj1PfcA",
  "key21": "b9nHLqPPJcNU1xq4pDLWZX3zTmgotgQZUm2csuyCpmNEpnVRSqcoVueWddq6tLDwb4hKYrzRynQqDjrp4jWgbtX",
  "key22": "3vHxe6Kxi3xgRYTcbhNQp6m373qUCqMg9jAN3kTBAfNRDQgyCBayvLmDPMRJ4w7f3HE4aip4Aiq24KDDw2WPzzzB",
  "key23": "LKBMkd887SyeocK7JXX2XPFP7zTMHRwruhu8yr7895bCPFXNd4GxbETJypNh8mR17WobpGvtcan6LBunv89pn3E",
  "key24": "2JoU7iZYbg2oZQPZhnwWNzGgcKvazFHRk3rNa2gHGKdYiTCucJZHSc4W4VKDVEd2XwHAHtr6jD6kvQqZRrGjVCq6",
  "key25": "35ZjMkhRogbxjf2FhXA4KZGsvFCzGMWEXYT5RuzJiTVAhxeht5shY4YQPuxk5Rbe6mxcrYPCCKopQ5AMtS8J48xL",
  "key26": "h4V2jiEQnhqN5UBdqGbUM4Zvo1gBMmjYLb5mMaTaETNqpvoFxDfokoozLQV1YcBy6hbCvjDJ6LWwj1Wyw38LW36",
  "key27": "4yZFkV6zVzrpz3U3sc5mFXnJ1vRZvjyJTByUYgJ1KxPkkDDsV6A5zsZfSp9tUwMCi2F7okur2SL3hY6DmLTHf6bA"
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
