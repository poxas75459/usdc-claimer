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
    "4jqpYfn66kJjc8T5n9U8gUgQ2i9sbYeNpTZkrWwYkVPkFZdedsHS5XFghJHpwsYrfgFaqNQM1WxWs99ryEho9Sfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AUHFf8XqyDj94sRC1p2oSF5hkh3LevV9oKscFJLn4jNBWogdnT7dnWrQneeFj7s5f6Wv7sG1cscyrq5DwjcWMfJ",
  "key1": "AyMbgCmNxn1NXGLXm3hf5R2uHFAEetSbsu2eWGLLvBGEDtQNE2P9pC2x3wWdpYGe69abrP14TeCJ33NsKauh5B2",
  "key2": "4wyPrTtbFDf8hhsQB2TjkYjAPSanLgq2uy88CUVSEYv5VAqdX61xorxrMWNdtCb8zuQyyRfcm93poTEBAoa8GpTe",
  "key3": "kv92Dsw5unXbM9b7AMxZzPYiR7HZF2Ema5niN6pmrKxYPQ9gYa883RcKyGGAbUpjeNbLMxYjvdoh5vkQn23u8MT",
  "key4": "mCa2BynaoMQAzgRGzv7F1jhBEQ5iUXzH4BoTjqwADmXTKZ8cwXfmyayejQmFcXQu3wTsLU7DrEuFymE4aNx4Q8z",
  "key5": "3YF3kS6gYJiuhamE6Bx2VWrztZFsR7ejsdyvFGMQyvho7wTRmixw3QKny5viWbTGXUuZaFccQLXuC6EDq8MunKZ4",
  "key6": "2vMpHjYhNpA98jDu8DXrs5TbQrBNvKHAtA9yTk3X4wrf1PgVAji7VnosE4JaQtNAUnAj5bzpyv9oEEED7goXWoPm",
  "key7": "3e1NbYS5ocyyjuwRN6E6LWupCGLcj2ij8qbVi7fiXcYcShUCKuVHh1r3CAq6V1gKgqGNQGJP5kuSx7vfJpMy4Aci",
  "key8": "vGbMeedMf7N2U4QJ56zHGbbRbqyGQq3xeknvuUqbYX2qxHdTYP8UHgCRvo7uWDBZGwyXVPPA7Wqck6DDBL3NUmL",
  "key9": "2AKaKXpTmjf2dRaQNyo8CGoFKtnAWumc3KMp4dpXANurAGSLLPitMkjbkcCAwSKaLAa77nVzuoUW2Hra3HxKQSmt",
  "key10": "2GNcjMAyubuYQGZEMAM9dcZyCJENh42x1baQUenc2pWoGjWAvy1qb838UPpQZXR43N19RFFh8Mn8PvxHYRVi8vf7",
  "key11": "4eS2dFn4KX2kmH7dL8sbCEnYVNrVEYY6JMP2sezDC8t247hMQz366qVa6aEbPiA29q6Bar4eSfW8G1JHP1fC9BJK",
  "key12": "3bP5jZvyLoeg36Hc7YVW9eLveaoPuMjE1MftBi2nHne4sHvFVkRzAfRFspoW9Wwfhofa9U5ZY2TMdTfrois7cAcf",
  "key13": "2Fgvh4rY5n7DtMcF7oBdz5dHxQh4gtueMVwXxYoTuYP6mzodGdyN47rP3CZFbLtutYBaabtANNGdFfRtsHMgWH3T",
  "key14": "49b815hz3iMSYJgMERZDTxCHUnFohUwQvL2bZsAYoBcCNYD7R3vQQnXTeEBSVtf3b6dMnUf9JAtsfjETWRRLQWbJ",
  "key15": "65Ut1duUWw767PpTtwdgEpAPWv5yvGVhvaLZjW5VjKq9XMmERvmkNAFGQwn6WhfsaQg8Gsp6DG8aMmucLJ5EVq5C",
  "key16": "v6BvPkEUDBurgMjYmXi7fpQWN5c8QiComYvwWjLfHkoqLYsKhDs1ZHn36SzgiVo5UHgYGYS4TNrukxjM1Bof5Wv",
  "key17": "3xHsSduefr4UimQLuhs2cCiGSezKWNiThCbUkufevB1JpvcFg15xZocQmCFEhSUuDXEytc77imDMz5cjiCJum3R1",
  "key18": "4RNmCKBsE1ifox8AB6yLgD8UkmybeaXF27gAFSaeoNYDkv14E8kUGTeVZtG6aJbxteyUCiDsjUT9FtoSw1S4Bw2g",
  "key19": "4mehynpmaLyBbiQmAXE9hnpZ7ir1nd8ZzAeAhV27Uz97ihTFd7QcYmCDnmdRcBNyy7DGbV45H7dLU9ffyj6K1uwW",
  "key20": "3MCvBjyDexLXiKs6UwJEpdunfJKJUfyEn1MyKb3WnjyQ7dLA8SqFjbuCx6NdcMNnMamAQckvnWw9eh6ZeBL2NDcG",
  "key21": "sHsyBVafe9QySVCgZTdmk5kn1PPFx9WEVgkgR5zWi9Ea6wDq87fscbCwc9pPpR1ARV87jvwbAnbWNr8oq57k5RL",
  "key22": "4FvF4fS4jakU6TN91tvVHbMAKs3NaAKDC3zFY7sSioz9JWBswNaonRQaoCmXbNn1seLSRjrbAGBVshpXFBt2iwfh",
  "key23": "2c7YHMmWA94NcZXk5U94zr5vZwH5nN5vks8MfQ7uDjEdd4NGhANan4SYVE4cBJaJ9GNKzD8CEmsUXM6AGLGsBTeB",
  "key24": "3DBsQZV2G3buNVLUqrAeZHuciCtsYXsNwarmh8V77zMAF9JsAPYXKjma85KCaJ9wMe4fdEChcQdbj6ABvyRZJ8s8",
  "key25": "3ud1yDRAvaiADjuEEYm97jxTNfpfY54PsjAw66fQLsK2VnohvhFAFrDQkpBsUw5v62v5M8xjQ1E8XkN53druAYrp",
  "key26": "5AGN1MrAbzrpji5ph8nMrhz9ttVjbzD1Ws9hTKrhg8ZrAvKcuzuZ7BCH67Rps5zTVftgCpeNYxMKyjg6wRujsDNm",
  "key27": "XNupoYhTFmWxi4sqNnBy32rK9NTdaJn4MeYtHz8a3Ux93HECd12NRNAdRzD7C3PWL3sMPfLqXyF57Ssg1GfThKm",
  "key28": "4dCsHGBfYm4NSEBjgjzPJ3JoXk2vRVSSzXcfwsBwDp58QNjKBoqbBBXkMXev3b2eHoEnFZJgPE3dd8p4Aggia4fe",
  "key29": "2GhZpKQrfmj247BXjZXMwvwYBLNe4ioEQCcrCqfoJJHhAtUxT5m5p2rNn2QnG8RSRSoHpXfcdcgXSLrpCzAon8wh",
  "key30": "53pWYUcNztonb4s58R62rKD2gBxSCLDuD4aZCioBrZkPUBxmU47HsGygF4Kri1PRCKwxUGCRQxb86EEcQ2y46Vnq",
  "key31": "5HByHoFCCFvz9Scu6Gnfs82VETdEPU3GwhjjcNL6uhaGoTHiFhYB1nei4sAPq6ZL9r4Awhsa94qVy5kwVfJYKHyv",
  "key32": "53Pmf9nTs54XLNQKxFhxtjYZwVAgHn98hvynbygtuEVkv6hMYKfP4RoHaeFbsefmCk8H4PotgJXDSEe3k4oSbfAR",
  "key33": "YBdgDeMuf5b7LdrwbHdBm7vmSWtHyuJLfvA2nw7mUhMzXEX3WUitrABeaViA3vcktKrCM6HJQKBsdwRpvDLzndh",
  "key34": "572EysGYuntGgGjX1Y8mcyPi92ksd7r19ZMraEe6UnjiCPcT9M2YfFQktrGCtjzgHSiZQvpJCkwhv2yahfUyAUXv",
  "key35": "5zJyFXU6TMEeiPnaSfbbKz8EHQHDUqvD31FQ2PEJarnW8eR4rsztGv4HgsigbxpysdgNrefeCeHru74bK1fNGzya",
  "key36": "4mwGZQDht75kJ3Ka7eqdLE8TwX2BXHjGshZK7EU6QRM9zGQaZTxWcxGwmLKaboZY2kUDcJzUV9jKbEdM7TMes9va",
  "key37": "koucB6GamDxDct3pgxHa5iEdqCpxcLQd5y32hsQYMnighrVNaDqex8ep1Tsz338jmRXiQ81A45iU7paEApunreo",
  "key38": "2grhJD8kUXhJN8ZcbszNxWPgceYVM4WpGu8u6Q8khzvdDk4a1QCdddBNC6VcNnpHGc1Zaqt8GaZxzRjuNLjr7wWx",
  "key39": "2FCUqjGe2WqdGwarixqGeG2eRpd5nZ24twRb2yqy5nAmmKNE63K6jRU54J2VbCY3fEtdSVBHoEc8LS1BBAXz2WSU",
  "key40": "ivWQvsRAyHykHUJV9ZkwNzv3cYVPsFRCbdQhyvsiRjpzp1sQcK2riX7xhVdL88Ei99M4UCdfSr9e2acWZdhBiPR",
  "key41": "SEf2qe5f7AUzxqVH5DnrGP94YGamm4XH85ZXtTfR7deV5d7L9LSAHKLg83tpgAVqtezf2XuDkhkfDkzapJyLw6c",
  "key42": "2Tna5ohaZ1ksR88rkvNFfScMFx6hpDpb6YiVH3mQrmZ6vdjXmKr5gweRVg7FHzUKFZcRDAYWXQD14fjNRmWJjBs6",
  "key43": "LMrcHQPjqUHgHMk7o3W9VUsUqS8MdmdnUct1nFAkDpP57L1PuctS64S2vAwVz7gko2mxwuCiZzhmJZx9KNiRqWH",
  "key44": "RVBjPyQve8XAQqU7cVG9HMuVGWtZayWrpuvuVTAmnM79YdTbLUZLzgxpdpMGGP6WJC8nMRRCMyqLFZExkNzxp8B",
  "key45": "468cqVNCxZTYrbczN5xgJCKj3fqDfYnohUsYEs7zkPsxa95oYquPXb9hgnhwfbU4KSMZoiE5xzaCVyfqvuKsuUJz",
  "key46": "5B7GVrnEvuDv4vK3B2KwsGjTP7LEH9rv7vHGwncZ7a5eoau4D39ZSTfzcGWaSRpDsoueLU7YvGVRsRH5SHKpJNdN"
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
