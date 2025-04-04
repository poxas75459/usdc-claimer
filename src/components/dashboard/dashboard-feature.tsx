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
    "4goHAHjgzLVbm76W2TARydRYfzZ25CPc42VE5rKwCNQziQaZwUffSYCE5dMpeoB4DDkF5ENUyuCg336zHUf4H62j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZrRD4vKbTw5V7QkuWnJmwky6UxLC74HcpApxHywoKuPEiJzTiio4yKtzRh4tvXpbhahvwX39sMuMuCthtLqxxM4",
  "key1": "a6nhXx7sriEjELTATNq7cJidTz8Vqkr4YTCMG4psWohbnhrnxyGJoEfK4ZJ7T1eysecVqWgfSMCtxJxVt95H54n",
  "key2": "4rr2cffYJ5KdCa7i3UzJXbnfNDeYtL8zbdLZyam91xH6AJucK7kHRt9fARjCZoLQ4YR2uiKqpkSgBj2gpW1dWAQL",
  "key3": "5D2WCWcwho1Dw4wE3sXY7e1cne29tKq1SnoTCbG4ZwpiXxde3ua6C1tRWmbJuRZMYuFMvok5V7YvkYoNDJ2Jf7bb",
  "key4": "4iMGRERun14JiE9SyWYYsVYxTUMbL5ATspxwfbRXGndzhv9MiBaacddCXkjvV6fjxFx3RjxFdBkzdQeFJEjU1GpH",
  "key5": "RCKHYcdsjmedF3PhgxUr7XVP3AxKsW6Jw2ustUkR2KyR9QxqVioUiGrazbQ4EPobYqY89HtxP5wQdFEWr6QPrvW",
  "key6": "3SBr8Sn6TpxNPk1y3YjpkdboTeVHAzz7oMHojsxm2edZy2WEyncZT5c7owKw3TSUYA196GLwvaWyyqJG8cpCewJd",
  "key7": "TQDm5hLNckDmgxE9GK9A5D3ZSF5jcZefFhNEaYVJWDVaQ4299p2ivoPypJTtCsKY9ARwYU48hVQbV6FkXkwiX6p",
  "key8": "9j9HuJXPKN6W3SMHckhp9whvKesQm43B83a6gmdxejMWKyFatboqRqrU5WN1VJESvcb8XCRW1ZkJoYFruQJaYFE",
  "key9": "ZA2dZYyjQP9Nw3CLhCFsgsUCfypYHfPMFT6xbKcJC59rm3zPByAA4SvxqvKB9vH1xQsqmoy5rbyebsUPHBki2aY",
  "key10": "5xfQTxu8mF93C6BYvPNNHTNjZooWFoZeBBV34sdTD5aURPCHPmgAtfrnt4TjU6kPED242BTQ5WpndetDK9Tkt9cC",
  "key11": "xMgsMDeoQM16tBhGzY8TU8GbSaWtWkzVRYbLJARKb83yu7qGc6uKKFakJmRyqetiQAYoWcXoxPDa3PVvy97MHYS",
  "key12": "5EXCHj57i9YTd6NjSF9NCtbwPCZtCsSBksQjVUg4HABAkaVjBYdgct6cYUCqt83ZGgUUQrZuBHgtv9v4anmx1L9p",
  "key13": "upyddDyobUwd1pk2D98T8h6bZzUTBkAWgbiar795WLeUqYyy95AtBxBBxcyBwuwqPuNq4UYvvN3FAPpU66fLiFe",
  "key14": "4mGbnZBSuPiSZ169hEGNZHcD67EpLh5EE5q2nYCoVdgggMnAnVGsoVwuYstNmPCE5q8h4REpShxgWNGaSE1dKJAN",
  "key15": "4Tkkrd2KhDoY2eT5MtuWVEz7FEPV59cnUsqw7uB11vwHmbgtQn53K4XMuCYM1CMfU8Xnqj6drJp367zb39niDApJ",
  "key16": "3tPfJBzNPj1nB1wZaLbAe3d5mrgVKpMMYipWj15NMqsPM8T53CYPZEGVQJrzBDyxz1NQWxwEjHB6KL5wCTPekhA1",
  "key17": "5hrSxY8J9vkRVAQSDvn77pcRAbMzVgH2CqzQxSiHmzpJhHYbJCuxGsrQTxkFehXRA2fP1ynzAqN1S18VC7qVaF5h",
  "key18": "2LqfKbjD3rPmXeJwJv5xsBo2ADyrb3CMBGEzm9KtHQDzEQd8H6GuwkWRcXdavzkmv52FTWRMoUsPyxJtT8ZumTYh",
  "key19": "2UWou5MaM6qaqQAF2BpEoXt9b4LHjfNnmxJgGC3qVgXcxRbXreSSKWvZZ4Jevu7AbQPc5e2Y9daKGDQRpaNgUGbx",
  "key20": "2RAXaxsnkWpiQ7ToCB2ms3f3ZC4F82XBdCXCX56gZVcG625kAjx2BMTnjuN6orrfGTCbcMZrvJGsixZq56GTEoNQ",
  "key21": "24PMsbYceQ9iz8Nw1kfTPoC9RceT7b6rn7nQQBGLVrRcsVMGMWAaQgjLLbC4zawqpCtsp4yTzs8UKDYAKhHGFDjJ",
  "key22": "3g2PVK2ZeBiT85JWLh4UCxM7i5TcT4Ckj4d4xr2nCXwL7aWrjbvWUA84tp64Ty9eouKtbMDqbwQz1MAB6NZpEBwQ",
  "key23": "3AfBkpnXNKfX8w7Eg6ndXMhRVjUiLWkSxBGqKsa369can6SCrCWEGwJcdsztNTp99PqVjZZy2igVbpPQdvfhEH19",
  "key24": "3rynH22q78Rtvnrnb2Le2piBV1VtTrgEa5p1prgdew1bz97B8JjrFhwuNxWR3QyZucgXoermDFT6pm1WELXUHRUA",
  "key25": "55UYQ5J96cfFPnPMi9fuyGt1Lm8UfBnRstZigrKrSU9Mz8YqjawacdD3CgYVryy7eyQ4iu9aNo6iaZReA6KbqYwm"
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
