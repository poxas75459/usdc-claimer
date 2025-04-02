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
    "3tX9Jbjnn3pNds84CJNbC4R5EfSKkA8At7KWJBeMn8X9hQ5f8LLZNKkdegZT9YHHsK66oadoHLJ9qka1xR4E2W9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nCCBPwfW2vtYv76C6CMzooVuNx4X7T7MLeq2dc37jH1NYK6iozqPC1WPFhgTWqamEbnQPZ9UqqPoqkK5wKq2Vfo",
  "key1": "3GVx2o5av8CQRbDgyprpNRufGeK5NYs4oEJf3F8iqJHETcGUcos6BCQQCziBR57GHAtUMexPukEkXFFkdHjbVEAj",
  "key2": "3xqqz1ceVb3dGxG3gwUaKadLRFeMnEJt65bZ78HzGwmHAis3Vzi7s9Tr8hDdBJoAGz7yopqhHGuAgV4ER4TbXqiD",
  "key3": "5DbXiHuvxs8G7Y5N3Vz29ArfLsmpDetUrJwUrPurB9jHSbaKXsQc9pC9sbz7FWz7WnziHu9nvVNG3WTiUMgziULh",
  "key4": "51aGPtNF8PR5yyKb4iDcGtcMbhSzVDS3fbk2kfUJ12oybxBNacYP1EqfGpyLRGEMct5WmaQGR1GP2X5UzfPWXmNx",
  "key5": "2wBxw8nKE91Z6HgKGu3G14wmsv9j7kGVuvRjX78ESvwScLH4PjRtdnDttSUYPuJzwMgp1r2muaTqm4WBHbnM1yGJ",
  "key6": "dNwYzrn6bcjhLK5zJwUZBum8EqnX5vyiayCUpFj5JHe8Mo7SYEx9T5tSNWTeyieR4yXxMC5LC2ARBRHAd9TvZkj",
  "key7": "2TgTCdnguySxwXWHA8nXiN1JMKDHqGa7sMxtSrn7xsiKjAiCrrK7zJeDdgGzDWp8JnqTNzzJi8DPdx3ZRaJepZra",
  "key8": "4UUeiiCXBo4hfzJPVwCM1fcT2s8rB8ui8jKUvemaVyRNRGapskzMkDYwvyQTKpMiuvqKrYMLYGHVtCAWZ9N7F4QM",
  "key9": "3HtvsZHPBn2iDoUJUUbibpTjtUtd7rG8CA8nWpQDA5kw8nmSKxJViMxLgQRE4TnqceDiqMjPtHL8NgtCvGarkpDY",
  "key10": "4ieTivTmmL7zuwMgXPPFnzhzsRCpCMAtWqk21C8HfgXJookYYjdSBtGCD8JWHMFEBSqqPn355u5KeXhFnDQugere",
  "key11": "3XjRZ52FFxUNFKK7AghaZkbHJPeNUmX719xbahNfRTRYrQU27poKmpTvY9fPenBHbGQVE1zdT6rSEhqQEEyMqndy",
  "key12": "5CvF8kvhNEbVyUm7UJYGyPqnywMunVgCGGud7jmmDdr4ofxAyAKzPPiosG1EECWirgNnfwUuGMkyhG4XSNTW9LEy",
  "key13": "5ZanxQW9BFbxUJJEHUp54ZTJggsSoJeJMRZGTJ8ZgbfT588NGv1f2SJQBH6G1gbJYACAk8nnNTKTpRSf4pgk5m2",
  "key14": "5QWigBcMecThP2GyACqnJusrsZatitN3MUC6e2RMzwGT1dMGKBbdie38KZ53y2zUrvUVmxCFMiGworFLyYWyKF19",
  "key15": "5hPudg9B7aW9dR7aMnyCFUvXfR7izagJovERC6AfmBKAUxq9n7wxVPMcDAdxXo6nuBoHCQeU4bbW93edn1dhAK8X",
  "key16": "3HoKn2FjEzDR11QJMwJggE65cebuHfusD4eZ9GiNKMz1MD2KqaVhUeqzMXcYdP5TDjAFeUVP7srQXoix4pKvNqwz",
  "key17": "2SSgeKsRtLvAgQ4jdVrCvRBeAP7PFzXJVs28tWhPqQYUkg5rqkoZa73oD8jeGa7EbcidpoirEAntW2K6usksJSFc",
  "key18": "5ZDuQkuCGeR5DthvDfwwDg8SEwRBRLL1v8NF2cCxMCeEip3kK1PNQDLLp1QbmdufC59S5aobPMe693bpLbFJkmH4",
  "key19": "54WHsBuzoypKBxh5BGKR6A8hD7qXC2TbMzc4LpYKs23Y8xFkXQ6zT4iavqjSGX11qBN9ZH2DEM7LKCfRaHdTo8JR",
  "key20": "31ZQ84wfFYSABR5GYAWWhXhH2JM2Di7KjBLJfMuBkeZJnJH3fRSXdHp6ooMyFeFGtAy6h27n7CUWwJmZt76kbUDc",
  "key21": "HUSZ9aLtoJTuNjfTnibTiXxhtWwkpqGGvKK9vuS8vE22RAuJDqJqVeWLCJxP9YSFHKUdPkV6Za79P8FvhkDUfzB",
  "key22": "4fico4YejbL7XdactjMNPWkeXPhTrKFSZZmyvBbJn5oDwpVquZieWZmPRLLDCHWcaik4HvrzVPKjJ3RiSdCNTAVY",
  "key23": "9VqcnusZtxoujHZYK5541oLF724bNimnpVRy3phHoiLRpXfSDeE2sWG2pq2g5wwXMiVatuxXt7gn2gLGdqmukTm",
  "key24": "3n3pPYAL5GDJedVkxLT2d943X1NNaLg93AzuPhVjkLF6mFPh9TVcmRFRMoaTw1a2PSRrw1VneJjj9MHT7oJrZVpP",
  "key25": "4qZfnrozXuDREtSVJKtEfSygzESfry9tngBXRRhQfYKQwfULhvB7HR5gbm2UfkfeUYictuv5wY6BeXZCSJXtzsKn",
  "key26": "4YKz69Y3q5qG9vY8GeVD8SewiCUodAujnenV8NEZba9jpGFpkGnM8g8SNndHB844SioPpRwTfKjp6giBeSWAWy8S",
  "key27": "5ZZdEPwLjP8qoxNp74XFpaNQk4JLHxax4VEiAgDQ4s67HGtY2r6RQunAFRZG1Mw5qpTczvNFJuqsSWLZZS7bnafC",
  "key28": "2dkRwDGpLq4NQzhMFFgichdnKqhTNsJoJDVMc5WB4E2rZWai8qYgEm8y1pupzdM2qyT47gX3gCC4Fb2RdKnkHpv3",
  "key29": "QjsgCS3VvrCTDstTrWZe2YC66pG55WMx1HWiyKCvUJEs13rqHpMdE2JVkq2qpAv8kHc4HT3851kuusbvgfVHLAK",
  "key30": "2aB4UrFm5quNAjfaMFCnBMZermJ6QVHBpfHXHnX6feRtMgWXKd92ggnvgR9pYJ5VSq2UsyQ9YVGn4LdVFgQHNdzx",
  "key31": "5wX8QdC2e3QipUpkRBNukxTdaQVGh7Fe8ckQRcvJAJyRavfejVbDnCKuB3Dce33d5efaMRBbLhKmhcy7PbRB3sQF",
  "key32": "3u4cWJAavAzbZVGPBPAXLYyo6vQb2yEj8qfuEUyA674DfSffLFzkE9GwCbEFSFXdq7iJwPsmVVmRJi1zJCQT439A",
  "key33": "2WgT2j5T5S1ByD5NDV1JXeHpS3SntraHg3Sr4c5S4pfChdcQHQqCZvZyYEDHK9Bpa7xKoZtEDLivWnH116LHieur",
  "key34": "47bY9zhLdTLsy5t81uWf9Q8VZdbfmFs86ny5X1fwkaVfphXkPeTQSRhgaB8on2AbpCM2TydX2e9BZzXPoFWGmGMF",
  "key35": "3X5Vkhjo1h1AC4q5PEPKp71DeoUgKzed4SU3MRfWVtaxcPriboRtyGUj1iu8E5YVGeAsz3sisbQT7RRANyGrc7JP",
  "key36": "5ZbAfmaYjzT4q4gdJ6KzVtUK3MF1v3R1Gsymae3eBMDuDcX2F3Cu2mezeB6zXADKJqoDb78hFe12LX8Kaq3q9fbX",
  "key37": "2Xmgc1fpxADzu3jixWemnAJYv5X5WDK8AqMXzkdfQxqxsw7xEepjJuvw1dVkJoDXhHbhPbJvTiz1gQZDbrE6UGmn",
  "key38": "3eAexiBDte5yULG7Db7yVrQpZosYbsPdJ9HUTtSAtNKHMZrqzAEA2H9KZbZc8uc89VBTZ946bhrXxuxG96nzCuk2",
  "key39": "3bkHe4GPB1sWgfbYRcKiEeVfFW39bazjHjyiTjkBjYFr2KDt86mKnAsQy8NfBSWpJWcVECk97SLjNLPaEH4cNFTG",
  "key40": "2HBdM13dFdmMqAy1GvzK8UrirnEdtFnXQtqqSfYVvzGSNm6sh49fC56dUjAhugoTXsxPu56r93ZT8kYHWH2jP2M6",
  "key41": "3YV3pWPrypq4TtMqG7qtutjt3KQ4eH9ahaCmeNau2eHm7juH8NJx6xtSkAFBTtVHUm4NdWw1HLnyqmB8VsxVpnZz",
  "key42": "2UR1cdKjDaq29REiVQNec5nvo1w371rH5Sab6uHqXqwN7DizsAZtk8cMGADdECQGVMWGW8tS1XqUnmTbe8jdzTrS",
  "key43": "3pa3b9mRTXuK6RwNFBnDYwggKK2ZwKXPccvuoeuKQSP5h59DaerScK1tVy5Q8ehdgtZMVKYNUcsqdUShrfc5weYc",
  "key44": "5vnAhSChJyesBXeDPBoWrjirT6U1RpZ2sXpNcUKdmhNMQHHgHRffgKmFpj1MAaD5tWbzbS8hSWuDDZxu95ShayLN",
  "key45": "31ST84VActWJn9wGYB2PNLdxFSbfKf5gy5rWfivHV5izoU8AWPPaGphZhT3AH33Nc5uDRhGHnQXRoXzFnKjfpwVQ",
  "key46": "i1sSnkByuGWoRe7X5G4S2DEJ8LrD8Kq3trFG6Py6Z5NKnyWdjzjN6cQtMpda26Lxe6C9S9WKtCcD5SAKUNmE82Z",
  "key47": "4AEXwz9W7iWvcSdCW2vkGxUYbwKuhmaz4pWvf3fxBgP4GKoyJbzBm4FCU8zn2X5aoZCY2TY7Dx6gvm9b6bRPXJac"
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
