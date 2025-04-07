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
    "4WCF79DWQWF8g9CgvCAEDBFH8UVcYUSduJWtDk6G2oeNdQYy57pan8Lu4SpWZH1vmVP6WfSh8zgUDchyV9YGx4Dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hgGLdUdPEHsY6G3wSarGnS3XD5UfZu3SGYdU6TC6L84A4ucKiTfsDt5BDX4PzW6nS81TGQayWbHEBUXJPLxyDnw",
  "key1": "WS4McQdgc7YEJvNMq626idLKL5gGY9pH3txRPejRCT5CqSHAj2VvappdT84DujBsz52JHN9oKr462M2PBZg9ksE",
  "key2": "HdSxj4PZkuBvhbxdmUWu6eoTtn6ydExian9YmTgpiPh3afzG154kynHDWan9cPqBy7mMJF94uPdGiHbbEMoPJBQ",
  "key3": "bD812mWc3Zdxj2bagtUaNhNKaiuBcoQCPvW4UaVyqdwwxcAs15iSLcAfpH1R8MgQcXDXVqSvpR2DrdDWtKu5D5A",
  "key4": "57mH2jdezbvtHh2zg2hbRuxeQwPtHJRBHkpDDCerTgw5ka2uuvXWxzoq1mtfwpQqBHaynkfoRxpc34GCEe71bGce",
  "key5": "3WRRw8jwcUgPqTakkfobvGBT555bZQP4Bz6oc6m52cWQEB27BwmUnQoC1mt2nEokYdvXe58C2FR6YwaHabJLeJTr",
  "key6": "Wr2yKMomJtWpkYvaTcGQ9BJwqMDhutdjMTNGvKMgdM3dSj1khexWU6puDgWUAn2Pjy7TA2wds2K3JPgp32eRsZH",
  "key7": "3R4Nr7JDM9GZsnoZYCusPrJ1TxCJSKAZHcyY36eHJ8mFr4uk8njHzWTd3vAKdjn2BP3k4oMCnokH7zzb3T1hj4XR",
  "key8": "4QWdU34R96m5EZmV4fzedYJMrQh2Ath7SiwCQQ3ZQ4pj7Db47cGEKPanPv68Yztas5FYAFaQYNv9c47g27dHkpD8",
  "key9": "5zGnGjBFBYz2ryfBpZyq6w5hHt3niouM4nrNRdQaRdAapA8ZJ7t5Pqskf2wWXRuNnibHPyLvTY4F6k7p391kHLx1",
  "key10": "4JDW4gSXZDcJsneeYGQrwzk3XySjFdzDoKJe48U6tE7bSuUqDsmAYeJzDew3zbjcTa1gADDbRL2P1JgS9UG7Qdjh",
  "key11": "51r3AXPF8HXL9gbVEb9XRUg5xM8yoA34uxedmeGyqsQ67d8ibaZhnoBwtCc9LHVmdCj7Hhd3PXSwC8Fhv6APU155",
  "key12": "21esZV8gQKPh9SCVnV1LPhadwSBY9bUov1ptE59pFYU5ghvDaM82ef4mBAqPWaFUBKGsA5N3P9LdkSQjYFCTSc8k",
  "key13": "5MzHPBRS7b6i1mYG7dEinLzsL2pUHd7rEqXnckLahXXWW48AYT1487Wmsx9HkHiwGCad1sk23vfu6BrsWDoRFwPw",
  "key14": "oAbFFBAcMqTzSaZfV2zfh5P6BwXnXEQoyFDnYxDSHHa6Y5SeNHju6GenmSGgo3jd8NStC9reUXsEn3Z5Jh7jWMz",
  "key15": "5Rk3sJz9DLPDAjHm9SXbrnCse1nmtkE3bUYTjVvr9hNf3G7EMDfbnjziQ5CqagZ5uqyYroR29M9bNfUsBD4BLRRq",
  "key16": "4acRsLrGwGuqMA7Ne7d7tt8yQdoivLVyCzyqVq2CdNC4w25Mnp37rw4CiyaQBZEDm7DLMsia7oU2AnqvMPc4aKb7",
  "key17": "4j1bPQc3AzkXRp9gmtghsUs3y88bZc5Xe2a74GaYkFgmgeBbbPedVnHqZf8bUFDja3PNgoWmFsi1VGKPcLYe1wqB",
  "key18": "241rQN2W83vp8k9yj9Ck386CpTPTueAS393QESFz7ZcXcECqFjZg1eoQPSjTpqtetRREFWbStaREBJf72wBdLQKw",
  "key19": "2KF6wQQaNRNnacNDCkhtgmSqWdH7tFd6q3hTrcj2K5muT5sQBdWFN3U4LqTAHAfBJmmxbEPXGhbqcLkWaAAGkj2C",
  "key20": "4pr3DZ9CbrqaemXWrrN6WfgL83wpuGTCmF9DE2HzafAQpfABAqzZ6gE4JGojbZqcdkNsV7ZwdpxYmVZeNEcaUDmR",
  "key21": "23ZaX2mg7Vw7q9iS8QNCbbpceMa7pesc5eGofGrdeDkuW5s5wpFBZ1SVfLiaL18FGPkTfjESgQLQccMFUqEGSrc1",
  "key22": "3VHcxmZfpEjVb2XHjLRqbj8ACdCnznSFepbNtfhvuL2npAirNRuyBiKL9BY3EzHttLCyubNoEYRh36SNGqWQcspd",
  "key23": "YCEPEMdXF54AhMkgQxi7k3Ak557NSupK3dyqqYCmmVY7P3s9L1J2TVmQrrrg2cXAiK5HtUqXTFNVCpwDoKiWgSh",
  "key24": "4rHE3XBMe5yCTXcrtuzGetn6ekoSowpoaKMSrCzsFXFaPEGMf3RaeRQrpt6sLW2ZGW8j87UKRz3ETJBA7hmv2PjA",
  "key25": "PjShJyZUnwn6MDmcVZCRZGBD5dY9UBMiPsKrxUB5YFrn7J5o7s8VtdNriL9QmCfrwKav5693Hz3y2DipXp4So4i",
  "key26": "2BPV8RVWsi7yS9RH9PHLkBtETHJeoTDz9AXRUPyaDvZjX9LbX23FF2BdHXE28JnsjqEMvutdff6sckJddhEQ4Ppn",
  "key27": "27U7Jcud7hx5nNSCixQy6zw7P8uZ4XUgw97TFoMXUMHaoLK6B2kn4RtFztaz4MxAZ25JJMHkc8nmpjtDrzPhVV94",
  "key28": "v2pcN3pj6eJfiPAJECbYPkUaZnGNnxeqoCKGBKv4E6oPMNZKzaermRb8iVTzHVmbeyMpP72vkB5GoC2ppcHvgAY",
  "key29": "5YrNUvP5TgWATGdLVnuGVJxA7CjzVmkDsHpDgbpTUNTeXf4NYByNJAMejJYX1upnH31WyZAo64C3SCpt4jb6C1FW",
  "key30": "5nhzJgyvWiBinvktSUqWWejZJWHs4nyjDqg8GFfzpcuoaPw5yVfUb9F7c4s1gr3K39o2DMPSGGGn2tZiA4XF2HBP",
  "key31": "3yNqSP9NuNAMtcY8WK8VbKcL6U36hKS9qUEzrSQPsZ1Ffpc8A2uxf9qYjr3xJrM6ZJkYwiM4SPoyXywY2aHHrCiW",
  "key32": "3d5sv95o3hFviL83yEi3U7LaD7o4LNws4YDKP5oFVimPv7V9496mewztKMknHStethbtUWnH4n2hoWdWLwY6bJjo",
  "key33": "5LtGGsFRArTTG7tVosW9TN4LWaBiksm1rpEXVnxJFd2fCP8WNsu7myqkvGL97Hjtp8Z8sGfpiVBqQSLjYseegWnb",
  "key34": "3GTQG2itBhh3nouFhJ4qyJXkRkEqtCuELr4q9MkcpAV3pTT3V2NfSVW1XZfTABFEeLsXZyjuGJ7srrwEV8pcmz5a",
  "key35": "3CkLu2sRsm95CYNcmX2y9nXHh7KBBscPVRt5znBosZsDFWvfdhFCA3XteKG92DPBDADo1XuTNUY6fSegT2pzAyWM",
  "key36": "4PgKRtBSGgryKt4EYbpNmCZrx2irWSEkxf6AdgV2BwcfCBTSyC13MBeWA3c8oN9ZKtjpgu1E6dH3Ps3bnKtKzPkA",
  "key37": "5URefcChrrrgnV5Yr4122ZTVAPzZTrDTJHTVRtY2nG2qd6NtBFkwoD8VE1iZCjnDLrn1hTjWP23eVSq96KyMG5fs",
  "key38": "3Dq8DQYQtmpBD7QgNvGLJ43KazGC4HS2bT5FTrwsmgtw15GCoFG3aq65NixXKmPgLw3xngYNf1bTFyV1xQirJimS",
  "key39": "4B7ixcmvAefcA4JqTndyLXVP111R4fNYFSLxUfARi1kczNYUu3TZRgW59BuqS2AnUEK5CpPWban3Zjuzx1zCLrkJ",
  "key40": "5GecbhRPzDmQP4sXJ3EiyCDeoPKej5ni7Yu3ffuRsX2ZKTUHFVAyD1SV9NhRacUEEL6xo1HcLgupiwrq1j3AfWY3",
  "key41": "4YsvhvfP827Rso9L2wh88SFg7LC1MDd3skLXppp4CfsmNX5XUgvWgZ5qtFqhMzfpErerX7gTejVbz6px4tKn1uzU",
  "key42": "5H5Cc2F6LXEbenUd9LLUVmAeXZmwQQ9jEsbauNdTnTv8zUt6vfU1R7muKN8dduJTuv6mQhvzy2enoxMCeKzxkMBt",
  "key43": "2LQfPTaQXdSat8CfELjtmr69qAysSXFjYg8BeBqdco9tbLDXsPCvh7kNipQkKfDC5b8H61AHARKvTg6QLnVtdzbk",
  "key44": "5mKh2CnmrGNMtv8pcvpsPrN7o7HyoBF9wsoK4sAhDZRrPxL5jos9e2Y9WCdvSzu4sPrA9LhdQyoC9heB16WtywCM",
  "key45": "jn7jJKe9Beuqa8sjV7yacVKoeufN91qjr5JLqpGxmUi3bX4Ab627FqnBykMN8pypiQRfj6Cx84eGoyFA4nfFmcf"
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
