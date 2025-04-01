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
    "hbEyqUCnVXXUt3mQ8WkwzFvtPh7ukowCiio7hMJ7BHrUVovFzBqwZwGUHna1MhyzXyG7FqYqHybrxkjEMoPZ8wN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5owQCn1zvUZzao49MQH66UYPRqzaRftVjbCAkBEMcFg1zd9jcPSiB6X3giDo9uAvDNuxEDtpKWzLt799CiPyry4",
  "key1": "7bAexEa7hiuYCTKZTo9GFhERTQtiruz8db72hLAuMdgnyhfBJ1iWKhVTWP1dMANrjNjyeGz6ENHFvxxgmVCPUNo",
  "key2": "2m8gPmRNR7te1DZth3Ee8NvX8scxaAXpCdDaKnh7Spc3biEnxugF4D7rVZaDLX9SUohNnz1C8UMysJftbE62m7gn",
  "key3": "xBRqNNY2o1eNdqdvWYY3AJsSut3W8d8rAxfMQua5omnjtmmkWqxVbghLKPLcYa16wFFPzk1BtmpepPwpsQHZN4L",
  "key4": "5z5fNScjnmZWAUG9bqXMKLfR6rUTUqhfE8ydWmQMih21vCqget6zWBAjLr4HByTUY5nQP8byXKqawrVaXYnqVjHJ",
  "key5": "2aFXzDG9G8ZT3CRqYyBs7hovnXeSH24FQBYUbJqa3YTxX6DNrQxTfMnSsETFgJdPpPNxE3nJiJX8ijthxgZE6Zat",
  "key6": "5x59oxgEHYybrkKHcDvnMArXgAe8YP7dYdP22m6ZA95yMwV4AF24whRkNbu9YyT7sjpxEG2uoMncaWnH4GRoB2Rb",
  "key7": "KLbXaTsFBnJH57FoZsCfCCuq58Zu82e5Uvw8fc2JtWMYVecXRMBdVhmftTyRP4eqe9A3JnFxD5LxhDMEeTnGm21",
  "key8": "4D9EwiADTTWJXFaj8PvC3srCbqsw2UVybrXGfw7ckYvihEN3EMGTPGUHHpz8RsCqaCiFfgXqNgym6JVmmCJtejWf",
  "key9": "66ArWwRSAsUjMBX9xWWzWDyDeg9Bs85PZNUrddMRe39NZency2hdPMDPA9sUJPBdv9y7pQbAcSeCTgDHsWHvqn2p",
  "key10": "cR5i9DSb8HAiX8kT8TAMFiEANdczydf8FH8MqBTcspBmMtG7jQTcFCtR3p41nSRuwrj8ZaCsXY4YSf4NJnMwCxJ",
  "key11": "2pVhwSSJjDoXcmfP4HDej94rqVcEU731VfkXPMJEo5CqrL9Ncf1SL1Z2zZ1hzzrCJM5qcpzAx7h8evg58JJ5fzd7",
  "key12": "3Q4byfmesgB7NBT3rTaHKLpBf3incDVYXxpwfJ3kqrsSyGSFks88GfFC5FuHfwcij12gMY1D9e5qHVRqEGaRXqEB",
  "key13": "KyBY5NG63uHKaRFWqdcJ69T41nnm9PBdEDxgCSDro32MpcDzFbee7yJmg8nSx7QSWrBpsj3bjiwsmMgAcwq6L7g",
  "key14": "2NfVkZYQYSfHhjisPMBkuuEJm4fA59mm55EqzkixPdiPTiRJE3wduT73zxA3uKUZ8U43okSynDfwxj4M46h5EvPz",
  "key15": "5dPz5JNyYiHDkzXSVcFshTh8DgcuC9z868qyxWF63jHPW2qBMrzGGnmRwD2igdenS9vbpoX7b7gXEMqJYX21b3Tb",
  "key16": "4xix7veprVue914RtoFatMWsYCjzWWttfQfaMcL73GmTaQewztCRs73u3EzoApjWCmiUKTJq6fkZvMkjyTmsEx4Y",
  "key17": "5DJrTDJHAbddsiWBDGsh9EPyyFZB29JSScbLgSGPhxU3ExbnnFpcPvyYgr7db63dCDrxV33qxpxPxeDAXRPTPRHu",
  "key18": "2w6FwAdNYiMuPQodQUEqjEEwiLJwJ1bVF7RMkLcueT5DVzAoQaTf3nMWpNoftEZJibbgQKnbwfAYKfgGN7q6F5Pu",
  "key19": "euNA8GfmhFmqci5yS2a4XfWVAQ9nX7aYHZZJgkNGKhJh6kwwVfPbhu7j4THZm5Zh4tmbCAQo59wgGnFQkkhfV16",
  "key20": "4KPpEJoEKN57Ct7BARu65vetY8rZqA35XVLt8RqPRYYEC3cCUstAbAFTHdu1cmPE8TEBfhpbGRwmcxRwY8bx1czJ",
  "key21": "48jXJBQ3w4tZpttYjb8Ku1DSAQYGa9remDXEsNCSzLqdL4zMG7CDt5tETizH8KzSCYziGhUQYffsEpSkMgybTCgP",
  "key22": "5FuPN8hasBirAQMWM9RRWBgbJkFzsznk6djXakXZXNk3udNS3hhssZkaXAFy3myyMTXAxXXDsZDX8dycKs86g7GK",
  "key23": "DLTGETdbf93iUrwPSDXM46eEXUyC57YQw8cfMe3vYHFpRYnF6YRtg1Jojw26u7ux8zhdMWMkpP6HFseFPfb1D3g",
  "key24": "3qMmsx4LoydSMd7Ex9SZ99QtXcdQF6dVKukzRn4xR6xsgppLMuqVZuDk6RTK1Atxe5Y89ZUv7cKSPRnQTz2pdjSy",
  "key25": "3cCt7p4Vh6PfH86Gz87eQeKXa4mCYcqzM6ucf9bFYC3aFXXKXuTF3pxiWrPpF52rjvNbm5rW18ePZiNFbxYt9ndL",
  "key26": "5VbLg9m4DBDcq67cPTkVcjKL5pCgMAhByp6ywTb1uWyXJh4qGXD5aTaszDmFetTDmH8dtZgcredWwToTaEVNgy2U",
  "key27": "5UhEcUkYoeqNWXUZpKp7cBG3dVzv8861JAvBobjrWQzDaH1V7QRBR1vwUhbU5jsNDDQtLQ3bFgWduDz8WwTFCe9",
  "key28": "JkGEWRPVC5YtJKizfakovuLDQvohE4Covd7RRiU33x7HZBifX9e2HUoTKVex8mSXKUPp7wTHuG57DKBQ7XtumZk",
  "key29": "32F8FN45my5kRqFqiUtf2WdYyeX9YKeuf9g4eb77deTUrmQ5qtbnHAprY37un6AEBA3gb7hR5EeZD8nG7UQNe8zo",
  "key30": "4pRhH1NbkbJzzANLokSEY5XHSUgVG9EzuF4WDVH1iVyat1NuQGaR3CYhTbg63YGYbyGVCc1WidgMGR8y6xqV67tm",
  "key31": "3kc5sjj1NAkcJZ7V7nysAASrbeoRonwr8uGCG3DLtmnYQ3eJiRxkWUkNTJh8RT7umkjW3wG2vZYhAEFvTBUmKiSx",
  "key32": "4w3ep49E9CjQdkA5EA8urDUBb4AiWxNRDv6WdXZXuKXv3GjUTNUPVAFTwidNqM1k9GVyAxXZRa4GtMAYCD331UL4",
  "key33": "AZs5zWCB3NWiGLbBSa6Fm5PiDXxMJcoVH5rVYGGrfgu1BQ5QKN1WdDK6VWq53msnLCiB29hTGJCFRhFfgnuukVv",
  "key34": "5k83SzCVmuJW4dpxTFS5gwWSqDdCEf3HeoWcmHKwnZC4hJkz8oESsxfPXfQzztMsbE13Z2noVPJR3RWKFMrmBAgq",
  "key35": "Fiv8K59y7ADvt2Hw4TyfGXvc48Tpdjk8z7yq9fZEBrcizTCzXvGrn85F2uaxVVw7qQPgZxRBHPNYzN7Yk7i9DA7",
  "key36": "2XTFk7PuUmErHHhWSqjVrDvWhzceWdSbQQ5LPWboxr7eMnn5JUvVKtmytAK3YwwAS4fsKfMTmgTt7vqeHJzYjDjK",
  "key37": "5khjfPiUciyoDGj7P4ofVJb48qnBArRUTNdhCsZEALigaDRhYNn5Q7nZUsxSwGa4FWBEmQQmnLLJZsMdkuRrCGqX",
  "key38": "67Qnpk6b6hwfYPCqpgeXaiR6AYRvECXda1ZjJ6hdQgZoZB7yYMLHUkYjm93KbhwEsoaeH7He1ytX8su6GfLKKKzm",
  "key39": "5ePFKc3cu1DCVFWvxfYH654rxyxAhkWfadN5GrgfSZ937tzNSwP9Un4Usrh3DocVwvVZT6J8HCNBSZVicZPzi9c1",
  "key40": "4QdjnXzWBX56E16YjZRLAaBFawZu2mj6p3CMk6BZgSnqTwHLmK5jYFSS8CiWCQSf6EP8gX5Cpt5iLq2VMmYJGyN1",
  "key41": "44R6rwTQoeGf6HoLJ6wgEvMxmFeshDn3YcEHm5pxp2Q6GdLSF1duTaMQUTfVQCuauCbE6t67UzkCRJS15XqNFfLU",
  "key42": "3Hz9vygVW1bXJmtPtzvEXUBdWVsv113Z1hcaQ87i2u1fYVgrv42MHCe8ARf9yqm9js95tQpNEfu8KEcEZ9yjqVVU",
  "key43": "3wkw4rkhLpzbqvGMQ76gCtJVUS7N2REtjFnfJoECxonfmqtnfds3ZeHbyt4bjjx1B25iausQP9F186udossRRTj7",
  "key44": "4g5vKKZNGop1SLFHV17SzFbfwsCWe2WUHBhyFkNUetWr8neurbSfhH2FP6N2QYgNKimKqm3hj3vEZoB2cBgBpq4F",
  "key45": "4SmdASefLEvAG1vMgpDRpR7QR3K6PiTJE1vv7YcAerDNtEPdHRJP9WnnfcjEt3HVNR52VVA2zesixvsZknxu31Z5",
  "key46": "46fMavtEcsuCY9JLjA8ypo5peH3rU4wKHqSoGeH4F2HcL8gPH3egAAZ9kjCj2JFQYQvSck4VkzFedyhBS1RMEs9N"
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
