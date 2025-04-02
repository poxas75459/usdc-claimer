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
    "5FhhoH2ugSPtjRj5zikvYY9etWnzzi3tsrTLJd5JSVoKyKW6atXMyVDuFCuMLVimqW59jpcdshsFuw8gki5m1pn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48b3utu7EnPrcenpib8zZdGbM3CKuEVkz1eVuesiWVzcDKoBL82Fr4goFpSPFCVd6uLPcZFwBMKv145oFghFBhRc",
  "key1": "2K8jq7g36pd895meJPv19b3pyRbKcPcRKizJkz8X2nKc1Baa9jiRCJkDdoLVBMbyuwrwrF95qyV9yfqYnS5eqLMq",
  "key2": "2L3EX2pdyocBCA9Lemp1Zgsm4VVYUVbtLRnRPR2h9F3xK1aPJMxDUL1YfC7Kw9yoTQ52zjxYmv9nrtW1oZMzRfXe",
  "key3": "4V4GUowRjEgNomWZV3Ra5pHvZfUGu5MPrYigNY4tfF8rh8EjcWJZm3mahFeEsFthiDAtbGX9B8BTNtZmQAS2oGMP",
  "key4": "56LDmgjxvGgy3cdB8FcEBzmZVPxeS2YSUPhjMEvW3mUbuZaA1KJ8h5dcU6Z5wZyN9VWfcKXmx1AFqSjvJuAv2yph",
  "key5": "3Q3261NX7L7BVgC9vhmkmq2U9uswkvjS5wB54dm6MscyiB5yq7GVunfktZn5NRVJFMc6nKkZiFzBr7ecSbn4dim7",
  "key6": "4SjPC4mdLQy6HQJPQLzGLpQBasaxs5wNmiJF3DMvGCfYukExArFyiU28TU5jUVGwt3UmYaJ1nZgG1R6pB9YZivHy",
  "key7": "4z6cTA1xqQjnnHji5nH2EyxEQbaPEWD8L6cv3vy9jTVB8kauDdUyLJyU2n5Qii7q8Uv4mZG69CJMndh44vf8hhR",
  "key8": "5EgPSRf1ujAzzwcuyPmTKU78qhMMxQGSrEpWmRzay2z85qMkmtQ9mEUczoVTR5uJD2FqezXqH8FYwexSbFDn2XPf",
  "key9": "5N3wKtCeorGKm96Dw643AiRkYGRQC2BjvpC37tM8PhA1MQNqEWWtyhNk3T9huUdnHBcgyTK5RsE7p8R5vkTdfujk",
  "key10": "2yaD7dfhm3Q3rncYQ2h5bUGXQyVaSS5dT3QrRii62BMbrMR81EmmWdwMKPYSsnH32MTtBVUfAwzXW84uMkBmQJPh",
  "key11": "4cRSBzdDU23T2SE7wn2gLvrScSotfLHJcy8PFDab9qhbdHsPgXKpeem8BSxU7DDyeFbgmyobGkdF5bfFVe9HNUrR",
  "key12": "4F8dxKiN1KGhsurWTz58iriee4WyEPL4b4xi5SzxXkKK2kt3vHppjhPqbyUGDHBiAqHQJgoBHxEujfEwqW7qCzjR",
  "key13": "4BP89Zf2KHXs8mjXjjnKRRWrwDF1oh3ney9Gi6NYarBmwEeT6DsoJJgY1LgVqyiSaaTrAB2U8q9cHog14yfVszN8",
  "key14": "2Peka7DVj4s4FBEMPT59yqAuc1aZ7YbzrRdKwK6ptcmTuTnyBfiuzXTVeTn6E6Bz7J7a1tjbXXjS8RUYSrXm5MQu",
  "key15": "4bb9yB31t9ea1VnLPwvVGAk5jwWzYrXebdKENQfMi5UUVkKdyNmwo1bXyMxzvr8QRpfpSxGC6fsRjdYPhBFNeM6Y",
  "key16": "31bmVwGaKwms89ZNGfpRthjTyNf5h7ZfGY9AZ1HmSTWtL4XdaFk1tc41guk8395kYivqSVt18rcF9UwxhTvG4PZg",
  "key17": "283MNPB2DyEMuA1hfsiXvfB69LqzrYJNT2WU3ragXBFXu7iYpoy6FMcEKKhNXch5g6CYUViXkue1LJRBSrDAoMuR",
  "key18": "4hRHXdvoenQSSe3Pinps8NwSGjPRz8EUXRbtQ88ZZM43aXunfiefMJv9edD558iUtRJwRGE2ES97uXqtXA4q8MKf",
  "key19": "4JTR54kuoP8gJFFE2a9ArWCZJKZs8zdKnKhuX1yLDxZ5BzVFaiMqfRB1koKuKDvUWYaHthUua1sjn4YW683YDw1M",
  "key20": "3UM1cGKwAvGKzP5NyUyuM9XATjsFxSYP51XKvnLPEXZ8UapjyQbCLdZtCUE5ZjXkXiu5yD6Eh9JvZRUHBSs96c9",
  "key21": "2BQ38dmYGXWuuZt7nkFvs282BKNVfi5tsbdhFshhwyPmfDmfNTuZuj2HcZTPSEVbz7Y6kJzf3rq1Nvm6QNVYER5d",
  "key22": "S4XisTDkRH5L61NWHKzecKb48Q755tVXyvsT7e2wbAwKzJXdUXBopNfNmWMehDTNb2b6k1hkECGZMAzp3CakovU",
  "key23": "4KQESXRPoxPQDrkZsPk2WMchjmrrZDEe5Pp1GrXncLbWE7AM4pRRemKWERBuGVDxX7duXm8iD3XPiN1TQvcHRP1u",
  "key24": "4dbEgCESWNwAH5EzuVQ1KSKxvpkoHdCKwF8zgBGEvNYk8SEBKJ66DnCeAWyj3qNYG11na7Yjj3faPKWMBFcVjnLx",
  "key25": "5TDkPvkCohFDA1uwtAkQwN79ZngR5BYGxbmZp9rUbu5yV1V1nZvSbngK5QcdzHeMFrGHdoa2ystHB2tVrRaaoBNE",
  "key26": "nQRRZ5Dm338F4a52fptKmysG9ti54QiEDpz4aqLuY8oedTUiiNLa5heR9bUAxqikwNyJXuHMgshR9f3brgUii45",
  "key27": "43sP2KPFz5mgxnXLE2nmQw4tQhhsxuRyK7ZxweYeaaA7c6EG33txaVUZBChxfK98kaPdgTLuCUsmtDEckkoPMoSz",
  "key28": "5YPASspXHn8vGkzwfW3B2EbGoiJexuQ2VmkEooakMQpdgMMvsPBrBAXUQgzvGydEEm7xiCNr1BUDJa6CH4hM3Qas",
  "key29": "5KLKkMTcYngmLfwWLH1xrXcAigQLzNoimVy3CznPKTuwM8bD7cJutMJrkfqpRuSwKkVnD8LNtiJpndUUVh5NjFsn",
  "key30": "4qSsyPXmUphcJHuzdXSbkfpmhPVkQC8vHQynewXW6BoJngSyb74Sm8N7KEk1e26oq5zBAHn1Spt9wh65jLR2ZSwd",
  "key31": "7VwsLe55zuzYh6fVmQk5wvaFmYhDHi19ZXyU1SiYX4Gr69NJR7ZmGdwN1twNnjfsiFuBGBDnkH9VunoF5qMSjXA",
  "key32": "5MqFe62kgAZpX7dAuG7bUhsUuPADTfxhE9L7RAwJ5v8ASR7CB11upvs1pyiJvqtaZ9qA67KBkvYAWYeLTkK29N6i",
  "key33": "4aNgaV2Ut3GA7X7zo15jN8qAnJUowEgDiRJ1Qwqe2swudoeiLbyh1A4jvoyELA7UvbVc4dge6tnyc24Uk4fWtJvw"
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
