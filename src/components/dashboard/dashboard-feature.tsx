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
    "2bCaKH52Ff3K7EmCgPW3qHnmk5DQD11XaXkxQX1RVzTTDDUrgmHmaaaASHXwotvjPHf96X1gwUt1wHv4F9PjCPj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XBeiitizvYQCUcYbFZmfVCkmtmhorZbGNoJxpn3kf7WdsYtozV6r8b49HsG8H7xpbG4UiYjTEm6y99EKfE2DqNY",
  "key1": "cp7JxA6mnCo1hZXpsx2t14ZuHjXgWnus9A2E1jRYhDfraFSp8CLMfADwcqb3a6h3rnFJq6YRRD7fAB6HDovnzco",
  "key2": "55gCmF1rxWTwnEA9urPA24MKyiKmGPFwsKMs2vDPTPT7dT6XZyKEeiPv6HHSmN8FCQYVfGZZhYDkjeVpPH2fx78f",
  "key3": "4hC6FGCXEkzSjfV6F9EbF8NADhpPc5wYscLnndAbKohVqZJEbNPDeaZdp4KTad5Z9bGpks9saQtZKf93PLQQN4yJ",
  "key4": "5Zhy5uxwjeZnbpLsG6spzDqkNsSv7zgQ7uq4kHziygLZpyQdRqa345G8TFYRWLejvKEtRtnS8LhssEg9xfwwuPFE",
  "key5": "3kmTpiftgLysQ9BTmy1VpvmN3dwe61NGALdp4zo1mTDXTvJC69EAPh5iR2Qs9aFcTRKYsMfwLB7qD7hoBfsVEWRz",
  "key6": "3Tz14FXJPbdtdQZZwaxNrE2enRv9yKoGBk8fK981zY4J4KwkMX3eDMRfhc2vJWMy92viwTdLCu8uq8F2RfnEEecn",
  "key7": "3yLefM5P81iCD9NLEJKLwnfDLj4UrtnGxj59LhsGKhwkp88YYJbaYdH65J7XB1bRvGpSoyTxAjNDamUD2cGcjV99",
  "key8": "2CMeDtEuAZGUbKcaf7EVaJf4zeCY3p9rr1s96ooRPysi8HsmekQ4CBfx3FypXLabzhywxjNfS2oAB7keaMoZxB4J",
  "key9": "4AyD1cZyVfZLnorF5WDZ1u3hfH4iM8s9wQTc9amMrZBBdyBxEitEzZkpfm5ago3VmJHDq9fVTy36abRGh1VbrsMk",
  "key10": "3F5TURb9DsvmdHaQsuuLChpP2Vvzhf3p3iNpgcMZU6RFYoaHjmcyfEm5TQVqmcS27A8ZjzfQtsZcoJNExj8hT4tY",
  "key11": "29nZbjtbAPXCrQHpAWp5nBmxP4jNdvqbx4PPnLhZsycV6ovk6vXjKPX4VSRizJixFTSBYpTUdp2noegSoKbMcb3G",
  "key12": "5ZihixgU74E5D1MaPAPPMk8AsdZ3eHdVzbtkAqu3M4Mxk3aVZjNjFrXF7anYhoAu94PH5TFazbVNbchb4y1BM6mz",
  "key13": "61rq8mF7twAFeACy72cXCkMT9PVHsEzikrahhbYNuyFRZCdpN5c6qV2Sy8jsnSZ3t6UrC2Km6xF5qUXjnYRmAYMb",
  "key14": "rpx2kNPgaWZ2hstTKvDBoMS5mQsXivt3Lh8Y6qjVeKdrsrjiVeJfNNNGLijcoZLm3aWKH8uBSNaWs8NUnx26VzD",
  "key15": "3cDVsm1ATKwNSpapQaraWASYUUX5odEqbEr7ZKvGhVLM2WrHQHkRNGpzXJq54E7sVgEf8KYunCSEgDTnTKBfPU9f",
  "key16": "3iGnHxvH4Q5qqLDeZoyQe9sCZDhbuC6opcCYUnbAWb36jQTSyYNBPqA6NtBJaNhuBd2dMaxdeDv6jeD3Dqe7SpDW",
  "key17": "v9vy8Jd2NLcTTL4ysJLUmzQy5EWhmUZoDWnnX3Hdd9A6EUbuUJaAFw8Pud523PkHoLRyoLH4xNmgRBTxR3ZKtSN",
  "key18": "fy5JQSokRUTTcinpq8XJYiLFqaowS3KP7dC7cytfDtqEgXiha4H4i1J9hSTqwqEJKspt5vhkor9QmQ7pbay1uKH",
  "key19": "mqwsVUfkcfuXULa6gZnEcdAFHjSP4Dyvoj7jSMmDuNXMPqS7XjywbjBkEyN3xmumcngLNqiKAvmVw7cL5J3xwVH",
  "key20": "H3HAHkB6xrek4yFi3cD6xnoeNFvGM2JDVw8AFpEfDNt72mMrs6DAP39u2Z6wRxGnPh5xDZUBFs2HuaECBaKJ4mm",
  "key21": "AJr8CEMLy5jPyBU9GpMZLJEABH9N1BjZMYs6zvs8D1FUPAtgLSBhQFx6kzL1F5MkVBT2uw8y4KWeU2DqW5cGNz4",
  "key22": "22AQrc4QDXPRJF9YJvhV1zxTSNFoaSy4trDMvT5xm6ecJrQePFjCu2TKJHQb1miZrCbFAviaeos8SZsYfuKzrGbb",
  "key23": "4FTPcXdTqHQSTLPcNiqErRhxBuYRhM43oaV9HAQwZ3KRpJ37nrY79RWfR2hHdXrgv76wPmZAU8dHzXLmeLzyLE1F",
  "key24": "5tKNfmS65hEvwk6k9gr2Z8KqBAWSrSEqV2BRXWLBpua8BoDE664cVpGVXnEfFNFuwnJqkGhr3QgeUnQzXR3Y2cUa",
  "key25": "39aEnq7HwydskLpKXzzUt6YyctFaSPxm7qo4XY4P9aGTn9QZcG4uiMV2DtXPGtLTSnXcZztspcbDCVyxWs9vvK79",
  "key26": "2kdcA9RCQCyCstgV5A1abKRTxHLq666WY2RdMSR8JWWEiaCtEqkpFSme5GPxpzkhcnz4tgHNsaVmFuxDDnVZem4B",
  "key27": "5H78bWcPD4MnCbxcFuLyXcB9SqnBMYa8GoLV5StoHmzgLKTuscdUE4Gx7B8H4oJ1zqGEAyV91KtMkpytc4PeCncu",
  "key28": "41K1xAhoACTThjStiPT4dtHaMj5zjyG4sV2jhZ3jaMt7hgYwbMesU9qdjLTJ7vKTHr2sev5JUvUyZXEyBKvDiNRm",
  "key29": "3iHV2LYnfCn8qpBHykvj1LnzHygMc5wq2QgVWbPYZN64oXXfEMDg2ZMqN4LuWwnC34jrh3XNH4tGKLe5uBLEWTcf",
  "key30": "3s9n1hfTAhACB2uQYc3ZpV85Jf2ha73jXRkLvBHKpGndCrmyUp3GQj4FtjXGbHzredNbLg7J6Nz77NccUupYZbDs"
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
