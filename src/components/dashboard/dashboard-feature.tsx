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
    "iqWgCemLmmCenyJ2HohKsrEgFnK48Ej78DsQJ7hb4Z8YZ9tHn1EkqWq1cNzkJPpQpJ476varvKnpZVHD7t8scFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qUf8bNwVntLqVQKctQrxLjWHouJF7eoZ6UuJqB11jmf56aQ4hpGugi9P3qgoebUVkXwNVU1eSNP2JvikyTqxtTW",
  "key1": "66xsiLbCfmZThJddZ9uxvvBsGtEU9KuBhzxXyNfm5nqqy94UrUgJPvsDvHbLhoyVbDDEx5hvvy9pcoqe1w7T4vCj",
  "key2": "49soMDjnMpY5JPiv5BxGAgx55Ji2AbCnqkJdoGx6X9n1MEp6nTMaQKTykmD5KwJ5kP9mrdLvG4XsiPAQepKbdzA8",
  "key3": "2ZkqEpt3WwqxcHMkvRSTvc4bfeuQUKn7fCzfM4B1mWNxBpCd5WA2TSdnRfrF81dJGWFSeypHifAXDTfTQ6cBpKNj",
  "key4": "314Hmp92CFY9NdY2PvHevW7V6YyLKXz2JiDGDbX8E59nH5YcsBhQszoV1rKhwsPU3xC7ff1pP6QzgR4eCVw1ofGq",
  "key5": "3ndXnDiMGbneyfQ56trH5MuzXxV66aTQnBwoQQcVQvtD6ShWVxmb4b155Xeq2FHbJPeKCqnBbcHwAqk462yWDemd",
  "key6": "33iFsLMrgq3HXePjxDWHZ3scEnu1Z9SMLUKFCfMFtTisL5sDfvDSUvPhmFXWC78aKzshuorH8ZUcsM1uELb1ZzJU",
  "key7": "4MsbkDZkSaT6X3dEpvHfFW8t4PrkVACLrVsrcQnS2uJmrTrwDey1QzaeEa7peD542wZosNPjXSM7fzq1x7SptJd7",
  "key8": "5rHHsaxfC6ED5ZkykxzuBDjAkwRQ3SA7miabvyDx8tEqW7e4q4MbUmPEFqvhjqKMTpkrfnWhN6rFKRsU73Si5wP4",
  "key9": "2yXe1Ydr24VenUauNStyBJ4zSsaVXgUiKZLv1qv5wEurWVKt3EDVXTpQWWnctQeQs3K2Eo1wWKnVtb72sCWWPMvW",
  "key10": "4BFjUxc6BYPmppMtq7PjPxzE7ZuFz77YnGNsohsnbhqhNiZy5xmmFFyB59FUZyhWPJDhgLvTHxze9Vf5T3K4TZxz",
  "key11": "5uqgATQUnEH29ZAUjzP5ZX2pyoPtKkqT1aWNBG8DgAerUomG4fufywSxfNrpzargbeGe931krmEkgv1GLq3toMkK",
  "key12": "4xZTwFKWGdg6jZDbGtWf4W9rf1QtUSuVw2LjX1GexwV2pfyYn6SuuLH1wFnV2WVUH7NzXkvb6SQrMmY28czqdwQk",
  "key13": "5WKqpoxMSXnYxcquMg8L3toxVReSpQdU8W1tWiw6QGSecccoRG2BdNxy5u8ffSuJfbwaYF52p5B5VD6dCxf2xbTj",
  "key14": "3SqcYEVHBttTrssGikiCnzTu3tPVcYwVkCZTWZ7K9V5w3SESwEvpUdwtMNVc8jSjU69MZRpFAiN36YqpqtNTYGbJ",
  "key15": "5cmL8gYg6sg43heG6vYH3WY3XCio5YZhhCJw8dH2LyAQbfbCjAohHL3EPRyWWinohcWVRtaHeu8YyWUPZrd2NtHw",
  "key16": "38n1aLJf7yqxggbQMZeRFc9XZDwBRacRxCXtensAf3tGsVKrgvPQuPJLS9Ge7Vpcv8B6ppatJTF2dFFNgS5yyAhe",
  "key17": "3C8ntzaCpM5bAWAU3UezKNwQiN73TbfcdGisV6CdLXbkQnwChmedb287Q7ZW8CU2EnFuSnULstjeRnq8UJ8A1ufr",
  "key18": "ZYp4uTSivpE64Gteeq1ve2NCbsnRRNso5YJfRL8gpybkcaFZRhAeJTtGi9YNxARUtg45DmLU8zKDefGNK5UcwUJ",
  "key19": "TGHgAXYXWAV81TPaEBUwx12vY8AMdFoxEaQqdda1pTB4HaHXxxJu4op8SWmFLxZfeGiKBG3TcfK445zxmGnX7wm",
  "key20": "3nHHxpby5TRAPkx4qC6nnYRf236J9osHJVNiMMYXKTmnXzWQUPULgsdknHYYbK1UKKNiqBKhUYUiSgBauVjG8wFv",
  "key21": "2kEHKTqBTodAge84bi8QqXTKkzsWUhUpenQxoMTmpwVKqLMu5JDrCDF1vzcALNefx5nWHw9y4MQCB1dwwhZfU4Sz",
  "key22": "3hdYk4DkZxAtQDPd89MSAyyXP8H79DJDfiiBsyzndMyxuwEPZ1t99bTCkXHgBir6PVHWRNW2SWYnBiuun9kScBZK",
  "key23": "o43GAToMxBTrySeP8dWte3ehcbQHzy56NsTgeS37ggdYcnBnNR6vWcNaVp6shcmSsC7bSAhF6H97bkakBZhvhoN",
  "key24": "2jPA44yeBxVzyQ7pdLMPT2GApWRC94x3EnEJ3aEHZ2WBg6yNPZCA3mRNpzvyTebdKVV7mkHYCSQetr1poifu6sE6",
  "key25": "4taq5By5TLyzdieXxRdnH7MeCZw61vv5AjuF7yPaCy5pHn4NHCVrkBPZW5pyxGbWZTjEkgAGG7u9bYyGUmzWtjtS",
  "key26": "5kPXk4dTp7ZMuXd2EupxSZxquDS7PAcnPhrj3ChzFsuj7qsikgozPZbJdiMHoGBnJFDKVgGJeBi4xwdZE3U8VJnv",
  "key27": "3FUDvfGwe4wJtsjfdMb2MeKd3tQPGVAq3b8yc326R2JtEcVGU14ff6dXM1fzpe4GTyfXJayur9niBu4LFkBoQDSz",
  "key28": "4JCzxEp2gdXgbtbffBrxw6vTfp9TvSPaLi2HSLbVEM6fD3FUmJ6SDHEhju912ZmXFDdiabtzVF5bd9p7zudaTSBR",
  "key29": "5DRw4fcr8oZ9nV8MdzeSH8kQfBFKCZe2RK9HBtUWALub2bcSE3YTVFcL5JLCFYAWFYXFSFnTnNFNLxzsnfcCD1do",
  "key30": "3kisNGMJDQkPezmT9HvAdFoCaaSJP3wNKxHJbCokoo18FFNYeQfgsSqJrQxion3kW5QZTw3dvCag4q1JvnN2AxYB"
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
