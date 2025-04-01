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
    "FFat7pXscrzoxK1VDb3keb8gotW4NiQ7dZs1jpcQDnVUCtWv8SokG8RegBLrHptJ7mdUhkdAD2e4xxH9Pv7hKUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TF1BANfk7gEH7tAuWXaMwCzvNVDrtYht7tEDQr3K2PhJuF9DGtNqYBy8APJQguX9v6r1Fu8nU8k4Sstmf6pDSuT",
  "key1": "3wuvppitCZHs7wR1vx8j2Ynxhx2gDu6Z1oZhPFLYeDGHvajrXLR3RWAVS5AMfRUWm4xsVhrgXGKVUXwdLd4Rt1RT",
  "key2": "3yLZ4TeDVW1Tk4bJVqPwpiY9Vqg1JBZKN9MGr2eUfKVDkiARZrc2XZmmuSumngEMQ6Ek9FSzq1DEKGdEoYL6W4MQ",
  "key3": "84nPvemy4LSF9ZQ2kZUrN592U5RbgX698qmh6vXxhMH5xtzDeUxrbxEZm9JxwJsTEwtiD6xuGTjsjXBMnXrN1sf",
  "key4": "2UXSrPaebjDG24yi6AeGGemxdMsVL5G7g3Cz7tKF5LQSKmcpAAewS4ShwQ3wcaaW1AdarmzeRTqHTtRt6KKpXakS",
  "key5": "2PdCX6XBmyf161Wq1N9aN7N4L24PD9aidSnQTpn9DXJPZ1k4R98GW3xebzL1BxU4SJgKbMmwr8sqXa6UpfkKjQpQ",
  "key6": "h9828mYGpJLXb5oNpnhKJeW1p6JrVMrp7zwkBi7FJMz83MnSxefh3p3yEwSUeYwrW4447NNr7XXh536WuJXAPKt",
  "key7": "26L7Z8qktbEGybV1f9eUbp9gtjNBSw3TTFqjwJZz8GKehz7gZoBRgTPhkJQ8ZJHBGdFVFndJm4TGiTunSRdTnfEk",
  "key8": "2oEVEwbs37wZLBH64H9WXiQHx5wYqgL51XubNpg6P33JZeLZ5NVCWEe4uvDWe8NL6Hof44s2rcjFRFGddQGNZhk4",
  "key9": "2vzyBzbxihWrupHYrXNzZiFB9zkNAkyTrDQ13Mk71B3E7HXnpb9EfvbHfrgT7k9omdyGW3NW1nWEfwR5wXAaUjhM",
  "key10": "3bvqED7wRBvkqmJ5RHhdBMaNCuLbBqUzoJWQksjrJCGV2KDyF53F6yCzLwuqZFW4RRKnZPBizLCwHi27edNf7AU7",
  "key11": "4QwoMVs2JSCHRszgFwjWAM5m5MYW3YKSdhNsg8KeWKEFwa6ndSeGfPVqYsumBVHha66oBpCGqHA8dAC6M5gCMZXz",
  "key12": "4ZYZrkkYhvRZtNbM5kpdJynjLQhzAi2KSXVvH9YZBveEyzREDSzQ1HYWyuS2HHWXXMGzBX4Uc1ra1aMNMsGVaRp4",
  "key13": "4bvJn6mYn2hzdxTVTgGbFsqEewz2LBA2kKMYymPQvGD14uXKs3Z2HRgB2DHqVfa8xN7YquQK5BNnpYR8oHWcyxqh",
  "key14": "4PS14fgWn5mVX1YsnpquhSsGcihMDbCM25XBXAsRkJWEMLJaUSzfqS5fCCPqVX1JxGTTEnCVJaUnA5ApfdtBt5hr",
  "key15": "5xJDzcr9jobackpguRKcjEGZ9zyNAq3xQYAKo9Y9i4dF8J9ejaujAXt5XbNRiLYDyTA2irVaGZ1jc8Km1u9FdzeL",
  "key16": "UJzGdbuVbR317Wh6E4N23jMJP89JZwwjx583s7n7BXF8nWF4oP9bWYUxUqoNYUTXjvDL4BqNgEa84dxA45bWnyp",
  "key17": "2ZFyjrt4GL3QowJAXJAq7FvK9HWfrQ7icoHqz1MwK5G7cXBgBLy8xjKoTWKKJq1zWU2wQMU6Defr1Nvm5PVzA9ty",
  "key18": "BiMPwNT5D1wJEsVEtkVJ6muoc4Zx1CtGDzvN4ksrpMrwJWFBnSeSArRnEwufNTBtz9hngqCuv7Jwq26UhbuN6Uu",
  "key19": "4CfpRGdUbwHs2sdprYGTMir9EmTJD47LGZVm5GpFJgZJmxF8fwBWKWPm6V9wDwTEgBqVAZigWuGrXcVLtLX7pkNM",
  "key20": "jgAPSfLhsjoHgzhKYXM9KTB9UDqUMWjaEU6YRbtXJCbbATQan6J5F4kf45K5ZctfzFpgppuRfgCDr26hiNeCMM4",
  "key21": "tZdJFxJLXzM5pfRL8f3qstPBa8Mj19sg4wvk9eE6fuGTttmzw3PTcZVDS2aENMUVT8sU1cAAssvRDr4KQgdATeD",
  "key22": "3y4DL99a5pk7TvqxNNBewAt77HxBwBnkaZpH7XMqtwKcMqKkA1qJSJ9NDRjwJuAeMPe28oef8g8EC1eG6E9nmose",
  "key23": "5cnqghPdTnZwEpr7GBTJKMyLk8Zf2NhJuzNaGexEpAk6fzrCqt6hz6mDWeQGgdXJomYJunSitJWVEE6CRFxV6k9K",
  "key24": "sg6vzqDDWN4147SSP98TC3fY6wcV2FkiXUAm2svWZ6AEARt3A77zuHgqJ5TU5mVB37AKjWK6yXN1eeU32nqVLwj",
  "key25": "4T1EFg3SDptUv3VkfTq8NQSWuNrn7ChHfJWP6qzrymbKTkBrF5QqVzZwMdyk1Vv1mjD6bPsVu6mVwGryuKppWsxr",
  "key26": "3gK6qJriiWMeYxUGAyQXpFZVGpdd3Va11heTgy9GJ33EsLmg9bBbs1YFjpP9ufBFjtfVFHKsSaFeZDwWjJ2dLHZy",
  "key27": "3pQ2o14dFv4dZR4RWoagz5LiThC9nQrs3UYKRAgd4aKMKmjWTW81npSiUcEN5GiVusgbuxXUdjDx26QpMN5uvS43",
  "key28": "5PhY35mQm3FfZMrfmskrnB9b472vGnguqULdDo2hJ55EQHi4ykk9otR5Q8VPGiwGpstA5E2X54bJ8FcUjZpfEToz",
  "key29": "4DWG5zkyLL5fdxymzgBer5Vr6cCSmGszBRFHCdmjiVvg9u2xsCCWUKhwXnG8pE9nhUM6fj15wZEGDuvhAKwADynK",
  "key30": "41bNDKsPmATJ5Lm1M9HHXH7mqBi1EPQj64ciJ7BZTwTvGcPxMLd5tizE8LxDyoxVEszABwoEYUYvnGQzSWbqHnQB",
  "key31": "5ctHVnf9FW5rvdEUK4uyWoE9rNXJdnm73fh7tPihBWxJAqAUoJJEiN2FLGunvG8tEZwM7qVhBz3iwfrm7fq7iQBu",
  "key32": "2omwyDWhgrN9E8GJBqjL7X8hVygPQhunuS9xewREYwbP6aTniNfwCXcYXem97SLwYuW3UvBKRVjAPnUMuGLQEpuM",
  "key33": "3dVSkSqC6gW76C4qjvN9M7PAM3zvSkX9rz3dPsKkFAy96zoYyPb2o3zYxrhH4cerUqYiDcbgYmvBFbzjaeGFxfQc",
  "key34": "5tCsZYHztYdEA97FNXJd9CxheUWoicovk3U8B8HKtdxLtBbm9JrzyKVnFSGEbKXk391Y94TasbDFyoTChSwxNUih",
  "key35": "5GeBfcnWn51MCT4Zzw7M58GkfrFgHPfCu41521r339m8bnueYVi6Z6vjiUr7q99kP5LARRZw73nYLHewgYs1LUge",
  "key36": "5xZSEygAVmp2AC6zfQeGoi2AZ7AmY2tU2GCVRD8qSeQrv7Pai6X9aAjDGWYRTFre5UxnRJdSsb3ogek3UpMSMAYu",
  "key37": "42XuXnNetPMdpgDLMdfbHufVDrZmy4xmor15ZHpfWp4d6UT8PkYJZhJUnMuy8RRrjXGsgrpCr4CD7gxEvFwhHR4U",
  "key38": "4ZWAVFNWiWVhy3fghxFMHckgw2mf5H1PQ6rtx5eo4htRvFLhzmqHofV2AF9ZGL7wwow4Kj8DNntPFLWv9kjfmgL1",
  "key39": "3HAVJnVBSZFDnJ6GyWmz2XD5D5VpLMoXHzji7fWrAjTEASDqX3ZngbkNUbFCXGu9YU1S8Qh2SxoQFns4kBUNZUJv",
  "key40": "25Aozm8V2hRjUgHcnYTMzM8c5qFPkUWSn5FccQSwmdL9U4wzCef2HZv6aMtsA9TLB5QKY9DS6APgVMkC1p7DR4iN",
  "key41": "5Tc94Wy5MRYWYv9FLJo4y4fDjKGBBWKjTTSoK8FNndgLHZhhYAyMtahxhNr7zHDTjKgQepKBo7rMmw4SLtG4smtD",
  "key42": "232qPz3rGxtfUoWmmm3BwMZEqm1d92DmqXWF3dx3gjTNWphUzAG6edfTQRC2mz4msj5FGk4mQn7nD9TUjui8q5KU",
  "key43": "tE4vX1MrP1E3MNQk5oQasVW45Ym1ysJmXzjHRJhErXoDC81vNpjZvkFw4z2nLHN78FSEZP1XBkTkHGroDr3ggFL",
  "key44": "3gHyZQXb2raC7Pn2tm4HC4PnkS8BfaPCjuvHPBKUNTtGpTurLhAWNWQNiQM9FdqsPcH7gx7c9aSwG5GCNuuu2AHv",
  "key45": "PX9soCbsingwj6vdFE59WDDjpu5FHJHcrzT4nz5Jfmeur5i5qmgsr2gguHiWbAvsDAuetk7BuMXaVf3n1MvF2vX",
  "key46": "5kpPPp92PC1jXTLkgWpeVKszGzbHP8BMaWpk5kHa5S7QVU8Fzqi8vjKL144dWncLUYUzkWJMznHNwbobJtUqC1dJ",
  "key47": "2LVBDNZ8ZtTVc2535YdgtMBFdvt9qkXDikR36GeqbVqaoM2L8HMpdHpC9X7gCxKXZB7GL2y9cMxUCDaoCqbi5DaN",
  "key48": "4UfaC4QNN5zgX9J8UpNxGardAUkvZB2fXz9S4EnPJVN4s5fkTTLqQjrcjLvxP4uBgEUmyhoFxEiGEQ6bPBPpiBDX",
  "key49": "UprTdDpYB65Tdh9cTotcAHukePcviM1HqsFFHoNsagTXSwa6d7wRw7xobUWXFd2m8tX8qcntp3QZNzKG3TnAHxf"
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
