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
    "5brRsxQyzTaPCaDjy1ugBCyXcGARs12jfdzhEFBgphPQWfnDN3tS11Yjp6C7wzwLStrHLdha6LAnQeCzYZZsgKEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YzZ6y6FCgjuJvjw4m2XW6o176NtgUZkCRTo94tDe36jHSBdunFdPozJYeECbEGCFT13h9aAUKvhPn9dV96eFDPa",
  "key1": "27n4HJrMFC1HcTKoeEPzFoczx91G2tC292M2AnuPGvYoE6M6zEH1Tmq7HFKyxT6acbTXEKHiaDfwm2EioAxFDcft",
  "key2": "4RwfabsmZNBdgBQrLBBE93KYbQADjtH4MuxN4dtdHV6o4iFzCGSYPpry2yEsoT2H5rnNDt3AhVEFRgyt9c8xt12R",
  "key3": "31nsvddsuzuJphRqBrQnPenK3HCKmzqDpxPRNhWir1fcVby43WPRrGdZHbrPAuGFexL4Ww4hxbVeSMNTPV4PScjz",
  "key4": "boKuCfpX3Skj6ruu3wdyxJV4iHKHYcYufD9wsddwTR5GzbhcJxMwcEKaWYBARbJjaHwWY7qbnvoZQQ7LdAFKsSb",
  "key5": "5Wy9swDsrVbm56MRqQvQNa42CvPN7yy7JYEjVynxf2CEwaXTbz9cFduTVYJMHqjPqtucrUqZA6FKEHxeCoGEsRfE",
  "key6": "wY1bUkMNhBKBQnBBamcdfcH1XUdiCKuMWnu2G2pJ4yxiMbNE2BfEJz8QyZNuH8Q85ErvEUvPfWHq5kfb5iNPJvA",
  "key7": "56Wu3iF3Jit1keiT5W6sgDWV6WqP122t1csYw1XtBR75Kyev6MAo1i2YAvtDVvrP2Km5RGunxNDsg4uuEPGMavLT",
  "key8": "2FoY5dA5yvQUfobFfodmhTbgezbk98CfyXa7hBoxr72Xh8DbyX4EhujCHFFhDBJ1Yjc27tGKSdyswqrjPGY51JNQ",
  "key9": "2Vuv32AAkCKBN3Qr1RmnP8gPoUAkExcLES4k2z8YS4nMHdPQka2C7rTp4vBruGk4qUyPX4xZS6kDZaExHXjNWuCj",
  "key10": "B2jA2f4urB8j5fbpndabKHdPDtMWMAdYQt2VD3XcbYK4mzYcgCEthnpqJ4nCbcucMjFdQnhy275AZZVpXQLBZBD",
  "key11": "2wZnK2RpaFqa1AAV7As4wm1oudACj7EN8QUCmCY633DXBanE96zwejhboXkJYbGLqwp4Q3w6EoKL7uPnhArVjL4L",
  "key12": "57hFijpJcXhoeoW6EJtXueQvc8SGQF4chjmYdQBAgD7i12Lm94Z2FPmr3RLFagpBfnknfWjTgfzmdMPbq7TUdMVA",
  "key13": "91jsjjXKLFzKghuY3pWNrJg3DviFq72pezMRDFwYiohNGCqj6atLU337KTQcr21AA3J8yBW6PYsxKyhAkmv5HUt",
  "key14": "KYPXDHXCGw9QeH8BUhkrkTfpKofnb89JFsqtYvuCT3RPoLtg994LxUXnSstRew4SYaxGZU4ipicSPpMU7bdz1BF",
  "key15": "zkCZPWxZ5oiTF27yD6JbHaoRyJfeJKfzXqEgvDtykykgaZ3hKBdNhnTfbjccwwq2xLfdavbFDq5Dt2C72RJVXJj",
  "key16": "5y8ncTWMHEY9gcSaB4684D57MNLyME3iKE6pmUJb7UvH2ECjVqTcXYgAdqtUcnPuf1zDDuLVJJ6YVscBnFLdFc5i",
  "key17": "2KsEGCCx46ajSeRGDu8wdGbPjbNEJpZvX16LRESYWGfntRA8d3tU2mD6NMQWw1AGY64xPsW9TUPtqkm2ukAU9AGu",
  "key18": "3FJwrCGs8Ao2hSjortNzbriGERZUZNsdPk5R1NnyW4yuA6fBKZaD2R7oYATCm9u2tBLiXfrSCgMBCoVgvMiM3eAp",
  "key19": "38cVG7xBibrzKDjJj3VLymy74fBNh51tMqXXuJ9xMMofYce5SPSogMv4Fc71uQb2RLtSdqWxWXtuJAU9za3zGqnc",
  "key20": "5ciuqErf7LouwF7mjpwRSuzVJ7PTmFDBsWzeGzJBRDxTnBW7Z71cEvEPsVDExE93VvZp1hnSJzNuZRersmjGmw64",
  "key21": "4ioUm5tcUL6PDrZcVsoxU3im9S4FvHgZ1S7vpANTj95xdfA5GtHAvQVn7XofJr5quUQ4az4mJ863skYPvH3WHSxD",
  "key22": "4qnYjmgh1tRtJVzDSNQtLGHMposyuzxHHKFWjqSyZ7C3PqjKMjyZCRNJBfBurx5ZSa87YeQi1yoKkm7k8Vgbo46P",
  "key23": "9ZSKZik613wL6rCifFzvuv9VcwVJwTiPYDPQjGjjN1nQ7YeuoHQhGBrrGsLFQjTRxvqxwQd934UpTJ2axtfJDBj",
  "key24": "AudHdyt3xpkCAe4XXXCVPw5zgrHRw4H8BuixbukwVS2QW6yPHsgMS6hxNEa9uBxBrt3Qae18Wz2huaCtVQpaPLz",
  "key25": "2jChQVDMcAJGYXwn7rysw8j3v9vFaRMn2KNF2nVvKCiecfVVHruWTpbBQbwqiKygt9irRu6mcKCctZGEHxED4JXj",
  "key26": "VDe4ZpgnRYg4P6gAoszK1RbHWFti4G9D4PJkLe5ADW31per5cm76zjg9wpT35LFhHftWgU8fZWytjXw8BMgmaXq",
  "key27": "6LeWfHevUPAxRU1Au6u62n5U74dqfn3rmBh5375Cn4MDT5TB9PPUREJe4zUXkUcVZXcAjXygYSt2NUd6UanABaG",
  "key28": "7qAvt2tjTjd8ogiMFV5BbtGn5ZFJ7Fmq2jEJ5qfpKad3W1oW6ndKEJcCdSYJYhtC88PJggJtxCTSz2FhzNVPPnt",
  "key29": "3k5JioGEKJqDDccorfBrvdDuZTfwnk7LHTJs2gF7ESsayuTsoN2EyB55NrpZiBtTYipQW8ZchMLLQJUSUHYp9GF4",
  "key30": "5vhLguWs2TLYhE348oCM1hxn6PRXPUhqVujmPiDGnGGwecVhWeYZUMAxWmMjRkqC2xdPnsrz1kre8k21g1et9T5s",
  "key31": "33s9obPqTauKdFjyzeeHqoTvLq4KYVuJnDjXwBxMsTggx4gptgogEgsihG8FsqBdNeYmQTKVEMW3qYPytFe1sPKm",
  "key32": "31MBR1UzhTp3dBoYybJ1xnULhvUbpeypC1eGd6avRsftmY7CyDEECiEVyghet3MpWZLSPfPGZjkxAQsCjsHVJ9ck",
  "key33": "2c5iUn4XMR9LNm4T9xoyxqhRccD9HzFJ9J1DzWSz7y6iisfPEoX9zDZt4ACMVMtJEahef43HspftmCy5CckcvZKo",
  "key34": "533xjpp7gVR23Zp64SHW8PGDocyGXwMQPrXcv3A1zLNT5YAA9AUCQ7gahUiUiPUZNkR8LTGGtRYFxED6AL142guj",
  "key35": "2aBKbLKRMSW87y6KFAsyLepdy3vcWsiVgsfctUa9DfVR8svD195wfZtJuyNmZ14gfLnPoUrweuk5bgwYqyc4FQw8",
  "key36": "3zrrMNGTJUQPLaNDMGrHzgEpHQJgCopRnfsGWVVVGyXNYgQz5o4bJf3iTWK7xxkc5Lxy5jbGTjgviyD2XEVh3aAZ",
  "key37": "3YzRuJn3L8LKrhW2ocwWNbT22xM41DSXjrrGK6aTXRn3sfP3VqJnGwph2FaY5mJpUDjVSFEpHusv4PJ974istWNj",
  "key38": "4YHumbABwRTHQPhUQKdJYnnBhiWN1cw2QvRR8SHbEN1xvUH6dHuacvZg68Zn3no7riZLkshGtdeXCth4QzZZiKhP",
  "key39": "4Sjy6cbKoFszcxo6zdKtAA1P4AfJHBjoiJgZromGSdXsmZT8CmJbLRdtEob7W64xfe3F5V6nqdUSZNSYBiKR68EJ"
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
