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
    "zL75brFMEcMpoBXgXgdrunHXPBuEL8mLrmSEhDVrZCcNc7BCA2zJnvNTz8GuBaPenwwCVfnK9iLMPfFzdEf3rx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6j5TxC3e8cdiyneGznRnAY6KBTKxCiQAMZ6q3uBtbWuU1Vn4Q6BqEbYVe37TYGBmX68VT7yyZ1ttzDkT6w23MFY",
  "key1": "5sH848TyKdDY5JXpu9waqc1ym57tR9gKuAmxsU9auLTadvw1UQBgJaZdrPSxpausVbgp7KsszPgooFvpNEQQQxSt",
  "key2": "4EA4KR9Us9gEvYYD1Bue9ZQ8bQc1aVCjfVwnqL87apmPytPB1FQf9SFn5knyRF8krVjZVH3CKPfLQFe2d5TLExJ7",
  "key3": "5PPSV7QPZNXudknXXEnQcLzKHAQokzJd4bv6d82pKbFJi1nEDnu7H4T6cqyDMrrEuJt6f4ANLShZJkZZ28LdZ44n",
  "key4": "4YNKTv6gckxaZGembtFbuRgw2DbSCvCpJGTgzS1bvNa1D28ZkZAVgTvMvPoXyfwWRNgMt4rwDRRP13yrhXzqF885",
  "key5": "2qeWVKKf2oWMgigZecEfo1GqFN9H8aLZxjxP5EnH4Wz6XMkQGsDRd8RtsC61MKhc25YcLTXgbCZStEmHHKpM2JM8",
  "key6": "EJs88WKx1SNDHUJwmuwpxsEjPaDZnvRUngGEXFLWQBKDWW9CbmyW4WaHERCmTU5HXBVCANrxLiHc8dkD7TBf1PB",
  "key7": "4K66iiwQmmptqqSZYRFE8g2rEJZuSc8ffDNDyWcfhYbNTmL287UuTuMCWawJjHBohxjmB3Rt2ZKzFugpJXzmRL6s",
  "key8": "4Jh7VGE4NSytSZ9tT9ecbsVnhxWitSTBP7dQ5hrqW2DoBLHzmm4cE5kprsZnms3dy8toZKdQUDBjtkHcz3dHdWpy",
  "key9": "5JzZmh23L6myyXaStUoETCH5H9zSkYp2vCEuBUc9s6F1MitXMzVAne3PgYFJ4VfVM3qprUbPHG3ExKZjkheU3XmA",
  "key10": "EnnA7WRahrCEbi3zTZgUNGu32tFRxKDRXpLkbgX8v9DVcMXsScNmEc4GuHMZF2wGanyRNUH8XeEn9h2QA6b7CZH",
  "key11": "5vALmMjjgUW3BdaJwr3iDGpkQKYEujahx39Tzb7frfMagCiHRXQFnkSknGuM82sVJH8oaPYdUZXjnn1hLLLYnCh5",
  "key12": "Q8CxSwTY3j3g7Bn8BeVihnSvFt7JbwSG6fkb37MmR8heHBqXLgtPZvTixkUwt5WyoGYzbdzyfQKvEtrgJGJoMpY",
  "key13": "3j4RewCT3x5Syy8hvSnEa8cVnFM1gS5u2Qq5cXEo3oUd7omZQhvSNN8HTiYsgR5kRHP4NcV3f8gxz466q6RknECD",
  "key14": "3vjEjxqp5EC6vYBG62CHzcxHwE7QwEDUsesHwum8Tz8o63YW3V1hGjsL7N7MrE13u73BedBuiPRuijBapNckh1wM",
  "key15": "5V7Xyu9Vy4bXztf1UV6nAW39eNDVmHakpffjPCJ8beJgiG3qCLHGsptXHjV33g2EFp9yDiKoiwgPQEX6jLJW7pKw",
  "key16": "36aNw8FKiRQGmnTTaNHYKx2cZTYdHSQcUJHGyMayEr3ccpvKXHDpFPvmDjJ1rUfZ7mGKFYpjj58atafHi4619FRY",
  "key17": "qi8HLXcACMySHJMqRuSrpEsrZEu1JN7pZBsXjqKYuiYTESLkfQpQh8e1U9VFmwpWJZmELNFysMS82dF1d6sPYWs",
  "key18": "5gnDvZpSR741jYwriB4EqPEK4J61UxjBdn6CJ3j15cQeyRUCvRDphwbv3cZXDxnbwDnEiBctSTLt5sLTDVVXCSQs",
  "key19": "65sAwkek8bsDhMWfXk5drs6T9om3uNAYeYhYf1tszaEhkPvKCxiAdTTNF1wi4aLADEKNSvB8QoMZQe6CW4SKArmu",
  "key20": "5k4YbGrZsS1edU6u9nxWe9djigVV1tHHn7LUsbTq3J7menpJa4CdTZ7wQZhdU26A5CVcZ64FU5jtouZAG7Zmc9cM",
  "key21": "8Xn97z6Doe3XNdU5c1VH6eGTkEKv3bUYsfu7ZSW29VjDYgTB3yzjxgbrSYDLvk9Mv7g67Z8ZsWsJpUR8GK9hBTh",
  "key22": "2BkN9HgcssvvK1hMjygvfY5NfYnx5FLBDvegwxSH5b4XZzt9GKGSDBgbntGv8pGDNpzJAUzhRE7YJDoFfHRVBVAK",
  "key23": "3mXtQFqSqscaTPu6i6wC2irCFq3WimjKfPZM43vqeQ6B74LQMMGCghxCa36zHwcrnP3jvgLq58FUc3cboiZKJ9Gi",
  "key24": "3G2vGLCWoMp6T3Yv3NCayt3TkFw8hoqtXw17JbhQ5otiRtKiBxDGwvtVtdST6gGen8itJxkCTe7CS6K2cFQunDRf",
  "key25": "5ZZthsU1s45GS6z8XaoKgm1ejDHPBEHarTdPrJPQnAzGdueJ92dZNQPKASkS84bxS93mgmoLSDAciTwwmwThG4mp",
  "key26": "5QmrpndgT3Watx8Nykyx8PzxNapZs36a2kkmp8mTZLJXxmDYT5Nqbd1ewfHeUJN3dJByGWpB8VBvsjHejWnejxio",
  "key27": "UTgkNaTceucHgyBasm7XMvmKrMAYzFQuSXuvEatLWP2N5qoEUbitVsF2VZRjbSoamyKecf9ts7JeiCPD8NLFXpC",
  "key28": "fcxYzbpTLTtYBZhbFySr9o5eLXJUcf9fyN1PG79SRx8bnfcnF8nJAC2wMnq6ZcX3pciTYRSB93aGKjJJBd62UJ3",
  "key29": "5JE8wzpJhFdyPMaNsgUWUaFo8aFN3Ez5cB8RQpYJKbck63eCSFVgbN8HtS2AWqg8Z9vPkRk7JS5UWhMgaiRPrDZd",
  "key30": "5LGZGzozPgQeVGfXoNEqGzqFan6AgA9BksR7dzKKRew8pTE3mNTZMjNCYDLbxpBtxp8bCMd76WVwWaPYMfNW9iCF",
  "key31": "Ku8Qwuq634epYk92SbBgRp2YaUD9LSMdq3VPHJnRHi3uUXFgYWpmBygFNsYgjfYGjYbwmPW9dfrzSLM8SmZqswt",
  "key32": "d2ph6x3K59ZKiKLXMD9bdVpdHg5rtz5C5qvJgtTX53zJBWubt3JdEBABFNQ69SFb8ZJuw7LfWggLTCVhacewowZ"
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
