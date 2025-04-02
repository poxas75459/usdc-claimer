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
    "3qeAgh53wELx8B5fp72mWx2vVS3yTEqGAxzdsJWhta9xsxRTedstE2ujF41aBDvC8fQoaYMa5h8he1T3hSup6wVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EuS4rb7aVgBJZcaFduM9ge3usDo4obbCLycMCDhAXF3YsnG5mUFxwqt1t2mWvh8s8BqQGrEPvieF4KpN4T1gMDn",
  "key1": "2w9fGkjzjQJf2bXyR5UUc6SyU5aZ8LKbEa8MdCEubnQBXwAXSjmDT97YGL7u4ryL6tRDzuRtfAzK4FztAccatgDZ",
  "key2": "5bJNP7W7dwuiyBMcTMyZaS8Ezj74BjSSbvdPZuc18bMG9V2Jn5N7mo7c7Wb8bRrKUqpxsEk9YmxQAdCn4kf12FZC",
  "key3": "qCBVd5fWP6Ha5cyWL3j6zgVmP5iXXGSnwszPJW2JWxLUvpqcNmK4DhUqY6FpWuAr3u3LjzY6QGeJo3cq2rqanBz",
  "key4": "4Ec6gp9vKDNweHRtXQpfkRpb6H7yVPmWHRxCbtdzWwVexJWu6vTHLe9kfv1dk1RSu7hK8Y24UcakKbkQ9VnqUfVe",
  "key5": "2hPnf4oiWeqjJjHHPXo99jEmfxK41UsmcK5xbBXgrPXn5TiStEbD1XaQ86xYQC9DHou2wE9oKQee7N5B76DttV7m",
  "key6": "3uuEMGDN1P1AYdjQAyRa4pRetyuRMv53dSb1n7RLAsMjUfFAKnN4Wni4XnMkMZBaMjp9SZuFAaKS9iFXGnm2ZPn2",
  "key7": "u6qj48sWkxStZFdaUyvEd1bYZqWjHn7fgD9kaLvrtcSKQpRqcKtS8AkVy3udhRgH9E35YF52SjspX6KbSepx38v",
  "key8": "2Fkbb9rLhys3yF9rDk6zPXmyHUTNp5PdL2AZdx6UebTCphf6fag5KSkm3fcC8kk3Xk9PdqRe7GNzaZdoS5YUWjr1",
  "key9": "4gKNEFxq6G1MAQB6bs9tZcaJ1zQLtGDk6Vm9EsVus18ahPSWNidySyEKPDAhQTDt4HpHVkv2U2bQPaTPf3CXNnzW",
  "key10": "5Ke1oZfe7pH5jobtPWexM7yHsDQPYVH2iPsoV5AeDSxX2CjYHNyGLNjjY9BBUSvrCJ4i5dFE8fUHEwRdiFtuG9Sq",
  "key11": "3ZyHMhraTTptnSLgDUQRqSYiA6xMFnZ3Hvt1AECCM5CKdu8sboWeDa9p7gcZCmwoMr6s8ctLpNidb7dmFgpQzkdm",
  "key12": "5dvSfh85nPQ1Vq8gjz2vSqDKj7L9b386EBdtBp43TkQK4p9nJht81ujXSzbombojgE1a7KSzKxsPDJEt3V356GkD",
  "key13": "39fadCAyyfgWbETeg8fkWfJYvxYjzaEEEHVVs5Br6YebxMCxyinCEvMQKaCFjpWF8Bm4KnEiTmhqrmPMPaYtipKV",
  "key14": "55c26br8y35Hfs3tR2KPmYAPfGwapcEhfAW2qkbdUUyuUUmZCZgFxCgdhiRGTWBGy11wRpj2wYrT3AYJEpUTCeT2",
  "key15": "2gJjtDBhS2tsxEKAFpLq1dswrggyEHPNRHFPkUPSBRgw4iUadVRxryKPc3yTvoVhuBsdmUdVogEcGCMyvdyzGJPr",
  "key16": "5jpmr4PracVPpUtF1xzBKWNKqnzjRkuNBRGcAZ8PG1PZNkgJ3tp6QBUuYs8m4VSTSU9wWheaGUyUxdQv1b2RHheX",
  "key17": "2ELZ8udj1AZWbT6UBaJt9kXS7gKniehEyssedez1JuYZij6bLneqryAkkSwDdejqPMSLCeZfJrAnwmr9cacw1oUq",
  "key18": "2YaAPY9cT4yjxpmxfF96UYwt9oZmohXz9uPAFkq7yw7rU4T8q3PuLeSKTNoGwuPPfAQRZ3LnEpRtbhEV2zEb9q5w",
  "key19": "T61jbcWghcavvXwj7nwk3AYVeByECPHY9WhtYNBWNd4gdXHpr8ad4SMQB4hWyUbXnL54GodmWaZPzaPQ3GDWXWU",
  "key20": "3if2u5NrrA4FE8hjDU98qhaBGZssH17SVgHdHhuxo5jKGXetMT83yrV3Z21AAiudbPBvogrzNYi2FdJ49kMaEJNC",
  "key21": "5AhBM89QUhwPjTGJ3yMK6x4mTuvVqMxhm5XpjsEz7bkZMrBt396SS5pUo2Uk2fTxPzGawZYPjzfK6PzrTr2FFjRE",
  "key22": "4mHC2Ljm4LEDzHSSfJwztdEP78sBdp8CyoxcJCnFS9tXMA275PYBMczcK4suBcfxgNsLNpZz5vLFxvNCWhWR94sC",
  "key23": "5oe1BBomLGj1YXXW5mobQXUhqY3Lr86UpbT5brnbuB3kxddkMdVukUP8SxrcmXbpJ5oUzXKQsVUfeneMg2AU44AU",
  "key24": "5zgUybzSU6oiCd3qTkbi5t7k6hUSiGssNPJ5jKJ3XkjVTKayDsqs6LWZGCfTRVwLn7UfUydCtbqVqbvFBDhkKMGg",
  "key25": "iUfb5Qx4gv8z2BY5sXjZ274H6sZRRb6b57EFKMYC31FSi8asxZLkaQRrX38bZ2Kzg2Jzpa929SYM9Bz44SA357k",
  "key26": "vjwZu9964BHDVxgTt79CXstV14KSSEbAJHqJDV6Z1rSADTH4HJkH99ZnnCNbqrkDtChNWPscLJ5T7wgaegF3Swj",
  "key27": "3VuYRB9U5x8Wacpr5tGab7Rq1BYV3nJbPfyxRF6dbJeNYoSP4BJZcxbjQam5DYkwWp3gaHXj4zy9VS9ouiv8Ed4x",
  "key28": "EjM1noKLxkqXYR3BzJiLLikA49yjVaftEjRFMEyTERqNvd82oGRk6DMUhN2B4PXPSRLVuEC1VXHsaPn43BkvmES"
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
