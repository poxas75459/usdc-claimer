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
    "52XSAtemyfJQoE8oFC97kTfwXCD3YegMkAKztVLWQCUZRMFtnhS6iQcYCfGMDvixkn9geyy8cfxs14Rx12oMa2Cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xfUqub6fBbzVLmexV9FAR1PSGqWUTnF1S5w5kL7VyVMowhEoepAHj8YMNYgvQBJwu2UGsHmLSL6UhxmVUTcqTSj",
  "key1": "3xPaUvQDN4om5kFsYEW8qxxojagjskozTg5huDzsBVK8dTwvBPw3FoBMPuwLsxm7Wk33VLYAKeHdBGY45RvYhKY5",
  "key2": "5uhZ4T1kieZecwf1YFLzfbrdoWmv17EefVrHbucepLkBei1uLjU3werWmCAYjC3qv87j7zyygE7zmR9TknAD5KBd",
  "key3": "28gdAC1HSkdFXhUneyFFZHaty9EnoJMKkb2RJy6xcKba5LkHrJDojWxRF8xfdTgRk6TBBehTbxTtjRJvGeDND3qN",
  "key4": "zGDJ62bSA2dqdoAr7yPSkoUFGFTt8Sg6AcWZUMv1X3ge183RiGwMu4psHH1TMcx6Re3J3GnccUnenq6eqn2qrYr",
  "key5": "SVNXJ5D8cKWVQ8hhVk1s5JKfk5P7ZXy2dXXhPRBm7w2quZDeDqQWV9UMJeYWsQKrXucuj7J6MDeVKbfdHnF5jGP",
  "key6": "5kFC1znowzjbpNpEfMXjPmRpaPfCMxZ3QZsFJvJRbbQNLDp1VA3X44vb9SkjpAowuL6XzxHkFRCjE9cBEQpAostK",
  "key7": "5Tjrp2LaUHBGGAHsN57fqQz5938XaSkSZPNTUrgm2dLWwt5kSYqAFk7GDf8PUcky76yDv8Kp88ugvxnUYLDxdUCU",
  "key8": "3tYUrNkJcx8furoePcRa9xs6AfSjsVisNbGJGnv2gys6tU3K8wQwXdUvjNpsBNA19UF5pHSGV63hWy6hqhi6Qs9s",
  "key9": "Frtmy1zyrhZdh7tEnn2Uz1ohnfUf2oZ7kCNyW74kvnMmTqv5bTj1PNd764H3LaXoR55DeEaUmmChk3BQSzWVLBn",
  "key10": "663HUwbh9vMbQ5HxQFoQNkz6jkHbf1MUSXKDNXPA6U1pSMoyJdczVLPZ4gafavSzzHvFda6pFVYpAWED6f4M1jsE",
  "key11": "2TTPbSxjM1BZcYUa1jmzW3DnVNuMQftmYzK32tnLUqCxEWcsrM2vbsCXrSCPtxAkJj1WTpGBRaqAKJVTbAFHey7y",
  "key12": "5RRKRR2ASRcfK6VKopT8L9KCNeoWUZdjuXny2oF8GRAmHnpuj6WhvhMTs1HoroUMYwxncA9Ki5zud1ozGixHiKGo",
  "key13": "AKGturGGpjiF82bxZmKf8uoCY1ag1nxaN1enWotv7KtFDXFJTnM15yZBdLBRvUgUH4JAK8FPRYnJF7ZMtoMdAPL",
  "key14": "3wkt5jMRuW367rtgCHqLGBuEUnAhbRi14SkkRH21cyU9ecu15SMXYB5G7NWNeLX8ULPe6SSrxA4K8xZGG9acHE29",
  "key15": "4J1hFuKFBZN4LPyfkL5sHfx5rpaVgiGeyEohWCngJFurUh5x5CAh7s86mrj4jCeJftVrtrP5E7ScvReWbjhsKVLR",
  "key16": "tZAJXLx2wPGCzohXH1W3Mfh1yYB8moeYtf2Vm68Lo19jHYtFRVrpH8BkzKZXijxRXLpoGb96VE4PYYfNuezywsi",
  "key17": "3JBQYmTgBWQtP1t6RSF1kVZdtV2JktgWQFmTknef9bxAfAkAGEri1CM91WPXPQepAozsMdURM53G9GNWhdjjhwjU",
  "key18": "57daUwkxj7oKHF3MtZaA183XXP6H8m2yAEaN8LdYPZu9dsgKpjD8h6unkRfA3C2LfMFfMJ4kjn6dgoS1cjMnfWj6",
  "key19": "3meLAEkTrVKLhwFCz58tJX8eBsxGmoHHrxpCv2RcZ5Bs4tFXjSMpJ6X916ix6sfAUWoLZrU5iJcS4s3yrs9NcoCe",
  "key20": "5HKfnS79RETNidZo6menWxCnE2ZBX87oJJZLsqgAr72jKQHLU1GZxd9FrC7DWhe82DXMgxtz2LV7BHdv4sjEy41B",
  "key21": "2zerVnLXSDtAXmW3EbTPRnFhmq5LRP1iaUUXL37WKUMRUsEDMV59AKtEeQFcXFNrJutuJsfw7SBS3PDoALarvdiN",
  "key22": "3LfSA6CzEn8RGqrjTRdqizsYRSgPMZTc4r761A83WeBvb4Czv48z21pSU77NpjniBGYKWk1WKskoigL6zW2exRw8",
  "key23": "ibqVe3RnxJBHRJ75LjbugRuCmQwEjchTrN3UdXwUipB2kMvirFkc6r3cCuGaqXe4PShi17YC7jzK16mzF4tfE96",
  "key24": "2LYptgF3WXu6qPum3HoqxeDkRH4kaoAEc7yNPZXXSjEiQfc1azLRGRkafErvhVzu94hqWitbsPnapQaM5kKFXcfg",
  "key25": "5tqUHZo883wAwsFVCiZKRDngrxqS2suju2ddtCA7XmDtrUw5KiFZZLEUy2gkmuBuMXkYAv8fHHZ387UHM52WWtdM"
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
