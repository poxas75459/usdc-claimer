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
    "31wCWd26QwuBt2HEYdk6S5wnsnqHpRJXEUozFSh3DVZ47rRLPFReExoQkjFZ2GMNMgGENeqSkToM6atfmXfSMcKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nNCe9VZqv6c6a2UV2zm1anzXErAj17jevhmnKEZSdogWHaJYHKaoFaSva5uoe12VYKt1U74kvUBRipnh4xA1fdd",
  "key1": "2evkmLdfNs5y9cJssQWxQqp3smBRRniWMmvibtoN1YZbTLMxGWVZVcBsYr3CYJta42hfVn4z5x9g3CAtCgQuKnxN",
  "key2": "5NggfuUfrhDuD1J881Nu6PqLj3TifejUi3NgaRzWwgXp3b7Ego4RnbYksUmSUxASZDF7sy4QonAnFPhD7TAd4yky",
  "key3": "wj7uHBALR8UWy5pYRntNBJ4kwxfLv8YzYF3A8PWsPZ87DqUSVg1y6MKMsq8eao9JvRFi27UTpqeRJ4FyZiiPaSe",
  "key4": "2sTtb1MbbqAwUSQXBNFbp1CfuKEdM58NPExy3iQUaap4N3RDbLUztEDYpM876pQor4WdfixnC3AAW9zKmEn1N7q7",
  "key5": "3oTfKGQpF7KCb22wXEacQYntf45mJ3KLzz3HcNtrW63AjyjSund7SVk8UYyv1PeT1ySf3NZ5hwzSoewzZCaVwB1d",
  "key6": "2BEXHiumbtKN6Jbzzv72H4oS5pWjbSF41JZRDPd5aRJvPDU3QpVxeGRxGNsNd9ZKLBKzz2X4QT9WqCPwKTjAVpdE",
  "key7": "4DS1HMKHTq1cdgdtiANszrDLRoHzTznnnYz8aFYipq5JNZNUTc3WZLV43s2UARerPph78BDdvx5ESwnsWkCioSCe",
  "key8": "Mc5rCoTugktxVZKszf9p8TsLB2hAfFEWsKQ14xuruNhfCtzRduHRZtQjAMwJ7ZjVXhrUqNiBL2jEaS2sZdq98RH",
  "key9": "5XBgqdP8VyUPSwSEmX19qErFnh2gHVmRp5kSBEymGVGTHZoWMp2UPWs8418ixxhtUKqFXo2mxm5gVhvT7R1q4cy6",
  "key10": "4Xf28dhBHAcWpBpi1F2f95nfPuvbJ1CHJPyQcRERA29iqDV6vyLfnjGJFtfrfMnqrj2ptxp2Vp7NHMzQjgWnYR5c",
  "key11": "5UzZnzBQudFU82tFYrp6M5vsVFyt6AYts3NecFoj7ZL2d8jiaYu3bhukBH3VvymH511WpcxZzsV7okyS7YYX3PPm",
  "key12": "5rUCCvXjKvH5Mpp1xq5a6UCyMWVTHjuaLWAH5dbQZwKbNoTDKvBiAN4U747jcAH3GNbDiwZpi1ZmyTkhvfKWtZD3",
  "key13": "mMnhLnXESFCs9PBDthB92cKxL9WaxMVqqS8pXXpQ1zd9GSaUPqtQtXka49JaKFY8jnmriyHctJhAnpaaJVaHkSP",
  "key14": "hRzjcRtRNXdAXrfENxFJCKZsRnDv3BXJboLYdT64d2dG6W7CtbGN7LU1jUb1F9AZSiSoipqFpnoCJ7mz9FVsx5L",
  "key15": "2mQ7AMeqBR5a6paJxzcZAJyhVjtoYaUWmxnM8JcoC3atRvNhMgzmiCMSFb1nqC4TNaKf6XQozFEt2qQ1TUxuDdhj",
  "key16": "3JRa3CBVxQhTqtUXnCLKvhanZMaSnJCmPwYtRoRCHjrUxYsN9JSNHvtuF9vvbZZAsX2u5G4SsFxRhn7VZFTBbUSM",
  "key17": "3EKS1FVhFQtRUGJxSivDRcBxKAjTSitfJUZLrTvnKk3wjdDgSWS9E2VLJuaVhrQ3PGPEnJPd79xqmCLvnuAw3vTg",
  "key18": "4ErFnzCPkBDRjtekvJw4xT92k7rtR1ZPCop7fdLC7juk1oe29VKDy7efvkNGoVFzHijyxFQwUg8HVHkdd93bhTFC",
  "key19": "4sFHLwzXFm3wttbEPF77JDnsCcFs6tfK1sQJyazXaZfn67XQ4YYaVTbjQvMPXKqn53Xr6vkXPvcpyqEJM2vTGcBj",
  "key20": "2zTbLrAxmdGbYZyWhowUCkt5XCM8J3XGGNYt9JYFrXxD8crY249j6xUc8giv9A1NKThVF5fphak69ZWfFpTaCpmy",
  "key21": "5Nq8yeJw3w3BWJow2RonCXQ8TbFgK7FbJD9vtmDXUEWYXVN6NxaxZThrSsrGeq3NJiopLi8UFbChvfueWwysxXuq",
  "key22": "5iSx96K9VCSTirE5omsVPKnuy9DEzuQiyoyiicJXXSR8Ak8KTf2kqwvQBHGaR1wYp1Gf2NS1kio6ihoi6mks5Cjp",
  "key23": "46DS8iJfzwxyKHQR8LxTycQjKa6ALPBfbSyz3Z85CeKdiSS4HKpjGASDLvE2264LsBdvNqWvjRks1UdXN74zvcb9",
  "key24": "4aPqYbSrePtvUKCZ2D9S53x8rwyRZKaExqbMAngkuaqmcyQfJj5FFcEYuZyeU1iypeamFRknhxkbgBkGaXhqbdBh",
  "key25": "3TrcUJSTtwpY5dpjfNUDRkAWqBZqJpkeB74AiT1wm14baSYwC4QUQ5wiGCnZbnPYPiPXftAwxZXC1tt3ySN5Pjpb",
  "key26": "4dGBZmDjdTLEw5vjUVZZ8otxz7hEqWFc35sKYHgf5xYxaLkqYF9Q4DYxKs9LDH9euc17zPpBW1sFTSGSwyLZdGqZ",
  "key27": "4DPST48RuhBhMTB61SFSRunAUCnwb2mQWwLHrDdE5nvQ2zkRsdnvSY8kHYdDF4jf1XqBV9kP4EuTg3FEwoMMrPrh",
  "key28": "3BwgZUBbhCaZw3ku4JqX7DQ1CBKZESUh96Kpjkf1ssCimGnL3aVHQ1JkdhF4vHemW6Emd2TBn2shmDVTroXxDJaY",
  "key29": "5earcgZTtSRLHuSJ2gfauug9zzD2uC2gSLKtdH2dFBxiCCebUhifDmeouHimECDggHL5fGwvuuFeixBsQhfHBuFL",
  "key30": "66EKg98ABiqAv9n5jvfVyDMGuWprDwFKYegRjEMTNHtVYamJJsG89weM4dwK8C8nFUPtf7jMYrm1Nbbm9oDfeVqX",
  "key31": "45L6Wm41Ex9w2pYPphpZp2pacB6LQjDdzUsrqvuvj7Q6F9TixqtSb6zgRE8ZX5gyZgrLNhyGx1X3DsA2XKsCZgBw",
  "key32": "4pUBxR9ofzX73NozskqhgbbvhTee5u7hzAGBHy6RiSsXwzpwQfpaWwR5FcNgKyEHf9DW69iAt9r9c9fFLAn7gXzJ",
  "key33": "3vpMECFtQkEgqJX65vu5mrzSoEVrRauQk3AEsijUDTC9Vvs9cP4qirdk6w75r7gh1Yy5BFfLZST1awy9pqabT783",
  "key34": "5py6cLLAKdv6UFrXuWDe3YwoJW5uU5D94iHwbRpBXGKDEV4pF4V7jxMYkhRVuN7pAeiNCAGMPFKxiK95U9tHN3ww",
  "key35": "2X8B1bemxs2xg8R4wYPwu4XCXRwwJT8xVcXCzbkhJDY2kWEHouVThVF1U2EbQ8K7Tjw6XRawCf3TKrSBBhxhRMEj",
  "key36": "5aMxhFEMpZBtjAUjsYzk3VShUk8SYKBo2K17zMgMWvXHQGV3jnymKQVXikuPV2ZXsCTzdBoKcDuFLVk6jrLwEYcv",
  "key37": "2vSD6ToPcufQ1QvCu554Yx2QHYAzZszDTKfdxhr34U8oJUdxG2eTCrwZbUvqtvrnv1vKogEYeeaM3ZRL8cJocrZx",
  "key38": "2Lz52Jtgptgv65xdcbyB1tuWQvJoka76RevCRAqKsUUsaJ2i9KYsnDxddR7d5t4MYzdZaYDam2TWDrvu2SkUqZj3",
  "key39": "3SWuj7qbwZauG6FUu3rAMrFb19eQd2rydykE9vLtnFohBuCA85kbogWQLj8bL9uAro4uDrzZQNLvc2fAwRAotLoH",
  "key40": "349WhndeeLGqrP3zBNVqN8BY5pafsmVUMTFzYRMjvMpNCAdCySQ7six9iHPVKGqKanb5pmLb3hPtwwRVbjMoP1ku",
  "key41": "2XwtX1n9JHfojgtiN6FG7UfhxqwgvRXQi5RzyXE2RUk13HByGVS9AfQEckESCpLETvtSk9PCyp8bRDkHG8YM3J4G"
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
