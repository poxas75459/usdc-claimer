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
    "4LccgQt2aTV7VjaHvwtG5CM4SBWG6J2fzYyYG7bZhsCYYkRjw5GXFxkYMtRdbQu1s3Nsm1Zr13kccFs66Tf63zz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NUtdDQD5FuuzUpna1G2MwrHtHYNdLzN69USNcdQypaG4xJXWAFMxHRrJ4vZCH8dyU1rAz29ZNThG2SbjeiSm2Zb",
  "key1": "4CfQr2CW9iReK2qxPibPwkrKAjB7nUKR8mYZToPB3CG6pZ4uSvitBxng1PRnj8v6piCLf4Wr9ZjeRbFLoEDcX6CZ",
  "key2": "2AjQHifybLKpmWTBAZSkYhZGfhijf3ecEB4MVSZEw8xCM5UWec7p37VCNA1PvYS3TSAvz4VTnLgZBFnMN6VzqYik",
  "key3": "2oGU8CWDXkGFtcU2rjDmNjXKYwa6LEoqnMn4pXPpLVHEriCPhuPURoBtQH7y2BqSsM6X2QzicoKCJssgjcFViV4Y",
  "key4": "2sWQJ8RSvdJfHJeEHWtdNk5iZyArJRN44iKGn2Xhabny9TJmCxshds5xL3FQ1VTJc3qbKffjvLUJEV68FTYVbdjy",
  "key5": "2B5u1jg8i2Ux5R9AAnMvGiN6SXXbNnk4RJapet3YPJnLVBNpfPK1wtKLNqDWoWZf67u6rcjqN7hQbCfMnAWwyKU3",
  "key6": "65G9Mr23q5bPwcVY46ajRt4bTwmJ8JfLKvWy9RAyhLngQaw5KDKjN4oWJ2X2JT5kJf2HN16bzXvyY1avWTnJLNo4",
  "key7": "4gUZrRGuopMXTpGDybVBU7efe6U4ayLeCiwhKyphgz5Ka6d2c4uBanHGExo5Gtk2xAQA7397HgXsUQd9pPkDxS2m",
  "key8": "2PsU8rm1svWNJfeCcWTDLkc32RHXqDGx82qxzcxHyLwcZW9Arb2F4LwHWid4U5qAk5TYSw1X4mMoovG4XkXgmFUv",
  "key9": "48CenPjoPtHBo5SLrDLPs5MbhW3Pc8vs9km6EamtgqWkGZtL9RxyRuEoahJweFaRv2hWpzH6XYqxWzb7NNpanwhF",
  "key10": "57Y5xAkBceAvfg2cLUvSnKNh6kJFDb9uhWJtkZVt7rUTrMQGuUQar1UXZiBnm7eYd2x9g8tWRkz9QHUsWrD3R8f5",
  "key11": "5K8HKqfShiNgztKKLrSdSMdgHEfn64LNmtcUUDGegGQp9SSEW14bjr4u2PmRHqePhuES5nKTPABVCjt5L3jTriKY",
  "key12": "2kb6TEN3zsioYyx1LUapvByszcto8fR8Cygaw4jGAuGbXWsSc75Bm3r9qTVxfMAcafQdEpvBpX3avW22C6s9gTnH",
  "key13": "35M7zaocejaE53aPikh2mUCLMAem18p3z64KLEUw2B3hK5UKQhaeg3XZmy65buYzfvAjpFDyW65zYDCgramEkiXj",
  "key14": "2fQrimsbekfAzWS5UVQ4tthzmLy5tyhHVP1CtZ7Z87ysRQdaA7LmEj46W67Zgujy7F83FKgZ64P33CUAfQSmcqig",
  "key15": "U8xfQX16uzxJ3Y69Y5CB7rPkfVw85Kn3NiN6693v98GmV5hbbWLAn633PiJn2V2tAR7tYwV1fEZffAfqc2ge654",
  "key16": "21jfuyD8CuAUgExb2M2bZ45UfhzLrdCACtGdx52pUuHn8sLcKYYqEG9N8bKX5Af2mTuqF4v2p65f9NscgqUGcnqj",
  "key17": "4NdeSez5A5qRmu6v3n6gMZ3PG5PArsoSe1HiC9ZMi57DJgvo74dmwNV7PBVrb7FrC7GCnGxqpnQTfojKuhjSDWD1",
  "key18": "4d72SyN1KLL3Qj8kdurGVj6saK1XZjGY38XcikLDFhaUTXEXMoC4VJ6afy7oaHGq5gVHmb3B3qR16bAcbeDK2DEt",
  "key19": "4avdr9cvmSxHHg8RqcFRBYS51kjBcgDRZC3qfrHv6VAda714tPCP5GPLiS1RxqDCuC28hJbc57YyCykGr61QB38o",
  "key20": "55R8XD1SXuwie8R1CaVEiNnkFL1gw8DtiMUEchzU5BgZqZSwCWDCg4zjzvaHQYNV4NXJ1rb6Gb7cEhb6F6S7mnkY",
  "key21": "24oVwszfX1BxmQFjEJxLHJPUQpi6uiE1DRCebWcQsXn89x7sCQnhMWwnT7oJ4FahFLy5YdxTsPGbruHKhzxFVSzF",
  "key22": "3XPmwcV1rx2wKR4NBkkFZLPxDfsqAi8kHP96TAEVtjDEDdwMYtXPBKLADC2Myq4dG662yfY68Z8bzDZgPpHcEkXC",
  "key23": "4YQ33BoMcdJeKqUyN6SgaDZCWkPFWMwRNJXrWJbZL6Cjr4nFYxhfrPiALrSbgtuhs2hprejWxm95ZR2U8m51VXz",
  "key24": "4bGgh9RmKvQEqj4ANn16dPcDSpYkecC4ZJwMV1txLPYm8gTFB6kA7V42zxfdJL7sFxBrcYVjxYZVU4Co1SSduCom",
  "key25": "jP5utgxhKwxJ2XcUrReU9ev4i6gVWKGe7yRnEY4qEbpLgUBXTAKLZDeLMRFCgAHKvhaVpMgs4SrzJfJ2PmpQNEW",
  "key26": "3Wd8ZqkMTFZ67Z3fBR7BRoHpn76Xq91W4cFBrEH5RkEh7zTkgdWJnbtmubFYfn1NKx7ogRYkPgYZLBjfo3xiJYDV",
  "key27": "5ftdpmvN67q9beQLLU1VKFcYGkhgys1f9YuXvdmwUeA2LE5woeuSeshePj4nDQcBRfu1kNRR8xvMZmdXYRPrwPV4",
  "key28": "eEut18TXMN3y2TyjVef6rpFhpeMu9hxrufASPfiu9zqG4C2YtMTiRp5xG6jWnrbubFv2ao735Rgybx3ZLrNDKCV",
  "key29": "vazg8AsLdFot3qMH1dD9yU9gaduFagdHLPw81mWmBmBw4BMTE6Hpx4bRkRfGXPfCN67Nv3gVrDmP9ThXKZE9ukX",
  "key30": "3QxAhj8fTP79z1esPwzsT1BWo8PgpJs6SacXQsXQnZgwMiNjAfZrHtADLS3FtSy9CRwrSHRCUD9EXdtLFk5jpxhx",
  "key31": "3WTE9kHVpfkBjBU4BCUzcUKyFjPNtFT1SnXHnQ5TSTqyUZfTWRWXY2FYaB358McuS9tg4qmCtUNvp4sABvdNGW4b"
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
