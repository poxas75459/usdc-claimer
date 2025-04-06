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
    "2PUFeJMScVcpMEzE3qVj6Nd8ZXzLoCdQbMSJNYsVsECUtTbM2Xp6bKTzYK4TLqKb3GaPYtZ5pYNnnvDkLrbRQhnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xxk1V9fa2KWDh5qkiaoja8naxCL4ounNUFVg5ZUr4Etj4UncjmAM1Bc2LWVddXcyfSRtCaMjKG6aXpqMaabUwtB",
  "key1": "3NAiUSZ1iC8G8UnEiCkaECgFBpquf3P6tqbs8XHo7VSpjTHUoc46akB5JZzc3apATyrxahmwgypPntLhGedjqXdG",
  "key2": "3sSstAtndGT3TEjKD5qajyQewkRAJNHNK7ysxwxk44YVKpdjZt6MZkbH3AKrJKEjeSNsjmnGkDMpA3xKsShu4dFx",
  "key3": "2C7i6FLx5zzVppSomSieLfmQn42wBBtpHQGti65hsjN2W2ep1vc1BZyzcyfynvzbz9noPMQXqdXw9fzMzZL6PkiM",
  "key4": "59Fcsf236xA6kmwn6L7gJGLTHxyRhX28eTdjXiRNrvaxVeSe7vBWfz8DsxfsZ7ec3DxYdg4NmeeXtrihggE9hWUG",
  "key5": "2gj2NbAW8TZiXtWA5VwSvjHETqp59dk9ptXSw1FsLZQ4VXrmeRxosCHkjcGrr2C4qEgsLoV4R2T7LFUmYfsmWkBT",
  "key6": "3qTTVm9n1ymj372BpsNd84Tzq1XikpPJsgr1T48asqEHS73F3Hh61iNF65FAth6icV58whw4T7i3kTtQAkamDa4J",
  "key7": "UhYdZbSHaqX99X6hUhKtBQzw5x5SViETorSRzpCVhKjSVu51vwjKqLkY8RNZo3cnq4MEJSpXJYheiX3a3dPmus8",
  "key8": "5i345TiC4xPkK8MeJ1HuRbvFiVdpNxUeFkCYWiWAnJwnAwwKAHbjwBMLEFNSzug7Pd8BPy5PyQwMq8Fb51LzBbkh",
  "key9": "3jHpLaifRjWdRY36UbvacKeGGvaipofF9uPAyEEKcT4juC584edXxirsyWjbtL9zWxbGMES7J8ZPexrQ1vL7H3Bt",
  "key10": "4jQpyfNZdjV19xXTF6EiCw1JXsyCAZLiPRewWPpwktMaRNCTmutKLkKSJqHEaUKF8HJAbZAsJ5kE3uWGk9vXN4kA",
  "key11": "3eZYC2PnHd4fuxmf834Gw2j9Y4uU4pn8zzoEdQ4fzUhDuiunEy8AiYgSTCb87KfNJAFA6RPQPQyFwvKP8VKSpY1t",
  "key12": "66LRzUL6xT98112Xwd81UMTKnao7Jw2XRskv24XwogtCbRJmYCnQPQYq1AznT5gxbSfr1D3f8yuHT9CyFNifoQ9e",
  "key13": "54L5nZ9pypNjeCFaabcneqsgQDdd1iCqyzGYsACEgK4L1hdRrGeA7vQKk7Ld5qxV6PDptSrRLHYKj1urKcCWS8C3",
  "key14": "2DhdbETqscSk7DtKmYojwdCDQ3UZyZWBVxScGUCFSFfsHKbRQ9oEgscgS9FmzZNPK5wCcByu4UuPhNDMVkB9obrU",
  "key15": "5XvLCz8nUKhQicJqVKvxrynfoutRkN25LwzjfXNvA9efCTrjJxzE3LVPi2yj9Ba68bBD3LPvHaP9atdcbWEoPSJA",
  "key16": "SywzZMLwnUXaNQa9KkeL3ndy8Sn5vQ2MVpHjFKTSjMamuwrjQpHGsRhoczL4EnStQAhmRdXBSU5BgxiBmPew2uv",
  "key17": "5nFvyyiXUV5a2VfLfQhStbW682t2UdbsDwGA8EdQcGp1UhFmfVDpJvTwyMNsWLX9sNc7P8aXbAHrvWskoPvPPGAh",
  "key18": "3ejhspXsPPzUWGzW1WZHBD4f9Dqh8vic69n4NXPs4fLc4XCcwZhtwKnhHgH1SAtMjkNgC7TNVchPj7isirKuTN8j",
  "key19": "twNEouWBAWa9iihRXGaorEPJantPshB5bF6NaN63g2HBN8nkL5QPN5X4S8MZ83K4EJD8ZBMWhgETEDhmxDkUbbS",
  "key20": "27uHfrqjP5SXZmYMGFeFgH31uQyC55qsG1dTcaNMZhkmBnSXpFBEnVfjhKfBNVfWDT4m28ZDpkR2fNsHrC3vEJvA",
  "key21": "4jJuuSKqN8Rt8CMkj7LX19EBR5ixw93v4UXXUr8x1ZSrUmP1v8uw5LZgpuaoYmo32GubWdvzKiBkSSSB4bbXsyPk",
  "key22": "3MrLJ5fPtBDYc82wnkXuZvjyjHzuzkggBL1tpdogp8Q9YkdMSzKZYn6WgvMsz34x6pJz66bDyS3sCvfHwak3MSZ9",
  "key23": "5tw4nwD4V2wtwX6w53pDxUetJhVbEkcYFxwhghVHQYtA93FwxkpYsXoFndxX1bebcxuWEM2Km2NUzL6WenhafMf3",
  "key24": "4okWJegRdHPaFrrZSG4mfQAzpAvRFZDMuB4TtsVVEH5379xjFWcchxHJMt9ejFNEWZoHRAfHWn9SWqHv378PiAcs",
  "key25": "5UMzY5SbKvSkri7ME7BYpyorEFut9By9qBXPXfw2yBiN2icS1cEUSwxHBGQdEtXVZmdPEd3qPPRojUYhWrFXfTVa",
  "key26": "4Aa9sLRDhNR1piYNhLEUwCb7x2sDh9oEQJMWWB4XGbfSSqCC9LhH2fBEFyZS52LyZ5miRFPipwFnYXqTsDr6xtcM",
  "key27": "L5kxrFVgjttFai9ajR3PSEBMj2S6zrL1RHtp7rtXwfPL9pZEv1fL8HqNTgscNPGSMA6PyhwtmSDfGHp2xoKoqem",
  "key28": "5ZZVmXLtBYnUuiovKWope1eAPUM3hLyDMuHBAPttxf1uf5MCVH1f9d1e7vHsEuWhLsu4fRTy4F6WfG7hY6kFsXAJ",
  "key29": "3YLzcDv6VHWCDgw92pBfDgEmZonHsEtn1MuA5kYmVEijVZfSwrfv6mryW2JxEUjkv3M4pBPgNF2QUPMbQ18dPi3t",
  "key30": "43yVsKX3iCqsnujY2HheX64ppyzgiwRAMrf2Jr4RXQwAetsUHYJabNdT8YS3WjXQ5FUCPAba1Qr4m6NjdQKW5GhG",
  "key31": "5YT3eEvnptCcktfQ3oYc9khcF4Aqn4K2r5JygYkHCGVwDkd7oZVHTH5vnmnYCC974jS1mLarMWJ8KBJyQTJVUTMJ",
  "key32": "2xo5j6dnxE1UPKcwZmtG2UrJLj8jXnuEjzQYYwnSnNYBoWhTXFfuDHkQvkSUCdLCFSwETASEcUgbUVh3YcJ7MDC2",
  "key33": "4fjgesDP9tcpn3uUNMMLYy3CZKSzhdP1C8it3WAEFgZB9wxBf2Fe1NZTbEMPqViGXshDYx7qbPvMtReLXU65SCGX",
  "key34": "66KNR2Yezj6uuRZfgnwoLX2W43MFnhZWuBRQcLmWum3zqdSSXnVCRQ7dLeMaGL4Fv729pi1b9gCauzBnTonWEhbg",
  "key35": "4XnbbrfcEnTekQJ2ycJguVzCg5G2SHpQj3pzkDvjrWn3siuhEmShoqCQ4zXKQPqWHDKfYU4aeN54qsD2fYu4uE1f",
  "key36": "JFZxNYmwLv2nX31fcbeJXTsHWutHo6eQseELs82P7yoteMJVgHru3xt9tPkkDRKCSLtjAVw9gh6WLnKyCncibwu",
  "key37": "2ytQfVqJhzyQa9gBhwYfc3KDGd7Etqz9gQMjh43845KbcqbYmoQQMp3P4PD2MWw5XWfPCV5QNPKizfbfa85rCZRF",
  "key38": "5Kf2NdXr5BDNSPuhcXG2vzgj1RgtaDQHQh7v2MGh1p36NJ5Lf39JaAGJqGZ2dwCrT4G4MTvgBo4NfVgCtnA7YAm5",
  "key39": "3GKqSE5ge1yW3Ln6DV69Juj9Hhrr6N3HcyUadatohiX146y5H9qinrJkVcYZ8Z6ATmin1JWFkHStgwZAiAowtTwg",
  "key40": "vCYeKCwoWR4ovRviDeEbFDun5hmV4UZmz7NoiHDmyNnViNEwYCbrsRbtjjcqXJishbwT6KJEfzft9pJ6XmcqFCb",
  "key41": "5GRjycyif7J8Y38ZRRSjutbY52G8M8JcsBzFnPoD1HTQyhfzmW3tTbi8t12UnB2uGC6E21WimuZ8hansStkgE5Um",
  "key42": "KKy2YazKi58JunQsBerKgwzraixsoGH3syh1D3d28umsBqGuN3ko9V68ekPehp9gkBgtGotFvcGwB5tXCydSvPd"
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
