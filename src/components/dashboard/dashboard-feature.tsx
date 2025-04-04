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
    "5uvALYQFbLReWuFk4b9mAbKpXSx3QUgaF8nihenEufXygoettraiCNHM4ioe27wRkPJsucXM3EKXPcxuvBnemT8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SKNADKbKajv3ti3eDtG6ZjWdShob7ZAbDSmBU5uJMsCYUBr5dVuGPKGAZU1s4UGJx89hMrpzS5BdnLDpxSW1w2q",
  "key1": "3FLUoBCcwB4sAffRsG992bAQmhit8EvD7rqsEXvmtutgPUHMu8se3MeusxNCYArzW3MeicBrJkuBFjooUvSM6a7M",
  "key2": "5Pjq19HzXcCCK6fdZVq8foRFFmmu3CPb4WxDEUdqNxu2N8NgGZyH7b3WS4jha4oqmo3kr57dZgCALHxPh8UVPv5g",
  "key3": "4HHZ46Vc4731arRFSRtKxMD8NSBgS1Jqpg7ZgP9mUtmPucHkee8nms6ZyUAF2zEYvtPMwtQ7bd1N2YjUXxcas5SW",
  "key4": "e6HaPFWnNvftRRekqSakeky7hsTS2RUQQcE9fuSxZyw74FdJXHLjxKYPTVRZQEv2ca8AtWCfmwP1TGV144jdsTB",
  "key5": "52MNCi6813ZebspYGm6YVNceHoT5r5YVEZQQfyv23z7tCk2odZq2ohmfwGUAG2udmkMRNDV5vuDZoyBLMX2PLu1s",
  "key6": "5a2TbsJepfHMny1FEs41s2tVHLJBh1xpfZijp4AoGmNzrXUtNCZqsBjSVvodVj4B595jExUgBqyFmWcoKiV2qSTi",
  "key7": "4MoNM74VMzSUVEyoRBGK2h7SKdJzFpZdgWidaHq6eQnFeD6jqAWkf6iuLhpDaTevebFEu8QaWompC1FNvDvRJ7Jp",
  "key8": "5a9bBsSYwNZr6eR2svsXMUANTpyr2iFY2AEeK6nTXB5U88aPtfWVfnBZDgfWKB4iZuNB6JKvsFE1v1bpG66p8BEr",
  "key9": "WVoh5G32LqTTzzZ328pkm4zBQrunKtBj5gVi7JzeJ7o7jisf1BL3BLn9hi2NzLnFgbiomx8X27hZZLVeDJRK3A6",
  "key10": "8RVgFknogpchj2Jgqv4yqxjs2xep1qPp7qQXcts2Mn7MPVRLFAeLiYPYDoDE5YhTADGKc8LGn72UNV5YoZVzhkh",
  "key11": "5dkAnjcy9gWguzvVXvWpVdVCvbdvrZLfJjGKKvu9eESyy9bXkPBV1YW9JeRKQQJvxiKYpkPfgxnBHr3DT7GaoeqA",
  "key12": "3khqYNm6eyjjZdho9uPk7mWJwxufYscahgoz3ZgrmS9uqJ2iPL1HDgTKucHp22BxkJWLe5oUh9sE5CN1Gk9s42cp",
  "key13": "2zHuCoumDkQ6UQ5MRJDw4XmHwBENtD4REogRNHzy8TPiS6uR6N7BK1fHrxdMThXcA8nJgRuSdkDPCBS53HKjpoYk",
  "key14": "58wY4W2wf23H3ttnYvVatkiGLYjfGohE7g87f3sj3zpi4TbJrVwcdvKCsnkmzddyf3kaPrqBDWEQR1E3JrBEF1AS",
  "key15": "3fewiyvN6RdzfKfoeH4hwBFEZZCLe1p8PwkKd1j1jR9dTbMTXNxYfnEaEHT1PwkghSXQFLFJfc8yWuJWq3YJziw1",
  "key16": "4FNkTzvcBCi5JGsarvo143ztFW9x79pxzg8VU8Cp1Zg3PW3aYgHYX7wcBUdnoUpMcSnHPVcWuE1U7ch7LeKeurGn",
  "key17": "2TY9hsW7cSh8DcnjHe9j1yiHqimiPySqkVnHZf47hnv5fhMNswfC11wQDUcWy2Zwta1KvwDeuU1ujY9FsVsWDqMZ",
  "key18": "4DMLPTMzwgPQwnsyMrMy9S1Vhvz8ZFN1LtMfZ16TBw8a22wQafSzu5jNCfmrqVFF6qad7etAPLHdtEWTwV5Uq8v4",
  "key19": "hZQenxfhtU1FcVsAo5afG2HoAXLrCikp9NCTdL1DUkCUUyyfwRf5Fj8bHgQyjGCLRvrvw4t8Rv9GKH2PtgGdAzQ",
  "key20": "fZgSLKf6PwmkoD6Z8d7iSWWYkjTDNNJNSt9KyZbk2LFkTkqe2sTQZx9Mq8BWmRiBQ69MTBC22B1xW9bwiS6mP52",
  "key21": "2xCTNZJPifRzp6qAn7vwicgDPFB54Xa6k6riE4nwaHuT4dXXX5EktpbDHoWSycCB6LZS3TTLNRnPGftoLrdCketD",
  "key22": "4XW6da7LHzTXZXjC3UX1VAEZuc7dWaFcLEbK5xUD1f7ehoY7tAuQ6vUBEVEVRUY3WBvXFmvhNw7X77m1yfcmU3EJ",
  "key23": "27QgVjhbwodDgRQ6xQ4BcFbziGJucjEceBhP6RKnP5NKrDbb9Vr7PJ1r3DejDTPZRwaKJfebWiuFiMyAts6doUxJ",
  "key24": "3tvNJ3vbun9RTHGxzN5XiB8PoZtANCdLiWbRN8j5hGgi3245p1SpPRHgF1bv36MwYEFaj4APqhW3eZbTXBikaKTF"
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
