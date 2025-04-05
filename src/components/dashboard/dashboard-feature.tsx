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
    "bpW5yezVrQq2ybwv4ogoCKtjEsTJgPvPb3urZdXMqdUUFxdHzw8S17HR8eiCUhs9rnFWBhGb91HZty4qVKi7HQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZ6An6nzKNpDhJ5MbEgRVsPtvxukbzBeNbSjeAsFeyoZGn8B4Zdejf7ne3WFodxeLvEqFzmf45CJSmFJxm347yu",
  "key1": "2qYmSwJ31LsQwj32chusWpywEfN3FXNZAeDky6YbML82mDCEquBQRxrPLDt9GPVn2NMqDXf9dbcx7ZzZVfB5zDmB",
  "key2": "5BY1DqaRx19RGfTFWqo8C3DMzirMVGWUrwk3M8PZCViuvPXt4pnHQ4WgBKzzKyPDgWtrYeoc2sNCkaBBiqqCLV81",
  "key3": "2xSxtg6AeZnaDvU4NXyy1DbndEm5zGrRHisU4LQgzMmih4AMupj9DKyLwFvg5Z3Avw2X2tmkG5yvZ4KE9DUExPhi",
  "key4": "35eai3h29R2GV159qmGMUnv6eD84HF4kdV8eQGp8A8TSm3sbD27zQst3TKQVbgnjgrxWeR8bahS9kpq35cth3GGx",
  "key5": "4KEpDRaMWQDQVPcdVKcjDXQBRQELnVPQZRrrmWjikrCB4WJSyWt7XB5vGgLWXKibCM5SQQA7XdnFvxo1PZRiLZmq",
  "key6": "4w1gosPLsfjgrM1SAsbmidKTEjVZAwFxwsx36JxA44JHJpxnt7UkDjR4SRDkTpvTWa6PASj3LwPcun1XkUpMvc85",
  "key7": "2HRbgPw6GMmYkGzGeyCVSHt9nkexbA2vHV6z2du6Yx7XJNxYhxYQZEjXLTYXjqy4MQehtLMUTz1sFZi57KBHpNgc",
  "key8": "w8KQ3U4XJccx4UNhPvjo5KZruZRQ8kSHSedbd932H4LWotENQL7JhJsov8gJqYiPJ6gFxt2GAHwd7cb2gcVi3F7",
  "key9": "49jkivDNS8HWevbM1uKgZF48Bkj2kpTrvDUYzjBfqAeMoMBFcWpR3AqDPCsUSpaeNxJeRN3VpgoJBPK9qB6a4PEh",
  "key10": "5FAjANRpWZ9o7T5JfPwpZd7XLcd45hS4cq1JYuux11METVDfZW4JeC9ayvMYByVbnm4oaeBpBMedzKjMPPTLFLwx",
  "key11": "5jboSjNtFezJUr2AD3fy3xLjZiEQje74s8GoxwGrfVRK689tJnwfMJbM52M2msyrQdVwa7vEQbZ7VPxBrkMyNmAA",
  "key12": "szJYpuN36ARkvcnwJxDfEAeybTZtYQnY8PFNVStjr6NDvu6XfNMwHESEFp7MocB1LjeBtSJUtPGftDDEUhfNj9N",
  "key13": "63R9ZBmk7XzXAKmfmhgy9TQ1hbgpNUr7N2CBxNgnmXY1x86JJod5KGGdmpdsHVsqnXrn7J7ThHFR1hgAsqq5oUUQ",
  "key14": "3XCB3drKL8koNkLE8Brtpf3jxvWXnrKR93uakrP5bLLkGCw4AibWLxarXSKzPUnFt9fzz15Bh89f6W332Dq3WHnd",
  "key15": "3aNN81Q4NVPeX2WeQrPfGG9WedCR8aKTwSegYNjEayjh5YPzSPKXUxTnDjcZqyGZcsQopWX4gju2xUT18Rpb2H13",
  "key16": "4eQfcSYLaan4JuyoUa63LnUKuf7zwcPHDQaRNSHrwWv8tva82ejQpuzG9ccgBPro2ENR4FqevDvmMEgAtbnktJhT",
  "key17": "4dEKog9AwnjYw18wV1FkEkfpsg6Q9Laddyz1bvjN47oeTfr5cdZ3Xob7CxpDQniHbyBn8V5QW4UZypwApStQStUf",
  "key18": "5mF5GeNB6bwyyGBz9Xr7DX425mkUoptW7ugmjGoSPbx3DKqN7thKwp627R4K9tBJFRfXQoaEscVdU5gwqiGyCJap",
  "key19": "425np6nvsa9kSSAipCc411R37HtrRVXpVB5AMxWEGQVsxMqUPvVSRFJsoUYHTBtB5d7ENzgEcKxUgof5SU8Avf4P",
  "key20": "2qFVhDykXYjqMZf1mLUW7ZvdZwFzTbxendq2YfD8rV7cgS32sqefz21XJ2cweeAnRskVEdBHdsGmw3m3b5fc6dX8",
  "key21": "3yULhpJjtRPBtFcQZtXyQt5FWi4qijM6DhJahu7UPpDsppUPFpWsXApxAB8wspf8qESWpDB86F5gfE4JNu4GxjjQ",
  "key22": "5DXH9HA9shJiD6jsdZ2FCyuNXZjvKpnYuw3mSFD7BwxkbWQsMqD97KztHvYPmTDs4mVCx9NYJbwTBRYm5XMuJnnc",
  "key23": "5S7KZKgKrdac9TGzavnZrfoQyXJh6i6ZWRLefzpgqxHQM9K565i8E6JeBBhaqRwXdX8jRs6rGTZQBmdey8XiK8pE",
  "key24": "4v66v55iLhFQWiNjbRU6Z29Gnx4tVcm64T6Vqko9ApGnwRAPrAVqMEEm6gev5xC2xupgHWEiyjmnVHZJSA6b5Xy2",
  "key25": "4GWBnkLmTKtkjH3MyxBMpWnGRjXUTAwwaZfsSRaEy9JumXX2sVoPNjCfeC67TQwX7XWf3dZWAXGKEHPvj151R1qd",
  "key26": "5Jc51BomhLAb9KRgypLnaHUuakEnDEARH8WeeXAX8hyPsJGYpScyq4PV23q4zHXEB6rTqusKooQZaXnkBRBUe4dQ",
  "key27": "2oAjTFmvbAEqmGGw9hiXxBeB8UteWcyV8KvUnZRAKDA1RVqxFQEK2rqBc21T1UGcCiNSfSfvk2hzC5yoG74uV2R5"
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
