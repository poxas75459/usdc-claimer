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
    "4FZBKLtdHW9up1UZk1X4KLvSB9p7c54dZSw3d5u1L6ZemsgiCasWmy9iNPStEgGw6QHSqfW2aTuVtMuaAUkCt8tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "233fwyzEbKo9SmFGaxvB9xT4mwnJd2pK9r1SYra2GLFpSjVXSqDE4xmUvT2peyUxL4bGFvSp3yLaX6WnAUuSLTxp",
  "key1": "2uvPRLhtywtTAy64YZ78jXHQVHV6cd98cYaSgDcY7wenJh5kFpbcbkZwi1hAJGJyPmFMoiSVu6dFYkCbeat9G4JQ",
  "key2": "4wszouUDA3fXjXC7iR8uTVCBCRk6BXnYKahwGbVCRRWFN6yV1TykeUfScJPuVQ4LggqNu9VBoC1ZmL8Cd89x14Dn",
  "key3": "LJbtzffDq8w2YHRWsrcWm3PxjXEnLywMUDPszc9NXFgM1A22muP8RR4Dz6jhvDuQTrvDpACbB89oPUM3UT46e96",
  "key4": "5ADT8vpT9exavzmoXqELFxc7Z1z25G9WVXrWF2YATHAdk47aegLJbvk2SN9De1HyS8wMCbwQAWiQQFp45Lr6uypW",
  "key5": "wuFGHGnZ6L8L2w1CfRqY2C5S2DJWyP6fCrNSva9QJu13eLePA62NohdnhhPpXyRdDWPWQLbemn8E6REgEk5qvrK",
  "key6": "5mrqPt8kdZpzyu8uBeNb9LMo5ovHdm6rUtsjQA2AKWcMvcam7Eptaxh3cAbu3fTVhRxL75QuUXnmMzK8oPcKe7y7",
  "key7": "2TXprg5UXgV7PzejRVFjZjV6Ag3CEpcgo7dRfTis3L9cm5QmtPALevZe5QvbvUxGDDJ8Xob7SsdtkJSefAWfepkQ",
  "key8": "kNPmP3jEZCYpk4Caa8Lr5rB69BtZjwNRRTNq2MHTbGy2j9LVogn7XzRjwE2FUz7L5Jz6DA52o3Pn89zMWQFQ8U2",
  "key9": "44jSpXFkHjv3dzCgBrjr83LmRL25SRa4V7ZBWg4vj9xXP8siT9aaciyLapqtp5t7WBJz3yvo13qMyWLSMc43GBZs",
  "key10": "eouDwE37genwRHnoKcDsRPxaSBK7dfd6JCbVTdcoCihDw2QfQrDjM1mvpEYt888ynH5wfXQr9t17ZchrBFwtpgY",
  "key11": "28jkzGbhMJDUozeGsj9b3HBifmrC8KYyEojKJGCb2uf2zJdDsBH9xbx15fLeKntx3kQo2aYSB749Smkmh49xW4eM",
  "key12": "yMazESsPrPsuGYr2UtvTJkYysFyD5bVeuu6vPn4ZR8utojwgpfvm6j9aRwEDEG6VKqwMgVEGB3G4zyy6LzeJFyt",
  "key13": "57xwJC6hXXh4w6F71xWRb4MNP3ggcDiUH75pCVBH9Mh12QrVQckgw3MfFSm3rXKdvqeZpTEb1sW4kCVrbXn9g5SP",
  "key14": "iyiYkJ4fVVwvJsEJhEFoyBRzKFMKDo6YAetHXh5MtzBWkiBTjLEciwLTmCkJzPzjGydXgQg3RNWYzzFPcsAEPhq",
  "key15": "2Sv7v3oZx3DULq1yCt4F2GWZYkeynjTxiG9fBUNdh7fqnGUEcr8MNYztJa7D4TARHgXdDWyduUtYYoM5kxtyPAgk",
  "key16": "3m7CFxFdwGbSz6dVw3stfxE6wewxH4WVwf4TLwH4cc2PtpFDHvRwsdyvxdAwBJTPV3hsNoEJRez8pbXk1ucJ5Enu",
  "key17": "wKx4cYyTqAhZ2WjWVK3u78rM3vKrYLn5uMDR5Bz8d8t7BPhZeWMrkh2SrnGcNZU9xoyBBBjgEe4i4gK7zyA2GuH",
  "key18": "tcW9gT3UiyEustQrx4PQXXCXFXnAxhxw9odiWdXYiBeD1Dvsqnoi7C2no1tbQ7wkH4YqG1VkHKf66qKB8XDdkKJ",
  "key19": "5hyffcYxUMADE8TKjp5GUYDg3kWQ3vS4zaVpnvyxUmL2Wvhpx5sgV67jwJgcxnLadtWa97s3h9HBMUt9m2RfBqY4",
  "key20": "5f6CvUZN4cXW27wn468pB6MXU6jnXB4jAoJhm3scgcQAV86hqomcV1fS8WhVyathvPbYXXGKV9xXW3LsZavXP8dv",
  "key21": "2QtDffVQRNhm44wiJWAL7adDYf8ShE5q6Qp4Q5yanMAhpu5PECPpMN5G7jqarUoCTy4cSaFUmqYi6wAhUiHhBQXy",
  "key22": "2erJW32fh3hkdSSoCu37x9ALUBHUwGTDik5RKaQgf2kv1puqGdVzzD2TwESrDsjLSVgBkFAfhd7odFD4nsLbW58C",
  "key23": "49gWX7cpyTBYpKRGnEjXgsFeVR7y24DvRytdKq2AiVM8kd279dh7bELuDVbPomQRCujYfiwbXx25QigXqEL17jTZ",
  "key24": "4pQL8uU7zt5FvbJrstFmtcNF6jsZx9HcERDJdhAaLCNyjY3LTBL37Bj5za4RGCH7TJBdwZrBNJbec77su1vVUj2j",
  "key25": "yyg45oDd6jBFvpWnD92ykFP3drTXcJ787kGXCsZxpBEVP89ZY9v6nxUiZBn1Tx113qfmYiNEbdt5RhZdJ71WXzd",
  "key26": "5EzYeoHrmVpgAytG1gm694pTR8urGcV77Zv81eENqgDyaGmojpYDNkbKCdXHJeryYpkemEfDH6sLJsfb7acY3vLw",
  "key27": "3xifB4nE3d1iUA5Wmme6jrSVdp5uvHSW4jNvdi1qYLd5bNJpJf4ZPvFQyy3sGQwnLy3kDwyCJu5mwpLqWpineiY",
  "key28": "g2KCFsnQq5o71Aj7gbERu6i8CyGQ5xephgiGkzHerfMJe9aak1a9qGJZQwAozg2Ai45WQjxjf4tbDf6143Ffd1A",
  "key29": "4a9WTa7VpFAexZMVjyUuivJcBTumCGf9qbcGAypgwPWCrYMoxSCsrCAL2h9HNChch6YEw9T8G3ZrPPMWESSHarZd",
  "key30": "44WQJAKYyj3CZxxbEmoHANFz3oMk4L8qUuBUhVDS3Q4kbxasqcvLGp5yCnttGwNQ83CfPZQrQE6WiNY1VpDDyPen",
  "key31": "5mAyzq1JdCCe6JoyxDHhr9Dt9bKgHe65xAkyPKGCs1bqffRiExe8eDY48XKdndUYGfydvEiSh8AGSH2mKJHoQQJr",
  "key32": "5x1uiuDxsch88UsYYExR8jrLnJTZ6fyhvmg2VkuDAD1maLU4bztusoo3DbDzHYkopPtSTS9ecyL8jrA4DzefUTVo",
  "key33": "faYLwmR5YLB3fCxrSK285u1MyZEwEw3TKiomFKoRzYC2HMxCwv59qG1tcPDyDZGgL6bRG43Ro6RrHJS6DtZp2kJ",
  "key34": "4DXRar8SuWgWCePH1FnRMPbZugjcGbTyUHAgmNoWvEB3uVvr4eL12eP2ndcttD3bVtStad4QXDVUuDkR5VJg9aQB",
  "key35": "5MrpWFxDsKNaoocp5hPEdre1AtEatBzBpLW8Q52NPt4xotNJkaH2q91yBShGvdmFpmbfYnGPUShgf1gN2gmv3N6N",
  "key36": "2fWPBZbW5n5WgBUSm5xQAexTGc9e93amcJcjk5P1cWSmtJsAMXcUwd97jRSMor66XUe85aiH7Nj6JJGL4oHrGNPy",
  "key37": "X9YX1VT3T7dYsjf69vBFBrXYE6wMQpKjYScWQxPQtaiXnXdzSf96aHN95FAJRroMzxYVBVnZoeLBzrBWXUP6JRz",
  "key38": "5tJ8KZND4MBtaF4MeDeApfbfhm8xtrv9AzVz2DJupVgALMdo26U7QkKhMoMNhJdmV1P3H26xipGv2kANquGQ2LyD",
  "key39": "5vi8Vfyg123PrcaLJCkwJUQFuYkpVkyHSZwQ6EUn9YCChLV8Ynydt1pRLwbhb8i7F4T3x5eYPxhEzRXhepGPFXhJ",
  "key40": "3m8ro9132F6dqAvWDu9VYqEnBWJY8ciXYGqKV7Pd9ewyDY8Rj3wkEXkoyuzgJxmfAGXE3EZhoqHmSTAogX3jewH4",
  "key41": "5oj3wEm6f5bjNwvMavLKPCv5aoq8UfFtTTMdDhqff7qCkRB3T7xpszJS4uMpTEFwztmpBRTXuUsxT3AMsdpr8hzM",
  "key42": "63SQjY3cAenyMXsQ6HPQQdfz5B7ouRVxwhGFpr6cwjFQ2RkxSUkqWSidjLbMajVVRdK3MfGD9EtLzXfyZPSWAuaT",
  "key43": "3tGPnGkRWFoCG4vcrbsgJTz9eC6mhcQ6ma2vC7aHPFadKdgEXD2vgqCcApHPYtqBi6jNW8FcVFRQBvG15nnk6J5M",
  "key44": "534Di45Muh9ZEDXtR6VMaHJQ9BeBLPn3ShFf5ZVtmyzDqkn3xBJUA7uJS1sYEnzvUv7Sb7S5H8c5GmEu2DsDXYNg"
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
