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
    "C997SdjUB4uwnzz5gfcV4sbE4UjPjcGmnaguu1whrPCbVadnSUXeJH2PhKNXQ1DHws1U8HQDt7j3aVgSBNqSbEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W11z37yNRUzk8HqebsfHAHjjBykkzSJvjiLGvkwSeZqmxGX5h19KWYbjDMvWTpSRYQMnD8pyeMAmXPojQ2hMAw5",
  "key1": "GxNtbuk94PWpUmZPCgfUzMhjt7XTm64GhN3MT1qinkiix3daCFHFg98DHjaLQ4Fnesi7sXRSuKN3g7Mssi45XYV",
  "key2": "5AzWZgCbRe25uXihgqqdao5GKmUaSuBiGXj42cumbJfvBWgdiBSY1vQGkZ51wrR7SdkZHxVFyubGv2V22tsUfVDE",
  "key3": "41T1y7DRnp4BD8T9QQLRk2juRPo6QfDY6B7UhWBjACv6j29brtkaEzHzxzhTeJbTCrzQi6h7n5AeEu2NSSNiheTs",
  "key4": "3NyJXJL77dKqdyH5n2VDrYcyELBoPPNhaaPQoEM1cQ3ijbq4s9xEynHF55Nn7Pg5JLvt69UaDVHmBLhqDhAKnqQn",
  "key5": "5iAfjothj317aHcipW6pBxsF8ECcnaaMy1R9oG1rQwTHkyczFwMt6B1cAsYsyASTZzMZmnBh6aWFnCh2934y6A8c",
  "key6": "5rzXKguUBRmVLwa6WSQx7HSamCKUEJTbVV9R7nUqP6J66d4t6ZdqcdTuSAnh17XMvZ2A8PD9NRJZmJeS2SoW1PNY",
  "key7": "4Z9bfDftn7ECDnmjoG6kD2qqVnDmBuMJKpz331DeRwXqFxRsuGaLm5ZFRRSmbfwbQ9HWUpeaVidLxeg1UQZPWc6W",
  "key8": "jnnPujGkyVZL3eETo4NVYAL6CXj97aLe31czNjyeGiP7RcNYWsSQBPwLnThwq2WnYNZFiUQ3eC9a9rEvBGATMNa",
  "key9": "3keDdQcLfXzH6bVCYSxeHoWokBnnkTZ1EhkeH1g1duqsnvEWr92R6aBU4iKMsGbqCwAmg55rCJ7bNG1kKSHCZA7h",
  "key10": "3MZvQTTRhdrADPAW6iZFxPkBuqGU2ZnXhZFk27ThFmnJhzh3tM31CqFuj98EFq6kJzyXhbaVrYxvthzYgXdwYtxP",
  "key11": "5ixLiphTo2B4Kwz2QQCxbWL1aW6s6AhPDyV42BcpC1rmgF2PEaBoazhqJRzrw97DrskpSbYEiWHRugcwct9TnADZ",
  "key12": "5KNcVvmattSNFJno6sUPbYebnGQRZAEWn8ywpcqSUrXv3S2ewF2YquVmiJ8YccHaXWTPxHc39ZnTxHQdhzRJ2HXb",
  "key13": "2N6KokvsUV5P4b5ws5ZG2vSv6iBsydYgesnUpuT2DtSKVYPKZc5s1xBs8PfbmEdnVQYX2dzFixqmvz56Hn3s8Kkg",
  "key14": "5aporRSD2PFrvf5ixUucxtMRmELXDJRGPNfpSSKqyXCMp5PcTQQCXhb3JVWHEnw4VJkY5UxMvEYbveVxXV61mm1W",
  "key15": "2eoLe9gFmzcH1s1kRzvvkscA6XKWRBx3UGXrrnrXakJSTon1JZJNncuh9q6oXyA5B1aJRGWFqeYL4EhwLNw9avVp",
  "key16": "2LCB9yG5BpdZgUDZe4FdsdXCckWyAVccJHCnc1aZgDZRCPZVormCFVqeeuNKJvWKy6cjL9Uk28dFDfrgvzCyBPx5",
  "key17": "4G3nxooGUwuJdgbg35K1We57r4tspSjggWT1FYFCXXEBxhT7YDUugKE6j1pAj8nvDoEQ1vFdn9HZ7M1HMhkd5BsH",
  "key18": "4RuADWtvVmVPQzJZfowMiEJxsdmuh9Dm3nw8qJ7BZH3iZ66naXsGVsk9ehwW4ymiRuZDVrrEadrLpCd9ftAQ81LA",
  "key19": "3AdoVTLPS8r5ZhgtEcBQ516zPcvKmkrxGS8EfkUzpmdfJCDC1a6RdM9HTR8RdKRFJ3hUq6SsVDDrcZzJkpMtQabg",
  "key20": "pgBpNg7Cs8Hy5bALJszbDFtpT2ySZwXaLTjbSrdie6Mcb8WtPjtHEdRBnB8wC3o4DfCJ2yAEeiLdjAa3nAqJbyR",
  "key21": "4eGMrrhhWWwmTbf2a7mJqNVDjxEijfWb1RZCqZjyeKppBDwGv6eKudNzfxuWDN2TDqVbTsAqD4kwtuULmApPi5VS",
  "key22": "2p8ecp2vos417KQHcSR27J7EbhPHSqJqxA6m1cQjbennEhXXQ1GDtLRoAYTcAcJ3fdd8XJYzQNeHQAbPc61JeG1u",
  "key23": "3Gkedh1MaXo29jN5oexrT8gwqw2nSmPvGXp87DkzwepxAVRTu9XVrbsuDMwTwKkQBjTReELXj9ANd6NFKS92EkVZ",
  "key24": "gzeheKxLWHMXE47nE33pZA2HwzotxLNLEhbnP6rUz2XZQa1xjEsgucRTXXg9pxtFM8XHcHxLC23Lj1mMosBgk7L",
  "key25": "3QdHjBEiihwoA23o95F55KYkxnvo8Fr6Recnn4nvexNeiNvRCdXtUcHCadVLU3v1wgogtvPg4sw8Uc5Pwsc66Lnp",
  "key26": "44XvnwaJrJEBwQgek9iuMXFUZsjjzgvM8sS77kuJe6FYRNohAwYA8TJdWKnxJjgzUP4R9S15XqbLKud3TxDMs6t6",
  "key27": "5tvaoUicG9U1XabfBrsAKbdegCiS4RXUFxbz8W26P5ES86YRHYw96QorcRiUvi3BuTEWccadVStWCXZkWSshvT3T",
  "key28": "3NbNoW4r7TeiLLACJ8n3AgJG9NnGXDfeJ25bS63GQunJ9yWxqgkDRp2mEfAuZ3LpqEWPjim67zViNddivr1q7pzS",
  "key29": "5AJSwLBLSjAqen1D2rtE1P664e27YgeRcBe7ZVTJ8cxiBPLCbb9TEWpG8wjDP9sy2v3jcSxu8Wjg3qK8vXwBHvN1",
  "key30": "39jZMQQw3e5aQiU7SBnNfqWJHdtaRK3YZ8APt3WUcfWKaHAnH3N7WSx78XjZkX4vy2EvnF1QcoN1eyXQP246eHF9",
  "key31": "5QANN2FQPaT8CceFzYRMuFRAR3asBuuRzJSpZNbfk3Ms8nzgrrxLgGdbqzxMWveMKUSFu64gd4xuKTy4AFiHZKBp",
  "key32": "oscwX5NFZmW8JkW4hMTJqpXUy9ac3jXKX2ZPmxtK3mPQtdVUkGJSHDeKuuWWXBMVou6rYrDnuPiNe68pX1dcKf3",
  "key33": "2Nix8rAHj5P8QWv4BgH3FDmbH1Cs3hE1E5B7iaYYouxhiQR5Tdson5TVpS8QSNt2UsG4YNQgKqgMqAVytqpHuSZ3",
  "key34": "35D4cvZTyvuJQsdNoGN5kRGsFWTmGH5gWHFR8ywQKhQL9rWjuWCs4sYfsuY4NSGLtXSmxLuw33gbjYmCNSFAYAW7",
  "key35": "3Efxny9zYCdfowLyqUEy6roYgoHFn6m5qZz4hKXHkrVWKS936FEKTcfRuozgNqYrKFHtXe97tEGBYcx9Ast2JAHa",
  "key36": "7V1vYTBuEkSA7uJcU9fNgEfx9Uj1XtZG5q9VcUC3o5jWjLW7bMg9WTcz5W8eFpuoN7E6HXMnGaEqBDFGA8hgAVR",
  "key37": "5K6wEehLFSwkTAhY1syv4P5FuAVQMcd72pHqhhbcigarvhJfyCE82D9WPvtDanes1CqJAA9muRcehhHxybgT9F68",
  "key38": "5cJbhFhh9Jhv3KvLtwmqx6opcjRF7KAGD7PzXhN74H8FAtG14RrjatNcpGn9BJgTZRGuMqFF7ixfEeCHqrcCDMBQ",
  "key39": "fJq1VtGwuNjozLsPbtEyrgys2CfJLy2LAzFHSNU7b6fQzwXicGU2XoL2hVibxH7jUZ17eDKDUff6Lp3aGsZHs35",
  "key40": "BqoQH9zhnNMABBP3k9NTaE8hJE6MetMiUB1us8DnhNZCx2qYsFXcWwzkbmAkSb1CVzxpw7bdyhUEzWBteMUeYF4",
  "key41": "4d1owC5EnpeaosQnEZLDGeQt43Xdx6KGf6crGmhB6MJQ8pJMGkbBjkKCoKej3fWV7Fn78EAzFRYLVGFfVsVrGuFU",
  "key42": "3ArntpJgf7FCdzyASEQ9kQn2hx2GDZPGAEohrefosMneh9GaCJNDSDimFLQwMhTNDH6yhV58DoYVZd3vcZQ2KqAE",
  "key43": "4gYyJhxNM2Wq38ffHv9ehNAtsk1DR6vnNrvUHQMrP9sgk9h6ysCGqc3qe4MHU7eLDWS8uJEGPcbtudND9TNTQG9c",
  "key44": "2UeqNMresdANrDu35hAPe3fQFe2J5aJJEY8oJY8rrmoqZ8ux2b9PYw8WdQVufwg8F8j6eKNyty6CvAURypxACdf2",
  "key45": "4vyhyLTaCxrK5nvq8ThVHxL7WfnHDobxPTT3AV8anLB82G7WmkEoivtmrRBZUKa6rkUTEyrN98KUn8veTfJs6Npp",
  "key46": "65gDnowo7Q9vjAqozAqZLoCvRbTpWykQF22SyGhi7N6CaLjhRWXAhzUTwmxWi4XfBafxEz5VVSdALJ3WqToeMRaD",
  "key47": "3mX8SHMHGoGBqAhV2jW6pdQVbVwHkCRmMjGP18ab6ZiiUvNQKffxwrRwtEgU19SWBuq4LzNzJ7ZnaP6KfLbJXyLo",
  "key48": "3f5JYaCG3H3s1xNcfwG24ZGZHB7LCYkdKAxyYm4ZjFGHbTmU8j9m1xHadcUh2s7GqqoEzQ2LjKCdHuwJu53rFJnd"
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
