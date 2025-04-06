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
    "5XEFoJKB6oDEMHoYoucBuChawXthKhQkvqJvXwa94XefDJwusCS6PoxR6JVH3M4BYJJq7AvUK2a6KLpTWFibZeTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r2d5KbkHwcjDH4Aexnqz8xzTWKWRo7R4qV6yaWQiC24vtrBu8qAFekDDEhhTL8Fw27UFx8TR8scGDMrGs3jJWTD",
  "key1": "FV6MCLLp7ymL6BdHb3qJ6BuEQ1WHkGbVBrwpGDATR44mzc148tyUdsrgmLTnW2zh7tXAh1wa4SGrQurrd2y1odP",
  "key2": "1z4NQQwaReTAqddPiMzVds1irBNrDfw6nFNR2cRCPv51yFhwd6EXUwheoK9dndMDP3mXkN6FDSt3SQfVopECqoA",
  "key3": "4spSv1EUYjYwSswqkZHWKhG7mC3mAZ7UBkbwVepp3Nh6d1Grs6CXDhmAPMG3C5TxufnfzA95vWVagT4xDp8M4h5o",
  "key4": "4PAAbnTvmeFoGkEA8GQKkYywTntyBgVMq45cpryaBjXJew2FeWziYQG48HoiSFiazacnjauHkmhXZc9Dgw9uYt7S",
  "key5": "5DeEJncSiKKHEfW69dFgnoCS5zZS4xpYBj9k4kNy9X6Ce7dnj313s6n8Mj9VCEKjYbFDx9dn28bv4iuwfTnC8t6Q",
  "key6": "38drGRjKqhWqu5R9nW4mo8CXyWU2bb89ZXhnsnWcnbFGUkbEvPHSM4dM25pSKdba8EMgjMpdYHzaZLdLQGKzpvxY",
  "key7": "Gr2eTnsM8mJWXnAAzeyQzZdpLtjaCxrHAFXiess9Yym3cYXm2i3wgHxSmNMvk3m4xE43nLEKhCZkbVtdJPwfQEP",
  "key8": "33ejCURSmGfmcrdfHnwuuTUmuEKsynfwonm8H699w8wNGdH6Yjpq6qXyeW96x2CM66jr5YeFTwgzb6EA77bZWeAn",
  "key9": "3JH2vZyiJtXoTaiBFXNr239Q3GZ3E3ofnveEnPUVk5KzgvRrDoTPsCdLkmV7KMc2gzW95G5vMNNkRvx5PZ5t6fTj",
  "key10": "4nwZbEQCQnoXbxWjy7Bz1XSinVWe91yS3GpRBTAR8VCnaWGELoJ8PJY6Mn2hy8KQCt2xpcc3Bx3xKzp485Ey9eJ8",
  "key11": "2GHWKChGsp3fvxtsrgZLhuaZV4JieDb87aMQtCShRzewYWMHpNAY99wMAyLqJiYLH9RJJun4T39pxB2rjPnMtbAX",
  "key12": "4curnH7dAirtVtaw59kh5rTxN2w1R6fPVWrUBPe4LVHrPMpd3VfXtjVseh7MvbR1Ru4rmzqXuD8wZbP9uog8b9Ch",
  "key13": "5o9wSk8HJsJ2wK53Rva3xYfemqMVKiG4E7hMG5n8vbWriVPSvxUW2eNoKgCYq9vRP4xrMU34p3TnsjKmV5UUgkfx",
  "key14": "2A5NfbLVg18LXMjQMeUddwmKg4Waxu52Qo2AtvQ9qv2QEKmEMy4jvLcEBWMzR84E7eeHVvaUZx15GRG2ESDmVf2q",
  "key15": "nZhbM6rafaVE2cJVfeq4xhqfcMDWb6dFhR8amYDvzqMvLHcqAsjxyVeMwTmTM9WmNJ5bVH4fA7MdvSfjT8LA59b",
  "key16": "52EKEWTNyqh3tzsRSRJTrmUFW6ZYF7cAkthKaH2DB1jKc16WgacnfknmMgoq8JjCM58nTnbUJEMjKwiFr82z3T2E",
  "key17": "2tRtwhDtzmU6J43gY2uGrgbrUabGnx2foBWmupcb32zu8pMmuW74wtnVBW9WxXUJ5bBAYpUPg1CPx8mmKzGymA7H",
  "key18": "3FyAKiVV2VrsY6ygqYiK1dknxmzrKtwdAz7hDBRiHTaE2LFTeGCCNKhb87QSqTGhcrJod9XTgGXjh7vsydE7DJcF",
  "key19": "3KQkj3W6YLYk63zMtK42BKUQSHRXrcB2AUXiqPopPyCCUiSwks7x4wnSQJd2J1ezhRhz2bgrzWL4EkLJgdtuUkf2",
  "key20": "5sSNTvXLfeFGypiFGXaGrzMsz9YmcWMDWAxz3tXzmDKVQC12r9oj58qMh4VDSXrzjcNnqkwBsNPppTQF9x5s5FMZ",
  "key21": "26wZiwyAkvn12DQPxQKrDou36W7TBdCQADv48ZUgbfwebTpP6L4VjZ3THTNiYUziU2yv3rQUZiGso4FtEigpVrmE",
  "key22": "3x5uhaHkr6jtde3iYEpu92FRJFuQcYZwNnEfc9JPsBQTJ6QJL8fVEkDydAHhH3R8PJTQhNnRJB84XxeJ5gRxiSCk",
  "key23": "52vunEPuX3ujaG3QefFEWpruVjXvEgDv8NwcTrCp1NzxDeaBaUnS8LHmJEseicfVKv7usNrgsz7wPyeMvjSs6Xrk",
  "key24": "4sc8SuJrB8o3VNrsdw2KAtg7ba5NMifQkG84GruRv2d8oRxaCxcMWPRwZiEmpuMYbz4EweA3wgLnSCDpUZsqqKTC",
  "key25": "aGzktxPy9obr1g1eaJYzALFKLdTBhSfLoS1HvRXBRz39EUBxyV98Y2RHveYhVetKVksDJwar82N5HudztiMSDxC",
  "key26": "5KUHgfCr8bHHkkLEqqs67db5znqfL8kpiqVYEgDpBLCBvgZh2dLr8RewciVgLqAT8DB5HFDeSvd67TZGryjDiPtQ",
  "key27": "61g7EVUZfdm8yVrvE9e2pJJ9DNZT5a5DSqQNuWT1QdZCvCm8kKarphwHEcgXfo1bHZ996NY7ZZBJCvZFAiFy8Zcq",
  "key28": "SZ9cjFpMQthRFqYCqHqfXZCBNzzZG668VLmygbqjiaoGXz2wkUVz7UbnM15Y5eGK8ZhTapj5VUSJ7v4YfZw4N6P",
  "key29": "3zAG9apy2pnSKKEk2q8P9ZP17Buix8o2Bis9b9vceZo62thQonyfJ2oESc9hJ237LWQEXkKRarqjCkZPsXAvZBR8",
  "key30": "223CQjjTGUFUrHeUif3y8QaUAMNbQV1XJzPZpwG4zcPZGLjVuFgkVjkc3tQMmkKc1LvkMZZm6Uqqb9WVT49nDj9V",
  "key31": "3PHgL7wriue9eaJPpjbDc1T8j9oMt21eu5x6K9T5zK6qSToyGs8Bf8p3TsuUk3rJWQU3GaWbkXxabhNudrGsf8r3",
  "key32": "3xCGyPKj9KTHA28Z9146tc99Z57WodnzrwA3AsMF84rQtCFnCfiT5SS3dNbB1yjvrdNijcL6T4ucnBvk6Hf3vr5H",
  "key33": "4ZERJQouAjT23pxN8R8SGk2FzivHmkoXoRRHRuYB7pVWvJW1wjzH6RrfzEHN2KQhW4kBTG9qgvxwozMMf4iaUKbZ",
  "key34": "4tzDCpGZrCLkCcQGNecwGVaU5AQY2uUEaMVcixJS6DCUapXawkA4BuYhGjdXN4aQ6ZDYpTsov7GAfF35EVqYFYDf",
  "key35": "4iUSNB9we2vGkqePvNWXn8A6zCgEJPwDFynrUV6PvwXdBBXPF6oZYf1jRwMz8qrmyxGgBSTN7PyWnY3QqtJs6ZFh",
  "key36": "2zwwaVzvQWDW6VAHE6v5jCKJMj6rzTGMh4PuH3h56i5TA1uZBwQ8n9RoGsRQybiaGbYqbrBwWcNPPVU9C1WRzfvX",
  "key37": "iK63qrwXGjUzYtuggW28yEiEip2isnqgASBsEQ5F3Tbev8YjqEfaS6c4mTfvaL22wUUjUcmHek5FVk7i9i2LwNw",
  "key38": "536LxQJ81GvWFRaNLxbQPRJryPpYzAYyfwc4w8TNkX7S1DUs3Wzw2HPd9heyB3opGXPVmRpJSNaoWGkrT8FcXwFF",
  "key39": "c656m1v8kyGzetxLLPH5BbTgdyNVKykaRo92rqNnG8rbxShrkYfV88CD6QajZwiNoxDJWPkfoyDe5jTW2bxg5dK",
  "key40": "4RZZwbC5AWSsZ1QRLigjqzwNQ8FmLepSSkztC32kVdZufBbnWFKYkkJNxJ3FVerVtbGrwXYJjbpuFoqzhF4QGrG1",
  "key41": "4T1wmYs5NUfhQhgY4xAMa8BoWZgbavpEnLmMS979K69mQB9kmHTJqKzP3wyPagdGfTZjY8a5U2X3T6jbqn51DQza",
  "key42": "5uMixVVSWhtWyizKzPg3vJgVxXzTfFPGwS2xxR8DgisAzaMwqfFczfS9VKodsyubEGpRNbFH2XXq2t2742LTTRUb",
  "key43": "4WG9V7FL8TZa2G8ci2pi8v8mKDrVyemjSksCUdCaFoTWxKL2BPDF7HwDBRuF91DxXD1YqQBmrknXQetbdvZyJSRi",
  "key44": "4pQQirbwcrXHRFh3FrxorWasjruE3JJ9xPtPK83Bc6oLqC4iy3Atn5wCF8KrvxqBSBSCaEX8mkMjwMqZKnkc9hB",
  "key45": "3TfWgrF79KK1zg9CwuseMFRwMjwwaZXSx2wuunUTmz6h6yGdJtjcV9ySXNbLbacxHF37ev3ADnK6ea3hYqo5jBTq",
  "key46": "5FFF7qZXsLLXLrLrZkpq9u7pfFFV9j9oMQh58audT7Ke3w52iRRptjDybzuLayGxk51foPRuC8RN75EcfyfuFQWu",
  "key47": "4GUEFQGf6tJ2d652F1AFBVDLPhScEbAANXtN7Amkn6ceDBUC8rzqhsFLutZboMW29wiGnEcLcPyBP36bFPLppcUg",
  "key48": "4RnNaTe9EHgUcWh2XNx5YdqGvTxMRs2owNo1Q4RGDH4ZYQMJ9yvBWsS7myXnMg2PqjxobhVHGndzCdCZTQzVNBer"
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
