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
    "5KEbPayXDq3ZF5NJZZBCNPGLwBYAm3yzGArC39FAtiDq9YvJpVzFczXB15pdHHfs1gDfRt5SeCWy7nZL3j4UvDYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KJPHC1eGXx2f8hCNi9EEGCVHXAYaLYUZFBFeBBmfD8yESQHXD3T7gYK2we1msX97BLF53kapfUkAXA7tFjJacyY",
  "key1": "2oJHGNHAR4xQbuE4xySYco5PUQcT3XoeLZAmcGzKoi8s5aD8pCTVXEfCjz1jsypFa57Hi6c13drgnkwjN1CBZaUc",
  "key2": "5Vi5wkfiNjpQd9DDn8wKnnepzevaLejVRMCRVvFZBC5zRsA3EJEAiye2APsjjNKCAiK4T9tZuxHC5LKr4Fz2KrRw",
  "key3": "4wYsNp2No8h6wAmbMGTUwKEGZm6yZc4WChSC9fRMAX2RKJWxUm3eiq9uYzvZnmPCDPPBgb91UFCLZVVrgg6i5Gdq",
  "key4": "4RUg6EkTsZJdQWSgD2i5jWx5eBZ9WdFNoFCzAHbHGoHeomxkaxhCqhHiBPdYJ8CHnbG6UW4YKqK2fd7BWtKaDxpT",
  "key5": "21phhGdQ4xf7JvQtHi6NNHdvrFBsaEKCX3xdUxyBDyn6M89Ng53y8VdzjhDcJxZoQu1scWfaCzU7jAcw6hUtTHos",
  "key6": "2dcVHqVqikz6vsAcEY1uFXXBH14iVb7NpesPP7iuJu1YzX27F9M9LN5wqmB9jydo6cpo7ZRbTY3RhMbrXaJ8fRoD",
  "key7": "5s4RkdptEFpZW8LrLxe4qfhjjXmV4Gj6HxRCiguHP2X8yGoE9WAnrYgChYyKsg4CwXagsmsjCxKbKTpka7uktUgS",
  "key8": "2oevwbm5m28T3zDYbSajzbfe688K5EmTLfZuV5CGW2xRBRuertBqqGBygEguQzyhYh7o4RgprjErhjXqe6LUiUDX",
  "key9": "5ZjHKfFUFPFiNf7XWUP6EkZF5GFH282TWoBTELiKqVtdgtPsi71y49rpgDNfA3Q7AhC3iHaBwLCbnWEGhbGkx37p",
  "key10": "5kGHTezQkhETQSthr8xnU6iejoCFkvyWZM6d8ahH6QiJKdogZSLSPvFzsAjSXFivdWRuo3r22tYYddNh5d2LHxMu",
  "key11": "2fReqPDRg9RsshwXs8XTyyQfmDSy9FV6fDPKx9g5DPsWXTRhNhfYjnP8zndYXLjsL8ZdRabK2Sww9qyWxxsD3YPr",
  "key12": "9treo6MTv2ubaGrfVUgU1rHCCQCMq1siohxyMMJvkvZx7babqnsrGKAYMfL9k7h3QLuE9hPibWgnDADVz4oPMbv",
  "key13": "B9kn1jhrStqH4KRqtyG5igGUWSb85NjHoUujicMcratv5BtsEBNRFQpE8n6JyBtFoF7UWGcC3d3uvn5CDLPJNG8",
  "key14": "3h8WDascsWpcm8CYZGdM56K2s1RZpVPYJ9q3CApW2Uf1bm46AjpEcDZa4XLrn7ThgBnEMYRhhpLLnT9TVw7kL8S2",
  "key15": "anFktwQhoqimEcD49WCgDaqm9owzGWptDwXJ8a5TbTFhYnGFaTWNJQceiHuBv3btdVh8nCDtnTzGQ1tdjeYygk1",
  "key16": "63UGEXTb1MsQ4boTbWqNQmvGMVgNrKKe3fngDLCduZJz8Z3oe7HdGLsLcZMa1zs3Gs6x1fh2tQAs61H7qMGFcoMv",
  "key17": "4HXJyN45omY4S9Ai4k9ydfyCHeRXmHW6tzW384MVyd8neJgviEZNNfuW9q5ZbczFbqJEzWjuVB3oBySGh7KWUHre",
  "key18": "frpNQkn8nBBXxy6mH6RzM4j1kuVJRiFz7pJVe8muHkfAjLFbbB6CGbtavU1U84znSv6XSis4teDSk2YD7AdJguw",
  "key19": "2KXZsMEmmLW2Ka9sD5CjB1QxcHwiesGGS7M8A45fkkNDEmegnBndRep5oEqJcYsfYEmk1GZPgmCTSXZEz9g2X4JG",
  "key20": "4G22oigZnxqiT8pizaBriNifDzC6zRfkcEGxNxhwLpZBp6kJcyUVbfZRF2DuBAbPs6Zwg3WyASJovNqmdp3b6bbX",
  "key21": "3M4sZZHPc5cHQXNzHZ4rDwxLzx1K8pCGPpEoFfUhqU1LepDoApwZWVivHDD9DB4u2PsHW2ARU3MbascGGHtX5Hqa",
  "key22": "2nz3A8KVeaXQ89EaCwdsfiaWvqnDKCVtZpGniUwDxrhyLGpmWjQ8hvDETQTPhZSaATvgcJjcVByuS2tFHFwwE5X2",
  "key23": "2rcnSzZauVqE4TYqvsE25coMKrBmRbtU3k2T66LPNCfYu726AikKTmoA4j1xAjfzpqfiYxn7BXQaeZLao7QfQ8SS",
  "key24": "4dNwNCMbYrfyjvd72mEEKwzYMPURsunmJ7Vg4PPNeYyZ8NsXoYcUr6RSzuCy14Q6SjxUzQwrrnrCjgEhVaJCNwFn",
  "key25": "4dAfinqKKBM9SSwJjZ4PB1tQ8cgtWfUoYCNufNsQg2abyXjfunjnJxM1QAZntkyPfHpfRxYn5adEsHYWh9YrQeMM",
  "key26": "5Qa1hPtYDgPkHRTmTyG4qGGjBSMXt1WMt2J17NAzSwYVd9TZ7EKnCJRjH3NhHS5iyZfM1AwZp7AcA2iARWmTQ8gu",
  "key27": "4Kro4TQvMGunCHcBnMhA8LaKP1WUAQKDH8cBdKHD6sqj7QNZ6pwL9hvjiD72f1LsqyurvPQux1dph1h6hu9aTmRq",
  "key28": "5z98EnMaEvyTkw8hePHM2N7GT8wn66keFs13kUjNCYLshjkzdk7sQH1yuG1CfXgZQR2stLZ6tBr7eGzKKh9GLi2m",
  "key29": "5RR8NhYkXwe3ffss9FGWKZc4yFLggW8zZNHTK3AttYdnh9HBTjzf1eGpArScLb7VF7TXeyid6F9aMHq6M8M1F8RW",
  "key30": "Fm2EjU8KsfxRhtkw1ZNDAvFwqJnYLrrV5NhCCgok4QcLshb31y9SG5hFgoX2FRQL69WY6MMAuTqcawqgeP1vVef",
  "key31": "27qmKdrFKGHLP3Zy3VebBcNLPafCEbtWJPdpvgpVqeY6M7FfcUajrkyxTaHpUnkE75cdQowsXAPTFsfLVY4oi9kw",
  "key32": "4CbvaE72hkfHzhdHfrnaFqGa7jBsWukyM4PDNtZgjPquEf5qq3CARYvZJusqWVBqUtXxgbH2qFB26wxBe2ZepRAy",
  "key33": "4wiSd9NcxE6JMDyDxpM85K9AU6JvWynPXNBs37rcNsfpUdaonTKQD1RFK5w4VMHcnm1VDL2CsturZhTzv8RQijk6",
  "key34": "565upA1nwuFGAWpBddo269u611JxhsophPGuXx1bbcEGV4WHcejLEkT6McjcpEuskkSWRNoM6VyNS4BLKg4DbGmF",
  "key35": "2TnqRYZtSg9FAjJWDwYAhFACYPRHhFmqHFfcx59XpBZUj6fPGAjdYVjVTJc6JBMGsermwD2LavXNxZZqYCXsxt1f",
  "key36": "2T68GLzauf9WT4qZCXNatpRpsi6DWXJUnqzoixjgrahzRPpXG3ZfXU8X9FhnCkaoKwoQjfuy8asZwxKj79sEgini",
  "key37": "3vkKeAchAdQ4HGHYSutaRdAZjkQHX8Btfr3cTVDh7dzfnqj4tRx7r6sZNFoGfBCwof88RdJerSEs5jwS39xhmqcE",
  "key38": "4r6656jBPmdgWTLz76ivjLTSpnerezUJxywetUGamtL6XVdkJdRt7vJsJ68WJeMaQHXb816V2HupohD4eJ4Qj9Be",
  "key39": "3BmqMo2u4QtF3AdsMhw32iBLYU49tZEyoM9MJt6gKjqNAoTKeR8FKqasYEcT6nB4hvowjHsuNXSMp4g4XmsBcamk",
  "key40": "2Cp8jUadZheMyjZMVHtmVeCe3LymVsTqM8FAagbZqHg1fddGPfRiRnziQ6gqN6WWi5W72MHU5PQkTk4kwVtA5qpv",
  "key41": "2iB91jFrFtauiM7wd4BEQknVHEvNDEMhHXKSFze9Qn88tQFutpxgT3GH9DyPc8ni79fZ7rND6z7HEE2gJTCGfAKP",
  "key42": "4XwkRvHsKTqwE7Y6CmPgvgqsTRdwvLMSMesmPfJddPzu8xtTcdYmCqY9V7pKEDXwqT1tby93TSE89qK1SiJwyFiE"
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
