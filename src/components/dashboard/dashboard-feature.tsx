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
    "416Ueo6RRGRz6UYJWjT684K8hDoa42rXbBJqTqaZ378edYyb4UYorybXpRa2U4JCoBo9QN8D1JXLrWk62MBWeYti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7HSGCY6gXdyRHPrNE53yH4qHPrNqprV776RTDLfUfGJ5GsQVVsuzDo3meHr4J7DWmjxWbUWJPSbjWbkLjKMKSYd",
  "key1": "oYf5abiLJyNj7rgVTLCTC9FYH7mLqG4qcvKvHd8DKBtZgTQR1YZ9qts8MXzDg4DxrqBZbzgJtjyi5Y4W1ntCNCy",
  "key2": "Acaop1MnQcrdajMswLs7gR1f3CLxBvc1XKKqswENrUDpLWa46dYeLdLCz223KKjovEs1mZ29c3RajLrqUvL9C3U",
  "key3": "4GatSM89bgQS9ChUvSnLzx2fJwHJ4iXtwGLaxHYoVGeMQFg4LWrbjwcrTDzP1HThhCv8Vtyqdxy8nh1KD3KwCY4u",
  "key4": "3WWt4TmXDP6fgCWUwzgKfbad4p4g9NV2gnpYPRDLadL3Vx46MzdQoVvRJHMPUe9c7LSkuK6c2YDVa4SUqysVTLS2",
  "key5": "3GNiYW1kvZXhtL7iv7tyC1axnA6iNVYuiaMrMm5GR2ziyAqfBeCdqbtzhn8PeY8wzh28Ctd8D8eCpJAjbgzvgXRy",
  "key6": "HsQkSFDLY4E2f2ePLnJi6T5CpHYw798jGnHsDWaMpVcACVUBeLGz14GSpxswsEgtPUTYL7D1z5wwfjE8hdEywVH",
  "key7": "53hA11Hs3TnmvwcmQT4QC6dawWfhij6Jv6hxa3h5DFwB6ijUgHxfi1vbKg3x2XDerbSrDqRdu3CcCuKyhMDqXbZS",
  "key8": "2L1VHw8Lkt4QJxDJzNoByuhGde52For8B4KYFFE2eK2w8LefNXJ1rPiYc9qpJVyZbAB8dQZm5MDrooKDK2mYfdWn",
  "key9": "3DxJJ2GxBg4KKPEzEQQgecSdSmmUKoG1XUh9hgW48rUYCsjbZtUSZsYzKrt6PoyQsgg45x39e9rUGJsd3zUxbLx5",
  "key10": "vjERkCjC4i5j5oGfDv7hgVY4tgFPp97MQHjU7qPMb4ZGWP7QNL6e7C5MENLAzRqBt6U2Qd6MhiaNaEmz6KFskxr",
  "key11": "Ysx4in7X3ve8WQMQ7aH7ti7qhouLF8a9ySbnQJ2tb2K2EKeit5CWLaMeqmNWrZWbdrn29B1fn2YeipjWkdtamKL",
  "key12": "5fRa9mvS8Priq12iZiz5chEJC7iNNiJH2zxxW4oLNxeqo2JfQgYGAtqsESJxPCFLmPmsx67Qb3jC6fJKY8ia7E7x",
  "key13": "5qWCwDaBfKS9F7ECGtgekrwtaf9FRwyiZar3PLZLMTkrbWi7NTDSu32n2gKZ8KcZ4H4RhWrg3Ko1XWJ2ym4UKp5i",
  "key14": "4yFAgsfkAJQZ5yoJj3XqLNcjoRre4HVy46YnU9HN5LXngVCMubwVkWCwh8zePbEaqV2yS1nYoMbxVmJZVD2vbukS",
  "key15": "fi3R5bTSZcwo1ZbDwDnhLcNZH3mew26k73Gj1SoXWR59GBrWbobnpmeiZv4oHb6t2rxsRzWPrdP8749uKuxAAAj",
  "key16": "4q4EKniZMosZGds7qYkXvK5tLKacV2NtfanruKcrsSgjJUMLHT5WF8woQSYxUanCz3cFMhwS8rujof5SN4xygTNW",
  "key17": "RA2eQ8PTRn7ojPYzy4N4bpL38CJVktu4aNVqUb4qypaJxoR3rPU4sBq1nuBZjX5jpH7qVi6LBrcTtNGqoZp4Uq7",
  "key18": "2GPWZGr93yDdAJWEwD6LKivCzgEPL5E52QPCcVmR3Kzy4AJb7rFAJbcuDkEwteNb4HVC3Gr14ADjKyJ7Xc8qHmb7",
  "key19": "253N2JJnFtTTVKruaByg52AgCY5yctbPutzCXUJu14UXqeTxJSnwG1yypvrJu9TEt53VBBntMXNYXjWU4QCPJVRz",
  "key20": "BS6BkqmeeR8fKhePEPxz3CSD7NCdS22d9wmAYgF2Fp46HqdW7dT4ti86rrPYUSCVpDtYtTHSEuFAQBQ6Kz4TzjG",
  "key21": "aZ8Ha9Kbq18GeAvGNekKBTyswUpyV5MnW1jhwD9CcNxVgc51P1ZrNDZ98q6MkQtL8SaHmswsw4nPExwCmHf8Hxc",
  "key22": "izPSDr7G2WAftAG2p8xafKfw9aXfxE7DcXTDieAyAvYrpZNyjnf8xPJ6QChSmC477y4nxTgJKXzCSMk3x6AHvw2",
  "key23": "hvRN1ExMFTPydCYMRbazFhNrYAdk31RLNaaXRJahpimEjBbsEZ7CuEWHK8tVrgWcEDWLaHAmRPAiis6juWuoFHs",
  "key24": "3QoqkyPbMb24MHXgPjcMzQGL4zpQvsD8hsnCAn2AGWiiVThVqTFvX9Mb2jptTiRjo9MfTwSnMqwLZvTpSgQmJmce",
  "key25": "2bdrXCEzVAu35JxjFZRFGFJyuUiLLacwKnyjQC819Z4mBpDxkHuBKL9L3ck1QwEnoUmToQv4GFFsAPs7ng7NQFSM",
  "key26": "2joo1JmcqV6gfuFcuwBBrtiv4q1qR4RHpaULNaiRyUAXF4b6uLU5NgiJVhcD9kmaaYrr9YSykVVfY4AfULCMRcQS",
  "key27": "3eYDXTqZnox657udoj3uLJUP1KtoLYs4JA26xbbcDHHcNsDjhJRLabeUNxXS5xvXKL1hXWKzzccvVcDc4MCTowo4"
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
