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
    "3BzKeEpJE6erjTAani9d1veSwaHAMyD23gUXCfoKpMDVqrs6Ktr5E6hnHHwEpcn3h3ugn8y674565e7LSN9tuAc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EdY7t9uEzStXw6SPpPZxMH1Tg6Sq6ZApqERHsQ4xjCLRcFwUc3pGXPo7Da4CT4vYUGX2B29AK1NjYcAUw19wjZd",
  "key1": "gT6Nm7zTz7R9iCwdCKXVaoMMLE41VMyXVrMzuGnSWrbdMbvqmFf7aHCSbRZXNwMhRysNNV6rz6d3y9w4AJ5saiV",
  "key2": "pTTu63iT48PCobJRvEWtPobjXeSxxgXeZbgETMmKC2NXDUis45bei9A4dHhzU6RCZnd955Vdzuu2jVFEgtUfG7b",
  "key3": "5VAcPEVnDB7Pq6LyrV8kgk2b9iDoYkLDjAm8hGh65qqnoHJ5rg5zwdyPEWCVA4ktfjnoHRUX6mwHW6L21unSbRMJ",
  "key4": "4NjiznMK2QoX9mMtihjPk5k3EkCA7zwLVqYE4wjz3rmowqYxA7bEtTzoMN5SCEUg5QBuzGq4dAfoPQLRSn2SSaxu",
  "key5": "Xbq8iuYqgP6pL4vU7HmQw9Jf3mmtNxybKDTjexfEGoNAjLWU1PV7gptpvLcCAujkyr5UPdRGoL2YdPmEid7uLbG",
  "key6": "31XjuVYdyzhNCzS8CQA8hLebAN5UDzsAgWQxBw8iDCb2nW9F68V6ZxUEUnwf1cnpCdPo3wdiyRq6EwGfS9yrkYgV",
  "key7": "518MN1fDJxXNdpwfN3hWFc3xZBaCwShChAJ9uU4Bz4eS6KanBC36DEX39vJV1eDCcs6QgKXdMh4NptmZ2or2nUte",
  "key8": "2hNPAK5PBupHXz2QrHzChg1j2858TnfXW22EbGwgdbtiPRkVsWfzyqvjgwHec6CgQoJ59ynrovAM8zT914fBNpzg",
  "key9": "39CHemMfTDL4acbPSn7LxQwFQe1ZzSGThGCNPFh9TXZNVDti5XKghxW7y6Ch7MqAKyWvzhnycnRD24rGvAhJZDPW",
  "key10": "3HbW2YXqVgJJ9BV6qCWYkxBGK9BGbXBtXn835rEaQJq81Pp3Wdaxp5PDjk3eZczgvzvzhg9EWbBcpV7AH7S99ng3",
  "key11": "3swLLBNZwcW7qvUjMdrmnBTvMdXSGBioBvZCVUqVf6P8vQ2Ewm8srddkGdJjBXndSGDdiuiM6XDLjibYARqfzGTg",
  "key12": "4tyk7bfBX6JpnST2ZT8fkFWwuDdpo8p1gkjjDgGKuuH8XfqZayJQYqoGczNPBXLSswDtiRg9ys5NsMFVzU73SQrF",
  "key13": "2jB4VSqp43AWGWDoT8bhm4TivzUfYj5ZhXohD886ShxWwfvmFGagUYTGiBcQ7DQ7Hi2DagNUN1KuBqsQcTNvYXgL",
  "key14": "47uib7yduE14WEKiVBahpExP7jRaN3JdRL1BWt8bx9x6wK1JaCsTyTTjERCsDxRLGsEAUKRvKWEHhoNwxEUTdTdF",
  "key15": "4igqTL6MzHZyfTpZ99Y2yyACCxBXpFuAx5VNjVujJk2vCvTdajnqrsu5z2z7ua1DeBxDZjzRZ6xuKrc4mG9c5fuc",
  "key16": "YPXFeQFaQqhSGsFjuGp4mfCT778TuQX87xjckEcQvdjN1jFEU4uzqf2ruwmSvRuBiPW9M9THf4SxEubyaSoBB6r",
  "key17": "moNVhA12cGJh2rHoYhRptu3oKv3wwMiUFRCS16LFmgPMw5pJtd5sDFPJA8BP6kd6SwoMzG7ksDgtfsY9ecWvV8E",
  "key18": "364v8v6CfQFx2B7xW6cJxQWChRGyq4UDPQmCkDoTbkYTLXcrSUeccyENoYQSJEqYFHWEDZYJS7qtTBZCddvjswAX",
  "key19": "2KVA1FwJom9Rp5av9nB5RU46f5v2zpL8RYu6r5vMuGoFRdCQxorPfSQ1P9DXV99pGaGfEzN42MfhhUNm1TasS6Lk",
  "key20": "412Rnd85cZn3qNsJtZaNAcWWKWWNbwNtVNsFcxdixcpU3GD6PXBf3gkxgpR3vr3fhv6SBNDi6H3dzGeg7ahu3aif",
  "key21": "3THWG9J3UTrR8UymsSVK1WM9N1SkSwUeTTTCmgQNu3cc3bfNvhJxHR8M2HsbzSLUDHfAV4SYa6fC7L7tVEqig4Q",
  "key22": "3seD6CV3aiCt3xc1ymLsio7Za92LX9Fa4y7DVupXky8aPgjFq5NnM4qe9AmKRdNW9CYw6UmU91WrNakKLqCD1gSD",
  "key23": "2K9DiaEFPm6XR8Gq8KjWwrbdcGjUoQ8qMpzkRRqSYuRQqutj72wGLCpfp1srAx3uJav5tPutFmNuJTuWXcTMQsy",
  "key24": "2sEUEMQsQUbtSs7XA3JqUa4M59rwb4RskxzXHRNHbhV4uiZFEqJs5TSL889h9yxGz9JAbJGopCmMJbVYf76MdvM5",
  "key25": "4pphRpm5bzzGkLpR7Y94nGkuDG8qqy44SMb71fWJpELcmNiGgeKnXPsqXfUWL9SjEjEjEwSGqVfBbEXJVAKVKEJf",
  "key26": "2zA7odN4XS3z8HSSzHoqp8kq1Y7MP77c8u27ZYFrJgGwihf7VDgk8qWtHQWggBVZEipTKbKDc4WCgxVdbmisfWSj"
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
