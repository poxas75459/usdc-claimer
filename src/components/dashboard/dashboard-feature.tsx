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
    "2YZSCgcZrWbpTGDaTeoyDkH45wXkE2BKMyNZAiNi2afd5dVBdyE9uLPHC3oS7H4fdBZhkhYd1JExtY1fW8L8696Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1qh8ipyVvshfCqFJChqP6qFiKZ88Yevv7fNmUEg4tggsPUbvpqJbmCFdPUoVAScfQfB319zTf1ZdQcBF7CVkU7H",
  "key1": "3yrhbwyEm38LvngAAmLu71MJLvwdr6T2bWSuXH8cMKMgqjdJDF4cYjv8UquXTvvJ4axkUgmoNtEseVGDzvwJ4HBW",
  "key2": "4U4JMMWdJiUvKj4kdx9cTTYMvcRVJ9wvBgde965mk8Lgj7EuX8L5sZ5VQ5RHFLdiD844Q8WA9KrbdGwjuGdPU4oL",
  "key3": "5ExZtPTWys2g3eio8V96PXJ1G4CH2w8Bgk8yJV5nLV9R3kvSGWJwEjtTcYtG4AfgT1EN67PyPwh4ib66UkGNH17t",
  "key4": "ovLxK439EfM8zPpB1B5hQrmDtutdGivZQDL3e2EyTvhneRDSoUEsDcvos3EBFE6oBrd5ZC3PJefKH1XkRYQfRfN",
  "key5": "3jxirpmUwTkq1mnPJJjbAHKF2TQmWCXiWeYQBLvW8R5eC2WvxSRuEHj1ARivmtL9UvyiG44tRmMYn86wUoXH41JF",
  "key6": "FDi3zH5vqTDzbjHEhQfrSNyPYeNWjhdy5RS8B8GzHv7ZbR475dtfpgPfsZTFRqzHC9XQDahT6JxFVCpvqjNgghD",
  "key7": "5DezSrp97CKkouEtQ9Es3aaQvHL9GFQTqC7HjqmXcSkYEhxJWM4BT7oSevJBvhALGiENGGQi7uEbCpmAo7cYYGn9",
  "key8": "35xCdh9GJY6id2z7g4aooR89fQgvVRuzq1EiQrQSqqEqEHRhxQa1G61JJLKMavmVJvRr3vcYoyincCURteKP736Z",
  "key9": "fPuFJ2dFQQvcqk494pAtJ4q6XkJRv21furWoVp8dCSf2PJvcBnMu8uAPxiRmAPWRdJyQJtHHAgggbPYGBU5AnpT",
  "key10": "zWitnBvEMjzkz6WGuxYGoWWSZ9Jhba9WQhMwdJuDYaqCDKJfd9KCvNrhEUt8ur8w8LwWA89xaikaxDkJ7gybkiG",
  "key11": "5pSSytFG1nbuLr8v8RjMPjSVPXNePpn9C1w9UoTxpY8Bo69FNCyLH24gUPr6ydnRx42kADxrLFbSDKLktXQfcbmS",
  "key12": "t7BqqK4PY9WapQ7VGwGFzx4SBwSJR6rc6SwXqCZHiwEVSS43FAuZVR3WK2HRGC6XHgrbYnKMQqEDzesuu339qpG",
  "key13": "5nhe2CSFYxRiSjEMVgP3ccmMY4qdv1UVrkC5raTEcTEGaQTByt2PXvLbyQCRYjQBks8Ut8wZcPS9196AtTw97J9y",
  "key14": "LuLjjVYDHmBTXUQ4mwCHBg5NZp1K5X9CwqT7fu3YnksKoXTpwYQDvqXi6GVBtZb4G1HcSbQcuHttUT2LaZnc6qY",
  "key15": "448PVa9f25GRL4TSPTefUtFJNpiQHAttKFUmjk7o6BBdL6MNndKF73yDaqiSH4xHdJ6KF4SFCsvXBt2ERa4ghyov",
  "key16": "CgqcnsJ4JWJ1t1foiJGGTNswE2fQ64TqBdP1c5dHR4KKHetknPZRW6E1nxvxow1tnBykAvFstrABCjrTZPNpGtf",
  "key17": "4PLDTwCSDPmYbgPrbYD3AT1ouvhF1cyUheXj4UWDqkb3eJFenVAgdbCzCEXw7P51fu27RTGJBFaCUmEyUK7Pkx9g",
  "key18": "3gG7LpURsgDY2gChSSSphPgmahfTYxMeNFp27R7Zkfahm64qFDbiUxnuE1gi2AVXqMeYC61EBQKQ9oFsdpcCQ3k",
  "key19": "4Nei6MfxzssJqj5Be8fMjHXToYjCndN5Aak3x7t3Kphna42UftWp4aAZYxQPGMKU2zYzogqonkWTkQy9H1gdU2DW",
  "key20": "RDLmKkhaUC7gDk5HDL9gWMpsvy6p9KkqwnQg4ULkeNgHa5wzyB6XLbT9vCF7RagJrNKdjoe8j1PYNUgXugUUe8A",
  "key21": "4KJMXrkeC2jVWG5CHj88KxKXQoEY3mWPCv7xkk8U6qqL88CtBRvrpjr5Tt7b1mxVRUHTJFBqNrWhF7KVBNDBRRxE",
  "key22": "4mSX57DqHtg6BcN3BrD8Te9qviDdvQXxvTyc9YefzY68xzmibifShNrzj9eZbh3QfXVtUPub8Ym6zm3vTXfMY25W",
  "key23": "5DLzCvQ5eY6y7zujbbh39rGenQRVJjzTDtkpBThHqJiouFu8ex2c4KrE8AENyC6wtEGapzAMU9AXAJbT6vGynm5K",
  "key24": "5FxUB61TbMcVWu7ffF3Phs8H5a97ZMoXR4LsDpiEBqDVZtBhp7o7sW78ejW8hxgKsfjKRRwqYe5XATDLtABcuWrn",
  "key25": "5TFNtEBRGZ1qRmuEMsLshDAndgtH4mnjTWZsmMi6WgzG7StrLQT8jMS8PxtmVaVzXMciuWD1oNo11AGAZqEoH7Yg",
  "key26": "2eBXt6epWMYEMDF9JFsWGpEAr7W43zNDSCTb1Hh15xYWGLFSo11fbzyVuzXVrTPnrye1Q5J52eCuuVgy2AdjcvAs",
  "key27": "5hWuDrFAVMgxNFK6LgE1QrRfTHvXvmgj2wdnhkJGfxpHPu1iyczDF3JZnbDeyRJkKDDbcFjVSiMxjXhdn37Xoc9k",
  "key28": "5kEfUoCpkbFdazTHah5sjrKGQHM1M15dPzDFX95YdLbujmqbTF62wdh5KbZ2BkJhU4eGQTsYLGZTCiqbbnw539rk",
  "key29": "shgnAdJ8s2E9mW6bRhAdXF2m8fmbDt2MqEG2CgHRZReWCa7reptpZq5mTp4pv2Jr5FusKU2yFTqWf3yV2farhLv",
  "key30": "2fQiJo4fTviVpH3FZPw27TyxRQUS5Z5yWLhNsFDip4n5UUXVLV46dVAoWbXvq5sQebw3NtdoQVsvYqBiASzceBzz",
  "key31": "2dXsEJVCkQTNg4WSdj6W3DTYUFwDAmfTCBbYXYP8iCaA17i6sZfwYC2KL9j4fgpcLmVkjboPhfXPLTVjGT6KtNtH",
  "key32": "5W74Fn5Bz7Z3gT2Y3L97VHi9bM8K65hQy4CmE6ZYNs3A4mL43N7FDwgv4SkcNPAAyZwFWYpgz87KNRnzn86fHYVQ",
  "key33": "v11JGZGYRu9zqZvkkWr65v5ZcR4QLuBXqt7PLJNWNzDzoRcqyxkVZvcFizE6izHpy3cNhmy1K6rfUs262psernK"
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
