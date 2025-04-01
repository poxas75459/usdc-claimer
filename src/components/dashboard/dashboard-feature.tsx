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
    "2RFFXqzsPgDsCDH6Ds5TV9Y8gC4fdfU3My9E41edm2rdYBhPrACjk5Wf9RFELES98yrAG9MhMxNzUP2HWc99ShQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LEum7zFTGw1uScJyaVSJgMGyZrvwnw1bFVXSSGwEiN68xv62HFWqa2y17K2K2xCaJKmwpkZebQgzkE9c4v33mhs",
  "key1": "4pdj5pcUHmv3B7ymbfDnXC2tsAeZQpM21M45pHhRh7d3s7XYT5CpeBp6f3dBhWRnJWMzpmm2La27Wq8J16N5Bx98",
  "key2": "4t1PGdbdc7WAc1eFPvPyAvo3Zubx9rKLWb7w8zFbcfY2KasEivxeKdaf8fmwtzUEk9FboiECUnc3THqYyviz4y1g",
  "key3": "2N6LKNnyMpywcbhTNPGeagH7si79WpvHyNswT2bvs1onx5gbrvJrVGzHZcu8VMoFxKeVKZqK88h2mdzY2hMZrAfK",
  "key4": "3pFZRjrirxPq1rNoQcpEpbF77e6L38kgYJ6SkZKkH9222pR3vZiF6bgWRQVPDLhPs71j8beXPkaSJJ8fsmjiupKt",
  "key5": "4qwy4CCqgw1VsZthem52972kHM7wcZMoXBYcBaqUk52r1MjBvSzzpeNw3pd4GKXKkYVcmPT1J76CDKztSusZ6KfZ",
  "key6": "5Y9mgq9aQu3qDy6gYcePZiDZXChjsikfXs9xo9ta3NHrE4BhHXCdYJpHeyNztkivXjoKR3EArwdQ5PwxMLJjXHsg",
  "key7": "3RmVZdHtcSFLPUwX19YYGV3eHpWkbwAqeiTjNtFjoxTnroFyviAHsZGHpQQJ7SCb4jtkRqiYaJfScD3ej8sc281w",
  "key8": "5fAqoFPhiuwUcpKRNkm5k1KUaEHfgtS6R3TKbn3NDK4eTpzqiZQFDz7gSo6qiMYA7815NMri38mNrcbZwTWBhudH",
  "key9": "41Ep3QTfPPZG1SpqsdFLCTQ9Req1MQKmnxbRQK5kjdLXyXJ1xsoCg3uKQz8JTMLmX4mid484JPmpsGCYtTYNBftE",
  "key10": "5P6zzZfk9faeU4ovPKid5mMfZK5zGiy5VWrob4SVazhcuWJBGuGsg1jxACJmwiu2Bwu5PrrHvjr35PSTKehgY67W",
  "key11": "3bvi4MCzVURHD2ZVz8L9amaX6QcQqvuA3cQQ1YcmKukKJYPKcqC7Jw5Jcem17uKmMmoLQd78vCBrp9KKLQNvzWLa",
  "key12": "3EJtsgfhBm5ecuGVT4b5Wk9fURRZUu14yPAgcKW49rejhokcfzSNnYr4VTACXWMFZWJWBG2by4MKtMDSBhpBypXh",
  "key13": "3NRJoANkAx25J9QSVkToA7fEgDvxSafoeQkYQiWmNJVaxPkq2SDDrNQL5sab1emTrXwoXCojtE4eWGT8LxtXiqLH",
  "key14": "3V5fWcf8kAkXaAoAdNYGjkCymQGpJrjTmWy3E8B213CnArACpTGBDpXU3MXW2CLX4RMhwDcd8AQktsUeECdvnjRB",
  "key15": "mF9e4BDtUzxP5yE7dCsyzVcV4LYjhKR3znyXteXrnQCD276y9vMfJEcYdMgUqqWnaUTfJ4TLL9cGZqtiTYixzh4",
  "key16": "4r2igy3ec49RqcqNMi5bPoamDakycwBhpGML73LvB41QMZ14unxeMJ3UutTVQyru9nH3G9jU2Uax1KPv6wQLNTSK",
  "key17": "3xkpfWRUXAmrRaoDqaHaK3DRJ5bcmnMBkXJLzwooLDMVRw1PM6N8XTbipnQMkzUYw45D9eHeRkCqQCJ9odEN15Fn",
  "key18": "3JsLkDWHw7sxCkZb9nAnHBfZ32P7gmf1XTjHvswQJPCMdTgmeEQeUr5aWrUZnicYDS1cRWjwpviZrNBdbwiE3jQN",
  "key19": "fS1k7445Hkt5jFBiPKiGyQg7H6cZpHq43zb9XxwwRnuviN1X7GBp4eNXdid4xkMgYrswASVGeycoBRotXd6kKwr",
  "key20": "4ArrWCSKtpLwx5vG9yWDKPtc8jc7p4tJdbppWEKZqkNL2GcNdPsu7V9b9KNCZGxJzyywkN7Ew2Z7tDfJthrUQ9XF",
  "key21": "5A7xcsE9HgwnCrVGkLqexgrUn7pApAjVmASbEqkLuksPvyFTkiBUAbAU8t7DXPww7TM9K965HuK8AHcaKZXkKGu7",
  "key22": "8PsVsfUwPyvzRCNFXLmik1zD2pSuorbxA7QZQzhKGrdKdmYPfCHVFhH69cWwBEo9os3dCAUqKiPRXcntcPQRz1K",
  "key23": "2t1U2eXPKYEEK8d3ba6Yw7233utxvQaVRrGPPYRM5AuFkPkLwXurp4Lv8t4nEn9vKT7rxvAFcULrdcH4nWavo6Zb",
  "key24": "4eFD3bY3ZWqoHaqRzx2YXDfBQP8XhoGQwHDvBfiKH73ctsV9rR7wmd5XW9HzisxSUVbYd3pCxh8paFTudHbRwDV3",
  "key25": "125VdBcFRyjWhgabEC2mcFx8HQGvLmWw4EbSZ6ZarJmPcsyrreFqQqwgfsPT4d4xVKCBVNhaUEgNtouC8hsk7nKP",
  "key26": "4hZ8ou8JXrd8xP7DD8iss26MQmrvMmwCaJVU5PNNdgBETuM7aLBup6N5wwa2AFi2RkBnKJKjmCxf88GqHTqxjWmN",
  "key27": "8hLUfqVKbHUpM6a3nQzHbvWEWkzceNuyB4irmdCgnund1RaGijVusxk8A8iTf4KWMrmrGSEyjGxm6qbV3CYRCJu",
  "key28": "4Kyfb1YZ5f3ZKHRtxMGVMrEW4QH66JuNVwCcF7G6V9YWfVo79DSE1AUHgRR4puGSm6VSbWvSpVQgWEYduG8fV4NH",
  "key29": "67qEJGjzYN7gGj8xJh6foUSZKuovcgk34o8dxzarFfG8NpD9UTSZ2apGHQzArJCRc3LT11uZLUg2JVPqH6K8uwLT",
  "key30": "52dDm2AVy7oe5dy98DroxcrYD541u6mdyZqwmjB2PLxz15arRofdeAJDzJJjxaBRBhdQMJnvqnynWPvnWNVHX6YZ",
  "key31": "vHMtEG4z7qT8L651VxeZ7cSCFfMLWVWSXsugwqTzLojXCkeRFcuvZn9cQ8kGtR9fgHj8ubgAz4j4HxJoyM1jxVc",
  "key32": "5E6wsLy3izaYv1aB36CU4DyTHWvmxcQsCP5nFBEwbnuDrMUoVK2BnuejdE71HJnoVntpGpCc95ktD5sXAz8oXGtT",
  "key33": "41W73zKzhqPE9oNvUPSaRBzZFPg8LDcutvTWrJ9djNgPczTNDNbjBWYSP4rT443yfaTESHLaccvrQwtDTgE4DMZR"
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
