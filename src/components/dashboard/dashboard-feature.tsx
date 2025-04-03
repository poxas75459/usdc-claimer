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
    "2Pe2GtyUD5CJ5p2RRoC6bJNKrWsJgtM9bXJAvdncyGZGibZxvXjq6CwKs3zRmKgXM5ywYqLgP26k4gc2UQgGDg4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gguyd39veYMKb7gtgznLmTuzup3k55smGhUUtyMWJw8mBDrSzCKZhr8s7fANG3XBGhnEDXptvB35r6vJ3ihBuZz",
  "key1": "3iBkUb2wFoWTrMhNUAyZn6kCcUWB7NobQwYXdYxJ2vS3L5NjsqYck93fPZzykzuPWzFKJsbiiLPVd4sHhoZcVuYK",
  "key2": "2MW6WHpSsLRZ1H1FMtkQKEtEX6iSZcXPSsm1snPTFk2ETzMzLoZXwSNdMHZNQLWwKsbLSH782Rh6xaTk5EkfCihq",
  "key3": "gEQaYpgG53oD9GBHhSbeWV2GRaKpTwey8PzgJrb2y569F2ThA1sxMDDhCLtXuiL9JSfKxtUAZanDGTWAMa4cTpr",
  "key4": "4sTr1jSAeKNiZ2zi3tQs2f6o3PhHxXDfMUoxnvaN3skeDGiJihegBoh72ujg5fjZm69hFVeJNFNnkiya6Qs4W4vn",
  "key5": "RURurH6B6Q7f9pfdsXufrqGBtMmAHDeN9RH2h8TgizGx4SYtYcGXdrR3Cx1aeLMuq3q7G7mYKyv8pnERnDnGAL5",
  "key6": "YMTkVF55LaRePscFjTtEHQ4ymvhi9WsrkH4FFpj1TwmecPpB3ojYVYL1vnooD9cdYbdT9zrANLmsyn2FhonukEk",
  "key7": "4hZ78eEvwZApJ59G9jYrfRw3ZKe4JMbtrfVfRt3GMUcpjEHNhWkskmhksuUkNhGXegrv8UY2cRRt1gtrCQoSVuZk",
  "key8": "4Y9ES2FpmXeUQp8nPt8ea3hzgmYXWzsaG3b72qfjy29JKvuKbnTyphbnuWbCke95L6gDqfxxBRZQoQkBrBejzb1S",
  "key9": "636gjqRUBCn3gZZaDxd41YsdYoJkPi6qyK58SXhtGiYsgsdwjYctZEBBquoaW4gvAcHNcqhJHPEce9EUnPcikkxL",
  "key10": "3HConhpK4i8dYZqG7wsQprEoDJpVGRynff8ehNtejvK1rcg23VXp9NrGWsag87utXYxvBbaCeRV5B79HxEcxMSep",
  "key11": "43RBHJ1rJzPfT5t2s3XjL7SVMoShc9umSrDK2ceVBxzCMoNgsx2VBTs7U3cBAZS83i9QKws5G9LJt9kRpPLBuBsL",
  "key12": "2AY3dRDp6qsjmtemWZzkrXDNVMr6cq31ezDm7ejrAwNRgHKzitoBEfBKc1ehHAVqi3Fuk7tuBJotYi8JxNrnnQGW",
  "key13": "4zumfjFZtpXiAifDptMM7PDhfHFW4S9bA7BkiWVRhC4xndoEJEahYq2CmpAhcav4kKyczG51GKJcqvzR4epxoH7K",
  "key14": "qVhppKKUAdPkV6XsKxceC4CTNQS3jUPGi6RAY8PZfkKKyxtBYGnjczuckz8VhGuMbJCzdFoFWdJTPDYuqfPseMr",
  "key15": "53ug6XERufEMzFhCEt9pBCeUypqP5XVieMAVzV6Wh5so7yWhB8fs6QFZFjEZ1M2oX5hP3uHG9JtxhdbWahXsNpwX",
  "key16": "5bARbLF1TdLFxFvRbXGS392Yp9jyPtFrrmUDgj21uWYwAhNr6o7wUETWbGEsNw6AQ2AduJ2zs3SBnGUw5vWAEyJJ",
  "key17": "5HLRFUgcLb2pnfjD5GActGqiKyPmgeRUDwyQbY3XEMRFiqrruaWyoEr6wkLuxsQSTwpzsY7nfXxPpqVhbMz7ryjr",
  "key18": "5LhGtasE6gyzA4yDUYqPrzqtAL5aeW2kuRcS9ETwhdQBYpjnvN1LmimnRNGziTnQpDxeXbGKyWzwyCEnnUtPcgj6",
  "key19": "dBSvh9Xt3MSjCpSR1wFQwU9QmArRzDJ2NtVdQX6pZBQehYJpEXEmq5Z8uJv7bW281rM8hdLHqyL3FLkKyho6q3o",
  "key20": "4i8HXkyKNh89Jmo1aAXXYbkWAb1c3LSscQNfWQG2uArRpSuUoRzEMC8xw3h9UtJ4wRKsWhGt6ZpDKipCe4QUTsrY",
  "key21": "2NpSxn618s3oEJ4JQ6EPeHKKM83GGoS3TsDjGEGyjLeqAZNqUfKYDtvxnZUhryoaXP8AJPkQ8XXMHkjdygaBw6ts",
  "key22": "3K3mvUdS7BYeLmFoL35APgj3bSJEjia3aEzZTtu1Wgqg8K7wC2HZ48xUMsTUBim9THMXJLQMyBPTRejMBqufehGB",
  "key23": "3f1qNcNVJ81jVPwwAqrkedBK2eWQAoDjar1yKW2tA1VZ4i8Br5b6Ws6fL5RPNSFNqjFJEHmdRFAok7vdGP4y1HAF",
  "key24": "51vKhZuopNRVd4oN68iv8FLf6cRrbSsMzmARnQeR3KJtx7cBFr7CjrL3wh9GkWQUrwDZWC7RZUMJ1QSX1F74fdWw",
  "key25": "5oNxVSfen1RxLH5rUEfPAh4ae52R6svh6fMkysPt1Pe4pp4VK6u3osiXJMYH7XocYoYmJFxxmdfqXDBzzNsVWpNT",
  "key26": "5u5nAmdZQknDpEUGkrKRy2yPhBSueAx8qSL6VqTZHceCHbAm3VsC1W64EFw12PkpqZ6kqGmMPR7X81ZMWMqPFxdE",
  "key27": "3HYDr4MJHSyMSmePvhwTjehZqryywGw6RcpJtmktDZdXCu1Gs2EzVtRBr5HiR8Fqc6QhiAYUwKr2DuXH2aqd8oBz",
  "key28": "3sTrKdoZPgnzBg6jRgW8SGAHvQV53yRFS7b1V9RttyhhJAKViHkzByasahwEB8phzCq8ADcNVWeSf8qbpLytqsYg",
  "key29": "3TnExrqb2PWJdocFhtyuBWbGGndEGte7rDgGEwaEvqTMxKAUNaUEGp65E28U7Qr6S3CSy4dVF83UrKUTg1Jyj2k9",
  "key30": "4urH3tp3WMhEgbhW7ojgR4psZoZyyQxpTuSWniRocuRXc8pdM9SA8NPXrhevsTvUrxYTXKsB19BRdXBHXQggxJ9t",
  "key31": "2E62Vd8x5PnKiKGYE7KxRjDNMfySyED4Qz3QsQXR9U4a34zPNCBevSvCKeBRsR8RMWM93vFXD4hNcqpwz9zrJBtW",
  "key32": "2tmZUpDmg6YuYHPWkSKX7BzjLoN76ouiDUYQ3bVUhcojh62FaBuf8eUtwu9yxwTfFZr7VMti9NvGSgyJa6a8eQVu"
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
