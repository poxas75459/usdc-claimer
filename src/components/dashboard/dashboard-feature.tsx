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
    "3ryzXXbrRxNystZyWFzUFtqoH9CFZCQ72zkqEqm5K5xmzVmAPz923vbwDZ5UpatmJ7wq4EsDh9gkyyxd6WTsU3px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YcgXsALSUa3QGLgUSjKkVQqCBVm8aAHngZTNGBdJ2qafYSdNPT1gJVpFMWg9ojQSG2HTpgth69td3SKi9jjK12b",
  "key1": "aES7AkwmiFe49GQttS57fTTqecsFFGBCbvEKhDnqyhW2c5pNopFt2fZrNbpL5thWNqW9VPVKcxrxFp5kbAgtm1Z",
  "key2": "28zrDp5KTK5CATw5e2ujRZFaezEUPCVQw6wxKXged6LVyAhcXqB5MKmTo6fGscFiQjVMj6VFQgfyiZn8TbwgAHgG",
  "key3": "3ekeRwCMps2gTDu6ZDzcdsffXhSaYkKG5F571yCmhqEjUWY4QjCKvTUt6uqWzwL154D35wgteJCgXV7418ow8xBS",
  "key4": "5oqXbNKaKv6tuaiDmMzW8VNoWTRjmbRA7hJrKcPvXtuVKFTwsuxqtr2yu2udbFc8tdVPidA4cEZdjVZxKVoHWUNX",
  "key5": "29LvjYyUgVQyivSa1sLsAqU95BYScdHmKS8J9AfSAuGpHb36urYraP8gKeSxTAfFDiKmze2NMAwGGUkbmi8pVP4P",
  "key6": "2mokeC9FQjH2ovcbCMGWBLYouHBQRWjCEXrC9bQArddmkTfUYbwcwhnnBgvQGTL7cJLbFVTbLaC8FmBGMA976cbC",
  "key7": "3RoWKUFtx65MRyayLaQcLEH91M5AA7x3vFJnWgqWqNEg1E3apZyfTpEZtxKeK2JZZbQ5eiDARFRBvqvozZpNPP2Q",
  "key8": "3DDM6vaYMr1dKhuKb9WkcWDMoTZa2jPRmGjuGf3DYX7yCw26DgaCWMobQewjLtR5y7fsUewtZgWUHnsxtMwZdXYR",
  "key9": "hmi11eWcKmjC9MG7peC6nEhyrVFLPANx3X5izS6tBh1LRho7QDyp4fE1YbKL5FrhMh6CfB8xcKgdJLnSPVWN8mS",
  "key10": "4M5gexMBqHLseRB3mRx5k9U43X7q4Jqnmi4LQupuUESy4UPqQQfxaFYuJpaP9T2V5a8xEG1wVhm3fcgx5gUSbbFy",
  "key11": "2r2pQ37GpEPGDSpcCtR1VUzjnE9z9Q2gBGWehKuogfUy42Xh4kHv4dBLdix91DQFeFkeBqJZhEvm1GzJR4aRRztH",
  "key12": "sojUegGTHFJkXXrE9suBXGSitzxXFL5bTtghJeeLRGAMyBdYTU6qk23Vcr8wR5eP2rPRjNK4PcXq93Q4Fdtg6uB",
  "key13": "4SHNQGUkavcHt2MEvmdajPHyuKcMEmjZPo1HfTaXQEoqEirWPudjsZdtLuePgiyo5jeQPmouvLdUErvBHCDkezos",
  "key14": "5H8xxW9eanr7jTyqGTVtAvMShPrt9Y4LNXio2ENMmSoNKQFcn47CQdjsmUnn7pZgAjBPrjvvN5JgcHot5jKDktsT",
  "key15": "4aPhHXb8hq4dbka5VRpL48gjFyAMuUbPGWwvh3VFR5UZ9a5mfTXWwXETfRewDBuCGcacsHhN7WMqJtd1aRG66C7b",
  "key16": "4nPEKyia2oymBqczevB8sU2Xsn9G7w85aQmrP5XWFzCQJWhE4ytbZQdt4yG1GZEhhQtBXuBda6r6kJwm4trR9XuA",
  "key17": "49YCVYDqvgWz6oAaaZqZAbqwT9pFt5Gpb27HQhqkELg8xPGqNBgRLDrJ48iS7C2QJfTgus72esPQPMcbXUFBAWQW",
  "key18": "3robTWL21tuHGAmq1gkYrJMhfZ5UAjF6mKxCFogfjSqkELTs3e1wbTi2m4PtkJTVhF5SrMkdwzDzRwdA9L3ZTr4k",
  "key19": "62PdULjzyycvFsbi3tPH93f5kLEjfDLZamYUmLkNUrevWJYbf331VPfoaLPkzoHHwNKZXNvk9ay3E2UoYxmzrFxX",
  "key20": "5phB8d4UCH2WdELTzAKdXVKUVKiUicDxqgaCfkWc47Za5bkSUGknQjPp49XFNvXZtAyASCq8pdkb32UFXAuGpaks",
  "key21": "4eudvFRT7QR3fnVPsyQMidaLagjnNDYD9D32CCa6G5ukQeSPrDsHQwv9pteh2JjMCSmvkt1x86VygeAKB2bYoHYN",
  "key22": "62mTsjr1gc2Kt23dVBKppQx4f77X4VopiukNXjAJEYthpv2viFq4N9YiSPtwu3poGxjQQxExGG79fEPGUhTLAxcc",
  "key23": "48tnWdu4335foYQ3oMCmqzuHkHc2MT8F2B8gGF4BvPdwfCyQW289A7cYzP5YtZe2hnQwGPNgdWv61d1amyeDh2Wk",
  "key24": "4j5CErnjkosK8zGnph3TD7vbgLRo5WaNMiqZDvmaE9m1CXoDoYT7yh5jhQryYfp8sLYoB9dXvSHCkwWVN4oPpgjQ",
  "key25": "5HqFHpKwJt18JsUTcZomrdBaj2BHqThr2nGh8fVUVVSNQgX9SKHeuCrLawCCjRA9z57JYc9fe2gRjNn9mvhUDpL9",
  "key26": "kaG4kvvhVbjJ1BbepjsdpJ7DHCFfiJTJ5kWQByxjn9VmcoZfj2ZUWASwYDpnfHdjBoMTuVQbjo5BnEmcy3ePNUQ",
  "key27": "49u4cmaCaqqCknepS4hp65ymCXZArnG7MAC4zKzpdFDAseoPXqjyJVz94jUpXz7oRWj2NYNDHwtYNZnHTCDMokhg",
  "key28": "45TYbh7oFzVJV9Y15SR5umNstGSB3WnikiPYMpisfZGPjzr8WTgntBtEzNjvtovoV23q6JKi7Y8j5N2X3pTeoCcJ",
  "key29": "KsfbPhaZKbzBXRc8QqqtkxQAmTi2auKxd37YTdx6wDCSeEdYgqh5NYvoawY925ogVfgepJDzvsL7irLm75qeFmd",
  "key30": "WsnVtx5kWfr2gocgHU8KbmKHurAqx63YpNj1NMYjU9jAHStbQxunh5tpe9G6jfGBcDrTrhQnUokHNybhZdJdpjK",
  "key31": "4vJ5maz45VzAQVDMMERy9zDru9JUHV1ugTgCPUU66h5YDJnp6jChEXMr46Xo25GjNHAkcEBCRT91QxnSxLa7jE8U",
  "key32": "5Lka9iBxu1LhbDqu5qM4sAmddWaShrrUnKczeHPjBsDZdNtYzyKndhF6f5P3mu8arg8hJV28LndMxPKZqWLc1xaZ",
  "key33": "61tmciAHimsFxrLnJeu1fJoNxoVhgufL9B7Dxr6pP5bo2LVqDXmfn8GbEsf9pj1qUAqyEamaXgJRLo9aSrkCWRBT"
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
