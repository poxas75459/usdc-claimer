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
    "4WNM6K82Pk5foJp31iYCBCwhKPAWoiz9jrQEizRc29cbX5HrQaiYSNyfHZVVfP3QggmhyqbnmThn7TuPteazJ9k5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPPmtAgBdY52xvNUg9wpkVnXuwnf3RLtiSjqc7m7czHnfscro3ExDAw5dk7kQGPmQG15CqMrquKv3FaoSy5REgZ",
  "key1": "5LTPeRRumcy7iXWxCMJE1DS33TbgqeyKW2A2TbZYJzVV23xqqVFhngSZaZyP2935VLEmQVZbjFiZjx5C8RnBW2Ei",
  "key2": "McWRZGfbcTmrn4t4vj3vi2YFi72XHEPqgzNGy67mAs1k71rRBXKXrYXY9R897Hb1up8QhGhwvkW3grVQUNP5zuY",
  "key3": "52Qd8vse88g6B4S51ZzCBL4n2oNy4LpSv7aDJtVktmdGwRV58QScsyZuMR5eJpHUDznp8xJuv5nvAJgLgkjgbG5o",
  "key4": "5RbMGecsvjf8X7GJHs28RkK2Jk3WvpH5E1AqsAYdnRbUFCSVMs9mbdTgmPoD2QLCKKu3Lic2xRuyDmkbiuD6MqWu",
  "key5": "5kCPtZzeFdvcBhhKRZLm72Yqeaoc7kV6K6UAGsK5ZfbZLL8DQTAaCMHXCtKLFf7QGDag3eCow7afFLH5MDshDV1m",
  "key6": "3D9yqUeNUKjaYViFr6nQJEzv944mmJY4gJxdK5FjR1JxDV49eNrC8kiZTrYPDiNdRKLiuiZSkVMGAfWeukgBqeLL",
  "key7": "P8iUwETxPVP84evsGrfwzQhv8tfjAUtpm3FMdDmUoRvtDzn4wmCUgGFGVBMTUa5SSJvuxwqhFPfEZ8MhsJRx8Po",
  "key8": "2BsK2AFLuTpBdNiLpxu6MTjA9u1XTFTtJfc7MWqCbdRQ5kea8VngtW3DedtEwrBmDS62upepTrvZFSwXdbE4atTw",
  "key9": "3bmRgq36QVo4kKL5fVW7CWQqZhPbotoCbKqD6xhq7PiZMzeFTy6ckYx4VkWzbKSkArWwiHWsnK539sUTQ885Gkt4",
  "key10": "57ECSMBxJBo4mSMzm4B32F6RcfTiEYoqnQCUiHbjXDfz6kHe3c1WrMLEX2QrHi73FL5Fgidfu4hnsQrd34y7XfB4",
  "key11": "32beJTHhU1RjPMhQVaHdMSdA7Kqgxp9HwhhQ1jtevK9CydLoZzrBAJwEHc79Rsi5LE2YXYiUZPnYk1TW2d8Jzyr2",
  "key12": "3kXefBe6oW5kiRBjQyFhqAh4DfzBwqvKbiqjK6NcgnUND5nr2SZBqMoCGDPyqEeKSd4u3f3M7RiRcSYxes23MouT",
  "key13": "qBUy43uCGUawbAub7VqCT2zgDKpk4FYydJfQ7hZXd2Aczg29YrGUTZTyNGgWmz5Xu6YpMgoyWTwnAtufxQnZZK4",
  "key14": "5sMy5TCs3pEqZ342aZbPKiACw5hZdRdkxjC4mCHUaCEAq6jAouKbho4v4buDYURWcH7qzTm3prEjitsA3X4p5g6Q",
  "key15": "3HuSUNc8cqSMNZyHQPMfqfnYMRZE6MPjgPBwoHJAPLSeojAFxsP373SCZ5jstASE6XUQu2pfNB2uRYwKc7rdbK7g",
  "key16": "5tivHTekUpXkTudePpkBcHVHasGYnKysSw7nn2ZUJ9QE9v67tD9x9Gac6PqUE2KYPWMLEt42uyqZM2LAZRmiQzFe",
  "key17": "66w4CXTyzENTgrrET8bSapYPpVU9v3LPDXLTy45W3S4owUT5R7b659hJSVgPdTPf612iwDrGUwy68GPXegyGQMCq",
  "key18": "2rpsy31cdAqRXEnHWf2YhM4bAnpMKEP5iYL1PL2CY5jx8GieeNLD154SKqsxkzaA914hAzdUgbSJcvYqNPR19MnQ",
  "key19": "k5yTWLjZRJnfgSHujXR2SgxszqcPqERaudLLinuBGdc3nRD44a7D5JAe3DNaVFAifHQ5QdXuRdqADUna7jgUZY9",
  "key20": "rr2oZfmMR3ReqdeiG1uc5WSzgrF9SCgwCwamVS8Ua3gwU7qZdvxjjwgiP7fEEYg8axAqDZYoMU6gdLXYjrBPDz5",
  "key21": "6tKmZAg7uh5tyCj2z9ttYiAYMtQPheB3oSWweAbyRvYae73RT8ATfyLPdgoHZXi6YsqadfT59XiegggYfG26fYb",
  "key22": "5BpA5ima2qnEyarVM38sHWfxf99wqs9amsRjiMpJWihjom3Ki4B63H6zC2sJFxpMCw7fNQeNpQ9ysQTGbiHYFcKv",
  "key23": "jfiEsHyzc3rXGjbjVFaERqw7M4TMQyD6nzxGhr1ekTt2Up8yFRjAmdX4ZMoXuuDj6xXvbTdfSNm3jP7FEamcwJ2",
  "key24": "2hdqwBDMaSfMZBCbJd3pxfymnQSThUiEQ52jBkcMUAZo1Jj7nLf4RTfTP1HjRtrx1uv7LwwqxrgYZTAPrLD3f7Nq",
  "key25": "56ZPUeadRGCwZY2uaaA8vPhBnL7W7thBKvHJGS3ruFDjfc66x4j5n9W61PpPbg53n1VUQYNJQGhR3ARoiB9jsNG4",
  "key26": "5Dq843FvPPRt9Jr9Ao4WYxJvi6Q7kHZw5LjU5fF9bKsZkUCsqeGRsxRge52zHRg3P2aPrPj59C2wCYDc2kbXKrBe",
  "key27": "yPRnK1rdRHSrMSjrp6HbatPUiajZWZ8g2QxaPy1kFWVBzCdurYzkcfcLp8QFaCyW9pt1VeFfp7hd4MrdwAWRdbn",
  "key28": "4WGGRqZ9xZBYV1pcGu6L24nsumhS6hZddHXSRqdff3JbL7BJWaye2cyPDdXUD1kQWuTegEuu8jMN9RiGe11C8sSb"
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
