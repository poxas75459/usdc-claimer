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
    "4nSPQfkKtt149NXTv5HxKbksESpd5KYYm323AmxwC67PL9mhCzM9d9fYUa9SE8Hr2pnzZUojjYpPr8ie3sH28uJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qiP9PYaEeL7rSwDK44p1BJjt3mdkzzU6j9uzVJ1JrzWjXMpiUP6fddCcH9EhkNQBE9yp7M7HrRgQdgdyVmtknmb",
  "key1": "FXUo7BertPcrC6aNvsttPDk9b5nMr5yo5XuD9msm4YWRkVA2LFgg8cBWRcUX2AFjwyjmcStFfizEP48Pt2pvZxG",
  "key2": "463w8K4czNSYfG7XZSvG4weik4wJMCHi3LP28g9phSCDb57AFM21zEmvfPaTmggHwuABREEvC566UTsMZ4ikb59b",
  "key3": "9PrS4TTTxX3G5UEE737Q5Be8ykn4WYymwD4J7bYzdM5LfMy1EPdU7qHPi76FeLu6dtkjGLq2vaLGtTNwXy7kNtC",
  "key4": "4zEBv3bc4ydjKz4jDWPEEQtTzUzZQJsYykfgg8eP8mfRNuJTQx4dJSvYscF3zbcUnYvfWnYVxvBXmByebtn1wPwc",
  "key5": "4AxdACu2hgvGomhT6SPe6p9oKNjLkjqyEUmnuPPmL4pqEBBDBPzBZ5qFJhdxewkapAfL1h2AvvaWNvx4oMcZJ4i8",
  "key6": "3U3kotdwYMiJGGSLawH1qEhd4aJNX5nybScs1yRTERYeWrqwaE7Ghbtcy5aVNAW2dCLXL7YJ28qbjvhUFuWmGxYL",
  "key7": "xmAa4ctUkF2BtC4kteWh35TjAGXHArZ54ViSX9m9nfnip4vmUhrm9xXAR3UDkq11RsZkPop5tRxQ8ZRy7TGJcLz",
  "key8": "4PCSNar2rewFnwMnifPN3ox2oMdL3UfpFx5TBUCvYYNqQHScTGNTZs2vThnyf68abk8aivtaKbKtxFg8ccGEjEYH",
  "key9": "5Sp8urSQeZbikXqK6Yvk8yEsYhtmE2J94SCT97dFuos9qSq7HLyTGanukkNpb974DtrZunRTyeeduD2Xm17hVsi",
  "key10": "5BUu2kYKvF91kTvUgi1aoEPYQe8WLyJ8H8e7rRjDSBKZ2XjAV5hb378AAHXNMGFwDeNMtPNhL61jmPJMK9myne3V",
  "key11": "5LRanoPckYMaoaAbnX93Nbmq3NwHwmu8SairjaEsvJ3dLqo3YScsr5QGsuW7LxppvqxrywCz9Ps8XuMyWr8ph8qt",
  "key12": "5aQZMj5v2ztHnsjVLn5nkJ86A9wjv3b6f16FSEfQe12ZENdaVPcnmmpiLUm5c9raehaFWZmvJW8iYHGFQhdMJwNj",
  "key13": "h8KJBzbjaBUobDDM2a4KcG1QUajfBCgJrUiuSmYikSgPRhr8HqwDjc4CY2e4xY3pUqJGmAMP8oeC9UKm61ckrJE",
  "key14": "acRxvPiZsUGzy4NETgXke8Ha8ioQ9z6XDfbznWuBpYT4mcUjXwHUVF3jfTZMP6LjusCdTmHnxq8nifSQgjFAdQg",
  "key15": "2VajiFq7gxN3NFNgDUvdFwkfmqk5uci7eJqqzsoVamNzCJ4RmitVfRwaWoeHNWGz2EAxh6qHNJX1mLJkoosxViUU",
  "key16": "k5J1BQQac8tj7BRNcxHum5mpoRT7kBH9QZ3ZXUseEbXSDGmeiFZp644xUGKu4Xk2WsyGdwatKKEPoKxXUeXJdpP",
  "key17": "3y8FWYx1RcWHsC2XL6ea2QfA9PYQdUHZGV8LX4ejW5iYuYVdvmtLBXtXnrTFFywcyW5fihWjC9yL8ywysvkjK8hv",
  "key18": "4VWXEh6dwjdJXL6n1dbJb7ET3NtcBGRYyR1AbxHZeC9nV3e9MRzmPavFp8ji4hkK93HAzCZSnBUxJgWB7rUUvGCf",
  "key19": "5DU17WALMU5jB8usVepCzVq3GqLdciFB2MKxS4Z5QsxS1khpgHAyxBXbWJhc9k3ybzV78CPiAG76zbHseGBiHbAA",
  "key20": "4MECWbCg3NMgcG8dkEiR9oBR5VKq8YhizJX6z5QCTdH7QWYhgyPnnhhmnDaoDno14YzA7rUSc9AfRy2W3CMXSA3u",
  "key21": "535QUVBLPX7JdH6u1x1eJXyQpRMLu4517HSwGVtSUsFNS9tmZ1r8DtUEm5gjTcMDrJPKMYoZbaqKAQauwRuTd46x",
  "key22": "sRUtuCQxxDbeQSj1EbMHUF77yKmxFmpxkcaMzHned9WZ8Cj8oxbwiXKTyoG6XuAjssYqtX3nUiXsZJyyqB6mnLG",
  "key23": "25r1EfdYaAZcCWLPFo5MRbgmtJV3CcR1NCYjaVNYdFY5dNQ5j34mM89mh5RUMYi4Lok7zTznf6CgjAjoTDxDAN2B",
  "key24": "3NSmKWFR8wc1qwUxMFUMqQUMasNNvhN7RozXERKp1ptteYkJ1Uhuy4EPUuFuM5pc3JmA471pgfe9b5TujAmEAy55",
  "key25": "5n7gQK7S83KgD8czvyQuvfa7LVEyHsj9Ri5DxjUDTaMytJ1wWuoz3XjpS9VnPpiKL1deebH7LPQRzQYyfyjLPe1a",
  "key26": "hiBMb6z2oEu8JTZLKYpoBbGnb45K7nk3n5WN1XLXJyXKSntjB2ry5WYaLBPT3SvEd7pPGET3kEcDZyGhi833h4A",
  "key27": "2me74CGGJy4X8BdaR6SBUsqytGEW2AgfD881KxmXxiYvmu8McXDy8fUS1tj7jBLs28ngR98rgCZwcpFp2anV4xXv",
  "key28": "zwKhHR6F4xL1pdrUU4ZTUzaiLe6P8ziT5XFwow1QgzfNzgqLCDTLwSzh3uUT9qfNyAok1TzeMfupPYA81KrwEMZ",
  "key29": "5SxZQL6VryEziRvJpqXx2nzw9JyPSsvabetmxxqtgQZVbMZjMgtwF4QcEk783jhu7ckq7SnFV9GSwb1pjdLP2um9",
  "key30": "5j5SVXJgnGURQCoLb689KaxyAzebB8iQWiitEXwj8NmvbUv39x4R3rM8YbAjNtDTVZxys1X9sMqd6bASM4nY7i7r",
  "key31": "3GqJDeZpN7fkucDf4NgzfRrwmR7t6Ftv5L6jU4UtvnyQqrNh4oQHxEGNM1oGa6CTNugi31zDQ9UYsJccJRqJT7Fw",
  "key32": "4eH3gp7W6YaSVQFQRP8mnxydENENxXBaaEcYbFZg7nMBkoz8yMpi4DZvSdZprsQ4Fpey7g2bpdJpSsvYx8ydqi3W",
  "key33": "3DPCCM7iKA7STP3TVtNzAN4xwBBYmGMtcvVe1o9wVqWAceUZpndDjj19F3iW1Y18CXfxn9oLdTdPj742jg8bonv8",
  "key34": "5p9e5iFgKhzDQfvjryPP2vzrivcggX9Z8To4CczdqS4GofabYWDZHjwj49MaZvZDjK9fCiiaNHFtihhCgwfkNFEL",
  "key35": "5DWjsGviRs36XB6gWeeSiNYcHrUXkCoPQwModwtpDZPjhGGXtzTnf2Vv8hVciCXsnrxxUASY6SbP4VpS1UE9WNXK",
  "key36": "4YwLJ4ZtHpAwqmfGeDbiTLrW1PQzE8noNBFCdwWxUfmkJX62CpWu1inR5zGt8wuS89KjvXjyqV2TUwfV7VKtnyUw",
  "key37": "3rJX27uZNAAF9JQWbgdF5oGiWHFiSnG8XNzVhGqS733H9VCcSnaYZhEU53iESzMVASiHpv8q2u4BTPoPbBUBayGD",
  "key38": "4oJEX1gifSvuyLuvdWgNQbibZJ5WzcQQqsUCHgSxcbH478YzPfzZrmqRfXkCXxfHC3BgfoUL2eQKndY8ybxDMpaw",
  "key39": "2Y8i56PV64VjkPb8GWBVSWTMQ79oaZCRUJZDiN7hfD9Y2HFLQCDhyB9U1BrSMxBwThMB2NtTzd24714w7Pf2fmGb",
  "key40": "4KfX27QcyeSViwGuE3XQKvY6L1TRWwLLnAnCgMLJAuJbnQB9H2pk3JcSw4gbsB653X8HTn7zXTyrJ5EJ3SHp5nwU",
  "key41": "4rvDgxVwnazsh2mfjBmR9cBe15RuWsF62x8sZfPPqocGBTtneaYdyvBisMbRnV8trtuTgtFpqMtkN4NWSffeQGTB",
  "key42": "4HxADtgC5VMYpE34qGqxUv1jDkNnj5Uw3Je6KbE99r6jkBxKfSrowgmsKqfcJkuDEk2jpfXNT1b2WcuNwwD27hFw",
  "key43": "3FHYN9aBHrnJf2n63jX9wCwhMGY7PsWgSTA2HDbeN3YZYcyCMo1t2pX72khQmgcv3Jmc7an9MktNkSfAwYuzTm8s",
  "key44": "2RC48QatcRG2VedJXbsKsoYkTDAef43Juwh9w9ADuV1WWXiALLuZfpd5BRHziZRRPfaggvyN3qP1XVLf7ZSEUXNc",
  "key45": "21dQERYUH4TYUboj6YwyoH5gx6h5C9kuHEpMHQTFjMnw3hk7bAjhnv3r1jHE1theQAAajUfMc7H1ceZp88qfoqNw",
  "key46": "36SKgMCCnUyj2QUhS9brGfs9EjohexKiG1QSMHFwFLh5NqoCHHpFhKef4y9U9UUyDrRxTjMcYr8owfHQ8SaGXRJz",
  "key47": "48vrHorZXS6NiUNwAZS1jMRpAud7DjmZfp3Vup99xemZLB1Eja4anrKsLgQpERf8D5WkEmZXDAayvBxhstPtanrU"
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
