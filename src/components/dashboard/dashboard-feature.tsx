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
    "2Bok2LVQihC1yR6CwccSBdhrhjEgfYCLWYx21YRezCoa4qHzG3RR1ZxnAmq7NDa4wWf6Ve47TEf8fMUynPwoXUhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iaSQRMZN7a9MsKUQRvW5SUGKvawpjikrfy9tYig1LRhNbiDLrB7gYoZbmFYk3S9XEbz3Fzy2BmPhnzybxs3aMjm",
  "key1": "3nT8SSupDeGszzbhqaBBDmS1Ne1PnJDdqAtqDsdLtkande8MAMySv95Fm67sNQpM62kSxRWzmtQnr2pfQmMe1e6F",
  "key2": "3FPngQ4NrmXbfHHMDU7Ca7TqRMka3gygRgrVRq8NvzZTfyGvryzXmSv6Atg6EPhLw8RNKx63siwCSZDtpP16tD8N",
  "key3": "4VP6prNrwwB9ZZdeZub3NijWWheJCpb3A2GpSZo4c6tNpWUrJn5ctkxd8Xg47Ah6UNYTuWxd1Wvif7SxeaphgXpB",
  "key4": "2UHTZhmtjeZW7qwJ1Urh66W8omUS11Gc6KrryxJUpmStCzENKbjWwP2iYCtRrW9My6Me8EoAS1ms8PQ7o7UR9vvf",
  "key5": "4PAthtuZrqE8E3UimvGmhqNRRF46vf6axW6QgLgv3VFnTw2EdDBimRdUG19bpx8vgmvwGkr5cx68ecPwaJBXDxbg",
  "key6": "9UinjQSrmMQYUUHcgiRHebGb8UPsEB7yVzxm9apv8U8DjxiJ9rJTYZYnzADKbFxW14RukSqZZzNYGeHjiDxQJL9",
  "key7": "4gML2JeiUXug8EPaoiVKdVWQhccb9RBvz5jEgdcakxeBSaw37XKcmiG5fBbJx3VCfLygkLDK6Y1r5zbEks2jnpa6",
  "key8": "4f483PAcmNbFhxTFf7kPCmx2K49GVwHSU5PYEDY6WeRRB4XkuyzfEddVzWve1fxaNyVeaaFsPjprEkPNEJXmhxxQ",
  "key9": "5GcU2DSt2BpqsFvnEXGg8L5PSpJ96HZmKWWhQ2sPmTE3Ve3EaCiV9fA6WCoqpgRZH6SwBjxRR4Hq6MgJ7Qc44PBh",
  "key10": "48VsGLcZ8NfstfT1LGZ9NroU3cLEJPvWxvJrkd2vfFHVbmLDXrq1Ty6JQcdWUCtu6iwKEG8d5fxFVvr3pCCAvgKJ",
  "key11": "3wfL7fqShptLTaEQWHqPMFEWDo6FS81uyrivuAGpjrFt4Ec63UgR71RGqwU8mVF6bjv6rivefdJCxJffi9fCbgBz",
  "key12": "2ww6FvP8fyXiB9TSk8v2QXHmWkLZ6qtHKCDRX24i7XqeevRgcXK6YtDMaCzfBFjp2Mj5ig3qqEKKqVTWA1BaBVqU",
  "key13": "3KyipXS9nRJZxgSRsDLSdWTzXjwTxJbvxGs4oQaJYXzmjDNiiCjgCdYooC6rkXUU9jwL3RozdDxfX38iKKhcHxdV",
  "key14": "34SbXX45s2U7gdcnNsTBsRLqTTn1gvnozSRLsNrEqDmtB2BFHgtdyQs3oKzCtxf1SS9yy5j5GazNsBatB6SyuZBn",
  "key15": "58cUtahEmwZUZk3E7nsZDub65Hxy6yjWLuy6iu281xc33jHeEzC9MbWBdbyPTmw8zxSDtsAgwifFvUAw3aecR1uj",
  "key16": "7p6DV5a6zQX2HG75juttxX17LFd6Yqoos9jrg4efVqLaUiVgFjQJcTEmsjvHPnPZG2aayGbQsPd7zyPKnyDuqVT",
  "key17": "5k7U9EaF6Rr6fzJuGgwoBLPPKgmWNyH9ncMAG6THJ8mAM88U8LTnrCM4kFPmkf2paJ3c6hCnLUS2UoRRkr6vczzV",
  "key18": "5SHSVXnn2B3Fg6fnQLeTtddaPuFZwfP792tiUXYRR5y7BjqLCckQL2gnFfrULvgXYbDZVwghAG2cbX3SwYeE7VVA",
  "key19": "zSvHsVtmiLHwDQVz8GDoyy3h5aeNisvQsRvCu6CEmtJy1esJq1iJ4XGwCMWmaUFUAe8s812UQxWeSLwGT7zckAq",
  "key20": "46RKkmVM13RSCrWnia7wn14aokfbLBaELYJXcyjWxqgzJrukjaYFTSJcn5MRooNRbndVMWd7wNgEiQLz2b1qC5Jg",
  "key21": "4zKAz9oJn5wZY8ER4Xx2SQLzpQvp2FSiLXrSqsQg6voH9Me4KeP95xYbHA8rwdK8g4AiPSU3rnC8DfpMULEqqMks",
  "key22": "4PLHeL2eGUYMPF8P9Sxm7B5LezabbHkbbFJZJ2mUUtPjMDjGx7xQF7XWVJMV8CBdStkhhtu4sJ1sdx4QHXAsFQMK",
  "key23": "5MgVzoFfrDo1CuZtiPXJDzagzRpzmKAczAoYwST9Tzs7duTDmVUZDJp4excsCJgxzW8TWqrZv1fLtUsBne5TSPv",
  "key24": "2AvBiyVNfZeA77Ss9NQtzrnMwvjWtEpZWGqou81hkETTjifmxZGgzWFifMuP3wkvm73sBkRsMUHR55cTGTLFFHuk",
  "key25": "2rgPJbh8ocxEUg9ZMQvnbQ28sK8VjWGH4dQkwsDTNSDHj2WWvMVdBBHgRvQma4ia8ZYQvZtMfiFvjAxfinP1NbRj",
  "key26": "xABkv3QmiNuFoF8CPb2qoepKASpsmraGiCfeHsngNmrixdxSpHM8BzDWoR7Bex49mUs1vuHaCbFmVAudos1gt81",
  "key27": "2aR4KRNJeqxCX7SFhR9FLWPTe41zbGVimcJjHqWeQYYvjFgeDsCuLASGK29xNGQcNuWaFbNk9Wbr49CM57jyFggu",
  "key28": "2KCi3fGFxmzFwaWoCaigMBUvpJxiPxpjwYVhTFjeq9EZgHAVVmCyYhq4aEoFW6fRF2EA635PfzauD62iZzY6fM5",
  "key29": "5UYD65sbctjqn84j4a5jFKkVYn4Z1fKipUoKdzBQByqaNT8wZDsFi8TRdninWXy94ExqFLfLsdoRNysHoQQ7ep13",
  "key30": "Uee3b14TR9S3VZYKLZvD1fvEABEVDxQviTydAN6CXc4bLDs9VNY79xSzJiMVT6q4TjoUhqftudJHSawn6sZzfNi",
  "key31": "3SMLS8FNS2Hu3g4vQcQsXnQViPSmpSWtrQZDvvPofR4UEky91aC7nfmB5PAoxwtbVNdtwtwBN9RdVEG3wJG6e4n1",
  "key32": "55vUxzbWcMYVfWGA1pGup9NLmPWcmYkJCmU9VuPJQsd1hX5EthaDjmxNwd8UX3NqUdG2YrLmo1ecsCekoCuD4Bna",
  "key33": "gELbZxFjFgzqDhh1DEhoHukng6cEcfBLuvBMxnFhAwDabbLdW7CnqsaFsoEAyF1c2LHv7b5mUs19dM38QKTaKkT",
  "key34": "3JxPHEdZTJDbYZvEGBFcHMmPG7U67wKPu5k77Kkei6KYcmuNwg7VGg3ofwofwbw9p25dFMqdS4f6pvkDXiRU7JWy",
  "key35": "38GPmhNoGtDbgFRiZQ7d9sriowtXcEKeen4EheeDUeiLfJK9uhezguAj2G6y3cxjBXye53FM84Mz25pL1i79Rtw4",
  "key36": "3u6w6MhGzgeNY5DY79ms4BnSE6ovF772Ajw3MxQtXCXQWvnNVcaFwaQvDkTgBWBpXc8qWqSDhkuMcpHQbH2na7Yc",
  "key37": "5zPWWVGSBYCPXMmyUCa67PadjxBxR94G8uCcA2j5rKM61yzDJfnGdA7uTKg8VzQzcLfswka4PZsVbwFqtcNns9tg",
  "key38": "3etihc6fFSy2nSC78SpXSk7thAaXM9FbnoxWuzPMrRH2jhLHLr6FJSUSL5h7ZPwtF3GQKvEVaLQib3hZKFzVtfeC",
  "key39": "2s9676tm9YYQXu28K3AGiaiU2rnjvnpyp44u5fQQkB1ciefX2WgqB5XYEvMCByXVqwdQBedmbNvkzPW5bGwuBdqY",
  "key40": "42AYMkPSFkGNirWEb1jiEyFtnwfrFFgSNurzBfkAewdygHrMFEFA6rtUkVR4x6sKyrrqNLCqTSrn4vWioDDydvq1",
  "key41": "4jwm8Ry5PU9NzA5ypHafXXkt6ViBy6z5HH5i8oosSm2cWvS6cGxeSiiqWYyQuNRJt5ADbKEkTTCqUdBfEKtm9R7W",
  "key42": "4rmU7A3a4wgMsrCnsEneGHvgb5cc3d3FQpBQ4TyvK2G78BDCUnF4Nhv91nAJWxMEHvzCiA8rdgf3JGBij7fKfztC"
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
