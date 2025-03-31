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
    "NzLEDZK7oFkQAAxiM8EmhnJT3Z7kMXmzmcYxazdmPYYgTuY1HBkHGMQKtcaPJR75ZFdJFD7p9qs9RKWLNbxQqjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YYaFZkX1jamhv3ESSZMXygMD9LY5ssPdPAUU52HBmrfk8YBTNxZHxp2MirxiXfPDm6DWwEzpp8oqZvw8r94qugz",
  "key1": "3KUa7xnZVNRo2c5TMKXeywiCb6HEqNEnWQ4eu88d3eDJB8N7mueQhGMqRHVEe7522gHNguVbwvUQUsh9YQgBndgK",
  "key2": "52kq6yK8yqVXbnoCFH8SPrx4AAKbVvdb6auPuNwFv1szPLAG6pihC5ttj64WVN3Kx6LE1NirvsQNVtG3ZDMTvYh6",
  "key3": "315FruoGaLnzBMWrk2vbFK8tjTRUm3QuiNjyMXjLhdkqf3EF8We79c6Gq3jXiwEmRFxLXhSLM1G5De9aKpDT33dh",
  "key4": "88yWnN4E6SR1bWzYas6mC8jwVWYxmZ3rBHqpw7Fm9suT6Cd5X7ziaeUWX5Druvt7YVKMJJ8tJrPYg2G2J5MQiBf",
  "key5": "4oarLsZj6R46rS5jwwTAoLUBu2VfgpZdghBdKgf2TnAHvLhdwDaJfKe133r2oajHPQw63vhwyHWfF6Dyc2oqxubi",
  "key6": "23K4HstxthSNM3d59kD8gm6VmiVHAE2CpGquVSgwZ9M2G3p376ZCfShZSQkRTnPgDBuPj9G5PcMdEFeHAyeWDtqR",
  "key7": "3X3rVxxdQ15xexhDeHdiCYuR9jwNGEcr5snt2oN7UCyicrGf4DHBnUNa8qGrQyeYvm37Y6xgG12fiBHGLCxFmhkr",
  "key8": "unCzcq9mV9b9HKXuUcLHFcKYKuaqcvBdhaYDkQu4iAu2EYJNssPP3wg54MKgh9725EGPZXEaXg5Xeitmj2B3uwU",
  "key9": "3DYfR2qyToQvFyCvQuvRjF1J7NkHnjTGKoQKKi7xNPHsFQEiqUNtVAb4EHQYEKuU3f1Kzjn858gXbnSZosKoWxHE",
  "key10": "4kCTa7pMmxvPG8FhYnMFAznD36yReq6mnYBnZcbjMaUFwq1xZxbb7VoZEKEGFKFaPBGow7L7N3ATpS7c8xE6zPrA",
  "key11": "4FkcA59yyZKCKmgeR1xowZcT7hCWRSL1StMrHJy9DWgb3xzeznSt9zRkbm2Stx7yjp65wfzwWHdQrH755rPxeZZ3",
  "key12": "esKWFtFwf1zeRUDFPLwLJTWRSTYC2PJAy3zbDJxRH4nd2ShiH8XbEfCxN7KuNERB8KQMEsbjymAJ3BRdVaZ8Wj3",
  "key13": "4njmRKpn7aXudQZgq2Jcwernc6GG11v69zHYv1XUkkh33Gs6scfZhPg212PbLTdFCyd9SLboZY3g9FjRSrzixebH",
  "key14": "2VqqkNqcXxU4pDzkH3FG5rWbiHAp5dWW5AioFPYtHbpC1arhJMrDnMHcugSBFxkonTdSxmnQQZU83KfmsYqMVjZf",
  "key15": "64gzTAtxYQGXR5LT82Vt4uvfYdEkrKjeCjZh5MrG1vPcthDYyGBqdFVBhhCGqh34SuPnMCozXEXYf29ZhADSAZ2j",
  "key16": "27KnW4RNRYXzEF9ectzarSuoVfmNGWJzcfmg4Vs9VqvkCGHMn6BzYvJqvDP36dxHALQwGce4y5f3rqdRtAkjW2W7",
  "key17": "4j7PPwsJHtM426AGjw5vpawRVe22K3VSsK54NTkPSLzqkgJnLbuMtfLvh2n1CzrNz9puKG1BrsbCmk5bZ8Z4gPk5",
  "key18": "3y62JpR6dn7DYLUU7vBXNqg3aKbugAUDpkuXMeECfdqvRymCZFA2QhzdNCNfkXZV8pTVJauktpXMg9JRSCBNJB5z",
  "key19": "eEwxXpcnXQ8uBgaY59w225Yu4TKySY4FiLBsWjCu8Gp9R3fe4q3qGH9hvqxZnUZMRf25SyzgRuZiQn2MNmGuVqS",
  "key20": "2PZD2EgHm2ZSkV4sbc8NRk4NvUCM3Rf968WB3xVJfuE2n84du2iQ7XQo1sh3q7FchhbwSyxfBRipv518YCymv4Eb",
  "key21": "3rmqstZaHSr9b3yuxW33Jwhv9HkC6fS9J3fLi51rfrGCHgiFb9TtKjKNmP7t4Pvy6YEkroi3svDggPHKFLD62fM6",
  "key22": "2zrQqTrWfo4scpLX8vw1jPN9bfJLsNwRAqWXQBDNKgB9wWZ4UZAwnLnm6AyNTu91GAq1M1c8SqsY6exa3Tx1CqoK",
  "key23": "4qYGnk2t4tMQTKh1ivtKRoWEVR3uN5xwtwiGcnr6z9hnHvncr5g4sTPdZwarmBCRPRfSR767ZU6APwJKRpdSs6zX",
  "key24": "2CaahS2hfHtg1pux2dHuUZAuXinchmCM8fgs9oX4GQ8gPuiUQEHFbwVG6r2EhzpxwS6uzHyvUXTSADeY6EXGyZbc",
  "key25": "2V5i2zmmbfjiXyzukSQ9c8hv189NYPvxZzCjrTJs6Kr8G1c61nZhEbrDh5WauPgB2AAuaDADB8GKQMgHoyJymaLi",
  "key26": "s3WY9CQUAxeS3tbWoaThBaLWVr6aahBAENd5tR3YEjvYwg1TKXZJuqDE3ERHyeztApBEDeUSWDKtL9mV9EK9aGa",
  "key27": "5mDvuHfLm4GqVAAdUPH4WuLpzYvi4wCKHR4dUhJaMpr5RTyk9Pkdr2Ja3NoZgXq1VxGZ3Sa8BjLet7TRQ8E5zZrY",
  "key28": "rJUTWrLDQhWkLk7CkBfhVX58aJEt6SRoXXMkY725oEZcVM3XkNRDK8yjr5gnzhVKS81JcuNsEMypmMxBhrKis9W"
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
