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
    "5ZywvVUrs7Wm4SACGdTFkaVvDrFhkWf69hLgFayzxM2drqQCMhJqa4ZBYFm6bYXFQevvxv7X58Cavkqf3p9zwXCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sJFQaRxct8mtm6CGgpuqKJq2Evm7fDXscea6SfLioJyvX9WFctN9bCoXrCv8GCeyU5D5n4wQ1k7222NuXpskUTc",
  "key1": "rnUS7zcuL1DqfXvktjrNzL98jX22DoeqYFxNb9k155AfvYtk3PnQYKDfQXeV9zMADX9WHARDKCZ5gjwnDdVPpMu",
  "key2": "4SRhohpvc8ncYq2RXitiUGrUV6tZGTwDFjLgcCUBMKebugvuEUKYxSUpShqJLEAPqLbhoRnAgUfa4Hn9gdnfD7dB",
  "key3": "5fn1cRfYk4t4h9vabYNHNQXsEvbaAukFN6cAAdsmUw18xKr15VyYJZo3CDpZMcHYQd5c4U2j9UHxvKytzUsUXuuL",
  "key4": "5R7zrK1aFNoGpVxnag6Ae8VSPnc2ZKVRiyBmGUoMpqRKseTY1pg86DYjjCqP6zBe8XQfA1bhMdwyLxNxihXUqXoz",
  "key5": "5tjyrLJs7PpcXd2dTZ2dK7xgGmPZ4qSW4xDzRgnrmjrAsQdfyufPSyWiDP6JRPDgDT6p69WDufJucgmURa9rVUsC",
  "key6": "26XfQtKQKAXHrHB8jUqBBaCwcFVQYfhyJGqbn2T2rLBWrxKFuQG6zevm9ytrwVNkAM351Cg3mHPsAvjkNFsEwoH6",
  "key7": "5Sf9F54R5PdHnBGNwyoYZvJEuHN9hyTsSJz4i3kDRTecJTuY7ashRTgtBHggrgUMRsLt26zwSbxyjZEhcaEfCcd",
  "key8": "4pdkUzmXJehNEC2HF74oqAea6LzDd2oJKEpMe2uH9HE6bfGavQ41tkt7wPtNQfjEwVi84Skmnj61CNUD2iJLu8yC",
  "key9": "4R9bPcWHjnVqtcrzePqeyKTAB9JTfRAs8xVGbvD3ttyDMXoat6CNHthDiXiVZHFPzsk3yjqqC4Uu7cKK1eva8vDD",
  "key10": "62K3DJ5f5GXCWzQLgkMWaQQj8S8VeGsPB1sZC4we8YqJZjAJcJZNroQvLidUiXFZhN1VhdtJQSF1fTEU7FY4bWcB",
  "key11": "4WBbcSrHCdqrTaozWqja1vj7dM6cPxZr5513cv2VXKP5qJxo9psdzjw2DFTyj6mWN9EiHfVR33aBSFhK2xxjndMp",
  "key12": "vGvqB6bVKi1B4LEF7CAEXkYQQfd4RXwkQWqtGgEPTf5sisaAmKBXLuMShoAsJjXsYHBuxGPRstCWtcwf87wtqEx",
  "key13": "54dJTf4BphPmHo8pWq3T7w238sYH2FtoJkgzybt6FpUYmKZSrphYBis6wYQEW6ktzFGC27X9WbYqM4YzByCQkW55",
  "key14": "3yKC7qyHxPPi7SQaJXcZ1vz9tgRAcZfk145EbXTXLRpyMEdP3rLABScpXMFmBdFBLBJCDhsVjsGBWV2MW9RbsmJD",
  "key15": "5V9Rrwo6mDeaYBjwxuXiEBKVrbb6AYXndoVN4Zw1C1vojE5TRF7uHHftWyEk69Jn6XKNgAcaWGfzP2aHtQuSawYr",
  "key16": "4BXUWbWdDtqRqzkQ3uv1JvNEdCweWs7aTqETZu3JZoMT8p8bXtdN5KCQt3kzi84VwVit1wpdkuLRx4Di2ZwnTMUG",
  "key17": "5NiM1fCeL8WFq9v84PRstANfLppQV5zx5spMVPNLf6YvFxbfmwVSGERMb9XZ9NL9R8rvNuSoDoqpskaEGcDfam9C",
  "key18": "EaNi4fLBFvufWFiqQEL4G4Fxm85CEvdCodBmHizo1oduXk2QHYeYsK2DPqSvESu8GFU4PtG4cUX7nnfgiqw9bL2",
  "key19": "2gQcBYkQNSJJCWwXNof6FcXvJ21FXPVYCgwXVAgyowRezcZ17rAPrcwCV5XLV3fx8y2FRTBtSWA7DE8wjCQvfSPY",
  "key20": "3T2W9ay25F8oxHL88AVkJVrkbLzhM8xPfdxR1wfPt7G4ask2ha15MNpdcXv3fJhuRXkoUUrGAbJfB7VNLfUjTScU",
  "key21": "2aP6YUmN7pioBqDwP6zwpHPTZo65y3yXRkMRM9R9Xd1jysVTUAGHrkq2eUTsLdaBqQ93eAqmkxtJiPcBmHSqj2ci",
  "key22": "5yjrSGRruXFPWiAXLp7ME73gbJbgUYVempwGzfAUJXZT4KRZr6v72F76TcYJDtYHhr51g4qmpnoRABirYACrn8VV",
  "key23": "2DDpZ1MqEKQEL9LARcmsCB6ZCpVMDiqgJddRK4jqLAkRXbHuRXwzXn7zbu43xBuSETy7p1GE3Sus8pXFBBgqTad8",
  "key24": "2s12zM5yE18E6RQdtdLTcvWAEsCD4dGsdKJ5GrohJzeUBHrbvC4ABk6Y28NQwHbyi4wKg5DgvPeyL44sL1CpSiRd",
  "key25": "2dQn45JwhVVRrbjKGJw1vcGHZW5i91bBY9zAjv1w33Fu6DLvLQK5FvFqVZgmzWATQmPyymF8x92TecKzQQNQK8sd",
  "key26": "21JdPEDSQ7fezGrVaecX1A62MnzNqCo1UvfPcgVHAUqhf43ugdMwM3uRvZbGeyosuLAweUZQjHFhH2vZDaTs4PkD",
  "key27": "3mrpKhScuGoZfxafBukeSdHxg2emzt6azX9hrMyuSZwDkbnNnpCoA1KKeXeknEXekLBNPYBWrAhyFeAW6rZw16nk",
  "key28": "3b3RAah9vci3TXqXUSequFRzzNThRFFW1vWbddqTPBebiGuqzL57rhgogAnnmrakbdYCNhC7bdT3fTVEee8V5JZa",
  "key29": "uHUgjfbjDHVDTJYfD5siAUu63p4fqbFohqHnGKdJ6cJvcEVJaZqHKmTzZy94wj5x5h6BsASzWf1aQurpm64e2Gj",
  "key30": "4kav4Np7Uep81G3V679r1fJ9AHQSbH1RTxHgord1t36ZZxjtGBw5exaAFptWGz1A9MY5rxhcQeqgJzDNXjYkNCbN",
  "key31": "49Teqv57J8kFoQLoB6ECvo4KWgksYuVeaEsVsudpNcqT5JxqYmGLEkWYse6UajojeM9jZQiM7Jb4RvFFJ1dEoMGs",
  "key32": "5P6xjQmop4te4E2DbKwkhEjZ9QprrdERrEYS1rcY3zyEo3MuWroc63DwzDZd7Qr2BuDmjMsrGe69Ep1X9oBzgXC2",
  "key33": "2usXeu295YhW6Fh89B3YXRXA3RiVXQjcESJQRw71kenKAwM6USQEygdd1AAZgCTUvUW3cX4QE9wUdJXLrhMF69kX",
  "key34": "3x8zH5VWkm5DrLd2vBsvo7QyW354PBskksdv7PaXmV33eKzz6YcCrGSZB6JrjFDjJLELbFiKwCZnCWFkqaee5UAt",
  "key35": "2348tHzty5REPStWqkwrHNg3pmjRVs3Qs5mgQHN2sMgNKD57bt5JWmJ1eMS3JggvDumE17hpbwRer8WF5YqS3U4S",
  "key36": "55teLExmi52qdv5MzWCbPtZnypqjSyTHwsJrzQ1JwehLNatN8LLGVL2fczK98gegNfXJxsLvZ3xLA96GKLnB5av4",
  "key37": "2KH1zgsqrfSWteRoETgVu79H5Gw4kcGGVL5iimxxkpwWBxx9DPnwL5ZKFfquxrdZ2PAwNMsrpsc8zgPye5sHofVQ",
  "key38": "662dsE3uY45VbsWog2TWUrR6zapYLVdovm5i6P1H4JwCpsoMedA1cL5TnDSrs7fANLScMrU5KqqsyS45hVEcPtKt",
  "key39": "9aeYXFRc3MdXPDMtTxEdmVMsAV1EU5YtDYzyZpV2a2psqQtt7fSTnK3RdLYrgJxTsBi9gGV1o4UYrbQm6Z5TY19",
  "key40": "3ChsGNi7kQcJk4KP34km8d9iHiKub1cFXcLMxGKagEQuQ1cmtieKYCfiS4rkqAXRmqATxsQRfLhSSDNhDr7mJzpk",
  "key41": "36e69ub82WKRVymQKnA3pE9xm55MWvXqnDr23mKieLtoBXLA55Bc2fXdAq1juum6wJkXpDUhhKDV9pVgqquUzrTr",
  "key42": "3tbmsGi8ZcBNqL9g9BGrDn9pYWpP2ejWibXnY8dF4dwUEgtfWKTAEfu55asSns2BMFY7qaLcvsDhrQNPFfSEWiuQ",
  "key43": "5UJUb2pBqes8Zncise5JECP3NNGTnY3fQ6hDeurauD5nam78Dp8TuzxJVdRp3WGP7kPSvhkiequp3BjpvpiR28vS",
  "key44": "5JAJCoWNG9mGTMcSE4gTQLo8Mbnbt6AKrmpGYEKCU7i1VugMGSZ4yBcU7DAmkpWjTjBaJvNjUk3SFMqg1gM2XM5y",
  "key45": "3eivfswLWdYkmdLEcooKaJzpbDyxhBzoibeFxiaWv4EiTs5gHoFeHiePU4UUH5eSUxSPXvB42FYSjSNxyo6MqqdH",
  "key46": "3DX7ur8YPErX4sFTDVmTJNDjTYhPU6sg2VKmFueZrjqS97S5NSw3RXwP9dv4afxHaebg8WFqECHfnUXJrrmdFWre",
  "key47": "2JFHxp9nF7irK8phAR7KQVF3priX5QFtHgx2cJuCHfcbMhHN3Wq65u631LGNHM44kzGYD7ccXkyKMkQexMM4J5mh"
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
