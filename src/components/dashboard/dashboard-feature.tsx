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
    "5RDf7QMZKfuki3bqV3yTBHkficTmwDAW6SDSpsqYADf6GTQveSuD7P97gUUF2p1iKiVyNPWdKYo9rDpzk1mz3rC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a7wFkiZZE4X4v1a13ZjHeaiSY5PPZym1iQwkqrG5rd7i8bnbzsvuKtqptNdy8MkkgKFYMq6gSnqYunNvSUiu7aH",
  "key1": "F4Wj7BeBzF52RfSb59ktyQaB1NFC1NtoRVkQgVNk9oMBqCVdbmCke6mKjd1AMM7GMzQYVYtQcKDj9AENJXBB45L",
  "key2": "kf1NiSJ36mMJPmwG9hjoGTKGHgiG4wggjRYqv1ExiGXSUcAzjHKar3B4ezoGJWa51YENtZsfuwVCRdPNQ51Yi9V",
  "key3": "2iMvAqkxcHLgfLPJAw1MQ71e1eqknEJNWwfSiXryGCAEmkJGjo4MPW4tcjVyxguB7RRBbCmmhKouTfyWvGoprj6e",
  "key4": "4D6LiR3nZ7exyGcMuU3FN98DEq8FwfKxb2YUZ7fiQ9YvZvoKoj8hkQeXdkPGyxEZTDHJiTheheGNE1Kqe5BbmHvn",
  "key5": "7gHEDug2sFgmL1mdEUiSg1Qb3ETMkbUhPZhZWXCBPGYnQ49TT1vcQ57QbepBMvktJtD3PW5Kh3dN8ryEYA5YFcz",
  "key6": "3cUSDXqi9VwuehX4RuSt5ksARWvdWAmkmA1o7gSNP6unBwqNknZbginaHHoXsrKzxcjC3To8vay2APqyaYugRv8V",
  "key7": "5gbD7HZ3re4Xxf3r8N9GkqeMZkqWkAkfgKZ3xdrMHwhQ6NnzR8hHhTAGcjEesCLAKXCBSQEeY6b2ELY29wNZyAgD",
  "key8": "4RTPUgVyhi8q1ep1hVf4bUgGA7HnwF6wKfoKtDKTxiwLwpaWHJXfKFBHHA1SGfeT9uGgJdP3msDpY4B2mg4tWHtJ",
  "key9": "2ASJnkuXYLYTav4mSywo8xhSDa38m1kcetfiwQd8bbqDf6ehjRRbQN1JYFqaLKq9JBMvhtXJVZM5vEeVoxd5R9DS",
  "key10": "RWEBfNsZd6QJ5uADiQh1TZsdeUuuzdeubtcXmLRLgHXyXJrtrUSwTchPWm7Fz7baAM3fAWjtGSGvBNMGYDqjPnQ",
  "key11": "2cBAUeDZ9pP3kXzp44suNNMqJVUpzikhzV4mbjh1nP2eXADk59HaAj5ZJHwwVksyEqwYw1wnQJSmyLBs71hDhHMJ",
  "key12": "y66W6yNocrGj2EKvZ1uRtktZ4qh1Bj4jdGissxm4qYDW99NPD3evkSgiGCjv4DtSwp6mMFjFyFPgk1X5h2BhsBa",
  "key13": "jUyGVTezYNyTffTnNS42Gg5NmhD4jE6ETLgBmM7BTRmUkjGwtsTXxdyXMcedpJfnqmYePxeSaG6XUsYZz1kLQkP",
  "key14": "3R1AnKQvHyoYnp7XbxDTM983R8vd6Zd2e2zBx2Rr15Gnry2NY3Q4s6UeT3ji4whp8XPNtwkLUpjhocCzqqvzSGBX",
  "key15": "59AcSsfFVAKuMb3eyJKE7WQxaSz57TXyRioYtLkKb9MGeysE1yBGrHzppknnTt8MiWewj4D56ucu3P91GGwWBZQb",
  "key16": "4hVxc9dXA9HQcsGYpUy7kHaTAhsQsyTBYqydD4MJ3FBw9dnVvyT45Ho5LH8NUnrBRvuhD3pcT1LawUcL1QAk4DzG",
  "key17": "5AXjpsfyALTNuNrynVQ2xGF6a8FxvdWeCtmKN3aFBjwWP2XuLtWLviynPz89SwKPExXm7A87icJdkb33a13qmdoP",
  "key18": "5T9Tb9d7G38D9uAxiq5qukR4mtzysfCWjJqG1bXD2ZcHGeXr9jff4DNqSwobNPfogV9sNZQcFPQvvFSwZ9sfAFFT",
  "key19": "66YZsKdPNNurvACddbCVEHqcc6K94vvngubQBBdQ9Nv55BeNpB83mgYTSU3XgCopkaQdxsfp2FZCDH4S2XsR2WAN",
  "key20": "3rh2Qd4DHPt2UJoqFqpE1fTNpgeoAJ1xwTh5FCryF3uhRAXeHkXLL7EpMJbggSrdhHsd1WBg3aNTGZtdxAVcf1J2",
  "key21": "Bd7iTwiFbdqsGT12b3GqyiWcUGXwFMZU6cFcgqjjWcwCjDte74dA5hG8vVXbQPaHVh6LX9BLRGi62yk2DBWcD4R",
  "key22": "2TezZ4kv2zC1zfmTbxtF6erLqaGBpv2kVe636H3hT8UiK1RBXntUGS2Vrt8PuiSSfyHfX5rHKrhzWHrVzRSPtNhy",
  "key23": "3W2c6YkxdoGHooFEaUeF2PUMKjL4c7LMhSgkqo1SRCP9kuJVDex39Unx36wTjsEW5NyHFUuVgUMGCBfVNgBptGsP",
  "key24": "3QVvxqiMAhCGj5AoGzRYwKD1D1UiywxeKaN2quTVZF9yQunf8is5L8eppzpc2bgcYTMKs6Lt3mksXhUwnmLFSLSW",
  "key25": "2374yzVeuDFQxHiAATjPBLCJLvHANDuuPAPvQJFvir1ARXyBDCfk8Kw9ZuMnmVemEvjF9bNtUYcSZVLhj7e29Yzk",
  "key26": "rJP3WX5sxw4N3qjV5wrCE2fWQCjWhxmpYywqnjRdVdj1iRj56tqng7cUi16pZ8XPSmB8sPEMMX8XWnpZMSz1Mvr",
  "key27": "2qkZBLr6dPkfptjaL5GcnWdFWXJZqZE7SWVnZBgE3RptyKMr27mZddwx8PvNTirNynbc59eVn5Wf52uNNYPEuxMx",
  "key28": "5oBYWMuysRe3Qi1KMXNYWJ9w5pzFbUVJ3BPczAt2KBmdR3h1DAxVPwt3VwEJzGJniFoLL6ncGfxNs5CJYjx5b9k4",
  "key29": "5sLLckMaFtnQDaM5m4rromFwwPmQzNC89Mgg4ZPBan633zghzbGqsSffgDNcid5BpLmDiL6vJoSdSvaP8jbUPRcM",
  "key30": "5K4ZJgogYdojjFMXe3hnDxJV7jMh1BNg2CKtGvvfeLyTsvdLa2mTpTb1pz9fC4kPtNbTr1p7qzRVzyEMH6Dayt93",
  "key31": "27E8xspLkfBXnWtKTcvRghnjC2MatT91WfFdbgrRjH3oAgxCYWBWfYA7KgsmNbo5qRjZ5T2oZkagq5rQFMyKzDAY",
  "key32": "58FCqHKjfJLjRB1AbkxCqgwk3V9Stztmgm69tVGmRiMR6JA2rAJx7xPa1wMni9oL6deDGjisWBQNtu2GJgwdhZBo",
  "key33": "45Cdd1oXLn6n9TumdQo4fKxvoZL2Tgm9htcevA1ohWZboDHhchjgBDXv9w4ht9mHifEyULy1KyiYJuZRnGP6NC15",
  "key34": "5zkbGnTyjXn6fBxAdXW3cyRnhpcrj9TpyfGMEV9FZTDBihkwhFdsxqATFbwp5KPP6xNPxEgzuNA9CcePkXaMKjCR",
  "key35": "3XZw8igq2HdWSQEm23i5LT3rJSXsD9XdeCVMVfqjmwx7c6QdvUyvafpiUpFmKKDjhcVdb43XUSxxh7QBQ4fCSPha",
  "key36": "2hZVL3Rm2rPG9cvvG5ezFSfx7VDWNCV1St4R7PYLAUMJneLxWgayk2ZGP6ar8U11mh9EeT7RZezjBLjhfycj72wh",
  "key37": "3ufzdTW8c76wpGRWF5b2h83udPYkfSASZ8XuSsyBMPFDtkb81PshBF7NUqRDpY2DHkL4fUXrVhwyCTCqvXKDKKQA",
  "key38": "31rySW2kme5oKy5qzknWauQtqLTgHBcxjkSgbkBCWMKtPDWcmrTpfB46VcAFVC3bQFPsaBYGvAc12Gf3owEzmRjz",
  "key39": "3utmEnPhk6587q32PxkaVAoRucYxCemeMAcN71y7Hia3923scovRw7FNaM7j59xMB9WfQMWmmz7eyMRz5Kvr3iGn",
  "key40": "3KzBkFXSdtE8W3Z9iW5cUw34MKSrRgQMX12ciJCnW1DUbzUpwbuk3LqEhcrxakLhoZzLA8TDwztLXYFy9BHiXfuX"
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
