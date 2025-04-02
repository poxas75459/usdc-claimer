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
    "5hU7UqQp54haLrmTckjbWw9AqmuNvw7P3i3mtuQWonT8TKwrtZHfdkyAntFoYZfbBhMKv2KLZ9bho64pSCWMUEQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHW344uAW4CJWJRNMSgWpKc6BimYBGm52AtTP3zF4ytcodtjiLsdyyToBVMCWJZTnhvrZ9ahA7kwn6e7M3se1P8",
  "key1": "4sa7Vh1SBXTALoddt1uzAMfGfxobqfVZZQjCR6KKG3ZfRQK2zq3dUQjV7TEvVemaqkyzNtHCguM14c5ijRtHsFAZ",
  "key2": "3sXyZ4eu5HR7vFnFicfMF5vAvKLf6QsY6cdnBarLsRtReQdvf797PDaHUgTQkLpSVAjJgMoyDuvdsFYvLaSZCUWa",
  "key3": "35LeGggwopigUTu9YUmZ526ySk8BfHt1g88hbTARkLwHbDpwMZ2rkWcZvc136Fx1UqnqeQjYs6uUswG1s3c98PPf",
  "key4": "Y7Z9dYJCeHPu6pB6CYmmQN6e2SUGFqt611FdBGb3MA5NUssoTSCyxLQC7fmEiEAATzFVXe1cDVb2qLcYFEus6Z5",
  "key5": "5MeXfzMyj5Qyi7zSRG9nkd9ciPmj12MWqSojFyG1t8C4nENDFf61pJJXLSfhbm8ue3kL2mZmZSZGAmF5VsXqR4yr",
  "key6": "2VBTsKUNFEoWCGnySQVPHvs9zka6j5AQop7VefqS7Af8wSV57tyVHpHGGG83XEuWXo4xPeMKzjsKAwLbmDkip4RF",
  "key7": "51BWXK8sdhxrTPsJkqLVrcXFBLyn1aPVYb683Vir9BWRuVDkFt4KedzV8q88LpXYp1NC6h1rbaGnJT9kjSjqwYfF",
  "key8": "DU7SmAfEZDLqRHGWhWPd63UEXMLSeTTeW3xaSPd6Mu5khK2LYsuhC32Jd69S99YFDkfsPdoHqqR9hWYrNb9YXYR",
  "key9": "3bTRN6NmBz7ySBcekQ2DkuuctAXRGsLqwSvwQ1RPeK84YNSgGeazxqSDWfxmtWRM9fAokNtwGqeD8hQAH8Bq8gaW",
  "key10": "xBQCV9FL6rvMRR12bMAUKmf8A6Tmikugwuf2MwAo6ngHCWVgUwb3boDpPgtRd3vbFBMHHbFUBgsSrnCaVn66NRA",
  "key11": "eFM6P2XLfA18QL7NqEwqJbrXH6oFsTKmBWeiwjxtkLpjZfPLKpAz7w3iTccNuDq8D4EYm2786ZLgLCZXcaNS3sk",
  "key12": "4r33xSNJpuq7KbcojcSFBqdDiekdr7Nu6TXNPeMTvNz4ouszdeYZEUnpTzETbxQuHyoLFCNzdNx7FK93HiLmSaZB",
  "key13": "4CqR2cpMEDboTqUBEqVfdCg4YKmitykbsXeitkbMqLxKiMDbvtDHnxG25JiDKKjT881kq6Z71idzsPtzzdmNEqBd",
  "key14": "38Ln6MbAdPiGiSpr1kgCVwi77JPep8yLrk8481ahvXdjEUwGBX87ZnSRsbaQxSKfpmpJfoQq8XVU219nxuKV65PG",
  "key15": "2DGnXbFwHBiyavHFG6CfwNUSw7kBQoyh7QfNdbmSTgdRPpLC7UgwRBL6AmocCK2nQhELxAvHA28FrTMX3Gec3ULg",
  "key16": "5nJxUtPL34CmZ1UdLubQ9NUau2Vpivw9mW9zdYwPWmMM5s7s4VQ3qPFgE34CiFk56F3NM48xQCLdc817BHt4zV99",
  "key17": "4vinN2UTmc9DK3M3cDhjgu637F1Y2DQJYL2wq3JMwiDkEG7LKYNm9LofaRg1AzEnny7HQUiGPbNxd5L1SVBU7yEK",
  "key18": "3bB2a1ZYdPhXpbzYZr6oTEUJUiW1m3zLerNyqczngcW9nhLubE6C584dW45C47VMZz4x2zoNXbX9Fayuci81c8w7",
  "key19": "3CmdUsWyhzpBdjRbBXkbTDqP97EFNzV6kbS3HHyesDiz9rLNDw4bF2vkEpMGdZ6grmTBpq76LMTxWwo9EKqt5rXU",
  "key20": "65tJEGw9gTw3iuGXizxVbKJh8vGFigS7RRo1vCqMZYrwU4cefdJW4vNLYfJ2sGbEHJjuV29XyWcz3CnVWn9hfB9m",
  "key21": "5LsPKSzG39FSVnZLKQoEiF61jPGYDp8UsencEn7oxZsnTrtzj3HJp4xpypX3KsmynFLm8ZSUNx94drowLoMX15nz",
  "key22": "3VrH3ZeS2GsyLvMLMBvy33vdbjvhKxScwXVyfVTBmuE66cuENwwH4jSMQoq4JqD2iesdWWEu1ZzWHGDGoNj4K9V9",
  "key23": "5ZiboQV3zrrJnYiWd59AoUeNQonbRsHsGxQpA9jyPxeHdiBJ3eZU7D37iULxM72TQ8k5xqend8ciDN18zWoaFTzn",
  "key24": "AhKajvgQ2Qdsyfd1gtgHuiz4LguGobhUAKTsYcdur6dP17cMzxPddhy7wKqoHW5B7WStnvxXVcnvpztPZouPxdM",
  "key25": "5jx3N772kp3mtokwDGAXJh7xoCek1yo2UWf6oo6GL3j1Kr1RsZPdFfoj7fntcEMCshUGN9nBTouF7gZWrB584N8V",
  "key26": "3rg64C82dDabEHBzJWrc6BQBzsh5XS2b21xunKxLEAf4HizV1fsW8PWQhwNX1yYgdyArZbaDqWF2iy8u1oH7kHw9",
  "key27": "3A2TWNsHk9GcQrGcF75U73gGJXbnQC51ZcoeWZNNRLvjj8TNLofqb2i7KLG8e9fBVevZNxXNMuLJ79x2EGEumFHA",
  "key28": "63WGQpXBtrkgKxRjSn4P6SmgUPUWCip1dMgQomw6AsMG2TyXRFdjsvo2mdWt8aQTjmQiwUxbKzAF1xJ6JnxYGKH7",
  "key29": "2JkvFbnWCA8QSZzhJmf1xkvWaLidoS3y9fmpsHgsRbZEjHi56QdNkvjZ4k77i94tcBRgxiHMyggVjAPLfHQSrEoW",
  "key30": "3kk2DigrKaTd1RinMAuqC7gC22SxmLEYoe6sSd2eNbSo9HDkQ3i1SemrVPtBTyU5vJmQjNTmLyoq3tQXuZWYPe9o",
  "key31": "5uM5ADdEbvcB146hJNWSYEpDGdJB1ys5hqCm5vaVLjwNMvEPJq47E5kStkEMVrNJRXi1kaoS9oG7yevQ44yHn5Wn",
  "key32": "HwRWWfcjhquzGkd19eC7AAZMzpuFHSWJL69hUTYinWcKo8XxDqgz6dp51DvYGfJXEU9Lbeyk655rMFJVTzFNzQh",
  "key33": "18kP4ngQ9FK5K2dpszUotZgrwK7eL3JpEZnwaJnJ1GpdMccCk8kY89hGraF3pkniAZPBWJwL3kUyXpsyHsA6dXP",
  "key34": "67RzYPXRJbCwNj8dHx8SQLzDAZ3kpHR7a24yocv9Pe9r91XqttneSYQimUQqX27FJbroYsfVBy7oCgiLu3AQNBw3",
  "key35": "3dp6LSCPVgZ3zhAZECX94j6EfM5FEMrEhRPcDx8MSjteDrab6ehzhYJZBdK2qVKuNfFtaXvS8PFZHhAt7Jg9k6vJ",
  "key36": "3WxmwWyMXKqrPqT1xd5BLUjpnVt4BSd2rJz7KntXG9bJgMhVAL1MnwYW5TS6rZg6hkvW5qZ9urLauQWYpvciK9wL",
  "key37": "4XkMikfgn8zYpLrkPN2pDvNNUPWttr5ffwQmNhhqPQSVdCc8zMYdcNYuKGBoi3F15wnoXSdWcaMQkFMD1VLr97cY",
  "key38": "4fAiQby6jKfvuPzRFuPehAVvXnxcFZgZunGzZyZUQfYz9dTzxWPX64JVfszvq8Zzb18QCKNmhDzWpnxfWZD8Mp4E",
  "key39": "55h9ateDEEXmTVPLrhaEXGjmAkpfdK7w7AZVouWVeLyy2hy3sHfZwBf3pHhueB6ECmHeaup29hP1VXx1PVuTrJpN",
  "key40": "5f3anUw4r6V7JbeYcPDJ5B1oLpv3efX9KtSFNkNyJn5WsEaEsvvWW1Pg3YsE4esczeC4d3VJwd8iTN7cu6BiZX1r",
  "key41": "2Ka8rXHTspXqAG9w2hMjNyH5P59ZiJX77JXB6pCaiZdvCdbeNG8kEvkWot2TqFbEsbZYav7Wr1r7apunF8GQoK4J",
  "key42": "2f1P2ZfsGLk8TzqccNtXwPuWg1Qov1tPUffAkqKSsw74GrK3PKMonNWkchv2rwJ9EhajsubxvxtLeokZ7QFqh8AD",
  "key43": "7NrjezuRtSV5nUK1n3JdcJAo5icPKnJnEwhsqAMoQ3qT9oyqXtU4b132NZ99RestNUC7tfGNGRewmNkAX8z58VX",
  "key44": "3bKbFaHeDpa1yJSgv8pn2yCaGhXUCRQCkJT3wivZ3f5uuWk3wkEFkL1tgbDBzcvYFQYZzyCoLipvz58WWsumxBS6",
  "key45": "2umCRc2KhpCVVjL6RQsKLo5yxgE2zMvr628ESHm1QJSKDnw6QzGngnC5JkJ1KnWvmEx1CohGQTXDbzjWyvZ1dPY"
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
