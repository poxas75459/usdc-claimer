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
    "oJFYvmcL2LMdEaMdmX8PYTtLsghXjh7yfX3ToAraysc2vXZpLpT9hK6YeqTZeo9mMVww8y216GPts3DBPytrGDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K4dGoM9YeLEHQw2ULLLiiSaC67kFZ1TfZ6ATa2qEP296uAe6cbVsM72DZX4HHRmfjT2xmKnXJZh6jecmXYtSypR",
  "key1": "5Vx6biERKkFA4xU12BmmPrAokEKeqgyFcpk2bDRLxPJXsSJtByWSvhsAh2jMNv5CydwvF9U98LkPHnuAL4nncR6Q",
  "key2": "ugyX34ABF9DR75bgzftwBALLk4Uf6CaBNZZhP4THgEjBr8S42jsmj3JxN67TjAwGCZRRzQ98Yw11ErvnDnZ5Yhx",
  "key3": "414bN5AijvR4K27Q77yFwyPgFFeLbXLMNbzdf4nr2xNQJpemCGc1MxYRVH2mf9q7xxUiKgeNt3g66XnRFW2EdMfx",
  "key4": "4QjdjN8B3dbfpGUAVTviUPU7iaPJdSmfZewDnDpQkpVsoBbvsqDSzd6p7Jr2d4WLxeAxv9EFtpVzjKYSkcdUUrZW",
  "key5": "2VcLuCa2XVTVVqLQ7i7ZfeBEvnGzqsuFTikEasCYJ3NzJmQEvUH6bdfFVoP1zVBaCAnJSvQRKVrRERnkAPc3SA7w",
  "key6": "3Zc1xiEf9MmuHzimCzSJehf5LkYDuwxmBfb7ZmhkfkycMYvxFbBn3jynoQ1Pu9BKWbMFS3XNYT9Rg3w3MXK52DV3",
  "key7": "5EiE8ziSZVGTr4vTznoY4acUUGHSun8WsggubYWeYRmffms7JmCK9yioYFVkiT6MwYET9cugaesooJpveFYwnYt5",
  "key8": "4rMzMSt4VrTJ9YDMu2duJB1EjWuC41M4iAVwpXDxGCGKq3LVMPpcRMgZmTTnZPpVoEYeuBXRu5RjcT11sJb8JYpG",
  "key9": "4QWXiVu8jgRwq3tmbSeaqdDFF6LE4JAZgTkJLvf5kNFJboznjRdKpEqG6uJtpBDxemtfAysQPydhGkZN4vZczawP",
  "key10": "4XbgmHJJ8JoZjZZUL2LscK8PxgttfufdQbWiRr8Q3H2fvVqC1ZgxynbNfukNCKFPkxZ9gxA6bdMKjTEiF7agmbma",
  "key11": "2rLh9LrcL8WDC3JCJqLcyUKNKVkvhvF5tQ5AmYYg8Rv8YRSfEHH6jSUhHex22uUSma9dJi7SQqYa7bB2uDbzicqs",
  "key12": "2GKscsd5AyTEdhUxqzsV7aadon7yD7u57LU5tRtSsHC2qDiPi4NXdLCMjTM35k7aiYFzuhTSqSkTFKdbjZ8KLKmr",
  "key13": "2sXqhuXoADVcqk9Vma31pPdLqjnuw5mKXWNqu8Hh3RbwVqk2TBiSGBuKcq3WBm4WsoiRxqJRZFEihZE6dSqxE1pc",
  "key14": "5mBCCiq3tBnuynxMtkCfT5ttVkVnKKwtNSZ9fWADpLz8wk8W15SQoMhbvDyi8KSr8BGs5TKFTywEAMgwd7Vmj7qx",
  "key15": "DsX1Niw5mBtXXUEqXSZrkD2yUto7tQaJouzntwKLxQN82ZLZfiJZbxxaPkH9Vn5ynike8K5Wo8X2P5DvsGNj3yj",
  "key16": "3KtiQyx9Gs3i37917jwVxNXyAYQWAtycWB3BVYBsGSyVGiKpC2jPa6rjihTckzECovjVzCyyLKfVdvDyz5F2uaZA",
  "key17": "4ahye4rxvZpLrVADFTFbZ2AkHN1k1Krt1gCavES9b6kp4myrqRWfAvkbfNks9rW73AzKpRsCBKbDtuky8NiJEaBQ",
  "key18": "5RoYQQb9jPePBBLd9vxuUwUSWW8dKugA48hT6tLZaJsN8pw9KX2h5b6QMMJaKirtMYeriLmJcSLBi6RmhzeNyzH7",
  "key19": "2h6Tf2beepbbG1vX6dMHHcfoiccLBcPFNb6Msvosn77wSrvrETRkjjGUHYNS8bxRk4r9pcGkYU9m31NQQnGgCfAy",
  "key20": "2zz9mJxNHa3rgSv4KNAXUQVUDPCXMVs9YkdFkPs34SrQoDLHM1bDH8MM5APkeUEacNRue6xQftdc9MvEfsLC7Szb",
  "key21": "4WnbWRhQYLC28omvsHBRkw3VERovHdpLMJb5V6xV1QofnQp8WWzCps7K3Th4TX7EJ7yZH2gu7EDBPEJakzZqNbpJ",
  "key22": "5ZH4qm9GqS6JDAc6Zkr7Aux1FYuVsSG5rEFJyp4s7ruFnZF3gY9FHQHrjkbPDahdw22mxrYTuUC2JxG4k1YouCPo",
  "key23": "x3FE1f4MvNRRByXwgqMt4PvzoGxPuMLsB5xKjUSQuvimyUJvWBCapus9Z28gDSc57jLF2QW5igqc6jMnd65s1qt",
  "key24": "5HRUaV1FCvPnPfNRBQgZbZbdxesaNa6ntJjcRY3Je1X9KGq5TXmdXwEyY51PM2GY252kzHnrHQCJL969RA1f8Sqp",
  "key25": "rY9NhyLtxP5kpZ9xFSg6mKspMpWujE3ibHaWHnE3HSKZhG7cmgCo6JM6LTnPndy65CfxqcvSLRLoNEMkHdrdQi2",
  "key26": "4pSZcKcHagjyisWS5k6W5bnbC1foHZGRE1YroSzY392f3cZHDC3uY3wuVXB2Q5G1n7JnxjahHyH88fkqjXKJtjko",
  "key27": "3ZTmoNs7WQXoHb5Z6Y7i2GbcFebo8LcNjEWyVqkxzNVo9CfU1mtrUMyJA67vpCSHon7S6g2cKEnu5E2XBpW9NZ2f",
  "key28": "2nyoWymCE6LijqYa3VN8UHcsVxS6BxFNgrJkPTeB2PkjeuTZh16oCz3cxAYMuJozdGMYkihy8txzTVzNWCeVcV7p",
  "key29": "4RJ4AxNpVnJTXPZ68wFXWKVVqYCKdMjZjczq9yprjoRWk5TtC6jmoVZZFfUQkCvogZaD9nhyz655XZwJ33TWxTjU",
  "key30": "2zihjexaVguypxMap2NK9fWVxnk6SXTbHvDh45rXemcevTbEqk1rw3FRAUrhXcA5K5kaWFrMgc3hpFTEq3c3agYP",
  "key31": "36nNNzyfLKCQ2FZgkC2u8vtYoN5EG5MdQDJi1Q5AHrRt1hYvukQ5EkzGA5v62yL9FsDWcvj4H6jzX9VBaox6wXiD",
  "key32": "2Ndze53cCVedH6vLFMmGCL1Ua5kCmBQafi3huPArgFG4CK23DUG6NaYUMinGLQh8xtkrW6aSZtTvcQ1Nokbixn1j",
  "key33": "W6q9rmTEx7Lpu8y1wXm9T37HLWvk87VxzXkJyG458xEWakk6uMAD9gMBvnh9bZWFhWWfHkyjKEDFuxUqKUmo8LR",
  "key34": "5RGoAo33Gbq9GbBcfwJu1MyhC4rBZJoTKtxt3h8SC4xhvTWcSoe8Aj5u81WhC2M1cBziHpcvEqjJzhb91ZyReWXN"
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
