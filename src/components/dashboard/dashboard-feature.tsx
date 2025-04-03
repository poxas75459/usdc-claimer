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
    "k1eqcdCH5mCUXaTd3z5io1uLtENet9mp7o1bS6Xm291GiWhNbfNufnzQ1wLWujSGmaC4Ce8h9BYekkAmSF4u5gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bTnt8AhUmj1ayunuYWirxuZbH7eSLTNy3HcVNn26AFrRP7YLvYvYb3icKrvNBVYGn5xjf7cdrephwUA5qvUhkEx",
  "key1": "5eSjTAAsfpCTGv7ZKH6edhQZQDzGQT2yLyNtMojnEMh1vfMXssinUb8Tx1Pm6uKyc9WYxApDoGS7F5Me6mUXAe9d",
  "key2": "5QvHpv8hNcrx3CQkqVhRRoLyAusfN77gYaueac9XD2YhiCf4npCHsSoDqRfcWvewUCA8HERDb4W84zxh6xuWNTe4",
  "key3": "34FS3zS7xp9kS7dMNVoXQYsE5NWhs6mXzFXmnwnVi7YCt4YsXS44bNmGCDnUmWA1C2G1MBayhgZVYQ2hog9yLq1F",
  "key4": "2pzKFfDjP7L52ThXFoizHik6G8Pn2MD9UZqoyALoywXnedDEhGoTRT3ZM8mmH3jvXy5bmZmfpu6wRif8YguetCPp",
  "key5": "3ZT9zQ1S3GSPEujKsL8VZDa8a1z9KGq5LjuUrVMWBPYHVNFyj9FX3TZiNZFGX37dyuXk65chHwiftv7WXWxhKXbD",
  "key6": "2xdkvc63WQj8J1kdhVv7EUsQSzcStVJr31QeDRNxRcaT2BXjisnsxWemcCCnmtzKiWyZsw5jkKKvQmcf8AMHb37g",
  "key7": "61Uxj8F68V2uibY1K8Mu53MYX9XNxDKiAoPXZAB21Fx2ykqryhZbWFjjaVL4TGv5VVGr8P8jAjfYTutRdKfWuqMm",
  "key8": "37hAHRJjEjENeB8K8ftUwfLJS2YCy7LrrdeVo5gPoBMQxqHqX7RFJHj8ZMzC99nan2oq8cHfjtTMMpEpArTgMAx9",
  "key9": "35zT6brg3gGFchJ3b6ov24GSCDixG3pQ52GLgTzHKgE188JWM41G4C5jsxtVfWRjxRk8t3Uyzuph4ERe4uxYnjG2",
  "key10": "4g1BVTrsFBibamTGFzmyDoPxHes85HBipXVzt1VWQjXbfyWBd9BmtKkhGHe2V22PcDmtdc4U31UrACX9V56niWJ5",
  "key11": "5J9WtyipHF37qt43LKRu9j5gL6HTzuLyBxFFtnEcBbBKSUo5zk3bk4dHGhtAbvmzxLWaDiPGH9KQFot534KQPE54",
  "key12": "3q8SFUdxs9DjMLxhu5NpNGUbUfPDrupcPGPokG9zERkzGufUtzdG3mdzZV77zZ269ZywMG5SFgWw1EwKZyLEAtih",
  "key13": "BPVdEWoHu5ABcUKYsBN17wnirVbTPNVVYHLoPhYcdE1ovJ5xMWnwxoftq8W4uc4k6vVE38EFjt2UhZJgXJyNgux",
  "key14": "2zX7RwHs3Q4QkBBbhcbFwEhhXuETxy9MhsTbWQvUfH3PniDn6tvW5qdFg643JT3qeEriE7SR4SA2eHZRv1zTeDeS",
  "key15": "4qQPRkhB8DooeAhMjPnP4f4i8yFc4kZEgHrjqjP61KBsuCndSkXnAamaDX4TAmToXRvnvcx5vwZFvfg87Y3DceFK",
  "key16": "2zohCRgmVn434NZ1PksZcoL8Df9EBNeiVrtH581wpkWVnxMQomK9Nr2f8d4rDYfNdBv4X6ZutCeAXunSGDr2jpJ3",
  "key17": "5zwbwiGF6QEPmdfFQppvRzbNPTm7b56Dn9UF8cy99BeSBDCeXVk4DqvrG8Nbv79fRzpUL5e8kJke15S1CD4azugH",
  "key18": "5XY8Suh9vHDcPo2rj48rPXgw5nHo78EC6zpNDWJad1VVKML49n8ctwsWhBgh4QKHaKtcL1CmEvuhoUxCHaVpybrB",
  "key19": "Z5UrgeENaH3MwbNzvdZ2CE4e9Bc6zek2DAMfDrk3jeoVMoPc9437gptsgnKDxrNnY4evk8kUxCo83FCRkRCXe6Q",
  "key20": "45iZBUyHNvX2icP9CD1F1mie59pz216qzsNi6cfqzrKNQN41Y4WfTv8KRfAEdxtynSY5m2Ex7ctxTmpaSdWiGco2",
  "key21": "4A3Xt7LrPamBJP9sbTZztYfv5rf6z61avMnNHWGAuyqxa4MPLDz4ZZrsYreBvCPCQBubfhkFcknc6t5Phvt1keqr",
  "key22": "3AjS17GZtcAwMRDQkJHKz2UpHqmwSvtkjyvigeDGRJoRvbxNTVPrD3qXeKUbmJYpL4HJLuvNdNta4fuNHsWpDB6Q",
  "key23": "5JiqjyBzSVB9eoLXVd44C2StcG1SRkuWds2rEJPXUQyYDM4JbfY2Ye7bXSYSHXEETXWmPHFPncU6xjUQ2SAPpjGe",
  "key24": "kYPYg1Pdm1y4w3EHAVyJXDHvXMeKFW7yaggy5rdCJ4RA5CZmwb7zGVwgWxxtvXAbXkCbiXH5AveWCkq3EwsskTR",
  "key25": "5yWpTTKQ3asAj8zQgjZV4FcbJ6byy2KjegQh9E5ezVVVvtQY8jqtH3HGR4gEgwaYxuG9j6zKA2HHBewPFhZN4UXq",
  "key26": "5zBvi5J7m4Hjot4G2r6JrZKkmiG3tb6JUraVo13rtpWgWeyknCyV8WrdRgoF7QWKSfe3PFEahb1bXAyFqHJpWQEB",
  "key27": "2UxKUFfqMGaZq7cyAyCM8gHKp2G5LSSwrBfRBSmKFA1tvn5FPdHkxrStg4cp8mvQQmEF7yntmtmun13yHjsAcFcr",
  "key28": "61yneCNxxtMVS2RGditiwzLcSHodeMSZajMUESLmawDySU3kANp3eAugkPAyZbQi85cGjVzggm1z6YtTYs6Mo112",
  "key29": "ZgFQSXXrKDQyJ3vGuf86AGfp239UsuzQs9NMCK2MXdETq3zqmyVMfLHmnHTzHmsZ9PAGKqEpmhrBHDWsdCq7txD",
  "key30": "5SCRPdMH8FoGMiKuURAwHQ5THY3EEaR4NJmpoxf5GiLzFtgoV6RTxJNa3xAVndsXjoh2n31B4BMD9XeRvjmkUnaB",
  "key31": "4ANTUmZebo6A16CHij5hfF34ds9cVzrjRs7GAd6iFBRHGSadGS51anppMBXnXGnCCmBdJmDdoXxrPbqHVHS2kwBY",
  "key32": "3p5LoTjouMy8P5TpyYkdZzKpyK61JEFNDHWvV9FYg9UpSqXEZ8J3EYK1SHgGBsjVxGpezX8bpZhTyHupdUKoEkvY",
  "key33": "3fSymWdCvnNLDetuzb1C9dBSC2gz6Cbj1emTvTKJk8d5hfWG9noAeGYa8s1TdLtUNJdPrSDBVXSoLfYwSDL1yjtZ",
  "key34": "66zeXhwxuTMdhmHuHopAnshNAwb4u79DVGx2sbDErAmGm7Jw5zkhzrMHQwqpEqiGuyFJY2e8ggWdmsHEZGkN2bD5",
  "key35": "qF9AVRtCPQ5APkyeTsGmNnR6nhW48nsRuAv5pM2QCUov8LA8M1cEjTRmVEFJkrKrakLvm2WySLzTQ3t51rpw2x6",
  "key36": "xCsEcQ2cmoHRc9NvB7diPgJ54Pxi2qL3RGPL2iQ9tP9Sq2syMeMgQkernovMhr9NpXEuE8hi5Cssg2cBrECd5G3",
  "key37": "475qsdpCw4uXKUNiquGq9cwDiKjtyHH2km5fW3pjLFg2uzvLV2Hrcd3NVJn13uFWQYGixeTUpYxHEwdSowWcvTtL",
  "key38": "FrPub5GPb75MdeHBixx2RFEqkqvAby8XaKk1UyHpMq51kRAQ3LTVS7V36bg1RjKUdvRc9d4UM3rUZcgdh6etLqL",
  "key39": "33Rp3qZpJL7gbcpb95oVGq3DZj5AvJ5HoFJbfw3wgib7ksrX3b1xbxGsT1eYJVnBwZa3pw98grDkB4FdMFZZQ6jB",
  "key40": "33Ymp3vVubjcBZn1vFCXCghSPdqb4mwA9a9kmCYNDWvros3rCDkV1JYSt1EfufheBgAGPvm3JTJ1RKrynVeZkkvD",
  "key41": "3fyRw8EvK12xacxY24RtkhkokjvVeir2bY4CiqS7FT67mYxeEcv4Wd36x7mUMu4ARb3cE2RmM88ig27p52psnDxS",
  "key42": "Uf6w6ztWuJAiKaNnHQeW5HmchuW1aviYM2aFWFL9Jgc9XHLo8ULdDfDPyLgcxY1U9uiLvG4cQUNB26TuRQdhrVD",
  "key43": "SMvfuhMoxZ8irLfNFYpMv118r2Nj2y2R9sRUBzTBm4C7qvhjn17T495BxqkqS2wg9AZPNLS1oDQWJroKHf6MtcL",
  "key44": "66CaHh239RL3kDikubMS76uNPhP2CgxiXRq7PPwz9BLGxKWEF4hBPbJ6gEC4uQERyw6k5HkHFpppjgLc9kZxENqZ",
  "key45": "t8A2XxeziGn6W8zNTwr63n5wUhZZxtsupx5fv27DEyg8ccfaoYfqWP9YcCkvB2DjHNTFEUfQsgPdbXkU7TC4FZG",
  "key46": "31CaDHLj63ujKo7Q6ycpzQoUeRyX3uigu2XsAdCJ97Ys3mub2yHJPds4gSR2kxwgJrfwcbP4yG8Yp7jJvxLPvDML",
  "key47": "3CD2dSnuQx2RudY3wVsawxGasHwHrkw5fen5pg4UyTtKKgSu6c4e5p4ioSpGAueyqb3ULCKrutBdfJxJUawAPqgG",
  "key48": "52DS5BG7WVsnbq5s94wUR4oZSNRRin6Lz9vrTPab4psktYHPgmeiNjxTsudXHoy85TKe8eYBMCjVTcrn3k3oqJBA"
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
