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
    "5YXqohnP2sPDroPrir3TV8qfAzA8hYMxmozoT7aBtboBh1nc5nzHrTa1bXyNFRTkcaWCZTk5c2jzqMDQoGzi28ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QgE9pcGGKexpvjSugCqGSvc4fsokvoVuS2hkW7ffGncvusDr86Jjwd1fhfc4456kyXT7fMaH6arMPmj7DzDSDix",
  "key1": "3skjaVaJt5dAsxbeAjqCUCWAq4JbQmnczDFr6JdxieM7qw65PbjhvVYcNoijV8gpsDwsaLSASWDqDbpTdYihK5E6",
  "key2": "2xdj5TwMETu2gvbMmoEv29SyyDFtA5SkpmBsSa2LehPhYXWxas9WebWEdPWjxroV3E5G7fzVuZxZED1k26WESFMx",
  "key3": "3rpa3Qt2LZ56NHQ3eivjDvUrvuSqC71ZAsJtudgudvCQqAmpR5f7XL4ksqp8B3aceSpfb3wDwZYy77SVkz6SyqRN",
  "key4": "2EFrNQPz3L89pTGTwPvyPvutn7LXn9iGf2uuFBqnjLmhge7n6FtiGNbDmuK7jbYznkvJpSCXo8biZ8LsjsRx7sQD",
  "key5": "zcPoh2zprwe7rp1utTBwGwbLQkdWAdUus3UQxsfrCHj75Ph6cyEaaJTXUtghV3EG2MaqS7dj22Z1WfHNZPRU8gu",
  "key6": "2PXvekqFEQvEktXRZ41Wv4N74i8vrYrUU9tWAfJXoSvTaa8nJ5eDsqtuFgbremvd4U1EB2ZMZGHKKpwkGw8inKqF",
  "key7": "3JN4VH8oLHhbZFaCG2QH9Jv81WQFBbUfiojBYdwekQHsgXKxPrirXje6ntyRvPrd6Hdjz3LcJT4hynHXLGzpSDLA",
  "key8": "3NZNed1NPXGU6tnMr7BRw5QNPC2YVcr7ky2sDtjp5LmnKCGPmpKVAyW5pMgB6byNFLsW6MQRTg6jJzFr4nBs2z1i",
  "key9": "553vBnZzwaiRUnSb2FGUaf6wBQ3iZ9pQPkbXq5ZKcUskdqZLHQh8qtuZpKzHfEXS9JcQXto2ZZt8bUhrgoxhJV9E",
  "key10": "ajbQxpPaG5Gy8UPAN2JwWu4nra9UFjDJ2QRD7DoVAUQyD8LZmb3yGVqUyvRwQRo1wrk4kMXpH8MHnkoqDdCBJDf",
  "key11": "2qGXhwFNg7nG7JsVeGSPQf6zHDCHqBd5ywxjdwkY7hsD2TqiPjdaC3237p42pmfnoLQPfkcgJ1bWkdLPkv8GQzjC",
  "key12": "4d2BdGAC4nWD4ECvB1hf97u7HP547d6X9RxirCa354ATCQ6NtuBY5ZhERgK7aRkj3T1LdsR1d2kTiLgRFS83udPQ",
  "key13": "t5APgai1HG69ZxQWfBhooJKjnm6sVReuEvNFK8eJnPihfbToJSmaL7NUPPYAqAH1ukhoQwsnoq8KcsooViVbBdy",
  "key14": "2oFbUuQXzZkNNdp6pAm7D11D4VLZ7ZQgk4wpQZeemKoUoiKKxyJ2KXyrLB7VxmBfe7sEK7Urg4ZVzok8Lptfmngu",
  "key15": "CTQcwBttbKzrWaGjqfbHzR8R4EnevHEVinAAmuuNE9LVMshvQJJi4WVgMA5vBPMdymwdamS3pJPUPATn9yAaymg",
  "key16": "3DjWPLjsdrjPfKs1us8p2uec5aufcwmkEf58TNTx1ei7CifW9h5rCRe5yrrFsusFLcRWs2N1v7XcRWikqwcrpPt3",
  "key17": "5xDq9Ttt3sGuidXfHswTnaqS32gx5PoEhruir9BMM9RzuDtZL8tqNVb2sSHtsXPCiKDdeygcDRgZiaZbfxwhG2wN",
  "key18": "59m28mqS23J4htwdrsZZbmTmXjPEZuo8W64QE9qrbzivWo3eFZqHCrkK9q8792ctH7XWZdFhcZQgnrFyBc6QqchJ",
  "key19": "Jhca9VoCsqLNeXNLbsiEGbPSAXSTJBFsW3v7pFdMui7kt8sUrRaA83y9AVcBdpqUShprpjWqk9rrpuiiQ62qRCd",
  "key20": "4yRQ23qCAcFUVXJufbm7p69jExk1DYSGtD58VD5PG8fvcggr69a9A7zVuwSVfzvXWBQXGqTHCJf19s6YAPFhampK",
  "key21": "5zkmByF72ZABNZ42ndivDAa5ew7xD6npATm62MsgnkgZhBGW7QnwfzWKsW7UBJNfPjpBACD983SW6rDj1AmpzgWD",
  "key22": "pWBFX95NQaVBEc8xGACQh2mLzjrqDfbJWPC4qkxAFDb2AVK1apULZFq4TBFDFJE7aKzm4zuB7JDcST8G8nu8agM",
  "key23": "5JzKxh6TYHQtZFhL8NepogQzDMTSAD2vS76cedQcXfmT1c4LVwSrWW8iwQxWRXW9pvzhQ7srebVSU7GSDf8LtkaE",
  "key24": "4PyimytxzFV742UfnEuaRJKdcfk6j3UqqYcmk3iCqQwXhWix3KUiEPdz1htyUfGs9c8CBYz7Q9JcWi3hrGX1Qqzs",
  "key25": "24PK9ekWyH8UHxuvEh6sKz7YzMXVXdrWe2DoJayiKp9X9BGdt3rR4aVGJp2zfp8R8RfL3BDj3rkaRQn2bMPkp6WX",
  "key26": "2ukaSpjirmfJho2SZjyZcYTBGMwKDKzbyckLFCUm9UQth3aVd68hxsofcbCrMnYsqzzsauBHB68Le9WCtrZcW8bX",
  "key27": "ojJDw8aE4YcR8w5he3z94E2rpqnHHRk1NFPD55HouShMzUrDjwq9YVY8QeqzN5H5sNWDFPLE3Lyqd6Hcs3UqHLp"
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
