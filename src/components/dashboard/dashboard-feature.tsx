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
    "5jvJRc5K1FEU5gDbvRsoFYMu7vPJjGp3uQGB6112vcxQgr5iaQfXR3jS2VjjbyBiFrmi5WHiauxs8Lc5XW64Aqmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55n4DYQLjZ77cUjMCr67PA3ya8xxAjqLh9ZjsEScMpYvvPc757cMjG8aodV5Eni7YWSWDDSoYjTerVHedeCgUjJa",
  "key1": "5pNT31E6F1PHe1kg9emJ9bZeftCMB9aHa61X9yKjSNTHXhvrFM98ACYhbeMrmSa5nwPe7XifUsu6bvnVeSULJasV",
  "key2": "3ojmU64gnJAjfYHA2P2yQngmjCG1S9harBuFT5Kyv1sZoY4eBF5xhJQ7DSVD9tcErfsqX7NRcKFRGMbcxhhBhNC4",
  "key3": "2qDFqK2pAgLr1xi9vgDdLB3Y4Cz1kw1NmM45YPisD2h1rQ9BUkifJoe4WHF9Uu2JdrWhdC1o36sMSZAdy9djzq7D",
  "key4": "UNu9Hzp1DwbxWwrYegEmoiMueVaXeDJRcVEDEpEnBG2qtr47hCeRM8FnRGhRRxQBLciowTUZYQocZVTBG4yMMrZ",
  "key5": "3zNSDh96Wefd5zB6MYvYaDm1n6bmFPQjYHwNEfmTPfzeErVHksqUe4JXCcx2ZPXYwdmmtuiWZSC2aeUKJLSy7P37",
  "key6": "H9RvKGxkT69drcrYotnUKJD81hanMgQkcDbWkL2Y7QviegBfK2fSG2Qwa575a1YgfEpqZpCprnZML45M1NC9ELc",
  "key7": "uQTpeJmhYhJ8nrWQq5q9vwNz3udTSJNRc1tozSCHKdYJnAgRTsHBRcfbhFXrbFDUaJA5kf2CH4jPoDN1HkexMMv",
  "key8": "YmyP9T3Y8undQ4zaWmkjsxcLfg1y6aHkBewQ2Vt4AknMtzzzuHd4KfuXird6pC9scDnTghsxTY1Zpk8eRDaWcF7",
  "key9": "61RDyCeW5MFKX4j6fWsBfdDFwxzyvJuDxNUxkQMZWhMrkFsDMDpKavB3LYjiqpoo7yUNcitXMTmWT6rVUs3V17sF",
  "key10": "5FyMd5W5gBH5nFTQ9pRcvZKqjwob29atzBBTAhNAhrxQNRJg5TiQL1jeJttv4qQRjdpA4pjciaeGdJU1rsQDwubW",
  "key11": "5ZmBhdvvxAKBdJ8othtuXTXBxgyQrZ3itohAGHzLakhqm6nEHdiv6KvHFVYB4vfa5Z8qppSjppM93vDWvDQMVRSs",
  "key12": "4HCrs6aG1ZVcuDCAFnBNeo4mXBEdGL8hneZLp1BPKuuXsMFw8MtAygjL1zJASfZq4xz3VyT4pG1ki4pm2S6fRKzW",
  "key13": "36Xz85Bq6dpeDNm7pQW3dZmzLAyLTC8v1iSncuTVS4GY8UrDqCpeKwWZLW9y1ygvBn7uVK3vZit6F18NU8SRdzRi",
  "key14": "5KkDcB2d797JfqyjrWXXJHhLF3qF5Yk2FMuau2Bg9ZbhVRDV5YDQWEFnpMQypY2sjz7URSu4CyT2W6NFiJQ79XA5",
  "key15": "4wXtPPBrQmWPxRVixX6Kw53U6Vb1bCmRxXGu5SBU4Ptfx9xbdvfd6v57ZEMiADvL8Boc37eBhhvMprrNvXkh75cq",
  "key16": "4RiQDKKEn85LvSKHjroxKDUCQYPooKxTeA83kCJdSLJsGHDfsXW23oXQewSDKjqmkZ1SraapVAr6muhUsgi55qBh",
  "key17": "vSA7Me4oiYTX1fFChYp7PX7zxqeDJSk5VLWMoGGoBPVZ94faiQ3gZdmyYNNCbc76irTAmpqyYoxxwzBKTTRCtNM",
  "key18": "2E1zxyWmo5nwrjd81ktSKS7yjjY1QRTrz9YUmCXxcVbEgNucdNLWaPkBrJnCPCAUoDsz5RtjpNfeB6bxuNdbE28R",
  "key19": "23eq3hdkFUCH9VC2k35k6peu98RqdNkMwxEu8xmSAkQ1VWhkju9FysrQZtZFC1fGEVhshqkG9mu9fbDCmT3F4rzT",
  "key20": "3qV6iakhBrZSE77FTiHBdok7kwYCcY2h4w9VSct97xKcnwvps3tVWFLp2k4hJw7mhZ2e731Zw8gz6Nuvsp8yVif8",
  "key21": "2Qo3PWyxr2Q5ao2P5LR93x2DMPzgcAiKKN45m75ufjhGADW9edHys5QZQrdcijnHe72WLegEPZ4rcg2BKDT4AhAz",
  "key22": "2LQrosipu9Xe7cCc7fjK7WALGUhYgUPLvcQwXsGVjqeDiaiP5DWbbuTZ9NYa3DgUYEvATmztQTLNQ8MK8sTGdE7p",
  "key23": "5jt4jqVJG2gNW7HkC29L3533BvnL91uU2ixurC7ZssSN6P5XLBjdS94MbsizKLQYPtGP6s4q6KqervV9HAAAfYwQ",
  "key24": "GnJazLXNd6J3T7k6RNFTtNez6dTVNbcrEegAHXmSmSYEtK9zYnV4rAU2ytE3ardLujaEzFfeyRYsyYf2SvrQTJU",
  "key25": "3hzzXpH55roym3xQN47EDShuPiixfGn1MQjNDYi8VJxew7ciahJdkFpXLwWYuEk7sFyQgm7VtoswUVhx2LjQ7YGo",
  "key26": "2Af1oDNCaQzxVH4ickvVEryEDDSP7MXvgqZVAkcnyGthVwqBcQ5bKW45LGSDt84Qnp6CBuG5hMy1YdtyA35P3BFx"
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
