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
    "29hwPp156XEfy334aRf8zEXMkEVA8xCPjcoVxasFkpVUbj6rQsYd82rw7uwoGMYXeYZKDuWLBbkz2APUBE4m4Kcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aTs7hbMRMYKRi7i5eZYsjBXLfo1pX9qXaHUmd79NqvU6qzKTa2BdtxAAHbFZ4F9steSdvcqmywCUBAJqfzg5wwY",
  "key1": "2BCSSsTY3RrSBEHZCHt1UH2UmMRdS8shL4xGnYjqAwpusN3shEMFk2mwokCWacNJpANrc5q1Dsg48tjyZVft7KCF",
  "key2": "mTeW5BWZZkkBmojUYeh1beLBUxJ3Wq1At8wRFt5G8H6HsWEx8AjDQn1qMPEXFnvEPd5W32ScF5D7yGPWy2GmepH",
  "key3": "4Pj9rscJnnomSPNnLMnqyvM1dEKCNjrTM111RXLgfjJqGyJNbc2SxtVJv4wu7ThUB146ewYNBkw6ANXhAendQW5h",
  "key4": "5ZRTSGTA58ceKUaozkjRnYeukva3jT3PJbeyE3hRxzX9w1WUoasD6mPbb3R5ehXSgFNtg3YjPFuS6BwS6jEKoDSV",
  "key5": "4cQSdyepapJ5vfGHm2GNd6UUVc1CkYRAfkRa4txLApuX1seDwSNVAVgT6tkvcNjqZwz4qz8TgGE1QxDjv5ZtfoWL",
  "key6": "4KvQP8uq34J2qHDoZz7Bg7ue57AkB3xJEsG8uraniowPDfFiR7r1o7GU8tniDxGBC2DBZxK9AJzpzU2AwvxZLHfG",
  "key7": "8ayKktZzLYUydkHmRJXZZ3dfhXYUeKb3vCvFHaMKWnrtF3BE5uM2z2KWLGc3rHLyMzYum7U3LCwn6qmc8ZBu3rp",
  "key8": "39PVwoL1RQ7mNrx9Mf2MrrhJNmfkLn5T7kni47yBE4mPk4tsQF3Z74ntQJb6w2pBufnw3mysXHketCi7Fu5uTMB9",
  "key9": "4ksWu67MpZZ2oKniQS9ajGqEvGCMgq2SaXs7xYtMtnMqB3dnMacH1PsqQApgfNXdhvkNuWSVPb8XduzZWuhnVQRg",
  "key10": "3sWAzNsS1xD23eAbVvwmjK9wP6QJR6yMpbPxmFZ3fHXuG18HaNiUBHGeNUqFAUgfPX5bXptEV2Jsz3mpYHujLN4p",
  "key11": "32kFEsbBPCXwZagZnK1RpEwkNxcQ24tEDuZvPXscnfWvceftteQrQ7MppoWFa1AFtJaFMtxL172WwBMD1wAUXiMJ",
  "key12": "5CgXfm6VxaM3aBQCzmZm1i18CkVxyfiMGU39HfMkoNx4rmjj2sd8cQrGs6pkKy2peLQEB1MqxhAwvPFqYGZpEM55",
  "key13": "tRgnegfxCCkm5KVAHk75bYMR91q5TrwTiYsY3cmCcd1wARpZibWXjTeuXuatekfBhJZZJyB376Q25a5W79fXmnY",
  "key14": "7UKS4Ws6ZW6EQRSzJ1oPoaj8pMrKBpdLFbxparTW6yFQ9qPJ2XL8XrK3ybPaRtAbMJKPetqCBaTKBYEQw7TQKRY",
  "key15": "XeKvgXXq69xkvEDHUSz1fSENS8SX1GkhAseq8ZLw4ECgiWwYYMDn6iEf6rJhPUHVQaNxMwCjv4Z5oeUPgz6Xgdf",
  "key16": "mBw4HSEHPdfcKTpeGpuRsorp4NcxXgV1AfcdRSJGK7SeHaFznxYBksnn3Q2id6PdXvVKhULfrA2MaVUxhLnNcTS",
  "key17": "4ZSvnATkqEpn1LfsJM5ECL7GnCy26HJGuwk6kgNQf338ZzfHJV2cYYcPJzbFkbETPEJCpqao99bg4znQVvtSCZ9H",
  "key18": "3QzKfeKtn65bQAn86ahaURjZDvyquFs5M1Qtky25fKN7PCzk1UP8ckLJ7H7Yfo2KyhKuZxKiYapmoEoAz2Kv2nk9",
  "key19": "3A7ihTjLdehSLoTfoZX4rEN1wgbcE3nbHC2b1Ld2x8oVvVfcfcT5HFRCCbxr4FGqVEW8KDzRLRF9tvrNQAx5asGj",
  "key20": "5LL6eev7C6Wf2ZErzxomyVo6K2hQHQTKFjGchUarLr8u4WkFyFtD3BWyu6UebBSo4BKsycDpmrR5gxJpmp28dL29",
  "key21": "mAqTA1jUkb31oAhzpaxh9n1pGyccYpPDFvtTPndLX1mXozqtJXkXkvtTBaVnG9v37eyY3sdF6kbSuuJZXtTjTvi",
  "key22": "56NPGKnpqdXmf2iMteUfipVy7jjUvhNUoir14t1h1N3gkH5C14tW8T55iirG5tvyEpehUwEN1VHg7KSUYL2hRhm6",
  "key23": "56MusHNRsKUXAupMAhqY8JYWmtcugbBhaNiCN1jJKReoQSv3B3KHEuM1Pj599cDy13SvXhErjUz2TAgCRrmny63M",
  "key24": "4AfR993nJqaE37QXUaMaE6bnHxMvrkwbqMUxD8JozooNyxsiWmLy6VqMLQe47S8SbmFESEbaQ6REnbHgJNT9TDF",
  "key25": "1wnSoDwQje7RT7w4R8pNqC7KKXwwUzkk6khJddGaFyagSrdyMxacKgpkkj6tNS1KwkjPGvkfDcKr6HSgEfz8CbC",
  "key26": "4WdrCAZPqLJXsyqP14EWnMt7fiAjqB2CNVZaJhXHJrjEHQ6JUU3RLQQJsLe1tyqRXiNnZ2YTh1zg2CiopvEQBVpT",
  "key27": "4j17o4hnSdxoxbtgXdSrE4cwBXsurupZcRyxeawipQAT2v3sfo5SwVNYuvdrQXUCVSNUEAvto83AQh1p9Y1TnLAZ",
  "key28": "4dWMrABWT9AuNLKUCmnz6RaRo4ueKcY5TAGdqWhdDesBkroiUymgg4sXe6kMeAgMBCQ7w6MZT9QbmKkgb2aJa2B1",
  "key29": "2xByACXk5FbW3wvfWoTvSHngtNek1Mkod7iQfurbWZHZhye5peUb77Q289mvk3YKUrW8ULji5ycGK9oCLF7STBHo",
  "key30": "3MVHFt2oiBCogUTvuKUYexRpVmna9cC7hQ1VtMh3cGP6ty7hbTucajkb8aMfAdAUBFpCC72b2a5j1Ego6ZrfakH8",
  "key31": "5YNvjKaW4Z5CkqVCmBwkFXaTZK5UbBebjLNFMsPGKE272WE5iSsXVt7EfYL5b6wSTqwvfirYBxpmEX4TKkvK9fq8",
  "key32": "3b1z9a5oJpfGgMsGd2Ws4og9X211wndekukBYy1BRrJLncgsRUS2PCkqazUNQKNV7eMjrozxutZrutAP1vZSdNCL",
  "key33": "4zGjwK4CKzWWt5otVQBxhWdepy48vcU7qmYVg4RmvU9uD526CXjw5DmbTTzhwXGFzeNsa97bz8hmyJRfUTT54PeD",
  "key34": "3QmR3GTR4M9QB9nPGSP2Xq9azacU4fecKXekyc6z7jFfaDMaWUpshgeD1ZT6rfK2h3Ypcbyy2PbkpqpXxk3zZRw9",
  "key35": "2oZj41vhxQufd3rWp8zmDkpYtsymZrHfvsVoCoJdVzkcuZbYfWABTLDGCXdi2i4xC5wz6Ay5AAu22MvDdNkBdEQi",
  "key36": "2bActJNshqiACaHFKftratSgpqTtqfpbRKYnBQbNaGpq4a4GLsZJmQiZTbaNSRKsSTJ4ZSTkJmwfuddJb5USP3bW",
  "key37": "5A4YJDvEkof2dMGGjb1ev5t1fvbFvdVmiHCGawPtxEUttc24Bu9HrwFYvDaRHLnyYth7jxUvx5ZcbbvCkpjVTYfM",
  "key38": "PGisiZFV2dPG2HgCf8ju6jtFVYFyGnwAiLFBMQoCoAWFdB7UybnM1YH4jbrFC6JPEhB4jRYEyCR4dW4cGwTZ7jr",
  "key39": "3r8kAiFqFDywwafg4iSQKJBKtZRKTrgVtynmJFzECTRtBVh91Z3BgcjaRdLgkWTyWW63ssY8MtsB3Nof4hSTTjD7",
  "key40": "PopUkgN9PRRviJ38XWHBaDLPJMYTb1p9ikwTfYQg6ewqnFhg6TzZwo3YfKmcVJGsJadNhggnFXsJwAMsBBocuG1",
  "key41": "5aRHUjt3aKFKAC1Zfa9r6iP5wQ7cYM8NkynbzXrdNukg4r5cEJfTBLdzEpybJj4LbjAT9GkGXXq18wiAfx2VT38j",
  "key42": "63hgiQ3TH79T7tpQSALa36MbE2BxReT3U9d9LRTfA3VRSpo9chqYZdbVaTq8nnbiyqA3xTfnEFcYfnrwAGyr7kss",
  "key43": "4rDRsRtXxzA8DpDGB4doakR6fd69bd2X1hiMiSfnc84MvndREKzieZgTVHf1qDa2EEBw7socTmtYb1heyMLYp5t8",
  "key44": "4gBSm4pfu7TxCeQhst7DT5mdJJW9KDXnZeE7UXR6EdaZCyjEFnjidRzsEz8aEHS7bmbjjFt7eWPdkQyG5HPyzWr5",
  "key45": "KvKswgCFH2ayJ2gf9MyAd7YXrEgjiXxn6ZEHVv5v2LirYaYgYiaWDHjZj9yf3Wx5Ca2GskQikt1yt4Vu7GWr38i",
  "key46": "W99CYPtyH5FZNr4skxhXi7vdNmcjABXidxd4rr7kqALiViWo7Q8JSZRGhKUt8Ab4B2aUDuD2D7Fykfx7f83r75Q",
  "key47": "23QFJDCgChGnqtx1FgAYjXAR4BK2sxCCzokXacgqVdzqDRGwCm12RcuCutmKSWeN2885yxvEF619nzGeyZk5pzkf",
  "key48": "v4z4RhtNAU7PSeJU838aB7W4QsEEz39hNuxb9vNpRxRZFidRRcdgLQt6AFD4zSMVAgrjUB9aY9absj4x3cpnLet"
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
