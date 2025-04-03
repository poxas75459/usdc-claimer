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
    "5HukUYJyoVeNBaSXtdbXvoL8jWbn7M79ZnhqZSZ5CFdV5oNzzKHpdfU94LQP2pmNuYxXJpR4YfeBX5qn9EbDPBjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RrqVKKbYYzNcyP6Hndr4Tk5DzM5BzrjDxHwwWCLB2kn21ptZNwjJMoxP5sKJ7NSGQuDEpMMcuxPG6wsZpj12efP",
  "key1": "2rEhPJAnrs37CTQQBkT3hf2832P1cjX6iJv48skwR6sqH1eR6jb9WpSBdK6QXuJ613APr1TJeWKCnXiYVCJ7sRUc",
  "key2": "5SwMpi82YBY7auZmxTF6fsiB9t8f5AY2BzbKW2kPLJp6xF6YpoYkxfLsqFxYiT7v81hnRs7hSyD4vV1RMkaiKwn7",
  "key3": "CY7cQ47RZXrwXqeq3pm6fnQ87rNLzSpnx718hMMPNdxhUPowYphcmJdj7MrhftArGvAkLpGtSKymm1vb3YHHwKb",
  "key4": "2mM4vRZtKYhjwhXgNf7niZEWq1autyn2FwHX14FkkgituK9HM2JPNvZY2pxwEV63pzP1DXNiFPj8jE7AE3vvGspQ",
  "key5": "PLsLKb2akyVLcEWgk7WebGtJuMDi1mrJ9omh5MzmygUDYwxDRMkoPdAtGF6B2sX2jZcsYhD8AQsCjiZiHkGhgrD",
  "key6": "j8jqn8sbnJReM8B8kptKLsszmuExuxk4ZikAy57WKrgYaM89QzqmhU7cP49TBmR8rnpWdP1yDxKDjTKLDT6AWK9",
  "key7": "3AoQ9xWqmqTv9VTtxHMX3JktCSMey3KxMtXjYxYmmK9oFBGgY1aR3ifbdfiUNwNRWE48nDKtqepjtcQm2oQnSFKf",
  "key8": "FwLY4gQmRNt4Pg3P3buRR3rMALYiE1kwHa7jUc6kcU7qLKXzJFpbhMzK9fgA1Xp7Eqbr1kFb7Db7pu4rjRnKiNN",
  "key9": "26hDPFfQMFE5PGuHu9iossZWoBZq4FizQcsh5fKBL8KJkbgj6jG2x46mHQg5AJYo4t5f8koyNhPTffobaRr24YDj",
  "key10": "2uRKX2FokDKEZpztStDNjFqpjQX9hmLi7nbprMqM1rV65Wkz65w3dXWk4zaoFwqs2eBm1zVJcimzstyVoJXZSn2L",
  "key11": "5BfsfuwvhfozX2dBMyPUXkBpAKDHq5vc9HkDoFHmdoUSwPjzsPmPye9CwKvLttvbdH2xWjUCKQV8SrkHkTzcua3g",
  "key12": "7Wzk5rSKjJPF6f6NhEBgTezr14rwXhmTSgquoXeqZV6pMCqaRNGSNRacACrk7wcqjYNSxfKYDsgHs54i21rCRet",
  "key13": "4BnY7NJFmSyyEoqexNQCTdtoxdpqghPRpj5MrSfBSv533VgRiczGgMnJQKZdtA3gwsqrtuBsG3p91zsbUc56BCvF",
  "key14": "52k8ZtfxdjYgTjSWY8Hhhfugg1NPHpMseAWy56KQ1T8xr8uaGBP9mAkKwJxA7vRzH1zgx8HsxVPgYqPEr58jMieu",
  "key15": "4yKToDGDTeB3sNfDAUgYWqjoXQD7VMxiTY3zNPvZni1ZPTeKKospL6HUJW4tLQmKm4KAjK4dvVAtxMRhHFSSt9oE",
  "key16": "36vxsj7EWNdY9C9xV4xKfF9dxt7y5joEzuJ4ZvFFV4LfgQNCA7hMBHF7FNjnK8yxMJhYgczP7cyfH8oDf57Hjigu",
  "key17": "rGegZpRS6tFcr3CkUoVLuKa6ATALv5NyarSfCDtfVT51BdrGoHnW1NyFSfBkrLs8hsCP5ncvXDwVPcBWEXmCjag",
  "key18": "4zvuHmuV86gXpeJ6YoQ8JyTGz6f6quAtbJJQ4qcsxd4XPExZxR4Bf6QqN87ivcvQFdbZ7znuSxJZhTwYrxHiNAS9",
  "key19": "H8io5Se8VDsJopdhbPVXoTBNnYGRfnozPadiEyMsQqFtENuEDA1pRV41LwCKPMLjFx2rt792P8xqYN2HEoGXgCf",
  "key20": "4AamurNbMmodx9k33BiSpi8RQ98D6CQDCThKgZjpVjzk3rwr5xm9hkcKxdMcZTgv99YtYXKXudoadrGZEwcsucKj",
  "key21": "4E9BiU6sdQ9XouR7Kw1J4A3pgQSJNfiwNDBmZxXLRt2Yj8uRwArQ8qHdsae4asKPjQrkc7Uu7Z7ogQm4BkMbMLEU",
  "key22": "5bNtU6929jsUADehLciLVNnLyPytqDq77ZNQAGjeuuNRbKtoVJmQUbCQtp6Yr4WZQG6Z4GdHBErafezjPcjZdjk9",
  "key23": "5MWV6xskTTpieEsRfUWPaSZ6Kz4XrYVBnGF7yweHBtQF3MkEM2PMcFq8rpYo3g4VpfjA1NXSQDSvrMCHPbLV3ERL",
  "key24": "aQiJHsRd1w6hDro8ngtuMnVzy8M64KtWyWgfCB9w23pj66AeMXHbBfT8e6EF6cvmywvgeGUvbdSFn7BqH1sYiGP",
  "key25": "4WnPFUBVqiuwG8PY38uSjW1mSRceMhPdpjxAr4HiRjeUqVVcdTzyzcBHuZdiDctH7fTHNhyatexd1mpDoFyERnjK",
  "key26": "5H8tYi5Hnz7vCVob44AC2fJ8ecqAjHmgpRf3H6zXqMqx4SoGgrnRJUpcHVrBTaSHi441kVPodZ1rKebzztUQF8xQ",
  "key27": "5CwpDt8VPJRgGHZR78dy6goRrgqdTXEBpgaYxfHGYnJN6wutYg9cmFE1qPFqud3QAVqNjY8FggVbJfR8kdai5MLX",
  "key28": "qUCsqLoxAJ2cjm1Qnx5Q487DTpNKunMVX9SrFC9v9GVMURJwHGEpJPnMnxrGpvxS3govJMaa63UGBd3ds8Qv8kQ",
  "key29": "29HCNRvLK5Q74DE82Py4eJWydwam4JzpV2UffvJXd23Wt3CM4md3bZNU56TSh6rpx5VTYC6fsxbp6Yf8ysh2HsRd",
  "key30": "GCJSC4WGTCXEX6ebe3WJzvhWoVDS6x5xLpi6bnv1wc7zyei8DmENbmYJQ5vmF8mCYwBF4ftSc82vigDkcv8qsgL",
  "key31": "5hNgMdwTGgHrj1dBxrVnDPbPsGzTK5r828roRzpfPinV6Gk9SnGAYiyTA11ESzn6k3R1xWat3jgpX75nkE77TDgG",
  "key32": "38bmxnHoHznnXK73EuvUF4MJNV4H4wSiAKef11fTb5Y16SzoL98tQkmxz4h2VcqdSdT3wtkFHiSieqPY1CB5DzbA",
  "key33": "3DLwzb3AZtijnYYnL8XSujhCN5d7SkPuudbB5Jm7iLBxq937qw2euBdhcn1xWvbp7vTU8QWDHYnpF5dYkfXzuz1Q",
  "key34": "5nUB4SCq73P4NVkvuLJsPLWBY9MrXpmkiZVtDDSwTApynhkzwqAnDXSMAsXVFLwT7Z9vbX8HA9FupBjs9yWVSYyq",
  "key35": "5RPGwwN8MBsdkaTEf5c9R64LNWcQ9kSZpShQ8tBu9zrate64VCAZUq7iTDa3GoGzq2TRP2nfokuErxzcYrhmbPQn",
  "key36": "2yo1qrQQtqJjpHmZH8FYCTND4cjf3CNqeyXGNEYVhpR7xp7N3pGCp7oCgGRGVZBieuSZDVPeEguosNHFoB6fZ32w",
  "key37": "4eeYJYBeBTrc88vYdWUT2rgHw1HJdS58P5zGinAoH7eW18rgJGnmPZxPwooiC8bbbzjM65n4cnhjEnkDrjF8P4N1",
  "key38": "49mqM4C6pWEufWgwPLfUSXhbrssr88QyNKgqkxPt4kEs95TEieXoUs93QoSYqp935uUK8AB8XC1nPyVTzhtrLFXb",
  "key39": "3bebUA35YbS5yfUpwqiWJyBTZsXPvnfNQA7bG24qojjNrx9uRpLnPVPZFmZbihiYR32w44qf9mEXYyw97gWGAmpd",
  "key40": "3MWMrFsHbKkdeNSoTftC9s4bdeNaEXF54BfBEQzbTsn4LgAsXytq3XtTzRaexYNHxKEj1JtZ591fmW1nW7hk5AxX"
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
