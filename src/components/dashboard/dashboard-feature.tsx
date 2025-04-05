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
    "4cfJsrruKTyN7GAahF7gJNiHDfCJrxKkJrRBXeF4W5sFkJv8kvN9MrPpPtuDUTZQsYZCstGiMkNganaGudZXL7UF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4npjf3tFx3a1D2jRp2rwYwc1P32WDQFE9946kqhbrHq8aXBdgCUXfUfHra4pGd3M6JZnjGtu6gSS5VSFsrXuKjTK",
  "key1": "5WAfoBPEbw9W1V9iCxQqJBu8a6ABNEowezvuxzvUFbe9YTvZWf2RsV9KapQPZhLfiFT7M9812kX4W6gyTBhCAA5x",
  "key2": "5ebxt5qwiSus1QfH7gZQBBddTBrahYoYJzTRNPCmV6vX3fuzjeMyNKRCKuMQMWB3EWqLFVQe9jA9bgZuj1H3TDhj",
  "key3": "4qmjszo6VbLw2i1daiLp64oMDUnkqxyg3hFv3AFBqo3d2NWzbU8TkTysxny2nHGgwR9CDx9MdPT5NTxWkWfVinH1",
  "key4": "4NESx48HVXysA1NPc9Qajf4ddN2ZC6A9hNw3E5keys4kd2ieEKSe2V9hy4e35gmDneeaUALHqn9j4ymsFqAXyDMj",
  "key5": "64WqZvRRpybLS7ouVVD5WXHHLvYxbGg8wcNB5qowPUExTcR6e5joMxChmciuMi5rQkydD9haZ6mAfYNSthbrcLm1",
  "key6": "5rtv5Zakkj3NvWm89S3GMR1yBocwefHiAzMPVdmCqSnZkiANiFtC7gNMDtY2jGwnn3RXvQqGSvx5a882VSyZt79Q",
  "key7": "SZWuySgi5YhiHAUuqNhh1FZ9ryzneX9cbzeZXv6hWpADNhdNynXRpz7q7SAh19hDncfTvf3CkjricAZNtvEe82P",
  "key8": "3LhbVEcJkcrZVbje74sVjmUazSJTcZcsVtrFDKphPiEAEpN5BpNXMEN8HADJwfxcBy34dLmk7ygrXT5K7Fv8k9Yi",
  "key9": "wRhCHXKWdXhN6Z3a7BeVcMjP7A9Ph1uP3GbjzDnXKVT6NBUxDr4QoMC5JFxKg5D3VXBKCJ1Nk15ui328BowG2x8",
  "key10": "JQxjQ6KTkaaZRDYDC5SWoEBBUNApG3ZPrpZUQUN2La3BzAfgun3nMgRfqW8DftEpus2rSgJ2KYb3d4qn25KpwkY",
  "key11": "5tQJAj15N4A1WHhi8HPqjSYSbP2w46jQekjv5rchbfz5LsDttA33rH6bPWDeJADhJkSB4GmBgozhF6YaHZY6MMjQ",
  "key12": "9W3t5qpp6L2S6gfYEGMTB82MDNCpkQAmVm8YwFtNtWFiAAeXeZxe8iQd2teJFbvRB2LPMtDaLYaG1338F6MFw6g",
  "key13": "2f6BPHK9CK4a5CVmaFJfWGXfMNrbEAnuNHNqim573mJW9T9ocDapgEZL92rMEtbaNfM2naiApC5PgHD1SVa3sSQj",
  "key14": "3b64NYPUxnEvbCXDa27r2rMBYS9UAAKMy3tr7dvewj5P8iVm7Jk4CxUv3i4TvyqoGfijtvEDRYW8hSoi7RG31BqN",
  "key15": "5fhh4wCz9MbZXrhJVu3JvS7212rwMm5kk4rRVrBn2vLGuM5vTDZuCMLc2PN1uNw6iC4UTXaakmAS3rpTEaxGhMnQ",
  "key16": "2WWnXDNpWyxPcoYr5raAf4W4G3LAcVuaZ2hAEZJ7QJrFThkyBRhVoWsLHZq4th1uRJdxv54qZG4hWL9nFXeuddec",
  "key17": "2bBjAnBgfuyG9hsDAtArapGk14p5QDAmpk5eSvrVZqGMWAfMcCaQkHwwRpwSTUy4FHDEjcHngkjjoUJDxnQS5Yxj",
  "key18": "LYqnbBfnrWwS2YLnK4AYQJE1WTkLhCoJZveJL1gkbizbdiuzwcmG6DxLmCX7uVUgV8fjvjvpn2VHwuDwqsKvwxo",
  "key19": "4UgxoDGrkvZtb3Dhqm2UTMUZB8qoomFgjqnqTPpyWnNS8tV2AJRgfUyu7tPosGrPttSRQHwEBv5oC1njKa5tjZaU",
  "key20": "3mwsKmcxEYWVqYSa5pENNLYernNHpqnLGQcS7SsL4GGv8ttfhSh6ajHwq94ky2YVbqv7nC8AoHiTgHbfzYWnck2d",
  "key21": "2GFTck8QTZZ4baBCcYs8sjfX4upSci9XUUc2oZTfdWYnPtjsjeoN2oDoLWoJiCLq2L6QHxBd8ziba2KtYwfXjsCk",
  "key22": "5JKqNVufVQqi2KM4srDiT4VXGcLVYu5WcPbryABrNzStLV4JsJW4oDWrRgkcbEkHmkj7XxH1Tg5b4qeKWvcp1aMN",
  "key23": "2PuRbZHrJiXVKHFu5dGqHAmxEmzgJuDePJKEuGNijmxH6NjCopTtB26aWje12Zk2ShRQyR5FYoJcX6pnZrBiyBEr",
  "key24": "3Aod5FbGJRDor3DS2ouWkRnosJxMFTKCsbTE3e9rBmT6wMmWQMtMGRr8r2VzLPSXf4N7a19w73DKQiXR9jKCZWAA",
  "key25": "2gNe7dknsaFrNpPt2mTiMViBbCHo9fa8abkAiZfFjcntbepQhB8uk8tjFbgBKPFd8SsD6jmEPSNHRZW9j3yHUAic",
  "key26": "3wDGU2bYhRDNmuZZZbvjcgUGpysKmJoB5esiZZ72VyJkjP3hX18gRyn2stWx6NX1K4x9VwUUtLYiLux3tT6ZH3si",
  "key27": "2YMrCmuFQ33skvYy2N2dTCFmg8pxa77P7J3qjx5HkahHauTKJVEpJuxeyeWwVwUARGQGwNpwf4oEAe9g7fiUeMoy",
  "key28": "3jaH7odyRmGhLeJXqoXfn8QxY42DGXfwWD6jGJCNcaXgQr4DCU1ZwyuRFmwuHKpdmP461uoN5QiBxj6JxPHhDiSG",
  "key29": "5vmRhJYereTARww53RWSPM51wHw3ogmhMSgArzHGhFxQfd5phWUXvXMaxTz2RMdsgTRiaLp56JpxMSpLPeP7ZCdt",
  "key30": "4X7MiZGhDgeycJ5CCXa5hpCPaWREZMGcHH6roJskRzvLUghznBYMSVqQtfL7H2z65sD5PiZGr2721LwcCU14YdEW"
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
