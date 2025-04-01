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
    "5D1cCbtUkbPPAt7v5E9Q5evNYFZNv7eMThe5ZkQh8K2TwicPBSbGJriEz64L81xeQg8uyoBBaaymhykEpeeRTxTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s1xdHrwKC9h5cxrWqvaypZEvtJqzCimzswE5wQtVN2fB8YaUk2aKoxiYgVZRKQsZpSri7JxuXekbV6cy4YWGhF1",
  "key1": "5DVuRjfdoTVUUji1V74MaeYhWn5pfKxVtvqpZQyTH3icCZA7qsrbnSRBANUkQfsjK3zDy9LozZSffjPJnjVBydMB",
  "key2": "3sTfJ4UrQQVBBjQwupLqVAcEX4Brqat8jgae5MBkt4aqxFyDmgWuv3X6N4A3y8by7yEYCvc5aYqA7adAdjzroXXS",
  "key3": "fiFJLd4k4j91VxvfqDQcGmrzqvo1jAi8ANMsCSM6GvBjhn5gQ1XSNVftqHbgorhzfXqMwPJbgeBxzh1WeoiopBB",
  "key4": "3qwanfPS8K98Yadq4UZjoJR93yfsRsjmRmXXbmrgAdVxj7M6v7oRkgoiFfj2a7jwmEfiF2C7iFoYcnAUYsEpQUNt",
  "key5": "53Mnx92Bhs2zfgYhtqScHqcC1g59J7KULkDYN38oCQ5PtSFRFRTF48xiNyomjvRgFTipUvBH1tMJyJGDFGyDuVtu",
  "key6": "2towiZ8hK6WAMAcSRxYEvokLkixGsKrh85LrPeeNrQDf6nqzuKGLu6NK2X8RVFyKvFKkzDKrDigf5LoPz7joSnoR",
  "key7": "5vPP49wh9L44VWLJ9SCfMe21yUZKJBXsAkFx838E87Z3b2MWreonYKHXvA8BxgNkrNgvMgPACbEmNbW93KJmS6wT",
  "key8": "3rtVe4xtGmcS5e6fDa9voarhm7ABmbXjo1AJLMq5UkLxEa6nk9G3paAF5YtYAK3k57NdEiDVjrzMjj4rRJc5BC8M",
  "key9": "3kYQDWKdSYMJasAzoLHw9ByaCszbbwaXDGNcE1RdvLkDEtUWQR393jfPzS9xxaLUYcDPnRZo8D3bKsgQs5U6SnHT",
  "key10": "5fSkjKocWow6ZTuaZrg1icrY2M8mC933UUyU1ge4z9ki79jFmfoJmU5gyADnMRB1jMuTyCE5cy6WU1zNvpAWV4uE",
  "key11": "KtzgrZozKgEZf32T2sFT7jw6uddGW6EcbTZucfnZ14zktLxMAUwEwXi4F7NcCwPrN6vChLUwGEZAEC4P7o4Bu3L",
  "key12": "38ViqtLAsp8ZM2Yh8pHNuSEZnVGCQeRo9n6pThAYw9YBgAi9pu61DrPyhC6r48GsANUGWv4VKjfGiT67DcBJZKs8",
  "key13": "zcDDyg4WENChaGv6YhEz8Qhk44DQBFb8116iXPzJpwXK6c2CPC5m28X4eSbnqBN6BA4MTFG9L7tonzBdthdsdas",
  "key14": "2KDEQqMYbVMwBvbogR4gfqQggZ2VDY8TWsEkYB1wBFTpnGFoaPdZzBn9j28h1GzEwsx5kLoNfxTngHjKNhnwWzjA",
  "key15": "MGqMewgTLDw9yeeSbuqGLiRWX369EVYvymgf9zQJNqWm8zR3JhhuATm2rzCqvRgjyRpEWA77hSiLTyWggUrrs8P",
  "key16": "3WLmyKbC5vUBKU9N8KNCzyrVBWC9W6Gzn1LYB8Y2Ew2M6RreAwoj18A4qPLAEZsG5Mzy1DEVyVFecbP9RUVwExB6",
  "key17": "5EgL5Wjm8phCUGSyFsRpmZSmQWbCM5jdu7ntAFrDDURKJTEiyjsaPrMjcYtR21gHmL9tfrJELpYEksDdxXM6Nxzf",
  "key18": "4FQc6Ze6PrtFKAogmtxMYWqanoRBzWMe9KVKNmFzCdL2ab76eBSHX9TitSZsjnwAPnYx4DgzW6rgnct5MxZwv4Ed",
  "key19": "H5EkQomzGtPagjsihM65EcucgEwSSHtXC1gW7RKMu635gzkXQhGh6pUs9U5Jjj6WDFDHgvuA3fCmh9TRUgLWdWY",
  "key20": "5TP7tN8NBBMhkX4AnSEsbv3saMq2X8wGkNJcRKe21gxKDmhJg68Zog8W5KGKuLEhS9aHLtbksRBbZrY6y927SXt1",
  "key21": "AwQv8mwj8BF1dPBFj1feYFyvR1AEYeDveGrPbtdqSkZPQoYQB2XVJd5d4fEcSgB6UBY1bLGEWbhkddVh4vTDsFy",
  "key22": "5xSiUg9hfiZhg2SP2aa7SGSqr2dFymYXRNoXme2GtGwR1wiWGtvH5XGNWT5Ut79bgpCxxQubKpYQidExEogfWJUi",
  "key23": "2fTs7srSk71hTheXYV93vSHsSk3frb571TM58iM4LcZQPb29Dfz6ZPJhGzkyg7wZQTTS5DJ9dK8VrKtuoBVrFbs2",
  "key24": "4rmnpx2hh4zN4DuSfzf5p752g5eq3QvpZMAFwiW1VGogSaRwb3iv3i8ND3M9cimCp5dpZGtzHVt3riD87jnzA98k",
  "key25": "2W1mfWc53ua3MauzYLbku4CfTD5WAWf5SDcKxxJxKwtfzQT6HZrQm4SAdp62RfhbMaz5whjt5pR1mqzHX1C2EVcQ",
  "key26": "3mYfKMfhqtQzhcZZhDdvLjMGb9rnpvqnPXpFHW5ewqCtWDqESNoizjA9Ztq3dBYw1FLziWasS2bzVdgPfbEJiGRt",
  "key27": "dxi4NsJmWDPBWMa4SM2WJUScFxHqcWHZZwSirEj9edNLmzsw7fUPrcByZovQTFQ9JKVB7bPWpVsBF3vcUPrGY5c",
  "key28": "3PaDttvh6sVpCXe1XaCUJZutZLSZaviNhcUiSDieQnX34U5yiEZAbfdKnvMZjNLNN9ZiLwvbDhWspYdVcadZpF6a"
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
