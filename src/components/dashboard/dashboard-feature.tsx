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
    "4JEFg6DQAAffNjg681HmcovuvjMsEA2P86r8RSySGEeYH9ocEvCkSmqGCAu9WGGptVBg4hARnk1G1YRcU8qqn5aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lmz64RutJmvvSB4MdY5sD1ebEwLwMzZjwjtstwPf1TVD4ofMpczufTUPzjpqpTaN7TnRbNLg6Y2GrvqG7XL97xN",
  "key1": "2f7fWL6NJ3uSREJ7xLztTdyANqeHFVB9kHtW5pfjaWEbRrzfXKSMx1EKKbjZegUei85WNDPaKMeuBCusKDVDQQjG",
  "key2": "3VtzzAVCFXDtABQcYTLd6dLjEJev2WFc1FnQXSNbD6XpHDoZdWk8FKnEFoGJ6uhg2seyrVW5q7RD7KPv5K5PZ4aJ",
  "key3": "2zbWf8R5eynhKyvuc5xwsrBKMPRFGjxspfPYzdXBeHf7bzLoieFPWF472ZmuJoRagibEDdkeM8e9iZ8fYoBH9g4H",
  "key4": "2FBD8SgCPS13S4C8uK6TRqTytSbzK3U3bfa48guL2BSddhcLhmmEvdVt7CUAGPYbFbSJtqr2jnxoZ4uBPFLwnUFA",
  "key5": "3ez4v1tf2Sr3697en2n5wAuL4e42Croavzo1pp5sL4czYHBLLUYGMR3nJ75638mxpzQ1sa7ihuFGVQeqpnr1zL1e",
  "key6": "52RbGPtu2JtWjwCMU2GPpWZxGSbs2M1wmgfZkcZ5YQH5RraTp2mNQn8wuHYmiG5ZKBgyS42iHqqsLpJeCY5AJXog",
  "key7": "3qeEaWPCdGyYFmNQaTSSc2JsGUKfVxSggMMJxNNbS2EGSgfXfaV7AXDcEua29HU2p2TiUCFp6wL4oVUVGr5UC6w3",
  "key8": "2Uv6JzHwycEnMppzm15beLdDyPrfYLqidpoRKHpXS1MUFpjGyTqHHQNEVktueDiLnK9rM3BBPbdRfREfN4TUY3sc",
  "key9": "5oc2NWTjBTquw3z7NqU8zcGyynNhMXzYrGp8qKQr9sdwNRdHTV2L9Sj51kgr4Tteizf1pjXE2B1fGTiMx98Ltg88",
  "key10": "564oU7dAxJQy1g5NFYD7y4MwLEQ6cAtXrsiy3C1VoeRCqb95sWChPpocbgMVnXcSi8kH8WqATvDRKLW8A1BzJjNY",
  "key11": "3cYE7NVQrqgBwJCLtTycnnjxNnhsB3axro3XQqSthwbrGmZ3fK6ijeXhFTWgYubTQwEBWPjBUfZCQHPQ3S6DdhBU",
  "key12": "qoFtdg74xWMVwCjZeVKsnCq7Qn9DnM4H4zoheu71iDTQvqyeNsJagZMLNnWuq8JstXH7Ck9MFnkok4HofxNjRwk",
  "key13": "5gTbvWkisvKYmHUVa3w4XQHhuQnjgnyDKz4g8Dg67KwWrSxapPje5kYrfbJuZhRDcXJYWDeFDSTU2qBf5iPk2N2s",
  "key14": "4NsZj2iunbVBxaXgiyiWtL9ooGeJVEsadtvvxziWoNaGm4apzKjUsh8yrhCZ4E5NCa31zsbvsRcFxcxBTUpZrf7K",
  "key15": "39KiDbv97S6xzw9prnRjQRr1nAvrSBYuERzoEddfidVJHksQ8r4npKcNJt7AGHDkhK9t2uMwEeahEUc5vZpwNSY1",
  "key16": "2gnyovEQMZHnfSehW1Ldm9AyA6VrVJjG4VA7KiVRH1iPaeDgZDQHoPLECPpueN4Da8fWBWeSuPw8mZrA6KvZPYfm",
  "key17": "5mqVHQTSVedVogRqj49KQLoCp6mLeRYMsMFbQ4ZxEfgPcbCEJY3KuKNeonoDRsWPKYjTNXU4FugnAJBDJtcF7wrp",
  "key18": "4N62JEanzvbCTc1VJkDNuj9cCp92vTcN2RqfrvQzfU9cTP2YLmLqYmUrm8nHc7CbCkzSptnNk1x1ZRV6UwcUT8qc",
  "key19": "2cp36YEA7ciLV6DwbA2f8oKuWbEL7XPKqqyM2RFXZxBSmjHfRaExcK2EWrF16uA5sHzdFxeiu8ax44dAS7FC4dxe",
  "key20": "59j95bYb77zatZouDvppgujx6Qvtw22u4GEVBH2Gr3e1vrqwhj61ovMtxk5cwRgyJhrBJu7HGNfFQXiJaDZKx6EK",
  "key21": "5qKYdeBL1uRorhKs4GReGSANf6ShEQcFSZRfKBASiDEvKLrF6NNgmXHjLsKL4RKtZPtQeLJspmeLpBTsfPb89bkj",
  "key22": "izWo6K1BPUcPVYEGVxMvp22iJXnoJ1gKyqFnRzhZYKs6U3rBaFBs3r4MgzNDZuaSKzY6bVyP16gDCZaZ7c7Kq3a",
  "key23": "5JqfZrYaWCbw87dRhYzyLy9mXorVqvxu2GaYzsCtqdbcF5YHu8tSLtSNS5zb5RJnUwZ9TgY2W99SXEz9NbFpZ9Pa",
  "key24": "yjgvADsfVN3LP6geWXGNJWqhZexczUsx9yqjkFCdSZM1hEFUnUTtsXMj96WWoGCY2je49WjZiUr8Kw1jj4HQbfr"
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
