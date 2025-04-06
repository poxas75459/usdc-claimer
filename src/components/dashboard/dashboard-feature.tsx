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
    "Z6LCQzmEoqXHnohsowBZC2SN5Q2x9HEYzY78KhzqhZGgTsxfY9UiEMJaK7S4C5bXBF7akfuNTewh8AvuREhKrnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jjaVE12x7RtWr2hQuSp5YSVb5f5jUt89WennsSeuA7hGxgyv63qUytwmPA6KNDnHvE2VaAXLUhjbjDujAS4yGrV",
  "key1": "61b6gvfSovzbk7iJuUhjzC936aL4ESgo5F1de23XFrSZbDDpReVF6kuA8R6BrRfdexGdCaEsafWx8etQiDVF63qG",
  "key2": "4TiTmGBo97khuSbfmiuj6fk392Vkbqn36ttvfersouWeVAz5W6zk61Na6bkfXXmd5XNTkkxX5sPv3vXRimKVFPEj",
  "key3": "3FahXtSJ3dPVyHfV4dU2mpvbVARDuwg1px5JccpgvrgBzA1LtRaoYtpoVV1yVosTuZU8bAe9S5B2vEFRf35jgYsz",
  "key4": "3D6nhB6PTVVmxKjPEg34B9xJebRWd8CYVpL6bxhYtCThSY5oSfhZ9ndHqBvXbgJfAzZSHuizKGmxPdUC7HrKU2be",
  "key5": "2txgAHCvqdQo5Lz4B55wxAWtSXa4t763dGWcp4J3fvnG8LMvp5Rpm8VznTX1SUVeGoWK4JyWGZjEge3KSWSZ2qsJ",
  "key6": "5RdcXbVksnd3mATCTaHVerHPMJW8vkqAboYtu81Ct1qfJ5KG3VLLt4zYTnkAYgqQzjdkWXRdJthMoNm1dYVArmiZ",
  "key7": "2d4jb9mjsKSbLDepiqevb53xbCWq8Rv5PHcJuKmkLLwdWqUqg2fNjiw5KoL2ioQjC5ts477yLG6WG5yKio9uJFQ5",
  "key8": "4u1BmXH1d42K7uAL2hsEZy8UihZNde7ahu6vNd6ySNQrwDGwPzTJBY8VtY6HHgKvJZRHTBT3ed6Mn1hhBWFuYFZh",
  "key9": "3cfBo2qnzzCvsfNNk5W3vMkmgB1QHUWtQZhNhBsQ2YZZmxc3R2SSGK3r1Acdncqze2qr5h2ic1Jh5NDjZWJewUgj",
  "key10": "5EwJXuRCSWrhMhWk18fTMir3bMM8WrG9JTbsKzAN5f5BqYkkDykJFy5RTJ5gTbvvSofaeop5V6rPTQxWQPegMjKc",
  "key11": "24zXX2JCXPfS6oDKdRNKDgxUHbjXybx4GtRUV8eKu6J4BuyaXxbd87sgVJKiC9Ep4a16axW3nwPBTWeFR7dqbxKy",
  "key12": "643jDoR6mR9VCDpmpaHktw9KMTZG5wrBZ8idaXQr3Lv1Sq1jcbQ1DwqT2FNhXzzRUSD11A7fZvGxknFh8soTmuNq",
  "key13": "4Rph7CWGM5ywRMsnKnBxLutguXnCFZomYQV6Kr6RWUZYLsjGtqDEyAdgwg9xNL5EBsQ8HuimH8HX94TSvvbw37fS",
  "key14": "3Y7ztRmM5dc94MBSFfXrmWGavF9ErKr2mTDJb9EsnxLmz5Mh3FZiLMPn9nTCmUhmKGxuWFiNVQmzHiGTthwxRe6p",
  "key15": "23SzyjZtgBHCU5wWT4wxhBG4bFoUr3tU5jDBn2pEg6fHvQoZu2FQAXP9H7BLTySAvzDtHdcCRu6Ssd3f7vPHbaq8",
  "key16": "2CBwhL4MGnoXLfxPZoUr8ZUcMT7LuBZzbDRGgrQuEAXqAWjJpwz7yw8JZ4MfioueGFWGZ4rJPf1ieJMqyQHk6rbj",
  "key17": "DagPp3DEMRdoNet2mkgEWtGbRcCg9SisPTf5UCWcbtLzzSpK1DRqwx4zpca7TixbsWNaWWeebFDQC4KYtuuhobH",
  "key18": "3Dog1jUibrfzQ29mKWggPy9Vw2Lj24SP7SSGTo64D4RQSgJovs9PdYnCjn1cwF4bNJncCRHkzR1BPD7zr6F3Y7jK",
  "key19": "LgSaCQ8MDF8trViq4NtXo8Gs2DiLnL3FEAX8zCSiM1skpi1yA9QujZgt1SBWhWFw4vV5XFs21DPUnMhFegDcFxx",
  "key20": "5qwVzb1WQUnq3kgC1YmdQYquYdBM1pjcVgG5cuMWUUP8omJ6hhm61Ct67qirnV2DTHyurqQ9BKxiMJKYGREyP39a",
  "key21": "cCpQSnEeYX7DJkEejQb2H2izMiPwvU2V1SkRZm9fnzFrLedabCpga7D7LgRvNrhcAHp2w7h32KC8wyiDaekfmqG",
  "key22": "4ijF73i3HstjqUJjFyx9BMVAg2gjRxqtSRj2fQ8thdFcbz7NSdmsvTV3jgsvD3HSEHpZbAmskpNBL6RvAD4Djrib",
  "key23": "3CTdDhSUbPEZ1cYsZykEqTdE33ye4aWte7AghxRDDxMwksyUxHuur3K8XrtkZpqjkZVdjcCPiUhohsoubc3vP9Di",
  "key24": "2P4GLEPA8VuACf4ajs9ogt7QYxdKs6Dkmc43xwsewEdM2uMdWiXEKjqqvpuAVRZkejb41E1P4EJ47x7PJaPCuJyc",
  "key25": "5MviKt769NJGt5gCwXhefJ5eaME4v4bT2tz7BJFrd84UFBKCTeAePxKJS18aqfpxRR4co5Pi64kMrCwBY6RxYF6u",
  "key26": "4fadvVGsi5RaSygdTNNFoksoxkmi4ZNSwzrvyShw8PZptNgNJev4Pj2EnMFgSySSDZ3DFGyV8UYyLSMhQXSEpgAT",
  "key27": "53NQeUgBDrX8hBpU4fyCsZaEPckj3onEbvmLYkcEgWdMaPk7kFpybVUNjAuejHwq56q4pSBAfhq48cQP8z58Trfd",
  "key28": "646yieoTkeXjJDTr5C6eRn8Z6CmPNvahXy7P8DKkfEDraVd2hdYdmM8vaEdrZXFEGSjPvu8mv9YeB4xeSa8pfpzh",
  "key29": "3d1fxwV7gWeJh8QP8YLAJAGTHpzeFabWEsucqVjHwBHwo4dpjkeyJicYwEh56KbEr8e6F3s5HsK3Y911LzsTjPGE",
  "key30": "27oJatBZ1zqZ5U4rihbWL5pE859yBjDafqjFwtEaR9VGxunQuKS9hPtg8RoDMfZ5LrL4usiZbfEUvDTt8ULWKYdH",
  "key31": "1xcJ2HB8weZC835zdBLGzJqhuBCD1tAFSVHbC6ror4sSdrDc1JeKTCoEbnuXnDjtBhFtvMwF1PpKShtHtNUWdvb",
  "key32": "5Q12MqSxUwqxHUsajnMRQyXDss96dU3g4nrbSwtQDEJuZoLj1zxgTnVsZz9fThwE95WacGDPfKLQSkUF51yseLtc"
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
