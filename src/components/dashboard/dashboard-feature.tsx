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
    "2mS3XDsZ6kKs9Qo5sS8ccTAcudXLJ2ccUEwychSnmf9fzUNC66iSoQkKCwDhkGcYb4gubiSUCZnNuy1uYkd6gjYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EgYvQkDjeoGPXxJuUFy1q8UKZzfP9XGnjUPvzBgyketWJ53RxpGApWHjdWbxhERXuUxGNFA1TmJxkfCENQ89ept",
  "key1": "4veQ8sdhaVBx9tnKVQAHVCosp1Zm9D9igPoV5BukEbvdDbegQdScfmAtafAGrSLac65AixkwNqV4xW9RnbEUqPJr",
  "key2": "2NuzWKKVXAJQbHUBEm2pcb9eLBVtXdjfhiykwsf674atkcd3DohXCVThT9NmMKGTSrNvZ76mKa4zvJtaGaS3Jz2f",
  "key3": "bcSUe4L2hgJQWTB1WaweWms6w4kRKVYvGexGkssPL4mWAPoNfG4aTUdwVupkR7SQ62ZkBiLSDLLQsEsvJXXKRcM",
  "key4": "2JioZbpd1mAW6JMbGeWbSy75yLNkTEPHZHZaspeY5XUfYx4LHfXwkRpkDiBK82PAS2AJfaMKbjKgtbtppLqBE91F",
  "key5": "626BwUP73cFqf8jLfVBaS6EASjGAt2ffieqALtKDuFw3hJMEPwXGoz1XcCMpj6DtmGUmYfTs7uRQP8dodwXUqVC1",
  "key6": "3xaFzhEkixYh7oSyKRQdUyyXbe6JTxD2h8g4fVzpnhx5A1TJ3CL3U4ixxZtrajF8CXf2YV3Xd1ihLZZVcS6uVaw4",
  "key7": "59A1GPhWGdP5Bgj17fHVCdWcc8ivrhPnaegW1nHexVGoEFF1r5QZJnJS3hGU8BUpNvNfC6pjybaf4mGeyi7v6LL2",
  "key8": "4FCNQFqyeEN6Hmg1hPdzfV5v3aRASnEBKQbYND8c3s35HcwzzWj89FmMmB9fJovKii48KNAqKZADukAugdPmvtps",
  "key9": "4WcHt8Y5LuRqYRexqfPjb79fYFsSXsAjLLzP6DnPHGmhzJN4yzQyggWNjqVwq1Sw9Y6rD56EEeiqfe724CseMJyL",
  "key10": "4nJc1YGKVTJZv3p2ZskjEFVEKj6oaHJcVkHNfFmwNUWGVz7Tp6LYqGAYzZ6VfowhJdqTdh9gVq2r3qT41BTc1GCG",
  "key11": "fri9FCoLEa4eM34Mp7rGSpbaotTiZhUgsoWDMCe6xmPdzKivWBdhuWLZh4xKzn9z7WfUr4JQHUTv2fk64Bz6ZXe",
  "key12": "3CH1yMwvgbV3MN2HLwxnfoCyT19HQYCZ4DkUTd9yr4sZAcbVsvDptybWX8zuZhzrwhtok1QZAu4nXJLURH5uA8VF",
  "key13": "2DpN5gjEhKSV6BnK3dQoPjz74fBvL9d8aUWFTJ2YFnJ6PoaT8XJK1ZD68aZLRzDervvmPwduU1xaF2zBRmTsCqBx",
  "key14": "3D1Uts7NmcCCZKdyKWC3h88wEX2mMMiF2c6KLWYgZs7pjWN9abRTcDuXk8QUz18inbqRmj4VEpk8zDKX4dtKyvoN",
  "key15": "3MFTQfoJuvRdKB6N2vHrzEhcS4oS3HPb7LHKwTwmXomVf87eG495KG3Wtwv7xP9hqNbZsoWL73BBr8peZDZEKsab",
  "key16": "3j82csmydhSzRHZh7c7JgnLgsFXyvTQGrR15SQSeJXCmmm1TtjnymnYKxVnWFuDmKig7AHvqAgYabBoNb4QRPXz3",
  "key17": "kJL6NrhxqKQcECxyLnAJzNZktUkS5HSQ2v3E2vw5mVwhoYe4JrcL7cNRGfo1gMThi34WvDwrSHcojd4o6M7Ai6k",
  "key18": "3yPSdVUhPTvALfqjZAb2PwwpSps5KDCtd4oNc8pLBuZdZcJ4FUf7mCEc4YJi1mCZbrRNUwj4Yxp9ax4MvW3GQr49",
  "key19": "5T3W2uCTBHiDCPVfMDc7u9dzEStRV5KWtG4YqxFDvBKqcguGa4RkAxVDy87dVe5HEmFdoNqUPgZYq4oVuc8LMokj",
  "key20": "3CShDMTSGcVTTFuZ7dXaojCzmJojupBVD4c1Bg33k165AtzJdB9khYvt1WHXWzJnWDxk2R29m9m86E1AtXdY9H3n",
  "key21": "2cv7KD6pNsM15voyxfAWcp1ubQXZ9evyDykG94FLQt37R3oKzLgBmdocbY63bT77UVN5pMQS8VrXddyTz6cYbpwF",
  "key22": "5GBqbhFmZBKcHwNjiQLCjmfg7A3onE7Kdgwms7firS9UDAuB4QzzsmV1L7Mc8XY3wFerXRiAR5o7zjb3pJMYcHh6",
  "key23": "5mGtEvd7uixzGSx3be3YA4YNk4VmuFuBQ7c4UfskAYk8wvmY8V1tnGHPS5d7A5p66rjX9niASBquD9WdVE5rUbhF",
  "key24": "5iXAQRTaBwcgkNyikYwBqQrcs2gp3ZMcLEbHDE9RH8aSYT6sdSe9eUZFVATwhink1TokoQcXR9yxQhDg3Z7xFiRJ",
  "key25": "42fmav2GrCPKaEk4zyKv5pbHWSHDNPYhPhTXp5RT7TLhZcfQf97Cdk7izbZvy5vdmWjCx2fTrXTnLvcypHGjbBn6"
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
