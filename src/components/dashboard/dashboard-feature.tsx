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
    "5Wun7RWAgF88XBq1zUPaMi4DTXBMHZM8yfp9nUvwkGJ1JppQK42y4qXZN7V88cigfar21WrbVmn4YrEqD9tWtmpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EwYJJ3A8enZGU2avc7nghoNV1izaPvhnZFKPvngm686pwssDkkgGoFGRYYsLJBEhSCSBuBhQhhYmLfzgUJxKSpo",
  "key1": "F9Dw4rKjhueVqVt3d4LWoWxBAgmQS5GjJUeHEBNVwULwk1tGGK9mpbU1Z6g5sZq97h6UdxBezEwUt23PXKBCDyu",
  "key2": "5qkPAafL1zwFcRU6xSPbrq6Z4ygmpzJXjx7ZiP8tXVXZhUgYygvf3UzCe6SzMxxhgDgU3yFwUTmhdFp6gNDrShPL",
  "key3": "4x4RF6UcH9fKhVcD4TdT97FzSMiN7fx8Rnmtn5T2MCiEkLa7S144wyrLbaaFxALTdnBEpvoSXaiJZ539GcTY6W9X",
  "key4": "5F6oE4ydLXGGdB7qAf3vupupuTAJkAxvtocMzMNc4TGYCfMwy2MbVT1o84muvBNF3EjEmPVWPopphfV6WwSpAi9h",
  "key5": "4iNdSJeza1ktfnSHooARng6zCkCSxnESJDNifh5T2WgSC1eopqmfkhhj2FmoYZMezphE9Br6ciVfS9L4Na6hCzkE",
  "key6": "48ejQFp8R9FcKfNU7sREbkqdeEPrRDkJEn4XHxNNPNUpQpuGMhEL1nmxqFnZfa5ANii5X4rbL2wav151sTmJc6dT",
  "key7": "UR5KmGqBMqdFnPbxVt2uLQUpQ3BZgkm6mbi2cy66APMHesCYbEbYWqEHPL2HdwGXvwhtHrLAMbsRuo85hcea2KQ",
  "key8": "Z6isqmp6sD9tLeHd35Y6t7rDrimh3z8SfPFY4xqrKPRJ4wkKzui5zmoMW46vvjNi5mHzDEQ5LPxNLSQhEJRJek7",
  "key9": "4ZT23GTSvqughnsehiWF5dfaZU9X8pTeHd4vdK6XGjcVZAaKYnG9nf561tnY2HUFDbW44UEPWkGQU3FSicfK7jNA",
  "key10": "4Rc9WsDvagRLoXGTwDcdP1LwtL1fHQseLJ3EbLmLsj1pVDM8YpKXjoYx2evdexf5KAZK8gaX6hntzWsVb3Tt8oGM",
  "key11": "eHtjNgHjcJnT7w7xrUjbed3eXThk969crKzhgTkM8yTGZwUTLFBwJxY3fbRdTMmRKomtJGH626sXTbB3hCpJbvs",
  "key12": "4qS88Lxj4jbkQ5hDqThSCU5SkzFCkSzrQksjaKu5kZGtntmfmBJGHCve2Lz9HYjdqiUjUD6k4L4cxE4zULgsJSCz",
  "key13": "4TZ3Bebp2VeMrVPhUvUuBZ8fXJVBqovz72hb2rfTMu2S7kKvakdSaBkP5BLiWHGTzwZXazwb1cHkSdfvkSzBHs6Y",
  "key14": "2gsFbDt6MuoYcGfXboaeGBQsJPZsFAq8Gc5CMcpGm1xiDqNkwXivNV5PL2kJh18eRg4kFW3oWdqGPrVPHvPgFwJb",
  "key15": "rYrF66mpbmEiGg4RRYbPdtk26eEh4Y1U9PmwGP11oHJzje1RpC7V9TPmkGDaa5t7NUt2iR5cFsv5iARCQsuoQa5",
  "key16": "31zohLFMtbCdDTXPhfjQXc3k3jaY8ZQbz4ndSGCuTQ4FUmmZe1vTcbTu8dPEimwQKLur2rChYrbsY8vUFuERnCrM",
  "key17": "4dfj9Sa6YjUqn6Ge6psnBkihZsnKAEdiqvS99BmqQ7zQtvjbsgM45QHhj7Wx2vGy5V86zdDLepDkAmrapLDo2e35",
  "key18": "2ddboX47dRTfXu8qrPCXikesHMPNG3LchCtqCR74KzMZEWPLTcBXdAnpQT4gFLhizbu17eptveRtEPZYZzxNhdzG",
  "key19": "3aorYHkVdiSPvxfVs35519kXKmdYDRgEx7PEPgEtH8V3hwWag7x6yaR84kosmabhs4E3cPuXS77VhAsGYn4XZJPk",
  "key20": "3gMENkBKmHYdtEvoex61v6ASLhriXUDvzZ4oco8g3B9sUrm6i7W5uT42xVSBYNu32HZwytugfdNAPENB6Sk2bWxc",
  "key21": "45YHcTFdTVUpp83rJp5LoAkw7TQ2v2cVrByfYwTTGFZ78hVQ7RP1LknPUgrRTQ74Vq9T2S8eaMHRLrxxg4HTFacN",
  "key22": "32PiNzBkW2kh7Pt3vdAyuCVbj8qALNsvyJfvPEftxAzL5gs1Qw7BTLspfD3nKYo97WjFtTJHrTptDQmGUVT3feRm",
  "key23": "FRkwTs7yJDKWnFtwoPeQNmfoXh69bEVbZPuk9iGHrYumVPq5fB2YVmgW7vtiatg5k2o7gLtABJfhoEQm8JGw823",
  "key24": "3bvDx2RkpywoUfFMnTEpUz7a6cWVzkwysZMGbx725AVGYGe474W3xQysbyz1WyZVcMj3UVsjSUGBXpVBcZTb18QA",
  "key25": "5vMJPVW6hHmJwDkrKgeqqqMugRyRajusLpqTEZKf2vsEayLb4NmcupP2q6HEUySdtG16uQsvZkVCtA3pDNRsZ2vF",
  "key26": "62j91XbJeE41iEQw2NCnixvACJpHCF1PXhLDYGiQK12z4YR9tATPuPLYcu4KAqRByS7Y3bwRgsJ75gpJU4NoAGHH",
  "key27": "36UqYPBVCkmJkszhgoFA2aGieKbbHpbhhMsE3WdPNtUADZkQK5cyspogaEspvNocaFUiomfkEsti2KPT6qbz8VRM",
  "key28": "2pYfBj4eHRx4ivZvoe3fKQ3AbQNa342n4zirS9r9pLZSGBn1Q3pWR34SwEQbUbFnQCeHFGpVChabYYe5FvV7hf9A",
  "key29": "32X34BJ9U7cbumgDrQ1eL8Vrwis758hhBsmsWtZEVGq6qbKT4ZwdeUHe2DgKGN4C58ajzdBVM5L2RT3pUKPta2fF",
  "key30": "65VfqLLAh6qxREhBnLsxCwmnrzsEuRL7EeTV2swFT2ARW8enUDdP7pb8GKhLe19mES4z6j6bRiqMKuxsivSUUKw1",
  "key31": "4sNe5biYjBNBT6yy2uBY4Cdf9WgXycL4Rnf494nkfNRwZDv72wFujZfEWRfNPewEneVgHtgWYszCNPy7UMDWrfbK",
  "key32": "5rFMtmgvWaJVDmrN9DXeB2ghJTtcUjDgxQPojg6SvXDCMh6WWuvNx48uNTFZLyYZiUguojkfJqpQMNw8EhoJsjzp",
  "key33": "5ZKUq2gcGQrsocUJWduHHJVuJCLG2MpJxMG7Gbrh6AGwTNHgYZnRkyZoYQXW7ydqCrP1V79kQHy8ctuHFihDeMHj",
  "key34": "HTn67N2S1DTts9N8nBvYYSWuhbzJWe5qB4qa3zqjsmysEqvU7nCoRWGamk8RKk8ad3SqHif9o4dQMqCnxxkyezT",
  "key35": "5cPXAUNTu3Cy3BMAHX1wKhT9GUSZhRc8JV38rgp31KG4QouTcULadauYip7Y3cuR5abkaxDK7acGYfsDc6jCmpEg",
  "key36": "q2dfvBaP1F48uoHAX2i9SzyM21GwCk6cLCWCxMEmDPp987gCZfDYB8f4FW8QUtKmFipiCyyZHBsyd7RdA1DDrNF",
  "key37": "213akcTKzwngzHMtj6SXcuPZmdPhncNHnsXKN3PEkUHBdC9PZNxdKbne1pY4BPv8snhW7pcm16WtHpiwcm2WJytE",
  "key38": "2BV2Yc6ZW27MVeGiQADe9jQmpBJBw9FzWutu4yvyouoSWyCPVA8SGcjgDJeKkYJDqcf1EAvB8imMDEZ91UoARCMp",
  "key39": "4N43UD4mw2rjQr3ofoCr9FnMwryZzBySskGVKeFaJWDT1E1s1ppDQ78fHjo5pDYHxpNmUoKT5Yv7XQy3PTfKrxFX",
  "key40": "2zbVXkh1B3sDzYNvJwbhTrbuQwfgT2p1G6Cq7cTEC93ZRHxTD6m2wVJjQwe6EWxyGLCiMfAGo7C3EsRVMBQJ949d",
  "key41": "swfKtmLH8BtMyqXJJUXd2jmzkCFXKMLnYcLT21NHuRSzcXuHwobzne63JiEarJ6hiHsoraEoTMfiF6B8VG122L3",
  "key42": "2GYC5hNPjhRBSdEQoFdfe39BjnfXtNau2FtbrZjVMnJxrp7wcb1pBAniv7raMAK52MpvB4iD7ao37v4CuUghiXAo",
  "key43": "32ezKqvZUGb47fAJih8kTbF3Say7Cm1Ung7QNcRJe7maiif326ZvtUrwXygz8MGrU1RMhgSAr1DF1i2fRboaJ5Qc",
  "key44": "JBwWR6o6L29BLKxM4BMKR9QfDHLS6A5MMqkd4iCCp2PsTFA4VMHtQ3qb8ZDAxkNhBdvH8kpUDg9U4TTXanVigsn",
  "key45": "4szRQboP65auWChuPDepMnH9zfQBA8LS4Vb4MPiFmfV4QeKLXr7g5oyKqDJM83GpqAdUxt4Q9Y62CQNnj1RJkwhc",
  "key46": "5Fa8tDtgfeg6526K7gXR7PRfpjczjn4E8gg5owm5TTv2LyRYCEiyFLXPY3qkNDHEQE3dt6qj47MdReW3bPuKEk8J",
  "key47": "2itWUrzG6dGiQrPakspsMwFUUkypdeakzC4vdQe3L69srmF6sqF6xVBksap71SurDmUA9hDuskYHikAEAXTaJ4Yt",
  "key48": "MeS2EHimekFgV5yWujTwuSjb98iex8w6vrwHCokACWHGQmS4N6Nufo5tuywHauzsMEKfCvXjjZdiywoAhkWDggT",
  "key49": "4RHC9WxqeRkfPcu8zBmPZN2eSMFbSe3kVorFyUu6szsQaJNSCkSiNsSYQkuF93pta2VM96FcaZDmaZ48iZEcrWVJ"
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
