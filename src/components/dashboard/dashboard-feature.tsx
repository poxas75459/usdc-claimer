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
    "NZFL5BJtu9iWEsyNKRQJhhW2Buyb4bWJPGDLsPi2SA15zQt3XTZ4XQDRYgUMw7Yr8fpMifJtiUggmHqEKLyghQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bjzc1BrK23fzb6mn1crgd2bfUVjfChGpuiV24zc9RR8taTkv6yyTDLqdfvodsafSwXPXVebmsor2qYao4iuQDYi",
  "key1": "BtHP93LBAX4urcxBk4MYAADEH5469EWxdLFmSB4rUf5SZC2dbXS5AUxWPtJ8mTJGZ6C11QrJAJUpzsVH9zBZa6j",
  "key2": "5hNmqX4mDFDRFKReNuAqBJE5NnXdnEBXSB1VNUgN7XPxyTykivJvrdbCQuoJDphgW7fxQgc7GeyramjBHu98FCp2",
  "key3": "4Dnne8MV3A9KTxWvR2rmqZKzTDRQPHi8xZb6E2PCkRgZDWvL6uxG7u34cMANXBvpaDyHLGRuBfing9LzvjspAEac",
  "key4": "3vwQ7FZdT2JWEPtgDTscjz18aBnYsgFwWGoUwihCtiuxuvsowEP2EUP92WcE51HidmKbnjyvTegbp2ZPq3PvYQQU",
  "key5": "4hQHHbaEj5YTrLhhbCMoCfp67KkLa8tMdcsPrgPpAbRkm7r4WEXW2gLQQW3yHzMtxD9RicdDyDiGkbh2S6dGDauw",
  "key6": "3fMfUfjFXy4trKdmisbKthrFvFmYayeqLLwjaFm3Ye66euMffMwkFPPukzomTW2PL8aPV7cWz35cSvUnmQpVSm7Z",
  "key7": "3EYu7YXhumgAcWMjFMzGv1uZTtT7AXftcFcfoyhgUoK7xi8su3gyWF1TKqC84qt4k9cwC4hkHRX4pdnXUrXKmnVB",
  "key8": "KVVYr11EQSZP61NFNm9nUyuPoDX7jA9wjNx85JACUkjpUmDznwX4EoeBpQqL2ALFo6JjaD8UXS8fUPowRrFyXJb",
  "key9": "7sECRbdQUstNNESkJPY3ZvADNZB2HZXfUHwQZM8RoxbzdDX4QRUNcW3yYSGyVLDsnzrN6EYHJDceRztaH3YTvWQ",
  "key10": "4DRhiMSUkKqwexTv79t2gaAnopAuB9BvHA5ZHefRa2H2eFCdU2f89V1Fbf1WkT7VR31KjZzFJyf1FWxGmPRTn4Wn",
  "key11": "66byVLYLJTCZBT1LGxcgKyNSkHMZYuP4SuM261mxEHmQL5RjS2boLpdCCBeFUm3j1y9UEK33T8zKQK3NSwAvAQbJ",
  "key12": "ZM8hsXxPdF59iuvn54fV1N73RroDYD8W6npcxvSS9jWYfMLEGLyGdKELRpFaeCXgE1pwTzrmMVnDvz9TR8PJSSm",
  "key13": "3HmDaZV6kyKad1PgmN5YkUVmZmsHz7pnza2tXWegMZHjHbENgzyzDe7amTCLR3TfEgRKRDQ5gADGVhfojdjwBGaa",
  "key14": "2E8soadgwRDPh9U8zXbfzjBCsfBeb9vdAeNTVAoBUB535X8GorseCQ4J9HxKFaSvePMeXDWi7kz68xveWudEkYcA",
  "key15": "3DLQKyDHBCe5dDrW5mHemBgPzZVeanHGfNv14Wn2i3PmHBEi8tdkYbtCA6Joi9NHfqj1UgqXUtL1atSbgcGbwgWG",
  "key16": "2Qz6AGTjtgyLyWhmtmR5GF2Udhx9wdzn5qyvHNgj2QG5Cjt77vkET9WH2Q77XAEFQob3qEt9JFQ4UeFqvKnLKEPK",
  "key17": "3EEG5yonQKiBk9Ld26HMmz7EoVqRREMVNpATRP6Pm55wepN8fubQK4fYchWXCyBrL8XwVw6ahRsRVpjMWeiLC4Aj",
  "key18": "2yDr5UqQhFSpc6ZQYHAQqA8L6FDqLq2hP8xGJkEd2V2cKgR6FvSKJCTvLxhjH2gcG5AEkkgadcV65Xb5QZ1PXx3W",
  "key19": "4ktG52bnrCvPMfobzwHpptgK9j4CBK3MtdQ7ZGxzLUti7CvW7b9Yt1D6r2P4sgpHvbcGhvWXHKq2BSmy4UqvzUgU",
  "key20": "dAED7rEx7edcxX1iqDfxa1gCuaFCg5mCPkYZpwVdN5tnT8dqc2cuR5XWqJ643PjtyDiW1ypCfJ4hiJqVZqTdAgm",
  "key21": "32ZjRdMeJbqAWCSeKFMAN9pkz9x6nJS49THYf5zdwiVMZPreRgdp9pgswTgAdf19W8NMKgYPCCT25HWzJU7KrJ2v",
  "key22": "2N95LUPKZLwavCTCn4d9h6QVuyESsWDycbQPHnYggAgxjzosXoExT2cKeKxxbBLueP6SFoFxQ1y3wQuxEa6dfgXb",
  "key23": "5LrnCTWPaBsUiuEcbRZhWPZ2Z8h3d9vfUuZoETpgzWzPMAWhvt7kuSGXQpNvuPpNKnziKChCM4TDw3Cp7nEFBwKp",
  "key24": "2WaaTuxMbDYLCfpFeMgAZYgN5heF9cn6djjM57oDzRdt1haZi3RnxZhoaTLrc9hVNTjb9x2ZxiaG7XtyuGbtEu62",
  "key25": "66ns2L49mhkFbyUUbzQdiZKXKoSf8RfekmVMiHf4GrTPKKwBYVbefARZR4tY3wMsMMgPd2igoVRsapSme5e8t7JG",
  "key26": "5KRKxwuiTgVG3hcnMY1bPkJJibXs5B45sXNgA57iodH9MWBFqAV1n4Kinc9bEn6mJspggLB6ymL5bt9viLX8jMhq",
  "key27": "2WzUDgUFatotaoAgbGqmod9XxBSWVRFsK2vZ9Hg9nywADvDeTZ7HfnhfyxGsiAfs6cLi7CHx82uQYbr4i5S4F3o6",
  "key28": "5rQDpmtSQD3MqHQDsqY9CGKj1X3H1jTsfnrE6SRVaTtBGd2TH9j9pUSfK23Wn27BYmjXHAAiTHfeqwnWZ8UFhh4c",
  "key29": "3vnmTWSYVz6cJd6rzdcYpY9BPBbAFh6FSZh7o7vbBHr97QjLaqoPqYBh1JQb7ezB2Nmm49bTuYzmYL8RcMgVHLRu",
  "key30": "2pU5dmsbCeybAgysS5P8o4PFncUxTmNqHuDyZbHBiK3LrJ2eyUEdQa1wfNSYAX98vjg6MEw6s6oFzjt7yCAr6v6g",
  "key31": "3t7NeX7VCckof3ro8okjikY4JzN8CZj5FrxSD2eEHdiNBLcqAsgjqspncZNfQRD3nf1tG3KJRKCMdUCUqB7GYTsr",
  "key32": "3nXvCn8xg8Z2wq6etcj7b797VnKgEEbRdJfQrrv7wnmkGCSfanqu1e6hVV4cmpnRV694AU87zmLqraLc4Mo87ubL",
  "key33": "3XrsNz19pvC9AAQUF4fUZDTQZD9pRA2P3W3guTa3xavPUXE1tstVnN11uiNdKvtR8V6onyLRjzWGoXaBPaunTgnj",
  "key34": "2PBPG9dzgj4y1StTHvqcTQ5muHs8uVPwVrj7TgqtiuWBZAHa5dkECSkwjGTa8s5R56E2zQDZ65uaN6vaqpVdFcZC",
  "key35": "4mqE3bfbP5oY4yvSq3eWuQoEaiYbZpFJD2LjgoF4QPBLJeu3WCGZuRd1CDstHtLPFu336muuFzvPRzuJJSBDGA8H",
  "key36": "3zqJQY4vqnPUTA3adpE6rQYTi4ap3gFZJ39dY6gN6gysxrKZyZRDYLHtcc19Lj5GLXWJX1mFBwy8Nrqbytp23q52",
  "key37": "51mFMipDthvVrWtqgG9f4eDTc958cwdR8Gf13cUFFmEKcV66VHgEZ6AfoesLrrptcwtmrzMwSj85koYi1ZCPHKEC",
  "key38": "5xxHb6mA41FhmZS5aiY8bdiHCJniJqVhprETQR4yHwEezyQQ3ApB6NxNkGwaqJLinD3HzJQZJFTEaTMhRueaG1ee",
  "key39": "K6BEjkqhb5i7wwkhTn8zhTdKSqyyvf6VPybiCAC8acXBkDBwgaamvAAZK4WVXVW4A98XJQuDznNPJMtKaUMXPt5",
  "key40": "4HExqfDumYJEU2krAuYp53TdtUQxh7tXLRsnp9ZDDj5FJp4ruCBnYXhL6pN198oe7xBBQE4B3vDZmzj2pK8goAgM"
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
