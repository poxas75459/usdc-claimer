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
    "541ykMJbjSL7aqaCdPckvWLxamEtDffUBEdfGPRzUuuVnGDug5hZsEjmCU6E9bREM9kbj8Fo7HVZ2pSn3dud2t8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mNPWM1sFxBQs4TgtvAgTiP2VDMovxj4AHNBkSPK9eUveQwHe9cUbH58SHpK88SUJy4uwFNeGb2oxnpof3q6XQad",
  "key1": "2gWkV2rEkngnLjNfJTmqa6tG8dYLjZBgTiXMgCmUaxL6Z7qpWsS45ymUpVn6gd4KVHiUkJy5BkA3o49wXTr1vNhe",
  "key2": "3t3NVCGwp7puj7AJXhihawzo8MgsXdmZL5YYAdBUNZe7vTuYeov5wmsf7AbzZnRseqmvuis1MYFmoKACvfsMS6UG",
  "key3": "2KJz1JmS68SvB7h5oBY6vUv4hiqNxMGS8A4TEg5wCs49beQcLd5X9jLRSRb8JdGsow71PXoh9dfdB9L6ckaFep1g",
  "key4": "3QqRoERzxeti138BLgGGMWsn7rD99yhcmkw54uMTstpM5fmhXdmtPezicCK2ZcXhCNzacUUVzghkodZcJJq5QLS7",
  "key5": "LN2XBAEXgGLvixb6QsNzgioaaiJKXfuLFSnS39WDvVy2ji7M23dqHRK5G9QotKruMUpLN1TfV2EqvDHPXTnx4hQ",
  "key6": "4viJnGUZ4bE6tL4BZRo11RcAhq5Nu5135giQip3aYy9WxJM7DcQWFVTB9Q1mskT5tQ1Aq91rEDTF4cmGREdqspdH",
  "key7": "5VDDGbDeeh3xNMNjBD5uUAES2RPPjw9AmuUqHDGrHFKLb6bJzk3AE4gjETxSodQzX128VKyz1Hh53Wo8Sj8PXgfw",
  "key8": "hWu4RYFwSBgNzwdPMDG4Py6KN6BGbmRhcz6zhABrMqdWBTvMcfjmCjQxztzDEg43AmqAVwei933rpU8spm5SVBE",
  "key9": "532A4hug4xnk5yegBGK8ZyoAdYc58HCc31udBL5em6QVn7bBokBxobGbc5aMEwvu8dSCozvkXXLngye3xdbZnmbd",
  "key10": "3gSjzJJUxYbiYxBt6YwwLyts4R7HznuoViKjc778GpCHDAfc3ZxER7afAj9ocArBikmfDrPybqGJir51mSeX85BC",
  "key11": "2wAgXeyCkag9njTv55QhBH66zG2sYHGUQhB6XopYsq1qRWZsTHLy3QAYMsyZmrvx1PQEYo1vVrP7ftNoAL6rANag",
  "key12": "3eFAyDyakSqcYdXHFg46PBYVnrjDgbQpXAP7uV9DLcZSEibNVs3wNUPMn3YCsHfWbhaTzSsSmda3xBRMi27HT8ec",
  "key13": "31qLrTaNftHFRMt4J55c1x6FhYyseTkzL8TM6SYDktA1hGCFmFT5F4EsQw1VjteFKFy9bf3uPb5y1xY1uPtkofxE",
  "key14": "3eBkeoaE79q9dvxwc3948z7UxLM2JD9BX97iqM4YsnrZqJwtJoL1PK2Ma8r7RSrVtrKVkfJj4zfxqyrDwdGvBvca",
  "key15": "cMwVBaxL2X1KCC6v7NqK98D4EjtZa9gUebM4KSXpZrZauUKd4wE6LVPKStDthWSmK1dJvHwHY4BT5CBhgz1hzDJ",
  "key16": "5MDFUwZrGJdD4B1aY3nx3M4ComnjFjVMPcjp2JH2pEMhZDhmax8fGxS7cUfU51h5SifmhKwXmGiqTXKYJvR72TKK",
  "key17": "2HpXFMDgYU2Loo8G8pT795W6NRj16ych9EdSvXBxTEuD1G5txGHFohsmWJXMbZwV6JWAEmZKtDEAKpu2kFxQZCCy",
  "key18": "3Tcm9XvD5TcPcBQDkoPd6uTP6SUpzodcgMaKwUP368C23nH1qTB24gfagFRjaZQBCGzYZA5s3hHNvKdiwHpWaP8Y",
  "key19": "3bewZ9WHBKUKFtyAxkH8JKQKfNSVtbpHNQsqE8fLSJyYBCDC722LnKhXMpUdtjmWHpRgdFMRxmyHnwgRiYkGZLAV",
  "key20": "5HoDXWKNgNY4AP2q1Nk39kKppFoEaZZ7nspUV5H5agwBLT8cmYR9eakyx6eMfC18jkihcKdK5PAJyRFRBxedsjwq",
  "key21": "2t7akSgFgdRL2xhbAtSvdXWYniD3vy4Hi4pVVKc1GPmf4on9uxuUbAGoZeHVtJ9ZbCNdN7E8UY1n1sYwxvdxSg2r",
  "key22": "4aVGDrpTXZJXAnKeqcLGbqU8H4faKCvuqX2DUiwq4nc74dSYAWcErWg5uhpMLLEVHKJg5yDUqCEP8VbZByoMk21j",
  "key23": "3Nb7MBcaExbxRPMPX4U9a98bNUHwfVBBWNeP3VpGn2Jgs17hNyiLYCDVarpSqtAjEoVLi56dw4prktPm9eiGi4Qz",
  "key24": "4h9aZo9P87hBDuzpK3ZD1TgKBGbpzEkfu3oydmwy1a5waA2ZmHmqKvEcdvVpmf8fpp3ffbY2EmcAejuZ8sW3wtyh",
  "key25": "BVwE2stpGQK5CANCMBNeZZNgaJcbAC7na7ZnnUpaBapJ67pm86X3zpxHvpihjGWKE4EnnBvaRp9Rgks9h6szdAQ",
  "key26": "5VsSwTeLvctQmsD4hv6HT5unDqSbWGemW1r4pt5QBbobkQMUds16zkRSouAg9ZJXqq8vXEnRoXL1GXTzFdMq3Fey",
  "key27": "5X5FNkUr1KfU4YyyAdAaFG3vGaSMAHPaKXkrUe82djfYPNKYc3dyzvbJg7ugtk2FDUG9znSHuG3KQSUDCUpEuFWU",
  "key28": "5DVDmeSvMC7v2nbEuw2EdsE1vJF5XtR49H7UhM3LmnEqwBqvYSqDJ7W3MCHy76TB5wkdcue2WZdLy3wdZ4XER1GA",
  "key29": "5VPKiKDdyYNNKPRsBp2fsfKETsLRtcr8wrNGKEATQXqL8HycKfCnEZXrwtB9wFE8BTYNSwZroqbmWmD9RsD1ePNN",
  "key30": "2F4WghTNoWaXXcoQJhptm2dhCFpPEZAkro6FNvyN7bH5cieGexHutsSd1gCTjkxbEA2vGEY1KcfR6t4zNxfZjwQS",
  "key31": "2obUoQnwidSgw3oDTEyMX6ddBVDYr786QRCzcouQrbnrkN5scZXG1igWiisgvrwRSsvH5MxJ458isGRCH1jwD3Ht",
  "key32": "4yWfFbhf6zWrbMyzPEQ6Y3rWhummjzSzwUHmiw2RaFkXLzZR7VrSUKaMhaqSr5CqEt4Y2zEvuEkzsj1VUexYTSrz",
  "key33": "5i4Gxq2m9okmC9XoJSbYmsJL5TpRfXaPEmzyzwagq9h5PUz5qZKDRijkaz8aGe7UqccL6SrEYJJazvhU2x8V9ZXJ",
  "key34": "38Mww9r2Z6G1Cz8E3LDQvs2TYz8Ybjj3MYbb6HX3cZrGHDQ98Q6EonBzQnJnXavBRJv9373wBbHssvwWT1gw87j8",
  "key35": "521WugF2zQyW4yGJx78ewDNs2s375NjZBpNEn3F939oKe6yybyzotTHPKci1XPvKUpt83TYBzAySWB6foj9U737E",
  "key36": "5AyjnTXY6MBRA1SChs6o2B2rAaAW4GMj9raut1aYNrUNgQx3MPHTv6LtCHDd7gAYyme998ncR88z6Xc2BLQmeXCM",
  "key37": "4s7pWvW1CfTKT65Na9hrdekYgvjZpq2YbY8giRopGnL5or9MSoSv4ZN8DnU1ADjWxum7xPaVyQozuCQhohyJhCe1",
  "key38": "UBBj2zk5cnCnQV2aURF39zfG5LZQ47dM8EnjmgM2kZCE8jvsQ65drb1GPYArQ3Y3iyDet7W58wDXQZDZ885s6EW",
  "key39": "5qLBgsMJ9MJgeH4TtKDgFAuMyB4QdWMVspkZHk44mwsDTkij7HVU1yd4998CPhnSsQU274e8U9aj7DPuZUAapBhA",
  "key40": "4Fmg838u4oNwoYhoBD5k96hj68jasqqJjUW5jZYfk1Dk4ZQrgf9awN5Zyfds6zdCZT2eLESaxytR6B2Wu2doXYxB"
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
