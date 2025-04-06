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
    "2b3c2w8jUxQnYy3nFApHvoUxar7z4WVxU7LbWGM8ban8NgiURRDLJDHyWuxrngEgaRoYpDTME5m6eAFSap4qgE1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ce3arALNQjHUtPtyj9D2VSci39iNDwb64TFPTSisorZtXohEAGfGgLD4NpPMKr1GbeJbDKT64SQ6bCWyCbprA55",
  "key1": "vUamqzLLPhMhMaQykv9yuYwEFgNQCvQYpGnxo4TofutCiAt3aPqRgYbx7wV4nmyLEgudeDgnwWqyX6F2Kf96nAA",
  "key2": "3KoVhK1GqtkUUSFPzr9zPjhtY7EENSTbv7Ayd6hePgTnV9WML5Q17tx4xLUhmRSQzLXToPbEZt8fMNJzRakTSatv",
  "key3": "VjMCqYo7z2A8vaakqnthMKr25CoYPz65f9qoCv25FXXwovv1hZZdbop58A3h7nAe3Q9HpdDa7AggxZW4UspjLd3",
  "key4": "4sAq4hxmufL9o6ATUSuSAjvPVDGvJTwVk7Pwr9Dx6iBjfcmJ1siMMMeTJ2oVFCFxYSLsp5sgvMb3cXGsnCJsPenz",
  "key5": "2aLCbehfX8tiiNabqLRAXFXdnYpFbeTYaJJHUDTipoB633PDidAmk9k9zR8Bbr3U33ThmhuE7KLBjBSfFW5ZWBid",
  "key6": "fgw9HmZrSQGQjCkDZZtFSLhgFuyJvcQ34A4rzD6AfAnVYcS52GMKdMkUzxbBrVgWcCY3XaHRC4nojTyuUZ9XyDX",
  "key7": "3h54SxhJrr7Sd8HuaXKeu8G11X9U5nzZH2EivuA8nar9ShjxabQRDRXpQM557Rj21P4QTK6PXLYnBRAaZNGCZMfZ",
  "key8": "44ZGsZYFkQhKeYTXp1xQ4oJ3z9YtynCMuGtJF9yYLL17yS8cuyjTmewT7kNKgSJgkjpxU4zSEAcMQAPCwq6g5W9h",
  "key9": "3E3cHb92DcLEuYbbC42vUeRCGhkXVgCS1b6sXhTPMQQi6EgJ9mhsZBp2EpEmwpTCGptUy8XJoqHxegGKtRyWosDx",
  "key10": "5F21YXofwHSmhTRfiJBLVW82CQJNqTK5Ufug2twwgy6aZkBsQMymbqcumvR5vYNiGjoaEutDWMvgmUxvqtEwN6hW",
  "key11": "4Fo3WCQdakspVHSkEJa5FnKV38bNCP7TYCkGFmfSwn6NXe8RKxiysgEikgNUj5YJeUfCMQ4e97ULMcgY4HVG8U5A",
  "key12": "3T7HiX5g3KjqK57grLVv7eiK93QYkV3iZ1fbaDVRsR5c797qedYDXLfmPSMXBzm1D1h5QMHt7wPZxT3EfDdWMAvQ",
  "key13": "2yF9DrHb4vnMmLwAJj3Bdhk3xb2B9qPvLp8RFcS71aVRh1yhEvNRdc4yntbMVw6AMoLgaTVR3i6z7Ykxp3CL237Y",
  "key14": "5gEKK7FQPATMArbC8RfRwQHTiRTyKsPn4x4P3MhcYm9Fv44sYsDXmECzcmxsZzAPrp2AkM4u7vQMhYJdVUrEcRaj",
  "key15": "21DR5JSxQzjif5MX1n8KbY5PFEWz4xwEnqsJx9A6G73MWp4ihgAbhqMuvnRRYwvQzpbjrwwxjQZXupXkTrL8UQUH",
  "key16": "4UP6rsdqPo7KcFgoznwNZjZGe8bi6SLuj2BAqxuuKFcqoQgtiwzWJo4DXNnzFdK5jNW7f77ccXv5mp3WhTbLEo5p",
  "key17": "3CDwneaAdFfiYcHQLuMCsDNf2rEYMKNVBsrmxPyahfVP5WsizkCoivmoQJKHQy4mHE2sYURN82WCsmKBisQtX56A",
  "key18": "4LhqxusL2wQsfobkxEykGWjMuA8XS5vhjsRTnMm4s18kgJwQQQNUZ5SzWn1ar8dPCiMTH6Hvstc2iABmGDjWqjuX",
  "key19": "2KpLPpnP7Ly8v3WK273LygRTfz2P3umvChq4VRRda5k8Au2LwJFbUSx1BpjVgKa7S9m115V1F6vX4UJtMA1MCPUH",
  "key20": "5s75SvqMU7ibZ67L8XoS1fMxNGSU4gM1aWuk2Qef4W8BuR4cyoLXmHwmViygPpXhCoauBUpuzVg9X2ZjMSQsS11p",
  "key21": "NAqeKBNhx1r8uAtDZsR3bAwCwkKyTFRHRqWT8Vrv94KR5zbJpnoaWEsVek9pNuR2j1HSoQPaDpcvrkcv5Xo6z4c",
  "key22": "2aTVVqTLQk3SAXHDhoNxj1LtAJM9GB5iFT2JvfgQoQ5sFFnaoeLqxdmy6yYdRRZ5AzToPCQwDowLjnT2n13Gx4Yn",
  "key23": "4KU4RTRG9bj6N2AVbvouCKxneuJWvLrCuYB3BvYQRHM5KWSYwgF4XpE7XY6ziPQZ8NGiMhcrK4WW7hgGNqNHLmXT",
  "key24": "4TNKQJ3dbiRpjKKSMTwQt39Q6AEeqNW8GshpH4XwzeX1iXxS4gDUfpDEvetC38ban6dgeXBQZMvwD3SwDAGCPjjy",
  "key25": "4mRGkCegUzVVfpnCMzauVGnRqntjiWFj3Tp2ad5bSaiWmAFeMmMZX7MVCMUMwL8LxxRhTJza626e6J7VwqUjquPb",
  "key26": "2VqxmXQa8knbFhu48ao7uirGrsg3qDjqwFZEDHdd5gG9KbhkxJk69k1GL7FF5575zSZ2CNGjYSLnhfUQ7ubh1NU2",
  "key27": "5P8ZfeNPGsbQfpYfqSXJRz4Y7n6QRNUEYqbYi9wcw518apNZRi17vqseSApCsjNxjoswSLtcadqNxnhffN8ZKKwP",
  "key28": "3Tm1WA1qEVyLzMH8iL3u6suz9NX8dsJBPR7ahS1sRzAVQjfTHMZwsxy9xsknoFsFW2WBzmyfEqks7EUXg4cQDExX",
  "key29": "3WAn3ktB2xucVaThwrfMv9f1sdRx6Kk4m7s3bPRdnxxwCAo9wCswE486N8syv7aFc4dkVfPAiNiaAroPuYy5yVgC",
  "key30": "3ssWYr1QVxd2KvYo4KW2zFLBEpCS6rK4VghRMYYwZwYkbAFGBM77MxtYR6hdX9xaDhJDL7e8WWoLTsh45xKQDtg1",
  "key31": "281xtMrsJTDXYnzwHa5s425EH7XFpsZLseU8BfeENfYSh4d4T1xVZb3t57yAETbKn4xombWSztB1DJ6KgvWM3WRH",
  "key32": "5BC42Y5Z7FjcLfYp6Tnwaqq8kujTqH8jin8sa8gGkm1AAqwj71i5LZNkoaVBs9T59T5KyxwtKP39E5cTJobWQJun",
  "key33": "2XJhG2QdLYzmbgUNa5qsKbBFrFWj9TZk1ofXttyVJN94DqiQtQ2ceYYhZtAtKA7K7NfuWy38xTBiN4Kb9wvpwtNP",
  "key34": "3HEZwg2WfERBXsRa62CvZujxuuChpxfnNhuoowkXnot294zgDWkwHifQgB2YJKKd7UgyJREnjdVjesHWbUiifoJk",
  "key35": "4aLvcVLSmAjzv4yVvgChWdtR56K9x17ehhtnCAvz49XYNTnRp4eiB8btMQ6UMqvHkbVLNg33bcXnzN72hZovrTRs",
  "key36": "3K2ER1HKms55NoYdxzRwvovEdvYmLbVbEtYG3pDxx9DNMcK1yacBkhLEPXtxjeofPvVLPpfZH1SmYAoVxz46qU6i",
  "key37": "3tQArsRsjc3vuQ7ZgQQkJYoK1GSZP6xSLMGudSvrMHYsMPXSPTwV3vztADiNRgzcayPTXkzf8fCrAFrdnajjtzBL",
  "key38": "8sFirm8N5AvKFiNaAuQeMfriQRXT8NznhQB3Cjx9WMrRz6z8dj8E5P3YahfSuF35EeTqYAhTyTe6xZCwd6CTZB7",
  "key39": "4AWND8v7wZKkugRXQnP8dXppgMbfYSz8Q2U2bk4nRUXzaimBDsDzbNZmsUWc29m3voEA9oHi45oL9nJXWKeGY2uG",
  "key40": "5mt4Gic1HyvtSaqN97Yo7ehmNPtHwEyceAGCTkzMEpZtHaq13j2atAinLfqjbk6KSinX5JLTqU1Xy9XeoMUH3iRp",
  "key41": "3o4cESGQ5k7yBizoEUCvuepRk24Kahw4Dt8gZcmrY7qDRtcWC3zYKxUSnJurU5mXHXBT4zohhKMX7wb7wkjj866q",
  "key42": "3ZTxCBWBmDGzjK9XBoWB6hcQoszoRhozB2Lh67Yhd3zEdtZaSNrE29mMrAG8A9KMgpGpcm8MLnKp85BJSoqY8L7W"
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
