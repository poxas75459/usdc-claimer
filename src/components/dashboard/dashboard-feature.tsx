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
    "2e7uB2vyEp831345LUBu8Fozkt1N3UYPopKMjf8fVPqGmExJH7ETz2FSQ2ZMKwepd84ewUXqkDqLJs9Y7SYuRUCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UeckbCh9yFdkafQYURzwvQoAjHGoMRFWUYcgRJ7XHQwwABp2rqVwVfrAep7gwM4UMo9GqX9v6cSYS9N8ceQy9Af",
  "key1": "2amFcqtTeD8N8LVMT3VUiMGM2g8w39h2yfFZhP2VUvmh8T87pWqMiV9qzYvFfpeEhhEEfJCVHWE1fx1S6cTg7yNF",
  "key2": "41f5TctpHYtKNjWVudf9PyankpDtVUhS4z2mjZwjhv3r23XARKkNwnVULb5SzVUivjNyTb7RiKaCzMdihE7cVoPR",
  "key3": "5f4RqLSpdZBTkiAfwY6WiS4chXeFHMRGHEE72CMbJ3up99oQGVb6uf8Awptmg3o7boUBWCuWvKTi68eBTKR6iEyT",
  "key4": "3AAsdKsR8eT8Ctt8Tp4APkobZyJoE4dFKgGGVE7hW1Yz3oy1qypq39ZRW9TQJYZvd4zAbWGCz1uzDqu1P4YZa5cz",
  "key5": "4UEuRBN6hWzbpfeAn92dEkERNzYtSnfYmi2k4u3DTbffhQQUPEoXmTX6VWm676ioXMyzWZFEYV8dokWyjYGBKL5f",
  "key6": "zG7ZqExnqS8QVcrEa7by6Y2r1ygusLHm55ucg7gRJw1en4yrWLkq3Df28i9uUd2vX3di1DBjSDgDNvms2qccdzo",
  "key7": "Aot8uzJsMyZZWZprrNMtFE1Ep5uFCBBuZPdpLx9uiF23qir5qfink5FfssR2uv27UJU3mRpBaVVvLoybBKkURWd",
  "key8": "5FVcyoGfRFS5na9wR9cxgUFmcLPVB6gK9UuLrdKcgxjdkzkNWJWFFQa2iRVvHtDaMasBMJAY8VNsjgUhnKyZPK9T",
  "key9": "2hZ87g8ry987sBe297houKwY3xrkEHMd5p1Y56DbDcMxFdE4fnsS2XiwnsHFmaEPW1npu4kArMLFWatEhtJe5eGs",
  "key10": "2sKfjAfahYqSDx3Sg6F8L3zNgmY1wvyDuXsCgh5J9gv4EsSwSAc2oYFDVoobKtd7RPU2aA8ZwjEtE33bbjn6Y7gs",
  "key11": "2VN38XJzmpRxSxQKY9yHMoV9jfPfxr44d9KAZx1s3aunyxG6GgtdMQ6tJmvxb3ELqevAe6nQduhSm6hxJdnhmGHd",
  "key12": "5y8u8GCaZaoRM8cP49a1Z24oqGNASoTiSzL6R79M4LmoPbhJjQb2ytmHhEtxg6dSLDGt4zoe1wgjpoL8PWopd97h",
  "key13": "3uEztQcNB7K2PTQkiNCz27sHnhuagNAfKnHrHDRCCmJ842ySLKivyYLcgD1hq4H31PgLifnCh32Nbq1JRULXhr8S",
  "key14": "338yhNy5z7kh7zC8A3N27NVB4xvhevKjek4k1Y6YP3ZKxCxF3dBtXzzr18YLpedSZicU6igTrVGeCxNbWLLVEQah",
  "key15": "3CndJeHvzkNukkbPtCA1G5fVpq7jiXYpVfat4RYo9UpQLeMGG5umjgvYgLQXBfgmpnMPzDGLYpvn7vH2pxVh36ux",
  "key16": "5HRi9EDUz6ix5efV715VzVdRxFcDT5TGVyTFcBAnxr4Gny2VYpFztCHYegJsWsHmLVMaUFrKp28F9CM6D2gJTMtg",
  "key17": "n6p7dQEXo4XkMLNwZyvfToVtCaCoJyyAhBVDThhUWabWL2Dc2ZLphBcdXPuNeu1yung7S2u5ZYvEqKrrcnzm9iU",
  "key18": "4NsD1FJAsKs285rmaCocrWi6HX3aJDjpTA9s8oYGajJ1box9UQqrvzFhVuty4CTHjpwBixTovFzk7k4nxwf5t5jz",
  "key19": "3a2CLxm6Jo73zSrVfQLqGQoZ4hPuYMsrAshAksDiB4jZSkrqaGtx562HUW3DKhBSLdayj1nPhyrUPB3uXQ1g64a4",
  "key20": "41TLGUZ8eG6jamdtQJtLPNrjgijG9h4MA6ULoWPCzbikRXLgiGd83B1pQeNC5yjp1gcSS3yYUASfdTLuhfy3N4xq",
  "key21": "4A9k9qBTh8HEXuhCLV67QVfzNJCWP8gutiobFPWh8CLapqTG5y6rJ1fSnZmZszBiMKYpE5xKJvcEvzCKjDCyTrMX",
  "key22": "5peHvvx2MbUSoF3L1DiR5BhyaoNxEQne97d3XSZsc95ozv9g4oUrkdaNrkzWhF3QYjFxSBw2NFQk9kas6aGKC7kv",
  "key23": "myfxtsmgDfgLjk3s7aqMCCr8b3hy7YHbjM6w5ZDfbzcFeqc7D4WLuDrGnEapnWmPZ6uvbBuPPmpigy3C3Lpru4H",
  "key24": "CdaCTuXUwUXvRjXviFCza6iqGcN1GJ2uUQqVv1Rrkm9yxDK414kH1DYEDsN41PUC1qTkhwncq5rnHQebap8JxPC",
  "key25": "4vgzVTmeBUwWeGKBH1E3j3hZmqFKDzsHoijfRYsvXzEgVyUKR9rnrLXYeoaERYn1fZKZDH3vpveSPm1cgZsV6qeK",
  "key26": "3knr2Y5WTp8cjKG6wkj1zLUGnY6T9aR73rGsaFaX3byiboN3VEryZXwE7EyA2bs9HagLXSntdP9kZUChKbhgX99j",
  "key27": "3V27RBUH3Nwt5TSBSjbvebjBmwTDWkJVDAUtpqkC4Gzv7LiUxhew3MgDGPgJsSxwxQ8eHMG9iWMwVkZBgm3utNNT",
  "key28": "4fAtYsKMF8GZRvEpuGDkhT4wJJ3T2B2h6eSpHH2WpJgeFePx25hFksyG6YjRyyaXcnt3gE6X9g7V2nQbMmENnpD4",
  "key29": "4T4UeN8NEBU1WvKEjEqcsv361jyTC3FPSLXmUm2HDVHGfTDK8td1pYZNACMgYwUR5nz7GPhxBqzpQ1xPhbQYRDF5",
  "key30": "3C1dDCv3njZC4P3wkZbBNMKWnhfEysYuJFmphdPRkPkHmS3aFL5ENPfV5yye3m8RSZQBnX6GTHPwXSqS6s57ws2S",
  "key31": "2aiiDyg4GMxmS7qwXcAMAsN3tSN6o4VmJ6TMiRJqv29wPrk63eq4ASF8Bqq6FdgkYhNYimWERxSpgoUv4xWnib2P",
  "key32": "2kqnT2AFVP9pV9HL6azYjNZStPynBiLQjEctjfCqzTGb4ybcqy4b97TuXVXRgjd5f5FLpwcdQvzdi8F4P4RpibHh",
  "key33": "R1mVoT6x7GtNCkVSXcZ6xK2FpfJzpQFi15sVo9rLEAupbv6ts81uAyyhoXPLzVRU8Tuu1R1rQmFYX9asxio7E9K",
  "key34": "7EURZe364Wbr3YMBYmY77AUMdFH7woc9dQKcrANCZHgEuXQMuavAptQ4gVe4KkturgficvBJmAGodj9dLZiaMLQ",
  "key35": "3UTc88dbVwgJjw9gjdLUVhwqhmxg6qr2GRQVSR6HafRC8kU2PEk1jNw6yxThJ521BhMo1BYZdcPHmw1xQMKeAcDb"
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
