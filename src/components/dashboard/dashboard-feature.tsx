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
    "2jJmo8Xy8GKBHCS73ceE8sDtKoVZr8rwf9hnsAPyHmPcE46AARpY7AjapuJaWXvuK89e4WXGomD1B6ytkBZYw2Js"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQj3pyJdb1cbCuZRCUSKfRVzH5uTwJUmLhgtTMHjQDk85yvpF1tMAH9Y8rGLMSNffwSVjmebZycANjPUMBrsHD1",
  "key1": "2m8uYgYKFzkjQGCMk2FR8mQo9oZptjXypn18SA2AKbRBJ5gH4GRNTPDp1zwo3RyK2kJbVYpfmDvmNMGcVJedDxHm",
  "key2": "5YykULcUYvgnZiTQgNajB4hyRbKLKeKbgU8Nn2c8xGXM5yBRcB6Xc32oH4VHXR8sWMoacFcNePYVPPegsjuRxiyW",
  "key3": "58FiCLn8rrkLW5nnKVJMcnU5KZ7mAt4MUhbdp8APSYifyNm8WQXNrU7WLhVHPtL4Z1CWsT5VsWiw5bN1P74iaxv9",
  "key4": "3z7bm4r7ycZRFE8GdWdfMWEhVe5CBUp7Ld9k2BiNAJk5zRFeDibX6Mfxgm5iCweKgRL9VamryY2XQ2WYcrmVdWaP",
  "key5": "63su7h1ZDzedqT5jGxsBxaZT65CwGHFfqNgw9pavCmFy5ajpppiD82GAP4RiGFU6QhDAXbWaYbLQ3KECNh1cHMox",
  "key6": "36BAxPNfA2CTEmqAme6HkDE63zEvRU86KspRSvN1u5paaSjRyTn274gqtS1RiAmkyAEUvguqzb3UKmVHR4sxj32y",
  "key7": "5s5UdX14kK8SpznP7qLc4UGaGVkWnphceCcLhCqS2idifXrS4dW4jMRswr7Xjb7cHhTveG9fHjNFa3ymULmoH6cM",
  "key8": "3HUB5XJ445PFaFMtW773dujkqTUQTd42eyAx2XJk1BEkWoUEwEuhVA1uXDsoMymHejXX3Cff9Pd2CCWG8DjW3Ldn",
  "key9": "4JLLAaMk5eKRa4dSWAqFKfzAgraUhKx75QJ7rQWZsWjjKH6LnrKbguuZvk5pVGJN7Woc9173zeYUSN6scsGVM9pr",
  "key10": "ga24gmudmp2APEt3rus9rX7TU8R7QxuiYkgQtXggLkVhTCwseYTFNRMDurc3yJHxUWhRGDwhJWpdZyiguEKrZ4s",
  "key11": "61kRFgu1A4PcZbVneQCtvrvZL8uWL1R9QoXRs3C1eRGo31aR89DJfQxbJkSiwA5NBh3FRTB1Zuc2FEoidT8JvvEC",
  "key12": "4cLMQDs4SVWEbw4ALn8TrztSoKuqsMjaVgPAFtuQgZqntbyw6bWqBGQ5iRm3CgrHaBWtEG5RiwoA9vXe6YjVCnJB",
  "key13": "ciphSdqdTSW1Yr4VHd6t7wofsMp9znbeQAh7sDaFM2yHyDJay5mSAWoWFVCJPRL1nJbTqMq8tqFZmGEPwm5Am65",
  "key14": "2p74A1gQXoFQbcrXezqyqoSwhaTE9xCuFKVpGQG5gnHtanaQXACNfZdCtRQ2RUS5Rh768tCR82FMh4nEjAidLjm6",
  "key15": "5Jyrm1Uq87qXsdZPDkaaEnS9vnxivS3Rd5cmuSrfWNy9k7d8pJXeQjNYobqn7vjiHh3B2cfxqUFQf22YKDzoSDDj",
  "key16": "5mJ4ptDpuQ37bBngAxwzifi8pnFiJeXWYHeePHnPwahi6yP9a1dbYbjpWGZzEsFr9gE2ExsNdWHyCdsyXaMfB7W7",
  "key17": "31Dea6f7sTEi1nbd6TyxnsvDVD7hnmBThJzjrnLELLbzvZ4kxbgm2xbwZLS8oSuNwMMCP2PDjkBjFDAh2HKP1GU1",
  "key18": "4xqeAJyDnBDATg7B5sWmYEd8VTEGJ7oHJdXa4UzEszNEmMUKUkJgEDaUp3AUS4PkPjwGCa9pDen82h8a2kKWKWws",
  "key19": "4c4NkYujA27kZpbCghvWCUAsKNqTSume9wZhtwETE8mdiZ2m8etH33GAWQTebaJubz2nchBQynbaGJ5PFLddAJJG",
  "key20": "BzwEjgxiw4tbA3WixgyYqnx4fZ3xMxT49yqpTeD7N8syfbKLS8KsXHQRbQXPHTpHMxnfMXodDTqnPsnxCPdFmxh",
  "key21": "2cynws3KqVa5Ck2zEdbiawogPnpCWf2pauBxwHcEzq1G4ZLMUp1xGH6ktzeqpGMbn5uDXVRRWnzi4ZvfQHs33XdB",
  "key22": "45mrZnQMi1WGmqzNxpc3YcJeumKxvNzUHNxr7jRJZcnLCKSW6s64xLPrZ95fxsBtvgrQGjX5dmUVjRt3M4eorDjH",
  "key23": "jg99ZKMkiZHQLXraZdymSYfSEQuQqpPHEvyMFovruyojqHzZqApBWyDGXpyjGA4UQyfMY7oowUiKyZqTtok6rcz",
  "key24": "3mH6fnw6mKMjZgnEmmaJMS5pQ8Th1F1DrGNLcLL8NsdgcHqmFKWfaKAFcfujjJq4HW5tt9jf387kJA2WEQaXNJg7",
  "key25": "5U7Djn3DtUjLqfUoFAp6LWpciDt3GVpmrWGFx8xH62EYofPnSZJQwyg3nMioPxTvLCQzxFXy7jV1c6gsM7oei7by",
  "key26": "5uzmApDpuy7RFfCW3zjsSc2uGDbg5XFmGHGbt2Gfv3bpzJzw8oi9qprFcu8kVqPzLc2oGcesJz2xheUwBc1wnuNf",
  "key27": "LXBg2iY7yJFCCyXp6gR85jzWV1qg9zEPDYae2Fu1vRwWq3cAiSxYqk1J7YPRKTCpd4BNQtDdKv955FvMxkdnFRh",
  "key28": "3Pw44HFmSrpKoo3ZD2hSLqHwQvysrCP4Z5DW7aT72oukDKtCtSEcfVLqNG68TfoRTmc4CCYxPtbkWFj4QpNFa6Cp",
  "key29": "3FGaDesatUvqwURhL98dJabYavCET1mCzW4rtyPdDNtVCxgx7WVVEhvvQafC6QPvcC31QNgTeMTYhjb2nzCh3dei",
  "key30": "XeAJn28zr7ALGPDdS8iwWthgM1fD7VSxeTgCe9xrNVFQefFnFvWXwWweAYJYBuGq1ytJSMYdgN9qPWQhwaJYg7x",
  "key31": "4BgUjcmXTivv8L5hUTTnM1s2ZZtMzU8FtBqZ8bS1m2h3f9SUfF7ayKHpibnKM7XxCH38VVkjDFTdJopiiNeaPP2X",
  "key32": "2JiqqUraHRCweBi6M7jCVA7uv7Ycr8N3N1AETvnvTg1eAFyU1iV6nWEX4WG164fcgCivsjwyEUU7EZmua5ij72og",
  "key33": "p1RdnXC2Gg5yn7fqWp7ZhrGydTjpNmobN69owFNobd8AxoK8mAdmDSGw1X5cg1HVZEq6AtMxGnh28756YMFUriB",
  "key34": "2xW5gQMierLkqjEKyWiyGP9X5c3Jmr7BxpbBHwGSNLNhYyUsSsjeaY7FcGsgwpddsUkMaiaX1AqwGa87giAmotCi",
  "key35": "viP3kNWMEaFyufTDGNJCL76E95fUwA5veo2AVKpAWVn7tk9UhxfEHi88kgtXwWJZkrizfm7XGUvCXWqVzEAEYfk",
  "key36": "4PZwc5wpNmQGRffowomGfsQYoH4tGP1UA2mqToSx6wAkUBbfkiJY97kmTty5LkMHhbQAXvvG2SoCvSbyPMZe6Xab",
  "key37": "4wvBokNpiE8h8Y4kzuSW9rnWhfKPXXBuuFuT1WDDJJm3XmAjb6V2WjmV1goXDh7VdnZMvP42qmGcrCj7kZfiubDX",
  "key38": "3nnDgVre4r2LL7XqxTpz73vEDZFfa1zHKpKQ68PkTGhavvBigB3iZLFsNCJSuAV2SFgZUkZEavw4U9BBbj7iMy7",
  "key39": "3eemQWsxAAtad3yqDUuJN71uT3QHjwwaFXdCqXqx2Qhs3fq3ire5yAn2RiWFgQuJcEc93W8SevCWgyxN5EYwcsQW",
  "key40": "4XsTNWcKAS4VZcuZZnh85unkdAmSoP5wfd3TAUzNosidXW1qTd8dxqTzF5viknc9vg8GGvztSBpVsCPKjgCW79fA",
  "key41": "x7uLzadXCaEQAreoeNN9Kd1a76FrNzZvdJi9MH1zTnbiRyBs5wzNvJNmszV27YKJgfA75mnrjHNU32fgHChHj1S",
  "key42": "23YnDiQcAAvmqHbUPmJReynmihH3VDVM97c1bF4nD3KS5PWCqf4njAg4J8AVETj3uNsTprpx6iqik17hgoykR74h",
  "key43": "4qLLr5f8HgTC6utMgyRV3pY4m9VTiWhyC2XdPQTpzsn3XmSVxn4ti9KGB9RK8g8zch8ALn3mmabRsFuNymmX9vr5",
  "key44": "3rQoBVQredPSRr8V52scgY7z6kUHQqWT7bt7vPKrk5wE8GQo9gnv3WeaLX66DZ8u8h8bf6ZsCsGtENYhERxrBPLZ",
  "key45": "3Y9FrumFt8fU4vwtfsuPvtcrnRtAuXC3ytkP4kkcSd2eV8irShgSdddGNFucgZDjv6DPxutESSaRNUVysi9S2UkK"
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
