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
    "3xNrEY3rL6YgE7GPjf1otQYqS888Zr8AbiLfk3wThfAuynQKw351fkzq8Zy8E4cwXfkokbrXt2QUTr1jE3nEFDaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4JmvzyBqcwmc4ZSvGvrMvtE2UscG77krHnorKFmhbXn5VoX1jyVK9YeNr9dKtMouHmbwkk1EeXBboZ9tzQ8Js",
  "key1": "2XpBxqECFgqcKMfsKuZzXsPg6DJ8jBGTdRMPRZoDKBivTHgAwAkF16ZiERJ59dLJmBRF7qw5mwZCuFeeVohLb1jR",
  "key2": "3yijwzi7UcoxX6nVEmW9VkVzwK9xy34qienZzdKMRD8uSTXDGAg9cwMzxG9pKE33XUJj7EfEyPhCZcswYqh9BBQ6",
  "key3": "5Rv6Bp3f1J5AHdGiudy25u1ygRbUQD2JE9mdygeMnLjhKdEN2ezgB9gy1hBtPQ22KWD6kAToBVR4XiSjWrrBVexo",
  "key4": "WJaw555QYXqphkMQjMSRbiFZE8n1LnDiyug6ZUKrCjgdpYEZ9wN3UFE6AcC3dU1FFsRXqY6og3WnCX17jCNGSfh",
  "key5": "2aozWDbn4AA5RfKLmxnq1YsCy3zQKBRPShAiLUT8ij9TEpSPKSUS1DpBn9fNmwLisN9y23dAmpP8cBLyUUkbarch",
  "key6": "3h9VCBd9iXwKDSp2JYeM8ejgGWF93J2G9CCV4tiiAtMTRfQi12rnvatDfoCbiBk87paJLtV1D5gA17V8afXuy34U",
  "key7": "Cx8eBrg7XVrrhSy1hpWp1mBGpEEPBE2CzN4HfCMGHNwpUk8CRgpUAZsW7rJtVzqQwJGedBtgH2mzAJz68Nw8Jjg",
  "key8": "4SY78v4RYZkXnVvBXxSxpRz4J6UPFZfLUAzVzpb8q48JbQMMNoqqaWrSAnenWKXCwkDCVejSx7J6nwYtbYHUiQZt",
  "key9": "ZraKs7zoATqM72RjTKfbn4ycncu6vEe6DAThPoKpgDP9HYa5K7WTw7cpfSX3JwPKbPziWyd6EaBnXs38Hk8XNt5",
  "key10": "3BiJX4fFNPubdQbgJ32pQmgM18EKUW9C8btxSjr5br39js7di5MYYRZAZFaJ3MUZJxtQPAThPXsBy5KKz9xU7m6T",
  "key11": "5uWhj4uEopdATrkBie81KeHD1LM63YwATRdPPvUxqGK2dgvXkuuGjgrk3XoAKBDvGvLryrBCwqJ7WxfSfqsJ6wND",
  "key12": "34zJhJz1zW5c8VGEJaN3ZaxB6aYbCoZebbrrdVfJoqTAGipdMUszkUDZtYA84FrF5hHEdpU84V21BkPhuxg13wJu",
  "key13": "4uYjNVBhdt7EGX2Ur8RchNSpyCrSsYeNjbbwWsn4X5pZmmH8jMZv25yP8vci4Po3w5NXzbejsXdPYWc1EfHMd88S",
  "key14": "5LPpxjE4hMLsLGKvxui16NBjNnWRYibFRdve1nU5dBJFDnXHEMbFxzYAh3k8GW7JS7WN8RuUEziYAn4DhX8druNi",
  "key15": "3SqeRjewqcMGdyvp63XRk9Vk7gLpZwyxGXFmFGLv4LGBxEmowqgEwvq72PMHad2abXZupz7QTvGPoK1PixUTQPkt",
  "key16": "2t8kuH4FdMRZNj3wJbrBzG1HAEoBkbHzC4t3dufPtJTt7bK84Cs6tVUkdxJEbaebktN2bHNSLerz42YswQzyZBpw",
  "key17": "2tRBU1zuA9mQH2fTPyjGQFugYgTjBzZWAabTJEnivdqUM67JTA9ASEgVpCtFBEygmCCrtNg8hCBbb4RS2vry1x8R",
  "key18": "618o2cGDcpn5nbU8b176gdXKpcsjW2ddByaDD1FvStcWgGVVC3HgYHUA8LzKSCXY6MVmKReh7ThJ5uVkMiiGNm9w",
  "key19": "3XBaxHwtCZcyBddZZFXVfYH3g1dDguNMbbD3NaK9qfa2PNgw2NiiCGAohgM5D4WyNb2ybN7sPDi5PRfzCQ87NGUB",
  "key20": "9iELGnevYpZNG1LMFhvGN9JjW8pmK1YnaCof9FfXg2ddmhiz5uZS9t1eSGFTHMzMc2FEQSfgqkAKqimLrpJPJ54",
  "key21": "Yt1LvYTsyo8RkNksH8TgwYXpkH7pMx6BYKvvAwEvUCeBECGXaFKbTLNadcuC1eqgu8QaJPSjoJQFNomMRZXRFTF",
  "key22": "5wm63YAWuFjvTWh3pWu4CPoo7EduvASc7ufcwUWwtFbpJAvshgadBNWswNyASDbgCxBUXfxBTXtkxoSWCooBF4Nw",
  "key23": "4MiNamAB5pQx51dNRqt3M6A9wdVaoo3CGWyVdLASnvbGrbP4owMd6XdwMaHHCEky3WjgHpmDK24Erv9NbBfBFu34",
  "key24": "2qbJo2cknbgEZGNEpSKG1qyBQP2SMQ5m5taKQ1n4GcjbdeZdnDR1ZVxGjLQA9ph1m6V5NfJBZTHz1C2cxRzsQ2rJ",
  "key25": "3ocvD6LZLMigVsVwA5XrvHtoKheUjncaxWZsyXYwWJw17YeYWbfueUUaP6zNx5UdhiFCxRes48C1REoRLPd9dENo",
  "key26": "2EjJ3cramrVSb4ChavuUvT14HZmMYFjns1z9VXbQARh3cdkUQMiVZ3tyaBfY7GnzmD7y5JLbhA5nWK3XhGmFaSsy",
  "key27": "2Tfv8gqAMTAnGEwQ9b6Y6N6vNMFVNjBN236G2V92HZJnkhzwrB152ekGtLLwe8UvqrcCcRrF6487tfFzTxUz9qN6",
  "key28": "59YhHXeeFYs4uMgPjr4jGqo2ouiDHWfrbKM7MryzfET13k7XQPY3shefLjmsh5rXeFe3m4gUhLsJttHi4b2ipdcS",
  "key29": "YqHL9rWMDxa2veuzNDtkfKUTT5oFYBhvtc3JLmkyEm2SodTQ6ZzqSEFSZqET3HUbFzEpCgzT1UYTnASyk2JPxup",
  "key30": "44MeFcwnAG3gdAg3XQsU1G5UNyUAdsG3iKRmKA9kKvsRH6c9317oCAVCK9UDuMccuuPbdY3FiH417NgnN5tdYRjb",
  "key31": "5vg4KN7FYmYniBa5cR3CTmLGHxt9H6TFcW6zY5EhJG7ohStpjAh5JtEL4RLf7PU37Ggf1mfNkGaEEhBUS8TrKZdr"
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
