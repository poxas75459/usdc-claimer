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
    "5TEFjToPhGAaFnCtwqBcBBC8dcPCgVyWbbfCcJKFQ1UYHefqxDojq9CzZ9vyeDqGDVDNQ3vgrrDa2jbScCNeqEoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n98nVAQjmJTMY6PrKXpLS3g3z8MeNU5wdAHyEf3cLwfYrKMVb9Bhzc7MhkENzcTrYZ5jrdSErYBtpiTTMonbJMa",
  "key1": "eX33c9SZXXmkEv4NScbhcq5jw9Ux73ZjJ4H9hCvHkEZyxe58dmbseJR11ysaN1bQnuNVVwC3UhpoBvEoixXRKPL",
  "key2": "4t2GmjAiLrNHaJnYutpVFTQtzRKopL4CyiqgyWA8JvErGB1uBcsDwHiryfQnXnqEpqi5Eg9vt2wmrgyA2Tdx3iZX",
  "key3": "2M8QdXaUtZ5zPysNzGywqAdGJqi3uzcoL7F6iFvhehtMMakjNNi8s4qZ68eXcgunf5VRjEbVDk9sWvYVPzANyNcj",
  "key4": "2VSHSoWLo39K1MDFyfQGuoFxQ5iPtxHCe1jj5HbZ5dbDjjGawocwTuEyS88cG437g8ramEB5xcEAWfN1guQkqaHf",
  "key5": "2m3F3gqts351zu8fTDCVbEkJ4hsNiEycdX9NZMT5dnbrXJeMDyGAdGJbLdAPXXnrBZQkbJmJoQZDnS7qNaoXzihb",
  "key6": "2nM4cPxYzgVGX13ecQ4yQn5WtjndSCtp9hZt4sTahJthHQHcrLmyAygBNtWZsqXMu4jYLEy7bzzvdb7qThvUXKnU",
  "key7": "2W566naZTdA9AgMdnWUtCFDtpRMS8pSKwauMx1D8LWQD7auHmAXF5LA3d6Y5TxSWsCRMxDkohHm6TEFzTzM4kSwT",
  "key8": "3aG64Nnm8xYfsdxvVdVaVGejpJXk8VvYkktpsH1vEvB84ThHAMqFiyZDJtAdXoxVqjBJK7Z72V6s4nMgRVcPRX7B",
  "key9": "61U2tUPcwKpCRSjjJdNimjWvS1nLvN8zZxfGv2HKRsobHXVckWUz38CAAuwEuruWGkZVS2kEunQ8kfAsAw6toWQn",
  "key10": "3S1U5fHiED87k42gcqMo2dsj34F95RdtbtLfKPpat31w4BLxjKsPqbiBrpB3rnMEfZJGHZHqjLGfth2kzZGmYWzE",
  "key11": "5Lg33xEpcZMXYwaNEaceKUENXXwcLmfV18pQoSeSEKiU7YrgtmbNdqGYFXqWya4EgikTdRmjcXpyNAHp2cdWgvUc",
  "key12": "518XmyoNKLJC5Hg9x8UgNQGKhTc3HPcb8NasRXHWEoDmbTxVFECenryBHW8VnHMzhQJGd42KhDWuTq4oj97meSvU",
  "key13": "4gFkJAk23oVNQYYMmLD7mjLxdrFoTynwRzwMvGe7FDoscD57ceR2BbZ9u2fV1HA9DMkVgGiLFHao9QbBcZKQE7So",
  "key14": "JWvgRM77PmTFjxzgG9ryDNbFXcUatb4ScyniGC2DyCyNQSfPgr4WcZ3jivofZs8tQQNGPws9pmW2ymoYGhC3VPn",
  "key15": "2ch129YWbQ3BY1BueQebGEtYwwmMQVsCxkWxc1nLqUyajVsXqDx9pxQbja3crRsseRueqgn3RsuhPjaA4vdYySpx",
  "key16": "3kyDKg9koEd8dPEoAoh3FtR6yNYKCB8W2fns94WfrdwYrVNjPcMPL2hSsHnBcA5b49656bKN3vBTjg35qXVJXbNN",
  "key17": "5Uuc2N14tt4JyUhJj93F7u36AaW969uNX3LKnFBdNr1RhKLuY6CD51apMwkGMQbXb1i9zRx48JQVFpY9fLooHMyx",
  "key18": "5gAPXtRbrAyfkpLwoqEpJXfVCWkPLEvdCDuKg9CRydRCn3ryCeAnGx19Y35YWCg5Tif34ESToKNFBr7RDKFVS1mr",
  "key19": "3BiYz46K22Aqph1iW8HB3P3pJyjTYEnGVLUbFWCDLwDg4wgwyPLCszqjCoXs1iRreaPRZeARkjeCxckrc7Ex4oxM",
  "key20": "5PdPw1VhvccV5oUFoTW21TEQLVpvYBdQjkSwKhHkrbp6MojWDw1PcwCKy4m7XLm4YxQhWM1qkwueePGoNFDh75pB",
  "key21": "kWYRnyXMmaas6EXZFHgcqPiUZeUXPQs92UmffgyNS6ryENeMnKef51aUMfsSRd8sPpbgk2v9cN7HFMvMGHWxHnx",
  "key22": "52usNhDUH97zSgZ5hfwiGxCkPw2XgBTN9CeFBDEWf2h5MZnsVaN2to8epTGXnj8g4CyVvY2Agh1sBUUPPCwpGVbn",
  "key23": "3YuzpActbJscpFsyLMwoobEZeZyJQzremcvrAM2c6KFudXk82giLMTdTD97hkZj9tABHFg8SNKhHWp2sFrGbprFS",
  "key24": "4tVWURQneZv5b1K1CxjcttcAfLJM4fNr1zMqFo6ECtmGPwSx93rYrkhPje4ptTK2Yso4GhmuLKQGAdjELaw5PG9Z",
  "key25": "4AUrtjW3Cuj9r2MWxJWKjWBpPfnwfL1MGtMXwcbtWmde3RyaZGA2bSB754jjWama1EFJmvE6j7NYKK7wZnvEpqg",
  "key26": "5rUbaPu6ree3hwVsG2Hax7hZRY8k57kKYhvtzKhHWJ6LkajRWChYTPSEzxecycq97fPi98xMCYVakMviSwa2dicD",
  "key27": "3Pz1ojY1bC9Lig4vXScvTmDj3XqTVRhNZoY6LdWNv33JKM7qv9mRPwCuaDwSfkwdsd1WaHMUJQgUykbVsgU9QE7W",
  "key28": "4BEvJUuTB5u4NguGpXrVhEgLPACTtygCNZW8V61XBEBBwvk4bNtF3jt6zAKaJ3dAZ4WyHQoXSJCKLaPCPJxJdStf",
  "key29": "LthfW2uQrEJ6n2KAVGtry9vViN6xpP8LiCufWFS5SaL5GCiE6L9au7Apj8Bcokmt8XKoxoFCWSxfwuEHZ5vsHma",
  "key30": "2jTkoaW9iZE865EUqrWVdA9efCqJsRYPkNSCwZBunuv6dZxu5Hsv6hhGYJf7ta8jntfyu8MQ8Ya28DRytZKrMr2v",
  "key31": "5S98DnwUeC93Uy8kJzPF5DcAkvEr37BSKNcPZuuWn316ob9SJGE8hbfXjgZied6cmLKo8i6FtpWATLfkuh95efU3",
  "key32": "5eZrHwAC7L3Cer9ndaQzjbkMBoWCNLR8XWFYENydvARvNJEyhFZ6pCRZ8HYVvJPLNd9DzUoLYWGYfieA8Hw8tYYX",
  "key33": "wTWNZEmJZfeBy97aW5iucnQhKtYihTSgkypmrPoG1J4BJLrMykMuDACqBe65iMrY23kMSzdPKL9DiTnKc367z39",
  "key34": "yZ5Wb3tVCsbJkwB2ZPoCAXECw53Tzvyu6vv51FxSbWBHX8TaB7yhqwY2ijRgNNbNudC83ydLKez3EtAYwEhQD67",
  "key35": "27kMg6UWpuaY9EXqjpudQbq23T7MwktgyQgfTbRSXK7wxY7qY41h7yiA93EBADXDhouD7Ra3oiL1aY8jfEQdNgEB",
  "key36": "5toh9jUA3LaWYJwBUNVVCLNC388sk4917xnKNnvbNX3ETVev2xbaLeGuQVY3QmMicrGXp4TmB1uwhQGMNHCHiJ5B"
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
