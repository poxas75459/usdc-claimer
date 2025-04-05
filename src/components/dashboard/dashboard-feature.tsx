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
    "38s9URUJg9HFRbaBUDJceYnhoXh4mUvhKCtCdSNoryw7d95JA1ZuLiqCnYUcHbeNJLc189XGnUu2oNPQ9ueEceVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "466dv8SbX1et7Jp1sdXVppRDX7TB5fQXt7RrRgRNUMuQ1Le6HLxbmchhFgZUyhDDPuxJaj2z7VkdiEag8ywKg31a",
  "key1": "3tvjXxujTYVqRXLnqWqLmoqgzrCuKbzvrSDjGr8t6HwZXbBw985nMxKTBr8j5meyDFGQRCweqUWRfzNKjZod3zZw",
  "key2": "3W5apCuiBVBcgSM2bt1XfmquU9QWcs7RZhTC6b5ufQZk2XMbUuYGqQc3GcyRjrpGzUHECWnrCwrMVhVU4AZFPojj",
  "key3": "5K3QPH4ATiwv7UDyVzB2Hycny8uUabVnTYSrbYoPiHXzQ1ygvjFiLtE3CQkQACsbJHtHkCmeMGdj2kyCfwd7Vn9J",
  "key4": "24bDGKTvMXd5MiWWkKiTtknZPj4q1nHq2qjqFsiNJA8nDbJNA7K16u2WYp82jzUcAajPd3hBCDfLUcqCPHzK5ad1",
  "key5": "2bMMi4eQgsJ1biwRBvXG41VgWQQLQajNEtEFg5HTtQ8tAwSSFd9Lmh6wUirt2emRCA1BULedXGgeKgFu1oJkTF3c",
  "key6": "3juP4WoKQZoQBv4uP25tDq9e6tguY2xDohzqdGKrW4ycmQ6fiK2bex4t8zYh4K2kadtenjteLpxTy6JdUkf8GDQE",
  "key7": "GWDno48V7fTAifNcpY2Rg66cBqJYSBN6z471uxwdwF2aqw4BS2LPPy1wWJpocyhHhuGAy8APEYW8U4A4GYrKzVu",
  "key8": "4Noa9Y6srx9GDxKEGZqwjQHekj7nvThq6o1ku76K9kf421dacAbCNTzrecT7z3p8hCwCXq3Y33fxy4DURr4Kuu47",
  "key9": "2KXVRfPjfbGVUoB8ks9bJsR2b3gMJdJtR7HzpbjcL21wqTtLZNcHvBV2VK9b79xQ3q8ro9i1y22euaZWSfFA91g8",
  "key10": "PjcJqjChpL1TC3nQFd71QQVuoypvHj5ETBwGEB6BAxs2X7vneSsLAZnjorkFxvnp3Vs59k2z2LHWP6FZPv4zzgs",
  "key11": "5mqMD1Z2DkGn6fMFh7cyGbi18jHkoS61JLEPbhcF22ksFKuUdM17Vx1FKKVU9SSVf8pzYs1BFjoNmpYXFt6LHTVf",
  "key12": "2KjGVzBfPissfFYWbS6Q4C7yaN3crrdSsnVQ1Zwf3P19Vga9uo3JHKph3N4PgwFQtjdyUV2Tj8HtuvEzJtxzjoZj",
  "key13": "zsDp9kn6wzBzQip7YJdqHz3coX1P5RFnTbJxfx8hiW9L5RVwKiEbQK6yxRdRf3fUay5EszyD3ykYhVusp2TRnVq",
  "key14": "3XEoXhGAE2A2yVstjFbrdvutNf87W1NP6s2AaXfD6tw4VYzNE2AGyMPeVQDr1572axMUVp79ccekXNECKXB1RWJ1",
  "key15": "5LQx2kFrBJQTXMCrJJejXM4EVfVLbgZWv5PRraGTikt1GqCUCkMabcvD3T8VURnKZwsxtVwTX1f2gavuzCSMPSkA",
  "key16": "5BMFMh52moaZprMyu3zgatzbgAL4Fi8HtupePi1EMtraACMy1a227pNamzGvCqPrDY4j2MK89QwJVf3iEoeCAe16",
  "key17": "5pRrb3bsJpysYFmFtPD8LYrPCSnW3henrYwJZZvi68wepUGRaWffcZSms9JJQUxd6ut9Bo1stHFvCJKXMH7G9yRY",
  "key18": "3nNqQwam8Nz7HwcHvT7yneKBTcMAWc6xJvbARDjgjyiPkFBfGapsQ7nnL1HuuE8FYDDfLYLfFBk1KtiMw93LHEjr",
  "key19": "47Mi4ivERVhdKB3m6uDya6gvfRhtHmGFwaRmYhniTyC6MisNtgm1XbCDz1q6H3rACZaJp92jwVKnGFDaNkvYczUc",
  "key20": "2UA8HqffEve3iXmhgj1w6cUXC7qZtbx2XVUtG4JnuqcD66GadCdUc4XmHU3gTYsA4kS2haKEYxCU2XaXdETKTjfs",
  "key21": "jN1JZojrSXDS4vZnY7iitJa76imzzdHx3EBNsiNfb3U3RXKQWsycDXxKJZkRdWHNzxUxF8L6srN8xL1w7cZbLNR",
  "key22": "2XuGw8xhmYqWaQMqniaAtiZT2zjAyKKgdjVwDLDC98qqP69my3FdatMfsNNigdzbFAW2Pbuzof91tNUEwiTP39YF",
  "key23": "2yqa8nTGj9K3cqp3EYPELDRHJJpZ1tKDrskY6wj9XYPrjMvyfKyyz8s6c63GcrMjMbAk6Ec6UioAmzTLNAiSLpex",
  "key24": "66Hyq21Le79pR3JZdzwtLdyAdrnV9MMfPYyu7EPpm2z4QAyjo58qUQpZfZQ7uxNxDYitTrsrMvkjXW4JF7MZfcaY",
  "key25": "5Q85KHGMfsQLRA4B1twxN5LrLjD3j2FJsg1QKaGFHUn4Kf5jib5N6PiVkh3RDneBpQ4pBzroE6w7wKhmmV9Ns6uY",
  "key26": "3ohF5pqPUXFGUcH5c8DqMKbfi6PBxQwd1QFE47J7BrWeSRCRFkP7pcTQxSjAtRA4L8M4yqFYm4AWCcwuM5kgMGdG",
  "key27": "eBaDWEkf5Mi85H4SfhFoGx1TKf1J3KPqkfBH29UHiwBGoJZNdCBDt4g5DUsyTnmYqDarrSYAwumsnRqNHVhs7nX",
  "key28": "BEJDZZfDne9oCcUyC4Hhg3aHdJRanSyaWfEnfUTRpuBxqp8o6HG128icmwygfTbAaQg1UDM1RmuN75qSkeSMDpU",
  "key29": "5V6bEr8aj5GL94oc2nnkHbJo2y5MDtoPJVt4ca9GKLySbQGiMnwCJfYYDSJy8QufUGqJqsSpyPiHe3DJRRd6CYDo",
  "key30": "5boLgTs5sHwuRWkV57L4ik75UYeBMQR5VZCmWwCobKQKfYFHfbWKzmJc8ABVCuAFYeq9LvomBStDFLTnjrbW86Bz",
  "key31": "2kqGkTaMghgQKvJNvxn9Tn8JCg1kj5LdHxS5fYkc2Ai28TZkLW4VBUFTwuiZeXYru4ChDzsggMFPoMnhWq6cgQHY",
  "key32": "4G9ubuqkxC9eWWAWsoN6xi7iHLGamr3iYPxXVcmkHYym2TrDW2eGb97T7wh8KDzcvVt7vQVQnh4T8fGfGKawo5tM",
  "key33": "2Apb8PcfJVEG1MCmgu5CW6tQNwhzpqq9NpcoFnTsp9dpfXWEu5pnucT3n9qzpWfgfSiNkQ1grptTvjeVHwXFfuVe",
  "key34": "2F2GMGiastgooHM6arRHw1vbFYRU8fb5ePAMSiz8Gc8UdfrdGH18zFrpcbspyeKdYxSTKAUwZt7F5scgGSTyEeHU"
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
