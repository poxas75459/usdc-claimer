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
    "5EhwRrYPsMLXmA2M3haiXEkAaZpckv6fagRkosdtriksw2KEGxEs3fkKDMhASQ1cFmPi3FE31VEmRTrEpRdrsrJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GZCZ9p9VUpMz95CGtuJzp4jTZ8G8ypkZdAnYZbr8BMUEfgzCniuWpr6uyS8ndq73AMQcXYzL6RkqPRdpQAEyVPL",
  "key1": "3mUBWR4AUN2EvKrz9S8sLUnBk5RQg1rHn5UQWdGGCs3vbNetx4dWaqgcCD5ztWEFToE14afsdp1MVD1pbQXmrbDm",
  "key2": "47abyH9dg7mnhyST2FTEPwp4wXHz45WiNJJAzaY3v3EM9QHVR6QqFvzbiQBt1fYMd6rMEjDMe39hgCK9XjNQaTKu",
  "key3": "3DCmYfdvuSYrxRPvatzyn2wSygXqZk9WWPZehgntaQHF2sNoFMKiemoUdFgLUR8hAW6s8psJELnCdPxG47SjvySh",
  "key4": "4dA4S9CpJet4CiFD6zLpFf9qTFSxpbXCbWHubRRrdx5tejEoKMiZu8wMYvZ5bob33cBg912uWDHbhrHU32rEktRY",
  "key5": "2YAJggQ5d7FsUkyN7PCWctEN3V8BjQsLZoqYEzhs7JM7NqPZHsySkEaNqsbBuAYg3zjZANG2fccMH74jfqkGdsgg",
  "key6": "3vsz5y9a8CqfoamPGeq8nd3dUVqwaMWWsVU31VTpQMHnvdiC7bBP6cZd2HewaY6Qsh8AJqhucYGYgCqvxthYhZCc",
  "key7": "41ds2FNK1T9bDf5fjydb2dYhF5wKLVUtD2zfiJYDAxb4KoHY1Ec76AGf1qrZQoK5X4W28aF9U6a367rEHmxoRuDY",
  "key8": "4tza2EteEDJ33UGYS6UsvbRtYt9e5simNAPoiAKhAwmz1musmZWGp2CaARJYzdPSshSfjmU9pvBq3Y7eQjosz4tC",
  "key9": "qKamJQnZCqFcdoVrofe5YnVqpv1k11WSyvpix5QeoMeefhxuCFJRYQrB7yFWzUqPYg2Lg1Vo7uipMQriuYbEsDp",
  "key10": "4dKg5zmu8K6SFXW6PsS9usAmAGoJXz36XW5JGhtRqwKGbze9361m49bRi5oDeMdvoc34igNUBsY7BTtYjnrXvhsc",
  "key11": "47p7cNzQGHUcuweQrfC79z1JTnNWqYPUm2CfhsWx2vxgzJn11bjVHwWm67MyzdXVCDRsA7bSwHxsfjW8c6MAg8ic",
  "key12": "4Hx4nCRAkcvFSpxp7XEHjFX3iSQY3rDNbV9eQMKzHDgnWEaHFMkbmLRXwgvXh8bgNh6sD2DMEWCYEAsyPYDoxT2v",
  "key13": "66akUgHHFo8KCCMN4BwErozzs4baNCtunN4mMZ11sPoU61rmA9tkiKSHyb6155MwcV85absNH4DE9sLu3im8CQcG",
  "key14": "3bZ1h3VPzowoYHxtppRGnn5554pCraxNNEPbCFmgrseXNXpbYgJen1edJnCymtShWJZKF9EahhGYgVb2aZFchprh",
  "key15": "3zcHFXs4DF3EnksjzZdbxUQWK8A7FQoTVxZPWhjEBmeYrr8sJCzf9V356DWjzbJCveVcsFqB4CBi9551JGV6eyFL",
  "key16": "NL48kN3kMbqyiPDaiUw32p6fuiaAXpCwoRQjdncVMqQBK8mVUJKBECXESUrCtfw3KZZaMFu8BR2nG2UPP4H5bgF",
  "key17": "2cuUVfxTDvdnaXHUfrVmGSDv6Q9tucjqCktJzAPMuzDmbjtw1JAdhcjGZ6ZPXAGvgkKfmLodLtZS2bcgP76grMM6",
  "key18": "P5UNw2KTnvAh7sRUoTDuevcXrRdmV3Q4QEfwei8a2DezwHLspq6MMAphctdQLjYaHd2SgiZFe2AsbP2NMW1CVPN",
  "key19": "kHnFn8LsEQ5SCDXF9SCRM8bD2e5NjSqDLXMEPbC6y8Ne5Kea7ZM9sQKu6nwPeCuHU99Gvevy2aRTKoADy1g1u5s",
  "key20": "4nmYhG7dTMo1eTWhjchmDiFLQqrrdon7bNkuaSsLSoZxobDibh1nUkcWZoxMbUS1sE5ZKP6sS9heefu4wDN6kLCS",
  "key21": "3ZWWNohf3SoNEv3Z2G1ojbTQL3UcfdxdfK7zubhQGSbNVjZfqsQqeHw8e3fTk1Aw1oErbv9UD3aJMU3SrcMeqY1t",
  "key22": "4uFogUhpyyL3PaPrKqKFbs9SSj313AiUWjh84qsKsXHccuZAhgX8A5bNC1Ugsxf1yb7GSmtKavYjdwhgwMH69vRh",
  "key23": "iaC9r5fkXRqJAkgLaKi2GMVc2emkjbCYgjExggWFTAtJWrTYTRdF3ucpWjr97UzS4Fx2CgkgstG2THdvjGN9hCT",
  "key24": "mBLRZNUMzj7fC3VV5LXZmjeX7iBLTEt1k1Gjxpbb2h4CY82ovLvjL2UdYdyTdF4CNYH7beLa6tQPkLSmSaZ8ezQ",
  "key25": "4Xs7D3ZUdSGjWFKpSBFAiD8Zox785DPzfYSGuZ9TsrsnsA283qd9HyjLiQwxr6iYCsmfi1baBQvWnxrxbAhY3gnf",
  "key26": "443E8ahHkEXeda8b6ywiWjBdQiQ5uGDtzmVTdLSj4nXuCwpNucGKEndDRgXtdtDxNC4vj7pwb5UHBSYvKCd7DckD",
  "key27": "5kTCZvARQN7FVtdygz2q3PAuzFzZxa1ELdka9FVNq4DgkSf9NwSMdmDeMDPBkRwopXRsgftZMkLvvXyGq6PxDiyw",
  "key28": "4Tuq2whAPXNGMpYGErFGdfxGGPSb3K8F9imnkywDiUsiW5Exg3w6pj8GcuBDr9gZa3yEKnUe1JftxWRjGcAEkDsP",
  "key29": "5Zy6bs7SBiP5G6bPF89E2rkmCUx9fZEK8Lp46KJMpePpXmTUiAD17bBy97uCg5EKudyG5AhiyY9JLrSaBBYkfunA",
  "key30": "4upt58KVQqapnLMLzBguLYAMzfvgBQJ1E4NnMSn4nUBqXUxrYBTBE9sKPKuxZ8tLW5oseF1GtPZUCqgvDzCMbykS",
  "key31": "4VmS3crJWapKtn5beNK7ybfYUrNGVzzdsppgVKsdswzcZUeR28uZLBE36izqasJm19ZMcsBpY9NDSMpcgo78coSE",
  "key32": "QKFGZ4Nfk7V2MkSAv9SQi6ZxaJfEBN5GhJMS9amWDht3iqv5fq5KJBa98Bk84sA8YDsTKz2V3BxawwbySCsaLhy",
  "key33": "2c8Gc8bHWLC8VmMmaUjzFwjkkSBU9uGXw4XpfE2dXc3EDd8XaS12RjzLK5cA7sdPrLaUucLufiDg87eAvdVjLSPn",
  "key34": "5t17KLiZi2pa8cgYH9brLo8HCrhyqf6uU2YJ7CjaXQg18BELbUjhAZHLdbs86iLxeiBW3gf6N39wdGFERKBCcz5C",
  "key35": "4AhD6i5QJH1MhgnGtRaP8rgnto5xPfP1fGcbbEwSoAPJsypLaV1k6mKkkE3mx6YUSob7uBadyqHfRwnr4AGeh6Au",
  "key36": "2tek94QW86wXx3io3BA5BofUumRCK3vcjcRqfUvLkXFyYYnfgS4s9CCaq3xM5ndTJYCuzAEsqdDG19J4Jxc4ydqw"
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
