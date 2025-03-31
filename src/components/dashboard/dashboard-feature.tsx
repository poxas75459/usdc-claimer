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
    "5UvCM2j55trzpENBodrgcpJGUjdkma3aHYmZymT25pTgnkqHA4Ur8LiiKQA6Tkm4Grt9gs62eUabCgLRTie9homi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ndpZMnRyFwdxMxSyS7xKkcq6v7ToG9tGmKgbKYpkQQZrkiQKCdjciR4AoYA11836KFaS1cdZkDcfYEsERHB6dmK",
  "key1": "327EbpMjjUfau6BrtXq4m99Um5E7Jt7Zff5EFahhZ13g6ivmmE36Wd3Mfhx1Ak1B49NBrzLACbAVMfNBecnGJPfB",
  "key2": "4VkQZuBYNuzti3Qt5mF2BJwx4N4FWeSHvxSPkyQjmnUYweFq2mrVpwvG7qUCS5QmBNhwjmtyh2DK2WbhSoB7cRQ8",
  "key3": "62PWyfZaDDZJqCqcz8HSvQmAdjEe8JAzLmSpBRGfE9LHe8cuUCaoKTdt9xoCifHsixYbYai3A5783MKTuGuJy7KZ",
  "key4": "3Mz9zGSf5SvaJTB3sEw4SmXajCRRqQ5dHbJ2DxgVqjEp4okHUwwBXjKdd8oAh9HL4aSbWZumKsMQBWv2mAQzZ82U",
  "key5": "29BW3HFeZYo9bRhjhhNjfg7odEkjn49bXNowfY7HAzPHzHSQ5QZcXoRHELViLCUGuNWduWGVKh2LjSTBeRPM8j3h",
  "key6": "67SzFDYPUhgkgjr7FNw26KzvWXWekY1n57NvkZfV9JzpXSJyNe9fdWoawRZMcHSoK1iBnm3edV99FwuzT9LZibTy",
  "key7": "65nQpeqwuTZckgq8VJNKngwboinXP3xMf9En8RPZQAsv1BXW7672r3ArAxcxRQAENvQSsdNtcm3WmMt1PQaPqRgU",
  "key8": "2rDLCs5gfVVhg8bbihmzsKmsMjDrnZo9X98c9ozKExrDqkiUvoWr5czYkkrocuHUF3dwD5jiYgVZVNrP9geG5iW7",
  "key9": "4EXeHJuBWPfhD4qXDyuuyoWUrKEjpmNDH6JpwgqjVwsQ4CsYETmDhaNw9pX97X4BPdr87Dwca3bpkbevTTfKvfyh",
  "key10": "4LYMFmyFS3pSLGKx9dPYpU59mTS8dSih1ap7tb7SrL4GuGCUF4W3way2QP6PYTWCRofyC15k6J6zd4WarmHSqKH6",
  "key11": "59yQ2A2NowTPo9wxmP7owFZMi8YasrnpTy2oeEe4qMyLQCg7PRW1ESWa15GG6HKE9Tem9HasQsVszuE2ZQkqUsX7",
  "key12": "2h3DG4LGAoCKpwbHk9kKotChv7VU5pe18XAdwbC82s4euV1o6h49Mzb5tDTR35TpB9wBoctHr34tNKDkXWS1223R",
  "key13": "4XiB8nHFG3gZb9uPAjFXXK44az7BGkxQrfWVMVPYv8Tx94teR8fgrPHuXGt76bLZfhqJREkW9qjrRjhX8U3JsGw",
  "key14": "5s7xHBTSVrMX5oZUYPEq9hKefEsPMFB87PFKkUZk1U8dhhf6MZVEuWaTbBtgFRof1oWhKSriWRCmvUUw721ApaeF",
  "key15": "44z15fhJJqQXBQJQqhqTzr5ZW9ghzKa6nibGRKJwk6SqXEkrsSHka93JniNqRGCYrPsF2vAtbJPzt8MKQEWoi7hM",
  "key16": "4qVgx7MCXsUfW7hyJDDtBeRvLkwhN8xRnYqQG3btYa9VtPq2SAeQEDyjDsdHuSoX9vi2TBwcJUEsWGiVXRazGahE",
  "key17": "3SjnUfXdn51XJz229YpCSQ1rrVVyuTg1LANsxVA968DSwaEQGwz3hR7HvNjsa7TpypkKHhpsi75ps7uZxYwGQWKs",
  "key18": "5YFLRCE4h1CMfZWrQX33oKiPwKUNgzBjRXfQLT5ioZzf7T1FMceQoMX9MG2pLKWMAkG7b8uDgjq65V4fxjG2sg8q",
  "key19": "5dMxXyqbZYgLiUa7fSgnPnDJRK5NwJa3imvCjuoWtRuVndZzfef4fvFEhoGjmcTHmYHqLR6hQaU1Kq4Mt2T28DhQ",
  "key20": "3pFo48BmeUqDYkhFDzcm9c94J8iQv3G5KrjJbwQzrCXw9TT4MTFshrsL1youoGsCKhf6KmtqmhnGjh5cZamBnwLw",
  "key21": "4UDt8jeTdwRtyTmJj3JrB98Xyo4B5tu8MDioeNCmL8q5Vs9VbjEbfo1iosinoees7Jx26VnuhtRLxVjGg2QT1D9u",
  "key22": "3f9aL9VgVfc4z1Gd3dibPvvBQpmDdajG9zX4E6u177TBSc1jK89KZgNXhPhfe1sc7MW1HSyp1xMyEWeiqBHA9Un4",
  "key23": "627XyaE82brDaTSg1pF28cSHwaHkjPmP43N1Fcaf8yn46hcE3UazHE9me7xGFLLWZDc2FV3auf7eA5GHQutPkr7C",
  "key24": "4cty31yge6oStkdNi9WVndiu2B6EmLpzRrywhHR4ww6XiTEBE19k9w4WFoVXTYtDyQybaQETmfikF6fJiDm9kxpL",
  "key25": "3d4J8rss27hV9uH1byxPCRaZ3ayUHcRL7PcXz2KKEfLSLjJfpNs6JsnvV2GjU7MatTTXexKskTSTSrnYCMjHNPrU",
  "key26": "24TxCxURTGdHx6yV4zfWmbMwUBfZgkusSjXBPTcXaqpBheZRGUae1p4j1LNKqRn8qgi1RH627XxuTtzm3qCfdJgZ",
  "key27": "56hme7Rx21XDyzFYDKsbBTXGi8dM53GcGeW7Yz9AD7s5NegkTiRVtv3P3kiJjuhfTvS1rPsDT25a9gaB9awdqLKW",
  "key28": "4BzYPzRmck9McvDv7KoAZixCRqrHzzBUwqH4L1cmfCo9aF8jNSpVwLno2SXqV1415CzWECgF1ktVtAWJWNUER2mk",
  "key29": "2qzLn1kUGoaGYx6UHyrK8xnJW4oPeBwD3cWMYNFdQpaz3giRSh6rtogm3BgcRtysHm1Bovh5pCwWJyJVCjkyo9KR",
  "key30": "2c8jnqrXHyYdBMxHf5kEYcXjSztvgud1bJ166EXz8BfaHc4F1yjkYCfPg3LfM4tFERWY7H2xYBZqANdum1Adv9g9",
  "key31": "eQPgUCxfyYtmoYF78o5j9DmiEBZvw9r2H5K2noPdYBdj5C9M768Ykk13ZwGr5Gd6yuympbJhFXMpADKj7PS1zwX",
  "key32": "29rdM9jjxCD2DUMTcjix25jTX6e4rcTYEnxaCde9tCvsXtoZBu9cPPRQ2fDC6nnBMJKa7gqQq4mHJ1jrSatLapHx",
  "key33": "5BXGsb47RBQNPEFxMB2K33grNY6MPXH9R4mDv8iGHkfCbFf7atLBmgQ3yjWd2NbZi3EvmNptGW8njvcvSnXsWxzg",
  "key34": "p43rYM5weVLB1VXBD6VEeD4MEmkSGzmUXmazJwkA3uN7PYq3zdYyN9xh9w4CH1CEpUtCuANZHmueH6Gza7cvbrg",
  "key35": "4EGzxS9ADGHR3eLHAfTK9z5tjhi1i1QK533in2orz6NjJWfWM4r8LkjdLndUMEqSM3ZdGUJYKv9jFkdX8AyirDrY",
  "key36": "2P8cdsKWsGtbpKkmm8jb8wLGwZXjJMbpLhk78QVQWwUKCWTnkMAQYWhimMBBvXYEboMdGdN3c4yELbvtzPxR2BBu"
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
