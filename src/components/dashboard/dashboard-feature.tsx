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
    "2Ve5SDpEgL6xwkEtocC29TseCPVvTJoyxNudyojZVy4FwKgfFpiW3kNJRBYn2NerwdnFdPcevJAUYnsc3V48eMjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2oGuifzUGruhvxM2CQNyCovPVFp6BnHh9DZbzdZHvwEyaM9nDZPjKHvLtiyVmib8C8XmPxFnj31PYZk522aZF3",
  "key1": "4swMWYSvGYJ8HDCDPxms4RBNQaBmzjDo4FY9YzxEALf7cWUUS2XBb6DGLyDShB3nFDATA2d4XtL1womNQykq7jj8",
  "key2": "3eUFWo89F9XFDeBiAjkuT2b41cLnMcJgh5MbKnKiHPH9DaoDqeiuwyYruMwnog7PCzwHRu2H3uRc3G14Sev24D8a",
  "key3": "52jZ98cAMU2A94g476iABV24QzB7hmH1hXcSfh8As3hwmZcZCcikaGpXEkPbdnFQaxwp2DeBcF9sUzqJVjuoRSSk",
  "key4": "3RU7Vvr45EzhNUc3kuXQZGYjuzyBnCB3SR7a1BnhaNU7dyAHd8aEhCwJpx1a2h2CgJSGxvUoP8txwj5c9rtCeuLp",
  "key5": "3F6hvAS5bmEEaiLSw8ZNoF7nDMY3WWpxe9AMHTPWcUf3SePPE8Qj1ARcHceSLoSn4nQkLonkWc7rfxmuwAfKcjWP",
  "key6": "5V9RDpPWrfA7qtbkDbQW5VwWec89eNc9SY8YG7aKUHcriZvpmNY6nRJaKHQaetLV5Fydghyc28ijMt9oeJioynte",
  "key7": "4MTLhT2H93QLJdi9voDmHpyMQsKsPwc8gKQtPwL7j3XBUummZxuuR9Vw8Nn11Jt4k5ZVXgSfeTnczjFVkUAA9y7C",
  "key8": "4LE7fjSxX4LtSoWsXAe4sFua2NPCEY4uqkPwDWVk7ZviZ7zhnTTAG8MbH2BZcaXMYjnn9KrQJhnmUcLX42cWgKRr",
  "key9": "58ZmBe1211AVi84bWugYxwUCATLFSCgEgHPBg8c5VcAVkj3JFKkmT1kB8pSh2MTNdv1RQkpg1spKjbtrJUztKwFU",
  "key10": "4okta1NwJS1RYSXe5FgU3dYnfMy5Nb2iYMthknLthxshSK6TetHsoJr1fdrTxtRLDzp5eGRfZch7fr5mBEouz2LX",
  "key11": "3AkJ3briWsSSSvwi6KbbdGrVKEcMHGYnkr6qeQWh1VFtdm2pNqQaUBa7MZmWZWw5uBKq3r7cYSKDdVKrUDRcv84V",
  "key12": "4ZrTqGzhTZwFLCxfqg1PZfPckjTAoGWKvrRFeVx3HwCwrT9DAGiNgkxAfGtUEqD4LQtyZomthQQ9DJUmu1qTeTJf",
  "key13": "3kYzbGFdFHH8hj5pGSLxmAfxNQiJFw5h2YPSwoWU9HpZxJKdsSDH2dAgEsoy5TBDKBUWeNStqJYSpNfhuAXyW2tA",
  "key14": "ag7GAquStEs7tueyt1q8C1LXNodBdoTXVY8sNFx1RqV5zGHrQDTWf1AvqjJSZHJkfj9wQ3Mw6zRT7TNHkuX844h",
  "key15": "3d1bS62EsU5MHbK3LVWAVM6rk4bypetiqHCG1WTsLay8QVLVGPtCAuu2DP1YdcqTdd8fNpF4CjnNxaELiLhuicno",
  "key16": "5rJFab9DkVYwV9UyAh5oveDC3z6qKoDbndSBAmhce1tXbRWTSqu7kN2M7HB65FZxb8SK6hKzwTdJ4W4gFY6Egwn4",
  "key17": "4Vgzu3hopeBEe3dEYpaiGeLFYitfrgJaDe3S6GZ8djaiLNsyN4i4H3VmVrgmFWLPzURBqskCSZSQbB1FttkmmoQ9",
  "key18": "4Q6JbiMBHxSzcddxdBK6EgmcwR1TcHHuEa7M3yMnvp7ZFWgLcJfdR5vhwMham4ngVMGUpTejahHy9PjyKE6EuRFa",
  "key19": "o3S4557w8KekwB9EMa3KXwB9H1kURmkdC3LH3rm7qnDsGf6pJzKUE2A9DQaRzK39BcHL9Nx2GdKsFCGh6c2ag3m",
  "key20": "mnc3DspLo1tfdG2k5CnMHKKLw3AkmsLEeNss1dSVjtsGSEG4RPhs22o3wCzH7ARYKvv6YciFRra4GrXjZmUQwEv",
  "key21": "5puWMBfDrj9pX6UHHaZM5UneTNCQXEiX8DLTpC4NAp7zWeohSR6SRPrwXpPZqi2qqnRppdpmSN1LULe8tphPYBCo",
  "key22": "3VBxiSjYKPLypNTpKycn3ctd2HLKGRrhTum7fEv6vPAh2SM12DxKuqSFQAJfbvVCMQAer7Vz1y7UjsT1hNNGKXGn",
  "key23": "5fRHEsijUa7h5ZWKGkC7LCYEpCdwi4uxAaQ3VJFnMZtsGpZRzeARYPwfuHzTpMtiTMJm8GWp1qcT2yoKp7TDDCqc",
  "key24": "28hYgDAG4ZH27LGNzFRDUApD2YJAgZFzXDdMiYhWUveWJC8Uw9YTE6FAAexdJ1jKiVEq98QvtnPRczomM6mWLBjW",
  "key25": "37q8m1wsevt88kRpwst9NUcCeyiDzNMJYgjUJntTRYDQLHdE6C4dVQ4kBW8Jt2GR5EG9GRLnM3Jo6HNDGt9UxGtc",
  "key26": "PafGcXsMZA9tDoc4TobPAJ8JangCiDX5DCxEM5DgKbAjWQrsih3HpFd3Umrvv5hy3iQxojzUYxy59Ed8LKAiMRi",
  "key27": "4oX8az5CDSycgv5Wzv78VrC3bKprfMoGqH9sc5DWLvDCSjRiZXDDtT36siKb591ryzg9QG4mLeVSwt9EozVBWa81",
  "key28": "3BGLDdEm1r1xLK6sftHByn5GL4wk4EC5HX83re9g33bXNhpRAPtYXHacfNDgH8jrZHc86DD9n8zCQoRa8QWsgSor",
  "key29": "NRcaAVApHBUdenX5WsF4jAdZtw4JvSYA8QpG6BaXzpzHu8UWDHcXXVDEsvTCmgz62FdQpQNhdST6KXR2MMqbWNH",
  "key30": "MCccLMNjKohQH63NdM1AmjUTXPamSm2zgFNSFFYYCnNaHU59bP34bTi4VAsmZZNbZLLFftAJmR4D48ANeNWMH3z",
  "key31": "aGqNNfPQpnhgQcRsDPQBNdMdHkneayCwUXDLziWBvcbeGgiUw5H8mxyQhyavCKYc2KfBQLma72bvMoaNam5peqT",
  "key32": "3wWjgtFKBWVZxnSxBHFtizTdhp2NiPN1ef3adoVgC1gzfjixWcWLnhpqQAbBDVAGZLrrfiRHwTZRD3bQsmT2gwHt",
  "key33": "3fpwhvbHjp6Qsjg8ogSSMUGzzoKPZQ28NNvmghc1Nso1du5VUDAuEe1yxe5rRYsE1wDfW1xc43m9CsYkLieVxoRy",
  "key34": "4ChjrmTK4YC8hgPvhWYwD2LjSqxAbLivJBKBDjGLwQhzHb9uSrTPXFkQAfzBWQgaNcCMaiHrPte3LBfuKQDWgQ42",
  "key35": "GQixfQbZv78WBevKB8jR6b2LdrJ2r4hNvtiY98Tp2UsXJU91AQFArWVmeXbwJk6G4LkovFY8MnimfjTsGhAKehS",
  "key36": "2ma3dmfvuVkhk51sVLNz9rHv2YY1v8MqC4adbDEVDLDHBv73WrGxSuoSxbEesxdE3ooC2NVxKVndQdfS8B3Mn4aV",
  "key37": "sdmcbjh74SVHgaxz2vAmzZpAV2rvHtucvJFdsuEELNoEaHisRcfsBqRZnfUsdnShiDAAFM53eapzw3Y6ghAxbzW",
  "key38": "WXGgyJoe8dLXSfruND6BxrAXENmSNdM15AF1j58LC9bYSBsh8NgNMWUq62JdCNmXRffmhRT5YJVstPp1gVq4VKw",
  "key39": "fqqcqfoBePSg91md2aPVqNZkbJWyb6F7o2wTgcpyhVxiCZxKMkH1TXyAmqaDmieXYz6SzjimvAnP7BxPLj9FBH1",
  "key40": "LofqEMQxJppzioRLnkwwWsDBpmGBBfCEMcEsbqmYoLRZSyWzfWQSWjZLq3wvxbLpXopoXJVWGSabSWm7QGcpcY7",
  "key41": "2jiXrAzPFa2JodXwarjt2kCCvRpSnBAZ4nHx58E6Zw1HcgGhhWu5rpVahVfa2p9W9m82gSa81hEFaNtKVYQv6h73",
  "key42": "5BPSiHr4GUUN5cHZqywxnLe49LgYBuc9xFSfYXZjGpQG8Y1kWoBsJTvmWmY9ibHHjcieFNkGQvJccEJwuNgLAThe",
  "key43": "3Miw86FJa3eET8qYvizTPsLdF23p6fPfmPW57cJG6zzN8cNFkDft6awbVZhEUjpHqfmV35NZJi23eqwRPUpRCVE1",
  "key44": "ejdpiF3sDZkppfyZicBSpf91HirpiZCscpkxMf25HDw7FhkyCniYL3yMjYbhSmBstvmCBZ2KQAiEWLVtjqX2zHr"
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
