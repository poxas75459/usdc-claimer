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
    "24BrsSac41ZTny9PzTrhVb3RfHsjpPjUobM3b6pU1WRHVWALnMVb2nMgaaDVCvnypQFWageRcC45mUsoexH5RSFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7G7ezTXiXGsqfhaw6hND8v7Jf85U9mM5aBD9EnbcpC2yjnfiDYzRHJpn7DMdGJ9VzR8d4K8gH8A7vg5BN9x66K",
  "key1": "2BamLwdEqJ4Q4Q8YUYVsvreAVP3RU8okN4H11JQYHA2DugUsTbt9g5w41RtipptBVwbsKDMHdFRiwhSWrFpaCCFx",
  "key2": "5ea2Q12sp4L922mGSj1cRT3Hykf124Sfx8J16UMp324HsumRyG6u8b5TWMHDFViFrgPE31H8mzrbYuvBmgz6K1C7",
  "key3": "w7mpQ5FuUehh3u4K9SWocPA136XZ4EybT2qXLjr82LewBnQV5fBnzRk3w59CFfdSLJfz71vbzq6TMbYm2ZAswu6",
  "key4": "4yV4fjEWKDsnUaku5RnKHWn99KzEu37DegjtmxzZujXR5nkYoWNVpt7Wesk695qMwDHHc9waE6JMZpD6nfxK2kio",
  "key5": "5mQ8f2cGxrdjmTggbmx12EN66SLpXJkvGnrS4wVRyCWVoGAa3BkRHWtvzLuwptEz6Eu9LcN6yyy2UeHTavdy7N9C",
  "key6": "J4L93y7pChTqupxX15iBJ44fXmBSQGJozd42cLXJN91wz7Up5uEEvDfjistWPLyqmYRHWVqTDgquX6qKsJ9oth6",
  "key7": "3CGzBQR6y16oLuk1Vkos1c8otJAuRkCiUFjxVMuVvxiPLUYBZE3eiyJYKbRz8nhvW3LUQpsuym9o7wrXZxrnjvge",
  "key8": "1aayhRVifZLugcNJ1ts48XvDUS36JbEaArKHBstmjtpT88FCEBwsgYqgBWSriYnVZDwsMCnCvryvffUGriW5Uro",
  "key9": "4c7hzA8zjUxfVyxJrk7cggZ1kuKtvnygXitQeh2Ro3ywR4bgnB7SkV6LwPsEv6iofioaouKWBR8nXfWzxqoh5hPj",
  "key10": "25iWAckQEES7AXe1fNBWhPQ3M41oeKfd8XmjHuR6f4LgiPkAfcGDvisCSkrNi1suE7NQzSSwpDcn4KFRexvexWi2",
  "key11": "2buhsNBYW7usf3PjZ1qjkxKZ8aZGGdb8aVR2pA7nxRd95A45sxswNWZTcVVRnXmbtDFjtTu5kZBV7eYvHKs3WHoG",
  "key12": "SPJUi4Tk8z6BDF3iwK4jq72jpk66iVN9etriV2yTB967hs4pfmPaJMSNpUuq65uu7CiL1C1SNL96fks1YNpZ6MP",
  "key13": "2wTAZffC8vdjHefTdTJtex4NWNLZ7VvKqWYm52ijKV41KwJiv8k8G3FQWUAy2YbRKkU4xQSMJWyE7GwarHtS5p86",
  "key14": "3ACHvzT3TSLXruc1mxpvKGk2JXjMEeXtLFrF7Eb1k6Fw56seGY6KWWPYfSFpu9b7gKVYLE9tcUeWbSmcLqSUbL3i",
  "key15": "3546JGVoqkAhxZ7cV7schTtVY1551ia6k4cbzwRvjpXDyTMGGVVhefSRFwaxKCb8qJLRi5uRa5WeNkJQDaofNhLU",
  "key16": "59BypVAFxRPLshrUSpTExZ5V22UpopWFmToJAcjvdEAkSrwM9SftEzJvaM7EvutZbQFaBk3xBZDoowr6wPuM1Ref",
  "key17": "62wfBkSwqEuUiddQKwVNf7sJo7Cts9ut47gbcKtXHZKcoBNSGuKsYaqmzW4Hbu6cwg35FB5C7DnQuyc56EzLL3zg",
  "key18": "41DaJYvdZYVaVdCvifL1Zwf8WJez6s7Hrp8zeEDTTyhjhi9HKZcs5h8JoNC4VVgYiSNKQHCsCoJ2WaVr4pDVvPKK",
  "key19": "51W98gv41i86iQcMREVKntJrkuPHyuHMdq1rds7at1TJ9HBL19f5fTMcm6wcgrSyrxZpuoKXijekL7FWP3UDb9m7",
  "key20": "2Y6RhqMmLHCRZUzBvdrSAiwEUDo7qyUttjRw2NRKtBb5mqckJycTkpvfkkh6HVqRcgpjfMfJdUqTtMEJMUWrSsuc",
  "key21": "5TA7uD5nUMbV2coRsAVUgzmcNQMhZfNZXqiDJvfouknUR55X4iEhnPX21VHNZnG6NxJdGrLk9xFQcXvQ4T9pnqkW",
  "key22": "c6XQcU5rMCs9kTrZ5tcwP1yqH4nqya1UdWsoF5jYVF7qRmCyMW4ArNLHv5VWn4FMm3pXkBxvWW77DC6mvi6xn9p",
  "key23": "nQqAtdqNd39AjdAmGJhKuZFxFUwUkwXsR9a471nKqPiZL3GiP4zWWRXigJda7wuEwtRgz8anKNUTgUmeKR7jseC",
  "key24": "e8wVuvd2YpiSrjE5bsgVd6w3hYeg1u6JQ7yzMXYSpeBzte5kEmtEpY6TQf1ZbJM2RjcqoK8hEux4koumhhAYXRd",
  "key25": "4PcVUAU6Yv9fBHWzbpWUsH6ZHwyJxMgmytCWHYEN5a9xLDC8wEFzX3xLHUUpSNSr5JdJ3AjvD53Femj9bh8HDACM",
  "key26": "32ep9LNBYs2TiFkMwdbfFmN9AS9oLhwhMfeCRGsTaJvXrAZKWKS66P5SYkUk8GwZFnj4qmMGp5FzApQpe4J52Dwe",
  "key27": "5X2Bnnt5QTbZrzy5UVfMDgxzKeB68wqHmZPexWY7pqeoLSBTkNTtwEapenkj4HhYHTHQ9ZVexTH8wtv4NVU6eUuw",
  "key28": "2otSUtfhYDjrN1xkYucNE8boVLB3C23TFCHfmtDVcoq38YT2CRJobb29hkpBBFjpBrWSrzfy9QxbH2ZzryxXK1nQ",
  "key29": "6161WMKE53e3BgcxtVxCM7LWsPiBt1Kwcv8TpjFMrVMxhitbR1qmug6DFdNfBbwjhmLwkyR17SHDv374pPEeEj4x",
  "key30": "45WUcEdToUHfe5xzK5LfZQqKzdCahC4Gv4WXmfJXpa2vmSCHTZtkTai6VWiN9dUkoy3C8dSZi7Gy84PYq1ZoSPfM",
  "key31": "4hKkxPHHSzxZGYaJiDCpqqNckgwvWF7P2YrJrxEyiEm1G7ySJdmfyfBfHWRvFdBv2MnYLzzBydSRdr8sUqgPrwKr",
  "key32": "wuBhcs8XP34AQghXLhDSSn5otYMuRbtm2jU41NHvBD6egHaySN54WgQrGXm5HH9U6FJuRHoSQhu7c9sonUgUQVC",
  "key33": "3aZY8XcwJr7PeeT3TfsiEyeTJuD2NqJtkZiBNdzprgXhYPEtpiRWtuJhcQmLqETyQotFP1R3opgy6estMiMZFkWa",
  "key34": "3S1kGC9G5aKAcY14nxTnB38b45zY1DjHGUABwqD1KPVcEsjC3ooG2FG12wNbUjfEVSTvSjRaCVcByVH9tQnURacr",
  "key35": "DpNELEiA2jHF1yPkLcKx1ZQig67bHuGg5wpBLbjmeqfiavsWgZQhUiCSuJ6giowaerR4t4qtwKG9PfrCHeKAZhf",
  "key36": "3uQYZAgEssHAu7hei4G1uCVbbvrns2wGhzjZD8arMG3zU3JaFqJ6PXjsGyMKCCgBsYwtHL1i1DgwTAPnoAEA15E9",
  "key37": "5PynyVw878CZGK7a8cUK5xycTyq7AuET6FgCoKfTtVKYa2LzY6sp1wEKz8yYs51wBba8wHrC3T9gQbGCf4PNuHVX",
  "key38": "3SuiJi5JTp6nkwWGauRT78XJQxyMy1Y1sHSbwmwMTnqumMsrmeXKkx2ntFRbkHpwNfeoTKWeAeVGJJgMCY3axWAn",
  "key39": "4pvca8MQFcFeFQkUWTV38C186tu9VhPxJrizupZxkj4ZdtkzwanNVdR84sXSVmu1p4j8XwCTJABp3dgN3FndYHUJ",
  "key40": "5jEe9PpdMVvxwVsoDcYvmt1w6QfkvJXHm6WrkxHfPHQpBcqbM1TUFb1NapgjVYPpr9ct5LhsnvLb4M32sCwVbJQv",
  "key41": "3kuBD4uueszPpprJBYA31pRBnCkyzTxB6sM9Ri764utUz45sB9ELTVKtgtrcHyys5cbMTY2fnBnhkEpbbPQzGfPm",
  "key42": "232dm8aA44cHeAChbsTE3pm6NVMBQhUU9n5KC8zYFhen2h2eBW4S49jEgs4Hi4USeAcuYtJLXfUQ91D9cfVEJyda",
  "key43": "5vYPPxXkc53hcdBFCZuAY8hPYd4iPeBvgo8FBJUT3A3d3DZrZ2TmwiHxMAYeiDANHBb2QzZKaQuGuFRVpp88Gf1a",
  "key44": "UNQ1tjed7vRF95x7pM96mm3tWR253Y5p3wdoBpas2hhzi2vWrn2wGKJHG2G5sBkudXZYnPQk5pHKdrZZxtYiAwu",
  "key45": "55y7oKjFekFmxaz5s4D6WA6TdqYvDygGfnajUvc9yRPWb4NLDYrqwVMjdF9hYce5T4kNosL6nPwkZ19VwsPbL8RQ",
  "key46": "3RcuhoUkJZSAVD7y4KJH5qs9SYESaH38gwDZruZyhFhR7pNy2EE77xJmXA33j8onXejeUnnTJ3ziBJWZmMP7trzw",
  "key47": "4QPZ92Z5SY1FYCCQtwaJM4Mtnkyj9vpRG2qh4DWdSspbfFkFt4B6TCEe4joZ4YX4yM3o2j8QRTSnQo9TXTMNB8KE",
  "key48": "3vMxym5cBmSYw1vm1HkEUhhAJRJZzYH6KVP2MGYZeYWfYaXN1r8Uztz8oCabV6cSPx35FbZ43MduRwzPm7AGb12y",
  "key49": "2fKbF86Zt13Rz97hfv96mFntajQaF7F5n9JD3oKjiLeKzSpJswLkZwXuqdVKNLQvXpZ3v8f4XzsaVwHpnZxgMhuZ"
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
