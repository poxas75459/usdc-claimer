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
    "4tF3CP6NvaWmbjXSdCNB3FxYbtKpr57Dm1DKQ6v2rRMBegXhgTgf9LUwXFRaDLNkw8y3NbCfEGSQ62F7XxEVHJA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2586i3GWGDY8233cWzysmagzQjAMTqDsitLczuH4ro9S59gWC1T4ae8dAnFmpfjwQbANAeftTUqR5aosG1NZavt8",
  "key1": "3wfJNct9G4eaXWc57LoMHprSHeop9xNVZrtqW8tfFk8nCysNax6ySgBLPbVjeupg8M57SMaoCjiXpWUXoXzBiTye",
  "key2": "3zDyQTJfcvUPzpZFAYEvuByCjjYD8eSCkByCPTPjidMwVahpPbEx9t7nTprKv1yGhsfDnt8GLdfdBrsTLMwQNFFb",
  "key3": "4AVciKQLgHSxBea6WSwirBhSKemVoyGZeHNPuAqB5VAGnguj6qtWswShF7Et1fsK5SdXBPwTiEqcd7pAEuPa4Bro",
  "key4": "2jHKEXHP2SXJcbVuj56qgv628BWTd795FYGUX1S1HTpXnx8WdK7EnhQGQdse9yFfR7s9feRrbzygfBtpb6x5mSCC",
  "key5": "41xw6a1tA1gL17sYfp9DDSY2zXoqS8hRRtKakTEHnQyVEtnsGziXmTX9GmyqYmmoG2dsS6djMSd7yZcFmdwiPocA",
  "key6": "2mugFY7zw8z1tjRC28a9PwMzYfxkh8ugxQndfuNTHUZ6y7HTq2eJn1588wXYw4LbFbqRsXDsg5xczb4xGwkDqZfu",
  "key7": "3B62TtCdAnAoC9gDZ6EgF2vfcXy3fCh53Wpo4fTLQx4hj3hyMmEiamXi3rKaSHnSUScFtSbHg8Kb2NPCZJahtoeb",
  "key8": "3rm49W4HS1S1bP8bQiCjP2QjPxpkG1UypMk3nySnVTVMgt5XR1XdRi4kjbmz1vYBx37YjgB56hG4N3AiRtY2zCeT",
  "key9": "2JBdgHkARHF3EZWqsTk47WZ6StrdRzWrBzWgAgkGaQULwkrC7e2jXFzRGJWPkUX4srF58RhgkYKEjCicWZHMS2MU",
  "key10": "dtmft1A5e1cnzJ8w9UxWTaJoH15foave2hbskcTA4U6dmQFGvNDXvvqbM251g4eiKSHr9KLccMfmEvMLCc3EtGr",
  "key11": "3AVLPpNtDYWfhVAwvCCXjvjGLdXLtv9hzMUjsL2QpGjXVdghVBixNBZwHHP5eTP7bFpsxtSDBTP3Li6J8hFxZyCr",
  "key12": "4feo6RAAtGnpEiNJk5eRB72CsCaABEpbPqAnN62GneeWnendThPzDM4JgJF2qoPcPGQDBtv8UvLx52js7DfCMim9",
  "key13": "2tvasSRRoqnLaRoJoMePdMi3HVV7LF2SN1gLJkTEytobRz1A2rHZULLCoWmwWUspi5CkUqjfNp5eDoWvfAoAoH2M",
  "key14": "3At9TPiHSxJDGGLmdQabKqcyb3QmDfQDLw2KR1TpfuqHBjwBp38QvA4Y5zDnWasyunKsXYZnzxb6Fx9sN4zwSzCX",
  "key15": "K82kNSdP4D9odgpHPENvQ9SyJYSYqnf59xwTNAAx1X8T8g1XzUgNzceWCDgUKq4WvVKe9zbCtkWyMXv4haf8HiP",
  "key16": "3Pv3FA6fUefJQkdhAU2iLFsKWYdit4tTCuaHQ72nbXpMFXFdWGKmAhYHYyXdEcXsEUmUMw8EaFEcPeoaMLkhzaT",
  "key17": "5CqZUWbTq1rtPgan8zkgydpwLfx3x9bNq7RDnWC3w5dn4KqHnCUwgMUd7VhYPNX4QjYd21KGb3Xg3HKZW7rUi4ni",
  "key18": "3RFgpc654uExxhFNNPocCjDMR2mfgTFxHbgLCdaRUFttJkrLTBvV4xmCoaowBF3pDGw9XdLrSAoMgUMeKWXavZ6J",
  "key19": "5nGaHduiAVDE6AGRPsNuUsuUCHHAyTgzTxxrHYU6tWa1epajdL4CUuQdyheHNvBpYrhjRGNbPfjzrfAWKigmZKzQ",
  "key20": "34kFQ4pDeDHNv8PqwRZFuaG5UQUMj3KvXh53kvopyWZXiC7GbxB6Arq8GgvqYWbb5bfgfQUS7NbcbCFLQoYLB8jw",
  "key21": "4vapU9XcTNEvNL9R9q1fdqjUj7WJ5c4Rb2uxL1xd88Bz68BnfALBKaDFVJZ6FXukq36FwnCS6Pt8nGfUoaybNuqs",
  "key22": "V5kCkwyUdBadE8Sv4RmjhU2rxu5fs2BWhRBBtHkLRjDgGokNsd914A3YGALk9sJC9zD1wEBXDUKGd44ryUeAhQr",
  "key23": "33rgTgWNhbuiNzT5QhQqhggwxL33fWzNcZ595h7LKqAf94Jvh7cYUsa5naTjw7SSATMNDnU6meTowYPju5RnF7Wa",
  "key24": "59UrpnArZ1ZWbE1zvzDAmNCyxcZSs3xEnt1XVQ1xkWgkQ6n1bHBKmW2YPuTvZyo7pcKgsutvxsuqFY3581euDQ1p",
  "key25": "3m43EEbJ1ooio85xyz8nC78QcVYj8Tg11Yf8dT5PfbKBcppMiPnqiVFR1Jg9cDE3UfHx6EHHM1A9Pi537DZdCbTo",
  "key26": "NckYdD29cdEzHLLoUmRVPc14Q6SWJjrtLTp7nk9BLn3SMBJfG8FVTAX2NKj1uwYKnH4oq8fAjBtHmmsHt8nQfy1",
  "key27": "2eAfU3Hhpz6sshpmud9BmHhzLH9d28PdfJK7rJUJHdDjTCz3nrL8nTjTXRDiwwuzBhGexntToTsomKdk6yjc3cv8",
  "key28": "33HdPwkP9crtEpKK6aip9ZwgwA5K6YrZ9VDvdFy2KzX7NTxU4xcEomNNfzaXQqpw2aV7jX5qwkWhahTpfBoo5jfN",
  "key29": "GvS7Dga7vRWH5vdhPcnujmGbUEH14VFpLL1kBhWG7VRcQGvrA6NWynA4gw4t3Qc2nY2AUEf4wLgmRojD8AgaTyU",
  "key30": "2yHFL2j26Wvt8qikXZUoErmNVMCKmbXfqCU7QpTbrQr2DsNuAYhNa4NLZU1X9Lm52HHoD8FVsy34MssHnKtAqTh5"
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
