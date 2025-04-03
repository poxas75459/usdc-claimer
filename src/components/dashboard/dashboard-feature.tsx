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
    "3XnRj1rjr1DqbdXSoMPtf2NxUrXoMCC9VTPX2kvtzQJmTtHoKcHpb748cvoh9fz7sb4nKa5aSFbbMxi4K2PThwaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zcwmngD2mjKUujEVtZXQM1f6NBchQz1AUMzJNZuKTiAJkjS4eUnzcDphqVHZLZRnzVkRRs2vGPYe6bUzryk5939",
  "key1": "3MepA9djmddrabHMELv1r8JeYGBq4MYSrA4ZerGk8BtVqgm8Pna1FGRYCqA839QBem8acxx7XWbwtDgy48LkPv2y",
  "key2": "3CvGHbWnxhwM4HPSgMM6MZSSpM5KFTArodoonshxmAv8gHYQe2jAysPZkA4hKp1uDd4Ctm1wehvJ4wY2NaYUR4aQ",
  "key3": "8mqXoGCDwofcm5BEDSkGrNBQRhHHtuJiJcQh62GpTw62JCYzagGUom9c5TGp1YAMHxrgiM7kAsHpWv3xHhYiQnu",
  "key4": "3H6yiEgMbPCSsVnGd17GHbgS2dGePw7CMHiKGLQYXG2iuR7YkW24ZeXvXPj1xebweVkNX7zAuqbKmFCnx4gmWmfy",
  "key5": "27XEf53JVnw3ncSxHGTDcy83CahxMy6oJDJtKmtbNKcBXiCtjyk1t6FvpwWDFLAxxNSQURg4fS5ReoPoACeBUnt2",
  "key6": "2kAiURjUWJvehwFGP3BcXEhRyayUxfhj6ta9C3sVUZakL3YrWu26ZbqWT5PUM9ns5zVU8mEGZZSw8ZrL6hL3Sp9L",
  "key7": "5HykLf8g7KPP3WPkVuhRSfT5EEqEQApQ9FXa2hRwnDKd2ws99f1F2sX8b4KZd6qu2L7BdnFcEc4M6e9DmvuC2YTG",
  "key8": "53MsCz53LAazWDW7W2yoeoFX6MkesCJUohCuam34oSPKRYWbs2XfGwMwWWK8RweB93RjBzeKkavY5yJRjDK8t3h1",
  "key9": "2tpW4AZvhcrhmRcyvH4Kyvc4vUhqtp4hutzkdCWuSMxU7SvaVXCZCUFMDpiByWrrDMedn7ixNvZdruRbJpfZaT4z",
  "key10": "2oQG4VV3C6cH4sH4qsNiTmgBK7WCg6QJQ9rCUPFhfHoCGARN66Lfb1swbD633txkmmFdmcojtDNWT9UoExF64rVb",
  "key11": "BzcYGzBhQHfRs8KUWZdTYW6Rsuvogidm56NtT1Q2Cbp39LUViLMBYVgeZRnKPD8pntre4ztSUtcRdXnvKaBo4NN",
  "key12": "5ZRs7nNf1ofSPx2AxHnCrewpm12Q9K1UtdUtB6zJUGT3juvvXT94UcCqYj9JJMXv2rFVy8idNcCAYkFtdiyqeZCw",
  "key13": "3CMsV5vdoVtARihMwBdo1HkehyySk1XBZmaDfj2mLtaUPGpWpktxpb9B6mfjhj53LDnw1RVmcRexdQic2tRcYbm3",
  "key14": "2wNX5ori2QEzYSCzMX5k8jU5PUKkETfDhLQtqagV9jRabXQTvYjcDhASGBWiFUDL4KZTWSceQFdhQkLojoDJkaTn",
  "key15": "4da9xVccDKxV6ZYBi3SrceVc8Uo2W79m6ewcDk23m9rc2Muix1LFJ3e3xhY5diQCvWcJKoMiQnu59m3NLAV2KKJo",
  "key16": "4cgRncUio58xFio4bLqTwzyHGNkuP7DoJZFZqHKJK8kAy1sEEH8FqYXT89M3sHGLZQr42PkBBqcXVTraxn4LRQCo",
  "key17": "4bXbBSvh31TPWeSRt7fezsHFEHw2CYoBz1mTe14FTKMfDxxGZe5jfqEffmNPYeqoY9fuTNhdVmhdXzSGCLf5fTTA",
  "key18": "5omVbZjX6DWeitWfXUx7n81eZbfkU8pwUAriEhUwt2banZR1NNPXyaFnqgpt2b1ykUdoDRxosM13UwN2jRL29kMr",
  "key19": "3pCDuGJRBH5vZEX2Tt63rEzDnis2Roz24MyS7NEauWETeAsfWWpvstJ3ossbALkbCAtfnPhZN1Vc6uSx6oe2sBsB",
  "key20": "4ffaW9rtG3M3Vjdc1RbRHhNC5JHy7Jgsy3kgLfMaJfHCQ2Sem5yASHgtJDPK2cLLYQByVy2rL1E4Vw2aSpbjqVj3",
  "key21": "3jECjmkwSRZWnSLg85NuqLPjry6hjWhdufN7hmZo8j2s8boKejim3Ucck1A8ArHY7f2wnu4GkN61YLWEvQ8o6Fs4",
  "key22": "4tJqLCVcCkLP7Ur1YwyBjsBNGKNBJ4ysPNEkK1xLCm3Yn9i4HtPQseNKK6dDd5AaDyyE21sAJc1Ffe7FmydqsXEc",
  "key23": "5VbMjjjG4xqXNSwrC5qCmL6ncaQSkm9kqu7B47g9AC19zjQJ5VgLADrB2d1Su4RBZ5W3j8p8mEohubtmDwzcL7CQ",
  "key24": "4UWkuPnSNazzeGaxSW99G4FPigwrC7MfSJCtfeCQZB4iyMQU28crhN6R5oLHz6tM8k9WRkwTXuEizPssdkPWr2hd",
  "key25": "mNDFyRVv99FvePLhWbJF8v4pWhnssovapxhzc56Ks941vqxry3NrhvaF8h5f8dNE2FmAj6tSKpYJmP4sArhwtX6",
  "key26": "5pe6ybSnkiFqwTE1Tvv49LYykavZmxJuH3r14CzY3MMNzJfMayRr9o1u4FD18rgDpTWGGUBS2DmRqpwsEaP3DYbw",
  "key27": "4LD2fz5YuFyYCswCdQrPkiuEpAFuGevmn1n1BAApUmJzUYfz6AW4TvK1fe8AHB4ecdUQBMzpRzebz1EMZoCiJJXm",
  "key28": "6Sqty5ntXwmgSVSnZL1pG6QkuCkNm9JxdxUfPJVTpdV1UiQ1r3yqdZZ8VWZpyhqpNDYNhUp2cCRA59qYwjYxfh2",
  "key29": "51EKj3DrEnHmfzuSJHAFu8nMfcAVy6LY6cG6k6TcinyT8M4wVKX9NBmZrBr6FhP3bqrdLmNhnro5neerJogebeDb",
  "key30": "5nivr7sfsPeyRUxyJ2ggh5ZQdPVdydkt951oVVitstefBvQ5oF3rjMupFaNTjqpPYmZKdqGQDdy7tvegWSvPy4Af"
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
