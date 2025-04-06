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
    "551LzgP5G1ckaCEPTumCz51ZcaMt4MwCRsCrC1PpuheSGTPwUCS3sVjqzNT4FerXXnrn6ceQoYKtMabBNT838gmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kYyTdGZpcMckSbhF18NUxuVGCB2qxWZYDdS5eJL7rpFJbd1H2YsxZsirzB6mTHoeTAxwHhkAGT47rCE6RHemdDq",
  "key1": "3hqnfdYJr3Tcq2kRg9Rf4sACcv7qjivdwP2vkMy8Nqre8RGb513fkyEVxEwZWYBuXf3zRZzBHZGjR9hHftBGLxhp",
  "key2": "29einAnoAahNyzTsN8isPzZuHbkygBmfxgpj1E6GZYWjEEEhjJbaidjZmXkTPkBneRgWJ5SpZpfaTH1b3WPZTjpY",
  "key3": "bHguAtMyiaV4YqQBTGrg1LNMQFDWWzs2FrGeYePqm1ea1qbtQecCyBzEa74dB5fc3oXkPFETWgZ1yGEHHhCQmyr",
  "key4": "5GBgH62zuqqxUidY4yDUHVo9ahe8N3fpTfLhMr1m6V3uiNCpaqn1eRB9KYD1YupuwsGV8BvVJyF7U2PVjyZDhkJ",
  "key5": "3VVyi9jZ8UFdQFx2Z69cxf34zM4d9aUywnBygH6wwKUWEgVSSR1GLYrWPRsnQu3KUEexrsBGjHRLbxxijdTxswPT",
  "key6": "4zK4sXQxU7i5BjMYiy4qoStN8StTvoj2zeKxmAiUXZkbAFKWHPMsmJ6i27BedQrDRdkJHLmWBv2UBUeRokoMo1gR",
  "key7": "5UeehwfmcZctdCfZx8Sc5CZBLG858kxXqFTP3NnNBxsWLz83D2wuPbAmYxkHCKgKXovzJYAxgXZcdxqVoxcynkkY",
  "key8": "66QKvdkyjR2narwB9Q3yR8VxvL4gNMHTnBeCTY6woSTEHay4dFrrVVMPhmL8F9n4iEiPBTBDGtFSna8uSNpk1ztm",
  "key9": "5qnNbPjgD9pZaWFkLpuzMRhmCDZknyKFRgFL3LBRuXBkyhxqndngof3Fpqp9HGKgP85eD46m1AYkvZzznC74FWHw",
  "key10": "3rKDXiawR2YPLF3kkAxJhKntzyMGSpodxM6Qeu314u3djqh74DFHyPDDEm2kFUD53hVdrRB4d8mHKwhKiDN47iQz",
  "key11": "2TbTaHQN3uKZ2BvjmKg8z73bszTx9nWmyiGcYbZS81Whv9Kff69zKEt8QwpobpEuLKUiEqJkZgPETT5mJ4KoRL3c",
  "key12": "2ggrmSNvvihK2y2vh8fCWg9Ejh2kgyEvSknxa7oqpww22cEne4hgv7qnVfLywZ5bpdAdbqMFAduvNpcZA7ENVTfh",
  "key13": "WeeF1Eh387bA3vyQ9QJvRFEtndv5TjYPUFUerYLyUmeNVnxjTdVNdhi8TcrCdzZgW6rQXc3EVoNmEN1ewZYsVac",
  "key14": "2iQCoGzCqYR3zU23AFoLFLm5BGKGseKXj7BQ1CtJRCVdiZ5bW1qfUGKuRE9U9hcfQX41hLz3RcfmHZNSvR9CpgUj",
  "key15": "1myfmstnXrPqakcbv8aExFRZk4ZL2cZucivgnLPTVLS85Argf45cwuk8M97h7p1kVA7nMonRLKMitvQnQ5iUpYZ",
  "key16": "5S5YUTzme2bu6VbZxtfDBWNjmc9SUQRx18K3w1Rfh4EpEzJAb3R9Jwq6rv2ezt4QspDSP5SoFBxZhcTzRcJbTdRt",
  "key17": "5ic9dUwQAJSHcoFhN3YpRmwKVRZ1C2KLPi9YpD6phwKxosXRE6WD5EZQZm9fCa1cnw4UjhtrMY5wvSw9yQQmXzri",
  "key18": "3yqp6DPxEtxnLJjyfnXw9tiuMnkZKwDdfNJe5QPR15QZsTPtF6wqCXPKMa3V3eRFUNSasTCM8L15o3SbJ7qXUSXD",
  "key19": "328488M9pb87Vtz4w4UoY3ddU33ZM3KrpTTDumCLmmRqJ3NmdKKARtCLe11rKphZqASVqd2yeA5qNNX9nrxMVk2h",
  "key20": "5c1tBTmXDHZhG5NTWYdXYiVQKZfQ95QQMYXQb87QYyZ4rwsHUvYFCy3qmfonK4JwR4ZJQaTRPrz8BNhffYHbHP63",
  "key21": "2R7mfMfGiM64zFocmUBKNfpyvo5L2jf7BAnucLZ3kqyqDY87mnMwaQL1ptdpesbucUR29JA7cn2efK2s5esmRJnj",
  "key22": "3qewF1hhpx8dAY2eCmFroVYkwtoqQEMVM4xJywAYVJCxxpnuqVAXk5wDySL7M4o7mgxo5Ab5ZdauUmtr9YLay8Mo",
  "key23": "2f3mZMkHgmZUK5RS2Rfw3yxLk7aExmusrC3GXp6mGG7GpTB9JCDSJ7Cojaq5EPS38hegMyC8bZ9qQDbnCoMNfYEX",
  "key24": "jxavqsjDZyQm439EYaUQMQ5g3ubnhgt7PR3Xux1WfVU8c2oEzCxMtS3CejfRRVR2YSuNvy8b7F3HRs3Me9u27jH",
  "key25": "2BY5xVf7zVbZdpr9uwVpKUuJ6cvzJJEszCT2v15GH71wsvKzQb8UeM5h8zBixdKL6xyDLDoA4gQBuVmy71QrS3Ap",
  "key26": "cqsGc5xAkheUXziPxoyPMSqYLvhMfzrnw97LsPfjcMngU1LYdiQUjrvxnYmzo8RVQ3zMgGHKrgYjNehYHte3up2",
  "key27": "3ZBT6yBXdTG9tRy3f4fCFKEhmJvRMsfArb2m6NCA6e2drcW3zQ6HpGoPuJFKsWWTdKE8Jfjs5tcDnWNWh8ryxc3F",
  "key28": "2anc4n4aXwUAQEihjpJX9Er5jgy4HGso6k4hjU1BUDFFHvQPgxQvP23twUFTmzGK8wjhyAKq9NoPWJvp5fNmFKhR",
  "key29": "4ZWfJQ6WVbSHaMD8v4wHa9QhUL6QRrRVwuePk7CGv3dq6aFyEqLjtrvXg5guEMV54LW29JawipoqMjsPx5xcXGqb",
  "key30": "3i6sANoHUXST99EkvaVFVJs9xmRpGsqzV4FCMZjBYg2hkpuobwioKgzRWZLFNUiL8sFtxdBKtm6FE7SkFLbU7Vyz",
  "key31": "4AsQipckfUBZht4Z323cASgAt7VsWteShiBxet8zayzuaJL2FbRZeM1yV7gkueWzB3sNhPwwxfyRoBWLWPkVpj4w",
  "key32": "adwCwGfhXuS7HpiTXEY5q2Wev5XmDERBcNzXE6TXvrYLmTeDh7kjPp31pubLKFnnNugFxGT81zhp2E5xL9qK3Wb",
  "key33": "3WrAmRJTDGzb5S26tpMM5kV8rB98VtNM2dJgNbCmi2EXHzpQQEP4YKFRyocqR4yjazShbfw5mSJyWPZte5xac1MZ",
  "key34": "2e6NkdxnRrYKCpW55n6GxGjRyeDAKwhZNFwUGtPZPDJ2126CdNFt3X3gKYqCc9QvyZZfyQr6reFhDX9pFUhAK7aF",
  "key35": "447dQLm4ZTgfWA6kpJW6EiGJmLLyBMDwGF2i49LSk38J3qjdg6Ft6oFnRMqvHV14j7aT1VVqKF8TNyTCXC75f4TW",
  "key36": "3GXYDiEaJaZVuod7ymSYMmkJ7mCJGCUGc5EDpzV9tPNY9PEJZVoDKvDdLyzgvmDKbSvxiVe5gGWPhw473d6ABKrW",
  "key37": "4qWAVJpRrSeiyAF9nkWVsqqzoxMXp8X5EJnMC6XLjqb89kXooCJ35hy9PLkW3SeHHuJqTVBbvqXJ9VSViiiKqAMp",
  "key38": "3HauEA5TDMEdJox1dDVtZW5T6z6y2bfjNyKHViEmJpkv6X3o8UyaybwnQ1VacGFwM8cmGf2fnweWHuXWnDoiM6Rd",
  "key39": "sRdUkDFh2KY7DbZsPZRGBiegqTyzDGNffbKEmWe38sW8HUNLJhMmvDBu9qPnkchVBq5K4grJ9Y8zWZzK3t99ZU7",
  "key40": "5We56UZyNphyg5zLiyxXuDYHnmQm7Uq6CakVW5Tq62wrng8FWHR6KU3X9HpBix8wN8pDvwd4KoBRbYKgZYVRJa1t",
  "key41": "2uQLT1yxALR9PYwzpscUq9kmw82pN3c7zSrEhnAbXxvp3FdPoZfACue6XzRea1ZXFaekQXfhi2FjNDbVjATQtK4B",
  "key42": "5HcV1qDFPcCNhUMVRDor72EZANJA1C4mcCWGSjRh7Eq7K4FvUbVVGvowCYHaywaxjNjcn6JJzTxEp3nkBpHi647C",
  "key43": "vvNimjzEcdvJm2taTy3aAvMu1DAWoUe31FbWzdfNbyD48bjNBuRdXWPhBRDHibCozDomUGX8CUsKU6GcwHGFbiA",
  "key44": "5AXYf9itYqmZUmPPNdcSvs46kBbUTgLXY3hKQDDRF2ptq3iNe9gzhcHov2weUkvAep4aCTyYecRVXPCjNXyn6HdM",
  "key45": "meDBAGctWcfJyDMQLFBpKHbesCeWXeGGeafdywEqyXjLydign97Dn5Xm7kMoVCpdn7NiGs9QuSUrpovftE8pP5L",
  "key46": "3WggdTS5g7uEYrVHU2ksWN2cskQwMfT5UzLgSALzvVLCXGh4Xd2dYcqfcAu3jB63VjRvi4ewgx8jEf85GaBpquAz",
  "key47": "3k2LHbbzVhieKFeNZHLfEQmLvXM2Q84x1zpuS472VxMhSiV7F8sRNpDguuxBqpCVigctXyKHhNB6V5b3xHjSr9Aj"
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
