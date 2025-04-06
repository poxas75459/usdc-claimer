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
    "5oR2vbtvEeUvKzVWetYbWP7GUyHMU3tigH5udQSEBGEuWnsbv4CV2FRL74AqJXBSkNZpGwHYEJqs9wYnQ47yr22Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nDMCvfevQhwr91uXTCQyAU6jqQJZTVp73oZM6qsAWfoumd9YAS45YMHh6cYcvBGuNMdDtSeMzmpN9GC1pzzYDqQ",
  "key1": "2z83d8gNJUezQKzpuWRM2jEm8KFh8i8DwLer6bQ4H3HpqaGU7Xxsdxmak9mjj4vURLqcLvmZ8QKwAWSGJ3PfNA3m",
  "key2": "2mbW5C7w262cKvyhNVp9zqtqBvbE9ZDMGA8ZENW8mjRsZQ78bUeVj4k8EfxY2hBgAGnKqDbFKhnPtMMa9K68ZqG9",
  "key3": "4rYrTNabRy2U1Uy57mcR5bw11WmgFbTeqx86FDNDFsmJeWC7EEDA4TRHfVz3LgJkNMg7gdxFwwFhLMRD2cr5GHsJ",
  "key4": "26CQn3NGqrzm699y2YyZfGXdBFcNXohzGBdirkq6ru8TPPfPhe2GA4svapX9KuNT78mLSJEn3rDAFhgg1UA1DbCN",
  "key5": "Rt3LA7UY9mBjxQJhQ5ZbXjmrLsDE4cw2ZDrLnf15Z3HM8ixgBDKY6bRPyXkXe2EYVNHSeGTdniDh3dCV8exgvjY",
  "key6": "wWePunAyfhyVAmwA8rjzMXM8eoCoG4X2RjGCyPUZCG4JKk4ffHHp8VLGDhEeMvakKij9dxzBJ89CueerSNXRaqR",
  "key7": "NiBne4jf4oEmQbBMhS17aLJZ8QdDr2W1BGgMGdfH9GDm7H4he4WFN6QJDSzHrWpYsJAwosrm4N3SQ19yWinNNVD",
  "key8": "4Lw2uEufj7bZjN7ZegAoMZ7bd6uMVsjAaSdxgUDQfWBVfZsentSRB696bzMRtN72L6eDoEbqKzRMiC7hm4jFVrRE",
  "key9": "3mfAkc8hWqbMUN2d4cTQJxgDzBtmk2F9jZ3xkqTNk9SkNtZVn1HzWsStTAy84R1ToC8e1vtPHDNVR6ffmozyqcRi",
  "key10": "3UrzMtwXCLtD94cDuk2WwB3BMosnFHbayfD25kAZnpX9t85ECdxnuEgQFdbFiiX9ud11V6z5PQTnDk2pRZLNvnZR",
  "key11": "5xmvooTSyGS7W4N16J3eg9FrnraL2SLUzDswcQYYGNufFTt7dkJjUeNH95xk5dkEhrSJ6ajVBzC6iGLWFyEgrM97",
  "key12": "5U348GqdSqQTmHuh5wUnXkPZ1x6kfeBtJyyZP6z1yvv1NGeudhSiSLN8gsM9YVPpkpi13qDasKJ7eLHVDMhMeaye",
  "key13": "2DaHkSj4S7xCvT1rqicHM2U383qARSwF5FBKm8Hyn4DTzai5c6LN9jJfDngdNnSiBW6m595pPpt2q98GucbgwRPC",
  "key14": "5G2vbzPbKHAUrm7K4r21e4GXptsj5rUwn9zdAk6HyDWjphjmZXyUrzrr7m2PFycVL1FPY97xBTrea4j8FTNQDmQX",
  "key15": "22WUXMAzu8S817d4hiZwEX5iPCCaitzrAtwrr4GY2gy4gJvj4gBP46ijbSc4mLMseA89esmvePgTyBG2ZgqxTVZt",
  "key16": "yqK9DbTLyM8hguRHEA4L7CWyr47DuCeNURLVth8q5mUVZbipfLWhyd2fRSGfTA5pA5n8oggFxWQmcEaQLxzmHKs",
  "key17": "5iU1ET4vdH2bnr6JJkDHE2VzfZHGhA1dV1LM6UPdMdyNbtBpFsTBQSxJUbpE4KDLho2CZ36v8QGDExAySv3g6yyP",
  "key18": "5kb5uK21R6pMKnwD98N1Cb31p6FdPvdDsP7qz91AZcHU7UcLZtcdt4BKHz2pGxxVfAVhT2nxjpCVi63qpss5yyCc",
  "key19": "AumWiqGVRU8foM9gq6BNYtbnfwjjFQNVtKuTzGeZyxesU2MB8jN3TRmhHfNpwNuckHQyK1xrSwkp7epyck9HRcq",
  "key20": "5MaRxsq62zgnmYQvTaUr4STbiJUhntbHH3pMUeeRzAWR11eMpcGcvXGgdAeUfrpMfTKpYnuPX7bzFKnDqSzdYdBs",
  "key21": "2rQD4Zbg5zMJsmret4ksKE7tjX6A7c3B2PWNnugyctZanEjnu8p8xrrbRj96yxuZ1KfFaRcMWApsXgQKt3jmj8En",
  "key22": "65xwwCPK1Shrr7umiBph8hVx3X4webjSzUwDEiPc2fbpzVs54KS6wV8j4JVBkMhkxmuqFgRRzGdfT4zJoJmc2yJH",
  "key23": "5bqE2gV5Him8uEL2zkkUKMvqz3dgXrgQvNQz6y8jWkRNHReUe3TQjh2xopeF2EYG3gTPCrzM2f2QyDAuA28r1zh1",
  "key24": "2FiHMEdGyh6Eybo3LeHyAjkNfH4ca8bUzChrqC4atDiRxecLrDXKv5ZbyeWZLWJxLuBdfVMcMcY9bKotseZpCmAX",
  "key25": "2YuEv5XtsGEHGENFjGv3xnNBYBbWqjJTxTabyZqGkGPayfcBnSRXDv8RvZYxc2jdz5VoVMxby9yM6xpYpoJQwEGN",
  "key26": "4g4tGaYZdjHFwgWVzoWq15Nm4JaBLmLsNdSQiseR3eNoo9SdBeqaCHPEwswvBKr7DQEdW8C2TrR8NQ3PvHqBGwu8",
  "key27": "3ExZUZKFb3L3w8d4KVNTocrPMqbpRbmae9zjU33h4vLnXGq8JPEwkmRfjBpP2UvvMN11yiqfGnCZZKJq3NiTN1KZ",
  "key28": "51SU2BumnZ5TGZz799Uwq2WzX33vECdrKHazV8vg7AnWJ4vfkfrPADT9JZA5hj6fcEQjX8RPmuGax6pKFdNBiSYb",
  "key29": "27XysngZPvaukKkqA5uUi2BLwWwCSert6UKSgqzgCRrBZkDNNQz3p5Pcj8bwoL2yH3LPQJLaJn3H83JtG9quJMmX",
  "key30": "5h1CXRA5wAvAqn96PpEskJsLazjLuhxBLMAss1heY2xphzTWDjNkySj7Fpy8gJzknKVDjCcTZ1fMnY5ZVEAAbng4",
  "key31": "5vNNFcvpMzMxVqRHeSwBwbXM3DiNDpz4SjcEN2b5PyKm4AKwhVvxjCP9icdcQDvHPhB4L2sZQRs8ZpZqPxpDwoi9",
  "key32": "2oiGgjsb7TDzvUMUBX1BxVq6M66dKMyJ4tdYUwQJbKWut8qn6qiwYHXANfEpXRu2F5kgH6AACcaJTsXN4Rz2uKVu",
  "key33": "En5fu8S99jcAnRtP82bUyxPELekfVoh9nbLCPPeWjDW1Ms1wEVHxqEcCAfUjxFaXn6XDsM3awP2bWgZoHAMH5pU",
  "key34": "MDtpRktg5mPNQcrwj8tSs2MxV2KN1VBhQXcfRRAbPRdXXeRyfrypMoeHH1JJtrtuFK7uJzky376uZzsgciHfuis",
  "key35": "4JcCicBd9SCyTGzNMEembfvn4EhDBAHQk6s69WPV3ueGxiY5GH4uxL2b1PGUHtYoyPxygeEYGE68TZKgiT6XsPrs",
  "key36": "3rGR8RMCoRsUYFmVLFzEpVu5f1GKCuQgLGL4vnEU6pVDzEhq61d3dLDRXzGCECvQjT91ceFiFYE7H8STi9QvobYr",
  "key37": "2NTuMc6M7RZLA9xgH26bNwZFBDa97HYtibLN8S8oT7RFSgMEgYmsQM9r9N6ikaopNZyQdWKZUhXLzXJzNg7ifzVA",
  "key38": "4J9uEtYhvZhtQN9qZTY2bSJPx9z27auVoe8KQSZtukfwWdB36qAYXcDox11XVgtjjGq7UhhukYgPMkn48MTPJZpt",
  "key39": "3pyJPzubq1dFvd4GbXQrGbhQsawZYTTowNkEuSA3b2ySTEWFSeTXbb9Gz4gidZDi9D7nNJnGGkZZnKT7tVwpu3a6",
  "key40": "3LLsiiydbVL2u9YHeGVJi3XKqCFy1bXudXjgVSEgUfffQb9adiQxJrPBUoAJUUrbUaB8uZiogw4KD6vJPkgvEZBp",
  "key41": "2FnHFZFQmuGEza4GBXqaFSstsWJSpW2GKCnYwoRACEHTj9k6wYuUtW6Zwin5wyccA3PhJsMYrdeJNRiDbJULfEbD",
  "key42": "5juj86ym1LhFYiNC3Gu2vnAkbVfwbmjKf8kaifGotoYKB61d33TqfLaETVFiEX8AGMntJuyWqM1c2QGPWXzmGdt1",
  "key43": "3QVqZsYysA44KngkhUnwZ4myLbyD4qgyUDYF1D7yf3SD6dQpQs42zkwaW5SpMWrnRd1t81btXiM5SLQRHcu1NH7K",
  "key44": "2ZU4eiU42zjmKseCErWzPcATSwfyxWmkowwtvUTY5zLW1C1T3idJuHwHeshaao1uWX4NBqgCxSZWMvFM92kaHL9F",
  "key45": "ZJ1233svTcQ9kj8e4cwm15raGwt6XsWZa6jkciFqt7rauFvjsJ8x1Dy5i4FUeRRNpjJwngHu8cKT5nc2N12L5GX",
  "key46": "32gt7vB9QvVbLtWrTASkujzEBDxTaajmRbwsukhoaK7HWPgvaKS5iEEd1LG5J4bFqhA7cjGt8NZs9RWWNXY4KScr",
  "key47": "21THfXBvRyicwjv2wKbdPLceUe1MD8NsWQuHbgiRS2VUeCoA1Scm8a1Zq41GN9bMGKxMpy4ep1of4LtEgVGnDfzQ",
  "key48": "JX2MkfrRGbS6i3WdzWKiDritfmDYd622uqUJZWyaShGbS4xW8v9jUs7PoJePXMdiz4y3wUVDi5BCgYoxkPpeEVF"
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
