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
    "5egV2kYrMqt6r7BEUcfin2BWnELoyqfkSwJ52mPKWEXk3cyWpHkYZCHU9ShSdaobDobjYAKg2syh4VPg88zSrsJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hduE8Qemvh9PC6MmAs9fo3fVXdvbHEPd9YSLYubdRU6M3bzKC7jBoByTBoTYwss6xtWNwD73GYsM5mCeMviBWdk",
  "key1": "46xhUudB2UUbpCmBPXLdcr9PveVdD1U6ovmFUsVzNbo9tNchnuWJiv8qp43WTxVJRxVYhC9FK6bnEqf3vqezo5My",
  "key2": "2myZ3yYU58XQxsLR3QDFQfZkY8yLavrBzD9RzZs3hjgkxyGVQGB9N6wsLZKbqcAvYytzx2G33d5ivPrzxyF9e95a",
  "key3": "2KCkVYziP6jGWcyzh3C1FcM1MehFnQ2tie1LZf8T9hYSGVs9zqAyeGiHx8dH1DU7tZhmBR3a1BDWDvRVGLHdWsBg",
  "key4": "36uQxghWRsavos2VfYDXTxR4wU2vvvmdadbN9rGwv5g5L14hfGdFdzYv1kqpSHt3yMsBJnfu2CCPERBHnW6ndZA",
  "key5": "55ovDHt2wKi5vgLWD5GUUrkhiCKQbFseyLag7CSRUCsxS3vUdykkCVonQWiafcjYehAoSormcbap3haFgADiQ5AR",
  "key6": "5WRTZwJ7fGC8PfJDJFyKGhWmq4jrJ2kWT6kKz6v9Gy6CNK8HbmVkGW1s22wboExGG4yw6wcGpdWcabxvD9tCrGia",
  "key7": "5se2dLjSR5ne3KnKCvLvXqezHQvwewGEx6dAmVfzqUVn52ysMuyt7funGvTEjYXaJ3X2XmNSSLFzRjzusxExF3dU",
  "key8": "itqa4HdqAxbY8wLuBrSdnGxKdiyXgEgvEAmAD4v9wQPX15WaaGCxVrKfoinezQvUxJy2EsKxKwvEUBfTAk5qecz",
  "key9": "um5TwQ9phimiq2hG7xTjCLVixqdyZ2KGYnqyLVP7VPAWFzZryTeAgR1MNntFw8HZ2Qb6bkgYxteJrN9FkfqBXxx",
  "key10": "2Qdr5WgJDatPfZSGfufn1SXWEHaJ5nZ6n1rGyi3YZVxNbi5vrE4T9FakzKjWTJ3HP3fP2DLyKdWbsSjUxcJJ6Xmf",
  "key11": "uGcabXqFpkqVEvminu1ddD3TPd27u8qa6rMvDU2GkHB21iW98Fa1CTLkX2fzWJRYWk6bJFoZQceb7onUuY9GZK5",
  "key12": "32VUmweoWbxdQHxpER1J63kbPn3XS6C9FG1uyaN49gjp4Tzq3rYpVtLzjzVHKZT9EgnesvXN9WVxYj5VbpwKGWRa",
  "key13": "3nYUwMtWdnP23AEbbcys1p1fNgjfHwWXyKqHGEoLPWenPXjzC535LMarvMGSfhH9cH8F3z5ZR84kEy4Wz8faGGdL",
  "key14": "5S9X4Q6c6nx5pDqmoWaJ1tGTpZiAYwXXV4YhoNgpVyh2iQ4CzAbxYRXL2PUjNm1gk8bwfBN8iHZkUYCyDhtHeJHK",
  "key15": "D23LVX7Yw8DMXJzPBEsweSeCnTQgd83MC4Tcimah72cjuxmd3DTHGvH3ARQoBFNEm9NnF2p96bhgykb6WD7WfRW",
  "key16": "37NP3hAbBUdq44HwnqEwBrT7Drni58zD9BcgBBgoqJwseV7UWDWQPJWwX2R4B8sjC2mRD2qTqbzUFktZRwqsceXP",
  "key17": "35y6URLbwHrcG5AYoWqvNsEri9dTR3XjUdCLDuCHzE8NK69vJuJBUpiMUwdBFtYrHU6C8FoKGD47zcygdVgvEfh2",
  "key18": "2Z2GfWbjzNQZ6q6su43b9UEfcoz9mMdZqMCQgwL9dSFhchvqMzs8Ek28MCe71sFPtZLC7Jc9d1oTYmKkmnNiEHXp",
  "key19": "5kwKmgzxs4nXPSFuby9NuqV5yfme6Wb6FZ8ygbMpwconnJYWraJtHokTamZW5fjkiNtgBVNCN7c9KfiXpL3MazdZ",
  "key20": "2Ry3eRnYtKXNjTZcA1hnJF7rFhSPYQi9cm6jza8KEiPcFDX7B6qm6QzNh7i6QF7yKtZW9ze87hT3xSFzUBB7ukS9",
  "key21": "3yhvEafoDg7NNyVJJbrcSDtDyDqECfT87eW2mKLt6WihRQZe7es3cL68eyG35Sh42eU5P5UQSuRCykUS3JUFULP1",
  "key22": "43nDFM4jRqfMha2ofi7zQ69jmBknsAbfbTAeQucNcyYUbceTL8hWVaYMxouJVX5j8KnLiE5RLYDuTvc7WDYHbVVX",
  "key23": "3Gmxk9Tw8dLgkyd55xMjzApvqRi6nMeSPoCCo8But17LcTGDZqJfStuGRv2teL5Vp5UgRozrtEJynMVHr3GToBn2",
  "key24": "3qy1G2vmeQe2QxUNC2ZWHscr7M5jRYyLFi4xReWmTf9vjYRKyYo1Jzp1AuRhz69bzFKC7JEVZtma9Q6LztHWnd9p",
  "key25": "hyMMH817mFVeU7jUPrZ3mAKWg1j7zGRqZa85qzcfMfAAidMhR26dro51XkGHHT2Jhf3jKFK7EpXsdJypwqSK4pd",
  "key26": "3EUBzP5LYZN8Z54MLDf66hi7AoBQZFWTdwXdVrVqHpa3dAjop3GMtsbhpNzHzTAV6diBtSvSPKV8BgTYUSozPWkX",
  "key27": "4Yo6TeeNBKudb6iZawFoDeEAx75eSsrP7Ddcw2GBsjVXaBq5vREZW1fuLa25TND8idwzya7wAsYmHCGQdYksZS9b",
  "key28": "MnxGFPKz9cN6meNwyLQpLxWay6T7DuPsgSHqdH9q8eR3MG3ij6Krn1D29MG67Wcj7eGXnnLTDr9Uj1dJ6iUFKCm",
  "key29": "5SnvzcmqdWbJ1XRmq4JoEXJMPE5jtpSFBTC5vhEpPHX8jehJ6DKqPcaC9LWtWqkdbc1yi6EC83gdpcza1rx1G2V8",
  "key30": "2Vo9nsY2ZT6NHBNYKL2TwxdgmJ6p3syjmKauvtDgnfXDRjXKsjR5jtNBHdwvzPkXSEKsPoqKt7E79PUjt52ECoGe",
  "key31": "2jLhPV1ynn9zCTPTcNa3KmWuQzJzxd1Gbuvvc6pg9nmSMfuwLNsgEfNxvc1JvpJgyViHuQpAxJHK2Jx3Y3afmHt4",
  "key32": "2xGmUWN9ZSBrxLeb1eupQ5iJ5LSpVnChchWXJWYQ4hRvDoc1Yd8TsQ9BcGSnMwDbQYEwHc4Adm47yDCSYpELE3U9",
  "key33": "5ugZ8VE9R1A14JKdZXFkA1pXu3tAaTsp1fxpY2Ex6ZZxDfrrDrCGfzU6VLjS3dB88ChYpk5co7oiH36jCReVqopB",
  "key34": "3mrTUDz7tGE9r98awKphUCGvmSnQypPkVGyp9gXb3DoEZVd6HiMS4h59g8HtiWqDL2t8eA9EFS83X2zhkk7cfu3A",
  "key35": "2kv3m7U2NbJR51neF7vYwAqRQwWvfAP3qMDmAtKQyviCfngTCTRndmnXsWeL8r9Frz3pCjqgy7V9qzDipxsxrjQp",
  "key36": "4sGsBq8nah5kgLecKr73T7AQhi3CGNyUKoQcpmjS8myQko5fDxKxwdoaX3CxPrGNLawWPH13DeboFN4ShfVpRAJ7",
  "key37": "4QhUXdndfsSG3E9H2ghW4AACACEpTT6LvHrfVUowyFHEeXMX16kEJLFmJpbrtMp4vgbMC2FRKpQY775NE4ecSi76",
  "key38": "WLfK3pn989WFXdUK1DXaPEjNV6snCR3kaXRCmyiFaHzMM2tHGF5nMRNSpUFK8DMVW4WfVPPPQp67rGAA7PT7aLN",
  "key39": "58yuJqG7EWdcrrrcKkyN7fT4p6fkuWiJuoh2mNmx1BB2VqRCtbJekTu5GcKTZiTGwF7WwU1DkhoGSCGLC9aH5K2H",
  "key40": "4gJSErHhM6nLNnYZSm7Wf5RXMGqeWPtudMv1ePQK1Zb1vcngKuEqYasuKUAeimxSSiXLQXcKhB1sLuB7VQiNbbD1",
  "key41": "3S2G13dLcirjprkwx5ZG9tztxUVMbPeZNAi1tmuzSTRGwckKpyQwnhGX7QEfdh6oM6eErv5Dxyv8dJ3UFwbqxwiZ"
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
