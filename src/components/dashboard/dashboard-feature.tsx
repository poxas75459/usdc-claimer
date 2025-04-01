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
    "3JBoEASyZizfktdo5oMp2Up7p5JKk3eMWeifsYyiTnVsE9TRBDFv5xBaxcFDE43eTCCTC8ZuWRGhTYDFz6FGZJN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41RW4NthNi4EsXnkQjLCGcC196s4u19LLEiCuKXic35x7KLkdaC8snRwkjRkhHeHcxminFgfphinbRQYKL56Axzu",
  "key1": "4p5JNbS6cPc1ARX8a4FU6kigd1MHQjTF8Bkzp7yxYFfrjHTAvAoseAxZ7FBpC9ttq8fWvLVfGTggRqvpRWzSW4x4",
  "key2": "6quQDRBTcw2yYuUnQ2tX84573CVb5hLHhjgGHubE78qzdsft8DL9vktKe4ytuidPcsw6Yb8X5dry22SdhPoiDne",
  "key3": "5XMw6V1hTZLbZ7LUAMzhNJ29Es6bvL5Xyt2CrWx1U11beg976CD46TqkcbmCQuStwd5tpbNrmcajnVVCw31FqTvR",
  "key4": "2givXkLSQej4cFrbary8noF74EjYPuGBGKzqrm91i4uPvgQGuVQSviuGthTyt59YvkL9UiSmqYnxcYW6Gf9C5fN9",
  "key5": "EytwCnMbrVhJbTDtin4P4DJFDt9VCJ8nLAVnkP2HSgaD1RnW3gmmJVoKLBnGCwyeqHeM842pmhFkpujXbVLjhw8",
  "key6": "2vSvoSAezkwd11sTkEgMqdkJe3uT84Y1uxxKn7nTmjEUoBFjzTLJFR2jBuLtthbQJj8VAQMYRFL6RZcGm88h2gMA",
  "key7": "Dqg1Zm4X51qgWsmBsK5XvoAF1zC4cwEeCgdUv7m9WgtYSshDnTr1vBFkVtoUpiZAfyK9iQpmyN3BipQ9seZU3uH",
  "key8": "3atqtuG1mUmswm8FTeiUafMbPiMfULLLmukKFXWQ4HRjP8ihhx8VhHjQB5AQ9GkX3ZhJHuKeAFGatjuDCpWcAJTQ",
  "key9": "5adJKra2gBAzSmvtM6fxWdErgJZUJkWoVPCbRSqhvuyVd4NcdoXewtExZ7ijRWDgjJ465PXnU3DYhqLXz3BHzfk9",
  "key10": "4Ky2cC7W45vFQKaGZaLbA3DSoLMweQf4d8xEFHrQxMQuE8BSSHVHPCASW4C43J7SG1MZ2qUHT2xBsE8FP7dL3MZZ",
  "key11": "dvJUyS6Yo1B5NvbWNm88YrSEq24QwW7Pys1dWXSBqiLEudhp17PvhuVNaVaGtLzsMm8V2t3yp5i4yXwySFrodgj",
  "key12": "oK3vNWH6mdCSshyyQmd9Nzd59ZNG2kH9d58Sjud1ohuasstphse2mMuKonhUCqDf2XZAJBZFTKsLpPa9wsqCvrJ",
  "key13": "5Jq2bQYy4GpJFLhhRVCr46EbVUwyU1MjPEau2V9n3FP5tXSzHh4fZ9q4YJ3nA23fkngGNMj4zFswXQdsuhUuKEoE",
  "key14": "4n7afF9jP3jTRY2twWYuwS61daV3WqVQ8F1kFQqcAWMyse6iKNDLd9CEmbENXriQz4WJoTRkseY2DHRMGDpzmbZp",
  "key15": "4u2DDNXwGxRLQsaFzf8AUh6ceNANGRK5vqcV8omK5UKftmGjAMstiYcAme51ZKuviKMEovgQm6JYyJ4bhm4kJV36",
  "key16": "5j54cxL9QJWCP6ENCfUjyJKLVcQDTH6CsAKY26EQmALX3ntGoXxb7xEAeqdoHfm3a5SPUhhck2iw4qbNwb1EfFMS",
  "key17": "rJnxjo4cwJ87Gqm11xMSG51vN5KTTAiy7qQdnkuy3UtaEcybJbAWiSJe9yEG2bJVVjDwqGjmmy1dSUkKXRymJpm",
  "key18": "2M1CXxWGSeswE66LJDFhuZtBdNK7Q5kwvKjerZzPPCx3gRanzUMwCpwoHYeRqSkSbSzQejb6BzWYHY1sfFxScL5o",
  "key19": "2Gc2QVxi83DiRZukB2DHAH74S7nKu3XAdp4NftBUM4SbJRk5hnYLstZCgFFhmtk5jpMTnNXkW2TSx3AAVGBKYG8H",
  "key20": "2x6KTYXAJLgyaHrMjN69cmo1xnwTYCuydgfgaDYocQ9JAyeXLuNqwXDgxhJ7xk5s2e8jqhYgUKG1KjC8B1zRGDMV",
  "key21": "1X4ABST6by6kSncvvp5a4rscYBbgiity7By1nK5SCULES1Nz9GUdgwKS7jkthYuWJNuPUoBx56fFarq2a8LatJH",
  "key22": "31VSucvhge62qHJcDL5pyFuPQdsL8pTofAXvrcnox5DqeRxkHkB9vVSLftxTD3Zstxmqk5TaH161Qq9zZ5vqnrfo",
  "key23": "39DVQ42ME1aHyqJTDi77z7Lk1orjcWmwNBMyGjtnuM9TPMGHRSTfQj5aTRkMamz2s2GrMKBGKPDreN2qBrtVL1nb",
  "key24": "4XDxk2thgLnQtQuGv4aFnK4qUuk3frNfEWbVyEoSFoRakGBHK9mBg9uBdqiCZvYT6b8TyyYsV6qoy9Mo7tb33Kzy",
  "key25": "5PV5Q5G9VsweMh5s7CgaUaoJz4Q4gMg7GpuWcGxCGCKTfyb3fcoinuy9xGU3KoydCjKPFC2tAsqs7rgB6mqRsqP8",
  "key26": "4tAJbbddpvdwQjAXjuBJFvsrXju3iToGjKKzKFq6JVx6XLSk1fE1FfsexG1eGaDkrAhAhJ4GcbrWDH4WKYhKuLf8",
  "key27": "2YZDoeALCbfTPq5eW5dxmgrfHBH2h42dNCjEaF6bE6VcyMkZQ8AFxpE6ySbdqikoLSbj1cUApES88AQowJ2YcDYg",
  "key28": "23VEMyCzXhvxZ93Ak4ZKa2RqwjGq4fHeLw2mAP4gUqJiEJ2AkJ2ZJ2XcpnDjp4KKxJxEYCuwneHornjPb3xrwrkq",
  "key29": "5BXNhujRixeCVF23wRnuwqhBLbC5vqWcQ7qqbrErpU6LfoqNY9GAt7QBDgi1whRXh31GWTbfpQGs5ZNNqBubFb3G",
  "key30": "5XmGSg5ZtQyR4n4LRk4DBXgBwhxRSpWH5YUvr3zMKjsLdpsADGXKNgUgASn3UvAPDBExn6hG2tRv21sgdpZuehbY",
  "key31": "vnRFGsZrdoPAowWhzqRp9DUG9stoo7o5JDt1wdrbvvm2ZwWZ4ccXConvUH5pC2p6HiPV7rPHFGjcooukyQWyfsQ"
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
