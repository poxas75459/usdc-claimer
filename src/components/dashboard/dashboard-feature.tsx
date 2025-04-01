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
    "q8H5gD7sCSQUv8mxpLwcGZsUxoX6MDTwSyB7gJcAyPfLxMX1RHFUYpcef4KHhcp2MNirZqKrjGZUkFaSvcs7zsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3twYAK7hVkZfspF8sg3SgZTjrT52FybTSRA2CwrkXxzAw37AvSKCcsHKfGrgu3ruAP3zuQg1cau8HMqz2742oPFU",
  "key1": "4m42cC9TaYSHjyqWrWEmV65FpaWxC3eNV7cEddRqz17jZTtbR1qDS8dwomhMz5hau6oGB7tnacCYWsXsB9ihy51Y",
  "key2": "4hbbZR3yea8mBYYRKG3HM4sP7TrjJhvezswrX3yYTJzthF5z1Kq9NvVBAKPeiEmcuRj9MCXqFRadbxMUUTpLgsWm",
  "key3": "ipMkTiSm6iK867HMvrJJnH37sgtobrBwg65c45Me6eYXLjWUU69mgryqd43NHDUm4MWgkmiwmRrhgWM1m4BP2ja",
  "key4": "4fBvKnTKBmNvsz2S8uKHQDYXGnZ1QTCSm8Y39XxQR1zEM8Jbvb4cxtezGYqpsJfJe1MuBEjw3UF1re73n7yBxQyB",
  "key5": "2x9kt3fB7WXqVNUa269ysoAGFwJf3EG9QfhJDPLGtr3TNTEhVK8FmQ7FNvnrfih97BiMw4Tzttkqne6SYXzVkriY",
  "key6": "5YWj5y2occgecxAd1NJa41zxXp5KbHNumPhmUJ9VC78Le12j1MRp6Xrtrw2uZp9w838qZ4Mw2fzr5KGcEWiEmpDE",
  "key7": "2JYnU55RQiV157JPisTR6emdaXaR3VTFcRWHrSpFtGzGvU6feNASAhfDAZKcJ18NT7ZJV4Mt14nbHQpcdaX5D83y",
  "key8": "28KWBWJmzAPzb7JgtfYVLDTkbz5HGhvcC3QY9pcBq15RRH8bYcgNHW1TVxbAz29xwuMo3B7Act6Lfm6R9RxQVFna",
  "key9": "meyDb8qtTpqqJnXK8kLBUv13yURKdDvAxWQtSJfwo7c8tKDrHh6a8ummbhZqJD1TutEDhgrFpEUfkanAJaPEXQg",
  "key10": "5SLhNmKHpdft8b2M1Fr5tAr3Ps9HMYDdCCBJtoTNNfAJZf9FM58YvHrFZCutEnkuQDAm8VFzW3Xz5EisVYgExwxT",
  "key11": "5bgyJLpn4jpqRbhz7hsbnLPVpWuHn28WRwCRLYcpR8srX2CHSgCdeisVqnUN2tpxtBUJsSXGP7jchU5PM7mtcFfd",
  "key12": "5cg2sf2s7Eac2sCvpaK1g7puuQ1CLeLuiyXuu8zFoZnsFiPkTgDebRWPmiUKwBtGui3CQuw3bWFXcAhCojryBwes",
  "key13": "3vraKBxr3ZFpki4S4Y3uy7AzvJTawH2yc7KhHjVGuyoGQwziCqsWLeeE9zhPKHp9H3chqxWcJuoQBT2dMWpd4oX9",
  "key14": "4y3yFt8SqpAfddMYMMtKACMYVPDJVo5YcAjJCTDZJWBes6xhbqbgkfjC3MtdQd6EWoisHzEBZxvS26Y9VvSpkRsU",
  "key15": "DdT3FPnhJM3k1sHBDof4ju4mJeKQjJjJEh89wsocsPywiYQYhJ7KkjLxa1DhWFvpLZG8oLhfmrbc1RMFnerchZi",
  "key16": "1KaF7DPVwodAJNgkqNiQjyv5U3oDjCrc6gy2pho1qkaVDqBf7gKNTbxbQYwAfJuENeoxejLX1GE8LypCQyDhLyT",
  "key17": "44bF87iagrTXuJs17Na4zrCDrf4Bia4bvXTwFPEXVZx7L79xJ8NWnSYoN1W3mK7cUrkUGCszaYsLCssMh56uBNhW",
  "key18": "3oSh7x4oCBsNuYPL9jM3L6HTCTnwLVYu3GtfzQsCNenaQk5cECyjQtSfL52dRKiCjAbS2Y5hokY34KGjBtSCQhZn",
  "key19": "5baqXntrBfv2UVUt8wqADmXKxg32apNwsmbtHYsEo1SDtko1crSTfZ9GsGanYha588ioRiSLrFsAqzkvZAMWmtp1",
  "key20": "32oMoDfG2gQbMbVk7nukFpQKV5tTebBUCjzki1qNZMo4DgB7iLbmQGj8gRxsnGhVDjeeP3afkFGT4MdZSdh9gRYS",
  "key21": "2Psjt1J1NmgBvfhMPDH3Y4w5jRdxakTNFXXBTtCWMM9FJQ1bdPgeGNd6y3iSbywnKR73mdwYAx3BLsQPFdeUHHZY",
  "key22": "65AQGk2s4EmsxsLLhooqZCrCQrXmKVmMPNcaR83X1fjhzsV3MPMuqEsrctcj7GmVsfDZ8gnaV7xcPv9vj7cw4HKg",
  "key23": "2Fy6HRWXpzjuvrWGNNKgiLxVuffF5hocNRjyZecgi16hUeN4GfbK6QYwNGg5BVHca5SLaHykH4mVmGRrFaCMMXYw",
  "key24": "4AL3TbVv7MsA3hRDAo739D6iQeW9cbwrzPUprsp6qNzjiFgrmfPc2J5uLXuaxeQfRz7fSv4XdiUfFSkWuQgkp6St",
  "key25": "m9t3221qtK1sSdJuSBCj5HQV3qf688RWV4TGHLsV4LArDJnaj4rdfqLfFbvbWTV6dEjzxDi2LUmSd1pEGeW7N5c",
  "key26": "B5CQ97hb436LnXh6KNQX6DuZdBXVpBNyDBuvfnayhZmSE76USuxtMxPmG9AN8gnUQFnEweEysjTSFySczrjWSRi",
  "key27": "4kSsFAxi4G9H5uAwipGFVc5wPV61iJoTMn6bHBdLdaLg1vBAfpzZzNi8mW6CEt2jDKyicPHzrvQWp81Q3FUuY66p",
  "key28": "X1rc14nuvomDg8ti5tpUyM7QFiLSn8UJnd5zMBgHwwQYRE5C9cG9uHy4GYY9AdhuMcFkXzVnZQTyogsbn5KxHde",
  "key29": "61fwi41zXNtCSzSSkvTo1sSWfQuT82CoyJqvLoGx54qtzbvJ6Ko5c8eZ7kWnDw5fUA8Fu2w27CaCz5Ue6HkgwfRL",
  "key30": "63g1ZAd56bA1UKcagpNBN2b3SJwY7jGQ1ddRL9jJWm7wnavLr55BzkErxbqvXdMcpFtNhriJEVRz8QpqG9ep6yCd",
  "key31": "cnZ1DMmrnMHDhbE7xAqR6ggf7BmJZ8JpKg7BDDg2Ke6P5j2khTVVJA4EmbDQaqPs8wqL5sN65LPDie1nv1RCr2n",
  "key32": "1NuD9BrsscAFkR873qZZ63h2P89TCM8Ts23NAGRxvsVKJkLP6Fcsrsyuv2Boep842PPPLgqhHJyoUeJa78JRsP3",
  "key33": "41QA1P679nx9tKQjaYquWKez4sTDaR6SRXS5KnM8aHfiQy3RjWAkLHZ4yuNH1w6YYpM9Vocugf4gLrSTfMXxnjjD",
  "key34": "6KB18s4zQJhBEBuW53Z4rtKSjbPwDs61PoVxGQR2SFKy3SERDkjWTWjp7PVwzXpqyRfirQSxqF1stJt99M6FudC",
  "key35": "yoQqGyeBmrBoUqkP15VAuXZuizCjuZk8T3dEMh9dB4sT9mPX57VTZJavdiqmkWr1icA3vm7EpVbq63aT3CA8Kjt",
  "key36": "4nJr9UJyijAR4kvthxz4mav1ja4pHne2DvrUNWRQ5BxEDQnNAJXv2g1u2TD9Ycfsmm1vJpsRRd15fBf6ZxzUPBve",
  "key37": "3mhfkujoBv8SYkBgTsj45xX4n1nKKALQdosyCPdqTAAQc48vTFRKDnmuBaoYWJDn9QCKFomQXF5PsXXs6eRVxN98",
  "key38": "4hfJRFCmucCX5K1mN2fLVS12Wjr7UdFGd7h3S4G9fc4KbGDhFvKgXK9QuwpQi3b9fMcf6t9ByMT5PcjSScP1W5QQ",
  "key39": "226ECJxKWsYBeoAvp5zgub6L23dHQhADF4wV8MKd4qd3c8bpwuFwvBFkGWDSvRMBwUVQ8LyGdAfgVc9csZhiS8aw",
  "key40": "2GwhYKj4TJnLAH7d2DUk1ENEfnW8pSrV1ciRMqP3TLB3sUNwZSorWmDwKPf7bkBKkrA9qwsVPpkib3Ec4GsVdUz7",
  "key41": "64Gt8QvAWAriUFyK2UiDaM5RUZBKwTqRcKSnLP2FcawEey2uapJcbUxqk7JRCVuA51XTxoKp3k56yVbXdB3QqR8A",
  "key42": "45yzfsBPMGpqmWq9B7QhqLAvaf2xjKDChRx6ex4vNzqDRhAwbSiVQ2g4hnjJQ88vPdjqYJruaYvTudkBebBVYz1B",
  "key43": "aXcudQzzyYsW9grxYds3NVYGN1EBNuqHDDiaKYrzEqKxQ25BT2mmmCQYEbCqPYBAzJazT7F5YT9As3T1giTs1Js",
  "key44": "3dUhHJ6t8ETZTXW4r7manhhjkQbtEU9mF8KU2oobLeZZgSjC2YCVGncBeBYSALq3drxsh7B7p1vBgJQpF2Tdq3VG",
  "key45": "42FM5mnQQ4Ufwj6NtRR6eX7A3e79ZjiLTotxKkXVk6h6V5agZbegC9xgEMpuocYFB9L2SQjr14n2WetTW2ujvZd4",
  "key46": "37hwM5uHqyLdfjhvHpjvvbvo8a5WGFEPAkyKtHUPzxtnRvUNHoQjZWydC9Qxkr4X9EdUxEAy6uBv23MCCpLBdbuQ",
  "key47": "ovtp2Q5sPtJSgtchnNCiorRiDqSETiZRq2M8dcoAXKPsRZKSVVVeGV8ZsdQFWm1nmwXdLT9sxpE6Xhhr6KPGVyQ"
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
