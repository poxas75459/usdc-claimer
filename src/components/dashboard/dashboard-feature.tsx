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
    "52iHu16QoJ4S4bYLNgGkyuVDErK3yygq8B7ExNxG47qUKjwfo6R1GHwwup537gx7ui9jKp8P8z1stcu625y7iB2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oqiJB2MgG9kagxFgrydiixbhYcu61pjA18EZghNyNu7oi3S9VccBp4eeYLwB6USuaQgZLCYiwYLWvei2rQzUvzZ",
  "key1": "44vbgSnnezcyZQjXPAaqupDB3hTcsrkpS7oVqPT3gnskSDeh2kcjZ1yGzVYZsySsvtYzyZXBw4QahDjA5tkCvxjv",
  "key2": "RSDfCh7rFSZtCtn81CFsV8fhN6j9E9Vt4JdkGSAYbRCntUJrXDrBhKkEejvSJtc2V7aa4McJyL4HoQBb9hVrZWw",
  "key3": "ncs2b8MhrzF2SBF29UFyTwnQGdfsQpigbjM39r2YaXY9z7DFdvMzgk4bB6pgkT2nbyf5hXYvDrCo2ifeHgtoVce",
  "key4": "4YRadMEXvrUDNhXsutF77UDUEUzwdNa3kY8ZjheWESz3XDsE2yGdnzhpRxJdkdF7fJ7eRjdzXgnprfhDHeQf3itQ",
  "key5": "YvDHd52HBCSveeFiuDRwpmwL7D7Uc6Fes8f6tB8pnUZMdeDtAgsUTfcCy1twAtLgMPFaxjA1HoHUXQm1Qzno6Ai",
  "key6": "27WmQ4AMSztrz1DGB1Z6AhrX95nv9YfmkGctGWshJPp4PH6xU3vxg7QogXLRMCqSaEqGWJsF34mtWTcTSo6ZgNPN",
  "key7": "29QsrKGhvZTze7yywRQgQUmUogSM3FhVKp4bZ7fhoodaHHqiPBxPJx1eZZoVvGjKcAJajoX59pFLMs4roctWKCD6",
  "key8": "AkpFAMBgHcc7hKzdyAy45Zc4isyEVGQLv8hTE1XfpYS95go7DsMmaNawvLEo6ECHnFM9EANY1Pa7oNMNGFJMvY1",
  "key9": "3XiB7ad6eYWQ6DWdcoCGFeBNASzLQEV2cRVCEc4aVRaodBPq4k4qaFBcwkATYieRkT68GiKkCCrDcHkiAzwHnwD",
  "key10": "42j3o5e379ntAa7qtBZz5QqzeAd3rwCRvkaq3ugArz9iDf2faqryUdTs3sMQ3j55HPvCeJ64ymwfUUQ4qCfCXFHx",
  "key11": "3hPwPbEXidmR88HpZeiZRj5t1iUmhQ2pFFQLeYpR9syqfbZjCsMLgMgUkkUq2j9C8snjbWhuWY2jcrm9eEPkA8Xu",
  "key12": "3ewnyLtktJ86ziYYbmjPmJ9Ff9ZiQXWhHfAEcCyD8ggXCEUPVhpas8vnNLywmV6vWhPH6CEweDRKbjNZsBddHDF7",
  "key13": "3KBT81WB9tAWMJgBcxbXtp8c1dLcopkbQHuEo6p7ruXvXxsAaMeGaoan9JQ52Svt951JDsB4TG7j8seuoq5zGL1p",
  "key14": "3CjarLWBD2h5eT8yurH1Smj5HWqf8RmJSorhDib2Rkf2g6q7eVRmfoBfgSnmhNQU4zN56HkUV9kDWVYMVFGLwyB6",
  "key15": "ZXdKfbpqS4wyf8winaxLhsMLwKTRZCHT5Ln5Hm86e1SBFKsekVKmuqHY8TwZDA414yBQ3KBv4upM6MX4Y8W61Ld",
  "key16": "4TDYVFGnzWz1hvLXM48ibday9izTQgFsNfPtFQJ1pZUt5tsPB2def7joDEeyHLxajNLhCX8ceUzdhcvCEXT5M1wP",
  "key17": "WPcFR27skkRn1aada1PHBGDKbJxZUutzCcK829tC4eMkkpkjDaeAto7Xc3HXm42YqWrsZxFksELHpNrWEMWF1av",
  "key18": "3CPWPxdEW98BHJ9FmQKg7vxMFpuagVmNFdGbNdxfCJFjE5rCTuVfgRZ7uAgZnhLvKp1zUS4PJBhiXbHVLUEkq6KH",
  "key19": "PJCY3yf8MeF2FtUFw1gd28yphZoKZugcnJbPhatE9UTUECYeX3ZH4CF5MKS4YLipCD9CYRBixA8WoXkX4TEnfGr",
  "key20": "32soFAG8oXCpbgi5ys9FqyBoCJwnvdJYofSjsZV2c4rNZhf5wquUz9DTs4gwfW2bwTc4TNm2fbKJgsRNfze7CaN4",
  "key21": "5bRjgHgn7Lyrr3aZe3Vk6QaSqN2inMfqMPxz3XMpoWVsmwzoy5syASCHueLj34ZzkwVsEJwCSkTp8hVMdWrheQvh",
  "key22": "3D62Q9F7XnnbvyqG8Uf7EZobmv8ZffiEkoQJSnq7h42cekxzKDqm2geaCC5kJoorrwaxWQkxkXt4DQCeocbDaDq3",
  "key23": "3p1gFFcGioKJ6WRqZZPSoNU9p8CCiWKbAe7AUFQCry7Wcav1x7agp4yTk3v8b5wLosovAFaJ5gssbj6EtmQ9UmiP",
  "key24": "5deUkU4ydnvFdZ6WPCQtp5dyPZWLSprStwHrrP1rJGcgZfKjJE66ty97GZD9SYoHkCTEJsPCNtSCHxxyAaV9T3pH",
  "key25": "ZpczJL6F1SadZZcoCzaDdzznR6aRBqPNoJXHWjBu9eFSoJd1C5Thc2shAuW1WnsdD4F6EbVeo7GS1s6GWninVaD",
  "key26": "3ee8e4gE8omcFtCUgCM3GyS1FtYZfbYGdmeh3121XHQV2YrJNwAPwjRBLLmCjfi5P2uiYX5Rgvhc9ryjkxBqxLxF",
  "key27": "2DbsswZiUi8Mn46mc558eJ3ShMkYugNHY8mL1ix3jdEtX9NUXD9ge4Fb6CsvjkjY4WMYEScLZo7mi287sWJ8kRfb",
  "key28": "KW85KpzX46woNbFk4zGRRjPAEydMEppaHtXaoCSyS7o1ooofvRbUCKnWWEHJNhD8CU9zeJ6zbsmNJX3v8vgWkxq",
  "key29": "5T5nhh3LkeRdndxoDTswE4aXXg73UjHGnCJLP9iHcmN6ZykQCQbz9QgRAk8S1pin3S5e8Xz1wSMGxtXwn8cTKmSR",
  "key30": "2chqVSPbpqz3xTCtU6uczoBmoWXFHqbVTaydWsQCfMRxdCFhkcVXHV7xye9DGkyKLPPFRpJHgrGoF2dGf7tujbG8",
  "key31": "4xXYEC2VG234BStu2ffsxZtH8tvk5DpweUaMGVm5VQqWskcqcMknrSUCEkbYeHpghqmymEFbNKgA2kpK25caAHcp",
  "key32": "2w6Rpni5NJVRKfKMjMbXhqmk4NK8JPasn4HHqw4LRoh8SMbR4Fh5PQZRVPFjnSe1fkxEqfkRjXU32d61Saxvv6wv",
  "key33": "75MK9w68z12tBk1opPCRkQXB4FU3CyHEinFFVzNoTuaL6RgKhWLdBf2eiW6e5abiYB2z4hQEHHf6ErSNQ4PB9n3",
  "key34": "5t2PzP9a7yB6nfTMLR6mQxnMuWCwZgDsUebaRQpAReoc7uh1z6iPkNNhVdZYqgT5L5JGuUR8ouXhaFSVGo2okR3L",
  "key35": "2gwXmUZGRm7TaRavct8jqhJw9hTkDCnKXQWHPuy35fYvcF9ZiadxmZf63yNTMKv6mNZkiAKHuZcm7JUThw7fhPgg",
  "key36": "2j5K3JXcJg51TiKocV45xWrkQFtWu4vT5hUJ8PGY2qFgw1k6XidhXVo3Gw58sNSmpzyyPvvv8NA5SqoS62sdP2bz",
  "key37": "2j1D4ZTmaSX9jHEjhZoDEtds9SZgVYSQwk2FaGXeyP1rAesfu5rqNUhxC2b5wZWJm9m4RrfvFMimEW7HM6YGuete",
  "key38": "5pvj9aZAHfVxSqQdKce851FAMRpxnRsGVQBbR1aH1VMoZipo9XeUDhvrjaT6NgMJNkCK29EfftnDhLxmncyLBZb1",
  "key39": "PXvZBrB8MZdKXrRqRz84pyNkBMAEx1iNfJWM2j1zFEmqRetDSar7kcWCNxFN7jqUU4yK8Mvixd92W6W5DfH5Gpw"
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
