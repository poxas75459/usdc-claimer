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
    "5285WRxMSfcFqTsEEtnbumcQhHJd8h7UvC1MCxsb9WhswSep6reXayjLafyMNqctLGj7X6ndVesz7ezNFPaRmP4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rJmsqZWYi2uWbx5BFKD78n65WQmAu5SQ1ZEbCoUCLQkEQvxGwr3pm3gtAEJBQW12UqiDw45xfazKp3GJ32zvMRX",
  "key1": "EYyZkGv729yAXS7VaG4zahmjFuZzPa4xui2taF7MZGuPEoF2JyCMQcsrSckmN7VhHcwDqRjWu9vM4QEbRCAcsPb",
  "key2": "4eNuRAigLXD6vx5Y5vfTTDUN37a76XZydFTgLy3DVQ1yW7uKjyq8FHMUrgk7iJvYmcaAWNKpVVDsDtNzU3zikJJf",
  "key3": "xgWuDftNM5nZSQwUXe5jhYmK3XYeoJ5NgkJbpz7XMBneJeJEMW9xVYWRy5DmF5U5dWrP1xXfDLXN7RuX6oeLSas",
  "key4": "3zwY1XErLq1m15gpGN5JZSSLEnDpbmK1otfJ7d5oqoqeYg9FjpAsz1cf2Z8hQEYowDTM3qUHkWWAMFbZ11G1Y1y3",
  "key5": "4hqLSEBEmbtNqfgyyDcgL4QxA4k8Mj1mW192TWVnpCkWLMJ4xV4PQrTciE1rfcyQmy8a9n4XatDRBrrvZ7P6JvHf",
  "key6": "5tiX9paHpzEAQFRXLKnjW2P4ysCwoaEcwQpNvQBdgPabKTjLmqve4JtWPr8FP5RfsjBTNy8Lxmv48F9CRNNbdE5h",
  "key7": "WfAbLJK6nJCNo21LYmJr9in6tz1caSNHikZdzNPvsaukWpy4eBRhb2hEVwqX3gteeJDDUbaz47SAX2qajvJ9hdS",
  "key8": "F1hymPJMYyczV6bAxgS5XtAq1Q5C8uwtctVZ8gUo6wQfgsVgBiFqu8CTmd2mEXfB84JTwWyfV9cpKDcgy9bHfhp",
  "key9": "4YFAWBU7Nde2xQxVEQMmo4aME97581A8mE98KXgYE8FiKmomdfa92CdmaUFwxYfSnXPxX7pWpPg71EbebPWAvtai",
  "key10": "3vPYQRRYDrLobTjUeUGHqM2iJC74H3a4XN3vUVNqTsJPwW8aSJjwfFN9nqTyUvaGqEYxRsixAH6MH1BrgWS5hGHH",
  "key11": "4vRUUpvWZ6qM1cWM2vaCuWk5WauCQtgqmMc2jhuGmjffmjY9a8QGp87qLGg3MxAWJE6ZbGHPjPhoGvHrPMGUPWTV",
  "key12": "4iNV5wjPmHyXfqrWZ1kmZbDFcoysH5Mfw51qyE6kPkrexLtXRNAt9RTFhSVQFwHx4GCdqD7hDrXf1whcw7azCZib",
  "key13": "SVqzb9Ht72XRgyf2ruRBnHNNkmnEyJ1UenRCrUyrasDnkEUxeMe93oRXxQTL8kzkbQWbBC5J5gxcxwi8hiio5hF",
  "key14": "3iFNxv5uj4sBvcLfuDxJ6KkE4aJWj6oqHDk8aCjzZAAM7UmbxNCF4G4VTabkF2J6DrBx71Uib2J38NR3AQAUikZV",
  "key15": "3ezFNos5SCVyihUzeuBsEYiFzQzLyAMqwvADAih6D8sKuTUQQ9wJ1arDgortKFJcvF7rKqGjCbSvaGRr5pKDVgC1",
  "key16": "2sFnzo17gYXu4c5HRnQZZZvg7AAgkLBtJnb6GJhZghPBGG1rL8VF1LPq8bbnd8HJA1xZhJ5fXqCW7iF26H6FiKB9",
  "key17": "4bqkRAs4ZsRKFKrjAxwo2wWhTT16KwSH1meVztHnYJBYGuQXSveGniY8UMZMjcec4X57CsaoTXDbCQsBE4kdH7ED",
  "key18": "5FawMJU6n6EdhxMbEm6TGq47Rg5kGXDjc1yxvLuMKunASX4R9BEpCG5k6SSpYEmG1fmZU9BcYLWiyfMUWo4SoGJM",
  "key19": "2YFPJf2neSX4SLVhDYecg3bwNCLDtrp7ueBgyf5BWw9Ebba8PmNWcZnNXFynSY16azM8FaDmzjgsnnAjXBC5nBHJ",
  "key20": "5KnbDozay2rznp2astUbeXR8HxLJFPZpW4VYqhiq3yg1PWSkyC3KqYw6QhmjWsgkQAyFE3ACCYuGNbtT1xhvpuZD",
  "key21": "5qYEEn1anaetKWbknU9xRewBRdDUDvt9naJ18yy8t3xdQk7rdaA4Ut5ohVfHQHkoe4TtQZT6aBQ7ZGYWS4J9vv7x",
  "key22": "nvt5PtWNXE1RhsRtDDfumEr4nLQjAMY2pofLPE8eZK667zYhbjkg1zaAjARH5yEK9d9dGLvA35wYchCnRZxRMUh",
  "key23": "25NL2ADXbpF4J1rXxXVqgndRnSU9WWBWQk1zY1uGzvdWdATSHcLQ7ADb9Gr6abrgKF9LhJGocyUrNSocjkhh5yL4",
  "key24": "5e8GuvDvcTiHx8hV7HgWbKTJGGfkwaoB5xFmsKs7DPx7yXP9naRRbXYx8wZk3GRhr4YBixGvFYCWvw9yLZjCN6h6",
  "key25": "2ZzfpQ9dsWjYfGY7BR4UokGdXKZMsSxnZHHPQfV7EcAkqrqRee4mgr9GBbHtuPsMP9y58ac5znAhczrRQaL3Q6rV",
  "key26": "TtM28TYACeqG48K5ZQX9X1523YmnxGhdseMDYXVzYoEAARfe7bit4hPM8YhzjiXu4keB89UnT7RSpkwyB9sggZ8",
  "key27": "4iuQ14cri8841mT3bbsBFxyoMbgXEXtbiGhxuyU3kH9dwztX2mcYmPLtKSDtvtYbqSeFZg9kTr77Rww2a2Muw9G",
  "key28": "2vbz9YDmi1VaVzVXXZbKf16cSM14QZ7MeB36n2araheNrvqd8Uz4CMiYeSF6YBN9tEXXZzsEXQSYkZnoR3ojnaFR",
  "key29": "3BKMJsbtWLPGDqMcAiHb4brc3t3BibEpiimuvZ7pfHMugShGAMuzR7NEhNW1YJc66UkumUWPHgAZUoD2VP3bJqsZ",
  "key30": "25TZyHxMKkoYewRybXV82KHKc83aHpi3ZgLaHhn75pZSVqgPDTeLyymZ4YuCXqekYRQ3AyPLusTDDRmL7E4bLnxD",
  "key31": "398XXisHUXsGVnJNuBj9STkSC8cvicpxSRUm27rUZypEy8f1xkjVdmLJgPQSBejn5yocLBECGXixkhKZKQ3Xp832",
  "key32": "2t8DjNpxqGmtaCNg3X1mZLcafxYfckK37UecMcDywAgWppvGM8uTsuwaWSVDysXukkLXJKL5ZqbrRGEQEvuddUiM",
  "key33": "3nm3iCP6UH8ep75vbkKn4b2WYPUFdyoqGdzsZxGK9u4ifpqUvLSE7y5F3i7kJC9oc4uDx3yEmndFj7VQxahR7h8w",
  "key34": "22y8owYi53LUgof4ccuojLNf4HVt8Zz2eMDPQM7eLgJ5usRdj9bjqWsj9BnsXDweZ55q5gLPmdUaUKdrrWx8j2jt",
  "key35": "x8veUQNHLEAUpk4tmMYqeiGwCev9JUXmy2bG7BqpcY8vnLbvJkDv9rDiUWitRLuZbkA7zVwEdpPNuwrv6cvpbHZ",
  "key36": "rY5nCpGNVCUdRw5uwRMru18ZpaVPq5HBmZ2vJuAaijZfBLTWJdJhPgHM8i189ocrSGTbVxAcjPb4SFjLMjbSrYr",
  "key37": "m62BfDG9aNoX3248goPW7fxsX4NAmNFztbkoc2LaV2g94hsVMydMc94rjUMFm6WtDcdy2nLx9ceu5y4cz81y4eh",
  "key38": "4Knmz6YHfvmeQWRKgyuDcfPwyks2aTffx7zo7CPtELfMR3yCpyUEoAN1NpXsVtWiWoyuf6k193iksYzbAPUT5GPM",
  "key39": "4PwXosZpxs78Cw6K1KQtkUzh8a4P8VLPqJh112cmhhJqVNff7CzxC9MVvFMV8LUo9wRXMaRhEJncRpMN5TKWbL7N",
  "key40": "3ikQXeYAD9XfQRatU2EBTEXaW9UULCCXYhFYYaKKEbkZ4fPaPhbVrKiYonFJjh6G94RkcY4g8qMyJjwqApSmFYe6",
  "key41": "4YRtVf6EY7dCf9fehAcuMNebLBkVwHCz5thkBZ8qLbvMzvPNg3k6bgBJrcEwK2ZycL2AVQrALKcmWBhT3kaXWGdt"
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
