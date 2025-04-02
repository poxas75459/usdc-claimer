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
    "47DSBFWswdAq2KxgJwX5c7horpqodhkRP55g2ePE1vYGyn2QMKLLwocBsMJkPixFN5xXy7PpxCCR3YaqF9REhzJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42UrTaLRaEdRPMXguN65hksdLWdC5d3Yx93UMHLdE6GruTPRkS65QZikA6xMf5sXZMwPM19QMf4E9NYrkhWPnDyZ",
  "key1": "45jGpuHmkYy87RFsq1nPjsyLJvnJnPyvMbmsX2qjuTFpdp3Gsf6JSuVhtnvSe6NP5L5trso3rqSCtGLiHK3QhWQ5",
  "key2": "4hkU5MzPHyMeh1PKVMbahakNXtbTPoT6psc4X9SgoEPNQP1QbWDVptXSj7KPTbXyyor8nnac4i5KVzJ3P2766zAT",
  "key3": "3YiosDrc2JTTZfknabU2ei7nYaMv44oSKqq916V1TwWodG8g9AdJcS4z9hkFhXeGVdSZ5Ws3HGbR1N79SsKPwwSr",
  "key4": "4J823CCP9W8obuWUEWLnryccMnYkfM6EnNYH5jaCZBRAwpmGtbsQcyhgxKMG41i1jnjcEA4aWEhQRqfmyWq6A2DV",
  "key5": "5jkSSz2HJaQwPm1rSqgvQ4RMd5KtrgPFReA88vHmZRbdBhMvndKGKTHraBjsWmz5gajvrFS7jZkwoG5HacRV7Xpn",
  "key6": "2h4GkdCDYhayQB5bdyHxVbS6mLETnw93aN4jJbDd3AB2PkWJHY1GfqG51JnPUZGEpLmR3iPbP8HQLC8fPCMVD2vZ",
  "key7": "4KNmpnBzCenownroVLc5pWt4fuFr5XpyBcv3m7wjCoKBndbZx9ikgFvA3jadaWrdbkS2h6MPSyEU8HEMTrBiJ8cw",
  "key8": "2xAeiMFU3nGUwyNcsKq832hryAzD2A5rs5sCz5V9aupigCszYLGoZ3rNPy5QDVqmAnhofw1gNE3EdSHriQKdnaHG",
  "key9": "5HZTMp7qQosqKKwvFMZtDW6uy2D12MAimf11bWzxBhxbrvbWWU48EsvuanP7ZtSGBsHBNoWNUHvGXM2qkqczdSis",
  "key10": "5Rp8kC1bXfHYjQN4grS57Fzi1RiQbkcuRfJGviAypv94PY4CYVyCBLJJccHn63b4gyUfVFcbmo2Zb39FYKbsdPCY",
  "key11": "2rxPikHkkeoaoySZhHnNb9T7vvY3AyLDHfk98r5cTz9BmkrapyK3oZnPpBEvfKhQQYC6RhFvwyEgqwMTa1dp9JyB",
  "key12": "3qLqwtkstzhXgxUFn8b6y2LRQKNqnCwEAkgnK9QmzJjAVUs9A5H1G35FEDYi2jQKCp3do7mJRxh7CU2sDNietiAa",
  "key13": "2WwQbgyYy93k7CkoQv5EoSXC2B58Ln8LBj9vHRoikr7PYn96Q89VE1VgRyMNLGnmY3zKREssHp6v1Z3zqMRRhCTz",
  "key14": "2CiAguUJzv2HZGvg8ftXqdtxrAxyQuKMQjZuhUux9Z1HGF62JH4P9GayBCCaRk5NVSNDRhQgUVGg222ge1eAS779",
  "key15": "5vy6UHzsAHERSoBPFshB7mKSvbTvwg39z7Riq91jAn3jQogqaZPpTA48QdW9PThAriPJDgmdtHyxzMhjx2Zan5EY",
  "key16": "465XU3RcrBjvjU6cY3CoQa2ghpvbCxy7TU87KAn55MaxCTVzhrrqgqkkMKQ7VoSZLyxFs1h7XGpV6N7q8xiK1ZQA",
  "key17": "54vrw9UiugJepwWgk4psL9dFiL5LDibgAKikH8LMzWV3Ag4oN2MkCFmy4QttJdHA5ExCPPo3roXC3pj4mSG6Np45",
  "key18": "29KgXopcHEx4fvNu7QBy4F7kvkzk5zLVU27h2eX4xn9bz7jwpGZ5nGzA2SqZqEszFRyGfRdFcpfNf3CauMTwmFsM",
  "key19": "31LNDNz2ToXhrM3BWAYqoaAy1XdwNgrkbuyuTRnaM1D2fKBcPoiRbdJJLaipaC4VRkzpkqPQvfJ541uB4WTW7jKB",
  "key20": "qQFyGWqykNrS2wmERZXoS4NwgmWDZfpxB7EUPi4AR6xLtkhfEBKwuhJ46HNbbkcSf9cWsicTzLNJFvw3YyX9gHu",
  "key21": "34bFoce7Bz45a2ukxqMpyPNZyjNVoLZZoBHG2Wj5a17hYTZQ1eknJ9zaRFqAgZdVucwmL1z25WntQzJLJcvA2jnK",
  "key22": "5qgzGYeLmirB6mZoHQr67qGqXmNs91udWppwy19VJVuyUmukd2sAJaWTX3PWeHkBk3zw9mgPkoC6fSBMjssPQp5o",
  "key23": "46Y5f8FTAtHTpZoU9e3d9XpfmM5YAdiQfy6YW6wQgE15wKEXwR4LKs6mKzmHzDByjAU3Yf5s4XjJE1ZQ6UNMaEAW",
  "key24": "2GPMpFreMWQhsG9WybznkwkMVYN6KbBXCCiADEAaG64Z4HG4RQujzXpD8ZEnhKpZCthNertZZE8w7ESB5TyFSCqU",
  "key25": "22kTvSSqQpHHgkKZTtwgFh3zV9tXvmsHSqpfg9QeDjVrbAD4bBx5zG1uy8iBrg1MhJfnp5JZSge5PSdMZ758Zt2i",
  "key26": "4cu3H74kykM4keYVSaGMApwAChb23Jwc57297BoRr2zFuDr7dQmYnnn6exKvxJHnHigvsZpDsKtTpG1r6m7WNif1",
  "key27": "2VovWDGCcTnkBwp58gfiYxdPYs2o3DWf5SBpFdKDUF32aVFWDttMHsQQhHVw76PCRPikHPhBoDm753oZuY5y8jFA",
  "key28": "3S8zgQrY5EHppKChwgeDCzS1Dg2YQTg6FhzTpAPPMpGreBKMPZzBzi8M8Kyc2h7CZ49qqDY4e8RphU3pa9PwGxn4",
  "key29": "3YQ4JsQvBPSUtCJ7Kaku79Yiaasqiy8D1jaiU9fREmsBQEif8TPbGhPUoprzUon5FQHwxSPq6mSJvZSQeWEW37jm",
  "key30": "89EZw1NZb1ydZjxKSJe5ZtfrcU3wbtK3248DSSks39jncRiMY2k3C38nKyTH7kFcT1DFStNh8rZtDVyMxpShmA7",
  "key31": "4YFWn7fPnG3GszQhaAwcHGocfn2LzSv3dSPQYHQWAZBmpkmNUDa2k5q3zUiSQ7wkKa4NWR4F5jRFYdVoCNhoVC9n",
  "key32": "51CxVM4JULcEtC3yZst6baZ7iMhZKBYeZVqHPfk8i9Ax4ZZSz5tUXi7JisiqNi1PFocyei1gJyS1jedhnvTJhjz1",
  "key33": "2NSowfSasB4MMpwRBwokBnaX9dHoMT7SuTNMceoXu8g7TPxX3LFBAwTK74AA6G6PgELxmBHpn5emPf4zbRVsUnow",
  "key34": "3Bmt1zcDZ3bZejimxas7kpzd6SbzrjNWhdFbwNzpAx33To3g9Fmema7vwxdsLCfbKd3P5DvPhBuiMGaDocU3KA4x"
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
