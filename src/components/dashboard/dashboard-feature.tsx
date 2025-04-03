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
    "PJbfafTWwhnsZE6F3tmpMSCh8hZ2VWzQcnX7VTj3xBDdbiTKemLM2po2dFXbfiiw6X1jDYneEn5ep7KqgdBYNto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m4qKiV5QG8yigd5vnjMkZdASAtxiTopzdZjHBUZrurtDR31869G1tbTjEjQdTrKzu9qXcQrir9hWgBgeiETqmBB",
  "key1": "5H2jf7jF3TpCDZ5xuMQv1CDGMBh8Gg9VVFAniQxWV63YtWNNtggvAtN8B29WAHMYtbynZof9dWeg8eRXudmQ4CKo",
  "key2": "2crFkisMP63Qtz82Ps6r19xaEUf8oCBGcMzMDDWLQDWQFUKQagk4zWvLpYfe78y1QAzmQufzaVjbgeHCNLPkQ7KD",
  "key3": "61SWwXB8oejJY1s8KehH1Ywnb7iUmGv3A2Pxrf1iXfnqkzjXYNVYXESzjuge4k6fjyEszKUDY9mZhn44ht1iuhsV",
  "key4": "5aB6Uba8rzk7QxtZ1xCtDd2FenpAXJT1CRE2iu5fKgaRWovtyLg85ByJEqY5DLwW7nwcMyroRveGXjo8gnnfE5u4",
  "key5": "EKoCghBQXvTDb3STQsyZgFkqg7HPBwRLPLHXda6rk4hz8TgzPrpZENnCCBW8RosGaRMTyAsnzFDkEYk8AULyGhZ",
  "key6": "4irmAwGzZFJw9eUckfEqxKU7SBCZuJEJQYa3YPauXGc1Sjb76RuBT4KnAoXUqVfdEhKFrkzfTzjwoqrVjwV7N8mK",
  "key7": "5nDyvQkdHiKZLqUVe9R3kPhy3EdzstYGzJvZYSsUB7hKpk8pQ3umS6ZQogdnZRfsCvgidGtkktDc28FkoDejQ4hs",
  "key8": "63s43gCWFiXSEHzzzjYk72WsfMay7m4PSLdpPtpPymNe6kbf2ajyqRR6NRsENmta3NoUFyLW4iKhhWGtxpvLckuB",
  "key9": "5viRzmEQJZVTb5XaKgWaRLVvXQtJ2k8hCzb8mWuWBoatZph437mVeMHeQ9Avh9WEwVStSQGXyvumbXKKrwwVwzzn",
  "key10": "3ZscUnDDc3DkEgVi63mJMoFUaBypKCqFN7d3VZWUVBsdjt3BTmyLzNYmWVrzJfjtY4ypqc8X2mJKi1WcGYnXpE1v",
  "key11": "x5BZqerXeNHC7dXHtTfgwLhoUSmfkj8G12ugGGqn3ScjUDaL73RpeX2fveGfkwKQjvRgBdB29jrM1oEPaAi9Fg4",
  "key12": "3jC3KK3MyZxQUQGcP2TTToz1czsb89gW2eVZpTLGzFC93aLVD45FPkBHLcWT8fyYrXHxn7iwsP5F1MPmn6Ltccr6",
  "key13": "4Kb3LgdCP8Xz3K6cQQhotPkW2wPo66tcsDNn19A3wRTGoM2L8t1hDNi6sCKBY6tYNjvP3JsxZcdaQtgvNoRQTuXX",
  "key14": "e11M8scpFtT8KhaTZcx6GSzTDSYvL4Y9sFwmb1BUAjpZEWjhM1zKAZB2LJsKLRcbbyHzJ6fFbZvGSyXgVz1ary7",
  "key15": "2vaS18uFYPZTUDj1CBXJdxwb6jadFyV1wPM3vmW79MBC4a8SV7TFK2g9ZqUaCJB1MJ2bYor8qLfAAUeqAj3sGsGb",
  "key16": "3CKxU3AjqghfKx8dgsMdqwfQwGvrc9zXp9YGzWXuTVW5Rj1JZr8QmggujekBTjGhsnZafJfxRy8Rha5GUTkvPtfm",
  "key17": "2zJxwSejbjb8Ub9zyACo5yvXbz5ZU6SuEFygoXotuBr8EiWq3v4dtSBNaby3LTmcX7ivTdo7kare7ac2ovZ5axq7",
  "key18": "5dWH1LAEPPCuiwwEAdWPH8KW9yFnrsNG7WwhHHQoZESssmckQHVy4ZjK1YVQ3R7EtfncxRtMeDY3VDmbLtmcXckJ",
  "key19": "67Dfiv5ixJkkufy69AxJncQZ2XVzj5aHmvx9kWx3AJU3nQZaUDHzXkF5AVXu3jtwDeUPMz6YpdMh69fupY2QDPxd",
  "key20": "3tFg4yWSj4uMj4ddh2k72fUHQ6H3FJQLFVjWERN6iG6nNwXhYe6cwQGon6DYEVVRMb3Yqt4HFN18amYfv5uj8SiH",
  "key21": "41wytrUZHWZs4KzPf5JidP3ch2H5o9VuqhgfRcYrEhePHKN5XFA7bn99AKPa2Hfd8RqRjXyHu9Fe2PDSWCSibC4w",
  "key22": "4wzMcapVv2WHF1wzF6dEshvN5QndwE4xF8YxZsgYC7rXXARd8Eyr4ksT69JxU2fjQwSBBZQcsH3JMEQyfTa3GV2p",
  "key23": "2ML4dJ1jBw6myMCaqM5vK5V3M9rHLSpSKXm3KFY71SErZ3ADzwbarvhcpH8z54zGBKkWaGnZFao7Jr7KqQ857P21",
  "key24": "3phzsGhHsdRMcqAmnLi9i4dBWTzuac8PYRaUfagd3eu1emrfTW7L5LMSyoEvfpWuMNBQRCEN8kAPmP2j9Z6A9ZQn",
  "key25": "4dGAyEmnFVeZTD1B5228TxEZCFbzD2PXgjA4AcrfQkSHcvmzAJdbVpgASnKMiRgGwmZvQ71Rj7M8wt1Wd5EwbbGb",
  "key26": "4yxAL8SiiMC281B2bb4Gpfz8wyvWhunopWfmtaL4y5erQffgnhptQQFawfjcdmjeaQpz9YQqfs4HBGFGpdMAYjmu",
  "key27": "2btWudDVS9wCQrsPJJjQLE36NeJiFmf76KS7zFubDKkWcS1aKCVBjaqxgJcU2oPuvzBCxZRK8zhhCPDzha5Hmvvx",
  "key28": "2QWew98Fp3BWUBCDyKJWY3hJH2Mcsvy9t3HgC1atU6FcDDjU2ssehkabjWR1EhrGUEjGRfCExy4nw3421Rggscgw",
  "key29": "4UCfCDpda7dHZg8vLebYNuRbBQffThaSdY4G6292b76abk6y6m92dyMt2zCFWfDbeAyR1GvwYReEp1ssoSFABKfL",
  "key30": "4H5WmQtQSreWRWpKRs64Zi557V7tvWvgCZBfsbgZTsXXXvmhKCXzCZ33ScUK6Gn6AewTJejpUkhBAPht5Fyhxq6z",
  "key31": "5cJ8ni5QcZ2wTcFA4MXSJ15ZQnbMmWiufbEcsVFYn9tvzsKkhjK7AyqEFexBXnTg6AhVzFpbExsTWYwuPPioTJuB",
  "key32": "5dDHUBEmrxveRZ3bA7awecE6DiPfH5n75YAH8nWukAUFQJn6bE7s57LyxyLnHRPGmwwd67ZLDL2koDCAv53neGPx"
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
