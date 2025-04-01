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
    "3a4NFXJHkYL3RegmLh5uarn8R1XdkN1X3rafzvZtAQYyfyJ3fHYaACz6M9jCbV7KWQENbbKXPwNoaCiHBiBCVECG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pAVatjBCAn8wNFWWwwJ15EXpeQ7VMw4u9AHFERUodyn2x2uwJ3htn5EQtLy7wr2HBjgfeh2Cc7yR8P7aFKNjtAV",
  "key1": "3vEqfTpGFMVn7aNkQapAis98Fg4Khd4rr4TWwN2XQdJNNBazGtPBgNNPq5TYeQn3uQSCy9z69E6DH9bvW7CEkV9h",
  "key2": "4FE6fFQ7QWCJTFBvpHXPVbgGxmosbiAmV3sZtesJcKxe9vduvW3AfgbPsEMdu43NQVFDxWt7svQE7pHea8VVZBz6",
  "key3": "5Uf5Syn75QrJh98GDwz1TZ6ENaekAdg2WSBiap2VmCP1HhL2NRimFfqKWZufEfZEovVmNZDvzenjwz7iijeRYfv5",
  "key4": "3H1GqF9ErDHM1bD4SGM9nVKYLTvqzPmLGeUFpxaDKrvSJxWHJy3h1T6XatKkAsSK3oGm67hLqBCdsej8oHP4iHWg",
  "key5": "sMxTsHYmMerQyEGZm26wUorgiBBRimBFBvEMEGiXdfRKaTKTA8mvZaH9GGe1ZNC3HAZtrwUikTGvPMAPJsiwkDb",
  "key6": "5d4RaXvQAZMryQ4qNRGzwBgdd1ehiSkjpqukqFxMML5oYJMVETqMuY9GJqNiNcoEpj15eTWM7DHVLbiko2DkBywi",
  "key7": "4Y5MESConxv2knk7PxiZHPgnGCBDNgNe9KzotuhwmwNUiFaE1ccB7QcBcZDEmmSNQDBQUBEHVpSTzyZhrKeMaQKA",
  "key8": "5tUp37VPSxT9o9Y43Uo1CZ27Y8PC3SWaNgjEEByEhoFbnx9Wb8zu8DchdPKCHN4VmCqcbZEXcbm1znBSRMdmPX7w",
  "key9": "cQsoPsUkHiQFPoD2ai7noDnozHo2ZHej32ohwtayLrkkQ3jWAUpa1d2aMDp7DPs1S1L7Z7aMhbwYvs7kYSFBMGZ",
  "key10": "4kvNBLof9cuT5bUx9JW6dFLRAUyAE11YvD77cZC9AJ48Qib3VRETHpNowo6oKo8QbXmWnHqccaVGH7TB1sbwUwQ4",
  "key11": "4Pg4XX4gYYbLoJb9DiQN6doFRbQ6eG9M81s3o25uyFsJBFnjAteL5skejQ1WaJnRdpopU2gF8ndJ7kqFhCoPXn9F",
  "key12": "5cd1FMU4hxPCnCbYzWBeq8iGdLKTqvcxrvw4Nc73rwUZbSFnw4Q7pTUPxsVtoVYn4KJtbGSku2XfYpD6N7skmsbb",
  "key13": "2HtRTouWDaavhuc2tQv6dUtFthi5VXZxomLPQbMPP6FmgPNFPfLDpwMJ2wnt3zARcG1CYtMCYccoJCz8jPw9fdVq",
  "key14": "3zQ7TrdRBuYNwYBoXT1PR9n2s6XsuWdQhV7haKiH2vEzoJoYaTYHrm6wmWLf9BZ3VLUomtrBS19XkbGkQ69FcUfN",
  "key15": "4H5uuchbWPbUv7dWLEvxHES1DMLFExgDwN7te7tjy4PWJr55eYCUfMdVRPYg4BgzHUVtvqkXi5uJRRDusfMf1bSm",
  "key16": "ku7m2bGW9y9cQJdeQy1xCHXhYy8ni6uuqYa2LQ9gVw7qEERAvm8nyNf23PsJ3RZ61obHGKiSDbDxsUT4e2n8LzQ",
  "key17": "mTLZKjM6YHXce7xjvoKUgNtEDPT5UYvunqY8PDGNYjKPB26Xj2Eo1XH5Yn7Lz6Q1VratHrXE3ykc8USaVRnTS2a",
  "key18": "2XdVSj28HFi1iUm5dJhMt1airoz16UekimdtjoZZGqSbmzotfYwpSsnGzZaLycvwmgzWhBV8g9jYvJECPWHGTLFL",
  "key19": "5gjuCNWrSZT2y61CW5V1SB29jsQfB2J2WtYabjQmDz75BWGtL6x4iUp4neYcJWua2AKHKdB2KsmuaZb42nTJz5pK",
  "key20": "37mdfdN1aGvH4DCXZFwGiVQMPcQ4FcrhmUb3mDpyjuTwXRk6XjicFuqGp26YitxELBQ3ApKs2pmS5DcbaFyHeuav",
  "key21": "5E2MRCq4rhbu3CxNE7748VDZ2HmNfdaLCuNm8WBwFo3Lx1du9uL83dqoAKy8Nt3jn9djoZkrxwjzmuJPduTA4dSZ",
  "key22": "4MykuhkiTPLqv8pxrMszPk4sjbXJGPBKC8dRhtRmJLjrKwM9dW4JXwfJnLVTgEDbLQi7ssXRkk19nTk1DAcnzgLw",
  "key23": "4dwgZCTdDqNxTQ1dTLLMvuS13gzH65hGpcsEwSQhvXhvhXHAf2HTQQsoeayKcRUHAG5wiT1jrcmY82Eqvd4LbUj8",
  "key24": "uxuL5X5y96z9NT9UFL87QBUk2UnL3SGLCEbfxNCfQtUGSuU5qt15QCpJgPopP3MfmZTZdYD3U9b67pFkPWvAXCq",
  "key25": "4wSGsXHEPWkGrVWCaAf9VCbbjJ1stKWiHEbiNjbrjWEHTn4iqo26RBT6rnLaVS2qQJm3dfsdobNemo3dvSTfHHi9",
  "key26": "4eXvTJTQjvA6WuoiA3tceC5qR2BCqr2MkxSXs6DGEhyjhhzhsX7jw2knYo1kGarfvoHRqNkp9c4YzQdWbfEEJ1ar",
  "key27": "628S9DH43T4jfxLM2kWX7Wi42hG8TCXkvaaxQ92mBjPjERdNuEKuxGuau2Ubuho74zycXzxWmFp7ob4mYwJcEy2W",
  "key28": "41o3jXn5QX1AEwdiUNaAkZWRxX1jMLeiAvhbPkUwuEMiiyRXV6JFFGUCJ2k2r94KEGxpWzpAeufaYsvpwDwvusMe",
  "key29": "2kVkWixnNaV65qZU2GwqQb67VjEMCemXL7Uy41JjUn58LED146ezWyUpGBpSZh4THpvpQ52nJAbqwW1rqwfK2swW",
  "key30": "65vrB9RAgx4rdos9zcdZqcvnfJEJ4QbSVFNFVkB1jT2QgB1YpwTMpY195YYpnVmqZ45aVtKit3AbyoSmoHXY7t73",
  "key31": "3SXXAhSUTrPvEVUb3c3pVoyD73zs5bRVjmHrregwuXwFT1aN5B3G9BYCWk4QUxeHoxDJpNG4QNHK4xeyXqBBU3Dy",
  "key32": "33zHf5mRA9Puw9DCTqA8uPBgsN5bgw3JFTujvPGtqsQyRcBdtiQq9qveX75zmQGAxJoCmwhQVf2BcZBgo6tHcNfR",
  "key33": "2Kvt9CWYs1ifDKwg1PWpDkgJ6oqvA6UmvruDbUjw3R1hoHEi5Tp5Eek3YQtbHA2RgjHEyR4xKsaybhf28HE9EhGx",
  "key34": "3emZgNGQ3f1ri8JobQkYDi47fe9rdh4wFVH4BfiPke6zTHstghwghznYMdKiCv3eGmTgtTbRbbxK5ork1VyZaZ7K",
  "key35": "3RbnC4a1YZnsxBdbV3hhdeo4k4E6nGuBmjm6hkkr7VWnN2UsAaHMWyC74Pc6G9QdD3SW76QfZENSP1dJV4q8bP1M",
  "key36": "58QE84rF9GBeBraNRN8hMKpPtrwhmmQjhCEJwuKSjpJBsUso5rKGzQmZ22gPQUx9FSq6B9LHp1gNKe3ZavxtPmMc",
  "key37": "4XytSZtJ7isSanL2yxNZxX1LQGUXKnciJUQmJQddQwVtnvEVVY9U1yhoTL9UCFak2jfPhamBUDs92QUb7VRLqVCe",
  "key38": "62sysbKzzEZNLYxcEiTcma5eZM9qoUZhBk4AR4RiMZWwof5KS9qtWGLRVMEfsWhaz9zUhyT76qVpDfiqS1YTUPPY",
  "key39": "27RwNy1uEwF8PHPYtjNZFJThndcVNnumV3wi755HhZnowdStoyTDyoJZgDfMbR6bdeDUVysx5CjXa8V8eTmDPHwF",
  "key40": "5qGPHAAH7xqPyeA81iQbNcq5SoT4NXd6xF1SsoL2xW1zAFNaonGLX3eA4nGoheAKgyzUgP5oRwNJWYszeFuk27WH",
  "key41": "wL2Qrzu4DeapMEUtjmQ5zGMXP5aEwPhpj3WYQB43a9hExBce78581AsUfbNY1qhJ2QDWGnCFbfsJNwChMVmZcGT"
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
