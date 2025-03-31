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
    "3MpJzMQCJGsuYAzGAkd5CxoYdPTxi6ReN9fuPzpVUhzEhyW3KDKndvkG1bsDrkSxUvgBA5UxNmsRA75eB8oaGaY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XB8jhGmX3k32dBLDetf1R74NozGbdbyPbGhsiBPr1vEQvaFbfgQ5feuSWnvcwgnnh26sEmiXc1Wbn76LtpXjLxU",
  "key1": "3bfWddaSzVidJAWcZrppe157bfWPoU7Cw43cqQKGXE5iTH8F3jy6FAzkFSycvJhcqjmWFHL4dHcxjoM24RXUG6MG",
  "key2": "sDPsAR4kv3zpzNf8z51LTnL2bsocuoN45DEr9jLXuZSwspiEmwLxD9rvubves43jxu1wnzxgDxzgdirWuynW2xv",
  "key3": "3CTdcDZeEc1QB5C9Yr4YftyZD4888x1abWL7cseQZyA7JoBiiooqisG6S1RyLv3hQmAhhXg7W8JXVGp755vF2kJj",
  "key4": "4GVRVbRSX42ASeHBHrdK2iRvTLBQVDLCD8yZWT5DqxcdicuxnjT5YW5QCE8ZQjAXmiYnDeUWFuk85vU2DH9iabkD",
  "key5": "SpQdAC92r3iS8SRKX6mxT536ZmnXxd3tqfLFCrmWm7oGE16dJZAorBDLHa7nS3fykAaehwE3q7knoTSunzAHUnW",
  "key6": "5xaUmCU5SAqG7X8y48nBiFAWe2BukW6Jf4yxRoyAccaD4go1AJLDm2GeM5V4g7TBecpUaPE96e8BHyNcvd8LdeBn",
  "key7": "5XKSGrvZfNZGgJQBZeF8Jqm3j9wkyTZZ4mpQyVH4VVdughP8PPxS8ADSAyoAV2xrtiZpnBvkxpi4iKXXdU2p3SHE",
  "key8": "3N891rdbsnFi5P6x1HPmBjuDYmWVvgU2g9GHbsN6Njy86wkrnBcpT4mkg8zEULwR5gSM39qbvsdJRHLJLpm4TY74",
  "key9": "4EbziMryeKuhA8u5b6WeE3vp4KKrbUFY2ejVik3N4XTY9KfYYvJhys6iPmGPpYrr3CpaVMTodKrJnfcRxdDrxxM1",
  "key10": "ZEQuqbFVY1jA1x2zKxpzy6PxQmHp4ayAPvFrtJNc8gVVaNmypBtQ2PHFvFdy9fKbZVovwiB9L2H2vpHQXZ5C3qa",
  "key11": "rjRBi2aaJrJZeSoGxHS8WAuMfrfo7VPvm1AwFxGMAdd71H4B3ekgxrfcSiBTyjgFN1hitks6iBiNa8Ucs1nXA44",
  "key12": "2icyy9yWxRvQ8UM6ZiJXCHWay9ZirXe9xYdrGDtdesVWnxErtoUZAhFWaS22faLTjx2p5EBVUTDdC1wDraZKFfH3",
  "key13": "2pnPW8rF8egTYjDqwz5dcELEZnimag822cJYGmAYaLwkxXNDPpSR9rXMTFuh91LWTiPSUWRwUfjniLKbL5Aoo2pk",
  "key14": "47dr6fKoa1bfFxtZimcdfG7bCurrnvyheqeFpYTaDz3KDAamjohGrrPubiZDquZxvtc4rsvcTzdQeX6SSV2bdWD",
  "key15": "2LePP1T36w5HHXpczQjNUk6XCoSqE734UXJ3JUw88orEgXjdh4iE8nqe3nCWc68PWSq6FnFJ719Y6s1DCGoEMEWH",
  "key16": "5FmRHoQ6a7zHpPZ6xqCDJ91ryWHVZjtdvenXkK2vgjCz73mQbSs6s9EkHV21je3JGA9vMfmVuZYciCrcmPS7ghPu",
  "key17": "5XmUGZ7dDdr8v3Yd5dGmgZYjxTQTEmfpNQHwNBYXcVeGfSwYp7ywAVEaqJm4TcUHsSa3MDoFtUPZwkw1mzgwj5Ua",
  "key18": "ZGGVNADzcYXxwwpznx1cNXEt5tMWgm686zMxnCgbKKGjeYUZ7Hz4jHt9RwjPEeJn9HmThd47uMkDb9oxrHCz9ah",
  "key19": "2QoTt1ZTHRDEXPrZ5CgiV6Fh6zjpFrworJVTbRUPKL5Wpe68jgnV29wmwKdTu6embFgtf7821eErWowiGQMfsEgU",
  "key20": "3TuHXhx9V6Xd83WpHZdRvTDXm9W3LjvzyKmBvnf3ygbjXL5sWBzfo5CoMKB3oRYaytfcUgvQjzwZBvXq8Z5w2pgi",
  "key21": "3wY7GRb99JgL64MXUttcMt6Am2JqjixNYQqyYxxyEexubCfdJzbJUWGSLuwDoN4k9rSV6SQDP8XLzjAnC4Pb5nf9",
  "key22": "2pkaiVioHbZqP1nRqgVwgac9qzEZGyqmvNBqhYFfhM5pzcwsBbKsWbGhLuqLHpEfUZhHUC9PrFPsCynuMCrt5Gph",
  "key23": "2YbtmUqbJwjfV7QUjNk7GXbABdkGFgqrZye82fEDMNaPvUsDqZhQN3sPQCnHAYXvFTDp1qDXFTap4mGJpRdPzDFW",
  "key24": "3wA43B9NZ2tfjoqRN8KDfnGeJKK9pCYdvMifWTCqz7xwx9xntMpxa8144owwX6xCFqjRDe9ZtX8dps5nDzCcd1hT",
  "key25": "2ETjDDgPxnwjMGLmhinb19ki1XJpbkgD4FQXbpMLTPpM9YxCGAydWCf9z3DUMXHWCwBSMk8ZmF55r1XusfSbw371",
  "key26": "5MGxiN4cbqExVDtmjLVrMFfbeTzGRPVfDAr4x4s8yjdmvWqahDPWFc2tWK4w5u2s2hZ5sWTTqh1t8uij4gFWG8Ew",
  "key27": "5j32GqGNtVMC8pKFsmCQAqBmJBHf3a4xtaEqtBSN7uEumNqANxtjUKZB8hNWx6MP9mpkLWcEUp6XGShkezAWS67h",
  "key28": "3NiT57q6mRsNxVeqorAVyKsD2MBtwMGXG1oYEk3jP82xBbYVvQD2b4yKi2ZdD8nQ4NbqEsUVZHZee8BXYywrqR2i",
  "key29": "3SvCbZMog6bfVjAY1Zmb3ohnsFeQ62WqAbwk4NAqPLs8P2mMJXSUkp4NGJUh63Y5CytVxamvS52vfUDy8x4XuUD5",
  "key30": "5c93BhckLxnTSeABAdv4iCotzXPSyhThbZMraPZ4oDKvmeLftEin1njDrqnrTaddM4PmXyw5TCv8gT5y4bKSYaAd",
  "key31": "3jhWJLvJBYuWUB5AECM1HHzhxNQtBy1xBYSHULXRNtjqZPup5X9W3ZxAWggwJVnr2vdSDQWiXooG18Pc5FYaKTsV",
  "key32": "4bCkGTsc922nZBDus2cek12ohCLUmnQQ3Co6qtgxYAJ7ANk7Wcn4J6byH8DHcZANuYurNeAk8TGXnCcpShqiUapW",
  "key33": "PXxdrQ3sdyLdoJukvdhLVHK9XYd2aGzJUwKfm66gqY6pQk1WQbpiL5yUJk9q8gAQpp9BCL7RbSf9RvNJrpMu9FB",
  "key34": "2U4CqhuKgkFhQvk3Ag6tVuAxbBp4iTh6BdYaftebYQWgr4Lr87vSDCchLePdKHanFb962g6s3sauBPm74s86uGry",
  "key35": "4FSZbC2gvDPsxA8HU8ouAucFnGv33amWhaz44vYd8NUesEQfycdtdAJ9kYtvsm6iqMQuEvpMvgyDnBNbUFPA9Wun",
  "key36": "5qLHejeHRSxnhp7AX97Hggf1HNvRsFEcnVZ2EVcWfdBx8x53RxXrmSPBiCAT3vUBvkBDszASAEw5uK6v2tvENkWj",
  "key37": "N3jmBdNVzE9M1jdPLjsFdr5q4BG5uBTKdfrb4BUVJXg7osQRTMcruMS6MgcCtnBugu5jNti1eJkVWvQNtg9Q9N8",
  "key38": "3iXJ3VZeSXTVnWqTT7CCh6GePPrCHtjV7PDuMEdPg9BFF6mHWSNSYn4zDA6Cfmjn3DvHpPYLj74vfv71hxmqrTKU",
  "key39": "5rwTGgGa5PnhyLhZf8Qf5WfUGwDJjaYS8EkXTEmNTzwDxVEttAQyXoF1j2fwcf6PqPXmEZuhdvp1ZTQAap1jKrcG",
  "key40": "5mQ6zc2yHAWofKrGkRKaQNCP34MjUrtZr1LMazy9jhmsMMYYSiAdMqGcuJuTTQsCu7DBCnKQ1WMoqQPbD2xLvmfS",
  "key41": "55tU9k5Zs7XGTB2SgXuqueeFyCdoz1A2EsWf5heR6DstdRyLdBEuf14a7ojmfmZobMvnst3yNWQKyzczBwUJAfRZ",
  "key42": "2exaA41s615z39cDxMyUrvA4T2QzDjYBG1htjCRJ7A3dwsEWvZ7K88uMgH3AkmXSKpcmj41xC3iBd9poyynRmXqv",
  "key43": "3SWhEkkd8Zd7EW74NfPsnLGLffv66njHbvH5uiyDt7xTZvLeRm4hwYRbr5Ax1yx8doxuQhp1Y6S12brbMa9e5yBe",
  "key44": "3Jr5BPdT6if4KudTM265BCb7jPEkdpxNVmfYj2gqvAgkB4YVwByetRE6iBRDAqSJAoXHNzKspFnoquohKJkZsAaM",
  "key45": "4GwmU4wYn1Y15x68GmjYoAxHifHhhAiSVZ1rA8BL9QDmnTBYT82YJE3VYjpFECgz2EfTsns2VrdMuzUKB4jxhLie",
  "key46": "4MZc5hmV6pcNtASec7YsAsbjgW9sxLC2fNNLt2RQtYQ2SMJKMewqWJULbXwTUftS1snsoJivuPEG6NpvQ8akS47s",
  "key47": "hyjkvvNFxYgYCB5RYJw2R1neLc4H2yYJJ4L9Diu6f55574cmDKTUKhzSYUz1VLhAKe9669yDxWKR42D3myETzVy",
  "key48": "9B8VWsbwidMouaMhfWv2ywY9BUFiJCvXjFQk6HwN17aZ2cAdFCGykJUdP6b8XK4H2E3FX3tstB9pZpFSWAox2vn",
  "key49": "3imQimnojvgAyww4MFFW6NdJyymCYMk529wWgsSxxaEbSdvipgMedBHR2XP84NcUHxrBaNNhky8PqjqDNpbUK6Da"
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
