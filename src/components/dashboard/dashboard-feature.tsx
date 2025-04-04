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
    "67SUePtq1M3kVYSiRYd9VzHE25SbZ9YreTXyuxKuugrHs9fHWmyM8GBV9FFt5ZJQhy1B8ZFo4MUcBEop4Nc2tk7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QJiV5vY2GYqc7YfBSZiE2kSMJjtXq5nCq53H8rJrR3vTPUPQeL8V5yuA6riqXB7NGhRgDuR4nBhJDMVQebWFZN4",
  "key1": "5GVYFcLU2x8b3xUDLwigYVWLcUWNTz2Re1YSBGbxNmqDFFMJd9PQ28hypvSAB2YustuTWNSCyivqJLeC8SRgJWDt",
  "key2": "darEe5bCmsvx41Rt4rLwA6fyr3NKpJHXY6U8nac9UgNZS1yvGZnNdWWhv2hJkRD64KhgEC6gq2LDaxNeCPgVHjQ",
  "key3": "2Brk5X7YrxuVBSVjxxjbGe6YULXm9Y7NTqe441TcPg5pGHnHEYtXEh6fBigJADb92s4hQqwUhhs71EaPv363bijL",
  "key4": "33pgerJUjvnqXT2VcJTgzbZoJTsPasRm8nPxHWRjbN7msKWjYuj3Ahvmi8Uw9KZ2sh7igQTD6adeSnTo6p29Nsvx",
  "key5": "AoT4RnyTLkvFQjJqsUt6gbFrpj8Gx2xhjhcMDgRLdBsLwWN2fhvixqQ2ZfEnSXasMrN3czKFtETWYuekS7GzFfh",
  "key6": "4frrcGV9hPjuHQEncgHJExLkpeavRme2XFk4zf1o8jpiAd3GMkM78anCoS2NNepZptEE5zct3RHGV8fyf4Z9D1NA",
  "key7": "4vrZEnkzFsX6Ck2yirvU8Q9D3JweGWxybPEUqCksjobN3CmjHZPAGdxWByDYhXgc97Uykz96YPvzJJbMPEayyAAi",
  "key8": "3FhsPk7yQx7g6sEUm5Smp5LephmxfHAyqArE5j9seJdvRaZCAE8AsTBeaDS47YpUYB2wyso69gy88QrC5ssxy94p",
  "key9": "4JqffEk5W8tBAXzHXrXijtN44Xn2dwmB7HbkhunSXfMJuRBWGSdVDzRxFD41JJj4abnFy5Pd7JEwk9FAjX6qaEWR",
  "key10": "4b3bG9rW43JzUBJ7WFNntGyPfxv16Xvz2q9TMbU5q3tzmV82HfWZPDvyK1UwUMtpYmUDm7xB4RBZGpwwCNgVzhs6",
  "key11": "WK2WNcnrFd3MFuaJq2hyDWtVxmvsRGMQLdEC6soDwoXxM6tqL3T1PauUBrBQBoYvH5ufafrPRSzotm5SYqDavh5",
  "key12": "39GV2Bb7xFTWLRX2Ym32XkUhdMwv4oRACRGQ3AxGAqtXKni1vABvZB9eLbMNypunsqdhB4JmTmu1NMBbMQeLT6xG",
  "key13": "4CYjkbHvgxexmpkGjgvYogKdYsEMMboRP2jvmcV4u2qpo8curCDKqeapkb3NqFytsRsRdoq2DqQe8KWrcspD5qDp",
  "key14": "3diXaaQL3puNE71gJCfWbVPzeajC8E3MvkMXRegJvx8ePHmkt5fE3evfvd9N3bEU99NbUF6CL826Mm5m3g7N3mjf",
  "key15": "4CWUBzGixCKgWiNzKdQwDbSzuzvWQyWD5vYmxew6ddBkN9bDbdGiN8qNxnszADAQoBqvZ2BffPBjWDKnWM7ygpXq",
  "key16": "5aXyRh53fWTTnN26Lxna62cUxq2tL7utSEwkegL39TVQRfhAXgkoRMJPNSakaSBEHNtNshN8LRf64Cnq1YstESFL",
  "key17": "3rsik4tfLqpmvGdWQdLTuCZvEF6FHGtRYDGjjmDLtP5XWSkXtkTMexxh3V49t5qvBz9zzG8HFcb1g9HxviXWyunN",
  "key18": "j85Bg7dUKvpw4vLNdG78SqZGp5UoV9MextxfLq2FNNoyogxC98w6otJyVSJjkV2nJJ7dGbTo8ttJ3PMch4TcmgD",
  "key19": "3Guh5xyQ3cqduGuZp35aMSzZPvWZGNMKTiTvguRgdSBM9p8dwunh6Vy5Yp4dvPoKh2ZhHLjW7XnWqsWwFNcLeh6q",
  "key20": "3uPzBLSVBbyAQ2k1HhzubTqi48ThRzkbRqV4BHkzT6NTdcgT8BXZb3vxg1my5TKyi1Fsx4tpDTWUyWBhkp6MFe3u",
  "key21": "3iYtUBiu6RciAgZ3MRL9q4zqWUtmA6BHJeom3JsCjdrbMCowncgqCpbDh7DEtSYaXpVCJ5HFiRRtmRyDnfQxNyFg",
  "key22": "48kj8HpqmobmKfBtDMJAmWHApbui8h9hFtYsRoQicTRRx5vVDYtnR6LvW2ZGhkVnbf3KmUj9TQzx6A6EkDtnfaq9",
  "key23": "5iL5253tQCyvJfTn2aCb2D3C6EehF99HDxEybsfB9VijDgesUR9w5EM5YQBFLh8cxwY4Xyj79hN4WZKTgaotpaab",
  "key24": "2MmpcJfof7xpjhiuTT5cHiWRSd4FQW4iLZWrtRPDSpNjsd71tPzPJrwqsU4AMbkw28JREhodBiwKCrPmkuNCnWmN",
  "key25": "5nidSaefTC1z2i1DSLAFXJkbQm8fj7YmZZSpecAmagaiHoNqhC8C5QVFHxKMZ2yhKAMae9YtAWeLBQjsjqmkbJ24",
  "key26": "THYv9ksZKDTJLY34qXCNCEmtSysCZyM4Gtvakf3ycpzAbjoEV8dc17NeVXEmmbHnetxPu9hYPNQakMox51XxDj4",
  "key27": "4sfBxkzb6WuEk29CNye4a6GSHGqwW9WFNNTnfRShowE9F6G8qAcS4v1LyDa5dzA1AtmKfy6E4Qy9zeMeypkYbi9u",
  "key28": "5DL5SSYHabaVmD614kY5Qp7ijXvWodNaRpQ4442vaNoGTwoMuFQvwx2hMDoJtYUVE3m6EZ1CFrLn7KGbf7vXZ2gS",
  "key29": "h4Nof6Pnnio19pJtmLpC293xzpNr17yo6Yz4eev2AHpnctYzfvCHTU7eYX7NUPsSFCwD2aW8qXpsRJ6uVerhibb",
  "key30": "3dRQ4haFrxPPTbWd45NaEfHb6YCYEBHCBP8fpJ2DXwiJanwNvWMjq2roZE6nqWkD88zmb1KbUbX4biovSn1NRV8p",
  "key31": "4J1kvg88qDQsq6rdbKYKqYzDG4enCy2njxijw4iUgS8DuzE3zX7rF3WvWNCHXLEk5znyUPG8uhwm6LvPsBYRTe5n",
  "key32": "3vswmpSpqWC4bVYZzJe8XFN7BmwfJtrpxPPabs88NqnimNfTPju5Len5ZGAGbePvhpwbZZvcYuyXoktxaaHWV4pC",
  "key33": "4saUqhYQyZacFhe857DTM45aFRreb7cxLzSuE8SxHx6fzaiS3EL1G45kHQyzXX6fVFmAbdPmzY1LUrKBTUaozyRD",
  "key34": "48HqLXah5KcHAxhWnxuH5FTNfYYqNkrxoVWrs85DhMPrF1TnBXW8o62D25JESpeP4VdveccSnSRDC14ebkTRTCk6",
  "key35": "HttEjNnRe88JzR93mKFsXZsXG3vTdGqwSCyDTAo3atPMfEzZ6NEmpuV4MknJuxxhX3jj8z3T1PZpkTgNBQzRFP5",
  "key36": "5v2rMhGPWcoXVqfMBAq1jFgSWaueBQA1RufmTsUQYi8tVTWwAEAZ2ZzzaY638ApaZswiLwCVrF2ge6ERx88ewJhy",
  "key37": "rPi3SBk3oAdAjEKdRbSq3KAdL3begmZmCHa77qshBp9ZrJvj4tnFs8fzFHqncfBuhsxtcmcv8pddSyUGbkuDy8p",
  "key38": "4KK4yL4KkC8i7ujNawiM2CZxLd6Bm8xgv7NXZDDh9zJeNkwMDNgfJnfjwxxpe6wJEG6cKF7h4Wwh8drDjLBkxd6k",
  "key39": "2fKYemUce4hfFa18ay9286esGnVh3nj7YmDhNpJ2KkWBZJWfv9ydU52bXoH7HDbr78ntgPDsXtdsyS84T1Js8DSg",
  "key40": "4B9Qh67HhL9Ew7wecspMcqkRDFZ2mZ8Vw3TXt7hhNsGURN3Gvzsyqhivmkamsk4hBCB5P9KHizMpLWoHuhhK1VFV",
  "key41": "jFwyLX1PWd21eFd1CDioxk574Ba1y2HJB1NAMxyh3tw4xfmKS7uXfMffTkBKBLpsbJ9G42RHzQrFYM6mzNzKHnJ",
  "key42": "3fMnsuurdviCjUdou2gyFqMXMd79zGW1M1ZguofZJctnHuf23Gizu2NMd8mGzEVPASZpfqZAXjsPKfP6GqtLRCBF",
  "key43": "5zH2gwSfgKPKVUxdgudWRE89zj1TgKzEgRtKbKL2exfVEqxFN4Ag2VH9NvfwcQdFUWVNmcvY2N2ccF7vL3PeCHuC",
  "key44": "5XcGDBY5CTCYMVrXs7GRvkFKKXopdTzKih9W4Qu2nMJAMrPigwPpVYFZYvuTiXuUpqCRL7MmSC1QJ6UJGguGoNdR"
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
