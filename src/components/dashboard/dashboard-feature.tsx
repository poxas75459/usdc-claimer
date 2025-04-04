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
    "5zQCNxVQVjjLn1u6pSz8zssnZVxut1QkPsT7gAh7akjurbdhxJkV8TNt9sL36DEG1VhgAwdJdMAk9fdHtkGsQnDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n9EuwQBSxL8eUdLZWf1kMHADhvFcLBUKSN5zAdJUxNUUFv3oct6KJcbQkWFXVHWULfe9Sr1ZUYbqJ8fVzsjrzgd",
  "key1": "4WhKQ2xdYfmapuADTqwZUt931FBxbhdUQtpRGWNUdLtaT8HrBvGYyaBqiCHRzEGUe6zdZMj62V4x1HYXo78HMGXv",
  "key2": "4Ex9GfudFW59Z3se2gYgqiMzAq5gjX55yssx1tVLGUj1qfeVKZfMKgK9gzYGNVdRfptngMgpTAh2Ww7onYLpF2KK",
  "key3": "4gqkgsyAv1LUZbjjhvWeArevvmLmcSQzsA13Yu1FfbawD6fX2qqmcnjt3UzYS5anbaosYMtteEcTDQBcQjiGfV3U",
  "key4": "5wnSN8raC94Gc8xDwz4Zr599ADW2WF9vZRQCfhXwGPTT2BTTJNrfDmC2Uso85XM4EMCcbWiV8MYMifqMBSQ2CYbh",
  "key5": "f9u3owvhW5BgVBBPBjJWnXfhnFd2DbJFTq2JyXR4NW2g5uzACLKeR7wRQwHoybqLqSBgVKwgcux82FTGCaCLSUW",
  "key6": "5yXL4B3wxMgfVwGqPwH6Giw2zAvVRy2VYMq1dWXm9hV1PCq75CDanUaNMzFdp2Knx9Uyb3sZ24nhzVsrALd1y8fk",
  "key7": "4CJ99othY7qfTD2P68t8cGEUd2ZGwzLpVFacNHXMVonuauCRFAH8VRAeVx4hkLTcucbZHSLMySDkdrVH5Vs3u6P",
  "key8": "mYfBP4hZ3NtkssExtCiR8LFZqK2fLh3yyfvGzmRyqyVappno4TnjHakgxjpfhV37A3D8VYPqoPndEBgbVEiYV6X",
  "key9": "4uDg4Z2547P7FSdmt3EUq4EQL8ffDFAGiU3so9gFPR2VSPiXfNvRab8RhqWUcpSnr7uA7dJCr7Pv4VgPuSU9oyb4",
  "key10": "22CPmokEg4phf2fRbqj5fMwZSFpkNoPqW78Jpgc8DJrgJfdqpyJZ3FGz6HEXXGtPM8uTqfXG1FPviLAgW8rCJ5wy",
  "key11": "43cQM5iQRWWhf27AYHb8BVRRnBC4tSjGWMuisocjrQXEdoi3XiwTPFPPC8wjfYYTWuva8zC35chrwyCgWU5L9yLr",
  "key12": "4dwB1oRtv5bMs9B1gkK1J8uAh5KeZkgrcsgHvugLXece257jczeJVkA1F3ssUKVoXCdSbNZTj2hk6pZdaixyuurP",
  "key13": "5fQzJuJ2Lbn4kMPpwkdjzbFW4Gy6FSM2nuaJi3aevZ33jQnT2tuvJuDntXpZ6b9ZEbVMgjF31GegXG1ZwnFGmKNp",
  "key14": "2Fpo9ani4rtXr5w4zPTZKzD55mdfn44qhb9Qica2SmPfVdtj35TM9o4D2C8cZmkqsg63D543Hr3jjEvcGsUDV5Wc",
  "key15": "4QY8znEkyidGL7BPExdPyX3CZAMxaLdvwJjQiN8A5GoxUxyvkbqrB9Wn6LvtJ636Jpod3mzx6r6n6EN2tDDgxc5g",
  "key16": "58atRBgCRDvmSpnYqTMM4JrLL4aro3rKEaNUEpGWwyywTypxYcwxbrhaueu3ZAz4pKMqrfGNvkJZtd8q9mcr6o2b",
  "key17": "5qhfYpdZ6PYYEwHHJAkHK8eLfrj9zaYbhNWTuUSeqccAujWy1borK4NMLmQjwie9yXsA7aaqnDMQ1FGcKRxWoBAS",
  "key18": "YBFNdTYf2nUP5hWj8GN3E7KjShpKhBGqWNhihem9nPhx2FY1167J36gdaDEGHRhu72C33ERRagC68UdRvm8PeRC",
  "key19": "2GSFPfwHpuiEmMHsoSLLH5JFdus93rtoSYGdMkgZ3SMrqg1J4agivoruXKns1dAKvJ1knNtUnvHz87fBDZTadHvx",
  "key20": "3pcsggxs1pcMLCS1rZAer3qxDUToqjPeYFFjz84iYPE6wtBE8ZmfKhGFy6Jjyd8KPgZYaDgrma7BNYWw5vfN7nWk",
  "key21": "2jb5TciMeWv35JJBgP2AMTQfv5Eo3ugNdxQDG4GY2dbnkP4NksrEzAKfjpCpZG7YrfgdMeY9PnHLbq4fBn6oRjn6",
  "key22": "4fdo4ZdaaPcA5VXbcZXqs6saMddKjBtRx4pi31WrrykbwsAHezpXyMxNuHef8LTZY8vZGDJFMiwwcW354Rf56Myw",
  "key23": "4HHaZTNJ8JjVZpwfP2dTRJPDVBTbT63GFx67fgA1sx2W5iBi2iJ7XVdchDe4LpoE6189g8xErXvhgRNUY2AMgEor",
  "key24": "3BWevaA6PEixNx1ALgmGyhbFVgMvNtd8DtWCqo4SMpokx7J9jT31XLQMSQXdWiqPcdRHxWyNUhimjHyVR9HUWhwL",
  "key25": "4LsPDZCfHSSXxrXVGhNTm7ke1WxZ5H6dmhHzW34J8QHdvLNo7nhKcN8gpQ2QmiwsCBR1muf4B8HCyMEHTNRnjCZN",
  "key26": "3kbmanN6qnyjDYpWPqyuX7MTGVNJdJMkMZ53yPo3U8X21V9YYSvkycN3gnpw3tPX6sKBnMovatvBScfgdV6zAugd",
  "key27": "64cDyS6DrWfsAbZSK4x663M4DREZWzs6aV5Q8osNyaQDZj3RiDVpYi3s1rKjnAEqyxN2G9PaDcz7C9bdQGG186uG",
  "key28": "2ckojCt6mTxhAhJUmzm1LSWgfisZGHKdLHTZKgJswDTmsuUudzEV1vteHWRJWvCT62p8hKH61bmBVXX5TvDSMVL9",
  "key29": "4YKsfqWCpq74LFQjs9zMK7cJb2FqisZ8cK9kokrSR1ts6ZR9YaiiYxCy3PwKM6qe2hF4HdxUUmrUGQgPcgnNF41d",
  "key30": "5aGRPoJ73XuaVanh2KotUg4JAFquD4j8zemQrSkdraAAzWPB8Mb2GNrujs5GW98v9vBYttnnF9nTW4XWaiKNxKDK",
  "key31": "R2Ri8trkKTTGdnR1o5J3jkWhmE9kaGB678QwkjNYU9vDHVzTJkFZPJoXr5VvwtKym3sSfbtPELg522Yu2eBLiJc",
  "key32": "5CaimrwhaLMaMDujZMYVbj6w6VPMnNypVih5fej3tfVccom8MCY6gjnEmQVJ5mMS7zyFHPinZyqM1gnGsowKoEAM",
  "key33": "39d1fZCFo6mKzTrBin25VDNEJdPagNFWcjDWDztZ7kEsEMnWeiKc2Re44MAmnwdVbmEa1PrXtT1FKTzngfty6tnf",
  "key34": "3ipszysZxbnm5TbUeeEazTWshhjszVqeLrFh4eMRTmbxBRJh7qTioC6px3NgrhQhaka6qxkj3T6C8xraXxX2ooA2",
  "key35": "3abBsmJWLgfbvSbbsZY6YgdeAkoM1ykzLSxpV1jCuuQKmNgLX8sSrUMh2WzA7rnCppSquEQdRVfXHX2zmVNSsE3b",
  "key36": "4HJqJyHbZsfEKnxNaGU7NMJDgr7on6mnvCQwypbYP55DzU48qo1hJcVaNToKtbnE4EWcwqFtCd25Lc5Jh2QCR1j5",
  "key37": "4fVV5WT1wcWuqnvd3UbMmHv3DroaX1gjRf7XekhapVUtXBHw3owUveA1MBhjCTRLQFNBiQWdWznHQrSrc46szftJ",
  "key38": "3qKRWWrJ7TpNcyM14eYgW7moFwwsUaXE2hjWT7DrV7Lj7EFQJXzWfaPXVEKXCabdWn5aSp9NZeTL3c2SDBku9Muf",
  "key39": "3wbvXsxQXojzJX2tBw9UDqXkT1sa5bQV6vTY8M7bKg6A7AG3fJrb9D1DYYnwUgYPN6W9HQhP4RFZtUzgSQ3ZD4Lp",
  "key40": "5F39mjxvdQi1b56CfYEy3CKzHRxS6mumysDn9yEKuYv9jG9B4eLa5NJSoKLaQWjiNLQ4LTbWxxZ1SoYgB3b7GXpT",
  "key41": "2KMw3ZG75z5Sq9skcYZASVuZfN3eCjBcs1sc7NErU7TYuCNgefhvHJAcLKiGQk1NcVdfK4jwmi72ZcjGamk8cM2y",
  "key42": "NM589J5Sf2gZXNzs4TmA5DDpzN6vNv9eUVwuV2r3Vf11dRvbF29qe94pNrAZ3iD1xwq7h8uw8Hc9hysUaZn1AQ1",
  "key43": "3bgVSDEtu4HQ1zK1GcjutGENGopLWgebnzRasD9sXNGvyQBpKmnc5ci7H9yXWEhZX4andtSmToNRqCRFyemJbXYE",
  "key44": "5fgvtesPL3LZFzmFBSbW94ohh8jt2ukE9svEAv6TFpGXBBnMypGSmi2HctaWnaBV8Birzzh1A2eEn2EMQtbkKWP1",
  "key45": "3ammiRo7QaU9LLbJPYdL6VFkntyU88gAq5uhvVdrE8hi3enHD6uGM9W48cWAhs2GZ4SafckaJfgLPEZUYH7HTjce",
  "key46": "2AGUQ9A6HoKyCtRtGVNq9Bii4isv66wc7dzJRha1DbBj8hj6dkUFx9dCfUsC8qHuphhP8j48qdPgaa7FHJbGWpg8",
  "key47": "2gwGj51DX8ShqM2V7Dxx5bHDW7oVkmzP16EF3PU3sQThGciY437DRzrW6WFwbkYAHAbuxr8SP5AjT3LfKD4hpWAT",
  "key48": "3RtRNjUCKgKyks3fqiBH1DfmSHWwcvqkdaaEyFs4h4jZYfJJLgWku9KRaCRnw8XzsRtXKUYLHXQupQbeDSUGExaB"
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
