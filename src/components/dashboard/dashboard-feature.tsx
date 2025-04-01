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
    "2yVxCqaagXq2RP7ubWEYoEXr1rcRNofBZDRzGgokajGC3T4hkxMpXFwTxC1ATm2EtDDAp1KBjVWQCSL7RgNJUW3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RmGWdQYuGNcBoB4akqX3a1RmiyK8kg8ZDE9QQY94ognjqZUJsbA2TDoCdTJPyxxv29bZnn2TDFBS8CCkUreXGoy",
  "key1": "5fsmAc3ku7NxKh53MDWt1ZbRutUnAJwqoDtqN3o2knbF3ZbzTHfs2gxTtXDq7Jz7tS4uZSEMZEuPGFBuaesA26TL",
  "key2": "4hrAohfV14MUsUS4uMsRwoQggaLiNdKTshrxFrmYycDTT22Anc8LVD6WL8rBGvn5ufrYgcrfGvDyEbupHkLRwirg",
  "key3": "4yYaq439jAxHDSv1ArewK63ntr73hgUDXjKaE1z3KXfw2KLta4fDqB6ujQk7dr4tV8E1GGKePrJu6SSdm85jHDwU",
  "key4": "3Xwo5zZk9aqXMJeWSawsWCQehfVryLEGZhsdx58kbt5QXu23uThyfx4BfKAYdNoizFVG3dNuecutPqFueGeUSA2g",
  "key5": "8vX26RzFWK85foxK6WsekkXUht76v64oYaivxKXN69vmd8qRdxGCVKv7JBKkryFdRvnZpU5dBJ99e7U3Spgbt8d",
  "key6": "2Z5sfJmfpdpoEo2QFgo6Ty1zqjWo6LS4vbFsBQ87TqcL58vsW4dfY41XivFso8712MfQBtKgEXMTX23xoHC3evtG",
  "key7": "5WwLywXtd9zTReqHw1aMDAUFD2VUUYo8aF6F8jqMoCWHhN26wXaycEEJnX6xPJvHgTa6Kj4qhENkm4tUm5vvAvNv",
  "key8": "3gmnqm1PbqUBZrYVsNPnELj7UY1mie32chmdYMLhZGsnPEEvEcZCzSXgLDm8wfAvm8aJ8iBUD1yPWeaTex9JrNvC",
  "key9": "4ZLJtbmGpbu9dFQSfdPvDgBBbctSQqaEaSNkBrrE9i27bzwnw8XiSeErfoHBoT3hurS57oA2Ab5YYgJfiVHctBRv",
  "key10": "UpwUFR7bcb7Q9YS6whYMWGExVxsAv8dLJJUVScDcGZf9Dp5ZMwYHm7LHV7mA7bwg1KBYxhBNp3vEXjcA2pd3jng",
  "key11": "3SuLE7ukR4Xf8JNLrW9NkXY6b3bCwviKt1dSpryfqQp3VgFh1ZbVSaL4dj9V1NZjuuyavw4mvN96Cg5NRjeC2Tbj",
  "key12": "4BLGFiwBgi6A99EyuLjVnqVJorGzCKG2FErQ7D2pkjNf7YStPgLNsHnCs4v5h4r9yunXSNcHTRhcFtS24J9ZPHF2",
  "key13": "A7VFNUkRirXzw3TJHBNvFnoi7m8uzRZynGFun5dcJPy1Xp1mgcQ2GdufLpDkXT3MPpMU3g4SLC825FFN4NHrB4i",
  "key14": "45m7XUJLL65mivcx3uy7B4i8WuJNHPFUf1E7zT6UNze56CP2hmkSTUM4FGHi4jJfLCX9YWFt7tyvAqNa273Z8AMv",
  "key15": "4dPeJJvVHRhc1m4MJBV314BJZ4RsS9H6w2iWoYDkqU3d4qvQGMJKekwkR5XFX8LE3CoyLKS1zsKBd3DrRWNeaZ5M",
  "key16": "br2ZepBUPTA8d7FxsCrEp6wbveehz3PnE6vQbP7jtUwnuXtGNx2niMLtUhgWQSeu5n8Ax4ZgCPAbqescsCiRcgF",
  "key17": "5k3LpsLyVCmHsiiaLdDohUKyAjn1LH56SHJXVZE6qwgNqUoB5nv9FFC84GLtwc2dMxDif19Y3Cy3uDE4jLWsK9gL",
  "key18": "3umjsHMURoHQL1TvhTN9Q5uY496GcZsV6vU5cg4XzHN6NnND7i6fcx6LnvdoBqh3cuMq8WD7qF2skdXFmeJMEeY4",
  "key19": "3cVkS9XHFNEVjwKoFrGkjt6kWpb4Pn6LWNR2hvbsd5Rt5nxkf7cz8VTVWmiAzLN5goExJKw1HvfjgEPDauitBhEe",
  "key20": "61uRvpPDM12kFivKiLwEEMmP6gw45FAu1S91M6ieqa2Gghd8fJGzR9bAFwDVqrJyzMW3zWYqyCTjkrpuNfk9CPyJ",
  "key21": "qt5nx9Yvi6ftxMs6wzQyoBoWMxZhgVmfX4ektKuGycAFfseJct9Mxm5BEuorjc4i4of55Ha9PkE6EBXzTNbg2nk",
  "key22": "5GKGtp31F8R7wHmb5xfYzQVe1CrJNLKRo7r2SwA2VNypwkQB7LhP9EZFRqAMRid4B6RCzenvrC9vjCKuHP5Cv8ew",
  "key23": "4wWX7dsz38XWCinbLqojNYgaEZK4TJehWGHgBUFrgiwtATm7UinTRs9ffoEfV9mEdNXBP1XwNu2k4B3MKE3TejWx",
  "key24": "bVGeXGosxyuUbaFKxfFeP64F6D1hE1oJW5FHNLhAkjv1PTpbWECpYPKJtnFSGZqmewP3Xh6f8h4kCvNPvcrL33w",
  "key25": "5TkmJ1bWbrovqwJJQX912zyMYsiLE9ScRyvWe8ygX4CbwtdPYkrYpN4kT9V2fnmnN7rcqEktCUiN6dh8478Rpeo",
  "key26": "2sY9PqrZgXCUoszKunWb9Apk1eXtaybywBX7eJf2kC3oT9PdbwTbGvXQtS9Y1uShsc9xqwQwDu8cFDf4iK8DhofD",
  "key27": "1AP7wSp2UkVvJ1zeKGZX8EyBPz4B4Mnm7WzW9hLTkaaiowTc9W3eiFJ5hMWEsE8FBhWdUCD8uqp258oGJ9uMZhL",
  "key28": "38tYNufSHbBCzysWHPAVjydMRuJ84ACyNvQM4ABFCXhqtYfLzxaDEuiu69LwmAKoP7yUsmPaaNoQmRu2fFfHu9uc",
  "key29": "3hhGFr5So95u3xSxZypfWZezBwDW2oXB69TcUk4Nhcs14Z4USLvGbB2uukJTC3DLZdu6r611S75LvWqzQuhu4wYf",
  "key30": "4iSdqNYh1miU1E7yP9BYUpQHVPpvWL6knoE4w7VAWr7Fcp3Zxsmz81yVDBRA29yMytUKRXesoiRu1XcAY6eyZ5vk",
  "key31": "5AnxptgXqZTAxzRhoTKzSxbf8bLEcnZGUuAzVpEHuHWb1UXJ8hUFDRZ17usdjvbzp4BmwPA5EbEeSB4C8YoZY64J",
  "key32": "4pnrnm3kKJ2SiaoKUg8d4F4gi63tt2YanB8A2nkLMMrANTazMymFSqTu1SxGKsnihaGBPPv6DXNLkoZAUDCGUF8e",
  "key33": "4oCcGdrnTtWdEdUBf1vbiPeYG4WLzehv8pXamUsD5Zo84yLvFbfsUBQs6n21AnqvJ3A8Em3LcCEqLHjwXBVDUNf1",
  "key34": "sez4NVFMQ3UkPSt4ZLmG9nLSaX4jKrwTR371FJseGS9afr5dyU8hnW4jv7vdBvtTezrcjG7notancJQuS2CJGv9",
  "key35": "2y9kgW8HrxJAXN9nKQQXc5dj2sxc1N4arQm2HkAyXBFwvzB5UkSSfjNaQvfjAjCZCK9ZzZsLTr9LmzCD3w9AVfrW",
  "key36": "5h86CinpxkbK5bQrzxRUoqcDewMZh4XGsc2HSPA52n2QKSLTgoRDSfoYGrqV7q7eruw8xReg8H3MpdictPZapsgu",
  "key37": "66r6SReX6KCpRdVyyDEaTehyyqYWtRrWGSwZrnaJj7HeqmdEBzfPrkAq33SzLbW831trqGyCuSLFYz6qkjD24yc2",
  "key38": "Zrva63yN2AnvPxczCnxTBeFbmhKz6S3TEeZmuaR6nZkvhhGpK8VX4a8KKThWFYkGuTnhAX2FvAv2R8R8gHA2oL2",
  "key39": "4gDPDChv1yaAgYFk212gXxSswdBbiXQf5H1L9aZ9pPdR4d1s794dXvZ9oSYPnfk43uBfnwfvm2KSfSDsFz9vhGmP",
  "key40": "2VWdtBLmKH3QSivFxsC9fq4pr1qdboxccJkx2fzJhs25vp1ntCo9cRUB6zC8wCJoFEESTeZCz2tJFHUD8tp7zENf",
  "key41": "PCvEXSAzmGqxTGRUyYY4CmS34WzUeckUhvGVSB2jZwXVzaHF5b2TjWZcqPn5PhHDQSL64H59sTbuMM5jEtPe3L6",
  "key42": "2SJTzXp53ybxWHVuAjsri7MaamyKdXoByy1QfyY5tsYxpvSA2DQSk31Dgr6QjAi6kEYwKL9X5qKvLiRR4UgGgWEe",
  "key43": "5puPjbJJDNQFvGidQChDS9UFhv4sebykPLoSXUcmZDNTfkqYZjKb36WVvedfFkAjCJbTmgbpvcRNDL5NZgCwufEf",
  "key44": "31GTzhNHE4eSk9PmQ3t1YNDzKFmCTiMkZN5HRPGNZbnk8wBLrQtVJmBF6UoNGBxNXmG6fkL896vrrs6sJWRiuVrC",
  "key45": "5pAJBgCNKpMv15zkuTYFUgHB3weXKFetGuhi2eSUqT8sMi1ztLTcfEYEJy27Dh7hKSEyVqf2kWAz7ynsHDZv8k4g",
  "key46": "25K2RZxr7SPNB2LbJdbCway6r1UzERyPhnQRaUbYjbMYRRYmNr175sCmwi2q3vJF3SDcEMUsBnxa6uQGmK8T3j9G",
  "key47": "4bzr7vfrPKtjbB3yRUGoM9VPcyk2GhKTQT7zSkpUycQURXBpt1Z2JzVQfM6etcnbBnZvzoeyeYjHbwxbRQ3fFgbp"
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
