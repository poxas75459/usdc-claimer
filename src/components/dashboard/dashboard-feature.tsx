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
    "5B3um2fDcxNpiK7pP7CFQcuWEgq5cUNCBSiuT2ekYSzwsTBcTwLff3DCZmEP1AZNPsxtpTYcHY67Egk7tBrf4peN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPV6pxK1sSkQpA2aarMkMkqmEK8NKd6AuX86THshFHevKGQkHVAJBFunW25miDEtFqAgBPdytub2oyiXiaAHXXn",
  "key1": "4o6BVY8PviQz4DAo52kqe6kMJ72bdQyJtG2HLdVyBbFVxzRB13qgP4zSQju6DQz2DtQeeMnDEZCKWGjoWgu5R7gb",
  "key2": "5yqSFVyxMhJrfqCEyaGkPgjPCZNWKxqsDQjd2Y7eP5FPD2Qjd4xdgM79ZS5bfJJSKHJvZTBqz1JPQpPRmYzhJBAx",
  "key3": "a7FpQu7cvfPS1h2WjNq6e5ZY6khMWa6FRzEmZPLtcBnBQwjYNkyKj6QR2eLQSU6kojCiB35eJ4KQNL6yn3Pjhvz",
  "key4": "5RhkcsZixunggun2Tijev7Sed6cMGjExPqGRKn73zQM3Z54ufKPTYbHScXYEqvHdJbxYV27gghCgDR2jK2wvj7du",
  "key5": "64RSvLVtcuB4qejS59kufeFCkUycDemcf7PT5KhZsPkHLMbh29aWWsTudrvXwvyWm4EtsTPMDoNMq1b5mRgsrfsD",
  "key6": "4AABp8Foif3XvtaLyfYV8omPhmQwfhuVpUwUEUJWdLUwxpxAt7AvDG9FXWUGEon5WbrVeQEFkmCf96GwTLdzLwtg",
  "key7": "WisdRyDJfbJQ8SLRaxvg13e9egCGhV2AaVbtmu7kCHpfgqXwhQLB9kRYoDqCWgH4wY9nVCezp1a9exksUxsH7er",
  "key8": "3Sy2HP6ykFtM3hAqrcPVJRkhtY4ooN1dDXVpUitNJ8yAJ6UNCtbTg3ny96TLrc6TaF8BYZmb99QkFd4oR1pYyYZS",
  "key9": "5f4YEgPr6hmA3YRgwf5Y5tGowjUcyTa1o3dPr71d4KtvDonV49XZhVcxXYCxxLjj9yeNnXaM7ZrarzM9gSwCXb18",
  "key10": "5fM4qKYLiynQpH1ZwBfEw8LW43kwg1D3eBw3txWzM1eWNgzqSgjZovCbUdSLDwrhkEF5Lm2Lx5gLGJBDGdz6jbaj",
  "key11": "5xgNWBhxe7ZUb5Wxw2yxBJx7xzGUae4GaR1zjjKXDQaeeTtwVUezmDrXziXXZu15pv2YPsnmBDUcp1wPm6zSXU4S",
  "key12": "VptNqvWXiLZVBtbKQMJajsroU4BPLyWjdoD3p6U5LjooAFYkwHEdKqGW4ietWkvyRCifsqVMBiCtbYVxRfJGBiU",
  "key13": "5fBePtX8DJttQCdepMKaJQz3GnEDRs23m97GEb58VaHePdb1fj2KgP1oKZtzNaNJYA5CMVGk5kg8QpyWEjdU1Ggh",
  "key14": "4TmqipFPazJJc3MAHf5ZVmxhjpUfstbw6VGVN5mZ2xR8F2Mo7cDWgQRdULgEE6AKUNPokEM4kbaVvt6Q8tGNPmFS",
  "key15": "5GJXr5CYTLRfVxu5q5vZAfE4d1QgDrt1wcPvq2kR8NJMLRdfbjpXq3jcrKD4jPK6PRxbTYQrtGCFKbcvZLbWJZZH",
  "key16": "k3kLq58qeAJdyvhGE1FXBqCYQGwXqAKXbmADf87Tz7DHFDmMMBsMkJuLqQHJxvsUtg58RargwTwfFoErgif9gGZ",
  "key17": "4KzUy2qvsckDjWAtGtRoTJL8QB5S2rXEbwqH7Qep2Nth5HWWQS7zSY24jRPEBWVjeifqswsPN9nwXuuAAvHdES8c",
  "key18": "cCAwT6rqLs81zT458RpGD3bqKubp6F4YhgXgaGUC1WMKFNguCMouWyHvphU54MQzQ6XDXAoT6qKKgH8Gbzxh5rH",
  "key19": "5yCzdbmBtC5PZjqRjzvXLNs1TH7sLgkePmTfVyFbMYZHTB2Yd99d6FxuPZkcpw9CXBFunhm3dd1MX223uG4E2H1H",
  "key20": "2kbTHxLrrz1faNsaKL4ZVGJtq3EknRUFG4bHAnCsTnwF1kjLqTcrE99Bm5txud37MH73C5qW9keyMNkuXX6exd6t",
  "key21": "bDn3gTbAWcT85hwuHWKqmkXYGJT6nE11XyuKYzF46wpvC66kUn2rN6pMkeeyiq1mWVMCH1LNQkch3mubbuaMPrv",
  "key22": "2U5BSKBtkmSH9crv1SDeS4RNJpZdvKn9UPubfijqN7WtMyNSNBRZ5LkK5tk53C2yPk2GNEZauLGwp7UtA8ircAxg",
  "key23": "3dUi3CpY7RpQWbHbKmcT41Cop1LpfCwLA98WEPgZvPTj5kb98irdjhW23LR6SksAxJWmn9Hm3oYRh3HxY2zqsvNe",
  "key24": "4g3YSfVDB7Agh8hcWdVNvJyuiAHSpQkEg2exmdhn82PPuR6BWFUXzHAuur9jg7YD9ZjHDxaKzaq94AFY4GqeYDDF",
  "key25": "4o3vGAYhYdWMqVkb8AfhYS8Yz5DDwbJRr4V7Ph62kdsiECH37AzsJcLsvJKx5CoaqRB5RvC1ThbqsGv3WghCSUeP",
  "key26": "4UswPvmrbFwMSkw4TSYWK4yK2TNSUYmtwYWVffwWCkgmrJAJgbPpGDR1a8uQuPsut7W6iSb2YLDpSchEjUXPqPQP",
  "key27": "53Lxp1NAEvYaiLMpsbRocaSQpyVPunHUWKhfmVhN4njFfhkBKocr6cQ5gBGwXW5KXhFBXjJxdXZsZE5o8AhMtK3T",
  "key28": "3b8yqb8xxRViqrLopYzg2GWLs1js3np6ktjXVYp61CdwrnFzRKrWTzaJZCPgZ1HJs1PEgLHw9qwaKKb2hmYciAmp",
  "key29": "4ebwsVwtQMRQjQayYiMxrW2ULchrp8wUhEZQAjpwcqNnbbWjopcEDn8ErdHmPRqE5XZsZubU18AxE2RmGKq5fH9f",
  "key30": "3Y3DDsWmpE3hEz6ZaftBV6aRyC5mZiagh13S25VpuL1fvCEH3rodPLXnqomckHP5ftKgcU9cqgCHYrvmoMbLVrhS",
  "key31": "3ebpipDL24jZj45Dan5MZVbLc5hf1ehEgVGqtu73obGg3k5a6SJCBUfJ3kkT6wQFrLsB7xWWNeoyPLy7XTHRuUS3",
  "key32": "2w6ifJz2gYdPMMUoTtTDCvYxcfi3KeuZUd6N2NQgNAh6PXQ5BSBXuaeCczoaeGamFM2dfNVYLgXFEbSt6LRDUNPA",
  "key33": "5Fd6n1E2CwagJaQKL2usc7ibjGxu7f3JFaUSyN6tZgTaWmG4EXkfJ7exS7XeQYwtobFpg5RKYVuXMnxtZVfdNtZ3",
  "key34": "2XxinZxh94ukE5Qrq9TWY2rcVmJQYezyAUpkVdtUE84tAWguGnzyBEX8FBTxnxnc2gDshsfy19DveGgxsLwxhMrd",
  "key35": "4XCATLB9sxaV1DQRfivM14xqZE2tXHHcJ9BfbXvitK6VxHSaNiTVr9JijSN1e5VBd5rdC5pGMNmKwLWmLFGd8TpM",
  "key36": "3JuiAB5KwkTB7i12rFm6j7rXnesG8mYcfNeMEFpTaLqQe5zMPNsNfzN5MC6RTXNHFV5sq4TbSjgxLW121RJeEFwz",
  "key37": "3sY5DTpygpuy2ggADu7DAJzchze1Lx769Yy7MNMPWcGyCMVSafp2A6efZZTk8ttyHtp2TKA9GvHXbGWpCfR9xCmd"
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
