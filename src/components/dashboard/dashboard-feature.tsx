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
    "33VqFDffqt8xEVdcPKAqGGB31oPJjqnTxJmi87e6gBNwfcNnLihAQMk6CMuNVEGTHA2xWrHc1kJSqPDMJo6sFgY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wjFTuVT5YqsNDqz7nMiF3gcGJJHRHwPtConMYPMop2TnTdwMiAX2XMnXYtmV4X1Z4u28dvrUNDrUYVK6YkoMwXP",
  "key1": "2AxvMtFjpkcY43x1Bw2w6zCw1DN9v9fq6uJDE1k5oqEwGzxCLc5u4iACwRSL4DwQbxHgGyNRh19iPgk7GuvBsNQ1",
  "key2": "4rwe7CrEh5gMtiN676DfXEjxi2oCBi86iwCQFWP6UY1sRM4Vsy2eqPFtZtnZu5cvo7KRyeZDVTyGwXvP5kutJeWA",
  "key3": "33dVwGnEc3MWLogaCbcewsXv9Dkaq8p71C6pYrdg5QgKzPPxnGQXVghUzJjemWdvSWuxJw53V7niyP5P5h7NfZNB",
  "key4": "5MGyb7LUJypeqUGyHAkNx91sKDhV1ynmnX4ezFAYRUoMV1cuUc6vfy1QDJj8RNUYYC1wRbVxJ7SkQ2viSYW7MLnf",
  "key5": "4quJrDdACmSKkW5QYRnazQL6nxUKEwHuWyzH9rSepqaLMeB2FC35mWC794dwMiWiwDUpzs1FnqrL2TrJ3XGoZ2TS",
  "key6": "5gfZb3HK1Sb8XgHFUUWhXiZDbJh46bYjgCZZsQQq58qTDBrqW1SsN81CZjr9VXiCavKxBM9AsSTjEMQxjrCtYtmz",
  "key7": "FZN3FXfcZCKnHhJ3HEZHBNWS8hYNpGYvrmrk3W4YRF6dHGvCe5MRYwaFz13Pk4JQRaDrJJ9VF5NvcN8xbkQXAhd",
  "key8": "mU6M9adPstyajneoCqX5Bg4Zz2TAimPHqtrnNNSm7cA8kAnWhA2ENUY1CC7JNaDbdMhGJ6R7HGaq2mvyuTVJrCo",
  "key9": "5U9i1DwFyJ7qs23gMJvAJoCbfiNqNmoPyNfM49NxpwUsA1aCUcCggEYLhhpJE4bWLQ3bhGGAntFKANeCVCgGuxhH",
  "key10": "4CzxbSHyc6xWvCH2iTqqMGzbzDDqF39cd441h9DciRtoaJE7GKWLfhttgmXoNM8MQ4ygccxMoksAtLzsyivj7L7Y",
  "key11": "3mCej16z1X1uR6VaeDp2tTRcQymA8obyiYEcjSfZjNUNm6yLfxBbLWgcFuGJdEMcsFEhRdaVHBef1tECsVybBNB5",
  "key12": "23PbeRAb4wyjNPWLNZ9QhUXk46JHyBmUjsR42XEtVC2QKEpmgki4r9UJ2YgdimGeoALtmXJGMtzKw1JCh151hQYt",
  "key13": "3DqqR39gndVTKk5a58F3zZzs89HnA8a3aY4u7z3MCqC6ATrsJ9CVpRFYCox4bp9szoNA627z5yZUKPTqF3zQT6LR",
  "key14": "34wzncfHgByJfPxHxPqzzW85XVSiu27YVPprQRd2bjMhi6BcSUDkVHFNd7TG2vGv4DnCJXj1NfFMrCLxB27Kmfv6",
  "key15": "3fpoKwxxmxH9sGSVGPWPQrEBtNPP97BoAuaycZsHYAHLgrVBJr4m5kmvUL9t1GHodCHyKk99DteMwNWvXnbBmi6d",
  "key16": "4QqmL6u351oKs2Am3sSXrSJSitgCXkug3a1Mq5gfeKUot4c7syiKe9t7nawmdejEwPDHcmQ4uJ1L4wgQcL96cw8C",
  "key17": "53zPJB4b84FMj8FW9Krj5UsKd1CCvX17nyZTKnijHwwvpxZR4imeBTpaquWbUHm5dgobV6j1msVJKNQktT88rc2o",
  "key18": "2qu3eMAm5Y3G1wv8mpRhNkQgXqB5vsfxuRDAdtc5BfJEmEtHVVDVML9MVBGFKJZ8ywQZPrri6phCn9RiMnwyvQzm",
  "key19": "21r74RCNDEga23VRE5U17vymbLmHokcpnYG3TBm4MZxAobnFWq3381cBSqdpPPc1X58CarQfq6XAjDUucUXaXzVC",
  "key20": "3gdQPr4ijK2hbxafdsw8qRbBgypfzmLmjGpmbCgvAJa36VcM5wzQjH3yroMJpDauaXv9tkTkaGacc2ZXJyg4Cv3s",
  "key21": "37bGb17VNYF6Dfb3TKG7aHYnxDDundZDj7S6Bh2waLCaVVQiDzrdc9n3o41xiYxwBuegLZYbKj9uNzGuTheHDEY3",
  "key22": "4G4diFHztLUa9X4UDFSJzznJBL9iDAJ8nZZGX9CoEb65nf3BvTiy3VKcJwS7PdgWeuAHKoVt9BDuCvxyAwfdrVwL",
  "key23": "5zdEPL5iTRHtG7JP56GtGpbxUs4A3nnB2A9r4NHoeGz8AfSegYTq4KMe9DPt7DNDsQWpfkRxXRGbQ81RJknnasrd",
  "key24": "LvgQVPgoYVFDdtnukCnRpah2PuLkM5h8K1TBvMTmPZYFrHQsAf1KKdip45xUHDES7j6Qu3K3aCrKbTq53SyGV2Q",
  "key25": "4TKScET6mVafzThLfn9KGcTi6ynMiymb5R41nBobg3SN25BAwqUQvqHnS716fdgYvNU4QfYnsteNt73qi7z3EMMZ",
  "key26": "Rr84M9QfnP96PtEaWg9HsjryEJADBim93ho8cdU9naRtjBEQn3tx74apsrYZP1yE2r1TkN5KKEbRbajxuMHZV2A",
  "key27": "4VHUSWue1hi1Vdyt6GQZBmDSy36Q2pp9RiQFr824hesuEqPD4rNQ6WELuNCSVJu68hYkCZZMCRvhdYTMHCC3MJg3"
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
