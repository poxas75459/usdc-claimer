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
    "5qmDXJRVNLcJSCJ7nP9t6H2MgKUievC5initNxUuGt2o2dUTT3TkJrqNa2uX13MvfUuW7XdTrksVPasGMsQ8n1S9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gpjAtKCrJx2EjGq7kw2oANKMi9NnimtKHUYtEVof8dmmigVLSUKR1zTex3mtegV18UDtCDND3H9CYH5gLh7qJ86",
  "key1": "4NeZSeqysuuxgywXp6QdGbrbp78SZFirJPxbDQpxGMpWTb3C4pYu7S7przi7HtpuaXM7wvodux8nqXRaDQYE7mTH",
  "key2": "3x3VPQRNkc1JBsazLFzKHumb1BYjDui4MBKwh1dLWLwu5PfH6tfPuyyiUSY3FLMLyTJ8Yd7w63x4hcJ1nfNtPBD3",
  "key3": "WaTGAUhvjgpUCrVxvtCoZSQ6bdQdBCVFhDUJnyBiFkpvDJuzdi4WWVtsEyv6VaVQTtD8PRsLgJmS9RorrSjZ7DB",
  "key4": "dvwhjCvxPjjF6L2RXaQr6XLbGn8xedUewADbAmDDNTHsnVma41e4cRYKv5k9bQViPvSake9Y4pkGCYD4NXnt5jf",
  "key5": "3ykv8Sbq4EgpujfwErTwsKE1tiRxaYDr34dKJUi3HA7mDMRmJ772Q6t1Jdpny5jcrk8LVbQwUWKH3pUcp1WK7P5C",
  "key6": "5fEymzfmHYcrXuAFoZEScR7jXucQuXBaxTRBpEevd2J8sUtkG8My9X2rMf3dbD2fnuvcMC6XZFhyofiZ8SwwPds4",
  "key7": "2yy2hchFAv8CmZuPYmWx8N7bRz1AXA5RUEVoPAwYBWaGfazf9xKCVPY76eNWMXegzAh5s17MAT249mF6rkCv138X",
  "key8": "4LFXbsiPN1acbWfJLeUjnEeoDK2QQu7yGUgNoBCBRjgtf4EQFocfgG7aTTTwLwmLXZ6mRwyFQmgqF3GdkDCBmUoK",
  "key9": "2Js8w1javhndBhcGq7FrhWEBKQLqULwuo9WEU6KYnw8Awvi34ao1cry5xHWxBhMoJzuDpAvv5FacC1YAu8sAkrBr",
  "key10": "3scyM6VWKuko9LTgUi8gtPte4jDg54XPcLwYAxBfo3VP5JXLsTTVQ8ha7Trn9tJu1rLPCZLXwVpXg2MYTNBVYWzy",
  "key11": "4zbpoLFbNfVAz4x7uexrnxfuvn3wmboWVZgumMGhpkaifGH4RwrmipT99QjdBTYhrPZSMk2pAqchLJG4j2pCgSNv",
  "key12": "4f7AhdLRceZkpH26ToqyZQod4x8k75Gqahz7tFykYxom3VyaXWux5cGdQqE4vzX6URQtnoeseMKvRYFpgDXyxs1J",
  "key13": "2yi3iHSrVCJP6qXZ3yBNV26vw8qSejF9BarXJhgDYgJRFbKWRUKSt9xSmuu3NWJk5Q4Dt4sfXCFK6Pg9UA1s4b1c",
  "key14": "57tg2HmEzuAdVpVZBLes8TXdPMWk4Da23HT9yg2yVcDUrVwsdj2KYFG81Pg9r1swVD4ncaVgpfBtWhy7UNLEkMAm",
  "key15": "AT7NEeCiJDTPR81WtFe1TeCaukAyEjvo6Cg4ndR2koHySe8Gj2d1AsfRhbM9p1QxjHvAua6tgorJ6QzG52pmsmr",
  "key16": "5bXEVWNz33aX8XDaGDSPGpQgBYFPJYjiQgfFshwXVszyF6Gto3z9NrLhg5k7o6XAvy5ZjufPnFVat9SX4wuyw78d",
  "key17": "4Ms2Hde8AHixTqpHrMJiUouRdGCk7ixTDbEBP3Xas1nW9pjY8TWYGzgrZv7EPTQrjNvs5XRPdGxGYLD14wJjmXAC",
  "key18": "3MyuvuU2woYGudpAnbQaruLudCg5tKXQTZbUXqWt3Xf8jGE33Ev45zpkGGHCDJsriFfPkR8uz7258cinXMihWYVN",
  "key19": "rEov8pPmnBbjurEY7d7JyCsD6a45WvAGDtFUSAtgJi5GtgRjr45SnSVTL2jREr4xU9xePgD1LdrZ9HUsgBtJ9i6",
  "key20": "5dtCDkceB7kakVBTnr9LcjQTDxCwCQpdB1yT7t386MmCCs8G6UfySDryxUg4azACUHKptgFPRwDBUdS4BifdBHur",
  "key21": "3qrVtNevvhQE3Ae3HtNNNskFbQkP2N2eGX6Q1CPWbgjsAMqbTJkoJToJky1F2jwEZfpiYPL4gNLBbpvG73GyqEG5",
  "key22": "Ks7Qc8LPVTjrvCoK9agK83BscQoGPv74Ldzxmqchru5qyUnK7UqusNZ794NvevS4Ng4iVZkRKAaKpA35CwE7nkP",
  "key23": "j5b8MuiJsCo2qeWWFrHxsma9E1G1EsYnDfCRXQDqeFbat52jRJRXuBWtVSyn1enKF3yamtV4Qn5zSRu9Tx3Jw4k",
  "key24": "2v1HyU5o7NXbskeTS1MEh7KpeJdT1K3aTTbPgycVqAuPPKcKhffjMqFwedKR7VguKERvfWAehWAdPekrdLVaP2o1",
  "key25": "zBoy2Ff17sns7skTFuF8XPszfrsMEAAMKhVRHTJpoctvDjhbzFNaqbXLA1rYK8RojbVMTjmD5g1uxoj8R97cYAy",
  "key26": "ZK98U1AdtRY7m12NoEUXy8rwmmiG7s33YuWsj2sA3PmZ8dxZoeSzUzrWNbuQ5LVWPW7b1A8DMbEwEznvn5yGT46",
  "key27": "2Ay6gd2WZabaLxxhcUYpYU7JishwvmPtUzTgCf4vm7suJKqyicu56N5MJt1hbMk5S38xBT9nBthZRAmmNxgRaSNK",
  "key28": "cBpxwK4YgobHSW4ArW5rypxPEbpEkrXFEuVzcuvAbPpAs5PkZ2cthG6K8HphhDvjDWHfbDjznJudQYt5YQHz1RY",
  "key29": "3LHHCeKZYktyUueW7VC88jxK6mAPmdKMECnyYNTwv1PCDsibbhbBtNHAk7QSmCMyikfZStiPQjf7atrkYuN6NiJX",
  "key30": "57tmSYwj6PSAEZZCFQvXmdSAKWeATGaJ4WoToAaHfA17CDhFPYwoY5YME6AVSLNRA62K4SJUML3hxZfKfnQY5X4n",
  "key31": "5np7zjHZwjuZfbxpqHg8BU9FUauaoUD3qkEuwHqkZBtBmSQWQHMKJH2ot1kx6Y4wA1t3gKmUjGuSp2vzZKUrP7NH",
  "key32": "3PEmghjz7t2yDnLr6zWpQktgPk4s1chwPpUhf8d8HpgvvvrBgrVEqQNDDjpCXD5GpqY7Z3wUjM6jg9LXSHdpc3hU"
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
