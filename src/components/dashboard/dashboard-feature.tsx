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
    "4AsQtVT96VxjMS3hiApA59UNsvz4N87JBUjd3VojXSgW3ijcQztJHWs9TrUBqfFXernnA2iLZoegyEt9xN915X66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XJJLxmegb5W7tXX1xgYLu9joaJ3uKhH47We5iHZUYuUbwf4PS56r1axKknB2UQjmr99emjnF7VCswydmL3BcqJL",
  "key1": "4YL3xnGHSUhXMQtrG3XEEZszpXgu59kKsLCgUYRSCdeCqqpsqkh1R6BLMHYnzrJg8tfUsmf7f3mxb47sFq26WUx7",
  "key2": "2dD8HytwuALHd8GHhfYfkZ4KWqedRg3r89nepap8yzmNmyvEhZsipLuVRPxpSgw7UwnrEQbgpYe9ozqUx6YbTo7t",
  "key3": "2av6B9Qz4sHjAjeSaFQGDuLPXsX9YVyeG5hPX9GdkGiFUXahd1q2So6fZZGnE99E9qCsdsa5GAH2ojhiY8Yxh8Hg",
  "key4": "MCaUGCT5hDxuefjM1iepZUHA1NDJXVTMKt27fAwMMMGLbQohDRaBYQ7afmwG79muVp2AHrkTNkRsTsaJ9Qcejej",
  "key5": "3eMAQXKvoC3nGmLVm9VE37Wy4CohmENBk7mtrb9tNLPaWTxJp7Fij51QCm8LvFS41x4Li42sLLKPcQk436SGBBbo",
  "key6": "42BNzNMZxJTbmgfw8xjN7jTXJ1ZZs1bTnHPdXejLBJSSrj4riCfVpED15aT6pdyRG4QRkXsxnzsyHWdscSMNhKSS",
  "key7": "3UzfihvBtZRQzjTzsVjBuhw89jfiPaLdm4QcnUKxgwGHfeSBq4fHhio1ou7wHnRjENg8vTGAFPQiJoAVFWmW9kQJ",
  "key8": "5TrrJqn6wYFpfs4fnJch6JH9PGTLAvVUMwHL9Cuba52KCBEhnNfbUrmUYHbiucgkcKuYT1Ag8A6g5UjRDP5RtRPp",
  "key9": "4XtLovz1Ln8PWCUsPFHF3AVEHVQwpujC4uGDdr6GPqUYpW5U5Reu4irzAP62gST255bfkEFX9FKEQfdUqKruHnY2",
  "key10": "2PaKKtDWNQ1ToiMpPD1ZFHiRWAVwNioBpZvjZKLkY8Z9PS8TQ2gTzwQ9eNe7xJR5NpoEcj9tg2HRW5SUAyUTu2rf",
  "key11": "57PnXK8KuNDMXiDZsePMSM5z7XaWcphcRPczJpuiVjrrUc3xFgfF3PGYxJYCe2iHanpoEmYoDDA8Sh59avip6CMx",
  "key12": "5ZV3Bd2uaKXbQvYdKTpnPiXcsYbVexbpkvXF1mrtkk8tjMuSMZ3UqPBBofccMpd2mbJCQLEhWd17UmHPDG6KGCQ2",
  "key13": "5UwejehUM3gGSUFMaLR7WsTMGPnhB6xdzF5D9UYHV1EWKq1ZGqiMuNGPSNRassJrE2VQ8cUcsESBpc6Es1KRTJH4",
  "key14": "4fcb46CSfWL5uFKjoZw5jE1xjY2ttMo54LERumLHyYxZ9B2iqM6ZqCkDGQM3UwWoRF38EtLQt9fHrFtvzTgf3GYB",
  "key15": "5g3PmovCmRJyTuVwY2H5Mc5kn6agxDiqbDMEVmUBGZTtpY1XEyhaG7ZqMQThocvrbvPBwxYPeZAb1jY2F1LSrU1A",
  "key16": "h8v3Gif1eMymDwKPKAyvnrUrWLdDwyEcmdpT8fp1xEbZfkjAXxrRPxW2dhUC8mysZk4RFJZJTnpYqEBpVWSguL5",
  "key17": "3mjuA8qcYp8fYfA42PfAFFjczikRsHLXp1uTNXi1wyrpGELf8W1yksnwNgtFsEFP7e2TTdrKvfcYokoYfFjTsttW",
  "key18": "51vR1QxdWs22oghSSTxEuzmMFnsjxM7J5bnwhuRtjgt5SPAvUzkYktE6SugYm5LZLXEKiHnbPz3HYKXi3vxQCJbA",
  "key19": "3ubYyQUDbmsAxGRWhiqPzQXgtbgpCkSnob7y9snBZFym6GxBb5n1UxoG5aqsyYanRSTMHSKxWzUd2vdNZCLDE9zB",
  "key20": "4MhkSyouHwDNiwDpdbszxSeap5zmoZ64jyyBLV6HZKKAoLLv48QD1Eo7RgrD3PfhwAPLcu6YoxJKyae4376vVjcS",
  "key21": "4TjdrspTK32FBd219F4ihZuqE4u9T1sLtQpeBdgucJw9Y8hWEkLsXwxep6mcJCx1q3P8djDroYENm7pR1GM2zxpm",
  "key22": "3LgAUMoKw5jjRDLATpYUQYH26sTdNc8GKPgU8f2yjWFhv2bywY7HL71T9E9SHXsUZGuw2oXm3WoX19Gi9webnZRA",
  "key23": "2HjUnWGm2SMYNCchSDn6YCLLPFqd74VeLz3yvMuDA1AtEGQGNnymJTjzXCn2zjqYYkXBQowpn64f8UGkCswffzFA",
  "key24": "54QTk2z7Ksd2JuUSyGTUtguAYYLbnMUR7huTKBUZ9kjBedhDqsJr16ZeAppVsxyu3T3y5K5BKK3cFSZQNaWRxfAh",
  "key25": "2zStVRVzBZGMDNj6J5zLHwt9o1rTr6BGHRuZqTKfBAoSrCevQQtFikeYd867qForRjGQeRkSYzphqo9igUbfKMVZ",
  "key26": "2B3APAVBir3Np1Utgj2ADw9mKqXzFkBTEvWMRcfhzhPTk1SjqpTgnwAd7KV3DHReKYcVetyvZSgM8itwAsMw5bCn",
  "key27": "46Z1G4trcBDQx1kDqvDz4rkatZgpXbBNbyaMZKrQyic4KGX7psBRc7xucLvvTLzf79oY5CRNWkYMw6A3RaZPEepA",
  "key28": "4QbKFJhSr1zCDoVMgQJsbCEBsXWu8tDgxBQdin7HdtrbAhac5MBDQXrb2kt7ExbP1Y3vHgasfa7Dcu5F5fvfFYez",
  "key29": "5f1cRPK8gJfiCH77K17rqj2D83iVpSBFM1xbqWtdte9kRZmspnisZkSUCrwK1J355UHeeB52UWC4EWqDzG81nw5C",
  "key30": "4CcWsZthEQQZ6CD2N8mPHdEq2288rHDWhdXwpKRbX37ihBfGcnvFgrR8A9ApChC1G8QzgHkuMkU4GS6L1zJxHujL",
  "key31": "9dUqKeSoyajb8zkDREz15HREHV5N2WyqixS1dkpwGMdCjDSMnpSk3AQMKCQAv3eS73rJwBrSoP3ucdHvqj4Knaz",
  "key32": "5LAU4r6btkr4VFwj26VCTJac7gefwUUwKRxbquksV2iV9F6WeFy1oYPui4nKEoANjubXMrqbn41m1oExdgufhQKR",
  "key33": "3Sz1JhMr5FBjjuzmNuKYg9ot1asVAi9AkuGAmWTQC9L5Mp2gb9vM5GpnhxrSR5kdZ8YBxopPx647WwjJfVgQkRXH",
  "key34": "3UPnV5VzwscpPa8ZkdQimdsrSkqrRpywyHbB244EzoecKmq1q9RkshmN6ZBZNc35PUfkprANPbEANYHWomERPrJm",
  "key35": "3faHSf6yH8s7ZrGPJpNARu9psVYvi31jRDDyB9f4KUkzRCarjjLCQzrc438reAnXscPD8gw5BYwWrv4Rddgqs96L",
  "key36": "3JE48CToachzE4Bm7wttxJtGGDbmkyZp5BqxtTBpyG9cLVWEPRKvQFtqHG5cqXV1oi3Pfq5cjAZcJSgs4DMLP6nn",
  "key37": "iruV1QEsd7WBwftV5kRuatkDX2hyBRr2YCLioFLrJZ4mWuJbF6EarkGoaeKG1Weo6ZYqyGSnN3dRZRWb5wProDa",
  "key38": "4Dohzw4YnJNBzr3VhnJBraKM14FzA4WnuNNoQzxr7LzNqfchBWnQk3RkD9uQjM3o7YxjMmg2NWwa9e4qqKmaCRqL",
  "key39": "RS9TgkDEejgzeFi6G68534UE4UVtarX6mENYpXiiAuPd9nhj73AHcpZmysTHa5LafFooBomgaa241mGeRxGYvFN",
  "key40": "EZuz5jGWBbnkMSwBj5WPB3ARozrrKqHCymM4gJyW9HS45RqWL5NQmsysvUcgpLDGHa7EzmvMAJG876vJ2JAeHDa",
  "key41": "37eAhtv9rzFKuPcNfrDEEypuA21t7HbXjxQtWWubtRr53KHjkSiJdNRifwbqSairzeQeFoGZXgmHtbR95bEVkuu",
  "key42": "2JXhMzs5PdL45q9EYRhJ82g91iyP8RA1KNrsD1iuHQAmvS92RmrUgutW6D1Zuhojd1yP5XnbZhnWFuvLWVRVn1ZG",
  "key43": "xp3shetekMmywnLydtd5ehkr5DrPQwMmrjAP2JEAK6xEma9aXA87zGrH2qzinwLFP4TMi5vuDo6pZHBhSkhiJvv",
  "key44": "629hq8xpD2zUWZ22MhUdUH1wPG65wQSRRXoVrwCnSXCWZssZCigpYs9jRCFt9BFHfW1ivCnMfU63Wgn4yixoP24f",
  "key45": "35JWDJ5WjPrtV5zAtsW3jrLmxcDeFC9BgoqPo4u9otVR1WdsTYSZTajN94C2fAt59Js9aWe5TYp9AARv1tjpFGKn"
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
