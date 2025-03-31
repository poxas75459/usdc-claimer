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
    "34Y6eQPaBmEeFybB7UBvtXk3jQ8qqpe416S4YTUwoENXpzXb2AYFKpYAnZqHRvtM8QTif3ecFFvtvGa167VLUjqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k26yWtqFCPaJ5e6xD1LdgNJsD2VpqrXdSXDGfHLhyq82US2SQCYieArLoYQDLJskSH1fRJxgCMP4hpm56p5EuTm",
  "key1": "2pFRayGTiMZWwu9qBFWwAo1ARss5xe1vS1CVvLnLDg4LK7X5fFm27vRis1V2dJom2xFXAvkgc1EDsYeSgk4F6QXG",
  "key2": "4b8xsWCBAYq9wHrck1tBFV4skmXdJU2ze9tCQFhoqNK1ux3YgqU898YFAecxvjqufQfiAvBWNEKowrqXQKHLaRqt",
  "key3": "2Ftq92VFXkwY9NEvEPZhDJedB7KSXAYQ1ykTgTmWxmqLHKsXQZJfGUFMtzo7x1Zg9bxBkeXJsGocUA3UQMuag2bs",
  "key4": "4tcQkbVdizQ2ht5i8GWKHMVpxqpEsabQXLExTZUofxXnqUbaP9DSMtaxe9wobg1otwdZ9XT8ATQqbvSTWN225oYR",
  "key5": "4dwxuCD8HBNkxrD4t5SeS9y4twUbjSzYe4psu2J6J2HGv2uJ9CE938EVUridVin7mGTL6X1G2oN4558gNNK7aKyL",
  "key6": "jocdkbSCwfQggv7W4Xw6MqFwQGRHF9cZPvqyFaAevw5T11xDBtsVaRGKJ7YN7xBTRDaP4AzBptLGcm4QyXuzmYZ",
  "key7": "5DUZst9KJSWbcSSEggpuajrRDTU5am2E9mKz3Qb3SBeziJabxsqfxsVNYTK5xzmBsXGeButsqp6AAyeWL33YKeg5",
  "key8": "5w5Js8JJsHmYd49paZfEDKPAK2kociYyCzxE5cJmeu5NSARBsXzvd8TcJzz55UYSCnoPXqfWvNEoLf4VX3opotQi",
  "key9": "4Qbu5MdJTcMYrujC3mEHYcRnnBcN9dmPwmyzFT3S8RiwgnKpGinxujadGv6YhYn7EMKcZVYMLzTHde4iPuWz5pzo",
  "key10": "5gKQhjeNMGWrYL5EHbsFTikKzhvyMdRh9BZh4pFQJBWJPWx7LxJsXQVc5E4so34gWnUvepfc9nxVxLgLASFBJsje",
  "key11": "4Uz51RLQKTdTVsZG2yMCKFmrEDeoWehgurbmmzAHfK1AWu6kUmLcA9UzchaQ7ukYMjoZMLdMnHKjmx6K4PbqWhoL",
  "key12": "678QRqbyEHhbrUkGXEiinYswZHycKauq3Pqpeezv2jEuwVv64QZmPSJVHiWgybTwkk8krJW5iPKwXr2VJ4Bc848a",
  "key13": "2mPHREvJtFiWzkdC3FSRNcppCpD4msMAZeLVMHykCtwFG1e9YmYs4aSoTBa3kixaixge52qVXJhnkntZ8Sa4chx1",
  "key14": "4c8zhxCX2mSP2iuHjzUVyZrYw2W4FJLGP8yzfRbP5RwxuuPkkVisNv2U2mo8JERAjmw2XiLmuzq6pQMhg1gvHnJj",
  "key15": "3uom9T7w2hPkW8FWubin623AgsCieSKmmyoYnLZiakpSsVt1qFeC6aJ8RcouS8iDU6rPcFjXHQSz7qksEwMYAatB",
  "key16": "3jBRFA4QfsEqfoQko4qHtuacvYRaQnZJH2Q5o81oNCRqDvfDHVYSp4ytEf6yznxiXTXydktYoqHUct66F9zHYrY3",
  "key17": "39hGMx6m3chqTan2GkuRapSBBNDEddfSpacDuTnS5A82DSDTLvmnZrw47PWNGizEZYvgD9tRLUEnwwz8MvS6FGS1",
  "key18": "5w97ofJqv3cLV9erQ4mbHyzVAkiNWxokRs4FhS4tBgsB3aRqmxgekpYCFtnn3psBaVnnHiEbEUHpyYdLJECD7Cv3",
  "key19": "5SV61dtya75x65npXu2LZCC2QxXdrV44LpFefqcwf3YERuHyJGngGg5SqjZ8JqvHzzsibxPTA8uckmbpmAL4yE7e",
  "key20": "2ir39B3AnjzF7ijMEs1ii59AwfF4izobHx3Yg4gDYKRBdyCTLpCmU5vCU2yNSQR7AkRimQnK1FTNJJxNte8HzbTW",
  "key21": "61hLVpnkcLULEFZnXyd5epZPqeRH9KNPZj6gzn3VTK9CAvU6VE3dskDxvECJVQHnuvFwBQttEdQ86yDqzk4PZiw9",
  "key22": "389SxGekourLjqfSd5a9jRhdVyQ4AiAkqH3u8kf6GuKPrtmjmUV2X1Qem6uar3GEAjTd6GHQ9WHxkjgg4G6emBE5",
  "key23": "4WFZF6tC3Xq6hR88yVZu9DgFurvP7FjXFQKkuiE3FHqzSaCFGRSYNPiCdzP7K1eUaFy7E2mR9UjiaRkvkMS2tQNe",
  "key24": "e5dBDxcvmgrob1SSMktMKDSP45zufMQKo6vRnxduHYrUXmKiCujX8wjc3cCWVBvpmH7YuqbqxrAdeYCbosom98q",
  "key25": "PfEDSFP3gGKhDeMJ3BSWL8GsjxSBmRczrMJkqURVQTvTb4nqAczaP3qcxHHr6kuW3Eeaxa1isqXk9GkJGkuB5LQ",
  "key26": "498yYUhJWsEpNCay4NCYn73FWobE9LZ8GoyUWQudTqcRPBS1gbNsSV5eM27MFspMq5MuyYi17nQ8aioQi7kShpV5",
  "key27": "4j2b3WqwgqRwYRMgy2ov1pNMc5GDGhVV8RBar3RYXEgah7EhcTbTuBf12osmp2DYTzLbLCJYnmKeR8scURnDgJsY",
  "key28": "5mJLEHbyiCnbqmPB3F5P25uZMrWWJuM4VRnr99HgfDBfsi19PwQCH71aJbsmaZi4LnEqnUKmRACFRajbmz1UmAkm"
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
