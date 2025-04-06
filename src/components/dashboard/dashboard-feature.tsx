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
    "3FtTUhJUE2rjs2Yne2wg6Gf67kvuQMxPSgXqLTMzgZQ57kaWKZNH5VvrC9buVsmNY6KbNymhxsEE6kvifF171hSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t6vNNP2FSUKEhunkvFHMCcbED2D4fnAMVMs7GBNFysUsa9WK1SPF4gnd3qxtFZCc7EoRf49QdcXuZieqnbfXjbw",
  "key1": "vmE9RrjFBBx2xX5hmT1MgVGXZHm2XHUFvi7p4csB83a3BE3DrMCJo89yp68CD6rZxni3TMx9zReJhdX9yGeTXvm",
  "key2": "2JCU1WKhjWpPqLFiB1wGRvZFtUUjNQ5s9uqMJYEkrCfwMnGfK78gq9LALZ6VdmQcun19YdyJnZe1YvUfXA37ZYNf",
  "key3": "FgSsqoTFscywnREbqxRGLu37ZQpGLCSH4od5r5HBycjiUq3EK17coGRfT1PPqXEbFaRuqLfKisCxb9Q7quhNmyH",
  "key4": "3G44ZknyT5awQvuDxchRw3y9VCJjaK8bECGnkxZSY6daP6xMLuQZPZVaN32SByRJujDr6e4DaxkhFActzvCkM5Yx",
  "key5": "4sUs57JWg7tMf3imp3f8mnYQtWQtDAe8ruGvPH4fgcJCvtzwUBToRwTxRcS12fRUEEKMRPQrSNNjzKzx8urB7tUs",
  "key6": "48M1JL7XmBe17kmDZyth2NfKa5tMJVBS9NZab4TpoAu2YBmMVcT8ivsBFbNCrk35KW3hxN8ojtMg5yLBxxCn87bi",
  "key7": "3GDDe2uHxhLLwcwjPoAXniiXTDL75g8PVnUH9Nk4YScz13zLKdNYjQi2QduGJGT47aNnQ1pgUjBEoFkHd5TziLjS",
  "key8": "57MPSHPaa89SgiPUvh5rGacAS6ysmKkLj7sTLc2gMt9bQ7a9ck2nKREhPKuERK6qRpgaY6ADh621TdXTE8bFdWLv",
  "key9": "4wstseUoYkA8D6XnKwFBkvtm5umXnU7GSeFHtfPAmZNXkp3Sz4B77AKTinHTuaFrc3ARBTTzyoNTQcX39CyaNHEx",
  "key10": "5UCgCqyEuNqam2AzDHZ5V3Qjwwcc2ggWhJmup1F9FQTk7DnTPSGt1NP9CRsCJhMu2DrjnoHbv2LUXtpMYbgF8Hqw",
  "key11": "28ak6nGPnkrtex9fZXuB2deSXnQoNXK5RWvj4GGQBKiFLRxrwh3Hz9A9gH3eq2qXUa7wep9nP5RTrVkycjvt8qLB",
  "key12": "2y4qraNwKCvEjCUX8MhRze4G1VnvK252RVvD6DJzGefrn8YWtp6TYYnc5nFjdcRAGTgg9sFDRPBxDe6FDGZeqg3J",
  "key13": "5GAxRsn6KUsgSBs2oi3qXSyEfBaD8zkc3ameSARVjZGkihJE2rGp9Rexm2yLF5zkxAEx96HUEjzQLH1cBethxNpx",
  "key14": "3srkqAooWxYazPykjBKDcu4x8BRcTe8hbpohgCCD31oKRZHqGzn5skLbnXKhaehQ389YAsLypadH44oMH9kd6uno",
  "key15": "3ArGjgHngAS7v884yJgswkHsApm3xfpdGeXz7foeRVy8hfDaWbLHBFBfeBV7gaaV6P6cjKkfHrEVYAvuGYhan1RK",
  "key16": "p4fWmZS819WdyWaPJ42VZXK8fk3kpikNPLaTKBMpK1PbH3XYttRz2oLM8MV7qaBbkQn3pVCUAUAveGxyVsGUmnR",
  "key17": "pLm3cFJwAPt9xfZYmZ1WwLhU6TLd5rdn9Tc9L6qZWaPmdrumd7vZrDW67JHR6BPBwrb9GkvVU1J9G2GT4xBSRsf",
  "key18": "55rRbxr4MetpuAWD5i6ukvzAHeEoSxphPC7jggFxoBNChkUTKVnzfjmB7XjGCwETsGwLbvky49dXo8yz4TiBtD81",
  "key19": "5ahJx5qJVRYPWoBt2KDRz9hxa1tjEWvi3nM1fRFPBNpphPAMQdZo7ouwuHpTWDGC3sd8n3bunNhAt8dZNLySVTf6",
  "key20": "2afBXg2GGt1FdYB52Q3fcpnMZk27ETASoafyhpUmgAruxAeBHM1sMtafDM1yst83nV2Lm63yA486NYN2VZVMdtoP",
  "key21": "J4kr3VGgvA8XHmXpTSv53aBg1R1xq1usTMKfHC8WMZ3VW2xXukFMCxbXtRSxPxSvXzvBMqdiD2c5QC6g3mKLQcd",
  "key22": "2Qnm39R7GtLXRnftJ9ED9KDrqSBwHiBRHaQNwRoyuAuGHJ2pp5sBn6WZrnBUaeqWR94M1EQnqY7275ssFmx4Jfxw",
  "key23": "oLgCTBTJshhovMgkWUYnQypTGPFBHAgV1NcSodThbnxwRdXPyesnschsqCu3SbsvVU6gAY4g3umK7xH7w26yXA6",
  "key24": "22EQHfoZwREnZ5CPtWf6nKXWmRs2UjHwesihvopbKDJNis941YCaFLkGN6vVACza1q7mfocu3qVF9Pd4FGYjQXKr",
  "key25": "n4BMsmHetPQDCEtRTfjD7LXthmSYfcjjqam3SRmm3QK3xPKifEJf7EpJs45puyjqLE3w8GuCWUBqgPmEUCsjiui",
  "key26": "5Xi8iXivyPZ5Qebzc33Uqqy8NiT2BDJSqbukBPZFyeRvtZ37SgaVf9vn7tsGFpxzPNDyqbbnBL7QepNipqxxYmwP",
  "key27": "2Y3PEDijebAzEt7iNAVXSZ9sEQV8qRQ79MrBwr6DhpBWb9hVkgm1HDUSVSPYfZDEyRG1vjrGoBx6S5R8t529Paom"
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
