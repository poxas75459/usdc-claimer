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
    "3gGT5A7xn2369zWmCjr1ANmz9pZryTPPtrHBob8iidQARfrMYjipUCn3onTAJWVAjydvHQELABvcCeEff3PF3Eyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NehUZzUHL9ZUa4Aj14axFakNM3F2Dxi6uTcKLkedD7jomMsz6Zt4d8gv72Y2SXiy5wRjErN1x8GD2GgUBuNHZox",
  "key1": "5oxXfrFzToWz8QTznrY8rcJxznqu6PJXsSLZRuft4FwYKvvv8CJtugwDsUQ3TSRZS8NJwsAYyi3kbzMUPzpy7swC",
  "key2": "q4i3oFY4yr68ysdpbMHjVDBszivUBJVAnSzjdz61xR7sPBr1HWj6KaD3WSkxAuiVAE67kRYSqT2UPSKK1WyevAY",
  "key3": "2NeGUaaAGgt6MpWaxjvkvWy5TK5nWRGQQ6CifJwtPam7wRrZZpL3UDdFNg4jJTqvrMAXLURgLYJduVJ4WbAWT3qR",
  "key4": "2PguCUyZeRgnSHd34RA6Wa9YdMoUsHjQUs2nBTmdFnQ865f8idHiYLc1TS6kNTfTcnsogTiwRiWXq1G8muAi9eUh",
  "key5": "41Y1NfF4LQVLsz2YG9MibiGoHqZBakkd8yz3A3m9oFU56L3jkePsyGEBZtRFsA3SmqDMSUr3kRuLCyNZcJnZwsw3",
  "key6": "4bJHueVSy2X68raN9nYx5GjSr1gjP5kCZWb3NyWGef48cKwifJxwUa5zSoBATQaU2xNbAja1kETeV3hWJ4gioq77",
  "key7": "4vhUk9wRMXPvAMAr23Rnn2LwSk8Nbz7pc8w9KMaCXqHRADeFhyVfTJWYCrHX7jAwSALmTa5aGhgCdxCuBAKzvD4P",
  "key8": "2PxGMKxBNpnRmefoaoohRJ58Jk4MNwZGrq4jfMhqh2Zgyy5KFVyDNv5uiXybaeNZURMoUCzyp4MGHiYNhsYtQnCT",
  "key9": "5H4zFhDGXh1G6b5FuQU8FavbrLMBjbp4GbmxE8mJbTJUNdhCGK1VrgvQmnthdjrfbP1XVZ4WUqbBBhdNfxhs3umH",
  "key10": "4Pwg21j8EfgpFWfRddsayB3m4rnm7VLvNRmfHGG5NVT7jTauyxEoj2ydS7YpN2AunxayjRmyU2uWDcz8Rg3qEWzm",
  "key11": "4rgggywdkhAuWvoNawaKaPotg5ZSN9sgEk8KZNYukirunESokawmS8pQV1nGTBjU7zsV5TsLRDSBTjEJtW6tNFaJ",
  "key12": "3nx3VCCkwgfHpifJPmtHdsJZqwQtbrC9GjP1SyX1SQSvF1AUi17rE7p2NVN29dbeWBVEF9sDNHzE5ubwx7YgzF3R",
  "key13": "3gVVX2g67HXZmy7EuFuneWgTauGodGEJ8M4CbirhajCnG5YKYRWsjYAQagxbhXWzeDAajUhf4GYvmyjpQvXavLnF",
  "key14": "5tKLreQcgGZCw5ybBxqkkFzC7y9yrQrkL8msCb2BxaaSACDHSmyBzzy4N8oLx4NQJcV9Ksih61onfacpJbcGxfd7",
  "key15": "2WoRMiieBWPcoPGjAEdw2niNeR9bEJeqSPCfnvq3wq5ie6d1Mz7zqJKc6KAakQE84k8VRqPPbteZ7AFQjvcJ111r",
  "key16": "4T7XMJkW7iRDSMySuQAfqyeGFvmqm5GN8TFPhSbhfxuF3VzTe9cxdCXfhMg9EY6kzbbCtDJ4vzeusGSwdPrFbbpK",
  "key17": "3uTi766r8nWavmYNAoy1odPRhkaaJxkpjxeNWpjWPceMb7q9SwDmJr6okf2oqgozgWLhx4bzzmKggg2sXGRVemtc",
  "key18": "2wQ8xDqtTh4LenMzfonvNS7PqEFoA5b3NgBiyM6Qp7uN8cCHTGbcLPBw3cZeTjzxzoi1mhn613hDtZF3sSWKTgdn",
  "key19": "3BzpWgJSms6zUCYo5Q8P9XrGZh49waHLHvAEFfe3xo5rxMGcz1ETatvZazroKBsZWPPwsCuLwhb2iWsVdUEWvqH3",
  "key20": "3CrhWejg4yqN1gpojKTLk9JdUAsm5guvg2KKUFVP7594tDsgKthLUnGrzkxubdkvPwY7aKeGKo1rL6TsngVjFRoY",
  "key21": "YzATTnWQ6fJyCQxtnxo7ETsMVcPjeqVX5DgsUuNNvzp7zToyfuFe3Q2S9CMBrPrDJmKSunAZrU8WKgHtUu4ikqL",
  "key22": "4vEXYhfFfP4mrYxMcxdW8Ra9de1zxp8imudtkmRfjnKTHraJhTGBcNKYtafkWCJ7RH3ka6bU3GJCZdWdkt8gLi4C",
  "key23": "2yNz8vVKGeGmRh8WNsrQLDcfJE5wk7jTHvKuHeo38oodfJSw1K4EC9BwdHWXvwUrvQcsy5gTrU9mxTDnyNtUJEgE",
  "key24": "bPT2gYxoEs2UQrxKEM5yz87jqaXXPZTSgfUMyKLcp5WuaPakXBkT2c6rZGSLB7rrpBdFgNdzwrYjGgNuPaf5xSi",
  "key25": "NCy93xfJ2fSFyGqnANRgdT2rHkZbnZnRMMf4NY33gQyCxTJbSCgvDJA6tYsBFHHWcKz9gNP2MZcE9ehGodJfxH6"
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
