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
    "5SnULEoQAWhrZTi5YK4WvMnweF9cMCPDck3S3KgcmVTsNBnnpCN1HNAZwxhN4No9ViZky5npzm5dJqSDDKYz85Bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fkp6inq5UfLmFj1jPqykkNYMNr2oZWPGc9zKx2kyY7m4bYhwWMAnw5RY2DwxGWbBx8mx82R8MCc8wrrSnqekNrh",
  "key1": "5ifr8DVwR7QTD8pftwvBjvN7d2BcYQyH2srC6pYS6ZgJmKToQ54hQp8Y87bdZ9XkrFXMg1FcRMzmTxyeM7ERj8kY",
  "key2": "2yfKdQUV5wW66aPsKKmUKPRaQsYXKoE7RToexe4D5XJNrtfoKu1gkZd63abaYhcrmWa1itipZeDjAQYUzB6pexzc",
  "key3": "3nFfbCcnMjWTkVtjJEZNwssZwitxdAyVtXZUDWTC2hoXiBJ5vdfb3KHKCBTFpJ1Hi2BaFDSbsM8gHnvb8gX2aKVq",
  "key4": "5SeA6BDHCtw7TY9BSeRRkbyALTxq4f1xjkerK73GZc8VgWWDxYkt3UUuTiL28v5PVHgLkTKTrHXKUEbjre8atRf6",
  "key5": "63KcNJE5vVWnTWmDyNWR5BJkhZuXLkBjLig6Bx6Dpg6Br5LpKEiSVYkAEiNTaR6g9qPcytp5dZvMveeqAeK6oAEr",
  "key6": "3CQEpYLcWZHsBCVUtC4HXh4zepvVRg49U2y6SJNGLUbGKXfWcUcZz5p3UShxzS7rbwioww5jjTfypk465gv4egkE",
  "key7": "VB9EWBys7XStqmaKXVvZY6A282GKaraRpdB3DvfNDyDxVqGZqVo7uhjgAJEuVDhMM43AKosgkBDryT71sN8vXZo",
  "key8": "cTg2wwx1bMqGv2fJc5mytgwEfMCxiBTKv7Y65pxEcBSP14Mu8q4TR8Ffv2ukoqFV4KAHCPPAqShsB9jHXr7aHdG",
  "key9": "4M2T1M4Sc93oAYyjGGB1Qf7xnAKAMK46js1dMuiHf2JyrAwyuzukhAW9bAoovi2SBDLEtp3VW8rrxpDCNFJPL4EK",
  "key10": "58fg27CkoLJgBzkiZ2sX5WkGMvwJT3uJRQSdHKqrTb8Ky5cbn7Ejr7tkxAhrHN8F8nFQTsE9Xc8H9a1HsSbrm9nt",
  "key11": "ed7ZaYEErCR74aAVUvfC3puUwUgRF5soECmtWit4YJA9piDdMpBocKMM2kc293YQqmdZvTuvof7GQV5KpuV7LRr",
  "key12": "5ryadn53duZz49ET1ADDb4dxMvELxrAsvkjw2FocHCD4pyT9TNMoAmkyEbGdUg8ZS997mqAjRVB3Dh51ziJ6BGax",
  "key13": "26wD5kRvzG9u3cq88c9H7dRex9G4yRkVqKDrG3WVQsgcMTa28TPy5mhyXsWCbsr6whE41DTteUyW5dsQd9ssjnk1",
  "key14": "3d2qD35aBG6mZuHT98quBACnW3vVQMmdxXAW3rhMAYYTtywDheAWRuXuzomuKdmKN9kMPdcvFUFFf9Yrfy4gkj9U",
  "key15": "2Lfd4DNKipmFhu6PJ8vCmSFTx4SNwzXCieXEAFesUCQCGEdKCzFaywuTYMhKMeg9tnSbME9S9uwF1A3JWaxLwCqq",
  "key16": "4KaJLtkfCS3626rhyJZcZr4dh1U92FJDNT2doXbzm2brTV46efr4U7EkUYvyZwVtuoUe8XjCwRAoYpqDqP4RfQNx",
  "key17": "3xUo7YwqEZZzTk1hD7AcaH3TfNLAudsest7ueEtjyv8Lv5u1CAxKXGNBruRTazLved1GrzdNfd7gYLnMcRbXdtoX",
  "key18": "WWonQD3cpbdHLcWj7YnzGdMfo84bHmj7uWn6NvHLiTfjpy4y8nkgKKBaT6kxrx7XSx4SGnxhZgQcy3Jzk8QF7Er",
  "key19": "3m5ybjQNJVT7Crte5VkURtUNxmHMhZv3ALFaUsTFhMj2u3rvXGojYj59Q55jPvq5Gcu3e9GBiWcYT38RSM6zJgKu",
  "key20": "RDJYcbKpJNqb2vmG5WBtGcsTeZcFemW3HQBHFs7X6C4X7iZsEo26Uob6gCNGffmoEsMoWu6tyNzrpCnYsx5PrRA",
  "key21": "5XXi8SECQjvPXYAETXShgS7ZAV8sjTZyDtnn2VPwFBTWn5phYjmkSzbS2TraZBjX6mER2r7k836MvEahPuRYvnmB",
  "key22": "5UYu5p7S9sR4WM2DqGNJGWivCMkncbq19iwzazxHyRbcYqGPtpkvuFUHcgiQBRkhRg683Fi5ZHiQXeMQHz4tkwW5",
  "key23": "573YNxjQqjpFrQ9mtnnMPmbnSFG7harGcYM7BSKkcywBxfG44Qs3v9939QjyZrspTV7ZUWf7zBixXGV9XJwkcRhp",
  "key24": "418eCWUQuKhnzr19dy7BzzCsLbqe3NfUJqHcUqKiFAGQpDYR5zChna3jTtvy79f2WxgNDxzFkaTH8Crs1gtYRY1y",
  "key25": "67gSmQ5Dt19SngYxFo1buupKTnaEEkgdnJPjyQgF7eTEsobEEcX4X2QpR3Cyzomk6irVw919aaccrcKiewAogK7U",
  "key26": "4uH4WFgn6exfZZqNTbpMparR9vs3122bK8PkLQv9gtU43xt89RsPiP3SfbABKBjnQuXUeAfgVv51TSzFa95yWnYe",
  "key27": "3Vm8qgk2ggYjziL8ZDUX4HfsPA2KJearSU8oUqvSGsks3VyetLpPJ1hBZ1SGB1fM25Ez4puHmLcy2CAveaaMLPcv",
  "key28": "2Fo3rBNR24fm6sVAJdnLvYFkj5NvWC3PsmqjEzdMvwqrr9YgfeC8bnLUGLoNG7h8wk8vSR5LPzrxFE5AQeyG6B6w",
  "key29": "44cswMEEDQ2Tgj4JcivwuspFGWV9om4iMGuWx5AwXCVbzkfqxfhC8kcTs1boqNExy6RQJDAp7DMWKpDMBNmobjMU",
  "key30": "i5C93q4oRGTUSzDWnvJFmpLYw8STFrYV4VzReghRXfGv9TLeKmZGqUN5QERd2QrXb8h3NQf7ARri4giQXGQNjYS",
  "key31": "2sebPzGEXeUhzQZ5ze7hED3dMhvbD3uPSySR8AkTuDzv8cf5XkNQeLvPvSr7KYNYkLCnXvj2UYHKmzxS1WfYk3An",
  "key32": "5arTguV3Xwm6GA4GsedwBopjx4GHAvjSHrfPwAFJXTHnUajiCTsWuKaRQEr6EKCWSLiZvGmYyTz3exTR2huE8LsH",
  "key33": "65mZsFKo3UDLtyMqz1gGgLakLsegJWMQp9a68LUNAhfV8Hu6rgNLprJGTTuG2DV2k4qfjNLKtX7w1mm7fL2FXa9Y",
  "key34": "3PUFMu12ScQTuMAvVFeN2RQ2Biu8XuBaJaj8WKUi3TvTC9nqartrvpVZ64HUmMkj6GaPCjrQcwA9dJUF6mC8rsZw"
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
