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
    "67oE9EUbyiWhrm3EemXpW3nJ8ZU4Mxx2Xio4V3W3MDSVHthg7m2DumnrBZEsThxbKvcUmMNsgjeawXS8fUVvAn4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YBhrNjUi9wMpCHC7CKztJSbiN53jhQYhcVLpNWQWZarfTuKMLhQq5bgfTrdwtvAXAkeHrUGRS5C7HXNKEbefP4v",
  "key1": "4QzsSAs1Yx1bpvvF73TXkEbko7Gz6XdVAoT6vfm3Hdm1bouva1VEhoUuetcpRnrBdSzc511BBm3wJBMttJAZ3wzn",
  "key2": "5CfVC97bZ8SH6YmdRrX7x8dM6TKiASEe7oyoEZNXu9evSePWwNiF6oAcEFenCwrWZpWbwQPYVuvhdtNQSgfDbwxu",
  "key3": "4N2qrUH7vFK93GDxLHN5ocvp5eAGbYKUGdPasGuJLdWWmrR4VAr858XMxMTv77RFzseTR8ebk5KbuJBHHo1WiAev",
  "key4": "5kj99zy41zxvNGucZWdSSrtJNjTR6UxMBpvDpTpSPSjtJC5owaUvZV5vScJMPrzCv4ER2XHNXpWRsPjqEHG7LHbN",
  "key5": "3g4ahtf2wBRLBhTxCmpbW1GZVmwphxe6uy7WHKSmqkn6hmQRQPc89yjoTvE895fFx79fagEwwBpoqjTLQMruUMUx",
  "key6": "3sHatZRJY6EgwvQaioDaTJE8toeGR1juuDMg1BXpkG5NNx9pxUZQHg4U8VZFagGkVHPbmipL2rD5XbY9oRgTMsEs",
  "key7": "3zjH7XZyQ6BYwNLyxhFuJ8eQ18x7TmfmmVrt2xXSwPyxgGaZuoBCdNH2ArjUfSQ7D4zxKBaFdzBn6KP1WMvFTwX1",
  "key8": "3r2NXoA7Vh2LwdFL9CbwVUoRhZkHnAvwNRnfH8Hv3xF34BNnMVuJKhwtjrQ2QRwAWX5EaLw4PWS2sfyuVPsoeWmn",
  "key9": "5z3y2WQ1CzaeUMwq5eqGtu9cmHuSjR1EkoyXRjcscCFvAVT5RnaUsecSGMCqNGyCC5kCfuUZ6xLD7aE9Ku1iR6wc",
  "key10": "5FSWKYKreWoqAWzkkE8Ph3CNX3TAu1rPSqmhJo2Qa4iAhSohLm4S76BmLHnVr2rEosHZHDUbKykynpNXCheGySjX",
  "key11": "bbVNyEGSGmZXdujf288X1hN6f1CbQ7F4DmkJS9peUuxobc83aUGk8uXiWpGRHAciR1GJE1PvxCEE6iDtP62T15o",
  "key12": "3ZBE8dFFEoWavS7wHMJxn2jnjBhDofnYLftqpV45UgA5WN1v9sKSKRbGZGAFFULvksNc6GDw3bXvF5JqiurQFA5G",
  "key13": "2t6FUG4LepYR9QPeNA8pfSmo9UGrVn6QXKs5BLq9oywHTs2QtZi4KMBSU9K3asrELqfUUyaDmtgZcfstW34sMV9",
  "key14": "2LaHDaatgcYkrzJB7veAHW2Ym8xNRr74Wvo6e9Z7nxYAeRyoDqVQ3Kbu9YT897rbPCnErQmZgJChyGvCPPxXyQ7z",
  "key15": "4aikkag7HsHUhqbD3geLZxFRfdJgnLHpsB3UPQAM5FhtNySsCoxAUhNypypGPkoU3xYuDfsasP9MjCjyFJozbzvn",
  "key16": "3M5wd9EsdW9KLPNaC3LbzkReZGNgV2xx11tN1YpHiZfcd82RSP6t7qycCQQg5bwwPQcosxFKMictKReTtVW61icC",
  "key17": "4NgLCAcDZdACWTruYEgDHaSnXrWgkvso87aPasLWjoGzQiy3Ncmz1B52r7MN5dfNrzARD3Mgmc995W4GqnZ8YxLU",
  "key18": "4iibpgqwr34kymNieS9W24PSMcY3WmV5a4koeeXYRr5QhkG6SEHdoCo34RLwbpw8Y9Y5KVh7UtYB6t29ivrHf8LL",
  "key19": "4Yuyj7xSSagTf4iX455McS2f33byJUDCfTxwuCCRG5iNbLrubSkjGcraLygbzby2wAC1GZnt2SUTB3X39JuMNznb",
  "key20": "2AYoP41qLprwNxjM6tp6Qme8xBcdzNaT9XTGoWg7ig9bRUSfSfr1Fkgc7itRZtE4fHHzRM5t1ym45zYEPWa16SL5",
  "key21": "5dkLLNYnKLE97iCzugWQtjzumReFMtFAq3PiyeG2bfk3HJrVrQv2V3xMLB1iDBsL5DnrdDNBnGp7NcVBbFattVbm",
  "key22": "5XedeoSfTaVTAWGHgoJufa77iZB4tDtKvfnQbdUtFkxYHonV8N7jnrk4M61AFBksq68dnaLenCGiLgBwgwunaU28",
  "key23": "2jAMyyc31Y6hGV1Q5MWnDHwh8n3t4DfaTfDsaTrNrGNS8WYM5N7gmZEoF851CEmRwLQEu3876fnrHTs2JHZYFee9",
  "key24": "4Zo8SBgDhUHC1NMFKrg7cAM8PzW3ykE7eGobDhL9AT9KhJ5L96pNA3bYUpv3edZwb8keaw3qCbEq9BCKtGy66LWC"
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
