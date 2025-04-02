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
    "2ejypmpGGmkgmRH41VPS6ife5EDytLP42W7NzcnFjmKoEfwQsZvh8Jca6p2QhnMTmQQnmaTEAz55SuSweVJRHoXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63DixMb3As46G2RF32vcV9sRbSqq7UrrmvjBGJ1ZYCk8tYrawvs8WDpnBebLn4nkHUTqVaZdEpKhJ88ZshrFXY67",
  "key1": "2Q3J18ZLhgbEeNLjekgWKoUhxtMJBbRhCiAkUc5aadEpXSXvWbBaE7Q9ocFyXBwp6YFJ1QEmAQzVqoB96EMCAPJJ",
  "key2": "hnsQtHbjdKFwcEKyEiCiztZRNLCYh196tZBYTnCNodung5QuVj57Kt73Lh4CFM26YAeCnx5NfWAhVPDrsTfvmRW",
  "key3": "2FBvLRWJBP1mbRzCJotAoeBuHDb7f4qbWynohe8XLcRiYiBL5SiSZawKoiaMfRhhgjsDZJVFBKsTWABfo5i4e6cJ",
  "key4": "4x6JKnCSFCQe56ZwYmSiQ8Cvg5WUpz9vFkqRGbyz1dGfUkYGp9zKM6xNgKSNEYch3vhYmyeAyoK7wbgkYVfEJ9su",
  "key5": "4iGv9sgp1JsUVcrfKsK7vZP8CQNXp95DxQTHGfgzWu5MnLDg1qDpEZk8PsRVRmDrGorRWTXMXcK2GuarzsxDDkmJ",
  "key6": "3zG4241oonR6YBA5A7GTb2vFxncuJP1QzxT3ExS3PXfv7hQfRraomp2mUVNdESaN5Vg8sxZuPkDmbHB9ktPScJVf",
  "key7": "o8g916equR1ttRGqDbg5SNXW2vLiuvGZyBJK84fSVVccbMcWkoVrLyBEibZAPGcMPDEWfYBsMWPUbXX8owuuqez",
  "key8": "61t6v7QhnZrtxt9qWPU8XiqDZvVmAw4Rut4xAhqkXKB3kW639NqamYEsPh86wuTG6GesH4YCier3BACMBfYb2fCs",
  "key9": "3A1XiK3p9VvtQM2XhRjCxdg7EARbCRvridiguJRUq2MtNYYDv7nHTQeyjyquMWqTnabDg286vEbUaLwByL1egDCd",
  "key10": "2mCh1BHgueteJnQTtSjv6mRHiCQL55xgE4dgV8yB2xFvExTn15Bx5ViUVZu5nFsF27vReFXCExBNY32ryz5YHSeL",
  "key11": "3r7LXdbCZEJCmPLhwURV7y6VZdLWSzmLPfVLYreJUHPWnmKEB1ApGkSrdEsox4Lfw5VHZ4w5mFQLxyiG45YFG2A1",
  "key12": "2x7usjjay4ceCPKS8VsXkfQZ93oG9Mfd4DUFHth3iVihppB9tqkF4EkbhZsnFPQCr4fjQVEA5aoDvKS1yAhhCaiR",
  "key13": "5QbmFy8sT84uzZCiGF4Vme6xbMMz1NLtUZFoEXV4Tjg6yQhbTijwbnfzEARhGU7qusv9GzP147zQaf1q9UVL3h9x",
  "key14": "4Aj7mHsD5ejuXYvhnDqdegMTpKr9HXaogF55LDuTUUN4dFxjJHevayFM38mYZ9Cfy26FAofhaaJyURMyuag1VEhz",
  "key15": "3ssnw7nRMA6j6hbcvT4iCqaMYDVQKKMFeRnZXZoqrFiBR2ZFKZpoQXAaBYbr8Wq8YJaUECdrL27zf54MtPh8SfvF",
  "key16": "HkQ92utHsiEqJsBjJM9XEgJhTg5yiBFubYNYwZ5W27UnV97CXuvJaWG5RtZ9p8U7mGKyerRTXGmos3xERnDDEf4",
  "key17": "5hkXnVgtCjRgs8UEPxb8H4mziJ3FxKECmd9uwW9cHfbeBf6g3VvLi2NSJkBw5LV5nQZHhG8rwUebVdHzL9NR3csS",
  "key18": "64AyKhZfNHe3JaNtpGFwQPM6vYMLEs8ogXwCRhNv3kAFa2PekCFAbNJSc4u2AtCREmqee2sngiJG9HhFnfGpnZou",
  "key19": "48nmQ9TH3kXwK9GPMgEqnd1eWtPmGhSjjgrTJqzg2nRpMbgFaYrhAiW3B69DJ78QCBuAVMR3GgSVyUsgvcNPVZci",
  "key20": "4pzNF1MUszBo2ZpPkNpnqwtnmxXogsHqWy1RejH5Uf4ib5tRNCVpq7nUNkkTukr7znizbxg88JDXW36byD2Wkv2N",
  "key21": "3psgaLLfmBy5pdzofmD5s4FXX6TwxjWE5aFNctWSemm2dczUMTdpU9CuS7RTkpYeQd3iqCPVTTeMxvwBL9osS2B",
  "key22": "5e86ois9F6L4vQPGC3xKSTe4Pru1FHULNFNArrYRCBRSYBkJYpC8mHf21pzWxh9knsjqATZfrfVb8oT3ivP1Epq5",
  "key23": "3VFT4R32xxZWgA21qXmkErmhPMR6CkAw48UK7DcijQa6M5iMfB1Gtweb3m3Q4nkv6Qe68qJmbJBk6FqMxzmyFo2K",
  "key24": "2WokvA4948Cuy1Z4KZRvqrmXhg5uypyk8RAcodV4RGMTcSoVjRPEykeSy4CckCA7o7wut6YayzgbGLHwhReDNNKg",
  "key25": "5YMenEsbqybGv38H5GR1DQxkLepyoJD1Bi3DSAT6wqB1ZDnLvjAnKpRNWwv7E5ogpTTdxfRzVeF4NcuFhPfS3BCJ",
  "key26": "2qN4njujXUaqBBHs1veZLG8mZWfpNV472SsCN8NEhhVJwhVouzN77eghDbHoSDeoaE4aCxQRGT5xmMkFoKP944GM",
  "key27": "3Uqk6UMVsM4Zg3UWiEffYVqcbSGdRuMvhRKATXetjdhfdtPYY87aDmcrxzeHvkmwLKKsB83krRvVioG7J1RTxz8",
  "key28": "USN35ZUjeUr71eNM2jMqDTQaV44Ffr76CmPxrK8jgCXUFffFTXGqabC8iupYzMvxWSqjbv5AJ9XzpRwpn5eh2x6",
  "key29": "4KvwP7fti6bc7in9xqYesW5wPPqNjup3PZWqJbh1tsUBU5qVXhsqBDyVWFLqvvFWeBWKErG98QmYVqnsmY8MbFRR",
  "key30": "3jhUgT7cyvyHKEMA1ePNvNrWVpnTqRoQn7ofoeSVUFMUcJfkY9PRtyyJqcuENbMDwRi65N6a5njGeAVgYsR9N7xx",
  "key31": "5VFDMsKpcAEvrdfE6muqnUVQTwfxAdMUdZ1toojD6RKFGM4pPJPj8hT3mZDHcSH17xL29dQcvb5MMLESxyZemwgx",
  "key32": "5pyeiq5uVpXPW4kEjTCudg7hF6hx4gbjVFALUvhVwLMdXXUjJ88Aw78KHLxBZRdmumyrJGs3paLYwu1GVH2Mn5N1",
  "key33": "3HHuhJeKMNbuNGL4uwwjKqjJ41AnXebNNXj4sd2g6HYYWxqVV3kojAGcY4Re5sJC3b3BU3iM8KTbEidqpMZ1EyWr",
  "key34": "293XXu365C3EKHNQg89cZfxuYhKfPqq7haFPEQ97aH8v5HsXmiFvu24zDYkECTLGh3ELGzCpXgj2zzv6xTE6tMSu",
  "key35": "4qvtjSjMHGMY5n11dBiQ2MsjXftcAjMMdzF3iJNebHxxWNgzy8mK9kbQ5BPkTewfJhML8geRdDNVCTChafH91oC2",
  "key36": "5LB22eBv1TUftdNPgchM82qrroVwct9dYZUBERK4eu6eNBa8nGNGMCA4t5GFa9Ly4njNyv9Aqe52NXmdTH5VujDN",
  "key37": "2cPGPJwgnw2jWjWJg7oVvgz1oWZPa4VgzdDEtexrLtjYZakHMR73Cp4dxgC24WjLsGCgSGThTxBarKQMk7tr6M2D",
  "key38": "2tu7fYp1cgR8vEbo9iVozxJHVrxDv9GPoTZzDzEFZiSJ5ehrTrFVN5A9p1ipUTqsCsCpMeJQySAZNgxfkVfY1Pr7",
  "key39": "4HVwdfESamKu6HXw1wraKBASnfs4LH6Yvruu4GgjrVxWKE5FQHsm8tczN6DsErjx1bzZospBsDYxyypyo3J55UX1"
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
