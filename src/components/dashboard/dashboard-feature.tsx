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
    "bumTqRHSjMaJi6auz4LvkX7D33YmsJXxDzNpKpnV7zBEoM1uDQJhn2QuYpa9bdcguMicBWokwFMLM9EdmsDctp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CBdYnCsBMuCjmhdV8UkZ1MDHxcE4yuHNSnJL7ypwEqjnf29Jg3Tb4N8fTxgUVWuH1ooQb938BWnfPDB3iE8SatH",
  "key1": "5mcdm9ju8h8u7kZSm6wT4RnZkzFHrth5n9rUGprPvJuZJh73bQhBRsviSu3GRbKt8dkWSwCtce9q9gBUK1Qsv9a3",
  "key2": "4rRWcau9hNTGUcgrSFMBK52VCG5K76B1asEf8Hn38PRJD4hXEUNCSdswZkTk8bUcPGGodQkiptrdGo4dELpu2CYL",
  "key3": "3kZLJiNubwXAuhaixR8iAGFAG8yBz23rqygucoUzGJHLTMigqmeYY2uQyoaDReTbsTn6dTc3BcR5ff1nU1RCWy2B",
  "key4": "22LDVr7kbD2TDa5jtED7VE98qbGXUft8G2E7srNPSudPgHYuGxPghb8qvmumMwGfgT8ubGV3zUfo9jKwj1ZW87KV",
  "key5": "5d1jMe29R2Wv75hWtxfSuXFfxT63oJNHPnnmdENz3FwhqWieKxeeSeDFRTxa2ETUCPV6qtZc7D8DxCFUP2Hv2CFX",
  "key6": "5TUraqqhuJdYwzyJ6L6fkn7TcBQc9W9dVnmZsJkUBx3KRmSfJRM5mDosBqNeHdaNgWhCyLdywe1rJBCR4R79sg5e",
  "key7": "4rLmWV2YrC8EdiLsni9LsUMnGyYPYmgsEL8dCPobyWhHjVDzBdLUKvFUaEwyvjEiN9P62gtm2SRvn7UEP7uuevei",
  "key8": "3pmZWgvVxG8CiedYG1QP1qBkGVfYqbWkFzCzxiq9qxcnfyczjFfBghqAfgT6E4sasW2bWJHKqmUjRkxdVHpyHpY8",
  "key9": "5avkUmD4gP87Pt2bde3LNPK7U6eqaQCtko8TRMuJNS6wUKDctCjC8oQfXDhQgUe5rAZ1cRsMBm8QoxyMUV3FAt7g",
  "key10": "4t8vjsqPJGDcDWFvZUAZ1ugZk1KrgUNpz3ABJxF2bmGY5daJWnUyf5gqrX9ZhZvMWSWyrbc3pJcYjVRkJPQrrjQd",
  "key11": "2roUUDEPpvifn257ZNGPeA6bqmKvtDsr8tsHXxm8ihq79n651MZgMjxHkXbMEU5sHWg2udqr62Hab96rZ1Yqnyp7",
  "key12": "Ehx8DEQGnmo8ZxwSLn8RrB6uixcE3QA2FNUREB8ywNVKajR5u4ereXuevBLefGwW5VnNwiCd6ebS4XqQCc1yv51",
  "key13": "ukjgf1H5q59ZMUxwnQsgx9B6VcVr23PKGUCWVS3JhXxBy6cZEzB4mAkPPG5apRZ8P3PbQ1HA8Ab5Jtwm9gm9QAX",
  "key14": "4P6M39yVJBaWpuVHY7g3Ep26b4q6eHYdtzeqTDBvdBQCZjkU5SmpniJb6t12cU35cVfg7KFJW6JLYHJbz6oGfd3W",
  "key15": "3VKrdLLBngrm9zmQguJtbBaJTMT3LFFyjgrurHNAXje1MSn5dWZ4KKG5kjvgaZnckLzaA3dVef37r9gw2NKig7qc",
  "key16": "2RG29VZxdmTZTySYuAhJmyiCDPVTKYinVQyDaz8fHGdexYGPBB6sQP7JsvoBLZHJMii1xE17JfRWmThW4zczd56v",
  "key17": "4SPqUbAQRqRJMZ93z25UYAApxATtHqaJ5yn3thBLobbZGcR3JzifavUcPfvvSvEnGJZkQ6cPSCvkkrj9aWmNgswk",
  "key18": "44uaSceofBhArhay1xrS5RpHFf4wwCQPGJNNPPVnQFoY1yyyTz3TQto5faT96fQFsEa7fXSTVw1qcUhd8aujhbyA",
  "key19": "3jwpnRUXVGUeEAvwi8XAhWoBRoYgdvMCxnATT3LU96JDrEJdQHnGmZTdt7hCaX9NPx7RYewXCtBfMbt32kTHMV5Y",
  "key20": "y14uXwghhF1gohEBASPfCxo1TPJdSBMFXwYYV4aVBFEG9xNqBKjunW9GHi1PTdYyuLRRuuUBgDk5hCLdz1PDMxa",
  "key21": "23bfXtFoePZeHTnXBhnCMn6XZDqdvjf5oovY38f4u4VfyGLTpEWhuUwMxuTjycuZCY77rZiz31VY4YjSpXFCSQYC",
  "key22": "2cFHeksfisWqbTKozWdSPtHKzsjNKVwqbbyehPMNXo4mhX42FcvABbzWND7V4Y9vqg1UCB5SMCmoh7EXmzemrKQc",
  "key23": "5zUBEz9qofp5SFDmyrcqjGTuBzkiJyU3itTKqhY2SaZWRbZpzHSD7D6RaDERKutbysUjs1mDYqQbdBCuoPUDEpsF",
  "key24": "24BvQipwqntCGhDcibDkZ2TA4v5z2zipiHkXPDbx4zwE12sNjFjsGBfsMFPuBXApLE1Hd4Q22VpQshRQqVdZRpQo",
  "key25": "4w6N1wVaoiJefG5pU2Rgch7YH19hNeDGzgrsHy579XfrdkdzBYqUhrtkD1sfw5wp9fDBzrWhoxbHqaV2qYPo1RsV",
  "key26": "49mnqGoQjhwugMBWTsZCFdNKRtjiJpjdCP7eViscWAcbFSEf6pvKMvoPxc73wYYj3TXfbUNuXipxCRyUPksKJK3f",
  "key27": "2QGJJCdj8VPZLWf6Ssb9FmxsELBdKSm1nA8VJcSyTpC4BCzp1GbJLiqTKgSLzaZ9KQvxYWMSDNB5morkPRMRRUEG",
  "key28": "UH42cE1f5DfXw13QKvGCk4dKaJndCk3wHvahRNWN2PsaZZcBuzhSLSbmndMw1XM5kyyoymh7BFJrdRudui6Akj3",
  "key29": "3GbupkgvSnijgB1SSLhvofApaf2yxCbVKBr62XjB12NTS9XqHUmQgqNr4y39Z6C9gNNAWEed3UCMgRRwEsctehSD",
  "key30": "5aDjdkH89SxXGugavkgXACHRAxRRmnecXL2LzwLg1YPh3GDdM3H5Nei8WNpN2UBu1Jk4W33h1jTSFJ886wWi37gj",
  "key31": "3USty7ah9HkxhY76mgVhFn2v4fVwpLXMJULvZG9hFAH2Zy4CnngXv7XXnQPB6HvMDTruJGuVF8ddjP8gguFCq5h7",
  "key32": "4hMsdZbHvvYiaBUzMoQwgNbkgEQBAcBQzwZ9vDF46XZUWBgvSqvYTF2sys9XkuoYz4TTMpHeUAH6PSM4pZVr1KEi",
  "key33": "5zekPDNjcDQhCggQYZin1HTLFDZsq1nthEVyZAV3qqg6odY79Zevdq6itMnAEybgUDMLDcUtVRnT1v1XJ3uJTWLd",
  "key34": "3d5iwg9MMjSzemCvzff6nkdE5L3LMaCjBkVgbGBpbXUuu8VtLd1qJH8Gvig5n76AkC6BqHCN9VzJXyZR8StvBRCh",
  "key35": "yNBc3bTwSFd1aGpprWyey6ZDkPh8bMZSFb4VJj6wmUxvMm6RF2DWCf8HkAgekYgRM3qtKqzBXP4B5HCFthzBr39",
  "key36": "43BTArG1fgFThgXsJvKo7gwKce9d8EhVQE7iTmfYDbVQZFHCZu1GbjPcBu7jYYYrrK2C4zqKyyy3a3iqJkupPmXp"
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
