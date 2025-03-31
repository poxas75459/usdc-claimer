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
    "5fqjCuE3wSFxjnkiUv75eYrEqi1yHRtTn6avERVkGnLzNHDnySZwrXbVVCvbeEMfFxc2kEriJtYzaS8R5AQ45fsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Ba2ZsiNHREyj76taeatVP2WtVqJGV7tJU85NSiWEupJaEKaG7JgX6JhnSmMBbVMt36Q8VvbqY72r67tn4k4paJ",
  "key1": "2rEfwH1jM17m7ng4pjibfhe1dQtcSsWDTa79pPttBnruoBz4jAs3pWap8MYSs4UHUbYpgyQccy96UtHQ25iqmzm2",
  "key2": "3Q7DD4DgNoJyrPcofuGNQeGPstLwprRwm2iM9jiq9ToLc4NWquLF6qZ4GLjmzVbjREyeYYNyxjh8EUtTuN6hQt99",
  "key3": "4UiyAniXv5ntjF7QoDEEDLtW8P2Bwomb7gzbKEScwwFxnYjKhwtY9N1mvsYak2FFNrK8MVgCJgEWqWreRw4SQTbH",
  "key4": "2XNs6g632WuTw3o6bcAScZB8FSisyZP7f7bMTqqTphfcKr2dLH9w3jDWGsEnEqboCvUbQaUkpy4JGLtkHeatT7aT",
  "key5": "456697EoVDei468jtMXeDv4DNxBgXMgkQ8RSuHQfrnUsFRR15jQaPc3rjC21pkwEiZVRYxNUHZfRwq35V5hRziHX",
  "key6": "4ESWdRKbUm71gdgYTLXcPgPDKAUXnFKe24fDkA72ve3H1bH2x2iKhr2yKKBJ86UeMVCxF5sYsfHVRQfg8P6BktqG",
  "key7": "3ShcF9DRDMavnVWNYxpqffuMvXx1P6XumjudwjsbHdgfFXM2MzS47b53r8MSa7EtqxxoDQb7GByyW4h2NRfnfdEN",
  "key8": "62X6e3DKhxW5ZND6VYcnPYqm7ahSCkh7xvfLrhU6MKAfGm4Fj5SGcxpQWiJAWrk9ZPNYKyQHwH5uJoN3DXaQwjj2",
  "key9": "4ifCcgDPSbDeX2s6dHuc4BQGHqEo7KfvEfCxRr6RrEDWmBVhuhai4pRTAxMW6dsXpExMQXQYu1Am35eYfv5dLgxP",
  "key10": "2ReaCFHVMcytVvcYWee61RkcfxKNzp6AAnfkUi8FrvAgXJe7sqmceNsSkcod6edUQ8rQsKBjTjij8nUoj2RrQYw7",
  "key11": "2XGy88yzyLipcV9Hmz88tzwhM1pRFzXmGCALSgZCtM3GVvZRREcGfmmo76hQnS1pELovF7LFSnm73Af8SbBpVYKc",
  "key12": "2VjRgLKPpbLYV1jzZuxZfsoSGd2y9LFwNBowhmkUcKf7MTLbks5399swktRUfL5fec8Ff6sz6pZCaMKnD934dFTq",
  "key13": "yoer9VNpi5cHUqZurm3N6j4WrjnH5UPRZC9gSguhQ5dfh16WuTBaDo2psd4ZackiZ8qqFPcxdahR6dPLiXHjtWD",
  "key14": "2yjZLjF2VDPQamU2FUGwSeWLzRAEhTc6YD1QUYprVZbAihTsiQFrNgXJNQLaSejbES2dxf9YsDzdHAzTxUrD7MRb",
  "key15": "Q2eYvjEzQmERUvAQHxH3fm9fE3ggvzyZt9vLmFq79zedWFBHouf6SkDLinaTkj3Th2Dg8xwcSqzywf5cRZ6xwyb",
  "key16": "5v8G1prwVpgkuXfhY6VLhM8DCqzeCSS6EVUGCRHPgdJEBw7xWtobAV6AfKDN1vVgLy4xwdfjNFxBMLBx92bQHcap",
  "key17": "3WFGxbQGzB9rkiKerUhwVQtB5b1vsRUj4hcjeYdfYBRfLbDbaBZ7Fopnj2z2GMSjwX7Hw6mZmctCpscb9QdKGZmQ",
  "key18": "5sVBpTBEwcbukpxZrSHiYbyQNtZtsUMzAnimffBpcm7q3k4R1SbEbwH4PCrxHc5nAL1j6wqpYG188QpUJvSuMRDt",
  "key19": "5LVmqJanF7gRVfU4QJjist8K3g2np5BXPLthkCr4xiE8Es1Brat9cN4ZmtKvGWpVm8fcE87qrUnRHEG73uuaxibn",
  "key20": "4cEoAnPtH1RchcBMnFSAYQtSfNr2LKuEeUPcH3QcEHVWU3W77DdpgMMdCief4qmJ6gtwA1vvkZs2BaFe8dhQtnDw",
  "key21": "2qjPNxjn23P41ofrCep7SvC1DrzntvDdJ373mjxM7M5aUjyMCLjXs7Y314pDFAPRfow5yPMwvQGFpjNEAfJmYf7d",
  "key22": "4BKsr4BMiwjMXcMkYXiAAjMUgcM6s9ijsT2sP7Ft12Jaz99vK6Q9yzPYLbRcjuQ1f9Kx35a2ixdTHcDVsGYG9Vs7",
  "key23": "3CLYTx8Z1ZqCe5kgZGUu8z7N1EcVwGGmuyQMumW4qiL4dqEtkadFUABcG79gCBXNSgJUPNWcYdu3bpi194UgUjbb",
  "key24": "2C7SVWbssk5gv7Jipf6AXJotEha4PWJMDAYqCZyEPvXPUc6JrQnBXFBtgQ1rtAkDReG2J4Y8Nuf9W8XVvF4Tm6G",
  "key25": "3tMyEg1jLwxKsAHQH6Dc2kq7HYSEYy4k8xiiGuURmaPKAGQWyJMjBsidU25bCYi9Rveutob5PsVU7HGVZowt68uZ",
  "key26": "2Q3u6V6nyDyz5ZKDDhaRss7hHAHxWkcW8Uh2ZPdhqyMEBPAU1RgRLzNyhKR1H12JobLqXQ5BnXN4ERZE2xqgiZNe",
  "key27": "44rMvodHFTW736GxGnMA2QmQfjq7PvLWM2YQNJmNCPSvUySsPd9ZC7PHYurcLqf3t77gpDv8kTGjLpy31DXw99Ej",
  "key28": "5LuB8wCAoN3dvbVr8xwn6AAFWX9FVtzBhzNZr8vSoriJoqwfbecudVHNqzogSFHfED7fgtXexKAFFicr46dred7x",
  "key29": "5UELabVffGG5fi17Rqqtr9XV2ZmvyGDxMFRvGSJEp9Esn31F7stMWN5fFBtLgEiicqeuaY95xhFoKzxqfodHAaQD",
  "key30": "8MWf8GBj8C4wefpLKVgAVpx9yCrtnbimWLc6Cvr79PKtewiLkASkGDUwajMK3NgJg4sYYtm7n4rgvkXvMyTwGbL",
  "key31": "33jzwnSLp68JsqcwyeKSyb2up1NHJ13NZP43XgpXt9ppqpA6XFeUyJbE2r4nUkQMDJtEx8nVkJgy1ei8DRHQxoe6",
  "key32": "wE9kuDZxnx46wK1Mn4w2wmSngfdzfUsxbQKx5sizHcDkb9uYQcNqahDg2sfGmfwdsdEyA7vheUUwUGVamZ7ELiw",
  "key33": "3oYdBJFN6DSg9UXyg79UyU6NMb5MuB8pBQDdwqrvKvchT6thDREfVvoBLaUWfkML4QbBPriCBBfHrycRe34WcHCQ",
  "key34": "41pgv5ikBmsKo1BZPRm9qY5WGN6GCwBMMK1oLtz8orBFzmZDfVZUNyUbrY8yfBsUH1inwjHdk1SPu76MRUFgk2W6"
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
