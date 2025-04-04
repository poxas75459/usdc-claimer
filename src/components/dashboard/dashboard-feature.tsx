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
    "4Yqh9Ajwx6TLT4vJM8m5ddmHoeZp1vn7eGt4iyjJBRQf8MeoyQ2Qobv5ZanE9VvcoKovBrEyZjwPBT1SsaiGC2gC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bBwTQNEiB7HrLDVS91LuVFkK5umBNixLGz18y3p87BEhySKGqJxPfT54atbrjKB7xj4dNZ4hZnRf7Q7hQL4xysy",
  "key1": "2Aq1o8H9rBJeiN55CPzNBxmVrg422YvVHKWwVoZZdLGZW1YVG7UwEFB1WjTw4oabiMaxjjGgzUwZ5F5Dih6bUaab",
  "key2": "2HpMGFA62wXgzszwF2uvANrLYU3xgttfV8aeDDNRwRTCBE432BV2pNhffNBpRXkzXcWzy6eVkSxL38Gv3Cn2g4GM",
  "key3": "taxAWfh3sFUQgcyzvcF3bWLyYzePDJmznKbrt76A9TPAp1n9j2Qhu2pgkgnmcxV64b6dUitkgHLbA7Wx1gMPNvU",
  "key4": "45Y6iKPsAapJWx5oqxbPWx2rvSWRdeMykC8Cb9tJbTJPT3jcWSy922uFMBWpmnPGVFyqT3C8rV8HnJwzVsSYmcAb",
  "key5": "5j9u8TGtD6rbYT2qoBL3Yw2UpLpU8477weUx6PAMrUFofVCy1UhtDUfsWSMBvwYJiY4DoWKiicP9kwvKbLy3rZmz",
  "key6": "wizFDCBhYhXUhuRursZ5UkQXzGtDWf3Wq5B6Di6ZV6JNLbDvHRnv48Yk3FTYhyMEuc6WLU17YENbb7i1SYQrrJg",
  "key7": "3SQJQRgsEugb5Q9PMSN7KARtM9C6fMWhuyNUcY1N87oK91D8t7hHfjkjuySo21Znd9EW49F7GPaVBTQQz7HoafBH",
  "key8": "4TSscPqscDWRt3rP26HXraVLh2LyrrsjhzLoejuGhGpCsYnnAdDERoPFeFs72PXBiKdcpfvG23wpmffYqQqz99G",
  "key9": "43NYf6TgFkUqo2n7a4nu2rWUeHTFfngmPPoGiKUi74HVW2wDbmbBnLC3mydxLPmGZAXYLoE7FntojrhrCcmmJ5PE",
  "key10": "2xsqDGsC69v1ohxJDPg7p73wiK27eMzCRehQqSayaDF2QC4iEWXhACXetigU4NbUk35VmZMBxVRBVaWabvmJ1sgM",
  "key11": "Zur1GD1eTMKSS7BQZUJKDgRu4aXsLwo5Un7bXDq8sZ9aEbixzmQmbXmsE8Ruo8wDZeyf1MiQsst2hJcPGCw2dnm",
  "key12": "SQtQCQUzXyZAEPdGzFewRkgcmBDZ8C6weGPHuiydBQghYnfpotCxkArVA28NX5XWMBFGqQr2Xn2ka4vMne4yj4T",
  "key13": "9pSux8EpicoZHYiUQAiDcJkfQU3WNjGu2U3pBeE1RUp7QYLPWHkf35Zg4GKzjH47vdBQaeErRtcTF2Q8Yvfih6y",
  "key14": "44sH3a4VvpPWGseGTcCundFjKpkkGeF7szErhWQJWxuwgTsby2FDZQ9eYZ7Xdnz4d8rJHPNnc1v6i8HVWvb252wC",
  "key15": "4WRjpd4wyBiQo3wmjKWo5obYGkegfy53AZEg8LszhvvSp2Wg1RBRECDF54NkVxNxKThju6FBXCsb8zvF9owHhzek",
  "key16": "2jovY5hbmrfMZ1PMHZRy4odQqagyCEDWgkGoRF4oMprJRhE7eTVEH9TBH3FbgdKvrK2A5zFmM6FVUeTyibSKpsRh",
  "key17": "3xCCuZJYFx6spMb8N2Wv6NNNYBRhuYq7ogJzmvcvRKczbsVsnb8xa1TiPe3a3KDbonunNiLqg7EwfkZFbjyPeP4E",
  "key18": "4xTsAmU27wmPbKE4g1XDorMm3pn3U5vRv4MEi4oEhxYkLZjRdyNx8amLQk1BAQZvZgYHkKdc8Mgc8DE2M4jnEr2h",
  "key19": "3EHcPy1YnvCTttfwYFAur9veTmHHwKvADQnBJeKMjb9UFUJLm5tmdryyw4mFrLtmUgz5WjphqjYxe6jqztLf6mds",
  "key20": "73H4jBQ4LihL8ZiWzRpqDc193L9HehAP4qV2DT4HV5FMC6vriDcrsooepFcTiPqTYaB3Np9PUwQEz74regXE4UN",
  "key21": "4JqnAM9io2ezYDKVyQjGEjRx3EBY6b4eEiprkzNLr81XaEZNVA7CCNucMi5iCd68KFTUPDKCVotJVVQH5VCKnvWa",
  "key22": "d3ecxMdFVcZAEWsRqryJjkNVqs1rJUyqY2gQgA8bsz1H6mTds9kq7h14Hp9koTJHRPePBZAQH2cCN4jxmYzN23X",
  "key23": "5gNBQtMgGEjTz5wau8DP8aPd7Sdavaj5y9V55YP1XjusFyxEDjhJjMBozGj7cKnqiJ5yGwpE5uP3Lz4J5vpuorMh",
  "key24": "Ve6GxQYvRGYkzFCQrtf3qNqa8yE33FJf9vJiRAVrmQs92TgafpjFbf2e5Z8auEv44CX2RBeYKEBbNchAaJKuNuY",
  "key25": "3PyGuzrqVUpZ3jy9EVfHc2CTSj1aPNfYHEATLAHqXXzESLV2Wc1PVtpU36BQHGWQwix2Z71Yk5yCctYN7y6fReNd",
  "key26": "46x3XsxUUR7TUGVEwRhH67BN13mL6NgWngLD7u72URRcQtsSkM1QWiSAbp5Cc7YTbFTTsonwQXHArDEf8DYiUS8R",
  "key27": "4ZjU1r2CWJcMRvgrdtdZUdACGe29au5B4iUy1dWuDhAWE2CfTi8h4SkfkcXn9ZSo9nZSDmeLB6A4Gi34x4dcdKuF",
  "key28": "65VH6VRDGwt34nF7Q9er2GpyP1j5ThN5NSrt5ceW3MYGG6S64LS4WFrceLgRd2UZ2KfuDLjfxdPyv78K4jGR7XYz",
  "key29": "22RTZ7m8iz1B5Uq7bAx7nHdTtqHhKUvwSdLyjwQJ4nCgnRQSNnoB9QTba5MDTsSsT3uDVBs3zLG98JSc7c8UAy9T",
  "key30": "4MGkeCELFp9WfmDPU7ar5mAhDMTfVGWb1opMLkvsAkESs1nz7JqTjyZnGd9y8EupcdCaWZBocSzbxFdTiu37qrXX",
  "key31": "NcmbekqSXd6rrSDTyUcMLihCYZ44uY5zs4jZfFekESHF6mH7FQDSxA2SrCv7o8UghiBZb6x9obxd5tp7hhKo669",
  "key32": "4HrLEJhHWtpjCUZffnsZCXMD7RLtHpgWBKtp8RNTj6dRXK9eGTekxrW9tjRTMf7zxUtoq3SQQdyoxffh33ef5Yn3",
  "key33": "62yhFNZbAD4sa7fFDt6c3NUZBbfHZvSRJDoeBGXfPXi9ovn7q6NzANxC5F7KVrysBMXeeTxYx63D8S5C2HKkemtj",
  "key34": "3SY9V3GcZWo3vBQGB4AdZg21EWTtF8ZaAnHDmJaeGfDz9hUdi5jzEHowvu88y859mTginvXiXae5wZYPct42B9wu",
  "key35": "3KzsUN5JKvVyTSKpAEBUJ9WLjymMCTxLU8bEy9Zysj95YJMQ5EuqVzYr8bMugEf8K26UWB1fwS4HfoNE76MTGaNb",
  "key36": "3tDH8kF6DgmdGFrr8qyFyyxyaaCduRmFEKHmvouAtUEJaD9R6RfzTEkqpYQcVxEexU8m4BNprjy3W3eNX9gdMp3f",
  "key37": "5tAHvJszr1VyJCEgnJ3DjJ57hg11zQtQ5aCDDowc9MJWyvLUcqnZyJRoivGdwBRgJgBCMXTtPREcD6gRPvkm4aS4"
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
