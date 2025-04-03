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
    "3D4uwo6FD91fLwxKmUKa47vcaKw42cFNa1KFHmAaizsRaFwpPE7cH1SaJPY7Xen7rDcaBWmrHDU2k6sxpfPHkH4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ProEyWtXipRCJ5B95yTZk2H5EGVD9k18Q6QuFRTeXv8A2N7R4u2mMou12UTDmNXiCcs9u6fjPGFopcRKescEbK",
  "key1": "5D1kLnBhNZNccnyiZYj9QNoxLVyrgT6tx6VCSqhjs7nMQbttEKPnnT1aprdDxmwvHzk2n4aWXs4st4HWfW8e2j5f",
  "key2": "dGtXg9MocJPNtnPEFRngXzbNQcMiFFziscgXBvbgDfvmh2iLQocaFaDBaNQeBDZauGEs4cJ1DSfmUfvxWKDopxL",
  "key3": "5n12dMZLHziugLwHpYcetY8nB7wWnUzXDx7X3yu15pXhGMbG49kvTeDuT4KjZ3RnqkAmfWGGVVm47zZqDrepSGd3",
  "key4": "5eHXUbMD2iEgAkEhYKV4cqsCrpUXjZSJSPvUHkMUa5s4iDd8tk7VCnjyb6F6RR4dNhQatgSBM9rbato6Gv2L9zai",
  "key5": "4Wk1gGqCPGNwCqy31pri9dC5tH3fD2PkXG8o5rBbGHno6teXmEES6BNsFixxduswK1mfAPJLyVAZmLHixr3wHvYa",
  "key6": "4dyFUDpLrW9tQ5TZF4ahm5S6Mjru37jsGZj1hxGGEtbkbphQxwxvX155jWqQdzu7JmXsunXhJQZynPoThFpuNzy5",
  "key7": "3sjBtGLFDxN7sGuz2P3muyYrV1kTNZivA3dq62tV3eTSRfcNAiKUwg6u4pfn49fgr54a5nworytEizCFLj3nfqrh",
  "key8": "j35h1W7F3V8iLJFo3KRsu4oHMutNMuW3rheUUfisQysJsdMaLeoWGyeWNqtDJVMtGHGQWcobjxu6bN6kYLpeNdF",
  "key9": "7CTHXkMsB6aEkLDXSF5WBTK1Ygf2qw3wfFgCzGHwAiZqV8RrwRBw8zX1HUqnFArQBGxZUKXBNu36Y7W7g8zdmxa",
  "key10": "4uravnHgb6wtfvEa73NqUPMR3Ui57VMVURERV3C3j3seFnK3LYiboD929KwKbdQgGgbCZQNg5CyWU3urLmLMQUAo",
  "key11": "55CfWPQgMrRC2kYnSwddJHGt17FgN3XakAWiohgfFNqniXTtHEK1Fsi3gidK7GZuhi41BuzX5axvN5Yu94hosvW5",
  "key12": "2kpuAf8SrBK6uL6p8oq7nxUQRDxag3FJxRAi4EXD5mi1t2mBAVNPFyroFiUGBE2VNvmF7HgUE7Q8ev85ETxbhxfu",
  "key13": "4HN21UXBGqLcMdtNUweeyxkVyTxf2KdGfdWBwzKAKBdXebZEm5H4EemstTKeqBYqbNwAcCAdvjPDN3BnHJCFG8Di",
  "key14": "2VhhyRNNJtrBW2A42CAvwFTkES5xFEq8px79mCF3cw7KYzEtSyc15D5681cmq5dE7kAB6QVcSTrxcUKdUFH3qyfN",
  "key15": "oUfjhfarmm5tC6SBdLvVFaLngLZ86Ha77GDeEkDYRU8aPM3dWFD9NEpj7RKVT81UR9oRJsXSsGeWh1KhCF1YEPw",
  "key16": "411CqpBfy3kJeZdhNKR7wbVzkMXZPK3aMN4kYVWoZPKLBsZ8pqhq8quD5AnZhMDejRtcmsucTpDZJv7FGFWRUZnE",
  "key17": "3wpXvEozoFuX3Ud2ZzXGJakDsx8h1CnaaRX2gTsL2zmEiutTESev7gYhT3rCwzSSTqXE9y2hPfYjdbjFpZTpJrRQ",
  "key18": "5F2mCPQn7EsoLTC8s8eP3BNFW2xACGP7scjizk79BsMgjjncZh4K2X36R1TWHfJSkycSkVS7p76rJSjhW2vdTqeM",
  "key19": "3eztE3yU8hbT2SCUSaBocX2KGhfwd1dPk2Gqj5MFFHDNqDYzR3GYC5HJke38byxXpHQXJwmeBardiCLarUXqctnx",
  "key20": "2PZrC481ps4YND1PkdCGgaFts2i35oGqraKRo1a9966oBhbzB9ooWX6XtYEuEegkiNjBT1cWgBWjPWrSVkqca15i",
  "key21": "3Hsaq1SAPLue1MkKurzX94VEDsmywFoechjCQxMXdeBvZRG7PSCzcUhYbrqLPCWzMfetik24VvrwQAbKF3pbG51t",
  "key22": "2MvEi8wqTuUjWgXJwJKXwUrKfDsa2PZYFsBQEuszKRh9CCSb4NVCLJCgnnTY5K72VFqZRNJTTHHGPAV8iCpFQSij",
  "key23": "3gNZh4t3pcRmr6qnXTtqmcvrQFVtYgFBJBgKJDL57eiSSUpEQDAJsdFwWRH2xDRcVM6utEoPbkk9YY9Wq18dJ3HL",
  "key24": "4rYp83sH3zwAnQdSAhcQhsN6g17RGLsRJL7jdihT57Vgi8wMVd9yJMaGyUmFgDmSrT7fTyYKn1ytioHuXmyhhVnj",
  "key25": "63xGrPGKCfSQaGNuRBTVBiMY3kSRLrbuiugcdFNA95UdYboEHSjMD5p999GJ33x279zh1LTPqu1jRtWRqoks7W3V",
  "key26": "4fTmQrvsUCAqty4xhjDxGH1asm4WuTMGBHJtyzuG9JmYcLjPt4dtx4vUDkc18Luo6L5pXKnRWbNHTfeesDhULtSd",
  "key27": "3xM9qxuuDPnbbYQCMGQNKdxQghGehMx3Dnu1L7bkKYwE9CaaeWbB6YufPsAVa3CfWuYNvsCC15tXUUnUQHDZwDi9",
  "key28": "oioxzPWpBXqgMoNHAVA2dzMtx5VhHHyF2rR3BbUdMx11a6JzXRFjYVyrY1eQjz8Xsp19U4P34YTt11fNPhFiXod",
  "key29": "umDq7NyCyMZUJz8AaKAz2JrDLMzRJM1wDmDeML2Hj6sgdYszatvwNeF21xnWmYpDZnqAhXvKJRf1RJAoT6CqMDW",
  "key30": "5mxsu4F74jgNw4f8xen6kiHz9MGM86hHRDonGbpuRnY7mJFi791tiLV2w1qg8jPkVmr7U4zBBrsRKqYd4LcPQ4cQ",
  "key31": "2fe6QEb5hYVDMFfArDqvnLGmdq6DKXW53LyLBC16qUe5EQ5sxngNVQRR16PFsTeZw1PKhoGrrJcbVRmV5SF8c3m6",
  "key32": "54QvTERn333QXDDq3eqF55mt58SEpwiNYHKW1fujq9DqEVtFU5u3a3NPFx5pjwYa7uojpJP3SmE4GhR3VXUQjmXD",
  "key33": "27thuLdkqesqSQpGnddUgBkNM5xifryr4TqXqsF2m7b3fEu7EiU4ngMw1i66UeCaHY4qEL14TafPoaZ6TrkYaAZu",
  "key34": "44SsrmhBE5s271nzw1eC4Dk4XrcqWTSAUmCgkVqS789n5irE7A6WmXn2iJKP8AZH9yXz6R9FFMoDpBNZBXyL3Buz",
  "key35": "5Yf3AxezyFDAgmBsRPSrLghHRFsgW3gMr5NMyg1sqJjrPEzw72Nzi2Nde3sSfQHsGdQPZh1UQwPc14S7e2tDSRaF",
  "key36": "z5pEHCPVuFTcF49xZctgkrMaNQHzCUH3VHDWnrCQmHvpD3ika86g6K9YA6y4yviacyEg4n9dpdTuGqHgW5Xzr9h",
  "key37": "42VuscLSP4kJfBjUk1Wj43vkA2vkVsESMVgsDozySEiTtnP8dzFg4MtUGrWggaZFY4cNXAa7t35d7o6oyzXUi8JT",
  "key38": "4rvd66fyW3S3GUKzGcN1FtdePdGcn7oQJC4aZ3XqTkBfNYcLGAUaRXpgzCZhRsGnfYpaEUqnaeDjjqFAoe1Cxguk",
  "key39": "2umcaBsx359DyhaoHP7CCeEKnGwEYq3dosv1GRLiNBM71twj6m6cdDuM7vo6kQjeaL52XQwQyvcALFDQEfG4MCSM",
  "key40": "5LNxQnKQXDyzFiLeHZL6wLMCocPn8wAJRHvbXHziq3PBhNRG3x9xkmat5x1bqnmnxEpQMWb7yg1HBhQaN2cAyPpd",
  "key41": "3UKpuUZXEzkPpXvAVq47fz3DhxZ8HTyxr5ZDJetKSKPstmrcUENVfhQw3V5twHnazf4Gr7F62861g2Ycefv9ow7T",
  "key42": "nhg58L8ZLhNkrWid1YZzXwEjnW85ma1bwHKKRLa9oWd56CSZnpLTtGUw4jTdiCjsHkbh9ZjxLzJojvSTqBSFTjh",
  "key43": "tpZ41geD62DA5ShdLAtfHdVGhkhBeim37GBGhSQEcViY5mu6iZDq7BX9qiiuWdnSCVhc9irqrGSpsutm8PqCLP2"
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
