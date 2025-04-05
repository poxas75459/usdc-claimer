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
    "5bfW7uxd52q9LmaMrgaJPHnCNFuafjnFJ96GNwDufhP7EDeh67J4QyFjqR23Fv2H4wjZzigqu4RaAbzaCZ8p4dB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BfdB4SGtt7JjroSxx9BPy453uCfierSZzGhPjDPd85B5W3SQUKZnFohThM4i13dmC8yKJHyT8pZRpxPmBaHuyU7",
  "key1": "2YUTq2kjHQfwhTz7RskP5bZXbxZpx4N154i2WmmxhRqc5f9T34SvQZvMeSNEsJqq8CsFA5UeAUXfpvHhX4vLAs7N",
  "key2": "5CRDU9Q5K6Te8C8bvFy22NEdC7NeuEr5sH4m3YCaa8BuXpfBEtBqBu3RJfMPFKtrJb5vhsDejSknWFx2A1bMWAJL",
  "key3": "4ecL2dYEScmaV6bgoNQcdRGsg4UMcoCtTff5iWd1sPWF2s7CP51rcq5fpKYh9zYoGCmvT2kPTV8yHbDsZZwdggR3",
  "key4": "33LV6HopsdhXDeUQv5QitheqrNpH4tV9S4LPcagG5TSZAKYXpfVdzoN2N97stmN89PQEmVE7X9hQCRW3iSHyKMBt",
  "key5": "5RzrSZ9gaRbDDYb56Xsig3Ru43jxJeH6oggQJ53safwZnXgnm7b9oUbizLsGLV1Nj1LtDYayDRUQBfvyvC9y7dgS",
  "key6": "31vVsDyY8xNAmip8uy527Zm339pSxMeeczhLZiChAvA3NELLw3fgcTaPDbXNMHp327NoyHTfpTpzZq455HzmfT5T",
  "key7": "39foSayV7avvWd4u7132NgxwGK9m5Bj9HkSNdkXe2YUBzGsxJPuoyBLWGX1rV5dYZq89H3gzguZWZ73GRFzwJT5b",
  "key8": "4BchFFP9oAKCYeVEHWa36LZMH4Nmo4UUwHCn2mwVdmhtRAV1FVkSveZLJZKgjhPvuB4JRRna9woEGdVBHyifGsnR",
  "key9": "5twACb7DaZU1EEzuKjcyFHwermf4HqhN8835CwH4yqsxedriuaEHBu9Rgop6eYD491c2pDhjD3Wk7qtQ6TzMCYVm",
  "key10": "4GZaT184ZubayGkpeSNRZviA3B174gjq9hqHDaScXmZYTY2F8HDvdnHyMp6bQuUornfWrTpSytjVPu1kBfCifnhs",
  "key11": "5aLYVRC2tR5AyaEaVW9wBdJSfPL1ryAV9UVyGi9KZ2JpAy8uWw9R7DS64sFxQ6U1HWV2EQkEs7s9DAZ3pHrp8beY",
  "key12": "2x5397jJsMCrz93tQuusi6Agf3iiooyXVqnCzndqEPiYobJTawjUKmQZq9b973iuR5FSa3CYAz4eBtyw3YvpiwiP",
  "key13": "uvVgYv58iuRW52ayNnindrDK3gXC63wu5KfbTyiM6LguYS7aHqY6b2oou1cMxH2yZxsccoMEuWPAcZdLESnv42i",
  "key14": "4W4DcpJUTLd1LctSfZtrAosWiyc7cJjvdavyM9GUxNDvAo99nypcasVUeuRtwK5yQ2qwPmrRNwZsMM7ocr6ro84L",
  "key15": "67NRn5X1XD57g1X65SdUTtijCQpZLTFMA4Mz5WwVk1aaVwNcBMkshPicQe8e3rrhNJwoMgCEhSspCym9ytnrgzg4",
  "key16": "3tm7gq7s3m35rV6vvhZ9mar7gYkvonL4kbjieuntWEwt5LC3vnMnd2dCHtRW4Yt4qnHWALKW2Z1tQZhUtWhpNQYU",
  "key17": "2hrKyf6bJCAgjN5sxX2fMmvToZ6vTcvNKKoEzygazXvooZnTqW5aPF65GGKFcB8XxRBX6DCYEyVY696bNWe9kSk3",
  "key18": "5Z6sXWRX2KFAVPqHsHD7T6JGnrFQqJde97gS6C5qRpGL74qhi2ikCv99MULg6gFvAQSGsuncTinghxoUkUVMAYRh",
  "key19": "43JZ2Q1fde2dwZzKjf6Dy9aGT3xuKGfxZPYM5HcG5PY5sEKb2yiKvk6hssdGuieVPm2pH2QkYCHhQqYbAgj94DpH",
  "key20": "2tZaFCmyw62dyEPEquwMysvzPQJTBfDPWUpt9rEfQ4DTjY17PW9eFYEGCVx7GkRwReBG8TRobQdmqumTnNNGV66a",
  "key21": "4nTL9MNMyQai7XGpyAzXoTBgd5jM3gdnAUujVgLnwFJjjwR7qfcK36XrT9BFmgjTrssdC3jBpDNi9LWreTCspQKX",
  "key22": "3H4VchRLwojQYtTg2jLXPkQTnKMruJgo1kJBReQxh6VRHd18ikMrLKb4zQfLiJRE8MukyJXsaJJcWFM7f4TjtfT5",
  "key23": "4u1VGeD6CXJvxtv7cLuimQC6Kz5ASEPyAaHC7rV4hQZbjk8gJ8ocp7vQKdQaeZS7pUS7Vr6ZXWKRrfTu1BsbrfSi",
  "key24": "5fyCzf2PL7K8z62uXeuYayMvchTW58BDtM4QV654LwwmnhNPnGG9AJCpRSNox15fUbxCgnaebv8ioCbUN6vqgDT",
  "key25": "hb7vhcH4unCCDZdnrQdydtp6usdGbKpft9LXFa3pHSiwKyByymcDoDvLWx53smN59GBh2qgF4ZQu8aufj99j1pc",
  "key26": "3GAEa3t7xQgDUazd6E5WF5qSgNRV2CTpnT7jQthodmbsduSxt8GL1g4YqQMUGS4do4SMkKpd9sXkuVjw5V6CRVu4",
  "key27": "By7PCQBcaTRtuNR2MXw8s1iGXzrZWVjCUFzMM3GrTESKWYa5VANqSGX4Ybf2kU8hn5d5fJfutnJhbYLckpKfrPX",
  "key28": "3RCn8fwyLHxaUUTb8ZXCi2oMhCXKG4gc6uKqfY9FHLrV7c1EuBAbJYMZcSMr9LnT4bESC6nJyAjzbrxgS1RTwCra",
  "key29": "2NT5KXuK9GgThXFu8ACEvnBfxi3e5ivn5mfM6W8uMDbZ7ttj5NiUVtCXL4q3TsmzUNQQmY5R92Hjf2jL1ra3crwG",
  "key30": "P4QGXpQyNYdPNG1nBkgw7dTtMNyv8HGjRPfNeuhBhhGGCcTFcv8JRL8nTGoAuRty4qgyuaRnaAkpZSfPvw3HEA1",
  "key31": "zzfEjt2A7Z2Aed6QhXE5pySoFPy9rgk4DkE6MSnBduUknJCoqZ8F6RvA22kanr9RBLX2H3JRoHyu34gBo2M4GQR",
  "key32": "E6jXwnpCXH6PmEebjk6DWgNoPSgEK1tkxN2egbjuv3URZPVsomybesposgqT8ADnR2KgAGRSedJSjezccmNXLpT",
  "key33": "4RVa3cCrPrGHihSUV6KfSn1o7pjKCaZ2MAaBgTkCw9f7Jyuj4Msek673JGG1VQza2tvzJW1JxH8anNPj6j94VLzb",
  "key34": "22wfpSiFm3k76g8HFySREWGsZEUyfkztDk2WUpfn2ovTkpTTzPmwcWGRTqnouWd48S9cJMZtrnM6r9PA4J6fqyHo",
  "key35": "42Y7abtgPqnFQmTk8MxyRHcWwFJwr5vFiuMTvdQpiqemHXET4sLGFSnoBYPLJk9CX7i7gpfVREcLiz1PzMujadBf",
  "key36": "31wUdeR9bwMKn79khV2NAErdXcqQkcASuuMvdte8bShimonm6vVPriDQJhSPC3EYb6YbpBqWbXCruYCBZSBNhP2F",
  "key37": "RmcsE6xmjfqMLog5MGhYg2uu7jW2wu2nBTPF4aMcK8hqCoDoPsU1Zwjzz3bgGj5YYpxxufepvGwVn8BZL1awJng",
  "key38": "5wWuA6pFn1jDmmKgH9W29KBznqge1vCojSTg53JwZQPqD8e77n1XqKGr2Sv29rAD35YToHCpMK6QHtUzAagkJkik",
  "key39": "eDQfnQMYhQWNWfu3U22PhySJ4NRP2WJwS811E2Ym9goKdEJFbLB9tfxAqnM1TzPaS2zt5yLCCAn4zx6mapYJGDq"
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
