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
    "3g5fscNSxKzvzCe3HKA6h6twcgzx1fN4NYL6f661AB2qeJCWJhYbw8s4QNYYoeNgXgU8yPk2Bc4V8CNu55UQM2iP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38BQY6GzyZWFyvnNs4vuMMFnNzbPJsQvSCpTRmGFUYJgBJmxgPFPUmDndkryWXaJBpEUeUJbf3sP8XqqWtaFumXm",
  "key1": "4k5aqva4Bpa6CSqYRdrGmN5tBSDycyhoK9yiXRtKvyJm8eB6mFcsviBkggJY11nGCRJ2kWxnjkp3Rf7ajkLDj4q2",
  "key2": "xbHLFexmvGwYHvkSt4XVGP1FRVdL5shtLQHGfZeU5pyWnSdaA7d8PLdbvPQLAmy2A4knf2U7ZHNiZK11UXHnQE2",
  "key3": "5hz8Trk78tYLUhvwHRm2zG2BEy6hMa52GjgkW5BNNkFqPb9KnJzmFAT7fE6GBA8r5PtWA7E4CEG59uuYie2No6hq",
  "key4": "3nBGDj1KNxmvF5MU8sYLM61p225Z6HnEivsBqMpUZYkVr8v6tQNP6dudCXiqEevPX9TYUrDrQ4RLmGQFZPRCH85G",
  "key5": "4fv1aUnFEtGt94ryf4aqKYUwxLYNttjfm1skHjQ1tMGTBnJN7y8T1AAUoZ5C7PZgTTNVsXHJ7RpFZdt4zivtaQJ",
  "key6": "H9TDfibUoAkAMGNPg6WabZCTtmiqaXFmMEViuZCGU7tCTiP89FsvyaNF8LjAaw9MAsocJVFymJ2DwqLhMCgxaqP",
  "key7": "5DoBgqFWvub97SLS1v6938d7JXwsrvnScp36BTypgDXB9HoBYuuckvDDT1MGCAyZ78GSwBkvyywFnvjHNBT3R5JY",
  "key8": "3pkhXPhqcCxUUvZPnWSekmaL7hfSU5aL127U2KhphjWnNoa7utzCg4FjFikgPY65rLDNGaRhBzjUMjoB6k6vNr5q",
  "key9": "575boWn6JVMJSURMWy3CdS6q4xQ7AhyRXVDxQmQQDhvjdVqwtfAsjuqsWFR8QrLxuJCaY3Vpf3jXZf5UwEV8hejS",
  "key10": "3EcNCMFNPR4BMKVucuhCeLJZevGckoBrp7KjwLYrxooeBveXdHjfAEYsubb5agfRA133sMEmECMQ71XADDZryGw7",
  "key11": "4B92wLKr6y6pVmscz1Hrrz2UAgRkTesQhsfUjizBuo2JLNnRUF7Jn515TamrknBm3e5JJhheDQtJtTijZgwhSeYH",
  "key12": "5ttdWao4qsD8rSsQyW4zaygBgggQ2JdQgGc7akE8AtvKYXF9EjjeX7GuqvNATo3iadEnswpWySSEmbQJa4rc985P",
  "key13": "N8rmC8Pk8mKhibBRA6nXERhRktM1HE5eDGA5mb4HQLES9sz76B36L84ixN4Cd8TwJQVC7jkcCPTkqyQckzBWMNv",
  "key14": "2iNM6pN1gmi7pEqKSiBnPeeJkiD3RAK769cPBtTRPTrTh7vohhM2ekMPykqXvAL7zfcK6brVB8M5E8HnSKTXFc3Y",
  "key15": "7wVzkL4HPS9WUCJWohQU8VSVozV9agnrAWmuCzVvhgkTAYn47q8BiV6FY8m2o4QS7C6QfrHrqa6pNVRgixPMGwR",
  "key16": "5idXQ9T4LXpPRdCghVoN4hFjDmfmpHTyW2ypqy1z4UST9cUXiqtGRJLRGwYUjcnEyG3Fv25eoZDE4T4g69Cdux7g",
  "key17": "KwooSZjXT22BsrKm1KnvdEm7rz4NrMgNJ6C3hHsE5YDdZZZhPv4vbDLyRsH9bWd24S4kEnWLzks1cTnvUESQ1rf",
  "key18": "2iTHvBJWW2bexpvttqX9XgtnT2cifPJWGJDQ8sfzL4GFysLCxAGaLsyaJNy9kncEaEVgG2CbxHv4z9hZeskhiPUs",
  "key19": "2jXrEFnbpnwPhhpBvp7irb76vWVeq8jztZbSTkCrdnzu5CZZdRcK68rNL6Mor8mp7XPCApGCX1PvfMoHiRwKoY8L",
  "key20": "2B7NcfbpVB6emfKo1ZXwnhaSsFnoWJazCRyBTe2W3cxtJ3ki3apxUD4K7VHJrxzPCky89GBYyMEHQ5igHsFTzEdJ",
  "key21": "2DAwYp8MwKbyEo5KGZHcaxJBhWjeLupnAR9GDSpjX6iVsi1n1xPhXg7rwabTwcMQkpLWALeXnUfvL2HbGZmhVQAU",
  "key22": "44ZRwdcwe7dCkZ6Am1Y36sJAWNbraH8MRxjV2EWiEr6qm8Chbr63cHyvuQNiKPrEZtwF4ATMLUACSYybkcAYP8sF",
  "key23": "5jecWVAMnZVzKUe3FC5L1GjT4bnHESxp4Jz4vktKovjw546W2bj18drDWixEokXyjz21bjUrL7UT8dt4WXmZMDi7",
  "key24": "32PNXeThYcMWHB51WAkzVY27V2hHaE12kRdE5oJhtPsXz6m7Gzr4vdy65Cka1kBb4Bc3XVPJ2nLbDTanjcK6JG3G",
  "key25": "69CsQHMQbt8YYb7Bmx1KHQysjXYNSL4rJPYztYXghbN21CYXintGdvX435Bq67TyeNRFm9uhYXNpdfhFFuvSmgT"
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
