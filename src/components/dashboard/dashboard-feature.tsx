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
    "LvFpqj7yxmSM6KmqyhG42fP4ui3HZ18c4aRv2k7iaLgYoC8QGZeUzkttYreJXeZC389vAkaNpr3k7BLsxHMx82a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65pP66hcjznfN2RnFL3yVgQi9VvpZUCpmA6stnYvM6kqAjiv7epL1YnA6DJL1QWeVygjMkU423dYNi1bRigq7KnK",
  "key1": "mYu3A8zSPsUe1Fav9aTXp6qzLdqPUZ2N3RbZJM749BpyYWQ1rYqH7YgD95Q7qufntWfuLhrFtZGjxXkPUWEesxd",
  "key2": "4sk84qSa54Ttiozxtue7LhZeacRmvRq6v9JA2mWYXnafsyyg719UzgEmHfh5zKxXYhDEg9WonxqfirXTHnDacjkX",
  "key3": "3PsP3aKPGPYLopbgmtFMWNAXuaP2iF7pQJYyf4Q4unGf1RAqQAo55f98fRnwBYDYkdL5zmdhvvyUf6gWWBUBSPKU",
  "key4": "4sxu5AxKv1pdADQL1KMyKWCHNsD9de3EsfE1cz2wEm3VJm19QPSpiwyhzfX87m27UkgXx64DUdUHceywo5hWcca5",
  "key5": "3osQDpUqocFL3PF9SMspeaKUcPfKmDi9e8AYd2uH5y46FRGqrkiX9NY5e5LE1rkwQCHro4BTW9NaDdrBPvN9AETy",
  "key6": "3PyNd2NSHco2dbTqdrBUjDaXG1JC1ejPz1sLrEyfpjXP4mxz1Eg4Uoxuz9zDqWQLkXPeFceJotmY5JLS2BDQyE7E",
  "key7": "2fpm6AETwXSNRpoEJtH9hcAULrwQ2bgVqDGSqHQJP6txNegeGrwgaUKbzBwLukPy94HTShtLeYjmauYUpoWwLWkJ",
  "key8": "Rkz74FtdzGWRgdkjWFSuS8gQmRZMH5mrrgdTRLGBrHuKiWbHp4QCexhUyC77z45xhCQWwpbj9j4Jg1Ua1SGjUo6",
  "key9": "KxtZUxQs8yCRmRydL5Avfq8Y3GYDMZuTKLwmikM8xCnYWK3MhZeE7aYk1dnhjcNCJybSNw5H88hivBz1d7aXFya",
  "key10": "3Vo43B1qzdK9mrp7givL5TDL5wnRud8Dk6zugF1JsTqPyYSroCwu2sWSb5BBihiGcLNirGJGfSGLUnVcDYg76UGe",
  "key11": "2SME4vhV4R9ThHZ3eEDcSVUJqqHKvNSb9oubZisu6UcZyNAmcXKe45Y6u9s6VV2rbAscVggcdtd2nT2RTav6PfKo",
  "key12": "4WxJHejkeg49HEsYMxGMiyLQMfsvWpSZFKPwzstfpyhNQKhxfcjvJdy7TKR773yDkAaxSNYPTytYNx6QLgQcY4oW",
  "key13": "kCRM52LcmNv7BhdVLa2kEkjqfqWr5ucgs6tZRPj2RC4qzT7YJB4LtaT3pGhXpSqtFuzax51F8b9QdCJnM3z4QKK",
  "key14": "5U5FEoCVGGXuejQzfGHQLjHiubFgj26QqN8rzJYUJxLTjoEHB5KcB9tdqw5KYASPdw6RbBxu2ZcLHAz4bbu4LV5w",
  "key15": "3uVxpFJaHYsx18oHwddtfUpHPPzFLV11PSg6DHEDXMQLXwuZFeFtbfiWSqmCF6Fk3BbHs12RpVYNDeweufLbiJQ4",
  "key16": "4BPcqmaVTiNbEv7N9jHNx2KAZ7s84hxjbRrnSrdQCN4M5S9BScDrofdTUtfDFXZKSpGe2aZSj2VTcoNkRLPrmHMG",
  "key17": "x5gXDeTmRoXerHGaLvP5Du1VAKbmCXYWzZDnBiXNvJDZovXQHUVXBjUhFHe85FCx1KtBV9UhTnaNQeLpJGsULk1",
  "key18": "5T4ZkRoXVZz2yQ7d1jbZrSxvgRBFJRJKqr5gdKZrMKfQHgrFWK4D6ESXVQdNmnZZfQKDM91tth2HJgNHNhuZrwNw",
  "key19": "2ByxC2DYvqZm54NUJPepg9pRrn8VppaKz6yKnjAo1zYPAzMyE65GUKhaFG6ZHCHkvZZkGaCcMG4M5M5sFULEVYPo",
  "key20": "KJeRWVbioLwCYYyBUfPVRmBYRsmFp8hYPXJSfw8kjRLaXU6rcx3rSFRsmNjwGfqh6oB6efAD8gUHQ9XgbHufzjW",
  "key21": "4DbZ2E5LbBZTm7PknD6y2jsBe1gzsGpVrCGotLKhFrEB4hf7GApcnf8cGxVYdyM12yKpRZpH5i6iQrTQqXzG3D4e",
  "key22": "5z6QsVFPM8N1m7s79Csbh5wfXWCQVH6umgAE1bhnnBsUYNndxqMr1hw1UZne3PjDe3LR3uYT68zidpkZxB24kapU",
  "key23": "4UMugsqy1t6JVszU2z94L2yXpbqd3MEeh2MiEhRLUqLgfAakHXwPx6E8PhD5Zj6tFnU3VKp6UFt1PNr5454qkNiG",
  "key24": "2vkaUNgomdHTNhdkLDFUcqusFBYEdMryxCW6weg4CyRjCQ2phgPN7akzD83Rtzs5KPszvgRgvyKNSmND1hsNhVzz",
  "key25": "3oFULT9ivTYRDrZRRkXJCwfkTLqj8pXCXyz5mrqHn16Sxr7eCfXYs8z8NpbFVTYsR18MMRmQ33ptSJBrMrAbjiJA",
  "key26": "5hhVFcLGyzaMReeSZGRWhDNH4ZcbS2VgEw5dKWn1gosoMiDoW7Fx1zSb3bqJt3aviypmS7UPLWoRmeTxq5kXhkP9",
  "key27": "9q58Lc4QyKCrBTfTn9c9F8CMv7TmAhtQwn17wUe7yEpBaXa7fdnCTxBu7LpgmCgyQTAX7rkjeh2AmSMsYDWNWHq",
  "key28": "2zRzv2Pq1VzYsburkRdn3fpxM5u4fYvSaGVdjQNfpVDV8hu5mHQsspnEE7y9btua98FFapQvEwSVMMPqMmZStqdP",
  "key29": "mePgL2XTxRK3JS15CH5hHt8L6w6xZmkXbAQAaC74UuY3TNWZcNozdt1duXH28z2vjd6vtzHFkhHrYmBwJGkiL8b",
  "key30": "3yNM7qXR6qqAVzzYVpisPA6k9Emg9KcPm7KYrySkK8A5zxDPeX4PFW9ftqTHnnpGy9Qfkaxa8AVnAiP7CkqzXSTC",
  "key31": "2AjGA5oTNSbmNpguTQk8ky1Tq7LnFgWdyrq2rh8WGYpJrXLM5S4nwCK5UZRyMZxkAdyY8z65WaEFDqaTaLBcGPQb",
  "key32": "5PJeiymwdqHAVLS2wjLqRVUrjC8zMLh8Y4Ji9Do2MtXjV895S7Eo5fTohnGY5jyWDSVrPEoyNckmdwi6dQefmVax",
  "key33": "2N1GVNFFmgVQ6px9sUNFvsz8NH1HJNFTQzqoWx1jqXeBn6k66A72ksX1AvpDCbbAGgMEZe7BLJq75SkPAXSrenCi",
  "key34": "47nVuEGWrU1nMX7vuDbNUW32Tdifho9u8dTfbP6y8CpmK5TJjVo5qyqruFVYvEkYyVyWvM79YF2aVAHoWTQ1KTtm",
  "key35": "2AsofngCVQV1wTbAmB1XvuUvxn9QStvKn19ByfYwQccGFF9eoPom6k15yySvYuznjkqmHinaP3BGPEkDTw9UQQPU",
  "key36": "3kXanCBRep74wR9Go79z6thTBRrkYarVmU1Dg5apS8Ghi4REKWdy7rHSsMKpE2snLHX32pWEGSU7srCQynf38R9Y",
  "key37": "5FGiB7JhZ6HWc4NxQgf1kojWDriK3VbZ6gn9ZTWNmT2sjaXmJXfxRHyk9F4s7NvffKPMUG7JfNN5P3i7UVJDykpp"
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
