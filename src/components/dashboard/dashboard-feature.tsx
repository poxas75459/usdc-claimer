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
    "kfGNrufhcd24da27tYZnLyAZ5sKfgRv7F5aGf77CbBKruFaKtucarQa3K8tH27w1QkFAjwWQ16Svz9nUT8QrWuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64De2NeA8ckA6GoLCgSN9sAQLs2DGCMfty797vmP3rwpWuT5b43XCoMsk8KoyXpVDhHQMG8FWwpxW8JssSE9SB2h",
  "key1": "2EAc39DyskDwzC2USFQvn2sWadtp5QN2wt7gqBXk84WyK4gSJoKGg2k7LAmoBgvHvkMgEZCqCh9EN3KdzbHcKxm7",
  "key2": "4gcQqw1iWoFqw7QKP1wpVGiDC99CZJN3YQFPi2DSp4Qr4cQT5usd3NrzHzJgUnBZf7Lx6BsK8US88CFUyCNZpVPg",
  "key3": "3WzNZXZQUnQnhZEe3PXJAHkNjtANY3PwZPpK5PgQBCTsekUwqRW3PNvc7QEG4ZbDEs63nivQ2VP4yobVjXJrnzuf",
  "key4": "2XhaPrTH3Rub3HNvdooghbpLF9gDKtiwnYPDcamLc8AVQrXo2MrRmnQDgdg7iaTCrpqtoRjiiyYXrnuk9Ssci2cw",
  "key5": "euPgHFswsSSDnkBqYk8GrdsSFi78VDzknMi9XmbMu1VPsVY424vNWWmSgnUifkJ4eW1e2kDyqnv2Bo7AFVqFB4F",
  "key6": "2Fmtsv3dGjz6JhMYCFBu2uhXjpPCgXQPL7yY86CmxvbBepD4stJeowBEuaUb7ThwxRjeee52EYJUPgSqpP29JM94",
  "key7": "4A9WfN3ZScMVHyJ7N8JmULQhkYyeUUSbgL1DRKq48iwv25K5WcNyqLCBpKrGeJd69jyQv2QED5RrQjBrd9jGiWMX",
  "key8": "5jek1FtmLjxfLnwJzzbiLDWfRHfFSBusR6rkCWMZ7zubMmzGKHr17qEzGWkfU3Fk8y1f32SHZdGTMgmdUumERLPg",
  "key9": "5yex4ZpUurnaaNAr2KN4x1oFCQvDxqg9zSxDMfmQx6bXAC4VyBf2EdhkirTz5C3pGziXAGetBmwn6RfjjbQ9wPUt",
  "key10": "3XSGReTuBka6kV5EhSGWBWypmnzoyt6fvAuHPmnbscgjkmmkvfVTNbF3HFizm1FHWk1grh6KLcz9jxmiAmpVtSCD",
  "key11": "23KY7z5R4aUHFXwNJ3AWWkg4YeMpt9pQ5mpKf9V97SM3nCVKxUHVUxDkE8HkEjrCPkmv7WdkBjX8bfPTupM9xUaV",
  "key12": "33W9f1r52NRgCQuVhPN4SgJQQYdNxwaLCh9Ut3bXQjhhaUWsE6uEm2ecN2NyTMQEBdMHUYXCP2c4pbDneUTbYLyE",
  "key13": "3cdHk2hm8bbKfEkhBUy22bj7YYK13KWzUXQQx9ew5dwq6hEp2zweBSC2X1BEA7Rjg18Mzrt4nGkopymRim8Vdpvq",
  "key14": "2cpnjXEbPMkYmZ8tUcFijAycAivytCL9WxEJiw1J2jWXgNM2JdxTgZpjQHXS5JdDwN1Y6K2cy83xVuFHUokJsdPb",
  "key15": "huCPjy4R5pptP8zJEtP1n56SYPGeccBfpkuTwUC65wCQDj4SfDg7ghsM5JpWYZSudqiaPiLcLSKkT9iXCSsUfQU",
  "key16": "3vM1bUQ9LnRH3haxMWmrx4aJ2cvF3RyUyEDE6kpgSwGgxxDG9pEi8pNd1HKLRVWWkrWTRm6y2K5sso44yKf99e5k",
  "key17": "519MtJmyezeKfPCgPrsKCbXbTGVixTCHFPftUPmTG1F3vNHS2cvmHrCkgwEv2E76jpD8Cmxp7hotrBA8FavPAYCx",
  "key18": "3UojXeaqKbL7ChPqk4KiWSDQa9UPro9gh54aXnPGww5952kLJEc5dMFLnfBtBtm85CPa1YpAfd7Nm4dXq483nUd3",
  "key19": "3NimhmQf4howqPyRCW73aivG6rLPNjv1no5aYc9RUUSM8b8c7q6z5QaHGCdSuhFQMW6Myn5pHFtay5jBcRyn6e1J",
  "key20": "5PePbdnr7o8VTmNVYhJ3H2uLqwt5yruzS8eYrX2vHhkn8GJfQaYNnnHVDrk7WX7BBumMk9XS3W1ZNveQWHosm3om",
  "key21": "2jguACdyb8X49pZP87eBFnSQJuaouHyMXtsuMxdEhJzJZwFzpzWx3P7pw2KR7mNY2E1oPAA3fnpyiQDmATNnBcke",
  "key22": "3yTPmfZf11uwMjYdZNkChXtXUaHFtMN8fnaAAYBu65Sxc2Jfpv6im346B91pQYX4iL56gnumbZZ6B8YjyCGkKnof",
  "key23": "XUmHVA8AvT8Mtt5erpvmF5xH8N3U2GhVa253GyAwfC25UMUY9jvU3V2oxgdpmC8dxUc3A5Djv2jDRWaB3P9HXcC",
  "key24": "4WUC3pX8jwW8jewJrhEsFEH3skapHQFPtw7nw1pevKukpuBoDBkTDfyTVSZ52EbMJs9ecnRvQN3cXNuGsTD8Pfv",
  "key25": "4gsNogkFPVmRfEzHps1y9HAt6fN28XeCTCfkGrMX5RBsaSTfUZ2FTPvVop3xNtgatfbmT4Um9aFu4bTgtNfDMQmo",
  "key26": "3LozA4CxktkAhbotKfLzoa58t4NuKyzD4qFE4tP5tZUQuVSQLjdnmdD6DisFenNzhVKNxy9emkdc5tfqvawwxCsA",
  "key27": "wuDwgVov2T6SnwuoDkEryuudmRUyQ4sGjBUgVY9Ys18PzVM6ZRYuYV5iyhcNx56dEsJLHB3xAhwYgVkF5RWvkdT",
  "key28": "5Xj36BNRhRNrUyHc6Gu7zktiuzt545YYkYxwUdk3rp4Mk1aBK1f9fdwkeLJmU3piBAX7HyxVU6x7GAn21Letyhnw",
  "key29": "2ePgrHv1YxteiqtSEfvBFMPvYMp8cyoKeCs5ZVaRjrUsHVkZHMUhTEpVn4BXSfzb28semgxQ9VzF1Dy24daxEB7k"
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
