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
    "SpUAWr141xHaN16wi7kuN2P8u6dtRDcd683zrrSC1LNwqvPWMDSYsPy6TqSop9GF6mL8VekhGGLQUJdmFE7r6S9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YtmhWEMWSVHbVuWWKYb5xGaEcFAoKdQEerYBBqDJa2dSTJdpEr31tCz5CJJQSsvtPLXfWSDkZZRSExSt5QJv7tU",
  "key1": "46BTRLHDBY1CTUfriTUQrNerDHCqeM1Z6frw2woALuaktFQQmmmDam611pEr3z7KQPwr4k3kMK9RUi2cnwU22BbM",
  "key2": "3T4nK86TxRC7yid1FWUZrH45mVRg3dUotZCDA57buQd7dpzzPNxECFTY8eDYyYXi2n4Nfgo1h7vJWnTHzAcbh7tg",
  "key3": "bDuA2y5N5QEKrGckqcebskxuWPABJUfZeAAry55PwLt5q18vkN6cw3AqNY8joYTMGuqFoHy1Fbb2VYVBgDq58en",
  "key4": "4PnbqzGhaozA7fiBYmY3QHz7PcBRPpurHDU9x17JpqhUtRJZkzuWRaAfypiFFmvDQXN4GvHAizK26oKRnqjRgAbk",
  "key5": "2qegS9ZJafkeQVL9Cos3vuDqcHEj6LrJHscxWYP9yviyjXukY7ZsKxJ6UdjkAx95eG6FxzbTzp9TVkcy166dykJk",
  "key6": "56zWQSUbv28ZU9EnBCrmhuMecHDe8xePRrdSUzyithUq9gxhgbd5zqbPgR7Y9fQfUQLYNT5tqHtY6hWi7Sx5NM7n",
  "key7": "wR9tCtY8HF9eVxbhhPG6P88mgszMuK1N7rQGxiXVfYYGcvMhENppCemtRLNdywTSjD819QzjqjeG2w8LwvDTqCu",
  "key8": "2yxBCNJZLjp7xiqBeCzBiuKgk5xsavHEDgqGN9GLm4yx4kcwYNYxydRivYy7E3Bitg59MnP2iQvRPT8Jkq7DV4Yn",
  "key9": "2yvQJ6EdGjjBCunMHwDEfGTtLEcgY47WqxS1kjnU3RuFr2tDbMQzciuVwngzibGK7tPC3WWnirLGRH9g3GqftL93",
  "key10": "43Ffd4WfLK1L2rDfHrje9K6PtkeRhDYztXjeuTyDLmxt34s2GN8S9vrwPneTUMirz3CmPX9acMtTtpqssMf62an2",
  "key11": "3ARuhmfqLJAPCWixt5GktfJex2qjod2KRm9RF8LdnjEJ99YLTCEDGBpcZmVQfD2xFyKkuZGKUDRGobZMhCtFCMWe",
  "key12": "5M42eKnwpBeMEhgp2cS2dRtYPKREK14oLtqhxykTbi1XbVU6nhQ5wh4YXaujd5KsBWFdPzEyQL9xMLm6HfqyHb9a",
  "key13": "3CaJrE8T1ocFzNKFEzaM5Qtfy7RYwpvWJy4vihssUT3EwabAcXVXLCytTxokVAyJYFLbCbaCUu97tecGpVd3ydJr",
  "key14": "b69FDQVUQRpnbnoLWsaYKn3m6DqqqGyoehSN94bQg1SvZRiVZ5uCpQev3w7CCfkoUNX62B21175AggGQbvqL2aj",
  "key15": "3bs7TAS9ATpWuaRRYCiVB3S9xtMjfPa52pAigCw7Nj18b2Tumgjtc1d4UKk4Sg81Y1nrsi9Fyg6jNT1ha4hFZCui",
  "key16": "5emg2nNovs8EG3LhCpR5kVTrN26pfRQUATPAfHBgjTUJP1mUfxhLAEwKsUcY61GFDgTuWpCvhdCFAA5SM6ZYuMHL",
  "key17": "fH2twnZxfb3tK47pKmA8tr1bEYcbyPxFznjEFejj834xpbETxFcMWmbXgq4af7ySARAAmrizT6xj8YxwEd8XjHz",
  "key18": "5EaqDDxwm27reMfm4uz3VDdB43bqXGW1W3zNeazp2NvstAnivkaE943UU2A9Qyvk4UMXMYej5TJye2fB9y3oqqTL",
  "key19": "4vtFgRYDP6bbFZyqhjEjLv9U6r8i7uP31TiPJST2JoswHYXsk7HcWUzYoksA1CpSKWVgd24sSdaU4SaPGEHLSuiG",
  "key20": "4Z1M8VzDyYNzCKfaW9xmJpP2RbUWV7Kv8goBKaZ19Bka2Fvu2r2scNhRYAfjhpLfirSn4hskHWy8VGaSnoid1U7c",
  "key21": "2ini5zfmuJfDmd26mAGsNrcnUMgYSxY3W4McFpaGnCtwB78YmMaXpfF38DU7heyXrdozF46LjKsz19izxJkGn6aC",
  "key22": "5ih4sD538gP9rtsG6DtYvSY2KSJ6pP6bPKGjhfHyc6HcAtg7RH3SzavCqu6e7CptJk9pQ5Jk6x11MCTnuukBRZS5",
  "key23": "3ru9F4gzXijDwHpf91ZmzquHKs1NaCHMYsGgzAmJkRu1kR8Lf2Q5H3TUYvEqwDjeZMcKjvApjJrV2THTkVFva6xS",
  "key24": "2eGHtKPVxYgvVxGRXrvsswmJQQV3wQ6iVb1KgHDP8VkJfcfLsxhEM19Wv5PLewWzRHN2nBXEoDff9ngeFRMEDjmw",
  "key25": "4paZ8kRkkU86USbVQZX7utirMs7HPwyyh7ioy45Unuot6z42mFiF82Z3SrzPcvs6LePnupgA71fYzuUVrMzLnXDU",
  "key26": "45tYLUVpA3FGepBXpGnm1fNAQT3DDc8BRGgAe4yk46FEYmHJ4bmWwMkZBHV2SEYo3gVSVW9J6RMkdvJPKGgTGAFH",
  "key27": "rKeYdUivEsaom7VEjGZgExFuPbNoXS99DVj6Dud8R21kVMhU2uHZCs7ktrQnSw8prjtxyKKZNkVqTstbkGafvbn",
  "key28": "2L7nZggVHVtbnooFtK1CkUsJpJeJsQzDXJuPir9xDPiToJrmQ5owYGcaCq7TEgV5Qs31FABHSsYVYEaCVAiT6EWK",
  "key29": "39jW4fnxNyvj7cCcMKPUrKYwF7VpP3CwJsffcA1XQurHiYjFBf8tidzmsRtVraYGcmzs6VQbRsdszSP5Px5puUSP",
  "key30": "4NjwgU1EzxpjeBJt9JyvhT9BRDJQctqbJmf1uesjCV3FKxJaEp7i9Fzw4cgq4bk1UgAJu3rzbwyw3vrtBFvmkhJ5",
  "key31": "3KFyjZRLCh2QeeaWmFqWPmqqFXgqdbxYCCFms2e6HaN6E5tV1eqvUHb6fnaaGXM5NDPP1kgrGy1awDx97BCnJtAE",
  "key32": "47gPCNgvPiGYvnRiBf3dfHmZKrvW1qbYXaN7auzcwDepiPtNjce5115HJ1xA7pC8ZZ8DdQZS1cqgArzdax42ZfgJ",
  "key33": "4RU4M5W4KFCBgmNgXxKibL1HgNfwvEgn3y9BXfXUkdrA1J4iGXMAP89HaAfPFAk7jSesWCXgEP5ddgbhNhunxnTs"
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
