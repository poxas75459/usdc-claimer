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
    "5YJ3LUtEJxZS5Mdk2xcrJwdSyQJdD7SbYminkSDuwDGtAN9cwUwhidWx2Hrv9heVk3xJPHKR4cFczd4mfvb6bJcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f8MyPVoGf1jN9dVLH7MmZ19yrBRcRZQoNFxHpu7wb4efvdPUq4p229FvsbJ22yqdGQDHJ6TNEZnkVFMgpzANLjY",
  "key1": "5v4ECkwgLXnBse71faP7ZVNf8anMBwxg69B8yKaQnXoujTCQ4iBcMEsKPKzBC7FVk4cNKYoUCa3qKTSCkJr8LqS2",
  "key2": "5ZBBcJ8eNrsdEA78YDu6r1jzRyZxPQ3cqKmiXo6rJkWLD6RfnR3aGQcAKLvKn8VGCqN5Ciu2iYtd69LM47eidyTt",
  "key3": "65n96hSAQaqxWfN236CG2ey1fN65je7ykovTgA7CdC68HjnC1WCTjwuKZtM1S4kHMU7ieDqEA8T8j6JQdNbQ1Ahv",
  "key4": "4RTjg6zugFP1ho9LSsPMGRRD51Jkfk2PhNm6KRsPA4fxarak5u4hLmrUnNg1RpqVBJ2wDFdYLEHCYT7GKJHzSVbK",
  "key5": "ozME72CEHry5HT1jEJ2sY6C1VCQrxNheTNCvzCW6HipCXfy8yCYHL3LeUtAVq8ye3jxxtucWxzPnDLGF8aXUNiv",
  "key6": "59VSkLqSmdCaBjXLhUua99XcozKcNcXXKBSY9BnFrPf3y5jgHnGRNVwyFmxrdbKgWYvRqLtmCsm8cSJ63G8oHqZo",
  "key7": "Eg1FsBHMjZiQYfaPkWUEtc3jVd9USyTFBXZ7JGCPrhALLWW5usFhoDmdEUT6PPZXtKqMts5rmCZJMA9YatQfAwT",
  "key8": "4jEKbqetfn5psFP4xxJYuDEQ5b7CtXkGNzsw1Scs6iVc4bGK7m2Rtxcf9SuobEBstWSvYeJQy57hGbgtGk5ycVnJ",
  "key9": "3xzkPnGXTdkVU5XnoGRj4vQY3gSjQSHnkQyvdC7vQGmdMRpFSphSXjr9JHhJhY4mqVmqs3wpFYrWd16WiAuA98zz",
  "key10": "2GqAxSs9h3Rjoc7UjM6FfwUYiZQvvkc4ikiJogokSV1K5evMogAtrPvJynGPRdWwa291wD81x8pN9eJkRa6bV5Wj",
  "key11": "4fjan6iBVgF8VuMfkr4eZHnB4gNHn5makPNPMRqS4tRrWFayzM5Yx4hrFq3ouFjpHHwhZkQGhC3Xs9eryDZjbdqj",
  "key12": "5BCSWjEjYqTcpKWinnxcm96xTY95VACefCaKps37zr7Nndboa7b37Qp7u7BuJdU8uiqMbCpVHPqiXqCApeWqdLzY",
  "key13": "4P4AKJHzZZbBhecui1A6CqYhGHR6nbWCbs9zyvRGhCRERuZintyUtLeCnFy9Pk5dpRMaXk6QJJFfzvhDpaSjJwNY",
  "key14": "2NX8KGMyrF9uopRLjvZZFAc9YGiXx7eS48WuXtzF1aczBSpaFzkvqtnvmz9Yd3zSmjx2DtpnGQ1GpmgHYgZPxANy",
  "key15": "2mT144zNAuYLPwzu5dUKNGHggY68NwhnF1geYEE6eNf88reh12tksFqZfDTCXsUAJkjd2EugqLqhrZUFiUcgt114",
  "key16": "5gswRHfM3Tcc7AtrAwtwMzL4eAkHMfY8Ciz9UjteuF9udBYu3ZTjXMeqKWFh8ZfhVpfB1ymmPCzpcdcEkGAyJuau",
  "key17": "5jz976tL1Xy2gTEZUvxe9ipS1cemwtjYzwT9QXvdNXwLNfvGRCo4SSBU7VXKTCk176xavHnr774ff1cfMxZamCE1",
  "key18": "3L2wFBKF2YrB4SMwCSUzcjxn3noxn2hDwFUaAAp5KxeUDV1SurtXPrnt8XJ7HCmy7dhStgboNH1zzzLT72YTGZmb",
  "key19": "38b5G8ztwrZ5C5ZHsetBTYJLqbDXsqdkemMPV92wfmo7NT3HWeu4Cj3FtXCvAM2a2PJaUkV3DL22HXq2F6X4eqaX",
  "key20": "4vw82yAA9nHAEAkVv8jR9bxRT8jHWwXosX7p6Q4UhAqAEJS48WqgtQrjDXfwnwsveVnSYXhh7JahGmym78ETkQzM",
  "key21": "xywsjcigPbRqB9bGqYDYbXHm8XhhmQRGydV52YRCqFktKgDbrdh8sWd4KMMGed8PVGnzRmEiA3N37iJiuJdEaAL",
  "key22": "3qZAWnKw9xjB3zDmpZkJaa6jEtvxdCs3ZJQ7z15J97ttAvbEC4KFTRZGywxcW82MwYho1jGosxtrS1roh3D3p4yo",
  "key23": "4t8xt7itavCTjP6AGcMVoaZ9UzER2JW7SzdFT4BSu1fgWPyna1idtWxBhNmM2s1LxGjj8jMVaMCZZd8APBxnJDbr",
  "key24": "2XExWJpniNsDPhwnwn1Ls5hV4ogSjtcaCEK74fLk4kjSqKDQEHBp4GGeUydeSVEzgcDAPrxSUF4VopM6JGH9EFsd",
  "key25": "3a1aVbbZRc7VGUdeGLH4LnSpbvzfVFmupjLUT6DgC5RNHFUL2ezwisoFRLBhiReCsHcRZbu27N4YwPDWGfBZALN1",
  "key26": "2PSBFYmKCxwWjRXBKn9pdbsQAnAUAuTx7Ev1tDUcWZPK9di1D2m1vRewKmdKgekZmdskoNEPTr4h8SfE8vAuiLeT",
  "key27": "64HPnDtpC25ZYsEFNxJhMC6ZaVqmsgedzJKkih8DnFHm4u9Y2bxgcKZR9G8DWDUDtNa14Hi5qyhLQrKpM5ZbFUvb",
  "key28": "6kfLPCn86yKVTNCePSd3QoHcTB1EsmSYzX3dy3LxKLFE6WehRCVLA9enwWaHKByt2uUexfspn96YiMXT5LvMb8L",
  "key29": "64jBeFCs52BzfcQP67bJ8XeTvgjtTqjgFZWxoqoJgpCDDLJBvz6EvPizezeBU9yW8R4wAqXYizRHQGMRKBtHcreR",
  "key30": "47v62vu533W1zsd96drYGrWffjzys3J3qHbY35LpCcD3ctJxh5TDk55vxGEoyiuUyXJT2PcnsfKojaBHbHYjncgM",
  "key31": "4nboVSJdPjEqoyhbMeQcFQjivtBQL4fuu6HXWtcZPcgGZEpXZQQ43tMfMXpMRFYWxV3MeUau6GgZqHWu9LeqkAa9",
  "key32": "4VKgsWK1cDqW2H9tvcaT8adkqrJknEPZqC87kE2bnCumoua8vemnBhUbXysij6KugBqy7AzRGT74rShk6fWGUcMe",
  "key33": "624p23yPRehcJt7gxZkTfsxihP5TT283HiFdkv8myzNVFs4d4Tvi87YSAyurahKvwaaCAgpBNdxnyTXZtVogAV8E",
  "key34": "3WPDuXMyAzgFVERfSpYjihTgMuggJxRyDje2VBR1gbVEXFr7wNJm9YArGgwp3TJMBywzHCcs4Fcp6y754zGFvzQv",
  "key35": "45nyRk2vokvRCEkXPVhe9PMVL7Mh9Mofdbo4yM2dmQDQUcTsvVM2cjWaYyPPx4TMgMdDb9DKZcQ54H7MGAUpNf1c",
  "key36": "2QWSp1f84sSCTf54mnqkZpTCurubaEgZSJ52UBbFb9h8XV2svqA9epJUMyQnAFf6mTuifamLhkiBDHgU8Tko7Z8L",
  "key37": "JuLjVADeYyg92HMV5ktkREyeazwsUr3DU3kvCSQ5GhbCTEPcA5M23BgMpsQzcGdfNqASCVJupWGoU7AV697TeQv",
  "key38": "3i8U1eAFibS6JDuvk2Lx54rNXairpjEY8kB74Ure4AJuNR728LXQLtxv8h16h8Vn2cx1MCkfHkNLfnjNSECXjtxR",
  "key39": "nHC1h7f8kEy3MGyyY3wrJxGAyq4z6ARUnBzaY2269kFGpGDhsoN92zvDGQNNixmJyZ9GMxKnKCmMUuY7PWAgVZU",
  "key40": "5dqhDFWxki85bzkxYJo3avthnP8WWp7x31vnhh5UvscdtWaH6n5aBD3C8bC72VQVHKtiy6XeZwBHZekzRZh1FVWN",
  "key41": "4D5yt38aJx8vDEC9Svci6392gDjsiavDMf7cH79DkNEtS8vDw3DNuUju95cq5we2bmekVUqagufZNTMcJis5uBKW",
  "key42": "613ZXqDoAubv8BR1GEjVXP7CmbimyX7UMEXqacJuxnyjT81vgmiP4UeTYUVAZDKhpVpvobhb4zAzbt1rpv5mmYqQ",
  "key43": "4Y7qw9ur8vPZCiePWSjZKq1w6hGwqVrQsyFvvtKhaHBqcqHeKTFA2mto59P5mTQkPAAsnjvEMYwBgcbxavMyCXmM",
  "key44": "4Yy3R5Jt4UReTUkFqEdsGv1LzZSHepipyGwBuKQYvuMufiL86aHEtPPYUP3Aatbxyg1XZQezEM7XikHBa9UnFCQ8",
  "key45": "4dYDtYwQq6SG3JSFphB9EdyQUSugBv8nKDFAYKP5XyVXQwExYR5xNCAzCKoucDMSWrp6cZdnDAiGWRgn1PsWkiTU",
  "key46": "2aav2gEEQXsdK3is4y8CABnCMtYuxy9KQwbCZh96yig3RsbsTwHwoyUNCJgPTYoHWkDG3EYMWGnnC6NrtG28LgVz",
  "key47": "ACfu2nbZaaNmMhTUz58mCFBVjde39CSYj9inasRdsxd48gh9U2to6YfJLZjT38wB7k4D8mPLGyYo4GkrwZCrtEK",
  "key48": "qkvQE7nXBYTCtEPAA8R6JVZCxXXqKhzv2r6mD5NyGGBpHAyj9wdPFPsEJGf1k9SLrDkytiop3fZWASVXpEhX7ev"
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
