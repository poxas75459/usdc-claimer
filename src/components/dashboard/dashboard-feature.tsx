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
    "2qPzyaEja7ufAmgkNwDATZhZ59zv8viixYyTXi52wsjXbjNRG1UTrTJsv6JV7a66AMc59YCj9G8VPexDdxFHCxSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFqju1e9i1EjxeNjRVKXjd37gZA23ijHDknR3YutzWCvgRu6Z9bX9LQX5HjWhFV6iiJpUB2Rm1ddsHfzCy1m6Pc",
  "key1": "4o3MEd6hbpTm91UnENEBHqk11CKXGC1anmoqoYRYGcRrL3bpxq1fm7RqETq23r4yrjPy8Xcr2L8q53tQcceKj4Ah",
  "key2": "3iZtnLi3ZpDwyVwuKYdinQb9p23JpxHgznh2rS2w1R6UywukvJVjAM46aFdHZfaCCUgzCpJVLVnYHJShaCfXCZtm",
  "key3": "56VymmawQSemJeSrxN3QqaGYGcsMbxLDsptAVAtVBVS8zZkxXXRNPYpJFTDJVpBhBemDzzbvQpgGWYFgLP92yRAm",
  "key4": "3RMfvWV7UK7qPkeTZ4Df98R6tpLEPbER1RDrjKNeZDMcgboiKjN25CwDoWAgZYoij4XNQDZgSk4gvcyowp8odGJk",
  "key5": "oVZjXStvBjher9XRyXB3s8e4nJHmsuqtgUrHCF3vTAWPMcxcGFBy8ecJ3qPabd7rkHAQP2PkneAWzQymkS7ZR4w",
  "key6": "55EP2mc7Akf73q6nhnzXGzwjizLrs7rhG4dnUVLG14EqeTVZdxczCeB5fpRijshhqmTh67FmmNi2e4tUb2ydS2u7",
  "key7": "2iHynmsmwCqZcNaBbkAXfoKZtkAGTxJm3ip2x1y4egKxpeYJ7awUJi79wPJBJxiPUuvMFsaYv2bCksbP8pxXNzZh",
  "key8": "5ydg4ttvsePkHVzvPFRz8VZ1CjYeUjZt9WTM6XdxAFqWT1cS8KUWFe5ibFvhKosxv1uVcQ4Nb978kKgdVLL8UmDc",
  "key9": "5adT7AGEZ3UjhaBY9GiNkCqsoX6kBkKSmoajbC3dpjKcPwoiPis62gi4giPraaysyXS3bhsof2QGZA1VCNwittmE",
  "key10": "5TVGWb4YZ8nVrNxMC3hCaJpPJVrAE6vHCFAka3P34h4hnf8czpuzv1dNrrQZGj6z2Tvf3gUrFi6QTDpy2VQ9bwjQ",
  "key11": "5jdKsb3bs2Sy671iMagZ6fyJ6nFSqS3X7kt1zTBaQtCCFF8ucemfDSeLSsX5b4Xz6GJQW382JF3Z31aV2fLTTv8N",
  "key12": "4dU12rXLSgvXjkg7Y1hC3jGWMadfKV7jDXqVWXFuf63tkBWRbjVMUvDMM9MGkzcL7qNhDcwL92rkNsSoPhhzCLuE",
  "key13": "4BaSJ1e7ZWJsJ9WaeCq1EomyA49tYHHamXTc3CqSf2pmCUwh8nyZDPMt4NYXfm6njCUghq24jDWo1JbBcuxNj9YK",
  "key14": "fNHqw7Mew38mBwbxY1HeUTHmcEjCLcJCBjiAseRLS859REhjaesU5Zbs2HJpiaRkYKenMkVsJAfdPfAwReXrASD",
  "key15": "2ECbpKDX3wgxzaozGxvG7LsEmXbsPhhkTqzYWWmuJZugYzbs1FQnTRHQ4Nwz7yMq2k5WzheAVmVNuhL7c2nMYNwu",
  "key16": "3MjRXUtYqFphemKaUMXmMsFdmk5TRvYcFRg472mFmshgyZnhwc3nMvtXMQbxezSLFuxUsmpFo5F1ppj6zQNLhMLF",
  "key17": "5Z9ZaMnFAYvRSjVzDhAZzXC2cH7DwEGx5Xnmk8G3iehouVGjfkfK1KTyXc2EWhqL3hQrrKD43zfk5qrrvKurhLF8",
  "key18": "vGF6JDy51bHkU3gxrVB5HkeoxVqLJo8w1j2KwEbrxKRacnrZsQyauKPtQLTwy5FeikH33m7jWbUXhPSPQtJfDTG",
  "key19": "h654h3sYNDnjCYVrxozmxCqNjHHE7MA6YiX45J6yiqVcUZ5up7a2tc8nQztPDPsWWmQ7aavQb4v4K3pKsNWXrGJ",
  "key20": "VzSjQ6sE41tJJkfKUPHR1bbr3a4K7i1nDPSDh9LK1WXEeDHtnKfC7ZE4y35r1h2BaQiefwABQi2BkZmHRNjvnu2",
  "key21": "4Bqw9xzRATuuCEoEd3dsThDyTXcJ12z9tR6LHa41jx8hrv2HvggCr5fntDwpkUF7DE5dpnHrPhahuEr1P6AP8Cdf",
  "key22": "2EBaGg6fBTkB847qKEXkHhvMzybLjbcjystktA94QNwhemaVFFVmNAFnsEqddM323dkyGeLnaUKxD4SPmGBG9ftK",
  "key23": "66Ve7wnRLwmGdik6Bqgefddbmb3SoAQc3b2EhNb3sDkkogoNv8vj8PweHDPRy7u1U23ppQSomqfxN3r3nLDnexj2",
  "key24": "3ya7AY4KPPaeDxZ6Pz7xUpkwczoHotxMMdNpUq63ybNc1XJP5kRKf4BhgxgtUrgW7odDXaoFZ9SrCLDVCS7ULsZT",
  "key25": "3uwHqYz246KN1GE3Jy865hA4AxVaVg5XqeVmvjrcHjpHQmd4d4wiQ2FQeV42EVeVhSPfFv9rUvYdn5VjtQLMS6mZ",
  "key26": "2vDT5rfaAnNuSYbgoiRcSpNvsYafi8x8yebNi64mRXeszvKJBd1eJnhCNKSaRwrp37TzHsjhWSt4aMLVDVKnymew",
  "key27": "4YAkRTE7QW4VS6yaXwnLRGVP8qFzEweeD6WM23BJQyAYEZMJiNkTGNUZPtDbM73FQhcgNqBbf1xMtLTrUck14sRR",
  "key28": "TSejSC5PWDbz3CUw1Ve9TkKkpVrLRoFnQbdCxg6yuKXuZGR34fW5NJ3JoRsmhQbwhgef4hCMTSYkeagmbf1rHGh",
  "key29": "55wMwvEepD2vVCbq4bNneuJXUP4i7LXHem4vX9osj6eLhgtvj8BH5R5hhvJa1LkXPyMpV196ZPjoR5auMAGmBUqR",
  "key30": "5YN5cYJ3XosPgNcpyziKzra3nLdeF84SRuE2Q8zb7FJ7GSAMuFC5peivP8iog6vqx9UkTYiPc5F85yVYCwtJ8VK3",
  "key31": "2tNTdqXiALLh21uWKp5fhBmLAQ1LSdcscg45w9sU8Y3bQQoBzsYbG6nTZt3wcoLYM9U7bjYHQAQDmuhgnCMr79yf",
  "key32": "5LAoSB8VvwqLdqvtEXYLU4zkjrHGgZ1nvT2eMdQLMMS1v4Dhy4HndmQUXCv77NycryGjyzs82sap3qqY5Ev1xZcz",
  "key33": "5ym4KDxGymjKvBAnVEdTNpkoDnXRjtovFMT78B3V2g5MX9NEDvHqUmkgAfu3S7wQiLsonjv8KaCEBo9Eeq26HcuN",
  "key34": "62uYApNrn5FS863CoG877eY6JEZtYcR1nMQ8ExRN7dnTgBL2ZnKqh7z37YDPeqbvZCvmJf8XkBmbfZJ7TWYYmpA2",
  "key35": "xXT4XZDQaQAqKH2ynGbXRFQuwdFLpChePYj5nFh3pM5BpQYoiwH2SoxGmDpBo3csEcFoz2RnhvoVU4kWa16Cffr",
  "key36": "4waXbe8LC2UmydCHeuxZt1bkdpLJ98PmxuJAoUvFca9uzohg7pkbtPgD4o5BxKC5dMaZyqzbpgxNK4AhgzF3iydt",
  "key37": "2x7YHWUr37RKke4MkVuuqe9JK525sHozGMEcdFXU96u4RJ8ivteF5LFMJUGZSS1WvEecZCbKJiRriEdZGpq6fwyT",
  "key38": "3UpkJsZXsXVuheir1MXHQQaYR4yCuYCquJUbh34xqbqPg5T9SFLBhDDqFWd1e5NEfJTA76mpMFFnn4C1NZHc9Qzq",
  "key39": "2ABhde9CvRqqfmEsY8PE5ZTvX43qBZmoNY6T2QojU7FWX5bwMES1MYStVj7j4FKzuvNsGhSUPwczutAXRu5TRW7B",
  "key40": "xoM2hs7PGHd2m3XErCS9VtTqJ69eenXrS2N6ra4yEHKYkGQA6xBA5vh9CcMyRRfLRMJcrZDASnCfVAQDJrCj6bA",
  "key41": "2HqCQep3hGi4GySVY5me1phz1PVwxEqvqbEG1eeWFXfCZWQn7UhqhQYrcrAnypr7yGEvye1DGDX4cztadF7RDwb1",
  "key42": "2c3h4oMQ21RrD8u31SRJLRAj2BmzVjJM76yYdb1tsiBcuMmnaW4UTXpCGYDits2dANVNnyVHx1xYsCbcPVvRK1MS",
  "key43": "2ZLadVAPzxPQD3mJC7v28TfH9biZu8ZFJVXw4KP2jWmYXCsCABajJAyT1aC299G8LEpGzoL2F54qxKaHPDxDWPt7",
  "key44": "5qyJKoDW165NDCizb1v31LHtXLgY15dHPbNMXWmetXjTMRFDUyAFp8xBhHXPuLSpVK3VjgV9pPJJU71aGwSKBXWK",
  "key45": "5wGh43vEbZxK1VaJo3eDvpVcAhirwtkyUKPhCvHmZuHCkCMcbm1JMwCuWYifdaK24qJ1hKoMvw1kvfTfrPxboqoL"
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
