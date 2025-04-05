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
    "4avMQedjuY65tVvTedhwaZaZo3AzDztqCZAqeMLdGNurTvPmLfaiaKu2fbYjGTbrFrBnNsrRJngrHxZKPDorhTAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UkXJu9jnLDzTLwF8h6VP9op9Dv7RUB7VSTtgtB1sApVsWnHjofFQWyZpeLB6C22cphZ1bWsov8VCwx9nQ23To3",
  "key1": "5tJS7zTdbgjADbaFPbRyiVwmsF2bvHvY4Zu93KQyGN3FhPkx5K1ZkMpgxCQrLUBoWEd1Wgxx7bUv8NYZwYq13ane",
  "key2": "5G1S7TJXFJgsnHbDkU2EfJqimDN1k2GzhtfGRzZ7UNGJm5XYT7maD5qr8c75bvbPGzKsUTrqyhviiCgx42LZ7LnK",
  "key3": "3oAdQDQL3tCJyP79aERY4YhYBkvqjEaTuSzvT8n5MpuSfV6JB2F9rWdZgq4FCmkYzj9zwFLiFeKWQDE2SVsdngGs",
  "key4": "5bmMo6h4Weu75eeCtuDJ4zEXzcNQFMJ7kT5kg8aS5YZ9qdfHoGEFuVz78n91KCLZFFYuwcHuMvjssVk6qvu4NZXv",
  "key5": "XCFi3mxDhjpS6yb3Rd5gYJ7n4c3efkvn7iHttut8EgARdT2ExbXLjd2nuqwXwMukz6QLWS9SkD5MGLqFEwPX1jK",
  "key6": "4oMDKvhuwSudq3ASEZbrXJedLNUe7hqaoSc1Wr59NMyrSXwaFBuYndAZGfhvudpJ2hEefyKt4hnjkeBKfzWZNqJt",
  "key7": "5YL6a9BoUrNfxUeBXNMwkJH1dLtUkjTAPWRyQkWUKCc3kL27Hcze6L1hXpKif6jFgJ9brPaXoBELxuUYNa5P8rUj",
  "key8": "5LLXsPTVbcqPVTHGpCY6FYUw9JoFc4mCnX4Nsgs2qa23oDR5Lky8SFH3jSCakuy1W7UsHNhrtPdDEyLWKDYGKDHY",
  "key9": "2W2DKNJ7Y2XiNUYJkfgLngk8ZKMVmtS2uzZVTr2wmEmq23yUEkpJ9RegfjcjaeEAFBoRD6SQdVFrrGQSu5Tm3h4G",
  "key10": "5f98563Hg1bJg6THXNhWoh1WELdLg1B6kAbfh6GoaM7JPPZKM3c7rkkMXmxHNSGqvJu7AxUfheSZep5PdXzMt5NB",
  "key11": "5wUwJg9mcjNkVoB5StcCiEPpeQFdrmLz7JaYDUfniGgjGDxYoBSJ4bVkJfrTQoJuVNFa5QmfJu5Tszic3K4jrjuE",
  "key12": "4eg3kwMnmYpVZ4ns9RX7nfMuTKSWWKWpy8HVHG19iTsSqki2nR9g1YX4x67ZByz6ann7LTScXfTuaZTAxTF9WHfJ",
  "key13": "5w1URRM9NXVrE5dXPAWAQh7CaBFB4oppdvz32nvqMrbGZ2Bm6GfYupYPoMh6wSAW6S4CdFg3i8QSFEF3gPYgFGq",
  "key14": "QxP9Ktsag2SSeX3fKa3NdaaHoKARU5kHfsPeDx8zRBE4Ni9AadeWB2o6QYJXm2eDEBm3jVE8KgPqdpgRiC39DfX",
  "key15": "5LJgZE1EAReoDFqzrvZ2HRWYqTjkaJBiCkaXt2t4ExKnqoypmmew9qsTEed57oXXHRmyYdNuqhMrCUyyjtmLadpK",
  "key16": "2vfruSy7FA6tbq74wDmLHKLh12e7DkuymJzP5ZR5Co32r5m7CNc69T5CmgfxnkMdadmv9qYjGy7f4fCFcQFg1qpy",
  "key17": "3RYaCJ2yXqJ7LC1Q6rC1gD9QsPU45GkJASTXFzJfG6hDqf1FukpDiX2dNgtzFbBHvGYpTUG4YEZbHxsvKvbv4kG9",
  "key18": "eTzdDAbb7hQ8nBCF8zqsL1xJ3MJtBxu39UT8EAG5pUjY8ApKUqGPBe2KAPhGVC9m8x2FH3wjikYTK7bqCP8dvbB",
  "key19": "2N7N2y1JkuSNqrgV22XaLaGdzeow8WbXzjKn45uy1UL3ocjEQivQY6vUV85eX4TfYyueobLYKwST9ayxikziGmFd",
  "key20": "HvJJJPEc7kGhp7ZXLfrU21xjpNpqTu15xeJvUi6Bz1FKvXuVVQQZjbttaBxSoHkPhjG1t293oJfrRFGKbU6vzZq",
  "key21": "2pGwdywo3C8Wapc5Va2rgPmfTQQboPQqT7Ar4dtfandpj5LxZttAvYTRwBrSL3WBGVu68udZ2bHiNUv7NoqqZjSF",
  "key22": "3AZiBZn8imM1JBDkrbpM8CDF4AFoRYGTqwPJ3TLofmNGyQ931weqg8iw7TY45ytysT8cA9pihvduoKwewxMhUyub",
  "key23": "6371iiPLKFaHkqt2YSrt8VD4z8wjudSW889kwTdycLoX5ndDwCWLFa4XhhQ9kPtvz5UPBjn5XP4qUYkfmJksjHXZ",
  "key24": "JjEy4rQrLouuECRZdZB96xthhWxuz7AjaAaZpT9mHur1rg7M4DgpnoZe7aQQ3G9X8APtA8XKFNYyZtzHKjfTtM4",
  "key25": "4mmkCRupMDQREnk317XvmTK7Wu1x9HvvqV2eba8qFHzi33co2B2H4NPjJcWFRXMVaKfLe3pKHGTViR254NSpt8gn",
  "key26": "43Q5x4mgRtU8Ws9CoXsv6VVtVes8zs9rDia2Z2PWjAFM582TQEp6eEoYAbQR9pLjVM4N7X8qKwF7wzYmxhfZDjcn",
  "key27": "5cpunYq9YNwitPqoFtsCtFGrBKSE1NDeWP2YaJWDPdyvG3gx7RUj3PV4dZ8gErBhdKbLmAbeZhzQ9vUWgyAfw9Z2",
  "key28": "3LhqupFF51suaytzW12TdjffSdRWzAmTN1z71phTqXkAiC5ZTCcpB5PWhG9knSeQ7DzzYypyU7Ffj97PUcCkk19C",
  "key29": "3gSiKSBGLbJaYUtE1jwik8DbKoxFxxNA74sL4JwPkS4Five2VFFQMzn6gxZ42CworWTYhAQ9g86AKnZJ3EuumsnT",
  "key30": "JJfiRF2ngMEyV8SA2zmmVxSut2ySQSxmxPTPWriS6afn5H2NJ3RTYRTeTfTEPpuuUjEz6gGU2oza9wcQ8qVVEFR",
  "key31": "gry9NZa9CS9PrNteMeaQXyDfzb3qhbV6MrtQk9wo6CFUhWm9nesjN2995m7VFwFsisSGnVkcD4aN97YcFsP8ayp",
  "key32": "5UzxMSzq9jnVhxFcZSbMEXmGEZknitLnP566R7qXaRHc8iojSk2LCTakHM5dqsN77kwhwpccW4Hi5MRS2hmPSjLu",
  "key33": "3UB7oXaJCiRyr9vewXUrkca8uqxmjx7jKHrxMSo9W2iBX19Bet2nepET2JZfvcij3z3sUEgyVQ4GEuiHW1Hrzvk9",
  "key34": "2ALdjefApAqxxF9piS7UYExYjpqBT6WAV7vEtk31teG6JzF7XXqAvNfsYrviMGG6Y5Pyz4BTdTYKmt7y4KpZNGwa",
  "key35": "3Tnxkei9414Q3fotSMuyv6xgsYJKxewgsnzGoLWsw1YKkqXkBSi3qEe3bcqLDTKRFBfhsyWLeRvNQ4DBxwLRcUvE",
  "key36": "5CvW8yzPhPMkKPAdhDngHYWm5kxRqU3qhatcxgf1tb57zo5sY4RR5LisCsiVFmtooaTKNg2bpkp1EASzVgAbLVQo",
  "key37": "JmjxQighYhUuxMCEQBKi6c1QNwhY3enyJ4pwiyyD9w736Y1U5zNEa7qYDQVLomNRWTMLCnN9T67jykgBow7XbiS",
  "key38": "3Koua7P1AvZbbwHfHLi6nK3oWMHafALionQc6r6LkWhon7eH3Wn5EV4XTU1cmYUBz8ZvSbYJyrQo23tUeT4MZo5q",
  "key39": "62g5YmPMPXgK6mwJ8MXSkASTVQiT9ctzcKH57gUxQzhns667wMS1Vjv7GVwnqTTM957o7ka6uyP7X36hhG9Q2iyb",
  "key40": "2mkfriPApTDD9yp8FmirrC6yCXqWXsTVZyLb6a14w4gwHAxuhvWqFYye7zMAcnR6vakRneZsbcxNxSGBhMLpUCvs",
  "key41": "3euxC95QmBu6edMNnF34XzJBmPzmo6jP8W8gqn2mViARvB3PH2SBD6HHah6DEhLqAv7ELCRvSCS8KXnRHBPoYaMm",
  "key42": "65rQjHQN3E9WQve7fULeFRTuqhc3s2bnTi6AHru7eHq75XgcnowwSMSBmhoYrY7b2EPLp7dnxyjSg9v2GQrbGaFN",
  "key43": "2eUf7WCNn6xM8TheB3Y3ic5uVQyM9cj1TZihc7UB8Zc5GNpfxJ4TUywLqpn6CDJi98vy9ngUQ6YVkhRnT3MKMZxU",
  "key44": "2iJsd6Q5eKQL2nvmDbPYmdBC9rBPJGMjoxLdDryNdhdNx7jbpLZbDArh5ZkBkJ6CHc8ixt75nVFvjNSzmP6Xnot8",
  "key45": "2NXzX8drrkxoNiga7vDu54oKCQcD8mtYDtq8P2D8Nt2NN1ZSoBGyrb2GxAWeRciayDfi2Stv6S2baoaT6mKDFaBQ",
  "key46": "63uC9QvV1ih1wg7mDTw34V7pRdTPfe15oCAwQCAjcd1X1QgnrmTMqBC3iednQrqWLeNb9mLBg7JS5SFsvdWftq5r",
  "key47": "2S74pbqGVERce74GzKan2YwRe8K4AkipXA9dYfgNyBtj7EZhnwd9fMkj3erD3w3ifdpUn3DmhRVV6NogAYRuR3TQ",
  "key48": "3WEqhcDULNLWsU6YRvxHNzdFuHxne7c4pPrturd58ZVgfg6XsM32XY1uWPbusi3Kxrd9CdsL4DBiUVNoPrZgL6y2",
  "key49": "2JtgJifv5QrrjyKYZKCBAFwmYzixMUgdJCgxKfDj6fgWuP121qYnbPKctTMP9CKVpiPBuX1ujaZYhNmuiJXD6JeY"
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
