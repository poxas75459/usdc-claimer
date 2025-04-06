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
    "392itfHZZArp4G8a7dNn28NbJpJGtMgXLHxxG5TfhTmdqG6frgbZvNpxEUd3nemvAGUdLkrQpxrz6RpW8oUV9ZJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AxcaPQdHCXAPoy87g2MXpK6f1fHZHRUsuxgsMZYQFCAsb46Pv3DYzoXXRZ4b8DTL9YRREwC5fjsbjoGSbEJP85T",
  "key1": "3MSnLXkTDMHzi4hFMs7cd9iE3DsuWa1DDrGgmbwrwmazj7Cn95CkxPRG5DpVfRHSBnreybQP9GF3cYgUTSinRM13",
  "key2": "54Gb1iH6hEQceyW29KRGXn3YSGoZJkmFXxesW3bdwR1BZ7DKT3YNYuhpjxckcZFdJGaarcj1thYnzuS2rF5DjLCQ",
  "key3": "3MwhEUKMy8kLZdEVPpJJF2GufeJrHvPoiEMFHYm5wYnfCrtnuK1bh2TB2kNSnHvWB5nadbhAiZaAq6Xaze2FBfYK",
  "key4": "41pBfVyBLLUFMwhKCCqM51frWDmXoZRqX9hPbcAWTuQxNbdWfNQaa95BDhoJD2TNC8xNNetMkfB7gc42dJJsngKD",
  "key5": "2WQAMEd9DbaQfjSz1sC4tW917nDPTb3vvw7ewgEojTT1R2xTycZNcNqkRmynm43Ry2Efamkrk7AHFecucoKHQZjL",
  "key6": "553xotxCLWhkvMyGuESGiAR5UnqKiMav4Bywng3t5T36NQFUfjAmVAr8jomUmGKRcE8gFJK865s4j7ULBWNZmt23",
  "key7": "3hYuPrPwJGGuBJKaEQJkan1o9ugUJGYoNoVAfU5L7ZVF8ZZ7YMsXwBcWsnT8rJT2YScEXe4yYemHxBQRc1gxXyry",
  "key8": "2iLScjmr6TCP6WzTNcBo1o3GDZZ9Sgu1g2Z85AWyyLhRPT1ssvCo4zz3a8RG39SQ3i9VkEdJ6mk7kQhquKW8iqR2",
  "key9": "5xNEXzuCoNA7drP8vY5r9eDaoWFofDDfbuLbxMxzdx3cDAMmoGs72nQtuvNWwbyvSMDgjiEp2TD61ggwJ9n5kgTX",
  "key10": "5VURQ4WY3HE5mjYiFvPffpgvy67F3F6LyWu1E91rfL4giPEw69vHJBx6FxsPsn6z8XVL2ZiXh2NMTBtTX9kSgPKB",
  "key11": "274nNoAXWCY6gX66BC5mjCNp9LgySp3ZmNYHmB9XhEthu32ZqNEMELvgs9YMboxP7HEZm2TqepKUKb7557o8Kj8v",
  "key12": "SvpWmjF4WUfTNZeaEZgfNmQdFRYxhfVN5pPi5eezoDunxu5GKU8bq751XtLpZ2u1QySqu2he4vPQm6XKS9VQdN7",
  "key13": "4K6NRHSHg1kEU2VqiFVPvdBsKrSivTjZkecW2N7sbq45qyacqv2iYLjp7BA99ajhrAW6k5JGMW5tRynp7e7DQcXG",
  "key14": "55SKkCHz8kPrvuPPdSMu7fzgWgjNxxeNG6SeQRj8RboUhrm4DahusjL1LQmMtRRtB16wCMrCxFdADBZB8mSKVSVL",
  "key15": "3EKa1diwmaCQpcLmZdg4npXWhDhkEM8gDsEkUDBSKmqHLqCiLCZ4ZMxzpxbZsVCpnMqsU11Y2jYFKV1W8hhjjjQe",
  "key16": "5WXBNYSHnJh42UpNPxBq8qYnsdCsTso8j1KTjjbd4y2e8CRGNDoH4wXFnh5sE4GucpD9renGdHmKBv1nQTsFLYYg",
  "key17": "4QU8bQVK3TYPXXoWsFQvGa2kFBgXoikQRxxUmvQ7SdQ5q5rfM6Zitx42uhMSJCZ6AXmUmmkyPJyQP5ZsWd3kNfU4",
  "key18": "3hH8NgrhbqjES84DEzGnraVe8XUttT95tjp1biKB4KoVa46Z4k9zYMmdYhAwkpjArHxNkjPsfU2tVbt6yYqoKTuz",
  "key19": "5rT9czgj3UCz6aXN3kR7TuHprqReNLZAMMj3UiohHvmZHX71nFtqRLtyFbNbMdmYxG4FFm4EDnZn4aM8bzpywPy1",
  "key20": "3ongPPndCq5SEPHeo8vw4wchcgDLk4HNRbtTbjeWWbPhjJxPvcw3pJywgXbu3uE2rinCH6DTQcADrWbLzHnYpmtS",
  "key21": "2nteDizNqvDo32EZUMNqgvXXoKVZ6zdUGwgZez5EpfhG95SdgpcpJDCbesLsvkHeR3484emSedR4e2T3KeabBQEb",
  "key22": "qKda46ejkQrs6MGunW43ZrtjPQMzCTtWwdATQA8m7Y2z147F3MthnLhi23PyEwn1TT43xhFMTS9dd1QoidYhPpk",
  "key23": "4ZguEEd85qup8g4iyXSpNLhVq74Dbo8bg2MuJTQU8tGmx4RFGJf8KLWpxYPhhE3hfzDWxKrBiXz3LujNTRt6YukU",
  "key24": "3k9WJSDUse3TQB55GYUbWgybg4fnMQTs5QT9xdBKq2LEPcyaEZV8qVvaN1tt9ojY5fC52q7Y4vmFdUK3ND3F4kzX"
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
