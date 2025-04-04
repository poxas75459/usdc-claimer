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
    "3EX1baxaHrPaqQH3QsWMAsKVzqYr3e9cNTcvihkNTyXDjX4HkLmc5ZcFfRD2uUDk5e7cfXXJjrpMaej4cdGY5BHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c6WVzYW2XUQMvX4yQV6VnM9hzigWnsHEDbDDg2V2RL5h5rzZL3ADZzUf4ETYQ59upEAuXX53B8cj9UduQctrQCs",
  "key1": "2E6QZw1jNY6bQX9yjszYo32Y3GMHm6GyQxEGAyQmac7JcagX3we1uJJwRhC7BhrtcUQbNLYtNnt74DHLJjAf33Ff",
  "key2": "RbSM3xJqvHPtDjDRbodBu5Mvz73NBCSnrgWpzkR6VXJqz6jLos4JMZJ8mSzMB8wPuzKP9U6d5dpysALB7KEcomu",
  "key3": "N6wUUDeA7YPU3VXaMN3BkDmh27C2M26PgP2RhCMUup25iM829tJGHV2xWkVeGVhR6X9gnQXdPNeX5NZWNVKvFpR",
  "key4": "2o7YqFei4dupxotrKALXzzn21MrRNgTLfzSAWrFsrVmns4cFJBCBEhoaKJS11vPnb3PMhRHU7P2gJbxzqS4PumCP",
  "key5": "36iviegpZfJEh7GuurFzQUQuzmYEkanEgx8QYvtzxW2v8dNX1hXFxJ4ANzaZs4sdgbWhWbsy9Rnqfwjxmk6CjR2s",
  "key6": "39sVZASmFG5Rmqo7ucX1MoVdnLbhcgsNtRSNGZUhDQyMN95jAmuHyEKeZorUixVLhAvYkEcAoR9HC5ndnrguF2Qa",
  "key7": "3j1oL1AyWAffk694cSpEwTzLKcz5NN4W3QoLE9e4SCDwcL86LrJN2jk3gtAH2WR48XhuiQ2rFk6ZL289PR9vPf26",
  "key8": "XPx6ztmLoM1cNtSbbJRxNFonWKS3h71oE69QXutpQkqqyXzgaqfqEsxCRf9DwKxZsBrXveuC1SX5W99BRrmVyPg",
  "key9": "4cRY3SpX5p97vaM5AHs8bdMakKSFHdV2VQxae7Uuw9QrTD53d7NY4QdDREnWENq8s5ubX72kq5eZWSn5BGLf9VXc",
  "key10": "2kwq18uR1TYhRAtAKpJVHocFhufpa1X7DtahsB8KzFZeyRDXqBmtvok7pvgwi8niSLXZLaMmYvrSsyZJV7vK1icc",
  "key11": "3R8cqVTxLAMyo65xeU2SoYQnA6VG6yKSsYpVz6tHXRkuCiStjVowfyadVkUQqincog1ChSupENkjWfzaBSQeZ93d",
  "key12": "RkWiPLk9WZqPcijbu7cx1Vu1rvWQV4SsuUQq1CcGqSmfjEv5kXyJB2d6te7j9uhRgRpFaRd267nf2i3iSutcS4J",
  "key13": "2ERTDTGGNNV2gmngtuVUsQFaVyEVforumZQex8oB4QZ58B4QPhmNF7UQa33Zj5qAzqrkZ7gQ1Vi9F5TUTkFTiozJ",
  "key14": "4yNhyLLAVrLJzK3c5HaVgtL27avqZrcG4R1mUk5a7hwDNhkqeHAMpeTooXphA9DLbLtAUGTACX1TvZDSHnmcHrBC",
  "key15": "5VdqN4FUQDr9C3xjmhpXMewewXEvQcif4MeKHY8gsBY5oftESZgtczJdGrYoqXt5sKnWP1NxVbu7Y7DPst2ZzvVX",
  "key16": "rEdSS3GirMapwCta4yGVbDbYeKqtq1xKyCtwhE94v2cDJA46GEQjTooWNTDSoKsYHGCdWiYCv5pTdtJEaGcFfER",
  "key17": "5jFwHsV2c24ZzvjprQkRmanRr5M51sK8yuENiQTA9kp1TL6FnuhGMcqWBrG62oNzq57s8iZc74e7BZzFm5LJpQ22",
  "key18": "DNcWwnCoTpmNtYS8K49LZrdjw8kzsWWa4yw37RTD4c5grKzzJh4tJK3sbTzR3tXty4w7BANpeBERjjuTF8qe3cD",
  "key19": "23BUSZupLoLYy86dQN19i6J32c4QEUXmcRRsTKnAEJ6doSxDryKDdTzEiGsJew5X1QRWzeqtuPqTA6JEBqYtJdx4",
  "key20": "5KeR7TdbSopgAL4RC31LwHudjXcSHgx5jgMBv4paTkAcF98cL2Am1qaL2zHctURQsoizN6TSq7vVjn2GX4Kdwxda",
  "key21": "5g2cEXYpaxkZhhgzQXATsZ7yoDVuxHyLsmCNWyZT3Prb3coxevLfE8YA7FZHUvHjRd4JnQnmCawUQQzynBQcHKvA",
  "key22": "tiB2acgr8ZNinn5h85F2vU4SdNaYrnMJaM52MbxfTmjAFA6c5XE9hgNiLRayQzxY3zyZVbWnJRWFbMRNMT2vbPW",
  "key23": "56D29nFyifEMj6YXcTSS4d9zS3L1bHCqLmknKkhVXcGk8xWW3JkSeH4anYkhtavLWyHhzYRJv1ZxgWv5YgRdPrmP",
  "key24": "4aB9F9cc6HPrZYoGytZTR7FtYYx3ugp99zMJecGKTtwzs3BXkyor4GJrEoTMerksC1LT9YsW5WLJJkBdmuzHrPZh",
  "key25": "3RvVqtw4vkB72r6hkvr7PXuY3YcAWUVsmicB89KUBZ8MdyiZUybYSDsSsc4dFwWxGyPv5irZBZdatwNDgUw2Tt3R",
  "key26": "4Du436ydXf6wg4DGDyLr6rb9NFUdWmmJ5nkUzJvVHTeC4KCd7WMm1G7TfkWMCz2hEPX3fJQ1n8q47xW6bSZh6DpA",
  "key27": "5sekE8VQrcUpFWRwkoGASnTh3Wi7byNArX13L3xNsXYJGEadyWU8R6dK3mYadVRx2yQZEXWCBgjDoK1i5hA2CsdP",
  "key28": "ZaETjCHL2899A4YnQdcUxG7RtuQKkocomeshwTVW51Ab8oT5HrmpndFwvxNWyub4Q5qxRg5r9xpzVtsJgkgogKa",
  "key29": "66izBfVdmNjAeGHfLcXidxE5ypW1dDK4TPNb53Vmx2LKBmtbksVxdy1WohJL8qEdpaTnqYAGupBz53XPkVAmuGLw",
  "key30": "4gWJS9tibSMvM3WSQ15ce1FebtAK37BKTL36phoHifJynYA6UQ9xk6GhrzXreB5PPEtYQUBj9d6fDMsjVeBgQg4u",
  "key31": "4pFDgtz7huzwYJM9gZEz18ssPhzEjsajrhjf3ZmMA7Yi3PaJCmWHiKejiXKuXWAeq8FBiNhUEruAvvdmu9NTNfaJ",
  "key32": "3RAQTNaJJVDSwHV7f49EXKZ3UZQXEHHT1fCDUcBLHnJbV6k8zPMkz9Cdri6XwztwJyzzgEYfUXcQTddCos2RNRe3",
  "key33": "2xh2MLYVEmNNgu6ESVb8J5XSj5C9PXMtZyvaQru4awPxhdr6sy8Fm4yaUsLyJ26L1fjp9UGrT95ZSzZQyW61jYUG",
  "key34": "41KSFSrrTAnbcU532pKB8eX81XN5vNz6T8sBBiyDeRdLnWyMhXDF4qaaBNQEZz8froUNh14488QNZs4dtuXtKkMs",
  "key35": "4ivngQh4axpfxJjP3GKrXDXMSsUPqKJgWA42dH6R8LZQzEN1i4d4BZx9uEW7Hi5fXPGd18N68iJVFQ5kiGQBrdPN",
  "key36": "gcxZ4ED8eqUPk1nQTUZJvomhmFoev1JC7m4kEvnSRPYZHaBFrqiFMazD5yhBfntZtATdJR7136gRLj1gxpe5gPP",
  "key37": "5Pgaj7wb7FnyfEqVNR59MZJT6guBZT9s5N77167aJBMuTNLJw8SbbVYbjqUFghs2UArqYxcbH6ZMJd6ns7Xv23FW",
  "key38": "3PEorCRMYu5tFVJqfhaphneRG4YaKtZdg1eJ63NbS6b6PnZBmKBu2ooq4H7Za3X53FB8qs23W14YLK3uEKdSpNRx",
  "key39": "4rTokhvbsHLU6xMkKNhk1L5mM42qWHKwNMjopeov7NEqpB8SAkzaWmUpD3mSn2U2qtWiom7suJcz3C1fMPbtjqh5",
  "key40": "AHbaofyHZiPHmC2Key6JmaapG6k2dwr2gkftvyDEV1wVRW3QwRYVfSF86opWVCTR2rgrJ6YnypDth5ADAwrrWHa",
  "key41": "yjXvtbjojrZsbGBVFhR8c37FQFnkxVwfD18AEzya2Jop63k8tTccshrasauxx9i33vLVykffPP99YLQ8FHbc5c4",
  "key42": "4fVSL9dUX7vXyGCn9c3ssHD32h8drx37vxR5zsrqEe5vHiJfT22PyYw9ot91GsWBGbmvGkDLZXPqxTKma72XsfDM",
  "key43": "2gXMBTzSJbbcMZTB5VNogbDCrzAUPAxhQ5q3w3inNfUV5RAwYSbfBBuNsL12VL8NXuJ2CS5aUJTC6GQN9yNndQkt",
  "key44": "4y1oPm8cs7cZXfjedNpNoJ231dEgA5TdJ99bWRw2CvQpUDyMcZWLhYsmXhDCf7UicKn4f6tyPxpgzU2x17DDhvfM",
  "key45": "37f5sTLRk7ughk672dZz9SVg1DYhjha2mgCsnBQd6EG1CGzH6QCZZknEbe68sCiNv3w7LzQfdpZVBtE3i5LS8Bi6",
  "key46": "3LgSXsVNRTe4UuwRW4sSH9tZmWmHCE4KZ9XWDqekQuwbZnF99N5QEerKPVwL9YN9VcjPMpgfwFDmSqRwVdiDbrf2",
  "key47": "5zssC1PzotcE8ENs3oYjExNTvtD2pA3VfoFyjJeKFXe12w5Mw51uc3ytdLKNR7ezH83fNVFDAiqpWfLg5XQyzUYd"
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
