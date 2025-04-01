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
    "Vh6dzQPWwkYN6CZAiBGhB3YkTgMhwgSte3m6nwYG5CwLGrEhAWAFWRhTVw4mq5fJmaGTRJ8ApfB8KErcUuUEvQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67A1DcJ1uQffdayct2RpGubjKRC2nPQxQpKbKTd2w1fwjHoWmsNE77jtwFCuirYUXp1xoeHuxwFhQE27kgxPmiTj",
  "key1": "4irNYmXNL5huFS19Jk5swALdn7pWuS8i8THZREQb6wwd3PaUG39K2JeTRNA4Ue8GW5jPfJBG7DAcbvX8AUUA1cbp",
  "key2": "2tw4STvndVTXCesJQvgDdJDCcRvLMMc7Y5kt9bn2DZHYXnetpeFMCDqfT9q7enbkewJexKdHBybFwRRDuc9M3gKq",
  "key3": "a76T4hz8TQNv8DYTGSnw3ZAvpHuyDeGySgQAsN5UTCSgDfBcAa2tX5pvbTZ8oQzoLJtXZUQN5txkbaxnscShJX8",
  "key4": "4p37tdHowhhwiAm7pJrPQchmGaC2Gi5XZTX4Lgyq7Wkb7yhrWrUZNYQbNA4kYPyn2PJ9HLj3urPBnoGwdHY2SUZy",
  "key5": "62pVDCavwxbMnMsifWTNdNyMsN5Dsoj8pX8ncmiScKRVuNBtNbueoQcA6LdshUeF4EFsfEFvi7HizQBjxrxyurc4",
  "key6": "3Ji18fNc8vM6f94ZkDeGMoWKrwNWgw5yHSdty1zgJZGUuTnciKbsVbL1bGg5wPE7AGJrZrsC1YnXtYLjCZMsYsa7",
  "key7": "TdXhTQtM8Sj7EVVESnW6ETfBacByfF3ecSrYbrvRFLpXvx9cxfQUAgVEAGN12mEKgwtRcVgvfb7gchvbAi4yknF",
  "key8": "4UWN8msGoeFiau3DhY2JWDDgHoKVxEMQmmiYkXFbbeyPsNVL2Q6c8Qrr2wrSukdyKXi9jxK5MRX1mg6jxgFMeA8f",
  "key9": "48WEEpBqGv13YcbovjP7XK6Q3wtrLrauvoh7E9AVi5jHbVd9eJQtvFiMic7MmCHX35ENRdqPjpecyNg26tYTzh5P",
  "key10": "4yrSH2WSwiQsRmqb7uB5zyHh1NzvZbs7rqYb97FCRYwZ3YoA3q9HtCvKJaCmDaieJdxKYrJiF4aTrqQhc8Twm7Jq",
  "key11": "SiKGubHqGkDEGUWujxC7NbRuK9jQq6aMC3yDe41rnPgHqcWDzhSHhZ5SdS3jxQ6UQz8K3DhTakLqvNBozAXqWHC",
  "key12": "3rhuSCEuKJxa6Hip3DFbyb3dtinFmZphaLYN2Roe7T2cRwfPoy5xK8RJ3iqmnRhPtHn29bYvB6HYU6ofB1TFH2Vp",
  "key13": "4KJSNFfEJDxLtdfkidBaN1FrJMxY43cJtGje62jj4aoDEGHsHP2e7XhXWB5TeGpQpzmTP4dg6YZbLkwn9jDr1ftq",
  "key14": "5bFNCZ8vpShd3eDMiQrAKh7Utt3cxz6MEXnaR9bHgbHh3tPg8sBFJSVWHyUrHM7gDQF3bTuWwvxS5SAsRipLTqs7",
  "key15": "sTzbnKD1QNENoUZ23fUq9nXshR5RtsnjsxxixQY6jPbgrQddrDbmKUccDCdS9YicJP16uUtp1RhfmFFrK5koJjZ",
  "key16": "2NSjgY4JMKApv5S8YMnGBCpoUe8SmmMpjDtJn4jNYAsETw3LPMdVo98ndrXMZ9Z4qJpCBnWESeXRe1PKWmPHXfHt",
  "key17": "3qCzm8LYVLFyw9Dd1WVAkoaCiKY45AZmspT21CzbeCN9RuQrQRyF8LM2f8fTJwT4ewZpeiHRDpa7Dc4BJ1hTFGGb",
  "key18": "4nN8ESqMa4DibNAscDykLpQfsMUS1LCZQj53GX4X61qvDnmkYqsdDec6p2d6Xn6pWw3g7yqRyYxDVNYWvrydZLaN",
  "key19": "3K2vUoWabXZhnUnELskiuiW7Hw4kWepZ5K1mHa5ZRjK4o2aBjRq7ZEMqvXoBiGjuhmWJafN21dAPixeEQp3WgrSf",
  "key20": "sjR4PJwXYgZRbTD7tbcfpUx1hQbLLoHp3hD1DcXRwzcZrMHuDVy1MenErPEhYhuV1uNFsXNjn9TUQXQ8BJT9Rzp",
  "key21": "3294dw67Jpa9oHYhDSNYeTUjsweqfKCi5PKJnswydvijpMzzK9bY8DegQeGDu4xEJCbxj5t6jCwRWTGroPwJjmx4",
  "key22": "4U1YVEKQ8NCbhTQ8dwBdcZzga1hQZjJaHfpFCUVRzXC2x2W4JLzTse3nCNYFmrLcW3Cbo5Lo9E7pUPWZ8jwsy2qJ",
  "key23": "3tRE2NimST2dtKiTLURxdsAktxqKPXRawNTfcR9yWHa2kpJ6ZisCzcArmXkJREQcK2yePQP95Za7JaWyEZERNNzx",
  "key24": "3A8hoWrtj2Zz1xuyjGuhzqc1PnpK6zArLG761QebPGCjYGy2YJoVCaYnPy2S194Pucae1pUqvMts28gAoK9VRxyb",
  "key25": "49MeXYwNSGMQZgYppQzZZ6UyJbL3hFrs6SvP5XWT4dLFn4conuVRKs6sx7fXjd4T4kdRxJCAfcc667UVPY4Ekb9Q",
  "key26": "2Y4KbXGpWR3p7atcmKKTDn6aScLL4eX93L6zfMauVBLgVxT5vw3NzNKeRcJLKJ86re5C6ApyZntTxDxEGW8wDheD",
  "key27": "4DLwW83DY5FX8wcUv3Z3NnQ1MhTxKDv1aSCUVNJ7Cu231u3SQJr4GLxNa86tQXJp3zg9DQc4kS9DyfX7Rx1eRwnX",
  "key28": "JsLufW2nvjUwZTSVptasoTXCWP8G2cCzqAZgF9VvW12FsEVf4UQRh6z232TNCTKuna88Q62RtLt9G7GeLpJd23C",
  "key29": "319GEg2RzVATQJNendubF6A1yeyNZuUCgi1Ek4J2mCCS41Dt2odaD8CVPu8fSe8AGnDjpaKmmfj4Cyt4RrswmKL7",
  "key30": "qPiNGHDpHS2kkGyMiPQaHjYUGuF1JCr7DcN5iPD4pLx3fMpJSpL9MrQDJQX34oAfTTWYurRJEnz7K3WHKb7hxSp",
  "key31": "kxuQbCvepcAEQoxBS5pxx2TE389ua38UfbywyLnY5m3nfcDaTeJwMNa4kLA8mbn4cKvrv6Yweno8VQRxgs4Ayfm",
  "key32": "2KMrqGGwSMy32BTeHhWYeRZfGdCJyfzmoLmouXkg4Qj7CCJbAp3v263XWqwwnEyLMGVrXmkRP38e1c49CfpXpzCB"
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
