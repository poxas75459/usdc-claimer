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
    "CTfPqr72TPC7W5Qi9QqfCWaDPYU3Cm1dW6ALd7Xd71yxLBqM3WJ3Dc6XX2xxrBRS81rGu42LZeWYfEN31ARDcBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67VFXYif1pKLwoHjkrZn5H3t6P3Fuvq5QZctnm5VqMJGwNduDEyDQoobmaZUWXu4GD5oBbhnQPNeHTw7CfNEE1F8",
  "key1": "3utmpj2YZD2crYiYU3F3zxwgoGUzhkdsAE94mrZb3irbAVjZ4TBf4wrEcUMdXQp649KQSDMMvxcoP8KqjKTwsjf8",
  "key2": "248yZ3oNx6X5Y6SapXRFp2YSCpcqNKDvKqYkysYFyM4EWHHKCHdao2mmHAx1mRg3TXEkH6VQb1aKpEdpb3pJHR2Y",
  "key3": "33hQTfua5qnSeiLC7oobSCRkffrgTNbVDRZ2zUU7g8r8z6nvduw9JzBrKys8qANmLDqnpwAnZkD54pzncQ4U5h77",
  "key4": "3znPoEzr1mq1StEVng3fq4SwkERV72mPCPxsNn2gQ9yrhjD2362LvzzYRT6YtftP7pvV8cBH8sgRt3jvKusRikQu",
  "key5": "vh6nQ2jf9ZsUNPNgqhsfL82tzFHYEpoZF43aVugQxSorQKw4j2FbjvJd7Cw1RSnKc5mw3PJmkigwG7EjsfXmH8a",
  "key6": "PiyseoZqksmLwcTXasC1JryHMnxJDY8xLDgaT3vsKbgtNviZrEqy8Tmm4mNN5vgXhztyDvzfU5383pownoUUpyk",
  "key7": "49ZnEuYenifg1ZdExnwtqUD7V8NhqqHFfYAzc2zUAzm7shL13RFrBxDpHH95hPih88zesrvuaA1d89bdjmoGGkhi",
  "key8": "5P5uBmV1jErgDBbmE2ZecpJFtpLwgUFsytjBS811JhaPTZipkeURpT8PvVc6dnMMK1tJh2dwj8ai5LwsQ3C2QLBK",
  "key9": "2MJRbsZoACrYecXw8PxGgj5A4rrNPSfRYKC8vnkUcppoxmJceNjN9KN3HjPpWZRAFZS6ccny9LkjHfqos6fv8Wdq",
  "key10": "5asnSiAKHrnT6EABGgJHeHaCM295aknAESRyFtmGjQL8ynmjP5PiojThiesWD5MLxepAfHAm575voKqkk33AqVKY",
  "key11": "5KtX8xMkpowqC5x5yL5asJGTBAFj641uRCewjgdnyn2sSSrE2xER2Cu6mikrHe95dEzLDiQCpNDR2ef94TML62M2",
  "key12": "se2YKNzAW9Wty2qqLg2EosVpzPJ8mfixmV6Xk3LR1HJoSJAvt5H2Q2eSco55W1XvhAuPRnc4nP4LEHNejd9N6w3",
  "key13": "5jryCrvpm4PAAdypRYLwEuWHwk6DzkgG3o6is7a7L5TojBWNrSJwx5D3Xob6znGSJHHwzGXusLLvFpKkFZEaqGVM",
  "key14": "5i9xDEEcjyj82kcKzKhKPecsrsepRSWLtJ7GcUnSVPSAun3pxBT7zfhaXiTfnBNppmhv5sWgKKYpz2a93UrJgDLD",
  "key15": "5TZTBWqh5czfkU84gn748U2XYqzYQHJRKfdiKMsai8kG5iu1s4Pu269yQNxheLfxcVRsp1WtEcQYMo2iczYayq86",
  "key16": "49dyQNzC6udM9Uef4ULguASHy9NbcWdkWeRkfZAMfHx1KehEecu7nTZAZw5B5ixRtuTAyfqb6tuzPWviET3keUj8",
  "key17": "5oLdgvHVSBxLXwB2o7QTLUSWbfKMkBXbw1HamamtRFruWhfyYQifi9ByrsVnXD7pz64qQhLE5M6jipaQ7qNus93w",
  "key18": "62kscXWqH96ggf117CGo4FfNZH3ibZyNkahs9wMoRfQyJoWxUpup9iCL2PbQojGmoL83zueKp3JRK9Qcz6eVbuqX",
  "key19": "5xFbxM6Q3LBr9KKaPAVkcH9vMzDfu7EXY1K1xDNb4QMVNJzku1u9kazyU8uLrGbFFEis7cExnfgNsnshPNKXir8T",
  "key20": "5uSVNqHadqxGzBWxvyVUuYe6DJ9sLJbp8zTwg7uiFc5PSfq1YqQjzoWs9iBiE6PzYYB3mopP7vT5SduEYnJukbGe",
  "key21": "M8VdFM3XAfbwZBzdkmtaETpSUc4zsoCuYFm72VPp4CAo6LaSH882mJc3BSusFUVu8QyrpszAnybFgagKnwiK6DX",
  "key22": "5fH6XKAFFKdaoUsS527svP1dDtHGogDewu8NhXhHTJriXTax7779pVFFm3XBP8fZQs54yReZwMjS27DbRHoq4PmN",
  "key23": "2q9sZgoRZBhuYozdp7CwEw5svX1CvoQ5JMvW1eaW73F9HuThnhgB48MQeUAtFFmGwM3NtQkszVYmju2WHn7UgtV3",
  "key24": "3zAJ11g4gxHtTU8FMZvbzmjfSn5LVKSKrSACEHUbMVFCaq83rfWDoYAUKqoYi3dzx8bP83YPobm82n9L2Eqt7kWj",
  "key25": "4vWMr1y45Jerukc1KTDsRs9PjW344DurmGB4Kzw76cPcLMq1Cj1hZVAULJGSQF5PV9VwoJL4ZSjccU7mBZvFZRtn",
  "key26": "2u5x3XaPhhDJbwa9J2oqRBu5MiC4MAJRpdCeZSS2ekcdJ6jnzgKeP7W4X4pFWdQoDqtbesqJqqiTGd3uNqtuzpHS",
  "key27": "4WmKgkBSyCd8eBMkwTmaxAm8gZPvic7kuL5XizUfD4kE9rMRfvtuuDN6bweceCx3EXD62xBmo87XGyB9yQfQJRqq",
  "key28": "3kx8vUynxhfkop46UF2qJ5hAxRwxX2TrBfBeVfG5Tvbw6tpt2TFNwEVLP9YMXJ65nR3NRdo4Tr7kaGuBFtrevMEb",
  "key29": "22ZcR7gpcGBXHeogjWP5VQgJ6mdVAHHwz8G7RHR96nJaeM2rPwTswsvTksPnBnzi6SWQceDtHXCdoSQryb8oRDtP",
  "key30": "3uanTT33bQ6GpiopmTuY5X9fWCUNMkMLSU1s8MUmznjqGV4BUhvV5J5PjrVn3aRLtrU45LqbqvRMiE9VMRhq2NDX"
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
