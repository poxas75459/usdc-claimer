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
    "5wiyRfHPxnEt9bZ5BK3nbewKiygk6SvHdsz61iUp4Bc7as8GuvZtFKcTCMh1jCMfYDV8hqQo8SuauXuV4wPU29vk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gLxTwxNNhncDnizRGdsHyM7UrstHFSYwH6oZdhtWeCrUMFty3GeFaKrcAjeSQySSkhKCJQykQitL2VNzS3QKZAF",
  "key1": "353S2dLZwHjVTTHDcWnZGLHZ8Sr77pZghNqP5akTsbt88oSqxoW7VaYUwZPssSZgPcYE8RsVSuVRNTtj7AGXN4J",
  "key2": "2mRHDvKaEXVkZAqEP7Tmf26hTozSKfDhsts6cVWpZDJ4KJsjzRmVukorRfEaQ6raBgRdeC2nvzFZQLPUHsh6VC6m",
  "key3": "21FHKJSgGeShSJQm7jgeBrKpWp3hsbYCJcyEYVbT1gvinAFNPTY977mDyVZijwrTqxYx6azpcKBrpsdWHaQp8cdN",
  "key4": "24nKb3xvejYsFhEUpTpD48rjsKSyUCcNRoxGuX7gzQNW4BwRkrFCZ9yNv77tUEvR5KyD62yvCziqKV4zv7NcmAr5",
  "key5": "5Vg6D2LdSunfgDsHjxVHLLHzg3gEYZLsS1nV8e3jYQZaV5xiXyGMA3bjwcPqucp8iPWoHwY6bQPCjQibRJcJmtqD",
  "key6": "39zEE3iqNhvVFrgV4gdfUHuNH5mUovzAeV2xo6uHVnWb7J9JRJNyexZyVaMJ6J92r4aqEdWpNFRPf6LdLrDUPMBm",
  "key7": "62HkwtcehcSFos4FAnhvttyv4dagEVd5gTBfMJuzkAXADAZh6pXWUDyXP7GyEnVrwnaorgAHGcW7NVqceMtTjFx5",
  "key8": "4K8qUWyPZUaLoi2EPpcVFtnk6pumXiRKnLCnGYT84uqdxasy5bJAFBGAFGmV98P3UCV1RpxwqW4jdPZE8qjrb6R4",
  "key9": "UBwmVevQscPvGUr7dS1qt2fyihNwGAHbVy3DrQL5WcihLfcU6Ykp4bfHnxtQSNbTR6RdV4cp4fFt6ndn1hHTYkT",
  "key10": "2CK1LDRb996hSsbGQtWLyEm7kjJ9bAT6Z2ts1A6muiiVSErWKuGyTvutCG3ShkqYBHecdcdwv9U3xoFUCo7a3nts",
  "key11": "wybv3vqe7S7EqAiL4oEDWreDJkRHn4ptueZZWtxQWDyZ3mNwoLhdrDYfyTJXJP73MSAF2jaSHLmQ2QqN99UWdge",
  "key12": "2Jmh5gyxuvVGDeRGcJkJ8gfpGZJ2TkptxPmvVqa3XeSGkr1jgh2WMVmjijHe7qjBnkSaLXEc4BrqvmH7JdNPBJhR",
  "key13": "4Sht5NNmkQeqzL1jZjWQ3PRRxs7x23vAa5t8Gd9AWsQ2bdAfiyVE1FUFDzprU33krNixf66BvrzoHB5NRy1Phw4W",
  "key14": "5UaT5KBfcAoJE2SAKqPzNrX1LTmPmsZJhdqZ2mhFQ8cdnf55eLnE6v6yzg7mBThZaB9sZqgzHsB9aNgjah1ESuh5",
  "key15": "4SNhRQu1f23nctvkZpbZFjmoS4ke6bt5QZ4f2bbBKFKFVeSVjw4EMN5bFbexCSBj3bzysGwCQiyFB9cAxcMi2ZNs",
  "key16": "wANg8AyuyhJcUdee8XCcuTRoj6rJBReddxB8UxVk2WjnrALFu8P9ngJZAkYW2p73x3nprBjrZZ4eKR4q7ALhYgF",
  "key17": "2jsyjuq1EqvHgdSgGnHr7bPoSTBWVNwmHNTo1AR8Ep8zKhr7j9UhYoBm314A877wPr9AG8tv7MrWqeoqLWYoRvj2",
  "key18": "9ALTRpUhdCAUVhA6mpci6hWbjLX4QXTcGEJqsKRKTfuqStRJL6opt76d1V9EnwjEm7ZK1iWWJ4KkvSvG2nYeu2C",
  "key19": "3SA4irQpRZ27UgqKABicpUdca7ArUAAwskcn2RYjU8CKSi3bXNodYsKG8jAqJkXqNfyNZX3ggeYiwv5ENbnuKRGU",
  "key20": "3o8315FNdadJHwFhrxWdvjkDutBzc247GVrHV6v2ohZdJaGYi6KdH5MY3zkKPDSWeFA7k4GccB2VCyj8kEuTJ7Ge",
  "key21": "5stBF8Xms3kSpnkZc3C3qxdUn5J6VpNAnDKeknygKQUNXLNuWnY46qWVNS8ghid3P1DXYcGQfzfDQYQiubjZn888",
  "key22": "2N8MBEtFKJ6WjZDz66jeVN5z7Seb5p1cGJZp5wH9oAoSCtKwnUfZGsUWJjYrbCctztQzWMsU6K8GaTpqPSRhGFsg",
  "key23": "32VFumk3ruHXgnEzNWXbExDa6xMEyEYxTkGKETSZ728pzL5vkL54GUor5oSNyK1o4NB8efLrRG7ZfX8utVcGpeZ1",
  "key24": "5hh7mZVKRzYo7rJQepKK2tL1xAx4Ty1b4fBK31ZpmFsZAGsXu6oF9s6FkX2jyezFiUPSB2LB5qTSCW77QC5LREEt",
  "key25": "5AtsmhRtQRdjBkE7bcaQzNKAuWyyhTkRNiMQvsebAaKDdr1ASyQet1L1E8din92iwVturssjpV5ZpyA9ghrjNxVt",
  "key26": "3pqty2QVtPVNbAR45gb8Qv2sLvcoBGgr3bFG6XUQRXZDzTcz1aj73sgCCyWfrWXATouADbv8zjdZDkkfpZb3HAMG",
  "key27": "CwY9ejrrsaovs5QtzFs5H44jsC4Kc4diJ2i9PkF3WP2YbRQDVKNU2PdJUoDqFkAXZAGBiX1PcJyzdBcGEpzophW",
  "key28": "5gSWtspqDsMpMnRSC6PimmQtBN4sz8SLMEENwx4Ac1tZSW7JXi5gvZ7HmcoV1jQZJqVjBe5jBsynpGK9tsXYEpZR",
  "key29": "4puGuHF8zpqE73d3xr1ieMAXdjvmMkHSEiHyB6Z5sroaQYHrzkmQs2ENeFDcmt573BVTnwrGv2iAEhy77LPeEEBM",
  "key30": "R9HonPgmFLjifoLjo5RK52tUAzyAsLandV8C43wnj3FiZK1CnF4kEiFTEN7ywc8HYCQVQ22YPK2iD9bEi47xNqw",
  "key31": "23RKekCAyENFvGTfZxc6NUebjArLC9ZoDmdBgqVk7k6uLrM3GDMZiPGK2rChxzLw2sgSrFdiatisyVTJyNMaeZTT",
  "key32": "twzRTXDj246NFCTaSyvDmXPhCgsGv9TUsTcrvTaR7grgJe8cxkGVYddNAZMvQenDqWd1SyjsMk8ZfnKMCnqPioz",
  "key33": "2DDLmL3fBySWrrKGV49KZ1b4C5fY4RJSgiHCo3asqmqXroKgeisukRUwjSzF8JQXNsTuvsCy1mBnUhAYnqnbT9rM",
  "key34": "24cqyyzy9qozRy6Lf4hKrZttZ4sQD4T9NFxN2PPVFvAdgMvXTBQwhBejKjarHW3BizFrFmDLyLNdWdDVn3z8QSWg",
  "key35": "226X6AK8dbqxqp11JUuC3bfPTm6ZpNS79RdEva3AZuKQVFVpALk1UbnDb8QDu3eNhwSbuSufWAmKbS7hN59Rz7hS",
  "key36": "FEQYCxUGdPFXwH3n51p8HsFZpz1cfoDyzhiu54JCgD5CqwGGoRdFqsHyQibne6PbGY2GBSdP5WPTm9WrNHMEGgm",
  "key37": "4UK6HnbRVRgUmK7XzZ6qFuMjYbkbadH1Kj7eji7dMcX2Vzyx7zV7kkeyjgp741fWBXL1fto8SAwPNAjnWQ9kU8pQ"
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
