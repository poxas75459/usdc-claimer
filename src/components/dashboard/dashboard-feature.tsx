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
    "644tcaGto52RN3FsysxAKSwKw89t3R9HvSwDszeCQPTgS23qtGBgRdtK3bsBGqhw3tJmAL1CoLNMySLGFbvM4498"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48myZzJNzcWunDk9i4Q8nYunKdK4D64T5KEkhy2QTmALssBEAB5M9VGnp1JzDjGWoSaukEcd7BCFC3UMeMVWRPzo",
  "key1": "2jeLgkQr2u11kDc9pjAQq4KY74AATGpyNRQSF4pZAsWTXGxWRZm1DXfmv7MBmUC1QJZh5GTMLLSg2AbkAiEb93qr",
  "key2": "5KqGyWYKSwacLKkNoQJsVqszRedDScqX8ehZmKSuUfxA1iffpERAZbsTi14GPvCjJJ8S6nJMEPDyUgeX1CKgmK74",
  "key3": "5GFHUDpXi4D3gUdHqZNMhpKw4egBhuiq2YiGGf9jURm4FCKtDHBY6T5zgud9hFtFjcFQRaBUXKGww9Gzs4s2956q",
  "key4": "qicrRSNCHw1cfzwrbEoAkBkLXRxrejEJDKQ8Hk5sqtK2x4N4gKsohSUhqDESDW49iAvExnBxokTfJHsHQi6Nx6K",
  "key5": "5Uszs7C2RLw2TtHWf6wqCKcZNEdyGjKxmp5sMt9AJpTukp5ZHxcu9GDZvkBZJh1zkbngn7GvGwrLoUkJhx9CXDUV",
  "key6": "5sMWjXeugUstijowmZqPKyZh1yncrZUwf4JxPy1YVdCMXRRTBfTzRXQSn3KwQaxrtd2ER7NoPAoPToRzyin7fPau",
  "key7": "2xXRTsTf9Z6bsJNSzUtvMsNkHBWWApbZRSssQkg1Tvk7tfqL5CYU9kMta2AP4dfQmXjmAYiWW2WF3ogKM63kNfMY",
  "key8": "4Bx5AwzT5NL8fgzwtHY2A7qDppNVmA9iHZkenH7tB52bZ2xfCvNKiJTKtkVpZtVemxQmi9PRxtXbJLgi11idznhb",
  "key9": "Gyn2VdvRtG3UnG2CVuo7iFpxJcf96x7vWvtJ1U2eaKYeQb6KH5ieVt6EtHGNqh741kFX6WwUKursaoM1oViDpjY",
  "key10": "4gQRqjFgr3zEU9PrannS9bbPq8RpuRrctF8ijoM2CDLizMyWcwM4sP6SWanD3QDgP4VDSrWTps8VU9wYep2fZoz1",
  "key11": "38YBQVGX4iWFJmFCv1Qcezg6zd3ezAX5QeQ6e4nbLsWhLEXopkMUmvhwffBQmjB8SQtFH99UWQ27KYDFgQwhMYvU",
  "key12": "7xAKJVRjxVbPPBeQHvQAGVNRQ3aoWaFD6Tje1DfxvK1ymTArmBU1FtRzVSwWQnmUYdBeWi9rvzJecSbUGcKhiMb",
  "key13": "h2Jta7at9HX84JCt443xd1NWYHHVTw6Z9oiaStcE5RDNwwCRUVqhEpiKLymbAQPBQPNXnrNnM8XtnfAJZ6dRENF",
  "key14": "4aTg5AirYSuD55oceLLv9X9kbhUiite6smYveExXWwXkyzyCwfiC8rW3iqRwXyWfJZ6dLhjjsx9RCR9ebHjmi13t",
  "key15": "2YnTDJ8KcRyw7chU5VmdB2vnUnsEo98XxHEnMTyhbVR7xZTP58xuD7AWR47UFUTxxkYGMg1iqPdXBKMvz3HqxcF4",
  "key16": "2uaRqJzpHCExmWdCnGgYtSiGkttFLwiyBuQbFzrF3zEZapU4in3okzrPkUcA2tifXeuN4E8369GftfnSuGuHqB2W",
  "key17": "51mkkeBWUx2NxrtuZu6CjQAaij9q2v2Y2bYJw1GXah6DCBeL4vWakQpxuVzPUatXd1CRTmVu6BexZqu82avJmKj3",
  "key18": "U1YQJ3usDeL4jaC6Y2iUneGC597YD8uXPEhDbtmPCV1U9MP2XX8LTL2JD9Z3RNp5BELd1H1FVKZ1c2V7JF6zQtD",
  "key19": "MYRpxkSvrtYeGFiHkZNY4MPFnHTBJq1ggkmu4zrVVESLxLvgpXnicfWThGUtsQC2UF6vUegiGqw9gPJpPzD2Xch",
  "key20": "3aZdYqSZWBW8jSyvWNCmRc67ioGAq3uk7d8t88wyhFWMBjGc5mfRb8jiqCB6LTRcY6D8j1cEfjVFGAG46DJ3kJ7m",
  "key21": "2XhcDk1uuMhN93KKRGUA6GiHyuXmcde76NkLD7ipAWf6VixhV2GwBRKHQVCobBkyFDYmvLHwtGMAv6mTWAqnSmV8",
  "key22": "5P3zDqBTCSVoCJXJWwkCm8afG5tuxwWMKihFEzybQvCW7VEMgR2PsW7uo9N1ACgSzMTeEvqEdsvxnqvmU1H4NjfH",
  "key23": "qBi6PWeFYfwDLDY1mqUU14bkXTHrK2PT9jbkLncmn8UDWi1oxdF6fSuo5FUTDuKgT8tY92VBQPJpmfoAASu9GLH",
  "key24": "5BJLm1KeE1MBgkFMUgoCDAXnTDrZG1Gd9zmgabDEvXgaXz9JtDrqkoLvoSLHpaVsnxn29T6q2HmCFtZwbSwQ2VhJ",
  "key25": "5SgbjANZmkNrJm9ugJjsSMvwV9YCGYjMBvpVtoBpwaYMnVWejgUM3PWqsJe2WetjBysBEY3mzPs8DZF5xYLUm3o8",
  "key26": "5gkvreCEzp8U1pRgGAHkNxyqsTfDK8cSZ7FShvDhtZpWfYJAyTUSdjv4R9ERaJc7sBbExy99Ymv9MoLBD94sMZ6s",
  "key27": "24xhpFy3S1kaKj2WBvx1BuVTzpGJAPk7WZkCWUhW8rCAa98EkUYvmFuEotFkf7JU8wntNFcuJnvSSFVAyHPsFjyK",
  "key28": "3k9iyQhesTfBnemkmyYoo5pw5VyE2nvNdAdGAtFQyXdZ7b5t2A2E4kFJKdKvNLnR4rMRDT1gMYEXGPT5aB2m8U5G",
  "key29": "yVDG1e6p7gpL6ASatwWvu956Up3ctSP7Fu8XHWwQWJfbe6deH3xBqFH1wpmxbqCbHwdYZR5etKFXNJSAiTZxMFL",
  "key30": "5EvcW95yhrC7kA534dBNg4m6mntzaoqm2zcAMmvC5MC7rh94d5qJfHCjpwdaBuwSmACHAQnD9UuHakus15RC1mC",
  "key31": "XGL3KsVygbXiW7icLV5Vkx9DtbdS4N61Vr5X8Zr3n5AYt4tb1TBrMzUJDLKqMrd387frXHrg7SBuCYFM1GUNSqg",
  "key32": "dK9SeF16KdWGTXv2v8wrD1Jhcmp1xjJ5AGqLfhySUE8VyJCA15UsyJi1CQYFsxC6Ry6z5CC9YCKxYYXQHQJTpgH",
  "key33": "3qfJXAVoVEh4sc4PKsNU1o9P58aCM7T3VCs9HyXp9R5VLn2PLwr37yzCgRtvLpxEktr3BD2qBS93sZizRjprzT3f",
  "key34": "5wkSqNjBwgZrZkWgpYiD847gzim2SEbCa4WDfvExWBCWMMFXAiLeNX1PttJ8tNSo5Utn4NyQoh4fRbdoPghs2wB7",
  "key35": "5qFdsdWn7peyAzEdZALq6h9k3Qf5ugy8WF6RHj28Vk68FuNcSBDEjs2BiardqcvYUunSbAxnjHsgCqNXbSGbdAh3",
  "key36": "4DU3XjEQ2etzrGu3EJW9PZ5skM4uUNmwg1Z2gQvxfyuvdfbohnConQknjMyfxzAQJMUZYemZgUqUNGHEUZCaUUmG",
  "key37": "npeA3EQmxiwE8dk8BSjyiGzcoYyNgJFma9qS2DHBa1treJt96omoqzshKgrrPBnLeNeUoRLKYMH35J8oMgAqjhV",
  "key38": "27Saafpti254Syc8g9N2cu3ufZAwtz1mEhTBALQBHAgPC4Us6eEdrDVRAtbacPGgAJ7R4bY6rg7xDYruMwC9y321",
  "key39": "5AnmofzgFWHURxafwj6CcC5sGS29jPRWyjfCjiQLzdADArAHEAaUrd8HoCRmenjJM3oF3tMtK6sPTzzM29Ev6nFS",
  "key40": "nkDQA2DeTM1PwkmooDJRuAEDXMBFnAX11mrFZyWArTsksbGsKd1WgVaUf9zBfZsHcaL8uPCP4Hu24qW4D6JBQ4Q",
  "key41": "4WKpfEKg3qfiVLkQvXHrttgNziL6Q5vUzcHJgruts3UFUvyxfXJkpmjSisPokPuA8QhhNRVrKfKXWHmkiJvVcqFw",
  "key42": "4tjC5knw4ftamQMCMkWevEw5BsQPdZ2rtux7zCQfJdbWmf4Mm7SV5EBkDiw644EDvCdWgtC4thk6cB1F1vaezMMV",
  "key43": "SvReVTjXrJhYnTgikQAphJzm1aNWL1jijQP89TPLKcicVviXHGt8Wvkw42VX2xHcFN2ShXPeoPVUH3p7RFBKfzv",
  "key44": "2rsrSJyYhz5wS3hWSALKXYfruo4HdMbWQQ4L3FPrmiahvZ86k1aH15mRqsaeZUPekgShyFdqGMqkQG7tnCgXUEeB",
  "key45": "4fEu9URCKn4gRXU6bFhYHY2tD1gX1wpqYEV2yYT5sAfjrJGj8zNng1qbcymgFK1FTLmbF4t4riHaPJyEin7U88Q1",
  "key46": "56o8uh8B5PGpQfQiE5v1CdMeBZTxZajYhf1Ej3SiBNk4bggZ73DFXS4Ty2vYqvVfLzqyx2jKhZYJi33bgTSzvqV",
  "key47": "4Z6iNDWWSRggKGGTo9K6qyeriJV1MzUUyimcgEYW89RAgbEjDFW8CAocXJNrAPGYShajDHimH9hcCdEt17NBCFio",
  "key48": "3NgHv8QFyDsFAtnuoVmFtQHHpf6EQswnhPsaMaQjcdFk6gugnqCLAQGBTFfXDBhTQN1Q3psDKUkz2r3waUkCv3zv"
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
