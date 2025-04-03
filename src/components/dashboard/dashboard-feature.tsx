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
    "5qVzGiiM96kDQ3mCtM4bf4LaUJqCfuDu4ZWzoevNWZmub6WvVMskfxubJeyttrWpKx6BrEXRkf5hKPHApSYQKKco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38UKcPY12QRXt9oNqPemsr8ZWRyBQkJoTVDtdESF3QBmADaqcBPAs9P5tHFk9HMUBN8UtW8h2KqcjMJxxX1o9NiZ",
  "key1": "38s4bRbpKHKmjF66zYDeEEEfsM1dLeJYKtLiSXDWvDv7NrTx5jZ2B4VJjAKb9tT4H5hKK4fudPtYfg8ttxBYyvyt",
  "key2": "2F5HR3EHyAQ8yqJhKMXoBM8tJPHZYCQVrwNDvWnLdJBoAy4Be2hMjPyStdBUL2BS4WYXQiQ45ecXFvGNaKskgQ7x",
  "key3": "5SvWiFDGMm6qJAQsgmHr8KEZj6T1Hp7RBCPPYTPGFbfH1yXBYKa4aPLY2ioAUhLjfzsNfh8r8BD8yBn7ApqJ6ePS",
  "key4": "3FT5sDiHWXN1uLycZXkkhwyRjKjm291Jeg8grCS7sXHvx47Z7qJ8CbssMAYmuBHUHJDDtaThregaCQmJtA58LUY2",
  "key5": "iruyzKVv1aTyRis3K9nDJ5Y2HmkiUgsGKLV6jrhJfuzbTXhBWxK4YecQUFbyTyWMUyNhTuBUfu1sWVyu7cGGQKS",
  "key6": "29M1pyTH1JeRkfuKfPLF6FNSJmXpLiiUAcVM7RwqyLzvAEicz8bNp8KLndz5FSqAriUxzFazX1gY9Ni4x8buXGPR",
  "key7": "61MF7G958Zsb3HPEqGVGipEXMYB7La9AB8vgWYGeXYXq8M7AME3qBfgGpgmvrQEgFj8g63FdpvxE2BiR9DmzN3ia",
  "key8": "4tt9r1o4NXMFJm3L5L543FVGaRUUi4gwyfioK6DLrNSV9h49MS1qjXQyEfJ6qDq8WBTRDDdQrauRRna6q62RxMGF",
  "key9": "53ShpU4GCRfVMkqWT24sM8HaCx7jbXXZeprwFT6R6XgoC3BS3u4aBv9zbFLzWJBkYtd43YB8PQQBaUASBEK8MGRv",
  "key10": "9g5QrMuxKGM3B1UK8BjxHW2EDY3ot8KYXE7f8ENzGWhpWSpdAa3fw5cgn4Jg38diARyNACPgUgbbTP7C1mmVaFj",
  "key11": "4aecGAHpdFZGWLvggmSBYy3Pviki1ZVEPHsWQu3ziiEg6w25ifarmymyhbNogF7bdb2ttfvCHUABjf8yvxmedWXg",
  "key12": "AUKm1mLTs7EbijtYntv4DEUiX6dgSu8jb7cor4J9bF4iLbpXnNfxgrtw1LY3UPn4g5dXB37jAgRdkMTqP3YZPcr",
  "key13": "3aoYtXTUb8GEi4LBQ39nMTU1cmjPqF3vh8cWfG7MVRUbt684yL1X1Zw6F5aPisxDNHEnvkqG97Wqg54d3UMk9fZ",
  "key14": "5V4gMPeeSdrAKZ3eLGbjsQuwoNFu6tGswzyHfq4QUByNsHzcL1rvfVyW96KWjEX1Qk1U3nFmH4YNNEuNrzgCjhhM",
  "key15": "3QLzRHoHeiiCCMPHVBGhrt2rYdSzW9uUq5c9s6RQF7vjgiR14iEFBDo4P4dRaKpZbAoZZVFqLTBt89Q9V4arPApp",
  "key16": "gmgbANw2hQvDsor8JGtQEn1ArR3qK1VKLCQWQfG2L8tabYuuT8JtZKhsi38WukjFoiQbDRPsRNMWhfiRkar7pLq",
  "key17": "ysTLEiKWKu3c5C8jZ4z4uW6hbRaoqpDSjnbWBs2KAGfKLDsPcGHTsj8XYAuFNxmLLaic6ihgvUb3T93PfYrGeiX",
  "key18": "dJKgcCgbSegKnjbRuDZmPTdqSrN9c9VhoRNX7ouW7ndZtQGeJG1VD8wH8nZ6i9zXbuQKqaZuNidF5zYiqA1PQfE",
  "key19": "2vg2ud3VWhfifVqx8TaDnDzCk8QYkLPp6njzkMMf8iLexsJfvaJEHd6aavBaqcykACf96Xn44HTJhmw81BNFDRvY",
  "key20": "3uqiUsyRRWuY8168vYaAhyyx1aMepG3zeQ3KLNCvAY8HhfddhPzMs6mr9bDJ43pREFo21NeDaN7GnKSexdJLhrfo",
  "key21": "CEWYu9q4vCLK4JUJMdaCGgmp7wGW5SgKWAa68iCYg4FKMvpVcHVSuPLUpd2LAhtJhgT3krWewnvFBTBpa7JoDCB",
  "key22": "2fB9uM8hXye6RZgbfL9L98mY8RA56uk9k558tp8Y3nWt2UA5qjqSmfFieLgVMrivanKzfognA75wWFyixsJp8tht",
  "key23": "V3DY4bq1exWe4YtY1H7QahkVjfAqECHqrVJLVdobAknpV1SHb3GpLvB5kmyraDpW1DuL6FmaQjfgTvy2qcVdueg",
  "key24": "36H5SwYerR7JkW2FeK3n3ivxadVd6B4xC33K7Rc6w4Sz4heRsb2CkpscRbSE4QHgQfbZ4eua6Ge8QdtGJmkQRwP5",
  "key25": "5C2ATBVa2CMLMbtNsdpkUM76gRH6K5T1JhoFg5ooN59tySJwVdRF8GiU25WrxV7hZd1SsfrhdAtfdGgzhAzuam71",
  "key26": "3XjtAF79Unv8wrnWmS7PdtG3md6TzvGNywv1eE52HssqjXuYkkmzM9MRj6mLox7yeMmhHoUdexHrt3UCFnx6vPcU",
  "key27": "A39Scuhw4m8sBJ5aZ7ErCeGDKk4P9pmCJL5VPR3iPaqkfbjtbnJhYgSAkCsKJd6dUof7cDnBCG1ZK6EYa3FhLyu",
  "key28": "ETVbypMsiTD43PR98kf8fKi86xuT8GB6Y8XKyoZnL4SHxiV3VfTfByAdRBZBbXf6H1h6P9Zh6z84LQKaPCUDnf4",
  "key29": "vHAJQB33rvVMTtY9wSh2RkhRqV7iYFMpB2C8UHVt3Mdhi5CkKJY5PYQgxfrf5DrCVKd7XAmvYpAtz5T64emdKaz",
  "key30": "461rwZYVj8HFHaqLJjkg7ngndFDVnr7nxSTdUEC1YC3LHerfCtMqWfcoMDqinnmZUhbHcPtMSw3jL6QYG3WNUEUo",
  "key31": "43ryAv1QHWH37MH9oLF2usQkStVcKtHAGUaHEVDvNMSuHsRZ74VgZDua8WPKzSygyaSVbiXmaDtHEJarBFeifBUK",
  "key32": "35r1fjofZTdCh9XzQHnk2LSTMe8taV3EFXbejeH46ZsmdfcU3bhf3LCFvdukvGPefJKiJbh81nhNzQTpEs67Y2Xm",
  "key33": "59FLZ5sWpUmRWH7r2LMXjexFLGvj386N5RJhPMKUXsA7QTPwT8mD5V4cqqmPpa1BMh4aZFDXF6RcBWujatVM5HYt",
  "key34": "5H2HSQiQM5FqKbCzUusHXuSy4w1CQzPqzGbzvt521nAFtpb5SLbHsXBqvTkmMLRj9edWii7yGhTL3oRmyWov6pnk",
  "key35": "4eGEbqKMNoyHvSXavLrEJqN8ymm3p7VykTkD35HoaL67MBCXNK31ZPBWJE8FKMfJfiWdeQ8uXFEVnRsVnoLys75h",
  "key36": "2L5Cd7HdevmmMJyYPSj5QNQXwx3YYevxbTJf7GLbBptMvUMzwcUhV3bKKc6D5nJ9AJV1GNn4c78TvzLcMg2rx5YF",
  "key37": "FNRVK8fssBKCBQHSzsFFTLDrs2SdckS8KzwGBUktW8oQfzNWxTyukJrvq4CJ3id4HSEk7mE8z8a3QBPWe6Hsd9y",
  "key38": "p7MVoM1u5ufnqPtj6yjQ9jhdFuXDAKT8hsKPJCgC3iqHHVJcpJHKocoxqTP5kogmaeNYFpTGWCEAyed25PbwQwR",
  "key39": "L29mZCUc5mA7atE8BPopqYyuL6wvU8vtbCaTtW5t9N8JKVC3QMNNGfDXLxSKw66HCppcFxfMaVQZ27HTNnwM3sX",
  "key40": "3DrcPX9LCM9CxdPTdnEh6LV95fqmNFPsfQbvrF9FkrrQuC5RhW3dAP7qUzfj8YgZ91b7GQLdjepeikYH6EwKL6cU",
  "key41": "g5fmVVHe9GeM6LEUSGLdEwzj6t3VrGQ4TAMEZ8APbrUg8h3saXU6XTYeTgykPH1KL2b1kTztppTUF2GV6Ph6qqz",
  "key42": "2wgZAqLFHVLQBc7ibM8gdPvmo98JHRk7JGBa8pnC9pRvkPeTZhszCovUTiP1mNYzSKw9MaDbPAVe1GaLBKNDpaff",
  "key43": "56YkwHaZF3m4GFWYAt4KSbQ51ChqPk9XnJLXiJq2vfKqWn7LcbnqfTD2sBTYgzDcy1JXcoqiuYpUx6C5vka8zcQ4"
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
