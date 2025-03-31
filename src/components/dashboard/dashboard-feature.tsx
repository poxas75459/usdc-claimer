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
    "557jYgCDwQbosS7SA3qZm2GB7tQVvjHPPKkgt4NjtCm3RePuSYts9GW63vWVTueoSVLVUjxSNVrkwXCdZeyS8euK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7stiU9PrHuFvP6fez5mkjPndpWygRuYoicPM7RennZrEtJkqDerFhU3T68ZD9gyLh5JqsHuZu4tpLwzp1QCCuYe",
  "key1": "YeGjMk5FBPk85KEkvVD38STr6CgJ8okdycaVMk3TiWQLg2mCzKrwrZPkubbbsVTFQc6Wxhe3df41XhFaQTeFPg3",
  "key2": "611iNMYGrRwKkwW9gn2vNNFQogbqpe2EW7MyPp74FwQDQDdrnB19AEorJ34aCNv4xEUBXpX3YPmkqB2FyYaxkdHj",
  "key3": "3DA36inU13BNFafyP42wY4wxgG6b39cEfPRVQECsZ4J3vZo2HhuZHnALWESSQXaP7VXUp6xrqomjW5eauG6DKi4D",
  "key4": "2BdteWn2CB2bmSnsuumAndf4SbHQrYj9SXrVdmWkthj1r4kYV5go15d5NX67LHJyffs1QfEofwpcrBuj9qGEwNHM",
  "key5": "24x4jZPQ5iCXUxuTc4swBJ3nmSpjjqgtDPSXZWSN7bKd2v8ozCXagDBBhTdtXUYcVz8GfJUFW83baY9KhPCwgSBD",
  "key6": "4rBvyMubrxxYubfCHrc138uyH5odhPcHoTnMiVLP2urRNqronnzoaRfxtG6iWor3PCiYvgcTJFfbN9c98BreGxog",
  "key7": "3X5odP375ctGHFJB9hYYqc729iCdKnXr89rByHv93ALsgabZ88ArwRRPmez9HaaZP3yuqoYLBwajmtD5Cu6VwVJY",
  "key8": "BvPF7GiUhtxB3hyotjuvFo1EAPtbtrV4ACPBjcHSjPviZjdFxMNWpT5N9u81FbcDFjFpSi5t1rfgNx8PSLW27Ao",
  "key9": "EpKc2nhR6tRLUDSeSiH7ACvAgPNbu57kvWV3D3BKW2b5W8Yb5HoSXxxSKg3a2CvFRvEU2Rz7qMBL7pMN78NCJ1x",
  "key10": "p7443Tb6CtctCKdZWp57FbNVRWwepDDSvHXRxwsTnEjcLvocp45rocDNVFghevYgybLpJwyrdrfrKdKHzG6yBfT",
  "key11": "25Np8a1Qq8rgRmhadr13gQvCxueeapDUVTNojUysbf1bhmWf99R21PvCvzzs3r5A5RBToUNMQ11wZFJYsqd8dz1F",
  "key12": "ayi2NSw4mqcexpSvaGk5mWxPBP5WbMZjxBKA7wK2MdvJMxpwqgpCr58jsFDLcRNYtb4D54dy6UTCormgL3Sye8F",
  "key13": "62yAnaPgck6y49htkHeKUzhXdnAa5jz5xczBUbKjB311F21GbJ5naNTChPhRGRHWav2VGWuAGVTq9Cnjy4RMd1Sy",
  "key14": "35pftHNLBwSQrpxxHt354v46a8QRRuW1ZqT1ngziKE36BN3FcUt8vQqgQRVPTE7Z4h3xzt4LeFGTR6zB61USPt8E",
  "key15": "3MaDCxXmBzkeWqXLcJJojuXwk8b4vwsvWZc6tmTf7vy6yUGXNeNv1BE81fDa3PhjBzSMEqBjPnYtF74dm8K4cRi6",
  "key16": "5z5depf9h5KnekkMGwJHwqexZRzkAqE9ttoAFKbMdkv8jdMc8cs6CE3cxpRmnwuGAJvjpJWbscVLMukfRNcxo3wH",
  "key17": "2x2NXECGcJeQhK4P28nZ2KWfa5ZQRHHp9b1m5cRw3v19AqPpCf3tMDtX211bH6ZUafqpysJcoY8CtxuQtSvVMYwm",
  "key18": "2oBL9DYEukzYube2NCgnxyruWQjHS8xYhb74qvECB97t6ZUrpeWzXJyvhsnFwzrz5u4nTEPxaFpMXnxN5kF86NKn",
  "key19": "2C2vkyzbRECFkgVbWpswrp6TNYQW288AKs4WXYEtQx7PdhNEAVxeSDcsTLZtGZBV9xCeSenjtGnUGtTR16ZxXjfr",
  "key20": "3jfv2uYWVLUAUwQvGVzzW6YrgPVYtgG2VYp1kCtiH9u1D2NQW9xYCDjfRSrkai2URU5bQfWSbkVAF4DqpcmPAETp",
  "key21": "LgiXeaJovVdZXJpiLwguEdrFTKUcXneM6bKZTwuuaG45oze8SbMoqLkG3mvp332Movva97HXhgzy2YnxuNTLEJQ",
  "key22": "2K1LrK3HDDbWstrjkaZtSPo2pAsa8WQ3HwHPZbVAHX97YkEHVDGnwYutAaJSbhP4oL2UsSDkFy2GRtpdrXDv6xfu",
  "key23": "57qRsLozCdbou9rZdpFLSCEgGi6LDLiQ8na3zYF2h5dt2cb3s84WRPCxzETxJya3YTJ8ngSweVGhErgEgQpuxKnv",
  "key24": "3DZWw1bENrp9SNPSg5Ujt9c5EKupXr8sPAMxWvNk4arZvLpAaFoBRT3CeoVz3VwFYR6VNkJipart21dsQEjbLSbs",
  "key25": "52M1j7ikZ7uXmvhEKrbdFMwpniX9ucoXShTuknw3U3ZTfF29at3r1dRt79pExvgBUQaWSF1D2wyKSJ97bK4AuQLR",
  "key26": "gYSbQSJcy6fTEQksDkZnzrNBNVdTJY3eyxBEEHgahccCR2auomNg7tbfcP2qRULXSKw9Rndmj9Xh7vVkm2Dbd9H",
  "key27": "uMHCKCkA97zL8LnqiEBrd8BLSt9UcsL5efe5QDgNYPo1vfeGZ97FYmbryAsAHJDaaaHmThzodmPQ4eiqhK5wo3u",
  "key28": "4ZgNiZzcMXTBeZ3ibHxtfSM5Hy8zxDCo853bnWxc5VVnwYu7n1mfzCXFzpFEyobcYAV4w77HUwzsDLSCC6toXh54",
  "key29": "FW8RaNY3wd3s1ARJxnYCkKTT8cuuC2gArqqictvVtJwPdSMKqxTc41aA6p7wsqbN31RodXU2JJLZ5oLULGpBucU",
  "key30": "2Z3RGWUq57wgvyDPS6vdNYY5AMdMak3gnxUu1Q88iZA9kixnQE5mNJrwrJjtkPEPSYyS9nrWuDzvrfa2qCyL3QVz",
  "key31": "5sVu3NoDZrsL1oCyYVpMtS8zWYDAzS3MqrMCpuK2uo8XjMebwXJXy4pScjhHXnPVBJmV7PM9tnyXbRnUzb5kQqf3",
  "key32": "4DNNEtFEgAY1ssG2Sj5JpWqT6Dn7jbT3ABd14U6miA1rZJAk2yiknzhWkj48H7yu9oXfAyVTFd8gixJqVd8LZb36",
  "key33": "5qt9BBgp1ARR4TL4Et3kwankLejSnf6xXuuKM7SdLcVq4mDvm8tNTP3XziVTBYzfSwdD4ycDGCqWnKEZoqnyjTQT",
  "key34": "LTmR6y5gNyTPBRXnRxzuMyqbXvthySLphS8ochui6WsYvvVxTUaPjiod3tthtq18BV6EgtbpBLF97pfm8FFXp21",
  "key35": "2QXvLaRUfGP5EQHAGP5rx6wWGpta8nHCRpbeN3DAexpWt3SBcTD26y8GHXqCo9Uc9iPPEXTcqUbNf6x2Q8diWFL9",
  "key36": "4ceLohMZ34FSuwEWTSmTbc4pUVQwwxdw8Zrp6htYA13kPDqcMGvtf1usK8tcpquZLTgfNypxQrHJDy5XGtH6SdGh"
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
