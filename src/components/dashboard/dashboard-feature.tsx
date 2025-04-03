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
    "38fwPGs7w5CecmbeKa51mKbCocrbENc8occ7TzWM4kcgTVomiokQtpztmLNzPwJmbNnBe2nc9H4WKM72QeRw7jKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hEenGxjPiYnkCCN1g4k57GNEaWFaFGjqFWj5zBr1VkJMPY8gT2EnzWprZS4AeddSKGPRudG1E4U2yHn2WLwWb5E",
  "key1": "44BdaRPWYM6zMyPNcB3p2CszVYNZFX2Cz3dSebBawmA3gyFvFEiKH19Y98xU9txpCykaA4YLz9dbBw2J4fYFe2LR",
  "key2": "3kAZzio5gcpndBSqP9bgTu9U2hB5acYcAKDTTZi27dHM8p11dqzR55i8X7MFwVgNfG58iYCt34Cps3aZjY9dPRrP",
  "key3": "22mmqgRRmjbSg5J8LEshV6i1dKUWThKS4GnveQfwvNFvWWswwPMv5A5zDhEoE7HBdVpgsimarrTX66ucXcA6Wnv6",
  "key4": "36uGJS4T94zsbh9VGKqGq5bx74CYJ76RKmf13b7SgpNTPiH5KMidWSFnqXTkBM8RSvGdG3DmF4u5TSGz83xnHcL1",
  "key5": "4Ymq9mnY2abECM2gZbXME9ojR71F6B1pYm6wDuEsh1jHLXJUtiJhXNodRbkxf4bcNMWHzC72Z914hUDcjhga5RwW",
  "key6": "3VoLcwQt4uqi4JdjV6X8PZqMW9ZeKRfkLtHvKJXmSe9rTZpMFWb9G7U8oC91ZiTAUcjdhCjvM51DRFmb5vQrsj6g",
  "key7": "4EA1UBmcbsFEnTN49fW6SPghM74HKMcU9EMXAo8v7tyUCfCWUfsXUWBmjRwzLUkrjWmrYYWbnWTX9xDaXJLpQNfQ",
  "key8": "5wWJcj1DjNhhoDuv6DA9YBUGRfdWGvEwQoFSz2zDJt2TRc953hmw6G8aFJd32W6ZDfiociQywkDrPt5bA5ABRuPN",
  "key9": "674GGpLn9wdmT7r5zvhcV5GzGyEZULxGBndUFJwxbw6Vi4gcXu7qYY3PBG473qNAnrfCY5j87M9U2M6tQa1rh9KP",
  "key10": "4sxNf5PpXci76gLajh6RAevA85yxHxBvtUqCP6LW95Qi8zJwxVy3C9HBHrHBjUnfqbtmaudhYyrcFvFjpbeUW9HT",
  "key11": "3siAGz2VS8pacwmunXuAnkgSaxSo2z18wQEc7AkLa6oqQjpv6pvt2YSDwgVGbyGcSirHYMj9VAyfEqpeXY95R4UF",
  "key12": "buXTKS5ZWjJjaDVuCGfL6wYTobjXFa2JqBzZtGH1Fs52naVx8vteZLDRaieA18u9e4mm8oPHHgPebTzjdUgMfm6",
  "key13": "4j9j9ZbL7SMSQRHJBmtXUvyroUJdKH5pU8ch7mLYiPvkpkAEdHfEw2MKWxcAcHEwYjfeZnyL2PcQZye3k1t5yCSA",
  "key14": "4Qog5ZCD1dq4hkHn2UtnsFFurCD38kYXpLbkFb79Tr7kfZ2HGY3NzXDYcaGdpogQgRMoDsjBKJBi85Z9Y4rVDYzq",
  "key15": "2kaKFo1UGrYF25JXX8aEyqtyETVs7hbgAnLHbXdqrbVjDoN8unmCKwNmuNpe3RzNpxn2A8wGdeBdXb2LpqYGgb4y",
  "key16": "4E2o5xWKtboz1xfGTYzGzxcV8CkQfhcm2moMcDvSdkGc8cZEqrA7dF7xaeTANXwrsqbYE9PcpC6cjoHcSZVBmVhQ",
  "key17": "a9dZYePgivK82BtC8tcMRyaoots8izEbrDbBmwX4dzbfB1AHyKTiZ4aATqKbSdjsrNvjg5H7N25qpHVn8xKKGWH",
  "key18": "2MjM1qyQGZpGgvtJ5unv1Ja2NEnpYfF61vb2mkxsP2q4m2SHnsKyEy4rfvq1a4VrRuPVPvdDEJA87fc1fa4ansh4",
  "key19": "UC3d2rXdXyBBQxSK2f2MkSbRU2QsFnLdNJJDqnCxx9aVsUvCMGVdc9Pn47wzm19GmmAPcDr7XjcoP1aXo5zijfN",
  "key20": "2o24PSXR6VxoZkgd2jCQPD5jEpg8GUrnqHvgoE4MHKppqyzakzfRLcHUz4kpCKJhiGgTqmm8WsjeHLQE5XBRHzzc",
  "key21": "4csVEJDqrXbaoXHghTnr3X38pyoPjkCRUCveGCdP8FAyV3s5L85QKTNuRRj3sSHap6KpffJt2Mw8uEi95yjLAvNJ",
  "key22": "2veEyVnq9osuwmBCj7KjG83gLRduE9djqiXXJNuqFcpxnnQZy7xxMWEAWZxaBJWooAU7QD5j462fxh5LD4X5zGNi",
  "key23": "3GCRPa3CMKoR8DxxtFEqPzmqRS8LD3NBmGgkQV53o1aXXUymGgVrKmBgVNWAUb6ok6jTMChzKVjSzAE4RoHsW4t9",
  "key24": "mtiJozo6BevKHQ7u8LoK92Rhv3sNNGBgGRea3W3NZEohigrtz6P4zCjUfHrUtYYSqzRYsq1Yf2BWQ9PizQCVvas",
  "key25": "5WdFpNkN4Y5e8i5kMXKXKwXLuQsbyns8RVCaYmYvXYdxtZFg9KKrjFrKqHrYhWzAyESdyaC9umwYg5LqP8sw9uVB",
  "key26": "54MRPw9hqZxZerkZJ3kDingrPXgbJrN8GerWqkBe7LRGwekSJxYN6CXp118NbqXtPPLhnk6EMaxHmW4MQSpxE3vw",
  "key27": "5qDdxRHH3hv7ddBifTqYLr9cb2JnDeR14d28PyBG5rbHtrAXk1dqdvp4dVZijQbef4aRtxhifZ3qCnVRtpLBrgzC",
  "key28": "46iVpu9sGKZhYR5ymMxE8j7GS3mgioY5mNypqPsLpD4gErns7poAtXJArPrxT8zQE6q4rGthfDwuMrdXosWxw3Pw",
  "key29": "5KGzgQa5GUHt8XDhFJgLtx33YXnpbdMkUqP6J96JD6FnZRAxm854LGj5xWVzaP73gokHLAeZfciZMLU6Qom43n4d",
  "key30": "ZF1cqTGZ4pSRiMUk8RZWbArvd6hcqovEiVkue41VpbpqhrTRdTYFNXFFEgrGwi7j3KsCCDGDMJNq9NjGeWmbonA",
  "key31": "3zxfLHTp98oG7SCv2qEj9HiXDcwZXHLN2JspVow6MdgKedsY8ep6KgXcAzmizUpcMoEbEq1idqsrhZ8pBi4J4krP"
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
