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
    "SmBkzriMve5tNaqMXiULoErNJ7tTQFtEvWSbjW6Bu2Ro5HCCQvmmMMcngzUtA1mhW1jjRxc3zcExFxn2dvbchdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SwNrSfYESC45qFpnaUpQoqrSkzyyAoBn1KDfh7fcZjzA2u8zj2tqWSbMYvMi4jKRhMwXVNiLBakeGxQPrVMF3F3",
  "key1": "spEwWb1ryp1K35qo5g9v7FGyvhj96nYSN4ijrAETbwmF8c6w9v3vEgC9AoYTjT4gfwvNrs57SJBwfnBKJ7YttM7",
  "key2": "4bEBnG3rsjsrgHhrJGQCakkSrj6BAjfp4Nkgd5rR2iBD4uwmNTwEZxUdymkL43Lw5box2UexHn4ZmYS83eF5b4jA",
  "key3": "D4jZHgrQZFaLx2WzEb614GWVJm7QcprpsapL14JHfHYQpkTmEv9CbQzzEWUERmCFcHekQZ2vKyW64XtvSW4KZ9f",
  "key4": "3ARK8VYDd8dMXgXyWsPqUBi5aFy5S2mrGCzeX5BxsA7ehh9YgxRkMLL9QfJUXb4dt6ATLHW6wwEy6m1uNMyXrXdy",
  "key5": "3mT5tndeQ4GNee8R9Qc7PgBSKLqmVJg5MU61DtEeT4vxkuHmtNppkDZWbUzYAtoDQ7RKuq9ofBfHwS7NmM4trbU6",
  "key6": "5pRMwZjwpo9EWjMkiVaSNHsUNwdogYxeCA7vAFid1f1PJTo9Tap3Q1GsnxjzNZyrg62FegAuveiobRW1XdSkwRFT",
  "key7": "5Unu9kwnappnybxB91TYSrXyQu8A1KnModdGhjgHu9vetn8QPr89Lofg8MgQUMEJ5ESg2eBvjWjuJJUC8G3Gmmn7",
  "key8": "2kuPxeq81kwz2NSAoY7isGWt8gXvUEkNTEWckQP8HGrBf51GxakCXw6bx6ZJNkdebKErubRbqFT55uygJ3sAeXQt",
  "key9": "5FTF7hhTXa2T6j51bEHisXXDW8p2e3TX6nMaasLWNvmMJmEiW637GZvLm2p3wHadvvXWcZUMQ4tiiCzeLQVzDU8L",
  "key10": "8yPvy1nBNSRC3qfMZqtBdb2ewXvTw54j386pbNFAz8GsGeNHETnwMgHnRNhXZ4crAbjvAqc6bq8TSoHtKwbDBaG",
  "key11": "EiTe1pbGeKGu1HL3hvC3by9sWNriwDpNPpNrByoQV54d8vSzVkMUAZVPUQbER7hSEgkQmMUic2ttiYUVkqTVSeP",
  "key12": "4jXuFYazRo8Jf3Z7G5Q4H7aiCzgbi6knErsjNeAt9thm7uHCguANAQJGaghjFm8QLZYpD13wdNn4qFTSKVDn6jMG",
  "key13": "3NtGKHV7w3fSWfoagpGvThtJeqsn1Ae2hvgqrUmnxkNEw2fDeUBxa3NNFvgXpgVBQmJyttf6p6BBnotPqPw3R97e",
  "key14": "LaGssWyaV1isz7KMDKtScAz3niRW59QGAjcRQ1W5gRYYzthHf6QK68yYt9zg9getPDPpsPg83sH16aYAdEXc37t",
  "key15": "4DJdwF7zVtmw9mS4iTp8rmtrhH5f9F4cfmpHUw5wUHvZv7DCLxqMVhmpTwhxWVCToGGerFfi5woTFsKdNayXHcDi",
  "key16": "5u3FvfBq4daBrAW9nMveDkcCbuaGQu9YEmUMRYNxHniVBzTG1nkwT9BzEJveEjoRwU3m6H56Tex9oDMfbHCWHcpc",
  "key17": "59uVo39iJxXL2Efx8WnAhmvNBpVep6Y2fxU9UhD9y9ci6iCZtp6Uqvi7YLAWin1cTnKF6V6xByrowt97ETYuCmTC",
  "key18": "371YvppQ2QecR4PyuqKBFNfseSKv6RA9eLantp7C3VUw6YWiLED7KbUqMGPjhdRDsU5cUYxEjgXn7jZAfhEYFg8D",
  "key19": "4fxqn1wYaSE7CgUjT2mQcJvBAesrjvUcQXDNZNqRtXa9qBTxRC3bm6W8eNuZL3MXJqyJontbq2soYJywu5r3WaPn",
  "key20": "JohBaNJgMY89FsjRDYYuS9Q4QWEY9ScenWpG2uRYnvJuEfn8xfWtYw17DBArjHTg2RnjHsu87c8cmDHpbG4KhLB",
  "key21": "5LC6tRnXLed3xZLGTvKgfXMA2SQpNYSqyGaX2GEbsR9eVAXYK3hMyrrMAHtAzoUtnFwnXxvdWfvnvWDZP8kfcptK",
  "key22": "3PWFrz6v1zSCgGccTXdsUD826XTkz44TQ2FFHxQvUgZHWexWBioMp2DEoxeP8bfdKNEWbZx8NRWfVagRtHTJxRtq",
  "key23": "5hNKaBQ3yiRwAUbsNMiDSf5ugScJCp6GKFDAwgu7XRP5PdQkSKMfT283eroProtA2UUcntFwPPNhy5UfLJz9Rij7",
  "key24": "5U3LTFSbdE3NekFxEkCCBM7cvBpuxoBZLTmAYH6yX1T4GAo9QCyZB9k2nsQ91rQ7GorUjofgmDPqLKu3EupUrird",
  "key25": "zGrLsyQmkUTka3eFiNb6Aemp3UHnPmtXksQ9KScy1yVR2h1d36NaWodu8H2ToM4CvR831964ZFAcKB1XnGddEay",
  "key26": "kyf9eq6unP5aKgoYLuxADJfs3hoGTLJGk6xr3dgoJ689M9WidvUdtHXsyWypvzHyzbZcpcqtrPa7aVd6CMYiSAF",
  "key27": "33ycEJGPiUHM7UA3chTWk1bSuMaCPaMW5wprPNwP4TbVpb6TSG8sz5Hcbpqsyyb86HVLWxPizpnDaKBsaTeFwLbY",
  "key28": "fdjRwAUbGtazjsZbiyBGCSP4iHotdPYbdQAMJSWdXHJtii4qpwv4oHBNM1Wx26uA1F9JEqjxSWgUpWzWtxtCRT6",
  "key29": "3Q3JgqSnVLrVkYP6rApQp5zQVofFTLbpyHWVrVC1mgnb2ZyV9g2MV3b1GYCtPyKZ1kkiDzFS8U4JffXaCoRzVADp",
  "key30": "xfRVeQ8MwaFmsLR86UBtSbVBAk7u5cCkMLHkoiL2jLESMKA5NcWEKJN3GCEmxMS7ptV5uSrUt1XVaZffACoyQuo",
  "key31": "Dhmy6Jk5zLU3ZNoLeRFAsgCACftivkcE9w7sknYqkbbfCXEG6cQY5nKDMtoRSnUWhhooXP6myJPeqya2DxecYdR",
  "key32": "5jJ7v4asFUuJJExUHSSJ2S7PmD28Fx9Merf3aa8qpw1L8WvyveDHeRWfhxH4ezkfvPvF7Kg624FfUCbiN5hBSHig",
  "key33": "5z4jAdj3kc7S1x8QWnBF1JwhjY6F8nkpTQFzDDxXqGLho8YvY1efVP81mLJohyDo1AzJs9NqN7fCdP3sMxN3mTQY",
  "key34": "mpMx4UwSJQbBNu42b4ytdJagc2uvahftY32AqW2NSa5KBEzu2zGjtbuW4SzdXFKdHAYNBDHHkky5uAK3Paf6UJP"
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
