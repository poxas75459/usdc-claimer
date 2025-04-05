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
    "2v8pKqKAwe4zDsf7pVVSPboN3saivwbaA4pmkRB1Ap4A8r5Xnxc7jHR1PuheqBWf1BYadK3CoLzEsFyBJP2b8TvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AhZbLtdogHJiarbCCtapxuLCWmZ72qZPRgcVSzvSknAGr4Q3aKmormULtJTxNnh5Yz6uvXJ4cqhXsoainu7aCnQ",
  "key1": "2ZynhVWipEJVLejBR8qUFEzqnNKoGP1h1ZYGDqKPskEHhYyvgHNSWwcGhLU9LqURioY59M786c2vmZT46i8uTE37",
  "key2": "5wkbwBVEP3ZAAKgtfVF3LGo2nnY9mnaZJ9Tc7jG2s5ktZw74wFzJPc7tZeMkxfRyEguMENqPPzgEpgFJnaczFZ2G",
  "key3": "3qa4XXNotg1yogqaUsqHr7WssMyM2QZGg9gj4WyQVvW4Vyamg1NbxMuiinRt6GHPY8Nu771tSeXs8kFwGsyEaUqz",
  "key4": "3nEnVisipN3BN3ipf667prhhP7TYD2JZ35zhRFkKuaKGCgYH9qbh3pbykdAnYChhk8uq4eCC5WrSkTjGHLDdX6p",
  "key5": "37U3qNjkeZGF2eNGg5HHRng4mntVaqgv5yUAsrBw1dpn6yFfJrHyDz39J6CMrn2x9AxH7r6wQZ17KzMCno19C8JM",
  "key6": "4dMcnyWeQh8vSt3C75mCXEhBEhJq4iAK41xqY5hGhsocQbeA2Nq5k36BnhsyytCzcQCr1rEGwMvnMREk74EQMTds",
  "key7": "RpJDQkhhyzmD7mobPQakRGChiDh9YAB9GwLJkfe9bK7MsfSAbFM663pDJbmnFSiaQzhSBXumyTNsDGd5QEAFv4z",
  "key8": "4ToKe51TziaYzq7kYeF3mr4m7XU2e96m6etuJUZuEnD4fW8xaL5C4hhdx2HTcz2tc19JPZeD6aPN6MgSJnGU37tM",
  "key9": "DxciazScoC5HN3E34VUmXDDzaiEZrsPG7GxjFAystGGe6Ae2dpChTq9UTpfv33HrTDzAPV2bQ6HZMXLGHgh3dZj",
  "key10": "5ndf5k3nqZGXy2e44x4tZQ9xCcvm5za8ALoF8hem1XqR7AFc7agAY9ouW3WHvG3ZaLw2VY2zGSKd144XLxwdKj7z",
  "key11": "3Kbq1zMrVSXq77wZn9xcxdDwjPK5KGaJtyj8qsuzQQ4MW5J8uq4xDr895UUrK1kPZfYwUs1azo8bCESS6wj8erm1",
  "key12": "5CW2pyz8HTW4aGQpDAgKVVvHa6auqwraFFrpbPSBaw1F9nx53EyM2QGhAYMowz31ag7wvSqyQg4cFbHR1jaTW2cC",
  "key13": "3biSLiT1xC3hEAPbueGWCyimhf4UWjqAmWKiHShc1yJfmJjKhwjfHXsLc7C6zvFuMUXaJHMf4n4CvLiz7AwBh9mX",
  "key14": "2sq71CFt7mK4de9n2PbuB5NyARAd286q8p75ZJMJLer2cjXraosfjbyoHDciUTPx6ZshYgHhwCTqKZX7mjygPVGW",
  "key15": "3rccCD7xPDg7cLy2hqN8psSw2CxAkYz5Q62eXJurzpEQ5nvin1EQakYw59NfxQ2cXnjj1gWeBsbXw5ud2qWB8YEg",
  "key16": "2bwbS8bJgiXeEdbz6P5NQub71KGBopFLk4AgMyDu6shNx7pKk8UkG4VaKpbZMMkV2yWoPfVUmMHq5fGqzZRmeYNA",
  "key17": "2omvbf7JxTjroyrxcK9iz6q2SKruLqceMaPKANEa425TGANQimYbR7wU4JRqp24KEh15FSiFXpfkSWKavE1wEm7o",
  "key18": "3XKvxAee7etLbtsc6Ha9WGJhZAN3Ts2eF5M1tsVZqhGxUMdf6fTbSCaqHHuMbMcmJL2FjQG5J46xGb1w72RcsDgb",
  "key19": "av8L8jPkSXLWXbuaYQLVR2MUtvbcwSv8LuRzb5sQuVukKUkyW5s1GiVQrLCdfkqvk49MuRxtbaMqjERDhvF5G8n",
  "key20": "RJkgdSBvQ26Cgjh5HJJjo39U1eWevnkXmaSUnE1SCBxAUCtwjxdRq4kZbgdnvXfNZv1jKxddf8262nAYyCgkQGd",
  "key21": "sxDJhFUbCdJhTDPaWaGmtVcUyKXW9npcf3udxMjYRahqAUZNQN8HUg3NdkTtVYxRxNRwyvpQdsrJc2CWKbLWpSN",
  "key22": "5XCjME18u6CG2NAVJbZi14sRqDsdS7x7q8wBe4aLTkcPzoUxw9gqeR33yotDyP9XjYMXWtBWefb9PYuneeg3Sg9X",
  "key23": "k398cCatUbji6YqxFQhtR3fPJVjH3nvSRMcGubBH61C8fyjZWvWByudP3nk3VQA2jcXz1Rvfqym68Wkut6yG9mH",
  "key24": "5936NWrwiWCxq2zJq87tCQovoXvfJDQceoorRzTETYgFo4JNcT4NgeyVDYwHy1CsfpiikBhsa2tzM5aCgyqv2r3g",
  "key25": "4iLFGF1qkmahAMTZ75Yr4NuNzDQhJtXW93HaVxtF2RohdYdfbu3k1iy8M4vYTAVHDx6ga1mkZXL5aFM6RbtLiByv",
  "key26": "RFTMZMsWLibjFgx33ERtWU4T1RXsFSNJoobXqYi1SeobUi4NRpfq1nYN4tp4e5tePJkQasxmbZq9JzFYCUL7LND",
  "key27": "mg6VZMKEn1HFE3qhywzGKdWojPtGmDMqDUiaiBWD8EPgyNyVtmUWytHvczMBCGB1PxACj1HXFeSUUsZFkPk5BsL",
  "key28": "5hRYC9qjYSVVy9TyroXUvoRk4fefLEqeT1vA4QBAR5JDwb5snqryYHrM8J9CQ9VEf94zyiBjemhdreapSDTDqqp",
  "key29": "54PqNybqbPa3v2w6977vZVArUr3RNejJn6nt8Yf32mk1A6k5HqMMGCyVNTxLpvLLYJkVVJDYJvo7nUNf955hPoeN",
  "key30": "5VMhrHa4zWrXnp6nuhsvtMJ8PuWPtXbuALdXqBx6SLtGmdCADVi9c1RT9Xj3pdB5AqXenWf8ehfjYVAomxMxAi1J",
  "key31": "hBhRdziiporb3HoXiXbehJktSYHu2nidJJS3tcJUYLKRWrMM2kqjh8wBhMxwSdpLVNUrxvtvEZDz5VZoBdUxKqZ",
  "key32": "5JMkcn5WTCqsW6Pn2qp22Ub7ydxTyvKZD1N9Zhb71WaWMLju9qPxnVJUYbpLXM2REaSUSUcdWVgU8HZmgGdJPkgc",
  "key33": "2nZtvPiirStM7UrJmruZ6UWpYP8S7wh1EP49tQXbjvXcjB3yqfXp8LiekdECEvpBD6HzeLPwMCaYvcnwEwwhV4uM",
  "key34": "3nztgZuBazrajHDVyTyibcPZJtcBhx45EdgRikCHFaGomBbfgQGWeczdTm5j3XzabrPnkFxSUCBT9SdwRRZUz7Tf",
  "key35": "xHDrL1n8qi51Ec9CwAKnwJP6dKwBfkg6RRicGX2DXTeTuDtPx4jPaCacsco3jKJ7rEujHkjLkaUAoKNAz5j55J7",
  "key36": "3AB5GkScwwqzDDR7ofg2xJURi27qGNKwKh6AmvpniGvudv9jwXayHxK5FxhT6DRxgovcbYtyT3LoaSd8u4khrmDZ",
  "key37": "YHSmFZYfVx5b6imin2QwvBFP9CVGQBSbDmuArthx9Wvfs5uTnfq93dJ9dT1xPdJZrWH81rxnuLU6Vn9zs3D1hGz",
  "key38": "3Rzs5m7FUJbeT8k4PcrZgNTc95b3V5NnoKrBLjTcrVHsSfgnZDkTAnqnRCib31cRx7uSojkXWei3ad18wsVFTx5z",
  "key39": "3AyjwGRpM6VfSvijF6BPxduG3WxDbxNmX7Ep4ipkPWWV6WZDAHGMnntexqELr5GKVB3QRMcsyG4xrPpULXcNE6ng",
  "key40": "3E6B1x4z1Q7QcCVorDMBWgSnsZLHMp3KNH1JqZqJpnQpJMtWWSrpDmidkiqJcoSFHnWavGhGGHNinqTArwHoY9Ai",
  "key41": "3HqTXwsV7rsmeWH1cRynEqHbqmDQ1Go1RGaMxeky4MUrmQLSg5NbeF7KSSv1eSggGY5VLJvNqeYjV4z2VFPZR8t3",
  "key42": "5Mdvi1PmQZ9XMcnufppZtWEKuEFDcWCLeT4GrUs661pGqEh6Q1QgxV1AZFvhYYjmmba9HyBWf4sdnYqg3BdMeEWh",
  "key43": "5j777ma4UjJdEutGL8TNAm56EBhcrQK8zJCKVsMVhUuEePPhdRNWE3YkzLW1nN98aBsmFeL2xxszJNxMXBSRzpz6",
  "key44": "2vu8KGXC7RKhfhahiNNLtqZ2p2JrD7zx49rbcMjKFUmovJWUXtinFHfhiQUE3Qp3ktcrWszvcJXkBYgvJxoLhSE1"
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
