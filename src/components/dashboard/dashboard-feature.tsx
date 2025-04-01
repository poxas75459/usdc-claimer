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
    "3brT6Nni9UJtbkMQDi2RmYCC22k992PSN2cPDz9CCuVUiNspbSgQp5TVaGLwRLUw3pZjDbwEfgavLWTssb9VvXMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41UrFPbHv5i2iRLgzFVCy5mdkwKGJ63zExXS6iUXaCbhHHbuwvvDJ2RUeAEM1AWepuUsskvimWSVy8RMWGEqd2WP",
  "key1": "3HTK15HNZCXvUW6Qhjnh2PGbmd8WMfNi4zLoVt8wtkbvFW4Wrwb3UPRzqNPcHUPxNfiHKxzkLp5iZGhQfP6BzbmD",
  "key2": "27cBXq4GtrK1bwPz9wu2aMJtMvYAjNqyfdjN5VnwgoC8dzkZ4xpz5RAJSqScDiFFACA6Jcm8xuzCAKevst6We2wZ",
  "key3": "2CnZpERGKKeCiMGWJYukzAzLB1EEg1PXgapXDppnRmJTha9mUZNJp2eKRCnuXENxPdPSrko1eG5hASCjcZzj86JG",
  "key4": "2vQbLH3ZR5JnjmJ5S8HY3yYTpr6BtAHDNrPYG5U7uqAtBibJCWYbW5PuebMrSdHSoNRW57i7wEB6FuRjMKriUeig",
  "key5": "4NUhUinDnSvCxAMmXvFyJGmdfd77St99AJ8D2S1UxdZkqKUFcdvW91aqnsn7jMD4TYt79DSTfpoP5pW5SJecQw8V",
  "key6": "27P8j9gTT7ABQaPKfatMCiqt1QULeE3X1yy7rFjSKRiNexMHPVnYbehsnLdoDtE4ZuDpHEQm8yDMv7v9V4AJGoF5",
  "key7": "2wtr4RLn1PVDgSWDtN7LYecvV6M1CLFA8MWco2wDtvc99ZdpyET2GK7wM8aAdKWQdFeQAc2ySkNzsJN4VCv6twyz",
  "key8": "61V1rr9wLzMkkVWkKYyWk28HYgQr64A6Ecb7yMa2VgyMWsZKTSbjMbQsSMQ1tsENx1JPUsuNXUVmGjMiqbukK6iu",
  "key9": "2PZLZfpBhk6o2HFhpKagQRR4enpxsazEhSnvYgog1LWDAZ5cRXYytUBVHZAzYcxYn93zaoHSWSc5zNYSsiQqnSLz",
  "key10": "UYxCLXyBbn3ThSKgi7SKWbRiRm1dobioXunGi4PV7Qat5CqTrc7NXx9vAmGLDN2uyos4VdRiBJCWMsXvRUX781H",
  "key11": "sXmJgEm34kTQ9Ezp8siJhBmMqRxm6z32sSTFfScG2VXiigPTESRcgbE3i2JGMpmEyWtd3qLELbi4JL6dRBYdt33",
  "key12": "67mN2urRnSxvwzqQiqb2h3WskeTccPdJqvLhkyMg5cH72oi5MBTMWttHQ6zkXrvJgP9TQxnKzxZw5jwHmevFm4ZZ",
  "key13": "MsrGDcRbT3iEegUuhzeFWM6grsb5NftQi6uE2iZqfocGYtzaADFTfNaxNmQuCDBPEjyUuKWQ6evQ9KyozGWX33Y",
  "key14": "33n7rouRjdRejBuzX1LzvPAJUXNAYWj72rp3eZ8C5hcQ84aATAtQH56XXQdJqZXVaq9TVXxFo4hzhwhcZVewPwUJ",
  "key15": "2o2jxi7RAhn6ovjq8ARUr2nPY7gPmckrpvgnxXx4DezVxLJD6MjUeKwA39ejbKhRicSvVV7zDE6QrNN27Nyrwrbr",
  "key16": "aCDYe7HpoDFFHeZSjGujWBP1jteQQagMzVAcCzqaC9ym8EBjc2oJor3bG84JYeBDDWpwK8FYCpUoccDvYmjeKXo",
  "key17": "3zxtrmV3GWK8QZxzZMxAdx8AsCn61zizDVrmPES22QHRcNDpqdBdicY9hVzsLB1bzAuBDS1czTWdX4xKdaXsyt4Y",
  "key18": "Hubfz9faogN71mi6w4aanfXQwitU7ca2fyhvyANo5tWwGc9PgFQ5UzBuz81dT964omscffZoXxzBgDDhzm1YZZ3",
  "key19": "5KthWbwHo2Eu2HQ8hfoar8r2qkPGH7V95PtPPjYBNhptjbUr8jAv5DmuZLLPqxS4jdPdqV5hXvTakEjdxGoReQ4J",
  "key20": "5uvTEARwgLTCsnMwxSkAJMpPRRLcUqdjpE7cGxT6YwJuTMMCtq3u1aLaU8T8gaVPDhbmYwRSYjTCheLWCaxpn5hj",
  "key21": "xaSbVmVNaoPqy9DCFRPWPEKTQF569qDzRMY7KRMkEYzR6JZB7Led8zFHe1ZrmMK5wo5SdyUkSiMzTgyQbWWwaUX",
  "key22": "4bfCqfhHf2D9gV6X219MwXKu1w5UmV4R2MBidCp974QzB4jK6ajttr6W7UgvnYnoY2v858GNhsWJLyJCaiQMyDN3",
  "key23": "29zR731mX1C6g996Awq1Qc1RC3xDridvfMG38bfQEDcdTM6RLdaMyrym4cBYAoHThxPj2q23BtW2Eph2zAA7Rvir",
  "key24": "5tz29uGpYDXiGUujgZ6TenAgtZcABQVQcWUD7cAitwHhUyh8nbLEBRkXXEx9kZVRvKLLNSZJ6GPKYU6cNCkbJgex",
  "key25": "2tx9YQm2tegZAcyTHZW9DqVDeENEugf8v3ACymkojq54yWWH75gw7jJq54zxvKVf9ZjUmpnnC9xiNi8r2rkGhcZh",
  "key26": "45zVXUN75aXC8FKWydHpvgkyYzgmrtJkMrsrJhBPRhUBKcTqgKPH8EFYFQ79Jj5kKnEh1ufxMy7FwTJ7GbcwUX6h",
  "key27": "AqREprVznU3UMP2PakXrqTwpDLhPLZtkQv3Ww4b1Ur48Xd9HiGkmQH8EAfdiBArmTf1roakbUSMGjeftBv1fZxh",
  "key28": "5WcmdJVwW4fJhBru8ub41TxmwXtXwGrVeTzyLNY3XDuU4xjCNbj6VBpn6D2Mu6BCw9zWpH1y9FWUQBMJAyfxWWwn",
  "key29": "2jEdnGrZHMCztvn6ysfMyGRrGCp7Qqd2T7G5fourUGkQ5Pf7ZKqGjJaatcD1cGJKLnonUNpjY6taVA22zjSLHfpg",
  "key30": "3WcXKZopKg3K8AF38uoX4EmQeU93SSPoPp1KP1ndVjp25cLZS5rCHXppfKHojjgnr8LhVFNrF7fA281aj6uiHZQ4",
  "key31": "5XxxLPzPaYps5Pyynx3qD8wPccdrwwiRnNA2LbXrDyNeWao4MPwhzJh3pjGsU6UWT8UsPubRN9jfTCmjn5szEJDE",
  "key32": "YwZCGdBNZBwHAVhL8coSNVh5ZxJ9QxxcboWurhShXbWYgEowMRzijTKptJqkE3g8jHTGQGLKSA421KUKnEWXhoh",
  "key33": "28x7FjbVCD2KJz1qoVF2nuF8PYrjeQvtt8Ru26ekSr8RAQ98JSSM6Q867V7jVe5s4xbDY56uAooc17A5tN8Wties",
  "key34": "5ouUMm1F4hmDkz1ghX1QJEWzLarDDtUCeNyA8WUqC4YJhnWKxmGHiKad5bNL55KiW1rjmPJvGc1VNArU5x5dMSmE",
  "key35": "3xjZuPNFR17VtquN6tGVMpkHF23o1eCPzztUMEfQ9iwdbYATjWYjx829Dd9BjQnRCzVLtGQQ9YErUzDLXMQ7bXe4",
  "key36": "rnt173xuZKp9NvzDMjKuGsubSuE5gPMDvHiZzM89Ait6uFhEN3aa6DJsps9i242KPrYtyfiU13qYiP13sn1whew",
  "key37": "3tsYo7cxADmDav8S8mCKo3QVhsowzRFMSphqaSaijTqqVKdeGo54mspWwW86XrzznvJb98o8j8PqWMKrk9nUPc2A",
  "key38": "5LWghmo894ToUAeUszyTkFngXH9LpgDptm5SNdRxxZiVw5pRrQepLZQstwMEUieD2Gub5vdXvmtL7ZgH81n8oJ48",
  "key39": "61QNCviqky8eJ12K38CVYzjfwyDcuJ79Te5TiadaBGufsVX1SGX2CfNbZ86rsXwexFSqcnnGuhXNti6TeLt87pDo",
  "key40": "SQWEVyEGjRuWEHQWUEzvMyo6QYTXGmfs5iBma1p6rEiBsL3BAnEhDvi6WbeBNGcWcF6UtVPkiSXWyTwctymXST2",
  "key41": "aqj6t8eDUTJNi4tQdJZbCCwwLqRbYTjbJmNntoUZ3iA8HeuQ9sQTZgLEFuyb4w9BswzoN9YBUT3U29J9ovkvD3h",
  "key42": "2MxvyZFXB4KSFDriN1dZACgfZdAkL7KLh2T6YLsBPbUr2Av1qe9NTLDKiEENUSaShehsgAA3Rfojmro9FDso2Mum",
  "key43": "592ud35v3fkSxX48dKNBiFEttvHPXhSRRc1L7YiaSykpmfqCnYdsnxBzxpxsXzsHGgidABgAb2b79ED58XvDdWWp",
  "key44": "5URMPwkxewBZVg76w1D1AcdmyNx1DmDsRQco3XPnmRJvUiuhHGepKBVyntXyW9UEagc9RABoHFHeTxY63hEQgmrr",
  "key45": "2KoP4k577G8ELTsfh7nASif1GAPoJJC8gyrFfSeVRJWb41LEsAXD3yYPkLJvpC9jts9YqGAwvGiTkTZbcugDDWSv",
  "key46": "jeV1KpmzxX5S8s86nqVjQTWMxz5qEQxEdCxzTMSXCbqdB7HNrxbaw3XaswxJpBd1uBUW8sC16W5EA4vmD6u2HtU",
  "key47": "dvWcYsM5TY3jSKYMH2Wcxs23XDKXoV6wfm5ZACANtBELUuQaT21X2nm92EakaixBLG3tmf26sqw3PmZYuAvtbcH"
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
