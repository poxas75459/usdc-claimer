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
    "564dDtPaxiUtiUUNUWcEXuuPT7ccwSqTNLam9Akho75i2gcpE6jg2ZWwmPPhdTUucNZjP9Mp45wZaQUyR5SpSwJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ST6pAQ1xbUjjhnT8SFszdgu8yPQhC6FSxz5yUH3RbFfLHMXPU3JVoTwx7tzos4szJSfPX6LVXqn3Wcvm6ESHhzN",
  "key1": "5nVAAMJEztanJSyjPrkFfPDFX8zJtxzR5MXqMTwo4RqY6ajg1XeCKUYZ5BBS31Xh5ZfwuQWjG8GYp993RzjhRGoG",
  "key2": "4Rd3kBizoHhaHnEb2sps9rQipgzE7tib7r8GZ3qkDSLRGh67chuHwtHqnTgti7nkRKQDn6xCdhpLk8Dm41sccNM9",
  "key3": "55rEgnVikiP71NAvD1yJnV4GeXP66qE6cqzFSMQTdJmQBfDGfqWtAkoBZECyU4kbPEW5VQe6HYyjD2gfGxkiUZzH",
  "key4": "5bFoCM2VyK5aeAaYAQR6857ryoF2bYfcam7zZMAopQwrA52q1oxV7QdsH4a4R4Fi4LdQFgeZGp46WoaYQpXQBvxX",
  "key5": "2yTGuaXWf5irq7wMo8CTZpSKH28KJ3Npu7sVXugEuDk7qRg9118aSeTMK3iExVG2aW3Bjbk1CW8KWiea8EZjSsk9",
  "key6": "4dMEqhn2aqzPAYWpv9CCya9s2wTQjuopYtNbnEmrHqoPmGqzbQ5XoeCU1719xYJwBzcsDqmA7XRCPUAe9uAgTpAU",
  "key7": "dTaEMjL9DMQWhet5zHcZKm98wtCWcbyarQY66Xfg3az5786FepZ7Td7Eg4wh9JyyJpFiQ6WsY1ijVYQKU6WXJM1",
  "key8": "3avmBLgs2dgTrDNG4TYNAP2hZVjdKF6QnixHSWZTXyt1pULSGJByM1uT7sEawfK6SuBmkoUaU779rsrBhKpVpNv7",
  "key9": "3mjr2gWDfWXPpcp7bBf9xPGcaXw5Pgd8KSCcnP6SWsFTr9tyFTzi4XfQEDPD3Bx22AbwozHRbaL7yWar3rjo2o3X",
  "key10": "2MLFpuRMPF6L581pUdXiAvzE8fPHExzFT42sreTPXuPkUiaV6WjMRu8Qs1Fo1UGis1VsPyAQjbp9Wcg5qxhHudy3",
  "key11": "oB2Tfy7kStU2QfZw1vW41WctHtQ8jDHEyuWJ53ykTpws756TcGx9tE4n3fGHi27jguq1fqb27FDrQgfxbUgwJvT",
  "key12": "jdPBu5FNBHFQKSnnTjAi8ZngEanjTZXpjSMs22sZqCEbVWBVf7J521Z5KxfnvuFFAmyubLkwM5a672AuKynn6Jb",
  "key13": "41Ly3r56RMKR81LiCYpuMur6iWkDbQBh8xd5drW5Ent1kErXCLq712hPsSqRFtsSwwKDLnXfhKemuruM2ixSRBR7",
  "key14": "35cdsTVzsJRoQdRdctsAkdudixsAZet5NfJv9uUNdufPuXcfiquY5dyXrL7mmRh9jjcmJgbbeHEkzqvK25QQuQsq",
  "key15": "5yV8zzFFamGUvN8wtL4bnCoKJKZ2UTcsio8FiPFaRRw6vdcfeUp2kJwHJnirKV2RG66f5s933jNvfaGbz4hje3YN",
  "key16": "331h8Ly4cA5QhDabkp2bBePHBCTqcgqG8kdpMcKwnyKFJQ7DPzDJV1cS2UWCrfEgvi9cwWx7kymvxC5nndhsBbfM",
  "key17": "51mm15RtEbpW8nFDBmTe3p8gCnTdF9zBN1z5vo6nsW1KrBFtYo52aUVWp7jED4sMdoQWjFhWSQFkDDaQV7ACoyit",
  "key18": "8P1Vhsy5AbX4i8J9jhgyTPsyNp9T6nutbye9QC7mT4dUPwBCPi5ZLzrbaQYqaw29QtGHzKw1P92pY2d8K5tNwdq",
  "key19": "3y97Xn9xdip9dSGnwr16SCULTVdoykPBWKwC4zbDQtjNrQZN3XWxFCyRSVqc8twPLd3VJGKKcovdzVfqhDb4RMvb",
  "key20": "2QYS3aDJMwciMXWqS74i6vTDeF5YaNEEpPKDU6RFQZm1Ae7JyS6K7hUJmC7e1zAhNCQV5QAkQkHkaiQWsvAoZxCV",
  "key21": "YtHGAUnx55kWVduBW9jMDeTxRnozFG39Y1Qq7uwYB46RU1d3SNjCqnFLoZR1VC54roUeDpQVpNAjMLwLKzQAc19",
  "key22": "4jsrPsH6321HYTiYFxYsg3W8fsza1cat9y2N54pJzFqLHmMjGVqwcSkHbSGnpgoVkYVFCgyJCmxFE6utTDyZVDwu",
  "key23": "5zhKitQXdGSYsAR5M3Twi1LJX1fiZ2VdsKbzcS4TBZajav597khH8DGpqqMiPtHZAGCqjU9Qwe4K2DobrLcPx8Xz",
  "key24": "LYXfAtsnkaM9BsGXp7Vci8sF336eKRjWTj14UrqQDYU522MR4XhSoRDhSnHLEouFSZbZpBtZM1v4B5yGKf7W3sP",
  "key25": "NGWaShQFfaPh66kYyaHZg7ojxHMerCEWMcehjEqqY99nJycPgUcW6yWszEaenMT46htLh8mKGzGHfhdhFSBzruy",
  "key26": "4q1smWHT4MGg53dkDheuS69QBmWKK14zhcgo7MTKmEiqdVZePNDyJE2cSkswH41qewFBatA43ag11zav9LUkKg2j",
  "key27": "66dJKc2gV4bPB5E1deBsPckCxSy4wKysBaFAyZGYhifwoWpjUfXC8qxQCPVW2s5azmsFGVhKQ38juwGkFgKKbaVw",
  "key28": "5VsDtR1RMqeg6a1tBBrK57HAUy1nEcPY5keLrLN2kP45H5Lz3SZUfGKabrHcCenwZ77g1RttQZvN7BFw2QyEGENs",
  "key29": "2VBechPhBTtwFJocBxCizfPojuvvmy8wdkUw3ptKcGqRdHNtmEZ2X34CJaHJdHDhxbLF56uBTp8Gbze5YzC4B5pL",
  "key30": "5rHRHN1zSMoF1jZqeYioGnHRz8S2J5rpEvmpG6PMs2sYggcnsTmhojVdmm3R9zhKkDufLHSmSE2NcKxjXSN3CurJ",
  "key31": "63wTFAehxTGrxy7dm5F3mTCTuYefXWuEo7P3o7eBBTrVnAstdTdPFKhZcqEtoo3wnRPQjVfDq3ogu7ru99Zz9iUP",
  "key32": "2GL3TFCD4WEBjAJJvCRA32kpxhy7s3FTg2TcJCzZLtuiK5sPvFJV9cjTJcf3tN88KrpxUXW9LWDHf9FQ3ViaTnQm",
  "key33": "4EN5Ey8yA1WY2cUfEUnmcHLe1vVzr8bRVfDSVcoQAvg6tEm9vCS4XGqEVbSEi5YErTV7n8ZHjkRY6bgsprm273F6",
  "key34": "45rWPL28JnnejvawGpaVif6kUC33kwAxwkeD34QAfpwKYLX7bc83aa2SaDgoRJ2FJ1xUaNAD4useE3yyV3ueVF5H",
  "key35": "4TcsaHFjpb6GZSiFGyE8uugvDsGE6P5tuRbTsA66qAnoVkqf9Ajzu7pDxRnijsnzq6Sfa8ieK335vJtZCDP433DZ",
  "key36": "2yKBujiskPEUyM7GGKKeSBMoPRsxHEUL3voKjEgYM5dXgtMQa6SVWsGfRp4NR4Xe3ZwHAgVCjthn2MgBDe2nkqiJ",
  "key37": "2aaJs1wAVW89Mat9TAc3WCD8S4av12KCm2T4WMpJ6DoijkoiAN6y9WFqZ68BtAV1DSERD85CeMb21v6gWE3BULjK"
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
