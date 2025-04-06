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
    "awwypTy2vk6uaEvMbr59x8CHX3qc3Vkg7zpxwYLzZY3mt96XFVkjTPZMGoRJtCMtwKGVLMkRpfsXyHoVPDqYZ8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fUcftVu3z7jrXCtKedehyBuWg1cZUSN7Y6xexo9p59exJoYXybx8jeduJtZhzSrXwP9rmeCq49ujY82chmUTKML",
  "key1": "5urNUGgCwMYLz4NkWa8cihUconh71dip3kRfyitSxDr8xAgZYV8L1vLUMq7hCAzHhboYkHnUiEvq3HR2PXGreyfg",
  "key2": "5fEBGGucTmBPtZeL7zjKByrDQnW4ghr921FcXX89xAwS9E7UoyQU3SG7kteCQBhwYGXRPBoZeoydVDz2JPH8swtj",
  "key3": "WzQtaqFmM8TSzVSFrYdbZzWNWPrrWsiZf4z86LxXMzjxkwmSNymLsv7ccvKJG8LARxQfbxkHE2Lqn9yQNqaAVBX",
  "key4": "gWPN3GUYuzQYpGD7uCPQEDGmrp9sak5xfvqHYhM9c5KdBsKtRXCzzfSe6ATkbbgVFCW4v4MawaPZvhoJQoWbhhB",
  "key5": "3mkBWffG5hZLYUmto11am6svpb5gfAThV27WrXQhTTJYj1WfrNVvWDyN9oAKoUiJRfeM7fA6AMrbagbM91ePYbWF",
  "key6": "eJKkMpexoCyZ8UBvtu3Rc1Hs72g2SXY2o7Uo8CgCSVqAoZdy4fTmkJzHP9Ty8tJPyZjrKGeVfHfDZhMwHXpwGKY",
  "key7": "49UoueEX178Mk5n981JjD8f8vbPR6YnAyKMfwheQGnQAmodZSSwsm9V2LK1JZBrspB1iXB4Ls18mniuP5nPzDWtD",
  "key8": "RV1dBy3uEhKYYUejyHwTxu6XLyXvPk1vZWQZ5Qc9J8grahQjBFDroSSyxZLfLdg5Wf6GCpHUb7DmmQ2JtSv7MAj",
  "key9": "5V9o3cfwUAiuKStbgqhqLHxHyAk7u3so61g4i9vbb3MUkJ8MBgzHso1GzteEiL3dbLVmQRfR1hTZELRb74MsQV1i",
  "key10": "2X9E8TwQWFWqSdVtG7ofugc4XCXsqGQrzSz1aoRQwWYn7S5qKUhAEPekAqvHswHCMyxbubDcGMYw9j5HYS1dCDGY",
  "key11": "4MxZWvv57XWmdhdzTHdxrGhLFPq6QcKFz6LZFjn3jRZJu6wR32bHrJhXxYX1jSWA8QgpB7hHujQ9PmUsPmcpiK4U",
  "key12": "3BQn7YrnF7MeDFdgGhBbgj6bpkWLShbTVwFYw2SXCwwqK4bXuuZfi9CrC15Js4NgSM7genr6rSAYTynuJnrU2icJ",
  "key13": "34MY3Vi8mfjsPoCkiqZyb5Ybyt7paFy8m9ZdUCZ6aKhUKhZ1zqJMmCs1F13L3CyFoKFMT1inPP6FmKnstMMLPiiV",
  "key14": "dzoZ2kMFYw11JrTrwERht4mWi4SgE9qWk1moE6Wc5jYcExQPS2bvHrr5TuSwW1QfR4EkR6rmhFzzzFAJAGgxo5T",
  "key15": "xhipVu9ieZDZBaTbjne2XpKHoA1EhTVECbQffk9QaYQTGVupsrpmiz2Mryqo39vCXYEeAAKDM3bm7kptoqUXGjN",
  "key16": "2vWAUN9Kdgp8cmNtN8nBdyPxmHRgvGrCatW5kWrbCDWz7q1ETMmcoW7W8Rj1Rv4CGP7LTzsfk4yYFTJJHi3QT3cY",
  "key17": "4PRpmwThmtU6QJmSUkY799L3kQvAACc8GbCnvjUdAbcwNT1miK5wocVgmyu17kSoy5w6h9mhLVPne76f5rckQzHT",
  "key18": "5UV7o6Wor3XzwajKEvNvcGSs1Pium2GtxNYtPWzxiGVv9ztjUwAWhKZLpcZtXa7o1CFQXBHJyZrQFQMdKAu6NWWQ",
  "key19": "5jYPeMVoQAZaTLUkGyyjDmuBUkYobsXuzh26C4mo5KB6cccpAw3nWFvni6eYaVK5jbfgi1xBFuaZsearsceTprAW",
  "key20": "wrDQUzR5nYVhVV59AufjG6LfasUxm1rfB8hKHyvt4ETQVBgrYbTBH4dq99nMHiBdiUgitpcQBkakwKD1ScAeAez",
  "key21": "57GcBB8q5zx18iPCFE3rrym3USfiArpqkuY37gyPwNrMLYke6kfDqgcbHo4syJzzAxJUEyfwsrc1H5rASvx7Chaw",
  "key22": "3t6HJUZYUguLzP3KQJNFKvNbdoVBzGznaCtQEe4aLuTiQHvzB9Mb4XCwdBen3TPTxjWZ1VfzLtBU5Ed7kpd3WXK1",
  "key23": "YHDBA6zgYzAidMQ5c7c6FKSM9Wknyw84sAcg6jebbpEhmfUQ9SMf2fJmWFAgDbBDxpV1GEKgZhSBjD7doN4JD1A",
  "key24": "5m5vEFkMhCPBQXeEcCBKpJXNXmP5HGirM6u3P98BfD4y5Pjz3kEeU1CtZs7HYqw6hzaNtxa5z8ycqDkYj48gfJcg",
  "key25": "4DbFkjhApNgc5tzKFp8Fw2XfPfS2ZLCsqxw8FvVW1ucxhbyp3qN1KbidWPGThc8wwADWmMkWAoZtmnYeK8sfUjug",
  "key26": "57CjrLVL4ENmsfeP2v3JZRPdBhj519Br2mX7jq7jXW7rGAYbnUbwh3pJhpdMAFNEv8pLAL8au1mgSiUDxTUrLHdJ",
  "key27": "4bj1VWhhuN4hvFdaG1KWz8ANLf5UZ1EZL3JjQ41N5c31ByVfP7er4KWwESHUUbj4B3PKGoD7JKThfPmYyKtAue6D",
  "key28": "67dpXfYFcinbUeDd1Wxv3tD4E8RREocGyTfxTs4w2M1JmB1Xyy59MWtkwiWDz6YxymHAMs6kitJDN4N1MvzMBone",
  "key29": "5ona8AoDB7ny35Cm2hUCzT83oz1PFKMmsXHYjQypzrbPfJ9e9DHiyRu5Yx3wwjTt1Bb8byiA59HUWiGDaHtvZip6",
  "key30": "21dvbc4eapVuaor9bktfmdZsdyw3jf55Pqn8dJ7PbAhjp8hke8sTYfVV5fSB6L175WY2UF37hqpNkN1Kdsugzmvy",
  "key31": "34qWR7LFiXohn8B2go7uMTQU2V3DWaAozyat2BgXkqwtvnqESt6yzYw8EGkQJWGkAqTbhLBwtfq3abceLjdwTs3p",
  "key32": "3PWcnwZKhVwSA8cWm9vBiWEjmjtxqHez8v5AUUd2xhyBAkm5xpb2NDcPhYsAgZMoVtT2dRoow1ZkYCY6LPetSBnj",
  "key33": "3ULyTE4xCzDLdscgRUr3oYaUmVTJbtL8uLPwUBAdSVNuWhBxbrMfXd5Exwr7qoFDXqdcpknQeais6BVdpHjL8EGj"
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
