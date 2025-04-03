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
    "4Lz8z3wUVaEQbHETc1QQJ1gwqBNPdz3DJJCnGXYHERB8V4iwav3Ds2bppYzPTksH4o2r7SmL8T86ZGMpggQbkMot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fiMGCkNNoHjxbFGvwUtSzpEMHHg2MGfhp56F54rbdR3g7joWvMTNphHZGW8x2tRa8VW7iZVxcdaNDfSi6VbPupj",
  "key1": "4AvGAqvrLUYz4F8vUJZM3Wku2R9MFaN77aNDtXYsGFfW9jtt55bmz4QN7tjKmHH7WBQbbNZRh1kmVMku8gakgyQz",
  "key2": "d4qV6EZYWRXbCsdyiwtoYwwP4634hdqL2aTsKQK1NMVc2cecEiijwjzBqJLRngeqWHRmbRgUpG41fc17C3wdStB",
  "key3": "4sncRJsG6rnZHzSRyxNZY7zoYceM9fLf21E1atXf6sDcCCA7E4QP8YZeGUsuEMG49ZdQ9TEZeLPJgqYWgcao46TY",
  "key4": "TgpBg6RCgT737hba4KakTnhLpv9oEWPoSL8pZaQQkNbubPtpv6mumQFAPqRLc4ucf7MLw3Gz7Sw9g4WTmKCW4z8",
  "key5": "4qxeK5HLzjhE24h3LMPa68RJBEiDUkqmyPTS2S51DeGvirpBKJi4sMAeyJu3AF3rgGnZm4CavZPEacsKWHbv15jn",
  "key6": "KNsptiEivGZYoY6NfXMTQWfKj6bWv3Rm4Fc1KLsypQUM6jxQaaiZGbH95ecWsCMEju6dxcNcGS1FZCTUpALk8Wm",
  "key7": "2RrVV64PTV1kjnmDZ9CJ5QB9T6XRYQ8B2BZViD6mw5Kbatd8XxcQGEANmq6ukJ9m5Uxvpc7kQairWEkoHM8vx4za",
  "key8": "29uiYkvob1i1jLTQnF9A8xuEkQjCmsh311fMEnDQhGom92YmBdCteNVqH66HtfWjrX1ZHnthca3TNckKkhaMaV5q",
  "key9": "4NhJhiP5Htec6KRZdUMVqRLfyvyTRY3BrejjwMa5UNLam2pkuWN3jex7i5WyVEHvVckmaUAwU6Gxi5ZK5q1EUTGt",
  "key10": "4CvsYtF7PAD8LyXFv9Fx8VoC9KjFXFZmDWeBobpnx49RA2SBDSpaL6yHnRgm3Y1muphKgSfv97aQqu5RLPgdd6rS",
  "key11": "s3Y9PWyZ5cckUXCxnvSBzGL2tKSbmSfUAe3GoRkKinihWwQ6bmWp9NyGBS4tNEENVi2zrH2PC8ev16r3kuqx4we",
  "key12": "4Kdg2BqupiqMoZKV2N98wfx6SAvmERtZkDhkexCur7T7ATytPTAmJmsjVVJe9hniiT4XPZtadRJpBcqi9m3xivcN",
  "key13": "1kraSR9uuzTXuSbZdcSQuzWGSTSCUykNudoWZiU91vkhzWHMyze8stukfLB7XSHiX6E2xi8ewtGHNhJkPTBso82",
  "key14": "2vvUQTHM4UBUceedVZVtDfied9XZrGkFyDaHSi4M4DGhesYrGhjo4XAaq9x4LJzQEPbeqQhTuyGqpfLXYPRxpKmg",
  "key15": "47ZKxnpgyYPMBZzBFB42Vw8LJ9jLZzTQ8wch1iRbhtfo67cUoAD2an7QBTUNev8mrnFx6wmyGbc3NQUeMojsTBq1",
  "key16": "37C49Y9PG7dac65zz75cJoxZ53wNWnV6tQAGphKEgGBLLLreVGZMXE4xykRSK7x9x8RrengJ9T4ppFQwNSoaQPh2",
  "key17": "4kv2oePi4tjRSyGpibxcUXpnPJJBS1hgFjwXyum8WwHEkYx7be7cyoiYZgzh3dwbGXCZcVFhPF5KwxzxVgoQDTbz",
  "key18": "5qPEAq68oQDKfrngfXEJCJba2Jtsf3EQRF5PPEXW4WbvgmgZnbngpBYXe3GWF1Tz9LamRuQY48A7ikunQp3HTqdC",
  "key19": "WRyLuqRFg2Nib9BsiMCygGhMr1EFo6Wn4H5rpFpM5XoX8wY8GMPrRmQpXA8rQg4pJprXZvRbGoFXjjBYTRVHzKL",
  "key20": "5pzAjD6BQ9JrN4YXsacmpLyAMjfweuGt8vTK6Qyrt7ZMEXDehnrycUUrbwv9crakhk7BQHZxsiCqCsemhYDL7dRj",
  "key21": "27Cw82FbH1pokaNUe9gSfPJkDA1eFF3BkKf3JWU7HmyHrs2CCsD6AAucMFBYMVVF6TM15gJc1VgMzDCBy5ZnsM4e",
  "key22": "3JtiHvRR6iyRbS9u1QCjKKGEHZFNJDvPEzY3XdNnTAMuFdsaGhXzRWyDSWCzshq4fDTfAeW1NqZakqb412GfrsKr",
  "key23": "4t6n3zCYExnDTX3oLaPzkeuz8DnjKaqhSAufNsYz3W9NKycsAmyhK9oBUyPhRrd249xwwxXFbzk5qwdXqdwhT2SB",
  "key24": "5WenKiazg2PsdzgSs9UtJw7koDgVnN19PNZP7Q9xjtrZkVJSRzQotYzXqoi6SL2sZGuFLt639YAKq1AMRMdDbz4p",
  "key25": "dzjtPShs1wvxUJZQoZdcwuGYwe9mSHJYfkvd5yCiPMmBQWKGSxjGcz8HzjKvba8jBs3QEeKxQCTSgeP2ALoXGZP",
  "key26": "5jpK35mjjGUFngznm4J5aFaVChKLVmrtRJEwVF2Ag4xACAHaqYSJavEuR4LGHPWws8qJhTHoLyU5QQ8g5grsPtuz",
  "key27": "3W4VGC48DyLFfpwzXWb7YvrR6L7NdxiK6HaAeigqEQ2gGcz4hSQj582JNPivcAAZbo4fqzhCMp2iTNi9rUREnejv",
  "key28": "5RSxxNXUE4Ad5kg9T6nWq6jnxLQcgUFD2RuqpMEbygq1iqBzPtJ7KuSv45BxJha3t3ofTe3Ca8JxxkA8adEFsB1m",
  "key29": "38trZsxtf4gt2MYx1hZMhKncPqeHzgR1eQgd4VCjpMgT96LVes3HhRBXXktQBWXFiv6e9iZ161YhtfSwbXXsfEmY",
  "key30": "4Cw18hxhWijDCBBxR131eNjXDq82Dp3Bmuabox2q9hM8ffmboETYJT38XE8XDgqUSLr7XqPEpmpQgnckpNSWBr4C",
  "key31": "Pw9LEzELPNgt9NC1cj7wtVjAVokAo68hFciTJ4i5jv4gEPjXukZyR857EEwDZFHaERjKubEpbDcksZGN9fNT6sz",
  "key32": "2nLHNnYd69bgFx1sBGgkVHg2QHv1NKQWqSjkuS1DisRZVJw1wT7JzMMCnZucCgKZyMWLJVymnt7yMfoTYXDDXixD",
  "key33": "2Y2sQEnp5aZzv4eBSYo5EDZiFv873DAJoRQxXBpa1YkCQjahCu4RCwGx7XmAG9CaHhvX3vcQT2dRb2Wie69hyXjr",
  "key34": "3XoNDR7141Qq4aRhMAYkzPdXMFBzR8dszB6pNjGEVhAR1HJsCBPK3STWvyNDz3xaZmS4odjaRS5ns2CF8PN2q14A",
  "key35": "3parxU8F27CQ6QkqLMNrezTWLj3G6hsRcumhEubGSQvT4miaFazaHU43yQhZ3v1Ge58CaFePaehNN1nKbkeUNBHq",
  "key36": "4fKzWBbS9GPRrLGj9AeS8juEPdAN2jj3G5LdkZoPmXt48McSj9pkPUgzJ28c8eUkE5Esgxr1ZJEUMWogK3iBtSYd",
  "key37": "5hSFPrD8qJVtMC7PmTdKXMDsUrpmWHC3JVhffznG3tphUnzmdBsxipi9AMtTzVazmi3yZwntDEVGjPrXJHYQDBWP",
  "key38": "28g21EKzwWPYwMQDaQxg1bKPaKDmsm4QZJ7uzCkVsDgsmRHDJJRam1CJ6epFWne4BZsgjtnxJXnffDZDa5Yd3hk1",
  "key39": "FYviax9FgdwFTDLL5eyBTGZupduqaqtSxsRqYfYmYm9YHNdWgxFh5yMm3arMmSyD3uut51W6RSY7EGRH7EC6ekK",
  "key40": "ENsSUySQ91swrMG3kPpNNxZhZtRFkUitTYUBrUEMb8RV5UKeHMfE1tE4rbdvjbCBSf5A1Y5weZKp2ztn1jmH1Pe",
  "key41": "24DNiN1dNWgNPow8GbigDSVraHNottxKHbQ9WTcpAnTnCMeejwyFCzFYDuRBGmkdrYBhhqkvvaDJyYfxbjBScCuX",
  "key42": "5pRXjJdcmKwShtmAwACbBSeTKrL7CTN1agEdzi59nvTrxP7jHN2BHGtdSbbFiUvtqaMYfJ5BEwH33G7ZexfiCTgo"
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
