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
    "buiAhHaf5gyBeAwP2hfaZTfSUpDKvYmjDUR4xaXbr2T9Z1rezN5hMoCvyv9Roj1g1Rq8oXHTvFaowo7vr1qaQKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38tEzQBT8LFwbsVWaTf2R4gjkaJWhqVgPff8KFQyHXS4tA6RvExWZbhFQuFCiMgaVMeZHNBX2Mc3961fUuiDUDm7",
  "key1": "MYb9RbQC8gHShHgq4G6i5rbGyCwCWX58ni94f1LUq2xj5Ex8Uz2NMvGFoLTLHvcQba6rc28sngv7GvD8js9iAix",
  "key2": "4zoUa1KqB3G3Yu3PnpGNmykvqwUPfyaXFffgGAsJzHDwWKVZGRM32pzhiV8WSNcN8XPgTV6xVTUa74guD6NoVWMs",
  "key3": "3iFZPTDBjfQfNJDzfXPYDR6hhmnNZCh6w3J3pz6ukxWuFCfZuFTpaaRktx4byeJhwzRsr43WwxsxGcJUhZxiUvTW",
  "key4": "4XWtucBFAp2XnoxJRFqNrocrpAHxQAbWNRF9F1ejwR9UJXBT4uDSpvz1vVFCETD7AgUT5UPHYQndmRc14opR2iew",
  "key5": "3RPLtVcArVCFxsJ4LnnYPV2iyMoWzecsaARNsm4XSyp9t54Y4DNYyRWizPo8z69uiHvvz4jgiMuh11EJst3CMMV3",
  "key6": "5H5VW6qrQiSyWKuBPToSHMS8R4xWsaGHMtUQogG2sq9oYpJy9y3q7rFzQoaLJVz7qwrkPDCXVnZzrPMwXEjxbX5j",
  "key7": "5sMjRH2L349mYrvxF5dzbHLMY2Uv9Mv3v8iSq2JY7qyaevZugqfGZXvKcH5nkW8hPLTKos5n33Hv9VHj26g5YGC6",
  "key8": "yoUToCWKww1JcCJMK1UDymj83HJeofbPkC1KHBMx4nb77WtmVBcStH4rdUZA15nmJaSKVQfGZhLEbP1DCt4EE1v",
  "key9": "61CUTZ9hsZ8JzQon61TbZahWmY2L7pfaqr3Y7L9g1F6JBbRbczQw9ED6BMFo8eKgxqCwxHKgy1Np78oNE47Pse5v",
  "key10": "3YZ1QXtbJqGo6rkhLECheTygHUXxk6zuporuTvAQmTrS7kMsK1bZ9rsuV8bM8Vc9PtWsBVXejHmrNrZspBo7wujE",
  "key11": "5KtBfdpQZ5Q3r61u3LcN2xXY55zo5LPp3jkxEpNq6Qtb3vegthyWKj6FXb23U4QnDx7SagMhCD35kb9TkaAH8qjh",
  "key12": "4eCHp8a3UdEyKkRjvR8NRVNzNYXCNGKZ1x6Db6zqDaNoE1675FvnfN6Kr8WTLFYcBpqRuKqQy92TuwCaTqYgreBD",
  "key13": "3cHJP7k66idt1KeYzxfpqehCfHrKQwVhmr8uVDZSzk88qv49cmecrCNADnBwm7ASB2rw8WnSwbXW4d7MLgVri12U",
  "key14": "DKG7LnH161v1LzKrUfTfcevtwQLgr7dApxKDf1qSEZ4UwEYPFvqdDMqt8EtAh5BdS7TchrTq96BpBxpsGgh4GsD",
  "key15": "WU7xTKe7PDPBbwWBocMJB17TUm3kQTNGDSLQQ8UxPgtprmQQoD9mep9AP94f711qy9pbKu9prebt2PbxHHsZ77i",
  "key16": "5QYLGDSNs5YJzJumhdXEPuUrR5uMoUUt1N9uBgewDVFM5fKYM9ARR9Bw7GNqVo7YdM2NpYjbpddoF4HoEYXqG2Cr",
  "key17": "2JXQ7Hxp1Ae31nnX28MbRhoaeFJyqernjM1g24aezgzgr9aFrsy52nCvcEgTsxGS9oYN9qaLex8Um6tgJgNppFf9",
  "key18": "7ocy1FbpwDR3CZcrGHgagAuGmu3hjMJBnWYWfS6VmxX9YL1jVsLbkEQYSge19ZxZgsHLivAnVksf2HbNL4uKR5X",
  "key19": "4uASHqMF22a1heSdg1Siy6hBQpMqaSL681UA7kUYhF3N8r3rFtazGjmBkuUgRF6AyXygz3Sk3dSwTtTsYQmwVbTS",
  "key20": "UPcvB5by4db8NghsBPGDugUhY5UWuPZntBN3DCAjd3HKX3W8oYZtL52iBiEpnWyh2hopqVE7N5GgyLdbNuor4Q7",
  "key21": "36BfZQvGbbmVq3APKZNErPUrsj4TxEn1HVPPuopf5zLfuRXkkTfDF3ef6P1CEbYtkp5zKvxomXvbqc4ehff1W5AH",
  "key22": "4RiXacuNKiP6NLeKt8MWkqmhi1GhdgnCDxNS1tByqAnkeQ4NvgdEa6LKThAgYRgk5M77DA2xHuUY3QuA2uxx7Yu4",
  "key23": "2kxjqW7WP6CXXtjCtLjkYFsnZWzsKdZVoDSkH5hQPTNjsHaH1ugXXG5q4aMmd8bKynyMWrMz6JsGLCzquJuWTxGG",
  "key24": "xyVqiNm6YeXreMGpQkfvhWW6NpQLJ8F6hvMka4JC6qkBduWHaaJBKPRXfKczJF57V9f37YyqNSFLGatExApucqP",
  "key25": "6BbrpMUmXX89vbFvRBNzAHuN936JVr9U2qJXqwfUXXtXxTwVcuwzT89U84SPtt3pjt4iZKT7HEZjzrFTdLkfXus",
  "key26": "igGUgsLQ9om4mkYuiLY6jZdzKibxB5UsPHEB2cFy4d4qTHQD6wyKLjMTVsfgXjMDP75xUiKQTM4EL6kVVHvFb18",
  "key27": "433TzgawnRuVyVTyB8vuYoNPmCb4ghxUeXyxXjJHf7xTGKmbFzu5et3Y2WFzbyahchsvpCJKHEsy94AZXWyR8yFT",
  "key28": "3MAbUZGhq3hWtdE64oJ1MDAyhD76dvbcgEprUrDQ4HJUDUidfAWTYRtS3hzXTPCUh2aohfnkbVyY5AC8pfF9DPmK",
  "key29": "5QDPAMWQDQ9bPviwgLq84zPpnQRWc9jN9JTTpy5aAkD5naPomq1EC47dEeJohJzyxbJZeGQ3DRQNtD9HMSWYU9cR",
  "key30": "3FKFZG74zEXGchnKxmnyrqiZTL68U4skPDbDBWSeDG2KhftdJLskoYYeSFFuTq8hw1omAJxVsBzBqcw7C2uTPPTt",
  "key31": "2pQ1qsM42qgJaHiyk1GrKx26kXRJb2FBG2UWd45VrwzovWs3fXjyvC8uwMVbzukkjPhahMExGobGJWgLwGBV8K32",
  "key32": "2SKC2x31XxhSX3doaB52MHsTah6HhyveSuti655hmzDkDXCvQQSvKhBRqWoWPvN4CBUypRCvTz84GL8o9MTQnXfL"
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
