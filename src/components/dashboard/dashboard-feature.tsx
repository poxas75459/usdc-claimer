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
    "569WVSTUSQuJhgSu8ydY1vWvWTRf9g4pe54E5Dr2ZeTFaESUaoEuHYtABr2xifigrVJ8pCmjhtruk3qq9m9e4dUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4znQUfAPVPdcmaGNpGooVnnEGKZnGSGv4W5jVZUvft8pUAvx1q4c8YSwgUJJskjJy3r5KfvoiFbiT2R2dePXhBC5",
  "key1": "4yhTMjre2eqrcoXrbFmRddb5j2CxDGvhnmMxdoBp3VPJrDd4yghVANV78xGM84hvQPWgUuWdmEdD81NhA2miEpnc",
  "key2": "2efX7hEhA8VpE4NZAe96PZoAw6Fym7VdQ61Aq3XVhqd7dZdenyZ2sHhYsCW2ypktyZsYv8gCoS66GMAP5F6eRkKm",
  "key3": "2H4HLoW2pN1Z1SuEyQJr3gHn8HyKngNvbrFEzc8PzSKfr3L1tNS3ot3KbP66FbmBhGfNsD57gdAen6HYT68S6bQf",
  "key4": "24ccC24wLNf1x5m9XGhqJ9Uw95HRtpJsZKQRMiAAn492oQLaoTo1a1weBNDH2pCLkTdZYcH6R9WQf8AGQdrviLMw",
  "key5": "24pjRgLguH7UXBqDABfBMSfppSLivKxMhezMqJAwAyj91be3WoCqSDQPGgCFK4CoMYVxQgqqcmx7DHzJ7jm7uJ8h",
  "key6": "2nKRhL6KeUiQwEXs1H31h2bq8tmVg7j5TNuxUK7aXcxu2iRexNSWK9raqYumJGV5KkUK5n1szTcQMG23PP1n97uT",
  "key7": "5Gz8r2fuAgQutfY91AJBTYGK5FDA61nkPkWTN7Kbf8TrZtXBdWW7AvKx6E6yrFkMyKQgm2oHQDjWWED1RDF82mNg",
  "key8": "mqEpwcSrG3QtwQ3kMWVgYqvjs1qAguvzFydaNMJcZdr66aswjK2J6iWt59QB17kNLYbg1nm1EG5qugYMDhJnJCr",
  "key9": "2HrJjANQTZcuGnLqMVPWRiNt4K9LaXn8qhjnxuUripX3Xn6tLpXsLgtsvmS98p1EY3wHARbv4mY24LBhMDTu7uiK",
  "key10": "3Lfdz6TZxmdKR9Pi7t3GByhm2hYbnwZRbs46Ey66xgDHxuXZ6HCgh5BhBccEAR7X4s9Vs1gxv4VTCY2ANgPxNLxq",
  "key11": "Ps4HDQbTeZxYAmitY2ErHu4EsQmu9LV5SKUXYtVYmBZVSMprE3MiAjJyyjWQ4DeCRFuxhxYmi5C2qUNEhyRddCu",
  "key12": "3H5BteVicaK3VthQgNn6TKaJXQmxpsFBR6iVNbBEfKdAK8kwcMr48SBu3Qh8p4gQGPCkPDdQFCbcNgJvSmD9dqY5",
  "key13": "2LZbbPEFWn31SgaPoTBNxg3ro1m6rvzy6bjBKXh9e3PR9S8YXdaQWdjQQ7DMw835U158m6qELySwcexhjeSBYb27",
  "key14": "2sdSzyqJL8vH5gSB4nEAoZFwyEN84hGSXAYXCiucS2PooWLkWFhowcpnk8QyyACHc4JSjDt6GcqaCwGVHaXzuzkj",
  "key15": "3YVc48VzcT59HTFf2xY7AAHcxzC7kKwLnbU7RE1yf3wTVuy7d6SpWh8FcxnVZAspp31g5GypFQruitfRLg7GyybN",
  "key16": "2ogh6vFrSdQM3WYo6ej8uzSsfXHgwTxyDnZksM9GA9op8Udh8cfh6CyPaQ5S7yPVT2wWm4qL5Sfnwc8rwKE8RbvJ",
  "key17": "47PRjbCzT8v7ze3Wb6YsLcdHwxCQdegzkfNmxh8UwU3mTBJ1nZVE3NnpbC5KrABbFxBhPsupMiV3pa8SooAEiUmX",
  "key18": "33SSaHyCATDYTyQy4ki3xuxhKqtwN24HtNhqkPHrLM4WiJRouVP5kA3Hce8izyZPi9DqWjBba9RQGSHkiVN85wE6",
  "key19": "4DPoCkUF6Ggpp6Mx9jSrqVZA8bVX4gfN8aJxqy7dGUbuaqt6V1fqXowf81wY4WKUWaWHKaaqYpiNDZ1RR9bgDVdn",
  "key20": "3bQkF2yKL3hsLCB58QpJcyD2y4ssLVwqdR2nYPwDTmnrpzeetaosZMxJ7xsqiJfMXwrBEKt4tez5bAvsgkV7hbdp",
  "key21": "21xT9rDAhbGL5kDSHji6pmfKccGQypbgmhxiVw7isuSde5Y1TmduAnW7cjQAzpwipC44jxAPLJ3jWTpTnG4g94T7",
  "key22": "4m1Z9NMoJho3M8dcf77EwYKdu9ECWaeybixYyPUmqKHfwd81GWXT1uF263tVbNvoE8UHYzbG1y4bJyL6vwE2H8uG",
  "key23": "2yhLDSfBXBzKLMM8yVsUXn4vbtu4yotuAU8QM94W4XkQCbZ6YbKHMcyy38qqDXgtPR5JeooUhAkRHRRiXo4A2SpY",
  "key24": "5ZCbhccSdhLJT9Es6LMeVz7hWnwLbjJcD8LfjRuQgAwAxQwZ7pYPsGeaXoLX7ZauKRGUm8Pd58XdYsVXNQCft468",
  "key25": "2CM2CPHFmavhKbGnt9ozA8Q6FMVdb9cxEGc186D2WVJrjU5AiUCZtbL3fbefUSGeSTNczS2UkAkRH9kujhKHXDRX",
  "key26": "5SoeQSUvwDqkMhQCjMt7PT2QqPvasMvMGJ6xt1jCwxsXmLyDsetCQ35xzdX1gMbMWfeVd8efLKRQ57CE6BzTmi8J",
  "key27": "S3wZZQtPJRLUrSdNF8dDJgxhJkYkKcfWRwuyMXa3xN919KuYcJGmkw35SwkVCshtkeoHZtjR4UduxcEDze21znr",
  "key28": "33FReyoGimm1U35MAg6adTeZyTugFAwXHLwHTACMV5FnSdU1CJ35UmZPqEFaFTyj6DioCEY1jDK7f61iUJeThVcb",
  "key29": "2rLZRmHZbDriZC1GZ6Eg75f9WaBvDfeG7UQVfegz52ait86Kga1q9JQ3wDMzma4SDsy9NgoiBWz1AmkWP9wQcg6n",
  "key30": "SmKce1zDjBvw9X5JhcEwoLHVgYfvPXm6TG3a4ce5vJyJYLdY8KaXAhp9vgH3TDVMoR7CG3eiJWRoxGonHXe434y",
  "key31": "31Q45YwY54datw5Zvi7aEH46H6VqLAeqLBJp9pwLR2yeFpb2QzMBgsLujAoVWdLQv5ADg2LujcYU3LQziKgccewB",
  "key32": "2FYV2HFXMcXQAEuT1haLL5riGkpNWGfSRzhu17FfhWjRCX43HQinR2KxsYQYA1CTcsvQMZENvsRxeiXACiaSFSZK",
  "key33": "3nFBb7JMWYNC6kK5cNVzCaZh1KETpGAotW2hgqQ9LYh7XECeB1s4cR26PvaNKCLFRknub32Qr6nqVfrqPSZmTzU",
  "key34": "3rkbWbWBjn3HvcdLDsgtw6RCzKJFTBEaSeBLKiD2BbCdJgfsgnkcLFAqJtD66YL6YEvXsZdQUJnztzx8mE7Vrkzy"
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
