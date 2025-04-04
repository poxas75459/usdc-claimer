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
    "UWL7mbNUjpKfyw2c1PvfzsBH5JErS4h6cQUkiYAgKcgQjdJmqczpbDfm7h2UyBPnERAChKgRzUKLkSCHoX39RqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35UduEt48TySKAW4tTskZeZ5SaVLdfPjQwcmZoi4ZN2NSnSPD9o1RZXfptHry1mqpkdFystZW1rtjgDPnSP2akZq",
  "key1": "4a1sjW6NgvUv2518JwjEnvgUoVEm5FmDU5dBYiAGjMLVV6uN2dGtnEa4L7Uu6D6Qz7uDyLTD8jiNPurAgwnWXLQf",
  "key2": "24umwm7MXBuKrhNgmtyfwDhMuGTXDgHJnAUnUFE9TVA4PrBYCQyyRQ9KR75xGBpia8DsWfsrT794Jgwnve2eQ1uX",
  "key3": "2bDcQCBNKEhb91i53rEvX8ve2RKvqkkGyDxeHrNWyv1fdEC2brQyY8BEu26hfCqUjXbYWAsxUf3ooyDHhkzh4ah7",
  "key4": "26D67Fer2UrD52yEiRjiLmrhbabBubQAE3MND4KAcvtqsBP6Y7djBrpL1XL51tvjAtW3P567zPYX3DJYPcKGsa6A",
  "key5": "2Rt4gPgyBYmnH9KHuNYSgUcT1QoejvTBTnHiqTu28fGiRdEWKmpLZX9TzwryGJsqoJ56VXFzZXxGpLddnp2g7qht",
  "key6": "4jh42PuBUpNupHFnzpvPpyRnwoTet4JvxFiy5akj9N9P14vQukUWLkpD9J9YP1oxfaiyyhjxuC39UPWqBbDwmhV4",
  "key7": "h3YJz8Q9Kz6P1SpcWNZEjfwhbWUWqukHwEMLiM2dTvWRUBwern4kGGKEzSPsWhLnCZpXBjZHjTWUi7z5Pt9X9zY",
  "key8": "5soq35tXhvGBJGSttnEACTSChFdvXoCMWyLkvBArEQ5X6PgR88bbxs3uzsF4M4d1F4YaFWrk3VbqScFFacjvuQQ2",
  "key9": "38FdL2KyGKrAH1rr4vAz4bqhPqVKx16MrBDnFgn9a8Wg9UofnBpLpaEiGmvcLia2kcwisR7L35j9yTDEUeeNneBB",
  "key10": "3sE7z8tvhcqJP9RJubmrScHk4tkwBbRrU2bNKgRUX5p5jijLcbRfVMyVHswivMtpJ2KZ58D9Q7QtwU98QAFwn24C",
  "key11": "3khDG5o7iiRkgiZ9L2ufvEzwMV2P9kCYdeoCSi91ePRVVicLymWr17ZjdCJM7wzrEFrosT7JmduwVbFpzzBZJMhz",
  "key12": "4CMkYBawoGbqnU2ZFfVgMXwa5HsnLCM6hYXDbRxRfnxGmQbALGYgCCwgKMpi4E2oHQAjKMvX47op1YMjQmQ9wkCj",
  "key13": "2a2yr63iDBditHFN78Qe9qREzeK3LR32bemokRk3swAuA94gkdNKqjrg1Uv6dbSu3Xqrj2dLB4RRHbyifK89xFW3",
  "key14": "5Zr4tzmMuTcoghAAbrwxpkKxxrrnXM2Cns6Q1bks1zJ59Ujz5vj8mrgrkpZvE32PRUF9ExdCdmTGw9toXbdtM5Nk",
  "key15": "D1J9BdnpbQD6HWGqcKmMHkppNe6wr6edSQAh5wtdfL9RkTw5dSybNmkSPX4sW9mtkZbieDNnDcnBbAuhSp1CYK6",
  "key16": "4xd2Eb1jJ394dgoHbwm9qzapcx9YPhPewR4TGboh6rm616oUT9EVAUDWhy4SUBBuboCr4d45vtZ9oTaABG7W7ojG",
  "key17": "1qH1NA2DcwHcdaEKsBzxhQiT2HpnTo3Y34xueZbHmmUfMCcEjwvNknxHtNQY57QN6MJBZi4Vq35tZXUyD9WV1uj",
  "key18": "2cKi9hKYsNnAchHxTSsLCzoqXmoYX1zdH835QugzUh5fQAgsi6FucpTPBFcePgShjq7xvjjayhJjZ42S96z3T9TF",
  "key19": "5FawgHTxikAeN8PsBecu34zBnXTnQZ1HXasi5vsu6Tv5VyX7uTq5WrGYzeFPWbCyWU7jW1DD8pCs4Hk3meZGufKb",
  "key20": "37Puk8aBsWr47yZ98VuqVRWy7MxFHdnNu5T6jviWrooPuafevGJyjR8X8HTNRZwC6wf8iRtVgzn5Nie5NMtnLjFP",
  "key21": "2Ld8smd7StANMVCHR7kTD6xPwpayWp8dERM4L6J6FkNpWnTaDMs5n1ivXbejEwyLqPBpifjjmzhksRUFharaTi83",
  "key22": "3vyBVoccvkmyFURVQ6D7w4a54aUTd4ky3izi4gaF8Qd2qWCs9jfX9zcyrYHZkYXbLzChCaP2wtQ4buYwzahJ5d2o",
  "key23": "tGigZP6ee7x4FEvxnLPQSEcSgaZzCk1Nm8eEXeF3F7xGmHnMSrY5rc16Vm16kT9WXQMfJ2QZ8L3SCaU3UB8426W",
  "key24": "3Q3GV3DFdeq4sNTP36mDpJa2wvLquYyHQaF3gCBmDCUPEJriDhD8tPzL8zmjfmnWatfVtxDb7SVaqbuNy7QcEM3v",
  "key25": "4gZPsF2ArsKAuQHKbNYcsuQcUC7haFomV7sHNcQDBAukv6v28WGNQG7tArE1FyjHdkFdoUSBKFZVwQEQGztV5XAK",
  "key26": "s785icTuA2xasB9kffQWA475vGfZFeH73FZXVK5QU7MuJCvytMEU71FHvmbUBTnB6Q5qQQVf1LFrQjxWWz4Gz4b",
  "key27": "SZxDKrXKkKjMtdEzAsaqeZUTXXnGLM3SKbxVQxsqZcanCxieASFJ64YjQZofAfDT46YLdGdtRhMjFvEm6AgvPAF",
  "key28": "5oXXarhKPM1zxmRSR44YamrnyA4Vy993NJa4HZXFDzR7FJyEfZNHKB7u8QwEWDPTkRGkF2UC4L77VZ5AXxRybcda"
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
