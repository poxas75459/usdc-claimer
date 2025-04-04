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
    "3Spb5Wo8rBATeq697DgjKre6vBy6RHzznyMyTMK53Gty53KzfJy6rMctM4FNAe9h7HXHdbGV4SMZ8Rcr5Sar41gE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38XwLt9UbAZKQQXxGuztsvfNvKMVoRLMJZ2JSSzppQMGDJSSwTNjbatijCjUDLNj9MKs39Hb3t9FVRkYMkvumG73",
  "key1": "59cdY62fF5m5V9aSGHhTyVokkjZcuM6RyYG16hpWXxC3MYDMf9pdS9Qqa3t2bJYX4vHUT5X9t7yeqabEBPcvoXd3",
  "key2": "3diUcmcrXx2TtbfdC1kYbY1RCfzfkKF4bCYVi5BVQMgG55u9Uu3tZr6aiFZxrxTbTXJSGg6ap6XvpcQykqTZ3KLx",
  "key3": "3ScekcHJkQpRVDChjPaC9QwkoFZYQUCvA9WVQsFvEWhUpgTAk45wwL6ocpEs8mdXHdC7huAXUwUZ4bU46ikRjEDu",
  "key4": "65DGvWZEzs8EoY8oZ6ibG2Y5JA6d8W2SbaM1haMfTLGZ6UmSPCstFfvg6sMS8PuHP2deyFgpVfs9VwT7b5iYkWpZ",
  "key5": "3LrtP4Sk3yfQfSsWYavbVbhd2afpsDeftNswDuguZyddQSfGg9gDiPzzxwNFEmMr8Rrq9B1HL3gZhxWzyBKhDZnS",
  "key6": "DmY25zZxuQgS6jJJF8yjMfbA5o9Qf7thufqA5jrjjtW9aZzScU79TbTbPmWVAKxU9oJwxhunb85WsyisnX3aoT6",
  "key7": "4bk8wv5fekPUd5bWN5Te7hiu1kFhpcqWmnhtBHme96P7JR5PTvx93YAK7XAJRXY47jd4naXptbDCq1p6fzvsdAFD",
  "key8": "3tWjx1UgExrPQRou12ChfFEuYP9oGAri9NHrwRvedrV12R5iQNnkoxcTqwLJ9TPH39KqiFwZx7UzcrDNdbnfdT2R",
  "key9": "ApPtNx364B7i7BhBHYyrGQDVq62vojMwjQwG24EpnvdeQ5FLK1RKLZ5BJGBM6m6bV2Rk1J9EP9dVn38aWo6urhu",
  "key10": "4tmak7dcrBZR3QgJUZgTPAPYiCVGqWSRjx156cEkqpFcwAxCmaERWnTsjSG6x2WWc6JjVtUqSyV8FRoZTimFQsLx",
  "key11": "5L5f4GjSRExVLHpfsBfGsFYFdh6FN6siq94Q9hvuMdts5xsgzb5S7KWmMJcftPHFmEphVnCCB2LdUTueNfrneP9X",
  "key12": "2yA7kT6cVm1W7PfKWQ6JJUiED6oYVaUqykR68rmRbppfzCUZHa1pW7qeWjFrqcQrkQss8PiPxQPrgDFo8T6rwS9u",
  "key13": "48NtH1dUNPoYN1k8PCrXVjqTR2qtxEDp7rPQmoRx3SV79vJDQmGuV3Tj1CHdbik8xLLSbSs9REt4t9TNZyeeN1v5",
  "key14": "65Hx8Lq7tQRNpz3dBATzSzHH4nqv11JrXphgkWFPRW3RKGD5ChXggEe7bs8vDAmLPjHVkri25TUmATGV9e68S7wF",
  "key15": "5mbjmz5AS4Th2usNyXu2mSrRreyLXViZmseAB2VKgHZq891p3C8EYZ7hguoSLMbh4cGY6JC9sBr2oShq2V8wG9zX",
  "key16": "7x3QwQyWBP2NSqp4jZ7jnaKx4nRhKG2RieVj9Diyoahwb6X9Uw3pb3FRA723N2kVZahAbSQMZc4iZJ9NbMVU7kB",
  "key17": "Srb427TfcrEsyTgM3jVKeADs1iN1kr71edJ4EzukPshJbEVBynLYLe1pAGx9ZVJtxSjNXGqPRXzuDcJ3qbnmtXG",
  "key18": "jCymZg6pdxKyPeU3ZzkG2EuvQqy58BRLPQaCHCcbsuYtyqGvJxzuywUucSAZnBPWrRtpYWZ18jdvq9RLq8uuiRp",
  "key19": "5f1JEJ9hJcMz3TrHZ2sMj3yYD9gFTGsLQg3SCSB1utxK8bhoEtHFDyrZj1zq1ZPwfW7cVcLTLqRkQcKnnMMv3y7p",
  "key20": "2ydGLWNE4NUQtoXpqCqZ9xns7h93VpncEmK1RsioZiv34w9V6ZYReyXjiDgGxvkkBNLmoY4rFsmD4SB7z1dGv6Gt",
  "key21": "2X8wvbBRE4ubNgZEY5CEDzBWjgx7zQZCDxSAUY5twc5rSapnis7B6eNgQTgTDfv3LsEZCvrdLFXzmEkUnbuTJbv5",
  "key22": "2rUjJnNxNSWiF8wN1K7oUHvbGx7fSbV4GZfEFqXtGRa9BvBLjuTyq87F1umrLx7JQFt8swmDJ5AiJNBN7EJJxw6",
  "key23": "52dJDrf5Y6KDradSGWHpAdVZuPtnXfnms2SDdejxcHP3geYLPYXVyrEqNBqTxQ6KoWwUE7Np8GtmDhgHxtFBRK73",
  "key24": "2iZTpRuEQqhwfaEAUtresFXRakvnyKZDG1AJPWKR4UPRozyeH1E4PSZ3LxJF5qtrXdJRfytRR7yJfdqzBkNHmg95",
  "key25": "525VihoyckuxDD6B1qHsXuu5KJqxfVT3zpPCc9ZEQjuhxW3e8TpdbFoGf9wa2tmAgXB9uRpeUye2CvfYj7g9DMWT",
  "key26": "5k7e5E3y83tWqFNgvusjtG9VcLv2XQQTqm9WXiHLEa6WwuEhNgnGckDryFJZ6sBJjWeiN2p93jA9B83R45AtKa19",
  "key27": "2LmFVVEEE15afy2WhPtc3VscYbRDLCaJ16W1F7H33434youcK3JkV4wZLNihL4hdFhgMVAGZ5gtFStWAa7wVfdvn",
  "key28": "49x12bL4axBCwdaGaWbTmY3UHNPeubM44XgtfBFoVMvemvS5EPRo1tNPXuQhGReiGeVpgM8MxzfBwjjUVKaq8eXa",
  "key29": "2yHagfN9hmGxZQNYKyk2HKN3sPodYdQbc424ahCzwF6y1vb14yXKpZ54yDpgeQErbBv6ZjXbVNU8HFpeiZr5hjw",
  "key30": "3JmkaUPwbLLnYvJX7sdiwjkfekrQY57oTaQUio6QByDrsL4h82UoLTQZ7jbuwvE3HPPuJsGsM4ciCmHdVcFzSieQ",
  "key31": "5A3VYpbcUG7K9AomXYKKEybjYD1Gx1utktYtQs91La7Rw4Dywh4Eutdz2cAk9JJdtBWNwk42eUXCLah3sh4owp2R",
  "key32": "48HLdHtQJV9Adz23MF9kPXrM7vsr1D45keHVp5Z29HxTiBJQpNJ42rg3j81uTTm8TPgLvDucKJ1BLaFKarMyzhqA",
  "key33": "5NkmvTNHhX5jP7sWLZ6VN3r1eDGt2UpgMXpqFE6AeV8pcvjY89yz736z7TwyinDoP2UNpuMY5uYrhh4vcM6CGXFH",
  "key34": "2VUCf45ejeZnKMnCqrMdyoPbU8ksUgSNnu3C2f8uLLb9cEgLaViDVDVWs3K3D2UCg4bs1XBRTjogkS3NYNmEBNaE",
  "key35": "5jAFfSWoLLfmC48GXum3y5WuFeTzv5s5shisqGGhoBGGX6j56sSso7jhyuzqMZajUUSL9DsNy7tLVsg9jem57NWf",
  "key36": "4PaPs6faRBLAy5GUiYVDq4jVpvzs1mA3Dkj8rpz6aFggEoUuZRTsZmF7c7SZqbC1NVWFKSUnXXzqBoG8ZcDvNMgT",
  "key37": "2ouQB9bNLaD3zNkXu2bqWjzfZ7nuzsuqE4pcadB1VpCrPkRdAE8C3BcfbcQdPZUjvryvN8PLEdUdvAMHQzvzg6Zq",
  "key38": "5RXDbGckmEhAswPVWpudVTtxENyaSmQHUKYKtr5Z9EGqi5x6kw2DSg4rT76KEwcigax9WMdc7jqbCFvd3jSH4eJS",
  "key39": "22umaMMC33sttCodNS6f37BcMEUJAGAocYk3Lhf56q32pYo5euAsFexu4uniF237KUVLYK5g9ujqoDXspGWFhCEV",
  "key40": "sfzLAx9oRjJ3VrnFuQWe8JVfAhqPSupQuUbCF2USBAcno8iEB17jfsVYynZBPsms3SJDD4y9YEaxeZEWRjDzr4K",
  "key41": "J1LoJ2FGHcfF5ar4io8ghaBJGrErgr2pc8Pt8Anovzg5u7gesw7dZRNzHdi5rr8cWF9HXtgfmXnJwK9XsP6LHeE"
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
