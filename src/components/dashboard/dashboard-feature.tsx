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
    "29aw2bASfyFUAFbkhWSqX2fbCzVWvjiscYdd6GvjwLbMbRyiLV32pL1mfZSXD4VcGrfKAy43aTTqvRBUp1X8SHmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WEtp3TzBsbj8taEQ3q3fYhNDasLY4ToFvsPApNWjYo2sxwS8QMBoV68gKDnSYEx7dBv2p3XykKadUrbAnh89MDV",
  "key1": "4EucAvPwB2ziDcf6X6BAygCdfTuWeFTsAUAzmbam3Bjw2MBRNFJrvcP8s1Ks31oWqjt6EeUowyHniBKAgpRH4tN3",
  "key2": "2kZwkkSfzhybwtoMHQfqJD1Xmtz5EsrZduUDQa1UVR16xU8XLDd6PApx4s3wcH9YqDsi2RWkoVV23MVnGhZbz28L",
  "key3": "3ZUDu4WSsbptqEqyBLmBFmhrQmhKeRcPBrrSFhejjuDJ2cRYRYmHFi98tsRm6NGD83feHCjAWiPL5kXsTcLdnLv2",
  "key4": "5ZwJaSJUXdWo24ZgxXfoiGzP98wmoH8y1FP8Mg1CNaAFdYHC6goNxo7xk4A4PnZMqHm96bcuD4EqaqqoiAcVwEdR",
  "key5": "3utFyUEMJiB7tFosoLgrNLeaz3CYJkWdVTUjExnMki7GE8p92XCkiWivstpRDxT48xYDY2VcepHynqojbp13SDnX",
  "key6": "3zz4iJngbEsFow3Pzu7uw4XVqdFpsNRUg8DbaZm3L17g5bdYQv8oHJA4zfEzJchS3UnCPfzAdzmpbouq1CHgfEYm",
  "key7": "2v6LTUE4nEDukT6eo3yxMVDxKdMoLeUYmtkLje9hwYuXYcAm5AiGZoPBL6FgN3yRztQEN9tpvdAw3B6eGgbPxBo3",
  "key8": "yBFbcmANbXpxWFShufoNgUpGudx2SXovSPrpx35EYpvai7VYop86xkWsL8hn9tFv99FYpg9wcad7ztiyGimkeho",
  "key9": "4KXwrpH6z8C8Y4AgZuHJ3gDXBMHpvY9aMXNEbgvNKSZzjPSXWHX96EVbB27QQiL496K9X8HmvBJJ2tPwt1Qn5DXc",
  "key10": "4P6FDaKHFKPXSMXSuPqvvqrcjfoCQqyvuKX5DeTM1WSd3b9vFd3d5VppDKvYm9KPh7fktEw1esxhFHZ1XuEQM3eT",
  "key11": "2cDiTFcEx9ENtxRxSUqjeJnUEzDc3Vn776hBAFBaAr8LpepqQRns8UgxVsw47JeLkf9qQczpLG8WS4JE46ktK6Co",
  "key12": "48Edon17NkYCDTnkCdCZETBjrwoa3XZG2r6pVZYzmFtwdNBChsFnKfXtSvVd7wmi924vDZLeoH4ULkBuYLV1RBFN",
  "key13": "2foSfiVxcdXgn9RCNsbDVALr9ceGHfJF59YkDE3rhQinwAoW1yu9Hf8Uhins3A6sjF2oE3ZQ9xr8AwE5F8JTSs14",
  "key14": "4gCLC6gWaxenLYMWYZ6EMVpdMCjkgGJn6xhmXr1STQi9XY5kcj9FyYQu5Db5iwNDvWitmNNuKtpUCJk5k7zR7wja",
  "key15": "4NCXCTT8JvqhakUqWAtu2bByoEbidrm4bFZhstJ7fx6wkxSP2NXEsbhAP55bBhC5gVSJTigfSKUipvgvLuPwWMAc",
  "key16": "2VUhQzvbjnxexcFJdjjYqdwc1EzNAkdCG8yiwbypv7GCjdW3SNYPJmBpudSCXa9xD3oAw3f2Q9cUCh75NuZv7Zvt",
  "key17": "3ZZG9aLA9e5XCpc1QJGHAByjCFG4s4PGK3L2J5RPZvyiGe2hUVTYvgkdKWNAjjcV78eNHwZzk45UuJ8Mp3PYqWEj",
  "key18": "3d1jKEYyxbKmQvKs2XZHpa7mYesuMfAeKrCcQW5YYL4jPA79q5Tunr9xpAg6mUoBiuYkfcScvZWZ1ghujTARm7SB",
  "key19": "5np1vFeibsvYuQZu8BsF9QUuqx9TN3bj8e8JHjuQ97Jq4m81R43DsKk643TDBNLw5AiErFxmReP95Q5QnK2UMLZJ",
  "key20": "M3bVjfXzJkv4fdrqmbnwEzFq9WN99eRXBL6WBVbzvSMYyqfiQncJWi4drKrx4AZRXFyDowVnAa6WMWfe8gKezg6",
  "key21": "4pFPkNKNAjkZpM1kQk3JCKaSVrjDXoe1nhd2qGPfStzmnwaLG7ZxDb9Jz9v7XWYpxTnTnTat22zGkUxrJ4GdnfCh",
  "key22": "5qdjsxRsdsEwpaN4Aq1jWXMYAD6yTMQ7eB7be3tUmHsMPcikraB479CjnnAftmoMqAeoyACxdrdVzPEf5aNCNE5T",
  "key23": "5k1j6VCKT7wZG2U3iKC15mt8U4DWAVBJr1ivpgS3pTKGgwT7fVS1rCeNSyXg9C3NxyKagXo5QQrr9ByHVCPKBVkR",
  "key24": "5xxBSdXPxF3Lbj4cJTWDcTT5Ki83FrPi8Spyze17rB788PX3MMGpCdGTpypNRvgq8s1KeaPdff2XXG8YLxnEFWHM",
  "key25": "5eKoiRWoT1rtTTjPy2jyVjLxxNcwLKppPeTy8yBspAw9UrDFBfnAa3r3SXBbPf5MQntc4mGPRfUqS2rNkK6j5tvM",
  "key26": "2VWASzo5CUr7gU3p5YL81zqUDxWXbvr9tKFtcgDkwg6oyiwXAYGzFL3cxj5Hq97H7o31QiN8CW7msoHSAb7aKwNX",
  "key27": "5dW73cY8pFQhgzoTov9FAiSmZ6wWcaSGJmUQLDgLc91VeiG6bT7hyLMcoXDJAk9jLpE9zjoDqbMTi2Wd2qkmJD6c",
  "key28": "3Q69SNTiXKiq1A2Xz9e3wktEXin9vZsSo4Mr8VcQsxW8rznGwJdYq1CTGhw8GUe54vL4vDJYgE1dK16bwjY4sEsj",
  "key29": "5cqfoZxN1xWYYgV9AHWUSU8jgKonnhY5awBjb5vomfAUeSD7kPzCuHrGo1nLc6ELjHcBty1nzKE4a8DqUP1AfEQg",
  "key30": "2qeNTnJRqyH8zgq4Aw9JehnJ2yRkb3R4DdLCFWa8abEJ7qBzGmyVJTq5ehS9T3Vd2n5vcxZnLo1p3HaLJdPmRW5i",
  "key31": "DR5jFPeD1Exjs7RtdmjrR3dN4v58cBx6ZTSzrqYcgULGVLw6BeYSRkGpbdu64YcPN9vmSMbyeSEbVoZQAhzkCm5"
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
