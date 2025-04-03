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
    "2mkv3VmiUNLJYc8GKVTK2rmmox2H3BY3myTeEb5G83hCPwuyb7WTstBeCxXnoTiSPKWn3fDmy6NB7rwLi7FGT8sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35EV4aAXPGojs5wuBhMuCmbZcWDpNf9c3JZFcT6yvH4pz7prLhy9XwxPrsVhJT9cqEM3ZAxYKEK8sPp6pkKv3tBp",
  "key1": "JVqTyotUezs92RsKC3PvaKgtH4DepGPZuEQBid88KBANzTYnRAMoYqsu4J56UFEWwWr1WnyzX3dygUWK8JcBHsq",
  "key2": "4VgVf9wWu264h4JFgGEak6TbcyXkc4LkKapr2eV3xdaP4PvnN7yiWvfBBJUZtEt5so7WTGXAtpopVFJ4hdM86rQq",
  "key3": "rSpC5jejRXTUHvakLqziWQda2vKdazpMK4foHXcPuAfdC8Gjeoizsd6axSbj1vGCRoW22YmMCXDFTGXRFMGrV9m",
  "key4": "2DdwEJLC7KSpD7iqBYN5SMtWRhd6V5a5pkHBhLkD3RnvRsp9MFFozBT5XFo8iDY8oebGuFkkDVwSRxV63cHEk2wM",
  "key5": "3cbH3UdodoQyLc64Xn9xKhGnNhaGVLyrrSnG6aSGn5JXqBUbLsx7n8FwpsLieTeFRXbWRKoRrqkbnNLUCN4S84Zm",
  "key6": "a1NjRB7RByRR3APvj6gKPka4bv8i3s3aUWRJrvptScY4keNETsrv6R6bRNaRFHdWCrcXWVHKN2gzzfXtqkjQvEc",
  "key7": "3M4YJz61CsYiUwRbcr3ujYLXvWuVC2u1odZWis7okqajG8xwuPZZnSeteBMq6b9zu4ztNjqLJQpEdkPwwiWzBZ9r",
  "key8": "k5QSPqjrRGqC6W8hZ85QpUYSguBNvY2vr8MCGCn1tnrF32tjWRpUs14yLnJ1t7FdtLBAMfEoGJfcUr62Jkn2jXV",
  "key9": "4vaWVRQV8qGu32Yk27NBqd44ptsbMJBAUYkapJoTD9rykCDp2jADB4yQ3JnHw8YbrbRhdqTQyEBKhhEDgxGaEnXx",
  "key10": "4QvHGwtf4c5yhiD35GmQdk8woi8BJaDtcY5QGEUrkN4bc2uGdYFiGbJZbMm8sE4LPjGY2C3UCk4gzFksKqf3ExE9",
  "key11": "5Wrf6gYbCqdwKu9mWof9L7F4Sp9oRFFxZqhtZawda3BStuQxV5DBgtrTHY2NDutVUDTeUTCWsccrkZvF339nBKmi",
  "key12": "2FGXZz11bvhminwwx88EjMiuwdTTPxRe7VQLmZaB7u5Rvo2jf3QBGyzK9Dhr5SMngCWeJAPTpK1Ath8mkmKMsmad",
  "key13": "55C8B5XT6cNZ13yNtUskAQFbqYreb3Rf4Hf1uiUcbvcG7cWEnRwznFaGbYjnkNshrZvaPHVXEF7KQwEvYNitdqaW",
  "key14": "128pu8rFjrB8QdSkBzb7CKrh16ya8uHv3HfsxABtS48CHivZRTzonhKtuzVpcdci3wUwhW14ZK5EyCrJnMAGzosY",
  "key15": "3ViaW36cJw2GAYhNTUnawNNzeriwGufxXmeauDJu7ZGrTQbLQqLY6Dy34djmTBkHztGUNUMKQvjFM4vWdrLP3KXR",
  "key16": "4YE3Z7t3KarZuxgKj2d2fYpDwJasQC3crkUgZ3tGeNZg8HohoMjUHh7Wz9M1E3ZhLkWF4iKiBKDscPG8oToBrwQS",
  "key17": "48xnWc2ZyuaiM2FUC17fbddNnKGidE34FMHiC2WQknfHsCYXiAe3BP1ZQtGBxuuJiTq9BamU7NtJrmEtEFboiCrX",
  "key18": "2j2WMjgkkNRfxMV8tTxmNwpYPgKMKP9HPcrYUW8o9UkEPC8Pz399vSLjBEYQJofD5H8VFngyeJQXrNzsThXLKkc6",
  "key19": "4VPtxhUHGH8TJdDuuphvEdgodQs9PCcdLDqiZ8QsbvCTjPpN7X4YezyrpLT8dxceTuUZvnYzSSa2zq87boXTZKA9",
  "key20": "4cW3B7bm3Gp5YEDJ6ayJErMT3MVvd4wLa3tsCyjwMBTrUZEjpLC5ypz1Sqw1yh3oFgGxQJmmyQkDrmigWxJq7z7m",
  "key21": "3tyteRNctjCJQH1hGXE9GaVEmpsvTBeM2ZRbi3ZupzQiAP5qvFM82tisaNwn1ESv1rzN8rQmvzBWp2DVq3QHsmUQ",
  "key22": "62xgnuJD7edAp76cPyecZFzeW4MHgQVjjEsYshFaQAgbGZcJPjt16HNWdZ8kb5GQf5KiSzgu1a7fZiA8v6ke2w7k",
  "key23": "4YHyggLm3CyBdUQyL9ggSKWNu2epURJPz8MxrPY81MSu2r85rqVC3PFBsuG6D89faxDcsd85ghe5KVPFUhmsRhJC",
  "key24": "3hBdEbo79Fg8SGHW4X6noshNr64rguuysn5DA1mxwHJBimvKBSwz4rbMyNXHhxMwSKCSueHUJEhZHQs3c4gU4ZNu",
  "key25": "2N7eVxPxeqgqxibQQBMMmVdt8J4eQ61fUsKzJX8ws57tqDFhhUJxtnGkDMsADff1s2ae6mgcynzJDHmaz76SjrcW",
  "key26": "5x9fCZDQ6ZvPMJZEh7dhAXWxKLwE6aNy2XhTy7ub9JWaQFnB1XqVNQMN6TskDg2LbrF4P8a3e4mgQsy3pR3bPfDB",
  "key27": "5e4y9a4R6bAtm7jJUSRRF7uCyWgo163Fr4hoLgfgruZzq4aCe8Rv9oPmhMP5mADC4oYJZnxyFLLXxB4ugHEYZcgu",
  "key28": "3pbit35yDehLJchDeatLCYtwrqJ8PDwuxDGuiDtdfuKpbwFJyDQY4Z8FMaU2CnJEBZj6JNnNTbCYZr68t7Vgnwgu",
  "key29": "5byuyTa95wMzo8x8JGioHiRbH2UA77qqdPGgbjKwczE5TdghmsZQjp2mRpBedt2NJh4X7Dcwgbn27XbueCe5gdhC",
  "key30": "2jcw87NYiLbh1kA3JpTtDGni9DVZWRpS13gampqgkmHb8W719RJY19SzyhnYhi9pNiFzziULdsKafa2kmFPGZcsQ",
  "key31": "c3p7RsJY6D2BTTN3yezUTdYoCtP1Xx99UUapwLMFpRmyVxAPXDnwmggZRz8WM3oFnnAjXC1kUb4ZmQS3RdxMkBM",
  "key32": "2Qb61gK6r6CMmcc3shTQJc1v1HXNPU46TeLkJJvyoR2T8hqZFeWNiQercXEatJdSN8dhVXLPAhRdJYNjZogfGN7L",
  "key33": "Qtmiaf19m928c5XTCoSmKE8i4vTpegzPf7FBDKxV9MHLKd92W1StMYM9xNMYkr8P4t5HQhVa1MoqSmyT3TxZtLB",
  "key34": "Lhb7ZkXBp6HZ5un4xRtp6iD2QBygttrKcz5BF7ssP3uxWVMG2dNwGKJZ2LX2cz5rAHiv22GE4sAYFpZ4DcLbi9n",
  "key35": "4jRakiMgnTTahtH7KtbwNuDAd7NfTYEBPxC1w8ENQqt8YK48pPXjMbmzhpYdXMKErGGxjqevPya44P3zrXvrfbvq",
  "key36": "669GH8VL4x5aCg38RZbaP4MBMPnjfTKwKoy26gkZGF22KowhWUHMG69q9aEv2jWcmfzh4rZ65nGYrFBoVw9pXvFV",
  "key37": "32SGAsk35UJ4t65pmraWR9Vhn5vtwnDrenrkkFrRvNsNMKQJxPx7nbo7144RjCcuFM2WBhbpWPMXDZBw9DrfMcG9",
  "key38": "2188GWqHk352SQqFznp8ZYHX7XXCKgpV1noy37Ez8gBo6wyf2ntTg22ZJ93oepbN99h33sk5LhVc4nAQqdhtWw9R",
  "key39": "2qKCB8MSTBiWqdEMRdLN6C4re8gZdqFFctMVrc5vUssJ2LYoFrWPGnoD4P6jK8XZWVyNDefHEzG6gcPRSWXcRcmK",
  "key40": "2ZnoQk3pPcuKbtgHbJov57iBy9wdPfe5rX6jHtfS31N1KFGNLWfrrrX9KiQJ652YK6J4B4JUVKPBnpW6s2g1wDNq",
  "key41": "jkhzVX58FsSbKH1p5krvWN3dSHCVb1mySrcjAncx8RwjFgm7nnA41kfBMWJH2dsiSKfTCnFYwHzmwSaJ7WK343n",
  "key42": "4zhJfJmUEVSJ4WXNPgFMDL9SEbn8ynFKpj7BN2N6JyukVTpNg9t7fMLQ6rKm7hgtNgffGFvph6MeevEZqCFZ5vRy",
  "key43": "4q2Loq61PephS77UUZpcz4apFe5Y4SRt7wDBEdDodbyXsfhyZaf12z89suZ122R8ggDCnp31sqNT6P3eEEMWV9n9",
  "key44": "5Dd4Urrxjgt8m66NuCdbWuNWiANJzz2JCiMETEjURN2uTrhZNgvdiiUogpNN1wCJXCG7qS4SDn7V2BBphFJ9P4R3",
  "key45": "4WyWBY9FvaizKubJGo6G523beSX24uqoq8pzUWYCTQv36YDBP3aCnVpXEBuqxSC8SaXfAbPXX8n7WPMEjVgjT2Dk",
  "key46": "3H5XJeAS94TLA1zDxAXY3NWq8S9J79tPmV4ERjCN7aUTuM6aN4jifK4sNcKtpRdkvQm5iLTDffMBMCVdkszGowGq",
  "key47": "FW7TR9SbdrJ6NExrS5jMcMTbKQbQshNVPziUArrFK3AszJHtLCC5jYaHC8ki6imeZFd5jigx5pt8nZ1z8qDGaEf"
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
