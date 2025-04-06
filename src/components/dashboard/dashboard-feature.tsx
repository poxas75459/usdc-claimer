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
    "5qZkxwnrMWZAKwj7Ziqip7x6LXZVuhauf4kbkyJGDsdFnMUfUSzg8mwyseAaA5fGMSDLgxJmYZXfvcRmba2J3qmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WZEFbtE1SZzsPMTboeCTWkUX9pGhLzmDuiknyxpX7M52NdP9abFQ1GUHrBTGWKmeoMNyDUEz2SnZtqAMcZ82NZL",
  "key1": "3iCxbYv7pmPBimXT9C2Rt4Kjb9rKHdrxT5rSuvjMfFBFMnwcPaqA5aF9yujv9F8oeRxciW61n6BjiwY5Dh5D521R",
  "key2": "2B1mjACkW5oav8ADuaK874pt2Atz76KTScXAJSPyepEs9qFib9V7zsRsWWe4UxSVb19f5T7HWwBB1ZyfvNFqBs4E",
  "key3": "3EEXmcsm3GARVqMDPinD4V5JVmG6XeaLiNP9RmRL7fGZcABBdo39qxNraxEVgTrHWZ6E5qzhaVG2HAMZ3FXwULMs",
  "key4": "5qFW7oo1Y2iEQoWy24gmUbQRbScNb9abFcz4t6CjBSwZgaXS6gbeXirs82heDnZc46NvV3eh9dAXHFd3eA63N45Y",
  "key5": "5Mca2wru61Rc4W6HU5KM277MuM8gdzP64MN2R1ZKWFCmSKHDAXoMwf4VHGbmgsGYwMj9rECT4ziDmy1YiZhxZ8YL",
  "key6": "zunYGtBrzwnAXNumuDshQk2sK9CD3ovA5BV2M1kP9AUPWkTCfZ7yvs5oj8gYbQ1WsVvQHiPbi46pWbtU4zWgcf8",
  "key7": "3yTeLvtBZ1irKWiRixLkKCcuHoPmk2TzStYDsjSeyLdwLN5m7xDuNkL7PB847Doim6ZkCVMnF4oDKUzZuyiJGjpa",
  "key8": "2yVHFbXRfH8Kk4D48S78zrG2CEMSHXERngJjSx3ZntcJa5HsoF4SF8vcrfRycUZpwAhzssGWoaVBYn2W4ECbLy7q",
  "key9": "4gyVKoBb6PwY93P8mZJPbk1Y2tyjFsKdEBg2hq6zefnCV3HqSVTXTYHv2sd7Pe4AkoAVBRgTXoYM5hV81qXCN6fy",
  "key10": "4BZXFzEXDacbnuS5xabYnQ9UBBbnPFq3fHVP4YYfCLycFF5LBtMTusgJ3aefNjpBMZuqXC8H1NoFRiqhP8qoc4PA",
  "key11": "3fN6xf8rn9qNJDwsJw5za1F4G2oxNVgxFK2cBNW2TsPeCD6gbzrH4e2TKuH89ECbUKbWmCvsVCrQ9Jn2nqT2esDn",
  "key12": "5eq8k7dXojLYznyy4kV13WZQChK5a3cCaKTunzp7xNwpm1z5aeBgDJR2WTp2DSr9P6jcv71msqB56UHqJbPjVarv",
  "key13": "4vs2tqm1YBNg4ab8g4bsxqt6zYPAM7V2PaLiRw3B7wgn1y9tTYck93d5SijJE9zdhHcybvJ6ZimZCRSL9ForPLmz",
  "key14": "5zRJZN7Rbygh6zYAtf2Exv68GwHWZz9A5ACtwJ988gwGmG5TxVkJUDA3d2sgtRtoz8kfKPEkVNo3HWn1KqcLDEW8",
  "key15": "44SHmtMV5DGGg8cNCZjZEEJp1tbTsUQfcLFWnzT5eesW33r3zYhm5CR4upfD2QRd2AbjCyLEsJJg2P1XG17paVqf",
  "key16": "2uxcjsMbcuj3mqmYMVLEqHFKXe5NWBYzuVRVvmrKZatruyhCJyegbxsMarrncnN5FtGMYTPH8dFp3DgPfgfvKDjG",
  "key17": "Czotmzi5vmwNgpp3MwDRfcyQWGB171E7fkRrUt3DUWhprSLLuBciap8MED58Y5YV6ZNuwVwgVDNA85gbwCuRoma",
  "key18": "reaFeJaposR2MaQr299xCP4sR8RvHbsD7iLznjSmuwMeTajsxc1zpEzSp5EKE7SKZWRKivXt72Vo33q3zmfdTPe",
  "key19": "3vG8CBK2cQND9CcrGKd2CrGvd464NFJ4NYTu4DinF95j1f6QripDg1SmK5VeiqMdZBpUBGT36XSD8cNhW3n6DKby",
  "key20": "vnzXJDABTimMaX3C1reCmcsfXZQAzcMCsDXt96PY6W6NHmHyDgKBMcSxKV6k3YdPQCpqXpdEN2aJRGLZ2NJEVxH",
  "key21": "8Ygnc4NpzM1W13BzoFAwuxc4vKbihnMhbUfXwrpYn2iaRGgxeHC1gUUBEe72wHuVTydkmYLimWqmCUnPsq14kbt",
  "key22": "uNQs3XUPFZ1MmMR68xjQEzvkp6FhRCxWQ2AttBzVZoxgUF2w72idx3fdJg6pYRy9WwuTx9HrVV5bhFqCBQyMaQp",
  "key23": "5Z2XJA8Dsp3kfbsRBrUoEEECYdJGGdUq7bDnW5YueHRbzoT5Ssyr2wuf8xuxQa5auWAZuQFF9JuQDSymKqtWgakc",
  "key24": "aiizsHipKzedLWpS52Dzo7QbyuavSVqw5dTqrNnMegjPwG6BWxuWEPSwZKiAoYGuK4BDcysCWor831Xi5iWjD6Y",
  "key25": "5pXPaJ3DqyGmbaJbzQovG3J6d29P9tchXsEKBBRRPnE3NnNgRELXjnhqN96BtvAsw72zSxuz322wSXpUx6ENj4Cc",
  "key26": "3YpVb6Vh3W4hm9m88EqMzLXYjhbpx7axCi7TU7KGsFyLyLyjfEy8gkigf5zJGAeaoh5HHAmRUynURa4EeKz6QwkM",
  "key27": "4mhKBSFyNnZbfzynYcGq7UpLt66B8ED1PwzUdRrm11NXR6RjBj31hxHKcBtXpq5HVYD6FYDgsNwVfSnjsyDbNWsN",
  "key28": "4SDhYfE9MoAWFE1Dt5mCyxzCKMVwnBjAMj5dDXzhQVenvfwNwwG32Ct4s9DwNi3K5VzXqNzv2NrRrbw4ZhSzcGPG",
  "key29": "546pjVrTvvFkA3QAALXUECSrjtCecgXNbMZkK7fCoieVNtgxSBjamfbHPSWZhmSZAitJ4zYZ5yzPaaLi9xDFZ2Mn",
  "key30": "4XZMw81QtV8eF3deCABHU9LtDsmW17SzceE4GdeFYyboe6izueJKqgCie8TjPad8bmh9yQsxu8wE4yKMo48R4kWf",
  "key31": "4rHDs3uU28dBSD9DxeBu9YKnaxz5yDAFPwzFjG1opiduS5ojE8o6eV5Nhs84TnE9HYa2YFrMWgRF4xnLR9JUcna6",
  "key32": "5xcxLu8gEKhmucKaE7dPCJ16bDqud88GVC7F8dTZKroXowFhUQbVKGDVVebG14j7Ki7RMFJNZhTVcXkbT9Bwnqoo",
  "key33": "qx9p1YbuR2CuKS3Wh8MLGsANMb3QQUFuJbViwYxZrJe3yP1V5Y8triyAc2Jdy3t8AFHmbSBoY8riK9foBrrxxJy",
  "key34": "5GTKA7pv5m3LN2ieZdZAj1hEMJTh5RVx5FPpkSM9qW713zSYoX4JuAGn2AmB4o3PB3QyX2comFdEA28ZzYbuPTqY",
  "key35": "3oHJ1E5R2YUekX1oEL9PWfv9oTWx199MF6yApnymXjwzyER2bQU8QSfufJvfrztm2KxW3Sz9mUJVJEnA2hGheBMe",
  "key36": "2SZFG6KNis1fhrjw7HH27jpjmiD1JcByBf8nR56G8cMKnFFNJYsJJ5vAQ3u9JQuLjFstAfv58BvStwuW7u39BiJm",
  "key37": "3RY9hgqpznTFeQfg2Y6GUkvbdrtAwSYqsndD3RnKCym25b6QiEAw3HioWwZS9R6djBCE1vde4oboNJE8Z2EWswpu",
  "key38": "WeRTYkqTdSCVecc73Trov3WLxWxgkk25AsBsbFrWf6CPnahPGAHAQdiiY9bNN3ELEn96C8V4pJmG8zed4txaRBf",
  "key39": "3eujadHZoX1267G1eTV1LSd2rbiRxJYSZKwJx7SfyohteA5WktmaiojxDsFuftsxFFLzU2uRta9bGPo4dqKC2Avy",
  "key40": "4JfXnjyKgFuaV7ozqojiRHNxH7murhQDMT5yyaoUMstqkmgciyF1WqRPsEYPY4vB43Yh6pBvVTFNDcksUmGyTQCH",
  "key41": "6eSP88nPntmxdWSaquNRSsuVMAzi28SkXbR5otBrRSuJy2UAb89ktYpWiSgzVStGLnPUwVmUoTokzasVqQmxrDR",
  "key42": "45LRAHw4Scdhgqig9V5wJmTqYPEPxsAsJvroYcDjBtSNcJnso7SAP3E92r1bnMQpAZ1mBQTDvGWsUGu9bHgNzVVQ",
  "key43": "3D4jWT4UrJALACe8VmMp5BKPBWVwcZQti3qb8gFVfSMsBpdMqK5fwzDBN1kkCY2y2JV5G8wgjzJ5vdAi2emaTdM3",
  "key44": "35PiqmYX7K98pw1s4N5M5kcaZxdh7iqfMdzoJ6gn9jdsASgYCNfyaoqf6vfgym3tXoqXwjQkLphwvQseD9Hjy3yJ",
  "key45": "Z5qyCvoe6HmVuT7BswvQuss9GdQBu8mzcT2Mr7ojMqUSwRZDeyJHgFukTjwcJwsPE1GwPb5Ze4TXnXiJRqwHdZF",
  "key46": "3CzQrbfPbtTkSa3qP8FTmiEbhkeBRzpM1NGnX3fp5b8J54ivztx4vGhLg8Y94xVbPtaUWNiLbKkPYrBamiGf8DeX",
  "key47": "3tCoipbYzbWAokzJPredkzxtsvn72PBxCJvRD6LiNLS6KPUynt7Qrzh2oSM6rCaHZynpUbs11qU4NpQ3mbx6naBD",
  "key48": "4tyEpRoRYurWZa9yo85gVe1kYNJQtWS2ehJyY4FRHJwHG1uyzQs84Zy2XKbVqNHNVmFS4fvMnALikGAaJGEsWXm5"
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
