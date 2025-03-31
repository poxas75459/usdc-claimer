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
    "5Wsq6LAZV8dQHBxvD3EjEBv3wcH8BqotGmXmEAkJTKwpsb1WHCDvUR7oTgndgdufjnNvtzPouvV6tJsWkrF1SLmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iV3z9nH1f2M7sHXA6FsV7PqepJijJ11yJN9tcgwVdonKVpmqGTEUq8V2JcE832DuyhfsM9NdQ8d1kcjdPJPjzdP",
  "key1": "31cHRvL3VJNDungdmEJRWUoGMjyNFDaifUUjxWAarCWJh4A8HEMq8SJHU7M7D3Whrm5Q4Gy2dxLYfLKRcG3eTJBo",
  "key2": "3UQgiQ68LG6VBQr1fepEYYfySzFyyfrfswN1UViRfKYokCatzkSiMs6Dc6MRrxoJnKGt3fdrapZgKzTJyF7PytXq",
  "key3": "3G5mxZk5Rwt9zN7MstJTeosCCtg9DE5h27r8ybbzjjdTxdhVH8UaVDYSC36ii4Q9yuaWXkoDE1cjji4RfioxcwVw",
  "key4": "3ph1UNU6oo7TyJbCy6vdSLN49v6SBz5MqCCm6SzAAv6VufgRmHhpRka7JKTqnhSQaYoHf2s5E1DTEeiyVkWm8Ehu",
  "key5": "2oFH1sZeYAo6NZEVHiRKS3kpPGBk23GzwArdKhowJhF6W5zhM3x7eSTSDyjAhfmmuCAkBZ31gfAt6TnAzAUh6KLS",
  "key6": "5GW4vvs5sjwiVcrFauiVdbvjrhYAroU1Qyy65huronMFmeZUM7jeVfgqkr2pEuWbAwUs2qLzb1sSRvxVWL7GxUx8",
  "key7": "2yGuZgF7FXqsjc9RS6HpDodCsCMisz7qeEYbcnwQs746KCMwmcACd3p16eNzRxmWUEkDtLVqFyxuxyt8sV3vv8ia",
  "key8": "3rDwUef8SBVVaZqvzji38jVtQMeXerDSqYQQiR81L24oLwFcS24djG6tGLXVXQRzS4WMTCeRBquinq1D3fnc1kUh",
  "key9": "2MkP8t6HD6q3QGQgM94w3X85Jj8EiQzZ1MybCzs3YutqFjYPKKg7ey7zMDidRNaE35n3wBE5L9EKeoVoaUyytXC5",
  "key10": "32WwHLKHLHrSuUZreDxJGpNGUofSqx96LbWyeaNxXkNabqLXYTassVXFTTcLxqEYB5BZYf8uVjdYnt3UtyuUojqX",
  "key11": "24zJZCZ5aNGzU2WyCWaY7R8rtginEUttA62WukLrJ9XTvvC5jvGsnm8FVJEfXV7H3KPcshu5HxyFCzat88Z6eFj1",
  "key12": "5b8emU2EbfSRGjRqqVZ61UKoZCJ8pF5qMjY7UgmE5FQ2e4SGqNrY5GggEZYhG2T61cMQ6F79QRiBu58UAnnyBuzZ",
  "key13": "2piWnW3b7mc3arRxMRfW9ABBmQnmLjd4CUg8uMpY2e4rpxBfTxm6rVWtDEBzSkDpnVZsmrphs7JTBVednUMdyG1z",
  "key14": "5KjLdXeDH9WrGgiBKkjHbKRHK9PK8ykUPHd4Cg9qvGPX98HbsmdzrWhYd7EfoYrdBRd1FUd1UbKkMtmvuxppboui",
  "key15": "64FjJwsoqf2JWmpoGEusQPHVViJpZ8cpNCshGLyjxmVKeDcT3xNKVjsJ7z65Rd1QdRzZsz6kGuQoHD9BYuzL57mb",
  "key16": "4kcxRRcgKMeCp2ibBJ376pgcMpFdECiaUXVCqiuQ69KRdvJcLD3EVhLkdiSmgHK1GJDFWE47vEhaDSj7LscurQN5",
  "key17": "4ghLpPFf4VCgHefkFmE5PnedWDTLSgdJTSE24nM7Dv9iVETm2JVowmn76rBh3r1qzEuf2KwqdD23z6FxjexqK4Yp",
  "key18": "5YqhCuEAycXK5a3uvM8F7pso6CAe7gqoEQyDGd7y2t9LAcXaL3xXd682mShFhRS81nFMh1XburrqrhFekhH1pF9K",
  "key19": "5kgE8QobUUCer7aJXhSrs7YWqWr75A1rDpo2AS1fTEh4yJhhoai3yD8EE94TxxoNU9n27omxUrQbekij7ajsqTTU",
  "key20": "36vabfAoM4EozWaPqUQJuMPeqUivC1FBwTdpGsGyDaTXcWXZuVd9wuFKMyz9TMfpMUvDMfGmvQRnBDTUTqK2J636",
  "key21": "54sU19kNrNZ7nUtmXBkc3R6FM16eycm1rGJDVwg6GDpRoWxnszSwZLEgzahBdL1AceK5qfAU8Sp9kdfsTv1T8KC7",
  "key22": "5TfSV5uJV32QBiwQ76EjGcDukzVDADbDVvdFSzpVUcENcK89JxguBk6VvKNH4giViGCeeP4KsgCLNsx2i654Ry1Q",
  "key23": "4WHBJzaEQGHVswd5NgfkaTkXb1Q3KMmJZhS6zdTm6MxZHS8WcB2ew1b5f6M4MJe1geBMutVqWdLuBsbdez2Vv6qG",
  "key24": "5hprLXzPAcUkZysAVAhyKsBmp575yobrGgBrDEBo1L5tHB6eiwQevRKtfkmDPKfZ4pLq22YPVM497NrFEoZQeCZB",
  "key25": "2nfurzagWRgM6aKg8ZQmPAJfRR13qmjgkvHqVg9Ksb8Lorw9EL6H99YGSkwAJTrq7JtNspo8meaQioKNJG1oqveB",
  "key26": "5AC5Qesa5JsZBqTs13Ui7mHyULiTsgEJ6YFKNyMLjdbztwZfCia24254HmfMmLyBFWAMeYLMBywPpi4KCxCnmyxz",
  "key27": "iBno7cDhhsYujKZqhrCMhSUb3AWYvCu47DsbFWDXnkkJn2z7GGYf8LzSMKha9BfNY589zDoxW183KZvFL5shwTX",
  "key28": "4Kdpk6GzNkab4qxc3cTzFmqJ2fCf4obxSPsjJovYSgU4gAedfwCma9gCUD3g11kNMfq6XWs5R83Yr84Xh9Kob9A4",
  "key29": "2jjqKrc6J3x58EmqZWtZTSLm5CEFtpEa6CJg6dD2mb8kFKPUYs2apCzMyzZ5TboWjNFJG8CUwRNovNDD6v18UpAZ",
  "key30": "2wj8cLNkqFwouQPszx2YWVXv7uhdNxkn9yaLtExbK3JvFYrsL3ein2K51MG2E71PsRV8V57khyDePEjxa62DQueS",
  "key31": "31i1MJFKEX2zJKN9TfMDz7uzxo4H77MxvV3peu5LmgYgDKUb5PopKFYDesLbaKsffWBpX66ZeVctJu528EtrBqN",
  "key32": "3Qw68iyBWm1CTDNQV5L9QjH3yW2tMiC6nwRXHmwKU8bxmTf7SPZbfH3zNeBtRu6Bp9ovVhFRYQy48FgVEnz8QKbt",
  "key33": "5gn1qqbjY8qfef3ufcz1AMvTXxrSUptCvVEoiwnMedcb49URQnvzXrAdCtqWie8hyvnXa7J7SBeyw8SVBwELLkps",
  "key34": "2nSiHwp4MbvL3msWG11H4bDAqyLWczEY1KWfrPJDGbx6wMhbHNpaaypaq5b7nge7q6gxoacRk4zxGGdnjBd5rK5y",
  "key35": "4y9tZJrBFZHk4r94VQT14BwzM6i1ZNbtdckjx6m9o3y5pHBHeSrphyWonWnf6YeFToLQzNhod327GKbX4Aih6Yz6",
  "key36": "4HhUH4mv6zcmufnww3yBADqVgk7Y3Bi3RFcLRnfMctfxtbULacko6r7UQ33gPy7WNybsMseSvZVyAvAJfNsVdFxN",
  "key37": "4R2V7T9b1iJ74C5syPo6mufzsRJxmCVFZR2zMiDiXNvZDAbjapGTZX6BrQtVLWyoGq2zvGUd6F5CdjhHHw1rpxac",
  "key38": "w6dvZSAr8H3RQUJ3BYvcj3aHVL1gmFzepxUvnKVZ9RbhR56MyAcReJtKdHrKu1WajQTcpiuCDxCdSdYDTWGBVSE",
  "key39": "5umniQmYtG1MkNyp2a9TexuVKRhhXmp11XuutUopNqZDu9yybNsWVzxVJcmPFxzRn3uE9T48AGfjzNMXBTcaa5xj",
  "key40": "CnqXtC6Nuqjgp4N46ki5pzPwGhD2sFJqvBTBhK8KWpJ7pRVt6yfZBmfyxW1jBra44fsFeoLXwSqSLaKz82Y1eq5",
  "key41": "2nTzMsmSwgaxzvGLGwdKVjW43rW1dL1hjfFa3ivMBHQXeFDPiHsAvvphvfqgE7Xkk8GLPkmcMXJVeDu9NXrqLudH",
  "key42": "rw78jNzdn2UVztuh95rCsmg51keVgxwfLyCdMbhurh4ktXZWPd26P8m1BynAZX85ur81FTouvnCDS4Qu9248qbp",
  "key43": "3Zm7u41UniPt855VxMTLjjwFtNHmribq8MxUt3UvwVKQeQm8z3awgex9yEspd4QA23uUFBKht7cco8CYuiN2jSyH",
  "key44": "3EL3k23mnxNoEJb6H9WCzy3S48EVY3SouQVSWN5JBog7b3LLTSjM7wcCbSPRCkcC5iAwyKMvmTzoY4ykhQuJP1bv",
  "key45": "5ri9ynD4azNBn3rYuGPMPTxGoaTibDay7PWQuKCGiKEDVCniUnaD6vNkwaBmsHk84a1XTJzGXvCaFu9H5vMrMQZc"
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
