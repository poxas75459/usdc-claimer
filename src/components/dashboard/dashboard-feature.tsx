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
    "qRgq6Vte7eZ4X7Xa3DXa18z5wY2EWGRoyyQGXdq8dsdneezFUjDAAdck4KQbX37Q1BUa8CjTngzsC46HPTXcTpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z9sUvcUYqbc2bHwfrC8AZFzmxRiW7txmnCA4vbRa6qkmrNo5WXtDAP93tarbF1vkgwmqCJhCyGRJDG1aSgk6gCa",
  "key1": "3dV8k51vp5cciCGhEegaELLb454N9MV4BPAVTMRpTWBLsHRuLu4GH5qYZdPsF7fxpJP72nYXtZyHv3LxS8agDHuz",
  "key2": "HHcagprn6xBk8jkNgcGwhKscetxPumWZn8SbyNceNoAj3TUN87CmP7NwNBbnke6FVW3u9SCVWRhWdSpxdeccYXQ",
  "key3": "21Qbv5CMuiMayUvQ9bcSNQSFVQdbifUX5ZTPE6VnzbfGnDjT7crN4otQ8z8SGRPyVyy2o6vVxVWHK1QhVxaivXh1",
  "key4": "3QjrEDu5sBVkw7NYaMXteVtwqSWcpEpxHZtjKG7D6pzB9Wh1gsik6PBhFbnQdgj1VGFxuiAL1WwN5AveJRjVSkHo",
  "key5": "3xnufSEEhwmmUA38q6NojaxRdyfRyS63qMQLxTbpeo6dbDHZS811DzmzhuEnHiPte6XpzLWnpSc9WJM2mQ6d2LkL",
  "key6": "2UWfp1n8ZbCUgUAyM6PWCFG2jKFTZvK12Z5vSTaPs5aDXWMKEfcyyUTdNrN1Yod7YWTtkj2hDxmTjVHkipVvXg9a",
  "key7": "PoipEaXrDaK3gNa1DTShNG153fW6VtBhfqwsaVKkVtPMLP5swixdtgDZYS92CMsZdYNLyFNATiBtpazntgkcwWf",
  "key8": "3p7hw63H9BbMeNubxuXQaC37ehsgC1Eh3NdFfqy5XcxY99EXWb9U3C6EVG37wStjG1mh6tFF2oasdteqi9y6bsAv",
  "key9": "4ydK7Dch4CndBGXfJwpDLMuo8nLEc7YJcuSe1R2H1yRXym5hCSr6yA6JqdptZChekiXmSmu3ZWcMgEw4zqQS75qi",
  "key10": "51YvcykBEcSyd8nhpoGYU5jEYiubX71dMkFgefZKUaPb7UkoDwvFBLFWwESMDj4GM746a3rJ9jaFnNUyX8LRB4qL",
  "key11": "5oWE8ZYAsZEgYyb7mtfUMqpopjEtzECMh5VAoDT3JAnpPZp2tajV4FhYA4TyV4pzw7E4VfNQPcXg1757VX7HR6NA",
  "key12": "5sg6Qp4KUV4KzD86VF8odVjzbPpHCGNczfjYGHoNZDFVLPRf61yyhtb5dFxWPLeKQcQzvcmootYYxvFpHoERE4GE",
  "key13": "5Yn1pDS3WoxAXyKCeaHj596mFEYBc5qhvmNqf2P6uuEDcfjTiG4bq8cMdvyoJjXT7NpSPXv9FQTxn12942FGcbuR",
  "key14": "WBVNwi4UPSNqVgRw4Bhf3uBVXLPGMvgo7837WhkqbY1XYFF9UZeKWPwj4ja2kb5N2gdBjqruUN29rHAbgVzaki5",
  "key15": "5FaifdjQFpeLRKNmZbqaa4E8PJd4KLqpEAegszjKhbE9AC9ktkCYeDHFTyeixwVSit2hpz8J3qj7RreDBzJo3tUK",
  "key16": "41idn8KJdhQXb8Dran9HJ5VfvKut9mNXr7ZG5zcVe7XVUJjqNNXmyX6ZAgxjCWKGF3bfqpevVrqkxwCiLekMMYvP",
  "key17": "3mw9qyFsJ9EVFMS6AG64t1BjPhoj1LY6DJ6NyGb1yMcHoLAA6bSco6AComSRJ2c3Aqpg4G1FQhekRxSKVVWV63Sv",
  "key18": "2JTaDxVsbMQSPyxz3MswMaGGP8T3cb3hmswvLnrB2XLireoBswGpjcYYuGwMej5q43BRLmaLBNfvyoDygbfng7hw",
  "key19": "nq6Awj6SnA996GYK1tMifHvgweBRSV8q4joV74iMekSbJtoUvpdACMjuHY4GfoyN6GHGG6LfC19xfN8Lb22ypbf",
  "key20": "4ofm82QUhEcX2jHcjmGQZh9rBn6xpzyKVVZWiZiAF78awHKh8Z1X8DwGdTi9f7ZtRZt1ERMfAPqCoRDJL6M59qEG",
  "key21": "m9bwj3aW3bwB8XTBKMcKtysDBZBhAvidkMWYMK2ovVG1ifgzNQcQLwS6FnocS1WZUc6EsnWWBB2V6HEwiyAd11D",
  "key22": "2SW6WdT4phCoCDoavfmdQzp2JwjQWDWdPR9afJUorwcaVpKGLpMRvcdh1sDsAU5NfJD6SQxxMSJ1KUCYE2v57zcJ",
  "key23": "2JmQPriophTYw1megv3F3cGwiWJCLrQkj57nrEqpYV5Jdwf9aYKy3uS6QYMfG7eQ88LcqJisV7fAk4sDZDdYswWq",
  "key24": "ycKzRpgx9YYBdWmQg4c1xxidr3EKF64a18iut75otjbcrhtHJ31cwiYTqnU1XiuBaoDssYUnK4KQqJvpB867SEY",
  "key25": "2e7Mk6uWSEWn52izoC1r7R2YzitczYBzZDscQ343PGHcqhatMYLWCrVtBsCXjfWciEcwZ6YpRcbegnSNXqKFU3kg",
  "key26": "xPpvrVoYjRan4WyfCPM86MPKJxujdzLC8WJ3X4atDTkfhpUV3LSxnBJRPkNKmMNSx7PLpGt2aAZQ8LueAcrftDa",
  "key27": "LyWx7xd6jGa27y8vRtBR44YW3N1UMwajV5LFQsd4VppPqLorvgpyvsCxHQ2xZMNyKKRzX26tMqo1V47wVfMNeU6",
  "key28": "3pN8ZveYotPbTBMqmpfZ51JYLyss9yJV2w5716xvpEUJbD94j5RNfqiQNMUmUEXr4s2kwGCT8Ga9xMyWDBzzAjdB"
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
