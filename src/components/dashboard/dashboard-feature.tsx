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
    "4KrJka3NpUuZWdY4a6GfPvk2VqAtQ3ecrHNcxkiWeb5GFzYQFBS7nhAVdC7geabhrsTndV3foDYHbVdeRazGCGKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aK4JKaXY9QcCehBq17fAfhLnhrwxsNJKtNzFpKKowGQSRrwtUTCgFLFbYJWmFaKyiw9kqsNEf8xs5TG4LnNNfQu",
  "key1": "49gu5X5UqkarE49UKM7cRghXmzRm8NSKW73Qk5jyzLHCr6DUDgVuTPJkge9PM4m4yzThkDTbDYyxQUFmZZb3PDvZ",
  "key2": "5Z6eU5EX9akMWnJ8pXoaFSw6imBnPjyUxPXVRNNGG1kUqrsbTq1tMJavkLWXLUNFkpCUePi4NVev5LDaaJiaTG3t",
  "key3": "3abVAP7oeMjXgswaEupM1AaH9HyBrnnUwJWsNYdKohxSzR4Xd6LPESsmo9b7zYxV7gzBo9bEiYWFVqmQYNT9pCVK",
  "key4": "9uqJe6Dr2sXqw1Snd862kD5AtiTnao8r8af8uYWsUn6CsSt3v8Lcevvbr5w7HJJf8h2LwoyW8e2hb7CuwNEu2c6",
  "key5": "3VkzRDrknnZYQiT6ehJN6WEXGN5ZTvgSQYaNTn83HSAXjnPGgRvUerAPaosHAJtynMoXffx2smxNuuqxGC1wpN4o",
  "key6": "2jDBdbWxoPQF7ACDcCyZggoWmqtcLbsQYJFgUrFmYZMYZP4NBPXt6cZ4DU51FhD9V16otoyJttanRdrvp6je69Vj",
  "key7": "5qQftGCGsrztGVLfLMWuoAEU3VavS6fUuVfvaBD6hDXF2LewbtvrAaMi8zU8ryvXiTTEZsb1DqJUzeYrvvfK5LdQ",
  "key8": "4FKkmULu1XtieFq3XsLT9tVqYK8aoQrCNgF8KeY53jXFG8gvVuDaL2z8LZ1dEe2DJCoKi9f5ENQTvkvtERQMtCKb",
  "key9": "2qdFQut2yUjYmNYYPNCbW2Tr5stvyq7evsvD1V1ufyGikDEeCUZMiv9AznGe3Q4K7g5vESNnppiUnYPZueSfNMbk",
  "key10": "4szJUYSgqg3oE8jPtPRErEA4Jfde6qt6efuk2xSQNV8pRFqNu5sGR6N9d6xc4XHsqJTeLxaHuESYomccH8MZGbDC",
  "key11": "3mwxXVYyZMH6YwGujjanBen3TCEY6VZoLU4Gv5KPidc54QQZirCXFMjEUumd6Y5VukHRxwBzhZCh88s2ckVjRDgK",
  "key12": "2YFFKSwcCP1r91nbZJsAfr5pNByJvvWZ67vLAHcMsr2hn1i7dXHVyJzxY8EMiAPqQpVeB8oWNxHNmtB3EBKUn5SC",
  "key13": "4zR1kiVUBKRdgjUtYSoYr4TFLY6gFVhocjs3yFwyzUmBmWdRycRbfmWU8AdhXWqsnkYbK2F163Few6RAUhEADH5r",
  "key14": "62DvacgNtcBWtBvQisHenR2C7d6FR7xHLxBztE6W3Xu4ssJK1MmMkzms1wMhoJHUdSPhkkrbPihfAoaP4CSKuAde",
  "key15": "3EgWEHr56W7SBnC3gF2mUrAitdftiL2svdWwdU8XzybW2AHtwbfq6V7b1VNtgSk2EKmvJSKddUgXLfeWtLFaDTdK",
  "key16": "4owfRwZtFkuQKMJ9L25e1zcxpRY7xFGBB6qvSkDo23syV4B39TcBMWW92CKHsiUjGBDD6pWeEmegZwtAiNUCDPAW",
  "key17": "gBSE3d7AfFL28BFazcddQYKBMMYZLnApnzveteH2sffSgU3eioAK71fc128M5BibaftAuqvyNKQMLcgD44Sd5z9",
  "key18": "28A4SS7RzPbrVgGx97teW5uSfZ1cGQ7kCLtHv5o94j88cwTfFUeDv62kwJDeLJ1LspK4hhc3P7jNXhiG1dZUrTuG",
  "key19": "63tcAiz9JDjoHXr8tfTZqcXwbKWwsitymQ6MSwPTP1csiKpFqLYMyDQHMTcyaJpYtsHrKuqDTUSboPQEJLyCZURi",
  "key20": "321v6dW8UoargKiMBsyL3H5V3VUJzp96jKME1LXtBRViHs8jG962De6vb1peMwct2tDzi4RGkK4NewR1DdQecwF4",
  "key21": "iHVjdprW5EDbhMxSDr2QpVpX1JGaASaVg76Puv8V4CD221q3wBnaCNpLcd2tj5By3HPJbm46XcyPntu5YRfb18s",
  "key22": "5ayU2iB7TU6WQsDTjP9dxuJynNXwd7rrcPwLSGW8NMN3HPgTkwoXz9XCJHU7qEXyxDHBhYctKFdoJmRsDRBr4xDn",
  "key23": "47XCKcA4cXZeQsKKeW4Ej7NiPkZJ1qXUzSedVApCMc6mETMAvoxg6DKfSSbqozr2wudoMRM8tvrdeLDBJXnRHFSH",
  "key24": "64aw53r8GWvAJXTjRA7ZYgf6Q9uJxVVVDttPjyrkY2vGMZHayKfLd3xWzjPaNtHee9FdtCgumxbNTKM9Z7nQpA3w",
  "key25": "4H366N2N1qAVytnoUz6grjzYgComZYTesLGK67gUi8npd8aAwZBu4gAK6Jy4qSov44kVBPRjfeNYh2fRtkqiS9co",
  "key26": "33iq3BUqznCBPUAvy2Ggfhq2tds78vBQ1Ym4DyRKsrWBue1VBhRAqkqWWixJ8yGfjgspXheXczi6RYPFhbdn85B4",
  "key27": "5E2H7rGg3vbx3ZEajhN4LVYHVTzduPVSaHVfgNJ5RjiC8uXKBMPUFWbZWfHHfnhMWVnXY59eXcEbATQzKqSqWKR4",
  "key28": "4gYHNCZNfLB76AtCUbZjKW7PHxJ4XdPWUXPp2HmRYnYUiBjNvbYqUBbLQGZaaxgPq1YgshCec9Zid1jBiRuqEKxq",
  "key29": "3cX4poowayUtmaxjWNw4HSDstVxH2Q561eSBFCqAT93bRWZNqnhPVoWDYGiSMW5qc8n1gT6b56jpyapsGhsJsj41",
  "key30": "4BzfZcLtnMPJqxJAtSAyms1Lj2ZfDPoNVuWxL1WeJ18VXX8cf1JBoB3dvujerG1NFjTaxgXwrVfVaRBh5rHuavgQ",
  "key31": "533niCb5PmRG9KQCtuPVDkoj1YWQVz8T67FfsfGsTnWCLUj47zx6udp1ADcebC1fifcPzxtfS5iJTShay1B1gDEC",
  "key32": "o8iRtDdRxQhTvgdH3FcrpVvH6GTzUbNXTdigmvvqzGHQmThWbDWs9MHAkdzwxEiug9wD9mVdLCgWWJ8N3e4VKVT",
  "key33": "3TDyCHfk2GveNcZLQmVaXPzZfXFNg11QCTmajeVzzM4RwuQ9Sq7Chx1Aqx85YhH1oM8YhFbg5j8Qoe8bzKVEVBtQ",
  "key34": "Lgz7UDM4UzREqCKteUsvq2cQeJmEeGiLfxmXuukwjTgDicQTKxzCjLqW4ic34Yoa5FGispkzMTc5r41ncG7K3fQ",
  "key35": "42ciKAe11PK35fLVLzV8ykJipwcgTiKMyVDTACv3LZvL9vBRfu2V1P8eKepzLzqJTad17Ks9poJqg756oEQZ52i4",
  "key36": "4FKUoLu39MdcVvo4Z6FpXS9MmTXcNKSif3merp6gioChNaBhAp6Pv2SDL1A1y8gQj4WR4zzEUkVt7aKWqN98zXB8"
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
