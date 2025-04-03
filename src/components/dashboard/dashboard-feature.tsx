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
    "5Mx3xB9AWBX7x8BK5jMZM4GydDMKFysQQQpEKau4fD6xMZ3b5dfjwsUsJZ1anjvc7bUpfZjPiuRKMG41fYCSFdD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7AyFDtEArW3UpxY3snjA9jjv2QH66aWQp3efBGaAZwacryn5YfJkVNSj5nmJG3cn62UzkDamMvvX3em4Lxwt5wW",
  "key1": "4E31t5z46r66MSLam1GnhxoBE5k122jzywyLVKtTMFfCrtdspowptnfxfgjjX9qusQLMty2vW6mA6WdR5hqdCN5Z",
  "key2": "3WhpwD8wLEJrQS2iEzc8fRDUbU6q1soQdfswD8hc8sTC6Y17X9wQS6L8KDc7uMzk9LCXs4RHtnpr92ucKyiDL2pH",
  "key3": "689Nwb3fzDQu8uvzfquPf2XTpNjN5Soc31WECf6sP7SvrdZCfgvQyhJDLaiGVz5VTogdJzG4R5Kk8andLnpd8jN",
  "key4": "2yHau5pqX7bqf9mFcRWsx4vZ8hzhtgGPbU9gzVheQwpcmb5eYUkfJbi8iNomaX6bhC3EiWDYqShaXiW6iMrHQGbY",
  "key5": "VkxRtHgdWorPnK7ipCXeHUAwy6574LgAV7NCLaTMK8F5znVKUeU9aiK9JojiZgyaF7UmJD12jaTGFC5dC1GDRQQ",
  "key6": "3zbt2uU6hf4NugVzDNQnhBYcQdEwxsacfygmsrBnh64GEdtPrB2cPpxs76FEBJYVEVUWtZ8ZtF6fQ5KACFqfPiso",
  "key7": "2UrE71vQSeN3oRYVCZMdedeqiHb7Gs61CxW4m5ReBoTiVNyCKgJ8u5vVkHYWiWTtA8MNu2iH1C4HBQ5UcPFJRh6E",
  "key8": "L51iSiwwV8w5J8g4V1Rfg5By785ZxTJwH5D1DZomfAF6Z1Xe12QCJ2BntBaseE2maxkaPHpyvZ3bhDFuTcWg2Mu",
  "key9": "4VjFtwLdA31U5NDbNd13q7Xx4iA3GTC3tTLjXj96BYsNDDJcdPx57bMUfpuSfHM1gj91WUnHkApLdRVbErLsMtc3",
  "key10": "3VDnuBcVsiuunrkQZijU3e4udAnuPzEfBjdQq7kbAMyimGM325agCU1brJWLwymCesVN53GmkVcrsc7VNQJhDTAi",
  "key11": "4K2HA79uvkV8yWB67EY6QAu9QDkgEGYtiqw7Yq3jZLXyNA742Hm8YRb48KNj6cJ7CNqvkPvKcGuGpM3z3FqVzyxg",
  "key12": "4w9iXLaYrDzXhwbyG56apT1AisxG3WQLWjxavEcEpm7JPmD98e81yn9h51d9WZ42JrvguivrUbwLpzc94oCC6hHa",
  "key13": "26TdhWcwC6mjNZxfqfeH8uVyefdevcoNkHWSumzK75cg8a15YsSKeNeqiXZe96WFU7kmcuEXSNnameD2Lze3FHtb",
  "key14": "3p47jE5Ti9MDeLQLXwoCcUVPTbpV2hsFAT895AdgyAqWZ8V8tgXeMe8N7twfV9g7ToNAGdSS3rosC8yirH8qsToK",
  "key15": "5ff6DzcYF545VX9Vxtfgp7q8VAp2xAx6WpvyiJdgETnuwmDdYGomN2bte3TKnCGohmgq6tFEYzntWHFgwXQbGEJ3",
  "key16": "3TMadRkUKtkfd8piSVLj7CB7wdmaeDsHrdSU5MZ4B1ipsGJjdLgcxEkiQfkq1A8NwL1hfsxuxYJJrhocqwBCtGyL",
  "key17": "5ZeJkFz3xQrfV2qcgBSJda5Z8iXgZY3zhm1JCsvSns9brZ6oFWYunWuWfX8Tq5vJqcwwsRvP4CG7wVbqdNxFcKxG",
  "key18": "3MJwEsBiAjaL2PFWUfWapA8L6enBUT22cRTSQDK31BXBSLPgSVwK8185WoxTPpL3E6BqgdDjM7QvFAYyrKhd3U9K",
  "key19": "3vpUEXbrfm1ELf76N6wXEn7QKvj57wYaJcTXWUXKtP9UmCxnwsnTfAieZ35vSrHxobbhp1SypAd8Lxs3ca7C68xZ",
  "key20": "5y4faRj8u3AuYoSZhhfQGp5gKTo4kzPQSyED8D31LS3Cux5KXTpL6XDhSwzdFehipc9c7aQinkU2FtE2hqkS1v8G",
  "key21": "2U2cQCWuS4XqdgiQMJjd2CK5SiiPzTmEwY89sKoSncBqDsaQDCmyMz3b1Dw4EaJ6GJDMLqZWwZbwXpPTuBXw7kcv",
  "key22": "5rGigzRCgGkXXwGwNQ7z9Rg9AvrRDHWs5qYFU767ShmrLms2ruhAD7QcSdeXPiVVXiswRfUVTpPQzfL5Sn8Xzv2L",
  "key23": "2gTJHN2yVrJR36aJaBPRSL23mQaGWKuDm5ozgyoqmHG2dNP7HwdrnfLEDKy2rpje2d53xir2X4ygbgHJnd8xDsQ2",
  "key24": "2fm4m2mQ2xiwb4nDQSCSctjEYsbAi8FRtWXo4vBwrzibhYPSMqUJscEvxDe6N5gk6bGkW4t3GXv6QtoEcHdg9kKF",
  "key25": "YLuGtya1aW5VN8yDmJzmhrFeqcFxhDQn4fPa6BrpBogEwiH4f2Hy6arFovMawf4BcX8h7tNzaV2naTt4PVV5ZYr",
  "key26": "4SHnzdN5r4zd7tcxG6EapM1yLwMY4rp5m6gFCFNc5AJs5mQhJdyMSnWT8TKAgm8Aqu318185cvgJuSJGi5d4Fm1e",
  "key27": "CRp8U6uiAwVX73V1YYggpooJ2MviJ1cUSxjWH4VXbCYUVFEYbZnzVd9b66qy9hPiRVfsZqSxx7Nf42A1MSNmA6r",
  "key28": "674SBtbXyBbTCGRDayinsvDdeZJf6TrQPiH7ontcMGBrmbhdS6fv1k9eD6sJbZSa3qBkuZmLHPL78pC1kJzpm3Y5",
  "key29": "2zWntFG8EipeUEKLAMevaGKi6Gy9kgBok8RLbfM2AAmvCcLcMkqUMdXZYpGS94VW9Tc3AKbwCM9wvhRsNhXx2B7p"
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
