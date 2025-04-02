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
    "5TmxEX2e3tDoey4PeuhuvrGEigZk4BHtmG2TAzEu9Cp4gK49qeftp2y7ZJvFjV8rcpw9rf4HjGbRYErDuVHiMRxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8siuhvPcd5Gk4QmkKEUBE2PR67sGjW1b1C1Rx6L5cPcdpWrbxeq52U3XbWNfzgsBA8RMVbnPnpWvuAmNmsoL1X",
  "key1": "5VmzeWAS3dgDjYamToCaeZSbCgWE5HaQqPhqSsnVkYYtSc2447xJSz8ubpYsUEE4pMF6mBHsZ54LgYayizn6QEGJ",
  "key2": "51vYfRsYBSikdRR3SF7HrgGfJPvCDfkjs32g33YwEZ1DMzUbZSq43QmLQUzon9XXdV3VmKJYCz67HqPkdxuxKhy5",
  "key3": "5ZU2DDLzm4Em2ADARtmBDMd3nGikuHnZsxe3SbasdTqnkBfu1k6chjEAa6rLYJVraJauPsCRViCwyDqv1UqReDDG",
  "key4": "5Acm9LzgKeAsw6E4QCEoTEwuFwSbkdPvX6iei3TW25o55Hk52RagnuuztEKJHDA9oxNrGTmHAptfa8pqfBvVGjR6",
  "key5": "617MdeEoQySt2yZug9pw7ZMcNUBSMVPChk9PkWGK1CNkNgDDYpUEKGUW2G3kwTw6FyyeWx8GLhW7SkaPnNdGih3s",
  "key6": "3ti81VnD42qXQ2MqrwdDKKT9dfxSCjUX5amuM8GWigPjKzWiDHMJoLw4SEnsMieDS9jbFE5Ar2vx9URrbH3y86dw",
  "key7": "mHE618eGfo8AsB4Uhe7ZULF9FGL2vARzAebUbpxp6eoVA2bXp16jYgEFLCFQYH6d6zTKWpPc7PraxvP3PnoT6F4",
  "key8": "3p3QpvK7heDirYncrH6mAy2DRJrnsPnHNh7gHpFvbWS3mi1wZTYdNB9Kh5FijDV9kd3bZV1Xmbzpfaikzg8oYUvb",
  "key9": "53DYSAoJNzqBWKXYax9NH4qj8JyLhfmEaJW1FbftjHcKmECfnTknBzXyqoKPKD51Vyh3F8Mt5VVyiDgVwgP9fFC1",
  "key10": "PXwU3oytvWSSH17PyVCUpfLGVdnQRYXNHc2X39ZLKf4v7PrsxPGaWtBm6MwpkQFmT2xyavhF8v2k8oHd7oHCFJR",
  "key11": "ux4bFUwoeUCfpwwUydCZywYhoNWnhQojqBh1FaVQjYsS6MYu46fjbtPyYcUf4iMJuCwQ1uHG5KKwZ25t4heunYT",
  "key12": "3NHDkLnUxNSUbBPdqcjxUHfLYmqkU4ewG7MLLs6p4a3DzrPugXDWuVwgrd4uUEGm7aVHk5eu2vPnMUQ3rAtEAA1f",
  "key13": "2PCMAetCnc75UwrsSgtNvi5y2xuNVe45C4GuuJmbfHMWkoEcPAgfvXL7Q2CjtiAJPvMs2iB5ECbE87LwCLex5HUM",
  "key14": "3yyVzokMk2B5uYv5NwPgzCS6VJ8AqmY9dmMfNCNJSg412MyDZsvnoc9F3tVey2Cv32ByvHQGW3rEWQCk8bf9oG1S",
  "key15": "2D9zxx9PoWz31mKTe7prUDDjEX5AZ4nmrmadmqePhHmyHG6tFnxg3Nk11aqYJABDUTcQSrp7gB6CrfuQqukjyJo7",
  "key16": "Ri8e9pbhBMzt6QzJ33QcsFk9HE7YpKpQqfe8HqdtEj7rpiJTsSBNg8sbaVccmxoP4gwryXyZV6iuD2ypcnrdsTg",
  "key17": "5FWyMWBgs5GYg3eqMNv5stFCQ3FWzrCfPy6AEDkMFdJ4wJwBqDCZPv4TGRjTgS1dYssuVUR2ULPurGrjWDjHcjSC",
  "key18": "2jhP2Lvsh4TSnFMGKXxS2AoVFAgUBdBVxEfBWDx2c3pVxBZLkfnQ9yibhJgckpQrKhcMtTok7BzbQ4amfGJ4Evhn",
  "key19": "74yGVBW9EkFTNby74KPDg2pWsu53gyNiafcEUmS2Kvz7bd9RKGAcBi7K3MDnP4GzUEVi8ZUGUHVUsV5GaCutknh",
  "key20": "ZVoQE2Axv1Nhf2yn8u1HmWF7Saw7Qq2RjukgSEXkfkKzSjnhSdq5ewQg13TASoWjUF4mt5shxWPiN2LHxXfwxBK",
  "key21": "2kSYwtyQFqUd6wMpXjtFp21jBxcthCLZdy7fz1X4oFwXoAwksNKWHZCfuB5koDYPQgf1koEz6mJmZsjKUMnsaBpD",
  "key22": "4Z5AswtZruUUvvFbSbbzMiVnoxXrqhycNZRXVGBs1gxm6DBcU9RxuFnQDUUGvAaW9QEUeEu2ocz7L8NhPGfP8Mv2",
  "key23": "LceC7n9b1gwTrpmtvxAbrrgeQgdq617Ryawj7ZnVUifmFxySPzzFCYaLE3FwahuNnos32ou7KNiWDTgqwEFaXHi",
  "key24": "4KWrBWbRoDUeF5oQ7dxJVp9MuNePnRgApvBtgAVspoSKLpzekuD666WWzBZxLDzMVrECM6puofuehu8WYxuPcX9E",
  "key25": "4nMnoKhQuDWnmR7CWu9g6WhSuGiVKSyVdhxPfQ9LJE5Aro1JUevJFsLe2AMBPra2VxEUeptgQXoKTgSekAC21Si1"
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
