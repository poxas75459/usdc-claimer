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
    "5eNvXYsM9KBKaaVravfJKVSedAjyL3TWYKFvZnbTCCzELy6g1GocxY6huwf8vgzDNnEr1uLwmwKfHJdKut6MjGCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ddgtmvqPEhx7NSYR9KdxtN1GPTqgChp6MuoqkgJ4qRaVikzPZ7fbaFb5ZqL7rUE9nWte61ja6D7Wb58XFxRj3yq",
  "key1": "4fBpZffa6kYSHt8UWNAb9nf3XAAgxxe9xfUcW56991GZ7DzCgGY9QVEwviy3MkTHG426sFXHo2qqr5gdJ99ShYeA",
  "key2": "5wvCWGbb3tnyodExcHe874VFYjiC8GJJA3JQ291EcEugpXWPUKoqPbLKQPNcKFBz8KC5KoMJsgroCVBUb9kAp6TT",
  "key3": "wbqo5L5yry4EGsj531gU1rfNi8CcxQYAJj6omHD2sm7AdFZMVjbR49sdwfccYxMR7iHYnMaPUoBWmEgsVnTyy71",
  "key4": "4bSppx7494L4CpfmMFaDNXHb31LntM5uHayQveEcYHeE7yMXBx9WMmDEt2XMfDAiy8EtUM6ori4SoSSSqo5Uymdk",
  "key5": "4RWPAgGeMYqKKZUnfYfAcysJvMmcm9Q4KUhr3DCdhTzwG5GrVkm3KGpgvvDCUHGiUFQKFEt5VQ4Bdj9uVYHQYg7q",
  "key6": "5rQzMgYnVru8fEgUjdMaWrYguBqxExfoFDRxDD5CFPYpwNpqsq6XpRRaRPgxBokw4GgPiQGczhHiJBaFQvrsxfFR",
  "key7": "4f13ZDpcEuiwzoDn7XiSRHKufQFTtUD2w9p7J97MF4B2cnuyUZCQZexM2WgDQppm6wTuY1nadjgb3hHAMX5rqVHu",
  "key8": "4JdQjT2KfqxFD2HyD99FGdcp9C6kZw44KF3YAuDKj7MPwCVHmzgzDUQE3Kbjp9d9LjiMxyVjegXTxMGctnNbWTW4",
  "key9": "3x68XPMEWsQuFbPpFQ27A8UDhVVoZNrjhnMSvh5fXubyWG3vUgQdrdGbdvcSYycNY8mprWxtpshAauEZNaxGAh33",
  "key10": "5WPUXjsQyWdFUdAmvRHDLMAuoEpeVGMKzSM6r5Sk7RNP4HXodcRmxcR4FRoc568PXPXXj3vPfMWejda75ydon3JC",
  "key11": "3DWPzXWawZ8NYkn8ZLrAdANH9euEniASYLcAjV2vLA4v8gWEADQTfpGzVsmFuo2xZuv7j5PX5dZHdzDEqwBE6KL1",
  "key12": "3N2XtwgSAW92j3LTr9BGN3WGcM5fBMrrxHC9SBArX43eSrUryb4Yw3queeEXyJGoaBVsPWr4FAJVPGA6tcRszY9T",
  "key13": "4c8hCgWgxkDPk3gWcQvZ3FMy1jBUVTgdPfwTxc5RgVFqByuX59U9bouMyYzjRPc421Ufs1ncx8mhWy88a1QV3KQX",
  "key14": "5fqnkbGCZ3PJnMCy4SiUPco8fFUXejoBYyi4kuqWgTZXo6ddAMcQzGWs8hKyWYsiMuAiQUh6jwyhVZBZyfq1cDeh",
  "key15": "3SJFmv2pkobDrbvk6fs9LVX3KUWDiSjCi25997W35nDe5pwPTzG2Cor4SjLitocygHrQi4yjoiMfZpKSExGSQmzg",
  "key16": "3kCG7wY2rF1LpEh9wUBxrpNiJVszVKtRs5krVRvoSWF4ZQjd7hrVotXkKEDySHYiy5BmNvACmu23CW74xCmq5CgW",
  "key17": "3kjMANK3tfxYuiPi9xjSyfVqS4Zrjyvu3pY8YSKZhCC6wsSuKFadKmqfTBq5WgeNeax4wdkPG3DswC6hTABjJyLS",
  "key18": "288Ym7frmmL24iE15WmULeoqvjHxpCzrUb4ok2p49PPZ2bwUsgkGjEvc3iGxN2KEWjVJUWV9bFk6Sv5w4j3hrumA",
  "key19": "3o3agTWsS9KBTnk1pMyTccXE7on6nsThzHhU744PC3zjjcHbC6KnuVP1PDVhmWxW1BmGTNog1zrdWaxu3rkWRUZ8",
  "key20": "5Pr3NzRKzGKW3UxcvjgbtqzZUx6v3W6vUtMfzDKWF79aVq8mvVC2MvNLVfhUP1yW8wkVY9MRJ75J6GgXWtzdSG5W",
  "key21": "2i3zk51jh2FZs87Qi3NJc8z5QLgMGjLMsxPiPPRudN2ZuskJ4kcTZgxHk5vrbUuKx7WYG6Wg9ceJLKNRYBwCx6mH",
  "key22": "DicbAcjc5XjF8LtVb2u2fcPhtv4T1PLBeMH8rcDBnZwNTWWu2ommr8yBoyFKiiyjmyAU7fxQz7uiJFg33cbnTZa",
  "key23": "3UHTVwdjBSLMgiJXsZ7cZtP6mLip7Ud1Ep29LjEuhFPg7dtFEjxi1gBepxJUpzwYaZgRMcDDJVZ8EdCopCLVUtzE",
  "key24": "45DpaygZNGtzbAK1ksMT3P4NVCFFbAXufLXLBjLR4o3uZDzg6tBYhNGUufvqQBVnjobTNKW9G4AXRsa9Ag9gDfqx",
  "key25": "3VP5dTkMZ5ksVdSod6VfgsNs13VhC83uDvPLttv9A1vvYFDXbstqUQfieEcf7XHaC95mmDeNPk283iSsSA9tjqq"
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
