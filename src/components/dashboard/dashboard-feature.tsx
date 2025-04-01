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
    "5c51ns5JZsmERTTRYa1ft7gGGJUUfpdqFu5wAFGqk7myWCG9o94gEvMmv5kBQ5SC2udsavaKaXk2Z1JVgiCP3AUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VzJ82XZVLUMuyneTCXQ1xkYHGQL9cCMM9dqJkwjxU3eCjFAhQym1UdusTtN8CiKwxiR8SW5STXDRg2Wc6kPzbeR",
  "key1": "2LkGV9c1d2AhfMtexso7UASv9fxYvU6fq3HaNbQhNCtDHxpZsdhure8qzN4z4EBkZ9DCLRrCY4bRu1kt1wbb2xjG",
  "key2": "3VoWdw5iLsoesy7jvy6FuHdMWNJqAwCP4DHi2TSRMTnm4r9r3ZUyqABGXEqVFswtGwbXSb1cwVgLMiVFcPYeVk6i",
  "key3": "2afSpeYZCxvwbu43wp1HnZ8V8TWd6fHN7Ba9LtvPrAYc5tx172Xa9pyYxFk9b2JBrTtRjGDup8hmaZpFavyfmvbz",
  "key4": "5sRDq4hnHGbuzbPWe6FHy3MjPst8fHnepB5sr8tibqMjoZx6gYHLKec8U1fSr19bTNopux4qfKx5wRATyJPYw9FG",
  "key5": "2rZBrdBGmqczvWDYFpqsNh5n8N4KbkuMLKtMZYeT6aat5fnXGVgWESkB2tBP11Lxo3ejd7JHc4VSCzMG3iwZPepR",
  "key6": "2YMQhR1AF3TAJzYuhuBSCgJkPkKJdYdqfkHuEUeEDTb6VtbnDgrzyatCYjcMjLikmUxDQJg28x3G6qU14krxqMXJ",
  "key7": "68XBNz9NWeMDQ8WBazgHk729vqa9JS1oSbDU7dWDRNnPXhS7pSoANsbb88yG4167Werc3WhUSWxaNj8iJZDKcao",
  "key8": "45eGJnZ4uVxTz6vUC5RBximY3q892zw2u4EAx7np82B3MvKhwSoa5iYiNspwoPcd9jk4PNx6ftLqQULJTvu4A1RP",
  "key9": "4c54ZWRRdN4XaQ67fVDC79otanAQH3YyPq1ab8uap1SFGJWaLCLXKQ2yfoxKfw22PStLLih7KZRvM9fyDLthjz8W",
  "key10": "65nJFZjW4uy1sHMmJz2TNC3fBonwGHgkfxsNbgFJ1nYxtiog7i7GYsTwcSuwByP4CzRXiDpdKMk5TtXcbrxFkEVD",
  "key11": "2ZcepPP4CYiCd3Juq4SdWUDVrunC679bzvoURRaDvewwCLFKTS1gnngEApnnS9d2A7Za2h9Asxorjuuv7e3zC8EW",
  "key12": "5KnK8Z5ggd58MrgcLmu6Y55HkvB2NQmQJvs9rKnCaEx6nfXpBRDCXQsidxGebFPMEM2eYEeXj4reqY57FJTsxksL",
  "key13": "44tJCAaHvHLqQSyXBadskMEFJ1TtJSMM1ZyZUwjYXtsT2cEW2rRBJRP83xnzFy3wsMUBga1eb2qkjFfQDM8EEqD8",
  "key14": "24qS5p2P8k65EmmPWvBGBHmraikrDBZX5jAfx9cS7gkdveKGMaMqGMPY4ueHTn9nDXsBjqkMdRYRPiTTCUG98DPL",
  "key15": "29CoR4sQtK9R1H6EtLUTfa4u8xLtExgk7AdtqwxRbEPH8CRRsP7712jupRBHW9N4Y6zzqZwBHmd6r9EeijwYDcGf",
  "key16": "3poyLXDSgcQ6jwJR65Wr7AkMTEWJDrhkp88MDSFb9F5W1Xg8fSdnrzn3F61HDZiTJPTEGQT9Xj7MG2bfnpbJqsZY",
  "key17": "63TymvXacHhAZCGstpGoYyNP8P3X1VmCAMZoA9A6MyBecdr2BZyuAYLE3tzQjepjoVMhET1bWZkAAaYDjvQpa5nA",
  "key18": "51u8yxwEdz2FshUyBCKFasDhb24WBycrYwAnHSU4KdMXSCxDK3HqWccGW33KFw716BaiVR8DJGeNCqZNkbbw3XxS",
  "key19": "58n15TQK9HtkKzasmV3WR5eZSU18EfqZgwP4BmayzhE7sWmXJUgUCExpF53msy2guci3eUH79w84i8Zb8RzLtFgA",
  "key20": "9FNi35Rg26PXrtznLQZVccq7PWVRCYpjz8CTSQhD9GAJ3C86oDn3zMDSLPqQUwDE8oToX3W2BDFrEcHnuoGTfU7",
  "key21": "skKJhunk6c9GZQAs2hJu2Ett3oVqqDb78GAf2GP8Qr4Joq6hum3Ah2Vtv5PUT8p6VmRGd32Z98fxbuedcpE18vy",
  "key22": "2GmE2G6BQudKXXpq21T6nUew9aS9sU2ZXcUBBPUHa9WSK5Done9s6CB17yhCf6zm9fcofVUYisM5ogq2Bxc18HZw",
  "key23": "4ma7AvB4cHGyRsrFfGaXUnBhu9gXeboYmsUbXZFSra5hjGMZLzpvnCbQLrUdTp322ivuemZFxoFd195jqzYGbHLr",
  "key24": "5nNbRdTgp6xwiZReXNjMA2UsHLVQtsJUie6tnTTfNLpJFzt3B4aFyPNP5QBxpfVwWgM58o3qNJ7M4gwNfMAYnUby",
  "key25": "2zdW2q6bwH4dvtebc44UHFrTgrNgVPqMxAWjumQarruTwxDgRJ7C7FFqBY9j75eAE1iiyA3uRYsyXPBveg5mkU6r",
  "key26": "4Ax3cRTbrK4Ks1SHA2GZJSXpB4YEsgHh3qPLacqau9pFjXPkTPG6M6WVsXAfdrvJqGMXi55DjrXBguPTZXLbrbJr",
  "key27": "26eytAmQWAnFQZVQex8fBSLaMA7NMuSCGtz4CtEqcAAenSVoT2FHgVSsRqpuytAD37WTd5uwsD1TXYRtyboWcfvb",
  "key28": "61eBsASrp3UhtnVsEbnwfxrwKPB9unm1qxsFwyseL3M5yg5a8gbaTVudnuNctd11KtyuzHCUcaWrxuBumGeG2nt4",
  "key29": "2ayWDgCb7G7MDbdhYAqLsm7VMmBPNYJYGvyUy1LQDH6PEY5tU9Tkf5R6SxBSH8pj1gt6D5keYGAoszC4r6bua4qB",
  "key30": "jQ3nsj8hdoRHSGiNkBzqbCsLzVJr8f1ahdzbe855qUaDsp5K2TGx7z2ao95bkkDzTk1syry3RiBnmRiDXjfBXuy",
  "key31": "4cfY6EmLGN9vAcu8iP9kSXkUgyym3PVYAzhuZ7kZgyLhaX6Zv9aKtrmgoxvJxnfBisXJzmVrTwrvaNd4Px3jqzLK",
  "key32": "SANovvAibemw9gBdy86dRFWCi74pV7TXtxRKfG47vM5EKmoJ5k67CE8fQz9gtVjxumzKwsj5Vj3g4HVYTxh2hS1",
  "key33": "4AnoxULhMG7QRPfQ64SyMccqAPMgFSdHv6Vqhnd6576DvKttoZrqk6FbsXXQzz581HgnSXqwSDNEvuLUpczUiLk6",
  "key34": "3d9Ss7mRqpLTqaB9x84MidEheTeiZExJRXsnKcAncm5EnvmoAYyoZPGHex1Bqchu7o1qHnv8EXJhhFmyHLJQ9DTq",
  "key35": "2szsSCAT8uadgwBhYfKLdRBfco6F6eKEi8sd78yRKMGRhJC3RFinKriJQYq8zN4yh2TfYtgMCSEGKUPsg8sG3CFt",
  "key36": "4dauskBEoT8s5fQvNRduRULLjJQ7euRx91LKpHXM9Dj5T2ZPY28nPeHdTcQ2X21txqdTexxXYtaKNeW5JFYZkzZk",
  "key37": "41hRzyizwt5NJZWpfT7sXDkHdydNUBDGyB5nf6b4Sg7Xze2dnJGCTGmjZQ22wB7PcKdcfzWxYd4d1FF29odSpoep",
  "key38": "5tnmpqAto8JFP95ecw4DWzvaBVJ2A5UBJjnJArB5hF8ZsGx8YZhWPWRjoXR114AQRRH3puyNXJVe4hMPCnQ9KyLr",
  "key39": "2THmziL7dEz5Q5wvy3jtT58V4ELedmtBwAnzYEgwFqea6V3j2aWBNCCJHSJJZdLHi9DfV43iCTckMJ1G81gBxkCk"
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
