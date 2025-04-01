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
    "4cSq2HXHnAr1zrtAZZiMd7NfPjs19eaSP1sMkJFRBBRsiCuLzP1Bzg5GfD4Gr2cWrjsGvsTsxDKFrmoWaW8brsS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dYPQGx9E5YcNMP9xutQHL8unzWRyYWSmYgKS5NJpiNReQLAUAjR2JMZBZYn6xpKYV6S62GmPACegU311jpH8V9K",
  "key1": "61hpuG4a8o6sRLEL8zSsjznzzGnjjUh3EFjBe8CuCmQa4yQGmScqh845oqzfJZdQ38UmHt7SSLtWoxScMCf79Htr",
  "key2": "kFZVDBgX9CUnXQB3baMw4eAJdiirqj8feDNDkGSMvXBPzdnJEcY2o5oee9D46Mk8MkGTgNfLFQo7L1jNeMbFAq2",
  "key3": "5m4RTCvcoKGWF2VoBxBqADz4KHzbcgeHYCshhYvxUhSJGr8oMf6pTVMSKS1S9LvsCmkgoW2AGxiAPJe2gFxETonW",
  "key4": "59y2ZpxiX82jMk6TF149oupphaqbbqaFy5rtRiJAz4Ph46G176eb3o5Fy5XGRCQ6DRe1x648rtW12tiDVQykE2N1",
  "key5": "2MdrY71WRC2JCTBxrqyLNrrZY4oVGm5PiPMuEojwXd5PM3v5R5BgXSr65SSsxQtxtxbqRqnLJKw4ma66Gnw4iWcq",
  "key6": "33ErZKqeNcnMTCTwg8DsmHBEwcPxHwfNHYmUokEbbBhZeGfFEr351maAvpCuvgMV19wqgucVSVt7So9hy2tfGNfP",
  "key7": "33172N8vnBp7UDCcmG38KsFMZcKrxouv4dnKkKVtHqWsuonDJMTkvHWfdKxTrhgUV7ubJ2AY39U2uiXEYZa4akh3",
  "key8": "TFiqwhCZQ6mGJmaoYYbPrGhn1DG1tecsPExz9bvt3WsB7KCJ8iYsk38tRvG9wK5BuejAxc2me3ixinF387hfNsV",
  "key9": "2toDruhv2ovpxiE57eAS4DYMcBLkivwPG9zLn8EitmXydrU6Vd5ceXtfHvQmxbhn87hLxHb1dJuWnWao5auqgSzW",
  "key10": "5RcxGDhEDsSJesFqweAnUEa5MGto4rx1faJjgM7LysbkrfhCk6hvDguLtX8vj2ufYrUNzCaDCq6bqdUVfkQpf1qd",
  "key11": "4xdkq5uAVbjfTrwRp48BffGG1io16114JcUrurGVorHjQM6NtwQHqb9VqkvauwFvEaKFTDGCzoYE7KaXm6887qWd",
  "key12": "ADMa9Mgu16h3zURMT7FXTkbR8wKKTjzeZocmoqg2SJifYpwc3Xx5jYbXWmWUdgTnpSzGvpLA5tnAqDcbpizFnQA",
  "key13": "5oB9NkBi5CR1n4dnyuvWSDYZvEp16BwRLz7AsQgjCd1Xu2f6N7ZeqWTKzGb1vCFfqzeFHsnd7LfqgAQGybeWNr5i",
  "key14": "2YPpagPWuaF3H2jQzpDLrQsPAiSjwrzt26qCvtzcnb9NwMuMt6qZvMtnswhpiot2kFeDWMFc1Qm3ScmGsN2TYgbA",
  "key15": "Sqog1yT2AcFYQ6zMbvXRLtxRfNtoG1FWvVs26J2YcCUj9oyTWVpMTMXCWKg2G1hkT8gXPhchW13ywMEJSjhkY1e",
  "key16": "2tPyEnpt581zZshf7qKSMLhmWrTAQPTWRj7K3dH4tRqNY497P8PVCNPhr51h1XtmHjTYpnxAcjo2PRU1KNedspeW",
  "key17": "i5wp415PHizyRLJFN8GTFsaymfadQDjwwGfjgUvQFWmKQmiQTECmQYapAimTeEqHikKY4LMviEp2PQw6jmuhFJG",
  "key18": "txdX9yAheCnRMJFap4tbRye8y3vkczzuKkmhYQvoX5ZoQnxCeJkdgoATQyirdy1LZ3fNZgCzSmgpFgXik7DSwZr",
  "key19": "UqSP4BHeTX7oBU3cCPeHVhTkPXSkUzshXkZBZvNCiKRJ8Ew61BJnn9hCGxpJfTLAwpU7M1ipiiLFDuLT3QmHXKf",
  "key20": "5DEt9j6YLBkXMjTYSXdvw3ewnCfFVwRkUZwFsQCNdQAR9MEMjeNSLc8XdU8EiMNNC6MYbg31rkALfzDCpBx4SHsY",
  "key21": "87ScmEG8j8hSNbLwyJASPkHK5jnwbVViiZxqpBYMgyP7UxP7FCKyqEtq3reCPvW92YDPWWgv1Ec5zwrM4aNKxWS",
  "key22": "RsvsDag3XrzsgD6YqQ5His1Auwj2TjmJfjsne7GkF2ApygXzN7EBKrE9AjxNcDBx9EKp3RXPPGQP7sNH37TpwaK",
  "key23": "54Xjyt71438CejHvr72vJw49SmNqSZaYpsDwh6SVHRfxoxLQJAgy5HELk5Wk2pLX3J1oAAkAbmcu4UfvcNNESs9i",
  "key24": "brZ8PDud5AUYkbaJvnZxcJ4QvtnpvJH89uKV3y3mgD8qpRDwEePV5uZZXmuwxmfdu3Q6WxnuDcmhvjEJ86WCtA8",
  "key25": "54RzP36CCBtTm5sT2pFjHSybpb4UQgYCgPXBBrYC8wAk2zaYrSmWpLZpJ5pEx3Xv5P7kQjrdf2KZ8hhEJxkGXUTP",
  "key26": "2bXvyoacqiHsTisvg1HpBvWRsV3MAC1GfVux8SiVYEYpmrDhpyjPteupUbkGJu65mETU3WRZwkAELUT2KmfLPH2M",
  "key27": "4ZUkXE65AywPaLQyZkCECzxBGZgZuyFLNgm7rjDSKZDr12s946LoL37xf2DrA3Rsa1LvUDc2y7x6ByCHfjCWgYKv",
  "key28": "5xGtzbkoh9UKa9vrNB4HGut12TREHp317BrzSiuQv9eitHRPrqV9Xmx1AqknHXq6uM1xLe7N1MW48KQ7XvmkpX8v",
  "key29": "4rvt18oxjnoEsVPb6gvVnuWzCkFaNu64GChnMHmW6QCXDD4zZsravrXGCTB7QEuR6pT9GqTVkbUuLQNL3hDNXTDR"
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
