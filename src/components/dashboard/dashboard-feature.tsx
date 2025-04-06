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
    "5mdKmHL8GmtdUnCVhEe2QDi5L34i1DSrYckdcZR8fvCJZ6LadLTCyWNSy4JbWb6GoeLDhx5kcCik4414NoLybuhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48JSrf9R4hsh96A9bgCsvjAbpQxwLPhkX73qx7vpHrJNWJsvWbMgSN6kEjXfjywyPSWv6FzbrRzUH8tvWHnQLQCA",
  "key1": "NicEbGjBq1ae4h764Arg4KaRki4tA641tcWuG1v4SARWs9KcpM2DdCdpoaJFLVqtgZotLHsufdvKzxyKVR5dnz8",
  "key2": "3ep8Xp2CLb4Nvyfczp8u2EP4Ys2Wp84TfbAmfpZJVrxp68TTH8DcHcsanABukQzdMmNcNhYXQkf1vuUrggryQygT",
  "key3": "4gmZ4hGTscxSD66ewQiAGEh4tfzrvsHhmwwkXrezSJdtduoL9NujakzBs9wddvtJnQmtQYNm6V2rus3P1bCKBFi1",
  "key4": "3rVF4WijzD8MSBmacDE7DDTFEPaHCVtgTQRLcckfeGk734ztPgs7f9Qd7F32phnc48jmNkhTJ4jQ2RHNEHgHXAWP",
  "key5": "4Xo6Tz3UWiq5hB79cutxrKsWo8WsQzYkvNPvC5Z3uvWVZ7uq4ZgPZ7b1VTNUoBp36FCYqUteTmHTsJN6qzrB7teJ",
  "key6": "2imZMLHycEZxk1JAdxVm3yj8oqr5kvF1ViumRnrYJV9uYPoY4QkzCTy1G9hQtSdNiR2PuDG5nhDK7MpM5XqrFh8u",
  "key7": "4tYmUxTamcknkD6tipshnqqtufibnZwXtgU1oisqood4P2rSGKcFmdJGH9emUywFbHTtcbRRtx8Vy2Qum2oAqAx8",
  "key8": "4WjVJMUsj2ZmA3QJwqLKpWBtbwjvefyfJaCboUQLmWfxdovAKuJEA5psX5ZMdR1hEXeHZ7Z9eN23kWso696F4gjk",
  "key9": "zyKkPWQzzYNquXPthkNweAvpiSdmHCyv15RPQhTQb64qYh3AiyzErszxxxwSQjwkzwPAuwL9QeyiVbN5BG9vndX",
  "key10": "31NdK5oABivZA6PMJca8Aqv2GaAbEkWMitNEE2EzrjmaP82jMDg553J2iFM5PEUJrhcxKKeg5anpyNN9w3LFuRc6",
  "key11": "4sux5DpVf6R3io9PScpS6FdXo4kVTduvPn1356VM3a2sUKtPtBaTmQN7tavmC3MqTPnb8hdG2eEoajbaieF3u1tp",
  "key12": "4y2NF9ahbPKS9xEA1AynPVuzorgUPmfuF5vBrdy4tTFHGjik7mjKtN1rXq4jcztTF6LHpew4ETHirq29R25DUvMc",
  "key13": "3qTThJXyftwKhs4pxrJ2scsAERBwRAW3AbBYfKz2X468f6tkR63A3x47KvYqGZC9Z8j8M3KmWior9PMtAb9NtGG2",
  "key14": "E9kNqVXMLjjGa8MBx8optp1GspNUZFy7SHgwpvgC9PursuhmXA5ZzEax6oiNYdmjBUic1wJUPYeeRfHByketeSz",
  "key15": "4k4RgV4WdWNGKXdw1rrgcPqDQpucqRheGrspTsT2Eq65rv6J34ooeixxjfriBsxPfH3wAcAmaUivBpbJuW7cZ3C1",
  "key16": "2U5yuyEo5qN9NzaqyHjXxGddSGxNAH9WcEAZxFPmLQ7Ln797MEPH7WWC8vns6GeyRucQ6mBsTnbdkAt3Bpy1DQDY",
  "key17": "3Mo5CNdGdvCEnypZQguYzwJx9NqDY9WoTRe1NqqRKtrW39jDH1bJFWu41dfi3EnsikaazvMMiFxJjnp51pj6rvZG",
  "key18": "3DUEC2XAsf4Z7yRZXGhJ8bkBZbDRzkEzCijfQDnAf4fRTHVyiLQnEunPLHHvfL1vt1WtGjGo2yy6QE7RTBVjfMCW",
  "key19": "2C4tUhkoYZhV2KACNZuJpPHDm5x7x8hyk8akUmLjquwtR15YL9XMebbeYSDcHLURty6tPD3roEjZR3dK5xYnz4Q5",
  "key20": "2p3vFZjwqrjE9CMwpVF5r2KA184XzcuxPG6JSpmQbNW8D7VQDN9UivEeetdc7Cc95SyVMnuKp2hECYZGmmvBYFC9",
  "key21": "xq4iTfJEEQ2EATpwmzaV37jsbogiBYvMyg41N9FZ1droSQ4q9VcQ4RGx4ZAU8uLEvgNGNGCeupR2RmXhBkefreD",
  "key22": "2WjtUeGwbMA6jz3iLPCcasAMYDmHYJ34CkFYE2K1jpU84T9N6zBcuNk7KuDTUMjE7ssbp6oM6Ktn33vwzNZKSvxN",
  "key23": "4JrLZpN2JZ3z3coyF4qMp9A5UWJYi4U5i8L2z1MM5moaS5bBVYxzvHLfNLN6LgJLvxCPXXGuf3cvLQnqKmDiLsSY",
  "key24": "4rfiFVHuGuqXQUJW2mv2toKfybyURSCFGg5o76nbdqY1GKZisbNczVfWXj2QxP3QmqvjdXtFnb8YaohpJ5Yrk54F",
  "key25": "wWPtFiJVfH38tHpLXsjD4f4YfX2LkWhZK5XAk1evDgDDRy8rjLoTkKeeaQ1qEHmf1BirbUYvRxFvYfQcu8vsHby",
  "key26": "5DpqgM272J46KaQbamuxm9UepYsshQGc9P188PdEKVHC8quYcK5RNBuFD5zEajGf8afVLB9QSGwKoVV4TQ1YRyGF",
  "key27": "sqQ26nmWgWySKFsQLFJQPcSKscPb5iHQ973vJzMCS3T4oQoyUrpX6RVMgscu13yiGMrXyQ9K2h1CZoSyem3nzzU",
  "key28": "64yhV6V15HWNzyKSeYVUn7f8uxJh3TbJxRuN8W7gGnevtY2X66qrSmBmXbdzQ3KhgTd8iJkiuM4fwMuknRHtpiwt",
  "key29": "4mRbWLgU7CsAP4nSfSrM1CXYZfTZEywtJPvZuZUfwvqXZprvZ52YAJqMN7i67LqmZS7F5fnFgrcX159wmihyup44",
  "key30": "5sxMDgsmMT6S6qHxyMWyguaVH8bn5527m5mkQta4hMXCZuG346BnhKiwxGCL8HRG4qtTv9yTH6tbTrbjun5KNasD",
  "key31": "3PdK4ssr9kCZd5d4udP5ZuBZUv3jNsyXa7U7gqDcMCuMi1UQQ4cz7FPiGZ3zzCyBUqtryd1Tm2nPHbjTC5oBteXb",
  "key32": "678pm8Je7sMprhiHqL9ugcXyx9MqVBdFHdKPrnyD5e7REyvJTd2ndDyq2NzxBZWAC7BMPryWhncHt3YTGQ5s1Nqk",
  "key33": "5SHMTwbpNqRqA8zt9iE49p2AyCnA1TtAuBMpyXULGKfE1PgJvL3T4aNrFbNs9tAe4aDtb1irPu4aXabpseEd7VQN",
  "key34": "5kDCHqTDxJhxFKqdUzJKSwkVpD4fC1CYt6HGyhHprFvh5kX8GFKwW2tjTkHXooqsZ38hsm676WmMPAGdXGa1NR79",
  "key35": "3hV4vJvGhHxdba2yKMAVtZbdJTKo7Ed5RGmxCjCtdpgbz7XzpDeXCU32aE3D7ty2JMf75UJExu1WKgC171WEm9Ju",
  "key36": "dtFDYbaDfAUVjmK7T6y3xJsCTMRRWaSeFfAaoLoVkC4upqxh51yMMJuWrzqXmqejW31uQE9eVMJX8zzsTp3HWHB",
  "key37": "5pY7jNbeEemsui2UXse9F9G7grVhLqfrECeySypE7eTfnnkpVgU77EpyWAKrc56b2sCyMFqS272cZ6tyZXRWd5hN"
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
