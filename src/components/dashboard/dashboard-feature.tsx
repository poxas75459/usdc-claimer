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
    "2JKP52SaVMXQuhHFzG2Zqw3x6pDfw27QLd6RD4E43ySqcr1FbrnseSLbVkuWKZsFvh6WL8b6uprgNXdqrPLZgQYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2epF9mbpDtzxq9e4WWAGzDSrTUZW89yQsKL4w28SRBfJs2Qhgbb2PdtwQFGFPgF3NZgtrnEw13m7EZhdAAaE7WK6",
  "key1": "4wSMofgMm1XTfjDnefPbwbUDcJBVY7X8YmgAfHXDyNVAVUsGo8XWwnV4ASVYW6gmdNL8uFoHRVYhzZgKnD9zVsCu",
  "key2": "2cLxD9UJsQJvZgjRowSsXTDacPmCcv4EF267NWMLuDE4z5e7WHYqLX9qxytc7dcH9jxkszR8Heyj2kwWLZLj75hF",
  "key3": "s55gyxwmDxBx3kdpYyZPyGW9ATVSp21Ngev92jF3xzocPVa9MYRmbuXMzPXueoraew8F5srBA54WBsRb2CUp41j",
  "key4": "5YsSk7H32B5YMoSbkWqvFGQfup165n37Sbd3hr1rsoWkxgrgun3pioGp5BuZdtJX1nq3sHeHADCPM1KcRAgVfJxa",
  "key5": "2xUb9XjJSvMHwiUs7pnLiPnayNLtX8ky4k4MvbZ8dZx6tvH5k6UgVFUFm88DqHdZ5GTKbaGjecmAUczyafVsFm88",
  "key6": "KDfKBKnW3ceEw2juCpaYh48uSj8xLACKcN4cqxYNhM5gCYbsJ94WHn9rDLMWfZC3npdHqT1weNx7bFoTComA3sV",
  "key7": "ird4UDvkv39coqKTUAK9rbxXJDPmpnithtZN1ZAv4ARaaxSBHNshvq5Ejvk7w8NDGXWVSF9TxC6oXGnDe3C7geP",
  "key8": "4SE3apXCWzsCGRzPZySYScpvsZt5xU8rhhWMphXmNtffQ8CbsXbmKU9FQrNcJT8SoYY9m2FRCqynD9FGUaF8crb5",
  "key9": "4Mo1Y67Lx3dJV1jFLgJgeaCgHYMPu2euye5kzzstAdLiqgsNUtnC2RsEqaVQpHfpFY55YKpmW2Y4C1azr7QYPAdk",
  "key10": "2QfbTCQ3YnbJbG46kTkgsCxj6WaHgf9mszQ3WwPByWbQBA2jHY6YKiPxC5mqiXsZvb6AHtMeGKM45a228BTKVwTY",
  "key11": "27XFK4VtcTCxDztqQRr3HQFjYA9zjr7Zbnjbu3WPQbZLAUbMZ6bfPVEyMdNfwKpZn6JXe1GD1dMLAYTF6ySwpMBa",
  "key12": "4LVU9NJpFsB7cxTWmcWcJ64b6qBwuhqfbrQYzXgoxQtghRswgmHjwjykdZG5PFR89YdgXvX7r3YkRwJkFr6gK1wS",
  "key13": "3UM7iCzHx3EMXKMZXA5U1nEpWeTEAwXp7tBQhemXH4hndkX9Eugz9VTRsJ6vS38VzoBhEGuQYWBXsF5wfKHmFjzC",
  "key14": "5N3cmEk4MT9nHx8pA3zvXVdKZH1kPPUCUSahV46EmQEtGCvTSEe3U4L2oJtTuE4BUViiQTHsEX5H1dbL17HWJNgi",
  "key15": "3Xu9EFsHQNmQ86Gfb9SMuDt1bTCYwMopGz48rqLMTXry7mWFGb22qA7xDPrWSfidWpb4LHGBaZqY9dn9j8kMzoWn",
  "key16": "5HzbtNFAEqJS6phx3eE3AvJxUmy6TXKD4naXYoQbRcr5rQn7cnGwDvmNk2Z323JXrQ6paDzT9fB3LSnctC2GQ7sP",
  "key17": "2eBcSaTMsvA1jkymtmgEvuaQYxTUeYcgveXuJ6Go4DGAeSiD5TJ9aAP2VYrQrGithswVNxxBikMwgN5MtEFH3JPC",
  "key18": "hqq3oFwitTRSSSJNwN7YrA7WuKbKqdsyXoBnkqLuVxFqCfckcL3emmyRsWhFwxWu8UEGVBsv3m7TbKuN9xusRce",
  "key19": "3qraxsVQkYX7rTbr4xhyagsGVnQTmmMgUMm5FhQzvy8S9vAzMTK9jLHU1m9GDbj4EsQzGYhWLrDSwaa9e2oiR8Ks",
  "key20": "uP2xeBdnL8rLVSBfBrvwvcGsLQoLCZ5it2zsaHAgRoE9ap4gR9BmHBYPiu5MMKeKqu3r6E1aomjLfv2SZFwCVM2",
  "key21": "2N8r2GSLgrPipf7ZLC2MVWvFjaBiVCdLYT9JPkRmXmSGhKZhBnepUbeKavLkdPPQmnobDtpLE173uwNJLTibwYME",
  "key22": "YbQsQBAhEUU9Bh52BAosyARaoTQqtxMneSHCKYXNG8XJcoVJ4cqT6K2dBJ8cbn1jUUyBFkww74LAX6vo8swYuyE",
  "key23": "4UH5Rr4QdBhbbHjBz7iTjFpQMrWYedfyfoZyvUyoDESMoCDWjdbNQrbgLww58yi3UHMLo3KyM2vHN8p5FUeMJBRB",
  "key24": "2xcu3qXwxaUzrLN8roLkEQ5kBmXiCZ8xPj6ofedvH5AMrcLbq1f2bm7wcJbdw4yMFagTa9mkyYsJNWuf8f3ywQXB",
  "key25": "TBcEsxdGrDKSXE6XkJupnj77EXhLXrDsf9AUqrZnQRT5nv77rb3KE8dkrQJ6PT888Soimva3qJbEnZUXN1dzBfU",
  "key26": "qDySRth6Las9sL52Sggc3wodXxMx5kfUEKyU2UhSbpiCUPDUTd4roJ9Ver4VwzfigDmLn7dVHn1bAzcQc5Fvbiz",
  "key27": "28VrjjzXrnjw2xX3aHXgd7468cYZhZZAeVuiMCBDEGczgo2dgf95FYCGup9yczXkJnWVP6NYQUbW4iKdji7YB9SA",
  "key28": "4NMvHSnxB33zL63B4Rad7u8EE6KQrhTbB6V7H3XK9L1ef1mxgrcmMRFCKvbXW58qf1DrQ24TxP3aXsoWtvamsNXQ",
  "key29": "3cv6kSMF1QNWJevHH7f63QZH6q4RHMjutmjtjCo7Z1vDgv2qXX2UyjSa3Wiz9YypBsjxTPGwLxFrKUHa2kKK1CK",
  "key30": "4qWy4bZKAQGyXAEnpfBVBP7kiwCmqeVi3awmCY4Qww5KfhArhYqWgKPpRaR5PZ2uD5KTUQs2unTPkcWSSY4k4QVB",
  "key31": "3eYP6F9FRw2Wpig4qepwGMPgnSFSf4JJqkkboc9FhnCY2oB76Pt1ZcugiC1FAVvCYcEUEx1pyZJUXk3q6oxDovGh",
  "key32": "5fjfvNf4EaPFidCCjBubNQ4FHwEKZUDaqggVL89pjLhciBAnrCc5SGCX6aARoyjbrzByFkfcL7TKrQyNUZn4JGVC",
  "key33": "2AKs1HSnewNwvmPfFgJs83LM9ySfmApB38MAwNQKMmmZWPqc3SGPKp5pw6U7DgazBVVc17XaUXcff7Sm4bp9iPFA",
  "key34": "4RAmzCsUXdW4soECXa1ApkC3Cr4YBrodnVrfkD3JwMVqHyPx1gJJJPRuQXkx8cYAMS9PL11besKzHBtPU2ByNQUC",
  "key35": "2QbUE4rZ7dg4d75Ep2GCCYtiurzcjV3yF7yC8agACdZkEwGD2HmrgtCJqTuW5GTRWkJza6CobKAMz3acw66NLST5",
  "key36": "UEQRj8BwBeSCZevZvKbWLuio6upTynYshYPQYCeGV3cBpn75xrp8i9CDxjXdYqgEQd86b4Meuig2s8GUWqv12Wu",
  "key37": "3pZpbJRLQ66QspNoZ4Tz37mLoJjjXcuErepUPvdXZ1yhTSe6XXgSfkRMtawzmvH4FJfpBy39us72iJAMvgiyhfKV"
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
