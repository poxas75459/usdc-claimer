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
    "5DekQdag9JRP3bQSrxs5W3NphjQwdVKHoShHV6UgQmQXBjymqvK4mvsaR6qg7DiXqtLVanG3tCgui2GNUsiXzPjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sBupkpwz6SjeLfAVnTAbsPRynSyajCoDFxn7oRKMtgHM48AiXnnciYpmZZypxfZKjqHDjGKrLm36HyA4joDGfcB",
  "key1": "43Vic6Gybf2CQd253xtuQor7qWEJKJQ4iN78oMT9vSsoPGLLSCuLAkz55mKxfNQE9RGpbCuXbiLBsGPapzciBpN8",
  "key2": "2uWd1tryKxypzk1JCQQVSWnGVQSnqMmNSXNqMgushwU82st5shGhymXoqTRaNWnLkAY1EgWQ5X8ahbwHWCcVonPY",
  "key3": "48E9MFd9ZrN5qHuo37XvFrCs6k8cn3EoSPRnVfGuKMuSS22oNjehNgT1jsrKdEVjVPgwAfUbFx8pxRXV97277Uw",
  "key4": "58FiQ3UZHLxtmAak13i9aeUXnK5WimCyzQHYRu5SJ3ApUPzjeR9eLtJErPHjnHFFZsJMcJXTY2wL9522djyHFu8j",
  "key5": "29X6PK1oNFmUoX68cX1jRW3TjPUU93Bj1DivnCoDsS8L7HxLy7YysBeV5DD8DZpr4xHDJKBqZ3dSFEPHZDWkxwjk",
  "key6": "DCA6bJRmGdnGgow75Zq7RD1eb37ysGrQVMehWw8gVc2wCd8BZDPuadGawmpcQLTgUSkxhHTJgyx1SpPeS4UGv6P",
  "key7": "N3hSZAS85oC3RmsnxXxKy8yMhxHnovdM3oNZsWswCd7ao4ZLHZKUJL4nRHH5CBvUxm6mE4UDp9tjDD1CCUa2iRc",
  "key8": "WEMagtfMJE1W646fy45gGDhfPiyVuth2hGrNgFXW781Pw4hwUiN3MHcDvLPuG2UckZTn8WFaDXoFqdsTEvHy39q",
  "key9": "2rEk9AMNkCpJ2eD9ssDLXV9s6VajN79mTfVEpfnTDgzyBQCksQUQuwgpCiBnEoiV1eHbScmRQiDFKn92dJqdTSiT",
  "key10": "4j3WG4LLFMhhnKKSCG63DjAvK5MV6KoTgrRydJAGaGEajv8r6T3Cx8yUAP4bqNPcx9Gan4Ni3wRe8y1LN6xuj5TE",
  "key11": "51MAxKWuXBwxLKo2cHkdg5UJk1WtU45Sv6iiL48LPvLQFmub4MUYmdG8WkZoxWD1yqe5MQQPnEbwA5pjjCYdYmd9",
  "key12": "5WpagvKmYW9jPsjEjgsEkUNnrEFQjwV6qsQJvCdmXCV8xeuDAXNXHqn1mGq5HFxU1MkuSxEhrAU7Yc3pAAPu61EB",
  "key13": "NWa53Md5U4Ms92rytwGYnxo1cJYhBx9gdwq6vvnRuv6E3Soa7Z1VvxbyBZDjQ8KuQbXdvf7UuYqNjfeW4UxGrrt",
  "key14": "2nZT2ZSEiPpykn6VhZX1XTGkur8UxDSSDCHV3UGfDrKCjJuXt8qGpLQpkGQKPUgwxnZsQgmyikXhoVh8ojB8HD5W",
  "key15": "4oh8HEZWcBi2KY9eTX2Csg3G11aZGvGq7Ra7dSq9L9L2DhLq2QMCGjaxwSGkeeo7XjzrxfRRhGZtmiMTVKxLUqWv",
  "key16": "3VndNKNvdPguzmv1PCGQK4bk8921sYGmGgyaKEyuxtr8HyQzRdx9qK9DP4pjciXzbRsdmV8U43UbakvafRW9ushi",
  "key17": "4A2FxWvLAghXt68kfAXQzPJasMJvbhBDQBAsAqZ1ufCdHvrS8mf7xe3NBdazakw5gPK5Q3p9SjDceLUC9jTqxFwU",
  "key18": "5NDjqNUTLakrcxtBVEwDwsntTGXGcjaihaNXPjfYwp9oFHyYPeVQm1U6GwVC7BCQWLA1AbhAvgvkLTrrsWak52Tr",
  "key19": "5arhDacndDDP1diTJMthQ2vL3fALLe1mMRBmxcaADZPiEpe6ntmsrXeTYFbm5CggicW1jVXfHJVMtbugB9BAowfp",
  "key20": "VXTGo5AJS1wM3T2HHfvap4HDALPoQ1g6QDeCqrNHhng1iYiwjvU6axxUBi6He5g5mouyH4j4FzzdR6J2XYkqJRa",
  "key21": "dzwGDaibmcTvryLjYr8xtsJnWM6jA5MpMZ4zwXGVBcpkQnbH1ip399yMQE89LkLDASK1dukzed5Jf1Xsv6AfDTe",
  "key22": "2ao4HRw76pvDn6x7iihHA55532J5NW2usrUDh8zhrqo3AQw8Y3Hp5GMcuJfB4SrMWjdwzxkeyn8poExSY9aSzZJz",
  "key23": "tz5spdpF4VgfChZU3AuLGQ6qspXcX1ozK97ufbUycnnhQEuvYsWsy6XSFndFKXNPxfT6Pciz789iPuHhhdmXa9J",
  "key24": "4P8h6JoTbNejZXg1dqq8q23HkMUic77wHQBNj22YrrXbfgwtdjdxSQ1YA8wg8CRJUVWzxfpxodB2veXraLzmPAeJ",
  "key25": "5iuHXNL5fan4jCRC2T2Pd8A5gK8gzzHfbSgcr3A8EaH7RJvYLJy4GVmB5MYrH4a8taX5sUwmhEDeUC2p8UXuwFc5"
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
