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
    "3yVd7WmPz4QH4eXYvRjLFGxQyfgug4ryrsSNszPCTzxmPjFmAdEwn9KmGtPi3d6XCyss6juNt2LS41N8cRPJm8As"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B76pg2Pxy47Pq4bcLLvKUWeZQY3pzTG339uU4W21TMtdLBJ1ZHzC4XDBy7wZJJidd16CaDgJQe6cSooozpeB9i6",
  "key1": "2M9t9NV2NkSRBx89CxB2MGWKSDaXPCaoh3UprnS8NSGHGHqGVPU1Htn2z32nD91jbDkjLqPaCe12iuwjngTpMKsS",
  "key2": "5eGuRjjzTPHTky5ruSLHWqEA8vvkkH1GJ8AR1mGAdKW7rFpqF3ppLi2FcvprQBXuHFZaGiZzoYgniF1rCpAMeSdb",
  "key3": "5rTJgFzcVpA92sLsVr5AuFReqU8Wqm3SPi5sorqwXHuhtfSeNF9F4D1iSdprGXoavxPqCQcK2kEkjtBc1Lb4JPsN",
  "key4": "5r1zxp2NHSXiS5nZ1gdbw5JFPZDFebwenhoEGoNBpxLW96DbPmN3AGcqpymdxaJkSPezqdGPipgUJpwjLFHn3Vri",
  "key5": "3pXcYwgTLn5zvLjBckRTQbjdSPrsdevQJjKk71MTKM4Amc5Eu4mTrudeVzzenUz1uJFqHKB56vfqBZyP37xyXYWS",
  "key6": "5yj9WAEc7SiF65KyXDLzAyJTbqf5D5Nv2bbB63CsjzmWPYPpKBjESNv4X2BrK1fmZGfi9m1Fqimb5GSk3KJxktnw",
  "key7": "3H51wdYBTVbmjLHho5HjjPvvrUjiSrMzu7oCjJam8oZ3Am8Vj3AZ5Zg1Xi2EbWAc8iiTCGK8WDsRXGHaCA72fVCo",
  "key8": "5qEe2Vd1c4PvVV4RDaYeYUqmx1i7kYC1X8fky9XtmBLJMS3t2rmtyBLUN1g8YsP8ZJoUi2SaKe1XVLhc3FzdscU3",
  "key9": "3bw4V1hssieu9pB5vQcK1fhQa5tqJyZUUygWeFPSJmQfD5hYhTLEDBgZ4MobRkEmJ3WSnAPYDQ4heTr5ZLfdwDxV",
  "key10": "48s2Tzxe9yqosDujxAK6DbqgBDYFTbxr8Fx5wHrb3ABV7TuGEktjdkkJ74hp8vo4xmoeYD3NFisg3jASeifKVQa9",
  "key11": "3BWoUjDnPNgLyrkfsT7CERwZxtg9vJbAEiRcPdYt2kyMhWB5qQkhAwxk2hju1e9WQ4DQgoaThz7BUT8FoyHu3HsR",
  "key12": "4vCHee6nhpxFwUUmd2aCk7WAnpqWV8k5QDMuLkg9cBQaAHRpWTgWicJMZpii4S2gGmtLSzC4uNoHeYaNGS9QKvRY",
  "key13": "5iZ8W1XFubc4kXkukgTNHMVJvAw64gYZda4k2xrX1nhNDs6YDxdyw6WMmHhH9rws2Dw92wST2yvFbmv1NcFWqS4E",
  "key14": "2ju4Ku35HEYivdRh9u2efZhdL8bpb21BE3aztbE4TJPqEerzZU3oQ9iE6yhJjJopmwjq3hAJq7QjgbqrUMKhhzCA",
  "key15": "YkaVspdHJ5rQZVLSExop93ZsivDUhPB5VDifAdzwj8VVC7oVVf7vDVTt6SouaqqJGcG5ALYtBbc3XqzCeNcsGss",
  "key16": "2XtJYUrbEL3VEA4L59SsC1p5oZpdKv2LqmxbLFPXBpE8KGcsQgFKQLnZEcYH8i8r1rFAjTbri2bKKfZQwBJgUBXA",
  "key17": "2i9eSEZfkUHsrLUcJZJ8b2VZFLEm1cma8aLwqJ9V5ZXyNyQFTre14P3jZEuC6cqhtCqraauUS1gQQPZiFDNA1zu7",
  "key18": "4B3xbGR2Ac5hbR3wamahDUaHjtqmkSDDQAnJAgR6Es57RVJoiL9N4TE3MHUBBaewftyj66aGUn7b9kvZuBWNy6Ju",
  "key19": "4UvBQarpAXKE5sgiY5RMkhhmtvkaoBm6WrnuXD59AmfwkFB6rNnZxuSZnQVCtv6vyiX25LhyDSJzvKmoEKRd238s",
  "key20": "38Vd8qnpNiknBGCsoqdymNXahWCYCVc3N1b1qg8zUW8s3WTFRBgEEkb3aETFfzAtWYk1CqT5mfw1cNawwF8dAzL8",
  "key21": "5cxC9j82VbjbdVMdtwZNShyASmAFNccmBEXXfmFhkaha37rJtVuhwYwruMqAfQLkKKrhWBPajh1X8cgRXG4W8kJv",
  "key22": "4i7JjeaAmbqPCt7nFFhHzMn6mgg4CBgXzJmhQCVBDquVfKQN6cDUpd96avbvJ94pCWpN4EZscF4urTULpZnZYyYn",
  "key23": "5V2KTKATZSjEMU2t4ZUVViCV5UP9KU4D2vqBV1jnz8HiMEM5NMxiqfzoFAU1qaKAELcGdWwYsswRQQcgDYmSAo85",
  "key24": "52YuVGJkbzTNiNPTX7dvFqLTQkGxNbRr7UgDK7XRkpQEttVPFQVtKuA5u2LnyBmTFpQ4QmH1SWz7WWbwjS1M4HNv",
  "key25": "5Gq56WkjedfFV6wEcZWZrSuEv4FkKybEXc6r3t8B8AhtiHP171zy2wYAiZoBbMgHiNCWJ3bWfGVoikumcTXAjJcb",
  "key26": "6vFPVdCroy3261B9k1fujtiEr1vryjhGZf51vrKhqvVy4BMF5upkTCE6bbgTMujr5WVnfWxRSafozDPi1nJT5Zc"
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
