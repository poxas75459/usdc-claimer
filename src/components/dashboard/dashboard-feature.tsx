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
    "21gwNTPRbh6kW6NSjY4d2R449Zm3H66rEfyCPJPybwKmb7irGBoCF1xnv5973KUkpMnyLpiUvkS71G9CdTh6E5DZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2amSdkVbofWDNhMDpRQQThGyPSm4P7Q6JiUAWTGGN5SSmEhZDpWCGReRdjVQFwHp9UWzjb89gvffMtna1wi3TUX2",
  "key1": "5TEyuxBq2V8z875W8N8tTpKBnDA4ahJie4ABWUWPeZqkoJ43vH5yGZFhoFE7mXP4rNRQAAxsQQJnXnvVzyHEQQdf",
  "key2": "4q4mFPy9qdPc6qDvVixqUhSeK77d3f5pBLSPTvZtkMz7nh1GHvGZnUSZmgVdyXVJwkraSKgf27nZxfuA3eCK3D3R",
  "key3": "2P13EEYLjBq9a1nuq4zuRZCoTPrBMwFJtcTL7nwjMZPhVB3h33Dee7hPcKh6r4aXGc7gXfjJxk8hhJ5fg47Cnp2B",
  "key4": "5rFMEim62Gcy4Qd2NQ8mFp3C1nfVAVrtXseAt4H6doMfv1K7qYUYYXKzEwVvTu6DbqB34WixCR4ZeEcAR59DHwxv",
  "key5": "2SvFTpGSukW1koofmnzEVXZ3PREshYGgSdpycnkkFQsk7b1k1BXVYmUsureh673W3Xr5b2Yu59Wrb7QSrvNYqGBD",
  "key6": "5etVuLeVjZNaqoM9LjWJU6rPTRQhSoDD9M7zkKaa7RM2jycrjnrow8guC3LadMahxBeXF3H9WMZhF3x8UR3kSTBb",
  "key7": "4utfi4DNdf6nH4QyxFDjWeEhjW8Vc3gjB4EWQY3NWX942QajYXVbPDJ9z236yJwBGGsDvhbD4uyVFnjmwLjwq5bw",
  "key8": "mfHEzXx3Jf1yCdjpf4noERvaVBessks7ecEFZBGuvQGan97mJ1wMg86fV1AidRha5YfAbEMbTgHF7kYw265F8Gj",
  "key9": "2MNXrn9uF7i2APiZDFeZqLz3whkg8rqSG2oNtp4MPPqsr4f4vKLTTqfBE7zbpmBYX9n6oqZvyNAsVexVPmbs3jCT",
  "key10": "2eikB26DUvTRQjCubwtpS2v1knrSrA7ZW7iKsrcruyczrmrqmUr8mnEpeU6GdmJEUgCn9vFThadvzns8WnXCBaW6",
  "key11": "3LR1EiCQEdZTAbjNXiMANAzaEUXt2z1zhkgM3yrQo45u68qrJxwZR1d9faJbxxzwoEkJjXAGN6oBQ8GPd7iUbddN",
  "key12": "m89F4nokorKK8ADDSTo7CZo1id7RtmWqiYViBN6FpZjMW7yWP8NuVY13iPzbXU4ucxPueV93jB8NLGK1CoF25Vk",
  "key13": "52BGk1h7JiABeTkkiSRsbwGndHYpDx5AL6MeF51zasuQwtJZXRJBeq9phtvUGYdY6c7pWFJDPQc13b64ei2yjAPM",
  "key14": "2vZhuEDU3fih3FJyXW1cuvXo6PnEb9ZtD1Z9hVPUzW89jHg663f27sQXLFZ5FpSYB9a5y8mduQtQzBb3qHPgUb1F",
  "key15": "2rw3HLCmRve7T8BniFX7e984ZMaxvAmr8u8ztbDnyts8KTZ3KZ99oWHrFgU7tBMF3Ydpfom7hULP1apQBrcwhKwo",
  "key16": "4ihurZmfpqfBV2MRXXRG5xx58GKbEjJz4bpCLMisGLPZWJt9NmXE4uvMvuwECWVBXrfeczhExX76X1wgnqZTtcHX",
  "key17": "BSaZoEdtrxuBaVT6bSwgZwHb5GbSRXyzVdTXGeNJYDpjdMnam6fXzcmX8suzZgHi18ba8vBsLvqsmScQKuCT5qT",
  "key18": "Mi3siybe1sYECRMoRTiQCQ5uvi3CmHBERQZmWVY2Qq6Pv2cAjaVErMk9c3pmYktangMEWqpbh6dhnQNX3uFHvzt",
  "key19": "5LNr3tBLzJvfBHGShXCW4bfSz6qnGcdWLPArMAVTn221hX7KvD18aEehzpb9MzaZ7Zu6fDShx23EercKXkro3Qyk",
  "key20": "1NyarbH9wZmm4KjponrbHSMEXmHdCDzHwtmZztrjEjAjaEMUESBmDdATrd1Bedy8BPJuZWoyVRBiXKFTWo4ND2w",
  "key21": "4Mc6JqZRsKeiibSfDcPs3avzRyka5Zn9P7Ux1yJUBVosWEMt68adMyknUSX988U2anrojMNYEoSwZY3cKvFQCnZQ",
  "key22": "2hCxALRz5wGRELtNrz5iu6XJmudMqueiAdFYaP9iFxpL5D2hLyYDocXZAudSVTznrxjeaFnwEgkDM1ot89sT2EuE",
  "key23": "63GpFwyh5Vpgfht4yL2JUaNgrLsmPDhxJgcSHRVkhFVTHFS6M1ULcHYoo4dAiSwdeb4R5hLwxMkdxC8Nw51nwcDp",
  "key24": "8Qb7y2NBT4zN9vYq22phgDvBLjo9koUBD67xaDPjegfmvYAZcvYA7DxRDSqvwNkyWGKomYgGvbj8yeWiHQ3JzZU",
  "key25": "5PdiFeq9JWre3htPVqBBiv51BgjLonrQTtYN2zCz54LMfVyFTskLDkibvyc2Xa58wfmzX4JPeDaTQDNGhF6Kh12Z",
  "key26": "63dr4gmQ6dYDJ9fM8GhX7wdWZ9YxZye2zZtLpxFuiKaB4UqNELywBx3XdEQadxQuFYzu6boD3dYeLoSuUz62waz4",
  "key27": "RQtyNaW9AHvcLgvPqchc5hGqn7fcn2sdCtzcvG3jmAgThXyP9S6Bn9CpEVnKTicA5FkJXcVNTN9SKSXFDofrb7t",
  "key28": "5b9vZoH6HEM1eFbM7KDNsjeyLGgcBZV5gpMoeit3bdcW1GXiGwdeW3ep4Lfs6iEmYCZcTRSSKjMHiXconJzpuXHo",
  "key29": "5eLaPTn1cejtuEosiULcKq3s6E4sDCxZBASziHKAHL6Je8fYEP1aLRtp76qaGmWjREc4onw3B9DE8QGbsvCbfb9a",
  "key30": "5F8tPqAKNLnCS8WH6BfHd3BjaHaNBKV9m5Xm3kuK8iKjSZHAKewdeUDziNfsjmqmgKxnMXwZ7t7T42EFwo9dyQXP",
  "key31": "BHrBuwTxxpvSdyR7rDHwJzNA1R3cz9z9AHRAXadZaKfBq9ydbS2jT1ggwRZ2riLXtXvMD2Soj1BnVkzLS92y9QR",
  "key32": "5XdzxgJFfDh5ikPix2PavHKcmxnhZTZkmyabShhbXNiWwRFyhnXY8itbzq2SGtDS7RwZRHZd6P8x8zfYUmJEU9Hq",
  "key33": "29N6dV9qxxe1GYAtvi9Es7jZa4sChohsQ8peWt98qAwtbDpqXhxmYSTB695MmCyeWD35MhXd8WqCbxFkQ7suCbNP",
  "key34": "2NwLy4jDkWw5vuY3nw9ax535j6XiKUMERnuLVn9SwmbmTEucBGW1AvyJ5qvhBSPhvWWnbJ9RrnxdDxnexfxLcHfk",
  "key35": "5DdYtau6fmBAMW1f67sqrpNUE6mLCsqbgrvRFQ2A1ps5xEoy8JoLUBtpo3id3dSGGQjyWEL2kcGrcia2ip691eRE",
  "key36": "2KJoD1DVF37uEMmQS1U3dAonU2iqRz3iYLgdWjXGfGrYR1BJhif4wWQH8Yxv3VVHEoydg9DdSbCFF7kjziofoqVg"
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
