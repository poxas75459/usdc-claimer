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
    "2fK5FoQQ7AhYjSMcwxdxuNiLpheRBN556WpNEPbqQH7aFDLPxt9JaM3rNwT2tDXJh8od1SAVhvPCx5FzvgLKvigE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dnCnDwXsu8mQXAiuEwNSVsqprZAnM6QM5pbeyMAzaBzFG18LLJeFNMiLV1srzfEGaR8ARq4Eyrj8VrXK8a3yMtk",
  "key1": "4eNC5rhqhcvmgBXJSeY6XRQ96XdMex9JWF9T9KVGRjiu5nwPHUvBQVk6GyTy7SiznWHRzxWbrA2JWabcz9yL9xej",
  "key2": "4JNuNNLMqdBUXt98LPZfnZwY9CGhv9gcQqazKMTBPuS8sjrqmsHrRumQqLQ8i4bBjLofbL1sxuhDN8axRBkhAxDe",
  "key3": "4xcj59XnwNFcqPpsXPirsnFPxeLLMCf7pLSowdDve3BjPShZAj9d33NSpTCVrDhx26t5FM5iR8fNmdP3GrazXVn5",
  "key4": "2Si5yZBZ2G4jSgcSKBc4rjTScL5jW4FG2PuVLPxNgSkLQwnesn5WwtR6ABvYEktbT9HeAAmfhXz8bgKPf74oGs8B",
  "key5": "NVn2yoZMViSL9HqY4zeB83bhqpvcuZh6BXtuzaA6Zc11cJiM4fZSYngLsSJ29B4RvMPvGJxfLbU7LKwsrgTR1ey",
  "key6": "46Wys2BTcsk8A4AYX65RLg4WK9mqu5yLN8iHr6w1uqi3LCEpLkrBx54ZsL4WNKCr1kzYfWEvti2pviXBCHGg6pCn",
  "key7": "34mw899MZXa4TtkY5r6BFLcZ7Sw3Ho2bCbFQQRwfUntkaKgr4eh8HaJpxbp6rUJmQz3ePgPgj7txDPbjd2DXZfw4",
  "key8": "3PbJWjWwNYzq3dkthom3qeJLLvdq3xtb4bS4CTjUP4r6AC5zD74XruBTBJmyEdkBaqixPvXankgTHtX7S1EEqJTP",
  "key9": "38pb5WWjrAs8VT6gSvyh8U6xiFR5Sa93sMLAgw2RVLh5DZhPdZMSVbYVgU4un3BpwfmA53Kywob44hPQobbEv2fB",
  "key10": "4ZPVt5GDkwJLLKifk77rRc2k9g6s7CD1Er6b7wa1Jq28NsqGtUVQbZxEwR9GV3opJwLHoLRwP75AAncJUH6YUS1u",
  "key11": "2nsT5y2q8fraX1VuJhvzp42dfCD4jMoDhxSeshBEf97wksT27ftZ7HyjwU3c1ztrD8s5aYq5MwRMCqkKk2tNDDzZ",
  "key12": "2ekAFdEF3GapVKqJjpnjGfESLRmPwRYvqT8X7BeJptSuti1mezcoS6SuucdsRZhKd4vnoLpk16gp2kqa3YvB67Jf",
  "key13": "3Twt9WjAsvkZdAmJuLEPGRFCn9Xds2xaMKEhGuav1BTSHuHE5QyQh7HQpkBtoYD4bkR24HBmpWTEvqPJvWfw3zyY",
  "key14": "4C6sSUxkzJ5UkQcxVgq8kxvBVHdW7PdnuFxfDeaGCTdiZ5KenZfDZ52iagwz6hmtE5tvbzZwvvVhtXs4uuLZrfqy",
  "key15": "4mLNQ1dnhJM1Q27X3L3xXT3VCw9XiG4KeGqK8huhxSHz72KMv9NULYmFSivH1swZBthWk4yZvJftRSyYRqPmdHGL",
  "key16": "w6ujYcnb43TQdf9gr9CUPqJD4fH3yZDpa7XprhLNHQQ7rVfer2trjEQUXvsV8ZjXN7pyW3uqVvRP9RHGykDVAPN",
  "key17": "KuZRK2gdcuDnFqWrEXFu2QACHmSTkhBpLiQkvN54ZcnGDpDAQwkxPLt8sW8LefracTRF4hNQk9bgEBSBkmZsWnb",
  "key18": "3Q54knfZNR1MvKiJU9HQXoCJ9G5DyEKGzgdKyahB5RDniKzy2nJF2DTrrC4ziSekNDy6To69V4REayB1NfqgdKrk",
  "key19": "4iMRcWPj71YA1Ag7EQwvY45uSoHMT9bZekPN9VfXsvtSrihsAtgYf3b4Us9CLuReYHDg37F5JsYZffB2g256ywqV",
  "key20": "3qwcGX8aDXH1Q47VqW5DrnLb77ZasKG45L8X2DKndeqkpzZdRDB45uBmHP6omFhuY25VsED7mtbFFNEm36nDAfub",
  "key21": "5iJkj8oNkPc4LpBko8UL6kFiueb9c1uScGrQXEyV1uZLWRqCNecaKCRqQxpKU1vWs4RE2Ys7EfVtiowsUtKssrB4",
  "key22": "2LYffHMcoNQeHPfjinaJuuxG5PAGWPWw3Q3LCy2EPHiHtS3tA3UAVKgor89RGFNPnFXC6idYrtyt8tYTprEmKZz8",
  "key23": "49aFeBdsqTpxaWK1cM7SoAwxige47maGa84QSytWFdG8upKaD6kCBWYQgga72MGPbR338LMbrV4gdejPPnHTab1p",
  "key24": "T5cSLdajMhj3m6rYtL4DN6gbGYZvnxRKVbx491D4sBToMHZcQqDq3UrDX3k8q85b3JvRX4HnCCPyRcSEhzsZeEz",
  "key25": "29z7d3b4cY7EBKzxstyiokt8p5j1YPxPmMeTJnTvBLGppXp9QCMCWLFVjVHVpNErFGa9usqE2wR3DwdPsrJz78yo",
  "key26": "5GJHMc1W2jDJuvVFGNAT5tHLnD32pG681HPebuppptjD8AHoPHiU74kAxgRXmBATdBcuUrVGFLEZSKEzmmmNhyiV",
  "key27": "3rkktmpF5kWjoqDGVdowV4x513NLy4HoyY74GmgaHwd8YbPLf3R9ZRX2Q81ghKwPPm5yYrB356GuUUGBX7FyFHrt",
  "key28": "5FvxMFG5sdSS29JLyTi8FMnXgBBdTYDXEHcrN3BA8tverkeceoRdy9J11UL9amdivBpRFUQud9cbaknhccxxxhYA",
  "key29": "63YQLLtnD7wzw7nF9mV319BqUWq54ZGPr5zeMJUgaZqhyWDWmowzXnDDBHoASrYkeVuz4aX1H8hfwHYmNV54P4hU",
  "key30": "5wmouoNH1NoQRMD8ac5Q9V69nhGVbU33uRMGiQJFHZZTqhGafaeaf8CxXR55RaxspTeAufTpuCEfCdBCeD4rVpSs",
  "key31": "WY1UxrvTYjxdiKxpPjtgvCrZLKbkyYp1N91VSS18UoDW5YaNXNDjh8H5PdHZ8vxVLPXDFQNT8DK8CGh1nSK8rko",
  "key32": "4gNM26orNvijU7y2KCpQfhX88HzwfZjKsZj5tFKxv8rBGjZVb4MKD1wCi9QLqMiBHQvyGJHCS8kgH7DdzH9DcsL3",
  "key33": "mBtCStZCxKxGsaBJwdbDpSpd8NVj3k8MX1edLTpsExVmDvjZu1hjnpYrh4qAD5nwvn2zn5CHc7j9WXxZzQ6kcFi",
  "key34": "3kQTETVuSr9d4jkcQ2hEn9BEqrbKwi2QNrYDSbQ228i7rqd3f4i7rDDSHpoN95qUvDxd7DKH8bHpDKoAKiyHEV3f",
  "key35": "2bzgnqFcKsyePF6B6d7mPwTxHGcFsHB1uYMMTTZvDB7zxnXZSMmvxuWjvX7ehk2dqmknh1ReMzUxbhWdQujEihFh",
  "key36": "5SCgP1UuxeRbzDFMhqoTAYSdnGqnvkWaSKuGVmKBmcWhmrAaCuc71De7byrfkeWa39xXMKzaYGNrHB4AZLmCFP9K",
  "key37": "kfmKVJvW8aChfPV6MVcx2JoDF6X4KarAdAqzsQgDnJtzj9bsyzRByJwRFennJ2DYhJk4TmgWguQe2eSHhMgCXwu",
  "key38": "4z4k6vYVe2EgEExJR5hAFgJPZzzCMMX18bPGhhNG5nMbL2JPyVSiTW3EtSb48V3bK7up4aEc2kXALT6bP8QqYzZy",
  "key39": "55GtvYhZadasaujyU5sp77sw1QzeMwNdMcnqQfetPXFtZe12gY8GRtptVhKncyTrLorP2bJ9BaHUVWT4SaEEpTkm"
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
