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
    "455Vc4hBAftCHq3PTXY7mTM2msFP81igLxML9dLchXfN9C19HkV2fgujhGit4XnLLCCFZrYgXLHc7rMKapBYDkoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gEAEhhTQvepo2tJEGhc1Q2v7Kfx3D5pCSzPPGcFiTsAuJkMMSMYtLW81jq21E3FpkM3bGfibKdk5MyVierVcbXL",
  "key1": "4EfyUqnNdEmcDrpoFYo1rNVEUqBP21XpQo9zbw3D3LMkgKnWPYJBdHs4PR77wMSodSdYKvANpQS21veZcMkAh2BE",
  "key2": "jAZgGsJgDWS1SQnMhxj2Xc6sqJjKHDUvzCAu5yH8GCupcovZMmFH78EawRWVgJbceLngdHzwEPKFFAjHB46RQHd",
  "key3": "7YWAJufeAXSwLHC9GsMF42GcBBYocApqjNhGvRsYL8GJbsu17qHbSsrFQf7nuMkjt2kkCm1diTvxhoqCCznyky2",
  "key4": "2Ndi6XEKATJJZ6upDaB3xhAzienf1oLoKBGfJe9yen4YQXmYne75eFL1bJiyhMLoxByB65N9Gr4SkL1uLp7isCve",
  "key5": "2WrWUmbXWvSw3iP2n5pjnGWKjJ5kWLRcnC26WQiTycDrRxmW9LBE732V1p64eYscp5Wx33G5EujfVHgS8AtQMcFL",
  "key6": "xsXjqxs7Bx4Wap7CNfjGc1ZDYNdgstk1ZuuDPr9cw12g9uRE1CnhjdkjMLyVXKJAhVUQf4PZ1QZ66uG1fMWnRri",
  "key7": "2AW9dip1oYxg5tDQtzrsBmBbrbf8js2zSj7YLKsjrkMnrwX7G9TCGZhUH5sKh5bqXQTNLiYJCJ2pzi9cZ1W6LU6C",
  "key8": "4L7piLJ2rttV9xTd6kkXURwGVXpD9X6k3LP2ZbdotJBqcH3E9YzNKsPzjxuYU3hvcXS56S7eEj23yHH2QKmbzNir",
  "key9": "4EF4bQmPj7Ud8BjuS9LAwUsfo8y75M6dJQV2jbJR1FxsYwzCJy9C3JBFjGCVQP6QneKPsaukwdnVzLJ6dug3uoaB",
  "key10": "4Lo6tRNdaMoDtEBK12zN7Wq34iR1BMKKjC3qwtMwKgozppPpdSWvoChaxZKX1H8xSnAQcoqhaLoKqtNvBK2kkHP6",
  "key11": "3gYRmmDo6E8cPTy5qXMebKbHVzbV2a1EsK3isawRnbx1Hjga6K3fde4WmryHHZkU4PHoxyt9Nsis63HMgiWGaZvg",
  "key12": "4kLGxVasDiM5gGweXh2kbFW1zynaW8qQKkBvAKmKFh8zjSCYjTj9r21PQfAnx6KMyjsZTTSgeH3iJfX2hTuiDq1u",
  "key13": "5Q6mgycj5e8ZQsbCnN3vbu7bNXTjJ5FtvGwBERUr7ji34BoeeqD7KWGupNxd7oW3HTDjYEXtZfKE49inn2nzTx3V",
  "key14": "43XjSppJvAbSLgCmTqPoHx12LrkfYc6UjyT7rXSWW4tRVA3takHDEEVMeAebBcSiXEfqH7SnYuV9jdKxe2RgX1D1",
  "key15": "4mzdHY8nFyp63vPPJQBUtsq5ErVyF3nkf7QZsJUrEWvHebBsf7jzV1NHXD6SAYLKZv8KMYifAeWm2DXreyZENTMf",
  "key16": "3516UXAMaAcK4wicrXha64aK34x88jeHaioaq71AmiHtREedzY7r4Ef8pxDZz55FYEA3KeeXWThAx8vHdtn8NazA",
  "key17": "2hQVPWWWSBeHpX7QUN5CA6Aybn7ojfRKwbs1yPQVnDxq8m8WHc4myUotT8NwEnPGyHAMdTmJAztW2VUAJ9KRKe8Y",
  "key18": "3qFHQVPATxBXDygBkhELn5vS9mtJKb6jNgHDpaPbWprNSy6ttEctab9v7KUKQNwkAVsPPR3JJyBkPKb9JLzngb6U",
  "key19": "4fJSTQRUoyuiT32oCKf4nxx8Zf1QVVnAZdR2vnWbu3xFZFTGv9HypSeiMegg1nknm66njyYc3gXmxjXfbPrHUF2T",
  "key20": "b2Le6ixn4VM5YGbux4bhwed7zUBUB4rGDvMzoHb7rMmJQmYuBARujuSyQFBjkexygkdfinGf7brhThbsoD4KExm",
  "key21": "sid4Xjt7k25YpLkLoMyyDE8LsYftiDgqF3W7M8qMUaxp1LVyc8BwbBtdfYUqpv37yj1KeHseu3S6v4mGr9U55n3",
  "key22": "U9rEcYnVJLEeycAUGSAsmhJh1Bg3EaF39471gvVeN7siBFYMr3ksTfDdneKQrkHi6SqqpWmAa5wM1ZLhHn58P2V",
  "key23": "2yHSaPNR8wgx6ct8qktGwhxX3na57UbRJEH9Pfr1b9GWqRAXeQdvVzFoBaPREdxj9AobQAVXZiUvJEA76gESMGZq",
  "key24": "4WCjkC44prjA6NHKYE1swkFmAygE7FY1i9n2Br1VdTWxEFVB3JPCNurouLpdHxSQ42LQrksy5zhTPQVgEeq76fdc",
  "key25": "2nHjngfycAupnrmEBCKnsbwF1n8b2rGj4eMtvFkoyAG5gAGoPof9qwgGbpwSNtWcmXSc2XRm6y4mzPywHpZ3Pd3H",
  "key26": "95E2KTuVm1xg4PcLx3orVKAXAphst9e76vBtt1WExV2v5t2opTMCWPBE7jGh8yM4z5uyuxnCLjgHXgabkX4qTUc",
  "key27": "iYhzYYSGaVRp3xFV7tHk5zGZLRsYM5X7fLndzMmKLWcuskqY4xVHcoxMcCQ3rUQdooJLYBMjVAbxDx8vHEr2QW2",
  "key28": "59G84GtYMkhgNnbdkNGR91pxs3HYyRsPbs9Y9MTpvUHr1M38qLVXf3zAsNSZ2AinFnd6qdn5XpB6QPoKnLnzFqA6",
  "key29": "48mcFEVv9U1Rn6jNqLPNTkoA2mXFtjquLS7ZGB6X8YE79pmfy5uN3DuYNtd5j8prcgYCr4U8i7WNGERSSWSXuVaQ",
  "key30": "5zE6P6KLWX5xr72d25b7wJsgttM2DQoq8pFCNHUhAKS59MAAcJk9mx7kRvQESZdjuq2pShQaEWjk734kCFApbhvq"
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
