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
    "4YwkwJQzRTbnFvXkv92mGErTz7RvSLNxqsysg9ngyrrZib693kw5eKT1wS5tt6ou5hWc46kcbE52c2LgcsSZ8NvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FUCC63YowRgiatPFa5B66x9BiuS4vVQQtmey2qCpo23MpZVpuKd4P1KHghqY4xBLB3bY73cgrb878BbbNZ8gDf7",
  "key1": "5LqpM7NFhe98ezyHcAjXhEqfQvaxEZ9Rgr8GjP3MhvGLiizNC3RkZWXbMVuNvCa3HvQs6Cj8eeFvdSiD9kBFNnXg",
  "key2": "5Z1NfWk9XyCRDnTbD6jPnoPiNkBwS16obsvuJ6zKtihQMPQypoaEt179rLGVT8haEyyDn7bhwXxeQq9r3DnLdfTv",
  "key3": "3bRZ4mWJCpZAQkN1UFdUFMNWXvsJcBvQvxrsSw35EreaRdxkTbakCcpeR5Ve2ao6vPv4tfZBUfF3YtnU5QFQvP11",
  "key4": "PBFn4hjqxwaXdsAtKNA4U53BNQ2bR9HkDxg7dZP6ixyrvp3YHgcHqDhBSg7hFwqoY6X9BJrKzovxoE75xwf2QTv",
  "key5": "5pwugucdsT87yLRLXvZ7YHyhMdmzFDTAJ3rwhPh8w4eTLDz2xPCvg8Bdc1LSwMagAQVtPqVnt12ryTDLGw8jrvpG",
  "key6": "4LVyB9uAB9nZiXYavU3NZ5RQcheMVAwqAmbojwJoEmKh9EdramSco4fV4wmB1h46TkPLK2qi6RrnrBLeW7dsLNnX",
  "key7": "4maFFEszpHsXZQRs33fpfjdNWPKZXJHawu34aS8x1zRQ69DG2rxRhBMEfgT3r5qMUzm95GMB1uST2YVnmmjEB5Vy",
  "key8": "NyfUMLvwZn1wk4wJvc7XDornKZGKCjRY8qVUDa8Hwq3ZXTesi8KFWCZ6kUh3wC5nzfW2rxNdct5bAnQoyXfmBEs",
  "key9": "2fS17D9QTeXr9choBzqMD1Mppb9z9eMcTc8zXmxBoiZun7FQEpJG2P4AtmYRH7Wc9Q4nse4cfD4DYEHChydS8DsK",
  "key10": "4FBg536Kgc3Pwow2oNiH4M2kPYEYxDum3fubefYDw1FC7WuriGkVUzLsvzHTdSJWTkY9tAyjtsQqhZNRiR2RykM6",
  "key11": "hH4HX761n2AFZpD19ZvdDvzGovpnQM9GGqeoX4dsVnC4KfQ8y1xKhhjGSDta5vhzvd7iAgS6ghZ6q5GoZhMeY3E",
  "key12": "3MU1yEcNATMTUecXwzkiTdqSvS59jUk6Xf8NS9uYmRpWGCtGvz9uYk4Bs33Fojhb37hSr61za9PhbogMZ7GmTanW",
  "key13": "3jD6aa8zsqwWBHXASBkHMpFiHyxvvSNeGU4bjmNoxzANPjuePMbamVjYEV7mm3cmfdsZm3Ed2Z98DLxXXCTHUZWa",
  "key14": "2WQ84VfSg1eWsGasjAcMiiYEHzBnDzqVWn8TkHJscqVd6BPwpjJh2uEfZCFybU3C2xEd67G1N2zuWJLpM8Xe9pPA",
  "key15": "DV5ihFMTGkohaLxBvGoAtTYiy2qRUx8FggWf5K1GLDz3gtrxpuLaLxdH3ShTMpLCncVs9GtaXoY2s9tCay1GMJo",
  "key16": "4nE6g3N9DdLX9ffSHJepmoLTz2bdgkwRHuUS3YYi3z1Jvn1HpS4HvqTmEbogDcczn6TPHGQirfPqnsnP5txrhPY",
  "key17": "5Lk3DDgAzH82fKyU6S27zwtZnyprzgRqQh4CRgBbKMLAZdZ3htyWN4W7C6NkHy4xKjzbWq6fWUzwoffgoZeR1j52",
  "key18": "4LZNc7RH3Smj7dZ8GVFgnXPsjnJQdJcLJCDYBNVyHC2WEKQv4kmB6VQq9SXrxk5PEFXfpB54j1GAB6sDfmZi6tV7",
  "key19": "3MXbASZ3sSTAPTT5FUPWFXfWQazW1Y3usRbAkQPMbWUuRxnahQoArWcyZ6riMvPYoRj1iVQPgNB1fDDFxcFpb1Pc",
  "key20": "3D8N6AasoTvgH4oLdjnT1x3ZXTMH8ubb89i9gFWM85DuuzZG5bTBt1TxU7Yje8iJ92uwihC1D3gM9MbvWgvpXV43",
  "key21": "3Z958Ai41cMcZ1TeTu6vtyjpN8M2zTyjCHqANP7NGMg4h4K57zR1F8xutmHNTo4ZjBf1cof8fiv9D7AWys2133PT",
  "key22": "WHrhnA7iZXXs3KcEePcupobmzzNoWoCSwo3Z1tAyTubbMJpAa9NhW6QU38TzKzY1prwZX5XvRG6JB7JDjQvBNi2",
  "key23": "2eC1FktXShtVAUC3nqJESH6B8Gd57RM7YNJ56YG56FtY84Tbkt7MEk27rGzXicSPTDZCWyAQ1sudJ4GZAghaTdeW",
  "key24": "2iKbUM9KQM6aJPZKFKHon5f7i22TP7SgUfftQw7e3aJbjiMCbhQbB7AqLhFTCzodsxytSML1GzokSUyxinMWQ64f",
  "key25": "3NeGj913HHiWC7Q3JknMKiwo5Jb2yg3cV6osXvA1kFr73DxZ4LHwTGNDTAhZc1jb3TEBoJeX4PXyLh3mKMCPJVXJ",
  "key26": "GPrQDZAFddtuuEMyv2gLpq37MQdPEbpWsjnL8X7A7BQjZuRNBT9f2o64vgVDuPCVAqrvk2afSeQpZQLsicjKYG1",
  "key27": "ExtZP52ueQgLEHWS2G6MCVEoSC3FuDTvV7qRJdVrBgtawE2xLYFrDYVzQ1BkMKtxqmsTWwKWDsJr4szS2uiohAv"
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
