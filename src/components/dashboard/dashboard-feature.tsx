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
    "3y7WMe27FUNFnnhFMejYQ46oULjvim3XAbQg1Ncev27nj83GtXW1uFmpqaSkXc51oog6Fc7cXp3Uxmjq9Cpi9ifj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5boSB3LmxeK11D4GrYKdBdB833fGHAbY2Xf1fVGiLmTEPEmSuWbsZu3Aq12sWUXuJqBoKydwu4t7CMkgPq7tgsE4",
  "key1": "3qm2teVP5tw6K8soFgML2YeTTQpngnmmvXkrLHZKWvnFCexHTTuK56Yx246tMtXn1Zj4d9dnjweDzFZDAnStmw6P",
  "key2": "36NnE4hbTSDNea1tAWJpkeXEsd7F43k2uLtBtd8LbvYoq5HLUpeH7VsaGg4nS2XWoNPK6fHdwq6AeJXKN7dLCYbU",
  "key3": "5raJgjz2ayDqpvNYXkVaP2XJTaZuvAQnkawVLwZgMFqXiN1v4kC2kRzzKjZQMC5xyvYAjhi3vmX3zaV1R71XJRXW",
  "key4": "q7bJNFwAtBzfKctGXQcaDNDLWatxHjddSHu1TpHVgGZPnse2Tm5Xpit58ykAs7kiZaCX3WPWqBLGaiPiRTLcmVY",
  "key5": "5piDDpEqVsuhDNSXuHZxbm56iqk8bTHFNBZY1imAGPC3YBPNiw9WUezF3axXeBuPCzf341XLHJXSdBFs2V8quzii",
  "key6": "33m1r6ikbKGzgD3mcKMumLKu2uojf3GFBtovGAeBw6nGTSWxgGdVD63uUfxg6B4B7GMnNpJ1a7iVZbNVfyZvdASx",
  "key7": "2BmZ7nVJNPUsHHTdt9jkTYrfWURpj6p1yJ8JFJjZ5smWGU5NCVCQK7ih5NsiEfShaPYMVVC6ryNFMzQaWXSHaYA7",
  "key8": "5oDkGgdroKZgimyAFmsUcg1aZrvz6EimxsXtbyTh5vpxErhcKYEFbmVucQgwVeDiXQTxn6zK9YdQUUwpfNHSQcff",
  "key9": "2UWyvjtA2NayQAyEfQKvoW7s6eLqEPAgiq45KkGiiMZeohkM4c8QzuKSPVKyw9uu4GzGY3eupK8GYeHPWTzNzYSL",
  "key10": "6367d41BY6W6278CyjkMoG5CUBiZkh4FdZZEYtT8S23rf8azJ1o14oFesgVPMTh12iLscSQ5wzCUcPeb66aVruov",
  "key11": "sEwrF1sUADpAshAxZs2WTv4ztQ9iiR1qkH7SjvvWNR3YVBDm7Yh3nQzEgJbWKMGAN6BC6aoiMEAJWCDcxkWfusQ",
  "key12": "31dD7rHK4VwnYsvqAuqbtDbcTzaLUjxSNELBjkd5kGBKy8tTCq5ryTKaRUfWwkx1KAL46y42GjFq4drbhmKyPvyi",
  "key13": "5GaBXmttbAy11qjjpJJhLjPAhJ4WyJ1C9M6pCcwcWjcAqrB5vcyEGFP5PJfxrtdyW2CnFYQNXezyNhNwvAJYQuoS",
  "key14": "5MD2FfJm4hAX2RcAoCWzAP3irqqwGq2nQRMorTPNQWwZdTpzbvdM3g3puM9Ai4Cs85ZLrnDJTbfB3aEgkfZXAbVG",
  "key15": "4xzCEKFZktVvnetjMyJsJBUrVRNeYMh3o25syaRgyZZoXbo3ucPyhh4GnZNAWDDLDbLSg2uwyL74bT5LYcQKF64b",
  "key16": "63tDJgo5QMCpFqMau3ATY4vpGyfH8GGg5ZCAzztiug3gibMKrJ7CwFJMHZQ8RZKYdivUetPrmUHqnuLg6w7dfd1Q",
  "key17": "ztURXmmf5S78C2bTypXaX8LbYpV2BcG8WSjjQujEjjDfm8EZ5iTbzg6RQdngg7W5WYACaBQzxaoN16QicDibzcY",
  "key18": "4nBfHheekY88GXmyzvjKioPLzUWaSXm4avJjLpMQhyrhe7oysXNN2vxnZRhbVm2uiVCjqhrgRkxxFGwk1agTCkpX",
  "key19": "3uBJHWNL2MNmneBkXPm4n8QTKdeDNzNzkR6xhH7sRXQs6vXSKqoJ4ntu7HiEAyzM5oyLte3rowHskpEbFLhPao8u",
  "key20": "3VmZocQ27SKpw6hhmydb8EPNxUkVcrc3bQD4CC3NzM3yP7EqNFuHdK1ptgjgUtbxxBcqnvFwcLaae8Pof9zUkXU4",
  "key21": "4iEgwcuZd7qTDX59qYLBiTP7dptYa4wfxfvuyVcZrPg7tpVuEf8A8nZmf7n8g8CVEBzyd98WnkyoEubcXZ9C2mFa",
  "key22": "5L7ZQ6Bcu78QrAddebFnSP8gyvx7EhFgc6qJ34yYa8oMoqfYQjVzWCKRR2uf7LZTo2LFuXw9ufqcpvEeaedgi2Hj",
  "key23": "4hwhM3SMSQvn1u912TaZCW5QT3z1JDoX392BEa51UXzjktc6bzKKHjToAfApuSQPPWgFgSsAUf7PkeUjZ9heouxK",
  "key24": "4pKfwThe6DGA6VN1FnCv4XmFhD9KdK3mY6kAxYKoJuZkJjtYRfhhpv1RjG4RUfFjX8rAUxMniMcLjUimM9bB1Z9p",
  "key25": "3geXAKyrdtJpgk41qUSP1d8SRn3bxQHgKMVBNuCyQpqfKcrYBwhUShaxiybgdaXfyXdLFuSgFxBKdMC3RRHNigpw",
  "key26": "2DSnQ2K1GESHftda9Keat9J1PYkjsuK824i83tqaaRntZgKt9t98fw1gx1FgNYC6tERNhnRT1DJE8DHdCtByP13Y",
  "key27": "4f63G41e1V8Rnw1tqfXESvoAcugYGUK22hiRpa7h3Wm8ojeTjjSiBheBWDfaJeMyH7QyDJR9XbhhSareiXdnwaLU"
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
