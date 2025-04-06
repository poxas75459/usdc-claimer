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
    "55PmhNsq61d1JUdjnDq4UFwJq3zXqV9jvmUcpuRYtN2Ar8jZmnSxk5RQqrX4SXpL4nEtvxVzuwg8HEohvK3BCxnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FSf6hJHDGHmFm3rBejNPcghyycz22mo6mZe6cNfrTcY1RJ6zoyMPK6zYkjKRn2StTws7FjpkEa89RHsvvAhdJvC",
  "key1": "xJBxY86GET5faBowUmvXM5VVQGk2zg9stAgumqxv6GMiMeyKfSYYFcnMa8GC2KDbGyxWe5L7QZNHthx7BhzbSCd",
  "key2": "4XX7mhoABng6LnDqTzg3KMfzouq1FtNuEQttpZmo4RxqhXRNkjKGw57QujdUisAiAimonyKMDfKx4zPBxeCQoqJ3",
  "key3": "hy21Aky7g966Qx7rjWAGGWCdMxAnZCGSGLoLYmoAUdLTodtgcqqG6yVGPSe5keEqbbcTd7Tp9A5CW6WrPneQD99",
  "key4": "3V4oo65UzJdFjKb3gtisZ7FRfvDDKRhT1xYzZcfBpPKR1GW1QyvS4W8S8JztRMjj6JzYUPPqVXftmsTunoCCkcqy",
  "key5": "17Gj3vvGvbjrWhyFTKJemRBWzn3GPrCtCNvf82pqKNJMENHPdrhr7bc6zaAUcKPLBDj5vhLNJ6HL9TV1dicTYRx",
  "key6": "Ad5ABxq928nK6DMqp6CnGrWmcenjWpk18wimd44F8H291rvgSYtxqYbLGDV5TTsxcrZcdFBeyTYCG478PvM8zSU",
  "key7": "4gwa1yQXT9cSwJXfc2EmPA34c4cvnVYL7Le6HyfUwZxCWXNbjXmkBLjtZmz7NYX5LfM63RSQZA14WuS2CY9Pu4nz",
  "key8": "2n1U2LsgGx4qgNtDgRcJhMjtseTYqctgZVNFUkJkm2STLrXbKtKxMfjcHeKGu2mTMnULoRxvrySzLQWHotDggQ7P",
  "key9": "jWJ5g7HeHLHR4YGYmkZYsZmF5ptnZjZGh8D5T15ZAQpXBvVZJysYiEv7gdXYBed1BEsVnz3SZwdgR9wdLv5PTXC",
  "key10": "hAtkotLAsKXRhG3Kws6HUG2KyTmhd2b3GkJqTGt4E36TWPmh8p4nPdRyeuJ2Zo87J5gWJA9B9BeejvoqFcM16Qj",
  "key11": "5KaLeEADLVivwy1xHo9UyPNVYivUimZ34fxbmWFfNj8RXoF2jMV5RyTXki2C7ixQCaTvGjXfdYyLnf4YbwMh7QBQ",
  "key12": "2Jpthmpj1HZoHX4jjkucbxtYez8j8s11czUCepefp3rWjYQksxaPMMvFCaBYFoZK2yqjgudiY7zsetziyV8uECGK",
  "key13": "5M3qqhmDDZrtBMiP7RyCNo5SbfPFpjSk3cfPzBxNxStJ67hHmjCTvVu9EyBcyCxfDsgMZp8BkEnnfoVBZs7pH4EX",
  "key14": "3XTzKak7zxsiaM4KxWVdTw6VMLiu6X8yGJtftLuPxiyZQstfnRdYYKju23dR58NgMtkoGLUqfgzt5wmmqAth1MkD",
  "key15": "7MzpNuPH6xpuc12fjgJwLQF4DFMqR96mmmRDgK7oUeVLPnsXuUzXDF9rNo18JvcAzNbEPQXJY4XC2DeLvP4qj91",
  "key16": "576Sn7baSNcxQ9vuibkCobwJokyZvpWXNFvqgu5YdG5HsChvV9FUo3HYZ6qLC9nkPhyfWX8YBd41tHpdi93bVwPR",
  "key17": "8j8dR3maRuV7EUT7PJRFSa2a4c6PxQPzGyRL86aMdntrTXuuFwCe8BCtCt2UArmJBXDWL9vpX8p33eUpTFzoY34",
  "key18": "pYDnoZGt2Mtdpg9c9D43idjDDeeThzM2agVJoov4PARLLnNmd4vCwVNdMktBVVsay6k982kF97gnVUxAqF4uh7a",
  "key19": "3da28EthMLG93LDaBoUiFAjFwHzKshrwRu5qqvXS9iDmSqbiWX3ZaXsagg6DSeJ3gF6BPjqwVwkjXSwxzdFT6eak",
  "key20": "3zQt6BLp6cWhHUUs59shWBKwNutUYeMHSJpRfRAEGj9e8prFLajwhtydYu5ESRkyJui5Wp5vP15a2uggyTfqwMKm",
  "key21": "3pGNtqcitDNVKXQFveUZo22tipjJ5UdkT3VrCTAGW1WFLW1PcY4GM9WF5MbGBrj2dBjfLQYyW9BuTLNKS12j6b1u",
  "key22": "QEKhejfUFfkpjn9ZSR5142i4vWdqn1u1Ye9WBjQFZPFSxm3u3dY55RM4GMjXFgDJTG428h3doxpX6keYhmJonor",
  "key23": "3eaPgCYav5UmaFJhUgpsfGJYfWMJgJYsy1x5UzqzHzL8sqnqHcMZvLkMZDCyVeSXQ1xzmji9ZJNw4UHmzq9zEiSa",
  "key24": "REqkwZFoRYMc5dKdUdJp4eP3Tc9U7rrsS5RabsEqWjua5ToxkLuTnLHiVhVKj4LvGEjtdrqDqow9sRUex7HW2vY",
  "key25": "4hGkhWkdfSWgEDzR54BV3yfs2gEfUcjwb4WKoHaJYSTfYe8RsPG6mADJwj89rTHKedMUXvMzYPqvxw1hGfYxzPSc",
  "key26": "2AJ5YCNQk9wd9p5q8YFYV3PDWRa3fpYRDrHbMRuFoT7eMdEtLJQtE3pn1YsFZTnToPxvAiD8tdUXsbFccAG3CANM",
  "key27": "3mbLiYPT4HkUzndftufudK1eD2zF3C1YNJgQbbJDyrgETSjWJLNczj9BLoLLnaq3f5ghH1fK3XhzAzytnf7E7taa",
  "key28": "5ZWUJWwGosp656VXw6QMNCm87AHuTTwVBez3zDDPGPwGbJkzmkKgMGSzxx9qFDr74RBZPN7gaTWuhuQnCk8JquGq",
  "key29": "gFjk78X25VUGpNyHV6dhuDa5UBHqT9Xff6WsHMABuFPMqMs45vEx98FhNH5uMVYsjrKaYuN48kWiZUZH4Ar8Fet",
  "key30": "5SCaM5nixUMiscXpvijdCvdygkJP4VXENiwAJDken7MAbTYDsv6oqzHHcnrkbtJ5FJFjrVV9oxXr5muhfyvfGq1b",
  "key31": "3h1vFb1DXfcVqZZZTHVgWKgdYzSCg8YPQTuhBAgeWDy23S7p3CQT9aaygcc1ZVzAxvYmp42r8iPMdpqe5HMb8Vjv",
  "key32": "5EgxrWcrxQFkLZwYEcY8upQCpXg5UYJVW2i4Ai2bbnVhuTYCXFYJunwFJrGx1XdFMGyCyAqhYh7x8R3xzGLQbcFi",
  "key33": "2ShH5CqxHB2P4ATVWeTLxat77hFJYrk12kcB5YgNN2yA2VEZiCVG98jEEE8kwYnd3cqznWyXg5AHn3x2LTNKfpfp",
  "key34": "263JACC1MfyYzhFj6oBG5Smwjwz9Rp2x9Za92oM29CaJD785MU7uQTEpiBf6Jq9j4RDeTLm2nna55KQ1yC8kwk7V",
  "key35": "2Wh2a5tnfPzvTtyJXsuZxgSnz99snhHwq5wZRWpPpPsWoCtNL1Zm83QG3GnSdYXhdnfiMgo8VXsCS3tFMmg42Yze",
  "key36": "3YFA2bW5cZ2HynTQ2bMt82dQjf6jUTorbac749cKvj4nuxFjBKkbxJv6W5yLbo7o5zF1tpbQAaoqeNRhMkwkDWaw",
  "key37": "tigPvdvPH4XBrJgGhUE17TR6zC1Ga4tVXPgED79asax4awrgiQUFiKAKd5wvYZqoXD7YyLAisSHePNz24prJzN2",
  "key38": "ZSfsrF2QEv45V7jaxnEJ7nTF6DM8BHnv1PAZCcfnHYuVU7SwbV55MyVx3ygH6Du7LHDSxdjXf8YHGRmWNVMZegJ",
  "key39": "2VDoJCNtz8aEyesqJZx9YLV1LxkcvGynq14pbh3tML1vaZowWELSbHYcPqP5AaahN4vuaZ9gtV9id5Aw1gcY6z8C",
  "key40": "3pLL8CiDUdKEUxk44RhCtsr761juzpsJsqQhvZY1zq2ALmGNdiCSUgFmArAAb5V1uBR4eexhJZaqyCsmx4NGywSC",
  "key41": "3WfcXJLDsvbFbSvLy9NLkduQxMq3s6e5YgJGTvdcF6MZMMi7RTHTi2Xh8BvhNP5t4aGjBoFtuUUScmvDMkYN6wH8",
  "key42": "27fzRdEqzCrYDAY7FiVeFQknf4FjnNowQ185aMvciQhfd7FKCDYdFpTcYBhodDbGPBpTCpD2fYzphF35ZufNQDi1",
  "key43": "2ZgHx9XK68wyhi9HoVcCcrWmqC2mYj6znvMMM5whdkNu2ujGXKq5stA6J5CE4i9MqogqTjhdAmoM2MCf2sHf2rPT",
  "key44": "2J1KVtU5nahNTFQdsfqNcknnkQie3z3nafTzA6qjpKqMr5Q2xemxCS1qnT8aPeUrrf8NeiSiLKUDwjKj4XN1qK8o",
  "key45": "N4Ytf9G4aQB7wMZ9ocdvJPesr83MDmFn7zjGwKr8FuFnxuNALz1avnHuBimDz1nvr7tyUZGEdWyjkFdPjQ3HLqu",
  "key46": "4uDzpuWZvrdMokEAMSC5WCBqh1iUSWjiqTFBziYJ9UUBzuwFnUJ6qRq4bxNCoK31hp5j2ED7QpUzEkAsZespNkjN"
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
