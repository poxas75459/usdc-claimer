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
    "5oyNqi1zmtcUvDRW7YNTqB5GsCgcMZEXqCt9YTnoE2PdRDuciToa4GZdSNL9mufkSdp6sUQy2y3WZaGvihKpPJPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a8m8fqCGVvdT7oLoJPb3gvDdgQXEnxfpbShMv12iK39vBq4cXAuB4HoUMYfybaUZGrS2NNH1CPGZzYfDPyvycBn",
  "key1": "5L43teuTR6eWVpg22xVPNYLc2SKAsdcAic1MKDTL8nYsGt4332bb5GahG6oTc62gxADAEbpPhYCxoQhXP3jJgaDs",
  "key2": "35tcBvtKHsc1JBvPULL8yoxSHwSZWhXpYpq2ax8w6fkhmJ1ghGhpt2dNpVBzx35DXLfou1xPhmLhQZhiM6pyAiwM",
  "key3": "2uk8eFEYqUWs9rUsLBCDjFHdUp2LWJnbrpg1QA4GhFwj3SkcY1CdXmDTrwourM2Q9YrWHxu4eoebhUiAC1dyCwNR",
  "key4": "4QN8uoSK2jHycUqLrrnKaNs5h4u78jGZS1SCyCMTLej33UZJ3Q39YA1d8rL2QhjxRtH4i8dBDA5VM6F7ezhjT4U9",
  "key5": "3trtqxFhouczjJpZAptyEsWry6K45pAJ3ZwHSoTZxrzXubt7a2HF1ELrJmtY8LzeEnor29ihNkS6qyd4y2iCo9PF",
  "key6": "GRDYmr2ppFQMaazVeN4u96QGpVYmDuZi7N3URfvpBPMATDnfPX599GTQRysRBgAGvkAVb57xjmd8UKi4fAahVDo",
  "key7": "twEK7qFe2Johuft5cSoH2kD9TMb8xufKTTxmrQvypP6Qpk2FvCq2eufMp4Pva7Mnx3V84PNj2ihk7qsQc9iuhGg",
  "key8": "61iDSj9VRGAqJnqs2ph7J162jxDtbaSQtxBqZTC1EBtJsgkrQqbcbUcF1dvgasKydaNyqPKZhtxsaPbZA977ZgQu",
  "key9": "2YiLaYDahA9NW8F9hVCe5oEzddK31ACTnrYDM6eTbzFW3AcTA9mRtoTaEDwegcQmMKzu7HuKb7SmP7J13b1mNVPH",
  "key10": "5LFuooYRx8qm4c9TqRoQbGL4N2jakwWRFxYgCod3Co8eHku34keyJvTfhjj8sSDsKJTY6XocQJ8wWuHMCrmSgKTP",
  "key11": "3FtfgpUFrHuRJZaskxbxcMiBAoq4rBVGenMVbcPb2CreX3HamKQ65bxnERF3Fgm4ApXNuuZYbqmm8oxbmEG5REwQ",
  "key12": "3fDFgdDR5fHzTcDG1uDuTa8reSvnaVzH3zTAVJzagq6GWUuTMJrBR4DcVVNxwPPBHae5NpfMaQa72DJMmdj6ZYdo",
  "key13": "LnLYFevRV849gPW39ZjxkvgVJxXdHgFj3gzFVe114bUfmanfW8avoputRZN1Ei7SnRZPSb6CxC56xTzz2e6vucg",
  "key14": "5a6Y4aWk7Ztp4SPR19E6ftcspJZRnvzok7uzn8ahdJtJK7EBP4KgfPnUxPY9Ea6GXc5FPD86gVNmW5RL5ZPvPhSu",
  "key15": "2kQdApgSR4zLSngUgcsXrWTJmgQV7WsQ1SKfzFcR82JWwo1pMydAhDQFPX2XhYkJRS47kjih3Xu1aT1DzwVP2jVy",
  "key16": "5N1oKGA5Jvm1rXVXj59QSo7uyWS96ibA4dzJYRc2M3BpuC9V29ffhACffJq1ewWWieybWEbXavnDYWdMGCVAoAi2",
  "key17": "621mEBbimLfU89Jvy8MAx9vqd4wCV9nFBmcBhSoLEjC2Fx87hyvHRDBHZgc8JnL9piUQ9Rh3vPZMCmHxXLzeAftT",
  "key18": "3ytSsmnumzJAygnLA93SoTDqnzA6Lzja9r3Pp9s6dFgJSAJKuXQJkD2d9Qr7UH2GfR7GB9xLpvBWXrgaEeoJUUHe",
  "key19": "4AVX9Fdp87WcnD4TeibJJVpp8f97Ys62ZFSZHEXS7dzjKHnCpL7rExcRQBygJMi3XuFL5nYwp4TR11QX3EJw9NtD",
  "key20": "4fQEH9vYU1DU4v6pXeEnu9NBcWtijqyD8NepTCpraSfQhZURbvDyxGQtbHdcW7f4o8y8RwuSgsp8sPo6NycwdAGN",
  "key21": "5C3xyD8Rm7j5x442hA83Bozyw61R9Ltc1YyP8gRqWBKBJnW8Ae1pZXaqHtghBHKzMURduUkqRUymS2e3XEowUmjr",
  "key22": "SJkN3LfgKYfAmFcDz3XZpUW2af537i7Ujes77YtALas17rdoi1WxvWMNUr1gSx8qSXsdJb8MU55UbdPmffdTaVx",
  "key23": "XDyoeq9Xh9ZiKEMLZwur2S2HsRNzQiprmEDJaNNy9wKiH67bKeQqPFhVgY3zqRUVARhgEoFKqDdbn1ftA95v7D6",
  "key24": "9W38xWjVteB59mgjBVEERSJU54ZELwkGmqChTaVePCodfg2VesMHLxvmTvc8gmLw9SEjjhpCTX8bvhgWyAPwHwG",
  "key25": "2Xve6NuX9VXJGNxiEbEx1e2SkXcUo21sKSsmNZfKJDMkAKQTwjwx5pVKiEZCLF8XGU7F8TFcgdjCJpu6bv5evgEb",
  "key26": "48WhoxbpyfxT4hmBXNVwy1aYN4frNrrppNe5sxGzQpDtZZbfshNdmNzt1fGUED3SuxhZUdCE9wb6SrztAZaRWRdR",
  "key27": "3oL1LHTjVfVvpHEAQGVyFnSqoVvZnJQ664zbJ3XWp3CWHUma1DA6XBjhGrMcm8BqqWUYw9BftxYGCQpg8JTAuLXX",
  "key28": "8dKg6BVo2cfGK8M2zrDGAYiAs7rgW6uoanUZkWfvLRK8N2DX4MJeQBQbgDP5AYbLUZyKXqSuYnq1dbtmWJU47ox",
  "key29": "35M2fXwCz8DA6sZzxHTcErRwzKRL8VbaTjxtxVa7KZg98rbm5f7ig4yAJcxm8EEmr3VKgcRPiLuGJzK6SiBLQ9g4",
  "key30": "3q9qPgSvqRgsXvBShP3cV9i168Sx1LKSVxsVzaC2X7ZmMKSkgKk9PYRdqgeq1UzG53eKcmsVVZRKqpbG6zbASEv6",
  "key31": "2pDgm48RgJHm3i43ETLr9QsYg6PyPhHyFWDEk4CR41bDuXUXmt4Lr2kaHPP1FPKVF1pbzscjaA6F9G6EtgBP35pA",
  "key32": "4zhVyFymJS9o5H4KCh3MEuq1PjcG9PsXJFkZq5RG5fDq7bwzrB7WCNueBpku5DeDndnuY6KFzMNV26zHGBVsUJbU",
  "key33": "5V52mA1dsCXUJv8r5jgiR8acGS5e9kB23M4Dzyy5UogzxszdBCgXfJbjTmqtGeisNcmuv5j4wqCrCreLmJsFJvak",
  "key34": "46LRQ1BaDreWipxCkygd3kH7MfSp8AYJK2kubboQyR6RVNQFsTW681PmTtFeJsgq7vuV9M9kTvrowXBNV3onAbr4",
  "key35": "3uXbwmHzHAUNfWGcHxZEXJUBJG5xbzZGn7h27TfqZNFHC3Eq5VSFzSDmXh27DZETt6tfLykFnb9eAkJTwtt6Kesc",
  "key36": "48ZCzTVZnRGUrCipjy8SSJyEh7EYu1or4Y8ZLCSWFwkAAhiE36NPFPYQtACrho7Qcvy2okEH2PdPmeoPqXsiCXYq",
  "key37": "5WYJY1DcX4pvmbJ8pLBGfCGDsQ8YFdjomVjEUVLAVzhHG67Rt2NHTSUWwvt5MWEDSjb4SfRUDJf9gsYx8JnynV2E",
  "key38": "2hcE8MbUFQ2iJKkifQ3EgavqfVVk9jQfuAZcrYwJY5pzpBKius3nuT2wrkn2RKHfFC83veaPBZ5xyFfFe4vnSd3f",
  "key39": "65e1gRmZa7bAkTzkCCJX71oWbh4U2J5aAs8oSyksSEwFz6Xj7fMryz7eBpSXmvRYG1aYMLVhcNH1Pmoc9XMFAcmX"
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
