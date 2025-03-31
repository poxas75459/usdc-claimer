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
    "oMt1icA8WjDXGHP6PMydYPoQ8ZV3sJ9cd75kPUneUEYjoef6EA2872XUc85KNCP7v6SFbsdnSjXNAbUeHbhHBv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTVHfKo77k1i1knfxjDhbn92g6M5xsXvhS6gZwSShk4JHMyVb1AAMZ3AejGYE9rjMYgoipx118xv5ibm9EubCfi",
  "key1": "ryQjV9YSkmGErMATbz6iLMrV1rz2LSBsqxxXKPUTdrhv1JeW4uGDUbRknXubjJtSmGGm54w47gV23ZNxFW1idrY",
  "key2": "XegrBQEHShife5CTCJxq2grwoCNpkdWp4g7zCQdQyY14m5XfBWjGdrNob7uUmex6BYZsz7zwS3PyYWkcTBmXz6N",
  "key3": "2Mybv3BTsNmWb12tzcnLnakmEaF6bufCW8r139SnRjNChThkhuvNC8kjg17TLoDCxkczDfSveSUDCEbvQod1y7fP",
  "key4": "2PUTBPWNJfSMjvhis779uPySUtDPW3PWHA7gN7g29DByXgpooLTMova7SQTJC34gBYV7BEVra9at6EpbGQuFXwVb",
  "key5": "HzN8ETwtJE1D3MMwS3s5H7wKjBDzYLdncdcx4rCTzegcwzUcQFQEhBAX5eAhjSyeExHCJEv5KndzqXSCHyn4YQD",
  "key6": "51UV6TrTW5UxsWFycc9gcTXe9ezy2n3DowJVSi9QSJNGyJwt9f8sLMBmhB3bsBQJVNvHVEX9niXKz9FmwpmdgK6z",
  "key7": "4j59mFhQCtc1qVFbqNYjiXjNFzHCzxJdr3L6ZYv9QWQvfUegWHi4mGBCceZ2AWp9n7W6rn8w4VEHhaKu4stUDDYq",
  "key8": "4DJvS5ne6GrNZKk3XUmPov1uVQcxLoJmCDp1nY4u3wVdGu8x6KNBX5FZmHh3vrKHFEKagkCJ2ZfoC6W6quqhfauN",
  "key9": "5ChD2Jz7MqaPTbYfchePvMGQhuAywgCoct5EkXBznvbJxr6htbQWeRLbFSWUcqMBMzcqRsFR2sfBtzvuGRVrHBWU",
  "key10": "2EeULdU6V6CRGE5Y6w5rCfkUhYr9g24gQxYFAzbniXTJFdRida8cgA2r4A4BhtxZbWviUzUbVyjdDqWYR3XnQYjx",
  "key11": "2bKL77QZZFw9bNsLgAj4DMLcmFxE5bDcXwEkQFVC4FjR9jKX4epMPziWbYFb9UaK92FXG8pT8s9i14MuqiCzJWoi",
  "key12": "4Jjyg6afJmZ4Ww5j6SU2mUJSgMe4ykaPxauvZjyi3XDtZmDWeKEvs5WyYhR7x39ZNa2tf794811NhCL4Gsd9tGqm",
  "key13": "2ZUueEqNSiZdcgXerKJs34SamrAbqLAzM7VRXhwAqGgWJdcse6Vn4YxYxm93N2bB4Pb3z3Xmaww3ynuGDodt33jc",
  "key14": "5P3xXhXMt51VenhowZgaTnZB3k1qrNFqW4Y6ASVDCjFcq6ZrHiof9YNbvz4VwWobkku2Q6W5u3BNmgw4j2U6H86o",
  "key15": "4ebsGzowXTxJ7cqG8iNepFcFHQQ1zQjwU9ti33MNMHUWAMvUHNFDktUSZ6SukgfndjA8Bxiz2SsJSCZerLjeQu5K",
  "key16": "5jYGWmMBqF6XtoL4D4VCx39n2k8BkQc4TwHq2H7ik7A8p4C8Nuw5CJvFfxDPYqmnU9NoZnPoN1Zor4h32ymKdQtp",
  "key17": "3SkFrLe4b5JDf3842DCMzb3D4Lyq53Pp8t2teusYSvLAVTk5VzLQmi2ktiBYgkTuRYs8yeh6bBCwuBAwUeAD8VUj",
  "key18": "28wHCbcdLcTuBU52FtEp14scVoZVGyNQjdtGuqVSqayBYvGzgVQipiTc9rq3XdHvokvCt3fy6FMsiDeaF3NNszGq",
  "key19": "2a34NXaHPjsd6cX7yU21dSQkoioWk4c8Bm1i4LZTnT5DVhhovVNXbQ6cSrGhpCx4dgDWtmacdbQ7Cw1hHecn9dGT",
  "key20": "5QvWgqXW27mBZjbt26RgTAG4Jd15F1rhwfn43V7WCXXKWSQDJWQYyumMZXgnCjQNUjCNrqS5K492ChnJSBwngB6i",
  "key21": "4NowvC3dM72UAno3axPC2mqY7StWP8nxZtiyUVhdVNZNymxkNRa4Y6XBDLYmrXmx6JMySsE4KjdU89hyfcZeqCFX",
  "key22": "31jw2gSw9Yp63rxfncg9ya665TxQ413DHu3Kc5XBaArLbidGVwmeUdFziF2DEHZjx2XHKqKMrEbjc2f3AfHzfXPX",
  "key23": "3ZCtJLTQKNTA1fgBf3XG9a6DPVQki7GaXTiSma4Tqy9h5sj97UKGLE1B6QGhoWviPTVjHx7CVmUBPXbyEnsT8245",
  "key24": "3RDMd7bXnXMLkV7QusyzRhXzZ75m3TUNULNz5mx6cJb8bwe1xkPc7DyvCJnHgTrmkrWsJ1qKGWQrMfrii68YTbaT",
  "key25": "2GRLdGJ6ZVXwe6oKHDmezXuggYFEFCMmdURLPCovFfcj8ioPhyteezRayNGK9mqtNnb7Q3ctNLYxQ9zWRh7quuvk",
  "key26": "3iYhd8XM3eTNTmYW4WJi4PBfPSVKBR6waVZxbz2roY6mBBefpPZ7A5Dk1rXfenwZ8r9mEv7piTUvGp1KXiVAuF7F",
  "key27": "5adt8L31PXrGUx8hvGzrQLAPjrwhCAozjhkpafVuscoEz283QTfB4RCEEriRxzmMVppXLxTLr6qprPcvYESEDn4",
  "key28": "4f6Lww5aJjmRjsAoJXqoPsW7TzdDzkqnEMAW2wQaUEeas3hQGYpcftbYxJhCQ9fbnxfzUcmyhkBMNrtiHCtGSDVC",
  "key29": "Jc412L7Mu5PXV4ahrBMEVMMzRJHrxtpEYPsgEKN2LwbPn3mxwvaxiAgeXox4CVQJHdWzzLrm8AsHGtDUi3NJyKa",
  "key30": "MP1GTTPbz5iK7DZ6RkJGggY9woDeX2cf8xV14P1mHpMCMmTPN5RCGTDGVQFCuQVd7gBNuEsvgXgp8BadSWDTcVW",
  "key31": "26uNtA3sDncBzXoWqtkBryUPjFjVxgobCaXyKYe1PwMAUKSaJEpf1yTpHjPjfQZD9Pt1mBWBRYPNuMBorcnDd68E",
  "key32": "3S9fXqRNGC8EHo4eF3BiVUovnkHsQ6wknMU6z22XxCnkbtbLbSMgXsfR5bzfLFMF1G9xjng67wEoUf6cVVuVvFmT",
  "key33": "2mCU5hnGDx2czfPwewx6GqRJwy9WKn1Mj4ZLreYEkxaVZSzM5GSbQFAk53GaKkT4Y7mtWvzrSXeRFuJjiKu8dzWV",
  "key34": "4spsLULfSLD6U55ZJYU7n9QVqF96QUNKiQ4oL55vaCmzG6z8n3hDKiGcz4hy4aA2BZme1WzexLNiNAH6KMV6eBu4",
  "key35": "3gpJs7P8VtHAjbffgcPP28iAfcim21ukihC46u7R8uzZFjago6uL88p6Vm8PPa3ghES4z4VSM9Ype6TM8HqZ9vbU",
  "key36": "2zMxDah73zBeYyAPM7dzgsJno4vqmKer8837Bed9yMAjProKRzbfLYTv48FNBPTf2TsemnH2h25bBjCPYhtGj1Qc",
  "key37": "67BPeuWP7oiEPx82PBpmW9B5LWuw5DHx5pJVBmDZbU1gawyxmY7uZYodZP6isrXoZHx7HXBTEbY9EMzWw6YatFWX",
  "key38": "2MSSR9ntGj6FrRxzeDyZjydVz3wEPwbnG59ry6jV7gdEh3ZRiCiHQmQ5MKzaCQLLqQq7q4EAnfi2bjJCjU2Lmufk",
  "key39": "4sJtvLo31J7U4yPqK5ASzPJVbuchK7PpzChW1CJgAXuXJCNoWuUhB2BmVC63SbupdBCzbPHkbxAZxKb5ASN78D9m",
  "key40": "2FunEZQnnT1C7CjgbK3LZLV4oLMf7nC67Q2LrWW42aX6GJkSpBEZkDkyPpqAKHj4rGtDxtVP9TkE6sUrBWjEeyi"
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
