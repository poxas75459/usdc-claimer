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
    "4szFcWExXvcc3oPFbkC3jwX7SQxmL2VVrQ1BjhegBTwDwnHkX7XJW22tLZmDbc8iQyHUf68LibmvH5Qe7wCzFEJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rqtHjnoN8eTAp3BHAtHpmQEmhjuw2HKTyt2cENH5cvFYynQxwFD3WVQ3t9LQPqKhTvvhHr3xf4P7hZK7Fe9kr63",
  "key1": "292KN4YGpPKWcLaryv5WBsAMAXdm5X5BNLQDon67GETddYSUaFjNjbGvP2rtXuP3ahfAMU8T2L1HgWQq2BU2eLSF",
  "key2": "5bEhi3hrGfr5zrBJSUvAnUbo659c9SDbXWojS7kpavkDrdckrzhTtFkMWCTfWA2e46W8j7vHk99itPUAVSgG5kfU",
  "key3": "4uGrf4BiA4shWwA27Tf8Czr6fJpjcTPZ9CF24sJG7hgfxPgBoeGHSLMC9T6kfe86YcmQVoMHGjX5VLbKRZRKV2n3",
  "key4": "4Fom2huJLWFiDGs52D2inQDLX71zFmqdvq3awWTXnBerHj7x6NTx1MKV51yfpNWmxpbz7jzMi1FRQK6xhdo4garP",
  "key5": "38er7hPfuuptHogYkm5qL52nrrzzwdEk4GMpgcPzvv7bGwe2UT4dTXiD7nCkkwtMVaiP2zmfbZbxuqM41Yqmcz2h",
  "key6": "5G6k7MhawC7P7tpRteTxeH71HGE5hvRmB2zsufZkV49R4eceb8Yn4LEeTb6JtGCnEqNf4qu79wYxoNXWWQf6AtZo",
  "key7": "2eEm7bMCwkbrQG9mZ34TmgYSBM8HchEhV4UtSV6oQjfPmweqTLM3AugognSnn8TijVX3fsRpWPNGxkaXseS8nBiR",
  "key8": "j5mWBtPPFWDfwBWc1jtgFG469SifePqyzTU2Qq7Pfe7m3Yg4grU1YRgPsauvQ9Gk9EKGKH8WNBMEFMBUUJFCftZ",
  "key9": "3BaAze5kAwBEtv9hb8rKqx15CYKJiEbJDpNYeJXNFBSdZUZ3WWneWZ6ZUk161ZTG4g5n41HH4z4TSv3JcqCM1AGK",
  "key10": "4dhwyEUCejFf1f3MLqiExRC9ZdKuwugsWgz8WQLwkPc2jJzA4nvRA9GX8WPxbMnHfcyURi5iZdJC9rPWYpn9yTce",
  "key11": "VbLytAKSsxUeWQAgUM6pG967bfknEoTePHSqXNAZfZji7frMTH5Qx7G1ZFdYz4C3vZwgVWZTqMyNekb2LDW9xEb",
  "key12": "26DFn4YHzW6uFZ63C7Gmk2nCMm1s9cEh8w1GQkfqLKTXQoQva9M78qu5odacUDSpCaLgfR1ZExC5YgcmtzDoacHT",
  "key13": "4wFbrEHfdYesKZm83wus6LencZJ1gEqbWumikVBS1SBfa1udieWEcGtVR7TCSnvvhN2B7aaGtYfFdQhfny2sRmki",
  "key14": "2Fxz4XdWbUD5xw9CV5aFBj5HZ8DYe5Hc9S3nHN6iq3cGGDvJ8Sp2zQwxKhYy2WgdSEK5xHXBWUfAT789gXmADUE7",
  "key15": "33Kj5CsXkgfwTTht2MeWwgtEgWMWCsr2E1C9FuAaXJP7Lb6urPsjRMPq4NRWLJZ6TR9zyrNcoXFtyu575XLUSSxk",
  "key16": "rJUWG8aK3AsewwQcc8nypidE9cgVpXV9qcqMVk1YVisoq2k6naP8JaMKhm1fJ6HQoFNLQzynMUdZeBtpMjdbi5W",
  "key17": "4uvtxqkhGcM2tJjMoE9FfTispv2QZevh3R2kMX7A2yiLMRfbYCVkFTEcJDN7saWVg5qrjz2SqyD6w6VCN4VCSKBf",
  "key18": "2Dm1hxfJJZzLnKrjK9K7hKdPk2GobM7JsiZUs1PB1PVFJaaCPY56p5YGx52s6LZ4yjEfGAJK5kNAU8G4BfVtgvLQ",
  "key19": "4V2AgkaVT7gDAcMFLG8YJCtQEPQyEJgJefTDyo3pCWctvrvK9Fi2h5pkR9z3pXcFtD6FfnyAqJVXUXdmKue2uvmu",
  "key20": "pHYq21qi34eM5zipPCEyJcHZCRkevfnN6a1eKbjv9bZZD8MEyWA1oPmhq1EXSiVSXYcS7MAj3yk2j5uVRgHJqr2",
  "key21": "MBxhKnkGEaWh8xwKUzn5x9kHWqm61UZP2SV6GoogCPRHyDWkdursnrXoNAUTqXmR46zSAQ5s9iBbH1qHAkcybSh",
  "key22": "28fkuEjFgGgDipU4PeF7Q9e7LdBQUepuVjoFTcgnen5fmCEqjLKmNDKMDaB74sJUnk3vSG1Yq1LDs7sy2yCp5hu5",
  "key23": "5D45f2w6SsF2rzP8BoZB76VqPYXi9bQZnKn3NLeEr4PfDDHsEWdMTCQZdDDFStrabByLnQneo3FsuxeFosqBLjks",
  "key24": "2hmB8bMEqNvpaUgJwd9k3RbSh2tnTyxgC9LNknQa9LrHy1f6DmeEzubZBmSW35fHQJxy8K5Rr69nC1XuLQKksW6W"
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
