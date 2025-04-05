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
    "2MiU3VbLLtHjq2uQ7KeJPwbdpvw8CzEEQH58yZzCKakLwoLLZSFi4uChRSPQwnFLiXKQLpaFipcVbfDW2RnHC3bU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rxoUirHzJULeo8Mpne9si3NM7SZG4j8p39v34vtvqSb941z8NvMvoUR2vNGiSrLNtAnauixc63txgjqzeXJeuZc",
  "key1": "3nWxAFVcgQ7yVsz5iyQmbyta9NsUM31go4DKbrH34PvRxAQZ1hE8LPCMYgfw6kgoGkK4nguQH5w2kAE6pe9LR1xq",
  "key2": "9hnXo9XcvMhhQ6AjrkkjrGfDSmM9APHwBmiwkcgdx6L4Kq26TfecgucRzBpZReJX1tXEmJKKks1ejMgNLyrSRyA",
  "key3": "2BpbUhuK4S9c9117czK8NVVGwGs1xhtxvvfJyiwG6Sjb87ECDYzYGQwkviir8CeXgGAjm1Pevyy2sxDdh6ZkuKWw",
  "key4": "3GAWGpiZU5TSeh9ixEMohfQ3KDA3dm3gbBri2zp3kye9RE4awqhDxFnVF5YgZCFEnBCYCaMx21EHcj9LbnwfvP1Z",
  "key5": "3DmJi9DMaNrqkjY34wTDTN7cwRtsuyNBmWM8oYhZFNGPsor1Xm51ZiZutbEXycPsVLwhcWf295nvHjcTZjL37aux",
  "key6": "59oKaQLRNm6RZME16DQj2H8iZvhBLsABRD1NVkQ9o9pyWE83nVnFUhpvDpjeXciQhsZjDJSLTrrGmhXDt8t8uAqs",
  "key7": "51YTKGneEdPFGV4aMNXDhhFbVBmWGdV8qsgdGMWsmY6QRQ4Huz6qJcCN1GZktnARBKRYHSbSxDyRkgk7WtGXjZst",
  "key8": "3austh41GfcRGyHytqBiFDz7Fo51pb2s7iK8Zmsx9P6RYE4Cv1fuEkcf7fxrnoA8brXashhG4nA647RncShhPNpZ",
  "key9": "59n7PWxW4ALbuRkPyPJUgnpUzPKpDBTyHmQGTWTCfr2w3yzunio3qnvjtnR6Uzb4kb4bTzPZ7xi7Aom3JXb7bGHu",
  "key10": "2KLQatd84N9MXfJDiVXr7oywg4GwMVtndP5uzggkMNnvzY6TQKLiJvB7Vf6DCckPNuaNc1f8E2t7ExBzb5NoryM3",
  "key11": "4pF3bk9fPbFWytH9pcnPJyusXrAcZgpze4A9MVzdsuGSb21tztVSM2P9L9Nq2z6TrQjpSt46gjmkZjoEFPRUb7Dt",
  "key12": "3N4ooKKjB5k16xyit7vXc2DRVhmQQsq8uyxsx9cHv1wkU8yebuvRknYtY3YGFd8bz874uBWzKdfWHRZhHXoDqrH2",
  "key13": "3ndFJaudb2bZvxrFBkVQ6hH4Ey8H42m8mCosxogmnpPjQvo59WSs9gaiZPo5VXvYNsfrioSR2AuJgVp9KFrCtgG9",
  "key14": "2oKU4Jyvmu3RzwXhBEhERQpnJMuCkkNNv2pk9bvCwD14UDXJfzNsNVjngRpXKhfgu5JoCMyHgPgVBACvQ9Chz133",
  "key15": "2mJVRThkvDGK6bFP1zjWJsY4LXzDT5UH8bXzB4BQfEsRMnAuP6onenGKoioPpVWctF7J1zphHHLXiu2Kr3BnVX2u",
  "key16": "4Ybfno57rSLG6V3Trn7v8GL76vJAG14RPAKBadhZFjpGBJjjnsTPSi2frYZorsiLNToYW9jvn4XkwozKjGV8i1Sg",
  "key17": "3CCNocET8WLL7HeVQpxE4xRaWxHZXkAVpG1aFCYLeytWZ66gYinoMRaXeS4o1EwESYwaWBvmThacvQFYSiLwwzUi",
  "key18": "2vk1xS74Mus9XUvaTmFrCyfquU6sDpyPwK6RqTr68EMEBH6oTUMdfvoijqaDkWGMsMLuoNWW9PSTG2PxwjyPtC4y",
  "key19": "46xdY3dfXXgcUT9zSEHKHyt4ZuCCNHniKwAgLsvYXNrQRieQe9cgsgwvqfabfFDwxFKpMQjEuZm4hjKqFwPw4fFm",
  "key20": "5TLnT576S5K5Y4psc69BJ1XN9NoRcYVp5cWMjPxjTnn1WaKLmiDnGfoypcB4xAHmVd5sxGCeFJ47Ph4wCweANc2G",
  "key21": "5yxCQhhF1w1izewzL8V5dP4F9D5ZzjGr8BwxzqPYUs6cviEs9sPtqHGC5hktzw4fuACxA9ZrHne8bbGWSaZXCCBk",
  "key22": "428ucgKDiKHwfQujcTBA6fNV3PX1WnxzGLHcppDFFuxH1kS5giCYEefoLDhwrbPuN9zirPMYfN9FX8XkiFj3RVfb",
  "key23": "4XHT6SNVDe9N2f8vsponNf6KjYdc3GPVEDq4YtJwEGPaocqM33tCVfATybKXwtkuyZXiAMwM6ois6bnfyiK3UfUp",
  "key24": "3d9qKHnG4Y1c7WFRDPsLBVvQujcBZ2QaZJ3QT4r5VF1d9yx8fAyBy4CAS4edEfzEyKX1rSiJSfoVZ4bvDV9G4fL6",
  "key25": "4AFkfAc6Js3MUFUrsN8ZLiR7tBJz7ZU2F2ej4JSMfDn5zrZY3vaKNei6xpsH1E3xkU9hdREWnn1wseiLfGWt4BW1",
  "key26": "rm3JKuMoZH86a7Wck985RoR6q1XxqkrYq4a4D61FkysoZfGMUYdGrJQUJJhuLZ44c664VJkApNPrusQEpLBb4MN",
  "key27": "5remhKzMvCT8cjRP7DjT4c6k4SDEAGK7dm5BSKckfFcHxHT4v9NngcY1RAg7jcLJEkpwBEDB7t8PyHQ7F6scMKba",
  "key28": "2nQHKCP9JZriEJVDtfKrJ7E2MkNbM6s69N7Lt4tMUjMjXFwYXKUMKVzV4in7bTznftVijvTSftgfwBULNYDktmW7",
  "key29": "53N4D1g9FRq8s3dgG6kzENAiGuXRSU3GWTA2tLysYwWMo3ZGri73EwtpSwNMqa2guxXiceRoPFuUXpq9MWcrihun",
  "key30": "4thfK6o4b2mFh7bszuvBXdXsLxysA6vH9oebJ9Zf2tD4jeVJxa3cDWkyEcEFodW1trrED4oPN3j12uGDXrxvSPaM",
  "key31": "2Q6EzaNbF6Qh7WRrqAfGuCMu1yAwdBuKxZqJC3swP53Gr8RpSKcwTuTNor7gNNABYjLgdKNexEX3iwPKt1sMgYBd",
  "key32": "4zKkiPJPFMwQtmiuZbRWy51Jeot99VPmQkzUG3MWHesB8p7pZeK789GD1Gc21Gm76G6tcBwrjqy2cTmjHdPF3vKA",
  "key33": "3qv5tjzViJE4z44Kfr6Q8YQzQwPz2rLzy29mber6U7zqz9m8K7uSrFo9oa5LVWHugBEDy8oJesWFH7Wu7MFmPE5X",
  "key34": "X6RFrFVZyzb5M44cNrJhsYHtykQwCQAPKMENqNRUCdXvSzZzNrz734pnKGNbWk7zUz6Xah516r7WWYbVrpjd1jL",
  "key35": "3M3RtGv2WmB8BLXo9i1UnBKQNnBz1VH3FNSnb2o1dPZVc9SQ7kWGSz1wiYnmhjtoGaDg1EHMwLjiaCV6PrnmbJgQ",
  "key36": "4qG9uZAMCRLHB8GG8VMej8gPks3LKtHbJtP3hUimpiV65evThLqpLo6V6bFyihz2RQYA1SyFDbaUKp5XstR4YYHh",
  "key37": "4Xh3daJMQ531BpN4psE2SY6k9qR1jFBYehsrcZmSxnvAR1ViyDYWy1ozrz2FtTcinxvgsAFCQqSF11UgTuKh2Kyx",
  "key38": "VF44zo2pzZcWuSUHVB7TqUimF8wtvNkM5rbRHyVo1xbwmjrRHYFpbskde4mWJgKbiLLwfLo2xjLP7cKw3FRtRV2",
  "key39": "Kko7ksjoZvZtdTey228e8DnKToa5CUrGyMrhWUHUpG7stbaEn8n8cYCLNZ4u9MyEVPRF7R7rEFjAiJqpeYUdK2W"
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
