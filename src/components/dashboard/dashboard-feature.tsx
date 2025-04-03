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
    "22RCdZ89n3yd5hswcwqah3JZQuFa4CKEBcYktF5H72cVMXBmurJphkhzVDF57jv729bGeFyrcwPKKWZPdQJaipog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AfXLnFJoH64bygc6xM9xYu5ZLbiXQZ7YaRZSFt6h8roLKNVNcgBY8CshDuXQbqWtJsgSeQmLDx9fAPdQGCkxggy",
  "key1": "4KgJBd2QHJpP9jKHXMsTPhTrJx3ZAQXaPGNVdMLSRoYFKD4zngwQSwpUoVE66oidjBzrYRWW55aHfF64WMEhzKWC",
  "key2": "64hRiinrSkgjCn21oDUi4YJBdHpZ68YzSut4tG9KRFjB6Vr2VTkQZoe9T1wmsC8EpJSB9oF2jKTQGyhk5RL3Tbrm",
  "key3": "mu42q6NyZcfvB1tm63X3oPsS2w9UqFd13rEWGTLvH1KTqmTgGkUBfu78gduwwAttbsioKaiwY68vc2o3aJP2NYp",
  "key4": "5tZejL2xZJS1pLMu6tKDMVgnigob74oVma47nTpwqSVL6w8bY72DzjvZ3RQrMhW8Uryoqe9WiWTzy6K5UwthREgZ",
  "key5": "3GscPSiWYRbXQhxUwAGnxRKHEJHSYDoSQ6Jt2iPjWnKJXNZwDBWcbzHwW2p5cMVJg6MWuSMhKgvcyFfK8TZETr5F",
  "key6": "dUx1gJcygu1hSyMQiohcvQ4VQVr5xEeRSRayGPEbMEV9SK2oAAK8sudQNe13kmXbmGejJbiutJyiTGkFYMa5BBC",
  "key7": "3ZjrLASLmoEHf8i1w9QzBagBGZLymwDCC6k5vg4PD7oTpgeFB14U3mh3ukUkrHX44vm1NZLD4zatRuBGmGX61LVd",
  "key8": "31GThxLuuR6Q8cfTrTfQKRkMV7waaxVpDXdcvrhKXN47b8ts4d13Ya9EayaQ8jbnXbRhuP2NtnmTLrXQ5U6Knsog",
  "key9": "5AECdqHSqhAHKDxNy6opeS8JPubNMn4A3Kr6iBgGJn4hyggUXwzgKCFEFPK4Z7xNTJCCZtnmRTkGrBKvt7JHjTsB",
  "key10": "NMeaEwGmNsxWi6jTTseutCrmAMAok7zcZJUhAXTHVqCo8MYsdCDp39VTWDmzpMiNxh3mZY19Y7tNARGYdbqkqNi",
  "key11": "4meWYaLQZ2zEyciSPDDaySBQEF5LW8A3npqD5KdtB4rnKTMXxpeYwJQLgNt9N4xeGENkqScEGRvpgfsTkrQCHTF6",
  "key12": "46Bcf7Zy2fx5DyqujeB6gDusy1E7kYWzEJu23grd6eGvAxvR8z2VQUx7LKqeegPaXj4QRd1XvEapwS2RtJmASeQJ",
  "key13": "4dbNMsih7fJ7aTiNN99sqdKWAqXgKAwABQUB1GDfYB6jh7ho2NJQs72vJiMJLYy7mtaaEss7aMbZ37gv1xw2fLLi",
  "key14": "64yvbHMKnFKR8QgSzFvEBqy5VgG6Ph1iu8zHWuRCyaWcX6xf4X3uXjC1AqNwaHK6jhqAPZVcBEN67q37BKqqR4YM",
  "key15": "37312EWTbRDECaDGs6eDVRpGA1UNtEigJwiDA7vM9EeaTJAefLsUkdKjyRf9wBLZB7YDbHwgwG2a6k2mCfHA9LUo",
  "key16": "4bGUmLQH51d9qCWPThMgoW6bCRomD55AV74e1MfXsfA6oY3rC2Q8EkVzzQTqHyoSRGztwsPJoMSvvDh9s33ga4HA",
  "key17": "27oXzNsGjUkLtvRvH5x4Hg59UPEKM7kBhFrMzZsYCQ7CVczfYQQkqS8YsCai3iukb5FHouREx2j33sostYGhGCVG",
  "key18": "2stch8Hzck7Ap6GZmhLv6rNJi7c8gskqd7XgZYDCsG3xjTvtbdUu6hTzcSZL11ULuJYvKEknHeaMfcH1tBwZ6wNk",
  "key19": "3cXK94TBNDqpg83bv36KUDVvMPKLQGSvp48atoGiQfbszh8ybRLG4Lra6GYBzeUz3rurZAKtBG7YP4L7UyaXdYGr",
  "key20": "5WRJbCNm1TWfNXyqHNuuUQdUQX9gAz8dihvNvXHe77TXd1eWi93emjEbr3CncUfiCGFC8Ao7JSACDgPsB97MZaQa",
  "key21": "2YqkWfHbvq8SYUx4hYB8VZoy2CsBVgdoAJvkZChjg7RjgTp5HBbm39S7Be6V9LGtfhuANt2X9TAbDsrFhKuJ2N1F",
  "key22": "4JwASKtYWHfcPrDFXLk8jtUzBikB7rpsDMKSwdLc338Yp2JLt75eW6Y1TzCJg8FMe3EfdVMo6Pk4ZCrzvCVSM6Cd",
  "key23": "3Dc4fApfS4Y9vUWYQjvdzU49gzZB9KUzoY2eV32SE9tu8rLJrbj1ovzRWqFn49W6VR9Py4DPDFEcQS1rKV1DakkD",
  "key24": "49d8HNR9FL4pfnpS96feudASKFCMyGrXiZXhBKb31w585Qokfk5Qv4inJvxT9KNftFerPwJ2EX4oEF6zJmZ9VqcN",
  "key25": "37LoBRSBh5KwE3diggt3ayDLwtCK2LsJZcji4zzayqSikzyuXVyCqi8DzjthpWhkpDFoMGWFsMP7YfjNPhqwrdst",
  "key26": "3CAuUQWArUMcEZbiMxBAmwzr8LdJXhADW2K6V37zPGGMp8Wt4KHGUU7otgdK1SNfqt7szP8ChPGkhF8jSybyWW8k",
  "key27": "4wDuDL38rR8We93PkxeZWNbKtEHZqdEM8tDR7bBQf22GtLrTVUwtBRvJHZhV5vqsBHTfGkz6dxRFbRoXrnLXejxy",
  "key28": "36gpzPKF6ytqjQgqhatxcmSG2DzCMMyccL1NtEWausnZu66JQvGePLaAKruwBGbRYAQCbEsLH12NQhFZhWz6EsqV",
  "key29": "5fKpkTx4bEWv89xFdSgq2uQZv2uTsSNxis6hzmQEc4PvGGztDGNfuBxiZnxA6a2GUcnGqs5iuhUwMX9JNHwLuekR",
  "key30": "52GARdEHV2K4fUAdqXhGY3zbt6QgHj7mon47Uj5hWFTnAtpej5hzeUjXSyDfUByN2k4TDHjUYqHWkUMUpZGaVmjQ",
  "key31": "5CMfiMWFUU4R2kaPP3ASPZzfdXS3ytVTec3T1eocqSB8Ks4p4bxwuT8YKaJEW1Z6XdFeddEBEuYRh3aENAgdbzPE",
  "key32": "3sLsdyfG2b2NHcBd1marUuZs5eLHEPyZuH2nMdDqAX3F1mmVgskjSKGii7419qYBGdK2Bkmb2dHqrRUNXP9kz1NX",
  "key33": "32tDhwYPZHKXcc8wPobf9UEpfBT5Zjdp8KFYSQx8Y1HAAvp7HaEkEen7LZvBk3MXifEcvqsQJFmroS4pkNYcPKPH",
  "key34": "5ghDN6CvMD7rYmRxHVmpfyVzCiy7SLWyLCaBaZ31wdiqei71PiLNVUJsMcohimqFtTmZAt49yN8pCP5ncXa3x12F",
  "key35": "K3GoUgcFEUhe8nj13KtJ4GawEpgsaCVA52KPRcvyyuQ7aRMtRr7P1Jg3yATEeR36XPjUGT7LVW35pxAnRfxVXWn",
  "key36": "2XsiwB9ZCwrrypztX9RNhUwLKYPbBxiDXZJnSLq8wp1EsidSNur1MJ5wR56Umr8kQxLavcqKBX2U9u5AZ4TEjjb2",
  "key37": "3rKe6qkaXZqFqKCC7wNshVuVfAdv4YwpojFS41m6hHNDkzk7s1R55RFFD7eczbGmBeg1KQrU82hvB2eve7hjqsS4",
  "key38": "NUvhFnLCcNmeG61hXL8qaoLoL1VuyKVNXKbyXVzkzyDGF6ctJvJVmrTzTGycAX4tFUeD9LfG6quQ4W27ZyJGrCM",
  "key39": "5Jw1cm4CUZLYbLFWR5vozJdL8hvV8pqnTAVLbgi2ZEeQyd8yEs4vUMbKjpxcs4PwbbK5Z5n2XKyQ2NkszYAGzESg",
  "key40": "ys4QFLMmGgvsw7BpjEzU6Rq1rmZQh88wL5tK8cEXM6V3wtY7WWLGE33oaTfV2Uoits3dCAo3E9QFE9eEWudcu2H",
  "key41": "2mrg1J6QapjHjA2trNRzaK4LREaMkQEDPjrXE8zw3kDUEBZ1PnqxGEzx9VzqAg3deKXSZU2fsEG1dz8M7Rw5DXjq",
  "key42": "3J3tAZVhny99gouF5nZNdw4TaNNZHMZCqyX6EtvTh1asjwtubQyHLniBpy62kbtthndfLu1enZURdrCLBYqaJdkr",
  "key43": "Apa8x7Wv7vU5KKdeVaVMLLU9qEYVnQQzaakRDYiQH9SqRGEjVANmHsQLSBwpiQZTd3aQTWoLLdEEGnvZMppGrmn",
  "key44": "D7YtePRC3q8tbXCFkJsNiMCiGyihEp1nb1c6GSnFBdz8dcsmhywBbvt7XKKZV9kbYxQ4nBUCmn8umCeg6UTbcFQ",
  "key45": "5Fyhm6ABLaBaE44yScNHaevFYjvGjEYvPDDkNVDXhs2cQoJ8WAv1DfAq6ddK69toeLCesCSfShDXtZQ4RrbGzjHC",
  "key46": "41bM7EroKQrLJK535kmxvM7364bNJQUtSMtTGNdCPpkh51Sn3viBFYRximVkAVrADEKP86UM5pDuUpkfUQF5CXLn"
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
