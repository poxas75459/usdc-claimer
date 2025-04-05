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
    "3jeY8ofZf1PXsCZwFV729oSHcSSbTWKBUZGntmb76DLWduSmnFi1BLCKC6z5DWbVoV1Mr4mf6yQTfpc2ANRNHQ4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oXYbNXAnrbEQQwVnrRLKx8wJwmfUgdQ1hPKjCU8W4DwiGkHpLFZBzmSkAAnxD4Wx4VcQqchfs3uRWQbYfmPLytA",
  "key1": "ZyK5FXRYEg8ZvvetBvoDa4it3SUtpFimGhdsr51Kggh9PoBEcZXCqCSwwg16AESBBm1aDgsSr8XzEJfiLsqqZde",
  "key2": "2rDQ2VsNnsPHhhZjgq6YWysiJaiYDXNEfK9QzYeKcLVT9KqC8eT8TrVjGmToNttsvUXAySjX7YwtwGCpr7pS25JZ",
  "key3": "oFfrdDNqSQCQtgPHyywsn4KXD6y76vd3do8nvHnSb1bfJmjgntSixQwuwdxX3JC4Xz3L5SBNKsLRGkZWzmXakVj",
  "key4": "22aMLTez51HvpmXTn8cFK1th5jmUNZbrG84yLKkMJHpRXpbvhbTkMkrudWbLWukvoMiYvwLj3VTmc6sWM9Cf3YJ9",
  "key5": "5MTnLNPKwRGA1W41aCPKuL4mekWASEffN3Vck8zciYvm9PrhmJMWyZTS61mJVFr6RhAizPrBNDfyu8x5jesADxdn",
  "key6": "2AyozoakhdWnQvDD1BPFxXpbfdNxPYb8yz4wXSZZ3hLxo83soK6xib2Ab83zuXpmTSC5cR4dbPJP1HkG5i5dKt4s",
  "key7": "3k9BnZm9zHHcjpmTDFoDg1Gmc3ahDyDQLxvNyLUWHiMZ2qbL7S6z5W9fxPFwpHdcUEy196KjA9Syht4tp1NjzjxW",
  "key8": "ppUxhAAd3pfm9Dsb7mBbTXYKDXh92KDdentMvAAiUC5ARjXaVSHxjzEGENjpRs2ED6oDpxBnDsfPPkRNnzMqsK8",
  "key9": "2Yg2Ppsp3zhu3UCEK7SE8GqBkxGPsZSHChLvELtXqx9fipmPFs6vGVx71G8vL1X61Q4Gc6VEiKHyshfcsjUdTbK9",
  "key10": "sPi6KNT36CJREeq5b3i9rbWiann14vxJXQhfdAm5o2pKkjs9CLhF9TKmp1batYAT1wzyMf13TU4UgjWhDPvipVZ",
  "key11": "2ywJCzXT6yvEQu2yCmQWBtiuNjWrR6TvDkAMLVYL77N9dm4pKaVwv2s6Mzr4XT9GkqwmyK4WpAmf79GMCkVMNCf7",
  "key12": "5guAd6ZGBVqFZJ2MnifDF1eD2RiSxU1b7ENFA3SkY1HgiRQW2NK4F2e3U1UnWW6hkJjt9a1pcdS3ukhUvunMYXZi",
  "key13": "3cA1bkV2AhqYVyuJUX37C3bLK41n5FXNiuPRLwHC2pvfRswTTPikfQpTDGxzBhydXN8HX1EAfX3Tad2shh2jfXnm",
  "key14": "57jShsRys2Qn7DxdJ5NafXL7d6HVpg5wc8JamJrBKARuzNMfFb6eXjiLCsQn7FGDiG96Hz2Su7UuMWSHrKF3LMpW",
  "key15": "559FbwVXnXsfugDGkXcKkBHrAowtQ9HAqLsHoxLSH9abdGyjDSyt1hYPBeRnjscw7J9wYDBs94ethz2nwspEPUUC",
  "key16": "22CnJ5bwvtLD787msQo5Kfm5wMT7CivLF7urBj5d1ZGetWFwrTAxsXGvneyNMtNgsD9ic7DMQe7U4xXr7YwxkBtS",
  "key17": "2sdA83GDmfz7hMZNvHDTRpwfbE13JKJEcMEmRWTKkQpMrhcmwzCyppYzkM1FkfWH1X7Lb5jwUU53iMWFYqs9eDQ1",
  "key18": "2KhJnp68Svq6NkzQ1UhzeNmevUNiAqi3gjYfLbyNptfMbffLEAy4UKbbcBtBCDbv7QHzgaTUK4Cj4xJdY8wFcfxk",
  "key19": "3dmqDtRMDfYQfZnZuCxrALTZxtNHtUk2LJTRbzB6U5L8M5VBfoNNYo4JEiFH97ykU1WgzHGBvjM2B3mA6XiANPA2",
  "key20": "2JEPXr7vwnq4h18c7Q7r49CWvLenpaBpSaEqTC3AgcBzPitsCkJptH2bhuJoLqBJDD2NsEWBsdTuSvUzXknd88ng",
  "key21": "XaLYaMujmMyzNYTTSKqoKbikqmtyD7HJtwxE7Dh5LE2FtAkQsDv4KDFcjq59sDqBALbLd17CpWDg4ZwwEncNRfP",
  "key22": "3Z5TfBX28mMRuSU7UBq8RBzVDDVXhvxJ42foPasMx7dYoKN1a6Ma9zC5DqeTzFau3bRiJZ3cPtJhebm77i1DZjMU",
  "key23": "2dwr2VRH9oLRmN7xnvhvhubyPd3sPtsaa2Wcj6oH7u9Q5DKFY6Ny3KGK7Ms3kGchFz4KSLEQvoo2uMXbp1urYLS6",
  "key24": "4NKojfN9rZfEQGN4LzJ963kdAXgBsFR31QAjiaoEoZh5e2wj6CzmFP1P5p6qBojL5icQX1uXD5Fd3gbPmHKnpN5H",
  "key25": "5c7pMDNd4o5v1dGDGoX6qYvUWbokSzCtpnu4FZ5dTFr1e8ZNwYUDa7UGyBb8kX2o6vvs2NToKmrCtZcKW8zJbrAH",
  "key26": "u5xuUPnWpJyi3nNZpnZbxdU3iQN6kG2VvfgWzTiKquBwaoHiVhL1HgVZrH9HTAocLXNW4vC61cu4FKDPpc36kCV",
  "key27": "42h85aBknJiFVBxVLt2LRRbSAytqViPdaSqEoFyfVvfaAehxiXxzySFuV9K9cfKfQKfw7iGm44qXiT8WKL25aWK9",
  "key28": "UABNHV738C8Ui3Tu6yuoTLJkFsrimXeZLizujr8naZUAHsXKjnyfWf5tuoHweV4Yo9qxK9hnpQLMCf5NK8jcN8t",
  "key29": "zh6CR8zuDse4knrw5RNdG64hoqfYemanUUqa2DDbBPDNiJfHLKByESeVNeBhbm54f3rgX2stF4rpH7G9H9qfogq"
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
