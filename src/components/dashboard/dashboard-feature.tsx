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
    "i9ADJait4dpdFgi1ogA3D3TNm99bbAkuKdqURWeKnTkfGPzEQyxaMJ1S6RsV4yMjyox22xwTphfyAtgu8fhUp9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TUC6DYfmLXu9mm8ixdNeHoRo1YKkBaFUu6Dr6VKP1dSC8jsz7z5zWwUPK2r35SpXnxNfZwTxPutsmMXPsEjb1Fo",
  "key1": "5cMM5z4YmPgSrqWqBHDsrHXXjkbNPwCpwCTNa7oWWZYQd5G68jg1P7oWw7mbBidzjc2UoEbx5LHUAdpV4GH7SA1Y",
  "key2": "zbhmvyrk3kUZrQo3NTCPppAN13HYAZ6HrnEtP1J4EM1ikbxvwVfBqyrhAPM5VQQvoeV1iccNsQ55Npepe1vLFCN",
  "key3": "5KBY1zNUKuDcq5SsePu4yBYU2bHvwpRCXJPZSPzAeKHgUuHe3QTWQsxrFfhZneDQ7t1Qr12iVxVh4uakwHm9JSw6",
  "key4": "5TvgYQfU9ijQhM5fAc5UGWrHCaiMQRxqedPkTTHgErZSX1BWQ4J83YNRKGEhLeYN7sSoCTvu8PUqKzcZiaMBgHC9",
  "key5": "4krEs2AHvVL2S16Z64UsGXWQWwJR3EmBd42qGZjiQ9ekF84kzWmosBAsgWaK2XPNkXTV7uPosJaqTKmkyjqZcQ8P",
  "key6": "5VydLhdQrS7rDvA6KcV724piU6GnZBEuomQNsvTBRJq8Fyt6wfw2eajL9s1nkqAQG2jAF9Cji1oRLA8JQ8idTmZ4",
  "key7": "5fJX719tNRaM8WaY3YXFMuBdQo5QBsW42m5SsEWeKzqqZztSENryjQXP8VebMpeBRG2GuCRCbveXhpWd4XZEfVrL",
  "key8": "UTmEH94dfSTKEk51szJ6d6MA2PVSgb6PzPbiyBzfZmmBdDmbYUVAUrYBMuaXdx4WpJGZdyTq68aq7XZLmLTHtEQ",
  "key9": "3jktYvmFjyLMer8d5ZgJwznnMRBEd9CsS6gpLXwH4b5Mq8pMaH52XyTxEokdqLbLEsgEquEz37mwxxvdeLxsvLQX",
  "key10": "2HRBK2UoTHamZnyqgRDukXQnpZYvtewChGuVv2XK6dKKUSfjzpHVjK36Cwx4eyigNDRhim2x6FLRSSRZ5eVg4VjG",
  "key11": "JajjrtwJi8xe8X62h7P9oq8MULWu3Rd1tzT6wTKWQ9m2J8ZHLRXQ2ziQbbzT9tApdJXJRKMb8wbv8BSeWD1pFVz",
  "key12": "tiGvNvfV45Tte5XrF54561uhbfnD2UPTKgrJcgEfZoCwRtGXC1RzfveBY5mRKSkDuLvFsJQsceon8scWCYBFwxz",
  "key13": "53YDQagBJN141JLDLSpSyxadb4AsX6Z1uuG9mhJzToJ5P2FJXHoPBNS3DpvZ1ixKL4DtWwtssGutmxTiNu5m44Hm",
  "key14": "5vRqKEUJ6KLJqgAteuqehynR5oHjuYDVoP4zGYbpCU6XF39Vwwi7cd2ePy1RGEkBX87N2LMJCJjJBmVCiiuZwUXb",
  "key15": "35BZBFhFxWt2QAdaVMzXAbzmUGsbGXuvdLtMfMayqhvfSWzAdcMjCHMcdXgKh5Qnf3s1muZAznKMQ6P9PeATnMtb",
  "key16": "dVYFKhPfV8JxFwBcQvHhpyf9B6ZgWTyeyFZnny2cremXBtzgEdz1xZGBgu2bN1WGdw97YYa5Xohwj1ce3neVxEX",
  "key17": "2PJt4b6b5KJA5rVydfAeeuJqPYAK1KwP9AD1U8APncr9RYTtAqoLuw7USt8sG9qYT4qD4NnRn11JpyJXTYbPDav9",
  "key18": "2eBRM2oaVwXR4jXwARHZYtHeQCm7GhJZA6xT17vEAYppEW2P2cmAhPszm32FcBcrUMmx7BEysBCtaHEL5wJTuB1B",
  "key19": "7xnxKvDrtBALEmsDSRJd9VEyihh3ndVPBTQ7FDmK3Y9YVEf7xVZZHk1L3VVxBVJcBsRH5RynHeeotwShetatf8k",
  "key20": "5ShdGGuBPZSMXcAAEX84ugqfKNh1S51zrdjCnVkgJqRU9FoR8wDJQo7Lh95rBt7iGDrT3EPTj4Rb4ZDnQgGmwbjT",
  "key21": "2KL8k1vrSgtmoZQVBvjcxLdzbViTpCRFmC1LpJohpFZkSaNyQRUEAPbD7oYsN76u6EBKCj5HSwh9dH82Ek8ZmdQu",
  "key22": "2ETDZiAgTJudDc2bYLXxDaCKoaT7peFMRihfXdKgYzR7uLHAK9nH7psm7bTbMC9WkTQz7LTPHQdh4WYqrdCkrrok",
  "key23": "3fcB5uXDLDt2uUk42eEPnAx92FRmakRB1sukzMMcw3CpxSADiTC83gvqGZiG8vL5zpvVaw1YqkAA7Bjn8UmCTuky",
  "key24": "5GrmD6w9uoRSwiZLXd76ACJ5Wc2MZeZZFqPnZFUJp5N3HDY14N9cQ8pG6Wigbzg5R2ubY9mPSf4USDkj92sbmRj1",
  "key25": "5KyczcMbdTgmWWjbqE2PioBTYfxk62K3cdyUD6jg6aAt3XXMozjTz367fDUFMKhGYdodYr1htrXXc9FfSGtoMy5x",
  "key26": "4q2KWKzCefwVz6n2skeTfS9WnyeqbGhCwWUj72waivBYmT6c4e1sWQsXcq5tP4EbGwGA6k5uTcqaHstHSHTCh7Zc",
  "key27": "552A3fXnSeRamuLVQ51xMr51BFhQnE9Db5XCxxsFWVwXnegPFuMvsXc3TPcMX8zop7m6X3GH2rRf5hcBAFfn4tjr",
  "key28": "2ayMPSpT3e9KrNqPrkNPN6X7YAq1Msqos4MjybHcgPXRuufnsFuAPzQfSxVbBtLuGN6bcDhfzuBChGqCcj9AMUY2",
  "key29": "34Fu3jsfxhRjBym9QuwtE6mUH8rQZ1XuLwbPKb6GmD2ku8WiLLHw29d7z7JkaV6fsG335bhnDHshECRQP1GJG8S1",
  "key30": "4Yp4CFse3fbdVFir7dZX9pJMNu1zXjxeL5KFzXxBHJYXSWRyr1SBM9V2eLaV1NzrLf6LFztdfxFrVrkLFJGhbYtn",
  "key31": "4RyoWc72Tc9iNfKjzvM24tZdTVS2zdJqG2tpgPmFpLmo5eXpmSNbRL9G881NYT6H6ashEtHDzb7HHCi7dwuEU17",
  "key32": "kuLBwNfGUYxe5VyQpjK8Kf8nchMo3VQg6A4GtwZhA3JS47yRhkEowdSpuChsWdiwBcYGhc3GsiMoT2qXH6cHDLx",
  "key33": "4ZoKXfEbyGpNaJUN2bzibb656vsrvEk3V3aBdi8WGA2gg6DqtQ7Lm3TYXj1tzDUdkyNqyxiipGqM6dPTd8uaP1s8",
  "key34": "58cNAL913zzJ1kSu9RR9FsKMGArCsUte4BnY7DhYURgUQ6gjjTW5d36u1GZXjPa2SA2zssJdsejGwGXZizpTNzcK",
  "key35": "DFvmiSxqf24mt3cLNqHjSauMYMaKejr9cEDN6Lphowg4zwQYFPuSSB2ie6GYQsH3zf3nbG9QxQc887PLDJkFBXC",
  "key36": "5YFpB9dZbKKuatF1BQZqSFv2TmN6iWfPCv16VTis3C6hedkRUDrV5GnyGx7wgRpNedsfmQ7Td1cAk1tyt8eTcNTU",
  "key37": "ZEY8PMXkUaWHhTtHFr6DyNHe6VUAAruij62u7n9tt81tKmGe8vF1QibF7wSvKqKaFJ9ieKELQJDPuxUQVjbvmLC",
  "key38": "BK7kKMos1v5CsEY6RHDZeLiRN46LfUTqmHMpgYEBbbRc4uVnW5AqidXDchqodCwU6tQ4Cbtxn289pgZimW4wW3Q",
  "key39": "5VbBvZmMjBFjqBkzDoL8VhqECVdugTBFMmtZXeLhbHCHjK8c7KvezQPfW1dEcmMrGDPg7fo7sywxcKazVjyYab4H",
  "key40": "rp9b4YhLffvgBgnLiV2nQjboh2nkko3sRkj9nH4LL9FfNUBor4odytJ4rGdpfkJFdCtGvcbT5zSJukXDwkVFLjj",
  "key41": "3w9kBMkBHkHdru8V1qrynLHcFZ7dpG7NEHTSuYUknEQ3DdYrpKuVhV9XptpzRpbFhjpNE1jG8pwkCBBJwYfmueUx",
  "key42": "miize2nEnxn5KEJCoZLdWwKZXuiuwZFv3s79q9BGKnqVTaKE9vv6weZQYPAo2EzehdMxiLqcgjwFco2hoMSignd"
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
