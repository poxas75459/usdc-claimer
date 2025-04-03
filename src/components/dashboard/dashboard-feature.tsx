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
    "3saVTBV32Jxs147YsC9keFwsN8nn1t75nozZT8mWR886nZk7sfU2QegMBxhDaj5sa35ArqgUCe1xbmSQmXqCJh7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uZcUZpfXznYefT99uNtifbYZFDYbJEcs9Ecku9SUY25CTE4w4biWp6b6FZYSMXDReFXJB98KCNdJegfsX2hMaEh",
  "key1": "5Sof7yyixgA9gU867VEhL77jCnAgCowh2KsVLwVzhecBJRiKraoLDaJ7Xuvq5SxqsshhDRVMCuo2M8D8FRuavB6o",
  "key2": "5xzinj6EkJuL3UXvDc5xNUPPSrpNsevZ83V6ZpV1smoiPfg7qFrqj3rhiWM1qjFpumkKXqZWnQVV4QKrmRRRUTW3",
  "key3": "5ifjaG4JY9R2vax3LCAQnmv8BrNm55JN99DnsC9zLWUrWhoRsi3ddtmP2xutsmiJvFjQr7mpkLaquERpTF3vTRw1",
  "key4": "4RdT3jK1bbZ51NeRY8vxWSqaDim7z8j3HCzadfsjhU7aLXpSmJZR6LnMVCZPxFK1C7yKdWPsQe94TKy822e37fsR",
  "key5": "2t4VfRBCEtJqcR1Aat4RXiAHAxg6rnd8zkG8KaVvoGMPvg7tDTpq7ArKYCCuK1dCqrXKVgYEHhh7wXfeLAvVAcPv",
  "key6": "583o39AtyzbWGiobGViNsTvYAx7E8bwE7avbkdSuqGjWSHXYRfGiHxgpiuRQFBFF5rTn2Zhh38jCewCakq649DAE",
  "key7": "vgRiyAmxvb59wXXG6SMC9yErpFrZZ8ZzXBFSzsNmxzvjyNrcYknG4o2e8S1zzwVw1npZPLiQEuiH4F1NFGtz7TN",
  "key8": "rrk3tqTN5btRiP36eixPvuQh6qSKZohXsfxYpTAiGc4nPj6EC5x9KmNMpJcbowqT3aRuTA8AA4auUas8Wdj5UDs",
  "key9": "2jChipcFByKH8i9WETqo3ViMezesEzhxYbMJxa4dYfRe1ZtzDA4XmbM9cUmyvq4JVZdicevS76derufRPpyxJJfC",
  "key10": "3nd6D7fXd3KSuS9kXtAMWWGoG3dNVaCifosFriXrwQQmf6R1sRZhePbxuSAfk3M8SaDVAdgFanznw4o8T5pcCG3j",
  "key11": "5ApwVPrMvXwmCEHULX7idihqx49fpf7bzTnwxKfin4wDV32tqmYXgVWaR7KWQ7F5dfjth2pCmKaaHxiy2YjK1wWv",
  "key12": "5cYMLSj2DUNSsYxCcPD1KJABa5mK65EWvURtAYjCwUKiT19yFadUaYfdcA1ZjX3Q4FKagGGWywFaLFRTsHsQG9DW",
  "key13": "41MJP8kjGFcq2MygJqYaJD87mSRSZRVTSpLWa5YvPU768o5TPuuBGmoEAJv3waUjoBg6Azsw2nKZo4B8igV8F7QY",
  "key14": "3w4hpHt1AY3BXcTGQdcgvZicEbuBvMZYM2Nqe1ZMNLUPQATfGSj6fbqCFcoWf5ugYPvAEYQ9kuRf9hTzNMoQ7Cdv",
  "key15": "uua9e43fayUv6NYyFZKYFdY1PwdTUSxzkf4BCL1GeYhw8kFn9K6vNQc4ZGfupuHvj3xo5MB2hnf18M9CZrFgJXY",
  "key16": "2ZDnAPhjvgkEny9rD2RK86NVnfkxe3kmzsujdvzGvNorLEtZW1X59SiK8UZynhHRDaDPcJH4afJzsJeARYtMgBrQ",
  "key17": "3rEk4SyjpNDxU94GURdSg6K2N8G6cqEGgnkwFg5ccjGCyrMNmhTUpy8JncyAEPeDhC8ssCpZCPBVjMpTFKeA9X3E",
  "key18": "J9xTnECKDguJn55EegweSrosfPTEUqR5z9MfQwhVJq47HQPytittBSFSDyGycpe7GRuzBjCJxfEWmohyet3ZiAC",
  "key19": "3FMbJTr6cPKLec4pv2DyGiL5WnRqCo5nUCriNUC28MrrPpEbhyeifzAsyLeQf4qK324EwDhtzF37NMLFrRhRNjgn",
  "key20": "RXqeM8cfsQxuTrZZ9mz5R7W9Yx6iEuMvvMoeFKZfX8dJWVNJHXVakmYaumDGLUecAniMwvLMhDSyhCAsekMCq3r",
  "key21": "2RknR2bpDdXCvrGxNCSmSdKySS9hf7SKadzK3zaR8xkNzNgqrMSH8tKP8z6e8BhaKDPxpkqU6bgHsDYjZpKEwgMF",
  "key22": "37EJEuBFzr4mrVnztHT9Q9vW5aDyMXNABBZ2D9EKQy8MNJW829QaMB49kYoZ3do6y97N9CPbXUr2z4yk3KycMCqR",
  "key23": "viv8GnWQeoo2bXfuC3EePr7gUoHhFNN5imZFRDRTHX6bWkBzyXiwrfVDnCiFZJ2XTjsEZWUBDHieHQv1viC1Ras",
  "key24": "47nvPQjyFmfh7wadVEN1rxctShjDnoh1vbwKFWZVys4jccHzbjpHBbUJpF7qQ2tPyEQPJqv7W314H564uckLphd2",
  "key25": "42QskXYUV6Zf1FnbVU2TUvuM8tF3sV53cfjbJMibFt8wcEP6PrBLmxRwGoaPYEwtPRQYypSUVzoGaBCNxxhDq5R3",
  "key26": "4H688SimCjE4gBo2HoV13TZmehddddADGmBZjBaY8k7DxWZrmEDpVZ2a2LG3Gmg9geWKgaqkmooMU1Nfy3wapva1",
  "key27": "4zwqXuE3duYhJjW3qFoVKFh9myak34wnx7Hjk82zezW9VzXQ9GP8MV7J9Ljk1h6zSNDSSNe8LC8dRH8FtGJSo6Zt",
  "key28": "2iw52ryMSNkT7Nxc6owSnh8L1WhiQh4Eoc5A4uhPjs2nywk2GmprYmyxm3M8TLqaJwm92WZvCsssFe6aKxKPEjSh",
  "key29": "42qGixe9TmbQoPW6SzWzQqALDZAyaH63q5xD2BE23zCYe1GMUDDAs2wC8kvcF4hK1nBxbHrZEDo5pV5xHx8Xwuk5",
  "key30": "3coyBDJ3tefkQ3Rnp4VoX6iVv6AQQv3RohqAPRoRgCSZevQVtWTL26v4iRoUGR9CduequLJMD3W4tBkuzJcBt4QT",
  "key31": "2MwyniSbdn5yHEbFwTFRznZSbXvrqZFaFq3vX4cEPEF77duGNUB6DBF2acskyLY45gNjjPJgbvqMLz9bVSzmuowF",
  "key32": "2eVKDwtGnRTr8GgdU4KkvCy9NGf7C5P1RBmDBka6kFmhMe8AkyJxNBA99cQ7r8FbR2BusVKJJFJRPXqLfqf3b3qF",
  "key33": "2q9wr72Lb7ZcVMpnAF9YkkfY4SsQQ73YL2apcNThjJwJvWsWnsKa6sPr6ttNbzduPzdusf4Gw1burYCoWJCDPGef"
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
