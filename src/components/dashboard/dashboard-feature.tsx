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
    "5Y7vZnjqvXuphkYKrzhmrLptYunM2RhMufvaVp2RG2UtMzEXQvxxEqFcbiVQib1MzJWLm38zZjDf7k2TupBFg6W2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bjzYhLgQPNo6AXR6MK1zB674Wg2GoMBpQvzL97YxTk4xLzfQvrTKX5Tsz2osapmr44M7ceCb3VdGYHNwebZXdxC",
  "key1": "2W3DjmdMrz2bULHGagLiN2aXVmxnsLsZPAoFmn5KKiLEzZD2UcWVecBE4ba2JxK7cLpDMbHZw1C1sGY6f29UHoQr",
  "key2": "2aYaJ4kawVfGonRUQ7ALUQfkPZUeY9Kep7k1nge4o8haU4APj6QXSKtKS1R69vSXL26f2Gd5wDDZg5hNRfqHdFUS",
  "key3": "5XdHL1Z8qeAf41DFs9WEbn5SUHrEZnCy7d32ScGnMhSo3tVjunLDBggKN99fUiGQjJan7JnZ3KUM1NEXkP555dpC",
  "key4": "4jnieWWnpys6Y2xVrtwnkZqiXetMNDCuX2Xz1TaVmT1j33VS8gUUaek78d483Yap9e6a6HRsyVBPdq6XJqYyUumL",
  "key5": "2eX2ajVJw7rJUibJ9np4EaaSi8aQuVWLVRx3993stxQ8iDCkkoHhHeZFmdmnLRTv6kF3qX1BMcjCzJEoq1GTcPsK",
  "key6": "ZZ26ENUaA6P2b8wipjXWVPNebvLApWNY9hZr8oCAaS6E7nxdZupHdswQ776JUHAM4qk3QXh8SyFn4H1SZ7Sr8s8",
  "key7": "34keD6kaH4qWU7ELYvBjbpQkNZ8tScxvpuD9xPBNacr5Cd7vk2FkHW8vpJXR4UApPvD1Tj3be4HDbg44N8A5dgoW",
  "key8": "56pmBuSumSUMjKRwGrFTNu46dv7ek43D4nDdXe9AGqQp7q9qHwtMZxRPez8ELaLf22DpBNmcnQCedMfNjBknVZVP",
  "key9": "2qogaxWsaWqxSJEPaXd5Hj6EmcSXzoVS9nk9onx2s23XcSSphD3Yyo7KGhXK6zbGjGr9pQiAaH3e3vp13PdPd2vr",
  "key10": "2Q5sFAmoAeqFee3LyQtzRv1F84U54MoBQ1tph3D37cgFW7BZaxDBUzMtFngGHj5HGfy9AsVFf1VGCyHwVPKrya5G",
  "key11": "56nefxYMXJr6hURik7dTxPqDrSrXbRMatQKQS1AsW5M54tJh74jHhNMaXtRqYNXxqZzxv5Vm1VoZqALK567wj8Zh",
  "key12": "GzZp9XfzDaq7VTrxb8x8ueozkSMfWrMjJpwtsDuCEjpdDhrs4PCS1KV83CYwvkM13z2NyEJ1GvDdmBAQPVWK5nD",
  "key13": "5m364oRVXLdGhoYFoRuiReN5JNrepJBJ56TiyX3N33cDvPZtq9PGUP4CdpbDr3avUWquGmsiSZnwEetayC7Lk4F4",
  "key14": "2nthATxfhz4T2Pn24xZG9FcRVG3NJm2QMr5jRr459hQLrXHoqNvWiGjHJWCPurHUuDKMfdCmwM3bWyAujKbnneCu",
  "key15": "21pFb7cRzB5Qh57frkes3aAbm5tzo8cSteX4r2PRmAGjFefBjxUr3HGdZdXnZn2piS984MTbCvLV7NV4pPvds3ej",
  "key16": "5gn3PSw1ZftDKUx3myvViQuLsuzhYuh4gcXctBErcFvuaUEuF11xcedJKAjhhMC5fJNmf57s52fB8n2yaJCKrscK",
  "key17": "25X2hyHz38EKEe1XoNRkS6gNhsoDmHLy4xxSyL1wRZxrGLWDWdGz7HRzmo1dK5qHLdSFwW7Xvv31AmBUfJ7TT6Ue",
  "key18": "3C2cCYQEJbKjypKhpeV9oagYvK5fefyAH2jUZ61GXkaw9dDJWQ24LiLxJAWrpfZcCoDQg3NYEbTn1vAxYB9FWRmr",
  "key19": "4fNibTcQyS7WDzfnB4bLpjvaWZe8tj3mbLzFFFPbJT3SFwRj6XG8FZakCB5V17aCmaETvNsEJXhCxvf4sTGPw9f6",
  "key20": "3XFkM6CLr5XWgcmCS3Con5WX5z4QChKBxYDEBvepNgoiDYwPnYyPx3VkG6jFZXeRVY6xW2z7KH9ifbbAJASqa6hG",
  "key21": "2NTvEvi7ngvukKfq87zKKh6Ef3ZaxvvPJwz2Saad1Fe4wp6JRKG1WDZptNJ26yTY1suTcn79u7TjwatQDZzYvTf5",
  "key22": "fDfrkXodJyjeQK1pqrVMST4P5Rm522oqApE9337nqJLF4rxiYr7DuDcwgSAMumvy5gUCdTQRL44rVGbpQH7zHq9",
  "key23": "5L4Xcon1JPAoyFBhYvJZGHGNcLUs8ys2kKZdn9umv2WVT424z1u9oYvCybY19ukXuz9EmNUcyRDkvL1LQJxbPGN2",
  "key24": "4a4vgdskCncupGiEq2fxDrB979NazCMbKcufWryEGkLD8Ys8CvZCq4dSx4SFQWh7x8zfcuLCPRELKddkG6Tc6hoH",
  "key25": "GFyyy7UHKqsrzXxgtNMasShnuqFkwzRrztcuMtkTQbHL8HdtgKvdrgPmdfgeQcK1yAHDbhXN8XNeFSknX9jWH14",
  "key26": "5X8UGJ7JYDtPN43TLjpf8bzaDPvqrwLEshZGsGoBiPgx1dt48BW5cS4cr9LMHZTBufWkktz7UJa5eVAUaupD8eqG",
  "key27": "4ZkynkgqpktaUxwXUjVw8j7JfH8FhuS7HjVimPxq8Fb3BUJecUrpUH6WEZ87dScmjNEJdU5nkj3QxCAYp41Dy9RP"
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
