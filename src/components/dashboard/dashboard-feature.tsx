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
    "5gX1cB4ri3rbZdvrucwUNBumQCqzhqsQ86nfttLAGBKTyXi1qKqpipcUvLApNHdmBBfZeaKfkfjduWbbH5LqARx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27D9C2YMma961j2vpEaoovQGNBdJRAp4MWADRqbkPmpMXPo1sAZSbQGwH5HDm2Mqf1qgGRUejEXZi8EqeGRiGcDs",
  "key1": "422ZK39giidey8nFgebZXfZXY2gbQMz34xqLiGazXTBYyD27fEKmATNDiDKkEaSYNA9nNX7jVoH8TGmLWYyA6FTV",
  "key2": "Pva3W5XoNidYWBvDPW1LRhK6KzuEQYJu2XiG3jjkccH5ZHJ4moqGwdm24znhQXKWrKnChP8RDmbU2kz4huZw3zw",
  "key3": "2ChFZ6TnEFAwRAyu4VSYP4oSyhB2xTEgiK3TM5qozZ5ydHfjTVaQxjDyvMVpoaRZiPqRn2XiGcZRs7w7TmVzbzGM",
  "key4": "4ayfKNdHcsG5DZ4XG9SFg8dixweDMVY5AHCk9mdXtBw7qtsLL764AsLp861QXAm5Uwp5GVCeKcAisajXwh5625e2",
  "key5": "3ECCLXw9QeGVQ9RYo3C1UexMUxjNY3rLiN9JVWvdx8wKfpCALHBwEow7vhmAnQ3djEsB8Ps2fSNNcXk9MqS9JqyC",
  "key6": "3yCUyetndqtE6XQUGu6fhoEEZFUrv36wWjzEgHJreCkAZokCSiamewsziZ5HpvAYkeuXe4Zvq5s3zFdxLAehUw6d",
  "key7": "4NWsY46rdwXKmMEfsvEDz83wMRTYMiKtfjPn2FrM8vBgQq6o45HuYERizhF8BAL3RtJ3QbMYhygf4z1Q96hjCtPw",
  "key8": "4pgmGMMgB9qWUKqfePeLtip9PZ5b9e3qJCNQDM6zGm3ZnUsTH7v2n9B6QvNm4ArGTf3StLfmL7WmuaB2xYCXfXEY",
  "key9": "4a1zBr6ZMnzriFwMEwgsxh4UhJwyEHfN65RUZsH8YJ4RdNdKpBqjeTPpDbLRia5mTk8TRj6JJ5gBaPcX5w5PC3vP",
  "key10": "3hg5wcjwNkBfVsfYP24kMdzEtfTQZ9HdvqmusSN2j3tD7mHNrKfnXz3kWracW2vYhQBTbMUYDWJfFQcYjwHuUz9C",
  "key11": "YDdZzQGrpq5HMe8341CJ6FFvLJCP58Bwpt6ittUFQTrE2oh4LxjbxtvfXu27spgUX2aw9xcDcF8gJE21NFKrhZc",
  "key12": "Sti3mshPhsv4Bu6sqd3E6dHEZazHSfYdTGKFoA1dTZqGgaoCQJGTs38ZvhVdmZDBjBVtWEtauWkaUP17LitfN16",
  "key13": "4gmUHea8durnqk4GPHN9LHym3pjEjxPCYv2tVTH6yL1uwsc4cXJzp7EpwrvfnWeWT5VAf58XuAsb5bvQXui1CBCV",
  "key14": "7qsErqU2hvgrvxpEPNb2AV6jtNGf1nnVw1ydSMdSR9iNu2NvDDtVRVKz1MCECBu4vPXnZSCTVBHqa32W7oPnfce",
  "key15": "58poEG4JFJgGNaks4J5Nfhds364MHgc694s8NezLEoz2XaFKdo7ZRRH9XsLSxJWQCxeVKoLinBrrYA2QTh2yGL7X",
  "key16": "2Vo1v7GcrEiiQbjA53waVnZiTsFHwWnnV2CCa6z4266BUwjitdkYhnmuMgwtuU8MBdJ5dLD8X6hFBZ9muczN5gbd",
  "key17": "2yGPYxCRychgzxkjhQXENAkBw2CjM7GVXZzqGhyhDM34v7z9EXdBQzd1qquRhmV4HN1VEfbwJbbuSY2G8eqrJXhw",
  "key18": "nrN4ZRS1qe5PwjKAod88X8GaGMaAxUgb5v5Ro7s65D2GNEgTEYVQiDQUBB2a8PdRMRWThjhZh8mjwLnZe9MV2uC",
  "key19": "49PADRk2GR44cSCznrYVKRBLa9cKjWQk4nBWV5dhRnivDtSkkTohzADNtn8kuT4wXrm6p3dpeDqzEj3d3uHp7jvy",
  "key20": "3x4K9aMRA2HZYKKzKhBQKWxyrCyZAFSssftr4sgnArLJgMkybXW5RNX4cG3HuNHw3rZfS2SdYhaVNvHoobdg57wd",
  "key21": "3avmFYdZTCYzisdKxFRDA44xfmhwR2D71SPvBt5srsX3HcryTM6cAYM9xhqBCYneLwcEsUHRsW9dLtpSv5gyn9Uy",
  "key22": "5Hj3ChshbSVP2RJxhAQAfQb5SKo5DZkuqXxyPAHVXz1GsgxY6fd83jpp6kDsE4cBShLMaBam6Q6BAp662wBQxmDz",
  "key23": "5gtB6yG1ZUouE1uZ7QWkZct8mmZddrCNZhh5pV9anuKikxji4y5gYfGjmJ7SSAj8f9A5RcBw14jUfGn9yi9HKWy3",
  "key24": "guDJR5E5dTd24u1XFUFt1NfXbMK3dr65QJyEdLKFT8UHpqPSkQDsvryEYqyt3UEf1ugNzrLcPQUMptGn4uePfMe",
  "key25": "5ca6eg1uM8euDBeYhnfsiCL6SfAyCy3AEm8rbGFJo42CFivaLCffW9dHQYm6cJTncbwjSjronp2u3cTsS4c2aKx3",
  "key26": "4D2c54pmZ42frVUFhdyMCcqvZSephnhaD5q9nAtsnBewHfAoyudTr9srr3v49wpDwx1jzxhn4SV47Pjvk5KmQc4L",
  "key27": "Bu2Mbh2fR5VpVfZTtZJJFa2RLKDH9owQ9DvaJQhgErUnCAfHXnczSYKfSAV79WT5igBfqermXyCYvnLCngjsDMW",
  "key28": "63WPRCS5zYAPpHBcwUmPnAaJi6yZBfni9SqA7Fzh86hutceV8HzSZFdBL1zshcgkgMso3ene1Tb3xogpiR4ceBJn",
  "key29": "5fWc61M2AjX9UA6VrUEZYtfFmjywSj5aHDjmUS7fi7KFqJbLv8gBiWgoaU3Z55wM9kZtSWaeWhRyQ47Q78inEVGZ",
  "key30": "3LnghcEtyrkSsem9AXprNEeJLpsxPoLVzbVws9kFDqPbDDHrmjBGRPycSqtrwBvzCbsxBk8iWiiB5ApSrGryxajA",
  "key31": "5ensVC4b9SzrmzZqRb9QjEf9Z2uMo6hWmSiCRjoRdxWdvRKariiuYaLJFaUBBtHdYHBT5HfVGZFNG38uSudfzMRf",
  "key32": "93DKn33omgq5FR7vuKEzoyb3TazL2N8FzY3rmyMSbtNFBWEHDuEx43a7vi8mx7qDbKLHUGPqCtSf4S1H9Vu4PAe",
  "key33": "54zQDcsyWiEdhLWV6BwD1rCNrkVmeaF3XuRX6BwRbb7ezXjzfULQvec8bMb4jkF1xeWMi9e1zSYniA83smXqZw32",
  "key34": "4VcZmCRsCbrsSAdjwKk8Uf5XxodyR4c28dHYQ6cRZ2GH1isaxnYt7TMkEAAfBLHvWtrVzk4xP6xYmEMuzS33AmYq",
  "key35": "5DdUtNB6Yt5dgyBekufkHcRt2fsEaZPwKsEDdk2g88JHBtpCU821yP2kHHFEi38isxWmwZW53U3RL3dWTV6SwfPJ",
  "key36": "3XFT4RXhgauYUYzbwVeGQSYxQpTcD8MmMk7gzrUvMBCbxsWbczkgweG8ZsYQhPLKWCyqChxpZnmXghFGGS3iaECJ",
  "key37": "3apuMc9WHRxFPt5zun1bSYGyLvyta9zwCfqNUkobC14498Ejmx1F2qcPXzLHcPSJXFWMgUY7FienNn48ELrM1tA9",
  "key38": "51oghSNvr1qcPR8yrMuU11qL4r5yL9VboPQv4euozENYCMWwhRCNoVKmeTXqv8SGZ3GDLwTnawGnXpSDNwRtk79U",
  "key39": "5i5mEBR6Nrr2p5LEioweh86P6FtozFVcuRvp9kfDCewSvZwHPq1uESxVsEC6hWEdjrnCbo7dc7xPt3Rr7sVFNwex",
  "key40": "4rZpGDRqZ9mrRzrcvH7i5PCHSXmKFbrFGtQYVckffWsKdKKt93YjT4hWswUZC5n3J5AxPUbBBWg6khBy4uqYo7Ry",
  "key41": "22wdsWnN1dfsv88BBFwY9UoXtpcuUgSqWc3EsoJbTZHAcdobDYtZxtQnKEmwHfEerxW3Evx3iZL62YTNcxPeG89R",
  "key42": "2i2WuUqtGdFdVxA8WeXFYLJWY48YU7fBzmbsvJ6vnbS3YgwsPwQ22caRzYox1qo9Xi5okzQYzHYwk5WsLj39iX2T",
  "key43": "23bVkoMCpJD3MK28oSjd8MuxVAJntBysCpSPUWMJd531NmoZkDXpecVDuLFfMxa7EGHTr6sSGQSLihZSFD62PFPP",
  "key44": "4SATQcXQWUucy1Hv6CtjXCRW2aX3RA9u77W4AsjmvisCD4EH31XjD4cfTBpPeCbsJt7A3JavAZHSvK1oh3SPJhiB",
  "key45": "2t7W5bFBtFJwdmxahRzjd8BRjmkMT7AadDcgJ89EBBnmhvPdqr3kwRaehuyw9hGXcNiHHVjakcyYWTo7uEcU8Mas",
  "key46": "3gVv3PLTAwa4q8DE1x8gt1hKokBi2kRJ69yf7wKrH5z3wUNEtoYZSV7sBV6VpLvLtqwsMYXyRQ13zVw3m6E2DBoe",
  "key47": "4mxU2NtyCKx9aG4gx4TvuMTr1M9eqQvwy84axgJyrcjZzh9FyuwR5jAMBcHpxnSJ8McdodwTBbmVwyiC3fH9Nnda"
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
