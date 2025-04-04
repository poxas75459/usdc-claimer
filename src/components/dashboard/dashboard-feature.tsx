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
    "3UenkPJ6zeNVKJeFo8BdEw2xMQZfPRj2W4NZP1c1kNpCunk8ybV7HHg6nJVUvNwxZKFkYbwSudN2GwagB58G3adZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45xzG9dGbRwN1Zc952K6vWYNpL66T3Z5qHdNShyiVPSxfsb9qCRmTrW3FYyxxdiaDfidJanF6zbraTFXKKuBp9wK",
  "key1": "2Bkcd57GkBois52pXGb4JDbffyu2Vr32JWAV51d3BuE7B75X5pxK6adk3rurtPHnP8vsWgjGrTB9GeFdRn4cFu6z",
  "key2": "FbpSwDso3NBWCzMxo1JrobuZqc4KF4k4AfgXttei8rDAYBUFA3EKgaresBk9yPXqGaCJhqMziSY8oSZjXyMVzzp",
  "key3": "4arM4iYmfLSb3eYD6fBygrmnj12heBeFocVTnYXH7L2Qvhde1o8e2Yd44KFANmEBZooSqJxiY999ZpXH3nHzrSc7",
  "key4": "3otideuWAv9qGZDuj1SpbyWegnizwhPF7VoD6TMzLRde3cErGYnvqNyyNVUFnGuE3je8Tskp2y4ogB5LCsE54n56",
  "key5": "5CxujJveYXzibR3bUjwucZnsyYLL26MLK8B89HcsX7QkBMFCbagvoJ8WbWNx9VZmz44Dt21YTVtCGS2QvfH7EYyH",
  "key6": "5S7p4XejNC4dRRChUXvHtCCbScBY7bhKJMRTqJ5ktTYXNFqbqSfQHkennu7uDjCugtKRwpf8b27FW3PbvwvMUfUq",
  "key7": "2M8maW2GAnHDchKQCHMZu53J76t1wyua6UvoAUSqdvhdVZwWAWU95q9MBghYw2pGc9Z3ijdfCzLKVz3ZSSSu8U5k",
  "key8": "otzPFNgQPsD9Bieg2ygoXZ31WG8cakKFdSZMEGhbcPH33DDr22NYPKWVwWbzi5EEknfKMMMDvQF5tAVsDbfyVd1",
  "key9": "4KJxj5NZVZ8dSqZHwM8dCYErUDwmG4vRanyw42mPEfijaeLnQo4tLbBmTFkwgWPGt8uowsjkvJ15c2m2uK583wAt",
  "key10": "3qAfGZiwLthsiXYRAbEWAGjARvNWDgyNB4cJWry3W2STjGa6ARQnYeUmpof653kcbECZUqh5TMNBuT7AfZ1sQRs6",
  "key11": "6dt2vw2jHkjJih2zkHdP2Pnu7SEqHZzSePBEFih4hw8VtMcNWHSW7Nja1XzdXKyGmuH6taPjkz4VNihkLVGk1ZM",
  "key12": "63bUXYoT8cdvYUXb6SXZVEJgc9XrLWPBe7Uvh7bb4pP6cjMvVFb66w4VcDvvB3iRqvUyEBK4deaTJCsviHsFUa4d",
  "key13": "4qS3HEVu6L4BuqWvEEroEiHgFj5aDwfjBhqpGyZFF1NbCioE19sYWGgkSTuHkfrj8EJVFTjGjakExYowUQND2MEV",
  "key14": "GG29yBK1BXKT5S7S54cnkbzAr3F1Q3BdWv9LXRXdyPMKKJBZBkLd9LRoS5qeiq2XhHXfcb1KyfJqtgoRZ1uo7Jv",
  "key15": "4fXPEX2AxXKbhJDWqVPLNcSFq4dFpTxvk43Kvv6foVXPKkvg4Uqv4uNH9GfGMmqacA3wGmu5tAPXUJde3WL4ryio",
  "key16": "65rsgkRRfJGkoNQsaK9BNr3FvusbgQUoQHEPjNQrJjKu77zuY1JkWiBzkeUFgVd4rf1CPHttxKs6TF16TAsXMbAA",
  "key17": "2znXXZjnxNFhEaRnx93psdK5ULbniG9TkEzLvtANk3oZE7myvqHrPRUmG5y31iuMEa29X1j178n52p7cz6RATPFJ",
  "key18": "5Ab27ZTVav8dkj3sCzA9EZYwSBshC8haFntePvxUJz1bF9qD1eG3cqQwKgoma3ytKviQLvuVFUVxT7RPTPGQR2Te",
  "key19": "37kCiNLPFzv7gtpDerHfFrkFEoxbFLsL5dfiZSaDyb8vSToM9uJZtpUs9pacrWgSc5PfYmBm4e9F6anrc9Vjnyci",
  "key20": "3xQexq6ZeVRk7AcD4Bt2oujjXqDisPcfVpZePMxHn9YzRmFmbVaGca7ghBR4Qa3k8mnirox47m2LmL8DiRX61W8s",
  "key21": "5C6J4hFKtzj5FYSHnWVJJYEJ9hyFuJCSfsS92wNnnefh3UPJPdviPYp2JWMQQwHrkEP3iMn8SrHBfNn29c3RAzir",
  "key22": "5g1mC77xJuWv9ndM7czBTnov7kBawffUbb9tqBKdc1x1HUaUSJ7yNGgbywBwaDZCiWhEzDu3cdQjx78JYe17jV5M",
  "key23": "5rXs8Q9RcpcE6u3C9rzJ5RRzzaR6MxP2VUNQ6RsiTsxeHGdJDNVrqpiGJXJsBJywZ1yBaCAt8dRKTBxUtMv8y7H7",
  "key24": "361gKd9D68y9WBeR6tkW5GmwtesRufj2p9WxuwQiEKy83yMa97LimWNsmrjM33CSq4zjJK4RyYCf9c3hBdEVojEi",
  "key25": "25Zr9DJucyDnfUSidVLGbs96NeHfTGYqwvuXhf7Uyk9mbbqCF2FzeFi2nmoEApRF18Xciwtx1Uqveoy1JeXn9Bnq",
  "key26": "3f5VdAuzTou77jbWxc5ptwKS3qjH5cX7LsgUfrp6FBHH6z1vc68Cjk6Ag2mJN6k7tKXy9fYCNe6YZCpKyGMc7Tcj",
  "key27": "5q4wKxUeE479VrqXyLhpoDsFYYHXJzS5WRK1XX5nvytmZhFvxYR8qYMf2vwkTA7pCd97H1Q7QGQPYjg7CYkjnp1Y"
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
