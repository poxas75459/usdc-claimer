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
    "2kYr6VYNvfAthrpyFiyy7ZM9gSBR36pKru2v8eiKG7KRFAPHKCB52UHREaAB7zYEXThSQEhRGhidcYuXhGMjapXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CNNLvdqFCqz5PZ8NGWbBfcPB8FgeLFyjmFCcJyv9JyM5kWhnF6i4pTU6MEwigCbMyueY9ZdSPgW1wzPLeZwD8UU",
  "key1": "4iJJqKgpNBoT7WWzFYav3gwU9vNqNWexMzNE64KDR4UWBxNxHKvLXDGjx1XXWBpzwCUTfiNR6xFvFa6LY5zbehtP",
  "key2": "45EcRhwweADHLh2CTnoMAThUqeLNRAdB3qPKaPhpUfQWNBL8nuD3UnNTy6AZitybTB1SuzTyTyHVgXgJp8pGmn3W",
  "key3": "57u1LKtDUN3BTWH64iVq94GkC3XiuLNcpcu3tj7CAziPqdqJcxwyAiPC6D1o3A3UGuXNDR8ftyn1iHUeXkCUKABw",
  "key4": "28jsNDwpqi2B952iyyhy5jTzWQaQAK86bnumfDhKaJuCWchEopiYCvtyJ8vesXvgUccc9XNQ3fHrY5u8PqBKdrZ7",
  "key5": "3ZRH4gJk41B8XKpj6Gr9Fenx7GdgaPo39ogycjXn1guXHJwJnj9ERXccQ4xUJfRFxsrjpsWD7RN6sYKoW5iQdEct",
  "key6": "5hT6Wg7LuFqbLPWSoLRoMHSpZcs2y8H9m1qAxFA6HYiXJVqfeQYh9NDgCaHGVJQNA5vtmf5sMiiH4sqYRoj5XJNR",
  "key7": "4don6KxGWFS6ypatvp4FDosgRfiWED7ZKBHMFPWYPVVwzn6LvL6928rSMR698aj7eXQyk6gQU4Cm16hSyV2YFHbn",
  "key8": "3ECK5vhsnQwbSzr8bXiEvm8mV4ku24cqx5uF7ATxJVBBgPdJXiDZBkRVZMJKxAnsYvLk3zJcLDGQnjh9q9fWjKbj",
  "key9": "5ast2RpJQe3KytCQwZXAMfCNy4tAbPUGgeRYvk5BEBn17tghA4k7BmF9oj9qr1LY67nmkjxDURvbJzFEHVzAtGn5",
  "key10": "4486wxmJKytTk1iV8vC34W6uUhu3dRnptoKbpaW7YFM9LVmnrBsmJPuYVetMYjVEEefNRzCjcvSUbPFok4ajqbTs",
  "key11": "3dGswCa8aPZs12s8xhVw8uV3DxwwAMyDt66GX1sY3FwUF2c6aqxSRgiw1q1DHTEfQPd5wzUbVEwge4SJttid9svW",
  "key12": "2UGHvp5xbEWaAhpyrkhQEg7iazo9CbuCTReGjBYzh9CNEXvASoiva1sL9QuoD5TLDBURBB5VD9S4BEC1tLPR9UFX",
  "key13": "2YxbAvfzWhcm2dpARy72HG6ZA6JMTycqaiteeDfRxsGft4hxhf3ascJKPPNBpiN18y3XrTRqNcS1qHCSAepwvrJc",
  "key14": "2JUKFXm4Qjx8N5CaR7tViuKuvcnE1CdKqvihiRkYrp8PEc2sDgKrGbNKxtV1a9Ve8DbwChrQJGFpk95CB5jxqbBQ",
  "key15": "66fEQKYfTAcdN3z9QHe35AWSppFUWsm9iDGV8z9Hv7x6y5BCAvAsPswvrc2jvbykVFxbt4VeLY5aMZix9enU99W8",
  "key16": "4quTwhXWRck7A5fJmUpMqtVQDzyQCw3x4Rj9kyxg2JQ5oTxZLz81WmE995oWtjDvpqFFi4DsszQXWsXLgAEFWa5B",
  "key17": "5kT7HHMttcQpq6yf12XRdBq1pnWXC1Ne6hxYZftBiPAVMdxbCiV62Btg4GBSjchsBsMkfcSMHXn34zgFwHjtfgnd",
  "key18": "32VYgHL4tmDshSmC4cJpoxnG1hEmYPKzsRaW8zrfpXq9fV9ujjLKfDzmviamidxNDXs8sLr7hzWiqJSWmc3QS2DX",
  "key19": "2bmegH3L3A666cih2DYXHEbvWF7TFCCJ7dgua4nKznWaEVBoGPvJXTsd5iRqQGVdaHvRbfHHCzkMQ28THVHhvP1L",
  "key20": "5tyUUvxixu5Y78yMSB8yWXLLHAgcWz41ixSkxjBXtVT9YhUgkcU2u9JcnmhTrjjLJw96yKZ9EUtuUzGbQzrYJ22T",
  "key21": "391w32ZRhouXzXXSjEsC8btypmiPwHiaAzXmZLLDsYGLS8NWwCyBZYDU8tWwp4gfBWpa78bH7hrfP42Wi5X8MMqN",
  "key22": "4SoXVmZs3kVZmjFwuigaHFCBC1MoFbfUvMDmqtsrFxP15EDBV9cz43i1S4txrQeCWgcrMiAgWQGvkaHh5F8dz8pK",
  "key23": "3b8JCTpCMEsHas1NRXyrtkMTeVjAYxPuCpBBiXN9js7dEFE8LFLBjHxE5Ctdg6yWSNHFio4gwGDKYJJGvAUT76BJ",
  "key24": "3bmYotjw4dHToU78DCV4bFNbeeKuRW7KMqru8yXWmYRidz5WaRygnG3D1TnwxyvpKzUERUh8YBJfNTHokyDwen2R",
  "key25": "4P7yxrvGjNxAkAoktVwY3eKpUepJTnUqNLD65bcwBEXCJ9Hy4VSCBpDMu8szdgmVbTsgwh6iJcp2jmysJxokG4wi",
  "key26": "4Mtqsw9XiLfWcpg1ocUX78hfmMJ2wXyV2rncCJQWMgbmofLTLZ7skJUXjsXNDZqgPGowKvpc2eAbqbPCMsaiE35W",
  "key27": "SMESUWoRf4Fdhe6HcyU3LUJR8UgZVJdSgPiHBEuwri8jH7wWY4s2uVUAUzWxJ7t6US3tAHsaJTj7AiRfxCfYnbv"
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
