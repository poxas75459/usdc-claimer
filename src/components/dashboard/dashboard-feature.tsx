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
    "L2nsnEsKnn65NR6y9nGTFoGWAq5DVx1Qozk1aPJzoTErUx49vwD1YdbKdGx8wxw25ZHCE6i6j9yQmbC9QzsWmmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wrGcjaUzUYwvEiSoEJiUTGELpdcWpdns7Z9TYo8fkMQxZbyDGQktkcbeqssda9fHuPoJargAv1GqxMED2F4KNV",
  "key1": "3fTLfy3SX5fTgkoX2NFQjjx9qh3mnu2bdCeERthMizgP1ELTZC9EFb51D2k7vsX1y4974iuLcnqEm4KrFk9buH3i",
  "key2": "5SDBZBXAsgtdSN5kxPzzkJRwaUUYCFVYuzcozB3nGFLSfZd43XpCTEkr8KLzpnmiKeuzMqefrX5RgchLciJFU8jh",
  "key3": "5MZHRc9b6tHCcXNAJvosKxaGWBLTL6CwsmZVC4LtpWvDu8V3Q3eFNUDKHjZDpF7Ae3crepXBuUhM6bVQFeFjJuJm",
  "key4": "3grYja7MmQhUUgqR2f2Km1DCXZna8ZzAGU359kroo4yC2saGhcgXJiZJzyUVYoMVRif59knmUH7pVe9Ax1x54ZJV",
  "key5": "4tKaxc9F6kuCKMMYhJ7enwtCVyWR99R33zk7W92PbHQfk8ZumRMYt7fJ42HTH2L3pfZo7kpKex9JetoWMhpm5zpR",
  "key6": "snbMHmrDwc5aADjkQtgBzZQjZoWdvZcnLxzGWTCtChnikr1ZaMmzeUCEjFcBMEXKsSSkH3xVoPvu2RD5LcKfKbg",
  "key7": "4yS7gHpuBvRYLFoSofN26hPc93DgyNatbPfVg8rxVSDiFh83WKyxSm1dFZVKC6i8Amju8kHW9XNwZFQGK94aWLB3",
  "key8": "4aqGKRFLyJXY5LLfjcgz1RFaxfHQSfgSLnfuv3UnVxJMRtgi5Umb4WsAJRypLFXz8gSy5K9fvtGqeZNwsbMqCSb8",
  "key9": "61BWHkc6XFHbq9cZa2vnx9T2NCydspXxjfeohrDKuKxAyE541kEjctmvyvC9W78NrZ314jTsnb2zRHcSn5fRTn47",
  "key10": "4iPkbrsZBrCU5bMb7EF4KzQw2ZmicYmJM4KVx4XWK91JCkogBZDfSnivsTEU5cu6bvRS49mtTCQWW16aPj3QUaSH",
  "key11": "4cgXBbFYGdXhkSswgdDbjPzP1JGbkLReZRcKsgCBn8yL3tCUXbCSmaBv5eE5nBV5nF5HhatHBTsVRhXq4zeqhRyW",
  "key12": "8PSLuzAcGH9vnnAj8KCS7JnMC2PPUx9mbAGtMU9KG6K53Uvw7Mx5BCL7cxSsp7z4siY5mRzyJkZUGxyej8wMQYi",
  "key13": "5m3dRtQAdAR6WJ817APNqo96xFJjxBEUmmHyWX5AeSjiWxoXXSmgFM6edsUi6hy4UT6dbDoKwdeB8HfYKSu1NF5D",
  "key14": "2UWcLppYrQCiG57a8a1jkH9hExzn1MRSQaCceJW3aPhtvVUZzJJHTu25gfJK84K5dw42SnQbDjJKPQEtJrENwhn",
  "key15": "2xVAsHpMjuLHEf2shCMJ69hm6jL8kdNs67MiMR9qKtQHTe5HNpe6TEuTN8dBtPfP1Z6LNy3f5GrNbC4kfcUND1jA",
  "key16": "2yZLhvCjXU2BvCbGmTHBwC3qp7fe2wPAEFEGJSnyy2yagatdKmNMpgxJDVTMkawiKc2oZJxpD6heZAmjkvFHZe58",
  "key17": "44XvwKy7eDD5sLDrdtiXhnssQ2WK63HfUz3AnPaYAtdYZvRDiqt32VR93VCGZG4aBN6nq2yjctRSjVs4RV2TAsXD",
  "key18": "jcvNKcHfczRJky1o2McqDm3WsTdb98rDrzoNHxwr5JiRvFzZR8s43TK6MF4mdChBdyvNmWKDvv5DkAYHpgGQZne",
  "key19": "EXA5BPWi7brZ42H25H9q2tneUgcm5EcFT2mwQZazhzF8P7SkecWXTW9gkw83WsHpbN7eweLWZdH4mncjjDbAKrW",
  "key20": "1nKyeCMhE9rXK9ThcnYGBXTEWvm9dy9XQrMmbCDdrvsetuuCKuxBLcjxv1UaogRyxg53FNdfJEXKqRh57bgCTG",
  "key21": "5GKeBWSaSiPXMmCmtcFFMWMvaJUB4gYdqqNEHqJFDecfjTkLxSHcSHUeBu4DqN7uyf9SE9kEh9xfBRExXcyPcMmz",
  "key22": "xsX38m5cqYN3Webbnp1gxQsC2E2Nr9hsDuuWpkzTbgx12ZuFrvGSbbR3zwziQwqhNHqD4hbkfdZx5dyCKzJoDCS",
  "key23": "eVdQbC77i5dh4xSMEMXzRPRVntEBVrHmpX7trgbUW2QtXs4fsQHWDXGjoCySrMTNFLKYmAPeRuSZMkXi2eHUxDy",
  "key24": "4NuDFdzaHevbwNwje4ZG8HzQpqUbRwoPFF82AkPjnZwqZ3UmMLThGQvPMHiVrBqhqj9hAtUw6jmc8aroDa4zPCCY",
  "key25": "3L168FT9ScnEcvKytUwkDWtHT6DkWAYuSg5LMQag5gMmgZ5JhtxeyqMMB7cyvMMmkRfL2hevfqqCVaaE9VebcyXM",
  "key26": "2b1rMoyFeXRXhsvbhjWNi2eWZVJBwKPBPaexKwUTVAKamG1BP37yHLs67cgzdJvUKGzRh91ZYiJmTT5CMABM8hD8",
  "key27": "2a12QzoGYoTWS7yT7UjnKQUfykzEbHsPGirMpuSVV2PUgwsVJ33qbX3RqU74a2sQfYYmfhXPFATMLGnHSkyWgio",
  "key28": "2gyrnsX3HXB1PmmJi9Y5KHijk8r96siVrxVmmbDQjC6BoPgYcdmaf71K3UCnrRrtSBGEf8vfGCgQ41oSyKeXjXvA",
  "key29": "pHfKPBDZCnFC9keErNe5N5CrNhezEp5Jf1zRE41v9ZQnbDVvcv57oG3tzzQ9rXgH39gQ2yvn4zSTjJgXXrXbxyp",
  "key30": "otw8BVna9TbhKqxZBnZmU2GRubw8pzTfbe6WUTEnkBUfJQzsFMbVnZcTdPZToJSqkzXWc51spe88MVpnqoesDY8",
  "key31": "CxzbgQeNvZ6cGCJhJCNeTm1wxGKcfpLCjzyhTVWntzg6tyar8u31S6MH9ZHmZscYhNscfxznEazLrnskizaZyHD",
  "key32": "2TvfmFx8LWEVW7XCacvdqeQZC4gs3kJhrcH51XjQ3KAJ9QasySGrHqUUDAiLwJdE2y1ViGHBEhKLmJeDfVzqL9DC",
  "key33": "5Tg1Kmp783gUn8HTa2udfFgLGKJcLYLshRsRZk5zZBeXdnDZ8Emrnd6FnFFCUUPeDmmbXch8EgYdPUN3BwEugGZW",
  "key34": "5yrBZvYjfahUC27jgbPvRY9Co5JuSmT1K3K8BjbqVEU4ECUDqY1MkbkK52M5B7JHma8YFZ41gA4fzL34rRnmKV5v",
  "key35": "4JEgdSsaGLg9v3kKnYb2vxJpuCmhEEjWjceUzbcSgZdLcnguJDWtpaQc3Xdv1yFc8t235JcdcKHEkEzoPn1uNRPY",
  "key36": "4fnb3E38fZM76ErrNf4ngbowvbgUyNT12v9FXZhagZiFzynEMtqYKXyVWr1XVdQu8sBnueaJvPpdU5rYiDspXpLP",
  "key37": "b5eXkeBaWptjjL6CjshuSG7xxTnUxi8jWkwcutMido3CAz2ZC7Y4zLGXnZ9Kzco3vKn6Yo5CHGjZM6DpGTjv5tg",
  "key38": "2pHa4TqikZxjCEQ5cMxtL385iscK1ysxXY9sfeRz6VYaHGnDsj26eKHK3rVoAy96ATF8BsR7J7ftPqDiYM4BpM6c",
  "key39": "PH7nDfytbEegAXZJgy36fJ57mmeAXzLkhHfchbaS1Z6Fo2LkWAT7TrUnzksD39AjLMGQuFZU1DGHhsKquACSMuq",
  "key40": "2okaGUe7MqphKECcjvwsKshZjjZDRjQraRjzcycsDnQvaZYpXFfTm33KgQE7qcEyo9vsLoTurYrHzrVe6FgyLzfX",
  "key41": "3wg6KBZdtqKHSFwzPuaE2Y1zJinMYt614QbJjrwNEhw4cnUqTHnBcst8kFKPvb7wAqe84P6vZsvkrBRLCV1Mnvkf",
  "key42": "QMgw3gFwfETASFWBcA7sDxVevM94tkWjCoyPRcaL2sm5CzTKMuExza7NgkSwXneL49ZachJQy7PDi3FykT375Lp",
  "key43": "u48uPuQQCa4aGqgs18CSXvasENWeJmUzAVeDmtnjrGgUd1PssTbt8PwyU9FMX8vvuSaG5Z6xWKWe6NHgvAHcUht",
  "key44": "4jYuyxtzR6C2edZB9Fr1227UodkmNNMzGvFybzNDFgDKRwd9Bt6vjsrAJjxR2D6uwckGr6kt7aFnuorrvMWb6rMw",
  "key45": "4my78ucrDUaka8BwfUXhVqfq1m4dJuVzgSboGadf4jWgXEn7XcUZE4D5XSR32mecW9ReWagmjaJxZ5rUtD6kaq3f",
  "key46": "2sSJXVCFDnudv8B52aSQpWKR4rYGe6kQ8ndd2aG3N9gBuGce41E4ckaqs8sm7fwoPE7ywjzVzrs1gsV5EFZm72yG",
  "key47": "4zQeGGKCzG1rnLYyXQfH7qTuJRqXJac9yjnto9B7v6FmMecLaLKY3TnLEhyLWJVyvC6QRB5An8xKnZgT9KdQk6sf",
  "key48": "3MaJEbuuhTkc2sZWU648ie3r7ykPdT5xEfKUnmeUW1p7KbFNDHNyDSLjrF3cxRJ6PNRG6f2AGhQ7Pwjgij1ZQWjH"
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
