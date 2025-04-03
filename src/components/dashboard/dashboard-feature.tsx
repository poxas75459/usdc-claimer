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
    "26wbjZrs7XKYpWTcJ9KHwevmxoB1isopAbf12xqiRGaXHUGPbi9sYSTpyYSEf9DAfBqRtf6CLBphe2bk7EjrRQpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eNTVabiQo1KVqRyXWEa98uSBqdLLXbcUYP97xenLoYX5o7G347oiSGuJuwP19g2wBVqgic6F7oFjnMU3cM3x4os",
  "key1": "4Ei7xhGSoGkbrgP7JgMjTUpwNupJV6DcvrSwkF3XhZRkcM1NbUP6R8R8JFxX6j1FLwC6jDTSwL1jHsNZg85AWdxi",
  "key2": "V56NUuMax3pPRbc8f8ShU62RVDvypBuPTY3qwVnn5MqTnvX9VnwZvc3P3YrnwiMKfiXZfmN3gGALf7z4FEzHvaT",
  "key3": "58ArViRbFXWNXFkSgKUk2mZmu33qvNdQ9FDMrtbwmHVhTxppFfvfh1TvPjDaSH6UFJUtf9atKH2Zii1r3eABc7G3",
  "key4": "31uKazf7wcvNu8PFzHisvUMMZFmDE2tkYAdwiBncx36N6Fv5e1hjsuMJmD9effzXZAznTm457G7kqkCKrCHn32up",
  "key5": "Y6ViKHXBGd8jN6FG7K3momoAqz4ksD616SdsKkY7NpEATRAy3MoeWXoabhkqmMX5a5SbN9jiM2joDHpnKTocjoR",
  "key6": "4mbzDwnH9qkvdiRTgtZe2Pqb6WrXPPCZTM1UkEa3gdsXtyPeBqY8R7a7KUdo6Bi7QAKqz7KSTHjKQeK1Ai7NX4Sf",
  "key7": "5g66omqeGTo6AsauaEnkVqKjjNJgMxJZK4sTcZv3zRYbEj2mUfa7tugsftyw2pzS5nLqyvrZ5ewRQYgc6aQfJeuS",
  "key8": "2BDwH8P1vj3EoqZ1J5K4yStd1mdXt8Ej3MmtAnBdGVo3xJWekcrBhAcjdfRgM5qeuBMvQQBLBoHggfndvayiLgMe",
  "key9": "4DCYyHAdYLW1JLZNvCoMeumN2RoqBCMf3KwQkjTgkyQuw9SsPV5LXG6WpwBntZpUJkpNrPdWZrqYCQwnJxjAjZo3",
  "key10": "g1rm7K4BRs4a5A2gDe9fsFQY96pbxZzNtgRB9vyEcNoZyvHfuUPbPX6C9m5pFKdAPgue3yTLL7s3tCSXyAxAERi",
  "key11": "4CH3DE5qHJ5K1bgtRfP1JFZPprLSi3BhEhU82m9164cknyX7rx6ddmk53GynLQFUiN5V8Pgcc2xH8bruLKDicvfQ",
  "key12": "2rN6zH8jTDaHomNk6KJ1jkrANkV3jYkyHM6ZrPDqjZtNadkFXm17uwcTACNRA4HL8ekSQsLfai6brNihCDgmXPaP",
  "key13": "4k7LaUPkUJWXhXXZZmQiQfBiSuynjhDAK744EnM2FyvWoPKSQx4hSchYBmzUM53bNKkYv4iNjQRhAsyhQ9H9RAuy",
  "key14": "oswiJaamv1ByFrW8rMFFGvaw3t8X5mcBYEPL471uRwLcuPmTcj6x8b5NNG2JAatvXMTgSFKqgJCJBinxa2rpuKK",
  "key15": "4kzxEV2ZsT3NMEbVnz69QC4ZXXJAGBGsFG89YAkCjd5XHqMLETtNrPuBws9nbXddkTr2mVZNxmFbMf5RFaASHtqx",
  "key16": "4W1EmwvVbi8e5tN2wwmzv2CPnzb48fbyjF9DEHrEqeY1F7S1UfrRQnvnJEPF5kuDYhBncCVvevaTUmL3gdUDbi3z",
  "key17": "6wA6k4SFmuvGLFh3WrfCbr4DnmLTTkDb3pGgmoK6rxP7HGWuqgvZdbj14H7cpMg3FYAp4cPR3N5YDU7vCpizGes",
  "key18": "63gdMchR133H9e4VUomp2t4NktQSDuzmeoyzmFvwZQf8BPJXtoEioixie2VG7Qm9yW1bmyPnPEqeDSgr753TsSkb",
  "key19": "29AjxarPq5J6EP4AyHRKJK3XEPYk1yYUaxbjPfz9fVAtF5Dw6kA7CXDDkVTyswRYyaufpH4eH1aNxRYbpKovRCeP",
  "key20": "4kPvkbw72iVkZQQV3bC2AcSZAiwQDN1GMgw4MwA8GMGBBq8LSt63ituKQXA2PWdzR7BJES8kJvbN3M2JWsABX4Fa",
  "key21": "4DqdyqjyQXGAgMx6zpp6jfiQkSRzp4v6pLLCs2JRQ9yC89ZAPgAGgDgMVm9smXyz1EcHUrU78cBDoLLZfZNBucX4",
  "key22": "4b64ZdBz8YpCePMviNy5PGP9cXf7VSKx3r7TovAwYRDrkvcqokit2SGP4FBj7BKSJgWxTAw5XprZ1RQvH54yVC5Y",
  "key23": "4XeX8mQ4yh9VtfXQcTrojJpjmidw4kfvobxL9xBkv4X1zXwX37sT8AG4jfzJApRMBt9yvFfkxj2eZBye1DBSHTem",
  "key24": "2FQDP7aVCaQ1k2Tb6WqASdi1s82gmv6DNzg4tHHmt1sbB8tdSoQLMjZ65xGXVzx9KNMEV7oogp3c6vjqDSCHvuW1",
  "key25": "5Ebt5rnA9vHdzpVZmY9aJ3YCTidAJxfrxKV7ERnbL9dtbXT1LYJJJKC3oA7qiN9SLGMizHvZEtfu23ViQsz9gC1h",
  "key26": "5G29LWGNvvMCEtXfrRrUNzEbkKT8khMPpdhxQWrAFEqcPpEkHxnZxiMQQGNj7RS62aa61Dm6fzokxAHcTo713LCY",
  "key27": "43UvjDgmhEW2T9JQmkNL425Syxs3jyDULRQgHyf9ZWcEpPyPsRRyahM933WD4AcsQG7usLeQFoY3mPAHrVqfBYq9",
  "key28": "xsQeSgfCmRLSdLRKxhWe2d4zyjCiFa2eTEYJkKVXvvXUv3rrRQuK88B26U8FZRMTZtXJcBuRW5rewM137UF2qYt"
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
