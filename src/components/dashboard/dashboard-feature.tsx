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
    "5Wk8vr4VPhL58LoZLfyrHcqm79dxate79uMBNukpMvaJUih1hA8YwEzTaQBcCwWxCjCZS57P4y1Re8fZwvBcRwKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1H3rPxZkk4gMB8SXhsnBg5LChZTUsnaqGBPJj4cf8mZgo9zx2pvpevz2MXnf2KUh8cywCc9DGSd3UFUcYWifRB",
  "key1": "4LU8LeNjoo6YUBMfM1ZK8rKbhnM63oS1VD82EKSGbNxRDms3nnVzCzCpZ3CT8mwrh7S7j3GQAgdR1ZSkbAgzL9sd",
  "key2": "kjAbT16db6uA2yjRpJDxr1gvGC7QoGq5E4iLBduz1VpopMov8g493tb5BYPWQeNpvmmY4hSkyVVrJG42CiyjThz",
  "key3": "51b7BLTQwsE4NwidiuLzbnopwkoLbGkmAE74fpvhDpecG5GRUVRgmZezHA62NMnDni3VtssFvazfn4GX299RYo8N",
  "key4": "4N4bwM6XXzUobN76N3AjZKkiWX5XjAC4ynDg8a4Phj7e7Ts7VaJcYSSvMymBKoXchGaixGTjnB7JLBSsnEBvsGoJ",
  "key5": "55jH5PXLhoA9yfdGBJYk115FBVUauKfF6mv9AD2qtzRYiCLjcA43K9V37Gi56Dz1QNNEdTrNHZZ8KRSVDUwsK3t8",
  "key6": "2Asd6V41mxKkd1wKN5AJyFsTrwHzH4r9cyp5REdzq5X3rp2NTuzLqXHkLBX2S3SMnwjFPL3GFbv5wEovdTAx8QVP",
  "key7": "2nHPCPbfNbPSKgzzmhAiTWRF8Jt5ZDG2aXwNEaoofChVz9X6fim5HznxHxJUqjwmbAKJoE2MP1Tair26EcEx8Ldz",
  "key8": "3ZVZyvYm1DKGPwHFCE2HTnNe5GiN7v2ouZMMEaJt27JxuQ6oV149HgswA9MEgk9p459rapiyt4UByo64emoEcB74",
  "key9": "4oSsaDCKY27ZRBTY3fTEMd6Fg8dKuLQh5YHxPbhNW889JeqoGoDuuC2bJmrv9mNzsmFGxpFXS4KeJNPdR6BqWR8r",
  "key10": "3ybLscSvJs2WSVunwB3ToA8f8KrNPhK9d3zPgyhHRuZTtZJtp1ZFtGiCArJYN3BXLy3eQLm5SDi8Gj5u25VgKn4E",
  "key11": "4BaYtDpdGDvRPHU36VsDZDcq7Mb5K8A78raNx9mKv2bd4z7JKcgn2iGgKd3jPd9NefomcTBttNCFbTUFrYiEw6PG",
  "key12": "orEEEL4swza31YTNYsNamhPV4rg5PamiZVoNz1Tj1TYJouJd3nmdVHXb32J2eEB2LUvGd9uQfNEVgyCysJ5Souk",
  "key13": "Ny1gTTgHpZSCKnKFqqcGycZEfFMVwurJiJS7YVCLCUTSzEwJroifWujYwXCSmBnTGPzB7gata5ewiP5x5AL2qg1",
  "key14": "53WXZj3a71iBFB7j1Bz1SvQYFRP8P4iNV59UnfqfjW4sCFkK4M2UT551oSmA8APuBi4NZEnddnnhJvsSqzsNYnX5",
  "key15": "2zRmpu5JFNLUZRq9XNyP8spt8NcGSecMGcGg7Zem9VuZEuneAoHL8Q12ochfu8jSPprmYSQovccTiDaE9W66rpWb",
  "key16": "29iJNVJsFDuEdtUqso2wMkAddMsKQc7r7cvVfP743rv62ymu2BxsTM4ePzfsk9KHuBsrcE7qrjXQBzYdqcFkML8U",
  "key17": "PC49CWWYf5TaiWf36n81o7PBVQQX25zncg8JcfzzEX8YDEhv9JvRB6APsCHsJXjBURguf4Zgp9Jft7mqPTt4YoX",
  "key18": "3VPuHbtYqKpYdgiE1eqHcDwjznYmiTApEd84T8Tfo7LGWGT4XwMnHAbZBqgrafJWyJxPtjDcDMEAJmNmqsYhJV9i",
  "key19": "2qc9LDvrpQESa6b7L1s8Pi9FwPCyViYUf1QAjp5Bvr2ch3NuYYRo6hn3wagrcbQaNE2DDXGnw2DcsZSd5KgQryvq",
  "key20": "2jmNPc8smCY6dq8bx9UqSPBihiGyzSGLjPWjZaoaxhEEKdCAdigq1NTGFhbMPhyaS75PC9Ei3DLUpErMPFzzTjdT",
  "key21": "ZU5ZiapNREnP17QqxDrezWsZTZ3EMsqg4ghph5ao72gUE1qVbTpYLTwQWg1dwcdTj21iV8jMDCJZeFQqdFBwXPu",
  "key22": "57nJ54osjtDExEsaPxuVY2sXe8qiGoydEKMmTFPEQqC2jacq23EuQtFkNZR8MW8Wkq4DTRkZBK31PSVjgTvsZRFi",
  "key23": "5tYAX4cBBsWGS4WiEx17EvRtixJrBrAFgntbehTBc8XHXMqApNbdwjtLHXPGrxkbZRbukejXcenrLgraVrF9bfQe",
  "key24": "37UQbjJc9ZStiohP3gT9LE2p6nsdiXDGQMZ2udmfBMKwW7RphQfpxWh9M9kAaemmPzhqzH835SuGtp4ogwX8Xcd2"
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
