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
    "3wAeYeMmy4EzrBrW2qPZNoSqvoMuVKkPES9DjinNXvRmmxWeAe8FuZGKFZVWU7aPhYnH76vnvq1A8XCuGn7AuL2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DaQp2VAeBQJSCEMm5aepwCeYjYWBBiqbXv7M6KmWsry4nNt7is4LH5if7jj1tsA8CacJG4J8ziykmsapMPvGLm3",
  "key1": "4AEogs9L1jgvz2kuZYQVeFEax2xvkGm7R97dB3SSGyWJSBpam1rHFJ4ryF7qYNQspNNttSRXpcyv8qAVAbL8d1rw",
  "key2": "2RpVnsgZCj5z8NvdiQ6QWY5DJqRC87evkTCGisaK71ksHrpf4YFcwm9to52aKrN37xoonLc5ioRuSrv5kWjfcBw",
  "key3": "kg63G9H8n27Ud67cQzL9hRB8bjXGRUXMSppaesHjysrFz1HHT4D8wQB7DbW7roev5NgEQ79mUs4BXHmd1hdAjh8",
  "key4": "4yxxgWWyLvsiboLNJJJsy395CqL6NGnhcr5BSQS8cGYXYZXqKW8Gy9STS6sHPJdgMa5GDHVqnGa9JqmiCDgxxNgh",
  "key5": "5zrxwXJwbhH73T2AWBjSrF7sBk9nbMPCSYwwosfhG5R13vb5c21nWArXDuDhduBtT3PTCJVT8x2Tv6yW9eVwbb7h",
  "key6": "36nkBz5CgPW8DwFsrZ7LLXvUFpM4F8LN2jkxtco7JJc3afVdWjwT75sz1hCxz6aPDnp6rvR324gr2CemaCGppqp5",
  "key7": "3FgUyBaPQciRRBhKKseYy5JssucmNTDSRZM4ZjZTFhb7EmCAAkC8DWY3rAtqFtFRVkJaXm7KMNL61ZuY8tSzj3rY",
  "key8": "Dc9f9SWkEm6aZwxqjLVKGSabSR1tiP8WYbgGF9J4NNBNLVhH1GWHyQEdVShqDPa4GG5G28FN67gw5yqTuiLQJsy",
  "key9": "3Uo7N5pM1Vg9xtSGXFAEkAsRGpqzau6WuKBhzH4YLHw45a6GnSijJQ3GFLCKAHRLmj89apMVT2Y8oG1g5dSQoUYj",
  "key10": "2cndzp72ePJCGKP6MLse8TJEhdnViismcy46h9wmauNyyWGdT6txM9x6MFZra3X69pppccT15UfKHhJfMwL96PUL",
  "key11": "5hBYN51WQsKo5SHTdY92qq3S3eWdhYnAtHigivk7iKqYhuJcCvVQf4yCGf4fbvzbmJ2sq3s9x9pPR35EKAnaLZzt",
  "key12": "2b2obrkmfXqqE6kFzxLDft8z6eZM8EKMTdMoy7YGgw6u3gmxJcFNMy325LdZJMXFe4ZE8axxbKL3pCVyGD4FFZTh",
  "key13": "4U6eFHobNHhnLEwTE8LQyKXSYhBpDmywkoSgJm8grpM1qQodpHnK8KfCyhnw7fN5GfPgdG4MEPneUBixurDZfxNN",
  "key14": "4rpJxkacrFJ7yKr8reehDfp9rSp3sZs7ibK1TRsn2cW4P3aoSTC632fPD5grSYMn1ayq2cVdmt8imAEGknr3c7Ua",
  "key15": "5H1w2CVJRWc6gsJkDwuvHxyu1Y4KRGVPdpnRsXSqc5teVzFyibLGFYzVRmRSBTNZcYnQzosrAPhsVzPej3rQdmVP",
  "key16": "4PAmezzKvUESsLmeymjbdM4qXmGcHDnCXJBuhAX7LFXXAcwRzrTBJdeqnuH96tmz3MkfhYbr3swUv18NkkeJVnE5",
  "key17": "5XczkkGcoAkb1SxJpZ5c9Vw9MxryANfxm63rKzuuuKxe4vucbCoEMbYWsZjyrZvG71P2f9uq5pkqaCStwtZbZB21",
  "key18": "3afwzLtb9dcQWhcZRu5VxRRruwoHxu4FAX5fxxww2cdCAeKGTKaKvm82jiinohheXYPhPesm3B1JCiPKSMJHZFCb",
  "key19": "25nqNwyPRm9dig8RcWJ8pEY3As43RRpVnAL7qiUwLQ7zHU3wscqJkBEDCLPozKSmobm5DSG1kQ7Md3w1HW6r23dQ",
  "key20": "2tTqdbSp2ZCJZHNZTr6oAcb4kBN5Ufq6FSTMuzPKQuuEfhP287yuAH1VhvChPBJH8HmT34CrW6xmFK2mkLhXWrJY",
  "key21": "VGQMeacaBhEwoHLmAdJitoeypwf4VMyRfbifjAP4PDv9nByjhVy3w3evyAnaweTosbqvhey4JCPtF5zNo12AQKG",
  "key22": "2UoGczrUghZGkFKQqCr2X88otbPrh7yCjmMrAYxpbnBJP7HhV3Sh1AWsyjceEeSEjXJcVJZAqx5rptB6nDhdnUEx",
  "key23": "4gKtE4PDnQYBLDrH3At5PxbUrLU5NpBYZGKaQMdiNseArfpGWfXdYroVKYJAjWXGW2Y9PjtmyMxE3SBgiVpzFb4T",
  "key24": "5dxzzpNwo4DPmwqrrZLVtSRBgAaJDWCrmZsTypFFwnQtgFjZAHbRyZfXEm9CE5FZcbGQFPA2L57apEU6pCwLGo2e",
  "key25": "DQxDFwUH4AdxiqCMafbZGS3pEPURBxWfdZfNo2fACNZyDdbYeXuPWjQykWBu2Bh7n3p3tXw9WcVpSJ6EDnodeMP",
  "key26": "43HyJZozPJ5fRPNw3sZVUPda7kCvyn5UQZ6gvJVnwsSxioaV3oZGRejEyAruZDz4ZNkdb91Kzhr5vkANUfXsBCFq",
  "key27": "xsGnDmYxXTr4oBBkaQZ968yGVbG47xRjU9Lt2XwXdjxgXDh1T9iMV9XbmsocBX59Eb2qBkzxg2HafkBQVf2Smkb",
  "key28": "4WSpiqdhtmVj71myZhh7KEqta6BeVe6qXZ67cYp2ajDHoPSHz84VRSTEaQPUZZggLrJ4ha5jjXswPDLawE7DBRFD",
  "key29": "4fkoRJf8AQwyWti46arjka1DaPtfLTthKHe4sgaDKYXREqvvE3jjayjxUR2RayHFavZCsVkNfsJ14Qeup4Wb7Pc5"
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
