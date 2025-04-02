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
    "2Cb12Dvmsxvr6ipp5WZCcGkHwJrCb1hUoKxnFsZmHJWm5yttd6qvGDhVKXkSFvwb9aaNdYZq145SJxiosRq727RS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jR5XWEWwFerukRaXfFHHHfwfLcQuqJodMxB93YHUbzWAu9AgRiuVdXbXGjvfLhHjrVeYjYK1YmJeVAT7nQgXNvj",
  "key1": "pUgFbBc65iy2LeeavHwLvT3R2ontJCuAfpEG16D8qeAauQUbAtW3MDZ4Ev3w8jKXPMYn3rVRZbxLHNJx1PzfS51",
  "key2": "4hz1EFHtUw1svLnGRSuKY3LNN2EUQmaPf99bSzC6DuGcPnt93ZmeZiLtaCaabRbCGeA5ngTC9PuQdsmfZpzdfxgU",
  "key3": "4T3WmJwnc3PHXE7Pr9qiT9HpVXqUivq41uKBXfX11CrcVREJUkLQw8DH9Nzfg21iuch9rZUQTBAM91rqxqrrPPYv",
  "key4": "3KZVkSTKEfkP5BDNfumM7AheiJdb3y8JNW1p8wq6cLSQtCWFbdbcf8By1iN26mH6PuDpMBvWjioPXphbSVMPNX9T",
  "key5": "3mqd9BgT87BuqrCNoLGpmV46F861QoTbahEYeQUM6gB3XKenoejWJ5bUD4YmhhfGUEfE3EfiwDaLyWLyYgiXBp1F",
  "key6": "2uFYvs5MMbf5jRWhHhs1ESiHrKocEh1SeEZnfKuQfJma87JyJSJ2rdaggAcW6zCJFE1bfr9o9nzLNAhBzhWoV7xd",
  "key7": "2MjekRgDCJBeJkS4E6QC7LN4oenHovJxPY3awqkaL4JMoDBeFaffFHG21HYNXBwhAxwfynRvLf3QdwckHkNCVL8d",
  "key8": "5RFhvSvuKNqECWA2mYWGDXoYMk2wxefQ3yGwE3Nt7F7FJ7kciZ31XbVUhtKonH767ghTE955vseR67BgpJ2btS7A",
  "key9": "5J7sS34rSex7SVJ6oa3g2RfsHHAT11CwaassFVqps8LNJn5fErKgeiGC1QfZJ9dAbFWM5HdeBUr1PdRg616mz4Fk",
  "key10": "3Yvj7zemEF7fKwFUpTEkYDPz7Xo9GKRs4NZDnK18f1HgNnVTim3Wf87v5XCNpHZcSzMHnASPC1Ao8CmfJo5LPYRD",
  "key11": "4GMRtNuwuHYtdrhuvhXwTREpfDZL77geVFoVoKeGLSBwN9Jq8Vqmn5fXuhPWvQN6KUWjPje2K7fVnD5gv3NVdXnq",
  "key12": "4Y13sVX4Dx17wnfAmQWo74DQe1q68i7F54heQyG2ZwUuBSBrTHum7q1F8KGQnP6oWb1YLqPUqFAZEiNRvih7KWGd",
  "key13": "WEsPe6Sxmgj2hmMJuBp5XXysxzZXo4qEKnxFTJ3SDMeW3BQnYJ7S94giwfQVeTRamCnGU84rQkodNcxynHaZLre",
  "key14": "499Mn9SrUGaE7FE4Jre4tymBAgdPF4Dzjow8dng2XpiFxhUV5j3EXuS3gpFHEtazX8xQuEdToBZMt1mVerWaBJwe",
  "key15": "4iDMzeNXGbUi5aUP2LW1NNiSM6fp6auskwjvfCegZY3AVMZB7gt1rLrr1NCABKWEebq18VRMewTE412v7C5ipbYR",
  "key16": "4JovDtJbawvXytKk2QqaYFiz9pZz7oMrCvs4EnN1EehCUgS3587fwumknHz9DgTbixk9c8euJWEqtxLPiTi5eums",
  "key17": "3fZRQ4RvPeS3oUPe1CEyrxosSzusrCWGZ6vT8CvT2Bn6XsGT6KESoD3zZVES3zpJ1LV6hMUSDinnXBaykAQmTSZy",
  "key18": "3811Q12A7nqvbK9mrEqD7Wv5LP2zgP1ZTAwJSZHcd5WDwJ4px9R5fr93i4SfszmxYGYXv7uSGaj7i51hywA5ArYN",
  "key19": "5W3Fen12Q6JhWLbyJENs42bTTqPmW46X5zLatnVsH7djLGhPcZ44GNPCv1aQ3EpctqyvSiN2aYDuNKVwB4etcvTr",
  "key20": "wdRCMjritsesRaibEsp8nJmo8rGTf4GN7DEiWqg9BqeWmXaUSte2fsL4XE2jfkYwno8b9iiYpwxdxpPXv425qUJ",
  "key21": "hpYAKnFZn44xUVVc2TJLpopKcTV8rL6fXKR1j5hUmo9YxkkZinuMtjUSjkZLPTeDyVDGsDVkwTCJRXG4sWWvwpH",
  "key22": "D87kj3Di9SJxjPQoiru7v7cBMEtGEeCavB414t6SYMhZT7jtKvV76hfoCsYocRv8i9JYr1gnmafYwC5HLmueU7X",
  "key23": "4v82q1a1iapSVv81S4UAzDMPGwcsnYzGjVWyWVwzgqzPrxizQCkVyEgyp7qDen9CXiwSr7mdRJC8RgsevrNQQkTt",
  "key24": "5Upr6v4ZzLj2tC3F1H8dwGX131UZ1G5Qco3U1Fdv2HAiVVZjEkwGTaADhguZnttq96eoBGCgKtVxkGtgzs6F3kVu",
  "key25": "3VEwP1KP4x4naj4in7Cpt6p1c3voFe3SY2hW88KU7yGqrwFs28oAZczWpXmdg8kr1BZvJwE1Z9HXdpeX79kDxkQE",
  "key26": "5q9QM4BcqNBERY7hqpHioPkkwpoRa4UFdLfeU51Rf7wyy41Kvd7XVaVcWyLWHRaZYu5GjLbPBRVUCDiK7b4SFvAv",
  "key27": "4Nxec8mkaWxgB646qR25J7xK3StSCMMFoguKALjeV8CZ62uVR6fn2QFRMR44WN1t3eH4oDoaSKGk7zdiDQevYaC3",
  "key28": "5WWmv4Xb1DC36Sm5uk82DuMvenA91QCMzyuyG1qzsJmGNiUvi8GSzT7HxJWtfVKoYNy2FVwgrBNtGhX9sTjdiCc",
  "key29": "5ssh3oxBXqYGBc9i8jP1KGx1V2VC3pMC5Uu3TN9UZdo6uXxf6qoSpAQLDQMupkDCyFaLd8eKSTedH7L8gSEd36At",
  "key30": "4kJVfdRwdvRoDvapGMdP5AC1BpX9NSyVFQfNc1xYuR2KKzVxoMUusSQqArGxrjKJbEZzmySKzFRpPUosvcGyWsvv",
  "key31": "Lv83FgGAgw3xz7eEZfodc7TtfHVY1SHEknkpa6Nb7FooWWYJbgdM1nGr9co7wLnKJcnfazkSYDzjEr8qks2uFsv",
  "key32": "vxgQ3PdpFSraxKLcqSFfYnniiq516apvxdEyqnQPQJBn3wixitBvs7gktspVQxAsyn7crz8Sik8DhNLqNMKTAuM",
  "key33": "2sckxzqALWBNxvHW7t8SEQFShtg9PiA2A9cdvJ4D7CvMzdgFPa7XbiruMwzbAGQzTfg5auVnfw6orMs1qXsVoP2y",
  "key34": "D4YrKbEc44yuPYvu7rcxMf2BebCQjQXbvVJVn2a4E1zwwUTXwJ9Df8hRy1QMWQb8T2AfheSawrobZXVzJgF2oEB",
  "key35": "3tXRsaoFnyoEUwiiK3QZjtNKAc3rPspUGTgreA7zgSdSf3z7PdSFko5y9gXeDGS4ShXe9xoPbfVfAp8hzDryP48g",
  "key36": "rQBTtmjmz4MVhf2hP5pBMhRMgCm5DsixM911ZTennftn2tGote77C5Gbu2tyB7mm89owRDRoRUFZNiszeyFDr6c",
  "key37": "42nSYZP8f6VfZDGFxwm7hTV9jxWkdGf9QWTqNMyStt8m8ZfNkx7avgkYWc4uK6a6tkYBuLPFN6gPF4kzNRwsR9Aj",
  "key38": "2a6A6D8dABpqcUE3fy589b2KSVDBtvJHUc6HhTeTvGnu3dfqpk6hPKruYmN1NiWn8o8pXpNZoxZRpCqJfWe23iwL",
  "key39": "2tzayw6XzUnoUmtEgGwSceDtkViSSv8e1Ucq9hm97VrxsMH6L4cKsyw932JtTaddce7K5DP7oWJJrwngv3cZUrYN",
  "key40": "24uPxan6yHJeXCHBNpC3AnndS14jNZApXkgqovDNjfnGgdDLrYaQJDpYxbAKG1sVSnwWrL1M7xxAj85VvFitmnpc",
  "key41": "3yAWkUDgf5WpgXpjzV6BiKu3Udi3RddovwKuRAwtYUkorJEjhNHWj9hqcheMNKneTGrBTgbb5uPFEgL3s3h6JXFE",
  "key42": "pmM4YqD4qHanvcCb8GmRetg19DAcPtNoM97c6eqC3sGnsCpmTUFM3ehg6uUK18jhDjfCbkSGpbXUK3bawUWePnh",
  "key43": "25uw9DynHNBYvsMN86Bn1dDzb8VWqhe8x32acMqW1y6UtffAe3m4u21g98eN4gUjtCWvHpru1LHeSEcAHeBTwfT1",
  "key44": "4YMCLsQd2R3nAGE1CwNhjVTqjxJK8STaXwmenhFtnYedagfKS3dCk1yLyHCUS6WUgtaZn4jciAKR1RrFhsg1Ua96",
  "key45": "EQPCFcHtdp3FBqEb4UkYMuxkWz2uBcGgKf3CJAH8b61wCmZNAnvaD4gNWArmmHgnEMsRH9ocmvwGL74oeRxGZyK",
  "key46": "3UuJdwZp5octLUbCZCHBg5iwfgTrNbqLcwabgfjTnDtJh3pLTpkkUYYcrfvyZKurbbD66HLYchVToQyrFSaS8dik",
  "key47": "5umck5zW5mWhoDNDFMkro4oDqUfqT2zhxPkvUvuQtQFjNXfWP12hXf12g2tzEKDn9wMzH2grrMuv5Jvu9cvMn84M"
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
