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
    "4EE7RmjAP3y5MnuyeTPNwB9gicQpSvwR5CDVMiqdK2YKPhkWJSMFYqMZzGzenhttp1Lk5zFavLNi3y3CaKGANdCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n9eU6vsanRU1iv31uzZidhxGiEpJGRjLuDcQicSMhuqaR5rFEAh2Hnd92uUrPvgGEZsZihUnN5X7MXe5S7Af6i9",
  "key1": "B4dLDt1cYkUyrDfSm1imftGVesTRzN5YFEnXoHmtFa7B8DmHySgVdgDVkWQ7MTnsXkgTA8rHb5tUGdUEDBpyg27",
  "key2": "XDYGk1uy1jZqeSSTyHctJ6wmwMrcWafk7WBDwfiyqtGSiy2Yn3xna87hqEaBpoxb4otv6W1TF84KyNNhCKzCfWB",
  "key3": "3kaeQRm5PzD33dVxb2poBk555LcTxkiuAwWmx63U6nPkzMV5r92UzfKccWnWnUE5EFDYXE9qUxLr6HNEafST1CvH",
  "key4": "3B4d92LMcigetCXvqYwmiuNcdch9LMUtHT8gN3CNpGXGB99KW5Rq6Pmi6k4dsBYwwgS337aYvSPhN7uToRxxZXb1",
  "key5": "2sEcsNuCtpbnemLMDinj5rCdfvwa3rETGkBsTC13VGBZTfDrmiEdBx9yEjYYY3eGMYbdy3ce18cEADZQbq7aYNLh",
  "key6": "3QGn26hhD95qQpiAFKLdUniKmox29oU4Fo7nR4PkewPjHiG9qt74torknEw6apG7RoJC2nRGfH62EYTbkQYsEH4B",
  "key7": "3z2XaXGe3MDFcfGx8En2EX5wTnA114dD9v1rUbyBdj3wQfxTrWHE3Q7AAKLeb2R81N3EJeg5acRYTCaqZCz3GTo7",
  "key8": "2FiMadwF8AsY5VsBw43jBpKZYSUve5MRnt1kAY4kCVWuJkmF9HV3QBTrocAfG95KRfokkDscCL1VyedkGPNE72si",
  "key9": "Rwxvq5ZPtHVj28k9fCGgu6ziqR1paBd8QCjDSxXRcrKxFTdbPTovyFwSqQ9sZsNP8BHXH1WXAN1fR3T313KwMgL",
  "key10": "uKth9bdUfXEoCGhEqnfjtw5i2RAQ3yaA91znrUugKRKU1Kfa2UvfWg6FgEHPZA9T67YVwbJGMh4R8H6qupF2pvJ",
  "key11": "2BboQuBwTEYqNVx9zk7YZiYQaswTKJsmcaYcLom65eAJpVGMkcH8kLsWQBfotuynavwrhcQFdcp4363915Hhcnzq",
  "key12": "2J8k2gCfoq5g4ZsqTTd3ZQNwv1doWwgqjLU8w3VgpiXwaDmGBHFkW8BfZGyBi8RtrrdFHn8BGcj4GHHyV4PeVEuL",
  "key13": "YvDBHSn2fivKrfMh7Hm3em8cjkuSQv5gTmvATEdvexQrtjZ8rKH8DL5WciHN6AueLjzskKRt34Yw21F56SD15yN",
  "key14": "4SiBgaehMGU5v6sQqNxVWz8XKH4U2uNEwDWgeDtQByTzc5LfpkR3Tm1L5AWLESqcEVSE6PWaVGqbdPKVkNoUbp5f",
  "key15": "3zhJAtx54NqieAYLt7WC6RzL3hXAp2Lt2U5SY5X4q5k8hGioeP1dEN6QqA4pdbZJvead28nNL5voTegTpdpBQBXR",
  "key16": "EtWDn5zH4D8idmEQVZnMnS7dapdfUsrKoF8eRsGTAquiL4pVpmeaAdd3SSkAdRnAt6J1ReAxM2mfabhqwzUWr38",
  "key17": "2ipKeAvxVofjhrnzQK8L5nWvnhojsDetJoGqqnshvSGnMgLP3dujyB9fR6iLkpCiqtsE6WodmyPxtz2BMBrg5HTA",
  "key18": "2sLjBWCjuNhbK9K46QwTuPByrPDDYuZHqwFQQzPc9pzrNxApkqUZWzHiZgCT23k3Zcdsjo2WixhF8KREWeo4c9RZ",
  "key19": "3syqpURVL8tUAFqMAe95rxRthZ9y9SE8A3RbVk6hMHwgRLyjZZY9rDZHLxVdoiXaJbMzwoGG1coyK6U17HN5kcNG",
  "key20": "4v4CDr5eXM2qzT5TMrPYi7vczAo6BPXgWfZ8EH31WDiefPywFuEQVG8AijL2P7W4Pg5W3znJVNw6oncGTAzr7bkb",
  "key21": "2HUoDxxQuagX4VvPzTfJaHApDKRKePUzqbUMQdDRa9m9McPtzAcNk999KFN3MesFG5JJa9DymzQXr7F8qJizV7iC",
  "key22": "aLnxdLuhdndLSwTKdUANVFcYrGv3rAr29aNCHqhkTzPqmtitGAWrjVXq3xAnZbyLQd8gsVChww4Naw6SpaV2gcw",
  "key23": "3WiZDZBNc6bXPaw5Yvz1HwWmLCR1k5pkpomejy7EQrve99CP9m82YCnuDJnJgjmUgyHAKTPT3VXVzwB8p8uwur1V",
  "key24": "3ssoaYzZ988vdU7dNGyLYqB1qJhdTCKmRfRza2eo9TYA4Yz4kH478hSq3JKqifrsGsTpj6Kqtvdni1BAt2T3XFpx",
  "key25": "3ua6RwvcLVjimMj4bCzr2LvMK8FcWWRjAKQFh2FKVpZcWxCJCF4d7f1e9DjxQpyMaG9txEVwSwb3jX9wRPPtvbEa",
  "key26": "3KeTMgMQRuL9gKE2wSS7vjYCJPkg9MzutQUvwRghQHBmz9QkV4Qh9Gvr2av1T9he8Sw8ttvGwTUbDQZjXGnzgjkt",
  "key27": "22EXVSvQsSExuFYmAkqbj8kcfp34uT1BmKdDGzubeVJeCU67ci5ZDGyF3wzXmWBDr2Rc89JWsnZ2myEvWovvkBmg",
  "key28": "4eksUxLJzKCrF1Fzub8Q7xhMyvLhY9J9khCUbcwSQa2wnwNyQiPF5CogJUGGXHgLkptJYthAzoZpjBU4uPbwDorA",
  "key29": "64PZrbmemdhzCABZm5drvii2TGkrPedALwn4hXUrpg7H2VagFojsBGE7tEjpMD35Lw1hqAR4acutF9W7H6WczhzE",
  "key30": "iLPej8BMpsKpF6t8uSXMKt2cZv1oqnALV1P436YeuCvieZzhinKXch1MSRLgbEJjv3T2M16cXHCQtPBYjsfk8dL",
  "key31": "5U7jkypmMFDSc1QYge5fYvXkbtTKttm8gkJtB8hnHcDiMo8L2yYFPn5d6eRWyAEJJpCrGkhQSNMRJCrj12jGKcCL",
  "key32": "3T9YxZ4GLdUNzsXJiEEhSGXckZFAMxfaQesbTMpUKcCNnk6qcLpetDAKnHkxzi36k8ubDkEaJ2BrmarEbrzUTCsr",
  "key33": "Y9wctQTdNVm5poxAyZjD7fhohy5nUCfb4tYaSdk2WYTV8bRXQ7LcocHpHstYxXcpqY5JEssjrrBMjW635kR4fCo",
  "key34": "29VwpjHTwxTXRk5fJT7UdW3vw3KitfgJ1R1G4KFa2wkYTQw6CTtYqHHvc7QSAmQgk5vQbbBD6DsSrCHFjkWrW7Mu",
  "key35": "4WQdrRcpxzCzPvUVJHeAvXGW8GqutVqomRS8vgXsrgrDf8iPttgVGBEHKTyW9RBMVEDjWu2zn2mcxhcZPqJyZBH7",
  "key36": "mNNKPkpzxj4Lgq3ZVLAUKcE8gzCw63duc2mz4hcpFyxbWLRppxUoP57VKqhtq7NibmtYtoRPauFEqFykmVBYk8e",
  "key37": "5KeyNRUHxJk3t2v5Pso8h7m7AsLBvvt77v84RZmbkYhbnmtwBfygpXijatsd4fggBXy334csPvZDU3rvBBJ6KS4F",
  "key38": "5PKrro49xSUJKpGjFD6gV5bCaqPVnyTLHYwybJF5sydaZ5ygnZxXWYP6kZFGFUK64Lg3PCDmJFb89qDrT53RsEMu",
  "key39": "651cHMCFmE4Mwdcfq8BbL1GjdrCssZF9hzLab2dj8CR7wAcrkg3xqzSd6DaWyv2rcGyjmUbNiPZpaCA5bj6zvAnB",
  "key40": "3Ts5DU8TDWiPzqGnNXUVNewFBsh2EHNXX4hr3Xk6RqZFLGxyFtVvgCzit27EULPVPBkKH4poPPaDchYaHFiLqhem",
  "key41": "5NPDt6JxT41ukMwVav36jc6Jc4QpuqBejdnmZSdmNuUfz2LtSCH2h2LC5dsCGyXoJNQxcVRBpxAxSTJX86KLmkiH"
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
