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
    "3sTn5fghurcC35gERcRwjYrHCayA6Wk58VC9hZHdNDTMyuR56AbxY1rBsaoUFz9CpxUip9d6oNJvxt1VYxHEYA5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RKNRrvXxr935uo814gBBrKLXFmtqfB9vAft4REsxrSAsUQBfudJ22SwkapGv1PD7N5zsHeomSmoWBfnyPxbsFpa",
  "key1": "4CCbMURSv1p3kVjgGF1KEjuP5NMkjZGgKgn4ns7kBASp87a2qoqTn74B1A7T3zpYgiMFNf8zxqRpF6cL2JnAXaCs",
  "key2": "4HTDBUt9ZSSrV1zhXqYZ26jAYDUnJwE422FJ7YGszRN779rpNR7kXYyL6N9qED1MwmptMGwsJQnQB2nwUwCC6ugH",
  "key3": "2Vam9H73QBqJWTkruySeGzYxqsUSwm9VCDLhNsFz83tHThkiXgaVkHntzffpsDHFUfmGrrarFHttubqqQ9qj7XPN",
  "key4": "JAEUrV1z7vg3CLhhQsu6UpEyVkBsethA7DV9gpm57G829kUCeo8nmvXt2ua18nCfNRfw7PgVS8bKYsW4nVuJPmQ",
  "key5": "3xtPgFbXdw7vgp7dRsB71HsSu6WcAAg4VZgaca1ihoCx6bNoFcGPksGtHyZPFDRi9WWtWSpyAH5EhWzKDSaxmyw9",
  "key6": "2GtSffBN4sLRaFcRjFmKjxxrM4rkQJ4724wr6Tnx33GqSQnoDKAc19gh45Bbqm6VMCLng49v5x5s6NTpzSxRMHiz",
  "key7": "2PRRZkWZsa8reGmLJdRhDfC3HT2vE9A7VF3DNGdAhf6kMtcCYHQsARF434uGiDgTM75DLcxbhQ1HjCB6yToZyWer",
  "key8": "5XtZBypZHywu6ingahNpFhKP11nh76WxwqzjtJFfiGXuK4dfMJGt3Z1uuKezG48Wz1KmyQDR1q1vqbsJr7b4cFJX",
  "key9": "LM1SMngMSVV9md6xBdNYCPc63YSQnDhLwJo4nAFBPNy39wYWM6qN6FexZJwyU3YhnEAoLSgcKx4gmgoXu44rJDH",
  "key10": "91dNP5S2uEE8vQig2sXZgmXaZVBgYhM7ffZH5oq4jNiivgfrX5rNiTrCZerwddd3GWDMGa9XLS5aTeyWufaKQsB",
  "key11": "4WHSbWWj4DdASsE9r6wnhEuxUq4XkwkCAGgN6s3zEB3k4P7KGQ5btWPrchWzDRaMAGsgR6K8reVDMyg7wvHZT1X5",
  "key12": "54V23pAckyCLKTDXcKuKe4M4RWnaHCr8sEz3ZB7SAjnFFpqbLZZqKr1oUXCBEPiTg6irJA4wiCAkZui2hcJW4MDe",
  "key13": "5hkEa7HCSuPxXRQRqfq8MaqG2xSqGJ8Lt9RDinLSoPUohLBEs7nm9k1Gz7nhDoushPvfW8YrcDam6bPjRSwLW5Zv",
  "key14": "5ASZZ9V8STvBpxYXpWeJAJv5pC1ZL25D3hcCqYCp1rg3TS9e2pp2p9bMf2XD2zGz35fJtzqR1XeRmSPpQx1rEJfx",
  "key15": "5bw7B94PEoZCWoJJCMGc9FgELMB98vfMozpMwvNWMvz2XHW7pF5vZEh1hAUd8BJESTJBWDsnoG6jSTDmtM64v8gY",
  "key16": "5ZGxzyZCBfUfNaReto38whQKdD5JhyjstxjXQJ7Tf4j2vL3zpcss5skvVAZnNL8CSvHaFBMJ7sB2W1NFQ4yG9map",
  "key17": "8smdEnc7hQZ8Yx63NKYjLfAP8EH9CGquNe3KdUVqj3z3DHjxKTG6SULZHKoyBJwWhaKKGaujnH2h7qrc22V1ZVd",
  "key18": "2pCGiLzwAYyeqob9RdGJRjq9eTn9GCbzSAX8n8N6mBzuKRpkfJVPJCdYqZNwuaSUVtk4H9iNbagJHkwLj7afsaqU",
  "key19": "2eSCJfQYNyz5xptUtY37WcKzXZS3rJwVLN729aQ2jkWNciv6pCAt2j3L8K8CHQN4mp3vYkeY4GKfn5CSvYYgRQg2",
  "key20": "2cWBTtjyN1wumeHXoXSCgJCp5eBGcNXzyrYptyeFNfFwCEs2FLbWPjzNN7s6Me3HXXMjHaKTb9nKzkMadV3JEhVC",
  "key21": "2HTCwSvd5zZxL2AonDvCazLJoJU49umnXL7XXtK3sQNq8siJyZMie4jg6geJPKPRy2fzAAuXCjDy9TzZyUu7Kn5L",
  "key22": "2uFQpE4wFtMHaKUcWQxNQrnhRs99U5r8KCYPnyicgt89gbqRYbNETPFFZKPgidjHHd2KnPfRgqzZgL7FLRHCcFj",
  "key23": "2mpztSPMtx6vV4bx1endCqiQwothkk7kTyPz2T7Vwte7BinepcAjLjcNCqzfVm4YUCcceB17fTdXkxkWqERRSqzy",
  "key24": "67aQPqSynV9bgT75aKkwQbEcsusyhKDrkGQhV15mRq9bjV1n3mfdkextDpD9xZWVG9NkCPV2jBmgmEN59vvNp5Px",
  "key25": "CGLuCgtqqWNYDVpPTxZB9wzkcgPXJ4waejRrhZSbtAtytL1kf3mjuEY1YamumPntrS1tSmeqHcbbLYc9hn9SbAC",
  "key26": "4KCXBMYx5q3zfC1uM4csWAmoNDH77j3rrvkgpD21w8H8YQZEJmpadWEz8b1wuiuUXJ1iNsBp9DSbu84kovx5LNdX",
  "key27": "3LDVjPNhVg1utrQRGfkPuJJMov3WoWXzF3hpZzcnr7eD2HztVXsEL6PHiprUKMZPcJcFouPr8zGm2TLaneQDR33U",
  "key28": "3cUvtpho2yVtt7UMy2tvxAsCWQ4AzW1JDtsUVH1TEPtdv9ypMRTnMo5vaPVV1R5xHoqAPggV8E5H5hEAFnN8wTgU",
  "key29": "4bk96siQiKZeaq3GAJ1wE46sjAfRvFw87S2qo6rUPcNeBhs76s3FiE9meXAkgZaT4GZwrCdtmtZZAKCcWLsZaNvs",
  "key30": "2yvoh3uN975bgG3A8JMcBaXU93MjoLBmPVeo9U9YfnPtu6j2WkNJ9yozXikyWXga1YS8H9CfeQMPAzKHP18vTMfR",
  "key31": "61tcnH8Xmpc5yAe9omeem9iQByuAyjttfi2c73oA4N53P58U29fZ6bBz1SkY7BiLGYC4MMyCJjYYRpTouLAHcJds",
  "key32": "46jwYU4Cw9akNPwddiypCD2JNsq6VLbCMz1LGFgswvhYreyAaW4BxjkqfnGn2HZowT5Pb4rBmn44PZYE5vNjz6Aj"
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
