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
    "2GEBJs1NLMgufmXMZkUjazSh2vUNx6t2JHrp9PJjmQExCDWbBVVg6GfAtuDX43XZFRnMRB4mbvskst1N6puFUTRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RFugU7QZwj8Zw333RsndGD1vp3QLSXPfPuXcSccoK9acVagAHXCqxhM5Hiw1fmqfmrgk86tcD54fQETmujjEZT8",
  "key1": "39GcUmxNKVnyKzvnhoKGANffowDEKwxa3yqoZ7FAHvh8AH3F88bHmuD1cgQNXpjRgpoasm9HkmhMwv5iLRdEqNzY",
  "key2": "63DCAom4W1GPZhHYLfhuBw1Chy8Noq8hJhntd9mREHcxq5oT8KnuVYKssbGGjGyZGFPuzTeRKZasLuuzMWy5VAqg",
  "key3": "2QKM1zE8sKy5NKDGYWvdodQ46ZZJSK8GTtbAMvPsZfUUWMADp88XqWNspAh5NCenDJUFG3Gmw8ZPiYUuEmYAbJVm",
  "key4": "KZYdjqqvz7dEgXYay5nKBJ8CmPFktbw9uof56xY5ULdTyeL5Qgu9otVQNp55hxnLHRbGBdvovXZt7w6aRsm2DNh",
  "key5": "3VTJJn8uZDgn9hBv1Sj1LdV3FqrLCdkUiricaSL5qB2oAzNR57cBGLQcH6EBSzxQTySsuvw9A7v99B3DB6C1pTej",
  "key6": "2GdYfZ9XkaKyBSK5vVYPj4x5rBtNNrSa9XvenvVq7hGfq91N7JAXSg586a9MpbruevirHQDpWJHyRqyNrLsDnN7k",
  "key7": "3MFmE3H3CVAcwdihirXEn78Qdx1xJc9MiPDu7PCf7AN9xXrrmVKTTTZv9NzfzUMeiajn6d4QmoVEnGntnNvUjYSw",
  "key8": "3UaHDczUzv9LPDjKUy5pAdaxETBiw1sFM35iEmegbDFSf31xJeyLFuEAvbGYXthUSeJGCSnnm3sgEQWRykg1Pj7S",
  "key9": "5tAGREaVgiU4PqNeRgyojggg6pKbfoQnc2GPRbUnPFovmALWn1qjQhmDPQRDGCG3zT2asqCvByoSCeKTB853oNvg",
  "key10": "5f7tZKyN899L2FqGjL6QzLGigZVA6dpGpWoUzE9fMGo12DrSyGa8AGjE39zJgEjtb3CuJddSUnREQh6kS7HyX1C1",
  "key11": "2mMPYayh3ujfLrwuCtcfHmMXqRXAYWwxNuKk2tSbNj3g2Nmiv6Hd7HuMzEWHYMHZHAkoGFNwx955ycmA6j1W6cR",
  "key12": "2EwGK2nv6fiT1zcDPtnGgV7BQ1k33pahFSvxoLpWyTZg8eieDd1gNxPmuKdKVFTJkGuJJz6sD7bZ1CXdi1JH5Ax6",
  "key13": "2zXaSsVQqHHM453bXNXx4wKMYhXCNXBkbB7sbPznQ4tUCucnUjDQ7tAdfmSB3bPjRDCTCvdzCtDv7H1hN9mAtR69",
  "key14": "5MTtGWZwehxWU489itaqg37PdHayGdNLK9tSMpe2tvZePhMbuTNcMnM85gUYPpQQKAeXEs9izCxEzraLpnUYtphE",
  "key15": "2BBKo9aFb6eiNswXoHeALRRDtSAanM5VuBrVCVnTw9X3Gy1MejHH4wmc1yTzcqZZtVGJh5tkuQjcqsEigRtZHojv",
  "key16": "35oynT4TVrLkJMphMP798ePiq2N1JybAPjfdXPF7nv7S5Uem7ozLpnSvS5QX2qGjR7kaDbckjY2jqS56eB5fVoLi",
  "key17": "54bPMxNLFPMkVfC3mZPcvW5wN9wKD2MPfEJDusHNvcndBTPkQiBRdwsXms6p5rMi6BtgKYDBAexprR1t4RFW7vuE",
  "key18": "5XakKDSjSFTMC6FnjuccqfCC7GEM8P24SYGEULNLx2dviwny9aVgEmKJhr1ZaWD6Qs19hCjE7Cbf9FXniBhUmLeq",
  "key19": "1276e44VeyD37CtX2a3ZWgjpXT8fvZZF3V3QJFUhGmCwNqEbYGMAeFMN95xDDZ97tcPjuhm2CFVv2JVpEzmode3D",
  "key20": "3vKdo1dG9Gcf5Fux9SDrcUThnf5ggFTDropvG3aESxij1qjFrmBWQFoFRpuofFr8ujXL88t8p9WyekiNtSm6nfTd",
  "key21": "2FTJJgdB7iDgPqFBTiiaxEtNW99kPheh8hRaqRqPAbYyTs9Ht2evN8hhqSHXDVe9RD5mckZUiLaBviadSfdRn4so",
  "key22": "2ALEjPFcZcWVaYxFqW1CrYQihFKKgKtUZfrKSKVASFYCX7fdi6uYP95nKQAX7Zm6VKmafRZmBPxc6owq1R7fCCmu",
  "key23": "29eBPxhEz9RyGSG9U5YFDghsceM2rFeETeSU5KUA1zg6j2VaFLXGaFBdMtv4Qynapd4B4GGERqWnLsKrARpaVWaH",
  "key24": "2qj1PgVB2ymNtYkutBEjwJYRXufrqZ4qLy9zgeuTDzwG6VbNZ2yH2znk4ocEhtazkbTn8y12JNUeknBQoY32F79z",
  "key25": "5sDkipc2ELrFAtVKsdmyyJ87WRFbaT3bHB4fULah7jKjqeEKykfU3aT3PSQEFSFDG5uDrynRav6M9581betEEQw",
  "key26": "4FeCs3J3539gkBHxWH2bXs2TsZAa32sGuU53Mf82ouqzPkcGtc6FRnhKDc2ujcLjFWSM25gRVC1R1UxJw7Pqo9M7",
  "key27": "2NivTTB28L7om8Hg9ytYzimff6A4AVw4TcmtP5Zyc2w4XbVgrSwfifNMjpL2CZmkLC5opNfTPaeHjSSxNHgR7q5K",
  "key28": "3uX2SDgbcqa195YAuELF7VxBYTccPbrYgxjy9YvBobeU7ZfPGL9cyP7yRcLkboL23HGuaGXWjYYpDdjeZLW1FACk",
  "key29": "3WCh5RCnhxmesUtAejspz3StfmsqxMpKescCEHgbCvhS5nhgJWttoSgNDFSNH1adtempovKkjAj6ocHfZb1hiEaT",
  "key30": "3kjjfc7QWyZFxENn997EWxfrDx7NmHp28YnWseBu8Gx6vUaUPxeEWuKhsbZQQvoGGmNAgn9JRMbGppFR1wLcpe3b",
  "key31": "PCpqvJvFjhV1KMJg5ULv7Ex3hVRWo2u6raWH6wXLbTPzLb8RnveqnLnmZ7tpCDGCtjewifzLmArwe52sNQmLiHR",
  "key32": "2G7eYe6cZ3jQrnw3h1Eb8kFqbWPXF6U3Jp29y82SgjwHUCuBN3ussLEP5ZBWXSxQp5vioTNYzHrq1vfcvY42JGhV"
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
