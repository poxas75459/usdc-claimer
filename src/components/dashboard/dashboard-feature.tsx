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
    "56JuXR8HBKss8Kimc2HD1vK49KfFcZLa5FR9RUNjfDAt95UvcxXfEZVas4AqqyZ8UQUf8vpVdND4PPHxnUXWB3mC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tuqEtg9Bc4Z9FU1UaiRjQ7Hrj5hNQCVySDexgPTnPKJJYDyvSSZXdbBd72qcXzsHnu8ybZ7efA61D37YigCy1Fx",
  "key1": "TTqRuecG8SsgS3owaKgCT62kSFBkZiWogG8FcL97qZAmFhkvYLuA2dBidZbi7ee5NVzjeU2GACjG75nWiVwLrFw",
  "key2": "2t5SwVb96ScggEZ1m6SCqfud3xHdzMi97WTWCFnvcgKjjYoWSMacv9CTETaiXXM88toezXcssmfJVymVha3b64bm",
  "key3": "RVNuAAMc5A3m2Vt7mvTkZkmaqzsuhnmXJ6sHsiXdMYfM7fAqPvPpYrhcFkUKu5Y5Wjb3UkpbjQkn5LEVzBLNYCJ",
  "key4": "67A7PRwVEDXFbkwJAXH5Hz3sHKkYrrxfZB4yHxHfYgVAW8KF7BXf8T14XBhNGEgHNrUjGccBghkpfy3kKBcKhSni",
  "key5": "w3QdqWKD2G5A9nFDHny8AfLW6jcU21CC6tgDViPur23P912etPQea2qNL2kQPpXsK15JV6xTAwf5etBx9uVRDPh",
  "key6": "3JEY3EoWemVWyJeWivy3RKuwW9VHz97zHLmoNS1AD7zN85atEM5wkHqpX3XxJnZrM1v9wjX4kG1ApnLYZijtBSXn",
  "key7": "5jHLs5BecUSyxJfo1QwDTrV2oyCs1qhWM1yygnnVdKoe9fz4aTU8YdEmcdnREUj8sE4dTo5CiEgJVgPZUfDyxjrs",
  "key8": "24BXN8uFudiH6z3NExWE3ZpqL56Kdzi37Rzc5vDiGHrdXPMdqBhZtugxWCPuv8vL2E3PMsBcjCxqwdJGq7fCW83M",
  "key9": "4puFpULL5XMNgDVUdcBeNFKiF4Z6xeZC3TSCaghcVcrQSr1kbfjp8EfF9BJ8bgzahrAQo5s9UPny9mYNzu7tZmVn",
  "key10": "Kw5frTgtdfWSt97Zs6dycXcArxQKzzTJaxKQzWvGA565QFb7M9BK4hRN1EAJP63Xy2KmHNB98KfbWnY5RgsJeyf",
  "key11": "bUEfPWiTdR5C4hxvSvYXMthi8NZDVdnJWpNXq5xJsKMKV4hLauwy1X6jLeZmXTcgheUNp1uKzpQ8RA2dLKA6yne",
  "key12": "2rGQ9WDhoKWUQbMuWV5xbE1yjCLKxQDuGzESGZq5dc3H6iSZrp89HcGweYXLGwo96YXGhPQcdLNzg3hQ62AzU3gf",
  "key13": "gxvu1YjtVx7eiR4KmMRShQmWrW4ynusguUAokMREHT6v5JHbiuLXzK8GgLofrtgWgqLbwqC98rAvRNYXnuNeX29",
  "key14": "27JK3MsGSN1M7Yg1nuEeenKiGDhe8e5kYHsBpqiMt8yak3AkpLy48jptatrX77nfUap9dkEMGaMnbn56RWtkSZEx",
  "key15": "4XN1Xoi9hLmT6SF4YXZqGNPYsPiQpGBG7LCWmcPhToJo5toycnAxFuFwvpLDEcuWFgpnuSCJ2ksJvkWuZdmuD88d",
  "key16": "34D6iH9aaES83bLskc6TZwP6NXS6uqdxTozBHF7jD2HAxSu2yxEwKLKzaPFPsKqeowesGs9ndYi3GC1aaaQaj6rJ",
  "key17": "2gYHzFUNSyVvLEGoUPHPiPaq9pRGjGWEffZfbzyv3UpCFhz8HEhk33TXGD88ojhzVS1DXPcUXXpHbLbVdYbDYAmj",
  "key18": "3DhUJy8tE7Sp5D4GTA4MHc7oYsEtZhssnmZYQQ4ykcGx3AB2w8Bx187VeXwFgzX7kvLt5NkehqYTH6ddSo8kLyto",
  "key19": "5M4FfFEgdsz6RM7DkP6Qs76bA3i3C6Lrv52VY5G7ypiwLce3rXXUeJ18VysNNu9rXRWJJiMzJPwDtrR9Lg8Vn4N7",
  "key20": "5rLWe1dsLeyRfD29e7yHSLb8fejZyf4G7TJ9DFP2EYHkQwTYtjN7zsER19rMCz1jp5F8Bp6mJD6SHZp44yAUFqGQ",
  "key21": "5taX2FfL2SKmh5N3PbSo9guu3jB8QhgwFve2qmJic1tGwccNUMp1vBZmtGVnQSXpyBEDM5AM6rjdxbDLFdedZAzR",
  "key22": "3yq82g7WSPfc7Ujir2jMada1AmCXb4xZ8h3EnNQyou1UTVv977DNyXA8F873Re2aLr9nNQcEii2BEYaKjVgvtsdv",
  "key23": "2mvAkNQ284cYWkkyrwC5MyiTA5aTnyPHtocen2j9PwschMEVa6eeddFWe2SNkohwWnwbjskaSsPyWi4SZ6zFo1iG",
  "key24": "oRedX3bTtnEy9YTcCRFbp7HgXgkbeVXcgCgrfPHeNWji9DpPgQPEKuR9i6qgsgLkNNnc3qnQhppW8VwF6FB2RV5",
  "key25": "4CtocL39sEiQRsUUTQzpaXgdCpAvTWaCcb4NqhcvdbDkMFcrGK3fQZbAdBubMJk5qFkpZjQakwrABarQFpHXHc2E",
  "key26": "QKCdWDZuj6oGCj4yKBwEvdiY9v2XonCcTNViBnRTb92WwiLAjwepFHCPGhAGVmjVmyvRZf4Q3KJjiKS58fhqDWJ",
  "key27": "5i8ScuPqkSYCChdMPD4bbizVfsdyqmzqyJSps3fGEsFHZeJteNbpUdzygPFMb92ANq981GX6foRRZZ8n1SPbca8h",
  "key28": "5uiH1ds4oyXBL1gSsvVApL2LmsF9gCpsENZjNeVkaWFx99DiTDJFHVezQzPvi86MhiWA72A18nBnGCnQoV7d9Asu",
  "key29": "bogCJtVBGsDvvSNmvr8sfoUvnFTmniGE9jn9Y3AKoajBC7SmQapE14pY2bGFK6VQfRuPJ2ssUsYS6QZDBBHc5UH",
  "key30": "21fQgZYviBLLZTnfgFPJtU1aNtZpMdQgtQX1djzgYR57joec5yWsiqEhbmf6v1pPtPe8JZjQFnMgaHjkDGzEanre",
  "key31": "4vfXgSYhn1PT8HKAQWPyP9gSX3Mun8DFckxj7Mu8v6Ggua91ZmEkRWSPz2XaKMPaTPgvjHireHwsFKhEnrJWZN9S",
  "key32": "3QzrrQfj4hsX4aT1MmwKcXKxK5g4gmuFztgLAQAEnMfVZEUXGc82pr4xyD8eYZmtvkorZpGd8AzxorCwbHG4De2z"
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
