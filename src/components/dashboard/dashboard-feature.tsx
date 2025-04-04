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
    "53kUE2Gcu9rxDF4rAMwz7sKRhyTiFusV6eRUjvp5tN1wBDMundARYZd9nNWN7BJAeLu8yD6caQE4P1hBYrs1TLUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gyaxsC386BjyKbmVnVab9wfiiM7WrWFpn8W3NZJrXUXtdqhyiPGvS5jXAshjyo6F65GgMRxRvh2ZoYRACNaHjiV",
  "key1": "3PKq9PoskHNMtP4x8GWYCtTpdSbPv7JYmFqHVjM8XJzXKKnUZVA5fVsa24FhjS7yERt6ie1YgDgd3CuGjsuVapvF",
  "key2": "XY3E8cb2mrRx2Q1raKDprK2qyahLTMwbtShHCLxJZTmZVpawXjbqvBHH7TYicgGso261QcQKqn3YqoAPWE4qp4J",
  "key3": "58bCXuqMkFH2NrvNkUumZE1nasf2HwWixZGYu86oUuGcTgTp5qpMfGn3862o5hMG44Ps5QDzkvJiqfrzDjX3U246",
  "key4": "4iPDSErV4Aupdd7YxSUQQgWZR3fbGmSAqABfVZvyEk4aiTgXF9dPTebEQBHmYD18vDqcJpPeEZEamyLpHrvJ8viq",
  "key5": "5hMEb9YyuUUqYm6N1syGJuAA23onebqndJP5JfNgEHm7NgaNdKfd4GnDZqusdg4xL8wehHg4oLuKE5fZYyjiQ14i",
  "key6": "2UXZ3kvRTHFPMdoqs4JLu4QMgrpQeawpzB3zS4mdMoGWYQebaxaVd3Qq9dyu3Cq3tb196hqCTgipV37bL4UMsR7G",
  "key7": "5zaE918VUT8VeQXgYTNWNSDjPw5k4bf8AGqgb3QfPdmaUH4HaAgDE6VYCVgqfegyjepr7Xqmq9SqV6qMgpmQQDFe",
  "key8": "3GzYR4LFVG434n4dx8AgbCe2ASWQSNswvH8ijmJnT8NbmBZNC2dwbxCxmzezLDq799XhNAyj3oVoQ2VsEo6n43Wy",
  "key9": "rC7Vp2aHTUekzXBUeD3jdfsyNKYnnT92ZCQwd5bbeSwprGYfqyYjES3NcokwC5Bn2EWJNt5txw4E1xZeHbVL3Vr",
  "key10": "rjMwVbrJXm5wWFkoW8qZaFbrXk1SwASKitTwKcvP82XMGBXc58se7JFvoDnX7Tb6Fxus8rvKxXtAhs1Y3cvSQa6",
  "key11": "4hNy9NoFd9wzCw57ZTKtGD3NDHctsBWWiyTxBdRvpXgt6F4Mna7S5nF8115pjyRYHx5bYBymQxim551VRAFbMJRu",
  "key12": "5FX1jHmYbivbbm9K8p2smuFHGuYCeF5txPrX2eohsByiFksZMBTH1iyZMETd1sYN1sY9HkfModHTB7Aeg48JKPas",
  "key13": "4xsvJEjhy8qCZh2zm28yNSjLRwAcQwb7D32whCueZgwBQmwU8qnJguwM9yQPgVQSG4kT9naLRGGwN5GXgWgtsCwm",
  "key14": "57X8NNoW4TCD1WaDnQvmVgwxJpu1cdbrqejTzYyLjzBntHe1MjYAyygXqkeuarQuXc8SXQiEe6h7mysPdYJxq9HW",
  "key15": "67fNS7spjScdzZkc6zheevmLWfUwFnrwTtJchufcnwuefTReB1TV15etipq88NNpZrf16DibEQCNoCZWPvRfcYmW",
  "key16": "38F3ufWJa28D6SnmVBvhZPCkSLAxh8DU872NQj9AyzBFLruh55HWseD18Bi4ZRq78CuQPJDVdFL9Z4fX2AP1HeLy",
  "key17": "tdCqHpd9NgrJTU971EGbLv3YMAeV9JH9r1TsBaxn7N9JntppzsE3c2QWGoGNVXYRVATpq8dhqCXw6HQkWThC3oL",
  "key18": "WMyZEtjKgrtB769vs26peMyCpoHEY6BiVw83f8mcUKCRaikryJAR91GQsNfaeo23GYsGG4VJZZVta1sQvMiNEmK",
  "key19": "3kvsRqGsMcR85QTboeXKrSFbzYfRAj74NgSjgtZqLoJJ6wkMfEC419aaRDXLLhqFAr3B98yEfGycfgzuYXUj7p5v",
  "key20": "21xs4JhKLcSGpvRewW8oaguYqEQJmhxtbN2vtRKVwr1MLnAjXacPY3egVKAbAUU71Np8kZadkqvqiQx6ztFQoABs",
  "key21": "38difstif8oH8X6f8DFsXKUzUhL3M3LWFmRHF7HhEbVtQaUSaDcajxWHdgAMhhut2A1HAAAhr3vvN2ySp4h8VAPL",
  "key22": "2ATGjSuvQeWuBuA4j7qyEwsXEidC7MsH5uSU58LfBUgGzi1FUUTTDa59V2XpYJoVR8R1p7wGL7YB7SiAn49ebM6N",
  "key23": "P1cMJ14FZmbr3tYfxDwVgreQWgQBKnCvGx15Z2zroFXebg888kaZNJ1bmWZygVXiV7kHUaMvjRYuk7hvCMpvDZD",
  "key24": "yfWeq2BTX9LTxqToMMMwgQn39CZbaTjGUUS2LqWkZ4g28exVchfwNA9oqrmPwTFz378yB9sutspx4hTkvWi8ZKU",
  "key25": "5r9YHwitypwdJfU1PSwmMDd4dUGSCRY2LJiCBAijBHJdSqky3XWNCs3aWPuGd3Hf2xAzfYcqmwaBru8LsjYmiudG",
  "key26": "3cs1gpixpGhx1bgVJVtUuVfA1RkdjhdVVrxSbgbEembJEjUah14K15DN4rJsnS3WSzWd61DfP4kmkSno2AeVVa4M",
  "key27": "zRtfDybC2vxYXMRexgh2fHyE5Qpx2QA37VobTY1Jmx2mv4oMSVotrmK4tccR8URzc5NWX5mZXEdZ93defTp1zR4",
  "key28": "3XJZ786htPcNNif9PTdTw7AKKntgWsaqiMTPxedg7fQvV7onN8k8nwuoFinhqaFL3BFfJVufHhGizuPWVdBaCyy5",
  "key29": "4FUoVPfSCVAvUYizxx8pKEKupdHezpFLm9LsE3YVhJGZyUXVN4CgDPET8JZAHT3ivGKp8uPkoWtqvcXmsUJPN1as",
  "key30": "5QwAGuwx6QtMeQtMpW2GxgwwcHCvXHuunhw6syhGNL5jeQMdQeHcMZ9YP5kc4SCYuzy3RnPcDHECbHiM6oDsNamx",
  "key31": "2qceGAbUmkaP7qrcSJbtPtBY1WfBiuh6QPCeyZ5rw5gMTNHMwG9f76oiRhHSWLow4mmqm6CEwL95nL8LERscFkbC",
  "key32": "3aKusX6xeGeyrEvJgHgwRkt2MxXfQcHf3g2f4Zex6HZ6qtHoHnEvp4VqdmaV52j8ZqExX6CDQFTEvzMC3CGCd1Pn",
  "key33": "4pzgQY5hwS5kCjhzDud1wM2fSFynDBN5QVvnHKLCqdBtwuvifb72RsBbbCA4ND6htdzoTECJXQtomNDvSDb231Jz",
  "key34": "3H8TuPKWCJ9wDck3RM3xaayto4RfBnjeHdxVpgGkbVrq9NsefhZNAX7YTbYqdarL8PmFuiMg9wwsUaVAsEPrs4Ya",
  "key35": "371rUNFGMV3b52yXX8dwEWk1TuDJB66ofWHTKNjq8dquJRexwa7FYhybG1kNGSiPq7m1KUTRg4h3vvfpQXJUiDt4",
  "key36": "2zoCCS1Bt1wWGZkMMPqhyXDHiFnfU3hvRDHckznaiAskfwZK4BKtr7MrdD92xTdkXgwfzf5F2ikhT8ekm3aX2rV3",
  "key37": "4MS3Mted9ZDX2ynjPsPiKPLjwt3cQ9XMx9iR4wTWadxotjmWNYjeTCaRG7Uez8ehik58NTYeF56xw2xrUwXkzhSg",
  "key38": "637iz4EftkSDbpnBcVdRbUHR51cMaq1MDRtBFjbK4aKeZe1mu5hYmP1TxmgYnap3K4k6WaMsFVPmdzPhWpwxudh7",
  "key39": "4Ugtzkc62smYfe8Qe8RsKZ3TPtBPrXcWkSxSAXarqJbmFCrCzvdMw6x6kv48rRLjHtXf2rCRRB4sJWw8aDAbqDmg"
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
