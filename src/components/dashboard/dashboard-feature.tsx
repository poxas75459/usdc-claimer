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
    "3guY9M7xoM2QF7hxkm7wGsQCHvvhhAG4xXoWLwDt6Kk2MLCzY957a9XDN6NAr4DcTG7KNGJWeGFr86WhhHg5woKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qwsaudZogTjg7JB615EXn7KQfxY7wfCfW3tQdQNKzRNJrCaBPm2j95vctWhb9J7SuPSCoPKkeF9r7M1cPdXGFTJ",
  "key1": "3sVgNmbkUt7F1QQMG26y8T8RM3jzCWTtHqs8ZgcgqfpozGFJq5xQVsAohuwf3iFPbY2uobGV5MbHcjCyKtvBA1X1",
  "key2": "27kbYJgbiNdFcAPofMEkyYfiUHdyYWhawCLR1ocNo4MqDaUUcXgWS6wkDBzPYBHJgkQrMfBqt9w8itorBKbo5Rfg",
  "key3": "5JvMa39cKziyDPNySVR2NpqFVf3GabqYZZtyoZaU61px1m2Rdf1rb7XL8TPzYer5BjiFPMnfxd4p2bctZyy44vqw",
  "key4": "57zoJJLoqqNocTXQfaSUEQDvor9Q59w8PWJLCksVH9BjMf1w4HTmADiX5WstAbdPzDMTpFwqrhsgwrvwDyb6YhLj",
  "key5": "aR1bBvPGBvDREXsqKEmv4UGABotq168FGPfUAr6dyDF8bUpjk6gahxe1mzqciw83VawPxmM2ih9yhPUzrAtJFbz",
  "key6": "mYCde82qD7Fm21SfiydXsNfEDBQUMjiLAbsBUW7g6uSDLbmCSSHPQKR7JhGhDxGu2GLyw74Hui3CcCLTQ1Jg36r",
  "key7": "4Gig8Q58yuXnj2yVvzTqhFkSmnWsNQS9SN9Tb56oZ5Nc4mSgR8K6j8K2sXWmRDL1UUt5Vb7BogGC1k47XFXA3H3g",
  "key8": "4AeUhdrRk8M5uTR4hDxoWptZKZ7LaLFtQvxiwWhtJw4AAGX8Ht9k1JqNUQh2LNVURMWV5oZ4bGarCLacocavEUc4",
  "key9": "2EYcDfVvfBz1mgiQw6mX2cpRq2eTLbUAmiMDx3vGyRwf8uYy4Z6W4eU62T9Xz8SUhyroXC8oT5phERBhX7zbKThZ",
  "key10": "vfpXmvXz1HLz4kZtRaGpAZk3BeEv6U7RM3jmojfDYgMWRmvdgsuNVb5HinknwxWtF6HGFiGgMLUiQY9GXR5Q41s",
  "key11": "35uZA1GLHMRH84vX9o6MfUF83JDQ6SADhP2dKuFXoZ1gJ3zXESkmUoCJ37VvRitrsRqC5LpsqRaN49S6JL1VSt2v",
  "key12": "zBfwsU1uKmcneLT1HWW4rCHFnEufuYx3zD8oGj4pAvJ4h2zxirPjKgcGbNjQJjEqGnLMzsxJSVhHHWeTkhmCYiL",
  "key13": "3nt89XAGgCxLjGiXicbUsEHKxeP1tYkc5WPTvwPL4bkkpGXeoBZcLDLjFrZD4dPQdfDPcpguGqiKWirucg9bJU1w",
  "key14": "226vtP4nxXeZr4CXp2M7y1hBeZdAJvBsvzQTiT6pYiszyAYTbEJ5cxaq8FFNSXpoNfvn3HuSmH7Cq2hNm15vj9gw",
  "key15": "5kbA3DG7UArYKvbahSAiF9bGuoFYHqSueZU4nST3n4LmTPxyZN9gmLZjnKV8A5s9GEmtgnkVa1hHhbrwBgqnesga",
  "key16": "2whjhkaZt1CQSetFMY88FHVihGMRpNHUvJDq82kLyFJFQUTErgTPmd4JRqADRgNEpy7sMrBuA7BtPXevwqLmBgk7",
  "key17": "5h5dE3idq2JdcRvs562ioMQH96WdeGbmaFEpFJwr3Zce7fW8AqT59PmVHekaSexDgY2A5gErGSAj6gmJDWTzb2bA",
  "key18": "21cErYDysmA4yfv1aMLWXE4G3E3qfTEioxZtdnPvtzz8ToS9ms2HTNPcM4n2BoRbCXvpUYcNoRaqdTYhJPyyEpVr",
  "key19": "UKBiao2ng8ZRbCcwqE6Qi7fUmdGeW1mzLJPk6QLgRxBbLeNwUmweD4UqxjFUSsvF5cYwzVwV6QPprchpMTfNJVn",
  "key20": "2XBqk58GTdYdrY2J7SA5xBwMQhTBEqze5sgLYjnjeTCucgzAqWNM8pBc3gwbQMfHekpnJHpRwLHPdt9ccT65SD8o",
  "key21": "21UKegUNuMKT6GzjJkb6MaW5rt7q4M38oc6RA4iUubsqmP466WWfuQwsRYbsC5HwVHPHBAV3E14N6WKAtATk9giU",
  "key22": "2vB7UHcYQdHhSBHjnD3CuE3znc8jsZiE7TEe5vhUcVWd5FB2BdZLSWSs9vDkeUwy5qK6CdEpbeftXTAtKPW8PN2A",
  "key23": "5tZSv9mysWR8gvxTjR6fRGARpHaWY4s7Yj6Tpn5yz9wwQfAAwiBNJEPiYHFzcJmuY7rhuhn4NpuEM1uABFRwC4e",
  "key24": "2n7tYEmHb82FRW4Nj9Yc74BhwAgCL7gT6pkRWxGf5fRmvqLH2tno15C1YGepoUardWk8kLndLXnDrX4EUDfubV6X",
  "key25": "4zF8YZSSGRLuZwiFH93GDk2H81rgdnRK46HEKdHgoX7NNVFtQjihNLewvWanRgmT2YaaiVYoke4LbPojkn7qAJxP",
  "key26": "2VWNUeVKa5iRJxBPBRoweg7zJRB4e26eNX2ynQAr3rmqMZy3vmikrR1u5PWnso7uKhW3XjaTFwwJp49SWqfv2jWj",
  "key27": "3BmB2t5FV7wxj4QxHMUb1UJyq4EJLbs3A7kmYiTouhGNKPMMBKxh3b2DxKJrnacNQnzwV5XYvXzCVdjf5RRNsrGf"
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
