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
    "3eP4fQbF1KkHfFaTk9WsiUKQRJ5roj634VJmixKF3X35bvWRijtbzETyv5RV1CDpyaH5t7WtqCFPvH81sBjLQbV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WP1a4J1BwSkHusD6goaW1ncTFgPbDAuAdfwq5f8wbqJt8LFkuo1KgEfTVugBq9PFSeF3EV4kGUqDpjc2VsmJW8V",
  "key1": "2W5w38PugyW1wW28wt7izuusAWbo6oJx84zW99iThpHoeePDgYiMHMKyi4YhXJXiqTaVRvyjCdXpzq5bGdHeHmwH",
  "key2": "4HhAUe6LUspTMkz3Dj8SuwjtY7z3f2ZqeUzpeyn41Z78TapHuwntP9xxbQER2JZK7dGokCfRxiNdPRbuaoZTRoVg",
  "key3": "UFDtYDvzKvJExLqLwmejMjMNn8TaR8C7YTec3sVt5ycGWbBdnHsuwVqHGEMJ8FmJUSiyAxnQ4RKg8WmPwGp45Rf",
  "key4": "5YLh1X7RTEzFN9Vx66e8nNxkhuWy7yxHnd9dZcio7tknYmYD2vS4N24HJcAqEdxLtFJv35Gmwv5G4qgmDj9fWJd5",
  "key5": "3GyxQJ1RaayE6Ln2KHAyRNNaKKDt24sZeMNPu9eWj4QpawLDJvqLyRDE14k2EXtfcy3LXotDsVD3YDBDsreKicvw",
  "key6": "hDbmnC7MKqjAtpJjk5Ja66sg6AHwXoG8E2ADmrFHix77mTFxuhiXHsejZRoNtXjsuidhJEUDaUoeY4mrP42bJDD",
  "key7": "4p1HqKiM6xWhPbTFGeQQXssTwauStAV2t4Jv8sQMeLKp9fbiG1zA75RMseaYffxZThpJNom6L2KHiZT95it8pq8z",
  "key8": "4qUWMEvoQEnsWG3RBF62BaQCi5zpU3gDrz46beowuWHs9dab9y6cia9x5FK9cYm2wyw4iTbhdyEv8hzjsD5rcdNu",
  "key9": "FaiNirKxWUqZX7WSpnqHdqvqi8NRCnHTpeyZ1VxXP63cT6DXAHsCyi6u8z3LSWYM1AAC78HcGMvjzPejM55avLG",
  "key10": "i2522FzM5n6Jy3hDqe2Vi9kwb4ULJTmnQMwG3Cccon6Yq91eo2Pp3jFHRCoyqiEjyqDUeoXprBKJUNdt9GcTPzE",
  "key11": "3AJhuPcgAWfRUN7PRgq1pjTP3RiaPYStzhKTfqvM754CjUDqwAbstfp6udja86EhDbbcZZavwbvfZfbAv7u8SJZm",
  "key12": "2V2EU3wkHQj7J2gqqZUbXV7ugXXLsdhZhorEQStiqRPPWRuhMx7Zkaj3LGW4WzB9trHJfhgVAesHQNY7XetkPsj",
  "key13": "3Y7p1Nf3RrEB8EqFgcxisS35Gw3vHDFw5ZAFGXRyvsic53uwS4y1TX8167Wv6yisdGpRZimMNco9ypbfyFWp9KZ8",
  "key14": "4q6gCfXMeCuz8dHbQi4dv6zecF2UJX4cPoqFnzeVvyFaJLEajdsGbfbHvE6Cy3pMRhHtEZZyP8uV77gK3F9JFuwT",
  "key15": "ZMRZY58eL6T3cjN1KoRmPiVu1AaDJgdsn1N8iNLLZd2bmkZvQ4jiXeWZtinQU11moxCLmEMbGJcuPo3XHnPaRpB",
  "key16": "64Ft2gNgsPuA77uZ2EcZMJv6NqsjEjEfRFXQMN6mdiGeEU4ixWVwGdKNKbdRVPKws6Prx1yzVokdJUBdfYtyuoGF",
  "key17": "4DvVta1DvpZUKoZCozbd9C33LQ1gAyzx5JY14hKZgHbzfmFp7E3BQcqNEq5JxVE2BXw8H3nXQEyBiorhZXsjqZrK",
  "key18": "5ojTy99kNVo99wnNLHjrk3n2rKtDXpQpxVhLqKotSYqg2nnymKXAadfpQgqsYB84WbQBNJag9xPaPHe8YzgsaHv4",
  "key19": "4EKzSS56mZw2np4KafjQj68hP4ajWWhn7hxjfamW9HAE1wUgBu3HrpPsSoqqnERtbpb653RMeuyXRBKEpChTakAR",
  "key20": "GsQA5YvZ7oxDxXu12q5CMPGdyL4q4LBLNVYJ8HnG4mc1f4RefMURVPPsvFmygSTCfP2u8XNDa1P4mz8XzwC5Z2H",
  "key21": "4neJCod9SwwvXcmoZwQCYEgp8TiDj5JYYVvLqgp8zu8Kz8pNX7M66B25is1VMxBobDPFYkX4HvPfPYuaaj2tpyjJ",
  "key22": "4kM2t1Jkuwk7oqkt5rEyjo6A9aNTt2WJNRSjLwMTjNo8FJN1XkSbmd1yHkGY4A4LMbnak27MDJcQcQWtF3yY2mC1",
  "key23": "51FRUTHsdTaGvdetT5hA7wcKZhcp3xJ6gYnJzkuhL6z7GVtfnozcPAepexPimymnGbWy5gEHMrB5SZM1LXS1dGjp",
  "key24": "389GjhrgHzjaCKrfYK2Ma6A6zMstS9q8owzKbRFA2WCCL4bDXZC7nPu77RmXUmNkMu6angRhWob1JBcKJpDCKFq",
  "key25": "5vnyc5TkUjhb18ZA94LPzoSSc31FQAuoMBSohNV3abbApjNxaFpQiY6BH29QWui5P2JBb1VhuWxxrfwJzBxhbknd",
  "key26": "5LJui3am3kEzBHUHpwREFud5h4uJCVtHMxEgNLbENRroNnFrpfWiBUJoN6RRn5NiVgbvi12xwU4mPbBdUfCawWCs"
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
