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
    "4GEQEHyoGUsYWNTFCmt4U5bQw8xGwhDAjyzcmrkcHiqVZpP8Zj2nZtDHnV7SnnA7vQqyWgCFtpvRsVrGcDhFKAVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8G8T9Wq5QKTcMSLsmzYNd9DCVcRx1PdadajqKJrRyr6n1LgDyjEddwFsfk16B7btQCeoXkqxghAQVn5puDvVz6",
  "key1": "4DEwS1CHXKkShFysdGhypRALNpfGCFJvTSn8bSZgvkrCix46PEhcqr6WvceuZxh9SH9QRoq8Gsrv9jv2ESDzKXz2",
  "key2": "2swyeoVXZApHJwW9PtHyacFKau1c9HdJEhG4aYMi1aTZ41o7tcpU5sHdPdX711kiVrt5TvuhhkKn1HWdAnpzYxro",
  "key3": "4wFam61CTyu5LudHfNAQ7kUpQKwM7Q7x6nW2iPqC6t7DECZMvYtMU6nNbo6qeM9v1wWnNiJLXAd5jEX7SEE3XjQ7",
  "key4": "5ZgP3c3oMXNbkUWyV3SL7mWaXeSyqXYaFwihwUA69mFrnGYKdHDwD2ERbE2ncVwFw3HXz7MBsvvdk5qzWXBuPmGv",
  "key5": "KbR3bT4m77B7kZbMkras6ZouM4VWEtkFyXera8cpBFmGgSrc84WmDeCTqeWtCuwYScUiJyhyLAKZvjvdP29LEZX",
  "key6": "5ew4vokEo3RoBQPyeigQmyHJvZdqcbTseRdccTY5s2N6ozeTnusYFTPDAhaDAgqrpthGfqoeZmSPMMVQBsHN6UPp",
  "key7": "1L8NNy9aTRkmP2UP18XfszAcS6zriSy6HMjP3T1cDcFcmNtttJr66GGJFeXwmyFesdCnFC4gvkbWmdXGLrBQdVH",
  "key8": "uHZxe7ig1mqCfamNzYpyD9T7enAAeRTz9aXDPLXHKcEYTwGWYey5ndZtRdYWXpA58EpXq3ALRPVDBrLeDjH9mcV",
  "key9": "2yWqmPDswGbsuThxEXDhZYQPrBwBPvCvg8kBLcEAyEUXgToB8taRKaDSHN8SzxoYsudWAjcrDYNptuEXXrTpuGXp",
  "key10": "5F1AkrvhjsKjs7KiTZTBeRKmbaNGxQLD2HkUQ3RkHfqD8dsJNX7HAnknByApqu9SupAw8GRE2PnYwRyhLPjdMWhx",
  "key11": "3kx7CNAagw397FPtTcmLTtqSEswTeajqA7USWwXUGUh42eW51N23AJkYYJFzY1SJ8p9Z8P3g2avXHGDuj3uHBN77",
  "key12": "3jEeUnedx3KHN7R6SJRAKeLArEt6LfbLuCr4BiDrea8eYZoJJVed8FR3QbMouj4eMfwKxd1jdtWVtyDFGCqSjhRE",
  "key13": "54irHJVwTp61mSkNuaaD2HQTvR3iUyQ1WLtCutrgLt4gLyPDxivzy4wVn3vMnK1guDEm4utqMHshKkfoumSZ7vRL",
  "key14": "3D1sPtxQfzYFzMejrn6uJVp86PZCm5QD5ScSdeCgzyM6hcj8UwPL1xeaE42AhP4pS6YhWGhxorkr6mgvXcCQY34W",
  "key15": "xuVHXG2mdi1YpaWrLeoqb77ZuKXFTG2NKo1iUZSTH3iMQeUFKEZKBAE8vjC1yLvWikrgRBYzHmE6J5s6QTqRRtH",
  "key16": "4CrsFT1w43Qa2BBuV9JzoaUbBVeYL4qWmg5Kg76XNDFmawweFqH9uWWrSfTFecdkNKhVn9w7cH2SRkfzjSjHsgNe",
  "key17": "2GjHhwv2B6aMbkLM5Usd2AxgSqSkdECikQv4CqHta8BrHG6Nsg9ozAyD7t3xAYr9u9U9ZEE86eu2HBc6KVUXAgyE",
  "key18": "3Qa47edkUfmM3S7CjacKmu3Cy5KAunkLHsGrm3URAE2Syf86mnvDzSNxHbjehyKtLu2o7kzpLBDq9cvWB7gHbgnY",
  "key19": "4MZC6e7wSecM8zCF12sQFECeZcc7KRg9CDiXmv9Vt924CnrE2F5nhFv9B4kFTheaLFd1Bfpk2Nmz2VRnWxx6wUSM",
  "key20": "5VZhN6729TD5AWUj3Ro8nWi3ppXXrvrqVyH7k76ZZw7q5dw3ahbVePn7R9D1en3fW63vvJeemhTBAS6omUcANR6Y",
  "key21": "3zEyMbtrgUQ68vbG2Qk1hFskgM8EBwayqkaLNJ8M7FvwQwhrxpa1SrAWh7yCvRYkvXDD7XFMh9cY6Hed9EsrkSs",
  "key22": "5os9hpiHS8mzbJPUSJT1519tE12fEm2AXudxSWTkfoS4gti6fwHF5irtvnP5SyKjofu99AHaSnoB1joyN2gbczFK",
  "key23": "5ZBhxAbyoP1AR57qGT3HasLvJwH7SUahjmsgjjgjierCzJCE2Crc4TPUkwuAFGEsp5UkRxihbKmrsD8vSoKvKG63",
  "key24": "4VDr6rDnjiS4tD3yoQE2cFjomyRqBynFTrqYeCrXfwjDCzE3QQxXxoHDT9Uz6c4J5kCyAE4aqjBaVToYZR5GgKzM",
  "key25": "5xSKj9Cy7KmYZ9UuHVYLXvQtaKNQFrBq9qRHjpkAVsq2ZPNvSzYRqvUk32m6fDCZZDSHTCt2ovo8tKjRMjgN1XGU",
  "key26": "A1ZDorXPX9GkX9fMkhQKJWJBVks8eoWreN4qg5hHoBHBKMnrEKnvmKkYqwSvUyJnxVQ8CaVzbdMXzB3nL3nQgY8",
  "key27": "2VVARyn3G3PPLwJis4aGws9CSbFHkSr4WNag5qoa57hDtFui22tGJxYCrMNninZjYoeoPLFEJSKiMFeKXTDBzMFa",
  "key28": "4t6DUxkbPr4EPJPJR4fjUuWEAXNMMw9RgrZ46tMxZkXyJkga1kCxeGSJmf9zkPLdfKn5vS6p2jm1KHHRGpev2C8s",
  "key29": "tb8QppnkwU2AwWHuQTEUWqvQ8G4LdLopgXTMCTbhniAffNxV18Wv4hefroixGNoN5rGSikLtNRYCkQUMxFoTQSA",
  "key30": "66YHfpKvPjKwCF1JM913tojskvefkkm4gM9TPahBmv84XQogJPLAmRy16P73LXcZiwsp5cWUU6zQtHcY5KX3cLau",
  "key31": "42jND6p8GWhQU7FQgtF8BagXpxryiEDHvo7jTFjaMJzwV21wLuX7ynLqP63oz8QkHAPGs7La9c6HdFXacN4WTNFM",
  "key32": "Lcm6Umi3ZCYUwsUQkRRLmF8gWC2csZME2dof89HPbxYpaTuR95BFajFodCHdyKWZcv4dEoQsFZ4Rfa4ssXbxBcJ",
  "key33": "4JRjsRdiMym1HSXGyCdeUsznnD6YFGZSL6PFJ9jE3pJoTQEKGdXvDHWfQCs77cFX8M4QY2JhWd3asctnLSN9peNQ",
  "key34": "2aUsJCiq36Fj3U8Zrfsd5ef7KqR2xiYXjG8SuGd8YZhRDN8dhEkK4CP8ZLAfBTfiKwu9Ly8EkKrNoSpzPL378cr",
  "key35": "4XxcdfMJVSESGxYNiWQwoZx58oGsCp6dZKNsZwo55dasorYoJwSC9fhFmXt6ZVJhXtvB7ZNAgnpR4PdtYFLvuiNX",
  "key36": "4XTYBTpyDutMDeP7vx8NFP39jEoEUV9oQsrL7FVrpWit9iRri9b1xRMVBgafgzZb3PYrvhS2cD4PgwbibixstVnr",
  "key37": "Zpw88mQaWz6WeQTMLwHxuCnpsUmPPPSYAjkeA3nTnjqSmLqtDfZk2qChwfEsqMhabK4ThguyFJW6Dku3JupKxJ4",
  "key38": "5FvCmvuWQDB7V88fH41d99KrX1LJrj3jh8LAncDHJSiajGJ92JhiE3LugaUZBuQUyydafDApFhVs4LsmfPFeqLgD",
  "key39": "5WSTXhPc9gdtLsWV6iexmN5SE9d17yYxShyJhapbguQZbPc2q6Q7Ufq3r5nJ7ADVaYk8i1gQ43v4hcn9fJaQkj2",
  "key40": "4Xku19nJHqzCqSDPKjBY9s5NRCgu8eyCzFvgQihRNuaBSENY1FsGLCgQYuy27XtCHGuEeHhzUqi9FL8BNkFFsJVj",
  "key41": "2f6mSSkTNUmoUUxmgRa2TCx6AcZcCqqPBbJYzZ65bPM2HwgCpC1tsujKMVnJsnWF3GguMmPjUKRiatMLjZYnDRzB",
  "key42": "3cz6ksG1Gfhs7fLErZ42pGZNpgJYUzJeqpYptzHHPp1krwNfSKh4zCL9danHrx3py11N1BLCuiaP4kaeni1mtDqf",
  "key43": "3twqo4Xx3Ptx1CMfkKMNP3HMJuNjBJMxL5EGp9TamiBcw4BU3xevD5T2QYbTy9k5yWAgRRzzZSf5o1xzoGQGhXn7",
  "key44": "2DiFb6fDcqjVEoAVhbAo2wynumczKbNTWYSEFL5Zgx25v2WWafxKy7DtjED64FTNAHNi7MFbuUtMSuYSqVvBiYAz",
  "key45": "2TnVfXzab5FChVrmPjNy7mexPj6p9omjV333YcEB6B3m39Awh6rjg1B629bVUtmedmkYbsv7NgrPSScKAcr9phWg",
  "key46": "3h8i8nwsc5SjSVsDuHzSLwBCwtktct9EvTijsEvuezweSyHeojXG7iH12iScKrxoS631Ex1L6C7Qqj1ZmoQoQqHj",
  "key47": "5m2wKKKog9thPCKYDK5iyUWciFo1AoRaEgDYjWFV7Q3Eke73oS75Qc7tvxuraLdMdp7LSUBBVbzm9KScB72CGf6z",
  "key48": "fwpxhhWwH8NRyAo3K3nHoSAJpsMKmRHQbCb4U2sQypcApfiiQgJEonRs4JiGzj7SSFtikjm1B7JRHSYXkZXcPSZ",
  "key49": "3HAwLc7jLzgbE2xeNzYzPXserwyHjYeNakpVX5wQBHUfjzg41ZaVKNnjf5nnMjAoaZXj585vDw1rTYTDEZD7yzPi"
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
