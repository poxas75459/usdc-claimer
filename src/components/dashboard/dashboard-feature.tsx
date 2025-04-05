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
    "5rrxnM6PP8MN3D1JvcyjbN1tWWnB3JRp9rH158Uona78XsTg7qoKtLjNpn1UQEDzvAbyiA2HuJtm16guaypCG6iN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36qd8JLBZ1nT8yQSHu4fwwdZdVCcUyNtTnKhAhHRo8d1vcXASeJGbXmafRSdU2zCUPDQBgc6bzLCEM9RNg8cGMd9",
  "key1": "37EDaycC2MHbvuSybrfNR9WwQSu9iKJmhrN64W4arBZTJBzv4h9qjrd7fgEY53nLqTQHzS1a7mbehkBKjmPRATGU",
  "key2": "42Hv5YzFXngMGUyi7Lc3cf5kUvi5oGF4So86km4JFJZotxsRSnkSbTpZY41LHRhx6EcG6AdNv2Mz5AUAcuP3pNHm",
  "key3": "q5CfbPwd7yutUS9pEeN5jPzPL5n4SJLKVMhMy4Uci6U3r3SdjV29iJw6v2U2v8mMeWQufEn7NpbCTd5iMwXRBMS",
  "key4": "5oaPxf8csbxtoFyVYjJGAtbEMVUp8ahCPGS833gTCw2uz2YcuVi3HUFbH247bXq3eBj4Zbwpe8mVhEXSEMveWiBo",
  "key5": "G7cTBWxPDqsZpWBbkLHgAeAMLWPvXKGfxvpPfH5f2dk7mRyR2A5yohymgJDbzRpHp1Cj1Z1vdRKXwdp1Gd1Lwba",
  "key6": "WqTSPJSJMrGJEXLcvHHcYdJYAbVDjYwEnWG58WSabSesE8YvDiP9e2VYZ1oCouNpenpwtAn4Jt5rqo5cQ5xZY5Y",
  "key7": "5CfjdJudvCjacKaUghp1CYs8XgKUmwUoLRvZ4VbtcQpo5YmN3EzSJs8V56AfaSeH8ZLDAAEkcTwVkAYFYxUk9piw",
  "key8": "4N8XdXepXthGkk6i6gBwYwwAzpmU9X7vdh73MNNuM36XeyKbfss6opAxhTNWTAYdbdpuGG74R3Lcx1KANXEfp98m",
  "key9": "3vbmka6e2vA3mjDF5C5nGZVzdQo9qS6E6kmtcpoVnPtRBqLTBCgX5BYvCBLpGdFvPPEHNWKW95N6hBeBX1YpdVCS",
  "key10": "5vMVuACz8HqJQPwa3MqV6rH9dinrnnz5DQTKAu6nzUMtGDBxkytaeRR4uPDEf7z6rLzJ1nCFcZGCVw63aK6fbZ6c",
  "key11": "5Ek3cedKzsBXhuqL5oKL9PhUdnQD7jJQQ1mxJiYwWXe9927TYXASj6wpJq3Xr8TtcYTZB5zTQHcSHv9jZCKanY7r",
  "key12": "ove4uhCUUN2cyiqfK88zz3BnDSzEcaHKFMqY6vxo8gF1mcrwvRnitxodYnxwiDAtv4RpXo4m2VLU2Lmc1RMmMtS",
  "key13": "4u3o4w5mjoAb8UoUdMjztPcd1ntddeyuqDz5zNiU1ECJfhx3hjnPYD5TgdF1vJYz6q6h9U9nuodwyXCZ52TcEyhC",
  "key14": "TdfpmKWSQLHutij8FDffVoz6fAtyzJK9pVk67jgDZCvZVVGHW4qwTVD7v6iEu8PGfqh7FsJtu2jCX1Stc3tP4Rv",
  "key15": "4gkmBBVpby6YEcUeps4XRj7ZCbUcB6tFCMhvJz6aKodTaLXpBioEpZvN7qSQ1stFz582HDPeqZMRfTQaqmzcdCx2",
  "key16": "4SScjHcc8Xm24yy6aoHK6wk3wMCKjJAunkA7XerV9HEvNSvd4aV73Do3xQmf5NNVtr51SLCLu6Q8SBBnXg9ifKf2",
  "key17": "3hvtpKGrsMmvtcdxVBh2Z94Gv7xTQMdw2WsJMacpAgpec8RimWca6hFQnPSopJPwzGeAGCMQGpbf1r8YdNuVyM98",
  "key18": "2chwToEQ7U1fy4wjaRy3jRAqxZVhRbYpjYY8QDB4MjwmP7grWYocgCGwgQ7ZHdDEDDWZcLwknrn8YT2EtCXWhGWB",
  "key19": "4bZGnAHhfNbDDzzhsL6Zm9V3tYM7Skkj7m1UTJc41Hyprfs4C7nPFEZgawqHzbx2m2Zk8kRNQYTrFxiPMMja657H",
  "key20": "37PHgNr9NvwhCn3bx2C11pfQbzW6W5cKtBuCY6hZP7av2CNb5gqzpV6EA7ukZHKkZsZxidwHT11cUz7MWvW9JxLE",
  "key21": "DeiySg1oCAYLzjwmHos61ZkthDt9KPu5UuZptwwcMuNHTeHBq9cEY5WiwpmoYsptdbEgNcHzr3MXSGtEigo3sFC",
  "key22": "5DbQBDgXt7QJEtcEjLqKFL3f9qCuPVPR3Gs9DLrHbZyN6fiPHkMARhLaJhCpL9Ncuc4KeqPSpNxDGce5QR8vUnJ6",
  "key23": "sqtdoQMRXuez1agiyvaQMq3vXhovkjS5VL2jnsEfvybpN284SCfdQfBoNJrgxZYkSaheMc1G9pn9mLe3ucXQGvR",
  "key24": "2iS8NgnBN2yTsMadrU3956U68U7SHbFiCNCoxze5Lc6Z5H51JNDdxjrBF5uxBPzbbMzL7oyBCfXzUkjivnLAfqn1"
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
