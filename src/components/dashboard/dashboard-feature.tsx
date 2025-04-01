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
    "2PNTT2VaZiVt339tbu79nCuVYmojVck16Lge8vXqYYWUSbhJQPPzD5QxSW9ryWbXSh94XzD6MrgQP2FsETdghAGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxgyiTnbdYF3zMqTw8ncTV6wZZhDqcYSJ6zxSLzddfBKuHPRSRg8XL3gVaBWXFXN96NMXb7KPpL8EhSUsZAW5cM",
  "key1": "24MF4rscMS3RU5WYVKXx1dgTJRLcWkCJLuHZuQYY3z2wYfUJLo2ufPhE1eHGxnSw53ma9jtvyvzt4qEXAGmfKjKG",
  "key2": "2FxWqSAF7wGo29JpefZqFQpFi1RknoFXcy4oxgGpKQK8DBh246tM6ZoCfrnRiMsKQ8Lb2cPVJwSm6wrHAPSR7gcz",
  "key3": "Syc6a9obvQD4M5HsEEko299Y9CC1ygWLLrzkJ7PARFbRKze944AKTR134aVsjZG8YKKoYJgfTg4tbz5Y3TuU1h1",
  "key4": "1Fuohybks2KGLUNRuh672BZuC21JDZrHocT5vuTM7XpvGBDzAihsaY3swdz9XaGt441kk3y6tsVNrxdPacgsgmw",
  "key5": "598re43RE1h1V83D66ZdkhvpXSjoDY9uvEYuiHxdbDTFmaRd6gaBFtk13EjgTiozZKfqfLUwnNCi11oHEWLzcnRd",
  "key6": "3Hi4zNrmJJKZNcoSopputGNo1jYeBHXLmEPZJMnZ2tp2meZFHGj9BMvdnMrxrwoNZocaVHi7iuYfdei3ocorXFX1",
  "key7": "2isbpJzCMJWSpP66cTCDpyGt4KzXzDdVQaeGD1Aw7FB4rSf9p5zgfAyPNfW8HVp5kqBVGdRarbTMW5epfsaCKLWa",
  "key8": "4Hwye21Mv1sM7g4nLxTggzn3D23hJhUcqb6g1GYoUbafHd1eJ4gjA5oX1au4etJvEnBiNUf87rCceF9YnSkvYEZM",
  "key9": "5xk3uVpYDN3n96Bo2RBgBydeFq8BqZ7WdvJbvLfh1C7e4241tTvnnmec6SegsQxGxqvy1DquG1huK7dmGccFepR2",
  "key10": "3GxF7ucD2WuSD5xXYJB9pNn2eEbQC57EtTyuDYqroHaGpwy87KbYnQEWFYnDvsvvcqC6Y9hVwKdsCax1XifH9FKG",
  "key11": "5WsK9qXS6JHgm7SBde5K9foMaYJrPeazQAGbiy4rJ7fb45spywmL5F7GNXqstEzPAXVpT2pe5FM7ajC16FSFH9at",
  "key12": "3ZukCaRRU3UVLbRH2oxGoXjJUKt7LyiNjUKsUeRxBQe6FuLGAETnxH2oa34QwKPumpGacofyFXJkLUBtREiKgfC5",
  "key13": "rq9V841QLHtJSaSr9UfJpW1VHCAiPNQ9ZatMe8fic3TPJu2wF6PPA1or5AMrsS5kjV65agF6QTfs5EixL7qq9gC",
  "key14": "2hsXxjvbwUANDpDyrzufX9oG5BobvPFgS4dX4j3AxuhMxXfbwwCjN2tDLeLbM4cKQE4ktRnwU9oRU2SGBfiZdVcg",
  "key15": "3mL2ZDBRiadP4oUYQ1kkfn7VZc8jMWba8r5EfPcLXtNy7jzdmTNoeoPCSe3YfcumJLmoNa6WVeS25LPFZv5j95vD",
  "key16": "5ni8XCWxVkcc2LhsLbGTMni9WFMjBKcivQEd1bHwcRbJWU4xoW3MPqAcuASWeSjbqFQvvL64uKHoYJu4DwaVcLJG",
  "key17": "2PbLsiC2dDFgsV36EEK8kGDLcnrywthjyode3Tgh82SrC3cds8teN9MqMpp3U5mmsGFizQrLhYGSsYhQWq6W5kyu",
  "key18": "5DPZcSDVJ8Yv5AqsXn3Co9kvsurFzCdxeismaKvmMDxDvKWVrJHGTCKoymezbcsZVJXb8YSwWC8WTLRSsHpFHKAP",
  "key19": "55dEwH763f79f1B8LaazbktwjVd8WeY5wg8SKpBZQe6PQvjqE2mhUxCTR5M71PqAdW3d3TrmWajetZjS9of7rbMe",
  "key20": "5gD3494whux9nFPg5aqmmhNEi5xYPebzM2q42ssbCQU9LpF8wfuvvPXQsdg3GWQWABY94Zke3mNB2kienXGX5Lcy",
  "key21": "1oSqyB5izr2sWcZHjobBXvrdZxSaQoRdxDzaCCJMRuffBE68fGReqw7KrcdMPSPkc5KKAetgs7oMxYFG4fAg7g1",
  "key22": "2MEacUrtKDmitrdZAePfZt5p23fqUwU9sCUxJtVMjNuftx76scoiFrEVpSo7XpcMu4G5WoKfNR23J6LJQMi7TBZn",
  "key23": "2kSGfJbUMt45shdPyY9FV7CBPMRWXkTooBEW4aRYJw5sgUFTv1J7tEoD86Zt6u7jRKttNg4c7yCNFb6E3WisMzuo",
  "key24": "5TGz68kGF6WDKHhRRib7S9wx42z71xN5FrR9TVGDyjTfPpgbGjW4FYrrdW4S9fyWP9tWoecLGLeby4ARMEGyYet7",
  "key25": "5epKUBntgABPMxGp9MzyP3vf1shAih9CdtMYa5xtjuAk17iiwcQbznU2bLW4Ere8mA4VFuWpLJfVbEvFmFkimtQq",
  "key26": "5SqzzF7Lp23zKtmyrYmKDPm2d7tCvgzooTaxBnUWnE2gJLA7oPGV2nUiHY3d3pWXwDj7n5dHoZW7M4Tan9gD5rfe",
  "key27": "289ermEyBDhPzgU876V15wpBJytEA5WK65hbm8KtKofuPy2mbjbHFTB1nZGtwSBDGgQyLbYpQZuJXmYCHdGYxw56"
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
