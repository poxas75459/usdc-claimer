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
    "kkwLWSyt3hcdLF9pjzs7QTjGPrEebJYUSXSgj2pgqTvSM3R72hdvncqsRX1ftEfXqb1NjqYd9GSNyCbBK3x7zZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4skxsvb9ehQAczbmYcbAxBhnfcWsTtoenGFLmg9C9t9U8W4Ds21bXEDsvPzYZrQXsaYJERJophgFVVoSiMi7NoKP",
  "key1": "3cZdH6PSSxnKVdwb1EHf75EMiEdRkLCnuRQXkaEV4F9Mpx8zojVRh6ffE8s4VjBw4CmTQAs7DTL4cCqRp6huUgmi",
  "key2": "23WwSpZ7vSYvAFFey6KLqThLNaRL6hAGdgE1HEfVHJeSBLdGLbMtuvcr1VwuffDpPPywxs2fA3gtfpGWpoFTBLaW",
  "key3": "H42crXX4274UQbAcJVnSU422YNQCmGaoe1qdSJEkWFPoVGrZmT6PYgrUojfgn3YF6usqDrZK8jj1nzFD7qm5hib",
  "key4": "5o5SMST9Nv1e8g59VVYijtADDaMAFpFuS7XufE5v8FyiCWTTE8wXXJDMKjyrUyp1xGE5ArdhyGwUuh8iVm6PppEN",
  "key5": "621MHXExCNXaCuGr47DdGnnigHb3i6M66RofD3rvq9bFtjysSRZ98V4tM67ifp8FSk8em8WUkHDARoXRqtWAqCzp",
  "key6": "3d9yPA2seNYgagvNTCjdJ9uaqK7uv8qDyu3pNuJmkLda1rWEa8qPfNPiG49vmArvamSesbAZjhexcpQ9Wj4NTVCq",
  "key7": "1wWgcak6JtF3KhwqHzv8dDSWTYiAoiB7eeLR7PnpiQ4gKEfPkF1EnjHSpiU61B54qfEdm3cMjggNfMPGqrFxzMw",
  "key8": "gvTeZaPn8Yajd6fcfiXwX1TSpnNuBuJQhtjjrBybqHpxufQ1ZfC8jUpwh112YCSfVn2YUQVXCn8NmmoexjSVmCi",
  "key9": "Dgy7vPCwYiKcVf9MooTwAAg59RbEB1AaoLsZTVjLEcQ8Ltq9cRnnKaoEK7Uif8p9EpnNExGqzGgT43KQwsfhv2b",
  "key10": "3wyJBu2CxyFVYYAALiUbwTj3Di32Qjittn3YyfcQatt7v1WJ8zHoPSut4DM71WZDNuwoJ4yiPN9HC78XC2s4qCAE",
  "key11": "5A7RxDcw7sfm74xsgERcAQLwK8w7ED56dMQpZvxXXB87ey71eG2oFHdWDvdFae1HNcQ26LdCdTiSmRELBKvFZ8Qp",
  "key12": "4WYMpRd1tuS56Z8QTw8zZTbB2yK9U9bUXkq2s5R3qaDTVcPfE8a6wPuG1Lzb3FpY7uybejCGs7rqQqpkUJonCqPV",
  "key13": "62M3EBrBmqqQUGnwper2ktAQcTsGKd5vbxUUtkQFqZSRnuRxKThh3va34zLNohzayd8H1MwdGK8jb69Q7ZAFo6hd",
  "key14": "ZoMTEFfaUaeMjE8v7zMPRXoGw4YA128uB2pvJEuSgRZ98PvcJMGbVSroyPwpV3nA8BTz3wcWuTLyowqxbUZKU6w",
  "key15": "4FNuZmijiiYY5BJKEu56R6XbtUbYoMQ4HhSQH8DfXUnHfC96DvGtk3qPVn5BNUDbZCERGBDqtUBeqmi2Zzdfiuhr",
  "key16": "3DU6uUhbGCpkvhC54iedf83RBDqkC6GwXFyXCtkbqKSDgm86p5S1KvQLjy4rVQ8hJjSdmGEg25kvpx2RzUFiWaRs",
  "key17": "5mGQTZZVMGzcszZGx7HiR1VfVPxcXC3M8f1sRbmc3uJZoqE5yUYi9DNaqrZzShLErKyq2cStmWSHtSsaCFfsyetU",
  "key18": "49vKZaaSVogBpUbStht8CZvMJ2fzYThigRc5U5JueCu7BE9oQuRceXr2brdQKuHeFLaEAps2MaJdJzHuWqxeKdsE",
  "key19": "4agbKkApVEEDJCudReeWRtqoZiocFa49rPPJFRkcrqVQ4qYh288zB6Af7t5JCJfqCpdfnSLhJC4jj4DBfeavT5ao",
  "key20": "2PvgstLRCBtGJitSeub9kXrEDceRFFUTb5TaHNTZF3UXbGZ4oy9Grbf25s5j7c5B7CHss7GC22mYgNTvL9YFjdKV",
  "key21": "5LQ9HYdn7hffJgxPWjvhXESMvv4guBbfifYFn8i9VPfMWPmxwF4smryqAS9KAG3osdrtJPWALxq757JLL9xLm1eW",
  "key22": "5FoUNZHFDTQLbzHGAd1oRwofzj5CJkyMnwmJkjaDpcW95wg7C1CJhewzbKx85XvnQwYz9MRmkoyyYWQrMYzGFWec",
  "key23": "2txwvs4WbpJtPns2r2MwLHXUtzCZsnvKK98LDi6AMmUQ5ndRbTYyUiq3JLkE7c69t5JtxBeHBT7xzskReVGFmCbz",
  "key24": "3RVTdDtD7wAKuCHnD94aeJ9LJnoLdxhWEnidNtF1xSsZAfQgB1c2K6ExNZvt3pq7snQv7dEAgH9tPzPT2u1njRhX",
  "key25": "2XDgWZSavQ9PdKRyEaXg4tjGTPTk8AQtv9esVBGz55PWzaaYNr94ttKHEW5EV5ovoxZuftu79jrsFPXfuyYDXLBC",
  "key26": "89Zeg2pPdrg7qFyH7vRg59ZPdrx3tzTkK2JgctMR8HpgbSzKz5hTZ3B1VsEH2zqnzyTggVBJKxnH8rc9gNhuauV",
  "key27": "2FmxVaXh5ixFGrXgYzayVxJVawpBqfxw2ASZkbgUwPFAnwXmb4TM6XNgoDBQ1UhLKyMY7dTpfU3fkBhn6iZ9eM1w",
  "key28": "4t5CPFdDWMe9c8v5LFXKpMBMGgMrDqKVoGHQ8s38ApRvvh15kTUxUbBb7CvmYv45Hy5X3sHanteRWnwkrd4zErZP",
  "key29": "2uLAyAUjcC2qCRnsq5CEMN7VhDcbM4N14ZWbvTwsYnJ8yfwm4JeJSUmaB1bUwTsquSd4PpgPtoqtZ7QoHJyb7Yhn",
  "key30": "5hYwzAvjG6r18FU3jmB62ad3CtTLbjAjtvhUHewkdgn6HAu4EqHpCxdVMRwcqEDwSXHSnxwtHvif1KBTxwSvejLD",
  "key31": "35bLABeDV8NRKzMczPs5S2yPxW74sQEHV9CVVy6Pd2Au68DYCzom1yk3Q1bfTTAiChGMwfnp1YBbe5XfH76AZwn1",
  "key32": "5TcDaMurkN4rZeXUKa87qqKSvJcw1At8H2Huhu6KHJcySwqMYb3L4D8U7R39eQmiMegZ5SjXBNHi8ZpSBaFygieV",
  "key33": "4mZZGxTWf4G2UnqeHBEu7EFrg1mcAxnqpxBpRnHf6JxCcyweWZn4hndS8Tr1swbg7o5BCNh7uyMdwEnbYEmRBaRW",
  "key34": "5eLZU63WeSkVj4rhcXnaXhYenTa9taD8Zqb3jXBNw9W43ALP1hWPcgSUwmL8MGanjPzp2MFZA9kGyJGeREKLGs15",
  "key35": "n9p2iyU5eG4U2L29N6TaJr1RSTHnK1kE6mcJXLcRwZBXLKkS8DvoRbvA7HYmE1o3MLy6Pno51Gnumu33zESLgK7",
  "key36": "5aFm77G15RawqAgUGvsYN3JtaQdSnHkySfX4EbtNVWPJMWJZpCixtTofJHbijq1bjUYeRW7bf11yqVx9ch14cCuL",
  "key37": "5EdrwG1U7NumTMgep73YEFFyebn5SCL4G6FAa28nizqkRPNAc3XgSA9fdvfyB4Q2qbcPQUWtvfZPwpu23KamqFvS",
  "key38": "4Yy3dN2L1dC1ZdD6GM2Kxj11kXgan1SEuqRiTaHNG5Lv2uuY8dihs1jKJqYYw2sabiG6Jgk8BBnxjqoVPjgXcnAb",
  "key39": "4JqPM7oTccKr715GTvo1xxsmwryJVxjvEFa1ZPKw52frcBN7tyPe6E9s9wWQC4z3wkPFuAqvq76g93YpJUwBuFDY",
  "key40": "3cjEKYRnNB3xQv74W9XLyGB8iHoRJzjCSAtes57BReJgqip9Wq19xBUkNgjyv9QTzsvPAX6XxEVUAqH6P1k95LPJ",
  "key41": "2KCav7s8AGrdFj4P9Bjowr2SC19YKbMBk4bknhHiuTS6ofyV3H8bHzKcxB75GfEmFgYL9UFJKxmEKJHMPc7M6pif",
  "key42": "3xrSBrPqs1EFGQvypbsZjntS7XdQiiFZi8qq4Xu8qzS21SnBEAPkb8tvRpjrvG8iUsq6rPeqqoSa9msqXQa5kohp",
  "key43": "5WBmkYm95bvPBCyhVrnABfRRgRkfLTwBkHUixH22DXicpXTp41nyjyhHsBotnWjnVpv43YCbrC248tyaTtXBYRk6",
  "key44": "ibij9FuJ1WmnLg5fKS5N2QsmJ6k7pXTEZYHMLLpBq7pkAZ1xXRQaqs6tGfmDdviEVe6ZCx2yHUiX6rofP7ebykY",
  "key45": "64tXPdLEtsBfyiFk5oExsGeUxxnRXUYDoPfS7qkk51jn7x6bRoiVyYfnz4vyZBhJFQuA7ew4NxbrWiGW4cQVqQtS",
  "key46": "5Wa9192uxnm2bnKxRZBBJB7LwW7F5uhGCuw6V6tC85RncKx61xTG8vpnRwFMDCZCXJZqT4sYTzRx3fksghn1Bp2Z",
  "key47": "2HECsAtE4KysynYK1z9cJK1uhCoF99LZkWAFJrp8p1TPgZ1VQLunpqyJkKd7aqgnuYhHBeLrCZeAbQ8fuEiTS1w9",
  "key48": "4LA11Z577cfPPnUJMM2xxwHUtMSp4Pnz7ZAuM11HdVDBs756ukgVXYaFXF4eK5jH2etjgE7aw6Wf8BV3ZF8QrLMQ"
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
