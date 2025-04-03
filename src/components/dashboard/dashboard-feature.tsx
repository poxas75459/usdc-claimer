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
    "4GPdMXN1bJtAXu7u1K8M4QnAbTNzzoVHzVn2h1ESp9tq8DRSqmfXXSmHFM1uVNfSAnecYpw9CjZSYDFCnmJHPWTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NLRtfCA7k2qQUXefJmemgBeVssM53pJe2PtnfnVLnhh9rpv4QvKpw57M8YZFBzi6XimrGr6C2GgZ9xaN11erfFU",
  "key1": "312NoD4y6gbXPeFMgFouDJvbWN7rjuUGNjrWz53XrF5kta1dHpnZGSFLGktp4PE5m8erxT7LiZemj7Hxxfvp96dD",
  "key2": "EFd3vWpw87wpLoikU63eqL68Ciokuh8ziss1Rkfi5jyFmLyMxQuF5ehSFs2sZkf1MyE7D7Wm5aRePKdsar6XW9R",
  "key3": "5jGgTcYJzZgrvJ5r7nWSRDTmV78rJJqDEhwBbCie7JiatT2uixwSJgRS3KV7RFa7TnbSs9vJmj3LQMGavcchG4eX",
  "key4": "Pcv6yJv2cDRnPVPVojuskU3MSp97tgALGzjtXGtSZU9rszJWX76sKexLRaMroUK7fFG4Nzmnd3NoYQU9e334Cuq",
  "key5": "2MhwkJZYM8uUFqgwcVtR9qitUejeEEpCVAD9SZS276AFYfuSaWnY5f3EKzAnUWuEp32wq3MoJPRoWe97rGZmkPtT",
  "key6": "4XA7AGeBdKyiPtJ2vNFdtNpGa7UCdnTwspNFnA9qfbnHZVV4kjwncXdFGqpN8mT4shq89bfjKvM9aPwruMMo5Vey",
  "key7": "nsNCB2MVfvcPPNsG3CHBcwYCXJ42cY9zf2Zb7NBKYRP3b3JegUhRKmTQBYGJAiVTeUnLDWiUAsen9iTrgM52Yf6",
  "key8": "5SKaxrk9hryPK7zVsEqXD1iPAhdXuWTr4FcGbtk7w7FgNTBKzGhzJAm4tmZWqLWmarLv92Bm9oNCbZwV5rxBd7nD",
  "key9": "jRwdS9uTcWBbjsKGzu1xRaoZersPwpAcFPwFArQyJg885HSXsf5Z9xhvdYfH3c5o4xXXPDedoFWYFU4d6bE6xf2",
  "key10": "5Vsnh3SjGG6dZogqdbhbGJrjCEZRMQxZtyZfdot9DdCruLwi71BMA5ZWxk5X8YmudQfJgdkh18jBXH5dtjRpP7at",
  "key11": "pUq3xmqBmhUCN6V3WvKRWA6LjReeHPgY9xnuxZZLW95Vi67jHCKRkjE4uzoacMD6zQw4M6xsfNdzzPFbyKTMDMt",
  "key12": "GNJ9QsJARPj9GfNXPbVpApUEXvcdccxaHKcsecKM2XeUv6eZkhNbZu9HJAFeKdF6s3B8jhZfm3AWcwC6B1MxaWi",
  "key13": "5sg3GMZUSGWHX9cJiSkgvhBuG6WsWP6i7RqQx3mJCAQnrB9HCVL7kiNjMCVkdzJmLK97qoxcZ4wYwhNV89NxKFzR",
  "key14": "3xikGBPFbc7TYE3E3Yo3Svzh1t8KBktFJVdqC5SUpA79MBzypiYEJ7trXT9RvmWBd4QNMDhHyqkY4CkKvZSr6sn4",
  "key15": "5tz5RpUSWhEFxtQFqR4Z3gRhZQSkftaZwZny1Zf828jQVFCJwPmycYC2XjNreLBpd9TKc778XgRmtnFKX3T3QJUa",
  "key16": "2n8pmhPAyCxKwpkFvF2NHDxBMfHnwkRXitcqb5kKgSWUmMsvKpc9svycXosXUwAtRKQpFpzvJbq45JrNTScGzFaK",
  "key17": "cKz8ZEo7dyA5EJWbyg63F53fg6gJFpu1GQ6YNufNiMQeVmJUrUWLAZgEEEd2toKvFtHAo9rzFckAGKMaNyerFsp",
  "key18": "4nAPR7WA14PqcfKoMSzmtxoXsYGjE1B722ThqFw7D8628KznhTk6EfoWrgmMZVC618mbPo74Kuvmt8xe2RizzP2i",
  "key19": "2tFDCF78ka6BQdDYtPLoywAcvVeEXhKAfofj2SnuzcF4w1owLKazmso8YQ2A3hXXJvQbbaRr6SwCyroaem6skGL6",
  "key20": "4PryqmPY9s9VZ2JXHJ5mpeuZGtw2pWycjCG5ShAn25hwk16tAZTjs5aEfAoqGRuQJxEdQhqk82L2UwQWdX5yEzVT",
  "key21": "4HPjDE2YZYshXJB6RzYRz6M9ZvKFA8YnWGxGmFeSonUmxj9Rfu3GaQWtgy8ro4x3bh8V6g8aZTsmgqm9WcFFBWV4",
  "key22": "23VcsvpZxytnwf1TnfNCj4wQV7DEDf5e9TdqsCCgTETEzMf5LE6jFibUbxRUD1Sgyu4TpFNV7mgnBKSGFpno5T3P",
  "key23": "4ZT8cKUyMY8XM4bwu4FHKgY4pNN9CJRb7pQHZdrxBa7X7jw4WWsq4sZ48NPohfSVRDuhZQNJLGrbhxSEidwa6fPx",
  "key24": "szF9SfxooJ6ysc51yMt8t4LYvH6QZTiEimbU17Njv5knMUbv6orL1bAuxR9wwTR57NXsHZwowTtiTFtdb8niXrG",
  "key25": "2dFq2GXnsQNNsyZJ3xg5Qu3jUgvBnauAbxSCJfMBFJijWz3SWN7aBFgdsSDd3Mmr6KN1K6eRHwCUq1XzqKYtLg7L",
  "key26": "3j7j8kvB5uGTHWdniisEgX3DR8KwJEuVBDbCgR8K5J3eugFeUiViavEkGn7BpuVRyND7CCWYNHXzF7pyxd2L2Y56",
  "key27": "3qLbJENkxvj76owHDyXCF3FEbrMLDUjm3XMBijrvULnuwgrEn1sLZxvxgWkiDwMH3XtZPUzBJCgmf9disYQKh9SV",
  "key28": "4HnAwy4rRi1sg7rHeAhErohSPQY4nz3gsvZo2c8Fjg9FTFy2LX7SaT2Kck6ogaZJgFn7zfhz7UR7MRTu3vRSeRnA"
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
