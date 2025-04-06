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
    "3ZmpstEpB4sQtE4dHhB9sMJeMmzyLcUNgiWaJgt38RqKfLYKnW7mKFSbb28ATfrL2QxHc9Jgaks9UWVHYW8brqhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7tBViqf2ZUkZD9JuPPz75bT16KdFdpeg8zFRYZ1usiaZdMaPH5evP7co2sjKauJrmF2cUkfDzMZpQ6rGcZwXCpe",
  "key1": "sZV2H7XEQcVwZyPnYX7PFkWCq1m79vFxsKJ7bjSK8pdgvq8E24av334AzyVmcWi6R1jNyjcrASbxj13t4DNhAJw",
  "key2": "3L5vfMf8hxXDUkubcsM2cHSAZdfyCMwKds5qGfBD9Pjc9uRUtD1CqCGvEiyhQcrECxgME1tfmkBRnvzEYrWEtuH3",
  "key3": "364vWiTu4mM9GfRCScNToqvtB5NUdjKsE1ZiChYCHbGgQHfDTE6VyZZkoS5k48tf52pwEXXrkX2npWWJyHvBUKuA",
  "key4": "2VbqWT5twQRMGgzwAkYqAyf6E424h8CQ8nQC8aRyPhAU9MDdzXTKz7btfZKcSCj6FV5WiXXudn2NyMe4GHaYmbGu",
  "key5": "39agLGcUHpRHnxoAwo6ZtZSENqY3fDVNMDrEpiXBAqovHoVBNMWyAYWdJUb4CPT9Mgth66nhJo95rmAX7WnhRkbq",
  "key6": "5PycGAS19bbh4MjpN5iq8W69baXPkNTZWNhvzYX5RMnk4XV6yunpNCsm9ct6j95rnLS8nWZuaQBM5yQFbeq1RpSQ",
  "key7": "2rUL8nz6iYrtsQpd4r8Z1JEZLeiSgcp4kKM2Rq3EHthYTLgEvGnBtKPtchrmkm7uErweQTfkozB6crm6DF8MUXk3",
  "key8": "42AAFz2sSdC6fpbYGy5YHvNHw51VEi3urtUroxqmdRG9xy5C2YsSGnCeR3dHEcb7Z5UBJJgXSMcy8ptLzBdrc8vo",
  "key9": "3szQWJ9Dh8Tj9KkDUaVpMLB9XywEyh5r6cWbdYYM6FJ4JQYregP2TXQsk2boedCG5ESiyx11sFixvBgNyFg1scVG",
  "key10": "21bnB4JAY1L8FpmqmjB3WFeGYNG13V5mYTq1MWuMcfACdmJMTmKTg4RpaPXmxxJ2LvyMeiedguk52W5DvbxvY4sG",
  "key11": "3YaYGEuQp5w78UKDGzH5wWUXSR1N1zysbxDsMcVvdDzQRnD3sPQY5oeFJM21CpqjKtxNsbTP8CG22aeJVnu63hwd",
  "key12": "2h5nokEdof31eYT8UPNw4CsRVZ6duCmVg12tp5EM1KiGRTWWoHn1UCNPSKva1QXJArtR2mgH1EUVJoynDHJQg2PX",
  "key13": "5FQbNWzTUWR3j8recGMHrTZFHfaci8pbWpRuDRF926H1jsxKC2o3REC7QEWyFahePbeKLCapoELCa5AqHWHGHonY",
  "key14": "23ZMGfCBsA75Naysgqv5ERMZFSw7WZaXL8776GZBBm8zEDZiMj8BCaHqFbnXYhmg3tV4v8SFqekA9kFKeSyBzb9L",
  "key15": "2Ckzw92VSjBqm6psX4itxTMvzP4QoAX5Ef1gsPPcFpcG6oEDVkkTxwDTBFm7gPvEVyonoNLFggvSHWHXmXJ51ikY",
  "key16": "2XkFBc5KLGoTaQHHyS6bXiDXgKin7tEAUZiznprbSwBgDCR8maCybKKgbSR6Ju1kgKJzzRsfHb8a6zV6KuPkE7b9",
  "key17": "5eYY8qmPbwyesjh4VEaUByXF8XjRAesWhTevokmMtMfjq2kb3nFG2KrFv94cekxcJ6SMf1u8ukQ3m6bvfCuKCkUm",
  "key18": "3ammPNw7sQXr9jE5AFzzRQq7j1YtPZmB2vQhPeSVAiayPxdfASFexhcu57Y1fTZuSoZHSFSAQv1baesc51uuPzcf",
  "key19": "459WHDK1KDTroVYgMCtJTosxmZ6waEYDXtkcuoU5ZpuLaWrEDJSaUhgdpDfadQiSGncnzGyC2YwWPJ6CLnAdSbr3",
  "key20": "4e2AfEEt33bTz53PQtrmGkbcmHBqL1i5fFbUNgqY8beanECeczzKnKr5zjfs7THKu3NtefUS7DjiAuuiBRTkW6hy",
  "key21": "4q9ZUpXDwiwC1EuMnSkb5paqdvNNZKTGhbtJrVTDVsLr8W4Wbj4hXMBAHpSdEdufzg7ASeAgVh8KqpH2n4nLQvww",
  "key22": "4cqqmzStYoB4SK7zedngW1PTEczjs1AJdykbs3cAUnkwUhpVt5B2a17DdNn1jujQWY2HU376wpt6w1JP3nK14NRn",
  "key23": "Vw2L2aTLeDAmziRZkGKKBak5YVFe8ydZcWg5grQCPovaXho6RwpuPxEkvVcJhERT9QjrDUz17CVE6vbfhsdWRYh",
  "key24": "3myicxJ3QzmRM3pCy8mivXPUcDYQguQyj9oMS5VApq1BBHXw3ntG7ZbtFwYEDRSSGSTT6JvtineV6m9wfk4oFLEu",
  "key25": "35ZBkKQ9kNW2pr8aGB9ZA6tDeKyidBYWbeFdD1RpdcGyeZ7kNAH3XHuw28N9xEqfgrL6DKzgNJuG2bLXarmamWHs",
  "key26": "9T9UW1CZZomEts6uT4Ve6esqn4RJVuyLniNxtvSKjqP76jkZ2NELH9J6afE1wyNwhUmN5eFcm5YH9pbtfn6fvC9",
  "key27": "24kT5EJJng7VRZzJSbMVTtszEXS3EK8VKgL5Dn8hLGx8FZMz6A7XnyuGJ2sPh9zeUoMj9NsCLaybHLSqW4vRUguK",
  "key28": "35V9DbiAVCNtCzgwEFJwoECDZzdWF1hb799yhKDjAmta4EqvEHjWP2ZFgom8bNbkXoM4Eg9PtLk5pCKa4HMoYo63",
  "key29": "UzFrBYSXxixPrzUui9utosnuZN9dVdWn2gDYJtexVSJqdPPMUZutJ5TKUFpPkQKcbAwcACHswNGKomC8tmgEHtU",
  "key30": "2oZ2Qgagk8fGRpyDLTdZLzkk8e3g5GdYDd8dfDFMNx6wCcWFipC1ci1BbpyZH7b5cPKyeSjYKd2wJ7S5F4MStJQX",
  "key31": "3B9nx2uMMY5ugB8XJbS1AGcxpJrPrv933ndNuJhyVTBQj6mrsrbYTpedNUxtfCYFnS2SZrPChpRVJZZYfqCE4xPr",
  "key32": "4NmrLScajH5Hum5ppPoEy7Csqg2axswVLXwhNbaMUn9Aqhe2zgdmT4W79cPEba1BQsc6gRZmhZusjsWLLurC1Vwp"
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
