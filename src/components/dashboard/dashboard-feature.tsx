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
    "5cXimJqCy5NrxRn7Aok2FrksnLrbeKwxCe3UrciLMRmfE4U6x8p6iCNjXV83cWEkwSaRqoBA5QQnC3XGHat8dNip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Qg1M2VRHyQkusUeBnDRvn8BGvW1kU2NMn4TCh79kh6A2YRdE3fuNSw85bwiq5C9z1m6qKQ2n4yDoCqk7M87SfJ",
  "key1": "2QETVe1VdVbNPFwJnZbfHx3CsvKTecXdHufpCk9gSH1UMNGUwcCaiRN7UQp5xECMJnh3sNHParkgk3xubA6yKuqv",
  "key2": "4tXQybTrEMyicawTTxRsST1BGrzRBtvgEZFPR3349KKoawuiriHmX5VnfE8FStqWPy8sERwnCNu1xr4BRGq64hz8",
  "key3": "bhBAfzYoYzeLnxU2x6mT2gyYk2CwcrmMzhTeSjuTosi6dj3cauGYGhAVGXPC7Z8EcMsvesgquAmkwFUALU4xRp3",
  "key4": "pw6NRiUYu1SohGWox7DVcYyi75DrGKZ4KkBwuEed3HrTEvuLWBe83bYYafDRzXoUSXWycs1QGYCraV5yUr9cZfq",
  "key5": "5gwwZzzh3yETHswAvWoefaUdGzCzfkxmMF2mfLyqfoY5p51wSSn2GdwMQVeAUHnQKrqQk3QnSoAfzTpwU9B4n5bW",
  "key6": "46swrTVn59VgPNE5jdbSMTz23JLnAxKWKvAgndd88qS2vFE2WKbc8oNRtVRsJfe4LMUrZZuwrUPaH2ZP3KcdNUm1",
  "key7": "28NmHSMpt5ZWdf6CgzvvYAGQVZJP3DsJJGoiCweok43C5B1yNYveHpvuB43QaNaXxBZgQDSRa794dAWN4GcfcVcB",
  "key8": "ENNXqa18GRyM2L1HV7urnmhg1KYj7PGFQghDThy3FXW1wRKtTMLTECDdbjEYE4uAXKaw5Xupme7jqmmuB6Dpo3N",
  "key9": "59WHt6jxksLQf3wHBcJ73cAEZSpCN6fUcFT6dPYXgCQdB2M1NpAtUXi8fLvjFXfJkh4PHa3DGhPsD74teEHmAa7X",
  "key10": "4dF3VH9cPYNhhwDSmEAuLLMXDQWEKcfcokiBsowYyC7ahm24PQ5NnV2jnS6C7b2md2dMPDLwtTyLahnq81jyDnZ8",
  "key11": "MADFWAntsFMtU3vK3x7EM9zWmpaC5XhSeDjDGgUGCtGcbRRdxT4hibUaNygzBdf4F7dUcM186QEHs3dPxqqmbA2",
  "key12": "3Qp4eH7nxNTsko5KMtaepQmnqXLKdVTR3TW5ykAgABW6cSNhaaxE1DDMvwmsYcNvMLyvanVLwE5BehzUFgffHg85",
  "key13": "42Ui7EV8QzXK2igixAwCVMzThppy5vHnXwtBVscd1Y5UtyuHcr1LL463VQFFQ8ZTp19ru5ofeqfNnA1UmetWWf6B",
  "key14": "3hU9EoqRsiXfRZw9WgTy1rACmEKM7KbmXDqRrKTtmPjcLWp3fNoLE5JRj2oxE8vRhG9mvUpatWb9Kh5z3y9NZDyD",
  "key15": "5HYCnCsTTDX75zcg2E5sdLbo8uP1Se4pY7D7DT2mF5VAg1vYwKvy58VQszGc1g53AkXiX6fybCpB7Pgc1QwvDxjG",
  "key16": "2fjXM19XtjQG863nzU79V1b2qy6im2idJ76RhJUDbomcSrDLEm2p41xZi992jfyprWCjBng2zCse84CAzfdHd6aE",
  "key17": "29ZASkWAUbkFfDzdZVZXWxgL75Dj7ZMTzn7nkBXLxkDMteW5RUZG1txezcgt5K9XNyV9EnH327u29ELGYnu7Cxho",
  "key18": "5uLd62M2M7NW8VeyM3A6uTGD2cpo2tSX1RudhjY6nVd9NESNbL8AE3NMaSJjAMc6ydYhqsmJbsFyj8KgdQHAaP1p",
  "key19": "5ZzNdukMXcdcKLJuUDScNa9p82tqRkf3QCRKPpnJyJvAwiYPJ61waWbLo3ndP4CqUq8SjcbvthD5utYeS1FUbRAt",
  "key20": "373Ffd9DoY9MV94snuDxrNANgGzCVZGjNo6wqsZ7DcTS1S1EnrNxd5orpjn7GdWUKX95qfJrVqYdq4UqxZb39ZFj",
  "key21": "fqo8qzZbDLzqJ9MY1D9mKmhACXTmFNoVE8kz7DU5k7GNXR5s1c2odnUB8Mm89ZDV1M5VqxKDCBDAS7sBESnxdVH",
  "key22": "35qjNjkSA4AT9FV3kbfkkBMvp2QhpS4LggAYMpwyjpXJpkv421R2BeEx6BkTzvzuTpCg7TQQZ7842NpQ3ZRuR4YR",
  "key23": "ndq5pxdhaJvRwP99KyK89r3tY56ttFTzYNj7NsBHtEHMyYNdC4ucTfdUh8G2U8NPLcPFP76jmMDin6u2czDsAhZ",
  "key24": "4HyzDEN7pa38MMTABZNoFCVEHe7bRzqUZLuf1rrZfkufo8qrjYCZypggbEwtSb5rFsBEjkTfCyqfYRjbmmDo5jvi",
  "key25": "2H5dpzzV8F6zBuJzebUR3hvjwu8ueGWy6J63yXVSt3WfyGvkCA2kSg2KGcg5LZ3c3DnZ3ZJQoiKVFyCC8z24cSau",
  "key26": "4KiAXdmXWmhVTLrwaecHn1zCTXXZ9fsFee2vUre2HhUh3NDsBWc4ib23iUS4jNemZYQJXbByo24rrYEixoEgXXPM",
  "key27": "2AhQBbchNRcaRzwV5jksYMp4WxY514tYKctXt5AqkFP8Sd9pK7Ggp5tBbmFeqzEDtQ3QMjNZNUtd7SbyxCt9LMB6",
  "key28": "4H77iih4KAZDYFHCE1TUJXEKJ6hY9sR9LaHVNFBoRtrJRDZJTrvfhvgSLEgk4VwtvogWwpKTudDFdWe6jv2mhNtZ",
  "key29": "4YmZnzAqwWc9bubiybztmuUzHkhh9JazcRkFnPLz6P5VnGmH6sjXiw1Fzbd5rouDtUT9nDBeyqMaT3cQbD6U9P79",
  "key30": "3UZcwp5t1E6X6i4YjKhkdTpTY8jYi9LHRQA9T9KPePWmR4GnUg98dvSWRKP2iNYrUFpmBNL6kj74anPQ5zKsgg6Z",
  "key31": "4cCnJZ49efyPk2jA6Tf2voriW21Awm4xt9VFiJ2sA859Pf8AHYhfCeDS5ZCjy6yUtEN2bEbopFCfyhn9GYE4PLjQ",
  "key32": "2RpauKqhbmLcL4UbFHFkn9iF9kdEkwS3UfbQoLQ4PvQ7pRDKvmcQD8gQJF8ZyHdxBPSRRPNPkZAguQHjZRLhHxGU",
  "key33": "5VaVokizfTiBYZF1JcMBkspkkReLuCEykwXchSLUSjCXzUMtdAPotNMPoxda3RRX4g4a7dwGs4VoQwgEBVTnFF7C",
  "key34": "3YHx3p7ueGjYr4p9h1sVxsYsrrCrQke9oeuBKhkuU76QsNfTRcKSxDd1nKBeBEv9oSrnsLTub8w1bEjdSCdN6zrB",
  "key35": "3pJ729oBGLwphfHGPSnYtM91ApGoQqVdUmifnxjbzL6V4pbc9hwieSgWPXZXGufARxC8qwaDv2936R9MAHVKQKJP",
  "key36": "5wCCnSmrvWA7iQup8hN1RcWSatbAGLPveS1irZ2CBrctTbVD9d8Kiw1bpkVh3FJyhrg9D4hd8U13nF9zXvEdZttd",
  "key37": "5Jrd1zeWhYrcbtpyVDqyx38nCHDqotT3rBWsQikSmH1vtNs7KPFmFFeZnzEjKktK7f7jahENUredDYRZzzVbqsjD",
  "key38": "4pzydftFcJPX1HL2rqn2RgCwRNHzXXVdvCfN2BumKC9XCMSva9JqpL6p6dg8mi7kXEBqW7emncKd2sodXPZx8PC",
  "key39": "3m8dEvC8oEvhbZQMhJDDaGxBwxQkG5d8Cwrtei1GFZz4zvLjbqkuztc83yV6Jrc2Me5ULZfheWCij5omWJpbzMJh",
  "key40": "4SjkoMfM9UqDR9iYzktuGhSZJq3RNhM24krobnSh4hXXPaa7BVPVLKs9GgZqnndN2mQMtVYAuk6Hvs1giCCU43ee",
  "key41": "5Qnwnote1DJxGJLJc7THTBYNK2mhGs2QCEBia1ph7Q2e8CEHACBg2QHWVP44tVzhUrKwsajpKKeZ1ZZf9YqiV9DB",
  "key42": "336tgNkD2Ko5aZerVjYTnsRPPqAkQsVAbhxPA1ruyxpirJTKCCqf6RyQmCrzhF7T197CV1eyo9xxhReuDLizwd3G"
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
