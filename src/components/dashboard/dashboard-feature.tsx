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
    "57qrcWjYv9dxi1krqLCcNbKvnzjX1qFo7tMqGMkgNSHTauTHMvEnuuXZS2MN7ukK3KvwvRhy6nZmyhyn4d4QtYdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uRRKzxwknYWMQ9N4usVS41WqnPZ233AYeRbZ8WkSEQZ8ZLAKyNavogK9gLTNSPHuvWmddw6YjkvpKPEfLfTegfG",
  "key1": "vLLykpT3H9LUHGkiUGBGo7iZvQFxswUj3gQobPBhuLSzozDLMsPk5YXQKSMA9HSpE85mb9TpKcQ5bSuS8UxBzwx",
  "key2": "44JYbNLxmaen2ihtfJjK3Wr4zgGnF2Cy63kAts9LEVyd5oVo4HkViu2VSeFVvZztPeaFMotCR3Gs6Q2f8p2tmt7m",
  "key3": "3974y8k4AoPQ9P56brM15ra59pJyxDbr4PQtQozp1cuvTDyoMFXUBEM1nah8A131EjXfmDQ9YXogVeNDN2sZEW9g",
  "key4": "3UuoftH4Ti1dFVr12kxWrgyArQsJaMSHQdX3Si24x7JUowhdsyNwdd4cEj7y5Uq63awHVaMGVSF7fcVMNoVxsxV4",
  "key5": "2By67zAeMm24iBvkQV61zcpwVj9MB7akkQoCVWq1xKR4RoGWbRYdrEafe8z5i5Xfv8ZVGnvMmr4o5zcvd8hGuYyy",
  "key6": "4bFkBMSgKYVo8msKj26r7HC72CrpbVp1VGW9CsX3APkadgkydLGVJSV83X6Vt9524Q6fofZc47at1AxpQyJBqLpP",
  "key7": "4D5ueW1Su1Mg9yb97FgQZNPKKW4PxFRdEaArmTQ9M4zd7XwQziLoWrrK9ZTfwM67cbRB1oRN3dYUsX75FaEwV6QR",
  "key8": "rNNKfcvuWqaXyewSRhxqKFVXN2Z9CFCGrxeNje2VD3vGjK1BxggJCXCqAC7xY8zWh7wKL81raXrzmmsTH2ymo1k",
  "key9": "3j9G6hJkWrBwEorrzHLvWjRqejaFywjeHuDwyj6jjiRpjZKZ35M1cfgAQZgoQr87rrckqfUzhzDtKCmhJPW2J8uy",
  "key10": "2uZ563QFCoZc3aLozoMSpfnQic8K6oLw4guwRzRSvgZH5W1BmCsF2n6AtBhfQsJ1ZCrb2syWHMWwPeD1N4dya759",
  "key11": "3PEQ9STsY4r9VRpCnYkEEKmp7MUmms5YfKnGbfihQ2KNawRAYNbrnFQ57At9VMAcvtyh6Si3iTvZCDtxt658XVYA",
  "key12": "47VQkYHVWVHpZbdFjgVNSGbJgc6uKXx6vZzeE78q8AaixuUGTkKpBVJoMYdt26X975EiBG3omSz4SZRPaciJ1B3T",
  "key13": "4s6VpmvikFjD4Uzbnx4Jd15xr7i3wZ9roPz12HSxZV6NLBhFSPaF2gjhYXzfE3C4dr54x4xAkNJsf7c4zSgVSXrN",
  "key14": "4kkyKmNE5aArjxngePjmGAzz1rWvCR9GAiBTAFsq1oNr784EhyWu32k9jDyW8RNwn98dCqbujBdD6Rzi7Nr94KK7",
  "key15": "64pmxJQmRK3RC9YGwnbRDw7tKFyWAoow8NPv4EwdDaX4jRdvNb1uf1BnmtZRRq6snxdzLMR9v3FCkMvDYZCkpnqz",
  "key16": "3LroAGPexZARM8yWtw9LjJeQguVjvNZjra439GC2YpwpddnveWYMJsZLJQrUJKyr2r9C3bEjN2kiieuLgrfxPpcN",
  "key17": "3JeaaVz6mJjTywgKnhGCodNgwytm5MdZPEfrPGoaw781DEX1Zhpr6hKzqVrJB192a6E37g8QS3wyZ6GydWBA7x6p",
  "key18": "3UzjSHvwp7BjK9n7Ybhx3T2vwsYTecTndhC3Qyq5GcKNDDzyoTH5tygaUaEvaVnJAYWf5FvkptoHY5HxZZgnYnfo",
  "key19": "3eTEd9RJ9tTpPKRAv7uFQFw1ri4PZLMyEaMKRyL1XxLfWrqeS3cQ1TETRcLnxNPzjFDUYkPRQkHGUGbJxmob8oST",
  "key20": "xAMnMjaLh2KqScxWLa1PDo7kscitMTfJy2uPSJ24whWdN9sF7853Hx9MkBy7Pv5o1eyx17rec7H5EiWgwn2ieeW",
  "key21": "2M2iW4aW3QWe7w34dsR55Zj33cjz9MyxyzSLd4kCBmY3uPCh2KvJSzgbsdMPDcqg4VJvaN4cTTjxf6BUeTiYaLpk",
  "key22": "3L5gJyzN7jvMp6gns2SnAgbfibsUyDfK3gPcLp2NFjmiQAswUg1EXxgd6mRZosBEgZPvNDWtmjZG3EocXKKNEDYM",
  "key23": "23q3cgMnsyqJqMrhScnvXsrsyJSbPzHDaTFtEhr67jLm63hXgFwXxJpFZeraR1jCJrgB5bYd12yEDM16mygyMoLP",
  "key24": "2pwtQbTs3RuVft5sQX87wda7figrgnvhMceeYmzw8PpVCN6VpvKPu1yptpDfiap3pF2ePdDgjPMNucZonHkaZGpJ",
  "key25": "3o3Ee13rNNLsTUc1189wD5CG5uHEZ8TKMN2gWi4Et3wZ5oWCnJJsL3TVUzcVuwWTvt5985NVpsTpDcuqZXwnzwta",
  "key26": "5c49ZV8jCDsBRR1WpohbAVxyDKKdaDoU1XNCBT7n3A9KtnKFQZkFHQtuuVnQoWKeLGTey4ZRnieGyz82QNd5GaqX",
  "key27": "5nkazsdzKXzfm16Uk8jLBVGKW2RvNFMFoxkRH3CX8hPjSZGwcfujhFx8qfrSmtkh7zwLVW6Sdj3uwrHdx9ctMy5",
  "key28": "3JRxkjdr7w2KyTjBV7vDHjuzKM1W5c842Q3wwjEoQKkwoNGm1jGYXYgYDLw4VkQh2RPm1dMnUYDfxFd7nVSpGQE"
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
