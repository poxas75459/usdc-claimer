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
    "JvYVFGDj6xrbqSbvJaQArcxic1YzDEsyp2Ca2aBqrGtGwvzjKPRsLvzgExvdfMFB7sEjS5fXo5xmxNSYiwayMRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vWo3HEYGYaSxCbYLTshEZuZ5gqQqtBaXGAjLHj3SCoDEugJ372PhSQraNcEPseA8PXYi84F7jqN2h1AEKXw15n3",
  "key1": "2waUs7BYdSEfEZMmHhtZowzmi9fToX1ksatJ6aSgbSmexDG8grzgv9Q6PLFRsq2XRqxGhywMWMrDVZwXXp8hZwYC",
  "key2": "3okvFWLD7MozRA89EWVDc3af5H85Lajk4XbGCuBN8oPLBJMpLxCU2RKZEdzGDPGY6Adox1mtSj6z17d7ivy8MGrV",
  "key3": "3oqNzwvKtKgD8HCdwKGPk9raBsCcequXkEcy4aU7QdLy2xH6rF6s8TJnz5qwKgFHYpdtJDxWXk1uVmXfppxYDfz6",
  "key4": "4RLokhpXoypQqJ3SoEyqLi3jZDjBmJeSkGyKvcqFS6AXtDrxKdnJCA5RPKakgzYkcUCPtP3GbHGyihks3zUXV73X",
  "key5": "4nMbvVPLas3FXGVSpfYRVzWVFr1WPhXye6DmoMi1fuoddzdNJGcgf7ZeMLje8D8fejK4i3ujPrUqUDeNTXtjvPom",
  "key6": "3sVKSPx5V13Yd29kDeden889bw7VpUs8TQfByTuyznABRGbK5W5JzPsTiqemtFbLtYx9uyY1H2q2E1utxSZRRZPY",
  "key7": "5zPVUKYVuUcUbXrkhAeEQhsY4RhCw3KNWv6h9iahwUszV4TzodYtNqaJCMKXmWFQ3BrqfXgKBhrNhsBNYYr6tR4U",
  "key8": "51Mt6SFT2dFuYHQ7U6RaraR5G6VYmsGwGgrLW6fkPhWv7BjNfBk6tVZxr3Rkufrnhh8DveTPJhW5HVaFB7e5E9eF",
  "key9": "4BEv8bCCTnGgTqPrgamgF762Xo2LY146FD2ZDB9pQD5gVkdfN9SjGsaGb2UY346cQjNJtq1UD67oKQrV4ciNN3kE",
  "key10": "KGRnJUPRzW1kXCkNPZKWL26wwgnq7aCuKG3wWi43PVCJZVfGoPgKzYGATKxqDrVtoVCfu21pGyctSfW4fL15YKg",
  "key11": "4EDBrfW9N7WQkKk24ED72JE7m3xfc2TFkMWxef6afYGdgBt5bBLMs7gxVoyh5H7Kqns8WejGnWz94ftQziJTbdgc",
  "key12": "3uxesqcu4cPNL2r5zimH161ey4RguQXqxWNUGA35mPDxL91Tn7tSEK2N6ipAVe83AcPbtbehj2GvXKqFf2JJm8Wu",
  "key13": "3i3njLzzq7qp4mKED52u5BwL8EfQQFfPpwZsxyp1jEww6JeMLjENYcu6BkdSnuCQMCu8yPY4ycDv67s9KQaBFUhs",
  "key14": "v4BJvH5gvHvqMpafR1vPPRyMmtA4DiPnTfLGjEv5PeL4bNXLRD91fpcovZvkwJFrVVWjiFuqDdenKaYMAM9785K",
  "key15": "5e9qyZYnxa8FqihU2m1gG77BPV4WHLenU3fPu7fbzDima9ZatTs617FiGZGv9QKCeChD23gyaVU7xy1WukRwN3L2",
  "key16": "KXLaveKrnW4hh9i1h8r8Zj4gtKUJPGKAhnu6EASmrxnpi45R1DNDJj9BzhhhfMBzDFSe3KjTmFoxarpi8S9GnaJ",
  "key17": "2AGu1aADwUpaaTYSoYF2NioiR7ydK7HPnoFALpEd1QGoaJxjTh8J4dZnqUvetCR5k5uQQqRstmiMPa9fy76XjNp4",
  "key18": "42WSgDCSW5HBuvV9bCs1PuCdPcB4gAATMHfe2hSNJRHQiAymbn8PhWKnK45mYy9EKEczLkq56cCAFKtGDJydQAKw",
  "key19": "d7urz7KaQZW7PZTSWL2TT8RFv4hkeRByAivZJrkTh24LPjivM8LzboHPb5JtTQ9gxmsekiivkP8jUvAT9sZQzfJ",
  "key20": "3WZvXjYHqqrDpyTfTbKXTUNpdUqpJ2vSY12S89kXu1DAJueejzZ1Hz9d4zkC1uuNJMoDp8rSTEW93f9rRnfn97tQ",
  "key21": "2C3M929a4NyoVEbs1uXQvLRjnd8pVun3QHAkvRqfQqfUbn8DbkeMUUoLBgGVwAYLUhTvbZMYvHf1rBedyD6kLL5s",
  "key22": "4BSiZ7FVoy3n6TQcczfSrE47RVe21fH4BcGj6xLWSDwSEFdGnpxjY73MjckLFgUiMWTP46wcaiJGasVTrrUin2Jw",
  "key23": "51ghccnJxzoqM1K7qvbsHy4ynbVL2znWg8aZwsnNW5sTocQkPzhs5iLgSRcWheUcEGQ6vWi55YhN2PHWgdFqU8aG",
  "key24": "3hmn4yJ39qKkPtN9wKhKGwsgLh5iSYf5YgCppQnqPFJESdAWRZuoieVHKxQavkHETXe4G4b3yGow6NkYzhShvKX4",
  "key25": "5GSqx7AN5ibJdjFAvS8CiDJ3HuxUECymDYUgnRZuacbKAYtzQRKGxz7DXuDgHnmG3uKru2qtsJCWCqq6tKwwRbmH"
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
