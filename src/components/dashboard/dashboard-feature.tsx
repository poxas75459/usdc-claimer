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
    "24F4cZmrcxgdUsXkCMyh8wWnTviHbAeszKSxBrLnS5Be6invu8jf1TmUP8mBRJDf4hS9L6N44bJCAEgw5pb4ajCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WgnmxeWzh2edNEkuXc43e83J3K96DxYpAtopZksuKmvXerK7NJVRChmSoLuQjxsxLwgTkLHMm1xkSt7BrdWBEvs",
  "key1": "2APM2Z5h2Kh5ekb3MFwAAgHq1bk4iSJfsiLk51KZHhUEsvnTZn8RB1PZpD4vZNrQT1yF7CNKKHWsssNLgJKbx1sH",
  "key2": "BXH3N1r2faNfZjxky66zhDQunjQTFLXrvmmoTvttXczntHyANL9cBabEQdxV96eRviDzJbApJGhSmBE8BY5stGZ",
  "key3": "3uAP3gQJrdGrPZcJFJ3ewLjPVGAk3DT7DfP44x1GthWmDZ8jNgePTYDk7CEdVQntRiJ6cuLKz1ziXUTZu96XnhFQ",
  "key4": "ea7uJgNkyC39PQ68NnRLn1qUKC7izHa4xJC65fHAqW9LL5bAUfWNj1dHktBUix5FxVuERSHK84oRKfb2D1Kh8XY",
  "key5": "3PCWMLPrSJBmwPD7Rq1SAg5XiRFWCwnx2h9nugNv7NmiSU475tXzTBUaPdzaXMfrNjMbvyCg3Zww7riiycVeDhzV",
  "key6": "5Ky3aU68rVb1jZe8D5eV4PqXXDB9LkF1scrjyKdHdNwtCgEgZAX8VEE6U86JK5tS8cr8zbeo8P2QgNRswzC2BRpV",
  "key7": "4Gek6dGSrPqQcQ9XSJ5pZQAh3DFPqR3epfugbZzw6YzT194nTkpa4EKEcQhAMSH547dnZ9Ly5S9gByuis9w2fMwi",
  "key8": "4xBkKojAj9kpzdb3WpzMV1LNqwyr9R6zZxNtCR2rs8rCmiGs1rzGU86mgBDb8ANd75NB1khgHAm1Z7JxTFUQsyo7",
  "key9": "3GW6eAsMTq4VdNHNduVYuHFcQdg5LvL2tTWHs7vmzmHUhQPz5JPGnX9bRq4mnDVGGMjJTuby4BQzb7w2LnvULEf5",
  "key10": "2oNv2Ynud4BuAK2gSDxUXaZqN3mcKzgBbAusxNFK5NZeajDQ1kdnoghifvZ1kscfhkqf78rmHCeW2beJzpzPfeyN",
  "key11": "4kBokFiEicBXu48tv8eWxYPvkPM5UR5wgHW2NGVrhpCk2UGgLRShom9PkFwSNrciH3Rwp6enaGr4efGgbhKftpaX",
  "key12": "22FACdRVbCscGfvaykn2bUCCZfeCC3DvTBEzfrWrvvoTmxreiCbCjoggrbeGwKnjHNrrFcm95eNBKh9ni7dZSQqv",
  "key13": "3UG1ccaZoKwpdX4K8Ukb8UVR3MC4WFjPPFzLgViTMtdHb8qesQGirFtCYKB2sW5JFwKbREdswTxwDNVKvMh7yWrA",
  "key14": "5xexej1uX4H4mtXewfZfnfsJ1XmHrQGy3qPSt5hCMfEM3MGJhC1Ro14DVEfu2a2Ee8xcCxwsGmyWEUsB8gUkMSAs",
  "key15": "64kdGBYeEawpFjxBgVcbEyJ9PAdB8nfsZCvZXoKp21Xkai2ube8ksTmoS5s3zRCKeWzbWtHWPcT92HG3CtxjGK53",
  "key16": "g7e7E55KkX3wuQeiMM69oy51EsdS2E7qzqBb2qLzVTyeVoieREgLMxEDo7hh8SSiczdbQLyvgbdB2c1mQTEoahp",
  "key17": "5cNQFbC9gQXpebUqGtd1JXWGxD2SwPG4KMRP2wQWhcFQJo72UkhVCmBhr4aMzQ3Zi7azbWth3u5ggJHohZaTEgDo",
  "key18": "41b8BLJjxujpHxdVaj2eAsP4yE24JUUjXxnFy7AJAC2rRmJUoewoaEnW3Fp3tn3vZP8un1tb8HzcDijf28KjjUER",
  "key19": "4WhZ7989X9zQPHgiGgUDTPcM3d958e96P52rCJ4EtcV6Z2j25z7HFzxpPo7swjvUZJPBrfXtpRLJq8B8eA3tNLDd",
  "key20": "2t4iVzR54kvpHDJtkxMCfn15HzgxGMqnqNjA3yhXcJfj17LC7yKARofvdXSXUVRUncHJzs14UjK1De3e2pcpsLqB",
  "key21": "3MfzSnDPSXK4XmgVWki6wxLL8W6LFJb2uH6WTy8BCEyTF4uaHN6LmnrSemhFT17C69uc8H7MhNTb54io4gJGgxhd",
  "key22": "3EPTkpyvxXS5ns6BhJEvN5txzWrZxYm3Z7HHuedTCYmAZd2JSpxBfYEQhRdReNQrKyki6TVhUWmB2QwpuhG5QixX",
  "key23": "54QzaeAPCquv3ChCvrMDAQJvUQvNZUoTJZVcjhZbZyZ2U46qrDkTVP374Nm3B2pboBGCfxd3a5YkJuxv3iK6ngc",
  "key24": "AFgkESGUnphM4wHAHMwXokVUwQCmRHCJciZgKmjhxtnS8qwWexGuzLRxNGhSVx8PWYQkoLxKXjWLUgpsayzRkA6",
  "key25": "22JBVBZkHefquAdoE47k6pF6Y5zoYVdgaCqYU6rRmhEmYcDMiUc7YmFHYk7f5itsNDSrhLjFAE6MLrDppwXRxrP2",
  "key26": "4q5Y5zgXdp5khKtyo57iKr2xsG72PorAFb4EL2zPBTFa9oLKbKdFHWpcfc2Gyz9gosqrViWkFTNbm3cBM5ZtBLf",
  "key27": "4NeTk7kS1gaEVvDZfFnHx2BqotJU15wcMQBakRbCLpR3zDTFExNYAZxCp5yBXwoMtcBmLsSDVgmg4Cz28TsR2BiC",
  "key28": "3r7wJvESDMtwnJiJeuMUpeg1aazkk68wQSXdJXGaZVzYJRUpv639YeMS7iwoewrzxyzSV5EwomYrQ3nN6qqiausF",
  "key29": "3LDXfdwCfeWAJgnwpqZob2Q5dprH23AujrvRxETHmfyh1qSfoS27sESKGsAvX8skDicC3nqtoJMMgssdfvfp3xnG",
  "key30": "3HzZVnPAqpGunWjzdhhe194PbtJGSg24Zwkz8F32o1gerSVVrwnGjHAeEciE3LLudFHrhosNwx6WeyREz4Ev5ACC"
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
