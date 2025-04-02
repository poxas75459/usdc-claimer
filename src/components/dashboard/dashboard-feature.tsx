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
    "FMxR4foHpxmbJD1CQ2DaGPj9or3V9SxYxuZzoCg13dxsghU4HSc4iZKx2S2ay5BHeQupsjpm6yu2bzp7B3JCs2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vwpfeXmvADmD292M2az1n8kqCFhfxHHfd4qMJDCi9mN35bkaWVv5mHJhX2k1e18KGwk1G6geqoXpWbuuVrXzkWu",
  "key1": "54Vm7VVncratgqNktRqkpE9cbFaPMnd26fST1zT4S8WnydddjGeFsPQcYfoVJbc18mCcR9MYUjGLPn8fcWZRNmH9",
  "key2": "BZuNUKZXprBteb1nFe7ojWev56c916ZPX3h9EdhVz248rQc8XVqQqepSyRAX71MCyGBbQUMu3qqfqN1Uh1qtHL2",
  "key3": "2ucHyV7XGGvK3rqGF8mCuY6cZAecr1SmHFC1gym6rUrYztXpgriPZvkRMdQ7awDXSegbQ3SWuNQRuXwcF2fVAtya",
  "key4": "5v8hFCBN7XPotbhkqVo7tQ7KB3KNkMUrPnEs5KS4PQM2Nq37dHyjdUt7NvFNGoVv1GY4ojnHi4jV7KthnmsSLeKr",
  "key5": "xdoqfsNxMQMPf8hBAnSqzx5thQu7ASGYn9fVrfLDiqH5cAAyYDoo4PjWnP1FevVpjxFMRUCFXgiNSpd853suinS",
  "key6": "3vqR5gTFaMyRAHW1pkRE2q31e5ADAuFEwXSTRgynLHB6Rr9bppouTNnXciaiuz228Giyx8aqXgFfSffF35FVtqP",
  "key7": "2AM4k7AEzDRA4DeXCarnrm2TxjebsumVfH97AFBAGiQj9srvFfCtebWfpkwbmM9yve9fMCv4vfzUUvC1fBecNFWA",
  "key8": "3HzmFjA9eGhG2B7WHk7mQNo5BXZKY9DF3i8oyhn877E2W22hQuMBwYSReCqZnzbFovThxDTrACh4WTRzWPnwdzJn",
  "key9": "5sR5fLzabUiJmVMFNyBCZuSCU9G9mfBKGN5yUzHJBdCMfSb1zscqewuMLWYdh9iAfYGuQfeHQb41qkhUg6TxtERv",
  "key10": "2WWhE97NmTkiaHBFWV9ce5V6oMxTT7ybjikyebtMyqn36UuMdBxABiocGbxx5jED949br2LMH7gt2s77wRuy1uUm",
  "key11": "h2JZpff7LqAegrdU9Vubp6oNLzXWyohgUAZaiFDPceFCYMcviGnQ5VucbAQPg5MVMGHEDFPR7Erdmtk3mMTQoZ8",
  "key12": "4ME4tSkggbF8oxJnFxWwd15RibHs4LEheVwFUVYvWKtkebvUS5Men2gPuoHtrZVHAueaNQ4gWGzvG6rcBTR5yDQ4",
  "key13": "3y2SRJiJ2oV9Se9v2MXyQBa1UcXTz4SeXRyhh3FAuYZ6Z5yjip1iikfLaY1aj5RZc8j77nS3aNtGcx3TwuwghF84",
  "key14": "65FQKNskcVkP6fE1zf4nrNxrPcY4GomQ4acbjFunTCKcwWd7zqWFBVTe3LtCWaSCasdT8XF5YKJe4YD4QZ2WMnWt",
  "key15": "4kpETscRe6zinQY1cnbTjWf2UhkVJvHmCaHXn2KpWMdxej2KtFQk7pPH9cdmuVeGUCuCLiff7kuiVj86vPVZEruA",
  "key16": "5BCLy2ZKr4x3K87UHuP697JY4kSe4wgDkrZ9V8B9y91QT3NHQRjhCwifx7q9JNLsJTvKyTgmM8rV66SGF7FKBRwe",
  "key17": "5mRVrSDLPfbWLpdvegKzvGJPWXMnhvEabqehKfJxjphGQrNKYEgMs4mSbtCLAeF3J238yBCmwz1ArfCZNpsWoN8d",
  "key18": "4FknyhcLfNvnkmKUnwaa4MECGsdNR2x5SYRH7fdoFL3Hz1STyqv144uzo234nD2AYnQ5WQqMgeNXuBMBFySN87wK",
  "key19": "2zX8EtGki7gDwGjvGPUfqKJuNvDoaJCu4FTgV4Eh8G8o1w34HnefENm4LKLyPnTa2dqqAVbLUypYtW5Tt9eqvBaU",
  "key20": "25e7r65K6N38F2DF4SRFpxAPmGgFEraJbjmzNw9YXfmMyW5E9vGr661X922BcAnrwZLrt5C71L4bkETwwMwj3Se4",
  "key21": "5MNun7V3hVDoxMTtwtDYjjxft6wVK9UsEhMd5xKKKMRMRA1Ny9LdPYSoTnAFDcb4973ieux5p2Zh8brZKAdJiVE8",
  "key22": "sHtmWq31iT922u3iqueCP3ZWjcArZG83kRzDFa25gJmyeLu6wiFaiaq7EXY3ZDYaRtRfXW3QCe4z2rN1XtBtBvk",
  "key23": "2FpWmVGSbR44zvwR1XXeqRTNTQxfY5tGVJ8oMLMQoLyesVnFMZh4QyouzqmbbcMAuXYQZPsQnCoH7QxXHDVEBaKP",
  "key24": "2Fyj7CybVh5SrsLsrGUYCH4BDjXJJ7isKbiLc4zyeHfYQxMaWPHySf24oCqwDCkygRAsm9STduS6gBh3nVKEJPsX",
  "key25": "5JkgJKLwDbvVhYWLjbeTDyShyBQzvj6Ax81v4uaGcgp6sKhgMJ6WdDWxdtfrTG6oPp8fwaPiSGW8Yi68ZVNiQ4dF",
  "key26": "4qi2psEqYPGAShEYh8MCV5P474bFLj6tFurGPVsk1zeqG53bE3GJJxtvuGKugNz4KirmYTgFWAMEg27RApnAZx1o",
  "key27": "5eJSphrAhbaqtnKNEMhy6uDYtvWtEngw4HD2NAAehmNSuMQJPSAk1AyAcXLvkPASU3APKb5pyXiLTRK7FtAYLXnJ",
  "key28": "4Wb9FvfTfU2tZ7XmMAzhwcHYShg3LdqxvcLW8cA3TEp1DCvuwE76mkLkTa5ku5rHodVRsou7DxTh7Em4jVG1kWq2",
  "key29": "5CD5EmjjhsSw7U9mxNvqn5GKkaaY8h8bKdBkUnScdJT9JjrVAAHM2FiJsf4szLVZaioe1NRe5yHXUhnyoQebKViY",
  "key30": "5Nn34TMT8fe7ScBCzGJ1YApMgxWzWb1fMy6x9hqsgLFKvMbULbKzfcDVFHkCrTxJNwSak2w1Vdb3XMcjdVuvkF17",
  "key31": "55n7p2MDNoaqhstAJK135tQTHsy8GfHnhoQQybfBM3TJcSwyeew5PcL8FYgEi8nxaCYHqdPJFcF1CFu2YistQQEs",
  "key32": "zHyxjVfUmmchCDJPuS1ZaWbnU8azxtUY3xjeZijsDRjqYpWBDLziFbcNYJKy4M7pepRYUViuDHqHxor4G6od88b",
  "key33": "4ieFZrCPhgnAN3Tai15BAKxdYfjTsTQw4T3W5XmFoRwnmvPAsXzu63AEBz614Krjzhhm8P8A6tSVdwhs4q2MjoNr",
  "key34": "3UT4HLxzwCAd1v9GeThkZyEiTkWppBtQMstHeV1vqezQpzHLDsTB88eZtrnKehPPemFjqrfT6vETssjaYs7H4DBy",
  "key35": "WN9cTAKvpPqVx4k52q8g68ee8wFgVkMm38STpkAgtUjwZfbvgjAL2LWfobUvJkUDpyBKLjCyJNNwZpbn6q8foxx",
  "key36": "2N6X1d8p6Z5Jh8mYgzPmTitXQNXkP34juYpFvdvw3SAhTLbMUg4nKEjg57xGzBwPYdNUUJqGoW8FQYiPM1ZFoQT3",
  "key37": "28QsotbD3RNv4SG3NTAsmg8jpFtb1TWCBEYfxFoy5gtwmDRkN2QHKcJ6vZU6H75Peh9LDUyxrraZ9KHvo5fn3X8H",
  "key38": "3x9JPJsdZgdbBBBJohkXZzNykfLZVSdwfDHcoZXmQA2ZSmdxaMr1kzUT7zaZrz2uPSsSJvgXTM9A7RqyLCu1Mnpb",
  "key39": "3B3LD8CwnHX5ry6hapHKmXhtCapRdt8neuwoukrsz4EjTV5S3qiHtqzsSRVTe6iqL1WJsp92h3zTZi1Zu9G5tqk5",
  "key40": "3xK2fekmzHcjMEFZtdppZfFL86V5pN4nCmMtcETaGFsRLTw4n5iNvEBuxxF3qgrpBrC3o1ZZoogqRsT3svFz8oiY"
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
