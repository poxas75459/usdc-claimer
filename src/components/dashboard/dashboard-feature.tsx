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
    "58oy6qrATGu3mNS96SoLBTyWZHVuL8nUqQvFukeAUSpNxA95ZBHHbnbdmz9WeHXWSggxhvZuhpdA2ceoZWm4RuEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tchGJgU3n4AZWW3RW97yB3Q1Ns7bwsSTE3sPvLBg5ccpFpE2gXgRz29pyQSXpvEif5tLZxCmxvm3baxQdZpga8J",
  "key1": "2KPaUS5oYE17QE9NkN5NFEDYovkvRUir3ieUjnukBc28ZzhGySA8CLVRGxztssUjPBizLSM57uK6UiSTqzuNzm5C",
  "key2": "4fuCdsrrrBYo7CPu1jWzjNKqBCwsqB2u5QNnim3h7FMtoTb5n8mzL7tGvzDFdyq1q3KTQ1z7Pkjyxes2vncvAr4A",
  "key3": "4hPTp3fQNAq8ZSn8LWRbmxmjVwAwj8jpaUrmRJGsjWnTdije7acEz3b1wLtjj1CsGSKDXvLusaw438FVLc5cgx9b",
  "key4": "2mAXRTFEMWcdzPdq9wq88qsFsTTVePXDKeif9PYfFhxYe9vQN75sBRzXKS9D2JDJfHPg8RcYmjH6z99r9FxzDY5z",
  "key5": "pU7QYFvBE8uMKWrhGs9xk8oj1TzD7kezHyf7PDWEFnePwkBnYixfi3CH35VTsyxdTH1oeYSFeHmcytRNrxB8gWf",
  "key6": "eBfSakbpGyncCPKdSP7DvSdjP41gZ1kQRQZJYwccFZd3TB2hWNcg56p8JwwsG4x8qxQPUjhyvHCn9HCRmEWnANU",
  "key7": "2JEhYitQufxGLePjrUbzA4cfSDTbYJUmge4hTpzZ7Q2n8E4wU5cZJJGngHoeYMmKiZUoJTt9LJBGnrEPfaEc9z4o",
  "key8": "3AmRFEY3nhaq2DVRAr6bycGFHk2tuSYoNBQDpbYV8zrb2wD8uKKHqWhvD2JYC2cPa4WAB3QFyHdepE66z4uAtNdg",
  "key9": "3Xig2d27WDXDEsqEnqjBw3eMw2jm3ZUzZApkRmwgZbrXwcGivBk7mciv9cnAoovSKftpem6VRxJMTAfcYuY19X9E",
  "key10": "65Nfy49U6k8ABL1Lnic9p7pj9QEeLbY4k7exAH8fjGe5TRewJQxAN1AjA17CLu2mouA63y2bzGy4F1G8HZV7Z56E",
  "key11": "dhxABbAhfoTui1c8ghr5RMvLi5Mo2UEBriXF2H1MtB77Wr5s8iJJNWa2pCK8KAQRn8dmmFvGJwLowWYFdaJDCQC",
  "key12": "uy3E8Yb5nWA5qFLxJkPJpY8KmWeivz1rKrKBRnMnCMf5epCN5oKBPjgpa7A99uTzC56nBPYBEmSKLH9RiTp75wE",
  "key13": "46SG1qsW8xJcpEugft7AioiPi7wPY9sTdEZG5hcpK4TudnFgrvtZZqeTZj3bZVoWoqynUiD5rAZrpYNUsbGwY7Ap",
  "key14": "4dBNDtaWfLKsxsTgijQ7cCMb6cKXxwn1P4H2fTURjPzVpLDhEfGn8Ai5n1dzWrgcceq4Yuxm5XFCGxxPPgsvmFQr",
  "key15": "67eZS1egAYaAV6CtcnyWFFawn3W5Br9SzxJXzJAc634k9B2Hd6Cwi1Qq6STBKpm5JSnuS3HbGxT1TiTJh63vDypG",
  "key16": "3cPJBQCeNH5txod7hAtKcmSStbD3pWfgXim9Wtjaz7VKgd1yfqBkAhMX4KGwZe7hgJAJuYF5U3KxzkDY2df83XiN",
  "key17": "65Me6uGJZr1Axom5Z3cSm6t6Kp9KTV4idtNmmMb72eoHhNQhRwqVMRyJspkXoM1YyaRAAqx36HnguDCktjNp11Hc",
  "key18": "36Q8Cxcz2EJUvmdo8STxdDExWwXtosKyDwr45WRt9bjnKM2avy6132V58CBgvePjmMUBGscJMdFxr33mfF1TegSs",
  "key19": "3mSPS1bvcuqT9ihfHU9eggppwWjx8K47LdVyZipiaCNjMsWS2jeqxWMhu2kfVhe6EPX94GRqZohDxCs1zD64SK2T",
  "key20": "LyepASSPxUzHhUvaSE8Tu9AVM6ivqtR4sdJUBYLuMcbKDBdJnsH9Vb6hzvyHtYATYL5TH2VvGWP7D2xTe5ZanYE",
  "key21": "51FgAnAdwMsFGGajLz8P4XS6fos2g1vHbcmaEK9hs3Ek2oDQqJRWVY5vCAt86zGMYmWU2pr3i8GUZFda1uPnMD7z",
  "key22": "3N6hpCTGPRk2wb3tKTovKCHRZ5CYyBxmR8q465jYV1mVAgGcSZZhcQQZamzgDLvRC4sZCeHzpK1k9tnrgdMaazeK",
  "key23": "3UsJ2E2knrNV3zREoFSifMvCSSkYkCRF1Z9Y4soFfaYnExRb7i2qhj1dUi1xY4GSeLXGmwAic3JxmdtfZjp7rUvR",
  "key24": "5v1E3WoZJwfpPRCAPKcsJxhvuRhKNYsVGSzW25ZaopLnfCgSKGmeRHyjiu4j3cfDaymaWx63FmSXJ4iBBtdzCST",
  "key25": "3fn3bi1jNALrz37miE6tx91p4C838J6M193mVWfo4gvWBdcMaEXhkDy112os6eW3184qcd4BaVxfQyyCmhQfegfk",
  "key26": "2MMJUemDoMuo8HpVBRkVe3yCdA5n6ZabRtksM9tAEpjP1pmwRiXfWPKbv5PFL7bkBf5dPAM3kFc2aMrbwzszcMHJ",
  "key27": "3cgfFTyZexHib49RJH8Sj4n1ydVt1imAWjSSw8nw65tgHEgxgnjFjEBq6i15TsSLFudpZe2FrfcLTYcX6R34wuxT",
  "key28": "5EgrB8Jb1v3z5vkJCpp1KRPwbiBWJUu4JEWHDEcqrNmxbVR5fmL4RZTPWH4qNwuRg5fhn3SVkq8pkjfbe9HXHjaE",
  "key29": "3bG3mvsCrEizftdw727AzMzmP1uRxEM9i5cPsbNHn5LkkZBouGGpC7LdbUPCUFBEmdHhb6NoTuGsGbMjeE26pYy6",
  "key30": "3Fwpa5eAP48uJwFx1n1JqoNKuns7J9M42q2g2cunZMMTWYDnAo1LByne8NJkodqWiULfWkGkpbpJCesnt6hhzGbQ",
  "key31": "4nTEchnPYhCSP9hcBwyqhq24dZA721HrR6NpAPpsSBnYQCsXLeJTGVqr78ohLvCLL2dTnHLuz1KcHdjmuB7xKNrg",
  "key32": "YS7Pr54dKiWAVFb3jZiJjD5ctFtYiJvqGQ5tTKw1kQpSX8Xu1AVp4YD9UCPky8KKXRfHibtmZTuVoFCAgeJ4ZVp",
  "key33": "KPKcJMS4oVXTxrgRPhCMx9VN3teL4nMQDKZaYqzasvs1hFss5bihd7nXFRPrT29bbXgFSbKDEtpz6pfMeYkd8ML",
  "key34": "28rXjwVkZFtDWpUuHLmKz3WvZyFTmhMUrHAXH8MXBbby88mRbXetQEYy6mdfDXCHZzZq2SKcy6mYNdKRtophF9By",
  "key35": "5KA3SnXqYCd8kyCvFNgXwjv1if2ztvsu5CePD84qQWV16G7yGTHV5cJVy7NZ4zAF2cMwZdL74A1U1vvZJJ4J5AfT",
  "key36": "5P8EgJ5WiS7P2AknNxznbvawdjgiyp425LYL6Dv1dVHbq64bZXQu7bV1iV1NcqEYLP542HQgN7uKknY1Te4vHDEg"
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
