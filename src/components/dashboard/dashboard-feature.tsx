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
    "3Zfjk4NnhJ3MwMM96Kzo6Z6BRxVBEg5LPxeRdNkyCnGgDdgqztFuPLJ69eJ4HUBUP2GwUCgbvnUhE3Sr4ke7ZLhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNq2mhkcWwupCwMy3wxZXtw99F8rx9tzghjC5KEWVGEzdDZr5gHE1h2L5dECRH8HBFKGj7Vuyke81FaE2JS4DiR",
  "key1": "279qxWX1wopF84Ua3Bwc1mpteAkWrzZdqdziQXtx8ZNXVTKuQBJWkXCV5L4bmUdTRBgqrMKnCvnDVqv93vZH6paU",
  "key2": "3Fv3pfbWJynaBqFw4KseaPAwLHWg2U8n2njpkrtF2sSugZhW2imRknDYq6RbCZTmfRZxyvrEwVT5ZjSMhkxpXnQ3",
  "key3": "5d2LQ5EQfLhLkmZjBu8jdNLqTzGRHSvqr5QdPBwf1pg3oaizCA851fSyFzknmtQUMFtb4x6ZBXmodEzxFaHTPgNa",
  "key4": "5f2fuELrmCuo41XPugPThKm3YxFjZagFsF9ACwAxnmXLmqnvKtsL7GTR8BHrHLvopwsnq3W9KjqAgwe2PE39W9S9",
  "key5": "5KLMxFahcPm2CBFkVwyARTGisWVeabqQ5fdtHqNgvSP6k6YPP7NcndqqXVFA52c4gnzrydpSqKQ4hPKhBWYMR1HK",
  "key6": "2KYKVjTBVTjhGfvWx6XVhXAcqdYnJvfTBw4uu3Q7d6dZZ8mDbVPia2UCEVVVWTACHvuUoVnUKEzkSXpyYV49DPLG",
  "key7": "56b5UWvo5VChBoFUV9ed7cjoRWpbDoEwBMcKzo98u2wrobhbcr2juQmpdtM2UtUvkPnV7ecb2zNFgnzYrrcVLRG7",
  "key8": "4qm6Knwcf2bbRjVxgawTpfP1zWMZQLZoPrXp3XcjunbY25J4tcnhaqZFdqYbRyZSjd5q9zN6NS27SJR75ZhBke4T",
  "key9": "7zFnmBEcahAZvFevUS6MZJh1Q3rgvpUGW3nUgJ8tix1sRG6fkNEs4UDkQYxgHq4tqk2jbLAMk5VSuRSyR81c3ww",
  "key10": "Qecc9rCBoYXk95NPBh1WSge3vGVdGDHeMsftLovBjNZDn4zwP8LsXCqbuPMAfyxDu6M26umUEE5gsQ8mL2zFmEn",
  "key11": "3xfgvsFTUszFeGuxKEuwUAoU88X6FkoHphRuAosqipZ4rYh4iphgbsk3FzWD2wByd1qX3kDfZCXM9nCNNJHaQswj",
  "key12": "5SnSnk77YqcqWRxyR26JwMXXGzhAMJRuh4PnHVW9rHPogBoRK3nEG47ovSsgoRZSYtZAFw9bTxRsTXp3jWDhd8wd",
  "key13": "2A388GDSAsBU4xCKNcdzgsjXLB8JdqgQeLY6dUUi9T8xhmbQ9svFTuCotMKTmay9ktTtpLAHwLjBFGUWZoz2Fvuw",
  "key14": "5QM5Xog9BL3qgU1GDSar6NVvZ9NcJQyftufQwQhYyMwi9AbhfF7WFjQAd2ytf67gVaF27LVaFMLFjKQ6rFdqdVcu",
  "key15": "5qYZRdcUd8HBKTBBJojWdti83qcpqLtxYxVivMiiYn6g5HN5VABdPpmvLv5NPyZNcrdfveT63oVVDZ3BiipQXGz8",
  "key16": "57qi3BxHy9wLGSMFcaK7mS66rANJjggtUCDKtxjtN6sdF7iVr8SzArdebC83GYcjxgdYg3ZU426bA46NJSTCy6Xo",
  "key17": "4QWDprVEKdTasGMUB4mPQzQ9FZEhzFoWonMK2ACPTK4Ngok8Sju4Qxc7ZMZLvboBk3cybE4caQDuRXAnF9p5ZRLj",
  "key18": "218p4Y82MDGjVQGFMbncpQjENAx69cqjVuSFieis3Q68A6tkvWpjdbEiBX411ezbSx3BtNsMSe1fzgc9QsDkFbTb",
  "key19": "3Ggn329gALRHNKtQaRrFraTDbzooPn8A28trg3u6KCDpF2JHSMAkp46KH1JfkS48UqxF6Xz6SMJzSGPd81yucgMw",
  "key20": "56BSQQjLHexALFwT6LD1BzoiYaquZN8ywPQW1FiDcR7GtrGQx7hgx4PTzY9Ti7ufAZVRx1fsJkwnDRFfYrh8Q3vy",
  "key21": "hwpvbNJ9gaguga5piVz2uwVMAn7LwTAkM7sjvWwTB4qb68dBjeCWw9wvyYqUEpUxNUvT2NpDsCWzind1G16ttfR",
  "key22": "2sDgtzJNEW1NNkyFJB6emwFNepkcWyuYJiP3ZdGZcVKmpGeMdp1MtadNjEMyhmvTctNG2ekWXtuBG8Zc6jcVbnaM",
  "key23": "wZ7hB1PbEXaTiq1xDYVfMKmA5P7BdJ7jXjaJ58gC8gfsZBzaa1tVaZ9Kzwn45FzMwUeVBhHPxDmMsh9WfNhJ1hc",
  "key24": "4VnvRwCmQrUSx6q82MVnyqPvRaD9XAET6vyCu7qVrAgNphpuKoi61mpjTcT1Kfg8Qr8rPX38fRLyTeAzu1wPMN7L",
  "key25": "4VicZHmWdG9aQe7C4vBBAD44Wxhw2w3Zbooe7YcYaLBatWG7RreJHPRowsRk7GJwtA95JWTesv4r1RrJidv56fcE",
  "key26": "212iGJ6EFqPxsRRijuo2TFoA8WFqS4Fwrxb9bNyyMFahU2rq84XTeAiRtgSPV8HocfnwNVGBKZ7kA1X7mnVMbidA",
  "key27": "XFbcGxUV6YLGzrJ6NEr44PUUWr7EYUMjRWg8dx4VqWZ8Rqg4GEeVDtFxMrgQ9w96dRp27hgg7pqSTvgLr4DYmq5",
  "key28": "abiitE88BMPfhwTZ3co4rG3giwJXKaWFPiZUi9MB5vFueUJ53NRmWPeGFNv9jvXnH4qbgfZWkz24rCHpDptNS4X",
  "key29": "5nbkzTwBuKUwAudy4UNVjN7Tz6wQowFaaX4UDWzFEQbMuGGVCwwuwMi27FjDonAjmoKfP5zfDXc8JtSxjBsUx1b8",
  "key30": "KkmYHXHQ4Auhz3DbSJaDk544BRhNNEk6uUsLFcG5PmbWzk5jb1aEH4bhVcyxvjrzgjTf1JLYqfMXyrnjzF3Svvj"
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
