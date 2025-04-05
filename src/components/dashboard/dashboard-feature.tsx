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
    "2qRt1FqTDoZCnbxzLApP43G85ZuvHcRkXRbw1SB3aC9HcrCDvRQCnhDMrL1ttALNnkLwszsAF7wWUZ68HoTvhzdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PX5MpMhjtTSp3xVUfoYisBrkfYH8i4reRutRMy6XSHkaJSvmSq4sAz2MTuVkiHdsbcZaX4zp14MomFgZnUrx275",
  "key1": "57VooQnj7R3isXUM5ryuMo9XaDCv6ZR3JSPCRf24wkaTvQxffvzbsa1JdBB4VCTyorvNUdk3ciogipWHit9vYLC5",
  "key2": "2wUDb3RmdJJQRJZMu4myK6gBpZsxHwnRDpp5zrW8wT3TzFYQqM1vUhSdTKMPQJmDyuZfkj55Ej4ypiXJ2cA9Ftrz",
  "key3": "29U2E1kmdjoAaY7n9x3C2nsM8S6UfQA9oQWU7Ws6GKcSjdptyYf97LvZPKF1Lj4XprjcguTRvF7nvWFeoEkxBo8J",
  "key4": "2Jfmxik53ThptF7iNH1KJh7KFLhCvwFSd6p9S11PeCShnNdubW12JPNhihM8KXXB2oF1QHJWwXLov96SRxRkKGha",
  "key5": "4JkqLjhmoyAxLYpAFjnfLysn4xaFbUjogNfnw6PQJqisXiY9fxkFGPgS37tP9MGxV1fF1YfYrxU7nm3caq63pETo",
  "key6": "3szhHuMnFq53gKGLLRBUscHPdEHgGLtxVtDTJEztBm684WZ1KdpeRjSeCZfMfJUvtbGT2Bm5P2xH6vG6odBDqMXX",
  "key7": "4YwEXGEs66Lxkx9BHecjszvYhjXjNC5dec8XUgWzMFZJxfDiDZy92njBkgsHjDhCswUJ3urEwj7kJwS8cHzf5Nrr",
  "key8": "4BCqc4o87qEg9q8qsMfYeJvbiFVjYcdgtFN4sYQkHv4BmBs6chMWpbvZqzdRT4eXTSWtn85EuhEGJWJugZmTDC6t",
  "key9": "5PbU91KMyBXR2VDRBtNkx9cGFY1aJqzK4sccffbbNA8AhzaaxeyazhddVNom7Pth6PLr9j4FnTu16LiCkvC5yzkS",
  "key10": "nA1S3uZ6C4P56Rz42Pm9Ay3Era7FHQoZwx5MJCwwBA3shXsZ2yHyC5kajQceUm2gukHqf1qrP1KwssbxCXdSS37",
  "key11": "tXxDrF2Zwkt5kbs7Sp5kqSeeFDAGXUJWZxhBzHEnba65unrwtG3bWxLEsWTwfoqLxeArrTcEmHxk6i1bUEVdqMM",
  "key12": "4h6QAoBxNQRRWp6YLB1yFR5PQoRiotf9yHZS3qPigpWxsWHTm424pJfZMcCg47ZWpY73zNnzz1qA1umuxsJrQgr7",
  "key13": "3kbRESQxCWkEfuSJLjUyQX8JBQmNzcXN8LNVYJNZ5yYTxavtjVSgRnybm9BwkwCQGHDShdtXqSXX97WiPK5qRK9S",
  "key14": "3JEKe2Wm5R93mapCCE5CoctWud6AkaFey4RWPiiKy47FZJN9ceEgPsdKGNorB3nbKPRyU6kAEXsYen6odtJkdQgL",
  "key15": "2XgLxhgSRzcHLZjYAN3ZkJCQqoZe2iDcMLnbcNGy3tRhDuUuepNgjy9rrdj9kRfeCQPES9aBo3BiB3VJeoS46VKg",
  "key16": "42PM6rf1M4drF2vCuQoMn7iDL1WVBf92Dk5wsBo9oVrWK6HDXygA3869xZP8y5CvK3KHpbRUrdrhn6anUFNvVYhY",
  "key17": "4CA68Yw3aHD9jvmewD2tLD4F5CKHXbBH5LshFou7Z3tp1rF9HYSKbDXoKy94HDnHgv8GQLmAiGNC2nbHEumZdB59",
  "key18": "3yswha3DmAr1pmzZShkxLpHo7HkKdYuS2jzwntJYP8rhECfMmk525i9kSE3JLQ3uiprCYnDet7eaSoo6dVMAZLJ1",
  "key19": "H4SqrgYHdXGuk6f4L96RtqMCeKpudC7cWtJ8Ax5dAuYG5HDQGdzUnTT7j4VuWQd7PDJT2wr7c4cBF2Nih5QUaDy",
  "key20": "5AjcchKVZ42AkjKPAP5SthddWqnqGRjy6zpGha66vCVCi1Gi4fCFdfJ6TdudxusZGZqZRnfsgERu9wesq5oYzzri",
  "key21": "3BqsDdCZKw6z3LnsjkUP3W4DQ2wotjzozNPkkqDgW3S4M9FT9F4t2dzobJGMxfqB7bJv8A424QJZ7Qx8NEmMgNX4",
  "key22": "35QDqziWo7J36ov2qZvJhocmNxbyMRa1KzZF2YUEfhC5sd86abgxR37pvuD3r3PBCzaj2UF53azD4op8pjKz5YGi",
  "key23": "4utbFv6YQSLbUkGXhUp3QNThaU3tHSUzMAxkyJLMVZqqrxM6uPmoL6Fv1dQjte3mHL3xDqDBVG8CMay6nDfry1rA",
  "key24": "8E75Lgc5DsbF8H4gRTXAJf3XBDxuTwfDnEh9rYwjCP4HQsNgxXpisz1tcKLn9SgwVTB2uJeZJAutQghQv9mRh5E",
  "key25": "epgeggyUUGm5kvD8GrmAZx5KGShzrokyTAzE8upbFo1p7n7aSKaCjZ5Pa4GTfhYXNTL99GcGWaJou3WuPUFD5aH",
  "key26": "VEfBSYZWrFXmJ8qp63GXtyfMkUKPQThdUMjSQurotwDdb6EmULJh5o4D76VkrSFDB6PDZTfAJK2NeHjwvXgtnVL",
  "key27": "2eVf6UFKHQ7VQRofyqrLtxyvT4A9XJwdm5jUzYaDqHcEZ9scyeK9MbXEBFoLxfM4HCDKyr75c747CWBiBrVx7K6k",
  "key28": "2Fg3f7gvTGBwTDJ5ngG8wajqMU3o3AVCxeQ2qFp6S7tSusuowgs9qCeUegoSSaDaWtkVTGEXQsj3YDTaYnsLR6oK",
  "key29": "Yn6rrK5sxL8d81ezq41JRzx4c4uws2THrbR6YBYn9kFN1xrBZHxwm58Aj4htNeXwqj6RnMkMPrWiCa7nK1Zeew9"
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
