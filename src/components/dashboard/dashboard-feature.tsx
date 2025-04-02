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
    "DuZSPQupKg6FQCdxFVKszhGhPzTSBRoNPeFPgtMU3AueHDVhhzbCQoYQMkdykwa4XPDjxdPT15H8cPWGc65zktT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WRSkmToG8XtGsTdszJ7sBuWrbEEMfwAeyFU6DizfKc97hPjdGPfqxD8SdJsUDyagYqeoymcq3o9RW6Gs2azQJk1",
  "key1": "JWZPUUzTFfpzrSoce8dkDxcdEQREvnvNjaPSp6xPD7UJ26oPPJ3PsmH3xXkS8MfRYYisyLSwSShooVxjx14HgfG",
  "key2": "pjLikQgTKFhPRr5k6PvozEqatMpmoT5ZQbYSCur9rzrZG3hYgkJLkLiSx6uKiirm4b9gxsbFYKJSVdCdzpL6K5k",
  "key3": "4pfTKYVLLf7Je7oUhAQdbADoHcDVcPJEUzYGqwxKVSuyMq9FK744FYRaMSV2gLK8Njio9bBQXmsDEt5pP7ffy27n",
  "key4": "4g47nnrJunHG3uJvtLLMibdTbUaRzi3PMMYzJJcUnMsGy2tNk2wiqYuqS627XeJYFp3L5TwX8rJhRaFnoD4pjZrL",
  "key5": "2U8VtTmvZDb5GxjUqrv9fpyKAj9oZWrK8HLzPYv2jZA9qp6bCE5afGDP3y7AFLPyxsM4iL5p1AyMGsenyyWHc5Ug",
  "key6": "3jGtpJEkT5M8SWCGrTCVAMG26AiGTdS751HPRTmQSqt6E5s8fmTCcMAVwDoUoakBr69qZAN1T3Zh3mKRNXAznxdP",
  "key7": "HnLMkHUbnFjP64zuabzM4nNtGRc4N1EZVrbyyKyAuYyZ6JdnP2EvWLoU5Vg8XEYsoMoehyXTfn7EY1P8rdsFYHj",
  "key8": "53yC47LrF1YYp1EtZuZVemL7C4SvhAtiTJq5DnHZQwrGcb74HpbAoLZL5kxQ3H3Dds342KCH1WK3k2kxDZj5WSX3",
  "key9": "2Jkf9HsiSRrJE2h9aFxWrfLYaQhAU4CM1VV6XkiogsQrdJGkTAjWVLdTSeidq4Ki2ogX9VEZ2maNuwANqnpEJdyB",
  "key10": "4BD3oqMcE5ge9njdhYGsNxNYE6vbt3mWMRPZuohHGhTRCxEMhpL9MqYJUdgMxDzbDgTNYMJr32tRaDye7px1gB7W",
  "key11": "DpQqF6jPeuF7DLeoc792R1ccj9SMNMj67LSaMpDkS1UkjQBXajkLGP9B6TXM8WTT4oE2itFRngm7Lajfg1QPj2t",
  "key12": "5yWevU2pUWr2QAxrexXED7kqyryHTMN4QufY2oLVC3fPvyLvZt4WGrhc9dZ6j3gCoT45wBkq42HevicUwbTYjGTT",
  "key13": "54s7FjXs4ReiYTHjbLb1p8yGoWqzb1fh9BtQndz8YC4YU7K8LFjQeHBm2t6jpVjnjCNhkx564LBTeYQxPw4tsva6",
  "key14": "jN5vHVuHi17bsp93Zy4HrFFv1ZDYmMrGu2udFm4JFVD2czVkRPFE6qZBzHGgtEnqGTfZGUvy2x9dKzRPgiXNmYz",
  "key15": "5L2qx7DCFyMzksAV5hYrzGYquhaScgpC6UfnfSN9w6GypHs5WRemYhA2mFV5ALSfDP39XAs5Dzt3Arw6b2XwcNGX",
  "key16": "4S7y1s4nQZrRdHWGizeXVSme85vrJYc5khm6Tz1krQcXZsYeauYVQMbhn6NwXawfsCp2D5ZiDsDaiRzqCxxrapZy",
  "key17": "4htb6iN6gDqW5ukWfXKdYYBhqqzDsSbk57dxXHErn1UvWxntKru9NZ4FPiDEb83ancbbEqYDNNxmtBfB2qpkBU5",
  "key18": "4snMwJWHeaWUbacWFpeX6Kg4UtNuaUwMpjthx8Z926EbCLadN9iuhcUzdyP3cj3MJXNWJpFS6rHs9cZk5Q924rLS",
  "key19": "2APybkBrrCVYgoXMVLNTQAuqahjWHVsptUzDM5kjbma8sbH2YQoiTNxsZbagkBsvFe8MzEK1uEw8GDWc3kk4wa7r",
  "key20": "mLtzvWkZ6bKBQc1iH75BJFNxn7rJtL9QEgjgzpjesySLRCuYB7TSe2o8z137ytHRDfdWGiwTFrKa12L5Kwss2RN",
  "key21": "2GrLBmLLLNxWwqxexqzRziYxmKXjZW6ksgT8Dz6B2ZPLHzoQWkFqoVhkvv17ytrhdZkdqQjEtW8Ac9vK97xRi8wi",
  "key22": "nJtq3PVS9iWGaDu8uVgUo3xA9EuzRhP4UEsaRgEjyjzjEpcscwmauSFkhK9GNZy3sjzMH5n7NqgTqPMuoLopj2e",
  "key23": "3DtYse1tAMDQ667hUTEDbXF2wmeGtPM5TPibjmD9YSpkYMwHBvggd6yCUomBrfs7LZdGQdubQ61ntsmcfxbZYHSK",
  "key24": "23uxSpKv1CdexPypL7U2mPhnbDjeEBi6WkajbDgorEACsgzhxyMYJvmCtfukuiQ82vDX9uaJUCmc4ZdtENXP2fZX",
  "key25": "DzaZRpnT9oNftpvuja7e57QMUZeEHurjQMdszDZTqb1y72DG3F3GiJFfnvJyXvdMQQvQa4ayYpM4MzuPkf3XFWE",
  "key26": "4XLwTE7tzrw1M1ghaSXL6Lw22hzX8nV2kecszLyrz8fWKdG7BLfvNjtVRwfRbVD1A6re4kS9ntYzEZH7K5ADABK6",
  "key27": "3nkS9KZV1MFQ38mp2KZ9kwG17n7qzcyMWf4behtNPigo4F3ikPrMU9mdqGzSm1BRtQQDHDEGGBSJLVafnxHXFN3m",
  "key28": "4xkJQt3PGP13KPniDneriARxJw1Cy7xJz6t3Kpcw1UPeZZfpaGWMbW1jMd9W95qEpBhqaN2JyF6TUfVC7TLL449P",
  "key29": "YD9uRAv7RTr4KjJdwzpeuNcm2qqdd73uXpUhkUKEXwY8jD7SSXf4sAh6XGP8y25F2UVzwqoSQHLjyoLYvQDX82Y",
  "key30": "5L2s19zHuetEsqGPs5Zeis3pXBoVXMh5Lie8D7LNVw1uECSK7NUv3BLyAgFtfJv1sXQhCBHXHw4vQnU8UgND5hKE",
  "key31": "2LiYQnHLuHqwevaomPfuqvFLKhyPt6WALiyrS5jLFqQjFdL7s6WKoSCU8d81Aw2ZrorszUfKgCXrDUthuhwEK43J",
  "key32": "4K8MtJxNZqQ5SWqNbvvd1hFcaa9DbayBBXiJyW79uCfc51YzxrmUNcpiW3zYgoRBudzbXVNUFG9u4ZSNZWkvoAk3",
  "key33": "5rGkGY6b6xDDmczTJo4sir4WB6bN1gxchN723BhrhV97SF9gYYtf2TgZBfPx7xTZH8CHUzipWTZU7cuaqhqDS18P",
  "key34": "5rAzYM1MLySL2aQcvjr7crtXP59qKDBKW5M86KZQXXQfCCdi49KuMySkCXzsubV2Ed1uGoTDabEhVzzYuVQyEJjC",
  "key35": "3pRmMDussWHwD6P8ZT6vwKsn7uXMMhYqdwDXc2zj3xKiwfa1QjYF3n3SnxaN4HbjU6REZ1dsbUww9g6ib3rw8oXx",
  "key36": "2T2owtoXCr79bUnDazpt915GZrJKunxCY4uS7qTjWUJh3rZUL3SyEfV8RcjKpQrKPH3yQdREEapjx7JpS9PbB8tB",
  "key37": "3Ftxuwiasr3JS5eEXqJKMhVuHzejewwDNMbHkhBRgLo4hXqZPxtfjXSG4JZsPCrcSKuwcaL14XT9xX4ijVKcvoBA",
  "key38": "4PjVhuhZtg9HCY5ENrbeAaTQKT7NbzQtd5PBxuzGej7hr5HVSnzW3P6eUSosgiBfZBxyCkPu1KE9AuGwXtwQnC9X",
  "key39": "cdvCDen9pfq4hPiSEbpyjv4fczNttH5Hsojfm4hBGBVUotZmys8rDGLCxK42jCcEGD2Hg3Vc82eroCTSe7zTg1j",
  "key40": "1kzWgnkWT8fYNWi3qsF92u2N76SL8ZXh1RdVtz2c6yFQtdLqx7uKKMXqPU4VQoANUKdSjutup4KamDBKiKPam6s",
  "key41": "3ZEMLsBULWoKfXeZ3YyBc93FwACURvGad6KLTgyCVr6Lvd4VGuNFqJ5Q1cjxpxL1UWRHdWH4TVGwD5wQBcpp873F",
  "key42": "4pT8kTEdnKpTMTfMzUvdpTAoZNmkKitbudWqoE4xyCwd8ZM9SxRUBu7AwDV6Wq6BfFYE6cC2bUKmjREHXRpv3r5U",
  "key43": "55oBR24B2EVqNnPP9DznTG6EUg6MFRxje4x4v7kvbtwDSGDbzEU22AQ9GJp6XU4xAYuBjHaeiJ2uREoZVvMyDRS2",
  "key44": "2EFHNrp2q3nhXkXvpJkREHRSDzCrnCdBjN4W55EJgyBfKuqg9BudSfHMyPPnhpfJHpaJDYreTuLzm24QLEyqd8Pd",
  "key45": "rMCQ3MaGAvYqPEdYxYMbQ1pQ62WpMyWhHtCuqxZe1cPZapw6zxaHdjA2LRVktdcqQ9wZkFE4b5v6XyM8Dk33LcN",
  "key46": "3qN5kcsMpR2gAnDdfpBVZ7FsU7psh5RFDtPoRrVY7ZAXrXkNLEqSaiEAm4LEFcPxaBXzkx7Ex2c4NRsaCs2M5idY"
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
