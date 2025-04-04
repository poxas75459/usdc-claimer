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
    "3JCGFK3Bg8ticSq7D1Fa37MQpUwvMixjhtXjhefbtwbHsdC4Wk9iLTVavqvPUqypfSJR8aFL1TnDFNaM7CMgdwEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EMNLhG6AzTXyxzu2vab6o5tyS7dugbheeU1Pfmxdk4aojEBfwsiNRpUERNc8vv3o8vu6BwKfb3A3H3JihUvvcCn",
  "key1": "5j7ULmETZJh3PwytKBcDfB3XAsbRtSpcWPJNX1DHsxxeXeyZzzUc1uU3mtwDqDNGSP3JaD61UWyquGNLt6q9X4qK",
  "key2": "5g7R32FPZAQby4vh8pEitnARLHsAGWnq8xBmTp4RCe6ZWC3geGhz1TnD7cHzJJPiN2MsA513Y65k8xKpWtNwpThJ",
  "key3": "33pP9UQ9jhBeJ18MgRiZZpzkLSaHYcs3DsvMmVkmpGqvgjVnwZkwCytgq7ofKVa1ywtjCpQPNmJ9rKMnQuxhkUaZ",
  "key4": "3oHgQxmdxZcMgmowWmLrnvMgwbLwnVMK2iXiGJVyHd64Ghaxg12ToniRc5gs3FA9waWZw16PmXvfgfoDcypU44Rg",
  "key5": "4npea9RsJBpocjHHd6NpzegtdVtULhhHaVBnjoz5iVKdvi4GnPo6s9DEkWYLqj4fDER9TGRhuiuAqQSsxTj5PqdZ",
  "key6": "64Y3ih3WbeCwxdtCJwNpnwR7GQstuHpcqQQmAa7aZeWpK42Q26W44jq7Agdds1hsfz153Bo8jxTum1y8U5Hv7TNS",
  "key7": "32mxLCstdjQZkFgwp5F9YzgVpEXQubiaJVVacaGRRvmsfJqmHSQ5bLdatpy5sQgdBCVfS1SiSLPrmA7mxbCGe8GF",
  "key8": "4Z6L1gYtDoarcRuSEG94Ut1qhbkQon73HP5GGjVT9a1Mwm4RKVaYxLXj4xbuQU2JkLPSmhryqDj9gGDNw7zYYa2",
  "key9": "61QAaZKnc8sZhxuAmKnj1ToHfB1UGUZ9LLPpnkBG5xd572ydSsm3qMNZjE1fE1Dc2PeoFEks858uPLe9bKmeNZZX",
  "key10": "PNVyUGjLN5HmVub9pcRkDiqx1BrTTAZwRv9gKvJU62TEEfno81b3K8q6kVFS6VcA8wY2RW9AhJo5uEnpJAih1LU",
  "key11": "3JjAmDHoq8yE6xWwpXCFiqHkeYL7x39z3S8ccpCdAccdbFAoHGpG3JiDF9Zqwi7uxwqXr7oXeiLNqkXCw4KbZKj2",
  "key12": "3zLvNiopaFfb1qGGB8SFmwMauurdD6PMWzWSrtRUYqNk65isyVfP596ZL68tPFpzzqSsE75cFy4x4TpUCNHEEmY5",
  "key13": "2iNPonkf3ekBf8j8fsDi64wnRaAVA77L5BssU6t6MgYnLRuJ7hyiYYv4TEUoYh1qA94RKTzZWGJckwkmbYLDFxWR",
  "key14": "58bUmZiCw6W1bFeDLQbBT28rerX6Bh25VxeSr4LpGM5wtLpFGiL2hWkqf9d369WJPYLGmGExwJbvdD4JwQ7XAj9E",
  "key15": "2mrhfz6Dz2dgFKE8bH1hC1pSP8axHVhZQGaJus43xRpbZXK3tnXSTZar1DB1Q5QrTFQYtgucB4goqDJyzp3LqcGn",
  "key16": "43dvS9znGCuJvjsFRQvuQfVPDvGqyyn6DGpYfqAQdqqQ47dcGLHNEKCRWt5RumxD4Tm2QA5dkHsFq6umdruY2pum",
  "key17": "25zZ1tZnq8CGofbezK2qYs7dprz7KArDKvdMyqcMLhXpmiPCAyXodyxUHJekcpmCWKkrZtQsm37UJHc1HQj9ARnU",
  "key18": "5V7iLE9Z2jXrhqnee7sW6W4ddsmRbDEyhoce8B52VfnKu1wtfFDTw8b2PHiKAXELJ93wGLxVwrmruKTpXGgKGp5z",
  "key19": "2vYMygE4qt5MtBNLAeA8vDhisjMpZzsSYHo4dec5ubt49Z2NT5cFk3fw4KVoRfGsT64GgHBwb7bSZeF2LsUPWk2M",
  "key20": "5QAmkJJdyq7nv4zgFn7b7zSGuF2tAnUBGU3dj8uGqB3XTn99oXPR6bkY7F7cfLMjabUeTyvFyY5LjxuZExA2FLgo",
  "key21": "5GZKCxDBAxVqHuYKgmCmnnG5kMe5LoJAX7YVPJLNo6P43d9oEjFUXLS3xKLcAuDmgp9oL3ZnCexfUboyySBACcMP",
  "key22": "5r5drVqdVuqAgkw4FLRXb2pq3XDVZFzYE49RhhzxSTQ3CT39qJ5ttoCpfrm2Wy8ow3dkA3cQLMP2X9j3mBzGGfPx",
  "key23": "3PDyeTZYP7QGoin3Tm6W7EPgMEvdRWYwYeERmugijVjZasK6MzEJ8hbVHin96i48SX3QDMHw5vsAYxwaaJw7STfN",
  "key24": "4193CxXhYGv553BptyrBzxxsC5aFgUsBy4m66d34cmhXfySVHnvXZiCM1xHZ6m24QRimyD2zx7QhJYhviWVPqmbx",
  "key25": "2gvLwTjSsjd2XqdSEB8pAGV5F79oqnprRqWN6fUoUsJQouyy9Gu6qW2U6FzLnj7qvLPUvKhHHwR6aZLpH63HSTsY",
  "key26": "4XUc91Jo3g4HgiLUj32eTREy5S8CS6Hh4ESXKLFfjKmE5aS5gkBjXkGaMAT4k7is4j1yzxryNG1dmGPLpCVg3KWv",
  "key27": "4xjeKipbmFAeFkPqArvo455YGbtUFLh9b4ZAQJwcAdohfCngFAfGpELxyMGqqRc64dWMLq8w3JJETSu6hqpvowk6",
  "key28": "2JTXX4JtFawRxxhXnpMsZNoaoxSaF8qFyAHT5tPUtZwgKf1c7d8khQkpKBEiNAcMCJgtJVnTGry6foExkaJ4d7sp",
  "key29": "22rDLPGFJiYiX6PxUXMXs7nXompLAG9P2tKdXYKASSJP14wUZPi158fqbFRQQybv5ChPtNEn4fRfxrSMMQZPp1DQ",
  "key30": "GTYNHwJ5uCfgSCr1ZR6LMxTNprkCQijt5h59SEiA4p4jycoHh7PQjnWmdKdyJwhTSFBRWsqip8TKgvmXNvCrh6j",
  "key31": "3ME6CPCEqtQhmfExKUgqCsVHvdTXyTYAwPzQiaJpJidYEREyE1bgtR4Gbfazwb8A4P3vNfUZXn3wja8whDHHPNeL",
  "key32": "246XtH4FJ2tRCpHYjHUEUoUrcDec8duzpZkbHFSeoYs4w65YjxrxstqVtS7B6p4CnHDKTsSTWAyeCxpNLFDACAHD",
  "key33": "3z8ShB5JhdcXSFFFDwV9xRfhLCr2CwqnAnRALN6SUSgB5mnYaPZUxE2X8qQAL149vp4569zGzogb7E8pcZMkX6BG",
  "key34": "5KVdwXsasWPDnNCK3zTuxcPUf4qAcNvCS568QFMiiFDcPKgirLQXHkRdYjjX6XhmEKKPysLDdM5zWmuMv1qLh9X8",
  "key35": "44kPxeRuWwF18pFs2uiXqELJjXJ9m5gQUCB26ED5UXRm9grNyHx6rzG9WbqboZUQN1P9toRjquQrCAURN7qrTzui",
  "key36": "3ooZo57Sq4Q9hEPab4wmBCyWrpHLx3wimFmgukKFAhLPPiH5TXeQcrytMEAfGWSXR2S4fpetz195gbuW9CG2G3ej",
  "key37": "3McTCs3SJnSMGLs28DdNAhAraF8aoEma8YMAeaN7HqjPS3Tgbce1gwcfrKfoYN1b6BkbTpVhDqgPkoSVuvBrbzgj",
  "key38": "2YzRvhpS9jLpx8H6Sk7cb2XdAPRqqy66mMzqV4ecHr57EsJaPabnAQojJLXkE8TY6HpwVcMVpsx3FnJ2niJhkKYD",
  "key39": "35XCZCJADKAmtLvdxNZcdJ1hDQtSrSmmFKBYxc92gHTeBErf9dKexi8i9egPDq1kGcmLZFjeaGohuiJNtkPWKf4U",
  "key40": "LnUUeber41F7NuSvsFu8HJnPyqrtyHTcbXnYZrooxjxsGzHnmPEf4J2za5dBtabKjVHCh4W7PgnkL6DgiJeUY47",
  "key41": "VMMfqsFcvQ27NcnCBXSPfycKMxGwNRMhNvtXz1dK4tBhDogyRX2C3PaY379i5rJzW8R9FhZG1vPJ3q4pcY7viFt",
  "key42": "2MRBQFDhq2QaD7V9bsoxKNPepYVneLoNNogykdrjjbJJNwYDAgYrrSiHzFP1c3KYfVf7jFawXTXYjBb9GKxzm9fD",
  "key43": "2xNNWoSoB8LbaSeBkfHYv8ZrLXfQfrCSx85GwB5mzfnMxXKsqM6AFAto7XCCLAiTa3RAAiKtxyqWs8wAcCrMyfVU",
  "key44": "3wfYMKkYHBBgvi6oe8KwhB3CMGNfGCZEmNxD5FpjECoJ9R4idDzjTQdzPebYzFqGR8vPrB8Vemqd8BARLsq7D9qN",
  "key45": "3wKrHrfpa6P1tU2niP2p9x84p1qs825TbGwZV6m2kswW6A5hawJy8K2TMEh7cGbKdWDCvL3JCQCoiRdDsfKb43SN"
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
