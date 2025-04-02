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
    "55RD72f3WUEemvNg9ds23vH3ykkMJArtMGefn6oKTGkhDeVfMPEsPZ6anfD9UWWWUhDHRR2tVKH7knVD6moKbjfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nfY5gKoZA7r825ZEcEUNNHcoZb18Q77qJQTuyN9JoBPmTYSnSox4W4N4Kfx6C2mhHvWKotcUuK4JsR1CL1At6Q3",
  "key1": "433mzHjzYe4xPEf4PFFjJN5WWzFisudu7aP8ijBAxjm8xAp1bAdiNX1hsXyNqihwotW5qZxhKK1LAmAtatqZqfpg",
  "key2": "5g9b66s81BAaaQBmvkKoomvcDWQU9UVmiXRrGvTgSjayPcVhgrNCceJo1LGbUCVEpvcDcyPXv5Ha1ijtHWXLwXiq",
  "key3": "3Lc1ii15866nkVyFUT3sbrJKPcDVgSU8ybNvr4fhRWGSNaerPUo3txJxi1baX3hJ6Ebtpv2KW3mCuwA2KQ1bpJ6f",
  "key4": "2b99xuwym2FUjNvJ1rsZtTtPYbqadS9zuWBBJzz7gNk79LQ9baCh2NGfFwmEZBLrwYdNw4ayc4DpBtvRyUA5FCR5",
  "key5": "2tDEPvYacJ7zFtBmprZKBG31cmbDFbMLrdh8bwUnyUnHdjjCcGDX5G4zeX6t5PRcBRhnVt9xX9dBSGrgdZc7fcJx",
  "key6": "38CEADGnAXTqPipx7QJZ616tnFYRrp5d9vTHZ3mPPtgYDn7DH1vE5LBeYDzc7CQM7JmSTP6geG61VbW9r9SurAXh",
  "key7": "2qqxb9bTCv4f5nbJLuk9xsVtPpLjC1zL92r5m1rLG2AWwyRG9H7nAmWg6VfthDBznExKtjoHPcCfgoddJLNkEfDG",
  "key8": "ax2U1cPAae2GGMVJmCrQmPxMHFYdoyLy3a5AQZLwJfWqFxMJqfuoo3UuauhC3LnczLugLgyREUtq5VgtrtW1vrt",
  "key9": "4j1YwM5MoYrBeEBzCpcpE2ErbVCvWg2FjM39mPr3p5xQN7C23B2Y6nnxd3bdGYBnqCsCM8LsXZ5cvxaDuNF3H5ka",
  "key10": "5RKjEAqQn7ZCm4bTRC4Y2EXXD9VKfoTMz1KqW2frJ6uRGgitQdkYN1szdkkRHxwTR2REL5yXogSVrKiMd3izFW52",
  "key11": "57Hyk7iWc2SgPYCeNeG8zNuLgfsoHtpp4wepaXxoCp6P7V3Q9oV3SrTttNA1JNpnrbN9evjLfMwiWXiRLd6Ses9d",
  "key12": "3x74ebPbm813K6oWPdsiAp75dk4nwern13cFdhqihPgHdRpxvs3kDTFTeupdFmq1iU5P4RcFdEfgcRiUpf4oFUE3",
  "key13": "5vT9HLVcy1PeCwcoSCys2oVbqQYh2rXReBUc8eqm52yBW9dw85GBaHNZNcdY8AJXwgcEFs38jkLi2QgLkAfhxeqM",
  "key14": "LtDQvY7JmgH1sN8xSPESWSbMLnLe4s9uNLyPvCU2gWCQTuC1ABxhpTgXfsygUYPXpXkmA6teuGwtdspzBft5Cou",
  "key15": "cjXx2zjD6qEihSt8JybboweE4BUQq4MroJTLvYNH64cUphYEaPfSwBEycRAj6EsY5KE58du6rwE34kcTfCE5YLq",
  "key16": "5JMQyceyDPevSXyQA2JpmbRBB5PDkhCVnzptmsTwdt1k3242REELsqMELnZ5hfBEKrMUiHcgkyfgc4w6TEvV8rRa",
  "key17": "23Vv5cG9uxGbdr7Z6HPhTEXPnhFTQbjPsqT8g8H4tcSZTorN9KqD5ZgPAPkbvaefurDjEXFgSm4skZwCS8UbNyb1",
  "key18": "4ZuQ69KbRcP8EZvohPKLUBDGNRgvwMkKazm6Qdubjz2L1Ta7Aeof6X8xGgM23BRUGgghvrFqPH9BfNUpvB7rTiVb",
  "key19": "2FQGGJ5JaBzmEsWNKX5rMSG1dn9Gddw4UZDeGJahHs4hzPfXG33k5dksEF9vxVEsLPHoWEAq7raNJGDsjvitvKRN",
  "key20": "zUSc4k9ijsRbR2ujTLj9YSS1huBzw4BfTKwSx3bHv21LN2GhL55CunVkMFhAFAmhPS3z5mRxt7FgftHNYbSiRTh",
  "key21": "5AV5wLUsKjJJGPouxZtTUDNYdmyoKq9rbyBjo3BgCnjqV3rcuQswB1a5poFE7TpvYZFZpbMwp1N4ei9JyikrGfc4",
  "key22": "Cek56FJAbscLagyUi4gbizXmmMvz2KjC6aS29AvNSVw6kyyvdj8SHYdXELUdsFgqqUz9qyDKS4pEZYb7ofaFeMR",
  "key23": "2BakqAUz1VA39xxiGkpeChbjpSZqRZDytXrRrq8dryM3uSdx1KUDbweE9CnWiwLCBUyak5FUz7fkqRmogtzU9gtS",
  "key24": "VxagAj17MpRTZbBr21gLjAYmp8MwwK5dQCrnxgoqvZCedydW8DE7c7EjgYYQg5Ps4Bh638WiB7DUKDv5PP8TxKX",
  "key25": "63WvmkKLnuZoeGvot4U85MT65Kn3jeQeXupYQfY1rgJRXQTPY351XLvvwmsaEXSNEMRQMVaaojGsojMHhSPBKzs7",
  "key26": "2WvSTNVGEqa2bf818AggFJT48UZWLHaT3wgLPFqKzBfBL7iUZ5QzgpXvRaEiG7ojKCeNsyCtdc2w2Wsov7UDDnDM",
  "key27": "2rJz6kNjgboZ3RM1XSntpTSLN9WhVjvQDmTRHTPEubE5NmVoF2ezhxhRP6gkHuLPFTtLTfKkjbMnJZxMYKhvg3iQ",
  "key28": "bLFVM3qWSHJd7BZVyNj8yv1djuPtig6ZSYZsQsT5ADJqjMRLeCCT9u4U8MQQDCorvvFUy3fc9TjhKdPJC71AXUy",
  "key29": "2fCwAU3XPvwiw7RsLUfhkHq5T4kUZ5vnWfpQqDNmMXsAGtMuZ6NpQPhQtoUN23PMcSt7DTkhK1dHmX5JHRQG3zWm",
  "key30": "2WHXE3SxaFDpDCcKAt5xNS31wCHTWZqq3xv3VR1otQc4MhwHEFK37jAWxMF3h4fcvSSKMVSrwWnTmbnPa4n8JdvV",
  "key31": "2NrdkDQWaU6mPEJwgNsqcZQ4dFZt5SduJtW7mJiigbGganR5reJaKxMLk1xP7B9PVAuG6R7aphAhW6d2wXiqCp28",
  "key32": "5NvxjKcCYneDnMBKohbSkgU3Djy4x7hrRypVkrUhoAW3Ns5SwkHkT25oNDn9TkposdtVCV5SPGXbfHhf6F8YiaNC",
  "key33": "2NUyvTreA8AwWUamnPJtxrL2bbW13CR1VvKMgMmfC7razgzrM1q8tgFGaR1SvDoM5LxZCGnHfmXh7Ua71GaH3t3i",
  "key34": "2AMp82zgQ4B8YZ6gFnaAzGvc6TfxoRfUwRRafHFGxoKhArMQyBv8Sm2hfgVDNr6bPnDCVwu8pqiXLRgzdQX17aRZ",
  "key35": "3znYwzcWK83LVJTBu2HH8Bng3QNK3uSRfVekewxVGcgk9VSrxb2fCXtMeMPpbT7JUCT6XJMMMAp7ExYQbVmUpJet",
  "key36": "4BciBxjgjxYmEH1tBgh2S5Lb7ybCPbmikzTER8x9FgXG73392fWdqFkhX6Jds2E8GNJbEh27F7nrNFs8KdgnAiZu",
  "key37": "1jxBaWw8v2iZKE8fsxX4HwH7AttZJcnnrhuAjwjLRKSx7Lc1fCrNfRFMpbDamJBAMwMZGca6omisP6Lc33R8woL",
  "key38": "2mnxDLKR1YBN3qWgxKcyWWK3TCdo3veQwQ85jtPhjyAqZxqsbuc4k7BBN2tovUc7QJUEHFuvXqXZg4Ahn9CASESW",
  "key39": "3ueFUH6AFT5F7HmoojbPcWN6FgRdkVzx8c2mQioScKR3qFzGePFvheioLUxCvmhNrVUVArdYWuhBxGepvCRaJgfS",
  "key40": "3mh3YDfs8SpwN28T1W4cm9RxyfSzuuJ2VAQrCxswm3MaDYNmCxBea3QvUyWLZT32vDzMXwPPziMAQjY6ksrPTKeK"
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
