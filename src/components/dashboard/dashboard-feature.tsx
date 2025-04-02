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
    "5UKWWa5UwY1mRX1rqGwK8zdHJbS3xF5xfVJY7hVh4AuWc4QoLRusSvPV6qKCpSFTB39WhuVDkzS2HCXQTY5kM3Tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N4qAzwe8MRsEibWuugHRbJM9sXaM8dA1MMR8eC2kV4oT5YhV1s1Uhi4RsCS2dy5v7vD3oX1EUAkj75UEVY5r7gj",
  "key1": "4Ponrf4K9PXCYzcJheYh8Qt2zW2dHjAH8qfhDQpCye7YkfcRhf7QbHqWYfV1X9A1zh1SGNu7LQn6LE6pjHfyrvWc",
  "key2": "52tWiemSgcM6Lprf4Hc7BvWrJSFeH7u7HBsHm4kQ1RAmuGH39nPb9dFy6Ed6oNrvrWpnepfMRvVWY6wafKHLHDwT",
  "key3": "47hbXVBWDbLHKMe24LjWXnfoSz3vUMp1AMAUMamkjvy51k391jGshTYD1dWSEQAfumznBGgyscionbbKcNQSvPuX",
  "key4": "3SB21djEsfSpHzNKrEx5GpMdLaipM34u4PLmyVCrZLgF4wA52YALfmWkXCsRWw3dMUQtNK6zjgv8rPtLrJbd1j6a",
  "key5": "5X2y31oH1KE8obqLSHYhNfnvbgriJgkb58kNsSmrNHLhUS4kwdwpAfdm6s7CKX9woA3LLiVWY8fLTWXieHNiv72V",
  "key6": "pRVByZMigKx29LHYabkHy17pYq7Z7jDAhsVAwbiBMHXAXGi5xXoP4jBVDjcJ7CsVgGQHCDgCseCMwYwTgTU6p1r",
  "key7": "3RZLk9fPcxjwdCFp8Xin6mrSFsJ7ymXrf9B6ve5xcvtwreJ5LziJzXcoPNfA4QZoacD2HuLKXd8yrTetUxoVcbQU",
  "key8": "4LZCd9yUkcYCTtEascCsLqX33XToJQUyrgqhgCBrDqgbRPb3ZscntZkQw3n42kU1eC4vANFUokkigz3fDVmbxiNm",
  "key9": "647nYcPEkZ5dShVJPwSKLJE2crKLuUbhW5aDTkqyRkkRrNZ8zRgoX7XViB3kCoQZSuxDTsZWRpRhkgwuXdZW4bMC",
  "key10": "7ZkQH1ECokYGdKGm91RzJx4DZQz6vwUK9iKF7RaNEBthM6NE1SBFRPfS1vj2mkPPQSuwva6iC5RYwUXM1KBYK6Y",
  "key11": "3DQ4rthtkhC5jYgYCLnCaRjpMYXAWNgkSPY9gAY5M7sNoTAndKU5cQjja4hDFWcvnVBhJkCqiERa6uXGRssBTiHS",
  "key12": "3frJWT4XPPiWrmfW5r7tjkJKoZsFDkCusFS6ovYAD6Yfs2WUEmTooyqDFG3nyCaZJQb7ccgyAoEsaBEYePwgTjHo",
  "key13": "4wthJnAkMiTtQUB8pMMWs4RPSYCbPiKUuxmSFqatUriAQE2ShdnjZtWca7LWHSDfU4S24ueZBJHrY3hzjxcDHg3n",
  "key14": "4FreonwE8hrm6EMz4swnbMi9szVx1GzYnrPUgw4JsJjw4ESfGGY6jtemHovC4s4xJXuG1oQvaxTr2ZPkS1XkaqEe",
  "key15": "e5Jnt7fPTLQqVWryysMvJx3BfJP6o3LXmaK17DVnwLRsfeuL5kynd5ijdenQR8U95FfSxTm3EQuSUppc8QofDy2",
  "key16": "3oKRRpnAHuC3ziPu7dN9pXiE5Wbx3hNwCP6t7C6VKLAyPURP1moNqca7oGoamdp7PEygpWEsSAgF5wDiom5f5KM3",
  "key17": "3o1fTWHhDbKmvX1KA6KuV7C6NYn6C29gjT2tMr4yXSoHDtnBUM3VcaJFvRXYn6y6Tre7tF7cCEC5icYYyT38vf7p",
  "key18": "1wvaXvVupbhVn5LkkkefhoptBkmbR1iULfnTzTkURNTpCZQyMM5VFZ5SimbhLTC1SJnnukk6u2oCiWaEZTzdwmu",
  "key19": "2XiEku1rKutYhjqM1NGKMEjTEcSh6dvWoVHNytveU3RgnELm2zvEtY4zS8mU1GDWBXXDd22r862RAB6379wcfBde",
  "key20": "g45pMkGVBz6fJgiwBSxDSeE8gTqbRCLctAWQK8egSbnNWr5Ufbzw4EPgSiBocBDhmMvYZxYxprnHNHzfT6Z1DWw",
  "key21": "3PRjJs4emRxd7AkZ29Ls4erjQprxSQHvREEQMNL1cj1EfxgSdyGuQKz9v3iZypZgPc8dRxeKkMQd78udBVmQ2oRE",
  "key22": "3Tppj2eAzj6kevJzokZetXAvxCJEsjiBZSG8cUeFu6RVNAARVdGLSnkkbud8XDX7Ydj7BU99TV1hHw4uedH7hNF1",
  "key23": "31WPV7PKGKjkQmiATDmemab6S53eKLxZwVaTaEtxXS5Dae6WwXrfd9XpUXhgi5FPaaT8arBg9pT4PyAgFx3ziHL5",
  "key24": "iHr1A5uRF82mfhoABFBjpzGKTdcSGAH4DLvthvRAawdB7MK3ccrk3oJoxG4FxXZjSWuHoXLxJcUdfyhKKeX8FPv"
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
