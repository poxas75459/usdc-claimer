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
    "4EDaqnuttMUZknQxxwcG44K1cJoe2vMszxTXmmrD2Yb8ZCVQft8KRwztanFWLhKr86ztVZ2VfbhRKRCRw4oBrhCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lc9XdHS1f3pSasAHfvQ3HE3giVsVdfiX5XCr9557mxk25cYGqjAUqdwPi9jMfTG7X33z6CuVuxUofeySwt2BuU3",
  "key1": "aPzjxovRzXb4CeufLY9FVVBGarep2gBA8oiA6nHfdWgoKPdceXQcEUNHN8jft34jcwSFxj2Z8ETKhHA575aSmjS",
  "key2": "65yx9M859tShMvGew5xxbZW4wnB7JxfUqxWKeyiSkvJgXniAEMZajjUfzJpMr2Cj7jfW1GTehRDDzeG1kyMShodh",
  "key3": "4AcJLqvmofywKBo13e36kKeU6iscdW2oT3hvutsKtBw4GL5DVTmZ4uprRvreKT4PNpd1k6Xd3HUWmoNhWc6f9NS",
  "key4": "3GqF1JPopTVRRBGUr1nSayWBTsBDk3HbxvgBatQKUbr9CvNUitW3BG25H8gZ94toEZKFMfmevK7NW1htJPZ8vqPN",
  "key5": "3d7JyiqhwFBN36p3r6xk2ZGhS2Cv46aeEdVv6GDsBDQ2HhuXtdHJaTDgLzT2zcc3LxJphHNhZAf9WcdFJtkxuj9d",
  "key6": "41frMgx9SZugp13fYSvJXCZNp9Hu7HMTp7qwBj5bCEcyvsm3cyjmnAaR5qkJ2b99hpcuzhEWCtSBY8KUAmZLyLn3",
  "key7": "2nLqRoUDKxrX8V8GCnmWvKwjB3Dmdpnf7Fubdwe1FsDGEXndEaMEi6y8PFTSzjSh7T1E9wZTsfrHcJeZzarUy2Yj",
  "key8": "93M58PSMx4a3SxUYR6rjWYYzdiDfJrWr8kCVXToQJu6Swv7N7ZeJD1dZSCWm9Va7Arn2aFqAgtFbqWkwt888LJm",
  "key9": "4stcg86AHgCYGbbU2TUMnwzLYqYECSPsPsXahQ5hnkEZMZHD3T8QxoepjPVXqzCi1Ai5VRJxB583kAYC2rx2QhsY",
  "key10": "48jk2EMQTqpewfKhdua8tSXzE31AoaEc8GMEPWocGX6a27h8zbz6x22kNdWjauddRXNwpbSykm8ncnf9ZePT9uZ6",
  "key11": "4a2GvaW6mKspvesnJw4MuyLaR4aTfYaaTBRh4cKL4EGRuagDdAYyLBujKpkVeoYoZziuMwmVw7u27CnaYaX79T69",
  "key12": "2gpeUQGeioPYg8ebFjd6Rky9h8jHRMvxrTA5iPzUMuG4tzxmKhZpKEvEfQhN8fTSfhweAqnSKcwS6AQFzVnDGbdp",
  "key13": "556oKQbZpjHqerRHqkZUAwnfx8DLeEompiVwKqmd4idq1Djmyg44jwqByRUauAdDupEBKbxxsMzzh3rva19tBMVk",
  "key14": "4S3EpkWvFSiMzMcJDkftYK4MCpVNnhSp9CFoqJjkNCkDuq4HPKNbZTGDx9XjrXHdAak4wBquRHpKWTYNxrqEiLZg",
  "key15": "SjU21kXnNJnhC5e3TwdA2puwAdsUrS4yRfqP7GZhJDQJjKubFrxsXvZbhEySazECzw7pQjnQqqGptvfRuwe8xXJ",
  "key16": "4THA4iw9kJj1xLQX7LGGYy7q9CZag5mD3fMRWM3otDdpBrJ5uxtrrL3vL6Ro2fphQAtfSjvnz6i4dxWqXUJYx1Wm",
  "key17": "2YCwqJkPv45XPREzTBAXSCf5tFZHV8cn1Py4qiGmsdi2isbpJVFMkfakpKHPbP939g5eE1F6mrJMwBSjeGKCqJKx",
  "key18": "45k5mqgyRVt1X7j354ob3gL4vnDcJaQxWhYSNLNeEEiVqQ6pdsqSs6ynRTLBJJXGQq4QahZ3pgw7ZxTR3gLFHHS8",
  "key19": "5oVRZJx1rrSpuxvkSnwmSw9q2rHoBMHkBNCmqSSQ9NxFGqN1W7zLjdhzQry4PR3DQ4n8a1tpRQttXWCcd4iKjoRP",
  "key20": "fFApSLVV8WYLSEw2t2VBSfRr1qh5x5aVoLDWed1Sgxwu2P3asjBYmubHxuBq77dtm62ACVTMkjK1gmX8Std9xcp",
  "key21": "EnkK5fYuHjWgpAk3VLnJMcm3QzKxizUoG5Si5iR786VEV99RwExkALDzMdW5q8CHzvnPHp6xPS6fTeYs9HY3M16",
  "key22": "4TUocAUhx4KDajAefCCXpoWp7NQuMev8afDEtgGBmAdn4JuNGConS9uMGqxWbKXRZ5Zsv9n1U8g2JYEYFrC6dp3c",
  "key23": "5yAdmzbRQwZsXBC8s8aJABsbZgzPxX7ePRfhq8jRU1iCCDD89nzjzuXzbeezrgkT7zR4Y4ZwVTvu1eert2NM9GFC",
  "key24": "5U3Eq3UzJLu5ehcaJ2fpZtuMcsT4zAMDmbfhCRZ5N2Rwc1aBrr6PyTSwJPhsBJX584XCA8z1AF2WkqsGKUtynQwd",
  "key25": "4aoFzx1AUKkiaHnGr8GQG93BgWajJKJFQsANHDH1o8aC8wKSrn2a2L5WUaNpV7QGLk5W3USJZgnTZw1t3iFDZC48",
  "key26": "4TjWZ3pkjnav7bZR3gbbrqUCpXEoyQfss4D582BMUo7LwKtzCKgTn8tSyyMWYodJCF2Fj3ox26QAdC3nLRGgsgsz",
  "key27": "4aKW3N3QsNJp3ABmRqpxEmdDj8sYUyS7NP74fr3YH8dDt4msriEanXZ6EBocjDfbbB4SmHXoHMazsMVvT7SxbriC"
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
