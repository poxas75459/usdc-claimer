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
    "8idezhAw8pKV464zMHfhmsWKz7kXLySejBZJnjdpMBC55BuCuaxPV6Dv54pR1LbsiMP62ZVxTpkHskemhnyNn7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMNV9qx7SCpekS7yioCZFXDsDoXLH2mxgcpcSqXCYDxnniX5abb2dj7sqbyKdVL3hFNnp515C3zKVDKmxdfzTkG",
  "key1": "4g47pwDnvsb3W4KUuuGHi7c8xTuSnAyWjN6Fxap6T9zUTcR5isnVJ4rrvj2HnQpBTg9D2W4mwAJBX1kfT3fZ3cYo",
  "key2": "5K1F2G4VqA3mmzgUjvv2wdbfpeuHtaaLG7YoF2dBrZFzGMGx7iQ4w9KjYZaGbF5JN4KzCcsUQZsdLwsXvV8eAos1",
  "key3": "23YRbxzaeVJCg9JdEqqZVkm4Gn7Tg6poCnt7hZNuKycGYakX481y51jtkPrvYP3nAqpQjUgP2uwqdinLixM4JWMN",
  "key4": "65eGqXAjSgR1jehTvgKjXyuLMdjEUBGqFSnRUqbfF8g9h7RdHXmnU7w8NXWDWPszBYmzopnePYFxbc351zgXbQ8e",
  "key5": "5o8DAE89rCbewT9PZQJmCGFd9yV7YqWavpZkqVxfztDvLZA2AHhT3DpeajWApc1UdzDxsc9pgk5oBt6tftVi7fie",
  "key6": "5KD2fpXWTSfdPJHBnmKiZ8rSuktBnUWSwTU2enGmPUndm3huHpeStWSWAHfEyatPYxvTnHJaULRoB8DZ2HTzW2pP",
  "key7": "4EbVx8YTkjizsvcMoWQ4ShQ1gmdfNRyjF3tkwxEJjpgqcoyhdmRoJDqYTFBRAVyDQf9et5rjzUWS3tJjcCh9eHuE",
  "key8": "5gsrPdzuXScPK2iFQT9Gwhz9vR67sok22QJ6vPxv42zEGNkxNjc68ReEtYbUNqHNAp9oTsanYS27NZXDgAQoqS6k",
  "key9": "2iPDVGWD2JiLya8CTvhW1fY1LghXkCZeu78w4hTszWaZ5xCuE1WuUMEhSUYkjysWKLJWLxMVByK9LPRgiuQFkzJK",
  "key10": "GvibS8V9KSWpn1k8raRwpR9LuQVFnBpd3Gpswcjd48nWy9LVA1RFVsTWC94uWLyyyubojbKM3W7jEi2WW9EA9Ux",
  "key11": "4TS8WLai5feveeErxNpzHQyq56deW8QHJoSFct95xCRFvMbdrFoHLFr8tctf81M2hE7c7PAKov5d85mPcCDYthqY",
  "key12": "e5gWEMgr4SqsfRoDDehh1tGVY2PUvmm4TLtD7PFh8YwgZLT2umXvKBr7wA843z4ti7J8W1GctuPGgumd2UAiRFj",
  "key13": "313gaiAWK3uiXzkdA5vsMhuBpgkRfpwLRxhreCeBgDCg47z4Hfa8pgYKtNhkVZgbyq7trJw8KPEQYAgFT7ixQGrx",
  "key14": "4MQWppDjzY2FEfZ87SYy3cPBFXQN5qMfCfjiWC7eJFjjWJ7ouqFBxE3WzeGNfgyumAuKgJyJK1jNjMce9PnZSZH2",
  "key15": "41wZwat2B2hRQX2CV7GBLBqU1q1JPbUzrVcESn3R5jDigGSwetX9rnHVXpfHtTyjVR9t222RKPjrecqpgrkxaMJb",
  "key16": "5CNKK7ftiUdD1aSP6cq7EwYzR3WX3EnqrZeStU5zAeYexto5jzuVxTzt5oLEkc4wVihPMFxLCTFiThsJ5EKQo5DX",
  "key17": "2L44w8qT5ka61fwDyccdiRRxXcN58ahWsHRMeaeHhSoX4VbvbQ8LWw1wZ42pBrXaoj9YAGzg8sm9ubT7AhGT9LLg",
  "key18": "41vqMwvMwCeA4oEiw4Y9TVYNHprNg3D48qYu6UUQMUqLdm99D4yojSAghSxLL9yMckuJdWfP4zo3rwzfK6ZZ9X6E",
  "key19": "2oxHKqT5YQS6i2pKvuzSoFDamE7H5Hm1QzPyCeZybf1N6bPAZH2HiWhZ8UiTU6DGaAC7x5yjiAWXQchoPcRZGrZh",
  "key20": "3fH5zYeJuV3V4BNEPbtuqBHxfFb98ymNUurscbgicJvoGh8kf7HLwsyX65viHWXjFdJsZymNKGtRk49CvKfKopzP",
  "key21": "5A1qiUHzYwfLkkeUrFheg9v9Xgngo3xWw9Lye99S1V5Aat2AXvnpXxQ4FZNwdbhwGCSnK3a9u25G8v77uj6wQvER",
  "key22": "JewCJGuxk3UR9gdM2HD9rGxxmNjWSeybz5MQyMc62hDwPPUp3Sp1zuJNnM2XVygSAf5Vm12z5RE4Da28u3dELLt",
  "key23": "24rtAtP4dDo2E9AatcAWpwvhW9iKhxjajRD5Gu1UCHjRLgNDWvc9J4G4TWW95LGBpdJnHGfjm5RenjC8xrEYxe33",
  "key24": "4Y7JgxCMJx92WdK7XYbp68M2KpoapbJv8AXTtWJDqxsycLU93FVJnch4KewGDrTe21EFRbk8srCykNi5broPUST3",
  "key25": "3sfPNY1LUGfsu3B7WTeYJU14RdJhu8zX5MnQ9MguBMZQq5ow2MZjbTRTVq8Qir1uSnAGGfHPxvmtoKH56BbwdeFy",
  "key26": "2s3yEFC5rdMy8sbM9EUbg4G81C9gmPrX1cBX9HHfYkAEVbq6c7dMMXWSQbZAm5ZR6gBTAhYqymQi1NuGn4XXe2g2",
  "key27": "2zXNrSxHDX577zyen6HgtSGc7tzDk6tJAj6nJjKuARSDdRZfyFWmgzVnEsfHS8QXEQFrwMorPcGk9BfVaKeZZheb",
  "key28": "5XBHBNZTDt2BSmMrBMV1T4WDkS5Ym5YKbciXBx7hG4i7jcwgfhDKZczXhEoJZBzYMfv85SQUPvAx82Cg2LD7si8W",
  "key29": "55VCeBjtDyeQBp44FqshitfLwXbwNQKXEMydgtbfrRL9b242SU4mmirW5djAKWM8burdxRxFEJH5ZbvLpFEdCshn"
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
