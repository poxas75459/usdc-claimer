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
    "3HnHHgTR94At7r1k9DPivDiMU2e8Sp33FScp6JziYNKh6r97E8kihxE9sXCGrQCy28R8rJ15yd6ienJBtyqzeoYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KeSyVGXsbDjA6sQCurGtvFt8y97X11EPVQ1y6oRN85jEcbWg9oAd7FCtoZ35CnvcSALvPQc4s4tySvTNZ3fUVu",
  "key1": "d82fDZnQR7D6c848QUkmDKzbPkKiB3K1dYpbcdGzVKcN4utcJyHXNAE87ZVzBnnmJ2bhGoWT5n9gFobh6Las2y9",
  "key2": "2trz6nN6ydBPuth3zRSpU1cY1RoApMDxXJdYXYGLb1DovhWrVr68AFM9ageZMpywfEZo7PZVtzxCgjNRk5Ri5Tfv",
  "key3": "2jy4J5omG1zVM9Fc46KugBNc3cf69RPucZwtKJNmRfg6Ffu5xbwBNjBAfJDvPmGzvHYrGXyFUejVqYBsWUYVgcab",
  "key4": "4JZMKSDZnwtSYtL9ZHENuudRvYFQ9TXmLyempvynDxWTpH2p1G997YqXUVAvcitsV9MxH4EkjEuHKwgvYkCVtgKz",
  "key5": "2YvKK4CGbngfyQAyL7wyHSV6LFnD4MEHkXLGW1ypsCLv5NSnZNTKEj31UdPeugjjpJPihBTTLHuBnSfA3Gr66kc2",
  "key6": "2RGEZDXr24DoKspyBvCxXFPqukEdfs9DPTjomQ8d6iPbp9iDrcJGaxBUPWur6HSKihTbKFUCeLFn81b9MKXUMFJa",
  "key7": "Nv9hfKkvDhiMSanmRL7qgiMxrvGY85iuzC8NFtFtWTaSRQv86pSqZq22ZhLcTYW2tm6HhAp8RNH2GK9jDRH9Sim",
  "key8": "2WS1MjdFXSSe8u2iaYobrXJanHE4cPt41xsZtNWygRoMgsC1zq7kviaprqD9AEAK9VuQP4aRvy65WgpkN8HAncFd",
  "key9": "2Fy1sU1QhwhwzExpjMDjYnmYazWuWhNGNGdYUBJTocRNW9TyFByXLLTyfyoczYruyg6NPiwDJsw4LcJXEdraQ8yK",
  "key10": "3xrLLJM3BXi1kjfwA9Q32mm5voGAYvgABPCQG1bbMb6yR5TdxiDTmC8sEXeHHY11wDYaXozmsUesXdeKPvQDeSx2",
  "key11": "5gge9Wr12ZcBf1VT34tsLX3FQg7J7VSFKrCtEcVp878dNuCfpfDDm2YuvMb7YFgNiWDfzRLCLF6wWrZUmLVqCPDV",
  "key12": "RLgSWnZhWRt1Wm2GMQC3uNBvDgzc7G5VPSRxgQkzUChQHv9JUgmWANtvmbyPjkQ1KSuQnLR4Jnx943ZSsapt7y8",
  "key13": "2K8iN2meS66zmKFvX1nAa7Y2LRhcsyUY6E6SyVY9MzhfxYSQFkZ8UUYRMPEwQUVmZFutp4gNuJdp2fLVJm4zUXZT",
  "key14": "43KSzBUQVLVhWR4cRnS9iZwFHTbH2YaSUp27rzQTDzUhR2g6ShzDFUeQEcu61cJoNUS13TSbcUKfvpD3gaK4KUyK",
  "key15": "5kKYDZkFJoDizy8EF5zt54ShXnh4fpMkz3FgfNqXUnzni1ZvezRVpoEbjmASRR9M13ANWot8ccMYYVZnfQTRdtRF",
  "key16": "4LYY3d2TuKG4jLce3GTzW7ApGWfdJDtzZa3qkeaiZRDE8qoaPB9GF5owghFj6wgrEsy68DFQZeJs3UcTG7E2KLiG",
  "key17": "5dz95CkLeNb5PGFBeRaepiXfSNcBdRpPBi3fi8tBjsE2qi4YCH7iTFmcXgFbyV44MuUE6zBpNwLAH6cb7hbYVRxH",
  "key18": "4gMQjhvBNhkFqmVemNKaJaTHpA47WUpDpAvAdWJBAQQgFuVycCKGbQjgJNZ4bGoMte5ZsJxiPqbuBLfpqVH2Cgog",
  "key19": "3ffPucGENevssYCZvbGBL1xvmi2p1nm1yBLigkSN3mXGeUdEMCtV3g7MfmTGDvtLBmgUp1N6afq5949nk92YPynJ",
  "key20": "2WWhTAzNtyyxvAX33VUXYDNCpQLmJ6S6MYuPeHD9kjZxENndVqBWguNyK16kWnVZt6TCJcqsE5scFisPvxAgkmau",
  "key21": "5erBUNwVNi69xR27zPeLUdzry9oA9j67yvYYCe1mTE17WJ5Uc8WkS92HeCBUjuareRDV1BR3HUeJY63WypEetxhb",
  "key22": "5j3KjAas2wePbc7Vfjf5p1jkENNG4A6fRKWNc9MDTnq3icxsG5Z9ujw1nwrhFGB1JuQXgpDqSyM4A8zFvcxR7XmQ",
  "key23": "5gRQ5VB5R3RKUrFzG8Hguz8vojW9QaM9XpVMW4XhHytJD3vjGJ8q5oEBUTn4PKSGTB9PGbfP3QdnZo4XiW6AWXim",
  "key24": "pLqdeMYkS5gmtdanda2dd2UDtXerdu6dhvdVcHPLZAwQSsgf8vuduzW2ZWfh9F3XxTmes3D93aiN4L6GmLkbnNa",
  "key25": "ED3CDfRvET9jimW7BzUvdaU8n1acEKQy21T8YTkuoMZ9yiqt7c9BFaWcx7kqDxgmsMmTdPjJrU1DbwQsp6ays3i",
  "key26": "pRW1mHSZ71wXzb3UXBYdmNaCJMPfKnCNtJngKrSNHeD7SqmJPqWqXymsbqcwSKE9rJKXjuauriyb8yzXdxCxGYA",
  "key27": "2DEggLCeeZMvuw6PPhHye4BMErfTL6MTkYofWdJPnGq4pdwBipobYpGWGSSqcU7ZghFj9ng6yhzeVWBTL3KYV9MY",
  "key28": "5qhiZLiDY9Lk8nnGQKrw1zDB1DdLDbyCpnyJ3iFp8m4syN9oEUj4JxYdbTGWD2XjGSCnGMcFkB3vYu11AU9t1J35",
  "key29": "2sjcDL2hnHzNn9mwRDsHmCuaUAwsjZ3mTFVUR16nWzbxFp3Hev6JbopyKJxufoP3p3hsYnPHnETYMUmgjJ1yLTdi",
  "key30": "5mztpjLwEKvqbtZxH9H7W9tjajzoiTccB2XVDe3vgjYsdHPCvw1NNfaac1w1KMc5BYBmnnrhqdzxrAmK74AzUf6S",
  "key31": "5SLQELpmbeUgpRPaByWh2oZ9ssLVBGMXAurpgNUxy1j46hrEosXtV2RyKkKhER2bMdE2TW9EE1H5VRs6bUoNMEDm",
  "key32": "2ddapkEJAAd7WS7YGmARMm4eKwhxW2ik84AEyHVio3xuvV8udZgX9xVPJskWXaXHwyv27XfmioYzi4ca19zhBEM7",
  "key33": "3hQAj4msPJaoH4eAhbVMVc2sJfxb1Q6ZHY7mhGyS8cRgvT9C6kjeryZ4Xio7i9q3F1dkQ5FuT734GR8P6somqquh",
  "key34": "JXSvTAJRxNGvFZWaAuD8MJi2qDNDLBn1PVaZRsLaWtmBkaSQaRN7aQ2UdSJ5UCLCcQxNz6WKiaE14KucKaRuGTC"
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
