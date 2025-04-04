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
    "26Hw1bnWsD2cju2WnjS9nsCk9fEAZxiDr58JJngK9GetZdtoQaxai71imTJeqmkV66NUWzaJcaNGx9SfWQVLN2BH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z7cPXttmDXNBWnqJ8XjuR1xj7H1ATvBMiKf84VMsD8R47VTYsGNxo5qqpWCXxNYpSocaNzxyzu1Fv5u1YpYeQHt",
  "key1": "WMeHHrcYjH27PPE8DVgU6ppy4SsfwpycoXD95WpQXdfawtXXLTwM5TQpvjKPks6uRXVBvva2y3pKuBp8Xce5eEP",
  "key2": "hoHZZ4oo1vGJvreV41Ex1Yz4JLmjMQBdNSkouBorrBfSQ4xr9dMYpKJYAmRs3PGhce3ZXUFvkop3X5Hjgf8eAyQ",
  "key3": "A2Aswbvf7PhG3D23ih3ko7d8TJTE6njcwbpZ4WynWgerXFfFzuv3S8cJ6RewtpzeZSpug7KfLGFYfM3CLw6NEhh",
  "key4": "ozSHKVuRPKMyVUNezaKpWNebVigd4Wf1P7PwzjaGWg4ASkitvcB2HuqJQvwCsYeJsZr6JnS8UHPixzz5ByBwiSh",
  "key5": "3qZmqB7s7rrCNpjsM7ZKB5kDbVeMjgNcycCA9ENydnZvnHfmrdHnu7WQhXDc7a2cYfvHwK6jGKSSSndK4eb7B6hD",
  "key6": "31Sbi1UKHpyzfzG3ittohkkxNWvo8r11n5UV7FiouTXoQcEcP9h9qRoJaFekx1tSXW1sKzwYg6iVAmwzt26mCfDK",
  "key7": "3KSVA6ZHL7Dp2unSk2SFRAYrpUHxia4JoMgvqkCJfKstN1MGcdftfpJHf3aQT6PgAa79pTwUCeWCZFxcF2ppv1Cy",
  "key8": "3ADYM8DK4cZzRB9at5rRQWxcAN7k3ecPjuT2chYXkUwnoj1xRb6vNy8g7BtGwweAo14VnLrBU4cnhaptajnvgQRS",
  "key9": "4SuRXGvK4gxCToYBU9cn6nQk9fTPyFMjoMZMeU7mo57SMvFMAjxpUtGeC9fNuAnWp3nb5d9CFjpmsNyU5jFVoZ5Z",
  "key10": "5ZxRQ9gNVfUHmLtM8SLskqZXAt2ZEsL79Ps6DoJrwK5thXbjd6nshWkjkRa615bAJxDhC65cUr2SF6S14A7wZj7w",
  "key11": "5wBH8LnsfsUHmjykQEdcHq7hse9B3QKSuuosRPoi3MHkguy3AZb4tTvbTVnHtrz1vMxjNM7pgQb5cVA1Array1a3",
  "key12": "41bUJLTu6LuvrE1kvMummswuAggWMXzhaQr51zCTa3wNueBkXM9sgWMFY4r637vSWpSZarv7GpiNLivfkiEKcy7",
  "key13": "5cciCBH7csFV2VmjJfGZPhKa2Nez1ATERWPCcaHFJWAdGWTYNH2TNafZFwo75ptiCuuvPcyUjAFmMTruF6F3pJ5R",
  "key14": "63rDe6M3nUmDKsd49a64SsJvFVTRGgzWYn6NiP5hnyvxxeJ9Ug9wW6XhpGdQe1eceyFUrvckHeFKzmKx7gGGorBY",
  "key15": "5oK5vupADNgerGnehT3PH5msjMtycUrWvAj7gCcXvKpteEbYVLYXUde5D96fY2jcfXzWxyo5cNqz6Bancrjn7oam",
  "key16": "2UgrBXfe4rxHy26sjgdcTGhAesZPTBGQnbRznqQE6XqvFfofSMPQpsM4voF5nrUm757yTdgkNJQZVW37qVwATd3t",
  "key17": "2GkwKeJ2Q7DMNd2JgKxJaHBk5Fo8o8NRwgNea64GUc4emYhTmZYrP1QfowqJDtZHB21cr7ystpnqSZV7XHWz7eHM",
  "key18": "4VED75VUuVaihMCrzMwMEp9GMscHtjYbz4QrHkuqz33A9Rn7cPYB2wdvgiNBjeGR3MowLJ4yZesSTat7zVA4mM9x",
  "key19": "JDWMnorpnKoQTGw1oGRGxEfk2j5cgSL2FVtCZdPg7ZmWVHyj3iKStbMRsJGkc3AMzZ6r9nFZ66W8k5oefKWQEp9",
  "key20": "QXJ6qiKiWhPYY2XXiMWTKCumaZe2CuAwBrmzRtHjb2s7DiMdMLrWB51ixF8oeuYSxpFM3DX5V2nmk9S5aojZDUa",
  "key21": "ctDyXSCwANQG9LcJegd583UJBEfU8duRMmZftD6YpcxBboUTftRVnsmarJ4uuGroxotcfHa2Tm87tJZjBYJxSJ8",
  "key22": "T2prVdnpkLT72ztuY7RycWew9Y78WGroG9EzsMWEzaxaVWjSJdwtT4x6EPwFYeAjSuUYorx56wCzingfc93tCqh",
  "key23": "5EtytVjKEMkobPNH2ihN3Y6DbWganWxJSGoHydnJoB4iL2ZDFW8FerVMpuaitKZiVyK6xGLJx2WpaGAJjhLVpdyf",
  "key24": "338yWAMNvqkzopm4ZyexAFnFGA4wftDWBTVHgjJLcqK6DtUwQhtxNoztnW4P7q6tCxnjdqGh99vrQ1wi2uxaJLYm",
  "key25": "3ZypnMFQsKdGUkwcq3jAvoPcL8ptgCw7dSsixx3bkd74iPRcckWeWhT88fNrxTCnY31DnwDt3XPoxZ6JpDdpUugk",
  "key26": "4dRgMY3aGToFKKTioRrrcSM4Ms5L4f79tqvbQEivy54XTCX8Lv7Vx9Y5kSqnLbapNbYbBvWFNHS7gnyDZmTQE82e",
  "key27": "3MUKXaE2hCR6xkWfhtUE3YPwQoiFXU49V4iJFrWFBFDmjTrvfPSwJxq3PS7xTTe6G9YEMPTuguCgDsXXt3Vx966a",
  "key28": "U3CHt2GXyH5QXN51aRoXeJLRboMeS9SSYu7rfqwbgGde89nPtPQrSvJvPKqHqLNywgyafvwYytqHAziPDLVf4Gc"
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
