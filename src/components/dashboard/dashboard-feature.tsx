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
    "3uzUnasaWKGpYjW34hUDxAUL9yva66vFMf4qCMgEdH1vD7PQmX62Y1HxXKhVZdSdUYie9zpRAaDKH59Yjpy2SCdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iyTh7YcxmZggWS889Ng3Br8vcM8jMeijTnFVWG5wtAJLf54G9aToBPr86wAiYTCQXwResDFyjwXjQX27cR532To",
  "key1": "3u5jJCdr8KrrBz8f5Tqz6cz4BpL4kTrWYSEwHGE2fCtKkdrNyLhcr6dM7EAWcsr3zBde9GFE9u7UbqxbLA8TybPp",
  "key2": "2Em6TKyx7EVJGCGFigpeTNKWh8F3vZDujTwuVc2jnrZqzERka8XDcJAoZ9Hc6gGwizjpCS83XodhKDcdjEk3uA7w",
  "key3": "5nLJrRbYLgiXrhcvVpgDwwqmKVUm3qKyNmzv66MHFudALKqgTEL1ozVV5LSF4t3reZpgFFak4jBmVLSwMKdJPMe2",
  "key4": "HaLbMS5iZm7RzsVxBm3ap8U48rhiZ9zY23bqpnskcU4gURadvcF9rgDV3E6o6yj5NEBcvN52S9dNQQYJtQYhsCm",
  "key5": "1F9PdkBvNKVQwjUA4aAhfBWnR4Ur663WWsygu5rssG45XrfMgXbEZHW7hWnX7T6qeQKiDx2csm5hFzJZDeTeA67",
  "key6": "29fVcMTPkn6xdpCE5CFw33KTALLjeh3rpeCLJXp55yVVEZv1yM9eeqrALnFRBZ3KLaeEvQbSBHAK1sMZbzSkCWaP",
  "key7": "62gNepqpcL4Ek7D9q8RKokryyXGhpk7iaJv5VqWjZv6Ud29Vv4wj3bcKCVyJi419bAwZRYHC6pu97jAPCvYHwsP2",
  "key8": "3iDy1U2hBcEmLyha6iST5K4QFrhugyv3p8F3JTgoCTCGqJn66aMpe9aqfyRN8kK1Z18jb5JzyfzPE38WEg5pyunh",
  "key9": "3PyWQskWrWTUM3bXNEUnCMaLJib1dVgsFa4xuik6h1EcLwsvv8dTyeT1Ve4p6uDuAvoLosrJRWmbxAktmnGWTMPP",
  "key10": "23LFT9CZ6uLKEDdrreiQYW5QQUUCDKa6rmLSwt6hiXYpjFqRdXTjQC4GdiiMXpq8GJNWs3Epjmsv3dygSAFReaUJ",
  "key11": "2TvdcHkt5HLWjTr4qYrZ6idNEKhdjge4apmRAH6KhARCzWEC3vAGE5pEQAsWLC3L2Che8NPAg7q37AfFVyCXJPTu",
  "key12": "2KmnWUaQJ4yF9zDz869RByVFviat6VoNQ4iGjRkMDvxv4XwoCjR41q1nLL6nrqrF74T4pHjzwHwgm2xvkxisRvEj",
  "key13": "5PRBccmaremm97iLQrtYHeFzML8XLjy3B9HQsRmgd4YrTLDSh4BRsgiyTGYfxEUbEw1xp3WgTV3ozDDao6zMNbMu",
  "key14": "5FiA831NGaC4hoeu2q2kT4XPGj2qpfvWRzDypygSV5GtqBkD5AEiXFrN1EwknNbWekFCfLrWFCnsCcKoWU8YYvbg",
  "key15": "2TB8Dw3gJBDxxtsZYRVYHy972hshbPcijKBRUmLh38ceZe5KSU7BczwC5CSHUj3CVB66qxxCa3xjsp73hXD4jSF7",
  "key16": "5x6e2ML3aDXyGsd89virbRgX1Se8bPcaMC7EwRjYtmM6JiXgxJthVdFDQe871BzJQmZyGY4mBgJVmEZdt3uNRnmK",
  "key17": "3sDoJgrtSfRVpKvNrRwGdyBfcAvXJuPGPNQeZJ4nMKaeT2N88GLWVqGmTxkxgJncvazZ3ziXneVZ9wpotH58nd6S",
  "key18": "2fwNSh9TwDUW356oaGnmgRjMEwVDLiLFSG3e3fid9CKkpHZunWgWX9m5VCjdZe5xdkXqbDQA9me6Gr1AwJDebRMw",
  "key19": "4yV3Y2UR8X2oWAbPm1yjm79RZC7U6PftNtUvNNXv5jQ4z7jtUqEvb8pixb3m3xGhC6UZjJ5QJxHtoiB5PdFYSzXX",
  "key20": "2scHscSsbBiPB8paoohWq7DFUL4bTRQRYrqSrnFgV58ja4pGzh6UgMEnKLUgjdCW3SbBZerPAiCLZS8oAjyGM7mu",
  "key21": "8q8kBi56J3GT6FxsMQcBbGjFyTj6J6sQySXoSTThBtb6axaRGMvzp3gGdBQtbo1jwx1pduXLmDB6KgfvNEZxD3G",
  "key22": "2YAj3QPijTddutbhETV9gwtgUCRfre2e8whn6NPhhxV3Mvs2uzP9qYRkev58q2b4sUYgtyNe4beEmwx9uzqhJcno",
  "key23": "4Avx2QiCz3neqFeTCLaNxp38iXywgTKkuTNC8XjWDK5HitunE4E47CuwjgnBzEJ7QcXennLd4GrC5Sj3XxZxXzK8",
  "key24": "3czJh1wQ8XUweduYWDvdnAKwKLVmpHvqMqP3posbabP5Szr34BQvrtbgnXPqVfiPdRwKCr36a4VZBj7qRaJK4VzY",
  "key25": "5MgKnKC4GUpkV5KV1mAsebpGsvBCj4ZyoyuNDqa49A16oJPdyZC39LYQPAsoQZFL8RsWL5GHPW2S13jrwqiPxzct",
  "key26": "5DpJn698LcBt87frH7wJHNfr4cAWAqo11WcNHuYzazakBmCxzs6cnanqMpQyY4eQf6bHZSXbrYQWhRhqbFEAEkLm",
  "key27": "66sTyFUotdMeXn12XW69BTG38h6jkySN6c8PZwJF8roTUkfi8kpShckCbQsFGt1vMsgPdfk6avZopXmiJ6XEPYuA",
  "key28": "5Z4C3coSCbrp6CPFWwgqp7U6PCaMrjXvvqHiuzCaqhWXLv6CtDgZAKBHWKEVEkizCfQyzA1UmSd1cf6DcBaZQ2PL",
  "key29": "2tT64yTZpKhZGUoz3WX1JSVFLprzcT8h3wKirLNovWbLjXV44R5y5uNGa8efKmByX99Vk6ca9mKJhbec3FQptFDR",
  "key30": "qrwEyj1C3MB9DFecNQN2cCXQubfJMnSCR7LuDJ9KMegnEabhTipunxvTJrsRnApZB2q92HNSMZPcdwJWbFKADp8",
  "key31": "51Lfg8McgPEeT64d9Ad7Y4HAzzv6M6MpcHYneGhvm6pAEPYKH12AgPu774pSpgdBwv2eCPf2y9vZiEs3XsEXHjBm",
  "key32": "fE3qPzHRXcL6WsZGmYMEK5eugQBQwaQc4uxyt5utUfXe34Mq8wgGmtvmKpSuUqUj51Ph5UVu1cMSWwQgsJngCX2",
  "key33": "c6shPf9vz6MvAimoXdD5zinCj3XcYQL8DJNtJAWfvo2dGvhmSNQHRdQ5f6ZxyRkDEHuLDB2KKkJCCjpLAZDdGqW",
  "key34": "244Jzf2noqwSR3fSgfCtaYmddrr5bbQBbifrWkCpafQ7y65e5T5G7GxQyJTHBRSncbu3wMmd6VG8x56cENLCwh8M"
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
