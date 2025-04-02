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
    "56dCGTBMxXxLgQonv8rnM4z4WiikmZ74Qdccgt6ujzqWuG8y1uZTEe3LU4SgSiHQ8rQRf9YjsmGNPbGMXyz3fduv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LFycH4NetaFztNHYwVA4us6xRDFt8yS2xYWvWLSHcYokYKEpQkU6smCDnzqJzhtvkX5MqAw26HxnTWuDm746Yms",
  "key1": "BAhRTjUVuyPjZXN3pfnFVQan7993gHE4RXdm9ee6f2VfziSkDMj1UGqcNZvTvxHRAtgEgGmMeJ9GQ2wKAAoPK19",
  "key2": "4pVSDdJ7e7JtKCcqEHTgoFDkykNpLLqrTtBJuNaQ7okNg6Mo7MGvkGK1neBaBakTJgPCajLcoksqe1VpJTeuoLhR",
  "key3": "61LnC4rhqPdKVvixPRLZi98eiYePRenUPwiBFtfggrfimKSQ51KhHiQT9AgjPyYggDTC49zVcEG8QCXQ9XyTTeJC",
  "key4": "4famuBsxkTcNiTZKu6uyuHSNF89ijG2nzRw7ENR6VR1f6u8tdi3LxcNjYmpjuWkdNsCd7gHniWTHiVP72iHKfN9W",
  "key5": "57D9nqnnCWUnLVHzPWJgi4VZp1UD5pWcdNYiEVxobEn42tMzsWXRv6AqoaZJvp1Lv2K8f5DL6PWC3k3ifcEUkwyC",
  "key6": "4HhMB7zpzaGD8CZYG5iY8dn9WFryymWsp7wkGTjocT49g9ChTxHqyeGGbkXhsjQxfwFNsjcCEg8YmdA94KiZdT1x",
  "key7": "32uo75WduqvfXTiu6z3K2iaiPjokg4Bcq6bszFvwLCE71sex7fnJ5JN8xFJTJtzArkNcqMUT1jjCcAms1JAQUzmj",
  "key8": "5SE7DZvWBPm5VBwHDocmicPb6PrEWPjAZpa6kVLguufvdETd7zEemzneL3uwscQT5QbvuGFn9LmVcdnWwedZ2GTR",
  "key9": "5XfKhUqmqHtMWXBe4dnAFiwRBjNzxsRE5eTU2hu5nGQGXeWryFxYgfNDpn2sudJvBwNWp9M2kPVWNDvcKkqrxFze",
  "key10": "3S867tXXnuhXbK9HUBuG8qVPh36G12hHSH8QvNk557ZGmacUjrQC3GUq35EEP6TvqpCGZcfYf3KTuQXZUJ3vyHdt",
  "key11": "5LHorwUMrDJ2HCouUiuN4W5ptqau9cmt5uTU41c883DRAkXBh8TQaFBeEPD8R4yKq3MauTLMHoF8bQnAbM5VyRQr",
  "key12": "3gZkP3D5hAnpup6KAEU9i8H4DLrTg7DYse9ioNuaWxTgC28MRWKL8LUFTw13xYMDZarrvzvuAwVucfvAJN5zpvMe",
  "key13": "Tu1YdCHrQeJmNRkom1PuU9bTVk722XitdgDwi15qqygNmER9AJGJkHH1VkR1ZUyDYSzCuhi4zFdPymS7RjBYoYj",
  "key14": "2JNyFWQsZ5KhpxNwZ9bzcB9W7uPkcXesQjF8eFRWxsCVRJeUCjGfNX8rDoDMts3nWCWYKiEpSSvT5ngB895hqi9z",
  "key15": "5ip8aVNRi4vGr3vkLSQ1UYhJFXSomQ3ybWEuYaQyEiKM7q1ucokdoQGLtMKZiwDoMTDsEcD9SrE4PBWup9C9KgjP",
  "key16": "4xhFPhYNND9iJ5WhoGNBYFYUzjjMtEwnGSiRFSQBqNQrmXatjgfQTiq3CeCF5VPBACZ1q6b6mrnt6uYkEDAKEUAX",
  "key17": "5hgUWiUtip9Rem15Qk13B8NunYDXfjyrYWe4Q6dx37b5m3G7qhWmPiJAJqzMVJsqyGyC7qJZcPXp59XgbxV56o6E",
  "key18": "2cJApNVyJhwucZCSfk7tsvdXbxFU9PLTYBbHraV6qUnmqbfz8FzPLjbCLNnUxJdSEkuWJCgHseTsT4z152doHH5y",
  "key19": "279RfZg86TYL5AAx4oCkCg9g358NeHQqZy8pk8qdgYnAg4qDfeHnhroy6JBSFLRvfEnZ5mt6zkmbykAfhfraBYNe",
  "key20": "4YC6zLRo5xVx2wCPDEoSw9HBHhMnEF4KkX4k9ihDiuXKLENKvZmLzfYawZZQNcKGujvgWAX6py5qmL4dGxe5tz8d",
  "key21": "Mzm8TuK7vBsszzZ8JVtTecYKeHSXpQGc87aJYqet5Zw2GHP5DYgmLW4Hb9M3tpAk5ooAXYvJiYnjUAVmpfQPAu4",
  "key22": "3XK2byrs26mPBoe2SJG48ya1tAYNBx84tziTpCgvyREg2ddMvE6DdsduU6FmmSjKPPu2eTdWTGjnLE3JShFMzsA6",
  "key23": "2uAoaFPHgSorvYr6rw4HPQbf7ffxvWLTb7KsenuNRiHv8r7L11fvg5qqirrn1NjB99rg2qZx8Cmnj8osdmfUrfgR",
  "key24": "5pgJi4DA2YUdjzLjQAL3CibsCkfAyLg6TqEsf7NpCEC3CtARZTbG24D1ob5rbDTRCmhTjW2eiQRTNJ7X5xxmnq6W",
  "key25": "57cFvcSKLYsF3zHuMuo6BRZUXcdaAz9kFc7G4x3vFpmTXsRGrWiMHwVz9tHqV4dzWwiHy2VgCTcTJ5anTLtsznNv",
  "key26": "3zTjdJEpoaNysDn6V88BG1KNi3yPYc645eq52CzC9ykqfedRPVsuSqRScRtmtKVQMSKJB4Bh85pfLyMCkTKLEmr9",
  "key27": "4DtHpxjgJJ4nbkRrW8i5qfUfHTa5ovcYtS8i4m6BF31cyB4zczqJpg241HccjjmDvkZXVNhkcCRCfZ6rMpaxS3vc",
  "key28": "2sDddYKSqqstxCN1tfT9iQYfWAUxQqHBEQPuD9JNJfem4AzTy3udgiLb6KDwiF3nt3Z7jvTdSwprHtYxEsqkrBuD",
  "key29": "D1dfAw4QLL2GJ4Rem8nayCADBtpnj1237QT7UwA3qTZHv7KJPVqNVHwXMVQXWj7tTnhbCj5R7BhcwVsVbf59rcN",
  "key30": "3e6rLMLuh2HdnZkarsB2PMWUSkG1eC8biWvDzXR4MqEtjUWk8Gmymd221SfeGXtHsQptD1BevsK4wfTTToCLZHuv",
  "key31": "2XwcZ7XWHw4yytR6jTKHwoLRXXeaiff8ak7zYWSC4ckVxt1TztBu6hCPyVkMmm2nRNjGMZM2V3oYzH428aqcPBNo",
  "key32": "2US7m4gFQAQFVbq61SxQibfwUS7FfszRvNfZj73vbbKQPGFwQYu7fSoimpwbJLLa78nbEAU31wSKWVbbCuUoiPVA",
  "key33": "xAxvBz2aAQ31fUVb636JTeNL2csMidUR9ovLGVWfN6YtVsZRSWNawpMBJCQzsi4LJe84RGev2xQA31D9wJ7Z8j3",
  "key34": "3g8VGBFF2cYRLa9a9oXtmNbpXsn7EmvXKTkLa8qkbx3Ut4hGyYGb5b6vw2sdm9JT69fgRfDPMkKVWdDz6V5xh9pJ",
  "key35": "PfuEFHRpxuy7j6EzXeqGFB3AgjCRte6HinZ37T6jkrjLj4pyfiZuXjnT7qRyL49FJzxDAFGcdKDQgqZNyAe1RvJ",
  "key36": "TJxA6G68wLwGG1iuc7ufyJAzTqFKsKDvBSpqnjFUfjwfodyPrx6Pvk5dm2f7txR7dAqUGB9TXWps3piuWrW6AZY",
  "key37": "5fDnrNxQhjSax7CeeC3tMK85n1FZ7M5tVF3aonwWvt7Kn9JFVyuVUUc2dgUkeK1mTCm4WoDTnHurfrV8j8RFdLuu",
  "key38": "oCFweYFjci6k6naq1Jt8BeDWg7SoEeXr67Cx8FzPxoThBAmFCYQKaoWXMGu9s9doqqrkXfPt2W9Tan1ihJKia2N",
  "key39": "2iiSJ6E2YnpSbssCxGUi3AcqqCU6tuBePMWjWD2awHwFPZ4AeJwUrRriZT4BwTm482UH5wN6LLSaR1ga27Ssa9Gz",
  "key40": "JdTfnvyZPpy41ngqfFBouMaMSRt2g5dQNgtvwUH3LaNP6jyTovapsWz3KKjfiSfQ7s3mhE7s1qSEAzTJvgn7Mds",
  "key41": "3W5Cje57Zi3Zurq55QRKzKVjza241cDY4fJQBcN3sJt5BBhF2md9D8GF9hCSPgiKesygd3e9Uwd62zEeMWdc2N1m",
  "key42": "4EKLa6hobhZasDmcPbZXmC9Vz7cBKEFpnJLZZ3uuPoPLGdh82bTvw1Dkhh59ukxnJnxW8qpvWPDAcRyv8J6nDfNu",
  "key43": "3i1Ysr9UhZurLf6aC5TuA3P5xrkarSoF2bKm9ykteMv2hdMZMzP6vEdGgu2S7mXf2UU9Xp1PZVV4gCeK19r2DTXD",
  "key44": "2d3az97d1166K62wUb6uYG5yhmLMipHreoAhD4fVkZUaA26gR51QdQWTwY7utpYvczWViuqKZMCtH5HXTMNK1A3r",
  "key45": "2gaezfqvYt86kzvfTotBB98k5tr8LbkeTaEyBnMVaeCvGVFbycJ35x9t1LVJFpVTedQQaMA9aqprjfRW9KuNbjVg",
  "key46": "3Kyh3p8ojFi6e9R6PHqM1sfE6i84x8eFS8d9gW9wh7s1Jsbkbii5WFsFdsmVSgVDSjBUA7QpKTzKA4J1dcuGCAj7",
  "key47": "uH2uD1UZdPbiiZgK9TcrAkWTkdJzZtynKDGgnkRtwMT39xanymznmuughZJQ7JR3LSrqH98RS8Z8qFbwESdrJBq"
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
