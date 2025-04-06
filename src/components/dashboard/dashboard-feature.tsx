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
    "2rf4dWCeqwyjvfBvQsrMNpxVnFk1tziPzzoRWRhAH1QDYJSzWgumvFtbVqu9SJW4qgTpCDNLyyPSAkx2mrGtEAWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9QaerShXnSr4LGkeZpBfYidA4HUoGueuC4THiEmdzUH5nVitJQRDfEzUGEzsFKWnD3rGAx4BREDK5KFVDRizfU",
  "key1": "5YZPeDAE1jnXxxaHBtAwwHp1DB3H5JqP7djWyDYjjDaRFrZDcwpUMhxdbvZibjN67adomt9AMxyr4saA51LsGXFs",
  "key2": "2yugV9nLHWU64v2AvidXVzYme7JNQq4acn31FaxrqBcHVe4BCvmPkkc8qVGbVR5QN9WCE2aiv1SosqGRkPDkvPxm",
  "key3": "4KJAQ6YKdDDkZYYJjxakNcGqU8GU2ryRYEmCAcXG6v6mZoviDQRdeUMQNEsuj1vaxsr4kB3QetfGxRutBAiBh9GM",
  "key4": "2Fqmoeo6XWPB4qqVdQfYfQX8mc2S4ePWwnkzaVXLAWoP5dkTbr9VVW5kArCqGL54fWUVg8eZacn2ficAUzfR8Dsf",
  "key5": "36ZGMfC8fP85Xrh4RDsJMU8fjcGS4gZyfZ77VhXfgKkiDZJUmACHQd1J1ScuyUbvbrshb7TzmDxupMEpjxSayxE",
  "key6": "22BWbB21me8TzBVc6JkoPUDAHnfWbUbp7QuCjExrJPe5f4f29EGJ3W5tetmjpKnstNP8t1mbLtkAtE12YzNZguAc",
  "key7": "3nRUSfLB4hf7Pid7vmtrmbfiPoACEx7frNQ1XRt4SeTRr8a9LtRc25Pb1Suh9z82nQgte3y75RBzZmhjSh74mouJ",
  "key8": "2TERg5VRJwzgDbSfKbL5C7agK467WWBvkSGvpabWogzxx1rhaw4rXNLhbrrmodLSSsnoVYigZacLffckG8jPBz8Y",
  "key9": "53QzvNT3c3peBF1vE9nRBcLPvgJ5rCJY8r6jLEUjoCWGjg3f7Jjzubha7QW8K7EAzcRpdoPdC6MgHjT1Uf8M5H9K",
  "key10": "2VbCbyQuMY8WHg68VLHYQuejkqHADhY6i2PfRhezBaHq2HkoiH1cBwiSZA84HXrCjDz4PmqtcaYDai1Kib5DF83F",
  "key11": "CvmxpiFytj58Yf29h37sjSnD243uN7vsiBtVRuuXHkq5yj7YFrW7q1S3t8cuX6gWEPnwsQ9mmGcKAQKAM9W4idC",
  "key12": "ZixyfBjMAUSigzxxswxXKrYxYc996pHFP9Cu7s1zQWQiwyc2wyPXSUXhEzFnXFU5yXDJSx6paVdFAbokyDd32BX",
  "key13": "4ZyxvFVgkLpDZHiHAj9L54zNvLMx3MCGvnGpSnbwroLKZuBAsunHvSoo1a89wSBS1mcaRfzMzGbY5BBehqctPCFw",
  "key14": "HQxjKmjD4m3DCxgRwk19fq1h3YZcuCNBd8T6TjGTkZUeU5CoTxd325e8MkgrFhbiStN7sJH5HDQqHcvL1Er5nRP",
  "key15": "WTUP1fRQXq4vtsDfjqkrSpmz5A2q7bMK4jAhWRGrd2KaTeJPXekoQM4GvuCFTAeMQqoLUUM9Z3Kr3krfsJkVbJp",
  "key16": "4b2DLYZPG8SmNWn6NcSu9p4RwkWACdPpq6bXKAj29hebd6Fj9idAhtwpeCSy5x2XCNLpHtTTHJVJC3s3FsriUqYV",
  "key17": "4D8gdmY6w359moSVx8sPK9rHMzxDAL3jLrJc2n7qmjupF1zYi2Qqii7JBCqstyRAc7gw76VsQNqg96zC7yHe1dBB",
  "key18": "4AGX7So3ajo1TSTNxdi34yP2VWZeX8FzQehQomu7g1nNXM3emy4Vn1vpwjxXvvm9Fp9z7z8v92QtRBcZGePLf3f9",
  "key19": "5MBTnd9y6k281vFnsbaeBFvhD6EAz9BUwBtsGzEm6CAQKT6LwhetaFviufopbHRdE1Yx15AYqvHchsWnGuBm4exs",
  "key20": "2rqi4F7tu7tPBEWwqpK7drubiFG628V6EMY579WUu13jFdVWsBUBFhotgHxTYxoRwBDwsogy9tVYLw2opwG3xJ2V",
  "key21": "2F92vEFwcRDwmp4e7GW1j5XQJYDLufN7pzJjvTFkmyaqmyLPstDtmGDhfhiQkTduHAGTLDdgt1xi5EzBavbKo8gT",
  "key22": "4imv93iexW2e5f1VmgjSu1fCUxKjfQ9GqEH8TC7wU9MxhY15AHdFDGeBnTmsehvhVjgZdimeQCph15aydzFVmCA8",
  "key23": "K6NrcBYYT9MXzsGf9B96oqPUjbjA538iKEzNe5ch3QGz5h5sEbg1MteU8mU8fZqb3NdkH6Xmub18tjYicWSWxbB",
  "key24": "5DLHPhszs9SRric9QWSw2yijtVuWct4kBGSRuAs2PXFTLLbhm6NKVUdkLmthNG1S1D6ktjhJuYu93pkD6Gk7XWFD",
  "key25": "4YiJjyDtouRNWg6evWK9vX8oZVQvdpZfKZzgYUPrUxL2Gv7hLh8X7t2et1auorcZz516gYZQQg6fMkxE2JDnpRFn",
  "key26": "24t2bwze92oUCHj1sgcrgMAtEJuzizUQ4ZGTHDp7dHthZ9zE6GnA6NSLpR5pY3CukJ1igYsJLSZnDiVqMCLvuzwt",
  "key27": "3TMSPKKvpjhWsmhRKUowA3oKnr2fGpQXYP1C6h6uoeBtQfFcuqcXMWMTxQtPMprG3LmXBjMrih9dRVoaTqKMTnab",
  "key28": "pNUBjBCQqjAQo76ufBmACRdaqQpjUMAEmf86HvskEK288JyKFr8K1cKFWB1RbJHwH4cdd3FjAcHLuCcjysJnzut"
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
