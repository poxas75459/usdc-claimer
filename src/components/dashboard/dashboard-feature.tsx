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
    "4EGGdRbbnEXRwS2QKvBsGQ8Nr3G1FkRHnvyj1cTbkUtHx3A9nReWQkY13wVPdwZu965y3Xs7sJ2Z2chXbTWhH3d6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S46HDxZr8tDs2XB2ZgdEyPcoaJGGUBkcWHa1uP344kBdjviig1KG6Qmmp7MFgCzeSFqa8g9k4Md9WsTbT2z4nXY",
  "key1": "4jXJqEcS77kDtWTKVbdpHpR9xPPuvHu1vNbqjs5nqc9rJsUa3t951c3hui48uCN8RoNHPmT7aZJi64GuuH4ASeCf",
  "key2": "4AiHJSacSZGK6B7hcSWc2QsURoKRqHbsTueUxzgSnFe3aw6PFUtFopJjre866UZGd7tHrkFYzWLzh37ocboFudQF",
  "key3": "127HAGHFJgzutvPWGZHuvEfJ3KsCzAxS8WJwfAsseQDrSMGEBvKJpFzpKnnCesNisG8h4meFuoBfWM8uzbvD7JMs",
  "key4": "4JEoUo6VcWv7hsCydYfZTrR5G65QEhZV7iZu7rovAHiaQXjv6KBRWuEbCuyhZkXRR6ewv4sj14NCUFcpCRCB9vYn",
  "key5": "3PSeSU5kv7w3VpYohCMMfAUGxV8BnAE69YmiHpUgkZLqhLEbejv5ZqEaAqbsBrR4MF37y7FGTaw4fnx5yBYm2jmk",
  "key6": "r6TQw9aiybxwBqjdMqvUkq1VTqCA2XtG4L3mHkqJAqqtF3CE4mCdrRqgBw1mFrPaAkfWjPCa3mhB2qifYYJM3gt",
  "key7": "4FCKqofut72NE7MxPRhjJz3j7inJHEpzPe43TqupW8RF3tWx6bx2bEX3Gik7HMEEL8MPGk9zZXXbbCwYsNHci2Pu",
  "key8": "5UrMrwvhQ7HF1bwXJRUeU1gmQo7wi5tvLQzuY8PxWz64VATkmLY6jgGfTFwK1dgeSoaukfQ8XEZTFAirwtNfho3c",
  "key9": "48KhUst4GpuBJBvjEk7YRVrqEEJTHnFyU7KZfXoyqLndd1dMePGnLLsMJCGbdWbugwK7t12upf64isdexGZwzeri",
  "key10": "2oUBpW4yYFZo4gtWAiw6BBkHseRJW5J9N6AKvWrMLboA7gZwBi6o3XbbxV8HvQLkgC67g2bDBgjDjYxJkHsjadWC",
  "key11": "66ortBpHS8PBFMBCP6BXnDsCCM8Kn2X7VDxgE8xvopfNzUKXeFhSk2BvDmXg2FaYYZkCDL3iiXg4sgZxppWmztDT",
  "key12": "4b77hthGhS5y1cC8erJBUNosTkB13G3ko926tivGcNinSnK7ig3pW7p1zXJZwsBSVzfD9Rgqe2pTn946qboPSwf",
  "key13": "53gvuN8Umz7jpUjM6DDjuts4BHnaszL3msKZnLg8NqmuxSgkM3272VUe1kkpYuKzwSh13iN82EqsEqJW7QwEcbQz",
  "key14": "2Qo13CmWV9BfeGpiscBUMzZcobYEvFe2qP86h11BL1Ux4A7DMXzkofzHpDAjtGr7p9gmdPspHBYS5iu47fDxRsGJ",
  "key15": "67UZQQmTNLponALe3Bt5dqmPeqa5bD2t1yzNiaTWhYWVW56kp7Qo8KRV2ViNpzt84eXJ6oqCctofoghfrMnsTBry",
  "key16": "64xWDzy9uffuR3eh8sQz8eAnCD9zQKPmQasWZMwHqMpgmsaBa2HwTPTVxPypX1A73tLHTrW74axd5G45nGnV6s4Z",
  "key17": "2QjLGDTL27xx6RW9Gb9qNde44LJU2zGdsFoLJdtifCtRBbUifruXHK6tariArvf5iXuuykmKcieTDuaajb52DQ13",
  "key18": "2eozGythK6eVdhUm922p3f4tg88f7FvTgCceStLmv1KMeyH1gVxcE28Ef7xBd2weTJ5R7JoT5pGZVrb9aEfEwJcB",
  "key19": "3ji1rj7N8eQbFuByS6xGbL7M5Yzu9utVBbMAgcMcP9vUSgPbUi5Zj83QswuCkByopKSPdbhBtVWuifjLpmtsACYT",
  "key20": "3WKNp6Xc5VLWePEc91wPuPPwDmHZSFyTByi88UguJPXP83o8xR1QcNitmCnuEm33LtbMLyipS6k7Ye8YHWPhW2U1",
  "key21": "2Fu6qYfZ3hEXh7RVBccfLovJgRb3PDUtUovxYHW2ixmvyz8nt7dvdgV4tCdKpntjvakNHbDKsfipL35TMtWgFWSi",
  "key22": "2dVdJ4depBsSS213y3ufMWN6qqbz7hkjqtYrWvPoTpZGMKHGmN1YNFGsUWiX5u9PzorifpRzh67RU8jLFHyBCUmJ",
  "key23": "36YKvnp2CrXzbn1GfNSRkzqaFdB6cjywUMFx5fBiV7TyFif61iZrc4KYi5WpJNRQTYowu3oRdKieEgwEyCu7VxkG",
  "key24": "5Bt137UywVnmJR7mKbbmXYJRHATWSipXJdvoKgq78ixwrEovZhBxXwdmMTvXN45jBy8G3vfMqrRUTEBobF1J8bhd",
  "key25": "5Gd16mNtYYZfE1BdXSVZ8aZPRwTjxgA4UfDSFwevKZ6yHJ86PLDsuF4eTXsz2b8xLuXpqGbvb93ANi9G2FXgSeNd",
  "key26": "3v7gydFwvdcKHg1xmiAX1CD5obXhNqr6Voiar7kC83Tu7PSiYQ9iwr8epUtLwwF1Yi22vDDipeqffGYCB7cmMjpX",
  "key27": "58qKNQMqPEH4wLWXHV5Z4SvMCFxQRM8HhK3nCc25wew3k7emeTWcU4m2nAKXE1NnSEzyBz1tYX71PEVeuCr1KpEv",
  "key28": "5us6bHxrgr4JLCeFuYPVLrkHNCv3qzS75Vi2S5GKtu1jdUKJxUssfExYbdvTJ2N3LgNftbSMXWABYdxSSZtqTenV",
  "key29": "5SrYg67RTvxLmtuDfxC9SaTsogtUpyFnHePpE6gcRVk1KT3oBnoPzAafBsq8NQGvF1TqesnNANoFWVidpieGXn7K"
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
