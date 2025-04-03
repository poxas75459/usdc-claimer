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
    "GLuxCFuYhtY96o5KyQVxELwVveq4mikWswhkGr3PCB2pMS1VMAMy7iDfTht5oDBSQZx3wskrZvBDLUC9V2mJ8RT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32SGzzwFBtawuaJ9R3u32NPofjxhpxnhirzBbmCDZztFFAVqoVLmntwRBPJzaYK8CeZiA4TdADaM6heRuVZBPXEC",
  "key1": "436UKCWk9ycBQLjAeioUbpTYbJmCzrHWLsRByAca2E5TgcbMSyp6v3H13EG1beLN6LJj85xeFn7DCYQLaZoXiYLS",
  "key2": "bBNC167ghufeaZdiVZ4BEuVS4wSjP35iNMnC9E99Wu7KtKTVmLuL4J37Wb9W64X16xvnW5V318FRLLgpZy1dWK7",
  "key3": "5YCwdNp6nCGv2Ep52XAmwWXZjfiGekL2QQkjPiNepgvmWVr8Zb94tgRARWvjjAgLUNEkJ3q4yzEKrMMxbVk7pErV",
  "key4": "2KXecByDGyzYsjsmN8bexixCPTisW5q9bjJDny28VunMKotKYvadeZRx7XYkMWq3X1gyQE856dN2M4g2wZhy2eaB",
  "key5": "3NFtgCAnpA5ECs9M2mrGNFF5NCKhRqngfSKGcmB6r9V5YB786xEp2yao5xzSmViHM3usmPnJrRaNuLKZwaGXSJBk",
  "key6": "2Ww55KrNazVVT3rhEJs8qJrq4bXuv2Z6UuPfdWRfH8w3V3Tf5YWY9ZrjNzU8pJEeamPShburWgh3wUu8cRXoQxmm",
  "key7": "5FtgcNvkT1T6GxMHeevrMrUGPosMUrXQ4fJ3hDjeANs7Vk627BsaHaLNS444pv2b8khf562KDZdNVv7pUDh37Eec",
  "key8": "3za7GmmxT7DGF5QaJBnDQv9EHzRekfjsjfpb8DVg3kFCseejG2nE4zQVAmZ1CrSHC7PDamV5KMKmG696xwEgUCPC",
  "key9": "638sv9qKhjVjtDJEHuQUqzbZuyr6p2Eirvkgo94QXatogRhxM8nviAFRxYqdnyQVRNEok4vt4agcrwk4iXUEVLLe",
  "key10": "24foNdtrWiPT1DRcTDvzMQCUJwDGtk7294XcnWwSqgPXz5Y8N5aqM7hJkhGQtsPV8AB7rzH8vEFYYLY9XX289xiu",
  "key11": "32UhapSYeSzvMKshfMHvuaa6Abr7mH872ogdQjqkcWA72seQmMvD2FSvtA5nBZqZU9768AmdnyT7ZRcgXRjBfruv",
  "key12": "5rs8RDvHXs84vmX8hCwZVfdj6EwP8jWUcQ9xM8QEziy2R7rcrPFRroGqLqAXBB46TDrmMZCP4aeeBPX6T9D1EXcQ",
  "key13": "5A8mPUKKbY7mCQcdwagc6q3KmNAEhpwHn4NUiNzJWXESXm75r85FUDvdsNziQbdQTK7mho4xQBNZSMNxoXinbkLP",
  "key14": "heSTKkS58icAdkT5WFoJYRya7ANn12LaAP2bG5s5RhkJxyf4e8Y16x3oq65bCSWR3EoU4NnvUvyPWqEUfLfgb4n",
  "key15": "3QVAzWTREWceEHRHoUSpyNfTr9wG4xrQAJ27XC3QEX2zqTb62hduZEM2eVQLd3G3rRUMSvuLbxnxupqmNevgZTMA",
  "key16": "4LSMdtKBdiWikpiyYaefA45h1fZjRRp5xdWJDeUKsTUMyTQqfpUWjRCpqXTpPTMfzBpNVTuz2NfKMxkZanHbr7vK",
  "key17": "VrHbEoeXJ47hMmpsNoGYYxQRwEZhLK6fhEL7Qp4wcWfyTGiRWUbKGuVezRsS6HHgayUoofDrtABk3TbZ8QnNds9",
  "key18": "5MXgLdCq2kfQr41FVduM2KVKx9qGJozvMr9DYVXP1vWVian4REU9a5Z1yBW11DeNEj6WKLFbBwB5kdga4HvoBGbu",
  "key19": "4hdXh5eabfJeZ2UpDCxTEbNvqFBSjwkZVQrykDoT9rh4dmukxbSuDjBJ5c7mQ1Rv3ybxjxBNPwmrE1bStUgise9u",
  "key20": "5hFhzZ9mThdx3ityxMbn8tfsSb1VQeZASuDSveefpAkPYLVn7pZXaFhswd5ZAa4FcuuyhC5bpjtaFYtNLa2tDTZo",
  "key21": "4yDKFSNmVfMvwB1kqZUX5hZmSPrBScajf7tQeaNfCvaFZXEEUzYcVAdutXQ3axyCRvg3bsgPouX8KF4KePEabWJ7",
  "key22": "5mrFgXoEt1pzZhkeTAgWRPXHrD1v96axw26EaGgZsJKdMYzhekt1nrDG6pKeXtdZTdz2wTzhRoBWjYxMiJeWc2K9",
  "key23": "sEAcnm2SBGv9bopkWaBLe3FoRXRs5kR6qVLP18D8KR2UnN5guNbgGF4ERjvLFau4sLCSXRLi7q7Whb8JTrVDM1f",
  "key24": "5vyXCAcmX2HQSp9hDQma2wKcJunis4fCnMYuCBF5JSiyFDr63Z8Ehhs3BS2kwtp3pFqRx9Eboijp91dy4R9mbhyK",
  "key25": "3k2wJm4i1pL48DMH218Yg3ZytD2Q2nYQ6NfcEsumK4TkvBantQWxi56hYPzdpN6dTWWsE6wbsxt8dxecaeC4hfme",
  "key26": "5uuTit1AovnLMUgZ2rpb9GJRGzvQgwQRHNRKobH9te5MLzw1xXtiAK4ztbqvA5NsF7c1NPm99gh26EMb4L7ALmmk"
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
