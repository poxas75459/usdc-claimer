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
    "4PhnvHbmv1tC4hGZDGYPXATeHntBdXCQ6KoQA3WU6DdvmtxxFKZwfGGLyqBbDw818SjMWqAqj4o7Yq8aZ2Pe73yH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RowsgCGGzAf1EhTBWKXcQNQYAjBiKKEJxDi7qg7shwdvUHH6e6vTGSbi6QSiU5ero9waJTwcCUWZ1CDTZEDbh5J",
  "key1": "4HJ9o8p6DpzHPseL5XpWEC2De8GL1aU6zgrWk9vvLGQNvtrTqFoSuDzHSLPZcWvPNBGgcXRF7oeyPERwBdAhYuZb",
  "key2": "4kLSzxizTi7yrmZ4y3kbRehJkgByr9id6WEtKY5hzH9bYp3xFJFp7oZjCTQGfQYdFZnKNnfsrrtXMfgaoim7sCjX",
  "key3": "5XDahCwT5fhE4NDuoGm2vPjB7Mp5jxmpycJY1hH2VT5iStVs5fpnuLMXQKG9VMwgzrnbF2CGP7u7nfpJL4FpEq4z",
  "key4": "4GE2EckiZJDfTQD6VEvJt3KbEe8HExx9rbGasRTEGqXiTiHpbnDc28vK5N1FcjjwGQHiAsstA1Qm7u4AW1edudRo",
  "key5": "4jtsoJXgpMLRHgyMxJnRPb3w6gKjv6J6ajGuTuM85bhD4Hd56mR2jyDvvt7qLQyj8CVBuNyLZPb26E1zFH691KKs",
  "key6": "cF8YXbUiA415P3fbd1XH19SDNpQtDRSAHme9N47aQ8VAQis7YUJDKukTJQCpAGGSjWgHaTKe7UaBy1EXwgCQDS5",
  "key7": "4yEKZwnosvJjTdBqnr7736fycLy3HLka6FwajZETupywffE7Ju2jg5E9VAFCKw79BnoEBfFcoVzpiyUo1zty6T6o",
  "key8": "2eF2pVX3JuEkcntExzQc8xWcyuZZVHD7bqnQ54XMWLPX2u5vetdyEdvVm6XpacBi2DV8Yp6MxqNWSVzbtvhowPqd",
  "key9": "4w6yus2JKYcswYp8JJ3nmPjELG3GXM96qZFL5hYu6zgrqf7JSzwmqtd6EwGjFgT5b8TVmGAJn5zVnwTgzdwc94nK",
  "key10": "3wddxxG4uNJEkfrdyvbciz9S7v7gxmMRQMKfPKHdwj6KmZMHNEG2reFjEHW5AVeuqccUQDCPdcmN2pkmcxjQFoGN",
  "key11": "4QAWzeaG7oVUhAjAASA1eBcw5Njtc8NYcAmXKNqvjzMkW6A3o7tWBaEprEhUgU585DJpUL8T6f5jEpLePTCyfUwv",
  "key12": "4ctpHfcBGftYCHB7Rh8sfTXfVVUTVDvzfEUD2Ca7hQNkLM8MzPHDdMvKB4LAEKn8xeNVwFSVmGWn9btX7qszpukr",
  "key13": "2WHt7iHt6BDVLJvNK5vN98Yh9qVdbLTZWSUDixxmc84pmfVLe6CVJdaNF8Gn3pz4t9QongyPWVMH1cwkfcLwjdst",
  "key14": "4HwSwhNUhtJ7QF2LQoWCXsg8FqbDFLxTNYYhFeiE5qxEFTbHRFt5FHnzJJx79u3WTS9u36tAcaDLTdbWdRvWJu1T",
  "key15": "5aJyy7mzQtYEBGbjJ5kGA8BQFJXHagkB9iuvycHS4V1jWdEY5MZj8TL7UDdtiKTHiRuCRpBA277zyCBU3ggjyTYd",
  "key16": "3MByemqjNScbfBY1jJmJTndWsLtk3tztWTB9Bd83hcWY1zvfjKbm1u3F7uhr43RNFA69PR4uPRYXVmYnAHTJb5CY",
  "key17": "58Ei6oz6y8fHuPxcnnKGbuxUNJgedXfbvXG6uLk6SDBeSnir1KN8FQnkaV6A3bpNSs8vbg3CWi5KvessEc28Q5wA",
  "key18": "3sxzQhBFgy83p9859aW1mfyzpShRho9PwrpThBHPjp5ZhxGdVCBo36zE84tPM4tU2Ys2BhgyDQVnP8fNpzzwa3E9",
  "key19": "5s46UFRTyF7Y55WVDamiZdPqPY3BqCkNSb6TQg73EvQNoN5i6b1GefyUixCjbveW8fgJgWiRgJdsh8ToMYTHKtNw",
  "key20": "t5KT6wccyRbNNGhCZD4XXc1RzT9fbM3QswP1BoTRw2bB2cPqZrQeyyZeJMdj6VYpzKvxLpRpBStSP9kXVYQVMCA",
  "key21": "2erZZGFzrQp9AvWYTZtFD7oBWdkBxFjPi25BjBFYYCe2WdZExe6SbbJBGHo2bTeA73J5vYNTkBwQnT19dXcyZ9BB",
  "key22": "NmNRKGXVrYCez8KNcY44uo5vh9sgG9uJoDiovLaNwSRcdhgC9y76JYgfjCwNnoDdYUN6Btwm1w7vcBiMLS2VoEe",
  "key23": "5tc8hNTksSf83FgMXRkQB6jGCEjrLCwnTcS6X43UKx9LdAmEjTKHvHxCtAUcmuJKwnyC1vxq1PuAN1EqCuXHJwws",
  "key24": "YFPZJSufRrFPej5YrkE1swTT16PCTChCyuRpYYE4q523nNwZv4bv1YEvXisr6fRJXdWi7QHZUqaLhvfjw6FKPoD",
  "key25": "3cRfHCz6CGa2w52WXTows2oE55SgMWjNJULPudxG9grmxoHnmGpvJV1kCbEhGj7CKcrYYnJB3gSPGr93kRukomr",
  "key26": "5py56CmaT4VQS7D6M3YtP1JtrY8XerzZ3ohHVpX2JzvzoCQsdoMnRPkZc2rjDC82GZKmPT6LR4Ji6fTxpyVGc7jj"
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
