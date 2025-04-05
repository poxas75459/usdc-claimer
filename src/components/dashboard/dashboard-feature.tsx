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
    "2rfjGrQxqTefJK3NkDEQZsEyD1iHbr2aUx8XtyNd3AaU2matZhQSp8yH2qx24vXQMFUooRNowTMESfdcBJKWW3Kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "646q2Rgy3qQhFqYVwZPScEX9frBQM3oW1nCyGk9GrA5hgGuopgcqZJ1Qbywr4U4bXJUysH5a32FCP2rXsCjXQEPb",
  "key1": "5mEiiCtNUqPojRxGs4RwmDxXExwAuegQyhu7zosThkN6V7eceuMzx1UHNn2A51kSdf1FW8cj8U1Fg1riCZ8uB9tN",
  "key2": "3w9FCd6SLVN2bv5hA2XgFdfpjovNG5DrsY7ZRbsrAVqcpZFsFQ7CGZRrRheaBCgB5e1mHZrBPogvNQ8NrxvuRoQk",
  "key3": "5F86tLJpfQPbn7mWTG4Dt8gpNm5LjpcmsqsLa9GL6dXK4FZeT3LnkZh6wB78s9CBLq1P7RFf46EsT2f7X15Hzg5n",
  "key4": "oa3h8Nd4w7WLf5vwNeTfTrcCSixHnGPzXcUfcNRVuo9nn7FQTz7HMRp3zTwo9g5sDMMxje2fzXVBLGy7o9eG9Xm",
  "key5": "2GGEyQ2v3cAiw47mbtBBxWnKMW9HNq5zzuD8N2ay2xmeH5X3knJrJ7ZbukYmQx6H4Aah1115ZnBivQjuPWyZ2W71",
  "key6": "5PRRvsyVre4xEeDFXXBbWQ76XuuqYyGpVJPWEWXA8JsUGXhSa4Fa43yoBcP96NrrAkein7gRNqSjthqZ7Y2SwrTX",
  "key7": "4KKQBkurBkPizpg7fLsrMv1oiEW14f4u8gGgZFNBGoKM5S72PtCSEpoAVAw5boc2f3Hf6E9KNUJibcxG7BQaFXoY",
  "key8": "3fDeTuhUziNwZrcQczxEkTS6GEwZuQnDRpEU3WNqufwKLvkYsLa68ikvM8EgHxCe49EUhHmXKyvXriUpojoDRRmT",
  "key9": "4ytunsZN26innx6EYVcrM9fwukbmQEDsWTqTkkatWDkyKJM19sdQejMXZoAMCvykRit9bvnDThwTBcpHG2PYdbMm",
  "key10": "5w6nJ7p8LePoZ3ouYNiAYh319QiTFn3DGJcPWbXe5582betZDLmyxpMcfSN72z15QC33UBnpme7BKo5gdQbarUhn",
  "key11": "3a3tQanGiwroNDHbRZxHPvp4sj88je2FG32ky6aHy4AfB5BAw4QfN5WsdSoYmvCvdQcmWMKigBymVPcEvb6bcZAH",
  "key12": "GXhfpArjrQ8PwWjAxd96ucnZbu6uyZCQgWnaXndTUAjSCpV7BaiuxRv3oUWjCoyUgEzPPGo4HLqxRNSw6C8HdNf",
  "key13": "5cXWYZdP6JoqLUDRvQoodGaj3zAhvS2c8tDxZJuTLoLqz4ry1Y1r6pgSYYzov499mzY5Cpo4eohf5Ww7G2h9iSuc",
  "key14": "5qnyAWcZZwADhv9dFnJEzGhcv7PbWfSFy4GKexdT3sASkkxojAqH8rKVn6yktgM1bB5dreru1TvXfBnDP9ijqpNy",
  "key15": "2s9MsFaTD6gMioH1E9fSGDDMGbkyVnx8eUtH3QDZb8xLNbG6G1Am8ZFUha7fyz8xjxV8ezkWAEMZ2Q8itV9PKGXZ",
  "key16": "2pTuRcDxt4ZUekeNodjTPND5fZ2bKTkXkwfCy5KyfwxVv5RVGedV6drTbHeRnk7S1BupaKcM3V1uViBTqhE9VreE",
  "key17": "tqvaPn9PyzdEcxxDe3HGt5cpLg5p5aiYKkvquTbhXEdLwm8yAy4PTvipN9aA2D6Ec5mAVrnMgmeD9pyUWR7zyj8",
  "key18": "5bDev4BX36DJWTwZfvhsW6y6HmzK7uyuEarXgbcvMUEf1pN5YhBTWzQ7G3VEf9dSYNdpYkMquG7PXPxBFgFqkKoi",
  "key19": "4yut9Sm4VWsnG2PTYRe1SV2Se9Tr2C1hC5f8E33xAviPH62CAi7MacNKhhfhMP2vAC3wbwzYU65LF5zbfRhuHD7Y",
  "key20": "2epFB19XxMtkREh78r2iitnFw6WKf6K8KttGYc2ErJD61HFst7jHu1QaoivDtfydqWWAUpuMk2rPyS146nFGmbxX",
  "key21": "3hEK3pwQmGk3foxHANVtD2meYkQrgdMy1Aqi63RocTahKamaHp48z76yHCJrvYgYUHtFkr7SmHKoTBY88skuFsBm",
  "key22": "Cq6AJxvAeb6q9dbwKRBYF6vNpKSRXxLAMQT34vyZr9YQB2PRYKMJGJLjq17ZSWd8Qjg1QTK9xyNwzzRwS9gTs6k",
  "key23": "5cjCtrEra4dXnDDLbAdNo2jFTyaWtc7YWMGWMQD1MyBa3V5c6zAC94bNQLKaHDMa2mrkpA1Yu7kETrFecxrdsEUc",
  "key24": "4qU6Kq4qsDJ4Q2piw7dKn1zjirW6nUHzUc2FNuzZpsP5iHiabwVn96UPxsd6spnCf7qmn4BetX53WnNrxwjQ8b12",
  "key25": "vGmwHGSLgdura9hoPRViGYiyEDqsMHqtWMBcwjpq7cVN9ok33kW2ZC2Sbi2UqJZzGKbY4gSw3ioibssWUfkWJFq",
  "key26": "3HiPQx5xZBVy7MNfdWSRe2CQUbXGM1YX5oTRA2kDKJnJggzQoJ83RJgHSqcBNDYXrt4XXwaoowRYjo9LtKH4Rxmg",
  "key27": "3qMf44oQ1HCdWnFKEi7pefk1VKe6Xfoyfhs12QgYrBj2K4nAch3FHrv5b1pm714bTaBm7Gf3FzdmhNtpAjRMwPwk"
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
