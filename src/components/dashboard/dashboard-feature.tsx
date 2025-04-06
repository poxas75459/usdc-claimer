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
    "4GhdPYnDhfRDP1id92hjQMwaMmCKW7bRdRhzx7rLw4ctncfjW58z379F2Yok5Ct4uWFB5W6S2B9WJ9q925BdjwnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29JGYMb7vqMJEdHcgcnoiXWQgDYaEDg3y13CGw3Ado2vSVvZTjeGyordDr9fh8unraTYSqCHhk17BygERW8ztbt5",
  "key1": "5GCNgToWwCc26sbbEUvfwvZzZ9s6wGHPoPk5SBqLCnaFcc4kvfPHiY7fWR6bqeCAaMoSa8RzTmUZ3xT5YtLB3ALe",
  "key2": "3MtwferZN5nw9ptxMVjcRMowjN74sckdjLB9VPZYHbmkbxDsU3LYPqsCkzvXPzwk95bG31t9vnsT3cwM7X2dGYUz",
  "key3": "4K16ixjoebpXvsALcwrf16dHxL7XkobxfVQUocuUHt22mhYBATFmop4ZX4LCNhXZnspHx8mtJnjNzyp6g2kYzGXE",
  "key4": "4EEAvbZpdoGcs9sRAThFWxAWHFxwT9SBD1Q8wKqrf2L9SKJt1RrhwPtE34mKAmZ372edHQz4DSnBQbpr9dB2S3zi",
  "key5": "3GT8bWsMuPcowPFDsbfprCHeD8sS69FU1xVFKULUp42f9q9VEgcUi6XrKZiG6ZZLgvhNs8TLBZqHEPUUgQsC8tS7",
  "key6": "27LLmQoJMtoE9t25dLYPdqjJWz9f4LgUpBkQKbDWwgSL2S284XiwvF6EaXn8AbG3qo4d9v8YSAZUmQgoQtwmCsAG",
  "key7": "4A251hEHq9PbueUYDwAKad8HUKi97SjJ5USKSn8eKDPFooyqswEW2M8cJfRDnDzQ7BWLUTq6mH99N1YQdyvxTCfN",
  "key8": "33FjmsAJ4ZXVsjESRzzdBmKC3u4L29oLi6vi6HmLXfcXDbNSLD6774AbrTdiZpVLsCzMFWeqX1JnMT9VPoFMazxp",
  "key9": "4DnRnT58WJCq2YcZHLv3pNdFmxsGPSm8GzTFV6A7RGP8iWJaspLUanZ36Zks3aBHDa8SBfjBJ79ahpZgjxQSnj8r",
  "key10": "5f9FVZhc1fyLrmoLVYuKazFzez9PcT53dkkubbgmn8vG7Sn1e4eog7KqRE9Nw9uaRo5sz4Gq2oB4QWjX4tBuZW8r",
  "key11": "4ZUzTd5ZpRTF7g2n1kmYbLvtrbe2Pv13SgaNJhQi1dc2SNXcXHFA4t77HHN9gHeDo67ed8wnLAd99f1vWF8BWYRE",
  "key12": "54d5aMpERzFphd9JzLwmPuf4byrwq5ot18hqgK8F4TpqYtDLM93fvGGiDmHgj2HqRprfED26dwP5tfskAjvYtzSi",
  "key13": "5EuVQFBrsZ4vDVsbqKMMZibiVuRwRfmdVMSVgxXxU3nXHAJtRf8oGknzdExwsMrYdPeuMwfo95JSGqfxHZPd8R9D",
  "key14": "2PcMtjgSXqf7Cyv984rPi5WCKf64RvUqqyge6sGVo5dJcHUQYod3cB28MPy2N4YbEk6qKNFUYdMmSQoLUzyG6RyC",
  "key15": "3pxmuWf39So9AFqaMMjEpPrwBzuQUMG6ALBPYYatDX8VeJVwFpdQJva7UEo2Mixm3mbtgwnR9K3qJSXHj5TuD8iN",
  "key16": "5fjYjR4gJJUfCa8pjbD2xZ12MAFNtWVX5Ytd5QPjbGZSf3BhMgJDEFRuq59hMT44uQmY2e6CcfHqdpW7FwoijYPp",
  "key17": "KECHqx6RiQb4HUtmQGtgitNkGmWSsg7kXrGMiK1TNdh3Tb4cr398szRf6exsxtaQetpSYQGm8EZYELJfXUzC58T",
  "key18": "5mnYvutCmTNbFAV9jDNmDF2HmxQVeNM1J5YKkWVPpMgFRGGsvbGtXnH1gux7THFaqgcdPDwsYoAJGc3wTv7ApjZS",
  "key19": "52xF4N3fbDXANbMRrXeAD5nvS1Rc1pX5e9krycHTfjGLKYqZ4643AoUipFmDcFcL29xsv73cbPxQEEL4AhWaqz8X",
  "key20": "5avwaEPr4hWYfq6QmJCsQH8mTUGi3rrJ5tPjGN2Z8CmwSNYmzM9mEjdLGfGSBgGmRd6EFTqFqw2EZeYFG5HfLBaJ",
  "key21": "2uo1QRes4NdK63Rz8VzA1GU2Zws3VEjfrcXJFptNcpdomCPYo8NDbFX8fQPXcXFcxaX2Nn15WPxsbE3ZcTqtKopo",
  "key22": "Xfqiz2w1nRUzx7sZT5hsYi5xYwvHGH8ha5aYE3cbGv5DuZMAHg62XEBm2kRkzLdRzEA3vRqb7zS9d7HdySFGpms",
  "key23": "zK9MwASJzepvY85MPofWqrUgeCwgzBef7FW1tk7rZnUhs9bscRm9tchQsaATdqCHBcASPPCjAu23WN33j8Nfnyt",
  "key24": "4MefNdtnxEz8n1uTpnXBEEzCbT52sM6wroGWoyirRff4FQbSGCNcUnBqewWqv2V2Fz9ctZrLKRJTb74mhEFjhrzH",
  "key25": "va3APTZZiW7xHXWyT7RuTEnx7dFBwGgEsxD3TDykBB2rXwz5VCPr7D9YCHV787Qx3zYR3srn86VK8uq1kberhEZ",
  "key26": "AjRAHjHrPMCa5AwTRkYRUzrHCUBzdAb7x4NGNujKcULaofm681SQqMiQbQkPCcV4zETsdaKJNozHFC15CeJ4tyP",
  "key27": "2DJDuhzeCH6RN2LdSq5dfKnnqymbfdMr8a9srXkXK6CNTMUZJTjZ2HMoah6nfSPSjCVNFrVfbWsjyS9x9XbdnhHw",
  "key28": "4T3SmfV6xUppnKtJkTfbAtx4caGsqhz4cQFmD2uKyDbEDpm7Dr2sbfKtuzFydc7TTuWxmwy1k3CMXLxUQVTXmWN6",
  "key29": "65NUa6yhts6EZuU9VoJBhm4C4zujGZ7qnwiegCLtbapm69Fmns1XKXFzofh1iBTYw2yGxFb5AiE7diDFiXqSr8r9",
  "key30": "3QptxexFwSCptdKFks9HSTkzKyCeWriLUBw14A46oTzXQrBWozGjnz5AAouuXCdX9nA8XNTHK4W9b4N2YwR3a51h",
  "key31": "38mtMP14CQs1toSn3Bo42eJDtaDk7qqdzZ6AXseskTy2EPEPPvQXPG74t8Qx8Te1Jjq142D8QxaCHqkr9hxBc7Qw",
  "key32": "5UQ8xUvLdUYnUFF6mCf6BTxAxdDyvx9LzTB99JSbEVGMweD1s1EbusLhTCYyUAZghU3VT5PhoTGnQ2pHSdb3GY4p",
  "key33": "5UcaUUdLmDE8Hb5iKZ3FbztvCHZt4N1feZ4ANWLpTp2aTXzhwDWZjDroAKgbCkHXZe8pNhKk3LXjHJM5ETs8QFC5",
  "key34": "P2LDTNfcroiZG2gJCFxvHZ1w8n6MnQekrv2eMcbVbPHTry68KpZWDCKwimHNoseu5v9L6UQMq3Ph8MkQWm7WkhJ",
  "key35": "5sNTEXgTPUsaoUdQUGwtpLn4Hn4K85FhQfseddhoVfaVZe27Rpt3vt2HmMjDMi9mEN6eGVMyJhVaCy56M2xXjTZt"
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
