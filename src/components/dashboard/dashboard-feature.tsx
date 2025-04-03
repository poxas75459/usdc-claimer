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
    "1H3pBQKFZVjXzD3VEwN4WZ8LGrViMfwsdV43cgo7xuDdBX5L7KXB2JeMGaKpcvyrADUbnrUfDKRR9iPvz9jb6mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CFeWyVP3rEXCS9fPMhZc7REkkcY7n7pXehkQ9NC2mDKhBZ3haisN1Et3a2ZGraZny7FXbWg2d6xQdhmzx85PHB1",
  "key1": "Tg2Dop9sPEVXPXQ1gt6gTpjRizoBgfenG27yfGdf1XwybTWJPmNbq6jNSzFV9wReaEG2YcCUi1t8cWtQbmDzL9Q",
  "key2": "2egQi1nzFnYeBUutTwMyq8KkZ5VttwFtko6BybZbH247pHxhotgwuZUSE1Sc7Df6hATkMtW6wvtfs5n6e9jahUeN",
  "key3": "3K5a98zP6vWmNTv8dWno4ffHoD7MMcw4W47AwPWLD5FSTHV9havpeU2fFioTkGyKg3u2yhwU1UVL6KAfKvvjbh4C",
  "key4": "522NRLNeEXC7H3ksU1tsdK1HcKAecnJhwEMbcSNX6rytpnKpn2wYEXvG1bjune27euyxWmP9wEUA8E2D6JyQnpqi",
  "key5": "2999RFPD4P8pZmGrtTuCVY5HtJ3CmkXWdNgvvGhKhfTo8UYbTV7QehE1zqAoQ6fiFyvkTrZu8ywQDMWiFnWwYqtG",
  "key6": "2XsHEgJcheGSLdjVEhggqVz3We8fjLkik5K8LPBetBFMEZ3RXA1HMbkNZNiD2rVs4gU744LrQZUE11drJC4tcTe7",
  "key7": "PHhtvtU8ny2YFfSUtrZq9NMiqdaGwLJ796GE5RjxwbG7oHQoPckf1R47KRGzEN6BG1b61MmLeU6x5LmqYqVMg7u",
  "key8": "3QZmyx7WgJDiibpQaRfV8x7u67fBZ2gNeMpwWCikKv63FotpkvAk6FGxZZfLKatAL9Ages7tqLcGpxSxYdzHhRXb",
  "key9": "363Wy5xxCwsRwoE9aE9DBqkMxdJU8QS7gLNtyBWXRo4b9ZdLnUXwPzu1H8cQPPyQK8FXEidMTvimhcptrNyeoLPC",
  "key10": "5PpmAorn9GD4JaRcac9QLExTu4RWEAaoYT8QeWkw3Xc3ks4qq1LPeay6CTFqEiFDBmginz75k6zgpRV6Ecny4pNC",
  "key11": "3qtUMb7f7GvB4YK2ai3pd66buFTcrLCfHFaLxptjKHWcTtPAkkZVLuj1Uge7Jg6fZKaoMFwPnMMtu2oJzSoVUcZ1",
  "key12": "kW6xw8gP4xnGH88dLALTYQEeJAw4kfJHLQuMJRDSnYNvfoQvLfyzwd4ZH1NexT2N2WyPzxZXDHVsg3s4X4Mi1Wt",
  "key13": "482ELABSix3KjSXi965ySo6k2afjAuv1o1ZYdJXzjRGv7tgkrFP9guBNbkr3nQcgmb2BTXkiaumFMwKuzcWjMcyN",
  "key14": "48293zRSeWB6Y9AjWvfFbkp19fQn1sju85iszw6Ag39zsak2mfJ8XocpVswj2P5iFosMEystBnjMYrDwcn5nb1gc",
  "key15": "4K7hjyDSvjyavDsWAzjogxBwztKUPTj3fLVy8yYotKbNddwHDS9TnCmRaqSWbmNULYPjAvHsR88w77TuCQqiP15i",
  "key16": "5bBX6Ak8RtjcttGXGxMa8eXvhbhdm9UuyctRyiNLmp7MjxuTGdBk5DTctxKK4AqMqesxwwwS7XdmTLvEhEq9Banr",
  "key17": "4t28iQyxgNvYrEBrN9AXzNuRNr3qNQiV7NuNqYYfAbzCogWReZsuXYQ3V6rd55fzHG2PhLvc2AFoUrwTUDbiyzrq",
  "key18": "3De8FAbH4UAXHwiF8orENqU1FTiFTvKgFFKEBfYcCmnQvyu2gvFw1LydE8NninNWQAQFJzMbUx4X2ozrpvPt5xZd",
  "key19": "55megfQBQYjjAXaNU94RMqfRmLfYyD2PninB8daqTzviC2kBQVsaF8z99cyjdYnfMcvw9yGJybxa5rTxSnpKy3Sh",
  "key20": "4Xmf4X3LzZNpzYRREH69sKjQuywhKpPvk4H6GuzXrXfvPGeXQ2SDGD86HbBjDdrqY4QXXDaXKQ2FXzfNYfYAPnbd",
  "key21": "JhHJBx7vmsy9hxooKn7pYCSqmJdU2KTTrsBv12JcHVaJHaVQ9HGEtKEnZ7d4kaimeP5gJfU6UYqdQCuyrCCZNR2",
  "key22": "4QcVm63KSezUJfUU7SdiPgAs8NWg7ADhg1SWfXk8piVQhbUQq4fp7GgRSeZHMXfQ2x9rPvGro6pqHueAHH2LRmdx",
  "key23": "4AbPqef3hUUoUaiV261dwVC2qn9NfcwoJAYiNvDw27ZFYvo6LPyR4dEEYxGUVhfcBPcTVoks5DGKLvxveAF9qRTD",
  "key24": "3X7qZCNosSj4tQFayrfxmM7ZkuqFFshfciZh82Xu8Uosp8s7jpXVxZ7xNSffYVxNDMuGro3jXUA4YtyqQ311xqzo",
  "key25": "3dZchpF26suZkemP5pJ354mAMn8oTYNVZwiaZ4H5ES5zeVkPEdMpNvvn6cXPueB6TScmHKuNbtYGTbWLhRMt5gbm",
  "key26": "2x9BFkB44YzwqNsMkyN5QyoLxNM449E3iyDhixm7qCm8uLEBhgXoVVtpS529JSPhE4kEHQQHbZocWjMaM81MrBho",
  "key27": "4BUZ36UHJEWbhm5B1Exg7ywrJYt7ZuPd2dPTr9mGRe1UDz2LcSiP6huwo8obc2QZZo29cmufHVsyah5qYJbtaXWg",
  "key28": "4kw28vZSH4ntSCfe2Bvpop49jA8LbwsRqQ7AtbKaASkJDHpfdxgzZWhfjH533oXvbfSMsDiMZkR6wTgwWMpNPLGG",
  "key29": "59asKap1AJWnYapFDpXmQVzgTpRkmHFtYgJZ54pF71XEVQaE5z5Tbgo8vyYypXksMbwbgAeUjaNeCmozyKtKEwTP",
  "key30": "5KejQM7U2qXfaBWmTF6CgXYedGQ8aUt8yJDPaJiQCvcK41Mh6c5iW6p1FToChQ7zv1D7NLCykqtDV53hpZMim8he",
  "key31": "3PcKdZwAedGrbgiw8Ay1xhFRFydPMsvYeHkkTgfPkpSJAU7jHZcPFAKLw5uxBXSXKiXMN2ohAdLAWDVJNgAT6m5o",
  "key32": "PbEZ56eBVCYopu4T2Rmnr6oMaS55NYQ2rPWum7aW5npN2sBGBVc8cxv9FmYAr7gJqY2PpE1VAaXYuvPM3gsCjtZ",
  "key33": "2vdTHJ2Rff4RMbseX7hx6ad3q6tTdDfsMCKfErNDLQRkiCJgjcqCAedLnqMfP2qNxJUwtunLijD9dzDuc8Uejj9t",
  "key34": "2JPGn1D7LQQa6WLUMnWnpgqweDTx5yjzUmi4HoMR3pvfk8BLHWPYFZhjNynYfZtQpEXykuK3YJouXxjS18YUmXKP",
  "key35": "3Yy4ZGRjdMBJyBB7agSV6CVK65hNzUkoYwTHforCRoHfMHK46K1HoDHbbGU8euh7vvEkvoKnTDxqQcfsjeWf24bz",
  "key36": "5pACW3QvQjecyXxnuJXsqhgxdTq6csvrXiLtyPck1wVjjSgL339fiG3GtABNip1aFedUR9xbNf1mJaTJFw5TZfyF",
  "key37": "5AtUstARsLqcNzgYJuVem7TpPCQ3JL3mf82Q9tQi2jieX338FE8c4mpmPBiuVHqUsNxvEemUm4w8vHaxxovgx4jc",
  "key38": "tbUMV3Lk4BVrM9izPUujXkpM5w1Yh3g2VocXfKpsVmTmyRRjcWuvxrQC4Z2AkJiJBrYSYgvjSpJgNU4d6swkrPU",
  "key39": "3tnUwVNxr3vFovSwR3yuk4kp5YNGhUnqFKcfvYxDG28DjkA5KFCiN4S61p8cCAXJ2Zbnip5vNpe85WgdD3oKwvHh",
  "key40": "274dCoyVoSBUCnQmSaULttcsQo1t82sWRxs3u6vqBvqrdMDJDQBuamPGbiKFFjNC9zjG3tdSwqPLGNVedjnnuzJZ",
  "key41": "24xNR6ck1hVtpzZJCquT8xFKnFkn7KwfXmLTVDsXCZMcrtY3qH2USx65FPbxrkjzHAzfiUjtCB7sHSBry12tBSGg",
  "key42": "4PHo3tKNk6oqHx2XXZRqoYPNxT49N5CqG4z34TfDbhFbjaQSfhGCf9DVsn6cTyrDMKHfSoAu3E6RVYp5BC1bpRhm",
  "key43": "nZYDxLz6ATNDEhPUdCxs5FrEBFizHn6ynd8qGLeKSTXTAVGsobTNomb43bGK8s3abF38T3mrUKS3XsK2tvcekGD",
  "key44": "3UQ5yiTSaVzeCTjaf3k8UeEaQjdADWjd1s5xQp4V3RUGbPPArGZnuXyruNpu42CEiTJFAL1rVQJds8uRfdUwDQ9s",
  "key45": "4FCjUmFiAwvRQ6kYQ81vk3VQfnpimdgYeN9po5cC7odXw1KqfcC51ekYDiZ4uVtiLkoNEnLxsb9ZHyHEprrtKog6"
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
