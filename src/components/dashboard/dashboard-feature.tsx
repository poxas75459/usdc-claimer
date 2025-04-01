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
    "2gWKkcL7MSQC4hKaxEvNpzCuwtmK3GdZr7EZ2mzrcsioS9nvQqpoii6seymYXGREnQJrNagJw8aKnXk6BVN7T3kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U2VHoEBpNpBpmbfmpEJwJPoZK1PP2h7entCHC3VEaGRTg9i9p75aJXBeZU83bT6mmxAKoCVVLM1g3NVmNUuMfAJ",
  "key1": "371g2WYiHPYBzCrwJKNX44GZ71vy7Y6U5X2UPREAUyR3SyFw1ENnQi13N7YDmRHRqDCjNUgSFzX4Z6Ry4ppcymU2",
  "key2": "4Za3Ak74V6e9Wqve2mouAiJADCr5k2bzKzXAGXtWPEv5SRxhBQpzbdA1NnWD7DaW76uY5GqkPqhpvixKbjooaJar",
  "key3": "2cPaZ2oxWP66TLcaxXPqLM9n3RhYsKKb1DgDQHv3ythonLP7iTHvcSUCdXHbnxRRJo1ENQevvbH4VHMkRAxmAcA4",
  "key4": "46fevB2r6agsWdrQxtVGMpYJaswD7JrhUEtNmpLFXARgcXshvduQH8ijoBy6H4Z7qN2dnLdrDUb9CwhA6uEEarLk",
  "key5": "59s5yS6tAYeHWkQnG7R447Raw1FgxCD9AmkcpPAqtqAs23aBd6oQcD7B7UbWVxYFqGMKF99ykH3PtvtCeajXNWup",
  "key6": "3B5FBgngrHBBL19HJkgarTn7ULjeAH23ZwdRVSWt16GFHcHqfCvVEwvmHvvBuhs3ndGZPTv5R37dzWtrMhTZX34t",
  "key7": "5j3YbMbwFCadwqZgE5LVvgMpCxCKH1TYvSz6cLpZP2oDM43T7HbS4z6wq5bsMfMUmarXrka9odb5CFp19XEY2vgt",
  "key8": "3Wq7scaZ29t12QR6geM24izFUTkFKz8RnixrJ4btTKfcHHFNn4YSjdAqcSbk6AJxsaJd95v6e61fzFLLnpv4nFnR",
  "key9": "4adAoJC9Vx1mydprFUVgo5b2KJMwd2YsqXoxCQGsPS8B9H7wxne8wv5X9Bs576h2NwrLV4jMoNsHWh7dPu4KNGKo",
  "key10": "2PV1hxiATT7YRNGEPyWbGVkNkZZDvTQHNuTYrkJ8xfMPUXYj3ManDPpjXZHUa3MSHzQnYGwoErHeuFQ2vGU2RFDv",
  "key11": "2yhWnJHtiSPDKkMviELJh6NztB6Zy39cyf68ouzpDLScypa7tGuMxkMpCgwUmiLYE4KgcuRBj1CY1KH4aUkpo1Xp",
  "key12": "4umBDvuEGHK6mHnNm6m2JvxK9QuvLosXtD7NxFL1LKsWnZyESYYi1eY5PCGyjsg2hZnhRY1BBcCzeaSMKp4x9NHQ",
  "key13": "2T44mBFb1vX5RXU7b9dEimWra4mtjDxQQR2hKMJ1MPNsPQCK92stAkxLegsDjXGVoh4DEvvQFs2ZLkt2kL7W2yaF",
  "key14": "3QU25x6HMXcNizPV2vp768e81wjPA6XvpwyHvCazByQp3ps4hT4b3CUtsBy5EYvhDEqpgHZBcXJCEJd5LYe8eVib",
  "key15": "5h18GevKAV8a2ARFjU89XzRCa7hTEEEbpVeAoUC9WyjiSd3Pgr8knx524HpcagnaDGqbsyddxafJVvGv6TcgFMEb",
  "key16": "S1h1yf47meWRCq9tnnFF4Djgt2YrHuPqtcXyGFzYUax2jubkSpeUcYkHc1oNV9d5pHzniPmKvvfwX9nQ31dgwEM",
  "key17": "3fHWi744Uqg4rx36jASKpLaTf6JKqtavA5Hfx1isCXT2fDyWsQYY7R8DZAFGBczknTmtcWTRjb1BprVc1NvtVPiK",
  "key18": "4BFRHvzt7kBweiNNHk9qg31QUux6aBkorBFt33kcde1rCLDczDbc7LicPz9HcJdJ3kQy5f35gQ2mdTQB52fTNMSS",
  "key19": "NCp6iW4MQuD1BF1GEnEpRYSLkG6DjSLBCiQhHfZRvCV42y6vp9STyhxRB9NRmf6FTUr21VCRHtiQiw8rfuKXBs8",
  "key20": "56ZTtfc1Uvf1UQqinHvEMNcU6hRM43KaXaj1G9KpjHQXgUvpiCbBxJ7qqBsBBvikysEYKZdvkk3cjUMNXa6aXsV",
  "key21": "2pRtGtuSHWcTnDp6UKwvCBi1Pc8SLfXvfHiFfDVUatK8PMR5TfGTt6sFviw8BBPwfR1CTbhh1s6zrDziwrTeTNSf",
  "key22": "4vLMQXmwQv6UdE4pWgwJuyMfuwYw2DNFQQWSSpuzUz7v84HuucnN4qryAE4dsfUMteHZptE4a1m6PobR44MowsyG",
  "key23": "3Hd5k852okV8hjKqPvs2gZxKbbRFisi5WLKVPsh3LDWijDV5Xvp7fuJ5Ge9XLFHzHa3BwU6hmhzXWnExgSxqhUNH",
  "key24": "5kwts256CuHUQJAWJzRqAGUEdotLoqNbt7RF6AHLFZHf9U6ipFS8y6UHjxtNE7ksbi6j9H9V7VzDqWzZjbZkWNy4",
  "key25": "5W51amBdq1CCNtFM92CqeiV1KJ4Hzo2cWuoQvLwa4k3mkzVQXbqJThhvpZAXqhauUCPq9g496yD9SiV4DiAox1qi",
  "key26": "YyHbYB6vCVXQX9A9UkDfjNs7NKr6UL2RPmVyXtwrnaKcALQncUfq6vBnowPBpQuRn5vkVezgP4AwTCGQ3VGvhDi",
  "key27": "3SKN2gTammKQcjyqDkcVdd6hjMG1AC6DprYtUNzii7v7dvmVnv8rBUJ2WoZuy8ph98PGbeDTWVwG4H2gDucazdDh",
  "key28": "5GgwAMi2LVyzZAQa2Us4BJ4jwKK2VNhSSS8yLnTjMePNMBPVKTg4xLe7qok2xUNahfPdYjMPZwK1uGn7DjyS4J2v",
  "key29": "2hSCws3bqribLXSnDbuPf739Ja6eeH8RjcooPn72tEjUk9NqKFuDFM5oH53GHFACbev1sAaRerbE7xb5q4QC2nJG",
  "key30": "3BRQs9ZMefY72GS3DbRdN1BQSpegXGEenyjd1t2A44v2sjqsCosGm3vw21XcHNLbZegZL8mydVmhnSDjSmd27VXh",
  "key31": "2c1yFmwkEPj18Ttd11szaiHCffpvfvhvxmFce5nnHs7YsDb87J2Qjn3eAcb25niRyLcjMte1EhyHAsxtaPgq2tqo",
  "key32": "3CT3B2ZvHbfxUybZ6dRdvaHGru1DUfvhgTZqSnS9pm2zdojtnWuauXCUN1Fm7anACyJXJ4yqgz2NUhJayCropdsq",
  "key33": "3EfZgWUSFrheAJRZR4SCrhjxzUWsbMgchRWDS2TAHPNnS9eQvWsWxxTipWMVF6DGcTozTCp8do7pFgyakMZ6CQKp",
  "key34": "3mVy1CtJUkacU3gNnYd2Nkp1xhwikTRZ6p1d6ua4i6AxY3SS46j7zpo8iW9CKoJQsYMQjadxZdbJvaUYcA6EYkgZ",
  "key35": "4vjRN83U9GWo81mrra64geUn4QXuqQH3tDZQnS9ojbBnzMn6r9TCZiBrVd8KgmM1fyB6ar7BnrVcsxzmrjwtFNyF",
  "key36": "6XhNypfBH4Av9ZNZXLTHETNXWSZqq45c1uzh4L514TQ3NG5ryT3Soe2HM89FWsw5gWoNDGMSHcMatYh8AM5eUki",
  "key37": "4J6byHgS1hsd3FikccqzwiynTpag1xN3zNkkx3q329jCoYRM7GQxmicUudeoXfVAwXMJBqdNCEcB5tUDJ2ZK2WpA",
  "key38": "2BtNnit7BQwanqbVabVJjA9WwHeYCSf5L4o9kvDFZA2ioLWzeszgi83tvLJk5SeQMfUR6UhFD9sxm12jXvn5VE83",
  "key39": "4LeHJzzP6gnaiML1xZraYRrzfjvx9yjxiDYE3oXGsoma8WrcyEJP24WdM4PNJpHkbumCEBxHhx2VEiy9EWYX8BbX",
  "key40": "2A6tGrGJPBUsVZwqV8pHkE14tWauoJ47CjmZX3UWZAuVxpCweQAgV4B77pNUjbMF1Z6dKysBWBGAeSTkrfkxaeVs",
  "key41": "2YtfeeoQcEuJwirqjNLraV5tTUiakroawW2SHXWzjYk19VEuMFA3NjRQz9sUjbcTgNCHdMwewAw8sZVYjywqUq35",
  "key42": "3ZEqAsx4Ju7HQiKBsgGgXUkmPakAM38JjzvVin9R4qAuq3pwn9p5QB8YKcEov8oT76FPi1nFHRz81R8hgDuCPKca",
  "key43": "NUWXnfEsPMRx967sB7P5NLey9bh7kXePQm1HRch7843Tcz3RWAZFoge4Xhyqd41wgY9Rbzy6nrbk5XJxX3YAxyF"
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
