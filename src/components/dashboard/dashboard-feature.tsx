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
    "K7hd3cTZXwXNpUTirLsXzbe4nUZ95rqH5dtwLF6WCkn4m2Zh1dPPQg1Zv3rAmsNCVVQny4XjQvhcrTw4JndkND9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZX36r4wvbJ1P3bLpPLJodXidMRd9gVMUcih7nYtAwgSDkwZiqNRFie6qPxpi2RidJkF6dDvSaBL3FW4jhphFqjQ",
  "key1": "2FpVdouqhHXU7kEb3N6sGdxrc1Rqb4LsLwJKCSXQVBj9Ltu3fd48ggjXZRwWA87UhL1jSFidGt3Ef4dmV9B2Rcs2",
  "key2": "tV5wdoKaqArkN71V8pnrKiJpafu2WDorNcU77yyCnLm7xAnvNc3LDtrtBLoM62tCwDdAPEXSzyhWtJUoHGVU8UD",
  "key3": "4qgCpcpamg4DpCiFXejz5N3YBMMkKytqGruJvyCGEYM7H24zxVVKhRqtb9Xaj44Y9DB1fseyFuZSNXVDfsbiLaT",
  "key4": "4RgNBPCMPv6gjcDN9HG19gK3MsQLn3eLMUbunkmXfvL9Z29kwEMX4fjSnrYWF6szVXkjdv8AUs4vJvH6DcgMQc3L",
  "key5": "yC7WFvViQMi89J5t5Dy8rmCF8mQxQaZxw45hnVrhBMFZQgTnHjpohCCHmLXa7i3sUFa1LeEyTkh7N1WeTV7fZcB",
  "key6": "3hgdA6vK4ZDCBPXAoFjnCANNvAAW6Q3bpZvNggZV7Ab7p9zhcZAFdy6G9ERyAQegnY8xXGWUTXwZu2mWqfpatJnd",
  "key7": "2UjC2C6SHsD3UMS4xeLEy7nutDKxPsA7TCCS4DN6wYqtUx5XeFyFQDyTYAGMycFiCPai1PCmqTLB8FjBYEho8SCk",
  "key8": "5Z6qLRPstbdjUh1fGPLkXQz2VdECtbmsv9xopwor5yrD63nczGuMP2GxYsgkFgV6D4fhgZ98YeqfNafo3EBeDHwu",
  "key9": "2bZihSqBtk1GUij4n23iWTJ2CfyvEDFGAACesFWmtvvJfrBjET41VrN37uqP7HSg6CHu5XEue4u82ka6Eb1VqhLo",
  "key10": "25FzxLhKp6gEBm3aiUNSAdw3rQ4TsSe4b8zYfzg7qyR7ciYMGe7XTDjuXUAyQDeCMkwEg5FXZUCsx72fF9DCXxLh",
  "key11": "epqacmzSDhTva5pRWsjNnZiUwaRB46KYub45SShUhyji2X9cHvRMLtAqFivcik7Xaz4kqvTJgSaX51bVg2J5Hff",
  "key12": "4YHfYE4wJnhRWNVLZUAuAsneUTNkzBiFhPV3DXVenoobUcw8NuegPmiin5h5mEiBPsPKxHEG8VzbKnm5Lv93esGF",
  "key13": "3dTqiCa4DutfxUkSaFwfgvr5A5WaynChyyup69y8DSCHckXwjar9z2eY5Q59MBxCjZg8c6WjqE4spjkbtZzumqrK",
  "key14": "5KKpFahmVFZaJLQXm2NkbfHZiA6vodmSVL2zCfoo9N8AchEe2XdZMffkHYyao3vHGbvcEHxyc3p5H1NTgdF7xUSp",
  "key15": "Ae3nw4woznaLDLG6PEebMNKvjzd3CUdeyTYBWVSJNgyUDabjfA8qCZtthfNx27HcL2eBZcJEGkyacRzbL4N7F9d",
  "key16": "sYxw6NqvHQNGhjv7qeaQZHvEaHcBkU5N61h5mm6Po3p3CFDNAyqbmccyMFA8X2FnCWJCyh5CifQxxRMcDLyHbyp",
  "key17": "5v9WrKAhRfNNw81cdmamZydpK6CUXfunNRKdw696bmKGD2HzRVLJNhN73rhLAPXCAsAZDxqk1YUL9nzmKVZCTzQh",
  "key18": "5EXEnB5mDsgaHHWLpqfjT39ssVrXR9YEhKHhp7xQyXQFo91ZAiaaa8XgumvL4JeMgK7fvbCPMYKn8ge7JRFD1QYj",
  "key19": "4k88snrgXpbLrNsy7eXhpqGfaY66d1hfp6dUhhkrK33SkA3nY4kNhAwoxufapEAYdRGDVpr4DKth4zhtLF6KjsRt",
  "key20": "3DVQ1ryKskP3mnimmPGWWRgjte1JEFApTPTuK8pruzSBHf6baznSXLBxFJGnzB2D5mKfx3FAW1aGLCBfQbfenWxN",
  "key21": "2hUKvYyv9UtNWg329e3wjTjrzbD1qkQJyLhek7m1dLC5kR5uTq4VDDSMspcnT63Ws2NdQ7ohuX3JhaaArgqPoc5s",
  "key22": "4Fa1mmFa7ap5CjYJQLJDXbM4NeSUQVgQXTBvvECTEVN1zV3v3vicEATF86CKUXRVPuKseHmKe3aQui2a8kxFB2Nq",
  "key23": "KjSA2JQMVLaAWE7uRUifR8xASGtryBU1jtJXNLpu1uk1GERHD8uNo1CkfwPnJdNupnEgM622gdBMUUczYiV2r29",
  "key24": "3m35p1zwtkDocV6nzYS5y4SZdCc7DE2L7FUtTdSHpxnGPiw5v3qpp6mvUnESs1rxrsQpnVaL39hbDXAixZGFxfik",
  "key25": "3CrrWapGqmF5rFs64tjAMSueAjRVSQVuGuz4utg1BVm5439nSfogks8XdWt9xsoxzANe8tvwPCN8wxiVUKNoSQpE",
  "key26": "678pDc5xqzShBuN3xdxJJVnFCpaRqnWZFUbDM8F66pAqi17K3BcRSQG66K4ELog8Tcyi7pYhmpahHvFcgeCAiJuD",
  "key27": "VfZRHDNEpV5GAuA5Mc6SSZcoULwdU6CpnrubuQbk5GGg1H21WNxSF6Ct4PXreiZqb8smBARAoVJafXyGH6dKvez",
  "key28": "2KipaQQ2bMAA1qFXWJV8tGpSaiQEUyzdamu4Ff5noGujXtLMnmUxH9bXv6VoxhhaL74GYRrsARPHR9ZbCKon8daX",
  "key29": "3b39tcDxQBKVHN4AKJQFikcsHBaQtpF5EGAto5HRzJnj8kqV5CMS9XNsrpLr5HXFyhZD87fH9GMWcEXtjMDtyNBM",
  "key30": "24NfriFyfX6wWG4C77wNaw6ACohrt3CwiQF76kw1pzLgoJ79tNEu1PCjGoEK8Ha2wyDQt53cpq8reVghgGXpjrzi",
  "key31": "4FtT8ooYojS49vcbFkzLPYEPLKdr8Bv8P8kC96QBRNFnDPCnsXyKtYLSurS63zixogPYBH6C8wtoKgMbkvAVeSNz",
  "key32": "4Lyy4nL52WPVeLDoTxeZEDsaFwrXdnXzxqzLq3kxAYJU2UPxEoH1ojiDYmTSWR51uXTMn8dPJMh854GbP22aMLiv",
  "key33": "4LiS76ZryYcWurHkcMsLroLD8MTdbvKW6geBYAaG7D8LHcxwDgAFtBf5XpcAbBUX5qyZGwuX5p1ygTL29Uzrju51",
  "key34": "4VLmqmhMQpgw4yrBzsJtXv3rVRmu2EFporcWh8WMUGiiDg8GhCyRjvXyijUM43hXn1HEaMZ77hkyS6vgPgVRYUA7",
  "key35": "5WsV4Zodwgv6kkLjrSzkLbsAuGzDyY7quZzQ5PvzfftfBx6M4PU29VjgGJR1h7YNh74WeHDzMv6cFtyFQRYRRjic",
  "key36": "3HfW8LYw9cLcxh7MPoVSWBwhMk3kheeHvCGJis4bxXDKmyTvd3foyx1retNtwVW3taN6Vt1babPV4yyUpdQ9W1RK",
  "key37": "523PUUm3qWeejC8SVpe27ujv3QC3AKS5HmT9dTHfsSRQqLQEGYbwhad5DYsGBjDnA3zzjbT4BNaqbjRXsNsMAFo2",
  "key38": "4RrTnykdeh14NN6spq4iCvabBfMtxGXD2km3kER2L5VgNAMzWbXoSFgQ2X1DJ1vFvo2tSt9dzjV6h2UBP7Wdi8MF",
  "key39": "4FQckUDcahEbe2vRM72ZwQwJ24awY7GiQwBiaBjz5di1rJrX4rhAUosV4GDT265LjSWETfB5zfTi7XwAUEVAcuN",
  "key40": "2NMDJLmXztyUDQNq1M88BNVDMbc4HtiWwCdSYNyNVHE8vpqXRdtC9Zk8XEVUKT6Jb2n68GdKbsLPZvZm859Zfxrs",
  "key41": "4wuTFdZR8XQGscNrRBhbjwZMx7AQT686vCAiooMXUr9Nnt23don5u7EcR3Be83kEFRq7y7U71sQh1prPuzkjEdAU",
  "key42": "5K4X77kc1ESBzeL3WfdVPF31MEzYUXy2CUPHZuReFrK9yUkebgjiLrscFrohV6rTKRUUgoFHvw18BAfLtUkXy1nr",
  "key43": "2CSrCgmrj4jsJsajHPHz63Jn2XidBspiasP6e2SW4B5F1PjfHMV72kdGu58WZx1Gig71CWYvdFCHoJcHGLzxV9HK",
  "key44": "wC9hS3sM1YHwHEokmBTjh9odMm46dnGUQZRRk47QReRQMnk2miQxeNqYcFHsii6RZ6Avjr49ovMEyWucGzbBMir",
  "key45": "4uKEsHiUveNLyxAF3k2ytmSxio5GezEqYM85P5D6SZYHs51kR4a1uE5vghXNT3PQJNpcMRHspGn2ACgK2ZqfgMqS",
  "key46": "2wCUzrYXxyetQfvoP35QFYYjvEMfaotq8DK4mY3REDCq2wCNixvf9o2kaAZCeDwitETwGVt3jBJCfvtdsoT9HbyX",
  "key47": "5SChQdHCbXTVpQmiq5YuKuHWDiQK2HQNKVttgXQ8uJ3tx5qknXeWHpCC1cx9yFLKmQCUMHvyw1YFP8wm9GHXk4sZ",
  "key48": "4iHmUgKgetAbzpeSNCvJwvL1Sfx6bhWLEBzn7i61MBzzPoZatLTjGyzVZ6G8V7Dws4YHgRaRWgsRpQGe7ainVytD"
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
