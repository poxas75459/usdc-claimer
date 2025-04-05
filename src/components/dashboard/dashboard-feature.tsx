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
    "337fdhC44w98emY5PvPzXEHhZZDoALJqewMk2hhiPL1CK8vvoCjfuMoDrJvsNmuTi9CuqCSj8X6WodywZN5Mrrwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ssdutFYiWsqk7ypBZEJfbhpZ7TZciafmJfQqkNKppZ9mdRDEGRtTVFA1QV3MkaW25aij5wf2v4NHmxtpGfgtZwb",
  "key1": "4de25z1iKVrDPPi4gy7ATYCosRdKUhBmqVwW2rraKzF2vaFpDUc7WGFcjLGLYegcEPqV1fCEWtutAruY8BewGoaM",
  "key2": "2iw8Rg3zrW7sVYJ8Q3j7PM2GByBCohYepPbFTVSRazKgnFEQAmyPTSZNDqU9Qcp9tmym7k5giwiks8Ww1GhfycBd",
  "key3": "5h9vwqivUSRS9hE8mt4JCKxm8qpy1dzH6DcsmY214sjfHRVHqAY54LTSUrjxTSS9ybjiBYNy1L9zWCfdiZFNiUwX",
  "key4": "4frLVzWGJnfHtbMrcLPqNgkgK7di8maNTB6nZuUuHiQT1N5XKWfmYBhpyAp4BhusgAG8M7ES979VU2HuXdcajy67",
  "key5": "34FhaQZAsC4JDq3EQ923QSLbWDjkuzkqLSMLk6VazVJTKceZZu2SGw4zCY3RJVYmxCihFUuR2AMhktoxo8Wybgxv",
  "key6": "GzWHsNquUmgezb9UTccwLa4M8PN67wAMQ944peDfmUjkeZQKHamiNwNdfTQwar4oW3v1thXd2ut6aLrkswADLZt",
  "key7": "646DFayzj8mRSr2o8YRbWVZLziydGCax6Fd9VXtVwmHhECKjvCSubnNqyGHUfFArdqSJPEvu7hvNwEFg6yaSqtNV",
  "key8": "45g8bW5VvGiJmo2pzztR6kAwCncoU87QZcfN73zCGtt4BfCxS4MMCUMg88EJF8xcXkYwHudTg4vq565Zct88WSN4",
  "key9": "5NUV4qvREq1rkQcQj138BRcjCtarEWVz7c8PXa6Hg8e5g8ZgrJuSLgNFVFHpstHWGaWnpc4htrtiMTC1AFt7mCQw",
  "key10": "5aathR6jJvKEgDW9tckaakqJ6rocQ2UQiZ5dcyxKZohD8rCFswHu5Ktzqk4xpFn71ZmL2NyYpnMua1AoxMyvBrE3",
  "key11": "3zQt48zX5y5GVdcPuLPbBJgrY3hmZALRfXtzUmAyC25bdo5jzs832MQbonu3qD13GCKDDvacgzzcKnEcHwT7PRNW",
  "key12": "3TLH9HSzgiMfcbQRSHD6BrKwotMrYfn3EnbJnCqLgrMqnLbUuSXgo23mkLWhR8SuaQch2WP8c6Z5xG5MFFxoeMfh",
  "key13": "2dPhQjPeyy8szjmSnyB5sk7TcnGYbERn5CK3kLY13QxvTu1sRdMRzEnUmxkUciNYK5pro5YPVsUGyapbipE9nuy7",
  "key14": "4mhpJmfFU92yMhR73NNvSnmuHuyEWgdMZvRgZA6CZM9ABATbJFv1Wjx6uDcChDGxwBf8sKzLMJJy9mBGFWy7VXoi",
  "key15": "3V5mtaouMpAhrJoycBNT1Zc4K5DEhQGNuR5Kmp61dwiCfhFkYJuuUy2bK6A1wag9NHr8mh4kn4sdfhxHMBrnkzv7",
  "key16": "2v8DaE18exeWq2kL2DJVUqZVTemcc7KwMffJGSXuF1C9GfSXBJZu6AvVaYnHxNHazYwueCgNPvUcbX8x2fyvjCuY",
  "key17": "mGG8W3i31zT3gJHvoQTDtZ1BPvfa6UTvRgHzJobVxwhLPbjNZbdy1BdAHLLHEC6GuwMuJBRQh5L1KFbe3MfR9zm",
  "key18": "3veiRT4AtqCNbsvG6jA2PBFVKtym1TkFKuVrVusm1WBp6hFApwvgyMBagiHq6KkmULuQC8UMK3enx2TcpygbjPib",
  "key19": "3tV4PD5og1VxyoRBchwBNeBUjvimSrgjCgLxUyYrvnySFyjGgaGCp3gwzXChowHFH6e9nPzoKegPQVeXWAJ1yD9N",
  "key20": "26amqHvs48DcqT2rYBAcWJqQ7QAJHpSDFsLi3NN4C3xgpXyYRwqsH13uemJS6aXaaQoU7iVfqSVFPZv9PrtJj3FQ",
  "key21": "3PKoQKLgCLAGmWVM4NJP2MeekeE4KzkEWcWvZrB6kMj4zi4ttmCYUZkwvfHpfM1LRcHq3D8WoR1H3uqT6ByrbsPB",
  "key22": "5hp396XbuoB96Wjj1BnhrMj837nN8P8ng6ruhsUWB8iriH7yL9gyUH65XRWwDaYnnNdDLnPXjbTEFoP2DQcRPh87",
  "key23": "33BDvToWdmgZBXCcwHQggUKH6rAgeS7uqtBJ795BS4UFfpPVgprxPVxwdZNRzicoRXxhRn7woTMFbxutR6p6pc46",
  "key24": "57yL2NHhCCdNKJaqw4t7T2ssDAGPisM1XFqPxxejqPndMpWzWynjHYTQ64wkqjzbjfq8VAv56RgLACchFsbXN51F",
  "key25": "2MbLCgkbddxWhyCGXYztdVKsCHUNaUq1nGVrcEgthzbNZNFZkDQBp7tCDwqYV6Bcob63uDGu6a8fqDiazeaudQTt",
  "key26": "3hnWgoTa66FKJh4P3YwmW1uyfYEtc1VKzkwhdaPomoc192hVHds8gTEuf4r7tNwHFNRUx9VwQTdp4wS5QruBMso",
  "key27": "3DGusEuuDxZsFnCMHzSer2HNPtoL6fpMrL87kEJAbMX9nCLZaUpiUohhgc5FtMZgWuNHcWjruQeScFbRJkFMAkDq",
  "key28": "2p6aMMKr947QmseVntfXuWbLUiujaSKv9N9ty1wB6BYg839EBzihWvYE5j9KBmve7ypPSeH85NVd1Y3FrssMsCLz",
  "key29": "4qwFMVnhbXgWureQDs2xL4QzvMciFJa5V4k3h28eSmELua5iGo1NYGE4Pjy1VQus7QbjX6iMdjrv9psUhiM8hHgr",
  "key30": "4TDqxTipH6sKTfWwqrk1kgPdnLofYiRPFchLUKADBthkAACoJqZE4YkEkaxjcCVg13JHSgwhA7tnPzhj7rt6oq4u",
  "key31": "4mqkEBiykJ9o9jC4NQJ1hF6sfo3qY3eKyERCVZyeX3jJuNkPNUcJNG6tdtDoomtxqp3sqThrRY5eFvyHv8cq3FBr",
  "key32": "4mrMWCBAdYL1P4JYavjRbqPJ7W94V1t6PLduktPdarxL9G7xsepWRg6XWSCvM11QLbTVnnLhU24rfojCaSMuzn9F",
  "key33": "RUTdHCoXk6SZTuTR1WP9jwTMYL7JqYYv8kqCREFgNQh3LYHxonKvMEQ3BEDkMxN5ERgj8g8vWMY4ZmxvWFzMohx",
  "key34": "4LBa2FNmjzjGH2J8p9rfeooQnYU1SFF9Eb44g58YQcqndES1eMmdzB6zc9bQvr4GhWWomyCYRkpRtVEFKZaXHM9v",
  "key35": "s2wnUr1GHHjf7cq7WyaMeWWFZJQM6ATQsZs2TBbnUY7Wm517X7RwuG6auNYzvFpo2x8rKVeYwkLXMvL2sNKMTdW",
  "key36": "5iYjN4PX9qvhQYYmttZDyPfZdyvqSPN7ZWJhJLFji9Z1Py7ZPT1wisrqKGyAkmdN7pu3FXGjbdUH8ADNBMbckNx7"
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
