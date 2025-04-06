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
    "47WcLXcwN46gBLQ92MUo2qpKxGFeHzwhEyu2Vy8wQ8T3V6EwcBBgWV5uoXK3ZoumAzAqb3VQnPJW5ocbncYN4j5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZzwX1XFwApG7nZYjdz2skJfQK4wchVG6nC54oikQ64eChTBekQXrUQMNC9LzWvJ9DQMM3GKeizFdyC1syu5SjuA",
  "key1": "2rwBBtbWQBakXEDudHZHYf766gqBmmsjw44CGLf3DDdrbcD6M1PnGB5WizRfjdG5FLoBqCmc8Yb3AnZkjEEjDpHn",
  "key2": "4Lh9WeysVcACAWz32B2NMz3ckrrbrD8EZHMNrjWDPpyiP68R22bT1CQp5EMZ4uLEjnXnjmFB5pq1eibvud47KArT",
  "key3": "4HMYAr33oRR4MJkMPffs7GvSGnG3bm2UzRX2yodXLqhGEdu74tbt9xETdFBsSPmVWtgM7bWUpraJEjY6KfcUAPLR",
  "key4": "4s7Bz6x8q7FxvebTvRRdJw4KwEk5WCJyEUNu6FQH6Ez8weipT6DhePD9p2YZTJ8ftASQ1m3FVeRuVmZHvU9jXJ6B",
  "key5": "5Kn6pexvn1wWwvxUX6cJEMgcZYuQY4ikaqntHBVeWpj6mhCfwSoDQNcM6zAeSKtkSgDdC6FjMbUoFj1ZTYPAkCRN",
  "key6": "3mMNQ2jLgPt77HH4NpuBfsPU73rnrvkqbS9ZyhAWWtREQ1EdgvFKpic17rr1ZMiSCS6PDZm3QZRhkhwTcNxBL9AP",
  "key7": "2MRSsHN4ofwGHfYULnBhUdwHXYCpm6Ap9ArPtLukmZxv7mqDZySWHAybZf6BkChQFwjewH3Kvze1MqMQWj6d1Muv",
  "key8": "54oRgmbozdcGTdrg123oFJ1ooX62DGtmqD3wbo9Pqus27kALuWXKb6gEzYVoodHH9j4oMWoRdLL6FMVjBM1Vnp28",
  "key9": "3Ttf99RTpsH4SrX8e13khEqLQidX2874s9Wa68HS4S5czHpiAo1GGq2savbG1ACDBX2b4XD4GfT49hCg3nvcC2XT",
  "key10": "2JCtQV1jKMtRdNQ529nYZobbFTZNUBVZXpFL4T3Ve8kbVgq8DLU7E8ttUqgg3gi9MUJCCKie77v62A9gcpwxGeBK",
  "key11": "3JPTgr5L3D2NenDX3MMP57DiXcMQPhhWp4HhD6emARSrGuqBqbYvzhqF2cKELCETXaZX153jWMyCDtQTxe1oNWvp",
  "key12": "4NTnoSRjKPStqUeabwXUQQN4bnK5JwBNqkTwAV2Tyc7nLs5Qc3zAyeaPQq6PNXxSpwurHfeCw1GoT93zRixwfeP1",
  "key13": "2nG8c9uUinMCAdWgKEoW12jSJKBdXNiPWxobCaFhNuNeHmj8JfTTMA175MSjT6q2m1tPX3MyyV3v2aAvjr3C4inb",
  "key14": "4vTKSyPPq2r3YfSmLPwqJabYaTxsCoiNCjb38fT4uCua4msq1rHz3v1amahC5srEasvGMSQX7saENx6WFzugedu5",
  "key15": "496cNC74en1vMjjnm38fMTEUyMJWuSWkp4ABL4dmfV7CuxSVD8Nx3aTmrWiPXZaMGZjwtURerhdpprCZvmGb7fVU",
  "key16": "4rf7dsBnwTBUD64DgCaGW3uJ5wXeCskEFbEGieyutYwB8c4PicRHBLYF2Ae8HwYrJE49JRbWHcSFNjgHbYi1AgBc",
  "key17": "52k89AtK6Kt1xKD9FqLGzmMPDExdatRn7VdwkT6H115ggVKd2Tse9Rk1ueJox9khgABAjxEGzBh9rLuQXseZiSJy",
  "key18": "4aN1axrPzLb3ToicqaVSzDJqADgmSchTAi4XFKivePdYNfhMxUDcSc4NPnh4H44viuuhS1ZAr3oUP9UMhdYwq2TH",
  "key19": "5GEKVWBXHq2fVD85wEZSTHUq6ukHDZLUSX1bSq3eANXUVP6reWRmpXckD8cFpMQr7UpznGudMNPScsjuFw9G2H4U",
  "key20": "4PnsHpPJJPWwXApyTkZrEeUDjXSmbjwoM4e3SUoeNW1mxFmiNLv4vgoDnGi4gdXu47v5YJvXPMbPNjGgw7RMTuqX",
  "key21": "3tKAhycbdvMDrUWSeih3ULyyrpDq7ZvLgdfdZ3CzC1f5fXj9gHzp3VgrRosjJ83r1NcuAzhMwvjG6LeJSk1xjJEH",
  "key22": "3BA5YbAnrLmir5KUNbLTX1Vg9Z7G468cwB4gnbUvL9cdC5B6TDSPPqUbWui2JPvzZF53va2Evxq4iz2Uuv2f4WcA",
  "key23": "2Rs4PMxsQMkYtBWHvrTrdE58PkezxhkFGbWV6NHU3fEzbCPXLUzWhrKi7Kc61a1ssYMyy5KumvpYFRMYfXtJx1Z8",
  "key24": "3uMMHg8sP39DM2ae5oDiQSrseLJAsXi9aEyQLwjpV1npbwNsE4yq9ooQKJbi27gBTzqewEXeCKPkufMmC5BDeiqX",
  "key25": "2gw71BFg3hkkQYHRpxJztvGxpf1iv8ugRdQPv6tpV7WUYFerdeyH3gzum8HWAjXG6rSnNEnTA3VFgZ4pRrXsCtdq",
  "key26": "3sEZGUPjM2SAcg7jvAkSoE2QASut4FjzZGDd3tGD9nktEg6PGEyDmf9LAzNNEoTmbWusaRWKExcrQwUfLvUG5EdW",
  "key27": "5byVe7q1HJSkaXL4TTRYwk59xzNs7vsMHcwpq7JYCJvbdshd2qhNoADomYFiX9RiXDdQkTDMEXvvtQksai6XRKic",
  "key28": "5MVjCynW1YpHdRrYNrmv4orXRmjjjSnGhakmygJwzr81LURAvNyoho7vCt6vf9AiCLiu7Gbr1jjzgJiw9zVNjVv1",
  "key29": "26Tedz9TFeaVkd9SYwsd49zkVustod73u9rXfCovU57zFPF6cjf4BcxPTwu57ShKsWt26NCyJduSxqVXHutkRTug",
  "key30": "pHNqzUWpWuNVpzMt5LTXhGAyXEV8McSRzKnq69x8egKGbThxoLNQ3DsH9nM9ncfeUT7ugxLSQrpYHFx9oAwmnZ8",
  "key31": "5z6tKZMCNWTZQNnC8w28uMmeyQ4nfBzUqsNsauRvYfxrV1Whd98365FSifFvm73w6kTgGSVLejpaHmJxg1YF9TeS",
  "key32": "2dwHx4yJurFz7X8ShdX2ERQ1GUG2ak2EmmkqVGs8DVnFtwr1sbqr8GbAnbuXrmgHuzso1GLM8BUQBWqrTdgS16bi",
  "key33": "5idNZj1jngKhvtHJ7X4zfkLCjkTUVMXX7Z5nHVVfxeCe3knQYSiemFs728Mupd4NpBCh6Tggq43n581dXjG1ooq",
  "key34": "4MkmZhU2qe2XrFPcpKcBiMLrJEbrMYRNnfBqPLMUS3PsJkPcJ8RqfPAxZ52UXQkXciXFBJ8YnoZGDLXgyfRf1FW7",
  "key35": "4aP3EnrKcHnyxnL59Xi98NRzDv8J14EBEMv3Vj9SWNMwT2rQSd7UAFvek8L8S4VQ9nXSnMmbG6NMQ97j1jxoPoEn"
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
