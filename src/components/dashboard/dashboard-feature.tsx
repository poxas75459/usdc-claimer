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
    "5sgEZHUEDid7diWF8eFAQQrT7G933QNeM2GSv3jUenujrnKrm39u4dkdBjyd5CZ7oRHRXegAf1rdfb8AqJ34BrqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXhxEMJScXLd1gyUGriaKW89TpRxout6RFsF8vAscvt8SdgzmMXJTxYeHJd5CH8jt1F4hPfvAVQJJDT9jKwwg8p",
  "key1": "ih4vdMzpiBtgAnyLSCpWk5p2kwLTZtAWCibtkFJ6p3EgpDtDHHCXR1cvYd5fAttvvjneaL7777mKiuuxksqJFH1",
  "key2": "3uQsxweQraSHFvWVNEFfk6fwEjft4mepHe6qNNNooNiVrmYuMjS3j6gAYLfGPAQwJScXFS4ao7t54DfSUgq37H94",
  "key3": "3m9o87heGoUPdkFt7FMAPne8JHmCHMS8hBanAttKQVmkv3Z1QvLWoQ1r5bftw5NyHPbNpHsZ68PzJzCNWLsWtsvH",
  "key4": "5v6K7UrNRaDmR7sDVk8bqUs9GQUMgcX1YhKNUjYAKWUvfiSmDhq4QtjTefCdaUYR4guMgiz2XB5Db2huVx6KwM4v",
  "key5": "3XbyeKcLm58qsRtNAYb1gU73pChDkGNEZADZNX83ukebSpu6C4Da2VoJpxNRrPpy2PzkyFzmV7GFNX2ovtDZw5Do",
  "key6": "eDRNgormaQi5VHhUptXDJcVPbK8F5Agp6gzGJo9nZRdMHe8e72R55PXxSD3JxSXHfGxg4TNC2kHEhWScncux83Z",
  "key7": "5VEHpngoMkouw8EMXFTDHgR6npRc4vGPAp7wvDeg5JcstjuaMpCoG8qXWjDLPbjFewbYQdmHeCuWVGqcBaiotZmx",
  "key8": "2ohAVRYhki3oHGgbamNRL5zWWwbptfRodUn53tLahC7pPQSm2j6oaaAE7x5iPTbb8BqNzs7mWsVF96j34JjFgREP",
  "key9": "5GZA1P9snaJMj1LryLtXUgi7C1FTD27W4rcYttUegQQWLR2Nr3i3FuMgLAJDPsJWUXFcBeTSDcaX5iQs7r92SRPf",
  "key10": "nV9t9Vx1HwkwqMAUaB2kg23h6G34HvktGVfspTGPsTrHMAsjs9VM166Ko9tVZkqV9jXXsfWmpCU3NajCzeh6iqg",
  "key11": "4uTEKaHmrWtqKsh1wov8Hnm2QvvCfDYZ52Qsq66k8kCfSYRg8mPWptgdzKz97pAqC7yee9E3fntxNa95xakFAJUY",
  "key12": "374umCJpS6TxTCKkfYzcEwEDaxSVZtuHYTy1U62y7PqBzXCwB2V4RUrnd1UDPmnLvEfA1V1cR4SjFCr1Npx6cfZX",
  "key13": "4Q4ZJwxwmd6Cqg555C88roo5UWLbyukvp9WMStYQCNzP2p7BAtomsJtmmLRmTFeFBVDeEJ2H24aDSYg5fe1nTZ2z",
  "key14": "2j9FqLshhhD15jKpAm5DfbzW6HAr7Zdang9Uugs4KU1KpHaPboCG4NviEYzeWhCySdDMbPBsnG5r49qBtyNPpVVA",
  "key15": "65s5QoFApXjbred9ZHUz8ySuRLw2NcSivex8shxiuoTXmPsKBUTN13b6JLv4ivnkxw2PzcvfBK1NG6mrYWz7Xbgi",
  "key16": "3GC6y8yeUNQryYjHVfg1EN5cPadJbDsJvx6RZWL6qRAsmrsCirtRZu6xpYJ9s4JongpGmySV67VW9mRVWE31ptT5",
  "key17": "5y2SnQ6HZ2AR6g3Vtv9Rbq2T2XqaZDVLyT3vZ4dH44xFXz224fymjh2Ai68tZhAH8ixy2BvaCALt7ZjKUPLba3b9",
  "key18": "2wo2osKsJRgFXLD6G7Ton7nWrEMYy2eou4dRScaLZ776rmoRs5LaK3mnUVNSkdr1t2J71RYuAXWb3PJ2e2CEybm",
  "key19": "2sbCBhReAgaggGbHEK8tXzY92nz7L48Buf5F8zER8ta1Y3AWARWgoAcpAuZwuSEnGcEAzwD9vjeskRrrrzYATPTr",
  "key20": "5J6ZCzdFPH7Mr2XvyAKjsGJRC3PLfsAWSZKC5TVJjeTnVWdNXVF2CtbE9KAs23oBSe9w88t9Gw62ygW1dECBfzb6",
  "key21": "32v73Cyro3ukzZwqDf1ZgshkQefRWpkafUWDhmQ8bT5sUZTntgHdN7ztHPm3SpX5QcyHVWaJ1bdDWSn4MS7q2U8k",
  "key22": "5bHdMxrNDHtHUKexyvMsVCSE5tGDrqB23YCNcYvZ9zs55SMgpVpy8GpqEejwW3cfPk72fa6GS2iuWT3HnukJguHB",
  "key23": "3HwZVXPxXVUTbWKjvHLZqVuYUhFTTvQzcEKrB8o311gnM4BSYwj3sMpzLrZBxvDbXYHipRystEHEMEnpKQtwjYnH",
  "key24": "3jZ6qbsMyaQPMw9Hm3v1nwhNrooe5krrHoJGZM7jrsPWaFC84riP1dpGtYzL4m77kqFwjvgXduA92UfbbLrK1fRE",
  "key25": "2m3voZyeHJtSJPupEAnVng31SZ4yr6wKRMg88RxCxJfQbvrkxJfrumcLJSDoTuUfCfEetJ2h6q1jQDFDsCYb4G6i",
  "key26": "5dRVX4kP5VsrSVeveuqT4PS7NspQ9r4o9MHeiX41RbsvYwjrPmxAFU64q78EF9MohYGjrgwFa3rFUMWXqYWnjQxS",
  "key27": "5qVyUGC242hRC62jRZjfaQbWZ6TzUby3YsTXVPUjVfeNuV2dfP3Uo8o6k4HhgBcaS47jEkJQWYzfLq8XZFaAHZ93",
  "key28": "23Pjhg3DwecpUngKHWDj42ZCoXpdPAHk2BnxcKffuq2d4F1f5Q9HooUNjxBDhbmvDzNHfEHTuduScJkV98ofo1wq",
  "key29": "5pzYuUcwhunnBM1ygbHvZwkfZEEejG3mN8tKMGLqD8wLxEN1H5a1WCva1X5akk1uSbFaTaiFRV51bnCHBMUDzL9j",
  "key30": "25m8wfCPcExQ5uvAW8awHtFosHD5zmV26Na84gvsmR3BkcAUY3ejKbn9UdBhACCzgSfQWT5cgBgJTSgZ15gkvE54",
  "key31": "3zKgEtQQyEminZWq6twkNFcY44QPnERHyGn8g4ujKrqpFpTA8a4EBARkKkVPi9r642iFC5tHHDKHqbUmjh1Nvkuj",
  "key32": "4rKLUkBwUVjxnxW1t4UJc7kCRfQESvbQKdztRyFhz6SJjkYp1axqnGUd492BttbeEs9dCUBdczARCry1UE7rWqZ3",
  "key33": "3dNZXiMbWYDx8oB77Ejv2KTudx8ppHkZCW4GCUTMAA7kuxEdZp4z2nPSj645pFTFPz2dk5ZWc7SouerGx7Z1GUmM",
  "key34": "foNbU9kqZmg6dJHUDbPyf2eRw7ZwKbdZttReeRzZn35aaCmozhk6wLVyqjVfGFeR4VFq6g4pEREJ81QT7uwqb4S",
  "key35": "uXVX36dFjA5GLYeQCwt3br5kxu5y7T7rGEUWMLpYdkf5AjF9be7GVfBFcNT94RE6gccEbMH7XdSiDRN7DkkMGUJ",
  "key36": "4jKn3FpHBRRGFAo7ociQmWNDYGj7xxfz1GFhb72Rceb4w8HTxe1F8miTuwtz1axc2gLe6Vhuq7geZdXEYAfssUkJ",
  "key37": "35SeVFYMe7chJ2bD5rEYdLAJ3mjjkxGLvpbqfvQNs5ZzSLPDzCWta1f96YdoE5ymKxn1ueW35AK27rRraQDhGTMp",
  "key38": "23PMjLWd15pdFhqbf74ENBDLkRDfZz583C5FqUguxt4WzQzFardqV7E4j1NXDv1W4k1gupVeyPRE5zQEYgZvxPik",
  "key39": "whRziTyb6CqjkkuXV9yoevefYLR3awumhv5Vir4xX2kVmN391YPV3XGPoT722uPBrepTe4NKyNfw7XtMDNYbs4n",
  "key40": "3QhrdecxSJju7EaMMvTMVvdfKbHcjnGmd2wa9sxdWrAFWHJCbcBijhe5xzKMWYzVYQuWCF89hGesvJnNYSWA4tQm",
  "key41": "5dtyhvn2Xf4W7cXj3S2mRDTft8BCJmnR9EWWqwK66qKcm5BvJypMongAkDhL5aVnHRDYpg7bWgMjNLQZLhJojV2Q",
  "key42": "5tm3fkNmSDxYXCXRYUrUrvopJVwfJ41CzcCYWU8Ddx1x6m5N2X1qj6DUFqXCGBtSoKNPd6SuGUpSkeS6gqunveUP",
  "key43": "3YM64enCSTTZu1653BfTtAzFUEbF4qSiqayNCXGwTEnJvkkATnfdWPQ695jVz8mNUv7jpxS9KFd23XmRr8fwaP13",
  "key44": "r1SRQEucoTUHwWSwWHLm36psV1maekvka2XVpoQEfsNouss49Yf7GLxh1GyspBcL3FtKpGbtGiXvJunCBz8D2MG",
  "key45": "4V1gxkgy7WJrHm97T26eGxghanB7jALh891D6TTYQMnJhQx4oQnVe1VMZmNbvQEs8KrCUo9F5hZTnSTdbANUChPm",
  "key46": "3guuxbBy2UesKmQPEnAjc4mJRNCPPL71poUJAr2eDyrY7pCxCeYshfby3Zmv47SE7Kbo1D4bD16e1VwM4d6mwerC"
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
