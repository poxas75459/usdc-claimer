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
    "2sHjc7u7CKNvQgARq9dLBZFnQsf4WA4UjupiqTBCLNW97xUgX1Rx3KfWfYCuKdwiapgm1aZEqH21vQenULvo4RP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y8ztucNE9XMkcuNjWu73zgsowBefAXzYigvmthsXjmqNv11AfK7T7wx8ne5mRu38giJT3P8czed5ZPMdxfC24R6",
  "key1": "VoVQcgWQeUbrsTV3FXQm99PfyxLAfFqgBM6MCVnuobKMUUkhSyqzXHeYHmBWAmpjLsxaMqdT6325r71Vb1BPzhr",
  "key2": "5tKH287XTCiMNqpZwJyg2iG1oASEKcQq7c3DAajSitQi6EWRW2n5vL5W5GMfts2358m6Vwgew5zMEujggWWGFKU",
  "key3": "2UBXJDopaYakyyRmAnGhWaCu2wJyGgzQAKUc5TNKeuAthrtPXiDe1CaGeB5npo5qWZ2zHJg2vMdYMAQ5F4stmBkH",
  "key4": "TRk2yoEdxY9XaviQrE568gzuFdurUT3xQqNy14BKoLeaTPhALHfphoNs3B4KELz4CA4U1xz7Cq2yGwcBZvTaM2V",
  "key5": "4toSHGt26FZd5fdfTAxt3R6VUUZAF9j81mGwwNQuZdT7SDDQZnkT6gYfpe6e3a43nztesgXETofHEEwKFUtMcMyy",
  "key6": "2sm8cAiJnA7WZqHaeEknccoGWNtFdhW29LL1A2hxoQ4yAkJJUzn9mqEXqDco1egourHxZzKPqjD1oyD8LRJEsQoS",
  "key7": "5dZhZaJKQ9Asp63ADbrSiewFBT4f3bE9fXV3cBukTtBE3TRezZEhDUe6ZjzzWSK6oWUVgk4xMxmEraLrgQLmxFJf",
  "key8": "1a1hifw24cn2TVcnxy5eJfnJSpGp8WzZwzVDMgmuS96N5pKEuqwnPnHzhy9btpFtK4AZcWBDbRBhfEu28s7WDa3",
  "key9": "2uHWMLdiMKZi7eguUeFzbSYhtdAWGraFo1uhYk1rpJ89ukRvwgDNmfBr1emyZDwzmCzpHHu3YnXJVeByXfcu9QTi",
  "key10": "5mmAV1LCSHHCZMBFEKsQ6rXTKscGhKLHzyjcT4vTakfiNp5QBPgw8MvJDGKRn5Y7ezFfbGG6VvGjA2vvU5GPvt5D",
  "key11": "KLHqMXbgGAmF6tk6LTX6f8PqT55oPFsGWZN3c4kfeetDHEZp4heKwtge1xTQCHZhZwKvoHqm28aZkawbxxosBrT",
  "key12": "RoB2umgGjLfEQ5jTFqrG8B2xJ12ZaTEqBuyo966La5JK9ek3ydmWnyF6CbjmwMquSFWUjSRy6AnJcZcgyRwuP9g",
  "key13": "5fm3z1Bpd2ZQsfhJzp92pgeHNuBDRFQU6q85TFUKR3jwMktYBZhwQxAFepz4W8C1RoLHnR4dhum3sAdc1v4stvqg",
  "key14": "5iiukrZotiTGNLc3f5yqUEhQ4z439MJvgPZiFKZ8LKNBZTs6esd7VzUo1eVzZ8dchATGjqyvNGrLsbCorESGfaxf",
  "key15": "2XGsb6FQ1MpzLSFEvkQHTfjVaC22Hp72HcijBqU2hKYUgrxuwvNFkxBy3rdz8wnQLSXdDgjXkhYT2oWLU2C5TD2q",
  "key16": "2sDcSArVEa1HmReD8jLRtwwhwJUfQYScxovrKRXiJ9u8tJqfpvuDUTqS7F4LTqT8GoyeAnmoz3Txsxwv7Jh2A91E",
  "key17": "Wt2S42yN1MHrZAq2Hmmp3TLAYvv7ntfHo7X892aPiZ7vMhFcg5GgrLEJnB5nWPV94wub5Tkbrs3A3pxgNTtfJyd",
  "key18": "2sS3wWdvyeTkdsroJhM2JyCY8XkC2bx8NrdRer6btAFBMcaYXh8S5zMTNucv6i5vqYL986WV6duvHePp6QLEaZTz",
  "key19": "2xPH9gpAeHXfsxtkSZxrCuChSrpyAL79qV2BAZoZRoKBpkecfXDuX8aZqCMpjF7FQUHpan1wbBiBHhLPxVGcQscs",
  "key20": "2Bs2j3jNeSmY7A11Xth88x65NT8mYAA6vvHAATn4RfJzJTbzMRof2bF8atFSwyQGuYUayMHg738bdSdKBc399367",
  "key21": "4LhrW9frmXJB4tacNaKkGeEyyZ86dCrr2S2ucek49yzDBjWWenXA6Sec69xqVQteBWi4vxJgM8AgJiutLVAFxnrj",
  "key22": "4Djp9E3cKY4yyZ5Ms5XBoc5qbn2RGZPxBEB68p9gBQNtFFKgrpsD5BxADZpPUCRQjU7yUToH7xrBK1tH4C1194bw",
  "key23": "56BXDNj2KKVAD22DuQvm25YggBbHSVe4wmWGxj6yVp2E1Se15LoVMVXvwFhV2XgYhnZXJz6DwbtND93sSU4Ycp1h",
  "key24": "5VKo9rZBKHwabjhciGnaf1Z7cdbonryhFEr3R4aB8h5Br6zM8r2V7CeLkny5zrNwPkViWayYU2AMbrLJkGa6CAWV",
  "key25": "4GSACVW9MXLAG2fDQ3WZ83CuqX5ZrdU1z79RcJnaBCrdskw9p3KuEyGHF4LFZ942fdJexgLXvUkfZNwvrX7DYxqy",
  "key26": "5CxiJeVhbz5NriGbmWqxYcqYxyknvYz4svtgTer6HnrHXq2nR9TAwXiKUCgazWfPULrWNozMRdUZsMTsKdEuD78y",
  "key27": "w5AY4e9FiB3hS6fXzkMuuYp5RSrMKRTqpufZbaWZ7pTxTyb7zMLqJ24mEJPY4RirVZ1EAibNwZ1QfEcuTm3jTvH",
  "key28": "4xEo4jJtNRC9TDiTLdsHNFASfZPyheiFKH6NcXoTWQBGvjMSpPycsRgLYxd9XXcYWyxs8UdmRopsMwAcjZQ3LdyC",
  "key29": "xxG2XudWdcnzgXRNZpmtTD7iL988s3eNsg74y1nMDWXCthfDRAnnyh1JFHprdnrgokBBH424s6T9rGsvHCiX3im",
  "key30": "5niF6iXWtYBtb9bz8YQpF5bzQx3Q8TkaxArZfs6BcfqDY5b9kRXF3j9zCLEmyBWMNSaLYhM7guj6TLDmpN2u6aKz"
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
