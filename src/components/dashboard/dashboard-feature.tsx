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
    "4XyKxDhYVMULqLw8n5v1vWnp2xCh5TSKghuZEz5tuBDDp549nyLjKAT8gM7CSabN68CtALAnHTEpKP1rNiBZedKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JW6PVoBATWCqEoLPYs1scGRGKppSipU2EyfVwi9P6M9BBY89vZqJCd9dhpj36cueSfm5GfSSe4WChmyz9nRWkNN",
  "key1": "ePHJpVoPctwAgeUMBW89S29ndyjqtis8QXFuWX1L7Pe5TwJLKivr3dKGpheebv2Fnb26dQnJAcvUBLWmEHN2vf7",
  "key2": "ivzaUHa3QPS4Zr1ChptYLz1aa4CuHsFPcRabSJR4vekZH9igtHSeL5GkjcFRGtfSvmX6X1AkV32whgaDzxYxRRS",
  "key3": "2usexKiLVeUKEd6rcgoXU5pUmmFmTXUCzUTWe6uhLo7mAn4JZF2LVRKtJ4CQmPaCNKJ5NpBC3TwYSL7pVXPfTxB4",
  "key4": "2wmnYs1GhtxYa5V6Rj1qPA4Q1pn99gh74PGADQjBrm97SbeXAyCK4jdJyjVrh2su3T7WeF7voH7D7n8Yh279NKdH",
  "key5": "3ThZ81Wc9R9YJmyAzDzLfpyXQvo64pxYNP7Up1rkkCnQKNxLYueuZupfx84qELs97DheTys2bHJ4kNva1hstCMoi",
  "key6": "EVUxeWxK7VAgfgsy8p5cCqpMjBWhDYhNNafXd1XoKY1ZeZSp1RrJYsUfexTnPx3S9VEAy6KudZ4fMeZzJ7WgJyv",
  "key7": "3nngwjJ1cu4VMZRMXJy7L6wFZeUpatiBn28r9meXwmYajPCcw7BzoqNrVE7dErD1D5rBGWSTZudukz72Mp33Nizp",
  "key8": "4JiSszpi1tU548fAv9zWQmrfJ87sJ2VdKkJ6zQC5FZqqYssJqbB7E62APJ3JeqrqMsfwG3ms5VjDtrcjJMBmTZJT",
  "key9": "3NMvo6b9iFnV8qb9yR62BmqfVVTK5eRXpNLCdmV6wqvUbfnHCfjJzLfrrd5HfmCusPScwyBBUFn1BdYkHxNM3dkp",
  "key10": "3dGJuYoRsycRABzdEcahQvvy9YbrU7q2D6vxcJ2YWWcJF72ucsM8fBHqjj6WR1UgPfiHKY1XWfCv7ipdt7cXHXmC",
  "key11": "34cTGXs3iFSSX8cTZyX7quWyxfbWtbGmxaakY9kKvjrvbWEtUigEmaMYDT4rDfR8LSVu52jVK4afVrihtYE71UcC",
  "key12": "615oTwsnaM9ckcYr9tAavvH7arDz9uLtcWAAtH5NoUokbzcqPKX5FyUu6RiqQ3TcPuLE3JRrnAFsBPGeBxeZ9xZf",
  "key13": "ohibXqBjgyDbBjSJRGiyLxL7kaoNqMJTfoZ1PeWbhBb7geCw7n9anDTMYTks8aAVp33oKbSy1aE63n1Y41L5DXL",
  "key14": "2LFizLQprUZSkT98Qrx7cr1FmCj41vW8wAaNGxKtUSgoy23y2t83MtBYH2AEipZx42H4oB3zHBcLngsasDCmLkLB",
  "key15": "3tnB24gETcwMQnHNjGTGtbDqJs3NkgGUnvHinzPDkaJrtRkpyk64fHWhtxXuGnxDfA7isCLhCmXaUc3ZeLCyJwQD",
  "key16": "5o8d1hVy55AQHnkKBipx54nDdpCR8gCdELpaBCZecu7eq2oif9Sv1xqx463fp7rceyajReEsutAavwYJ6SqFmmZZ",
  "key17": "3BUDTdocQvxWNZnT7VhL4iWECUtCtYENmkSaArSfuEqrHekekkphV1dRvEqSxNdX3CNBGivifiVXo3X2Xf3GZfrY",
  "key18": "45Ns6ATtxc3dcSMUkMpF4dNXPjR2oLw46pGtgixg1TX6N1i2jt8BoFhoSznB9Ex6tFJiBrg8JuN19yKRdqLWQJcb",
  "key19": "3XdKkdKtvT49ExtoCRWFaZCnmLyhQitj7szBuBkoxn2HjpbiNfzEjHrqi94rjGoLusSMuekKv41MpRWc8jUAJweD",
  "key20": "2o5aHBzfNCipJXpaox39CGsUKFcftvwBkPiRvQscJPnRknMpGPBdkST1R6yT4G4hTaSkWZ2X1wdBNTnxesz42GAL",
  "key21": "2fWytSsH939bw72bSJ8589GA9DPorxZEN9jvK8gpKvFBeqf25zR19azem4A5mKDpxxH6bdfhDHmxtZKV5urQSCh8",
  "key22": "5BSETA9SzsyNX68tmdiPUM9oE3amrKTdznUPJbzHsDqy3KJZ9fVo1znNeRkjsLiAUzyd31ATeHkHRsuzmzv2kouS",
  "key23": "56BeBgYEqdAKtBvcg3L11CDNJ7P4ZM65P8DVqWvCFgTZgJv9QUcKduhnrKiJxtuwKBk24LgmtKsZxB26sj8qJkAq",
  "key24": "2XqdpobNo3Ak5xjokaChJBYJU9EHRMmPDW8SJNqLjtSbm54Q9ZadagzX48N9vvrp37dA9QkzpzaVM7v5iNxWBFsH",
  "key25": "38vN3j4WaCdz2Zb8avZ6ine5uFjHvSY1i8HX3nxXCg391P7GvTGVbMRgoLD8yf6LZUWpDyAKEgyM1eEn1kSCbLm8",
  "key26": "4q2oLBx4BPsdiNhTEV6VzMjMLZ9Akk4eGwH7dEXPX8ns8sJaJVZQYkc2RgQ3ZopaiH6n9PqYgjxGxUBs3wF9yBPG",
  "key27": "2a31eQowSHNV9J1qQDeVMP29QMNdKjZutspAL4jdcxwmxBWpxb1ohoGPpE3aMWSGPHeAFzbTNypNUq2MvCDpgxBF",
  "key28": "qLDvympwxUsrNkCVNuyiPgUYHdiZevSLG8R4M3n5nqZdcQptjkhXTCyYMu9xy1Vrj48vxmWNaW7yZBnwF992Sxf",
  "key29": "4fdWCgmSo2Hr1av6cWXB4e4DUfbrtTDXQcvHoFEvrSAio3RRJawdFgwjThkyx12QnHDt9feNnusUfoDigRqxofBB",
  "key30": "48CTCqtuK9CuTATnzFCChgBY1W1s3oqW5wx11MifZ2eeaoUnsxfiW3fpUbcKKReW5JQhad2ZydDhkvyRTQHFHAUd",
  "key31": "3UqfXKN5f8j7DNJDWErzrZA2Fs9Phd95t6WcY7oB2oM38UjP2k5Su1KUSqvkuti7sYeXxhFC6ZNhVtMyLRDShkLd",
  "key32": "3zSTrdrWswtWz9xJES17RJYHpMcdKf2QoiuQu5sKeCVJ3Au6rKDXqP7PHYbowU33uLLnBdNGGirXHw7SaMLBgbh1",
  "key33": "5w9AhF7UeK3QV38GgGgoZFUyd7vZTABAbwZ5UzEuVcc298fo8VWRJVf6giFpud4ABCWAj85Jk3x4S7gkApGaB8D2",
  "key34": "2rFRNFiaPBrmCsQ1E5RB4tij9zcdMoRdYyPePka63vheX8nSyXj5Dm69ysgG7EP66w9fvBhKPhMtyFwaD6AZXNn5",
  "key35": "GZfmcpjGEcVUWgYFMs64RCXJGa9BixoM6CHtQawjeKjGDJbUZPUbM1NiB9JM6EiDbmp6tfgwuyUW6o2N4uTWqZy",
  "key36": "KQj2ABCY6XaeeVUDE5eeUWtXbK2Zy2xACF8djFCj66xy7zhmWVkEr4uCmCrErF6nYeNrx5eo8TZhoSdG8kbke27"
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
