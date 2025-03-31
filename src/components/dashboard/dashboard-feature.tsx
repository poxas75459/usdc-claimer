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
    "2DnTN9L6vobtWFhRY1LYi8kGaZdqE4Q5HHnDT3xqDretZwYbwSEx9w2uCzTDiiAjNRq2dHXUbD6X81ztD2f8Edxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aejHrT3eVJoWQEo3c3M5V1aMUNWMTsSKk1GRzd8s9ZGUTGQVuTjdFxLsA7WHcnaEkoxCBSpFAsxa4sLqHKWkeTM",
  "key1": "4QohpTxRRQqwDkSpH8zUBmkj4JNcQrSWeavv3nEdenpvWXpfoU6Fm7MyCNdLpAnZazovmsmeVB4y1aFQu8p5dkfR",
  "key2": "HiZ1YK7PXvHr5tqM6nfB9TfxMovYHgmEVqP3R7MyvZfnVPR8krjzPqfAczQCzcdDxDeuYvGaBJTExeTkjF13RGw",
  "key3": "5idATqmJmz4sYerqdKYHYZHjU4ArbDPvvbBouHCDoVg7KHGwPEexR89GH2QrdMCajYcmrZkj1TJRFiyDQHijgmch",
  "key4": "4j5FEDJWg9Phkbdr932wKZHxMYDjLYUmbuhVeniR9mmNz4PffCCXcQsgUPkuxPwNdU3UsqjQyf4Su7vXL6onz9AV",
  "key5": "5vr4eyASF42L6zYGi7y7wtaFaBsH4DmpML28N19y6sVd74hDVAdT63xfk57ifFsYHbRJmFsWmDVAcGGDEcyz8dHy",
  "key6": "2agzSbAyy3tnsfHyDvLUZ1n7MYAbTXHjPVJEgyo1NcQRnESC7R6XBTL2C2wDKT7QSKTmVavSyGFnZgLprsHrgHeG",
  "key7": "48iu9ZyuPKdBD8Zp37uTK3koEkNcnbyx1NzjZviuV9nPdMLf5omQdp6i3YjDmjfV2rBtR2JqQeLT5KE55PWfCwP2",
  "key8": "2EuFKUU1tjunBFUCy9Kze7ohaFktjMzSty7fqXfSGjsmszizRbf529qgfZrkkars8VCVx4jpWnsSJxFoVHAAe53B",
  "key9": "zG3PCG2RUgoLbMkBTAZy1n8cef9F4m4Rxv8zxUhXB442ZPutBuzfou6WTNCeRxF81RtJ8DAEmgq8Fz2smeiSs16",
  "key10": "2nhsLcCV7YPtB7g3VdmDrJQFF42szrTkqpcqw1qGLMj7xPFdBxi7AJaHrwPCMSzLPs95q7ebGDfJwStp4ZF8Mbyi",
  "key11": "4K68PNZe1mXyeDPuML34jYgLstaUzVgFJTzKbSNDKvqCk7GWvQUc6hV7pGiLdqMZRLeG2rvvb3ftfB6Ftfi8AUDi",
  "key12": "5tGHyUDJ54zv2WzTudCongyU5x83V7iRFaqKPq9XrjYddbPTgM4nK1WRq35n1qJZHfyByxVjT3djf17NVkxmqXRa",
  "key13": "2tg8S7MN3rz6LNevqUJtTBwu35z9WL77KMxm9qKSVpcRQ1GPcmSBMSpboCAn2m8gLVCpU12gCfRPvYjxuj2vR1sy",
  "key14": "59X5eG4MVSZJj94i6K8xWszoAwzU7noPnkq5UMVdQ4VsghMDBw9b6nc4Lwi9aMyXHNXZLCmmXtTfwbcUBFxmMPRu",
  "key15": "3P1VzEg7mstvdnb34tekmhgWydDFKRNLPWWYDHTa2WnAxAZkEA5ZruraqULdbcpxWF79LoXpB9NF3pAJqxq9trSy",
  "key16": "35HXQdAokjLBcvJcMBYfwLJ2nTGFQVaxCXGixTkfH8f18icZDUv2AeZqAhDDXE4XGBwE2XHebocX5uuTBfrczcNe",
  "key17": "5uxhXM4bdRXz76YitR8QgiEaZKPYzqmziy3adJkQRsnhe8ZsSk8QN8RyKLGR5v6mfU2uXAMJ4FZ8jtKHuXKMHKFc",
  "key18": "dbQdb3wcPk945VMoANUALk6GjgumddVGLmsb4KMdW3ZqLie7gLdJZjRk8bCqdH8SM7xcufaiu3mmeSjfrCoVFoF",
  "key19": "5JZt24q9SPeVAYemsE7LCFzZ5iKePVK1o2Phn4z7zJoUFbrCDgZWPaAq8xfMSPPXk3tEwKS3uExUsYpzJdPrXkuV",
  "key20": "C6FMXL186Z6NNwEzrx4td7NjYXbRq1PACFsf7FHRJQV8dWPUzvbMSoPwpA6AzsL94Ray5giq9DSDPdKdB4KRfKN",
  "key21": "3BpwEw9ECH5pZBjYUuEiaWYkgs4R9dCecXBHnMwnZeSuzNdr7bjZjwjRKYrgDEYGvJrnXmc91vAFmGC99AEpVDeP",
  "key22": "4rDCAgP4H5YacvbgAvsgXGr28Xsy49rkjCxzJSW9CHCdx3BJvF1KcV8WGFMzqHUWzwLub9V1SJjpjk4ciK9H1WCq",
  "key23": "THdRc3Txv4qZLxSpN1DSLVhX16qguNFBa7fQCecxMpo3PhMroAEz2CCVZFicTxZqgH9SkPU3rnDp3sbCDCZUz3z",
  "key24": "4VPxyoPVqvnSxGjX3S8Y6fgubmCAmrzueKyXQBHTBk6Gq15tCTrkubBgZSRaqcK7aTR7odPmMMpLxxPE1mHA7Vef",
  "key25": "3TNh7PEoferkE1aYXS5PgYYVVwUQYUsX7vdcCgzeDWffbu1D5irhaRriWLYs1HBeXc3CUWr5seFbsktQLt9jHnPg",
  "key26": "5C5ahqDD1iXzNrReRoEnkp2am27Jj3yqmMUtzMNbwbYK45WMbSzLNbLQxv3CwtuBixAi3pRYcoNeUb6oyJFUVVqx",
  "key27": "LWCL6Ee3vaDpVMEmbLzWAvpweTUpRKzmisvUTitSKKf17E8xcBVMV8r7ib5SXzK5b7YbLe8hxpJ9fuM5cL27qi4",
  "key28": "34AvXoDhcovYjFKoaBYJ9RKEc8Jy1RdDoyZwfbvSSohKuqbPY2beL94Q4rNfYGrgBtcDZjgCig1B2RyK5cbBQZze",
  "key29": "5NTKXLnTzc8C8fFr9uVhEwGgRKjRNLx4dUZUdbdAkPQ7mg7Jz9hheetmrZpeE2BEP69mWHqP87CXyL11FFd2Dbmw",
  "key30": "3FccFEociRi2dLLkqEb6MBBHeJZnGjdDovNSiEt6RmzZeivJ52LepeLXSU5djFT4Su6xdkxjtZCSu9VStVw6FrvJ",
  "key31": "57StbJFRsB8XHaNd2DizTarCHhz1zXrQTBN8SRerwwjUomL4TafQbvZi3VKdTg79wXvidxm5LujhpnMzJ4nBWLy",
  "key32": "5SJDpUpwQMyuCere1H1qaHuAbKLseHT5HUJAYqa65AFnxB4JJ46wGLYGZ1epbLjpDHQhSKwoPraWzqwLGFsjZNCt",
  "key33": "43qzAHRdrqG6viq8SJHaUhZiczwd81YEh5T4qV96M1SoiQzEcJ8BU2hnwhTNvN3jSmLDXpQjuiqK7b9CAdzGtteh",
  "key34": "2GM6WFHV5KKtobXeAmghxKT1hxLLB1PzCdfUvUL1wAJXB2Cxt5Tm4ZZKXffBMSKmo9YtnQLbzxSSejjD6fMfTUig",
  "key35": "2sxom3wttmwfi36qAvKrZVqiMAWDjDBxaD8omFL8WHJupxuTScgSE6Ffqo3hqsF9gtxiLohJLuBzE2frNTk6Qyep",
  "key36": "5BqCo5MCud6rD5m9epBPPuDbqNTwY4aa3AUNuHw15TN5g7KHwSdehZ3bSuubSvMLusxVWR7KDGAez5KPfGrkdyVD",
  "key37": "4gXMwQ7npYFXAmTVFskQRaLKPqzksJccXnCz9n9kneKZBgbqwc9qEFPfKh3SHwkwTzxVdsNcQMjELNLoJZkToBcH",
  "key38": "21N8pANuGSqeDkkk9w2Y1npfB5biwQzd7waTAs6SvM2WvBAWLSbhCh52my5WuNjd2n7XkwMuJb5TADpordXPQLSV",
  "key39": "3fphjUCDyBqKTCzeWiNXuvD1h1wcPpYzVTNRZtx6ymTsENHAmUHEHimxaooq1d1ewDPysY9uuhqepbzZFhpSSevB",
  "key40": "CTDoHdJQb98duUE9dUtZuiWDW4xaR5s91A86a5Y6aquhcSm4yvsHZU95yY5AGHRGWQMPyrYUdso9danu34DPvqz"
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
