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
    "4mKtvdSJWgHD54qWJdyBaG4JTW8e3itRwRT9vMpB5AENDzxC6XHr5BB3utCmadSvo7NazvmgEsV3oARwDjijHNYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "krtSr2DhMoKSZEbr927RmyugcxATmp2tujgW4sSfkbu2H99RXzZARj9jsUVmJVvHKEvViTq5RyLgBXGVKsCWvuq",
  "key1": "4PjzbDdi1PEPdLupsNeKSfMfyywy4iMo9Yh6vcNy2QQq69hFxkvHj23hBkBgWoSVt7F3gCC6rDREjfZnnwa7YmBG",
  "key2": "2ht9U9kqS8dJyqYvELpMxjT5TMfSNSgDjXfPz4gYk2wzKwYDGgD1iBEGTewBuhtWmKdExAFs3FwRNPKt8EVbWDZr",
  "key3": "K3wTJFAzKAwZwZrUyH8FVQM6SCiZT7qkGkGBuncTmW2G85JpCQskL7BgWeyTZUrkuT9tvp3g99nSSdzxiaYBNg3",
  "key4": "3YHC6XwQgBfdZ8EcfUVPRyTfNMXHK88FRDDi4EGr9j6onn3foodbc9sMbbyKmpgZ7t3rh6NB8iG9brwWhCVajEVu",
  "key5": "5xXjiwQ553YazMtjV6WyzgZYWScTCTEu5zr7LisbLvcY96ZxnsdgZLXfjiJJqNLz2khFuarmjtEB6oUARqCSvYyw",
  "key6": "4zewbt5fhG33KdPi8j4idnJgs8PL6TsQLbqNLPfe5a4xMKoUb9Lqp4cEd67AY8aLX6gyjHJkTnvcbkmvMR3xiXRk",
  "key7": "4BxVvakXHziN24wvRHpPjtBpBk8H4sXMDofrbL1XX4vcqryVpNB1ph4SSkBKs2HFJXRJFoqDZQH8iGp6PRjZzLwU",
  "key8": "2PA1sm6JSreg6R1omRoSydNJYxCnguKngUNUY7YNTZC6cWvzBczFcZEokM8yYvHvBDf3vRDZpWBMAgyXkd4nvrA2",
  "key9": "2sAumY7kC8ocm7LeHmA7coQCvFusKSSppDPmu6D4UTd1FUV6avRixqqs24iphssVoqtZyxfEg6dzP59aWLwvFhHJ",
  "key10": "3Y51gETBzYdjPCsMRTZrrQ9e7jqsbbUKnp4bLhpzke9yKGWBgUJ2oPyLkxNPsUDBzfNFWHXjjRy5QieiZC5rZaKz",
  "key11": "2ytqmwanQwqT2siKpFgzugoDonfnjztboBiYebMd7U1nADGwXhVh9cTuGmg2S4o7bt8p8eCMt159kc74zKb4eFva",
  "key12": "2MKTxzgSyaChxjqrCXkkePHhwSLRKgPVSgmNrJvPNXqXqLGM5aGFBEyVc9D2yzK2FU1VwqT9Y91ezWjyze9gtRAq",
  "key13": "y4PjavgDgvvHXuudKUTJE5EUom9SMMkVqGWo7gTgAmD93PPT4btumRXxWKBxTjKk9mLbXPb6tqjNCXkXUp9HByD",
  "key14": "36UgXNn4Rf5MxK4Ph93Z7E6nPtfX9aYN4GFYHVkGNfbGGKm1bfwMqfnMZLBRHkv2foK9J7jT1equCnWE9Cc498yX",
  "key15": "53ZCvyv46hEgZbt73gFzE5HMQtgPxZ4EDQSDgW21At3CUsyL4avf5efX5axGoYei46N9sXB2B4UcaEf1f7maSR6W",
  "key16": "mKBDbvvkx3STxwDhmcWbubFzFSNjdpcvew1xT3zNjeKWkpBS4a4UfZsTUosUGrw6DVhAw9aSBJnLNYdAYPFyMQU",
  "key17": "2jaoKZjVzJrLzEBaw5etmzDepMspr9moG8uNLhssAzCMcZ3X56KQfcsyyhFShR7p7PWWJkfu25mg6gknoFNtxSkg",
  "key18": "63WvGe9jj2QKHM4BCTeECBPiyQvaYwHeT52phQGBaDwQhm2KJaFR5sho1xEaGSYQGnLaqJDWKaKn3WPiFJupgkjD",
  "key19": "2ehDELGmBhn1rCUxAyxbsx891Djv1RCifmdqQRRHW7RJea9ooBdLvWqU856LKWuZMcWbgduXtFeLz4joUX8BnRgf",
  "key20": "37YvT5YkYa2YfH4v9rejzZ1aeiQ81mZbqnzXQHkjZuNxZS8nWqDiMRUMvtSozMPHXQKL15n8B2WdLvo1kVbWjtiE",
  "key21": "5pSQ47rNXqiBgL4apcwHHMSKows8mik7qkgo6tG6qaqEKB24qeBiUKhAZkyqy6pCcUmFYnxaaKrUsGhwCnPS4cgd",
  "key22": "4k3Dv1dVNz4aC3e629DiU9qRmWQRCoMagjWn3QbtFr9LB4HxcNqKpFr6Fzru8SrmgvWpMrvcwzK2rp535v6dqaHm",
  "key23": "Skyg4fzErS7mDQVnjCPGn2VRbKH5s8SF1DpS1RUHjbbgLUiAsmGUaAv7KdWf1wnCTydLr8UsZcSehwSSHxwGpRn",
  "key24": "2818QUtAZBSuPX2CtWJgvC45fXQhTtnxnfBbTNmHQkc4e5ajkYw5s9HujUNC4mZmLLvCbnkWurwZ2VKUh7zVub5N",
  "key25": "417kXNdmuyh1HNwGojj2KFwLMy4pky49svmRoNSofC2C4zm8Yq1BvVJHfnBv9uk5DPqFueUgdgnR13Sy7BrUqqv9",
  "key26": "3Drp1R7yp4x3ggasbmyKsNdnDYiQeJE8xp5Xmt8HsjvSPdbzgf8oCsYf5Yxi9DnyfDfkQscgxikBejpd4RED3wcH",
  "key27": "VKYN4Br5BbXMMPLwQnuDFvyFDZvTDtfM3bTcrTcco4DXgPEuYRCpSkrr5ETCau8zP3Ta59Wgv5U5U6AUxYTYqrp",
  "key28": "EA1nZJJiUywtkmKZJVZAJCSPwg8G1xzwc6m8A5zC8rP5HKcptk356neFgLd6tcmebJAZNtBY1e88k9RiLHMBmgu",
  "key29": "5wZSZ7dED4LkSEKNzrNVZredPL5dWUFi6gJomFVYyyTrHZGPZNWnb8ZunUPijBUqMbR6USPcY8Tcyn3JvACqvLac",
  "key30": "2ENvN2pzP2de6fmUepmoBbR6Bcztp69MrooLTqaHvAhaBhsFsqxSi2S8qRPAq3jWaY5BivU2mE1r9oKYiUWQnWef",
  "key31": "2PnS24nDG2YbMcFLaTm55wK4sXTeer3L8JXFihJs8Wf9gJNdYvyyvP64vh5hhc8wz1XqmE28ydsTXBSvRPiYGKzU",
  "key32": "4ZLtfzt8arRKPLvjN2wXgZuhS3qz3b3CTun4i87WADgdanFDDp1SCQcXbrijCnihchXMf9SGPpJXEZxDXL6fE3qM",
  "key33": "3MNhYy5rAjPBbg4vR8oRvPuWCScsjKUXLGiBLtSaHyR2PKAXwcU9pKXr5JKmTbdUkUvFqFcau4AV3EHFDPhtWDhC",
  "key34": "2kigT27W85rs6k8Y67wHBSh2oRUWoGD7GctwJStfU9xZZcB53mSsbVL19urnUopAu4GZ12KJH7QxanB4BbrXXNeE"
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
