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
    "56X6EuCgS3AHErF2bNFuLCL51rCcrvfksjkMYEn2Xa7HXS2ivovepPHmVmUc77tuR9E4iGdgaRMBqPxkUfoHyCFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aiyJgjs7ayzQjiQBKBDSmMmihBy8JFiUYEceyKV2QewsaXFNdz9SDH15sw3U8k7BBRa1p23hTMkpSg29z9oyHie",
  "key1": "3Y4TBn2Aje3TuxUhMCyDzB7E6c4nMQ3eR5SeMdTbyWaHQFxWG4owusfwCdZgGUWgMJizWsejvkgtqwKvakU69BEw",
  "key2": "5y6gtp6y88PWTBoptLUasT6Pk5NE58APuNX6L6uqRJhQ3RhHnoBUhHJ5cG7zQaBVDeCPTkTKm588gR6sERKA986S",
  "key3": "4mtDVhD7z7TNx1G23VaSADrkLkpQNVhsMHZkDdRBFxknL766RpxmvMDg98MPA36SWvdyRbHK3Rm5PTCMudhC7CEA",
  "key4": "hH5pnY6nY56b1PpiAVv1qL8cyx8vKEimjxMVcwigHwEd7KwhdxKoEPQF6YUXJRCSt33uZaTxqBKmsUpRwaHeKTN",
  "key5": "GHX3mEF4mQThQSecPGZPtEzhmEfjzFQFAMXiduBeMGaZMgyQVd7Cswdri3SZ2LWyUDDH8Nf2YajAvTh6qFogMMN",
  "key6": "2Noptfwv6QgvNRvBjbanYzHGaUuuRpMdYUhCrhUBBg2kYv82HrwXFoZHjtusvHVBeaJYjhJVQKZuE4AZFNvA879J",
  "key7": "5H6ruxavnnZLnd1jfkCv6efNRZxzu2t5cRC2dvqDMHdFR4ofUTzEC1PLLxpqVcnJpfb9R6YF778D8HLwVkMYTETr",
  "key8": "3BW424XYrvhYx8wyohHHX1UmDZzZ1mqhkuyqnpubCNqiUapg2nwpPeYEif348hUXCEfS2H9tWyb3cZwot7Q57qLd",
  "key9": "3Rot1nbJDpGgK11SiyGDGNSCAaD86UWKjocvysBf9YaNKgWYghK2ikrWzm3f8DPpcQDcdB89NRVheud6nqyfJnst",
  "key10": "4ZosY7P5AUDdPghgRu34VwLBHi4voFBCcWN8dbsqzzPJ7NJT38mnb6pVpLwJjxM9HRN3FRtDQKP2TQRrX8kQ54YD",
  "key11": "54Vx7gQjUHQhtJCmLgwdzQAPdtjtB3ynvLVXXxjCoeSs5hPX3tj8EQQmN4dSaXtgoJfAAhKrdpkYBpUSbWQ9pgUj",
  "key12": "BnVpVP8nAgXmtxj3ZUwet7oyWZCaz6C7PzpK2HvtTYkwpe5jr8s5kswLGcWH9B4U6HZVHfknNRGutXFyhFQU9uz",
  "key13": "65GVMLxUnw4AmJRzdQF6NH5VYBXWBJfatDm4J64KyiSSV8DTY4XzKXJghVqVcvQKKYu92HZXdVwaG6A2S82HzZb8",
  "key14": "2KTTAXXHL8V1iGjaWZpvaN4D9UT7iws6QCmsyeqmzuMa8tLKaK9WvuEA7dd7XjkknQC3jkK2pnSu1znpQDdf4zBh",
  "key15": "2WrQdG9UGAQacGFFRNY1PuxrztyTn1oJUAPdwcMfivPH2tDVJoxstLMaod98KRszeJxpFuueBD56ugriHwgBVsi7",
  "key16": "DFfvYkXNAV45vppUwDRpMARZMJPRA8aCz1XGHv9RYChwduWPKDCGJxtVBns6JYEDhZpZxoqN6Cgb762xcT4cXvG",
  "key17": "4Em7Yw9fHrKBAh7wK8KHxtUMvuqN6UaAathQDMaUczyiEDaqu5f3ErYFdecxU57dsmQ3ui86v9PcWqnDG6VkgYih",
  "key18": "2f34Hn1hGfukqfMUA59FgB3uGLvMgjEdTA4HTA5SM83SQ6eY3SFsNseeQYiTmKmpc8aJjFC9JL8nDHcaToQ7PSQt",
  "key19": "9U2DqjUQYqcFvXeqHW92zf4ZgqXAyXszDA51giyGt8kjEzAcL5AqhnFgXSbN1ihi43DWSpgY4bTVynex1YAAseD",
  "key20": "3ZUUyW2u1yfh5RTZMayRFZZTQDj93AwtHA9dFXJ7XhoBLDTp7g4WRgEXY8kK9BSZBAcWmr2Birv8sGWao9y2g9wS",
  "key21": "2axTdeFjwfabhFPg5TEYtZGiVMjMinUjRdoGvEN3hTTPwz9vrbM3P7u4YD7s5E4cqpfyNgJMc1aDCLTXaKSvRM22",
  "key22": "2adTr9ZA6xxr38Bk9nT1kKWdcJWmM9ZLqaj6fk9QndQPayrvHjwSnvwfi7foTE9MMXaxwcdt6zwpk5Zx4hCzxk8C",
  "key23": "4Zk3wP7kkHncANRuchgFHkdDbbDHqwcdM5v7WgQDkebyBvbcMsQt8VNsAmMJjFxoZ9x6MX9kncuKyD6FurXiRQLC",
  "key24": "2cMpqbQsqYkQ4jTnyaCKAeqQ2wbL6p5yu5QwZ7qcjjtiSHxGWDQeCWqUKYpYLE96thQofS7ckinEBzQ6fHkfH2uN",
  "key25": "2WN6BspjTBYg9XmbrB625nMB58b4BX41zXZsDsFHDKPXahkpPjhtY4V19CtXJivPEE2QmEUc9PaoZuksm5XeJwHD",
  "key26": "neoHSKr3Yzm9aT13CuknkxcfD5ZwV7TtXapvH7SxyZh9hraYPRekNTG2xqyYaVGu4dvZGGciWuLK8ZuWTRpnnNG",
  "key27": "3Asp4oJE3AiYkphTG3AWvh1LkJkQT6rfXuABinoxpse1NH57baRbzm8EzZaVwW7Ld4YmkKdbeMKqahsXFhGnwpqS",
  "key28": "3S4EJnL5sgXkNGn5uqTp1FNqogh7nDZVZhUdECBVE14xZdtxBqmWsSb8SLwQu8pHotP2saa8R2cudhwSFA3aj1vH",
  "key29": "2kjJGhfTh1xfhHBdqffpcJ8yW6s6zKZ8UG9N8EtCbkYPt3VXXzadMHKVHyDHgwiEdErCHojaTD66j2ngDN51nnrD",
  "key30": "2aeuMHmivChwquqpR4jkFhPyf5si5HRrQGgZ6Ew1kbjh3nSJF1cobTBiqejFBCbeHjHSsurR9Dwn9eju2SfcYfPd",
  "key31": "5SXdbaS29XmeBqekjepfKbbaUXjooP6mfrC5EinYJna6UXd6aKRmSmGkCP12YUzD81TbzqK9Ave5ACGeX5ZMVjJi",
  "key32": "3BvV15WP8xyvsXTjGkyE6RB1ArMgkbhDc2btf1vpCMiK9ZwJabmn8B16KbfiNyMDqK9VTordkEqSidpHvW9BVAZo",
  "key33": "2gkrdECVAegDahhLsSgAbooRFtXWAiEYtSsJ2v4hZueMMzMQHSmjR5YVPKpNnHt9kNb8dCfKSwbF6BhucNrB7M2B",
  "key34": "5tbBESr6dLmCRwd6LJBZ9hHebFF92rASjt8XvCtNsbxCqY7Mm3x8gwLDWCQrHyAWqct94MzMWtLaPXbkdADoNEHQ",
  "key35": "62UVu4iNAUUKL9EKhhQdeqzgy1XjLo9rzx7dxpuHHiLiRFoQphDsu8xptioDTMLdcvWeHxrCNyVaMnrY2VD3cdVK",
  "key36": "2qL12DmBXEktjuesEQWkpk5CViLZooXPMj8iQx3kfu9u6TCKdBJUxVVNfHcTxjBKrS23Zp4YTVjdi42ieNXD4xHJ",
  "key37": "46Hv4SuMw3smWj5jYddJupo3xeo6QGrxqfZpBB2jPcinuKCrEMfZQ2Abw45BborQ93ZzBpZ4tTeUKfFiDzmgpD2N",
  "key38": "kxWFETycqUwVknQQTH6VGEL43MV4NXhbTUgGDbQL6r9oZbeUDgen3Ehzy8u1pEobDeoLLA2Z4Py29xu8Gevhmf3",
  "key39": "3exkbfskFHMnxGccWi6hsCXrjQfPYHFEUzuZk3VjfZ27AB1LzysbnEADWrJp6L8gYEFFjM2GCHostZz9VfKLuVYA",
  "key40": "3bf47UC4tW9vpxLCB5Eimm6rhdvJdSVFWM5m9cJzKiAgJJH1rDX33YM6FSVkWM6p6kz6XsgwSAwJncsgMyseWbGN",
  "key41": "4EUsy7KLqiCZMtN7NDg5s15GrGLW99QDBm827KAhgHb63njxtxUQaQVkWh5zhbqEYMwb65KrL4YRq3CmCRzWYPkw",
  "key42": "5t3z9SwfvY25McaGgPQHctD7eEs9rcpk2TJnbQG1gDZdLYYRNMGHGbRjpXHVmseynMtuv76kPpB3q7q5DVcK3LQk"
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
