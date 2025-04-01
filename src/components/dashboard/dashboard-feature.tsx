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
    "2McZtWr9UBFKmrKDE1rv64zstTuf9Tnz2GqgMqJ8NqXhdeJHwa2rVMUc8mbR4dvftdXSSwsMrK5o7DYPDxX981d8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cGkw3Fan6H6oJYsmL5SpwYUJh8P4SSZ3YgP2icUMCcDbMutHY4TQcsdogqackJwyZmWcxZT2derY8FccT5qpQCe",
  "key1": "2UHyT4f4LwVw3MdP22Du9hbKtRzAQNUedbvBgHfjJFDj3W4mv21ZV1hyMrk7KrnF2cjjetYZnQAVwYmUVyi9woTz",
  "key2": "3XehKw5kCcM1VcsF6Jotj2dg9XpS84upqWqTXsfA8Fr55Lgarr6Rt9SQEuJH2FYQfSEEtG2q88DPWUWeL3KSjBPU",
  "key3": "5RaHXq6rfubViWsSd1AiFUR2SpkXWypWW5gQUD8qZ5tzANUPhYGHDK8nmGrfPiSjqqbN3DQ6JrdY9HK9V7SQVzEY",
  "key4": "4VDrhTfuEpxHKQx62PRaTw5XHnFQooRH3LfUP5bSFBHWoG7TFLx9FLqPonDhhmeX2djP2iGBKzi5a6VHuuZXJKCS",
  "key5": "2GohAFhgSXrZMVBCKb2LEaXvKdzvvbik2ntVmCnPz8cyNaf7TXA6Q5cKMYeCW6cAgXPCT4kEKk2sF4K3oVhocSqa",
  "key6": "4faFBtQPtG6sGYSg9e27kXaqhSze4yneNFzKW7HeS3iX1g1LK3mtuQHSTsgsenFTB3K1kZuNVJkZ1ek9eCy3ZrCN",
  "key7": "3t9jvCqh1K2jGoV7BxnhYZ1hVyhDo7FeoMc5zYf7P693192kKvYP6GJTBxGZRED4m8yGYieaGYGxYK8Kbf5eCPho",
  "key8": "72HKjKSRqzhmM8JAwyVVdRZG4PQTK6NzKVaoBHPPkZsGY7DEk1Ze2UCq3c3VP13m5ECbfnnJJFtdMsChG5uw3Cb",
  "key9": "JmRDbg1LzoXWiSywcHU3gb37hzYnCekkpHmhtmV7gHMaoC17vrshduri1MRCJguog1PLSHsXzo98kuuM2JswYzJ",
  "key10": "5VC1t9Wod66nvhhSFhtPvBRxmSYeSqvQr6w3hK9oUJnkSuGaRm9k6Zh4S8eY1zs5QrsPyZRq8fq3Y7b5HEF6JiE6",
  "key11": "XQSsjRsJUbqpeF29oW7vaPihxABvM17u6V5ba6SGs5cy5zUMsEe2dR8D5KGGdaRY13BnKJZhc5MAew8fi4SMFyZ",
  "key12": "2sLcuhS6hH2xTQWFBNHYre4L7WNZAdCjYoLp3U7aXEzLME7FYPN3QdEotkGYFkDs1radBD8Qk1U5nBMFBYMuNEJE",
  "key13": "3xxoY4XD5ewRhUSYt1jTfcZYCYkBqyTyMMoqXHx4dWUyoYXXvgKe98mH4Yvf95eiePNH6P56pNepzuTe5Ky444kr",
  "key14": "4JQSr8anfAHk1B4euV9gyzEN1o7MHCBtHdq7NAeE3vcywddS2NrDReDMhzBkRmK4YEWRV6yfsgTRbBbBTxCsBiz7",
  "key15": "JMc5dciJmyHeLBPHNUdTStBVDD1q4Y1fVuLi6p7C9DCA4oZM5kgGv1iFZJBjX43zgfnmSPvNAesdDXGokvkdvUY",
  "key16": "2ttAFscNwFJ5vXEeneXasb4mnazgJSbbjAFean3zZBtqizLYdsCX8v1xieo7maCaHahvsB2N6ukoQPMK6xkgiDTi",
  "key17": "5rrMcJ5P2nALtRgkoux78RX929HYfqjiTV9QkhQPjXEPgD4ZiALBgk2QxjNBdWdtgeKcg5czo7xC5woGJ3YL1xLt",
  "key18": "2nWRG4whnmkbgdrXz9GxLfWvA8HBWz33VqUtomxiEGkufAzX71iDihSMAQ5MLVDhg24GEtZb4fS8aRSDVk6YWCfR",
  "key19": "2sXwwd11j92trP9M4P3siLrFCJtUfvaYoTDBrkE85ocmjoDb2kKxk22FwibTaUir45mpiX71VswcbrMC2LutpfpL",
  "key20": "5qag2Qv4KaXtbgM9Xs7kahoadCt9BbeyV6UcCRwo11VV238C17yArjFVWwviLWkpfMnZLoVZcDHvARJvMHCgZWKB",
  "key21": "2PibfmHAFCRCNTGv5sijPVYUvBssjN6MSgXKqTcM3ZQh7Qbq33NAhKu13zEmy43DtvxEdgE5WeNj8A3ccFpeNXmS",
  "key22": "4bggmStJUKmmBiG3fAmMo7hge5mXseCLGT69dgxNLpu5ePDJ7KHNy8bM3AT8QBp2MbFzLv9c37Z8bddLHYtNpsKc",
  "key23": "128t6KoZCYJavSPo9bRPp3cwo5cqpr6T7XeJ8fX43YEZEkufr7AmpgoG6SMxG2eSG1E6ggbSkMXrQF6k2AaFRjav",
  "key24": "LoLqSJYkGiroeE8p4asB2KV9VZThZDAzpHL9gWF2DRARiT7PVzufCKX9avXwsdkwvfYjXwsfTsApNMJz3VxPMpz",
  "key25": "2bg42X336aw4eUYEwd29hKgVL573ZFwhWFGwhoth3CVWpmYdFCvYRdsS5B77ooS6MCtmbwn19axt2HMFSVXyr9oN",
  "key26": "p8FramuigCxFkAsLw3So21necyVQzcKsFig1XnASCTgXx7E2EWdNpzztvoMoPMiAFVWb9ebwdrHsYCjX4jg8Vzb",
  "key27": "gc6KtPwwWkyuomNxATJ74hc4Lxuv6BaAJ7HSG57Y4Su41Xh8yHFYfzFq2APETEoyN4ZfPFZUk1HyhVyQZscZEYn",
  "key28": "4dEcu75D59AbYLWiU5b3eeVGs5fqstFMaRphU3CB3h158vBauKsVayJsHChF1jmxxvNzbkRuRyVzFXUFiV1JFN4h",
  "key29": "3M9QS3AU3a4Gpwj5MXpd98WKFjLKoNnKWMk3bctMTQRjwC5C41uyUmqiUHG5Px9B9UWLFuJDCsSiKoqdxuF25avo",
  "key30": "5c2XT13wLvVw3AQKZEy11N28uTU63iX4PGxofC64pG6UrqqR6MBNP1ox7RFfMk6Mur342sWbEtgKpq5GLhyfS6wP",
  "key31": "tEBQAMTZrDbCw1fwVinmo7wv8iwhvLL212g3VvEp6qq3uYT3yG3AXm7vaCfmjBVRej6xXtvcnSVroitFWR64GZt",
  "key32": "5XvKBMDTfsAf3NSwcAhheCKGzwAeaE7JFCq5b1Ucy4tpyepkiBgs347DDsXGSUWnKKkc4k74kHK1fQVsB5HhAJbM"
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
