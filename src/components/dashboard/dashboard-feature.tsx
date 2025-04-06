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
    "auZ4h2kYBX39xN8gRisty9opkJSb4e8sLiKkeboMAmjrNcTTdwVNH8R5iLJZqbNvj5Jy8R7hmXWe8zoPRcaxmBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51MWMVehyTDLNeqnHyeUQtAs6S2iBQMqdaqxZ8wWKb8MAUyGPgpBdakYZcq7TWiFnyDznm72o3kQVhpDNpfDH7R8",
  "key1": "2oeQeSaV2Kus145HXJzxcJoBusxxwXP1JPMK8f2pMNXqL1tP7AMvYHho4zuQn2FSVDt9BYqyxHAYbJp1tz1W5B4S",
  "key2": "P2BAMuUWMWmke4pgVsjSnUNTaTUHFbqf5ToAsf14iPKDCLpMDu9fLgpv3Rj53qcgdEQYFXNLxCnM6HdsyfmQDjm",
  "key3": "3jSNtNCbGpizDrd1pc8wWqyXFpFpDtLuue6EjiesMqxhDZf2At2yvbvo1JecGfbCBM9EvZWrihUoJrYJqzpMr6oH",
  "key4": "CERt8JvDA87VHtVBfzjEQ9FvnRGHcwbqDrw4mVmJsGQVkLGkF63ZY62EhFAFS36DEDDVBeMJvaBx8m68woFSfkf",
  "key5": "3ymKWhj923Z2DQqqNmTWeeNLx9jxMWrBUaCva3NGBHGNbCBEFxJ9Pn4xcU3QS2TxFdgJpW4gKmSefnvTXNnbjYub",
  "key6": "26kGaTRupBDToPwcZXB1qmoFrRDUL1RdE5qHgPCgEUFzzhWirkL4U64J1F82wNwCwkMaZ4Fm9cmQM6kC3uX5iyxz",
  "key7": "65p196XMbpUWSwnBFcpnUEe8e7FeajZndKKP9otwiSXf1m6aMLP7eDgRwTBTJ3PXos39p2iEfkFNGcgGpJXMQA5H",
  "key8": "5LQyrCvtkfUVj8cQc9Q11ajjNVMgzBDb2PW6S2VmvsRqVrDdVr9C1exRTbkUUux282PqdB5JdrhbKS83eiH4YWnm",
  "key9": "333Rpq3XcMQ5c4uupJmUdYzV9arEebghoPBTKPzRsc66gAuCsyhh77nbyJDXxYrsn9YiqszCmCw8BjAYn6xosZBu",
  "key10": "4tjd4NmFXAyGEjwjKCJbezK12HtrJxWHbjxeD7pPZudCZq9mKHo9u8cX6vn6C7DURpEwn8V4zMA98SfBr2pTDgfy",
  "key11": "4coPxXxsvtdYUdZAbYxRTjCDTNRDtn1TsDxuMLvvHuMJQqm8yEgwAfRDuu5dL2s6RswsPE9cdfb8saRruNGjvVoC",
  "key12": "4JtD3Z1TLVY43xNCNZzHKnr4aEjLQfRau4EazUMRqPhV5MAaYuJC9nGNCnFaZqq6hJg6BTNuoK3aXhXSJvBmWXDz",
  "key13": "3uNDUdrDz15H76pY2ewqNT7XXjHAFhXMLKTDHVQLyUJsFZwcst5u6UB1w1ZnNXD2CyGcsSXA2zKHLieK8UtYdJDB",
  "key14": "45qTUQU8ipxV8f2Jm4hXMHNX7DRULaJw6B3HR8M3zvEAygwCqWQx4zVVuZroxrdnfkyVEgL9GonuSQG8GBqxWu3u",
  "key15": "2UiK15umxU297VaBiFeu2ZTCr8GdfgxYe2f2X7d7dETeRDZo7itQKjYjYgbkP5X2oubxP5hkLy1cPV1keCm4bqJd",
  "key16": "5XBqr89bHC9VwyZMDBwWm75zQyvdumCirN7XGApAxGe12uRczYygKzNJrzeeNVvFw3z4w8iHqPHqxa44nnZ56Ymu",
  "key17": "21bxC6Fcb9hSAdtfsCiGg8Zj4BkfNSV36o6PZn5BUJHsHhM9VdXLQbmfSFvuwYoWM4SnA8TC1peSEZuctffegjZt",
  "key18": "7QmBX6vBrBHK2huUf2UF9mbvAwMAcvB1Zj13vGCvrnjpdBT6GH87Bd2Gr9weNcYXYWu5m8f63rQyeV9Rb3xdFs8",
  "key19": "43USiQaosGGSoNxedVZQ1iXiqgjhcssuf5f927knB1ohFve4HRoXw2i5BmkEktBeD5RVeZ4kN62fgK2gigqXcEp7",
  "key20": "28v6hU6vfe2Ej3pCa28CYzTRqS5ax76DkLa2tTybL6mpJrwVMazThEEPdE4Qvv6ktLLKcFvq3gwoeyY5q4qjrouq",
  "key21": "tAj2SfcJSbTTZNrehJWzJ4C2cs4yNzZMcu7xEesjqdhiYnp74mLgkHFhPVhFApB781etmAxGkAfrBxuhYgUGvJS",
  "key22": "2upZteCg9LBeA1JZa2UiV3X6YSmXQeZ7BMfy7dhWTt5K4q2K4jHJXmtaBDV5CRMgZgyQ5J85Cts67kUAJb3Ppedu",
  "key23": "5kiFyn64Mx9e8nD4T8EQiE9FBThjN2zCh8C44Aew7WZojWS8tC7mtqPUxE3KqWUmuzKZKdXGucogiacJnsoWxBKo",
  "key24": "4BB49r3mPost3AstHA6kVSWXagHXztEtQePkLj2MLu1DZgGZZWJZrenJGYSMhrxQhT89b2iWFtVqKZux3VB9V8yH",
  "key25": "5BpKkquovr7bxVLVKxqeHamR3NVSf4jEVkCPxazW5dJRYdw7TusyRyX3DGxJi9CaHRSGpaczidgteHyrQmFQ9obz",
  "key26": "51fjsVcTaKWQUzCdUcPgxy5Ky3FGoX2URT5NMHM5DdSrduMZjJwQ8hXN2Wg5eLyGppsin3sc3NMfegEof6WPofxU",
  "key27": "3rbCC1pmhbEk2y2LSqp9xjiPEstiZWbhFGT1sG8fbmC6cETMKqGt6Zmno4pH6jTmn3pwc8fvceALukCPJ1ikRDjD",
  "key28": "59QbiZPuz9iMiWuXK9qKmFiowJDXJwqZfT4yqYXj28tGBJcbDSv9TXAkdhpWEURoRSEDz4BJWAr6g5UZ8xbAoY1c",
  "key29": "66p5EvpQh3PTPbT8FmMh2vGeYoQzABZZGSrTzdkx55s9xMbk9Rj4k37qQXfskxRUvQa8nPEsbPxa8jeuP5sne8Mq",
  "key30": "61Aax8tNfYEAsBLp3c54eGX9RQHGdXeGL3gtf6kjaR1igpt3n3fXcHr63m7cKjv3W8JgQaA9NNu7Rb8tBzxRfReT",
  "key31": "4dqCNwVBxBgHyEKb46q7vs9MhpgmGEUuhegDgxEoxfbES8uWp4WaK7igbnGr5kdGik1UndgRTdRqTvVjXJ9eRsVj",
  "key32": "3QP3aE348Rsxx1HFvJmpN5maasK7UrQFJoG5C3JbbwcG5wsRCFf5qnhQtqfudLEaeaQghTLQzZWkgxZKAH39ne8A",
  "key33": "35uuseBZqkbVvdkjYSpDzwuXx7z6WKn6M3rvdJiAvoPVJR9eQHLFsSpLpikdc1ytsQ5oGdcWtXqmvUSUW4JgcD1Z",
  "key34": "2bA4gu2thbWKQdRDqKvkGXNz8mZqFZ8ndzxwmgXxBBwBGn88UqJMvFx6v2mPvF7ArXeBj1KrRcesA228cfivt7Wj"
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
