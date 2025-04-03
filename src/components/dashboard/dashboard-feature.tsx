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
    "3eNAjY4pSto5UGNpuXpDRskBMwqGgxEm4W1CZkZ52ZGJSahoWCembFTfLEvCRFhH4j8dsoHj2iG1YNRBtEkwgtaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d6XSYPGyfLz6Lp8LrZxP2pKV1DmV2XZo34VuYzyUUEAWQTPDVjULLcbtz1hdUuSBJtpBXCoeGcEf3zc6iNfdsj5",
  "key1": "2BrPskkcyQobnftZvk2JiesJeHX9VmZHn9pZzGMbVAyfq8EXakhkAMgK7vRAxTugdAwNPdxpjNnTWVT31rd5fnHE",
  "key2": "GrhpuDJSDMrxjt36upUpLrTKP4kkWrFJrsGPooJFg3qjXCz4TpEQVgHoa3J7wF1yzSLJcgESvKzaocaNGit5Rm8",
  "key3": "PbndFU9b44BZ1HswhT6cR11JFwy7CDJ7VwgwZL96x1ePkbKSKHq1fX51zePAq25CgddR7yZFAdhdiHL6KZAXj63",
  "key4": "s8tmGh7Vps1yrnVmEVsARdxcHW2xKwMWUdSHp2iNUKWvLnKtJ3Fi78dAAX28JFAQ9pxurnQJk9YM4Saqh8SeXX7",
  "key5": "3SAGwanuBh4qFqKBiKeMTsBAixZHE28f7pGWA6BJpNnHk8SpL6tv71Jtd9mnTWUKPg78XXjBfiFMyqntqiJRBgDH",
  "key6": "3YetipcGh1UMV6AQXNz18hxSc3vqf1FxmnpbysDiHS7snrQkeTxwmCnb8nbCjeuq694Uxr6jBUV9pJjAWZt5YUv",
  "key7": "61r7xPddZGLcNJcUqSvvxHetNxvnZRzXCgeYBC9WA8nJnkPcmau5DzjA1jpDCCQVDQC2UUxj6yXSCg649Hmdodc2",
  "key8": "YMtKZdvNFJJ8kvqrQcnkW8et1pA92G3wVoTaWr4ucJmVksyfQZRdK4EvDB6Jep98U9XZmnjM5tEHfuSHzars1oU",
  "key9": "3pLUg8dPariU7Fvg1yTRVn3DuUWghKPuSKbzPE1ut9J9b5iBjcBqduLSBzsHcG2rMawLBJWYJL8dF1WUqahnJoaJ",
  "key10": "4coZZFYth17xTKnp5uXeKmnv8f7VNxSeWKRX2sdNQi7Xm2ov42NHUnKEo1n1DtH2pWCJQhM1xe2PF98gNpe8VH9Z",
  "key11": "5JjGzuE8zPMWXRdwf3CysRy3BCHsNr5KVMNUXCrJ8dySBeHEQ85x3yx5vH9mzmg5XJvp531jfNZEfqcxvq94ogu5",
  "key12": "2GRKqFd5binoV2sg5aoU5hH3kYAwrTQMS8dvVNpGz2FNxCq7WA7sQ57A4gmwhuG3qnVJsvCaS19Johq4JmqwLYoi",
  "key13": "3viUvuMoEyMbBiBoDgikg4mjPruW5vg9616HaUip1W4p3NnJfcZD8aS3bVutQUkzjxTQdN9UqUp4zVKMJuJNphUa",
  "key14": "3zBVfvry9jP4aum58E1ya7FT8N53oGcebCmrCZp4gLr8wxiw8iJ1zQv23ThvcxMVDKdn7ugpuhomfyG86TW3hE56",
  "key15": "3LQTp8BsqLWLft277N9CatRxUWhC9bfrwNmrjdjHboi4743bG78PqJV53YvsSrNmHiYoV3BoUKA5suY52o1pvBHp",
  "key16": "3a4De6uFxLKFcKGrrqTuc8Ed64GPSgwsQZRFCrXZRbqqAakYXfbJJ6puAA5MuXNRmL6DYW38espMmv1jnG3Yqi91",
  "key17": "2muiUZzXd5Jyxh9WKbmMaVmCeG1EPwUoRmPAMfiU8aycSQPJ8mVtzbELeGc7pnCMSXpzrpf86dNrUYAv8guu98eK",
  "key18": "3QPywMZ2K8fApSxGEfmmHxKkfn3WT5WEhBa38g1wLLX6gZgofhzTCsLJYTuWxXCZAbKyFxhcPtJphA3Nef9kvW2r",
  "key19": "3haH8QCt7xpx32KYkSh5XWriVsr8FJuT64RQNoWGU3vV8aMyKX7Q74NWaL9W27B8jAN9ehP9qbpyRfFERsiyNAG4",
  "key20": "3sBTHV7QMGixamEqdRxyTunRzRugkVwekNUuGETz378ryQuEa9ELo2NZLfuu8Ax6AzCpN6tiT1JxKgSAEJqbqpMb",
  "key21": "4ApZVExHDrPETZKAC7CKyGhzVHaXw3cg99NtDD54whLRJint5T1xM9X7dk1H3rmYsfujHUcxdVB78cM6fJjnWike",
  "key22": "64Zu6hCJJDXo5ZoNrtyNcPqk7vpKVopQhqdG4a1xMEGfiMjB5Hcfeov4tjDUVDiDpYv9MX6myrjosKc78U5NrpxJ",
  "key23": "3cubQWd3hZNcydPrhxsLxJ299yS6y1G5D2DAQGykWCXaFC5o4NseZZmjqpjVoX3fXBwsMtVXeLL5eJ1HHfJGFUo6",
  "key24": "afUzpJ39DjLabALqUCfrbEy4BJLKrCXvzREHfLE8qjSvpSgFVRGfLCwJ5LXb22uGAi8vnxXNWqjwQwRw88K2JVh",
  "key25": "3hQLEDhbMHeanzq9UVAsRZDLvFjMfMGUpcCh5sLBKzWqTWDV73CmDwGSotWxrUFoV6VXoWAPQSVRPD56uwpVKr5T",
  "key26": "3zZEBCY3eceP5krts9BBFhRgSHdM2NvvgXQAb3jQJSC4zsEY1hMgTCAv1C2cFRszz4cZwtv4Ps16xbqFCLACvpqv",
  "key27": "7UPLtsEr9WBWgG52fWARYLJpeSpVVnz8Ag2QMsHQdmF4pVZia6owMSieymwE13PTQQTyuXAFPSwFY3xVuidmJ7y",
  "key28": "55RQoCbi7U9HCWKA41WbMisu674DVYXLnAWG7ftjwMpxKZPhFsKcqSGbuYWb2YkyE9Wrki2JNBCiqXdEYH9t7MXv",
  "key29": "4at8ecDvC5kxcyL2PoRFzAq6CXcCAeREmWobczKN5jzAyfJcgPSG2dTkTWfqTUWqDZKyLiydgYZ7vFVSnuJjdthk",
  "key30": "4T5t3cPdR4ZGYr1x6qGJwAfZJAWQ279u58ZzaEpWZRifN3xwoBb8RwskNkQeCcSecJiGNjUDuSEiHfS6JZiwkUKT",
  "key31": "4GvZWi78vddXF2Q4eCeT1C2qBK9yppm8Ku3jyR5AMbG2KB44gByz2pW5YeUoJz91CkusStAuv6vAZrZ8o4VCXvA7",
  "key32": "aHDBA8DsJp5jaVCB9ZPsMawu4EGcespwN4o67cHHvJQna4BQWH5zHtpWZvic7coUy9E47eZx52ts6iFLwNyeHR4",
  "key33": "2JCFzXt2vneWJDvakfuSxxidZVzCNogasJwqWYfGUkLaCh4pduqyGtPMxqj6jquhEHuEQfeZPdZbDgkbg4Kxxanv",
  "key34": "4wGtQX4xkUTsDfFrUoNcqbJZgx1JosUhNB14cv52pYktspukEYoMfWzcXRdth9XKEUt2icZB14iXUrrfSiKhSUno"
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
