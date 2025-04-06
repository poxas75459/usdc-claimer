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
    "2Z1oaVb5A4GKGFuf1PE7cmrtLj3LVxpPXbp3WW3CsNhVpftQHBqQzcXegTMrZ1yR4m9iNxebHQmrgfXCQDPFvbTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U5UwaVo1gjkmFaAQNCBz9KUPyvvSQD197BNtreAjrrXAG3dnPPJ4iikwyscQDGujnxxdfKqBjkKL7GCnFSU6iWf",
  "key1": "pzPXQujLJw4sKrqqtyuHK1d3Hbg1jq3ZSXSZNctThMbu4gHYKzYK2uVwpy4E9yziT3UQEqhEW97dMuyYc4vWSGh",
  "key2": "2smC6WBteMireouDTELhLQWQWeinbWFc7odubDLuMYLueP1YJp2vSXCtsgRoVvYcFTfRepjvn3VWoTyxyLkLRHGg",
  "key3": "4Tv68PvD1wpXqj3k58YiaSJtChRjVXcjTpdeUW9osv7ZzHJE16N7FiVDGm29hj1sXYCyV6KpJHQuRatzqAX8cdDU",
  "key4": "2PPa1we8hMAbRC3mVtX3wABvpXgXg8YzUr5sdCEAKNg3jCs6cKjiAyeq7WTGUqdEdSPYeqboFppCcZvLQBqEmL6C",
  "key5": "2VpMwHqQz59kzKiZfKPtD3HvjiauNUSMaZ4h3o2MVm3Q6XbA1sWZUJBu9gbkPpZYvv8B1ieaVSZtVHwkSubkDvYd",
  "key6": "4Pt9HaFEM1HxUnnUcMbwDs8v9xdd99rFCv3hQvGk73FQshwrLxMhs8SDNbNvehbFUwcgDpapYjXPbxLKUGk55Gpg",
  "key7": "48UgZfiDUfKJ78Ly1mfjuMe1gJM7hKK5b3AdWxiNSucqnzcRt1DhykU5tBfqK6pxo1y4Sax8Z8PMYkoBK7Hs46ZR",
  "key8": "25Vz4YR6FdQ2UsxrGq2qopwomUYZNbPBtyTw8MT6N6MqbNehgfkRrZMBuAv1x29ZZsFXokLXYbGCRqsafRZ6Ek6G",
  "key9": "2dpH9pe1LSp5Hi3kaFSCz73EMnWi4YnURWKcV9PznCx6Lh46p3NhUc815uT5e25vZrEmNEtcC8ScncsZaz4p55Vt",
  "key10": "rjQQkn43sna6yH1qZmGp4rg8AcMy9JCRiLRgBdghkbX3AzUdMUDfzE1jb8uPuFU8iiyPXwBjiGZPHEYDmfAdDVp",
  "key11": "5tZz4y3LyTUcS5WMfyBFpngAD3VPRPqqrKAxVxhrHosCPaRMPARw4YN6cU2XoqGdBVGBewgJDbbxCzZVtu5TLnJU",
  "key12": "51zE9nqWnEP5PED1s4C1ZSYfjnv99s7NQ7wxMRCk5AdrxTEEYKvD6Sov1QVADXP8N1Fdgp2TadLqq9mMWYPRzFy3",
  "key13": "4JSmhT2fRMAHzty4Po7W4Vu7gT74arnqQg4NLfnumcq5YSj1CwZLmaXGUFd3maXdK9wYD6JafDdaLhyjdn4ykxPP",
  "key14": "5GQUA1oY1dnC7F4iWknMtCTdGh2MxSrAtLRWhjUyP1xM41uT9ZpdLS7VLjTibmjB5exYJxRLBgQG325mXc6ddEDL",
  "key15": "32vntW5DSyjBQ7kZFHMdeVPaYPwskFbAcaQFmZwn25n2Q3GwgiSz7t52bicFMewt9UFwCq4bGrpReuTJaUnoWTGV",
  "key16": "2NREK22yDDnSLfyLhXLYSZSz6oGGYu4zEAveEBJxoVvzcNATdK2idFdYktZyyg4D3WPkEVNfiPSKvDTJdW9X81BY",
  "key17": "4bkRedbVktCcDDmau6PocuC5YUBmw96Zh1nWP2JbBbGQttmXQkkQnEMEtaotiv1Qps8HbtAadw2DQV4uEMHeNDCi",
  "key18": "4ediEGVMAvrA2oBQaVgjTdg8khjf26pVxN2opv2HajZMVoxZf4ugmBXN6MeLLb86cvbyoAAyHTNGCux3ENAebJm6",
  "key19": "2J3Kk8ChMZ3tP2LMiVyEGGyvXJtUFcwRezcVLuqaMHtsbUEiU3cy6oTu4hrBoCovKfrWt8oZYHaydf7XAtAqGcMG",
  "key20": "2Uddhu2bah7wfNYU7nWNRi9M7T38hzh7nXgnrazs9UycNSHGrrK2h52DAFgukMGjuwFPvAfhMzVbXhMWv5CqwGce",
  "key21": "24cyk62kt7hk35kTKm7AH6CmXSriDDARaLvGr4kbbJZMj6BbDgNsELRnJcwWrpR2kZwezmnsWHAZVfSU6XX3zqoN",
  "key22": "2gYzgEXxfZPiRbpdcr3Z2vGGVuRF8NNoTNGSesK3sZX7eZCRe7AneHb8jcf7wR1szgEDX3uVux1fqc4JjrFAP3oj",
  "key23": "2QAGtqFoUJhrt7VStrCWMjWAkg59Vf2Df5VQNMXd22t1abBee923J6nT4PpwCmZvmCQ98JYPckBEC4hFwFphKav8",
  "key24": "4sg3oTSqqHu2f7u6sQ8UdpoEpUEeKsMfafzBJ5zCkDsHwJHxBgg8AKi63WRSrfFcZnXvJ9xNPyUE6U71Nmm9rpTQ",
  "key25": "4WsQp8Vpr4T6UyW1wumqRaZgviK22MhxztJ92wAXNv5RkzHDfMf2jmWnJm56nNTP8osMJUsiXFPUGbsDaXnwruA7",
  "key26": "3G1VvrxJZBpdDpZeqogGGvaj7Kw8HehBAtvfGDpGpPB7KrvBM3rS9DdEpW8FbqjBhRUzX3jWtS3PeXfbZmYdsy8v"
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
