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
    "4XUgrpTqisa3F2fiYzwZPeCs6andoFzMCciZNCKC8Aznj1RP7hLeJuphDfuh7EMzPJNmREBSG67d7CrCMntNbKaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y8UzoAboR42MweeartLUs6k8XoRpgz23EHC9o2rx1rE1nq2zNjpgnxvsXh73jeCUDQQLPjZ3FU3yN22piGrWUzr",
  "key1": "Y2PVxpKZZRRK5Q64N8qAP3FfG86Sji586wREtNseqJQVHUcyAuUDKgdPn1C8xdxo3F1iQv4Qyq5JpT61TSgrKQj",
  "key2": "bgpBhNaoY478Xf6tAE6cndQjF9xoi55i5xtMsmogpXjoQcuuHMWvgsWXn3QHMcQdHvz3pGGE3Tes3m1Wf6jPQUj",
  "key3": "51q1Ev3S33ERAasQfEyZBgEkBgZjjtW51a2fNcQcmF7neCGuQ6ftpNcrjWBeoHuPMMhogZpwuuhLuwuZH2jsfbQB",
  "key4": "2vT5R6iAxxnVG8kzG3nko6TMWSC3Vuyv14BsBUwWgmpFhmRN5ZtVaroK444jKn8on8CwvXGviuwQEmDGcnLA5bi",
  "key5": "45ms6T337Xnq4QzbZuENq161bX9m3H9TUc8AL6hKg3MRKoCbzw9oQrhrkmJKvrn8qux2B2SGvyPMBGGV6e5DStNq",
  "key6": "22mfdzwTwNdHNQyTQSkVkUraffzEJhxCfXA4PHr22kLs564LokXu2WkEeoj3UhVYEq4dwsUz1Q9zPYXJk9QPrvoc",
  "key7": "rMi7vPKY1yx57fWnspC2gYtJTfb5K8Ez4Dj7rGyc9aYJYLYSJkREkWzxxfER1zPYxzn7WhoRd7mSN3mS18aZuvf",
  "key8": "4g2Ljfn7Uk7uMD31wqDssUtirK7QbaPPSYNXXRMwh9xfWCd3VeabdfENgsE9oSspV1p9n7rMAKKVQmVpnrd3sPD2",
  "key9": "7tamgMBtm8Km3TEkRCYXRq2Ee8VXJXwVQKLtjm8S5PgNpFm2NREY5GfbELkSczkQ3Ng42LiAp9DKSakgRbZe7Xq",
  "key10": "2EnndaN1cGrWBv891PhLVnsmaDvLV6q1fZYNapWcf5eQjmVF46boGy61qfkE6PPv9QfvuEMmogdFQDkz8uCtVhBa",
  "key11": "2f9RmgpxcV8UWGD3WHwmR9Uu5QrBrTxWLKg4QGEcFVMHaZAJq6Xh9PgcABcUAPxRKLq3WE4mCV46X57sQdqU7Zsb",
  "key12": "2uNVqyiaxxKMUatR4ytWWBjebfbeoQQEZSEGo9HuJtVBzBW7uffkWUhCEsYfKia5Yw92scaiEGbciXCk25hH97rr",
  "key13": "2Mvbg8c8hd8jGq61B2NKDpUbWjsnAfmQNUd5XV7UatRUCpku8nd3xe4VeGjPfE5nV6JyPrgouDVxHWfGbDrhRgdk",
  "key14": "4FsnWzhojE4CPvr13wia9mudjvNo4BVSu3i4idmSP2yGmvstvmGa5xreHkaAM2JDuTYKppN9SHS8LGyQPRNtk6tN",
  "key15": "2A56FruBfc8jwiwNkDWFSjpdfawdXQsMmhPUedrDxWkJLV2uo72vZn55GF9nVvZxhTi9R7tPsMYkt3bHf3mGEava",
  "key16": "iEAR7RuBX5sVQvPVZqTu2jUWWBZEBwrtg9qxGWiCP9RbZk71oAedK7bx9w4dpBYSCkeKMt9DRoDLasUjLd5sSH1",
  "key17": "63fmMVLRDngJQAPxh4pG7WvQwZi8CNSspPJT5AAdod2CXW8nkdhbYicGdBc4rJWjMceFKsLj1geX6kBANVpiMsjC",
  "key18": "2rhYLuEPFwbSrQKKTA4uzLVeL1i47GgkGxzYdMiqwxrdY1ZsbMYsS1spUkdD9qxoQxBqPG98FcYthwtzctwL59w4",
  "key19": "3JhmhNcGR3fMv4JnmLcrFkrk63uVEkd4F5f2VfzNPYkjYoRL6Z3bTX1XJ9njAxxYWXEKcNFwfeAwxFH7yRxgnmEM",
  "key20": "5dk1k4D4sRSx2kk9C6eBk4exfcrPrpsu8MD5TG37hk2PYJTEpQnFjaRfdCVGsHhApcJTMpbZpGeA6kmR8LqLg2Ae",
  "key21": "3FXtLQnarK6EFZ38yjTkxwnzy6ezZoBLQ1uYkbBcpPxMDU6u5aj5M4MB6rB6TwpEHxBdkZWsLn8Fr6aAG2jhdkxZ",
  "key22": "3sRw8FHwh2Z6mKWoB6f68EJ3gfgejkczdwv7p3FoHj76Tw1cCSGad5VMJTvNn6Bm1M6tRVeE9xQMdvugDiag6Y4m",
  "key23": "2RzBf4uvr98XEXjtdUNbqpLhK6897WUh8ZKSYNFdsm751AJG2HHFX8mfmjpnPFgExgq2nh7yzSbAgWmsVqCrWdxv",
  "key24": "56g5UdKisYcyKEk2JQ78TnBqgAXb9Ka1wsNme9L4LZkZrvCubesBvjZRdqZJeyM5CUajMw3AdSVWR1czrCwAbH9t",
  "key25": "37HR72w1ZueT9knBVvGfTpEXjJYhRHVU8aBnTzQFm4aMerCLzdQ181cLoLFvADLxoPH6iUwbMYxAWT22ABN75rix",
  "key26": "4kZs7fv9iqa5jjgcfNMiPjyq7dDsanc75dnFpqibiiLm3XpyWXQFmnGwXJsGRHDyPgfoRov8cDtuMqN2vMcbobJp",
  "key27": "51Qi3GdeC7JEirH5GvJmGHyp1sznoQBvsd1LbiNUqM6WrSXQ6uDGNRPvMVwx3bxCXiURkrgH8m9brJs2hyd8LdgN",
  "key28": "2dLmJtXsm7NN29oc7z1t76TnQJSZeGEK1aBUwe6JV3PytYdqU5B6oWUDhydGYtwoPbvA3p9br4VqTLwudX923DXp",
  "key29": "5hcmZGD1MhxEQPMrfdEt4B9mP6BAf2mtX59r7frNze8D8rU5SiP9fxrMdnnUVNtbwTJnZM2ZdGVbzTMH6GpQ1Ree",
  "key30": "2NunBfB5E83bMjViFQKAhpi6sNt5NFGujbPpynuES8Z63ATpcoDD5dZZpsgsnAcGwYLitRdXcrTayTTjrYBcsT5n",
  "key31": "57B8R3TS9zyMY5dY2ioVHHEpJaNEQN2xvEzkEfi9nJStbi4e3tR4V5qxVGsMb6gzEf2XPy6q5uqjLfsMLMbwnNEK",
  "key32": "5VuYSUuYuhExsAafitmaskBSidBhFoM9PmprcHg88htwfdNuS6eawn5EDwvoCdyxTM6jL7MAVQ72FKbB3QxmAk5E",
  "key33": "29RkwGzax1LZCsBpFrU4mG99HXFFmpN6cyj8K6r874j2N9HDJbmY2gqZ3yiazP9DxapNM6NXmy1CzDTQbKT8nt7T",
  "key34": "3akDwfQLgy9ziZ3pKUrLfTzq33fveZKZt5KFbNBdZeuHN3yFg9yUrwSyAW4vxcPs4GcrZZa7dzYiCvjuzvY62qUw",
  "key35": "4dXmSdVuyEtCciJg4rr3inPLpd6hkAfSJcfPSwvbqHDavUFX6bqYuFQx86iqnroHKVNmeyBzLkRNUR94J7v7982A",
  "key36": "39b5XdTTp3AzgwNnBJFoauXDqt5TPevvT1PGrF3zmKxPuwhBbTom5PG1qNVTzfZ35gV9zReaAu3pTRuYcLCkTm8d",
  "key37": "2YEJbykRBbBcgmzyRy7BC3fvXQCLLS5VZkJUH7oTFK6KUxJoJefiD4xKoa8x2ZYn2uxX6hhr8kxSWzSjHN9ACvs5",
  "key38": "rur6jgVQ6gUWps6gVLAhDA9tBryUMWgTWpxiENbwoRttCZ6FvPby7CMtfWq7RQTqNMaMKk8mEZFD7fgVZ5U4Agx",
  "key39": "3g2rF55UkMmbZgXCjFy8P8T8sgXaNp2uF1jyAgqYQXfVcfPEdiguh7a1zUb9vxEM4VbN51xBhMmfa4mKRszSXnpn",
  "key40": "3aWXZNHUPnZfCSmNjAborKCfbqWrcnYnk7JpJRXyLx4gntSVUhKG4eXpk9sShzpprXDFWSDdHccSJu667Kxz8Lhn",
  "key41": "2ySsEUeyhFpbEgtGYivqsAmejdBeGA548Z8c8miPxkU7nBqREVByh5wWp229mtVrayhpNZk6rRSn7yB49YC2mNaG",
  "key42": "6eykr8spXAozCuVC4sgnzyfAuZHqDbHNiUJT5zyt39Dh75EZwkWeRr1Mhb2nUzKL8VAQuQw4tahZZxmSGevYjtY",
  "key43": "4dhFGq4sAziPE7UgDGBYpTu3v9P9kQjJdPXgXWLRCytWNm8y6EFYfLRXVm45euBCEJwZDhnm7yqXEMS5zCQ7hCJW",
  "key44": "5Sqg7yvo4Pzfh9SUk6safG38RFJW4dR1vVTNHFpf4NeR3SCcY9ZzCYfYgxQ66WgLmrEowWRUBNy6Qr39u8nieJGM",
  "key45": "eTer6oaj42FejPToLaygYAAXMEsvTiWnaGpH2z6N6bsRKCuB35JHp2rAA8dsAwSk4BSUzTZBABEhpVmnXqNZ7Qj",
  "key46": "57hminKDFWA9qYfuqa2erttAhKPX6aabD6PWKo2KxzccwzW5aBwJSsqPjd2cYyQLkWsUgva8KFWmguB6ZxyUk1sB",
  "key47": "2BTFijj6fc6NFRP2NkDzHYYe64JjYazJAVHvnH9cxo5hs3geDAdZthe2vPi1WpjnpPGzGmLseARy2ocUyiGyHUP4",
  "key48": "3LsMaUcapnvdsFh8jFyuS8QbyFrA3mqTp4uXHw6taHvniWfSekS3ywbm5zTxi6amvxthN4qui3XJZq7iCBnGqLvs"
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
