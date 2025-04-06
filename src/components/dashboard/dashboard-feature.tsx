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
    "4feeKADvGP7ajFiNN8D7eXNAPff8uGNGATjueXEU6E5pgbiAZwLQSSmMM3uXWQ4A9CeSbbMCQd1m36p1i84Tqpyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lk82t2Koi6FussR3YjBunmuCYL3TZmdFeBnsqKXX85btEiMnrbgkAsGbe8yrNXVmTazUYUkaDXjW9nwcxBHEVHf",
  "key1": "4o6g1TPUC7cpgKLwdmvvo3CjrHSsQEZBDM7ewftAmHzM8yTJxV2zbTcP1qGvBLj7n9c3uiaNGuuXhkcAFwo8azu6",
  "key2": "3bTNKmcNTFP226ULJWvkFFdmngpvu8sG189KiAKbtnTHaVUC1Ui9b7NhrCxnjAmB7Pzpy2WNBLZShBv3wRLEMVk7",
  "key3": "2HdiFZy9qAf4oXZGs1RXG4XZjS6FELPMb1i911p8MCqYVYHv28mbzbLWbXUjsrpyCtm85HMT84KnsTJDCtoXLEtJ",
  "key4": "25rswKxwxe2CKpLjwoLSXxyJuZ92T8LMbn9ddqhBA7bkdz2TNa5nVK3XxAoT6AgcETPLp3W7J23h3Zh2xdB5LLUd",
  "key5": "15rGGecN9DXUGD5eeCQrUgnA2dApWbzfCR9u1QUPdcLNEeUrYPZCo2ML7SJa6cXWV7w4iVLphYpLc7tVu3587Uo",
  "key6": "2kvKS5xFPURTSH9s6kRDYbW6NUmvUz58GiSKg4jFXya4AUrDyTNA9pdDAkBFC44kaNfMK3foHUHK891xZckLy3Bm",
  "key7": "3EFr3WeQAid4ERegefYineX1BnZos1W6vFZsrgsKEYJafXhWW9VHVVZmrJyUbvBAzxN3o4hiErFq511XAsL9bpAg",
  "key8": "5vj3RpGptiiZ2AMitmYbAedA7FuUKkzDRF4yv9L4vrHSnKJwFG4ZcdUWHqftRt4puuye6SExt4XCmrUtmFZJjhXS",
  "key9": "3xM8cC86v9mqDKEn5ojr3aRbGEF1KwXffdmNdt73wJhDPSz8DLFLgDKRTyseLbeZwcLDJta1L7LYj4jvSrvn3cwz",
  "key10": "zSpMDjoLerd6M99FrJEwkFUvAwDMo8fVoP9uH4QUz9Mdu3gUwpb3tMjRVhwtygzoFntJx7ofR4Sxc8iWaWGmdMn",
  "key11": "XMqD3xQzvZEtKngjkUSEUzfKgzzG9RW3PPNb4GaVoEWieQ8EVh1DP3agF6eeZqdSRy4zKSScNXgEXZWMGNyyWhd",
  "key12": "5JVLg2bfVrQ1EMooXavkNbfb6CcbDirZ1JU6NQuSvi1KXXnti9gxwWrhqyTe7EytYB5uNv2sL89VL6K8mQkNuX1G",
  "key13": "4sFusvecc9fzrDQjUro3mAno1SThYYzQCxAzV2Euox3RpGxJWZbTfYUWDXrVhA476bf6yAqPUriTTp5i225MhHWz",
  "key14": "5PG2hxqM3S8g7D5haogTRtdWWfm4ENv2s2RiiKwCxWBgH3WR6vYkXG1webiU4Ew9BtuxtLfqdNg9dUbJDnA4uVPu",
  "key15": "4QAG9Jf6QTJCSRpg1c6zCGie2tvbfhdVi7d48KczHhGbiMSidgnoqsWCb6NjpHQZJHqwcPVdHN6wBhB2MJ1bK1fM",
  "key16": "31dKNjWSwsC4VNA5KNdich5VkDMEp45Wgm4khMnt8q7FAHVoNK6fbH9ZnpfjzoLwhxko5c87ARU8jbywdsRQqLfL",
  "key17": "4SxRxQWLsRhSbVp9nGHP5pXLsqdVYDdTWQsY2AN78sQTyhSSNexbxCchgvF3VT8twCKhXqR5V2ezgDTJJGfSPyMk",
  "key18": "1nzuQmeCX6UjxWv8sMGo9jTzrAVkZApHJeFrgUhswKEav1AaYYn3T1iALz6dWgLj7PK7DADjkgqNiPEWcShJuxB",
  "key19": "5kNZcvv7ig9Z8NBtwQAmbbbdp8DUp17Sh4baxnSVZVkMRE8T7teUsuH1W4qp2WZT3pYFhhwW3feCNGB9n6rNzkko",
  "key20": "4KP12dNFyZV9K5f98N93jW3taQdkcdSMHydoPm7GayPfGUSkcCNQcvks8GpdTixPzFxAHqTGyGtZyTsHUPxhfThF",
  "key21": "5TCoEzryhFWME3PxdegiHBpQbpiCcDZ4bi9GTrCaX5KoZ2PhkRBcKTApdZxTe9KR3MsXQscr9zYZ4xMdqLGEY2tQ",
  "key22": "5vcChskCwWGDB4ajAB9ukwGhaK2XxK7KMViG4irkct9MDw5pTERZFnfiCTT6231AN4y4MBVXUZirXdzWnPtJiBv1",
  "key23": "3rVAXAK31wphXz6DHWNKD3zos267wJr85atvLS6ZwZi9JXUMx5J5UJvZzV44nNpiNZ3SrYKsNNRFNikTks78ZtcZ",
  "key24": "eZkhxc9oNB7aVVuNP3iF8ViRqsDZ7BmhGsg3XPJDrm4aKVf9WNNXNmwj3wzAn6MF7GhkpihKYf3weG9gbFYa55z",
  "key25": "2yT95Dcgz9H7U62LTyYmszf3y4EJU3Ho2JoZMKDGcUjy8tcsGCiBQPdVb78MAayMD4AEzJGPs7eu7Ukay4iu4YDq",
  "key26": "EmfDXvU9TbbVjFwP8A9FhWzfg92iGoYDUutZGCYdEULtvLiiAeHn7zNgDoXvrbDriLpg7hKwdERsGEY3Kfqreh9",
  "key27": "4uRRv1QvNaQUYJ5yEq5fpNttAX2KocfZDuhhcegy8g19U5LmEZkDNz5woXC9PPHAbuj7GYguU3Ms5UGKcuJBkexB",
  "key28": "XnnNDTJV6xhGFK3vwWLxXaHSrLsLHRujLARcJ57iR3jXmfoNTvSP3sanYYeVaUciGRuaMwFjwY1ev2Gs8RRRex9",
  "key29": "3YGiGTEfHj2edMS6ryX4kafYMAS39z949DoUTHYX8saPZfAuWyR28P5hNkbwhpHykv81mXjADbWvqet4PNnGMnqe",
  "key30": "2sBDWqN3aH3enxQygrjATmTc2X8P1aYFyDtJMTXPa8rJGsM6oMvtvTvyLK9fFp5LPduaHmCqmvvuZrdDWpnKmndN",
  "key31": "67WJ7hLCg8jCSSeqepAy3KzcariQqL315tcaMLoc6guWVv3df3mQFQvS912itARAKiVB8fXEFNXk2ewvXfCBHnLk",
  "key32": "5vkEuWhjd4KzGz6ERwdZ3EybUNbkJhd9Jn5XXsq3F1EmDpC4dPLwTG3DdMcy3wfCQwhkDFeTs9xT8esRw8EJSnv6",
  "key33": "53jt8UgBQdD828QbYkdUMn5Qo3GWFzX9F263M7jNCjuHEV4NvfUCLCZyuHSB4Q9Kk5qQSGFnQiX6Bb4QjsaxYBkw",
  "key34": "2nQShThH3vfVvNhq71i8WWktRyopKaMNcoPVsBBBWJcyN2TWRG5vowqxXQKiCSu4zeSXF9kKnMJPNgB8nnPeFmvf",
  "key35": "2D6iQQ1ni5xLjek2Y1viYJxVg6aJiRnqkEY3Gv33ixZKe81sxWVYtMJzx1fSgf1WcVVUoC2Je7H9HJ9pp8TXtBRi",
  "key36": "5op47cj4prYwiYxDP56LXoEAVgd4ZsocwNGVTgeUyzVdZCLW7broaiUBuHzyFAFs3G1dGzDcHaUTynKDgmJ6wqpf",
  "key37": "cYKK5kPyVzAjYnWZh9BAiezHyjybAh2JMzcrjkWDyidceV2emdETpCnv1ws4KFJZBdtS3XMGoMoMDatqgvX3zkn",
  "key38": "3P4e2HSmtpc9ueAcB1YsK6xsQLH4J76dquHHLyrVeriKohDjNJq8an5WPyVRJ3qDGyiECvSCdNMcyqEeanzDsbJA",
  "key39": "3fp1KXGpHkmk5mw2EHcLSEa6wYmhRNyqFVhdLdTsfmoFVcfHcusmcS1doXYgnNDJL5SAPZ6B3oFZnHST6MJNT7ge"
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
