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
    "277XNV3zPpotPVUoxkiVCA2HWDVynKs3u1Qt1PvqbWYgfMAeLUYaAV2qXX9vFqixPUBoLPnvvELacW6uP528xWNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n5sbDS4RqGPXEJqAF4uftsoQgDo5ndFsqsVavveSfMLTCz7NUQVhiEokaB1vVM136wwzLNfnEkGAHa93a9i7ryf",
  "key1": "5Px6ar1aP6JDYqUgzzdsVV5Scfe2Fr2ZgWJavppHbN6KoGdoA7c3oxJzjYV1VPQThBT8hRiNrHRut7dVDK7MhqU8",
  "key2": "3MgJT1fSPhrj5qMd698EBaPpcxung3YVRxvbrrK375BUkSQU8heHqYAEoQaNpNG6eEbWbgwnbcByrbinAZ6WnH5P",
  "key3": "3JJngJcQbQhDEfe9UvPSNkZr8TVTbMWpx1GviPsqgABHTWZ4QXX5H5dtmtDUvvY97Hv7EDDPqLf8kg3S3TjFo1NP",
  "key4": "5XzBMRd2Sc8znYRdB7HsXSPqWQp6bhAs56cPNi7m7pTXYPkfk4d2kkyDPLmKmo6wTSbFB63kANDx6qtChrjN4q8s",
  "key5": "3f8pDykXdScPRPWeB4KCo7QRQn3jXUWX1jZ4ZBTkQtyFQubL8vQRGvEU1CPW7NpkjRa9TUpRjmsECw8j1NGKozs",
  "key6": "2BRxgaf7pZx3xGhdRryqw7bfm31oycU635Uwfj5pGKqjczJR1mLphCSGZ3SbaeM6dMmyn7Q3cwLCkGcpBPDfshSy",
  "key7": "2MJ4wtSH1ZKsbB2UbT1BEyq6qfhWJL7BdgnrNM6EsGpoYPU5YHNjB8HAPRzx2PC1Am8r7ax1uyqmnSLdU2kaJtik",
  "key8": "2UPAYra6PEGhVr8rxJ1umtfMvnpjRk6xL1NBAndfTxK1hyF9ysFtao9QtcfbripKPz5BKykGaWxv4wEzD1Jmrgbx",
  "key9": "4reCaJfcnfUamDwqSnHUDRkWiabtf9L1fmVggLKhFeptkdzdo2MSzTMdaucLDRQqFgCRnw9P4pkBB65m12GFVgqZ",
  "key10": "36SSfPnVHSGCbwQMd7rHRnhW6EKkZUYgabtGydcQ3egHfM8ukF1Yu4VyeVXm1rkL8tUCKpxKdypya3yBbX9DX5Gj",
  "key11": "2u2CojAnnEmFra2VABziBjegDXZj8jvTusKNYJgomoPRCRbADXLpDPKf3KSRABuUjK5qJEhwpGPuBUpidKN7o3Kn",
  "key12": "66iLVQkb2n2iCgLWBjJeQmCDxajuy2nyJVSw3Kq4zAfyR9KaTiEYVxg3ArYwFQmzaNuExd8PHq3c6Hn61LDXbTJa",
  "key13": "5gK8c6djiFRTfafjWTiwXUidrdPGJuWJPefMxzcEf5Dmw9xzriGrcCfvodthySa1vVfnRFNbcrGw6pUFqc88ohFf",
  "key14": "2GY462rydyoLBEmgEvR1wXeTbihuHLcGPS3LMfuxhcahDj3wvWUtb5iJFKVUnzzZSSPwawHhC4s28yavvJ4MEyG8",
  "key15": "CBQPwMkWuX8y12rpqRka95kWgG3wwvzb1XJWXHTizyA2eTzcCCvHRQao2cRHDC9cvC2sBfoP31hYgMEzsdxgLp7",
  "key16": "EMtBpCoY8Q93b8XMnSrDqmWjDzMa5F1rduqghhZPa7rFVLdBpyRZpUPvpBwVFgcTsDev6fcPJjbvCjdj28TU5P9",
  "key17": "5UCq8fSMrGNsAQ6ijQzxSJuK21itMxAZxAjkhgzJShJeVooT8A2vGMx9XHsaZh8uw3wXAxBmer5XSkczquGEB4ua",
  "key18": "4dPCemyLYXNekZd6F8XT37ry27y99xAiZ1SALf6oqYUc7eJ5smceVfvDb36j3TnH73UTfSrteHn6XyYBFNHWARCc",
  "key19": "4FJvXpWv5F72qFVf6Zfsi7T5HRtsYCTGMbnfL2FvhPukFq54GGdckAyL2d9fRn7jJ7uewVXqtoJiSFBJ6pjZsayW",
  "key20": "5wrunePJATZ3G14Q2VtC5gyrVdzW6P8FYQ7eWgR5sGeKXBxbwQzDohFby4oSi276BJCH7aASRR66WLKnSGZM1chp",
  "key21": "3WsjaVRma3ZXbykQWWf5ccUkRKh2oAiwnNbzRcf9WC6bkyG7jfCXKLwGkXVA3DhuAJA5sWCba3QuhtZgMB7i6nu4",
  "key22": "5HL7rTjZJav4s2VPHFUDexwwjz18Tn31BnLqEs82xpE2yC1GSDC8ekkJTXXaNnHbWY5txfgfjvF6JZ9MD9N3SM2r",
  "key23": "4CGifF6xND3QGDm1k3PWfaURPv1boUcCvP2v9ireBXZKnyE91ZG9Y9bCoEU8zKcX2EADQePbnBemkdm74zj9Tjkq",
  "key24": "4P7zGjzCqvXZFBwoKaXne8NZ1WgPJBuD9MZBW5rYVihBs4mJhog2FWe25dagj6MAs8N7CKKdVpcTXfCUEwb6tdPr",
  "key25": "3zTDMyCNDRL4NQUaQs2962UR12WYCJfZyNQtqKqHt2w71NisMLWHVWp4GkWDoe1ztUGmr9EFANn9KA5Sry85vv9F",
  "key26": "3qAtE3Fz4sXdyJ7PBX4q9b9WPmue8XZ2Dd6wmQxyQZrBv3NZbHioQXNvNdDs3ZrsjfrAY4bDa7jdUpPF9mKkwRbK",
  "key27": "5prVuDgwqi22R86NDg14RuhJ4D8rbWL3sEbnif479wSs4xMyuPcMwWu3D9nrWFenG29JieETvzvptWU7wHVdx5pn",
  "key28": "3EzCet5VbNQf7eVVxmvbMz7puzQTsgSxNGFgUADNGjdVKQ34F8P7YVfkxJRhf1sG9ukgtGF4MPfaYMfFGGjrNgzW",
  "key29": "5rpNwQQh6ejNwgQF1UskHRcLWMFjxPmfAXvwNnYXiV9krqhgB5DNo8sGvVPaDcHKpmKBUhGQiv75PWxEWdatepUo",
  "key30": "2vn8PZLxz95NV9RBPy9s2JfcqvbTu3r5bGnA5GCd7b2esQgHghEgUuNGeNK5PBAPyzUUdfvmWH2Lj6oR46b2wb7n"
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
