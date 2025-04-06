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
    "uV7FXKorTdtRj23uQzh4UwGtLNecpmQBzBjzgWDmUPRp8iH3jvuV4cSR9igyfa8vA7xc1TEn6xjbDrLJ5zzxHGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QFgXTM9TEorUeAMqQRy1DS79c9y42RJaGTe67iksXkBBrLrzaw9MBUPcCTWFTzDkb5bWAWUgZxFMx5Ek1s6Nx8i",
  "key1": "3d5kXQmcAmYg8YcJ4NeYN1GgDPAZtXNEYqKZF3RArZDMnpHEXMeQeZ4Rj7kd7d5Yg2qpfHbfsrr4kzJCcNpM4rcW",
  "key2": "5ZdJf6AGM1HuxS2QYehuTE1ojfEW7bknE198kmMEeeNregrBGgS82ujaTtiLgR1JHmBufkryohsQ7atmzpSdBRpn",
  "key3": "5AM5mvEjsu3DS5gifXTo3v9ZF85aAYfBXbRj2JcYNJyA1RA5kWxEF5ePYHVd2KnMeERNdPtXgZX8XDqe1oXtzmEh",
  "key4": "5gbLkdvcABDpTNrfP31zLQ26EMtLUPQV7MqnVjs6c66TK6rPS2KgvwAdkW1DqoZF3btpEMMAhGX4QQWFsUjk9UW1",
  "key5": "2ueXTwq3cQYG96A2H56KC6jWWLpBGCNEgzsJ9LrHiCyN93HCGJtynNo9nKx4EjoQEwKTNrfwvzKUhBG7HxJmHtzv",
  "key6": "33vevSRY5e4GzGTuq4HWjUcccVL7PxtQcq5z9RkmaknTHLBU1Csx3wo25YhchUjsV97fai8Q7bT8WeKwNauR1QuF",
  "key7": "3jfBuVQV6aDJHHRGKpi9qeU1pvPzaGvGpYWEShtuoJKvjThEoPgoet7vUct1AvL6thPsQoNhFAGkNjddxghm1n4L",
  "key8": "3TyiVvEJnTwo9evRcNjK6xKQz3mQ9S6khinB2wjJeg8BEMDyqC5JaZ6aqCRP43QbtPS2dP8dBKLtteqi3U2Hf2Zw",
  "key9": "QbKmr9zcCS82yEvt1QzzziFzvbpVKgVSNGYzK3m9mHAK7ndEJztTB43eP7XpQH3ji6j1ZrMkFHTRkvyDq3i5Ewx",
  "key10": "mPkjgA7Yvc76MaZjsgExACzm6vpepxnoEBc8ShtctjfogHyxQvYm8YZsyzcJcmhXFA6sdarrQApHvu2ZexuXRZx",
  "key11": "4W6RQC5Xpo58yB2n6bgMt6APvqH9T45ycfJYq7PZCMMG9YD4u3p2RAqCCsjoqVQ4H3DmbU5PMLFxa3Q6T8cTGyKy",
  "key12": "4Tv7jun9PSavXW6jib86U1xqsK2njWvXePtyQHWXrKpYPR4uTEQBQwbgUHSU9tgVQ1FUU3pUjYG8MiYUJmnRQZ1J",
  "key13": "3BbMeKceYYWGooLE9aTSXVSvKV2ZGH7X2PNVoEyrEcRM8fzkaT8nQ1d56uWtKq6rgop8cfx3tYmHtM28ud2faE5k",
  "key14": "1WPJtmifPQ36j3W4qFddu9pU4w5V88AzqKpN3aVL6djkvnWRD62VxMohM1soXbZBc2j7YDDsNX4uE9JHHkxap4h",
  "key15": "3MZpZX7FjKQE7SZuxqKabLFeuuURtkXrSrNktRwikvnKMcTNvydn6birztK94Wta1XuQ3p3fXnEsgqNKzURtSNBK",
  "key16": "CiSaSzTLU6hEEpXufgmc4J588hrWfJBfVdopDqe8P11gJdaYQuneiWYx9Q4etFM56hQH1RmAVMQx45kwqUnNiHE",
  "key17": "5GJXv3tHBfzJVZcryLbGWcJf2rwPkFPVfZHtkiEkFeG8T4jtEj7bktLj9ozJMyoruuYYnqqRTKowpshbxrcEqDdf",
  "key18": "UALZJ7gpeYn6VDom2CHnRB719LMPfKAbCjsL2fFVowAR8y21Y6uaDWUiUFjKVhQZx9BcP1koaCxuBvQvSBc6LcN",
  "key19": "4PeKpdXJCYghGyVs9Eqz37VyHzfoUbwfqosmSyKCxtQLyXxetq1mKeJo5r3rY3PyP8HBg2bATQz1kbccGWSEDuVE",
  "key20": "y33bEBYQoWPhS25w34pajfdRJEt1c3Cow7zVBtu1pyox12kLb5wfdMPAGewXugzp6SPQUVTWMYtWW7icZjYAbM7",
  "key21": "5uz2x8jiX29vz8RzprxiqRMf5cp6rNpLUuAe4dU71roV4h5tbA5zP2f95bx3QgK52H5p6vnNE74GqBUnqrzWQFv5",
  "key22": "uHafiy94gKJBupuZAsQve6r4GxkfCxeBYF6VamALFPPJXFEMKWHJtsXkun186nPpZgZoVJBJ96i2CAg8Ev1UG58",
  "key23": "26kctbACWFrgSdG5K8tDh22HaHRrbBwUztELyBBMuN1upaJUDi34HtMTNhRffc7inYDue2RBkbV3xki5jjBQxvYt",
  "key24": "663Nwig6zSYQG5hqfG1uHSTs9QEV1TYSGyuksCLbAc7Pz8AvqYo15suzkeddHcR1XurAbkBrw2uQXpEfSM48pwJ9",
  "key25": "2E4AJH4pmuSJ63TjxhUBnLxA5DUAYsPaLtB2mQnaChNS31Hs9kPqg3i29N1YXbQbt21QhRnmUEeTgvqnnBt15Wbi",
  "key26": "5WtMraugBMKmY2FeFpyoaK1sAQb5ujZV5F5181TvYqGEB4n9J7rAtKZU4CipuGoK4RpTDNGLU2oKeWuAZSHGPsMP",
  "key27": "k1PsrV4d4SyCsuCRQFbsWaqJTzyLPBGwnWtfY8kjjkjKUfpuMEsx87yzSo3hsXJNb9RHPzZQERWPEoSyLeoGx5q"
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
