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
    "EjPjb5DckGwBhfbQxzpbr3Mj9nt2wEskLv4P3GKb8XTEKv9b2BQLoKJNDu8tFSYu4ykaHBFwy14N6mirMu9hse4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Nj44fjqnU61JvU11ASai8FVEQDn8Cbbd75VGskuwPyDQjJ6o984tQAnQmPn19sA4YVwLsY5foLtVxBrGGeDb6f",
  "key1": "4UAiD8pcdSkQaBC2jcpm87JYGegRYAfDih39hPsDiy25skVJe9CiPYm1JCeiw1tfWReW26xfkBqapPJVCRYryNPy",
  "key2": "WDH8oEPfD7j24rkrwnFDdMHABsDmi6WyBPNddtxtpAJpvzvBYMTVSUBhKGrvvxiFhkGEkKCinRZAFA3C1xKTBhn",
  "key3": "2arNZDXRLWLUNXpAFWegGMunSLE2inFwwWG5Er2RdqcWDtsY4SvoWoQpimAP3bRYadNq37Hinagdz8RdPUAz1wJp",
  "key4": "3o6g2FzUpReDwxySanegaiRJMUfcSDKs5CKaydvqEAFWhq1Ughn4RJjPVvTovGqDajqCucTdq3uRmJoRX4cym6AQ",
  "key5": "5wQauHeRcF3Wb57mqbF58RUAShmALjXBhHERWFUXVSy7rm8gJbEnENMhxhJHQ8WZchVA1YZUoD5ZRm2W5dYznqho",
  "key6": "M3JJXej5p2KMQztU2zLEwX7q8qTS9JcMBB8pcrrVZsHn6FoG1DtJunipRnM6vNbenPm19tMKcFfwMYCGMJvu6mX",
  "key7": "2cZGGZviThqHwb1Ygmbun4PkUk178ZuUcnSy521rYrbjyhxH7exp89ut8Ca1cwhrahFGaxeDdbwHZ4Bh3jv8zSVD",
  "key8": "fcLjRyySWQJXnd19MZT6DDngrvjvSMmwzofNhWp87Fet2idnoEZrPPUmMAmMpcVCqu4kzruBFuMGmdRG6UBRSEa",
  "key9": "3URKbWKrBjm62dR62hCy6izGcPVYVQ1a4gHiw8jNqgifeNErKPZ3eAnuViRrkxLygA35QsgVXFoJNh17Jf5nyKwE",
  "key10": "4TNFNqXdRu71aRC3wBXrZQBtz2B1rnNdWCnFzWnQXpKVDDboG51XNncdpQYdeSHDYz8ajrFNkDfdwhuhJ1ZBw6SZ",
  "key11": "4BwHdmxbb7CGtj2eriVNS558EaUKUVs2gYdDxw9q3CFZSPZDKWknDL1JtjrjqHAjH6FRZmZN8DniydQthRpyL68c",
  "key12": "izGLw7CiqNPT8KhDzxuAc74bQMruSS5LNUmxpdTstydstxFhmc36rxvUwR9yRrqoMmmt8zbQ12GjgUSFtmxrwgg",
  "key13": "3HUDPvs8j5wuTk5KTwQt8DvbGo2JzymoXENW4pFkDx2xg7k9MGazmsuEfhyhqcq2puPKsmMKhNoUjwLyMtC2VJLN",
  "key14": "2w4XFRLogPNWc8ZhPRp7H6WyXtjdxwNagGm4Wi6taaTaFysuo6dQTL8BAJi1KimMyhna2AzVgxSs3rodRdqj83G7",
  "key15": "GtDidTbeVGpG4sij2Eryqg3XYxLQnzY5UcibBQbSJ3EV2PApYA8CPhL89pkiwddsLhEg4FUSwKeuqtqSYVnse6i",
  "key16": "qcEpaBxUMaRN7WmChQuvazaAxJYoQaixZuYzYzxzhAusdW3Sn64iLf7VYfPS2GpPWsfwnSfn28mQdNXMamUrWkp",
  "key17": "3nfaMH9sDpfSctbWFrhnSsPntdzj98NVFbSBPjjeWgff1tX597rFETEAsFCKonDVQChXdqrhqY168XU23FraNds2",
  "key18": "4NQs9BrLGXAUY4vbT4SL36t4sNSFrU64cToRTEbovnGdUdPyYDxoewByREpjmDua2ckEQufHDVbjVqioWu3a5Uvm",
  "key19": "3n5xkGqEfsHdogYBc9CsQRwsxUPznMthRkveHmLd8omocct7FSUsXaJAkkKHjxwZfscQK5NDCcs1mdEfSB24P9g9",
  "key20": "5HomVYw4g1WUTKfg4fJf33UgYtXSZQ7sDYvhWewLYVLRQ2U3vZfhoD7TGaSDbbwZyLmj2UqZUhN6QKo6DLHRiqJ3",
  "key21": "2Eg88Bgg4csbpwcHD6sYCj3Ya9tCGDiDze5Dn8oGW5YvmGkX7kuTojyK1H5YipZB94cydYigG91iMEGfffaiNhKu",
  "key22": "64rrTv9Uk5UFM6xnkS9kHFMxGgvZipaP8jUwugdWwTynMNqNCX1GPatoT1KparL818tayqzZeG4zSh874ofQY6Ct",
  "key23": "49mg7XoU5qnLKiXLtrCbh7s2tq8c7MoyzsUa4WrtAQsTfcXpz6eyUkikRxeqtiyqXzSS7MC4smDFLpk9n5jWte8L",
  "key24": "P45tDyKTdVJLtiTUucvsXSZA4vrDqGNtnBk2A69MtSQAyKYLMhqxef7wUVyQ1pM6piCtjCdiVpNwKgEeuJiCas1",
  "key25": "5LQbHbmrYe5Gdqyh29fdme7couR9jSY33uB3KkizG8Tj1f9ixCJvePp7aKu8sKdAJcDvHboCTWr4qZacmxJgigNM",
  "key26": "JaCUBCqMgenfzfyesrXy1GjwXo1DW6VLb3FMi4NSsdx9mMKLXppLDJu7mYSUZeWM6bfK6KuaHHRrhQCxZN8RJgx",
  "key27": "wR2qUwENJox3wPRwZxVFMRQgh93WKRhEGTxEd1qZLV6T27J6Xd5WYCpsjfTGE1cLBnGhr65fvArdo8ZPWJ5m2na",
  "key28": "3SHgxCJgM1nRXTvscQGLh2MUj7uNiMRHtAoWAqVT4VbtgrPyNAoaz4SBvv1agyMZARCVuezYb9qaF8d1iy22EXiB",
  "key29": "3hpa5odWrFm9e1tBtMjXBf28WMEMYeGVbwuZyno4YJ2AA5QHwwoXvteRyQXYsDCXTHJFrWLvfdFNJv2Ri1pNLeWz",
  "key30": "5WQbJJvDRFKXU4kY3jrwoDswuYepWD6uZCEeXq56wUncB4n2dCowpAm3HA5nryAy8KgXFj4pLW4TqeRqZSMM44eY",
  "key31": "3EjZh7gpghP3d19fQWa4ML174a41NjLtcSYa4LoTpBgFaVDnHjR1BYSKGgS9CsuRncbSzkEmgEAVHrYNaYZagqQF",
  "key32": "5UiBCyn5VKUcAsvtYH9bk6Ccdw2vSV59Fk69Jsd1LrndWA9nAjAkUqACyd2ZvP1B2YHcMzuZEEWXazdyyARBHiFE",
  "key33": "4FinwP1yssAUUX2hQASQA5Pji9ZiwT2c9cgUvf7eG52sKHhpUs786TfSGnGEqCCV5no8wAywhwSFYhfihuWEecoN",
  "key34": "2jrnosnWAMPcqoqDtv98G2NV5ANaLtHb7bHSDF1vYzQYknDujBp9PG1fUaxUaQ4cd2E3QcjHn4nuDAdD7RVMTz4Q",
  "key35": "488tLKNhQt9RSeuV7RWU4Vyut1zYL1i2c5r5nFryCAEM5mrXgzRYdDfGZoHd9jEFbMxQg57cqhwivTDV32j3tTtL",
  "key36": "qAmqF9NQ4WLAQPPZ9yN6YMtCxwXS4UWV9ATKcLVN4QEXSFhcNphzg3cWdeMvoXtR7uTH6Po4CYQ8r57WrAkGun3",
  "key37": "Y1zsfgEZZhxMXrn2jo3TPFmTm9DnbqvVrh4qHieCv3pTCXek4u3xyhJA2tBAMJc2SzaDwn25T6RHggjphULPKi2",
  "key38": "2vrP3uQVkKSVs1ptStZxhP58ZHjwq7NJeiynPwf9Mt4PMhwpdzkmLiQmC7CKhiTBsij99xHqUaMPExqF1AzrQz37",
  "key39": "5f6bua3B3e8fdWgM8rqTAW9k2gvdvhb4462SS5jjCNETgZKbe92qoBtr2SgSFWz1E2QXgenNz74qC3hceKiqUVSM",
  "key40": "4gtkMvTpKed7om4B2pqQHxUMJySA5VzyhcsxTQPgLKEHQwCBXUEooPXGBPosdxjsaCjRwmmUT8SjDfQrueKT6TKD",
  "key41": "44B3Ur58NpAHu8UNZWTEJehzGTnGiresv5ZtMQVW5YBjJ3yVFZqqr1JJTBF9S2wVKgyCW6JjzowuEpW5sqeDvRtQ",
  "key42": "HrtgZAZWbXGSDd2PdyezqGG7m18gCD7u6o384sWV3zocxyHb27fpbifR6ddczs1t4BwcfWtNk5wHBr4GysKAARs",
  "key43": "4MABBt7cBmdxLfXUsr41jQ5e1Wsd7wCFmfWvUMJLm6G3tyZ6fzBRAUupUwKPRnkJdet97vEvo1siZumFAhfDLdB2",
  "key44": "5y6Ryq9xz4sLcCWa4kWGe6tEiYC3bRs7CeVDK6eMuRRQeiQfwDQ3g689G3UBbZSoSwr5Po5PmCS4rNcA4G5r46vx",
  "key45": "2EatsdUznEpiDbs6KAkVzdr4Wos1egyiHitiAgvciPbyqG7Ferhpfvb7XjHUogQHsW5A5BJS8KT46VjHDBs3hwpP",
  "key46": "G9yk4wmmdRFJibSPx5uFNcpzCo19fMiyUGm7kyD6HU3Tz6MmfoNsmnARi3NgcwRoUdYrq1ESV2pZitQAU9x6jS6",
  "key47": "2iCJSKrczF6ihWaYaaKXxe2yvHxm4pq6jRM68uUxYiPsXLVxmZeUp9bVxh41g7WhswDfbU2HHb4oWgDrreftvDvw",
  "key48": "3g4ucavtM7GgVD7rf6Yfd6A8CzX2dEasHRFMuq8Mw8LsC3pprZ88w8DtJG9sufLjSHotWv2j6wWifb8D4LihAEXo",
  "key49": "5aKkrdXUoGv9DtoXJvzNZ4AekGdopKEqAfTcUC7Li85hXtw3GeohS7dccMTfcFNPZyUuKXMsWEULN9pXVFVx9uMJ"
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
