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
    "2LKHubp8LHyBf66FQoq1kXzv1VGWffaBRiRUBbDA8UuBYVH2uFq5mrDhrtQzGKEaHukzQeF6mehtZTvZZ4rELT3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kH5QaaHrTq2QHMQtLZY3uFbi6XEwUX99U7Hw7pjTdskUkQLgpdNqEAMoxttRKjA4WrtUdnvLbNbJ5UHrVGnTW1B",
  "key1": "2a932VZ3CwduHkz9f41ZEGcRHWSjygP27a8mjTPEXXvCehmntpgU51oFJ9ufQ5mrazu9gBcMjiEv3aD19CGrTCsK",
  "key2": "5iBrVkxWPw2Z7ZpVm9xMpPLb28t7RDSBwMe3PN8vRwxQ7pedDhhfZruPtS8vgEPGbdrRQ58uDg38jaEcXuKqbNyZ",
  "key3": "494YMn5kjH776G8bSdfHfjZ6Pnqt63EPAGJ3CAtFfhy2aqLcNK6WtTMVAwZtT3R4EE83gqYdgj8DmhcMRidwkFfb",
  "key4": "3ZVT8hGPmFQpapwQsvuRYYUuM94yi86vE7XdjbpXWXgt2nG6YN7HgDBMUosV3fUbUtYaauMnCMYxjwvj5HbrEGMe",
  "key5": "3Fmk8ayDR1JeWeRoiApP9UhMuUcpSaqEGbLjEr5Rwb73S6wSyKUCibreNZFQz2VDiZBVpomJaW9THdPWhZ17y2Sj",
  "key6": "3HoNBVYcEB7sVTZUTgUvMpR5X1bsRbDJ8LqQg5HzbiMU62cZ7AWjAHeQ97zmGCiD4uL8DFZFbs5YAzcMJJsAiBbJ",
  "key7": "4XkPoZjxF3ocvJpuMGmMBpGkJqmfw2Mx3JdtCaTJakzF2ApsLzncxBUiuU8n5f7onA5WrPJPFaVVcS19s9hu7PbU",
  "key8": "2jQCGAak9K8w5B3cpCS3gRDVX238PVNTSbJnH63dAcSc9vxJdoqGpjoUHhxSLekSYmshNh3BKU7QAdRaj7FQQ6yH",
  "key9": "2mtdTsuxKyp9fRiXKRMmAgtmYmNSk87RHuNJ2hJzxHxivTyES26SAPDsZqthhyNK6PgfNUv6LiurimyuFEiJFbc3",
  "key10": "iuTsmrukCSnsRL67mTbExtST7zdwMAqxM4QE5zvignYYfftaTu9WM3thvDjWmgwCyCXZ4fmxFZAezwoGoQnyhP9",
  "key11": "3s466jiHeuCGXbupCuKFfjsXaGSi5EoyLzvpYSDGWLXxJXfDCTNu5DdBjBtvpLXzMiPaiWMM7hTuXCAhunzx9b8b",
  "key12": "5cZdTg7Z9bEfHifUN8Mfs7AQeKwcfTq8MjKsmKA1YhPVfJqxYAKnyHQqHKnhMFfF8teg32seRLC4PXhTxv1hhA9f",
  "key13": "3rVPRUAxdkDo5P6ivBgGah8mmZSNeJyEVbLrRs7uHTnn9mM3jsCytansP7ug82CF6RtY8c8H42EM551yWMUQoUWq",
  "key14": "3D4CFEBz6ScHxbqRHc2tLkcYSfNRrKNJJV6Cp6UZqPCrX2XsguTVwqYUZNheTpYAu2t4JVD2NmpPXcqXDqsXTtPj",
  "key15": "3YyuddCg2eDaTKSEPkH9uE8eLkPzFvVAsDvGZfV6qSJMCsjBkJWJVzbuteeQFJUqqYJA4ELqV3HkkkvTfGYQZfGS",
  "key16": "3QWC5MBEN8JGNRVcFtMBWtpHKs753GuemJVF3TuTy1JDpxKgDKgs1TH1qdzseWZG4CZshjCpzmw4WgS3fsTVquPG",
  "key17": "3MwxQiBkLdwKZCBo4Ac6F3AkcEzcSsGq5Hpcjd3JQr1WVfF9fS6SgqQRHseHh4EH7WVz7ZH3b8g9JGFhCQkbTYZx",
  "key18": "4pxcskQMUtYuD8nWtW26Uwecs2tmDrZivcwncVvzPJNbSqhmjEnxzpJYsVDxjCvdHyzzphU6tBfFXo3pue2i7af1",
  "key19": "mFaVsYotPUWetAKxr9xPfCUHZvAzdksnfuVNrzw1PnQ2jjggvquD4YyUNVuuschh3WBTChohy6PaaQddushYX6p",
  "key20": "4YGBas2pD78x4x5iCYsA7ajpHXY4GBGKHQPa1ELHRWMJjV9hei8v1KinDDCatyd18kAiBEDYXkqzmSXAkiKPB2Ew",
  "key21": "3EuXRaKg6zQAFdviMvfE9xExapugTudpw6oV5cfuYg64UaQy2hY53LyDw9RupFtm88xtnSMBs5AnvgNjkA9nqXCq",
  "key22": "4ia8vDEpFDPdhKt5y8rAoHqJ5dNZT5uAg9yWUoXxkpZEGK5cijo7QdFvnZMAeyd1YjD9yiu3NyFxLCXKYVvGMNfS",
  "key23": "5doV5j6kTXH9CM5DBhudK5q9Yz9dwgQrnjJqM2UzioR5SdNaKd9N8EnbznvoWa35Jg2KYVYYUvYVCAuHn2vqofPm",
  "key24": "2P5n2H1sePWCidGndw2aFTGoJhHVnYb7fzaGXSsK2LKS6Ea8hoc1BrKF3PmSxRJ5hpFWxVhA39oxAykwZyhpjXDm",
  "key25": "4RXuBNvQpMHRKagrBkF5j5PUB9SDGP2J8ieogcku7Xrm9BFMPmg5E4Ao8s4kqEHYChWDZreVN2cnCU22wEcTS5p",
  "key26": "2LQEVzZVsVjPZDkQArp8mxHES2ffPmXW8pEe7zjjYg4YBJQKHyq8Db3CgqTu3EmBXQ5Gd9NmzxBSWTQpCKiLnfND",
  "key27": "55frQpS1QQHSWeiPRyg83JbP86dZRrtYLWCsFDZn8ND9Qxr6prhcq8zmkhPsjp1X4yujG8KDMTQx2r6N17nDaxQu",
  "key28": "5SMHrxvmAHFxjF3ZLpqxq2W1KXAhC32Cv7mhq5ue3QLcDVpEJ6QCZJiKNJmXq6Usc2xCb9jj5zPvNLZ4aSxGzczk",
  "key29": "3yZs2dgt8XYy3awpiBtxZNFY4om3afHCEzM42fMGtkUpBPxMwaoYXiXMMTDwsc6rkUhU23814kgRCmDHEbiemWii",
  "key30": "QGN4L496y97betqFBAHyJjqccEDWbY261B7gjdLiubseo8Dm6tS8HrTqGJkjC9NuvPpWNWuNEJuHfiLf9kdYGDT",
  "key31": "66dPzY8er3gftzUN8beGFwf6DTQx2B5tXhrjxHDwCzbCrrGTfGD7f2VRxJkkqTvDGiVoeM5uwcanH3go1aiLjqm6",
  "key32": "671Z7SXQDenGgnE56GD4Cq9SZbSWDP6rAvzWuymGDqokMDdWbZk4W7TKZGweWWSTMiMEy7iJ2dFEwWHUL8diEfts",
  "key33": "4qoFxGYHFAfbM6kGC6KczkEp4fBSGXvN6X7W1njLib2Uad9ZbE8eb7KEnJEAE9c8e2DYZTxNGZsB8XFyEDHmbEzc",
  "key34": "3uQxY45TPhR1cMNQ6usMDNr5iGb6ZmRhRUunT1uM7NWHeSuNQ8ya1AEE3KhsXZHALDsadeG9JR38UupwG65CV8Cg",
  "key35": "JewB7WggV4g3APSFBaPH2cXUugmJWHV5PruzKeFijB24hFLxqdEWBsCZHhyS4PcahxQPFCmDfwCKFTtFwSoT9QZ",
  "key36": "VZG6tLHtqD71iEeGamautgG5AnoQubrNcjhvJGeAshcYtSaz5w8uRHcpxNu7VmPnshWchxSfX894UhvjeunZdKG"
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
