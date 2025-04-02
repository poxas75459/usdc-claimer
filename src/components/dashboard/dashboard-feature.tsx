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
    "3XyaxRUbdSZfpFsasyXf8tdDkdYh44eWd5U3CjehY8wDsvyPSVCf238VCuKM6Uyv8KqaKkBk5CPipNqRRXQrqcbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hdzmQqAbrTtXstoBtviq4aiq5RTAhWzp6qz3xVbh527ZaQro57S35FhSoaf7kSus583u4Q9eqS6BfF5kEtkGhsn",
  "key1": "4a8dK1N8vKyr9PRvdxGhnA6wZVno3AVMo7VRtjoWDL6UqNmcEuxgbKiC35EWgHXVkcj8dNnWW65pjsvVk4KPDLLE",
  "key2": "2VA5x2jsK81Zb23js4w12xHbGsndWJQptqWbufAmkpP6pLYJ711kyUDQkJxrMq98JKzcrUaHVnjHUCZZJYii8GTV",
  "key3": "3aiVBmxtNQo1YVq8vzYDePyJnPuL8Ci7Wj9fRfk5kJj8BZYCEitMVMZ7xfdMjV9gMUDgYLQf7iS9rJMLgs1pH8i9",
  "key4": "8HGFAsCdtQECD31C68fBK4UFP6xyCf8RWpZzvTXNf5khaLGTt32QQb9yCY1bp4tvrKy528PPPGu3P6RUeJHCVj8",
  "key5": "59srndsjeWihqUHpwgUcmgCMqgpiE4vUNYwHy9NfSCtiMJM9canTq4kWrD681YRbTo5eoK3SXrMp4qonymTt92eR",
  "key6": "2totVqqM7ubEHtLy8tXPfBc4mSpzgP2m9wDioPtDm6uC4xqMWQeonn8SdzmjyJpbsPVc4rSnwVrrwNStyJYBCKbE",
  "key7": "DsToV2YxmZDhZDhZM3pdAKUX7AYdcWcQayHeXVxJ5mAJhQsJEDnqaPgDoekMabV7agHJSMTgwCA3Fys1EH22NBE",
  "key8": "5tQTKSRrzry6ULVbj3rTg1m8Ljx97wyKsCZUH7hW9SGwzXUkMJLfLvVWsJDhnPG3sk5iGLmYDMLzKQuV3dbERPDk",
  "key9": "WQVmVX5YFWZPK8TNbepeDHkgE13aSRLYGTc6pwTbps8EQetevotm2ArPqXD58nizhrmT7D4FTgty1UUXpoP1Qgz",
  "key10": "4cNMvvSFLk2cjgUstVk61Hae95B9kUWVWrc89TJGmbfVX6enJHT7S1qQxRXpR99EwHYw7hG3Uz8ErQgZGhHmGKHu",
  "key11": "3NG1ZTm6sQxxehw7FFQFe7x9jbbwLAyMXdwZn3xYNE6s8naM14QoTNnotuEgwM4kbcKS6yJvzVESwjSRrLYWFSUf",
  "key12": "55WpHdQ6W5sTJvFp3Xe8HtajJDd1BAsgPtQZBf5rgHbiiU1x1qWobALfRvPcRosrQyrHE5QhWk3KJdWnECL1pahP",
  "key13": "4kkeSuWg8SNX1ExEhgyMWEh7ZeFDYg5ocaRQnrsHEFJKvHeAL4WjLWCHgFsuFH9JSN3ch2FrZNeQ9C7e8Hz3D7pB",
  "key14": "VjFpuDFX3NRYias3MYH1idS1DAYuqrneAqZSGP4vxppxgTFESPk7FN4EWccCwo34WYhmuUAujdkmXdy3zZpz4Sa",
  "key15": "4BaqSQMH7DSTBadZzoaYCSBmvD5BD7yFrd8n9T2ATcXm4FPPoQ4d3cY7KYScZ9c3CEM8gBXaM76PwcrprUDisK8b",
  "key16": "45DcAUFrwyWbK4BRYqMj9VD96WE5kViM2CWpiSndCsPUJHobAwamSpvVBzv3rGRGNTMM5JddkduVdeBf9oPWy81E",
  "key17": "2XpbuqqYznBUPdL1c1ZAnoTSVtDG7MHFSiZXNFLd6UFUzNPx4yXsSbB8LWgGJ4P1X5AJXYe7p346BKiXMXQqRC6s",
  "key18": "2cxbx7ECagn4KVjpYfGq9fs6yK5NRqqkuAsGzhBe3933Lm8SgdrHq4o5Ed5MB7QCMSu6GRuMh79KraAmacoU6Wuq",
  "key19": "3jhXcDmsRZnH47zF2E7F96BkVtBNVfvPWPqWALmFD5eFJFwvcvWJyaXZs8Aq3zHUb6uiV1L5HH2iCURGtR1Nyp7n",
  "key20": "21KvmyaFJ9PY2wg3gkCJgQV7Mzd9qFiiFjQHSoVp2TMvqSEAMEZHQpnFN3vSFWd4Sh5wGrovgcTVFytw69hCiZYm",
  "key21": "3VHd5jCT7uNXD4DPXcpdZJsNJeeWe25vdJP84pwyPEEM2LDgXpJUGcsbH8CRwmzRqujNyk2qGoXk3ADFnV4koF2Y",
  "key22": "2tvbUca52DJPHaY86AoNpXdekzrXagiKHDeCMXqbHiNSReYe4uetiSs3WkV5nSYDzKz7zBzt7tuhgW3DF3kHQDdT",
  "key23": "3vBRtgV2irBeyHqLnFMEUhoMCsGSrW1j58KPxJ5NC3dm7EBCBNJQLXcwuX5iEyAhrGTJNPe85Hh8qLA4mqs5Q3Dj",
  "key24": "ZzR4ZMffciTqdmPSPgnjSBpFyoEuX3srfYJrhrye1z1LvkHzLqJxYfg5D2RwrqRjuumWfBjkDY913A6rcy6Ym8w",
  "key25": "4s8kexfgxpyU9EEgjn5YfPNzV3jtiBkgVVPLiLgx1m9Bxu9Bx1LGsBEsWfL89thHK33QQ1LxG7cxzX6n8LthTNsZ",
  "key26": "GnRmehMyJZ3VjFcM9ZKjE8ERY6da9RsFrWrh9UCNFAi73YyGwgpfEhwoof26MGDfG3yvZzt1Jxw8atyUVPqvoqo",
  "key27": "5u4j4DqJKkEyrpAHTPkEyRQx6rSPTFSZ8f2ZwXysDss1z5bEi9wspw6r4GTaPpF4ASKsKKJm9jiiEw16oZszEGNF",
  "key28": "3Kn3KpCpfbpfrNFfdWKGGgrvRw46LNz6quLsgc7xBDzWeaxhbmFkk85cFzgYrYxeDGpduqfhVJLm6bgM1t1AdtSG",
  "key29": "4EG6ChQSqB56EwUXRB62b5JAH7b1ik3K2XDKma1tEiw8iNGUodVEzHrDCxujbFyARrjGvQL1EhT5zANxidWHTjR9",
  "key30": "35NguzJfZrjDabBr3aHqSEA7uJs71samsgY2WvDpjvzjgnDp6qiXdtDEhcKnKvjiDXvFmQFivcdwYLfN3KZhjUHz",
  "key31": "oJScCVyCwruJKXMzqHXRdNXxbw6B3xA6UTR6f6g6XQhNd6Vy64AFz34XGSD4PzpGF5jwjVkcK7hU6okDGqg3nEz"
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
