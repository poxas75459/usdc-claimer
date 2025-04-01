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
    "59vhLMeR1xvwDbgaYyTwd53XRu1UWmWNnnqRqHQ8xrtbhijBm2uJNdxuyx8oDPb1Sae2CDYdSrJaEZYea5TcpSJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "No2wJrdfNTvoPjY71hadzPb4scMyb5z6jJhAPzdTJfneNvDYbStxhSE6nQYkb1VouvKDJqA2ARg4kFUdwkgnvJg",
  "key1": "284iJ1MdYjsaMWSj1nwAwqkzJfKBnnfrmvwLx3NbmFYb5GcDXNzQbRw2z4hbXeTtEt3GxVb9nom4sKKNnwk45NDr",
  "key2": "3wcBbKJ2fyM8bK51iWxM6GcsrEkgkY7sqstF3ErSuUVJwYEJJjAn2pSgqBu7Jav7JMCVHmn3xvUcnNDgXw9kMaoX",
  "key3": "4TyunHcNszNsvdvwNgrcDFHHyAv9RAmCEUQJ1ZfSutTSEVTfjdqzsXR1ueLLdVfRybUimWv9nmBCiYSBPqEw9qgf",
  "key4": "3eQL44Bg9jtAVKnU52eZKs7z55mZ5CNFJ6mtVSgtWaLfewEdQREJeNgjzP1T7vMqNcbgJhUa3DwGe6KYCrbdwctY",
  "key5": "648kX1uZ3wvaFwGFKhYr6jtCKyyY7Nwt4G9uP6heoLCEFdJLTtFByHFnr2eEgWTjdW2VZNcHLLGvG6gVn5m91W49",
  "key6": "ra6jjzTx2GV3w8JXBTVp1DE8eSmksyBV9xXQAHQvgbhZtPE65VaLUBrzteKqWMxcu2S5oJCkQ1stcCF7nn3bPCr",
  "key7": "36bycQqmnNi3v2ggyKm9U9o3BSQjJz2kWb3aoAbEzoV5g6iKFpUtDwCGFs9TY8DWXC5a7ZZGHqxPx1ZEJk2198b4",
  "key8": "4BY4yaWzAanDUpZyfMk88eQaukKHWgL52WasCq98s5eiCca52MnPFq6TYCmpFsFcigPJH6cs2Ta5dygJhym3p3MR",
  "key9": "3k8YmumMEpRmUaTtowifgFejqP3ERD3zg1riZLHPJHKPvvi961D8JjeCKrNaFi87ri59JisbMkhr7XRPW68kFaNN",
  "key10": "2qhn78xJ5Ktm2ewDzzgTZLiRH7jimQWkchEt57ctWofhpF688CrCZYWDzAemv4NX6L2AMjiwqxNYfUNk3zJxPDMH",
  "key11": "3MBNob3H5HuQtMQmC35vAkAMNaG7AjtgQVEaqKKBf9KswjCSXsbca44zoJ4P94E7i9Pst17zw8yQM1NbdqXGXoho",
  "key12": "to8sDgEnqYVLXYh3WYyUthxWQJeaM3Yx3WQxR73niTCZ5BNFDUaQYqubqmcXDTBBncHMKn876jjbX2gG5tramPR",
  "key13": "4kUzbGP5QxmTUFUUbCcw22ECMvFDKRQmRMvvWJUz5AR4i93AJvCkno4AKaeespCQ7MzHQTtXqPdPJzUWbmrfeBgp",
  "key14": "5GSwVCRTYUUnVUx1jecUBz75do8dDpXf3iK1P5mfCbhm7U5Pop6vvHEFNykdt2Y2S6wihbHdvczYtkQCdnwR2DLj",
  "key15": "u9khKJnN6RWQo44fpUf7D1gUmA623ZvWJJJcGau5QMarGNoj1XS7LeJP51aWRXYSokKCkRCtsr14nSejaU1yCmX",
  "key16": "4ySXQTHEy44wm6Rxh2ZtYM9aCc3qjr5fK9qkdt99dCbLZv7ZrYf3uDGa13J5QsdeoNoRtYLiJnAAAw6VCnmLXZFh",
  "key17": "JCbzFtS77kNHqP6oLVtcbVQ1ntyU5wWaSkt3mnrjWjiydNBjy9rxSJENo5WctrZnhLmRa3uJaEDe2vYD8Xu4UjJ",
  "key18": "3wJsZ1joAwXfWcAn8UzF9KKdU7hcew6zoTkzPMYnKkS8thcDQYUs2NFv45QJf57wKyhDM3SsW1BATAfxsNGUu61n",
  "key19": "2WTcLAAMY8pXeos6ocqZJZhYuR2fvwcJ6Zc22F3pGvTxPH1z7VpjDtoWd1KSeRWyxVKmt1PZKiH1376fJGXki8Y5",
  "key20": "4yt9VUFe1Yd5H3E1CVCzPebv12R3WxQFqjYXcX7HKz19dx5Gui6HQkzAxyxoJ5A1QXiGAgbci3JijrmXM8HXoduk",
  "key21": "5oyFyUyaHmoPhLAwRsvEcR4FgZRcA5Qx166z1hoWcJhTSScXugMYGNR5QcBuK8W1chSGceojPNxw2Fnu6grf3awT",
  "key22": "4RUpZNvicrjQjVx8YzpyBE7enUZPNjegyB5Vzjn4WaN2KDGTTBpJzMSWFm21TA6d4m2wju32dsuMSpUGD6vCDbHG",
  "key23": "vJb8r14Wn21ZaBti11ioTtxGD1ErYMcRqUxgMVocgTzpZYvEaGqAM2vBpspnFqSBZRe6cu5BnFVCcMtSYAfFAkS",
  "key24": "4A7amvBgBmMemyFTB2fvhtE3GWiUM1n3DkCHpFoZbQSnxLz2eGfyj5GmUp4sxAh8XxuAsm9XdG4DbdSbahn3ijwS",
  "key25": "3bgtBZw6dqJ6vasZ1ktUfNFJfrvg1HRWzNAM2wGDL6PGm7YTi9evboS2JnpNqqQgJybQqt3VMpm9U23XsB9GBKRt",
  "key26": "eaDFLecfm94BgT1YAHPXi5msKoavEaJBfPisxdTstnm3C9KXGdb2N92dcm1cwQyVYnmr9Wx35k5H2EvjJ8M72kW",
  "key27": "4YrkckYW5Ly5wLMZga7z6u4BhPop5NVUmLywyPhp4wMUhMfMor94iEpgoV8BHYKNPwxt5ZocP3NMKUdK2oG7mjh4",
  "key28": "cYsCYjbdausNAXxRfEXmWqZ4vSPncTthBg6dynk4GhCUucfq7sJkjM1we1gLTfZYFD5ukDbLrSRuRAXwRpBrwp5",
  "key29": "4LhXVVXrwWjjvEs7EfzoUwf62yqmXVcB1RsLEkRs1g1c4ZDi1DNyTfAKR55xmEK3QPFfHCdQZx3KyyGH4ogfP33u",
  "key30": "2SddivUg1wiWZDnrbrNociRubJQP9PdMogoxATYC6T3abnQE8aX8X3N49NnyTMCe2JuG2FTqB9bLJzPzjb8iqTpZ",
  "key31": "4XCBB9Sc9A6AhfhVKF1yT5fqnmQhNw6RHHr6ekEwgZyvbvAfScit4th8S4sq1uDyPLsUngLMZLWLXGfgXKhikxcc",
  "key32": "49w4g8uXk9bYMHE3Ui3QCt7EcEXUvqveynjqe7YAVxYYZqj2WMv53fB8NyvW8Z2Ee3ERDZ1vM29hVCMa6N65XmYJ",
  "key33": "4sHnsyNeFpwPhgSbUqaNHVTqRucgWJMewBVuWhC89m2DiETqEWQt4vWJWGc6wW6oCNBbWXsFqQeWWTHw3VeWms4y",
  "key34": "5CZMxboGfmB5zXP385XTfVdZWsYQLsx7wCWxmAaHzU8M7FFAEpaXYTCy25AnoLNMyteFM3Wx2g29og6HvdT36t85",
  "key35": "2aCe6szn1zBdxgGX1inNQGTaNgy2nJmAPc4UHrtUfiNzsAgNF8Q4oqxBzviixA7CoXwCo8GcC4U8UePreb4emdBg"
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
