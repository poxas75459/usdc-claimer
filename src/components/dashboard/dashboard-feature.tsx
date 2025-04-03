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
    "5a4AHeFJsiZnNNP3qKzWRwJYvq4k4trNCMxaz7jmKPKBz8vTDurpGAGbJKq3HHqV2gXVvreqx7Y2p8Nipt86BTrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QMTkbTDtTDJAGac3uSbkyS86rrUunRwA8wjHsPJTLWFzWVvscuo5svqJTSXhcmEqKipwZNHC71SMZ7fwa5cxq7Q",
  "key1": "CQ5bSGkpexXYLnUvV5xQZP7Q72YzKcnQ9xMLXPoJ5c5tGeykQFDuLHi1dGMGDzodyqufC3XdJSEWRVeVbqfihPB",
  "key2": "2zyidApWKSZKfDoGq9TjnAL5MZGovBU5D8PEiaoM2i7iZfVSspZnxdqkEoHZkHSbN3bpbmws7B2LKmHZFzXF96mX",
  "key3": "4F1AxoSENZzNZMFtnweNb12QFKKqBA7trcoYYEFwX8i386DDqBphfthHPYRsZZvp1mk7eRLE6v7shMnJTwJoJcK5",
  "key4": "4Suhay8mP5TYhNePVgjqcJgYfsJxT2HAK49msv9LiBbY5fe8PJys1eYKK3LZzXmCKEp1hVZ8awboGtofnNn1sobF",
  "key5": "52WdMwb6dc26coJTreW8S8pWwDbRQdk9SeoJs3p4LfAAHAEag2ERdRfXDxEcRG1cvkLZkreV6bc1hDPsGSToznX6",
  "key6": "5KWrAC7eVdkf9AdRaoNmrYHtpHYbeFbmCxdy7eHZczVtzWfBmis2TNaL2W5h3PjNPkH7e8fjY41j3TirJCekR6Qw",
  "key7": "CgsNufrnmx2T9JwKmpqSL7E5s1a5q5qzvYDh6sLij2tyGWgy22S9f6cMq6HQ2m2RMiDxLYt7gbFQXR9RX3EkNCr",
  "key8": "5zKczUQb2tdSTHyBBYvEuPWLhWCtqy3y8XAQNHhWdCPVEfmZnazYHLqxiCqZxC3Fr4yRKtoFYsqk34GSvrafN7e8",
  "key9": "6au9Soqzt49vG5kqSHt66n5E4t5MdRnJaY5UjeLe9teAo8quPKWBetAw4zvC29xX1rfd5Ro4FEaodH1y8b8KM3T",
  "key10": "7X8mjzGH4dX16Pb1ydZpBaN5kBmFMeXYG9xxHiXvYokPJpjdQUMipvhzkLBNEbHrJEy7z5DuJ4JdDnfa1tvSjYn",
  "key11": "3uMpSFvQvqAVJWNoQ4RD2ryrnLN23e1JMrDqYrUfh3fxLwjPbe3ufhyi1Z38eoq6qPws8Yx7S5EvKeVRXxBavEvi",
  "key12": "2zES4aYvsoYrjA7GFzNYMx9cqPxSrMJN8HYHGdiPjgfSVxiA8PQgsedt4XFvb6XXrcq5pmQkpoyVByiU7vvv4hMe",
  "key13": "eSDjacawx6bRvmtwH6J6Ea5BCaGRS93zeZYVFjnH2kGq5htJd15EuT8VNXzBXMyrrwbmVeLWM9s7By7TMevqid5",
  "key14": "4NDxnypwZTkyAfAqPoBQDjDDiqFjM52S1WCzLvyS1sU7oYuEwLjMhvzhL45jnb64DcFRP5jeEG7Fpfd5Z8R6gNsv",
  "key15": "3xhsguAiXyjhXWHiqSQDP3LwHQLRY4aeYJjmVDBu6f25MjUwRBoVssXvpYYwWtMmCgZMsbSPfxmgiw54cTuHNMr6",
  "key16": "2rN9hUSYtuvwZd75CRUJ4uD6brZUgPRHV7vK8g5qepobHRfup2TfaDyBp6iByvuGTWjysftN8ofQg6jXSd2gb5Yi",
  "key17": "3aH3hgqoB78ZVfPBzqaPdn8QuJ7CaKhpX9wzqPStZ4gmg1kDG7pDfhu8zrCx1oc41X6XDhXWPWbPNVmHDttZfmKF",
  "key18": "3SDUbaNafxSfSyjnaRMKddGo5m4Ydee1Ux21nqU9xtrnG1DZMQ44LoBGnzitwFvu86BvYH7bk39fHt8ogGdGX8w1",
  "key19": "mFJ7uiJKw9pCugyWYzcTBNPUdDHG5FZ1cCVtsoB3t8xiANUbeDwrchykAgnN1gbVRk654jhNgFRWNAZDAggS8YB",
  "key20": "3pHsxuVMkv65SfVTB31wxhWjhhxBQgLRJy1xETV9nuAitgWfiP61sGAWqCNUWJNXEZRnhTy1KLmfcMzwVkdBWJoR",
  "key21": "4HAHNqoVPWvgm69G3Hpwhm9mnM6JQ4hBzioTvPHKuCmqRKx3DF7WAfNBF1bGL35tajDmfQwjNxhVrK4CJaQSTXVS",
  "key22": "45j3pSP5j5Z6SCRNMEnmWcnbhng4XmQxyH2eNhzkeULsp1Nre82ofquFMnR1Fj8GDsaJWbCtqJANex2EBfCCver5",
  "key23": "3RUhFwYEdXiin3fF8C8nzEyUFAMCog96NcjevSav55Si6nxd3DcXthahZjRFiXRKD1FytfuUQ6TZuVNoxihix5K3",
  "key24": "4UkLoPCc5esmTxRFjn3Fvs9zKXNV8JZNXXsE73Dcr2QPuWzQBaZbZNCL8rxs1CoFAfXfPKEGNqyC1FVTnDj1QGcA",
  "key25": "5D1RhNEZq8HEp1SuVFcwLF1PB2XqSZPDBeo7EVekLCsbGiezG9U8ei9zqW8gwYtk7q4t2ibwpVazKh7G1mhEHsRN",
  "key26": "EhSMXhcSb2YD7DH6QboxvC7acM8at3favBfTF4u2fHT2t19jBn87HAtkQTxbzDfdnCf9ZXUN3xz4G4bFqGvFUQG",
  "key27": "3gHW9VQQMoR7zFU898m5xXoUztDV73Y4P7bZ247mCcGonS9Y5pc2YpYJ6F4TZcG9LHmMb1RsMsbk4BTN7yEAVNJP",
  "key28": "gNjrMuEFbkSr6TFF7GrvwLqV5RCFkQfCpnr32kJ5bfsHw31ykAHT8oHkim3LbcaAYzxeAMEUhXmvH4sPnMTJwgh",
  "key29": "4xbjaCrFU8bfWXhsVxurVeMUEGYnYUjvwhmYivZvxyNcr7FFsT4gasYPPkJagiJnfT9bFLhi7D5rzjw2uDY1gWNC",
  "key30": "4HDCwJyNUQkxQFESu8YXALprPkAYNXH7JSjtFWuqJCsVN7PmKXB4L4NHHdC5vT9ThMj39rKEUCmVnv1f8DnKUmu6",
  "key31": "4Uyfa4gdJ7RWxMuveqZ3pyQPuK1kXj4bTJZt4Hc6QEdDTmuCmR9vja6JKsZqkufMmq6H4jfvMkEpPuTWvU2qGtJ6"
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
