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
    "3A5kmgU7SyxXUJW5HsMLR1Pxuxr3Jn9gX2QWMfp1CEtStMv6RnMaX9KwUwstVTUVBTsC9QzsKPJPCs9cP1c7UKrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TRQ4jDrQDJTQzVF2XQpR5JXz1sWo7VLCN6gW5txEAdxxygn2eacBjYUuXF4FkVFpfBZNiRg6pDjxgr4zkowvgTt",
  "key1": "3yU7xxEYj1BSb5vxq3uTud4jVEjU7Lyc5Vovid797BNhDirqW6xAEKpkwbqcsmXTupBQ2Hs6VnCcKJKd2XN4rquA",
  "key2": "5Bo1o32XyZBbuHLJt1eNyYv6uqjzi7NHnBqwcdkgaZnCdYEy22ECftTdQsYXmdAw5c8wsLD8YRFUSSqGLtSnEGeC",
  "key3": "N7TzdFSz1jMUWc4RmPN1kQvZTJBP3xsHD3Wd6ygPNZ9CuGZ4xHLMibksXaE9ZdfTagcHkUr2qWYdWfVSYzys1iW",
  "key4": "2RZbZNnpPmyKUZymNXC2s88vNQ5wDkkyQxyfXvZzWBVLX488EGYRsoRoMAJ81SLy6xxo9JpEWhgRAVVb9iaKC3HQ",
  "key5": "4E5PAHcGcmGcB4gUGmeBUDR7oYnKc8vYEcpv8CfMHLFrqCD6C639CmpK5DiSYQiA4fTUGuq3e7w1qa9PiqHpAij1",
  "key6": "2c6hYmJHhxzygmkNiUYNg8Fcq6Tmw2yfxh6VdYzjUX5UWE2GSWd16RFMahQhaAdD1ebLPzVC4no6cLdyWXcxtzni",
  "key7": "62HFAHYSRpCXD3H2Mx2j8ssMKt75TRc9PjW2TrKXr4GzdkM9o4iTddejfECKZvveC9uqQ2cxeC3nPbNa5TgCnnSs",
  "key8": "37KZgj1v42t9sctbyeLaxXNGWqrjGANo594PgrmjosmM8ANPy6g4VfkWf2MgqogVy6uPRUC1QrH8xs46qVqebTUx",
  "key9": "A2RkoyKxZKPFx9sXahjQ4vu3TDeLnZnfebSkhuKJD4HRFd6KZepjzwUC4mJB4XE9NwHnceMe8tRQ747cHk5SeWV",
  "key10": "2SXhRq2U5uqGiBjQeF7eL3NE4DMdGJnDZFLDN2ecmZQ8UroAXc2jAv7JqY6F25gefkmwS48asMabL9bzW2zNm8Zo",
  "key11": "46zTDmdyJhS1tTzv1fhTF4axctHdUyDYSSUywYpFLoE4p3mkS9d2BVWrA8XYhipendHXGYhrTaNFbCB6x2rFHNaJ",
  "key12": "KxNo1eCxm8RX5rsin6ibX9N3umxnX4v4ThASs3C8BmUdC8qvrz26MWtqnYSbdpwFYWHcE7AjPfMtFDtfavAce6q",
  "key13": "5HqyN6AiwGbKvvVQ9hJnPiPitSvtNtD8z1gC74sZAxbSGcNQUEpYecG3mxoTjPcswLnnSceoFsNtLuLwdYb4zZqd",
  "key14": "327XZK4FYmcWniwtPY1z24n9xmc8vdDeMuHYfcTneCQtHUFSGFk8GmecNLCffrZjTcPEiGWnYSHfQET9eVU2jvU",
  "key15": "EwmsFi4izQLoGfHLJKnDfHhhJqKeorBLhFyvVDQ1Yu36WzfSRU46gPCeJ6wzjqonZt4C7UU1nWjn2636rzecUYU",
  "key16": "2m1u5hJHAhmFrsHGYo4rxrnTnXWTw3UxCqjF61ZJjwmjhEYM3AtfMhaZfnD8ZmWUAC1R9UDVd6nDHXNBJDX8vwSE",
  "key17": "4bBjnAFznaeMYxzozkUpGJ2Ccw9EpTBYpGq8c17d4Rrd9sPJ28cmLkQDADB5MzH8hrGzbUYMxRH3UVTexJc6PvBJ",
  "key18": "vDeh4WS7YZS7wSs5wQJ5pvGPA7h2ijZutN9fNVjg3z7g3WZzhxRdXQWCfDRPHrpppXZLEWcNaKasD8MFr4FWiY4",
  "key19": "5SQ44Bb6cSPy6VJv7sjVTVoRUcTuKKJMEk1CTSp96UNqhEMMLKiCNiudXMA7epDm7ZUnzKMfkaub9r8tykKsp2LW",
  "key20": "3R1J98vz11kBaLCEurvzj4scEHSeDc51jXHQF2aAyuJHRN7Vedr3qbLkNT74ZrewFKebtvR75eGGCyCLrpAmVTKu",
  "key21": "3MKTf9USwxSwc3uVbYfgPrj9FQcV3cRoQiFsu9EMBXmnMzbTgHsAm1P2jPecG5Uen94w2CGX6i2saV9Mh2CEGaDF",
  "key22": "5YL5g2YPsidUkcAjTPrFgbnKckNtvHHRjCgDksAYQMQPuKSZziZj4X9VawytsZZVN61sjvnwzrprbEcb6QQTPPZ1",
  "key23": "VUgAXAdzkbHwaj7c3pYBJkw44NoZtGpGdveTruXsQc6VsfEPtBrYtHKVSTLxkBNqRySGL4BTEfptzRBRjBSnyvs",
  "key24": "3JHVJRsGeFUixEWKVEPjNNkizebwDZyLrJPpAJxy4PJr7wewPHKnnN2RxTejNSoihKzgDMwxUftD3BAq6ALVJgvX",
  "key25": "628k3w5pmgn8EeoEsnbdkJt8znbSDebsDrY9VEa3WETqWYvry1EpCmJTtg2cKfN2Zak3CaGRDREZ43tUSugELNyV",
  "key26": "duZGCdji6ekRjGkPGjeY5JsYbSpq7DXuYYTF1YYzg4Pwvnub6L1ToAmnyg2Ut72LcpEviqYWvrk97DsPwostRFb",
  "key27": "3patFPX7b4mG4JBCKu25njZxbDemX1QUxPPfSyGsxQ73VT6tip5B55ZmSZuw7RvQ348mbcgB18yDe3xF2vcWBA4p",
  "key28": "4eRkt1yebWMJagBa1pkXWNpHz7nZdkzWV1a4Tn5s1WfLQR8htQi1zcvqCJV54V7Qyx3HoBSSWjMh3mfoyiw9dYkp",
  "key29": "5vu4UnqrA1aE8Md3JePdgK7X6aSxaLa4Bvz4dkSCFePgbKttN11ggrjwfKKXoh5ocfDQ58bStwCymbhr2FqdjJyU",
  "key30": "4qFQDCtF7ibkJo3p1yb4M9X2jYVFpqzVNWZQyZxHRXfjeX8yppP2BzBCUmpncY7usejVASs1PGcXpS9H5jp82QpF",
  "key31": "3oGsYwXRLfzBwtwdc7FrLF3z38xx69FmLM4gQ8nVDSrACthmcmSdRVvB4MfX674Yv2Px6KeqHaxW1H2Eqb9q3Wzz",
  "key32": "5LcLoF9Ad7SqGR1mTjmcSQ8jxykDUrMYQg2fVUHFtYhHvnDr26urDddkHyPJePFCHdtKDD1VoSvGSSHEr7GFqm2J",
  "key33": "3N4aLeFuSvBhS2qzMtAgthvvcYrLTLJYDvEt9YnT9dYrCZZi9xCbe2DyT95AzCziCUARa1wHJp2YXJqpoHiYUefS",
  "key34": "3LKc2GyjzUEnFVH5CHpufb3b6dih3uVxAQMQRtCPfRo37xF7Gbqvt7oprs3TN1NoD4nMwYiYES1hn7xQfc3LGCcJ",
  "key35": "227snYH4mRQGoh1zWqoPRxNZMjbD4Tp7PLu7UuC1q1nmJnbMKrPG9XM1Y6V8sV9fj6toVMKGbe89Vdh1ovafttFc"
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
