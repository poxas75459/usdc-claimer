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
    "2iDmgz7vqvw31vvNiSm64yEPCpZLGD5r31qG54QCRESzzGbEYN4zUYFAfQxNbGjuw5FAGoLjH4RTefAyRvqim8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nfyr3fJ92ueaJvnmAGVaCNr2tmxxVYYqGjgnwwfVLYQCEJ6jhAavgENwgss5cSUFUMpRtbhdzLTTyB84hrfauDy",
  "key1": "5cK4ejqyEcipHgmmugEoYkZpxCAhUCW892Z316T4cdMJKVnPp1h1viwQhbpb8ETyZE245TMDXKYV2XVrrPXbgvNG",
  "key2": "45toGhnphjRqdqXPZFyYP6PyGCZbCr3DY6ZQ4H5aobr5AAx7RWPCXAHJMeLHGNEUJJjJU9GnWHDhLfC5mZGABdoU",
  "key3": "2uf9xQvaqwir2YssME3wK5hju3KCGzCAPD2DQuAuhpyt26WmqtA3o91h3KZVB4LcBof9AeqN5dH19tyo6VKEQy8o",
  "key4": "smg6xiT6bSREHbczXfQKtaNiX6iECrX7gkhLTrU37V1YurNWGJobZLmdmhkfh1Nxcv7n3TTJqS42xc5Z91LDzsq",
  "key5": "3htwVbsXY7yg2hf1f18QRPz7meD9GtwqHwHrQPqmboJ3EghEdRehtsBUGLqPgDJw94WTkmnZQNAG2ENAoq2nu2F",
  "key6": "2KneAeRJYnTv3frBZArJ87iNMJ6NX2GLWrfCWSwiD8RmneZnEgHvsZwbUsDRGbene1EqRx6V5dSkL2YtvhieXACz",
  "key7": "h37iYkfSchg7ociNHCnL5KD93UK7DEGB5WYty7Hp3sDrGFGYF4SNC6CajDr2zb2PbHmdC17aeeNkeQd2L6HPAEa",
  "key8": "sBv3AxguxkppJX3JS1VTtNjbtxsMJWn5jrjsydrSmKknb1Jezoz4DEddmbmnDxc6xUudBLDXmu165JrZUxCjqbA",
  "key9": "dyitHwdT9Z9mJDycYGKyUhkg6AmBBHAcs2JpAb5DRTmoVkuYNWvaPsU7tdAyeQ5acXk9qq5qFugpqaNPbdTBkKU",
  "key10": "5H4SHqnmzC48Jpx3mxBFwSPoorp81d8bazUnwiJiH8ZUYkrFDi555awzfRKQY8x3chjB6PqXhenx7CnqHEmYWTh7",
  "key11": "5pm4RBNfChXxQj1YYZXfMonxaDkUSeSVH7Ypsog9LsQHbTq5nUa356Q9e76m9yTpux66aicbj4xMywxBWbpbrz6g",
  "key12": "5m4JhgA9F2X9AUqMotCr1mh9A7PEPAq9wKQwG1ALFrrLcgmTM5tGvJ27c7D9WoETFVty6GCTqmYzxpwBwxGudYCp",
  "key13": "64aX2ExRUMtkpufzFCjAZFJrMA9Q957ibHe8EvbXSn4864F4VaVusUHwY9n76hZ9qRmnNwLnaWD8DDks71Uhgdc",
  "key14": "XrsEKEfsdUmMbGeA9Nx6dVTPsMsVWvHwp8oreL7yAuHP2JYfXh4x9cnAp9fN5HkTmcKJhVDPwxBqGa4nQt6WjwE",
  "key15": "4afuzuJn9yoLmDufk3jY1r1H5V1QaEZRboSsk4uH76B99ijk3ETP9TvxKhMaURjyfoFL1CnuQL7r9kxUQpn8BQAG",
  "key16": "3GveT2nanTGz79TgQyPKfJHoxPnuFtze4v2b35DZTS3n536BNANPuAdYgpDVk769JBtF2HxPT4XbjxLAcCrBujn1",
  "key17": "26J9eT2jgXfKEGGiemeYV8TbdbUiugEhcAoqj1JwfQDLN5yaHweMPRWYtqcc6BqPjPdvcUe8HcS4RQMLZfxkwwBM",
  "key18": "2rzwtAwkrDMjc7FGDxbPgVnFZ6oCMqc6ypYowhN2ssPnrrDgUQcTBMczRpZkRGmXBfBPBRdbR8NrmLdCzwuLABnv",
  "key19": "2gFvYYPCX9ieXSYRiujQzUoufhnkDk6EbS3toYKgkFNehb2jmvZAS9XLRYfHyRt8g9FLQv5Wap7197wSLLFFZRY8",
  "key20": "2aQ43oxH4co2skog9gyMUV1tD85KEZFL1ZVHQunuPy3TGKVUAEdsvrZNGMrPQ9SKT3qYnzezke94zJH3pqNs84L2",
  "key21": "4SJuBj6UJQ2GcjSBEmM1Mzg6Yt7PZH5wnEiQvUy4MHVJjgzZPWTJwAEbiJ9YrcsaxwiLcDDZeQ8SVVWK7fMNRqHh",
  "key22": "5yAdg8iNkZXAXJFuViciUK4CqN7MzdpboqzcTTzsNtfQNoXMjUprvNogTxuJ3ombQjsS5ugzjWzYRJoDc4uxa878",
  "key23": "5beUHXwyyqVaKkC9NChotAxZ54KoQicyqURkHu3QWFeE6wccrcJkji86EYXZDWugQYvJkxErMCW18Z1BPNTQM51b",
  "key24": "2GwenAMQGVfPDVDJycFoK6ixTnYDykzYxSpUyXK3WynsgKyypa8gbK6hSkNL28vFvumV6GT1e9e2BJLoxmGWdeYD",
  "key25": "XZRGnqthYLHbCe43RnA3vifFYcCiDyjcNpQA9KPvpmW1WCwxNnaiCsfheDDbX5kSVW2DegF62Mkt3LMLU1bFzZw",
  "key26": "D34mwvuXJ42pDnsEpHHcN5TbnmsJJzc68vswbyrjE7VYVb5mp7rtUZPi4NwsYtvXEya8nVX9XLycvixhJrNW7KB",
  "key27": "58hn2rArxeTyfg6KkM267Gx327KZGFQ7Qc6LvDpxooxdvCttYxfjKhbwd5n7KyPAyQAew6THtWv7DjCzw2NyWcfA",
  "key28": "2UviiTuhnybW82kPTSWPLJe2gyyyPmWnW45pswHvyMDLfDcmUQBhHdgVExiWCH1KTupT6Q6QHt4RyJnRPoJrrHXr",
  "key29": "2cTcP3oGvDBd2fFtSvy4Yy752snZv5anQRgzDBDfrGnD1EEsLxhkZ88Jt1rQtN9FhpZrQzjqb8jQFbAQCZ1taSNp",
  "key30": "5Tteo3vN56HtzkbEAB1NqtWG2YPBe724ncNLF2feEeL3VJ7KzF6AR8iaXDHNJBu1EVyurdVbmyB9eAd9rfPCu6Ht",
  "key31": "5t86XVYp6EsjiybN2oXSSDMYaf47ufJQS1YQ3gERdkeMnxWiRUgPrYavUr5cg97QWUPXB8z1zSDXdEFVjK8LH9xW"
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
