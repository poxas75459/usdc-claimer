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
    "26fW3HrPEMXNHhDRhKDobNwhE3fzxQUFaEohwij42CDfhVQKvoCWdZVtXBSUFdmzbynbK33hL7EMnmH2QSeNdHNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RMpeTsFvE7uPZ4yiex7DaZ5A4oHpConQLsNWKe3dPhGxkXM4z1hyti8Wr8ibWQaGHoFjHQbEUVpnSjGfdoprhrP",
  "key1": "5gHscjfaZ3CcJveZpaScLXhwfXnq4d5C4RjFXzNmhEpAG4Rmgqn3ETXZmKVv2Ux2dd4UkTU1kq5thwMr5ykxFF9Z",
  "key2": "c8F5LwVYt7pT6Km8Ne397DNjcGnrEMptGxHiawyTpNazrAqHbH4Bpk37QTsufmFb3hK9pfADMNfe39K2cXobSyk",
  "key3": "3qqG7bpQyvWr7g2u8xx7ZZTC7vmqQceb9FXFRH8eGyMscbd2rREgjC9VuenH7oPJeHLqCMWb4ht3Rg4Nbpjb5xiE",
  "key4": "4QdDkKxJUSVa8yRzoutBf8YHonhzSBSmZ4zUuboXfesgCXwRf7mpgxmRhahF1Ygnch1f6mPrNm6sKuCm5v1iaUsS",
  "key5": "5ZkKYrzZqH3mf8WeYwduriReKTNLZCqr8LxajEjgfTK2rE25LHqsQ7Z3vVJxD8ZQN3QAEd2J6UNcLb3v85GM7umf",
  "key6": "ZKpTttrC25A66T4WcSq7WeFrEcf7NwzF1ncRXaA1iDePRQNpf7PzS72bfCoRjL5MqHSvePWTuESse1pHVNYuhiX",
  "key7": "4Cz39c1zhx6ptdda7fgj7D5QydTeMT1nUiH2bPGbe7Qp8Zekuu8M2DXiacrw5nRL7NHLfJUgAEGrhBQsM7eJZLuE",
  "key8": "3V58A3EAMrwmC4GAA3Yh3aJUJXiRt5GyFKHw8TqZzFWWby1BWLdoNA1ShqVgMworjAhLBgxNA8xCWqu66KEbNiuU",
  "key9": "2ei6q4Vr8MMb8u22aLzxHG7UZcENRHJkEBAEe265hATsjTjeCtRGWyZQTMZWnVE6fCRxPQzYZPg67kSVrkrzRsvE",
  "key10": "415sXJ3wXHpFJnbR2BekkofHPtM7gFQ5x4e8hrri92nZCYnPek3dV4d5Svm3fR8Un1yddB44C4rWRJppxDRSD7Nw",
  "key11": "2Ltcubr8D8oHP6xfMwDmY8jRhCiJVZF7cTydN1k2uTs5bG3pZm9BPrqc3nurWWSgknCpbXTdGwz1t2P23EkD5S9E",
  "key12": "3PsrNA1oGcNkFbpBVW6sBVzzcWt6p1jPo1H4kFXA3Rv4ZXxyZeKWGFfkpcoGPhnh8UbG98HUEcaM3z1wTB7e4msm",
  "key13": "35mwfhoxPAa31cSTu35zUcSJCk5N6pYrNaXq8t8zWWx9mmiq5NF7Bj8UejPsPDssKo2tjRSX5SjxzuRv91vhnHLB",
  "key14": "2ubyiPkCVh4yerh8nPYJfMeTRTGX3sGqkJjVS6F2oi9XxjUVNsgqLT92Q7iMc2XAjAcsvq4Xm2wMRNBrgzjcS3ea",
  "key15": "4wVAMVMRhqbdmHrLJR3ZNyM1x5U2nTavrUsif3V85QTqgGVHM8fWDgyVigWJkbCfh4sjv8Q7Dr2khcwfmtpptq4E",
  "key16": "3ZUcRhr2Q15BVUnNUAMwRteuu3F9qGocqXDUv67Q6TxF8AnNdiBNdSLWbnQtWGH3Yyw5KX9JxayA78E2FdxWW8B3",
  "key17": "5urxMc6TktzUzVm6DSz3igeijDMvTsqNYvnX8t7YYTrMgYvawwTZz6HxYCao9ST52gAbQ6FfPfkvgiSjdp5cPziF",
  "key18": "3h6tXns1w3geQZP94JUMuY13E7MRAMV8cnjhn1ECE6b6B5cznNMWN6BKkYjmXWoewb1CEKgrEeecSUvDCGLFhh5t",
  "key19": "3iFqBYMLMACxNwb9ey4DM6tgKp772C8WfRv4QHGP2kQwDCvhamfwpi869fJeNpc1pSBwDwxL6SaQqK9sLfdYDS1b",
  "key20": "5xfcHmyVqac5cuQzEt4k3yEogYAvSPevq21NwXxFf7mhAroXtjmes6XRQUjeJoBfJ74gpKdx2gqFvu8P6NwRhFpJ",
  "key21": "53v8LVWEbwuRxFVLW8orAc18wR2LpC87NSxjbRb7te42x49oyA76N6TuNTAB4pe1ZfZFvXZpSajrTiSGXDYo7Cmk",
  "key22": "xHzg9Q1kntVCsW7mn9x7faHV4bzu1ncCuJw8JWpMMtRuFi8BKZAHSTaBuoLLpaXRTegrTX7md47TQ9JbipRham3",
  "key23": "4cFcJdTszXaUVxgZ9bfX67tvbdA1buFC2S63K3Pp9uNAnXV48ePWeR1emunRDs6HxygNFBkhpDf9g2t6tgPyd9oP",
  "key24": "3N7xWXWWfoUHM5DoZwuT8H6nxR5sEMS8DxFt7D9mZodHjGPzFMgYDYvLHpf9pQ69aEyKaoZaPQXxoW6W5zztGp1W",
  "key25": "rpnb5WbApmTEsZrxcmkk6xFbJcijfLRWqKuTyQFeeayXwoRZM1TrjSfbtRw2wKekNqWDwDTD3hJdMFuwj8h7fgY",
  "key26": "SDGKroipBsJx2AtDpNUQAdsLEZAucCxQN2qn4cVrqA5VyAkkeYKxhpcyqUXuzhHV8XayLmw6YkXuRkhtqGRMtKS",
  "key27": "2X3QC3WRpaHNNKiC7d33S94LEULD7tBTgf7jhjND3ENbBDovsTm4FwFwqCjXWew9PdkA9cwi5Wz3RyCzJkqpU1Nk",
  "key28": "4p2sBow36kvuQBysqATscitWTRyAwXdsELTGnmbk74imeqNYpddetGj9ZCSTDkhPFCDzzd5MxUKEDx38TaUHsXXD",
  "key29": "3334PkjkxkPjH4GVzGC7LFZumgJ88ra2wbr2DH13xky4NmLFcKwgDv6ALehXNXkF7C74J6giZh8rB8fP2wkabd88",
  "key30": "5oMvTe5FfaeCTAQHiC1myM5BVs3yJfNwoUQf9rovwrNPYgVTxJM1zegHTXvyb23sXkjpGLirttMnNsuzmez1qTeD",
  "key31": "23Q39eYEGnt7kSkJsu5kyRCAEWqcZZjNBteMw2NHPJJ4LZStz8fizhN6HsNkkBGSxCLZC7ydydCi2LcwTCpn9Ty1",
  "key32": "35F6MPyS7NUfAG24Czj97oNZZHfyKYw2iDbv3xjXmh6phcaFrkMzgbysua81CbV7RDsXCk5YF8GdbmSkwPmCjNQz",
  "key33": "4rDLMcqJDkdDdEFHBUUZzqTKaWGrmmPueFswQN72gwpUxM4o2A3oUJQRC7m5fyPJCFuLQ6RBVbG6p929adnwyhfw",
  "key34": "5hJf3SMY1gu2WvgfRnfSSJVQXUMFbBVQ9hdrU2HZ565RgFeCU5Kzb5kjR2F7gT3QSw35rLoaCAkB1KWnuruPy7nA",
  "key35": "3XWTDEtUVWnrzxYCRhEugkUKbKYykMDKEB7zhyZD7dgxx54csx6a9RwEjVRqempYcSgGYRLKavmi8V8Rv6ivpwwx",
  "key36": "5ySYe4p7beeSA6Ni4H2rMHFD5fvG1Q1eSSu9hB2bU7Cdmtabr16uy58trPw9Q33sWnLcN8g9a9BBBRNocjqRCx7i",
  "key37": "4RtzYpGZrocf89MduMxszeofUcMGf8CUWjjZ5sc9yp1YHxMjixsQieG9CQ9CVS1NpWqFqzGXUcviepB2Fs8HdZ51",
  "key38": "5pecYmDHdc8HENnAex2kVFXBEAeMx4gbE3nU1cfpX5Ps8KgdamWbQmyPaw7kmsJBz6577uWdKEjqDMLdEp8p2rUG",
  "key39": "4C4L28gbDvM9eja2ckEFYb1h6LogaN6QqRYoHu1waALbx9RzbjqqDoaB5rgpostWsYKJJhqmEZqgyC4viPPcaPmj",
  "key40": "2vTajqGeY5JdqXUun4rCQ4wosxMWGpEVEMsher2ctFGCXN9d5epa6CkuUtUwBW2pQ5XmDW6uWyjZX4efPiBRf6sF"
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
