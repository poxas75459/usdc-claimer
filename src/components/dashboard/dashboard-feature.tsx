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
    "2jXHeghDeRfnCF56DnmQU8fdfc7HAWczp67zMmZykQX51DC4drBQJE8pdtnBtjQHQvoNrzFkEvH3WgkLZXTXcw6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k9rKQrDwMmAfLZgedre5d2VCDgK3jjnYSqtxokG37zsmEar8zkKTBdu1Y5ooQZkMhUwNwAo4kXE1LTT8zkGqCUp",
  "key1": "2DuEJw1LwuAuQZSKTLMKeH1fNg3zsyGWUZo8SjnW4YqZSnUet3ySje6ESf2LUHrTheYj22eqDTJcgELRDZYF5skN",
  "key2": "2ik23gziC8CzYtfAmcTWruF8nuKgr9f96Arf3deRJBKkUDTxM3sJ9mc1gp1j2RD7UiYMSoiaUcN6PhmNtPyoUN1e",
  "key3": "4tfDN1aeEVDtXJjBUrRNNFwq74wKZ5Vk2PM2qMsqFg5fvzzSARS6vWdJ88uu4bLskhZAGS4UGKfi6s5T7DYrLqec",
  "key4": "Vu6kg6se631H38Cw8beE3xSK9DoA2g1z7L9foTUtshkqYCuqSp2q2Kcs9s4F2U8ZACdNsekYrVWWLsbRCgbh7gr",
  "key5": "4RTJgeNmRmP7XFQAvvTB6SwMo7Vv9Ka8XsUPkX4AX5TSBHjgTEfGBYD5fDyQsSNvbwnPUu7X9PbMrkLpMTi44kuJ",
  "key6": "4JidHavv6rmGsSeuQYMVHf222qCiME2HLaFRMAvztjt58cfUf8SxnZxvuARy7DhPSJBkSBo7G7AeqA7Y2rNaiv1X",
  "key7": "585Ckft5VhxNP4VJCQjap3JEeeVyCQnrU5MyYPmdFCA9KUEHZsS3ZWkYTqyJd9K7VqYaoikqRfAeBR8ekUWhGAJy",
  "key8": "4X7qCf6KcytPMSQvtqtBkinHa2WuwQRjiqno1dAnwEYrubUxwybaqy4ebk2uxdSH7Xg28VukydAayDhRG2UAVbkH",
  "key9": "5xR6UvWiUfmxpC4j519sadXmLKUn3xA4vTC1fkq4LYY71FeqQQPd9QxE85x6L9oUnfPemnnLdgwkEAqHjicGV2F4",
  "key10": "2oQqpG8oRaQ3uUtKaE8AESHKvZewFHAhbyrgdHJUt2AJVNudh8t6d6Z31V9STFkT6nwkDZmNc5duusbD5cfzPPbq",
  "key11": "5eJoLeG1RiRNdhJ31eqHGSSgNARADMyCAyG1VcoT5PivzXpfge5UC4RaH91hEcKTu2RQTZD4t9Yn156r7mVtChAN",
  "key12": "3MAe2mXYWg7aDAqQhNXa5vw8JxThZa5KnqT42uqKTvLwnxgSZ82QYAo5uwSn4L9WN1ovV7eMah8DDzvbc4m15noT",
  "key13": "4D3hV8gDfQAae8JHQdah2mg1ifKZjpNu2SstoA1JXK4Z7c3sEXAJWCqDa3zLp6t4uQZfrB7boV27sH1CGym7uD2D",
  "key14": "LJ297zBkKEGUJojzJU8fySz7SdJ6UCECs8MHJmmmhXRR4PJ78kVKkqp9vcbsRop6DbZc8ZUy3y6KEfGBpLatTqu",
  "key15": "5B1sBMrniXL3jgdoMSfkLvNoTHZAHUhR8CWpMfptVgg38s3iGidyBhYPTNHfquYUg1yzCRjraHGjTNpNyYggyc1D",
  "key16": "2zmKWxCsRBc9PWVCTzjt3KAwz26iMhDurTZKcESa6aeVfwNjejU5CZwvKcEapb3EHiJfkhSGi7ivgV2UrJV1bKSr",
  "key17": "4sFewEL718LPMmzavgrTTS2DkgM6nkHXc3XKNVQBfGqNxF2e2wtUrcvhnb9TZTz4b86n3kB9HbMdZwjZJ3Xpbwf9",
  "key18": "NdYkrNP14G3ywXyEns29BtAnwr9C6vmTAQWbjsxTZfNoB3SZYSJx5sHwWRq85Bz7GLx8ywcYa3tHV41X4TD8gkz",
  "key19": "65FRzJykrdKguwqjcgFUcdwKwk8tm9K11yUV7wgae6jetZVSmTCL1mxADEWfYK95JezRcnTBu2j4CsLJDQbsNxdT",
  "key20": "4xbDpknNLXwxvbo8Hg7iCtVXCwPUzk4zUjM4NByzbQLGE27v53vWKDY89XurFN6EEfAG2KsBY97Mz1HM3FccDYF7",
  "key21": "2iR7xmX4A36qBv8ig5NbBGRF1W5sGC91Zin5XkGsDTiWxbg5LqmZx6xvaBQSatTWaTi2LPEdMDnWksdSGmFG8tV",
  "key22": "FmxJTU5AfFNRXRiUjbZjmJuyyFszgxRxQgmpkQNTFYoUCm72bLv6ffoUZamaQmhXopSAtgUQMBtcUq2Te3kow4E",
  "key23": "62sJbhoEMmR7XKkcngAAPYjsn2SYVZUa5zq3bj6o55e6k5NSrU7jXa8cfLXzZV7rDSisiPdpMHcMvYDJpLNtfRtn",
  "key24": "2xHa1G2tnpAhYYT87YPohv3eBhS4RfeAMRfzxdzotqfDmVJZEo9iPK8Smxhm8JdoBSzG6dY7dq7kLFn3Zie9SmEz",
  "key25": "4djudGFV2R2KQxA3M9cnJxzsyTSHWSt312ZDo9ZdvnFfGd1zTGk6C2zNQJTQ62NfQQPpfSsuywNTe9Q7q75fjwnY",
  "key26": "oh3BoGW3LEAqPHNFQA4CF9ZuWsBi6Q8qGoZUwC4n3E7xux2rTQrpm78bGRKuRtw8bz5CPPGVqArYD9sXJxZ9D5D",
  "key27": "5iSYKwGc5kmf3upts32drishqJpN7fBrdC6FG72CuQcz7fbqcbBZtyK29q2oD3y4pbBmfvdp1RMFcFVig9oDYaQ8",
  "key28": "3oYStC8hvzriKzq4qb8rmyGwLDGiLPPWiQgJjGKFzSy3sZ7g2EGsMsukM4MtHeW1ZUmArwN1dWNbeNu1zVZehxfC",
  "key29": "3qxTmGeb9KyaweK71tjkSoXMGP71sTwxZnpMgTVvGeiQRKWLNecfUvTkCPZBHML5AfXZvspnbbJqhXnSxCx6Gyi4",
  "key30": "355Eyu5rJHSsnpFwubiXthP5HK51RN2ZasauaG7uqEBS4WDbtmCvteVQrDZ2tNbFoNdaTysR5QCd2yFLnvTJTpQ9",
  "key31": "5utLVtZUpGFt18cm15HQfJDzaGxL6HEnXwGg28AL7A9wYVUyaNcErB9jRGL8bFZX4MuV6Ut96tT5iwgzeF58a2QS",
  "key32": "5zwgwLa69hsLjshMBJBFBLuzzJVYpgjAh31j67RiEMq74fjSdKUy946uDWyxSgPUobbrpu8Cf8Msy5q1XXheQqrj",
  "key33": "3FAQt2RasMHy4isH6ybvxYDKMMz1ca2mDw1zQSwc6CHcgo498NaxLCrqaG5K7FXFoWUVh1HwdNdngxtjwMFwfsY6",
  "key34": "5f84F1ZiFGLTcYDpaR3vjdvqJrekadDzkDsBwGaJHPvBc7ZWJPXi2mYpHFmYdgckAXS8n6jxeJ7tCLtfe36fnfXW",
  "key35": "21EAm8g48KYPa2ahtjMrRikgjxFM8C2HfAnuC7YgGymxu9UP3mpqUBRThT9R9dLSpBVcqg7gMa3skKw8mmhe7cwF",
  "key36": "2qDRbg6M7ardf678RfmTLbcVjjzCQC2KQkodJ953r6NWZZG9kuTequiVs4Z2pnMGckSrHm8aSpAreFhuoLScFAZj",
  "key37": "3UEusE3QpujSkozxjMdvijixeU44s8zja7fDTL81VSzZ2V6Mm7dTofyHEFdkmYsgunfrJrUERwP7ccopweiri3Qq",
  "key38": "2STEK9qXj83hmdhdLdm4UW1FsfBuNNW6kGLQju7zhAumrt55dgi1ZEWf1eD9Fw9a9ioVuZFrPf6YyxvKWwEfKjo7",
  "key39": "3n85hyADTAN3Vwyd8juhTNGfHwtxUdew8xa1QEinAqhB3DpXnUZwSPiFS1Des28Y4CzyV5hDCzQaA6wpzATXrQdT",
  "key40": "33FgPX83c9fHn8aWWpEHNsfc6MSYrVYN4m6d6Hoy4FPnvYcmTKEznozezvJvNHhEBizmEDBWv9qxcSTZAA9jfjuE",
  "key41": "4wPXoT43nJFBfEt98B9rZBK1ENLPDDUAZZNv7Z2n22gYjRVX8PspgjjiR6agoZ7hcR9ML2YgG9mf9r9AkFD8si9k",
  "key42": "5wCbAvCc1J82Y67jvfyN8n5siipDLqG4cnAQmrMEBootjGvdNyf9MRa95idPf6kWsaJJpbP8bntZKtV1Ea7F4PJZ",
  "key43": "4TgJV8kByWLDMwrT59iMuZVasTua7FNsV9MWpWCqapxGEt3CwD2AZVrRZrz5mdboPfUEzRX7ygbpGVND34mJuUva",
  "key44": "5vYv6r1gMVVRey1AwQxsoNYrcAQHbksDmyXgzLL7HEJopRDJ53eqx9LjpVkzGrEfjtNE74FFJeRMcbVRjoX3eCsm",
  "key45": "3Ng66V1jz4MFcad7xCxqQBbLaJG48PSd8tSXCxZ2rpXRJLWjmub6LJc6LeQFWNXDxHerCaUpGdtyfva7hpR5f1Nt",
  "key46": "LrKpN5qJFwbPCXJiuTk9b5ZDXTK8FuKzWgGvkJDidMT5B6xsGdL3gPKqpSc5WtrsekewMnnWCNyAki1hK6i85At",
  "key47": "vUamcUuXVwdyp2vSpeyFgk3Yhe2mMm1XWbZHuDQWUcvgx1yGMjYZeDjxuGrfaHZSzk7Y43EdjKvxNHYVqnHwgcT",
  "key48": "3q6RqcpA6gvXKdKBs51nJevoeZcVbsRsdw84r4NoZRz6ku53JC2d38YWe9u1bsC6fb4wvKswKLY4XRrWAyRaQSU6"
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
