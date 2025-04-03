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
    "5VuMXVxfGuFt8t5jMPwX4JeY2fU3cAN4QRXmoHSddAanuUKeqPPL7dfZrw7bgGRXnavUdH8WpoZ7HhvRab1nex7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ZVu9jyGHn8sGu3eoBTCVcXkjBFRhVq4ug5RcKdGydVKboDtf4xLgCNmk1q5vVyRgnRcfJJ7WKdChgY9J78U9mL",
  "key1": "5C2vzpmvj7MfbqS2pKdoUf1kHPrG3sif74CTs1zjhLrfh5qEnUKaNfWXX7jSN9KLE1ACFB9Vue9KC92i7DdQPcN5",
  "key2": "5BhAePWfahECjLimBhQfJmwEb8PN6Rn4UuWFcNjShhwNxiperKfv6HdZAmjt6XkupRQVAQcBTDMhNGTWLdzHSNVm",
  "key3": "2rjE4zNVqVrYjtyLWCfaD8TR3xr6MxwNVxuMm5kyndtfXgPF4Pk6s3oCJ57NaKcdw3qvFXpGpMGifHtxbt24K8LR",
  "key4": "556psUymyx7hmdyQXYq98oZe6fs2Dp2vf8nkR8W7f1wDAKgvekZARV9zwgv9GcZBCZ5iebR4f3GtTz5tVncFa3u2",
  "key5": "LtoDpVCa2fKZSKK7XqDxG2FvuPxk1wPmyWA8gR5mHN3RF2382g4fNPgUVPaTMBSMv6irE99AZvGSahkAG6erpMx",
  "key6": "5TW1LfRamkvRPQECsUyDRgoYfkqbczXkvGk7eJhrLqvmjHudfk1dP7A4fMgCCDB5hFRJBmVvyqLJz45WuKPjVqbD",
  "key7": "365DPvVm7X9uW6P4gc2SFiJUoBKnsrMLJVhd4Wr5X9JkF9tzbKxwLDZukHQxAYjhhxFxE6Dca29iUkdRvjzmg9x6",
  "key8": "3bVJqk1aXxRv2EDZgXZySLPdL6jbfbKyMav4shwHFVtXuBwxERmWTH6pdArh7kKTgAEeSieKPBttXbfikAcXbSfV",
  "key9": "4UzY2yScyKL7n5fZdnjTN7xgfadRDFt1F2Vc6vhW548KsyvYaTc5GuHy3zqY8uVvcZo9rtKyTpniGcs4qRBeHsyF",
  "key10": "4tN8gh1pdBDrf2Scu8X5CDZ8EbFvWKjDnrNRG76gRt6uN8qDJuvQxAoNntrLdyYvaMAQ7Bz813rHkdavgxWmgveZ",
  "key11": "2Fw9RkQNrZqzAb8w7xtxdsS6WQU5Wdfy4F3qarzHkRV1pMJJuUTbLyPnozAEkS5aiibJzJfbRoeEdT9f74HNzDiq",
  "key12": "2Upwe6REwZxfqNDPpYC9azDqUoDPBxpu55EZbHgLHXPzuH1RU4bq15vX7BMN4kPXFk4xzVZQmMG83GBGe5QWSXxf",
  "key13": "2nBNQhXXqsTozCVTMXo7NzShxqgBwzkRLWzNq72FbWuqpdbGLEWe25oJgZEu7rE53VT6MH4nWbihHbgQYdZ2XUWX",
  "key14": "2UwnA2NKoMj1FKuKVxVjUivJ8axkzmoEQ4orvTJUPKim6XDxs9aKtqThxgkCzy6xtBBXYhTPwoSy9R327iaSkJyT",
  "key15": "5PLr5iesyQjgxvfrwV8hsJ6CProwKKkCzAyV2FY2sZ992MFuf25DKDb2uM44AiqKCqvwPequ9vH4CUYiYsvzR7Tg",
  "key16": "5W6iTx5Jo17XtoT2SSNdvgwwqPy4b3CRwLqeL34Y9hysM9od5iGtuF4bdYhUzH3jDwNLYV6PNT4wGSnfeNg2sCzR",
  "key17": "37rTkm6JK3BW5i6hTQdV97MUvjWiZu66io7ZUfJDHqA9VRWS4ZrWnPKe3LGeKpb7uuhLbVDAsgSTgYeB4VLAwZJB",
  "key18": "2AcJ8UQhB7JkpU8ppYL82m8HraWKnJzkfwzL5dthzh5JWFHZKtJDf8jagiy9BPswk9h323vB5kmDA3znyKBE6oYv",
  "key19": "WHfnruyr9a2DDypv7taJfrC4UnRWhxQdN6EwNVhN3CqabEXuMAjUWUrc4MU4F32Pv1tBNa1rqPrecJv1x4kbWNH",
  "key20": "4DA8mwbCZjFJ1N6DcFecn3FE3zToWo4Za7H45bktrPwcr6my4ERB36FmFsVENB5QVQ8cPAsJF5M4fMgWEBzVAetZ",
  "key21": "5YMGhKxvaeztyh83XvQyuFnuubihURYae74QT3u4X6n2ACC6EVMNq4A1U8gzS6fK4oYS4LR7V8T5NvBbmBEsxoRf",
  "key22": "2HYi7WhqzU3NL92CLNAmmFTjsukL2uBaYPToiro389CgJrenGYJpM3kmVWcau1TfsHFLxkEUsafzZT37iB3NYCnp",
  "key23": "5bmNSLowipae4wC1bBUBWzKe5FHjsz4Nw6mKByAPvFoFgrtRodvbbG8A2sESXBN5fXxwnvHgs8F8rwKt6ZwE5vEQ",
  "key24": "3YVCyApPDTBGGE8C9b1q5kpPFWvKgFoLtLhAgaihrnmpZ94u2omLAacCyX83ZRMsX9H2iU33itKiyuwPAfC2sTSy",
  "key25": "29kHMEMdsPYB1QE7ncoMwYcUW84fbHu55t82TfGoygC69euDf2RjFWZ5X2SsALnX13oReiqbtp1E4DCBJ1MNcHYW",
  "key26": "7WgLJz13MDtQREXpyfpaH5MRSnhBpPL3zVVdpKLPTkS3u3AqQiar5kiFmCGK3jA1KyLcPmzfxxUKRgoeyijdpE1",
  "key27": "5E2hVG3x3mdDmX16RXmUUz313PEo3AMF35p8MhfK3USK7yMuAoeSozeJTNBVc8Urcgu4MAtcV2oRK2aZc62EFnbH",
  "key28": "tA8hs9R8VHUBDRLqdhZ16CUV7xD4pmTwtLgaFktbaQbh2hh5VeuGNMwRqThCBf7zGkngeLhRrTSnHD8vMvnGs4P",
  "key29": "2WFLhAeRiXwiXycdsWCdhFP7nEwv47aTwJDJMvqYAbq4QWgn5CxjAYjbQeEkB926jSknFeB4kgJqssLqDs6QM5xQ",
  "key30": "5XGHDPUcWMWAbmv4Yxok8ugceyn2SGfMvyAv7XPBaJkrABP2UoTnVr82v7JD529htCPANySKyH52PuA3dSG2jPRi",
  "key31": "2yFibpnxfbCT6uzEMefaBmsQb8nnkenMmCLzfT7bZp97RXbPdsJaZKnphhNHqLWAbMYm3Qt1C9EExKFkkeKcnzfc",
  "key32": "Y54QVwgqKaEaVoiRSFCotbTu2pUzgpaFtJMrEpXEVHcKZHdFSWbqt9XSFthhQkpa59z5kxrfc1dwBiJnC1GMg98",
  "key33": "2NVY4kMD9enyqX5h7a2L5aqR4Dy7XPJb61ey5oxb9xozZcJdEXtxBn2Wcw9cc7Tdj2QALC9WpLwZf3JKQbHfUM8Q",
  "key34": "3poFjaQwqVeub4Cn1VQGbmDev6vKzd2NwcS5tmSosvB7tPRbLbkB9evNsZEjnDq7mFJrdnebqZzXoWNEdvorqg5P",
  "key35": "3vmeVHi5RxNvapv92L3sRkn1cm1in6EnCRbHY3jQoLrHhcm98AdSFbrPv41JWsyvEomwEn2nrKb1aXYhHsD2TF3K",
  "key36": "2ztxErJvgFdirKb3QetNjdBJbPuLPmia9dxyr7wLtsBESp1axBPU1TUNmneWfJ63ZdsNMtTD8FqAdeWRCTKjweKs",
  "key37": "3fXuW2Ju7shPugKpwyKttC5FPk3SdJsVnpGdkKEeL5XLz2UThyqWoGMRQuUPvqHeobAT2sURB7uvvefGFV6jiHt",
  "key38": "5YGakBD6ftnLafZrfHW4CWpN42g9icnPxYkpGSfdqb295q8EX755vtTVnPEXj51qAYWUxPLL5x1vP74GCmb8LKcg",
  "key39": "65cufreqpLKihF2k9Exh19EYJnq5dGZtQKYZSBhtyNE7h43bPnMvMNhBPRUJj1X1FxTiubtA8ReYY17aEuq6yK7L",
  "key40": "3GDMVV5qG8xcNX5XxUW4RbJ7ETDx8RggTq74KUiU44JmcUzweEodaa6H33uWJPdR1xGdXycaL1MnkLgArxPmeKDn",
  "key41": "3J1Gc92jenktK76VQcjUPbeW6ikpJEVj5Q4VeEh9S76SfGLSnQBXWtUKQCfkPiK261KoUNEbfvpokzhBXrtLUkUN",
  "key42": "4LC79eHVaNeEaXzmvCbWnCV9whwHh7GZEAFCrLdiV8ZN35PNVksuGhtD7f6E9TpeSBRtzX8EKpPZh3h3v5BMespd",
  "key43": "224xVzR8jh5UfQG6H1NrhwqhxiwrXo5UAiT9CwPDc1dgvoqs81kYtADJppptXuGQSZdWYjQ7uCyQF95G9kN9dhGx",
  "key44": "5jW4UwjjZ8EZXTyg4fZhMrXSFD7RCkVUhnC1aKYLYfGnEoaNJkSbkdAfEqBD7TeEcscNiX41NuBM3T9Po5Brjec8",
  "key45": "Ffa4Nui5TvVDunTDfvVe17dbiGxghst45VWeHiZzZcan79myMoBvxKJK8Snhc1QzqYsTsHTmau43R1JCweGTF4L",
  "key46": "ca49oFHXHu1wYivoWZ97JJqisAoGD2nYTbtvH4tbPdnKWSKXgLmgp2u2PBJERyA5XGVhzLXSRapw8MaM8uwJojJ",
  "key47": "YjFEmcZvNyNq2xAP7Px6oKJ5cB1Nju5uVs8vUvstqL3nC2CqMvGKVQ3xjycjLb8ropX6baSLzmMyE8VKCXimyZv"
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
