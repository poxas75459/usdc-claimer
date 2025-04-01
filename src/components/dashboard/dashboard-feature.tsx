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
    "552BCDmvPTd88xRdgqJC3CBenFFTN4JSGogty6yZiAFmW9waJAHdGBnQADQnpzJiCtBj1yEDY5qXjyUUt2fNpjia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6q1GujAryrAyAArUog21h47ng4dNDBZaRjdQN3tANJCkZ92WEU9Vog3aN4eT9poRaPZTcsKzTbzaxD9SmL5XiD",
  "key1": "643mG1brunRoS3Zx3MYK4RHQYKCfV4LfbxxQa6P4nCEgRGuETJZ2VC9jRtrXmL2GJmLvH2YZTkYvMZZQPekjSWVB",
  "key2": "5ba6gf6Y9nQP85viML2JsgZwVL6DJdWfD1pqynWieSTZ8yrHgxPabXEc3MgGdAEf8XRSHfwiiDgJebHf5QsDRDDe",
  "key3": "2zd1b2PgYq746CVdk6eX4ZsV2h6ujijtUXK2E8BjWkpYpsMF3sKaHd4BawcMN1VG6nHxQNTJFGfAU1j2tPu4buf8",
  "key4": "4PQvMuxoT51XPjcTPsCGnQqFZZ5DaDRSWJY2jKXcvGnQY8k734nccByE8ATwKMuZJy4DuQPBCNismz7QpmraZ8wX",
  "key5": "3ydKQonSSJfgMKknP8UPcevXVDKxgjVGR6rT5sYyX7p2CLptzeVpisuSS2E1QuonQW7JYhrZX2EWPC5RE8oePqNm",
  "key6": "K3XV45ZcrH2bUy5dQc781AnhvxDVkD6pAnHxMWvbfxLnEoqvA6iQcYaHa1Uz9CDXgQ1JdJKT7AqzKaGC7sCD34V",
  "key7": "3ZBZ8sAf2Lf1WqBv2X7T2rtERiUr88vVQJq9TDq58EH8P3NBE1LLqF2yUpmWxyW5mDCgzmiJJ1weQwYtFrzsyba5",
  "key8": "49bfKGvv2aZxS3fPu2DkEzjsrKYoAFF4Gpbxhn36hmmeKMNWE9SuzZL8CgEpzs8HmMXUGVU5KgwusXog6EUzM2Tz",
  "key9": "rhoFaTtcAkPnFcCeLgXqEYn92jsg16RLPisdFyTRM8LEm4nEjQMuaG9YSnNLWsUKAaEs8Frc5WJqsFgFADrekHg",
  "key10": "5ZSPZoSgvMFC8WPac6vH9vbJZPh3Q8ox4EbBTkpV1WekPvvq3SLrc8yEdo63e2H8pyxu1Db1f6nWwqVrceyfGEnH",
  "key11": "kEstZPGGxXZ31BcRwRfYnxbotosWjhs1FHwUs6nusiF5Ev7cfZpULXejWY65sSPCgqfwyWFtetATFarHAtRQdiX",
  "key12": "3wsiMXW2sDqJsV1E1txejjfYQEe3WMiCYtXDfPdoc86PbD98GaujMTsSy5kSz53uiywzzWkLNVcLtsJ5b1zdWdx1",
  "key13": "4mipQdnPS1o5VGKqjgu6WcsmBVi4sMPVKCD65dxxuzvPENZ2gjK4dPYr8x1T8UXwdc8ni1amackJg5ggA4Vwh25M",
  "key14": "4Z932q7F79g8DV5KVL1u5RTvZqhfV1aY74R196WrL8mfv7QCkyJapP3bBzEoKfQv22ASDUSMMQK9pFrSDVbvB2it",
  "key15": "5LE7ozsibkTWYi4JUxhysmL4KWKhWvGwcCzDnGyt5CCtmsDrqDmBgaEtS2aRou67nPtG7MS33aTcsxvfKj67UwU",
  "key16": "3i7zNjBeZVVhLedGom2tUYdK6sUFFLuytbX6ngeyse51KQKZceWwHpJ4VuirqcszqQMwwHheFSAwLjYz45gijXoU",
  "key17": "Myc3Ehnd3dG1ZSdng4Y2SSRcCUCyLJEkNZFzs4fzY1aLnEy2drvw5Cj2aNS9TKRuQGtypU6wetgm5Q9Eofy6n5K",
  "key18": "52uNkKehBzJUNbLxjsVmffCrnUDVLyKYe1DMLxP5CS7nnKzDsx4C2jkTkvxuu8VxQS7jLGSpL8PNB4dbSviJwU2f",
  "key19": "2uTfXktknDa9iDPgzLY3Ni8EnVM1D7hZswPSnfCfA5sXYAhmVbGnPz44Amnxw3bDkNkewsTeKP11pRc8F3RjYmTp",
  "key20": "3jK8M4a6NmJoNmwVndfNbJ4F15WNovwzrYuxpTwkcnjqY9wFsyEwkTSmrw5hYdpesT9E9bPTxf8anBmGKi4aXG2U",
  "key21": "pZZDjESWdq8FtcuHrTY87TFnudg9wzeoAbT5yLMp6Xd6KG7yAA63ARrRPMN8ma2cELmEWJJNsj1irk8Rzrk43LM",
  "key22": "5ikwsXWuhvEy3YLUij69dVvDHKbmZFjhKJCHD2YNVH5PZvGqJw21Dt7K9Y8jeRWMdaexXapkcagq9FyXgULReUmv",
  "key23": "SXH8iUQQzSCvdpYpMDvMaP4SSSnuyZQpBLRBeHpYqo4n1WD6YXfX8jqi54NqUou6uEVxBLZTCGA1CGarcgkf2bS",
  "key24": "9dRVZehnQsjqjBmEUY9Mq28KqWSgHUsBQhhcyr5NYPycndY5ADXHD9bnerVm45jxP2b8U1QLZatTQgAcYLJjTve",
  "key25": "2xSnNnfThZJ3m3uT4jRVdxSPZxLHSmA3hBr5MrAAg6Qw9Xp9XVp21FmRiGvJwKVSbyyDzwipvnGZBKV5jrj6tBoL",
  "key26": "2PCTaXqzds3XY8g45GwpjzDfpAc7KsKFGggFdmrEuVa92FP9TcMHczL4SE2k5TnvyYe1YshCpML9Nx6TwZV5rsjo",
  "key27": "2hK5Rrbez6ko64r4hx3WSALh1KBsoBTGkCW5Gfbswi9gqD3JTMNMQgCyixwC1EtQifnAaLZRvGALzEDPNVHG1yWK",
  "key28": "2B1DkzQG2VbEf6gkLRXG8Jwdgr3ofmxa2uFu8UCJJKrxgNJdzqrzjMDFSyBqDZGVr1XJ3zXAiKFUQ21WiAkH6jzA",
  "key29": "4hjsFBcwm81cf9Cx5ZpWzHaHvZmdUZcUFjqAiiq9p45N88E2PK1AeHVGqJWmTc7G5sYKNVgoBkmnNDnvh1weg7ZE",
  "key30": "4tqNvbFHsRyb8eNseATfC4M3B65ZGGvnmSU53egbPayDbWnDvi56RBTeAvLebhWewSm1MSpoNV8LiKUsChDyjnW",
  "key31": "4dK1rAiy9ddyH8ZNV8p1Pz415gRnjvTPriWx5JzEnQCRgNzpVgs4PMrZYcw8YNZtSW2W8wpT459RyZVeVJheqppV",
  "key32": "2zW2NRip1qsm8TjWAWtNcC5iCtBCo4HGeeGfzhYpeaVMQMP5B7fgnyo9AfCxi5fAnijqsKSoegb48JQZAYGNzwK5",
  "key33": "2Tb2hgE1R5yw6kQXGD2r2ptcV71yGbmiLWLCcLkJtzgWUns8xB1vF1SbzfgdL1PAV8fEHQBYVt7evndcfADE1RRj",
  "key34": "XtBN3aE9hRgpN4CCC6FJc4i7AwrF5Jtd6y6jd1yp4ZrgF2nXbiSNwbsUDL5LFnatTHoxQnm8oCYyTEYrDGoUDxr",
  "key35": "4rohVYyX7zh1vjFRXwsMbSXAnR1eiAL24cKm2n2kEcZArkGff1YU7N2syjSbY6idU7m9YRSni4DoJTj1EqoiPB5t",
  "key36": "5TjcjpFDguZFMVTLcWNngvDJr8vGKrCiYLMAgYJywS3s8hHVFnRqHgbyoNUc9gCfwhkirLvxwApinVxeS9ADeaRa",
  "key37": "2Dy62t5qaGR6z8W4FdPiZWFRedCgQRNMMBgaAJkrksaMbKNUDzKBrvzgFJxWbnTwxZfvyWW6K2CizDi3zhteGBzs",
  "key38": "3thahZVCKs3iVFfGXJqtmsuDiZ8Vqykrg2zn3cmJgtgoTKvVPcjGVb96cfeENJKn6kpWBQiDpKSybr3V5eR83tWK",
  "key39": "2rCJwdo65oZqPxuiWGMFCmxG1qs6GD4edjZN2cuWfuYLUTGBeGaU6cMe7CR1yGz521KG7Nts27TvNAE9QxrJygsf"
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
