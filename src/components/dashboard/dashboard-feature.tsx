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
    "4JaRxrJSonmvaV4rfTXoowRHHY5W7Pe9os19RjdHW9FPLWvptwHVDoFgFYVCDaUNpc6N2c25rztojKY3CHe8LZHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PPS99dGXcRGH5jvnyvuA3ZMdZiaQH9q3bVtjbjaZNpKfoJQvZ8RJn67R8sUEvcEo1SVHC8aUGNEpxfDRPWJDmAv",
  "key1": "23FoT4txFCWqVH4vYKg6WxvdWa9TT48D63JFKRXmhNWdi6th7xbRowp5TyCDy8F7Xudq57QSfwN5VJMYz1ypmmVa",
  "key2": "4kamy96T6qrJWWF7hHKLCq5CTJpKu3aB8xPHDWWU58cmpoodE3iHncj5Hpbgd5K9s2SLgssUrT2RH43gtikt6BBF",
  "key3": "5zBBFPdbpKstqphKxk7cRjmPR42ixXvgVUoWateTWGM4FQJ44ohtF5HNjSxyLUDxA3ZkVdatwTmBgZmjTaheR2hi",
  "key4": "5mE5jKwPw9VWcReFArX4CThymBCmn22u5iGSVUVZtTSf7HYGPt3tkmVKYq6CyNVSTYsEYAPvngCErToEYc6JGTJD",
  "key5": "2owLwqBoetTeMbcfrMfmQNQ3hXuVYpioh1MkxUdfQLn5TiSpsbRmMeoMu82VPj4UgcqcR147DYBibXjGKmqVjSrw",
  "key6": "2HP4MhWAenFes7AhbD8AFJzFcwcT9Bc8vJmioqzs7Uzt8Pk6dZJbnQexMFw8eUxRTsWJQ6jJGbX31SZJCtTHj5hM",
  "key7": "4ip3kj1doHJSzMpsJwd9Ja4ruk1ZvxZLhzYgjZGxoCrHuZi7tmS47up5oQdWJ3iCKPTVKdTrHKA7xAT5crnHypdq",
  "key8": "9oYSqAjbDzUYsTzrCF5K1kRtth8pRuu5gf9fY1HtrLT5eQQvy7MdpYYF4MbdCadgNcsTSeay3CEMe7eRUkc5HBN",
  "key9": "5tt9hREtp58gXWu1yQa8Yux71uubBW6ocXS2AMBG6y7Y47NaZt8hHtHrkChp719Veyno4d4ptz8BGYVEb3KL9Hbt",
  "key10": "HSc5qfCKxEXYmkroPDw5CxExDfGvDNuu29xirSJMzA4AxmbNKWWb1hQPwiBVmkdd1dJNK2sLNENPwM6oDD434bC",
  "key11": "3PTYyVmc2ALGqtpbrYjCg5TJhc6hBrNaQoBFsnuwHcGdE7kv48xxSGE44Exj6KdUURC5XHzGE9JTt4ssmnqdn7Bp",
  "key12": "4QqfYyFMHcuDCvR5LubpP3dgcD5rat4nTNVX4wrfitGnYPcDztWYEELhjyLBGsMHxan5hhTQSMnNN99yzUsBi4EA",
  "key13": "4HZSUzJHybeVxsP5xSfXj5isPudqSG72j8yKgmTkuUWEoREXRREQJmEp2QngYALoaRMsy59osgHWPYdNaq9JhBkw",
  "key14": "3Ymg1HVwmX3fRynFBd2EXdVjWfzJpqBpvtpud7xj7QF8HvWUNgBM8ux8ieBAzsyj29T9S9L7Mf5g8Ebi228oMu16",
  "key15": "37HgeCb9sBxRiVVfm84RLhRfTFTNuCnbaHjbwMEmcQMwwvES48P9q1ViC9zXiLmhyxgnQDhjKTjVYp9BLomAZkkk",
  "key16": "kuitC5ifZ5SDSxYe7htn5YETrJ4SF9KLmTehikiUmE7u3QY3BFGWvRRBmKKheeFpgdYswWqKLvdME4TpEYKjW18",
  "key17": "3Hc41Z1G8iLLhj6eafNphkxvpbBpn1uKa56pAbB9xZca9DP7oEYKcLLTuZFJLEmde8Ed77RTZZ59gBP5b8kWP4Te",
  "key18": "5CVjdaASTof2EUt1fnuiCmXSJYBXzJkNWYvFYVbNWVMVAuw3t8HcZ3H2UeJ7y9d6i3weMCko8HQPyWKECTCYGSH7",
  "key19": "4mRLsriGA3QBQYQDzrJz6mAGKhW7G3VosJ5cdRJZk45skP6a1SNYRvGxhgTWLCsBTAABAt8tBvFb8JUjBn1t7FXk",
  "key20": "4D1mKX392UF17zKwwtcoomZuJXtNRSMfYZLJXRFG1FGSQXiTYeQR4wWFnNPEkxzUir7Deq4E38uxvjJVgrTscpUc",
  "key21": "uxBdpeCtta1PL1WFrmRnohnxWDQe1Pajtr6jZUVib1WfuKzFK5QtUs94Xp43tbULF6eRoZSoomDK7b7DD4iczUy",
  "key22": "4gocjKFEEmmuou59evxfBE4JAi5GoiRZkkxUZQYRuYLjPUAr3kfX6T4uH3hC1A6vDiTUg63fUKEwR1x8vb7MTmbH",
  "key23": "67Srupv1Ycr13s2mxPuKSZFpSjdj8s4M3kQYGiRsGspwbyqEoaKB7zwVH17Ted432WD5YtPbRo9VqtJVwJWBCvFs",
  "key24": "2gmWqD6R2xJhHE8nKPgXTjrrjyrQn1hydSbR39tcjeqWFTK9AXrWg2GQ1bYcZR7dn75vhH941LX7SzMSVvitXsXe",
  "key25": "H3zE5YQ2S5spd4H7Anaam4R5wLDFxhqpqo6Chn63brE87WqftjZ73ZDWCddx7go48JURBeKXV48xk6oXnBXKMmC",
  "key26": "66rFf24eVGGkJvZNGjM7eD9Wd2ZssxsprEpCB7Eeg5DmokJya26dEJvtvQaj1BNPBZ5y9AoG7rxd2rFtGj9hMHr6",
  "key27": "2GE6TtyPF9Wge4js9qzaouzRYR1nvo43JqdRjwpyvN1kUxqiihpVsjWcMxB9tiZrgZkPDJjynhhXkjBpmsci2G1X",
  "key28": "66mt1W7qyU1T1FugnJYN2XPnS4SPazKdirDb5m2khbeHrEvhTdSULqbXFTGksU1FLSTNWHymtRzKVexM8mEF49PP",
  "key29": "4Rv2eszWmX1bnahPaWhzy6JgmzHaV53t6vxoBq45U6enuN1b2LVYVEnqMBiTFpvtjARWmH2YU9qDgBEcK67WYk7B",
  "key30": "5WqAi9NWRoqBwNUmcVRz8rRgR7ZtLULeyssrMe6n1u6GLL8GbCH8vqfdFmtsoVm64pEYTjCPmDiGYTF8pyjHzwbW",
  "key31": "VwTiT4m8X2oMQ5nafh6c8Ty4ik3X1PiEt87p6Ro4tr41pzZVMiJBqxr6KZpqxL61rLi5gV6D9hJtoqeFyps8xHF",
  "key32": "7nNan2ZgUV46FMxaAURGjcbBvVfeVSU3Q5vHiJxyhKh4fcuXzhcFygABgPBuUfjuLuyEgbgaup3BQ7NwocUnCMY",
  "key33": "37YB9JJrVdBtweczheYsnPJu58hpLa1UCKiXjdBRSM9Dc7HEW7JoezdNdXRCeKHyzgrm4AHQfdtXQ1eHRPqrZwwu",
  "key34": "3kAbTKaGbsYBskfxYgmtRgNu8JxrSogPUkL2TWV633dKmo8FcNj9qdxgm6Hp4icSQAbjk1iB8AdJK1rrBbib9iK9",
  "key35": "3d8tyR35kYJB25oeik5HeMtomzSS7C8ndXqXir582DTSY48T4iEYWSqsQwjWJyxQP4gdRkeppgeRr7hty8pjVpsE",
  "key36": "5YtcxSFD7eMvV4pyfJFMkM5RNCMsmZCe79t1tETrum8gJFxFrGqRrntk32jHYSkFGoY5cwSoWC942nj9nAzzo4No",
  "key37": "3ZU86YsZ7V4bGbJu39BWHhWtY5MTEftcXUeRp9W2wLSok1eXo4CvXYS8AWkQxLT5ECFx9JA4ertNuBaoN1ksy81f",
  "key38": "4cgemMLkqGBAvZtQPawPJt7f8Nb2nF9D9rWRitHpcMhahuUPhA14PidawnjVhCFhkZLFVSGEnzCpvNtosRZbowVH",
  "key39": "2aWdHweKeGFiUjfs6qjH62vyssFRfvHhWer1zodPQy5LMPqkQhTZ9vPvZfia3HPSX62N7j29NQToQd11e52mHJpQ",
  "key40": "3h6YJU4cqiecLZWXxfEoYk4jrMV1533YchXCzD8FVjzaUZLr2DP44NWDNrnh3r6WNURYrtV6aH9AkmRfNXq4F2JY",
  "key41": "5zZr5c4rcGNBFWGta1ta7mzJKTrwd9gttrg8fvEt3yDwMGVEr1vgg3Y1Nf5brJnv6DnVPR2w2iwdpWAbnrfBksGu",
  "key42": "4xxdQEgdYQCecbWsL6v398aRQNznXjwjuzetd1CM2gXszH5zBJQg9kscbaxYZQhJCcvvQ4tbpzyEg3wK5HWoxatb",
  "key43": "2XiJZeKPwoPcDb61iizwKKEruo2CbEkgUcw2bq5wx4syTahwbPAipzor1Y3abaYKhMC2aAna8m2L9RV4xns59uWC",
  "key44": "5sb21e8fcrRXJL93Mz2ghTVyWwDAg7cno4MRpuPhgJveMNMCrcAibrjq8WYC9qoB1xdkLQPvRzu12jud3w3TJqGE"
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
