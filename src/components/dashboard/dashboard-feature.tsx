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
    "5W3C3NpK6DHtbHGEDdvzrArW2dsLo7PHxDY1s3zJwzm7V8QcyyGXP64vvet3iT1ThdT793aUrzSPaywg9zxoVeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EFnLq2GqAsiWA1BmSQD3v1ksNwhpx9qyBVj8eVxVPTRLsFNxyRHYkkC9fRsRag5w913FsVH1gQW1Kc9Kjp11Heh",
  "key1": "5QN8nz226quiphPKTHPrXrQ5JRm2PR6RfuPu1iuRogb6TrbxfpcTmjW5udjay4FZ2ze7Qr7Awpj1JhkJzJFSRwhk",
  "key2": "4RhSvBrnvTzHkF75tEsbUzcB1Yv2YN57erg9xaCBZfJ2HNucAPmk2vx44UAxkmENXoHTWrKtwH6u3Bzh7VmBw4KS",
  "key3": "2wPN4Q1eAXFystY6zLGYqXHRymREwr4mwJE6XVYiVdKcpQWYZMEQQYWCknVkmQstCf8Z1KRDmPWe8kzji33kJkQ5",
  "key4": "5VSBh5LUnAnAZEkM45ykfHJKHEedLU32DpJWBg3aoEaC4fMN2PP8sLDaPw5yaLEuB2D9wPbKxxmdeCvj1fzejAyM",
  "key5": "4Uw1kUZxPoZhCWdeE5vmABMjfp4q9vnivpaerc7M1zdEh7SzCEM9VsBT8nEJ9CuV5KW2qZjnANYHDod7bR8yoRtA",
  "key6": "289jTxTQ2dCJ2nQLPpNCLDn4PA4iG8AiAXUpwaTjtSUKndYXJdgiQPHgdfSXBazvaBKSEgFCmi65TsCqNU2Q9vgj",
  "key7": "21YvvdKX3VgE2Q6qhwfZ4kmwRkKic5YCBapCM1hQw6YoR7V8WW8DuEjnLw9ttQSsvt3vHFCuM9nFqqBMJAdqJ8R9",
  "key8": "4mBvJMnp8AwrkgnDxBsY7bq24emFckzuoDLNJAxXw4UYFnpujHtFx7N7Xz2DjJa7Wnqizx97ZkvhVRDppa5MKUkT",
  "key9": "4FDDf9Hwk2cGpntBgG5JyDP4W7K16o5UGzXsTMxHV835Te3LRTHHW5Ajv8dLNFk4dEnU3zWy1bf25ZjeYdjWPgSD",
  "key10": "67dxuCh73Q3GZfbbohfuaQ8kFrf2t2nHjCHuoorNqxB5Wrq7YwkZZWsQVX3Dc9STzdAJwEpAycL6cM5NLaKD5aHz",
  "key11": "2ThewpxyH9TfB6AsDD1jv7mfqah1DrV7vsLRCyUX4NbbJC2YktXTRNAtdhLavdPLbNrsGZJpx3bA6P1rsgEEcrsN",
  "key12": "TjvEG4pXUontos3ybGa5hncg4wURaws4LHUVAEgWqUVjhSrymWFNDjF43fq5jk2nmqF3JMzHnw3oGjA8DcQScrS",
  "key13": "m1hDGgHLZwkHkYUBAwBvBLGMWD7Ge9epr47kZDqHDQx7R4mLdTCbKS2fniMRShCfJbvX7apGwEw1yxuERePQFss",
  "key14": "RyqsiGn1WeF1teSfYJboPacfHMhaVAsHnAVEUoLJBdaLsE2mojrP1pFQqGUntQrqDWjd3sa4KWVtRsboEmPg4oS",
  "key15": "4acCErc7AwxJd5oEbYdkAM1ae8XZMpgDJj7tQw1iG6dccrQa29A3cgNjCq2s4JTXUDyJt5NA193sEYAcwBGWp72k",
  "key16": "5WBmsms6ffZFKC33g3QkRGWin2PZjgbKdzngsDWVVTwVf5yBBL9wAnu5oJSehvW2pjdekJd26QVf7KMXAT2UbvdQ",
  "key17": "4QiQDM4DmS59nEaTKN2Ba5qAJkzd6TeJrXk2m8MKw8UWFFXm6qYp2y1KvJSyLNBFVBjjcVSwjShzYfi7XJvPGQoB",
  "key18": "46afD2qRQgtAXNa9MuWJih7fF9chKDL54fny9WX2Hc1JUSPnpyXPMYyeqp8CH8UPYdCtg7cp1UzoQArYorjHd7Vr",
  "key19": "CKHq1X4LAz5GScvWALvkB7rwyj9yrxGUi5LTiTBPSzNFKozjX4TRLeDN6TFMCNqxE4o9BMB3WHTUGrcuiTJhwMS",
  "key20": "3F2gZa8LUWwxnQzoAsDSDJVGXG1A9ABW384SCqdX9tqKvkh6HVFPoikhHqgcZo119bCuzKqcc7A49FhqmJegptig",
  "key21": "3LuHVucsMthMGYFCxUJotJSyL4XX3FUn67r8NBzYfW4XjkUidMtwzDrTHEJZMnAKEHnYA1Z2VmfMZQ5aQy57sJGL",
  "key22": "2NA9PijuKoYmnfADXp5k4qnTfHyEBcwJqajEDHfNY8PgB3RCGjnJdkMtXTpJuRXDE3GgtRRLtnDJxi7EGwVtGJWS",
  "key23": "2Cy389U3djLBgeavXrfYirnhYyK72om1LswdcpBm3XwejDS1fjsaaDx2nR8vki6DQcYXf28CvPKDoTQAraGg6jVh",
  "key24": "do91EApiRrW6fHbCcR5kHHrvVZ3MnvKWP1DRqgEKyH3KfGXG5ExxA7JuXZJyKP5Whxx22YXQxn7SEPNXaL6DYeM",
  "key25": "MwjgQ4fECCMXeUFagfHEvhJdpjVWdYHz6XQDGc6SiwJQM5RPAfHQk24qiZYzctb89PBHF1EFaB31xGnuBAr23Lx",
  "key26": "3s43LXrNGKx7YwoiwXZJUtT3EtexBRCMZx7fWF2BWxQApY5bSo5QHnNTtbyKUveKoehFsJKJw8dZkRdxU62uaiZP",
  "key27": "2KmgmENamdC12s8LiKnKXRQfCe9EXKe9iUBLb15RWKnpBLfF45dDuNhUMZ9Dd4ijajCkP13e1sifyEgB9UKygdzZ",
  "key28": "4hHqND3mbN2BnLgfufcRE4mdakx5w1vnx2FkFKi8TqHAe24HSPw7EKs8NaQkXcSukcYsmDDB2NSUDNAAq6X8wPpC"
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
