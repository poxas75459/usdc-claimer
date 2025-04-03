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
    "4g7DzRsADGQ7Xy3Fv7T315AWaMDwhPHQBsokZXVJ225fkVGC4LP7CzVBdyizYQVvRE5WJk9nNibU6vWHMhJCcraQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nRi6vcZynsUQnn2MhqEGjbeNFZ7ZNofVzKJG9SebrZ4Y6123nF7ZEPWzFL15xnW49GaVuhD7RuSUjdXsCvtRAtE",
  "key1": "3nbEga2ocsqM61VCiaz5Ny9feDrwmqTr7mFzkgC3QfMhzDC1fij9z1y8tYxeqVutb8EpbDH6jD3653fy7brQySBX",
  "key2": "3JC3JmDQcUMKjaJqiDLQKZtUUGNmmsqqPstrStunhS575nNtkigGHWnm5AikXhkKBVyVuRmvC99QfxVLZd1d5AnP",
  "key3": "53dLe12z3NtuLcGjFPHs6TUdCu42oTPiyhfk8yigEffvqvkosCuCoD38Mj8eBhFTZKcMrEKw7M1XgvP9CpN9pd9s",
  "key4": "geTyXPXSjwJeK2Uwu9n5nmNHqnvzE3qP4eJ8MnMiQwRJDNvgW6evGb8q4V8CrxGotYruXaZDSGQ5rvM4733UDzZ",
  "key5": "4KX2TQLkeeLdY6gJHSLuj9Rc326nTK1PiQcgCXwoqf2ntwZmQ4XNdGhuohgRF1hjQAACZPQUC2dRbeibpaoyA4Wv",
  "key6": "5fZKoq3i5oQH4MHsU24DFHKXQ7iG8fGt8VSE97vCnpXmGhaxZ5frWXNggUTZcDpfxaGfmRBj8SXgkdT89aeL1qgw",
  "key7": "3mKzEWP8E9EjsqUE9Jw974EtCcWMRmEGMZ7DDXs9ULdXgUUv6siyYgKo92MM6nf3jEKdnWMoiezP89mQVB37Z5Sg",
  "key8": "24ZqsqzBSB9CUYRZN1KsEB8EmgpTTncw5UGS6TYtKbrRx5GoBuuRP7kCZTKzUsJNrDC4JY23ek6kRKc9dL4oouJx",
  "key9": "5HYXyajU3fmtff8Ys3DFLUnWPxxSF4rhRkjz63AwTFE62n3ZfwCj9UPXXDyGnBZ4pft4uxoUFvYNXXNg7etL8d6E",
  "key10": "2hShNwWXPH7iRV7LwMaqrEM92mFPxX6XyPu9yyHLmjJ3AvfMzkX57WEffNSyanyTjPAXKH8b7RzEezvqV5yecYXc",
  "key11": "3iLtioaZYptCzBGQzHAf2F3qLQniF3Zoyvg3zW4s4pZxqdyfc7CucKTeTYFcJ2jchh9XFEuR4sqPAE1Pvzn5Vb4u",
  "key12": "3mZm5dZ9cmcyt1DSiV5VCF9gVXLb6ZH58bSVa9pTzs9fWThpqoQc5zMLCCkTnKd5WmmbDHTKkR5tLALGJkM8mQew",
  "key13": "3M7GPcgiUMN2YhLGaDwejKwJZEkyKqm6BCesRTiwfkcbYhriGGPK2Q2WP1NfYkno2PYXbU2c7eDPAtpvXU53ki4b",
  "key14": "3tksxLPzYJM6cooEevzUUTUNxUpC36KggBk9queCavLxfJXkt6mMPFfda6kktuWGgajXYpgwoHdvdsF9vpBvDSVN",
  "key15": "4VEqkrD2dhCBEhbxeprFWbWx2onRnQk6UkcnTN36KPBxc2tv4EFGJSM7ZZZN9Zjst9LMyt2R6CpFQzSrNpcRriJU",
  "key16": "4AvMUGtFQnCnfdrJTCqwrnXwtQyvrTTXfHtdAqui4Kq12qrH5KMM7cwb6y8eAwDK5Vv9hBLmDtj8LpxHHvQebt7G",
  "key17": "461d58EsRazv6WA7zHNHuPzKvc7eLyLG7cS7xCvTuup4DYvBdrL85kF8nfBBb4cy4qFT4GkKtvcvPi3wY9GnnMxU",
  "key18": "272zyvhpumcaEWP75hrBToy2DZs1DKxGsvWGTqUCHNUQi8YRN7ujcVtURtGwwFZcjA94TUYsajYRnxEv6kAg9sza",
  "key19": "2aeLBCKg3MwWLgVJvLXT9Bc2jLD5QsgW4vYYiCbCNDx6AJNtHEjTjAbsBiLC2hKPurS2bC5p4ovY3b7henpoUtKR",
  "key20": "3wg7A7Q9oU3WzbGacWZtJj5J9vpt2wHAXtpjiCXN33P8JptRiMjA7mDyhJ3T1UuMA1iPVJ5mMCzqUKr7BVPKoS1o",
  "key21": "2SaxiTQHGm6KNwVCfnvgDPUTLGiK1Wf9AHBk1rJUNmV7cRWdskJQ8t1Bm6c8KHyctvdn7rroeNiSSncCtgTXWAPb",
  "key22": "3mf1LCCfYt5uBeo69hZQeZ2JJrKQnAcJDwZn8C1seABG5K9ztLF723gpDut4CZDwWJuywodmzzV37zZmx7WivCr5",
  "key23": "2GoQoeszg6EiRmRAVxunJio8aFQgThNjFdv349FRyoJsMkQzBddZUnzM1s8zxz4DbMRxLhSa87tGHZ27oM527WcS",
  "key24": "Kf3j5oaLQGZzFS8wJWcdNoRcits6sAvJnYdxwuvrhULuVxoZCo3rMLFguNr6kWkC1hSTqaGotNu3eJ7v86p8oDU",
  "key25": "3QMrrMa4HCJG4gQobzuRAqmBYm5vocJp2P9hcwLhrskSKPfBQDamB2bNUDgqxnrNihgndzTsUJookvpgbcDqZnNw",
  "key26": "5dikraNqzvfpqPBexGqW85eEvC3z54SDG8PmXHkz3CYx3cMhdrDyu9t9b5131c9dVPyqQYPpDhCv6gxcPKwqsvTu",
  "key27": "437MhEZbBsLoRfjEeLoy4VPXdZCk7orQeFi1jbkuu6FGaDP2iQrsJNTyWromstQVLHzQG9H89DN3EhKViVk58M8S",
  "key28": "3Ho8fdNEenmbXw2opJsTdJ1iz1N6cRovu2HXVHBGbY3kLAbUG9UaMEc1sTfZXmqdBw4mqUnFzLqwvLip1hPYjyb7",
  "key29": "Tfu7sc98Sd1x6btrN1bhcHwq8sf2NUzebtEdDTnUEqsUyR89Ku39ogk9mYseaoG9FoNusqKabhPsKgJjRHePbNi",
  "key30": "4zFjgbuyABvkFd72sMAgTTPbsw3Qur6w2bW4y7EQNeJjBKwK78hJmytRF9HiQJUwuXa9N517Cn1dKm5sHE5FATHL",
  "key31": "3aGkXJdWad8ZCQfasTqeHgvKb3pEtYdLavFC93hkqURdGE9gCMX24gyygLYwLAXdRYsTzhFCRLQ54anRoL3QnMpF",
  "key32": "2KyNCjWTLj5z8G2RDdyeWL8Peop3RbfeRNsXnKKCFmvimmeP7XZ9q8WSenmie1XePSv5kHFF7xpwcgzRPiy5gKed",
  "key33": "5MnWDMerJ7bHP91BeBL74nSvJgbRj6igm7DNE1F7DMmnmyQgo4TuUsoRwePMCQUtKpeMLvPhMiABc7F4oHLFjT4i",
  "key34": "5S28A1ovAN6mWMiU1KJHPKnpXqm2vYCywK2S39coDBcsnRKkUSidrjKLVw3u7jVoRiLLeeRQH74gUX8qhKezJ9Ax",
  "key35": "2qEkQ2nWjJdZGPJFngp58JJWDotSHj88TX8NhC6d1Pqm3XKuSz5BdXz8nhHd2wxLw4SqUHYG6eCjZ9Pugv6YqMP1",
  "key36": "v2vkqY3Ys4JeUJCSLFWfsJkABJL57Ytc39y8rD9oTCLNL5gEYNDvDk5c9VKkJjrtgngEbdKab2Ci3nuTGHDBnQE",
  "key37": "TvfnxgJna78LfzG442Q11J4ig1y9LeXVbmjasvH3NSUNehssAhUAVvzmyW77Ry4e5JxkjitLHrHQ6BCmqrHQuMX",
  "key38": "37RrHbgUbDn8mFT1nXX4pPmdXh9kEPxEdMALQsfe2skZ1oqSgrtwZT5ELjqttpkcPenf3YEQJsDXGhfjBQE46FvX",
  "key39": "4WyxVuEmrdBDZsULVQjxj4DnFopRozXjRVGxp65HpS5fvacjjrPcT499ii9XM3d3XmniMXoSjpL41DN5nhiQzimf",
  "key40": "5J51QaS2syz9qTUtQfApjPGu1Ss6GTb9CvGcYgEiekVS5VXwRf4gw2giZaavehdHo94AhJrSd3tZXhWdBviJ2vyf",
  "key41": "2ng9ymG4A16exhhSGLxpkZBpKRRbBa4y1nsnvsnUFiQty5tfCwGKSDZJ1zMFMP35ABJpVDFZyy5VEHYCAW4a9Wqq",
  "key42": "126PHT6mSs3QVSv4TWcQuPEQ9EkebPTnuvD923KQjmZTpRYXgiYqpGigTpj2qkx21AvuCvpiDRkqXAo6nYMwVPQw",
  "key43": "4o41QbXCfDwWrZiVFQZEXKtzporEucBvXsXaD31FQBo9jUK7g8c3wuLyYa5vfSruSYewbriq8iXM8d2ePV2YxmHj",
  "key44": "21VJGHsTdW3TDaQSXxjQq2ZB5YFeXduCMcMzNLXZM6uyeHUwVr7m3HxJW1r1HVR6CV2BnP3uvpSWkjVxUFfP1sk5",
  "key45": "2JJc2J9xj1KEk8jo4ddYbz3VWRB61bi6oAHbihyPcmj5JCgFsuNgDCAkXRWoGyyvtpTFGdaubpyPDTyJcjpSTMAQ"
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
