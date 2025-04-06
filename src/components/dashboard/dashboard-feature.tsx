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
    "5Bkxo2CBu2pTEQqV5XeXNGvUe8YyCLMBwjvHzfbyp94efQfJw9YD1Ku3P1k2omsx5V3X52mkMhTR59j4MQuVqVg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bifqZyo5rzpaQp7YWU5STj37vhQr5FurX6k6dtsMxWZ73GmoJzMnTYeazxojYDL3PkoB2zzgVvoJXfiKAGYmHCU",
  "key1": "4mS7Rrxc2QGzedBMsqnJ6YGbqoiaT4q34dyogzpcU59M7e5ErCWeN1dEpjU2CnRyQ4ikUtNkZZz8jZ8hnhh9eCGR",
  "key2": "4MEi4yYeASTTBdrmngbc2Vw2n2wfvbCDvaBLPMHBd8J4hnxUX6nDdZwgBq5WKoPXmkKiDVADe4CzfXTKCpuABr89",
  "key3": "WZmxUjhVEV6SFaQWm3eNXtGP3kX8xh3BE5mBg51hoR9xJXYXXVGDJmKYhaRRZaLrvbBVQn4dmsDA28DpEBWofNq",
  "key4": "4yWpM7d42uawsyAWP9rNQPLsbrtjYVrCh28NdWE6YvaoiNsufcRuKeWdhTGTtWrNn7UTNChvgCQbW1KnaEneRpLY",
  "key5": "5xcwcapX2jnso9R1xcDx8aBRZiqAEB1WB23ZPvKq48mFNmZ5PFVuVqs3yzM37qAFTrPC9dzaX91fHW4EWMYnAsFR",
  "key6": "2H6eXGRc3LbXLDK8sCmybxg8UCQtikGCQVP72UvbinwsHEfWBn2PCGseR657JeczuhGuw1UKDASqm3tWSFbGKLdt",
  "key7": "3SH8tCoSZYARCc6UqHsMEtVdrTej5nrkwfd48rsJnjH4ft9kJS2bGrkhWyE5Dir1UfWpBEN3CwMHnkUDDjSRT3GQ",
  "key8": "4VLF3DXYV3SmP8qj99iFJQYehw6MwZ3nuNkoyCuMY3Zi2ZT4yrc4mi33BozrQE9QmsXizncqZgeDDZpMS4K8gwdg",
  "key9": "56AV8siSZy4gmBJ1debQUEDNW1FkDLuYLR2Mz6G5PQPXx8St5NA9Vgr1aanEgEn58h7QwECvC55fQDYhxvrcGRiB",
  "key10": "5Lf7jDApcoEcfd1cgq2PKfsjrQqivJ6zkqWHoG7N8FggSE1tPonFpuH6ADBxMvjjmvpVjr3TjD3VQkbY7Snpc6Fc",
  "key11": "3KuZNTmzyNBXbuLA529LfDtnZYLtshzoFzxv7v5yseYE5pMPRM1z2y7vPkVptprP6ggVr61cdJaFxkBTSkqVo7Bk",
  "key12": "Nrsd7cNB6kKszKqj27uQQDdm39djzdp4iPrR32CJy9q71Ht2H3VhMTjvXfHRvbqp7NTZqfq6QLttyxKvTWTGeGm",
  "key13": "31kfQAuxDT4LDsfrXPKQJ15UURddzi4Bcv2xBFuFF8CpVvqxhZTyvUGhRJhZtpcaz9Nvutj8wE9MedjEAdRMPCN4",
  "key14": "64sGdnRVkMaEVfnDMAq5negfCVkJBUM7egNKpGZTtveBhddoiHX2YcZaiMUDJE4cnT1D1TfxB9WfRgustnideUTW",
  "key15": "2hQk8XzFmUHzHD4GbyncTTyFzEuT1VBGmyS8md1jDLqaWS9SL9sk6qUNzExo8APe4hpQ2gMcnbXH4bJSsKHi4vR4",
  "key16": "2WK6TLKmZFqgW5UBgwfNURM9zHg4jTK7hSiHrbVAyx43PBA2cMeAz4ecRP3p2BBA84nURcomcrNWwf34LdM3s9cs",
  "key17": "2xYHJfUGSH5zAob2cJBnDETaSwYmf8XQTB29dt4p6PZ1jb41qbf2kXuuvg2npn1MFHK8PhoMhWpxSDTYDZEqNc3F",
  "key18": "5oKNEMjiufMxt4kYGb24aRr17sySGxhCbMuHqe64deH41it92ih5oGR9TWyzy7j2AqbjdTyp3zoCqrM7XjsDw7Zd",
  "key19": "2oVY3yRJFtqdSe46YQrXGB8BMhM5KSGBQbk1bvmoLeCYSGNCGi3BineQ9oucFAYc7Fj7y5mESmTjYkUk7446Hzpt",
  "key20": "23x1DPs27ug1FiGM8uQV7JSGf5wbS9YTC9sGiaUNVNouAbFEhDHDy9LpMd7aRW2cbmg8AR32cgKTXmHznP6KaXnV",
  "key21": "oW2hqJJKr2UfDe6kSB35odRurJwH8eLakAYrDAbbp3Pm5PhTaoef9sPzk1Ji5TvoWhNzGVvSc8bcH9nU6hWGHDp",
  "key22": "uAUQ3sP5PzyVsfJcmD1PB3EacLixkPpQMED9BvhLdjPZVVgvRY1TZDVPoiHz8W3ffR7dTk5YfLGx3CWLhvKbKmA",
  "key23": "3oCej4v5hLLtYcDnLabB1nernAWq9aStNjUnrDamtnrrTVwv8oxBuUwfdqJk3c2wAZEA3kyPh1gKEK8JRgUqV3ws",
  "key24": "fZLd2SHBsdG8C1Fk7qPJiZH25No7YARrNQEYjjXyEJ1nS81sAtTQLXhMHPGodJdeMpdfgVei68poAXs1Y3czGhN",
  "key25": "cV3vQQPmn8aYLihAARrQTidDTNYsZAXJc1Q5crxeyuFMAFUz6qZhmVEERy2gyz7hL3YXNVEJeoF3agihAL1w6Ay",
  "key26": "2xsGNV6vr7GwEyXVdgfwZfN6DXhDcoT4EafQjscZYZNUcToqK8bNojHGypSRzf8doTkfNxbRSHRUs8Cgpw3r5vE",
  "key27": "4cbHfAr9jLav2z7dbq2Fp9AX3rDfPRMsNxRguRdRAueA1wTLxyAt1uszHRZqGoHKM86HXVjWmjgqBthQuxmdX7id",
  "key28": "iEiah4Nb48HxAyaSYAxxeK8GRtgo2uMV1MeFyE3SiBP21vxqmZUJh3Gp4hGdBVU1aih1H58FgU7rtemapvCJ81u",
  "key29": "pw8AvBzxUVm1AgTbQjXow5EjsGTKHq6bQZEVLtPPjwAwK72ZCp8enov1UuUVdC89KdDLpAjsphbVNfjoM8i458U",
  "key30": "2hpBMh5uKdetYDuN34JJSBsrVDftR3w5yoPLMudAazWRgJEJFHeLFLZTzHhAA7g2kkJJ6B44RbsHN3FXVo9W6L2L",
  "key31": "4kWygyV7rQCRoiRbeqXdFoFDZcmhwQRPQ1dPeEiRq382jRVhN5QgpYX2i8TtiLCcSCkNam6W7ao7mhM1EqLpeBUw",
  "key32": "PhD1r1rokkVhKSxVGeXiX9QpycNAFv7AD5cqVDtiUomhYbgygD1tiFbdAJUSEYmT8qMBC6j2sSV8dSEvjrL2gaV",
  "key33": "26NjHxp7vJP9p8jL8ekkQLkVTy9xSrNzGkcxN16FmsWnSKMFsay9dhi6osW2T721pjCCz7EeciQe7sFTnyUBArg2",
  "key34": "5nRyBAkSynK9WVbsNJtnggvbc9LAGhk5uhrpCTcbVdWZECpBqtaE6pyyCBJaFFQMrYG3oKQYFcwkSgM1RWdgL5En",
  "key35": "52BqpSGpcjPHnqagyoZEJtxGGgsrrVktrG9t1bNzJmRZh4aBHCT6ReVDBD1XEiuUfAjjtsMNRMzAxx18UyW69v7W",
  "key36": "34Cu4gKc8GE3E7iHxfTwM7jpeevBxEC6kJTBsocm6BYvncrvLHHdv678h39qHGcLW15b8Sr11WVcnKrY1z6tXRMr",
  "key37": "pxKGEdhYQ6a4k7TWPJs5SLpaKVuURzWFdrsPm1H9YodD4yzrbxETdMWhB1gLyrWyUofDoeaTt1BQd96t2zPZ5t9"
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
