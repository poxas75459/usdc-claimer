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
    "41L74nC18dpQC8qCiF446M2UjpSpBQjQ1mFWV17H8gXW8nz4ahWKUnaVPJdsy9grMjLKa6F1N2dNhoLQNmV8ynHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iujH4joxkSCi6xwvZYj9787cBT7UgdAM1Tjmx5jxc9CxfuoMcjUH2Ho844wgShoVPLkhGxpoMShGy2BJqfAjkDh",
  "key1": "Fxvu8uges8uMQ1dTrzEv48TCRHfroYTo9Cf4icVAP3zjp8giaaKFYeSoRMhNJqQanJGUt1JbjMifEdhYGqwjGtt",
  "key2": "4sXrG8XwFVbMXYHcxDhAAPH6ane6NGnycRjtCv4HpGE8MBKYmZfY7mAHHPWrKxKo4XjA6eTdmGZZt2i4sWEQuyd6",
  "key3": "2QumaGypVSko9Rn7fNva4ARviAVnLiASSR82Se4Q2vYisQUdxA9mth7XSemoZSfuWYWCLPm7aofhS3cbM2uSYeyP",
  "key4": "57ofU45fdKeznTW7HaZ3t74GWtXao987LtZM9m47h6XxJtQBeuJnaGank61WTuBsjGvBgLtZJAFJQqAfx4j3TJs9",
  "key5": "51A8XR6YHo8m3fZ7TnPyrU2EmzxggGDinJ5LhgjYR2VE2W5GtQDRammwHoeXScxfZsKQiXskYWkJktDjDmfvCUf",
  "key6": "2LFUNYfBdb2BjTJmsWjRuvp5ZAPseJCaK2MLgowYh3rW2KJsCw1rA5NFP6GKDEK8BwgP7zPYudn5ZyDeuKuDGoMU",
  "key7": "2pT22qWvYuCxW3PfYy3hiEQvfQkAYMbjGBenkqgnyXaGbUjE7MreaBV6kVmCModZpxa5No9yLS3yqmBC4vbuAfWc",
  "key8": "2yEKyYroNoNHXKj4GYKhgGwcaem4Bi2fCY9F4cwYrYT7TpcPxYumS87KPTqThhoLze64EiuFPpq1wvUUysqbydYr",
  "key9": "5uedBWthCiHV3STkaRbtFY7ubyya9BVfzc1rmXzb6CiVe5WUN8Fu5T5P34CzE3YVXKbVF5rybNVJmhYZ3gxT5C2N",
  "key10": "2JwERXAyaTbNNsWsMn8JN6jGvDnNNh8g8ejJ7bEsCLUJz9qSai34RBxbW87WAFqDkPxsxtjjnVCiuUS7rB3Abh6B",
  "key11": "4ck4e4dcqNQ9NEH2nmvJY4gsmPnhKcZyU1WSW33Lcx72YxvQipzNp9t3r67kmaFi7L3BbRUfMFJQ5p7aAejGeVR3",
  "key12": "4AZHmysNLuHNdF7VNhdGWJo5psUVMTmvbXsA1d3oySNSPE5UhsyTxUDMSb6gxDA1vCZ5WXKqiaunWTgSFGMeyEUm",
  "key13": "3kC2ymDsYNChcNpjBeNFfrjefLn52rJUeZU1q6Tcg76yuds7Rm4yAgDanjcie658JVpsJtoasgCc9vLdU7XVvYW4",
  "key14": "3eTYn3zsJTK4ub5Cq1yomrPWf3LAPvxTxewpDJCGkW5GToXvotpfZMs3nQxkKr73gsrNuS7Dwtq488tV7M51oTEP",
  "key15": "4kCU9MUe22szqh2d8EsLvGC55j4PSJ2HqnDSUikWoNH3JRWBW6HHwiNkGg923RFapXKSExMMLBsjSPnMPHv7DBER",
  "key16": "kFjR1HcAi9ve7mPNSNkUmdjQGwJAqyWmkqPL8bTzxVXYJxhheVPdCbzFuPDQpiKwuWSWqNhB4tonU48aedg9tYT",
  "key17": "3F1g4cD8jmrSgL4w2scgiMmyfuMmpTukR5TvVUyew6hHb74b3JquqQhYMREQHGU69vwqTXrYnGqhUEJxF3oMTrHB",
  "key18": "3zXnYdeNFjjw9Shq1boUR4BbtpjEGjKGEusdxfKineXmtZNaWRQpVTpUC9RQq4e6MU9o8FT9WRSUoFoffQi3oMmp",
  "key19": "5hhWScUKMUFwgRheWW918U8nKBjoZDSiwjyNiSmZMtsDVMDJVT7aowPttETA9Y9w7ZV6wn5ktmW5irADo3RUkjnA",
  "key20": "UFAvdujvswYbTK43VZ6nj1RoRspcjwySDDL8Z9jRqaj1ZzzMmhj2Y1zKV5RRTxCW3baTr3Zg389vVpNwAZ8McBk",
  "key21": "GuMNqh5uxcPubDA5rvNDTnky6sgF14uF1c7toBNgBwdkARjESLtpMMbQC8HTe9K9SFkeyCmZkvn9R7bQJ653JVY",
  "key22": "xVKYxBEMPUY9ARZpVo1ZTRTb3UdqC97pmUHoB98CP4AmgBVnV74AsfBwxKTrgA9woejPUx4YczsDXpT4t78iEjr",
  "key23": "GaW6CAVThTcnwBDZEv2dCBchEJwUrFsAyqSfsxYEgbiNE37tE2PUjNZVXtGdoYt2w5VztoTuX8JshCGWGHAXS9M",
  "key24": "4xjQvJ3j84JgayqD5KZjxVNYARoniVpuWoRjBk6ozZo8PGcnG5K8WdizaZXV4LC2nBLdXz5tBshmTUZH82rsgnb3",
  "key25": "3EgBqYU17X1AwfcWcrFcZVmtT9F4H5X1fKPPkV1eUjTYvkTSHTR3Sqrhs2ui9XwgiEoE7RKcbAxzsBMwuymdpfyb",
  "key26": "42YdYo7LeiAfzih2XwfsRYUYXZYp66ir9A59YVDFCksAVUcZqTYATLLV94eay27HjYhnEBMGfuWvQ2hAxUeV8nLc",
  "key27": "625fbonFbbMorLnGYCVN4AKy7gs6VwqbnySogvhc564nji5G6FQoNiwQVBcTNCtJxEyaNyT8XWTfQsF8ovgwrYdA",
  "key28": "5pjSKroYkXfEf3DKKiMG9iRAfrNxBDnKbKivmQA4Y5AzihZkQN5SmVQGwK1zb6TmH2dRtSX9JabhDoYjyzi63Sxe",
  "key29": "5Lsv9dJob6JG7fjfweTmvNFdwJPGB5ySpwDrA1ApuzvFQKpFRK8v5d6bDoYN8TLkFaKbmeV9x2FGjr8h6bDdk59G",
  "key30": "EfZiA8FWK8eDwkATgp7XWGFdgcmeBhzzQ71QCS7AwGfwzVUvYvk5mXEWMAYE831TFH3JvtJdNajruaYin9A6WK2"
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
