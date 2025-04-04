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
    "3qdrVXS2tnXCx7UHr4Eukp5GfqcbUKuqBvtPb8dh2tPMCsn5yDy8Rd1BuBQNjVmF6eYWyBUt8ZEASYCkVfKLsxup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BdSEi3oUyzJ3e5rjtgSmvBTxMNaZDS7s5fk2VaRronUT7FYHcvaW2RLozJSntPKmSYbmnEdU9NtoMeQMKhXUjtq",
  "key1": "29ez2eWYrFuERQwMCGJBqYD7TEVK5GceA5NGjyHX2L4Hkgfxgeppv3t2NDSaL9riTL9QksvgdeE5DYNFNMJfaxEm",
  "key2": "gxYS9553cPvEdXEXgAbouzdWKfgXpjppFTbb7J7o4GvxhWXNu5ceZqJpTbcVCBFpiam11dk1in6j36TTqBG3r4K",
  "key3": "oMN3mxdGgFThVikLvWp9tpdgXx2s75kdiiFDFTeccqVfvkPppzecjyuShLdYDMBbwbLWHL8x8Q2JHcAWY6Qujif",
  "key4": "87KkvXJWmi7HTTiAaj19b6eBQmN2YuANVS95fExnARhqhFFMuhCiTLALo5kgTcD7KiB22N2aGxsBGcdMEnunew9",
  "key5": "64Bw9boB6EBApr4XeRnAWjsryJDzYkqR5R5XBtcQQEKxS6Z1xACjFCDC68VMTiD4tuy56NVwkZwPkLYhxGHi96j",
  "key6": "41aoNrWfcv4Zy8jBqEMtAJxhwF9a9ULSkfhyDq7rvbXuzvRyeCQtAdbDkRx44CZjBy7SaLRy1tq1qzVL1eJFBrFz",
  "key7": "4ZzHYY8kZpv1YhCuX9NZ1XE4xSN7YyeWdaLThRabUkCjpipiCpJoftyY9CtyMwtbyw2yMUXYAGXBGfmNfXCWxAZi",
  "key8": "3iqmw6vDZ3MtWAxKZcQXJ4r5F33XN9JuFP6zWfVkmachhi9vurnXnbzkL6KLxViiHiT89RWdpWbsWWVYJjcakh8t",
  "key9": "4dSRBmQ2tZVTTVWqUkALKy2aXDtj8bwy7kcVM1L2y6EG2hd5EYoqcDZshoCshF3GD8HdkJrndSHDWWtRYtoxFir7",
  "key10": "553V8qLr3Ga2gkUzWhyLwx5r7q878TZ9yFkepc78pvbS5xPmNkuagShnpVoya2THnSWyCMwAnrNvecAQyYBSsJhX",
  "key11": "3TQwSVAPuBNVaVrHXHs5ThgrSa6KGDn6ZnVGxo5MEqTfoYvViCTETtDAp1xHgHn5VcgQZnXZp7sfGD6eyCZYNZGA",
  "key12": "WrV9wFDEYB33zG91gU4tWCEU5t7x1CEDQWDqCEG5gS5eN1JYcaSQESiJ91ftNaqcqwQaRfjwBBcPw726WH3qd6N",
  "key13": "2kRAqLLVgcX2xNLt43M4btWMfMqZgnRhfPS2BqSBqAbkYd9snbHTuvjpG9dMfdjmXBtwKhz1v8mCcLNKw5dSUhbo",
  "key14": "8bkgRZKMbPuAYeNePkwCzs8nhSJtbQoXJ9X7PKWknPHFy8hoyqPNy6Jd7EqzYhs29Pgwn1rDsCovDTmxixibgL8",
  "key15": "xjfGrrMgHkj4MGMCgrMkwd2z2JoEjaTbBrfVgmgCrMSTq35T5AGMq31vvyzsNouCg4tmW4FeyZdFbgs7jmqh4GP",
  "key16": "5pEGeiQ5nUF1zHpnZVuZv9QKULcQjckdk9gX4UVNfscy3oA9Zp69ErULm1wgVrQRZzkGLpGa6tbAUgo8PZidfE8J",
  "key17": "arSxahEMqp3BZvYvmDGcD9BceV6aZNSMe1UeC4Zxvt2Aie8ZRVqqw7NF7sHriybdHozZ1GM35YKZWifFwfXPoqZ",
  "key18": "T3hEM7SSrrQGo1w9KhETQHuqyux1FFkzhJnEY4op9vUXmFxPq1sARa7bCvj5EKUVFHosdGYFA9j1DQDxbRehmja",
  "key19": "3X7xiLtszDVfdNoTWWt74vjij5qRcs3ET5fjLKqTB4m3qKz2g6QXBdg7bj7SbozZANxxxnMh3wQcXvFMcEzqW7h3",
  "key20": "HZRBvt79Ures9vdRwPcSw7VpwDE3VZiMsc1sPB8wr5sCksRHYMp8VVDZJ35U2Pypzouv1BfEFozYpnNXTnA9iFV",
  "key21": "4E7nnXvKC8oThQMWZHabRSB3iZQwic3X7gtoACoJ3tie1ELTVLNfkGKApzpojMuuJwncFZaqLV8y2a4zUCsBQfMC",
  "key22": "3iTRUubAXknBB3fxb3ZN7XhkjhGLsctmjnUyfHvyEkyDwikMMf63tiRGAkwtADstAnnpdoSvdMUu4ij8xSCE6qNf",
  "key23": "3zK9b9MDPCum5qqhA9iR5aNdLhjMXZAMnizmTrSRHFVrtJNiTdycnuUJrF5xQhTvYVhPZfgxysRBme4NKhLhQhPr",
  "key24": "fYnppptVZTmWnUR3G1bkREkuAHpHV432Lujs2XvTYCsFVbauXci1TA8RAUV17qMEa4mSJ9R1uYUEuFuioK92V6h",
  "key25": "MHaYNxjfxijmHtvV8PS53iqVxRWRLQSXhhJjrJDsVG5qEU7s6e2epyRC3aXbNk8SNK7inqqKUJm2EcvQk9uviUh",
  "key26": "2zKLXcTqA8ErVKFatvgYKswy4KG6LBT4G1MdNoyakCS1WJabmkp9R14g5eWzruhe9t3fbgxC6m9Rm33KVjQE9xZK",
  "key27": "qocp9LAmFpRXrpjLm1qWddiiwvSextSxwVpCWXdStJuAL3WnMPkkExiz4C2FhiKVQ3yuYmLpyKqDGVMZzZDpnsd",
  "key28": "5B2xbo2pLPqNK7C3x9FToBSQgCRV6AZJy1nRyXXM42eo962s6Wi4SZ2dAnmuxSp2hH2iDsTz7GWXU7zKeWGuHFrf",
  "key29": "3VWeAhysLP9Cnb8fdPwyYVWA8vwjTDYx73MyB33dVYqzZ4ufEpZt4LH1RJbLMgNowVdfpbEdX2hVihWvkCqREeBe",
  "key30": "5u96EEGPjrsKLSeqaw51iGpp9y9WoqDiYJvcJ2YMtLZkZPJ9ouha3mheHLBbDw6PTCuS9UWwNBBFfEsmqBtm14ko",
  "key31": "5vzDRtGfMGkV1xEsQKTCtc9Y16EKfh8wPL7MBPDUnusngqG2ZR6YimuHaXDh2U99STp3sNeYcxJnh7d6GSKQXut3",
  "key32": "2FBAkvRsujYbQWCDXEtw1ZbJjJEQ44NmgnZFiySPZzc6krR9gz53mgi5KDyKkikqdacfHyLk9B62X1trBFCUsyAs",
  "key33": "3Lviw3zMK5MaCzxuHVJqL9YNBkmLHeJBRm6NKeJ4Gprvons4fFomr9PgD34pPuYMk9cC6A4NgVqucY8omGuxubqN",
  "key34": "33GMC21HQap9BHKjokMTxQx8MpMtqN94HTJV1L4s9S9xNnffuvkyVzx4KYEshJW88a4ekLhotpiXkZXgQ9mbgfXN",
  "key35": "3WVonnHGTp3kEbo9sYk14gRjNLMtxc3KnfibwWKwiNfGfemQ8LuVbCsJzLzSiGERxmQUg6dt23Nstkngp5Jry5sF",
  "key36": "4QnJiQdPLNEBrhYUphWiqnE8JP7LEFeZUWgXLJvWTQHqGjckv5LDpoS2ukTbuStZeMXC6Bh4rLUX2vK9H2YMi5tp",
  "key37": "4S9f4KH1PLXU3d8AkBuWGg54auZsseE8kyqriz27HL9GmChWRJfPTdYYCb1DDhgafWj47CGESR1EuqNk4xZzv3yb",
  "key38": "63HYAGqFf8u64FhEj4VrdCMt9dDwDTXtuBoDKdtZoKW9T5UG3N2po3Dn2nex1i8uLvr7kcgtHwRzVpFtfjPUqNKM",
  "key39": "4PwVjLDL3k9hvirmwQwHkZnU33Fp43YrLw1VNDEa3GFYykieNtuix8LyaAEVaV48H4gjFZxyeS9UaPKUzeg3gBaw",
  "key40": "y9hRRL5Ws8gFKzo32FyNEXSUJNzxFgofCG4anTMbgfb2uq4qFj7QLyTE75neVZpuBsoAYUTFBdUjd4SUgWTyPfu",
  "key41": "3RViNhDQByEn4bpC6BBgBDM3HbN5kAqbgbehCr5GBJGebVr4Fegy2U9QeL2YKKf8CosE2gBaTCasfFRtaDngEKnZ",
  "key42": "4aSPdBCWs8Yqkye499A35mAUmahNtJ8sa9skDMXSE5b6Rn2a3GsB8ZEFhvpeTNXyFPL1pxM6iZh6yCSX9MYBjAUS",
  "key43": "25BML7kjQpz3vdBADfjfMdCZQVD3X4ECLzmJCiDLt9dco9VHev4u3zmmhzxkDFjMwkLA6ae2Ei5zz2Hk3vdFya2s",
  "key44": "2ccPQwoMtG9N32BPM87aAmzqirqh3miRXfd2ZLcPPvCd2748Mu9UT23NyDjXyQiBGqrdBtLDdtCgH7S9g8F7EvEy"
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
