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
    "BQxEKFGfMELY77Zo1zGPHixH8stsxp2A7tVySsMD8jBuvByHy53Xb8W6KzyUif7cwWU7MTqVYredw4cjYo51Wnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZShuvhX1kZaJeBjEiWK5BCvKPm4sScAc8RAdGhNNeBYRzQthd5X8DfWdUq79raoVAg2tBavuaotPWf6eHXaTEAF",
  "key1": "4VYEKwe4tfYRS3thN2GC5gtpqq28jW1vxPt3Sf3skbyWggvjruKwf46gvrDBshyFQ3UrFZYTtFroQz53qiY5ubfy",
  "key2": "2deYMUMsi1xFvR7ceUqknDuns4pirRemWEsc1S75Sesjnr25nBSRyvmvczxhES8rVTGnyg9Zc81xC999NYUqejTr",
  "key3": "2qoQpCfsAiYXLp5435dLG4uRQg8cFKWAdSCJ6AVX36wuBdRvujNc1acxoDU1jSArWH64a4j2FHA1SLczDA5HBN1q",
  "key4": "44psWCNdnNDH6itRZaLxBWDENcgGGWiKRgCJJJnC7kqUTqoqCwwToPMdTr4Jt85jPpuJwMApg7Pq3uNxupG66CXj",
  "key5": "4mMCtT2PjMAhippeyHJfM4Mhy9VttscTnjCctseA2oy867z59RNpoCqnpWDAMXGdQgJCULYmuYZLyn5zNTxHHpPn",
  "key6": "2X4X8nUQM7qtUehzGpMqbHcuHdwbwjYY7s3MntLNWTrzNtqtbTyfza6nuQKGa1grGm5hQbgkNhw8wZUT2BbPrUFP",
  "key7": "5DGLgCcZX9FyF86bALdGL2eZauZHBAxfyAAhhDkwrZUk5iTe9or1nFZm8mxDDEXmsgkc7reCTdCmr85WvHeTMu1n",
  "key8": "5vbvAVPKSoCQ4ZjyVynqXHxzfvHvSpbtzB1CPWJ614YCFAcuA9Dq6eWCcLmTqn8G875xKCgVo9ypqurPkkSWnacM",
  "key9": "5CnQKMLQt5G1JDGPsU9StE555P7NRVXL8K81j4CcDNK6GKWP1SAbDn2WqcmJnQU5Wfh8XuXu5PjjFnhsMvs7kpvz",
  "key10": "5DfYmLqHRNqNUmFNDoiHGZbp4DiEUdvqK6zHYQtu3NbExFniUpo1oRPe7rimng7vaWVp4aQLZ8DkgofEdzxtrXwi",
  "key11": "34oe5LE6vtsHXVatfRDmsrkLKmjbYvR9nHpRQHNf9nsm3HbCT53ooJyBTeni5jYdoHRWP38QvRpfRTo1zB9pTrab",
  "key12": "4ZgKfwiaBT1a4cqEtwMmW9niJWXyPbxLqepctyAvENg3iKou4Cd1KVfLqn1fsReLEWV7casvhwsTjmgFgNq3xV7m",
  "key13": "3vevSXEcN2Pk1cNP1je2J2SozCoVDRg6KzCXLsdZ7eGdhQzaqKofCft1EGsScaJ6HeyZuMMrRP588fvNA6Tdo5hw",
  "key14": "28GUSUk3ASgPow7jmBbFPfUES3pnn8oqWA7Vv8thm2TPoLh3f5PyYQKrXVM8LKHtztwKRokopPvkQ74v9U3XBRTE",
  "key15": "576fEGpFEuR9vonwY3TbxddnGbBuUMcS3tho6W25a4rCwUxQFWVDqFnEn28AdsshGvqdqD7GucHWXSjsvqVvzne2",
  "key16": "2bHDZZ5GYbBC3zbRc5h2FCLXdwXfYmWvsjoCzVQTApxdSZWhaCf5qtGc631KRHED2qv5jYSJQwEDJeVWJtZpF53N",
  "key17": "5F2zTqTpUN8wArGDojgiGt1Z6sn7zhFdAT6EPGH8KwSt1NCHJZiP3fHD77Q5hPeyHcomF4kk3pgP1L488XtRFRGz",
  "key18": "2CUWGKQZS5WQ9GoMXFfH63fYQgNjWLe4FtHNQ3zV9q32zV4PDQxMnWNjVSkZnPFQ9VCw6xsx2qdK7AqSy9HADxCY",
  "key19": "5MCZR3Nv8TB6U4Y9gqWdzVkJitP9DykNkQdQi6d3sPKp1WYq9W29cYGVpTHtGsdGpfEBHogSw2Roh4JunR9L9Jea",
  "key20": "23RqVn3SiPz2jcd819dgZZfVVQNaLBE345U5K3aX1UpCah7aV1foHhebBWyFam99WYediKcNDCZb7mDT9tEigxMU",
  "key21": "3SJ2EKHW3C9qkWx7BFX4Yq47hZ8Y3xiaTkRNAhGrLSRwPLfrcgW3C9ixTv4NZhQ2sACWfwb7zG2vPHTjtQS5GYtG",
  "key22": "2kttzivXrJqnbw7P4cjzjE4UhqGtBkvEkrWLbDBRSFDP69FjutgV5J8TVRzhQfHMMWksWV9M5ADXS78rcqW4JnQr",
  "key23": "3tzRxM2yXK2wVL2szZVsRf7xFDoHHi3cy3Pwaq61XaKVJFyMsoW7ccWoNZTrZ9ArW4tJxaKynx3oXju38pHiwUhf",
  "key24": "3H3cAnZWVqV4mn5owqUMQK8ndeWUtHkhT83N2vWXCBqkfaTNuXkxq9BCyEPPY5GGAPyYp4iL82zUQUdjjZuDi53t",
  "key25": "3ZRcN3gLRc61aMWGrUCiTUNbsyR6SnRWS7KYApXM6X7AX1mCxHyYso1Y76Totzsx6yrhQCcYD9ZxfmesUvqtBABo"
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
