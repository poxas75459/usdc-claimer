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
    "k9qZDXMJ4nKxxXg82yswJnxVCJJMDSrnV8hLssEj3cTgTJvFy612U2XKykKrrxGaVwbze5MW3dZfowm2BGSncFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f8UaxGX4sGFwGm6MLBFDwmGWAk32rPZxNq4EaWC21a394ygd5vLNQPv2uTbVmSZVTPYwWJ8bDh6Yk3QfF5WeDXv",
  "key1": "2LZFfsPmLxaNm2p49McvioYDnVD2UxCnssE2qThW7vBAawzdYLBKyLX21Bzruzp5Uc6JCqEzHRDwqD7HwAoSx2NS",
  "key2": "5zEjUkqRe8ZdNT13kK9Es78c9YmzSrruyq2kMJnVqwFCFZ4T4AxwnBMK73B274fCVgsWw1cxyNyZMqMMeXXRJM7y",
  "key3": "4VK9deY2ePouj56ztQUDE9sLe3zcuo6hT4UdaQCHipVeNEb71oLkeHc4YfxXm8kNnZokuwF93bQ5rkq4wcx3KdCn",
  "key4": "biZwYC7ijcAtp11UYuJqTdLkq3ucGPXicRgC4zZ86B4D3c13HGjpqbcGFxNy7t2NASbcBtQxXeZFwt7rNx3NNq7",
  "key5": "4s3uprBs4gRuRyPM5KzjtJZaYHM2QHoJbi3UqVNpkDK6hTJwSNRY2pn6nQLGRcwHrxPH9hfpVCVcANsWpByMd2Qm",
  "key6": "4Vy7eN5vBf3MY2S85wfabqkWT5G9bQkrNvXt9UYmhbvuRsddkAEXdgcr27gBjAwEBtftfKwPpsiXn9kWB6Q4KCMd",
  "key7": "5kte2LTaa3fJzq9PqqLGtbKtRtfYTqRDJ2AsTx2xjqvy7R1opbpsga7U4uKKFZFiEt8zJSq6xk7CgEC2mtJoCYjs",
  "key8": "tEUKX8hiapySSEoFf72h9HSzqUXeq8mJCxXQ3FAR219He1MW1J9dhpqdwrE9xfM1HCFhKNknEmeLLSBuVMJrxe9",
  "key9": "2UZnw2eZeVA7hHkAFDvkPDjK4LotN8N5txDg5tdJ6KcBjfDfsckbBXhSffTMjJ3WWuQGqdgAfXdgDLuf37pCLQLm",
  "key10": "5pZYFYNEwPJqqEZndtsHhx9hY8XeiGabfuzGruszuhcTuT5xZmVY7CuJJST7szAvZxyakEydnwDn3HKkV6SNf6xw",
  "key11": "ezMJKZyDpRN4d4qkr1zTdpYuLNV4nvNUmhGH1TPdVWh6J8xG6eqcdTUPXvbhafkSRc7gm8Bg3VM1kksvi9jJip6",
  "key12": "61U2RUowQR8JysPpBMtV4qv3pAHFBTCh2ynQKTvdipD6Ar2zkJKhkhhT75GTy3EMi5s2MKjgNsGVKjQ4Ge6p3abq",
  "key13": "64bvhs8RakeTtsgkJb1cCwXbNKqzeXXf2dZnXAaJCQaESTxmHAKqm3rnYWGRCdUibvzhS7AAbkNrHj3XX5W14v9D",
  "key14": "4Wg4UJontgAdwr4iRUjMFBnCfDgouBhqRBjuf67WS7Z4J8HKoGpy9FfvN5AtCMrQT8j81oQwXfw33jW2jNv9h6Rs",
  "key15": "2tRkvBJMfi1VtpoTcLaJh8WCuzv1d6CR6L95Wrc58bokdrgxTZnMe1e2ZHaki4NooiZbfNTn1CMmBCHQG9LENrSe",
  "key16": "5qiS8a6DTZy4yMwGh8xh3Z2AENJ5oejDvYZhpNHXR9qWh6ofvknrDwXvdQW2zvtkCzrW2ApX96KQf5F96ou1ufkj",
  "key17": "5YFio4HXHu7DDTKkbLPV5Jsdfa4ZQDr5Uy9XPnG6fhkDK46mXhF1Vsieu98Xerqu7fC1oeQC8c985SmB5vSagDGU",
  "key18": "2BLwhoAbDqNgHEaDo3yFdGyEpTx8MWcKHErF8PkiG4siqCjTvZnUmvR8q7AXCeuH7wVNB2QEb51wNiPc1gkTbhTa",
  "key19": "4yrkEUo9PQcLfQbfkiZzJEcQUAyxLJRMsMkkbuHPnoWQqX3m3Mkc89Ty4AGnAjYEpuLcZpaH9DUHddbeRHxocKHS",
  "key20": "2X6xPSZ8WnjYP7Aqs4PunTAwvTydKiyrn18jGEdGW1jT2YEFcZwXmRSqjoKweHpUXyJ6T67w3BgzBh7iYLgyr37w",
  "key21": "3o1G9PQJRei92URe9QVzVUoa524BaEgXGZMmR9zrs4chCeNBxn8tDSy1tZ5p8wYE8Ye5sHkNZUckzSNmDQCkAKye",
  "key22": "5MfAzJu9juMopDb9cAUwSXhSeqruZuuXyr5vqm8QbsHzGamGvWMR5eJQhhwiVsStWJx5Jju1WUHmxY2GaDPWvPRd",
  "key23": "4Jub3pYrGHb4jU5iFYbWBYpyNTAiPYmZtbYR36KtLtxiQBvtBb68PCtPcz9XbijM78Ejzyja5LTHJpnAcQB2YETr",
  "key24": "2XAw7srXtTebp1VvJvpvLWXutkcSFECMbBJ2k1nwtaa4SDduR6RFSkX9bX5nfYFQBQPQkcDLw245jQEUdJFGzmsW",
  "key25": "sENwwdzn5dSTCNxwvfhpixDVNxE32QpgVYzsZWRE7K7xB1yJ2jvJiSBVM4UVEo7UamEhR8gVYbUcHfdzu91Bc59",
  "key26": "4X6UGo13xuUVF1oZ7qzDLNtsM6SFYg66PNaF754sBDvDLDk8Mt6f8mfSWr341QN74AWb3FWvphUjJWjYG2ABpUae"
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
