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
    "8SABKcjVyvc6XPwf5C2ESCEKE3qvaophx6db7198quYnTMHUeocKc8zpkWrFPJo6DgHpAWaFv2RR2HyNpEwZA9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D4qNvY12yEx5oFuNYS2HobXMziTh6rhKgRh3r4VyUCkLti2F8gkP1SLCn6Xauno6MPzHvNvsUzXCenLyivmTaXv",
  "key1": "4ePN8VgBBBihUXs4jHZZGQxwfK88juZmWCK1xLQs4TwEQmA5abTtyhMSBcB84aoj1ZLdkFFFPvdbYJ2fWyRfFy8f",
  "key2": "34ianSXXhjfJFau16mkFVceFgWNJeBFVUmZu1PJyzEThpmBjwcyV42ZfNf8d43PUKtRYTZbr8rGUwRmgJHUiNpik",
  "key3": "5MsCrQb1WzNGdb82iaWiTCK63u1aSBjDhCoxSPMGcBsVhcsV9gw7bp7DurXKVfkrgW51DefS1Kve3HepUFfM7yTi",
  "key4": "Xn2ZaniE35d56AmmMz8HgUo7ZLK47ZAb6Z7tuANEEsMvc6hKw8mfhfG2GpZJrVvrocafLHZAAdZqMomU9eYiqJm",
  "key5": "1kKWKCDnjgkqxN7GdpsgKGp9RBBnQGZgDDDkesYqHqTV9zPUko986Nc8kWa7Fe6AjtpiUnV26kFm22PRxXP4sfN",
  "key6": "3gvVidvbgHnsjQyeAT5GLyshbnHBStf1FL4dZ9apMRzV44XgPkEc49pjarUTWJ3q1DFnVDnnk1q2PnBA1ABVZWL3",
  "key7": "4bSmZAWPUnVasoZ1DGQrNBnczKcUrYJLxMPi8QtE7vgLJ1d4mJ8X8APYpFEq8pTzJvxrqRXrVUgsxSZqfEpCUhjB",
  "key8": "5611peqnc66pneG9ogCJCqxbk6BQ2ynVrh9wt2CrF9UMvhvwhGEyx1YEnDwodgeoTr4cAD1SKbk5B2YVBFELeEH1",
  "key9": "5F88bJx6k3DNuiamioMpXdJFaiCDVoYyyT3Lt1uRaNjKFYmAMXNJ4osNwc8hqiqAd6QQDiE5fpFfaPQWpsQDEyUV",
  "key10": "4euvJSnXCPqyZDbAMQVDP1RpSi1DFUXec8RXBae2Qfuij8oZ4B3pQyMSTSdijFD3xzv1qEKK2ouwUMiow6QBSYfc",
  "key11": "5rXdtLmeZkTK4fu9bxUdbSXHEVtV9sBUJK4ETRHdvdXmn31hMm4oWYc8ztyfnCxcsmr7jJBJSy171CjBv2SsgMgu",
  "key12": "43zoonaS6EVUtZEvdzLDbwpy5RzW4CBgLtsd6p4W9vQinzgkVGKzeSqVzixK6D8c9MKDh95KSc2msDTtifVFQZAb",
  "key13": "3AE1MHM6GHLeAzaib8mQTJVrWPscEF9TnKMin2qh2N5vcztWjQmiPqqJ2Bsdm49bCmmsnkxRntsE8b4LeeiMrdSf",
  "key14": "26JmXdefXvNFxcLppiV8hUiW3PZXBJ2QtyqbeqSS751r8WBhQnh3F7X4g4MvmHx6HpitDtNWSxU7R4yJNZFgQVQP",
  "key15": "GyVBkPZm8KvqPD2d1rPSxBFBa7ZotXwVYZimanHzZgW6qXASj66C8Ca3u547o6awpDPzvDAtuFokkwwwqHM4qL6",
  "key16": "2ZGx8D74nctdCFYwWi4v4va8XzkkeBGDU8G2ag5TXik1jjE2CYSWc5Nr585hNuMfkyoc7veAmZymaoGwP4aHs4bc",
  "key17": "5sGeLYhVDhCzuQPzKqnroAvyF8MKwW9w8uS6AswQk76qwGYEPZ2UfADim8P4r6M85N6KeCKf5PixTMoyn45Z7GNY",
  "key18": "2yd53wRht888XW3ozun5gqf4AQzq1SjKKL5d3vU1tibHEM8U3dCm7YMHB22vDWjuEk4EnWg7E2AsJK5aUdwc65Rp",
  "key19": "261xL5BAcQHAcC685CKXX87YM1AJ2qxhH2SkGYcg58mA1QKAh8mYMuXqBDPpipwryar8M5RhZa4xWsPtvXppFirm",
  "key20": "5LJntYkzEEPMH9uxCeLWPp36DXJvggpmDZcUqXhNodkd8A3UHsDDHXARieueD3G6wowM9SqgMYvEmXQK92kBRoK6",
  "key21": "21hsEuRuT1qa3ASvSm4fP8HYt9GShLSGaXpBHAkdSU2P9nBLEgwwWymEh974AxVAWWmrxYv8FH2xXwWUo4NuUHLT",
  "key22": "2dWe65ZM9v96LzQZEuRkSiabGFCJM1NPa6v6TLHyDpJqdSbEvY7F1a9HTLPxR1NPHkMJx3fBM1GVxqbo4s5ArctU",
  "key23": "5r13Co964kAR6JJ66JAPeibG7KEaBfqN3jnaEXjgKsnYWwCiPF1sdrpBxtBrpCVzbTupwhUH7ysR2C7bymztvfeU",
  "key24": "9jXCACmzLTYRfbmRFeLJzckj4vGiqZ7x1UfCFbjVQeYQG4mEHJ8JAeyMnPCKmvPMYrXE5NP6FRbQjoXp2mvWqcg",
  "key25": "61xeRzWdU3FthuittTSZXVk4CcLfRQVCHVsFumyDjfsiZsdq84NKsEePnpkebHVLA7fnXq97YtpLnKVUbioToGi2",
  "key26": "3qYNrGCx49xCEy65UrD8UM58jqiMMqZy1Xgg1VLneSzfGtia6dTrGaNTjnecwXEJPeekHNYWQjKvqxj1NXCkrT3T",
  "key27": "5hfth1D8PuymmkCBdVTNSEQzrd1LV9CkxekD1fPMqQi6jNWDTzbGRjxk2Wep2eyUs4TsauEWyqcUH5z12t8TouuT",
  "key28": "sa86PzUDbCMvp2UwEmyLvbGJGhqRQ9rsBxTsp3edUewZDjaRBJ6AwX9STgpc47rkcimZA2QrXyzwghgsZQvJriK",
  "key29": "5zJPTHP5M667fNyNt3sYKTvnLMvwag5Ksmw63G2yBn5dUdZuK5y6jkZgUEM5VgENRb4W4Tj93HHAw66t6YZ9t8gm",
  "key30": "h1BkRaEaQYYn52T2Zd6Pkp1QxvB9ZuAXoy8QMp2WP4gr84eGzqoYwG2RWzhY3T3ykd9AKCa5EsgVNty96rUkWj5",
  "key31": "JLmq929N3oEyWwU2wtYfAnhDsxTdsspsH15NYC9gQEJfuFo5x2ubDoagZUXuMm55mriJe33gThPdFDKvEXMcVND"
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
