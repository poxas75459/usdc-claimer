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
    "3jVFbvTzWT29YsWEkk2myXhrkFS5r69kt34SKMqhDecmdaonGbkaPA1AwGzkbpEwkKm5AEATHeoetvsgEwaHQGAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zscHEfQjKMXJxGgH1CQc6zwch8mRY2MKN7FDvQsTAgXSBXjN1KA6v9quoRY2zkGeR4LmQDGSaSfLCuNRQkuKquF",
  "key1": "2rxzyQskcP9KJFasay2aFyz8FLKmXopekrrvnkf1PqS1LAEuruzUjJp2UwJM36hyRHLGUPrmzGwfz6bjTxsu7JB6",
  "key2": "27bzzc7AykmTNsNxwsftgK5eN16RnBemRfFVvxDGX5e1t8StfLTSBYhb1N9JgDUgW7GwBNpaiixVx6VpDRToGdTc",
  "key3": "LVJfKrzaVjC5ryEohHc1W5XCniFtDE9mCQfrbtQfwb67pkXNh9PViAvhHHMVbwQMiykYSdNC38LoA4HVL59xixB",
  "key4": "3KeoQMT1WUSoB3kjv2971pAQaL29aFui5fsQ3pJE81ay9jYSzer1kfV5BnSzLhvTtgPr9MdmRkfh3fB1xJDMiyyS",
  "key5": "46Fd7Ut3RXsApcpaRKYYE16YK43ikZjNr7t7MaHtrLxS5f4bE2x5uRGsBkArcMTmCNDGo4xTjmZqQxgWYq3uixER",
  "key6": "2QKmBsawJ5JPrgRjzrZkhbLwfDkqF98fQ8UdJGLSxMpKg5QW812oBpHoLYUBPSitKgzwYXDNEWidjLWskjZBHRCS",
  "key7": "4HfpVLRUqMWkuvfnX8EWZw3qntAbNNUNXo7EBRx9eATUWQfrfLVyPTVKLdrrtFGd2qbYc3PAjqGerBm9xXxw3WUT",
  "key8": "4f8SrveHBPuTpyqng9GKRQr59dMjuyQYcgDjV4vhkZmnBgnSx111uVVMSeV6kDqHPumxpbDb8uWFGtHYT37nFZab",
  "key9": "313eZaJw4WeUo4Wq9DTdwyn2h7DV8SxZ9ksXjbwfqgimhk4Ke9VcwgfR48TEe6Ag9TgAF24uRJeU1SbAE2Y59tE3",
  "key10": "2f6hFzBAg5Kz7xpsJegfNSJpPs81bYLztPJBrg156EsexJz3RDAGXyAadPk3bM4ezYmC5CzvU2UmR3ThS67e1vwp",
  "key11": "RcSaXqSPNwytc9szPDU9GimuTB7u3SCTb48k6RAJHd2scHsH5h7k3rMbqGevkfZBbScXf2XzK4eU3ANUZbR2WY3",
  "key12": "53qnaxBNh1DHBS5W7jH1wqkDcWiq4M65AkgGYTZVHJRJqHftJs5xwLHoTt7ZGxA8MxaehbDAqSya2DwrKjo4JXzk",
  "key13": "2NWGhXgM9cdZoWgh9gkTcpuaPwGTJ3RXtghSDkbYXLUnCBiYFWcUgqC2qBiryy71fd4KTwmCUc3BYeApshym6Vc9",
  "key14": "m1o1afbsFwy9QwZoydjpERxvRNVA47rMXWZC1QjmunWqHTmUFomTHmUQ8GaLpXpJZheFK9dr14XKmcorUtPmFpB",
  "key15": "55V5zpGYs9a4Ykz7ETjA87xodXz4ocPVyEeNwitbgRp9eRRzwhQRSvX1FtBGHWsnPyK68yRg4RGHNzwdYC8c9D3y",
  "key16": "2fngfPGjZoTTN4sv8mkUE6z458QB5XCpQQoGWwPJXLCizp3DTRvxT44aBgrQ91yNYFerQAtxB1nyNguZVwXwbNLW",
  "key17": "ZEUnNwYWXmuvjURYXxHrJFR2Q5biYvG4ZufsCVa3QATUYcSgzUz9DaqYpq9327bgHJFmTvCTKoS7oT1NUT3Xusc",
  "key18": "5SnGQm97jvREASBapg8QkhkwQNfNnKGVM4fKCcua3m5Rgtpxe6Mq9dvSjFwbaLX9tsMsovnLkArBy7kjyqGryFsw",
  "key19": "49LKM1MXRwyNyNWDDBE1gSku7tVK2Wu8aDoPYPBaFTmNRokwcJoASBqRp7jyJJtxXjswYJvcPSqNh27dR1b1fgJx",
  "key20": "2WDYXWYy7p12Zi1LHykzAXjYRc4PCJrALMBhLu6i1EJ6csxiJFEeeaqC2D6SWgLMSd3nZApYvtdfyEuvPSdnzvYa",
  "key21": "U4o6g7fVgh2qKcgpXYwFuyBDZ4F8mjDjivbs8N6SFgrpe8AyXm4Y9NGWgKkBLFyxpcFfWq5vCYBGatRBd5iLBVN",
  "key22": "22UtFH5yw7AECpvke96fBdg4ASAbZ6m7AjfQdFViJHX4a3z1y7vUxmMRhQBqA6qgL8JapTGro3iNd7XqzmvwKvSC",
  "key23": "4LTxfexocEEKbcbKRgHNyBrfQn4jVb9CuybYUoUgnztwv3thVaQAgWZApNfQNpurVYjSnFZD95TbU6aoLQQCeAFZ",
  "key24": "63sCTfsEN2HhUpLDKATKLmQk36VpL4h62WHPaT6Yo6pnrzzdPh8tHBDRvgKN4JyTspvWcMfABgmFZdXiKDW312fa",
  "key25": "4h7x7bRY8x1MzHhSeEoP2rmECoWefyweJzXUGaZC4zRHpceRjKypBgnYfy4zkHr2Azs6HrcHzSphiEkcTTCh2XHW"
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
