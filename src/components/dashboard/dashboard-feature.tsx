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
    "4z7cwMnaAWmm5RsG5kga1bg7Qd15LC2yANcUDExQjR1gbVN8jQKgDZDPcC6i4TQz5B5kQJTKc1JEAa6CGSR3GKkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L2aeh8CXXNkLUf1xptXii95SNnEc9Z3wuMTp35yU36cAJJG9jFHME4hZd5LD2pCC8jc5eadvmyB4Y2Y5S1YR7Kv",
  "key1": "3wY1eU2mYTVDcaiBa8xtiqaUqRLX8jBqmcchSneFZxdm9LSffsdn7eUTuZHRcyRomW9gtVeXjq1oovqhGsqutL49",
  "key2": "42FouMxLcDsgqZEcw5fpqtW1VZ96Rsfezf6MP6MN7tTxGS2KAWgLLeV6UJYfkbV4RYtDApYWqKqaxSWZTQc7rLa",
  "key3": "3pq1KpNF3gu6VqcDPU3Nd4Hk1enEUnjSgJXiwi9mBBfFmgMen6XEV6RGDmwRkn4wcEaGxCWX9NhPNoXLGsCaqe2k",
  "key4": "3xYsiJwgPLgzpWEjw7JcxGD4Tjvy2Nu33aVJ6eqJL9uKXVB1pxKN8E54PLbpBYye7zMWPcTWjJgJrtp1ucNXMhrd",
  "key5": "HSpHM7kPKJwyVggUzXwxG654PJtsxnemHvkMGxsHwF1ThPwzov8oo6gZpHYkWabraivLSrVo8K2D7YczSK3bK8m",
  "key6": "3W4mFg94jyzoXKQGuJgX6zp1iDDKGvTH5Xfttj9FDdXRJEqP6c4FSETvdJ8gYH35nczPhwwbCsB8UBqsiLitvSQ1",
  "key7": "5e4izY9QBHiM4GEReFudm2sYBjx5A89yBUi23uNrusDpw8P5WkXpyNmndrYcXvzumq4aZwu4Ug8aPmcuZ7pWJqt6",
  "key8": "5oBzj1q9TkiwufSMTw2MUBBkxxxcecVHN4vVtoM22y5BGaALALUUMbXdc7QxLbov1uK217Z8uKGnB66XR7bWSZ1A",
  "key9": "4TrAK8LjnhnXAzWHq8mxhzk7FZ6t9YogePEFfHkNm8BQFNs2NJze8is3Sa1sFeh82fLCNTMyMRhtaR5BnGSb9EfL",
  "key10": "555YHrHKAVEaT94tDcJTbVZn3ACFzJ7LmdWSJDearpXQgWcKysRBgqx915sYpLi5w7CBjGFNJCvL8HQHctcNrz9o",
  "key11": "dgFmm25eT99YaxVRMMCrevhHF8wZCWAi6m7V5sExsgwi5f2pD8pAdD9eqdGhQqK8G43MRFknSTq1jDvby4mweQK",
  "key12": "5bMqFvQVkWhAyYDJNkP1aj31s97rNDPu4RH5xr66T1rRjxmoDSXgPEWXkuSdotViEzfouHABpmek3BZCXzuVSoM3",
  "key13": "4WaLtqVMkJK4KSeJQEoDA9uJKUygRUgqF96vGRAuqDZFC1HUcFEyWEDhC1SiCw5SDBJJhitXWXyESry2E4xPbcAL",
  "key14": "3Hk7N8mHUScmjzk28kE5pppUSABSpd5QmBzpDSgwSnBtBUz7QuTrKNrr585veChFYEnd1Tw7cu1mB7xGMpTppWYi",
  "key15": "pBrk983oLNbXPFQrpFsPHGk2x6XY7oWpL7ZjZFzYbEB7RG9EsdHhbRDnJjkr82ouDkbJRe9SacDWHnvpehDw32i",
  "key16": "592SEsYLBXJfcXzuywy1rRDqLW4yZajcgn8UcyftSbGihCjnCUXaL75XPTH42UxDEXmhNeZSj6RNbitUgtWnCqDQ",
  "key17": "3Qt8MxzCJJhNtrqtJj3HVNzFejF1ynr7wM28H3RhZjScKa5iVDoNqz3UewAgcQH2AVsjQHewuj7epuyEztYokVxk",
  "key18": "5BcJ4TUbFKbsEuBPhvqkZ3szYunnB2acU6oE88HGJdFNpHBh2qoUkPz22eF5Gon86AuoeaAz5Q6Qo7sq9EE3FbZD",
  "key19": "3QxbTToJjstRjQHLdNogSxsKbuKeLzXha2wTevAWd5gjBzFC97nSBcRYWGTQmwQKdd2DFpDryEwxL65xz7jdC73R",
  "key20": "NneG5urG9mTSfvY2qMAau2tujGuR7k9R44cKhLH7faCKd7eRd8XrB3RVpjjez4LFdjLyuKzfHprEjxrFmrpToms",
  "key21": "43qb3vB3jQYVEYcD6r5MbdPbGfbL4jJe4kjM4JwPAe9eC97PFwB6uc8zvs5yXjJBU7iiHKqBjrxdNbufYKaHDP6j",
  "key22": "4Lfmw3TF59bRaPqeEUx2AAUP5SMbXS3CtL8crYfujf89Z5Rn4fpa4azuTCJSP6PDiedmf9gghVDkmWzwSmYm8k8c",
  "key23": "fBB3zrn7V6ojNugt2BCmNNvjHxVE64h5LRGSYjF1oeFBFFYzs17xiMKQkTJaajuDkVjbDuqrHTyp8XNkLhJjqyz",
  "key24": "2v2Bv4Xc1VBNfYuJY2CqoxdvDPN65hjVqZw4dhqgVtqee2uEmXe3wPyzNVqbz7KSNz45HN7MMZzjCt8Vr1ZVEbVG",
  "key25": "4MsxqHacskemsqi88sPJvKdsf6d76G8MtRFsFKJ9TKMd6eqkvphQHRzEz7xhB6rWg7nMkWFjvQBpUPQe7A6y2ccG",
  "key26": "3u8jjwKJ2gMGWr3C3xbhBxDCpAZyx85oASxGvrN7p13RqbxzQXeu8qZbHKHb2basNirPryjGyzeeoBiXmMphAPZJ",
  "key27": "4MfkSYPESvSNcdCC1Uw4o1QsznuRt5bQquwU7ARcKDPL6fy7yZAhZQeT2FjumCyVZN9RmHbsvP7rr7fu4qUTMe9x"
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
