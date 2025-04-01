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
    "D5Lu6xWgBCsLMoxaD6ukDRfcrc12baxjhwG76VW1U6pCunLVYGdW873mfZLxviZCfQzotm5r3u9hw1dvjHsUMya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EfvzEjuZZUBcQN3hx6u1FCvtHpx4ZvB9DRDW2vChJ77iMcqVJzkLJcMXJ76RJnvKZSZFrLhk3nyCR4gVtNMhQqg",
  "key1": "3bekx6jdTbdUfw6u2t7zredQvTRCMQCbUTSsVPgRxHMj5cjtfeQz6eTAU8iu8STF2uvihv5XRJxLsSitdyuTdhBx",
  "key2": "5eWyE5dshpxNMFin8BbBvXCD6ihtJxQzG1ZYyLzWYjtTfN18nQVGwHmVrXzVDwuB98GJsDYZzdED8aruwG1hCwEd",
  "key3": "2L5Z6mAEkdTy4PQ3gnUQUsLqK9b2K2wXK52hPLTiahU35qCf55H3Z2zoWyys5oGjUDYFdLLZZnAHt4eUr3AWPAVM",
  "key4": "2XDeWNnTU7hFrBpK651cdbzrcYLu8mVPEC6DwiX7rrhs54Lufzjfvy7JM6DeKzigCSn61CrAAD9RK1fsMnfBGaRw",
  "key5": "52hsanfNAeAsoxYKg6BbV6xgj3H2Lc4F4LMnKZma3R8onkEtgGAvijoEydTqptixqf78aq43XJA5gB3LJdA4aX4X",
  "key6": "G799Kcs9EEvZuJGkqbodU6uSxwChd9HpbRvhCDa8dA9ZpRCaPJAMRqfcynspXdo2bY1tHzhEQ1UtTzK5TCq1CKx",
  "key7": "2XUSyfy231SGanieCTTCo7Y4WfU6WNPmbnGgkZKhwbWsPsHiGY5CaW9WzLbq4JvvPsJFKWuk6vuTY1a2L1bossku",
  "key8": "3nHw3SHd7tkmQegbPm6LBwVhReZ1tD7KHj8Ni92FrsWPzVDKhmo4Do8svEZ1Cn5Cp7ycPcaL2UtCjUmB8kgqKCe5",
  "key9": "5SE8ysVXdGTvotY1yYAFkLVkNJLoMaL7poJnAwoDTP8gaM84Xm72pwWeGNZXmH8yU6cTLmryVwtjhkeeTTsaxbiM",
  "key10": "5QmrK8jzeQSK3vu922kFseUw1F7vQuyAPbmsc3AMRsW19qgyZ9uManVmUgZJrLkPjPLZHfv8Wd4WCDcgiVYmd2U",
  "key11": "2umucJvpEWLURSoXw9wPFBqBZwpGFxouviB92HJcPNMT1MamFCQzqybfXsgis1pSjsPAHFTKmGLGaG9uxsehccYw",
  "key12": "5F4dZNEw2D7arayE9PFWPDcgJg7W8tX9ESvFa7EQhk8HMfsjaf6Ezy3rcW9L26YL2ms2MGjuoxbwzLtNjRkkFUbA",
  "key13": "432eu9Jqv3i3SJ83jqtoHrkGrKipuSep98p5vNt6sv8GMALoitN5fcYfMAYCahoNXerHs8DEuLfqXTFeShkFbovJ",
  "key14": "21pSBmRc8XYtkfrkmYW8ztNyXbTrzFLS8Q6eXrTkTZLSH7ax3jipZYtJ1Wn4UcW71JxBuBfnFj8ErG6MPcMpLvM9",
  "key15": "34Z41PhvGvv5EVs4A7DcxhFwSNbiQh1cQ5BY1D7toT4gGDJST23PR13WuN8wnshjP4pgu1GtLahKTggmmZf9xfFT",
  "key16": "4uqdVxhWYexfmuuGyD6rZ8ZWPfKGhafqc89VVuQFEysYwZfXRbTgEZzTGb1dLcmPkWjfJH2kUNGdodNnuhB3Rt8p",
  "key17": "477k2NC6PRdRp5EzjWLX48Be2VEi9mYRLRDSYbnwXtB1Xku1NV57Nk1ee8wFA2UQbSCCjuqXjK21xDvsRFaHu43w",
  "key18": "XJmRo5w4zPLyAFezhgCikdWT81Lfbqr5unYi9y1Ki8gHJG9gyeiCunPX4LkPiCRvtdCsLAn1ksXpX9PceKq6X9C",
  "key19": "5pWDCvw7dkqvs3LHYMdEfR1sNQE5339ySitYiYisBVaSZJoS9M7dts4fnhryW3Mv6KBVP57N2b9cvhZpbjounw7s",
  "key20": "4h3hmnu9m1Y21esk3rPFX3Jh5mUJHDTpo8U73LdCYke27nPF9HUYaHospY4re1waJAhpPsfpsYVkY9xWHWVJyPfi",
  "key21": "3qy3WDRrPm69LLoVYdVaGzERwZDP5p3iswbAdomswnk4H34reEK7EVLQQH99hXnEwbwMnX7gY9t778hJBcmcEv18",
  "key22": "9iJNzKruoaPW1UzMZgvUHbLLtE1WU8PhDZHinDBcREa8MRArzuFB3BXz7vKMeNZ77R34t7xh9ieK8x7ypbAFaGG",
  "key23": "KwN5Lm8zD4hP8Xrn3xF2ZBFWCSNQu4sgfdxq4QCn946S36PPnetmntiajartdNHvLCa8mbpkFiT6tAYb6zkXLP3",
  "key24": "23DN3CcVDBRbN743U6HZhkxd5SkEr8DA2bUwa5omPQUZQH69twCS4wE7yZGcHrBNpUnwNUN8KacSSwsfDAvdZMwK",
  "key25": "5fMnuRVzD1tdvHauFBSEXA6tPH9GZ4TEaUhgVAWDpBEvBpsBrX4KeysgXh73hXwDtv6EdvJgFHeRGn1f6ehncnuH",
  "key26": "5BL3RafhhsMvi6mQsQ2NX1hyvcoHhBWHVQChBFE9ipgKmXD5V3xRT2QETkBjzYzMQLvvBqn4GEfo3Aja8rTBTpF6"
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
