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
    "47jB8GY8AKEy1JbmzzXDEaCNZXzkaJXwSCWBq3t9ZoSAnQKVhhgzRWzKVCrfzDc8HyLkuymbgUx3nZF7hJPb5WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fo2ZSnDTCCzSa11J7ggoXatbbrCwvWDhAXdZG1jL1AZ7MP26mC9qFZ2nA38XtW6x4LDHmqe3fNqdZmPBBK5aBUB",
  "key1": "3jGzMW4vgVot5pWgu7zAP913wMpAPNnky2Upe9Rza4gszWqxc1W1uRK5e8w21u9BznEhf6fsPeWb3xUuzue2Yx14",
  "key2": "5GJuAfAr8N2c9KRr3UGwvXjj8tXxzj11KwJNWQqUbN5jXooMkLUR7Mng38xTrKig5qNSW5jYVyZpbMTecPNvig8Z",
  "key3": "DfSDdV7Ybg31V5tk97FeAA5uWFMRyeGdFGbWSxeHiaExUSwRAciMfeiHHguepYeuYphUEwfDWxBgN2HDvBLZVN1",
  "key4": "3kb8fhmDmUTXprm3K94qS1QiRQQU7QaRmFjwfxMGhis5Z9HNtugUphrwiB64E1FayV4AnMCcnNbU1cjSjVAcTQHH",
  "key5": "5Sok46znrjEghL7vngQXLf2mLvWMPtNeWdVHzoNRWy8BMCGdycScMpMC6NGfXC45E28oofjatHoYfQ4RLCSK5oAb",
  "key6": "3ndbChGo5bP8VQXxTzk8yE8Wm5KgRXD3LeE2dpMFUnNVeDF25uzfrcjjSnHTyV6XVqZ1Vc7tAdZ4VT7sypgFDaBs",
  "key7": "iMQD97LzUSBXrXfdcfcjVFE6GAmkmeA1kKLKNo9nPZzoTTeEho4aecdDVSFtbZGrM9fKP1GrmLGY9Bvqr2EQAwQ",
  "key8": "UJt66XTrAupBuHDSHY8ujHpbNxE5eEPhSjJF4z2FtxcAJzsMPJsAudFUThs7mPY9bNjQYMA7hS3DvVLDgAQ1yaX",
  "key9": "5mRuCuroLoqbBjBCZgcY2GaEuuFCpDFMEKvZUWrJCk7n2fNCTNKnz6x3ne1TWDF3ZYbpfXbzeTRqqthq9g3SjDG1",
  "key10": "2jkd3nLwdBVE66EL8ttfTxTbftrd3BsdDNZNqb8UJLrZwEtXRKu32J7Xu8tnRddNfk1TPtp641KjEhSDgNpSbN2Q",
  "key11": "4scqhYbPJait9qQd4A9JwDznf5MutGZ366TLy3TWbQJSnqbTNaPcyGG47mupsj5vQFkKsMqoRbDTxHRmngtLfhqa",
  "key12": "5upNe37FsM2v2GLEyzVRtkZ9AqTJ2MUh9V9tQ26fhb7UowoJMru8xz1ajyh12K5KhiaVg65NXb6vPahUts8epkkw",
  "key13": "2kXgf6YDjf2DA3JbCMwraiB55UPJd5zQXfEshW8NwqjcZDSRwawuigVtvgkvBT655uEG2p6vuMpR6RND8bNsBarF",
  "key14": "aLDnw8JcUxKu9bT2ZUryQcTUyYba2Y45Bmcn7ZhLJNJcHoMH9bJscStsakmpo63pWLchCvJnue9k96J7jkiHnGp",
  "key15": "5SvvQJZbZZe6qKAa3UfsZofD6SGcfmruyixHRXkAC7if1E1Z1yk3MinX1TbVpde2zNkKMVxigHENdoY1PXGKQNTA",
  "key16": "5yVrn4cc6EYm9ANqMrPipjMQBoQBjEMnfCSvb4sajHQ44shCSW3GZJdc5TuBYsM9HX6VpNHdbNWiBTr8DwC6Mf9o",
  "key17": "5qYKPZKeSPgozuBsxpkwHzzn9ottFDFp3qRmCfPqBB1rCmDkeTSo2wxySqGbbMFFJCc8kbv5rxTdSu38gMVuDuUp",
  "key18": "3k5SyB3FibZkeRdbw7y6pQamVoRPuf9HPP7yvrBJJhq8R9sJrXA57AWdnkv7RM8ubmYi4Qv2Ssv7RUppHSnxcJ8m",
  "key19": "HUVAsPZK3tkgyRage3kb83JHBesNYoHah5chjhAuGMc6UDpGSYg9X2wK745rqqWiGi6jDMYB1pZPgUQmAeoaqHK",
  "key20": "3BYig15DkNxv7xdVq3E3b3kvv4xUCFRaDjS4R3M3dRJAsDT6ykrq9cTLSpirQVEc1CTufpaqvvFHEeeo35i9Bcvr",
  "key21": "46wGP8xxVXH2r7SL2weaBbDGN5NRChCxA7YumkXvPgh5RGiQBV7DvdxBSoYJd6aBCGGAEczsw6SbSYwas92gkMLR",
  "key22": "5g7Uz2i5P6miCDYFEQ6Z9zHipsCdKCtdAQZMqH52f5VXkPym5XiCD4WVnT5qEB5cFYmsj6ZXjJNkhoigjbUaXs3q",
  "key23": "4tURgxHzvCyU2wQnDtNHdDNFmy6J4G4dMHJ8JzARSTusKLrTHUPLXaSPii2D6bPESj8EYCVi1ofF9fV35J6wj6wT",
  "key24": "4p8oVdKTwHEdYeMaz37ZYAYyRbGJ147HeomRr3fMFTvxqTeSwawqveTA1XzfZzocNqeB8b7BUVG8jeMrUVzEHnyY",
  "key25": "4hAZDejiaszQMzeM7SWVjPMDmbwewymcLHhgtsHQ48z9N8nhVYDC1PdyTvAZmVhJtmvToQc7ZN8qk2Htqm2TFk1f",
  "key26": "2TRhHEZVqawxRmCAKToPTxoHKNp6TZiuJ5DLKU8xVxDb8zu75yF6Csf2AmeDL54sCNdgTgMm8DQJsS2UNuS3DmWA",
  "key27": "3YZJKmqERvYaRVt3yFsUrkNwLSybs3asxDZkc643Y614Z8haL8777bLXnkLhbj9AjmMZMShNDwaH6N1nVZZ618Pe",
  "key28": "4n3oUchN9TaEG8U7VEf5FtSgKjasuSYfZFHzKR2d9f4Yyvzv6LJfiGAkTNSphbE97qCBx3fRXTzteeWXkWUMsEUn",
  "key29": "2o7kEXLXJmokh5MbgasVwRJFwMY3zTRoX1YFfNmNYczBW7RjB4NnEJuxNif9hJJ7HufpLXjA3ehwpAQ5kiZW2Cao",
  "key30": "4X7Wr3Xs3yx9rmRDkha3XniUVj57GKQseBk2UM9CF598s1ZGyNmsG3aT5unz9S2oLu2zjec85BastXgj3jz8Hdvy",
  "key31": "56YXhpgmhaVQQ8H6fMJYtauQW6D6pczSH64aZd8znwCKkVSmnz9yBBVzLxQYqsAqGPMojNDeQccJaDxDZtZjU4hT",
  "key32": "35VzjiuxprsJqjtzE4gSEk7ekjPz3CXu8Fjepbftwab1iT6yKS8ThdwrY4sr7MN1xSYNWUuGTdn8jrwAKJwTDgR6",
  "key33": "5Nmb1iQ28D31M5Xi7Z5fAj3g4grkYWNZPzgDykBmpXo6LcdTQf5TFDzcn2Quc2pLaNUUopYQhwowpA2jqdJXWM1V",
  "key34": "2reDkvzsK8QkDfEa7rKy5QkUNE1rEPknZiCvL5op61SputZ6P2qAqtDXMzyWDTnZ3tS6NFu2TvgZKRTJf2SgbMpA",
  "key35": "5RZEXwEfZEQLN6iPEFzQVxALXV7CsSQnwKKYZuRRWqxSMAMzRsqtuEuvDSC8KYXGsVC5HVxTY1syzjawiR88esJC",
  "key36": "czzSg4uc56RizuApLv9RVCLBEkMdAFtMMtB7fsSPJj3nW1Lt31wZTHWXQ5M3LYQCuwe9AY8z7mkNjkbJWgYPrZD",
  "key37": "47zSb9JmxbfUQVuwSfQwYCNjxbwYt1JLpgeX9Cr6SqLceoaM9HuX6zgy2RroXZZZboUXJTL42UqGhrNz9Uk24UfX",
  "key38": "5bfj5vtaqn5pyqRm2LJRQA8hjGLdcmD3BhT2s17XKCtSVuDTAg7wUdD36QHv8ym9eMqHnKc9n5ibGoTc5LdW2aRm",
  "key39": "4GjCbi4EAG11TWtsxd5MgAvdpXHc6cQgqpfjB1dKFAqYjiaexGx14yvXGCC74JwpABK2xPoHEt6k5R7SwmoeRTJm",
  "key40": "5CVEZuwnWUjm814mzGprzz1p176SRR2JS6CCqyvBw3vMfc6sHwv5QUchSCdWbyka5JmcKjo62Tm846xQC7CEWk5M",
  "key41": "54PgymDQQKc1dypEgjA8bxLmfWYX9iSrthxiwtTAPcSL9umMFuce5dsViun2z7dWJPTLZZgo757hgvPq5vn3huZn",
  "key42": "WFscZS2K4jioPPGtn7kcmk7TYZ2bs9xPMDNBGmN9SV4tDWDFncPvqDFUdKyADDcWpG9H5d8SLWURm6cT2ffKiqw",
  "key43": "2V31MWEKif3XWuydb42HCP5t7KFHrn7kQPpVVogiwRaVmZEz9d4TiWzYdZjhrKs6HWoXT9XeYMLtkHi8RY7gkGrj",
  "key44": "4taYcjBDsmGTf7fBQT8pqczVL9hNAXHkgTv8TQ53ssLPmqUz8PLteFSk9AsLi4ShFjVpee9CNZhpP5zrraGNX4o6",
  "key45": "59CHLzAWLUykS3wf3WCnx3YQ9FdcuK7xqtBPTwPLwnRbPtF2FN2SC9HwPx4PiQyWTuTEHVLZDsUUKRtjKaMQ2JFg",
  "key46": "3FgMkzMtsumAX3JzM8Tzb7YrzxV9qgv5qxvG7Xcz1iWSxdYZwm1NrEbSXsYVCoJdtuwL1uuBTMQNg2eHPZnR6FP6",
  "key47": "5eVcjThk7Yni31L6TSuMzKNXPb4vEV1ynKBZ5f3Qv8HFcrnZ8u6CC3opr8sZHDeytpXwtmqEyAHadWZVCnNAZFwD"
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
