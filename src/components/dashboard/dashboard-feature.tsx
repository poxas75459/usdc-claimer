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
    "2zLVxp9rimemFJxV8ttJqNBq3y3JfHvpqQCscYWGppYMeJaaPdN8GLW8Y3NZPLb67rt34FupNLsnQSs8pwxLHNmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XZVoafqVRyevLGdq8H8R2zypE938eX8NTf9KNgBLubwgrSHkbsCxPxNnFW6ZerAdZmPwFBTqpToct16WNe7Bc5E",
  "key1": "4yyiG9chBSncGJuNYjxWa4ecVwZFB8yVZ8j7mRmxAaoYnkPXnpNNMSPHT6k9c4C4jGidevDAfqgbTHZUeFnom22t",
  "key2": "jbt4ZutxY3KvEngndQL48sNrnmAvReZmWFHXvYaHeFmHjYJjBjXbLEt5EwCmBQtNG4k6ZarptCwNaRx1XQK9oQJ",
  "key3": "5McSLiUBZ7CstR3KC5U8vLvtxBWNdw7MQoLooZ5Nnid11S8zbJ7iL7oN9PTTJpYF1amajTbRkJ7AHxRogMYBvSEY",
  "key4": "tkgTMLD1GFynrqiDaYkuWu53NUdn11s5um4VAiRfxhJJHLkvNxUVztJH6tnK7KUHr8YwCegXo5zRgwT4kVkgQA1",
  "key5": "42nWgJW9vvdhEymi26q45aF8gEHdRv7ZX9DTxeMyouZArBWKPreJtDsTtQQFSNWAqQicUB4vkgXzh6qruUdsKvpQ",
  "key6": "2Atm73Bi9zDcZfbUz2LC7hcvyycRcJtNQ7RKrxFkFgR9QLQM3Bd6fhHinUjAdAQzJgH8FhyeXeS21JNVG5NtpGPF",
  "key7": "3CiJWci3V1eNC5qo73t6ir4NvgcbhPd8DMFiSTHS8kChpqNy5LqD8qH455dycgHiE2XJeLYtPvoRNUP5263UJcgw",
  "key8": "4hZ2Sw9zD2r6ht3ncBirws2kSXENWe26mX6BfbYNZht6hyhLRERHaRSZnYkhRKgG11Q98CCojJMZRUxuPhdUHa59",
  "key9": "4NmSja7irwFnVHaszpL25vHPxKm1o7uunm6vTyvULeP4wCgBHk9dGqvjVRD7DX82ihNxsamTN4QSGfmQfUwy1euf",
  "key10": "mfVV3AWuiHhrBPKwQffmEosbyWtRCX81pfstWmoTiDrZ1W46iEbYXBUwes3BNs21xqbQipPBNKHXRXgQVmqhfDG",
  "key11": "3fkksaDixQWP447PwjCZUZx12esK8BkCBVMAvHKPmjocAFcsqafY6PAWXYkXrUeNnALnjB7XDDygkx1h8ty4yqtw",
  "key12": "2vuvqQ2zScAvGNbqi3cbyStVTET1oBsUjZZWumhkTUET5HA6KAaZYjAsygH6LR9TDUr2eXewvdsKLzb9MAVuWZWi",
  "key13": "3kdxkzyS9EiEwjgfg8KNSxJTsxWTj6Jo6gDrZygNrqXuw4kx77uaozwbrZxKN7KfFEyV6HTdkGEQFTaWvHnWcPo1",
  "key14": "2vGWysNN6biv3x8nytQZFBmMhuz7zaWHDLJpsex8EvLwxrrneCwUgKM5Rcmz4ZqS33NahWBdTaf5f2uLUBs1J756",
  "key15": "jJwyk63JWqEqPRsL2uXomgeV3uHDmw4EYaJe4E7S37H5jqAtzitu5uaD1zHGdKmim5NuvQjvc57DpQvAqPGDeVj",
  "key16": "21rqjtM9gWiKQYzLRdAZVCtBuwAWLQu5ijRqiuc5SF3aX1njsxfA2e8MruZYCEkXdFvjwspg6Kdh9Xu184EHCEp7",
  "key17": "5GXsksLcqPn6Cd2VJJkP6HVCn1LjchZXkCahrZFwtVetWjFhqNc96yGHd3FtrWFiXKjSoKaGJChZ1dxQYWwHJ3Xm",
  "key18": "4hCGtPJp6Fq3bGmqFeXdq8a9seiBv62SfjHv2eRXgt5Zkt3KHPYMHSbnp5jMxwLoQxnF7mgmomJC4fXfmVBe7Lxo",
  "key19": "QsnS2AELhrJCQKDa5kPvEr6BREWvNmXmNNNgXU9fF68YkqhyASULkoS4N4gsym6yRf4btAbxEZo6jnRGtCyWSDw",
  "key20": "3fmXA6g4GYvR7zeAURcNbm1diYaBa51zh9Xe4MD6qE5qVZEzMPuLrxscNrs3jfmZhMmHRGEuqMRTTaq2cWyCwmx9",
  "key21": "5GjfCvPdyibBh86tb3FEUmGTPe8WKceiQQAzsCMbJLvchCvhQpwpPyBwWeeZAJ5bbmxmmCEajhbawWCRMCT6oXjB",
  "key22": "hYGouZ7kqU3T56EtbctaVfTbx2iacpDbcg9j7rAJr7jr2KsyjJ1uuprVnfnBYPc7mPj3rCWucT7AMZt4wzzWMdm",
  "key23": "61jUo8bji3vA1S51vWUYHfXXEHbcrGqPT8PwqCaRQUtSERFocoHhKi6bKRowHqkEAcptTFGAs4k7mVEnTnXkSf2j",
  "key24": "psWGNaUxv2hAdNnsX43XgumuUikskuWMA1eDvJJjDDNPMNZUHGjRAUn2gkh2rkNMp5LPax7WnYdPXcFJur1ar4t",
  "key25": "2L7yxiWLVybBE9d4y8DazWU5k2KLPQZct5cS4tCMQhDHN7soEzpJjhBaQh7CPPVBNYU9CaEQp9R3DhXTFmYKruZb",
  "key26": "oqLM6NBRSCWESRd1xJDH4VbxpELtm75GUrrFzVm6BDZPxdBitZP49xXZwqXYFSs9BjhQ7Y8a89z8CTh6jN5HaG4",
  "key27": "4CKKWPgogcGiCo1fjzzZ9esL4Q6m68bYuWsed7UhyQMwG1MwzBqeXJ1gmFVNHPeZT5k8YUtDUBbsAqPvifSSRUMn",
  "key28": "4jzrnpWmgN6VXEd3ykZVQ3qguQUHnbKGebKPZUxAcAwptWhR7daVyxhWEA8sJEa8w7eTcQ9EqnXUigFYzpWxFawm",
  "key29": "HjP75QdbpNJ42h27cxrP6fcjFHHNdN9gxa42v28vQG1sm5KEog6uV7VxAeXkZtkauhxVvLCnkyEznYfQ2THy5Wz"
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
