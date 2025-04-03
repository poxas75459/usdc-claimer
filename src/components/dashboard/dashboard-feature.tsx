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
    "3dax4hUqP2GWDt97eRFf8AfHfyYY7p1bkeFsKHHktn7cU3t3xYGnE6JetnSm6GFb27hf7XRcP6yYrrx7o9B9jZaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65kCuh2Eyr5ak5qdRjuTjzyYfQbPSMc9Yi1y5PrGDuZ6f1rC5wAFYjGCmkmmZuP9fdZWAgksCxcRBRLResZcDfoK",
  "key1": "2u9nDSroCK9qKVk3wrMezXBD8wxWkCajbVbpbuiEKFjah5ozoMD4JrRt99Q8GvzFaKR3RYWVQdwjUspmnAFvw5YQ",
  "key2": "4HoEXXuSBdiBHExmgrRowjsxDckiAqJWnKkVzgruRdgMoRHvGvd2YmXuRQUvTerUPRNqmEUBZ9spAdgDqBF757WX",
  "key3": "5KNrnrmPT1BAwsJFpkaKkbkSUhpWTZbkPSbM13Jd8S74y45PKX2FeLGRXPFx1tiDymCLdNWYAcgpnS91WMprkvFf",
  "key4": "5A97iH5sQriAQT1iNVMcDoimptzSTmq2MRLKekJnozCZY4bUQ729od8TXzW7GsqU49T4PA9DAVbKLnipJ8ANzbgM",
  "key5": "2oNVw1hJqPjn3N2M3zFeBKPATYHYYA8bZVPE4sMr9oApJiNa8MwW44skPWShYCa7q2QmEU94KuSYegLcABztCB76",
  "key6": "51TsdKw7cRQNpcGaJ53tprEFqpnRte4oc14X5XeLZoCZPsHWG3UWGbb3EHpXnaULp3zDERkHHU1qcjNyzMXAnitC",
  "key7": "btSYG8jnW9VD2hDfenubU3rbPZeAE61PKvtn9tCDs71hwWdFkww2qRVUMR3sYvHXcvRDu2ExBH5hshXyGodrVsE",
  "key8": "5PjkH56FiUVpgutrEK7PuyYJajbEebDLTTakHT2ufowAhrek1nTtKLBmsfnuSeTK2DU8SpA7gEPPwMGhvvfNGMiN",
  "key9": "h2HYvyKJn3BPPuN3LEhQyGw7VQRjKSGpeHfBwRFZQpJe9Aw6ZqLPPEZPpA9W894ophvDd34TjxFKcNCdnfnq4ib",
  "key10": "3YkqukAXpEgNnDFHxRqNXbi7DYMdiFzHUTB1zmYL7JAB1TCA2GTJr7wRD4QmwQxSHd2X7syjycHjfFFWGvTAigCt",
  "key11": "gWWBpfBr2gM1M2Pe56EQcj4tHjw2SG4m7fX6xDL9Apkd1bmG7HUZmfDtnkW5cmgHp95JdqMAxzwg9v6exSxmcgb",
  "key12": "5Coz3A4T3Htb1VhvJ4VAyEnWPmpWNrVuCADB5ZhPXNPo3j2rhRcjH1GuRpwBXCu4fQKWpsLXpqikgBXDe5V1EZmU",
  "key13": "65UbRkBSvBAqm3xeoJ1ffeoqCpR7SLWQVYsujfqNmCvJVWnvpNKSa49X5kDhdxz8fU16B65eLdfkXiw61YuSs68T",
  "key14": "4YuKieuog8qeySma3E7RjboVAcH8RHLewg1zfbcgbYWi7MCRJZZzHSfQsvJ6gbTAn23CQBdihxp3aWTfewhc79c",
  "key15": "2hC979G76czf84dKYNzLTS2nAQemzCFmAFxqTv9F2d4kvtzaY3aHbmgsM3ToNiu117PvfTQ1GpopfQAPRE4AopJ7",
  "key16": "79AvHCqkyqGFCmuk95o4ghuGKc416422KoAWxGWpurtNMYW7sfKRXPF2muwYF99CPcwTsAAMuU5Cj2EvNJLnVPt",
  "key17": "45eLbFE1p4NKZypdqsAcG9D3psE8rGzwnsgXGTKwjQWyjqSJLZGhjQ9ougT83Ham3fmB683YVmW4AaaHRhr2FiJW",
  "key18": "2Ri11kasb2h9oeGJ7E3hgoGeZJjyU9wvoYDUXCNmSc5dNjB1WUSYa7qSLoQpo7VYq3CVMNsRuX8HaMdUDyq3HbhP",
  "key19": "2DCmb38mXxRzef4b1HMeNnK7wYTNYRED6JwG8dWdPwjprUtm4TZqg1XNjA2iosvKMGTuTKCpVbiCy8LNTzgKRqAM",
  "key20": "2Hc6ViEKcYCNCX15fhVD5ZsrhnzvrV5ocgKsvZycZs2YcDPfLuSEXzwY9x3ukeZeUp4SqCiPgKfebA6KPTyy7vTp",
  "key21": "nvpRYb9TVxfkHgCMHgYehC3vVH4w1mAaWnt4gQFBpc8wDTaZC7nmxgckR5uGV2Byfss2dxvUkvCuCfUSAs2kgC9",
  "key22": "PkPbpdBaufsmUvQB31KzUsG5yDFWcP3a7rUuVDvW1M4cL7p2QbXRcvFEnsfRdFYt7vfPk4UjSd3fXaHwNN7susR",
  "key23": "5MNnsnqJBca62Df4YmeKb9ZxGhaHZvQnBmnXbe5kJWmsR2GR6tQ76qxX2Ve3QsJxN8GLTfvRoEsaJqFJ8aDh2WEu",
  "key24": "4CHASVWKVCctZFKF8LHGgY92MdqD3kRQ1R494YiTVR54eRMHH7z5eXaKmxfvqq5VaAYD2DLke97C3C3YHcG9H445",
  "key25": "5LpbcLzHA2RRAoFL8D99iLZWjKanMcqXtju1M6KGHs57o6oVFmFKgL6mrACJZWPFjHmt4rDMvXuam8mz2XatazBn",
  "key26": "2ji3JeL97doEejXg18RbD6C3fgjBB49yebRuEaDwZjJMzzC4Z9iRQmVaiiGCrorMTYZy7KmayEqb1xzYLTqKuGmP",
  "key27": "4sL7cwwNBidR3ggjnW8vhLvaV4rSxH1XRi2YS97G23CbbjSLqDnR66XC4WJQcUJmw3Lf1c34ALpjNbM7UEZTEs17",
  "key28": "2dn98VYK4c6QouAkWhrzs2j5wyTnBHEFBdLRfXr6f4wrV6ZoHJR2stLa5cVvfr2pL4r6g8R3QigEZnCo8sGXWT9P",
  "key29": "SdLXxvVnxknXw5KA6HEEdwMGFA4ALaykNMEGZhpn29mYk77HwwhuFiC7rexrtyDopg94LXV36JdqhWhcvCXi1Hb",
  "key30": "4HVJZCQMLA4pAr9xmScwpH8oayqoSTNJriwZjKaxXvW3z1VKzCU6uc249JstCU6XU3UoVGGgUYjdtDhCRVpxpdpW",
  "key31": "3pyuoMR5bP7WFKHT6DfDJBTtLacHuVzVEVMjXoJ2Q4819u8K2KCQUSUn1RyHwaumdTU9cDkkxXU9BVL9Scu5veQ7",
  "key32": "3kF2otQn6DhUCmzWaW7qcW597LJSqLP2qEUPADDnhSRHw2F8kybmbyQaAphczvxvULs7LKPY1pjakPMLbv7uU2YL",
  "key33": "6EAvY8QGimbkYusm72KMtyMb9nKXFjhX5AS53RF1NXYnM84E8HGxtA1r5RsuJjytvrua8S9DqNdR6CM3kJgAsTP",
  "key34": "3DjE2hK3nx58eFZvpcAq5adTS1DHHFgpEDiE9z8EUhruNCk6ypabMEUKDN8FGoqssd6B3YABvF8CRFQ2j9Mt8Q7a",
  "key35": "5Wu59KFoDdiifterEVxcdqNujRRSsHjsHh7N9oAKpLsspuXMbH2G6gBk7bvRZbjv9hbZHHfr1VmCw56pMZfr9e6T",
  "key36": "2PAyqyJjTsCJMgnEXNSjHgGfJQ9YTmrjGkTpTsHCFjS3NpVLA7hfu3XU7oYzH5vQ6pZhJ3QaiSNENthm224dyN3v",
  "key37": "4Q8vhAW28aGwvAAESjvEDzpRxh5mQHQHehnPAc41qNt9JtrF653NDYdfTs33uP5XNHZag8ny6ostZbZdnfJyCPBL",
  "key38": "5vgYN1MYcGPKk27F6pketg4spmRmg7684Z5VKpfttAagpc4v8tuG7H4kFG9HUkbYKaHT9uW458Tbt3hYhkyzao7Z",
  "key39": "2kkKKuqmU97xpbqyk4RF29Hx2sW1darrB8gdfdtpEUz7JKcmb4ZAhV1pVSzdK6KzuLWmRpRLMwUznL6gG3NWAPp7"
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
