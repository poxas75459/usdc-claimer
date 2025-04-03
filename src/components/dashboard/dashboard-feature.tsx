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
    "23W49dDxcgTWDPppVyeR3q1NvAMEv8MQNWsv11UWZxPKs9UBzg3g8Jn5bze8HkCfSWELdWYK2Px7nuwxKuyWNCEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gn3q53eH8Pm5faaYqQMhcioHoR91KkwsMM8fNvPGCkpZfLwWZuXJswayY52c4LbR24MgB4FW1d2sve2VqdMWUsc",
  "key1": "3Z6wiebBwd4ZtrVsar74GhEZAcwtwb5W5adMny9cu3XMVuXyfkviyVwqzVQT3KTVaqSY4ZgEGQyrshdwnC9LtaW",
  "key2": "tnoofseCmY2XPHeZHTvquyqif8VNw3j7PcNbkiVWj8a5nF7Yye4TF84KdmztFys6U2sTgCbrfWC1hKv4nRcdquV",
  "key3": "24tnSqyo1fnEdys3MbbxTBoZF8CegDCueHkngcG24nbTGvbfRw6cViKrDHkqBKzUCUbVkFt1WB5EEYaoZ1UmGsY1",
  "key4": "2QcNccrh68xihvmUmGjTtfVTZU55nPBTaL3QP44wt3eowUyhdgC1nSkTEKyuMZhnRs9RTBgt8e9Swq91F1KGvb2q",
  "key5": "324i3SPQ8zA4jjhZyCVdvQE9UqhWeHich1yY2SpmwZd6zftm6fAPypvDmAnsb6ghpjNhkiXkYTTXFj8HquA6pCw9",
  "key6": "shZVpAacNf3QKqJqDWVmz22hkjXHzjkN4Zy4dq1uuKYrufdTks88yQPCdnuzNSA3yqn6bcp6dJqb4znqVagiQv1",
  "key7": "4PY2YdPJUTPbQU4cGRvTYj3kNLRa5HaMg685ZKhqnuyDuU63rXVQTUAC3VpJoQcQiiRXYtFU8BZbgMPHF87MaN1D",
  "key8": "4q7R9MghTN58qiN5MhmsMQAj9uRR5zk6DtqcA3gHEru99HKhuY7Yo1SCPyTM5qtSz7YZwjCfxuhoAR1Zeskm5jVC",
  "key9": "ymFgmF6peRgM6Q9NZkpYjivcSeKWSxadzWQwTFbAXWsXRuxyN9NX31qYj4ELyXHb5W85wRr3uUMAbT4ZH11Sfi4",
  "key10": "k1TE5ckxRmVXEwKE1UzSDfCsi2k8vW6VUJnEdqboP3dcg2GVQivuzBbDakxAQk9vJ1n7QfAn5takSCcSridcdzJ",
  "key11": "4ZVHKsgfUHYDb2QtYMcExa2odqCNhU5xZhUHY4cABcq8ScL6X7ag8UUThcJpNka9wHD2R22h3DcXB3LBikNknVtv",
  "key12": "3WqCk634wKyhs2s7N9QbUHBPacZLeXvr6u9EBXwcFHxykeaizwdAkwCrzDgwstgzsMR4XmSwMSYQ3zfytSbGdyGx",
  "key13": "55CviNgwjVLhzaYTVDezYbb4msehkcwDRb8SJdJvwTnSPqwSfEDW59xsVANj2XoagE62QEvV2yJnK8N2HDRfx6d2",
  "key14": "mNEopyWsh7zBqDBtmD9KYG883xkBrBJHEcj8D5mAQuHwGfAJQXVG9MNPyfMXJiJSmyoTeAoiJUJALUYNvj2N2WM",
  "key15": "3W6XV1Tzo8gdMpcAk6Mwmwc2uGuugfoUKRssediDGi7E61QJTtyyu6VsiGKu2tH9sAN46GCnBByxrocGUNCPivyF",
  "key16": "3cXMxyk4BbGFryrsT2fYtopovSKAe7VJcAE3NmFryEVnoXaymqGzrv5ohNqa8MGcbn3RGtemqRU9AyrMicWenUWM",
  "key17": "25Rmve7CYwuNEnfR2pEzdFj3wTCmXBV5KVMfXjYpqPPtAvDqFbLZXEQnZsjpp2vHCfiosxUKsPLQxhYeUZsPMPzs",
  "key18": "dATESQBRYk1Lu1aB6aY7oVsZaWfKgonje1Z7FoJFKENs1dbModH4q1n5Lb7m9UipApPHyJqqx6u76DTfg9B2VqC",
  "key19": "2UGmZC9w97Bh5ykoBqfPdiMQvRtPwjXyZ5LvJFs1mHvRTxLZSoCFYdE6gvnEuRVjMnHkPeF5Aje5662zFfph4w7B",
  "key20": "2UvVYKywHogEUtppTSLFR5gKSyPQX2TjtKqLD1tCTp7desZrxEjvYkQ9xhpSF538T3JfYZt9EiJuLVgqDUbYPFfc",
  "key21": "4ijPR5n3rDrqrPPBjFsf8L6r5SxD3uVBY9HDbnowx3UWeVmBgmeFuSmS8WpJUTLMiG16VHUPneFUxKcMtydHozqS",
  "key22": "3152KVpGwxx1nBA9PTVMJqXuZzmd9sFcShKbQQaehptvdrUVZY7L2LxX89GfaALJqBGTVh5DNabDN2iFfdjdVhQP",
  "key23": "23AuhsFYxUfE4UHy55hgbPu4hoDKxLzJWr217Db5QABzuBH6fLbmRLtScv3rfk3e3gmdhgSVXhcwfE85k9ezvxXL",
  "key24": "348TDVQA9fVihTtNWdRVqcJuqA6MekCactszvJrVrKUkMaKfYL4kisEJfRU8H5agdDA1F7kedgaKQd9Bivg5t4Y2",
  "key25": "sCQegkn4rm2vmA4vmvxKCErkKBiYRVEcTLKDXw9UZNFgiRuxvLRev6H1BoJ2qFnM9RgdCiGjEVBo3qC1HrWhGU5",
  "key26": "5ymUiU7v99ZwfyNXZoBZAQnvwdkwY8PdR1VtPr49j91FhumCAdoVupL4as4Ci8yKDWubm8X2pfBmzSqfb4GpUop7",
  "key27": "cmBx6N6duYW8B694UN64k3t7BLLVFfGMtCAHP62aLS8tuiusj7g9iUhs6ubD1TdRjJ1hFf82qXEaYkb1CdcyAqD",
  "key28": "3egRbW1QuJF6FUeujtYi7Fi76R4uApxHcSwHKw66Bm7N8iaykUomVBmFzrzX5X8w1ECUFfX2WtbA4nApevFxXxAx",
  "key29": "5Wrzx7wxqFU1kxfzdtZgWHGfiMF3c7JibFPVgaeoCtustayDp6eJ5yUasBVhQq6GFywjpZdXmCAjtfXpAPhvuhfs",
  "key30": "2MmymA3EQoxnBj4Gc7f7wY2NtgSEuYPruJtAqid1B6h2k3o8zYttiRgTgsgTPoYGYBg3sjNcWo2qs7rUAHVEj1FF",
  "key31": "3t6woJYq6S7qdy4uyf1Q3LLWVE47f5a617C5qMBqujf9iKDTm2YPHjPHHFfru3bmPXH2yuxWKK9nKn65aYWgUs2D",
  "key32": "3jWS1XvipQvJpyjcNmitjUx4deyCpWpRudpeuowwwMwZvaDRvNLarBv6AqmPYgAFNEgW8o4gMgsCAVddK4iVfW1o",
  "key33": "4yeBBKpNQHviPJiKVC6xjjehGn4kADX11L6DNaZsvKncGGskq8T3jFvUWbbpnD917N66wQST4GNT7jskmkgRLxga",
  "key34": "5RPA9arojMmiMuHqeVTY9V6gcvyphW9z8EuZ5qtDJsJZQYBGGC55y5LtriMv2qG4qscyv6tvTY3qrHeXYjxhhtwn",
  "key35": "454FHHtJXZybd9wT73by2Gsypp484Rzi86rvfmjk6tP4ygYEwMzrHZK2Ap7R8xZpj8gMtoxHCvvSR49Fht6mmrsf",
  "key36": "4t3SLPW4gC9VrRheJczWuAfbSMXExFRZjDwTyfQTV8AAhj2akSbrWeU1fsVJzDWivomrGUtfgmvyE8X2rqmGWSyd",
  "key37": "2uyTUTDfFCbNDovtFmHweBM8vurGm9U6aGo99nTW7AeNXm5psnvhZnty4vs4iwJMrwr577p8Y8fejEfXCqp5DpMa",
  "key38": "2DdiPiPCpqeYY3dpYVGy9HcatFxXtFCbAx4UA9Uxt15gfjJtmMnsCQd4pwd1e87C8A3vkWsbJhL5TF6eyAJcdKUL",
  "key39": "4urLGioJ6KsZR54UZyF1KZeZtvboJv3a1Yoxnz7rVfyFXv2Lznucovq5kkiEeHuVB5SGgfmKCBMFV4xNWGqJSi4u",
  "key40": "4EyBHtQWjFNGT1duGcxA8HmPf5S4m7QECHnFugGHLyQnKferbRR322N1msYuaW4Lt1U92EsRni8HrYzy3RYN7s4v",
  "key41": "5S6ubm8N8otmWkeqKVu2FL2zqL3HnicZfagH23qyHWbaiKgcNvfxBrRMpnGXV26DEWTLN2C8XWzhU1LLcaPhXJkN",
  "key42": "2ieSiR4UVyQGwVfhXyCUrdoENUZ5Wzi1fszRCMbsATxnvXUx2aFEMML3h9K6S5LYC8HqDbMFYAY5ayZUZUPVwmc7",
  "key43": "63T5k66f9yuCmXcc4zzWF1VSTmiBnZr1ci5mXLNU9hFDGyrVRroAc3uXnjuShf4NGkZCrJPcCSEUMrZWKenbwovn",
  "key44": "4cb3cdX1YBwGHQ23vE1WUCjKjjBFy3JhTRW2kkpsSKt9Bx5Gbd4s8RCVFBrqQB1f8cJs31aey1TdoyhN5dQMRUYo",
  "key45": "565e3uP6s7eeJh2UFvWSh66uE979mycJiPUnFq8JWbBkSxriCrK8GqEJkqNNhyGK3Ss4CfSUCoxcnPkwqdf7MEmv",
  "key46": "3N3mXYbvYxdsQoRdTAAR1r8Yy2X5rmCZTCGRXB1U8P9RS5PSBHcnaScZwFTg44Bd9oBeM1REBtDp224c6Vm8G6sh"
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
