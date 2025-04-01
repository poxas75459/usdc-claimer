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
    "27gfFWCxg9tCtYLhmsCSCbghuwhZjqxCbyLeeB7tkVnRJDywphzGMNrU27Gf4auQ65DYiAg7FJkwX7vFeKMFXosp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sQnpnL58CJ94oEkBMY7LA6wapLaSUGVvVPeHu8KsBKhU9eDffbcPrLJaAKqco6woYmMsYqpQ8ye7mhNeCcf15rb",
  "key1": "4ZEWttNwCQqp2LkGaXcHRYRCkrQeugWrCKnF7YtGLY6zzTncBEErTrLY7TvPgkrNZhpw2C2e33fSVWVKtYhLxijW",
  "key2": "2sNibwRj32UtDgrQv2K7A5zytGKNFAizdqoag6z54nq2dovxxr9dAk6jZ1xDTS5q5x8s5jbKnrU1SGwCF6QcCbHJ",
  "key3": "3LXpK4T6ufzUTKfQfoW9vjgASSwzYrav3nNWLwGuAjw66oUGYAgnpRhM49U4Vj94tGU87cpjVcNPxzWbka7yNWGk",
  "key4": "4VtTLftTqgkFjZYdPSExRtqQnzMu2Af1yiaoEDPzTCp3YrwQELLH8BZvrfioh6n5yK31aAt4AGMDQWVcJBbF35X8",
  "key5": "4QCDhV2LvBryiMvCL5mXN5AoqqPs8kNtLJjo6XQBZv3zNkoJifsE1x4LR88KmFpAiaPddi2y1tt11Cb7oZxjL1y6",
  "key6": "4duBUQ4LLeHcz3GHpAnwfmGFiJEMY6pSMFqKpdEbCwoXZ9fCbvCvEqgoUAg2yP9raugihSZ4fRUdqowqfUPaCBtc",
  "key7": "pwk5WiBWVuLRYxaPWGBrb77cZiEZHfehThtQ6NGNtbPNpvnL9Bd39bByar4RHPEdAdVVNLNxw3XgtLZYgyU274A",
  "key8": "4aL6M6j9wTBxSQpCPvVdhyTFXB5brFeQXsyEpGK8cx3QkezxWKwzfTRcvDbxGitvA6JuRbyxyv5nyPw5Sc8Vao4W",
  "key9": "4gSU348tNb63wVibKN1cJsHgMf9ThhpSpsvTXUxenoM9kTtUkW5wrTJyq4Q6EEBviXbVxxpyVajSKoiTtnwaF4iL",
  "key10": "4RRoLy9a7ComypUo4WSv45F42Y1d29QzG3vCHqC83ZpUe4tvTtPxSuMA2dCTNc2CcXnpyE1UJtZWfxV2sZ9pnSLj",
  "key11": "4QGCEGVs8Mcq6tdjEfR8SL4a2QUEiFDWnu3S4WBANnA8KEFYBmx6gTE5DUnN62bY4oCHHQVm6gxGEW2CvGYJaM6s",
  "key12": "GKNNg5sEGNCsfjw59eJw2dK4YYzQWwdg6a5GMpRHA1G7CoZz1vDUNdt7atgS5GS7ZHxdnRwK8zXxWFGSZp2y7aV",
  "key13": "2at1gK5GE2WLgcz47i1vEi9farL3rVekJfdfwZSfXyvR9Ye7Z78CcGwmpF95ZeKEvYZ5YufYX1C6cSFETjeaLfsF",
  "key14": "4sMEZFvMbijyGeUc3dqeBDkA3dkqdWrjAqss5Gf9ZVrN7QqTsg2MP4RPN6YnGVK7LdNfrM4GzCHZ7DXACV23fNeh",
  "key15": "3pkHm9MxbamDGw18QSwTFYt5gAe9wPLvmSnQ8WJTemutF3BDfxw7BQ6Yj7TNy7GYDJKD5Ec4e83SZ8HhxKgj62ri",
  "key16": "2dhMWjHVyPWhnhQF9iXmi2WS1vQCoyEDUygYojEzPSkMtvQ2JcNs8nH1s6oAYnPo8SpF1sA8mh53HPUwpq9siFtt",
  "key17": "5dcvqwSZKnVmxJmhMM8e9Uwz83nktQbZMQmyQP4ot6EByh3uR87c21gyj2M8eBZKsJLCbMh2GMHGfn6z9k9yzXbh",
  "key18": "259s6ZELKkrj6R2CgfCQ9oovfnAqxmMV8cRmoEctfNsF5urCo9ycTHAe7sPrnH5XGfng6pLFAwYokY9c8cTVQpZt",
  "key19": "4tGEA2wgWKPVgeeYT63NgCRCX14Tn5dH7K7MPkZY31yQGs9qVmAxbjN6xwzdz2AFJy6QJwQ1YxPCkvBm6LGtgqwx",
  "key20": "4wjVujnGZ645bszodxjZEN1BZJsuSuMLkyF8zsQF5uHEKs9TgfjnNz2HBHRkxxoSqNDtiemmBB6g2QPpoqLobMHk",
  "key21": "gbzAx3F1HhyGARnr5KKkr7oiN6xMsyMysbq35tzPRhJstFN3SKid2q3shtMf8Nw6eaG3gn1i48pA9VRBJvMbBPq",
  "key22": "3t3K5K9z2Kpp7PRyksh9LPmdbhVjaBb5vaXGLidBvBFVPZzMePPmhuN2BLEHxk19bpUXY23XDSgnJ6s46q2f71rd",
  "key23": "4JQLnC15FozdvxQSan9DRwGXnpRmvugPjKamkRk3LVLLduXtLT9XY3jmCXGcNmT3kXXCuJU8czCfrq2wPAv7VCG3",
  "key24": "26c1NfpVXm32ixM6W6b4Pd3u7RdLqJQzhsk2H7opDdjBQvfVbJhbRKtghW9AJzbkWsS3PJojAg6nqhBKLvrAHDUc",
  "key25": "22EwPgPebrm2F8jXQjwcaP5ALKQ6u4oxwy2dFUGAcgQtYBCujyChT6uUTpXatbqQbJaMMXoE3FHomCXxyFNLNdPM",
  "key26": "4qWrBjbqybdLqy5ivBPm3qcBGUwoiodjkgaoy4UMXY7SLAfSWdikQ7M5ZSa2BP8rmsjEaijPTVAKthb8LNnSYNvp",
  "key27": "33UUCEFqB3eH5D6uazNPkwc3exU5g4UYP6TkK95PVuPNzfccryAKaDaVfgtKSNXV79twubbYQX7DMpzw2V2oZiaq",
  "key28": "3qk8pBZWLXF9ZjTjuSNJEZumzB77TcCKsfXr1ddo6NDbe9JemsPPz6z31NiTMDsLcw1DgjDrvZ2sREdMq5JyoVNG",
  "key29": "5v6wHdBKzkYjzSmHieBuB8wT888mHSXWZ4JTTjSrzrE7UQzHQYERR3oAwdtUva5qkgFjB2nWGFahCekKpGGFHzFq",
  "key30": "2hTyXg7EKesk4N2fREiM6hFNghLKVZkiBXjZq2XCQALzuC5zWKsP42T8mKpzPprfoXUjuDDTjY59iHJJnACavuyg",
  "key31": "47jxsxEttdA64khHaLS7Kc6F5yeGeSgsBPUysLkiA6hfBaDa9TRX2Hh6db9jRrsDBDdMMtnhTBTLcRAMhonUymmq",
  "key32": "3peevq8zopHnYBPjgTyiSTUwSpKoTeLnNsr5xWFuw5fLDhcZgZxEvSjLYmBwJzrHzzzvWBVqZkDJdpJg88m7djU5",
  "key33": "djiH87xCUbA7cYUiBiocS34avt6ffb99UzmpupWP8vyDmcQFRLD1JUsA9pcycPpezmZk716zghDgGAmmeqKygx9",
  "key34": "4nrZ6WErMi8RyEDQk2J5hWJtD3uehCPtifFP85TArnGnVDRCsxjsXRNbjwhzsjwQ9E7LWwFurRqjWTUC9UdJvd6G",
  "key35": "358FtekccFPkGZDTgqTTGm2BTH1v2pPCuHJLKy7rnkijaE2dRKqh49cYuRekFur1jpTuG5uLK6rWzZEEAywaT9Uo",
  "key36": "3sboL159TaTyack8foaTHgsPrCcEhYcxyvHtML79GG4jS5hs5UBF6T55XZpapS6j6FFzSgDXLJjPWyQEu7KnjGi",
  "key37": "2gE55jLtfhpwTej14VRPgbcasBoMWTGhDKxMtYehp3MeNzQc9vMqVYwERYTMr5ucN1wskQ2HvevsfAEpw33k2bvW",
  "key38": "9gQpQfZxcyRsPB7BZFBhsqjgLiGEfPzgFFQi8R6psmQpmR2KV1BiudUZVwHHLdt36oeEBpCVxiTFvKXXwxzZZ6e"
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
