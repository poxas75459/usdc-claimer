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
    "57YBbggR8CxDhqBeCk7ZftAUQST8ZooLmgmukxjqg4vMh2qW5DMJyE8VSk68CJcqKetGCBegQHZ5oGfoHfHpUg7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ta9Jnkt2uERk2x5mwrnySL875p4Tu4jzYguvRyLT7X7GzDr3FyzwTMd9YR5vdenK9ZNQe9vZGDGZV6Do2Jugisc",
  "key1": "3sCu7CZ1Bwfkf2TF7sBZRwatGA1V6uuG9aQ4Un6tjdQJ42UL5rAVD6yvSjA6aVyLmwpYvdtDGgqFY8ckN5tbM9ne",
  "key2": "2W5ng8ywqgvmfM3V5zQbY8avjumfvk4tWL24nX8fQ4Y68c5Mrrt8YAiwnedQivNkQLZ9qjN4qchGPtsNEEeSgtyU",
  "key3": "r5QjgCsa1Y56YuQfoYhJv3joRK9BReF7nG6FVS9h391aFoieDYaEiMjK5LoVk6eMARoc9uUqQyxqXTzZ8ikfC4c",
  "key4": "3ad98bAibsQGKpgcRfdRwjr1hCffdu4madzK2FUUwXieKvCYRQ7kfGxjXiyn71rjNf4Ccakz8ZT6kt4fWVtFtnCr",
  "key5": "6232SETNtw8HK7MHy4DSgWHe4fifqRvUBKMr5V87k5o1j4BshGqMrgiA5dLzvfPKFkFFypsnhZsgE8orAGkeCGog",
  "key6": "3iYm64r49GvSLF7pL7CNXSvtQqAjuPW2Si5GfEpHabHFpmxWqskZd2UdCBKRedUdCq3DZFAuePLzD1JuNg6SCHbD",
  "key7": "127HVEsu1iwL6aR4agBS9rjfQGpsjwv92XPyZWiQckhBgsdGkT15nmN3GzUaSgyxveyd6jvAp8x1jwtqjdNGpq66",
  "key8": "5tB55raGazSfA4MPpkYMZdnZkPUgSm2voeNpbTBsmv6NRitdzH92nEiWEPnnX1W8NXbRo7okbwsXBM3AFHQbUr5b",
  "key9": "5zoJDSCBtdtBmgJ8qLEVvJ6QuYdDDMEfKNMV7C7XMzqZMNZVixZj9KsKRHYT8sHH9u9ERZdWQUgUap2TmmAX9Gzb",
  "key10": "fbRvy1t5TAMrMt4sd8KynKyXzyioGFH5PpADiDuZb6e69PXuVoo2jSccDkNWGBv8RWcugyTcEx5a79qhBDcF2w4",
  "key11": "62esneaPVcYohhcZu7LjgdsP6TQzCvi6HZ3yNSsFiUyxQJg22kN4zcpQ1ipNyqv8DwLakavyHhEHiQ7poH3SysZy",
  "key12": "2URaKdzTj7gPREwWJZYCsPPbMpK4nD449Lvs9z5sEnJhNGZVMkfchosHYqn2ZUVJy8TuYjsuxpetVspKcsERSyHP",
  "key13": "4x4i7XWcJoMsxVdeXkWTfjfWMKdAT9rst9HLgd8aRwQXKCrAM11fRLaAzDwkebmsbHH9ecBTkJcTFtFDmSoHH9T5",
  "key14": "3qEA6Rd8RQR1vQKwX2uu1oLswnY2USzHPGcZD69gKQk6vWbqFoAxCJjwatLrg4mrAgH3v6kfdL8GZxzwEHkGorwK",
  "key15": "2N5owYHJn6w7XbqksgbB7oG4NDv3RWJa4PwhPu85ymtVZiTiLB5ifpgebURQEZxxguBwZbxwKRt7wHMsDmwZP3Zp",
  "key16": "uCYcQ9UVeJotJFfiThrnjbxRdQZrQU3Jq5WXZBEFbrKPBNY3yCHEUj5f2yRgcE4kkRLFquCdZ8Zfd4VXVptLDNh",
  "key17": "316eFivJEPW7sr89pFz8VkRYFvfa6h9xYZ94Vh6tS7vc6thYde7BmfxKZe2DcoBHcP1gt8MQ4tTFyB4iX6gzpcF3",
  "key18": "PaxLW69g4vtt7CjGG8aSJ81Fa8aSucrWbS21iQWr7kFsoEdSsVPH6UEfjo6PEJYiryNpMob5CNJ9jRT7vZ4dQLU",
  "key19": "4wQXp3WGLYm2iPsC4Mt6pKC5cZEV1QqvsUwrfcqk6ZKEesPqF6xybRBrqEE6MVj1fpnJFEjWNV5koCyMY5icvua",
  "key20": "62Eg6EZvwYZEL5zbzuacGEX7VFLK9mueDLpXLV8wMuhcSJ3pVzDQ34XwJQzjrkZX1eHikKKt4PqC4MNwY4jQZcPJ",
  "key21": "3qjWd5cNGr8gRg4JvTo87KxSLYw7UPSihw7HuNG2GshcsmmsbaheaJEcP571f5KfKERjwRKT5Dn9XGrga2TRfZhX",
  "key22": "3ehZBiq7Mrq2jwWiKeiUEKA6jwwrCNbgDZb1wyiWjscnBBarxHm4q75d4p6YQXug6xDmRtZUFPamiK3ZSRkPQcjw",
  "key23": "5UySzuknVwiwxAEwYtghM4RrRJ28tXrANEST15S1jxxQo16MFUTTJzsmjmVrs5P85FpdJcuLbByjc2fLRwb3fLw8",
  "key24": "5tivq2UjYkfuCbHZVLxRB3kNzBJqeHbyNDdAkstFTRFtiDcdCnecXm7BWVT5NidHaLoRjZ2xFqTf411bKZYzBjMd",
  "key25": "2hWK8HKfRoQk5WyLbHHWrKn8TwSMrxa7vTqfhFeRZTwiTXsPpidYmH8ccsQXAY1JM7Cjyo4j8viiCa3bpGnaYXve",
  "key26": "2pnDnm8UeVq1BynDA8MdDrKq7wp3Hp1EYm84X6WRKoGQC7qhaYN8vRpFwK8eZZQtPzHWjf3NvtvD1tqLrig2HHRK",
  "key27": "5bJrZVpNAdcVuN1cjJGWW7ATNL6sdWUotqCi4GAoCEbF9268CFW36ZPtQAMRfUf5cFU6WwkRzu2TTB9cVvW9fMMS",
  "key28": "3uoU7Kfxw6S6xfj3zkYyxgD97c4u598uqZ4sSqywZzNzFpJX8vUyjPZ7VYPtVW2VXqLtLVfp3mBza8hgFRyGksMq",
  "key29": "4kuBC76cnEzHWXKd4ZhD5vtzGUNDAPowffUz6nisJytj3uAwKJ3v2MyyLu3adbELERrfR9N4ezDHaJepowHUEyTw"
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
