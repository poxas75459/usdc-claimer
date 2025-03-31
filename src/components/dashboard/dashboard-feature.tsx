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
    "5rjYGHAbs79XqFq2FV14wudTpKKjQUoF5yPGXjBb3quAT1S4Zv5t4v9g9BR9gkhCb5my9krVNf2sxxYirvq5X3L2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TbX5ysK9yChCqY7d3x255XYv7EWkibY1ZeYvimLDqv8N2vB6vyGjgqPiAHbLZ2ZyVoTFN6soxMxCdB4N5fu8brG",
  "key1": "CCTvUE8Pv87aXo5htEJqSPfeHRjchXA79E5mm25GsvvxyHMUPDydbEaV92qssASWULSonnF7H8q95eTGpwyacmQ",
  "key2": "58A3MRDUVmDGAMoXaNuLK2p4ziJjcon13hNdaK3mheMKcoezbXpXKu2Y6eizHw97CJmRD4j61ckCFRZsSesr13b",
  "key3": "2jsx2ipC2XCnbAEJM5qEZBWkDCFL7dj9fU8TjGC2wUz7gnS7ajykXXMhQ3TGJXDwmwpyxyTaEM6TkxLx8T8wSjV8",
  "key4": "4e6dZcuaFKFftLGKcihKHFzetCtNDUJRQSqonW4i42RTgozbE4erVNEiPPGjv2bEoeJpheCYKTijFGCwwjugF1vu",
  "key5": "5NYWwt4nCXMnLAQiQy3z65bGaQXZGLDNpEdPfpBpGU4evQnwLqpw5MYYQTp3eyy2aSxjbYS55JGeK71Wb2Qvrz37",
  "key6": "3jAD59PPvsXPeqLhF8o7Esb4S65uKBHrfF5sGJ3XYV8uzpCngN267NzfsYoFHsknJn9ZV5KKfPzgdzu49DbhSFe8",
  "key7": "UZaLrBJoHU3ajXYYdbRg2m9UYEpTQZucyGqSSy2h4cBW7VzqX2zqxmnWnWfXmDtwiZAFD6HPDEF8ZQNH1UFKe9m",
  "key8": "2ZyqNbXXMi4BN2f3A9FCofZem3dJU37dsAWMdqZcBGPKsEaPuV8wcQCWwRCZEW2sFQJmiraK75zyB99HoNuzHKqu",
  "key9": "KDyEvjuMBqjq12eEABRx841Ty4jE6xCwoZFbsPrNULeK8KrX7vgZCmr9T5b8zxPv84c3PHzvCPpM2bLUvf1edh6",
  "key10": "2e7eijF12AEvcKGxbr55Wmc8E2wbRSxQ65Hmdk3Xs25B743pjGFR4ovwJVYBQ4W2ZH9snQeRdcLNJwSZAU4EW9AM",
  "key11": "s6ovRH5cDnmAAeugxRudyY12PdjYFNvJbCjH5aeF6oWnieDT1zJ72q8XZSWbxLkrBXCrbyycEf6JpUQ193x9N8P",
  "key12": "3yWjVgTpuRxb1jPsrRY8RzdksnfF9ora5WMwtVVEdUVUSf7pLG554RzVR161fJuMG9GThfyGMarNaaU4m4Vz3c9G",
  "key13": "3AhudYqVehrS7MmcYqx9tU76AHTXsiZFDKovtnZXUHz4PYtvktMnMAg9ihf4T4zGsuH2R5ojAwAQMyPNmUXQetE9",
  "key14": "65zaMAagd6N5q1U4M3wxBdie7TQY8xSwZqUsHsjE8KDzh2YzTPxvfFdkReMCmfvdsrniaSaxL6NqrvtWf3XNLJDk",
  "key15": "5s2bjtTdXce9i5a9y8YivSsEQBX4Sfu638gDXQXVkj7hJi5VNQ2NrrKpKzuGPo3r6jdKjLgbKUWB7MBt8SmS6Ung",
  "key16": "5C4nLaxF9xJNjKjePvnupoZu5Bhm8MDWq8b3HcocdDhmUz3c37YHbePt3NzTpJJEujF5P3RwLuf5zyAxJ1SR4p93",
  "key17": "4fs5P3PwHF6nmjrzyE4yQaYPe9cdT2nt5gXte9knkxw4cYtrd9Ue72AXzbBi9ReFUBaYfiah1dVnf2SkxWDLb8mu",
  "key18": "5nyjmPV2sSQxEEXMRYD9zgDiXfv1uHaVH8Yr1PVq5YfkFeYGeSuG3A1fduXUfzhgeTkrr1QUgX9eyhtPFo6uX7Js",
  "key19": "61AhzdRNmiU3nEhHoC6Hpd62coPsa9oVAGrWiBPuuLSrK2ghThuUUPyCeugLeC6V2kCyumgDNnYAP7SC9PWMuXs4",
  "key20": "3nfUp4USkhVRRy6LhNNxm8Aj4T6RzzPpHYmfY9ffpuyGCdp5DAHAVLLMG7bhofphAuSdB3aa5Wx14LHn8gsbCfsa",
  "key21": "2TCT1owTtw1PWuALU7Gbp7MMgM6aiTKf9WPqQrcLW18172pHJbr3YuaVunEF3Kz1hFDhcV8P51ESaTD9EXnSM5Tq",
  "key22": "2ipeasZXMD23iXvViithwZqXkvaHUqygzETpgm6jpyy2UTVuxygVdDg8B4NzZMZCpxZXyWKLCim9gCiFebDuXmxe",
  "key23": "koEU2WdxhRR8TV5AnHG9XkrwskahYVB93oj9y7UKRja5cjgwMThXEZZocj3Z8MmMYFLL815YdfzM2JndRpKc3FW",
  "key24": "42A6wpeWLEZWbhdmUdhTPGL3Z9VAzc8ByWZuUTzpds5EbqxJTa8kUkctCdzZ6eXGVtSFDrKKfQpBsNHRNEe3Ve2u",
  "key25": "3qYWxKAV43iGDcacsxM6BDKYty763Njhw2qpvbDPy1wmKwniCpzUALPCLF8AfGK1ePZbxqE6FB4ZGd8SQ37PLuVY",
  "key26": "3gdHoXh8dRVkyTB9qkdhTiycLxXPcHhyUaFkLGcAM9umkj84NdTgBK9xg7xpvcXm2M6ahS6EpS77zVjtLodVfUsg",
  "key27": "4tSTjRh496Ku8y1ir5RKH28xFURejGF2vHupgKxPyTRQdK81xeQDZDczqGbmtqhJGeXcNbrWXKXmg5vwFGXj6yQF",
  "key28": "o7djtBP2u9CueUrhZZngaYiferuNtqPNZWrLfnpgmF2QWoE7Dwy5ik4c3sMsiFvNgkPx2zFfvPgFf6fijQyp7Ee",
  "key29": "31bZVcMqWvsxUTdN3KbkrdeMw7ehKePmvoQdwCm9HdoAKppwZtwraEkmeEuSw7BNDpiYpzYU88Sb5nAAbQNCmQEe"
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
