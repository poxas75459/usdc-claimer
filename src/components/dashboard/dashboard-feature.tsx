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
    "3wKUtm17r7bpbYgAKRGDnncirGSssHmGj2zjxnvDNi42AbEjC6mZauaCZeUGMuvcPyMbmU5NrKQSPZs23Y61Ucb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kTPjS2wkJQ3vzwQUaUYhD3SQBzXb7yuya4U7jGRqkqAqb66zaaYQNeH31nRUMzzhzAmnxk7L1xkMYzCyaCkH4e9",
  "key1": "37xcmkHYhzVA6xWLXCiyUistx1tZKrJtSG8dMHdpEtH9WQVzJNav6WJ5Bd6vEp1xb53ZuTWDY6FZjtLDcdmUBxCP",
  "key2": "2sKJkkZR1trNFWjiMCmh8qG5iiGUNMum14ZvyoYkzRjMxokHT9zgEJvA4yPmKXNEv475mttBWD58KCQNYwnZu5pY",
  "key3": "4kDPMWsm9iBParMkMNrxMqdnPBCLXxgCy5NDKCsTKSLF4moJrd819Cg9wNfUat6dfBhZwwGLF1HqBTmoNV2hFAjf",
  "key4": "5HD7pxmJNknYpW7Fx2Z11WYp1hQz8ABv6dfyGX1oCpzbLwz83Qe8FSYrRybMddmoe3ggckkq6kvP7fssMf3SqfZn",
  "key5": "4SgRRUcbBbVjNbdB5jPtA73vKNCwT4LmcEgd58KckcNDVwdPAzyKR6nTdADQ6T5zy2qkePeLsradtfpVj5W9N2M6",
  "key6": "4N4TAEJYow3VhsY2e6qqFWjXHjHzbLQ7bEMmw6WHVJd2CJ8ZmbQGToatR8WkjPxnfdwSTCjsBwHWZVRDsgohenYA",
  "key7": "24gbzjQAnqbk14MaSxWKM7S7HXiDLzyg9CANp1adGCrcjopf7RNrsYTAdasmdiusV6EG1uHekrJrAxhRTyZQutGq",
  "key8": "vMWScqU22HUzW3C1pccbEnCyDcgVuZJKUSmbEa7QGcT7tERaXFEtRwWeuF5JbNmme7t65C8ANRohSXQ368Ca4f9",
  "key9": "48Px7wJb7h4RqvsRGoU4rYsJz4V1uAVgjLoEaywr6R3SnMm8d4TaeHBJV4yjnrPk9oKtHaGYRRdNjVVbQgpRCbyi",
  "key10": "54Z7NZ97CRnP6w3YEQZYAjayB53PSkuExyBeJUeE5udcxwwtsibB7nF5nKLSydja3xPX2PxuGsbQuLoaLVwzphAJ",
  "key11": "6384UCqWbMpWjYCxvq5q5ev9Zp1c9NoDTfJBNA3F1hwja29rR2pQoTTdBRtu9Uiqx2G9UfVdYxgsFCT3zPi2SZwM",
  "key12": "2RsXadeVAGHoybCBgxdGTX7g9iRYVD3iQeG21Dc8CzaGRbPDe9ciLZya7tPsVjV1AUf3HuQTS52mmfnmehFiqxAM",
  "key13": "4sbi3m15gMYawY4qCHo2eSrCUu97NTBWaztJFCzyryHySWnavHqTxpxcVgpUeGSNRtWRdZYGX42m8HNUPzcoU9zi",
  "key14": "5K5bjvDRfPBRN2myzJhTVQsBsGov5KVnP3yCghEvNaWmAsRY9zeTRx2nqzGWT9T3W5L52NRvBb1qkb5LVribCZiV",
  "key15": "49TBkdDLFCBjmcC1QvW5uMtkVoz7sTDzAZPqaGNxgTDaF1WAKxeM5Lmjg21kWSa55rM7aWWkM1AhHuHBGm4i1481",
  "key16": "5d4aFV62tBUKrbP5QDUnhq746dGMUyJCuMbs1JioDUjNoPhDXieeenpVHaMh5RKnAdXdwV6vV2o14foBWh3ZWvDi",
  "key17": "29essAuZNxdVKERmM5NfWGJu4W4umv3ZEWW2dMPSQ57BWw5S79Vhkad9gCEGTSUNUCCKX4eah9P6vkyDJv9uuKDR",
  "key18": "3ac8eXtKK2USNLY9WuYg4eGWVFPqaRu2Cu9kTMG6vhPBcsjZGEVKyFF1TuoYeyeLNPMySgA8M4WeZw49Majgcfrm",
  "key19": "51gFebipywY2Ph2Qta3ydktwErR3SfahxC66niHqZPSnhNGjQnjBFQyUEKDpqKacN8PaYmBWRcTUy5iJvcidi4YV",
  "key20": "57MhjDhtNgDh8g4WXU47vjFjMHGJCPeUtik5ZKEYPBXmFpX7EZyvC7C6HpYeH1imdqiduZcDu4e9y7AC97uoWgF8",
  "key21": "dpY43cQ2S6Byj7TTkFozAKq9WYUYK9VALuCuPzbUJpZ3r3mqJQRic62qNHNL6kaGHYBTSTJp5dCbaU5cBmDBE6p",
  "key22": "4zRZogC3jBQFircAx6HDizbu1vL81bPK96yA4saF6RKpZWMMoKX9ahD7ApdQMVvCU4GSwSZDgd111o1gSk5x76ya",
  "key23": "nzB2PHUSJvnmESBJnmQPXhohc3ydP2pGQW63NaXpeEydL6eTvJJwzJGXeAfkgy8iJWQnWkYGKf4DsjK8aGQaqNH",
  "key24": "214Qxv6a86F8mwSwGqCBqUEBv5SdZ4wuK9bRvwDd3xCvfwaYRJnjyNygUf1MbrU8Hdt1wB9rC5yhbs9i6B2Fj4TM",
  "key25": "3UAMCeDWcUx6FdoPwtba87hfKbv8fNDs7znvRbgvojQsT488gNo2GULEXpNAdoD4tnEWkAAynx9k2BawFABmo6EV",
  "key26": "3grgPTQ5mYrCG4N2YkwE7j627NvSyuMVPdMyipwTfRKiSfURYXvmmWpQzxrzMoKHGQnnmLFiiXRi5SMcdHLbZG9W",
  "key27": "4BwqUEymtX6qfWKqxZsQLaaa6WZmpXSriiLTPzgQ7yqi8AbKiQQw2T9r54WW1e4CscBnBmfqgBE2XxXFrUzrB9Zb",
  "key28": "2gv43fGsHBsmUAv8tsjqstPANwbmsh7TfkNb3dKwgBiq7vxPW6qdAyPhLVfbnNq4HSigm2HHcJWm39DEB4R1NKqs",
  "key29": "1VMEVjrNCmJS6Ce7xinsDRukrNPviXA1GcTssv2zh5hEh4DyRZSBHncFSt1ZSoaBQTM88eXsjiTzC8XQReR8sYC",
  "key30": "3GZACtqrHfcYx67irA5HFb3eGC91DwwM5B9EuP3YE57QDvijceKbTNhfQ7tihkT3toHpfE5k2YkJHEux6nsVRwhb",
  "key31": "2mJbfVMfJhCjADkkZxv4gbNEivcMGFsM3FGDcxNs3wdRx822D8G1hGLTfgWgGHcqmTCrjKYRwCv9aLq3Amax3uja",
  "key32": "5XQmvVMThuUPWPNFqv2vkzmkvVSiKMtqmNCSgmw25VsgCeuxB2ZrWpGHtfEDoccEQFYStyNffpkh7gnoBFU9YF8Z",
  "key33": "45jwe9MraiqsTQxTCuRtxHJfHLnZS6zKVLA6hZUn7ziTXFsM5nQVUn1iPpcgYH8kh1GGAtvAhxyv7PNxtHfTxd41",
  "key34": "2uncd1ia7CMAKZWsQDcRV6Ye7Gw86QphxynEprta4HSuKgqLUHiLaFuTQRm3tto4U2uUMBBFambGSLe8sYqc4KA",
  "key35": "5pNvYpo3C2MotAphHx5njUpAYBg7h9pA2nPP6ysKT6UasWB1DtbEKY8cYerQEmbvjPPssTSr7Vsti2fKodWSQAe7",
  "key36": "5AmGB2VMKn7ZEH54YRDRtaomki2Tq6HhUdqckkSgUbSD5n7qQ1262XxY4QuSzo1LyoQ7SWxXmWDS9mw45uxhxNpb",
  "key37": "4kNX58HCKgUjAqqdfm27UXCHiJpsvEyuVzMxwHk2EsXDJvPzYDsqAaGw27peWbEbjnkomhpuDwovmhdjnuQS3gn2",
  "key38": "5KtmG2WJYeKG81QD9fvMawZrh9jFECvG4jtupXgLhB69Bp49jSwBdwLN3QpqWffSuYXJf9Z8FDYcYtEE5ho4SWgo",
  "key39": "623XCzF5eMRgbJ1tUZx5nVG9jgcKUkje6KBgNkdcPyTsh1FUefgqyMig2Pzm4PZczf4ynT6kZarCMXhQcXabjaoE",
  "key40": "B9vJmmLdW7fnftonWZPdSoBx2RL9M3A2gBBzqq89fzXqb3vZV4PrkscaBjztrvGvLfFiQdV2iYeRnygnrmGoFLA",
  "key41": "wRtRs6NyXd5SPB3VKGRKSiNfrRbVSRYo4RdyUKBA3E7AjNuiab4cm4WzdTXzhsH6MoDuxPckurzvupUMWurMTzH",
  "key42": "34N9GkDpMA6QGhWsjx2x4veavoeEGYZzJKpYzqzJKpD8grLZsMceYrUytC8iPTkbqk5QjED4NwyGyzSzzioaimr5",
  "key43": "5HVSvrhUQqqJuUCmF4LGGDRwD6qH2fvi491WFSaBrLqskLThZdtpzqHsM7tQ5G2fm9rv4EbqutjBL4DqzBQrXwkk",
  "key44": "5YyRpVjZvDRFmtFYjWkNwwDx3KKK9MkspvCC4tJaYaVeN65gnWi5gQFGGEdU7q3tuyzj9Po5uZVXoYqtFioqbYo4",
  "key45": "2t5ZpB2asxLBwzbzVCHchxdEinJdwHVAQvF87jPbxnusMskFu3qgoA2JRZhvLzsXRJb2XUrADYyafJwyCYU49QSc",
  "key46": "4KVQX11Kvq8nwEb7rXGpaFLKYJ2od7kszApVL8fiKtmVwnnPrJ46gf24jwEe4j5AtHCrJx443DSSGmVdPdKpmiMn",
  "key47": "29eWKSj86YbPp5JbiXXukuXNrmA5HKRF8uuG1FEKQL2cpuRfioM6v7vAwzTx8DagXcKZqjQXs4aG3BDtM4T8kPW9"
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
