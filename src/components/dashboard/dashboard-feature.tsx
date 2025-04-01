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
    "5UAXpG8wo8G8GNRrAYJgA2CGiQkQ3neS5MD23N3o1tysLNYAhacXePeQSF2rGtd8ZcmGKev8p3ekgU1hjbau2pHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KRXVYcdRDpZrDrTqN2u4zoQxNQ7HnqTXzHfdaQ9PZvrCWUXaAZmtqpKWZPSR2uh6VqGJV85G38ZHPBZGKHz2GW4",
  "key1": "BGQbdMJjDssFzu7jgSfAzL9kdLvT6Jcnfm6ZgmQrjMKAy7MHx1ecKy58WWTi2QCFXeHqQKE6CwYN5hBoNXRjkcC",
  "key2": "5RAvBg4cHzVMwKVg1UDx35QN4t7y8ufEBj4WmhfCo2eNVpkcPtAYzKMJpJL6hbPA7xmy6MwaC8hGRKBNoxoZ6dcz",
  "key3": "H1fLXY6Q2dTSRCq8rACvPiATEVrBZH59FD4dsCuViov3oTpnxXmz2rBeGTtMnxtA4ZnjMY8L1RNz2yfoDBzrx7L",
  "key4": "3vYofUaD7gMzxYC1hi9Sba9hTXrAHnct5hGJatmm2TvhcDZNnkVZ2BYGVpZWvP3vKXkyzrvwaXwV4WymSg9FRGsC",
  "key5": "3ggqt8ro2cSNmtfaPhEkyHrCnLPsJiDfV3zTSo9T5adr3HuoKgE4WQeRsTPhe33fYSRpB7e2T7JFEEWArgVEETKF",
  "key6": "2HK3umLqTnadR1tg4VppQMro74EEz4EzVkyyEqyeZNNgaFNiC6jz1kNq2t9YF7UczXZq1wyBkjc68bBzSiN8doXL",
  "key7": "4NkW3gYMJcGTt6hSjWWpX4Dt8bNG4j8ucHPZ5pYrgboyTwxKqCjRKRTz7dFRER2jNdDCQx8rFTzrp13QcEvSiK7F",
  "key8": "37dRdDqJqNxgDATfLx9TVYeBezZvpRN9JYcsanMqaEGGQN3742AkcH3f8iNmUcHLhMLapyeBxu4pXwTwtMYt1aKt",
  "key9": "24ndhYkLfExWSnyocHj42ao2HBE9qJH64Dton6hMB9W4nRKQuTEuq32sutoECDsMJFECG9RxAD4BFd5y9CC4mEJD",
  "key10": "fLBYjhLuH1mim39zRf6eFXJF8SyQQBKnP7BzXme136iJ7wMGLSKmZdQnZ3BjxMmzih4Hwsa1BPpJtxJsTUnGSum",
  "key11": "5xXqE32nWKVtBZGhMPiPhKey2nj69GARUfzWCyveLmrcWzuU7pVNGJPDzYU5vV6vCJz942UHgRywqkqkw8CRLWvr",
  "key12": "2q1Nt6aWc9u1E5NSpKiki6sbczdHBjFypoYstebjbWdULv3XgmmG3jfn2Q4uxys3Jyk63WiQZhyB3htJh632nS1Y",
  "key13": "c9Qzom1mQxAi2xXbszRHsg33nEL2ogxh9Dw4r58rRZXuiP9wf99pXosfgUhDFRCW1Pc2UHEbmKBfoyKtCe6TPtU",
  "key14": "3XcMkf1pe2X35i5cLojNzq25bHPkUZbAXLodHAGUEiBVhFyonwuMHjKCXaGXWa6Wjbqvtmu912yuaJau4a3TSuFE",
  "key15": "rvHgjcxp82XEak1eNCL8aj1BY97BJoaQPz2n42pNwapgSJ5nfXdKbiSuDh4Exc7JHm413LmkHcXajL1hmJSHsrw",
  "key16": "4GEcbKqD5YUqN6sLWV6wjAmtWSrHc7znPpDJi9YqPVrG2KSjQzuWy6e6e5FYZxH9WFqy3LjZoo6dY8Zwtyqs4ttS",
  "key17": "3v9zPwn4gfeTPjAsQVUu2q3wGqLQFxpc8nkxsFxTEHj7fSjWHAzacDjUgP2GPLRjiubr892w5Hj3mGSjpA9KWRkS",
  "key18": "2HFMx27ZgCRFKDXUFekvn4YeHdoKrUJwCuPSkBL43GktVSvaKyfDyKAh4eeoo61ZJpLeiNXSDWxTQersysrnZ6PB",
  "key19": "2vshD9yj1sHbv27XEkrVYZXiAAtq27Ge9r2VfpLL8keJCS6hFXAtUtYp1FbTLCoeAGUUvaeU8yHBPkS86idWoydG",
  "key20": "2p4NQpzgQxaXE4j66X3JTxAQ4qVY9HS7n13QepbKQpDufGGMcSBFYxsMXq7MyRT4h7Pqw5ceF62rA2vR4Xz2Hhtq",
  "key21": "52eB1s5c7wZCRC91Fav9KMZhQkuZfVeUt2jV6aS7TyeT1mB3NaLyqED6sJcUJZaB6eC4FQnmzvrUj4miEbihP5aW",
  "key22": "4gu2rzE1KqyLwpmnUjGZ4br4c9chP5VBZGFS4CX8jGPxpE6u3oJTuUHozQkQsWoRWD85LGUX9fCv2A2sPrbxAeMF",
  "key23": "45ZN5H1TXaTw1xuCehCSj1pSFEXeyn23zP8GpVF4YvRyMFkWnjaJo1wh4qmCXVDp2kwzn5MGNtPhfxUWD4zmBmac",
  "key24": "2Cc6QzTcUcVabv2ayakDc4a9yyeYgFMobvKH4QvkJXSWoAVLvzLAjXBc4JiUhZ41AAL8K2PYgmQoyfHcwhMCJLTu",
  "key25": "5obDWhzAXpDpwjPr5AfTJ48DRXweiSgwB4Gy2YBRq1gmRzmddyqs5XfXnz3MDZBxWDF9UwQxyHtspMcLsQQsEX73",
  "key26": "5CZLUrwRjQ745VPMfN8Zu1JTyYjK7Bns2xLvft8VS9T2md2LUCsTx554GKEcN5jFeEVFxqudVH7uXawTv58J31ue",
  "key27": "4dGmPzGzd1BUvn9KQPq6TgumRX18SVbQaqpNXEZgiDpyaM9wfqw7zphLRVrLb7hXSqeQNJSDSs4uZusZ4gtCzg9f"
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
