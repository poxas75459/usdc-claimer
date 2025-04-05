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
    "vYpAE7ik7FuCKEfDAWm5PFKLeCLheaAPhRrhSjFvkxxgQa7QQhdXf4dkFowm6FM1w5EwDoL9ntStXotSjAsVrhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GVvZr1tKNxd1juhB8my6HhuesUkBLK8u3tT1QtsDDkMFayHYZywQXMzbjE4sw9EQusxEAHFhUexd2u1nkkhYE8d",
  "key1": "wukEMJpzFDEQWJgTLE1NQ4CoYAAkeWqHFcmeWkkEgk12xsXk8ZT1ZTviiV9veJ5LZDqioQN9rEnh7newXKJEsHP",
  "key2": "33gEQr1gkQ1ZfwRvSHHGnSrQWR3R43m8ChQ6tnXQjTXcW6Pm5cNBGtRusGxZKLevGrPH47JYXaF74iQ8bk7RHEVW",
  "key3": "4DgCST3EPAjQyEVeqFWtUx8ZWpgVnhf7LVPuK8xdE5vSLnP9mbHpHALiJTRHuC8YYEgVidFKurqKRobMhHuRYrVR",
  "key4": "5fDpYF8bwF1Lb8YNwZdCcDMnSyyNHXK4ubWuNc68zcxFu88ubCShwg8m7SYZHKUZ8Z7DS38gB8HDzhnAGvPbPXLa",
  "key5": "4v3Dvcs2ZfGraic6WrTUKWV7X4wmPAYipkugcmByyNDj87s7xw2hvQBsnPgXLV7Vv9dVZrZgCH5nXZ2ceQjMxfU",
  "key6": "28dfp36SJq3581sahujvMn7mXxRVpMDb4XMCqRPGCC3igrqXubjwgnKkoPt85reBUfmSvvvFEQK4dcHn8dHXQsCr",
  "key7": "3FUA118gkkSB472f2hGXuQmTbi6tnN2Eycu5jZ42p5ZKxFREyjDLmcRWioFPAvHDjT2thb6phmo4VEz29Wt1CS1G",
  "key8": "3DsJfqKAoyeKdCo15BYuqio6DHc8zXRSkCLCeXRXvvoQ2yFNa3hhezmqn5vBsF1tpeePWX2ShVHTMRPWKbNNZVS6",
  "key9": "2wzqnxQifpLc4nUzTN7zA7YQ5KvGUPKvDBU78tLWkE9Z7wJmSLfMcBckSQNpKv4gj1DayJXvbuaRn3VQwgxBeSjf",
  "key10": "2MBXfvJ2C5AtcAyrFHEKF8Ngnc5DKwB81ec26ArC2J48G1XxYGkKiB3UZXeai2LjktXUtiadp7NWbu4GJdVhXc1o",
  "key11": "5XA4jY6kXeq1hr9kTMdWBHZG1FBC7FaJ5T8CD1RgfX52vUUxEoJSL4mNjtcLieoQjf1U3XUtdiPpM3NfLeSpAZcN",
  "key12": "47ubbfVffFh9JWvbaHqrMNa6U1q3EpwuzbAeCDK8vaKsCNk1DdRfisVShRGr4VHfEt8dvTjsVh6YNy9pKYm5LWDU",
  "key13": "3ZC2Trj5WN1xZ4f3JYsupzNCZnHPmQLiq9JTB5iYTg7fKSqDfFv1rcsA6Pk1AYEzNwfnAZDX82Hb8zDByu58oZjF",
  "key14": "2dfBzhtoYcRsVnWAh9cTYgY8VKmeFAFWSVrrs7ZCSzNUdTVFHciCmps9aadzxYVB3A4cdL4B8Cs3x5gne2BcAB4W",
  "key15": "3oRAWgp7cN634xYSK5btxMbRu3iRm45Sr68N4PRLHJsWt4heynss3wQ3WpiByow5DgG4GNz8EfBWQCd7Dt1uxJhT",
  "key16": "BP34qHVxXBHDf7eeRBdcb7ghFzfvmAWPLaENkkpryYFTaAQGn2Vac7HwNLHVFrQ8mM5v3nm7uVG4HKssiBg3oRi",
  "key17": "42zdPozps7GpgD7LZnQdfeoW4gGFyMmUAw2hFY2fL2NEqqGkjTiDjdYJHBSLXTcp7iEEwJu3SrLxBqX7QWfn4tc2",
  "key18": "5u3AeBXKFqwchXrs5sYqs58L6jVZdF7uZMrNMHFDRjhSmz9dcseSwf1BqBRbLixA1oSM2NuRbWG4WxBbxGyDjnqX",
  "key19": "62eRKcgbjAiEzjAgK5hgrFiorwSzATNXH7C62Wyp5XcBarNaTdUgREE3Rxm6fMcGok6Uf6oi9zrPivQRJuu96PZy",
  "key20": "4r9UrvKEW2sZMUJTocudFrqC2nc86xNmJLstbUtjEMyDkZ2ueDAq3S55ahdEXfVcD7NuLE7xeooWdoqK97QmA88a",
  "key21": "hZWMXZ3n34Ur3LZmvYq4KBKfKwfM6LNfBdNeT5c8U7WZprkc3hSaoH1DySFefB91jpdco8YgrTP7oFKKAicr5ft",
  "key22": "5rQ8YxKxcZHx1nyMLrVwHdBC6qpbmWf29f1zCA6mf2Dz9UhvdaCziUELTKN3Zn52reutKYozfswZ2UUdxf2zPyAZ",
  "key23": "44qu7EiHPdr4bYK8iZg7PmWmHijK4xCXNppSB4DvfrMLSBMNSWYLVn6wLZWsijNf6qBTy4cFxMwmsDjXmv4cfsjX",
  "key24": "YAZAvvQchb1LiVXw876NxMfJD6JwAKCMsm3WmjLUH96PHam9XP8tbSKqxdB7wkFTEkfRGHmjUihGL9VQ48xvJor",
  "key25": "G2dvRwf6fweEt4KuFk7ViA5PHDJbA3WgFzigPstY7foWTCKSfH45y7MDhk6HK9o67TZJwJQNJ2CFtSAQqXMBr6A",
  "key26": "5Lw2VuShhDsLCBPT31XxdgWfvvZny2GnhaWx3z6qPGjDJ679e5qWfxqPWRR4UpgfrkBmXRMePym7S6C3d6yPRLCj",
  "key27": "5zHEpJw6tvmW2ariySVMfbLpzTiXxUpHw61vpxnPmvbSaJiM9kk6ptNRNttU7yirVSx6dtWtktnuwWwhPteDsgig",
  "key28": "62dCWpjLaqXK7KGdZmY42oh7E6oY9rY9Dxzn1CCeXtUcSqUNKwrE6J8y7A3HtXakg1xcuHA8EzXi9DaKPnMteb5Q"
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
