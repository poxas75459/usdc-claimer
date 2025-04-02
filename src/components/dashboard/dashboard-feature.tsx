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
    "2j7kSh8bgeiXwi2UJStxbfBuAeZHGuRRaQgLo5wW97THxBAe2DA2Z8QtE4By5n3aNUnVruroDWeCYMmkKUFZLk73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gbe6X99RnbD6aZea9j87Zy42yPHqEPgZYPANQTi5TbqBU5EDAbG5dVYdmDakqVfcWf7ef8enoMBRoBkrSMRtTXj",
  "key1": "E7gfBYYZCKCJ8GDiZsdvv2FmqwxqvuwvhX7zv35kydiDvoWouQJDjqJcNezxT1TB5YATRFvbmfrdJYWioPKRJcE",
  "key2": "31dezkqK8RCkBeDp8W8iWCLL8E9HpiJLUAzoNRDZwsBKLjvTYg9h5nN2rWcaCPmg96YyQENGypwpgu19MRiYx83M",
  "key3": "2k6XfdqLB49qvEwJthpWHxNvnwHSU3cELK9J4EWJZEH47UiNEx7Yjf1cFVX4godHX2qhVpK5eeKterSLmL2p92DM",
  "key4": "3jHrqWzbdM7icz3mKHmNoVBDMpEreBydKGUMsG241vK3GJnL1n7vd6rStnyHUyPkFM7LAWYooeAbPPxXQTndAo8J",
  "key5": "5HxvFZygkwZS9hq294LMZBZbWoEKSucJnWhfLUHQzfqHoZ6WfuBbWbDxBfRp6cyBdSpx6E75ZnXrQrr5W2JJ4yPS",
  "key6": "2S6NxiHUQkEHdKz1u4otAy7hErfqQDhMzuMypCt6k4zsEMmqn3HpkyguiR9FHemo84W5y6KpjTW6i4hrpxwn3V6J",
  "key7": "5jZUSwZ8kxTwdwdpW8frc48cpJ3V4FoLarbPA3oH1s6td43RMZwDwPfKQPTpCxUZNtJ2KNmu4t3ts5Xq1oU2m1by",
  "key8": "3rzYpskSg4Y5Hv3GgLK2BrGE21zJUmC1ieZozfU9Xj7FNYAgpRfj7rv5hvB73hu4DBMf68fQviRRQoDtJmMNjyWc",
  "key9": "5iofYssYChJVHqWr4sMp6q947VyhfaWQ39srcJEhTDTMfBVQxHLcciYVkqSZbB4MxfjQ9QVTimZn9E9hydKawuY9",
  "key10": "3DPtqxd5WwugoEbtm6gM9nyAxi48VTW7SJZNQTEgE9EeKe8X6owzdbjYjw5BZGLqgXoGedNruguWSgqCwBcURudN",
  "key11": "2HRFCPn2jYXtZyHxXjNYBC8vsJUaGSN2aGP7m4gTtq5HTmZD35Arj4My7T9s7yxmWXzUc68mkFQ9Y3re2ykD1XGT",
  "key12": "eMrgKVynhzA7rYbrkmoNf4r5UsAPAnTZKmy9iQebkAWby1ZA1EHHi8XxpBCZeGShw1ueCyQJWdHstHVXxSghL7k",
  "key13": "3T2uKmT6RAYNpba7x7rt1gdbMBm7Wt8FpF4ZzfqiDBbDUUQBy8RvtUTtSPBk8V7dPr5J4K9gVn4mdaRdg6hXGKk7",
  "key14": "2NurUGnTE11MZpc4yaXTWj59v8wEJdNgFNYKp3murUYXKDfSUetcii6HpFMTYup34hWnG68TWtGVVeyjJZKy7jxY",
  "key15": "Qm3MxX2vfyZSfCZ3yXFfdc9C83d9hXF2T9tB1FPNzTqGh33MFsazRqARH4AeEuY7ve4xVfzeD4Q3hgvCUuedaon",
  "key16": "52cWkLy8YNMZsE5JGrrkdPqzfjtcGFCfoyhUUPav6vcekr3dPdfitJvMP5qTsE16hCaW3wieBr26PnMRi1ZpEVY",
  "key17": "4sJYWeYzpeE9mvJe7xWjt7ySsvKg1aVBuz8TnnfH3tGzENsbBZQ8sXLBtimibpubF35HZw5ekoDYzjYqtT4Hq6m2",
  "key18": "5eJHEpr2fbAPErg5Ecu7G1cg5W2uvEngcVLVvDSEt5kEXbXHdiVxfM6PapLrvAty4L7pHWi8WkNo5uMDHuYn3UyJ",
  "key19": "2YTu5ZZvFWCNUeShmzWQTP9xxm9pWAEhJrprHYMabEQWka3rAPU4AmpTs875cCNaskrh5fC7CLgrXMVLWa2UKYHS",
  "key20": "51eDJ2ehb2uFUxTJsRCND6johcMAuoQjxPoEpd2vHsCTxJRovmNtCoAeQuoCMb1yy4MNWeBxktxM43a1qPHTQoa1",
  "key21": "2Sd3qXPLvhiGeiEtfbafYs4wJCZq7SkPTcomrB5C4WZ4tDeEgv1dP4YBgRKpyaDe95N5MbC2AhcXQhS6bX6JywqK",
  "key22": "ToBsGtjtKvsTY2zdwaSXaffLW8RLbbhAnnmMzowx3iF83rgKVAgf789gZWGcaE8h5wzXvrnzPEXDZzmDdeyoLGf",
  "key23": "5f9iTQktUWfTbtuUCWywpC5VoYakTpFSKDD7664YQjfcmZm3bGfdX7C9DoAr6mR2Jm7hBSKnXjEvW2z8WPxKCqXc",
  "key24": "5Ec1khipZYQ1ugwTZRCuSPRrbTFmQgWLSJXQ3Ph9S1VYLijLC9MtPRzRBnRzzYbfkv1WzPzi1fbaHCnfgJRpbsAg",
  "key25": "4AVebyW9SmuLrxB8jjYxL2JygXWwvqjgocM4bYXnsmdFg63RAoMX2ey8uVgLh5t6KvwBTBxUHGftwj95GhZTW3LW",
  "key26": "2qhMmWPNgGGKNLWeifGETYFQ7t5yjgFUv8GZKvjv8R9c2gr4gsdFKm7SDs1cuhkBY6ZX73d3efk8dn51YndDLDZp",
  "key27": "4cjLhZgLTwa1rtZfoK9Yqz6pqibR23gfBBUc6sURGBD6QtJY8gqL4iZPVbYFAgABqi3aaRZLsA31hm8vurkDcdvn",
  "key28": "5HCrN1NPoE1i2G6jqR5JenRHKasMftfedHtfsmCWi9PNf7EXaS613hoLpMcKMQank5QGGyiLzcdfkxgyZZNJLf2Y",
  "key29": "4RChn1dGxYryPdLjWtpiUPuBo5qJbQcg5P9c1URPmGNijUad3tReyW7bqmCQsFtGXTwjFRhkg5z1YATs7NdLq6S9",
  "key30": "CYLPdgvWsATSjLL58bdzJQLkdTWtgCspViJFcQWrE1APHm8sNtEWtwn1SwRzQU2igXrZAWRvrSBe46ZcYgZNZVB",
  "key31": "3Z8fvUoYKgCPMiPwtWSpwH9ZhVSmhVHJn5bgcpJ5H4Qm18f2tze6myW2VTCofg5EAvpVQPC5g53CWtjDPVbbbgrm",
  "key32": "2mx2GGYUbHEjJz6RL3179vGK3FX3TXNtEJQpkGhwzYU6fhBiKT6NdXuCcQdLBwdmymWyrXRn3Ma3Pbm8jifhP9E6",
  "key33": "hsAwCGcMSbj1XsCwfJCadZ4HnT2ofv3NeJrf53sCqsMuoMyfDKYgZmwZ92ehDZhAMLV21Web6WYvSmaxn3iPasC",
  "key34": "5qiLHWrb9SL5BF5yFsTW4tw1fY6iYPxwqgeap7DHtYV4jcP3vZ3GtvAHKi3Re1xouEiKSS6gJv4DccjewLA7GKLf",
  "key35": "4KJJtmnuQUuuGUsh9csrwgmFM1FN3LLRPXbzreajqfYoUdTjSU1aaaxnGmbAbhLhLftfsW6ijd3A43KZ6zBNbfiD",
  "key36": "4yRHE96UgRNHCjGkTbgn2XdxtQqvo8neM1aJD25wqYx8LtLe1VuuvkNafWknUt6hdkSJPsJ7xgczbuvJEx8D1Vr3",
  "key37": "28pSSBQC1Lhqy2eXg38G51z2qPXYChjopaT6iMbscN2Rd9wunhmR9JtqCtZaB9pykj5PropDXyLgUJwjWGNGqNiG",
  "key38": "2mUxvJYYdrSDwX3S51nQEg5gm4bh2SRG9nCgzJjWGTyBCy4cPAQjieGYNKqr61wo4DUTW3pA6nD6cLWFJ8Jc9L17",
  "key39": "5Nh91J35NRPWQMWTTSr3KwTFQApD2z2WxoUCXZovWpYjMCVn8CTCx1q9h7SV3347xfX2mnRah9s2cLZFS77vLe3c",
  "key40": "mvJdBcombaCU2oxUxmQ8uy6avfiudpRM8ZJRSryh3riYBMUmHdR1gNbGVLPrmLBg1eCS5hjk7s4MW562EX51LVM",
  "key41": "33YdVW8dXr1n47GVqix1bEFckQqq1Kd7U2txsnqBVWX5FFQUir4DpSgM1MyiWNgryzqE1ZQxwPniuFjM8vDyoktA",
  "key42": "3VeAwfkdsvCXe2mXMeviMU1vDKi7F4UdqMFrQv4SuX8hXgyZcea66Hp5k9AQCHrksoDCPhgkRrMyUv3gehhK6mYr",
  "key43": "3GEiPnoLkf28xCKuN5bfXtPJoQVqNPDxfGjjxNGdmL7aFoQd5ri5AUqmDN48hdYrQmzeZys8d1beoALS7tvWV8kq"
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
