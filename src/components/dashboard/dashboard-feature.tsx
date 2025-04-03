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
    "3yQSRoasxVU4FEbfzMRm3BSqK92k3Ti9mcQZMpFDUYwcnB3fHXwjryhwjQxTnRLSagJ2XnAnpk6SwcSbw9ZvCQpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fTuGSfKsp7wyMEPhrUoFLEvb3tEcARsCQtKCYJvmXKVxLqL3bVk4NpFqgG5mZbDEbk4o1oaUA75Uonpjm564L61",
  "key1": "3RuNwnKmCgEvrMtASaosD6541rYme3mSEVN5bKthghbsuSgkdu9SGE5pvvLevrYFLyJFoBdCy9hrKAWDMgELk6Qx",
  "key2": "gMP5yiVTDriDCPXsjT3EyAXd6fZjWjvNhHBb8RiSLzujsX7B3qq8rJCLFAYuJnHApqv6AsDfM9thBBawWehmvrQ",
  "key3": "4SoMY3DWbCXsrtFF8W2czPfFF8CYwmEwbTZ7BxMUqv8Vhp7G1Mo2zRf4BGJzU3PoUgDL6ujrQibd3FAm6bWuoqHF",
  "key4": "3nPei1FVgQcUNs75xkfiBcBhs7UQmfyGfMJYNxSE64pcDyKJScPZtJMMnzak2Ynmhmmuuhpoh38NBEN7hgX8b5rY",
  "key5": "5MQp41CEtriT5obknhpmnKj1u2Mce2d1rtEShw16W7UUszZnyxbv4sKDbPavcM4qR78jqKpB261UinXfvZR7vdX2",
  "key6": "4RxmS42Yb2yw1uaTS5McxVWLdZKGBD6HfkmL6qNVqfmqXeFPvHDm79mHvNqR9Ai8JiwT7oFuMo4jkJzwVoCKdgAz",
  "key7": "495evkVJEEABr2h6uKtm5vA2WPABiq2NpWYU8e2FZmtmVLV4k2K3HNhV7Ri5onHu2Rw1wSLyiWRhJwDJ8B5mv224",
  "key8": "5prQGGdMP4F72brDJtUQkHkGLpu5PKDMBD73ecAjW2ELzUsWzJBboYWs2WeRZtHswZ4utqGhsQwttzgFdWfDexeo",
  "key9": "2qUpapPdoJSe68CGroFn9Es9erwrUoJsjJmkURGPuze9eNgAdQv1HJ5q12MBDhyCEMGpGC1GYCCsTAEFCgkqp1yZ",
  "key10": "3rdLd8DovTBtaskAsgdC4GPDFzhqc8V9BPrZgT8d8gykox3jVAY2ZmgNXpQMSq5BzjsmokvsnrK8S5CJWwg5M1AM",
  "key11": "dkcznt891CkPggDQE6RAG3AipXszRHAx4RaDKYNR4VHfkg9urVrUtexTLT2jpAbFNwLo9JxF3Rw5PrvhDJ5bHfA",
  "key12": "22g5nmJ6FQbvno3fbFT8fa4btUhbyMYX7QLRauEdUsrYfJG1x24v53s2DbTPWt3Zw8mV1FwWaPDUt4xwNnmCmPef",
  "key13": "647eythgssV3B6BQvtenE6rYPK3kTx3yzZHLFCQCQQ3i7DESu6mqaVNY3VVqVY5UkKPDLs5CX9CLdQBF9hv9sxW5",
  "key14": "2cFY4D1vxuC6tyGCFxWY8E8e4zTqZTxGNeqNRoq4VAc6Qv3yt7sxcd8GEZhJc6JU95gobt6zeDSQ3NdqspjCRm5c",
  "key15": "46cMjfop6AzXPX2Sd1ahHtSTa56Sn8J3TdG2v4GdTa1WKVSejkNmoND6nM3BKgbmG79ovtwRVzpuCkNXNny69FNQ",
  "key16": "5MGSQ4xspBMrPxoZLTgrGv1zq7KeDhfkJTxzKjWKKLyXtyVvHWHA2rpkovtZj9W4Dr7PkYYG87BpR5Cje72z64BH",
  "key17": "5wN3yY84hor3siNdhEKXMu9jK5Q52qJvo9BLdzvrwgikCNiWtD5ccfxuJLQk8Ed8P7aXFsQHi1D2GASKeeLkbAzx",
  "key18": "2s5mhDEnsB9GwuSHxKyoEMdz4QFPBj1zDZUFsPXAqeKDtb1WBe8s3JcPcDsVfa8ajG8484xNioJjczLBXTc9owrV",
  "key19": "GV46masLmGhmAbe94FbqzK7D3V8Hz354Fi7gQujZTt2wa52XFus7sUzmwGXq6VPCq1JVibn67szHNmeYc32zNTT",
  "key20": "45wWA4kqRc2Fvco2PjHAS4vAwgJqUQgR7zTvQc2JLPqjLwLDgeDuVLFpMGEzn7TjYFfjaNJa3pRkptuEB9aFd3f1",
  "key21": "4c4Pyxu17cJj289i1j7yoN4GacYcmAfrGfmTiWvw1rSx3RDGhUP7wsHWj7qwGEQzJrk2QhNQGu8en2DRpwgarXCf",
  "key22": "5UhygeaEbo4CN2FkGNMZmeV5BizixmgBeo4Vev2rQKAZwHrSxKJYDoiyUuiEpD9w4KePZuuEotXqe3sAyu2CgNrd",
  "key23": "2imt9KtX8CbDjPH87LUUBZjGKtEp5GpcXYn8Vixqjh1viuYzkjYDrYCuTXs2qGs7KgGEtgoRPr5ppgu95AV3kGyL",
  "key24": "5wBmgVF3DQu9Uj4b3chikNzQ1jfensriEm4QkwYBa9jTZ4XV3QYBmKb2yhYMgDHXg58NbM8QSTKUdvhaT1Cme5Z2",
  "key25": "3ScMpFcn36TYdBtce4Ty3mbLuvL4JhMvcgLDyDxqQH6MuquzhCoAfKywKKWYp8hUMw5VYv3TzVznzqxe8eKUeTgp",
  "key26": "5hxaz77UL5UBXpzqQEyrebab9ZLpAqSM38CxZK3fSBRtKwM2pyUjcKzNkUB3H6RUdM2sJ36pjy5vtYaS3Xfdt3MF",
  "key27": "5zydVtt3QFs2q48oFhvACGyaaGBpEBP2JdF3TfPe43Abhk3mT61YnRzt2gqqmH1XSHgpCUHmQdXCWhKoLUtmuWyM",
  "key28": "4GXpvfb3u9bxXcxEBSfN1SiSCyLhySEV1rjH6hb9EcyfCX7GRdDEfnnWANQquReMYh3us1RVoM2K6bzg7bBRRXiT",
  "key29": "2krSuDC3adLZmoXzHcNgnFVJZebcLQPNiUcU7mCMHusjLJ8Prh3AYgaj9c4aDPC9rUSD9sUf5TcNkkXa4yi6xVbx",
  "key30": "BwwcupaverfMD5uGNYrfce8Mr4fQmA4FPTCTiVb1Ky5gCTwe5yHqkyTTcAHekHVSzqjpu9rQfN2mvjrQ9BkFXgA",
  "key31": "2WVEhQEKKwfXmgq9BjqMXseSR2KJ6R19B6XcDPY7nz6Qeu8WVj4ymUQBiwpXmwuYyQXJ5rip1BsNTin578cUYdXE"
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
