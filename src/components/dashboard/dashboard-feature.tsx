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
    "5GEpHsPtubJWNDmhGkDy2FRvadYH3YcEa8xCJaJhiQo9Dx545JdqyCgLh6XT9MVf9Qk7K8yB8iftHAVymTRUCRaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2Ckd4U56bjjvfDh4NBwdroM6iRiV3M67BcTKBSptwwwGYRxahVS9PSUS8uhBNh3Adt4yRxVnVyZDRt1vhPCD91",
  "key1": "5uvGTzoY69F1SgibvkBtsEAymJRLSFC4Sjd8YTGQGnjGNKBzdYpia2PmrM6aUhvnPcLe1x1UR7JDqB6sR5EVFPZP",
  "key2": "5A6THFvJy38GrGMjgFgvpJ4cdENFDhrspmNsm6k2GACvHz4hWx6Gr9obdSaoKQ5Neynm2uD84ufLfqsXn7vXoH5k",
  "key3": "4Jato3s7wNrKGYWou2qy4xuJxwyUZixnbXi21b86m4ReB6narKdJ969GjJPTxhYph18NNbH8nB4mATPhSVyFvzQu",
  "key4": "64NXFx1DaT75Q6jva45pzmskPTacUaAMhyKorXdGC48edeDLVponH3rRLgvrvWAWWsm35aYr9tWyLvYrJhLcjM29",
  "key5": "38mYziZDByKJYHeRKCcz2DEFynQKfKCdVHs7ToGh51UT58F8dRz5jsnAs69PHKNYUz8EVJx9Cy389PBkshRCs4UE",
  "key6": "5oeuUMjEz4tdnZatUqcxgu3t13L1Hyitoq18g84Jd7oTVZkgUzRXVvFB2ZKrYFRBxmjq4qZ7p51KbFNyhdb5NF17",
  "key7": "2AWUapuL8bm72VjoVrtejFPrNDf7cQtgPUCkvfY3Yw1NmtDAeojFZU6MddbJYbKGAZQq5FAPDsfjBBcXuCdoafvp",
  "key8": "4uBzSgNFFfHRJpazzJD9n2tYp8G59VzSaBPrQNCCRwYeug88nuWbUoJBKYcCcUbMVLu1rejRrJCHDqMSErgNKMrD",
  "key9": "5tqBuH5wfmGkiaz9VmmuHDg7pXYrHdq45DrnJfkyHm9uc3sMod28DK23RFdHWH8QtiMkGf9HhVjibUmLe3cXiFgA",
  "key10": "287bWfvMXgxVUFiJ6geeZ7mn65QimbS6RzFDJaDNvZU6qDe9a8xDFJK5HtzvTWr179nt9NEheQsPwTjSrvfA3LyQ",
  "key11": "4uC8svU5rh2eBeiLREJLok8CFjz16A5J3AFW4yasA8wCSGa7hAWPhfLMSuFYgQQ4esSXEecyma42Tq4qqdr7YR7u",
  "key12": "29Eo11rZyVdswawbdZSPZeHcSiYoo1T9KMpHmBWqguHFV8jrv7EZqDoALCkzUUFWtnJPutmHJi5PDkwHxAqvN942",
  "key13": "58snxvBbDnQKWKpnzcCRC4EQb1Dntk5nUbPdrTWTeydQec1XSSybs1ZJcuuGCKRJD3tfLVm73mRS2E73A6ren4X9",
  "key14": "67aZJxcXf8kyToNLqzNGB1oJvRgfdz978Jps8CMNsKBtAbQN2aJw5FCxv8bmKrXaC1toGthpmJHBh6okMXWxd2D6",
  "key15": "27h6bUpaRtUk2vHhyeQ6Uz2bFYtKSKEFkoMw6pjfgoUh5NGzFNisAkbBpNfWX6obnj4GCdkRdLpJubiTFysWcmPX",
  "key16": "1enFfhKXiLjtvnTYe6vEteFTXpEkdxGtzSKcU9pMoZK3Zs6xDiMXxB79f3GDrBV9ZUv8MfZGkTy5mE6mQhvNewZ",
  "key17": "2pSHDBGvSzK4WTcbT4hf9WbMX12uQXsHLLTVebqKny3AbCYmirGkrpwSoQ2WYp7gEsVYxi5tJLXft3TEJPYnXvGw",
  "key18": "47HmGy7UjGZxAscBSRhvYXtWUPwKjoAJpHXXCrTcvYdVxak3kVeSYkt86zuj1wG7LrVpWHe6bFnAAW6D4XYoXJnZ",
  "key19": "5kd21AAQhKhzYFuSkh9UkHtDk3vD87N7asdcmL6vHNUCrCxhS3PYyrEpWNFXghguyt32rXuSeFqC2rEHyeJKqSok",
  "key20": "4bgA4hwHpqVN2FctGGqL9wpYnmSm4S12H9Mg6DftEz9jDi9b39XXf28zA5Vd3NUPm4TXqD4S4LgcpYeWXVB1TJQC",
  "key21": "65xRFzt3Csw3BzHZvU8n6KKLrVfnvLyCuNsSDcDC2HHMvEoX1aFD9WZhnfaN72JtN4592GtoSq41QEbWBwZnnrNf",
  "key22": "49Rrpg1PLYHa6UDe9cv2niRohBqpvR4NZXuhhfZnET2w7UvE4FAtYFGH1Mq1E2T13HcgNpyx2ArMKkmSfQSC5mdP",
  "key23": "4zxTmjqMxQgL5x5T7U7SuH2pmze7X81aGQdBzuxXXUpkf6r99WFxxp8xzJUroH7d1ocTKVR2eR2tLU8q6QaMb94Z",
  "key24": "2vXp3NZLLDmz7dnb7w8NE48x69aCRjRv9Rk1uDAiiSJbCe3BaQwZCLUTVhsTMUsvkf1uoEQM7pDYEZJhhewpyV1G",
  "key25": "33XBTM3uAM6tRUhZSkbFQd1DqngmBpsxgT5mWGYsgWjeNVi23Av9mGB8is21TECJNiR73mSW9zKBFvYKuagj98L1",
  "key26": "nKU9D5w9HQR7XA1XaXwMyg6XRFi36vhN3s1XWNeRGmcYJUHwPtUPMwcv2bQfKW8t89anZLNPU9y1nmtbb8kC59F",
  "key27": "2Z3uVtxBMVPURYV5u8xhmEpXVfmAuhkXjn5hMTCartKxRpDJR8AXkktSwWgSU8YD3ZDkh46HEEPXb2HH3a3hmytW",
  "key28": "acz7mwND7JuScN7ozrVakVY2fiW94vkvRW5tZ5SmzmwUT68ncpyJQwAeQdoadeMoyqDK7cEfNfDjoexNwWdswTy",
  "key29": "3HPTpdyJBGcYm1o8ygTF1cuiQcg2VK4RBRxcJNPyYmRpBYJw97fmYj7bByumVt3RbVvqHe3FmzNuBdC65ndZ6ueB",
  "key30": "5cfz5XV1UQVndg2cp9NGK4weMimUNWbXrLfNbh74Xd1DnHikdDihvD6ouxTnQFSuzLVvQkKq7kECFfHDjvQUatq5",
  "key31": "3LU9gWThRmPngAnTt7fQv58Pou8h6tWDAp96NTBoZzYBY7BxhczsqUc7i9NCsiCiNcJu89GaGw39gC6vjBBjVm3e",
  "key32": "2obW6dFzdrBi4NRt4KccV5XVfZ5SReeXe8Da3HFYVacdipoTXWGEC28XBXntDr7P5vsztS4QUmCAjjKKtWAK7o8x",
  "key33": "4F9AzEZ9MDQpbq6UQxDAiHTax8bjeeGfDDm6bwjQxQqB4YksJtAcGv7AmtR4XT2psz84dmza4aA5fFuS1PN5JqsS",
  "key34": "5wXJn6YpUxpJxARaUXnZvRWcKd4UE8a1nTw27nnRjrFQbpmAVivh9Di2z36Zc4Gxc55R4qQULhZQmnrPRsaahuWB",
  "key35": "4zQucsx7F2KwJ1wctN4znsYdtDPjsHd5NkXFHefYC7eidJrwSorKgkkh1P9BWLfcMy2AVxWs5NLmQWEYKcL5YvNi",
  "key36": "4KXTwXfqhNTiV7QZJ87batQ5xPKnGtFoX78dXUZzUGrZoADaY8B6UypyYzz7TrDimqzeBASfQZqDB92S3vtN5xci",
  "key37": "3GC9FbSLw34amLQWfDdFHuXiyA27W4uyqeuxp3UTEybLphZScQnjBfc2bAuwNP37EXdgzgJEoYxwC5mFfv3qcfpZ",
  "key38": "2K62gSWdqqmDrq223VgbprEhodvT33cf5ewiCQE95HZAtyzQseajSJ4P57i7BZUGqsafyLK1doEKdPG6kbZ9cwGr",
  "key39": "2dr7aHGMFckgk9gCSK9UnLcc6zW9Mb2EXkwrtj7fRNeikxzGBxTPhmEruuCfExctvpxjrsRipAmPgpNdJCYXpwGi",
  "key40": "5a9Q3wgGrxvgocETdSGrfobLsWHz7yH7DWWD8JmTzLfNicw1vTtEDij8G5BHMFtE529uRASiLs7qLxNiZsmxnEq8",
  "key41": "5iaQoXFGa6m5XRKjA5rLZqfacFMtAzF8F55GmsRhZS7kkSubwEaenY31sD7tUguSPAYwLeutdMPiaWMaUyB1J1Y5",
  "key42": "3HGu8xy1jMtFviKV8q1arMeQ6JS8EQj1ekXMw3cDXUiLXUqwmTM6XgxEUWD2QFxHmgMkcxUNLYhscPqPZJbbWhVS",
  "key43": "5XoD2BBRtpSVqbdFeYR82c78HACemuBT9YjDnzMMdxszsW3WwE8nvTTiDXqApB3nWv9dfBKswSp2HBUT6t6LyRZp",
  "key44": "2QYc2vEW46Ka5riLotZuYo6ZLypQDVLfQhoXbbkfLGEWJTANZ5ZZdVuxMyMg2WwMHsEvAvfTBWV7i5h7bEXkn57r",
  "key45": "5aTqLiuSSizW3qPACVsTPYqHivK8BsDEav2biT5vr2ieH68gu9MDYKUFWtUmvD8oF56Wd5xwjwyLih15ES73SHqk",
  "key46": "23v3p27D2KWPEwchvR1FVjX2Ka7sBvLh4K9Mn3Ut47N7aywyCFwBcWchG5QL87ibSK91BvCmyG7AS6JUAo546Kzy",
  "key47": "iL5NU1aLxXQcWn9DY6NMqw2XC9zY5f7J6vN3XJh5q2K7ui5Y3HEBY9rQEBopSWjGBpFeRacKmUE2TokmoMFc26C",
  "key48": "tjPFRCArGdxjUoRuYu62Zmu5xMpAZsruxJyzQEEwhbjmZY6u9Z8zJZ3wF4vnMhAKQjY5qm9CXgWpATPiWCRPLif"
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
