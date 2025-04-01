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
    "2bzgWjRYm1o4nSCbaPoPi6p7Ckq55StsF8Uiz2NCHnRXGt3uMzCTHPLD8HHajnqc9vi2KV62uf3EcemsPgxNeumD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wTdvUV7aPSC3xyKMcB13D6BXYn4ygrjdJxzKP5aqLswQiYU9P7smkQbKbjiRY2P7YWDwD6i1PtwuEnmwvYam91S",
  "key1": "5JdT4RgneLTariJYnjoeEo2LuhRN9buMFjmgXTxFds6RTFbH7ngdZ7dTQH4jroQw9excJTvSC4eeAAQCyzYqcp5C",
  "key2": "2QK7rnvJfqSpxpoyPSVR9GrKK5Pbi3DuFRkfdRyrX8jNkv61bGaKGFk1t1uk2eLU3aMnC3WWa397wRH9PwEeg7vp",
  "key3": "VC36ut1iUeu76t5a1dubi2pbnREgsaBAnVqbm8SwZcJJfjbLLPYpS2V7c2WG9PVPaQ6cpXL3UBxhfhbgLXXNVXb",
  "key4": "P3R9VE2nPRC22jbemJp84xx8Cbt6kBQpk4oW16C4LrXagTbm8WVfoJbUBH3msoPfmECYonudCpbikqEjHqKcqik",
  "key5": "5DPrWepMkpJsqADngyChpZNbRJ76wTmvExa8zZhYKNSXauwkpRcTnKDi5nrneHa4f47ANUrbRYasvqJWpPRYhU1k",
  "key6": "4xzVQA5ad22G4QoExmDBL23QDapaDVoEfgvaspfphzWxqA4qrrsSdKqnKPGWe37XqUikTmxNMVoYYZzfKAn3Cnfg",
  "key7": "5zy28kLq4oT3RL3aW7qAsXJRaUFXjutYQmSSdVXnSVqnV17qWGvFFmehqspUjeBj2ikGV4zMKdc46uuyk77koQ6M",
  "key8": "3Hx8TEwPhWogDyNU2GNWPd4vwWZNE4qVBaKPAsEymTooHdTMHhBm819iSkAWohUNsezmvei7Pk5DEjob16yP1Uji",
  "key9": "4Fx7hEBJrmCrWLq53NphWeitDFUqhXYA9iMDzvXY4YujGoAGyvxLjErDvEF4nPiKCFRw5hsMoXzm1QgU56PD5Bv3",
  "key10": "4RSqj9q6CxoxVFWeBAPN4BKKEawXzTWuW8uidFTXx7aT39oGmbdhBD9jw4kptL79USDERYPJPzUPFJCRQEZ3NvRA",
  "key11": "2HTRn2nTbVDQYPuDhB1oeBKkQayaisusXLuK8iwY5NP78a1mQbbDBFNQYtNQhcS9BRSheQdBRhiKGsH6GsDiW2CE",
  "key12": "4tenSw8ipzyCqVi6toErdNK8VAdPWgsTkttJvgE8qAiS9sgZdNKV9Y4J63meqvDrWAg6pKbTKa7YipBxE4F5J41h",
  "key13": "3cbrkZxnbFNpAi4qZKDK8L7hA5Ji54DSYiECwpXecqyCpmjjhdFiDnX1ftBsc8p8shKd6WTP7Di3ee6Wg7KSvM3t",
  "key14": "4235ySycrZu61R4XPf6R8xPzV1fg9ZVDeVd7Hod9XUxQekTXZmJzXkYhBWdcmRyGidDw1xop1Yu227BF2GEDygBX",
  "key15": "4MtYvo1xPUvZ6y1p21qiBgESzUH9JDh1tarizgumL3aR9gozQzuqwSqBKGhWJ5WXsMNjmfJBXg9EYeRSXvP19Mv5",
  "key16": "4xWWoeSsqjdhQiDeUfWSBMq4UfyYj2fuCgcPJigc4X749pcAytczNqazxcqefyLLnCw671iygGjVdzDX4uXdd6WD",
  "key17": "3eqUQ9mtZu4McDp7Wg2s1kD3CuJoABBrvnHSckf8orHApp2rjJzTBsdNHrsdMy4vKc5hWtBHDVZ4wmT2hRq2UNuR",
  "key18": "thEPQABsMBiBfzKV1dCc3zW4KfF1NP1sSuzyMzHgUa54i8rcmteo468qhVUXc6DDNMgNryuE9uqm2csZDus4R5S",
  "key19": "61u7XR3rwmFdS4h3gcazFJ2i6t56xFkgiWhBihKx7Ui3wXGvLLpfw2t6EWE3QHV1Z54ZTSZg2mk39DhxHqj3fTv1",
  "key20": "3spVxMjt772zZhnDKVAVwcJceonDGc6fnrcTf9SWf7VRfaiwsCRbUXDhBcyRvZG8gYHdgXeeXXz6AZXaxBuqChbP",
  "key21": "5BcAB7WPopEEaE3LvKfUADPMznrtg1hWfkwiTN3K8eHoyxWips2e8BF25C45ktapoaxdsxoHMhnmzVgf7hwyFwHW",
  "key22": "22ZT3an9Jirh7SoBPfxYx4Eu6mzPYayw272q6DfVn32nmPsrQ81KCmAEBuj6AfGRwep8KdmwBVPZXgYWjcB7KEr4",
  "key23": "5QChDXT8j1evfZc5JHyWszqR8ruk5Uo8gYhUmsUHTusZjF4znAvrcYeeLGVfhdBp3kdM2LfYT4VKGkpayPqFmwhg",
  "key24": "Hj1t2YqeJRcXNv7TDTVmwfFeqxyu2MoWJK8PXs4xGs9aFAMi4jpcVCWXadL9DJinwnvVjzc8dPi3EsjwYJTdM1a",
  "key25": "4fsuA4c7Qboj9pARWCGExAKy42gZiLciPP4qc6ydaP9oo3xbBdKEtiSmtoXyKxc2hJJiz1Menj2pNkutNVUaSvYB",
  "key26": "5RjgEbbH97VyHhR31kGtFFks4v3xDMx7AsPspauzaohKUGxiS6CEYvDWCzPR8vq2fSe6tAEjtoiErRgXbSPXC4zz",
  "key27": "4qMAGCH4hV5XDLTCWmkaGVPfPgvpT21cnDmVaMzxgPxMCkcz87oyHen3idATYD5ELEXahGG6pKmgjRwr3iLKsMjP",
  "key28": "3FkMSofxtxeEBA2s4BVduijmdEYaBJNA2Bc2cZBEPyGTBs7zzqCWHXc3niyPTUFm2kiMuDohxpQwwUREejsaZZuz",
  "key29": "4Q2abcYnh1SMQaiyjdVW1ExM19Lzdks9M4D5g8HDTLdc8souKwvKH4nLUEzyV2xgCTRS2RB8STUNeuWGzP8RZ8Er",
  "key30": "58kYQeaf9Z8Nqg22nCdmgcFRLvXqwrwF8KEMyVHXMRiUxz2jXE5VH5qqHaTxK2xnxdxGexTdQj49wGbTF2kLtESP",
  "key31": "2Bcaur9ryKng33Y8GEHB4K6vQR942WV6p2DsbpxWysjHYpJNRs1kZpGso2RkqVoGN1ZsAhnLu2DxrnZ7RWNiop1r",
  "key32": "52PCp5C78ruApAuSq7dSojiomSkNqWrU5RoBMrcnLEjP1zThxu2EqwisUyyXipxijFY5B5T33fYCVfhbmm8hZbGw",
  "key33": "2V3q2tJ2cR5vR8h8hDHJP7GB7wZWz8NGEY6FdiK5EPKwTqKeoC9XHtm6K61uFE9giGVEAP52FvxptoVNzKf1pVDH",
  "key34": "3uFm8oYT5UCQCrg68vUEP7HFTohmtSw9rY1gGjw7gf9BoGbvLvwXVebYtXvbZ2Dar1qBJsnkcS6izvVDKpLC8eiL",
  "key35": "3vfFeHWx1a1qoH25mUUNtc8WTQ32hWvRHFDadcptoSvSDRb3C765frNKjbjAmV6K7yMGZDqkiw9tCrWMgdqqZRrZ",
  "key36": "DkrCBsqPX2kzfYCC5Y4VoeDYbpzjVyesm5HsJ6X4EyqBhu417ap2mwSoVaep5Td2kgKVboWErR7FQLjkuYdg3CG",
  "key37": "4ByoEgZ5G9WVhRtirdjFZpPpQNdnzXq9QPNg1TsJhnqGbap13XFBvHThKFXPqFeYHwvChpB3Tha7rqinKYSoodjt",
  "key38": "4x8baNT34FPbqPswCZgRn8M2ByPYeShZAdm3VvzojJz4iPAvgPtJbm9r39BnaEHv84Z4hfztdp2eFU8Ro1eZ5mnk"
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
