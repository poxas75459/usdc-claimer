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
    "3jxUMXH1pPLZKJyTDNjgpCMjVTP1pmVHRggkJuTEjhCzh8HKtgPXzTjqb2hioY1UJdDwxAWUZwW4TY572HfdqyD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RsCeEqn6hZdLHup7eqNRcfQ6S1kJ9KuEKMxfdnm8kSZEm1nkZfEEg8zGMZyEjb2deSKQaEyb26UgDcCQVtXZ1wu",
  "key1": "5TQFxu95nczC6CURmWEUBcixcCVX5XRpTsmEGRgYFYQp6cBN3znhboG3n17rVg8gqBaaD2BouEUd8chA7LDm15o8",
  "key2": "65oxaCPj2SsUEHxwU1bN57QmRZwKDjTNHNd7EotEjCvSm8PUjCS2erwueK7tu5mRAvZ5X6FfuxBiTrUjqys85h6D",
  "key3": "3uBab6HENM97NiBZBqJXvgCZjEdA3h8LrxUcJKaQJnJA3YEJoyLtsRE7mzoSCsruQuV5uM3JJDDJb2WUtaaqr3oE",
  "key4": "BaerhAurHeRbRSsawk4bgT4xjXDyT1jXvvcRQ8XTykSmXTf5fcEd4KxN7GmBN6ifggHa3iwxc7P9TWdA5hUMcep",
  "key5": "2mUtC8tx4vfY9zwk3UCSY8MvfHJcp9rJYyoBHhHgHxJQJgarGcedJHP5XfJW7bkxxd5Q2UKkopxBcGFa8u4hpS8",
  "key6": "4XkRWdXcMtHS4tLMb2ahEet4SrN6G5BZN9s6ffAaTnW99eu183U1Zaogzmm7UPRkSzmn7fCtbFMZoXETpWiPECCw",
  "key7": "5rvyphfkMVaajFKeixAV3PuC6ENm1kj2kDejww5d11T7xmXHj2bt8JyvVLk3pfP1iH8j5nBVRr5Q7yyaCgQrBdcM",
  "key8": "2GrVWWEstJnQUt2iyhd8Wa71DKZHhkUjtj7DBn3xuUKVshEeLRdCN9QrVsNBX6siUHQDX7msyKZiwz1dAPAsH4Ts",
  "key9": "51SvojSfKbciiRMP1783YebDZXWH7MfNQcha65sFXk4SNzNDon5nNAwHCx1wbUvJDaMDxfmhPjed6GDsVfEam3Nt",
  "key10": "2yLfCc7LamP2X3ozfgFr8e2f7pbMpzHp2fJ6gNfnWADMcREK3iva7i3J8GG7BBZaCkfHsKFVX13gZ979ihmGuzL8",
  "key11": "4ReF8NGjNWf6QVfv4x1BPwG6CvPsrtgJq7zhtXUkKWCFARSiDzyxeczgQ2teLTU1N4NtsX2MWsxypnaZRERvt59D",
  "key12": "5c4j9HE9Vd8SZkt9LxMkGqZkEtMtxRbjn1KGXJ5aPA2YkdZ7oN8oLbKDCucHnQpyhQtjxq2fsFXmN5zT4NMvbEr",
  "key13": "SxZRWcohnxXRQFNNmwR7iSBNmbNQaabaKduegU9aPbkEkGXGgUusoyuxee3WC99SsTQ4yCxm63qW9Nr5qN7mXjr",
  "key14": "55u5FhwGmz5hrk12aamgLJymU9uojj5T62sRZHy9PpZK6E3Y5sCNSYrphjwbWZZ7mJTfLFn2Sfe9jwbpTd6Uhbfz",
  "key15": "5hXufpKrhFrwshoh5QBG3yNREEFSwPuUDHumTE71gHYM4oUKrvu2PvWSYzGNGCpyye49b3j9uRm2mH8dAEPAJvSS",
  "key16": "4d7x5wZS1VTf1XwvuQbCdhiMYFKzgdhfH1ccX3xM3aFxYw3H33wtMarfsiNUG12f2ABuzjXnhJWB1wiR2tbu6bDo",
  "key17": "4osVn29mwBJcmnyE1RPeT7nNTgTgK91gBbJGNdrvMCMbudcPQCE5pvFAtUSfL1XiXnmvk5PFZZRbVetg1qaYReCG",
  "key18": "PWvjKiArH1s8gRgSMidCcRc9BPENxrLnuuwytPCBJCR9krWB9Kz6nCByRYPX8u5HxzcARvwQxBRSVo2a9pxuE3D",
  "key19": "3XpXnERyYEcmrAK3WnnkWhiCVQrJHEFGbTqu7KUFQB5HGqZ7sdETMpierQ4qHG6aBYvFTMh6vnWATdUEJDrLsuVs",
  "key20": "5NKivjFjSXsohQ8fXesdszEdtzkWmQShJoQQYgenC7VGsaoKoeh3GsSDoz5E3PPBpTC6zZAMuBvqZv1o6ZLQTGW8",
  "key21": "3DPX73SC6Nn6ir6aZZGbmq7tLJaew4TSUwJfeY73f6aLV8vo8BZyVYiEx426sJ1U4brmyjikcbEAKqCYWqaNfVuN",
  "key22": "aa16XWnF1NMiA6d1dRkg6igthXZ9eZ47rtnR1KG2rgNiAivrXgty9ZsukYpwg3yxEmUDjCrAcdVkPfCbu7TEtuz",
  "key23": "hAX2fgnGhnQwvBRpEtN9cSEKaqbijdDQJqcQAwHRqa42LeecCKUzHJvaZfFCTQm6Xo5xE1TJrX25Z3F6gUEGEkn",
  "key24": "2m4jf4oGyPGVXD9ztEDhMPjbffViNSWbvtpZZm1wGpkJzJ43uFQkx41CnYMxExk2dcVQkiQ2K8nvytqoeHc7gznj",
  "key25": "daVgPYG23icCQS7XF9YFNxWiXVKxBTFEiumNWVTaFWJPQ68CFNyTjsHvLStx6UGVANNdYXPHwdSfEknEwm7AJjN",
  "key26": "5w8fSMnX3bCSn3wSix2gFmBdanTuzwXa8W1R5puXHtNJt3MHcYy1FX7EXdmQ8FrunsTZ3trZGfn9LJp6EsCYyWte",
  "key27": "4nEbu8pYyZx6F87BEyNbo4Eu2GZiCNrxWFKRg8PFuTX1qHBX9grEQwye8T6dUFXvPhT4kKbCdTnciAJcz77pJKqC"
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
