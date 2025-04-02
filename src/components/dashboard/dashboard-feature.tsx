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
    "5dATzuV8ATk23aJ7hEzD257yzmoDCHgKThHzFKxmWwntqWRdAXWececsE6AoRpLaQUd8FiaqfscvjPfHef3bhqTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N9ZZDc7viVKQQQNGQEcFVgwXYizrxWrkQd3GzC8qzk3UGs3QVoxKFts3vPyTTH4jHfFsYhCZ5QN4ANNwLQJLwkT",
  "key1": "5vUdqqbEA5SUdF2Zr1szpPf69vjYJtwaP434iTRC91zq69PXPvqWAk1zbLb1fWDv8h6UQLiUphV6aDy2DCm25hwc",
  "key2": "5fjoKFf2QBQLsws3gVMALeqyrL4ifWCZaZfRkTRPC5JvsfS4EFSMwfLgCuAnbd5iHva4HpdzKmPH8RGCro9RBV7J",
  "key3": "5hfaP1eVNipmXaWc8vogmaJopBqC9ypcMzs4aXXQQKg5WEMhak1FZCTXHNT2L3ifqdCU7Anx2gFdrouqxA3Zvje4",
  "key4": "7Bwmkhk9bygP6oaVdLPoSNf38ZTmyKmdwEYKmXbnZm4yu8Ui3QuXzpZu2MYnvtd2FvBwFNigcyd8B8nRi8eeyc3",
  "key5": "27vp5uTNrdC8UiJ9BxKskubwGBot7oMdFxdnjsvrBc2dEu7sf4kutQXzn26EUqChbxCh2YjBo1rDKvt7TtaPz64o",
  "key6": "FiteMmTbSobeQdcnBEt11esPDUrkwp5anizjJZkdr257hGW97YYEJ2aRh5TiS7gHdekVAhAXCsazgmDLtcXo87p",
  "key7": "tVuNMFxUCBwvkEXumFoNRc415CvE2Q641LJQtooEFPJFrP1XJiKA6tYtyi6mnKP8DJT51WscUtpVmu2RRdTr7VE",
  "key8": "3XJKFP1SUxua5ZXHnNcN6AKL56HWwuQSGtczw9dhxHLZLrr9deWPrrm4iKgfyrdJhLr6pFQQ6oS1MfNqQTivA5dN",
  "key9": "2dWFWsUBjLZ4B11CE8i5YGEu9S6ykpJe3KiTvmU6UtbewQyn5TRyjFoy7MxS4FYpjj2iaFCSJJABbkYVQrKZngEr",
  "key10": "FwGkH1N4MASJ65zhoiqa7bcxAfkcy4FWebJuopjoYzxt7n9Aktn4wUZUgV4m2tb1Br9SUjPMK6WXV33wqEnW9Xi",
  "key11": "3u8PFfGN4KWCL6zhyJjt3bmGDNcopjpbSgjDFBZXLLT5H7QXacNqfC9KBMiLtpmUpq37B6ducq8Lfgdc3Kc33i1P",
  "key12": "5q9UneqWH2qyjkTadHfQefC93DroBdFnVunoyGgetbnhSYCi4K7V7TjHVLYi7sbRgVW6RajWcied5MqVcqQssy9b",
  "key13": "3JyzUHVqphVBUWv6Cn174BfMUQbW9DMtaRp4t45rxbE1Lt3MoEuee1ygoB1rksMdfpvuHrmwC8GuyXb1fsqzTrWD",
  "key14": "4apzZSY5VQvQRP7W3shjSsaPdsaL6ZHD8bFjroFoLDpuXaCnz8UM1pN28pQmFGBeZtTcufWpmp5C36crk5Xq1QmY",
  "key15": "2rUc4v17QAnqmy3D76orsFyEyMCbW1iVokRr9GJmUQNYSQLiVLbBcEWHsgzsUkKcj3ADE6hNFQebzmBoGtv4FqhC",
  "key16": "5WTKXod7XPdkv3xSFWcLkENGm8KR4SDHdaZWDouoxg1xpWrZ5pTpiYGKq3TfP4XqZi19zjbou63RCGJuResat8Qk",
  "key17": "2ej5ehh5oh8oaGLJtficP4bqYoVaLB8tWX92w9aM3JB2VTgLwdRdx4KcjGjs6LPTV6D4QEWYeYgm17wSXWUh3gmq",
  "key18": "265mTkSPStyHYmUnrLWt13cQB4ja5SpwGGQ8L33beJzhK2dY3UAeF4Y2krv4RqYjT4Yin7a7aMMjAyYataQueWg7",
  "key19": "NTvXWZMexg2QVmPawLrD6dNUvGYaPmYAPz28XF5DwX5b1L3roz6kBd1zhCFSaNpHioajfuU9sYgzwxSakWS8VLh",
  "key20": "5g3bCeK1e9AH5zXC9ZH1tQfVniBkwG94buFoaoa8yfpam32egD7RvkayGQy9WS2WoA7McKpmqr8AovAXSbgWAS9j",
  "key21": "bbD3LzptWTpnr6ZLbehjF3EY5WKhKbfUdLA7UYLDtE2P6E8miVQD5AmwDxFYxbmaravvZzkK1h86Wu6DnEVBoD9",
  "key22": "3hNupbhcLAxpEUH3g7CU3cuBjjBxysMZ6vRg9Xgc4dHoYZmnYF6MEGCnh48i2WsM3TWBaWKhasG4FqeZ8ABQabnc",
  "key23": "zX912xmiCm6h83exdQW7Ddi4vewr69q5QyMZy2NpGsMK1JpRa4x55o6id6yxZicP3w9G4QtrUMuGFQc8hu2cy7v",
  "key24": "4Gw89UjMSJ1yixoU8ihFEjh6SgUpQLUgePj4ECaaJdfTg5EWt2nzRtCVzGKRwpNLJSZqhxTkWF9avJEmm3cJX9kG",
  "key25": "48sEPCw72HZEEcsCGeJp6ppr9HD5RGx3vdhifNquQcxpwvofUZhWn3M2yNunKC6BkSy1DMXPeSpy2iwu7StdZcTV",
  "key26": "2KcNuMtpe7fi23E7TMtSGVHKBSmi321AzXLcNQrabLrtbo3PB6Hc7s3Lt3LXwsK1jV7uyKxZtTVCWD1j6ZLSexJB",
  "key27": "T8K3PCs6GFUTryh8WjfoCESt9oTXBDnCX993TixV4g9y4q5bmw8WXexe19fDFvdX46P426oYvmxjzGXaYgPNxoc",
  "key28": "45FHxEUQvYPEvDTqsqRLavuEZ78cLurDPXKm8CXVvnVvDnhtD48s74cdLPNwmLKdLk7DCq23dCy6hVw6phsjfdBd",
  "key29": "5cwSRCDNsEKegv41UQhyqcvaEQCVC6MzoYFtjdaywedyrhBGnuHKQVi9YnnNeynmfsxEp7sdyxRRNXvRLbzKeqsg",
  "key30": "2zUKaS6CRAzVi5QTANZwyapwjnjckc9afaU254DM13R3JKSz7xVAbcEdJcnyxhxpDuhCUqbpbrd2oGLNzaiJ3JPY",
  "key31": "ik8WqAp1gwctHvm4UUjyagWRXdNNfrDTQhFBayriFBWoVLDhB4dsXDd9p2ipQdM7UvouPu6Cdo8swtEsGX7rU8o",
  "key32": "5gLZ1a4hUey2ftWaMK7csyCFzufMzHQrMcevrY3qXcLGWH3z7c6zovyCWbWFJSkkGVrsXcrWWRKdGaRapJPmjBPR",
  "key33": "2t1p2HETcJ7tGryH6H37sCZDSALgo4KS44vmcyHzbshdaLKGxD9Vf6T3D6E9c1jAknKbVP1k2pk97oevFWCw3tpn",
  "key34": "52q8WYmDbiW7QMQXMjLfGeAauhtDAHX2a3G4MrPzvVCqkeeDNJTVMs4uTqe5TeuXLb43L4D8337QTCHTxf4qyZ7G",
  "key35": "5Mx3KW5Rp4s46xjZUVN9n6R9Du86gvcwPALoaTpBHqeLdHR2RWVfR6PdGgFPocc3M73hdZJztuzpjj1edTVmYx7v",
  "key36": "TdJuZqz3zjmxxCm5SbGKVs4gVxftcFXRL9RznbEynrnUwEatG71NAu2LJJeArUna2Uf2wC8knMKfY3ntnPFrCAm",
  "key37": "5htryouZswbmzsH2gwadBKuJgU53VBFzcJaiwdBvEAG4DAzYcUKYNdHbrarJgxTcjNLrvwPx6Ze9cCVM4HUPkDRe",
  "key38": "4htZJbdm5ZzkhiYpRp5dBjtt973ZGtZ5EsWMyhP1T6cLmiYoyAD4Vjbi5cpf4AaUGBqh6WjHLGTepFLw9AhZxt6N",
  "key39": "suZggUdjvmbYF3mupeTrrCT8MmsADBKVNDTKSCkwMUjkdro4XEXY9AuemMx3bnuC9HaXJ7otQcA21AuMMiRpjez",
  "key40": "2QkcxFGMiVTTyMNdBnd1mHHCr1r6zXRDbUcsEdG4AUVwddQiwkoKZp6hKDftzejTzCXsrqnmTM7MP56ZoNXkWJoy",
  "key41": "SFWnbR4CqtFPAd9rYLWftNXrxTR2fLrXmHLJjLZgA5RtpLt9xaqcKziynH3hy9JBHmomMTBSD7dEVpqWuj9pUBx",
  "key42": "5WgTjJRgRZnnn4djNDhLZp27cyW3ofi4g5rzgox8T5SHL6Awu8d46pRrve1ELVWqnyGAaadMtVChWhEcBiexeogm",
  "key43": "2m5YKZjPZP85Moiz3oj5BBdCg1wptFcBSpWcvCy9hEbU7HVG42ndHCBRyu8g6FvbHHUvcBBQ7KLK761MpfaEetTf"
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
