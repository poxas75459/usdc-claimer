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
    "3fj9bBrwYuj8NUUxUBeALg4FqfCRxuQxLT8TMdS1kYCh5b3LE8zuDiLdv8uEtW12QayDhzQSAwZmAmSGfA7qNuA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vUWMBRxbKAr5tDmXe2NsPcJJsD6yaitmBTFLDZ2uahf4fwWXubJAArtnuT7uh2gDuToTid1Zu1MMbVtZV1Ce3tP",
  "key1": "3qouXD8mZHHJtDhRU7SVxEgjV3eNFBHoeDwzwihgUU3CtTdZE1FmFTbAWm6zzThbBvksRwZ6JKTndF6LK9T88P3t",
  "key2": "2DRG2Joqoe7Lqcew7TYqbHf4B15cZsHTVweZ3KcpfPe34KvoEHvfeHzKmntPvxH9xo2c7iWtwpueaYdPgzwajHYr",
  "key3": "35YiNo3GAS5NEKa99B6TcyNHrEaftFFP9FNRqaXqRqSPnz1ZizdkZG3FiHa4u69Ze5oTc3pQHvT6exouQNb7enti",
  "key4": "3ydofzMG1qqT56HWmPt6SmtVEHiepiWb4aMxxghaT52NMPThdrprESLNZ3NWGfsuJ92tHFpanwTjCJto63Qzfrz7",
  "key5": "4HBrmvbxWfGPN9ZtNsBYPEtXUCDMLQDvj7Zn3SrY19rA1JZieABoaBxksGV4eyEXxhQBY4TXU92FrKVSqyozeMyD",
  "key6": "36Qhoefqy5chhvSoU3grKHVTNYtyEHMb4hEZ7bREicJD3yBNHHwKZ3XoBb2hZVqvaYZzb2DfEUtwFe12trKre1Rd",
  "key7": "5s2E4eFRXcv4ubLaxFsK4eEeFUizjinod7Prpj3BdUYxnQHk3ank7w3HC6vZCK9y7TwgmTA2VNgxHNiJvuMo57wM",
  "key8": "5nnASbzyrutAMeyx3Ti76QNbEjMrsANCmQLd66cD9kQTEjHTRJnQXkS6eDPWitw81zKLmucENVyxqS7Fbb7Xvq3J",
  "key9": "31PVbu79ES7L1SPMYNuHR7wsG1Bnm9TGg5esuJ93RKttnqP5CSiAXTQX4JRDbKjEAfMirSfeF7CkctdvKdnth7LF",
  "key10": "4NixkRSwdnSx5NULMoAwDEq3o6LK6Xgw8FWyJ9o1dGhRefkf9Uzycz8qMio8swz6hyqJBSf4FERxye86XCS3sQKo",
  "key11": "4gSgp9kJfkXxSnZrEiLE4SukP7oyP88koZWY8eRZUsCNwfdZ2zZk4BPo8bLmdiqn5diWXc9tSp8asNq36Frq3NC8",
  "key12": "5fPamYZ1VuF6XSKfC7hRaGQjVhDu4bKEsxmgwuFzY1TbWYiu3TFq2CyzZp41SSLpaZT3oQntCbsTrjLz9DxbjzRg",
  "key13": "4fr6EQNEHg1xd43dqsxiHc9BCwgUhE9r6LALGi9FCwoqsGNq1Z3MEEE147pcuzTXkU3HrrDZBz26x11WqvtQyVux",
  "key14": "tn7hPqZjaWhcNeFevkNsyMhWtQAwxYrzCyAUo9V3WGwU23Tqr5o7TPpuDzJPcDHRC1fj8QED6ot87sY91XmK69h",
  "key15": "35pJMNX5vwHgYzBD9Q24RWj5TvSAZWiKhBC6nxFge5RxEXLCcJ7cv2YGqLA6Ad2RXNgQsssRH39Tp9FVNs5T4qAp",
  "key16": "2qX1EvGV1xqZbHwSpZ7UbhESsvZiYiHkTTbBtJoYsiyczTmJeRAJQ2EyW3ea8SUzDVxxGdpT2Ctaf3A3ocQSYF3X",
  "key17": "4WBHDpHi95UxmVQMbi9w94J8aeKAsarwL5T7mP2Fr2WsismovvXFiphT35Ty3XkTAG1EHiwTUDgpn2jxZT9zPCN2",
  "key18": "2FnhQSyWWWorBGSgVXP7bxoQyYk7xxYarzAn3CTZXrE3qmFHghd9hfjSrRgxSHNrC3v2dJ8KJFQszjxuPAnzzRdm",
  "key19": "nFPerJqmtGuruoRC8aXQiZbYK9iTre9yWz3VgRCEJ2NJ2vLRDkszMQ36CE1z14KfQ9Ne6CEK9r4eR6C9a8CMT2t",
  "key20": "2YmFARcNoK8BcJ6jeidLyuXkb4hii27X7vK4pDbAYz6VfneQqrS5RBB5FphBZxeKemySeJ9jzgUzqy1kL65GkuRJ",
  "key21": "5YfKrNS9DAHDqN85Mi7TgdyVWPF6q9Zgdb2JHV7iGSVa2bZpyiwqfaHt3RtgxtcduxFqzeeDTmJ6tTtUoB3zvQ7K",
  "key22": "325YfYbK6DhXWSbWXJE85aRCaEy6rxGKvqhDAcHBrit9z2iTFzHTrjcK64itUDTZ4Yf7qXHm9ZLjVvQniXs83R6k",
  "key23": "3wqhkmML1C75fZdAofY8KMcd1ad3ZMU3syTpsCqy9qj9qGgkpqsXGpbYB6dD4wkn7fcvQCkQ5niNGk3HuF5YvHoL",
  "key24": "UDr3ygY5w2UQjXM13o7mNmMyErWEeKxSimvtD2CS3aa6XuFSqszjULbmGdQBMbBio7et7mSuYFAyLNq6f6osPjW",
  "key25": "7Do41AbDipysFUTMa6QEXSs3btBFwtDpCQL5R6bw2idZtM4CXRaie7UMBmsubgCQXYb5Wf9bQdVHzQXuCC5TRKC",
  "key26": "21TKvpVhjBtCuaeUdN73RXkghuyhSwRbzf4kGjHza1R2XVir4rULws4y65H3esUL2YuXGnCcxXxq6txd5yJ9AALU",
  "key27": "3wphAGjQwAQ2guJmosQAG8bVeexVW2RB1L5JJGEqt89b7jRgCgTY7VsbrvWSn9MSTsDEjpdEMy122STsjNF6Bhgn",
  "key28": "427ufoBXziEEcgoKvy8dnLknpQob5MsqxDFPGf5by7h5W9xpn15pjQdbTjA99TnR33ExQBpCk8zRSK76LjLkzaFU",
  "key29": "r6AhYnoY3sWjTiCVXCRhFGZnNghD4B1NVmf43sTMVfcVFt3fhhki7rr2nNUDoJjFdBWS1A85gpLQyBRVXtduuPb",
  "key30": "4B2kmsWsmn6C4NEJ5fh3eMtNdaA4hPHcjHgYvzWAfi58mVLybX5ovESkxWLfBKRijGhQDmb9CDAUdJPPBDPvFagY",
  "key31": "5TBz8qojPLZNhtUgoyZFP9oxpxaUCp98Jcpdw2UCyZPCue8B2Gh5AV82RNJPCCWCyq14QjpybSvDS6UTkbvXsVr7",
  "key32": "KtdBwR8JG2jpkVwKEQW3cXdQYaQML1FLfThzfeXG5WC5bqwd65rwVZXmc6zoug5Hr2pZ7bThvoC5V25pQqvmz9n",
  "key33": "5phRE2wXxNZ1bKL8JA1Bxdm7DtwPnfkVW88mwR1qK95FbfhQcwVoKvtsWJdN7yeiiAtsyyZ2eAvK4FLSAUKZr6JW",
  "key34": "2Za2Lbr3euzv7ddcNqRdKrBYS6jeW7ca7Mr3XzjXHYZJzb1gMYEHYfTtG9crFJXjZNFzH5NmVyYR6xSZyVTCAfzP",
  "key35": "4DA5YzjFjSNRtgivHaT3SnosQd41zPRBF6nRp7ACvwLF1Zj11e1mBYTgBJwk3yKZ5L5nD5SbFHvF3GUEmx37zC8g",
  "key36": "4w5j61fzhg1yVfgWZY6bfgvWBXSSsMR1GY2De3MkNLrmPa5GXeo64tdpFMH68iBnzSbF6mLe391fa4ixtoW6Ezwz",
  "key37": "5ZRRkCkNeB76GzqTw4kQrZSdhcFGwHb92YQhuyay9ZRFcyihYvxHaBnCPa7Dxs2QLc3LohbVUi7Z4zTjPgpRLmyu",
  "key38": "2B56C1xNeEKVhqrge7ReyanrfpJugY6ZkiDexaUgW2RSr3nAP3r6Wvi5d8Vbr32w45uVePfzPUGjLwPzPHeSkq68",
  "key39": "3zpCjb2FMJfCof8g6UAvqYoaqGJnxVZtkPwSNzPYmvuH1fFLBP6z2DAK7F7cLvodFABmaqHfxPw7D4FnhuzQRh4c",
  "key40": "3V6YjWKD6JW2tBPrr39WsqHzzqjY8DaXPLtqjjuFiYj1ui99NtSqsxFH2bswpDC1Vkk7c3jmP4h82vDjew354Gqv",
  "key41": "2BEP9imMLtHripSiFXzSvsFwCNKUzDyAFNhmLY98WZ6o1fMLyqcHmFYC9N7qGtgUjFWzjLiTNvEkEBUCXeeB982n",
  "key42": "2TZcPoLXYx3UeFcF7gMEdXgQkyVhMzc1s3hpzNEc44GxKkJMFxjujeP32RGX1GzTpG44kPEazktTRR47cXDWkahh"
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
