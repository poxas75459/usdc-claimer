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
    "415XPimBzhjx34WW39RRBamHMvk9dQxXVQ7k3UELP6saEDfP19oSmefoS3wGxHMSzjKBB5RMb8m8ySQiXf96akY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56mdzHqovkozAf2wQoxd5YWNYK3u25qurC3kcnTKPmKUDVfRoQQSaBnRfB9uL7THGtfWBANxdjhmZxnv7cmpRMQ6",
  "key1": "2KBiv5iqfr9j5mX5rWrKkA6xKnxJGz4RPnMgi4SJqfnQ3ZUAUxoH39FZzcXUndEJifmKkwH7eFwk8bvQnEqr4VRM",
  "key2": "5sDFxFEm4rnZYWukv8yJoeWiCCruwVxAtxDWeucpb6iU2oeiUwnxccwvFWeD5pGgyWeokZ3RbjdPgKSpuNNGiAk2",
  "key3": "dmvHpZMTKNWYd831wn3JzbnuhLrNQQjQ5XrobPqdA4FYvhB4MEaqTLPnhhWhnCJ5JT7g14eMozX338smUDy1EzM",
  "key4": "5PTkCJzuGnVpzjccGJUuBH8imPbZguG75Pt5p9aGZkWmGXZn6eqr9iUkyEKHiSexNg7EXKK2jKJjijuRzDUtkbnj",
  "key5": "3kuZWa5fKmWtaGhLSCwhRC1GRePswg1UcXBxj2MWKjFYf8Kvo2eDZu86QBj3Zm6KdD5LZrDDZhwGkb5moCcrYLEC",
  "key6": "2sNE2VdfUtjjMcJQeraRh3y7K37NKppo2mh4M3XbnftKAYWBKLLcQhxCfDVvaDmA2KmQsyEQkUE3vUzbtRhRBfJU",
  "key7": "VjStGshCsWncyHJpjPncZiwQZ5CBw79it4HycMK1XVXFik1cTZA3uiRMMvqYuzneEEVY5UXKFFmQ8yqVixJdKGf",
  "key8": "mDXMkKeAKc21QMkMnemSFzZoyW34zniohD1Jj9tM6AunuWspPuMR5WQNBFWjaPiQVj1ZEGoGzoRxQZLbU4gM3BG",
  "key9": "4HgdhgbannzNmahFT21AVog2NFdhK9mjVhXyuQDkTkHf6kjaXXBN4jdtj5JvmYgDBz5WgH7x9aLJymr4kYa9vhGZ",
  "key10": "2QuHudM3th3zfCSCeGvyX9xuJqsWLdWGdFLPT7X1QMuKR2CJxpLCU2UTDmF8xGZnfRsTo95KdqSBjxmgdi2C7W5D",
  "key11": "2S6fU5EmRDuJ191qzm4CrFWzADtj2h641kbJSBJx1vT7fgB78XCjw4MBuFQoe36ZxMdSoFVi5dM4Lo19VCRCRtEJ",
  "key12": "4V21tncpqYAnsqQjKtqRDvJsv52YGWFBCLRP7CzDKP8ygDKpeAYLqT9EQJSuTWHPMbtAZRodTfQSgGkkymw53VCM",
  "key13": "3AkQTxL7nueRuUy7noYzr6XApN8eo8pCb8DJGXHnbnpjp8Y9S9KZ1UhdBzR8TihNzpJes6YKyy8fVpRUzxCSen1y",
  "key14": "JpYP6uAr5T7oi6DGT6GDshhnWf2vuFX7Zx6PsPt6ggQNQiQbMZX4gBim5hHnyCKugxT6DBqFVoaJBGXU9jdw4jN",
  "key15": "24mDtZPVnAgqgfLFJuxuxYoF9ChXrkJrCgQWYLAYeDg91oBXY8A34LjYXAC7L7Yny9aKMAitd6twRh4pG3XpvAaX",
  "key16": "4QT9DbnpFLhnnpTET3Cad4QvrJS4DtpJx5Ch49S1fCDBpzvji5ccPg7XX3mNUGYTiHZFXCUNScPSKG7GfrWHXPKJ",
  "key17": "Kt2ExyUfCixztnPxuDWQNwjGzSgaXi5HHh6jpyfhkXkNAQW1DKJ2vA6JSbGyAFN3uqNT1XrYMga4kdzm3ewcdPs",
  "key18": "2hMJWiBZwP47S27F1gMq2xQF7xzH9CNqh7ahfG98vZvBcuS1VK21CJL5vu1dC4scqahDN5gorXqn15PZZ1vJjYJx",
  "key19": "nySchHJJpyLwu1iWmZgjngKoZzoUiXHGju7WcJCQty31wDCx6gE14A66SQKmbb88XToscGuYxqXUhmMkAE6RdSM",
  "key20": "252s28XT5C46eP7fnmUjCANMuby2znfHVPByWjCBuUF4SpXbnuVvL8TnyybvkxNEZo6tGuieGJqi4QGXC4vuWZJ6",
  "key21": "35cSgiiBB3tSVFnAwPTEW6yQ2Gb2wiH459q8ifAj6WWReZvjnwvXLsbwQoBAw8RgNZM2P7s3TEgqj7vQ5NLgqRq5",
  "key22": "4Ferk7CwdzwRN3CC2tdA7tKnaAZdZuU9XSR4VhGaN3iKFvBhQyJemNz11DKymjzeBKajmqrNryXba3zH6V4AHams",
  "key23": "wex9nUf9JMv5KVKBzJDYbf9ayjBx4kDEtr4Mp4kvaqpisLx39hpbyqvowuVGVPT8mbQjjvbrfR9QkUgqKDefyDF",
  "key24": "rfPecLVSDtDMrbXFcG39K8DwXam4eTdr4fJXfueexxX4k4AxVLsDTrwLGqjsERTueHXtiM5YRYba1kFuKyqwK2Z",
  "key25": "477yjvct9vTNSBxKF8BnE8TFdPzaP6xaNDSCvNhJiRvTuKdqrgZapj4pWtTT6PEcxmKVSEjTt2pBYdgMhuGRCPCB",
  "key26": "3KmG6V3FU8g2Tx8jbWWfjwTXcEu2jSxMQZe7kV5R5Av9pz8nHrkLBjFoZwfxN5yCfkeUR3qy5YsvP7eaUTYWVsfq",
  "key27": "412PyR7w2u1L5PuopTXFpRpRZMrr9hrET36xeHQWxqVMSpVp8vTfqkqKBWiVWjXm6h2Gn1UdzoU7dnmAUy5sPYi6",
  "key28": "4aNgS7D9K24tNotkkUjPf9xiSFtYjUjaVJsGseY7CrDyGsQD7JaZnKMWKk8LnspKfTRUV6KGvRTaoSq4o8hC9exY",
  "key29": "2aPenKiQZLFHgBSQShqmtArLjx2XaUJ2EML6AcMmWsQQoYv2QCYQLWTmk8Lf1QL98UyDDi5hhzehqk9ZGjJBtGmN",
  "key30": "3TNdS3Yp8x2B3gak8JmQH8i2eBaBDpu2ivpanS84j39ETZCTBkBcUtAELV5rjbjMmRJ3e6miTjFiqvWmHtTzq53e",
  "key31": "5h1kJ32972reuJ4HJaY1G698aJ8DjQJZVuXzDryFPQ7u7wtyrSDCcuPMQ6CxKLiK5i6Qdbte2Xaaah2dWmmfn7rc",
  "key32": "5wg2a5D2J6RFkKnmpJcoADm5gM5kLFGMGNgS7crD7vec4s6Gt9EQUFUTgJS9SmYwytYD6rgryisE6jPUMrMNhzd3",
  "key33": "4xmY42MudNp4iKtcLrHsYTtC6MnRggwaDAKFbVf6ABZhn3by6QB4D32sSmKfH3b1wbkSDMboxctMaX4b34NNM7TX",
  "key34": "3tuDXJ7Ec3hdXmCv2L8nHHoxDTPiFAkbWXRCTdTfczqfFXcbKdfjGQLWsfARieQq3aLZDntfRfgsPNFaV72AfVLY",
  "key35": "2JZAiBGNCurn6wrUvhB3DbLBx9VwqyeqbMSMfEj6F8bmZa4ohhqU1JmjfBCSXRPyw7tfBfp87vmKPBWSFx4udkBQ",
  "key36": "o163QTiBx3pBscmwYkwXy14tSoKW7u6WVRawymg41DX2wMpaqWpQhcoLqUUozV3PbvdzYqs1wboaCDWJSEf2G9k",
  "key37": "KgEccpJX6pxBNzJ4C7CW2cwbyo56DVADxPgE3uQAvUB4Vh7nbfX8t2yzvpViPywc4Po3MSwKebmmm5UU4EXWvBu",
  "key38": "41d62bSC5vfEjgvuVPgYG73vFeyxCGP8VBBL5jAt2zibqDZN8AnzgKHP5C7sU3GmsjLPpgCx8mcga4bH2qF5wVgC",
  "key39": "2cNp6Cc9FnvHxUuNVqf7mHRVZoJJ9LyBSxSCgbwn58jTvnNH4TWFgzJwfbTqTi1JF5KiMFcnrFh7umjjkSM9vLbn",
  "key40": "2LDFT28kmEtNqUQo6GVkM4hUR9FUEs48o5op5szG7ksFUbG3x6yGTKBQoQKzkknkmgMmu572ySqWY5bUzExEY5yt",
  "key41": "4ctq6XCa1giMwbKgEL9nHVqD7kgi156v56tWHNc7ZW6WyfvozhdkzEshjYqEUyPgibaqQ1vELCK72nN7y1aXXcEx",
  "key42": "3Po6jEyTVib4YjtSQRkpkXUJZLZUm8UykcqzdzW3K6UKpn9EkKNxUby7cTuofTW9GEyRorjDHQwkS92Av3eEz4sN",
  "key43": "524bkkhWLStEsDbMFynbjvu9KqwEAYvwGcusYjvV4yR7jH77JkUVDQbdgGnpnMGCb8e7rz14UDQK4TSL1mZrHuAH"
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
