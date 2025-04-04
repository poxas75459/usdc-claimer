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
    "QMogN6sm4BK2MDfnF9doLL9PjyZApKgAnc4u1bnp138uhpfDCKLvUeHTFcofhG4r2EGW2CxpujTK9SGkNUsm4Mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RgzseGwVC5inogGNsAZenXbRbqBUBXWLB9Ku5bn4C3L1fDMtyoxUHzunS9NG2Pk8rBWBSu4GMJwbXQ4NGEnbPQv",
  "key1": "22CWYWu6fE7utDY4ETDr6k8RMXkdjKrqaWfMcd3TNUju1Yny8nhHGiN8ywZUwcC3tp23MrqpajXftdxk6FYqm6zu",
  "key2": "3QhAEp62Cx17puD5gcXiFSBwkMghdineWspCoHR7uf2cu86Ueqo4QCeXvcMpAPNXdgQdwojd3SMj1hBw4Tp5KZHD",
  "key3": "4nmHQKHrfC712g9JPYcYGcwbW5q6oq5hJqzaBPAbf6MBteuTnw36L5ue9d8G7eoHNohXjggHfsC2gmadzu5X4qAV",
  "key4": "44HAAN6wJFZzf8FXn28p8Mk6reoRaSZY2PzdujA3qD98ST3JwowiZW7AygwpqZ1aaifvtJbohKjrSebukJ23V5d4",
  "key5": "4RwTE3pr2huRJYAwQbL3VvaWxxZjC3ffLuof6KGpUvnFKHXB38PEW4sP9XuLdmaJxKSZNTA9suNxLQeNv4mgyUTv",
  "key6": "3Y6EsnDNdsPxfQGn1T7U66PKEACjoKprsQ9rnBMCpvE7g8UWBtoGcdYCkHpkTFRdhZvZWM7TtnqSZDbA5AdTjEbj",
  "key7": "qdgWzc6rNv5nJsyvZnJcZirDapsy5TyuRcT5BVjoFMhhmmZcpP4dZyoVn5bVF3mQ8fAtsstsCfSujqr28gCrk3Y",
  "key8": "3e7GUCyyC25wse9ctsrBw55wqFF5CPiMz4PXQo5W8xgsMcN5HFmJ5FKk8zT62rSEyfSAEfDAeMHwdstxahumzWZ5",
  "key9": "4mSqiiNbCvUzbJFSzMHuUbnCiEFz3j1u3YBpHjoD6izYxigogUXZuTeyBGWmtqJsMHb3ve3qnHyP9rLgXFcMW2Pu",
  "key10": "3Sw5jBRsLxY6Yw9EWSuzcbByynkpvuZxy7ufDVSpX3Rt9MRXghqDyB5fSEgYzu9x4Fvi4zbqoUXapRP1jziAcK8m",
  "key11": "29b4DZ4PT12gv7YUhrqJAgnDeWBG6m7fZv9w3rB1AzaCDKeycEhpLw3BimZ4x86x1BbTeFYV7R7jqitSc7WwXyLR",
  "key12": "4GPcS6TJjQys4TM7eyn428FC8QdPzQx7LSV6mu3jKj3EeiYqmf8N7aWEe9NhgDcg6jLDn49EepUxz19ujxewqaHx",
  "key13": "3sjknpz9cBvuuG3EGZKHzq4XPFZrmbXymswXcynUsZy8XR3NauaPVmm2ruPxLonHFYUkXzVdxVbLiuEFGHeLS7bk",
  "key14": "QewmbT5U4GBUrrsGiNVdtqT81mLreH6JT37upwZ3tEe7TkmDEHLvHoiemDYYXWHWAD3H5mL7ith7kUJxLDW2Xi9",
  "key15": "3iW1yUr6zUZfsfpL41egkwvWoZbUM9VdP3Md2xWKYpefXGrZHMFM2vPPHhEs5bG96GpN66cJc2PkiYbE5nG8i656",
  "key16": "3r5CgqumPGP5iP4E6mGCVsqBY46FH7jScPGaJAiMhxSVeRa4oyHWA7i8kNH8ZjhL12raLRnuSoVaoEwFzMVkZHa3",
  "key17": "3SnRDQ4ME1Yh7sieerY7orFKuxqkvKHjNmCAGnWc5okaTqpd2tDQY3TbZrrjz1UJ2JqUYLr1wZmLBDCjg5RHq9ox",
  "key18": "sfNKhwg8RsfQyqBFRa36wT9ZEPUxxg33A1TB1irY4rettFqtjbE83QwrHhUqszQYkqNJa4tuwqdHSE2VGTFhtN1",
  "key19": "S4FpsJhVjs3cBd7mVd3L9FoU33y24ZnhvBm6uVuqrEHjDuqkgKd7FSUmHMKEq7BbxhjD98D9KD6SnDT4tTfLCXL",
  "key20": "3cQzuvCryZMkMCiGUK4VFm6612ob4ZhN4DnHR3fJCN5imdLPFYjvgLgFRsAhPc6uhh8CTfPrQqukckkGXQwTeguR",
  "key21": "4uXSCkXfxLTuKMb44NBG4daYvNxR4MnJ3iuTLvD9BjjzhAyG8RMJH8axpyGhA2DPGoBMzWeJf6oZayL9C3MKCqDi",
  "key22": "39fzZNXKsZTfHYCRehh7v2wwQNUqv5kaBGNJxB4nDTvMuqzYpygTogWJNsAdarjuD5roKYsY3LBJtBfogqLvS9r6",
  "key23": "2n1vQHEUuT1f6t32XmwKRXkxNg6wmsA5yLsidyAnUuqiMvNKFCGxcYPFc1NzKeSpQGYPqAbK81VPM1UNFzXerqjn",
  "key24": "4pWa4tY6Stt5MrgW6YBhKsPGBxM7q3pJNR6iZ2UNPzhSSEnp2GhYTyaKUtmr5vZts5UXWHX4QXPMXjw95nTQunuL",
  "key25": "2SAguHY1r7stH1MFgqGepVwZQAeunpg41rGSuwSqNQRRhrDju7LbH9unPmnQZpvRHit6cEPoJEgU8WcN8evzCwoy"
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
