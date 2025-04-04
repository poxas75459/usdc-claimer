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
    "kyn6E2qbdN1gYDBmqyp35vu6qdegBAJGkWpXMx21R8DkcKkMdMkuVmorDX4bFez2B7FipHxC5MUsJf1H6qqqyXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4J7SBFXiQmAaGMGSzfaCE4BYqW1qyZcTzMzySBcWk5Njkeg6HinSCLzfwa1BtkanDRSvnbfpuvUeeHvTB1G2wE",
  "key1": "h9hkHWaFxqonr1z5UqweB1yooeua3mrMYzYaYBSAuzsuYmW35Ud9EFMH1MSM8s6utk3bft6M6NEkV5ETL4oVjSG",
  "key2": "Qcwz119Fh7hLotgjvkab2r1HWVe3p1NGSTENwBex12b2EHNZRV7CTA7FSBcm17QEwBmhxARZDMEdD8FjcfAXs7s",
  "key3": "53nZcPRPkqTpQApN5MPTs1HmKyNHwCJRER2nHgHU197kHssLHaxicM2qkYvgPZyinjFxiYtv7TmsPxuyeDkfb9aC",
  "key4": "5QnrPydugQEE5TRXfDzMQVFybLwVcJ2XDtRH7p2Ez74P4eTnNYib8h2exsnDx9zfjnjXdvXKFZvgGFDWQjXHHnEa",
  "key5": "3JRjBJ19L1Te7fHH4La649DMuLLvyWK7rmeDYsY3Jgs61fG6QqJaZurVAv9Psb4QMVtopRKFU5JaEPnt8etFQk44",
  "key6": "32douK7hJPg3M8uqGiQGWhJ3cU2cheAiuEDhJVhmpnYrVo5MiDybLA7zQWSGXeeabnTkHfW7t8SYGYWL3w9wRHQe",
  "key7": "5YxwopCDK8q6MPgwMfkHHtXEYp5pahxrfQr3gC9UwbbQoh5NeGKjd8oWm558CNm7ZFhuMbirRRFxakt8NTNhrY1h",
  "key8": "itdyhUvGdPEshUaAHsXHwe3xuowxfuSKX2gmPTEzTFSYSj5Ew3yGQHWE8sXPwsFYVPqoDXK9MJfQc9vrLN55t2f",
  "key9": "YFsaWnhHmLWwKA4QmY2r1wUUPbAZ362tM3up8YKj3h19im45hsFB1F7ikMk8gofKJ88dEfEoYFm3we23ti1Xg7K",
  "key10": "257uoFHnfM8A5HKPSn8dMYb1w7pJUacgzhhdbFr9HBkvmJmDkjxqEVLPbjCfnbFuyQQkWXmNRfrEbrjbnQ8ZJq1K",
  "key11": "5iUG4VWnevS2gErmhGmdemJqARbqLTXZsU7iaScYBiPBAorvQ6b1Ms6NB6pCpPEcArxuvupk9AVSm8ye7rThMLw6",
  "key12": "5sMRZrLZ6M4p5afFFpSVqYFEhFc9XscJLjVNkhtds4EnPt1wdaUTEzmqgsMVfnNqsYHZZsg15r78K8PUw4wEYPYF",
  "key13": "2xpyWSiFaMmVZG466sJoZnDpvoycbSaeQEbcbdUw783smsdWyJPNKtXTsbhVd8VpCPW9V3gjULD2BXZQkcvDCUzw",
  "key14": "4rRzs1g2suGFnCn3JyamLznM6YjqUEAuqxT6NT7vyReW2iShxJ8TGoXDeown6rpiCTihk68y7vP9SLXJoLBoxB1C",
  "key15": "3tmPmqtsGZP2Ku18KgzSxmNmmwQuXQGC96urgbw3g6EA8gwCmm7jPPxfHV7QsY9pg9L6uYA3eNyxDM7kwJbqPAub",
  "key16": "4D2WDiFqrghx3cjGZYbjGGWbURQZfVd2BcA7EQ54qKA9n2b3QVvuBUFeTex8X96Tpi4SP4arEoHb3S3UptnbpPd6",
  "key17": "44wcobbtqnc7Hfr3ZjuTeYMGVkb7HGLZXKGns7w2u5DoLhvYqrsgTsHsUDWbYBXcGCVVAf4PyAMDBqMLCQnNtA8X",
  "key18": "3fDezAv8nvbun1127Sx3gqeYSmbosA9XeZ5yUpy7ExLJ2f4TJERmKo6DBm2PTCAUEJ1aLsm9hGascb8BFgYZSSNF",
  "key19": "5gkRhXWUAi98hjWsfquGr65ihBo2b6cXJ69xGWXKVVpcGy6iVV28EcQDtCqiLwtaCz3vumMTBENMBUXs5xUhdHiC",
  "key20": "46zUU9Do5QAiQu27Z1yKee1PWBFo3PmFVG8YZWD75RzY7H3GPJ547XFyXFuKPTZAwGytHxocimmUqX9YjTjtDWCu",
  "key21": "xJp7cJWLY6DMnNwQc4JBBzxBaapjMTYKrsM2fSuo2miz2LBNupWvqcuVZKMjSiSp7mJLrpmd1jpo3YYKaAq1dHe",
  "key22": "2YPpMicPWdTRJ7eK75GmAwcEfe8gXytxSomn3r7rugirdZ8g548GxUUtr9GS5h7v1wgPdTR3rnj4GL9dCMnuAWnU",
  "key23": "4nkcbg37oKjWGt2tfzbXBW6yNzXeCMuMqCc1C44YafXdH3oq5Crv3KDPRkywAyDMozAHtjFgLiZKPaMT4aAyi2DK",
  "key24": "2tPChSjvhLLLTJkXqapqwywy4YXBXK5z9adqtYv3NGuMjhUUNVKttwSCkbwjnF4kLDqyEUj5Ga75tLBKqGZDBZKp",
  "key25": "5nhM9TAfs7Vwro7GCd6tN9UzKt1XZTGnPBLuJ6oiX4tDQj6WHr4FRNVvNqFpNJtwhSN9nM9r8aDhHuj9euBd8jpB",
  "key26": "45iXpALuGGDJqbHhBrSnaVcMkmtPyHKzqRLYNSSsf1VuLkcaQVPVbei1q8NDMdNp7MKXNpjXyN4YTi1jZXMFC9Ks"
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
