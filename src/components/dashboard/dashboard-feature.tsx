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
    "5gH7ubNm4V8eiqQEeJaNdgbiCUjoYdLv5qgEyugcZz774vEHtR62xRnBvc7vMq2hMoYbeooZ52Jh3urqSKmZMje7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51KHQhuNYN3S3oYMh8Y15Ktq2BASuciWbwg5cviDoqzfjozf392GNfq2FvNBfDBdCXiLSAfgJPXpBzSesvLTBjJf",
  "key1": "35NMDDpk23WcsQJQEgkurDWc7LDMNMRn5WNvaFkrpMU6F28wcbbzLhFYRMiWdDSEgzc1ZPGYkZjRBP6VC6D5WqBw",
  "key2": "3g1Mn3rn6nXeH644KB8gQGAbQK9Fti3vC2JUFrJHWvvKktA4VZSGnbxBHy4WVdrjHhTpzKg1hTq48k2dcXgdtYsg",
  "key3": "3e5c29VnHPPrHUuuuM3SZ1X1Se6fUxdngq8SV9UJ6Lt3Pr8yAXCzGsH4V69vWynC118TRP4RneESxq5VRGcKQK5c",
  "key4": "3j3R9y9vrJN3gdZgZyLY4HyzmTtzpakXdeKcMZaRWohK713AwaJD4x8vASM6EV7hGB3pD3tKZvEszNUgoP3vZ6SR",
  "key5": "2RFRrWtkcR7uj7mn4yEm5Ycd1H1nQy4mQwSaJArM274kN2cFCy1Nm9kyT6tMZ4xRLzaBLXy7nQXiE6wdT4YuNL34",
  "key6": "fkuvtRFuNpdXoW8v98Q6yu4R2hD3vqg88fZ9jspy2AnamExxER1sC9BpfTsYkTNaf6kLt8K7frYDf6cxsA9mUki",
  "key7": "3icGFD8qmBKsb7RAvYMcuMZ4TCCAxWdCFcvBf3qX4gbooMYHDHq5oJJVWwWW3E4sa3vxMyfPFQ1PNEVXNcTfHuXb",
  "key8": "2RQRbuiPJHtdC7hsDk9Vf9wNFYihvHJuoDrxkRPX4BSfNwBg5wZEqndrUE6hp1VKniZkP9MXfgFYSQ4p8ABtWqYB",
  "key9": "4vJ2P25Eg8DFNqZoR1SJgwMCTjuW8Zv5unB4tpQuTEPnLdtv3x4w4GeV5Tzt7oEkujSRLTetCKpMUw2kokGZqmQ7",
  "key10": "2pTiWpVSj1jqf2XBuF7g5vo8QKdvKP4aaARUaB41eqVvZbQvmhqJVtqsTUkJngSBRF8m25AbaVAJnS7dpZComHXL",
  "key11": "5PCnaYKiwvmvxTiokgjWZiC1vhRQ4eRNrHVKnQf2FFsJhj56VULqmmTBVdGDrnJahbWMLr6LjuFnYaaP1yvob5tZ",
  "key12": "htPDMf2RVhhjGpfBvnW3rLsiZeuvhS7PQNddrc4siTRAJxcU8LLVtL1FYvGgEBDraq7VAz1VjPwU7CVVqdpmwMd",
  "key13": "2ED79fdBbsLro4XCFZL8C1shcYJbzbFRZvoZWugxzHAj7yqUoxAHbRQGaQ7aNGNDZgoomE96J65Dd7PhJmKKq71N",
  "key14": "3TRkwgNFuNAtKGFrwJz2tkAn8L7cKYFEYwhQ7iyxhMhZo3x8K9TLtj2x2KMFkfqUwA3RYCYnYBg8z2uBBgEfiwVL",
  "key15": "26pPbvZd5axXqsSQc7LFvoMsvignhtE3vqomTpFcJUwZV5Jd4uGrn2AgNLrmr4yT5gewZhGF8bRb3WbC6TBBwwpt",
  "key16": "5ud94591995XRW6ftRiAN9fq6RDRLUqnsxsTisA6FbxM3DrMyNe963KQokdUGTk1sdANWE7nw6BCCqrRN9mKMyFu",
  "key17": "2VJnSvn8XuBagBSGfKSa8jvEWAbfQEK178aLonhiA3iFDqExt4yRiL3M4BFNVKRCfKwueir5T5BNnVgiUstgTLdU",
  "key18": "4n1RA97FWGjqe62hQLhbTGo2xWHMS7MLJmhmjo9vDVkYAmjxRRxbQiyUpWxaxXBhL9DUTwvd6gXqVVr9ptdrupow",
  "key19": "3qjMsCtG3QzC3PJF6dp9dNXqTLvhnVbPxE3LQcQtH9GVWAfj25VHRoFdNRhkfxJxQJTAygzgqYqZGsECKnnyp1vg",
  "key20": "5f2gznR8ajLj78qeaFGewYhJyQX2Qo2kd5A1En8x8Jfhg4yFcdb1rJZzXfjmk4EH4LBDcKiMVMYAgCnxTRzpBDvu",
  "key21": "5BHvtKd1jaCWB5GPXDwdYDGkoQdaYEwgByTKA1yv9UQzMabLhbBihaH8YR2P9TFAs8bFAqMGkvzLPpuHJo5gELe5",
  "key22": "WMDrsAvarD77wUEtrJq9EmSkVN5sBqE7VKssUmWdERq4E1sc2iiLMXybfnSM7dJyLRXhtKpKr7L2C4AzhRyhCrR",
  "key23": "4PdNe6J8PovmRXVi1yw5mhzA56HetShNAQJgcukyq5JxEai5ypZ37wXqPLo7XfMexBiN95UN5D7bBwbU1Syiom1P",
  "key24": "56r8yAobV2Cshueoe1has9PNCpLmb1ysfRzaWCNv1svCL2tEoEknozcfKwsTXZKtvKLt23CtuC3SezGgmkfjeLyS",
  "key25": "4dpKPUAM15E9Z9NrZ8p8gh2qDtHTLEfb9hrmZU6CuV89utAy3V7qftoxwxBH8oAieA1cTBPWLvLuhN1xGowZSYs3",
  "key26": "5Mg6VuyEBrfmURVJE6kx8NUEq9vMWQ1APD9MLFJvf54hcbeCB3KCMLGegPrHM9AyE5V7oR4mD8ucvMqHX9Zhcn4G",
  "key27": "2b8FYGqPP7bkSyTBhjwXscZhrPWEr4piWCBAHnUCmsN3645QgCEA2hzw65BxPtorHRy6m1GEzCH9vHXEMkLxUBCZ",
  "key28": "2azVE88Qqgs3QBTjK7BgMN5uwXt3VwbiVJYN19MqpqWp81CzrBMJfKxjikCvsQuBcbLRzTDP3tgW1vanEhaMoFCF",
  "key29": "557bY3n6Enx8N8BC4XgZoc347HEebK534c7mFZJX3WqVb8vRwfhWngxPtHwVKXKGjqRrzQrUt8DzuwVXPSLf1mMj",
  "key30": "4Toe9no3idczAQA44V6vsspYKmAtjmbzguiSdXSx6pWiGfXAt7GX8skN5rvGsei5h5xarfBhPRey2HvCG7RyUyqV",
  "key31": "41WLKmrPLJTEiegxYjUeJh9a8FKyNiHGB3zoRYihZApQsM9maGGz6aUgCE2w9HYkya772NLMcrxd5J5wudqkX4fU",
  "key32": "45RyWiBWTVwTAH2AWhh2cB2ReDQteXxC4xgjWS2tN1Q4pPgfhPRFqJ3V4RuZ2xZjAotmJa7xvPMXxHC7urbQR6Zb",
  "key33": "4YqqN9rHh5EFDiz2BD9Yhh4iX2simJmz2UASBxWzaFdPkXxJdLLwm14KfbC4vZwJcxaoQhRppQBKbz77ujaDHWNg",
  "key34": "2xtQfoz1ixbzgM5kBV2q4JgN29e3YT2QEtxWVQMvwncFt6ucxCdpz98cA8C1vn8yKf6bfLUZUPvuE6V35513s6xy",
  "key35": "gvcfBZsX1xiYkKBoj5UbsEPx9DccnzpgWtvnzWmBLuco9o8Pzw2fYUeTsqp73xnMUW4ZuJCfrEqVL99vs5eqTmZ",
  "key36": "SmhWWoSfKUaXpMYyN7n3Z9f99M2E5AnviYBZjhPWmvGhasJk7o5vAoC6Qq39ZNajFCNCEm4GuuJN6ri9Cqs6Qs2",
  "key37": "2J8nybye6sSGB6y9j5enA3dGzPCrXAqgbsnS1JpgnqpoDQRGxdNo2Ab4ZP72P3kAUVKb4ofL9qhqUbFcCt8Xafb1",
  "key38": "29F2wzkmEExY8bNE9c2zkbWM1djBTPRBoozWcZMkwfUbsxc65r8d4gYW7xUBR18Ejjgbrk5WBKuJZwkNDY1kitm6",
  "key39": "sRrMR3bcjWcJk2YFbJyQK9DSFAuuK8v9gCu1yuu9QGcrVjur9tG4DqiTMZrXfi7AuLVz219zeijN3nMxXjV36qv",
  "key40": "64kjBhu6S2MAvn6qFYVcsUQebVvZUjDQ9eGx1ir5zLAK7HUengAuXAr73wwJwWmyCzi1NM1Yqnpku9bprv9S1Dhg",
  "key41": "33vyL87zCq5m2fZ37nUTrq1HB8tZFVWuxBfeDaNkxwg4X9ZTayuYn4un1KSy1ag2r6Pa3D1uninS1Ehzzx9BAwXM",
  "key42": "4LNaj6R7avGYYxEAomghEYaw9avg21M94QhA8H2fSrx31paWBKFk2tvCqrWBkh8NANRNS7Lhm7tpD1uDJgScAY7F",
  "key43": "5kkNkmfxqvNLAQnL7PVLSxqQHip1F93A9fK1XwREMeMnPY2Rnanh5UJMgYspjzswny7GpPkJq7Msh9XMzHGewUPN"
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
