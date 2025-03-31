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
    "pud9QA1dX8ku7ENNFvkXGD99ex29UXFj3RutA24eC6BZ4a32HADbh3S8tVvoLHMvBsq1WTRT3GYGDQKjM3PwBYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uz8TLbTw9mks3bJ9FrLxho28hKop2X1RRUxpBPzZmzLK3u3gwSAgVu4BSp81ygyxgujmfMCfBDFL9RLU3rmiWM5",
  "key1": "FK2t5wkKjmf2HBMf42PUmdzezhvDbF8FNG11M1oavaz1eEECkGo7bP2sDEGoFKRMttTF2SYwYvZf7DkxuBun4TR",
  "key2": "5RhjFqjdE7agnWvCCaaeuAVdemNngm7QuodtHPxopLPy16qpFr4BTAmfm49Q1NDM64cksQazFWpVTvs5zzZeWxMZ",
  "key3": "26mdMWr5favedoYBDdQ1kbTb5tunGwn98MHc1gZEA8f293WCzwxExSW6E9tyTvxiYVmbznjF6tPy5buApL49m7bh",
  "key4": "3ZoNZD2Q62hsoLeD9aDafT9xx3TpRFMxFwMkLsVCNWM1Qsd64PQaZp8mFF81ibuBzxHUv9VFcHJC4BY6FSzCp4on",
  "key5": "suNywywAhs6vFD5MoEDA2j4AAN5pSN8jCwfgoxdugCCSEd5UnMAAZp4uXcabt4goGC73WqidSMe3wHmAeW9Updy",
  "key6": "4UXVCYoXzyJ2CCPzdLg6HCsRgJZ2sBVn6MVLZw6A3qXYs6j3vHZpg5W7SZuvPScYbVHGs16RXaqa5BbjAWV3GwFG",
  "key7": "3yv5EGxKdQ6fLyJMpqmppTcPpmoC79ass5x7sKyz8W6C36Zdbww3uKkCGZLXmV9iC8U5Vg7ZvCTT1gdTd1GB8ch9",
  "key8": "9LXRPiLz5cXUY7fg83M9Xma6eJjtHsmHhMEZUQictZm5vwPpzFX9wNPgfF347rcLBwinq8ctgT6jQUijC48QBqV",
  "key9": "3TXqhVt4GmNcA43KiabMgu6ooAaW9tqJ2KoUConnKKAp6KGNdVFcsQuxanqiMdHvHbGNbnFjqRhDUVwGmrsPFbHW",
  "key10": "2PbCXcs9Dctz2zCcjxjSNga4nDrMeTV7XF4jN4n23oJdSfiooQdEzARBuxWqzFCJqhq86bo9fLdJrv5qFS3h8u6c",
  "key11": "e9AnTfGy5qx4RuwX3DZhoAdC6Bom7YPpgGvC8aKRzUQogoiXMc141s23HMh1XxqEQyEMdRSSG7QJMpuyzoz34wQ",
  "key12": "3bfSESQ46G3GYEMtyXfDiQFqmh2BhicGms32aCzPJaUNZ2cGN9EKMMwujcFVobzwCsFYcYSGwZmuLaHVkL7PxGfp",
  "key13": "4kHmGCAr9VFpW6ToGjq1MqykWqByo9k7dJSDdZuyvrc6a5ZcoU3mYm4tywWDaLcSitG4m3bT7kDoYbRMCjv8A3Ye",
  "key14": "3CFgYmEQRAat8TB5bT2yk2pk8NdxnuphoEE6KcEfWGSZDhe6ZryctExP9F243Qoir7AC8AwiXHR7sNy9L9chkvho",
  "key15": "4ApRcuTVt92LLjKAJvd66Aq5NRTEecUXKB8YbFn9vkeqfFBNT5k6Ayf1dveUViuXdNQZS8HD65uivjn1Fa8h2YDd",
  "key16": "39TaAM8ABPvXb5YUD15sticDeot4wdjEeGmi9AkzwnK6HFkc4voEZJmxN2fQ2keR1rSeX6VgXNQZkhvgm3our4Ca",
  "key17": "2iDwq2MdQwYmHN3xNWXxLfDZT1b7w5XCFEdWURkWjSqNKKwaeb3bJeAFeHACiUcjNoY5iBk2TpRoGWHrvo7ALAJQ",
  "key18": "NCCDXxi2LyThKJgpj1Xzz8ncb9rHd1omoeJDnnav5oKkoB9MB6BQJq41KhYkS9S36uLQPPQu2CrLBj7KA1Hf3rt",
  "key19": "zQfy9Vz4Jg2BpNLJHkru9YAYAyqZ1Qrhh3bShpiBVoPqe6FhWS4sKm3u9rQpSo3vhgdgJoTW3jPXGrnPWCGNNGS",
  "key20": "2oavnjTpQB35LM5QZtc4RrdA3hTbdkd6m8Tm84ttdGGABvJovqWatuwLCcbp3bdiHRN1ZL1GdqGYaAmVGXZbW5Mh",
  "key21": "4BKxbQZvuFzgKhQRpcGh7dAeCWCqDYRQcXWvGW9ZUiDCo5LVT3cP6BzbHwr2kTgRQGCMeJxsRNuWt4DnMiVB7Je8",
  "key22": "4qMYzuz2CSQhU8hnYsPYK3pTEJjc9for5ZBCA6eHo4j2YYqb37tvrbBwXtw7AJS3vLBqrsAhNwUykVg2HacGD7B",
  "key23": "GCfR77L4GwBWX5uh2qAg9UDHpRLvZ6696S8ZzDbstiQ712oikXYPkMEvXUXam4PH8euV32SWQKTMRZcXvyqN9kK",
  "key24": "2mGRx3cpvBhzp7M8iAwePSB5aioBwcT4n3RNiMHUknkGt68qT4M4ABNuryADJYNpefoaugVFFuMpaTHBpBfhY1CN",
  "key25": "L5Ld5W6g9aEVGPcXg5VZQCpN9LfUjhzPAXeFuh7x85YeCmq71AcNxFDw6YTqYhpKcQSbNUTfraej9qg6PC7dzNB",
  "key26": "jbvskSx7zoU2Zc7sVaixEaN8BFcek2h5ZdwV6yLwaKX5JrsnrgTHwgZEjfDXfk9CYhCxqqhPAXyvP6ge8To6euV",
  "key27": "k9qekGmCHA91Sb1VMKV3EFXxBWWhXemqfCFhC3ffE3Dw9ws7gXaJdNSorHxv1xFT9mKvjLNRqEgC5fP2gFAdAy3",
  "key28": "56Yehb9Bg7WRn8mRCyaNLedH1hnfVyf8hPNTtyzhqtQ5kD8eqFKn2RXf52vvrfJSpHHKjhFWffAEANu8oyYDZFig",
  "key29": "4QfBXr5J6yhmV7S2mrxT23PbokgYXESEhhhNAZELFQpL8SV9VeBCW1bo5Daw5v2MUtUphCaLEdkHQcUrGGyNHnqW",
  "key30": "BzQRLs89anAVCX1t4akp9WSHx6fvEycAfhsKw3NgLLkePimnwaJJnxsn16MehVj6FnyuSxQyv7uYWquv3xB9H24",
  "key31": "3CuU3zb4PFuXV4jsgDFmZqJ4W8g9wAxN3kmJNpyeuatDrR723jmdzDJfLwZeVeoZq2NxFFPqZxczDcU1W6RwNgUV",
  "key32": "375WMfkYtFiSfXhVNBRBkvxAXMYNGxdg4kHHfyvNEJ9CSJmacmVH7Ewm7jvPjH7XeXdyjr7mFgfxSW9ngYMfgbRn",
  "key33": "5VAfPyXBiKcrmZTss4fdQe88oXUDLNkTQWWT2HHoSzjrPTqfTX12gxya1xbpFM6m2F4mkXY8wVntFmMgCjd5GDJ4"
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
