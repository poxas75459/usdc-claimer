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
    "4eySYwVGobvF2pMo5QFZAXWwPQoCym5jpL9uSBkfyecpy8zdB73F9zdTBHaqDihohPmRQPYtFrjc2xtRyYY3Lom7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o6A1pzf53jHrihijQnYPDHy8e4njU347w8VdkLa4KB6UaXcpxMSEjqZHKXDHX33ydwDB2ipX39jj8zkmAre6Fxn",
  "key1": "2p6QP3yk821cGtCWRRLnhmxuZ3oAYbK7bYuFuP1FyMnwygGYq1Kbz2mkQmNz4qCbhoCQLbkKokRUhWXrsFqDmW4U",
  "key2": "5n4rxFEJCsas7Fi9G5eRAH8CyGpodMGjav9yeG4KrxTdwTXb1KL4SjCsdtHz9JKNVxPatEjekj5dgSRLjES6D7e6",
  "key3": "2GDiVuDRNSzj9tNA82Q6yYGNEqPm9DrhmZ2jMyV22aB5NaPUfKQMMYYyJFyw7SSjz6bXZndjJkzpS7e1qpD8kvXv",
  "key4": "53nReTGnXr16V3zdVMEthTD4RaHQ4G9r6h1zbnFkS9PwBLMz7AT22qc1GZMkeQtHCxVNMgqisM7r8ttaSxpqnJfc",
  "key5": "3PfiB19xh53nwryGLAVcDX2HMskwGXK9kcZUC2psK68oSkWa3dgCWaFxqZDUf6VjD6wWLkEbMAPW2XEEnXwUM8j4",
  "key6": "31zvpBppPDxT1iYBFkuVzhqCJMZtvT5voNK1NSairnW6LbhKvPyB1Y5UjdiKvzGjh13AqZgQUUaJFEHqmnNQSGgd",
  "key7": "5vg3DnWDusePu5ynWBhtSB1NavYwF1RTSCvmS3QzNKwHgbW7meScHifWV37W3j95dLtWub5pyW7uGa6gePxqoU7Z",
  "key8": "59Hta8HatvPqTM2AUWFAfUC2Tusr87ohX2WWukP3Z93pMQZwwoPdPx1mJaYKDpRQJK7C8E8aDpkGwttNYgqt671f",
  "key9": "4vaVszWfKQZVrHDjWH6XgKE5RJG1aBPVGTqfy2WTod3EagZStbGjomap9rNm7XeZTD8GoJmzKjg7gWfZsV43FsTy",
  "key10": "46x8a2xRhGQV8epTq8uEzJc1wsggAnaiwgmwJLUTAiExLH9VrJbno9UAq1KQippf2QQw2HZk6ZigKvYViPotA1hU",
  "key11": "2pot5XnDAB996cybsjKZdMwdKyg6ATX2dsQV7jCUU3KGrpGFYNsiMoLYimfbkqt7Z6pVkysmD1Epmv2taCm2heC2",
  "key12": "5unTZW2nV6h8BFQGwqeT5juZDtCYdhCt3DhngS1i88WLhh4pRffaKhdZ1PH9xScVi24sPYJFLAQy2K3yNLUoXDA5",
  "key13": "6TFjrVZbWaVFwAv3exa17aDghWFMvmjeUSZMojWyEWmomwrFQVoubyXCQS1baf3qHSUwYReDQdx9Qxbdwqd1G9t",
  "key14": "4rQvL8ym1a4Ym4JVYVTHdX4HEmexCP2ZjJDskV1ggRLTRhnNe9rhqwozJXMUsHEY5Ay9xLaqrEv1hEqRcE577WZR",
  "key15": "2gFfM3CRz1w26o7FLgJK4wzaPktXCQyjVSdTaHdsHuA23yPTKRep6Xik65VuTNXnKYbbaidj7Txn7g5M62ojQC5M",
  "key16": "2mSrwafUKUYvqqsSi9WBiyY2ppKKjsZ5jtuv9FNJ2JLzExsh5uFpBaYhZY6SURWDMVbvkTAZ1Tz1E41kgXivyNRX",
  "key17": "4Ze7cS8n9mP4xyP26BErakDRrbudHLUModXWevodpXUggX6YBT7sv7qSKyUY9uZEPcKv2Z5QDegJqvbUSqCstQax",
  "key18": "4b7WRX5dnjz9hb3XFKPBcEmtf91m6g2Fq4ZdJ8eKtrw1dzFRgkkSx2oQBkfima3SuxCFtXU9YGgkHE2QeUV6jZDN",
  "key19": "4HaDsmc6ECq2gSr5e8uhvSgkAKqLcqCBsRK1YvACS3Cx4yL2AdAr4S2Ccu5wspntCeQhLHQs79GWmgZzNCauLaeH",
  "key20": "5puvRsnV3z2swZPnwji1qWnsCimdx8vjUfLjvsE7RpSJXBjuqxiXtCCpUARC5pC6YaA3byd6xfH4EWRevaveN4SA",
  "key21": "UR5ryUkA6GVsKX6ZBsb31LVA2rp546hdacfuUsaKtn68WJCLaJtNKjbHYC8zT1csfRxyGYmXyeXaUyc2a9wERMi",
  "key22": "5SKzxoF8JEaDVHYnAC7bk7VnKMeP9wm8M2xFAkmN9uLTpemRB2snw3zC145TVJ4dk4iQ2RCGec8MWR1GuKxtgpf1",
  "key23": "3QYH8nNhrpPCSqhZ1LMCwWtxAhb9NM9RpjgwaHxxNxZxndL4NiPsHHEdnnuZuR7wA5uWM6JVg9E1NuaXfGJCJ4dT",
  "key24": "2Ao9rCqyzwi8cbqk6tbgf8Pyf87cDtQeJUA4CPyrdgYhDxEzsa2wys841yaMW3jXqk6gSWfP72ijv6svT8n8D4f8",
  "key25": "3D2iU1zLrLeWw1oRyj3VCEtvbRn8Gj64FA8L4XH4mWcgt9DRWrp67ezTjXu6omjP7gFpGPwNWmWkspotZFM5L8kQ",
  "key26": "WAAXHavUP8gdRqhg5MMufytwPc7U11KDRbyRSG7oghPzADcMRednZXziTgDMQqgngCRpM6B51V6U1SzDt3iqEPK",
  "key27": "4oiiV6YCwH2P6jFu63ehiEucqJQyeMnJ7eEAFPtci9BgjSw2ukKaw7mzbbMt6tMM8hzZ2mc4qTP6CuummbrK4BG9",
  "key28": "2J4jNk753oYVGadVyf5czNf9VxYAKKu1L3weJ7vw2HFEfeWLUYUt6QLfaL4kX6JqXNJvCeBbgX4iudiuAEWo5n8W",
  "key29": "YwbfZWdjZQuiGpbdigTzv8LbgLrKrh9MSEBqV9EjjHRHSfhSevNus9dYPbTrjLFHNQNQfofzyPRgpncMdjzFTqC",
  "key30": "4KP9qYBwrPmbKNE1hZJSjHHenU4Y7Jj9UsyD2R3VJF8vMGrN5oTCKXKd4K5G8RgcgH9DMQ1Yq5HWiEyYeG3Lvvwy",
  "key31": "2Gcas9ekcXyRVCgGk2ECvynnVGoCWZqUvb4dQSC2W5G3U2CKEgxCvgzgZCcoMbQ7Ccx7crdU9HUCs5xYnew79iuy",
  "key32": "mVNbendSvBLcgK9jqxioxHhdiSM1sswHJsUbvJhLRonoSfYmLKHwVrUs9idjSEvWcmJJdAhgvKwSHZ9zNhZ8rgk",
  "key33": "4AM4P8pA8B8bVXPsy7yYvfnHcaxa7WBX2Q6KGjeBWcGfDM72Ggu8bM454LPzpQ6rurJs9VBb9TPFjghbGY1bJo8Q",
  "key34": "2tgP7o5KikTPzuMJURjpMJQWGgzsvKtU3ifAH174QjX3T2G7EFbJrypa8H9d1kS5cWgui1AuyqSuxZUYHDLQ5nmv",
  "key35": "235Q113NTL7xR4gJyvmKHhshDN2hURBfPcRytxWLjZuFSq9EVCfDRLVE6RSxCrLgcdq4P14mpgpBHe2ri3PssD4e",
  "key36": "Uspng1LAnXHQbNuC5p1mXQyY5dCDxuQ5hjMThPMEjJzQfPUYm3XgjdvmFMJMbFvWFQpRbp7QkG4DcWBFeHLTkim",
  "key37": "5M8NrTZ9ujV2Yi9LAM1TmNRtdy762StvoTKvoidCHaKpgX6YennvJ91wQFR12V6xiGixFntB9TqoDkJLb8FixQjN",
  "key38": "2kicGnXcRL2dZCQ4hK9DpXCQnYaNuXHDWzZZUZNiBYQR6J7VVpP6Feph6dhqzJTkd7zDXcNB1rCLu2jazCso6ZBi",
  "key39": "5BgZXztx6EhJePDK4h3HmjFfDrDessk3b6Y8mH81YYg6zkR1ByPVopWmtS4P5SmBX66VUL5L92TCRgGvmz2DF39n",
  "key40": "Y4v95ehJF7rKPWZzfpgkNxa4P444wEmexkcExH7mgEn2RShYsCBMbK95g8WhHg2j3ycBQxnKpg379d6sbZDRasF",
  "key41": "2Pj5Kfq4NJB3jYkvP5Xp6hy3RcFWfeQujfY8c51HUekxjCrxcQH9sdzoQ1go7fpJun6Vw51sFvLzBdi8PdUypKDZ",
  "key42": "2yucy1o6ERw73CiNxVQPJc5ANwRapA52QX7qt4rN1Mp9AqBosuyyJmZLqvgesDS2B9RXFCtfU5yPtJec89XpMX33",
  "key43": "2Jz8HvPqh7esFMM5tQsDngthhRN4a8Y6nQY94d749u2K9JaZRdXbp6Zj78SZ8tXQMMyKm55egy6RNCDyAJaLjeYY",
  "key44": "2PJzfGnDPG9bwxMXUJBsNq2NFbhtRsV8nsbqPzpu9mQoceC6xX2YzAaxFEFdthzhs8jnS1JUMrLxLsfJkQ2V6W2M",
  "key45": "2XABn6ziM8CT8Z5Lz5xgrqir63RktzkMWyDTt6QdDpaZghXmEZ9xMTnogUNXpxpDbE3txPAzwYp8ADJ4KTmwXouJ",
  "key46": "2dgtXDU7JzXTt9WmdqMmqhZHdWdLVu9tfoR1MJ7WqJwddcRXbYiE2bQxe31wKSxzgyvRd3aKuwgLovzZKSMoZYfQ"
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
