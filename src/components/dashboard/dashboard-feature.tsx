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
    "32RYQG13rUb5i5BxGUd4dUWFz7qgi15FdRFKVshXoZewc7GvwvYSfxJ1AaLHHtuaQmLBpsTnW48nnpFwyC1K4xTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HV5KQbpkD2vj7guM3bULHrU1iRFcR7SUrRxqaVKoLMncte6ExMboPaeE3N7x58QUvLqWS4Uok79o766G7frCuoa",
  "key1": "2RbQyqB7MtWeWjW1erFK7WebZLDeYZVsT6wkqB63enJCEpirC1fPcDNtEL1mk5Qz9vhWhrJsERUFGsKftyMSTpV2",
  "key2": "5Di8bWmC9s7nWNvoMmUKgRUvzYdkS9iz6GqCVxzRKVnMjYS21BVFhSeFLhVrgwtEGyS9SQYPcKnmaAta683L9e4f",
  "key3": "xcdbGk1xy2i15Nt1SdYxDJ7T8FFgXyAb5X92wd5HGE53B8ZgfBv2h2bn19H6BCSQ6kFjcAz9MZXeFMy8fJBuv1h",
  "key4": "3JXLKbgnoz9aWh2dmy7NLc5Qv7FPL7LzEAxCm5pHsHxJXwwhR4KcNQwv3SgSEoqhcGB7DoVuT5ur3x7BCzHNVNbj",
  "key5": "66SomhZYwmZA8gkqXmEkMJ1rFQK1wRXf4bgKbXeAqRxcbDVNaASNNh6r1bGm5VPUUzk4BsttBVAmYQnGEn4EGTqK",
  "key6": "322fpbucCUekdqao6DaARSdA6YyFcWoo9JFPPnSnffnp4xLMd1Gn6g4bgsjJJzLoUYKJzRoZiXwpRz79eeXzdAat",
  "key7": "3LqjnevWEtt6EAAbQh8SeoJ23sRczkWmETt3nYheQ8m4F5P8SNsxDA49i9SUbuBDfC3jHz1h9NLX3oMtDNYf33Ng",
  "key8": "3nQdUCMNvC5TnmmcTLY4ofP4duT7KNNoueD72zW2HMUDbf8ChTPM59py99ApH2suayxBYadzfbdWrFxAEUkZFgaH",
  "key9": "45J8QRSoKm6zYGKPgF98EPoVKUFahYRKDByqy8kuRqs18AiRpjWQEiBuwcGzmjFxF6ZLno4qW54VW56yNu2XC5JM",
  "key10": "3R4pMp5UEf4wrSYveknkJdTH1UVZFvLwBeqNd6N55L7Fh88dSzzFfuLerh7UEEVU8PM5XY36sLtiD1UGT7W73pWE",
  "key11": "hkTjEAVjq7nJVHesvNFbfgdtAjtJsHdi45Wp5BpRrXTTYrAn89Kf9nKndpvpYNdsrBCcaEAddpibDh6P1DttZc3",
  "key12": "3NdRcrfBTX8bnEazJ4R2WFzqfUdfpvcGW9FThcky1YzsU5pWUeBH2p2rHwhyATkhzFi5fW6PwQeRh91SE7m8S6hF",
  "key13": "uhmKDD4uCcBA5uSxeuC7bTQ1fq2zGooZLUk7iTPhLkD3nnyYqUzU9YqZ5ZqhLcojA7JQP8Z5MSSqLojpohs9q2D",
  "key14": "jWAmawmyftMxZfEZeTCLvr98fiW8bJ37iwHg6A7gHSjNXY78d5n53yEQXNY5swaMTTSeqrUVSuhzFoghwcYAc4z",
  "key15": "26mmUpUUPHwQUhDtFYZPALn6GsqeRU5QLfazGjsUactWts2aZDUcdsEUWiWBonhEnzXQNuBPixuBrbQgkjPmHwWx",
  "key16": "y6N4MVi5h3y3rKgzPidBAvu3RUZjfAcnUeJnN9gwYRXzkv36A7Hu28guG5kArBYWjTZAkBtJUYhLdV7Lpk4Mx2f",
  "key17": "4zbb4FfsKAU8HNM2m8eXueeUkoB72vNQktwF3tLNLpbKe8z5EnkZ3JzCv5JidpXGfhpJwhpkt37dqBK4PH87NPkD",
  "key18": "3U6FNjMovRpmuM1ugPdmbD1d5Zg6vE27r4e8GCcycrXDwuuu7Z43hdQY1EpDggkzZURPfmmHHZZnCiZBd9MuiAHR",
  "key19": "2nBSu81Hef8kxAhyvAMw1UQ61pxnYg9RvogYyYu5MwMNdCww2QtCAGmn6L9u5bkk7ZfE79mwmMk58AoGKcFZ4T5f",
  "key20": "2zKsDsy3Lw2JX44bJhcTHG3y2aEYRxPBTwFEPuQjToejbZGXifyFiqpZJogHbei6JZumeB1F5v5bfzCjf1PMpbjy",
  "key21": "eGizj5ba7gVjomPipHN5MWPPEzEc3nCSgi4WMUCe8WFeN88xcjsug4rUq2f1rBua6BVZDGA3n2ifQzu9r1SHGn9",
  "key22": "4yaGxj6qZ228fV9ErmM5DbeVykZT9kUfCfmHw5V52Kcpg5A5DHR79DWtscRxriqyfGYKfEVmpPVscqrbwKtD1EYw",
  "key23": "aCXaiecFRjcZCbK6yCUJc6T9rjVpsKzLmPsfmS7koZrvMLnUuR6txdPjyNtCQ35NFczWwkKH88Jr7a5aMkfpSvA",
  "key24": "5NNjNnbzbPcpfWDResECUY2NnNyVzvzdjASgtGrsqA4TnNsCFMEuhETx9CeF13zuppXWWqhnZGeU8bEY3JHcuNtr",
  "key25": "5S13Ze7LXamhUZ2z1YQg4gC6L3XFADfFaRRGxFEykgyQ6htd2mesMrVuXCbiNz1B44nruvJVnsRmQq4yfSv24Ezc",
  "key26": "5AqLwdUByRomQJ82qPuGJYkSi89jjwQLfiaFaCQQ19dRmnBgjU6WTLsNcyGSzsjX7PadqYbCZUj3jnSoVZtusuDq",
  "key27": "3QbucA1gYJ1WwReSHGBEjxVymfCe1wEFvE12oFPZE3u7sWDgb2331eN6QXQJ6G8dWAdQN9x9crGmPs8m2k3T7H7S",
  "key28": "38EcGA4p5RZG6Ks2ZrSqV2MkzzswLDUXyYKYq8hPpXKUUtuSo1pv7x4pxARrBL2ecjxStWS6nh7qeA4nY3mfpFRb",
  "key29": "2BoUZSovrVz6wXvyV3Gj6PhDa9koFBxiA3yg8W9oQm2Jh2WM6jThd2NnpyGB93uwYFjCnwXY5iKE77hGbF7AyTfb",
  "key30": "34nUcGMfFvSFzRKL36httJU13mbY83SBFmqiy6U1DBJzF3rHUWEgBzMYXzHyBfdU6hQFCJhNDz7wy8JizfcY4TWJ",
  "key31": "4sa3x7hV8oWAMHTewbSWev9yN7XUVvgYhq6m9n8juzyLveuyDFRPGmT1r1SYnQqBxH56gcwZnZrLsdDYR9c4oSRr",
  "key32": "342hhgFLnEFig4q37dKjm9sW1RfPEniW4CMoDPfgqctZxKXrmWGghN3CpazBdx44kWg5GWCjt1JxQEFajCknunjE",
  "key33": "hCB1ECYUTvBL99TP5PJFkszt7iHAtmzZASvcBmFbcx2Ygjvz6T52TZZrMdJU167SGuVpDFqEYm9uHeGy965kyrb",
  "key34": "2mYjEgpQUV76YkFHcXuE6dpewmUXr1VLN7tfWCnyRxNQMphXVUBsLgKEmw7RFn6wYtdZcsJQi2CsU7uTQdyD8yhF",
  "key35": "5MKDgtT39yDxv4VM5KhXFwYbrHxpVKEKTQvLqsS9boV72ija9oDRakTLZ5rZ5NhFTpPzzDod6tTwXWHQWpWywFmp"
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
