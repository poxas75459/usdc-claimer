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
    "2BcCj74v7S3he3nvPEART5L7MWFbD5YsUYkwxJ31ZNYx4nTLGhDbgxYWgEy4u7Wn9yqt6YvnhgTfL6YhfmWLuRWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AcRzss5B8iba3MLW1BzjYKGvAK9R3VZRQQCaiiBC1aZX8RHGKVHaATqvCUabgwpKgUPJj36ME4sMzieBQR4ZwFY",
  "key1": "3XvMmHr63oSPXfaMcUCm6KATKtEtjATixRKLXcqKKxk2zFQkvmZnvrjxYnzTFKPBmEoQHp6QZw8NUbNre3BHfRXU",
  "key2": "3PtiXdNMSNyrQo2emg5PA6L2hYXv9af2a9fyMSUDBkNKMq7gxB1q7tZteJsndVAkvX2rf3LhE8u1DnEMaYW5aHjz",
  "key3": "5SZZPMZf2yCiyWMqBKShod6acc2zoKTj12cz5YRGxdnoGGMDeiHE8th8rSvK1oK5Ng1VHY6hxrRUi8GGMZ8n3sgG",
  "key4": "57HLWr9MfPZzgU6fsX5Tj8QDcV4b55L7raKcoG8SegUMUvD6zCnFupEfxXx8Xp18RRAHeuaU6SwvcN8e7B8UDSPR",
  "key5": "4r9kCwkrcLd38AXEo4M89ZBtyLaz2wtb9RFz27kUmDoLNfmy5cGNs4qaRexmkFoW7uzKy4TUhfqBt6UNREnMpMsv",
  "key6": "3GXdVu9SDJmMN7JGLQ3LLBFWN1BhYrVuRTaNMD2eRcxur5LgpH7gPyGxzBwkqrFGWGRK9uEQH4XitSbvDx9pBRQM",
  "key7": "ceNPJeguZoTWo69iwymPyHH7sUQVQusJo4A6RmcVmxVMUJLTrVL2qv2woRAo7yZX9EEN18LbeMMWWACERvsHVZf",
  "key8": "3mdYNBW4sB7xQsrdufQadMhJAQ7aYd1hTRnvKqeMs6Uxi64eGMwj9QanoPC3AHF9s6j6Esr8siUWXgQgpoe727RE",
  "key9": "3jqv9KtkDNosM2t6BbJt1nKyAEq2sSZjgLUZBteSSme6rCddddCz7HRTMy23nL9NZdMjjYLTcgxHTpcvucnfJEXR",
  "key10": "5k3GX2w9kMH3SBrc7zvAkvjJgG9jBt8b8fNtocHvwSNDNuTLtEK94zYN7YEZZUsujbgSgqLzHNs49LJEFTDzv4yc",
  "key11": "MKHKXSW1suYaR2bhBob9XLnVFDKXnZapSoJPvrsfCrhUHsEBArUnG7bpf9C5dSY4AxM3R5V1wpS8vuPchadYEds",
  "key12": "3t8sVhbHdeuRWh9SvAb79tX2EhyAeM9btfoe6XR7Mfo2CDZ9S7XEo8y4xJMwynqumuX2LGFZexBxr773AjtVyYX7",
  "key13": "RbhquR8tPaR8G9VnQJ2pn6aSZdUNBT44HTdktPpWoSW9di28merNuyUzbmPjB6H9RKHCzHZ8Az1ysEMUZMWbecK",
  "key14": "2AnJcKRHA2SPSjGCMrNCucT9q72DSVHMPp7V1xWydEwKsHcTnKXy1iqNBMcGDnZ5Cam9zYct5DyaqUS6pp9Sey56",
  "key15": "4p6q69X3uwVZuYDrEKZNtAaFTvxir9Y73Hsvi5zWWA4MAexW3rDAMjW2sw5oo2HHHqynRgnb2RvZJmoLgNYbqaas",
  "key16": "1QZcGTqahoDZa5YR5Cgh6T4FhmFucng24izMJFQSKJJWQLGKLvbuymjEP4sbbehB8KY84AnGXaQ54mS39uUwSsC",
  "key17": "4uhSikAqyACJDZhS2RyBkf7dFqdmxektncgAfa8MxWY4yEZa9GP4Eqgc3DBVDezJ6wRoJZ7f1T7qBqw7rHcaNgDa",
  "key18": "5uQRMAAoJHq5g1roe2Py9NCJKxoJjtQQvtgdxGqjUJPDn7eqPczLcUbM74mjK2swzApZvzosWsvwuNe96J7N6Kt6",
  "key19": "42zvD1sN7pcS2HUpUuoDZYQdQHavfxa2ugfomVvPxjgghuTKLMuUDCsAJxuu4PRFpZnRBMyBVgoegpzSCifGnGaA",
  "key20": "4uYXbLq1KLouHgxoAi1mwgdquboPLdAj7X4QEd7TcLU1DKEAR8wu9WSpT7CdBE1YkAGCcpihmd5r2ugr5iv44Sgi",
  "key21": "3bq3vfBPv3rVy9MjNSqXgeMpw7JmzYFRZYnU7tuGN2szxdaV5F3AnhNSBjx33VQu5PyiDXeeLK6SV4wxLRvXmKR4",
  "key22": "5JAjCcgbjgmeacpdDFt1uyojxs3iFjc8KNbaF8WvSyictKL7P8MytyJUfrXv1aa1RKb8e5STLY5PQLZ3Js6AyMwP",
  "key23": "3JTmbUKfUKuyVNSfvYdq9CGBkYcLPweYkkRdNWpHYqFZv9VZ5W5P5n3ckDHK6X42E2e9dkShn6QQaSThzd3CE7EQ",
  "key24": "51g1ebxKvLFPHnzJQ7L7C3q9puLvN1Pfv5H6coobT2DLYjga8jwwBExLhXT6RC9XqupBDeNTJu7FEx4BQKd4Kns1",
  "key25": "4B7d2g8o3TJ5oAbmPw8iyU4tQvkSCh9DmTc9wE2uBnZ9aah74UqR2ffQRGGzyZ1ScZQBYDG4YjUimoMkFdSB2azm",
  "key26": "byrRfWsi8VPEmJX6cnfsQjyBBp1kwLe6kERu76hUQgmmmGzSTTHgPkJGM783RfsVTjMxpCErjR7gzY7sGbhQ4gs",
  "key27": "2Ay535zjLAtbLe3ExmTCMpWKbGW3ZSkx1GDPpmnvt5s8MZniixXDhzwCvyLvMu44FSWnhToUZE3pWRHdnCP5SEzY",
  "key28": "2jdvXzpmN3MFuQizfuiGX3MbZvbriMXXwpM6c6vMurYKB3FsKoS4BK9XNHJ1P7wWeTaunpszWRt5W7skxte8pCiD"
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
