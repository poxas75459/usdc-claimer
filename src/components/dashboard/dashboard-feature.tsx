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
    "5jWp3G3Wi2DDjQySTsa7WK2D3jKivq34coxmoET1cNVDLrCbsQeB7oHzbMVupYBRR2jGkNgcqXaTR97xz3yMPsiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rKYPZTVPMa3fQSq5P7HSSg13mmjiBrkn5DBsh6UmUaYWak7pEHrRgZTf35icKrrSWheRquj3axeDmJKG48ZYvcq",
  "key1": "4zzzMiw2pDyy8Uya5ag1PwJFAM7dW3xFzB6YuCJc8Mh4R9XWvF26dsR2ePHdXE4PUyvJLrWB46MXcd5G7VXc3ghs",
  "key2": "5HJpRsehcqmTteTUG9omhegKdtkGroWDfM8r5yXmDmv7jzuDTikuZbu9hW9cz8igeWqtaMJDta4itwXQa5TRTxci",
  "key3": "3qsGGcQ83NiaxFxRDiDob1Mbyrk4vW52z2kJkeQfVFCkFYqbULk4Jw4NFG8YViRXm7gno95rHAQBxHpwPfSkpSv1",
  "key4": "62Y9UTCUZnyFuyFBL4HvVVy6Rpv2Hnt25GKwMEhm2zJh3ZHM6hdgzzsKunn2UhqqX7ZWbSMMJCGS4XHEbnBU2Cfp",
  "key5": "A7SpPSUEaLLUT1zbxwv994VAcGWesUYEaazmBXKync262R8UbZcUg3ywrEYDHtRFixaxznDUgYjhBqbN8KuHLjz",
  "key6": "4GvSmG1t2WBmU4zUVZY3Qh6UVV3gLQFQBXZHEiCVwheKTWttH7D8iWFDrQQVFUEpRGnsHzmqmCHZPqNmJj43jUH8",
  "key7": "51DayrTM81n3caK4NxC4PrXNEtNYFVYMbTNyuFzwMujt63K3ZpKrZauLjwGmbuWKHXKvgMpLs7nq3E3Ww1zsQav2",
  "key8": "3TAKt8bumfzVn2Z2hiAQy8hVxaCivLKu9SC6VBaqcxTFgdmjdVDCWeBZTDbFqtvsNMRaphqZdit4JFaf4dwwk3TS",
  "key9": "UqSQGUyYAGzPZvSPeQmWzBbEV2xmzpwRxDKeMvM9ktg5z1mytVm1C6X6t2qp59XTRomdJw2CujKH82aUP3aaHK6",
  "key10": "4uKuDDATLhDniTmRodacr6rBnsrZ17nJeq4kbgFLte5qmD2gPHrLy8aNByX8PsqU2VJLqsDgp7fw9AtcKPeDDUAk",
  "key11": "2Z3Ckonp8FYEs8iiDZNFTss6E3989t6eWV2ockeTd4f1NuosaeTn25Ky9aUCZKZbT6GHqLVCttYpvvYTHNcd9GfR",
  "key12": "4yM9LeAZAfuKh9CQXgTAyWbP4hnWbz4uSCU87SLSsZtYKW7XyYUHqqFWYTDDVyG2Td5XFTHp4WminVSoZt9nC3iX",
  "key13": "5jHy7BcfwPrbSXc8bXmwgVmYoo7RSSfkLgLTGwQAtw2q19ddkoeL1MtXrSHw5JBWGTn9K4h2Q6nhCuB5okGvyXUf",
  "key14": "3UotrqDQp1XX9ECpLfahrYEqigy8gs9p8w8qc8pJ7cE2NG8JVvFmMhAGYH3HpTkx5efcLexbaQRon6WevCY8YRnA",
  "key15": "5YwxuhDvJ7CQbVfstpzB6aPbc1FLA7NjjFq8XaZCw7PhDVCUGzXpDvdEC8C5nWf5FBkNeAV9MZbzGpLkPiG1dscB",
  "key16": "F43YrcY8zUBWsHityJaYdnNFZH3xKCRUPXTaWKdxXNySPuG5ykAoic2kEnGq8qMHxPg1xsL9Lxte1rCahX4BpY5",
  "key17": "22t4qNLR39mhieWg3QLisFMasSLTw8LaW1GsdJGWrNSE3A1N2zHnmzWLcqXnkvctmb2RAVBqzxgGcGgAbT5bQYXT",
  "key18": "25PaENBkSaQaWymwZEuo53AKPJFJardNeeLkxYHoiqRgBa91UmU1NVM2JUwgSbTbPbwA8cXfk5oixMuhuSjGXNcd",
  "key19": "38ZFxgkiKMuBnbUzPvHxwSzqRMgHfik2WkfFUAVUv7UCmJ5h5q9f2DLepCWct5YvtFVNgTZhs3uC4567147VDgqp",
  "key20": "BLeKfuWCdG5CzfPkMVKoiQNxdWL4s7PD6NkGLkY9qW35wF9SpxuftFAZyJwvdvZGUzWZxh1YrTwPNp1Uhgo5qty",
  "key21": "2gwXRzGSPdvuZ3j8xqY6ojLD8TAGifLPLMyFVutZzpKNGCcf5oH6X4m8FaTR3H1G19B6ELuntg5am5GLkWJcpu9d",
  "key22": "4jSp9WAF6fWzXuRjStewf1ZcKk8yXuzbJgyiVGAQkPdCN7n81kVvKYEhaZwfHGi18FgZR5xfG6Wmk6f6svuWygDY",
  "key23": "3kUJPN3eEUYyVyvcx6YvfiotFUyQEnXTB5MWzBRaWjJrjXCWsb3aXoDzLamy4Z1SscFJzMXxU3zpEzdcTzqLQFH9",
  "key24": "3nnvpAyqRP13r47tDFvRZTEqgC7tzrsVCVaC8RyXgP6WRHaxQ1QhfGoxxbr1pub31pX3DxzPTY4CVJvvCSsBGBFd",
  "key25": "2fSrHnXgGbyBV8pTU4ZtDyY2utqdHBz5rgosqY6ZUWkzne3nnt4tofPvPGbEr8K1oDxC1Mqv7fQn6kwuuyb2JWZe",
  "key26": "5XRGc1xCBrhfQtNgmASzFY9EiFxzPRPXQzz8KsXit1vmhb4qSwCC2bzQuf6ZNdXSF5vTF1PbCEdwk5RPXjmqgrDH",
  "key27": "4FVs4RcPzJCZ6RUktkUN6s3iGkm6hzq5JZRyqqRgqRiXfLDKYDaeYc8qDALVuBVfgkN9zJQckzydm3DD4fc797iB",
  "key28": "2ajxVEz69xkzfvKm3b5xnMWjEbZ8faHRCAPEzdjB33JZBm9Tj3whvRmLHyVc9NLqbURDnyQw36ypXPF9cQpjuwoe",
  "key29": "4YJgaQJgv8R6ETAznbU1Ei6ziP4dD5nXkfgWccDh4yWqKaccnXyhFTXUHTTCMipyqj3B1UVDNBLmebiwLm9ayMsi",
  "key30": "2owQv2naRCntakHGLXuBhg5yL2zr2ErXnWsMbD73EiVvGb6FPkeHrd1uYe6r8Z1T5h7vWcpBBoMrZfzDGWk83FWE",
  "key31": "3ur38w8eXBuXkrVUPLF521HhoZpSVH2VMZ5Q5qdEG4iUx5tA8gT8tvnwyNnNpAASYZ8VLvVYAMBA1iVfk3zrmEr6",
  "key32": "3vVyRDGSJbFB93jTsyHgfzCyY4XpijRkhMiWZjaqNAWEBwEVpAQUMWJTT93YSUSmhN5tvc1EjVrBvH5YrbY5m7yF",
  "key33": "2kFYdHTrn9CJSBJkd8SvbAG5UihEMaEFUYH9mfBzBFDG75TziEnbiM3mqzuZM9BAMeQgzd3QSGRg3wzsmaiNRQtc",
  "key34": "5B2iVCQ2zMCj4VcEWosZ8zXukaaD7sxHCpCxYxNpsAhUcYWeK8mBPnPr1Ub1QkfMp5vYd8jDitciYUgeppcA4Y9p",
  "key35": "4TiNoR81SRMVygjjPT83geDyKRsqmCBWN1BJ9wYeDb4LRvfPT3gDfoqwYR8yKkemmRsUzCcwYdC56BbzGNRx7RFt",
  "key36": "Mxg2KxnVjnYhiwy3rkMQepoJYatpsNXNzSmtoo63yqyPP2cMoBiubVzi8p62JRQ6EMm8eK6rb2Zs3J94NyFtmnN",
  "key37": "47Atk58MvnW8VmCVjknY8chYt32pkDmSwovKAEChRPguoEzMUKsNBLJ86eSCNGpjBzc872QgZTE89xy26zskar8F",
  "key38": "5YNRp6Wmy6nfBbVpmTr5ZMoTQXAbfJbTzZWEdFPniTqwm7T4LKySKtvZGkkK6n5m9fHxAkKJjzyjFEkh2aV9c7mM",
  "key39": "2Yoo2Ehr3YAjbwhkYscUXh53jXbKhTzEFXyjn71PvxNj4TeZSs41ZpedYB3jtQgHNgSTrBYkrHPme9bUFBWd54MN",
  "key40": "5aVdiiPJEBskhEjhFUSbxDXGF8JKVtzDXw71oeD2JMpZBHYSYSkqkeWFddVCDNdiK3HFvwfcUjnPGwEQpVyUoah6",
  "key41": "5NS92d4Gvf3uPcDmqLaTWywq3semeH78K6WTBWL3ykDpjxySTG3YvSFss6cUKbTwJYbjAxgsyn6VQgMpUWriUEJK",
  "key42": "5ndKBwhR8Qg8aQ5DfRijWa5sWrNNzNVTFFxXfuPwStxAPMaTFtDyyykk6ubqC5Cyeia7pK3z9nT5eiF2DCbASNvb",
  "key43": "2di9vvrrZoDGKiJYH1fMJTJ5KFLQRUNAQUXGNx9YkkoctujXZ84dArukYxYw3cdEC1arpgFAWdKvdiC41yDTn1Q",
  "key44": "4sQmDtBAqdpTBxfgxtACmBUYCVkZuWJW6GgboDhR6n5KYpdfpjkkmDCCSQSYTGGzg5eW25MLSeaJzdnRdRKr6HeC",
  "key45": "2s9qXbJjdVs5Jeb9t8THJWvtcQck9j5tTLu2YJzwoCWscs1L1jEzgoLA5tVcYAfRN4xCA15F8TSX8FQYeyUbbFz2",
  "key46": "iDXTvX5sALC5Q9VGagtshra5pi4BanTH5xLnGFTbH2CdQa4V65dEjHjFL6p7NRSoxsRNmp57jnc23L1JJd14i6B",
  "key47": "3jNvjbj4kHNxKG42QxSN5BTzaMPSt5o7xkBHrSbRZAE6cQDBcUBp6YYnHNcsfFAsSdpJ8CLCadyiEuu5N63vJMQ8",
  "key48": "5nNU4S97BQXmY23URXDZxeGUfP9BiiwncKASCUHJTuaZaKpA6dNH2WUe1ee5gbbJuYYCa8eMCvz2ZKCgGhNEpZsW"
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
