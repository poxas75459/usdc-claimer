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
    "5WguGe7pRYLMMEUsRCGCCzhT45NXdXQFS1sTKBWqQSxaAd98j5i13aeRaJFHB1yJa2moBpiSUZWkJXiDimcetkCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vSBP6a5Sc6QiGcdp4ZVYLd4Bfik9NziiambkYcssncP9k1dUgzhm7bem9NR1eVAHTneTgnqZax8K2hu7UXw2jMu",
  "key1": "5qrfmkSECCYxa754mUdpDe8CkGAKu4yHq9Gg6kwnGtwtXCHtaLQ3tmjNW9amEgAdzZEYmpfpnKM4UAGoBpvs9ikb",
  "key2": "Cwt2e8SjJZY4LrtXc23pX4h2QMNDn2PWPnuUQBUafYnEeDHHFBhpyzt8JoavTRW66swP8bZMuN7nF3vjrRTRer4",
  "key3": "3TRvMrqj6f6HWmfrFLXg2CD6qEXKqep4bojezziz6Bf6Eb4RoBYbq7Uqya2yc28rC7SC7QGwUqMnfXNyLooyiWz1",
  "key4": "MgJHvfy3oiuwPxCqx9TKaTMV36XzeCG6UH1C4BaDKjziDaA49NpLrVgnHM3TYhe2GPdUziR53UtmZQr7AAaxGLM",
  "key5": "2dcrAVQ1NHhN5Lig9tcxxhAp576LK6agsdgmAq7btwuuVUQiuiYREQW9MaDHtfXhN6Pe13PiicFGxuhXAMdvjKYt",
  "key6": "4Tj2NZXDCsMK2sETMmMj8AGwDgoYo4UhVPn66uEWSdzncLg7X26yMA8SK3ULZKTovjC9utsXzLpo3GN8sS4wNszt",
  "key7": "2SGUZH3saLAZEoF6okkmbXMqH22pbfwqem3GYgnmAoV3M5DusDuoY38s4S5NubabMs46ESPhjXPJJbn62xM3m8Kz",
  "key8": "37RjDL3esY2GSv7NW3HJ9kFRUmM6UjQ2MuBQGu1QUngw6t7abipin9yrQmpDLDzyMwo11aHAAUUTteZe4C7xBYHn",
  "key9": "4dgNjy3tugYxNYU1GR8AuPgWrMFcHYTn8LefwUmngX5b3iWyFyPvvcLiS39CF6kMD5m1xk6ikmcS37aPAVmsVG3j",
  "key10": "4vNmiXpi1WASVXMnCQVNifPgYwgPJFyKWNaiqtDrkXVW1HBrqnmtEEzV6R4QGnLuZNECipFPf7RnhTW2H3TvHW6c",
  "key11": "4eCuoMaKtWy3WfEmdxmRBnQV2Y8PauC2ex4Y3vbXNnC3Spyre1Sp2fJWoLZxQ87JyawH9g7Lq7ZPZD7QroaaGxqY",
  "key12": "4j6zcZZxQNGYhs21T8S6kgRgD3Hvj8oGD2JBYbWQALT4cRVrh5swKQMoL4TrY31id5jCzFHMu2p9zTQNWsASJyMd",
  "key13": "4wXpwzPa22VVeqQ1ZB2jLc3NwyXathBD1Y5Zj2sa45Zv3kzAAoqtyk68S5CTfEiaXDqWVRsefMLsQ169oiMKfEDz",
  "key14": "qRqjEFztiYviang8hALPK8wUSYz9RqaZRb1AgiqXMS96USpuacUZmST1G4MLCBsbYMPqzZy2BBcvfdkDLrT3ppy",
  "key15": "2yGGRn1zrmD2zfcu1cR4MZiet8L48x5MZRe6sGGKXiVcYi4ss9MwwCNeXtZVVtt4QbwvbDDfZffmTG2vDGHm7TPW",
  "key16": "47XefuuWxRcACwhHZKGVMibUTKMYpS8MhZ4nw9nGqcTkHU5HtVyNUwjwRjx4u9ToPdVLgSFY9B6S6UDu81LdZgpv",
  "key17": "2M8iL9bMbjiX1aUTF9hA9skzm8EjdC3aeVXaFvsRYBfHcPkqxkDEc4BEg9ZpKYTPHqfytrQge2KNdFEVsREmnVAh",
  "key18": "F5PtQerzL3pE3BFndspL58ZsgepjnbS4J8tGWNu2SmppnhZ64Qmw1TzhJvrMN9jq6QKxUzw994kFGLHHzum5Bze",
  "key19": "4N4APbycLGzBJQ3WwQi9PttQZanswwVJHYhvZq5LjcfJPUdjQRKkME2CWwHbNVSqzetdKDTzsjJbveUD1kcchphY",
  "key20": "5VMFB8vS7rjxRtcz2zzirWjobins73XANMjfbNaPyZ9Xwwy2eductVgCsxfucmBACcLsBQcpKo4YtZLT6eQSd5K2",
  "key21": "5mcZVmAbJRCSBhDGpHSAbQtpkkMSk2N2U4bbEBsPugiKiHmYQ18nAB6tQnKpEBCA9tV9TqNzejetijWhhygvY7nC",
  "key22": "66yitxczFRFBLzz2xsXPPw8fyvpt5s6a4LpCHBmr2UjYjHLh7vp8AUxWh7Mwr9y9uf169mi4vH8BJMN1CDZgJ1Qz",
  "key23": "3NrkHMAbTEH9ZiYVNjN1pwxDVtQRhQjpV9KTZfLk3czFf8KMp3JjJyB3WjJLMBTX1XPTT16ifJbKuxYwpRWFBVzf",
  "key24": "39JZXTPznCCp5RuWm2xtJb3cL6n1hZz3htLLxcP1xa8pF3uSfFLK7bAooajrwsXDgqYsd8JxZVepLjj1vtG94RVi",
  "key25": "37fMfvToXui4ygQYq1qipQnrb2E3SNLEUQseakuRv5fPoqmU14R1mQGGEptHkvLiN1Uf2pmtTWB8ZmxYhNYLY7J7",
  "key26": "o5Xugtg9do32rNBoK5ku7bNizGJfyQDmv8W7fy91A5wTtNoJuVCibp3PxCENsDNsVNUbdBYjJA65cWyNmbNP7ck",
  "key27": "3KVZn1ZBJURZZWADqLe6VoGdxZCBrwpN5P7bKTg8HbpjBg8S3CXGQM1Eiv9BWjaW45BHQGo7pBVWx4uTuVr1vnhQ",
  "key28": "55SZjVpPaAMeioj21ugGXMEKsGMjew24YxoW9ptHbmiDoVuX2BSrLy1ACXPMVH9J7FSPMcdvUNYycNpbnvvVY5Sf",
  "key29": "4REXGt72oqTqi7mRabmFvfi3dsaLSSJnEzcJ1SK7VqBxzE3aTfAotptmrVCAEyRd2XDom998p5CegwKs2LaHgv7x"
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
