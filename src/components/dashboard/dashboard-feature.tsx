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
    "5gWj16cy5sSHjNcJpCyAL5UXvMCgz5PYTEmUF8bokgRGPCT3oaaJGoES7tYa7JGBTFQLeZVHKCwJFDNmBqiZ2q45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27RMwsUuwP6WHZHzbxhFCPcMJTLHh9wobCw2TzbGtNXTV1wxKJ6nFvMAhp4gkdhernkbiHBh3eritPnZuEM2rXyv",
  "key1": "URWCEKXxdNKqSFqU829AnLdibKngSyoYShdTaVhVqM6Z7WbVVBWetWKH2jXbPzQzBiGwK914gPko9kjGQvzdzuk",
  "key2": "5sqs1MFPb3D8b5jrgAh9q3EzUQA2cvRjjBQc5XRL8rVV53i88dL8t1NdMMER9DR7J7oqNmguSNw4d3DTrbKGtiBY",
  "key3": "4BYpcLp7fsVSdvBUsnz2Je1P74ZM7dXXJnsKZ2DSaafVo4SHNEMAH3abrWTxw7cXAZeGiHd8FYkWmg7RY5wD54U4",
  "key4": "5qdZPTaLMpWSp3oS2oniC5ELZThSGNXXGMCtG8tqkBrFxJFKqnGkWs3z75TqgAA9bRFDSaBd9QN9uzuUDfwrhebq",
  "key5": "4QkBhYh65UnKkzor9mMcCx5oj16jThSNwtLqTZ7VYsXBb72gvnDrN7wyVK5dHY9GTYFDAiCAHYZwwcMsbutpTpj5",
  "key6": "34KEDVgGPFfY8HqEtisNHdWxRbDrYx2DLBM5VAU8fvqSzi36bm6cTFPxMn4n6X4V24zNW3ZoJN7ubkEq2VU24jKv",
  "key7": "3mxuKv6Uu93DaAVLfEqQR7gsQX4DNyCTJTKjbmm6yPLHzWyEems2RPhYYuTUChAPFbPHFCEqr6s185MSidNyyBGg",
  "key8": "EFpci6Ly5bmRMZxaoHncth8tif8Hp52NmzJMvbmweM8apik9UFcGVVMQJoEg56UADPgrpHLT7cLywLwzco9pcap",
  "key9": "6fh6sSJ4rQzYet2bKhatXtG5fRBfYDneKi88rgJJpLNSA1MdJRCezUZ2ZYczdPhri5s6QwUHzUmkqXXtU5rZBsL",
  "key10": "5AzRcW79qMxYkDMYP16ze63pYR9oVi5dS1HNiphA4N6BmanTQ5gpCceLwa46ngXxgd4NRC7xdXHCzRzLF6LBdDQw",
  "key11": "1ttEqA14b4wcujoqtmcUtwSiLQpjTRxQxkzpzDsa9TGq1dJgu8R5Kyb8Us7MY55BFZ2VnUsyzQf21tYTrLUZPsq",
  "key12": "5VMVhLgPt5xZLr7aJ1sGsznZgrvZwHm2xFtZJ1NM5xFsznBkx8nGUecPg8tXX2XUzVpbac2PKq5VTG3MpDcH1FUF",
  "key13": "5TEzaavtTWZ3GLbEkKdsKC7i1G7tx9RobNTE2EsHwzJoJ99dj2sksobbWCf4sgweqw3MMhWsSX6hivBN1wtKfx4T",
  "key14": "fkSSreHoBV3CBKdyTuR5u4cAuZfgKMvEaNCAvX5eXh2m7TVU2JCd2pUcgamxHVFYuHgEUxD3Kctta5JpHUHiUEY",
  "key15": "58G7ZLVDE47ihKQkCfXc81pMKjJVxvcFdaoRZmNFQZNT9cwG77vQ8sk4vkpbUdxis3XUG7weTLXSgZEovXxXRTwB",
  "key16": "4ma2nKfjkeNnrme3A61YMuFMNTHLS6FEgvDNgPeD1u8hpk4gPJ6XWKfSfeN3s2Px2u1YHnM2K4VELpd3F68kuDBJ",
  "key17": "2aLChgj34HSubzZasSKhzjREvGLM3Fr5tvco1FTFnCWxgo5bu4zzH8NjTmM7ysHKoxwFKfqsw9qPGGnGeasfxKye",
  "key18": "4uutGCzkEhXVN7D49h5GE3K3YC8dRizDQ2ChUWBNFKhjsgJ8HP7Aa2f8vppvjRsRiTGpQuxbCqmkDPeY7n8uR75x",
  "key19": "2UUsuWSYEbKN24tcyE1avT91sfGoYitLvy7HB8ihqN6e673DUzvFrknJGm9NwETnPtWuzsgvH5QcyqbGS5hs2f2N",
  "key20": "2aka58FyCmUgHYi9KEJSL75PtWuZqwCebhxrmQbKxYZWdTDcp7ZSGKfseAjnkGDRBgMsA2gY51xR7DNSEFxniHPp",
  "key21": "Nae9jj2KjaMKVwKFdppsUMyG1e5e7gUoTpD7mLXnGM1s5pVnkHF7j6X7w7Q1CN8zcnk57ayS3sf5X65DDVg5x9E",
  "key22": "3uBJ194iA3SqVJ2erqWSAVSwiQr6N5Hn5ZG5D4zJx1r21VTgHHhZooGQ38xWZjb3bMV6vPkpNdHG923ipz3rGqd9",
  "key23": "385qu5GwBG9CZ3ZrNU4ujEQiJLQBoht8bYkUv4ecjCYoXuSqDTcHJQbFbPmWbnHvmcHHMPe85vSEGHLbxAfC5qcc",
  "key24": "2dDP18AqYnSyswcqwu534PCSYP7oHVW3SJ41DgEf9piDuLxdRzGqLRG8GFQq3zSmJ7sWPTDPJkWvqStchFFpTJ4y",
  "key25": "4qwc71nQmkyvmNX5XXrgkBgJRaeEjnFedQCUwN4T9jXa3m8fs8b2oPE1M5UtqH8bfRmSHBBj2RdnBh7p4GCGShDW",
  "key26": "3dF84x9w4DaZZnt118fEfFhz7nrUqhxo76LosxzysQr5FZ357RaKN5WgoYzVZuBGg8Pmr5GgPygbsASWxa9AVmHN",
  "key27": "5aKTTH4FFNkAkBecrihezyP9YHjtP7JjWtYBUdWquw7dYuQF8GAFmVYPsBpA4ytts9ucNSqJj3FnNZtVQBPFBPtz",
  "key28": "48iXUhNfuvs5wRJqJpPntq1jxPqeVdHnf2sXcvqqu54S2RNbqAoH5ZPfHD1HTd4Quipmuyirkr4Bbj6mXah5gmsd",
  "key29": "5GevECNmYS45hhsc7cmZRZzHTweMDU5sXkH1qVfNjtDZRGrHtYWYENeRrooVMJUFvgXReuCVhdXScNxK2BufsmUH",
  "key30": "2is3DG56bnBH4XZsq2iVC5VR7KPSehvchEqxZnajiUhKoDS4cjLJtPeU7RyHSycgQrBASLB9v2aKxuMvFNzrempD",
  "key31": "2X4wTaiDDsLXSsp1Bo9PSEvHjvHJ5Hhz2hhh4LURErdBTxWdXqPbZBfo9VmJbAZYe8pUMGZfspE5V8g3K3QBWwgC",
  "key32": "5rKG5VBAW4PLGPYcup1kdhdCa95ZhcP8CPsF4LMVfJ7up5NJSe9ZiHx6WcAp3GS6v5FeaJASdm2VWNDG7nWjwhwb",
  "key33": "4fdSTymsKVPMm6zmY2uBEsYiuQ8fkhpgN9KGo3gffANzJSm6bq8PdCJXD6vPDL458NrPij2DdkLPjidF4E2oBv61",
  "key34": "5BVHZyk2igPvV6dfDFJ3T8G5DoutzrWuazq4BBkFeFj2JEfHVdUJYjzB11u5zQBmLQbQMDfc9n2RA3FmH5FVkrRb",
  "key35": "3pp2d31nbZpp6Xjj1V5LimRQGnqvqjSXgvtNPAq9S7cUyJuTwhd97SawvEHqEoEMdA3wYjSPWF9AzPSLVpL8M9Tn",
  "key36": "53XY6z68Zb8xVakoDKgMTCXqm7SZw2fgtMnNFxdvyGKRePAPThr8UPFjfJ7jnA2STQJbX95CkbmhU55xaLtYwhvR",
  "key37": "5LFznGmfiS3fNu3C56pEyxt5bFJBZpMQDjupvaf6DD29szFuPTTBcY8wUD7neuevVVrUXyP5h84bkd5h7VwoJnMd",
  "key38": "38pyCS9FX7vcqLvmvQR745QQxcN6v7wF7ieo7TAKosvJPFTmT4HXd1rxihPQhQ6F3nW2fCGvCYFDCT5fBpfc2ncx",
  "key39": "4TdhYVKAARwxaJtxWeW1vBYLEWYbUWRsUDooSfwAZZBSLcPeKDmhKMcvLcwiqkYabRzvoqiWciQ5WzUg5NNjg5Gf",
  "key40": "2o3SRgEoTCLkWjfWUtbAA2hFke5EYvoM5uSLEN68eLhxZ1AcFx8eG8Rq91N53JhDLPywCBdeWgA6Q8cS8BVVfHr1",
  "key41": "df4UZvdpZNUusaZBihPkBwsJ9noHdAjTBryDHo3tKNWoQJvYDtKRzE6gKdatc2XBUN6RyTFLBosdTMhsb9xd8fi",
  "key42": "46LXABVutrkVztKGN6YSZhL5w9vuPkdoGyujRi18MMvfJv3kuLKpHV7d7DAmjXCgmoY15A9T851tG9HbqGvbm7kV",
  "key43": "47y2zqC8Fgk7Cn5ftR8K3fGAYvGeyjhac27jBXR4vvgHBKkXPRW7EryNv2hg8DXU4qqi3mun3Rz3aTd2gH5YAArz",
  "key44": "2xtwhJRkiCzuxdauXrxgvuAgiZSh5qjzyNmFiTDuyFvzEnffzSrLyg7JEHnGwc8AwNu1sR7WW5fds4roCLDpRhe7",
  "key45": "4KPousQxnhE7sbVxQvHjkzYZL2vurMKfLCaX5x1g5Jzx8URDHUqHudVXUmBAsSZQ47ZVfN4sukGmfTMunvZCDTUx"
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
