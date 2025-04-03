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
    "4KDzCrpBYpcoU5ruqEEUf9xYWbWzMudeUAqMjxrBRD1jcoU8ekQfReH25e7ttbDvssbj38hRsARrRAYPxEEyWrum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kLxiNoqpSYzddL4BXYSXYnj1TmiHJhqVVbrMMFpuEGLpbVe1oWZ77AiqgfawVqyVmEZFAoKoQdf6wWcWEHhCbQ4",
  "key1": "4zVD5tjWyRx85roEpaYzbYFBWkukFwpSHszSb53tyJ21WUDPwznoV41AGKP1M1MVwnfw1svTqrrzya1bCCLeyr41",
  "key2": "9ha9VJ4uhuuWTjod942sq9QpMfzUJt6Py16X1pRxNiKa7LshNhBbssWikw6ZaRjH75UqRnxHYQTg9TCYAdfW44u",
  "key3": "2Myo2jeqfyEXzp1XoxcHW6aDWj8qNBmk7mkNFbndb3eyJAJsRjeHkoQdp6pMnzmtXxS99KfJFDYXaTFjA8YsMqwx",
  "key4": "2cSRVMofDrJoSXrcMcDGzLtgRzrmz2Rx1u2g5Z5d7mwo21A6uKKrHJDW3VnG38S4BGzirP3uKwn7MRqUj5v9zVNc",
  "key5": "ST1KWFjQ43AVVfyxvm6eDf5JaXSrY5z6E2fnoyWJHzbrngF8UAtPEJWmDrZByy7r5FQvEVKN1V43qynCPojCQX8",
  "key6": "3SAJJ15YWjibrkDSP9hHM4Dtj4CfnNHYb1M86fn5jkZvNBCrFvwozADQFE6fhB6GGFjtiug4nBpYZvkCRAxnXupw",
  "key7": "2THqi9zYBh9t7Xoh4ezqYjbsD3PADMZhspy4HCN8jFfTmfxTq5rF2Rb9oHfV9gdn9rQHbE6hEnqRhiET6vtMLmtJ",
  "key8": "4UnHTMgQE5tQgpQ2rRDxWcZZ3pmwKqBHDAczTYuUvjj3tg9PcCudsw7AZghN15dvmLoi2Y2FyUkRUD3VGLtEGGGn",
  "key9": "2ZGbpZgZtDrJxqgxLca9cs5KT9mNnFFDAug3WP8cgY4HsdJwGJW8X4kTM5NH7tiaoRRhaTFYKBTGjCATUzbEMYDD",
  "key10": "Wo3Mym1gDVzBc7a7FBb7UdWD6VWRz3jsjBB1niN2mehPcegnAtFyTJ4Z4vFowhHBLrLfz7xCSqrib2eqf53NUhR",
  "key11": "42dDafdhr25XLN3XDu4fSq6T4rSqFwRSEmHHyrcXBA87Dm86xB2hXLrtwcux8WKs1RZkPaCA6fV4jKHcKjGCmMRp",
  "key12": "4mFWr4PAvNKqiSz8EQsmQqQHXxx3ECreytTpwB2DFztZD5Mc1bprn8xKixEPsrbzmWqDg6W34gRnQFDeRvXK79CL",
  "key13": "457YmQfwJMaXH3ZuNhVjmEFrKMs7x7gNznQG7npbJEB2zgf9FgjXhhzLZp5Vqaz5kBm6kYtJsCK4hsfRbAYhP4tv",
  "key14": "vCGAvraX1gNmnDinmKmuUEa9PLeHXNthZomDDz1GimX739jj4v7qPoYDugZxXYdPEqHS8fh375nXMevFkZ7k1qc",
  "key15": "bNu8izAh8t7erAm7EwogpudqsioMgXFNHDJDqwKzxCFHyMrjCnWV4qBQGEqNXJV1ondaxHYM8JTKCsmi5cCS3Jp",
  "key16": "468vQwSWRQF2vfUxaspHdRNephaw4nTuxwydVpetrKFDNMhhC2n4C8ttdxV6mjwYyN4oSVd1F8dR4Jvhgkso8w99",
  "key17": "5HhLYRkdwA3wLPrytqEo4N2vPRN4tjaoh1xjQRG6pkN5AqEyMaMydW8CAB1MoCbjBLrymeEAXA9Z2RDY6brBf9r",
  "key18": "2ifKFJ6HCNGyTFpXkYDhW8eMQtrVHmugrNGgJZ8BRxVD7gM4DYaBnZAbqGo3TdcQETaVTmByTXAWSs97BHkaS7Y7",
  "key19": "3KTWumBW5ycPngKFWo5q3fUgxWs9rAf9JEbAGxBawfAHSiv7Cr9VDzppfPNiC8moQ1d5YWATzGKgc8FwzibL26Pr",
  "key20": "2QLGK65dhQHqf6pYyLJpwPSnykU3E4NGkxCTmfLJsexWkumgDodb7GwWEy5eb3jJysXYrQtMs1p3bRE9fXgBf7Wx",
  "key21": "XiFQodeu731W5UBmDZSrQRzNmnwtrZk9LMMPwAGnoSvqAPVwdWLuin8yVAKpfheTjVWsNJprUbBKVDceSpfSXg6",
  "key22": "4PYuxhhUt1TNE91PPQHR799QJU8XZGbCKMnAmd4zM5wgZ2ruMrSAvjXo2UkqV47LNV33EFhe9jmp5SYpmBorLGSk",
  "key23": "5WkcHw966cLUzEJ3BzaJ8cbB7AD1eqwwZf716FCnm37iok6KBZrZZPHwu8T4DPT56HLjKyccWfqWjniyFsKj8ovs",
  "key24": "2jsNTYf82xmQpECu2DnMhT2WRrcUjzMFMSqqdwUXBHdJiiUXetriVN8xbZkggNjbb1MBosrMnMtjZt6WCAY1FvFW",
  "key25": "38dDJgBVZSwPEPothMmMWY9UGf6zTmrhj3rY7gTuj6LeK2Zg9rKrPEh7nDU6bsUn44Ja8ESj3qwDF1CmuEh8wSVh",
  "key26": "3H9qk4ta4uWTqVbiHQwkLQQeDNbpWRPbERy937KFzSMTgzV9E4b2YptHGrN8bsC1DPjivCs7jaSCyPw3tKgUBYcZ",
  "key27": "2KCHkZVpNDK4SKySxqyZbpoU71eXdFDrx5H3h6zTvcpDrfbRDJDZbxu1xtHvnhhjfSowia8S2EPceAY3Xi7LVrrH",
  "key28": "9NqiMAAx6h9U3SKSqHJSsnXbECAgYr4ZGFPjbwFi77P6SUcHNNfTXYYrxYoGMEc7kys4MUqEs59BTtakro9vgkw",
  "key29": "4TYrexgXUM7YZezW1nMFLP8DBHyPPCpk6mULT96wsaYd1Ca9Y2etVQbLejFUfHvu8hj8TvFg2txsyLNCQ7mKs9iK",
  "key30": "5tqkZwU1KJ7BEDhFfVdT1Kuy7zGVjTvCJGeEAzrq2R4BBrnizM7Jdhvym7AHAKr3L3GJ7n94V53Cn8TmeosC4FXN",
  "key31": "5tgWrKzcR1Pgk6zWjfLyLLGuwinZibnhs1h33sCMirZd42UY7P8LKjfBoCNjMWLDYnZznXAimtzoz5mivW9b1Tk4",
  "key32": "4tW4BbiXG6eQ75qie9ousUHbRXgB1MTTcznhqtgfCuDFsa29fdkWhM2qGvkFFtSqxTwUdVFD465EMAjAxsxP52BP",
  "key33": "2fBkMAbJ6TRY95M4QH1fkqAw44PVkUGCHDj7aWfnEg4LQofnFit5uaba6vnRGJNMf68YuLE88hf3aQwf2wFGhw2u",
  "key34": "Ku8zAU7RB7rwtYYBoNR5LXy1SyMy96eKrMdM4cGcKJjfp4E4i5LkeDXugGaZSrc2oeLuXkEpMkM1qvgcoeWkzuU"
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
