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
    "5bCoS2TcM5AHvMpRMV56bwXT9TuezbALvyzX5H6V1BtLXixK4jg3GouXqxZEdTqsrbsetzsJQ3xiX4wb4xXcx1iz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "irS1wWXSoWJVrAEJkVNYrrnjpWXeoyH34Lr7vkoeG52ZTvYaphCjghTZkdST5Q9v3WbuJ9xVycYJmD5uWGaJDa5",
  "key1": "66mARuhRRiTuR4NX6HZTKGQUKUht1GtmFwoeSxawUPYzeWpLvh2C1Jogxm9sSBwTNyxaiW8ZCW4jsRAsNoo6hgw6",
  "key2": "2yByAq7MoyztrChRBBXJQFeb8D8T9KkuDzoVX8M6W8Sq94Rt9BAUTb6u5npbjoMDFJafAVAz3HSTmyy5AFqGma5u",
  "key3": "2q8BZ4mHCyoSAhk6ngM1ggTioVeR6DaKJnhDthQfY4LHM8DL2arQiLocmhin2sytR5i5PYU81Q9QzKeRcu38AKAX",
  "key4": "22N5UMRBdbzQ7Ls8kZuBPy1bV9QS5FuoBF4XZQT2GyEBPZhfgyx9nft1jA8843iaHsBKrUQRvujcvtktUEzMYVpT",
  "key5": "aYYgYLFwbaiEyfR5jn1qTEDxHN384eat22yxEpw6eRU4vNKbDFqacEHuDKFUGUCm27QhDxfD5PnfKTmNhmKkTxZ",
  "key6": "4ad2tEfycJgYfhZ9Arjw3SUCHeiZSzeRUZ4sq2hZRdQVeiDzWpCYEvZ5DNCi3DrRj5jGManBKuddimTMxtMoRuZA",
  "key7": "3z9bqyZqadAtcS2aqMPLCP1sNjauZKnvvrzgLLpPh1CG6hCVG97X3GbYrod3FDu1soLhbASkKynHxDXfVRZjbzTn",
  "key8": "2SH66vWw1NyrKmuVgXXdNVFoRC98ZqwaQiF9vMw6mD4WzHZ2HRxi1vSvrEin8Y9rcBnWnUrCsUyEvS8js1mQywmh",
  "key9": "iHh6RYyCZrLj1yVSgSV8ASdEH9ffZPNJemzyQdJYMfiozS86fspjiZBxQSDAkJBYM9TruCz65HVyGyXg77tLLxn",
  "key10": "4hrd5ppNDarvMvcjbhL82ngNCSqcxgwpZkL4VnjdzbXEbgkduN9uL88tTmFw1rdnptXg8u7KtFyr2fYZ8VXEf2gL",
  "key11": "4RdGc6aMWYykkxtDVorEJfhR3wKPpCjLBxDUptk7L5vYGB5jtodNrWGgThxppUP83Bonx44GUU8P3vfeZKS1BNS2",
  "key12": "2gs6NnmR8ezGaaFNsRuuxDSBgnESkjzvZAnarYAFv66eWA9NeiAbrFsLk5YHStLGP6etuw2d8KM2jewa4oSnJFB1",
  "key13": "4pFhKrqqx6EwVqr4P3fGr9A4Tzyikf3jstbUGVJ4k5kyCmsXjUjGz1TS7ct7XFGLA9p7a3dLaajeX9AV8uwDGp6y",
  "key14": "4wy3ivrgJEeT9GSMRXTgqRtMhBRbQ1bThwhZnZVZ2nk22HBSGuKnE9SK6Z5Z8HCr6PpWapZabe85bJRoprM86Jtd",
  "key15": "4UwtubMEnSw95GCGSc2ZN8SmWJkfQPQbF19xmsubVTQh9uJke4BwPhkxz63RXPgDv3AL6r8gfq5qQcNKQafbcWoj",
  "key16": "3TfXdPwyathagg3GCFh4znxBWfB8XvBvUF3m61m9n19anfRxN5gUj2CM8zXNwr7wjvBw51hfEbdGNLSrgmoLtSKf",
  "key17": "5hEi6KBFpaDKnngebLJzdhC6vwmeGtbEoi6WsGJzgHyd3eRwoMeAHNMhjyRGVvTCfKPAnFi5ooz4RZAttgey6aNc",
  "key18": "2tUgF2JT9dD4TGtiwBHQaVUiDM2Z7Nb2KsUPA1q5vdpaQpGp6LnjEBaB4Uz2irWZgiYvqzDZgm1DkSwgrQh4kCJr",
  "key19": "2ZWGZ8U94qQKxNDPMcXkddNUBKtuL5LWqM5EjY2JRFCniLWDo3qf5oA6fUy6wvfLUGDUYzeeMFuvHeXs5s4uVT7H",
  "key20": "PNPEjwwFqnUM2jHoGxUdqd3zER3hiDn4wkfkfyPFmUxycdkfRuVLrzEMN9EXq5cPtTMKRmzTvakey8F3H1JCxTc",
  "key21": "4qQgguPD6kSFMSgqDU3bvU2TdnYJ4xfZz7hwSziVi5ekVy7ZzEHYGFh4JRME27dk8DRhieG1jDtziZcQaVt7xzmq",
  "key22": "4n3yXfKs6dcnoRKxUfermd9DUpYLEqAvq6scE8zeX6CkHWdZVo1ZPdmieaBU3iqvFVBp493iojP3EhzUQUu4Qrmk",
  "key23": "5Hpi8V6qnUCADPyZPkPWTvBiisffUxdNpzNi5RvEmRfZ4XyXJY7zdak3ajatZ4PZ4fgXL8nqfwXk5cMWAgWwnLUb",
  "key24": "G1oofFpDhRAM2DH9uwLkqRVaXk5PBPPpsPJEUn7sRADcM3bpJXvtnurbQuRrZs5RQErTjXzVz9qpduNk7kRmDu3",
  "key25": "2ywjvKfyLCNjrjTzFzXpNbTE8hWA9PJX48T4sBFQ72an7c6oahM8iVCmYk2Eyn9yBDPBGajkTdVbCkyxYDKedLGe",
  "key26": "cJW2wffQFgkwHg671po7HWgTFSGcYBrnw3dbDpGPqsPZtGNwXNY7MmKbUmA5dkgPX5X6fKpvVAm7iHcGfeFpvRb",
  "key27": "3NC1HciPV9sa6q8MnjTBniMN9avaFgNGdbqfV9aPGCXqQks4W4MMYrPtj5wcCdBVwDeQwVav3qRuQqM7vruYaWEa",
  "key28": "NjZi8W8QY9ji2Dnw8vauDhLdVxE2GKaBJtTH2HQ3xMfaqQdqEpavxMPeGGNpjecziSwuBWvvYYNhnJmt9F8eYgj",
  "key29": "3BZFqc79bn96svbt37hdFuWEjKVMAyUY2dyvRC3Xa1VZ481ieoeMynFAEAatiXQtDidD5KbhkVRhiWcNXZcSQs6s",
  "key30": "4cBVCDSXrTfr9rYVcN5gvawGcULRvx6PREsdvd8aWKVxbZEGj55GMpnKMzpP3zTziuEvxtr1bZ3mxztSCtsSR4iC",
  "key31": "2Rg8PJiLg6yH7GRwZKhH8eSDsT5EVLbw4T3cpzC61ZYjskmBfkh3C7k1FXJ5RNNDoLEaaBN523h5grqJ5PwRQcN6"
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
