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
    "4pbDHcCZHReqo3fNHgwA74q3bo8tQUY5jM6jKEZPkXaYYTuMs2quvGPspi2AL9xV5bYTQvjQe1UuNHJAKKj7iCzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q3e7q8diDaitmnyTRti7CRwwfnu6e2uU5hDirvqDsmrS6TpgvGt9dEsdcNPCwvNjD8Jy1q8RXNM3vCvk66RFqBG",
  "key1": "r88F4rEASZXmE8y7r3Z276zTrLeGYmZJtWN5T19ATKVViyKAz3aBs7o3bopPceoC69zzRxwPbk9ZF7taWM218BY",
  "key2": "24yxhA87BrByBs96rVfJhh8eFMswXWVDZyqLWKthNNY6FP5HC3eAc3uMsm9eShhMPShx1WHYLnXoKkuAcRJ3sywG",
  "key3": "4VZ25viG6MFnqGSUdiXGbPQrXTA48TwRzxTeYcfRQ93ZwjPe17bk8hmDU2USv5vijqkosKoofheExdbrcKb8NzDg",
  "key4": "3ZWZipwtxbg48Rxs1cHNeT5Z4F5QeyAKPTafgBw4i8Prq6gN3vCqoEEv2QNGahSms2sqGujKEb9fsgL6vLqVSgLk",
  "key5": "4QBrNLHRbBeaz5uqS3bjBvCMb7TyFXmypXZmYbwsJeWEt4qgP6ezz53q5B8J168S624Zw3x21hfG6NkSzGLeXJcC",
  "key6": "5EJFXDF2iuDgNFuFVD4T7BWV9s2JynyAWhQsuKSEPZUs99NP5NR71kJprvhdbxZyLftCAGAQHPZVm7ifQUMUeu1A",
  "key7": "4RdeesCdyEQi8vbE1yxYXY5rAcd5nTa8FxbZZfo9XX7UuAYEsuikWmDSMNuD2Xzen4Lrmzhswfi9UE7QEmEVWWe4",
  "key8": "5BzyZ1EkLQ5EPd1QGzg8mGngiJAsshBTz3z2Lwb9CCL7deZwdgsyw7iJngq2cABH136zTERsVJ3agpPCW4PwcVMs",
  "key9": "3TvEvY1pXxLJX7xpZpqtX72MXFj2ibPwigPZKr47m6w9SC2vLTVDTZ3wuK5aHQS6VzmPoeKxor8qMFBdLe9XsS9x",
  "key10": "2scHpuLrgyKrRpsWjyeNu6kxSzeLeYo8nZfexxXapULiE9DT9Ys4M2bzFWboAjG6JeHX7as3yumfDCFf5bcJyjTG",
  "key11": "3FgnAtJhbVUJFiRomZwjt93qVE95CFxy2nNcUemDsHTVLan5xmTgNafKDHThRpBxEBExR64XYG9sty2Sx82ywUez",
  "key12": "5DeKZcn2zy722eFNvsHR5rk8uXsd5UwBYNkh1Ub6m6RrhwYkKvHLdNVXdhzxbdJGeSY9BcNQ1xXRzS6aqGocb9XG",
  "key13": "3YFMhZtZXo4NNNoEfRwz7UqFp4qDegmw5mhGU6jBtVQshhWUGPaa4EgA6Yq8dBUvGDMTEzKZmSuWq1jGU6d9HCAP",
  "key14": "ZK9pKLxZwdVsyPEEqB9U7rVdxbPge6yYDz3GVJBMa2AsPHWae8xpMBFWnvDpqdFoewPaRDqcNAWWNiFLLwc4Aa9",
  "key15": "hkKPWxwMZzTFXLmHAdXziSb1fuEAatJ5wKNFg4nyK7J28d27b9zXJDJ3EzS5QqxPgxkUZyDC6ytawbesEbhAukM",
  "key16": "5J5C17DGPGPY7wabzn6VTpqx62dF52ddzQusGf8H5sdZs3fd3qCYMwscCMKmx5dN8wXKciVtaP8uFsLViS9q73qs",
  "key17": "2qcQ9XkS2Mo2bgPaRSoJDaFkEvHNTRgsi2VcExxr7JDNS9JkNrkBpF1BM5CRsWNCDHt9Ffq9f8FjmrsSq65DLBEV",
  "key18": "61Sbu3GNpmr5eLQ6oZRaS6WDPoEmiX4Uq6ySGkRTy27Li1XuFuBGf3VybMz9s9DgVmHWr3qKiiVrYVtGTxBpVYCG",
  "key19": "3RG2armCYEMT2FLGuBt6QVcjtnV2J5tmn12yYwACAPLzDzLNroYSh1jSztdnaQsq7bZfxqpSRkf2erB4wLQsQ3JE",
  "key20": "5tWhpbKz7vsGMshm4bD2SKhSZC1n6p9MQhRmB6wvctiWMsR5V8tvUy8mwwwMGJ7MtaLJetx2MbCDK8aBYiue6d31",
  "key21": "3BpBL6gNftu4pfBJT853xZ4idPjTGVpNkc79Nn88ogD734K9M67PEmZtvsJjyU2hCqRJmYeCMcT5VenCqfCwaaPx",
  "key22": "39SSH5tK7qEU1ZhGKpBz8M98bZNgqMuzz2Y5Bb8k7nyCoHpqEkC8WuSGSf8AVwq9o1bYxxmcDZoMyCPCCSownbTQ",
  "key23": "HqUYxWUs4mgfbR2GQ4zc2Mb32cnPC1zssP6gVspuFHdMboCv7rjKe7JXv9nJ2z7ZdDrCR1aFxTj5uuMPxdqUXQs",
  "key24": "vJd7JuqzgNU2Hmwx8SCHTRHMSViKf74gHJpfzzyvmiMeacJiw5esm2gXcewec3BVpPNvHHNyQm1i2hhjxKxNK5b",
  "key25": "5pLmw2W6D1mwyWBatSZFSQBcpNh3q34bKgcX8TZgUCNHW57cwSKHE8NSja4KUq8bFt1kcTT8LverpHjntA6R3Gc1",
  "key26": "4MpAfjxXkm3XrodWfLMo4Hwm1pDivP38QXffP1xXGgNgqCQFFWRThfbswPYzww9S6abPa97YiWYxCdSuZFQ4NP9Q",
  "key27": "4koJm3NnmPpB58zBctoMgmiUcZGqxAvtKWWALvdApUpMoRNcbNQtcfGAv1HsBSQZLLyzSjL1VfniMqMxV8W3De9",
  "key28": "xCqseabqLXS1o2p45K1339PLpfy1oQedRDDtArizgfaS24yDkx1LSENDbWRcfhoXWHamTnVaRM8ndrXqw7bwDNL",
  "key29": "4giTAMb5qb9kFV6jfENG1QN24yrE1RcGdsPaLC9M58DbRW4u9n2X6ZhSMrNAZ2p6aaRcZvbuZYekKYHkVRkZJvtg",
  "key30": "4afPXQjhb8cXukM9P82qDR7iqn8p2RASbju7z3v1i86KMPJ7SfykyB5ks39hXsQBx99crsi56qMUsq8XbjTqJ5gh",
  "key31": "gEprWbrYG4WVep4jvxNEQv6XGZViPN9US1VAFyoSjk9PHHxJN8KNotAVxQqzsNWmZtB4LB2kS15wrumVyjHVCVJ",
  "key32": "4msRi4mgVUg3EdXC9Cfj8su4LDZaSdmjKXVwZRxKA5CsrvP4Hy1Pdwig8udaxsCAnuXiAkVaxoWsanZwRsLMuivj",
  "key33": "7JEY1AenyQtR5CvntgVDHprydGQtXjgWssCdUJaSEKns6JjuhZgmx5ddm2rLNDYzMMMcufdvg94uGsbWmqb3HNN",
  "key34": "gJgDNpiPbmFum5sY2pF7zDWtTNo5i6tjPrxhUTrTQQmSnKXad9iy2Evpc7vVRjUPYAFNtW7vm5NTum4EYTwrVtn",
  "key35": "4dLfGbtipVgoWWMJZHENzk6XEWtU19aCfGCFHJKjMNttDpVHiSje2moPZ1FEC7aG5ESeAftBjnjrL5NPirsrCh7n",
  "key36": "64VGdgHjkXGYx1hRomSBsu7mvAFANTBWv21hmsViyFLzvTyqUTESiNx4R8bMZBrHKhVwVnUg2heVFkEAuPQwvEge",
  "key37": "4LPyYFzyrEKkVULS7ehxcfztbckuN2aHLKBQVHGPoJLzBdbBDZWB1VGm8dW6oyPqLCHXLbhPRBRiNvUwzRxx9jTt",
  "key38": "4TZ89geu9oQ7CW4BpsLbAY8j2xZwex43pcv4Mf3yukPYqbBJ7gqj457xCi3ETREcxYhJzGB8DkSBmdECwrytcfUu",
  "key39": "4i41fmCyuKWzECmthTde2rDNFuFtD3RFmY4qZVfQiFwVQmLignrZex5YfZuzTdepeqo1wjBu1yCbpKjRmwGih4ft",
  "key40": "4gXr3Kz9SaEvoJp2o52T5Mb34t9TwFRGSkNcDvpt2CXviqesUosk47cHmQ3EBDNSHsvZ1xoyhRqRArSSpzM5LN32",
  "key41": "5UC1DzxLjgYg5pTFvwqw1nKVptBJUJiSYHieNS5Qd5Ktq7LByqQqH5D2mfXTFuwtBZcSaBQBgLLjS6XaPvcY5urS",
  "key42": "4uRfJaGmsn2zvwswD5GNnQcMxgiuSBwLGazUxH3rfftc45fZE3kBsVed415K67ybd2tq8rpacQ66mXMHFFuJUukx",
  "key43": "2b52GKyaoWfNFs6cXFwT3gRtB2Tsf7XjQcfi1Kv7ZdiYc1PEeJzxWyVueDbXq4GDw9SBU9NRSUgijVFjNzLP9WCf",
  "key44": "4J7DxuhJLKBpgMHS3GeZuhvuwED24zWRBdu2gmjos77H6QhmtbJ94FwRERCv7AnchZSkFYz75QzFLQP4zqHqLrfX"
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
