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
    "136ZwPLAJP3sEc4h3R4GA8d2ESb3H1nUJDXwMSMD5rJBxMkz3jL4QNofCXLBnzCGCLY1pabmn8ZXUiKfAHmhwqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7ypDwEYMNnodoVpyHoDYsd1CyVUi2SYhCY7fJFVcm2MUSodK8BxZZa22Rzv2VDZm76vkVgZtNMJVTsxhoPuKkt",
  "key1": "2LEQ1CJBHWKUrJDiUGSc4ezUMiw1f4Zch4wsYqQfQCSWST6BxgbdVyf6hjcF8hrbjdD8Sh5x44r2S1847Uavj8Py",
  "key2": "2vGUt4USkRf6cLXM2QmYp85xmwjnnYowDcV8f5mZ7iHL7YbKqTvNQMGoi8KzS1paPTtxVu6fhUqftZLao5uNwC4J",
  "key3": "5YfjvJj9Ughx5bj8V5rYmQuReMrt4bmEftmBPynHdYDMQpaEjK7uNR64rZdTu8JnyqBp3XMfVAHssdyF5muaBawL",
  "key4": "5Svkro7Gxh1grcLGs1o284cMcPYabfEDVk22txEci7EWAyGcsgS3JEza3tEwU111jEkDb6GU89WsWsjcEGxhfXCV",
  "key5": "qiePTs2f4uNrR1qUvCvE6esTxLKRMtZdK97P95kWG6EQ6z7htAK3XdgsQmucA3iExfNF3F2Yhf4TtygeXFT4QFG",
  "key6": "3xgpyRzb8eV7h8T4s41dG1Z1oCcBDrNruNvpsCoA2nEsBAgZMNJz4yjLMpLKrHkcEkjgDQkBri8nSxkrepFjy4Pd",
  "key7": "2zuHb9YH8xWLRWAwqF3C8pdFmKN7cTFbRYAXQff63AEmaFTPseLC6XfjuWE4XRViRSpqXVhRXSrSsFj4Gof6MZjM",
  "key8": "3P1Du7PaxsZBuZhZTrBQc8RsSPsti6HwLxZA3JTfrZXjpw7hc39t148uAm6k6XLCBx6eUPnzjXXDg1R99xHKC3rk",
  "key9": "cNM8J1MPB6nv5szeGxvFDtja2v3WQZCAcgpPAuiWoXzV4v1ZGYNnTNH62c41cygV36HY1isXHW7pjCzYKW5UktZ",
  "key10": "UcBPVWwdNhhyFHCR3YovCYpcSG1aDbi4TuACjP2WLNcAYcH5j1kA5A7YCQj8Ex8ny79H6EJaXpuu3o46DJx6xHF",
  "key11": "3Q9Ktzt76Kcm8Md2SkrF38pWcnegUBw3RN7hmmi8zuPxH1288GG2AjfeHe1Cb7hqpKAgxDEymCaZYK7nzC2sBZUW",
  "key12": "5D8JN6n3umWUUVhr774vvMfkZV1Tx6i7xTCWnSHcL9kHgt1sjt3xxmi4j25S7EW1xWrDqx2vFoUBdq4iVkPdJLgw",
  "key13": "26FdhbMozy8doctzWjSiJPybSqzLHPLPxy9gujjwsDA8ZjB9NXBmVJGYh1vCeepWc6NLyPpZPUKtU9Rx38gKZHAL",
  "key14": "45RVKqFWaZP1Q5DJU2obcLfj5wcFTpvXqMfyYEkq173Fqz1ufDPbusLYSqJ4UMzghMBSc8a8urwYsPNpiFfNRuaJ",
  "key15": "3jKCsfCVyAuH89TxMWGXnkG7Ht9VP3GYtez1uLgavz2DCc8KBuTwYUkycHGD1Q151sRKwE1jUCPcfKVWRUwSKMWm",
  "key16": "3Aoj3GY3hGtNuYEkxuPWTjzagKRaLk8ki9PyKmeq2RShdaPpGKM3XjiiPn3GHENqn2PWmz6mQhM5nMAwKWM6ce1r",
  "key17": "5ArAZTCvGkP8FyHcfqocxYuRnaLZFdjYRTb27oYj6iVfvsmD7hHL5dyVWMT1PajyAAGXnWSPjhzt7kQWZCTQ63JW",
  "key18": "3f1vuAYnR952Tim9eFxBPqgmNrJi7qFp8YRM2NmwYqJBErdPNPNr81KcQ1QCXjzTVFy5LVW6oZmd2ZrqPsYYC25K",
  "key19": "4iJdsV3G5Yhj4CxPs75AvX4HneHy582oGFds8NFRHer24iMUZdtM5psz6KU2XsK8oCjgHdCbiN2nXQEAwbJwhKQ2",
  "key20": "5tzKDTnDior5Nk5z3PSNoi8j5Tj5n3tMZJNUsR8Vdi6Jgyt3HytZCzma9EdX1eHM7XHB9WTLcPW9jiqBqDxcdcvB",
  "key21": "4EqC9m4Aomr8YYvwSbWrPoPhkQe5gAJEnQvu2RSBmgHECMVt6gy6rBQFK7JBfP3S5WnfCVjbo8CBVoNLBMfmKGKv",
  "key22": "3NALXPqpxFCLetaaBivuNdHKa6jYAuwbeLQ5cPpawvp65kVNnKRCtn5XGqF4Kw9hAAH1B3CaArrnH9qg13UKvo9f",
  "key23": "67LcxKXEzNqUsXMJ5w2ndrKUJtbTMufnst4iUGFjZMmXNwhKnrYZ7T4uCP95PFvQ31fLbYYPpWJhT8TgRmfPzm6N",
  "key24": "7vFrUq7mL1LBFBtuCQN6rsP8aHmR5bfrMTSZ1tzjmoi1CnayxrM14ExCSsCJY226TMgDY6bX8KBufHRNtG2xk3C",
  "key25": "3B3CgVWCgzZJyWeGt5xgEgKwJCMM8Kx7uerMmLRKuEDYAo6WKtPZ76sk86wmeX8WBi45bSjr3B4HdSqct2wnNWdz",
  "key26": "5B4kRZtu2tNxkzpSSSv195Fx8Be9tSL8gTc22qvJX5zMtYVPigpEgHjUpeUux1BDiwPRRhua3tBjKbv1fuyjfLq",
  "key27": "xXJ7WYb5D9rhPBfqxaRQs25Q91uUfoXCnUQ2ri1kwvWoU46sKKptbAWMujzGnGy5T7ykK8uC9hLJaZiHpBPUf5z",
  "key28": "2emaTh1z7XfJ8ufJANiQYHmSj8NnyQ2mY2hSbLE2vGEgRkerz2e5FYrKvSiV8DKnEykjQyNrgvhJwCF2s2ynqM8U",
  "key29": "2yVmEQy4cFCHfPck3yxNymeWVdCenMahLsXbaoWtyTh7wx4sLKAdAwD3eYcCETo6ybd2N39HtNbzhuxfXKRnRfXa",
  "key30": "5gby5Towv3KEjvXiibfMCsfhGiQhHmn86ktGVJBDk6ssRHdswhpfSvHd37U9JVNPsKaNeT1M1KAATZwcvb12c9Ki",
  "key31": "37Vt2o5nkMaivLByufyTNF8EKoX5SPU9DKGTiZxdzak3DAoqZrjxvRZkSKQVhuvus478EzxYN1BAC2hYumibbUvk",
  "key32": "22NJ1o7A9CrZr8WWUufuCUfRraSHFwkDsh6HTPSi91XXshCMKWFbxLP4CRtpwabjDLvvetX4CxZ8Aswu7jvwNRag",
  "key33": "446XNWxNt91BRWmLZ8YV4ECufn5xKr7DrhfVWMyuTmjna4osQ5sSZvmkmiXDKgtEemgZBKj5HzEmoSoCM8VSBxJz",
  "key34": "4CJF8SczX1ogeYd9AV24usiz76bekwrRvUSoWUP5z3czvNktCueTabYUzcNEN58GNwvuX1cSsGgGxc2SBjQyVcK5"
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
