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
    "4cCirNBSpr9n2ENgXt63Lg8Muu2KhB1B2zvpqN6oSg8nUtmHLnPiaTL5R11d6zvZ4w6ddRaqXBKyJqRJoTuFJ2z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X26Dw922QSAwccfP7WREgaPM1gyekgu631fCGGUtrF1czfD24VepMSZCAo4LEo8fjjfXpHaFxDhELruamQdQ3Li",
  "key1": "2mebdKkYHGaDzFmE3A5N1HDCaKuqzKpszpwUUwhhcnZunZ248zzBPjX5sCFWDo4YN3UANwHjBrCXUo8FVtv6ykBu",
  "key2": "3Y6rbJdMxG9QD2J88D4ewBCmUPQXrWGp5GwHxziBTBhJ5oW9Ew7XmcmmnKHwDwAvK8Mz6rpcoqmnCevk93noLydG",
  "key3": "5uKRKH1ftCd8W3J5Y2kRG8PmnoX8D9eYnHyx2fu6bosr1ncuEQoLSSVreJAp3L7t71EopGy3w832ABGTKufVs1pb",
  "key4": "3nvUsXJrGfJBau2qCeB9TmAgasp1j5sisnfZue5tZo1TESkyoiE6WbRgY5MoZxKT4PJL3ZerafXKBRDRMJGEP4DX",
  "key5": "2bC4GcTsh1myiNGtTsKjjt91E8fR3ncK5H65phFPYjtJgUDQEuBrnkJP3zRVu9FH7x7xMVv3f1qhshUkDqpar3x7",
  "key6": "4W239ytG7R9H25usmEqafKuUQSJMothU7v3vgGW51aAAdMtr6bwpVzUby3M2df6GcdnXwtTkqLaDi7bg3U1AmRFj",
  "key7": "5mrom3Ug9V5iEfFKTzrJXxcw48BgRQqvkej4BWfre2cf32mSoHYBpLMMiDhuH6AokNqitFsdsLfXttQoYyH1P4hs",
  "key8": "4uRFrJx4TWovUAEp2utSwwWbiEweg1PX7nX5YqjTfftX5PFyDBwoqDkJF4Etn3mUqi6PtLJVuX5fLHhgajAjGagy",
  "key9": "5MVKHw6ncxPMwpn4PBwUq6V53MrkThBkusGUamTEW2YZg4zsFiuKMz5KqPM8t6ggz2XvcQRDZsDVi4N7vPe3rmKv",
  "key10": "2xSCHSTz1ynRLStgKmEHq2obcuc1h9ctEadaBf8d7mjxLtdKpSegb9yG5LmDzFpoANnMx117wYVci8qAakyhRY3q",
  "key11": "4E4f7uhzefzMBR3tCcfhkL65mQc6e5j5KYd2wQfe3SKagoaHC126rBjEtfxNjAYxP92LbDjKQUuGz1nSuWzriuMR",
  "key12": "3wD81dki2zHq1UPC5QW3hmzAYyU6RDgaSKKreKRcj5Cnoo5K2yH2s7jYWMW6pzdv1LsvNVSDDT2aJCrVjUQDRqZU",
  "key13": "LeeDz8u6JSiwnLwq6UtJuQL53EkTLvbbq96qArRd9QcbKu6NMbJwz9vp3gzkTkhbQp4gs7NH99tnvuKV7Jpvx4n",
  "key14": "7f1dAxiYaqUURDH8mvgiYaGyzNDpX92MXmKTf4MYcBaUMsJaD4ZSB69powDkbyGH1JTw48ccmx25tyot7AwLa5C",
  "key15": "3LFa43gmAxRSFAiFAYKxa24kVKWeQMaxdEPTQehjd5PQc3wv2QWLeT5eiXAf3fp2Z3fbZ5VDLVsnu5YfrZs8Qhrs",
  "key16": "2GDpogxFvBQ11hPx1iDtWb1T51Wno4vQngT7axtvLjqQVd2HWejUiTJyxLiGwhWsVdfxTAjwK5xdrd8Zidkuy3VR",
  "key17": "4v3ZL6WK7dDPT9m2H2nr8r8m9ZysPAvWHkueXZgEL9evSzy86ihxKX94XhDASQAWckZoRPYP8oBhZ1ikmim6UBxP",
  "key18": "AB4ue2Crcmkqgv25feaqgY7uu9jX3xd2NY3dHvUfMMLYwWv8VmnTrRuG1s4a8QZPVQ4w4ZUXNdoAt2fjyJqRbZv",
  "key19": "yEJLpo9wy8enFstY8T7azphLVMpRVp3Frkg9FEBbmrQFtbAfP8pUn9X2s4NQ564yhPwZEmw2bsrhZV5t4WSnPvb",
  "key20": "4PZ2miuzeqtgmFBEK5P2fpp7ByJjfiBVFRafzTzN4An3w5At7xNnPN1ZiNu4wSGXicV5r1ihSP1Q1EWCMjByrEyo",
  "key21": "4HQhwYAZ1HCSNuxaD5fFBZdgdeFUWy6ifq1Bv1WquYrYHMhkp2dC31bmGaxdvzuVKLfgXGHaH9Hyr1aRiULeGzoT",
  "key22": "5MWkFQ3RUkRYUdA9K5EiC77wDCdCL1JrgJcYWXrJPMBi4f89EbpVmv7aqcfUKt66PWX7sf6NSwzqyaiwPthdUnnQ",
  "key23": "2GQjys5wB6Y3DxeJM1FZ2BXVV1j2yfzm34zHsJQpzrr8PHrvMMsoCFjEZzHWtVWHdXLrCKJmjDLCfB74t24NPky1",
  "key24": "2QCLADxmDt18Fo4eBxHLYERwdQAbv43pmibpGx2e4hb5QBfwnU8UXSytRvKf2djuxkvH1LAW85V6PKZdBNb9e8CB",
  "key25": "2ni1B7PR3r5RawJdFX5geaEZRXQCNKWA5RupVdDw6A5WrSLpgRnxYMmThciXvPoc7H37mska3GoBUN3SSoihwUfc",
  "key26": "4GN69rWoga1jCwPxyxgZmm6SY9iobvBsZ7eRNoDSCQbMkExHgJVcCyPPtbmsG81AFLPtkigfzjMrbfcZc53oC7Pn",
  "key27": "XZYtqUHLjY8bcwrakq1EBDtvd6KrivDQe3TweaP4hpBLBRxVDs2n9nx2x8Hp57RybVY2QYWP4h8Nc3JgwKVcadp",
  "key28": "4DMQHcT113uFxa9ZW6rcA3igNPi2Lg5FiEDPFQMe3RSQbojzcS6eUwp2tm2sgpZAKbr9aMh87uEqDdE7Dw7HEBep",
  "key29": "4xhK54YUi48TF8J4rYmsxN6FmVYKAtWF6a3UEsgSnEpJaz6TWr2aiZmRzCTbXiW1iheCQL8eMC8Dtgky3YyUjfao",
  "key30": "fthtHMateqeVSeUoPGYXn6Co6jz1w3mgKaisY2omiVw5KesKDgPeHrJsznLnjg8AmuPfFVLdsixapuUeteVTD31",
  "key31": "5N6eVGcB6DNv6FjMc57AzDu2bACJZYQ6FVQxoJ8fTz4zkEA1CezDJ8iAWjunviq98SVWCanJUMqutzW2S68FneZm",
  "key32": "4hruiY4VHSHTkzX1t3vQ5im4TqmujFbRKiGyWucccsZjiES9aUYByq88Eca4bHpGr3yoh2k6Gnc8UpeL6dScxS83",
  "key33": "29b37xAHDHfvosu1VuAJhJM5aRbTJ36taiNCpUz8oA9oziioUjyYx9Am21mvw74f9GxVUyQ9USgYx8P59qoHuKAH",
  "key34": "6J9f1vtqyLkbVfAaRnNsyd3hA6ReqosebQmhSqj8sjwCQ4eS3Q9iiRqXDqTffF819gWU7tx3d23vgrKV5mFBKRw",
  "key35": "1XHVcuZjBkjbNtmyBDRrcWZG8pdkAHzJB3HmAURxenkiEBWvP7VuF93fsnQ8rZyBxCEuudCYuNbgUZMZ5a2xsVY",
  "key36": "3NR29AriUfJgVrsDD7RybdqqACyF99U8w3MUuRJ41zb8AgCE6b5MmwDT9XpKcPrHVjfkx7FjEEixAkKJQiTeCSnd",
  "key37": "nY5GLw8wf9FkoetU5Wu56ktkuiXFGZLdQpZeH6BsF3gG3K2jNWADhU6TaGCviRkTAe3qKijHD4a6JQzVo5Eat1f",
  "key38": "4dGDR9ae4x6h5zXWnPvVzp293Qwd4k7kcBNKU9zNi6f7vzCmMARc18KnbDBqWiRSEUua2u8jg6ZZPRVr3RwEPCap",
  "key39": "2vP1XTouNUi9iJmjfVa1EFHbx3u2VZU839RmZT1TvyEkTxPn5srbGdmmsX6HK35U7tDAk2PmRTAojZxrm4GCeLKW",
  "key40": "39CxZwCNrjSxYtWdMjqJNfuzfssvRF9HU5i9ry5K94nzudHQaV1mCQNFbgKvMS7hwFFstcLGhMQoKKkaBbbpooEK",
  "key41": "oYy45Ln8471c7LaCmEnH6ggwSnVCKM6sAxUKhjUsYM3p6VdjRkDw4XMfhNWN8RLvMkHVNmBSzUAeqQ9NUwQnmyM",
  "key42": "5gaoRNTDiuWHTeWa4yPMk16mujy7tzTbPVKsaJk927Pp4HpBWji67Y5kUVWapeh9yvaPGJmhHNWCF988nwu1kWWo",
  "key43": "2GhdZse2vrU3vydA9tS5pVLbVwGSnf7AgGRYUsMkTAKpsTS7Uj51JBGVJJroRcQrHQzydkQxdgRoM4Qrov15tuGH",
  "key44": "ahHu7CcGHLVuPRV4D5n8Dv6qT5okdvCvBgKsAcr8PJwGCGoKdPuM2bNwKeeZTGKrmeiZDW3HZsdWd1wAPLFpajZ",
  "key45": "3yyEr8FyAdxMuYY71hbSWZFsanv8XVHRSkPKWKoGXak7acewFaBEpDXEXFcJzCyphD8tn8KEcPYfBvDcY3jdf89u",
  "key46": "4HSR3M4HBUVm66k4pTfiYGU8Bxz4aLJF8Dh7y6ksGy1wzrjz2Bo2Kf7E4X6Vr5HAdGBvb5UKcNXwUo3hwZV7v9EQ"
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
