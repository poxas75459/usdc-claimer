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
    "3nWzMJAmui4f7nDavNw7ae5CvezZpE4o6kyVZz1rsMLVfPzf4YU6oYWZ3uhSy9GNnhyzt4j2ScSwY26ibdqXY2s9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XSAL1s4qQDdHizqAmrNT3Yxiwaj9zkeyzofNVUen8CZ2T1C4zyJ3PTHbgxafysiMbkRLayv93mpKPzrF4EW7JZ3",
  "key1": "2TV5jy3jQVNY7ALd5Fqj8qRaXXgMK1Ur2CVYr4271rfSwqGu3YhGaUiG956EomyPsGvR1HRpm9jYfbREAPcGKNgP",
  "key2": "57kgcHjJhZevRg4s1vYYzZWQp5BwSezzpxmuHdZd7zo6DLwrYhG9LPpuzDTpXuuxbghytb1G6vSc8beAnhAFHgBg",
  "key3": "25MAXdoeeZR11ovYKeoK6AqARVujGWrsjiB3X3jcAuoxrUAa6Jau48RjGUWPHua414WJUija1Hj8uxsLUzDNBdxr",
  "key4": "3LmzEJZJs18VgzcnVVDKxZvj68mnpuKAJcfSsXjbr5cx2R1PRtS4PXBNLrmhMbtwoUTvu3WPx1vyiyuCqTGzo8LS",
  "key5": "22a4vK1oV34pC3TFsXLMo2Zg8N5zo2wWBWtruDw63dcqwWujNPP74mXP1DgT1h9avU9F2o69T8Qi3fBH2QmkTZu1",
  "key6": "5KDY1G9Tuo9tzWoANV9rurtGSiMvvG1uNLr4VuY5AdHqg5EhrfjGwsUYVtsbMuASXC3eGqgDWogPXcSd4V8tfXHd",
  "key7": "28hnvEBo5zo1WTzzbhMzrsZL1pB6xBspaQGoDhiCdGrBLazo1XY4BaA6iGiCXTfusd8pWLzFqNNcPkWcGPNdYVNt",
  "key8": "4XDsdRKwi96xa5Lfdp9h46WVUnQRgRWBytaSSMC95FnHKASTEjgB7QiSqkGf1cruWp9iQPm98pQanWTdosDRaS2",
  "key9": "3NYaWfkvAs7DhPKaRHhLaByJURksUbwGoPumvmzZAXfP22usrSanxFjT61QkB8tc1t419X21WHgvak5Uk9fypWZZ",
  "key10": "4WCLmJknHm7C1kV5t8crUWrhWrxfQbF3zoUUqPCxp4CgEjUVev8RuLxQDadzqHF2vZTh5wNQyKH7GJdcayQD7iaX",
  "key11": "642K6Yu5bYdpFEj9gY8wQxGHbFSEcXcL3xfqqDzmcDiDVbwegKw5u42GLHtFZWdwbBZb6T7EXNsq57rgSeFZzNsb",
  "key12": "J2FXPuRehpJT1n4JhVtWK8SyNEheE4kfeQ7bAk3Vr3Vdgc28vKjGoQLDGpa1ReBLuSJLXNT8FNKd5buB4Ysqy5D",
  "key13": "Bh9gyZwYWLmcGH8YiLLBsH2kQdM2quvxrzRexSEcnLPpaCicVLVTQTbMHjERxAfXgakUUEgAaUmVNqwqhLNg6B9",
  "key14": "BTBEgWS6guxQfSsiSj4rjANNzKKAwTbv2pZzgoJ83CJgdQQxzxAPniR6VNNsA5UGQcxYBCqFP6R4Cw665jrjBCi",
  "key15": "2GuNJFLHMExgV1hyhgHvGSDooum17ZDKGZ88SvxEbp6evHmH8BqDhjKcAG3oQUywbLJzqvkpYvM2uQqPCKPXnm9",
  "key16": "2XYx44b89waDH4ufiXKW38CxCfbXud2mrVyeUh4tPT65A41i2bkftMJvsiZZZixSKDznqyX7gRaxe7qSMqfmT5aQ",
  "key17": "2BsesVtap5HRvn9oaYBdA9vP5zwARKJoi6Uf77QGsFMEG9PQ3iWDFTrtCPsFgxFUctcCx3ESyZc4YnACR7dTd6qi",
  "key18": "2AwDkVsgtRdwvGDba8qRauyCAEYWPptD7dMFJzpLgsP57LWfUyyiaSNJiH8p7JVjxW8wdcQhjUZGKhLPKgRmaK3x",
  "key19": "iUhPTg5VQdRF7FpWTjsLFhcxjM7robTjfJg9od1HeCPLuDR6x2dCqz4FwtxtRVzPknoH64G3vpnqp5dpcjgVsxC",
  "key20": "2Vcn26aXLk3hEY8VXYdxhS2S9rMZVqMKLNnhtXyn8ByyuMxAMLSFsaYp2Tq95MEgqVW46nCNRMBg8rxYkzSaSzYA",
  "key21": "4WNN3MsYVzxvqXJ7bA1rEG9Lgg4WtDMuo6GkDcmkwcCdQYtqayFxBkdcT7dWofTRMG2jkvwKgzJp8wzCR8xcAkev",
  "key22": "3gNjnPBmo6yVVay9PynHtfSaRYftM9njChiQjeVbm7aP7ZrBAuZsLjfxPoQgn6rpUvyFGgm2TsSR6aZoTqhhWfMm",
  "key23": "5Ph9tunLsRXdBLspR9a6QXqGRSNoDuUgoBMUFJraK3wHhuxLB4HgPY6kH544dDmYPQbhuEH3PHoV81kbJWq6SPoh",
  "key24": "2bFpGU1Uws6b76b7TjgntCqm2k4PzGXzdDuRoar1F55Uhmt1EsE8JWkELFoML7R75pi6tKtypGiWB53aCz1jTpjw",
  "key25": "5GDsyvJ8V1Kq7xS7zh2UaqLCnnqp882Fv3wkfhYtQCBY91QcyGRM5jEfu7QznkrUvjDDJyRfpC6fwA7iyYzGp3Mt",
  "key26": "23HKTLGuc4tThnSbWTYgU9inYL3Tkb3rs758AYjKpcgkEBgRKXkx7TYTdoJYznFEbaG1eViRZW4hPs4YtxF1hWbN",
  "key27": "3eKhUZj5DK7LXvikhPuEuB4gB8NVKka1ZygYLvnFD2fq1fTjSxLuRDNtqDbriAnU7HMQsxEXm4uWVNNv7peyvbz9",
  "key28": "2FFYJnWu8YTSuckdan4mXE8sQQHCPXfQeXthgzp9dmyfJnWzEgmRzegqUNzzXtVVJR7EGo6CQKkqrLhQNprx5DzZ",
  "key29": "7FLgLi5xTqJ6WDmX7bxsDRD5KNrN8qtRa6N4nWRyzN1qHPFzRqyGEH4q1jof36vRJrtXYa1XiBhLx1Ud8xvwd9w",
  "key30": "5t7psXiitUraBRQX82KjjDngzMRBZgWXH8AjfQ1YL6BrFSsuSBQe8DLfxLaAE6oALyM8uuFr2UBVYpJhmtHe6TCa",
  "key31": "4Z178WKHk9SEg7RJgaWsrJHcULRyC8uiugGUh6QV7f52zhRViuK67S52FYusiKTL564WEgxB4nVrEi5YF7oRNkjt",
  "key32": "2JpQX1pGFNxHQkYypjEzDoCsqLRVdaddV32CFsshKBwKPcSd9PQePjrorqf6vqMZUfXJCu5XNJ2NZwc4K3PgvXd4",
  "key33": "mFQvd74QTXkfgbQFjePhsKyGLg4exdrkwaQnyTzTiT8CwaDwzQGoRdcyKPVLPSYVL7DLGfBvCGRE1rfeYmGDdqK",
  "key34": "4JBxFSZRwCxyNf6FvSkH3ZFULtD8ughYTM8tfY2nPyJZC9FLynVJa3U8KZpgfvvSZm4qPZ3dBfZHLZKKNR9upPv7",
  "key35": "4CTugjdZvb1CqNbrwe24AwgKYrWBjw43xQXtwuw3PTv8X6kpg1r8Q4MFQEJaHqVBX1Spv3r5DRnXFUQp9DHEiMio",
  "key36": "2agcKtN8ZUjFqMf1x4jCYLCiy84whM2giYVVuGtK1h3DHecexNzviaS34AEFxjh2VHLzgxGgK9B6zZgggDJehQsm",
  "key37": "3fPt3MZe2hUFmrVcdMiNGWu1GAaCn4MtcEp81uzm7Vj11AmssVdephsywf5ihXL9tyPrjraB6CHtp4d6NbWJWcBT",
  "key38": "4Qr7LDqv8349LHQbsHXzuhBptaysxVfZcsSFLfUqmNmcKFq5T52YbUhuPymBCnv9R75FXM6wKtdWZMSZ72GztcK6",
  "key39": "656F8StaKAnWPJFr4NJBhArpRZ1fy5qhFRsShBeUCE2mDuxdnNtVkVx2cDDroa6Nn7VQW6m1UPb4Wy2m8FmquLce",
  "key40": "41QebmdHc8h9fQAaT8rTydV8747da6Hk2w3u7T8zYbaCbfHytQrY4Jp47p7XqDDLSsZYVSnsvGRKeaX1d2jSnvWu",
  "key41": "5KqPQKFZmUThNvDsGm3r1fxTEmeyF2oyTB53gt5gP9ZTyconScm8DX3grRTXFWwqAeAzTizhZ9p2t7GCF6MsMVsa",
  "key42": "td91jkfK2sx3cZTkRmYjxE87NQNU4RZ7h8dsDGyz5wCUtWLKKdgBhN67f4b7myiKHzdKcPew1PRWZR1wh7BPRaA",
  "key43": "2NqXi97gczcn4WcHSwywuiZJwajZm3VMfP8yyqDCpaWTH7anEo8xZtzZkLhK8PWH2vsLJ2hvsLzkaTobjBLCEwJq",
  "key44": "Srpy2mav9ty9tmJ9Ap6aqNz1PsceyBeZsZDEACD9b8PGCwCVF4BLHvuo12PHwK3gz7mQUWamewDDGBtBpxgVbLJ",
  "key45": "5ZCr8JxPXme7Jfjku76sZ8s6WEMXjzefBbZpLzS4GXQT3rd41DDzZBjJUmSPeffUYAgviemfKpWZNoknz6Fj4MXJ",
  "key46": "5xZT8KPjsoATY5467pEB4U2X9SND2c7r6DGC9NRA5SrJ4pWZ37rmgjdcp1nApFudWvHhWbMmnRuXsTb6zgLBq3V7"
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
