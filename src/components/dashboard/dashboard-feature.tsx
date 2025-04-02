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
    "3wXKdE3ez3PiYgyQhNtSBe31dYaSqKWUG5b2SBpdz84chFJJ8ccpKifWjqb1aa3Lur2dkmRa5UbpuzAqqkLTa4iY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aFFEndywKRfo7Fuv4HRniVoG83RSS2RTWFguinavuJtH4s151XWANnB923FpiPQK8egbtUdg62vL8fnJLBhmPcT",
  "key1": "67rhz46zb9wsTP6LwXVStrvK8abbh3CWzMmivQP1xM5yotqxMLcBjZEZDZ69gXjNyXXjxB5PPtCzAmtt2knCXV5",
  "key2": "2e1zwm74No7mH88WLaFp8bnKjcC638E9gnxKYkd4iKgQ7PdLkuoE2PZMpH53xyy8WguhyZwh2NLHM6w7Qc9vsZ45",
  "key3": "bAHEoyCk66v9wFNYcWuXiQc9BzexaPB5aTW57KAzCxUwzz3jowLNf6hfWJRuHszYgC5jUSJVEFvk4AobVXJMF7B",
  "key4": "2Jv3DWnPzT4k213PzqtdJfetm3ZZybrDRK563b4dsEwwZfDUsnkQmVzWtbR9Aa1kL8hC3YKPzmL7gowiKA8CWh5d",
  "key5": "6tFpEX8zGY9WwikD1Ux9LwVWejaNL5pHDa7KTLLD6YuNNqZJH7bo9ZumWG5Cu9f2b2HgqLFtMH31ssJ1dScu7fr",
  "key6": "2gPHm74aFPGuM4CuZ832Kfn9BHSfZDaeUk9SCnePna1HATtPBa9YmQ2WpSG7ofeEN7eWUUUiyeCRcFZjtFBPoMx7",
  "key7": "4FKxG8vjXskFnP4sYEPmcaWLYsB7F7CYWamvo6MRT9HbqcJkC1WAmRJuehy1NMJKhomUuRSnxzt4d4vYboJiSv1f",
  "key8": "3WHYAxk7XvcVGegpfHQjyZytDKUduxdySEk7QFroSkjqQfjo7RfAebESr3HeKbAu3SBL3D9uY1upvDUWGQMd2QMc",
  "key9": "kL8Y8nvMcc6QSPD1VQygrmf578ieTvR4ywkpPe4NXRoFt2paBN8QTBHn4NymCbapg2BQMfjqxmhahdDfNyxjYA2",
  "key10": "65p1LA8HJWSGe4ACNXZ7D3CfgXywJsEzCz234uevPT1thJgRh3fDYbjLcx6d2SiM1V927Kut4rNCYjTRSaiaYb2b",
  "key11": "64CTVmjAySWZtpSJCMn4QLf7yTfyYFiKHCNDfoCgybceZrAGYwHm4Sd4tkeJSSoF4xEVFq5tywe4VBTp2pn2uF1w",
  "key12": "2F2hUjJHd4EVbAzCEWxsbQnwLVDkTffTtrtXHV5HVoayxSZf1abXYrtvoTUAUv5iNc55YsENeYANLqgj8x53Zb8x",
  "key13": "4bzmthBrSKtZsJruEfWrpSx9HMDdWhJFwHB9dw3mFEvz2BrR6j6aHYCyQ8KWarhziyiuxaZB2eBsgxayUWkFT3cS",
  "key14": "kEQZnMoBBFz7Mf3NbSDSXYUHw8KaEq5FJEcdjzUHvpUh4SC6ReYE6oGz6Eo5GbHq3esUdtKEvTkbyYdTmzw5cCz",
  "key15": "5TeoJ6QpT77Nh8EF9XRG4J7kMaBdScnJe7EJtZAoy5DF2C7Euebq2P8TDyQHRcifDEwJMXZCDYLuJgKq8JdVQ88T",
  "key16": "2MnwzBSGGxAWabZ3Kyq8tLQDqA95YLHJAwvaimeGmdZJ6ZVecdM3htpv3NV52qyWJEDrt5qc7QzUTfBgFyCqBG2d",
  "key17": "4cQBzEpQZqCn29aB9GnC6hFN1F9NhKLYtLvk9FJoQNAktQpAnx97PF4Q4ctQdvgy1cWJwh7E4VeaxEqkDZLwBUVe",
  "key18": "244PBdQgBqMAEVUBpj637bEZZDKR3eXMLTCmrGtoBnA1BRmW87gFpHKn53TYG2pn2bc2SZAVuKbrAX6Gm1V6chQU",
  "key19": "tRu8qUwXsZUQb5a2FZymXnncAyofqBm2LsKxACunCwQP8rDxZV8Ggh2B6ARooGMViwcLGPfsVDqaTXyqTzKCuuk",
  "key20": "3nvQ7JiFkPijxcZBj5SgJmwQUyU4w2rX5Qn3YFa8zgF7qhsu2CLrZ8sdMXDr8q2nZkuECfNLcxKdMWLNbAhiZswA",
  "key21": "4WXcPQCF3RnVDo73Pce155j3eU2FCc7c5LBBqKbx6RvXwewyx6bH1v9SkfcMh3kxgq6g3ZW5sxaVxfHnbGtFJoSV",
  "key22": "7LUgSENpWWR7mhhEsdDmxVcrR9ehGBFV1GHAVoqZqjgGEjFPyDm5HvsY7ZiDH5THuvZWBLJEXXWJ2Q8QgUbEjog",
  "key23": "3gtGzRoET677nhJbDUmXcC9D4TrbTYfGqVLRvs4qLWndtgDtMC5HB3eKiJ6kXQNbxWauD97ugxyBQT8fR4qBgJ8j",
  "key24": "3pyVsFByN2PL6EmgP8JfK8cq6btv89dKegQMBcTufE38BdfLu63nYhHjkDdYLcJYdBWmKmMVdMNE7B8naXmUTfTj",
  "key25": "3kwKW2RS8AWtsEuBqewqq1FEEHbzqPrqW6rXW8CZj8eMWfKtahiXvsxtiVrChUSKuY1YuKCxyNtru45fr3PJXKP6",
  "key26": "4HrUSTxUod5xKAgepQpLbj8FJwNvnYdSQu2CKykXpWZcS6t4gY2H5Rav8yuPsWmPEnPmGwkiRUyBBgc43RmEsW3k",
  "key27": "4GQnBq5KmpkMdd1EY9wYEA9JgWAnFGCWPoHi8iWFXSnFL1QP3d5nhbo4VnYEvxqjgwAER9HRVtCjRYapprCJ5Q5i",
  "key28": "3i4WaZnocLnJ1ToKQtPoEixKk3qJDnHgamf7bM4LUUGcKutUv3k2dCt8eYgrSrWjj1LXifp3tUqe1tPYWxGYMAkp",
  "key29": "85wpxZXWNZtaN58vQHtGkSWk7UENj5tBNSua2qLEXZvaHb6S1ZVQkF9b8491YHeucqesqcFQKGT6f8T7rRak1n5",
  "key30": "3ARPFHJ87ukEypi6RRskBpssKKGSDCaHHzB1X4LiHjozVvjETSUkvJWucxgGDQ6E7z2MCRia6XLqZvRuFaJxBWfn",
  "key31": "36RzZCbJv1SGMsf1fsyZCWhLdQSmu3ptSKNv1mV62ieYsbawgQCmdKnqjZttRQEZNDAS2W2N7T7BGL1qU64NfR4t",
  "key32": "3SnrLSQ3P9PYHBneaN1HG6GdSuXN6SA5nwpXJkhbKdQ5wfXMWSUSocm1ErJF6sRkcTcBTAcYv2AVPxcT33Td7xvG",
  "key33": "54ZzUQVCTvdVwkL5Y6qcfmkQ1GLg9QLQBbHDQmpys4gnkipJmWM88NWJA9bKY426TUhQWR6oPZ23wBQ6TdPuywPj",
  "key34": "5FQE7TSbwhPaELEgeEBDd5rSNYFk7WTtZTpLyNhiWsTN9HdEGojrj7GftJJATsujuiYb4sybAeiCNkGYr73aMpXD",
  "key35": "5uLj4k2RdYHa7Y1LeAvnn3MZuDGJQ6cNmih7WconsdTqz52u8Sa1FUrjAsKtaEZU2rRFB7paTNJaRLy9UPDHbwks",
  "key36": "46JoXV47PRcBEmzrCJWc2m6cSziPzAhmeo83D4rb9Ajezm8SiayrrqiKAwV8dSjTR5x15G53t7iNeiYxgYwGRXzy",
  "key37": "2ghyxUHr3KJ3b9ofpfp3jybP7toeQ9MaehBrfqYpmWMqiWSLKdiENdWcW7so9vmLTPSQPKZ4YutkzTxSoXTY1r6g",
  "key38": "4ssYBhCAWHM4dwbFCwL6tsk95cAg6No8MWBuh6J8cLGcLykQegeQ6hcbwtmCA3SBMV7nzqFdS65sdAKKkAV47fLN",
  "key39": "4aTGb4ak8SDYV3Jh2rBurjXMpsJ9yzSVxEjcTUxPjtkfd5GXWzEdH63zC9bLDseSaseSzWdQbcwAsajgoDLtHDui",
  "key40": "4h5Zs2aWCuDZiqHpDortdVnbx8eE9xyJFmu6HNBknbQvX4UQbdphpjoMgv7wSDDjVW4ZZXqcaLiQbLup2nDudqqP",
  "key41": "5c2mo1tLChbDS53YNXW9pJeFYDAVrGene5YvYFMhsCoaN1UxA2aB5zNdAroxNqUx1eguqDeeha476UM8d67F2ssV",
  "key42": "4DFGhxsubcisSYMgU3seT825KTgHApmiyrnixq2RtLU7aYe3Hni3YdiDXudcSeX3C9mfgRE3Mj8tTz64v6dgbwcj",
  "key43": "FyAG9VoaC83r9G87gFA3XW4p5nKhK6d2XPEkitQgSuJFiZHMN1xb98u5uQoQm7yuX6SrjA6sPyYX4GtvGLn9xB1",
  "key44": "3acmHEJox3hfpJbc1VtfaYHfZXJdZBVcoTvvYtJQPGrnKWoKdnqUQpjV8yjYpgFpiZ3E7TQPJxYDhpcSBUmNfTMq",
  "key45": "4DZfhiaVRUEbn47crnC2hwEVaC9Sci4Mpe2ibB7RB24BbDMgVRrAjYwQHGcNLMaKdmHGLYAsV7ksg7oCDMJEQZRm"
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
