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
    "3sP4gWtYxtQWmeRQRhkp4Puetrs6TSSjADiAk5ZcgqFoFjwYWUGehgojGS9tggD7mu3mwwBMzsuCaFLNp2UEESsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PfCdro1WCirs3erRimxTykJrtohEK8bTWp3nPbVKfjfwgGWsFcVn2qV95REZEGZDaEWcUxUveHRUbh4MBY9qqoo",
  "key1": "2HY34VTrLxGcfXUVhwBStmdBuwxdSLS5SRbxxLhGbpMHBL7wBVZ6uWYkjTeKwgxWvquYUmz6kXrQaYSUmovMSy3h",
  "key2": "3RW6LpNJEUSECAPhiDhM1CnDdnfesdCB31JHyMXFX9JNxheYgc9goTKSMqJQvoPHxTffdWFws2hiioFXwwq44MNc",
  "key3": "Vim8DdQvrTc68Z9TLYNTbBnk6KPKjhXUYvmbPj93zc96RRdAHDs6ZNqdvpNoTh1cQDsfZGCFiBVzVtX5UQqEdvX",
  "key4": "5cGxuEShqsDRdbwisZsjBGY8e8q1U7b9rYyorhx3wthZ5JFzfJSGyY7rfRSbwjGzdF8Ewa1PU8hANRpKrLCockCD",
  "key5": "xmA8ZxP8w5Sff3hw9rypck51RZzcoeQjtG4hPPW6wiinHj6PiQHsHyNFficjNBbQpxprbz5sMZ8QRLnDE7Nu32A",
  "key6": "WG6ewgFZa1fE8o8ve1jsoEgxjmjPFXJp4dZHJpG9hpfGJV5yw43Z7Uzsbh3YqiEC3rGqMZibr9TMAz197GppPjc",
  "key7": "ziaErCYYN8GnxPHngVoiENx2oD98RG7RSNoaFzCpnMY3QkkBgZKnaCjhPXTJoMgaF6gSfzZB2wvmcYbyNj6CwK9",
  "key8": "YCTfvPxex3K6EiDqDDTmgvumyR2hMY6MF6J7sBWS9pYsZDjPBQdmWB6v7CNFYFp64K59RbXZq7Z7afxHvHPD7qY",
  "key9": "4EtAmfjwfXcd4dqfVKKHxoRQoQd44EjMZG3oapuyPUerMpvhDBoimmrbu9MBiVSFcgP9gyjQyG6JxtPZTW1YrDu2",
  "key10": "2w9kVRPJgtivHfg9YcujwkwBxivFNAEEay7wc3piE12wRR37XPUnPfiixFHxe9pHNBjMvpRpF88gX2EP2U7i9MEa",
  "key11": "5DeKLnH9onU2uWyT85tFdyWPNn2NK4XEzMWaw53y8yV5GpGx87jCiiDPThrhb3j8FRWPeKAkPQGHPvNNevdYeX97",
  "key12": "2HR92QWTwfjLfdua58B7LjFUeNbHcfBWGpbJKuUbgenXENNeyEtkmBtL6FkXoE5ZUKkv1cVM9sVBmba1R7Hj8BoY",
  "key13": "28zp6y57YyqRGpuePKZxHN7hDQbVonBzSeSEEMs2vnMJ3ezcWJEskXrZvmVVWaCyDmpijH1RhmFoMQP9Nosc7Xt5",
  "key14": "25ZvJ4SEEBbegZhV6eRTc2UWknAT87TCynJiD45Ws38TnLH2jjbJ7siMxpSLv4jBGQfdPUrpz7CMbs8sgjGZQb6g",
  "key15": "235abp1svHGa9wRvvk4giAiYoAUcFxhpY895xuLPP4YthUWDxvx1V6TWwxyBq3FZ6MyWURYk65Mco22CszL1C6LK",
  "key16": "4LibT2A9e3aAy4NhnFpskasirrnmUPqh2JDrvpaXXZrmGk8sq6N77Uq4EdZnvT2crUK7reep7ewKqzyuSZy486oY",
  "key17": "38zD2DqgC69VXwWoASiAKiw2tYFaXifcqCNQoBkvY53cpMbaXX8yZofAh699u9ygzKSepF4j3tQuwkQjGducHLBe",
  "key18": "585f1pj1M2wVKgi6tX2MuaD7FuU8G8kqn6tS64c8tKc45LKMXNsNZQnTZwDEDA6bto3Rdug4dePM5i1jRQ2GsLUb",
  "key19": "4zKrUXryS1jeTrxGM8ZQid27V7qR78fpmGxJDVVurpdCXhEaa5YDGBoVfKerovKD4yw7zA8Stss29kJbaj9XCLn",
  "key20": "33eVTA5nxQVzhf5fVYBMpUo3Vime123pawsrRCopALYgVVN9wo4TZsnRFVfGGCzY431HrTSA7Fx2yjJS9ZZ2B8es",
  "key21": "4xqVXpEFXCcbpaf4bM4QvL88QFqbLYunpFjj1z77ydwFgFx6Vd7mxoZw3fVszqTxM9F3T8q8uGhbZUJSBDhP3ct5",
  "key22": "3nprkpAhw9KUrnTiDJ7SWqNaaehVodcJKmtxQJrojW3AiDb8dJdrn6snLn3aJLQHevYWUK1s6cb9SCns8MDvYjaE",
  "key23": "AkgbtQNVfrtQ8KkWVeQetGx6Y54NBVh8zyWBbVyoSu4k1Cq2im42Lr7vKAR3wrgu7yNzm8QzvAj1tchAFXCKCL5",
  "key24": "5uZ2irrwopnphvJ6P9XV38A1c8xGm5L6746SYQmWn5rVioXY6KcQ6DU8N5hyQdE5LaY4cfkWjJj5vogsL7SUjhnY",
  "key25": "4q1VChGjjAn55RHjZByq6cfSZ4v4vD2zGuCzcfQcu3CDsxc9LK6BqRiwjxNqeBGvYapKc7AMK2qtz6pWrrayygGS"
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
