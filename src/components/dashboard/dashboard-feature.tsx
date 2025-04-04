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
    "4fQcihvqqLtcX6eHNujWLJz4zmtjoKBxDzf1bamiE3co5uFdx2TPmT6jevze8raU8w59NJBxkrJ586J9WTxercGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jPkxxYY4dJPPEVR2ui45aRRgzyLdJaFwfWAmZZkafgezcCK9KUn9o7ea9Gz4uhtrAerUJBJym8comLAvyJLJkD4",
  "key1": "2tU9cAX2P3jEKdsRaY32HV2qYL7gy1887ryxnQ48RWftN6k6JJkxbs6L2FPEoy1Rg1kptr2HGitnqseisYj7V2UQ",
  "key2": "76jZwaVXzPE5ceaQvd8BsavJiPQaf9ZLNw5Uxv8hvDxbfWEj5TTKRXCda5JpGNQVqsSPtBvMq4ea6pmdMHp4RKp",
  "key3": "2fvYVGfZJLsdfayymLFPcLWnUS3bpy6rdqV8oJCYRsGkxDfzTpPmQ1fwX6QEzxq1sPAhMChMM8FyQS3axHpqJd9C",
  "key4": "47yXhahEn5NmoCTFWKFwTm9EsA4557Vw4NYem4YhPgxmLyuYN5i5ojRFAF2xQ2qj3kfcXFL9N3CaQPda4CRkcbCf",
  "key5": "NmXf5RjpVbYQduZnrbJgX7Bm1NUhuo1W2XY3Yncd9pPDXcb1bWhRzJE6C63qMLrkZ12oNHacmecMqrZPVH6QTEk",
  "key6": "2VYx2bpmjZEofftFZuu6wT2xVQKZzKnmj4oC6mwvSrpZQVjNPdkPRou5QWKR8Cib8bofkDPNeGjMrMPEXgFYWWZe",
  "key7": "nRCKKTgyCNrGbQnvXxY9gzrotWDC2m7pdAWkuz1Z2dU6yi88EcM9SfW32647npj4ynXmWqqWNozhAdhRV8749cd",
  "key8": "55rXuyTMnNUscV3gjVCuvynTePfRo1Yay713BZc4DnYjKkKAE9VNJvXZvQKjXzkBvJNBMmuPNiNx4hwfu4VV62hR",
  "key9": "2ypZRqZ8KFXNFhwUfcJpFtn76yDMBgGFy5jMvRC9WuG4AQLWyFcFNp9soc5e5RpSXsN1mr6yCq9hLmPZc8ehufVs",
  "key10": "2K7uW2pMtHJ6bioAFKT8Cd4sJ2omGyNmbjJhKDSDpHb9KaSAHEntTJmtxAaxNSXDnszLDqZ7kJBgsqFaXMGP2kGa",
  "key11": "2w11TA2UymWHu1b9y65vXC5Uhrnz9EWX5kv4LaL8aRnV8kZT7GUpTJWVmHQED4PfjmUdnVqMXUqCyBjfRNMdb2Q2",
  "key12": "ZJfRHkARcAtMbR3ZFC8CE2DuCNB2DqFLyP6ewJg1t1J7ypfmx1cioqY1eoH82Ui5idgxMc4Cs44m1YdLsRMn5sX",
  "key13": "3NSk25Q6B8KfEGyXj8oMKSUGaJdPxsBMuLsBn3Z6Gakg9Cqv1zGE3kCbF63fWvN8QJuM7TV2m4jZZVgJVmaVcgz1",
  "key14": "3MxA6GcYkwUJsvK3wXtdT3GoqfHRziadLYhKeuGqYSzgQEqgahhFihQZKVaK8hhNRzGLZWidXo6cMW8vb8LmiKLu",
  "key15": "2shL8cwxCo4fNEdt4PUVGBo3423vFBVrpGF83BVZtC4D2JrqKbkWmJ5vNoshHxPacxuyZ35ohMFaTTSKVi3iWNVA",
  "key16": "4yTKUwJ9DuqSmjNUEPu4DPSLe4DCyaum45qUsFBiTiaxFobS1qgPjfAYve1BNCmiPiMf8363DKcC9XcM7F8aKPxu",
  "key17": "2TZbYcQqtHg1dPqS6QphQvVvDzWT5dbZWCPSkxBPjkrfg7PcbME5Mzh1t5b6o6NPou5ctJ3zEQ3BG6KSJLRgc5Xn",
  "key18": "xtSVaTQEsX15mcCT2LPnALR4Tpev4YkH9x9FE779MLtJe3D74JJTxPBtTXHN82qkToQ5djU55daciyycsDMp8wK",
  "key19": "3c6UFQS1ezY4cUxAE6e4qa4u5kCHtt2jiR1Wtf1L8Duabz96AfoLUAFLc5Q98cSay1Nm4mqYdjBQdakQdjn1vPh9",
  "key20": "3MV7wEv4sqE6uRbgqZy5nYhAdRNZe53ViBW9tj281LpYnf2cxYbBAb9XjsTkTXYHN8gsVDUEGwEzhJheDqHCFrNy",
  "key21": "2SXEa42dLcQvboT6YwDKXsHbNd6FaoL5PRD5H6Jm1ajdCGtiF7AhBnwmQf8UZHCB4bc4adqtS5WAWEaPmh5NYr2V",
  "key22": "61U4NY3gMi4Bu6VZcxrTd843Yc6DxrRoUR34o6cNhfMjCJwaVy1zCmJMVWyXQP3PLDmcDpor2Sf3dZkW3e8vM6Pe",
  "key23": "2vSmaTtghptP68v2eafFujDgZw2cfe2JrCpGfb6NsarpMff16TCXAiwmu5pPTDGDh3Wo3QuSVArtV6HaC8CA6NDP",
  "key24": "5xfBDAunkrJEQA9UvGiJt25sUyFNeXTXfYYDYAEYdkvPw3sGvJi8JnVVCPBhtHdQfCB2YM4Y3nyBgNzHSJ97xvQb",
  "key25": "4wddoGEPC8W76wZc93MhtHJJnmwm4Md8Gy3M3yrWMDB1eJfp6CWwm9qW88K63tzJmddHZ7AyzyD72v5L6p3rf54B",
  "key26": "hhwAKaKGFRyUZ2MGeJ8jLfpK81GJ6SUTCdZ7T9jqMwB7QCRf5dSV48bpyyPwgAf9wqFUjjW3avsumoastkWt4gp",
  "key27": "p9CpKPDE8cGCy3qbmdtNPPXLwYh3UQo5wTs1Mkzk58iaGP2WaJy3hEWmjnNEnZ22TVFhVsQo4JqaAC1goaUmyUF",
  "key28": "GQGnrccZmdtp9viaWwXQ97d41ZP7Yrx6P5f2oGGCPy5qYgYodbNBExLVVqEKYbtuKE3irdSKfMBf6kHYas5nasv",
  "key29": "2LoU81oLWmwP5Sfc66CH9mAGbZJVHPEZxfr62L1p1wvepogxPP86ituZPdB3gY7MNsU1kh7kL6oMqCK8VeGCmpDC",
  "key30": "3dAvDguc82CvKSHXdAomyQczQuj72aD9pXC3E3vMPFs6E6u4W75ZZtRRk7pvYyT7UMqXuqroSU2MpBV5c7oCZXTt",
  "key31": "yB9JCjguNRdp2WG6CpPLT1opVQFRFzoGMA6ZLeM6rpVmP7WWDS1bfdTrPdigCg8UQGLfi4b26daa58GPMMwsULu",
  "key32": "49p4CAXZ5tnouPtbdHPmHN24P5TZrp1kwinFLc61nubKXoC395P6TSSsv8zAAaUuswjnH1HGfaHQfUzmg6nHxM67",
  "key33": "2VJytqWWrgiSXe3MBkgv6K4PL3cvostdajLTFgxV9gWdeyUTpcEJysKhUHb1SGq7CCPrv59ctYUq24t1yDcVQZU2",
  "key34": "2XUASRGZ49LLts7M2gA9iVheMe8RBygmV9rKsKLKvmVgey1wgZAfyqHdWLxRx5j4A5kJPFySn3ij5w6VsSVD6TPj",
  "key35": "5omfygdUQBXUPc9UsNvKh8raiMJ8rreLyniSNoJ41bAo3TUmiaaiRmztmt1pN7rKtAxMD8GwLUQSqeFpHbMnB2WF",
  "key36": "5t1yFtuC9UuRbCzJ4Udi5XPL2PGP51JQQa6hq4XBRx54934Vau9FsjKcRPys4AbDDm963eQDQmGX2SXFiyqTQcPq",
  "key37": "8yjPviWVRKd3R8GTz5mt8kCGdTSSvYgmx8UMNzyEzXx8XacqoZyhwAzfBN1XMnXV7RJPZU52Y8gF7uUbF8mTbFB",
  "key38": "2bSjtjRVaxhrnyScPKjrsFTwg3MnMr8ak7n1apGreWKX8Za2AbL1qu9G1m4Nqui6y4NcUtu9YGKNfaSrc65hBM6A",
  "key39": "3CWcMZMDCNXdB2bj2KQ8djQrghCKqnffimEJX1moWb3JWwWcfqJh8DGYpRQww6PJAT9QAHJB2LGEajV36PZYjeLa",
  "key40": "2aGbXBUBBpacbvDR3NjrDnNAbhpf1TZgSbu7EHk2QMDh7iJW3BMUUDJGTafDJKtGavxDXphSUk48JkfGaFumawh3",
  "key41": "5qjWvYiUa1BVyArx4afTcCP1mST4xmXzzpjf4oTghoHHTCRGTYh7RJxeRtLiCUpyP4AmiXJBxHaah7PZhPE21noC",
  "key42": "2boyLXnJKzeFqRoVTwnTguXnAK4rkzK3VbyVRKZxCCZvuXVzSA7QxaZsxXZVfAk2v3SQ1MgaYNC61QSUcKRzdApp",
  "key43": "3At6TenEqw3L3HAHaPVqiCfE6M1y8AtmASHX5d7wrUFVsoQmMxMQcWtFj8FBfkrZGdqW3jxFoLZqGZsRHJoMpNka",
  "key44": "5frCSd8fz6u2rDUA2D2SwTgLR8p5KtnddpNLkZdz9wLDx9TTAzY6cUtjqndvFF49DJsNcL9h5eNCNRtng7FyNALs",
  "key45": "29GyfXZAab6ZqxQrV46HhZxTE9wmyU2jSNpwDRBrW6jwSnrzwyCQhjtazzYj5dvZJ9rh9o9TzwnFThC4V3jEBoCt",
  "key46": "2fVYUPTaWCcfpRvbL64dirDXJwz11k5NAH18ZbWSB5U1gGVBrrvoxGv1kLaoCpTTn6nU7qKYnd5QRgXCRZF2yRit",
  "key47": "2FfYWD2aMZ26CxiTNkexiR7a6MZsiHAFBJRtqQwzHGh2PFukEb2yMEdqjBGfwpiEJBnGbPNA7YT7GMfGv9iZm17t",
  "key48": "g47R7DWHQXhingE3CvDYuuXBXEthqBUaT8Ka4Vs7NVSP39ZXAYWkutVSaMhjbja53ytpRrHasL4odSntoyMhUrF"
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
