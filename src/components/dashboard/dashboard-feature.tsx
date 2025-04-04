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
    "2nErzWiyCuFcquwWbRJf43c1Lza7uDsV4rFnpgBG9JXjQrkk5yx19wcUFmw1wvg1KrqyBwpSvQZFdmB2MKE2iFfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57MaAbSRavoFQqPDKkV5EJqtegNSaT2znvekMontG5u7FWXtL8BwuPym2m5nuNQGjSmG7DVL48WkXd9VJFmmEf3j",
  "key1": "36jkBufpQskRM1F5M9d1kAr88jok3jy3uwdhmRTW5MfP5ZrUEj6invqTvs7heL6Q4pRmmBJ7C1NCLdLobYHdofVt",
  "key2": "4GHVfVHCHErkdbVGX7vZJo739vH9Ph7zHCf5njercfJ3DkkERupCbDG5mRohi8KZ2XQ7WGp1eEfZMEAy1PMmGnEA",
  "key3": "3jqnME24N5A58j8o1FrnwUKLVVwe5rfeRAmEHuBMpdg3PBineBGi1oH1rHf35KYcWGdgccYMnRpk7E8SighisHtv",
  "key4": "3bRYcr4bt9PEMmxvrkBmKTvPgZXwVJQHxkmsyaRtao7oiqe4XkU2en4Bw3hsdvk1FraSP1E7gEH15nW72fmPjKkJ",
  "key5": "AdojrhLNgwmVGfvt9N8Ve4FkMfbSVNgVxqEwvr75qNdFffZ3uD1u6YhVHnJShH4A2XWn74cmAkC1ZCzcHC6kjvs",
  "key6": "8JDHtoZL8BXHdnWN9XTfde9LM1jALrmobrFXz7KzTRtoSTMLVTmhWs2ShZNXmv5YxWxjYCJQmHsHDbdvfbvUtUj",
  "key7": "3mhCcTBPDwYWe1vcf6R6YFp8Daa8K43HsFnqh4Ft67kNm13sbHouyQ9XhkM55WCGV49xgGYG2nLSSVTqch51oGV1",
  "key8": "5tKntdxqqNzpqURZ2tm2NRvpbpq5nRNWdRTQ9BgAR7sU7fYMFsjvcXR87LfyjpGtHnwPudyz4CCoY72GN9XzuRmE",
  "key9": "2RSkXH5XGyrz4JVoxqPTXtZHDCc1U5kmgYzZbAByB66dRrJy5zT97yNhfJSGXLyjumTP5YHAKhA8QT6tgPQCZHby",
  "key10": "3sUF9E7pYHp5gHbboD4xmH4inKGwXjn4T48YL3jPYhcNzNr5iBjjqYULR1MwA1vzVAv82bdhxWCvL9iTqajM25UX",
  "key11": "2kwsn4aLWnHM4LoLqbmiNQzpCLYrzcKy5ZyysEhNc9znzH4EGCi3qbyxmoPsSoh9VDNxXvbYPRDdrDEKsyx8pBHi",
  "key12": "2CQBxk8LSE1pQrhwkNx81Wd5dp6JYbCQXZLcZiKML2MRp1uC258yGkYyjo5Ua2hNVGUXe9vyAm2yFG7t9jH9Tvmy",
  "key13": "3m7SfofP4MJdv4zTx3uGKcNRKuQipPoMVszMFvQ1kGy8ftRtBaThPDAURxw4j5Fww27buTSso7SvkkY3Kmw1suPL",
  "key14": "51t5Mf1Z51vSe1PkteLBP3GoKgXBMns1msgw62aUhaYuCJMHW7NHzad9HdNzhzM8UfbKSiLXeGt2B4G7QP8e7TxC",
  "key15": "3bQ7ZmjRF6iCGJrgem2mhQZXZ9LU5v7eYvVJFWCbfSi7anG3MBeZbRB5dZLM25PmfFN8Pbc2tdnP1H7EiJHzTJss",
  "key16": "4kyQwYS58uRFErdFL3pH6uHo4JBhWzeqz26AsgSKX3xuKSzut5fJYcvuuQdr2DiSm7oHnriSfyR8eGoH7pF1H5Dx",
  "key17": "4wuJBxehcgqPPUK7odEnSJSMUXYtSLXTQtuMVCjMDKxLeTiXnq7ivnXUQ6oxQgwYff1eRX3sFyKt66J6ZnpNPzBy",
  "key18": "5hdQooRqrAFoSREXoAJ6VZXqGM971p18v1bPRgDvEKFMPKK7Nu6WUMgfMnoLebyfxQVXvjKBeMUiY5VWSdqagj8",
  "key19": "P71kEDfdH9JfG5RH2bVovTZKiXQAyuyweCkuSRTikMnzstm9YRMGce7aspcQxFNcsKkAH4vsb8AUKKGL35Qjw6L",
  "key20": "Xh3yAMLLmKthorTSHzqgBaGtYkknmU6X3XyHYnVDPwm2z3xUa8bf3eZqEmXYXFsiBxqPjQ5oZejoaCQ8mRpypHx",
  "key21": "2y6p5ckPJ5iMndPWf1q6LWYic4GoWr6oHJrFV2jh6Hiy9BzKsoQp6gm5WLv34CCDfysBRJ8b3LMToJTntLnCQMXs",
  "key22": "3t3HVo8TJmgFTGCxsfuhRWSWaieULNrHELUHxxHMK3xhj9UQ7nMaH19VTjJ5TpyCeE1L1fXCiuVoHmNxR8owiycd",
  "key23": "2Q6sjRmBwzwdJ5TvjkmVynEpmyFmMPL11oMP46CToJwUcjvWqw6yg363YFPiCw2Uq2F5vBd4AE3ah14Yg5gbZqW4",
  "key24": "5KpzV7tNejHTLkNesoY5tojarcFFZsTSV73yA2YCHoAkobhExLsj1SGJYrA77Po6Qs5Ryeo48acFp1ZUTz2n33E6",
  "key25": "22rnCK2dBa1bwweqY13hgNmZzAVi2i2QYEvinjZdNH82RqmVQck8ovrYgqUZawAz9aPDS33QApHHVczBuiGScHiB",
  "key26": "46SDb9ZW97s9QWWkCrivGtQWdgxxMW3oW9TECGaGyD5zShYYHpqwif2mDkcbsL4pBVENVzLbBkkaRCoQQei5J7Dv",
  "key27": "37RZ5xfzgzPHqZMpYoe68BiU17VQyC9efWkD8uThKf7UJrZVtkoyMVLRBemi989GHtuj9jdVk3qhVepPYCvRsALw",
  "key28": "4Sa2KJPjWSwTN2snHfnZ9VgxRtKE8SoUSZ51bvBbtyKCrVmFCQMNJRcW7M1BiW5zBCpnNdCuCBe4NPnSC3QNyf4J",
  "key29": "2DqookiSdrjyjgHRbp5Gy6PMVJtKevi8hiQZ5HNLGLCBvbDMSFvkuT4pkPfpBHo1Sjbnww7js2kRDqujgzx4zbXm",
  "key30": "3agRDRRunRZvKnFthYsEspBrvfZn9v3yBGPz561gJHrHGhPthXosjpapAMqg3iE6jZiSyYYn51wiSKUDTzAWsoCK",
  "key31": "kKtcy82mrwwiDQJFkesAoxNSMkuoeUq3Vh4kXSG9DE9uwZEhuiTC3NczwZtUrTNXVfTHeJrNpyXwNk6yv2u4qtQ",
  "key32": "5ckJHFkGkhpuxdaCwcxaoscHZjLPTwtjCy4J1At4KSSzP7ANHPTLc2LLuDMerajqyiXZ48ybpw7amLM5adwQ28Rm",
  "key33": "fqM8afYJdrQSEYM1EEpC2nExYefvDgpHJR6MVPjWRiZHFNic2v6Lae596qV6Hyd4XMQ9EQPnjDxvTyxFL4cScwU",
  "key34": "2wqoBmtnu5QG6KzDUqpSR9VZzmWsrgsCTKLFgj5K8Gzy4gdU5tSkQsu17tANCWzdYsxtDuu2JJeBaD1W772vsNoy",
  "key35": "xH66BMeVEU8RE5uTAkpWuXrPhTPjARq7u4k12MebKJD3V6p3o8owJdsUGK1ZdUN88EuNhfhGbAipxNijSS1L3E5",
  "key36": "2FSpJ41Rr6odorPtzvvWTSVBC8n8v2RnnnJpuVzPwYUadSSoDqc8DK9rXJkLqromd2L4qEgFbCVRnfUdUwh6UruW",
  "key37": "2Ev66PjW3VHcSPvXZUw6CezmCCEfcT77bavHZpLpRRUbojQc6vAkQPZyuLjHLameU3DqgP1ye5RGQUr5ghqsGeFq",
  "key38": "34fh7otBeQcfeWKCJpAnG5T8JoprZ7xCDRqMr9HA2iKc576E2WXLaLAGqCUyQAa16Tv4z6paVG36PvC51qjWAfRJ",
  "key39": "ZBjG7AqSP6iyRTygqyejXYuD2J3ny3Jgqpfi5q4epbsBSKEA62G3kVDBCUyx3ok7YHJm7r9RJwhQ3CXv7NeUWX6",
  "key40": "4ssZmsaGFbGsFkmckfe36oYK9iFQdGgy7ynGC6icwHunNYECNYXT1yLFM81nfqyHtywXqXHVtt5FUzbCohGPKYp2",
  "key41": "298Suknq67eYMTaoDfytaxCrebjTNn1FgEaTd9yRC2cZxjr7AA46FJ2oCViPKLsusJkQqsTdhrerSxHcQHq2N5Th",
  "key42": "2ppDHt8emopQw55koZAErYrbsZyWTjhajRpqiWgEU1ptzmd4rvuAuSjWzMsZEKFDJDmNH4AFYUswCVbxra1D6QZJ",
  "key43": "3bGzwqzVYwrmsoTmM3SgMSXWRvYCLDcNf7JKcCR9N8GqKLLqASqAfPiqJ2TacDofrnhLXg1az4HdQMYFH7m58R45",
  "key44": "3RQA5vBDt596FTHedSnZKnhYxgHiwnRRgxzVzsx6opYoqVnuLp4qpPQ9f48ZpHFHjdX7YxKG8A5oJyDL1qsHJEaM",
  "key45": "xLa64zaPtrFhdbcj5NH5D5nz2KMkHzMyScvbSqepe1pPRwu7AkkKCm6wKxYgfNgqGKe8DX6AFgHVEkL7dqk57Ab",
  "key46": "2GfKa1U6wXuYuJnxtTaKrCpx5DG2FBnKRN529TeiVN45HFBJsCZyQFhCu8CzWGRDQW84tsTP6ENPuWcfMBDiXV2s",
  "key47": "3MpJXKmNxzzqpi4hhfc6XxGXvDBJpeSwVpceBvf9jsWiWd8ecCJrsEzzCWNcfqqGsq1AaeB1H5CMXUXSHXtTg5A4",
  "key48": "4hbKFf5NsMZ32JFUnre7hyZizvWFXs3sD7dceoaJKQ823m4Jm9Bk3EUuVReXZrErCJHawjigtxPcpFq7g6VvPerA"
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
