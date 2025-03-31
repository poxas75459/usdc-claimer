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
    "2MHtcequK13M1YvyX9n8xBMCUoEGAyAcffQWaAFZDGR54Rwd8bzfvoaG7Qtxbt4S8c5YVEzQzRmZrcUNLMP4UQQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wnfgUMErwfFMrA6M9fttT6rqfQCn5926nzMpPd2eWLNm9caoSrEd5Vix5R8Z3Q7NrBZY63br1siakThZYVaEgY",
  "key1": "5vixXTma19Ziv349eHVYmm3HZ2HntB5LWczUgzHjFpXUgSjq7QptykadpQ3h4uFPXogjb6KSt49DG8iquUiJgi4C",
  "key2": "28isWP5CtvvYH1sRauVeByEz37WDN7QjjHjWQVL49uy7oScoeG39jg5GZGvKS5hPxf7ix8Y9rELy2bEmcry7diHK",
  "key3": "4sy23o81FMdS34QsWHyFzWFT7w6htdVqt14YvtWktxeeJQcMN95Ckij3wS5LjXfzpkMZkfRBd3suwQseGYjsa4vL",
  "key4": "3TLLR5VyJ6fn3u7s79JB6Y64afmXZGaWv2tSWkCrko9qoYeRaJ9w3NvtqPh3WueYBLJZGxepcJZetUYdR7nPBFaS",
  "key5": "5jLbHs1oPMYSQcuLJycjiE838kZfGLiK34XvSCoGvauAwGoWHLcYvmgd1uCbbdBA5uUqErSGqZe1GrgeRELdB76D",
  "key6": "31XP4sbKnwHxVZfHac2bjQr4AXFhphjtAMvn2MaJVJ7ZUzGES8QxC9cnm4RowePh3rCcRrVSzUuWFAEmTZuJyujz",
  "key7": "5cirNAiJ41LkXqJBBaF7Z54NN5D7GeLFtzLgWBapyGDoUq66pK91yfuVHSuZMhVKDd9ReRXKHBxtLmF1zu1frSWj",
  "key8": "475SBNSPpMMycDuFZfdSBWSTDaWhZgRY7ka6yu9A8nkpq4vWKTjnEdEPgxwpzqMYv9QHVcZRu7msTG5mFoZUM98V",
  "key9": "5szrewSooZ1YApfxW3Drh4kRd9msnvmZKvwC2wmfZFCGox82kDheUFTBa1ARsa6baLzdyLZHBeB5nKjdUKL2Smjp",
  "key10": "2r8bjBThx8ZK4PDc5fmTxGVy1b22dfg6QaEgUmRribyHqfMAiX92dN3eFwTA5DwB7pkoYZF9JaeM7E8Kh7FKjnQW",
  "key11": "33BUqxEBEyPgD1BubrDYJUaBesuyYoFC5b297ySqEQ4pGgF8hLrPukugMcgdHvZuGyXuPGDayPcuJ8UJmBMXJiMf",
  "key12": "4dDu3Ny74nQXD5QhqufnewhVDNFNXnPi32pU2cvbUzZB3EhwHfaXWo4khSz22FzKm8T4kyBMk7F67DuLmzuNpQZL",
  "key13": "4MkCWQhJwiz2P5y8n1izyXWP6SzNkiqq1stz9YQgYvJPbJq2Jia4qgvcjxGe6bLATnxeY5DpjQQdLNBWtDUX9DXs",
  "key14": "2d7LJrvb4DQK3uhbJRG9EXozvtVreHkFXxxrFFre5aci3oeZRQiuUUpLrGymixZQxJqFdwqNxrvn1RBGHqDA427Z",
  "key15": "3iynWHEe1qoy7PCwFZA16JAQfUMWCUfm2XUXQNiDa2WXxMSDS2YSMQ9SS6h3wMkkVBRsDQdgiKrJd93849SeyGBC",
  "key16": "kgq9AbJGJzkSAM871K99hpjoThj32wkhANkntZDRKaJ8D7GBobwSGCtqSkXffR2XY8NfqM6mUqNwvesmPnhanFP",
  "key17": "2KoxpBzqvM6R9XRhBBF221EDwACREi1bKxJi6robUuixCnqajY7sbP31gdYbDJEXqUkM46LbNdJ4BZRTdnD1VuSJ",
  "key18": "5HzfkUyWTVJMgLRtEyCsRpoPNjZxfVyuTZqcwKF2GcznxEEj12EajeqkDK9MUdzgrFfsKL3TqnE4C9NPWMcwQSzj",
  "key19": "5G5dpmNXm8AHofgskiKdghoB6QLfc6B6V8KCyUq6744pRx6d1oqGCq4KgKw5dFbcw7wdJF4PCvYf7714nXPveRzh",
  "key20": "4VSDfrhSJLuDSCVJofybTGaMWAdsdM4GR24cQ9CXji8cjTy1F78yBUNVApcfr7dW9UgLcxZfghQUqvHxszDmjk9H",
  "key21": "5bgNYkUtNA5k3TWYYv3L3kpfv1VnD6YJeKhPhsv89mZGHKvpM2fKhkphtm7PFTBCr8njSFGZRwRw2Rc5aVnKyory",
  "key22": "V1yviKd5dZzibMxbL73R6NMCYMu64SqkfVtJhTmM5xCuezxUnU7iBpwSmAyv2dbMPMcoW55iQFKxmgucwSi82wa",
  "key23": "E8PnMcUCuL5qqFogT23dkZndd3MFTo9aejFCtj7acoZxF9eJ4zA2dXQrjeBZD2NmreGK3tjKUkHzG5XE5GaWXF2",
  "key24": "2BehKKFMy9tALujusWbYscGzyDSWoKobehxkEWtPqkjP4X7qRtweqk5proasek81oLWSdQKiCLpdBXyq8D1k4m8T",
  "key25": "2vcxDiqAaWZVXjDJ2knVj5wRMrDvASLXZD6fE1JbpFWaYCVan6upKWV5rZavvB6Y5G4imxG95xRHVMXjGAysdHLs",
  "key26": "5ub5GrwpkJGVtCoNsUxi2mTEb7yrNMhhJuYgNXEM6dMA4z3a9vQDykee8uxTV2LUBfMJ1wMpY1bMerkEPNRGp9bM",
  "key27": "SuHZv8V3gzyfxaagqxYvr2w6VKAj4LgJcy6L1BCoa4eXTZweL3oMEWZWmoM8fJKp3yxtinmNvbq1wMGm5jZzi7r",
  "key28": "31NkG5bPw1h631zQbftmU5FeJv91k3U4sSXPDSLfj5mSBY5ZE2gtLmWcSVVuYGCYJHsqGqSuwFDJzehbJ9VQFmC3",
  "key29": "5UDo8SRnqYhxKm5jYBDW46hoRA3JzjBisF6o4TwapxSpHtveeBhL162tbLjaMjfRkZ5jCq6xa9w7PgLAVU5editc",
  "key30": "3RyVMRKPqdTW9GDhN6EHwFoSKTHbVnvxp4JfEtFFrk8vyvcREfFzDfMdemttBoNBDwMh8JukkgGER7JWf9u6Ni3w",
  "key31": "eekbPSSCbhz6CosU3ZkYuqs6Qkk1qUuTKbWpYoVM4GkfFN24h9M6mxkXgrZpWXTjN45b9XTTLC7bAzFBfXmZBeh",
  "key32": "44LRamAtkVVHk3S4aJZeSANXdc7pyq44STYiarkmojuL3x9PvaRWTyngkAPDUGCeStX4cgdUGJ7eSmAiggjNgjBN",
  "key33": "5hzhPD8UbHiUvr8EnWoJbYPdnZSgxxuQbumGenDYDVzjQPVdtRpHQQ9EmRfCGdVrMD25uBUE9yQdu1V9tNFau9v1"
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
