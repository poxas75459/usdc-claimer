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
    "s7ZKjKZxe1thpWHbzACefENfReU2Khfn4UwZvXeFRvY7f3FF5iraZApx92GtANJfzjWQ6dZ6nTmjEJRgxF61fNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GCLx7EP4QcERWqJ81CZEej5tbiJLgUDsHepCDNskbCUU2drgdqsX1g8v62gVYUGxTfz6A8pcqJTjeaPtReDjWvf",
  "key1": "sdPW8hvQW65j2Jzd3BxNUMBHpTvFb1TyAEvTXiD5WZDo31mfZebNsAvqw1mtWcUfWV6MMizKmCULEHEunFrfmWL",
  "key2": "bBUsQd7G36Jg5AYjn1UTEMCAHWdqjbEFBXeWzVxTpVHyiX5b2onzDyN3gBW7UcrstvuAMhSaoas7VQ1umtJWgaY",
  "key3": "4mwugBUgs67174jbemf4H6xnfxmQ56rSZA6QQwtVZ9KHUaBBK128NeT4L35s9TEJcMtti6dv8msSupgiXZg4roZ2",
  "key4": "3WkYQfWKvDijjK6kNFf3pgu91tKxT92ytpnBnXDiFXzPRLHfizLtyPRLWsTzAhHevk9KuAYSZZ7zNm6mNvw5vK7w",
  "key5": "4RHqa4RDzqjUp6rscY4VYYBsRfkDjDworRLrkwvhFYqudC6XibQQVRDabYyAXKv1dbhiqQmVQnNHe1evupsxnuEJ",
  "key6": "5Nr37dhiRAjzJ2GAnqB33yrbTygjMMDGMwxY1y6fm3aQPq5HcBGwUpH2wqbj3AqGMFR9iUHbRhXr9KzWSNwUNYa7",
  "key7": "4Mgam7tcmF2AJWjkjJkLoqdA3wokDZxwmcdqE9NdodUQkRHAvGb9E5jGWSyjVqsF6b8mubTS8CfsZSpMGeXAJT9Z",
  "key8": "486kxyKW4JLPF4aFAyj5dQhm6a4tVQzdwRtUAgCbyvZHsfr2pX9H31NzUJHkmLexHEAFJLAsPMXCgg6ipkucJ6Ft",
  "key9": "5yzSoZAGZRsJSALBKFSmdggggS4CH2nJztf6KQS2Tp2h96ADdkeMC6LRkpYSdMpKcqPxY3TsjZLbncGADSJjw4qe",
  "key10": "g4skANFtaS4fTNrbzHP8demqbc7BcD5GKXchvkUxVkBx2Ss6qVaKEDhGHeYoBE58ncdY3Dncai5CTvA7ZrhkpJY",
  "key11": "3abxf457NioysUtdHFr7XbjHrbF1ZrQrnmYTeZouz1XhSqpwBRDB25d2ZgDgjJoNxf69tLo7mA1pQkipaGThZZKa",
  "key12": "5JVBUvtgRpGMUA16CrQVoXWpVgYkkPE4Gc1xAq4jZ1EcSTZqaEEC8MeStaYMWB3U4cMzxsFN9eo84gFdCyggRxKT",
  "key13": "2dF3eQ2UKfGrkEK1LYAfeoQ7KXMMKmKgwzE44zwZwaJUmurwRrFLykcLx4dkpRtBUJ4qLaiAYLqKcMZF7HsZ4YUh",
  "key14": "4bS5LayHwaDzq6jY8wDhqrYs2ufzw2gh7bbLY6DSvwUHDQbUCPe1j96nQWrA67QvkYbfkKL4eYP5EGTJAtvkg13D",
  "key15": "5UtN7qzBZ2S8TUR5SiaFGLDni12pktoJDzk1whtZgeJXAgU4nQTvcdirwni6oSQFHXh5gGxPXa7vc9113wSuX6zJ",
  "key16": "3UwvjdXPcVWVHiWFdeufxDe2TJSkfnFFUzdp22xs7kLTXUfzmLz3Rzh4wrDYDmsvjE9KuE3znGZ8YnbJ7yjzrBBk",
  "key17": "4Uw3iC3UzpQWgiorikRea8hn9C3mLvYRXHKQz2KQJx6TyLCNGtGKYhxtXWMpxfbuqWLHSpeGeyCxazZcDetxSXma",
  "key18": "Z9ZzCGTCu8bm3EjapykredmjQPsaAqNFV9Ec1DrzBEb7L4HxoK4aUmm1RDXTE21wFrJ2cVuN3SzQByH6S6sMmJ8",
  "key19": "4WQmxU3xVhTeApvvXB1vLkfgN6HpJRBM2bWfVnQuAqCeive1jsiPoYPSfZUk2HpDMt5gfvpR36MAmcrxw9rV5UHY",
  "key20": "34L7aSQn6vjxwqfcKD7iCUcZsBNHXB5dAbvxygCyjVS2uPVRnkexSQuiRgN4U7BYUvymY4vNfvot88F3E9QqQL8P",
  "key21": "eCQ3EGm7BPXD7jtouac7MEk9TRoHv34WeN3MsXYYJPghP376u6PTULc6e2vxg3UKKYhmM1BTRdSPtjcEo8CFbBD",
  "key22": "5LwvHLXWjWFMUFvWzgwXGkkhrx59wBsEDrEDXj4vkqM4fNn8batGDEtvsBpeDDLviUJXjFhHgnmxqPWfjC1pou2h",
  "key23": "64erZbDxTqi4Nwq9gnp6Tsf9VPmg2AqM3V34uEn8dx5Vs8EUfQ5F4zDBaLF26pYwpZKtyiAXp5PVvWMxJYuDvXD2",
  "key24": "5tLutgAjCBhpMMvNNmc4KQgaUNMYjr89qpFNw1KTXncVKKmWY8LdwiHchxyJcX9UVWL87mtLMQTXhyKegGcoFnrQ",
  "key25": "AAze91rqkVxeCbQMERSkEns8SzzSGbzSUTbVckFzPPCRgZamAZqE36xEeZukBkKaLZqNxNEFFxD3FbA7xcJR6kH",
  "key26": "2XLRn5mKHpgJY4hKhUVPgJahbhm5Lik7NiniZWxNkDiaL6TTNsjPiD89o2HkUURFHA5Tk6PvWffFGSmqaSYWWACj"
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
