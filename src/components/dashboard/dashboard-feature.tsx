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
    "3bo8zKMoXJa7x48wkS9KWv7PmbxNHxDnHxH1uvzdgsC1i3EXaXqwLQSSHKW2XuShL3Uj7cv4ogDNYChr1VAcpSn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MoCiY7Q2KdHys5L6cvYoWE5Vqpnu5Zst8QbaZsEFzbtjVB9nY7o466S5M1GA5e8CD5ezNZ52szTHqPMcqHtbZp6",
  "key1": "SMN6D5mscpT6zDpjnTtkQpsbEUhDSwrraqo4NJWbEwucX1q3tr2N7HUE1p8GxEG2qH2SbEhFwCnoN3L2b2M2rC4",
  "key2": "2fg39HvWMVbHJ1Q52bS4yAqfPWd9UiXF5h9DCtE4MfU7UAAxNQmAwLepukNq4TeU7s5R2Smw8UjjJSDTmkNJKC4t",
  "key3": "2JNegycnsYjSkq4UTZN7Vb4fP89BWcP7xyURMTUuLQHMBHsGNB7bJ6DpeQaiN8UpvS9fjseV1hCYk9kqYcsAH4w4",
  "key4": "3GTDkrTzJ1A19VfvFXoukY2Vqr543WxeeRtiscPBhxUmqVUBp95CCuwktFFUv6FNZwjNvcnjjL2UBahA3c9twkpd",
  "key5": "5CTWWHNq8AqqpaNFz2J88UmhHzNjE8NBygrN989s4CCwbiMcNtfzq1pbiVHkWVeUeQe3E9zm9W7t3nWTgXbDUXF2",
  "key6": "ZW1DwF6jEvkmqtDs4GHD3DGZZBnr5QPDRtCZfgGwdPxgY9yerCTRETeUL18vo5raL5DjxDfDWvtqLVjPKfsu4yc",
  "key7": "2EZkAtzzhMS1pTsZA3CNBJrPaCRTcyY16yGNV4HZ6wP3KuNAYjBTFXct5dE8MHVXKUyJV9utM4V1NhBe3svkuVhL",
  "key8": "23hednZTeCSrwGykJz23qqvZru8wkYg69iu6HF1hEGrLsHiABqAY3dfyc7HaiKQdb2EXdkEc2jZbkgw1iZYhbtzV",
  "key9": "3Hyfa1DoN7PBwaXC1BHdhUyoc1hH91y8vE9MnYCrpUSVLAqXEaz7zYYoJ8F8SQRsbbhAKFiRbcJKCn5u6sLe1LKJ",
  "key10": "5RxCzgF1hMswHo528bdu2RgTEP61FBWV9XaV5atMMpnLfq4K312uY5Nr1npF89rehU7Pg3KQtNhNToLpUJru2ePF",
  "key11": "638BRkVQVh7yqXjYqJ5FnjCSFp6CgFrD4L9q1cCSZyjXHTJzhMw2QeVgdPpAFBEZiE1Za4zB2vab8uXTi242wngo",
  "key12": "3DgtjKH1jVBwKGiM9xQmYRDWFcZmdc44N2hzeSiiypXa6iV23NEvWBVpys8fKWC3zbZDwDbzDyGLEY6HdA1mohsd",
  "key13": "3hmCzEqx1u6G676dsSLD56GdZFLhvuQKqKxDdyU69dQnmeQRp2Fsgjz2x2JJaEhyk3vbkF3MXzDDdt9jXA7frsQf",
  "key14": "F8w1FxsDQqacZaDeBGsfZ6pYdWjL4EWn1FHuAhJqXyeuosCUWhJv1CkX3J1un7ytAaoJsjCpEtDdDVcjq95e26B",
  "key15": "3SKr51m1BwLP4E9kKpwcENJUifMRW8SCCPT25Jxv94SCrjZWUWnRC5xcmP7X2Jer8167Kq2F2AtTRPV4WWug4yVC",
  "key16": "3R5SuNkiXTJs5gqsMdDJpBCQwfooxRGQpHsmuoDL9wGcsVbmWAWoMmtC3FzEBkXWd7bpvrDDtcsvRz9VALVZkqCD",
  "key17": "5tBXn2ZDCoS31CdnmHziFR9UGEKhdBJHcQoP3PwWEbwLcFbFdFJc1TU2Kbp1DBR6mqh1x7g4NASPUPxp56gV1zRW",
  "key18": "YYHx1AcQKzgqKF5tsft4ziavfcG29VxF458FVKYjfQ7VjyZcHHfvnndSmCzJQQFdeErn6usUf88eToZbazDfh3w",
  "key19": "4A1iz8WsN82sryggxtP2F74tZDZaKa5AM15zHewZeR6EW8h18jM8mRtjKynfS6XuAniPYrqRFfmXPaMqxbKNVM2C",
  "key20": "2cfVd5D2j2somqGcicvmkpHpAxwBC2JfLhVxbjpH4bxFUDRhYcSf3mAEdNNqPWkeJVVq9js25zdsF48uZBD5sc85",
  "key21": "3D6EACmYhE2sBLWwZ5HytGgRJSEbNe8XjN4Ms3DAsnUgCZddNX3BrXR2eBjzJyZRxRhAQnuj6nE5GtUGd3ze5Te3",
  "key22": "5ekuzSSoL6gNdf1StDy68coNURgja7EB4z2NVQ6ZQ3JyJpnTeCibzyp5brQXmP7cVfEPT6TrbbMy1YPyFwbXLyYJ",
  "key23": "3fCKoentJsuEMaMtrZR6fehLnQa7DuXKH6uKzmZ18oj2vKdM6JMA3JfSmbcmjyUnAHN4Wr74L6F1D72wQL2Y1zts",
  "key24": "4ckwCvawAHeS8T1gNUDbgQ95YDaeGHZ68WmGC9SK77HDkJkaUg4c28LUH8dnZo7rRQ279mEnRqmvEnPvgozYSf6W",
  "key25": "4G33Src8cD3scsey1JSmBg2yEkqfVqiHtdy5QBRW6fGQbiodDZHyYw2Zy8RbpHsdqF7nVYFGddfDXBGNbwfdf4KZ",
  "key26": "4cSpPW3YfbAnsi9J5Ff3qXXtYRarT1xjMb4fefxj59LeDfdH3Z8PAAJsRUMEu7jAbEdrrU3mo4FdQmMaPG18DS2",
  "key27": "22TaYzLko3P2VnWdqSkTCgAwHYDwQGTh4tWnPrNdi84Z5K97zGn6Hf8NTLnLNV1FbojU6auDAW692yJZzWRCvRtn",
  "key28": "23Mz9Lbdx6aC3QDgTtMZ8a8cE1pPYRjXGWTZcv3HDzCVR9p6Er4ehZmyPWe26HnsEr2K6mFEA2hoUR3LqHnkoUpq",
  "key29": "4GaTUMEWKdZnwjJVrVersoXwxoJG7RnJMsgLREnmPTYwQdHeWRNKUpn6QL6QL8shXD5eTMEriUv496EzKnn52Hgz",
  "key30": "3txpYB46XGW7fnwwgHxSo1bSxSpSpxsTcbXiyQRtxST94MSsWSEoHqPZzjLbWJpTkZQgFMQ2nRQYydULAU1AHXRa",
  "key31": "5dVVasaubbYy7eJJX3QJPoKFPQXuZm1jnCFMD5UaiPt4fGyugH8vLsPdV4ihebBtXjRsNY2U3vR8wg72xFKfeFfz"
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
