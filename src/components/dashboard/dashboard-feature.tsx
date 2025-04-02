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
    "3GTpQSoSFV7hVGpoUCrxxv1nrx1sWCvpB4oDcKdLf1WFgCM4yeNaGnSLTrUL2fS1AfQC96feCtHP7CAAoNWi6HVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w9W88zSnFkg7bkN1qWsZzyx41BLo934D6zcbxAA8XdLXGJZZX24hbdM5t2fE4itDcLhp5nn6dgRDfFSGEs2wXue",
  "key1": "2B5WkhLqJjd5u8shTQwyKsgeBfJF4JzfQuRRJnXvtfwzmQjTYDyWM3GnZZcBoECDppx3wn7tjydqc5QG3LaJYy2j",
  "key2": "496Jhga368JLk5JU4pgUv1KcdfCpKLZv1QBryLMFF2CtxgiVwMSpyNVL2EW1zPggET8Aug1A5v9P9YghNbYsJKan",
  "key3": "57yGwxVmexQgDbiLoZck8oct9NfWfGkJxPbKNZ7DxmJkVWyfwYSpaBBE3EjcCDLskthsQYKEy2yi4KhV99x2fNEi",
  "key4": "3BDRHSmW7ucLpayBEfywoyZqYzLxYDR8BF5v5pWxLmgKmLXouGo7dN11vDGyds3upgXcjdJrx7b2WHganf8vcjNG",
  "key5": "5e8kfjy5pgyjMsHK3anBYFTyMDw4KX7MJtAAAUie6c3LEtE1cm2WU4Uwt1vpLmrSFdRuEdpfCDz3L1qjTyChZyAN",
  "key6": "3rgT9cBUPzVfXdfFkqnX4yAPGMoRq2Z6AmKD5D8PLpBo552jvMVGTDnoKAz5QRgRLr2sdSWuyT2e4JtSbVgJ4YW1",
  "key7": "2yHpsHW4PnJZ6fevk7b8z6GVSBWXquqfuHP6YTAnYzgZ7Dr4QwvKgboCRmv2E2LQHxYRxvzw4iaSKgQhLFfi2FXY",
  "key8": "dzaZ1jD2aDsnLiFGppXpaVKt2HrA1kU8ZKqeFwNhk5knbjxdw1qEuZcH46SkRy9iQF7xmkZMcAbQRh7P2EdqroN",
  "key9": "5TbZch1TZgrep6WLz3FVfWGPtJ6BvT3zjTkBnZERZXqigXVqpQQAu1U7n36bvWVnoa7hLwLTihDaKCw3PSqRgPTw",
  "key10": "2XqUxjUnQ968nvmKBKxiAmKhAmS1YFDbZBJTAqgDLwZAQMsUZMwzPcCBLpZc3wMLQjNJp8TfEyM8FzT6THF2NG3w",
  "key11": "4RaoovEdCcohg7XjLXqAPBeL12s5fexCpBpYCtHo9zRtRbTHx5hLo1YzyC1W4vnX4nL74EoZP4iyDJtMAbUFshwX",
  "key12": "2XDa9VUnqDMbmTAKmZ8AbchvHvrhpTXgKBJZfR6NR5fioUpWQRiNfCmugPmZqzxc7cdWwELnuqt7pRYP6nQ9F956",
  "key13": "3ZQm5mtcp7KSzRWvFqXqUTqjda1z84SmQjjzSAamPw6kLwgXdDQtmuyTJcpzU293BBbCNsXiNjjXPV8tR5A15ZFq",
  "key14": "5neCvyXCF7mVX2SZzUGisZd5yAHu48DTkcWqeh9ndavTUkLv2W6U5bToj9Hn7W7xo1UnEvEKhB13bg7SbaRh1J2v",
  "key15": "4wJxheEoNE3Fngn1TVymPAaSdCGE9P7B5ymBVYzpyNmpQf94nzangdP8AwRsGtkDhFLWRbV883hXwVTmix89vzuV",
  "key16": "4B9wkvXHbWcgmCLP9UZ2rYdwmAEYLTohvzRBZDiz5ZcgM2qtBphnDBv4UXEoMQoNimtGxz3xNXhgwdHSwkrKBFrz",
  "key17": "tWeNKcMzxiwLxk1xmpehy6zPXoGZi6NFkNnVUzhGnYzapKNvhfaiiNzoMzwCc7jjiaFXAdefdk1uh8XuwwNuJRQ",
  "key18": "5SJ7Ea4j2gypMHfnc8Q7jAVThP7jycv1sBxkJErNqRTnXpUusryWJYmdoJpsDNaAcfPESvbC4VKAfQ8MH5tsLeC2",
  "key19": "3DCFeYfEgsKZRiBEcDDL2otG3Hm18hprWP6vweJzeiKpz51Hq6AD43BvzubNa1NaMrHCwxteuiBUQvonzvVWZvEV",
  "key20": "4uoqXSCoQ4m11RHEgh5F2opUNpETXYMGXC6Mz34rfbTkV3Tpf5Mci1GtHc3FNotiRzpaqnWD1BXZPv9LGS1XmCp3",
  "key21": "4JQ1kcnZEPehDo49P3tZpNeuQdjy9n2wYzVkhpgKS3uSYsZSM2bZfyQymTQVj1fLaWoXx1pSjM3Q4TyPpBnfCzQN",
  "key22": "iEQv5WN6xfhH3nAKrbiCsHwC1UjhVUV56Wi2rFyro5qzFDtFNSngva5XdbVBR9vZuiVcVwSum3ahnPQACLM5NYn",
  "key23": "3xEdRgebVubevVo5ACBRSxxq6qsHsB8M1LA7bk1QHz6K8ogLF5Bgqb48JqTwBWiMubpv2XZMkBCWLTtdPrJZsvvi",
  "key24": "63YZcMkz8ETYpeVWW38SfXbJ8MWhaf2kJ55XMGdiwDYP6hKQgszPWcVaic4ywNnZ7Xrpk66Dbwbotq7qFXxewkk1",
  "key25": "pg6jsDMbyeyHk5AGGPDLEvJD6hBu3h476DYGKqWwXWW8X3E1TrbRvHRf3YDg5K5pKJk2JSybjqJZ47FA6nCu3BM",
  "key26": "3eAsPYEj99x4hsJYeaTYD8EdwE7yWbnySVW5XvBVRjUMkvBVCSx1rusHRRHax8JtTfMUkSphL1rc6BKj9xJcZaPs",
  "key27": "5mT68HU9CTRf5TRz8K9Kdq2AtXVGhMejxrnyiN3rKcE9iLMjUDRzbj4Tik5tTEE1bXaXnHA9X3E8QRRixBCQ83co"
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
