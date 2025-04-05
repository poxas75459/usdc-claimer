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
    "4ATnbvtcJvundbsJ3jzmMi1oYJXLR1JWAEsQNzbTkrVZdMsUudbJC1rBpDPi98CiZWCQgyGSx4YR3q16rwsdiWiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EVCWVzy9cckEncTdVGgLWoUbpAWhjZXwEttAqrrwAf28eZPsWyX7Y2gfkeEtwmvx3KgWAeWDtcWC7mtZohWUmeK",
  "key1": "3Vtug2NkCPtzNbSzPLaaVEJ2e3p2gtCTwdzU2npdNoTx2rZ9e8YBKQ1ZnASHjBdzG4SoMeGGL1MNGGDNonksGmCF",
  "key2": "mKfTGWJn48k1g8DJeWHV8RcBFQp16ct1Q6fLVnpyD36gHv6kLQwxAHvEtji9WbdjPTfdh8CKdpdSpsC5xeKve8x",
  "key3": "67RyMTcFCRqPrRKfZPCXGAaYJ43vi3diRQMgzNj7azgL8pZydLvKj5qn9foaxNvdTT8dk8nRNTZau5g5x6PypEsg",
  "key4": "4zMNkjPjVuMexkPie6nur3hgt2tJjzq6jcF8xhXEx9L4iyyB6bWxcz4FuwGcrTeXjQK3qsGr9RRq189vbXwxEbXM",
  "key5": "3std9QwY98um5QYrfeCkESQNc519dQ7FBJ9hxtzi7KSfBnfUPtjeerheuYDLjjtBoMMfsvcyWitywmFvJCJzcZu8",
  "key6": "3ZfodDFcN1TTbrS4RVbHrWVf7BJCK6hGjsTvNnBkEwnRmcj53wTjwFk4ysyWXQu47nnVzvsA57aYn1Rn2ftHLSZX",
  "key7": "3E41E3GrnZ5X7kXXUcSwVEFydjxbrp3ywtDpQNSZa8Fvrc39B5aerWe7gv1fSczNSfeeinhfrmfX5NkNjNCtcmUA",
  "key8": "29p8cPrygAWCK5Jv4qGonuKjzzaF3HNbQsU1QfKRu4zY1z8Hs6Y2jr6XGZD3u52M3121rBHjL7bfGLrzDgdrBBuo",
  "key9": "4wTgWtWZHBtTTfZpMvqhtWwQoFmhoJZLwK2sZhToZV58FfgxCFRS2iUL4e1RKZn2pTpjJ1XrLGiSDf2pc26xz5jb",
  "key10": "39FJNE5EJpoa84iXDV8T3fABQoC83Mzt2g5T4JQj1SnzVtGE4r9SKX68scp2dtskATJUisz2Cam52LnH5iifa1XP",
  "key11": "5n6nPCJr32EZ74MkUpHyx7Ruv92eSmmPPUHkJnDYAX4J7vY1yPr371Mh6Xoa1nhYcSBpq1B8vyB4mF9XDRgMzAuE",
  "key12": "2aixmDKGWacm8KTpvWHLJSF9oBkWuwZ8BLVqT39DyCadXKiwJLLNSRGbPyrpjdCjLBN5Y8izbmNXmVpDKGbVCH38",
  "key13": "4B1WkXpJ3JeLosgE8cqUyPSRihRJ3jhoqUYd7h5D8b8jmgV8TgvL6D8r5QcYjNGzYWuiubi8ATk5KSgeyCfTkHoV",
  "key14": "2e6AfcrMDrZyVBYUrTnDkzVoL3UeeMvBCHxuAtfdVCeqjacBKXH3exsujRTXy4AsaxGGZcyYXeeVycDfr9qt4o3d",
  "key15": "28uRn3TfEDnvkKj5egSuKZqQEGvzbVcrKnc2sYo4SwosquZjM3GJy38uTqU81MmccYPi1C4iqHTRJcKooP9mCTzg",
  "key16": "27pRbtaxGeGpRLCDPd13ZhLMg7um2RyNPMqpEz2Z9rZpc54et2yvMPPE8rS7jYLhyryJED9NBMwUKZcKWis4m8Xj",
  "key17": "2MQwd2FhUXq3VgKLGFZCp9EdiKtW4j4dmaSpwWcbj5QoexQwo1bFHEgkj9AWeFYuZkqbZvFUkbp5jnBQ6Zr6p4dF",
  "key18": "5buHu33XQuM7rnMicr4uXvTFPsZ3B4WpjMhyFTtd9Ab8nxm8h4XDiKJ4YUDpCshR4S7s8BFnLdqHmhzJKJJ45q57",
  "key19": "31K6WrAvcJdQjLedLxo7ziNiWRFw89tVdMJkKGLu27JniRosdAkSCXg3dvjNmLvTVAMEW2YcyjhXqQfXccDF9jfM",
  "key20": "65yqixjdeEFj8tFFYQJxuawe9m1Xc1i2MUA8kxVkwKoy1XPpQzfU8R6PfJADXkPCeM37ei3ys23vLaKkvwR7zzcV",
  "key21": "4TqGmDH2T7XyUgHzf4iWrTo97rmfuWt6zB6idBg1C8LyXu3P71hM1VHb2C28Rw7vHB2iizDm5YCJrXNsb8KRNHja",
  "key22": "zsjJ9JiG41QWA3h9oX6LdzYCygA9pmrEJy7Fo6226UjFe3PytMFMkiApBrjpfV3PgqNCYF3yicD98oGXxyvv6hK",
  "key23": "3m3MaBfMhG5zb7dfwvhVZfEzCHyXS5rzN8rdciDy5A2GphEm9pzV8oKjVaMzDHStBogevRHWx1a14nwrqLDCVkaS",
  "key24": "HcgaqkWX4BrRjBcgjhnogoQSs8ZwfJ4hntAvL3Sg7jnNnkPKnLyXM9tXvvbo8sXp3fJm3wxvZn33n3Xxpx3GDzZ",
  "key25": "5ZKSRn8wX9PGruzQJeeJBX8TRaiiHoqMMHSM3JaUHEZ7jf6iBUvZfUTS8HJ5iUXTvME7pe8SZ4MaRUkkDaXegiaR",
  "key26": "EA4PZkBQ1f2RVDnxFpF9xMgPSvMgix8t2dMQYvpsShFXePXvsUMjnAKn7Fn7y8C4V59M47EqafVEcshG3e951p2",
  "key27": "62U6duyYj8cdLhsSrejk2hSPqpu77EzESBoNW4fG8wBkGtms1Z57cygVFw9n39enHX5gH2CDbtNHTFiugCDSaf5E",
  "key28": "3tVBgZ5QrgnRVV8vDSHwXVLAtc2Es6NnGDd2BuUjt7ADZ22rpFVGw6DSMi9aPnkvttnyDhgye9DRSELJ9MwMsuZi",
  "key29": "5ZybATENjPJKQPczAxPLXBXnwxLuwfLi8q8GR3NAb8wouoNn9CkjVN9igY13r7VoVgaYt45eEUd2RrpJz4jcQ9S2",
  "key30": "3GprMKdscGeAdnw9THvgbWs9JDp6mXUk1UhqVQ6ucp3jXviy6KGHJXuK4mtTS7ukPAv5fKZ1PLdK5tDozjKktCDu",
  "key31": "6QyMW59iHFSmAB5czy86vrfcDnNQd5CHDb69j8PjG2R9b4KrDrU4R1mJeokpHTUCQ6hwTHtUU3XNQ9Z1A4ZXrKg",
  "key32": "3fF2TvBmMRYZMahpA2CQV7SuF5NkuUo4wvNFxGMwzWXbeNSCmmBjcyiwdpPSo1ZrY5x26oUyJBxAVUbgEjQGoAhN",
  "key33": "dmyQdqMMtzGJE2fY5wvFs8QX7qQfZ8q295TrHrJmbr3J4mK3iaavdmRA3gxpubMngv2SFAQQWVNsD78Qf5h6cmo",
  "key34": "5RvDX7xa4yWjam1R3utWJqEMTSjnaUCgcBLfdcyTALNhiDNfBF9xdxkJBvMKGjfCq3GV5Dp98F7A8tEpZkAiWCx1",
  "key35": "kxhyDLpN51kPU3iRVTzXMmKmMbVJSgikxRp6RrxPVhsE9hQH9FVjdH5pDWzyJ3isNXKqvKTrvnAq9GjJV71Rg8p",
  "key36": "3gbUrZtnyCWKPPpov6LSrm2dCbuBpePRNaWzqYPqCZwewiWj3tiBq6pmHtVpVgpdQZbbEowUjAKqW4Gm3dpEHiZh",
  "key37": "2Du8X9bo8uG4EnGGn6aMftLZBbRoxUdLcs1y4sjtj3DxiDtT95TR8dNroRiFkNXF3DmLowqgXshCrWxbAU8i8GY1",
  "key38": "63rLtSoXnwHamWMkdg4qtFvcCUMAaBiF5WUy2cTDXhpSiaAT1WadmVvE2vfysdTsJkW3nY2HeG53ACYAMaLov4Pn",
  "key39": "4VjVUbKC67Tpj86VZohQ73Hqy4v2VG5AgJX7FzcNoKwnmBUVb4ZMyru3suztomqGp4ce7CRkoUjyEZttManRtosz",
  "key40": "4GiETZT8ejLQ9dvwUKB4Qy6u3xofZp8zF46h2nSTASUoppVKLFvMV2oUjNft9G5FT5GMtjvhY8NsRBbExw2gVpBX"
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
