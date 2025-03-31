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
    "3eHAvf1TQ1CMmrCwCJ3PssueCo8w48WLHf3nBbup3x12SADQoWEQAxiXLvCvXaPk8xCBdsZT3NVRPyhRS9YCHqnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EfMCH7mh4DN3qe6rtqjDetQwBeS4k72f6MguENi2524PunbszwcyLp3S2YePVmDt5oQnT5W1PV8rz2MNAUxzjgu",
  "key1": "5nSs8bjCtaj8crBg3EuBHLnfb77N8yyk3fcKTojKHhhxvRBB1ttg4p9QJHubdFnwfF7hGsVtPw4Aok5BEuzXcqJH",
  "key2": "xdasyeyC7DtnuZL5xhWEBnX37S7ZT4gzVEzrHzuzbEBz8HDnFNkBiKzBS5PHGwb3c1a95Qj2BrR49KZfipP2Ddt",
  "key3": "vj4dDBhTcT74M3aK9cZwPkr4GvJJgaU9GrtDJzu9fyAa1Ltz62Xo2BnqgGUJKmMnNwEb7NswNx1LDd6NhPo83zx",
  "key4": "SvHwZGPbCN3UjrkNCktVskTUYtxu7GLewgZSrY4hrcK1fcLm8UrVKkD918yDPCmU4V58vgWwJNpXmSz5LuX5Zn3",
  "key5": "63TFzrZ3pbPqFxzbghGbYE3cnvxV91coshxJtctBzt9JyjRwf8LCTy7DcTL3aKeDbt8n9K86bLP91cvizhX8toBM",
  "key6": "HfiAjRwuT84AYrSYWDjRrYzwYkJiskYBZ5qy41sxsfVS9GwQQstkevePzAGCL4vL3vZuBkDiXMSHpeUv28YYhg1",
  "key7": "38aajAqcvDCRrAcc8UNpBqr6Uy2JywRUD6qw7WL3m2TLGkosTwitiyW96qjmBqZoYssSjukxw51dJUehptR8GySg",
  "key8": "4FKHrosNwqQmqhRUhsL2mUhrtZPFBRtdjQZE6wu1ae4jrCXYYRb1SnwHuzZy7rifL8VTq4kud36AYHZbU3SyJZh2",
  "key9": "xvJoTK3na2ftvPkVhZuUnGD9vERJLiPewBi4rD8E5R5YDAj4GAEEQnDKsagYddAZeyzAQF7bp3F5AgeRgJ3VcYk",
  "key10": "giWNoqdrJ6LBvMCMtazFaRLe3hwY9P8L5nWanH4LcYxqsZH8oVY4FwF8kqrT4faZgeshumf7hkrAhjFT9BHMmgV",
  "key11": "3NKThhpbM3hkkiBAuabd1h8BHkC9d76w2gpdXrYeUAiMe63H9pAtSoEbnYoqYizieezJAtNCJwS9m7w6381jCRPZ",
  "key12": "NTJfHYTsXJ1EuLbghEDTmtM8uoUB1rNHzmZR2Ubk7ia3iGbrMoQjuhQ8rGZeWmqwPrMkdoiXCZMo41PfviTzq9h",
  "key13": "2TH2vynxHMQAmhxv7TCey7NV21fFYFNcU5TNfFXdsRrMd4eV4FARhckgT5qJPCXJeGZtpMxMhsZDy8B2QYJbXCYw",
  "key14": "2YG25kLcjJdzzptLXxL8ZvSUyL94TmExTKV8Bhfj2hxiJZQgmQYY7E5ECjRPHjFNtFX18X1TYV8q5PV6hJQsJ77C",
  "key15": "KfLFrSoCHxvSLnXaswePkp8fwuRt3UJ8oiWPS4KiNAxHHCXiN59nSNzxYZfNafmvte2LJCCgC6KpceqXCvnAwqE",
  "key16": "2irYNqi2YpP7G7sz7SuuqaqhZNkeaEh2xQd3EdddopK2Tdd4vWWqDFiMXpEJ5xts7W5KCqHHRu1AiwN2q9R9zYVM",
  "key17": "5WspawTHzgbmyi2Dby3jStQNqybGuTS61PX3DQdtBYGBG3pjJL8d4twjVBQ2uguFNovVnNtmCaHa9VxZR8FybTFW",
  "key18": "5LSiAeZQJ2ZEfHn2yE5sa1224iNhdGaeqHnbXMEhCdXZSecrjf2MiBxTibgNPaALyhSbSbFi1V7F727vf4jMx4hT",
  "key19": "4yAMgEk84RhYy7AoTUnwdpr4YnPMSHhtKHhNMkUR91aD6EPF8ivx4RnHmVtkoBsWTndzBKFvhcwZ2mpjLVGELjRJ",
  "key20": "61dTezPYNFRZMEfps31wAi2fSrbA9E4msHv4fkkcziMf7HLyhhVxYJnbQbdnpb2Nuwxvru8aYVzpGJcWZdpzXfA7",
  "key21": "5LvR8yMBBHSjAAyR8TGhEvqx2nxsJDYtwK1HP3A4UZtuHqrpYBarg52d5xjwTSCG9njmuVkPJuaKRaUNzaLHoCzA",
  "key22": "Ebz4vfjpomivem3CCN1XDTfbr1BYCGtgDVUY1zsw8G7hQnZBSTZqX39mpZmQvLmgaYEWXdBdAsWVUP8fGQpjA1p",
  "key23": "5Zo1SSZacnrspXsczaxH5MSRoJpcFewXWT9h2x8MX5bLnHvtrn9EvWciNSZHDxYdGpsextxsPrzDq2suXFvNtSVq",
  "key24": "2zAdQBWFkH8ykREbk8GqzuBwUj2KVWfayXxene9MpL11FCa2bizr2upbMi3DhR3VqASg57fPdVvSnq9CGNHDQPA7",
  "key25": "3qG15ynmn1pvoRcowZkS2j5S2Zo4kvjSYxD22fVVjhF3oXC96wt9XmYFhko9BYmFAW1XnNtuFcGpqK9VBBTzVy5e",
  "key26": "5pTRspPdf7whrVd5FVrPDJ8ueFtzzeBD7diCJFXbmL8UW5QRgai6yB8oD1wJcUc5kDrriigWSYEjZ9Y5BfwtitpE",
  "key27": "WkcmBbbwr8Fi8SqMA4aGpo2iMZ2is68u6ieUQUuhTc4E6zz8EiMGXLQpihZvYAYerJpat5KiQfVUqq5ifUyXM66",
  "key28": "3YVjk5PHUJZszYrMKa3vUo8tgG4CrYuY7eRJFJr5cyrsE4fMfXb5dXYqoJ8jtPKZGevMjcaMbxAhSkgBGobAdjdc",
  "key29": "s4SoN4B3TMf5V64SANtmVvY7B2cvmQv9UcTkDk6Mx6rybPK3hZVLBZNoqaTdTe4KfhD139AsqdPe9Wcvbx3wcji",
  "key30": "5TQPR1HF3Kad5JVp8kcQ7gUdnV1XruGU1shd88j9mYYFA7yyVNrMMD8Tsz6EdkY6jBBpaUcDLdWyt83zRQf3kbim",
  "key31": "52Z1D3ZkUWLfnYf2BqaceSjf6q1eXZ45P9dcVA9v7WhrF71Hc21WGBGGzQRtTX4JyxLBFJNkUVNC5KdrBGP7jp8R",
  "key32": "4ZDoKeFiUngiqK4UJVb3jL7K8qiefDiEVYoiWorPuUTx9wvFNx1yfGVKfTMehswXCP4tdweDsfjmCDbVWbjs9C8w",
  "key33": "51gd8wLKEcrAJF2BgfedH9ccRXZ9QEqAPSEx2WgcfvfPvXDMNc8q9aRidKNfEbHXNkQsPZytAAGwHNGHBTyw5W2j",
  "key34": "S5PtyScybP3Xe4MFavcj2qLqNKrGkpGiqzDxEcuT5N775KxPgLTEX4669rfxP8twoq4czpQYHWMTMH9rvnGbENq",
  "key35": "2sWsBJdf2mWoheDNzsrEiypmqr8NbPgP5qCkKJ5HuNGP6aKZDdfE5s3GKcD9MHMdx6jdDALwsMcLjZp7YF11gnC3",
  "key36": "5BUyaC6qBk6HVSvnccfq1yfXWA8bDZinq2AJkRQoMcoXksZdpwz7kVVNq1vzPMeqbj7sea8jrzUPJ4KJPWKrW4cU",
  "key37": "3TUL9sdvLPia2vA7vv5892bND4WJ6bd9NeEHNsr74gVXG6jHZ8AH5sHGuf7mZvxakPUUQ7sRNcrYxN3vhtgwQwMR",
  "key38": "4iwJtkfrq2buPKqKQnGicKTwj6ZvqWYs1z2L776x94DUt1znHjqEt1GxnhTqJXMEnzCENZ3UJNQhYQP8GMKZ2HiE",
  "key39": "3uCXUVS5ueYAvzb6TBYqk5icDthsA8rS6Wwm3Dm8V8XFXBoY4cs31c1bmfgJeJ4ECzNVVSe91bcXfZkPV99JJqnp",
  "key40": "4nxneM2dd5wSmPfBXwkbVNHZYZoEy8WmWhq9Dg5r3rJGVyuwypuKqLNeqVnaf5rWTET8hLo7bUHnzfGqnyqtXMwq",
  "key41": "2bPJpJbCSFHdazA6RRtaGbMKyS7ca8hqXSoZy2Aj7Wf25wxQibrYH6vRBt9622nz9DU7RaKKGcpwCHNmNfmzqPkf",
  "key42": "4G5v66TLQQDcyBZRDV8Q6HMiAkof4uk7KmYgGp6pAdgPhjFGyYwuK1d9Ho1CeAEW1eNyEqk1PQ3jmg4CHirSVrVe",
  "key43": "5u941DCnYSFTuEUyVEgtQ1AhaNYin4sa49pyqrvPYvPdei3FvXa6bJZzu3fVEZMBi319237rFJ94KkrseTW9FaY5",
  "key44": "2r1Ejbt5gW2S9QGQeZbsuDASoo3QkRvq8fe8H4mJ2egJzA1RyQcTLfcX5UxPKritiuGPZ3kso5XqJ49L1dGsS1SG",
  "key45": "4V6yU7jmgNnhBfZj98gMecqgbuMpRZPuRn6MDXo9XeWU7YBK1MSTSSK5F8RLXJSy1XuiXc163xZYkNKiLvAUCLR4",
  "key46": "1CjYuRLDvS78Eg6pY81decskmDrVrp22vq38mLZwD7gaqDfXRhk8KZkUBLzxWavD9WGnZDbs68yVM22Vbm1mEue"
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
