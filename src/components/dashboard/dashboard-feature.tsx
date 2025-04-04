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
    "5zrGSSTRYeMPifD7eVf4YX1DVYNbu5LeWL5DmdAc3d6suTqfacH5Vn3JNuxo132yYkiNAEnwYbPLnoj1mMcJRcVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ArBoQCzSarxCNDGuehmMu9YcNMcGbj1s5KX654vfsMdgJeR6ek6FPgSn4GcuaD74VZdEX4e6cjo6WnCBHCr357J",
  "key1": "3ebdtHPpbgPsN7jp7MwKNEgaxMRp1imH32L3qfZ9ow2fiCyuKKXkdZ8o2xcydGaWCCCr11vcvwvUQq7yRHPvXxvj",
  "key2": "2SizRW2gKtrztnEVeUjuoduw79sAggNpRXJcQRSKMd2UuvpPkY4KRhZ9u2Ujzp4UDfZ3TddLtY7PgGRUQSFVkwhY",
  "key3": "5kczoc9ooZC4mNkih8vgSFa6hbWwyaLDpNVSjNNZNEcP6EewREpZeNnXU5TVa15Gd7AJr7SnatHbPyrUh4pbHMyx",
  "key4": "3ebLAtJapS4uGjAKyYbsFADtoCdaQMEYJMqfvMVTpXRTrfvSCyd8WFuTsXgombLzH4C1HCSKkzgJimHzewFjUNRG",
  "key5": "46twZVn4D6iUXBpPLEikswpDHDT5u3358JBkVCNQ8jqsVZ8Lm1gEafRN82tCizqFWZaHRUD3fqivEWV4BJ4ARnhh",
  "key6": "47WL8nFSNayceDUXCus96owJPeMCVScKqjfxK4pFkEUzcW4CGQdkt5oFAyZg5t4N2awz6G5GVFniSAjh8MwmLVo4",
  "key7": "2trKUxLRvHqGtMe8ARntpFdquLnYmYqAP6c57EYn64UeAGECN7WU6JpsQJ7ejNsdXiAN1a6DdW9EinCFrKDPVD99",
  "key8": "o76QWBXEPWegbbsv8znDAmDn19RsQDLe2LjUp4vADaDMsdxPTnPsAHXQVK6LLb6VnbKbBQw2KfhDDynA9TrwBG9",
  "key9": "2fCij6qetiF2TvPHwY4pWEafWziamS3VNFLntfWoYqRoYjEuCZvyHx6PVSQ55vaCjczDeMV4y9ccBiCiYb5Uvua7",
  "key10": "2hECxxaFR4jQhwkBX8CrPKg5GE4UPbDZ4p6dTWjzybHxTtJMurKc9LupYHXvc9WbiDHJBtdUVr9s5HiqKjedW247",
  "key11": "2Vg4AkxxFa69feyfmcRzoFGG32Xaj5ycSwGyTfjrubFRLqzsFkUc3axrkCzj36qdCtQVxPoaZFoVHsRB2JsXy7gH",
  "key12": "26y4XqkrnXX9NXvQPqGQ9JcMo5oEE84BDfvr9NJo4r9jPHi39c3YV78QukHRH3XNk1DodzzcMX4TFbSeCPKZuggi",
  "key13": "2ymekG8WJUJqXdR2WWeJhrzmEJkzWQYUnzKGDZbgxDE7F9DcnRz8HJDT8u5pKwGuhL8VW6qym9quRCHHWKj3PhNi",
  "key14": "5UH8Jv4CWmWYWKbthmDQSUUgCuHQe3R9DpetqUfsRRge3ywSSK9Ycgd5JD6yJHD9mB16u8J1SuJjcwywFmesjy9c",
  "key15": "3iNPF3427kpL64M2btCjEUEuS5yhErAzXYC8XTjRaBowyQPue4X2sqV1NsoRa9gZnxEi6Vn8xsDLRCTvZPkn4evi",
  "key16": "4x62CmuWV19TCFHkgWSn8Vj9923KKj5o7hiLPFXLQyG1phPN3bgFRymRLPGPtMqxdX7ToUBDcruAFETBbf9zbHoA",
  "key17": "5qLMocDj5F5SCXxZ4XAcUsWDPqFndCytuaGWGRDREjxA52ko4Yk9eg2XBPq4ESo5YFytBgw1mZTBsaaf8m887H14",
  "key18": "2zizmbACxVb5txbDyYf2F5azAmeQrTPa6jhfzRttTM4m9meCgRhdnVDVsFRMaBxvDgSMyhuagWNRKjXGdjTfJj1t",
  "key19": "4cBjDKf5bJhVADeAdkh4DcKfBERTRmSk3PHgu4VmFZHzMRgnjGTrKszENoRWpi5be3r1fRgf7Ukg7hxWYEbnhbTb",
  "key20": "5S5DNhadbb2Wr74DcLas5N74EQBWBqf9BGKvVB9f1tbt7a12kLLDxik8iwnRYgtqtswCrfKrheMpLdZpcfP2wfan",
  "key21": "5eCF5Q55gcMCDMWNRF1auKtP9dBeh1mSchZ1s7QrBxwf1GKjXETNJpmAhMmd6Gna6t3VJVoftvFVfRVo41c72bbX",
  "key22": "4sqZCmg63tT3snMeXa5bxHdQQ6yeBXUQnV2vYZRgnhx1e81uxahkygJG2YqYLphz1q2EYKop9tkvZhF7yeciayQ2",
  "key23": "2QjJagHsFdnzm9uSstGBZJcGcZHuMc5ugmJ5Ezzi39MUqk7uwboi4CTtpEnsbuf7surrs7rTqcWGKQzUq11NpsA5",
  "key24": "3aPd61ctYhaA78tY4fgxLzr1DNc4V4M7PH6HtNcFFuqGQu9gmQ8WdBvsqcrhbgEHrE8JD98xY9fvDFBfvUTiHvyp",
  "key25": "4FXqnYjeBh2gi6togGifbBzmB72c3Gsa6Z4CR2VdxMP3Nr6d1m7S698NAGh6EV3baDoZHsSpdakg96UnoXy3tsnm",
  "key26": "vsoVX3ZzjMALRtBodBp2fUqGcASXV97QhTcFMhKqvcoqNHthxDJBazstgL2ooM6Ub59LVcsqfMuKyQ7YXhDrct8",
  "key27": "xedxiZF7mpsAtM2ogP5dW6kD5PtA6WunW7j7WgD84Enqpzj5bQUyzb7NhJZ54uXPSk3ehKqdypd8Fp829wKFKv6",
  "key28": "3cwej8qHrtfG17SM6Nx9y4o92wuteb8gLEs7HRFJnmQVBM236VnbVap2ueAFgQT2CGXwfHUMgMZjyK9PqoRrGUCP",
  "key29": "4y4w2oTRUNr3CDvdkpCYHLFzaxffeefV47sZ7mnb4kdkkEMbvGMU2zPko6AJCEpB2CLFaVHdWTUvjqr2D7V754cf",
  "key30": "eL425ZQKi5BXr5dDJ4j3Pu31QR4WWywQ3iYJd7NwaEmNJDFT4Ur4QKtYMNmbcsJATtJb5un7hiQX7MvmC9ekDvd",
  "key31": "4EBRwkEwiRNgTWiSNf2mXvi4uHRfpAgyuxqPftpDu4zZV9HxAb1yzZx2fEcBaHChdbZXK5UhEJJPNXCsAxz1qw8Z",
  "key32": "4JRJxs9zjJVinN5mgj8Zr5wnrPXjbg3EmiaAGNYwLLAJe2rGKF98JFviA7ra3pj6kiuiWK7VAN3T32L6QnznDxrg",
  "key33": "4oXddts6WXLEDQnzyiqHEJs8GLPVgcHXo2JdHEXq5JxNxkNuoaD8xQuKS6ckse7JyybWr5WWbpT1LhBqhdo7n6TY",
  "key34": "XRWNfUkmqbquTADFBPD3QHUecqBSSYuEGxGxSpBRdurneAAmQfiumpM6jTShb7AKzMi644mEtJBRHNwnCUNJ31G",
  "key35": "4YLSA7oWTcYURTGCLNTu2HYk4etdpdcWEjo4cDfaAndryuvoEgRK91E1uwyLPegJUmZGmmvHaZwVcgGcLwJEpjke",
  "key36": "2xu25MmxLFN4UyrBQWW4ZvKfmGow3Fq84B3XeND98Go3eZsqXc3TqkTsJUq4Mj36op8WBi64Evj2688trsRB2NNC",
  "key37": "2TLGpYQhLoUNrMiM7ezVa7UEE1EGMDJwH3yyKpxpFhBzBPkpmpcXGEC5MHs1zSpqi6tsXUGg267P9Qh1s8Czy8mh",
  "key38": "514dC1e3DjwNa2H849i8xvPvt9HL2Fr5C5LUFS51Hhcv51P97NaMMnwS7wsFYBaEnD4USX2anKjXbXtuqVZFGWCF",
  "key39": "4EQs8ZJRmY19PcECZ3R6VYqNoy1DSWwWyieWUmcZRt8Hrtxut87u4QKyog5oZjQGN5SWttvKbyUTam8hA7Zid8rc",
  "key40": "5sDvHVABwtV8CqaFLvLB7i3YjPAUzc4Ci52ppWmTW5MsYMBXgGJHY3qTZLh68vmCc2XFNwCdboPfkPjdFc5UVv9f",
  "key41": "Wy7PkL23KgLHQ9KBkJk1EUZ3uNGjMVwfWKEm81499DFiPxDR5Pb9RGs9LxyrBQfHdiUc54QXxBseVyzrM8HBZoc",
  "key42": "5f5CH27zqVBCWKV9vzTDhuhX9QVFCEcnpizz5TUE8a8XeeghvSGXHAHNGpBFiStpRg5HXFsRQvTcTLP7ULjRmGxi",
  "key43": "2CukKrg4sP4xB5irMMaYDYVEnPmRbx2xp8pDmCywgAd9XPMptuRkvM4qCAwYqHLGZ3pqagaLFFWdkHVs2kevo52n",
  "key44": "2K6siKyq4h6EFkQcCTUdjqRwwT99xupbFr8WE3pRtVmoS1GqT4si124pWsdmwYHtuz4wgvTJv6Ch5hy9N8aGSAiV",
  "key45": "4YgCrcFy7cbpNwqx9jMe6FCFmunL1whnRLLBSb5TEQkbwwZcEZtiYiRRw647HtrKc7179fSBZoJPuSnQQiHD6Gsc",
  "key46": "364vRz5V4zWa99UFRhw2cXdr1pAL8JAdSeTA3ENz6rkxo7cNduB9exz5HazWznFNmf1p3W9nGu3nU5J5uyRGSh2F",
  "key47": "2uHqC7y7tCmB33T7ujR454uvnrJzvXgqu8wZ6pmrkRBDKdS7zF37ox2R5MLw5AZvkUJKm5ScYovKdvmTkmVFEBNH"
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
