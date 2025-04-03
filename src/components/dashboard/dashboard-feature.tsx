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
    "5rcd5mJfatauSukQ7AKkm6i9LtDae5gAQnjj6TctTTBqT55k8ZxhjfTVDMGx4nsbFYJdakKSRfxwcgXpGED43e9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXBXSaMFZfUWFWZDByXBGjkUewQXMoLeKJERKM1JzkvsUcTgwebotKMNXm1ZxRLA3P5rdKF3CVpWJ8DdGLkdhfD",
  "key1": "3oMaWjtTSxeNua4XikAse9pvwmQAGaC7XE9uhZnnHqoaK4UrSD1t5WRTTxKD8XAVunQ6YX7HSfTnax3XUwnRTxoj",
  "key2": "W25TvbuEpXS3oeJzFPmkgWQ7kPyKnMkgRH3zGDqsBerQoyS74m8KeWVbGtnRyNAFcby2hJvqv9Qhym7gW3onksU",
  "key3": "4M4nGQycFyZ3oQ5D6fq5LPZpHemCeVdjUJFYNck7WiFMoZAsYUMY9fpGU6LwNsaWdegArD1T6jY3FEZKwGa7N3ZF",
  "key4": "3KA9yW6bNkaG2eqxwWNNM7WArrxwYoAwZU9vcM4h7CW99itht1JxQmh72VdksAsU4eWRxN9iL5Au4GJsXm5DWW9s",
  "key5": "5SRkqzDdE6Xr2qD4Aee2EASzvmSyC3UyfrUwf85Dnh7qywNFtydjzeN8KFHJYpu7YzhizG7vAAUZFUPzJ183GLA9",
  "key6": "WCWEwtWuEgfZ2bP69YUFbMoW2QZNoq8upJpCrpHAgBJKDQP89ddpTopAv4LB1z4pnpxkZxbzYQ3Gz4fL84nmWKk",
  "key7": "2DLQfFNv6ALaAD5yWX6sXuVpXPpYje9u5WuWEnGfCbgqjtNhgGPJaaTG5JzfS6BEyKo92H1j3Qtu8WgcsrLgyHNZ",
  "key8": "4xfR5HREyapRoDcwAsinqGQUk52dyTVby8xNugwez52eVWYuAXturqG4Wt1xE5uRuMVV95ijFTvydqoWkmZ7v7o4",
  "key9": "5b9Bciq2pJjnUzjvm76yWeGa9vaHbZp78nVfhiqaNPWKzTvxBDUDHjcQ97e5ETVCbQtJQmrWaog6CTEryfQ2KKFh",
  "key10": "iroJtKLV1ETZ1pZMV6mZnDqLnRp3Kcz8PHN2gzi3vcV2FwDX5PjoLcQca5rN9XjURn5JPbLJnaVYk1iV37L6pie",
  "key11": "2tVLVEqMTMp6WMftDBpJ9zB12ULeyjpFZd86LWPXMbPv61dY79timz7GbtTNoiU5MFwCRTtZdVQyAAacUgshjt8r",
  "key12": "pz9KwQNH3yEB9ouqgwGh5q9ACDE8P4aETLCwnmKhM2yq8gaaYEcSmkKXGioJh7QQGP7FADJWB1rw5jzWgNKcq7X",
  "key13": "JSfKiR4nw2MMNTEvgtPkJDY9DLcm5Lhh4B2TppdqCNEWTShu2eeeiHG5kq2cy8XSTrfGYUjsPBtC3Ba36UyXpyH",
  "key14": "4v4FhsFC7NYz2iwzmRFC6RBuKQoSZ17bTR5FmxcmVRyYbNc39yavV5MM7EcNzD88SEVncY865xAmFRTV48PMxqNx",
  "key15": "4otuYZbBS4FWcS6agNeKw5Z77PpDpL19Bw3up8qdMZr8TwgEyny9yantWTedq4n3dyaATM9dUfPsC4HjjbjCF2Ve",
  "key16": "21RPeo5o1JtNWqoVjY6C2R84i5yx1PrWeKqRVCEoEtxMaGXeUegoXDUvwTLPv1suMZL8GUzbZoLBYZ2vtJjdXe2P",
  "key17": "5iEFGguCVdiZcvvXi8bGYeCzrQt3Z6gepNGBqh9EDQGQA6R5jtPFkAwVBPvrX7hMToV1oGhMERk7BS1UDhUiYteZ",
  "key18": "EsJpkHHu5eUn6jtLz9wXhQTE2iVgFtXDfbCxCSoFaRvRwquY5cZgHypKNUhaCj7YVE5qKmsvaK77yfnrxfsk9UY",
  "key19": "2fuBxYYaJJrVQMc3gN7XpVrWpTcgpggu2Qd6xa9sdJouHkpNBsk56LhCZnnnPEwikMPm6JkdZi3fCnR8fvGwLQZf",
  "key20": "2V18PdKn7xKZv7VeZtoaNDU5ZfadQRfQGuvW2degE8mCjFy965u1Ciwpreto74WWToPsxxkbViMEWydhgVDmyS1C",
  "key21": "34t141PSySYMe55GXkB2CCL3qadhjCvaadkZKMdZs2uSJa13H4nj9hgQCS32Za2PSFG1626DbNFiNSEr8ejfZuT4",
  "key22": "43KsKCGrJ9eMoyWAyoDVnwkgWwwUToH3WQjMxVZMJha31TBZAtpNAUiiM4K8pB3U9qqsBkLzEFP7T32z6QhcpGk3",
  "key23": "nbbSiDss2CxHRp2dtGKrQ4Y8Uru8JvvaYqAtQXrQi8nX7q9qonWDUJMUptG68DPSVivkekh8hS8uirYKmhx3BGC",
  "key24": "3R4b4Sv5X311f5DMMX7tUjcAQYSq1PFutFpvVCFMTRuqB66G2dqyv7sE58V9PyShuKBCjcWdSFcN9FSSxHhkchiD",
  "key25": "48q9qDJAv2gWm9dcL6REdjfYi4hzSinzzmFoEvLt63ZFCUd5TWaMKpsbfg2313u8BwcmShcax1sjLx7qVd3VaGr7",
  "key26": "22CsMdGhqC392mUBvn8n7AuNycZfRQXzWQvRibnaxbwpHf7uUNZ8yFoUyRAGNG9TvzU5xk9aNB5fT163KeQMGfdo",
  "key27": "3pkE4UKNPPyXDGpSHm8aonJHMZ7WfMZyy3dB1JTqmXxLmSmLGE3m5XZ6qGnZ9HPZLZYULiwEZgASmL2KJUCqJzDX",
  "key28": "37oK3KcdLkyE6DekWeXeWTgPKRt24gxCuScGwmEUrfQ7tmwcKoeCxegDnDf4ize5s22jErsEZBiNNNWqH5m6M8zH",
  "key29": "5EJ6zhnyuJ9pgEcEwwPBL7bhwCToRhD9S85a1dv1eQWcnuEG2imDRr4nXK6DLuMk9RCKB9MbfU4LzGydgJd3cXqR",
  "key30": "3vfD9NE2KohnbS9aWcRYp2ahXqJBNAXHzM8SoKDqaN6FFTmoQWBsdeEG4q2rV1G3Pg8PdPmVxkbFKQPk1ZBen2tE",
  "key31": "38xgJS8hPpRzw7qvzY1Y656h8egSSqFGD6jVsfP6shA7Seqay9uJohFFfW5apYXtXGWQEZuCt2ETJFFarxsP26WQ",
  "key32": "3jFVV9BFU3V2CXH2Pb1A8bLsuUYRkSPWtmWRJmyfSQLqr6S4gC9TuoEcsFzH5bGJ6JYRTknBXyCj6Z2NXtndXsLW",
  "key33": "4maYvKThEQoTwC9FDvVQSexkYwjB77zbHpMwbWApMwwhYSk1kndpzpjDtNggoCxMyW5PaeNsEXfNL5MEJ2VdkCnL",
  "key34": "3WD2dhnqanr6Uce62YXtQDR5jEHvgMbEwyTXiaK7PkMXQTcePudaAWquWvKw98Z7mP4MDgz2LmYgWr2Vh9SaEx8R",
  "key35": "Pq9NXum5od9H7y3Y4ZZEZjFBs84dWs9FBJmsughn8VuoJu3oRvakNn8hH1XQrd8uuV1C9UbCNZYZ7UKk8L6GHe3",
  "key36": "5ARr1FxWgUhVLpWBJtB2hMEyktwC7GGTC3P3yR8gqYp9BUHtwKCud3RXHvnpDWkCJbpmEPFmA54FDFtbwaqyBvR5",
  "key37": "5YVWhGmpXyp75vHyvqaLR4eSPcSmWdzyoo9yxG44Sv72hNYLrZKnmFiyTUrWynN1giErLqTbgxwe2pSWFh4fTJpb",
  "key38": "4HaQEyhnLviH3eJpsNE8mbzoYn1YtZ3oqetiR9H3cWFp8WRAW9eC3YbWhMSPwKvvuxpD7LseDc4sZzisXFgTdBZ2",
  "key39": "2CJNPYzLMwgTiUATMCXL1PTq7WVdhUeoj7JtU8WoTkguVgdWZWt5L9JvivFQX1JfGkUuB12RZXD7Rw1C8xgsQFS8",
  "key40": "2oxE7xwHwZe6kJK4nNzY2s6LfxJqubhvXCP9LmkmYsV6rmJE9P1p4gpPc9EQGArScF44prFvwYeE7kiE8XfrNuDA",
  "key41": "3pETKvV91zF6VQ6eSHR8DXxSxbWhofzPryeEjvSqsWimu7EeBvifnMTpfnJitc771zggoJ8qT33LsByzffFHcKz4",
  "key42": "5n1aNx8JUbf6DL7BVmVcbKqip53fj67Z1qwr6bCHVFfdxDsKRuHAT8Sof5C542YsTHWdoXHbZFyPyNfBZtdepQeL"
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
