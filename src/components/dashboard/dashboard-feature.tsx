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
    "3NgrcG7FauEJMkrqV9VWSjWLB9EqTs4L55w27sbCPNqKhweN5MzoEy3soxPq1ZxxXmYht9DPFrLjTWbkJerjVG5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aqCG2irbCMfmhfVp1hzFP8HxvToPS5yJRQ25EEBB6R2428k6Yok2u5BcUrCagN6khbjA71oQ3eiWvkNn22UY2EL",
  "key1": "3qVu1vYoAByeLzAwZaJ335vYDdtpjiZuqRmJeM48bdSW2FYCyNgoZcQaT4J6pvLhp9VMmmjwTpsjzEeHpt9MLLsz",
  "key2": "5iyRkQdw2Ev5oY1qNWVAmEr9uyooWoi3jQCT98Wzx8ZdaZZwUMTD46QoGrEuyziSovYQWpbVcZaPFzfb93xNSiPK",
  "key3": "ZZqLH4WmQhweivDjViiiq6xMWgaAmvAX11h2zSvQVPvtrFkU1wT2XmJZD4A2EZanBBp8wGEskaaV7EkLpbNKAzR",
  "key4": "3zuBPje975yDxa147Y2LiyRrtZnRD6TZpdFESzysdiW3ZnKdARRdq3w1nzxPxWHp4LKXQ6aTf6r2t9HCaDfo9EC9",
  "key5": "3SzEqBtRe7jxdv9Sw7JwZjdc4ubfxkuf6SwXJ4nba2pVinnfGGHiPXALsKnynfqzZpVWuyrU923ovtKsDGGjB7zi",
  "key6": "2hqK4E57fZhU9f4p51bXiv211JvLG49ST38S6ZPrzvahsw8BioaxMvpc8bA9qTRh74QnsjSH3zNVRCDjNAceYDaw",
  "key7": "giYUKE9sbdLpDA7RGrXDwrdZXXx8oHaN8XHEnXM8jERjHQ8wtQDag5xngYY4DbygzFNsiesJ5NoakVwLXkB1AZM",
  "key8": "23Wu3TxJB7ncTgVkBzwAQmF56fW8676z85jmMP1ndH1K5Jeh6358kWmoA5PgzVooHfTNePSFUYb8eBYwvEHkb9KP",
  "key9": "4B8g31sbbxpnhwKUg1yMZy5vRcHrQ9TLFtBFrPm95xmvLFDAM4tv6wtgQYCG6c1B82ya4a2QnX4jtJqrARYfYS21",
  "key10": "5UXD1SppT27wekFxDBHb91hLyNN99Y4xD1ahwL5GHdpRk5y6fUJnZz9cN8JP4oy9qr5FAK3xfqnsgncNJkecDGbw",
  "key11": "5z6UKyVKcoZ7wGhjJQTWB7tNNyHo9q84KaKyT6XEHR5tfaMenvbKTrBCFNFePZr1krb3jtapWQdVqWwzbMD5mhRQ",
  "key12": "39ENz8eKyYShALWaxo8uDMQMfFyBJw78mCaunxUDn6YFfPAqkZxt44Ma9KdJpjWv94dgGGEsD1pDP5LSRGtLtHEF",
  "key13": "TQLXejJCgEcg1ptfQyBMcmBveEbnzTzJ7AKq7Kka3LAYUuQ9S86Tu1fo66BJsuEeExhpChpW6wj3YV38hqugzzf",
  "key14": "2cycxjQzX3gBzg2uewcszJtJEfpLa7gbW6DfTzrcxZaeen4S19nfFNr8TjrtmCdDbty79MVhyn3NodoTjVSf9Zd7",
  "key15": "5CJEbQ5NWSq9d6ZFgyu1rs5rWtVaCUhNdxS8nfAGkWcc6MjMA67yacmcUCn4tfkvu6zpAJs2NE6ERYocFcH4tHpj",
  "key16": "31qS7o7vSccnGhJo1o2Unj3wx6oZy9XWp3oNdugUTztmQX2Vc5CUx3XKLyfKaDLDVMWGJ3KNpc91wKjkhB53knS8",
  "key17": "5ANhkUQ94iPjBqWPVWpYUG8G59jEAeCm5aeLRKzbrMTvzy2QYMPDe2JtkaY7WaaPQah2zid2Lwd4HBq3JK4mqaMY",
  "key18": "YFXsUU6kwTqL1bq3TLMVyc9ms5ZXtbgxnv2Fv1BU3oi6uSfsxQVCRhxNtfLsnVLPMBLEwN9HiXpbaxqJzAvATA2",
  "key19": "3JL3wYLq7dwsd5Hp6GP7NKf3JTAbk6d77U322FnTWSSdM8YfB44MRJuSwwsNCBreFNAm76iVE3xdcxjMDjUdaGHf",
  "key20": "3rwFMo1QShHtsimCFgEsDzNsqP7ZuhEt1WxoHhJZFauyyfbv5xHgfTTXaBpNncz5MUb4BPa1cPn9K4EUEAJsVoGw",
  "key21": "3XrFQjD2c2EcrQmA2CC7pAeap9Bi4BeeQcgAFhv7SLLz8wEzdHeQ7KW5Y4qEghn3qadfrL7Bq2njQT3Qv5SekDxG",
  "key22": "3nAi2RyheaMqrXPZVvq4TwbaugALNWguhjrKsd9g6vJb4LM8Cu1vnmjYMxk8K25xNJAQ4Grp94oKxBZGqqgnSfHn",
  "key23": "4Yz7seqjxQDFnNThgkEwCagnyPi3Dc9EW6Y3ZCUE6gHeLcUyH41U2N3ryeMVGmGfM8QxjsWztPH3HxCQ8qkB2LWS",
  "key24": "66kiLtN91wCzypfMthJdRNin22afcvi2XEfCnuRkWBda5DAfU14jdTsU5W8iZKgmpXCHXHogUSymQwcn8gPnKcc4",
  "key25": "56MidhmUGKjLkDJkCvDGaNqmhm3KV7SwyDiZgqHzrooYARRWGpHNiiY3dESgy9TrLZ4seyaiQzwVbPZthvauLTxJ",
  "key26": "2PRjaB55k8C1jAv887dXdkC3HTmbxmeydcTCyQUKSMJrWmjNt7J85uvwXMPzZUTQu1zmd8BpY8GoC9WF92wZMCmR",
  "key27": "28xenbvDEcxv5yRpG7G4fgbWDBnB17yWhjzDAguSJbDzquG5dYguKqT3itdi7kENu7eRspBVPWCWbQsvHeT6EGLL",
  "key28": "4B1QSURU6gWLqfWGgVaAx4ag8PEjNzWRQA3c5x9MKCvXNBRpHVacUbxEpLiFDgNvWw9adP7bzidVuAU5d4AM5fE4",
  "key29": "2P9C4yjYAPwcpLPiubQNiDeX5SMnvtzVT8AZ6qSdpBz73uTJrQcFEdwWPKVcvFHf9T1bE2idbgUREh2S1rCX4AMN"
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
