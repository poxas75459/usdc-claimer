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
    "4YdLFdsuZjaajd46GySZSjo2TRnVHBbS1K2R8gmNdKsfjdzGPZ3u13aJSth2bg3akGbbw1gjz9afDhDxF5y8fsEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4riYWcXfoB6EEkDCuUHgnX4Na53SCGB8jesfF45DKieHAaPkAe7XnpgdAq43fWjUWXPMhRVGPonpbcka164Tn3AH",
  "key1": "nSZYybqvSY6G2UNW9roNLLRNufgNLrjBZFkFHB32QShTbNNdK9U9DvNoRJLD5EbTemCT9ZWHmR31TBw4NSXjKn1",
  "key2": "2EZGbFiCHxrXsJzSm42f26nhB48sktbuYPn7HicE1DFSD22JUwcy86ErrQNP9uX1jUzA5v2KjsLHrWXY7HN5Yzwi",
  "key3": "3iY5HySL4VxYQELGMQ9seTwkeEcTv9g5JyHx2Yq3NeFKUupqUV11vmyKqvs56exNZt9Dkb14NXh5PgUR71N5VPJA",
  "key4": "4FKuDUqLjtgStMQjtCGBG3uGk1VtHDB8MLFcuGuqarKFnT5MEcQKjmTWAWE3z1WBgbpHY5eWC5QM5awqoQinvoL5",
  "key5": "kTBKmtKM9RjDfx71ZGLpremguEMc8SjF4bGPRrwSnn3fm1H6MrKZ5eoo7nwi7WVKT3HxrHaHsWN1e4VCxVxNnA3",
  "key6": "4JpEPwDUJvR1reVYL3XkJA9ssfaYbzGn4bBLZbAVsMpC9Yk6wefEBTAPeuEGa2iVdzpJMzd42Jms34467NNKzeM1",
  "key7": "3RgtNqDVwbvRftkjVjE4rwEDwANfeZmp6xW9LU4MmcYe7eYXGBCUByVrAjzEoDur9hMViQAyWsTFigWfBLNctmFL",
  "key8": "4n1FNuU3LRC8D79JYenCpBNhFPAaNC8e4xLfQxxxCkxPvsPih4jn8oD7kGhukwSGqqNicewbF2E1AgPdqJsmCHer",
  "key9": "5yQ4EpsH6m6ybXe8YDHCbzLQxhbT1x1s1KaBd3CY2TP5uDuE16zsbpGqJNidoYfNRMt2XmAcYQHSqB95HezC77Kh",
  "key10": "2kVmMbGGoS6tjo2owYf9VQiGLQNtRvXwmte3ahcBELz2A1MTjWuCsH2NqtGsx4vhP47PdUNKzuqvTgLMZ7jQggK8",
  "key11": "ZmMF4P3YEnmHYSmfDH8BZZJ2uJbV1tVyQy57iDmp4o1frKQAQo7sNCZ8gXBtnTpjY2fUMu8Ft2tsaPkvGVZzMwH",
  "key12": "36c933JTRPo3cxmgvoNZktsze8zus2jUzKxqkJCyANrApALocrG3zg2SsVgeqLAQPrzzxR1h1LRzVF71K7qNUAEs",
  "key13": "2uvdD78vWGxbm6EHcxbGYoCshFyQ6X1izZNQNWnYXgFWEwBe2csrXfkfwXToNzegYHR1KFnA9KP6Ubf6TLwNDmTw",
  "key14": "2mv9WzxJb1sVt6JA1Uy5muNnGqCcQG5VHmhH65UuQQsypJcJatfirSpF6vHstWi3kkf62veazuYh24XpkPxf9Z58",
  "key15": "3YF491VPRmgSdxAYoaax2hRXxVd9viqiWxa3BSgrXNJdGfYWK3aDobAGVikxE7tVgzdDBiVBLx8gLd1fHQaeyTC9",
  "key16": "T1AxbUfKCuiVEStuceeudRVQJeZdi67C1rAcqKXsDmzPEcDsTCaVjEt4Ao8DZjHoM2ovDBbvQmHM6wjGw11koxM",
  "key17": "4r5YGG2fi6TB6KJ7cYvcFrepHZTWAkwwDfGhdNLrnexy3gcasEBa7s41mnqJ5BQNwnvForEEnBdzZ2Yzho1BtWQw",
  "key18": "3BSQaAdLfWh8kErCGQCSc5yraEQbEvk8ECf6orbQyYJPfwhkg3ghrM4kTTZX3jjgzaqorYyHqeuBBtKv8fAJFmAq",
  "key19": "31offPLe8vkFEmv25h2UvB5kPNUd6DTB66WBZfduRgyamsEdMZQhqA9LJqxZehYkpnAqGHGUPw4Jw6c4mQpVbryH",
  "key20": "4y6K2ss3vDQj71Jvpps9u5sLGJX9RXtu7do9QWPWK3r8pnKFykd9RcikotPBz7poqmHebP382jRfUYDqQ5fQBbAk",
  "key21": "b5EaBDpiwDYsjf2oXCTJMrWEoBCBvTR8oDLEjCu91FUzzUKVGQu1xYR7XihzejP4ARYCc9rsnirpVrPcEtoFFk5",
  "key22": "31YJZiL8NAQE4CjXbC68Pn9M721k8PmfCThz9stFC4iCsNESBXUDLmT37PQrzHqxwb8TjANtDeS6uhk2JP3Ezaqo",
  "key23": "5JhkbFYWYT9J97n3BzQ4KZNvXViXCcjspNWvscrj9zyHGqtDanmdSDgZFA79JCsr3XBvqaHkmrSy9zPaAS3thKfu",
  "key24": "UYN2ZhA29kNi4WKKrXgURLVznTKex5e6FwgC1KGdgKi4ZLn3VXdRQBkZK82EgRHW2GyH2B7Rih74vAuR1Pd1TwA"
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
