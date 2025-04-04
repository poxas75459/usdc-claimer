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
    "5bPdRMZVQ9pNTc2Pqbgv8RvvyJagLNFuvyNRyUkNKQEvW8uJ5J5ZyKTdBHxdVgx8o6EQJvj4yyxKAHMHNt3chTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ip1E1Yw7r1ETt1EuqHq9HiVCjMTC6W46h9igCjPpW1pPsoR4KdjraPeMP3oxgbhV6bL9mNssAMejobYYW4bCgbE",
  "key1": "gW2y7ggjtRzttqEqiyLPWkxdmgB4wpn64fmUqTzTvC4D4tNSjDeEbZ3P1avUQtpvkZiCoHrSteaRggB9fBZB6mV",
  "key2": "DdfMhWntsGyk6HKAUk8cMHyA3N8TCz9Gmr7V9zhhVFqbk4vAXcrkvLF7ZsDXYKjXJuJhVQ5FTPApyqQLQnyyXvp",
  "key3": "3v1CNTdNihvJQNQTisdA7KfyZGoWHEZ2sgXuEzz32fMyj49DZGtL2TJCUS8XpW6QSchsZ7y4LVb44HTEVg3VBLTK",
  "key4": "2BWijjxnNuTtnY16n854KbmUqj569jisikn3SXHSBx2idVr6vLMXK8xD5dpX8CbaxTFytVc8y35WN7PtuiNUX6ZU",
  "key5": "5bZTM8LwJo2eJenmvZJ6xVrV6kFBnuSTnLtozZzJh2REPfjXCf5JjtAtiZKH2sYdg3cToVAvZ1vnRZrPc196KFr1",
  "key6": "24LVRFL6dvxnww1ojiHU2xv6iZkMY7ruauWFfq4wkApygBzPtGcRNs9UUBHQuC8fcHTFpFjrUxRGJWb3qhVDEwQq",
  "key7": "8uGhqhjsVvGWbioEa9yTKzGaRoPb3KE5r8kCdQGdksUWjKAqBNaQNkAumcbPqVU4etnPe8oLcCsWZPtiRcAz1VY",
  "key8": "2CrgLtEobt1TsApaMJGvf6kJRDYgKKbVydTUjRDXN7fkauSgJhoECfFQocGeNEYEk13Tuep3dxekpzuKJhaUauD7",
  "key9": "fMw1gPNysK4vwzrKWeegUKnVVHNuX6h2hbhq4o9LGQ2URWetBxVvA5U7mRDsXAPt824bakySajbSKjHXVepmFoL",
  "key10": "4eiGQRGBkJHVshoYsDUuT9kQkpqRHEKhFHVnA5CK92eAqvaT5qDzcrGU4fKKFsK7K5rMAwR4h4g97DYjQhcpTjLy",
  "key11": "2c7DRq5vz1ijX6PSgkKxibScaNheS7LPro1nVJ5LPVJZFwFD5CFxCFE3KWd5ThjbeAVxDRHdBBG2iyaQ5evHjAB8",
  "key12": "4o4R7AibdpReJugdMFFxhqJHxc2ot9xuqhYWXMFUQ1uo7rCnkPKgS6ex9YKikWMbQTPSidUrzojnWF55fgSGBL9R",
  "key13": "3sWo3dgqs1YCkY4KmZr2Uvt2DCnbmY25Vn17VSGr8xeNi4xS9ux3nBuxVjmnkMdeud8pjqAqhVfiCfShU5keii2w",
  "key14": "5tBA37eb8rBmvUHB8y4J9Z1Y3hT5UHPe3KgCfhMsCA72BaSTNvP4E4ZA4FntFfQ1WsP6hHSri8NotyYXfFNyyA3A",
  "key15": "5yMG6bR6cn2gFFog7CFr7uiUQkZyNrGQUcpR3GJtrFuWFP7A72gxd5YGewFejYuCNwTJmbYLuD5tD66VGf7jZHqx",
  "key16": "1r4kXmQ5kivWEt42JLYtgPnQM4SsxaKcd6Kx2V8bNEaQZFU1J1tBCqAQRhGVPFLfqH4idSuFf1ouMwKeddKwvFv",
  "key17": "Nh5nfq1882aqQVKtZYTMx8MRgxXR3WvhoJTQfN7MbyjuniVBjGBwiw2WzdjUNmHGUE5SbApeMDYpYxPtQ2xc7W9",
  "key18": "3GAWjmjN9k5vtNDJhDvRf2jaLoKy3UBTa8adEEJbKP7Yb8PQdLNrWA4q79yDgsC9Yv9bkx2PJNPQyrUK6nWvwcRN",
  "key19": "yNuxAsz7Bd5qx4uKbx5Rx6CQNgXnVFCmoUbwBFWPa1TeAdyj3QpApmWfXJ9xQApnzWhtt8k3MNdpkUTWk1rdcs6",
  "key20": "5kcqH3TRqjxhqTn3qgCfUeC6ZUaNBUV7envBXUEuSFj3NKr8Ww1QMNFD1ZXMvF6b1qa3qhLwNGcoM5gQZLRe6vVU",
  "key21": "4mfbQAs5PQd95wySjrJsdbgeSt2cwantertn1vb1xwY7eRr7YT4KHtjB29PJ9XPLZ9G2ANab3yGY5XDcuTj1xvXE",
  "key22": "ux6BEa2hKmhSLkR71HH3yffJniSwnsxYmk433SUQZTdNQQKo8hjTC76adVyM3dnPp4eb5fLXQwSuxTKZKNKWHKF",
  "key23": "3KJz8NMyNeDUBDrHKG5ySejJwZJLrzMc5tNsdYHJDMJe7RsjyAp97GwJZoG1QnWoMx4aBMdQXene8ySiTfYUfnU1",
  "key24": "4mdWY7nw1mb3Ku1mafJLoycEdzz5ECamdhcNxPTyqNPeQNbHAdeoWxSmTKgzyMQH4EW2dLr5eAmHgWZuv62d8uAs",
  "key25": "2itBFqo8AmNZgyy5BaqFpvWKp963AyZyewixujomt4UjgTwVwHZKY9SSEaqNxvE6Wan4WU2PtP5UGx2kggBranWG",
  "key26": "iEcNTvRgCvTD1hBohEXpDwMDEwMxqWxqVZJ4hG1dAfbMZbJ7mZYybmMZqX6s96EJRsiwqGiej3jsfPZytkLDEQ6",
  "key27": "3aKBo5TkReMcRUw7EoC5iZPRjFJDynvnnQTpunXJRgkDZHsQq35Zc6awsSZrY5sxyrxr8fT8Qwhtargd3TLZ12gW",
  "key28": "NwmZJQjezFntenx2titFkySn7bn4uf81ATesprzpoEgWQ79khJ4y5CJLng7p8TXBe5KJRcte1Jz53UzNpqWMUid",
  "key29": "5pKtQ3NerpnxCPpurfq8H2aqw8kztZpn8N5GKANdBZumVKYTBPWuJMPJvWYpfE3tuMcWAgyQry6dEFjKWYEgrKAJ",
  "key30": "4Y5Rq4wm8nTkqjKt73AyPscxhys9FrGmBkrGj3SATHHHFNc12RVk1Tab9z1dFQZBBaufLUNAtjz2WTJsQTuX2vpP",
  "key31": "3BQATNXraLHbcQuk6fXtXKkoa6wSuqejmgHW3wEcvJSDR5n6BL66xQJeyKGshXrEwKWMhwVYRbBizwYCV91oZf5r",
  "key32": "3gEBjw5D5sFZvaGX1Mi7oioiGEcJt7K5nvzpQ6F5qLmnPWv4hZz6Qrk6apvhQEQfQz74Qru9KtzypERyF9eWfEM4",
  "key33": "ANakEdouQtyoVWqwyky1bR9WviJ6pdfNc6szFyz4rWx8btM9wDRaxjCkjm8mZ6RiFu9yEDbte1451KQNtZu5gcm",
  "key34": "VC1ZdsnFe9wSSfywLKrNhFoyVjtpieDoDVb8TTx674ndBwLDpaBnR9jgShmEqgk1PPT2uLPsxD3N38auHgNRkDt",
  "key35": "TbN46RyCxjgDKfiVuWXqyXXANhiqe5sN7Bw4orjcBGMk1goJxq93ECmFnEvtM7HbUcqMqCUMdAzUSzAEqiDWndG",
  "key36": "2z9JiSxrW9rEcxHQxtNDCDH36suiPTU8BrX3GrwNMJcqf8cJUUHvMeHgDu2EJszdmmixH3mtY8jWQxDGL9g5oK2d",
  "key37": "521RX4uwqBvB3KhyZQ7uC1STUyAgQvE2pEUyEopX8AFmpr5Ckuj79imN1G5shhyz616njurTvHZZMDSSsBhWe2Hu"
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
