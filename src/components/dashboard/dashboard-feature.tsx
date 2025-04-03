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
    "4pscro5m2eofSGajkXeCU6hZ2fsDrBez8zvwDupSrJTazQhyLra42HDuddyETiP2TnbYC1LHmVo5661HCTsTjJLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mfDoVXmpXN74EYGz5PMogid8QxcCJ8ANR5tuB4J6yvUYMprVbRLvYNHvTWESHBawcRv6ScJwbLHiZ9cVa2wAgUA",
  "key1": "4v5d27V4XjrbxGxUk538tpNXfe7Wd2C9ZHG5VgKojn1baNDtS9Tqk8JNgF7pEFtqKuZXXAkbCbTB1NkzSzNDZftH",
  "key2": "67jRkdNQwXKM9MSGWpHYBSNn2ig1cmpvFbri9nSFsuJtSS4HtTtt5we8SRk6P6mTtm7JWznzJxKPiJVKVGudF4oV",
  "key3": "1VPBdb5fVpiBQQJhobP3zgHbbHE4wssp19rzfDDVsSPqSVGJVvJbfm89Y3k57UPfz86boNCkm5ZKpyqS5MwoSGo",
  "key4": "4FYSkb5bTKDfTjX5BM4SFxoWRcGcwjMJPGrnffLo9gfac4zh1yvRNvEpxzE8NJ4CksWd4tkvQQLcK1PDCpYq5bu8",
  "key5": "5gSqCqfwCRPcQjDYGmWAue47AYoRXef9uGinbiqTpL4gtHnSbZug2DFtWXEUgDn6twEZdAvFjRnvAyDjQEzfL22Q",
  "key6": "23zKet2izJLC53kApsD8aDko66b2uuVSr43ueyHJtZqNwYDUWfPvp3kYHQWqFeNc1x9gymTKR1zXnbndQvTjUcPi",
  "key7": "24CGkUXdJ8osT3Etufymrm3q68cC5DF3gcisMVgBHpxxki1BeYadQhtJaHxvTpWwAyUAWTpggSuD4oakYYituMsv",
  "key8": "sTsdjSPeLgmYJxAgPjvUuUSW263TZqWqBWLwmZtLWfGZATtgePXT7fDZK3jMA267kNKtarB73qM67GP6LKAfaEg",
  "key9": "rC7BEi6yGBGczLJvgAtH9Tp8PiEF4WQ1ajkz6B12vbiQwrerQhvi2bGfYsSFyrrXvTc64AyfUmNz5sR1Ze5k49B",
  "key10": "4ayt4qqRXuEbLknZXeBGRwYeHT1tbtzpiNYhLadC599w1MbjtXyaGDeaBXPtdFaPfpGmLknp26mFwhc7DSiU2gPi",
  "key11": "Gg83WrvaHJLm8wr64pZDrPwSRRoFc12CPs1HZpcAGqZnmC9ZG1DGpfNZq7yqcoB4QCvKSkRbCrD2KVJHrBtDHXC",
  "key12": "3eG7F8U6UmhrjHwqsULxYKPxeySXVPzYTegwjFMRiWJb5tbXskFDioeFxMdwvm1gyi4KjnAG9oVrgr43pu3dGawL",
  "key13": "3qz8nKpS2Ey416tT6VEcwKGNGH7776SSSUb98HxikQkVw86RAcRv7BCxvP8ay95xHdNdC8atRiCy6rtyw8ARiyUA",
  "key14": "3cr1pGowfbuBEFZK77qz4i33aCD2mXkpaMoDPFrsFoTLEb1TM8Kaw2UpRRg25eFk8hVxaJEhD3t9YbAuhK4Lad4w",
  "key15": "5eBMvmo3Lwuj8exQ7FY3z72SwP9EZGK6NQTKVEmmfA7UqBT8XeBZ7bi62MqehU3M4iheMjWNRx1397cT5ZWYVyHe",
  "key16": "5XderLiUEakt2ZoqNCTFZtWwUvvsEUNi6by2W2LBJKpH6i3JpKdSSFtvjk23vKbWYtL7zVwFL8mNKwpXV4hvNXcm",
  "key17": "4x8Giox9NAFBSaHMpyf5qGYLGnPd3oAtCbmhKCGCRfPMS5k2ouDpNcyxWQztFmiec6PxbzjCm8gJSw4nRE7NGX9c",
  "key18": "TYZLyzcXyEjwce3yA1hquKHhwArWLT3LCPj1EacGwNYHbXDyCVZUbzod9hPVykgPmYf3qX5iRUDJkHzDMr4h53a",
  "key19": "5j4nnS9FmMuCbevcwRS7KJsnHZn4eZKWfyM9E953QhnjZxNWZSvCT5JUtZytY33p5iYZv1YdNoipZtZkszyUfR5Z",
  "key20": "hjGBiHvyGEdUR5ZQhzby9xQAbyhW2DWdPNkzcYD3hmEL9ZQCCBxifY1eNhXWrEM1qW6FJcTxtKiLcURUKR75kdR",
  "key21": "586Dm86V5jVuDDtkqnPEtpDokiFjKzyhL8uRYHjfc4qVPejfmEicfuZJhnRT8ACXz77scT7zqnjaiaVUNu132qGS",
  "key22": "2W8UJUGvXgHf5B1BvTjZsryvAx6hBfmR4S4MANx3Z3kx68sG4LjqnNYQJrUS6CSAVWoqMn8L4g9fDUo5r8kBHKu9",
  "key23": "4e2fzyEkNThYXtiZeuDoHsKv6mF7BowFTnUVdzPt7cgv2CwZVpaVPyGTWn3WTjspKwZeKwppM3HyGdpXVCgGuTZw",
  "key24": "Xtio4kcyCyFa42TE9yYR89QSVnfeCgAq4fH5LEMVbuh1uYCmX5CK6xwqPXw4mQc8qA5h3tdvkKSWbtB7oJH7GSD",
  "key25": "4sFEZtSiecrCuwj6hJh7AnKoxwTz1dbshSeX1uTwpnpAjcRrjuS35UR7qXz7aaiUVmEGgayqXGJ8K8JMy5iM38Up",
  "key26": "T2eyms7nvcYR2FwYKVpVUoC6yXCEb7QqeiexogicU7DMCB9LLzs7FGzELyJwfX6iCHfYBSzrdVGKFHp2bdMZyKs",
  "key27": "5BkoeZHZUAZ7eN3tqwhdJgJGG5R9ATESd8W9syC4Zbpcx79jHiWdtacvpcqKhSgSchi2JdUuxeniknsKorjECmZH",
  "key28": "vPh15X29QS3sfbDfjbRDxyimQw9eo6DxrRPbgdRypg1BE6MXetiRZ9uheDxibATy1qGk5JeiEJwv4opL5JsxwvC",
  "key29": "59WTnuxEUeLdPdYxkvosbEU7reKVxewwRcraHVTM1iLszSB5VL7JS9cAQ1r4wFY2a7LQUF8KAS5pe2RTwt1yyEc8",
  "key30": "eV3wFmP3cfmeatQVyCtGREASLEVvnTecKkMJfQLdBiRtZCsScfwwR1WJEXpPXFoYQrqnbxQkwzzTN8G9XiowPqB",
  "key31": "54G5oX3m5iSvdJRrWZubaUMmPd2XoStttipL1wTPFYfLMRnuCyYAqyAVWLkys8X6S2myWd3zmyX3oxUukm8sXN1Z",
  "key32": "5do55bJM68yyBRtgBwZZwoY256FxCBNXnQbJv6ULetWVngbK8pdmLFjoe7gi5392dKGZttTy77GPkvNTkQ7TBCzz",
  "key33": "4GACF7gFcUbJBTT77669vJkHyuwLRkiuFjdSDg2G7Zdvst8nF1WHDkjytLZYi7mT4kw5k4B22tjSZTAwrxxkY4tq",
  "key34": "562ahqZJFjCmP3DJAwSjjX6W2kW95591fL3zQYf8USCoWqwdGFECdswK1c6JervJqHB8Rfg4ifaoTnxLQpMi1RSe",
  "key35": "5a9QmZs7VYM6c2vSgKHQRrPtYRAmK6wgYL9fhywF2jB1ia1zbLfxhdtgKxc8k21bNU5QvLjsRhZSMLV4N2bxPgc6",
  "key36": "5895uUU5Goed6jaxXEhJcxCJgjWrcJZHxVbjNdqQqjjnukNRfAqnxqQFrywcPsCA4w24sVJPJfUGHrzY57n6YUDk"
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
