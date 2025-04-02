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
    "xvPhzWkyfh6i9QCN7CJzhWzyUnLCRfsVttB4nMpeGxgkvJHnHmNXdhDR8CsDbawQNLWNjZnaXm7wveUWtq5YESw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9JEx7JqntYQVkNSYAw9veqDykUQDiSidSRp6XopYzVrcRH5AUpfi3sLbf1StZr94VUTM9sVDJJovYvnRtyr8Vh8",
  "key1": "417zA86pjHGYFyxtBjB6KGi58At5UPFqWT62bg8DBQk9JUf2WkECVfMR22NGWWJ212EgjcThpF7MiN3EhZQaEufr",
  "key2": "26NUbxEjBtHNdoWc7bri1Yt5oR9QwtHkKGDn3wsCeNkFT2hj2a91EpTb9GvoS7kuxDmMj3j5ySdva8VHFvAPyb41",
  "key3": "27QwKehxty1bZRg3SWqLjv1TuTA9m5Ase3b2mRqaiAVsxgR2VQ6UfJw6BZHLhuUNdspwbTMM4g9dWxuzCxqPzpak",
  "key4": "MYw9H5EKCGUUosa6vZhXs3NVTUTwcv6GGUJuK6qSyygkhax8bDgbjCrq6Qm1rA8EQVCpirhj9gMpkasnxramLkH",
  "key5": "58L1XRFtdGnfKjxYzgTprJdmw2CP7rjzmjsqABRNUmeakMKf1ckhomaioRicYsCvKRD1AXY7XBa5mdjpBvccYkXz",
  "key6": "dV69SGdmaR1T6Tw1kUmXLEZ7Aw36Ba3AebNTSAGbezC8VGKDQtQ8WNWWtW4YdYbZrJix9xMk29foMoayyxbJVhd",
  "key7": "3pbUVgkM9nmYU52xu1XPMx4MeLB2ysXzcjAkF3XTogm3XcnTL7kkPQrFnHu3ZVi61z8ighJLpNDTE8TirSt6dKkj",
  "key8": "65kvJ7s2EeBNC1MiA48aB2Cep9q2TXw9NmdvYZ1sXMETpv9qxmpNt2vZKmUBq4gsWKZbUVfJm9jAcyum56m3nxXX",
  "key9": "64nDxCg29mmUMPjaKyf1ZHL95Z1BMSNPbdQVeKPJW7HJ3g8tNDdmiZbggiLREmMbBSqDKN62wEo7fBjR5UbbbtNj",
  "key10": "E5sX73zU3gvuRkKp4W8HoyACEiSNhLX1ZRV34hN1CihXxMu95kchpDHM21jG7jVdXvmDd138uVFxbNEJPcM5pN8",
  "key11": "4RjuGaogisxK2pEmknEQBCL8a9CWWdqFejCr9DmFny7RTWtzHdbqpqJcYCuhcSHJPtagBSfha3zT2t3uJ5w8avLG",
  "key12": "4VwjNVHPSrjnqUYd69PzuLtDjo8PND87g3awKf5c6GEPAxqVcvMiJrX2T97Yeg8yrduPCmmLEBJo4JtKdDHzt1ZV",
  "key13": "3k73hfJojnUGnf1RBo4qumfU5DpMT56BYfoadbwMs7GqCvJC4Nfjtqz856PnXtsx67yYBWyh5ejhrnZpVqSLKKya",
  "key14": "3Yh5KND6dewTDqBVAo1fvMDNJGHuZeDNmZzD5YLLm54CUdhrX1p4iz31KGJuDC8FQTsYgonjSceiE1KQxR4MJHQh",
  "key15": "3TzdZLPzFcMVKryFk8LjhFb35qUDJBVYgnoKEEcHcYPEFJmdSr6xpXLsCCr2ogA1Dfi8P94eAsxYU5ZwjyjnFuAn",
  "key16": "585QZELecWJW3QXo9YgYYb1kUFb4C6RTxdDeeDE1Go2mWjZ8HGLxGu5nzRxL7fHAWkByKxGLqSGfA5ReqWeZJruF",
  "key17": "5rdVUMoaCx2iZYpk4bP8NoHHdC5rNqhGJQcDFSDTs1hXazkLm5CzfoSRE1AM3FyE6xyd4ScEiCGdieVaW8XGaWB7",
  "key18": "3SduKqPXk3Qc8hquV3CdQUcZTSPTEjCGDngd5mL8UpnLsXrc1zsx9cb8qFkPK2MQE1kQZKF2bJyoRNDmGiLuU9LP",
  "key19": "4cpUQLoxsJZaKyJKDWEEnds3st9uVKfo9vY32hkkEJMFCid7qzLBNnZcBthYGewEizhmLG3GynzLiwjXNzqQvJPD",
  "key20": "3PLr1DyeADfh8bv2N8MBbfb6dpFkqjCMFR5WkJqL5pu88o3kBsrfYEpqkUK8A7LmFPzkq6DUz2ZP2QrgYLTeJCjh",
  "key21": "4EeShDxpAHvWJxd8uuxHp5dvRrQjWXVPDEwEjW3Zahfvy3aCAfjRp9pjgkHr7XCbeTFFSFxrZUUwMVZUJZ1w4y4n",
  "key22": "kZzJhnKLrwSjL5LhntBJ57teUu1hTdYPziLgFseVcNoACbDSE9JvecW82eS3etYfrky3Kdq7wLpeRxjPxrrBkdp",
  "key23": "315ZhBS9ocXyzabgda8o2WZZ61wFXUfRmUZiEQnp3W3RQymCKp4EYT8ik2fED5Vt5LFSUxxq5MuFdQUmwC96WVmm",
  "key24": "3vSepvXPzRjR6wpwiLfaF9e94fuaQjWy2EMjfAUYeUFdrCnyZhZWeQ5NFNU26ZBbPxZSM3wymvHzRn2K7TmvtGea",
  "key25": "z5AJjVuakhZX91HDSCDnJYRo9kcHZoH2bEBJFXPWAeS2LzoeaQVi2vb9rPPrCierSXAjnKozZqBujhx7TYZDuae",
  "key26": "7PiyLxhj3kFVVubpJdo3VDqHodt1Qu5ju7Ansg8zKAU83HhWiohf4LxMu6eUmtKpXVorjfJq5ff2mgwE4dFcTx6",
  "key27": "49dDLtt437yDmwwLWZE1cCwx3atzSx5bpgzAJk3Vrz2L2vpwVKajKRAMq4sXFge3CQfZGUKdJkKszTd7pVVtH9E3",
  "key28": "42RaQUBpXr8qGakjPkUSDhmohnGnc6jn2EJ97u8K2N1bFbhFa14Th18LREyydcUDa1eqgDLFsdU31mi45VZJTiP",
  "key29": "3iVkg4EZu1WQc62qf66UhT8HoXor6FehfKj9LjnwUr7E9s2JygbppePTB6VunFzsbcLZfZJLnGLdmpL39NvWf2st",
  "key30": "3F4vV9vdnyyAWqF4BBBZhn6yeStX6Z3Wg2B36TBqL18yNWTs2v7ZeLdCY2ncxFbMQ5ibdBXaWW9gGrJdfNa55y3b",
  "key31": "4oBX61cDX7FtjVYGtWJhvr5hUcWT5t54E1D6tbRu9qJni6xiM1Vtz3v9dqNM6hChDvHkUWd7MdjzF25mCacRTuNb",
  "key32": "4KBVenxXjxZKhCxa1pbYQ1y6udprRFUZqagNU3zE1mcFeHp3VhrR4u2pGx7MG1osTAXoem2BcHT29UhvhvJDAbxj",
  "key33": "53xiMhKFBXYyK7EnwqC81gbSTtHu6xYQtuJ2hoJnHf9dm9gScnF8Q44U9oom9FGMiLE7jbNY3XZPvwWPUc4z13ki",
  "key34": "J3rhZKTNDzVfkSHApFhs3HNBfmo6rN8k3XP3WGeMC6hAaLPe6wqXxhsvwFdN3UzoKxXTHzxGnSDHPtqDPyb4FWu",
  "key35": "62MoQvyk382oTiFwutfg69PX4DvRRtZduKbMCyfa7UDfEoCNQJxT3PABvN5tFLgJkqTG7hCSdf86r7wFjwuSdsMx",
  "key36": "26NRBgeccJFufYDUezBJWqBj35RrteukHq7Td4Wf3pKBSTbbggBHM43ifqGdwkQVGfutB8Sm1A2HfDpiwEgHNG12",
  "key37": "bKRiuStfZJcTQKbepL94hjaArnVJ78T4kowcXkmBS2gE1hu73Q6p6m96S3GuuKSSftBa4zCApPKywCGEZU4uUgM",
  "key38": "4qqwTVSAf4o8WFE8HjLM69AhUgbb1paQZ6h3AL6b9h1BmCBEo6KmvQrVpbwAyk4dDuwB1F9VKRNbbLcpZRMvPZjF"
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
