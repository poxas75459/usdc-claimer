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
    "kfGyQrxDrtZQqTJ7v4dn2SDXsu45UoFPSDruVSyCUPBNPYyBu52mAZaqrrckNiRMjRabW1fhK5dha5FvsfBSYMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NJCdMHFhEibyX2LPc1qCmGuxiTmLsocWQbZ2HgAGXDYqVBCMmF4Nqa9nopmKTbU2Hox8xBkPhzpXhfByBicysej",
  "key1": "4o6e7mVuLG9dRpMsVmTwcshbG1ZSzxnRBs4EGo5urEuKT72xiwr7ZXAdJ1gY8E9E7ZHkUwR5SXdtgmuQpuyGYCXa",
  "key2": "MVPysSpqssxeJFBVBY2M8jRPbqnWdufqvVAoH8muuaPwhz9uYevaqHdsAQ68yzbNYgxTj4DVxhcjfy9hhVfL8nt",
  "key3": "C7DKhQx3cY2Jw8Ys9stzwdcQKyF7LE1zoAvVWYHW1Fsw79methv6S4x2kkEL8275mrJx4bTu5oijdT1kHUNbHnM",
  "key4": "5AZYvxY4ghrDJngimJuoCE3YUJ4axAXm74iKgy45VaqYY5MBrJ1kmz26jHe8RC5FbfhmhXmcVnkNJqeUut9Xsgzm",
  "key5": "4ri82NpTvaA2E2TNcWWA4NAook7tk6GsRHfagjjpsHikuKvmtcfK4z5UMyddhVTcdU3jEDw83AQSPSQe4W8MUMHB",
  "key6": "2yxXnWPnPdP7TFzLoR9R1j9HuGBW4vbKFVvKHkbiFffsRGsvZCXkSGFJpUdaW87v1sXSKcZ3i4VdPC6QgutXzcL",
  "key7": "3u6Qa5Dk9xSXuh7FXTjiY7SNyEnS1DbrXm5HnA1eGZgvjc7rz97BnbbW6N1gZEgrJTRLbsJQzzf6A33mMFBWkscB",
  "key8": "2BwRcyFPFcfPwEGs7nm2zdSPnSpguL9nTwZubsTDV6qNz8Pag3aNDrSk7L18kbbPcYgCS7eukytvPjR82CHRBg4C",
  "key9": "3bwR775k1Zo3VN9fxVy3VoJJWUgT25CExY26aMrJwaTP9wZJAt9oUpa4E8GGBFKup7VUictibBtABu2SWFW1UzE6",
  "key10": "3w4e9uSyaqeYiS9ZRfScozJxgdT8GE89k9M6SrGY7KLCdg4pkZPJ2C6ug17XWZtxEAKjjCQDJSypGyrLpy15Jcvs",
  "key11": "55HpAVL5hVdHTY4Zyo9xRMi7h3a4sq1zLHD4W6CUbKk2imDfAubM14sZPwKeBwsB6T1E8GYA56ZQoRb5AVVixnJW",
  "key12": "rZSq6Eu8PSYzEJf4WsEJTo3s8MtKbiE7Hn8d3v4i9Gxg1ibBTheDtrEStRT3HaXQfsWupqUhhV4C8dGwpWRgrRS",
  "key13": "5dmsQ54kACZLtSGNmphN9FvYkkQjNxKSxxYDCoZxFdZp82CNpAyDGbQ4FH6RppTJEbdyzV79iwQTJcdMuXvheNXz",
  "key14": "5byqFywVauD9JPzDZ7VHmMvzq675RZ5pNkbeyoTTCq1ndoPHmMumBnpnmMugnXNoKWW6nXESdGcAYqn7amGKSRx1",
  "key15": "NRLnboLHGM8SgbS1GymU9H9a6YNHbFq9F6f3GAxXE1hgeJnF1c4hYr3gw2E1wzTbgEZwxWULSj6D3rBX1FrGy3b",
  "key16": "5oQd1mvJyWKEKAwr5asbFDhiEEXevqasx1gym2TEZNvb5PtUN19quXLGqodeB92i8dvJ5BoTaZECp6x1omu6VWbP",
  "key17": "2ChPx9Fq4GhLWd4R15X75qnFkbCdnpCRJm3PZ4xkeqXeu77cBJkb275AvSjtgURkakAKbAKDKUVF9wwzGHHaDNiW",
  "key18": "1DR7KX1g81RjBCBtDY4qgJnKSfSoPXZgjFaDLh24dWuoutiErDmLyDnpwYNAQ9wMJbqjYhvybWn2dpmQyoCM3rM",
  "key19": "k13nzeb2pX39F3rwJ8FieXWuxZEWqTCRcuZEa3uvK7EXGKdaGccbZgnFK1Md7fTCRr63X9N3RQy6nd8yz1o76dw",
  "key20": "2j7gSouPrjSMFA7FgmCnxD9gL9pdSXt8gskWWBaAdGo3JkiALATrzA3gAoJkygu6dvvdiumcEqUGDMY8zs7T7xXw",
  "key21": "HbTPBZZwjXHDrEqwGLYFjY9fgLtHQn2549AEkJ2vPdzW7fkALGA6dCi5KjKz57v26d5uWYVEt1tyreS32KZzgav",
  "key22": "3shsjiaNahs51ztzn6hFEjaC3vSL5eKiXW7wqoCDT6Xo26G4xwYSy1Krt7SJaLg6RG7pjwL7ChTVtmhySW6yWfof",
  "key23": "3PNEjsu1kgZFp7rA3L8pHGMZSW1GQhXAKARPvSBgQFwfS5C3c6q9kdarKKpD9MHdsncoNfceymgbNvjy3W8uzeyQ",
  "key24": "64f75HNDQuaAy3NPzqyg7pky25avufWDthxdLMo9HvzC4Uf9eLpz6hz3bs5hzxwoRwC7g5LgbpZVFqob9EizDhHk",
  "key25": "3pshpT6T2tku3dg9Ek7UuTVQrDZArrmdjfGCxH8bvrrrvq227UTa79eHSwipfqYiggXQtHCnbSCscnvg2U22NqLz",
  "key26": "3MGje7mbtyzw5JgrSpRmuJP5a8rj4MH6isvAuMMerU8MPf56Jv8G1C7Fe8b4kdrG3cxknNMPTRGTsKXYDHnQvN8e",
  "key27": "587BPt42Ex2Gr9A2t7fV1R4SsyA9bZKazZKNffLgyVoQtnzGGXwHMiRh6y16nTJD3vMRUYuavA5CbinEqRTQQSbW",
  "key28": "3CVkLa8Bb8NhtsvwnUX9JQmwBJmpTyDCHdSF26jEM9PgX7taon3Mw9jGmgdMycPFUNg2js5tjstMeJdDmYeMzTcw",
  "key29": "cJwoveyeLWr7DYrdVFQarQQBGw7Kfer5oCCBoRwURrwtu3sonbUBdGKFNzcUKYfpgAcMzYNdQrzokf69PdfVkEz",
  "key30": "pmq47qp8HBKm6FcaSc2rDqNm8nAmrEU3odAkh4hZw9nZ5ArLgJyLnPBsxn6NbQcNKsg6q8euEYhExAw5SUza4wf",
  "key31": "NQMah683vXoRmq72zWuwx9awcS9GbZXF8gPKNoTJ915J54dYKPFqqi49FRMx4Bq8eZ4R2mYLxz8TwsnhtThPeXT",
  "key32": "5WZSXebAyuXeVwLiDTzyd1nvFxUFzMhastQcvHu8vzyHKzRXDbn2qhVbGZxd9z7tQrTCm5MRPEY9snuXpn2MwSiK",
  "key33": "U9pKe7VehPfzZKPysRX4umQpUmtCnfr3ztNhdY6Ut5Wz25LE2w864sEYdoUSoWrRLnuopUkGZfRKcNQA8iscL5K",
  "key34": "3A1dhdMhnoWatJgraDFow1yzPHbU9dpGdSUAwKob4dRhvUkiFPYMsd4RSTLpkcBwo4G1CSoGXY5noy6CyX6ZVNkc",
  "key35": "39uxZYzhNSsEcJ6KD7iH1QuMu2gJZCBkwnAx8g7AnTm985iY4D9DEg1428nxST5X44yquJ3n5CCBtFTRZRXeABs6",
  "key36": "4SQDALZQENd87HmDNooBcADaaDmKTM2MFrotJopJSYTMSJq4FrDGg64C7m43yaSYcfftXB2gVQ6xNvczgs3Vaeva",
  "key37": "GHXBEAH2MJnDAze1iKP63CAjJegmSFoCcxag7QFUZZvCHtrRSKGZrhcRf6LJBsGXcrAdtzFAfZPWFJnkCWBdhrG",
  "key38": "3b6Ro7HVbb3W1qf9tip2qU4KZBRFmnfeFTRMktoRfGso8wH2CCXSfxKVJ4padMVyv9h3QcJP5twhP431pZB9CX3v",
  "key39": "4tAEeewzVJRhYi7Csf17qxUNmtKzGNLuV4kMf64wCh3W1s2jjvyoia8kfKPvaHycax3ddcssgTXGf14zFaiNTJRX",
  "key40": "i2gMkb5Moat2Kkw6XpJKN5JmWUwSJ6uw6a787zHtoHkJLTFjy5Pfe1NY3rTVueNFEsULv5xxCy5cRjVjYJ7wLo1",
  "key41": "32oS3qTpPB6Wfg8xZYM3zY9LE46Xe2bPGmpWby1iW5vx6Tfxe1rWC8KCWNrxHD9h7xsZ4eLo6dpUCuCiH7D49wdh",
  "key42": "cGQocLsEMAZbgyAWKSaJimTw5sxAcQ7FbCEJfo7Xz3qTDBc9Cnw1oPWrMdcgKKLdDNu5Lq2yfJinkKME7jm3BJ1",
  "key43": "h4nj32qArxc5djJpST3TtSrQxMZ2WqPrXNKkN3PQGzkZeQ9TJkJTZ9R9CehKtCwKa2453zoLhmYo8Qnys5GTBYG",
  "key44": "LRzXXRNuPZTZ1oDkoNn21PcVKNDsT2MGr8fZhZKqf8kZgw537grW1ZnCx38vmkC4VwMT56rp2kV2bvGyUoyk8Eq",
  "key45": "5prRsiC7tiGmP9BqACd87SSPpn4wGbBQfXmM7GLzxHXu55SnGCHDxdkPaVCHyQ7ja79TLe4CJPpteADkiQBiC6aN",
  "key46": "C9LCakQ5Y4YYNKDaUSYn1fMpZmztWiaG8ZHo31n9gyCa12qb2pvhJtaRC2uMvgHajbCeBQprhTe1AayQ4QhjcZN",
  "key47": "588dHUKsSme66qQDzsVtGzk987vsMwRTotxmNXbrqMSYzWVy6y1Lw7YnmFGXazFXQH8SuLy1TajSP7WY3HR2k2br",
  "key48": "UbvBZxPKecsGUAhRt3Gyc3G7VGHULxZgnzvWMkFsYX1s9MtqXbAzfQwnuR4NRzLgBoJ1E6BLxHFzzjFAWP3jiTk",
  "key49": "425mfq1YngZ8H84hQa7V2Sg9fritsNq73NzwW5BxxMvvWQ9P87NiYQd5LMdJdoDmtmYB9CqukMXL9mueciciciU9"
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
