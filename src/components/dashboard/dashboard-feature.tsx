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
    "5WVsLZm1JncS1ibWTXW6NKncTeZ3HnRDti5qEsPdy5G1PtiZ3VCF3hvk5312g1jvvfGqsRQyWZ9WtPGYWjHkMbpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23W4Rye1XTmLEVyeKPGoeRz4ej2Krprgjp9gbVVksoUsbrm6N19vjGgJDCoGyFtZ4gLagn8LdjR7swFfVGmaWB5S",
  "key1": "3MDp15Yvs7pG11myPcTYTqngoTptbb4QC2AkTb49feLdbLiwrfUbUpEPXhfCSXt5WCqQFwzmhNdSRADSkAzwp4Hp",
  "key2": "qpFtQUwhxPH9QGMhSvN7R8BHFmPEYhUDaCkjEqzaAKC5UNPyfWQj14HTxYos9m2hS993sNEqz2LjpDgA2u1rYFf",
  "key3": "2rxtocHtfmcgMz94Y37TjBpZKYA8Jk7Lthqi9qK4cec8hNkFo5SsRJJTWzhNk3inqbBip43HANXC9VNd5Sxd8S8w",
  "key4": "MAbmq5KACs1ZQ957Ng73gVaAdZh1d88kU9sAHSAxjujwNYAsDnJ6o9GjBRUvSDCmFsQUELM73B7SvjTrRYApbmU",
  "key5": "4v5Db8dACQT95qBGbA8esLzuQMvNTKn7r51igwvwck2QEthnVduem1wEEqY1PsJ3tosdjfmZwWwGA5YvbKwz8UsJ",
  "key6": "2Yy6bqeNQtBjHAmceEwSc2wfsuxcbcvQewroxKFhec4JeBEMHTHXDmTMAhB82wdn6msKe6mQZHKrPTRAHUDwF8tL",
  "key7": "rZxbAcJstLDXfxRRiwUPxPJm3ieDoYXPTjBorwKqamPLL61J2shbRUEWEzynwDNeziGHodooW5yPz9HK8u9ZDJ6",
  "key8": "5hp1YGRCPqifrCc7mt1fz6Y66CDZuXN92DLtjMS3shGQNM15sEuyL3hRWN1SF274BwWKLhyCbV4xXt15UZxBAYHq",
  "key9": "5t7C7WK5MHW61fnpNbiQawUnPoNKhuvDgNNYEH2gMQjB6U6KBqbRZHaWBTfiGPFgRXjnBQ8ecLViPtvzchzXJR1D",
  "key10": "4NYkAc9zG8Vx8niPPQfyJ5ny5u966Gb1VboLRDRGF5Fgb9zDgW9tMB5R4iL9A5CycVR1CxqLeDL7aDk5mDvVY7hE",
  "key11": "4jsPmSVbTLHwwtbG4J5yaZpXjCFncxRtnRntXF1tpQyWTFhHSyQCUGNBh2Lh8ye6bBWeFYpTsnK61saQP5R2iFAF",
  "key12": "5v65D6rCQTbsxFsQoYuDF6Laj56NQAeuFPi96VNoUacMyJjs5b48xuyGuoUhB36BtK9rHUaRNzXfitdLnDdduy6b",
  "key13": "BuWnZoTmc7roTfDkGjm8wGBsy6QJVCvHxwmMEiQnFn15ACmK45rAv9r2AH6iKtXX8FUy6CSgi5aNYMrgULnTqfV",
  "key14": "3Rp9ERca9hzgdDMX9urHtC8txkQ5QszH1o4FZzH2kiHq5Hw8ed6YyStjqTJjYBQLePcBkDmGCjjBT7fjdyVRE6SE",
  "key15": "SePYK31wF2xjBtVUFL2gCWQ6FVkL8htECn5iq2GWPifEpjAB8ysNz4oAx6suDToNdGikj8vxPfbawVL93hdPcvc",
  "key16": "3j1NmnB2N6famAYNYBqj6T4q94v4awFNj7Y7rhmnDTvYVo65LY4Fo13eYEwaUbZHTr96JVx5fHMkqA81GNBzymfv",
  "key17": "54XWMAbgQMyKJpiDBkDdesN2KX1idtR1LTv6dwtEe6B4TNwpiCFtVEXzw8ka5RXks3tuwYUKx2Qd1TB2dfCcZe77",
  "key18": "4U7LLNqdEvW8CyGwxUuTG2Xr6PuHbSVY9fW9puBAMA2AfiQba5iYGWhXNHURsVsZtTN89cTKHUjvp7Y1CykEVmyU",
  "key19": "4XbxE3czMQUCrj55bVXXXjTEGUWhDa2NsLpHbgxeEZvsiXhCdpCUMKEmxt3YmSrcByHA5KTHt8EGj9MyjQMbvr8K",
  "key20": "4xWPkFmAVhQZuXuXgE5BN3xgc9mu94FWUvDWen5ZaCaqLfKSxjVN1QRu6svQrP7mH5sDj93HPz35zzeJTLUVVLKY",
  "key21": "5ZoAigbMfE6YHtZhZ2SggDkRUBBJyeJgB2cWf2gAh136qMNH4ZyCMDDyqr38TA1VFm5FUQbofj5LtQPY4JTtJ8Ke",
  "key22": "3qZNSncxfCfs1nx1CDmVhRjazQkDVJSZD8r1hohHPwKQTGLX497zZQuE7Y2qLS8b7GBdp5WtX4pp6Msju6ghKaib",
  "key23": "5j2uyyFsw1CFwJNt6VLWYMWWDR9DX8kC9whN74rMTusknjHUyeqaRkqMax9qy681kvDSzGsheZm1L39NePCrBMYs",
  "key24": "287U6MCARrjB4ekyZHvk9rJzivCNkVJ7qcj9n8CoPCmJUgBc1AGszcq8JFQU4NbZrosMgr8528FLGVpDn6ijYVvZ",
  "key25": "3czCArMaTynw823SmPSnBWFweGeq6PUmGTDjebwr63twAyDhuWdvzPfeDSH35PPkeBmZwgw8JuKg8fox8t1jAnot",
  "key26": "JnFcU2PEdTu62mSUzUYkHfw5gxh229PiKdQDT4P5io57NhHtsV5krhKJ4BHUvDijaPNAm4SGwE9adT9vCtXmGgF",
  "key27": "ipRQSXkJEP9qgWm47ojfh5xeNa3uR7UbZCs1kPwc8Q3XemLB5kqBdWnZXUmAwzNwxGujRCYRbPn7cg6Jj34JRyf",
  "key28": "48N9ifP9mdEAhuFATN5sLM2Szvuv7QvDvQy9qjZwdqYCQLkqRJRz7AoyrJFJP8mNaQBo1HGr4kh2iYFMVe3w77eQ",
  "key29": "4CX4WnbNH1KAdUTL3cGZdJWVTnyS2hLTsTe8NVxJeh2UMW4fSDx7cVZPrdwr4zMbnPCCaaDGCJ5VLukkY82DcLyK",
  "key30": "3zaARvRcERXJCmpdeH4Ltz7T1Gt7a91QerpLkTfNuYdaperkGTdPDNadrBUJzs7i9fvZGdVzj5NsRCskXrrniL3W",
  "key31": "49ufjbK8TfZ87k6EQs26egqRE2Y9qGbF62Engm2HsHLuLbWVMJtC4KhXyHtuPaVQx1KGfm3k7YCvQGwqjYpcs3Ku",
  "key32": "2usQbLfnv1A93T99HQgoKSX4MUQ6ThnxWyKSdhzhKLLMSjGv3ksesieATG3BioVPHSWRkzsLeSyvRWa5KxN3oyym",
  "key33": "2bLkrFviCyQzNhC2PumF9uqT3vAPzp49XkgBw5bznWAp1gzHU5rUjiWFzkXs7E7GYH3SULzcocp7CbHXzjkuMX53"
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
