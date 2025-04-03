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
    "5ZQXdWcCnV8iZDAgNpL47XdoxFCgR8bCoGHUNgH6iMFjaZYCDdaTTC6gYEV5ugozVT9VmnpL8W65gxCf2vAZbuN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4degBzSwAVcdA4fas565QiVTKedQoT3nRGbuXhnRh61J9W9dYFvefwfmi6v8yEWdR972uPeQP223hYS2kcxGkjBr",
  "key1": "6Sg4qHzJU3Jit5pFQevEkarfCS3GTQBXzhX8WkEN5My1ArXbuafxhNebG8eAT5CApZ2kNmZ6WfHxMjZWnsw4kXt",
  "key2": "61nv3b8zmqMsqTEfERNSrJFcmXdAkzdwurHMymBAFM9zRm66mGPKfQ9DpzfMK1mfrpvBiqw9RU4xNZvLiim4de5Z",
  "key3": "43UYoKf6R87c8cy4e94njcPYYfHHvMFjcQnFqHJyuT4MrfKdU6WYyUDQVtYS3E5YjBifzJmrTfARvsST4TsqurY8",
  "key4": "4CtmwRbBMkJDPn2mN7NiCZHVzh6ezMSx2NevZWtpAuYbZuNyRkwVbyMaQAmiP2RwKXNsqFodxdukrKUsr5egFrfw",
  "key5": "4KuGHAnC5qLjP7ycZ4U5KJPHD23qyWhC56m3yNWyAteQFPinukfqJ6gSDryzjLT9szUgkiaeZ1jNnCmu4EA34RcP",
  "key6": "27BMoodkUq959Jh24TyJLFKgFQEdtT5AJGumPs7YdcRS6hZcBc6iUyK6zMhNgBYyUQZgKiGLn4tVd3ViBAgV4jUf",
  "key7": "5AxgJfdYYusTfjucmDAQCAP8fn7AKzKBzQA5eKX13VeSYXUoDmKdiBz5NDk7Vc1VdcyfDfT697kpirQKMFwZhhgY",
  "key8": "5ZhEMrFNTjQAZjd11TPWoMuuG6FtqGBajXibQ8ZWZJp8jou2CPeia5sYptqUPCJFG4YPq6UYgcwUhgfsdre6Nb8M",
  "key9": "hUHCsZdQ3hPbFTdNZdTPrcVkvg5kNXR12wqxsLCh6ii31wPQKmRm9fyybxBL7VAi6eHh7YockNsfJsa8DBUH4kH",
  "key10": "3HZMrg7vikbCRo8nDCB4ETUuYdorXVYGezbPvxAdXos64GTT8aBcURe6EBFoLf4zJ3BkVVKwCAaFWdYFs3iTKtXm",
  "key11": "5bsqktV2P7qqgcK8xp3d5fXdCBzS9geGNnzBPVnktLdiwAGzFFuDzNCN8sSFjKFhPdjZNcn2At34R3aS3jcb4SMv",
  "key12": "2h8m4JFuyrSWp6hZTUUUquErYGTATeVp1fjNfHtoHenXhBspJZTEdEbZCbucoutcghScwUbSUN4thut7RihF5h3x",
  "key13": "3GNUrdJ5KTs4zjvt1PtoQuuTzbgbYuPjnxRgxqMnv4Dr6ysRS6rE3GhRY6KLU4APmyKDkHJojdh5EBME3CqU7fJx",
  "key14": "59DiCNcFcBw7X3oUmtBXB7UL9xKqyvVzwFfSAfmTmjNw3eTUDZNya79bdboGpYScWvJ5HYRvAt5o3FMVN4ZLmUEy",
  "key15": "3uCQ9x3TFp9jhAco7agCj5xqekmB9BNXFmDp2Js6LcJub6owi8gJaiKtTmu6o5BUipeCBYCuCBBr1vM6xGv4muVp",
  "key16": "2hr5rVbMJFHzhsyHqDxQocPRw47DqJtcUjVzzm3wrkVCDJ4G3SgvYWXBQCsui8hesKcnLV9rdvgg4q9drQG3mmbp",
  "key17": "4TWz2RcnTf1D8DckCjAKUNf1q8RkvXyk6gG3zz7Z7hVihmPV48bejZyakbApXknkirbxRxBtWp1H3krYk4CLAazE",
  "key18": "5i8G6qnRseyP1bDpgrMo6QB4cc5FScndjYcT1U1JPDUQF4MPfjuvxujpsm2UFRm74iUfcFHiz6XMTfntP23XmPjX",
  "key19": "51gvFyuCoRYdCWNRsMoF8BZkgZ3YwfFbgMcitrmd4bFFGyN1ZfwVHKz5FTVvrDkCFbty9221ifqFFwVzepj8h3bx",
  "key20": "9mtEP2AkUFP7ShEzik96vFj5Bfk1TLmtHuYYMvFnEQszVnHWwGW6W5mfPLn5kWCMSf91KePVxusYggHGznj2VWB",
  "key21": "55g6nV8tveAFyrEoEANM9nGz8G4NXcT78btsR9XfywMHvHBLfDkza6LUFiZhfQgTJKN8ER5h2TYwtcSriVAMm66u",
  "key22": "pHTGKzT8x9DkErrxixVct9t7R9To5eAChZa7m3jA5HE5sTdtz32PsmtVXWFpB78nabXt2N7HT23jk9CF4XVuv4a",
  "key23": "5AkhjLZDvT9MaBv9xDnxteutZCdsfx6XqvK3LhaQTHjRhCMS9YgtNcTVEPpie6LQVVy3VM2RcDLGmYEMYodZhQDB",
  "key24": "No3612hDYTdLVyxtrjF5E5NVp6KnvJmvMAVXVdprqmWgZK9X2oZcDfECNoTf1dJQKNVBaQANWk6ACmrbsGaLbsb",
  "key25": "ZS9QE4K7JZvhSaEnzkUxUJ37fGjoDf8z7hk7KmC1KfN3zWYZgtYE6msBkJBiv4LQ4S6vvwgUT4rMmoNZkxB13Jv",
  "key26": "3kmFFjZriDet9ZyHuh9KeRagduKidAy19NgBzhACQr5Z4CTokaViQWaa9CreZ3Qk7vJfn7xN8u9omvLfUG1S5NsV",
  "key27": "yPnejaU68XCygPfwT2USvsxwABW9bcLZPukDDXQfL3p2MCr7j5qoqyY2stBjVxa6BL9t5KJzwnDUpgjLg1qeob9",
  "key28": "5xkDQ2HMv3rKwiEjpC6s51UkEyLPJZvNtJEDHr3SL5qpTFj7cK2NjtYmDncaGZngc37KERxg2tJumyhSWZF2oNcY",
  "key29": "4UTrkL2GJsw3cMzPqXD1xCeBuRRbbWM2i9LecopU88pzQnzaE1exCYCkXakgfgiWacLgzGGRgKktLYGZBze3cxKa",
  "key30": "4jirtdi3mYxL6euhj3PGjzCwePR1RVFZRPA42sgQWiQ9kv7ZGHxfQvQXxw3QtuzLoyBVGwELxzwuvgf4VqMxE1mF",
  "key31": "hoY4RfLHgVVPyUBP9HCLs9hWNFgJCZLthv7vv65ry43UccuDfPVD24kAktnuQdAnuHXoq1jB9LuLH1thNuHW8Lj"
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
