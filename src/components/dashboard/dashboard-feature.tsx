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
    "3ArDxsWM8D5pzNYsWi1hHwU5vwRzPn6ZSKB2yixzBydf6A1mBgjFV6fpvbdiaJqLwJQTsVfgmPKfRYNr1nt1F4tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZLxjgYP4GVS66ChqF921JkhyujJh6Jjvt3snyqBVJuktRoF77qzjpLe9KZvo9ebE5mAvRfU5xR1NBhSUPg19Emu",
  "key1": "3Hx1JyqaJSvasE74k9hiSmmPw7UKYGKGMHpSW12VkU5S2SQ689GPAqaUNiTZu7oYiU8xteEeqeKjfsGga3ZZFGQR",
  "key2": "2ZxBVLTdDf1WJV8jzxhZctHSnvEU7BEr7fAgHzj1tB11ZWhDEYv466bVHNrRKeqx2LchVtfELcrnx24dMCfBEgK6",
  "key3": "4n5VgHJxLEjZAq7ypqtzRnaRpDDHoRe9KncibsxdpfsUBitYe8fBPJXwUg5CtqTsiSmSZ5VCHXYQxHEMgi7iPVar",
  "key4": "5te9c3keXu8MTLrRK6BQXNDNMFEqZXacBuEVAeDouSCqGDxKBZ1TGSVgiPanFYL8nmqi6rSSfqRKz3UiUH9X5M3F",
  "key5": "2jShrT4FM3StDAyjEy6pxnPuwBH36d8KWYoaqLbNq3ArGke598DgeLinakEsGLBExkCfK9fkkypuTHXmE2HozHcU",
  "key6": "3AsC2xXpLWE2LuA8QRRCd8LgvHvPGeRspN2YDuR8Ru1mQY9EaX66qtDWmHaG2fAfKMwhTJDYDH7WE3RSPebuSnzj",
  "key7": "2mGiiVMEAtwruYT8PFVmiHfxvMUTnJFBaWWaHZU1PX8aZimS4SjC7qvDgt9FpTtfosPzuWmnSbgHQBom7TMa5127",
  "key8": "3vQw9UHndquGS47U3vzXhY1KoESgHX9UA9oixKnqF1Cy9abs5PaF72G7yzgxmgVfcDyRKH3mgppf4AyAPY6D8dUE",
  "key9": "5QrJoCKfFrTk3ApkPPSZeduKHnqAysB4FuUjgVViQkVSjsA4deruAox38mfn4HkYHhcUefEihYGXopTSBZfkP1Vy",
  "key10": "3PkHpF3HZ9TpqjF3oesBH6oNprSXoFb7WLgxvduRQysPsC36G1UAApE675RaRb7BtgnSg7L5kRHkqnyBGRXCHfkT",
  "key11": "2EDwCCHT2ZoUrZtkuWLDySw1b1Q8CLGzw4CH1qZ41667Hv2RT4M1imFjPX8kfFEv7noVYYym1ex1Bs2GTQYGpaQY",
  "key12": "2rVw7fKSEvJYzX3XN4p3cUMKtVZKKDpUWfDWrTPLNgdRM9GQxqNy9Xkxwzg2vJw2NxffCPPik9hPtqFrnrugWQTv",
  "key13": "5HRrbURbyYwvvhMxHR2jwVKauaEnPWKSFZDiKnYQR8q5evXhYfthCHmh1B987iV3GMhQ5XXndZuKFmU4PAzGFUtv",
  "key14": "3Y4FGF7HBdruVSZCoXdVWPkrFmQyadrWh15XKiiUotSX3XFsEJTb9HWnk5fuLTtP9XttEFAVc1z7ZUzxPWQvuaUj",
  "key15": "5L4nKW7msP3BUP4WSrgNnfgr2eDNwFKZAC2M8c9LZSQwUfNbAwxyZx42cymLt7AysJSJ4cSf5T2yxtotQ5LPrMdM",
  "key16": "3mUtiaDTjKDiUmAeBHkuRM23YQrtpxDRtoV4vxSL6XGEBDbzmUkr1SB3vXtnDP5v1UfdtADsX3LBW1tiHMJfxya6",
  "key17": "4a19jsHj3HweMyc5vGPc9GPhNaepYLGaYFtJ7CyWr7QCSi1SrqyCYH96WhgzpKPVjscu5a9QVKEWncsRLSCTAEow",
  "key18": "2ZgwZTLuW8BtdinXLq2TUxh1uXUicYtRDWVjSSGWXRYdx8ZggBi3WkqbW81yDPHiAYQXJADc7kfUR8yHXBJ6EYLm",
  "key19": "4JSWwzZuzGAruEUFDvDrZQuGwUmez18A38Zeqq4xNMGWHcdxFYHdwLUA2ZKroDgFA4dEbLeTtioQ3Nf73EjMpsrt",
  "key20": "4V23kBssDBGmL8DY6aJWRRbWrtnhKmxrukrH6wtVjghhBkpW81Dm3vwB3ymPvySTYQPhHMVqJeUVwEZPqfVZJjPW",
  "key21": "9BYnXqW3u3tx22dYmqcQWSixfRrHnh59PVAwNroqzEJ9RbP7PaJPatEYrpCH8ebcovjeLnDzQBPa9Y2UqxW3vK6",
  "key22": "5zwn6B1N269k2hvbyP9a4KWa2FfZLrKfWffDEEjyWq5EKvN3amfhF9aeZm4hxY16gBtu9XwkEGwxfXzYW7Q6faXN",
  "key23": "3gzGyAKrxkXwcqokJ339StT8gmUwgH9GBn4Ka6fVW1CjAQtfKXxUUbqEhmLgyvN6AzJyfyKeUi2EpESZHdF75u5P",
  "key24": "4aQHfHdnXJMwcj8gMhCa5jFduznjbnvsWoxtjoYxuSRdnyuPNseRG1gWxdFEnhSJ8FjmmsgR5f5g66xPNprXdh3w",
  "key25": "5kpDUfxGZaM7jrv7PGoTqgvmwzjYHJrio4EsWQh3zKBvnZLMnP44M7R8wJiXBkVzkrJRGqEEaHHNDLHc6CDzAZA5",
  "key26": "5eduPReeMkTQ9kgAu8Kzk3M1LQiMx5fGhNxbLJt2mP9ZQM1i9aGZqEaJLrTbgtQwm3CyEgNZg7LcnrDski1hdV8j",
  "key27": "3drX8p2isPho1SLF6xGVMwwLX9YTLQoi7oV7K1tNyzW7s57U5H4VoxkqyRRBSLUjo8MaE5kBTBwirJe7gfW6EZYW",
  "key28": "NkmLKESmGuTyHWLSVyXNu6znj6BAojSLfbftVvrb6EfVxKfhXVdMcG6R3AWgZ97SQHcgzB28wWnaHutTNYmeaNV"
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
