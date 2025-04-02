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
    "Je2UfFoZBKHurWbniW5qrvtd5y71kTUQqHNARmeowELeq72dCkn7vgJNJ83SVmetdzJ5qF9zVxZVs6YDCeWLyoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sNg9RJXUDcfmxm4g8CMiPJxe2zG4ws2pGvFyCoZppbcdBJL4w3rnKnbvwtvFKXgSCfT84Mr36RvqJmxaLq2zPkS",
  "key1": "66KvxUfqT5bQSRSCyvNGQLTbSjxtBJ8P8apweZsn7h8ceGnXTmfacG9xUgiwkxBr2nwN1MsCWv7SbYCxaYY8MKFC",
  "key2": "67G4C6v6NCSNHuJdT6QYp8fSFr4N2jZgmxGx2Qnqjn13se6B86SS9vusvmfHuR3VrVPs5wCjutfuopzzXusUSFBw",
  "key3": "4PdN1JPoaZ2AFqiQyTfRBY2D7fZKs16sYDbvWtsE5y8QYbKXvqmTE8UZPcTRzxvHQc5ptgkJcaDezqXseztGExuu",
  "key4": "22D6ZBBb5Bo7BcKoBEnK5tqNtdJ4aPeR1nV6kHJBXvxuzmnB4afDqRasqQ2LNeApZJmuCdPNx1uzUwzmRv9hvwAh",
  "key5": "5tWM63Wvx4oa7Szi6pFX6Rfymd2pGfipPUxFXkKSYctHzTQnXjxZ4oTEQSFs14M7JrP65DNkunzoTnJXSwN9mf2z",
  "key6": "4RaVGMHBLRe93d45TVcMqrpzGWJfJ9dobivNtEpAyD14pE171UD6RZKPRczPcGWbWxMxnTiC7YGmT3GpoE8iqz32",
  "key7": "4sNeXd6kHqn9F39joWPDgJzQCZzQNbJcLLmV8zvaeJpdtebB1PsXCjtm6inivYkv99SP9wAvGD9uvkkfuVAYxWCr",
  "key8": "2cAqBNhisNrHCPExEccrE7SJzmzcDmcWBL3zALWZjeUcDUdMtEprxb8jHjEE9Lyd2T54ALqiM7mpiA6Q1wAnemz6",
  "key9": "3sbUEJZivp6owCYThhKFg3wnKJs2Ndo6CyEsozwwPAp2eQdBJbE93byHTNBnjLPyQWW99kY9r64XpaJnqg5tYr18",
  "key10": "2Fz4JWsRgnYrUuKER6gGh7CCZU6q9SmWGVmMs5qJq7Yq6bd6wBMdqT6oMTRMhobYKLxLYuvrwdf59PiVyvwZZmX8",
  "key11": "2zm5ABMWr6mCp9YPajGwFfqAzKevVLfZisiLCDPsrFTcC95oMirgtWW7Djgf84wvNRxXCem3vqaRzVADi7yN2MzK",
  "key12": "oBmb1GpDhgcAa2zpiMRYqzujcpcDVKJHr4QJhsREu8Ywk3Yz8Xnxip2hMvzknvEegrJjh2igzfpffacFRy8hU6J",
  "key13": "41J2e5Rsej8Cfy9ZRmro4rwUML14VBCZ3ZCshe9npTzQUZyiqRSEJHoygCfRA6FzuhYMRELSHHjC2CzD4GNJiSCq",
  "key14": "2nC19dpSq11GbVzP5kmgxinJbHmSRSRicBtK2KfS6yTNrd75YTb8JQ2RN2QcEdFfkngow3GizTT5nv2cSRZLFiP1",
  "key15": "4Jz1F7VofJEkp7bNauxgRsGWEbp4Lv5NfPBmeX7DWwqNwvrCMLJZJbr7qZ1pockiQMcMJHrVeoywgjyW2xG6tuon",
  "key16": "4TEDtRTkDGd3QhsNP4MJHdyf1EWPNgWi8fdH4ccwevo5V98rTPDAeijhEgx4ZgKmqyMAJoxmYrmBtWb6iDcQRTje",
  "key17": "62yxRzAhgh4yyTB42BiavHVAvrAxxY2e6nyML8ntdbaESQFMoRnXXLnrTbvaBaHZ8Z9B6MWnjtPocoqagLacDTrc",
  "key18": "EVWJEjjrBZk8WUZ4eA1Bo6e2Ghg7LhNaNfuWcW5h1LyarVLAQnnXiFC8zqrBbDtFCnmgD4hPLD8hYyvjwP4Timx",
  "key19": "2ExN8UtetNJwsxe6pSai6gF3aDixKQ5XinxG11QZ7eEmof6NomCVDoSRiS5u2a3UXVahMbmHuYUjX4HcjRmRUhfB",
  "key20": "3GjM68SYywmDT5iTi6i2D64csJjMiNmtFYNiXXjanFJaXVuAsKc2UB1MEbeh51nrH3KyVhxtDToyyU8UASWz1p5E",
  "key21": "3CYWi6Npw8kcaoP8NHnWGQXmC3dp3LPCYxMay1scDo59ziNhjj9cFh9yay2UryK2FVjdGxw7Jjdec6Z21NfjQduF",
  "key22": "3HefUGjWrrzbFCsnvKks6dhRCjwTQtJZPWGqGXLAPhph8mzoNzf366FdhajQHpetxDNEL1tincPXmGjtAtvT4L6p",
  "key23": "4Gp7n1xgNbm7dcUBePFUqJkHbqwA1GY7m1nX2MVDjnAeKxhAohH2zBDEkjpqf4xpAxw6zXJ4dVcNtVaL1ELwnKdg",
  "key24": "4kQ3sWhubiy3nzUg7oEqJynYq9MXWPBPfRda711SmFQpzkt74R7Abh8pD8hGjmS7cbVoSbjBzqUPK3dNwKAyqFLu",
  "key25": "5AQUFbEFhVn8sxsx5yRUQG58ay7F14gejeVDE8v1yHe55nVhLzgDCYfKzpfBjNnEG8cHWKUAArPjxBstHDEMJhNn",
  "key26": "46AAcarFkXKYPoEkhMDRnFRAvrzC7BAcLp7j44KtmwSAYwe8LYX23PHruGoFVbMdXMte4QVjM64ErDas5nW4pFdh",
  "key27": "2LaCwN9x5EnGa97iHYdwM8f4gvquGxcTooXSUDtHL239ZEfPGEVkucF39v7tyvLxH5uZ4HnuG6X8s6XD8HZ1BwcR",
  "key28": "5ytJsaoU79nYvPz3vcMTqcM86scXMzQ2Dt8hHfZ9SYvM7v1BFZUiPyjvUZuuDoWNzaeYyTtLswTVpHqqGsEDvKAb",
  "key29": "qSKwmJ7RuTKrp17dAkpfJM7ECeKVvY7RHZzdNQPEmkLbmR9BnfRF8iSDRXX3MxuogfmKfGpMp3zyVRR6WmCaNBW",
  "key30": "4TAkBqtbHtC7TYkyePpgW4KDZL2NfoCesyuCEpBjqy5mMs81s663mtUNCmjKcPkHmG26amDWdeUr2USVQuebARUM",
  "key31": "8KVmTn7HSjisTdD8rjrgstrxshvhJJpM1vCh5UhkGAAXFA4GVHeshEdDwhP18vzHu9shivpKuJaHC8BX7ULMucT"
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
