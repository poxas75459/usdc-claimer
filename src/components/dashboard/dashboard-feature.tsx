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
    "ZsB1k3H2BfeubCF67HUYwyrNWjNiNRGhGWcECFJcSZc5AHoWVp3eBBZg2ZRZWWk8NNNoqvKS3mRiAQ4rHDLYBR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F597qqz9NFExhQMt1JhWuosWZRHe7hquSgrxHapku66mk4uj2ZE17f3vWBBQSizbAtAVunMHLAKcm75S3azwPTs",
  "key1": "2V5HbuUoZh8mWVcQCfC7UfQr11hinPGCZ1tJ44ifUurdACMXLoGQsdqEBXyirQ145LV2JvsyrBu1iEeTtzAfbceh",
  "key2": "366KNBjrKqrkDTbZXpZntLYdUSUM4ZYondYdbQ9hFzCffz5LN7Z9sKwVkW4sdat4MV6Zb8ZmFatKEPwcrxMU344K",
  "key3": "3vKANwgpiMqcj67J4a8W1rDXxWgiFvc2emy1tt5c2va7HqKp9R7LdB9ta7njUZ7r9hACYKWNiZXVbtkiUz28oDG8",
  "key4": "qXynwmPcxkAX3Wp5KJeadC9r53HA9Cv31CpoCSd9LwiJmfccPvtLaixi7cn712uTeLAaj1TXCWzwgFBtGoFRVki",
  "key5": "3KoLPmFHqvxq91KsXKCXPqo6jELfBKodM4ufvNzxRr39y7HrY9ggHstdThKmLzC14u1F3gfJVD1n5hPwmvAmduYx",
  "key6": "4gQPGEBFsAwPeWKQBMLT5AgRtKpUTco1k9vbvFB6WuT385hvkMks5xRBnJqSVfnYyceEgHhvBXg63rVGhVde7KLM",
  "key7": "5erHixwtBdEUDnK8759bW34admA2MF1qKFoHJ4AbCaCL4JfhYB6WQ4SJpeqYCLtuYZ9YeJZh2sAp3VHhyXtGQRt1",
  "key8": "4YXHQ4TpdZpJ5mJzM2u2cNRs2zvZ9Qqu7TAeo4Wkxdsj7EaaXEF4ciC8fGk4arowrZaCwx31aCTocHXAptVerKe4",
  "key9": "27f6hhoZZimHbcDshcHkreyQzxc6GDc8mSY2JK6PZt1aVWVFQKmaGC2daueArxEC3dFQw8sq4T7ryKLP71KfQghr",
  "key10": "5oS6ksQ9z6UQYiXcM8exU5ndSpcRB3AawFCFVBjc5Y2KDNi6bvMRKDEqaNAHNjWs6N8ercV5EDG3dS51G8XH49Gi",
  "key11": "2hE6SHDfrTNfmjK1CW67Abi3baFDAPHWdm12Rejmkn3uKH7QELMXiWBdNBdQKVaBoN6uGvXhDjckyN9AcFTbqTEU",
  "key12": "46vMcGXkbXwckZFH6nxndDcNP5ybSH19HzQeaY2n5XVXbwd6cxEp9MVAGsb8vVs5Q3sJMBKNFvT3AmWkwwnkybNc",
  "key13": "3CRaqGAasrFosDDVstg6KKPjg882BeuQchrgN69HuzxPh2S4HoZQcDcis8QnPVXkB6d9737nRHF2waxUHPbDFViX",
  "key14": "253Lv9dRkP21PsZPcKG2ohgM5K1Trr3MqBMP6saD1zKopL1T6bFPXkaCCfwYnx6FjYdaJEsa1uSiW3sZXRKGeWqe",
  "key15": "2cP2GKf5r26J9qP1fKz5gESrFQT4bb7QuVqaS8XpUkbbuZfsGyaNmicJYwo9tumi5Pp6mhQP5vk6iAKSesNCJnud",
  "key16": "5AZFoVHA83FAEUmTCtBgRRy9JCQWDAmcjpQTrMCGhv9R7iHc55ckLY3ww9PW4daw2VEsXu3pc63eE1CDy3ZRp3nj",
  "key17": "2PTmfNXcPDQUkEWk6Uxi83XzN3hdvGKKkGwK6f4FJXhvxBxH932FCsmnDzdTXyUwKamkbTZsGNBeDibpNNZnyy4Z",
  "key18": "5p3h8YDTrNgWRkLcaWUsWBY9EFxya35aAAdsYATKNkBDTTJoUod73zUHjihZskXx9iL4A7nmjPeq9W96kpxb2yGx",
  "key19": "5Pkox5iamucWfagXVhrAr1q5UH3RbLPJp8FLF888TLfT3xjs8jP88ejHwUvJMU5YUrQS2Eb9ezBCfKnc8iEfxwD3",
  "key20": "TPA1uxigM9MPLYY5qzW4ar49LjYZy44ezSFaRpB4Pk87pHMr8iPDqRFaayYv3dvsN1k3qCoHDv6Je5dq4pAMXft",
  "key21": "2GB9azRHAhjc31hRqByWgyUZKyQVkGjiW5SLVm1EbvQEA1LpyrBmoXtAq7U8PzPKroH5cBSNa6M46CBXZJ5hvfbw",
  "key22": "5x5XFMm8HhZbi7azXiXF2BAoTbfamrtG6R7c6JpV7khZyz3jY7Qt7SHgY9Rs9sJpwwzguQb53iy4w4PiXZz7Boos",
  "key23": "3Fe3khDeGRGiwvDC3UCv44hTrKj3bCjiidYLMknWBBYEE47QD3Sieru7gzqq55pah1jFWcvW8oUwxP2GTrpohwmw",
  "key24": "KjDvmjB1BgLQYtjXkYbp2Cr29a9BW4GWNvCebVggDM7LoGqgJCoPqWpi2sFFWa6qn2yfuMcbAQ5zNiUmub2z1NC",
  "key25": "3ssrYTF5MuewPz5ZQ2tGGyHEDxvrMDSgrTrd8CvCgkKjxa9YH46hCKBGQWnynP9tkkkjDbYTFLXnHnBMZaaKXGuc",
  "key26": "46e9AbG1Hi1E36nw5WuWgLSrCDTLi6X5LnT7gDDFQijU6uyQymPrpw6wEwtrYwjtqQgcTcXFCG9pycwFGhRX7zGL",
  "key27": "5eRmtm4aP6mnTYdura5uDFGTjrZEJ3s4hWZKkUhdmBFBvmqdn1CuoWsi9BhZYVrCLdLLafhHj3BfPoWWwQSqC5o7",
  "key28": "58gkuLqqFK9T67DfqdxEAuYxN7Ldcr4hMytwjAa1AfLP7S9KRRwZB4itBRmFXuHZGGMRc4iyX5gC9mwL8yUpc28J",
  "key29": "2ivfNhBwqD8GrMvtRdh7JXDWR6wsY9YkFYxscL7KKBVB1EH57okKLHxeayiwv4qgq7D3it9VMpRDNmZffriScWUJ",
  "key30": "3SXV5mQtgDN5qawYa8wYNNdKG7UvkmjThCKWU6R7JQB1MDa5tfjXWvbJdCSTFHD2cBargBwSugjjSfqXJHYrR7vU",
  "key31": "2ScebVe8NYk8L7MB8nqVW5p8diQHQ57HB2hMRwX1pZLjmUKHrf14ywCh7eHSHx2DswM8XXbwjv1g1wxBwcQ7wBj7",
  "key32": "3stWB6QW5zYSn1daZuUCN1MVgRdN3TwemCgYoTe3AwjduSPHfv42Ma46byxKekiX2ETPj9EQoNuJu4FahkVNGirK",
  "key33": "5zfBLcmQpPhVUvcUZ5ca5KYb8aNT58YnXTf4PvMqWspNJS9bBFHBs4HZv9F9cpHrDDX9C7Sf2skSccqRQ9Pm4o9V",
  "key34": "2p529wftHYpk9ugEQErALxwyNsiQ8s34eu8MTzhMMeGwNBv1HxDP3LcHZ35WUVFnsZkQM8HwJzPYzFWy4wLmKDYJ",
  "key35": "3SPotMmoMkBrDqyCK5jfAuxw9u6kdHXQvAvnsTUYZK38y1d8Hui4wMhdmf8Y8Vhg1GejNXaRM1qEf91i7PNQjRME",
  "key36": "4gndJuSREupUVtZz8dsp8hVANzCknZ8qEkZS8kPyktxfWnTLVdyEhmTw1pMBeX3uPx1Vjj8acn2aDRCQByjzpMkp",
  "key37": "3vTqweEN7JsSMj3JeUUduLHHtrqAR1RCS9aiatzeS3RHymKMWAPhP1Hi7EcEJFdR1EiMnvvqVkunSFGHxpPiGAay",
  "key38": "4pVaWew4setEeaSTrxhX8Kz8xKtJEsHxb9Y3etsprNzSaTdbg2kGyf2A9kCDLHwwRzu6j6W238z9ZNt2d4dFo3GP",
  "key39": "4nDz6uAsyfpn9AkhyYbSc1ZfkbM5peUxZVDXvhqP52GFhKQpehZZk6gd8fUFNmJW4CnoPwTfYP3pshiT8ne8mSi1",
  "key40": "3SUMEvPGSkibQFnCtXKvP1rovTgss5Vt6rPPi6UHyjpmKBPhjsvrv2RedeFKqiuChRj35yrPd7bf6Rxe7oWY9vLs",
  "key41": "3gaEXP7PPF2ChLNB3zuoBfbGSVgCvo2kt6HAwiDSVRrvTivdp4DsqXr9mQ1njEiiEfWao5wPWWtuMwCB6JHXtKir",
  "key42": "5iwwVHeTvwRUxS4RU6bBBTiKJSdGNH4r38Lj5GLBaXs2C5a2zuxmm4EAJkQotAeACS5Ah8dNHUAmxNzZBbYUEPCR",
  "key43": "EzD2Sx13S2cfVAjrXjGzsKDNxiRUM3PFwGVFvdZ2pTpbJRnjMxcEXQrC4ZTkBgpgsEqN7YRyobmKEjGHqqav8gg",
  "key44": "Dr9BiJKdshqrmfdxLQGHa5fXb9wEbvE8KzjYmQUtuFGfnzu1TRnnMJojTKFoF67yeSf9yboDYhMLxGpayiLHWTt",
  "key45": "4cRpj4MnpuXSPFk8o2kSTUMm8VHxmqoTgnzS59UyWXvSTnY7u5bDYpTP6w6oXytvhT2ULY8XxBkCxLE6Bs6uoxGf",
  "key46": "3v2ypR3TW4yRD4CiYpTdc1QxuEtTu5cAUQvi56AZwvxsNZFdPeKNnjdAdwcp1a6xnMCV1sNVi3jWqKK2CqqBN5zg",
  "key47": "4XS7U9f2dWPhXCeCyi4JaXujmRy8etmwkCzybABCK6DqnFehB43wDVC24Q54ytDxMya6tUzCcGmVwyWf3Ltnhwa1",
  "key48": "22xUP1CRnghdfGy53FpZsA8mJMM1H231xi8LjJKwdkyTcwiSU1pM3F4pspUSi9KbGMpjbmYSfzfjscfuhGWxYfNS",
  "key49": "2JCR4A9tT3hZtfdfdzLDEoeihAqBxJ2X5vXZPS3TEQEdqrNbtWmaxFFYK4NavQ5BShjzKngLiqYfFoca5chpcMfM"
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
