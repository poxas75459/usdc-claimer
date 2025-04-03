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
    "5yxwairEDg9vc49sh9kgSymzYcDXVXnYWUV7NBYD6aWj3CHYd6N5BoQcbyFy4dzNQ4nYo78qBzZfQBaP4GoWjmpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wNwr67cAFq39mQU8uQmBBPRbJMyQbUX1rpBfwAujLgDUK61KhVX27Ao7HAw3uFeDABv37Da3oMdySYHDEmhhryW",
  "key1": "2Y127T4wX1i8XtVfvFVpUTmuo5n7jkCuwJxR2ByRkhWDsebZAFQodAgnw87PyfSYrU35i5ohoKGKso9XPUy26sCN",
  "key2": "5RgqtJx34mkkWXpQJUZa7gzX3hiRFjBM3LNDex4uYWqdZX5PTyVdz6eaCQyfAQQgaN5mqiuFwfYomEitCV2ynyof",
  "key3": "4YNPUTjxYiE9X9DRmfEmGK8s9pGuSwVg621aJhDyFD3yNDMJSsi2nkA2TPCiiXk5VC22ANQ5HGF3WeTdAPUNsLeo",
  "key4": "3FzCA9Emv2QiYxJXeHYxCp68bRsqbcpvPpKJsDVeHjFTKr6m51sc2ta4bR3Uz91KSQuLrr7iqUAHsZGYCEDBxVZi",
  "key5": "2djiahwSLoQbLg2oxMH3m7u6tMkQRxzXb2u31ZLQSGG3NejYnvqN3kkVwr1FojMBdksdoqvgN9GBzzsS8esk5Ku",
  "key6": "4Ta7Pz6yuhxXJ81pUP4NYMdWTgd5FRJqUL1bXMrroToB23yzrsNQWbCe96dcWHksUYBMio5Smn8P1fLNpnTGhBJa",
  "key7": "5CkA8dbpqERkqByqBavh4JuFzgVcxHPdvCFCwERc8NjBTF65JwwzSRJBfKBvDq2HVfkof3pYzNByZFzvoqaebPzT",
  "key8": "4D1BTcQEM6mXvTA4BNiC6E3qQTN1mRQZfMh1PXzyifaAfmt89co7QoTKxTUDCtacwzS4isFT83mDqXSE2GEPWMY2",
  "key9": "2mDrCwQc63qqPptUyzvZaSjXng4JzNK5uzhb4ej3q8CzBM2Ge3cfvmiEvcmYEigVhKNwC5trCiSDVkruF9JAMe9J",
  "key10": "2QjTtdnvWSHF1HpWKZXirKoWDFLcNXmg3g9RSMYCDaiEHG4CBni5akP2hqQ1XQsYpTDNfELeAvysRzJZceZY2Xmw",
  "key11": "itKomKeacZEQUdSj6JAQ8yPuFmgHznq5ucp67ef1CrMhncowDE3QLaKNXb5mbLdjAgoYfBZeKqW9snQquEXFZis",
  "key12": "4nPGuovpsjWqvahPuNLqczSwgBen7S2GofnqCnkvZBiyUTwh6Eef44ezsktuQ6ZmncCYDtcPGmQKHHigdK65W3a8",
  "key13": "37P9RT2JzcdbWNNYRSRew4R3rorzvokNNMdZz5smxRG9mZdoMSbjuVZS5VYP3ZuQV4PvTeE4Ap27Jha42JQGzTvT",
  "key14": "5z7BPakPxJyx61ktGJSjDABxM9dZtgkhzEGxZofnn4geQc46vif363mDWkevYAeHAsFMcuVDdWVDcsNVfB36kRFz",
  "key15": "2e47aWSKPbETBzH58FFhQmgYfsWpjcxb8rXyWc7mpruttK6gq2aFeYBKnTyHWor2N2oH5uKBrENj5UUPjCVD7g9U",
  "key16": "64tzbpdGsBu8u8RzmuJUEuLahHvAe8P1XcTnsxTks9DvdQ8v1BssVQvuaKCPpW86ER1uFmPh7xKt6Hx7bGFYJSoK",
  "key17": "25ERqLqN1h7hjQ5mTJtVzHRzVuwQgf8ghQG6ALo5hrqAAtLwazsKWpZVicJWo1jHVfMk4TAfK9gBExcZjLNsSeo7",
  "key18": "4gLiRHKuzHCYsBfgM1wYVnDrQQwaL4dkV9dfemGTCKHYE7hUGPg5TUTCgMYzY92Deaanaq5w6BA6k5rirWCpoVec",
  "key19": "3AtSycXi8sP88U5NjjF7nQMnbh8fWvr6j4b4H9LWwUthBgowL6BvMGiZFNXHhyH9Qurv786WJD34us2UtdbZw85g",
  "key20": "4s4j974gBPXaczqKcT6eZ8mEmfpZH2gx1iubAegpw72i6VPaQBmxazX9YHsZTDiMGv3obZdx9FiPN169jM4524nN",
  "key21": "txxgxKCBv9qZdBTuZu3BdJNSYwtceJEBKhTwDgEcMUPS1vzFVxHgEERqCgRXGrKV8AbAFAUbEC3iptHQMBhZddt",
  "key22": "4MBzWKfiXzBQTz7yycFkPBB42Uu45D8xXMLYzPnBWwjzTE1HrreZsESh3xrWCKi3GRqZQpUEzkb4C5oUQroVKFNS",
  "key23": "5SN829xT111G9SVePqTAhEQxAEHaxofU9AYxfTkzex8V4mbak2hT5Vxs7yhws8cauDKaKqvNkV6WUdZDqqHW5JJu",
  "key24": "1AhuhbZ9gD9zDhxQPAz5j4XBZBza5NJ5a2nRULvy3iqRJT5BJGhbuAHfyX9u6UK7auyETC49BjXW4Aqck6YeKnb",
  "key25": "3nLhSDkTrRmqzEQ8XFnMntyFvB3VnMCYWYJpkhzStUurvYtb8TMKTeM2582W4vzvdLNVSK5NKEZwNegj4sKUpqFJ",
  "key26": "24biPpi6x8q4C6GwouCL43HaU64ZHQfY3Q68zinjTfXoGzNUu1wTN5Z5yvBYu1by11NTeVHtKNbkbHAYf88Ef3ix",
  "key27": "4hLBNTRjHsYcLzkUG1qhHuvfJpxrdthu5J4h35fRVeeUZ9VLZqC2oMSaoAQwXfkj2XTDL7W5CDYUGNThWEghLcyb",
  "key28": "2TnfnnWY8yDf46DHUKMrBjkMAgHZJiV6ZxP31eMrKiCtqRao9YicZbNM9p8KyKko8hipTQyq9iVZ7Ceh5BCLDSGi"
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
