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
    "5ceNenR8DMkGWJWS1NvZcwgbfsbLuDLBqsrFc6sKWBzhTGsjPpi3S6tENNhbM44v5aLLhE8HNv1wSVG3DGMbT1E9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mi1pCefot7SXKP4wssJNRfZQxL7UftaxDm9Et9Mb16uM5Vgy9d83eMrHgxpu6Ag8q45WQGCJAURdSpqGxMo1aVw",
  "key1": "5g23NVg5DQcuACxMkxAcmhH34wErnPgDZpckYWpr4aXZgdYbavPWpw6xaFXPA8X3SSdHvFgerwzYXMjtBqZNT7u3",
  "key2": "cnifbtbt97QATUCyCfrgHYbkXNa9JC5qbE72hGFkDyE8fkAGkXoru6V8y3KyAFRksk4DU1AeFn15dKhHP2dwz5c",
  "key3": "2CyukJWT7jcrFNc4MobijvHnhLCcvcnV3RgCw5V6Rt5iriwQj7Wpixx9C45156VJ3yWd4qv3DYgR6APctmJ29EDK",
  "key4": "2Dr53XnaxsnofdDiD2bhnAK4mcGyrxMFmrFVHznLTjJnDWXp5dEP1K38JjEYgNrqLNf4QzNFwdXAEwA2QgsHvjMd",
  "key5": "4NZbVdTKkw6C7kn8DGfNmwZNn2G7foShsiM4bV54dUPskR1ykusSTocyWVyjaoPsymyse13N13Lr3An7VWQrpu15",
  "key6": "4pBVw7UWWATgjt6UwWtXBYzDfZ5Q7QhS1qLEoN9rqdpcpjdFqoTSEayUBb3HNjK8p73sMviWstMirJiW9Dg5xZ4y",
  "key7": "5a7rgaUddnBpMX6e1XCNgMNA5VP2vGZvKVS9LddxF2FePtppujoDPoTs7Mfb7sDK9Jin2jyEM2PaAg3f7mUSKJzb",
  "key8": "4iWEBuWbbCkoVZsMV2DAhdmmdxUK4GetQzFQ5spLy2fz2AwvjgJNVL3frcBK9jNPLmBJKoW7XBK3uT3R2QLeRHog",
  "key9": "SjgGtuvrirNMmkVfxRidPs6r8yte1NzV87FyS9Zongz7DByZp5tNefeF7MvQcmJX4dSZsNmDPPEq2BFqKhpyXd7",
  "key10": "2hfjJFHm2LxetwXUDdyvbNkncZVJk45WWgyQavWCnjaKg76XacwzFWADfXQcBuERTbzkuvGHacKnn9DLSnviiQ37",
  "key11": "9Aus74G3opyUH9SibKpLEe2jtj4XdVwixEPESB9HHwACjZB6x1MDQZEWYJ2enpWuiNEQR4hsE4heKXL9tJjm6Y3",
  "key12": "38phEvdJvyER8tv7GKSUs6xFpEFLBxLZtvd6gqUv9rnWR4aC5XaXAz89LpubfCS9TuGn1ASWCFddzpsBgz7iY28C",
  "key13": "3qMS8gGK2cWaMSbNPVmwWbc4w9e6oNDoi1uA5Rm5exnzaVAP69QyED7WekPhgcHQ2iUpaTfzkhnsBpUXnwTTME9N",
  "key14": "3Wf6zL2jLA2j8kAciSRDLaGVhRY4MdPTF8CUCMgiV9Zm9nJ1KwUcvdTzsFk7qnCpvT9jX9DFjPMNuNHjad8jQhTS",
  "key15": "A6uepJfXM7wgc3hV4xAP6foDXAjschfRJvinfGYA7z1NPwxsYybQkyXsich7cc3z8biUE69fYiMggGcV6HYo2wT",
  "key16": "2hFTYZTRGwUUnGSvABZweSSunxeBCbRHhtZefyyGMCyDQcWdktkQnJjfeGrXEafkQ3TgWkakAxftcyxFTF8CjNAK",
  "key17": "4dVhRmQXvAxJXaopS99KFK2ABSBmBbKi4UYGJj89K74qQYFG6YThsWLgzVY72DqCXVq2aKLr9Ysg6LDECBy7wu9o",
  "key18": "pv4M51QinFVf6jXchUHp7RcczXG3RnMWx2GeG9vyRAxc8fyzgjXo6bhnwVaT5Yyi8TEuRE7oe9eJXNdmY5HoZ8R",
  "key19": "5Sbus9DWSmiuupBc9x9eH4idmyrQy2JT3HGcDiUv8hFM2EDBH7yxD8mZDgZxGCG3xSkGLRJgcRdP3NUzVGxH8qJ9",
  "key20": "5t1UuoRpbjgkxXrgcTU8AdPqRMUeatLUU7Pe8f684a9mzW8dP9JKDYT9wSMaeRb27W2pC7Lp3AW6Wo7tmp3RcY6V",
  "key21": "J5peaAWEJeLAqPPZQLFTjqwKQneDGGNtjCk3BWBrnWh8Jc3SJTYjsvnDvBiBWez7xPyVoLbdFqAsFWj7kAbFajN",
  "key22": "56FeMDggGBKAB6JSYi6j5GMa57MAif7MozsQzP4DAdQtgnDmkLCxAMPhJgpyvweoF127MJwff1MqUTJvt3LLipAo",
  "key23": "5QVCdGe6GU8gDLN9xL2mWuEnShm5qCMVXxChEJyc1jy9kBrXVh5C9ihKE6iSrqHQc5vDwHziRx2uasVoW8WXyL1o",
  "key24": "5x1xvyFSAsb3UaMZijJ7oZ8UChEQDcNmh7xqzgrwgauE7eJKnavRLfNNABn4vNfjSzFDsfKoXdb1fSovhFPMV5TN",
  "key25": "MpnbpEEeE5JbnYoyp413GcAjmGN4ZsDBskmiPhcyQn3J6P37V6Uei3bCmc2TVgxRbKHoLUuK6JmRu2Epiqp2oVg",
  "key26": "2auyEWAWFm1ESprWJ6bmfUEYtMf7opGRNmsg6qEqXwd9DkTZtqUxMfRTNQVT7pVjToxPpZrDna8tZMZx6Pbt8p9V",
  "key27": "3yRgsvNCiaGy3HrLcfddNJrL5axVHr2Dk34yXhnbrH4QR2XiUYqNVFJJeVJGK9N2kXDo7F72q7JBxz9dKHhr6kgL",
  "key28": "4RGuV4vRF1Xq581rVSFthWR6AEFARMBKV2fuVHC23Eu5ekj8FRMsT8k1vAku9Kgerd7MwDR5QCvWSmXi2JkHJut2",
  "key29": "Bmmm2gm6SAHRVNBB5zqwSm6iPtHZVJ5mRNEx3HwT7ysQPR2uzSrxvoPexFUE11hqkxLHyU2Xz2XQbtaURbyj85c",
  "key30": "5E6V65Fg5zbLK197Q4WSupf95gMAzZKio4Ub35gjHeKJ7LvvGkUWP9zAnxZPNvro8GUfapjfARH8vwTsLjZ7L2ch",
  "key31": "39CGW6Pnm7wNsACyoGNjHnBrc8xToAQCpjr27bFSPcm8J5W1xWs1f5VP8CNLgLXuxjZ1ai4A9e3FzvzdS92J6QsG",
  "key32": "3oZ8mfn3ijV4N28xWi9DugdPRGt54gQyyohV5R3UhNUdJv5J6AC8EzTF7VEDSFNumqjU6wkw9wmFK6ExF7QbvxsW",
  "key33": "2SjbMWqhxD7GAeBifAgBAPpLxeM7ziiDUPWWmrgyABntWHLGnqs5Q8WqW4VMU1B8e4qVai29295iZQbxbvL57Axe",
  "key34": "5FLcikCGecgPvvo6csfwFy4nBWYa6zNhXh4VCaEvPZ1ZrhWdCWoVsZ67y9zHkPQiZnCRBmQcnCQibMtuqFWCwCS8",
  "key35": "NhLkyQQrM9hVhu3hhw2GFPA7j9qw75v299P6Eft9gHRJeedXWqfJAkFLX6K3geVspymGnZwQiFG9XkKz22WLkiE",
  "key36": "4VBrtRY4vgPTtYnvMZaHPJFeHKCJ5GtqyReM1iyn4qmwPUJP7xyDnwBaWGb4y54fhqd9RjARpCrmPgAGNKg5WY9e",
  "key37": "5wkPUpd63EYbNMDfo9PADEJpYdvVgWzMgiVounvyNxq37NW6LgKt3Yy4k75GstguTkd9ZxZ61U63jU1G2c3k8nTJ",
  "key38": "5BdSJxPcdMZBQXR4dj8rdH1LLNj5VPnqU3Uh2QSm3mEDpvy6kgDrinurMVprrGDeEVHbkWzzNrPAHcur21evo4Es",
  "key39": "5oMJn4bHoN3XqgiX4wGpCWuj3s6CGqjuYzyUkL3YUgYfq8zga9R1x1XRgZcnhXqQKheEKS82mkuDrbe9A7pFygcw",
  "key40": "fh1F3PwwcgWKLyyDXPDp8NMM8dqUgaBUvMFnUJtWbvQj3EhhbHX3Jqnhy2bzYEsiqT4vpvcsBLQK6VspKaRvr2c",
  "key41": "32XpNz1Jhse8hc4WcHkrXNKcFqZRWEMz6ezpt4WGH4uHLzesK5xM3A9QzAtogM4Usi2mieYcvKVwTK7prr639igM",
  "key42": "ZXKwnEzmPF28yEmcvAFpwvhpBMrSwhvrnQrNLjQ4vnFhy9osjeLeCsBCMH8QetuvubZqZv5Y3MGSYXPFWNhCYrz",
  "key43": "5twed6wGR1ubqfHdPPuqdSfxmFcwjKsQiZMNVgBYU3Wm7jFjN6eG2jqoiCjoFh9AojSW2amUCYVen14kFJZcTmar",
  "key44": "34KFpFjQxGjJTMeG9DihfqTe4pV79dxbhV4vYnSRN1r3tWsKaiZEUT7K7sjJfMWTEmDvMHiLgZh1tqKvScfzLACg"
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
