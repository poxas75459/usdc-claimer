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
    "2Gt3CKL4UFS1sKVDSv49XdUDXiqixj6xZQvstev5tWiEvhUUYEGCYepQ4C9ZbQQSvmJ2ZFHcauG15dsAkBtmnmpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbC8V4btEKXCgDQzGryDwd9vw1o1kXoW19VHffVQZocGtS9CYLMYmj3ia9tDgxXfNuG6jxHj432BcxQTHHwYc21",
  "key1": "4d3PYjBpKKdrf4iRchiy1PpbynLYbm9Scp6sQEN2pS56Uq9suA22AEBmCvCgH9uYtYTFVv8HKNJXf3uCTXMskYMh",
  "key2": "WyPDUV56kCrTKBmx9ASRLKUPGbaReoKM6ySqrizF4EMiUQKzaCVK4e9UHju3r3Vk4xvi4wJgqCGmYDNq3Xhkc2G",
  "key3": "4z34jtHMq5rVBzR9AdFgCef3KwB94VrPtFdjEK6pjwbJ2inCDg6ALfsEiqGG3ofVq75fa8bkr5sLf84A4feEFvxj",
  "key4": "C4U8wUW2vyRbJRynZJ6KDHffSuUiJbQQa8L5SX57T3id6kzzaDiuBCJ6YgubPkcSarhteWpwXZed7BzAmRUrySy",
  "key5": "4CJLBKMH5LFLD6spr9tbx765JpQuorc8YnXdYXjMkCfD7jaDEbmw7nxHBTyiiExnp9xFvoVEUrocat1wppwXZJKi",
  "key6": "2R531Ex6mwLDd8JF3anEytQgj2pYdbogWHKkboozQr2TmZV3LtSrtmuaC5CqJD8neJ7BWJ5PcPaS8JwsxM8pXvzg",
  "key7": "2XiZ43tt7N5pxicRVC1o3bv8pbFBAbuNeYjwu64zV73KZbjEtQAXNaDocxTYE4EomFGhkTyYfYQU6wMQFJg1D4oQ",
  "key8": "3mWu92QGeHWX23rqdFzwKV7sEFALCcj9r1WE7nHHUX13e1VVZi8G7vaQVeSJafDc5jafbAg7ZEb21um835dHiHkp",
  "key9": "2C1HrWdtbn9tGeBeBYE7pYcgBSazJkMtdEJ5JvmfbPjvjVL1z3vFGvyKLT6f4trUJAgWg2NQrozkGfLuq3Vyiesd",
  "key10": "4HMfCvtK8Krd8ZbQQt7tYJjTUDudvyrv1YAtj7Vh2g98TNTr1DGdvZEWrJ1TPQhEnqNq4XCZ5a32Wjc35MKzdD6A",
  "key11": "5uuWc5qhEfuVAbHoByjEzgUBxfchdQnCLzxAqNnPx5ACfg8iYjnXLjmVtg8WLkbD19LorjGAMwDu9MBezwJo7HaP",
  "key12": "2HgTi9LtfsH1fpbMg96NvabteAwJR1GpDjAgC7R5y3K8HmPRaWnoE9eJaCnaHrLjFBjzUQJCxoWBcmbubwMnbPAj",
  "key13": "37R4jmoWckKZaAp1yZworNByvJvGyWz89dLs1evHXm3nmUhw21W3aQ4F7hRWYzXARoqvwM7e1NQrmwuuqAQFX8ZQ",
  "key14": "4Pr3Y2TrUvCzwKaroUQnXZX5KpG9BLmBx5rPHv32hWihU2qLHQCHuiWj6XQVf3GjMzPUF1pGvAim6JTZCUyVwyM5",
  "key15": "Z4uTP8VRH2MWgwd7VR85FBaeCcKJB5ajxNuoidBJd2LRQAadLJFGfSFsBncyQY6WMKHJEz63JmJycXPz1grxsVY",
  "key16": "5v38bwxYvc9Qbv843X59kxZQBeXrtXYVv884NF1xHqCwAaR4xBYL7cppVrNAUp5tV8WbXvDJvrgSrquvWS7vzhze",
  "key17": "61uX39bD9hnaTqzFpAM1w2mp4Bzpf71BVW6sJSCqhwkLSwgk7MnmCPRr3gPLNBsjnzEEzXUqyvQeo1STpC4EzJjx",
  "key18": "ygdqDiTUyG4QHZEQGDNKoPWQvDBKGoDat9Czs8umWsth8RzxPQByYsHrXrNN6SD1E5yQGjjHPy9ZcYTzvAt7gJa",
  "key19": "53Wg2h9Fb8ixri6k8zmpCMgyrbqFA7tX3MwE8anHXtrn9yHgKGGUmXamVj1oe6j4D5Lhs7gziuK3ZG9EMAFYhEcz",
  "key20": "HXzXtLsUsbPfZZXA2Pf94ZBnrcYWr8PJSpaZZ1LxJQUyH2dS9jpZPk77VuuqSLkqCFWLtU43tRBYtxWHTuwKst3",
  "key21": "3zDNoNkPA3F7Bsa8ivGhb7DCqSdkBDehGg2CsJc7Umy5edPiACtUv6ghkFpj75dqkBbgs8GJoPAfpxmstHsWMpVm",
  "key22": "27tbJtULibJSYhL7vyiqiShEBeAYQJcXJ7JYtGyCSXeDdqZTuKoH8omUFefNMhnugfVAed2xpwVYceB3ytkse6F3",
  "key23": "5Go2CdiN91qapCpgNgi5fyAipf84sKum4UmQi87vXQY1bEC3yw2pruUyCmjfwLNTKhwiNVMh8SvHhStFnNzatgCp",
  "key24": "3ikXoe23dHDy2SPnMxw7qzzC7sfF1bE4YkJBbu69svSmECAcHrvdRHdJLvGU9zswhihQicdqmjyqAMCd4pvRKZKj",
  "key25": "3TQpkHhhxkiVjPVawbgdn2GUvPFM5czRvzsvfjL29RRSaQLknfoUij8mVJu7Fi4A4XMS2ZEGaqpcBo4XtDhTj13s",
  "key26": "4TvezLM9mZNjkqCFpVFoXNiSN635RBQD5hWRT4iamaycghPsS3gDnaikQ4f795pZhn5Jy9s3MJFxrhZ92HvC7hC6",
  "key27": "mSv46DWZqbz8ajN5y7aKaZCWDixXjczVdEQ8zZNYB3cJSGWDmxYpcwNhoC2WfCbXspuk3gcjsBMbUQ6JMXTXun9",
  "key28": "2KzioDQgd5Wb7chd3DVtBuHy7nmnQFHv3X1ED6ckdcFbeKQYaC14yaLKzNedqp2oQtWkQEn2mpKAQSmhJ7yvnhCJ",
  "key29": "61BPUkRm1SFktGJThy77hqydGrULrLY84zoDNmL9wLiGEYfjArRw9J3NpAzKD2bibLhxw2WH7RQ31YuFgnpjSZuS",
  "key30": "VKqd2BDtjmFxrGnS1hMNE6NAUSLNoeSLxCjFyRpdD3RDUPiXJJfLRSDynZP6bhugnbqnb9zYFCBxdqjHAm2TxZo",
  "key31": "5Dzwus7panWzEy1nbBiK7Gfh3pvG1dT7DYgo6WmyqEfAbbkCZreHhaaybFo1SfZiZSidLFgNUZ8vSPivSaG8oPhy",
  "key32": "4puWh6kDUPUbPHPMrGzubbuWHJUqfyQxTyHDEsvpmTSAXjiS2msSsyR1tnsb1gTgquyxrUT6X9FAMh5uYF4zL64G",
  "key33": "2poMt9FdoQWAnXEAyTvFVEWebaVLrGv45jrsAMgo3KDCVoa9iALhpNCgPR9quHeVEPJUajLxf9L5jAE8d8MXWZV3",
  "key34": "2YNsbbvgUh1gTBFz99N2VonSkPQCLmGbw7sNS4EiaCT8y8yvhBrFfAk7Dh1ScszMg3kdrNdQvwpDMvUnsgWVhBSm",
  "key35": "25NYsFtrLV2dvpWSVg8tZGhzevZP7D1wdQaYVZXNc89o3cThsw12wJyTqMhbNMLNN9foAYssRTM8c9ss3aGH82PX",
  "key36": "37A1quHqvMdHJcVYLRZpSDBGXBKYeyn8YK8xa3NFS8g8LCzjFryyDMU8JmGkxV3b1AkTSgLZmHRFkJT6aJLvNfDf",
  "key37": "4nDCxTXFq6wcZRpqupvkmKjaLarAAWFwDyWgYUKLhoxDaFotiKN8WZKHJtqTzK3fZQpjCC1wFT1UX77m6NzHj27Z",
  "key38": "5Y1YBqP5wCBdoCyaoQGb8z1eHGbi49KMUPHoiJBs7KH8xUJP6bM7SMrxn68DbF1GaoAe64yXj82rZLr8Fgvt2pK2",
  "key39": "z4TtCpSH7ZfLouRoqAtDPPGoVYXmSxofPRpMh6vV9qtKfYwZ6cgHz191GkA8NbCbLpefDmzUVkvfeZfCKAnvBZB",
  "key40": "s9Sv7AWgtQ9GkT4uoJo1YjrkBQsEvmaMPz7GfuT5oEPVJvDEy9ZedQBPcWoFxn5XVUCus2Vqf2owdyHioRdtGZ1",
  "key41": "aLHMHt4QWWFj4B2rn9pQ5wCiYRdJigsmcL6XtkGSNsPXHhgCEjGmEZie4MhG7E3Usre2TZNSUTedXZMVik4kjm8",
  "key42": "3zPjMsfntY1H26GLfxA8P1BVR6DaSV8z9aXvSxBayD3yU6ofawSpQRGxJrL8X4bLqwKuzFfm4XdVkSU4cGSq4kJa",
  "key43": "2dZt1bBBf8xSt85pXaHacfgnvSgFEh51pAmvpxzTVHgLJiyKLs6Y4aEsmAUuXL3DKosMRhmAGLcqXUTVbZVZ21XS",
  "key44": "LDdR277pnpXWkMmN5uZKRLimcLFpLjAxACUzDevTkcVDARtznc5r87chraatfuYLraCDVLpxxMbr98dkxcJvSjz",
  "key45": "4gAWGNj68CmsyqKBNBfSau61We28wneHEfrFpp9RKAK1e478kJLqLjsWFn13dUVFqUJxsKmkNbhqiYW2Hxknf6Cf",
  "key46": "2YNTtT97fQzTdhMvBsdFchAS3kzpGYqffqtYfMrM4K9TqewAWzGGwLWGDRZRrY3DutxULR1hnZBNr6iczU6gzS9z",
  "key47": "2Z4jsknCLHHAaYBUkXwQSKD15HNkEDySTSZx5kUwNJZscGQUhE23mJeRPCG66Lw58cbxijEvfoWfkrz2jW9Pug8N"
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
