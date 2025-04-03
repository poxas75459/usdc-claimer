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
    "iAi6dzWwGZ9chZuDumJqCQrTXM5GkivKm92SGsS17L9ULdfPkTqwz3ZjskUaNwBTwU2WxRopvMV9ua3t77YZnFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oxKhzL9fRCABVNCP35Gq8bEQyvNtkoyXNXRcAWZCadqa5AVRxquNw8xFux5E9cEHR7jVxYjRZd8ybqiiaNgSADP",
  "key1": "2zuKd9gFyKWHQUjmjyywBbiUANsyuL7pjDcJiyCdJXKzUzc2jynfKsYnx414vPSbYr5fMNiLKx6wec4q6Ka725za",
  "key2": "38EMAtDLvJGoZeinEEap2LBPajo9iXEbDuZS5AuiQUc5m3SV2E8gSLUgpt8dFqZE5WjfnbpoTbBwiDoLbnDD7T4x",
  "key3": "5QHKBnnM4bgtcAV7puTkckDKXN681ibBLrf9gapaSXkeKkAa37VfH8bZBJKReVjg4PwARqBh5TdKgEs8z3waWmkT",
  "key4": "apCireiyDpwgUqMRJzAgDdo2ScqijqK6AneXuNLkRprbfuxT3RoMfifvr5ac51HcATZYv7k3DuCy9ae4jZ6FVwk",
  "key5": "5wRKKqXkzaKNuWn9nYuxte4gNCqc1V1ayf8S4s9VePQP8UVEgaGW7Dz5xo5Wo7Ls7CBpG5BVekefT5CEu7CTdCdm",
  "key6": "3ZJrZRKBt3uMeMxxmffeEAQ8YdcTJu7Bsa53AvHMzoSGzUg1ey3ouFX3oraKS51fGns2qGus9KyjHW7oCdv6AsYN",
  "key7": "2S7DmSMa4S8gPg9t5NTNdezT6vYARkHJQTguZy82EkUKv27KygvXXg22mPFAwVgnxXV6XQE2hzBjuTV4d1ndvV2k",
  "key8": "5Urm4xVbYtNoeqQoN1GnJSUoQvNxpWaNNWWCDeFV3N4G4LY4SpzVJjSyTmuUeh2q1Cui7YM6hu64GYnnedpsiruo",
  "key9": "488WT1Yf5Hqn4M3sqj2oC5Afs4xJsyc9ccg3bqXXY1X1Cx5J8XaJgzrCVX6opqHgYhbFt9JWaA3zrFXY6XWXsKQH",
  "key10": "5eX5cpZSJEowB5geLFvik9hd3vbHeuLNLqs6DnqspdacywiKV7TwvSLLjBfWqdCZarD8W26pKLuaPNn44NmRoYdr",
  "key11": "4pTMT94Rw9c5w3hoa54ydQynJZjhzyMW6s4KBEwMJiTVbYPdRhs4gjb9dX5k8rLDoJ6GyAN6h6fFFoHQ1yAdCvpL",
  "key12": "3EaYYcCjwKDAzCupsFVNsLHWdH2XtwyG4TSjLPYpesDXFmLsrEDxKfv9jn7ayq3BuHUL8GYorMLpnKCa9MZgzakA",
  "key13": "5CMCHsms9PnegxkfjL1Hm9BW2rpR7KhosK53h4zPBxYwmfVMkJbEzBydge2RKVaESXqj1wpxz9ofaYibQvykDM3a",
  "key14": "4Zn8mXRdi6TGk9XdKefjyukwaZkHV9t5KLRvCjRrTCjFcxctKMSeNLFuDQDZd3xv7GEvYQ3fUPsF2hMvVGFURmFZ",
  "key15": "53TChM7eUwp7CD8e1yuTiG2CL33YsV2A8mk5EcWBp3wBt84g7JYePCa2jJiSPkZmP9nLJqvcRbdZHKNwNwdUA4UZ",
  "key16": "4dQC2dTBE7MK64xXNJdnrhh9ep1kvk2hyYF9ZwBeS1WQKGjTXR838x5SxQuAXnjifM4fB8GSN7Np2r5TKQbTGH4h",
  "key17": "4ixwwMRL6BcrVbu94DueGkKBUeB8qPWs3DhRaeKbne4fP1pEBb39A1kggBc62sSsnTGi57B8XYn3pEPm2iXZAggv",
  "key18": "28yYT9ykC4uutoPJA3P91DfBVSLBxt2VvRqV3tATBpspCmKs6iktNp83EqXMqViZ9yrXFp45rMYYpZ4o4E47iAHs",
  "key19": "4Fhc8nGWfE62HYj9gNgMicVtjHp8aksj1btaHR8XWdKhAJj9GJQviFgRE8pd97w1FFjJ6idqzrjMeF5nzny5JLRe",
  "key20": "4cag58VoqvJXpPVFuft7y5so9DxZ6xhJEnZZ8BdJqycc2mbLrmjhg3adkh37fAnpSwxYWBV7gYhk8uxaDNM85cao",
  "key21": "2K3uPL78vGmYRt1iSPznqGAPVYEhffgAVNvNBpBtYU4pd57N1NXmu3Xp4UVPUEJ428NchmGYWmA9BMXbxHW2aPZZ",
  "key22": "Ke2pyVhzKThHJLKpsBuuvamYsoQfENuz5G3nodnF7cZFJt6FavG9VCK4p1DCwS3XuJmiH2vVcGp7SzcpgQ7vJut",
  "key23": "5RGjSgemLBtHNRhw4fj1YWDEa8nuEQKPCTWp5kFFXt9BDgP2aE2M2U7VzACQaHSxx8RLTrAQxAfbQ4G4KZoewxLd",
  "key24": "5boQPqQzUyAyYdzqQmHehwPa2RP5bs2kbarnvpMboaec2khGzvh4FCYwubbWHaYV3wbfquis4ELVBy5wPKBQtEZz",
  "key25": "3ZKyCfU9Uu7ZU88VfqwHU5CYEKMxdecnZ7hu4BWmApHNqSWNd7YYCuhNoEvJPebxik7SWyQLTs8Yp8znvZf6qDha",
  "key26": "5XGpGCT7TEd836nwgcsvsxjaHbC1r2ctWpBY1npRs9TKPDQ1jrJKVLhmEpqevYaqzwvMCxQMKbFNoQnCDn3HKaKb",
  "key27": "PntVkCbCFetCXrHhfuxMtbPHPVr6kFgzpJT6WcwH9fR2dXt3zn9wgdGhL1Nkv4fXWDH8Mw7Zma97SUsdh3YCzcu",
  "key28": "2pteBm65sHhPhh7J6P8YQiTNKaaNFDWU2Frn2aG9Hjo8mSHxxXHhGksK9sm5wyYwkkfzYCm3iHsdvJLgawBmHu6n",
  "key29": "dXZorkjitNdr91wctYCwoaMyzVVsWjeaivRZFxbKzHejCFciJf1ih6Rfm9KomRAs3YP67KaKYir6EdkZgFR2f76",
  "key30": "4UDkvgNJmjkeamV7kbPbU6Au4gMGETjX5WTJaiZDMhx4Y7MmjccMnnbD3E67Apf97gB5TMjN4go6TR9zsYYuG2Db",
  "key31": "5tDirLyq7ZgzWGKqL2rDFGtsZrB2E59fiR2bZwVuLNTvmwoeTUHzNMa4Phgp5zwm1pQarwfWJ95NTXEeksv47Rdo",
  "key32": "RJbAApQEnUHn6DvPUGZEkRfSBr2PXPJTpcQy62TZ5zTFp8vACaZARE4UJXDXPzCAD3eJgcFSvTsymr3At4CFQu2",
  "key33": "2ha1ScgoeoY3tsxf2igcWV1KkjkTGdtJkXapmVaiEehYbs4SV3kJcxtFWDqZx4B9HNoLGhzEy2jdkNnubsLrUC9s",
  "key34": "4CU71eYMHpZA7bmxuqNjQu2HnaRkTiNFRPTCGgyNaAgwconEWd4YCpL3dokKzzcAL6TuUUQZMswpKcwJDh15wgzT",
  "key35": "4gWJR47VShbXgYZNKJA7Xi7aMWkC2KfgJRDyNvjmbdBmUqjXbiVSi6rt1NRaACrjYzGwGy5HwHfPBkdqbR6TDYzB",
  "key36": "21mqMAJ95F424q67wjdx9Go8gP3eXK7pxqkX6EcCqNuB1ek6sAqWP4JnuyfuuHicp4Y1jwi3jA3FZXFiGdiqgVis",
  "key37": "5iGEtXi5HyAfNtfrCx2hpTPz9CDN72Q8gQVLJUgzsiooi7gWNVThYoHzMXm5y8eXbGY8giDfPustxHJaeKAkPPfs",
  "key38": "Jh5bnQ66gfeKJ7y7KEHvFuj73Kb5nCGRS8DqZuD7gyRQM14LkCcWPZWDDABkQK2x899jdoH9ovVEWuwdeYVY7Qx",
  "key39": "4R2ouNaBQiPBFTRzpLDoQq8jmaASxyDnD1w3qJvhxEtYXRKRY4pLzVfVsDkRVLKPypbtkg1PcgqhLng8HPJGff1q",
  "key40": "3Fo1FnGdCkXkC6awYxwiQh63PaQ1rcSiKBgKEpvPd5oAqGvcumuNUGwgG8LQrs57zeuQMxkXBoSixAfMs9vQsQa5",
  "key41": "f6SVAJfp2AoKP1NMTspaut3NH5TW7qhSHt8B5HJPh6xihSqCojqx1eGJ7XRegHss8FokuMJG9LszDDXsdoibHA2",
  "key42": "3J1Z8vVnTXo1gDbds8DoFUxFMaJNEh8ucvWFm5cETn143XCYxWTRhhmA4mLU3f1XRsydTi2bHJ9cRwvvTEEkdj8T",
  "key43": "4yi1vzfEsgnPTEZs3VeHper5NWS7xM1eVitpMqFFzoTHmSujogPZ6gj9ivkE5L964SjfiRvbJjg6zFZXy9C6MBYQ",
  "key44": "4AYTxyikSPKoBCueEMzWQ2mZd4RQheuyc1nvb7g5XwLBPLYXoW56aNJQsAWWj5rse4yL8DpGyDUNyqwmTZtpNBbs",
  "key45": "4XX64CuAkRyLVcDbHvwpzoGaZK6DckKvAxgn97kGTBW84JzZ8bFXS9VZdj6sytiDUB3uHzg4QqwyXJUezEKJsL5V",
  "key46": "2bD3PQeyXxc5AT3ijXPfw5FKvtR9Z1nrjERt29v4xGcqtS7iSa5xocLHQhK73HFWmgG6wRpoTTsTuEXd5iKcrBnQ"
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
