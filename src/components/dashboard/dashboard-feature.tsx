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
    "4SAAattcKzdPRWwkbkJN7eUWHpfz8cw1pr5aGWJyUMdNtwZnC7JmGGfVqT9AefsS5RWrf3shYzDWrXFnwY6z8NBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oMEprWRX1NbWSY6npTXwoyzh4nVgTTNGkuygQdTk8aDBYQBUduuDM5VPP7cXa65saQDqsZUnz5eQpAoYCoBNH16",
  "key1": "nf2P9h5P3hVRWSXmUZWhnsWmuMSAtgYYtDsiEW3wQS6tn9p1y5uVz9pmghgmUkDQhxLgFRrDAeRuWyQTWVWQkRy",
  "key2": "26BA3YTisTytHQKbmV3aakife3Y3qGkpVgZF4g9Ae6c5n4z7m8ehRRu9eJfchxqBqaB7V8HGrQoNNYQgjWpLocMY",
  "key3": "zGuWeo4UgNJ7cNp3NppGxa9zFtYiJLMGM52NBRwrAzqVM5Y1WchfshnYVsvtksXuFSfjGzFWMLBrSdPBg9w1rTb",
  "key4": "LdEPncPMuvyvVP7JWQqDacTdJJjz71Lik6G4TjP3JQWZsve3QmAFzK5bZGwgnq3W7MW8EkU4jNTVkXu6TQ7isAx",
  "key5": "3gKejEvxgpLzVURchsu94djt91DyZiTLGmLf4MaCVxmi1zmzedQcA9RuK2UNnoSuTb7WV6UFanjFcWNFvcKsyqP5",
  "key6": "5ahPL8BR8x7MAFpPjEmtazhPPBLzpHfjuA4NTBT77UrukSeNEFCpvp79hAnQ1PsH86PHXSvPpKD9FtB7MLAV6anH",
  "key7": "3YBheTeMXuYcJeZLve6CJ7VwhhUhPSYhUsFB3Qm3a2dKRnbm4SvdymQS6xv2wzoTWsgJYenUWzZuShwwpEeFTwpk",
  "key8": "4778192N31uNwqHNi7RtozfyZuB9DH49EuaJGrfmYsBuRnz7SQuoBgT8BwidwVvqhmEZosk5cS4JphLEFApep6XT",
  "key9": "3apMiLeDDcNBkymCCjaRs7KoaJrmjh85yFCjCLYAPv9PJMvz5GhmTDNS3aT6bkge82dUgjpQ6g5VXH7p72pNFW5S",
  "key10": "4tUCxhYAbFyQaA5GxwrwukuFQJmNyMzKjaRUbrkEGwEUG5uMVPrd7BYQqRfL4PyZH2xnRS4fzVicrPkYUbYqWetR",
  "key11": "4EakUa7Uj5VzDS5EC7LjMfZetzngYUhRvYewUqPRu3WADd6Hwpdo9UVScspX22svAhrN2APyzHRwm5xK1ZUAzQyt",
  "key12": "19DwPjiAGnWUhuUBpV8BSa9RiU4orjhxRhnw9hp3zR2BNWvE1BT9v2TfBHB6PKUfckCR4vZCavjaidTBWb34zoR",
  "key13": "3vgewrVcnsQuqb16QAqfy2N8fSyyD2rJiMGtghXp1WVQudJuazGtYD9PwbxFkuePeHSzRyceL61Sxt3d57xiLH2S",
  "key14": "4PC1JjZB3zuRovaW8KctNXhCvNoHKpSQF6P81xWPeQEdjeUkDwyZQnnUomYYarb1qxfr5Pu26QX4uFvvwjxR1ezY",
  "key15": "3xoV8xnNe7rSXU99XgrvU9Cc2a3Q2d7tSMvBUj2DmmihHsFKJksSaDhodYcTjimDRmuY5sTMcegsmkcsRGoPowJ2",
  "key16": "3BE8KLJ9CtL3eGJhxwqx8pvRSAQZ4nsnPS9YudZJ6GG9B3y6uW9hYYxBtYqLEpBdRgrZw6jMm1i4TPMgJC9HCCUs",
  "key17": "2co1VkBVzCehE93eFTqELFxCxUUJCZgg4ZUTBhy6ovCiFarwooc7GqTxjdz2vkwbhp9pU5HVuvtTiAa23Xbhimg7",
  "key18": "kmbFwFpDSqhiAc2dxManUecDz3cf8VoeucDtsA6jhN7ydijUCj28BQ4thHc18FMr2TDnFgeYJ2RRUompdfFQsst",
  "key19": "4T29DF22b3cPZQSfEZ1sSDE2WjmG1wpkhGNY2NujkAkFagVbXrGXjnyBWVGXyDDG8W3FAgvg1N3fEg3kA58pvWv6",
  "key20": "566M6LkZuNYzmABJKVsd9rVY6t9YZx99P1mjpyiMPNXwyAo2ydQYPRifJF4aQLcdP1HZaYLcogVx2iYvaXeMs416",
  "key21": "3s4PRmVCLnd8twLNWFVmSeuw43T9PZ99jgRqiSqmFNTagY7FTtEBocJJMNdQ6VhwkigMaumTCQJTfzfMoTApE8Qj",
  "key22": "5E7PLA2fC1M7KKW2n8xSWNcu3casRjWiZ2GZZ5qMEopHj4iZAKqJMScqoGxeen4CwrT1Mzjnhs9Lnq4D4ohr6vaA",
  "key23": "37JUnXDfnqAKWgQHPHCTkJz7RYfjHwyHY6NMVcDRn6ftS79rKa7D6qSsPSUWiFBMfccXjHu8zwKBGqwnvUbaufUG",
  "key24": "65Gbp6HTsQbPCgzhtbhGFwCvziJRnaMS8Go2KXRss9xYi7ypLC2PkVi4rUHwufqHv1pkebh282Wyc2J425kaQ1Kj",
  "key25": "2L4c7MToUeUVvuWQxCnMgJAYmMmwiDoDFkjUYmWm1LMj4KoJxtAL5vDC3uusgzErzYssaaSso2VHjLYHxokrYnBH",
  "key26": "4P8mWCWZikHANhjcYx6ztBBhpN6TSMz4ky4uBmawKJADf3XW9q6ZHbL2z2UQ37ZF3PkeTCjxeasNbc7gWkdYJfDn",
  "key27": "2KpVqB9m89G9gQGYkH7argGYKP2YXC3uyArd6NmWtcaoq817j5a9J6Fu7kd9fKd2rZQ3QNwhyTuHGmMKQgY58Ad6",
  "key28": "57gaUztzKU2nuHk5JrAbhZTUzn4E2b4u2nvv5jAAEmMPT1uUN7ve9fpt3H2bE1hbkV4Z1R2mUXxjwxZryDgqPVDm",
  "key29": "bhD7xndMU7stV9qQke6EHpS5JtUnxs9oR5iNJgWqRvC4ondT92MGiQdJvNrBBuRFHy6xkXbBirdCV1T94Kenzzn",
  "key30": "JkLSLTT78Bx5q6rxGS1GTGfFwCyAvgUVSAw7TTiDB3A4Lr7LZwukcWpNzMzMG2LPeG5qmFmppqsyRUGWLnUBkHm",
  "key31": "3AuwRo347mgn4dATerSJhfezeMJ42EEfxfvAzmDLNcCaUS9DgFXNQnkkDZRTQg48viKtiYgRnPRkJXMaKHjJQV6R",
  "key32": "5yDgmx33hRBgmPodK7hBTuA4nUFBWirn9Xbhs8tKobQXuqsY8a3YCeXXcga2kjEHB9GKH1dF1X6He1APaiKDKJSz",
  "key33": "4G8hJX6NQnHnaGGLQr5C2BU4exGMPPHNmXBGhmYYefBmmsuYpi3J6Z2dDrdneVgCBYYb4CrL912VVF6R5AUpRQ8Y",
  "key34": "5XVL867zz5QiGPqUQt3sXoTSBuDVoC2wF9FhuDFeMA57NuzgyeNJBqAhwF7c9iBTr97UUspE2vcH83LsARZNooQe",
  "key35": "3yMpgHSbvSpZRKuzQnXGUU7CschimbTzkqAGeeVUVWopuD4ruxKmgLUnY7cLueT7zqBK8oztDJ3KGkZPW99zaXzk",
  "key36": "5SZA7FAwBMbRwhhK2yUSy2pHmKNAgcHmjAByKmr5unDWppWKAtbh1M3xCG3cnmQrWrRvDboUGGRHoDjxTnw4qFzM",
  "key37": "X9fxvux4JDVYopy7SkY7Snq5kGhFpH2bVGxHBD84oMqgadm5mtN4DfBsEstc1edZ8QLzaUGnS87oeRkADAzU8xQ",
  "key38": "5dNQn1vN4J4K6XZxTWBoCBn2e2QHkCb7trziQRivVsBUx4zXX9gh2UU5UsAU1pnRzZDXc5puU45kDLgZWmcRyQjT",
  "key39": "3cMdkk5TSVR6eyr8hVm7HRiJbndifyUdha4xx5fdm3UoqGEDUmDNxvwK1AN8qXGVdMGf3s13MF9ox5ihyZKn5W8w",
  "key40": "3Pqmwv6TNqn9Z4rc3g6fBxq5j8Q6B4Qh4pdsiCeDySyGFoLGSGPBhTc9tVE6a33GrDccscBvfGr54b7dD6if1kDT",
  "key41": "qHYBgSF8ub5kG5Ev6W79QLjqKBES7aS6jXasSWURrfdu5n8a5TRfr5sdUwd6Uhshs3YD4YarjnQ1ZVjpXmQEwAP",
  "key42": "4cHWHDNustbYRxHE1bb9n66fYCRT2csDx2tC67YaQK1zkk4Ygj3KKCXMRx9bp8aRy1P5egXtD9BjKLY8k3Eg5mwW",
  "key43": "5pwPSNv53YGYATi6ogarAhmpT9VgkRRWucuLXp63299YayJvpgc4yCnLXi7dWPXpGVisyDvXXbpgpwJwiFL2F7E",
  "key44": "2Mvk7SvZFkvxvJkKbtHtaotrXERNXDYqqXX87SHq9FjPWaWAN8CC4WUuV4R5oebn7vwH4bxBfk2av3VNcQSFsi7r",
  "key45": "4hZkopmmDz8UiFumVj447iVvYSq3p3XSKPLsDrqyBbiYvAXso7PtuYPFWDyuezjaJGG5Zh9CurvJn42hfZCV2YHn",
  "key46": "Wbvg9EJ4GSdPvaGqjPzQzw21hg8mzKXkSrTJQhQe48hiSsAa8Yv2kX9Pkzqep8wFd43TRHAqE9GTDkuKaaBLMC5",
  "key47": "5KfjcLoB5xQKqyg1NWDMfAr5bJfEGx68HwBvNydLr8j9zBHeTA6zYiyvwRe6ULHrWESiPdnVRD7EYiE5aFSvyw2r"
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
