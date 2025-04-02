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
    "wMEHJbLRBeu9CHdwFopwpJ97LBn1Fb3h5mzYTdP1WcxWRsMadk88L82QYJ8U1rhuPDL2vdwaXQe1QPzJc14PhPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KkSupPZXY8tvRU4hFvAUbt7LHbexrezUKYbyPLsk1Avmi2MxMvG6EkZDPU6cL1RLKmwF34cztsCSXiN5upJw4se",
  "key1": "5NwiZetmwNB5TjPRqhk22q9v5vPzzd2Qx3kRCZ3mL4mGM74niV3Cybok9MQCMAbPLzU4x2fxVyBTURR7FhfynG1S",
  "key2": "3VpcimNkkpptfAVQ7BPPqFN2LXQsciF4zJ7EE5iXFsxESHKD3iiNhSpG2hPWjsJuqTGQV28czoZ67QzshspBx5pQ",
  "key3": "2cHtg4w5LynrrWveihK4JcqZFaqojPPyX4K3BGaojwqvNYR4TKS42uVWC2ESTaS3JEo94FbMdUxHAGWq5mZVjb9q",
  "key4": "5MtA8CU5Cx7vgNuf56nLheqTNDwAF2ot4KDHPm8zqxHWYLvi9raY2ZwfgXihNLzCa7RDN2kebcFLqi9nnCJNNeTN",
  "key5": "wMMmQ5fsoxixx43qvna554dqR5mSqNkdvkqSMPRqnDb24sj4gmHBojcdoHMhemsP9ZZbBV4eN5EDQ9RqFMhpCbR",
  "key6": "36px7rpA5idmFLoXjhQpvYsNX8JWYQY5SLkwfWz31G8tuQKXY3HF1BG752WrzCVhdZd1FacvRuwtrGksPY8aJoHW",
  "key7": "5FFGMyKfS87Kse3sMqWyu5QcxU1LLkYCTYgN2DthuEPNdUPH64nkrgFJPoDWzu7dsUpasMuaEZH5DRU9R3wZhnh6",
  "key8": "21uCZwACCApfxz7pSatEoV91Yx9mckUGfHiHZyAQaxdKwPGmzZBe81ZbWuk8Ybr4xrPdhZynrGinqujprJ9ptDwr",
  "key9": "3ps5KPpMZNhAWBuRtnDxtrMQmvwjSChemWkZv9u2UymY9QvcTM5kSod3zbHDRP1WkYmyTtMaiqNQsQtyBU3dpxXB",
  "key10": "4kv1biYXFXvwEMFwjAPZAVUnCQSHSinfwUX37omjYVhDYa5QbGtZmSxLdQMKBLo2imZUd5ZcKx6UpZwtGmwfjV5M",
  "key11": "3gbbbBguu9Hus8LZjYp97e1aiM4nyz6xkDWXfhYDaRCWnuSPjjUFfNF6jCYEsxDwCDazh1e1962yqaeWTDFw9EyY",
  "key12": "62tUnk6CdX2GDYeCCU9KRmtn2LzwYoJ6iqeHxRkUiFVxqjZ5cDLb4XdSW4c23jcHdjy7M4xfsaccU8FEWhpuLvx1",
  "key13": "2o81v3zuSsKiyWnoQjxiNEMgLg9rEAsmEyJfc25scZWr2GkCY9h2CLK55Zuq5ywu8FYTz8zWJqxVBogTMJtE1XqU",
  "key14": "DgcwdQEnsqoGtGAxxXZpYTpab44fe1Kc6mNdrSYgojh6oPkmbanx6XMXJcrr7P4F6uuQ31UkRFShXEwdQzRCEYu",
  "key15": "2GqzQhaXDZyvBE3RsPwnxCi69B5WqesX5zagFSb7A4HdPJxiwhVysP8FHK8wufdCiyp2nHzdwyJp35mRGAUCTCeA",
  "key16": "2JjCoi9awXBfFMfRt9w3diLMkVmfEmWVsN4pgP8FnKuwGEYp4TX8ireLatNDFKbQtc961h8N1RU7jenncTMHmYms",
  "key17": "55cCHcW9QnitVeJVNhWJTTiUxmSeuHrbfKMe7ekTg45zBSgRpPwPJavf7cHuAF9THB3yVjWDjQjRkNuM4oPsGxi6",
  "key18": "5w6peSAM9iUiXi6H5hA2i1BfNMDPnvTxXFzbVezhwXZc1m2yj67bV7jc5U15tgagWh2PUujcoJw9UnW3sxptYw4E",
  "key19": "2Cj5tXXAaBXMHz6fJUD6CwANrgWFRZyxzQwCXpUcazNE7h8UD5ZsknkSZtXMuukTJDixr99TK5LqRkeYbYV1yFdU",
  "key20": "NNg7L5DHo72Fh3vT9ehyuXFjvm7K2hWn5N2Fa8BeTKYyGXukgz7kwvKebQq8ERq551Lo6nCu8MkoXtKgBHgrPVc",
  "key21": "21BaEvgD5zJcpi9GLL2Ns8ePhqm47GTZwoiXcPYRXDWRNBZTerViyfRnuVu5ndX6ymazRPJpxMnjJ1rUyYvWxeLT",
  "key22": "2Mowo7o4SryV9r8zbxzyrU5QanhJnkrNaiyvuU4GMvQkv3yuZ313huEQgPuKuZb4aWaWhp856ASzf2QjNe5v1rBM",
  "key23": "EfkgzSQ9ExzrdeEyVF4RRi2wQVTc1NGtAHG8oekoNhkjYK8iCSKF31N5huNB6akYqGdUZudejHEGG6WRUXT9LTZ",
  "key24": "5QHCx2Kw1se3JWRqnypY39U2YM7irb8ssUQfqGsCizqDFSmeZivPgDC9JRH9XgvWhVUv1kkUDCRtsswD184vbcuG",
  "key25": "5g9B5ChTFqXXBQ6xKZeet6GDr6upyUh484QdBSnBCDY2PHXThmtdwoZ1VBt1F6TQrQCNMGfPh7kwZy6PDtYdZaW9",
  "key26": "2iUEdqdgVegCHRvVmANDndAcrV3ZhTdJMmBJT8r9wkK4NhvrxicWuC18opvTSZfSruqig7wuq3yF8v4Nso3HnNwG",
  "key27": "3HuMLdX3sMKGfwqhLGZRyQmTWCrZRk1Rvwk36Zmz7zLe4Xo3XBMgaZgF88EmEZR1vXrp9gXhzsvWxKNSM4Yayojv",
  "key28": "4HFCxjmtHoo2EJhxmG5tVjdv9cmt77wjDP8rTdZdbgS8zKUcfWakjFGNgxRjzep6qePNT2wGN25FBhbeU5o2dL4u",
  "key29": "yqhbz5FMJ1yiTAAEVutJzLzTbeuXCVM6QLciWqGCCrN3LKFdTsKR5z8vvRYSYFGzrDLKoaxWHWKhja9qjuoEQnR",
  "key30": "VLxZ6scMG9TfQSWe9HgiHrVgzdcEcmvQpnMEVeMSArTGVcfgiwQv4PhbJ1cx7ZnAUxqsGRZ51mnYdJbn6XcMmaa",
  "key31": "5EGUyq7bWc6vZxh4duHB2q5WP9254jwf984oSsHa7o7Hdw5q9qG9TBgJRhK12tCbD5vcq7yZd5GEZ9Hx7ckZ4Kof",
  "key32": "3FtcHoV6mQ5smZDFTbgtz9WgxokHUwgZXL2wpYm8BZ3fozBq2xiR697YzfnnUWJQCQaZbhamApkSH5JQZGGfkQrf",
  "key33": "2JNWX15HH71vJVA2gd6D2sH7f3dZSzagQjLAhEDAGJTBDhNSdc3RL6A5aB8u2EEpzchT9wC2QGYw1vQWVrzqzqdM",
  "key34": "2TX1NQRxS4JjnfhLaW8Gyq4hMZcdvEzLqhdmhHTuxBp8jBeracMK747DQHrfnmNiJzX8BpB97GDD3YnJ2BMZUcjo",
  "key35": "3e85AQwJJ3X1hu51ARqxksdPa3SgQNYW3dif498zLWiq1wbSet8BFiJXQpV51D3m8ZKsE2xvyYzabtVTi4sNHhzF",
  "key36": "3wyorJg4sU1EUxyCRGoGpZp9JHPizhqx3fxrSYzTcuiMU21odXq5TcHBSLx1ZXxMPbwLrmiEfpLR53LV3dtpgJHM",
  "key37": "5PDV8kiNo4gVBtCqSQneeU8xPEMVBGo8dpuHH8P4uB9fNuvBqBW2Ynikm7xaT1t8un9KNcay3AzY7bxAiMtBuWcb",
  "key38": "2o6QR2hAtS3VEAWniLaKXCyksTPU8G6mhyBw9RmPRxYLmxFtptLyN3EEpFwNaRydKnzFw5EQgnVYA8rwebenQFmv",
  "key39": "3Lm9MyB1yrLa4zWzt2ASMcxnDDVP4m3wGxyXsfocUCo534qoci8UdeuZjKeaGN2HYMjfCWsqfReaxVe2FBQPFLwq",
  "key40": "5AfJaxsEqGVGZpV1L6pPuDeQUJCCzUg4t1fCBKfZtQa1KK5RdtqnzDwqGUJBupZq17c2FxK93mFvKA5d4fBnqK5c",
  "key41": "65ZQZLj5KgSqRUqLUp98MfrUwmiEy8jszCKs3RVCn6UaCuLY9Nzw3WstMBpPGM9RHHdbca7zNLL6T865byXWGiRo"
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
