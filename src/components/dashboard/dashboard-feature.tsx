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
    "3b33UmXZb5xSjWt6mt8byrsnURSExgWmnEHpwDCKu2qgMji67uUyNrw29kGfShsBirTzxyJpcVRJDKUhoQMWYpzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ND4gbv8URhB8BVt31UPc7y3PrFs9iSn6G4WzQ8NcchS2KQQrxLd1dThqWnFZySf4ULACaUiH9rBsK1MQWbWoNuU",
  "key1": "CPjEMvaqnYKRoijGoErD98bwSbPAzNemXna8Ao5h4afN5snYjVft3cP1nhg7PdXESepcQ1r4GD7yp7tr5UUB6Tx",
  "key2": "4eX3i3oGu1swF5dbvVxxF1BbeWLwGD3VgrRudvyN6bVRjZoxvDenAFR3PiHA8KZvqThjXXunptUGcWrp1WzR3zia",
  "key3": "yWfhtSKzo3PdexxuWrAPjsDYNYcHfsGsSZtJgwf8rTjsWPtfyGNxNJf2WS2ke7FBvVtAD7uz155tJnHd8z9KvjX",
  "key4": "39Jrn4wLw66nJBtP5p4hWqJSNxbWg3gQ5LwkcUDUGwD3zQdawQn1NSG9bRiiYE7aHahir51DddTdMvY9zFd7LWt6",
  "key5": "4Vm87dBHL8AKzxtAHGsVkLQbdU3LNpbyKC8E46Jq3ZPpYZFYnXR36vkwGoKQEnrUeTmpntgXbYVN3YUZqPUD4pZr",
  "key6": "293WiQwoAVbmeHDcT6VVgNgEUaxzj2myWNLzwhvK35zaxN3dQyNP12w2YQ1v9envMq1UuTmuENEtYmiiDWVCv9iD",
  "key7": "41RAMc4hzP6RWZXnB1db3EBwfDgX3yHELwHHv8HFUesaXbKvJLnnHbqWNap6uPZDCKBvtFajXRFiHG7D19h4Cbqp",
  "key8": "53YvvYVep1a1HEtMvaAbVCvgeRaSY5XfeiWn1QmXUvKpX1SEnQgCFM8PQ2wJrwREcmmHTCHMsNoLqcjBmkaEme6X",
  "key9": "4gLK3fvo6VcocGXqHGYJQBD4jo5kXsvMhHLZ2dqRh4j8Mu6c3ZNR6cG5CrhV4Et2F8fwbeqkGBWtmB87SBRFhqXw",
  "key10": "517r9sWcQ3f21wMkDtW1WpPb2cknmnHxtEpet2egGabryrCCFdd8HLnXEnU8wPvJLMs7HBkx4LHr7oyDuH4vG8kN",
  "key11": "5fr7trbxgBFX13NAo544BvbXMu6Qy8X6f5mSef6R7ZLeGWjcJd3w7Je8BoeS7raCET22aWm5YgTT7C2EqThaPy1A",
  "key12": "3n7LyASPmjkwUACSD2qSZFXAAkPNQfdXPnPb6gWthsa9ZfTpH1AXCmCXaopusaA3YvPuoDrRYXNN29eNSR6KkmDi",
  "key13": "bMwph6qn8SvnyLSLkM56ArU5aBEVZmAGDwdGH3oYYP3ueQzAEDv8mJ13JBnpscoMqMynBENSqJDQhzegqwg48qn",
  "key14": "4u2iwwjv6j9W1xRHSmDAVAcmjiTq9AWSq3KZipMLgpiRJQCmgJCSiouMQwB4XR27Xp4yG5h5KhFYALhforAAroFL",
  "key15": "2MBtiDJYTxb8XyhvwDG3j6wexUC9hY1NmRDryZK1t79mEJqMsbLQuK7QUdPNwFNp5vifNxdFc5vJuLPTgMd9HfGf",
  "key16": "4mCNvraVNW8QJKwwbmQxE5yALo3A6Z1RR5fv5x33kWxchs39mFHCVLperK9VnCsxn16s9m1qmBHkZAsMx4EZGxr9",
  "key17": "4Z1VEkhP7hBGcwqbzgDpDS7TxDbLmpc9McWYRXUMmDxiciZ6rRKM9w3B32v9qi7o1VS6GDEmD7Pg56rJ5Fx4yzj2",
  "key18": "2nZX6o2iDVXNMGfiAwXabdWSFzxYnQeb5zgS5vzyVdUUAc94GzYjmvVps2ZtfhuMLQsb9AihcG13MzfjTAN6LxK5",
  "key19": "P9UHy8gHK1xdzxfGx1ngEW9CeR3WWMwwoSwyRk2XEH1EEa2P7cjxM8EVX6rsKgJ7pdMdDbwVRFcQQvNYh53ZEKe",
  "key20": "vqRK9b8dPyMQXVgtCLZtjZi7NLpHf5xzDauaV3vUfDCuySK9QNoEk1usGpiwrMALxFXMvSsjY22SqQ42XyScBFh",
  "key21": "B8CxyWmgXYxaHoyTUEbadJPajLwqiuNfnkRa38dR6UDSCnBgq1fDx5HPAwFAyU2siVMq6eiiQzmfLa1pRExSZ84",
  "key22": "6U1GkCyJKkYzWa3fE5qnCGr9xFdELpMZXnfLsb88jtQCRphgNzHUf6nBpS6SVTDqeQiqhcAsvzRkmiyzVCrBccu",
  "key23": "4gd2DyNomfJFpgZfWpG92JqRP2GmRLTJnm7ZyqgwA56Et3cqWVxpyDRVnUKYtM2nWovpyrPnnHxrz2ocDpnkbMAZ",
  "key24": "5oo5pBrxKjjFAmKRDMUXzcgJJgSBi93uYjtShyqQsvL2Wm8zrMeCkhhGQyWPZeJ1RecsK6MmdtNDhXqjKfPtNsu7",
  "key25": "3UTAwkcEWSiGgPQVnEiAiDNsjYRDbEVswBVJJoP33HdG7P2kFSBxnTTcv7xm5Tp5fmtND6fh87DhXcyDpdpTsH7u"
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
