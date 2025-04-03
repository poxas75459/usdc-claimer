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
    "LbEAFuLRLtGmR2Q1VFWhj4We33PeUErwoXK2DmeHfps2jk8dPnbfUeV3hq4aM7gNsw3tZbGuG7a2XeWQPeEZhJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZzvAtwskCDwQGypmsrmjx2pcEBWtyti1e5RWQqHLNwAcWMpT8xLQvxuTucZQzDJFuSrP2GSwgebXqyS3fF2EvM6",
  "key1": "3Uo9fF7bWweskqz69YjtgfZuEYvSZPqAkEUbTxoKrKtWxBvXGuG1JtcMrBPyMbLHZXFxEj81nm8yv9dxRyviz4zB",
  "key2": "5y6TF2kJn8DekH5BXvybj5r496s9Py21zsRVSsswJLGR9a2HwTF4UvRxVwSCJgmXP9ovJBNRDEEGN3Nt14VWXhSF",
  "key3": "5QF6KSThfvcWYwV4mxJ2Zzt9Jpawr9Yt6X35omYQTFrBam4JZP56zRk6NvSXSDt58Fon9tb9CUJE9BTvuTFYKpni",
  "key4": "3NfVA2dx2kv3kXj2CywYGQZVh75hoYvZxC5fUvkNzXymWZcEFg11TcR8xX35HEJVpeZTAoD6XCJsC7PW5B5LPAqr",
  "key5": "2DGZHhjHCyXsroxVKzJVAbwSiprAqjY235CiAfk7h5P4TK76G1ijoZByZBDH6jpiKL5tRsUFiBBpbEXvDRtRP4LS",
  "key6": "5EED6eLn57WMhSwMrBarkqScbmZvy9ZoaXLqrbVwy8sYnqajpC41errUe9GGfgpAvQ2Hc54Z3x9GuVy2ExwhYcmo",
  "key7": "5Se4V7Lz1dS8ck7v5Kw5nWF51cNw8ojaBZjecCzsrkhUQVHC6iVZWWrT694AwP6vaFMA3UwGyh7vHQuj7oCwxBa6",
  "key8": "25XZmHyFbwmNrrudPoSvMSKjmHWx9YdQqJsrpwawSUZnX8s5jDasjgw8nGrBDDaxhA2WKgPEeQ1Ys1T7sY66nWTt",
  "key9": "KgDkZnsw2QFAjenDd2LEWeDnZJox8imvUHFRHd7xAJqJxCC8cJza2rp29PxV1SwXNM5Z8gKh28HWdDJCRsWgB3A",
  "key10": "24yWvx9tZU4V9HMnTtBvqdbQCGW7FUQ4cMhbyQMmEBapM3MkmLycREvoCgaq9AHScgjLNmcSYWFsgibhn7gZyByA",
  "key11": "2mUirT83RsviKcK6hJxBWG2wd2v68LJ3HsnMWWtfMCpyiBmb9CpiWyKiQFr7oRDZvi3LG98YVCdHQiLGzk3158gT",
  "key12": "Ab5NYXtcU9mq9Kx66wommTH94rD7XNRsNzUMnSd4owXqHto2kfe3ewCBoVNa7wcSvFR2NAoNEkYVjwGxxdnrmuA",
  "key13": "4uK7SKoaRnkHKEmJRTKXgsihQdmwJNB3tTp6JP6VN6EwmcNuBQn7yxz3SLbHhQV9dfpqG26oGEUW6HJUVBnqst6q",
  "key14": "5d6KS2RFWGN7DNfQ72vNqQHTR6GhYmoVVgwfZ7UjgQy8dmYf9cGjYkfJckWBHiucAjjN4JtBcPfpyhT2TRvwWnoU",
  "key15": "2FqX4ws5jWvSnvB1zSFsJrMGh3fQtAa5W22d7xa93f1gzR6YthgkDTFRp4Lo8hqwvdbUVFrj3AsUF423z8tL1cuN",
  "key16": "49yeXHq6bNfQcL1VC69NthUJEPQyY1bLtvyxepQbq8aTKDDyb3hz2pCoa6amVYow1JV85D2ERc9fi6v69cGzNdV2",
  "key17": "5YGKWdCbBpEroUnouQ7NsxYthheNF2CQiVWcnFxpT4JiA7623pxbesFShBAD3sEpofzSSTt7fLvgdtDtHNvm5TmJ",
  "key18": "5EKX52wkNoMYZhEHgkBnB8KNNKtvsdZyVm7ssCQmg9Jgay5JphdR1fRU6JjDzXxohPoUrPH81cfRFDaK1bdzvU5E",
  "key19": "59TXAm5bUzHSRzpSFzFc5zrEy6Zes1CwvwmwWmG6j7BBFBLdsC2mSComxBrdK42spok9aC8qiqn7VV8oVXCrrnNQ",
  "key20": "fVrNKPbP2aSLuSPuDj6jGRsKBc39NnBQp5m3z4KbudbLCYkkwootfdXN3F854NBB9ogbeWgigxSAGvdwh9GshaA",
  "key21": "3tAUjEJX91sXMiKK8P6Y8nK32Bzg6158FQSdqwsk6hDLVN5DWJhhTjkmRuERzca3ekoWxhG3sJkrmLRvFvgJfUMg",
  "key22": "554xraDo4ygwWYZqE2CU6JdRk7XyrNvwvMhFjoPrYDwnGv8FEqBaJ3JbfCH7mkPdrPjPGKrRoKcsYpAF7kGbAa8L",
  "key23": "5iKLgNCjYQkPunhhGq8RuX5Qseirm4pc42d33r8erkbUirHL8SFZe6Zwx8nw3KoWCNZZ1binE2yvQnDot3XrFdEA",
  "key24": "4dZcVmtyEjHTXv6BXQVMcDMWG3ZMPte1bSdQUSHLfFXMPUpCVDR6Wxkm9HefYAn4xuBUv7PJsnDzDkhAMsxktx4",
  "key25": "4BauhwGKjBJacD39NcK476cLNNrSdDTtyhhTe8FTLXU3uWePdMqinXhnGUM44qfGEfJHXqECKpUNDzmfgCWfo3SM",
  "key26": "5EPKK8k4PA8S5hw8wxcaNsEsVeHJEUpeDcVUW2pp9HNT4225ZR1otSTHaaFu4YFohRKtQQBrs3rTesRPb9ZSMTuA",
  "key27": "5aFYjgVJf2S4y4Qa9gUAUw2QqFZJ3NUHF7PqA2XcBbUUFrZHHRybh72mB7TirsmaC7JoDn5p1fQWfZcfA7NtMCx8"
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
