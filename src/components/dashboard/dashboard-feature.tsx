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
    "5wDPREU6bTbcaYGLYUz9ske6oJ71Cp9fS8bkxEG63mEqwBhd8bkGomkYTL3aQ9ENh6pZUCGFA3pEswD3asLMG8Ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bXP2DtjTi9UfZgAPqT4yb3SqzCbrnhYCoMqDk99YCfpgufngfrdhRFzTqNNLNyZfidHH4iccAYLjQdZCSdR2bm7",
  "key1": "4E4PJq2gYUPXASNGTbtQPjzJRQCeJWBQbq8Je2xufd5FhHoupSkVMNELMpzueyhBmdKHkTgMGdodGaRUzRz6Um4z",
  "key2": "4MPgyh8EP6kBbTGQnu6An4Sun83rYhZVzLT7ed15SGRVHWiUyGUVg8c6PUek8CxV8UUeHFLgM8tJzM7MiufUKd8H",
  "key3": "N3Thqq9MxJY7EvBGLaZXQyZtZxtFVH8WcWF5v9c56Qbfi5CTrmwb5wcPh2FjPJUTkmQS5ZmsVK5oVFXucehkASq",
  "key4": "2tBUBHKeFq497GbYZCLGe4Uyb42pMyVdx98VHNA8EQKZtbXXvCzvqPYtesmSULhvkm6sr8STG4Mda2zXsyUXbs26",
  "key5": "4ErMHmKnVem4tC2z6fFT31AjFsZToxjEFWphD7Lh9yr2eGXSMQStNgHnJBjbKfZ66zSsU95HAaA6BkE373zsvBbd",
  "key6": "Qx3MdXMCydFuR8iCTm1whtbCefsH8ZCs6gnyUwdas3qwtcqdeJKnW4Fue6V56XDnvBzdjyqm8t63GQ8FZJJcbfr",
  "key7": "4sfx7Q9s4GU24U1UXj3KRTQ64d3DUANvxQpo1aKMGZdyzPU9jn4zNVTDRxDNSLQKxxEhN9hxvkfLCaAd57tDifR2",
  "key8": "56GKRhcbSqf1Hx2pEmQzeXarUVqqkuN6ifPtDeD3M5J6MjziyjNSxWrA4EhtqxrHoguzjihfLo4rXxwA3QGTwWds",
  "key9": "M8CoNwDDxXZd6sWxZWEiQsHB88fPGZNU4R18ZMW1xokbKVZxF86TqxaFkzjKdA3ZzfH3xKJVMP72QgkiKn7HPYY",
  "key10": "Kh5nU6QYdspUeupaTxbc7oUHRci1PRMvbP712vi2rTm2urjjNwB3G2D8wpGWbHtwkChzxhDwNd8jzdasjsbzkxs",
  "key11": "2n71JY6DyzAay7VfcpBwAtcZGCRB9jKtdYgtFwAne9Z8SQic41vkQWywzipSX8jEVwPb9fGNMzH4tJTPRyaKRUxF",
  "key12": "2VnAtGHLnsy3M1CQvwbxijqL3ksnffzSrgUtUrHToUPJVor9yZ97wp9Rm8h9HYr8uEqxCy5coWEsinK9FtKqfBGL",
  "key13": "3mU1tsMA2c8eSczy8dNFcMhAy6ymCZKtivkKBLnJMjq2XgpMo5XDagWgVAvGxLMfenQzVjw1k1niWuaFgU1cD5nG",
  "key14": "4hyXYv5TQtB5xj5y99HsP2hih3CxMTrxcd9Qk2A46nt76YTdbRwF8NZ2qyhNfnWbcbx9r7igC3aPJuQqMRXNbykc",
  "key15": "4svZd6vAquGXnSPCVJNHXmAta4nZwN4ZVUqKDhWTfCBtfpYW1kkesXW4STjj2H8zmxGpN3hgzseqmS6X8YMTKLCT",
  "key16": "44WdU34KRxq5EoKVUA6CRs4m8HH55eQSoz2cByKwYvRjN5oM2MqhZmEY1YuDC4y3YcuRQZQAwyZ2cEKzF13uMUDy",
  "key17": "3sr96kNqkgnx8pQhBbN878oY1MiuHUop9ebHqDeCRZnkkdt6BZ8v1BxZcdhkb1cqZ2fW1LHYNqsefA2EdMuUu1ow",
  "key18": "2dUrqETndUod3pX6wnWabMz7DyzUiBoos9hvFXwqU8fNpYMYvVGX73WgopkHtiP2rFpK4rjucmXV69GvvcwpVgLS",
  "key19": "2n7qarKFXB8DNG6WAV8JTh2pNHa8hggjcixo2itGCPBPtVN4kVphGEpRhHJR4ZCgMEGdi33izzuttKkhwinMm8Fc",
  "key20": "36Z6ffGBsaBJg8hbjbqFz28jtFHUkBZknNyVmYeXG3qAsEjXamSa8mU5VvGZEPXVvdaxK6aGHMzRqcGdmj1kz8dD",
  "key21": "3nSWwHjuo8sjgskSpvfhgRsVdobFPk2vtXq1L9auNF8hurxnqd2MTX789cut5WQNAjng9P7LnioNCJC7qm7ESoTH",
  "key22": "3Ndyx6Li3JvGE5Fpd8mA3Sona8Az3M21R12bgmDgZhu6c8qZKGPZgXAABUbdgQNWbXSdpLxQFUy8357w2WTxwhGx",
  "key23": "3YKjTzxiUn4pUAp1DMwdNPJzBr97AP3rorY71PibygRYbZ9g7XrKUFFoHZ5FWUbTbBmVUw5gXdfuZE4a3L8pupbG",
  "key24": "5N6wzxzvwWFzG812e7aXzvzNBngqP2LcKd1PAuhdNmYwHBHGKVchNB7xVypqwVFxKbqbHR8q629D31uY2dRgMaxf",
  "key25": "4eoiWdwZmShbV21qA8PowocsxnYEkCGnAoRitKh8hXMmcAM96BM75VGqDtZmoNkXLeBSuzStsWzACKFuEeWfvi5E",
  "key26": "2hs4yCHMuG4WUKSARHSqrQvrxSW31VNdeRSU9Jj3UewmMYvqUZU5BUba5JV3P2BiNpRQCAjr844oW3hLP1JjPLJf",
  "key27": "23muUtxf85KSpX9p4DhBEp926VLoMiNgSVBBE5aEqD9S4zdDXV1W5TAYmuUjy4wUTQiUhNMsEj6BbRupfpbhih2J",
  "key28": "45LBPmm6JqzL9x8KRKCdwBJmAY9kLbAgepJn3C3f4ttprYCFR4Dp2t96qHEvauQNMRjnZpfgr572GcMbuRSGX3Us",
  "key29": "5jGgMLMbkwFqyKAZHr8FSeLmRszQQPK1Et9ph81CR8WiePkmiDSsR1Thb6zToniik6Axmo8kw4hbKCqEcTgGzS2H",
  "key30": "3zxCX8fg7RZKPXob6CJ3RH9njzEozkKfCj3CZgmZqwVHkjsVtMHLLQBnkXfYCBq2SpyEszhB8TywbbFSTAgPtSgU",
  "key31": "5G3UK7dCeAgdwLUAeV1kVTECWPT79Zg5efqtTJKL48HcgMQDkX3XkQEUo252Jc9wixXab469JX3125rFTrRFNTas",
  "key32": "5f7Dfk4tFajDSdTsbMMcS31k3GXkeZB8W9NXoPRfp8FSFGNMKzy1LwGcii76PofTGcQgsB4pm9trhc1qadoKxkWZ",
  "key33": "42ZtVpxBKbop6WbsjfqLpjbM74B6VENzr9KjRnnacrBqGGjLyFvUAvDB7kifSsB9Ebd9Ppis3Lwcezh5MLaSAFN5",
  "key34": "2HTjGef5XV4dqKQtAG1GevXrVSA1wyuM4vRtsopjEn8SYdKVr448PXL2fH8ryYbTEQLjcxPwDMLvP9SK9xRi7Ssr",
  "key35": "2nnU5iiqzZzRTAuexKjcxDFLVTzK8gahqH7grsJ64KSZwuj5BJCuFjPLkjWJvn4CH3pANkdJU4mybqtLqSopm7Pp",
  "key36": "36VtsZxfqkvg3voLvuaNtBtQxYGQqugbQznaCNDNpdhwy2HdNxs63mNfpFs91hEDjooAe6VoEcPzNNk8Sg6nWMKZ",
  "key37": "5HmjboJ27W6oPPeJdGwqw7EhSLt1ytreQFwM1RfeeamiVyhfqYcfp6vcPgc87qm7owbbF5PWot1b5Pm9JJizPAK3",
  "key38": "5N5uSZM2Gautqv5UV8yqGuK8NzgN7sjjLZHv5Tfivz8ckVzYZDN18zpmgqxFhNL2HzzHBhyoWW4FpaZLLLZUGfZi",
  "key39": "5No18i8AgatLXKgsE9yXmV2YC7TRbpsQRbxkVKUmTub3sX3kqWXTgXGZxc85ZFkuFMUtuWJHwpJngZhA4y8TKiCr",
  "key40": "4JTccVxXTnvx23xQRQvDkoBe72EwcB4r7sj7H2xko3MuWCbpLeJibhNpL8RdiKqbU2QEsRAWk3KFNpZeJBbL4ewk",
  "key41": "2BSTvGPs813Gm78qTYjwYTEnWq91wYu4u9BrQTgZ3PX8ESiwchb6QA7pNKNGgwRDvB8c5DUTSmBiyxwTT3i55k3p",
  "key42": "Jy294Zxw9QXVAwUBjZNTRCVhzCtaZqjLm6VnvuNNQPuACTCXp6rhAUXzUGCsPWJLQEj6PpoVBRbGzKUupjjcxPK",
  "key43": "47jsAU2E77hiNvaaYyezAzGAJksgdj8YK8YoSzAdRCKJXdFTiPA4wzUvhSpLRuEJ4KczSNVAobJCSAqhbHim2Evh",
  "key44": "31psW5Ng34Jr8tEJWaYUmxX9iyBQzibVEUXuSkQf7XPduXJa2AYdeXqFXUsbXjyogLMCPoeWrRvhB3QBDDidNFNi",
  "key45": "4eAML2Mfm11VzvHwTZcbM3YnqQvdfct2ABo2xQEWq4mUDjAuKHr5LXjG8wyp9ri9iUvEAuXh7JYBVn4hFrJLzqiT",
  "key46": "2MQpFsJijXULZLDomotFMng186h2aUhLdX2TrEuA9wJjYghuMmAcrwdeYxaDvJ7gZqajmJTtBpB2EWEJGwJfmr9K",
  "key47": "56yB8Jbg9YVVwaTc3fHFMHWpoJ6deETcRVXimkJm6ChjBvS2ihXGXPehjGSNjPnv3TUYjzNfJJtKXH8RnNqCqB4p",
  "key48": "23qhgLmY71ZfiFUx9dVSDM8UPiEouRrhFH78bN3iDEqqmQog8Y1ZJK2RqgXLX1YZGmKSDe3yy7vRRjAJTPSZ8z2D",
  "key49": "3fmR1jmvMWZ9twTzpFLSTH9j3GMjouua1a7kmpfWQSAk7fMWwJGpS5pjTY8xoKsdDvaCTz9ByeuiSTF5XHxuxNoG"
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
