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
    "4Sdwi4Scpb5xxwRPLZSHjyMECebboKXBTXVKX1F4xFhjv3B74oBoM9hU1scTFNNFymk4o1p67vBuVqodqzpo6G59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RzQkZSvsaTwS9ubw8V7P2knb5wXmESpo9rKQtAU4UbMBSYTrWzSUYy52xdqkGnZXAVvrTfxtDcE9bCGFkLJGx29",
  "key1": "cqoDQUizKmjYeUwJx1bKmXrJcFv87oAG5wxacyVrcDuo5jNnuhQqkteoGrCWPFvuUqzHnURManiMcwXeN75Bxqe",
  "key2": "3NxyMxe8YN3doZgg4tiqJWbBnZ6KKWWTCakfBTVVDieysd8Nb5rYuZiraPMrAuBcsQW4QPwXKkR1mNU4yGzMU3RH",
  "key3": "4tCVZT99NnJyfpjz1vaLdh4AhLqn5bbYKs9ntgziPBtk2HNYqcxK4gybc2itLnHEKGTcsvr2Xuz6qvbw1Q6T6gPr",
  "key4": "2fLcbwQ5qxpDng7i61TVNTxgLDG5ZwCotSL2wvuMAGDnfTAip8Fv4FrKZpNziKJYSpUvfpBAh6hHvWXukf2EJaSm",
  "key5": "4gbh5LJZYtbf4TiZHkX3uimnZx7fmSUk9AeU6G4Ty5r1QC1uLfHjpNr385jKckuzXweJzeERh2oszNXz2sinS6RC",
  "key6": "4hXCXMARCjn1ekKxYQ2Y29hJEzmDKYoZq88GNWK6DBAKCCBGLmfCv7VqRbbWj9E3HvET4x1RpboSUcnasQEKBNUD",
  "key7": "5sdoBHjKpjxbJKsCAexGuYS8RpXs13eX6u8P52ZFn7cpXKp1Mm2SWejm6ZoL3gX7WaMyBt2SMrNqacuLYjZQU3bx",
  "key8": "5BtoEQGbHn9jVgBNmcp1VmfMd2WX9a6LJz17qt9SaWRMp3Q9ZAVibHZzq5Q7mGTSk3HawqwwE4uLmRaNZmodzCTt",
  "key9": "2ZrcDq2hYRBp4VqjzLMesjzHDypydfKr5XiPtoCZAbTtoocPekBQbjHR13Ty5Sz8yrRzFV9uzsTwSmKTVSmQwUY9",
  "key10": "2x4rDevtyjxwMafjDaZRZ95cbd3PRYLmCikT5AvuSX3WwCg2U6dU8BK5BZnScSNRKbx4ZiuEAQG9MecZpxZ2A8yN",
  "key11": "47AfXiykVNC6sjJEywoGtdR7ois9QMhiLHXWs8th7ynKb68wvuvrkyVTPnazC1pBwYbfX6pnSAAgxV65d8CDWuxP",
  "key12": "4T7vrRXH3W86R1ykriU7f1u5jnqRFAQBJH6EFp7JFEpZ9vWdVHRHrJkGpN4bWGCDmzxb9S1auij42PTJXnLishR5",
  "key13": "4NhuH87WtWyaihmiVxYcGoZij3fMnxxHsQb4TACzud5fzxXDVbjMi8yL57cidVBPD3sZYoBMtMeJZVtmKko7tCEy",
  "key14": "4KHxJrqqd2ojUfTRxS5Wkrc6dz3dr1G17GqMsE4HpqqZBWGtHzoHARVu3wZiz1akt3BGUWyfuFxgzpXkLr3T71xx",
  "key15": "4szFddybCUBSJ7DDht4QVsMngCNp7PKc2LyTZudYvsvQRFiGTYFd6DXQocp2ymw2z8ghQa7gJtVnrMjrzQc26Cuy",
  "key16": "4Tx96ddkrnReT63fsiDCuxodzuA3rcL4HMoQLQvxMrtj3dVbz7FXu4gzBMds5CKoSGeMi2jkLQy3viM6SGGk3Phz",
  "key17": "3cg3HqF7p3AwEyRGbxqWmjaEXzBp5dibT4Hind1EAz28hikaD3ZJQTaQGQiMttS8zwcDJFKv25dMmLShvTrJDFMt",
  "key18": "ZJ3BdbQNLHDNACs24qjSd4YMLRSyc5YNyumQEQtiGZ1T85E6BNJfPsrfBEtWduzp2rkLDJ5oAvHy9QZPsTcLnQ1",
  "key19": "5pYg7KuP9eo12zRvFjwYrRXx5sKMMaowbiz3T8ZJydMhKScNyrtmPZgPCRQQUiUexdmkLbvNrZgPurmXyJQNcSMB",
  "key20": "34ER7hvThAw2JarcEFJApHj6pkWbiY7qy3QxCB3bDuCtrLmyvrS4cTQLAZxZ6sMikvCurNBQvtduGau4Vh282DCz",
  "key21": "ZHdPf4XFJRugkF42Ze9B7DjD2y9rHCBVaLebFi5tRaudJnHGjWKbYKC2suuCrT3nSwqMRdr7tbyKhkC6V5WPzcW",
  "key22": "jcMpQ6dXHJfesD9oMyrRiB7D6Q4FYz8GGrN13fHQq8j7XNGs7FPQw66QVPoBa3Qken5qBqZ3hNT6BjTBCMzZyWq",
  "key23": "5DGDrf6ysMvJWy9XHn5Eoq6RtghMvzEcdaeAbat6YKvYBLUc1vKezvjCCSBpdCMNySVqkXqzugiX497itsyFjLE6",
  "key24": "5HkRps6BqrQggbXHGb6byWQunMLTz3UKxEjtoRaCpPLjGGDbiiCUnhpZaGbfghptbaoD8Fckyp3m2ugtETqVG8dT",
  "key25": "BJL9d36g59fWsfJU9Eeqye7cuspatRnkw2usuXGYjWaQ5NnZhiGtaswvALstDYkXFWRnK32X5HESY6GBSh7r1Wi",
  "key26": "5Pn87qPvu891bmM1S7g1CUczSpWcSkcd3kaP2uV6yTVPzdrE2S5MgSNwUpm89RgKcBjGEYcV6H8Z82QWPZqptZz7",
  "key27": "AeCtj13VgHpQr8gt9zsdo9brMHfZbyoeSCS2CoN5ek7tH1auYSz7DVvUKhYioeWJ76p7AztZkpKc6zATd1GibGP",
  "key28": "5kkWZz38PuzfiuKpEeTfafFveeykwkczF9H71aCu4fBjJYDGHVS3mi46uMiW32ZpK9sVtqbtgfmTU3YUMkPQbvCU",
  "key29": "3gXtZfgSxobgXzWLSf2ogUenYnP38cS4ZvWuJqGdGckPQMdZFUEP8h54thueV9SnuXfqtQZXKA4mooWotnuxFqGV",
  "key30": "8Mf2eUd1t9xEd6Gs98Twemj7QcQUouekjgunnnth584BTpEipV21T4pRhw5mNyBPr68tLxpF8GxR3u3ek9sb2uV",
  "key31": "3c4rYwVkry1bhjGFNsa75nXa3PUyNdqDX6RcVWqKrme3pRU4ZMhRkzKjBowvXAiNrFRVcum79HYpKwpZAMSx3SLH",
  "key32": "3mDs6KZUUwvbfyXxWnPRwavCEJCnR5Zu4um9h1U774qLmQEDf23y2EjhbJab1717Tsj95twtzKg4dY6vjkqUP4QB",
  "key33": "5cngXTA8U55bWxPH3janS7ad4MRNCpscxk8MjKFM1G42FvUm5YMUuCog1Au8EwzY8svucPNLZYQSdPWw6fWiFaTV",
  "key34": "37C6JKQd9sZiRRdxvWiBjiarVsbKiTAWLomXLZ92bgmAm1nSTZYZspt1PEWMnQu2ZDJG2Sr27h6LXFrkQbcPAGkt",
  "key35": "4RnckBGF35x3hek88jFYpFWz36vuBYKbovZauYvGLukaScJNDgex9Eiq7a8HkYKyMNZCu3shUw1dkNytFwFoLExr",
  "key36": "5ethbkXLGWnPj8E2AuXSSnKyVCTnFbZfHGYqcAumRnCoEkZGtqWMKihGjG1wiqnJmLM1AETxs1vKaABUsw4KDomM",
  "key37": "41F9kgEuSvBrtcwhoS1KtM4ZogWAFxEFLLdvbzRhbvTVa5AXH4Z4mxzvrY9MjamZhYbCy3JMocCqJqJABAwLvCfQ",
  "key38": "5BnjufVmCzaSPrY1gLomCizXWQcTGi5sMNm7pvxbM3UXNguouGkrShWg9jjj8TnB6zHsW5opDBDmEtYjMBNNzw2N",
  "key39": "2pyc81SWxdGii9TmEkcom2U3J1dHM8qVxrq8nF3S7Jj6M8qtgKzGyodEbnpVDeSzNL1N9aJJDPdZp5pzDQatMBpc",
  "key40": "224JFRLLuGzBqmMzCoZX54b3JRkVvn1kPHoVekpC81hPvrUYnNGAN3bjuErNTEbAFWVSfJ4VioQNms42Wt5GXcLP",
  "key41": "4dHh8tE8vSakD1VzuXkPdeKJ3dKwWD2nuA3mavfYiEiRB7q1yt6kL7zF9BzP7GLFNHgkEd14Z9mJjsQ9fn5jwuSQ",
  "key42": "5krZDcdM3o4KtHnERdtp3EcXG9U5HYCZkHNY9cjJiHNnctNXJmPFfzSev3fHm5jJqjN6QQLD2cASBDoQnbaXUTCH",
  "key43": "2f2GdnSDg7scrKEiaiqZbLA57PM7p1wvjbvfPVkYdsgLZKtwXpQuoDxVFX5RaiGthzQmka1tExmGFjXf91rtFcMJ",
  "key44": "37zjAFyrneTGD6GibTn3hQsAJR4Jsx2u1N8AGPzv1T3NjrE9buaQqLofdwSW6Vuck9wXjyTZEzaqwSsqChfEarnn",
  "key45": "iMVRZi5c3qFLrey9ayNjv7dyp1Fen6XW6U3USeVr4ki13zKXgyPQvWtGriCThrDGR5V3XEg4oJyMvH6gRNRB3eY"
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
