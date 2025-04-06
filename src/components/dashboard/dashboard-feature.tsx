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
    "2d3JzGPWiiWRRFdkGYyCB2wKQ2EP9kUfDrMiv9FKeDNwqBniv9uJbuByCea7vR6QtwP2YFDPScJd36cUtbKzXK3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ViiTECrHybv1BNKnWqVR63CXskEAVBRBwKVoFkivZ5U5T7PWzH5MmQdJvmJFATC9NNcnpqX7oNLQ5ve7zYRcggH",
  "key1": "SBdveAMrJTKtVSETiKLCyiqb23VLoCtc1svgCxpdbZbFAtBvpouu1eMPSiZ7gbB9wSHGUvNeEcy3zaUw5L9NTgX",
  "key2": "5jA6sYQYvFS9aoXy9EuD74W5oR766MPfVyq2uay45jdcg4beyf16g7thTn4cvsE5b3QnocMEDiL5eMD3Wgc7ENpL",
  "key3": "5vDWoWoyw9N2oEYqT9qS9cdN8T3g14WLpUFAmA9pDtii7oAMRQCSfV55JRHHPMPWwa4ohNpMWpTGVdXcVNEpxqs9",
  "key4": "3N82hLKAMzNGv5yU2n2PWz5YU48QFRHPiC382n8sGJnAcYGGvLg6ZJNw1dTFUFQgGF2hkhSRAdo3E8FVH9S2YJpg",
  "key5": "4recZyN79PLfJE2772hvwUiCBrxRWnag12BcQJ2D9JbpMfRw8uSDtV67qqythxaHWNFJemf5Za4QQcj29aMULsbZ",
  "key6": "5ReP5yi2tgrCFnCZrN2v9DremiN1iHBPxU6Wcz1Lhjskn6ei7B56Wet74k84T9BkNi2ZW9hBSxMikAY6Ti7Hwrbu",
  "key7": "MKxqCZQmR4jNTkjBfQ572dZfA55t3feW7f5vzc3ZU4UipBUQZuhPyTAv78npPj194jAfEYhzxcWWVxP8GGwVXKh",
  "key8": "5hiFSX4MpWFYqHmZK9V3TXf78doomB4fi3S9THUkvitbTYUAdLEta1tVrqwogKofKZ1mJAbUDK3KqfKHCtdeDKY8",
  "key9": "4MXgMF9MkXY7pmFHPYN3NACdFQi6mi1YEccDKDxYoRLt6mC4SJPXP5F1qfJHcMWaWVjsrSDLnxnMiCGUTSwdhvpU",
  "key10": "LbyqzmAQuJrqBJQDb3b7hgJS6qDdTM3hrStEgMoGkFKpSKArRcD36Y7tjEuWMGQiiRCSzvFQDLyGQRAYoGDhZoP",
  "key11": "5ZB1iu3rV6zRfRfnMKHbtS6jASAdat9CAhV395osvd7UGagrZABw9tQ7oXNa8dcaspebMTVgGQSVYRR1JJtukvBh",
  "key12": "4vV4Th5Ra7i3iJr7NgjxzvbLGuyubseLLcdMYGm9NmprRN7vadmcMKZpqTcFp88r8dshAdMbDTWLZ8zbvqb5TXFg",
  "key13": "4Roj9i5aWeCkaVqEJjPX6GgJ74L5ZBb6DphENC1aFDNhUBUExaj2UwW1PGFRS8j2MBoQ6wQb41JeGugefnurSwmr",
  "key14": "3677K4twmvWUjwURuLv5HmRSq8UcdFTCHYQTsywS6QGQY6mLHZuBKbSacqmHndzmLevZG3UF2GFgZNmxkXMaQVaT",
  "key15": "439y145hNwgLMt2JdXyKtJCgx3fTQDWDyQSb7b2a7tSZi7TWhtQFo7neoSvJp9QDMjPJ2wvAEu3DDMtSUxo4MTqw",
  "key16": "67pdNUrg67SD2X87K93xhTvUXy7Xzvxst3RUsKkEZxutwZmjQF1ycituHzhuVR9xhCsovhc5zrixoijFuNrQZ2Xb",
  "key17": "5K47hkDniWTEV39syBj59SmUa94f72vNy9qMyVyWVsB7cMW9Ywqx7S4FdmEeXgwsYQBzjL3w6z2HbP8gYWnq9fej",
  "key18": "2PZrsPrT9B4x3Nn6kKzJGZqFxpTmepuNKwzEHwPQc659UDtBfcU9ggYvMhTXDpBRLfSeSokwDW1CFxAioC8pv9uF",
  "key19": "5kiuXRxAd2CdvZY6T6bEoVS6cCH8Xfu4un71srz9ieMAufdD7tvTRSbffZtqbhehoXzorUvWkkgwwZGkYMxqXqKe",
  "key20": "4vwEhwYX9aUMabygMnSpBWuVG2UsWYpttQYZWddshxNrrZ2WZU1xca4UTxTQpYV5K3q1Nzq9CxA9CvQhtVGtPqio",
  "key21": "3YHHPvW4AnWscD2x4Tp1i5BbBbRn1awAdiKdaGhc5avr8iaxnmmNhxkQXcnZt7My5d7eiwa5N7VPEFsPbS5xJYBb",
  "key22": "3yhAmrxcCJ2jet2rnsbin4JSkG3brZey2S2JmesgtR8fXqwein1SygjHb87DzYax1j3JKaKafgRPdwf9E9FkQ5iv",
  "key23": "2a1cSLF2WQd1cCnF7rdH9Fq9j7bKaMGZkpAoFdnRTgmn3bxu7S3XutLqTebbU2dmS2cbsaEhAo6caGoxJKMLnS3K",
  "key24": "5KFj1ZgD3KZCprTDfdH4ixRVVCHZWfMKSsvmoB4VNNw77CP3cud3ftSvbm8ZHCneiw1fXv5JH5VVTx8mRekZTeRu",
  "key25": "4q8mW4kryV5ZhhF2n2AQaSNtze4KMZMVLv9eNf5aWoTF1oTNNJt9vdaABrDSHeWnCGSCprFKsBCK38jaH6gtSgAR",
  "key26": "3hajPWMDA6BNCCkBY82DbxKu9vtvdfegJ8k3upFfEmKvA9Y1EaeWK7xP86kj5F2MokLhqK4Z2pbZdM9zU5PYVmZp",
  "key27": "28BnNQuL8Qbjepgig7sR2Pp6H3STNVqPjp2Ywd3um2Q9P7dX5ouFkJdE3ZsydpGwa8GaLgjKToxq1FYFk5Gc8kHy",
  "key28": "2TZPoNMNwgYZzD2GYLSK12XYguV8pznk5U4UqXJbQWeggxEVdX5ggJ7wKgE6GmtNzQjPXA8T56TV9fPL7rVD7J8R",
  "key29": "PzkPyxxVP882RVfq3eDjGgECLruTYUtSQj2JH5ZkFvLP2vQg8fjJsEQ9J3NCKiaz4PgNydp6jWU4bpKgqTC5vmk",
  "key30": "2U9TyZ9NpowfbxWVpBnVtfMVJbZpfDsExoawGoNbpNUbEjnHi4FGapWAiwgV2CkCKRLUFU3dyfDdgEBKEGzK4AFH",
  "key31": "56pKqnE32T9ppjAkv4o1XtKHnzxyRhKo97rxM24aUGffqB7x95Ya4r23mRUT7XCLxMEKWZ5UxbAt841gsjonGvTp",
  "key32": "5q4TJqAptAzmuWTskR7agoTBqkWipJ3ruv1ctjM9ZBKQGw8ENb3VAf33qB9rnq8JdSzdmmHpW2pUaiaNYPHStHEB",
  "key33": "2V9f6vBtqXuw1P5hW6aFQksJ9DGAacVHaWz4mLjZWMii2ZLQyxaFqgUumnj1f8vyUaGTeXy8F4CHHRCwh56sPiHx",
  "key34": "2gEXEzopoDXrCkRHHWcURrHaxdg8pgJH8WaxA1eFoeeHR77Gc9uxhNz9LtqTiwUhCPPrMFuDRqKqe8PabDBk66XH",
  "key35": "3cXXRE7WN1kDkhSfRTaHj48pd9Yba3xvFgrGnhDu72frP1CpUBhX7otEc5CQpWWavKKPhQnegvRrEGY9VnL7brfL",
  "key36": "5LCCdPcgLVvzNjnqiNcQpiY3dxHMQvHJiU4obr5Q9o4qTP5n8HGYboRWjASdynKk8RssZXV4b36boyVzr1WNARai",
  "key37": "5DuV5F8BCo3u8r4ptKbS6mzoUFVgSH2iu5jSERCMrEHjDZM9HCF3bbngeBpg3c7UNFCmLqymALyNExacxooutFXY",
  "key38": "4L5dHLXJwYN1d1ZQ1M2bwXHEMHv56xV32cLNheWYzL3Gi3ZrKjQvUBBQ3xA81sh6VqmVg9xRJAcfxbaFtKYR4aSN"
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
