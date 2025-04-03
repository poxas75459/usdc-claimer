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
    "4vj272gXjzuhWLda996RPgRb2d2U4tdzfnmCRm4XPLGG13jCmRpSDxYeXvLm4xSRmExwnFWpRHuaA5bTga2qqdtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hsz6Zhikupd3ZwCnxK1Qt2HsiaoRf5Meq3vHQbFGjeA6nekg4zCEhrDhormZNMpoY8Fsmb9ViUpqWbi8rkRo6U4",
  "key1": "3iBDGz84VVgnPH2DkCxQYUrTgcr9dnFe4V4v9p7c1pgLF4XRp3i2u8AY7or4sbyUXrdEi3QT5PfqDobeVW4GaPBz",
  "key2": "3HiuioW9Sb5cZTD7MxiTiRsQekdVovLM5aaPHNU4bokadoirnyHm9fq8a38Uw68tKJ8QdL11Wiw56LbdsXGJruPZ",
  "key3": "4aEzpHvHpzpVNjDKY51UnHAwyHC1pA1jYQcAmJmMsf43hP7TKd16cp6mxUdTmuMn9nNdy2CcQf6D6isvVc2bpfUb",
  "key4": "4Hrk9Qs2Cn9Mz32ZxTAiuUo24ZVCMgp4MAy6uHw2dPEyLNgauZTWNdM38NSe9svc61cZabReXszxVX4Ca1nWzmu2",
  "key5": "2HmD4XMDz9M8xXwTjYVzAop8jNgArLrxMhXpuU2jSDhGCuMXD99JEqRvMvniKKq6gKxrFQERGa24ZdSQPqtYszDx",
  "key6": "dPvHraQEejNQTc6uM6Gs1rKweG4HyHM6EHdFN46nChyNL2HRutNfe1ouwSrMBD1gaCNwwe21JTskky176k6GuhN",
  "key7": "5ffUcj3Jw8sKH6VkfP7Sbay28CGPUWEg9bqZKyZvTkaDKX6DgJxA8i6teKo5pHyacdGbjnNZm9DvKvbYpVYkTxbz",
  "key8": "5dok6gUjfGPkkafRHgQTzcJdcMqAs4eRthxNLX96ymik97e21GU3Dst74hYv6JmDQnq4rHcachfxt3uvEwEyAmwJ",
  "key9": "3RVvioiEab5jJLGKmc5mYiY3HfFihFV7VEHX9WbY9cebvFSrbiHsR6eHEHJ5dxE8wLCrtfBLQrxhReDwBptjMcKJ",
  "key10": "3jvY2gpqAtjBkKJxnZgzeUVQkxbwyer4sQ3mdJueLmkVsdMTTN3TqDU1w8wdQC4ssbvuvTqdRiHU2ifBhshcHhnd",
  "key11": "5tuUK1tNBs9g9eghxSJ6KqVu9evdU9Jn1c9B2qi94wmeS7T4SzdsahQ9ESFExoKA7rWQXgphXFvcniFFewd7FsRZ",
  "key12": "3tPoLEGdw36TkopkoNSSqjQhmJpVBxGd9oeBVyLv2MJBpGB69PRHTPDHHxpPra4sYUJexU5hp8HZk9TC5EYF2BVq",
  "key13": "4b817FHbKbrr7bdZzfG6Pc8xY7x4gpekQsfKFHjpyGep7hGueJAyASDaisDhw3LPyJ7sHuVdFcNa3QeZHZKXrTrY",
  "key14": "5nqwbaUVNe44th8RodCYbyAhsU8E2CuT58Md75j551V2f2Qw3iVDtjrJBNHuqtoJuC57mcDJVu1aR5GRZeYEW6KP",
  "key15": "5VhJqevvz3aERknXmJcxgFH8CC25XMrsiPdBUGWREK7z613UjHtP99Lv8ovkggPAeseJ2av1VgUr2KiLqzEKeHeS",
  "key16": "2VwepTz9pvvk1tfvYXykNxBWW4ora6zUk82yosYELC8CpLGiuP3asGYwUyM4qAJVTM3Vt3t5oY9HBhgvnaACmgu6",
  "key17": "d2KXDtnvVem3knKuZ8YuBNPS5inTKVnFjabzq8DwxCw5wJwbgjfehpHz9fYDBW3jzKEw8uAkEeTMF5N3jxbwT4H",
  "key18": "5MAQFzvxweuEUJDrJ8aoLUbK9KvE77o9TLivfFXjzWEmt4FdwdudT4h9ie4vTJfe8dyDjbmmnKwgWF1JkcQy5ePF",
  "key19": "5sSEDZ4nSqQYAh4nHL3xnefRoCTy2ocxjobTA9PVbxEyqZjY5uBXwXUR8QDxHfYV6XLgbrRt2vL31S8Yfu4Wa8D5",
  "key20": "2XS3wPRjunWe6WHxng5LJtuhzRY3yjzDPK5PsWnXvQeCfJeqZUeSWk4HAV4tAwWmajpx8EMbCerdqdAqNdTw9TZA",
  "key21": "47BLYdqjBZQhXfy19xzrjvzdhzdYWhx2henNrMxqmcePs4k28WbU7FXDde8SpasHqBratHNDfEYvnmcxH9iPgNWn",
  "key22": "4ejNYHtNM3gSsrj3JrBysuZhQDLto68mrmddtTwvgEBi2mcdKRG9emWzKF56AzjeJQK2W1VPjW7SfTbV2f2jY67V",
  "key23": "8rQbgK9PCxt73GF3knb9pUoY4GH4qfSgRGRKo952gmngqqQaFg7ovu9fYWUE42JZnPHcSWyaXMWgxExqqR4wJXu",
  "key24": "2QGZ6kkmsTDmKqLiSPebrti7tnqBieUuAcEK1dxocEJQFCDiC3dgdkJdBveMcnmNwGz4Z8rnGuu9xw9YHnenN6jZ"
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
