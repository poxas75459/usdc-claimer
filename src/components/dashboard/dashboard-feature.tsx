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
    "5h8quriZfTixVq6zRYVXXimDZq8VzYDzohYBx7RVSXQsn47LBzdNVr8M4BtDqena58afK1Di1QZ1PuFFEgJsK78w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxCCxz9NNVtxfZPowM81r26wEgFW6tPF3UQnv4MxojSUHEUpfP8GPhSveVTw6fDvPTHPWZ4UHs7XUuM2rcpxYpx",
  "key1": "2isFttUXo8EvbaPgfV6g6BXD6Wux3548DEnzRUoby4joA7N2CeV5EFmt9sTmfuWaCpFFGHqyCwdoXMqtk8sDHvEu",
  "key2": "47sHuSAd5aNdVKAEKcQdzysLJjedn1YUbTRKHicynUiYhx6uXXmTd6vufiH4fm2mkg6KaLdZC1dAzFqRfANpF7ku",
  "key3": "5uqtpdLtaCzbMYczyWCGzDziMGMAshSnZAQVwdUxs4rZjoS5QR3DLkxzXhkZUdc21KmsaTNospyM8d7Gv5faY2to",
  "key4": "4dET3zZHigZAnwACPDSvguDki4pFR6PKn7V2PSb1o3avnqpdCU2UQiSUQN93BviKnNBnB4hhjBMcEpu8QijPXjwu",
  "key5": "5wLXNZqJiFJKGD7z8osHzgf3DDYLxkxLt4qAHhSpXyc7JxMJE6X345dcrBKhtbrkLheavJamAHKP7eQ3B6w7w5oN",
  "key6": "3zkM9ACERQDaokuf8fuR3KzQ8AZqD1sHwNxgRNxezxfMK9nQa7RWwxxAk2XunE2jeWb3EXgbpd7JApV8S9n3yFmj",
  "key7": "4k4kHaHstJY9hmjRB3daF62JXY7Mx7NGBcDv4yLhVovasZ1qrAsN3BX5cy1YwY5rdncWNuEW2wuW4MJuuozatMyE",
  "key8": "2AoDHLGru842j2HXeaNWxQLUgHMbtuAxjwLrenHdmCskSveodQveB96RwvZAiBnEdV5NiFDBTRQcBXU734mESt5Q",
  "key9": "2imJSNrd36rqgZZWtcXvr5iEeJkFxQp8qzvXAWCCzV5QGq5wdQw4MucigMT4AaFvoa3LngUu6src9NyVT9xpCsN4",
  "key10": "4V3X643yJWLgkxCfVBMfuzS6NgcD6p6U2w3KEwNZEoGiGvHWnVRaSd9qRv6L1gi9otKmJhBPGKxRwdsCJUFwDAwZ",
  "key11": "2v7bzgKuzAwpqKaMN93Dz3Z9kTD7Boi9CdENc7s2Avak2tEvv4C1YV5vioBUi5Ed4AbnFCsvTJ7wPAFgeUMkoE3z",
  "key12": "66VrjwamNVHekTf2WUvimoAb2wwVaFU7PVgHLPD6RJGY7G1zj4ZjzEXobkr9yEiT4UNv8hguEeBgtHqRsrdpMPAY",
  "key13": "4Ffm2MwdSYep4RECbSb3r8KUDBVQ6wqFnsrtSb7aZ8xmj8STfGcLvJPeb4P2aWEzPNa9YaTpy7Gbz5ue4Vqv2S5x",
  "key14": "2o7K9efFxycNhqtSfagrgT1xZEb8ZbkPc5Knp5rwz811CYyiUEaYshJMaEgDPgPaa7SzH7X2mQxkV4uwaZjYQwjZ",
  "key15": "3vAT6CKR6HeFE5m5hQGHNF16G1pykKfAi5LMzyVeoYpFWf3J9i7gKVZZeAmsDqVtaNV9vT8V6n5nw5AJhP2YSTbh",
  "key16": "26MrN7mGM93Gwkq6oFCftGMXUN9uETqwhg6JWradf7ctWvsz8C9rTHd3kSwc5q1wSzKC81GSumHgpwnroPit7Wkt",
  "key17": "45GUvGCz5TwKFGTjAZuLoosyGDqmnySoie8qocpGfQkuQuRdSfVb4BoCWrBmUzemrPCeMosD6FYpGANrnagiqU9C",
  "key18": "4vgu5DRH991sfaqDFm3cdFjyLnb1YrfDVhy4Z9KbU5VcvzfNnisHtxG7eLctkFyte76wa1x2712ihuFUNmc5v9BL",
  "key19": "9uhjVc543iJNZzRHgqCbSgwjCSQSRxkSpoBNJETHXjsVptzEy4bugVoW8xBWEv7Yy4wQ7r4Q7TqgGH6wNgHsoYY",
  "key20": "53PRJSVJpguYA6zuqY4iZk9t5BcN4TpKhRyZtfmDLkMsoXuUb31ssdQE8P7tLhGvFRC6tvh638cGDF65kbR9bHBm",
  "key21": "5AMtqYCi5SSmEejZi9vAYe2CFh55nQee3LFYNvrur1GjQVzH3htTJWMFQsAaY9cDozAd26zpUrpq8W61Noki4ohB",
  "key22": "3UiXicTZauexwuLubj2hk5tt3hHRbMppJ6Lyb2jWNMjN2avLRB26u44YKKSeY7DfLnMtfyvLKJXDugmbYg74BPkm",
  "key23": "PZH7i38op3Pj5LoQcgWGdU5EJypa7jDaLyRFr9MTzxCKBceWh3w1G7FA7ngyk9ikWBrXuhPUZ4P5PEwgRsa3Gf1",
  "key24": "5MHi7tKasDCQKDKdk69LUM1mNYS8jcU7a5umnGXrrFdFaD5FoEeqC4g4vqEwnZ6cEYyJmbnajA7kwcNTMc2Wv5ik",
  "key25": "2E5yicj6j5LAoj5xKzzr6y7xKQbvNqA9LhdSEpwhteDL6Giqf1LCF8t2UCJLQRwWHQL9v8AKiTk3PPoX3Ho5a1nE",
  "key26": "57zpbkXWDndTn9SxpKSdu6t4STqHeSMWXcyTrw9BYviRMQtg4eJoJSbrGM1N53CtX1W8w5z4XeLd29Xdq1YBSQQv",
  "key27": "2d7uXHoDfF9S8NMNigpHvRBMNWFJ96GaL2K5rmN2YhyK6tGCmec2UNFH8PeBAi7QXkzsQvtVQBGN9itFCF8m3UYG",
  "key28": "4ZgABJb22VcbHM4A4cE9EvJ9gbEjnSMoSWZSHEaCNydj7mK3pKnucJFsdUqatfCwaRH9Kf9Dkh7EQXQHVBJgdP1o",
  "key29": "28X9HaUsKKV6wZ5nGLbwTYQ2ntbq8AyjTagxLHcA4F6ihR7psvRMrwaQg4PC2gcSXrvfXMRGvBjKArg3XALeNmns",
  "key30": "3obUU9q71QEpBPPYVncoWkYUGW98ddyaLJkwqvTykf6Arydhs7mWeHRyziGxsvCyPs4eK3qqfjJ7ByK51GGuZf1L",
  "key31": "3kEoekPurWERqirEsMPiVaV91gLo245gqPNoLNTkcqaZuYPLTGUFLswD31i3XbRkFZihEhX8Jq8Kaa3mWt8ghqG9",
  "key32": "4qgFqxEzrBJXWVV33wLoHESeF6AXwBU9MaFQ3UBUEcTyJuHmvRapDY5g4gXtdPDUP7cM4hkYYurUSEgrSWPwB2gc",
  "key33": "5g39upf91Jcsx7vwcwgSwhQ4UkFEgnuz5Qdi19iptx2FvuFrXWhq8uVYmGh36kpPszRvWK1XkeRHyWyV3ihKQ1CB",
  "key34": "2Up4ZevnrWZBq6JCdrkiRTaa5t6kfff4fcpjdXgJhqTwuT3HJJLp6ZaHrDA2SpjshNUPwdwLZAseWQ3GfTa1vr3h",
  "key35": "2uRuUFEXBjBYCVRBxEZBu9Q415PhGCgpbY72rgok2JnHjEvupmY1KDhTokeGYDxf86iWP7icmxbB82uQvt1WSG1Y",
  "key36": "3aEt4cKTc9GcgTiYgAdD4NbsiTWbo3ovAJHLaUZwuaoA4ZojzEcux9b8dDXojuEnQUZNCL9BaLGSfxQeiVWbSkyi",
  "key37": "Qd4r57pANBjqgvQLa7iJk72KYDBvTt1Kqg8wbPUMtrP7xc2GEkeQcyz4gF6H1pA1bz5WTeP5pz4jLPgrewUka5u",
  "key38": "4tMSsBFadtuXvnKZpC9DsJYrCJhjmuEp4DQqP4LJAZTCcmwkqVDPmN6DntpW4Xbexuky6kMiPPVDT7TgiV6Pr3tj",
  "key39": "4tbgYN3EAnucZKBr7zmQJdTyXwr7sEM8N1EDHYX8To7mS6oD5XgUaVVJgLPNs6M1cA6EZ6cVf6TmSfX2qSgkL7Mt"
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
