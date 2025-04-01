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
    "3spC3A9tjNfmiQD3tRg6HtCxbE8TuvXMgtqVJzP6AsH3VneQhDfcEHa4i3JSdMQaMQiFqxFYdjxtjuwThWC4Xqav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NAU4ZZNdGGMv1LAvRbqo5xw9NpCGeeosD52MMMaozJZdrUitDFqPoFMJEJJ5F7JFYTx96Yg2uUxX4X4W9Kuo9CA",
  "key1": "4Yu5qEU5pe7tweFKcZkARtdHdt5Q4yBcr4VvUUg49c1188JFGXbZB7Bvz2WhbQitLpDxF5epei1G5SVZB4YuAyi1",
  "key2": "Nv1n4gTxnzrgKpAdsSvK8jLp3X14yNwFdKNEJoqMVcRBzGb5zQXHokUin6XGaHg2dFvrKJbCSoM3RhvdHc5HPFM",
  "key3": "2QHjCvpSaLrfZyYb1WQwcaQt74KmPxN65U5ECEv1qG7dMXXWW5DdHVsoczbvAUv9o5ZXCmWKjfnR3ywT6QHwWwWo",
  "key4": "2NhsksQRJkqs8rPkhPFkKZppPVeQVAzvYQgYJwqfAVJrUUK5ErAUYQ1TXEiPmX146fQrGnMEgUmYsv3EtHf7Wuz8",
  "key5": "2qgkJvQ9WNQQbHcUAjs26b27fCfKgGTZPZv1MUA19KaMkjHG1eLeFXyeVU8vU54P6QHLC2EzF1oeJqSkQUffxMSD",
  "key6": "3szVxTYoKc3Gyo5fbAmGuXKnQLSoU9iJDLSBY8VizqVsNDe43xWXvVLCq99xzAExhx8TssneLRcKqbAEHtvi1ADg",
  "key7": "1KvvHfp8pS1Wqkj6vvU8Rw1ihEUjtpmgrTkRu9UBzTgm72pd7N5yPHPoGCVzNAyd2gkvnnpKyfjMpwfbv4dPusz",
  "key8": "29wr7hbFe1rDbPyYVmt8fFujjtnhUW2wkvrLviDr4PE1mP4b97aCLeSBDAqurtg2b4rcRsfzbhx3f6dzdArowY9S",
  "key9": "23cM76QUwgX8fpJH7zCCKHchXXTY1ZP2ho6KfpL4FWsRcAuxXUNryDNdBXJSk5ZHR9NM6dVem6KmqdaGBCCVrEkq",
  "key10": "43LkChT66NCKXCg5PfuVGPmUm8qWy1jo2uN7t2KPzxqacof9Yamx7SBQ76GgACD2HdFBee5T9n19aAx7N6TAdbQ9",
  "key11": "4dbgk5WeT8uz5frDtYcUbkhfAzxm29iDYojBee1vor7WVwzFVgWt5M9T5QVnEKZUNVpy49Xt5JaYtSfHUCjHgdNX",
  "key12": "GXCyL1xxqoJuQKxfe23nBgzZxTV8hNqdUQpcoHzTWg7fCSUBQ1QYStv2HLaqANHA5mnQKgP8zatrPPKCSV3zKk4",
  "key13": "E7pH3AZvJyiEWyVXR5fmwvUzCpLvxmveUT2vw2dweVVbfFqtqR5bH23LExAqLhwTy27m1ot8Gfd8hL3agAYL9gZ",
  "key14": "5s7cbz9J9NKVL7zoMpiKDofqeemPANgx2cLEGFmzGmnm2zNNecfW3KVUJMQ5LRrhJmArXNhRLDkGGahkjXdrERaQ",
  "key15": "NRa5dfFbwbk2GgQzRtoAWQ91wigUPpa8bCAZwJoGzjoevftn4FC24Fqo54mHPpEmJFXFuf5b2rytoqVmPTkxwfN",
  "key16": "5oQauYYL1zqdw9fT9Q7Fg2whjnJ9XzKJtsuDGJ7ANq9t8aLWPoFsSKenBBAt9c43KV4GCUG1c1tXbm2FC6qg4LQS",
  "key17": "2S3JKuKtGkcHjhkTMcT1VrWaPGpke7FJ36UiaTBf5ELRZQdLgHnKZpqiNUHKdZDqPozq89D23sM6xgJhfSZjobZ4",
  "key18": "4TVuzawWgg3sdAyrN4dMWVurdpgG9eX1qUkNgweVSkE6qYU8t3og5ao3W7CJh9Ddmr9bsmCjQzQzCjSciacVPM45",
  "key19": "4JE8bMGE7hZJv1UjAuhCPFeMHQbFD7aTANKgUcMBGRrWyU7GCagUvUdx8SboEovwUsjY9Z5rAEjzNDEboPWWoPtD",
  "key20": "61L1x8s1UsoW7ALGM3NnC3BPN6PrPAR1WKW6ktqQGUSdxLLfdkCgTTEjsLrn6ThKNAqxHh5Xsi4WcDjVG8cARYeS",
  "key21": "42rHrR6L7ojN2TdXDpAzpw8HsPF299wsoqKxVVJtCUXd8RC4PLmUPmJfe4X7EnWKD9J4Du8qabS3jzppoL2X8FZ9",
  "key22": "5ZmLxdvRgi8a3vnzL6pxRR3wu9JZTwsKAgpZMbknPf1dnRFQE7BhhpnzRxZ6dKbodNdZBR9N9aEbydHsHTF5nt9i",
  "key23": "2kCJRsomJhRQv4hHP1CiJizcxe7yG42PZHhxButiP81H7YEAKUn5gMhfDze6skH1pU57utw79gk9CZadwZjtAFwE",
  "key24": "5r21G9x4PQ2rJ2mPM2M29ge1Q2Y7tuNjaoKfCbNsq88wMdyYhtJrXRjNg6jur5B67Y7SJKjBQi77cjtEGDox3wdv",
  "key25": "4ts3YLdVXNQDabZN1wZNcTJ3q4vWYXUHQF7uj56SkSmJrzNtKHD7m7HPrBBLXJ9pJd9R6RDT6jT58qwmp4fwjdz9",
  "key26": "z1dfwviwHGFxpoQ4xFtUNQhheFR4kNzX2LZEiwq4x13DHCnkhNV9DtUZLxbMdW7Cn5DcnCpUrScX64qowE1jMDd",
  "key27": "uPaqTmVCQdyKXkediGkEtT6r2mnEAbbJrFBJ2U6Q9Mc2FSVqiRNQkVW3jbcDu9m76g88bxnjDSRGS3yERfJ5pAe",
  "key28": "AbusUAg4UgTwvxL7N2aeqP8gvKbwmgfNfAYUqwhMQMkZKyRdV5PB8iSqad7pPRxs9kwbBpSiZpZ2KnSBRWjP62P",
  "key29": "2JQAmzLLMJY5YStcoGiHj4SdpRghbX4Aamdunut265ngeV7qxj5JDwby62bCXnJprG2NLGvetREUHtStsjRz9bNr",
  "key30": "5ZWKo6g6DD2yYCc161bd6Cw87Fcq6Fjkt31nTZ3o2SR9iwEp7MtzYBsGSnbfEkjuVhfgDm9SpR7iYbiHZjbn71Ma",
  "key31": "4NHphiMSyfX3QE6BRN4uiWaWNPS8Ryzk71M12kBTi4xyKV819h2rtvTvjzpQHbagViqbkv3GWvQjD9uzz4oYtKDS",
  "key32": "3ZhQ1Rctwpx1J8AFM5d4zKJY4utHAGp212vNMLWeWdFGxdDWq4Mg8ocGXqVqYLN9pCsghqGTFR3chNdP21vh1YTF",
  "key33": "4EvxyfJySd9RUJLuSGP5mbZU5kh7bPpHw1hchg466KicHLPHYszXSXPLhHFsbVFZ9BisY6ZwYsCPsGtmJCPZGnSu",
  "key34": "j6UuFMeEhK9Wwy8E27i47e3kvH56DtJXYYfEMNKLwVoDG6UYA37JubUdEQx2RHk4qJpCCGPiKcZKqXa45gXQob2",
  "key35": "36qfq1m1r3PKKMBNNipEccTAtRkdLehoGnL4GuMyhkYnNvJfC61zxDDgtSRsjr8C5kmkkGb1qGZLsbmQ3nyEe7oa",
  "key36": "4JQyF4RsSBSAsM9TA6tYmxUFCaG9mmC7RGUayBj5NgR9PsMymm593PzpCcVdD8jPMZUAyLkr4yciHPy7ceafrxfA",
  "key37": "2EQpKKEBwbVf3WptMNU3skyQjdAQwmrkkzE6zhZM18ZTM1RpCGBj7H8ritVTjeQcz1hLSAM4jYhUcrX4Ay3ASmuU",
  "key38": "4Ts3Pi8DrrqfUfB4RJQaXpRs2WvKahFNDDRgd7ZSTdo2SV1C8L7hsPkuLYzKRaCCtWYEmA14KSMc64CA4wLELcNu",
  "key39": "dc32fxvP3uhmG9PTjEGpomf8ycrC1ygwsaRZynX6d2j6uiK9cNEwTp5HAVP9PTUPiQQKZ916qjBomBDXQwCY85o",
  "key40": "3ZAwQkq1o6BuUC9R2vXtvc3Fg4zvhCpTRH7wHqNWKxfkx13mixbkdo5ZTkU22NLYHwJqnMBSKn53aztheVAurA5j",
  "key41": "3PNWG6A9RNyhTPebXCBBRBb3FLuMcujVYdiQsxMjU3Jdom1TBNJXYWwBczb7mskhnSqBEYABVqjKJ9wiDXf83rVF",
  "key42": "66PGgCc16tpzeMLScsU72q87Eon6mujCakyXrKpog8goe8RFcr9EmBqH5qqbXorwpaKoKf6uL3XnDtsfzQFMd4PZ",
  "key43": "2EGUUW7AFSKeXVS9AXqeDWiRvspiJ33bNQ5wRWa9rwKPrt4GAEnW3e2BcJJsJEviHEofM9j4umubieSUSy5HJnrZ",
  "key44": "3dp9h6MET6Bm4EFoqLKsrXr9wp3iAHRrodoSwoahVh2RHuYwAmZdaLiBp4YUKCtCvq7Mz1YWeWeaWujzrF924mro",
  "key45": "39WJdsNyYzqv6Y7UgA6obrWEBwRdVgHDqDEsKysnpotjzJ1WwbN2Ej2JHjdgaWozVFve5hj1t2bFNQbSuvrKYTRx"
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
