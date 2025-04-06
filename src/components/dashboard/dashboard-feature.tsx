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
    "539R8MrskPyXN8c5bhu5PdGmH2Una2XcfuMXZhwqJ7gB5SFVTbXFh326tQJS8dAxudTW1Q98icRtATjG6PULERxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CrGBEM4GRCGfjGZoXVxujHUndLMLfkuwQw9QcedAb5YcfW6w1EYLcwMrnBKJZ6PgXzgeuGP15ep4FNbjVPprn6q",
  "key1": "5vcU7SxQmLqEPeVCKEA5NgHEoNZySwJhbXd87WZjvWYGsoUcSttL5Bz94ziVpBgYp7rj5yacHLPQTxq3uoETG2fH",
  "key2": "3sLvQEarqi2ow74pr9opLwbdHRbFFTUtsT51AfzqZDY2W31p4uG524TmW5JCj88WTJtAD9w1ftHVQhLKd7W8bZrS",
  "key3": "Wm9sab7SvJVPHSFYSvH3LzUcCrveNrsiTYYhxNWH8Cf3VvR3QPU2Er1rFJzwY3mTcxgyhjTxSHKTzgnG5mx2CK9",
  "key4": "RL45PdfGugReLfBn6mfDKjBXirhRNEdAsT4LeCETojdWKRofEzrjskWnBAFAy52cLpmwWkYC2beXhaF9PHrFc3d",
  "key5": "2dJs6pmcUCSzTbkTKoYHXDy4emXjHHRMHwMMwhk7RApABnG8Xw3Yx6ssvHCXQqxkqCRu3N7YFk3WzNRnJizLc4gp",
  "key6": "29ojVm4ybBy2owimzAV6zDkMYDPFYYFDR1mmWMp5toXFTKmcPrKtmavX6NTmdwLmTfHy9WcowbcGKoF5tkRzHjwt",
  "key7": "5qhdsFhpHwvJjDsyNPRj147TwAHdSmQ4z2NWY95VZaEnj6XfWag5GjdLw79bBuM8imwQZWowRiRBon4JHAj4yeom",
  "key8": "3WRr8i1nToAXngevo8BH9ZeGRkpGfWHC9XercVmD7zswDBWF7P5SjE2LB7vJDq3G1r8Rh84bA8KNBczy2wuwGtKE",
  "key9": "2Ce8U9pm71pRwfhZxNB4H9BzwUub62HDkQFmTak162ebWmtfn3YYBLgCDJC8JMLNcKEXxKtCmQMeGkAmtjmCijnJ",
  "key10": "4Zv7NUwArvgPEbr3n1yWekK4fDgYNvsi9Kb1nGiy1QyjiUhvUYEnKKgGcsEnAUGCEuqmhFLkcRc1r7tTxhMrKsQs",
  "key11": "231eULmTX59WmKEjzBJrXAgnZzP1FR3th7rkouYHLkoN6BexK6XJrkGQ5H61pNyosphHBXH1xNa1zpxxSBbAoXTG",
  "key12": "4AuQxZQR7fym2Vg3EieTMV8wDoMKMsJNTU8NigFu43qew7Ve3gSofmKd52gYRynudGk95P4YtTkHoc2FHBvErATU",
  "key13": "41LW2FwD26Pbk5DcsoRYDc3UYVJUPgT7UD7Eih8TFUxDtd987XAaBzmDT8soGFWPLshtb4Dr4swswFqHMC5Dz2B",
  "key14": "3D6mXtGL94pNJqpYRaFvq8GfHTP6U4jcGvBuFpXi3XWhCv2GsDabLnhF363yUKSFoXZEdv5rvu2c8KvxQy7mYws3",
  "key15": "5stpi7cZm58WFRY56NX3M1sYmwUnKvsDzpuYEEsK1FZ4h6NMHehfsmVSciaExwABokrvUAJbQQxJf9ruXRsmKV6J",
  "key16": "27PXG8SZPhYY5bWAu5q1yXUnfekaAs3t1kTmNXGEwq4S7pGqdXqS3bHxiNVahJ53dp7rv89VVMowaWKbPgKKzYGA",
  "key17": "4M4JbcgDrKLAbCs6Cye8jGe3BPA9KzpchmTFJqe48kHnYPBqFC2GnW9uPqQhW87knu4EDvMx9heJRQZQqME8JS2Z",
  "key18": "4qXL85PMq8Gr7hqzamf4JGPTvTrVRyDU9tw4DErSR2TE5TqVpfvpD6MCzG6WqvA4GdNZX91MUvjyNehi67v98xFc",
  "key19": "3QuWcGkntZToYtrrGG4N8uJvSPfAN9VHZ4EWKX7fh8q9vLQzZXRvFbK3s9uD4fNXFnNTMbkj7hbww1nMZhyYzVi7",
  "key20": "2jE7xgoCwBoAapa4MByaoyrkJxEVYRvPWMem3RGiBmtJjRVugL25fpdzuuwANSmXX3H2Pgqsx7GhSwjqgAu8i4VQ",
  "key21": "4rtGLByXn7N4fz7vbUyC32KtXSY6QCmnG2YVP3Jhs92gAwnJDE4kae42J5rH2rvfaX2CnDsBa5T3WifDNxd1RLDB",
  "key22": "q59U1TS3E3NebyYkpcb3577voNJ6Tt5fd6sZJay5xcyuWP8orGWdECigMpUrMDRLH6pM7z1mB7WVrMxtckHr51L",
  "key23": "2bHDF4m2rmeFiAuSMnEq5YsXALJuTPA6xCqGuxW7Y9XnqwRBH6omnuD8SwzfjxnaQzkyXdrvvg5pL4asvJ9GBUyL",
  "key24": "4H69jQn581MKoDqzK4YchJXgFTMWUKEtnxckNNBSp4vsfrb6LbCJQquVGLeFJ7kMtSQuYrtU9NiPgmwDHM4bAssH",
  "key25": "2ksDwiH12iyHpm5WMECxfbbwM3fkLcCb6oPfeW7J5BWrnba8gXfxuJEdYppnKfjx7KCYFiMDiSc9BQkFg1WF9fvn",
  "key26": "37SZaudszRLkSjqmYDstAEpPiBTeEWQS6riqsmRchdCL1wGd3x6sqVDjGp5QzsMjX2sXmJdK2jhVt4gC4fMjCs21",
  "key27": "4emSA9RbfLRNiN5u5HuM4eWvsctKpUAdzeu3vjXhH5gTdZf11zQpyR32CE3Ehn2A2V36EGhJnApHnxocpYWbRXYE",
  "key28": "7vJNU5qqVR9NbyPREyfU1ngqRq34JHvasVKN2f24cmUbKhc8jpJBVGKRcKwAHCzyDvqfkiKQfvmMcC9eqZ5YspG",
  "key29": "1n5621d9tjb2bWQmSHJ4cgYNTWj7V1okkc2kwgpnZCBd5GjhyUJQ9HVoxbrLY3f1WD1GKJadwhGxw5U88BZJpXt",
  "key30": "3otGSvexAva8qB3nRDBwNvLptvVZHfTLV9fWHcxqXHMPThZnFEXrnv5vwkhLM4hR5oSKkKWQDmbj437dG2MPotQR",
  "key31": "4btpzeozgqDmW5aDu9i1DzVH7LgHot1EJ7H2PEWw7jduEVDMhqB2nYxwAq6dzxPBkQg5f9inDtQBkmJTiHM4An8",
  "key32": "6RNxH2FEtN1SbJSDqDmnTRkmqKsARtDSAWr9Fc7ssFKb3v7zaMF4XV8EfLs4iHvtD9XAbD3RvKYWMKh7tVa5k38",
  "key33": "4mvSyxBXWGigNkppAEjn8qJRmzFB5xCTkgDkaVhNG8wqSPhyCwAjeRPpUXS33mE6ti52ZvfV97rQHWEJD9QxtWdb",
  "key34": "4Afb9ryphwxih27DmfBMjC9bm1uPPNA7cKKCkXdQsZZikPKgEXnppP9EWJY2xK1gisUgtDuyemHLTmqUVUhiYUUc",
  "key35": "2bAjpT4kP244rrkaWSAjxqf2vzSy8yeR59YockKWxh8LbxE3jzxrXNB1W3tDNTca2NYHfGAYCqxmw4RgSPQZJqqN",
  "key36": "4u19czbjqZmUyGrqnqnhaAGGA54Sfk3zSkMwGwUe4DpkhqxRtZJmcUwFhXJgWickioQLQ7vaFQ82Med8sD6rPWPf",
  "key37": "4BwQFtmXVNjSM1JkyAgiT9dqSprntto3Zox3bh52iQEo31JkS72tRXEXwonMpTippqFv3Mm1VSPFFEWCALP9Gdqb",
  "key38": "6Xxn1xHCYX5Gy3DQyCc2cu5pfb5Qwaxb5M18mbCvwtsostH5s35o2D43MMfcuB3Vfg6LZgncPSSVKxTUjYwMK4y",
  "key39": "4BVt9ZZUnbfVQ6Wkn72bxid3po3sy8TUVtK5DC79pRmdMnfSvP4KtiAQrwLEZLuS14QdH31jfxgD6iB7DZjKh11R",
  "key40": "5d3qAaAZzDaHfwMGYFwn3NcCYukv2kiwiz4QYrFFuPZMUDeg5SSEG9NEKHLAV6BSheG8ECZVuT3btKFb2UhKdKcD",
  "key41": "5egAi9HGmG7QEJMc4FwiToBGuNEyPfBrcvpFxGUb8zV2wf6zsVdt9Y234Q5N9fL8q5W5zrGztTFVUFgxjJaAA7tT",
  "key42": "2kxeJtHVoFK5MmgCpHute8uV82GVKUPxPbPdorY6LhZsvBxdjJdJ8pz21yKgFj1t86gG5rdhKEjaA24TTUaEMS7t"
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
