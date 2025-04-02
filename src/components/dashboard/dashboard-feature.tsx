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
    "2D3MJox86djSQSq9U4kjaEjN12E6H9U9ygwtjLBDtxRtqVSCyPbwJnJozRaBDqRiVkGGHguhoVzBNvvR9zuSavLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "355mWfb73iEUoaKxRJkbpQc81yWUuDvw4LG7PocecFSEKLQCC4rE8FstY3RPpEFT9aitJLxKN2WU8LBBskmDACwg",
  "key1": "3XCqCosr2R5WXw9mFKtjT5EAtQGhsVXB417sQCmugvUKqnAg9ALh6e9Q9kQJzmMojVgNPPEo6urFRxtmESGCStWt",
  "key2": "54rVt7SpbYFYNW6azf3PC6bpxikdkaBFReMDQxCoG9J5ur4VE1abDCyw6VjQzqERPLni1ygcQSJNBsv8HHnhS7kv",
  "key3": "3177yA39gEnASiTdAwYTYHrk5LLDF6b2D2ikvQJjXR7qQymGzHfqsRS7sVsmeEVAxPmJuCUfGKrVpWL26KJAZEUz",
  "key4": "34Yw1Lvgvu3kNu2kxhYjoEx5HzchbTCuFgBUw5RmPYK1vPXjEK1i5ThzCxp7EPxBf9gxiTJeyTXSj44ZWR9ALcFm",
  "key5": "xxRgx8Lz9Xnw4xagL4MM6QJq1Kt2yCwunWJTGBpTjzSxceZ5ovoap7m4AKr2woxktzaQUqC86xJCGp9zxVxtj54",
  "key6": "N5xLuWnuGuud61UpA3tfqp3fewfS9U9VBccsVi2d8QDUmAdcwLmS8jzX6GfVE8bgF8KhThfsMfGJC4pBQFiQSCb",
  "key7": "46ECC9Tw3ggL8sDLjjgSx3VvPPacc8AHsykgbyBBCmMbvSS9SaVqnsaqS3nTTDVvPiJAVdeocKzHMgDXUgUEMDRo",
  "key8": "LeVbFES1oS4A56BjPbUPfWBhC72sf5eu8aJXQa5zKM32YhRYjAM4DuyW9ZB8kNWjMXH4ZdB6Msgbx7Cn3sDLQ2a",
  "key9": "LMhAJNyWPVVEgC6FpXNKi1Ghj6A61ffzYiyFsnPMPRY1MMMFVktgWnzdcLs8w6SuucQspVrfnu5BrKiqf3XDwAM",
  "key10": "CBdEbdrzGrsNPJJSQWMrwsariDR4GiUeuW3f5dvWdmup83TfU1sgasDg5EqQhCVWeG2NKDyuLgaStBuQbCVEEuC",
  "key11": "5LgRWNa1BjQpS91bTju3DC86Ey8fyjMmVkwTiVTBdia1RDZS4fom3gcZ3qF5n4dPAY1huU6hYwacLLsdQja4123Z",
  "key12": "5BrH3Yyr6GREq8aYr6djGXTmEqoh39QjFYmTmEkxJGwFZq3YgcoWWU47aVf8HSUpxV4LCEJEpy5UZPk4hriGrhoB",
  "key13": "2nFhL75g8h4MvBNXViHgaodhcKnPYunZWqwZzE5d9opEVo7r7dZnefhycyh3uGc6jFCSkHKYp26xeP2ui3utppPA",
  "key14": "45LRnQv6CHkaHpDJfkUTYBdn7uYAe3PHAsFCZC55zAA7QWvgpJii1SgoEcaEmSoBdjHwxE7bbZvM5dEcaUPo6eZ",
  "key15": "5AuMaccn7Dp9zJSjUNo42kZ7hN4Bg7eFsYvF2tKHk1nZocjHfCrdGhhdpkejocA2H6gM873wSHCrnwALuiphUmgY",
  "key16": "2LKhPEghcHE2eNvBSFvfEzEdLEpVAowb8iVQpgnXLXaebMfJ65mCVGKXWbDV3SuNjutoqGpwEA26pRb7bZ3iZwoW",
  "key17": "QVf7vsdHn2wmJDtQyz76j5izQPh1TznSwtFqQGJLnjqtMBbX9nbuoSsYdiXpydY8VB76PdiqDGogPcoYQ4Nx8wD",
  "key18": "2QvnPcv81VnJoAkGQRAUyhqY3oXNiUSi8KXjoa7oh9oGKCDd1FwECjy99cAhLXoAgzxukVU2TQBTBEH9ozS1JfNU",
  "key19": "4ZwRetM7wgsP7ec3MZwaoetrtWcvbZKksysYc5HFdeSk4uBXJaqFnCuvc2ash3bcyehbccsvXWhPSe6AfMX9sSpq",
  "key20": "4knsPR9JE3mdkDH8EVMqkyyaedpPRyQTSb27m3yCFRBy5oB69yfTzTyUy8qiKZ6NbGasc75erFnhb1hCZ1nG6K4N",
  "key21": "62qekHoTxSAfpzrbHPShcKox4vavtXwM8DNjqCAJs7APiGigBWYJ5my2hfDcTEctW5jULM63nQLFKtCD9bKFHnN2",
  "key22": "5yXJ4a6tcdrH9qAgNemALY12YTVjbEDs6CK52Xpz6HHzMzEnyY2sxeGzeDPfQmhELDaH2JrVcZ314LwPihsreDUp",
  "key23": "4FrG8KD6Wz2FRnZyTqP4HdPs41z14FimkmNNByYhGcGddr2ig8sKNfXNpZ9jU5BSfbscUVxKXcKtG1pucrNkj8pK",
  "key24": "2mckKbfSbdZWGRWqyoDwhoXCf9QtTohwpAxRiq2JQbVLsobC8CjWi75imYSMEnwftoYKPgm5TM684Fc36PRTACsT",
  "key25": "4Wk7RiwHV35UVG31RpsASx8iDqigM71WRfBvhH9QbcpuayeHG99BpaUA2tB5TdrPo3K2dLxgXepy8iRXWSW3CPcu",
  "key26": "fJv6zAiuZ799vuUFVJG2Xa8dEn7mCd7V6vtWoDP8UFB3VrnmrG3CPjU7QLbMZ6CTwDvk2jaHT3P3gj2W4pfknYm"
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
