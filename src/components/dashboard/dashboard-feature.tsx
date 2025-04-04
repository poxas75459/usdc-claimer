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
    "FvaUZmh3WbxNA39zto4FVnCWvMZvwM7mGf4anY99fnYp9H3bs9WeJY9R845dVzDgcNv72AG16kPfokTNYEaEePR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DEK7zTWXzskaa1xC866Nv3pq9Ep73bM5sLLpq9q4aNcYBUhM56yXbZVGmKYJqniYze1PMh6PVpGLcA6NYU1gtvb",
  "key1": "44jgoaEyMcnMBZLCtzAjeU5979xVyRMKc659UUpCFopQGNF87p5LxN5vReg87Ar3pV46oTxtV8ejf5shE9Q5Mpxe",
  "key2": "4tvPK7mxQLXr7SJ93RXu4YySxmkbxQqobofkpafbpuQcV1qPYP95rHML8LJCnuKrgZaxCDs22fVCSL1k2mc8pdXS",
  "key3": "3PH1tkFDMVERZ1ek3953QWoFSeNbbAUW9gmmxL14B9Sjg1w16DXDKNn4RT4atVwpS6jCTZWgHynnuUo2Yu322qDr",
  "key4": "2Cpnxy7bFK9UANFnc7j9CUNvuPPQZe4gMgZf3N4rSt4QTE25QuNYVAhUocBWjeuaAU7U69SwYT154rnLoKZsYFC3",
  "key5": "52QWBgkZYBiLcNktyPqFNHBTCeVB8jgcD853yFsd1iNuebyHKj44NpAJiYt6JKg5mChHzMeWaSoiTfpTosysucq",
  "key6": "59ym6izShzXNRKRpqms1m6PfHbWdsfyYLjSZsUQuiTcELVoHsXNHLgQ41VGi3S64yVR2HYJ6NpsDY6aQWaSQv7ra",
  "key7": "31HoUhtsXVRTccnukHUtS9pPe7mEcqG9HMJK6mkZ4GZhKTgYQhwfNgHNTDjkwPD3322QBMg8CYqWAq8JBZhsar2e",
  "key8": "3jrqjjAAfaJPYRxeyyLdZXn8V4QGoq6EqUQv6AWqChHUVL3jcJ3mdRXs4buAmLMCmJHNDWT4RVj2ujnSk5E27EiK",
  "key9": "SaRCRzDhySTBR9JbdyM8EwUsWAS8vsCvDsLVCL1XdPSDdmsiTBPNH1xRLhGfLC7uetNEijqggjcKJdQPbt7h5dF",
  "key10": "4MNDgcwz6LX5inVkeURN8Qdys8zgFVVVD81ACuvxLggsbUQjngwQvv6wg5U3xWQwXV76DsWuCQ7qt4mfU7FasuoB",
  "key11": "2TFVqcixKjfq7ty5A6DBPrDDrrDcwdV1Y5CAdq2B1baiqJiiqyAE6KiaXCmz2ypEtNXYGnWcjYKue1Tt8mATBaQU",
  "key12": "4jtuj5xDwqoUb4GCLhWBknnGetoDiW7yfHZ7s3s6BL5GwjCaPe3woN3NZzH5htuevfW51x9tWRp4wtvufUk8xPAj",
  "key13": "3QwPS4XZNicqbh7gyaXqLpGzzg4WM2CgdxqmKVnDYQRU7uHcYK8cUjbqjGTK3Ris8MQc8vgBTtkoko9RHpBHhznx",
  "key14": "4pLbYTdJS6VANPrX1rwHDH6SaeJ8LcysxXGrEiffh5KcAQcVqZ5BSV1mthfK1mW7te4nS9HUA2PbrjN33AiVCKfU",
  "key15": "24gb3bk9DqYXknVhSTntLSZoFbEQSVS3dmWXjWp5xwjdBfNf5G9Bs2FbrkxUCUkFLjcp9Za2FbP6yQ2TKKnB5Rtf",
  "key16": "2nqrWuJEY7DhBgdoKb8L2oiNzbNxUN4Ca1cvzPDYFJSPWMkmrHgeT6M4Bxv5o2kSerHR5UMnwJQa5aAUEGC9zBxt",
  "key17": "2J9jv2RLtGtTNbuJkoCE3wqvHVDPo1wDavjxKNNDtSBjz2LsYGxDs9HNdAyntE5nQbEPGLGsyh1at9fMbwS1vhRj",
  "key18": "4iyGkwQtWRujhVby6Kp1u5dRKxJV1UsX1x8vy63XiaMuALWvyyPM7xR1RW6riJwxbUnrArcZgq18XggEizsu4SkC",
  "key19": "2C1PfSi4fSUJQgFjApmWnE2XvqQFRcUJ4mnZriVscMxSktppgfcnuewYrBDRchf1Y7DTJeAab1i4RqnwsGgrCxe4",
  "key20": "27sK1NEzfzSPzfFEA9z9wx14cwWZxj8yB1od2zwzfExi9FwGNxyGPrTaf7JAAfn6GRvw9zxDxEDrxQXRSNoQHCUP",
  "key21": "rffj2ePzcPmvgnEBd3DFeC3MiT3L4sGRShL3A2ZQToP4kraeLLzSZ7XP5UhGErEKTFYJ8E5pXpBUKbGHXRYrNVX",
  "key22": "2RotsPmRETGPd4uaT4UdudJhjPEDfZpcScN7BqE2wYnJHdmfD5sCbwVnotVUgErrBDbPe4LEgrwBfFtbZnWmbVqr",
  "key23": "GLxaiLpeBA2pnrWHxHCB4EduX2wSQkmbAJ5aes4tvvREFBakp2ct3hQtMag59bG89z5XmNwUspNmHZqSieLZUPR",
  "key24": "63Bay1Yq73iAydzLsQnYEzEUp44ZN7h1PkSJRMsGq7K68tpfEExCzaYgyYGF3rz7UAxsYJc6b3omNH4UkN6fKene",
  "key25": "2avfYvVTHx1s86Zw4kboVjGBoPDupywLW3zb62YwVTUAVkbWsMQ7kqohehTabm9DyXX354r8kM1e9vBb1jJc9cmU",
  "key26": "4HMZ3fqKXEFQ88a3Fjq1usUaAtyjDUZTRwZtwvYsVKxKaDrcoNDP3C9kUStfyN73HUyxXC7cn2soURfA2bchKrKc",
  "key27": "5x8z5wBkzryx8gKJGqfFuGaUSoGMrnsAhqswAdpK6widpwVeVZ1VV6tAABUaHQKg7ovVKUKD1EF8R8b9QrQte9To",
  "key28": "4eWzC5amXARvnaezNDmpVBrA4d8WCXu4Jr6KHvNK2kVKoE328EpsyPoMMYNZiiQtrfioDAA3AF4P37SJhUa1b4qm",
  "key29": "3QhUwmkXuT1bQ8KaHiHRySpMxtmEUekxFETYATjH7zz9JY9m11yQfyuq4rPoS2zhr2qrAScbi6EGcjGUrWAc63gM",
  "key30": "5ePP4HPLat8AXZhZbSx8UtmJ8jMhXVt5YuTfmDCN8n4G7w8QsxtmSD4EwcAVtcCf5zdXB257yJntZcEsemJYMVTT",
  "key31": "tC31qfWFP6LHot7TuCfuXSXkJ3GiWWmUTSvgmT2EDgAZW228Hb6Yx9JCdWqGPq4t1fT9QX1t7NtqNR361VVvkJd",
  "key32": "4jrqNuV476JzYxWBpdVCG8Z3Dyaaa1ayCw2LXmQut4wYHxQYf7iT3MwUhryxfUW1HVkbngRYupj5x28qKjvZEkLZ",
  "key33": "xFEikPtCUfquhT3QAtxHqYK7qzgja8MHXKbQozTK8bPg2YMc3GMhbtTnPHE8KqQDNKvvKBUvmrJFKYtU4YMttfr",
  "key34": "5xAyYyzKGFD6fnDFxVj5czfC9APbGWs7NhbfKeEqxFXs3gvScNRxB7WwMURWrJEfUBpsARpeZd6xn8jgU8TEDL5s",
  "key35": "5rGegEenyFRwNVWehfpAncH9jct1uK2vNnzgJN7eRDBP5gSkaNTJewoi939HtLzmgZ4vCbAaQWPexXc1ixRremms",
  "key36": "4TBKNALt1j33gMKZhKAtnrzCtApFBEE6huwsTpnm5YvZdQVx1Cumm21S9Xb6gEhzcPhb4YnQdCVPzxvqr4oM8gwQ",
  "key37": "67hEiKgMKHnnff8EvH5jEjijtTSNzvpcqwPu5FvAeqJDyjmdEXUW25VNV5Mj6Cs3ta3u8S1gJw3CsgQEBrq2ax5m",
  "key38": "3oqS4CRnaBje9HXLTfsyweCimwKntjeKVohVApWp43T63ZwMhAyCpEAMTqBJfTBUSjZrZiK3hVKRi6Bn3ePGrqwF",
  "key39": "36QV4kaFuSasGMvW5uruPFMcw3VYAUXAzjzEs7HhR1PzDpJ2yuj8VGMqX4B9d1kk24E6D7gokiDCWAn7tu396mUX",
  "key40": "2rQiXJNpECjJERBDT2CmMyHXD5AQLeVXnDEvCF6PpxMXJprssSacfysLmwcevVTLDKd1PiGydkdk4CxcSMGezqJU",
  "key41": "3jTByq5VHdx1L3bEbkCaSmbSjqxFemKtEDu9WSNwcCaE9Td44pE4hwhr4N17aZpzBefN3K8g95CMKcNCT2JQkye9",
  "key42": "5MXeaR3VaCzHun6bVwemMSbrd8NLeZkUZEFjLY946v8KCp7taipMpB8eNLdMrQYFxSFvjFNTRb8WJQbighxiWMA5",
  "key43": "3NoyVuHgXCKjo8BhokXVmNHRWh7pYWNg2tMEC3dGZGWVbzv1eyws2S9V1KUcgMM3kicfYdZ6Kawfn83Meyx7scVD",
  "key44": "XShsBkDQvt3NXpSADiSf96vBSFkSKBRKkScH8ziRXG1g3sFUpdqJYsKzuV7atocGyfiTgLCN2qLxjLgXHmXrirR"
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
