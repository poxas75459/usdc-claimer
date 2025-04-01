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
    "3NECc27B3iPqXDxGk43akPCANDGWpvP8ijfKjJ4ue7tGw5EgYg34bperQMCzsv5MR2xq1KGVcjwqz3xiYxbbm4qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33dsBScgAuwhuqa5TaAUBz4vDS2mSAJgWPfjXJAtcq4q9QHkyyo5MXGjAPzpn3Yz2S1qF4MXgjGyYBkuFcC2tDrv",
  "key1": "28KN8Fkio6ToqXjT8areHuRE1KxzJ3c2CYWo3twA2ufkgpVmxYUifMYkUSxdeWmH2Yt35ymr26kQxgCEo9ywGDZM",
  "key2": "3M655izXoFdTspGtEV31RtWUSdred6A8WfjGZY2yeAuZid5xqYFbaGg48jsUkxihT68veMJ2o5oiTrFdbcm6UbxK",
  "key3": "5LL1EWX56fqRFsJcaBszdAgfSk9y5bNJ26iUHHoS9Ezeo4HFAwjKDsVHinyH5TPisSJjvCRR4HhDzDJNy7A886mZ",
  "key4": "63CUUVpYMLDfdcuM2fq3fbZhwCh1Xwg35NWzQJXcrVJQcQbiiFVsAUk2HDpGWJ26RPwf9J5zbM1j7pP2UrSM9bqB",
  "key5": "iHM76ArVsn6PTpwGvxUZrsRGNHHisj4EP1iuD4HpAwxUXh6DAFbobrNCKtGYEgdSqyoJ6CN5mv4ubWgZjJehzYy",
  "key6": "BJv76RCYpv7QWUdy2HEibLbExe7hPr2LUBSNWUFJbLY4dp8GZ4C3dnV9ZCMR3VWu28RMs82iUmmg7vBSMjsdmNB",
  "key7": "62fWUwrro3FaoSNpnze5h1CR5fL7HRBbhsPYGjG76UaC5it2grsen3QopawVAH9Z9wGcn2QBwAN8yHs6r6RcXsZt",
  "key8": "2PY8Ddj25zjFercAJZ5VjatUFSSCXeMsnwEv2B4aw1N2BQD311ArUTvSu2SoiVrCnJWUEcaTeFRzU1mXsjnCChf6",
  "key9": "2WNFQGHBM5wuHuPVBKTJVu5zbviit12RKUCaKN6dTLXMzj1WqeQNpBKqFYQF3DdTVVKoQcWiEmZC3xPiLYQRx3bD",
  "key10": "SyQysNrVX2LM5h6wCMEny3Xmo1FeGVsiiuVjyBNj4aFc6XMArcrgxwssJj4yVXnCCbdXdN33P8YirxEYcCasJ2J",
  "key11": "3c6q3ABRWzBC4yAtCA8yGd1Tijt3ZoveqqJW9s4XRxXLh1kh9gr2mC1YUDGg5ohMzZ2PTPMV4aXtdYacNEevFVph",
  "key12": "4MZiXCbuapZzog89KVcFfEmZHQqGh2wA3MU82xKqN2eLo2h4WRo2UKukd1jnkNhZeNQGBt6xVapACNG7DtT83AR9",
  "key13": "4NwEWCF3gjgBBM8TR2XyZHZ2AzmmtUWg6HZUStQNg3Vtgh9SEwWKszTSNMVGJ9e9pm7HciY2TkF1vha1W8Cois7b",
  "key14": "3dLwL4SMqsPFHYqmZPwpofQi9Ded5z2KrZ4zDrsuXCGUu9Uzvro9Z4KxB3MDwPvi89Nu7U3gnvKzxeHnpSbyyWbs",
  "key15": "32HSLF6phcyLs4SAVzndKYf5QJJNci79y9UnRsfVo8KsKyq7ECu5H5tknyGuur1az7kgSX7w9a3X9jn42u1Qee8n",
  "key16": "4AQNbGc5amNCNRUWuP8vMCxi1zdDmKaXx9xZr3yeM2dYWSmZ82K5T2C7EdaCvy3zF8uKxAGxntHoqoSMUjoYVb6U",
  "key17": "2jiq1dokShV1ne74G7N54vRnv2Zzm89nSTcjQGA3PWjbD6amJYWgphFn17sFzu3FGCSgSNXqVKPjFrDqgAG3nmRU",
  "key18": "2h43Rerk46EAB7nuyBPbxSu899tdDirEs2rRGcvNYogMQ6j7u6Vh7hpY1rYbA8BS37aks8zXemE8N2LxfkpYfz8J",
  "key19": "4AieuxBuPKu6QXALuXVo4wwewuKpm7gZvWa8Hem7C6Ky51YgGVKnJmh46ADGGBdbRADteVAdEwEhs1GUojmoj1Zu",
  "key20": "3hLTd38HyUA78xfbr6kbYit4hHNBDB4AZSKuk2jGtY17wUpydhnRUvFF48jRMLM14u1Rdd7f9viKgFMcYPGH1QxQ",
  "key21": "1PTxc6EgZGSYRz4N4QyY9LU81D7vBZq5iUzhgWdYdd1gug6BMgkpXDbxkYHCNN7HtpJigYihWQNUbmiV8bsSoZF",
  "key22": "3FcWQ6wP8hahSeJoyrGvDrLjdiHRrLCSU3BApJagDMABWyb97TEdZCwBprVV4jc2U9bgsJMzqkUCtrQWr399dJUr",
  "key23": "2t7SvFcfX7L4ov9PEyqczfT2wMGmquU4QWdNwDEbzpzPmNQe28kjrBFb7B8EWG4aHU23Lwix3git8vwUg9yDLGsT",
  "key24": "5917cQQWgrVXqRHP81R8ZdPHYwKqCasckLhpNcZcP6vXkEo9Y118X3FwCBN1hZViAiHFzmApkHYVWTbwA1gSBDoC",
  "key25": "4a1XjaRSgRKrHY1SZPsgdXkr8StvZcvDwKggMgfq5Ri3jEau64f3jXVi63NjdzFmPNjZgsgDWMqvKhCMguoHUSJ1",
  "key26": "2HZqUaddmQtgSqtNbUf8NnFikFZTicER6e6MqM6W6oz31Q4PBzY2qWGcoDzVkoTafV6mRBZAwRPxA5YMKWikCodv",
  "key27": "4vPMngXMAcbUdQsfwYYxLqCvs9Q1HrgBaZNgSFE3RxrUwpfe9Raed1dcCgaeagMWQ9QQ3iJqCBDmLEcXvqzdWBsd",
  "key28": "3HmLnoATsiFydKGtBbgKnsWjGFBwgyGPeV1PUjZZTCKo1N4g7QDVeap65qtsdtJq7np44b6k4teMeiG7Q6k6dQ8D",
  "key29": "4t8oZjcmWCKMnSPhGvD2j7Ffs4322Noqy69oF5LxYJmQRGbnAJrYC3h3RhpRe6CedB8uNtdiSPupSWVBChQkpZdV",
  "key30": "3BrX7GuV4BbusZy2FwE8cJD57CGoh9nuieoyS8cwFVBkYSyDGsM7HPDjBGyNxMaewJsexPqbHCCyiY2D1jRyudkD"
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
