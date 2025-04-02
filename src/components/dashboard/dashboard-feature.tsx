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
    "4C6w8KKV5kUfgixehSUYptG4YhLzx2cTfVqXBYw1LigJ4BvvYsq33ntAmRqs71PjNaEZytBoVVCpChq5Zj2JzbmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ft2YVcvEH1tsvPrvFEtR2JiyVjRLDfBG553xt8WYkAE64gycBcue4FH8xHkSepLtNk6xNvZv4NtUkQk7e8m593w",
  "key1": "eSFJ2Q648konnJL3nVSDnPajyg3RqQhcXnEPLxvqd1XbLPWVBSGQ6jZpozKR4mRxpmDc7JAMJEKxBCV7UxhHDWC",
  "key2": "4dsFGaasXVkG9fyZVGhVjnUiADVm3P8453PFYd7wCgjo8V4XYP9B9NDvxvmiPm777jFVJd8QVfydFJKXor6VJprw",
  "key3": "3qXgg5ZJdZUcK9dswN9QcjNiprijrFvmFbuNz9h3SDSqXpuyMYHk2iMM2Ae9SUAGqUuTWc3Bo9UT4N7jQ1v6wfRr",
  "key4": "2GkdyLTBjSQ89tU81XgWZFQ6a2yWR3e51u5ACvZBqCrdHHNMSn6gr1dkogkr2uaNRX4BDWGuoo5WKEioowte8VTW",
  "key5": "2gTTUhGqQgfRnzKBYMkaUZT4prqjrRNDiUswzaXo8NGLdchejDthKgV4fiBjofNeqyuTWKfx8Vaj6k1BorfMtcqG",
  "key6": "2yyoQQ8B1u7YoWBcsWsgnjeK5HLK6SfDi638yFFT3df4t8d2id3YRpTi5GiZBvRjzNTzuBcP1mBHQQDDH7uf3EHV",
  "key7": "659jS6owKAfnPpa5SpFJPK4Gcfv4ZkK92sg5bxHMyTVwnt6G9PcuXpQ7dHZN4hUsfgYrxJwV1ek2KmYzd4HJTnFA",
  "key8": "QZ1g728kNzHFhKnL3DiHUKtNWNmReaKvsM93QXkR29KWmm4GAH1SzSRqoTu5vauGCjMKCRCjryP3emQaA816GGo",
  "key9": "3Km7eXQctCnbyZtMoiygoJM5J2gUJme7Hes5t2s1zHEpRCopxWmZosh5HWQG6Xr5aAi78EPvJgdzKuzKqn9c4JTT",
  "key10": "2wxDnNJLYFMqD1omnJBujFQKCEGX4bUsMvCcQrPW2M5yLg7FksWcLxSQjU6CKwbHKk3QdKkQ3pwUjS8d19NtBzN6",
  "key11": "5CHpP1sXaY734WUtYAy8xNtoUExKXuimSgr4epogq1vsqu1paM2C3RvMLYb6dXrHttC2HYpvt6PTWyX25HaFHX8j",
  "key12": "5ohKbTFcLuToBDpMLNzxsaosRWS2cL7ZGeyChZ92ygGUngwAjnGPDGN59TZYdND1TDv52nYTD7cUetMQfB1NGqsn",
  "key13": "66pdi8nVwiXHkbKtv4o4BTwMMgAgiyUKZFkzZzYyxbXqhpKt3tN29t1cKD8ySmF6fDaUu2LaTdBmwsvthMcu9UfN",
  "key14": "3hZ28a2smj2UZUmLitTkvW4R295MZhFhXPy8wHhU2M22YjoFA8ZE1kSTKi4sgFLoeQY4SYFwX7Y8L1mV9CcYtjD9",
  "key15": "v4joFWzzUejv3xCnQSbSbLJNyRuLBovQh8XX2zbzpcHW29sMxZDHAR6WpovhdJir1QBXXzVpaRWhQTrUQkqKR6A",
  "key16": "4Feph2tx6ofh9oVhwF8YSAMoXTj9ekZUq6d148dNUEAq6wRSjWTDKADDa6xFk5AfKGdsTy1MuvPwjDsoiv5R1Nsn",
  "key17": "55tpxjxqgFeCCBQJqYF9DjbzvNbs7ae5KnQTUE9dWPEc9Z4Xbh3yRVXqxnCvDN8s3XhFCwg9MDgPD187ZPAJx87",
  "key18": "ok1QitVb2tWxqquFmiNjBo1JGCFkehdruuzyJpEUjJut5GS5wbvgZYJMj1RSpY1KzrhDvvVhJNgnwt8miyxUZAa",
  "key19": "fvAHDEDgJKourjegCM9GxSCTfAkWujsLecCToMQUWH4KydbH2hWpdwvv6gsBG73NEaLNBFhehKunWJcpBeFaNUM",
  "key20": "25kZ3T856iBNPJpmYFwri1gRBMRgChhUWBTCchjS7XUrZo89NpZmeEnvacpqXpzKkRHwYKD6XWswPbkXT17Nnjzp",
  "key21": "DKuLhSxKt4EZu3zkq5n9M66qy39oSyNR9jZqQMdwHYqNzxby4kNgHCjxLj3B9weauv3xf2acGncY4yzEHSENEGN",
  "key22": "53RHnKxTfrYXvxhmdF43UVaQtMLqXCNbskrQZGEovvrmYspmTT9ti5wXsUdJfxFEqpo6aZkeZkAz2W3s2UNTTGsH",
  "key23": "67e9sEnJRSky4QWLWQbwyYoBQAuLW7nDZEAr3nqiE1xizHkyqmWnTjhSz7NYSNnE9xW28B1necrg926xuDj8Ta2e",
  "key24": "4KLhx4rzKZH8d3AX6gn5HxpvJXCPzsCDAin68GUkJXfxDRCp1tFJdvpcyJm8vBKJJPnnXUW4Tr6PgyXoSzSoL1VH",
  "key25": "2gEH5YrRg3ooX4xrkP7CiBJjtyQE24GA7eAoMpi9sXW3v2VSzvfAvZjU9DEhzTYARx8FP7fs2wNxFMTkHDkBPJ1J",
  "key26": "N5uipimU5HvFvnLV1sfThmjLWHGvZxd392gHXrFuv7Z8xenhi7rjNs9akxERZPBUxBCjwT89s9ziMBvrcx2b8ZA",
  "key27": "4J8mCiVLWQRt4T4by2EaggxzyCGXVcWewTN6JTwtNPb2TXy6mVhfnv3Q4RFQ2Jqbiqij4DxDvhPajA6q1S4ntTuC",
  "key28": "yxBafXFVj38S2EnRh2UtKtQF8iL3VP8iXSMyPi7sTMKBiprMZQWH52gV11uU9x418cAXEsujtvpckWKQqJ5o2ck"
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
