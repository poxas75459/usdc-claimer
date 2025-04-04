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
    "3mGn4ctqvvUGRTyFzQYcr5Wo75bKjkfN4ftCnYLTRw5HFV1VTGSaqghKi9EJH2pk918i8dbUhFo3CrTHuKWzDDPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o2ag9TCpuMeyX9258iVBhNYN4K3wymDs3HGpEVj6eFyMZZz5eb7147FtnCkHnEtZT24EjbMHUMTQsJV4vxpj7Rp",
  "key1": "42YCiT3AsHDFbbE1a1HTPdoieYNmDTmw4DG1okHYXkzMSMy3jJzANiVPgfY64oqTEARRuEmr5G7U8KQTHhVfEmZG",
  "key2": "4Qk1MdGJeCMRMF4A34pb3BM3xw8ya7AVLGSgrtLQBLpooscGYLrzZp54HCbYMCSGizz3kh5stgsMDPh13MPLDeLq",
  "key3": "3vfUDtWDwzJ8AziTiKNjUDPj2y7KQEM97rjuQ4krxkqtBWi5Hi2MiEs6q69r2jGhBaHpg9osqaVKr67gogKJ8x1k",
  "key4": "2bGYKTSf4ebexMSpixCiBZCmPTCQYCPgm8po5LwrLNaDbr7rBNZjdh9XqyCRXDPCzUfg3GnMasnTTqVuwg2ksf8L",
  "key5": "4XoayzDoKJpV3StDsnDbCQcCeiL5Mjgxwqmyt3RVy4boruookZt2NmVQUmVbgFgs14fAHmGeYybZpKs3ddTUXMhe",
  "key6": "3hEb5RyetRtbZmPyBbXkeJR5GuSJ2x2JDU6qy8V14uN1Pq1CnNiTs6Unx1tgZg86zjLVtDr7WAhvL1vanpWyGHNr",
  "key7": "64tDLjDQsWYwmyshRcfb5EftDXruY7UX6ibKfo2QdSsERkEv5NrJx38Vqf9F5WMv7Ct9f1g2Ho2woEgKqsAQg7LM",
  "key8": "2MDGLojyR9nhuBmWrgyc1QEDRrk2MGRpcEwi6uR9fNFA2DGDBEL1gMjDKuuaFH8tELCXjEy5Q2p2Mp9exjTLh55d",
  "key9": "wLv1EcFHZxTQcQUGRNQdGVGvpDUHkX1MWT39qN4zFZ44t14WBCQocfVYF2VcVKBsuJT8Fn5YjFkWnUEHfG2RAMN",
  "key10": "64ZVt8trEexMNjfANt7oYTZ7YFvewTr7ZDWdJeqhTxRLi4PjEtAdWRjSNgpjr8UbpEu2qq4GBjF3Ldi8LLfktjQS",
  "key11": "5i4Zpjbo7mfuJ4WEaJnDnam4ERJV9nrmmjBjsKRkC8T7r6aZPu8mXrHyHMcbHB1JhcNS5zhQ34LoZ15HJ8sjqDbk",
  "key12": "KCQ92oBhQHVxNQh1Cu97zipFoJxDKM1ijm3mhbvASMNwXhZkaBLDKRtUSL1dfRVHaPijPz59NFV6VYf5Q3sMFK5",
  "key13": "BxB8RVnVV6ePsfDqaxEFxCxBt837aS3RJAKnAAyCqBbVtXiQk5UtvpSk6QbzGqypr8MY4MDA5MM9An7agqxoEdX",
  "key14": "3J8J9Z4SdgrXm8crj6kufX144Nh25SThvT7axmynEZm1Eya6xBJ9CifqKNcCCxgcuSyFjjVkHStWFeyygPccm5Yw",
  "key15": "PKeCaGWHmsg9GjjteJFut4hj6pEitAiE4KXCj9m7RYR3wi9uNzRLMwM5jpA2Ui6MVXyN4URchJyNZuxpCbFmEGz",
  "key16": "4SdoRB8UsvTPrWeyrLpmoZGcQH4GpLKnPdU3udqAZ7FZ5yzYkGJSCzq8qAgaN88rZzNpDeuUDRqRoAVFvkeuWh3t",
  "key17": "4aK8HJuSNHbQp9He6EpaqWVmnL3S8mVvhDyNuYyeSVgF9N1T8pETPyQctvQPQH3o7pKBc3qT7CeRg16XmiSxVnY",
  "key18": "65Jn3groir1qHxLXzNV5xncs8b1ZNhWNqAZxXCQ4iEY8byFhhjFbqEt5V2qzW3RJZY8nkY5DmYU8gPEhqUEYNAkX",
  "key19": "3VrShafUispfCL5uAYZfPHZ3K3nSxoVVhfyfJYcN1bFEgDkyhJgLHuLnWCAZiNEdZex7Pj9F1sxj6YtB1XMBvkr9",
  "key20": "4c3Y94jk4nLvyDi4xzYikYfs2QSD8MFbUSV2aoiVm4EwdNqL7YMnx9m1Pr7zGfZg4vDBXhmn3AZPDhL2E6SJK3NF",
  "key21": "nAnMgJwESqgdXhezet8Sn6tZGc1ffhSH31YXPE1KYoYVRYPfUFaaNTgCumd8RVJ1zkpH37hX6RL7g7mkhDJ8aK3",
  "key22": "4eX27isK1wpUQZaBd4HoDdqxzXE3rfzxjCgm3pcNx6zHKw3H4dKpFr5rUhFtvMnH6J6fpNnR8YFbSz94jKv6Gme6",
  "key23": "2JhGoLps3HRYTfexyTKdqocM7c7KmTV3bowPh4ES7WVEqKQq4wtzDCgDiryTrx2fChscTmZVh1Wwbap9YtVAsKs9",
  "key24": "zRJciyKpyYF1iP3oJ7LRVDBFLo5XcVhhmfgWiPViSeBBxGU2BCyVK463cbfMMFLAUWyfdnvNCeHYXRA4hSwFQgZ",
  "key25": "2L3376BrJXMzfu1t8VayTH2XcYYB49pchDAjTsC5sdAwnxN2N3oL2GPhJujN3hWDSHAqGyLfPKHFVXGVNeze3aJo",
  "key26": "3nUNqmZeQQwkZL3upP3YK1WRmjGA23tFs8YDAw2QUxS6PgJ5dkbzgsCWUddFdnHHUZWJBjMWu7hP1cYcP81byWTg",
  "key27": "3B3gW9DHofMj2LrBVD3gDvbixYyWmkjjoCxZLiiyHwBxCZSAaTd8wYtqxNpQA44iCxDtqbvkZsGffdfeAEwpmuhf",
  "key28": "3ZXUZ4H56ZH3uuiuX69GPSYs1HFVLzEtQMoB99bZiZNQtib4oDwxMb5izrxaZNhsqqL89keDHw2EAyKdkFvb3rGB",
  "key29": "Ecqvq65qCMyPyappb22DBNSYVMmnJ5m7DZev8mAr4wRUGsuobB6BCabjv3W5nLVpXTyXNAwtuR3uDG7g5NcFCpB",
  "key30": "4JDePGKdn3LHDdujxAxVATpQc7m2SWvwRFQNcHNGXzjrBeay3TPYGUYX96Vu8NVnPJDs3tjVJA5iptUpB2428MAK",
  "key31": "63wupVDLfHSBbaBX1huSrCAL62KUQhZG7w8qQbvbmFUoJgSAchbEqiaEyQzLqMsvNbAEmdfWmVdDeuGfpw5eNMqs",
  "key32": "4qShmn4HgrMTtXyBP8pRox3QZjuxd9iMdamALnRgywkoBHvAKMH96CS7fKrppHFDJE8EK1unLNUQVmiGpYBUnY8q",
  "key33": "4pzNG8AscYkLbHHUZ4vneZTBdqMhwd99fdK2M5jKxVnZDqRh9vPEej5S3wfiWqwCfP95Wk6tLbzxXDjzCGDyt4xn",
  "key34": "4jo6PA1VHDgb54uSniLvjC2acr2K1izWxE3MeyXcF5aDBBnz28wYSn2iLuFgFe5BSv854DcwtzQwEqGqJKoDXd8T",
  "key35": "5Mkx6rgYKqvQsVEb33LDcfRdrf72BtizidVBGcz1VisEP8SHi1e4SXvQf4Xc95V96JAWoA3LBErLyxeK2yYna4d2",
  "key36": "MGWgEPHyh6ggdrF8p2tVYUUE5P2waqu3cddKviUPre4i6yqY6N7ddmSTVFPHmHhfaXiW2jYvZs4mn6cZaYPL6Jd",
  "key37": "4bnywH4j85n6uD67HxUGhX3S67PZqan1CHiEyxRq8jfMUKoBcZoJvwSwMXxNCrfeWFvuw4Hh2LAMsQQifYFNTrGf",
  "key38": "65L6tWD1wdxB3xynVNvb1xWW6TuKevxfRY6J765qN2QnuSh8mQCrznSLKABHLii2Hb3yshiSFuGgKzjv9sJCbweC",
  "key39": "2Bja3hpFdRKRbrzEpDs8c4xK4cuca7rNrEtK7sES99952QtoGhaSNXE5tqV1PFt8J2qCKfzAENesSNGPhQXdDJKH",
  "key40": "2mqj8YXn2PsyKuP2Cyds5J28NfofCLFHNsgj6eA5tw6AEXUSmXWfdQ4DCj4it8oxcnotTMGSwpghwUupTnnwXFRT",
  "key41": "HAyakF7CbnmLmsb2CAFYPKeAvG8R1hskUhkojqLRX6BYsBvU7JFnvaovt9ZgeFFAnKmBoqioDGAbk6H2CeRm1AB",
  "key42": "3uihoTBNGj7UzS8jf77fVyjtc25bMwBGKR1AMCDjAUm3n8tGQB8xZuuYtY3viyjYctKypUDGG8Tna5vC2uCDpCuy"
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
