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
    "7fRaW7inBrpXWhRCjN5JmV2x5GtW51pYvQhQhoPaRvP6dn34NMRf3k1hVVZginNSJePowniZ6fWhX4FWvvucKHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WcqmMky6bumGd2iGMCUfJUTzyBC8nm18HMhUYwwSEmmLkV8ZMBA5suXYD9spa2jebXsdH8xX2FVruoXruhbqVB",
  "key1": "2n9XKfo86JVJ3a7Zz7RZK8wD8jycG4QvMWYZpRyYJ1kXmiKiKQnM3BEsAFjyuRa9mhthLMhA43UPsftVguyFahnd",
  "key2": "Dav8qHQrq92xhpKAZxVSU9ikNzhFu7bvSrRhM5di6PBmpZVKMBpRU83QbLzVvuGLhv1fibd4uFmETFEi456Fgnu",
  "key3": "3JyUevoTQsCJg9nZbzXCKAQazaoWdS8vr8iQtmDFohTaZjarYWTko2GNB78nbeedevSWuCd6MFqGWJMzSTXzW7rw",
  "key4": "2JHfefEKcBRngheiht6RwrgwEZXDKv3e73nrYRrJ5uFx44icTYZb9AEBgfDG7eZohkxtQ4FY6tCZdnLjHENYxSnF",
  "key5": "5sRyHGNhSWioybvpm2rTfPhQezAp4QAJpxFrRL2P55DdQPxzEMGEpCYvKKrSAJYWh42MmXC4wHAC8ZdJ8dfNFbJe",
  "key6": "2ErezwPgrUuKkwUSm5dWWUoAKbBqG7YdPihHSne2XNScNTha66v1E8v3Z7Qaoj9Ysgy9bzARju9xtfCwJcqsWP8F",
  "key7": "3N19VbpCNzuDT6MAj7sgyB8mJmo5tGsNp5ZzLFDGShsZNijXMkbK82GS9wFN985Ay1FkXkVE34jGtRPTEaxGBZC5",
  "key8": "47eGpcaZ9MevZ3czndjmzBDR5U5BCRDaKqYrVs6Mwv9XFbgrRa4DAbCn1EmCUUsG2DB95tgzYcoubDMwJQeGaREW",
  "key9": "3qseDhcuAcK2mZbyU5Siqejx7GYKTaL8V9SQ9X3qwQkZbLXCveMv2BLzFNRAFzKqHk3vfahWUuxwPyVaV5vwceR7",
  "key10": "33ZfjrWQ2EmfE4HQXDnuRwe1V8bKvr13P8WJHfish4VSKDxCdJF9j6Ns4W5NZ3gZQtCQjDEKew7yUoraNJaarRmv",
  "key11": "2pc2KegoMaP5rGE4pkHnBqdwiNtistapJsbzUpWWtqRnzCLg8SoHqUpRX22134x7RUwwkpy9tcNYJ9q1Rzm3S3TK",
  "key12": "3xQG3GRiVFp2jspv3CPuFV4EzJEc9BuZSJYBwQTLHb1nyAFqqbHx94sQM8opvAXYXwKEvQ3GPx4JvVvQeq5vmzTy",
  "key13": "5VDDoawNsDgbey2EV3sztZPw5ziLp8MekKQAiLg1fGC8y4uzB59CxKrLMAvsTWuUH8Z8J7r1NV4gJiLTeJfPBmtv",
  "key14": "E5tuNZfZmB8xBjzLQdCLic9eaS2iyU221qvwKoFQG42ujf4v89fZ9GwDrfF8oBZYJwJ4vTGCENS1cjjKeQggKvm",
  "key15": "4mwBFqCAa1two1PBpupgEz3N8fc5fqHmMULrUqAztsJ4kXuM8vVRa9fXf7vK3oVopSiKPbGukUtcKyf2tA9hPc37",
  "key16": "3ZzrNkEp4rY1noau9k9ga2zGQSziNNwKJ6HECdnZLZAetq5EwkfkW5pHAyohtMjQeDSeQrtzrUypLaRwMwXmF6zB",
  "key17": "2vw4YujjqATAmhZWtmoSSSMWsYKNUEofaZtXcBZratDe9crBmygUp2t8vzUE4UHMKftoLnxvE3TbqymJmoTqecAr",
  "key18": "jKXxch7yF9QRAmUZf5SaSkqXYvc4nNBeRfdQSP9ECq6LeHVWk7Ps2yYzVQ4nNbJ2hfSVtLWwrrgJvjg6cMjd1an",
  "key19": "55Lwmrwm6NDnmNph9UgieWevA8oRreg86vDWLtZgrgwPDsdix6T3PBB7CqaqyF252nJrjme8sMtqgqeHw1Ue6Wsk",
  "key20": "cgzwwSPp2dGfN2SUeMYpWD4k88WQAvejxPCmSf49mHHes2LCuHHUfvoDzTQZKienpXu5XW3hskhTHu1Bge6h1Am",
  "key21": "4Zq83rbBvF3dGx6QsaaX4ENEAwY9Uya8VEyaCQLrk2UW4tUJemwyQxjsAiuS3jXy8edbkQPiEbFrmF7g44WKE59c",
  "key22": "4sRdzGbxgKYqHQgrjZcYnE1QiELaRzNgTksh9SCWWKT5LB8YZnqMqmfpMBAMUnf12Bfw2R6bm9h9ytubYehbsHpm",
  "key23": "3wDy2pfhZHBuaUKaBFfEt4xxMz47SpLThfoW2yZWbHFUgj9VgqQLBMJSPZzTbE6X271YDneMmQrmVdBpQczBMTEe",
  "key24": "3wvbUPFVnpq9tkAR9RTLCikTegQKsiobjsKKJUdVGjzWeZJCxMbMhjvugUqj86omHaEabp1ntz9769KK5wxYsT72",
  "key25": "5Pkg47Hof7dizvYWRjfAfrjxvgu7GAtAFrRBhvPcaWrPsQrpDYmDB9tCno9YbWZjVQV3YXQfYdV7sRS7dgHomAb",
  "key26": "66wLwK7E7NuRx6BAJrWnSuJ6N6DRVWJ1ZB5bZYsajpZm6S3xdNDfG1MPRbwKCpaxdrMEdwK1Qc4k5EahBQQKvvKA",
  "key27": "2Wd99N5EXunaLj8kovU8oSA1ZXSkSB2hyREY7Y7uY6u7e1unF82ALpnXS5xtnhHwFgTiuTjQRBwG7VwqiZN6in9x",
  "key28": "3nEPAKs2VusDKQG3Svdip9nWnjhGCZtq5fqhzXAnyZ1YBnbzL8bvH53EfkpdTXmDr6xcntRWG2UEJBT3ADt33RP8"
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
