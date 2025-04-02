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
    "5nPXUaaZx9tcdjDvTnskiyLB4Bpik3tNMSNyXP5EojoSpsfFFFN3sDJobLXMhPtEZLmXLxcSxEqgABA4ZzhYYjis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51w8NZkAVBunQZcxvJpXzUj7LHtbsuZhoizgbfw2QAMXv9h4V6YDRmQDPuS6UwTxSFAKyHmrX2HV3rdfkVxkn9Ba",
  "key1": "3R3Vo3uHij3xeSH3UDEjtuVCziCKN2CodtWiGkntCgYYLDa7u259zkad8oGvwb1uDDNiHg3hbmwJi5eVVJ7VVJEg",
  "key2": "5fR8e74iR6FKtvuHRnLkjxVJksPm2RyFCSXdfqTRbxHutJbDavEPmGVfQWZZMtqYeQVLugM1E7UEtkFTyShhCAMV",
  "key3": "VqH5NdNAYXxDGXjhzPwq6mHBZQUkFot5J3SS8337L9V3Ln7n7vdxDBz3zXdpUSwGgREtXnZ2fqN5hUM8VET6NeC",
  "key4": "Ge6D6kvQR2V8HNGJo9354Ms9H3Rr9jj4gQR5cvAVYxvVDUxPfYY87ju2GfsUfbupBHRzG7LpDGB7W2DmbLDi5Td",
  "key5": "4syBuTrnnGGi8PcbEf5sZVfE6ehk6XTcmWmUetQBUPpgy1X7ktawRmCBnHsTfKmYuCxxgdPs17qe1UXhLMyvJwDe",
  "key6": "oBnNuKxr5L3bXuJAbqgcPZ4KDS5GtFhAVj6ros41aB6yqsm1bvT69Af2Y4cULnc3qTwayPWSCsnBEau5cTLMDyP",
  "key7": "4syfXUEPFfjudNvRTQo4tKQGrpsuzET5LJL6ovyF1RjBm3PJWumAXQK39UW8myizyRfzx6QmxPMvGRDqMgjU1ktK",
  "key8": "65YnnUAK71xziWVCiMwJ6C6zsGT78vhZkBqwTa9ymDtN7DN319LNwAAuTAZkNdM9A4NCNQi5uTjRgNwicTDgtR7",
  "key9": "2NJxzjcXpjfiVniMkfqyM4MtxomcGj1ihGU3jsTmSUSX4P9R9caEi1zTdLoDgKKGohYJsSB2vMJeN3VGXBUd6WgA",
  "key10": "3apJp3r3rYbzP792QJJ9C1FPFPo7K3d4JNisRYoS5dCLpQAbbqywwrfLUFu1xf8dsNjq3ScW7xyH87ZoqodxcEpp",
  "key11": "3Ek8mrApnSXoP5qe1FUQVbn9apJyFLhp61n8RsT9zXJRA4eYMRbmBWehDobeD2pv2EnLaoXmmGWbXQXycCvEsZ2w",
  "key12": "yKxL2C7WDdUcDvaouVE5PAtX7HvDR5QET8rgWvXMWWtfGcyyA55Ph523bmPUvp11F2JL4eX3p7TB156UJh3nMxq",
  "key13": "5Hb9EnovmEP9BvkXzzJtscDBY1PBC46q1KzBa5Rr2pCzDrHGDBCytutECUXr9KxHzStJrQv1gSxf6csThZunpfZi",
  "key14": "5s7gdJGx5ZoaYPKPN6mJkp9woSX4tTu5wFsQtec6eSUCQNRKeEWfgHoqCnp5h1CwnsYKAhPUnAd54gGdQNPax48v",
  "key15": "4Ty4w56J7r9vnQrCqUhwLoNwsBo1NjSwjWLJPNMm8QCUJNc6ksJXyQiHY4TbrfBKjPS6ukqDhmGaEzcX53MBagvJ",
  "key16": "5pF3ie2EaaARboYVf8zv1id6H7agdJhFmLRZ3ZwjxPkFBQQyLZMRztHfTq6jH38fsYwJYHkvJeRDSeRChpnTNZ5z",
  "key17": "3ykCnVgKeu4sgKLqE5Gr875ANiN2gx9k4wonfLyCwdJLGWcgdcQxkfkmD5quC1Ei8qvbKz2gf9ECYygp4mfkKpiy",
  "key18": "4dbLhJsLFfCR8jkzWzwZ6XZqLL8NUrP2ut3ANEeUhx1tWAw2jD5iVRLmUuTXqMXRw2jDnMiHG8ciiTjsWhjugWZT",
  "key19": "377hF3ytp6wX7XkK9Dzs2YJ83LmufrvRLwqfKgkpJk77D4R3VW4jKRD1w2nUt5b2jtPk6xBiGe9Ge1opgcz7f4PU",
  "key20": "3RaiFV67HqZaU66SkfGJQvTbPvTAsLQwH3QAD2RH3MJJhPRuRBxpsnfCUdm5yDyJhu2soU7kV7rc1jNPME3BRvmj",
  "key21": "4C1RsmaqzSfFcHckZ5VBzmfwSDjQWXPrveAkZ13bQ1i1pmxC7o7AJXUM35tEqHUQdauBm8pWga9Hbc734YrbhtL7",
  "key22": "zzSJN1XcjmxSTy27MESmx76qLHYZUvRNa7axZLK6fHgkHh4ArrYZJ1mLifqmcHe1uLqPxrvFkgkpchiVK219zFL",
  "key23": "35EpN72tFLgJPMxUfnX619Fig7mrv1f5QUVz6ibYhY7guYat2f19fMRWLvNcwoJawwXTXJsSFufRUcYtzR7XdmgE",
  "key24": "3NTVkyDC6aNkuS1wPyoQEKaGnNEceC3KVKkSJcVTsTfvFAyeweTiQoZh1cfWyZpykf6r31y9GffBtGagjf4yNzsq",
  "key25": "9evgrBkLSJBfknbFHY8wo7ewRkSBKUNNWuPBkL2V5aJBQqJZHjXxTNXbgYQnFy4XaY6buMmK7vP3vjGQFwP2Va3",
  "key26": "5iaTkevx9BRkTPcoCsbwkeDdm3E7k5rzMi4Mi2uHAnm24x7qZYRUnn226X4Pk9pfnbRQKUwb1vshrrgKAecA9qR3",
  "key27": "sw32zDZY8XvSHQdWHgLLRCC2r7ZD3DhKCQkqCtcX4cbJNsWRM52tYfPQEqQZa2qvE1HjuhTHTQNNM3tXkgEN7RB",
  "key28": "3ahFeXYVj8EshwiNtHJmhayfQVcqUKon5qRaS9BiPPFzNbmX5niUZ4tPSiSNFfLutozFnTa1e5YW4VVbewLuJ7v",
  "key29": "5tD61dBwsBgeN11pVCQiHpMkYDHGHeSgespFqF2r3a91Sr2bYzT94zLQduuhzTcUqDBR4bTmg91X8Df2xoxBqPFT",
  "key30": "3miMgBZFRabVs3LujaTMEtGVmo1yYbYYEMNXLPgCtcSpFXZaz3o49HNoiAT3qJuvTmhXVkdyp3dHgPCLWUsozVAq",
  "key31": "59aiAUw9BrEL5c1Vws1B7MB6cBUmyNm4nZX3tJ9NX3kF3wxxh9o8AioJPswStRVwE4e2MjJByY2Zpd5zQfo3iUBH",
  "key32": "3sqzbAqDV7ujVsLGbmMdaukUdcBABJT2VFcBJkRWtnPK6dT3ijUP3WyjC2xBC7fFBs6NJJqf3xAcpYteT5tBzJEj",
  "key33": "hHbD1R6joezWD684Lw7ETGGq8VCVx7ymxzDWxu5HDkVCpt7YSKdXEea8ta5LUTw9KA1nMyYspwNEPhnh3o4EcTx",
  "key34": "4gsiiUu4d87Ph7rFX3Ki5wWC3YowrW9C1yjYpRUn73MRzJiUL1NgKC5AARgyBqgKzxLAdtryLPCvNe2GNCx2Kyd4",
  "key35": "aKXSDp1q5aSxemnwqWa3cGZc9bGhxBxTWdYjZFa5hdBsaLbvfHFKeP7VQ3qh3eDpJ6SLgK2t25avjK9mAubUyAV",
  "key36": "5MSXMbcWRmmdQnpT9o5NegadcfxpiFcPB4cJ1Qo4Lewtp5xyFk5BsUBgfXnsfvP3gxeqXRQ7R75J4z9BdE5CjAUS",
  "key37": "rijdQnZzBgsTLkmr46owc9keEMEYztMMRctD5nK1FF97n3UF2yZn8Uf8Yg2X5gUAvDE2bEuU6zmHCgqojPmFLdA",
  "key38": "641YunL2WW5BR34QJ8ou8skWnTMdH4YVSHghJqfEUmHtzQz1xJFWnktaDabZtEatBn3mhKqQqcaZA8vFnPRdN5Hz",
  "key39": "2kyLMW29FucKRknS48VauWVnaQWbWH4bovtRdVF6iLSWGn4qc8qUEBNm8TgmNum4DV3NhfeRmNWE7MqUtJ8g9RXe",
  "key40": "51bfKmhmtPjpgi3DSWSfZcfEmCFBGb1s3sZYMYJSsv8AoAjQo7CY7eTRanBJCJ1jud7WHzrjpXuvmcBUhpKynYHG",
  "key41": "3DYy4NsYhsZH8WXZXSJi8sMVFAk5TPRoEtQie2se1Ww8nDPVTaAN99wcB44ocWMWjP8oPsTYcRypcC6FL8kxYkHt",
  "key42": "W9pCjxVqrEKiqhajvBDKBnYb2UkApb4N4phSKyycRKQTKW1SXwgpyaaTVp3iJHMqjo8yYeMZPzHSBXmksGnVMxx",
  "key43": "TJA8ETjbr58AFic7f2i8gNbNA1pMHkcTKahkKSjUUgMjMiyTbg7yFfyzJTKGuR4ikfETyAtHJu4fvmBndqQ9QZE"
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
