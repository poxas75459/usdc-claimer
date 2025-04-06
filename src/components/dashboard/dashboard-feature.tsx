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
    "5dQ6ucFofoyT5ti4rnhTGzKRi5uPTGAEWDDboJxNbroMUUWr26mH6udTV4Ni3w2wGuNHx6B85TERTdZXjP6E8giY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VTDsGVEzof8No1PfokAsYxgEsUx1bbJnbFkfxS1bjzg1bDDmaJo4MUM8HYUvfWXy4SgyDygqJL3Fwxt7gQqvDRr",
  "key1": "4xoyFrvGSWf5wkA8Ce63z4P6YaVXA28px9BzYGWVSwKpmyX7gbNVfLiUjDgziMjLPVkRXgduEhgzt1ZfWPo3937S",
  "key2": "56nrQrNEn85cZmDsqJNsYUUmKaFvsxNpmLnwZG4TubRVbcPgJcNyq25cKPWgBW2s8hyGNhvGYz5Rr2Dq9pKzM6e5",
  "key3": "3oYgZoMnET3FYu6BkxuGUMj5VYswV3mmjunmG95uCwQ6SPSrAsw5sXo7pgjNBFj9Xie8qnXU27XGGZ8hURBsoeLr",
  "key4": "3CMGjCVCFTt4CvXZVJy6LMKZLW9p1dTr4hVCJX4h2HLDPgbAPzh8awYbxFh6ASKR2VVgsHKaZ4N7RBRNKmJmdTwV",
  "key5": "wZRppHmyNmazp5CBhvmZZ1i3dxUfGv7WAdaxL8NLHKLTy2qEA1vYeKN5jBe849yPKrgvhciwsjkhvwbEFkHHtxr",
  "key6": "498z863bDQCueQmWrPkPWnH44BBJbw8LMaWH2hfJ6YR9xCP4yn34cFbXjd9qRfV9VFVXEHEhkLuGrJLHWcN7AVvo",
  "key7": "dvv6xZ9Vg3MTT6sMRE5dFbptnnELpGeifiFzKegwP2UzofuGSrFuf5pvoQoheSWRtFLjmGCjWseiyfn1eKzC3tC",
  "key8": "4UDMp6rWZG7fBBnRjinxdNLscLuFpyaV3vBe117oXTts3gMdiVoArjmF2QdKoDmSwmfp3RtXBUDJupYUwgS37LNd",
  "key9": "xMxKzSkVY9WxBXQmDzLks4ssqVxCnT4Dz1xsF73mXas7dhRmbPDYjh14EnEmtFLcw866XYTPQpom7SR7L4gkz44",
  "key10": "79C3Xm5FBVtBtheHf4wkRzkRpZLskeW7rzGAzEjFVyw3tDAsdEH6Hs7f5NuCjocCcDMECKhs4mis5oCRV7N1Jk2",
  "key11": "5XUdMP814jVagTpvx5QCq1nuAAscBd9EwJpf5JZHuu8YjirtX2FnKeN8ghYSFQD9Rjf1KkxkgbJAqMwRoFQhU6XU",
  "key12": "A6FPD8BA7vByxN3GYpDD3awqur6zKxTqMGkdhYeg2ce2cwH266a1t1YvX6JFpTgRdrcckj2xagd3N3i2YZd1PEh",
  "key13": "41pGyHNpi2tRsoTrDXx8kE2Afo5RjMe2xtZjDPi8BonVnXsGEG7hh2sR8izTJXqAMkwSHp1BVBsug29ZJ8kona7K",
  "key14": "2WtWGLyAjjDijLWZaF5hXPv8PaZg24yvRGa19Pmuw3U5fREz8msnXNpzbiXBqxXCL3DfeJQ62UwD8HRtGAXfJAkV",
  "key15": "3Ui2sgHYVszbXR6ETeTWUDZirkWuPzBouoHURn5gdueftwLyLCuagpjNLNdws4DMwENvHNqrHudojMVtS9JwLi41",
  "key16": "4fAHBeqfexQfbzwiXQ8NVMsQ6azyxpnnizG3XudVAkmJTg2s2q9u4x5aT43i1AXxYjhGGcGs9vyfmoJoXHZcu7y1",
  "key17": "4oXoULxYQFCQXt2haqpc2ZqZMriLbCisk8wpsEWDht3gmoVDfxUAxRW6nt1nrVYtif83o7hADmY82yVbmWcEor4a",
  "key18": "4iby16AdBShVFZbiHNCTBqs2ahT8F1pJvaT6aEVVxffqzebieP6jqHLRkFicuZeqtsrLYcZG8BNGKoJymKcozZCr",
  "key19": "5vKpKsSXyBqJ8cxq5oyM4KHLcvqjS2SZe7y3rBjqKMe6hvBZ8xBeWjmvaAhvqfJvJb3D191XK3gMWZiSUWvapkZh",
  "key20": "5U3WgHmh4ZbDvk9YSq925KbNRVuavQncCkxaYSDqLysuZsXcLN7pKuSgttQTthxmYVZhLg3E1JUuJMzLEPXDpmUv",
  "key21": "3raxUjs73yxWczcmeYVc7rigHykXyAbXTdh21pWbJdPCFU8eTPA17mVH8xzwN84fYvGywbGcwmvgT9sFP65XVv95",
  "key22": "5V8bRF91RKCM8ZvxMHRf3L6PN1y4z2SGWKCMvmdzJEgi5GzRKMUxZg6ATtRg7fFYMd7m1vrRMyZXP8qZcSM1G5as",
  "key23": "5Gj3nTPirVXwqqQfoWJMDJzZEnprGWn7SxJJZvcJwqxKiaTu1qLTKrmsZFh5n9EvMxhYLYqGjgPuhi6nqwvLJNFA",
  "key24": "5KCGTSJpTCGNM5F9nFPjGn7x8sKZLJQTNncGaoWnZyY2BZd1ibJTc2szJ22feA9C2iiGDReauma1eEt6jbVvo3Qv",
  "key25": "4vCJpaeYd6YQtgAd3qgYQ1p1jmpcb13eBw8KBaMWUD7M3x27fTEttE17jpogXGt5rpvg2kVufPqWQ8oxaJkrSbxS",
  "key26": "VTmNZnhtrBP8QhubE6obWRSHBmqRqXDPUThR55GDUYbEFWttYSLEQMskPhHHX64i7o2hc1EpF4DTywrCqe15tvZ",
  "key27": "2C4qvSudj6RBdkkVjswnoNUtg3m5XFnDBxhxyPm8SaFRPWYTP6s19tPEe7QsfNRbnuyJMN7ohzKmyeJkuBmeiWwn",
  "key28": "pEThwwAdfpCkPP1UpxgyogBrZ2vyPD4jMWpA3JwaHxujsUU4Yf9wUiWLugNhTrEQ6JDnhtBEgsnFhgevxrAEL9q",
  "key29": "4S5Go8MBVSnznT5cMDbfgYV2iLH8XbKRbUuYxeyJTCtkyJyqK2PXtTH2Mt6FCTXLZDGB4tDqGXQvq7VKqRRi7s4G",
  "key30": "4Lqa2yobqtgdDtSj41yKF85uphtP5yvcW2rgv5BrJe3iVdimgnJbPRhMLMWZKgAyHPxXsbggowF9R7yrQj8D3gM3",
  "key31": "4ZRsZWVeeAJGb7LJtRogh5NuSQL7nJUmLPUmp5JEDzCUr1pH8HtoPYe2hNsmxMtZFeNKzEWNcQDxtEepMRtPgdR9",
  "key32": "24w12oCJb63Aniisdd3oqgtmtoh5aaMCGPXyL6NCQnZ2vv1qMhKsCPw7jS6qa9P2eVKVLKEJd8eqccyNXHduBGK7",
  "key33": "4wy5Lx3JNeVsCcXHJVN9cDDFs4xMJBd4NEJU8joto6y5wi2nepCCVFc2bSjQUhmUe8MphF82ivJDxvBvLpEPxmgb",
  "key34": "2xiUDJuXD4JBFREPQFaxg5XXUX3i3FQkjAjyqGQ7c4JvKTCXXcvaNobk7CTJxYcDhY2CKofrnX7cMChYLBLVVZXZ",
  "key35": "46XKpaLgYXUKAybmA1dDC9txwXzEahYKbZjHqTwcVtRLjKxPfUQ8cJs4RF79jDXHBu5c8DeURSyQzmFSDWnPXuoU",
  "key36": "gd6TDmN1roiMLQKdLibsJTBEQgCFpyEYYRP4TNRyo2x98hPPGpC4GpTt7RZpxVJ7Y9j3YuE65vKUDDahku79myJ",
  "key37": "Gj9M1A46rwZquCsfyPyJHjVCL5bn82WnT8bED9qin8SirABJw3TanHcAXRhFXwmqq8fn3kZAdRtFdF3C4EirfZ6",
  "key38": "2kyBVEP3noqKoWpE6R7atqjRggqBVcffYy6QnDSMgrxnmY8rcinEhd78K1QmUcckUG7kPHpjcYGF2xfX2mPttKsV",
  "key39": "22Y35DZt4u1USexgHz3oMpzTzc9nHKQjbcVPEMmabRN96y5gwpyC3xGQrKkfqW4RAdKM5NESc5DsVapnsjdEuqV9"
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
