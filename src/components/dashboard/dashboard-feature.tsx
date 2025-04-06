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
    "36sdE7y6rydcwFRSWKEZCKXZiGuW4KTpoY7jjHMdUo5bUKqPkdb2Uwjm7QgrH3JgXNfqt6H4LgRUAnh1JfzwoEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "567PH3h518BeVUamyXL1vMZrGNqKA75A7nuxGGqaUvneLjcgcu9NxtgrQJ43sRNoXNPQ8qTfNMXdpBSHU4ResWvS",
  "key1": "4aX9U8FRU2xibBUGKpoPaRvP18q2stAKnJvS5CtwnB6BMHsamNjgj1XC8nq6Edo9pSLMSrr5JQ1U3TSGMYHKHZpK",
  "key2": "5pQ3ktvGrNgdBV23HxA6TenM2WKnxFEcuEQVTGJdi6FJZH25xT8rhPKQ24tjN2W7yzXhCBTquzgXci3nMjFnVPXo",
  "key3": "37ESSk1US1AwmghtBqLJ1veBr6SCeNeorUf39cq77GxNEy6FbEdKVuSn42ti6Dz2BKSPANFtLyETtMA5pKmJDvuy",
  "key4": "2DwkhYQUxUy1cu5LpfJzixQh9v5BD2wQHnpPg2ryF2kZUuHPY78DcWt7otPWnvxr8CFeorWmfmCE8r9FwXHjGdX3",
  "key5": "2SYA3Wu1TpjLtQZJ86eJSxMUra7qz5Gr5snZ7XaDg7xGyv55KJm8VKHKSR2gKcCF2Bq1QEtJrYECobryWKvNBoVm",
  "key6": "3hckbu9vnToR8eFhqYUT9WcpLBCZ4hc1eGWNFRow7TfiaJ5oGAdvqoadnpXcL7XN4yod3At7Xn97KFSmPCMhb9Me",
  "key7": "6238ncEekxamsYMbRwk8S4RjLkb5fDXihqoqJbyhQb3Ju4Ts4w864K3bMrhQ7MEyRvN78voWSPf5Se1uRk3j1D5q",
  "key8": "r8rujqMGKFgjki61c2Syko5f6tifN283xt8scDW77CVjhgTZYd1h9WnF55fhz6pauWVbb1X8LB4oBxfCRR3Aqjq",
  "key9": "24UYzpAFbjnuutT2wP6HfGpBNjMWCeLxUAJoxhUFRD1fSwi1vmcgWXFgaFY7MPUW9yjxfWKbF6uE2NgNtYDp7VCi",
  "key10": "raXUEphr1T5DQzZbpbfheJgKD5MuV7mN1hHAsjLTZfKpDNJcikKDzxktxj5djsjGYEkRBQKncboVEzmbMq9evqX",
  "key11": "25ipZGEg1DS1dUMptpSiz6zDzMtoCSqfGuqnu11NinjxujBjLLXotgsbcffaLiPNjtJV5tZgh1GfugM5i5QFnqHP",
  "key12": "2JJMQpQjX3v1txtuZYzYHRM83M2TQSkvx8njgNTqJNK1wtNeQ53EiqEUnKenX99DpSKFbrrwq1Lg89FvqBY3x3Lx",
  "key13": "2pNckUPwYi8H3xAtEpUbqr8XXKVVNCSfRX3P44ykgkAAgfkBUcdtq51GpntmCnep9n4kRz1JRzxVLx2oj7ZUUhy2",
  "key14": "5cSJxqcgiJTkTLyGE2qYSbz9GWaZEjHRn5fqMckK38iESx4LE6xpqtQifQmZboA4Tf8Cv7GM7Ef8wnvqv4pX5HGt",
  "key15": "52tfHpza9HUYSeoG2CqBZBBKDFFWbV1vWhenrLcHym37oHNsecfVLw8RVoC96sga8Q1RQfJ1i12UHqNQ8wvjGvmj",
  "key16": "yuiigNDDwJwwwVvFBnN9NwujuGEvNjp6ZGVsjNdpTM13DkWEZDttwZFcBcFdwF8Q5Zv2feKz22jtHaD5WhpBWyD",
  "key17": "4kTDrdwoVWLyYr3ozZm4JCCKABBtWDEcdP6Mp64SVmU8N3LHw4MWYJWJE1N19nyMHtrKNFEXYviWuiJGqWg1coVn",
  "key18": "gmmBMawyhqi41xo93djCfEJyNAMAv4HcoHxiuwjZWp6BcNJKP4URCgYgNnF6Njcsq6Yh3P4VfJPqvKLtBoNVLdX",
  "key19": "5JSxsvZwxYq3HDvzbBTmiM7XSRZzbHGfU8cNuMJoVcdf7LBNKViupPL1QWMxhMANttWcrXe9sgzyJ76eVHdP4gjo",
  "key20": "2XX5vd9raGRpm9y7ayb1bqeXaggy1YgqkNm5wPyc2GZmEtZKoVizvUUVaGkVK6qjqN2ja2DqVucsJBgCqSRVwvbZ",
  "key21": "5hYxgvXnXYGkSKczZhG32Tad71gt9R2pTWgjXY1xHFdrMJLHJDmu3KHxaeFJ4T1kfAppqEYgoykSntFZSBqkHu4A",
  "key22": "5gfTsciBW1VxULTZY13JghLEr2m1PG2uRxZnXpXqBsrdqniQd4RoZHjSxZztvuzWkJHBmfDKYVCy3yeDMkWxPYSY",
  "key23": "3C4KyuaTFs2zcWXr31NeuAVCL8RvNzzmfLUeta2MpamuiRLK17dNEBJqAvDYQT34vgYznPrqj5gnz8ef8YSmEbDo",
  "key24": "5woJBwkBMMi1GwLK8ZnxM9ys5qitejp7a14bg5QkubdcqPmLvEwtBEK2mX4zqq57SSduErK2Qu6UERKH2rMbBq4z",
  "key25": "3uAjBoSxA4EMNR738DxtoZfj2S3dP8u52Vrg4Wb5nkoYBSAZ5ssreWJmkhzfRwLYSrf9m4X9oxh4opepo6Wn3nzk",
  "key26": "3jqfiVF2Mm92HNkdournSKTuRCk5JBjSk85wqjaXX9LwefszyBEvMJ87wJxtxjmikgXZkaNMJQcSWYnfMC37UXKh",
  "key27": "65ntySLiYkBXXLiidFDKScHmccWtMAYKbiTEEmJksPhQqhjNY1XM5tLHzB5uLaFriPMD8fvu2ZwzMSvKba6Mcwif",
  "key28": "24B421FJZRHdanzPZS3wtrkkhQR1nk2gYEakg1M1jKBYNpopHrqCiu5uTJufz3VvefGhbUyze48QQWLSJjpkNZLN",
  "key29": "4XL7Ju2Kzu5V6BLv86mnK5Tp5PY7WmEWdx3ZD18LLsggiH74YqaaELWcsZUAvMrxfLDtezLjkVawCR8Kiatj4ka1",
  "key30": "3xcmbyaxKsKfD5aXabCSFN9dno5NhbPnocCVbk1cjcXA6TnEjuPMDdrAayAUKaCDE7PxfTTEXQbnYL6k517cXa5v",
  "key31": "363sANJgvbQP2ufCd1jMz4rzKsMVCwuRXBzqomVvhRcK2wDxEGHTmBh2egpsowGnhQU8hPvpGq5E6LsQYm6EdVzz",
  "key32": "bY7BhE4vbXh3BffH84FkzkN3YNzSRCyiFhhwFFnMYVtWUiE5hiLvqAM1c13WCDtT3XPfwqyehirLS5MXg3HiAYG",
  "key33": "MirxgoApNts9jkh8Y32opKmePwVsiJZHdfe9CaDGXEdPLMrfLyPsdA8mGAAXU1RSUjYSwMyYfkpam4tm8j5B9iT",
  "key34": "3EW6hzLuvv2kdtCcMM8CFv4yw21or6xrRbkqf7jkuc8YNR2uqnpGudY9pXLBedEoTwHBnJsuwQqKmudYkps7ZeGd",
  "key35": "3jhnFfmVbFr97U295v5omNCzreJDVpSuRgwcLWy3GBpvccEX3AUX729zoTieruwrpdhwBreLiqcfciU4iAqYk5yh",
  "key36": "hf8WF3UqRJSeFtgKHhMxktnxTLu2WJ6SMQxGcTHeS1bbjE8nska6cD9SKSnxCg1NdQJjyACZmPvk2CywJpyE3DR",
  "key37": "aG7Y6eK2wt49g2YMkZppHESdzp36cVhzb1Bm36nDASxPchE7ximwNs8ZZ6u3qUezDjcdbhSBHbnTwMWb83GCSK5",
  "key38": "2WPZsLKfQsNoix6YRXkjsGYhFPzzYCX9QMhdbqrctDxGwexD3MkizeVMY8SN92iytGQyGwa4j4Yvnh39xPsjtNUP",
  "key39": "4qSJ7g1eqf38BAFKsBZobjfCeNayQseCy648wn76bUgew4DEi3gp8LmXWP4BSjrNtSRbm5ho982bVwQ3Xm1SyqVu",
  "key40": "2bfkWCTqRHw5TzswxT15DaFFkWH5tVaTum4rSRsaJqewaV9y1ez8P2pDjJBhpre66fofr87d9MgqE4EnZABeY73U"
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
