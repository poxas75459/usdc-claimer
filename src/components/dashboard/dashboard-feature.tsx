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
    "28gajJXJWY9KNku3MZxS5UcUerYHPDkcMJPfZT1ppWNCoewJKsRyJYYMvAmXGGKLT9qf3Vtu2vCEAhESaA4n6Qt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62NcjaZ4F3R2hjyFDfNNt15V1WydcPThefgd5X4NZqgbzab34hwygsCU2cBwb5payM6MDfT8qUVTpLbvHUD3qmEb",
  "key1": "5XSpztnqR7rF2xsAXaYB4Xd6HCh83PGwHa8Kvu9fTRZB83wWh1f7qdecEgsSrtjCgzxCdyUvGUwNndbNGsZEjfbE",
  "key2": "5eyJz15aYd8Qpg4b8dA4p7YnVZ25CNnJWaAuzfxCbhnJvrP5jH8kcu1p8EipZXXDxGX2ZgqFZ2yTfBvFZ3Lxf8nd",
  "key3": "4XDve5BS1MfGpUfwwrqmXQr5F7vFj7UdEepf6wg93UakeSsQXmYSf51dL7Bg48Y8yF3JKqb36jXh15tecMuRMbCD",
  "key4": "5HGuM9VBqcbH5JHTTkZBTxSBPatTgQmxtac1YfMzKf8REZJK3n3NvK8ChMJ9WerneordFW9cRCynmPV3hAYbLm6V",
  "key5": "bfhK7uZ1D94L42JZRnut4PTEXRF4tcXttNF36BwbHi3ud6U3xX7MYjiA9YDKV4ckHjj1zMbbarSB3N24a5GdQkf",
  "key6": "4RMDDMu9Pma4WGQRoM52TAezmHMftrf7rZjdUTEcESqUwSRea9tcvuN56SkmFfQP2XS2A6T77RbtnbJTCiDmbnVV",
  "key7": "3tAJJW188bKQLfLRXJJfK5SRL6uTDMAFDyVPFRDdGo1fxm6TKV7WSA4H8bvW1GdjWgsW8YWKLfp3R6QpVjQAQe6m",
  "key8": "222WZGzzrEBWyZXrYfcBkmhc5WVqAknv6FdWgythVMTbf9vGqSyjSsgwynjcJqCCRKZmB26YGmAgzWUCFAbuU31n",
  "key9": "3NeMLjCLujNtnQfvavjMj1TmbHwzGhgANkDNJrucSmQipRYMfSdCGmKL89zr58rK9981TY3RnJpBbPUYbzKPtxnn",
  "key10": "3FpHqfMvmZ2sdGLuZNXGUxC5CtAgJdeTp5Sj1RGpXKmijNTH677gPa75P1ETSAwq8WonXJQCS1YdQYyE6Ehw5xXu",
  "key11": "3gj54t39nMFRsCcY3bkg4BcMKcs13xFTjzPWu4Rz3j4dNJ6i2Xm7Fom1GdvuBfhrgKGQehfK8Q77nuTiRdfJKuei",
  "key12": "4ShH2gxy3XthfrpjqLaTuosMy4UHGt6XvE9QMD61685YdNzmETYgTXuL9Pav3xW49mYyqnRbgja5BDdpaBrbianK",
  "key13": "jK3ZVs4wR2shzCZDq9m2SZ27i5ZM1QESGfsQB2VsuVyKvNy1sdTz2zTDefxHKAToBGxrAL8npGraTjhhpbiMC6N",
  "key14": "5Nrm6J4w2NgUPGqwzNYjcCw397LYdJZrKas7jriCts5pT6c8FRWvs5NLWRjTsP3HiFU2aNBXAGLYUSc3KvRnNyff",
  "key15": "4pWc47f4T4cbEAcvpZzthGZkcwC1RXceyH4CwV3M4oTuqmb1FHJ98ykg5PojFPV4eXrc1uARvqPe7LLMe2Pmy9L2",
  "key16": "c7nQYHLNcbwAcRQ7PEcHA2uxp2pepeer5gAnRfeu7qXyUvfFkDPJnbfHYV3ZcaCtqNcznCBQQ3otBjZ3LVVSKD7",
  "key17": "121EQ68RMiFuY5sMYgrgHGby8mGXDm3UvbBpGA7Ti2x3bXKCPPhZmugvmB7VsDh3C4wT2FSeczj86mBkhx1Bea5E",
  "key18": "4B7T4XVEbvSNQMUoeJjh3WuNnNg5KzbdJLfqji8378TG12yRUeKRTjFpDt5RfTQKVXx9Xpsk8BbJ6XpLjjCaG88n",
  "key19": "746EdANDRCzzwh5YTgaKKDHBwj9LQdLKP22J6iKBcxad2XxesxqaxekQbSFo1eXoz85MZ9xAofUNtBBfk4jKyJj",
  "key20": "2hF2yXbvBj5QsuWo1bRUJF6GpdGe9ohMRkQonkF7iCrB254nLsRTyQxZWfYBCBLfhRSwv1QKoaSWnM3ks8yGAcrY",
  "key21": "L2SXf3n4Cgf3QRAD33tkWZdv7GeSBJ9KQXje2oJQgu8StjPi83sQiidF2N6pmYn8AQJKuU7s5azuaP3DeRnbV4Q",
  "key22": "54ePN62L95Tg1RXo7QDcfu7sj93eovRyvuyrniZNUEfDXNfR5NQ1q7dRytHtG26YcLbYXgL5CsXSLDfcM5aNW1QP",
  "key23": "3h2t1Ggog7qGuq3ipzHWp5xRra9xpriSwrX2Rms8rSbea6FqGxKN76NLfWG5RrThG9zqmC99BJukqxWnRrmvoHwn",
  "key24": "5R4CgVw7oNg1pQ6yLLzc74Hz8xahrEirv8SzM38erTiLpGzD6qXgnut93YWYAkud9aD93ndfx9xxjbXkdX1WjtK7",
  "key25": "2KsvwJWBmWrDWuD7Ni1S7Wnm81EBiZsLh2M2rKEWkSRy1ojT8DH9SyCb3Rw6wLJSHpKgexktVcUqxqLZX4614FXj",
  "key26": "2oVd1jChNSpfEqcRRM69hRZWc8YhJvuYqEHXoVUsZDP8ubg4PpQpuhPqeHLpzr3Y34YLuYK3ddjmg7VYTMMckhU1",
  "key27": "PK7Y2FqumXmsgichcUWkTmfBM53MevZZHoNXWbVsFnfya9q77fFZcPcmYXsdGV13NQrQYocZWQhNtExjFi3kubM",
  "key28": "4jXE6FagAdefVueVdZ7K4Gj3hM8baPD9HPhWuCVHprRKtxV7bCxLXvZY5hg7W6zVxxipRTuuXPSMQsUn7dKHF9Cr",
  "key29": "XfCttSEfigbhHQXJRBxqpRehfzZP8E1Gw4Dvw8FxxRSEayRoorKr8JzuxqsTSq3K8bXgt7ySirfHW5RiWVr1GSz",
  "key30": "5tFtY5Yx9eS7jLqM6wk5b9bqh6svHg5S2NftVzB76XzEU4gt6CXsHpk2Srdx47yaGEeWQLxrXLaZEU5MyeEak9Xw",
  "key31": "28btsYyqsD8hBf9nW6cf2fFktYYH7S5wkHuK9C7u9dukbXK9ntncrU2Hoo4EL5BhKcigooKr5KNTsezpLb9hRzec",
  "key32": "4apov2rWgiiMZYFRHe7gDrGoiyjfjj7uEXtCbLguJNRfZa4WAiu8j7tLrPcf7eaKnF4z7sz7uMo45qPCUerNsu6",
  "key33": "5cessCD5RGXetE2B4jmfNqbUQ3oqYHUg1eSURBBwb7KbcEfzNfmmmMmSsw2hA17v97LcRygMWSeoaK8foNw9vtwf",
  "key34": "2PJqzmz7gwjreLSm4EwF3sM5De6M7jQo1gVkG6j7gu6WreKg9cvee9j77KhDjc2KLDskBhobx7nGnAR4SQE4L1U8",
  "key35": "4W3MXyTFst1hzosDrGXbXcR6iNt5LeT15EFmoYR137v9XmMCDZgregUp75pUcv3vKVVZSDGpPNZBL4wXbcYTmVun",
  "key36": "4JaLFQtTUuxzw5CC6XwYDPa5AU9K9qFy2npZeBdirRjo3He8YSFhgAzvQjtMBovsnmenYqK9rrWBCG3a3NgwdsHz",
  "key37": "5c2s4fg44JX1brLeYj4KChaDrgcYvmpX6wr8pmS4nBVmv3tnfapckh3oyh3Fi6s2e5bk64qCzJwaweUibc8qiE4W",
  "key38": "2PR6FKM2ucrQtkgdi9uCjcQYF1uZ7XJpDAb4iiarf6pzPe6HKGVNdPzy8Ft5QfLwqJsdyJizujkyK4c5ZLB1X9q1",
  "key39": "2BYN1BnRoy7gBe55k6rp1UrvNZ1UHZaE39XnLcYrs1VddXMk7eoSMsSAfhcFgSEvZPviZduxfKpvDQiNeF7KSxEy",
  "key40": "4vy8QhLAMAYmSK4jaz2N3DRS5Cnd21Sy5QkFueftrhgx3FxSYd8zkuJoEe3NWkzDFtkpPzDcN6S4p4EmiJkE8kSE",
  "key41": "3zVR1p6oDKCMbcwqJRx5pP2Vgo3dBV1AEzFYrpMf26d7KzRTJv3nZ8jr9ypD9C2DE7dkuGAkbGyd4xRjMcVaFRQZ",
  "key42": "63fC4AMA3yN1D6rUK3rgVRsx1aMG8VMMi18esNAq7YfHQGyfZH5qnyy7gUWrfEkcZHVikkHZV3nFu92HSckXeJtk",
  "key43": "3V9M7v4hAgHJw7qsEk4VUv3Nu9mgtqyzYjEaLr7WGLJnLr7NZMJtdw7pNBqHFtqbWMmnSXasnpD6pdtK2y47Wohi",
  "key44": "pEmYZxp9VxcFvFNorNjXQj15Y6azZjXU5TTyRxsH76AWtcVexLajNRUvFebx37Ts3h2JVtLZZEcAb9Ge4DuYqHb",
  "key45": "LBfmyANEH76VMR1HfKmDJTv8ThDPWAAaPhERgfd8jCkpo8CuaUEAgb24ubc5GEfEGRdayviwY3xx9LCUZ9bw9Bv",
  "key46": "59jETwZt7kMUWk2YrQPZ8voFicMaMikeHLwMo84j5XkWy7TccJD3XL7rhBVRPCqfQjFXJe6jKsZB55gfQLWsSyvM",
  "key47": "4cvZSv91rKPFUecpbTf612Wid8jL5wemBCR1JtriiizgnUAnGApzp8V3iy5p4sR2qAaqvXTh9Zo7RCvzJBrnFsTu",
  "key48": "5CNSTripkXCHG4Aa7Z7B9FhCJ8YBma5EUagUptBZKSP5KhNn8mtfc8yKm5F7gwBnALr1J4wu5f5tK1LSNj9KTmFe",
  "key49": "3AaZ7dASoVtaYzwLPEtZGJAXbk4M5X6yq9WtSeuzZJFSPfCGCta1QgxNjg9hbbhSVSjcuPs5pVMioZwi3rfAjxCR"
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
