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
    "24jFWwwq4SxsCXB1YrmA8F1BTWpKvmpwJQGap4D3xKXodBoUeVFeoDRXPUkx7AiDWUhCetkRCdjzB68GEgtcV7q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7cVT76w1aMePg3xGqVCmQeYsbyXLUiAkh1PwTbsqaZCb4ed9sCNHPbT1jgRtkKgtgvwV8utrco5j3ugbXVeFbf",
  "key1": "u7XnxkCAzpEnvW5Lyt4g65uC7tF7KrXTwJ2bNecojySZGXEFdd8ZdAwv56tet9MZGhwFYn4tujBPAjR5XefZTia",
  "key2": "2sYii11w4hhTM5nEg6MLVMe1ToSAtTn221tYK51PAudR3EDagzrLsGp7csQQj2nLtRSNypSSzNPetPHLTLA9j7uu",
  "key3": "28hUnYRbofkoYmyLHmqSPVV1eotn8gH2R7koormsAGYvRPvXTnttNehcwBduMvbDx8W8xpbKzGzRm2j6eyQ2L4Ew",
  "key4": "5DYWWUzQMUHhnJjV4uz4qvpZK485jytKPZFxT1VeW7VUEktW338fVr3u8rE4WdxjUPrjmvCyZa8TeSd1CcdbkLUc",
  "key5": "5D4vM9LscCofxvK4uwpP4NHLUsT7yeTTQRSBzjGBNNj1JYbod4VhuVXrN55oRoaL6QmpoDC6n3Nz2JBhn4yrKEWP",
  "key6": "3uPNPjZFGXmHuqpFraCMeYveJHMd4uYFHYkDmUJxCKsMdYPzTmN5vsa7VLa8j1wYjM1fFSvLMiHSGhYc9oWgh8z",
  "key7": "46JCbYY4EBPpwA2A7p2jgwgxs9CUnWpbePK5DdkpoKTX9YqM7wQN9QTj6Mhg7bsba6Ke6SMcn16gZhuBzvqDzZsb",
  "key8": "5KYtGqgwBspR5AVgmztHNUoiRPK71781aMGX8WVRuQw42xanbrdWad4Hg1nccNPqTZ3d8UtVt7YrJLn4HPv8icjQ",
  "key9": "41NoJCXQpfES1Nt7Jd83pVrBHr2zfV1SVxVnqouPaSg7XizEMzvnAQAUfCZk6dQpAzZBhwreLiJpKrVHvcHfKBd4",
  "key10": "5xd6ME9CHWECty5mMykeCpqZApVeHL7h4SEXmqSEaa5R5VJ5WHvm5mKgNzoHTPFunWGWUM86Ws5rXyJzHkAzG1VR",
  "key11": "5EPoxmhZ1YZaUuyukFWhu4vqc8tvmhZhopuqwUU1EF76ofcBuwR32zhzg11HoEiuQZDRXkWTydihGmr55thpFwgM",
  "key12": "3YXnvYTHRx76xh6kShDBscwmXxqB2djU3xkaXe6tSELgWLgtSVgSJoLrY9HgP96gSafYEFYRsEyMebbqBSuL5YEx",
  "key13": "5MPMG2Y8jrKpCUSkEBmMAqRrGUtnCD3wbWeZQFWEejCTqFVnVZ6RG57WxbHzuX8v6BgRwrydaH9Gjk7WDLr6WnNF",
  "key14": "5HsLALzx9PSDS3ZaYuYJXCr2dVf5gfhRFTe7VRutMGGTQUWUC8DcWPwL8hf9u5cMtMtw1tZgXrUrbJXYPx1t7Cw3",
  "key15": "3JLtf535fvcsiGXzpzb4x5471nugiLTmTwKsvV3BJqRcdAZarfpaHGeUB6vcGau39eqbDssMMNbqtyfNZCNqPypS",
  "key16": "4EhcP6itbvojHL5upf8EADiQ299Z4nE6aC7bhsi5ZqzZ8yr4XWhwgaeeBfuaEqWoHJYPGMVZ3JnCkNqaaqos35tv",
  "key17": "2E3hYLy83FTvmWtYAXNubajGwmjjTafWX52Em4cdju6feP5eEhbfCSF1Fs1SxhfumSR5fXGK4hGWSJvUVDSwAtwg",
  "key18": "sgjQg3LF6C8qEAfwRSLCCAqweJ87bR54RL6XR6MPuAucFy8Z22WRn44XAon24etdFSXoAtRCfguQDdMaTgrvC2z",
  "key19": "3GjQs4Qi3QKvUAteSaWEXps5VT7vNjwR9swXfkEm4nHE5A1Mq5Jyj7M9CGaJLzgYs4tTczDZDjhS1oL5KQtveLSb",
  "key20": "54S6cC6jCeAi94mcXafCnNNGX6ESTB2vqf8riu3NYykatZGJPo2k3SN8F26aqCwmpvm5qTcRux9Kw68FjJuGfktt",
  "key21": "2UWMD6rsyYfr8MskcToUTktu1AACzLhdApr7cU839u6KRTsvCmswWvpBgpGxmf4cPmgi98REb51d7BigRfuvBDUy",
  "key22": "2eid7c4bTHiXb6NyE9TAzRf6C95u7RP9ikyNbq82cjNjP9tgLvZfuHkZ1zN29cTquAdnzPVSZ7xXRGhZHU9axYqV",
  "key23": "4emo6suFhLp66i2CHU4KGfyB2cAqc4G1qf3JvSF22C6Kza3C8eEoXtRtnQ6uG8Kbg9UtW1cmcJL8dUEJm4HftdFA",
  "key24": "2HqHJg9HQZxrk4YGPSG68AEmgsmx1FpZocdDjZ563A34tVHzvMN68EJMC8WTbgABjQGQwzJRfoY9cjySUpthRtCp",
  "key25": "3rQGgy4hxowYW3cY1Nrrq7srUwdXDcJFqsX3DtkLwkZdcax1Nr8QRAwoqKz6WvySRcZKbKHhfsBiYKMKijaiWdfd",
  "key26": "5LJbJ8rMEosZEMAXk79QnjVwd3taSYaRDV3R4Y4DybenoNahXYnmJDrGY76SRxzVKEcHFm2ZDAJDtwY58C49ZEqN",
  "key27": "5tvM7ju4GpQ1WZmuHJYP44nbTZMFnSi8KjfKx6XZa7sdEMH8UEEVym7Kep2HXGMwsfBEPr2jPTy6WXy6r66f3xjy",
  "key28": "DA8mi4Z2uBrBTtt7E1Sy44xppASSZM7DyVr6bCys8drjpSXmEmW3xULWmAp8jr8JBdF58sAMjhkn5JtQNax4PPr",
  "key29": "gHkaZjLSs5XyKUPxTz3Ph27pCfssmkayrXfD5CTCazB1NbvjgeA4YRMJQLt1PbmQrvDWCrvASkYNfeyziAD7NL9",
  "key30": "5VQFhuE7VuvujurjpsvGL12tkJvgWCH59CsWVsnEMiabJ9UcVzrcmMcJnpw2vybd5mqCzE1YXqyrngmMMCmGHC2k",
  "key31": "3zU7RQD9EqjfSe1dwWymZE9Y3ZmZguwMY6QYB7hquX5gvMs3iFdpBCnSLvUCvYCiLhy8jjzQFH8ZHUEYngtfE8zz",
  "key32": "2hJMXiyT4gsPdUyzExgFgTj7Vw9VJKqQXxYLknoh6mAfi5VhRE3ZbJGEmsf6CKeVTnzEx3ziMaGLYS6RZeLKKHvq",
  "key33": "4yPCkqVGZWyb78HVBpgqrDNeZkDD2Z87jH6KBFtCSzuRwtDGTDCQkisv1vmkVTSXguCZeEYmy5AHc4HTXwCKYEQZ",
  "key34": "65Ww4QF7z8tjgN84aU6pAnpLam3UhFj2bfomdHhodmCUw9dWpkWhRyqTyZ1hHJjV8bkSP1z1gRPVKBUTVbHAW1U6",
  "key35": "4bgo9GnnPgzhRuCCgGKdv5zaHyiYbq35NcxUbgNukyDduNAKcRrqz53ZHwRphpyuJTngKZDPpZ8prJH4vV1cXwsy",
  "key36": "2Uojm3tfhAUosfRwvfj8krojVRUbBmBVyz6Y2GgEZ1kbP1Qzq4tGzgcCD2Bk2cnpZYbP2k3FTdDQpLKURYe1wAfg",
  "key37": "hzvFdJ4hJaM3UtEFgib1aoeyXUDv2gBtLKkm7tUDKhWpAWwwT4UyyvjsQGXMrMGAcRhpmkk5A3XAg1ZJAyH3iVu",
  "key38": "65xrDSRf9RepXa8nXivm4o9Wn2ZQyqV1mWDCTiUDoXNy4wG4CUCpUtQMc1j4uu4Wi7iNnhCYG6st6zDK2YxD1DVb",
  "key39": "5JQnHzVCzFLq5RxvoUmyH2FvxCzJYXCnikxs3pFYt7SPtKNvrj7qyEmZEhmdRgMqiRbTAgKW8LHqTQH3Dc381c9Y",
  "key40": "5jjbmao8yDa7vAerdjPZCEqGo3U3yBUcPnCXcrQB8aeZjzJPe9CrLi3kBDkqdERo8fhFP7foWaRvJqdqTNMm7wND",
  "key41": "441xUvmz1UjMdGWGVrSJzgB5C933f2yxarxtWq7LK3XpnvST5WCmwtRgEqCt4StbkX6eDsqRtDT8Cw9oPc1n1zvQ",
  "key42": "PNfdFhJe6Sez16L9qRvzdjMJvGVjnTZygmUxTG5WkYnf5gqd6q8fCFUfQD7tH4sC1SjKsGWaKyhGtegtU4PRQHP",
  "key43": "3YEp8B2moUW2bpZikpTAw163zs9x2MnAiXE2uBaWWUTxwHiXCwUM8z9FBRjNsGRfwzPzqjWAEt6ur97BHAbaL5Ek"
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
