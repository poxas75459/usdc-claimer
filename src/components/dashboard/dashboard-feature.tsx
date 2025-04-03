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
    "2gyshXgwECNHCSZgp9D2hBibBQZ9XjKfpjVmAdYyiajRVFrwVV6ZsSvFuUsafd7z2U2HcgSX8TC5Gxej3W8qdzmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HBrvsFAdCLP6CgzgGAb1Qqy3nuGukvwHJHRqZiZ1PjRinijo52oWiNtU1over854Cvq1QunBF1aqjcYX6Fa4L3t",
  "key1": "4KcUd32H18zKXKr3xSZQEquC2xYZobebA4vU27nhZMkqSkUhRztCWZzUdnJuSm3JVMaRDnJiRcPvcHAZ4J7w5GBF",
  "key2": "2ypem5VcQxHjPy7Et83Cwu7g4xaE5vxSXxQakH9mFoafjxhTDW7zFhgYnxRzWn7PZjTdGUjRww4kSf7XfhJMADn9",
  "key3": "ASowfg8od44Xnb5H7aiqDLjVojqFTGEDX3gNg3J4JdpgMy11aSH8AK1UcaEfeB7bU9uMcfJht9nEhY8a6ZBWfK7",
  "key4": "TqK23zizser49VX54mL3a4NqPbjAsXDEDDkYDbRwBD434HDEu315AxqPRTSYekJXkeb8smmutEzAYFXfTCZqi5L",
  "key5": "2VAFofTwNq5t3Hm53ewRwhhrVmFE7DkM9eXFpcKnEJDxveqwJRjD5tnZg9QfZkwpLsEFZhmpoS31Ks37uasrgrPd",
  "key6": "5qonUHwkeTQXrzmWimtgs9N1UajPLwL3BRCsKhi86nHvDPD7krQnb6p9XyM9D7hn8Pr4ronZyypi38UK2gozMUML",
  "key7": "438Jz6KpKDPtv5tKEg4f5aJxrc6HtzRyqXupbPVR8cyDu69J1UwB8ojHGFUqfis2dwAWpF6vG3MLVwfmaKRHdXGz",
  "key8": "3U9c487A4zCVeRDygDyA3mmHxd2m9zzaUTuv2zNmSPMgnUQ2oRrs978Gwkt6Dna1yVf9mNcLax7nMs92RGPiZBUb",
  "key9": "44M9aGYLxq6qhZNGXvXTwayUqGM1gcxRuxGxQZn7PZhwVvKMCRGEXiZBU7Ya5Nb4EVb9UuStEpVnDNxJHDDGdwx5",
  "key10": "2UzdTXXziF9jbfzuhzQBLj2iA9utcBdkKeFS1nMTAd6LrfKqYoVtvB1Dk1mgPfPNfDjwZ8WXArt4vYFgRzQyj7eD",
  "key11": "4XjVzTWcX7s3Xayr8iei5aXd5A12AHEAnbDA9rqjCUT7hpmZKT2DqmxGgawWVtsABws7kjJw6BAg5L78GjAUF6Me",
  "key12": "13hETCHMYRgZxdZdnYiwJhUVYsQ36ZQKvZKPzDzeAAhpJEr5TXfghfShadnbVtjy4YUPCFd9EekeFXNn4zhitkx",
  "key13": "3op9q11ECdme28vgioekCYLYBtWcURtKgUAVgv66xoPEzdPTFoJDNaZ3GekiNZsFnFkENaszzCSNPptEaxGmimyf",
  "key14": "rRP9PkRehXkMPfnghy4zaC9g9NTKiKRwi7zfm3FqimWQt4D6Vnj1zUtQDevXhPxGJe6kxhvrqLftw6kJrs8dKdk",
  "key15": "3X93569oy9WRA9qFx8moG4wvxowDv1UJikEQqqH8aut8BwgRRBMEuhA4PZxtL8YaifpZVEYARqn5tXt8tNAESUjT",
  "key16": "KcpUaSrv52NYew3EnUwdPnptbWLbtWUpLygJgQTjVTway2owRb11XWzdVRTmmqdd4LDthEydZtHod5RvVgBQSEW",
  "key17": "3RmkdqJV2rmsoqiQQDa8xMpnABuH5gAxAgU86KUTQhVFq1yUjJVwjSisb5y1XaNkmUQuJo1Q1pYfywbUtGgNRTgV",
  "key18": "25YMpXQruKwYBYP2yacoK7MPVcm7f2iztgQDAKgCLCvf7Es7uSw9xCmXd4WGu4YQsWGS948SQFHWLSx9Bfrur8x3",
  "key19": "2TuoWJpPvgCdJnqMSSnWtqK3CYHkUq36D3MjQwj42Bdn3LNTj7mtCUyaJcw2zL449uDCm42UNZKbN96X8j6kAxV3",
  "key20": "4SL6U3Bo5kB5qmYSATSPBDYeDwcnprw66wXVKQquYLdjqByQf8W8KN2etxgEEWj1WwszjGpYDSjeNsFqCJwZtL3w",
  "key21": "Cq33kfEV3PWRpCrDkRiZuGCryfb6R4cfXxmhYsjFvzrV7UyrvuCCgcYsANf5FNFsPqcm7bfi86VyEeHZsPgHTQp",
  "key22": "5EttgpEx3uj2goPbDNHzX698MxevsFBxdgfrsWDzZRW9hzGozQJuWesRYxNE8YR4fsDJTMWqiKZ7mEN2CwUhUUQH",
  "key23": "5NJLB8XGkCutr4Rs318AaoT6uz1qjgPoNCV9HGig15NjEtRVeZxJKcaZoaBsY1Dd3Yj6vNbBn5UJNCvh4A9ocyZ2",
  "key24": "3hkD8MVHwWxBy9XSy1o1YedgbfuA1N3MNzufRVciBJ1bWuYXif6495vKMnsPAFJt38wa9EAgGVCQtVVxM4cLLZdx",
  "key25": "gzeAy1fv5WvuP2EfmRB7eEjV6N1yt4Q5BmmXUbtNu7khKiFrn9sEnJMTTGhbck5xD5ffQS8Li8PyaUAiYHSgpXA",
  "key26": "3CZTfy7fE1JSpeeYEoJLbDxrD15sNcMJT17NYiUF2NHxpz7CqcztjVts5enQX8LAbtsub5W52FzE8SVmmj1kuHbc",
  "key27": "2tmu53Ujg5Hvd6ksk3SjRPDtTjTXS4VgHdoB3yMWoq7Xio4z2XWpXoJqKv2TV6QzFCEMZoeQjxf1z3deoxM5M6yJ",
  "key28": "3tm69cPjSbXnDCewsd1hCiyTEj1ig6vz5FtBHcPKoyS88kVHergUKBG39zKJ9bKtxE4AWh2XpFE5RfyXbraQPw2H",
  "key29": "5CSbSJXHwvviSB9kSrRA36rwWF2LSNbmDz4U4URnHkYQQnk8jz7GGBmMJB5tAEZnBx2wxdw9dHpYNydqc9NPCQAW",
  "key30": "2AQ36qNF3H6GwzogMamGC5wqwFhXxwb1Qx3TxW9sbjuerHUgVvvZ7zcNzuuGSu2d7gc1ntxewtxeE8bVY3pKKaP8",
  "key31": "3k3ZxDhL8tM4wMn1cR9MovZD4bVs5yX1ZqtV53gnspCZq8aYGUznvLW4igLtt9Tibxx9cSRPUp67LGQnfvP5vEss",
  "key32": "5jz9ci7BwacNwTrxXQjnDfqQNNft8SzCGeAfFbwC3WSXF48HbsH8R1GPSDaDAFUWCzWtFEJhmRiyfpShric8LvkS",
  "key33": "7okzK6Tqi6MfatkaXXZKFhT7g9RA9LcmqX1Ymj4GcuRj1dYBfAfyAabq84pPJPfBpEx4Eb1bqYEvHpLSV9SWC7U",
  "key34": "2D4vdZLGBWm8ivn4h2x8Knge8fs2hsRnkCFfqet2fuvoJ3sipWMPzuuWxt7Y4CcMbPrftaS7VFcid3VP8UFPnmpw",
  "key35": "2ZoFjCh71Q9SR3gFdTcR4kFsXZ3FNJGBtoQQV59sXhuUNoTV9TA3pPaFCCxA7qwxXgfxn9qsoxe2M2uUY1gWBMDZ",
  "key36": "TxbeqcjELV5yBNe3JS2bHVyY5qqCbPvQnoFbYoHUzZdquQWGU7gvnNJEcfgfaM8igWMaQku62aBixJC7RbztvE7",
  "key37": "5B6EivVvaT1Wb1QhPRAhF564gcY6oGP5WBSPwrczTLCS6f4Bz2NkBWfvK3RSauGDRPsuZXmCe2MUQjpYJxJMLEgP",
  "key38": "YeazfeDuArnRNNrreHwZ1PUYjDMusDwVFWQytp7Qd9XjiCv88XLrpYfzT1RZEzq1SmxvFgAZZb1Q6h8nRJnNyEp",
  "key39": "5UWMhVrUnTTRDnvxBpWFrJoVvb33cZPvNUSwSS4DHgJcziWjNSiKBhmaP35Y4HAuZQT8yBPoYFhcHTzknpHNgaA4",
  "key40": "2kKXHdeYRQxBUxgG2urKkN6NpmzoBqvdAjMXWnVJrH9cXLhXzscnqr2BDgkSQc1JKJcUX9y56EBa4MJPk5LScUeQ",
  "key41": "27oGF3tiLJdDU2oHSSs4JFCbXzrK6HQFX2fJQbu2cs95zohd9LBgrMxniiYMXKPbXHt1FypMgm5hhHeh53f6hxiP",
  "key42": "2G9ftF1rRPcHbbBpdaU9qvqPavBSHLVGQzAxdkCFP58xiPB2inBrpo2qgD2u75WNjB2QCSSnhqiHZUHszhzpFWjo",
  "key43": "2X3PRWTe189wNCWrEehBGa4EFkfD3ScAJsFMWMXGjHmQLq5b5FsCmQMuqXkohD8xT746EEYypNdiHYgou5tzj9rx",
  "key44": "56nqYWfG4YEsKuSJowzu2Ug7BvEZiQJJ4dt5JErwQBYRx8aLdt3t13pdAmVHHnJyUFET7ssxQFvSXYAyLQrkkm52",
  "key45": "53Ke1iJi7fpvQWEKqDa1QEDaMZdRCHdMZZG7TRgtQwNne5i4trCKfHTCgxTWLnL8Arq7GdFhyy8uj2dJUtKwZGgi",
  "key46": "2V26ujFyxLrvUiE7kS9MzT1yVXMaZnAMP8sMwR5d5YV6fpMqEsHKuLYkgKUpx5kboXtAmMPLxQBuctpeaudmYazF"
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
