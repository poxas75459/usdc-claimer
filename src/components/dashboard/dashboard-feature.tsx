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
    "64EdXhY8Q8JymsgjqdJw4VwnQvHXnMDQrP5o7Cup28ev8JD24eVCzJJyJ3tRWcoCQeYP5YARg38KyTzceZxXBtHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VteF7k5JL97yiJRk7vyXCLhTeY1XVmV3N3mieEsN349hSqp9t8X2bEpbdYUXXB1tbqeHqvucbVoNZcrvKBq66WU",
  "key1": "2zFbq5xrnhiuoiuAkkCDYtePEpmUbomYmwME7Lu2Vc6BwwKxSA9Kz4YChyRpgiedaJaYbQULZP2gcn7ZWNsRx3xm",
  "key2": "2XS9KxvvCDHYYCWbuwPMfSYjHUiVhVxjxa77PJhxcgdQ4mnvTdHnxYnhhrqC2pnYQ9T78FczLWfPMK4m1zbwm8nj",
  "key3": "LfgdNCUjxeCWb36qNk6wAwMyb9sP3fTpHVJPzB8Lw9ppYqCca82rGoEararmZ2vGkbNZtrFhXEjtGszcDvSwKh1",
  "key4": "cGqCoGaJseSJhCcpGdHKnXQ9HdeRVuci5J75m9ab35tKu2KKsCWxavKMtD3JF7vPnWo6RudqSw1HD2ChHXEDieA",
  "key5": "4GA7MoahC9MyhWLLwGRvWdAThxvxC9Bmh8pAiVtJU9sYBsDozUjEXnX5GgyoXcEgF4FRoeJBWVJ8xjNjD6w3F95Y",
  "key6": "GmfE7G49YE7m5ZYn8qdBaRtD8cbXcQjwppYZq4yXEbzDrtW9fdJbykDwehc14J2TuHNW3fpHYY66EAWffngm9qb",
  "key7": "3tGa6xu5bkqph2Th61iUK5XULZPvLYLinxN9RKEWF7SeyeivFUswWCfxGA4KSSL1crh4MhbtUkXQNf3Lqvi4oX9Q",
  "key8": "3nmWy5b2UHg3RUdgxuC3i6XCb6pSbjzjMTxrdhNj2zUxJ8KvPH6Cq4ZiUNitVG7gmAkLKoBAMvP5dNLomgbg2xUG",
  "key9": "3NgcBKkcnd7P55P9p8P3K5YTeL3bn6N1zjfdAXkKFYoCo8T4tZJybte6TTDxqDRYQLUJbPqh7UoAumUwh7EaPwKc",
  "key10": "47XprmHpttCNXi4vYBL5QCqAQWqYyJmdqVS8GvbUvV6mB54N62sPmfHiXSiCQczGHFmj5c7nXKQdpDrrMeF94Ngt",
  "key11": "2hcnZwkMbDwoYDW4TK7pDKA4F1qc3e7acY3DqfdoKBtZHTi6dzBapcyJVxY8EufcpwpRnEhJgLsa8bYMzUkLBmZK",
  "key12": "2Gf6VsFedmavrX4cfmxyDHhqigHxPG24xVM7htgfJ2zWSEFq3x8vRZrskJJjYqtnot1fRVZxYqLWvo3Go1k6ZqjQ",
  "key13": "2dJU2Ci3b61FbQhTiX7kVu7t3kY7gzqheDm7qf7HLQ41pdXX2RTrmmdBScsykNPGuCK3uaWbnG8eaeXKmphQXTTs",
  "key14": "3C8PgCDabXE7w6w81AGpH3ezXuXyeoFDCnAeByTZtVURNLAouPFtxiyJR2w72BXEx1aetZv1hX4DwAB2TetpEeNe",
  "key15": "3kqePPSSvprwbc3PoYAxKZexK2r3mBHt15YoRLvPUDf1UTdK3gybXwjAgSvagYnkiXzUfkw9FRczJqDaPk9fCbNF",
  "key16": "4kWqxnGJSwnrCDJwgcqYptU2iUXq6TXBBaBHx1WkuEBGDgiJP1rH2jvXzxSP4EmLiy9uDPPyHFT18qP6Zb1fMRAV",
  "key17": "2JDTmrDw74ePX91JsVTpPhL7e1c6qZwzuBKv9Rk6wBEdxp79zD9bjeanNLETfdzbW5G2w4G23wd77zgVyeax6iYm",
  "key18": "57fNjQevnC29GoobAMsatAo8BPFgeSrciQgeWv4vYt1NVDEespgXhQvVgNtyMyuBpeAkcswduA2R6vgJehtNGH7A",
  "key19": "3wnSC1mtx9dXMH4Eaj3dTbpSqFNFqhbFq3uBCor6tesQAVztDAY667F55ceG8VkZJRwAQYWJiuTkPwQvHvVDAzWT",
  "key20": "5AgwSstvwWV5NMNsuB4ZrmuabVMVseKZxCGtb2vRbVYomm5owxfni33Z3RJcpF4xh6qpiVVxu4PGmova7fXZFe6w",
  "key21": "51exc3446Y9K4W47K19qarLsFwems3kmGAfvS3rNwjMCVdh9pTPkiy22Yo71sDWa9Mh6A9HRbWeiK5DZD33PqXtH",
  "key22": "5hgfB2yZQmMhGMCnY7a85mGKsozZRfPVVFxDWupgFuPzLL3GKXYpvnBD4QzsoMyt1bGbLnmLzAPLPjHRAhuRHfSi",
  "key23": "2Z79hxFFyF9PvebwMHZHjCCh8aWgZDcQdbzUqPdxiA9viafKpNpmRCQhX4jnRm3SkD5ozF7KUu6SPHiYsohbHE1H",
  "key24": "2iLYKoPwp82sTsyfviW6nTNoKLz3XofG2wJRaAupeM3HdqhqQz1i4a8UMQSiHS8cgLkLoLL3SsXWEG2uf9EhXy7x",
  "key25": "23ANEFdXexakzPJjW7N7LRQnMvwAV8qyCbefTnjoqRtTp5GAkHSEbZf1QXnJkH6LGa7KLH2rvcF7QrLn3zikLstK",
  "key26": "5DZLKszQg8sHHyMGnp8G5nYHzsHTh45MaVuHqPa6JJYK8gUxPYiAVS432hBZLUeTGKyAcghuhZu26RD547y1DWcp",
  "key27": "2XqMxwyvi4pLrzPmKMehQt7RR5a35hanu7Ac7araA5TFYwgT2ZJHp5YNM5vMJMWPTQ2w23ZMJGWh2eJocuoW3GEQ",
  "key28": "4WGEnnDGGhZiPY1Vx4Uf4KAHtnz3oARr7HZyTp44zaNESvBwHYqGRL2pJwcwGrZV3FxxZdtdySuFrgAsawGttDdH",
  "key29": "3ZtepmfH889C2TaALgqW9U6mwuaNMr8shHKx84MA99LvoxRYiM2dPiB3JR9Uoi2ehHAMyytMm9hao4dPzBGS3F8q",
  "key30": "28odbZn2WWQj7XgeyJfGM2yCSBm5MA95Md4eZiNXss416YCM52VxXgKQgmXsVtAXu5JzubmycRsG6iQCGvdmUyMN",
  "key31": "4t6zEqLhyEoSHWmZHdU4dCo9JTH1ASW6LuR2GoLHNL8jjBykhX2ErLY4Aqhc41sTC5CZA8XULdtkv2fCrx7KaysF",
  "key32": "532Bz6q23uYdc5v1w7kSFEvFWEg4z1HUwu56vVViLMsY7M7rmX367KL9ebdXtXjU768j7EofkhLtSncXEaZtTw9g",
  "key33": "3toZ6KVdqGcHrwzGSxaxgTVfuK1QoNem5jaAC5qtfe2QDodkP6oDBq4HFTSmLsNAdHgnhenPSNoV1xMraCcJSpLZ",
  "key34": "5NUJJXTAFhFTpcbZCbbtcbK4avFzWE3rLQGF5KwUGxXxGYMTKGHaqbffnCvU9gBakU5jG8ZfvJt8jedp38E1u65W",
  "key35": "vmrDU7PtYA1HGPvQxcBnZmUMkZZHY9vXzfGkT6h8rB9UhPNejfCKz82tyi62VSftm94G3CTi2uG5BN694PefyGz",
  "key36": "54nhiSCF8ttH2KxWmomStLvLHsERe5m2HgZ8YyCf7FozkQwmcnBUaYoR6MrRnDV6rbWJZtwRup752waLYKB1ksJz",
  "key37": "5qcn6uxZxKJBgDB9Cw3aiZQG9iZkF2PFdGDLNJKgvTM4dAD3qKTX5yhnB2bQg7VKokRyuSetzYmcQ2shx8CSa9L9",
  "key38": "4boJuUKyLKAzif5N2VP4fyqkUqEK9M3ghxPhmSYdcPgDAbDFzqxDutjGinniT1AciLkxVwjVJcLtEa9gxKZ6fqpr",
  "key39": "4ZFtgTiPabtTKSNZhXZKcdS2Yhr9XrRMioSDEqy9B5SDEiG6MeQJZ9uoudmvWw8fb7crcj3dqAo6NQcuhvP9BPmD",
  "key40": "3KjNsYD7z6qb1XWsauQ17GxQhLe67ZPc8h2NJ4zM4D8TjQv97xsTbgnLHHkmGmP5EfPr83wZuWquJ43M4C2LpM2q"
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
