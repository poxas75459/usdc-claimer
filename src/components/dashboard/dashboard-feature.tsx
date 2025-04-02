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
    "4wHF9Xu5JPs1hSqnKU1kLVdAJHjzLaEu2wzhZftu8cKhCz4bhzfCWeNSJDtnWrRHPL8qAVziHVqcLKa1rA5omXoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zr4Mm43RMs6K6MtkPZvn4UwgiY27VgpNoPVTbDBMuYR2689X8JZrdfSAx4mxkLBCLwvHG3pvaZjuFyHzQqk5d28",
  "key1": "hLVJqoymLiFJe64m8LbVoNktAKbJovnwGjTmgs4F6spoGnA1bDZMqHXiKU1LeDjKv5zXx2sWgXjDtJQAwy8z2yM",
  "key2": "XJnpZfq7Tkh2s14Xie2knjCuyQonZtyLvSxud4e4dkAfuanpmCAbsif24eH8nivXvsGsitQZy3Nm9xnVTpbNrZ3",
  "key3": "EAngkwiX97kfVgpk7PnHNmomCbvEdj2EtqQMR5bNibDmjcLQW32zHXTH6uhFvbt1X8jesFf1FCLyHBAM7ANzCJ1",
  "key4": "59aPHApdVLqG6JiBfSYAbpyAP1Nn928EnV1Q6TR9HPkucm1ZQxbhpwRVsXZaYHuyzr9jfgneudL1wXMGaW1Jqc6H",
  "key5": "3WTAKrL6pZcuvtXYN17s2Zzw1SEf1iRZTnepF7BKPDTwC5isin4hLexiP5PCrvUxcfgBd4pGBTLdoGg86bHA8TJ7",
  "key6": "3t8Q3F8QCyVkrPAg6n4HK7kUrFLraFXmRDFPN67SykLnrY3ihhbBUQ4m33fPPPaZzzdNXNKK268F3NgCXp5GaAYw",
  "key7": "25hwjvhNRefj3Kv3k47GqCHUz2bggmPYvoBkd2yZNfFugE2HYLWSZQVpXFi3j14dNLhFYDLhoCL3rPiKGqoVMUyx",
  "key8": "2sJtCDXqTrwB6skP6fFL9dVqJpH7cRCgGvWu1RVqyQqzrWUt6Hz7UjrEJVqjcCeMw2YBBWZCC5aXmvwuP17CkSY7",
  "key9": "tRqn665ryBZbsp5qthHgHu4VEnQ5zAU8SqQsV9ykv9tF6PpW5dYfs5Rs57PLHXTDbiM6ikBdT1mgFnEEKYRRpiF",
  "key10": "4fw79mZwz1WPfznwngkCDKYAgbUugKGs1PPVjHcjRvhDjUrQXYRY4WAeSiynevWf8NoasiZ7bUxCqqU1KUxxKA1z",
  "key11": "58SHM3PgmE6wYLVkacQktQNazvEUZZghQph6A2uPTiDoapVmYYCx2NjPGVxCvMkbJCy68uSEvkVMXwsyhZEnuFTK",
  "key12": "2GbxypcVQnuMJizsBQEv1VPbT275WZ9bFbfPeBVfcESL9oDkHbMcxwNg9fJF8aNPFKCdpkFuyzVxB1iWUB1nYXev",
  "key13": "2wC6DqPKuSjzUSGYJcBBssVqQkp2HzSQdZkaP14wFRXyy8At1s1VkjZ2QoC9ncDdJDcPgCBxM3MiyjJzHsJh3i31",
  "key14": "5bJHvajTvZ1ewKteLWEAagFDu6Vo83DjF1k6V5fUzhczkRPMUM8gA9WgWbqkju4FgcUz3BAueR3UgYrqcTuYfWf7",
  "key15": "4w1DFWEHxznPUC2aQWTcwChHFt5ncNQWjtqRtSrLBuqo1P4zU7AgsJSpY3nDysRpPhcnZmEdcEHudDjCsBQHfMfT",
  "key16": "2jejpERz8NkdcrhfbbJnQv1kBHdZ5LMBys3FaMSPRP1GqDHTXcvFNbiD92cPf1wiT3JcVKZ8yPbWmLJBZv4tqbEW",
  "key17": "qRT2KdgFoyyzWiy5qs7LyViW9Ksi4fea5UYW1gBSt71bkggieQXWPAct6rGrgB5FYqeEVNi8MDgvSXxJeq5gU63",
  "key18": "4jXUZP4WFrLjAvmQnokCpFAEC5sb1zLagXtGkLnig2rx1MK9uTDNLLfyXzqT4BfwhPzK94oLpdXYdLEcfW6EDD3i",
  "key19": "2Sv4mmP3GkUFD9LGbw1pUkw2jQuwj9DYAbukK4YkF1u2a6B1tmeLMNFFULUq8QAALjgi1M5bhQDpaK5xtFsAZdH5",
  "key20": "3iR5ejKGJ9eoLdcvj93YufZnwnjqMnPnKao7NufcNLrteWtjwXt5RJqoiqpCJWL8RGAYEa1GoLrSWLKrJ65D2KWu",
  "key21": "iUT8Kz4B4ErzZQdxq4SAxE7DSUaqoCuriYLiTRy1FtxWFLFNXGMsJ8xi8brGcuBhU7uSYCHtYDzFtgJoZHXrk4M",
  "key22": "9ftL5xdmsXoDunXZwuGZAFHBcDDMbzadsupwfYzPHJTuwz5FWmC7Q6KC8oXCmY5R69uJhDkiTYJ2yQ1dc7uH9xP",
  "key23": "2JaoYM2WXyi1wr7hA8pYthyuRADqj4qUZz8WKqnViFsLw7uuqGv8aGEuRRk3yTfSKSG8XNKvBaXHTgmeb1pKeCce",
  "key24": "NUpn3qS87XsxXPgga3aAEQVFWeCigHw4n6a3iZQX7Foc4duxpi7enXjiVqf1UvNf8wFQ6VFSqHfR4p1pvTu9wU4",
  "key25": "4GTT7dV2CEworEfMKT8ZF8h3FkV3NJs48tGhhJPpdeuGwqzXfxWp5s1anRdjbo2dmPdVdsBTonYqjueaTek8gzUt",
  "key26": "64atD1iRtyTYnbDEcEHABkQVL8ppMBTCJwzFVN64HjDkAZvD61DpdY3tCkW8yRte9s91Un55H9HCGJGfL5i2AnKv",
  "key27": "5XLabXC4hbmb6NJLDzHXs82cMEBHbb6xT1TiwCEbkZVjSFoukH8fq7jZSPxodvD5fZx4WayrzPGpB5qLuaeqs5Nr",
  "key28": "4dSHPkptaHGGJW197pP3mJtg2wL1KdCvoiUkLYd2GPo5wFwwvddLaGjX4eZAfXwW4vktGnPTDn9v4eVjsGsqEHxP",
  "key29": "4Hz9dKsqCazVQfZbu9XfHBMTXcWUHj9zwX95ULQUZ8NhM7wPVnFWxeA4PiP9zLjgqRf9y4bHqgvVxSF8dtuU1dxd",
  "key30": "3uHBHUX6PvB2SMw4nSDzFGwboeRNcSVsF46EkREogiH2nJBqbStSYKzsX9nsUH92KxUbG5oP6sNLrCPjjZ6pP1v7",
  "key31": "56UfDRdZpsNW1TP2svtZqDwPVABp8JPd6i36XTdMgd8QLLzFasTKjuVbytAQfP22FaMTWGKpvZiBSL9LFCnZ1Gqj",
  "key32": "8n8pD3Ydb3GnYtE5SjVTep4GzcAqtXvC7yAZVxYt6PVKMaNEgkBUCmCuwporrSccgPRMkxY2o1Su1FjqPb8f4SJ",
  "key33": "wHyuYsM9AwcepP5boqoJ9iR4mNLwLMQmDy2UQNUCax5twkVuR9v5HJsSV4e9c5UgVaiyV7SkULcu2voy62c6MiC"
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
