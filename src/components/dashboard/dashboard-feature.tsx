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
    "2BpAaSMeaUocGVXH87GvMkWmQc38t6Gv39NsRivucM7zpy8pMUCXbqWKzC5fWiiedVvcR3xbGY6j6KosfktN4cbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nVsHgsADn2N7b8YeTRELX8NfSAvjB7btM6G3LEu8W1cQLCtU1NPKZn4yBjjP9KucJhEccPnMkTqS4MM8q7TbYYZ",
  "key1": "4Yexa1QcNgEgC6mwUH6mV8qdjYFPytP4uapugxA3F4UhhAeBqqJf6TEUfhdYWFYyykygypqBCJvshLD7SVmAJSe2",
  "key2": "2xmVUmw76BstMak7q1Zks3uTZ4kc8u1CqRFdjCvEY4snVaWP3YujFoQf51zg81kTrRS2ARbrhTDLsgqAq3L3LNe5",
  "key3": "XR12X4ihJMxRAFahahQpvvjQd11pxCKYkJxr9cB1erRgzirGtXGNfHVpr7Wv4RFUvpgFoEWQ1SyjcQr4E5n1tTQ",
  "key4": "4oc4DM33UDcYqebRE1Bv4jxWB4XCQFgTeAMFpg6PATgsVXD93KpGQAkxMfqm6Tqoavh1xkJSheEtVCT3R1RDidP6",
  "key5": "5TXiUvKAPKeVfsyur1KLhyPSQPrz9xD9eNCP5VmhAxK1TLcvGMoYnMpyVdvByyCqLrde5uTe7apE46CUW5sn262R",
  "key6": "2HftuhcKV3GWBBGbs7utvznRC2GPxbbfizvoxdpH9r3e4QfziDqCodeKocrphdvJZsRyxoK8ETvPkCgdj7eSxsRW",
  "key7": "hXFGST14Sj3ayST7oFuUHyMjmVA9i9viqJtsYQA8CKis5uvQpuqvQMVaZaRFkJ6zHfKTAAnz4TzKR2uoKuXscrr",
  "key8": "3aJqXc6EREq2xZmt1tduAJxKjpcRJnHqKgKYfHSVAPfRN2WocKwAGEmRi5W5Wfew1XEApjJCatRHazXMyEtE1UE1",
  "key9": "5sJNei41WMX7Mmx2HQBmVfHNir3YJdqse2BHPAwpSWwEXLJp12v9YoMTmgqSuuDq8Ed1QVkjf457CruDx5SqG8SC",
  "key10": "2gSZhjstv6E5iwP63HnvRgdu6k9r3DG5PkEEc5dx9TgkpKc6u4BtCBybmnFDHquFS6MHChRzQXuzziWUZWkGUfjB",
  "key11": "6345ihHrNJfm76H5wAe5ptsCJ5TMRUCUaHR1tq5werDMiPaeBiEypMHxpPQggEosVPoP5Zr8ANJCMfMG4zvkmzuV",
  "key12": "dqvZ7ZBMJaDuQU153BgZmHChR4efkz3uv5w467CkJzx5G2LzAHbFcmHNmDj7szFKZerKBwG7TdfpvvKypSycU2r",
  "key13": "ukeKsoBs274t1u6hkMsCoRdoq3EVfnkdo1stn4Mr6yFKsryvTGRUBnixFtK42PXXzhiGQG7zLre7CoYBeF7qCbQ",
  "key14": "65gyb59yZKYk4mJhgUDHg1MG4mNi4XEiyV1TcNKJjxz5BF3FsWTZogF1zWmFLSAZS1WcziBeWNr4g5YAunFu6DoA",
  "key15": "5PZc2ovuLa54i6GU7e93aRpQKrWeFkmNC8iN4L3ZJ9sCDKCFm9aSSKttVd1DWiikjqD2SBAjYDx9wLUGip7YKD6g",
  "key16": "5TLyChxg8WnjdYyNTYTwmcxbbSMBH4Egu4Z9Gk18PJJPDMuZhGwoKisxMXefxe6f5irQ4eWY6Y46npkJUV4GdnRV",
  "key17": "5ba2nzq8UPgiNCCyziL5eKRaEm4PSDaRuptmWL36tegPAkp2XuyCm86MAo2pE2Srbz9u5qUkX7QYrkLkHUPzW7FN",
  "key18": "5NxoADNGjsC7FGvzwjnudMAu4quhqZ8R87T4tEcA28qEf1BR6wAGrJKf7YoQgS8cD8xUGxaaB9USyNucDKrDyJZ6",
  "key19": "ZW3BxhdkC8gLeQzFA7N6FYofypKnDaxRAL65VFfkb9UicNebs5FqF9CMy5BWLe5q44qgMSFLrJTtwjY6xr86ifk",
  "key20": "5xh58saScsABhcMQtt2hTcvhZUGMfjChnBbb3oXiCnizHBZe7PSgrtzQJ2X7tWpLRYdQbUgWM4uT9rJ8Q9cUKntb",
  "key21": "5oY6QuvWzPpHA4f8ryUcnL5CBzuVuMTFppBZFPhetLWUeaKUTMZPs6XEk9UB6JfG2ji5d6s3PNE3Dq87TuF6FNyh",
  "key22": "38TACRvVjxxehgzcZiCEHi6YJDuPw81xaqWLmGPA76zQj8DBLTu6dCwZiKLktYNu7XtQtU9V49iXGxUJd6D7uhKt",
  "key23": "2hFXZoWssbX4JgYuxb3Xypp51Rs38shtAEAHUvQvQU6FEkTGuEf5H8Cf9Fof1Na4kEmuWTQZJid2gZQtMPrSWWDD",
  "key24": "2FbnmYJEfUHV2Xa7Uabvz88Q8rMc9ayq9azmCvKcnQuBK2Rvu7kR7s1UbavLk7iqXFyywCL6CVPB3U7B3uk3ER72",
  "key25": "47rQpqg7BLuk33L8yp6yKPMYv7rDBkTa7iqfN4Xp58vLdpBJEQzvjUuM9oiDc8NYJt1WyStLtZ6fCci4gZwZrBmC",
  "key26": "5R1CRqntCWVD7t5nMXFHGHskbP6Sv2gqmqZJKTHSz52nZnXjnZySj1C7v4YBAmz93xKnR8QgpZNRVtAMd5DccyiB",
  "key27": "MpWFLvne1p8vYBj9hsSrHg1wNpx2smhgrM8JtvmpAwXNwEzq2X1URxeGPpovPBfsrrvTanJTW5e9dXQTGnqbTx1",
  "key28": "9eM7jrJrJ8yCSP2HtX5dxcKFYQLuihfpgMaVwBXvT5zgavDvnfR4LkFPKLsn4yJfWDNniRHDrxxBrDt8kjLVja3",
  "key29": "5LrbdL7ookrqVQdVKQzK574R1dc1zSQYxYkTwacxMDYyFamM8iSEg9ZUrk2KUGHQcxZwSvST7nCCaRr2tLCuk3gV",
  "key30": "3kkEffNBVQyU5zAQ2uJuiYKBsGoBC2XkYfadvme3efHSoY3VyAJppNtkrdTwdXiSKYtE26sTgbVGJyJvDuLgL4xN",
  "key31": "4rUveFMdak1rVHjZaX5vCZncMCaCsD74hoVWi4fiBKZvVarvoiCmHCLkL6TQQyJ6BWRqoRakW1HrGurNabz3S7WB",
  "key32": "2xvpXcPZdAvB2E2h3TajE5m3znkkqHgUNfmEENxyTSSmbnRvagkpUn8Ko8ej3ZgtbTr2fxTjWVmSoDXdtPmMkY4g",
  "key33": "5p4TTTcSw4VnQwqsypwxqgoHzkjnQA9vsyCh33Ev2oAA2CER1FPP1KdD5q9pngccwzSJBuLV3BN3Lnt6NJbA25UF",
  "key34": "5po2YpDqPBqGWapkfYzaHSu4r9gb6RG1kHSAoZwD5bUcTzFrTBfW5wqrqLEpgMHZCCfuFBsCref7RtoQF5Bbzfwo",
  "key35": "3PQeWnXCdLuQcHybJEzkGgGoecizsf8kb655cgpSb8ngTBMgoAjAnGgwQBY8zjkCraPJFXa2AB6tjgRaSQKeidMc",
  "key36": "4Cs5zgzc4pJhTGk4sP3CTUUm4EP9BP8De93vQASfWnHC5J6uf6k8cTaZbWnL1ZMp4L7YNxPkMmTfnrEVKjbiSvgu",
  "key37": "4gTptwN8KK46yApmgAQVMNGbACqzB9j5frCUA5SZq5Ni4EyKcYuxD95Nq9B6GwpoybspMwgEtVFQmeRNv7KRETyV",
  "key38": "2au3Lsdty5DfyFipq4D4kQUY6cBiJDqWqVVaoEW1NnZQpTP7328AzeZPdmckMAxdfnE6RfLKB3UBCra9dxEnKHQF",
  "key39": "36ogiqkfNL3AFFQwxpMcQdCVmGU87FmCVD6TqptuibwncwnAzsxECYGooS2FzyjjCaqvXLkVSLxfZq6h1iotBiLK"
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
