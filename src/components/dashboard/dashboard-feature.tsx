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
    "3EkC2K7Qok95rmzDtYBnCKqBrPJd5QWcikoEYiz6AgFXV6C5TJZ1N3Jbm62eBMk2UUuWs2foQGAgU5G514ccbtrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZnXUE1tv3yajRzWssgXeHEXgddyJWHnJtQ8eK4Uru7L9oYYWgunKwS5to353GhJQxmvGb3Y8z5PMgdwEk7rNENq",
  "key1": "2C7R8SFa4YtnPe5JNmeSq2yYBzkfiEHjEEeG5ajUNEMp7mTky13jvGv1ZCRMKM18fhYf9WruWT5mzDP1XAFSSb4",
  "key2": "TkP4dhYXwESLNRr2xnRfZWKSQ9SCobzqgn9Dk7EqCLVAh2VC8nL8zp1Ma2RbVMG8Ubttp9vBoR87iyMaQkzisYh",
  "key3": "4uGYAr7BTZvJCbyTQNpst3nKH8VgUXyZ9yiaWspV4BvU4QAhy4wEL7Qudr468XJE6VTdSE8ct3xmHdgkDcomq3e8",
  "key4": "3pGsxJPqEZY1QaKm6cv9hLobkcCxLH23mQAHraJaGwCuackXvX9bXSCkH7FUfhnSUmDCGwQfa1QTvaYyAwkCrZyo",
  "key5": "2DKrU317dDeWpDbX2ptLyR1wDihKT4Aqr68B1VmhenXTLwfNcdiTkRkwKu1iFBKxwQuetbZHFD2Yz6Z7bCN6u7hp",
  "key6": "2wk9rkPRhkrxuDc9GvZz74iuLQrx1NyyqtHPsvTZVw4vDpcjKwe9TzWZG6EkfaqzDyuoPNUU2SDSCreUD3fVM3mt",
  "key7": "3jck92bdCBwfjUd5hqLfpZ58SXohEDNZm4RmToiY1T3eShJpFnFmNNMQC6sqCvb6G7YbD74FpMozXfGQy2DUuFLQ",
  "key8": "2jULLYoHJ7QbbrwDvEwPpfwkbKV5HYeXYwxmaS6ie71pksqwmKGGif9vupTtUY9bXtWEDipcHrSdAScgxtQqMuXX",
  "key9": "5iAZvrnqCMQ3uwczC6zwAVnMCVY7veQBTRUuFGQFns7joV3rRrASYXrGwVdhLkruGJr8mdyoubiGruhyY55xW3Q5",
  "key10": "41RpA4xGH7H4iDcnbDC7fWWHMRgDF1bxwtK6gef9JhAsa4YE54G96Zw1PvXuw1yeArCC5nSkmqyoGmu7vqARAeJa",
  "key11": "5e3czYuNsfRwBPGgJKHYfYbYQeKLa7YpiZSCXgqprLhQGLGEMMfbDrFwUEX8WS8XqT4tiRa7zQSgvxjQstc8fAik",
  "key12": "2nm8uRMXUmjdgX9rQQMFqPD86P3o5vuySu9jSVeLU2HjjEGdKjp8JQnQjbtYKtUtNpL9p4NaJgq1YefZcVZdQA6u",
  "key13": "4mmu4SFu2Pt8dCwu5Fw3v3CW297qWGDa4rkWqoPf7tabeZnXhPMzQded1YcfCUghbZr13e2wjZwhCmAC4fDFjUQH",
  "key14": "5PZjERhJc8YE9mjZd9wgXzZbr9soGijN2Xi2kohFKkCte5FnfBkx5EXRE4yF3xiXR9EtMLSUcwEmdJaD3dAFQSiQ",
  "key15": "2PccjLu5vWEonWawumdy2JDirdBTHmNtZYfrJYts6oLbBeYsUMfMQc1tHKBgVRRKERFQepMjQGU1Xb8oYdm6voRA",
  "key16": "3R7Qb76R2BRQuyU1UGunwQcXdY3SVnqFJqHPgZrGC62hcuF5Bc59JYBubFZ3xWU3CRXF3Hz6rxRxbaVrsbzcgu1B",
  "key17": "4SHdLqvHPM9GB4Mdv2N49QWHHMCGry3vAXc5Mzpk9G5XC3w3E9kZQ4byS8cwzMSZbLbyGaxurwGzsAxaYKJAJfHu",
  "key18": "2Pd6HFVofnjPfDTq4FvGqQyj2LrbghP7bLTa9nHwKZ2pFJfmAftTV9tmsFZmccJEECCo8FAiBSzMmWisZm6z8Byq",
  "key19": "53332Rv5pExqbkc19QuMo343LUEjLQJXcWYxwNMmpWyUDcmBtFdtMe4hEsd5j1KLUxJZDPYzDr937noAY8xg7GFN",
  "key20": "Y6isiY88Hnktr9e2W2gxxmD4HWEFW1rn2vRnpkVQJFKkU6yz65vg2DMshsfvXkZacRN35G99hBq4E2fwDLGdJuM",
  "key21": "L6sE8gZdRRDXmRaWR7v36Z6CyyqMMPCPP1rsXKUkRrrnBqAHuYTqnCiRcXzJbtFhMwioLq1cZ8MiBAvKMF8py6U",
  "key22": "5rUovh9QUW34WvmLGwmyFLiP91cLwozxW8A1jSWc8J5yFoYNdhKuVrHSaF1pUiXaaudMCLgGQANp3p9Y3KyPcqnX",
  "key23": "hFKzpLxgPZdZ6nrR5VYRxGnyxsaYecwMPb8iTUecYZkpVLJtQey9pyAj8Ya26RLSVUn3d8f2BN7mBSsJdPbHFKw",
  "key24": "3zY3qPD2BBBuQwY7RU6B2h9J4p7hHEnskexU4oAVJuXeZoSm1sAX6ihsXEdJhdFLKCWKZGhd7sPKEF9ZLnQwexLw",
  "key25": "hutQxm6XiHYEoJ29Tv8Cz1D4K8zReEuvF6dDooNHAbRrNdTMFnsZYBEuKYQR6z7fD3iaSXuWfpvcN9N35eV4KE2",
  "key26": "2hy5KD3eVbaVXrjGfHZMCXgFVRphVMK5cTe7zhvVQ58YgU3NnBnqsdnPMagFNDju5kLNkr1WKP3Jjh69u8N2PWtU",
  "key27": "4SBt1GHkfo8YVE44qGULGBhad8aq6rvRJjdV9nvVberabL4Ey8cgiWnF3tA7txStJWupL2doaXGs99ZjQGbz9vTv",
  "key28": "3YJ2pNyFGaZsRcPaRZkm9Fvs8ZAdzUDzhgCg44FyHYiJiBhMmifDh76p9vgzXSwgG7cr6RmreG2NgkcrSfgQYyGc"
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
