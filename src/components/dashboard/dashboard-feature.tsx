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
    "4FUMgimGkQ7NWXb1krMnPupVcgQNCtmK6PErCoab6GabbNFshRjEGBdwpkirNGpZTW2uTdvSibsbuyfisJWJCNxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54QzMMXBGuof4c3UaDjdbm1hrUNetPiJYmHmS6qdJK8aUXGQX8SDBZvqHxyrgFcGr7YGyh63FyQ5esvM9Pwoxif7",
  "key1": "5vTzpvkAdLiU4PPRHCXasxgFqvDBayvKF54jFCoMCCSLsnLXq9MjAvrZKf1Uy58ENWR1K2ZpCDjZp4zhNBexsjVY",
  "key2": "4yHvU5rkzDNbpQUxoyz2KsY2yasqd2ix3WN2bR4ktrY6DewSjEPFWRSkwWxGi2hj4ABqur8vQGKkdXthywdKKvEJ",
  "key3": "4GmCThUDCoypFE4QcfpkoypebdYoU5nCawKQvrq939qpZe9aX5pKsGkFrMogwoW5fXqsxKW2PveHSG9LoYLTtKDm",
  "key4": "2wCgjt2cQAPffkV58SffDQ5VtcqMXDdYqfWRczhPY8Dk73MJt2KZA8ayo6URXpRPWKCU2wBweapPfWuexmKVvRcQ",
  "key5": "2mk8DG4NJfygvdFa8KpbZMHguUTW9DyfdJSHDQMcX9Qn2i2D6bg4ZayEGoteyHXRGA1JDiZwE2L8Y7uQMnvjSog3",
  "key6": "3Yokcxd6P86A3J7dPVCcVDPYtBQxesiGxz1rVQrZy7zAM3KwUYtG3BXK3YU8b43zzogCQNG3wADH6H8PQ5HpDLkq",
  "key7": "SJsnMXrhA2YEHkbQLg8QQez9FuiqzWkrvkJGLtH467pPAvadGrC3fFvPvvCJthY9yuiWTHXVPCS7wDbDq81gbQN",
  "key8": "5P2HJkyGmGSiqet2iAADAArdysJxRcRZmJRqSZtoxvHsq9YFSayecxZy8rBnKSKFjxHtpBeEmgWEb7RquV4TMfNi",
  "key9": "2QpU4vbhP95iL7ReqPJdCNSu3fJ3MJ1jqszzPcmF4btSEYGpAACe5ffsFzFxh4NbzLPVEhXUftvPZksyJj45fEAX",
  "key10": "nxUoAt6Mk6RQEUxRJQsPM5SUYmEvnzEjkoGdBJenNAgEdnTspmxBv6fwJWh75MojfcSxyTUfTbRLrS3PhwtybGi",
  "key11": "29arimgvEgNzFebsh9ELFpGw4JLsKAkrJgQAeVzyWpb8ceMAzm44hmPTXT8ZHwK6dNTk5XEXty2UfjmFHkeDq9tf",
  "key12": "5GHF9mmn87m5FDD4t4GbsdbDykwtNy27H3fcyhVfBLNxsWEjewq7nbKWYM8fcSm74TivtSwZJJd9o99Wqvb9DN4B",
  "key13": "5eezt3MUn4hE48HaChJThSUBDAA8FzLUNLXqgNmFKFhHHznptLrJMGJWGcdxUmc4qcfgEQAogPtX29RD9H2S4dxh",
  "key14": "5GrqTcnfRZuX7e9bysABYfkPBiYR4YNjeBKstsLfFQWgiDrGyhZPHrMaiMSnyWHWA2KWYEgnzyg8ZsrjAbt4VCBr",
  "key15": "5XBAjYt1FNXRoP7j7mbsJ5JsfiJ2Qm4XhqedqbVCvv3giTekZUbjRaivJpcSBmdifKt4DGhc4zki6RxkiH3eFSJt",
  "key16": "5ifoLc8y1m6hRJLXgCefrLPAAmMBAybGqjJ25SigDqT26KuYD8Rk9fS47hBvxaDtPSATQMFEss3SGDFsmmWR6hGF",
  "key17": "5rB2YpTGwJJPPX9A3Q4t2U7kLvSZwWw7G7bbQ9C2Dg9zmGss4kbtmWsYbqJrYhM9RYqA42rDzZ9EZH7buL4QTLDH",
  "key18": "3Qi3nTq9qZLC5ZYSFvRpuxbVBfPbus7MXEQiRjprQgAJhvZiejG9mRhytiDBTUKf6pGJMipshFwN9usxyF262Q9p",
  "key19": "2n2KUtr8k5CsJ3YVdaLe5EaobwZCkDy376vGK1YRygJXEpJKuRzzrk7NPdEs5jenYAkgddF4U7eS3Ji1LNFdwaxU",
  "key20": "4hBMaHZqU3MQnm57DRiMaTKHtV2XhEZqtnGr95kLzYgTas8yqyRGB4CB2rW321wuu5ZX3SHM9W24m3Mi5XKPcYK3",
  "key21": "3ga9tnMchjsdJQ5WNtW79stEdfpuGTYcTenGkRd4ZrnUApuNFGa3kmDK5hT4dcXZDR2TZGh2rZso9QJYPCg9fAcW",
  "key22": "tbm8CKQxszjjt8r8v79MJNH1uAT26ykWFLCaZHk3xV5iE4dBL594rfgA34rxwFwaThnSshiLkUkYwgBpRopzmxE",
  "key23": "5p3siLyfCoPHAVEGhEt1sicpE5fMuYhnat3xT6xW7Y4NVF9JdwrK75HcXLToEUBVKFUCPwPGw7JRBhq821ykgnVR",
  "key24": "5eNRMMRJKJ78qb8paeS69wJMTy3EVzsJJDUotbGotr712c1zALJBo4z69dTrkQd3kyWZ1ixzMfMJ6WpzsyXJyuB6",
  "key25": "2eVEYve4NapLPjxxusoYfPwxGLcqr5srLSUsmAoCqeP6WCiosFdB5gHPAz2UWLf37n3wJLcMFLUSsffAN2S3J6P4",
  "key26": "CEtQaiXp6MRfs2gLijFjmqr6iXRty3xww9XxvxwNPYuAovuYNrYjGQcdv1q7YeJUEPjjpgdGMGrDMN2pn2eR7n7",
  "key27": "KBpYgxW8FS974H77Ep9Sm6wv48pXbmH18tDXucVCoDj5EWKha88j9EeoDnYaigorfQzZPuTGuwSWRH71QgZWzXg",
  "key28": "4CbZKLymyDkTwhQCDL3VMwd7jasdN8aMb4g6QLovuVrN2YeMsow6ykCwZL9fk8y9hpBoi765ARKrNGJbYbPcVts6",
  "key29": "8pq7o9jKJVS764JqjRnp7w8A2o7oAod2BT4G9ZYN5A7eYkZYehhX7BauyHHzvCsRBXpcLzQR9xHKgLmcY7cRBr3",
  "key30": "5EQAWMLq47G4zP54JJbGDcz1u1G2vcfbYmqbPZ2qtj2hzTU2XzGUMkxQ8Tjja4W1veYeejwD5FdsmUckYYF1ytCE",
  "key31": "2wLkJyjprmSiWW3fDtgePsQZtBUGjynJqJaEBtetkRBUoMXnWNiGxYR7QnJfFoh4zhwnsjdGDGUsM7ihsSDKSHs5",
  "key32": "47cNMbMUJEtUUpKXyejupNZeVZqZiwF7KJMQ3VpGygc97wD3x2HnojRAe1uMy8GMfvLgQ3mQfTzo14DivutDHBNJ",
  "key33": "2Dtsr5q4CT4RaU4zA161L6tHpGR1h37Co18oLCK9BaJSMVQa7oMymcoF48wqdAGgrY9m2dU4xsb4ZCmMaZh1efAD",
  "key34": "3S46FXQa5sRNfLJ327n3Vvenq3kk9zFAaUpJoH1iNTpPyALcrJg6HVvoJZwwGAsUxvZmYfMPPraq1ep9Ur4P1q69",
  "key35": "45Yn8ZHkQjvfHDYJqoc8CwKjKE1piP7mM9zGUMTtTW9wHYaWV6zY8v4aGoNmjhX8gxwvgzKS7qwdmoK8i4jjDyFK",
  "key36": "41xdcckbcWcaVuT1aSYP4UfD6ewsDA65Ehi7gt3u5M9pwrG7r3iksM9ZbSVCEBohSWNH9bwoE2uM4qyYc9hFccgV",
  "key37": "3wyEE3xTBhZL9Cu4qi6cS25smUcD2yTiWfdzwgozonnrVYPyaMgK9kwW8rZbHWFKD3datKduGYKvua8ZnGZ3u8i7",
  "key38": "314SPbFof7mvG9b34Xs2qp5uZfVnZfiQwRu68hGeHERmNV4mUJJruiZuVuDDbdg23L3hgLP4kfwoMoGbuudoVvcq",
  "key39": "3mDThU2c6CcLHSPtz6EacHuExfsX6oRntu9noWX6RkGvytQRsMp4RLWkj2cAhXx3ZhNKaLrgjB4TcvEGo7JAkNuG"
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
