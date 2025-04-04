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
    "3LEn4Xv7zWjPer9hzfC1VyMCACGVSEVT63aK7SA5n6dmTtecySbgkeSdhnTGQuHohYogQMTDfVMdGcGpQto1t933"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xXvtaXCpgv7TGxZ3qfyYBdQkwm6cFir6a9gmfrtZA6ojAWGKfZ2LWdhmt3b46GMrZtaNZeP1rHT9reoNdcmcZMP",
  "key1": "2K5PPUEFN2UAyfyzqmUEawgnWPo1eznsRsKWiTZHwZxpurrT2QNzGgckfAM4tNC9udMbdR5ym44eUCxAHxCB6Wvp",
  "key2": "HsGJDizkF8Aa7YhEpBF5SKwJNqiN2AzfAgeuPkv5kBzoxjQ84fvBrBaLBbp58qukzjAG72TEz9MmxCPxjEK25Px",
  "key3": "2mkkkWPqJmPynzMsLp8564caeRnTZJuRGNWW6LPmxaRUgZLVsuJRcpPYNw1R1d7cHAh8ju7hdFhRWPvepHJun5k8",
  "key4": "4T4dmHERiAgN6XuuHMe9ENtf3mBKRmScdkqs7aFwhia3aP39vz332Eg3wtpCvRH5ZKY3MJWEUgVBxbg6DoHkwec5",
  "key5": "3rGqny7ErXGRhqEixbJcEMSuQSjWhEuPbmyKfB6kXcn3HA3f9icQTuGHrSdfE1TwF1CNgQ2i15zADYTojSQ93QGV",
  "key6": "UAetFtpjxSJnYkFEh48joyBJzKxq9a5HKFANxAEUFXYYF7xS39cpJJvVt2HZPTDPDHkLtruycX1kgdHcJrptYw6",
  "key7": "eZLo5uCB6Qx36TuRCzJCgckfgeL9ZQcmZFpp5JmUf9zsx3i8VXoUxKvJqEk1rN7nVsseybCDWZzVL2HqJ3xRE1C",
  "key8": "3Zjz7THihVdbpMcTF2Jr3bTdKaKunXcGSVu4UKJUzYHk896jgXGQqDbrTDKAwarUxVqpMFVji5PnXBA5keSoszwp",
  "key9": "5ZxSJua4PUggSPtERanseZxmNcdbrm1U4ngiD6enUGyBX6eU3VdJRypAAAqAnwDcPJjSvanBTT7VgiSmrbH8iscw",
  "key10": "4K73156X7swNBtxZk3sLuchqGTjH3roYFUzSmKeCT6d2wcubYcr87G2FdcqrFqo39YbandjiyVkWtzUuWiCHSvfF",
  "key11": "5YZcwUqfc83o9LcG28vj52FGxW8W2um679CRxXhrJuqVyJ1RzNVasZUeuvXkaw8eyjDsRx9qxRQ2ZEKDicBHbKu2",
  "key12": "44GdeXKXJ6oraizjq1YYaKnsDBLGerZ4B8p6CPPCG4oXw4BqCqUVUWWkfoNNEHsynbJtPtbfMjBoog3h6msDLMHj",
  "key13": "2yAwncGydT7qpjGr6Uutc2AdhAsS7o6KMRepjnLi7s2t3kkQ2NS7TWZicWAPnangg3HCP6Rni3VGUrKAbZRVXKDp",
  "key14": "4tmcaMSJcRorXHPt2pCSRcKhz1mNgqA8MA2cfopZuQ7uoP6t8gzZN7zfv1sKAXNNJyZX4G1oVvqw4XyaATaavmPC",
  "key15": "BAgisDqaQBmSnPnriJ5Xfdokjj2hA8XbPp3qmRzDXDXycpJppBuyqGf22SvKVPpxab1qg4rFvoDjiWv4X1gEL2W",
  "key16": "2RncfCU7wjvKpW6ucArGWX5gWHqEk6doG3G4ynNMQgZ9LwgReXFunufQPmX2qDDXKawyLS4PDrWwXFb2KCFVYQSK",
  "key17": "46To6KGWHdHhAm7fBJrXmerWbAYcXMn2g7TfoBEUfBEoE3Z2cBEHjUtX8x8ao4WPy1VxLb3cXTrWupxPX3n3qoCo",
  "key18": "35AsR2x4vkSdvzLQ3ejbgKXKRmXco4vnGw1bJj8XWqsXvLgrXeHNzCpiQFdma9mB8UDL7EXMVNRWSyMqv6ZA4fwW",
  "key19": "4mMJwR4UYzHt8foLLrMZJTjzpYBbvG7sEfn3y75kx3AiaZHGyHiddKr4RWxHvrD81xv1jCeQ93zbS7ZbrZVc7ULa",
  "key20": "4G8dUygkv69i7ax7RJM2hm1wc4BQ62MUAvSFtE6R5WXdeJEDrJDnivqntZqTbV3YSi4NRbjoJGQNQrGMVzDh5C5m",
  "key21": "4TeQQmQzjWkcJXT5pvB6MV4we1P3pMqK1duZcmTAqL8UvxpGWm877RiizTaRi9P2B9U42KH2RKBDQBHDRPgufBaw",
  "key22": "VBeWbmrARKwKic17sWVjDQJpzU4qSbyDRnFQgDNkbSnjReFHW3kEVzvWRvAFoK2JhuyZtTNs2Bu8Ls1GUtDMkER",
  "key23": "3xKFschWRDFrE1zPBffVG8bno5wSDuGrqPAXUXRhEnoCsCFyXUApRmvRXXMJC8y7uSRhKgJpEYzsJrSA3H8Y8cy3",
  "key24": "2RM8x7r1cS2eYGaMP4Tw61LKBDYj55nephEcBy2TxpqJbzat6nDFYtN8umqM2F7ayQy1FSJsRvVkdgcJMBDRc86y",
  "key25": "5MrsZUsg1THS1XSJXkE774fgVzkzCVhGsMiXDwGPrQZU1jjDXNmLfgeQTGEkdqLFrWo9J6fXhRwuL3szXxChvHf2",
  "key26": "4Sj6uE34SLAJVt3nMZ7zeqWRxhrUjnMtskc42d6T4Q3sVmshkVoMggarPnPVDmJzPWrbhHc8sStTmFLu7P811RUE",
  "key27": "ZVF12p2npXEK75qd6qNMe7m7UDXti75SsQrdXBKhESadEqTwYV7eA8XkZZGu9NbqUyuPwjw3sQnnizLdG4SibZH",
  "key28": "2XjsM4VXmkrKL2TfYAen8rabMMUQSWkj76wgZTFDaqBfiT9i1hqrS2Zi5ue7YgdMuD9ue1aKhYzSQv6uRTakk8Yb",
  "key29": "3nKojwDsv6c9y18HugEtrWD1iCPXCTrF9S8ZkmhGRGju2WgK5KYky2sAhy4aDXHAuLgC8vH7UxXsnortQVHG91sG",
  "key30": "2CJFoamoy461Y77i2nPbeMSHHaEKbbfNHMkf7FYJBfnEeYxnSrmnELYAuTohVKpzUcYWaZbLS9rEShXNVYwxHbyn",
  "key31": "pscaeRqGbf56jd7womah2CkkFaL31dQkLuuywshaB8uoWgSDKkRmFaUAvXixYEaFrqiNY9mbsFcdNXWdq8s5DgH",
  "key32": "41MasxKwDTTmvsu4ir6yZaDrfmi1QvNM3EuiY4zeMLBVtN4kLWAu2i17swDXFto787rwfeVSyfzR1xKrh64E336S",
  "key33": "4ddv27bmDPUhADxFmVatYEmM92cc4hgfhuwd1nKmjjwnAcTfttJUA66hdZvfPJgHyKjg3GsENsUcHLM4fS3oE8ep",
  "key34": "3Heis2XLsDn7kXrZ5iX4WQLWunwbBm6erdbz6iGmHz8xybUDFxNAd16GZoaqHAoGAqFSizfGHi4cM3LTwmtcm4ka"
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
