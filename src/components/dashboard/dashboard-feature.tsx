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
    "2j3NTYJ4nCJvNoZSiQELDjXuBtYCXR7M9DisHgbVkz6MnyYwTDx8MPmwo3oan3kjc9vtT3fct3xj7Sg7Jjwr6Yrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uHKueeCHK43ZzHrbgAVsLNnKyvw1NSJpoX4imRMGLMgg1F1tt9BtjPQeYHuGpFZ4HWAsMuSxTgRaQZX5QL5Hma6",
  "key1": "4W8qaAvBcgELBGk2N93T85kdJdviqTXRuACTMhJgbq7WKP8cxPo9fo36kfQcJvMsbbdq9EfBxL2ZqYeVBFMdQz1d",
  "key2": "pfaGUk7FCW7DXFuTL4hjYanyXo3t978b3RevMFeXwXXDEiReL4L16ByV6pPVh71uGMCgZVg9SLkWpAHwekYXexb",
  "key3": "tkXBsGjceX6HYsYcKBJaHUjvjTwM5x5cA4T6pjifHHLbn6d8P4nHXpyMqNBv1rY46vaTqZh9vM6Dj6ZRwZoP644",
  "key4": "2NaseiDqv4zqQswbPDy3CwZ9jdbTrSnNTztzvdg9TVzZmjoATx7HEf2T43esRKcmkEJhiGDsFU7g7tFcAyzPVfgf",
  "key5": "2PEoWuo1Lq1o38kpboUTeEYJfjvtJX1wKA8iEsesNwQJHd5BsQzviQ3LTsVUbb8dmzaaHjTNiP2ez6WWpQLJUhGd",
  "key6": "5FZiTyjJ3jU4q9wfEJYTsykfgprHMfXknG1EQWqDoqvPBnVcJ9ipeYJQVrgXsrPHWpo3fF1MCa7emxsRwAHrzS31",
  "key7": "3Yx3HoBumdZi7gDSe3ePfr1nDwCjXDwifuK4ArJtAXmXRtTqLqoYpKic1ojdvtRghTntimwo6vHrzDiKUyDHqsch",
  "key8": "3Sa62zTx2F7fB5HzRJyCd9SSnxAV75SotT1vSMHD41MzHSBRbUVpDjr6Fn6Z41wi1FewFFb9kJBc2Hi7zGupbVeB",
  "key9": "3DvXQrwLHZCekQmThSh42v3Zaii3ALViviTw8Sqih8US54EDF1b4ytzFiqbSNukH1QayzJsVGexMChk9nTs9xErQ",
  "key10": "2vNYPMFMi3yAiEkUxGZ9KeW1ZC16RtVX5XNz1jCBHJ9qUm7YdHR6DDGPB98WLvM5f1eicZJH7Ld1Pzd4YFPeD2TV",
  "key11": "5kYX58rWMfnS1hZTH67scajvhjERXB5byX7wB4Soms4tp7b9UxNWraK7WPW2AuFj5HMJmBHy7qY3jWQU5M5RHUri",
  "key12": "5RC5AeXyHg9t39EDcmVcwPoZgSRiNbcEduPijyhrHPhzraz9Rqin5VQtpNJwHqdkTDbpGH5PaRCrqzq212gfmkHv",
  "key13": "3XebfNWgNgDkFQcw1dM546mZw6MwWJGMkknFuLBpXEoZxhqgqqSo9WQjBt5GFBkXbSvF5U26nguLDZprH93LVW39",
  "key14": "3BCVgR65Do61PmTfDZLLkYHfEa9KNVPBTzKWYxQwghCtDoHdMhJ7a1gksh7jteBxvprrjDu4ACAuk37KRjhg3mCz",
  "key15": "5F1fDNWyFg3XL9aF9ckjeGDAZNrFZv7fZfagwpxVYaX7XDeNSrDVAQXY5WN3tnVatK5Wpw9zbuN43LQ9CDU4hwgf",
  "key16": "4fSzFPVP7Ryizdn2htFNGCAzGEWH6ga41ovyhHCMF4NWLD9NMNukyZpwAAd8J6DLArNxU38qGatBQZ9EdVHtq14n",
  "key17": "4tECAxueztGjFZx5jJCe25YnbVdQCKg4pPzMRoCdCBfcJaqeMWatSnRDHjY3Szy9E6Awd6FmtfzQGgfJjNAapcfA",
  "key18": "35Jo3H6r3p91CfNHYSPkiKiMCYDr1GCk6FaQV9aq9iGVy7qna5t9sxaGzH2uvJ8pTJZVSq5J8BuRXKeUNJyGBbBm",
  "key19": "2APBpcjdvbKXbCnbDR9iXAXXtirobcMy8w9eNCVoB1TZLfdyr33kcEMcNEhuuuoUSoPpdpDKv9RvcyAYwo5TCGee",
  "key20": "5oiyXHHsbdYWQ9UTCv5HBBryddYrgSRTpn423krrrgFF5UwMfiuTf64WxD6NHYAhiHPAMnFhdbJSVLoBoy7Dg9o1",
  "key21": "31iWhHvchRYVkvNouXgauBiikbT8yuPotK3saKNww7PbsCdFkeF1xpbjLHBcTWFp8jX1xCFfk3ewjPELN1Eb6nRq",
  "key22": "3Ua8Zga2nWRiGXxSKDTBbXXmgg7thFtf15iPrM8TZhNj5ngA7Cpdxym6MzMc91GoK9DER3jVZNWk8N4AJHwU77Ri",
  "key23": "2evu9ELwY4twAF5oAX2CnqXRTvHHxSJfQt9dziSxGhyQdVX7ewhu6QhFLiGf41w3roJLZAjuU3kRdDNmEVgtFphk",
  "key24": "2X5bGYgxVMeJ9jizrBpRrXN9pqPg59jSGXY4N7VufNwvk3ZnV9u1HN6B6AFX2zJAFMUnYTqzWHzcaPdgXCHMgexZ",
  "key25": "3XovfUHdTHCELZp7Xab1VMq9tAXmGebTuD2f16XYDvifS56R7VbWSpGQqcZwYEdmd9bYsYSU2W8NX1YKHLMrT783",
  "key26": "55Y4LZP1rxBgy96qRD8ySDj41Yq6YY5RFcAjvo7E2KrC3HjKPeWFXtFhq7mEZPSoj5Rh1YeBbBchcuCG1ZUUwgFM",
  "key27": "wUi1gjeFWJP2uNxDVyi4MRmmPj1wEdPwZkKLGUUNEJMQpRFKiJyjo7XUoxcFAw28X7y4Y8duK6dML34cJ2k3UKm",
  "key28": "4pvG7Am58mpkqjw7cuCL3CW6nTLVc4YSmKNzaHLhm4WuKpPtbqJ4iFMeKCNfDL7BRJP655X6zTEqsvJXXiH5uTZa",
  "key29": "3vJBAv6iQQyXt7kzdNwXp4hn2L8hLxPkEZBbshZR7QfmyvUax6snNQiATyKBrJkKMijukNsRf6iyUh4DWUDtm68P",
  "key30": "56wpSqB9fEGSFF6FXnJFNAeyL6vyhmU8tf6QtGMsbgi4iw5apKf1VcuikGAyg5tqBTa1uaFgEybXsgQmFPk5rauw",
  "key31": "543Ps4eXDpcUwrwq7zHq45HBjhKpNH8ZzPuk59phVA4qMXFrW71XhMfs96Gqg2UWmcRPqmsqktP8x8RXCzhvG6mZ",
  "key32": "2RB9a49KasmBcxkWhyL9hRWS2dVWPEtXVJ7zv1cWoDRPto9hQAB39qgrwYTVDVAzi4q9ZAboZ7GqR7GDpuiDch1V",
  "key33": "2PnF5xrDWmVDFM1a3ePFRhVYqJxdij7zNrSoqpU3GWHvrcSXf4o5WrB5S7iAv1pgDLSXiu1MNzPpGVhhyjQTKNNN",
  "key34": "64DGK286FhBpCj9TFbAD3QHXN1CNmZr8baN5dqQHHJ8WsPMWfJXoUkbLYA1H4a5o9461fxbWkGWk3uV6gR8KBRkU",
  "key35": "3skednLrRDHgn5dr9XmbUy8fJns6GKmcgBSeop9wDkxwbcX1Za5SDYawS8XRcoj3j2N7YxFnqEjdWKodpsnKVGfd",
  "key36": "55fdksqE4yvcAySKzZtGPJGJ6B2KuVhQWWzQCek6zy48iZDpJ4hznAVGzfUXvPxnnamyvNZYHqMRZ1HRdN4Gwp8M",
  "key37": "5kyoNqXRhkdetdkw7j4ntxrqLcj7boSeo3XvPQYD5zBVX4W6cWpTrQTxkDxHPCdiet2PSph9EkFnTCZnfX5siK4b",
  "key38": "4vi1Tyz8J12gbRnQw1s44azEisEqQHXqk96hxxvSeeqqizwejhb8gdfXgSNrdoHw2F7angXqzJwDkJAMN6BtmdAq",
  "key39": "2JDt92ar9QHU67GSv7B12VNRPWZM4PcBhPxxstM6pWGJvxEde8MkWPMHReYu1m3ijmQGKyB9j1wiM6TLKKyzQEXL",
  "key40": "h6nUCwAxWgzTrge69TcQ7SpD1vskw21XsQTmT3MFPZmsMjwqtyVzu12BbrJfHAAj44bUmq8dbDym6EQX7BJMrPR",
  "key41": "B3LoVzyyETPkTpP23uuuNipXKHiUzt1Fy2cScSsatwUdYn9YP8kJTdFoL6qgZzEdyK31oCnKwewZEBze31A9qGs",
  "key42": "PimRvpDDFM7fjDp88dVEyvhBqMmDh3jTfLkC1ZRndDYgBXn5FgL5qDvAtSS15bbmmACWG5KcqR1x9y46Ftvu28p"
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
