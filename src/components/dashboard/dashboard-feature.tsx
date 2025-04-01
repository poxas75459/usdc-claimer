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
    "Fzm4g9wxao1MnWCzzgGi4prBb4UkiwwfiDG8bny3GRwMLjnDKyUGfsByoHATMwNyEbeCcWnJJKTyv1daHrKAs2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T7N53e9FJaYzoZ3uGpaHt89etfTAQeAz19mZYm8XWqRtVjCegxSX6SLroDHXAxLfKg2mDuEmT763Zj37X6rJ8N7",
  "key1": "5swkjvhJAz3YfcirrzaYeBTaEbqwjHyBM3R6LkGe26713Lvw2vXC1KzXkbQkWrGixHnSFZhnTG9R2MfuUyFscMxe",
  "key2": "4vRHnYTCkYhmA1Bt2J68ZGe4LxprpUcSMbShUut8qCvduvb14C287CLieBD6hKLb9EgchyUqG1U55eTkijUuwCwi",
  "key3": "65GKJrjz6HdsTQwjweXrVJRERsY4TSVMqKUntscooAhotzwW7cWx9GYFagi9jUZzztJDPdUNZ8EsyxJxXv8BR1PP",
  "key4": "3DWF1pxV1Ndu3mjvEFAhKqQ4hoFCicNg3UhzSuJy1jWVTBgKQRaErfCZBkuiqUx7pq6Zgo9jcteSzHwPfFTYMvEb",
  "key5": "2RfsUEQstLqGmfhzuMMSnvvR7WUqU8hgsQdK1jkRQiHL1eb9DvYVhNjMmsPrJjMV3iCcagGpj9a13hoe4FfJWxFS",
  "key6": "5CsAxSUDWCaJ7BpujMsHT9wasfvgqoX7pxgcjvCr6BRharx6pZm3KayYWMMjrZVWKJnugS62jeLQVbkpSEEgwgd6",
  "key7": "5MM9Z3FhofYZ2ShpTu8ywfuk6763sRTVUDphnVuiYnPyXdzjgykgjsv7vAmCaycMm8VsokdH8znUin13VNN3q5V3",
  "key8": "xcTWBqr8CcMz7zC97GZ5e6rmNq8otJxqoMkSfeWx8dCbPLnuqDD3VL8ccsihAdX96iL3b5dvG9PThPvNCh3DzGM",
  "key9": "66zvcbUjULM5QnfCq6b4czZs73AHHg3gnDHqb11U5tLrqZjaEsSDEe9U56qmWk5YsqMAVZrUeT3TDR1gALPkHc6T",
  "key10": "4Jp1TrQyChnrWfNRixC4keSLoYoBWuf7cwifJkDuaz9DC47yaoMrDWQJy89RRtaaA485xVsQgY27rZAFERy5NM5K",
  "key11": "3PQ7jZbYmY5V5VHRKDmXAGJv9JcoFqSKm9i5oMdjbARGnVpx7ej5VMsGpvd4qB5cV2okR6QkftffnQovXEB41bSm",
  "key12": "KowWL8dvxDQzxJKL59igs4tbTvdbN4MnnhgPPT9YkAWoFRqtZUHJQNhBvdkjxcpwEjjARKDASwMDHiCo72RnSbV",
  "key13": "zywsftZNcgVXJzvJ6cWtfmZMsz8WcqUtDGV4Pk43bWKsZFr8Gk7hi3o25gT33EudtQrhV61e9qzgBxZJS6npBBE",
  "key14": "rLWV72dWdYvFjCWLNwTqFPK8rAeSWyFBqpu1XyFgSj9R5a5xJVNSVB9QpdtRUZHdNKyeujjDB7RQQoXacNedhn4",
  "key15": "oXLYLRDLRvxHE87nzu39MQvG2SA9ZcPA3n1o5TdMSSu5kYTTYYfkjyymrZy1CisiuBPtyEDijEH1HLKFPhjVap9",
  "key16": "3j73ogaTDqbrm3zMuWHhdebRxGBjPy2G8dbCoZKZSaSxXSRXTJtN2y7CVKUPXLipYFXRe9LuewNJmCU2L9tgfkHS",
  "key17": "RyEbK9CN2V5W59xhdv3PEa99tfc9xAK8jZqJqBr55jzPC853iwJEaJ6LMpShT3Cm8DkGkGMiJUx9AvPSoGyJ6cT",
  "key18": "3d8SqfsZZkrEq5vyYAsfs2av5ZD26UkYX19J5MvSBUe8FWq9Kk9wCxRZ8DFTCADE43vzR2MCyoVPTs6faazGwt5q",
  "key19": "5hLFV69iENMHTdAahXrbV1bwBMEM9kDqrz8DtdvXkQ8ZyZwaMusPhpB3GmLtoJHsUDHyoLFE56qyqcaWmozzptMH",
  "key20": "KSmkF11pdJAHxg7h8hPdKqMpPLmtpiRHgsVuxGBGaf4QKMpLHVCAg3cQ4Fv42RjcgsEuE4PfMxMAXitnaRzqWXE",
  "key21": "2cBQU8aaMWE9gFFyyiCUmS2qEtHzUp3dtL95jpA6uUNNrGszUoH532CrT4STW3emcZQyCkDEBskSCfWrRwE8eyYi",
  "key22": "4zabg6pkNR7n1vKorScNtLXpeJYU8J1JhEv9EWwUew89DtepWZvJbgJcB8YYDU7UeUggayi8LDSiUyxEi1on4Kro",
  "key23": "4rc1LMreqiA4LJJvpoJo87wqyP5iEaY7AVaTCNxLrZuczivm7abXuk14tHREjVd6929zmyi8EdeH7ec2dkeyDpko",
  "key24": "mnibbZTGn78VwWsmWuneoLbqTjMKWHBne3jhTqtRM5a1hoimdN1i7G6wD2ztH7RLmciymPE8XNK5D17h2DzbCxr",
  "key25": "3zU2wX68CWN8Rp7PMazJP9QPjdjkV353EVHFNREUYtJnQ7L8XDebEhMoy7gWTpP2kkwfyGocUWTngLzkW5ZhnYVd",
  "key26": "QRAGd3cNHguqZMg2awFJWBudvyumNxE9gSQxGNzCjXtBJjFcFrkr5ck1TxYg2epBuGqei6WAFEjhYYpDaE5VrKU",
  "key27": "4KL9hArcqhE3LfYptuHPLa2Gm5FAastKUTnkJgL6QfZqB2Pn5Zf1KfvZpkqF4CxqtzBzbnH6AwUez19NJcXUyaxi",
  "key28": "2gfrJ6p64YyQNpT2GhYuFNU3cyToLQpdhH9e9UcMTeGKsqQMn2AhSEm9S1c3mf5NpL7TPS4tmcMwir5RohonWqF8",
  "key29": "2X5TK9VYAmLQiFvBFPHGXgBnE94vUqstJip4fATypSQPb4fu8E8Ni2DC9aRNut7eia3QrW52rajQeT4NANCHwx4n",
  "key30": "4BkbXr8mLQhm1M6568YKz2JA2upcmVqgnsK87aSboniwVPnnMvryDLasqEWB6ixPP6nSJqfntyYepKEd2f1QYtMg",
  "key31": "2f6iYxdGGYcnHYdpfodvq8A1xHqPejWkTSUZiFDGhyTULXK5BrzZ4HsXFJWV8RbzHqri9Fzy82DNRLpqVqNkzGkD",
  "key32": "rNcFgmJFJBiF4CBBJGyWHEj8Ym6Zv3wxJNHCTSwKt4CFcgUfce4eHiNrfWturcQgjJLGXBYdzXsW58AwkNVfVgA",
  "key33": "2LKJ13KDrrR3D8wTDMGJ1rDUrhCrHX47hxC5jmpVpoQThoXpnjpyjuZ1ncQdTnnUyfpdBp71cVRqwW4wb2UDjLQR",
  "key34": "Q1rWC8YMuoBfrES2TbxHdVVkAVHxXAYbBKK3HUNTnJtVog7iguBmo8uUQ2vCiXrF3SrG6pC7Ho8xKARy7pVisf5",
  "key35": "3iEo97mjnPRGn69WTihK8gbDtnenhYos2pUEt76feq4wdbQCFEdrP816SQtqBZpaWqTEPmn7nQhBi5kCNoYPY6tS",
  "key36": "3WYdKyg64Mk57MyQa99LXpAeXtchron5pgP9o995DB1eMCBN6XArQtXv6rDVm7zBRnEnFWJYEVBier5JVSUBucPR",
  "key37": "3Uo8r2bZ5tQpRmCNvrtHUTakKTHyxygEB5i1srNtcTXjKg9NVsEAz6Bb4ykxZ1u8ojbg42VRnFjn8xVS8GMtYajM",
  "key38": "3LZDSiiesuRNqUtsk5xPdGkrUmTr89oEYFWiHTfvVa3XCcbswby2cBuH4DA14zt4TKsPRW36FLqvzKGtgHqiFfWa",
  "key39": "3PXoaDeX7oM2wjq2Ae1GRUQDjDUK9DTBJqjCKUqdr5jmfbberDM9YXUZtPRxoaxSskFCARbAfdQjtD9FgtP4Sq8f",
  "key40": "DoU6E4HGi27ttrFUcJHdV7Y3BHx2fhkJT6yEGoLpAGm3JUeAHX2z8YkCLPf839nbeFHrfNKarjVuKT2g3Xvj5HX",
  "key41": "5rPSR4EzZKq7t7i1q3b6LimsKnuch6SgiU4Vg9bHHFyZ5HXcfkJuJHNQKFpVAnnL3euBjbiY8fSHjrr6DtLJJoWk",
  "key42": "3k4srZmNATzFvMcNWiF2mRUZoiDEx68Xk9uQTiFEV9HNe21EevvraHxsNxBM2CyypUUYG8MMuJFf1nviW3f8QMko",
  "key43": "4BF5CdJLedTCXa1LQVpiSWMK3g9B74ihecVA5fLYusPEfZDfkCWgMUSpHcQvPiE6XSje3awiKF5EmbqAmPFzUCWD",
  "key44": "4MMcywEhqUo2HofRv7NHnpzFQeQ1bXeDPaUuS1Xe4MeoK9YnqcnVvEuNr8WrjExHJ6UXKmbtYggmGhpNoPd4NmU7",
  "key45": "5152RrMpv3zvsYQMvoEgDNZmGMHdWxc5L5bJhz4EJvKRfFtSgitwqtcvZtrUiNm4vM9zFe5KXrNafunh283d7kQR",
  "key46": "J9n83gXc1B2B2gQ4JtS7z71asjXVmENNak5pzcwAqGCnHy38LnRPXMteakrhkdhPXm7ue8GW3rLY4WTWXWVT3Ai"
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
