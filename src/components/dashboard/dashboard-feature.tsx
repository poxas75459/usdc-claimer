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
    "3ZATdjv7m3eqvH9R7oPGPUYP9FZszfiRX5vczuYttPdcaUa8ehYCGGT3VXeioWRPhRVMkupiRitim3pv9E6guf3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDSXBbAqZMe9qo1kUZuLv5Amb4yt78DLjqebVD7JiYwKyGMWGXbnaFht9gDwgspms5xarNQVSiNvpBLqsJumgaQ",
  "key1": "3XqEW4LrmFfZ3AJCwDUkbFmzCfK6gNxnVNewRWfsvWQ2Q5qA1RvaW8J4cGkeYM3yw3dCMLt3Wqfb1fAH7UvzG5Ta",
  "key2": "3mS5GkfKYEQX8Jhtv5t54JqfQmMS59BUhQ6S4pUiQQDqdRawrYvd2NYoPdtPbDVuJajzLfaJaKS9XoGRy5ea5bGc",
  "key3": "3mA4QkmZ18czLJpdcUJoocHvmPcq1dQkESoHYx9VRd4hMDYHo4pS1bA8GncjQYS7NFENDLF62mo8oDiApZYcqqUV",
  "key4": "3nf5PkzF4X6VKT7GHdpxja9QWP79CoyZibr6wdtNqHbcdpB5pmADyGKDNNxc2eiE3wgLw6gXM3M5fHo4KcjGHut5",
  "key5": "584qbcrQNqMq873hXqqsjFiQwAfcK6X8q65D6YKFjmPzEGm47Ljgh2eMpDpfaenxT2Si88qXXJ6rmE3gs84TVnsY",
  "key6": "PNux8cFmZEB7JhQgNz6cDpjeFQDqzG1xtUupDx53Bn6uXxjQ4bq3gBVYrwoDVfLZZRULEjBdSv9f1YMV71rH3op",
  "key7": "4Fa9v13mJwV5A4H87ZrGd1Q2c6Z8VqfCtNgNfAuvcZ32Kw8ry1fizYSsScGb6cenC2LqN8Kv3MEbcNCfULCB2JZ9",
  "key8": "51aWSNvqXnuLYXDAj88tCVnurbn5ybJH6UuDXAHp3SpuqyqkbaGhfqZuxbfHN5itTXmDkL62xHi7SaerEtAoDxaz",
  "key9": "52tnYNLN6JCfRCHGCn2zYmTTRd7ooHjhPiDVCP1XuiSED7bjS7t87EJUATJ1qotoc5RALNg7f3haehHJBbv3DqMX",
  "key10": "2Ms29rrCU71ogaYP862NkdGbZXonHR7Vc9KpFC9Tz7Jwh1bGqpY7giRR1dcqTC3kDYWQdCaqY7U9BgmH98HiYntp",
  "key11": "4CjbgowMDRvASgGgrh4evEobWpzFvdBh5MgmfCYdD3qbFbXKSSKBLMsixMrTzoudZsgkwxitTPoUpkCwYb45bjN5",
  "key12": "4cNY1zV48c6MD5yMFpP5zee1sjyE6qtdwrF7Erfmr5vytCZiAgBsxxT7EC5RVGpS68bQ6HnxoUeLFYyJMXrpdxXa",
  "key13": "2YoSBTVYQMC8vfAUUHjhkaTeSzUi2UWimqxJEAg7Gn48hUuAeo1DDJvJ7HU4nqvHNvi3KDUZhcNfC9Jd3LNqRGMG",
  "key14": "435pEBaGiK46ktKhT2HCWa5Hxmw5V199NTfQ2HKJTArPwf2RKMJGeFpyF9tPK8QXRBF4VPfERuz8SK1bEppt6X2u",
  "key15": "2qVFdvnAFLv1Cup2GkrjuvtGHw3m3Ydqx2oT9oFrjFiNTmyneeSSyybwhAUUPSb3sH7x2tARSBwVRFcwmDwQ9Yfa",
  "key16": "3rHz4P5StauvprphXzPEyocefVj1hJBn1rmEpuRB5iFHYdwh2nYcLLDdgXc2TijmPJFAyYg6kw3jxQDL7YHh2ty6",
  "key17": "4wGQKUAJ6XWm5VTrb5JwrGVjLsaYs9C8egxfw5LoAiEUukoWSWDMccBrJLvpDQsV4jctUZbnNdDLgXHDyMAvQ5Cy",
  "key18": "2qRkpaXojHbY5xvEZk3ZWj12DNP97heXzxe47kVFgTbF5fcTzhzvgCyBp8nGg91zqLMjTko6yXq5BPWQoMvcY5fb",
  "key19": "XVrG7omjRfn42rM9vcDwcNiEVkAcqBt4qu7WtPsNfa23LkDjFAckgJ5MLViEcpGPuyADJJvafpLanFnAKnEhVrX",
  "key20": "4rdDSBQw1CXgreeeTJXC35BhSxsd333emzXYBFtARDGgh58P76dyjyF3MsVgJ77HHtCg8vsGSa8V8fTeq9Ey3C6e",
  "key21": "zetoE9zDDZZgojYg29UQyvKurSVcDscdmbDMqW574mw7zA5RbHucy476w5rj6c5Y2uazStzEsWMwoTqapZtGF93",
  "key22": "2Yej6dVGsPvAabvkncKhN6q2XFq18N6W6m3LjqmzeMRs1L7kmedifQoKTPVPHxZeSsfnGRoWTwa8SUzLW19ukiUY",
  "key23": "5oWwMLoPSftKJRpYd8oYGXoZ8qPHLAQc1qAV2Zp1NqFqXnuXnXFCMWMmicxWa7HbPDhpUgSTWxFkgg59Krz8GxAd",
  "key24": "5ps8QdkXCCBSTkzMcgnTHQYUqi7nB2mxehAp5x63U74kJsgoZYzWcdUeSazd6nSnK4UWTEe3dRGz5dFQVKMbh4xE",
  "key25": "65YAaQZbdCSgaWvYejbBTJYNV3wmX3EH45cW5PjPG9Tb174dqC4rg4bd1KvmfvdqftmdLEmjheAxcFSFMAf6eSDH",
  "key26": "45o42GFWzwN34vCuyyLJP1Y1Nka6LGyL5H1bUzEpUVZkj1gD14xhUCwTdJFKo11W7c2B4bBeb6SBdJKGso5GFjDK",
  "key27": "4bjjTGfe9iz5WC4JkuGAUEHuUDka2LEwxV3fzGMbyWvz3RSR1C3r9P5Vi14PaPDjW4wA6rhvrJAWH8pwfKwfyX3s",
  "key28": "vozg8Px1E35jmWWnSaWWZoPE8xXidvsWJS3EW3WeM3RXxzcNj2zocUpKXBzWo1eKuuiRubSZk9pVSDFwCUAemiB",
  "key29": "5kiNRv5g2kE9tUcjmBb3awEm3x3dNVUB41ZnBKGMAFki6yoWixqYpn8bpyaihhE6FFHH8tSpGjPcuXCb1ExyCUYa",
  "key30": "23zHEWMonBrPd8CP2eyUWzPfR5N1XUPgmeF4DMHNX1xtMtzrxitpsdXC46QtR7cuXPeFy4n1mUkKUeWDjzaFEZ9v",
  "key31": "4gKy2hUxm8zDh2edcpg56k9gEhM3782rteSrxhARvvKzvHji2TZLcLbWamcJdLh7ez6RgoSTpEXTh9DZwmUAQFki",
  "key32": "65HgcVDm3Vfz7ge7HWPYsLJc8YWTbLTM2mxpBfPn67yAgkFDuSmjo3GrJLS2AtnVQmDu87TqrQJwEFRhqsscYoQQ",
  "key33": "CAEoLCDPah81zVRsC11rZ5K5n7sJeEcRzWx4Ex5NijN3U3rgtrBJgXqTijETM2fAMPMNBwn4sRyUStMYsbqSSzw",
  "key34": "5xYc1uemRpJJy3tmRe8EZh2dcFPGGSuJeegCS3y3MtjfdYNTKuz6HdXigJ9heQgAA5EXE9FFBhMTS4HVKXEs3udb",
  "key35": "5HSYgth9UCpGLmEeFSEKwcYooSCMv7F63npevpFvpiShTmvvZ5N1CxaiCcDcRig8KiEdahmaieZoTdM72GhpdNxx",
  "key36": "2NXBGmKGec2zscSv3eQZuNdtsojyn9jQcYpcz5QP9P8mf3Kdw4cWdUquLFaUwPw6QEH6cZQ4Rs3c4rM2e19MWPRx",
  "key37": "SWK63Zsgbxwx8v1q6Ax6AEGViSygMREJpeP3yYTu9HUm4DAhyroCvYG9QbxJsVDGGN2WsrG7iRQ2fDsr2UbGJmN",
  "key38": "W212uyzcCm7vS6QiXR6faiNvgdixdfgM1y9v25nVVSnS2xXUZ96zqY1TrsioJX9PjZ5kBLwtvvVKu76D8coYphr",
  "key39": "5r1TqpLfVyJkWM1ULsG5Jh8YcMKpeqBhfyDCkNuwThrBAjxC9t3HHfDLKZ6Rcy74KCeNuL2QJm3gHCfXfJWDHTrg",
  "key40": "3jgFoWn568yqQMVqiS16Y7zQnRkqJayVHRmiUC5YAv7n2kjUE8UsHy8ntCNvpH5LmCZnzFjaY2NAnEz9Aw23H3Ye",
  "key41": "2TnZc3bDLZ88HDMi1bXfATBkWkf63fax4fhn3KqNLV7BZLGuxwsDR8UZcW6AqxEFw9BMrdD1kCUA11Th4dQbzBro",
  "key42": "4oUs8VRnJ8Ss62Z2Yx2jrkQ457bMcHmpGckjv51P7cE55CjLx59SQitiEHAqruNhk2pgLt3bux9qhUVVNiH97SCb",
  "key43": "3YEeUkXwEifddFULLzFWXHT4utzb6i7r9ASkReGs4TRJxvjUwdtyNCHCiHk8GEdDSezdWmgdUMpAgwx14JiUkUkF",
  "key44": "3FHzWeH5Tn9vhYVrgtWkvckxu38wTaV2g6NxPCnk7tVwBaS5j81KvmXX9hBHC9PcHVUFRiNhW2sVFrEfd4GX4n5G",
  "key45": "3mnsDJd2AMY9LMfFQoNC1fv1iScipikc8PnXLstgpyqFFCptuZaeUH5eKR7CfQ6co8CzJqbvcCzv5atzRBzdN2yU",
  "key46": "5pm8YhTFeiC9BSbp6VgFentrh9f7jjfhyoHusbCESb82mrej7Nn35ZZNS9MV4uiU7WfBSFqWELUEW9M2YNsLoscv",
  "key47": "hJD47e3e4LzHEd6kECkgDbNV3cr6hjrPBnm6b5Ye1g1Z8fCjL2gVhzJmf8ANg6CvBB8uLs3T8F3fBSYNf8ek48g"
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
