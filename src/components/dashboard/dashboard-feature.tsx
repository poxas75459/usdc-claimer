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
    "BAtnpnirsEZkFY856fHmvMULashSRtbuHHN4ySAtoCqAiTdmohCAyvSFfWyUZZE4T67jYXGwYaMRsjW46nHETtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JDXioxSTix5o8FJsL5cqCJT5BFhNyM7gsKs5oGZuX3gn36nESzVSwfGHonzWdbCDsvKuuQfTaesGLdCBBe9msVv",
  "key1": "5MQ67QLdTxvGK2mhvTQwuaLZoketLPaidwtoJ1PkrqLpYkfi8h8XMmJcoY3RLyQ59RDW4zWkm8b9FjeKj4GQgMku",
  "key2": "SWQmTks4VccL6SoaSkHsBqRojzFbAXgYcBEKs2AAKd58LEpa9qBd5iFVLUh9uMqQnnRsfFHNusi6Dvtr266XSk3",
  "key3": "2xVzN81Rda6VboMKjxYt7e32c4xAADWpGHDZyr99UXorrWNdNc6QjVwQqK9QkbxSmcuUKL5fsDSdJmYmxjWSbHhy",
  "key4": "4d5Li1GvaKaBrsYeQNNrNi8Rz9VfjJhhRDQuJmL3iJ3ZUQ5Pbv1DnY8iuEWje5jcGaqPAvjY8V4283p2bBKKfXTW",
  "key5": "5PYn3Jc3C7Gb4wngbphbi2PLfV4XvcBcaBpqhbVqD8NX87M7ZHg43QrkDEmWnVKCodHQ22wS8EtXP6BTdb2n4Uz6",
  "key6": "4fvkD8S5pYRK5n5rtB679ZNR3vc3JhRGLZcttHWs4F8ERM7akRhNEFipPb2eKKxUyMHX6K6S1zMdvN1j7u8pqxeF",
  "key7": "54hP7aUd95MZj1x2G1Q2w6pcFckqiYvrfrD2DTzRsaFsLq94RusBUvRsDEXvWBJsANcZeJNT6MyUcbuwWbrVwKrY",
  "key8": "2xGdWNaFZoveTodtBCXSbvF13D8Jy1jt8DprBVWWqFwoyo9vn2hUJJxKkm5sCAEdsWS5ekkFiu5oXRbp7Ayom91d",
  "key9": "8cLmfa7aow6htB1cWEYCyiCozrkGLAb553qvxcu2sEF1LLd414kKwfSzweUJvwPj5XgSN6jmkKF6XhELPH2E26T",
  "key10": "4wgjN9WSGFgNqGwm5gxNMqveyTjrgjnuxUnm2tYv6pUNCUSv3MBN3G4CxxG3D9MxsmYri1ESgZQBcVcAibganwcR",
  "key11": "2RqaEwiwU6uoeqg1FeBVkHoDtLy1nou3ikJaf3Zsz5WbymKf5UrNpWLWWDEFnVA32KnxiY3ZUdLXbLfoVFAYmJ4o",
  "key12": "3GsbeW4WxP4TknFs7a6zwFoBZ3FSqCDeKBYRC9trN3exV9zrRucdYbAm513WtCLWU9N5XYJJAgjvCTLCP5fWWt3j",
  "key13": "411CAta5csdYqLaFdPfh5ociDu9cEWPMfn1cZhjxoQVi7LfBhigFq3WekXmfa2ySs1VYQp73Z3CApdEVYn6tjeb1",
  "key14": "5xzMYspEL6nPFGfdqnjjBZaArphAdHcpE1XSch3NNgCg23BfW9smRGJVhg6iZptJkD7Hu2oXPvTKbDfVKM25RCGB",
  "key15": "31BVLhakdC7V93P6VMAod2RkmUmSMFdNUbx41XgMBDbfH6y6gh3gqi3sHn8uizQ3gM4Cjhfmstjd5LFifti9f9b",
  "key16": "3AAevafsuK5FQKwAv6yo1t2C99Z2BeqELHozNuD2a5e9FgmqRxUGHTMVbFjhpBMsSyEBjwU3EgU1z4hpzTzrMHAU",
  "key17": "4aTVbjc63VwbQ6YP6eFKsH6Fiv9ozGCPjny2xJJZgEFPmSCLLXHBmdXadCDNx7eDKSSDZn8pc32J1rU7AhWsQvNF",
  "key18": "39CB511ek6KCtcJrhQDxLtv2SCQoqLg5nVApvGmF3f7B4dwNbsZmhQG4F9HJGaQjBU1bNqLvBuRPVo9sSZgweHSH",
  "key19": "5tt9njfh4tBeLkCx8y1qEqjpmBP3yjkV8LGgBz1RsYsbTtpqNCPvYGh9DendTa1fiHp8UBCgBBZeHMnowEH1wzgJ",
  "key20": "3MFh2aSEurPSFEKZGufnr29iyeFhUXv9kLyPF1ow9zwf4DPVrjsjfeCQqPXgXaVwpD2J7iqhLNeZbAqXrUGXmy5H",
  "key21": "qiPmuxFGKP59MdaAs9NhccZV7tEHd3PgWjAqwTs4LHUJMqHt5nfA97aVRBTeZZ7CEz9FQGUTephi1nPCdk6jAFZ",
  "key22": "4WwDuTgJuSvqftfUQLW6azVRVHzChdv5MWzgSvGPbBPUpgookUgSTCom4CuqqyNawqFqrXwKuHzkGhHKB7g9Knz7",
  "key23": "xRuJQUza7k7hKYdwdw4Rgo9ribNqB1gp7fM5Q3fpeAUonPJmhFdcBaArRuKMa7FmgqeP1gKskaz3to5KaRdxCSF",
  "key24": "RCjVpw7vvg75CrajNhK1NSXGtjr59X6WATFUJnbhf1fMhVjqd7Gq2ttKG27dYfCpdp13T357pKYit8Mj1oka9tD",
  "key25": "f8BApRZYkwf5uNJvmoPhB2evED5A5QzZy2F6LJ8pL2GZw5a5hUY2rx6wzWFMoTTouuoz3jA4PMXz2gCfd3yGiYH",
  "key26": "4ugtn1xDgyVisx6krUxN8SJYfvKZ8ikACrmFeDFbcVb7FNQnx5YMe2QYeL5if3ZcX14JPoiSJEDs1bYpj3Juysa3",
  "key27": "3NCcSuDiFa1a7pDMsBXPLKjM7zZtfLxsRrScA4G74avj9PKHFFg7GujCb7mnSezHdm1LBaev87cHcckkF95CZ83x",
  "key28": "5Shm1ub9zA5WCVkfFuvFvLodmydsaMrW5b2b6ZTeQ9XUjkCXthH9FjaVk2zWCWSmwisPDG5ALJBrVp4teUTq27Kp",
  "key29": "62BNSkJpnLJsH7Y8ZozHPbjbEz39Xzx1PHmvktzr4f5hoi6jnZVf52LFcQaAroJDxCLEgW2karr5fdEB9bfsMojf",
  "key30": "3uJxBczTKQoZqPhiwqDfqXEY85vYTn7vvtmxjW9maeJEGFoDJMEgU7GoXKmatoPRVtXDnvTtXYdsX9MGgdgA1Dbu",
  "key31": "4H5HLzVtrsKkmjZVcbK7VvjXmYrC8Jm5gz8imycQxTRoBGGQ3k4mDFveeUwWCNpH3Sd7aLLWRn65NcTUZbERApdz",
  "key32": "22nDvYczW1HHir3maq7jNurZBXJMtQJzwEZ4KaUBk6tChveW3f2JF3jHUBwAFtuoibYea6uyzsTxktjCEjdQ2ayq",
  "key33": "5j8HVz3XdhagAH98UJMUokSRR1mLjk9w5LSwSvBz6CkbKm6dmmf5jvvtVPg9rzsvwqg9UU2zHjEczK58GaM9MgiE",
  "key34": "4kmhvTHapATLFwnTMvoBpRSn3afSHf6vuUnhW8tP2Cgqkur2E4rtMdK4bPGhbJDKTPDLDz3qfCaFEhNdh2bKAWjG",
  "key35": "2Q4hda8rDioLdsTMHWT16qEJdkzUSUZaP16TLWYqDXNafPXQXWaKYk9uhZV3p2ZqTSC3MUsP6fiVBHwV7yhM6fj3"
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
