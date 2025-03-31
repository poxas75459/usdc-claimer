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
    "3K22PpDufndF45nvM7ZmVkGtFhRRzn4nhb4cxi1smiPM4tyDcEMuvLPKU6DSGmxhFUK7sbM3BxafenRnTYXAjBug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wD2RT4YZAxuFjYhG6EzKFbok7kpJ13X97xQ3XuMMhQ7moGvCftEEV7KCcZZ2VpkMbVNuXszxshy43hbXF1cLLFz",
  "key1": "4qzXLNBpUDR6oGouJctMGLzDFDNDLo9UEdJvbbasjG2KjcyaQxDf98M6uTV6ehTPy5AydkSQixxsSxdjGqQ8F12K",
  "key2": "2a4Q5gDenxMNMVTME3JnGAKBFF7Fhx8PTByfCTwDhmmNtuum6dP92r4B8AWiNpeQ4VXRvEB4pZDxaT7zETeWFgmc",
  "key3": "2eJ7cdUsksFsrasABTZPcukvNtgGomnndhBiAZqHZV1xH4716ck4W2Uw7xXHTTsNEbt9X6gEy5Dqmuiy4VbS4nEz",
  "key4": "2t3evLsfwfQT55aRoExgTQbLf9qpEtsmAtqsASPFPFMNV3BbkSFjXcF1bciURC9WHhKweizgAgApYuZLKJtcpKbV",
  "key5": "3MnYN1pYY9pgNqHyPq8UkXKwxTYWxz9f8SZsZRH2YEGG1FvPTaTU5xFD8vSNxjj6uaF1mHRHSivvQn4xtDFuwaJi",
  "key6": "5bmswhqFKQMFBAvDzJFQwvzFQY3N5QdJCAv5V9Y3yZWdCS1S2Gfi13ZV6JkwxcqusLTkcLLzHPTp38tjHvy5PfaE",
  "key7": "3J7YKLzdAteP5GCcwh9YExeqP66JEpZgQJKe1tUJb3cpaUxojjZ9kcwdw88MEy1xCXLvbMm8QFFfiTXTdxW4aXDW",
  "key8": "4brvYQffXNjADDDSqWRhHn7knpxzvQDfAuYwPNxt9UuYMqCLbYFcWTt4LuQqULejS3fRvqT6R6s661o6YbqvprN9",
  "key9": "vRJSsgnPCuREVgZFpxyk6yZDazAbzf1UrVm9KfbSXVqm7DFHfZ87CPXLfh8EkMt1jwVUWHqMEUyaQRQRoKBG8V8",
  "key10": "46U77eHnW49UJPp8RX7t7E8S7BBaU4fz6cvdRmDvrFxwkzvLixvVS8Co73aJMXrCvWBAM2Vxy1MTQNZ5Kb6pq9u8",
  "key11": "269QSyeVyaCMhSFUahQht6VeGqhzkUDEUvSLbx1mmDK3jzXnxrnq3ekjER8YMVbjGtNCr4MmQdg7Tuvk587sq71G",
  "key12": "2KLfzuwRycwgM7df3kyQBhrgfuRRUhNHcc23x2FZ4cV3c3KRzDGaqpwDLDwJ1J7mGHiZ2KSbjTnNTyGGvmEMUdmZ",
  "key13": "41WbcYbFSeHHxtmczaWEXziHk1XA9Kfpij6i6mWoUcU1TtJVm8HnD2eRXH94zGrKmdFz5zwfeC9PnoYDoMmWyAyB",
  "key14": "58iCFR1wHY4BPtipoXQGAo3PWxbV8CgfEVRwzPk1Dokobry3tjXdy5FK6KZGdk93dA4n6pZRtJSfbuwcXFbvi9h1",
  "key15": "5ki7pRxv5UeQnRYi6wA6b8TNmhZe3LAV3DKiaec74qxu8C1JqAMtCmorYJm3LD8X7GLpSLJenyT29HbuCHdCTS1M",
  "key16": "3npdMp5qS1WMdUY78FXuxTbN5ePy5bXN8NVkmTEoH71W2iMTeXP3mzxWdEzu5kZvNce5FTBBLsUFQMDSF4nMb59k",
  "key17": "5RiV9eEFZJJnNnPbSi3H5Z2tEQtoM2efGnBED8Tc5KRqv8KbrFrV8Rn6vBgb6nsA723s2Rch8wPSMBYZgoeXL1Ro",
  "key18": "2khMXm7paY4XRBg2Rvj4e8ypvMzYLeH3AFRRCZrs3YD2Koh6Qkeprf3kjCYf9XF7og7eRvk2cfzAB8XN72pcPiY8",
  "key19": "51LVHyLTA7CBdMnurgoEoPrHtv6G9ZsaN581q1gmt8uKPEDeEetnNwBghPchuWjwpcSR6HfQd5utBgY91UFkLAsV",
  "key20": "2NDkhdSjjaAcgL8BPquMqAa74gz4bN7yAxKve6juzvGSyP4CeuHpPSUUg3hsjUthpXMnWMNpH65noYnupD5ZCZdV",
  "key21": "45xkrtnQLgySCbEtAwWp9V7meGo8cxzsGoyhoB26yHyV91y8AjYLacY4NkRbSShJVwxsDTtzYk3V9pWw2qogto3k",
  "key22": "3tvxLrAoM16ptUQX1JuJ79ymHS1UB2WDp1pjYFsngd7GNWYifRC3j2NwszttyMPbVG54t2M1rCx2WAETf2fX5f9o",
  "key23": "3mggVBaKf6UgZ3fbKSHPGMp8r2FwF2Vvxg2eRrQ4HcoxiNJL9qFLpzxaseD3UCMj3xrKjc2CmBtGecAHZx8KMmnn",
  "key24": "5c4eA39Vdq4v4YG55XC5DZoVRKFa7Zrogy647GFAHUA6G7poeqeKLfziXxY1ucprTqRvGfwd3jzzLBgmVLn521yv",
  "key25": "3h4PpZoaLupdSiMzRGUSSqBFgnj5FJrYdcu2HqqNgQcuobNEeZpYKhBresnbCoewbE5nbP1TZZM7z5Bj3EevFsKR",
  "key26": "iiAFGjrTbN2Ud8h4HL52JPvcNvVT8k6Hcda8SoPMbgmc6fUY2Z5zgvqGytQbwwNCZGHcXwf6GgkGvtLpTGTMuz7",
  "key27": "26JZ51jEGnYArhFH9pL1fnMav8gAok1jFNEEetJQsczLSAgEUWV9PPKsmTcwcaTQ3zBMZoEruckQ9RLRqAdZa5XR",
  "key28": "45ttGbaBJMhswHUuBCPgkUYAVELsX5KVDM9TWYXgqPgrh1Eb8zFLA6AhkwGE1TG847HpJxVWsARD4REQFpvW5CF",
  "key29": "2W2DifBgrZwwutQKm7o2VeoLFBh4ULuGHaGcezcScQo5rgywKG1m3WUcSEDDpqbsbXVYKiNhi4iovycfjekWsgXs",
  "key30": "3WzQTCsSi73Huw7nNT6aiZVXYUnT5pfvMACaTmPnNFuKBaJP6qqkdv2Vgp91XxQPoMLo8ptyfSXcQkrQ2cCARTL2",
  "key31": "2h1uzmP2piBrG6PLfhYwNeteQ51ogRA2A6XqpuVqMBTNVNSFKXSH4rve8X3UcZY7LWngvPJMdEFLPnAruNAJUazk",
  "key32": "aKRmyv9HFZpj2YGmGqjVBcX5qM2GGhVqZc58HNiFRNyZKYekGAX3Lm4pE9WU59uyP4XPFfggfqX8dbwLWy9hQHx",
  "key33": "3KrREgapkC2oXzS2si4xdfJnLjr8616jqeSQorLBEnLAhX4HqkjMjy1ZdcD4bN6pWWnankQx7WBvNJ2qW2CZhS5c"
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
