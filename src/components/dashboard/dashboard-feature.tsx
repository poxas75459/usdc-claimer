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
    "Z2QadHsZEWLHoft6VcY7xhrktJi7eQHHfgNQ54yu2hpqpZi2T8SFS1yoTELbWqpp9EgE7exNibfkR2AW7dvhWwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nxo7puae6MBirRmEZUpjFUfKXQr3taeTj5uT9ptkCxF1SiBidYwtniJocdCtPKZLMu1FhpwNfVD67Vk92C11KKi",
  "key1": "2NaX423ExAn7umhre94gpaMTN9vTrJRqtzyx3Lkwb1nrNKqA5XEHARZ3HSh4WMty7qeoYuEXkcWC84TSR4cRYJFF",
  "key2": "3o4EcYosy2avKPBFyiZpmM8QnKBRH1WBTdvmjkU21oqLjHXdXV6iLUJNrkiHLq9wkhGcUNq2sAHmiCLQdEsFF4Rg",
  "key3": "4uKTEL5Nhw9nMbzCvkhGveFwkxtZ3cQkzkbcJQCaJptgFoRTfhcfQ8UGQKEZR83inB23KTE9prpwmvJ6uhb3pvUa",
  "key4": "4ATn8Cpy9eiF2VX9WoVjWwtEGVrhTefL43xT7P4SKgKs1pdw9ekfu4Sj4qqSycuNBEEDaNVzzNAgkWSyeFXhWEE3",
  "key5": "2Vmm6aDPbES5XDrPfYc4zHi44tY5xWL7V3RnjJzbwBMSJPuSwgVejVKBUgbUarJreGsdw8K4bA8sz2xXZjZEJcaQ",
  "key6": "2JUXmrFeJSmKsTCCpQa9gsdBoyG7xy6aNaYkrJfPrkTzPRgRGDbpRkADENevpPYB3Z1Zu26UB6BcMceCegwjK858",
  "key7": "34MosEX9ZYFhUQH9fzMFYnJvjZFpS7HDrj348g2d2a1ZqDoKcBaSSD4nRSgNtFGsHyagNyM2hf5NKbb5S52psGiB",
  "key8": "3AcvBXa5vuuSpP1vvtVzpwdfdzSeLuQyUsnfDzBov1s4CaSYjpdwcftCo33unSxev7SaF3suzBAjy18YEVtZqWgX",
  "key9": "bHKf9wAn6c1W8vYEnE1a3dCFwdKGfRNUYWSdQvnzwTnGPxZQiX1qrQ8jge3QKLCPM29DVsUABhYSY8MKap8gg3t",
  "key10": "3etqqTWZRRCWCYUNd568NmjYbcAU1Ewd5d1Eo799sdwbPSafLk1tAMDfCqvt7gWJrH9groDmDS3WUvRC89erJUyt",
  "key11": "4x3FZpQaYqGcMNvwheNZX9fEBgwkjV4nvF7DmNUL1Ubk7Wjd53dsk5cXea6wXdnj8MA4a1Rzx2YwTcKpWXtP55gn",
  "key12": "3K56LqLWHDxCmXyhZ66wqpvsvFCoHk6r5nJEYNgYDn6Kgv2QfMHsUYDjU4S4h7nWHKiX2H7Rw7NzXxrjWQ1o7Mz5",
  "key13": "5XCMaBP6G8cSDHAwUcDfkdS8XfBQZCuYJbvcM2X5XBF72VT8o3SCMz1fkgfPgSYxCPGwGgbWi5iByxEKY4269Laa",
  "key14": "67oqxg8EJKG3dvGzB3JPGmTcxLr7kvDtC1rNenUckyqD4bkmrUieC3XFctvW6QUFxATQ6u8QnfyzVaYCm53B7Du2",
  "key15": "3KCFDvewansJeT1En1qwqmom8m3DBzkuyY6c35Z6xA19Q4Db4t58LYhigabK7o3A1Kh3VGqjHgaJNrfy8mMaxfok",
  "key16": "2iVRDwKrAAAudWbiWydau6Tj7TnjfrCjqDAjjRCEpzEjfyPVuJrmJAdvhNJ5JryV4kpLyoVoszwh9f929wGhK3Mt",
  "key17": "57hX3YhLFMcoejTx8v9XNeeHEPRtTPHLUBqyjLxowCN5BntCHrKcexLuwYyiwtUdr28bgCtAxN3iwxN5B6Jzpuaa",
  "key18": "i2qz1sXWo6DnizDShivGXE15aborrFuEg5bbMyXhyCMvxDYLVPzH9Nwqox63UnXKDPmHGGyYhqnjf9sN4Yafm49",
  "key19": "5UsQA1b8ysC1VaGHQMwJxF4iuQAUnx84Th2twg8hjJgdNxCn7dbKDWbeUNmm2UGgErBnGAD9FDTK5ySLckaSRGHa",
  "key20": "5DZ4VkfeikmUujtxqcodTh7Dr8ca43zSyarnnQ8yZsnbJmrWiFCSaxgpngBZ2dknGEsB783Fz41CKnYz6F3Xrjn5",
  "key21": "5PvfjVFhYDKkK1bphjBnxq7LVRzWTEfeCF9BpPgfSKGkyzSqaPReUom24TyUUfYRkiN8vkuavLeEkaGB3sewiTMh",
  "key22": "3GywjpAEUnuBGSkQPaQ5YufUfnRhzJRM927M3qtPFdtJrYojdYB2yDZSKTP5w3HG12WsyGbbvSweimyMQi5y2qmX",
  "key23": "65n6dsck32b9dpUnn5ZnFFVausbTzPTf6FiLyWxZ27KU4fvx6CzZtfBWy3E1Jt9RHXjNmQ6pR23j6pymVz5b759S",
  "key24": "3CswHJjeRMR6pMrNBW2a8ny5689wQvK9NJGjtxNJ65Scf7WcGsfnT5ssWPpiS1FXecxH8xtQqHWw5PhCogjQNrYS"
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
