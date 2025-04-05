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
    "5cYEUvHTZquf6F2aAbY3hYDNK6Cv3SwV6eZ64ZLTJxBRKpGDwLfh4ZPLbEtuTgFR7oKNyRSzyNa2LvLoVKNs9kXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Gufm7hQyXUv7BZaCpZ32nPTFaCzutdbbdZWQxx8gKRoYjWQ6TiWHDbd1VrUnZ1xkiU2AidWz9WrZA5QySEkYbq",
  "key1": "2qRQFJZqYUe6dc1zEam8GSG1h2ZgozcPw4f43v7gM7PdGXyytpwnrnmUCB4hxy7H1Rg8eRbZwkbRLGuixyngcApk",
  "key2": "2TnydF34i1Wr1V3gd1ZpvVwdK8EZdXxNNvK1JqafT8X3nWTv89q2toHxErXKFMhdyYFMf8Wu6kExfDChDZ2dbt7m",
  "key3": "EucX6okECbjUABvKeUhJzc13yzA1pfUAhhf3tSjqiNDcz55zf6JBkMA4QP7A7A6FLTVpxrS64Hhohtc4HGNa9tP",
  "key4": "3FCPKcXD1xGwWBdzmUWeLAfvrta8a8Ppinq82AkeoKfc3eGH8zBM7PW7vC15DkvR19BaB5w45CAUL9hJLTVjhM6Q",
  "key5": "2JEogxzSLmgT4wHRqdwpUquXrKB7eRS5DhLiGctTdk4FRPphuk5crk6rfgbkaLM2BFuCUmc7m6insTySagHFfnRm",
  "key6": "2eqzBDwsKagh2kwbzy5UvVfL69g3rWmoNRzwp8TyM9QjY4sbb8b2sMcMPyXesSVp7HCpUvAgTCJu2D2j7T8G7S4P",
  "key7": "M9m3XUy2263FVZp3CmHVXprkRCtzB5BeA7kXBuCHrKncgde4jhfG2UJkkerNocmTsBhRKDWvKuDHtcESEKKTVbx",
  "key8": "55kL114ev1V5GZAuXx4g8k4uNzMn1yWfxwdo7sbNcj73CM3VyeWk6jUEsBJTWsF9XD6hQtWA78LK9d4JAXn79q6t",
  "key9": "4jrVJCZ7z5ynfdadLCWhrVoyJaxZoz1UoQqcuW17ByFtVohQtJFbGgBAkpwszUh6sVWVPXiXzykUtNxKeber79JC",
  "key10": "3eaQuKYk4ZTraBekvb5DDpEzKeCDUdP9nL8DNSMGQ7jnJS7pckuCeH1fkeSXoKY8sz8wmrfj2jfDaY2QNMLMuiy9",
  "key11": "3NwJYRQFRE49NLcJ7cJ3TGv4iGchMW5ULQAbdvRmS4mcniN5koPajMifanEq7jwP6J5L6zM4Pkpa563wpJHutZcY",
  "key12": "u4zXPiZUusLPygygU61AxwmZzDnCCB4nurLeF4gcxvsA4kBQgHVdaC4CTFFbXMxznkVrHNHCfiyJX1NLUZH7FQg",
  "key13": "QypTfsjuEayPKZmwqgJ4nGvL5BLz2SB7XYjtSY7KBZdtTU11CngJTkpBnqgE4caMDvCL5JzmXdPyTUgPeJwLGgg",
  "key14": "FpKB4gy88HwyLpcxvcSRL7goYbe6HWkXmPh6xCXLFMkBbh6V3FxsMbfd2onious24qJSkwEGHfDbYXzbpkEdqB2",
  "key15": "37KqD4NK2aCxveSAC6JtFHWs1p4P33zoh86xLd5DEjRsD3FMPcXET1NvWCSmrHZzgQmAiLcd4NQR46fxtVWaHDA",
  "key16": "5n2CjYqs3Yv7N1x2JaVRH6Fjh8AhxsbJobNkjc5rtDiDtZa7zSXH2Hb47MDx9pxs8gWwagkVCU4MkN73d2hompQ7",
  "key17": "4ngLywUnZozjUJZ7SbMDq8RKm7ofNwSwgBpE1fojxNFJNEgwhFbWne2rx8GYmyPeuhBVRUfLqRrQa6obCvTV2W9K",
  "key18": "4QCWjQzpYgGyRwFiyG3KvHL4BFT5gXFfWKyBu4HeHfpgtc9zGL5mpzuQV1An9rxqkXmV8xX8EDCA3dLRD9CckG6r",
  "key19": "JnoK4gmdVFzUtKCNrbJ7UasE8u9mDtsKcepUm5F7qeUcpYwUhbdaupACXGU7zQb6fkYKiB778aLXJ7rBKCYELZB",
  "key20": "NLBwCh9FXvjPAaeK3eRLS38rS8yFvEsczpDpPzkxyJ6Va8QH2uGQvLabdtvHiFC8d4ASUr6RZdtZSuwJLuD8nUM",
  "key21": "3H24FZStFqXhMfYkZX77X5kDnjYCFFbXqUo97H2fFf5YUKGzfDSmS3Vdo7qzrQupdRSsMx67BNidpxeVy3fzF2tK",
  "key22": "3PyJ974JRRkcfyrPJR6QaD9F7qyKf139mfX7jAS8ez1uCokRUENo4PeUjLEQnmGmptyo5dKTaG9SKz3tDBpgpDk6",
  "key23": "594ts83mGnhV8jxnAchpTyPKnA4ePUiP3DKWLQcWoxi3oiM1UgnY5vrTfEMZmXi6cFnht71ELr2ycYFL3hLigdi8",
  "key24": "4Mrex1ncXWCWY3vg72Q1q2DqX5oTzBvHHyBmS7V2ccGcwwoTCBDE5wKs7mS8RvLbUtCXiA4RcVcHgpjotZBo1KJc",
  "key25": "4zc4TrMRjwyQP1jjwsBnm4CFXkSggJ2e21ZnpPr86Ks9xhR7V5EB5Cjg3rZeijAq3quv9kfsdjE7z7kSKvYKbrTW"
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
