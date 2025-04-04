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
    "462C9JmVF31oJDGwjnrpi6QGwxncJiph7cyiG5QdVLTKLTzZ599ZegJsu3C5rPJb9EB9uE9awxuRtDd1CWDWESmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oTXe6forRMTTCpfywweCSCTi9AwGLtNz1GwtH4y7mEv8vPiddWhjS35eu2G4PTcpPoCe7mA2TKKhin5VRNx3wGH",
  "key1": "2tkB5xo2jPHrvfAoDHzkeTJpzJy8qDXUHmmv3YjECsb8n6oCvLCm7NwSo3cbYyL438rhhY47EPA93A2iCcd1PfK9",
  "key2": "5ML6CkAYZVxJLp7BmbmUmYBZ8xiCyRza1Fp272fEgv1ywZg4Agu3YEDmG3Yc38XG9D154RXwUXfCeUtRma5FPDVC",
  "key3": "2yWSG6DRwAieR2PPwhTNVR2AyagcF3UxPEcdqSsGvPA5cxrmoMjTbVeUSfaJxh7RtPLj5cZLv1rNjL3xkjCA4LWo",
  "key4": "7A3izAtGb5NPEedvjDxkxwLcR3sEjdFQauXSTGP7LUZPgj57ufouK6ghDXx5sZRdcWMQPfDt11ULwq4CehzzoE5",
  "key5": "5PCZgeSGeCEPeN4iMswVzTaHkZG8ZKFmXPY8xP7xePSfSJXJW6dTWjiYTGcssVV4taFfx5y517HFh8AfHkb1wJrz",
  "key6": "Cy6SxBP4smTU4ZCxocukhjS2V8HvbkiutAhQmqECQsBH7N33pqUKs4zPPQSmGbrMLt3i7ahBwWjVtSJJdmkFdke",
  "key7": "2T7eGYR2YjDUxwtUorAH932Dy4CKBRzVMpxMeEbjvXUXiD8mgc1acA4ibWVJ7qqZETST1Yb9c2K3mLbVbrVXsFVr",
  "key8": "2jJuyBGkP8tvfN6EqU88qpyjyv8uX2sYrh22SxLnDnUnQPMZ4yipb651QcPRAj8pAWCQf5awmdvhpJLRtaqzkEED",
  "key9": "5zeadzEMJaCqauzyWmmnkN44u93v8S3qYN7P2h33QhLgAHtFJjLwiifxC2nt3MBSc86gaaUzmRpCqyqdeji88a3X",
  "key10": "2FRtQcBq6HLMCu7din3fgCefY3mvojAKAsaaU9BkWXuc85xfW6QbdUgADDKGy5fiAbhUSSvXzQRNp6ofN2nJ29zj",
  "key11": "5wE8Wgu6dcj4LV1X8cx6xKE6LvZa9CeWJQAucKScoXDHqpQCQUtwLfMndai8AF9LY2HbaCvyKUEzZJPJAuVJ1mx8",
  "key12": "a7MD2jjVUVxqpUp5VY3FqtCWiJP5mD8DG1vEoDFhhvtSGbDLJBXfhJ8MKViuQnJUAq2wunxDXFR7qUAnT5fNZLb",
  "key13": "cj2tPn9vuTo12PjBKzLdenhdP4cBgJbyEQtoEu1fL1TLt1maHezJNBZe9UpsGHiW4hu5wXge3dibu6mDZU9GLSq",
  "key14": "aBwKTjYVZyAVBa1fhs17W8MifUP6vaHJh6JZqNFTpWdEDEz8FPKLvRNNHmH5P17CCqdzpkLs9A5e49RYJd3hEoi",
  "key15": "3QKreKbxe2Y8tbKCRMv9LcRGdDABJP49sJC1SyoSacsncxc7bdWwjbfR2EMkVLc1ceHiygshXxdKNC5661fdUfVi",
  "key16": "JZ7N4WfwNWDGnfbGexCdYf1KC2gt9xzwXHvxmQVApdtgGRpidLaHEFoMid3wC3ZxbgbN87n6M86WLhvXG1N3i7t",
  "key17": "P89gBFyfoG2kQifWdWLXD6r15QDwMZRW9nkEpDTT4yvQmzWbYLsLXNQ6FC4YKQXh93eGyXqD8BuRmQH4Ycv5GzS",
  "key18": "3NC5pX5NyXeNWhPUg1s2gphHFtBNL2ZABbj7AMTMsNDWZqYc7dehHJvTDYycV4n5qeDgpU4am6PknjZoA2tFPMSo",
  "key19": "56pxdtgdL3Pps8LXzBuUYcZWMH9wjTmrSCXKteQKsM56zcPgC9cEUyiHkpurvM6srsi1RauXaLMuTUoaMj84DzuQ",
  "key20": "54N8835pDynBJw6JJpthcP5pivgUszDUYTJtc6GxvTJm72FmzcTyQnDxcpXzDYqn99yxEiJrW89W68MiEaKcL9nh",
  "key21": "58b39wQG3EtNV3uw96xJNUickh4CU2r4SG7jo4hTc8Viyghhy6AAqo3a5z6NnMNaYPBDv3QaV9j3APgq2nFEhTZL",
  "key22": "5j9BTWvBrdWh3FcP4NeGtCDQAPWvmmkGq87VqJXQQqciavVvyMUCKy28DWWWkLXeEL87ffbKYRau8XrbV8ntQMX8",
  "key23": "35z7F2uRixVX6NVZUpbVAAsyi5wuuTRyXqvhEuivG7kyUHKML6S3PCeAJz7d15R79JCVqfagY1ELTH457waXaudD",
  "key24": "3oPLKGPrPUBdVWb7gpyzFy3wY9nGMmuyTY7caCxAZHfNo2XibSH8qQBGef1QywLiL4oG2NBgjHJY4TNXoxNrkSqF",
  "key25": "65pExhfMNDxTLFycEMM96WTsNwyJ5YAczB6T3BB2t8LkfdbMGn4ii9JmwSkoyTnYVvPxweCUMLCFbdrFfwBMqK4x"
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
