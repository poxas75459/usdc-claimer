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
    "4m2YGFWNqGdztPBrVu8eYZhDkCzWHwSy9PQebeT8UM3gSkL6eMcDmzuCPc4AuSM6MAndzXkmz8iyzicJLErw6Ytb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUiwgo3pV13mJ3BrMvKq5svPtBpaQ5JW73QyrEK1F5wHTGPB1vicBF6Q48hfPg1RBvyEdhXz6yK9i9ZXEAbmxP2",
  "key1": "2PuWEg15tRbFdFTYH8fYbiPuPVpZv12AMyafXwUza2nuK7hLX5DYETrxzEhpZes5S5NXnU4zjrYaL4MwGbdQczzU",
  "key2": "EyZhrk5ohq8SdaqXXFwXrqdF13Ktejq1EAPYZSLmKwJesgW29oV26c3h4ikskDayuRmADLF4wzrTUjvrLvxS28z",
  "key3": "cRtKFvwd8WeTkvW1XnBhXNd55bGEuFViFjoHtP4bYnksZfMep8XheZGKSfwPTGXW7kjEXsFrMVQDJ9sppD1X4VP",
  "key4": "635b7bQ43UP6QTJG1rUDQ1MSG2Ugfe6oUXRCgNqWTuwMoFyzjJH7pJYYQCWWbfE4NjCsaUrxoE5TQN6gkeHSCU2Y",
  "key5": "2YrmkaJr597L2Fe1R8nDuyiuw9SXmbiCvmV8czAPCbK2926a2QDhz26cxm83p4dcJTLdhJwo3wh58EJ2ke9WrWBE",
  "key6": "28qvhjLSEoqPRXo6J78wCfTFTvfWaTwZ2AQWuarGMkoYGsSgAt6HP4jchCuqarqLEdUzfUu2NFKacp8b4Q5sfrPw",
  "key7": "4xPj2cvSfTtyBjtv9e64TMzPV8WaqXPStMeTetJh8ha7vnpn9HEW1z9YRmn7VU1M9mNSTpe9cryNz7dVoQ38THBy",
  "key8": "2TkGi5rAf14CmRsNtS3rcVvyXRyBwAsNKehiHYZ6bvGmLUVztgNzcFuivmrHYim5A8kMtNhBUGW6EqecC8E5sVxP",
  "key9": "4QMMXZoJM2ERgbWuUyEacjksn2a4iFuYZbjWyjc2MySG2UXMbv62XpmWoYyiFU7ZTRXToVNYjqDw5v8o7dVZCUkL",
  "key10": "4bGhcAMTYoizD4iHiXgTNDhAQQBsVPrxfkkBmE3DeRmHRdVTqcGgQxVLeZqBUzv6WhPf35LvJeJLp1qDhNpW4Ct1",
  "key11": "4VtEq5idCmoptZh3GpcFVgfypQarmmcyP7bDArCAF1wvQ7iXzLvyN4yJ5nRTmKRbEkWj512yaKtaRbvvSVJFvWjc",
  "key12": "3jBfiQ7XsebV6WKDgJ7pcRpf9nWr1m9MjXMNb3CkMLVFpR3mti57ra3sEB6AaN6VTghiHdk7NvvKrtq1E984jyn9",
  "key13": "3NSDYY3gEB7VhkynvuhyuPmcasnEp7MPppAuFwYUkwEy5Q6wP4FZXEfFS65biHDuvTPNMYHCDeMo8LJUKWF6kf7D",
  "key14": "5z5g86f7Qio7vp9ZwiKihSixP7GvTiMJ8wnSkHZLV2voLEYLqBUbJaCni7T4b5QTJPENywt8QLCUfhrnVYb5V3FN",
  "key15": "21HxmFWE1Tqnjw1ubnmS8zYsnCRMdSsKdNu1T1HVvAp4fuz49eRpffumdjRkYJ6bxwQbX7cPQEMzJGSfLgbrV514",
  "key16": "5W3HdFo5ga2ZDUo1omyCoNmdjd6tT4qM9jwD7Usu1v4EvXsCfPs6SUCnwYxLadkPWqZfKGyAVor5cuiTZu5F6Ysf",
  "key17": "5E4FmUy5WNwmgRYx9RkzJ5j2SE8vmYHQCnpNptXHwbFau5XwgcA3q7hfFCwbFUDvyD7V5v7DQEVT2HhWLhvvGPhW",
  "key18": "3oZ7QKY44p67wnvW61wksdoSJGJ4wnX1WsRbQn84CAw5tw487MLyCvCAboLPBUySvshgqd6K49pHG1kgW3tswtBA",
  "key19": "2WnUHNfmHm8bR4dkKmiyqefBz69TcSW8iUsYsjXBDwvZ1tkmixQNKdYaMSDTobuLeiemzRVAS57GGHR96PWQFRJF",
  "key20": "5U3b1u1BoSczH1kmVk785DNBP2tgoTT2KMJPgfowdhCgKHvpAmB2Bxbkp3c8MGtcoTe91EBHYVjpJTmri2q25sfc",
  "key21": "5EjFnKaGH8ZXhUUTgsTmwsRoEEjkrXTssMHc7ypfvkoqw86ogyRYenZnGVP31EQqwBBR1HcXx8kBGxRk5rTrii19",
  "key22": "2jA6sQVJqmxk7Q5ERN19NpFETwRBS5b3PpjxY2DqTb5qxJmnWfByM5sHsdp4XDGd6YdhX56a7RXYu4rCkBDsZYYQ",
  "key23": "551DUnSM5QDDXFCLawj1pNseShGevQUaqmAnC1B5sffmatvj2cE33rkvnZ7mYx854FfyVkrGcEhDxC8H4D9og5do",
  "key24": "2BYBJdzhAAXdK9fLPUrdzq1wFhu8SvHf7yGkujT5ALFK19zjmbccFLVp9BqSM1MHbcb25GAaSobFXwZCugRJM5qV",
  "key25": "2UnzyPScRNN7srxbdSnj4YEUJ3AUCeWipqD7PKvpuJe9EJbsvWGHiqpEkT9xr7NcNFvGzfM2V5yhNm2Xop6Vhzgc",
  "key26": "4WRFCmaDFzLt2dvNV5BBHzcWZ8ShFYZSKgLzKDpvP6YpJxDdDD15g7Hi7xrrva9DdefNS3V6xQJXMSvnmdFByL86",
  "key27": "5XPSpeiL3LMmJsKjsSFbtoBJt3UpbJJvwbV1ppSPrFXufhvjSvJXrxkDYLz4b7SnxBVMffqhCpNBtck53xtzrdBz",
  "key28": "4DJDZePRRMrtqo8G5G2Ucrv4dmDBQYZraDEncRm6PMeh1BarM8c7KmxEFviFhkmXx8WQfKks43woTcwur9ytEacv",
  "key29": "4z1pejJShNGz3DmsSYdAsbsXDs2uTGnBGWTcakcixNtKzVBktweQwYNjhiSftc4r5ZMGUKJKzBuDowf1hVFhvkxt"
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
