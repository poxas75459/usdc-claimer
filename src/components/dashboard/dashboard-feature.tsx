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
    "129W7ZtVccFUVgXA5ViEXQMrzfzVVgQWts1Eww5F5MCFFqt5hDcCf2oqM6vmkRaBcnr1zwYkooBVv2i4EYGusWac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UEEjGxtJE9MVKsMK6Jb8N11rmArp3kTJqiD7Si5FGp7YhtDZwB2dddS8Kytj8BQYQDkLYHBaSxtTCt7jBNXo5JX",
  "key1": "4MLfj3D19hDf1NSbspA2aNxPu1ShPJNsGhQ1jA4gzNcBbg7zwTgyRSkxzYcZFW4ECvoEocpDaebz5aGJLZ2BCS5S",
  "key2": "2KbNayn5581hzbbtrDC2gDGSdZn5mw7XgRr6bbPXALG9CqdLBuaevoXLaMj7YCohHTNFtqv29mriZETWL6utth4e",
  "key3": "4FZmxEwuYjvaREAH4pbZRykMzaoQV5Kqo7THoFygEP3Ae7WaGK9yB4HKCDBw4TPySbmWTk5kheui64NWTdz4tzQj",
  "key4": "5KDdQEjA6cb4mxFzvLJskXoPbaGwzopStCMytvS7LwtmK6LbffdeyiE7gJyWe1gG6Zj5dsRtM43y6CawkSwaJ1CH",
  "key5": "8UaLVtSfWNM4VzKQG1WmWYhAtiG7u3e9Dj6kac1D9NMaTKQ1H1rZPiuLXh6ta81M7Lw1EFf2JAXXqiQfSa67Got",
  "key6": "45nu4KyXiCYGCKDutPhyNgQkwDXqEFmCGHvMJfjouJqt9ctpf2MBeFQxrQagiwHprwQHDWxEUqpYjrvQF6yKyhV9",
  "key7": "4PXeSoGnDXFXDxaWfnp164YNeWVozgoZjr7D3yLNrjmsd6HMjR7sd1TqSH3Vvafnr3FYLoyVdXys4bTCQwB1R5V5",
  "key8": "52sYBucVezGwtRu6jkFWo5bEjrBeqMS7gHBfHuVD7XStf1S86cUEj8pawrJwh4fQv8TteUdAm5d1Aou9K1TmfipL",
  "key9": "FkchPpwCBxzvUkHVysye5n9KEqhbwveHMpXLkK7aA32BUrra17FiJbKAW4mxA9yBHczthp8KAp94CYkeftrAFL3",
  "key10": "3fi927MuY4NwsmL6of2yCGsd5AVHyBgJxZ2iniJqCXBYAb5hcMXJ5VZsnxBVCxEown72JcVZxxyXFbvQDwb9DQL2",
  "key11": "rt8qCYQ76sVkt6uQwasWNxE1Y2u8ZhFr1ifNjv67WaMoZc2aBsMMvQryX3q1udB65C6vitWAtoVaedDBstx22Tr",
  "key12": "3VQkpYXVrTdaqMTmG41NVyUmy5pVQ9TyfmtcGHQwoczBLZGKZjvHdS8wag2823m6PqFzGnh1We2Uj1C9CT4HdTEw",
  "key13": "66yoC9smANrPeVKz2sZPej9bdAMGvMeRq4yNZFbZGzv8F3fKSLk2oMKpARvcykJMfqaLVBN1NjoP4UvYy8C8cceK",
  "key14": "2EivJ1Lq7KVDysTM8KtuL6BHQDcCFtb7jcgGYZvkCXJLDTSroFdgwrGrLLqbkLt95dADVyqNRHooDHH6tQuMJKgU",
  "key15": "2dSgfAapj6vDqDvxnbxZamej5v4FZdqkw4zCW1kecDQK5Tih4cwHubNdJsNEo8FwVWhwvE5PQR3sd8w1BGh3vbyB",
  "key16": "4vnFiQmZJgK4Voii7TyUbC3A3TfygtQs1mtaBQTeQ8NKjT1mYYzTY3rxQA9wXTpY462wJb4LYcnBYKGHrzmHmsYD",
  "key17": "bxzYn1DbdLMZMYTzfnkCULLtYNwVnkqD5Cn4aYYaBNCiDmppRH58nSZ6nyJ2gLxHYDDcVLnzQnEg777kqtLHGcj",
  "key18": "3E5ahudhgZum7BZnAZHBMY7NFhsGn9j7117geRwyZhAmBdWUeBHstUfnRDXk9VifMH6xVzqyDmiJw5wQ5YRfdd1D",
  "key19": "ezcC2s2uJjj4zRzoYwo2QU2H1yHTSTJPoKDJQ6jWJ4VXMTuqN5qyQm8hfEzS2njiL1JuaNAWbvUgmqw7bcTTMHf",
  "key20": "5zQJcxvWBLHNyGPwxPsR21fzSDsNfL5ZKSnVjfMZbU7RkiQhmi9WEZ2DpjCjActw5Dq2twkR1ERaBNL8w2szb36e",
  "key21": "3AQc2wkFDxX4bmC7KUYaJgXsR9PVABQUrEV8wYCHZJcbr5boBcXrFtUaukxJu9nLa2EayGEQeoqDrfXr4Mxd1DWS",
  "key22": "9RaSRDyAhGqUYB8iCvNa3kC6mKwLnCSjWDy4NKcwsFRWEg81qJ3sVNUpHuDus5WxFjr9HX6fRn98QqnXi7yvcrN",
  "key23": "5sS3jZTGzD4ghW3HqhG8hRw9mU9LeqmD3QEd2kMvUuYjZHk7DbRXzyTtHN4M7Zm4qnPow8sxN6Ft5TvHQneRLf6E",
  "key24": "3hkHoxy9iNw2h3movqquffajiToz8k5jr2W27a33r315VvywvkJSvSaRh6TcYc77AJ2M6dGgdEwi4Gn1qRiqguNp",
  "key25": "2KfJ3xjNN1pqVYYQHYknrHrLMxDeLWtuiw88i2ZWor4aa4Gn5YqW8o29yQZ4wgLimCWzagPLDpURDi9JGdJEDZP3",
  "key26": "3YWX5KsjDbJRpbYCwHTxu42HwdHhsFHK4sgmEY9EUSuPiEKfHwfjS5ap5kwQ12SQLwcQx83HazsnmRZ1NyiHV8Vk",
  "key27": "5B35U7d2DGnbKiq9iwhteHpds8GQQ4oWp5MVK6CXDTUp8v9s58Jo58xLJsmVHHTVxkE7skZNhPEsm8TZXWrYn4VT",
  "key28": "hbwHhHPUFULDs6qxxMK7uahxfNoQKQCzP68yottBKuhjDsYmDiTutdC5Ytf7hoQmcgbbnATvnm9zYW16D8WPuxu",
  "key29": "V4hPpfXXjPc19bVevXbaLTXZPu5DeehA91gPzojBwAUUgShBbgWFzFCUZE2HxVcr7EihZsD6ePa1bUyT7mLTgis",
  "key30": "4QsMBMjcKgotF9p5z8w6SaGxXxsPd4Ztuwmp9AxZXzSFS9GKt8apetJxoh2si7oQzTjpo4gAtZueuwg4H6ZHr7fY",
  "key31": "3oJ9rbhLxkjqqTKHfoT6vG1LSavSie39PJuiWSEVazP88YjGrxD3LR7ioLDhbsbFLLSLAEdfw3u7WMLrA18hFAfg",
  "key32": "2ieEMEqpLo9qj3C2ab7cKP1BMtbWQbU4NnGqCbop5wFmK1mx21eAnCuKQkUZRvkTiSeez6E7AXfNydRoBDVibDN2",
  "key33": "5Kwe3B48HZUay341HAGVwFy85D11Ncdou13aMmN2agYNhTLhFW3AioD4FF8DMQNAWnciBSqVTisC8zKq3ZtS8qzo",
  "key34": "4ghH4ogk4WREZ1KiTnzntaixXLaR4CiFmamwcZBTY2CTf81gAfV3aXe5bk1nfh4e1HXJpBwAGEW2k5woyMM7J4ss",
  "key35": "rxTsF12jBBJJkiBJFgDd41rjStDQUw3JViouj1fwREMUStXVH7vzLgy334T9LcZMZMzzhXEAuXgzKxqLKJ3DGeh",
  "key36": "3GrjG71gmnfjpYABWbnfVYi8TVYJpGQi7V2AU5S2Na9pGrcUs76j4M52nM3o4RWVGkodEs5o3a7CMGL9ZT6eDMDm",
  "key37": "3QqCP5uawExFuXS5eJgcjkXpXcmfpLU5h8kUWybT7sTM3AzHkhTKmyqECa12gVn9eiUWjfcWV2tDpK43XSXXuqUw",
  "key38": "5eoMcLVAg6jLSjz4oeTgnuuBWAeqqS2dcB8yw5oxgFnXz7htCNnPVipoqiss9QPpVVoZtsGQPpu7xfWHm1oUJZPb",
  "key39": "2ujgtY7JLkfUiPurAPUPtfGKuK6LWpVS4WeS88MLbGb6LpNFYRGoi1kpaQywnDkS7p72uJNFR878pgv7mhrVERhe",
  "key40": "5fBL1TuDCy4D1N5oDeL4epdatg882CvpCR9MuTroL7y9Cxq1U5amEdr7bYDaUi4FF9zBicKwbUxN9oKfPeNvUys3",
  "key41": "5QLT1DQBbRMRXW2GBBha2GjY5evsJp4z5p8ybn3M82StLSDZsFghttJqmuvH5JhhsjyjWJevkX4T3LvUb7sSZwpz",
  "key42": "3f8zsUhdFRyt1kYwFKSi1qWfkqb9EiiusEUJehsWA3xwa6Qcn8DDEgZizXyuZTuFwHqRLVJwpdjWAnnoNcb4oM4i",
  "key43": "mwisM3BM4jW8oxkpwWNYbuXpZe7hEJhpXVKcPJdD5w5oNzgo48kiTcg8cE7NznceoiukTGCyb8MeLxoVFAxwit4",
  "key44": "X65rrxX4rmwCUs56gomyXTwTxzCRBLemGY7no2YiSdzWYNjcjcZT6qHDcmFLBfZKZkbiHipoo6ENPv2ZuAsGDBZ",
  "key45": "2m5bkPFQzxv4S89nN2d5vMVcrbZabpateSMd9ftNzDJPs2MZ4e4WFCesFiaATvZBXbUDRFsfgcYzE3VbKRNNbYa1",
  "key46": "VuU7xyGUdkFQVZS5w1qgdNqFf65M4CtV5x7VahtEih7TQ5HmwqTewYW1zddz8d7AgPZSV6WqGihTfYZY85uK2io",
  "key47": "3rLnWZVq9LoPDit3HP4a3aJ6MMw5ecFP6bBuXdgjATymNNASrpwyESqwsc4p2L3YBNGkAnunRtMZDz1cABng764o"
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
