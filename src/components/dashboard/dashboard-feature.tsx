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
    "5mEkymnwDfpNF5hBBmR5ugAzbvgBzcjHbsGZiuuWV1phdESH3zomrNhTbcPFbA7HC4zVT22sBS9iKwg9tjJxhY68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U5wTgSj6BRE8F9UA7GNUeXS9QM85htTBCoLXShy7VeFmS53wXM1Pb4ytxM8mSczS3RCDT7tLTrym6k7qH36JuTC",
  "key1": "3yxkdKbyJVXC2tGqr7v8ws2vLFg8Srq3vdBTP7yhaA6tSdnp2NZoEQ3FcZyyz9Lh5ceqArEDEMVZgGLrMSYzx5Nx",
  "key2": "5dYd2EjSeYicjeJhvZJaM1tHq649MgMzPWPxwRZQzM1CNbeihY7o1TXDiLSvg3kYPwCTC54UDVCtw9ZgvSKPtj42",
  "key3": "62UtdXVs8yDkkAPy1X76rcCFLQceUKUBox3UYdbh3ioG8JaKKVWBN7kaXQgMKiqBd2kep2mps426jxVoj7EeCteP",
  "key4": "65c1xkuJX7jPxjPwyGBNbphkQtdjnKypQKdUgc4snLnWNyyP9jj6tZ9qJfWHHY3KVJZAbPQ5iCnrCbTCYmDeWYHL",
  "key5": "3kGXY4xoF9L9G7XnGJcZ4QpkqFKYXHAJh4Jj64FfJbmLVnHdWZ6wzQRYvMnyuT3YojegWCUz433DvYjKTAewdrYA",
  "key6": "2PAHy9MQ46PWAoG31hkCfDgPDrXgqzFoSCR3zo2UT3hhF4G3isyXGeB1pB4PRau193nCeJx7X7Mkq9mJK6wh5N9V",
  "key7": "DRogjNTX7EhFTR9JwxxJo7efNygUjiyrTxTkLMqGkXhZYKmHkEZ5nbdVdNoNr1bXMSSFcwwC4YPKzw9AaNkWdpD",
  "key8": "47UBZ8XXrZivsEZprhfBConEfnqbKqSsLbaqTHpbLr4ZVQpzQjUWXhjQ2fL9JZrizPLEoj5kFjfBYtvSB1pEwRhd",
  "key9": "2tchHSbAtg76pVh9S6B5eUHnzY8TWa2Nme8LVCtuTuRWts5Vz4BqC2Aurwn1LL4kXC8L6Wzq57E2tuFUYEkMt3Ku",
  "key10": "269sqUPe6VzsGr8skayHRx64e5HBhN6W4aoiN9ZgDWSAsAmvqirG7qUkDiKGDfE24E94hz2CEN2BpitZ4BaMwxG9",
  "key11": "4VgymhCamcLzDKYqShGE2XhNmaCEiogXbqsxU4XFx4iwQm6ZQfCoWhEEXrsEEz8Jb2ugg758tt5S47PuuXVD1MNk",
  "key12": "48Za7igJQTfSJJMxAzPnPxZzfavWrkisuJSEMerRW7WvTrUNMJSQvCTTBjb5AF9hF37FPFM8KL9UUFhwr6S4ox8t",
  "key13": "F4igmiUpeLsVM1cwwnd8CTkPLZ8nPD9qjfVc7kq8kyY3et5HStChHxN9hyjShikPHwSgw5FjJRPhFMP8SaDbzCu",
  "key14": "2B9cHh7kTJLrEK1L9rakn4kggNWUqAzMvhi9wWSFYaRQNQjNQATiJ25qNat6VgtUWEU3cKnx8Dxy1ep2CaR5nGmK",
  "key15": "4RETKmi5ZHd6zF96WvqGB1rSkc12M26iZaULhB4C49RttPkD9BthYQSMuGS7KB5oQ4BPh7i2gWjjFe76WRjb2MM8",
  "key16": "4An5Qq8gfd5ekim2MpAkP7en8dbJC9HFV9AKuq7if2JyedJJf9dGrxLJmtsN9ULYZzmeoyokbFRD5PTGnsb7Vph7",
  "key17": "3j4MFKyPZDJZoRhxgZmzJZmQYw1e41uwG9w8jifnfPuEuaBiuxZfsGxTRAFUEgCwbzD4bdb5gg4RRmMkA1UdoKKn",
  "key18": "5hnCUWLaQ2v8S5E5kvtJKFPufoKGBYiyxSTqDa5Ca53xtrb2RLdndmMSU9KdZdAwTnVbDHyAoBa9ghXjTFi25fwx",
  "key19": "2MYMLrUpRFyxLpKq6pBdWcDrFHkMM8osSyUA4u8jYH4PGuFjrb5uaDJPcK1AxNQKbmBKDH3Htraf7jeosaRVDHrj",
  "key20": "53pWBgAKyNVm3hbBfzg94mDddMtUo4qALzTu8A3xePdP99Zws3uzYQwNQoM3qoaR5wdBNXswAAr1VLZyH9A14Paq",
  "key21": "2g1eozx8j8noWhs4w1GsMkhDSZxZxsJyJpku89psSmVGzEqPbyusdFiD5TGw414dX2VGusPMZrg3Cp6o3HS5A2Pj",
  "key22": "64TbtNwqvTHEnxZeGb5UM5xvqUhTdqr7J9sJGwMErQ1KhJDa31nQwxzoxkdjPapWm83ouThLXsJ41Cy6Srhkt386",
  "key23": "4Kw5NfURHTmL7H2rVziaSfGhR3meZo1gADxiyugYpa38NtxYGV29vxPh5YAX4YKLiKpk3JQtzkAbgVtXkFHB7Lb8",
  "key24": "5NP1kn7WRm9iRsTfg1MxDfpt5By5MmJyc3wCZq9dfrTd1utttRepXf7TrtR43jTXScYgs5GGpzovFbPdm6yDzWig",
  "key25": "3E7XKM6qC6r8CV2EU2G44L7LgWUt8N2f2YaXoYod4F9wdJmzZc7D6WJUPjWn6NBHwQnoVCYA4UWvjNCeymrFRT2d",
  "key26": "4Z5U6MjjWLAyYdBCyGB633ruevNwjrdicJeW7nVHgyB9FrGjiRze8m2vu2EH2Ab2h9esusv9yyn7UwxXo9h8HthS",
  "key27": "26i84GVAv7KMysoRYt1Ur5cY9YHvEAjtNNBRfE429LKgs5S9TwRB2JdnKBsXRkRY8qjAzLg2yny5nTEuitWzPVMV",
  "key28": "5xk74wwfcR6vwnpwvi86n63PZT1X72HkmA6kwM96NagJrujXqythjMcDt5RipF3q6dd3ByKoieiyeQLTBZxQ2pbX",
  "key29": "3TJ3QWuRy7Sgfq1L2EDjw7wzRQLpebDzKUwdcdXPgRd4uqfmkGD8LSTSDzYwfVjVTXHbh6iJgNxz67275CvWgGUD",
  "key30": "2NXqueN7nmoVSBJcUsF3yay17BAQkqSFN3MF9yqaSWXm41dqYk7DtheKjRsQN7oTHEGiKmQcHN2RYTn2Fuh1LWym",
  "key31": "4HM2X1gYEyNr9XvjYXF3uDEaSeqmJKiGmvAgDgGocc2sVEK8ejtK6WUm3vqRQLdYGks2JBdZhbuouCnpyGH9bDkC",
  "key32": "5N4n2wBRWyzaHbtN7mEAyaWtbwE3LjfGEnUabKN2di3whQ5UfoDgN7p94gg77MtWtuRuZfmJiNJsiJkXVfkMTPLE",
  "key33": "2Lh1Mv2m3J3ZLBJgN2nmvk5wYfga5SZNYATVwX48UqDEESCtFxtX7UMFrrgYtPkTdatktx1LvGmPPuRojkYpk65K",
  "key34": "5PiyjnxYtMqRRT6Lap94h59AxpkMcRLnRbb1XriZAmm3f4T9mjBsgQREJTgutbD9E86mXvfN74SvpGpzsajeikVX",
  "key35": "38eivLJdfyTRUfr954nqe74mia2HngUszJCY8My3mrXw14n2Jak34a9Eii5fcd636KXnBXbrVYthc2zCYvBbbSpw",
  "key36": "3kzrVQhdD76faDGVzaDCLyYiEcWCwM5CCXhjzxa87xpnKDa691ZpFUN91bcbSvvuV75YtVTtZ9AKacCRepqQk16n",
  "key37": "35YngdfspTP4XDmre2bVDueEcWQbTjQeeCkANoBH8QqYsXdnxVibuMm3qTwMqDqaN3XBH6L3QVkbSCP2M3vqWDiC",
  "key38": "Uy9hoKcxus1X7Y1sRUpXkkYq95aHucPmS2tsKYEp2WSH6frssAwbewgHGJQopVKuJZYqqRdei7nrdDvtkfsrg34",
  "key39": "2k4A1idn4ioCR1fP9HWF6qpgxbRzumPYApdtthDhvhFdx9uiXyrtcjXHW8YhyavKPVHjps1xXHvBZmfdwuBjwYhT",
  "key40": "ozxnpfUos5p2TsKbbPtDmL6h6bez8LCqttpRPUa1bHWvNUcEgMRAazJo3gGJuhVu7u1KUs4PK3dvnAd4K96xuwg",
  "key41": "3REtyQC9YxWadVs8o6a3dkdzMyzkgpp9h6TvXgZF3rmzKw9kpqmMawAXwCKVQKrMKwAyqsMBZWSdqdP2jdeSs2kK",
  "key42": "M1yMPaAjQhky6tJguADvxR1aaahd51Lkh1u1Y5SbM52J4PGNbBDy4ZDM185JqKSCVwSMgbwYHj1ZeGui92RLuKT",
  "key43": "4yRJrmVwZLEr8XsXMWb1utAqHvNQZfy4a5sdh1CDAaxSKb3tBKcZVWhZayPei2SjHDfCkT1soNp7qX5KCQNomdK",
  "key44": "2ZbCscUJ94qVS1cbib7dhHLgmytFv9QtJHK9EYiipZbGPD9SgiHRnYqDc8Cf9AhXk5xLWAZ3nxurWSUJN92q556H",
  "key45": "4AdPD6iCqLWjqpFP7hr23ruaaRAcRYB1ST9VvtnfvdECkncERi4aP6ybWkkiowWxD9GAU3Tt4EVHpLmXHafjt4tQ",
  "key46": "3wxQYmfgfb4jfb2XgW1iDAadBKNfsauQYqg65cn7gB33ScQuJm4h6UWdnwRr9cTMBygSCjBdSc9ajpjFoWp86BGd",
  "key47": "46CAe88fu8U5MmZuVYfG5osX5k1i9GuJXJ98hTzU4jZRrkuToKA2aqZN9zPpANrY4KKrh8hepXqwNsiS7BJSWo2i",
  "key48": "GS6K6UEXxJBRGxRX4q7X96xLCvvr8QbRzruX7UY3WsdvUqV4tfihbojTE9QwV5RbvEMB13qz6bHkMxgd9wtVaHX"
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
