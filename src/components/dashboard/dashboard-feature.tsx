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
    "4DLZBJdp55iBSyHyqTrxwUajs1yvBLbiqn18YkVmhjMrwZACkjZtcaNoAVoXnVQo9jGvwVKtakXYMBZF4oPRYb8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bhxqKx6uFnZnGzvFyVQhoh9dGNbf6eDdMiL7apmGbHsDeccpSkdwvLT1Ub9n6uR6WhiPCzaC4P9w2TksfqU3YLu",
  "key1": "52e1iN5DFxRg8n389U4pV1TMEB5v2bzGHBYqAigXnZ2HHGWbwpdJyxqcK6GHe4Wopt95SUXrWk5vTwcGUQhWLHUe",
  "key2": "3PTuMGXB3QhopQDcz3BgpXwDSgFwu8jCz3utVgTdHJpfHdoNpoFmL2tyvBB5NQbqi9NWbByBiaT5BFSNVCJ14ptK",
  "key3": "331VhH2d1QQeL4NsN7cg3gihcPYkn6uXZ8trGL2QKwX3UAuQesYSMagHazjEQjrsUmWdY2ToRZc8VecjBECtnzZS",
  "key4": "VvPK34aQ9czcFsStHNeBGga4cMAZedckDVGCy1oqueyne7YgYfy58KXwLDj18b48uzME49b7XRZvRoGipoMFA66",
  "key5": "5aw26sYqUwUvgTTWdymFv8oY8tcRT5Z1dL1dVcVtJokAiY7YavSqUbuEPvzFmsu73XbscMhtCLow7ZzHkL2mxi6o",
  "key6": "3dzLVVSTTr8SwySGdAHPgmLxW1r5tAB47xfbGiiYMuNMeGBTioTeMQf5oq6csyU2XEfSNH2D68VNfRPQFjFEUcjW",
  "key7": "SS79GDacKJqWfMYiRUkysib3QpLX4tPKrt2gsfHUv7gZD4qYtmdj3ujqkPtsAsmQJAuu1aCqRaBj1KPNFrHq55Z",
  "key8": "46ovPkgFNzEXrmNWNnwhJqitf9PKs8yeT278zec4cCu7TPdu27J2bwuyqHeBcFVQMg5CuRZfxkCkpYMaiLiBzXHi",
  "key9": "4Ubq4rXAgQiFEgzETQrkJPMbQpyXjwEM44M4knRy8iJXbVLriSHpRU8mYtNTN643kmsfrEHv1gs1NcgPzRBsivUt",
  "key10": "48sBBY8K3Zqh5AcAAbk1FYbb6cy3Q91bE5kSWYSLnMQJUbFgMXXaAmgTt6hwj9xEYV3SAmwQmVGkhGzegPiSe3Uo",
  "key11": "2GeijQrPCG8mEj1uJHkhmhH3nkwzE2tpVKDDnVhL3J3ZeGN8PkZgwL4rJPGDT3iDhQyr9d1yFk2bYsdnkPS9hDNT",
  "key12": "4Hj9WUFhrHhVgThoJwaEDELyxKQC5KHTAhtqvw1dkJBNgVf8NYGTwGAGGtCyN4Y4V1U412BrQBt4uCscPAfgCaXj",
  "key13": "3PP72Y915LehhWGaKtNF3Z9HU6QMGci9Mhrxmr2mdKEEPcfmeu1TGrn29QhKaCJXP3PDeBzBagNVpTCLTpxFPn7v",
  "key14": "RoXm6KM1WNa7eMeFm5oAmmssVNDUw7fsM15j8MiTmEXMUR7b4QX3fWmUtjaxydsGC6kw8cNUZ75F1UrDQvpLiSe",
  "key15": "DMYhAn2n6yJ1cAXqqsA75BQ3jZiyQ9ehVL5C12YMCJWvoxrNuiakc8Tjj8fYTyaAoinVruZ6zfvboU6GShxTRmW",
  "key16": "4ve1w7aRNPHiF6N8P5Q4NgxxtSSKJ2nrrHbvRbdir2X5PzNvX771xURjD7itKTkGidH3ib69PrbU4LxLtByvjtyK",
  "key17": "iQ12ugHadNjBMu6KUX85SdEfjEurjMWNyXXLpFsy1HQsVMe2LyWZpr9Y7BnSapE4Bn2uZmZdtZNGHy6PPCVj2Pq",
  "key18": "3n14Ki5HmWXQwboi2B5g2w41p7bJHMrV9uxUt7YGmsy2zNCpeWZ9k8m9nwDuofneWHtyzJsaFd8tNZFRZbyXy4PU",
  "key19": "kmKyako7UdN1nTYSNwpEyihB7WtfaHuSvPzrSeUNavZLfDvAo9vrVBEL47EMtx6p1fmVJH3rTVQ3N9mbU8bFhd4",
  "key20": "HaWwq64bs4Tpt19yVTAm1isEkoDqnzR7D9fEphYSawwoBAZLrYPUJLtioAAY6QjykHxGWmvN6TrzjcWo4Td62JR",
  "key21": "3v5irPxf5RcgFyXe9pm5iJXezj5YNUc5gLmX8Z7wNMr1iDwGu5RR2JYaFDtNNYFDGLDymf2R3oQDLyVoduNR2t53",
  "key22": "id45ja3sZ5ZSPWTrnTFr8eMaTSzyas9fw4pVGtdkvGVjk5xChnastUyKFLHqXAo7v3ihdWiAE8oP1uQgiEm51Mf",
  "key23": "32c1ExG1pqenaabMbWSVqKaNNZdynU9DGJS2HszHzWCjHCrShTDWx5UPDUwCagha7AtT7LUj94GP96MbCSxogSps",
  "key24": "51sVErumaZ4pPGRCCPk2ZAFAsXUdxMrjZHEXnwHnyewbjE4Kydbd8C23wQzXceiLzqE4A2th74uUCrA7nUCFMSCr",
  "key25": "5bv6rytpmJTb9qvhFPEMkbcLYLNHqJVr2hS33UdarEHQcDjPgskCjzQV6jBPqFW1Tw5rJVwjGdcVs1wnNVXDCe11",
  "key26": "65jQWGBXBhzLSJTjWxwSLM4LAW12aAL46kTHgZdsdjZhJghH6Tr7FFKkHkkMWoBGvrUsa36pkw1DtaRkkSkhZbGp",
  "key27": "voB4nzNF8SuaddLLXX4yFrcUd7ey8q4qReSdeLGcLqD5pfcnEhSyNNNpTg9ZSPsdv63R7acWR7W4hMuafHPSrtR",
  "key28": "66qkcXQ5UURsQgGBNG4onKG8ZJaVZybThuNWhbQdZwAHVXYwVpywfQjUM8u7wreCfstuGmYNkbWneJ76FRnLwgBm",
  "key29": "3Bth8Eh7PAWebptteaJNMXJ8x6CAAVY2brx4fUcticEdgkeA72GT6AGiUUtTaM4Rn5oAFpDFmquLLJwWD7gwYcbp",
  "key30": "3SdtXcyPZscgydNkLz7vASxHENPpv5ym7aPnzrmLoCXAdcP2mSd9QezS7XMr23ta49NrYWPk4AVAejPoE6PUKkSJ",
  "key31": "4kQHH3LYp8ERY7QFcKdk5iPBSkArsPyVdsBSpTdNZiKZUvvCSgQ4sukZvkCHCHeVUY64QPgfREKAuhhqxrZaj4f",
  "key32": "rkfewgje6UXyErGyGtHqEfqzXYSfi1kRtygidG1pz2KVb2vHd6UHok67TG2xQNuSU5omdyQSkpw7FerAfHm4re5",
  "key33": "2AGJE6Km9G2qhDT53ZmSc1Uzu8AfK3hGMRbpfTR7a5sPLQ27hiGB7pYBzjaz5NKAVFh6EGL1cDytY7kwHLExG6mC",
  "key34": "3zNhMqLfv9ZAbLp8q9wgQzCc159pp9BS4Km5ZxBoroNm4ReK1M7z8jgdizesCRkkKqjAdaJSgALePniTtHBsgPxL",
  "key35": "5bV269a3zuoukiao4cRoAcQ8vJPG6sSayeRQUi4485XJQ59EabAq89AoBhdyJsbqnKCAMT8eC1MJSM1BkRY2hkn6",
  "key36": "4hUMhNKsNNP2J3cL1N83wfoZYvu3C6dU74q4KWxujk5GNxSCq4Wm5etGXCTj5KoU3hVzmxC8RpTBR8QysjHFXb5E",
  "key37": "3v7yvQvAWUdWsFaP8ccNqk9vPHgH1ZiHQC4qArgXi5nqhAqDYthn5vGGK8fWmiaSet1AkgjgMWJaLrhYozwQcH8u",
  "key38": "66V3H88aG8gZp4cqLu3N79r44CYrhnCUGkXLAYVkh77potHNmWjw6Ey229Z9NYAmEZ2tHE9i4PuKhawmY6a9Dgqz",
  "key39": "4ry9GQYDkBwnYQo3ZtS7mjgkPNaoCeL6D9wsF3oM4tEDMRG3vX7dJXqitEPvmBhqaDBdRQnJRsDL1vJjGcAc6RVk"
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
