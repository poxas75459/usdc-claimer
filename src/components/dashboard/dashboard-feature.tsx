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
    "3vqai9MYpaGKQzj5Vk6sE9hfKPhgDq4kR7W9a5utYgFjR99UYj2U2LfAaxEM2PHhoxQri3J9c9xZhEkXagy54XKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJw5LoKtQgPGJHnUaLnLyU2RtjEZyBDD3ekGxGS4b2zV3E9ePApxfrDtt8h4fge9cMqoqg6WdyVdHf2uSpLdKWQ",
  "key1": "5rkMv3AmLYM7csWaGByB1bxemVRaBBYLndR97ztBYZQTcW3bCZfoE5itxjt6KerXUHMHAZqe8jkW1r9Vwe61ELvL",
  "key2": "2BBe9i4WgHdhgAem3GYgH5WXhqdz4UaUYwDGPuUBvNmDbvhadMEV6H7mgDnqegecWjtLwM4DXzfj2P1rtSzkNJDe",
  "key3": "5reGVjPqNwn1fLTYmU7UYqh1JJM1BWFYUgxLUxwpp11TJS6gNhJqvAkwitUwtMVsYNWM4dPiE33tHTCn5eJCamu9",
  "key4": "4p5ggBTCceW8tS4GRuM1Cq3GFWgEMZh6SHTNen2RgjHpmwsNRQr9nNoi1yshdTSaJbSyKe2RmKzGicJuWjyEQwxA",
  "key5": "63gUognynrDV7Eg7pp5dqaVqDE7AM5XpwT8pSq7ASWngxQF4dbnKSriA2G7zai1zzDQwGjBBixeJFQfrFPc65RH5",
  "key6": "5CDrzshqUCgfamvJbx14KAo1gTHLMsA1JCdgPnhKzyVEqntjmJ4Wn2LKAGUbWujEhrTr7UJczDPpNSiSYqwQEDd",
  "key7": "3YTsJU5yozBSzaERWLFsbCQjxgPenJY1v7jimD1hE7ENfzWmAvsoqVndjGdFvAmCf2FtTa833e7YJr1U78nCDUgn",
  "key8": "5Q3BJZP6iG7ADN82Z6AFmDnntrWj3GYKqLRuN4PTeZxxn8zFRMMy56WTPfyPqV4eJBeXNRZF2vWLbqrLQsgNj42s",
  "key9": "49eiCR3oXvGnhfJStigJBvnrttYSF9zY8k4NB7tgr6t96h6HjZjqQRs8ryMkVEQCr62YUnxqfzBRWjFYe7Kwikou",
  "key10": "5uXA8zpNFD57SGhW7VxmbxXVKzWvhvPDn19LVBjXpZUKxJ4HPmqvdYVJpYAUSfidcE4ZcNfCfohtXGsWosaB1KWp",
  "key11": "67SXopNWpNL4oawKH7nVAej1gt1fEVr6frGjpcVDh4bd77VxZFjAN9fyn7kjeeESuWXEdVg7cEWWmh6rijcWy9yC",
  "key12": "3Qx1P7t4o4wuMPbHdvc9vPwinkdhoeedjWqnNPAMH6Dk7cvoVERnLcYyShfomXmaDhN32ZkCsBuNUSvksHHxQ91C",
  "key13": "3sVGXquyEWdYS4mE7qNhqxzHwojwgjm8Xe8KF6YXFq8ap1jXzBJVwacAPeNZ4K7wn4t2A2g8Vt3feVMJzsKH3vsD",
  "key14": "2F98Gf2X7fiARAgt3ESVG6ThozR5a5jAfRnv1bLwPQfLPZFzLfGbzBMWhjr6oGM1u5hh4JqZtihNtjyY2cf3VxWx",
  "key15": "9mpRKVnbdtsaaMP9ZWaK31LV4g5nAtt78X3wQvsBNcZZRz8kRh4PxVfxpmtkCsmvjUfqcV9p8S3AHaR4ATaNmfk",
  "key16": "4p1ujoYCHSa9z2jBeQKRjt9q2ThgWqbj1P2tMqn6gmZrMegEE7EkAT92dQkvxqGEkH765RPHkbnspvvQ1ggg3gsx",
  "key17": "38XyoUGpGYDPskytnPgrEduEoYU5ztd6jaHBySSbuhQbKk8GYcnR2hkEu14UKLJNuEH6KFLcYBuWCCqVUesVXo4U",
  "key18": "64q9VmZpWUFikQAEDe4EsxBjGAMyWNr3A6UjygiA5ReVRH11mu4DYJdRHzoTFnVsqHUWuPBFCoK2Rir3RTSkkjxj",
  "key19": "Jdq4JmCJjqf3TALJjxbCButjZFygjLSyZYiFgY5p61ATRTREAKfHZJ9BjMv1RPXYAXZ12GNwk9VabFeQQed74dG",
  "key20": "5CMK54D8qZcxYfk5DbwqCKXwRBaKnZjEcHcCUSY9rP5WwJ8WdqQTW3x94aViW7E6eQw4PoHt8GiRAojwnyLMAcwd",
  "key21": "aC5miR267DpHgLsUudm7QhYA6pVBuP9cxPa3Y9XabT79i24RotCjBCmu2Vd8G6ATGF8a2RzFPyunAca99ySvcVv",
  "key22": "5g3RPNdVJv9JmEdCPNWv5ZDMCjdxs4gBUjY6gKm2wMgdeQ6XgT3SmkxTwimyrzsMpqXCJMNTt5zxBhwVvZ8tmL9T",
  "key23": "6c4k4AV6DtY5GvwEAZYp3tuVU68DjiKjGYzyArsBuVhtdxjLkNif4UK3F62wvtpsTprUMZWkswkxA73eDiHzwGW",
  "key24": "3pp7WzsmHGpzub8qQnVnk4W92qB8sp3f9JtdWQGwj4RnVH5c2wBpgqPrVNdX2FDLa2AnzFRfsP983CoNvzVAL4rk",
  "key25": "3f9RgaexiwBgRATvmUy5K99sfi1XKRYENWhn5Bs1seTQxJFJ752gjN9tye6xadQFAkwo5t5463o4z1T7pWXFp6SA",
  "key26": "2ewTukwPXjqTTdU2DYPZTiEsY4d4Zd17Ui1VT3FSG8bm1pM5Wwbt9kgx2uBHoiXtR8g1eVbSs4FGyLx5FfPAG42D",
  "key27": "33x8tgpaD3ryVy4EdFkEJKNzBMWd4KKvZohngtHmsEzwVL1P7qKSVMvuJiYyiyYNHnzZHHo2E1TRwgVrBh8niGbV",
  "key28": "59hpXp6LWDxUjjjZ9uUo1ecBxdFW7pDucM4uyMm1HF7fZfUvFBu2W4SqK2s61bme5jq2hquqMBGcwp5vTGR4t3MY",
  "key29": "3enxHnuWS6p5Fs1wDq7y6rdPNDscPhodaqsxVf2q7Z3e1dsNL3qGsqMB9hAhCJASoBF1CjHbKmA6HP8r1W13Qu9H",
  "key30": "4G6Dw67rJy4P8GiNreCQRMkovGnQBPQzWiVNW65fdkDbsFhsjGL87CTuXiNYo5qmnaUK7j8zv1nnY8MusxvoHYMZ",
  "key31": "3kyvzHkSdNeju2dQDcpmEzVxDjQjpbwq6fx53HYRw2SSPq79AkqorUqKgJiTUtTfuKxEFoJh79uP16nV44xYYTVz",
  "key32": "5CBSV5Crj2nzeHFHieWzpifvZdsXWELWgaGXYKwAP534i2qxY9YyFQNuZKUQP6yymEuZChKiC1Y96iv2o3vF7RWV",
  "key33": "3pSd8hBVzBptTBBpqHV1RBHeRiNFL9TXp98tGdo5Md2pULAv2WJiY1NsvQBajGjxwVNAvXbABhpQKLmCawVvwMic",
  "key34": "5WbyJiu7VB5hTv8ZhkmNFyeJV1uzzFX6ejvMSNmhZriFkoNcfWg49GGiqDea4frLFqttqtPiaHaCnmANCK21PXRt",
  "key35": "AG1CgpzEoL2rpDatu4Lus65h46AY56NJbk7uR3BJ9YN3SLonWDAYb97HwY52LLjMSzFzuXHDojxuRNKgb5zxrTJ",
  "key36": "5zrQqJToeAQW3U1BpXX6ApqwxGBiXqbe16vPPUZJQLeJXnTu7D65WgDoueW9SMyWRffa1QSty1691beSvZkGVq17",
  "key37": "4T7P1v5XcsXwUwZr46ftmhQBmE6QrttjX4JhhBuKfistpwehMSHESkjmeqsCxQkFAprqaVDVxAC6mXoXFHVZ7zjR",
  "key38": "4ueKzJ4MtzU5yLg1qMtkkj4vk2Z4DqTNojFLAZ6jLvNCJCrDoUZTKrHrgiEzvKHmUUAmArRGPLEERqXyNrE66mQr",
  "key39": "3WYrt17VPKozWpEvyk9wFuKfeTXjMqD2A8mw99UqyRNRCXVJakjvxEXJdkRGaFd3syi2PavTdERv2BQQQRvUhHd3",
  "key40": "2NNDbEQDH14w3rzayRSbqKGwx2R228ZFes9aBbaaveKR1X6hqKiKpZAG9xDmkNNgUktbywJ7U89ofvQdQF4Fc7UN",
  "key41": "3G9x2zXEF2ExgHBShpKfnHLAzGKBG4V1jSqYRksvExWswhrjz5dYzYn7eEAqppwqeGFuiV8sHGZ3F7Gpyz4TGcMv",
  "key42": "3LGnGbKrcErYHtEeWq2KQznvDoNpno7UdEvSAXP4Zy2GpahUMz7TDRoJDLrtusWpnYmecW5dnHNjXQjo1v8FikXz",
  "key43": "3B47PCX8oiun6U2SWLZkMPZy1X2Aoydr9L58HBZVQmX2ao1CZXZGsngxTcwb6grkwK6uNxXkKgvnvDShwLqN4oFo",
  "key44": "2TqMKgY8bSJDxpHN2fRBDiScWutM5zGpEnVMt1sonV1tMYTLoYuYHM28SF7A2xVX8fm9wV8pU6BbRmyeM2CFz8AS",
  "key45": "5EkqzZGDHUPM5VaFBa54jExQApgZW7hD3jkaceKEhscGbKCco4K43kbnnBYs27vB891BFxksvvjNTLPH24wGD7Br",
  "key46": "2TnMZUi6FQ6fub9mRMTH8Gj8Sk4fBBW3bphw3EDf3rY4iCMBTdMiGoFz6wAfSUiNKLfNjbyqXjGPkNxCHVtY9a5P",
  "key47": "4ktukeiHEpenWAr3hwnxcoK8PTL6AYshxHtnjbLbCx1UhhT8KrWQ9KUHGcveFsRL3JYHqbyhtAadJdACmaVWqcrM"
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
