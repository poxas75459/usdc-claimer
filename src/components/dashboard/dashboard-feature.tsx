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
    "bspqzWkcBjq6MfENmSB4VVsZJ1gavctuc9V62diJAa1DUy61vmRxKdB7ToJ5Di5JJjifRo23ZtaGeGX6KN8K79k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJoCG6yrTkSKrMiwBoB2NSaGi54FoLQktADng5NoYkzcLriZSaiSt1UbHBrN6YhtBVT5KhoQXExQtseke9i3cxb",
  "key1": "padje2Jn4noR7zFAQ9ATQDC3D8yh3nLKboU5VHXMq8AoHqfkyvkjudHeyBgpzLfd2KLgADrkAst6mutjXKUtMpu",
  "key2": "4nAdBnw3HdvnEFxDgGAfrxxWfZBvoJdkmVnt8pTP9jVNDHJCBZcbT6jRN1s8stJp6iBS8Vxe76CpgBjv8ETuQXYx",
  "key3": "4Jd8PGhwGESHYAvAAGuUYWwD7JWK9vQEZUj2eFKRXeqVeC3f3DhGbQ5Ken91VPfMtmrVkUApvReM9LvQiw9aUucE",
  "key4": "4KUxdu8BxueRKVgksPBQVvUymjgTGpHURDQqGKxAZmhsB3W45xGGeUyGY7yWAeP85ZanoKYdL2T8roobFvvw3oLm",
  "key5": "6yQktHdcGQNysgMSxEaKi63u1Qc8S8xzGXwEruHV4PbMdbtWhQ3FpsyFUeKjYQtJDkNBa6zkUwuY2hVUfRtQMmC",
  "key6": "sLNdans5H4FpMBffJiuzRGG5JnfRvCfYpCnxuY2EWMkaL62PiCUj88aDSAd697UGf61Zj2bWL9h6vv1nLDdtsP4",
  "key7": "66nuobp7B87zdP7fBkc9jHYiAParN93TufWYQJP8qGUA7kZtHEbxSmbSPuTx4JkoCtsZTdWCJ923fWMmjFZScgnj",
  "key8": "2M1efV78fWe8DjSPSNDvXmH3d8Q71SbUTNk7SaSfushManCbgTfaybVnyEAZ1mhGMRBmBNiBB9rP8zkkLdbwvcA4",
  "key9": "2YqxHRfEVECGujw8drJSeQinvTUwyM8PXMG7zFcBvAcLWeD9CDe2wYAnCDT9TwTQVTkwr5Hh8kYuiVSJjTTcym5",
  "key10": "KTpx8U7WyzAuwPcuPUKaGQG3HC6Lx7KeiMaUtfC31ws72NHkdcZtrSkAToJiS5Kz6oCcrmeTnawfSiDQw1j6SUr",
  "key11": "3nruZXpjscXo1w7wBBigs5uDSMgEzJzb2FpGYs79cJsMQKP93KdeKiozBFzRgP8KPp9gWt9SjNgHhDGXHQh93fva",
  "key12": "spByWBzGEqfDpPRoTWAUSmmtkgBQj1JGQBpeu2c5gNAiN8WRxVtP9Tv2A2EbJoRyK9Bw8hhY48yWehSAVihmHzL",
  "key13": "4KyWEKYpS9swxiEmc9bB5jRS8hmdtpMky6E5qcHz3qqwe4CmJaN8xPy8BgTCGCYWcMGJ4VyEwoKcJVoEBNS2KKz8",
  "key14": "2CCZEtyJjyqiWRWkqWtSqBUA3LxyT5QTjqqGmdPqiC1a1swM5bgSaYVASu8qaQTNasMUnCAjZh8VRGYu4XA5SChG",
  "key15": "2QFiVwG8wd42DR5QQU619pnv5MkmCzLvS1oWRYcS9go3Y798GoDngrPVhiBhbU1LY8nR5HHnJ8qZdSTDkBQoA68z",
  "key16": "3MFVUCUWoW1NvjNSKihaq9iYyrJQHcL3iR1bDtH3Atteo6GM22i4qN5ePxVQiderD2qHDq7h8RDzw2sNrshscYJH",
  "key17": "nynpWVice37TgepczpZKQwR4LNgbWSUn6eckJjQxpRdbLyrNtD1RsgrTsUvHVVYiEuBW4KXCBqHHJE4yeC82qnr",
  "key18": "VeghrhqbjAyZs7dRV1FRxDHWUH82DLezv7PBeJZ8mtyeaXR91WwWmRjvZpxBEaemZ6VYixWSAFav7D1VG2FcVDN",
  "key19": "5LMLqRdTpzPHLLaCaxTM1WMnHSvXz6zXX3sEvW1PTCZuu43AR16p6xZV5QgZNtnfrgH1PkFTLCfywCyiuVhkJKK7",
  "key20": "5zoukeYFDjRzmmGpMEFUkgWsNU8hoE1CSTuuZEXwnNLt9jhdHw6kQ8hnnwgemP6cuN29no994DHk1wVPMmkdSehf",
  "key21": "PGgDgim9owYMKZhbETLbrKgn8UC94MsPAAiwJRoKXFrSEUtWKD38rJmRnZDLpgpofaZzvFePR35UcDwPzWYSqkt",
  "key22": "2tnjDq19yAG7froZdDUqjx7YVzQoKew331FxwhWSPd43ASLJ3zk7WnkwDYUrDzaowQs6znrE4caKBs8G9gxsNLPy",
  "key23": "Ju9Nf199QxhvweAxqvCZikuyuZr7rquddqd7fRfipYC4w1T9LgJtspNdmWEYzQNc3dhri77SstqYmrQTXKtKNVV",
  "key24": "1ZxrmTkQQLN5dAXzxn8efAPyAS2fYW6bXFDnhBgKQuKvGhkGkWWFBXTBdUT1hLKoZ2oQfK63ztEw63NGTpaWtgZ",
  "key25": "4UxpX8uPchzc3kjmFoB3k7EToLR9wPqGAZRKvtKEFhnsZWF6UsF4q6e1fziAaKBLuVETwjrMeuj3LqJPgc5VCeWN",
  "key26": "58eRVRhy8f3mBGiRFdRWaExXCSWAjH1wdiW6EUo4fr7UxghRXyC1C8WCxzNxhX4Rh43wdY4Gfuyq22BRPjzqVFQw",
  "key27": "4NuztGNfvN1fmHBc42pMC3vfvTNBEbWHWKxxycUnFcK7LhJjKp1Mra1KyLY4rt2nx5CA8U2ujL3zSEsEse1NVFqC",
  "key28": "3iydj4CxBdnX6bUwQtJv9qxzBvK78ZioC214LA4eZ44WFgXB3F55iAwGuGCac99HJ5zwqcyjosxbh22GHgDnNE4B",
  "key29": "mrw2xrV7kWE5DH6yWZkvvw2dW1vrmssaXo1aPWkdQWKJjuxXX9ahuuW46WbaksZSCmQEHMrNCW3x4K574kYkvye",
  "key30": "NwfjvC63x8WwMd1TSZRutxNDHCaz2EcppqPy6BhyugAdZ6at9U7p8r94Zpp274Qzs4uL5JMVBK57fkcjw1ZKD7Y",
  "key31": "2DNz5mJnVziMhgBdcf7Jg5dLFrmpsCgfyRaT2eg8ZTox55SD4fG7rz36drs2TWGHG4Uniu7uh4USnxrZWxwfgn8Y",
  "key32": "2yry6MQ7oLzJ3SU9mdSZLorp4djV5XLhDFGpgG3mqisD6Yd8cbwLsXHZ3JLjPRFLiFPeCv1TrBYG81CwuC8xVdmD",
  "key33": "3T2Db1xddVCVRXjVL1LRWBhrhUAmw8XXfsQFz2C5VBqk8byRhbaeiNHhpi8Bkg2kifYPDFMSS4duTMiyCNKnigAy",
  "key34": "5iiYob5LZAVdZrmnaxv9dEUPAVAzDjuXeFNQ3H25H2FQB6jQZetWsZ6fsPzAkttHED1aGYEMuYRyQLjrTA2TbJtq",
  "key35": "37nUquePqwch6DVw5YYELTHKK8YE1AARmsJBtSZgrpyvg4ixBvDXh6qtQtpD2YYmdyaJngVtdD1crsHa6EGk41gk",
  "key36": "iEKEXfNm3qrXQRUN14jdt6nHn2ZE8fqfnC1EpT5SUbWMTxaKiP7W2iUFWvfVgZtmnk19MRe97dxctg4Ew5zv6mH",
  "key37": "2QuuXGfKV8fvND68R2uaNgQDXVe7JJuA6dhh7CbHNJd4nYowyfW3LkjEzn2c1JH8s5GmE2aPixbuZdot9nqtMTtE",
  "key38": "33PB4Rt97VLUAJ9gwUtWUm6UajwHKskf9HmsK8ztBtvJpSrqk2aim4xKDQhJGhvyhsvetdsfJLaBqytmX5LAizWa",
  "key39": "5UErZojh9uRJSLBN2YnqRHrhPSfvdHsWUDBAV2pFZNdGb1ptbjtaxTm1d2zBLPpzmgHsau33XUMWGG3TDqh9QDfM"
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
