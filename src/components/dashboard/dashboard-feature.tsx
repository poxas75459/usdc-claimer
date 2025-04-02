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
    "2wDt2sBcNPFKfLLuMcxpdYEggzsAU3XmtNNfVrT77S6GexJgt7XKark4XvTDQwyV7zmybSXKTHHDDMFQoEXNnzeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ArPCsDfax1SLe4MUquMTckg3o21fTQeLfz3wsddKraxj6QXRF3gf96x8bMKnMA9rjar1oUQPq3HyCtM8VVXt9SL",
  "key1": "3LX5tJBzDgM2kTm3uR7dBRxSVhxtTxTSf9fs5WSZVohw1boeqb1XmtQRA7eq2mnFY3ZwvCNiEmiEMTYmAP1RGgYh",
  "key2": "5uvPMRpez54qL8dpXHztfWLM7XQUnGXuGwKp7AXacFUPDaiS4D1ZdmF8yosZgSHF226gcxyXK18amZGnTbYTVcSX",
  "key3": "38G2hSVRroVK6FkFrDy8yiTJbMqpNdwocREoeFjmeJwS4t3EkxwfGQDGwVTadPqjKxoAysr3Bqy75mixXjRGFShA",
  "key4": "XPeaUCpjDng1mAq9PScFJn3ReCPDEP9yJBeQDKqgf8ikyND8aRSUmzNumUW6AKw91SdJPUU2BSsXJG3MbEY8BpC",
  "key5": "3JatAhJgZb9beHsXBifYJrgzSStVPnXkLgM3PUCb6JWMKSt5R4yfvXLG7GDVoDGiqozQSbWiWY4YxiBJqZ9hPVJy",
  "key6": "3dPTuko8p1KNkQNkrbV56v3qdTxrDrbztDgDqCHQYtanGaVWzd3qy5DahM6exgmKouiLYVRkWLnrcXX7zWexegMt",
  "key7": "3JSvuDzud5K2ZmSsR2Qir8qEWUaQZv3DJXXwWuPhLGbcX1VEu4cVJ11Ap3j4LJXLJDn4rZDH8ERa6cEpcHWuBcKK",
  "key8": "4Bf5qVMM5wavEk5mi6QY1wBdrxJJV4p37ee8MHmC9UFLuCtHEK7VjrqLJSimGhv6BEc7Zf4fGzBsPR7tA3J3qH51",
  "key9": "HqXzjDtonpx42A7bT783iLPJ3g5C1g3o1SA7RcBQ14y27LNmHS4BnPDiVp1LUDfFrYWhpRwngJPW83D9DbvycbD",
  "key10": "5Krc98ypCKH1pg8cfzbsvvggURcioWwDyVMjA9wR6ZecBUvYpiUDANnSxPXXcXGGdbFpt32GyefHAoWcbNU2nXrR",
  "key11": "2H4WryqUCX67rofY4NqyQzXjkDT1CPoMHBnX8Byy1FNk9Ffp8qhFiXUoqL4T4FZg2HYzqnyoJSvK1zYz6TVSBx48",
  "key12": "5Vch9Nxzd4QPhrkAp53R9AXUSvdaJn99Ku1w2w6bowmuuJpLEpLHZNriNRziyvaysLFYZPoDU4YyrEt8zQqXUbcw",
  "key13": "3RXFJUMeBQ56GJtUp1kAarimBioMNFHFJEbAk4UYo2KBMbUWwy7zPyYKHqyLw5gtg3gESvazitSLXVRRNMoUZUZy",
  "key14": "vrcTAo2c8v22f6X2fpw94aUHVTytKtk5g5KDofQ8dr3YeVNBGzxf83Z4e6ToLTM1qAoGy94f5AEtd3YMFQdr3a7",
  "key15": "6PHS3nigcs41GsithXdeBUrCtgNr8iJQKPZLJLRd5ExntwSZonaEuHhX2yv26mkjMbVbX1bkhkEX9nyj8zQHPMC",
  "key16": "5yrHEGNQBcK6x3Dk8Uhihkfx62npNc1aNJhrFGAspYyeaXgLHHucgrpu8EKbkBif1KrHb1EtdmLDDVAueHqmc8y4",
  "key17": "MXXmec8xHsMbjSdhyt6HxfbJZwjYQnpjR98MsUaDM3sHpuLJNfDcdWdQtRvPVKwe5KBeViHBk1Mc3KqrsWnSu4s",
  "key18": "2MALuNJGpbe7Bhxo7juxu85aSNXtJxD9Eq7csEHbA2TWmqhfc5mUCQFAYX1RqThwduz2EzV5gSPkLbpKkshJ35Xo",
  "key19": "3QkpAd31q7gdpj7EVrMP7CkLiSj3M76nRGbwewURNYhCY4regWwWe1TGD5hMr9VFTAjFnB9nqkaaRPscnUV85GMq",
  "key20": "4RE3dfqcwPXQoZtFEn9jpuvk7feMfjCTgTimDZcNVauKdHLvxKt54dMqGerUUsGgPHdsQpz5Y35LE2bHpznFsmEj",
  "key21": "4HexoP8ALVFXKPAvZ9pBiDhfdjEYGma65qKGzFRyUz8ciS3CQMYACNNEaDNkNXEwFoaCeNW6B3vZh4QmDgrt6dWm",
  "key22": "3xGxfdKNvuDskzNEYNA1Rn1n2P5fNmUZtZhF4nScLHUMXNSn1NJiJuRVJ1MxWdTEBrjgsmcWdd1CENoDSTnpbrcJ",
  "key23": "2XECRAnTpzTvfZ7XVTTHb5HBMQM1ArbfAgY9tbcJuhtxvBtQLZZZf8RE6iSpwfyDoXnZZR3XMufkt7PJo41HmdHs",
  "key24": "v75JZFnBucP94isoyjUjXqfq3NezuknE7a6gKktwRiF2GmZgRXaTgszMm8GTqsGJdZoyz9H48wDuxSJrN2G22vR",
  "key25": "4HZBGGSCZYg93CzW7GMoDBffQUNHndMj7Cyj6GUYg5yUwzSYA6FcJnXa4fQVx7A4JnVfRbbVaRnPhcAbMwkUSpzy",
  "key26": "56ne9GDv4fXeSDirKEu3HqhJ8ZTMmXDH2tRYQvCBqguyV8rLXZnTqMfomM1d4m5ynMmhvJBBuJvbqToHKV1ZhLEh",
  "key27": "5Aa1xS5ZpKewU8pvWTwL2WELNKaasCppuuECgQsne5D5zwLrjrkacNtu2ASog4firRJ76T45Ft3KSKJVCpAA3sNF",
  "key28": "5A6WZHFMU4BdRWKuA3bHxi7nPUMEaSgW59YZcenS8tWbhUMxVk1yUnAASNcr13bavyYc6qvWii55jX7vGV7DD971",
  "key29": "4g9E6gGUpnGFcFhGt2uYMrnGpk3cmA9v4JAC4cBAkqPtJkMkVYeBFwpkGPKA6Z6bbSZThm5ZZpBozjnmNDSxvWsH",
  "key30": "5ZbBM9no5WSunSF4RTRPBcNJ7FDkjFeXtCJHkNSzfsPHA1z2tcb8KKV7UzhC1Xga1DUtpnYYNoM4sfPiucaVHHA",
  "key31": "4bphxcZLVAsD6gc9kCtYiAMebbcXVWkJtfmSdUqqGhtV892dFUPiF1jhmNL1VLM1Jas7RbCddDQSVNRrRSLQKcUH",
  "key32": "8RypfYgKe5bbQo8BXWfSQXHe7Fagt7XToPEDNbB9ae5uz9tLwNACwwjDadUbULwSSZ6zvo6sFRWEin7p3voG2kM",
  "key33": "4MHjZsUPj3o9fA64ZHqEjvGEXiQbMThw1Cp9H685182BNB4bYyR27jNTPzEid1sACP3E1wwdiMjk37uXbNYu9yYb",
  "key34": "2S3t1kAFDwrTgPofFtKbNAVkEAJQi4oW9eZYiDnSPkChi4BE4vMEvKA2mFpiXTbv37Y1YnUN2sGqUa7pRhWG9T7p",
  "key35": "52wJHjeNkepU3q9URHVF1wgJ1FkrqRbaE8tYforhbXDXivLPpkUgNpQUZJKTnrzoGFQU4Tb9DU2vniXp4GSzpKW6",
  "key36": "3z6k6jSGSMqFABrRs6djavttu8r74sUwuiALyBEkEZdvpaDZJutM5mUAKQcUCfdhgsBpMkZuSKC3pak59WWvVAyC",
  "key37": "4Kf4CiarAAwPQSH2MnoWmSJAgkzS7YSjBb4jWJ8ssGt3jCoyKKRwWgEiq2oa6dpZy1f3g8oLwffgc246btBo7AqD",
  "key38": "2AXaK4iyp34odgYVk897VuVhM51GxAHvZjzu8AiFanmpqb2aoN8NHFcuDXMKtutogSM893wBoK4Vaxi7bpHw3Dix",
  "key39": "2e43owcJi83AWjS5WDn8LQgP6VS5JqgaZvGrMaxwATtJzC27WjUXiv6HPsnjBDrzYCiBmMzgiz8ZewD667vrSEbW",
  "key40": "54GCxPd5pxUu5pywcaJb7FL9iKUCGXHzuYsZWrfxDSAo7yGHTDzQqwgRtAp1rMAq3p8FjR9fBvBwdZZhgct77gf5",
  "key41": "3NRChuDyZn1CTWEi9nP9EDoQtaHNCejdpZedYdGwNCVu4qtNZLkBkW5J5tAeQUf1GbsWB66TK2Sq5SeXEo794fGq",
  "key42": "5AGH4ncavGxoX653pzSohT2EvJBCKo9V7WbYHwD2Cow3QTbG6FwjTpmYtzyEAYRDFztEd1xSCrHzZqZzoMysPG5y"
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
