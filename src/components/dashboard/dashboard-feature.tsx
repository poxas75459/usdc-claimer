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
    "4NGcAVtaFGAhXPVsbwGwHktEGXEdKmjxhrbu5LTi4gD2twfHyFE5Y1E1CizRwHHuX8DuJocSeuxpC8ea495QdQiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53m8j916ErAsuco18gzid5iEjBbHrwUwNxC38haYU8LJA4S9Gig5jC2omVemw3u3MB1baabwrzpvvU7mqUshyBiV",
  "key1": "4mGYUcjgkwNyti67ftzbvqbbkGJwu3zXJroQULyLw3yvLriVLuSVibwfAKugvBaXkpVfkRMTLJir827ymcQVUsgm",
  "key2": "3hVRm52Zh3jDTpgBVFjkuuw1EpJvVJp6u3qd4KcGsdpLBRYKtmQTtaJ94NCziHFFjydUBY6gXQZF866f74xLgtVZ",
  "key3": "3vQrQjZmbyk37W5M6QmFhfQvXLrE5teeSEMeD4mE1bn8cCfkpV8pc6ZpZgL3DvXuwEGu7HtNyxSUVE2P8szT3qhc",
  "key4": "54AEtJLPsksYkcgJR4ppf4joXNycJ5P4MMBXAinGuVrzkmsyXLoAgNd5FbKJPRy2pqWx7Twtz6xwM34iUGscDrCR",
  "key5": "2EGp558thaVpK9voGokPvPwdLmnmkojw6jLzzL4eYHU5cHZZxneDmEuFXtcfFX5Wa4LutTA3vpQFPUgtEWXYFrLH",
  "key6": "4aaLUmMAX34atA5wBtj1EbmUdgZVxvNHc8iXSvAEuxgpCE5DodVVUPLAdwnN4PHnz2J2BEivihjr9kdG15nqALB",
  "key7": "4Tkv38R1CFxW626VbgrkMec5w7pc3gDVCTtjpCvC2JaXbzEYgn7emkHBRSAJdECVd65e95Ez4rmTpX2ww7SijccG",
  "key8": "2CLTx5Rz5BvQ78MCHDUP38viTqpmC15aLbRgGA7GWSYtC6qf7FutbhXqUZthU8ioyXeaX3xxFmqssah2fwmcHSkA",
  "key9": "57KqpeXwNUSkLstWwtpwcHzE3LCuDonUjBSFPPMQx2RVFhdcx7sqdBEdAnSvnQdJTZiCLb3aXA3dgBke3y2oAGnV",
  "key10": "KdbUd9Wn3dXSvFvynETDYNpRVofknzFmQfEn49dcWP8TBrkZ5qYpn35c95Dt2BaFbDXfxXfQRQn1XMkv1Akccj1",
  "key11": "2qcUbndZSQPtWitpPhNuDHrUvTQgC6FU8zLoqjCBaS31Jh1YeKL33uvNmUCwmnPSyfFmpZ8YZjMpwcmV1JRWTSgV",
  "key12": "23xSZ3JhHdtW3V4Ydz5uFLHjvJ4e58SzjDsGFk1LGRTLYRpmHHiMHnfjMagqmqLvBhVVVobtjag3vrQ2rMdjTuE1",
  "key13": "5CizuvB96xUSB83TjKEg4VLmqE7N3nUGX3tnpcdq24USUDHYDnLmTadArQWb25ZoJg8qC8q3j1YPSc4pgSg7EA84",
  "key14": "3A8u3sbCpV45LySTXGbw28RoWMUqEAaWHtBr52hgWWiU8JS5GL1GPFXU6AZ3Eo8dkMmLvH95kT76ehE486mQGuh2",
  "key15": "4b9FRBN6yow6tUmumSx2S8LGdUx1gcHWJqCM8LAvJCBJDWjDXdUaVCy72wgCqoY3wPGb1Ut5Fuiq5BoKHPqteKgW",
  "key16": "66fcUZFSrTtqDBABGdfRJ3ZwASpJ1b279izP2EWbzygHQu6Ponzg9KEEh1Rkv8hL1opTxLTFjzs2ZvCHLSkMRWPm",
  "key17": "5cYPS8qWVuwPsZuXKX2aE5o4jxyAdFcvGfZXcqyurqRzAbLodmRPCv4hVUdpVvwvzY61U4F4VXQGxkjxuGzyVsks",
  "key18": "5SqjoQcNfyx825HK4nCzF67YdwDcUhG6DdJ64NcSm3oogSXkjVZAaTTNgMhsrtdfSbzPgDWmQJ6znLGQ5JLKQLm3",
  "key19": "uMWdB3D8B3fy6EikcVmAMWsaQVoZbCRiSv9HnLswvVHBeSmTmZjJyb9ApJeZJgM8QXEypjcTmBD8fCJccbQPgnY",
  "key20": "4N2Vj23yGnLYtSaLDmccxepR8uG26FuPjqJKpmX1BtCBP32yLqh6cpyVNbYAWHToCyHCnNtH3Vac8QyBFmpAek4W",
  "key21": "2Htgw3aDykcmRB8janETsRHhhzPVDz2ae41H3aFMs8G9nFFm3WZHWSKHbWJFRkmstdzqvXLVCXpA7N3Bh1N6zRQ2",
  "key22": "4izBJ38weWYuSGFy2qcvZ4ZU19xCy1T3BDDJEwWLWV182qzoKaYGKG4A8Q77C5CGNVTqwb1kqKcGZSST2Tn87Awe",
  "key23": "573hbkATcjL5JhZiJCDYX369oQexApYe1CSVorzHDK4591EQGndxaujAuiSPtSct3ATzHj4mecvHDvvaAqrTrYLF",
  "key24": "44UdDw47dfgz3uk8R6PGYsj7gzTdJLdTTRJG9vcC7UgLNxKpPcTHgZ5mGxGTGmEBh6GqSVgUhHdvmdXPTwteVD1h",
  "key25": "2Ud2m6xZzusRFyPQoBUwARp9QoR2YtzS4x7K5oa1VFRBwK9ZXVoHMyk2xCJxFFXNEHS2m6fkGcizHJoAtxJt366G",
  "key26": "39XLGke1NVZvMYkuRhgKPGUJp2qFaBbgDZVwHKuj8G6fEGUFqKjgE2dDbvnEP1PsPKu4yJjwuCSxhUGjezn6L5ty",
  "key27": "MNZwX2Qiecaokv1JUWmwGSidg5JynBdrKbUKRKNTFGyQHF4cJiJr9VrY63mxWVe8QHjazw8NtWhdqrhvDmsEJ2A",
  "key28": "5xSBZ8hiqk5LUT9YVDHGadsHVhST3WUT9qfNpXEVRAvU2AYjqc8sezsyUjtwczEE1BGXby4zDsWPBZckj3kTRJin",
  "key29": "39ftAW98w7UJmTqBk2n2f4irAkUzEnis28FVZ9HTuwNmND7uUZcwS1kmSKXqFqhz6N1bXPUn3WtogwgYTXs2LUcY",
  "key30": "GXV34gWPjtEioiN1mW27RSKprnZSuhVuS4Vu9j7Ts5UggdUe8LHcPacgyHWviB3gjsqytis3K61omGWBWUUtXVH",
  "key31": "VcHUwctrVyyzKtXPBfM12j13pADddqbhwCNQGRBwnrcSBDLdjQpn2v484RfopFqWzg9jze1GVLoWnuHcq64aDnp",
  "key32": "VYinoBukpZNXdntCNoaLw2sV7ucaecrxEiXQBnRvu9rSsxA4rJYnw7yBJ43NRCgMdkhrwQpCdW6Uhk2WzqYEn4t",
  "key33": "56ywrTqN5JzC6cJWs92GteumnyTvhWAxabgGiioWaWeCB3LPcZfVHGW3XiSvVyDX7kuGgJHDUmVkdD6uh7aut31x"
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
