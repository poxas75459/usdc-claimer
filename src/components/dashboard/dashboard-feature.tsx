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
    "2fwEjxcL44SMjdMqmvnkRPhtB6CzWoKkVxaLTwNftpFAFjGACu7vdqQKvLTbnXrWjCu6jcoAoZpufbhujhSZ1TX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dGKrYgazA4Xtcx2U5rB6L1a2ZExMoHgU24LgD6Hi3kT5TFGM6GoURw5nCuG53cCgyBaQNZpossJY4KcXkwvkgum",
  "key1": "456c8htQUxEHb8Te2mYJ7nKANohcFLviidFTHBPCvBWQmFSiZPgJx92TmaWMAYQJoWZq1kMUH2F8w3faN3juSc1V",
  "key2": "b6jyn7R6t1aUXq7fjcGy88xjbwBZT4qm9MqcYptTRHeG4tzTSGJ5ktinnDxHTgq8HUxhFoFSHz5UApFj1869Xcz",
  "key3": "5ZRZA5SMdXufpRNiTQYAMVvUeTkXBoWWThRsbVKh2CcPL1rZyRmy9wgVG4BqsKEYei3sTY1e9ZAexjFWYvtaVdA3",
  "key4": "2fhuYt2U9JDwCmYz4a5grTmCKVAT2YVGfwpVhYbTJJoASrgAFm81sWHEaai4CxuQHVXY69v7oJ69nGUkYkCgHUR3",
  "key5": "2GmFAAX2k7c5EfzR2QwkgYHXUkZaKDkAJXimX5XMw1Eknghnw69A4dYrSYigC6KCW3Xqqgv4dMua6HTVt4AqFfWS",
  "key6": "32kWorXW9oVirh1PEv66eiKSiJQPiQ1bK1tau9JfjW9Lhcj4nyQyokuVmoz2MGjxrJHLnwmizFc1FK3cqabUVJLQ",
  "key7": "2sU2GJTXyudFHvGxHeeRmTAumbWPN2RGKUNPTScSZneEUo7N59UC6Du4YvyBNXcpD58tsv9xnczVmRYhUMXn681s",
  "key8": "2jiwi4nrULcUxP2qf8u5YvQhRA5r7WJ1ZJvwx5AXLMSnsAkXCyBPfJ41JCrEzSbsFhroZxiKtZ8JrAbnoDUPvW34",
  "key9": "3Cb3aCdZe1kKP3sZDUNxjStZNwAaYZBiFbGtvf7zejaPYBWNiZs1jGiGkNoqd1saDCyFhTX9pcYZF1mXpP71AMyp",
  "key10": "2jnEQwcLijFqrmAZHiCPQaF1hou6dkoHJiWBeETThCwyGtfK92tUzd9N1XDkUzS9q4ADWdXdM7X52UAJQvrmbAEx",
  "key11": "4M8xSKQsU9hm3ejDSVjFr4LQV2uWS1RBCcXwGujMj21tjzzhYhFwcXWbNXAhNQTyMmdN97iBCS3cBECe96ddQXfK",
  "key12": "3f9A3xUG6Fdn5sATkh8zeuRAPEZq6TPhYU7EzUK8bWnpqSmd3s4rKPnuh5r5535JS25fkUJ8xrUafpc7NV84WgD1",
  "key13": "mQBSxzcMRhtccZKuf4QWh1XeEDJJ3vC3wCuSyP7Ybkb78N67ZME9sVsxMBJBsNxcPfDFyGQL1KSCwo691o7KaiZ",
  "key14": "tHrGL3LMcMX5wRKNGH7ixYaoaXmz7BXezhJyGwoBCV7FbFsppi3cidybdGpDQn529HEzrrUtmBTZyzE3iWQskgx",
  "key15": "2P691ig1PP7s3YUyX8fv5ZwVmc7VSSSBiFuw6eLhTxSyXXhNfoDNUoDowSooVAsK83mXcJg9qC2BtDTqh7iUh7Wa",
  "key16": "4mo8RPqAeFPBkmoeGCeJ1aQmF7PiBVxNUczUxpHo8n5hayJDriVbCRRXaHtemu8PhRvGEAAiNXgrAbavSSaC2Ykg",
  "key17": "Ls7nkDijPZvm3iikcxSxd1DhLUZ9djK83LE2ZZX9qWmsexdjGRzpd9CpkvEPTn9MgeeMjU5pM5WSy7fUanak5Ls",
  "key18": "5r9sWvk4yeaG5ArFC2ZSuXxq2YyQyM1r1a97m5y9Bi8Sc7LhUYv6bujxAkxu5XsujDQUPd2zWbn4dbbQQ415taYc",
  "key19": "62oYuAqJG8eUXWWdhAbYxWgxr6oVdJWqo7ZgzUkCm1eQL2ou3s9CtydDaaTNfNgewrQebhg9kLs5PZ5tmU1RyrTY",
  "key20": "3G7buuBZff8eYttugxpBy4yXmt5ziNcgVGL6eqxasmvn9jjwhro98W6TcJn8nEPSfLvyhntfaZWjsjhem38SSHBX",
  "key21": "2FipuxJpLrKJ6mhBYhVYp2UjKXGvHCjo3pKwpckjvqpERxa5UnCa5YZu6ksZ5o2SBxJWqtmPDJNvQLwM5CT3FXCn",
  "key22": "39PLjXAgdRyecTQ5x8zgkfMQLRcoNxGJ3uoNLusxEWewUYmo1MRrf313s4z1SEvZneE41UkRsqyQgLvde2cozdg5",
  "key23": "xWdcLohNQSxCddXpHJbw1sn9xGq3v2LS5gt91hr9iUGFDW9AdkmjMwsUuSFaQ6hx9TnRy3X1HM3Ra3kTaHuXygK",
  "key24": "5FngQEZwwiBBiN3V8pvAp3Q646QiTYSBBawQ7aDbtH5T2hb6vB1Hk4WNRE1BjbMjaLEfhxUSFkDpYB5vEFaufirE",
  "key25": "4apCgp4kd2UFcRSmQhNuJezex8Vfm8cRAw5fA8QiYujPazCVSDF2XZpWPrToqCsughppz8CLM6TG1RywZbdD3ohw",
  "key26": "5K7r9Rmk3xeSeJL4fw8wC57k6URetcXzJMZHU8GpCUwLiyEjrdhVdZEYWgTRNvHDx3JSVZYJUmvZto21oGFezzHs",
  "key27": "5TxCwY2wTdA22fSayeEEwYEwkp4U5z84wRrpKbPCWAFa2Rj9kFjf8b3wuurcSd1C38sLLiVZkJUoxL3Ro8Z7V86z",
  "key28": "iRvTMtfzpbsrHM9vdC7RqjXiXqqUqwSNyXZVAQxHYcNqVUXGMWgSNSaEibcQifZHLi43XWhvBHPDKLK6SSRD2UL"
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
