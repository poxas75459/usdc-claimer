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
    "2knrGyQkQgmv1btxNQAA4HTeo43UfYq7NKg4NQen1Sf9SANFmBymSi1tcMPgcaNsTngUXNAE8YC4Yg3hLXfmib47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VctFbk287AGgktYwXfDiLKuoP1Mn49cNuVygzps1JqrqxK4P8X23Rz9aLxhXbmBeSWk7ocVJRHS6eMuSAirjxAn",
  "key1": "5wa3VcQncccWEzvvuZZo1ocMopj2TZjkPFK4qJ56msrtC91SB74Z81DMW1RpvSgEEG4qAch8wZsQWaCJHkqvwhfX",
  "key2": "29VvrAgnKExCoDfAYxedUWVnMb5y3P4DUoe3XwT7PrndJccV36qECWXA1GqB5kvZVPFJzB4bPrgh5JPGFacbBtYV",
  "key3": "3PF6ydyqSahvNSWjZEDMiS9KTdKwHXo3wGoUDb74559gCBmAmVjNDiaruZ3rk49VeSGxFf3xSWncNSXsFNbcTBDi",
  "key4": "4Y1Ta7DuHNdxd4ZRpXzgiu9dA1YvsAKBv1ndZWshS5D9NLsUJnEWwQXGiMdXQV75EQdx4Rd99HG8f238NXUXMDK1",
  "key5": "5KgtrdXNvqAcf9zQQcYXqnQeN1tK86n3D7t1QTLdTZJu58syeBPQJJMJwt49QovcTTxQsFxmRD46DYW9Uej1Ag6z",
  "key6": "2keFd2KduhHEEGpbNnxaZ4CoRQT61AmSvzE7k2jeuJjZBMSDBXzagdug5jok2FxM3LQbXZHHZnYUjfEvyotNgzMU",
  "key7": "4qkM8Xe19EDcaEt7zqv3AZsHnwWWugwqMK9pagwrvz2SaBVnQYkBDHsKrsg9e8LcLeNzBjfFAJqnptGRYmtF8TMB",
  "key8": "htR9xwbp93zxDFRGWMwSzQPftCQawTPehfsXWj9LokaMx7cQaiAmigruVenk6FBpAYfkeRyoKUpKDZXKxGuqC6L",
  "key9": "4Qc55bUUHzMSUL7wosqiHujzm1w2QE41HtrZzwY65fBqs7fQ7z2B8ot1b6JNgvUm3YK2bKq8aBravSKcbqz3YuqY",
  "key10": "HEJC7FdUwF4EZsjKL3VEBMeSzT5dvPLxK9xyFwALMRb75NksQKZDkqeGP2JrrVL6FcXXk4tgk9my3zgnfhFxoD7",
  "key11": "2GLsyFSNZ6qvcZUFHHe87qiy85RJgeKzW9jU992BCuPeUr9G7oYym9BhYjBEwiKxHsCtEfkAWN2yeVe9pcvh5LvE",
  "key12": "2v7R6uijPtFDJSERCi6yDZxn9JGfj8U8sPnZWZLZiQFMRXsqy46n5X4B3wmmaQnwbiaEAi9jzySGbWKV4HD621G6",
  "key13": "5ghsXmohveaNdjJzBU2yPHja6YndH6xeutYMqzTXbUoPVUecW9zBa7J1kpfhvRatSE5mQioNU4jRzJq8biyDP4ht",
  "key14": "3KhPHW5VPR3QeAMo3LH36hdjBqGmLiXH3BvXCpPxJwQT2SSvv4WkggEy9ya1AeWStrHtt4N8XxbJjenPFigReWgF",
  "key15": "EK3nFWdvqhhARjWTYta3HUhybqSHcjjvS37BoAKym6i4Xn6KqcKpSx9NNo5Ez2vXRdeVHWxbJm2KaJ2DMC9646D",
  "key16": "2bhhGkjsX1gnEsgw38jgWdNKGCjs1ricsTU8ZAwoaPmj8vwjLgGkmKkHmNWQECgJLbv6NG9My5BPv6JFizHfCeV4",
  "key17": "49DFqdM3argEJWWsaxmARPT5Na8dCb1MapcrRf2uWkPtm4DAQkF5NUvLJbq1zXdH23Pzj8teTN3CL1XyJ14EBFKY",
  "key18": "5tyiSf8KuXsP88EEygvRtB6vg8rAc9HUCGsMHuz45xRYmvSfXd5QjmbnQ6Rtep5vBDuRHv4YCqGQDe4de44f9eny",
  "key19": "3LnEhsDM7PJAfMkq1sqvGfP4F284gxcNCkDtgoN4xJVdNngAFhewqkeRPeUyERTyp1wUMERSgwufZwFXsXYb3KDD",
  "key20": "5Et3zNNfpEnsFWRKAB1ZXyPxmYKjYeef5KN9BGqvkockk8bKrLweDCVFL8GWeXDMr5KgSa8y2ABTLRpBq5ZwoupN",
  "key21": "3F2oq9sLWv6eaEcL2qtGqpiDBpYSHqBQwTwJ68hVLnxBnQhra4MonfmHkgYewS6fgPve3tarDRohmybVrJYA8eBw",
  "key22": "2xJSth7dWjyyLgaMswdffzxid7kcHq3aY5woGfASpmHU8ZkHSZ1tbC2FiBF64zAe3T1pcWHjar4yvMN23QWrzKpZ",
  "key23": "49Hnf6mp9JeYBGNEsSrV3p66cYcRALqfrs8Ezwed4DCKBtmnSwdmrJmaEfWef6FGq8E7jexZwhofRQaHMSRedGpF",
  "key24": "3Wj76jds98ptDzuS6Go3STratSwhgZyr1Nga6eGiKyKJmYihHtCsqPEFyeCqTz6FZyeBvNz4P9pgCA3CUa6YqnkP",
  "key25": "243ygJ4cbsxL4r5cjY1VGGWhMjgZ6jZDjurcrBNef7fpAPTBwFCSfWGu4FkoCp61kjWeRQAyDnaKDRpQspotRh6x",
  "key26": "3Jx7VW5hJ3uNEtQHHjpm9yKg9RHAXm4NrBga6gwxUHHkoRt5bRscMUzpAsbrj62iH1peERdt7w6vxEWA7FKzy1n8",
  "key27": "5VUGzVMRZfsuJDdvTfaHQdA4ouB8J2Lq2ppos1FzeTtpPyJMFkdsSJRVha7DMMhcAe5oKpC9tMVrppBSvkhujNUt",
  "key28": "4FKuUe5tejSjGKZndCrysuMqHQS4HRj6DCxDPNGa2E8tDVjf9UM5MNwMuZE15vSMpwb6SM7UFjM57BfYKEvGdyDm",
  "key29": "2BWHPZ3ateNLt5gXTXGJkB6Cm9iB9F8FwLYft3dwjXVcPs6rZDHBYJWkqbD38PMJoj5wBKkmfZ58eaJai5YvXmva",
  "key30": "3he7iAgdnbgFWeTGndnofThtnFwH9rjNfyW3LdSUC8yiCcL8okgZbruB4PQotRHSCNttqusJhz9gkJbxXpFiXGh7",
  "key31": "3msnG94PUeqpfzroncyATtxcR7oWy3wC5AZymjXadXUkWEjQSg58Uy9hrvrcWwYvgs4YXJhcwpGUV7WhVvBXDpNH",
  "key32": "4nn41JJRuuWTQCAQ2tGDT5BDUUS5krxv4Rs4XnAgYkBwigxbgKNAWkXpz6G6EZtVbKWynzNYAGwCiUboKzneCV1M",
  "key33": "5p5rzWk5zH9n1wLshgfCUNDA4oBhZSXvicHpWdbGFFshCxGjQBPV1pNzsnypUzBL2nchde7xYdk7DzcEfDHo4FJP",
  "key34": "aPhTYqk42fMiTuQjwGg5hTiafuUEY8mr51Un9raT3qr6a3cCd2Kw2UFUb1ibt6iCPNTDHJgP5g6w8MTzErE8c6H",
  "key35": "27WAkGD6KrBcxoa9xe4gZ1VknU3mv9sMT1iXZTpeakhA1vEn1m3Ui7oofJKE4ACnGS37dsXxuF7pioUFPpZD2jfq",
  "key36": "3h9ur5qSUQ5d5ie3kgtaDUhtCrKTmDrHTH6RUve9id9Lt5Hzh1WerRsKjFAGdycj25GeFeSPdTA16Wa3dPjtcdsU",
  "key37": "2PpF9JizXJvRD6zeT2zP4imWZ5B5F3wzqiEcrZkJwXcbELxmWLtDEEELTr4VfsS2A2je1qpVEK9FRA2kese3AyaX",
  "key38": "2JDqohf9wheoqAWahY54qsFgFrGSftomJkBqVshr6jgbu6mZBYY4usDv3hDLze2VLQ8VWBKQByCVkqHxG5sck2Bg",
  "key39": "2GqboTountajcasJ9EwqoWhj6ZANLAdEE7XQEeXMUTP98N9pfidi6PoRZKqN7S4bFAfRoGV9Zmvs8Vc1VH9CTpuy",
  "key40": "26utYruMyvth59NX99gx16zUzMJnE4jFT6WwzJuS39j4vLQUuTPJXonnYzMf2qQQV9VYHpG5ujb68SNqekWRMZZH",
  "key41": "2aoKBpccMcSV4MtJ9YwZsuvBjzi5zLVuLi14QEbEpVawFX1ZKpHbGs1tyhTTd7nqtvVJQPc59w6eF15G2e7jN2yq",
  "key42": "2TrrKtkddymu3h3xkfHUGWotNyNw5rBZjdRv2GTEgxTo13sg9RihK49gKAASYyhKD7e6JrHB3JSPtLHCuRr5K4Tb",
  "key43": "2yPnWdQQezQ9Jr5sAYHxmhwXZ673S9RXfDWRTLAPHmziebWoxwU2wMPuN7MAx2SBePvyS8VrCQYioQbpgyENaLNF",
  "key44": "5bkHSxaamq2yE8RRCqjswVTQs5Qz3iaS6kKAVjtgnr4g5r15kNZUdjuG66zUMjjMGYUGEb9GWcByp3bMQMda3Wc8",
  "key45": "2XQBLYmf1zxtrgaxtu3RmHAygoAdWhduqcrd7Gzrmcsq9ti6DWcaFW3aLq1bdBy9ZpXPxV6SkYjJuNZX818gtMYF",
  "key46": "4Ft852mZYpZoz8kagpmcecZoxVxPYApHK4ZHybUMYteCiXF22ZuCeQcRB7ao3bsF57S3GafepxGFXcp5wfJoAxbA",
  "key47": "4AAnJt9XhrjxxMxPGrhNqFpPG69ctGaBM3HyGseNW3XTDF9vNPTbcHSFyYKGXMD9d5fGN4aYvgA1HLUhgZTkgqTi"
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
