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
    "PVd3mJy3SEH18T2YfVQLwGEKj7gE38fZrbWUSgaiwfPh1NiQGyHvxsDpij8n1b8qBRpXM17uwvXzZVB2t7PUP37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YfV4wsgz5Na1c6MHnws7SnaygvxKPeUBddrLwgJLVQhJFG3bxJnxLQpneA5zWBy7g499Ay9yhMcj9HjyRfpS1iv",
  "key1": "4k8rnFgHXgwDPD41oe6UEJ8xy7yaXExCUtj41reRj9UvgMu9jSafQ1YjyoEcgvCzUJDqhrrvctfE2zdFRHLFgq5N",
  "key2": "5VFL7QZzg5j7PjL8U46xbaoHDZ4eDf9rLHy843numQHT9so1acvb18vN3jY6DudzwrgiVCZ79pnps4WcbevEBjQT",
  "key3": "SXMRyZbyh2sJmTJEejkq2Xb94HPhcsN5wuBsq9ickbMvFA9hVjYBeQkUUvgfu6XchCpdqV1X6Wtzb3TTN3biUP2",
  "key4": "2jxwQHge2z9KwKBcZH4WMVSxJ6xUfXWkkKkzzV9dF4isFyjdXCaq6tbuYKZKwXD3fYZ5GcbaSj4EfQyrNmKAGyew",
  "key5": "2fNG2JacAmwtnA5SxTtDjrjvY3F1HP97nAyi84uTR5X9qVqefJhtxDoBT1sw6Va5i5v8TCB5gQRpToxj3pWfhFHD",
  "key6": "j4ub25KXBpSukNts3PnqPdRgA35ctjcNYfiPMnU4kKNrcTaz7rJ4Zw5mtS1c7LEpJWY7XVnxcamTeUm6nGQaGNA",
  "key7": "2dcBEbCycDxqGMwStJmGoakrnYfnqAs7YctWwKPhLiLMiMDuvszgFkqc5oEXsCSN8ZiDDrzBFTXFg4Y54hxpPdyn",
  "key8": "2bFj3otQfAis6MYkCcv2FWWLswNQN79Rhf7R46AuLHuAvmxvR4vc7ruy6r4fiKc95E2wU4uExWGqq1GK2a8tyANA",
  "key9": "5FF4ARfFnr3hkhdiu9HN3w5ocz5NsgKMBNPmpDSnLJcRUfb9yMzmeWqR2MokBMiCZhqgXAWusaBBHp3TBXSF1KS2",
  "key10": "2JWiSvj5gb1ktfRZxD6Z3W2vXPrKrZpnzKTH8Fe6Tp8U4vLaXJW7T3BhW4nupsFY6nKMPaoksGP7rVgRTxRrdTeU",
  "key11": "4R9jLoiedt6zZyEGhwcgpEcXvuBdPWr8dgbZcJD6UrfAJLsGrWwrzsDWzcR8cRZWHq6Q6crMrxX9X8mGqU1ySse3",
  "key12": "phAz5sZyTf7jLpmdu3jEyJt8hqQe2ueunsfUdShWkgSw8iDQu3PrAnZoa9kPfcTdyGVynhWZYLSaVxze1DW13aA",
  "key13": "3ZBPFRM5o78H4Tj2pmHwa8w75GNT86sBkLAnyZtmTy8vTVBhgEoQMpsWd1KwUXKcQxXM7duGmAucwsoBeaKJ317v",
  "key14": "31F82DUMYtJEnY76EGQbGFo6XnHFSK3Ad1XyEzyf6QF1PiPBtSGjWDVMffAe3LsoW8hBZU4Df4HaVjEVMvs6tzuu",
  "key15": "2WLKNKRV51nTMKcmm5w2i4qyHbxWi6JLJvWwjHM5zs3aK5CuMSWuQ68Y1EXUMUBScaHhwice4Ym7ZbjTp663go8t",
  "key16": "rozP2DT1EkiXLisbjP83P2z3cqdgEbDdN8FdKWV9VxDyqbpgMhtVQLXFKZ5AAaMpUfDRSXCiPhPKoiURYrupY1u",
  "key17": "4hjQMYy9dRiA5XoH2un5bSSy9pfYFJYEhJhKgYn6kNCWZw1gJ4cu2j2s2AvvXwbdZXhzVUGjwCeTFKLLVwkdQ5Xc",
  "key18": "3eKYrvkPr1eDbuMnzUMKy8ozqZTuxAuNPjZb7R3CrbkDFVPbVFh9K47qMVtjp4YUiS16KcGGkyiybLfRMYvocCCP",
  "key19": "3eFcjmEc4h6FBHb8p5UyemLjBe3K5vQUZLSiJu6J1edBYkZxrmaWgmCHg7cJHwsP8XvwLQvKMZtoWWBymcGt4gcZ",
  "key20": "4r9HLNjfjDDWGBvPpFnJhe8kd46HqVDKLAQFeMgkWKP6uwe6a6b6zaqfMBseD5FascPhWeWyH68DcsRsPXR6CBax",
  "key21": "21aPdv2MGpu9pUp6XYH77wP5c5cr2Tr6dgS85DUR3XcAn54UdcPwyToF9hpLGzw7UrAArLcLA6zUpQjonSMdmF1p",
  "key22": "2sfnSdZd8GeduXfipPwq8iaHoksnrguFiH2NtFNPD6Pd1v4UF4A6XzGhYpdh93AntWzxNw8jj6aRNyy5me7fiQ2G",
  "key23": "64gXubCHcATsMobKcHc2pg4iJ9ZoJ7jzDAUaHpmCz2HwUybFVP4sejfc7qQZvMJRi2zcnn6G5e7MAGDvLadjg9hL",
  "key24": "5J3j9RpW62gg1hP3Yzjpy18fPFXr4NuofmQ4gNEehLvppuVdyqyBE7oQptYSpBf4TLBwJXut1dcWbjj7NYJNy3Bm",
  "key25": "2nakM58MhrgtE5eQQRSVB3gfGX8XNRBNHUFkFPu9RAZPN6CVnqa5HXnyyCYEzqGt2LrQpnL37dpSXHuXeN9FT1tB",
  "key26": "5f3aCYz9UQGCzE44YDJMBaqEsbkpoAZZjewLtcEEMWCDZhXXGhSd9BeuiJDW2o8fsrTrAeM6bGMfdcsQdZs9Arpv",
  "key27": "4QBgGGaxh9D3Nr8vNsN8K2bkKCkiGtV8qyYSv5BD93UXCzgzctkwhr7onHtE9FBLFpup4mjvSDpym8nm9rBC4wT7",
  "key28": "5sNBZqBjoyV6oRuUsjKRCPtnFHCLXmpnWUX4ifapbTwL4bkor2G3p146UqJJEvpuxChv453uPcnDyCWFRK4BE3wz",
  "key29": "cxLU9r6jiwSTM1FbcJRY2yv6eTsUhh58TFw5QxtstGZcQNfDCh1Rw9iatY4Q6dNCZ2JqewLP9nyoKs6pBq44ALX",
  "key30": "2T7abCfwA1YFSbegTgGZf3AYjjJjdGa7PF5wzUpP1aq5Ua2St2ejaWbs25P5JpmMpZtGq87wkY5RtfiJb7R6jFwm",
  "key31": "Wf6MupGSgYpdqPcr3ShEeUcEckkQDcnriaj62bSoCQdvw6HgdsxxP4koxYSFmn3krL3QoedUax9g8nhU5sQgg4p",
  "key32": "5PVg8epGPHrJV9WuUNYo8qoQRSWZHZwfpWNkjLZVevqAaTpi94kZgLJY5tZLR9jxTy8V7S9oR1jQg4KVeeBeW5C6"
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
