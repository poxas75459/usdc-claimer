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
    "2frURPr6Wu1xgy9cuL56vbpVQU3dproMEjmiTDbDkGHXRWR4dH8NejeayVTyrV5ezzgAc2wBNNGDhQJfFWwRVFkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nJSzerTCP2q1eBntA78ZxiR6gKEuVR2cHPoiMLESd46RJsk2NqVAg1NVy2xqn9S1KpnoQJf9BZfVBf1CaCkKymu",
  "key1": "3jTVUkHQak2mv7LkH5PBcng7ysMWPtupYdLmCiVSWdAjojQZpFtb7v8h97kKLyXQriqfUr1YYxJzqWHwfh4fwDPn",
  "key2": "4B9oGWTpuTfWEjyvGdb2Ck15CAYqR2W6N3fkveStGWnRwrBJMLhZab5CJh9oABiULGgSQT4L7MbBrj7XFUze9Xtq",
  "key3": "3yMe8yA5avevGrE9w38tvmQ9XxW8KBW3Qash4ncRoat75BQVG8ABHqGShWXy9BzduJrJ661AQCyFmTcXFWhzmiJQ",
  "key4": "5zCLQAjQpgyemr6RB8vu8WUiYi5MUWF2eiu7Sdx3zXfRmBdYDo9JG5fhSMddqYHx8B79j5Y7QsFGPVigSm744BQ5",
  "key5": "3oncyf8TTA33DGhEVas9PSf3EiMp34Ho1cTPqa9ypJr2NFtHPD3PMzThEFUf73hSB7Npn6YnnfsgKYHxD181s6im",
  "key6": "2J2TnJ4SDzAJJBaXwLvtq5SyscWrWwfa5yakuyDoneATCVNp3F4wAA7xgoRezkDvgg62DyahqXB1LZ6JyntsFfTx",
  "key7": "3CzjdJ6uNaAxya6GxghL91HCntsAHdr6u1ovYoLnE8EUNHR1GJY8g1uPD5Cu3srXrG3KdQGBMZvvhMgx6ibvrgHk",
  "key8": "uqoAnEznJnEWBpAhb62ByJ5yk4eyW5KT4CVArGJh9vEnVfBN7izBa1LeR5fRF5h1WWyqi1fq6tVHdYJ3KExU96y",
  "key9": "62R6FsWQv8esxsccAjNzm4cyYHMbuvhuk1x1CT2rfJGphVrH8sUMUL2yRSSVWEtiv5b4KqW9A3t5ecafn89tYttL",
  "key10": "2hkbjaFLCQq3SzNpYS4v2H54JqPeHTv8fHLTwqCWdPYmRHSaha7aAw4Rv2bKU1unKA7XfwcBo7Yzc8FZuofgqkRV",
  "key11": "4a3sVvh88bV2orVTorXKGVEbr9uyTWE8SJYjLXDUWJM4p4WndJYq9K9m2Ti9QkgLkbuMCUH3E7RHsfkszUjV6mKB",
  "key12": "33hYTGhtXZawPaE6YpLVaULqCezYK57TAZ4dDU8f1yjp91X359VFD4DQ6GGtDt2bzdhuxT9eAGtgb6LnPFTrjLGA",
  "key13": "iPvndHhrrzf73Qvm5NR5fyERXnbewMpcFNSuCTdmBMDXR56EnAz9NPLBqEbDLBWbzb2VKGjmmXVAoMhtkKraCcB",
  "key14": "45cQBkGNac9DkvpA6cULa5Qx8APZuq3yHrb7VdEcKapL5mQwDaK5zAoGMzkM8s35c3haJSTftHapZoheduhXYeer",
  "key15": "JwJbvvYncyF3vTSw2bVK5iNeQfSkVa5rhmm1G6H5Ri585EKa8fQAgKyyb8ewXSjXD5xLCFpJq6Z3Yex8GUvnKCx",
  "key16": "37T2yktrKikwmsguJfujwZv7GtsnKCqfaZYS7bNJLjNmBfaGsjX6LRiEytgM6Z5F2TtUtmJ2twWojFsw9XtjByox",
  "key17": "4iuWr3ZCQTNHN3yfcYmVVmQyN2npsruKCfDUXYPTJEsX4XLZqGWiMUVdGa6xfbjtYgj7BtGZLguK54dUazSjmaR6",
  "key18": "3bxqPPE6AChVcDnkTB8xH19bJ9zXhksa1RqDZ563SQndjrJQ8Sv17zgUnudBs9559FfMuzG3tvhDTrcseTyvUh7T",
  "key19": "5BmxPXUnjppmue2MJp7bpPoj1ZgNpKNb5YdwAa7MMw4ojsDjrZoTBqNtrH6vr8hPqsay72bX7shihTdU1zSEmwYP",
  "key20": "2ST3F1f8rUhFsYMXKurUuGemoqW5yUHoA2C4Xhr8NfoDTVoPrhyBCMxuXxpRpknjfx5FznMpHq2LrfGb7Bn5dpTL",
  "key21": "htxYpCZeMT1yN7ZwEHmFGHhUmwdDif2EpaQ3iAQsVN6RE2QjFPBn5QTc8Lvpo3kviX5fmZJ9pvjS1RU1FzuGyDJ",
  "key22": "3XP34yt554xvs2aQiAKNto7fztk9MnNdqfgLvJgrQBPQ62UmMQMpEVQTh5YHssvJiLv1SmjDgi1FvPcb37iegzBL",
  "key23": "5quKTadjYQRG8NKuKCynZjBWRroRWewij1jqwpQqeBW7rAsukbqU9CYvPoBsWRLyvmQJNiY4LAydhxuWdyGhUbeo",
  "key24": "ARgrnArRkUmvrgvreGzAmdEW1R2Q6MWR2oEY9gL4uEJpay48bFEZQWPyPnhLAyDKoYUX5xkkacvyhA4xsYZoMcC",
  "key25": "2uEH7nAHavPccCZkkjUu3ULgRM6dnaFGh28dfbAYNwR9cmHjGNBt1HvyW39cS7aDqEWkJDHtTKLzH8tfpG34rvQa",
  "key26": "4pxU3Vnx1JQoELKmvxhhHZLwHM7fE4zPkpU2cDvgZRPJ6DmbJXxjBh7muyxg8VZdPb6teHWtFiL6Bq8ePYMUvDsh",
  "key27": "2N9aQc7W3R54TELTLcA9BjFVHsYyph38obYK7igaNQN9jP1PmVLSbbbGoDAVejGNpRrBDXAopWL3h7UdmUyxbtWU",
  "key28": "39Pu28cS14mVwpxFg3d6XojGeAJKqCZHtzwM1B8yoVBqwNw8G1KguM9EQJg8SUs9dqyKeRRrh7acWbnCJPfzvLTc",
  "key29": "3pRSrAxmswSzv1xSbGwmp5VSd5GKgZYMzHT469ANpgY6nzfLZG5vpgpEZ6NywKVW4v5tZ6poJXc7vftXXTUtHTfj",
  "key30": "4GLh3Raur7QmLFf8fHXCmcoiT64ZpscuEbnxoDDdKgqJKAfU54defneFDYvh3PP62SgxKVRX29JsFstgv9cdtsg",
  "key31": "2ifaYcTcTBmMQuJzXLvFVSUUpNAsCBUcSrtqGKmFG2nnedFjKhUVYiTf6L4GzxNrCtnEa4T5hc5xV5KjsmKSEWVw",
  "key32": "3GFf84ErSTHTAS9jpTUWLa8ZTzaFf8N9Re4tnnHKbeihYPUFf4qswgHUK53nNqDsLHLfa3R4egsr9gEWVUtGCSV1",
  "key33": "5dmXrHdh67Rs5pbu97p9XUp7g3YxbZb3v1US7GW68yaYq26EyTjfJLeYtcudvknUbuq3DzAvqumJmbfWfWBeenXP",
  "key34": "4GABhc8DGocncu93cmsrGiZyvaCEku4EZ399YWUPbo2tZDynZzdYzaWBJvfzDAJi47zmqt3XCpntkP2RGxvcUvaq",
  "key35": "jn42FvPhneZ2Whp8MomBDTddJ3tSDkkMrexenLXsYq5DUHzi5RvvibV5FgvGeVvNi7F6AkXBSB874pAsMpjXVJT",
  "key36": "4ASdaB19Sd4DUSKkeVByNTpK9PaJbHrknEXCsiTvuiLJ2n2wiKTzFC35n6WsSqtenAd4U6gomg3SicKX5uBpHCmF",
  "key37": "5wnsgLCCsFN8n877BX7uqw5FZGYnvs1KZEZSidNL7pZaFEdC5YMcSaqTSqdEbx6Zygh4JMi5N1mpWQCZRLYBQBH5",
  "key38": "2GjtDEHQ47Pkutyd14VcBRguB9MnG36AExzooCKJQHgb8x19N22o6gLngzaZkGUxmEpLZFZWkeVirP2m9wQx8Muc",
  "key39": "5o7YPJcfVLRU2NYHiAJN46vEnHcrAbQprcSeZvQ8QTGpAbVVEcqGq3zbsSqiqrWrV7KGVrmr3HhFmbAXTJzaPTfs",
  "key40": "5gZ7Pq1nUVkTakAAonN6hM7RwkxK99FkWtZqp4jomfxUnwrjd2cpPDL12yknWMPLoKK2ZbHDNh6LUabBsynsByLR",
  "key41": "2HbtE66HDx2AB1vvwCJhWsquMx6z9PL71E7ATZ8dMuS89XxVo3RCJGoAq9pMw9ubsuN9KMPakHiH4RRGpiuaPkpe"
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
