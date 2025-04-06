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
    "giHMtQkYyWFPXL1HucgiW7v9t1iM7ejf6F8mZhGQSFWvrfRjy8xUbdfH8oSt5M1F6bX58juxoR5N8SwNTyWbDcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EhsUvVqLLJi8sUVNMdqRgNUmHRstCWP9UbKPDgCeJBFqLJVMqGFF5N8PWUDJd82Dc7xkmoPpBGQ4vLFeaTedgiZ",
  "key1": "64bVf1xKjETNUNAaqAPSbJMWn3WEGviJG4W7d5d2tcuRX9ot62954JugeGdQAQWSUCsLijX61EPYon8NFLt9tLCQ",
  "key2": "5cEz8dXRvtSpA6L9uBEhNdJiKnchi5MxVinY3PS2iAYiZPt4tq5YLCdPrcRUaH7Lt9DCSJxQwfB6JmZzRKzYvYU5",
  "key3": "5xqAMSxmcuPmzdCcvWdqUYTnXkkZY5tERSmxM4PjjFXLU4bhmt9NPwaqWr3TcLLCwpwYLbZBjx2tvqpJgged5zet",
  "key4": "4xBCKbqHU91cgGB5L8Ed9jNXtoYTccoh8krfGVw1w2BRQWzwWJhBfLHqpdgEyjUYgucQWVy3NuBhRwrDyq9GV7zU",
  "key5": "2FYkzBpsqRAf8TsKi7ut4vuVUxWx71DsqY8ML93RVvZ2daJdgvF8fLqATLCaoBbyMnXkzWMTHErb73NBHVCor6EP",
  "key6": "2FGszg7311zFN4XXBUKAa5Y4cpgGYeSgbf2A8ftQRZWEtKAaZuKASjCcCGPGb4xDYvVgEq6gyi8yRZyL185FP4sn",
  "key7": "xDV4zHR7ZMmfmhUzdmVQ9Y6T4wyWyUa9c56fca6X4emQ3cVeMxG2NDtGzikm4jeuZYo8ZwkdtoXw2w828v4ZUV7",
  "key8": "5qkoq8MPfrxTBni5zZKoqeKqWGgF8TvguFdcc5cg3ZWhnCPzfnG12y813VfsDE5wNABYxsR5uGJmYJwr3zaWZsao",
  "key9": "2KrRApMQxGsvMknpxwCkEgGCz91ABzxdm5bYBDscqf62n5pYDHfSRZ27u6saN6USBJMCCNyVXnJQVsVwKUZyMASp",
  "key10": "24HvXaVP8NoJqiLDt7RqdSDtDaEZaxyD3XUzYrPGromEutdcT6yUgGrLTkyFbiAfbyvbamyBkeDjCy1TLB28x3Wj",
  "key11": "411EHs8Y1MGoPmStARr2UCUwtihkH3GmKgbS4bXn5DM2n9rnTMnAZmgRHCXFhQeww9gwmxZfS7u8rSX1cis7KrD5",
  "key12": "2pUunNPVaVyuBnwFpPhDPomYSXqfWCEVcy1SrtCe9izQuA6cMjaoLN5DYNh7j6NoFT4aHSicZXn7ny6ZoSM3HUPd",
  "key13": "3xCztYym23ryZivKdfRxH3zPp5kGqCkS8GSB9vCxmt9xchVBTWgeLJB6GqyWqXefFUjj5zBW2TMkiEk2Jm3PwGtR",
  "key14": "4Ytmpq9GzhUPffHZ98cCqFoqJrRhzj7SBLxobbTE4e77aGmLH9EHFBr7qY4SVr6AwHRcP22qzohqdqE3EPmAiPg",
  "key15": "YAWPH2ruYfphN3g4kq8oPMNQxqknuTJxrWrxBcj8Wz7q7LrXbgaHDdwacSxT3vLjbg71C7aN5DWNUb8uLMXRHSN",
  "key16": "5HAnxykCs7XLJZDCSStBkY7uekA6K7AQyqwUSt9jZJhYMHhDAGUxJguhVBA2HWHEVGtaYnzqYZvHJ42WTnDBxmf7",
  "key17": "2Yk7RYN9wRpJdBKjypCNmcD4WcZLL6UDXPgZNMFK1FLZXSxprZEcyxdMiWdZ9jJfcGAv2UPoBGuRYuD397eyhqCp",
  "key18": "dAVcr6ecwK68ju4mu6HDncmQjvMik692uGM4UhgyWGV5rMBJr1hJWvHFMAXQwNHitiKtB9reb1zNX3MfSEN3t46",
  "key19": "3yXFt5XsynMSGmKKw5XCxuaaj9HkaTRPJcDa7M8QHwdYbTL9qC3EAqitM12cdQkdJPYLUC9DniEPf4hv8vj1UzXX",
  "key20": "4dcziVuckM3VXDbpByo395pNEj8Lz4piiCzj98u7agvoFfo2oejJqDHoimJoUwi7tmeY3SxUsEXvFsmpyGRbaiom",
  "key21": "53oHX6boTWxNSAZW4ig9cZCQNQRq7M18DUvBWyrMtULy9U4gfmBVe9fNdAGrQk9E53mobmcAeCSciLAvz3ETi2H2",
  "key22": "4mnmPgrsGVSY3hP3VdCuF2Zytt5fuVjsDJXDiok4rnzzzRF8gQYy6SHvWrYM8eWfkgyAJ6pcvfJRcCG176gTJGMG",
  "key23": "4cCDsZnL4WFjn78zRdMbDNUVJi5Tu2uQgjmx6eSBQUGgQFSJDHVKPgUUJR1DfxoefGB5ouTjzFL4hm4JvyfmhaXN",
  "key24": "6oymFrJ94oP8wAgunsjqBpMd4SqYuwwKrvspU86LACJ1ECy7gW4Mkk3ZGvb4wRjwLXvpNWH8JBGs8ixUPrYW6TZ",
  "key25": "4Jx9zdSktLjNyv6qccuMyNF85w2RpzkVPat7D131ZmbgB4WEjDBeJ8Ez4qy8Ym3R8Pi85UKbJhoBSAYH4ipCJAPQ",
  "key26": "2LuwS8UnKohkNqvNznG8kYH9cLdfBPZ6fUtTCFav2YkR5nf2r8L4DMTyXaJ7TxxNfzG44LwSHVV6DHDdL5KA7TL6",
  "key27": "28XccpgcxhoGHBAD3QjvEwjVzT3mNfGQUEZAvnMJfc547jZ9SENgkpnCmegD2GiLpdcKwWCtFbWU8GgGaVCQ5ZzU",
  "key28": "3sKJp31QpiqpQKoFRKpngo8J3TGqoJi37eNGQPKSCFUMV69doCXTToQnHf9Hg8QR5pxEEpBUscCEF9ci4ttZFywp",
  "key29": "2tWsJJF8S1UZPHQEKseeH7azXm4hYCaKkYyhZNyfKXHxqvji3WDmAni3dijmzRfVPnr4MxnBQyECoEVbA3Fnpoqc",
  "key30": "2VYbpTHrqUBvcBg3xqYEUCSRJQd2d1LZrerPTXc76xz6YHE33m2xwg9kcAuHsxKqeaudNMZk7sa8cDB5bE1SwPFX",
  "key31": "3PimW8whDDCFUx2LVMefUJAfS7dyeqsxAUGE9ua7uAgjv7nMufbK5EZebYV48UyCkJbnMhjszS43PNfDNZsF7isE",
  "key32": "2v3tg3dzLWZFzkuegCwKWVhPATLFVbN1H2p2WTSJhkXypgLW5vu5kUY3QX6zV4DcK9HVu9s9ChhimhsMyn6sZnFr",
  "key33": "5BnWpXS8SHTMHxDgHf6KmEE3rvwFD48Lkq6RR1uD2JdN3stMUSDip581gjEFrgN1H1FurPejd7yC57VBRKgFK5dC",
  "key34": "2kbqGJW24BYMx93nn7hEuQfKmundr7HNoRdTW3hpQRw5TzMbCoQNvoCU8ADTLE1Sackz72srneFdxw7dawpjLZsr",
  "key35": "BiztM5v5gaqDaoKLYEoF6wRHkK9p2i4HiQ7mce2Qb5ipebH8VyTYQqzwGhfzywETCjnezEktsUb4ivhHgNSKHtS",
  "key36": "4oQMyHU6Ui6xW8Y95zDTfSem2rZtmBpomjTZBopEBjjQZ29pqSxe8UcazGxqc6sU4VUpLN8VRG9CpkfAxHpdwovH",
  "key37": "25hyU8nrkXXEenjBNRS6Jo1pcUoZwskpJP4mCyteuuXKjTD9d8p9WgwSmshgVi8BTv8CEK1stxnoNoeU9dw15eQs",
  "key38": "4Djdvm8g6KVm3Q5UnL2rf5vtJweNd667jPD51NxqMrCxkAgEjAWL7z8KaxdsepCEtkwkPAXypDXNUF65YECXccZh",
  "key39": "5KPn2YPNt8siPE9KQczLboj9duY2rUrB55P8cw3u4UsLok7856amA9Y1h47EMzRwDGcu9QVcWGMngsLDpykSjrH5",
  "key40": "kMigPGzmoWCcQAzRVBdXqhu3HxANnJbC4Baa4HN8F6zQQAQFJdbt3tfwbpGzGT4Er32NV81hf2ZpAZSCjMBtMpC",
  "key41": "5GJTm8gJqc5NBaKqWAo9Z519xt3TCdSDJBEbB43h5fsskh7B5SmWcUTEV1pC8TQPpFwQbPTQbA29x3MJypyUnsBY",
  "key42": "PBapnfX9nLgZUq6k85M8c5jjm4Zg4Gibtqd8eZPDfZ8pHox6DGSheELmYdq3Q1ktFsRNgcycwHV2GZGtyRNMCCe",
  "key43": "4zE5sgktwdNVbFCTFtnfwFKdRT455Zvsem1BAEiq5i7SotTd2Se1KfvTHe6XJzMwuDbjczCMD2vnYpeAAUEJjrXS",
  "key44": "4LxtdGdBFZ4JRAaP7dWUwoGC38hZBXMhN43Fs7BQEZ5iM65Ttp2LRQ9dDha4qtJ7DarzJWAC9zPCSgrgycurjfRH",
  "key45": "GnpjaaUZzbGyvuvErmdCFQWW97ZpdpqW5fQ7xqDiUyfCPvmEMD6u1cKGkanh1yyh2AFZDjUaPTrL9uCA22WUXXn"
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
