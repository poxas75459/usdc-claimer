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
    "324xaGkTEZJWdkiiF3WzBCZM6kirGKHELpQuH2UUTtyanQBTnH6ZVUm11xoidCZ2YVUz7Po8qX15qkHZgNR2yVGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AoSLcSoVgnzX22PWicYwK73EszD1CKfmuEJg67m1tbKP3dq8GeiqAM5FoZEGigKWnfvmWXbV7CQg4pEvJn66BfU",
  "key1": "21pJrG682t8L53ZM25yTSGWnbZbFqapam7zTmDdxZJvtUfDKFhZ8qi9cxokaXPFQtdau6RxEgdp5EF3y7VYFuoGD",
  "key2": "39sbJ1D4SwF6VZFdKJE7fasc9q2d4ev4GahgSzxAFdsoNYFoD2zGdCaAJ9U99vG7CaA9yzoNoUWShJrRW7Swyg4z",
  "key3": "43RmUjDTyvX8kCdfgk7C3tAThmvVX5cYGLrnuKnjSM9kWNPtcrH7Zgw4wLHZCy6yy156k6xFHG9oYDShN6r7GXtC",
  "key4": "4n746GHCHHDo3WsjEicJ1cJt5nSLwTjLvAkXn9nE3GqYBd6BSLkzqcEf3eaRNSoHsg8EBy1yp5wjwyhsYvP8EwF2",
  "key5": "LaEMKXHibDe8nuwMD1tLmvz41NnYT1PZDExrbZPVqjnAPRXfVfDbc4b5H66d3RAFZzuqnFQhEu8bSVXcWhurDvE",
  "key6": "5rwKoiYq7M5ALuSja7PqQNfrnr1o1bZsnci4HkPtyDc5JSNXoy5nrJUpThqxHW23J2HS1HwUMGKkc4P1ge6vr7i8",
  "key7": "2k6n1FW9wSas7qc1KjXjsVaBDQbrZ9hb8FK8tU1grLqCmJfGz8ABx5v2RCeDrv78RGuEuGzjrcipj6fDUMtv5rbJ",
  "key8": "wweJQoVP7aiuxcA66C2V6sqvd8DsyRgkS98qyKX22NrjYU4V2iXhBK16teKFFh9EamDiX3NxkkbQQDYcdVMBZRr",
  "key9": "46awgJ8WYYYSuqkBy7C7RCeFKFqkE1RwEZRFHEaYUpdCdk9TBseF5Qpor7f9NfJ2W2ovgjEYEagz5Ja3Jje7okab",
  "key10": "2fk2i7NdN2y1tLbLmfRJRU5w6adDum1mQnWjENsDtFbQv1i9k3fEbLzLDGwwugwbwwHTRhhFx7iLvDRUcFrEgVFS",
  "key11": "sQzuWK56D38dhd4LtMLTx4Z8hZUSkRyKYfk4YJTNFKz9wdsXWPmS3XAZUGNgXHM2om6J39K61X87SUEwtEMkYpL",
  "key12": "5pmaA3VaJ1ZxLYYfRFgf76jtg5rAx5sNHVHPEB4VrUjU8iW6CFc3tTovRR3bYB9SSyGexBh7sqJo8A87Kb82oEtd",
  "key13": "5oVB9EvpsiGyxjYtZNn2HiGyeXbGXnEewa6noDZnyNManmE5XNUewvyVriN5iPCumxwC9KheHPpEK3pGHxAaFMKH",
  "key14": "3ypfxqAND6e7hcBALfUPT1r8xsGvrs97j3vMUNKeAqd7LT5yrHvYiWDMS1BXkJdc1NQSHi1jkXeTt8UuDS4kEMkQ",
  "key15": "7YHonBtknFWhAxmFiTqkRW7PnBvpkRCESn3k6fL3UBMeDgZ98MZLojomtt4NgSYmEAXo6ZkZ2pPaefSfUyP8Z5a",
  "key16": "5B7iNSvovNUaaa6jxtjNWW59cuM7Hif9YrtdRzwVE9dCj1Q2DWcVvUJp2JYpcfKS4jZwPqt6tvxCfo3MrgWnYKvA",
  "key17": "2E5z3ub5GjTcGnrA9iWnL52Nkb1Ls2sgD4ZP6f7ihtmMrCc1NCEHyTXcn2o1FPxkJtL2XcN4dVnNRSXyXzER2dwZ",
  "key18": "EYa2eR8HRhDauRXPdEWnBgg9TcMmNcauENRM7iZJApYtHpaGMjLeEPBe95EyW3rz2tHp6GdgPjCmmcutnpqwcGN",
  "key19": "44FLfJbs9VTTK8VctPuCxpgYZdRRfBbEQyNBFKGHJe8zNog9WUe2Shhem6ech8drnD4c8BqmDYFEPUXHf3cme7vm",
  "key20": "5A15GSRGZw9fdqcqF8thdJLcQpV8hJxmN6GzrFBgmqH3kr5ReTqmSpBBfqNweZXCmEwabLhYyrQMPfyfxMSxset8",
  "key21": "41mXisnogqkzTQy9zbzzKbf8hNHo2ygj2iVx388zgMJZtcqiqPvEPxJjT32vFRiCTyf3kujcW5GfwSrKhtxSQTMe",
  "key22": "4UtkDiAhFd352mdUU9sbvGi5XLA4UxxGhc13QNjsKUJa2mBzksh8nRGFvDcCaDeEDWz7xFDTaZPcMc4DEcXuhQBZ",
  "key23": "3vLG1RbVZgXW8FBZuSkCuavw1MFdtsXa9V7px6THpQ4NVyAe2XpU4ZQRXUWrBfPizz14UvxRJo22sv28aQ37rxiX",
  "key24": "CJ3KshVXRDWbpdLDhJy3T1eY8777AQRKzDGv8DBLBHDkW6RRRXkNWv55EvxpeemyRs81yZr1RVhCTshvdnxEsid",
  "key25": "5WwAoCnrFFpkyYiKjsUTCqZuJbF7sQ86a9c1scnyc74cxNf88DXPJXDEE3WHypJHom5SSf81x4Tf6u1Z2iCq1GhG",
  "key26": "fsfDVBx8Y6GyccwavrR7K4dUVQRujc4LadSJRSAvjHjeGZdZXPtKT7NmY16994RjE6hQz9ZJKKFLeeEJAfQBq64",
  "key27": "5qczWSAbwQmp6nhi48XWWWXCtenwwGvVL4L11SvWnpSFJ1QtML63eT54TsM1i5jCu952tEb6tSsT6RGsmdLchqqq",
  "key28": "3fLzmS4q6dNvXqfRTpzRaC7pvQSBvp6jhV7dY4mSoWYu431gorFuUwTL1Zhy1Xfsa9Yfkx1dmuPo3UMA9gpGVg7e",
  "key29": "2SoRgwdp7kwrNVpA48wVutGWqQsXfu7rEsxk28EvcBmtmGmobAA5RZFCkuSGSXiULHvWH47gxPND7wYcwnbXpU7D",
  "key30": "2LWCKW3GXqeEDRCN8mfT9LsAqW8EfGtyGXEcAYyg4syQqA9rovpckc9niyM4J28pP7tVippRNFztUxc9yEHu4mXG",
  "key31": "nkHyh3UB9VuP5rSkY8FHDdrncJUufwSBfCDzN7Pp5fZXsPTbyW1KKU4LJmx2aqLfp1PZKGmHvyhXPgbYpHjyFPv",
  "key32": "3QRqxjbfNEgq2VsUT5PPtkR7fVbh5wjHTbNNKy4Zwt3cUDen1QvmMD3zP19cjBkVXd1imDeg5v1fD8rU9pVNJYwf",
  "key33": "4fHN72by6uECb3c6aq55rAUrosBTkoSLdgpzbibKYQQyshYn3pUjHfkFr2c9MFzQXnPXKa252RdWecmTmsuKZtH4",
  "key34": "4Y3RTsCfEx4c58RPrdu8EPEZDR6JXUBPsZnwwBtAuqgapNSYuFfx2PR2BKQ25rRxAWjqEasMoxpsgyUDdSV9J6bY",
  "key35": "3WwP1sqAgJjBktw8JT5YBLKA5M3RAaBz59MsHzdB25Tsk6TtsY9bZPRmz4gwGeRsCxjajtXdGHu9q8Y2jgKka2vB",
  "key36": "3LSmTNMSf7P5PABx1WAA4aW9vpA8bG36S4ojXRoN15zzynqySz2wTX3H3n5cAhoCjGiyeY8Aid4PWPYRfUPu7Cqa",
  "key37": "4udxeQXKWL5epZCqdyQKrVy37EKYs6uZdTxS8aNFaYd6uDzH5YKsi9eF6V8tPtvAi8LtjGafRSJg12yvhUwzaxwY",
  "key38": "3RfjTnVCZMnbeRAYFdcHBfW8Fq5xpfXKjFJopyUva2C8okRjHpXeUK5VfQ99kfUAXsvBwJ41nvQZysSsfHPt16CR",
  "key39": "2LQr2QtSvhgKhtjbWtkD3eRtrNSA8wxwVdwcnvfd1tfQ2zAdozYR4xnNPcUYNSJJTLByVNYBT74kE8sBoSTbKw8o",
  "key40": "53jUAEVAXf7Vdg9ZnPTShTbp1joegr7nNwS4H37q9iZbJeQ1p4iVZXjUEvUomKD3sMyLq8DktzzVEwuUYk3C92Mq",
  "key41": "qpG5qMCsb5YpCVnBLtMmGjsBiXEktRbCRQsRBQJSCTQty7EAj2rN2Sm3d68mozJsawa86uYCzY72vgBes2Q88EB",
  "key42": "64NBG23oWVoszgE5ZCUxe9r7xKpD1Gn1p6ZsyYku9PqHRHrGQto1srgHusH3bbgzfvewuUjCz9X2wcnQpL9bPJH5",
  "key43": "3yMJW2ysHhAN4SDKe8YFPdMNvccrAq7PxGTX2yzSY6LWtapwsAmYUXZrZmcbe9P4seobvv3yERvay9ffLRfaPjFT",
  "key44": "5b8LsH6BJ3RnUtSZ9D7LCywTA1SDR3Dq3mRAeBkod3iZjZN3HLR2UQqF1CFKUQRVTS6TxW38LzKnBWFfopQXZsx1",
  "key45": "2zVN6o5KyWxg5mkxoWEmmzQSYPatJG2Uy2qsCKDurW52scmXYrBneN1PXDb49HJXW5mKFcx4nvtHAD4yVtGe6M7L",
  "key46": "3po41KK7DGwLahzS91nBPBBGXGY9Evk5wq6R6EsuREzjNqvTC8xsVjDkjsF8FhVojrhYA1oHuKiVRxf4AH6FLCzu",
  "key47": "5e7U8JKk59H2MUnq2zPuUDmeH5xJZ7iE8YtKccQJtLJsR8Er66VMcSjkcyBJB7KEoy6STjxQKT8JM4YNdebgCWrT",
  "key48": "5aDVj2sXJTv4j5bwa62jnUJ78MojQipX5GKG9TkYTjKd4Amqecg4EahEgmBcQPY7omz7BNwBVay2ZbPvYso5qeSg",
  "key49": "5bk71oSzr31N5DdB54mHeAXTtcXxWBvsJCYkfBEGTwtBvr6Hy8xMuUAuEhnKhv6NcQRkAVU5Fnx9LJaAoP2pdYSC"
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
