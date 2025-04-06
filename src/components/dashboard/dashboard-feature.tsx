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
    "24wNXm56DT6pkH4kuoYHd26cFAtgXfprCAbtoVcJS4WUgsHJFsY1rvsTPufroBKCaLYuBdCMBPB9VpSREh1Uqwtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26SMd2Gid4hT14Nra9AcFrnXXQjbxX8mY6TBqJg8ZDGWuqGdsWqFaeZX82PTHUi8XmNhgLVAtbKaaBYB2aTF6qpb",
  "key1": "67qMTNZnciQDb9YZ7XAmFgnjkLL1sjuBbsD5aApSjuGLnuD6Q2ibk63eMVP7YtbBhuXr1YZn3jw93hexNHMtGS72",
  "key2": "o5ReH2YP2yPPabpNesD4MNX1rMPpF1zA6knvhVdTsRbsbkJbKzxAH6B5Po5B3RkW23HB1ka1dX9WEwC8EGvnKwi",
  "key3": "PaRdaAW6Nu48bdGEoGzVjBaT5tLse4may8N5KgD5G42HzUW1AAucX5Ch7cQ7WeRqayjtbsDjvpba2SAeYHefBUH",
  "key4": "2ymcxjuTzFJANxk22Uiqhu66TQoZyi6LtDcgj1TM6z6ZwcK1Bs19KNsihM4xGptkPDdJBSuyqyo5HwmKXghDCCzb",
  "key5": "4fjXh9zsCMb9P4fMzW6gHUA23D3wypkeB5yoJPQ3iBgixrkvj8mcE7RHg4vfxKe4jogrwzpTwNr9i7cXDm5aMDAG",
  "key6": "4pjyp4pBZZhm5hfNPr6quxQAsxEjp5AzKdjEhb2SyJN9JmsZWsx4x7daDP1i5ENhVq5rT63hPi31TcACrBPJyQTz",
  "key7": "wrxjk3Qjb9GYytNXcsHwYbYtykMqJSa8gRz435fmY3YBYMwxJXon8USNu16mcHPh7PkUQ8nCacTDXhBUSVZZoHQ",
  "key8": "5g7qnTy5aocSEjjMDDJAg3DjWkx5oChpX97XtSuaHbs3XFc6fTJzo1xFjnfoogaAs9odT8xiSmSJF3sSCssGg4P8",
  "key9": "52GDvNA6dvRR8nuG2xNneqUBtwW9b3hTGWvFsVRiQw5qpdnHVGZhy72wPak7zUCzj58LRjMzTnPpaPtwrGn9jQ6D",
  "key10": "3x1dsxaVHDEhH36jcpa4JUAPK3avt1TM4FM8iEbFBiyhrpduKZ2z8DpoobiB1cJtVNzFRawAtvtjEuwUZGKEiwTr",
  "key11": "3dium3RB6HhoXF6U8DpEpvPRJmz49yfhwKPTSGx5WuQSe8gDMorn577zt11H36fe2EnD6kyzv5Du4FoZbbma9HfX",
  "key12": "2PJSp6LxbHnVka7wmbP4xndnjGvNmn6P7JjKL2PLRQKC9KgrbVPtWETtzjxwHGn9RhNhUbhsMC2o5ydGt3ojhpKB",
  "key13": "3WPGeHvPEfTbuUySStv4ju2phGcU3pNiDpqyfU8fxwBYHby8P4kE6wAYq73ftdvbkBJuASmwTn8hgYbz8h5HbkiX",
  "key14": "5ctUwMZkR3vXLUf9LnS1WbcZDtxSh5fhLVSjuTXK5CmW2udGkKD3WhLqAD8v5EzQChhmzpezNX6XZ3JQNj2vXgeE",
  "key15": "3ro3GZU8cXJ7yBvBKhD1dcCmUgrC9s4mttFSRj5s8j5YAb8xruu1wi6cpobDVswm2YWkPsdUsyYfusUi7LmUxhZy",
  "key16": "3UvPj9t14yKn4GyZfQ2PhjyFKePpKRmYLCHEY6HnHfEp2xUENNovz4sdtnXmZeD2PKCmP412yRGRyp5iK9j2TPRB",
  "key17": "5YQ59KsTU31CjSHNB39vE71mrFjVWV4T4iFAJTw5bUtZ3rwjSre4rixGhGciysBddbvV9wERFrHvLb6SUXewefxi",
  "key18": "4m9q431qvXa9KZyR7FbxfmZjXoCAgGMVqZ6vZwiEASBAraF7e3x6jXTp5b1hhNpfP8Ksc5tCtSpHS2qzjEpkHtEV",
  "key19": "CrzvouxnVyC4ppMNAEoP7KCBLCoC71MtngtezyqiG7yDd8QdSUTggqrCDX8rBeDaBZXEx4Pn2y8NmwcA41Spd35",
  "key20": "64txdubjLp9sVJTRYeAfSxwFg7PVmGyiMrtSKZCfdSZ1dFUcbr1ZNhMUAjomVXSJ2yRAjiCkJK6tGsyQzf2jetKJ",
  "key21": "5zem7Cr1bEYeDpfmVL4syvmXcCsU9dBte6ebxQPirPBeLQgKhbg8bn7qee7JhsfGiSPMggTaBnaWqeGrA1K5CtMo",
  "key22": "3xhhkPfX5rz7xto443vA3PYbUe9HihU3wRZPi6CPToJCh4SDWC3tKtMuYot9T5VnSi7xnnFK72ebqoZJogHei8sE",
  "key23": "ik6KEJPRJQXnK5oy2jHHgGuBQGdFMFbT2kFLKCJYfwDmjbtnDVS6AM7vSyXSarMCjH7HMxFRz3a8oy9obD9w3Mf",
  "key24": "5MM8FdCbHDd7pqTbcEDnGw6dWGpkgCaHgzMgVinDe4BRmZFAE3es7qVjNFjjqpuiTpPu5yXgkeLFQBtSVS3HWK2E",
  "key25": "2b1bdPKvg5W6zfB9PGWPVn293ByDpboc7Ywg9Z5sDrEZtGDTi8zfhijuWUKHU18F848Jo7ksu96YH5hhYpc3bKQT"
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
