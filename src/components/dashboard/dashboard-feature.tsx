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
    "2Gqa6WKRbdRhLein4WaGw5w3ioNcQFZLBPruQukewDZvMwUo7mE8yWxHH3fcZWq1MtkFqWBvTuYUUeWNejZK9Duw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WTie33RxicE2aG24Fy3GHmXNK2RbdCcs68H156oPCrT8iDF2ykc1mnNjkNTUHAk3veFQRyB4ELR4X5vPoexVwTg",
  "key1": "3vuR1dYMQMVzWsGR96tsUpHAtxLX8Z9V4hbgZpd9cLUjFjGcuAborXnLCrSodt16HivLVb4FsqiZskECx6LaJVwn",
  "key2": "5KVvN9VfMoSGNAQrEcvhgGySga9LAxSrardbkNpZTZbLnrGUcRKCWZvCc255PHqVXMakjnVx5aJbFSVTqBjEZ5fp",
  "key3": "2S6TeoDAqiUmCnumCssS6wfxvcgwG25aqFvDHtXuPrTDCYcjfTNQuMZJf2nYRQG3Zxsj3SjdByxNrvdbkxHUVUbz",
  "key4": "63odrFVUFqwxo5pChHUrzztBmy7kXM8XYd8QicQ38LR83vu6TURBPsqxRV1qpT8kwKj7VQrP346spYxXkT4nK4tC",
  "key5": "56136JgigekNbFeoJA6JrzoVAgzogkioVewZUC5KepMZKRY9wG8Umfv6GTdM1kPY7uovtxtfBLFVRSKfSMWsTMhQ",
  "key6": "5yiCVzpjxtPqmKThne1YigX7Ek8vNrnFMWMk1yTSmFRuNKFK38vWkV446dMyPLiYPpedVU1stG8NZa8ZyJsfEN4X",
  "key7": "5xpoNWr39Z1MssF4WwrbvpqLoF7bpw9PLMHWc2LjtcrMeEjDyk61sLHXtePD1iGdus1HKNWviRdNm2U2jwrJNZGj",
  "key8": "3XcmEMRydTiy5NqGz5zuBRGwqyVvuWqeux9q8mMCEqeUwRpXdizAXxJh8ssnqo1WWUtWD31YBqpJs4v4gWGdqFbF",
  "key9": "5GK5fnavcq9NQWPqjREkuzQrBqi4NedfhmixSgN6fq8jVpf7vvyNTVNhhMpyxNC5sf1NQsfutfWhVLRJZKvDE6dj",
  "key10": "3yf8MieYXdQEhKsS4W5MQcAAhnzLjiJBzEJCHDitnb17DyRvoGrheARe4XJNDkzWS6A2c2GhjChTdoM2rK2do6aU",
  "key11": "5CdeEF5RYss1jvGD996hLu6knV7Hwq8DYqseT7DDeVuJPjdpbLatLwXkQiQ77zrBhK2hjzb8Jucdf2Vk9dvVhTdk",
  "key12": "587N9tkmjJU2X1JQmkdoKiBQ3mqe9HxZVedrozCW31JHdiH4m5pCgs6t7iuxkqJHRUByUwauKaDv9KeW3eUFL4ZK",
  "key13": "2W1Ch33eCMjmzFPaGGPVuBWGNtvd31ZCNrsFZBALioyYJcq4NLXp4WKLFALLb1o1yDFh1Famuyn9FVvL9TAT13Bk",
  "key14": "4vgQwiJqpwMBRRAivywP4jP9nkcEtkbDMk9YXSAJjmp9i5FEcrFY58ZzWAeZPMSkt2LnRYPVogMiAFArxbtf6cjD",
  "key15": "6Pkxcfx2mxLKuCPsaHH7XjT1vkZQg4w6DwRC6Xc1sv6Xx3AJeHc15t3t9jr23A2LicuqD3cT8TZYWTrzLiJuuXD",
  "key16": "2jZVDc5viDXTLZiQSz75nvoXvPQwRX5F5ZwyBSdQZsaxktGgRkTt5vzcEoUfUZcMj6on23eXJLPBZMu92E9xwWZY",
  "key17": "228aoFzdqVkovVQqtKUCNetswFXw87iEHdabhowaNDhsMmuZ4REMGWr32F736sUENGePDAeewDpiqgJHAEWXQbmi",
  "key18": "3EjAJLvAcrcSeaGjjP789Zw5ZxnARjUCrQQspiWJg7qRBWaiRDmYwQ6wgEruZTJudh5GvcsDRqziDXXjkGUUSu8Y",
  "key19": "5dNq6eSUXKiQEFB335DKFyWaCcYr1vzhWRMeq6DfnekLzj2b5YgTNgiJJbntvnfCiY54VeFtYe35TBfTTxBuaVj4",
  "key20": "3So3UqSw1KiWZHwiYo9yH6rDzcR9mDAVK9zpEbsnShpYdGDnTQwiBQop8oysR9iz6uEL28unWAS9ARxJBHKeogUV",
  "key21": "gPoNmTgZyQvTGgLd3DXjFwKtJjxgDGqVyWhu3ZGYVWhdTgDFbGhrqnWphuoYmk9sCYzZJivhqwSzGgTRP5uhWkd",
  "key22": "34xcsyehUZnkvq9MzLiCaQYB45jXD2HL6BbMJQ49QEgpocRzmjpncrYtMJQA2hN15bNszqTGxCvFhnrzcsRvtCfD",
  "key23": "2RaEHKGsP2j1oCqjNKyLzHtaskCcLnK7pvZZD7wVuX3CnTT3ZPBTTR78qyRBLuEswoQHXaYtEs9cKJ3ep9YkoeQC",
  "key24": "2aBMr6xn7JWzBAsjrjXpr5tRmdLSXVp1zg5HdTRY25g1v2DYTnozm1WAHBs7d8pTJ44ytGFiAh3bnx9xfYPCpgAJ",
  "key25": "2RfoAwFjVZjy5He3pGgMGbLhxbZrQ3mcvSpJwf4g2XzhTx3mREHRZoaDeRPkAHGGaXPCA979ZDAooNJAMr1TyWcB",
  "key26": "APiPrxuhs9G9ivuuFYKk2vejnhE1SUL7AdacXNKvSyNvADKPWah2vMxazYfX9jWodpFmsA4nskf4snXsYRHFPzQ",
  "key27": "27podRoz6gmh8Ba9BeWaPZx8Ph9jsPVfZSbr4tKEetw9ed7SvYj2CDvTUj2sqF8FLWEVCKhdjH4xeWFcMdrTYi3M",
  "key28": "5qfK25JScWsV1ZVUn8xgqwDTnokDv8T1ygGGdQCeqQPsGpykg5NMqZD27gvRmR3QLsmmf9FHFcNRdU4AmUXTR6sF",
  "key29": "vqLiLBRqYtGGCMKvb6ZGrM3wiwQatB1zBkN2fUouoZC4YDcNovZeSwgipcL3WNsP81bR51KtP4nL9TxWGRvKBrk",
  "key30": "59AiQ75wbxYtUED8Dxn2AoFvjLmgbNERFtb3ThrgyNNSriwt9sjsnCtg9ZBedwsZwSAEq6faoDeJRGeWMkpSP2ae",
  "key31": "2VT57j37gVtBvzFCLhRLpB6Ck33p8WyiPHEnRwAiHh6J3rKXmJai6Emd44NB6YAnhC84DJPnmJDBuAMm7MaLwQeT",
  "key32": "4mR8yXFS4zAvJGAYeXWuXtx7zvbqDMHJW7WJTapxJX96EdabH8UNmjX4ywXqsKHHmuxkS5wfLMZnbUkoDj4r58em",
  "key33": "QfCzSLbV8L22CVkjESKhitDKMAzxd9iR6mwpPzuDe83jXkPQus8wwArV3RKAsJSXoktVHmXYcYAScwbrw2XPK6c",
  "key34": "331YqHYy2KTDc4THrrSdPcgiDLKiwbDnF2Q4WxU2kSHW7KHEiwbVkz5jHyGCoLQUGBxm5pyoMaBrKBXn4XfHkRSR",
  "key35": "2kEbeAQ43t74vs9sqVYQ8PPcuouNBpwCwEBf5psWaU2MKQfj1rDudyC1ADjaHrb9jRujn21GRBuLxqJFznZ8sMJv",
  "key36": "utPbHgu1j4Rk44bLorjre9CJ76Nr18vUvcGcSbuu5JFkghvYcQAq6UY671B27Vm91ePGMQztzQQf7Vn9mNsiWzJ",
  "key37": "4fVpCYkTPEucewBw9wvZRCevZw2RXWu4soGSYqNpKfGQzMv1miF4tSaEyJcUB4DggGEnbSUZbmRzeNP3mUyG5WUk",
  "key38": "4bsbZUFuXp5Bed7sKhrXuJYhfzgh6jiqKk3m8fQHWmVD3vRM2y2eQE12Lyk3WtMUg8LfNqLyc72GnAhayvRyDcWX",
  "key39": "sBqeddnaSYL3Ri6CtoC1betPYX1XpLPDokwBQrwqufMZWq9VHW9exdaCS1x2t3LQG4vtvMGmsFJbjamjyXKUa7t",
  "key40": "2diYdcJHQMJA5V4sVqYVqTumMJZiR3EC62F5UubexhjMWemkjcPgbFCx4rEpHrDrUf5m7HWSDPGBzqv6XS1K9E6Y",
  "key41": "3xELpEFXKu9zLj3yowgp6PpEvin6qNszJejpPTv8Wyb1MvpBeatf8bdhjAU7E8d9XMy1rP4UUsAtoSNR46GK1GyT"
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
