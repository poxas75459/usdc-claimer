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
    "Z3Z1qxykLKDTJH9iRPXtpWtCS8LMCR4uswxvYKZgnfCurfSaCq78ZF385m8A9n3Cm4hWEuucrTs539YmG2wFi6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EvnsFteFGxVAKh8qEWJvCsqzeFTGRek2An83skUzaYahPbFrmfxBx2N3vi5s4rRGa5nSn7Q6uL4B6sRTaNMQyvG",
  "key1": "2mQuJxDrAV1evMu28CzNpXCf8MuVoQb2Wramh97z8gDDHCwQiiUdUZ6eTiF3V2y47bn5Pi9CTnQ4sazDynURNG1f",
  "key2": "3Ltw58sxYbUgMkV4Sgp9zvupjX1D91191QB9LQkkoafE2DYz6A6hdczPAeJ1cVp81jhHhjhGizLSZQhQzvvNZyUp",
  "key3": "4cFirAuMubCwmCpPBeFqoKQcREZUbYDcQfyob8QgNr6oL2kZuNRXyK1bWgB7YgDWLTed3o7ohMyDWh7FiXnE7pmK",
  "key4": "2n967UvVv32ExTYv9uRCaMyoaPQJ735Sr46pUfwYPMcdfC96fKYdLRXVUeMwiRkz5HV2DLcuy3v6dQ6J7mdWLLLj",
  "key5": "58AZSZXY3m1z2CJAXRHimrCY6EwaWwcnK6hjkhmsUt42Qhk8q5PoABuoFSNKS9ktNy2PGYxXth62MFJkvp8HEGyZ",
  "key6": "2sMLbwoGL3WCgCJYHgntfFkxLXApSH7JKdcLDdfVsEo659TKWy8DuP6aKpbky1YiUEK7R2goitTtSfySVuUPh3UR",
  "key7": "WRChDCevutwac9GJTRd2R8LhaHR42EBGLz443PMhBeiaGkZHwPimQpwExc9z6jCSfhQkxsf1RcGCuqJXSmpSXWo",
  "key8": "5Er2H2ioKiE3sUC49DiS8heLYfrnyBuziwAjMjonbkBbQMW86H22FY9W4e5W8JBywEZJyFCtHDXP3vCSF5wqAavz",
  "key9": "3oZd6UzKM31m1rUi5Q2ht7qCz4nbbpMwBkbmr5UgvAutfZbSHLq8JZAEyJKJ97YPQyQRWm7e4ZzEK749kgugKXja",
  "key10": "MZ8XHa1QbUn6yDZ2hzdqHsfoLUPJYXqmNbBSwTyuVFcgTn2ntUtaTZFi1BrJFbmGj1mW6gZNFUie2PZKuxyjAQm",
  "key11": "LPE6PZqwDG2RDoGqoReC9ZL263vuQszoHafDUyQAwU8Ncted252ytXpKQSAuXWFMmd4qTkoLPHdr6oy2P41jfo3",
  "key12": "3bCjGNAXzEreNtt2DEutZCpCV7Xt9xhSkjG7yc3cqg5FKMgKrvJaXjN5tGJPYuVRrMfcpXSeDaVyxp6BZ2tfakL8",
  "key13": "33kfDiKfdXCqroMFpvFivXYf5QnveovHC7dGBDgdsD9Td54NkQburMrHPQjdDcBiXmqu9mP6bYH7quxJH2RWbiCd",
  "key14": "4ZGJCKapMZWFdt2w69j8XfQ3582xDTH3LwBxn9iJo6pm3Ywqit64GTzLmZZ4iaR2i5q9aeveWQXZ5nSg7igaYnrh",
  "key15": "2cpHMo5arq336EQqRSmxsUsie51xw5Uzj2n4rLtYFLdH6Ru1CR28yZAsgbubgdRPb5w5MNas2yiR1n9xmVkgECeL",
  "key16": "41mV6U9kYDuBgifSTVrnX3oMLJAvj1uVmGKU4Ea1gNuoNG2rK4RrJjeNk79Qu9QYxbJ7Qcqb14UDpi4nDs3hc72C",
  "key17": "4od68aZ5hDbCfvxekLe4t3dvLKQwrtj9BnRkRmrY8tVPNy84fofYPQCTk5DqsyYxxAhPNMeTbfM3yxgk5exVnYHd",
  "key18": "5YCFYD6KbjH4cjkRpUafcEjajKimyG2UHz8KWruKC5ULWXBNrkHeV1g8ADRujeFheb5Umg1o6gK1sZRx5s9hDf6T",
  "key19": "5oRM3VvFqJsTQq7EiP7Z9SgfEgBTH9j8ctvPJRJAfNpLBtACxc5Ygmchr9NSoCLcGenydCm4WzKqaYxEFL9HkvZC",
  "key20": "4vtYqUugUomekESjB5A6v25LqSbQ8AQRjTRJa7x9EaaJAAP4ptYQWsbcFcKBZ9FkKzdbXBDb634XyMhjSX8HXN8r",
  "key21": "HwLN1knME8Gnw79F2QMUP4YiU42xoBQUzBSjc5Ah6y5NYVdYKEXHsMGB5udMdqyrpsGTfPLz6mKrwJLydZ28vjn",
  "key22": "4xQbgXruqxUVd5LKYG984t8pCtBq88pWwN7pfjRH1LPbcXAf1ztFLWcNB97sTfXdFkARFMNp9hW91WATSzQYkeqa",
  "key23": "3GBGhbszAXNaEGG9pFWmxSxAfvWnAUtdCNaT1CSG6ZTeu83JQYoUnoshSNHdQDQHE97W8hzAiQndQyRdqKPDpqfH",
  "key24": "3TxzCWpbAioBhgiD8kZeUhY7ZrSqFu8aGRjZQEkbWvLg7J95jciUYzzGPCY5fZkWff8Hgh1SUX4ZycoZaLAodxbB",
  "key25": "2eXMjU8BiwLkYzhje8s9E1g8R5eZThQVQUU9ELmekoCxGyv533tatQv2LKUqTzregeCf6JqccLfvykkn6yurHwre",
  "key26": "2NjwaGGEkxQW2bJaY5Kv3LJ9awtZB7BPaE2cyK6yvyiejbXabiubZTE8Fb5ZPghW9Ks9yRPNFwsuXxdwRH2yMTHi",
  "key27": "4gVRXFVtoGB3s61iurtF67Cd6wbEpTnVHo8fjN31s7gpNmosUsHLvxXdFf3gUtC7riRphAmCpPjdNEyPcGfo4Wdg",
  "key28": "2sKFWFsd2jy5cF8m67f4YUZdAoA8L6NRR6cW3Lmqjqh9zAD4fSTt6qKbG3xX5trnpJdDFJ27nUe89qL7rJrjnVAQ",
  "key29": "4VZGqaLis2eGthS7wNTvMAVNn7PRuJftBv3uDSfWq9HAcBXiiT3xfkbA1tyMUUDXjmY88XPqZCjtfzaMccHFtBpU",
  "key30": "2BoEooHiGf8S39SaxhkriWG1PewZQtPBpx7V5QYGFm5a4voGTzfezBSqdfpTTjA1eCH7JBjH7B1W72SpF8dtQH56",
  "key31": "4iGMstHsVrN72rbXg7KKskR4vkEoUTwBLDvrM83CowQGjWjU3kBaoEMRJ5QTzEDZLsgS78SSSnaFMCjAJr9ySuRb",
  "key32": "39jcJ6oemDyMS3ej6ob52pzSyqMgpFuQ7kFrmGBLoedA7mVxmMN7Aj5GJB4zk5pqfcA3JYgkyxVb2kdYEDk1C3NB",
  "key33": "4azpYgippP9T7qc2JKRhmqpVVLEaXJ424v8NmZr4rxBhg9zKZdPHXA41ikMr8wQDEBDQgUxx6Lqo63QYLW9abhif",
  "key34": "52RjMwCjvzciMZVHJ8pm1Cft6RP3MedDZef65FJuUBjErCwYGLZmnbisrvHAAMLiNYDi291zcHvhVTojmN4ZeTDz",
  "key35": "2G85dqmDPD8YEXagBFwEMB9MtCR8G6RsUBZaL5ccho3jNk8CnFyHcCXwNDxKkfYe1Z5LByxpFToWb1x1TS4GkQ9Y",
  "key36": "3ycoU2uM932moHJEsrLhDTFxRFJLPnvNxxWBecnjn3ZoASvdyraQY2MpxUbJtxtVYkxRjxhqF8QUVasqpVzp2yZD",
  "key37": "1wQhPe6bGCrv9M2KNPmts3wV42mykiyG7KXJTedonZjrHQUYeDYZuYwGgyx2cDKcn4rCfYzZhHZCWxWDZXSNfQC",
  "key38": "53yF7mPfVH1PM6UUsfe13GzrqPTzikjgNnk1T9o9P4Nm5DMzNci7TbZQ9mHcZu7vhd5ZpZ7gmcJjk25sH1PhBEFP",
  "key39": "qkBP73tx1i3gKvTmi98WQK7Tog6ZeWihWgAM1B4cLAEgL3LqEbnGbtgREELN8hSgk6aFzpWJQBbLMGverbEwNvG",
  "key40": "36KpPfB795pwkojvkovy7WdQBKFEKGZWvdJLpPKE6rhx9ve7SPFMsWGCdVPh6CYttqqe5V6ruBeMt4mPxStHGrtt",
  "key41": "4cBMhSTEtXgWTYRp9htXkMLV3WXyzZSE71yBSaWmKEpaoT2H16jWGHgA1MdKaYa5KvNzubXGub57DKwy7C9MVqn7",
  "key42": "2DV23iCi6Rgg75HpxaWvmmTSqe8NkSZry9L4sDjzY3jbtihyRAuSuCS3JmG94iZ7vgqbFME3FaM76pEzDNq3KPRH",
  "key43": "5tQaxCejcmf5XjrjvLQsyY4X2d9gLDiDricc5jaajZwYFZBtqHWjZM3KVgsDsgkL8X2UD3yVz565oTbWff1f8Z6h",
  "key44": "5uTm7dz1mPHJhtFRHXwMZX3PsmA3iFd7LknRzQzYqFu3CJBk8SXidRPNLJXSCyN6e7z3caiR3kSksjqjStRe2N66",
  "key45": "2QekbC6nxJdhbAFmf441yvCKV79CgGHDLB6tQ9ogtAAmQyPGygbkWLMp3qBb9uNF7Te1HWAZdnN95eNas5A1E6tg",
  "key46": "2UjAWiBr5vtTPW7upk533uJSQebhAj17Bj6k2ssWgRZVgnAScMkfEkAhGeUS7UaUeWMFhq7DYb2JoPNtmwV9a9xa",
  "key47": "4CtgzxNf9TJnrxdPQ9F2qLDa2n9XmYm8Lhj5WqsroXtoD7iD9eGa77smuCvbUo8AzJrc76taEfMvucGJi7JJVXKW"
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
