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
    "4dfJEtSFy4J8PxhRmmBtp3tbkHVutTXbe5g2aaoS1YbZ5TDQP4pppujmLAPFazyq2sMf83toSS1yL7gPCym64eCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BWLW4VXCSChjtXadC11cDyAavGmHArHpZh2rQTXdETKUFkn7q5hJGhXtf92A5w4SgMQTXZCG5ybCLUZS5TRgXYc",
  "key1": "4iQja11iWJcwtQuuYUkk5N4GZCDVaju4P1vsRJ8u4WFiihKa4PAoz4BMPZE4kFQVtEm97qcMvHwmcpD1zT4NgWp9",
  "key2": "2N6nxGZ3wuDHnGGkrVPiTwUDutJccrT3CJEMtUgWdQ8X4qwADn21k99PZZ9KJy2UGbCLmCgp8Lp2KQCFyhmYGHaJ",
  "key3": "56VtbeVCiJLqwtkQCo1Vc94iNLJVR9cyosYjXAVBdGTms8ks7F1VVPpDvqygBxj1Gz5Fta5u1wgGgThH9zKeA2yc",
  "key4": "Zc33BBD9gXofNZnrhizXBhZkAaK34KQsUz9DmY5MkhNEeaKgggE5BBuD7B35ytjsApP61YeuuGUtRm3ktSGKYDo",
  "key5": "81TcYcFHNrL66WCLnJ8HHzQrrK9vsMD4TH6JtmrDg9xJji72Az3RVyJxPevr8rzq8Jgk4q4UZ3j8BapkCJck51f",
  "key6": "wrhQzX2JArtxE9Ciz6EtygbGu4JCJq8xMpNuS5oVCWYgW7HxQJYqUTzAAJKusH8CUXAwA4hvJBnAUwr6qQA2TBc",
  "key7": "2MiQKCAxnbXiUrGqwgaodAzr7qMcmpjBKRv1PQr3mPj2pCMkeiXHRhSirp14P99gyr7Z8C369jW6zDA2P2xxnZ6U",
  "key8": "2MHMHUjH8AmrUnQSQJeVGW9wZZw2tQnwMvqD9kCxSBAzCWdK1HebhMq3kUvaYMF6QcXrPSXGqzKKcq1sy5YjVXu1",
  "key9": "2k7seBAuzZEpsMH8jnTkmVBVvYa7tkhMkRRKbpjQfCv75GwVhfYkVPpyBYpv812xQ9tYm46q7uYyw9ekQ1YDJzHz",
  "key10": "4sMm1GzW4Lw9UgKBtX3PpkW45UEWMX2qPSNy3t5b2KpwQ6hpVzBNJE2fV2TkS8f6HXTeBzV66bG55FVZg2yhNRd9",
  "key11": "2afUxwRRdxEzmcM2KTtTyN3r146tSsx1CsNL8MY3KcioEBWxZdpVBWQf7h7E7CLjx11eRjaSyvbpQGuJxKBjVK82",
  "key12": "ZPn37XDi6rZtKah6oS9DrZ28yD1PZ1Mg5GpCfvdKiBNC6MBJRS6rpcs79dUJnWAa5koyKNXuQ6xzaoYyiWfabv2",
  "key13": "5sUqgKnU7wif8g1egFoFsi92X7svQgyXeHJ6rGDmoFgmdcXE5awhZNCM4wsdxSKPQz8eZxZWptqvRdShNmvnmn8y",
  "key14": "3jJTTmN2LbN4HDKeJDnWQJJq83x1BbDvni8BuTz1hkQCmo1XuMr8EUiSxma73uMhf9k42SvWybUNJkrLZSSALxA4",
  "key15": "3XpV8LrFaAKCy3qw2iwF7UWq9oiFzrgkMTDcsAekr8VXdPmALnKkYYa8snwtCD17S5XEABS5qbBVjbz8oTK9XU8E",
  "key16": "4zCEcjMW6ut8dpAHJhm135fPXVmz61nkYcujRjuLNaMTnA8azQ8f2fnisXWS53tkesWTs5eGYbb79nmCkt5vuHm3",
  "key17": "pmRJhqePGmU9QaHEZXajXJMxiuZ5D5jpNsjFe1fFe3MVTcSkVWFVEirXknBwKo3fUHeh5EA95U4F1EroMEbAKi3",
  "key18": "E9stmXPwMdSusBUiB46frekxk6Kvyhq5wsAggMmFDuux4QWShzN86ABFPv2kuiQaAPYru2YfwUgarEuT4cAYsuF",
  "key19": "3oPRVnLiJPZnhHKKiGWYp5MfW1pMEPWZL2WRPM3ShVt7pL61fECobmXMAiEJDhGibrRcKmBo25E68E9carkaU9L5",
  "key20": "HPKRahwZEAeKB7Zrr8KH1prjAf53KXuGYJmjANTwjtpSWGCyZdxR82UqGbHGSfP2u3V65gbmKqTPNx5ZXNRCD1c",
  "key21": "5XLLPG4WV6bur1hGV1FFcfMxnSWLhJCoz3KvL6RHmWtUrTiE1cEcdVJcbxqqzE2dk54sEsYjrkiSkX9VBSMtz7k8",
  "key22": "3yynjRFVy5ARN1AM5FzxD2276xdMEJoW9p2zGZjHueG3DcCpWVCias41D7ngJhjYH7DbSu4KUfrRxZmzgVr8NHXs",
  "key23": "4z8x5TpoRrKmEZat6vujzDTj1sJvdEJXvwcvSsNeMKfaqTWeXwUnPTxjuPpyassphvijaaRfSdxWPfkTyXBmpGJP",
  "key24": "e45fSAmWuzQQ8iZXVUa5jVhVBdXdNd2cH825D5cRwCbm9X7YmWEdKVuGhyzRCuWZWUqztrausAQdfgjRER1tea3",
  "key25": "3syWBWFxKjYHTJcaFTkh1Y4Zb4wMkvV28e248MEPWkxqnvQfFuy6HVtYr8HDSr2nyP3WuijMxQEfibbpgxmBwsNP",
  "key26": "512t9yA4jcGxAVjomNA4D3nDRoMVwR1MG3611oZZUKrxzfevW8yUZWnZYh1QP9Uw9RdftDXQwhP36zjA1KQCJDa7",
  "key27": "61nMVmwghCeimJK1EygunwT962gP8CcyB2U3ZFpAY4jUMvZ1d88ikn9PeVPVjmxwunC2AGfHE76q8JmEa1cQomS6",
  "key28": "4K1MrDC7AX1bgtsMm3abvM6Kkehhpw2zxv6EEg83FeXaXU1H3rPGEGsaaywvPAYqvhbGmpuD5FvLrpEpc14n4Gbt",
  "key29": "35gUbufNqR5QZrFcU5s8Q6RTwJkCnxzazEZadGYWVmBJ3ayrt2BGJnsXJ16b41HvAZ6FFoAbx1fPej2Lt7yVVShe"
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
