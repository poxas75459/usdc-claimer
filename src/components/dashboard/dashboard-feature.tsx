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
    "5K22PLzq3bQFFQsy97ad1kQwSfbqFjm5KfpRaHQQdAsKsoBY4BcZPc6hn51HhAo66fM2VRbL7VbT5zqWcSmS6QuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4keut98aWMSnD9PrX445G3KaCdrXfDDrZ8Bek3QHbnPxb3BxG3UEkS8dgfgk3stpa7WGFnVviTjE2r3a7XiLjWz7",
  "key1": "5qdCQ4RVe74m2mTVZhWtHQMCR8y3tASgKYAo4pZPf8SNYiH3M9rcX8YU9mpBzoQhfzgLvpZjvYiwwLSJHFC1EQN9",
  "key2": "5Y8MXxh2EWqEtiiLk5cePK129icGDF7wkevuiPUXbtroignRzQtHZDjJawQ9NhhvvV21HyyzNmPD9JWK7F1XNNss",
  "key3": "453WnA2hjVEchLY4C1gpBsvXtbNwG2BZ6kdKTsEmp1tnrnYKptmkSv6tWa2uKuPMc4yxAvKvYKG56JDyhJkrXqxg",
  "key4": "RxYeMkLVg1eZbo74W6MWvE3a3rEMGw5JpQGZJzAoSfwxZdHsJDaBQAxGtMmAxqT4DFwyPF3Zvb5oXi9WZNyadqA",
  "key5": "NVTReSQvVDMKRCYqQYnx5Kxvz4rXfYcQP9ujFvk8Vy8fJu8KnbBkpnGECoAaZywJfm7nevyMy3ZvSTWK2d5Ai3p",
  "key6": "4ic7HkfLqsBMxABGzSR1f78chNLWyeHnCSD5EMrhPsgu6SKiZA47PodhVsqzBABhkw3nUiwyM118QG2FQRyvWw7h",
  "key7": "4SFkDRUn2z5nKe8MN1p9Da5v7ryGk5y7XzJqg778z2crs7Tri7qmf8gsWz2MDwnaCpbpxTznTKJMku2diCjG5h1h",
  "key8": "39fc9BggjiVy722eTemgcT8sueGEd8ghVDPCT4B7mgAWhXeYemVx9rqNYVBRb83J2kY3xeFqJEmQDJV4PbBhUEzh",
  "key9": "43YGiZynB9kr6cR5pS8WsJitTTtpBP7sbeapXKpxMfeyYGN3HzB1BFvTzaZgjMNwAMsUHdcqSidq9cy5wT8mnDbj",
  "key10": "4eJuEtnBhkviyC2DZDyE47Bg3C5yA3fwV3T34UhNqzN2ALZs2VpAnbAT6VmMirQKB4a43kVwVyN5VwU5DubZirn4",
  "key11": "3i3RQ1C4fKbe5QGJCH1VU2XZSTWVDeAgsVJkbApri2P15vBxhFRVgFG4yiQrXMsTouHC4K7LRhWXTrWkYvTWd2ko",
  "key12": "4Ufs6ygq2YGuPVKbsM6kf9hjBr4qf6fQUxpFgjKpCVKBxdQ7roYDZB69B47F5kY4paoXVAVxuCV2ojXpEfZtR7bB",
  "key13": "5HCGL8cGrZeakfS2mqezNKHDDuo2kS5Q1Z1zfNAuodEtWKxyhxuWsgp1BiNNpgnKwHVjSEJaXN9D19CRjJ3QzYTW",
  "key14": "2CnWdWmVYvEPXoaPZU1uHwfMYgSRcjwAgmH2bY3Pe97snkrhsGs5rN9SdcvS8KU1esMjqwkh8tdAR8VPgvbDBdo5",
  "key15": "ki1jUbwqU3LW52WRrgLps6ovkffnzb961qWynvnX5jo2emCabrtN6sRFLbMrP5WgGdELUXJeUnpf52Z5BQdXtRB",
  "key16": "4vgWx2vU6NpKNmG5rAuyRBmL3doPNHjB513oHUHNKVjLsY6FDwkcdiuidiZPZ7SAZZvoL4r2XgFT7B91hdKYvcpy",
  "key17": "UV7VD7JrXja3EQEYVGUTPnZnLgfiWyE3Bsb59vFfPi7YSk66bVmC1Rd4KbkenWXSdigtWLHEuQeKeDc56Cknn1o",
  "key18": "4gSAQz5UarRF2MvFYyJ2ZQQwuWj3v5XrqPzPPcfbodWraE3AN5AFW15UVPpsyHQX142MxcC9j7mUxF3xw9VFifpz",
  "key19": "4tjmFPWRzEsG8FPGPe27Yf5EKhY6EvUBN4ZjKr2W514ipnUhwReTsb8UXvwRh3zE7SMTpEfyYMv6zfcQ9TqSftRe",
  "key20": "3QWytWPi36Vq2nNgKNnuomxUQEGLd6717Ei6w6Phdjs4nvFGBnWGgVgSwQWM3FPE1fsq4oW2UZTN981BdeGyyuxa",
  "key21": "3X3qBp3z9ci2yiAVDcP4ioWHyAA6DabdXi48cWZgJPJCSamH4LzfhaYk9j5JTnUYnhY1YESZ18vYaHKHcxDBFgvq",
  "key22": "4KRoCKfWcejEUa6VqqvvdJ7wF17qY7hruoPjMPwwBsXhdwmCy6WrjKJUYKKs1DDW8aZYfSCGgFHDjugCoeku4rcw",
  "key23": "wMk8iKmCrvpdN3pB3EZgBozCfVdL5bCAjv1Xc1GrWirSixhE9FFdSoiCLmWHQeXKUVafW68VKhr4YVCAaxrKaNe",
  "key24": "372V3EZJ1ZFVfRv5HPrxPSFKMHZWRuR86BMj4RXvjEShZjvpxHwNBFMUVDH9yCoC3TfnPZoViBGehbHLFMqcu3Ug",
  "key25": "2KBf8gw1koBbw8jHitEyTjgb1vrghM3q54NWijcnXE5v7M1Rtxzn5ZHdTCwaWZGzheqsiuTs7cWmUxreJ1Kboz2B",
  "key26": "2Y9zTmw9woo5Qhfy2GUva3Ntj9qzUJyrbMBroDhEVKhUYWzrptJiy6uMLNR94qoiqzSzsizM77g4GJ3FTRRy3uzK",
  "key27": "4yHoP9Cd3nY5se3NqeC2wFcrLD1VUJAEo81RLDooz8j99ed8UFN2A5ZVxUYE8A4EoxyiBkwSSMnMGDhcFfVstRNH",
  "key28": "2xZQ2BGTcBgsS8hpxBmJ3RsqLq6tFpeyuaFM2btHtSYxFWYNntqf9QTnqJHxmfD1Xh7vyPxXxUVqnaxYDyEfd5hf",
  "key29": "5smi83w4aR51oJRBeaRC5dR4MYBGKKpQUGppRqeWw1n4UTNe1o3iYP8Ho4dNfwqda6YAzYK3avdmayGrcc9Y75He",
  "key30": "5vMpaKuF5poj346srU6MkzDPtEBwuxWaYtz2opWgUwepxgYcnfJMUyVJxFUstLEU6BpwjJqhZgc1VZCn67czoFPe",
  "key31": "2eC9vW9Xbva9qABpQopN5ve25reYmnz36whGua5nrWmw6CUbqsWq52gXJjVBfqZpus8m5qJCZYv7r9afVsuUSySZ",
  "key32": "35iTuj1Y313n11Y3BjsUVjTg4kDnnEU2p7NaP5g2Xv6kNmazm1nKwPaVDXmYKhMCm5w26DP3aJLeP2sErp7m35jk",
  "key33": "3xv6yrcHjHcYo7xdLjUQAbWVB3ZMsTYiCjzyt92H9V2depMT2jdhz26hP6R5iVXidem4d6xX3P1SXN5mzwd9tzhy",
  "key34": "B243cjWyeGR2StRwgPnCepLWRHbrrmazkMwmxP9njVQ2hgFaLwtLqawpQnHBH6b29VFKLxmo2ac53ZeECrzb6cK",
  "key35": "5Z5Bf8AWE6sYTVhvWK8rcAf8r4Nr5vkuiNjQ3VR3n2XLd2eVd2KY7w6C1zR6D9xY7gSRmvqmCeTBBbw3qjtErS76",
  "key36": "4dAtuFuR4atA1xtfeWBUVRZ7nNF2QCrevkeh9jyfsA5CAVUt5otNFadvF3jXT6rJjns3zofCXKUXQSe44DtLxLBR",
  "key37": "QAy16f4pXcaYnsmQj4nWJXZKqqwg8NLoWCK32wxh7N95JzsKXQp3ZC2Xf1puxhrEE5xnq7mLMCPqkn9WQKL9cwa"
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
