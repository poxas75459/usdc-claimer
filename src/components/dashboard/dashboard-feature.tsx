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
    "41sBt9wyGYvMg8Y75RVpJa688ExGudGgn9Z8FXAtsvXbBYZm6yBMqxTxpfBGqkpWQq1zuT1rwdJTo483Q7DtWnUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24s1eY8ds2SbVaw7ifdFfeQeKtQSu7h5ngmaVjnSdZGvQRrKJgHJD93ncxkupa1ZUjshBu7RC3eRwFPopaYfncb5",
  "key1": "29yc2CKGBXrjAv5fLz57F5snJ3GsH3KBmAaZckh1dgLXmTRLPA4xWvuaEbDu77GNjKcqahdw1wnT1YY8S9i17NVy",
  "key2": "3G9Kied8UmCDq9YFwZauphXdWRubbwVuFmg9kUkWFTzwjNQMcdpSczJkFw3xjmhZQW3N6uvXrbE3NERVz8X1ZLRF",
  "key3": "3NeNm5GXToBQvJjSG7aqujZZChV1cufZpqKoKo9A8skF68Sjys3PbKmcSVAgTjtDaiuofkN1FiBhWmEgErxsE4cT",
  "key4": "4Yuv4GqAqtaSvokgzt95nACsioQxup2ku1b5ydRL8ARXSM1ytMPcFVkNiM9574yNHKqoWCUXkuKtzidwVE9JrJB9",
  "key5": "42JTpgb2yxzYQdUJyMSjX1TXnDoudz6ucyETpvRQurkMjcWJpApBi9DKhKJxLyHvmcuiCwK7E27mJeRqVaASVxjY",
  "key6": "29rf7poj3Q9GQPbMQJ5HdMNRKt58SensUFAoYEfYA4T5vcndvL6DamZG4FqXH4mMajCeJZBZRQSK2xYz9hkwnpnE",
  "key7": "5YWGf3eQ1eaASqQPpXwKzX63ZZvvMSXH2gPKpH6TbEcsv9YemSUdxMs3rTtcJFscPrFY3chtucQdb8nrjSCFM1sr",
  "key8": "3fKHW7GA2WndxGSdvkWvCptRBR8Su3HXALaKoGeen7dEGYDTpyJe5ktSTMnHU8srBhWFpncX7XDKmS7bcDxhrpab",
  "key9": "62pJio7jorX83ETREiNi4i6LHhXzeSu52mtQUZkABgtzXKNZFRCmsWFibwecTfPXFwLcRjZB4N2c3FfKJvLsyAN4",
  "key10": "5QJVcagjpewmrgoqrwzrgjgPUJGHJUEKDPx9tpYDBBV4rh84f59tVLwcLZBsxML1YCjSwhZa4yMu51NRQcWe5ZAJ",
  "key11": "2PxEoj63uv94QPnUHsKv6o7DHJHDyYJAK2QcVXHgikFVBFpLu536VS8wTbRs2XSzP6uoDyhh4mzdTsb7jxtpBPQY",
  "key12": "219Uaw7JNVu6GUjSkz4ZpA148shfAC7FwmyJqtbqmeoBgFh8zYbezondtXyfNNLbSQFTpKrhHNxdUktGK3gVrBzj",
  "key13": "3kbFE2hSck86CeXRCBqeNpfnnoWS5AXkeA9pUhrtrZ2ZvKyFYzrLLFffnW3NxsVughjDxsSgCyrioTpHTpGBGH4P",
  "key14": "EqwhSkeB4Bo9cp76HTsqjoxUpjXEuvmDQpcZiC9QAxurVxjZwNyzqyQCCgNAShkTEvSB6Na6fiQanrrZVGdJ15p",
  "key15": "4oxtwNnV7iCiLXwU18YpRsbLn8hyDdUuZjiaXBZZi5AxQ99uMsHQeVPEcjGSjBpfTmNU1RsbaQM7hBethpzpA6DX",
  "key16": "4sAnAbajaR9VskvtfhKipFzTDdhmwDVQp11kjKR85A2CjKHGeoNKxBJWn98LNu77Y3hMd5952HUAL7FbJhfNHVWR",
  "key17": "4HDdxCEpXeyaEQJhnKARt96rKyAhvgBMinBAJwraA6xrfP92G229EfsxLqBixY2U6E3s9T5wLAuw5DQgmrUusXuk",
  "key18": "4bvzHJ7JnR4j1oviFNL6mpPhu4uoF6MyPc43jaqRAVu8t1rN15sgnZuoxCEPuDzCEemCSGikv2quxpXsJfEWXE7s",
  "key19": "5yYk35zxCzHwFrC5orW6xoKC3PQd8moV8EuiNmW9agh1MPrjPRWdY7FSkaZwVa7aBre5HCMSVD2JHEEbUsGeKA5Q",
  "key20": "2tm6Wd3CM3bM2i2kMerVYwCudb1QFc4tvwfiHAALFfijrtAZtkmLc8UMvUAkFzzoGysR29W6nnP5SFMQMDNFtTc7",
  "key21": "4YJnaccjP7jUj82CF9BfPLTCML1VeogayaMHqLg8M5s1wKoQ7uDTKhE8cxb7LN4kYqJeMrCqan1Aqm2pJMaG9y8L",
  "key22": "5GCTQCneUu9EncxBuVWtCzFEwvn78RquNQRatX2zBDNiNYJva5mXFFPuZAHteE2kSezA5F5au3gCUc1mtGr7Wbbe",
  "key23": "z34a3zyt2s1VBL4RHC3SvkCo7f7GpemmToGYA6RbDXLoxDxsaehjD8EwAzdwCbMsGDWw11cXP5KoCEym3LHh3KY",
  "key24": "2roxFRFPsUYvYCsabbL5wLcqKTgmwykndYhzudgVndE5iZvknWnn1JeT5tJq1rJD2zhedmfMkzhn5psiZFMgAx7i",
  "key25": "49MLdxzQpZkQd72Bh8tazyy6zwHCWSAbAypV1MfrnDbNxAC6VE7vaCwnTyJKb7vS8BWc6bPxLRNNxdbf17hTbSMN",
  "key26": "4ZYjarTp5URz69ymoQtSKeehmoAGtcvdjFRksPPJNw2f7vfWoiE34mkbNZYiEhwJazeX1QuDswB8L2p1M3FwzviF"
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
