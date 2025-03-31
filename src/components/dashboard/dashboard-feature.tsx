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
    "4to1qcQuQpxDZ3V2evPxoNoH3m9K2gu6Tnbmjs8qhHSMhKPPoWaUkt6PgvFoBzRCgfydPfec9MmhMkqADDvmg8iH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wiq3BC8C6iU3cwLnaSsZ8j9Xxj9gVEBc46Uw71mprM1NFhCbYmGJ9rKT5LsBbPrZZi6tApVRg6acvQyi5ggqUAH",
  "key1": "4BANEiY6TzuDgj33pymPNSpS8ddxJwqpoJ6m9jcr71qdoV3zMXjxUXcBPMfQ3rqscUfXngVUcwovjrb9s5a8aTdQ",
  "key2": "44ZU7v5ZyxcmRCs5thAzMbZHfZBJv9D56qneGQTyn6i4s7P5H4wXDQipby5ZJE5ffHorRiRSGoaWA12L5SbLvsGc",
  "key3": "5h8D2mbE8kEmuHwhbyJHUkhfyTNFrmkgyAn5vtLsXvxRRfrMGCwdihyJegtEjTceBnZEzTmaZYcH7xJjehZ51GaZ",
  "key4": "5woS59wNrnN6n9BxQrjvHo5SVB1721mwH2fwQHYh1ytg2tDabQ59w5fvsUg5i5WvuKD29qYnrqdCznvap44Gp4Tj",
  "key5": "3U4EP3s3qbJ3ig45T27vffdModrxRT2oXoiceyZVA6FgQ6Rr25g18Z2YJ4YEzJr8mritMrhfaX41XNJSSavK9BGK",
  "key6": "3o8orqadbX5RLeymCE2PpdcJ4d4RdEz3F1a5DyzggpDNBH8ze4Ax8xiwkL9DBDs1nsZyKd7w8AvfM5NegSLiDrwr",
  "key7": "2UGeh1e8HS6jt1csvF7fUhM9ZGhUzUArYNe5UMJD52Qpv9V88SA2JjT1PTUA8QEnLGrKtEcR2VcnrshNpd87svpj",
  "key8": "5ZguX9NgsQrBhWQBetz5zejo639yYm6XSNFJJBbn7gCokLRUzSkBpBnoguNyHCwvHUQFGBG4rRanpgvcnTFeHZEh",
  "key9": "27qBwoW325wjEMxiwh6dYLvkPhPtBkRrumS1vGdtRAi7bWJyU4VtFjY9m7ETwdqDbqRL3FMfivWU137oPF2yA9Gw",
  "key10": "3JY2Tdk63Z6x7BnLQkj6hz5jPfMa7jdMhjb4mphQF13jha5fzRnFCGGghHMFznoZpDK1t7gpYxTEHCdPC6XjMPLY",
  "key11": "587K534fdmahrhS2Qjdw5ENpU1JReQxTvRpwvTxvbJN9i5fbGJxEqHGLBVWJTaoeq1UdkFPWrWgeKAevysXe1MFT",
  "key12": "5yNcgPHaQ4Z6uCfUNDLHWxSTHTUwQYQZKBAujvZgunXGfxjqsfEd6XKx347DHVwHxHSN8d1ojdX8gyYvDt9Sqv17",
  "key13": "5A9hZ7892WAwBcaMF2BRnxCsVJT12XSm7rqron56vYLaQ1G7zmTdJBvrB1oV4cHQH9nUU1tKJTDLU81ur5QX6zta",
  "key14": "3Q1i3pJBj8YaZ8mYAs7RGfGb2x6G2QP4dVUTVo8KyzK4Ax9MiFwvfS9q2rKq2EADdALbHDZeyWSRKqbkNrwF5MX",
  "key15": "3jxGekuKVejSy67eK974dMTkVvQ72KRLxLJhfvCFggR8m7yJ8AZBpsLjzvLNAQqYYPGuhA7tpvxKnSepdNpihRLC",
  "key16": "42yTd7a2bgWoaGrs7g8BkhrmVYptDUD5Vuf6dt9RTDUwbkTP6yAy2JR5caaDkikzVn5iLtsm6m1NrZypff2fyWgu",
  "key17": "V8594vKxcyTqWVgqRr57SUHq5Yrjdyi4vX3SG9RaVTtN7kEVQVBTrM3Y1zWqf2Bf9WZdySzF8Fvn9qw93yrvt3f",
  "key18": "5euDecrJbVWhPzLosJkNMBxTt5Ce3gRQuyaE2yyuPUp9boFWmLts6BXtYrycuBYeLrgByHQvVpskmqMCLMYrBiBB",
  "key19": "66z4d5vNhz8MiruX5KcYLnSQ7nzxKQrgF6sU6wgRPjWvdz3RdP8mG2r3unem74xQYuCcdxArV5QMfCswhsrTPQsQ",
  "key20": "3MxGyJGR2DqBd1mSGb1RBDpAJmVRJsCxfhD8EFUCBP83D2Wa9trLKNyH7dnLPojxAFSmsXxeLzYnTL9SZmsuDBxg",
  "key21": "4pXE4YQSKfhqZ6CHNBgLiFzLwPxggK3br8tPhZhz7UGqa9Ws5g3dYfHt7XPPz2o6iCFU14Xmsbf3AZktWUM5iJvG",
  "key22": "2XN2pZ1wyPgDsRBfjBcNJRhL2GtbLWmeUFviVBFTqYVCwDzSXGMiqtFzbVDgquvpJXJVKggUGkuvHnzAZy8FQiY8",
  "key23": "WTkegxoCTkiKGnYFA4P2eGhhFqwJUAaGjkoLmEvYjZk5GvmASvqoVGbtX7P3semuM7m3eCCyzcJ2Zhvjz6gNg1h",
  "key24": "4ireH8nMuU4urM7ihw4zpesoH4h79psqMDL9ss4boiGq9K73WfpRqKXv3c6ACGkueE7UBkDFccrVCqZLLFcF6vSZ",
  "key25": "3guAsGBnQUV4SvGAbGz1ghdtN2f6uoZXX9QqFVcJnN7LGberN4uCiHr7jE2akPi7ZDWN8WRouB1wYJr8eUztkmJK",
  "key26": "5n1GR4dEusqVkBsqyJuGuBqxnJssPWMJp2mt4dA67u4vsBjj7kYS5YiSKBB7sbks4CD9Q6N5QFAHDaUQ9QX5kVDR",
  "key27": "4bwxH1K6kUJq27UHqHXqhcJ33yjnhajDXm9yrSzmFKuejuV38cQ3ZGEJroo9AnHqdV8rnB2WshPi7CaP3NuiFZxf",
  "key28": "5hzFEzJqumwhkJAZS2JvcuvCoRQWuWYskQkoaY4FQB74YXrD4zvF5gtErAMEyqydq59aByAnx2x4sNm6NJAPF4zG",
  "key29": "UBWswDW6NyPBNQW5hT6D6z8ThYYzHAhGEhFQr9s8gqGYkmMYx15kDSUB3Ch1ztxgPryQ9ZUE3isNqkwuAMKvvHX",
  "key30": "6kqEwN1weDaTvwJByX3SaSNmLUMyfhRR4jwSUzURfGtLbHcaD6H13aKkjwBztzKupFyyYEx1v5yC67MBV2rs6nn",
  "key31": "4BBEmYZtv3K12PMJcFHbRCZExzFnaF6dEvTm2vehcsS6zFdACTMpBsL7S3p3ipK36DkYYKbJnT4S4eLJdLPmsEhy",
  "key32": "3v5J9KdxySK52wh6Cxav5seE7UsnSwT7sMtE51fYj1aPySvLwjHUhByFVSLaJharv8hEsD2ReD3VZNkkYWQdWAsE",
  "key33": "4sTfyviKP3GA4iKhcMXXRj3Dw4pqNYrgHykfQAruXwKeJC3bMVMi8xWDwH8jXp5WCv4oz9Cezr49aXKhpawJw4Ex",
  "key34": "2na6ckWJz8J4uRDYV39Qh1vrXJqWYPsRwPScQc5iVXCgL5nux58R7GKzJ4vpazVkoNE4vcBcDmhLDqKRdyXX8hq4",
  "key35": "477rPxyiDvgNkno7Ku2v722CHP3QfAG3Q4AuUEVGga8sscX3Gu6nDtApwCuEJownd82SZuWzsgeEaX6mu6cqVJ4e",
  "key36": "5ezLUQg5nbA8UDGrnCTres2gUL3z1npt18hi3ynTzxU4ar9bH2adseARKsuZcb8QcrJWCDTVM7QV4muraUTehrQ4",
  "key37": "4Zrw7N2HZj8bJD2qoJLuuXuewQbLdEzgeoimifzaEV3Uuk8NWALAFdSw9eAmRcQznzCtm5AeW7Ao1FZ3Wj9mfoY3",
  "key38": "29qASgcr7i8CV6oLGEmh6qFYq1utciqcPxeRdZgbXidsETTLdbGwo15jkhzs46sdvAQm365RmUzPgK4xKo7Ap6mT"
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
