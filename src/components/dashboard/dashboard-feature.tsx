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
    "3GiaJERsBP76KksXh6BV4qupyhB1PFMjsgdoY2uivGnZ5tUQusi8CEoSWpwUC6oC23nGobBiWm9BQifcCitNJ2z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YSxfDtakut48Rsayn2KyFCyicgRXtSKa5wXLHJfXZ9ouFifBXjo145dgQY5TuMBt2zAPmmvmmmL1bbRmNQLnHyw",
  "key1": "22KP2soVU3hDL8nubzXXb8GBJnjceLbYtrzgpi4oQCFVYU2xm7cBDk37BXtpWPNXB994ocPjmRRNrMAkZvUMhAvA",
  "key2": "4718wcEkLx9ZCcgRHxCXBuPWAJjMyDLqGYE5i7UghGHtvc72MBiCMkMQ5zDTRTEobjFfjViPAe6Wzcd57P6yaSey",
  "key3": "eMpQwBpGjWany7PAUrySzaFqy5ViUaBRfcXrqC4dbYCr3jRLM8ow58mz5rm6gLH3qFNLa6nCQkG9tZqELW7qoBD",
  "key4": "EkwfDjRMdB6pUnQMNkGxzsdQ52NvxmRBDJNrVqgeJxZN8dhJQqAXcoQLBqHGs9fUKxdGYCdvTBENRXiGcJq9WTS",
  "key5": "2QyXNvnTN1GDxuWxp8Ux8MJStSkZxnbpLgwwEmnwCdv2bs5Hs2aS9YPbJXZoVFXkcRZZ5aJ3Fg3sVJGhAwr5nsWa",
  "key6": "3kd6D7WHo58f1KkqrLsJ1wWWFduE71s8CSS9cvCs7v9oCtJwzkcjSEzX46thBXLmyMnQFrqwAnNUuKx3JN6t2RiE",
  "key7": "2nxcU1Ng6Lqc56DUqXmnRPxhQLV5UiLnFgDEPPP4gs2tSmDLARTi14MxS1FQ5nXRec3q2A2hivk6aFAsnMQruEcz",
  "key8": "35LSFTE7CgLNUG68wTpZPBz7DSRnmB3YTQ71D4yXWaMrTsKYiwmfcFSfyFGVCQrijYt47r61gse5xttcMSuEKQLs",
  "key9": "3pvChT6ZAtSJiGpTqJzUHJrG1qfUr59P5xmFu5EpewZgA7wfunxcaFLH8LxBdunn96S1MbpwqtTW2aKwdoqshVL3",
  "key10": "Rsh714btsG47AZ1sneL2M7NXZpnL33KQrmQfXde7rvEnzKke8mCrLe3Gi6PP2RvwsGHnnA8h8LQCCqoe5LwFRi4",
  "key11": "5wUiDPAyarizC3KSFDtcAnFse5GCkPdzaMdv6URaMnKkLSFTYu2NVebr1sok69me7HSuSXs7U3Yg3pp5hrP1vVxu",
  "key12": "2Ru6PHSeJkwX8HinbJ6NkHWfQBpJ1LurLbKBJi2dGom8eRE8nVoSGvrjn3duNMXdmxkTHyoWBTYu7tj6FZcsAUR2",
  "key13": "3cVVG11cndT5nE7N4wJNeT1CqtoGe97WGpyf6vRMrM5Nv3SALRXC51Cc4JBbWUpXCQjgQmGjDqpjrYNdfnbtBQNz",
  "key14": "4SyrvzvZ8PfpXb1ex7REhMPXKapke6qWJF88XYbzBiZD76yUL4NWKAefyv17Y6fLEvrQcHwXn24JFULZXiuXARhh",
  "key15": "37cmf5eVVeUxiLi7fxYuXGCQ9x6rVfE8QDpwK4acEuHTCkcqByUkxQhygsw2Q4qzqXYJFRNF63thgvZGc6PYxUpj",
  "key16": "2MEzjgzCaa1h1oG3oj5ZGLXYYwNi7kWzp5DAWiZPyNZnNhxf78d45M8XHNLSwdUCPptNmpuWhxZDBvzwi1cCbqcT",
  "key17": "4D3Nwb62cSV9RYoLE2VDr9c5jWiHTgRxACjRna3h1Zo9XGv5KtFcWmALgZ8yFnKxdKi9BM4fUR4KBWDAMfoTDS9Z",
  "key18": "2TZaJwT7WTFMSzCrgjFvK67sBYwKAZWWxSTnGXTkXt6SXxcKovPUrb8kfd6E722AsaZdo2pbyuK24uM1QTGeBvZR",
  "key19": "L8skqqhn2Y828yaTgM2sVKfKQ3NWfafKCDt5kbBZaNn8XwshRMrGbF1hLFD9yPTNNBsGvuVijsrR4akiKddZAhM",
  "key20": "5pZrw4Fzy8huCCBqKrDWSDLbWYNnonx1kYWUUhXBM59VHgkAgyBPU7BqqFiaNL1BfT4jVBmT5RpiuQ5eRPFnsCig",
  "key21": "NHXWrLrF94iZRXtAW6F9VsQrYHHtp2uzTzmt4tFYsWUhZijqR9TZ6zmPFajJaDWXJZr35FgW4k3FYVA8GHjTF1N",
  "key22": "4mk1KggE24QiCibyPgwZ5opztN27KM1ECUQ1DW1xH5ziXTR4XMdgbsqXzLVS4ghKu6pnRKDEsH6FQHeWu17REgV6",
  "key23": "2PJTB69ehNP8o3gQ5rmL8qrEpGjeHkBwwciXY9ed2PskVG2tbpnyCqcgvDqdYTsNzwVPzJ1kZUcxagFCoXctf6Xf",
  "key24": "2HXrtLDcNeyZmnCev29YYRuZ3ZTUT4c4KcPqihKVKzvQJZC5Wzy2aajiuWU9nCymbSotCoBWL61Py2mR4vdjGob5",
  "key25": "3ieUHH7jtnRCyCfhJm8iiE49s2dwDXpRuosGxvwzGdUy2KdYD7Asw3cyZh3zG4X2ibtQzDzkirx2hnrGAh7anPxD",
  "key26": "4qB2UaGVYJ278EPpQqKKmDd7no9ftEnFUwLq73oTajA2JjA5SA8R6fvLC2CBsJNyYDR5SseWnkx6NiBAoWUtortD",
  "key27": "243EzNRQuNJgYjXLMgtPDGoxTEt7aLyc3muYL7fnNMhPUKygiscyNkEgpKnhmqbAhzpLxZswbV4vCDMVwdQFSuLU",
  "key28": "5mdzBbwE5hPZSSc92fksyHH2wrzR4Ah68D4zVk6uLfaDTT4CMnuecXw1WxMB9ZNaU2dXLZzp1rmNVaZvahNoBVmJ",
  "key29": "A2Jk7FkZ4EJLVnMt2Fba1m8utWbwAmbP9GkZrhbVMoZUnWF8eKutx5eKCh8VjmA2Vb7s4N7h3SVQQCDPj7abkEc",
  "key30": "4nKU54irFVtfzV2HkDPexzQz9oGEueQ47x4HtDvHuqDgzGGCbxvu8dyEfjJGHEL7L1W5NgHeXHLRBxUEocjbiTf",
  "key31": "5Vm3yuKn583MfAnpfuzs2QvsuXAQ5fKdFEBgKLhYgizimQAVvD515BFaSJDoaXqVHb7WjyAc3CSXxFuxVYbRuSpL",
  "key32": "5vUW2UumrukombQVnEV2tm6NahuaucFXqantugkENLsnFK4dvR2nV34XZuxUuefVdBz5q2iQ3nbRkPyi9GZDeH2Y"
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
