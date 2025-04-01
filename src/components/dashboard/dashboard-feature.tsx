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
    "1sSHwnWMkyf7rfSL9NpNgR48Ph5dtrg5GZQjecXs7bvupgdL2yQyTo6b4dquSzRKXij8Q9CEVXeS3RqzbcjoLaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cQDEuEFTYwbEeREkSz9vuxw4UR9eo27tSKx6EeuVf71gotGm2Pv5Q8rcYdkqSBcKoWH8TX6K6TeGg4QxxVmAAsa",
  "key1": "34RC29xbuYLj9QtoY35khwLV3ozWywmvxWShUPBXQwCioobF71pUTfd5aAnD5uNaeCNYtmKrvdYDtxgDcS76G19M",
  "key2": "3BaXhDADS3wfoeTyprZWHYmikStu5fkSRJyh2YjjQbqoC3jCJpH1NK8ibbUwr7VrtiS23b4XeA3Y2KhMmf16KdEm",
  "key3": "FMi8cppe1fNu9YEFMV5Kyrh47CcJdtDEJTXHFtVBjtgVvsz2Ev4yNj5i37qWhNXxkT9G6NUBVJrnwneUNYu38jH",
  "key4": "4WY3HuAtDqgJ1yuAU2r4x8QksGvqhyZLthWWKiJ52c8KrHD2SARSNJzCCUQBZcH3NePuJ5za6coT3YQPjNpyjKpA",
  "key5": "t3a2v4yZSkxhXYFNme3CbZYuwVGXuSaYMf8rU3zyLnHb6BnfbRtyp9Q5hZ9fVa3vUJxW3R2bX65f6uHvEpQw4M1",
  "key6": "5mkq4uptr4YmX8oJUyih6ZbpfUTXDByPqpzks83L7NDjTMjSc4vGaQ2iHTtrUjHARHKaiUNWqXSrNoxaZp955ACQ",
  "key7": "4GqYGzxoqCynu6hHJF8VQoweggtWfZRg67nn4BfsYQTMNu2RLFUjgw4vLEYXFQELRE2NVkBdJeaRDBRvxf99JSjA",
  "key8": "5Cx4bvtcUCCFeVCxfiK9RS4KgjKwEVA4wxqnddt5M2hsWPcG4oxaayemMXoyQHBFtqTk3mRVNvgnoyuiSxUxHdmG",
  "key9": "4ZcAeKfwyVyme81yKQdcybS35wHZv14yimBksoLSTk7g6ZX2uvXuGQTAoH8PsoZkfEEeMU83givfMk6o1iNJVroX",
  "key10": "fdLTDFZmS27UuhZmkuoE7Fip9KcNegYAanP4Trj9J2SG67aim6gooEoYU2a2CoJiwNBUjS233fUZApyZxSLx7Fy",
  "key11": "35qQHeCcgh9AQbhPpdoRZbcCTm59pswEk38v746ozEJbcrKSq1jZAk4Ks5bkcrFzZ7xbKMDisxTWobXcrZ8R7Tq7",
  "key12": "5MSZQqA3yLcHSRZGC99NWrZJu11UFbasU5zBdVRexSzUAqjBdHKnpgE8yLR3hUdmLMwtcZVNtbBjyytEe1sgxqPc",
  "key13": "4dHVuLcuK3UsSkEFUfgtBjyTMSNx7FTdFdFuwxKyK95hyeYZZeLFrvyHfgyDPsBnRwBBDW2eQoT72rBVozDBKMYh",
  "key14": "4M24XapsPAMcpdzz4AdmFXT2dC6YfZctjVf44toBHtZuBg1cYZixW8LVCDU36Pt2FB3oYT8FLpv1NV4bnmnHBuRE",
  "key15": "3eRWxfg52Hba1jWDYucshpEpem9WcrcGZnz63n3H4piJwoqzqx786j2RzGkS1cjuxfnSebYeRmFBrKKBrZMhS4pz",
  "key16": "qd93sS5i3HJyAkNSqGAuFqNNLpqBAKftdZVVN2RPnnbXMZWP35qetWtSwtA7KhtPDuuwcz24iZEHroDvsPn1PGJ",
  "key17": "5NioRmVJ9V6c527syDkoz34XF6aifJVnBdQSMXh9g5cuF3jFarSoq5geG6EVvLKWsC3DUffkzEEan2c7jxZypWu8",
  "key18": "5kBgir7dWeXAUtxd74SkhW6NtmzjggrKhAeeoof6kZ4jTJCXR2hLezkP1rdwV6oGd4TqqxgTWN6zBTKJu7QZdJqA",
  "key19": "2nJ1iBEd7Njm5Zgc9MQtGEp31orXiiqF2jpXyAWEq35r996ZBZWkyDBKE1Z3nwwCwtH5RLfkBjn69JYdF4tkf14W",
  "key20": "4iGLE7raPmTirQc19W8KRKHnF4ogsyZwYouXLDGwgbbtWnuatBgx1ePkdQ3hyBbLkSCAg2vZfPDuRpwWY7hRv3BW",
  "key21": "3xZZ77pGvTNpn1vSMw3ahaGTrLRenmvyprPBniQjq4edyuQtYghX8yxKGHzScsLz35xLM4pe2ZGt9kJJnMcFkioc",
  "key22": "4AY7K7YXd86vgYxK7WAij2BFEA15MvT3NK6dkqqsgJpwpCtSXAQA3MXKm9shkoJgDtv6D8wSEj6z6H7ALrq4x9gk",
  "key23": "2XfbFKvdegJHsMsashSSwtUmhnnAUodCdjtD96WGBVt2ubU3QXswEPHsqzZgjqQyk58n5NHVbkfyP3WPZwYYrTVD",
  "key24": "5BY7BaCpJ9L3qjpG3nmFt1KQWBar3M6XfUcxwhpLFM3nhCKGaV3YmnXFfqKS6wmzkZPR3meMV84aagpyrv6hmJqg",
  "key25": "58CVGVFXUyhcmBLaJzdH2tSYJscx637jwbivwy1MMLw5386KkEWttyBxBUkCNKphW1x4QXZ5UEcnnxksXy2ZiKsx",
  "key26": "4RufxStkRctGUvMD2hbpRrzL5dQneaZEhq5MAWxqBUvukoF72mKz2pqbCJRt1u6uwkdzMDwu8uVrvPd377RG9do",
  "key27": "2UkraZ3y9wLBQDpa3vw29qEp7bwTTtu4q6XpHVeBwYNjnXLnUQCpZHSq39GKLn92RXzWhXLKPQyu2952GbgzZJUm",
  "key28": "DarZKPTC7gCTxeD27bwTgA1Fvo8eHCX22QA39JydFPuCNPWCpLEuvorysaRBKQsq96zAy3jp1ESJpXtdtVJR9sp",
  "key29": "2ZXztaRg2VjvzxRAn3jbEpMREiYz6qHw4HzgMpJN6HnrzM7xE9tjpLdrrXBxNEY6FXyegGWMePo71im3XW28QLtA",
  "key30": "2AMTjgRDzHR97vmcviFmMJTM68qernyqDdm9hXBu9PqFroGwaatJ5oqCjwpNNKhM5kZtDvX7CvSBu76Mm49FaK1Q",
  "key31": "yi3s8SuTTqF7kzkBKQ1cH1jMoHiCnCrdvkYk2gbYoQxiBVLzwYbt4NrVmzXoyDq9ikbQ6V3wsSAhPWAnaSkFauP",
  "key32": "5XA9vr6frsMp3Jw5jw4HLdnxnSgUuNUxqJB2WCK1nXugtLy4iDTwgZn7vcCF9yYGGzgwJzsLPZZkUTFN1NfKJ5hi",
  "key33": "dnKN1xfPgtNKq8q1iCvzkVfDZXgCUqKZ8hEyLY6aLmre7ZPhJkfhmN95bu1urncL3tH3GKawpxhbmWB7L2FwxjP",
  "key34": "2zBPXe7yBP3dLS8frRMyWfD3Rb6oAEKaQhd9Bm145CgqC3RoovpZMU51vf6d6DoRgqJ7dxNFFwt2y4iakTPugJw7",
  "key35": "4rHZ3MYUjvGegJGM5yow15ZcW5zADStogzWZhwpcqYMujW9RfcdUnvocCieta2yXJ4cCzSpcHffDbotar2Xvy5h4",
  "key36": "2Uvt3MgMRQiMtuyAK3MWPUv39s4qW621XsYHKPPXax3uCJw2qQ7AU2VCpS9MWcAQmh42dgm9xi8dwkH8bUsr9oMU",
  "key37": "Wnv3jYvfhRhTYp2AyvfDNQauV2DpgPNgHke9rPTtkrP4TWSLDcqmC4cb8dBRvjZMagLE8Ac2rN22npfcmKyUU8D",
  "key38": "2ZXog48zXEBRBi2yRiSiB6BCmYs6z1GWL4huNVnv5YgDsCHy3WcDLeSWxrRVQiHb1g5dMf1G3zBCL3SWTheKDa5a",
  "key39": "4g31bGfgwMbmFx3Cs1zoikq2Bv8XFGcdwcH7V7ZfKaMEV76Mdc5nFnTLTrusMgM2B9SNkr2nFkaNt2gRqKmR59RY",
  "key40": "5thz42nq31QTKmw6U3JZ9fG2nstggidjtoXBEXLTRGDCXxAdZ1JyL7Pbx5i8X99JCiBQSzD9s23P2LiosikjN4TY",
  "key41": "5TymQSzxbqe5yGsKtFuaLfK6Hab8xABEyeJi7p3KG4EsXTDfaidfHpMmZdi5eFbe1wEcDEbLv5kMYuH4gWVacARd"
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
