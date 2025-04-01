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
    "5K3TPpsm2x2yN2dtmHq6M3DtuuNmC4Ara8PHauCpExzKV9JLCor4UqoqkfERzsykjUjiiu8VEtA6REokgRXoN8j9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mtvThMyJaXSewZTuVXYfNNXfdFSfUyLBuezHgqo5yxgY3bVZcW1SLs7e4vmZefczsfcheTir1fF4x1a69zt2HUi",
  "key1": "5VS1r5kFiEUcRKTwCEWc33yXDyBA1JPfvj4jqxU2CbMN3GTxLzFeCHvZRmBxgfrzQ6HRn7FMz7FV6byYSQ8uHckZ",
  "key2": "gCkZKq1uFSAoE7TkTnhrybNFtD4JUfTG26konFbuMmGqncUMvGLjZ9E9aJJE2HFSgeUMy6NgDgiJXtEeGpXcEbv",
  "key3": "4vhTRhMHi4T9XBRffMCiSfTjNux4XnRZ5YgvNkupVRSx2SQPstZoUUg8Sa1rCT1kcT1axEZfsH8DxHznBq9Dwsrg",
  "key4": "F9pma2ZxB99AiinUDUUYJahMHfsS9T7QcENUG64uFPd2dBYKCNT9ut78U6xXhxb7bfcEXYLiEf8PWGixUA7aajC",
  "key5": "4u4YdfqitVhuHSJ4xcDGHuJzTw2ADYYdV1FuzfA6RqqWbv9tt7XpbKky9QsUNZcMKUmw3Em62LPcMXyeLyLychxS",
  "key6": "oK4w3Qt5pibgkKbuom9dn2wDXRC94qVcDK21ABPN5p1p7ttiYw1ExrFJ6rNDLBhizgoFFkx9NbUK36RrKNLrUDP",
  "key7": "29KN3eTCF2LrcT12EQgwcw2g4ibmStEq612ztbWSLFhkWoHKXy3y1qHzipRrRhu2XXBthQA7Hduxd2d2yfZnVkE4",
  "key8": "2ELqfBs5rvVALYhPr6M8phxbSVhtYDBjQi5RSymg7YRnmwEmNt4vgKFQ1DddCN2RRUGnr1tW1Y7MLcxZANyK9xnc",
  "key9": "4XbZnc4xt1WnuYWw8maWFLLeM95V33PTcQVV8RwyYzz9Tqa68usmnziyASNioDxCzbNP3a6wy7PuJkbAeYEQfAa6",
  "key10": "2p5hHwcnUrPwgYfoFa8H6e4fajbUBBDxYuiRh3tsSkSyvq4qFzTKoqmydoqZowNcdctpxbyTYdnj2YVuyk5jjDaE",
  "key11": "5W4Wbo4tqAeNhDkUmELMzjMtHYqYPQVdXYq68dLds7W3uXdyoqN4L4xiFZ3Ejdx44Y24thiMQesAuufnq168Lp1x",
  "key12": "r9mEXc7jNt4EQzeVT3ewgjWZ5RxqMHuTvYxFybkDj1LVhG5jSu1Za7sQuoBGhqZCf9JBt4JvwUkCvXAW69iRLMA",
  "key13": "5MhHLAfJWUWULeDZENGjUcDbcLgRPyZnUGMi2HipFMBjZcGbeQoYNGQucEasofAtug8jGENVNTq4UGrdQx4E4jar",
  "key14": "4jAtx4tDVDiE2y5pNaZ6LTZAbVKztiiDpN4nHzmtyfLKzSVoRrknJb2hNDrhL2h7yTsqYCMdmNECeCSM8AVrPLax",
  "key15": "TCAzwuA2pRMrAGQnbtixNd1e3w2uq7Khg7nvhVJz9geTwVyXMMPGVpJ6EmLP7R2a5muUmZhPpBGV4Yu7ag83h9t",
  "key16": "5sDAU5hkXZdzvq7Kz2Nu6nD26ZrRk6voECuDD5H81MMte1ChZ4UMgx9j9cgi7SQCwgzHPipaoXMu9LvZpi8PQiB7",
  "key17": "4pPsiYdFVhjzw2ES8fuL2QUBEtgYhS8aAr765vgngRW5Xd6JR6awhZP2veBbmDaausShVvUEVdyCmHNeJkUeo3df",
  "key18": "CXtgtENbhP2SWJxzuzu9u87qL1R8CAF3JTp3YTktk1HpnmSXSd6tw4UTEJZ7BHoFwwSVSU52hSMLPMWQGkCHq8W",
  "key19": "2Zk89ieZM8uDXm3hG4SHHy33LpKTNKMTKMLneK84SSa84Z1LEmSydi7V8C4aNpitXCdBk3j7nfshE5JtStchhZQD",
  "key20": "2TUWyn5cwbDwWwYJbLg2TkbTiNhEj8gFT378TZdig7ds72BEG1tz9P7254V5gmCL1xP18r7JaMRTmKGTyhq8zkmU",
  "key21": "4T8xKqk498CzH88XDxPCkhHpDJR8gaBsHarMNonccjF4Ps8GbmQ4hZ2Sc1RoBPqPReQ6i4pE93NKSeDDjiPBLntT",
  "key22": "4JJdeUU9S9eZwwZg8mFSUyeoD4umLeZXkSnB4DqMFhQDUJWMes6GLtUCNCSUrYFuGYZWNtXG78KDnohEzepNmTBu",
  "key23": "3GxQMeRLpSD1z523nDfaFUiRBcrMruxmbTQPgmTLnjQV8c8apt4a9umn6d2k2nL9GmoxYxHixNU86HeGgpRfgQU2",
  "key24": "5HN6xyApdqzG45HXehV4psUoFxdgTTU64jDk9WLJrDqyt1ByQBmCaUEad7AgktF1cfLbPHtZA52F5f7bSbjbuPph",
  "key25": "3XeoFdWhc2MiwzhURvpMvgaVAizRSXpgCgHoqWJ5TUAYiAmzeJdVapRw8mkoKYZhX8jJjoe9J735tibfS9zMc3y4",
  "key26": "5G5HJXvcF4BHWHNpjarmFVnaqWM6Pn57dJ6Tr6Mzh5TKQHeTrVC4K5NZ7gd4So6dzybTHv6UMK4PUjiAT1dnArfc",
  "key27": "ubJqmURTXHg7s1VYGcMMyGrdeRuHq5JE4Eyym9NcPygE69yiMoD3dEM8rqL353fJu45AUnnqa5r6mXKKiHi5GCK",
  "key28": "T945xtNufw1p5szj1kvpujMJT8doFk1HJoKcPcewdqDxhYH3QJupdW3Dvn7soZy6ddrfd3d9MVkT14owSGnmnKc",
  "key29": "4WJqyWBjw2qWGwMHywuxZ81Pw1SnyGbgCBb681VeLcncy3MrY8GDFjjJvstyxQFTUyBZsv9tpW93T13r4s8oX7HB",
  "key30": "2cBjhuqFr2NYdEMaMTiXUnnTYjTF9RY4wwox3To3NgBA6sd2of7QDK7tcmsiBLi5DzoFtSmB7YujAeyhSajcNuL7",
  "key31": "2Gf92dbnPwcsjWSYxXKtuPswc28XE7um3d98xVQ89ByofHfUDZmV7P538EAUoyEZeCRAYSCJQ3FwKYe7WTFoWXGo",
  "key32": "efMR5mehiw5CdhBn7dvJ4M9Fk72dRF5jhdRYveXhEQ41SsbeqxPuSJomY68jNrFots81LCV3Lr6WwpmeAZtDJzM",
  "key33": "2AyVK8EMifLGDckMxCVvY4GTPQh4f5LmmUFW2rTwpzzgNkDjzRTUkWwVUrfVgQBsqnotNKGvM8ntpa2nxaaHQkEX",
  "key34": "4SuKgEBDYNG2HuWUAPBojMaCxV8JJtNoAmYDCSTyTLh8RRYrVzgm2QujB7smmVbFCzMB975LrFrvhmZxBzWrvP7s",
  "key35": "2ouU4DxVLLnGLNFUgmp6GbqDmtysvw74fZuvuiUHv5kEmioK26g7bBwiVWrvujbLBcYohmzppmdBiCjSSrDD8cgj",
  "key36": "2ZRWX5eJ6WuFehxr8dB7pGpvN2mGW5ePWCmiod4fx9xotPg7488j3AYDV297jfWGDZrouZT8SsPdLzENAhuqr7X9",
  "key37": "26S668m9HNpZwpNNopnA93rkxwTZKfDZgBRRnx75nzoGZxmRBw1JWNFhk1xtZW2C13J8mozxqE7u4txAaoozbAqX",
  "key38": "4Pi9cywebWbxDQHQ4yFDt6TvmtudzmMHjaBfJ8aUc1bt3yyQXaqVEq4sE9CayG7vzXkVPMGHvDeAKyM89p2gVZJe",
  "key39": "4UijndhwzaPF5WUaVSyAr344ETsFrqYm7TGYphUDugm6xQSYips2dzG2M2XPU8XBq4XckzjLydzewvEjnnwt64WK",
  "key40": "xQaWAsRCa4XjHy538zPd9ykaaGh69gGavcYRMhCaYkAcwyTYCxW6JY4Hvtoq2ShQgfKwoztoYPFAQVVLFf1BGLa"
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
