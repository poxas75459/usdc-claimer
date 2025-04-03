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
    "E1YofgfREjeoRKL1uzxSfidh3ESLXnBcbndPzBXkKwJ2x9EDXtvVunwqWKfY44QEjEsNE8GLJyU7diEfztbQTXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HCH8Mu4cCVbdJ5X9WTnNmLwJPcVfRUWJkrN1T6SBQ4M4AevZJSXChU6Rp8dFeYXKRYcwEfL7Yn2MYWrrvTxRumG",
  "key1": "3zrin7R1kGmibi93zn6s1Cpt11mqdqARsnLzkh8qqbWkitkc91SwWNsX2bJ7dxvw3bknwZmE3PY33Msggc4ZX5tY",
  "key2": "52H4E7PPGmBdZ9uKPmbCmLkY4oWv4jvj4MasFsWfGi59LbAhKeTV12Ws9XiwukHTHwSKFov9VSZXya63nkACdmSV",
  "key3": "eXPwAKfhEr55pzaKJhL5nRH1x33SEcNBNeN2tDD2GEupZWEBkfyfr2b2FAn3PDnz3ieVNhQztc1cSYrMcY3Gkno",
  "key4": "5awUoKRUpGL8t8cX3vYUvjzUi21Yk2pGHE7us9mBAJf4xP6uQyYJf8TTPNv8rcykcFkSQ3b4x2DKqZG8Wddd6dGB",
  "key5": "t2rAqRDGCTEP42TR9awvsRhEnUEzvdeGmmgLJ1GgQUinZkMYDe46bQUjhNNkKXDPjwisKfBe6PbPVXsWKTRK35U",
  "key6": "2X4bVZos7VvuocqnZBHW2VyEwJRCHYxw5z4mb58rbv1xJKoL8HHrGDCWhQc8mmGBTLtuDuZLkjDdTNtp36bxdoBF",
  "key7": "4hwgsd27KKVV87QmxHTPqzx7Qi6kAnvBUHn9TWHxBZfGmdesqdL5ZaJNyYqotpZnrLwYFhuBLeRLx7k3JzQSb7QK",
  "key8": "2oryh9B56PcjTdebRmDxC4nsFLsYEALr4JhToLEe8oBL7RquSA4eYeW3SmWYxeNRV1BgRhEdN3SxRp3VD5k21VHW",
  "key9": "4m8KPqdau4af9Lj8xQAWmn2H7pvXAaKUxTWtYJJx3DXvjhK4H8m5X5F5J7EAu1GMUqtvxghiPDqXZzE6qYxXb6vk",
  "key10": "4eDnH8Z7sykg4ff81YAuX2K5CgXrY1vLAs3HZv9p676d4UYF3uB582BJme2z8Jk9BYRXjUGDWzXtQ9a9DkmVEprA",
  "key11": "4xczAiJzRDD6UotnNLTGQmoLs6M87Eb1huLuMbs2oSr8WDXJkZhLDN4Bgg6YPrKt844Ct64rwn7kKPFikYneUt9R",
  "key12": "2PFYAtEHeDRjiKxYmtAfKVpoTfA6mKmasJhtLGtviU4tCjK1uegCHpBrCZGbUzNCSMboLEFYhwL783Z1bbK7pCQM",
  "key13": "67gAfHiYJXGCsaGGubyfUc7EccR4wrDFDq68UHrxKZfe8SywtvgGdyyRHbafJZhvUjhq3b7qKKMTCHDorzLYwYEa",
  "key14": "66vpjzgZDLGtAeNGAJmmyjDdwJoSmAnE3QBEYTBz2RtduMkP1QVKzt5QzoGZq3NfxwUbcaVhHJVscLY3Xxw8nriK",
  "key15": "31S3SpcAsmnjsnMAuKKnXxPwEWEicMcf3GQ1oW6RwN9LjQFxRAc3LYFBnSbKNH2yva8KRjeMzzEg68eRSoweSXBM",
  "key16": "2Ruy6hvLvPgQM5G4CLW4rjYwZHcc7aYymDCSLoZGUFWXRfG39bjjkbiAHdwUZ3NQUkzcmWQkxxERMoZX36T7tjVD",
  "key17": "3boxowQmXaAit8Za7oMf22j6XffmHsr67MFzrQdeGStZjtSXDh97nTZBbKf98pMYr6WpAaTLpzGnNvCbGbVX4Kqq",
  "key18": "3uTpEfRoD4VZpNtihjdTEb4CgowHiqNsmZERy1Z4V3CB59WzrErfQ2poosa2kpAjv8twnYK52r4hPqAbu1jQQNi2",
  "key19": "inxvZJvYesbdPWhWbn1TjpTNmCg55jN5wT3zhcSpM1jPuvcHD4uvCrBQgas7b1ucW9Ar4VQc8Xxheh8CGYz2Y79",
  "key20": "2bqyVEii8vAGCv481sj6wwMssAnZDLEcey1qD96ZRUMGJLgtMgTeZYHCyVv2bW6q1jvnur96xBMZo9PsTSMqPzdS",
  "key21": "7yLUYZRfqMcLXg7rqM9sgeERGV987mddgcAAsKHJB2zA47M6nHE7hGViZ1H6eVBhKDTLRwo7XKYaDYNnoRU4vPA",
  "key22": "2yNe5LgL8b6eqM542rD9hw9fPBa3WHXQ5ozyKXQpKyFEWSvhR3zUcnSAk7Z1Nf9jE4ijErkSpb3LYBGjBqieY2YY",
  "key23": "38YgvrKaL6id25aCj5q1FzsMbUwinuhkCavRuVb4jmGDZGc6JTMSZJbrsuJPZmvwv6Z44w3bsSK3p2gByh7qkLqU",
  "key24": "3necaytDDwRCohHQCEb7NbdfdEram8rARcWPRLhY9oCtbJ5eCvzR5NUCGPf8Gz2pZuLmHrsWwTwDc3GpsuVx24sC",
  "key25": "4XYRJQXWUZQqDtGsQ3QhV3kwrQJcSvWoDYxuJFDRTG9WYdrSNstKfVC7wfPLaG7cpGKGdmC2LgPCEpxaP32GbzZv",
  "key26": "4cJ4Byh2uiuy1tmigq2upqHmDxnAoddThgADfJ7zR462RpFvkFy3sxVYxq1S7w4vXCFRqpAm3JF9R7j4Xosb758j",
  "key27": "57iweh3Wfv9xKcRymVhAUZKBmZ77EH8KCSsmx3McpviwMiAFn9yT4pWSrqgiwsAoDUn4o31UhSYo5cew3t32qvU4",
  "key28": "3hb8NZgGoTxVPP1SHHz8x8ttdLswHyCccFdDHhtCfyjtBqzZUAcXfqmVMT7xcShwWcgD3Mhmrnu789dEF1Hqk1hN",
  "key29": "23DAw1tmFNS5ZCVWBrr3R58nY13vqGFM9CdHM86qkbwfHJGzMUFia2QxWAzs3mHwyea3eJ9h4hoHb3y6UbKBkkcW",
  "key30": "JcU74YjbWApiwy4Gm3HSE6DZoK3r9H3H5V9jaVFKhVfHtH4NM3F5ubvszzJS85VqxY57pf2afNSmNQtoV1hF36t",
  "key31": "sWwfdb9z6wfyUSguV6WpbRXZMDcGYAKSajb2XYx7QcuifmazAzvRzHH3fsaLvQP5v58kaV9j8oPB8MWH71XXaTh",
  "key32": "2UQFEnmEYudMB6TxUZ6VCYms9hN3j9YP4sCUjz3QfH3ywiBUj78jbWTDkh2dJFFipmAJbs7eHzb3ehYLcVkxdDJ5",
  "key33": "3cBHiQNHQq8k4KbQDZR2yiMw2Kcpi4x6GTY6XMohWoKQGRcvU94AVtsPQ7feb6HfPRGNgZ5MTZxer4thVEtBPDGB",
  "key34": "2WfdZBmouSvCbq2xBph4q4DCjQB8XVCaA4qyWwKZnX3fxWBmh8mwhsS5oNkWu2EkmriQFVF86kjR6xG5mVzSRiNB",
  "key35": "5F1pqVVhMJ25RdttrEsZVm8gUP8MftT7w5aDLbBnoTTvZobvA7q1dSksro5H8EiffGhDEYjWGsbm4k6r6j5FjhrM",
  "key36": "5kFAunbYqCEkEYKZrw4s5PBYiTZv3NsQSn2Nfa8nKWU7dG2htHaiWN64XPJDaTMMMMi9x1CzspimJRzj4W4DRyLV",
  "key37": "25MvYx4kdMXPdiMsEvFfTuhAsEwKwZuwW975FZzjfsfwo8wuvDZQpjRXfb8gLKTMJqkXTduCKzU4yE3kRNXwm4aS",
  "key38": "3vGshaZZZrGSBqSEQou69D71AHUQe6oHTkffedbEJJ5C2bZiX4fHWCuQLMQux9crrdBxJxvoqmLwZZLnt5sEuFhB",
  "key39": "2SZpCQHt5UijHMm5ZAswZUt8fLKoE5ueBs8gL4BPaCnusgfHffjWXN987qqSTTQ6PqDSCoBxRNcWFDjLeASdMrLg",
  "key40": "5J3TVym2UtwCWozFevQwUeXsV1v6p4ooRXxNYPkXKfWimhdV6Nv7b8k5zmrd9VbGuqQVCF7oH7BVjCRFbkM6WpD8"
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
