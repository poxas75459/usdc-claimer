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
    "5f4kwyeeFtz41gBQWw3LHKisi9sSqDf9cLRgdGAMHs1jKhPZf7txCho9B8TVJPq3WfxdRFtr2SKYSdA6DdCV2QAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RtxmGYZfuPfrVCCz4axcmiDq4kc5a8nuf6RBeCXhCqo4wm2zaTWAk4RzypjhAi5shewVdneaw7trshtraZiamDa",
  "key1": "7NPtmekkVjjgcwGW6iz1asaw1mqnFFykSoNEq2VZvMAh6uaRGUKHtzCsjuXJjkL3kzZLDCsciVYb4itoqCH1Xgj",
  "key2": "4p5NMuSfZwPwoXLQEw27ti1iMLZnp5EXP3t8fGuxG4Eu1NmByePeMW67LSVg6FdJjwKjbZSA8H982hWRAd9d3vD6",
  "key3": "2BTfwjMch751KPM8dNYitorhEezJrtW6daEoiWBgdkv8qkSHChQaYvpKXqNAcbPigskmupqvNz69Qgm8Wug5xEJP",
  "key4": "5yPRhwoUarJMFE5vc7oBjGESM8uSCj3RKQsmYreESkgZUfxfrGX1n5aZZYpSwNWnDVP7dHjZJKYVCbCu4VHew4yG",
  "key5": "3MNp1yAn6p5jZjLMp4YVz7MdJ5neAhwi7hkdv8csxNaquhL1ETrqwQS1Z9Tu3nvMEPv2xWLfZEsWBhXMbbzoaZHF",
  "key6": "3jBS28Uhg4HVed9ddMED5hZYCqV7JuFcKTpjDDw7F46FjQUFhQJSFR1rzseZcPH7hMNy7znWCSsqEV8bhZxx8Y1S",
  "key7": "3CHVUDCQbHhJZMKNm6xY4PhFymkPNpXpf1w4GAL4JhashccFzfSEmJoCv8Vx1xfwuBgsRqGbcFcgy3YmSGK1BFmj",
  "key8": "2ys3vpBZ7Qy5wcZr4rbGoZaeMfF9USHtHTWU8pfndVKnaTD4giUyoZGb4oMxqNjdANu5TtCid527vjuNDZDpJH7v",
  "key9": "5dRMQfbEjzKv1Q4y3e1vKkvrhzYJgUB6n5a1fMcPWQFAfXPCdK5b1Dwvgg4s12n1tM6zuSgV7oqPSxdQaMmGEHDx",
  "key10": "26Bcqc2xUN1NoZdjfp4RAVKcXFEK3r3nqAGeBgvP6nddHbdjd6KpRKbST2udvYqxsWCeALmC3i4L31pKxmUkg77k",
  "key11": "3e5jC2Kz8aMCMHPDz8JQFbGmvu3yDnoud9cwqi1cjwJEE2V1FkHTp2G8z7Jo1JP2MJwk9nfTNYWumGxW1CoPzvYu",
  "key12": "5KhDAQobHNBKP46Praz3c82AmGWLhdijFdDcpD9kRxCFxaR1DUej94jdHieM92uzDYW8dqMNNC9oXDQ331vC8qRn",
  "key13": "5Ff9pYk9NDc2tEcaTmdRCviTVhjEsZJgiA5bNrY6akfmmdfco5NDkUCtsKeihXmQGJFRVEdAGz6SmJ5WnxbwAXz2",
  "key14": "4H4PEtW8DPBdMbLMXPKbTTRMAPGZaTeYLcAFvpqGoUrrh85QM577r7D7k6U6PV39NtvFs1uP3qBDtJ8CHfELCkTU",
  "key15": "4NnJHxzgH6Jwb7uJKxo94xLAYM1iQtVzkh1VP9VtfgXb9B3ngDAVgK7Erp4VEVBhS6Kwk1rhCFfc1YQk78odaUca",
  "key16": "4TSubgREVGfhpbyoKqwWzafpxrdP6iYXmbQkzMtAvGwatxkR6yf9ZpN9XXJyjXmXBeMeB3uuAdEAguoRw9pvg4P8",
  "key17": "45RLJjVZhjCzS4v2KBvK6hPLq7KKdkhtqTWBUL7G4T88aTQgvS25eKV84sLRseJrahwo7qzq4YTdzK1YBRLaaNUp",
  "key18": "25E9YHg7WSMiC79LmVD9tsA9EnyYUkrKFaNGpmQUHtHT2K7MoJTb8Mi92TBHK2iJPyghfyrfNjdF4MpxN4Ez8Jdt",
  "key19": "6QSkgxreTNFWT1ECiaAL674Pa2TkLV99ZwbYkhPbfDASbgdqd8nyqnxzR37bETT5d3qy6413AS9UXEgYR4rb7cK",
  "key20": "4o6buNKPgg4qUdagvoHr1goz7wc8E3kdGijnGg86SHUYb3E2FooSiRHpHiY7y87SejhrFAzFSes4SxLZRid5KQBB",
  "key21": "izKzw7ei8xuEDofiq79qM2aghpTd743kZFbcBd5ELdA7REq3nrtt9DREeDHS9kwcfY6t7isFdSMfEiTUSs8awpy",
  "key22": "35CpwsyGcmDyoF68fdUrHNi9gf5LfhLjEWjn8SDfK3W7CxQDx66CSBmch1iiZudrpLmp6WL8rBNF7nFKMCwzgDNS",
  "key23": "4aqc717SqcNQjoCCkaui6xfniVBa3nN5j1JVDKKNS2v4DjBKtRyo5HbeYhex5aLUzR3CDwCaezUsD9NCMcu15gcH",
  "key24": "33vmjiuvxSieQavTXnhT2ZZsYiEhJzxFjmW4aRjexpQxzq2ERXAwK87z1nzs4hW2TVVJUwwc8WBLDA1tuNUom2pA",
  "key25": "2D34pTBSveKuKdMXkdKbDQNDZ3SSkZb4fGcrK4vU38Jku5jqhNvMJZF5LkPC9zHFv2mwZsBR19Y5LBq2G7tqjmxU",
  "key26": "42zrP8CFCsQp2PPtwtS836TQ6YqtNCKDJct6JYZd8mz4QSG6MUD8eBnSUMk8f2uJtLMcG7yaXyjnjue23ScZivhV",
  "key27": "4Wi88i7jNhn22mdzTHLeVNnz3xwc9mm28Uvdxdd3NG3byhsFXVRiKedUY5MhcU9wxbG458qqcBpC9pYgSuq7SfKj",
  "key28": "4xCh7AU4H1RvrgZZLBDxYi1FhEqFqJ5xgnAgUMYGeXhuTc4d24EMnHZiYBbSbc2BBqngeTT8Kp1gdTMuqUfuNUvQ",
  "key29": "61ZrSQV4BSGvpaU3nRZGEGwCpyRB2gonBYJFxpTyf7UYvwZ57nevf7gq4tzA3TaHWaT1moGq62itiG95Wybg2S6u",
  "key30": "5avJ7Y7YrZGbNWrJPt1ykdxyc5yWf2XuDbUYtGLtyJgbu7kDUZWu5LCk5HDnV1ush5wMoNzcKVQqwnEeqHXasK5H",
  "key31": "J1oRvq5ecV9cRNzUC7wnfjJguwnuwtnEg55wapxBAMz5HzvuGzJkfQcEieucjjVtnoavDkw56skzPCQKa7TuEui",
  "key32": "3KzhWsuBGovvxRUqJ1ua6pUJKwcvMw6K8a5EDq73Mxo37GunKSbsk43FgvEFBuZqB6ZBNxqNQ7cC6KJRxZjSnQoo"
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
