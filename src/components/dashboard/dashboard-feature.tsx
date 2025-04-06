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
    "4aauiccY5MS2e1ujmLMWqD6X6prwMMu3Ysz7ZF2cQhAZ5DUdrRgo8vrxXBx7su25QsF7obBVVhfdq6TaoYJGQid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cqWPFX7Q11LeHvNjZeMpp1fRzmLHkeje77tjmhHpnBsba7k4pmWQxQxsXJrcBbfP9sVT1CMWgwYhEBvMYP5kP4k",
  "key1": "591wBBcuUwauEtnGXRDdCjs1KYDs3tR6y9S7c65hrNSx9uS7NzrnYFnKbWRfrTzDA9DxBXMGkrRDKFuG1NcAQeio",
  "key2": "4ZD6w5bc4m8CT9Z2qQ2AwF8YTCwZojXaoKjaxjn9hME2pf6xkMEBnTHydY9uXvWyWKVLeU2Et8Vc6PgGERcqv8wZ",
  "key3": "2kD3tEinimMUYTsxWt89mvFieLjJ5BtVVxvyMotKentvuP4aFWThZrpmEDXReAmgg5AjkUrZiq73FutXKmunNo7h",
  "key4": "4gtDcPHaqhsjTiDBpTzSKrQE2bxg3uktmWqKyjbqmdKj1nyj6cVGL9RDV7BqXAzeakWjgS3sTvtn7tBb9bEB187h",
  "key5": "3QJt5oXNw79MZVZLJCC6mGxnCSJ6ELGwPtJLybxKvUHNMhGki6k6r27GW7nGgBvHZZej4n75QJ4zeVsn2tTjCypw",
  "key6": "2MR28VRz5iysTN6ncRioMVPhHPX2RpBTKxP3JMSBfWmQJpayDCZCt89okuMxy9PFJzh8U9MbmsqFGDJ9zVXsDe52",
  "key7": "57efT3TqJkf83B5by7kxK68zisf9ywcz3c6t1wN815mZxSFfUubA6s3qyFvGjfXiZ8qMqpK4NPytLLxPMmoiPeWS",
  "key8": "5TKG1ibJjBCTdRxGUc1DaJqzjuWY12CHLJZZyJMue8kwhAXU91zCkvjShbcDa2jhcnfCwBStUgyPVKzbUPqHZWS8",
  "key9": "3QKNaZqMv23wZkct5PpwJ7v3Xko6bFJPvuEjWML5mcsczLYWJtZ855ZeskWdPdVJx9YLNnNWkXz1ss6aVRWWEDwW",
  "key10": "HHcuszENDUY7sx8opRp8ww3DtCjjHaAmPkSYo2fsXjDY9Crk6gofCcqMtuaBRfCVNa3TQbM8uRdL8cP8UfeyPui",
  "key11": "3wNqdN2YX3DPHsaRok8r126MranGf6CJ6MLjrAPRkxY4aNVyjJeE9Vpdz6f125rS5s6KyK2LFNcLdfAoB91b3R2F",
  "key12": "3D868LediLuVE79rAAU4W6rXEwTSv6XXc9X7eLYSFHumJRoMApb5c5GAd1kVK1RGkdufJptntQCmsp19puhWTqk3",
  "key13": "5owxTK9BGRpFVatH5Mbw2NhNAXFzNfWTB7vuE7YtSCurwdYThs4byNkiG2kyM1mBaHnR6Utk2fdt4i6svBxc5AuR",
  "key14": "4JsoUcvJQGZQhSH8XbkMFhMD1C9x6jRbhdzzKJqG122VkoMxz6YdahTS7fFwCvRk47dqWcM2RpMm53xApdSRQcw2",
  "key15": "44Ekjj1czR44sqM9u3asVPMXCqBHsHdZpqQurckLEH4EC6BbtZqXsiS3aTsauHEaZrdQBipx89hj2xjjdmht4JQc",
  "key16": "32ABoFuFxRwgwCZvwsZvbtRjLcZgybBydhUX9dpymKfG2C9Qn8s6g2uf2uuCr4aWC2bx58PHv1NQtWdB8SUzBEcz",
  "key17": "2hgwyXJALRXq6FHwDtPhrXwEURBwtKJe5DjMpnFfPHW4oyNXHEzfCeE2wqupZMqs1ue7V9LyBxP9KTXGYfcyV8Kg",
  "key18": "FXZBg6P32BHoUyNsvaAALDrdH2U8FMLxDagfAZ49NmpUE6oJqSZZxXMgB9xtiLPGrhS7EWUFtiPN5iLsZ6hWjGC",
  "key19": "Gve16VJJt6zxR7kyCfGsHS5StCfHALYdgLWtmjpyj8ZjKRCk3Z3qyhGg6kK2q13rb5YVDV3P4LQaiX5LAY4mANz",
  "key20": "pezgTTzXJqwCw6me6TQYbvcmFWPLujDsiCmrLbLV67Vu6VUPQqDrJF2RsPLoTT6deusxsTfBYjR1FM1ZfXLowTD",
  "key21": "44e94U8m77T4uCgMckaFj5FDxpCM5EZXLasvXGCTcG1i1fkgt4kdaJLaKzciBU9LDhB29qkyzsXzLks5GfwAKWgp",
  "key22": "5Dk7VG3AXUztSwzQNMxgzRdaDgtV7gc8dw3iTLkHXPdFPJznEYt7E8ABT26pr3XXewSq5sPDjzPXPDJR5x1wzCqt",
  "key23": "2U2Q9AJExA9CboiuJYzkL8YXfUc8h1PXgJXGcaikPo4ki4YyHmcu9vdDvdKYLVhfzqCLgKmKYYnV8Cp8YyQQzGPa",
  "key24": "3xabPDrMVY8UYZC8DmuB2ZqzHU6T3VHFQ9KQ3ZBthXJgxeudRNHaesaWoVwMG7eYjPcuQRMMmnHAYRAU2a2XNAow",
  "key25": "4e8CANwMbNZZkDm6vJ2UUcJn1jLvSKgbyS4VKqow9z7NcnxBdNyxpHspxDdcoNWiCuAz1AdPqiAaKhef1Yg2SC78",
  "key26": "Xb58Qpxi2wXTptebJ6K7A8Z2eEv1QFWGb8sThyBMCF5aos5YHGk8uVSNPpA6ZdhKNZrfRJAwWDbhhwt6VFvsagr"
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
