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
    "2pnA9Lnk3tkjhMWmUNau9MF6JFy3D7DuHL188f46BFRVciWyYX1wsVBpda5C59JuskakX25qaEwd5BzBtJ4K8DWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QkwJAQ484VCud7FYSYG2ZhEsAwh6GykxeQQFA7qdcf4tWV4SCGPY3c3w7JS4GEodhx2mRQPzrHzEZ9CYWS4ENCj",
  "key1": "42MSU2tBpdb86eq7fmzw3WTynbaNVLxKPjUB2rNHdsKpX8Uzdp6NPZdtrcktNoEV733XetSgXDKAEMT9oE7so6P4",
  "key2": "33CUF5c4gPwBp2h5AsBAfzS52quYctwAkL2934KJjMS7nTaGEhV6RAHX87iro9fH28pKnF1WuaNGphKr4KBbhoCV",
  "key3": "2c1qK3pp5CMbtTRM55eTKY4NZb7aPEuAQJYSUSbwRzC1jrxu5WxSXeWDQYZ8bkSHDTsxfw3uQn5US5FVP8HAKkFY",
  "key4": "2QiyYDtQrYVVc58bMZnGRykzhtGH2VaZWzdmdGum2bvRbzXzc4CXC9GzijWYKCJZv4Rjv9hFN87iYtgN4BguRADQ",
  "key5": "2f5sccCrrnYMmEuMQoETkmpeu6BexpjT3qCdycPcSdY9BxpcXTQZm1mnph1VVUa8WSTw8dVaKfxNpdS84xqpX31y",
  "key6": "3mkS2MYhobirZmnMpjUgjkNGEEy6WaboFWK2EZizfWLiqFj7MxYsUyzNiuMw8vr3TMHUK4kHSzcvwYHMVeyEmZi1",
  "key7": "gGYTeJLWiherjuQcXfLAhRB75Ctu5XGG4LTpArFKohCqqy6VW3x4gdL7dFnCsgS6ssYTi8cxXbysn2bwQsGinKh",
  "key8": "jsmZ1rvCoCHrZ9DuhLUFVAC1ib1PMowhySkZwPjsSBNZjyqktSi7e1TFPULSd2XURDHVbWKYyVg16kC2HAsEqJU",
  "key9": "5irRrcjzNXoAvwxZ3TDjV7fMduz48mnHtf7VEH1V2UF5QPMTLyq2fdBE81g3vrL5cUXEBZ1NgaBDJGxCCJbzBTBZ",
  "key10": "43kcZZykhBK5xMnF53mNi1zaznUNGTZ8P9Ty3oKn38rh4AiWvUtozPRcPo4DhZmxRrZ2D5o11pNBpGtcLPfLvEMo",
  "key11": "3eXHcMAQC2gG5TZeo58vaCLiLBvdpdfKPTpowtgTRGZeyzwBYiZHnCzhJDJAERSFmQQSUZPhkikK8xQ48J1NhqFX",
  "key12": "mGtJvh7FyShT2Roey3uFeNTH1innatMP6bdKvYEtGdeaGTEa3YdRGx5ybpkVx9JzwLr6EkbwCao7yBeDW3SzA3x",
  "key13": "ojLhfXMmqb4A1TBgaQeHG6HzC9bfC8YdtuMdz3gsxVps4PKMWf5dmSKBLGZ17tcYHAz3UhjMbboqPVvtqqcDAP3",
  "key14": "4gPXfj1B8NvgAx4XrySNodqFdJsxmJonk3q7JGz2rcop5T5VduJ1QKSMfEiVvu7P6A6JTA6iE5xSbLWdJNwYtToL",
  "key15": "3AMWSp6y4q7ktC4tqqEPFVecKHryagU6YN8sioKPgqavLFZKhtX1ws2BJrnq1it9LYFymMrAZk13UcLHqPcrHF3b",
  "key16": "44cHP5mv1qLLJzKN6YNM725za4TbKCCEg8cJ9RkbhhtkwFmA1PpL4uPFCJsxwHgQgyQiShb6g1dehwAjRNkrTYsN",
  "key17": "2dU7hVY2ob45sFERALrZYnMqy5nxxbhqHBhmYyWCciufLdWsD5ZdCNT6BxBHtiTHzRNuUFvt56cVhQcbqs7Dm3uU",
  "key18": "41awCEAFww6WczoyhxfraZ5SRyeCbRuBC23WFSJ29iKcWXRqywivxP4ykcyuK1J5NEF2CsmgRNNojwyy6LUdr2UG",
  "key19": "W85tCtd4YgEWjvKjY6edcSQ12Rw7ubqJUTVHGpkpYvmbD8w6UNWa3XGWny1CXydx3vvMMpfTEbVFPQ6ppQpTMDR",
  "key20": "4LNN6X94Yt8C1xhNmUgwxgNFu42YB7Uaq1DaLjHAd75hiTdAtW9FxBfVUDqytzb3ANbKUtgBLshhFSxBqNwKRrYo",
  "key21": "2NNYn3s7w925ajFQ9ZmwPuXAQsousfnjAjEsryTsAwZWm56EqQ6NBoXce66nLyjWCymENoAMFY5YJzXnjjrNM46q",
  "key22": "4HgGCeP5HgyceZSgUbDgdUfejayDr7FJg6bQTYn4d7wdgYkyTzxfxvtnXqirSQh9ZZMR2wQe4FgJypZTNyh7KDQW",
  "key23": "23Gx98Dc9b6PFGPEZSWmVZrAbkRarQfCFoqK6Ukkz78mmzMQMScRtiU1ggLeoHi7AaQnjvWFfYsbGU1mymMeVaiu",
  "key24": "23U4btLhoZgsZo7MjGSZNGJyMGYELMMs9Mw9cuoQf1Cn5MUhFQfXWj4fubbjV9HBcCYzjZQA2GbbpJmCiya5UFtY",
  "key25": "25HUWjjSCtMBA7RSqRA4rrFCUGmuUZgx3JNhUM1bz5gXYUPpmf3ZSS3oYm1C75Jb7Pf5CLeU7EPXmNZPdyKhEBgq",
  "key26": "48WQpPahyRwhapLJ8jwX8ZgzpHtMbzudggNugv8dbdiYw4vbWuEZW8NMNUX86yu61Y6UayzSokrPpf4aQdz2PJdf",
  "key27": "4XYS7c1Fk6rC57j5VjDfJpr6KyMd6XHE6T9D4gKuXw9RWePzKMab44QBXxgREAwHta8UQ89UD8SZr4zrWQpXRMZ6",
  "key28": "4mfEm5cygfLpG8RUim5xQeDD8pVkNeE4JrmyBtoxNJHR2eFj8axsE5hvorPo2s4BXzMZw2EARbK2A8TPXzJtnJEg",
  "key29": "AzcVJhsDzTtV6MBCVsWxYAUVfzJWtXyyXe6vfcRRVyuYvH6dR8mxoupXRpHJdZyDJBJBcvR1WiJnSy97yecQUvS",
  "key30": "3iFEuzyvinrqEsw4t29cH1xPnduv7M9LAXV89cXBtgU5DqMbuCHcD66jJ2Vz5a9yZUYijrJSBHNcNPpwkYjZZFKd",
  "key31": "3NMadHqKEUVG7pgnUnpi57Kg4rEdnpYaDa6puHT4fuZVNZjpoR4Xn5sqU38t2XqcYHsPxXBMNWLZegKStcCLKGux"
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
