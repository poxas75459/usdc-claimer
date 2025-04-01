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
    "3fAZk89t76s8xrAqtFnb4ZWKjJiY73iQt1rNPVmm6oTkeMuegecD3sb3wWrxzTpSmyqb4xhpPERgDvUuxNfMMWtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mf46rKJa2VLufGxr6FqT5bRvmGkvTmPzzWT4cLThCUsuRiJQMfrPf7uxrybrhCAoCYCDb51n8mWbUaPmDA2hcdG",
  "key1": "2Cb4kjXuqkbKHEtm6iPBDT5Yzf3qpKQZuXiwzFk5eo13q3tCudWDHHwheGk3Pot1KHXEmw7fxu57geePhu2bSn25",
  "key2": "8ew84nc8Md1JeKFi33rxTYtNjhhD7Zzcb7s5BRJTpGkX1e3zj2Q2nmjMwc53VbGDWqhTL21JPkqBNpjCNrHNcPX",
  "key3": "3ENHecCJhfhfjZrZBFWTkgkDYnVLzFA5yt5amjvwXNfjPjN1RixwDUXbYiAZqEVjdEU7fwegsD6RPJB8h1Nahob1",
  "key4": "VVsTdyDN8hWe1n6CwBPKtVZmHW6xJmnMv7VrYAN2Q19XBLv3tRaN7oKHp5wkHZhtSXNSEVerH2aUWv95g9pUSSJ",
  "key5": "2sNFD1nj63rhu9q2P1CSJieXCj7JnG59BB8bCuDoRs4GX35M76Ppd7xQzwreKmffsm9157pJaNgRhpThaXPwBNQD",
  "key6": "25m2Ksh7kxPgZt53cTks44V44KLzEKnCZqv3g1AUFRDkHWzM9LMvpZNjNBEbzKutu1EzT8xEtnAyhNaSrFkEFbD4",
  "key7": "4Md21JeTrJRvN5qBFRJHMv3y8bQkcRwrMWcS5czEQGjLou7XvwWHvnkTKNC924VzVmDsXteds5FJEMbuUuRH6XWJ",
  "key8": "5pMi56veuHJ2ZCpbFRZoMyEi2vTp5Skx54hnQFBAgwZiDHTKjJNEK79X5pqzc6kpSGiVVhd4sLBHtXAvtuvUrttT",
  "key9": "2Q1XmB9JuL4YMft2c9BmjP9WDv2jkmmWVrWhheHTzVias5btY4QxMXJfsxzaQwyyMkrRAa4pk8hSjSHbpRRwX84Q",
  "key10": "4gAwGVHFcnjGLSQenwQNL5yYPB2ib8XgkkNtbn2va3QRBLujb6DPDRtXXHehyDfn9HvaxGgW8auosrMPtZwCqikk",
  "key11": "38C5HLaWk4XkMxouyixhPsThZyqy48fXGpLCfA5PyXfYK9q5sJkQyY3Sb25nkwjRMEyesNuwktLcjG8kpoxym3B8",
  "key12": "4VUph6tePaEPLbWf52yNwmzEcHzCJqmmDJ9vY7LBSdLEgfhp1ES7ECFRHYVXXrqVpuyNJeXD8YjKw5Aib22smstB",
  "key13": "53jsz94nJkzcGitmsCd2vJHsrtzdxJ8uc3n7dqQTdYn8zYUXgSGFFemD3Go2xuSyx5keYBA98qk9TH8fXk5S6hWK",
  "key14": "54VVfQ7h8F9FrRV4AAYjFgrzvYcg8n9QBBhQ38ZmENZJFn2yMKu3B8EdaKdgxivRAxLci7CRP3dZcWCVvzmDc7xo",
  "key15": "2MkxzN1tWNeuU835JQuSoUQB7zm4Safrefh182epA4QPj2rYRUF8DRzjNuGkhpcsxeeyKRax1ZimX5YxDc9QRKWb",
  "key16": "425vnrk9GWN4eG9noNb1YPd9zneoxMmRZEKwXyRB8ZRt3hXeoFxYGs7wrBYoYuhYRMdq2rHyrMt96FgEQD8akpup",
  "key17": "5iBgw4GxZW4agz3xm4mtJVGGnzjHTuLvn7DzuD3UQz9EsjYDPY5RezeuSEY5hMVLEi9cnfjRBYwLm8ecVNiJv84g",
  "key18": "62bWPLMjNpjGTrCxZRvy3JJ1JjuQ1HcpECDN86jBtVBEiDajNHMyg48Gb7JFC9yW62LGiyNVAZNFBoqt4fa4gFtn",
  "key19": "4G9Q4wgLn8QGMAW2VFPRSdfoTJBFGYuWc7YZvZQ3Swf65oURHeceqmH2Tg5FrNBhD7Q9aAKBPZhDRqidgfcDNN9f",
  "key20": "2783MkKxQQDkVNXWFFC6FnRrApDo3LmmUWrneMiwYD5n97uo3qJCAbJciSDNPZk7k1XdGMuY1qbw5j2SNDZ5khcm",
  "key21": "3Y4nCFq58Epb4tuCtrumAjgN5jE9NncdGekvnTec98bU9tycCEPfi4ZmGBoiyPhZSRq2eodZPgvnWACQCJypaLDL",
  "key22": "4JsG1XdsKHgrcmRXskn9rSzomB9dkg9ZU31P6WR4C5RzGCPmaTvFQL3owqnLf1oie8B1eSNtZwMK8avfBwKNk4oc",
  "key23": "4r8DFo2Zojgt2K2vDL9hMwCBS1hUUZv1Eq96NXg8C8t7uenSGmLRLZUnsQAtZQBSjtMCUbfxp4bCYVJiqGxPdxGm",
  "key24": "nDDtTuVMZWhYWfzqFxqSHs4zZVN6WWp49M5hcHhQc82LATeaU1NRyn4uNYarzvJw19HMnURzxKcDpG68MjqXa1N",
  "key25": "33eMDSrd19UJ5zbdd3KTZTtkWSyZpLWTFpfMbwquHx561w6mvo1tFjUvDWrpt3TGftb7JP77VnwjPbauXrEWGm55",
  "key26": "5KjZkxqtcT9P1deyccvY6vqkps2YTgweMjVM7YckDv1fGPw8VdHnhdzqzKGZbKtvtDGNqKEfni8QnBDMGdDoZ7Pn",
  "key27": "2ZiGLfrAaWiuziHjMTerufB45Vbqvvb2CgQrDb2yLW7uSdfWDpCjXZ9V4FERktSi24fd3ALFWFUyLPeCbdxBUZbj",
  "key28": "4ZgBb1iHX5UhakiizF3KDx1dbCmwhAtAhfnSehVQcrQ47SUdEnBKbGbJYNDZ7dUPU1viXZMN7yR9awTTmoEzDRFZ",
  "key29": "64ypsn9A1X8EfFoquGbgWYVZQvNBk9QwGnLhZpWNsGT7bTjMsUvEoxKgFJUdnGJMFQcYK3ma1fzLfV2ZWcresnmH",
  "key30": "8LY7eyytaC7KWneUpmqFdxpkbSoFJWUnMYqxyZuHhxCG5qLcHqypFaJFu76QspGMzF7wSsUmFLAMKZAeWH1K33s",
  "key31": "YijWGRKZ2jvDuYAibAUgd7kH2NkMpXZnu1TjzrpCEP6sMuS7zenCeJuuaBfXRuQY5Zz9KV3CyPQfEpQmDvMF3Pv",
  "key32": "5ufC1h6zpjYgXSVpn2gzDQriuHaVRo6ak4J9DoxujYELDG3FuuZwt13oDzndDCetz6j5AQy5avym5praJtiQ15j5",
  "key33": "4UVVwgRFAJiNqbXrrCFhM86gVznN6AxPY8A9NfpFcqQ5RP53ekwS45HzigUnDKrLDh6isqwydZm1vmZXMCSEcLzd"
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
