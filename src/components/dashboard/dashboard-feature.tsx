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
    "5cS5EejiDgJHyn38rrZvEhQXEBQL9i4EWLsPsFrcr9ba2fQPUTVF9Ms7n6wFwggoYUedJRsJZRqp1Po1zpZYpc73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "391XbSUkdGdY67ZeusR4WcCmUxQCTRTnQsPBGMQERnwHgfxcwcpLGa2tA3v6BQJF7C51RD88XpY3A1cFJw6k8WNE",
  "key1": "41R7BAXbL1sCmNbJDMzuemco5uLsnf3Averfuna78C6oPux7NfKdBfsA47DmeKJ9Qiz8hhRWTvUeE3gTNwLZSKiM",
  "key2": "2xS6LsKPNnYuWFuUqBrsciWAJfsp415SC87EBBsSW2jEmDkdqXCX7Q336baMqYSjauVUKjZ8D9dkbNMSxP1RJN59",
  "key3": "2Q3HcrF9GzW57JE1ecJ6HPZRSueVMxwGZevP4iPVEdu9xRta1omQahn6h2C6adKmpFL2rfj1YbcmBNVJQsrUtvo",
  "key4": "yQZdEn6iUgXZmEkReqqXZfeagT93anbbcGLiES77KuvhfWossnSvm4oTn57jD1t82uEaNhCkV5MV4XjdhAmZSGF",
  "key5": "eQUbVdhAaMD1fXbAjNfNXPPnMJo6Tg1QcHfMyWNRDusECzmkB5Wheey9AXNdEJ5aPM2DvoDx7AkNVCDQ8vop4qF",
  "key6": "6puqfMRNNVAWXN6Jvzpo7CSq14bKUpyys4oJTw9ZHxqyjgr5S5PbXZA5ZinxwhPCswCeANCYbCiBGsoW1H77sm4",
  "key7": "VXWqorNTkftCv3DtoniLtUi8LhshQLeY8nfd4D2d28v6qg9tVKKiy5QxkRTXGrYTn9N8TxFMTGcEgZypFbYxZw2",
  "key8": "393QsAMxriotJTLEPHVHhXL6bqMsWSuNAq82CLr1zWTC2frJNdvzn6m6fJTGFsdiziV9VjvLVHTVkiTD3gTEVpC1",
  "key9": "3FPicKfyoXaW4hBKwPFovCYhUNHfYDsFKx35yoxmQ5RvEqqMtcU2hCRx3gHYTf8ESZVmgeDkxHMA2TaDuqA5v4QC",
  "key10": "2MBBqKZsr1RZ47KUCcnTWNpRzzQ84qxrgux7skHTNVHVxe9E3ZHDUBW3Xo9U9z8X4Re3w8ZYjT6NUdh66QBmN66J",
  "key11": "5b5NuBaezubS4avYAbVNSb6FxAxSipPJwzPyuirSdMZWHRXM7JKrSZXA831z9z8kRCGz6rUmVXFSgWVurToed8vE",
  "key12": "4zCcQSxTxDmpdG98tS9sbVLNB89wC94NWEo7vd3pe9EcNBYkBjgedCcWgztJibiSk7XiBUK7w9oecvhCWWPTA9fs",
  "key13": "3Ns9sogQTmXeE7eW4scDZBWahiawByE4qKyJJqxceym351otVQ8vVaZxiF14Yw9MpjUBbjwyivWUvD1KqhXkq251",
  "key14": "3w7yVrd6e2sQzunAZoo4n92tKwWoWF4tsbWDGxvWUP5Ss7L4tF7dtgJZZpmoEpMW8QohtAyZUwHsX2wbC7NogWNy",
  "key15": "BpZPNAWiRi97Mi85pvsPtrmvmevt6YNo2Bjq679ChzApPMApPxJhHtP1zx6xKjnjKpv43vYuS5ujqQ2BRDQWrnR",
  "key16": "4iQiWVcdu6b1W4uQSLesmkSp4eryAXWLxASdDPJwVgAbHPeBccuFyh446nMMSsAwiEtdppCgNgnpRvvSjDD1NrTA",
  "key17": "2DB6yAXwhUVUeDuQ8rCaTvYzFg1z7p9jQEVBSdb3jpEqmvrwdADtuRR8WDW6P3eB2eGHkUtWX5YfqCkdicvEdgjT",
  "key18": "BoRTiaHBkELu4AKoDisZ15WVGa1NnfRH91BhSsgU5esdaTNcysDaFEDcPqtcz2sXC4FZbd5FVZiQNirUYbBaMEE",
  "key19": "4GQLVhYvx3dJmbvGchH2tBtC15Vntkzn9NNzpWEMrBNaU3VdwbQXwoGF2wmvu9yKrFHkFTyocdTHB7SRzf3EK2RW",
  "key20": "2Scz1dm3ifhefgNcjursYLF9siB5yQmm7WtCWLYTXckZuj2d3gSVDA7Zq7X9CLdb7rHnU2ENsUGyQxcbBgEJe1gy",
  "key21": "4pSg6GQQ582y77VYYKz9QpoJSR6kCE6uZQMVNjJA1JXHb8N4P4i9MgDKZEa7KTprhGpR9yG4tMhzZaMWpATwTKbZ",
  "key22": "5z7H8YYRaZMgpUv8iV1oXFWpZPVXCZ6gWSSLeM9JYdJMQgkRjVH5RsH5FYg2CQjnqe8Q7gsGKQUVGaGSZ6t1kq5j",
  "key23": "4udtjtyBsX7xDPV8hohfaxocaRTvHzhhBTGUEex14ATYnHXE8oQux5xoWTwUrNJvWteJkhwZzkYzSnfBHE9Xw2jx",
  "key24": "5u1xv6RxXuZHAPq7QUDhvmmB67Htfc1uaeawnPT7fRG5vnB4bmvqqEZ5rjSPDS6G9Nvi74Da6b8QmP12iv8PEtw4",
  "key25": "2DwUUwWak1ShAuTypHJzy2XeGTFELJeyam1M5BNrd15VYc1aKtMzSLTccZrvnDK5VvtTwCL5UymKz2M8HM4KSBUP",
  "key26": "Q721VMfhA4Ao56kdPGAvVbsQY3EGygyX5ZPQSS3RWsa1WAzfGurUr717fJxQaVtffCcWzVDYq9grbVdEbdxpCAG",
  "key27": "By1Mcm4xQNuApmsTNXXb33ugRukAAuSxT2393ba8QgKUHZ5Hsb42gUai2orLJbSbtzvAWEY8qsyXHmSrRkMi56F",
  "key28": "5HoajxPtTcbzSX8NTMLhCiSagCUNY3xd5H2qfXPcwmV5qMTnZhErXxDX68RLkR56qoFJ6qoGJfTyvoaqcNK8ZfZB",
  "key29": "2JA6NnMNXrnZoSHCdag25Ro31y4asPqZm6TTBA5eSN7tB8fYs3BGdVKFzMGhDW8P8YWK2k1JNmSwEQEMBCHpv8Wa",
  "key30": "5kctGnb5aG1daGt6J6onMaMz8gtYjiK5AyfBnMaMZ31zZf8notk9AX551htQEviDBTaU39etNKPcCuDpJQrwzEBi",
  "key31": "2RfFpcgXbLYLagcudkdvxzkTekS16JcmSVk7EWVoSaa45ktPvbJgdAtUzzhFzCidhb7fFBK2ctGUsXarkh6qmDqe",
  "key32": "3zkq1wibqGrrbFqx8UXSmtuuZ1Mi1W6jUy3gC7BLFzwPb7GvP7vrfPQRvar52cz1kdBwAZySr71t4Q3vCDojnzXd"
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
