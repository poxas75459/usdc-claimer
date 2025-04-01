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
    "5rNfxNsbNiq655z77ibb8ELEM9M9qBofa11ZFpVGhwRF1fvLn6nowdspkCTV3sm58kjjM4qnj4FtR8TyXjJHBj9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RqTXhDSLjhpdsBUBE4GnDwPmKHrReznoSUovi7KnDBArHMkDvywDTMvASb48KP3tH3mkQiXqukBsKp2WZSWg4yz",
  "key1": "GoRYFxJv8UEKKpBBtXptEHSwhwreWRXdd9k8dcDV6f5nZsFZf1EcuokvbBcZqLgNSaA7zNDn2jR4eMhbfL9mtA1",
  "key2": "2m4BbDqDLLsH1ZmX5XiwQZe3KuMjwRDfVQfMHBK7dqSHhSWAjjLzH3WzPeG9mb4ZcxZi5WnyNxYsEY6RcUraqHLw",
  "key3": "5w3qqQsfQBmyD2PyNjeeRtVzHgaCcnjvkTG6MtSY38a3vwcTPeZvszEjogZs1Bn3xnJSuM3ddCAntn1aF93b48Nc",
  "key4": "6XiPoVSgR82xt8UyjymELDpyvNmma8Aei2ukk28xiNhyWWRSJqAT2L6Snryx5vq9kUm6XqQgJNRh5smtGUnpph2",
  "key5": "5t6QE3FtAPwKv8PSMw3wkmvvAiXvfch1C8QrChWXoKwjurN8HjjLoEN8VCUo85DYYgp4nouPK3apXecaikygauC5",
  "key6": "xgR6enpRpGCrEENAadPUZQbCubk8yUyDbWwZoYVgenU2ZNZCpzKSSy6Q1tMieweVpFTbKRizLB7obhCWhEfjSXB",
  "key7": "pG2CzLeGAqzmv9Ma269Wut19wLYunZA1VJNvMyp6fESw9dqNSm5shMttib3NoVkAmvhUwBiTwjy6AxLG1zV9nZp",
  "key8": "3SQ43Rv3QFt8zW8C7hEns4h5djToQigTZmGajGAeD8oStG822KjAceKba2K4mAMXycY1vESsFcfpBCTFw7AKozTh",
  "key9": "4XDGgkatNqEyZsWisXcJ9smVGfCPrwMXVin1B6usaivqAgdFVFHDyPYAZa4VWPjnPRoa8qnSbcBytEjoNxjHKfT9",
  "key10": "2SXp8zRBzdhDYVSedh5pVq7oZE45WueLRNs7utovV3C5mHBHKpmkLibzMARBSNx8zvwD5mTxA3ETnVocByFnpqm",
  "key11": "3PZ5PtQgAXTGufetGRk5Qw5WHkjzDgkjrsNsCpzEjFoXpaTvpqZ9Gi8S2X4ouParkgfCy3LDL6yB82JVvT7L9eUY",
  "key12": "4hwqtHpEAs4g3ormiV4c2FYLEscNmPkr1MZbhBxAuzkuYaW8gz6Hg52ksXnjzg4wRNVHWgUn9w6tPn9XMTtJzF4E",
  "key13": "35Y9TLx93iGQcn6FyjE371RQkdNHzMoob8ZA27vMKHrmd92EWqquhwpfiRnpfsAa9JFCNi3dtt7xBTQgajSCA9ov",
  "key14": "3byUvCeRfvs6Bu5VUY3mu51rbaexga6DzjzgeoKhj2j86uVzJ4gkHhCjbvmoBjwXwfDDXkqKeebHVT1Camo6dQgP",
  "key15": "VX79x2gi1A4MEWsHy1i3xdwnmj8yw6KxB9D39Pfj8oLJ45u4MPwSv3X6t8ujBY8oWGai3gcRMaZrLkJWSjCb4Pv",
  "key16": "2ssHJNGt13U9p3DpbHfBG53a8Dg9MxmQKTbnqrkRfChiohiDquTBPfCYF4Ts1G1BATAPKUALJMa3vtoQyCgFCMCH",
  "key17": "4Bfz6VRBoi2K7R9aKFe9UgaLcTQMF8RjgS9ohNmNSPLSMkJyTwTGvxkZiPnchB6vFvq15oaT6SWKErP7xkLBMwrW",
  "key18": "5J1nqEiCh6tnWEgtF9tyfpv7tjNWn3fbxVGT7R98ieoG5NuHN7Q2wupaZ2shzUeXmPrB1bnSNKdwTyGkfX8zxGj1",
  "key19": "fJHgsB7A271rTUpDUUiWhSEbgV2WzhyszwBs9FUsG88k5DYFnp6apGuSjuWRe6EQYdTUG8svt5pboPuKdMXLfYb",
  "key20": "3HSWyb4HzGYWobbnQHwzGqq4fTtkYC6LXb5yphNauk2iV7XnXNBZB5AWpq9Mfn6JytDotauJ7gUfWdpe3Xks6Z9U",
  "key21": "zS46a51MYxmHNJUHbNEKDSigcdnE6XwkGj3fgmBvghKNgF1ptHMYtC5i9n7QKek42UaTG6hz73semLxdatfgTL2",
  "key22": "2BZBjnSxRNkyLxwxW3qUA92iYoGe68sKsBzqSkBv5mwu1k9kBtexqCgadMENFuiugfGNA1AX6ikoWuM4eAJcsSgP",
  "key23": "5dtym7JHCmTnWQvxNXDmrSnZSpbxnJuZ3EHpxFzsF9jTXZpWXBYGB1hsZv9ACSwMVHHLJCXdyxebiDUjyBx2CHe5",
  "key24": "2Ve29VRuSacSv5FBUXzK1b2bm84shECkawWRKVeQTczduPXuV8YCkePHo9MbFjyvgajLs2mBWpng6GMcswfMXWDy",
  "key25": "5JpCp8e4w2pS65cr4LeYNDYR6RBC9QyRQJbPDoSXDA3XpRKJGwsVggADfWftBdCNNJ5JEXPPzCL7Hyug8Wzyd5j5",
  "key26": "2bkS9r8pQb29qvLifZBj4NYxLsipTNZ1WUcdjKw3cF7bebQ9EX4HnSh4v9qn7nnNo7uJH15RteXKNmyeo6ERmx74",
  "key27": "3UupVopBxbrwHUBuYHep7rxWzbz6yjrdCM3wqmyGH9Y4jD3qH4y76CkY3wnqko84FgAeqoCNvgkorPN8RwGLGuzb"
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
