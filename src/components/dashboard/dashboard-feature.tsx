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
    "cz4wT7vzUMP66JJCXQmDEw2uEKHzzcpYYbCtqjKjEQVbqRUuPbK3xzj76FURVgeEQDJXLfsonvtfCdK9JyTnNYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NP6jQEh5EakiUu2JL8QVbEHmFthcsDH9UAzySH1vDA2YDpN7MLx5LP4x95UqBZbV5CNCiEDnPpUsQpu94wwKVyB",
  "key1": "51RWkT6MF6vCCnHEr8Nhewo9BY2BeZt85TwfnDEedywanhRWZZMvWQmwxGj1Qw3gFDmypXm48bFDgMEaUJz2R5GE",
  "key2": "43yX889Z169bUjhjHnSqbtuhCsfRDTs4Bhdaq2uQZUc1bQcqYazTG2eSDvLMuqC8vwGeWWNBxsDXxTmRFn8YZo7f",
  "key3": "Z9Ng7FaUbyh59KAmjyuYdbetr5Rbp8rkDM3S6pCbr9dnsL641WPnYVBEiL6MhvLXW5fGivGkYKYJpD5XhFaQH6H",
  "key4": "4M7CHRNekTvAmD4YaaR5m1WUymnZoSsFpWinLNbuVFkTGvLdmPTjddQEnDfuw6NBgeNv1whn1uehJkL95r1qJLai",
  "key5": "3kkoZidzHoJeRuexZnhdLdrn6YeYMLRFyh6Tistt1KPxNu4kWpePeUWUiXKCYZtqo7myF1e3Nz5kJzdGDax9mFCa",
  "key6": "29qZcCynLzM3mSqt9YKcnzEcFkfjqAaU2r6wQYKusTWGjqcoKq2m9YggwDGgPt85wtuDZUJDeYQqwqtz2MDudgCs",
  "key7": "4SnPCNroZ57crLLFeb4qeVyRBU8wi8dhnu6nm1UFCu3BKtgsL2jGeTJVRTewqhnBZX1AttQwvSiqYdZJjfpm3XVK",
  "key8": "gec1buh9yqyNcmHyCtht4j9kcb7xmGEwLMqNsyf5JTUc6QuWUich1Gsix3hCKKGGEMvPNwxYZ6yoEY5VQHYBX5e",
  "key9": "4QCYxAgK8owchijgH7kafYRYKRN5fPzFpgfJDdqZpKrkZeDiDUEKB3q7KNzBvrTDeii61oU6GyBefJpwADbuHwDt",
  "key10": "zWE6yLWsjG4zF1NxC12Q5Kza5nsYM1tFtviKeCj6GvkFhsycZgFEUb4EAgukh45KJ2TSN9yqTCA6tVqqrfTjWGA",
  "key11": "56SbMF1pxTudqgmyuNwPT4RcT4PXjtxtFpbVTtHSjBvo1oXZckGR4ewWtyUiTMA4VdRy8do6DV2cGJvZqgzUba9y",
  "key12": "246wgj6jVfFJnNV8XmAbbDtnp3EELW3MFw12Ach6Te6jH2txJqN9Mxc9Qc6RxsVNg1ycZTH9bB7sWmy4FNqctytv",
  "key13": "55zVtfX7N65PhGmTUaak6pM8fPY11nZ4j8eYnADJfmLvkrfgwEvfiuBJWCkz8itnBPCE2qAM4zwkJXdcsVUccR3F",
  "key14": "43dJoYnoUS3aNmAyyze67BXTMeQxxpCT8fExjiqpNT2THsKSyfS5vgXzfPJdcxn5hGYoL7quKnQwoJ4CP2qgSNif",
  "key15": "5QJAw3g3eZV9cJKopafgokfz6Gt5VLBK67xXvAmJzjiG9BVRjBihCLkotWG9Jtox1nt8budh9BzWkNZQDqtQyiiq",
  "key16": "45NmFH6sCAvJxCCSLGq9XHGKGkSfs1tjYnQ4M3FVA9Pi6nX5zPRnVXwRSA2pKi8gus1SCmhdEp7CpMJK7D46Y74q",
  "key17": "3CrfAzyJY96W1ksVEHce2HfA5UScqXBZV9Hk3nbzsEbxF4THRy2QqjQsXgi3F3ufUK7LfQ684qvF1bwGUVn22PQN",
  "key18": "4EkcwYQ8KocRH8VuQ5SLnEJBnBmyqksejv54QKf9ymVnFhQKWGSzrx9QJhekb6Y7Hru5BnQ2kvp6QQjLBq57aw7o",
  "key19": "4DcKinTBQxmC1QNNBJwD9od2d329oyRghidpJNxMJgBrD98oPZM8ZKxnngG39qmJsvRiz5EYEWpWGDUjvxuZx8Po",
  "key20": "63B79sT2YCDGJkA88VUB71VrqhHsskBn8k5bwXFJXzPuEToVaR1JKE8WYD5TD2nLB4EgSyL1ATdBqYi4zkYSSzf7",
  "key21": "4HehDZE1Xg5Hp56QScTPgQVn5fPSGrNhaPcgAXJNySZyWkFqopPgojW6azpTUikirnjyye9vagdyewfoAc1bj645",
  "key22": "3xcEtFaeDcPvjzvhjUEcJvdNwTSTN3q5UuHGpr4xcZDGtUz2tGRqiYZJsFiayGBW55u6dnL3x3KHntwe9rFeFLgx",
  "key23": "3c8ACRBgo7s6xRZueXQ6dzF9ynTysgueReraBkWcPxB57572j4TkNBRz2A94YPpv6RGur14vmeztmBmdmwKbepE7",
  "key24": "pnJXqfkPk5NHUsvn3vU4JDsLnQ8cagR8bA9ask9xvbJSLHR58gbQBY5TfqTd3MRHBfEwq4eo6WS5fNWeHRwnWvM",
  "key25": "5MUWM9r4zAcNmmf3MMjsR1icBYzkinBrMSkJu39wDcQuz3YPBo9h1BRgE9rHVU1WZqTirKoRSRMc4T4WGCvuRRiP"
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
