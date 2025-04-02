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
    "27BLJFUmcmos5gn2DQkwaUoEP2uJfNjS1kBGB1YvjsNzLdpXbUdT7VUHUXjJ26ocw4XgGs7aJ937ohHAS6ATLxyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fbHTHr6AWK5nbkTeH57yT4RzDGXNBk3BrKU1HgwuicJvpoKTiwAZEHYoz817Bkq53Wim8PQSFtSWcUiyTSovbSr",
  "key1": "3T9zGFD7MC5NoPg44HUbX1JPN8CpXfmA1b4TK2GcZnpjHRBRS5V7dD2tmq46icsSLdSfPRKcTsS96CtEQ51XGtwD",
  "key2": "5pZ8dfN7Y4vaDDapuW4Csy1hVcYE117h6GHiGDptzUWF3bDAV6HPgXsyJoX29XfgA8Yd7Y16jPhkrynTrxEHxmZF",
  "key3": "2Kn8p32CMYn3JMdZFXoSHcnH3DVMNMvGwgKsoNSDyJ7qaBmLhf7Popu8fU8uWJ4rFdyx8BKG5r86E1dahcXwo2zE",
  "key4": "2D6te9spBYnXWwc72UnRjMitdNaZGiT5cp6hKRKGnsu3JJRaeWj8KJKSAyUYPdRuTPyvXpXd1CCLAbHXcaV6QVvb",
  "key5": "4L9CzNyE9DZXoAnHcqMG8oTeP9HGfTyeudzS19xBZ5GGkwFKjyGFnhhYBG5vgGWnZRHZP247P5DdE3jpJDJ8hfsU",
  "key6": "4Hbu8jH4heLphGDmRrw8wSPzyFEdmUKtdsxbfQCxrfGkdB1xfncUQuz33GxMCTkaZpWbPG5XGsTJ1odCYhhzPMcV",
  "key7": "4tQEkvrwUNgJ9iCgKuyQn7NMYfpv1va5hHMm3gezes6BfFRkhZcZakFXX5aoh7EiuGNmtDph4XS1hRPUyJH8oNTQ",
  "key8": "jVGN1G8C2B5rsWCbnF6mBMLp4AmQrjqYHLECScv4MjP9rTyoxj5221deZhUve4hEq7rHdrRZi8Nd3deDDWunaUF",
  "key9": "5CnAjr7hXMNBa7iwDpkaJiPr7VX5ssfUyTdXRpbFvNzwC92qFuSRSjGDMG3M5y4npjxugtKamCR3MQ9jLBGkJwru",
  "key10": "5f6JFzqM393wvyvkmfQXDyfnAmJvXBs9TS5jpzYFU3mYAC4cQWyus6brc4p46pNVbZ8kwjqwwkuVMyiHoTwDyfPH",
  "key11": "4f84UPszkZkV5pVdUf3MK1PUPZ2Vh7hdAhCx6hGqKinu4Q6e58ru9xsvXjPnVxxgBmdGs4DX11io6FBVwjXEDDbg",
  "key12": "2NCjyG2UKwcejWjoND6sdvspzSk1f2HSUCBGTHqAPvu8ySEbHx3s8d2wUvcDwP9pM5fth3cNfoaB2wPx1od31TXZ",
  "key13": "3T77cy9J7UqioqEzcUrtJ58YCHe3GZycTQeH3bqPMrtP3j3GQXPYjdGK7tFXJrXURpPM8UN5yDezHRMcU1FP8SFf",
  "key14": "5wfXnH1wh54bkySdGKGv8NiUxWxg53HMdQ2EfhCWHbmd6W5KRT5yzfkU9v371fWvBd2zaaa87ZntY9MYJGvwrRh4",
  "key15": "4dUNgsodqXs8Zb1uEXbvfeMyTgqZVaAAnxSMtAeW6gdCn16tR9tVLLUcf41JYKed1utNBYrA5t5hn2o5cgysBELX",
  "key16": "3b5fDg3sYAUBiEQVAW7qSyKcvft8QpT5Sh4oc6k5gCmaNkzzBHdN5uy5NpG7VL5a39nemHzj7W4eyE5pB6HBHmgp",
  "key17": "5a5cxxt97HNUWnntTkDrBooXEq9YAC11foDHix3y6R21x2MBsmY8xDyHPZKmMmXyGFhraKuxPqsxvkMjiyyBgEZL",
  "key18": "3mvDJeQqpoKEQaEkiKzsZdQJSFDA3MHDzcRLtRVvCtxg1zkavACPMt4uUr4WLJeiG9G3884ny5HxtLfJU8RE9XwP",
  "key19": "2T2v7J2vDj1jkJXQa5kMW7vpjqSEGMJiJGbYs56c2ZLEdYh2evf9fqNqtANyg9Pn5yASJeS7RiVgDNumzX2YdTN5",
  "key20": "4eCkiJEotwjtKUWYPDit9wJJWyVj1YKZb6qhtTQbyfsxGxrPF2RLNC4dQZDw54hSA3Lqm26Vme8yZ9SAzGKeZhqe",
  "key21": "2t3aVPeB2MdDqnS9WfQWMt9MDhQtJgZw7oFqYNGreKzpNYZVeqkZ8TLxD9j7HAAJe5FdB9gQaiHKA2tn8NcP7mym",
  "key22": "48HUfxZZNvPHSoc5CKiyDbuvKpLqEveegL8ZcizEDK1CFusUPhZB18K3wC3HSgPF1rx8WYayT9RDgyKrexhFhaKg",
  "key23": "3KFwd8Ho5UtuMzMYzcRyTRMzHfekbNNbUtotssym4bXWoFKbKHpygTQaYyhHGHWjwiADkVjPmzBunNiUp9oCdfLo",
  "key24": "YtnzK1wb6bwuqhJkzp3QRr6pRFmyh5q9dvdAs9ApfL4NJxqERZbmqiHbUZWpZtm3cuZhWiKuBuCKZQAykwt557V",
  "key25": "9wcCnpgfo1vxxgXMEFbPcZaNWotxYkt5jF9NJjZJfjWD4LNxMy4cPtaYVvXLqyhrYihKrrxfzrSD9qspzcasHcg",
  "key26": "4dcEek89CneKRrLTFUbPkoB9bPbhkysGhCsektNuTcUfvQY9Yeg24esamod2RU6JkAvMg9RrKnKvTwMTt8aYJBXP",
  "key27": "3VdtCpjWR2BJvYnf5vuhNZzCs2NWgrEthJm3YN6QwJjkDyb6TZndLPrUbNRv9FCBCJ9232jC6P5ExtoeBESymk1J",
  "key28": "hZtSDbhYdjPxMbEs33tVJsS25JaZdc3z7W68ruEBrGG9ZtpvjtMDbBaexcDMXrCJK9XN82YZZjC3NQ4tS7FzvFh",
  "key29": "3kn2gjgd5KfpRGzu3YkjBgDPPkprBnEQTYm2ezxmGNZoKJVA1PqQVPGww5wE5B4bwkcSJ8wHEBTEyGAzddNusvGy",
  "key30": "5V8UjqQpojWy7VAzixnGw6dZ24QufUJ3r9pocxBY7bGCUbFb46qURmQFxuULyDweSLbYwXMyVWS9cfipDv8hq613",
  "key31": "3au5HeCyTqhjncs48Wiai6y6e83vwQmhmVCRAuVyTBKcuxVbP8A3TxtZu4GfBTu4Uw5pJZZSJfYESqU7Jy8Pu9DM",
  "key32": "ixshf2vcSnV5oPfR8miRrVVbDao11TbrjU9Dx8tYf9qnrWQPUDrRszxncwis8ifJG37w462dtsPoxMvyA7en2Xj"
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
