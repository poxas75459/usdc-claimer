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
    "33ajFCpFrmwPA4Xas8QMhYChSoF3cnKsKUtBdRgZsSBmAi62q7AdJaJ8iS4d7M1XTkCcJBraBN5LMGp9zggCEdZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pHUwiLR65AdbDPj2JyrEeVwRuvrgC49gHnLML5DoVh3HrqbMMLeTYZ9mYDVCCv5S4VWGbQXgUgdLqdmWKLVF8VV",
  "key1": "2Tb8p8u4GhFaqVRyWUc41exphA6Fv5dBEb22UzGfQS1SoLGyudn5vvi2vVf2nEA9eXdwXgqGuV7CHfmcKK3WxJMV",
  "key2": "Go26CMf3e2sBAtFcZtR1o7dxZzkXZUMWDhgpbWKALRCXC1JQtunB9chAjh68KqFAeKFdnk4rM8wqaZHAjN3keLL",
  "key3": "3dxwE7LxW4unzyD7TmgkXyQqbKGv2uD7Je8uZpYzz39mqke7ESuQNubPYopiih5ZARJBidaP4WLgz4tja4f38CE1",
  "key4": "4T997ssG9iraP6y2HKZceGqimPVMHVEGxUgmuree7azZQWhRsphxLF8KfZjURSW5PeyxBBoH2aB2DKU5kVPnHG88",
  "key5": "54L3wsgnoBfSDLibFXVk3Wz1eQbExx9y7EQz7CPbLWMQsK3AVsRcEn4z1aqoyeBpGifcFtwW6995vH8KSZAFUekn",
  "key6": "4NZ1fuEZWKZjPUKf4iNw6mxPW6mZ6L2GaSnAtDnxMB8TjGyoMnBuNLQ9PNubtUPnWMrsJhnwBFqLsYCMX9xUBmUj",
  "key7": "baRxASEd7fogyKhcKCQXtLkKxNSVoipMRWKygBp3ETJxqjhaeJzqfdydM3JWX5zPexNTJtKC4k6sw5tevMHRQfM",
  "key8": "5kWZ4u24HFwC8CG8EzUMpZnATZUYBdwLPvnvLtBx6VRdoRVxYDgDVY7sbnm7qovwwQKdGaFLb3m7pmp4rMQHQghC",
  "key9": "2nZEcRxvfHfGgiEEqzRj9qaoJDF8CoLureWtmoc2XEnRi7PSLdcexBDeq3YmMkXVgCfiKv9vM6WLwzDDeVWT3N4a",
  "key10": "4WqoW2KVxQxvLiXxJc5iudWQd7kiWS2uPvg1SggnWm9XgjMN4EPGxGzoBeuqrUohkPe57U9oY1vwbcmjJcBi574e",
  "key11": "5DhbnFadADuQB7wCCEoK6nxY4UUMSKFXL6HrdYs5KQAxf3Am9DZTEWEccx9PGUyWYU5ZUnwxBT7rkwsGdyaRgYv3",
  "key12": "2V3Kj4YWBbiu1Td8tBtyTX61wvkkyj6mxLVB9EraHFKA3aam57LQVDV3B7cLSL1D8UUMDZwjYZcP6km5dyztTD32",
  "key13": "56mXsrc9arahKbYUtfXKQcAP13J6pBRU5mijQNUatQxSkT6YDnXPbq3HCCBrJXvZHKKhJgcLgcMvMzSK2J4UBbZn",
  "key14": "4iEMFrktunwZt8AG95znY7w9q5nNsfrGzYLzD2DoQXuSmbSDEdUnGLKXu24MkUabFz6mqfYRr2baRLMRkzVkwyWo",
  "key15": "38hkY3BwCtESmMW6z2KnqCHJviNt3hzHVvEpQrqGZQQWfN6hrsxRNwid2k5M5FXhpRF4yL5S9Qc84x3BkrWEcGHq",
  "key16": "2bVPZz53WJZTZH1mPtwZeApajKuXgKmUD9e5tcQB42mNSqp7rJMbckWU1jWZC4PWv2mR3NrAw7WHfZe6HGwtrE3d",
  "key17": "Znd2Sv9DSSB42KDCaLfuFKLu7Ku29kyQBvpaHfKZx7CuB9KkswiXBsi2mKHFb1xwaifDPVBU5wpMhXWLMbSAzmr",
  "key18": "4smd2fzPC82wEGeFgz2AHZPoa2euMtBoEWAqJhTzXxwUziqv6iGF2yJtpiGJrotFjZ8WBcqfseohTPhmoQ4dChd2",
  "key19": "48NxZyVwAQcoXWpB3aNAuZq6FBPzXoVK8NL7uYMSBqjS7PM3mttXPX1WTaEpFBrLGipmJc2spQv31T1yt3eM5LQL",
  "key20": "5CNomsEVLSevoemYHChfDZg4obrScsFmmEceZ2VMkYYESEyTRcwtwEm6ANyamiGJom6K3A4vGFMyWsz2Qu55eAtR",
  "key21": "5cEnSRv8FzudThiAhn4DEJR2HkArTvb9So33WPyz6QbQjwrrVFcgVEuNAuC3AWyeqpZreZaRQmfzxrKes9BaZpfy",
  "key22": "3K8fVwSGu87162RM4xcvcCcSfceb9naMxxcJKtfSLdg651BaC3qUicEnxpdvqjcbKCrLZb6m3Znokz7bjjPY7Kh9",
  "key23": "gvuN5tr9iwLZL3yP3e4etcDfvnpA5LBR8knfPfNpgkLPaNkh6ePTPYR2hDdvhWrhnEJDsmQwe2UwTXgK6VMxSrR",
  "key24": "2FhRqSja2DJfisvaRKSfxuptF3zNsC33a872fYyELYvE5BPysMXsmbdkP68Y2jLiwLWtj2m6VgtiWqChCxYRdk7M",
  "key25": "A3ruBHf3hRMHc8By3NMQw6UioWTk2tHJWidgqu3tXLT9pgixJozXsDbiDzu1q1gLVfdXSaRewUPrWs4xTRmPqKe"
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
