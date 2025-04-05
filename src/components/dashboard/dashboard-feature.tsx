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
    "5aEXGWmQ9bMTAMmJ1oA7LpMzFzSxQsKfDd9j2dPJiPFUqga42tyvMZBUk3ukv5s5KBSpWkkMpdEy7wUDArH9PJFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gu5xmLThUcn9nkN9faFcofvGTmPEev9MwBRARK18nkA1br6nRkxNLeeffvui5sBwKbqLVPiQ8rbYfFWtsv8VaAn",
  "key1": "KvXrX24GGy5wcMgUN9Mb9eBhqUyvNf1L7Ea5Uw4q8ua2hzpwZteGsfASw1bfyyfiBzy2QgBtghVdPSJF2yh4Him",
  "key2": "39sMUse7L39jath4D1usviNeoC8GuoTUxF3LuGm2c1qwBz4AX2aC9oSVv1p9WvMAyUERaEFX5QnWyFeL8nzjGRgu",
  "key3": "q2cLFMwDP37etouUnYf882eGbbzKAFjt2PGwMHGZDjd1awmkmZwXx7Zfrmv16gx9Ab1cHdyE8VVnqPr2CzGYVdi",
  "key4": "Kpv6vaoXp4GhYjtGK12inJZRbsMBgV9ZJevrhkMKcC5qZsCTxoRkvtLVGR5nCJVoDwwkkQtqwj3ZTFge1S9yfE9",
  "key5": "3QTunLwt8RAQ2ooSBuuDbGeWoCF8hkpcRMKGFcvs7Q8HsbkbXL7kougfJAC6pR9jgArTj7jfNH4RWA4shc4mLeg1",
  "key6": "4i6Dd21nDAUGUyHDqgC76GDansRqjkKUKokCo3x1WyYCatkDZJkJ76AgmyNX2Lzf5JVcxRD5ABHXZDnooDLYxQX5",
  "key7": "3NLuw28ivpcTqaQC8GMAkCNoRnhXCoi3wsUSfieimbJJRL9oqaV7GynqBXgXfyJBTCUKxRuscupub8pfbFu7ssCG",
  "key8": "2gwgbthk1dSHuCtDzqAbcZbshui4cGTmUmAPVoDNb4f2KjKmiyBakPhe5Bq4dCn8btGdMGEfTyGckoyvr11433Yg",
  "key9": "SEKoJQs3HZQenG2sX1ycZVVyrTfVuFQQ6VsesrtsM9BnfMa59XaC1bQNfECZr9QkeQacYtTPRAigfaVuEt9hcXq",
  "key10": "Pj7XWikfxbgMGozwZhdwobqQs6eDrbiCHrNv1b1ZequsF61Fp24RgTcrDBWeEVtwaze89dBfNcfFzS1a84mYcix",
  "key11": "3YCSTRFQyjr89dsAzVoRB9LcsAJWrNYBVMAPEamHjbWAC5A4iRfJHPYMNZXZnQjoeRdzVsnzsGY4mzHpxBCUbyJ1",
  "key12": "2fvzHm1UUWjBa96Xz2kyW541xfBJ8WGZWEQHsK7SqR5v642gqcdHbJ4szdBvJpfE7iADKPcmrFcSUJp3GhCMiARL",
  "key13": "35XWi5Eo4uf9VpdywhHKh7AFoEXWBeuxoVP2KjgzAEBHdWaGpLhV7TmRb1H8ybmdfSYekjAPxuH7L3P8ZTAZ6kDh",
  "key14": "31er6uUSwt6yG6fSwd7n8UfE841wPrXFKijNNcQ49MrrCxMsU7H7C7QDpWLkPqsioyLhae2RaRPwu2t6mgbpggJq",
  "key15": "53EjxhjCJjPkEcBmcncqTLQgCo6FMdiQAJryFWHCFEyTqcBeYV4YULeLzxr5engMqU3JrnJThdEptGdqwCshw4Zt",
  "key16": "Yzdh31sTdD46LnNob6HPovse3nghRK4Pw1XuuqFryAaqdqJREH6jz99sZbwTibLPLS3pesCDHQFHaVz4UVrb54q",
  "key17": "5P3oaYjDqYof6PA6Ka9Vwfbbbekc83AemLWd7ef5JJsQ4H7dUXtd58r5pWPUQjcYDvx8jtarM9fMVi1fAKfLHyiy",
  "key18": "5wRR9nP6TDwt398KnTcjsGScrSQH85CxXoMPrLkCWC9d5xAnu3RQrc7bKaAEqmkJHmyxskJgWyjHMwDEcr2C8qs2",
  "key19": "2WgBZnjbeBKaG1buiCMK3Zzq6GsBUpzVtb13HCprhZ6gfL88V8heBxfrdUQ3zcEUQ7WAVwTWoNwLBgdoAQT35enU",
  "key20": "jmp619QQcDbUoTH4T9wGzDQqQ67ntwW6LMDSiyZUTy1RbAQ3We3hRE6bSieZg4AaVtDXPLJmLGN495NV1JSuyzc",
  "key21": "3CSgedJcL4Qouo27TcAqh7ZjaJFQMr7rNPeNaRkwDeqP4fALjRqq12gCRt8Uz4jMxW48KvmPUSidS6wpiWms2tPp",
  "key22": "4GrXBFjtUYQfXyABdK8FErGSaY3xaTy9kh64HerNi49yrXXcXd7uZCsAaxGoq3Sm9wgWAmTXEZTRVq223MadNnmX",
  "key23": "iTSHJVwy7s6Sgf3NbJS1GLCwo1XBXGKJ9SEdMRhFCtm4t4AAcnxonq2N5uy9TFX6LWZH5fp1in8xphNWBK7sTCC",
  "key24": "3kGXCDSyiutDWyQ47rY5UdVeZh7HBx5ARru4aEkJ6tipTjtSz4aTf9iZFixsdJZTGgHvfK1yNdCWTkRtgASnX8oL",
  "key25": "2XqiRA1AK6siBe99J9gfAMU7xx7K8FdG17sCT1kr5x4CM8hs4AoGSRSCjv85VcejfiZH2Y5jhR16p2RzWR3xNGCk",
  "key26": "3Bigdx1k8mAaMEG93vMw1LAEP2rabHg4fEGSseheetBzeGC56QZQtUunLgHyCh4dJQJ3bHABSrwt9cgiSu8vBTcE",
  "key27": "5pJQEn4tnyaLzpB5NRS2rpC2mYVQwtbzDY2V2uYE7RwkvR6sv7jojLNRkitzuFg5vSFfykh5fFjnK4Wc2iW8ib7p",
  "key28": "3Lw2acDJge7DdEnuwhU6aei7D1xfVpyE4LKBXVwB5EYNYr4L821zTCFqBZVebaXCUNvc7GEB7jNtRTL9x39Cr665",
  "key29": "94Xu27fswy4GBdoNds56A2w5rdHMLzBKYKeSCxRT6arm7tekFcD51M5NjSE4aFgmCvHfd2EZZW3S3iG1Cd6aPU2",
  "key30": "2QeisjfZgDUR57rnS1JcZ2Eqff1qCw3aZAeH3JLXaf2XbtFBc282BBaTkHrVVmMcnbhvrB9fipWsPi5SwBzAQft5",
  "key31": "4RSGy8LDN95nLAe6xFjtLG1m32xFxXeSrBjRB9kPTJbJ2MWsMa388XPKMPy6BLJkBKmkcv1yo238bTmhz1PAgFWL",
  "key32": "MDHF27BT2TjPJTUUaP4u1hUNtrtVDDdxNkfR2MrEJgPGE6LVPSmfZyWtkdPqQrCbfECDvDs5mwBWb95QzbUuXXn"
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
