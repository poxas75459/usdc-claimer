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
    "2pgoFnRWowg9e7reKdBPrHVZ5kkPys1NafZj72mAoi4T6qynRXRGLsKcTWQe8SFzUjeakP7obpSpUYETbhLY62ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wHiePhHT5TRHpBTbasPW1ByQ9dHQ3xyxYvv8zRWtF3g9DKjqnfT82UBQd3za2fBuE63XPiCXJCRyiRr3tdBpX8Q",
  "key1": "3wRgMEqeaNfYQkUcwjJbdttwZdA5d4aw5wwpQ5fYrTiucQbhMbRnPtTUX8rbEELVFNo8CDPFRtLuqhrQnVcsCw5y",
  "key2": "4ZT57RxaFEV5uT2J3z2Wpz5MVgnxjj4cqtEBrSAxwpYjGgDkwnyiKoNmYCpwEsVaukjvDNy9e3yeYmMG7Vxc2E2P",
  "key3": "2LmYbuTfYh8eges8Kwmre4ysHxGNQBu4yfexQgw68NuAb4hJAPYhTrVpahUmfPyahcXaVvj5ivVuWynZKeSz9WnE",
  "key4": "5VXBgVVfHZHLhCyg3D3uE5TEMMznE39Q1q9wEtZoqXP8Fxt1hoHd8TQtNrSkWb1CfLSE6CF1PffAyMxr32Y63VjF",
  "key5": "5yKEa1tdyc6SkR2ghwBvgJEQrRtRE9X3xU66kn3mJfApcf1WRmzZYKq8TUAp8WXa2CqPCP6Yoc8wrCmfskR5ZZkE",
  "key6": "3K3Ba8UJx2sExQ56JPt3gLX47fjjAHkExzbYhYrqXuWZEwNJ84q3VT7V3aqPMAoryyxMXWUC6zgkv9Zz9p1QhyGg",
  "key7": "GFkdxzzAmJSaX81bF5gtaP3H4vttejjgKYp81gPa9BYPCcG8Zd8zhYCAsfdctJ1TVqtoawgLdDLkXZukiknnFwn",
  "key8": "3K6UGar45z9oUfTuFWL4cffvywEhodUm9FMy8M9ii79XpbkYD86CcVK8Zg7dwM6hdzrtWg2oKpVQ5Du8vSMpRiNG",
  "key9": "3X8TfDBwBaHtSeX1BFUK69CadETbFU5Vqjs3Bfc84mZNcgQxMNxH7RrXxRh7mQz7q12VmexBr9t57jsoHnR9KPbc",
  "key10": "4BsJ3JBxVWkSbVYVw7Y46GpmyHjKq3kFCKg3eDq8HygK7iTVFP5taFqC3QuBrBopNoCM4yr7MqwZFkFoSsA615bA",
  "key11": "5tT7Vbcqo1wqMMgkFGqN1CoRTxFr1sHwcqtz5Vu1UekAFgyzCaPu5ypf9viiZfX2NVJtbsRXRunhte5Q2Ah9fvkR",
  "key12": "2mMJm3p4yb1wWE2QmzsDvbt5GPAqhi5FMMY4HBWHTX7MxZiMPWxLyxz3HTMCBXyvhP8gQeEqHi1UXktcb4hEpjWt",
  "key13": "BwFKqAMo6XZ3TYGFjL7ko4ARaUC5H4Y4ZMpkMWS8bM5JurE2VaZRMraJwxXNzMytjdvWipC9BHRawrJQdRnS5AE",
  "key14": "5tgvpZLczt88kNrEgzMKdxf1GUdB5ujg2ZTUyBPYy4ta2RSuAHYtXTVhpRJm6m5qW2N3SR9FNUwJSwh7SKQxurep",
  "key15": "4GmEwKVqJ7NaXhfNHQ3jCSNWKMVUmRZ8N6gSxvw7L39FM49fnitZcWtypyLCyZrF8nsnwq4EbUBvdNsnLaz56rzx",
  "key16": "2Gpfna3AXKAkeEKh7bLCyNShpeVqtgkQgM88xiETmNS7brUz2DhQWb2BExWLEYFJhL7nHzbWGLDYvmYs1hbYPRKE",
  "key17": "2fpZAg9jY8Xioz3HvkMTRxnNtB1dgACqgqVsBqrMJH64ju6B27Yd8QV6PZiuju2AhJ1wyJtDPpmTUY3kqpLYr1pe",
  "key18": "5YueWv78uzxzpAU6mioDQ1vy4CjBEuGDF8hHMyx4rA2hoz12tbJm9SfTME1yFHW1E3nBT11qKZSYKE9dXGJfL387",
  "key19": "4Mc7TRNATJpUYxxS8abWaT4HNpfu3kfJV3c5jgUVcnBKVU5zkinYMFeUkW9GMuKruPfRmmMzRDNwRGfpjYkJi7QW",
  "key20": "2mwGbyaJ1HcomgXQD8L3D4h5XhXgWDoZGguo8XZaxcUH26yKw7psGNfLLrsRutkrCoVMEtmZKxosLPz42B7z4sHr",
  "key21": "2KzN3Ckqg8az1G4fgZGwdZYBEW4XGYrmmk225iZnbnmwQbyZ5D45xdaS47N2EZAdhs38FUKUWJ9H4AwvjvfHUNmd",
  "key22": "4xFoYfBX6S8JsJ5nDJ5ZDhi1UKe1RCrseVm3pqV2HaHzdhLNt2dMAoF4nDxTLawgc3gjFWE9nXJ3bArpZuEafGDx",
  "key23": "4FfvJy5ZDkoSdSJbxXqtVtANJ4bbnFksG1Pu414kHkH4Fian6rrHQSE8K5kYjyB3gQiVECisYrZgV327k7BbEuW2",
  "key24": "2sadntk19L859JtBQfPXD27tcpcPL3ZKLFxo2nVZFn31ooeBWV9i2TcxgoxidcvAaHFWoYQByBfbkscidcrGgngZ",
  "key25": "2vCzw9ECSHcHb1MdjrxUXXM54EDfYqv9SM7uTtVKkJsHwcDkUsiiebkDaZFBr64x7SmbNXgG6mo5J96nDuRjX4zw",
  "key26": "5M8iX4kMRVuysXB1yJbLkDe79tKdtUAsnVaMPZg9Mh85Xa7tTzow6z3CPb7W8wPWJvaRTKNwq4b4L25e7eEZDRiK",
  "key27": "5FKRBBhyJEacsFn8ZFGt4tv9otBugrotSoAR1XKYxNZ86o7FW4cZD1F9bGJjDS14PMocH9oZCghWCRcyhXwBnzEd",
  "key28": "4siRunxiE1VEofZtCDPB3HAL61C5E4mixH7HyhpoDka4shxUih57Kd31CotmsahHiFKLQHnYaxTesNarJwGQ4mNL",
  "key29": "Qqwkgtd2CGGfr9PzbdNHiZLv7PzUbG52dBwSGhUPBYkyLU7KK3JC3um7XSiZab5Gt5sVCQ1hDPx5a2oxjDSqPR8",
  "key30": "4ybM1XGTLPqEdQ1ZDcwsMgfRM71B6PKDDrHnuHMAiTUyUKWXSkJ2y4F4S3u8ZLP4a7Nmo9fukRMEZRFPniDA6vFW",
  "key31": "3Kwsi41r1kxat1KsiknL3ff2jPdd6X7AXTuwWhsikq8aU2MVtMvcCxmx5kM3sZxKyQhSfd6YhHsXhrQU5YzeWnCu",
  "key32": "3aovVdLy3VBZBVnLLHmxrzoqdhLBWkZscoyXPqQ6uDbu1pUFpYj2Y9BGq6YzzDeFordHVtwhBXxbXgCMSJn7L3Za",
  "key33": "2wCTm6inh2v5iojjrEK3z4sRNUYWhv5UyBjo4HaRCCEnMnVYs6NpdNkvXDoryUfxGewCxhsjNZ7jU6mM8YCMyedM",
  "key34": "2E3cd4yoARKehZRkK9N97s9bD3kQCB8Hvcoa8HJUDfxc67ofSCZWJkkohLA9ax4J1NyazZ2Uz7Q8WihpcgyiaSVT",
  "key35": "313rbTahNYqRU43ksXxKYt3PvyB3fGQFU6vRyEQ6aryTF5GtDDHomsQHMji1J7fn8mSYtHXtScS1xxSuimbsLGaY"
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
