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
    "3RvFB3DgxT4BrUvyh6XCTA7obGMtv3gst88RHYmeJioSMjmNGUCukkTYVCePtyaBU4q2cRMFSky5bAKWcvqbodnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x5hQrkxJm1KY3JNzCFYAJpsV6e6y1pKdQzWLwh2kXeBEDVujioCp82zsfGYj2bjCMqcWdJVDDPvRirds5FQMYMm",
  "key1": "29rba2F5S72ZW7kPtqZD9smgjMhSu6zEh6ptrmfz5mZGDroCBbeUisB5raqBezt9DbSmx6zxbomhA8KCVtL9J5EY",
  "key2": "39e6xGswUKYFdFTTPoTtxiFZKrVZnvGdK3qaGokAdt1x77KrxuDHmuVe8ZTyrkWEmdASychXipttyQQMs6nZT1rT",
  "key3": "qknuEmf5hQzfuj8TBwjTnkJXshfSg9NV7xGBzvZx7tAe9GikWcHTaS5rn3DZPnchhePRYTAkh8AgbqNhHryJSCL",
  "key4": "3ECVnrqGa1gmPkRjVXHZqwt2vkLTfNhHm6oEh5gjV9yPPamhWDPrMoE7fbUWHbrVGhYc1seYSQqw24iu8KZ8xGKm",
  "key5": "XxqkQhoiU5QT4MaSzd29pXhZnMiHu2QENuNxF71yBt87A4TnBiS7BPVrvLboksuRENhhFQvTbZaxwZSUdxuHoeW",
  "key6": "n1vGvcPxPUbkgDsovhaez5wirVFB6NbyRHYvBR1faR2W1uTF82QmugzjjWKPbgM9CNWSXspsNSJbisDNpGipGWf",
  "key7": "GJZoj8c41Z58ezDpuoJWVqjwD8VwaTmAXfm8zphkJePw2vWoacU7eW9MXLsubP851NbJ7w6r6iJuYHzfzimzcgS",
  "key8": "5iZNYcvYudrJqP8DDujXzCWzGWPU1A8sXrdYSUUbYQSyn8AnZfhsFFwkeqrcDi7v4xCEvGMXjDqyajk4Y914LZ1P",
  "key9": "j98H2EJF33pSX5fFKtpSg75tN9Xz1zdG3j8xypFBRNMSMcu1mnLbzHxiLH6ENQKKJAXrfRGoV68i4xjPys8QJsZ",
  "key10": "MnGeJDy7YZBECrHf9hYaXZp9KDjCfHrs74kFn55s1N6KhrfoorMcj9WM4YBbifXrFFbVKvm9XaXTvPVUA3ThPtA",
  "key11": "53gERoxs7LNkMfJHAg23XTxeAkFm2VNpJ8AhG4LmiGHW8jBhwa1uPK85UTBBntaCZpkqJx2UARSLhpGZMvPddRdC",
  "key12": "t3JGa5vBXUcR2oRca883UYGRjXsAWUaaVgXLCDwhjQTrMRDpg2Xjja9W3nwdgNzEHJW7JF5YW7Kmax7kgFiuEB2",
  "key13": "3GcH4M2f37BULAU9kyN4quaQcA862RbhepPxACHzLiewi6C12m8Bq8x1fJctofxPL8L51i6mc7Emk5BEna1KRF49",
  "key14": "2p8GKnhMCePzorLSMb66eVUe6mKQcsdxVxN995YmjvJBzdpTABayL1uY8FHQpSGz1ZnEG1bQDCkXXiJELjjgZy2d",
  "key15": "4CKMi698MWJy6gTFgTGg5Y5vPtH9mNXBaeuhhuDus4vW7ThRnor7yWiuXQALRHcxLxWsXErq9Y59uvQydwnhstGN",
  "key16": "4AibMCXKkjHRbU3kM8Q28HeUExWpZgtg91FRLPW12pLZP1KjuyNNn2hfxerqJcNqUGvfREMepHvD1RZCr1nMDm6y",
  "key17": "3o3S9ERikx6FcjrJRBnuG8JpwSz69XBoYBYT3gtcBMdZZa1PfSMb3PSH2qAgL3zreiBGabx4CeAYD6AEUg1TQhE4",
  "key18": "5mCdNEXy4SLq12uzLRNSpeZRiuEHtSfkbmGnW9WeCaoCiqZeUtTcT8dFQ5sRB7GyhgLHyaQ98YWzEbBiH2se5uPE",
  "key19": "4TxfFFZeguGTJPkrEULEtFRFFnueLgJ1AVdZYqSJrDPTDvw9hWTJkm3uSxJLWnogpPD7Py8zR1v9fvg1RyquCW2u",
  "key20": "4Dt7wxhVosPUQVRHAhchckqThJXVPDoRoYPd2PVBsb4Do1uku8WzVbtmZFyt6SvLNqKcmZ89qdBjp9zSjrJRxNnR",
  "key21": "21LQYi11tH7Z8RdZZMYqz5Nz7q4iZ2hUMQj8ks6suRqedt7XY8HtqYSxVDvaKwCS9h5XitNSCsNhEyCdqiWv6rDe",
  "key22": "34DbRXkQywpwB2ybobHKTpaFh5kqm4FxUK51rvx6uexY5vkiYdUjWCes5aY92aU7mF2euSU3yRSMJDU2PVsu8eT1",
  "key23": "6msxX19vWdWFihqxMxNryrCAiJCERfGrYsUkear2sFfcTyFNV629dLnY71w7xFVCwBozr4UKGZFXuqJkitSfSwa",
  "key24": "4ba1TxBGSVzq6WU8ummkSaqMrKZN9FeV8VAKVXHVwKeknraruR59N9FPz9zN35M9nnTnMYsPqBZkxz6BtwfTWyvr",
  "key25": "XcXVvkV2jfF54NnU88smrok3VzeXZA9gBiNbp2uqBr75Giad4EmjVjqqogMX9axvwNaX4uXRUFnebVTA2V6LTTY",
  "key26": "5Cxvzewx4t13kwH9FyMwym2cuDvd1oD3hRV7CW6XmUoTVJYSGpFAyQ7cosKdgiivZxH7aqRpb9gmJtEHdGdq4eAL",
  "key27": "2R2dTHS92TdzvDWnaSEcb93vw2WZVBKsz5qhAySCFqzoPnkAWnpKweNZtitwrfyAeXkmZJ3n1yq5zg7WUkgz7hQL",
  "key28": "2rcDsp5yYdceCPmHVYDTd9uAxwPtrxEg18J5TkWdFfHsDHzr4bAVxiKDYQNkrkq8Hu94XCnPMCN85cNTkyzeLjdn",
  "key29": "SvEqKEqSy15ZCkBR8TrhUvbiE1cQXGFUC21hPp1mVotkSgkyCPGgpncrfByz6Aui46a5BRCdyZhJeHkdKBPVAzT",
  "key30": "22w2fhB44Ez5eNRCRytV7VHrP3oJsPoAJYhu8yEnJTLny6oRSjejbeB2CqXKYEHbK9dzpjQQ5EwdkX2UEF4yRULH",
  "key31": "iPZWcA9JiQuStUfaBSQPYWfhkZbt8C4vUDkQ7gEWMcp3e3R1o98JfJv8YyYxZ3WzL2NroQVX7RQZPMDcJy1RaWr",
  "key32": "5uoPjFv2QpNHJBty867vZRNBQ5hox6vLtUwUYXQQ7pjG6qkNznBbCvQd3TnasjyHBy6qD21RwQ2ndtYZd4zrzkph",
  "key33": "5C6UPh26hqJNGUzWi2Lpu1HfGH4zzAHD6FSpw7tnE4Y7DmZuPVnnpJFhde7yWPK1QgJtCGsVuVotH1RDNYr9FeKw",
  "key34": "3P8hbuWVYXvgJ3utrtsucGUVa696YYnuGxZcoyLDmZ8DFmevMYnMYecf9H69DVk5dhTLcTv8ApywYbukK8Y9kEKg",
  "key35": "bXfcnojB9WejTgN1H3fZa59WxXPJ76pJ7cU62Gu6rqdoNR7QS5SYSLoxsH7pcQAoGMp1w8DyqzYm4Z4bSCVJSgE",
  "key36": "4zJ1bR2u3UgU6NuwK7aX44w7Y1ZqCCiPz52B6VoiZRx7ac5yZKmUA34E65T6iAYfWrLeTCa9cMSv1pUKob1oZ8ym",
  "key37": "5Zy52aWbmAiJ8uLfNh8XTNHdPnV4A8AW26XXMspoVSxaxpLKDPXzZirmjJrxVCG3mRApzGd33tMs7oGenrZ2LHw6",
  "key38": "jPKGyhv1vKMG7ZryJXRSeoNXCeCqb6PkxxF8BTSer4TmnWPMFnqfh3XdsZmScuUzzv4DGp291xdyUQKWqBF8GTM",
  "key39": "2ge11QshBFAv62wGdrW5N96wmpfnwDvZXh9zLttCrtaLz1y8a9s3q3H99FARFdTdv6RkmY3nPZ9j8kZ4QSCyyVyw",
  "key40": "doW52GGCRpAd3cAJitoZZEHCsanTTrax5TgsMVEpRfauwVpArzbbMJinLdYakDtXYM4uZRox75iq4oHqJ4HJRjk",
  "key41": "5XWba9qb3CRjdx8Rz2fSFU9kB8QbmsJUdNtMvruy4JbaDBf6f5BN1khkfhuvUG95yawgndP9kUdSLADQXcitJqpD",
  "key42": "4xk8ax9dmkhRr4u95x1iJQ7ZpS84eDUiK5zEgSfdn7VhHdi3mrutdj3V2uDWb7MB4bFM8jqC1T1wESCcxDmUHGxg",
  "key43": "5NtZ4R1twn2ucRF3wdqYFnmG6BoiQkX4yH72HqNUwDDkbywjx9JFhyK4TbS1BAqeXiCRh7QCPi3PxeymKhDLmnNF"
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
