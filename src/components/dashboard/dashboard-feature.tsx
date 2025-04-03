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
    "54nSVc3udhkRn38b99TrQm78ayPgx9EsNNeuZnRdeZ5YmbdFcLvm2YrNS9XLdbDjDtkCz9dPdSwxCCSkfnCcrwAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cfX5oTRptE9JUsWW5A9iZZQxSAGQSF4ojfPEXmJx93QwPF6FGvg5FVo6DATZ6NcgRYwn6CDY9Lr4QzhiPZiruH9",
  "key1": "2Ebb73kjZM9XxKyhtWBH24yNjVnCEk957ox8AW3ufhLUmKQ3LEUDQoQDDk3EeLMF6tfFgtUBJ4R1VWDYB53e16r2",
  "key2": "BPNudpkoQgVu4DVCFQmuXt2ttW61VqmbQjE6oZqg956ohqjDsM29czUgRfY9d5HV13TNRkcLjeRuJ27hyhZbGTZ",
  "key3": "n8myvSiSpMX9ZxGbrD9zxGRBjqMLPTxzNTw6sceNAuTMyUpAJeTPUMAHqX9uaxKQMnyUZDsSHTm4C3SQPg9Ce1v",
  "key4": "4YRsBJsf6tnNJF4MaxHvXwQBEsPeQxmoSgmDGNQBWxkR3eJbd6MDUcRmxyLsx1PrxFns4CJHzAxnBFARbQa4ZA4d",
  "key5": "gWp1BeyLsDYCY3qpXtVxzmnGDHttmet6uTLQGLZbXcWjrXhEiRaeyd1LV6CFpWoaiwLwihfsvEqbKCKCLQ7E4dr",
  "key6": "2hNqdKpYK3iuA7EwWwu2yTkm41fgi1tWAgeQoVMeHfuvvBMJwbdCsSnt4eAbQxtzJj5GSqoh42L6rh2AQtAbzaFT",
  "key7": "3kX2FzavMLASxtr7SUrwWuQetUBUkEjyCjJ1QqQnb9Lmoqzqh8r4fGjb2KrWLHzk3vDad1WV3R1dpjzjGo6hFAht",
  "key8": "dm1Ebz2VcQX3ymj7NQiu8wEfBE9Qqd6aHNv7w3zpviMaL4vpTtXzE2iHSXVGW41wdiQkeUtw19YgCY6s2Q7iUB7",
  "key9": "pX5erZm2v2qGDw7GFnfTp9ztybeMGNzCuaADLHk6QXCdUV9M2Xs68LyhniK4KiTWbcw7tXAjGWMutW4jBWrAN1P",
  "key10": "4AcVYc7dMp45Nn1WabMcbZ98ppu4eCbFXYTHRW9dpivj2D4Tef97obdGTZhTMdpnnB5QAQ3CCh8eAM7UqMwKUtrV",
  "key11": "BVaLrJHxNSXYbve3K9jKdp5C55tUcdhJe3ooidqfcbKSByaoLRSztcRvkTs72FgPXmzk8VmvJEjd8yUw1f35qo9",
  "key12": "21HtFMpE6qTzrJ5pwt9sWVRVcTEaaiTEVohV49RCL9kYfVAZMB4F4qZBsxSk2RtK6LWUuKSC2vv2FqdhrQqCYXLV",
  "key13": "3uNFxTzhT5VzWMBpxoKLcwC1r9ZQsDaShbHaNpspRMYgWhjYFSSi6gDEZiXY8Xpm1pk5uggMtNCw5KeLYNm6ub99",
  "key14": "4J5akskuS55ji3P6Cq4JZV4BNtMPwpJqA2eTq1UpcXqMjjFQVSE4LyMZobrittyu3AWX1a9kG1GGaeC5wBeD8qAt",
  "key15": "5pVPuVES8irVee2zjipHLoK7zUvhD6Lw3TLSzS7Z9aisYVMXQaBXoPjyqEkB4fy5q7mQXjLGUTtSPkTkEms7JQxF",
  "key16": "3C9N97E1wJAMiJ3MtMZncnyadDoRbhCSex2r2b3h3kw7k9WmMpHyv6xrmnP9jjmSVuDZ8LhknSEhCHNmKJmi8o7D",
  "key17": "26Czvnz11MsboHStBLsPxSzSmqLARLxxxGGDJnmxz78Qm4dq9cyXJ2fN54toEp6QZvExWcpHM9rRvyMKXo2h9kvY",
  "key18": "5BzXvfq33JK2se21zHjMzpqfgLT7NsMVVbGyhZMVbyWbUdNoxzFju2hWdmgtpzDG52PMbVRKj92T7rEsAAWReYQm",
  "key19": "21LqQ5WV3NNzDifMJLvsKAxUD4E8AaGuuWEcwfSR15HJPxAL26XNX89DtLhfE1kJEowMDv4FxnhFb5LHhfka94kZ",
  "key20": "5cJHgZiaagMpNkzXJNGNi4bHUnBEeTH1nTGwe8qWnH4Bm72S8ddx3ob27Q8wcBbKg27irHM93xSs2vpwhNKsMu1i",
  "key21": "276padAtGqSayMG3cSpEWiypXgzhyjSaBJk2KrHDUpe9DoCaaP6YczGSHotVPMaweBzTivLRkJ5pWaevgM7dTmKQ",
  "key22": "3segRmYwVtDqbVB31C9LNqQiNKHbCfLDEHJb14fJU361gxsPefwNRUxAupU3GVqku7xpx1cexwz1ehpiHTcpEBMd",
  "key23": "3ioGruuXDhpemJeBKDjdjDoeuWEDKQhLgwJjSXbFcC5WYWwXwevvETFdPonR7dngQhf9rD7tu7hzWmQcXYAEVY2M",
  "key24": "38BJNoMyinXNciHPEvXV7ZLhTbVBJrgjQ3x3gnrrrQ8nX9TRrGv1Hg1hoSZFGqkz8tH1v35U5ieVGAM7Vjh3rgR6",
  "key25": "3W7V995fQ2cikHY4HwTVB5AtVdzoJA8QBDDJan7LRG9oo6gfBW1LHASAYbLLeBscGwrZ5qJnTHbiWX7SYS2jfjCc",
  "key26": "5c5X5TtuC7CrnDYF4rsFdnhcwp1F4tSFLHkraMgmjrHn2ihAAvKrB4kmeBdus4kySbbzuGskhoT5dRoQ4KvNTffp",
  "key27": "o696BqBHLXr4cJgMs1JzRPpPiUvThfTcCZcaknB3gzWmzDkugn9aciQtXwzSqtjNzk1zL7ArDD4k2UhoVfDq67Z",
  "key28": "51wA2Vb7qhvf7DKZ1F3EFs7A9eBQCLbk16uDrKPpyaLNDXoS3mvorfUR1LGNbaNCnsgemav1vhy6RLn7mBPSaGdx",
  "key29": "5oBPccf15bsDxiaV5DQNae3JbAu9LeNz5ffa9J6rAqxqM2UUjoHsXWtXj6W6tisPDS6ELMrgTumreRY8M9yJuv8p",
  "key30": "2ve8Eeja3vQwRfhH5isK6snoRkkJwRg41s9KTGoqL947Tm7mRxosyutbi9kngjdK9wWyJJZ1BMzkcsbLgSB2PjpS",
  "key31": "5TgizT1yPwZQHQHmaq3QompgNAuG6EtZoS27YAxRvqa2UxUSgbCK3md9LLU4szSPjZVmXbaNjYZwVonUfEG1YmGx",
  "key32": "63VrVvsC2WFA2cpQFzUPWhjtuz3bcwQzbcgikDnuYFazWGAkDHbMN9dTdjhUhZdzyzmrY2E7PWWHhnkbAhvBshEY",
  "key33": "cHwHDFT3HFFQaQQPt52ZhziJnqHktX5EGQmbgTkMvKQHX6AGxdNja2ZgYaLLGofMuRY5o3aLELDspxqUEg7py4u",
  "key34": "4T8zSJpvDd9bH87SB5pxVBbtEo11rRDhHdY6Zid6X9Mon2TiJUPToLgZEgnXd6SNeB67fdYA4mwXGAdQLHLd1FCm",
  "key35": "2xCEeyB9kbj3hMSfsVdL8PciNeeBXxETqxWYTACjqi6hDqRNbQnpSYV5zk6nb6Gg4SgA9GHyPYsynyrYPrfkHW2v",
  "key36": "2iLwuBxe5rwAT1RGbmJXGGfz8UhJH8T1rSzWVmgmLX5oxXPNJrH2JXw2uhtX9CFTBeAdPtuPfxwVMuHqEL65wspz",
  "key37": "4uiXYa1GVx9hwq6AWPvQMr5PPZSyMD5Wef3vQ4vFhHmhM9KBTw8wXSmZaZdSaK9KhF6YE1hp9mbiwCZef9qkn8UB",
  "key38": "37V38PS7egQYDUxo5kSteV3xGBH43RtcFjAzYGoDB1Mqrhsnc9A6VWBokvbj8zX7XbawEFR6XRFiqGtCxG8hkr3b",
  "key39": "3fVk7gbKLoPV3RQb65rtexNEReMJXQUZqeYkRvPe2nbTfJdUWamSXcupw5W9FF7Zirocx1WpbdMnajR9fcJKF8LE",
  "key40": "2K76RMaGKszHnVhDWqfgisyV1uzTYcoukMMWtQ8QyZseDoeWUphkFJqjJ9xxmERyzMMpk2c76GzxvS4MbdP95exe",
  "key41": "5tpFL97jAwZZpRYvcoLLqpt3VcGpkJnhvPA9Nbz4rr9uWyZwxo3CaLeRtxT4jXpXEqj6rngQpP1Rw1gZy1gRMbJe",
  "key42": "4n8TqpcbAABsNmnxEURZw4Q4ikn92tVfd13PUAJzeLBkbjifAiSnjTQzqaWFxQEs7T5V57EDqwZ5jtuy5Wb9daSz",
  "key43": "5Nxd8K3D59SBRZ1VFFFvGCigsCZr8qVktVFWFxTAXgHHoPyzBgiz7vTQnH3fvHhshCr6d1XwtKRfeVYiM2oX6da5",
  "key44": "5Zw8dVVz3HeGHxWHzqqmqd7yJKLpXzupaizYwxZKy9YiSSGAqXkbqFxexrEeo6qRLvr8yuxEJAK4VJZnuM6YpYW7",
  "key45": "kKKASjaxuzNpBNzq87c3sJLYprU5n2EP9jHNJJ4iD3Sxba8bRYZS873kWS9nVsUh45Dm2s9pDnEjWCBMATLruHN",
  "key46": "4cnkj4Bjd5HREH5oSna9fhpnqxk8Mm1KpfZUSVGnyeCayK85t2atmqVj37a1jDBRKCLkRHvjnz6HfhGfiJwgjcGJ"
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
