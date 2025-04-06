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
    "4EwFsoUGSgknFj71S8qjPCHGMLEbG9tMFG3w1rcknFpm6dqwtU6TjfCLFREGJNWptkQSRyYQjmuqu1C4a8q3rgST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pUUaSM9L4ooxQaoUymguyNqrUuE8LZT8cLKsy4zsgLX2xocSoYe177sEHTjGtNSrrcuSzoQbSGewP9tDU7q9jQ7",
  "key1": "5n9NnJPhbFYkQ3NY2UBtMNbnwCvkmhGhrq8WjngFxurMqLvFWFe15VKuEN59Y8RYqFF4hKBoVjJKaqsB1oCr92Kj",
  "key2": "5ZeTfKSvSsmeCm2U3br3UT5SN33fPdgumgsJkwCj9s3bXCJNDvuZiy3yQwqgaGfF9FrTh86KjuZAtHYuVZuyGjQh",
  "key3": "2mAF848BS2toiSEkv15pwHUfbH1HceSi9xpwdMmUG1MSbeMiP2MR372d8WH3fKP9VwphYXY1yqopQoPNwX7rzZLY",
  "key4": "5rzoswyoFYcW1mrk65wxiUqteNj4iABozYaQYXb98C48uMmgopyc5F84izfAJKCzdaDxCU58dVHnQBj8uLiBHCE4",
  "key5": "31tiSCkcSziMGJ5TUcswQYV1y1f9fJGZq8V1gBi6Ai2WZVVzqtZG347Cm8V1Y1sbqBvKicmd9virRb2fHnpwaa35",
  "key6": "sfEXD4ohrmJbHjSMs5C5gezY5XwEmhyYbvkyVgj8P2fdUjKL8uQmBcCRJkuWVfMRQVGnF9pT5CpwCLMWwsCcYSY",
  "key7": "4oRiv5XWfkgUDmSSAiysgxWFtMi2Hic4Fkn47QaKbLEC9yMywoPkgHy5BPA5GRZGQ5RMsXzobXgDWzxw7zpsL54N",
  "key8": "2sHi3v5CHc8RcaHqkBBCmCsdMHy6pWx7bFBJ8idKL74xSt9Ak1BCYAAmBdPP7o1qxDma3Vo3ZhmG3ieTtKMPUdn6",
  "key9": "5bCM12yygGv82rZjmZLAY6r4SPjJUMyCrQSvWrDcpdncfApfQCqWfVXjEEx8hF4jLgBAJAVgx8XkiyGznTrgV97U",
  "key10": "4NXwqwepNaY72aohiobTZFPkGeMEMWQRuEmBvMdXiSPf67A4fQu4MJ9jfed3KKe11PafCVxkDABWCvh5vbsHy61g",
  "key11": "JM86bj8TDvHVmSvwrk4C61crdwhE4NxSqdnTEqc47M9UCZ44GMRue7sSPFJB9Fxyc4SPMy6X6agsvki1KhxsxYe",
  "key12": "2j1Nhr5u6A8CMn5thEVZyAtBVpTWRaZieXiZdb4U77AjRGC82okCu8BzXCQPdj1VBSxjg7SDBq4smVnsxhGbyFxN",
  "key13": "5rfha1quEznoYtCCdkRPBmsRBPb9NETtM4XmMhFkwHQzn3EM2KSRRDeefwQs7GVZX9kMm1vVHrcFWxUSULgBQMFV",
  "key14": "5p8hgovWYWe9kTwCHSxHMEgc8CAEo3muh4kL6QStC76mQYPicqeRhZ1YzRBHitKqHHoY8g7NdqYC5KiZsGuV83mx",
  "key15": "2tSKrqSLdCE7MoPrHmSDTxwuEeBrkf2ceeJpqJqUEGxx1mfpERm3Nm3geLZH9Di4JKYXyBrCau2yRRUfHKHEPB1M",
  "key16": "5wBgDuEPamWz2h4dWBuyow9pYzgUhj46UT8xbg42G5HFAbEQdxAoeMGPkGWTKsSUbQYnPAuLf3dMYEZnpJJxURd",
  "key17": "2QjrAJiPrPCCWY6NPDP1zQBXSsh19Bp5xdCJ89pnMy5SxHwDySqRSMe7by4fvz6WMKn4eLP56VcuiQq8ybd6dVxg",
  "key18": "Gii5u781XcKyHwFtWxiBdGvNJ7Q9hRtWxKRkNAVgTHJx1GZ7PCg3bnf6HzBJc4v7Td6mypFbayN3xzPxtSoSTVs",
  "key19": "29geMqQvDC9NeBbBhBxzk4ya3toCYHsREjSotGeD1Cgs7CVSd5mVcFQ3KagP98ofAjowWJ8fXczVGoJxJvkGFqfm",
  "key20": "4ogRyATppdvQoxB4nA2sUjtJKjQ7paQzhj4S76ig8PZUq3cvTaTTf3pQTG91zGBmSPRDc1CVYhBf8k3MZyBPPcz9",
  "key21": "4Hog7nJhoTi74NZCBWDz5hHrDNP6sR8FFzRgc21qkV5AXgTzaPfnsY1XFyPxsf4EmENEXte9Vwz9UkJuUEQo5ZNc",
  "key22": "3Bmh66q56kxpTPXW9bKcUmTZhWSYUEuxijrMJknyBxHtnApohfxWr2ARaAgEQwjNeSaYNE4CcgrWtDwSJ1XxjJaW",
  "key23": "2jqhnXeJNXxyD8B5kNcUetm7yMJNh5qMhG1tRg6K2M9QQk3c8tyvyuWnyt9Q1kgvKhCzC7Box4SQauuingKm3U4q",
  "key24": "2gWVnkCfy9UQ9DunsTbTnVvoH48eRokmzy91SExzrJGFcyKQwxoiBUgsYuwPEtH1yrduFqJxtJriukhXQCnw5Mzy",
  "key25": "dJPMdZFpVqEyxSqz6p3XbpozxN8UcA95UBgSRN1n2gHYeWagj2ANJ7997JzPJHSW3BhkozQdugBZvxZVi8Adt6j",
  "key26": "5F1wsfwPpkCbGEpB83ktbXiieWkgLjZeEy9bBk1HKc5RHRixXYAHrdvJ4JTJ7No4pZNgSj8JTPbb6xLhEYi6LZhV",
  "key27": "2FkmYwGiF7WD8Ae5zhVVeVaKXWha3j6bPgyebRB5P2Ab85HspNNqqLmEuPyr5G5iud69GVAjYYLpmuh5yoJPggdW",
  "key28": "7BuVtXUgNw9p6CBriCiEfU7u6Gdbc1jnECzM39yPcF6CaaGAdDywpFoiqtLvXgKLVamowrmJmC2tNXrXdLpF1mz",
  "key29": "uGsjTVzbktvGFxV6uSJ9sPWyE3F3ce6TYpgbfaqedC1cp6nKtSarv7ixcCms7Hrv6i1gQ4BfUM6jyQezqwKjESc",
  "key30": "Up5qarMJxkUY5AtPqictSu4rTRyKyxYeXMjC9Ww8Zfoo7a3xLg8gNSp89jeoKEuCti1V7YPgzSa32n4EubxmtZP",
  "key31": "KkWNAWeTrst1E7XFiHG4mCSZZqwLqfHZ1n3yg46chjhxfN9hgeRRCBYTuVvxvv4JyJCTvWfguaNUuj2cTpqGso1",
  "key32": "2WcKejUErdz5c8Jn3HW2bb9F4dDY4yvsWn9jSFig9cMnfAAoT7NwiuTjF4H9yw4GBBiZwnCHoYK9y6io6BQ5mg5s",
  "key33": "C2m1PLUrtpAo4pdtbHyYCpAd48pzknrWdRQeWMzXeULLuTFtmiUURfTaWvjvBNwhGuFBnNCWHVg5VdvXwg5nV7v",
  "key34": "VYTUpTtWXtWqcUbqToseHi9KKG6pzZPff2xjCvJ77JAyGxK9ejfYaL6UcycUQdMzXJgTjJgm7RWhmWw5QcJnjVF",
  "key35": "4rCiXDARHZoUQkbMNww3ndpcTw3eFZqwCxQZgib1WqxPKi12MsstZMgZM5A8Jtw155amZdNGzYBEZGWvFX12ZE5w",
  "key36": "2attTAtuFgZk7qFGYWwCVHBJNK6frBs5E9STwKa4pmNFL6oK814EVUmX372ZWEFSb9aYmC92nKyMD43C8Q3QDXeA",
  "key37": "4iSD6SHnzjjJygGjLaJB77MeDvo3hyJQhZeNDge1Y4sWZXduvoWLrFXu3KVM13YZE3P1XSwos9rL2pwvtS1epq5N",
  "key38": "4a9GjcGjqcijBAYeHNWcrvMaDE6wvBWuEDJ6Z2Rtsd4gWUdBYSuMMy546fC1xitHv51LJtddWpQz7Kv4DS1GfBdu",
  "key39": "2JKW7zetiYXdYPnpekpka5EKJ3VQ6H9tAveRTEaAefdCHzjitwS8YPgHYdakh1DsktbtF2QJ9V6aR2gCeVCfaRqJ"
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
