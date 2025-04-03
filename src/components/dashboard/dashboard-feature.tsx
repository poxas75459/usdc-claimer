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
    "5Bz4hZXcjdQGoQAcf8TRAoUQwEKPWnpi8F9Y1kytzJgqxHSPdRLjU3vCKhJuJ84ot2Tyvw2MCV3Qr7anQSJS7cbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U3AfQmhLknU7CdJWu18EqvMqsm3VFPvq8HXuEcRNY5UybkKVSevm9VbCZ2XhbneFLjeJXUkXiauKU3xmsyEBQkd",
  "key1": "34Y7nEgtTvSU4fJQ4kg44ipjR52s6b6cWrrsPVxsRYwpxpdm8itkU8Xy8YxdLjYX6kFFu3YiSFEz9FURzvFjm6X9",
  "key2": "4M4Lyr6G7m7UoaRcAgwgKZo1jq4yfER55xp9WHT5JEA45Xi6kjKCaKGzrUAt5LLnzF9fKckSMvZ7UahQ2a7Hjy1j",
  "key3": "3y6W4JHJ6AcZuVR5RfGswbrxrYSmkv4jYM7n1PmxFvfsH6K4NRp2U2TzCCTmGdSG8HFmV77FNUkiLLf3juvf3iie",
  "key4": "55WMqoJPnCDgEuBX4LAXpq6hmWV7VavnZUD4oFh8uhD278AzmUAwV8QBx2mHwRwgVX6G6kouGNff5C9GYYt78DfD",
  "key5": "25nmrVSDw9gsLAx3GXudRcGVZC4K7vPwUwqFjAAc4qjfRYqSpJLXnFdpbivY64LLhwWeF3vsHYJtRSSo2R7JcBw6",
  "key6": "5Cw98hrM7eZUrGuaQNzYWwgwWvFBHD6hEVVCPJbpirhDjUn5oSVmJi8Ss4d5WFMgoNwnt6NTxuyyTNcsUwY7MLkd",
  "key7": "3JQdQvo598UWCuaDXxwbXF2DDYKfwk4owzE4HBdcDYhoT4afJDKjjWWNmn8pXxVeJtiBKSmjQecyVJB6aTzfChSd",
  "key8": "Ktc5WymM5gGFq54Lr9tYa6GmfMvDsFDbayUDNgdysyDj8UDNp9wYbX5pB5PqkRXqZzB8TJ371XfkDRkTrhKLcUZ",
  "key9": "EB61cjVM7uyvucsjiT4KdgmnVdA9KQm1GK5ZSckyyvxkA3GUnwgAV4WSBnhWxYmqsSoEBgu7ga9bkyqczST2NWy",
  "key10": "pe5H8Eo4agDnLaAZGJnzY5cEqpU3sit68EwzCTzzJVbrfh4Ljstrz3H4uyh8k79noXohRXMizN6UbD7aZRWTAJn",
  "key11": "4x5LxHcdTGppf617cCfuwpxFpUmM1Mk82xkFFHWTStg5VkV3BMxc5tQ9ok3GQ7nVAo9kpgpu1kPMFKYJQZGcG1JS",
  "key12": "2CrhEwP7mFwoYQJQthq18RokDrsbT9TcNzekfC73fEYufqhfT6XTaKgbR2e5HrwkMPsgXJSsNGCXYpWvLR7rv3Ki",
  "key13": "5QX7VueYzZ8o2vbbHP1itm4Shifz9jJGkgGHuTjyeh2VxqTY73oSF7tmwCThoSXX7JFcqed9Bc3UNijPQDFjkSZk",
  "key14": "4ffARsz3vi9DSz52hsDxGPjxVXX6BiK5Y2LXZr28ZKgwJwis7YA3i2fgPBiSPF4B4ceT3wseFJzdKaBNX5fDNRUM",
  "key15": "3MBfBCjRswzWWaEB398sys7pWJyXuVJX7YYrh48ZHVTcNwhv8gPbz5XvEmiNGAKUGr6jM1cvJnX6nx6VbSX8M3jg",
  "key16": "4vprnYvQQcqHCfGrUrjKKmXZ9Lenvccjwipaw9Ch9h1bUnqWApFhRKKom6BR47nyrpxCi5azrZprnqB4mptQq6x9",
  "key17": "48WTBo6BZ174gmHqf5NTmiE4H2EQp4kNgGuswrWEkM7vf7VKYzcUArzHRbVU28VbJXhpWTBACPDgAvMvtEuVNxiz",
  "key18": "4qhXFx5bwA67ueVfu41weCZ433zgBE4MMirskfziqXawE3vnhynp7VCa4hYtD8tFAqFjVbeNCKzEnK6daYfi9KFL",
  "key19": "5HvG8PMXg2Ak5icRm1WHYqYT3tw5yoE6F9gBdhmfdyTbZyEekyPMpA3vMCoaLiVMvvEUqdVN43VbzN4ocLwcADPX",
  "key20": "5tGrJHWYmQd1uZxBBLRUhn3EGez2rR6q2CC9wFJ2ymszqJcnZKMzKKSt67vc3yY8YuK5mHybgsv2xyiHvHzyjgxm",
  "key21": "XdLbzuMcReFYJxKoKycryp8htBrLgkstNDsig5Mkop4SVSqj4Ds2qkdnMtTEiz5t26UHQAGN98xc6S1fNKd6daz",
  "key22": "2yPA69fxJWTxhVZQ4mxSVUW6SGPawBRRaknWvBmNzahhG5G5AHv6W7v2ZZwbhhRrfzX7SJYbaLEtj6jg9uo6cxcV",
  "key23": "56dWSPJzyNSfjzEhohztsVywooBrwbjoSg77cFdNAcCr56nh2V5fvCb5CTQYxVRRhJPAmQU866aVvFdA7wRauM3D",
  "key24": "2wYafNnF4ysZFhq3c5Xk7XK3Z96KXt9shJxJXFKbqkyPSrtjeigF6BrPKW7dzCgtpxyDqYNPwfwJMoCkDmYZRjzM",
  "key25": "FkrEPzAY7YArmdrE95FDGU62EkQQEG6BZb8JaB3boaBgihqkBSDdeQdFKVGbQjmmAqa9bTQgpr9U8pXH56pg59e",
  "key26": "4vsTNzA6fo6CM97dGeXFUnrDUA8VGfTUQpCDVcHFHxX1aHceSrcj3qSidZ8EDd1PM5Sj39txm4nribNCWVcNwpT9",
  "key27": "545fm1u9hvwNuHVrRytBxrjeAv1Crv2oG6y26j4ErrF9NEp1wdzxDvj95UWLRx3cZti2F5v22oh5J9oA7tgeP4Cg"
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
