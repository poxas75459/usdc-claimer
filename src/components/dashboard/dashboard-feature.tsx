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
    "ub6PMqnMaWdqEEznu5XtHaXk8jGmtmFapd3ZjNNs9VVVNsfc6QHJZxLEMzC3EGUetwijnwdniiFWXjAViRUzn1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dXeAdtAtt8Xf824y8KfZknuRsW3waipeZeEH3b4UsDgVcBm3cBgX51LUryTeKKmcNY6gcekC7hJ5ZJtq7kwGzey",
  "key1": "sQMq6QiDTce8zAsMpKQLYZFCfot2xJtmmQN611BFkwrRmajkn4V7nfxXEDJXHho4Xa6ApSZUNpnipEwFehBuuip",
  "key2": "3eLjiXftQLPEvViR4sSYdtu74PYNe7VuF6YoPDn7K6gXzZh6vMo679yG2fNN7PYPvfbw2k1qCLmLPtg1B2MfJmT5",
  "key3": "vJukLK47k55QVrkKn6yMCyBFP2bsJX2gMrZT6nnzPeyFTVxQMPJDp9Fp1D9RgvWouqUaZ4hhLksCYNvambBBsyE",
  "key4": "24LLfuH9yr5tS93B1ESQnpibP2ZitPz4voCjNdk1FmcqrZKrbzjMouWxBZHbYZk1mLxjQNFaT3WYFzibmpAeSZ9T",
  "key5": "266mPxxd9nY1pVPSuxXWGrrmPg5PWk7cpVUzZQNnus41ELmwKhRq8VTpZAMT4gPEQqEWvKSAb9yMUoAskpteofBJ",
  "key6": "tNLMnrqvXDLBbp1uxNYNSjhXMhvAgL7jw5xh4uuZ7RdnqqxJ1zbxcUqZxiCw6vr6BGYFqqNvhemKYVGGsExRMeF",
  "key7": "4NLy69b5K4kFcKQKQ85ppFbRaXvYGSaeZSu7jHw6V5r5C2knzYmroDCz1JmHAbFRUhsFeNP9zs14brpMV9DqaTmB",
  "key8": "3sZTV8UvhK3bywx6pxivaBEt3bE8vNYPXfeKFtSagiRQoEAEC9PH6vuyUWrD8iVbc2owQAdDjaCoyVQtiJe5a8uL",
  "key9": "3T7HhfM6MCTAapQ3iQ73ib5Pq5sLHLtYXc9quAAihEwaeZDgmXcgJdyoaG8xyrZ1y49WKiaK7LWYrapVHZigA3YV",
  "key10": "2LowWY2xW3msVcfmaXred9AifwFaEmaThcbyKEn4z2aNk2uecGfvDamWxkK6r1RSwEntZNbYgMALnk4uLjScFbuw",
  "key11": "7Eeqxv7NNPrPkoVq7LpfdCVRVE3WvxQ6jXxc45f1KZnz5x4Jtk1qDamoEwhwY8orjNHigh5zGGFVUb7CaM9yAMw",
  "key12": "78xRE6Hi2RvDTKVT1zP7RXFCMRjgfefWG81ibWPfNsh16xm8DhDBe1N8NbqPSLLGvznVKidPoERc7E1KPcwaCNy",
  "key13": "57Lrcn9Q7VAw7d94Dsj6grD9wkf8ipDkNWZJ4WMuvFgsCVLEprpV6gsXBtjeoxCY5NzJ1ecQFv5R1YaophFGtiWh",
  "key14": "4cUd6Y7968jG4jYT76DtVpQKYCEwmC5WCDHykqS8PwpvRbT87xdsTZi25zCNz5rvhAzAXD1YKR1Mzfi5KT9XTGyN",
  "key15": "5TSnv1JcJYZpUfex76EG2SQruzfQfoFvWDuFKNgarKthFpyfamNkyKbvk38AissQEhiUcrdFKtvw2rkeHECYZc5k",
  "key16": "2vpzXqoDpo7q1PHQvBreFYKsvmkv9CemRrrNJoSQk9fZTeB6kVqZnK5EPZ9D9EYkEH1RJ3bDtD9557yocjPR6Qh7",
  "key17": "sf2ZHLnUseqakWkW97pvhm9tF75Q3BDiEJE4SJBihky23k2PGiiaCApCyauMi8WW1QJ5banGsxhY4mgrXxFq3xz",
  "key18": "GnyR4okYew8WNd7UNDihdwYiHFYAhuzpYKtkRN6c35RBAmSuVT3VrTf6DGaAmXoa8tLq5NQj4qc7YjxAL1ViLzu",
  "key19": "3k3twjPynTrAEkwBFPLbLjyogERNGr8HWQAHPGmxFsXM9dW7n5XoBodgLfjKmSZPCP5ZRzNtAChRFgtU5k1hUwWK",
  "key20": "4ZEJSCeAWc9onJbj81uB1g5QhBe6agymsYQzuYcm5esazFVxofZKLkEM7xygwhkMbMSdzVW8CtTqU32GTTdgPMUj",
  "key21": "gDMGMT2JtY47gL3ma5VE614u7sEgvXc6pcxexZVnSsQj91h7KVncwiUcvwafG9NX8sfuskZG3jAguHaMTNVcQwD",
  "key22": "5kxUZWhQqPcgV17WCDDXnwt4jSY7aeatGU5EubfXBfcA36EJMBbGUp8yGJUr2ZtziY4u17Ym6oe8QR9KBiiVP9Z6",
  "key23": "5TW5D8twcuGkhJ2mFkwVQphPVZEUYZFdMwLozuNwABGCUaBpjPjheg2Z9m6YNQtxV9YhiYeybnqoLFw14e9vbVAy",
  "key24": "4LUr1vY4PS8sFXCg1gSBLGDyU25EXq6nEfscaWQT7cSSHmaKdVjHiLpAucbvE3Akde9LmDRXE1qu1j2ScPVRn6R2",
  "key25": "Nf7Sfzqan1JFKGG3ppXbnBVEbtRYuBC3V21fihjBZUCDe2Tb14ug1NSgWGwG555jCqAr1XDQekvzNsuFHxwYktF",
  "key26": "3yZ1VaztUPFCcev3RxDJDYvyv2KgA4M6f5HD6bG9LptJFDmjCcx1VvUe5o5gbL6dC2s5fNVSEh3pXczjDUextgFQ",
  "key27": "49Po8pBiZN6h67NzFEJkF3RFD7T84PVzAjbVHwXfCXfeRpXnMNMtvZpYYgpftqBxhbcvpMYeyVUPg4MqteidVnRc",
  "key28": "3AVKTxL5bL1SXMSTZw97txXXm5P8LoAkcUY5LPX1LNtfFiZASaB9BTzq67JErxLmsWmD25d8cqNeUhqHUu2x1wjq",
  "key29": "3QCs5Q8fVWEHV8rR4F7Ak1c5xYjzeToHPhcHpvcyzpBF6picQBTMfpDyb2nxHvnFnfmCL3VZv6GoXGsMGyxYhnJs",
  "key30": "BTPFwyZZsfjw26giWBLipuo6u1t6CEx5eepWuMJ8dNJnzHsfBS7BEwBqZjGJbAYXjGWQPGBLrv28K6ExZ5jV1ZL",
  "key31": "4uuqXJf2LQU8DJaDdEch9eBe6xySSwa5gsw5YVtgbhYUDw5MKUdq1aVtyYsGqbMZ5v9Uf2rtsXu1bFurLDtMHDY",
  "key32": "618zwap6AXJ35fL5anKENWBn956yq7quvCsTeqfPXBw7CqiC16EpHFmkkcCFSDQ7LCVHXEHyGdJhXS6Nc2Rfrw7L",
  "key33": "5w2J1mgGDy5eNSL1TF8RG8XVyaAaL98juV2Yp3cyK18NfkJU671hbSbB6paoHzURw2eVvyXmB2aygMbYWkBXqCNC",
  "key34": "2gvPn8zST7fL9FuX1eZXvi7yGdwShXUW9WGdfdfTSrcTyi2QiNjEms56AZzm64Lba1WhsFLV6yDB2MBckVSa4a2K",
  "key35": "4DRor9ciU7APxDPnTwkwqbvFWEVG2YjvLwwjXEPcQ67q2L2rbACG8ZFujCpzbmYQJ9A1YK6TJrftxxXNXWh6QQrj",
  "key36": "BYNuLFePjth57QWh5HzSH4CbbbKJVAxkKXJyNL9MJjFJhm2LS5ahoozH6atvowGLwmP6ksaeTcFaL3ANFvGy8TT"
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
