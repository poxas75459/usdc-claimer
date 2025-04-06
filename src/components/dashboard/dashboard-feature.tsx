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
    "2gadWgL4yKV32geJGhwxzzyDTaJ8hEQZYDGzLrmH4ShSH7ssv4sD5gkzzjVQqH2tUxAkS4pyPGXzFLtL2WAhYYUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B3yLbV87uUREeTWgQZjoF2uZFuXAVYtrPkXWv8zGRL66BHPTDQWUuej39NsVjLFMzUrtjR1F9diXJu8vufCPHBX",
  "key1": "4FwfWJEMckuJYozj67dxVArp9DKm7iirjw93F9GFcgT6HUbu4miVjaqAhBNfq4yVq31zQ1qZ3QsYTSFosiyzTvSQ",
  "key2": "3636EMKkXVASDEXh7nVCVZKAQksXoaHuBBn3XpyfKKWkPP6GcXNUSoh3sHg7peRGniwfpwVkXAQC1XvRTTrzg88V",
  "key3": "3WjsGoQ5Rtz18U13N2rZrJd7RyUWAyaX4pAZ4eFxatX7qoyYV5WusndWdrohSqo2SoT45LLUxXNgjaPjfpAKc3jE",
  "key4": "5g1e2X3J9o5U7EvFTgWPcJFRAxnDrK5mGqf2dgaxGwtCxC7aqCtc1B1W4oawt5F9ix3GSesjQK69x2ngXbQB9Abw",
  "key5": "5A2i1nrGRAYLxbe5Ar3b6eVmqr7GePsuU6Y2nZJzpJWwb4bBYeitEqYVyKNxEMB37YK3Kg2HUyku9GB2iqcvhYQa",
  "key6": "5M36Va2wGDct171G8oEDzGNfC7RNMksSyy2ryWcVhGMa1jiq33qyu5Hio8wCqLhG6atPfC2rG52meuqM4uvqPVex",
  "key7": "2mJya7H6rYiiqA4ewV2ZJZJz2GgZPmzHh69bdzZhDTs2GDqo2cNNLSCHKWvqgYSTcu3qbEkmibEh8dNAwsVgzPg2",
  "key8": "7m1uc1McnFe6Df6Sgo1PXWFAAN9cziRPLq3WeCga6HLYCHu3SL6H32LaZmA2M698bcKi5F8MZpJZn1R5kd7FW1p",
  "key9": "4cbvpY8S8Gm2k5FervKeV1m23yJAMCJm4wqi9M3dGUucXu5HNwjTsimiYTpNiA3vpPqAAFNueJH1H52kMKXBt9fh",
  "key10": "2HKWvGyW2jycaSfGsdPGE5WWQV4EGgSeMnWLpq31bUxv1KKaS3c2oBzNc8k3tf49UxSTNMBBXPa3ti7FhjUoNupc",
  "key11": "4UkiCQU4qMBBdpPFeYWof3oLB7fo931YQhM2GzKYsSrFQWEusyTpJ6YS5xryywoGg9LPVMhu35MaKshvi8TW1fK6",
  "key12": "2TgGRL57i2DQF3tftnGtHyKKF1NGqAUbGwoEHtfA2gtmm1dranPhaUyGgmMb1McCcgKX3aeFUiJYfiyECBPdd2Qq",
  "key13": "5P5AeikdkUbxVJa4bmt3Ai33Ecwiv6hhTRBvJVbFPL8FDMttbaJ33NH3gXLsrMt7B6hvmT4idPJe2rfUd5L4aEf1",
  "key14": "hRc5ZSkx6d8qW7Lvg734Rp4VH5toUMcW27uJkqsDDdjnyJZNZarfdKRJA6V7jvs3UXMDZG8AaTMN4S8bv6zea37",
  "key15": "xso4D4ZNjtpcoY6Mo6KF3gvTvjtJXaqGE8mJLxzDfWhyCXdsNoMzx8pHhT1KAPCm3RqycqXWenEhqYTSArom5a4",
  "key16": "3MWzZbRLp3VRTXcBrCeymMyxkTWQjqjZDBkEyxtcwpmRLSHfUNhGkRiNUTw9fnf2zsacC4LHanJEzf6NTfMUUjuY",
  "key17": "2HX3pyx6isK2K5mT2jaW5pJjzGDMspMCUeHvUqBUUn84RWnUwS3wQ3g2QLZ48R8LKrmZGW5fnbA518AzQD9WsEJc",
  "key18": "iFrduCBDBgtJvogqv1MwNck2YUjxXfgDWFhh7TKpNq1vF86xkqEqbwuXfNFKRhaUbquQte688Cmxknn2Rhk5qUU",
  "key19": "2V25B1iz4ae61TveMMvYRSCqveS1cQti8vTGjUyYLJPpQcducuPdfK7VzseuCV6M6NiYgbatCcPc9h3zeRBNQXQ6",
  "key20": "25symWUvFKbdBJyMkemdjR9WyT391o1SABYZNqYWQxZfMip5NAHN1wNgSbmY1wxsZzu1Y7BAX2z6Dmj5MAwdLwGY",
  "key21": "3mPMoKV5rYuVChswYm3eBcLpjjGHEaAEk2gJxjwNVTYDXQ8FPHP9ngeQrNe5qyY9mWQmksKVQYCMMhe11riDxaYk",
  "key22": "26KioiqiwvjbBGgjUWgHgdLdw8BAF3zztLsMM8G74q89EEn3zRpqYt6tys1HWVE56iBoaZrMg3iZkFwiesEtZrcJ",
  "key23": "NHjLxcVaGiQnvwh8omgdQLLbP5TNpCVz4h2EQ14FVQxAPjUuFpgDHJmsZaYSLVuDd549fpiRj41NM3an4b97Jax",
  "key24": "32yBLhKzs7gBvn9mXR7rZbqg3qGRydQY8DyELQa7HJjR95qNcWvt2HnzxfGphuUihC5qSRqVHvpxxay6obK9hpXi",
  "key25": "4qLiKssYFkSewci5uCELowhZqaWw5DVVs5vLT9XioFZFYEn23kCwU7Pm2U8zN4HmWpPFtBe9hdMcDmvPqL3yRyq8",
  "key26": "rg16S4JpHvSrtrfZZk331GU4ABvda1TKQRA8o2rT6BjxN8Fq45nTPtztUNcxKiKRTmK8TtLbGUrtcLiN7athVyA",
  "key27": "5LbRBxZkcEU7U5w4KMXcYR2DomJT6gJZhZr1dxuRtWYsGDgcHasiCtaoNThpxU7VsVQqyFNPGpGdDcQGUGudArhE",
  "key28": "3gN32CXxH1DBxPk4cewtBu8mA2LhBv6YxLKuho4AvxTtq9E4pPyHTs8eoqo4iNRLkwFH9vZRDjkuBkCMGQEA3xvo",
  "key29": "tgaBehDf4ufRFYATBKSZuixaUyq3UGWHJBAXfzbksm26iM1GperNPNeqxkSfQbi4XUkaivJDaAzocamE1eYBQnh",
  "key30": "5nPq9i5FNyb2nqurVd8MXEqnFtyPSm2MWwMy1T3Qfa5SLWBa8s4Kz872jKNpfdtbRzrGBDNEn28moDjFVATrG5Db",
  "key31": "87kvcSowdSXy6QweyroMjTxgL2caHYxJcNjKpDcz5XmjYdRZgvJJGuEPUDcQEo6wny2p3kbJuWUdo7pVYMbZf9T",
  "key32": "2ejtjkWagUuZHZGRxUp8Gis2bXq3mAKXrcuGTqDcRVDoCARa8UFmSi47AYod4xNYiw6GJbt7pP5jNbcRoovCwMqP",
  "key33": "4RP6TsKzLeK1jLuyRd4wzYJBNThfUG5Yahncy6DbXu53r9tGRSMeBgHEqU7EgLnc9Ys42kf7HPsZhGht3PJqrvjH",
  "key34": "BBSfHwnMzigcNMUiHFvwGcbJC876BqqLLeFsc9fwUt7FbESf8Ci4tcCWkBZy48cDgpggKmtH7NKyJqJoRXAUyS3",
  "key35": "3sKGFaXJ5g7kq1fMAQUqg6beabX8RGnx6FCEmv6K5DShFM1VxW9JPBUajHpZBjVwdhDNsdTaJfNRJ9ZPKKVio4aK",
  "key36": "5C4FLzWgm79Q9GoYcX1Goyqr4sgqqeyttyMicJwByeDe7SHSCSQGyvpDfC16dEGNcVZGSGsxoVZEVANTQrRUhErz",
  "key37": "5WAbxhs3AoS98sUgaZmsWChLHVTbtQZDC8Zbrsvs4iWtfnQqDJAspSEqScmwcZSXAeGitGAssEjL6LzwVqhGenTC",
  "key38": "5oMpCTb6VN96kaJugBDYZSNo7sWvt6C9hVcNbpCHQf7aPvx8KKN9w6Lq9hSPKb8fFGAeMUtxiWDQ3ou8WQ4UgS5x",
  "key39": "wkcimBhkvQAztuMSkXghZGdaFDG3MdfXd9Xz7VJzWAM3ewe49b9zrfHAQVayY8fvG16dVi8Uxx8KVA3974NBLwQ",
  "key40": "5TEA5CRepCFwASdYLhmW2E288BtsNpZwpp96cL2XegXGjXst1N5PdJCQJbc8UterZGZX5WgDmyptqmfouxGddKtw",
  "key41": "5XQaPtJaKkyXqFfDbjDpidoYVdrFx8XVco5EaxaygKtU7yMc7CWqcMjBrkKFyGLkrmDDr4b46FFHE5PkxxkA2oHZ",
  "key42": "2WDS9osaVsLJue84Wr49CSrLEfaGb9oDcKuKmdifkRrXWM5hi51pixv9SafGivXhPQt61Bv76qHQgEsXJiirFXKu",
  "key43": "4idQNcPb9t4eUjKWkaKoCGPfEcGa5HiLRs8tFwQnogihEuqho3AVeW7MbtSDwY5QJedSRHFp9xV8AWuBnEg5RZq4",
  "key44": "W3dQ8AUZQxF6Gg1mfBrmzvxgUEJWsQnquY6CFRYcRZFfG7Bco2eM8wLEs9mQMCJmpxreVqR2nEuX63LTG7Rfpxk",
  "key45": "3EiAW8uAN4UcC61671nmbBFfsuqkMs3x1BMnn2nCtTypNFKBPnhnPoGzLjocFCNzYr4u9MfVvA7uWYByRRpJHzSa",
  "key46": "3pZJZo2vVdoYXSU1vENn7AhowaJcMqM325ufpG9DNCk3dLXT8bBQpiH1e359z81QcoijSwLwqx8PnSCpoNLRMSV6"
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
