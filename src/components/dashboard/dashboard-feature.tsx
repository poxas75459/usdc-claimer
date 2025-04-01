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
    "2bhWF8PyPg6wieWgoRFbXciAsNUhgdbKVnYnPPJATWC9pwBKEDoVEY44P5H3e82oRqAE1hC3mxuy9v39hjsi6DfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pM7tonLbGa7RTQobiUAFMRHWhNBgkdpRhEaaYfoQbFYNcX5dBjoZAMiLECLSpqdzWZvo4P5nEnB2TgRundBHfdF",
  "key1": "2FyAx7TiAD1rgdZR2An81zabiQLKxB55WF537kNA2fD3pjrpAiQUBEpBe5Bef6k3qSUazocTbqrt2mbQrvrTPVea",
  "key2": "YQ9r1VVdyaykqsguKzExGtvtEZRuQMWzk9pfPswJ18EaH8TqcCuQbMp8pQRBGqrCrngRMTwjXEwUNVch7jGsZ4q",
  "key3": "4QXK9tvMw6MWLAsR892fjL5MMBducF9zCzut4ffng7xQG6BiZgGaYpppj5DCK39zVMo28Q79zy9NoBZCTC4t8gBs",
  "key4": "4hXDtrfEPqN98iZDakL8ueaeBF9gjRWFrLCktAxJ3Z6QU3BtgAMp4DqgxPHR2VXEPWXsQwm3Y38XTKmaHnvAoH2R",
  "key5": "3J4a8vBJ4dtiYeGJh8MNpfyMn5apLMGuQ9p6mjq6WifUQ1mHnQLTj3Uyh9L3zDeqhaoYSW7pcDCZtVnqB5HA9c8Y",
  "key6": "a1WRRk67AtF7cja2mDKJde8D8NCAdr2L9Wd8K4Vg7nbrvPVqx4BznEjzLBm6jV2DNq4MK7evqwxZxBYeia6xXWf",
  "key7": "2nvg79M8T4bW7adcBM3p31MiqEwF6PXZygug8bX5ZJtLhKbuudKGEcPMyGYWNDttRXfADhGVr9W3KvCJfRPpuEo5",
  "key8": "RryLECVsK7F1saUfmsPjeHoCVMR6WjCFhPNBP2niR28esRP9EnESTjpY3NjEG3MNCBLZSqar5fRb66knDg1yuvj",
  "key9": "61TAgf13kpuqJg6SqqkC9sgojjbYs3KfpLWBPcQT4dyft6LiHrE42ft4g8QDS69FsPwDsLn54FhEcMFE6a9RLVs3",
  "key10": "5aK3SXjZh6hGBGkcbHyrqomZXNJ2BPqabgp9MEGLphyxNTDKZTFkHcViFtTBPfHTS2TYHLstHiQSmzo4MUvkBoQe",
  "key11": "3wM6fQBdgNJ1G9hWCMXqKy5ytEyA71E8DExZrk3aNr1pMCy1UC4XKJqeyNLb3ZJm8LsUdjsUB4decJXjHbAs7ZP9",
  "key12": "iD7mZf5mQLNFF7ysj2a2Rh3qXaHwgJzRaaroLNLsGvRw4ifjuVd2M1QKpJMeh5Jt8acE9hyyCbvCujwBjuDtK3V",
  "key13": "ApeGznXunKNPDHoVE5bLzg8N5KVfEmdSWmxfJgXAgkMVscWhNEk1y8W16YfRH6VS4EbzwBYRX4pPe41KxGyayzD",
  "key14": "4AcbqJNPpU44PRTZuRThyPUFcLxKT85dxFVwgKb9o5bfetRGesETf3H41h4jSeTKvKXNBP8sEZVysMyQ5rCicpQJ",
  "key15": "5DEPxt8u8jVvstiwNzzqSVBgYfjXxNiDf7NWgpruq47f1QfNrmBgq56HrxPxffn2rBCBdN1YPDg1xenGuWHx65LJ",
  "key16": "2LSgNeuVuX6TktPwjLLWy2McQpAUmCVm6aiPdPmTzoKvgd9utgnnPnEeoKNjw3sDyVBdtc9Pn3sN7TvuZn7KJT16",
  "key17": "4NoNVkD67CSh27sCZqRUs9VHFpSo5BZNT7MB3XeaExEaFqaxF55ZqeKC9ZUkAFhKk7NHMjNaBUJYDTJdfxTxZ2Ek",
  "key18": "51atnncd8kiebg7vmZ9WrUBUgGsMEipzWgpJ9nqWYLq7viCUBZgX28sgVyBQNwyxtwZQpYQWAS8dVN7aRCsKXdWa",
  "key19": "bKLj1hKdgcvTqkxWg573ukdkzyw129WzjwFpqc9jBDL9Kiwrr3B8qpgDaN8YfgVHszmQYZxVzpH2nYaesmf1fSM",
  "key20": "59QZmq8nzh6A67nmH92aah8QPdNBk8mLcYwwqGn9jgNq4oQqP7UWB4RfwWErkQzZqmbibHuCtb5SXpdXb2yHjp7S",
  "key21": "bZiLigz67bycwJCnGHBXnosTXgtEyCC4krj8fcDMgKzYNQ6zwbfabd7KsyDvdYo2qoTrccskDLMHxKmaXM7R5sU",
  "key22": "BdwRAyzMPyd9SbvP3MobEEQBadQbU9vbjTPaBWNPK6rnWoceLRVGrGhZtfnEm5XfuMNKGuDpKqeMmuTK6NiJ9i8",
  "key23": "3qmjxJQfeKdqhbKCBHWDE6iVEgKFFeZZVQZc27MhrKVMSYgmPMLGBsTRJ2huxA3BCFbHa7x9ZW3GD7sBbW6xashT",
  "key24": "5aR6a91XeFPF1oADFVKAs8pFrhfL2yQDjBkNJXwU5tJECWjsbm2aFym3JnfcY1giv77ciD5RD8xn92oP1ngevYCm",
  "key25": "3qQahMuTM1dBT9eyeYrqfko5iK5NsUBinKeT49jdDFra3xdSREmbdeG4ehNzkfvHk6A8m8XfE5SctrzhcW2thpyE"
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
