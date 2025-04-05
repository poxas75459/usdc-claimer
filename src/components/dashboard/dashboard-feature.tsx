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
    "3EE66oCnkh4Nnxs1F38JvRuCLhNucCUMWjN3xJb7ZVajtz8dAWahqgcjCMEXunTYVJzSUHusbKiVpo7GHvPz5n3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jnUSWugEML6U1bqxKxn8APbrstyFxiGqnKDsohWXxtoeoraPyKaJgNs77kwD1v9gaC7HqJw3YraQU5RTwSU1s1y",
  "key1": "4GvknCnumd5uSAFkYQwdztbc8iG4rcnzVQoBBJbVk7YijXS8yZwAn79gorEuqDdYWYCrurMtXkkoJNa6PtRYcZAh",
  "key2": "4xu1KAS9qFuVi7KFPas8J6NoJikVLfeQYjo2ouS5WQX29hetJsBNx1fC3LeVax66Y8DWyZspGZdBiSfNs1KoGk4r",
  "key3": "2Lj6FZhe6fM6C2qGMcwNB2aM7GtiTKnAxNQsnqrhVVo2cSjFToRS3gdA2oF6hr71cB5GBXZqnJH7FbvVWRodndnT",
  "key4": "XS6cghdqDjDqmiD3dHcrxEFxbLpzpYF8bjk63Z7ZMrSvAs8afE3ZkkT9VLqBUw2S4pqozpKLv33wvLHECJ9NMdA",
  "key5": "2JCoboamRPG9ru4gNEF9AKDf6bggWo7vzF6DwnbAKCjv1sTz2pRfi9FVF23Vnd5Ypq28Yc1GWSb4DFmtGTTJZhXu",
  "key6": "38Pzwa24N6sv3P4aWotsqydY4yJBSKa14vDdoK13qWvMnca4VBqoyrFtQ56iKgH4tmjCUmXmeUDumkuaU8zhDTTg",
  "key7": "2STFLdhtyiSRUQnrbJwuwb3C2jvGcYm4N7ZJ9fqQGrZFfjdUjcfVy4Q9ppopTrczCQXY2iTgqjphUt26GcMbqvAV",
  "key8": "39GZsxe7fBBHk6duF7uGEcHkg3w95qpKtnJR1Z8BywvedYMPaS6g5o2yJ12Ca3TUPNR7Kr5e4Dz3riSAU8c6auj6",
  "key9": "61EhQ1cRw8f6AJuyuXhNEMpy4MiMJhBf81Xt4pbJ49rkx8SL33MWgwzH2QDSdS6Fa5B7UHnx3URDpFjkmaerNewA",
  "key10": "3ymP8ptjRFCoymmxCmZWvXwzwGkZQtQHoKRckBt6LHwHLjL6gSTwkh7RoTJTBVKDtGJ8v3mCDNYQLjmY4zKVU1tX",
  "key11": "XM3WREcERPEaU27d57YmubngnsCoLyAtctZsEzK9c4SdtfTGaD9jLV6gfe1riqDPzkPKWMVdNYG6F9EWxPiVyTc",
  "key12": "4abMBjcjfYwJTSjagqrzZWxYdZMhnfGce4VgUYntrpoujmPeqhPNbWAL3BBT7MpNk3sVbARkdebZ5NnAznKzakJ2",
  "key13": "Mzm6rhQC9AfDvGzHFg2qiQRZYhcpCJbhW7LkbL2n5GLAoRkp6GXoU8Y3isAEs7sP3qYUmBBJEDV3yiRVmmsmDTT",
  "key14": "2zgvrrENAkmU8gtn5yZhuNVJEq1j86b6c97H3z3LXBsGdmNW3X9JiodJP9miidA8U6qi8EBwDeZfRuxrtTz4LkvA",
  "key15": "4vCWZdBiS5LaF8pnXq7Ds4sEmuTTXh32nBMWzK2Qev4PjrDyJU1VKhYZhmEs8JaZV1VtrDpF1DKi8hH2PWab7rXJ",
  "key16": "4yrQNTktRyz4cK6aRhNvbG8xMWwJ7tmu8RuSzNCXUEM5Wh9eiAGzcyHunpTdGT3s6K455ct89q3RmxKRkvfEshLj",
  "key17": "57SfryGjKwFdbs7s1fZsvRGztgsH2NiDR8vQsUQmv6rrfJJzZoCtB1DtgyyKj29FpNHT7JymbtUSUhGFub27tnXN",
  "key18": "4g6PWAyyzqriQD1wBHagTFBQYAWec9fB5Aizin1DFJAFx7zSeSExLddKRLyr3GxHwkS6g9iGkY9JWD1Zuc8TpHDs",
  "key19": "45GK99dEKDyW4ARk17ybccVtWubMFeXC725Ay8MmHYaMAZww3GniLDYKsEov1i4VMKwrG4ACroxGgjC1rPCt4sn9",
  "key20": "5LrDDMDuSXSqUdhfm9ZfwJtXbxYp34bHLYtjD3Qc6Z8efnQVejyxpbinyHstvroMLmtevgK4G73eGcBH5WXW6m6p",
  "key21": "2PnSg2jCe2PuD7Uwj4YMweTxgoCfSa1vK4X5pXvWLGvetFwKRqUQyE9aw1TAefheRZJbFWex3NC9ngoxVgwZL6EN",
  "key22": "2opVb2cv3Vm711RFeFAR7okVpxb8pvqLcd9XF4ge6waYo3xX8LqGDACgwjLEPzZDCsb7chssg5kqRBj35WrdQicV",
  "key23": "46ATJwwNvBcFSq6zNntRsU97eWArSWo9yXXALK5FVyFDcNrbLk94z3XXEAStgsFptZfJSZYW8ur51FuQBSFUDx9e",
  "key24": "53TzRAXefWMEevi7yY7iGKG5UB8UoKmEg5k67jzsqFERi7TwduykTKKFUEWTAKrsVNW9SBQ3rqZAFq6BxbiRjNtT",
  "key25": "2NeD9X4yfy6WkkqRqzstgNZG2xYnmbftWytsGSpVU2SeAwi7mPEsqoiobdyhK2joEA5ddVtJFQ7EF2GCibrdB2q2",
  "key26": "2RZxcoRqo5NXiBJdqkiVDUJx3uXDzzRMxyJGe2Jqcic6dCejbRMU77hcWukktnScooXY8DMisU3CKP5fm5D3rAkr",
  "key27": "56QTVpMXdG4MiWtc1NBt3zQUijobWzwGLEMoQnMNg1ypWEyxcfDa5WcseWfS7YvjGeFq53nQDhzcem4hLB3KXK79",
  "key28": "42aTBFr7KkiraHowgBNyJ9QWnWitb8gEhbVz2vKAnwuS1vwdwg3g4itv6CZ6jQuiNxdqXRWj9JLTN9wt9kDALmnR",
  "key29": "4Ai8mUk8adEcCYc9Hv6QG6zP4X9ea6d9FUT8SdTBsENooY85n2DQ7JGe7FVqvvUCL4GHAc3S9P7K9PyPhvMyAHNL",
  "key30": "369RBL5o2H8N1ss8o3rzhXWv31fdvnMvc5rKXJ4nBuphMQUoGohZe6L6XYk68njNZaTioQN8N4PqYiqzRRDtXwdC",
  "key31": "3fQjrum8YvF3PkGcmxgPt2bAT2oK1ek3jE3orjwPWb2EHui9P8KjRFwSEF61FNzLotyRYAE6RSr15Uo8svQZo1yF",
  "key32": "4yMrTD1Fk2VVnyzpuHuQpbZD6xMBq9w6VGtENGrbakFpmLbF8iGcAt6fo5EeG1R5s1DuNiPHpTXAZqxqnDaQn5MF",
  "key33": "4DS1xUL5CYHqCtCNvdY3LxA3xfRuyKcBUeXv54iHpPLq6ZFDkw48WbNc8uvwfM5igEGhWDjt9Asnfm8uHQRDKsEG",
  "key34": "49TG8HwRHR2gqAk4yS5pgVsRZ7ZVhhw9k22wTDcvNXfbxMtkZvAUWyvoz7od6TsvKWv1NBqANxg6EPaQs2esHC8P",
  "key35": "5HhpiPPVSf5WChdQVj6RmNUsJ3wJabPbLHS1XYMmkjAjDhWRMkfSCTadjmEz1ebhzNxR7GsFJf4YHjdfNQMhQ5D6",
  "key36": "64qFcAHSgzdJCDSZqm36jSnNzQLCtLjUzXBmmC8S7vXicYzQXrZ2gZyyPhRVwFxHpG5mitMbbUVhxGzQp8rrS2nb",
  "key37": "29jPUvW4EYL7DMhbajiwEFYodvJP5TyC2RXnEGSDSa8pUf7Zb93shwEGPJSEfKWTarvt1QtUPkQccvePwatGZQL1",
  "key38": "2mEGoSbHF9wb3AR2rFfrjTtvgorQMScGAA7jCGVXhtDq9G8CciEUmF4qt8A11njAgSbasa63Ue8q7sZYdEuTLMU6",
  "key39": "4MfmCMvAiTrfMGg9fHnoSNK9avtpv7FM6KckXcpSkqZZgj5qWTJAfyt93TbKh6ENpGps846F4jtiMKLgFwwaRgyt",
  "key40": "541JaQceyeqZYmGRHWMspHb57d15YtqF9EXXoh1LyCAUcDH5vcw7mX94Ye7hyEFwFJjrf2tJGkneWhcBWk45nPEY",
  "key41": "uYBVrCzfSEmazotHd8V6kAYyC94oA9SR3XP7gP4XUu5faKTWAWS6DqcRyzFmTM2j3fJEKaNVtTZp6Y4U2kPbVaZ",
  "key42": "29Dh8AJFARCtfxvdHnguxHwct2oYqN5FQQuDkACrGQLoEZ33uFK487684krG41vP6TPfQ8cJjjVR7HvbCGqeMTi2",
  "key43": "5y7ihnVfQZWWsBoFXMLDHw256Yc6Q4oTVZzFUfgJRoeoEfRG1dezq9Z8AGC12M4gbYr6Gk1qT8kkvqfJSEu9VZAo",
  "key44": "4bvYsRk4MkrmxrBaL1tXhDR9kAZNBStmhhqBCWANxPdrHezmhXdtsRhhCrA28akh96bJuhUn2tK5zyhZrGSoZQDT",
  "key45": "5eBurnc2KwszeRqc4687UmtE7eWZ2JuS87ExxSj8qVHF78X7EejVuv3bphuV4ss2hoe9oHnf3AiFonGWvMXgcaWK",
  "key46": "M6XVGa8zoayh5o3L3eJfkjtHcr2VFv72c7SnYHaETYJNR77TzVaP2o2YhhJV7sS9cBsoTuEjnvJZcZKxZ3ppurt",
  "key47": "437TpdqL2ET9g9vQnVp2V2T9zAR2351VF1oyNGdG41JLt6G8ZVuRwQPx5kuPndRh2Pvw9ZrBBju8PRWpXJuSMUC8",
  "key48": "3bzS3QSta5ppA7jfz1ZkqigunDFiBC42pcDyqcQaHXHLY6J7JD7qMofQeL46Bv3q4mUn4MZdYXvWMTCLkuLnkaxh"
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
