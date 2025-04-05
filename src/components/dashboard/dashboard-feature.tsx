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
    "4tz12tZKQHQKz6zMvTPBc3w4EbHGqjXjUtjKLVbrSJ5AoKAKi4kCGhqd96JyFoS7uzpxTieQsdu8kwmbFTF5Yy1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z9ALZsA141TfdWajk759cp1HpgeuqcmVKgL4wtD7hf6hbNeATb1hCc7LXUkquaxMPeJKCabMKnGLC2fAdkFsoF2",
  "key1": "5nFB11YGWNotfV252a6G4dJrdeYohAvEngnRDTKQNHMcnLYevYZUPZofW4qNgPNMG2TDVtt1MZbfHNFfswzpWjcw",
  "key2": "3mitrfwWu69g3HaZzMAeHhdq2AUSPeCD51v9is4WGnDAo8YjB1NQAGxnjoptzjmPPjtBzjxxqgD4zinbqWuWm1iR",
  "key3": "43CgXmAEDx7rr9EdoSeSM4sjyisYwuHLfa8EE7TopYJe6WR4HS4G8bXGVawCR9QxCx24BR5jgM9W71QjKMndVtJM",
  "key4": "4gFaQ2hoH2oJxhjPnyCUp5XVqB2QTKwTFdXYgNHxrLum5sWxwGQeAWVh9b6NsSPZRsJD3o2GabSZrqdf8EZzSU5o",
  "key5": "ouXyw7WAtsN7AXVzhZpU7sz7dAmpnKJq4wj3MUq6DMG8grHHvW1MfDZQSrPWZcvguQnNSedqhQhC4kTZBS9UTs3",
  "key6": "UuysohNcsRqeyurppGowZW2fQaPQtEG2LL2gh3Jk5PA8BYmu3pstm1UQYVrohgpQW1H3hWYibcMP2imxFzkwRjF",
  "key7": "4HiGQu8n4R3xqtGZ1NrSZQg8PYNYcKkWga3hRUhEHwL3unfjeT2TZeCYjL4sMBATFACB5zSXQs9efgRkv3QqMyc1",
  "key8": "3WWm2pp3VcksFAnj2xzFZyqMt41ek5dmUTcG4Uw6s3gn6vXwYt4kKxBJZceM4K3VLNrAQ4GSat5kFzQsxJ6wDs4v",
  "key9": "2k558JH2ypoV8UZbnpcT5bP6K9NEcqLF2DcPpToxdGrirJXMgkvqkhpjNhbQcxjDCAtzFSwHrUrJD8dzTpQvCExX",
  "key10": "2TZkq7vvN2oEZegGZM2y3YnrmnJsGoCFh5cc5ckaLBHk8bWvwm8ejCdKrnyGGoQ3q32pUt2z9S1YNM45Wk5i5387",
  "key11": "2PLYSdDBntRBUpdxx5UPmCZaHyfRPLLmZUrmRaaXK7qddPeWXDTogJ9EyQj6kQKei8oBEP4Fp3se35uGZXsN9Kwa",
  "key12": "41iK8uzYVbrELU7mz2Gub4FNK1vDVvTskawmFxCzAz8go3omXSVQgE8tqrMPzipnSi1BGPWbjCng2FP29JWcsTt7",
  "key13": "2dCwX6fRHMhMYcGhB2t2aw8ibeAhZtdvsyLUNSB4XN37S4y9AzYjfBoDqzybAPZTJeEFohGxsYHs5SSRLPFe9hNL",
  "key14": "YHYZiRzgXtZVUZhixR29LqKx2Zpuq4UbexreKtM4BMu2ee6KDRepu8X9SLE2r1ZLCZKe8QPZjRjbCcdeSbNQN5J",
  "key15": "ocUiZAR8aGeGoC7FW6xCLZbQkNzHTDhFJbGTdTnwgHc7wqzkRmMcgjCRQTQX7naKmqdVzXMFLWfEQzL3gwL7h4t",
  "key16": "2XvA2CMP8PprQayWk3jWsY9tzQ69TNuyRV7YQqsxcXfxd4gpxsmu3jrzpoLjzPTFAxJhDBefKzRjAzyviZ6QzJLT",
  "key17": "5apaoWnqG1ZsnWBfjGrcXgZe2AQpeMvgSm4WWw58UKfiTqKYYTvNBpiYdjhoyiSehWKwxH2gJ69QNUZ7CU9AQJ33",
  "key18": "3Tiar3YSMXRySYc1p3ph1W3aduxvtvsRQy1NqMWEfDMQyrsXm5ScBZeGpaxYSJbgwM86Rndb7iHV4FLMMTxmjXzr",
  "key19": "3dS9t1KPpafstMx9ebZRSKNyfQfXCPUU6ydgkmgYKRdZ1ZzKrufSm1FV8M5RAYpe4rWiyfKAJgwF2Tk7W26EvHjd",
  "key20": "5pyVk5JYDpFmPU1G6YMxMzaXhpGpnKCwabT2n1asnmYaenQM3ykpptW6yCxR8EH49MSDCLZub78rxnhimBW6BSjy",
  "key21": "3EiW7yZ16dNVR4zXq86Q5o894dZSZ5QULV3obbv1ZmiRT6JL7XSyGoy74mdbf89hsi6imSSwwiERnK9dPceYcRM2",
  "key22": "4sejhn2JecWMPR7zAwFMjYENM28PuWnzq6TNW11rfprTBfqDfjWAoyiPB44sGcfLK6rqUCUARQyspKX9Ljmc8Y5m",
  "key23": "LbbqQye73gvCfaJGnZBq512UqkwF6yw8TBsR6VGL1xfd2HaUFTC5wk5XMtyuMrn23CH3EFcHW5PAw8ggATD86Va",
  "key24": "2yoLfyoeau1SpuWJnJjj26Jzq2u617q5ikGJBQt25FSnpopqphmBRtgvPe5oAyAHgABBmQngs3KmEYkZYM1TTH3k",
  "key25": "3XeW2nxvSuQ1bJqvocMz7eU7KeEmtGAfSFCLpgkz6ZZjJ35K5rZwVtBPaFSJmuAnUrU6ibifQpXj7TsVasWNJnka",
  "key26": "25cUsua3Vy5aF5iDEyFpCncpcHohcyQZqdbgDdyszRH1msD2yE4Lp3E726sP5twZah68xyTygGTPj3sY67bQJTBw",
  "key27": "4nvmQMgQx8kUg7nnqTeBxcp8yM34NYpxubq66AyyT6YZEoaeuFwTB1jGqcsh2pKmRQmKyuqGZ55VbhGrfQQizJ4u",
  "key28": "3gSeE6MYzBB7YD2rLi7zPf5wYqNhQeBi7VK1QTYSEzzWWfmi8yLPvG4y4ebhy3SfpP9EMhtC3LMdjhhYsgGu9LnX",
  "key29": "2nxgrfcWa5dy7noLZLZPUK8r3jbd7z2dPhc177EddEgWbv6AkPZkUccZV5oSgvcxDw6KYQYiqUr75ga3j18R8LDB",
  "key30": "h954VUTGPaVraUGRJWbtCfFj2hyBGfbTywxyg5SAmU4hMDMbEvGqgKtUYKwpJeFDesWErp8UTz7igrCguHwwQJu",
  "key31": "3LqK5ZyHNn1MAomRVNVQUCi6gwPJwiWT7z72vKEcpGHxxnnskhXt2VdKCYjDzQULb7hNu91xdWp4iHWk7L8nTMDB",
  "key32": "2pDxBn3zaNyNo4L2nRrc5584jv2U7XEMT2a3DKPyUrX3pMYNjkiDJpgo27m6kZBVFKDHpPjjGjQsfqf6thomSjUt",
  "key33": "4mSuRy7a4JCz6hGaSPpjEfjW1HL7s6gTJc9eVsmqTmoKh2GtnAiiX7Jhj5JAs9VCN4BokXg1xihDbspuEWbSu4rr",
  "key34": "3UM8UH2Efgu9dSKHAKMD3ZTGXLbWBrVnHHjwsQEGxM7414BDumTags5ZUzAbfZhwhXXe3meFL9DA1zMUeQAYgYhw",
  "key35": "3h51XArAJhwLdejZu3kXh1juRvvkVswy9zRGaWh2pAmdTHBZ3phFhU2ZUyo34WrmJNZ4uHvUApyk6DsC2acq2uyS"
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
