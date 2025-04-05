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
    "gxkjMK9LJZb3C2up4CRXt9aRVWXKye8k18dVaFFoFFWavgEKU382ALr1hjVe2VgX6qDcR46jP7mJw8h78yMGvEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UegNNbE89ehKLwnK4JhaztzFcs6wVfLxVEmUfhatJWpyKFqfNWTyTBJSnpVEf3yLLXiQy4PrAMnHXkejaAUCXoo",
  "key1": "2ZCorZP8w8cW98qeZZ4oApNcfTPcd7rnCsh43oyUjfByqi7fvoxz81HH5VrmLG9DpXKthV55hYndQKA6cwk2xike",
  "key2": "5DDRa4f3K2YGmtxGdgVS1cEiEHfT2RvfnCDdMqVtXPrb8ZoZjkUDqJserqkLJRpunqyqoj17bsqyPSuCM4Zb7yi8",
  "key3": "4aVddTEDqvGNGxcX463XsMM4EHe9qzi28w8XLkuZmPUmj11i99MEEfGZJeWAVcbsb4vuhHtCocpKLmCpAzs3Y7zN",
  "key4": "5ozdBYQ6Bp7RGRaCKGw5NDAtfAhubsX6HnSCyoh1wBdSJyvs43WpYgaLASa5vCJJFjimraewxVtYdKVKhmaeiAeK",
  "key5": "58FjxCE8ZzpKQQkEXw7b5buCGLfdqLZSg1gTVkd7GK16V8hcjGkJmQZEMd2N32RRnp4Cm63A7UNYhdpQ7GLR9aeY",
  "key6": "MR7wQri9oMLTDU6umLkXgesccQoxYh2ZHUwzoK28C9Yhb489xjQotfgjLL98sqme94BetQ1fAwGZP3ri1g8FPFc",
  "key7": "4GXwQWsk5prksUdXpygqkJoEr66zYEGVMfGYArj1JeQp4FqkHbq9ZrtAfDEHSdBUhA8NiRMkXuDDCGynrDo9oaKc",
  "key8": "52mm5LSyJGsjApbhhHyNNVdKeEqCj6hCyAna9XVprbApQ6f65aJPKoQ93egAanZNkG4zh9vLZV45ApAKEorznJdV",
  "key9": "4FL4wFX3av4onoHnDYewDzQmHRRbE2MBkg7FQUiS139QAWwNbvGDPvkoeGGHRsNnnCjHQa1aVKCxVKCDV2TKJMSk",
  "key10": "3zy6Ra82wxakf1KFVu9n3tSWZEEw3kxYND8UsVNPaAzq1Q4jvYvhujgjrsbwJABAJYdsTi8fpmCfVA27K2rKKRL6",
  "key11": "4GKfoPJp2BjonUvb6kbR8Sp4JGEsqXKwVDPHr86ezk3s7aqDpts5oQMpjraqPna472C3vnQjnkeibDuR23UPkYki",
  "key12": "4Re2yhYMVcpieFvGP9GZGnFzns9gzqffanLzvXHCpkX23e1hZucLid1T1opN6gTxrMPnWdi4bduYRzMG73EvUYEY",
  "key13": "53KUTEVRm3DSCwjCYv85aYQ7yfJGDa7RTr5orhdgLohBiRZJLuk9SzKaqyxkNGkNMGYbTTi3z2cWbngDHNuNVbix",
  "key14": "2WLEt1xJ5WJf2DMsJ5sDJ9Rnxubh7PjJo3tdJdajKLQNV8tvmG9ASH1XPByybnyKLzKWu6HmGqUF83VxrRLC2BJW",
  "key15": "4tFaErPWNJi6Ue2FUapLFmCr3fiGVK8GeV4yRtVL8GuL4ec58qso6XxxGHKV3u5NbWNr7Hij25y27p2q24wCA6Sv",
  "key16": "4xEErFfCPmxC37trrfWEyaGzhyq5DKN2Lkbjt3ATQyu9P3UhgSy97Qm4xjMGKiun24bW7VVaBcBLQcr4fMucTEM3",
  "key17": "48F5P7zXUDmJRmpeRRaXbJv8FZ4dhkFFojyjfbJmxBvESmCCMzHnykLfTJJyRDuvYDV8pB7mgaburZkQXKsBbXWX",
  "key18": "tGEDbWUayPiixgHxjxS1mHFJuwrEnwp1GjvBgBDGmPSZov8hMPzbwLYXLbyEDFr3kMMLJ8z8Mmvt1WLTPBiqQEd",
  "key19": "4sdQMUghwr8R7PxNAKEWsRoCguYu4tWA5qonx6TNMv8PHApr6bhzVTHfvXXYf6PKF9tqJca79bU3KTVadJVnpS9H",
  "key20": "2v468h7dCFzLjTz7MJnAQPm6kBFjH8xrs8mZMpB9hRtMJQL5q2y2snd7J2PrA1Z9GqPRFdPiew8yo5u7ycNEgfQG",
  "key21": "2msv5Na9e6XmtMrgHnxixfFGUFsMA2VSWZ8K841NfpN63DCQR9tXE3fhmn6Rbo9GVKsKtC3LMtrobNwsN86gS7HN",
  "key22": "uZg6VHFdGrC9EiKZKYCuH5cm8GCXeui3d7wazCYxnzHtnSCNGrWHQ2jUCtHbW7ddDnmHm4MPYuPQehkYGkvTyee",
  "key23": "5vJibshzeY8vg8rKCKLN1Aa12Ra3mPQZXxLj8xga5nTpccrZfYc5H7nsnDee7v1ek1jBBzwRcy7eNwZzxCSzgPJf",
  "key24": "4LMxD4dFd5rvxqn7MHs58ayVTa3bf4EbeGhVD24WQXuTjjAjmsavsqvydPDQA38D5uL9vnbmJw98M6WjphmpkNGU"
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
