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
    "LF78DGWkbw6wH1ioZRDtHTTnGQ3FmEWnUYa2498QaXB6y37RWHwesNMUCzbMmjkjWFCakgrvJpsmLrCfWbcmDis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GTY7zYfFS2Stp4e3xuhYJkzbM7BhinrEjjixo3En1EovFb992urnhW8yY7D17aCUNdrhNY8dyBw6xh6eZ1r5vds",
  "key1": "3WsMnzcRcywQTLLNXW3DuF59YWzsjnv9HTXed6HSUzm4nx5GAPfehyPr3LABjJy4e2wkYZM5F3jG7u7Wj1FiRuLG",
  "key2": "42m957snr2cct2rgXqg2A4CtX4h3Ywvb1UgNzfpZRDRgKPdX1U3h33vCBLYrm4jVR6X9pdtLpebxXNgK9XPopsgf",
  "key3": "5vjpWuxh1UdRqwP6Qcr73A9reTxoZbDFArTa1fMMGYPcZf2g2YfHsVQJbZqKEf5yqRDRCJoREQnSErbQxcCdKdEL",
  "key4": "5J1QqVA6YXi2TPBju2EVi9FuXmFuHaeuXWTWGbBEb3DCi96K4qQiwQmnsdqzc8ViNtEJhcy3yPSVANiFgQMPpUfy",
  "key5": "24TcjfCHePy4ARwJ3eEyFqMQscLbsvV5hPYAYZku95jR8ZhAn2vChRnT59YJqStsbdgVJgQkRA8qz1zr3LKYA9bA",
  "key6": "5BFRUaHqmWga7uvDR8hadRrpswsL5Y7ujR39vEZqMsbwUMe9zkRn6idjg8deQeo6G4Lfmhi88pa3bpw7HcV4teBw",
  "key7": "3gbskiFNqPM2xp729HSmS58D11wrmgzsfXgHGzDZMZi9dL9X9EPtNDoGJo6JoVoFTYE1dSaJAb9gBb2wSp977xBZ",
  "key8": "Qf7ZyfJn3bRwed9YPK32rYQGkoUYaggMH1M5fuevWfCZ3YtPy4HhGuXrz6hZZxPPd2DanyvGgpAdECLBKNqWVvR",
  "key9": "3Pc3mznAzGDWyWHDnxWYeWphTskmVLsKdRt9Hbe8JDgBgtQDvqHfcXHKvReuquTmo7ZgazDMfFGJMrf7jkmasK2p",
  "key10": "5LETTAGCVkRc1n4hQSsL3sMNkqp6G4EAfaE6hy5aobdvs6Ww22B4wiFpLeMH8c57N3JNt6aECQoGgu1vcr6JQeg2",
  "key11": "yYa2cTcwDesEiH6PBX2wXjD8EmhwNS8abFvtkJEAZstdCPFZhGhoawS1UfqdA3FE6JxEpX9v6CDki2ew5CEKT3j",
  "key12": "3geffE8oRnpoKnq9Ahxmj3gWe65ypeYndbRRUZouRFSwW7M9EjpVU9WfmouBD3XNGeNq7znsdiiQWrweZghosCQJ",
  "key13": "5h3h1qWoyfCu8Ci2JRthgh7DH8tBip33H3WSpDUkG756pxgUjYmkYunuoQKJZtrpem3Qk31dxs2e7UQERRyXpoyE",
  "key14": "5b6gWWxeivB3QbW3yt9bz2DPw5BjkKLDq6RxZ7rkEgLgkGhRqVHVRnjTfixqa1K873hqRdSYjhbhY8PvYEJYdwEa",
  "key15": "2vZqcCNadUJtWcdGtijmSMxF7Tuh54pLUA2uBfqS8zC6arKw45EaaXYNorao1AQajS4UqAwri69VMCp49q9GoceK",
  "key16": "3qtVbmU4HLwLgbQwzhHovkeFgW1TQmwiCFCB1nf3Hi87eQ7rxucG2XUFckN9rEbNYA2psd59YeWxmnnXeS4Q1nFa",
  "key17": "SFWXXEKpxgmm5u6MEycRgGpYvSEQkaRcQfeiDNQsniRiVdj8mXVyYsNgiERnMsamAtsAnP9nacn5VNN4YMXanpi",
  "key18": "56kpYzwSryTSqHeyqxdi7JcLin3VyeaNQ2JXdHbmQrDBETRLcjioKfsm7RWL3DvmvSN3Cnk62Z2uRxyknmc43s3M",
  "key19": "3gd5GCHcAmvZSorEcEqj5UcUmDhtR59C17eA6Yt3ch3PDVUMC2R2tachMve6BmtSRt2rRGgsEZtu8rSszpgLiPKg",
  "key20": "5Tn9TUPycVb65nqxgavoYHKZX6gzWfM1dWvAB8YxR7dDn1yiK1VartubdSSxAWqLhdHVCimQ27zJGx4mzR4m2paw",
  "key21": "4tDuWK2E4j1GZrStVENjW8rrWRYf7rC2dQeK8MCfKcYsEnvdM2H9gjPZj3ikfpxMZ8yw6U84v9NTjvqhsvUwPzb",
  "key22": "X6GMVEnBvQHquvoNNaCSxza1g6iKkQBmhyhZFafKPMLEGkffQ2aKJhov7LzXSxvMYJKtVNvoMK3kir9Nzphnpg9",
  "key23": "28bQrDCy62EfGH4vnejbdFSGPjtMdiEGjVVLyWzxSmRpCeBdENnnTRANvXYnKHnpp55ZSpUCdmiHafXxGYiAoy5x",
  "key24": "cM8kaSordbm3NzT5FnfCKj34GYFi2sqHCJvRzYuiXEepJX435xnoRvfGX9ze6yEUafz8Gt5stsMyjdXMoyzjVkG",
  "key25": "uGuAA8NinyPeNdRoPPTjgLWk2F7BvoCDgxFbx2ybqbYoGWhxQYDjyHjuoX5Gd3NjZj3r17Mn7X5GDSozFwz2bF2",
  "key26": "4vU8RxtD31zUZak8Ee21HUoreXoLaPDNVuZBNAUkY21CfY9qZ7mPYLxcKwbEiP9SM1HSWizKbwgWUUhoAT7kHbBQ",
  "key27": "5iG6Atvx5DLXUVN3kxPbtox97cpq2Z22wLT3AMug9skS2UKxKgzFuHqZ5yXWUxfRL9B8cTPbqmBL2pxqPZ4frG5w",
  "key28": "33dy7ZnTnugAosrvyaRE8whLkJRGet8ZYaSxmJao96sFf3p2K2hqMz6NgATu6aiuM6dQRfSR4qXKPYjwDWkFYe9M",
  "key29": "2JLM99eLSQVPQMnMQxsao4rMBzfnW5chHz6QaV8Bwov5tKojvKxZWsxamrGo9rYfSbcrK3d4mvEMVdZj73iTG4uE",
  "key30": "5hJNy44vjsiswgKw78dxKpatB2w4cj6XCtm6zTGBrp34xQkujBetaEpXrtBSLg15HwReqtexRL4wrDmNuQzHcuob",
  "key31": "4P7CeyHyAKJCdptpKQjuT2SnaEmZR1nhHt8A82peas25FeQVoejk1ut9KtXHmv5H6NNMCsuKdz3d6xV1NrWd4oF1",
  "key32": "zLP2W7CDybTktqanQM2jvJvj6sspc45fqZxNTbqBzD733oE2XVJKkqdjsjp88pwevSLKM8z8FGr6nFaqTG6J6vV",
  "key33": "3RkgnKsVkNB7QkgT14ob4Ny4zAbkgKkfdNsQ7ohJpdD7YtCQPwS1r1xagdqYZNcrNFwro5e98hCqcubgrgZ261dk",
  "key34": "4N74BFMoxn6HA1hePgFiPJXSTcSGsn7nZBv1ybXXqFbSZ74TyuYK2W6mpFU5vqK8oimEF97mUKns9igBCuQ5By1U",
  "key35": "EGBXxmdxN9iQrnxVisFobMBCckAQc6VRtfmnP3DQWPyRgApEJcAKGykzv5ErPWY72ZM7fhXFQaVJgHB2qzkseiW",
  "key36": "ZBYUVHE1qynjNXNfV8mhfinGWBgiLRvZK9LSpLdnwhgVCWFKrgZEqPDgieyv3766PjJZWjFTQmjsXPMURcm1KLJ",
  "key37": "uH1qF74sgejx4x2Kxv4MVQvty8Gr98PM83w3qJxkzeaxg7j9PJqtPb6rCixU8wz8RFxt6x4B7mn5eW3RCszHPYW",
  "key38": "NFr4PFtRf5bkKavrwmzG6MGHtfwBbUr7nLYaQUqXrPRJZkt5Uv1VQwWbLUNpKRkXTiZHqWUCAocPFXchWUschNy",
  "key39": "3unjazJjzFzb1maa1kBvotnBYXQhoW2QWVzR1exgcwAQGkW54W36QXvbh1JigteihFN7SXxNSeqDjyTWqboGXG5o",
  "key40": "3isL6FoZJ4CiP644XiVgd5AxsmjAV4Swq3c5Aurg26YsM6XjMsWmR41mrUNGPqPLzKM72m31xEHfS1py8tn6yP7b",
  "key41": "4qYf3XXxDH1EfNELuxTJJNcD5zxCikN1n1wkKv2DV3HTpFh6uJXiu2n3UhEQzEvaF1TFz1wd2wA9QyY5zdPo18d1",
  "key42": "626or79GiARQCNXV2CQxXA5ehkuW6ozRhRU3NXzxtEj7iYYRz9MBJAHZfVmrGUWgZXfMS8xtCjTDr3JfrDYpmB36",
  "key43": "5sPgrTpRmXuvEy2WdRk98kjeVEsvY43b7ueroTpvbrb2E4qQqGN73Zgx1m3MsSZqssZziJHM7cfRRSCM2pjwBA2V"
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
