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
    "3qFCrYwjwLAirZy2Eqz6nfWaRx3KS5RM65t5FK6298GvDWo4XTRh7HtjSMZFZ5R9QYTYhadmsJpB1KLEFyRNasPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WnPAZ7TuSskJsiUFArppFxYNLcutkrY88uv41dMokA5dwk3wEjSbyxrRyUA8Tx8u2vfT7jK6TPcsmMJMjLP8GxE",
  "key1": "3Tu175wj4vwaRL7nmJhdQJtLu6mxufGvMPFNHMzPWzdiqnRZDVeJoxYgyTy3L687WCZ6eWaxERdSQADUxQH3DQhB",
  "key2": "3LZjhpuQiRDYUveGVM9UtrZh62zdAxrmnMNy2VsnekHU5cfbUosXsh8ekSiVk3ZzQRnqsH1ueMDUnQnDKGHR6k82",
  "key3": "3j5PQTL6JQYfX8dM5TVKKyb9gmtaRpDUv7G6HWTDuGUjhiVBJFkssgsyvvjLctGySySLWnYuPt5yN4Cw8FkukdB7",
  "key4": "2yevdcPSFAHqLUKW7ShVEU8oxjMDP9gVm4cF7b8KrDqfH7hwASUSFYLyTgB5Xe8NarXdqvyUvcg8kEsNrD4joppo",
  "key5": "5FHou8sNXAx6N7jnz2z45EFaKX1VSdP57TfYxUEdJurZnJ7PEx4HS2BKZUqtuAtmtwaKuQ8KW9vrwBcPtykmqKGP",
  "key6": "4hDsGth2sbPNfHfgYCG5YNs724mWtVqRYzk9Q536CjbqH3kdqL2fvqtHH8FjxJrMLtCBQHJTaYrhbG2tj3P5xik",
  "key7": "2LSXo7KEpn6qVxe9U4c2ashVeepcL4QsqU1a1tQdc1EaLDngmLmbYsfRurzdUYdxyUMdhSsxQ11JkdiwzNNU5XKe",
  "key8": "5xJkjTHkiw4SCxGWVeCmGVaaYKxRN68pGwuszYtNpiQZtgCGzJQ6SHZbBFEggjcudy7bfivX6zXPCsUDTtEdcQzi",
  "key9": "4QL5tGsFr4HMjmtcKmoK5YPqykgTqKpytyPmY3CPSSrmBBQ9mCjQgWvxcRJpi1wPDtxwEmTKqFoTGLgSp9Z4mgor",
  "key10": "3m9PNqKKa2urYAY6fHvCoeoLNgQqggzco33i182Du5QwHQoFsRSTga6tdMsbNa9oRcCgXmUVJU2wLsNwJt81qtAY",
  "key11": "5D4hM4TajWmdUBDuaa9NYYiaqfceciZs5rVATSL1ytiUbotN8fvE5tPhtuGMXhL3bZAtuvbiBXnkv5e8wqg8DrBb",
  "key12": "3TkQ7EdkhxCvwQcWRu2nNmWZiVtNrrxcnTVgpk8c4gTDbCBbPfXRA1J1HiN8bCghA6zCS6nnkC6osjGEgPYeYRTK",
  "key13": "t8ha2QFY4qyWhmKLXiYXcLgMyJcpkvWhN8FfyckbsfhahRxTGhG7A6TZDFfFchLnp7xQKLRwtxTx4X3ENkFzP1u",
  "key14": "3id3TdnAV2j7guyAGVQnpDNbPwHTZ4KYuPW2f9LuSmwnJaQ3iwiKpe4xshvdzUKoL1LGA3qDeuKvM849GnniffRv",
  "key15": "4HnwiLTzFzeP18oLHKg5G9NkaTVYNJKdUPjQkhabVATtenRMvwvq2TpTQRA6Wy32rhjUws5azvJoEs6sfCDoH8y7",
  "key16": "3b9TMLWbSbSD51FSfe4EWewcV6eHtFSWxRVqUMYcTTPZX4YfrU5ebBhDazkGXg3nUB4VvC7jnseUWDsZjCFrYXRi",
  "key17": "5qkCBAT5mPzfc1QoiTFbzc4VpXWrBroZB4PYtuXBwJtm5zJwsDX1StWcWGTTch9N43BS23W2HQYYBb1bXMsMrNQu",
  "key18": "2DoaR9QMn2naPpYnCo6qVEuKn2nrQaKMvHqeDovK2yurfBdfm3v7Pr4jHSpqDcUpcCosLpqcnVgToAdHHNYEtRyD",
  "key19": "F4VMnis5W5pLaECY3NxF8xPday3AVBcqyxrRyXFY4LxA9FrJgjAbnjJvgN1PtyEmJ4eVBEMFibSoKMTsWxkH8td",
  "key20": "3phCS1wNSrTefF8x7Sw9XAjQgskufb9N4w1m8h4rzkTSaFbgN2EZ98uUqbY6KXAB1afe5Dw4RAe8mVhk87zsZpKL",
  "key21": "3epFCFjdDwhbXySQ513wcEPP14mc3xYSmfcDdasQsYCrdvFiYXfreqES4wTN1FLHjnwnJyTksL3Q7mDrxzV7GT6",
  "key22": "5x2ge6B5sRCpLQdZwJTNCgW3tf3wErE4LPA7ok61zjoJRPVTU8TQ8GiYVZXx6gAKku3GzT8KmZGrv5xuwjeJzKmH",
  "key23": "cEhpjWE4yoefnskzyMQzJLXaFXs9SRTUgRVu7AU7Ghw4tHQaPThijC7pLqvZe4EF3EDWD4vy7F8opLsytGAEYdC",
  "key24": "5bKKMXmiiWZnC3DyMMvKShUUVK5ksdHuxrcsiEgT6GsbQYQuUWbtjvGBEFNzjUWQSkmbJFaXWh33ChhUGuKptVCr",
  "key25": "EHJHcx5sbDxPmkSUEPfWpdqMuySiRBrqCyvZf2bgDWRi7c4C3TNxg47ebf6NXsaJDUV2Wotp6mAeVYGZNqfSM7b",
  "key26": "32SEAXz999RMzMjYMEsFrarTiP9bJxHznKSryAqePsHDugkxQ25M2RzuHLtUee2ALquBb97VZtTeXjmxKSPD8Ley",
  "key27": "4X9rUbbdtUBX6X9S4zeQmsGcYqnLLJjpyApvMPwuvTSPuJp2N7ESUrbA3KfNm1i1zWLTMbPr7wfLfKRPvZbCyBC8",
  "key28": "3iD9SXUg7Be4DVKE8e7cusUqs5rUeGXFwUY4pd6JjNeyV19jgxzbcBA634hj5i4gDF76Woaky5zWcoVz1pivNKXi",
  "key29": "5bQgasVLUM2PRZ8Bk7ZVEuJidJmo25LvywNu2m3ABksvcFCDAipV1U6JzFXtonZisQicxs7CmX6v5zyiRPije5cW",
  "key30": "3xkgMZRwsdK3h772SjPLPESu11X4pekFKpbhjXVbkAbYuncq5t5eoMgpDUyupVTqdQ73YwhwTpEb4hC7E24Dfezf",
  "key31": "b2FVaZkLg989Ru359pMSfrF5Q7Hmn1SsCiBmtDXW7tftgdQC4gS6dnwaDDkk1LgjdT4uVDThYikijJarFXc4FxP"
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
