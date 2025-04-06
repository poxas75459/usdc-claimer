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
    "bdUiNvbmUuxhsYyvh5NLpxDHSNKCpntqGF3zEnTmpN3WfGmdHvmucu6vyauB9c4wrKbX5dRiChe3Rv9QzYs7diK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1A49Lj2PGAtn3wutzMkUefMLzrwWDbH9YEomy2Z5UxDssFH1UfUnzuJhaAb5Cdoo3e7gSXbVj5cLdicTyKeeeb",
  "key1": "3GGXVrKJ1EwmmFabrqLHyRaEr6hsSG8NKFDT6nd1Jjfuxtr7ZxCTtzm7wPKJtpwRZnLiYfmJ3zYSRJVfKVo3sbM6",
  "key2": "2dukpLkeyYijcrdJdAjwSa1sy2o2QffbD1c7mM3ccwZ2n16F3MwiWKYG8nLuogEorhJ9SAwZaNoVJwPh9aZpShZF",
  "key3": "3cfZw16uQf3C5FJHhajz7KZ9i9XYGZaerEHGhew619XXwDTN9iemBEAQcYC7DnhnzTqvFXwnQHyRXGV97PR4EcFG",
  "key4": "2zrHnEEwFE5EWrChz3UtfzSbHtGZMKX7m4Sq4HQu7bAY1BX787DRxZvX1qL3TmrUZZp8wTShSteBxR73kK1AWHff",
  "key5": "RRk3ntvhUc3kHqfiBep7UYmqtRQgQmrhaDtvgqrEX2acnYW6aKgxdCkUVbVUMQSrFAy433D4wUEE6JoFRmuCPxj",
  "key6": "5jMtU3jjKPgxNPZK9Gq7Y2Zouywmy1UDLjViBZYbA9nLcwduJpzyKmVrFJX1nbqfAzraxH9FAB38HK62SvYAnRMb",
  "key7": "bapgfTGZGURXiJzrKW2FbztarwqStb9AtY9S2ExCfNQN9w6BYHXZTuQA7ivmEqBzouvVXSdEkJKSXbbg7xSYkGJ",
  "key8": "4ZuhwA4Ukg8buDtGp4YYMNA9ZxvYemeGeaUsNNEG3VCynZqBPugHThUuoBetR4XqThCW6rtinsFJSPdj92WDCT3D",
  "key9": "2fSMAuzzEybfGJpVNJbMCwN5ceL8WeamJ6zVU7p2iy5nh8aEmWhw2QgsyNGafodWxtqzDvgCErNmSTncgYtGZFuG",
  "key10": "5XqVDbHuS81za9Z5L91unz2QwZWRK3Sz6AjuhbkzyXk3BWWeXWmxhabHziXcmDKuThXKBFBAULfcoL5bBZVahy4o",
  "key11": "5QWp7YtvyJc8RmqAmBDPM52vr94cDbWFbSEb4nZfTgTSsYPhsKpMceH8p6XZfY97fu3cFRCPSGWybsaYsPjywJyd",
  "key12": "59pXYSfvSqxCMgTbhzPgHMpCPwh1s96F5CfQW7jnz8yDRcfpz5Te4ynYVj9spk6n3v5nyqXBntLaYaeuS1eoK1jQ",
  "key13": "5kAydgp3FCVFmnGts2Z8yTzhhzDSK6969xtBDXTXKeismiJmN9bPCMGrJCgDNwi7G3uzHAtebfKtoKL5Q4q9kdRP",
  "key14": "338K7N2mVvexyyjNVDj34dDtEwFgD8VF6UZqi2mmo3Zx1KiSvMxwoQwS2wrmra7oTVEx62yUkezfiAt9s5S2n8KL",
  "key15": "2mHfxrQkKjBQHAu5bFBTUofdWm4CZwtwYUSqTt3nGWLJggzxRgPSQ6TQc9XdXci2utQTCQnsFPoXV4TV6D62gCCq",
  "key16": "fXNJdMgURzWz6zCFZv15jXt8jETY7Ake4KuzExTfDY9EFeD5GhTpB4E5dCJMgNaSGA1uKk5jHVtgFjouhPrhKyw",
  "key17": "4W5YbBm25FJPSskNEMuE7xcsAnvZeyCjAcjfM8b9X4aY5pWEiHCXHEEVYfgy9T773bgyNMtNX1Xje4gvzYPrSAa4",
  "key18": "4EorxMciRy4jtLpb8ePnPZUXT8Ss4WxgoCukjhWYPkLhhq5Bu7eAH361VL7zYgcPyKuf8n3LgowfvXfeWUKQ654L",
  "key19": "59WznoiRiwH4TrCfPYkj8tKThxQpCFFrPgZAcGc7gSiqhi9rxsM7c1vZLhvTxtgbHjeAnrM2n8ecFvd75eQEYLjt",
  "key20": "4tp7jxVhucGvV8aZZJfGCA8SqMPTVSwf8bXKNNKiZndgm4AK38fyHvCjvGk9eRrYoPLFSPjLBjy4jWhcWKwVcT7d",
  "key21": "657paASkkZL7qhELzTXi1xXJ7b3mUzdLz5kEoL4PiiJH7PWhrvHR8YZgEJDywTE5NCYWD3wQvd2cyPcPF69v1idu",
  "key22": "b1wGEsqNQ11Bo8YFwwsv2uduZtm9QWuiqXafs564JvThJREmWC8rstbhqkEyeWJXSnMSDcNEWBDVUfmGbw16M7q",
  "key23": "2DutrafVHMqQLCru51YivGeHWcqsKS8kizDVPjuMmHeBRDGkTFeJzexrYS6KtdEdSqPFqFnLu61BUaGktjzYQF6a",
  "key24": "2MJt9WGraj4FUFq5Pc7pNFdLoNwswwcMsNA7M5epnoUjPysbCD4AFm5Sp5ArcHfK35RwaXgZKXu8h5N2bTs156TY",
  "key25": "3PqkBewCVzeMcRBNjee3qWLraz1TWgxt9UY7Zf5GgU6SkmLBzfanMMfoivrbGzqgqDrHwZ9jrQPwNm1VesiYTgaB",
  "key26": "3ZQeU9AxPBHjbgVzyDsv6C54QSKRBZdJaz4suuyw8voF9pupPVCfyr6xfrXpgA4ReQaR1uSsWF7psTfxNzzUhnhv",
  "key27": "77xzXVQ4MycnrwdR6TRFdDSxrpjMk2Xm23iyaSWmhh49gv3iYpEcRhCdeM3K4mqduCDaLngqraa2PY2NDggbNQ7",
  "key28": "3zJ2VZ8AysMWb4SiVV4tiQ3JDjsXmqzDxGXfkvcNwJeVCphwmFs4rPpPi7Dt4fHpPWRcDUjGeNXhJ1TPtrXtoxoE",
  "key29": "2D2yiSBh479k9wv2iPAVyzkeyrASYf9eeF6WeHujm2Y8C2kppgQSHG8LeWsACxVVRtN3nQqo6GonkbVnJKx8mvnH",
  "key30": "2M2Ut9VLQgBHJAnFveTn9BZ2fiqjxUfbxYzeKg5GSAamjydWS45oWgmxRwTBVRJxzKLPq7g7jELbyqrf8yh1pvZ2",
  "key31": "2KwRYfcaakQa3qHXiuvV4VidbuVDgMHdLHVcR1zSjQZo22nrciDMTfkFwNDUcvSoZiwB9WqSVnAgKKwbJRysjBoc",
  "key32": "a8frTbM645SB6HbDsujh4JKCqNJFSB8gL43SLvTvzqpqExC4AuyzyAcje88GBrSxpxF3yewNUn1nGfhvcwX8SdD",
  "key33": "4ToxakxzdpvzmuhMLvUjXFE2s9UV2fS7dKLaawtSkMwqWdrVXM21T3awyM9z6yC22hTrmokRJSk7eKHtSksf94ab",
  "key34": "92YNEVvMEcftkp8RHDLkQVp6Ceq8q6eFyBgZdZXneYHTZGRPaNPVS1SRH3jmf2pYtaRqLLkz7XYv97Yden8kfK2",
  "key35": "4RXX7KcAzMWBd8faEdUaFC61oFQhKSmYNU7hAvQEYmp42bgbe9Y3Ntf2YquJtFw2o3cEKj3qoRmuSpi3Sgb7dcsk",
  "key36": "4qXc3kvBhpgwydSgES1DiaXLiCPXv8HjGtjh2g3C43m5T7YRkrDfamfqezRio6p8RCftshprdVCH81keyi7a7kRt",
  "key37": "4UMrBUK7HESJXspU4b29MjPd2yZZcY4yAaJsnqgZrkeAQ344gqqjmh5ao2on1iof42jyofsyEdEDZGi2gXm8qQju",
  "key38": "UQU9bUCFeorQLUYpsyvcADDxhcKy7qrecbDmnPP4LSPGmLfMjg1Q8LGGd16Q2NnXSVeEDHMpVpYTPvkeuu1BqW6",
  "key39": "238L2HvFndFj7uLZFaJETjpPRcdwXua28fwnktYVUdQdSagvYQjWzKFiJJavF1WKa4u3LegaetcSKCaaU5esyAdz",
  "key40": "2o4SjWkiFzxhki1B18WGax9TkESWdeLUL3zTC25Xh23CsuqN6o6A46Vh1GXjjvvVsajNihRnWKwgwQ42G49WTH1w",
  "key41": "2XrMYjEoG7tqZzip7YuW1rZUCTC57wKmqnWQa9kQQwqQcH8HGq9UH7jiVHtniXRFPbNuWGkg8XPkzYt7dfxsSYys",
  "key42": "NCpZjPdu8PvtYN9c5w2rsCE4zUECxVoESbyJh6ZJNeNUqQbMnzFv4qTronUTPX5yranoJttM7nRragdvsZ126YJ",
  "key43": "2Ld3SS1ZxutneMj82Qw7ry34oUi4NSM9beJqs7tznPgL8FtwonWTKecwDNhD411p7xcJx1FW6pBsYp3jxcQfLZXH",
  "key44": "2X7NXzVPLPwpq8TV71gPXA8UW4YZxiyDQYcrEtozbkaWskrPCTMbsgGWsenRw8Uf8TK7iJ9fmCXSn3kSAycdHkru",
  "key45": "rHCzaSuq3HJuxNYvQj2GaC1ffoZeuYy4zBNjRraZQxf1yHh8hPCb9xjqr7H6pVVgYxSB5vyr4Wh5qsw3qu8HQ8a",
  "key46": "2CoYtjdmS242sL8BE6VRuY4kXA97qWtqbVU9NXj2qdUYcN76Z5XK3cF4yAiBASRp3kgLGbdRnJvu4LH27PPA9X3N",
  "key47": "4RWZX7Fr5nM9eC61n4V6YzJH52Qp196uwziNP4BZxE1HJKJmwQ3oUh92LWaD6TB9MnfpFR9ZjF8qEZMFHGxtPSwc"
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
