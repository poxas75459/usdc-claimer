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
    "21g9RjD6q1ppS8vFBLJuTikkea9ipu6KEGs2b4ZM4fvtHerRwhhAcC22bNAxYRcxAdVzdyQwRzs3y1u79NSUcFah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ap4ZW17fE5fVEVQkDQXycRBQjb9BtLNwaz8k859PMAVmNARadE9jcxYPVBsCzmLqsggfWGpLDaqyn6MNJHvTdK2",
  "key1": "5bWLmV1rgdbEKjTwcT6JQ1ovSJQEwpKwgscYMo7wDWUhLALf5xmNezpZcFyrYeM6EAHgktRCR9gdxEdHBuDHHo79",
  "key2": "5GZxfvyn3AeukfJ4eRx8P56eQmMY9VQGXngH4Ev5Bbw87qvAZiCx2VtPrRrXGvCznxm2WiJjARYyYRFCUvCGtP25",
  "key3": "5EQDukXmTLzTRGWAip3nsVrBHeuzPFUYkE4KHzgEfyhnWz8FiZEuz7VNbZigU7tGwPFR9eoNUpy4MSbJCaT4EKfi",
  "key4": "3A1NVr216gF4KDcVrBbEYgeksD48fSyP27z8Kzujhuv4j1mq6ZA83AZD944rWqyupSvPPaeURAprUrcz1tcJLexz",
  "key5": "4jDK5at8vx9h85MmsqzLJHaqGp624QERodch2XojmbgLm3jBXrMp88JqFDezAQM1S224hoem1V5fNLL6KNKfJ2JD",
  "key6": "3tUDkAo8Jg7S5oA2zymSoUgzLMjdpNV8wwDkfVhuMjHiipEZ1hunhcDTojGvaY9ucYWPYMWd4Kyt6aqZhCzHBZJx",
  "key7": "235qptnjdLKJ2uoRTbE9oAjQxuEwxPJ2bnbqgE4ambsqss1jsSec1sRvv5ocWv86DimH4U8MubegftQnrFRR5Bm2",
  "key8": "3sYu9GFYTgzcVv6rKemwnfZUxjshpfNynDdJ1pXwxPkxy9Yjec3xBHnE2uSmfKxETbP9H7KzBoghePASrCCi6aS",
  "key9": "58Z9nemq2aVovC6h8KhY43aR6FXUUhP9v3A89QtfQviaZscwxDPTYcfBTMiX9DTaJSNN4YtVt12rVyWrKykGEfW4",
  "key10": "33AT8L62m3Bk4Gco1kR5JDM69KRLWVddcL4tk4zEdSwgieoHBJNSycCM2KJyUwsHgacX4yF6VxgEN9XpV93HgkA1",
  "key11": "4TBxLCyhAFKEe23FAgDTD7SPpCbj9WewLHdGGuuypKDc5PGmajS4yuCoL3brZakrKY9xMdUbBU2CatvdaLTkiS8",
  "key12": "jk1KM2y5Pma5MorDRKwW82AfVKPCaESBrLQ26Ye5ioNX5tST9NBBsG77NZLmTqNcnGQGLQok9SJuF3MgEyVmjhT",
  "key13": "2tgSMfudMyw11aGCQ5sbCxFbwGKDmTrsgvcTwwRyn7xW8sMXmwuRBKGcNmxY4h9z4g6327u8KiF67itradKtNWjq",
  "key14": "2d4gmWxsdbZpQPD5bnHpdavJXf2CdPVSXCEbJdMypCHopY4wChoWZQBzDxhb2MMC7KKgjWcNL7RBg2bj34z3SrD1",
  "key15": "SfdogHec2AqnTAoXoVC3zZQ7q7NrVYjUkW9N521hiELXvHejzKUMMDiEiiYJwQsTRnUkQzGSRgKwpGHK4phZPgb",
  "key16": "5vBrUBcaZfstG99RAEKog7e39k8pVzCu4D58wcArCFABxSrGQBT8PTtsJPUZ1DmRbtMC36mxGr6KcgKVsbCsHioe",
  "key17": "9Eyw2vwRGiJnSmiXe8kxRg17ujTYQfCJyriwUAxqfPverRDzuGocwce1Cpix4aL5TaQ8qaHVfhtEj3Tom2WZLG7",
  "key18": "5SdVR2zE93cfLw9Ass9rHRdScwVWYo5g2VAm7kaoME5f3zJVaK2YVxQjpZjTnSYhNnVn519fNKvZBq5Y4aTNC8qP",
  "key19": "328scB3Au5Yvs6w3R4Uy3KzLZC93x66PsUYp1LGXJvJLJYLrUWnvrYbGwf7qkt7ozQ6BZP4mCX585REwtgZ6dbeg",
  "key20": "5yB66DttnCe2wFHUGrvvLrVpj5wLcpntM3wV7Rmzc9QFA9dQyaqgxSRYBmwHKXxEP8AqTQJfn376EQLoKEk1tRea",
  "key21": "2JJ49U96kC7xPUrPRt8w7rUiGDgWDENEwa1W4tKTYX4bFQWJLH3rEKuT1smMW5gSqYtkKfmp6ZkdTGq4zXfh3Xmx",
  "key22": "2v1e152jzN1dTKAqbmdPuCDVZuhXfwgeG8qATwkPPmTnkmVqp78E4mCsMTko4owUCpM9jUJmcm7SEh7DJDWMWiyP",
  "key23": "2QHj57tgZvvYF353EBgGqrRHY1KnLrVfVqLwf432ABfh2Lk1g16VQ6KefGhp9vRYxhgsKfuAtAHcvz9y62EPcusd",
  "key24": "2PYGqDbfTkFrc73mUzXcNUpZNKysXzwftXsdrRniLAJxZaLnGdQacxV3SnPc88V6fgczJi8M3pAvZ1bNX8rtPUw5",
  "key25": "4iJwepqqxJWMMwaK7F3hLURWenVotR2Rstake1vtp5ViM7P7eL3atmoXgZeDpemKAKieuxSTR1XGgo5WmivyjP7a",
  "key26": "2a8pgPvbg7ED9xnaReakPsjM1fBnnv2tnzM3GYE4Bh9TAiHQoDF8yKvZP9LUmeBhnEGGNR6qK4jgfC1UuLRRMu8P",
  "key27": "3B3bChdjTZFd1BwJrFNhBnXST4D4mWUP5LnbiaH7WW9LfWFjtxQ3CUqFNYxjL4JnhFdbrRSaqHhLBKbUfjAKKDEX",
  "key28": "2BCyNa1gJvgxUdKQnxVWEBAXdFTbBUXkadahDMSTrGKqpSe3KqxAooHvzBpYqtzuaecJZ3DZDFad6Ry9r6H7gFZA",
  "key29": "wYQWxP4K9mVwJw1dAVNynfTdN5ZUKXRvVusm2Cxzkxo6H7ZaWTYTpsXLXp5ntQeDa7t6pYuoT41rWyfJCdNou2c",
  "key30": "XGVYHojAFdYvZG2htdFyKHiURAvCctZtKngsgzYdxnmm6rWk3LJDxJxeHWwLiZqfycSkvb6Jxv6gktaB91N4g2E",
  "key31": "5qzbG4MG6NHwxT9FmxPX5QWHdHHhvASsRhrw24mGkKUAvgKYievp2Ksrxs8uPURcmJRxC6NLjtqAnndFuZ2bvsd9",
  "key32": "3c2ufETfbH187rnUtntrEWKtxKxeC1367WX82AGEWRYkXNRv7nYTEprMGbPK6p8yu5JYpLL7LmcT6mKNkEcctbVL",
  "key33": "QwqBN7cJx4z8We9x5vfUoMjtAXuFBjwzrRX4uoK1ruvP7ykNdSfKxM115U6uT6rbsYzHFbKoXkaZjoqhMrYig7A",
  "key34": "2hLAHAx2wt9uKAVAGeGAbBwLNmsaW5AG7kDRA9zYizw3FwdHgQy6fdseFwcpuV6jrr3gtsyGE1741wqxTCuADGBS",
  "key35": "6S7ZGHjgvAxEZKBmbU4w2LyMmEuiAPe9iQxP4MwfmKVRA1QNruskXcYvFNCkuntCUKmbAJhFDf1ZCnznd9faB5F",
  "key36": "5dJetLwQdnkXkGaKd2pNfzCN7vpvGGS7oS4KrXJTfJJdJUEanqnrmUmj4gypttBmHvLvDXUzpxWAyPBvYsYymzx7"
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
