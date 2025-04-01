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
    "46vuigCY4dBvD6Z6u6dzL7d1hfggtjCnESTzkSQhLCU2MhRzdrkeasbaoqk1MCe1KPCCKDKGKXpuiqkm2YANqG6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56xeYy4XMDtkiQY2CHc7Js4Qjq9adFnT9rNDaiBrL6CU91ivcbqY4ThV1GtJtpWSLDZaMLJcjKeRe5BsAqcjb31P",
  "key1": "bQdzc7a33XDZcVBZWTPAkVwsnHKz99pnxGGjqyTDTMWKaW2V2VrDYDs69zNFeDSe5QHviZVS1Zi39XLf2uWGjbW",
  "key2": "5UZd7upWY8ihJ4JADEgNEXUq1zh4hFkNaDFMZafPKodUBeRg5o25UvibdbLYLx8AL7xFiNKjm6YvuZFnhgs7kmQT",
  "key3": "4wTdXmXWPDFdkrxv99wAm3dLm9qJ42zfYXZeYaNp7YUSLKP7tTnCncgKwrnv3nCrVZigeqj4oYbfdVtWdrQTTCC5",
  "key4": "4Dk2fMQhEK5rQXhZoNaoUK2Q4cq55bNr1LBFSaCZC8tvu8JaRodssDiEzmPtoa9g23YAfCeRptQnkaYjpsQLAsuk",
  "key5": "2PpsrREQ1K7yDD6nhtWSrDF6AK5RnBfg9jEvftdEnseNmJ3ho5dCkwZjDarfBRv19syxDCHqxeS1YwNsj2pPLxm",
  "key6": "3pPRwr4ZEBSjUxMyvGYXSNjftkgZtbufUkH4e1SeCPcGQgiLaJZna41CuBJWpXkkKveoTbqBpMAeFMikx6v1bHTW",
  "key7": "5UcXytxCAJQkUp9eEvUXSnq3vqxB2FcXiz1awzi8DeQh3GZVeiECfBdaSgTiBqi5CQicQLgDoG3BANe4U3z1WMkm",
  "key8": "4LdXo8s948NF3CxWnbgEApkRZtbzS3Smzo4kvXSx3Ykb2z1pKJ7ca9fBM76Upnuc5fL7Bb4dgXq62A6AJGa3FTfx",
  "key9": "57zusYw5FcRbNYgEP77GqNoK1w1pfCP1sf677fHAJSP7a9aezFCKcfUJvifY6N57Bd4EnZTgMTaxoMkCumvB8PgU",
  "key10": "4nkeoVF1UNreGvfR8nq3qWN8DJZkopB2MktFVGB4KuYVNao3YWhvjX7resxTNrQpWv6F1HYH3TTJXpksyD14MYco",
  "key11": "52vdJ9HWnY4Wv29VSYsdvs2wEL1YEbKUwo9PPBjjnzkXwWgW1kSYcwKU9S9YkSwxdkSZY8Ptu8qJmbhdn2NRCh3Y",
  "key12": "5tqg7G2oHKbpz8tvEEjk6k2JJgVk3fABiXW4RLGpGi13povq1NwnHaqYWdfFQQzo8u35kYbvxDy7vKYLeXHuUvnU",
  "key13": "zij89vXgDu2jdWAVHwFmT3MYVJzBwwz73Lb7ZngU7TEWsRkc3xS2wd4Fgd6SUaVTm75S883LuEFCdsmpyG8Q75o",
  "key14": "2NLPuzjsvi1Hiv9PwwFARvxrD92dCCJW7xnUbyKmcbgfnDmGUSETXSEvUK5Wn4BAFJxpFn9zwfF9LY281FEcLxBX",
  "key15": "8R6ZiaHgPeYpmgzKhASbG57EuNuWH6N2U8v9DA8zq4jqB4UYLmYtoe5y3CCcCo9BCasQhKjB3zS1JL5mPu55Ai3",
  "key16": "37SQD7HZpaGhnMKbAChMvPerSisLcyDAMKechnjLhmvAs2aTLyWnctvw7ovmqynMnbc9G8gPF1JLprFKecLh5Ni4",
  "key17": "tGJCQZMJ2tmNG9AuzKJKWSocxK5dzMyfLC5LvGuMoHXGEbYgHQHsjEWtrQnXaYe5iiKBXQfKBnMdD1zPhXig8hY",
  "key18": "2aR6r89uCHkETh65TZxtG8HRL6uPux9kKsa1ok4xTkEJUGKnhC6aEe5rrUy5G2XJ4wpanF8CJmMJTp18z2PpQisJ",
  "key19": "2UFY6ergtvumqTdeBp9KVWzoeJ7xZ2PC9JNQ9YTBnLiE8tn5TtqjB7rMDAPvU7M9tfgssiV11sx6czyp29jCCWm8",
  "key20": "41TuNDGH2fs4YtPzMdANpEWKDfsiCJeZ1Rz4zZpeq5U5vcRkL3wGS3TJ8mmpc6eXQyBndTo5RQaJU4QDoj9NDdRe",
  "key21": "2w8FFCRbWAHc525TuEJurwndyNm8i1wpUVc88kEX4RjaiGti2DgcjNT1unqgaLP8p7fC2WNw5P94ePYF9euc9yTz",
  "key22": "2N2sFiPABsjcJ9SxyUv9XrukgxZSbJs6PUPFGhX4F8ATrSWDah1zGDyz8skJqLWBvgHbR6G1TwknNyAGHhvqaCQy",
  "key23": "22hUKy2YqZYqpGPQioZZtpyf8M1YJsd555tkSTCngWJLiSYACCv2JTniZ6jnh4aQmqGguTop7EAcxfnizuVWSZgc",
  "key24": "2LMTFZNdSRfny23jQmENS2j9cEvozsEb8ShfkgAcART97WJpRpL76ar5vQiAnnAXEuEkZDJHuufHKsk2uoGK27C3",
  "key25": "4vMdLi5Su76vbvn92sRVyiQxSjvHnX6ud8nrrAReuBYXMjarnHagLCkqUsKEHpH8dZtWpt7iFFoJAvJRMDUCZGeq",
  "key26": "7wPvWNLsraxcfmGCFyEYchpydh5KRzb5sV51581fthonr1DyGUTeqP4AxPkx4rbm1PnrAH8TvkauV1j35gZEm6L",
  "key27": "3ssw9ub33UT6NiddKaSD3nfdUshPL2cWuSQ7AUTQ3CDC3DrWHw9SkdyZC9ftCbRwJJFhpuoDge4oRgSW7a4zQqhQ",
  "key28": "39QDkvQ2kVR4fiFcXrVhECUhc1MAoYS26JDEwDTCCzt1bqiSWweSfESCCyxYvWPM6S8r31wBBe1tsgxcS9zXJ7oL",
  "key29": "5pBqJ6qho9WaHWo7FHbL4vMi8ssnzQvroXuPzukWBBuB52CDxhNjtUtzSFKyu5AYZTbanjqKmrVZgPNMVa2j4XxT",
  "key30": "JiqnGjwxogGmdu4N8ko9y89mrLH33ayjRCJa6Vx3rLXnAcJ8LkYndvdSyTAY4Ubfx9wjJQfWDttXsAGFgSxqJGJ",
  "key31": "3GEbSfM3MZt12EFBk6tgpaFMG8oCkVVv56Y7KQbimMZg81Caws8LiETRgEDrNCpxAhBZx4zLN6MADxk89QV9ENZ1",
  "key32": "2watFViCFrAm7AsPS3DRYsEh8merDMLmyUdh76h2hDhSjgsZGnSNZ7xarhxjvMZaqfrGvg3Db89FndWzDFTP7gfS",
  "key33": "5rfdnoozWQyVJZ812TvBFSudQv8vTnQxmvFhCejHeCD51wHS7DbrQwedVrn2HiXeQCY1eteCwRQWy6LB8XcntuKL",
  "key34": "3LbSwHmqc9D3a1QRRWFTpby85RLry9RSyG7Nyy23W8Nht3m27926MP9yV9x75hdwFrL5JSfXMsSGW8dvKEsr2CoA",
  "key35": "2LZDmj6NwoYrk8RmRz1wGLCnzJEgFnLLx3VEW7nDsgtzHY8Bg6iyv4HyrFeiF9buvoBUVLU132c2wEKQytDb3To"
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
