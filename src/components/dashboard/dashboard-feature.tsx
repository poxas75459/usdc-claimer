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
    "5KBCGr9zAGJJk83FwCAcuU9jQhZGT2hzhkJ8ncyFvyRiauLgFRwFQo3LdZ5W4oz1ZJXiEPSUHTdEeX7U5HQJWRBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VXdom7BTtj6BRCqKSE7cYJFSnhk2B6vxNBPgnSSc3SVwYFtpydswTk9nivwkoL3AGRq6JFnRex4CcDBFH17tTyR",
  "key1": "3oYgAaWQsnpqBGg2Qkk1HDyToz4fa2w4GqtEWY5iasBncxgn2Srjb1FdnBz2VBwr6iXZc16aQGNwWDA3KXUedfhL",
  "key2": "3HCmpwvAT4FbytwLarVE4xiVacekLaFfDup4WtyRk9mHaRdT4AhhExNoZ9XNdx4pY4cSaG5SsoTKjd9iH6CT1hjx",
  "key3": "4HtC4FVCVsULmZKFKpa5vowKTJi9k2bB7sYf4r6LUxMp48hWorpgEXrV9sdyLyXy9DX5PdZM2VjfwhvWNPFNPCXC",
  "key4": "2MV9P8XSdEvuamY1BpuHeXetUwsXD9YqPCZdNQ7i7Btgh3yzYVWbLJCqF2MkkPqDMviwVgi2tfVsY4CUTf8TBL56",
  "key5": "67NveYTcQduXAXPgUxPhsyEM5GWCjv4eeiELCLfUvHmMsFmdQNUKzQqsH3BVfHVQJysAav6SdYvqJj7LnoLqh7oD",
  "key6": "fdnFNb3tgFJs21o7ziRCEEhnTv5apwqrW2ELmuuMCLKC28ooFGZiMUkRz9k9Z1hYKsptrh4XTcNFJdtHd1TeF33",
  "key7": "2A4HtcVE6iMFDUhDFpPyf8BxacEC4HwaxG2nVsL4y9yCmafQwDPQHA1GkyhHTbrKN9jzVT5UYyUNaFnxpDQsAv6c",
  "key8": "3EDAouLKCKzQSgRAKMJsXV3emxS5oSkF1kM9xjDjow6dzXBznH5Fx4jRiXnqLN5RxftYDXs6v6Zxyg2jTHvL6BYj",
  "key9": "CFpKNtwdvQchSeGhS4d5uvbE5Q7L68CAKXGrvkHibBHSCToPoqdDg65SVmmgz7bNs3xya2ZK6h9jEwcPVCMjidN",
  "key10": "2mjbtYMFqTpkcE2LGJfHoMgrQLq2aghyzm9zkoGZ7s75H9h4xFuJDsy19woL5mTZ93xtaSHYtn6oTiq2oV6ZUqhi",
  "key11": "2gDrdSb28rhQWXMfCne7fGZvxpL7Ec3vXHaWs3nLDGnnXyfT1EjNo54NGXpc8qgGEPkAKcYdEkXPP4Ck1ZZDWSfH",
  "key12": "311KTVb4iezRCzREHB57hg9ecWbfD6Xhigi9sFU6spRaffnMn1XBUsGw77kbWvJBoiLDzo8avZCcmWzBbjJKrFQJ",
  "key13": "4ZC48Q8JgjJ5m7sHkQ92x4uvFpvsvNkQE5Hxuafx5maycj5fdNH9pswaPoKvfWRwx1Mi7yr9rbw3nWjedy5rLst5",
  "key14": "24B6s3uTZo9oxurpbXzCN3e3UQw8gN1NLz2L6XvGK4DX3Jt1j354PwuL89niMtnohRjaCsSYxLNYYcaW9FeTHe96",
  "key15": "5fyfjPpKzWNbZvmx6hUrg8njDsZCzgm5CfU7cf7aJiQKvRt4n5R5kdGaUYpb6HQFoExEs9F24fs74uESyzn2MfmV",
  "key16": "4pNbpJ7ScjaLpn4zEgX7Njo4cBPApQiwj3wajJimR8j535LLWgWUhXw4N8VhmYwLq3Dx2FVCXspQ5mux54Q2Aqtf",
  "key17": "37RXhPzDYtAh1KQ2ej8vDLeYRA3wQoU3VrBSnd5ihnR4b4Y5frz1K4CnUHqgborPcWPzDVuRwXZfmKNfZ7E1LXm8",
  "key18": "4CK3bAEqAwCGGvn97zMSSbJHWaEfa7aMeY1HYc7TYvxckCZtjBxXjWsntVFZdqobibU2vwXmaFQZEr8dn2GvJu7s",
  "key19": "5o83EuKja3qTxHXD5v9KLbgnMnYMAm7SJKZyhi1XYXKNcj9ZqvVTSXP69NNcXQvWg1pxgDb1FkzvAEZwstrmJdQS",
  "key20": "iaQevBaE8suLfCRf4wo6L253JQvxLTXs9vBCJ9UdWBiZdibthbaCC6HRnmXEtkp3yscDjbhqLsxmiXfiYiFEtGx",
  "key21": "i1r6rsEo1QQLg5ydy9FStWdHSPqmidmxSraKPbvaaeH4u3HbK3s4wx8sSzqAz8YVHX7vfM9YP36UVtuiARNSsnd",
  "key22": "5rVHpMmcsxdnoGpkfvdk2inMZgoSg21MekTK29dtP8YLUxetnR2so8smWpr6LuJndb35gHmPc6LbhJCqDS7L6jy",
  "key23": "7Tr3YA3VmuWVxmanigsJgPkc5TBGALm5qwsxh5x1ikxPVGuU7RLgoecVgpVDmkGabG8WnmNg8hT12t6ezHLxcCV",
  "key24": "4m1vj4JMLwez697yGMX5zC2vBQy2LPiScNXd4cA4gzJrnmDdfJPiMFwMhSemLouFoy1pVgTnosJrD1W5QaTHcGV1",
  "key25": "4RVKntFmeQyyyrpsFuHNLynnGjpjYeinLahge5xUSdyKC4PQvZ9WxqWZKec1jiJcfUSsaobqs1UaxSDM3W4c7dGp",
  "key26": "5hG6sa4kavjBNUe7MnUCXoEGM1KqTRgJ1Q6Meevnitp9LYYM1gMKZY9zinXoiWLz5zsNJZQvuwkNVdaRDcqcvLtk",
  "key27": "5UhT8V3QrawGiUu1iPpLfe7EUaN9nxfEcuKU6vtCXp7Rpa9zQuAghKXDCnPstBhVDbar2xqw2ebBUnfYdYeUgNfc",
  "key28": "3d4CdH7rR93KjXWm8tco8SeDnfS5kZNzWJL6TEw9bAGDGRT7k6TJY6svPvw71rZX32LBRAT5WqGFqZ9Eg7wnB8C1"
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
