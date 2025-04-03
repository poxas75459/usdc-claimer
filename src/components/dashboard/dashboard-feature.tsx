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
    "5pZV7abAa6Ed1dFYgoNgE2jyZKAaXXd3r1dPuGN2oCHZbYZx2UteZzXanRevPWf88E8ixaW7Db7daVt989r9MKoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtpZkpjevey2JX978rnZnV8tNDiNRtKAs2heQsdoPxu67he9XHaLx8BknjSPu1zoYzptJE81Zq1rVLPNxiEXmJV",
  "key1": "5yHBwt2B5at4cEN75s9TRkexacXK33w66ZXMBXae6mGWzwebXP4KYET3kFwy3ywhZBG47KgS31LcBD4yoqU27rQT",
  "key2": "4BXoYWkTHvDt61uJ6Vzqm6jY4sqC6NWq3NVaDc1DskQDKCGUh9KwgDEnDWw8WDfA6GxC3L4hbAGDsuTboWeFmhZ5",
  "key3": "27K5u1RskBwGaXvTKa4sftPYsovMNmmSD23uoeWezsKmhkHagscDg3Lz7FvnDR4v94fkRJn3nVs9Tn7Nb1x8oTsu",
  "key4": "4ZZB1LviFyiNZjPw9AP2NJvJ6nzi7QEvEPHoCPnVQdJZT4c5sffWZpvMSedjaZDmWbyLnvQanSmUyhwsWrPZ1od3",
  "key5": "65qwojS6ckZ7jr7yukNBMfHVmwbMkUwSkHfxzbzHnHTtB6h9yMhzWaCHFoHnVWthKfcXiXkhoDrppdK4c7tyTXSZ",
  "key6": "cXA2EReTM9xknrfR1fm9JWQzwoncs46RYQJjEyQ7jQP1b6ocsjVgwQvnKBcBnZPhStWphPVJF3Gmjz1xTAJU2jt",
  "key7": "E7N4BDvrHQEzjoVVSpFcav1zCVSF6bes371sr4MNw9unwJeqHfWWdm4Ngg4n9pTvGw1DTUe3G6QqXBMVBxbw9Fn",
  "key8": "4LonVj97vwNzofg4zC3KbxM4JMGW4tRjktWsRF7KMSTQFaAJrnbC2YoKCyufTjDyDVuow2wq6kgw5s5srZVYPys7",
  "key9": "5Uts7hsbn79m3JrozrbTJavinBvNKHxShw3CFfKqfxFJG7WdrnFjQrG3drKW2ZW5MGY7XRZA7d2w6AMe59n5u1Ko",
  "key10": "4mR6AwUcmtYZciSnHdY991Z5YcrUwfpGt2yYobC7BxUfkt7cKDqe75HxckHwGYBTjQdju99rNFtcXAXSxBTXyodh",
  "key11": "39Ae5LFHLXoT5sYV9z7rvPGRjF9LZgiZMSsesgabmtHSpoF6dvgravL8mGGNjym1FzB7y8Bfzh11Cz2tdmSpxzkS",
  "key12": "4qujcL9XAbmXM8npJxfv1fKXACUSgDSz2FDJFyJiUec27cQEvpUCUnhJQMYYV7SX2ocaTk52P5PrUQ5962NMePXz",
  "key13": "5csYpMhuPAi1pwsirwmSFHBdS8WTgoqQGSYe7611NaWKespqdtGq7wwtW4pTCKyej17Z2jxkMzbqUWTHZ4LkXvCz",
  "key14": "wHPwSKNPjbtad2oX43P26pYVXy57kEGFRqMFr6aUzx89uvzGVQuzt7ZVXnboCSb4ReQCwEQyfvyAPFRk55y5yEN",
  "key15": "5PT4nNXj7AFsHxSThAwFo9iH1BPfBp9Ci2aaQpzWqNb3DYdsb2XQspiW5xMGZHnEMipjwrzGqv7acwX45ptJ2So2",
  "key16": "4FvoVbKCk4DhRKgSuBTUBqGDiKqzR8jEdWZv7u5RQPvusFuaDmdKuBi4sjGGxyssfPr1xTbwZQ3p73YkAbpvacGv",
  "key17": "2oL9cucTLKvKUFADNhJhUsF3shdsYXWjrRSAGtEq9YvNtcQr2QpbbxT13T5ZeSGxe8aM7L6CMrXKyD72UiCdczmb",
  "key18": "2aMLhmweqb67qXTWM9Woffe41ViK586DM2FRoDHM5dYqrYiDwhmzxLgPGEWs2ftCiAYhtdoeSoJiFaQuEBRoG1TQ",
  "key19": "3Xu2FZpRXyJ7BJsghMWcfteXx8aRxGnEk8m9XykstZbPqeFrhGQVx4yZwcss6reMB65pHkpM9X1dTZD3tPTe5ZFf",
  "key20": "XQphBtuvEFATdibVsHuzCufEsbYu546KxdbqN9uWzSLzogomexqUtgc56QnwjeoKFA7nPuJNit9or1BxNR5uXnM",
  "key21": "2oC4XT8toA9KkDAi8yCDkh3gYFZcokW6VPLWPgN3QhZiNGjhdKMcttfvqNTWaorVzsGZGoHFvsfTYoffcXjUeSdR",
  "key22": "c3KYDcZvGj9BwH6TAcwiU3a8YNep7hKAPxKA8FuQJfmvfemhuXmRpvo7Dtmb8vNufnqiYNxyBaFnkL1o7BetsE9",
  "key23": "2KL59zbvE67KcSCNqchXxJvE29XefcDsY1b7yq1Uxa7jfABNeEn9yRRc96SrSFiFv3LSZG1R5BdgdNmea1okgTms",
  "key24": "47qn8Jv2cxNHzK4M7xYVg5bn7bEKpU4p1WZmY6ufqcUjD2crSB3tg7QJeBDA7xCNedh4NzXWMeQCyWfEDREowYWY",
  "key25": "51fNAd9rrG378ymgmJvUGNvo8zD4BzLmAALNDyuWQ4MPARN997eUV5sKYNmRAQk5UrGNnAmWqg9DZyHnfTGn17po",
  "key26": "5V91QEh4twY9A1qtpKJ5NLRDAJ4gmDCSNpfY8pHTMipe48nHfQM98pVMPiNeDbdSYBqWCMW8EH2ry9pPMAT5byYq",
  "key27": "2s3pxVnBCerQYPqVBVLs2N2ScoG1YD9GaQeTiQ4F27CPi77CmXaSbgomL1hYp3ja7WLRLErR9RU26nLdJdCV2P5f",
  "key28": "2PdUUpWeLe2bDypNEGmypNXmesmGyNisowSA8T9d734ykpmvvEovoNamV5XzgykWsYmLi2RDBRxwwJ7k7kB4n2Vt",
  "key29": "4UBFGfkDfhBw4cE8vharJCe1DcUkzTryuBohiioXgK7NCcZvnqS3DWr1dRGdS8sQVMaJCiTpFVb2d1fZisW8AVad",
  "key30": "2SbsntHBXNjptkdKwxqaVdaqruQZDeaaRottSagEX668xu1eLgdGJTmYDaeeEqeF3sT4FUzfQY3REgMDj59fWc8c",
  "key31": "5bMtHHs7M6byDJNrCW7rpEty3fVSY8x3VpVSHiVAPPWQ8XViSeCPr41qr2KhG5XPWosYbwVdTVRw7iUbBNTy3Fn5",
  "key32": "3YdQKJCMcSkj1a1tqZYMMLX38dJe7CesY4b5gfRVWYDDgTTn7e9g1PtYoheiffay9VsRCRpinwBsKNRRkvWKT6wY",
  "key33": "2gM1UCES13uPkbzohwnWVSmZfMYuetUoysKUXPNKi63Q8dqH4emevmv5LhabKxCSRSFjbxwFtwGF2nYgAbqHS5Cf",
  "key34": "2xJYUGyUrATbZjKf57mt9wn7iTyAF94AYMuiAw2CHqNUXNk6nvGm1AspGEyvFPbnDBbD4pFwQE8syv5LSfTQYxqX",
  "key35": "3hmu9Fye454dAT4ZtDxXFditL4tY89owUhpTWRnPJHLGMveB4waE95dD9hErGUctwSNZPM8X98dqwFd5fQWNaTHW",
  "key36": "H5nUbyeyf7TG1TdAzTHE5Azti7VGGiSp8ihP7AVdHiMxp7ug83GsjVk6iJTxfnoiv3BCwiNyCJNQTdyXEVFu1Yk"
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
