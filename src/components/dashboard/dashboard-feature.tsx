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
    "2LC2mRpqQKmZAeQXf3tpCrFemcvdKCDQb3tADdhGmVDz8p11xsb2ks43WpTfp9j3tT8pmQUcQeJprm8msiJk7ns9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m6tR3MLH7128XyXV2hkmjZvVHcjxigBCyReJcTcNzE1mvoTj1rQo6aReVQ82VmMgSNZWEeGMHvitpRsFZDPmoV6",
  "key1": "2EMNrjvGgUmzqc4BKJQC5LG1YY2V7TmzU3iWTuvqV2fguz9PSNHnde6J5pJrAu8sWGGtsW7ZuQoRRzfCgQsRFvQA",
  "key2": "2AKEzLoHYkYv6Dj5vjjSLnuQNHS8Qsb4bCw7mhSfKTd7PtUoriWeWTx4wLHfZYviqzxJypdGqGYZvqqDBScxvawE",
  "key3": "5HacDWeaSm8bhRqmJCzk9NLLYFw1F8PaEtzj9qv4rXrjkM6r6omHHMe4MpPv5rNe68MBXQNQuvNeL6ZRG3SVrqbg",
  "key4": "4ZShKLZdva8TqZQuymqHHgbTexHpqb5ywpZsiADRwk5VRBGd4UtQ5586JjJB8LgDL3KjcNNDFh1yb51BsV5hRxfQ",
  "key5": "4zhQ6NgVYz5GNmY9yXS6rHBYj2VTj8r46kapxwftCwHnCfHrQL97ZBXX1fx28jMmvPappiKkhECoc6bNjHChHZJv",
  "key6": "2daydPPD3DMJfXFAgEDdnrU4VUKDajnU4AyEPnkwaNS8jA4C8xXk36RBZCk1Z18WStshuNfpxmEaSuKsLXeZqAzv",
  "key7": "KfSd1H6uDtrJ86J5kTaqE2RYGkkvFZTJoAiceTWnSBr6yKox6SaBTTAMDpZzZ6BBSGEvKFp6MDmq9fV8YebudJw",
  "key8": "5vf9dkZe4creWnsANYjgRg9X5LBre8NVdjGACR81hn56oM8fAB9Hagn3c8THySuDGEfb4xTcTLCqSd4mhKL9JdRg",
  "key9": "3YtP29B4x2HeBF8q8gUZ3CekxuAXGq9K9XpLiQ6nqHsXzzatKS568gZy8FLh9z2a5rEi8w65u5xMaUmrfFH7Dbjz",
  "key10": "125E146T4kYSJnqPeZfzEv7BpdUKKU6xsqfi9FU7bu815KjtgajFa8bAhK6oa2AnziLCVoUTY1rEcctRFLaysJEM",
  "key11": "N3GuqzS913NSNSRZS988b6ReJTBH7YY4f3kVNNpgKRL4rb7XEbwrDdJEq5hvbNxZbTowoXcdBQAm4ny2vGzJeXm",
  "key12": "2E19BGubXDQWTMpddrUWc51yw5ooDJTSKoBM2n9bBYEdwTR1RxwwaszUDw9rs9q7s8WSg13G5fkHwVf1wrZhdBey",
  "key13": "3z5nzMnUCzwqVkGujtGsq2MvkvHyhP5yHATSmGT2pxoqxeudzGhqtCbXewia5jistqfJ9Bi58aaRQy8SvVyYXPSt",
  "key14": "2RpcdVY88cgAWv4dFiLnmRx6aYrGmBSUcMCzrDNpWLyTwkPmqRow9fC2QRBCwnYvdtvhGSdjj1Gs4AC52rhTdrux",
  "key15": "62zseSs8fBcy8xfTZkBD7schaTkX6DUcVJkFG5kNwvjviAR6riYZMYkdJGCkNctrmms6VuhUhR6ukW6uSsae9FFN",
  "key16": "hQE78RsZXDPZd26jK3pvDvhWStQy8CyJjWatVPDzPrAW7BzaECeba6vpSQNzGeXgSDX4FCMYzmpKaEbD2CJZnN7",
  "key17": "38Ya4HLDnAqUfQPz27VronNXPA8yRDU7YZunkat9T3ogxpQ8Lyyk1co4xj67aQumwmgSEn6biWmQTJN37oB5wHNy",
  "key18": "3fNLG3XoWkiLaRckFHyKTFfMKCdizZzM4SqvgbLafTPn2MCqpy1UJgQ7BYNkUBwNMPzj5DofcNvYyBncn9ZR5sK7",
  "key19": "296VCqw7R5L2t9ceNMveF9aLhFtcGr7c69dKAX9xz6cZe3HMEhYnBreZsY4We2wHgWv7qQyhLpNgg2Avmm4JSYif",
  "key20": "2Uh9T3HtqRDjMnV7xcSzTh8T16goT7iUfk3qnfPs8K2P1dciaCkmyVxqZ9GxrL4ZdtqU7EyVzLNkJiAjieNLwgS9",
  "key21": "4BUcpBfWmu2jJ14nFZaux6o27JcoSihwtHLEhAecbwGgBW5g2MVQsYVmBtj33yUFgACNyyzrUGZ9yDwS7nSwFvGT",
  "key22": "2nYoxoXzjTUK8TQLUTSdu9fd2ZTANPUig3HNbSEkkAn4edXaeBe7kLE2YaGGyrVXbU3QsWXdbodaZGiGxT52qDU7",
  "key23": "3pXZNrmyWYuwDX57MPqAkJBffbFcmdpGPJ3bquJjC5VosvgRrbLnA16Yq5aVNaY8yovzsQpp2VtMcwwQh3FpC1i4",
  "key24": "4aNs64seF1nFx314HXHW5gwykWGXegrD7Z1MEnfPpprfrqXF3dpLz7EiE121soEfrK5RxM1buzzsdUkf5eYLYy5q",
  "key25": "2nzerk3utNdUrsZTyYzc8vFLafdQ4yZziJZJf4CvfKfSaNkhrSMV7BLh4WgFBZ1DNWoAQBqqFWkEc5hf1Ftx3sYj",
  "key26": "8Ny6s2i71KsqEXsP7H6YE3KqnJ1n14qYC3drXBWopzEKksvwkU7PFwhdRo5S3nnQUJ9J7LsUaCgdYzXZX4dm4cL",
  "key27": "5Zpmjs73zCs5f1XRyarEfugTDRK5ykwYnYgbPPjNeWjZNWuJFCRntCSEe7sDfmhFYEwdNLn71XCR8udazLTzjHXT",
  "key28": "5qenRKZuAuvpBsYMWq21qwXoLPeGxjJGGqCMiQFqmY6qb9w54wtmxo5opxFaypVKo7H9Gy76uwQmm5WTvgCk1y4V",
  "key29": "2fXwGfHCkwg2mNqwqN8ybPeckPeeQM5tvQM6q3tr5k5r1YxnbT32xUoPQcLSPXnfM3Eq4GdprYdPKiUeAGW7Y99H",
  "key30": "3BLVXNSCM2xuuTjR6E1SDBnocMv9HUtQo6YFNwoKTwLD8QFr1kiteYVASiHkuVMSxr6BgUwcaiTE5c3aZoyF36EZ",
  "key31": "2tTAqED9rHqQTsxp4dae1ZvhzFKHmWc716kabG4keR2nd1hxnsJ6eNYw56GiHeU7QYTAk3tib4VE5B37364s7LCj",
  "key32": "n3YWJTvUg7UQ4atZcfPr1zLuaP6HZ6TQQBmtKQTc9k13miav5jDs7BEyeVbRgA9c6VdtDQxQrnLtcd7wErZedig",
  "key33": "4NFGadRhgZXgM5Rg7833FpBLxPGjqDZ3UgzeYoWDheVSkranKcCZxgyK3RPpcEhmCDt2z4oQcnnCyqHE123LAaZn",
  "key34": "5HXG5EtnyP81pV2KZeXJm6284pu1D3qQSTKcnNfSjD9u5tp49epUX7miwbHLx2pWuj26XLtAjcWEbB1XPAtQedZv",
  "key35": "2dc2ynJzWa88zdGp6YtnhCovgwtrnwgrUiwUFuqNHKWS9xeGJdwfxy7dzewKWTMMTpKDNwPu4aBzvobgLDYjF5WW",
  "key36": "2MHGFEZgyn95UCFWHBydenttQEWa2cFH8BJhWDLtLzVNJ4UN28uGtrqE74jJUmpCvAibRdpyKGaZnzp6Hz3vh9L6",
  "key37": "3ujZBBAjaVcHTCmt5VkzbJN5PHsRPUKSzsKTFB41A2tkEyaQr18oheL8BrwM2CY12bSDirLJfWeq9SXLv3pHR1W2",
  "key38": "5EoKt8iEkhVqzxG4hdxu49rPppD8CEtYyjaufWkYEPkvE4UBFdibjrWFCN6uPzCzH8eSJhEVbWxhqL36tjYquxoK",
  "key39": "3dD6fQ817ybADMGoBj4JXpVQwktxjfH7A3wsNw9ip5Z6MYhdyukzwcnLaKaqixstXZGQCVKSEVgLA6vn5ZfZns59",
  "key40": "2rp3qiYsnVj9RgCFVwfovwX9uxQggtyfwBx6bvixzHVZ6bPfSYpcY2zFSECBPim6pLazYN2bHhDKKKU1F3tkxHEm",
  "key41": "49uhHC2R68FZ5TQsUWAfVuJmKdDRnitJP6JWJg6osZmSvwfERHUPXqmnkQyjx52Tm2jwyFCF53WkbgdLVXj3uk4d",
  "key42": "4d7FNT8ytREECxdWg7MZFgiNzoYgsAP8pvw3k5cNAammv5v7SMMzPU8dp3YJxmVTF1j8ni3mPJHvFtNZowznJRxE",
  "key43": "2YG5PMh26iSf4VJKsqCLW2P8A1wKoTi6NqwvoV56sFFhDrtk78ofhN9WbyJqbaZjuLKUA1amZ19P1TtQzmM2LjhJ",
  "key44": "4LBAmQLwLTkUzPrbcVTnbv5FHhXjfiAfKePeNgGQNjkmmW5JrL7RPkHUKiVxQ5SDSqwGre91oe9SjG3wngqqtbMV",
  "key45": "4Da4WRamfGJ6S6jyTbic4efRprq371cRw8oCDMfGVfvEJqymGV4kcGdzm1SQedLvVQa1tGSWtcnTnVdN6mWYEUNv",
  "key46": "63aKYyef9oaWSou7nm5UWenkMJEGNSuhkouBzLdsx7WFWXszomK4KitVA8zdSV1eVRAQp7HReQ3ey5KMM3iFmrC4",
  "key47": "5RMpYedM9bmZYp9v8fknseJb4DJpLmD6JsohQRUWhujjyGhz58uatozvAomHWbHp8wdY6mGDRN4nSdch9TSz5QrA"
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
