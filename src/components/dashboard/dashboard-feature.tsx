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
    "4Dzz9V9w4hxAcda3sPhZjie3vEzo5o5jqcNBrijZa2HUzUhmucbuUGVYAZzxTXMMCYZWhqohrPnnjYxC72BnQgMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Ezrtnvrsm28eT5wUrkHRhiCvCjvAcMENvFj4DGJJJuj2QPP4NC2iddLPeJoihzDkrmnvqTNoH4AGTuyDVqXK7j",
  "key1": "pmey1AEygwyZNVJkCXQ6SD7kasoAg2jm4w79hZcxQxHdweLdnJT3ytuirPLFfxmjwH3BZLN3ZsKL22FqybPwXB9",
  "key2": "5attLovkDGVDAE2msFLwXsUiYaiwYjRmpztoP6wWB8Zb6Gr7fRuGMW4rAG5scUVNZu6V1Sn1M7EoRf643A8qsnu1",
  "key3": "4G6pDUFMN7XB43zmgxrNwYZongAVfGVVxSDNDvWqZutEvVk7gFeb43LgbJpCWVcY4gqkLiDypSrg1n4Yp1Sh1cfm",
  "key4": "3ZHqp9yFQqkZQuk7TnzEvBuh9FvUnbLNxGkpLVjNRBGBdLneYGBut9Gv3mgZeunRQ9G8quWTUUN5kgegCntmFWo3",
  "key5": "LvC7sJdfD4zVPmLWJpAZGSJ5hZUcZzYyMAK9JyCfXvyGS8Cu41EbLdXyC958JRG5r9BzHjesBnN5FqNzC5TLzov",
  "key6": "t4ygnGmT6qyv1xv66CXcUSnHwTqn9fU7Q7Y3RXM5otLMfvTeuG1YNYQTTcT5xqQfKDbHvZQgXhMtAu2E5AdAm8c",
  "key7": "5C97FU4Cq2SZmTxTLP2nezbvBdebCsiSkRNWjcr6tbW6aDpPHbWmUJv3d6RBcZRJGugyywwHXNfFTkqSqoKZNK37",
  "key8": "3mNhTuuiswm6csrZqnSUHJww5YEjFNAjf5LrFnLNLbLMG2m9ZUcrxurod9sEAyDD2bamqxn4RQXeYaY2HZrz4ef1",
  "key9": "4shEY9LaWfJMc3ZujiwKjAb6EBWatbbdEJb6desN14oo3Dgoh2LGMDEw53BSVS8yu8FTLr1V9qEtzA78AM8SF9Np",
  "key10": "auwtiEtK2pyR8SERmUSaak7Mfon72f91o8j7FJHdbf9dyK4Fz3vf3sw8esU6tSdTCoDKRHbgcptPQ2KxkUqBw6s",
  "key11": "5jzxZPF66a8efZJFmEZnJj3UZ4zhyy1bNJ3DzUAyfgC8xZU27WtpwBA12JNHdaWX2CQuM8rAPSk7Dj5LFVscUv9t",
  "key12": "XHQHKZhYgfM2wkcc1XjAK5T1Pzw4qqTEJ9dYu5ZfRea5w6a9jMABZXYWuotgYAnaJPGTmUh4LESYgHrrbmju9E2",
  "key13": "3v1XKey6weWDvpGR3oVoYv73zmpvoUUALpBUTndYJTbWT7mu5beY2cgWRH4z5exhTNnK4nBG5cP9s2W7vzFNeKgu",
  "key14": "4nUUcx4KE2v48ChCR7w2CMANJ7FG7Puxcxe5PdESU1ERALYEc2C6mWMVhSUe3vWnJ6obhjHKeeu5i4Fy3ZnZhETT",
  "key15": "4MJGcBMX18WhvovjJaD3CPTd2A7VzzKrUxuy6zoj9NzoSeP7jRVYhWrcD2edHXXgK83mo4y58eBoLqWq6xCn8TWE",
  "key16": "4N5rryR2TKs4ZjAhh9rpJUm9nJiN8yTNpypbtomt7Up7uW4JZE5DWEj4iExN6RiTRjYxuhBqqWFkdJaxCxGULBpg",
  "key17": "Lbd54op8q6ygmL9Q4WiBCfV8RZKTkh8SJ3nHrgaPo1yh2z1Z2q8WVFY9WCUZvBasxX7rAXsAiXDhG6b5UpzmYhS",
  "key18": "McEvjufyinc2JaGiJnjn4WCSWYYWVkPnt6sevaAinWZPUUfDp1MWqU9hoVUdqgaFSgi4cAynCHG2cr6NwJFWu5u",
  "key19": "zHTomzTio6i4KogW4vD6krvuDFeu7i2Zp7katmyPACXAhADeVgqZrSfDQ7t5QWvZKPEjr7NajiBSWAzDzkNhzWA",
  "key20": "5eebboSPCkqD1D9CGxyDqtLYU17cTeT4c2ax5Qg7reA2FkJgpozjpQRmSL1iDi4ez7tM7b4zbfyS7cQUaTcLEfC8",
  "key21": "2huXH4kRGYFiytbr88zoX9pQVEe5HMPDBvMP344HrhFQzY97fvUz9z6u1SxCirDKfb6ri79wteSDpFtppgH5qsK",
  "key22": "MsoSBhBfoWTGaZLkgPPYB1nJ4PMuHWLLnLz8h8fv92KFtZKKdXpAPE14gKXDPQb7HRVTbbcU2NVvMm1pQsjVxBC",
  "key23": "53ejoZ9s8hfenjogJfWhpKJQ8zpx7zNQC1Sj6cgMB8PBTxDyPnDHxtcij6FLJCRTcaDuxffdbsGdeJDwd42rWv6S",
  "key24": "57LvMWsy4irMuD9mKCUAL22Tgv79ZyPgM4UpP1cZ5EB4XH5eN9NPWDYXPdwVAjT8hWV1bephAZAP6mdEgQAoXJus",
  "key25": "5MRHMeAF2WdC3hVzsAP7thKu2s2rFaBd57v6wnUfME6w91Bx8Enj7DwJpKzcJgpUCAw3VrLp5FYzsD9rca7VpQGC",
  "key26": "7FyGB7FjCi24TjjyoJW5BBKg4QFEvbgb2qUWCPM9pijxWwWd3LAcLCeWvSzsCz3y6Tbi56M3hFrDe7k6k234ZJX",
  "key27": "2TkvinzAPtZ1XGRRBbmJEBGyph8gaNStn7uWUig4ZvrdyyNRhQpwwQkRph3E9cBMgxr9P7pnqw3qRisPvxL3DC2Y",
  "key28": "2W8JTHT2mQf73CcF1axJRj4VCtmemfzbLdNdzwfXsXQQF7Jx5XEXPUERXHV5Pj4PYNmUZHqmuz8pNmy83PqGti4x",
  "key29": "3kUNdPD4TNyeRcdnnhZaAf8UcRdsq1aaupiNVZfAj2xaaA2XD1Xgyq7CyPewQk4zbRGWMJzFzcsMec6gCuvPMAvW",
  "key30": "3NZQ3y8BtRpmbYgmhkRZJabv6kwbwSbSB5wHrm3VkKYwo7eCDmogvTBoDcF49G3jMQepBHBoziu8WjTPNnkqB3D4",
  "key31": "4AUj3ctA1jjKuZYo1NiNPi6WcpUusuoGtPijv742gvyc7wPkJbCuW3jGxRzo2X4kQYh7eYxqnejwkBxWbue3KPYq",
  "key32": "3fx3xQxKEMu9UfWdtzAMC9vvy5mieeEgs9gU4dJG5FQh7FP9w8XFWwmP8ynt7zjGJmxFUfkHFor5uv4omA89s8Gs",
  "key33": "3euLaH1MeiJ8twaDjg7jCveKTd5qjWSFi4jVuGZ1hDqQ8e3d21HB3ipcEaqmCiYANR3asEB2nPW7yMB5NAcFshy5",
  "key34": "5cXgN4CMXFv2XWkCioprBSwQAeeXR9JKMPcFKRajgBMS8aoTanaboS1NyUKVkWMxBkgr8BBohyoWgAFKH3UV4kTC",
  "key35": "2TEfxynMirbHT8yvdrBjdFWdJBsTro9so3UioZEfiGSdWm5pMy6q5w568fpLkRrL5TDefzbz6ChP3dkMou7CyExs",
  "key36": "HHAbMz1qSTWwBeHCFZmKeifhMKzy9hyMQhvg72jQ7XXqJTD4Q6UAnTxL2SB6QFo258L4QqjZzbMPkyhEJZFD6SN",
  "key37": "4F6zDbFE3CiGi36rdXJahpAoBSvUjAv9H8vZxb9tvTEfxPnJWLZXica2EJoFTCGKTSUPUvbcYuRwj5nwgXaBcrkp",
  "key38": "hniFi8DBpCshxN9QmueVZF8qsUuZRhXsk1zHDAEuUYk92hwKkmye9khSrDL8X4DhaRbMNzY323ZH8JUiPdyob5P",
  "key39": "2RGHo9RcbMRCZ21ZuBDqYpTYTc88Z2PqKoEiRi8AVbbPVuTpuW69s91y71QVnediuf893MpoyJvSNSR6SxABbD5W",
  "key40": "36QKet5P1HcPq3smjmtYFMkRfGdDrQgdm8ouNBqYyvoDABvFAAKVR4sefQEyUDmjHfpbHLMhKpHU1GGNW4xXSvHr",
  "key41": "4uYPmsNZ1NxXQJepta1PRs8HJWLzno4By5rEYAbAVyPBLwDRzCmAhSESsVksDWhBUYALskaywdSSKax6TcCAgRx3",
  "key42": "5HokonAh1GN5JZazmpd67NTiFfynrBmgxoeiQ7KR6JGZY3be2aVaPGJ62NSyj6dg85ZuFBfbKunriJVSkHqmDgMK",
  "key43": "65dzeUNgJbJTuYXdFBXp8rvXd9ykpnUfPBpxoaTk3D3vZU9pWU5zfweTswFnF4CtSpx7XC6VdXM3PtBfw325ZCSp",
  "key44": "2gn73NTkGnK5EtRc4FWBjEsBtaJDrzTfHQWgP7cee9nL2UuSyw5qKNcEGhzJp2rfAVsZi53CGtM5byYWtNrx5XTJ"
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
