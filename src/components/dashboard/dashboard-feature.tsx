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
    "5i6w953B1zn2pBaGQfgQPr3voEBjjx4gVPttd2WBSANNfTAmN2oFit7gmw8Egq5oc8a7ZbuwYhCmt26BvJnnY8ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dwVaVT7rgMfwSauxv2okVaKiBK2taDr2jwGkJt92NytS4ygo9oBPEVVMHuSPDzhZj95zZXzaMh3W5q5Q8xzVx4y",
  "key1": "5WZdgKy92pkPpSDHdWzbCyA1DbaJxdCkQfPG1Mz1WKneASvCVzJUmwj6JdidD5cKJWA9RgdxhmfPri4tCu3jGy9E",
  "key2": "5TVc1cwXcHaYG5DRqzmw9EgMqdwskgFFaxjzfUKZf6JFZPBp3zVgZ8gQdRGjva8RE4FvWWjro29zFFuTVaZSD9do",
  "key3": "cZozmTghbr687ozRi8U8Lk4q2rbF6CV9LuLzDjtXqyo1NtXNERYJEDTLp7zaS48LmR4rB5oQWdSMV6rfKMvAi4y",
  "key4": "nARw3Zh5RKnasJEBrcQGrdkM17yf8gbzpJw9RwJhsbVrF4jRqYV2hPdmDopYvpFHzRcfkV8VqGPDgYtYk6Dgf8r",
  "key5": "58CwZ4TNvJf9uATeGWPLtsGhwW9YToqhBh7UQc7JFdhzJwhGQ8bQ9q6AhDU6bZ8teQrAcwoMG7e9JLW8FhmgeAkb",
  "key6": "5rcdttkLkCmRJykVaxUm7j26Tkf4129AEp7cPvDLdYTCb3v5GfuCfoxJRaKz6SQvnCVsHmzobojdNVoK7atSkLkz",
  "key7": "2uNWSEkH4WmQ6WETyBoYMX3QXx8gBDWDTau6iAUjd94KsRasBUsdzy3hfFEwsD1z7WMFkAUdDZy9HYnQNvnE7aqw",
  "key8": "bTCCerNDRgapoopXvopK2uanRTU47VmZu4Wb9h1fRo2dg35CnTEvZ7uxDF3LwywZnd7fRRTuQAUv9L2JLs8uLWJ",
  "key9": "59AMqtNgG6fPhwBvwr67XjSSgY7YVr9oArb7WRrW3w2pjhvw8RJbkH9nfaZfs72p2kij5MTVo4q9npbFBbMarFBY",
  "key10": "4eKqwc3vs46mBB8GWNt4tNJLvMwDLfQczECjdefTdNP2GJuqRuyuDfTvnZrMspEBbAvbgGGYZHXQcVwRxKH1ghmi",
  "key11": "4s9hZVA2ChVQ3ig1tHsS2ALb8bZeeLt2AnhfLoStvuSspoJCet28aSjCE9CGG1Q3agFZUhwumTRBSVufiJsLFNC4",
  "key12": "PsXpFVJTBE8YYSHJUdct2V3JyyKVev5vHmHToAUEDyWAR3tV4SJzpRZmagoW2GPxFjvdbfz7RUksejU5SUL2xWZ",
  "key13": "3szC6o3ZbKN2k4hj9XWamUHHM783xegUCm5jsMfdeF9T3eiEN7ikqHjMQCV7wxnhvHAeHSBeBEkoaZN2c99R7vom",
  "key14": "5sASTQmpKh2bJHEsdXcRMqvd3xKtFfu3xdBWcKf8MN1R4yEvNWoQ1yzooEBFkPVBfPUh4xAv4fUqXySFoCojdYD",
  "key15": "3nf7g8HM8h3eo72yUjwqAhS5fWYbUmCB9DhcrksxgCrakFgyPToRaXCE5tkB2eQ6jC6xkyJDkYADedaMxhHj6efx",
  "key16": "28MRmuaF3cZdCFBVduzkkSQjE76qbgEnc8hzXchBwxAbmyFByvLrpxK6UJT8hnKa4SdRjB6CrfUAS3utwXNT4mfc",
  "key17": "5QyJpHaqoNNuvqjTMrAri6Qq5A89Z3ckzGnqMU3Th4XSfSJaz6gw66FhR4H7qe3gs5hDPzW2GDvqzGTBdY2yjoxw",
  "key18": "ttFedA48PixB6xGD2SeGaK9HkZZtktkTZUeGKxkf82Uty1mDsdssh9pwApxP6qdUDjFoo5nUs7nGAuYbGLixgEU",
  "key19": "5PbUCn1d8xurjyayGTJU6QTYkCiW46d7Ww5XPcfbZiqfXZiqtdYiwUEbHFLDZybmd2iYFb9kfPgSJrdXzfysfUC5",
  "key20": "kyiVbxi74ELdXAKcdPR34HZtgFUzgUJvPD8RaoFW5ArWdQ3k6BdKso96cVcGKfNoA6BubyXDSeK2fJz2fQEXsju",
  "key21": "5R8gC139pTdnXGxM3HgRoSdLqeGQMrgVdAMFTcmDUYATivKtFhNMUB3svu7BBvJW6GwusZuvdaZmyeQuQYSvpSTB",
  "key22": "2Rdy58bgqK7cQvHHBb143GGnrarB4bzWmP6C1ysTevgvsQwM1hrjK4pwPkT4WwC8Tm2VKKKRro6DjbLkVWRpeNgB",
  "key23": "5Vkzeb2RNN7rdXdf6cHMH6J6rg2ocMR3MJntP8HnD6kwvzhbFDCwPQ8rZGRf4uJbH1fggR3MEUe2B5Jb9m7MmsPz",
  "key24": "5zwNrXFwNZUwgKwVDzBvz7qp72SyKghnbZLefdZYnxHnM9vKQky4GrFAD3cRycQRUVdVk3bZMNMMzcYD6ztzpCsS",
  "key25": "3S4DHwRWjuPKmKyhSykw27zJhDrXHMedFXbP9Bi57iyQbtcDK2UB1C7FAwqfuE58v7UJ1qtvdyQv2ju7U8K3RCn8",
  "key26": "497oygboMF4yw9LdhkSK7xAr5FUARds4ovTrp8hi2L4oSj4Yz48wHYc6cszuHymhe7fxGFsxCu2YXBgKAJEeNa5m",
  "key27": "58RdidqZ5YjoFNyqo7mK2CL8u4rH4s7MXCBeE2dnrQmkPYH8YHyzGNpN4473zH5WCKiDxchVv1Dq28EXdc8y2AyG",
  "key28": "4pJ293KhKWGQMPoQoonL26muJZsiujB7SYc5C1eDGgbwCpJcXpyrv3YHwMWh7QP1SQ6GTyUq3kbGRbN9d1129ADB",
  "key29": "5kWDJiH4Pq7oT5aRAnmuRFWYrK27ZDnvZ2BfmBaomXxfUgrfxxC4hRmKuvzuNtwahoozr3WcML3X6S99k9iMXpAu",
  "key30": "4RtBcWTJsMX426ogk3tTpv31vEkSa3fEyxWLmPemt4qJx3iSMYyzgwmDromYtn33fwe77B83ap7jwX2UZrFJe1fx",
  "key31": "669ohjtUd5a5btjjwPSVtSsgqjjD2PqMaUddAtVXZtUqKYiaen7hAabWbnEpGY6Jd5dpoxMqvUx7fTwCjPnT47jQ",
  "key32": "3Qf82zMZaXyMdQapu7vqR4LKh8XhW1tpwpCKCSVyZQGK5EXZhmCfjnkh2VbvxiqtMDkCXG8Hhmi4Um7T58nHBREj",
  "key33": "2T2pZRc7xF7BFEGLfxeLEthHaFna26V8YTjEUNxQN1kUE9o5PJVNnP1HxVkrxz4vnb3kAxHYkCeB4zJBtozRAa57",
  "key34": "xd1bZAmY3k55wskHS9V1FaHA5sqzgfD2GSv7QjN6xBhbsRWYSh5DkRXtZSZb66YghvdZcY4VkPVuuj7De37Zwdk",
  "key35": "347EN9giR8ax9DKmvQ91hoDyjbJaqA6v2uDEjg6TwSXqZxgdrZSS23RxQY8XYxePWaGpjXs7EFxAWfWREjv9LSwU"
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
