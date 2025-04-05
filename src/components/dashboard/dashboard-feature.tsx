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
    "3YWcwsnNkpZiHHHXEgbTLfXm2V3mJySeCdkHUV4ZNZdMLxWVmS2gbe43GL2B2xFbdE15aFMW7C6Gq9pgwzV7aMMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "484ahYYJ6uwRXWH11qMi9VKzakSP4deS685cCpi4LmUAStMrdoHXqhruf335c5WQauWDpSy3fZJwrKi9wjRrLbyf",
  "key1": "5c1peTUGDZTam6riU2aSmzBBC9U7cUww8fpokcH4aBD9FzDW9WhxC64RLtKQcH7kHjfzxHmL8LqPhXrpLgd2RLh7",
  "key2": "85UbUSN8HuwjJrrqJysjtGJ2TDEXfe55CEdTqRd2h3j2iaF6sTiEoaMa1BWyCUAG7HgTBZqKq8cStfodU1e9YRP",
  "key3": "3BvQDstVPb5oHyRCj8sZtLyGkGARzHeif1GuLTpXj4fkjFg2WUmbZSf8no4KoUV2zk9oQTYvKFmkRzX6yhxrtfQE",
  "key4": "59QRJDxYRLhEb8icqJ3PqyFf8V1pcyLV89SRB7igsbMRwik4ipd2XsFNR937ytRDnNg3ZP4xXFECrELJGM1ixUKi",
  "key5": "33NRPH9Fxqo4oh9AJJCojgcmmuSpPyoS1w5K77nmwcj4te7UzM5YAupmgfvMuWcrwA4AxMnnGi8MKre9syLRK9nF",
  "key6": "2uCuz5xJ9PG6sXqm26XAKD9USGuUBBCSqurUVBgNp7qLcoP3PPwxzkYbFWB61cTLhq5SSyYftVYugRQ1uuU2LW1W",
  "key7": "5A6UBh19sVtcDLsf4E13rc1wBntAE31P2andFrgGmWMEMi9caQ972mnPF64Z96EAkvFjr6kSiSgRieaZYhQ7A2HR",
  "key8": "2CSkQzKZ4ncis63tm2Sr2EswU1THPNutZHbtCTQeUrtGQ84kTpsCicmzQp1D2b37JqYghxDQEuoCDmN6xSU4QYqk",
  "key9": "AL3BM2JoGYj4rsHwahqw2M3JHqKTDWiFBf5bVtNpPKtBzWPyhEmpsVMTtBDFYJ5Rjm1RAjPixm5G3kBf1S8Ktob",
  "key10": "5ziCHCKzurNMc85LkJPRfZqYm4n4QhWMCzKtBkkkkRnHK5Wc1ZB6yKDgQw2kjBtMDxoJeL98q7qUr9h9SyjLjnJW",
  "key11": "5b1Qomjg18vTTFS3N5oS4RPxXAL8bgnbwgknCH6a5s2WmZLNQqybGdgyjZCzyBNQotcpJoedt2VdXm6dDRhvfT95",
  "key12": "4Ncmrd3ZGSo9wxLvW8MzHXg9cFiHmFU6dYncW9bQdW2syBVw3iJoYEZ69CKSSC13L4Pu4zQvHbJaeDrj3SU7i9jA",
  "key13": "5mix9nGCKs2iWTUhv3WAunCLiXdztTFfE7N1YvRawMAsqBaiPgwqCj5V7rzebtCKqhbxnr9H8RVJAYT2S3atwhyG",
  "key14": "4RHyGmSMoFCDXQ4NYq6uNQMiCJortzVTbyr8HATscNdM11tfrz5TJeUnLApmMbaAStJkjdkZCAhon1RqCVu1Nwd8",
  "key15": "1BP2n8gouW1ePok9VXVxuYAki9dcqjXUnRfhh1gf5qjSLimJw1SNehVy9LKvpmFoLWf8jJ3peKaJwemGXkyxdin",
  "key16": "3G3jiGEKTTqbkZt7By3zcppMuyGWdJKL5PEBXe9dDTagDavfWUxqeDeqr6ewJ6ves3k4peu4wAHNkY13c3AL9a32",
  "key17": "UV2wDZSZEMdAEDoaxKPgiwrwuXWSPpAv7wzKbLD72JKirp5p3VMJS81gWHRweBXG6HfqXVKLPSpDmMUVNqPKJBd",
  "key18": "4ksNhYUL3jbxmpWFhKkwdaVvm2UnLLkQcvuUJqwG4TNvMmrCMWxDPoFFQFvDSipoxTqko35Ges3pGp3C8asq3jdE",
  "key19": "GecaVPH5fWiafaTeFfBpYxwbVzHtF8xU4vpofH2EUSDJe1BMVS3kG2YerSEbzXNkzWAEzxdxNbLPyUrdgBUvqFu",
  "key20": "qb1ri3eCB9mqA1pxb26N1YuH2xhhH86jZuswcKmz1DbKw1p9nbcZX669WkMu9TvxiVoEH9UkknPFgacosStEdgk",
  "key21": "msEVYtJMzZM6NVSChWjBe6jbv9hkcqM49quwP4rUofH8zmbd2ziYPWHWxwNrYpR3fu7hZe3Px9qfjS9fcKxqZUP",
  "key22": "5cXdATGv7A5ykt5WU4HVZABNMo9fV91EuEprsBXBYtVWyV3YvMzZnbTS9CYF5bA9cuwqPrRTuTNrQRN7EwGfEkvV",
  "key23": "eDXrc39M1hKZcDSTrD3at4Jhodudh6Mug3LLcvGBki65RGw2QjRAso7pwyFD5s3dT7iCyiVyTfPqyrrY2gLmQiL",
  "key24": "5uZPTbkrdAp8VFpBcz3fut5jgsMxjVRQkDTyR2ZtyC9hDoh5ve2gzayeUz969dDod8WHkbX5oaDScbps8NJcAi2t",
  "key25": "4WpmTgz976Vx3tuXoCayTebxYbmnmokgmyQALsFeyYyUSnoozdHce9SkxiPqA6YPfAhkwAM6XfVCcZ2RbxHhLm6e"
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
