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
    "2tir6iJmbPwWjs3zDXHrwFKBLumzvJvcMEJ65sejb9nXW5QUtzSN76vG8a4WyDjpTpKwGgCuNuJfZm69MgeC9vdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5adpBRaa7g9vYgmGZ8ajm5bX76gTN4uBGudZRsFv4VbEmgVieHLNXuGfaJEPpGd7STg8WBuhX3TnqsLGXgisAg2k",
  "key1": "3wTL2wnU9bWosgjmdLQbPrJC6JYtATNeGXPiv9yPCLRaSBXDhWQoVZyDpa7RKqcZSeqiZX9rimSodsVkWXuCAJA1",
  "key2": "4jysSegHFm5EDsZRJN3nz8X6ADcwoXNhdvM7WGckfpMw4BfVuRunKysdxW83ueyEQbZDwQVT9Mrgo7soKGaj94RT",
  "key3": "rHjmsmuWBk1tvKxHaqcqBNY7xRt9xE9BknWC69Le6Fstn6g2UCv9SEs2iFoDAmfzF7sRhKxbxUh1GtxazN5AJ3F",
  "key4": "4AwbPSr5u5ytn31vcBdvDzirs7udF533PhpJP44vFVnvYnDbnCzvFXVizmqgHyQD8sGETfCf4HENm3y3Q2po1VnE",
  "key5": "59DYfbTHYYfWBnPXYkeV5BPpTiYFRg71TsmfLk6Lnf9NVhM6HyvCfnPzJaEG5yBAcCWciH8ZPe81oatn9D692omY",
  "key6": "3gyB9Y4CS5UyRgZdtBGB6qBGM9MTXHuwqW2MscKf6evqgRnYs9zYQkJepHuQi8rWGGC56TzTVtfqg4uPKL9r42w5",
  "key7": "5CPvDqtbjrZSZv6WLgsC14BaDjPHgvqFGKrLrxpx5hAoCJFagjhUzAymKQ2Ji4nVjCPm3BGubShYAuavQXpvhP1k",
  "key8": "2T4gZF9oQxT1fTtAjs4WdZH6hNzPiW6Y9ks2i2u1Hdrk9ft1X54F8kLa639SwSQysTRV2hkHwgSUS6JQUtCBh6bB",
  "key9": "23xJniduDTbvP8CwM2y7pZtgGvBvY7at2F9ehWXi7dtTc9USKputAKgxA3v59NqyeXTjbbZVc6mJnzYEpQpiR5KC",
  "key10": "FTa2EdrdL3B7xhp2ayDWWBDnRqzpjFa2ExXdFgEfRdTZ6jkQaxvtp45JEsnWwAFFSvD9rxpxhJVyooxgigrUJDy",
  "key11": "5Qh289tULEzP4Y3vu7VCLuaYHwvEbZLD1PGuPXNmkjRqRDTvNUn9kpuNKwyVrxHKgNhAde8hbyeLeCx1eE4Ey51V",
  "key12": "3oBxQRa2nUiua7nM1NKQmra35pPtFGSKEdXE2Tz5nhdhEec1YdUnRVeKnBkKJqWWk9rccDBiggCVdRFFixgXzhEQ",
  "key13": "5W5KdcEDZ9MfcE3YDDbqTHpDyeLPwmJor989fmQwebStZSDRc8rk6aUguu3pvALvEcWi1KwerL33w5cV6AU9NGdL",
  "key14": "2iY4KhC6WLdtamDEm8cSecWjgkFFGGUgSXxErMLJHxdQRtLJr8F4B3Tz4MLUU9sVJLEsEYP5AHXhrV1ngB2JTsVS",
  "key15": "5GqaexfKYVqFVAPPpZN9s2iGZ4QX1vZNTmSoDnauFFpWbyY1xafAo1pjgTUt7mvwweaC3j7z8JVjDraHX5MBMqYM",
  "key16": "5jp9yHpWvagpYgDYKAhNHfcU1bvsyucCkW296xrv55vEqXDiRFsW3ezoPscop3QD1GYvumnxqeTALMpMsLEW4ahA",
  "key17": "52tTywAYMYCvZDGtPt4Zb27LNADpY7ymKrMQLbQiwVLxRQZfA9jGtPTGWdJyRrhJHd9Ecmua2acCfNoMqSYaTFoU",
  "key18": "EN5aVhL4P7YjXjJX8TZhbPykbF4F29Tqqh67EKTB7gYuscrt9qPJuF4fHJc588gtCoiuaKEqhULcYA2j6hsLEEd",
  "key19": "2pxJAuuQchzqyH2y97uWStYLZSvRqbypvzP7Cs4Sc53Jg5dpu6S2javGG6drL1vGerPgvrX2B3mDjaaKEvcc4jUm",
  "key20": "2doMiUqTfB2AoioxesgWmNaUHqKFCMPhfP9g9GjTXD9LSMRR2ZkyLxysgjcoNDjibut9nDKGMuaj3nuMwMrVTsi1",
  "key21": "Se1rbnBtjGrzzFMQ8TtQnTwD1Xx1HPXQusbxBJupPDH5tJUBervKHKdjNhbFaYmro5hYsekcNbe842FeEjwhWWf",
  "key22": "5B2B2gjnqWwng2fjTQe3NLmhCW4pparPcwvVWRxgkVnn5nheuCASiBxTVT3DAisfSRYG99jasY8bqyB1w3gFGwh5",
  "key23": "3cbduFnJGdq5Roen8ZWkwXXmD8qesgNWAQGfz7iwufpswMebEWMJ93D7pxhrqeiiN3wAkHAn58DfrL62RZvhg8ka",
  "key24": "4uNFz1n4KeP2aMsTghhyMhfDnkCVQjqfrfRvMThCjMn9dPVW8HNb8xTPJFxTpcVXr68sMCL7C1VGz1iRMkGspqnP",
  "key25": "2c9691g5rJTqnuCtfRMsDqxbDmYDfc4FGfHTc87NgHcPR7Y4eKCjhpPzJEV45wbs7CFsP2773SasrymrhnWH3ahU",
  "key26": "5YX2Jci2mkXgDvuCQZfaK9dC2Nq86pG2BA3ZZ2AJpkxHWos9ovTq6nm1Hvmf9mdyYF3KgzjhTQtefphqmz39EDeL",
  "key27": "4gEEMgEjUPMwkJjbzk4eH7tLfdsU8Cr1A4FDyVNQ5KiFMQq2johyK9CwUw96zEKaWyNvw4XubKRgfn4mBe8rxh5Y",
  "key28": "Zoc8ijCy6gReqSPuufXFNC6Vx2Z2A4RTxx7LftmrpHSVZD1SX1VkmcAcyHfJDyTST2qEQECiNoV2NdKzwjSCoz9",
  "key29": "wBWzpNrtcKTE5Dyw5xfGpdXpuZR3Y9edvwhXZQAnMtCpPGHpwJu9ZrGWicLVZfCUVKkJfHEh52CTucuZdfdeUDE",
  "key30": "3R3WCEtjvQoovhQCokbGP8muRSiixXuZem4Za7zwm4TJJC5zqKyunBxfeuVgsUgU6L12Z7QkZ9CkEPm5CRFhXFDb",
  "key31": "3GfFa3Xbo7Ri7b1MU86WtPXJ3nmfuDQbhLs5ovRWC2HR5gTPKHzM5WET9Mpp4p4qNKCThksHFit7gBYEhPGXYFH1",
  "key32": "3ymFPTe824c5ZfLffTsK3WtZ5oxy8LGKS9uDPnLgEjkjeKNPebtt9sXRPALpZZkuuUQg6gUHckckhMH4fDUBM6ah",
  "key33": "aP8t1nCZZWzK7pq1J1RCn7xZjJ8XTKwcwr2JykwoQNpepgmAJyEhnAohyPBnGSXK4SZ8x5h2rp1ZW3jXbmvVvJf",
  "key34": "2YSKgjt4omnogQVgnBzf3Kt28QNoCoXgLY8hW8ZBaKecy32csRDv7CzTgK3npWVg1aK99vGsfa9SvxunkCNYgbzg",
  "key35": "bz5DQv7etL6jvyTkvuweUhZJfvVN7eyfc9rpU7Hy7bLJ45qyiJiUAWzaGved2UYbUCY4QgPYJtH6AVzWgMnUhqu",
  "key36": "3UQAzBbHVef29Wc47cENdSxh7WTqfmLCHnMLGaKfX8xtUgEoaatn8D51YHDzVJpsU5Ch426XMg8VjnjB9TouVoix",
  "key37": "3pDpukzxV88A812H55VXuQtzXz49Zj6qn5BM9Hi9cSMA3mLxTv5u5GRidL9HusBTm6v1aukya2kPZsrWHnQWBbjK",
  "key38": "2bYRPvbQnFkAbX7k6k2ZSQ4soQXqWUvD1Xtq2MU1L4JDuxdPSdeBpAMJ7kS8JH41yssHPG75Lua8Q7ChvwNJQQ3Z",
  "key39": "4CDsEgDwgtGzXSkd9KR6XLhXPW6dsTCSA8nsdt3ez5fDS24dM3CXAULvCE2d5QUVSK4MBTo8tBNniH2e8e5Qdgfh",
  "key40": "4ftSsWPCv3BoSzJazsh5CAMZ8cGVv2UUXy7pLQvSkzb612ujzVN5ycLTe82Jw1dzQNmAzSUraT3nq4sAicNYr6hy",
  "key41": "2dJuoTjM5Gvw7PCnTYMmZFM8p3yCB3VumMcg2VQe6W9ZsRWNuZoLLSvEH42S4EBZBTQjwuTW2PAfVtJf38v1wReL",
  "key42": "39BMZAe8B972vW8FFueaduw4NnYAK677PKRjpTfHRzmj9fL2g1J6YeYqSvqSBEMzdjza88R8oJn4GGbv4bBhQXVg",
  "key43": "5tWroUcDtAhe2qDEuksByv4AnWS14exw3Mx8Ad643NgnFaqxtNGa4yNPbNijVjCqk8aai25vb9gyYk4PVXedWhmn",
  "key44": "4f6GL7P5sFXaCiZBWmNpgYxrtFJz3ASYapL52txnPUWsLqK3RFUBz8BA2JCRaTvjGdh2dpxzie229q9cCPmWnz2R",
  "key45": "62X8zbsPQdBifrLW3bEQKuwYrXwm7ZDUVaR4CSGLcPRF6fyVMYZoBeqbaiv4XrYdGKNhBNCNrcuxjfNdqnxfjHPR"
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
