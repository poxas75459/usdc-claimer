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
    "65bZnB8uabBMocHkdPWrsH429s8sHuM6ANJFFEzyG4qvJW3tSE2KMLbiYx3x6Cv1iKNP1W5KnLfAodNwpWWtHTrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55qTdtRiG4ymFRyCoyzLzt4qiez1KFtNR7pSVVcnZDzgajQkWSg1XK4f9WYjQQy6qDQqQHnMELKC54A1Cppvgzuc",
  "key1": "3fVkv7bRNXBvs158EoUn5vPXh8huJKSSwRFpQ57gbbFduhCikfwFcPJHb37xhVYtab4ynG972Won5J5Hg1NnuU1p",
  "key2": "PEaTUQa9MvS5g2cLYmSqJBVKS3199SjAEov7CDwg5eB5EeFJ9eSDGnxyyyi9nK9Z5syabiEzWtH7aQZShomBjFy",
  "key3": "cfiuH59fAxdA2D6KFSZtwKQBN7uzPurWnyCWqMh3eQi4DaE4QkV9h1xhcNfqiMVGh5rdbCMHafLemHGHay9L5uu",
  "key4": "2f8gMKPNjWJnSxAmgwRo3UVLjeUYz6oJGVUpVUtRSa8hLnvFGgQstLLdWa3s2h92rm97mDcaWvWZkdkpbyLreGDW",
  "key5": "2j5T6sq1JnWs1GsML7GheZ3TfL84Uswvg42X7yLB9tuqjTZsYfCr4X1Zviq7A7Nf2rnaQGuufcNHtAbiSjYNKgYp",
  "key6": "5aKm1KqR1QDSP8FLjx79qCgfxx7hiCMJRcCwooZtJivZaXdVNZkR6ywCuW8HAfKbj3K82EHZnxYSV3SEhZgj1xpc",
  "key7": "4j3xsp82Gemv1VUXRRdcWXTexJoPz4qdeWGY49QbBjdJzMRJKgGwBLYfq6q8W88wCUGRHoBDhDddDTnSJS3heUem",
  "key8": "A1337BZEFXXvPSP4CUjEZY8JSaYa7V7YQidkTAPSSrxhboG2WJqHofBiRnM7j2baaHouxx2KBf3rXrN25Go77Bo",
  "key9": "zUDkN8vRmudH5r36JtNZqrXkeYja7TMs8izrbL8KBhi3z8hDStrgvMFZu78i2eNJLj3Rr5EABM9wB4Mz6xbH2Ef",
  "key10": "pSwUimUngGRmWmkokyCtNuRCqqsB74naFMoASrWQ7kJNBwGibk6M9fCeoA5kKiskjfLTqPovCXP45qkNmyLKiWz",
  "key11": "4oJsW9e9wdqp7By4wJizukuZVNVn6vg5zSx3DopiDcLBiUHBWbpew4kFN726NGEZsDSvfqhYFamEDxJNCMPzS3LA",
  "key12": "2vWw9CyiQNW9vyz532Vbq2SmZDu478tdyN9hUEpoSAHqt64jmdeVWdXAp2THdb6s4iXidcmyYHcLCQ4c9ZHLMQfH",
  "key13": "oWMnESSon6vrskUL8Z7VusbQaAXnX3Um5W4YRyvdreuupb8fwQRpddMYwsUDTwxDUask4NtLkbub7mWwNfjHLQF",
  "key14": "21WDsHK6aedXpuFA6eUKADwMCqsMQUQoKabfxnh5nJ13mibQxBSKneH9HDcSEiqXuQ1QoX1WqLxYNPezeQM38XCN",
  "key15": "655mJsNoZQvzkxpRyf6DEQZzw44XGBCtBhLWGPis7Gr5iPqLW3LS8zU75S14xqkh5d8rPAUFmLn4tyssRbBy5Wb",
  "key16": "5oDcXmzQPxjT7i98gyhEAUZ3MGZvxyPxYgwuuKXAxnLin9GyEFSr13CfCMd2NTHF1vEw27xBb6vcWQm1RDqjjJTc",
  "key17": "5gMJB8MB8M7dUboWiZ1ozUHDa1Uc8QjoMwCVidPYc7B69i4j9jZcChAHSBcBs7CsZCmEieFoQAqvTgQsACXPV1Fs",
  "key18": "zkpwrd71Mk5mbhho68nPvMtXg8pp5B161zrbB5NgqVuHoP8qqpucFsVPnwFPSySHP6qe1a89aqkR2JqAuvXFJNo",
  "key19": "3Piu3Tgwva8LYuUgsXSuvEXbHGw2kP4We91i1A2mnJVgJeshZTE9b7WfTa5TxMrAuFUZsr2RsXWLbj8wtDW8CP4E",
  "key20": "ECqRegtBEwhbobikeuJjVvENUMoiLdfh9gP7N1qZNTWkCH4aEqhuzDzrPaYBD8inqrboZgeKJcXCJFK8aYh9mbi",
  "key21": "3dYFs7HZGQmKf6FB4zjVkEd9eiLYQintC1RZceGUxULcfss33RHYbMsbu7aiXgc22GhMesXTfF7YLh6vYkXdgTqV",
  "key22": "4W9C9XYRdwkpPRjRDjkhkyveDLnqz7xohTzA8DiAkt8ZJN3r8fHscEsL8fhvvrAPmvgTjoA5MWyC5XHmQ1neqV3J",
  "key23": "3k4DrSYwAAMnpnMef9GUTrakz4G4W1P7gvjm8swb8cJRFED1LShJa8nN3FoBwVxvewFoQWpKxjXfSHX3XZUWMehm",
  "key24": "5Zgqj9BhRmimmrV5dWgYLCmr372fRJSrHD8y8GfY6nDKdHkCSh7DdbjwHE1TuMhPYRuab9CWCEsA5jU8h3XoAejw",
  "key25": "2sj8gVEPZogV493UTvpvaFnH41W8uMkZFsgjH2ybC2TeU8KiqpNgCsQmasJbPgBsuKhr4YhQkKsAFGTvjtKqiuv",
  "key26": "5ZhofdHdKBHoV7LMxaBEHc1ZkCoWS5baqDgnykwR6CSAqSyqn46JZYS8zB176wScpSRid2nWmcbXXY15ViCeoKTf",
  "key27": "2oNwwB1MsPbXDT5RPCsVYPQkhfejLjoyZh4yJfQUCXfrUp5yE6SnQuo1bJzsXwhLs8ZaSDaixs42k2DnU4DUZwJi",
  "key28": "5zwwMEqj1JB86bptWX8SvcdP9ecHcnNVPYMmPYrXZARGtsqDgWXF3nt8ypR8aoPTjCqWHSyFc1mNq1ucL4rn5zJG",
  "key29": "5pQ88yg546yCusCR33D6d61ZmAdzpQqkaBnTytPmAFVS9aT9ALfGvoT1FhWuTqrJ5xh248Rm64Qy2giAHV4Yzdeg",
  "key30": "5GNbQpZduD7m3FiyMwBHgfD6Ku1BxdeLH5LvpskuppGDe4pU9U7tRkU51MCZRpMAnirsayaizk8iL553xSFL5ueq",
  "key31": "42LcwT5Y8S5cES6DynBKn8sWokaDFHEhY6Cyj7fSYrh6iRaGci2g966wV5kUMgLd4CP6i5SeEGFJTLH2fBQ7g1K1",
  "key32": "2mfQrgKSA87ojyrjESNusakzUJrc4hCA7SUgEH6KyXaH3uJsq7i8QbPhJU2xQx1ydfqiePL23haDyYfRiW7z9r3S",
  "key33": "7hLsy7mr9Bf3hKnUe7ar5ZKhisyjPXWUmLraQ3yuVuR4P7yZjuft6J1FCypx1ccB7G73UXdkwDuYxvucnFiTu78",
  "key34": "3P8vCfrEeSgQm6KnAvyBWhzGFqG5trWWtZao4ksNwuiDSuSsmpweRtn6jfvMjSLrLiC1XReyeRSmfFmgRmkw5Q9U",
  "key35": "3Q3u2L7BxYGs1SQxVYQSVZiBZMztbV93hWX6qsfRqC6mvnGKrC9CzYa7ssqRXpDEuLH6Sqx74qVmCcZ5u3xWN3uS",
  "key36": "R2FKYZjN8egJYvy7C9BFKhr7jAZFiQfnufQUT3ks8nZqCBRh7KbjySktGvVHSxVxkjXEanfYwhnEFAPDSYF1WSr",
  "key37": "3Z1dTbxy6NnDkMot14sz2KzHUJMqsWUbatcbPjZn2SXhvrvD4ma9d3d2iScyPyBWprYZzPk7dZAtvLxtD6oAzGAh",
  "key38": "XRnnrhRmquQgs6pnxpaPL3ZxfD8FZQNovv1gyZazHLAvrYvKnSQK5SfA4PfHTz4PmLq4vgdTY6n6YApMxoPWYqn",
  "key39": "in5PNanrWZRv5efCUaZJG3R9geAkHeTV8uJKsauiRWDQ5JvtPfDKZAG1oarTqikCM7cAq81gKyj2jZntLvLkKdi",
  "key40": "5k6P6iBwegnYn7gh2Q5YvZxcmMbmsdA5Kxju1T9iAZCqLtnqcB9SsoeD9uttLfmfGDWHAFwg6HzLEdYkpygnCdwa",
  "key41": "CdzhzrBus8oqRQCHgisEiWfRdC4k21C5jQ2ssdGkPn2Gvg8u8d7kQvPe2swZPhRuk9t6vxeDXgXc7NE17uqF2WL",
  "key42": "2dS9r8PHHaq8GiP6rAjmdo2Fh9eQDDjB9xaEqP3sDK8f15ckjbkEMEL3wD2wTFVCLExAz9i2qucuFKhrAjvj1omf",
  "key43": "3hp7uwJc1kpSPXB1Q36iGhHrH6TBKBgeJKyYQVPhbAbYLjmKS5Sct9sW7B4pcDwp9nw7mW7fmcvaf6WZ7Biqp5yf",
  "key44": "5gARuQ4R6Ysy3J8fCrxEZZoHsPvcpLBRBzo2PiFxyeLGABq56MaNc2vtJw4GNcfMxfvPtLbaaKvVNAKx4WzFE61A",
  "key45": "5XM3nDc6iRUxhFofT1yQ8a7jHeaya7yXtvXuWgZRbbnBaBxZUsGpDCwhQT7eSRdjHV2A62gDUgqs59mufFe1ioai",
  "key46": "65YMMY4evoYHvMuD5pq72JC41wLdvuHH5hyvpx7agbvrjnnPWEDY2ZMxsNNG6XecJaPbC9EKSmJrjoKGbd7CgWcK",
  "key47": "4ZuaiLtGW4Mwn2LWyPmuc6BuLSJSEwr8kbyBgAXYb7x4tc7GzdpWsGou1Eq5pwSYBQWN7bwpKTtnkHHWFqEuWPpW"
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
