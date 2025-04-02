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
    "3vZ8ehSTm7gu7wbYmmD5WrB8ovCm94ZYpk7P4uHmnrAxCaotmwmjLHDUTumdEHYdtRoQPSZ8DpbJA7DxjRY9hQ3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39HvYsSdo2JP9MNbLS8MAbZnyHgFz14KCPKaddTrJe5GXUbKkCTyoNEJx81Na43oHW4q9S1wVQSXg2K8B1ciXdN8",
  "key1": "3wsGFiFtk53XHTyyeipyQT6kpVpzX3NVKtr6QzhXKFV7M2xpNKirqsdaZnSnpNAymVALwXFZWqJb5pmaJq9Ci4zn",
  "key2": "2oh1faztY6ujif9Ukhup7swF1oh4vvbdimynyVEQPS6yc1xxGHSTR9x7otnmBBMKU1w1FU9Qgyrt6wrJ7oCjrGVw",
  "key3": "C2Tr4WYsKHu2eVRK4NYThj2jfGXX2BuxhaKzcG2DpEpXhpjzXd4zpPfFbCFXJAr1crusa3fmTowvvaAJw8zqcCP",
  "key4": "5jnwzCAyx4UPNFAUT1B5n3dAfqkjPtHRSZP1pY3taZtppn9TJ7fJVHfPstMErbZev8XWAumsm8WGYg62YF7HhdHW",
  "key5": "5z7cwKZVZi2iyMnYpZgoJ2K95wMYQauPSY2Ao7c5HA7Rp2RarV6v9S6eVidFWTcQaYBusSbqL6awVCuPKZdX2cYq",
  "key6": "464McYGxVKssghSknNnP9NjSTNeTwZSAEm62Et5Wcs8CCtrecfxXLShTuVH6aNf3ZjG8WTiMPEpqC14dVmKs31w8",
  "key7": "4oDpnnY71XLNZVUS3pg3pJXeAnLs3t3WjwRrq9RL9r5x6HHF4LZ5b36pWZcb5cbrnUe2NttWB2wJypHK4MXEuC54",
  "key8": "3U7PFSZZ79tksQKj87xGwb72xNshyLtyeaLRBtYCYRrHU2K2NChySgAydenGhxGMU1du2usEWzh9JyicZZQJbo4m",
  "key9": "4HWWTB2SKfECFTmgh4Zvpcq9b6pR3X2qwkH4SKbPbeFbW2jvaFVXgWoRJRuKUsQMoDdMtjUCvRqvWCWmBYCcTuHa",
  "key10": "3RB7HJXjU57HSnHkwrzKtscV2vL6Ae3C6dZNrmHWf3hbgCw8VXfo2731KzH15fu2YXt3byHDdfFNEzBW7yDoU4LQ",
  "key11": "4WAiN1UjPgVTgHnWM2MRqsvXE2VN17kWWEbr2T1n4xjqbdPa9w349ti4H9cX3Q6Emr6PeavjGd5gECTFHUyaXTu2",
  "key12": "3YPz548WbAQou32kEdtBqGq2QTCuMagUZ98q8b4jYPWfYhx9CHc8SXPFpiqzi5yT3G1z2TDLD3FzVMzppwtBgQTg",
  "key13": "2UiEtF6hYDjV6f53sV4no2ppb6W2gYcQX84e2JVXnEbcuRqgP2kh7UcudyT7yJX7kSBidfGxUV8pgNRhGismxrVx",
  "key14": "4GdkLSZzcdw5nogCeDqVd76yp75Vhg99zJr7wcKB3Neqwri5b8CY3rJtvcN1BYZXjdvCe9N725taTap9XJVzdkRM",
  "key15": "2PTkWGLdU1iCu8UUotM9GyajF8mCQXDGviRNQ5pnYVRCcA1Cao9H7G39ZEL8Bv1YbuDm2WSXDCYPqs9JLD758gkh",
  "key16": "73kKFpDxwLPrsLxeLnBkLaiBT3FMfpmR9giSK9q1uA3KaZBakLfNDkd1rp4jSNncLz7dvTcuFxwDZxHuajeZMN6",
  "key17": "486wfF5i43ZEjFzbJyBUJd7BYnL3U5igCEFPrmuFwMe3B8DAeXZRjuneg5M96sedBoa6QUGUtQWg6ERqG5JNrJDG",
  "key18": "3NonQrqkLQACYqmoG5Exrt2SX2TNCim4YGjzFSMuXVC37NKLNop5FsZi3J4BUAPXkWwnDM5J1Wr7rekoGeVN4yaJ",
  "key19": "2iN3hcDg2JB9RDYL2sWNQ6MXUXEzDh7TyrF7i4rUMsWxANJg4qkJXhmqmpdigrZTrHV49P7EW94mNT3SecE9D2zf",
  "key20": "2LextHnxvVCzXUzXwsN71N63H5E5J25va5Zo5PPYNYLPWP5EBTK5G6jReFwas4EJsQnA2exwEuUhJKPoMScjSePj",
  "key21": "5TxfTS9fuvdH4YDugQVAhMLCMktQgAPdYPwZGMiS3TyYPwPsYhwH4v7G5EFHms4vLQc5GBEe3DChLizSaT8uA7rQ",
  "key22": "5KZ51R5kaCTiNjA3bnsfaddBrFzup2W3dWfYfR3f58N4kRhgrn1JCgCUzv8va1DcE29nByX2DBGjrnX4N4h2qWAU",
  "key23": "3s1U2naEVHxN7jxSpkopYztTVyGF646Di4zUrrP24oPfVpKAQu2Q5MrwT8F6cMgKj3bwap8ZDVrhvQUWvwzBpuk2",
  "key24": "4w7vX6pfwQzZBdaPicNka6RCfvemVc4PPwviMbvip7e4LbvDhv51TB9KMgLP5zoxPgZT6x9HSec82mZykybWkecw",
  "key25": "2GmPbSU69MadWvcoCAQ1QRTp47VuLURQoRvzeUimV3VUyQ2aFkh9KzHCYzxexPvhYtmGcyY13CRVc2tW7iZjt3cH",
  "key26": "4NC2TxiHeQz7X1eSaZPETy4NRdsqmyGfpZvtkeSQUHUifT1UK97fWiVUXUnNNYkmiyUDQ8QTwRHzni3a1tTXLShQ",
  "key27": "3GwmWVuTK7NUtVbB6yVLeNsp3Lud2n7by98M4vP9pNAFnQySRdBCDL2SsTYsGVVYqwettpMNo37gdd51ECYn1uaq",
  "key28": "2RjdGnkjMfMceQq5Prvu2NhNTvxJX4K6cyLcRjzBYa2usH89WCj6XXkQa6hjxPE117aA9ejWFJiUo9cnisDzh7sQ",
  "key29": "45FUdiUBvtwSSNiyL9JhXho4e1P4vJr1eTibQqmJnnEAoe5CYQFkX6DXHHZynYh5HQJFs6uEwbSi7RAh1ecCjnGu",
  "key30": "4jgvLf32dM8TysyPLMcbr2Pqph15o361ex3iWoZVoFHZPvXrYXXozEru38s6jUZzYRJsv3G3zAzfZadQzrxyRGA",
  "key31": "3S3mZCBNbBokbNHhwr4M2WFyFNAvZwGs8qnMgCmSGsdMU5ABpHDjpiNM5vKq9WsgBh9cPNtSkk1tTuGct6Ze2bPL",
  "key32": "3aFa9ydjUuaGFzHnm3qWJnJH3iQrJa4TiEJ83JLFMycCeeZgdcC8woTdAmUsooCnuBvyE9m5WsT4RPMgAf5YHn5N",
  "key33": "5p1bw1duChkBkYKRnZUitLaAXxochoGcWA7uDfUKZkTsVqjcWn6nDZNacnH6SNtzrnuXBauWZBtXkbJuYkyu6wPr",
  "key34": "5MAPCCp3EXkCuwCTbZVWDwSNsbecscZDZFkDvetnTKqHip8Z5aWTWuCt5DpRwgQkugazJyPBuaC5Ytq739obTE1B",
  "key35": "4Zu9Jbsufbsizxq2A6uU9ejoSLopYLKJpkJoBv6WGJyH7w87csTrPVyujQjPANYefY87hpJiPcYdDrLSKayegfc7",
  "key36": "2nLSfbW7UW1snVmYUUWCBxLsRN8BTEvQRk42hpLS2VPLEiaXJGTHi7oAdtjK7now1H7w3LmcGD5FQX8waMbDRTVe",
  "key37": "WBqJe3uuSYc3jsd9QT8VoTaReaLF47Tk4BfRMR5SUUetDbbhX6mv5wTLecY4Lo8xFxV79E1XynvBF6av26Vzirp",
  "key38": "eYKPdJVajSXnK3eeqEEyrac37HZEizox9HgUR13EW2AarwF6HKmJMmb2PVn36RU6C1c6udmKyuMTFaKuwcPsGVb",
  "key39": "3tQ61qNc8Byid6TpAHiaDd2ZGiAo9D9j5DfHgA2uMdYgijToqWdWNS2qXgE6XpUa33e2VxU3rJgbWfRSFrRRk8pf",
  "key40": "4gkoyK1bbMdTz7TWAxDmxP5rQqc5rysrDEmY3K7FYTecd7S3Nj3MgWyFTp5DaTHAe1ML2AZrSaeYwyyuYepeKnA4",
  "key41": "5k9ZYtiev3XCSn69HDghnE6rZeW8Tp2FnSCiE5vDGXqmALZKH2xsEdjmvC4Stj2cWnzkBEhJkpZb1zPJk4PcyFGz",
  "key42": "rCMLXKBkz2z64rCms6mteTCowYh6pSvnpvHHc26jfLoXUfihEUBJG27Uj2JyJgXEDnBkSE64FFY6TSKCZ5pPPcW",
  "key43": "22JzBCpqrjvRQxdxMT76m6hrUxFbEacPVfvqn5Y6qEGwZTXELDH4oG4wDVVdMep6AJmDC4EckxFJBXVwSyNKjAkS"
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
