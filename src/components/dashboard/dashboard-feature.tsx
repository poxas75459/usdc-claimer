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
    "NZj7qfz5kTQCM4hQjuKCEwrtJDxt2GphvvJBGdoprw5bkJooKKGatUsVg9gQ9JHPjkzkcjup3rakvRreXzykE5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pi5jiPcZ1vp26esZ64iGcpaUeF5Fm83LjaGX95jpv3V9NnfUUzGSBmcVvELMMMv2RALsAfSpfoAXEhEYKawAxTF",
  "key1": "5Gxx6deQcHTD2Szh89UiQkzDqmRr6zFLvjxjegWJpLMkqNQhG93qm4bZcB4Xi8UX1pDLyEY6pZcxVCjL3Z9CEE5Z",
  "key2": "2cWMJqXEq8tthLCrvpmvDLGd1KygRnrvVb5cMrLWAbQhG69nhPhBRikhzqGRGQYR3hF2UG1DPYKN89EngjFD9j5V",
  "key3": "54cSVjF6E4zEe7BMQXQZQejnJ1cLCtRxWDzSXvYQdbtTiEUUjvzX6iATSKRmevaLYqaxayRGpPwpbWi2f7UzkFio",
  "key4": "4PcSpurVuMQPeNPDEdSDFpk1PqWgr6sNxy75B1oCLRGRSpwtrnHKCCEmZTcdQDAN6vvJoq7dGkDjPq6h9QUFcwGE",
  "key5": "5YcbHhssk2MzGMothJCSNXhj7sksWrSXt7x3bbSF9gbiRmUmpv3C7mTqsidXDkoWWRCLMrSu3Ag3Htg6KfpKuyyP",
  "key6": "55LxwXVR1LGx8gWCcvvFEhU8zyWa3bxwKirDz8byktzZGCbKQpWYR6GZAcdh2FUy6MG2zXhLMiMV2JDn4S2zGoAw",
  "key7": "2gGCoS9tij7WHYNPWZ4iX4KvM2QyGRHpM9Xc9nYcZadoEp7oe1hRhqpKUzPus2kLrngkjBv1fbJztLH9q3CjFE1y",
  "key8": "2nyeXRraSvcCv6kxMoyvL8rdk6piwnSiD5m4nybrZPpzGX1jFu6APmWCMg5rrvXxBfo1vChJWJoFx3xRAHAuBL4K",
  "key9": "4BYsJcxz4StRTBpQSm3cTnkd1eQ8tVsFVjkS4bAmosi5RDEPrsS6vohmcnrFCa87MGtXF4VExsnhMk8wen9uLv54",
  "key10": "4RTMpXP9Wfos7A8VU1CY65W7ybXXGoYYQzzSMoKAsZXeS8XX1u6J6b9Pgo2ULRDRacqEfZFuRTWmTUiASaoGAT5p",
  "key11": "2FbymrkieoWES5AAKrDNKdJ9fmjoR5Ly8BmKw3DM9SJaFXKXxBKLW4DGDeGdALcSeAsUofnHf6xNAbohumnfsCxp",
  "key12": "HWmdPZJU9N5v66briuSMJf9445JGdE6LC5MYre9ty2q4knwe3TxDCacZeBcjW8SV3z2NU2j2meXxKSGLg1CoML5",
  "key13": "3ej1xXYxxzBz5omqZiKn4dvntxFN3JaCh4R4yoS9Lmi4qoycxLA7pAQGkK5ozAGvCpRkCrg7BVusaLwLQTCcCEne",
  "key14": "4NnhoTDF4LKS5WMKazMnbHyWF5pCYBEgU19VCiuEt4gWF3FUZKXv5ehfmnxkh2SYzm4VsccFFj7i4spDhehqdj9R",
  "key15": "2BhMMJ2N9WNC7BcDCMi24jVMr5YxWxA2DLdnCXW6BZVE8Mh2HeW3tbw4eMxKGPUPF43C9mWCkkxBhnLaYb6UQHpF",
  "key16": "3ZJ95Y42NTe4MvNcbiobNoBoDPEi8vxt9sqJCnjuTi1k58ScGQoe41bRPRyfpivfiTafZpB7v5JpVGhMVquSu5FE",
  "key17": "5bt8BHUxdiJBuCSxq7CCcakRbbfTmvWToYCTdSNsHWfdGxqxbLdasV7ymH1bL5WsvGZsZf6VndnPBWXmcGsSyyWL",
  "key18": "3PsbhuxtB44bbNas8KXdorokgkaHNCLaFwaj3bP5JmRri5xNSB3DYdtjHVf2Gaz2P4gFyzmGfxbfKTHD95WPz4dh",
  "key19": "4FiV2jnbvDVkbNKv8qYRrNJWAod7pjxpqJJxAiuDvBmCupmshXtnW7mRdwiyBxMugmS2XikdutZtTkdhJgZnNMKC",
  "key20": "3ymgpB9e1n2qjCoufXyVgXFw1MdVGSFkuxwYp2bmWEjHJUr7jSVZn3hQioymevkjigYPcRDtEAY6mP1SMjnf8t5h",
  "key21": "qA48vAcyybf11xjd3uLKLjJpNWKwZSwGj5ibgUM96fpNic8phy1dV3rd1owv9pkP9HsUJuURX7zZA5Tbp8SBsfz",
  "key22": "ken2kknSEk2BEEpwmxNxxigZN75m7gmwdadGgwn153E7rcyZN5wzzMW1dvqw18rZxm47mMeD3rv5NTGxTAyBXLf",
  "key23": "2SnGyN7ACjhnSoak3SbKFbs5qTRRzKdispxr3YmjwzYLMwhDwrH2Kb2yB24NDm71pEMdv4ZGk2SrbikiiZRhfeyZ",
  "key24": "4dBNRkW292iXyQ8d8WR3jiius7dejSp1apJNd49YMKdvSpgtU2pCVHQxbeAYqJRQqw57yhggBS2t85vFDCZ67cLv",
  "key25": "3zdZoq482A5HWTMereA1a2X8ySseRANvDEDQAHpmcghvzaVdXyKCyz43ncS27JTdRsapQgNp4J4vZYtaYpLm4LsM",
  "key26": "4LTaL2Hy1BvygVRewsTEiuXhhvbngigbcz7mbZUqfdBYmohqrRHifLbwvdY6ebS51GzboNy7XeCcxWfWYtXrzEdz",
  "key27": "4xCE8WXzimFthbLFrcVSkuNxt2wMUMp425J4zqiB5kSUzbBqS3S2YJGJsjc7vRYmSj9fcXXjYGyPtcp5jDtZd4V4",
  "key28": "2JTCo4sYZyKjRb1mgrgDmNjAz77Uorimw5VKzyR6WaFxgHeyamv9X6ZJGM5BWsbvt2mwUrKQBpBqN3AqGaX5aoPc",
  "key29": "4hV7anjjffMs1U2s5WZa6eqFUV7tTChJey1NxWtX7pGzkZ7H3RqrqosH8Jedu6utWddwDcF72aZ5v2PDs6mteHQF"
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
