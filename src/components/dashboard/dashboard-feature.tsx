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
    "g48U2BSQKcDchDKmTRM47ByGpWbGuXQRiS3wkPFZ4USGXcZ63GmaGzyNkPoZVHNmW6h9MYoZyHrvRBh2HUpYi3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GAJSexmNNshuwHPbk2wybHKRqZbdRBdCL595sB7JAn6T2ssMrcmG2rTCs8GHpHhNcF5oJJ6AaDGcUX1RYcAqyew",
  "key1": "4uawdWGPengp6Lc4d5sJm7sTvK6zUPkbxkxMy7ymbYHq3HiLQJrCUs6DXTU1mtZWrXh1nTmav7sBwEG4JAJDdAtY",
  "key2": "uvyL9bz2ECecfjascGPEW3PwcadZg8R23KVNPUEiZ3rzb7XoDQNo4YvaYw8f1jKat1paHSYuz6r2bdJyxhcYZdT",
  "key3": "qa2ZcfFZHuZL6gS7eY3RVxvtN8gkCdKQkgy6WAasXMRh71dtUojSLAoRHoULpB4HVhQBVGHgTGJ7Kh5xq9Ekva2",
  "key4": "3gfZxnsqTXD2MybckyDKVa3Y7UeQArpbEcudFPnBdMsGwSXWaaKJVfoaRHc9hSQgxk4PKY9TTrQ8nrPgZHPuBGVM",
  "key5": "5hqkn94qhRrMaaL5fibGwgxjWyfUV4Ng4HiJpusBD2D2HWDoSnsqMCTNRHqUnJBj9jVSbMhWSy8Hhf2SJrU2fRH3",
  "key6": "r1LJvmrkjocz7Z6mZTen9ktBC1Ui3SqjstPPCbGyTKYnJmV4aMfrZtdU42SBKoQnY7kSGz3DsL8NVnQ8YMfymXR",
  "key7": "24DRgdm29GPAc7GKcVWBwWoJ5pKvRHKqj9EHeCxSerwXQ1DZo5PJXGd6VhjcvJ897Qruyivfav5cgPmQNusyMU9H",
  "key8": "R9v9wVvTPyA5itK17uQgdC3bPiwt8LEZficPnu93ggkEmn4RXiNvsxtEGbf6odys5PAxLazUQpi6VFdboAKdY5F",
  "key9": "4JmAy1YeLbEffatVVxjDJ4eXVfbQ87ufURr3gF62sUmad2LWuHLjNV71Ao8AttzuLV3ggLJXqytdhGvmZB5EcRxK",
  "key10": "3mQXNGmnLSajc1ttpS7vgQ5khnK3nTR7WsxXSucJ7tmFf1hS6JUADMBxL5n6esLcseeritNuZVuHQaCYcWAfhLtj",
  "key11": "UZYtg6wKnZ7DkmyPgoQYYcuKXer1WVUsAxTgYukkgbSj5VeS4wwz8nHSAZRtKAS44YufgLtgjNjdXMWGCcDHuDk",
  "key12": "eKvqWgVJiKyNxeQy7iK4ogsgbF7uGedB9btoJiLP4T6pUEfQubPECcmUYc4RzTbmKomE8o6xuhPdNUYTqXvwvU4",
  "key13": "29NhNpwj4EM75V8fea84uTH5hXM3czreDMjw2u1iRZFHvo9d6vyrzqiRJ5RZUnXXho8oydtCSg2X9LbSnpGUz3XS",
  "key14": "5Yfs7DFvjJ5yyrtVe6PRFhwwBQbTyyBFkgMNL9FJywKikaSRMeRj9TRYdfuEr3sfo5tob7236anGCLvgRhzCnY78",
  "key15": "5eeNEeFU57vMacNsS7dVySi93eX3LiH9iSzToARiRXoPbMwc6QMH1USYyUEz58UyLXLopa7MgyPqgSYEfJ17kW1i",
  "key16": "59hYv869ZJKojcQzfsMErbt5x3KEbwwmUMoCNkGW3fprNmkgky4qUpGfBKibvBjHyD8NZrphdFQxooAcbPPVUDCW",
  "key17": "3wDq5gNs8Am7ZPVNX9Y4hiBo95bTTbi71qdLHiTm7ZSYixEqJR8zCy7kHsD1zAP3zQy93yZEqmP27Pcjy8gh5P4S",
  "key18": "3D7S3YpcsC8ziCUYDbht5YTh3tP1g1BhbGLe1L7WQzVY3j6hsUzhEPxtK6aH27tfU2x6CoJVuTnv5AY7QL4bSQHs",
  "key19": "5widqJSpP9Hcpcm1cZN8NwnFWSD5oMg2VCR2FBXy6VjfsGa9FxdT7JA8m9d5uWwS4pBRwvYuNbLHwEyWcFUjBwKV",
  "key20": "4Cs2x9DrJbTisRpT2NcD1LCs72xzexU77rqrk7jnNTUpvHd83gy5mECJucZyePynZLmm7HZvtTZCQPwXHiHwXoTx",
  "key21": "666TQGRgj1HSeoqFnpYecCqBJsn4XMQn8ZhLmQdysTF6X7dag7sqg5yAzYTmk7xBHYdK1cxYDt27v2dZpKU2Hr6c",
  "key22": "4ksVL9NR4WeeZDez6K2GVJKz5AR1NFPvSrwZLqbLPPZQpsDkqR5XZhni6QHsweFe3fN7T6osPWhEHwpWC6B61Rzd",
  "key23": "4JGkgffTCpEYRd1xco7ieXitp1EiMKotCG32rKi4zxeR9si25mrFaXLWqSLtEorLwaU4jiKqMtF3gcWod63qrAJb",
  "key24": "2rET3nS7Mzyy8z8iR3yDaiwxtAR5nJZ97S3ZBBd5F3eEj9seMLe78HGsSrs5Dre8XUVDiWu15dpNRUfwXyjgNyLE",
  "key25": "5WvyTKkdBuc6F1LkrQFBmYfK9tzpSxsWWi2PcVsUgoZuGgSKz6zSPKBV9zUjfGdgFRD7q9emUr1kV2oTj3XNrGKz",
  "key26": "cxgcE9QFbsn92CDKhPTKDZQJFsvVbvR5Ays9vSUTfu8XCirGy2duDBtgF9MFGvudXs7YYiMv5qEmRywTiX7EyYo",
  "key27": "WktdvCThKLFhiGYM7HPY4n8qFXrQgxynMPGWw9kvFGDVxPsyGib2uZJ4mR64jEHDzdTEQAqF9QTBzJyQBwEELeq",
  "key28": "2eMDgjm8KSiu9y2zEhQNPPfbbxB6joDvq2YzkArSArEQLrMY4w33URKH1qNFgysfD5bkwMVp2L8FfEt8vHKcM7Us",
  "key29": "3Q6qD8ZD6cDSobmHn2yhUN45BxrFwCZ45MUcvoYE8EceqbXwcRZc4piivb5vFnNBiihRU52wpPSUE4ptu7Xp8ota"
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
