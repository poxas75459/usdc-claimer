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
    "iYEqKAwGizaYu6yq75391PfXXEsV7ikpo5YVcFKgBuMEBDQFjjZ2soHxbPwDd9FXG4hzBvZSR6KZF8nrBrncNau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4km5uCbrSs38qjyGwzYu5mCDiN7pS3iCUeR3ns8VZLmoVYevsdUExEpjSW3c2fEWDcFrx6WpmnaUTZWDXrg7jUCC",
  "key1": "4nMouJcoA74meG3odo1N1upvWc7HVTKKqdk9b9A1KxbdxdHVgpV95Z7fVPwqJcTJpSAdZD9YtKacboByvogUhePm",
  "key2": "3KyYYdkdscKdYrwM6WwuHSWphQuaeGACkN1G6tBy7Hz52HpVaAa4Su9UBhBPhNeohNnCiiMaFEwifyaHKFR4KoMZ",
  "key3": "5oNDNEU9773D4CNHwUoXh56j8x7gAXA1V8rzH75Hu6pQ59vFEyjkqLFcf88pRGWfSBUtQqD2jAUtayPDmWDuYT6F",
  "key4": "2imYLsu3ENdzK15ETNzHYNgu2h4YvuRhVzmSvGmFNCayie8oRSqAbkGNvHAc7DNPyAtU1C92CQCJPpBsBE91Nm8o",
  "key5": "61L5Euqri6oGL3xYmrMEYGgc4SgPC1PKiy8Vea2DGk4sRvKzdcDLjF8qnyFLJMNnrbXJgaw9oBWy9dkJrCcxvYCH",
  "key6": "bNu95qvb99juRNVW7ZSRZWx39qBMQHAF9AWq3J24ZeSvdRFh1upaT7C3JRoXjTk8tr4U6viSezofgYjgwHCLkZr",
  "key7": "3SG4svPLdPzZTjXmkx1Nq5QwhB4G7cSZXm2Fy1WhFokZ2NYnW4PiQcVaqvBVCdS8AQ5HEbWAoCQgpTgUJZJg8Gvz",
  "key8": "3wUsRPsguGUUQCKAa7LvPymRyJu4x2iEisuZz7Mm7DsygZKp9K7QhXsuugNHeJQsWvfAG1iZihSwyTVLWZB7JLzu",
  "key9": "2z7Fd22HURaRssVmdXzd7UVjUwZD3N5Uq59U2ELRaXSLAkMCQQysQR62wv1NQzwk9zt6pk3LZimgZtC83LG8QQSz",
  "key10": "2kSwETTVX3oZG2LZqbzrns8379VMU7HBFtU2Ta1h4vTbJegGxCuZmsA7fLkMfYDbjhn4hwPLuFZLg4FFXJqZoK6N",
  "key11": "scpnQMcTNC7qmvNgKqoTbgSDLTebpwto1QBz8rz4PFRG5W3d1nfYBHnbbjC5yyg7iqF7vJ6F7Vm9UEmUrJgjt6F",
  "key12": "RaVZvpMGYMbeharnCg9fNTzorukYJHFZMdjTDCJ1B6KyirHp9T1icGxZr5JyFdYyLCvC692EWPmD9N7MpbPhuvj",
  "key13": "5onKxg517f79sBJRvdDc1F4t6VS1xnPsBuoGeENWGXufjF3jXZGEMF4984zZ6PrnVUoaGJrorYonndWENz8a6m96",
  "key14": "2b8ix7g5aU3aw7xGSQWBQrSbrxruA75WjdDx14ZZm26vSaQRe5UeC6w9AT7QWmzf47w5N1bPw22tsoNUSJQpVJdc",
  "key15": "4dE8sCKJk3g2259GGqnB3qXrGHNGkLTrRRe9aFwn2UPhj1XRUoS3zYpgmvg75ZkjPQvLcn4qp1UG4o6YBzze3amE",
  "key16": "2WJVefAVgWesN5EFfaESzG6pWQoDW4wo1nwW1Pr3mF2zaNs81KgVUa4uP6MYPHtkKMxyCi3yRWokC2WtuDQxByQZ",
  "key17": "49bQzxy1SarJZyNXDrLd3NQFP5BhLLSbUD4u7Qmb4xukSVJBPcyEFTjnTRdXrhs8RF6FvCZssQADCa4Wz2KpeiDd",
  "key18": "46p1np7upsxaEZo3vgJMkKxjJffEvhsFWGmGP52P2wDu2ThDymfpSATjGN6zMfiTYQKakqZud1LpNsS5maNsWqiA",
  "key19": "LNJhL5abQ5bSbfLe9KsAtD4Ww6D2ih1wD5oByH4qm3SEatdbeJSSZeKjkZ19vwYbjNRmzWKLhwG62sZQpaWfkpH",
  "key20": "3nhrfHU4sAFP3r5Rtv2q9aY5AZz2WRMs7B1ULicbdGRffbGv9EmUZYbtLBRw6hxPpphEoyAvqDcghfkenhKuwGCV",
  "key21": "3ocTqPt9mwLwgEMAyBNGuPVE6zgJ6UEiPcibCVHGmYBAsr17BYfj63Ex1ssMidCEYskciewQNj6NZMXqUqyg5sBP",
  "key22": "2iLWAbFAd88tDgTBxRxswsWikf5aYtsa6a7MXvNQaMou9NPWseSbiWVj272NcRttBNBEVrrFWi34A74BDTH6wNoL",
  "key23": "TH827kTMhiHL8dP3GGxCYHfLHd8cyrv6Q3VqKgMAv7LX9jC4MFydMdDZgqmKJAgYUqJ6ju7X6qKtG8vBy7KLRSD",
  "key24": "5YVWSgD9Uktw7yFP87UUFucoQXdm1Uj7UeMjJ3c9uHQ2VkF7adFEQ2yPwMuL3cyUagTD5F2bV7iMDsE6NaTmhPdh",
  "key25": "DzFQuFuGMBNqEHk1z19yACzhn6JonJN7122CckKQ2NrzemKoVs2aSwv4cc3PtYN9yzsL3qgXJkHuhcncRMfAmtC",
  "key26": "4UKSxMy24JjypVo1NFW1cMMU7GfvCoRgyZez5dDtn3BjsZLNxjxvymtPrsrLTiBwx3Y5dRE2SQpp2dE5RhJb8aaG",
  "key27": "29uvuTkJLYErYGWqwntkBM2rs3xfp7Eyy1WnEXztBAoaUSTzkvKtQFCGXDRWS4f2DtANb1oa3LmwCwr5FvYNxCg6",
  "key28": "FFidAsBKGZ4ujRGzijjfqMCPhbkvD9QacMPD7M9K7P4VkwRiH3mM4PmQVDbT2vFpQrTYJXmAUKwbEVE3gtkpcSP",
  "key29": "4W4Nh5pb5sRjk6UaqaH4wn4oGpoFDup5Z1uiCKTCudQawieipgG4szEe9ZhxtGG4g1czVrgQJnEkybSpVwXL527x",
  "key30": "v8d8WewpJeCCv1JfgaCJUktbi2Yq8WVuLayYEYdz2wkawKiPKyfWaDvYsQuB6prxGpVY4iesQD8EHxhtyEfEHp9",
  "key31": "5mBW9b5oRouGuLCowrQdEK6wtJZxGYKXMdxoSKFzsVMSH8mbVSzcpMRawLHRJenBXBFcSAyVRL6vFVboCU2KJ722",
  "key32": "49VsBA4MG1rChxJW7FSupNVQqLheZaYcsxh4RAJ4iuVHUg5ogEEDaRDHB6dQY7haujps4iwPZuMmcwQUkEecrVab",
  "key33": "2fscfZUW1wrUQup1WLMiSf1VvBNnmgryWsuaHYT4zm1FvHhZjjVJhAaNFvqHCCbxv8KWcKU9KC9KBpY5NLaPzsbr"
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
