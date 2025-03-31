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
    "9Bm3D3wUhfbRVcV5ek2ggR1gND62dTjYYbApEXiA8Fym8Dta5hPEMYSRFpCUobnBg4XWKeNYkUFQSAuWFXy7M92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EAettXgGL9BmmRXzGJTMLAKPueLXt1r6ePe9upwzR4HJzr1aACjNr1V8z51hesECNDAqZyzVuPSWcUaEg1dJpJa",
  "key1": "46EFjb6ihs2MH2V7aggEN6aVWje9nL5A3q4hArMzjgq4nw8fyy9uR1nagtbUKPZbv3jQpBwwQdMDKEKgJ5D1swVf",
  "key2": "bndUQZ2kWNFHDHBPRwRXjgzDwc63M6qGfsbT2XKGWV4uQRPVMQwWnR6ue39g52wLmpFJswwZ59aFqLFsN3yS59F",
  "key3": "2U1cddrf1Psjs9caoULMcy9fyojpRdAYEpqyycTNWTQf3r1yuxxvxnP3ymtpjCKZx6LWeh2RmMe87hsKtbyHujSc",
  "key4": "2haAEkfLNhvtRGZ5YVxmEn4xaV1hn46HQ4yMZR7kb8jmQEhBJzE81dXZ3LvoEU7SJ2bGppzXY5Ru5hPXpyAKh1Sv",
  "key5": "5fK8GLcDpTGixsUdwtFJxGn1voRBneU7MFUVMyfrRTrtfeiCPKki8wMr4DW6DABFrUtirxL5j2QV7mGmJYp3Xvmt",
  "key6": "4nYexpVkUx27h4Fmgy8hVRTLDiwFne4DvjFe1GeKwJMz7vinp8BQi3DP1i3yjxeB85d1Epj6mMVddi4prz394efy",
  "key7": "5iu5jGoYGmXZBuFnn5LThTZZ2CamP5zapSM4aY4tPWvX5VtQsgyJPNxSNJLMFEBdfSBPMajH23VL8hm4ujLfXDTT",
  "key8": "2WE5gy5GakNvEduQvYzte9ivtNBw9oKyG52LoySEhhhMMNR8tpL2tizXhUNdtXa4S3LcaNgyc1UmTLiP5E1jKqkf",
  "key9": "29kgoX4BgQhGFvc7ji9nFbVyG9ERG7oX5b2c1KAvmuu98C6prjSMoZD1YZUPPWqGx4AvvpgqEnGqnz7RAf9tpp5n",
  "key10": "5BHWZgdanqTwEC3FevYVvRJvt3Moi8EtFHNznv1vuMeuWULTPyn9QY3x8o3L1p9wwKWviGog1BKZ6J3U7fqpSwpE",
  "key11": "3HGGKbQdyCQdYv1SewmnGfZ5X91mvyR78MAhSeJmihKTXa7tfiJqire5P9pxewdCXUktwPivi8iqiJGu5UoUVzda",
  "key12": "i4ztXRgoFVQdQPKxskwMZYPoNe2MDpvjTaYUrMxTctgbdWn1tUxpcagnV8AxfEWDF4rZ24hxn5wz5ovhTX7DLfN",
  "key13": "ySqSNwmE7NrxqH93Rxqs2Qt29bJDs2qjN1PxYvpcraghmjDMsgzNUpM6GMbUtWLiBrjNT2f8D7jUwKZtiNZY5jA",
  "key14": "6S9qmHnNHmvg6DxswgZ6QgHr8rhhgwhLamgRAYTJe9bXEvSqTnD2FktAfCkj7pJgqhMnXoD5Uwg5veg6myuQLuD",
  "key15": "4QPuF38ybJBkKkHmrnAmgWjP1Z74Kw4YZsoH4RBSGP4J4Mbs3bTDQdeWbpqBxhDRh3cBWKXp7nDkNbSdhbnYJTZ4",
  "key16": "dpDWPkfq5uYn4ipEuZuFKd4BMoCXTgYW7RdvCzQ5vQ65hPSUNrLM1hjZrwKMKadJLcBmkvnpjitvRwqzrMWSyuL",
  "key17": "4NdT6J6H8LtzcHXbjh4BXkEuAZyPJHSHTF7aMRHwoKJhd91BFTJVwvBtsW3j4bn6sVkNqDzRYd5anXurwLcM9RGR",
  "key18": "3rYjQA6JiKXJZS9jo5jYEutJNoY1qQxwTFVzGcuXsTEHytThGeNNkazC1H8tqc2piaCAV8y5PWHkVCsxTcrwck5M",
  "key19": "32LJQf9bx5r3mqTPY5WT6tJBBsPmPU7Ap1Tv3XSjGzK4idWWWCGTSDejQ2Z83pptva1tdUhKWPD8bGtgUM5HQEgw",
  "key20": "drdtrFA4LcxjGPYRFk4qRft3T5PVvspsMKoGjFqPsbb84Jvrtjyg4o9HoMDcQFjaekb1X4E1p6Z3NNuCMYhtQkK",
  "key21": "5otAXFfq2AfHAhDXH88oFoRYonXZzqqPo77XVjJoVpvh4cjDEGAEoEFvCAr4YsHrkvKv1KSdYNz14TDQFj64K9bL",
  "key22": "5oE3B8QgrWY2vamqbf7AUCvKzwmu3pDEn1J3fQTjEG3BrUXJfsUh4GjcZiF3EocSi8jMZriUurkPeQX85jg82YVt",
  "key23": "3vA31sFhnLD3dgyhXEfaUFBeTT7kaRD46iK97mH1tSBnTxdqngh7nKd8H1bJChN8EibVMynfyfTUMfn97gNbwXtj",
  "key24": "4NPLAPb6UkvZ8EbkdmYGGtQ14oGeE9D9vqKJ5VLtHKQquYXBt4tJRqbEPSA83dP9ko4AtgHYGerbRP472Znhtoty",
  "key25": "2ZySQx64n2p8kkxRi7cLBasEgDwKa5KYqAvnWKFDgND5qd4dBX74EzjoC4A191VKuAwUiLMXhyqghYE1E3THr5J9"
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
