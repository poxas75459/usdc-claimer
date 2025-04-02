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
    "37fV6rypwA4DuT7pW4boMCbUM3cGT7GWGzUHg2bBb7pJyrTzrdmYFJW7poPZEGhMv3GupxFq41vQJJoucWSyCzL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sL33bRhF976sj6GACTq39SBCjAgdypxpY29vFJLno24q9HNpx6rQWKaaF1G6SDFK839KW13yxvDUqiA9rK14175",
  "key1": "3EomkMmnGRDZmmzk1cxmjevN2o63o5wGE8vp42TSUhYahQQ45jY8WftFjmhP4R4n3PcLVT4JANkKGGp7ttrfjHhp",
  "key2": "3t3CCgG1osciwn9m3ngqpXXMAb6Nn9aKtPZZrsQhg3GbgeucGpuJMEWthnkyJyWM9Bq2PkMpFJCf3aKsG8TK3x1H",
  "key3": "3NFdd9A3BBSEYp1sULtEef9cfWGYxAmSTx7acY6YsSCLsoRVJZY88Skaj2x9rr1g6hJULC88KcHssNHZATRqnjRD",
  "key4": "4Wh8qFJWJeDa35vVxzP9436V9hdetW3iu3uPtw8BdBk77u563JQ5c5vEHL8guezPSeW65c4B3j34ihpQ5Trur89s",
  "key5": "4wipjAdDeX8xPG4CjxhTVrHeXkvQk33NTpw1QdxgaA8UfiqAnnDZV17cnJ8zb5CUu63Zcy88B3UVLrxDDkCHoNPN",
  "key6": "2oqBZF7crafLmuN9UJdd7wMbwi7LGt92dDcw97ASK5GpwFF6vyyZ3MFXHwFUGJkREDzgSfin9G8Q6y7JU6L7RLaZ",
  "key7": "2oTZso8bwNVCmypUUV6v2ivwWnkzjp9XHH65Ja2kbCz7YeHgVePZJKcxLKowxTNzbFzTWSoU5B7dtBhT593d8ddB",
  "key8": "5F9pivUdzudjXkcECtQA1uzUS4DhVVdrR9qLKrC8S4k8zLyoGYWWhtn23v4eZVE2a94hYAzbzkFT42ehTZ3GKEGm",
  "key9": "5EpenWS2TVFhDeVBT7hEiQVsYF3K8Sp1mpxHMu7JPoysYD43TaxHCb4kT4mgJX9grqx8Mkx4gk47DU7yBhFLSPBr",
  "key10": "4vsvgJx7skvHZswQEFwwqG93vKcV7YWP4sz8S6Pna29fwswwZkzSzmXGWDrGmexQ3m69u5oPcBjWmmuNS3NxzpG3",
  "key11": "4QZmaDQfrkG2QqzSs11jWu3wZ61tM7aWv6LaL4hBZ23G6Vppj1JhvmoTdaoe1CxpGFtXtJ1TwttoVG8JnpVWBrgd",
  "key12": "5XsxRYdzC9XrkTBmXkvVZRmy38cgNBEnVHWkSBxVFgZtnVkc2R87YyfwJqZsitxcXhAG24szBp41VzKAUAyqmyaw",
  "key13": "2dF2tS5JTtxWeomzFeaoMArXmWJfYDajWqo2nYcnGmWCPz6UcrnSikzGyNf4sxD8es9UHkXek1zqMp4xtMwfbg45",
  "key14": "2LAkWtZYGzLdVmHhnBt3jzD29wyBFjUvFhH9uhtpSdgFGrvjpQu1va3nynRjuff7gepgnH3R8JYmsoAfV9ueKecF",
  "key15": "5kLDsU7MoB7uXMdWZCD8RhL8uzrkswh1c4J9gcXuJQQqdoNc7esgT6abLfgj2DUMQnPnyQ6LSpzCm5YSMkg8av5b",
  "key16": "2d4FgnSja4CDS4AJvjNsGu7jjth7WTnL599XwX9v2ZtpyivvMorTRDBrb3VVmM9ztLmuv4a1CCbDznUNtrL2yGaj",
  "key17": "5Ke2SwyFwx9LHjamzqpHtA3cHgGechyy2gwLH2ELRFfJMbnJYuiypho2iGasf9L4Dic4Au9Qtqhb7w4aJTtkojb4",
  "key18": "4bD4FWT2K4ueUi2bKmtUytdQYbo2Yfv5Z3Y3j33nCHCyoCJ2VcfCMu7GQvTtumhxUeZ3XPJsGP8HRxVK76dNoRJ",
  "key19": "2iAJ4NY4tfpSFdoydkSisAgAehQTYxXWjgxC9yXzV75NLKLimKWLR7FjxUhUjxqaeHjWg2BWK3PcZJ6LNtpTbsn8",
  "key20": "2vZB4CWrvf1KR6X5vpuudnm7mwEbn9o5wosMyayqmB6yTiXZShNsRS1Vx5GSGPvpLKHRC2FMpDmU6FGmLRpBNZaG",
  "key21": "5MDkMPe3nXGDDhAeKRAhQ7MbbegBoRkv28ostCzRKdxkf2HfjbRM6pRXwQq8f9s4GVnKMq3nzLCLhLnNFR6sx3pP",
  "key22": "62H1SToko2HFdsdeMZpHDChj7SpH8xABBLoZvHCaACHnRtWX3eaQgqm5639EmNeRhDVarNGnTXutQYfXF2eiNjRk",
  "key23": "2y271gggVXJ76vZfcJoKWyfvaXZzeMsadeCKhFAxpMsPYusc5BGnEsYiY7vMrCSVZhxk7SUngCfBNRM6rGmCm5Ks",
  "key24": "HRLhvVTxETFKzKRsNkMniCPcSgY7m8s6k78sKbFXPFMJ8WPJH4P3ehSh4SDE2YY5HDXtfP9L7czfKzCmAUtPfdC",
  "key25": "2YY8mjxGetmBjtBedFhxXVtkYnd6JNQf4rcHc3bw7gGDhZTFehbnSyq5AWFA7zyx5cfuReEghcrpYRA78d4yeTHH",
  "key26": "4w8GKVoVwe7gaS3PDbgSUxh2c6G1Keu2u8cYhJXHsMynf8aYDaxgmq1Y11JuTVBJgzgpxtQZJHN8w3YX7eYSRXiT",
  "key27": "3EB2tov3zbpf1KENgzUHQJmxZ6oWEXjUvn2Me8V1MkhBqswZ564cC7QvJrx1kM6Un9dSG9UizMj2F4edT9G7LP2K",
  "key28": "21X1pdJia1JgE7qZDofnuj6tGBq1qLa6eK2TG1Y6BtTfy2thgrLstwhxBrJ2KZLcJbzGYCoiQLnC2pVJKVCunCP2",
  "key29": "2mobyeQwEsRFG92ndbw4mBxiX2wMpThvyhQnwnrDSiLKEMGbSZaCCSRigp8c1gcVMPnoMYT2SGTicbeLHdwDpugW",
  "key30": "5venqPx4ppkcjw7cHz1i9NPyENUCuyqwvDpZyA4TF66ZS6mpCfk4tPkzZSvJNBaEq6Vpe6SXsmPsyTsHsK1wEXS7",
  "key31": "VffnfMVYbvWb9oTAHkcZJvq3HPyms52KYzhx2pBBJGwtfQmaf4CmmhWHNubxqw2CixRVmc8HWVkP5BWzuHHqwtR",
  "key32": "4rVhHFWZ8gvMTHaRVMwtmNbXvMjMEWzo6a6YVSr7FbQJJCRJX66R6J88SYUsoJcb8d2objLJ741mHhHsV45HDHF3",
  "key33": "3zQpDXSjzeVhPGb7PEHCNHeSQt8kuKZ5qszxS9aMRkQMzEjvRUeGTPBbbMHgzeLfvMdQAMNptBhfAE2w2RU7TKpb",
  "key34": "Nb6d3NjqvBV8Ea87BNAjvgxAPra82Ms9yF2XxjEq7csb5ZN6Kc7rCRfKtzngYkjMe4VFMdyKRRYp635rFTSdmq8",
  "key35": "5Er8mZ1AwXYyf235b9XrGtx5Exvwu1oZcPqS7ogZuqBx2h1AcVf2nJtA2KNkaMvJDdmxS9SmPhvT9fNsFUki7o4f",
  "key36": "2PwByW8XFFF52r8btNpfDK6FzZyYRE3xxvP1k6WKqPvgps1vLb4kxzaJma8ai83G4KbMKd6eXGx2AmtFNAoVBF31",
  "key37": "dxkrTzzJE8Vi1AZ1xQT7Hn5DjDiRVTNqeJ3z6nAASDuqvCh1YQruicsH2dFuqT1xQRixxRkghpbsuKaAxaYbvLn",
  "key38": "jyaG5RM1wYGA6GQvqr9BnuCnAxPxzDzGQY7XMjeqAk5fMn6Z2tTvzEjDaBqNE7hTCufQi4FUJCbdPT1aPdB8CUF",
  "key39": "4iiCx9suhfh4KR5EZfGefT8ZFCLi3xkxZBSgz7HQTVUWcbtnjsqY8zEvqrBjthzoVy8yBeAj7EjPLzZnBnHChUvn",
  "key40": "4FKQa4ewmEqrhZApdERwM7VVsui16du1xwKn8TW3y77hcdXEDbBtebCQBSeD2s1LTLbNc5mKhR54PtQZ1v1yUwBq",
  "key41": "2dwYvB4GHoCk3bK5WWWQVVLeB9JqvvAn8o2YQTkFqNBbuDus1KBy69TN2FJHivgWuLRg7asUi49fQ9dxbJQK9AFK",
  "key42": "3Fhx1XdQM62FAwu5UVan46a5bGiEEGW9YzRHR6QAfDZjdNRf3N2YKp2iJSSSrDsPKpJxv3B2ypG5YEGRP1EjDShD"
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
