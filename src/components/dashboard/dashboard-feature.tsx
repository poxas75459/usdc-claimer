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
    "X6WhvDTKftWmqoyZuK82CcT7f1pSLhXTKabRsbhM6seESqAH6TugBbyCkDR7rTAbVUDmf9Dcj3yvMd6AEs5brwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CL5nPCitXXPtd7TBrpCS5TBUdS16fL6DhtSeFvp4UqqcqH3Yyu6jZ1JYA2BatZMBxWrVvKsZjCBGwzemTFCDLCC",
  "key1": "4srrc3C6JMXCDnQP4NJKTJwZzNH23Aj9XYLJLm5DVDu4KkjN8jprEmzMs17gyGferDyzeh2PHii2Rq933Th1ZuEM",
  "key2": "5TedgxY2TCxnVf9FEwkRpkZ7i7tDpQ1amyEa4BsWex2zGJzzcobTDhWzsQbECmMJwqk9J1zScRwXoktK7eUs88pd",
  "key3": "21s6aiuJiKsngcTnee2bnRVnfmXd3bqDhBKR1zZVLEUT2K7q2xrvfMe2YvvpuEHKY2Xqdmam2PSJn8dJT5VNuo6g",
  "key4": "64XcCx4qSATPvveCV8JnVWYFdkeenoxGt94cw7D9ZVKJEXbm1WYPgwE9AVZgi6RQf4aHYeVTrMJNaektTHKSJyDg",
  "key5": "5TpNWFtBUY2Axo638nRFVd7og4cKy1z3dQJemDA7Kik1vcDmKNWtjtwmWjGEDaavdc4eGqS8vXGctqeCaJMnoeKR",
  "key6": "674MEZNAfja6J2nXY7dNJ1QLLGqEKMy1shGAzFwzm925NfJNtou3rjHVyDVoAJp4trydL6BAWU1USWmLwqrfo2yu",
  "key7": "26Ywd7tbUybhXa3zSnAC5QZFB67L4LcveaQY5X447phN2Rwd3mBBemPH39CY2txXr7Y34YigkfTehFNhXZGNsoyg",
  "key8": "5QyMWJcHHoDTT13ZXyQpDQfVvNfi13ZXmHEex7ShihDa6zfXZ3TfsDczbW27eBrixfN9ze1aNqtUuA2Vc7JFxJsf",
  "key9": "3Xr2Eza11zVUtm6TVLbuXoULMBXHAKGb9mUFD7a3Jcz2iMdGRSyqZFWRaKx1YAkVTMs1VDX5YsnAoUU29Mfcrrfw",
  "key10": "4PFCkYBFHQdcvqiqBoJPW9BW6vx6LFJ3wRccM9JwxnG4ER34ewND3NU3dE2HTQ6XdNLcBDaqEFPw8ZXQfAswnfLD",
  "key11": "4QhwFC3xdBRRYwYWts71Cf75BbfveiMkxAYWbJfZgqMaBV4vYfFYghEgfg6NiMH1cju2CTTQDG9HVcLaoMndWWUG",
  "key12": "4nbCvFHST247ZW29Xm3Gagw7GEBAbkaFTF1XFtWy5q9HtijpJK2trKCEKRMgbEerxD1DRdCXg8Fj6qTfjHxveqJg",
  "key13": "2pdNY1VVv7bxJsd8uz2yomTw3MkBZesm39gxvddACcBiyb6P5hqN4FjGLDAhzSVvp9Zud261F2t82NPoJv93boc5",
  "key14": "CEgfPG1p8qEVtUHcbA4M8iCLfbpJEtACz9UfVWn61Po5f3ETrzbJuXgP69BF8u48ReJNv36ta8u5j4aYqprNCc6",
  "key15": "3wYtHVT9cKQHhzAGF4SJVnmbUuaQ8dYf34LXFEVLJvSCZPDZX19vFULXX1zVNVNanvNBZdf9TeLkUu5mpSk5KodY",
  "key16": "5ZpXv9E3LWMQjcmXauoS8CKgFdRJ2pWHJ5A8mxZajjVrJBvHDYRxhgvA4D2WQ1x3jt1gQs4sDuHVSyw4hPRTyHgD",
  "key17": "3ARxqfiZ3bXrVxgKcAp5TV6YWqdiLQgohRFZ9CWbmV2SUewKM48xFmkz4B6weWT7ZDDu9Afri1JWdAq6rLWnBUJZ",
  "key18": "5GkwYyNCBn2W4R5pVtFHwFhxqBgCGWN3GaDYdVvYUqeRRKHSEhmRVLJuRsxd2nEW9AbpFxv4HgzcqcQe45eGaLGa",
  "key19": "23TEPhmuXc7g1DoGr8gSMo2zTf4DwgRNBkurqnX5cUP48HGfVizByeM55zcXKFpYZSUdeMz6MnVKmtg82NYMM9ZP",
  "key20": "3dUkVwLKQ3mNUUAs6gN8cmSziQx7F6sE8QmUyarxzoUNkdsSbkhs1Lcu3AjcHvNxWXq3x2ZtTPMbkEAEjfEtUNtV",
  "key21": "37Q2jMKAaBM9c9rWAFKUdGf6nkK3ZTrTzW9FMqzGufYiu7nazuQmp1kC2JiJTQjWYimAwPWNm6yywYBupcwjfo24",
  "key22": "51D3mvoSamz3HhMxrkrqWLkdcyCeJ1upraNMhiB6sax96aJ5MF8kEa1HwL2tX5ctVk9vaCc5UTfgx5ir9wFNNPrY",
  "key23": "4Qj5EtzgqrVhW1D1yLxkEx4KZkMG8CGZT6Z8thATnNGcVWHQZC8v7HRg7okiPPaJj5CwK671v85SDsUNWVr1GGmt",
  "key24": "45nFFhi6bMXMopSXJmPKYZisqDa9mwm5oosfBmejRg48dzF21e7PA2EoJ42F68nUHH3x1UZ6YCqViBN4mFVBpvHL",
  "key25": "2AycS5QkgReXtJywxbQFv7sgLjHroQgoAc4qVEPRW9ZWZVYo3Xe8EATqjv48JWYTKihWCj53KpEWewg9DX89ceQ4",
  "key26": "WLRtXLNHkMB2FaxS9KD37jpzEyvH5dY4muLA61h8VbvimnudUDfd72j8J7WopBeJvFBsjerYJEtWEwfUX1mJSKF",
  "key27": "4Hvtd764qA1fWWEWLRrNuunj6BzwhwvEQA6nMW5543TYtKUh4r6jcvKpBYaQM2tHDcj83ma86nDNg9D6hLKuTk4p",
  "key28": "3cLQXuwNdS9xxw2yXf5J9s8LqSTYE9VKLrxAFuiMQAp4vH4nWF3mjPtttfQT8Afz4uTHRg2KeGgHM3KSe3q4ETfD",
  "key29": "3SPWswpi7aiyNHaeYf5ucQRHPicLT1yoM98gNT5DJf8PwA236FkSvGzZzF3ntBWxh9yFeYzbqhmjnJHBnVMg5onN",
  "key30": "WC8JPMgp7o4XK4swr9RKx2aZMtREsXv7dY1pi2Tosok3rcsupJRykHcfwaYdjKzKY7sMw6kFZ88eenMg3KYv66S",
  "key31": "8ba9RNHQt8J1eqqJBEhoGtynbdN1iGq8zBbw3Ru2kN8kuau8WViNMDjSYVtCPD739i3JfvA83zCaZbyc3vY8YFD",
  "key32": "2XUTBgjSswwrRW76A4bY8hM2hZxrz2Eem5eMndgSC9EdGY2VJhBvnPCNQGPPgWnxZoarvvSnsqPbahxt59U6KNbS",
  "key33": "3Lq9UL6T9RLQLQqoWovTjfPMPvde44LaZHuqcjoiAM4nB4xCR1SeLvXbAHCykWovN6qNaj8FmtAYHc3i1CJDonVm",
  "key34": "5r6ukK2fpuTka7NnNiKj1ED1Jc1BCQ9WkBfJ2mGSeQWvZCmnt7a6hJqyehrAwRukVKQQkKAjUUmpCyaRFTmmqY1f",
  "key35": "34jkfPQzctMZhaJkmWF1RzLpQnRKGxHCRSC9Mb14m6NLicr5nDJYYNivHdwzA7h2PL9de5gwWGQ8pf5irm92PCmD",
  "key36": "3R6iXyWBP1iURrg1Tp1EAX3HSc96T7XdCbrhFnCWw6T1mAs8qRVZEXUHBNzfkMiXLUKhypkcbEJ9AucZMXr5wGeK",
  "key37": "58VaioiAXXD7pEv1kzBMLxsgCa8koU5Bhe19dNNvTVnLLVJifoVKJKJcPTvRDcZU1GKMBpfDhxBgRF3wVX18gq2X",
  "key38": "3rfribR6hVqfyXkCwtEL48ARET4goKWWmfnZDF68KQan2oXgjchegBGtJ1CccUBS8bKWAktYR2GR9bkDsaHp8XMX",
  "key39": "23yc2FugdPZJggRWEsHURe8nTCKiXJcgrXem3dZFCprLmvMXxmoDhQwHUy1rv2PDw5CL32xzvPVuP2AzqDecQMSJ"
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
