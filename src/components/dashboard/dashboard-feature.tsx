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
    "3S86Vb2t7PKbyg8Yn6ZMpCd8wCEHEmkfp6KUDmfCd86ey1pn5zmVBPg7wRKpgJAB24HbBZpVQ183ABT3NAbvpKK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ka54p7X6uTGqFjZnY5SvRx73wBn858p4qpnWsHBFuAvKcNLLyHwhX2W6hK6pbqHY3cJRwfWnh44YFsMFhau4ouz",
  "key1": "1AuaNGRuerTxWbf1jPWtWJL8k5HS5S6L9fz2n62uAg2ZgBHS6NUS8UC5eCMDMEiLi9B4dBArBM6yiKc67FTUHjF",
  "key2": "2csHYLjkR9gJqmcVqGGB6RaPe7moJKY2y1RReirsHa94MWZgM65SaFWNavPKTxazGjrotSzhFu5aE2Gg7R7bbNHb",
  "key3": "4QqUeGEpu6MectSCF94hwJfjD65b7gYqjRX4LncmRVMnESgCWMVynnBKwRNW4FMNjw7bahoNBgnm15KbkLT5fFpc",
  "key4": "5MW9xkmE2cX8THBGK46eziQ2EGeVWTeKjByKHF1HorBxg9FykyMQc1et9iYyW4wjNLcrsJwx9yeXXriaEQZb36ri",
  "key5": "4iiWdHn8jSffB3sUeGcQSp3W9gDvzuQZxaAtQqZT1JYRTPtpQZk9PbauhKhJDaPGdkbFfHtN5MKs2pKbXr36GZkN",
  "key6": "3znhvwPABSHvGSWoFBYSKhMmuD1K6AVdwFEYNAJcZuDj1MiLtyvK1rZU1ghcQm5S9K3y46myxwbGvzBcVNGfMGNK",
  "key7": "2dehZLD7CUKA2jy93vEfrQeJyeMiAne1suY6c3QRxAXKB38soN3jLa88LsyXazhESbUpj5jRQdndzbZWeUDvcEjV",
  "key8": "3h6T7QwCzEQZN7uPQvLNEbkSveaH68aakpsaegy6LuX48bDzen5e5SnNPgPwjimuYiquRKRPwmP4CwT5a1qPesRj",
  "key9": "32oMPSvxUniHUkyFoGXCmxr1y5vKNU1A8tiyRvJWhD1MB7VUKSRwzJMMSGmTvUNiNJZY9eSR9xS5ThATZtHeTX3f",
  "key10": "4n74sMMdnod9o4SRAKpQUCK9wjqDKmj5gUuTUnW82zhYExAtgs8v7J4NxUMCX2WvYorzRmDbRsJ3r68SzCkTDqvA",
  "key11": "3UFR3NExCMVajag23n3veSFDdYko45HfgPYa1xVK6NQTpatNmqaxc8Jg3FLVBnR3KLWQgHK44VYxrFA19E2eyCDq",
  "key12": "5mxyBGhxKWQUty2S6TRfRKe9KdPuWnUxk5jdD7fDYwCZZYhA5vVSrUiTyqgu7QJ59rtYjCoAnGgVRNzM5yGQGLtg",
  "key13": "5SzDKeS6T9YnjAHMsninTUpqMmk6ydNi5VVvQnALNhknJxahbddZcXmtHyU9SzSbVgxCt9yW4YoSwPsrVfZD5yaq",
  "key14": "4H93pKxk5zsGcdzivRdPJ5P5qqeFMmoAN36yLyzSuxPQU8TVAWhy9kqsizdFdMsNAw9cehqCG8ap6h5WfgSfFBGQ",
  "key15": "4WSE5dperzD9m6QDadMzAM6gaagtSuLozG9euY98w4hVrbsupdK2iByT4mTx8GKYBxvre3xc6JkhqyPJfPSm7Kra",
  "key16": "5R3WaVtg37vrrMDWVVRywBxsKhroGNJv2GyNuPUeoaUcfVX8m4ZYD1acEUnP2PTBwgKSHjZj4s6n1drm7hrVyuJE",
  "key17": "3qg7KHMBnxm6pVDLyd8gLREQEPi1LZuV1dvKet1gns1R6Dy3yNmoYMXCLc6x142EHB44huud1N6X5ipNyzvhVajr",
  "key18": "5N1JVHABrhtvK2D3G1HqePX2ngwMvzwwvtHxadNZNEhhkXhEzoMyd8CZGVaH7masmgGmd6PfRna9i84HyDW4pdR4",
  "key19": "55RvHSqtUfQFsPr29zYy9kqn7tpbwmibfYFJTmq7PnFbiMXDXrdAaVAEURxpUfB6fop3cJ2mBU7fhnWWe975YHKa",
  "key20": "JhABmE4wvRbSDLNx8LAL8NHHFLiuFxQnFGeHRfHmnvy3SRehJZEJkEqMMZxmSkKExwaRXw1DEAXkFt7U1EXw8eG",
  "key21": "tXbGkNDqx7iHcGBNgNBTQiTxDn5dfCafXmi34k5FDSG9Dya4gMjqp33gasm8u7YGzLS5n54avGhdRxrKSdHU3SR",
  "key22": "2b7vEP4HEGhhTATrnLGrEZij5KtgtpXrifES7R5gHaB9qghkuMumPdk9KR7ougpDuns31EuWtvxn6YE793Uuawqi",
  "key23": "2wZ8fYV6BzdStkn3VGtr26AwwHybrvWgfrV9cgvT8JwGvaV3fMHiucjYxJKQ72aCixRuyD9Lr4rGWu5phWYyGpdK",
  "key24": "3TTi3QPzBxWJKCtKpCnYdugy6W4afuGt19oWxQc2q4jwAVy7UwzF5o34VUDRXVzorrU9iTCg4ffV1F28PRkWX2Rp",
  "key25": "51PEeF2gzHh9FxRbtbGenCone1JBtFDtD8S9kg1h3A7etvNYUigapgnUYXx3pbtsjUUczLBvdC7Qk7iC5692brpJ",
  "key26": "EQDxhEeA87pqBR1fF5rDBdhQSbiAqRQZJt4BgVAnD93Wg8c44xotA3E37FSjVEmbi1Jy8fxWyCv8wkide67FzL2",
  "key27": "3sAkdS7Q3T69VE67V3CJTyhu9CZW1dbBNeYVJNgjJWAMoubunMsi2ChnBuadmzQ3XHHqwPj9HasyZouddjTsmVq1",
  "key28": "3V3J4yG1feNnnpA6HSKqBYKpoze6L5MLcSEV94RXRWimsSJ1kpUBxFFQnWhEBoYfwJtitigZx6qDxG7RUTRWfpdj",
  "key29": "2mrczXLzDvL7npC5KSzvR8SwgCLTqU47JHtMDvkPLRiupwQzmTM6sd5VwmQBYbZKaZAh9TnfcuFiC1GpsCLWPNiU",
  "key30": "5taR4KRedmwU4NZqzNGMQ3ewD8zmtXRNobpoVD5aZxMEx2TTCUgpHui4P36ShwCBVLrw9Fx8pWKqYuZW89Mf1zLo",
  "key31": "4eMqteUbyW3YpLZt3j3rRdWSu1i4e7yVLnERCqu6snRzp8cP5YtoHzwLDQDkmbXEHGfAs1xAqDLTrtCXQNnnakom",
  "key32": "2qwocB6HFbfxpt16oEJkaGctLLA7GywuBiFC46x7Hd4WxpjM3cuHJFknVyg64ctxHN9g34JKRgLqaARirxYgZBUa",
  "key33": "23JZ6raV5yHeraxWWppkhFkXDEUuG8vhoXkaLGjsC9Q5TGJNJJkSjQBRLXip2p6eNwnaeNRMD4CnnhHNJA4sRGgv",
  "key34": "5LNibzCiQYKSBdUC4pkxz1Zz19zwbXqbTEFkQh8nHqShMETofFix4ZqFjqfXf5uNjPok5W8q7NK6yKbJcfqsQkZb",
  "key35": "54NjyLEksMa8PFHXdTFHRzh7KQv9bE3kEsGKm2gRcWrRBVgv3hib5tTHtK3FDYsbdstEoEkPEfSY7qKwu4ZozSsX",
  "key36": "3riyySXhftKWuFfVuwwNKAwcKH4pUbe2FLLLxwzjhLD7WXEcx5krw1qF7r2StJWWujTMSyjZ1sFYeciJQp4M3nKG",
  "key37": "5h32BHW1fCPVDQBcCeAmZjkgDKgvBsvhcU78rTpF1PMWuP91LNC8F3gzz95dbTSprp8ZVA2NbaQjfX2dsZMG5edn",
  "key38": "Jg6TcBjhbnhPiBzjjrcGPFS9ryvwokweGgRwjrwXKiTQzVa9oh5VvPt3ovvkvYWvcF83Dexskj3xRJVB7PkBvqk",
  "key39": "5hC9pNDPKKG5oqR15t9QjZSToqKi9XCWVYdNuacrZhTiLg7H6cxEr15K54j4TESp8VW75xBMJvhfppd2QmwQ4JSc",
  "key40": "4utVvFnmJfzSPAoBbLbBqgoJ8qedn6RzNkeHHeTtqskKkCyzQ4eFQzt54tERASP8AGhCfNTVaAsuyPfJSWWy75QA",
  "key41": "538PRfZQsB899SkXm32bNmzN5nb7pB1vVGs47dY4VFSeRpFLR7appRJivT5wU5GMRb8NaJttHknqiJHsDqbZNohz",
  "key42": "bAH3VjDoPUzZbeLXnowBXXd86CsccVSJtYD5XGMu6uHQkmtAiRjzotUdrGv88yZBi3i6KwCApd4FUjAaR4qbrg3",
  "key43": "4Sx21ogqn83NrVCSVEAYqBa514JSmHsQnUwTAWm73Zo8XRV6JkfX3BrGwNhTSiCPWjXHjMGYLc3ijSits5XbsTR7",
  "key44": "4ndHYe4vvyxJcRhGBvqtV2GxFpBBmqTzBUuct3w6nyGYRexCk2D3YCcnD4pumdEGXNGC65e28iyE3oK3bNc9Yhwd",
  "key45": "3RGdcBXRhAarPxa7WN7aSzo3QNFS7nFtUSAwy3H6xZ5NYSekChzfeaRF7hRjjyEgWWERtrg3vPeUL8YqjMDpnaxY",
  "key46": "3C7HrxAutUnBH62gpubverVnEcRcfXfjEyumWTPdvMakSGdqzsX6VywyMjXnpzZRK3c3PBTNqEBMVY43Cto1hTcg"
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
