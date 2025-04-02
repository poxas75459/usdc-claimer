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
    "4XGjzkuXGbWWpc65XdBT9UqpPwgdtPNNmAojVbjJ8zd5TSkyWuTCeQNvhtGCxhX2UQxYv7KWSzVd2TPtoFeXAKDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QgRJaJqmNpiTh5k1tfcRi4vwVHSEpvt6RJkqTWv8HH3xJWCan5m3ZLntjiHoDteDUCndqx2BeQZNUJEg2RUCzMX",
  "key1": "Ux6VcuZrwcbDiMKs85ekFWGCvZRwNGsSdu4tRx39x9ez6ykZJpQs5BQMKNgjSsJBiQNoa9vAgfwaQ465ghPC8p9",
  "key2": "wWGqahpeVBEhQLQLbUywR2DXFdBpE9YRjijTVV8x9oPT5Wya1D4pH8kS9tzNi1exhBe58a2a6awW1eAtMYN2ZaZ",
  "key3": "4xDL7gzmC6ZqC8DHvQMyVCGafpo45qKSuzxEvuJAS4GygEoeYQbZnRGVVigcLJFyz8E23omU74tdvBHu5r4SyRNb",
  "key4": "5EizMgXvjc8GsAfTPxvoB4SvS5J89zrsViv6fZojmNVeUhp8WQ9zvXr7JoD4WqGET3L6Rvp9bUGbDbqN9MukQh8B",
  "key5": "mgVTU5kkmnhDvgN91fTvdQhaYiKzNhrQpbCyz2kKRNqfAq6mhhHJ27zysY5U6s3S1veVhmevWzNhTCLR7HeKZJx",
  "key6": "3vz7zHy9xwf9V1mgVQPVxJKyjfxziuRKJnKWXXsXfrnBqa28C8EerZpHjFrp4NWm4yYonQSV6yWTdgm1bDpbQU2y",
  "key7": "4m4MffhqQgq3kAeihVTbfQkKNipqcPuD5mML85HXqGWKmXxt52MRWwqD3FpzJaaQKhABqdbZ6th6odezRX5g1AHX",
  "key8": "3a16xPxCmsCnjjTgfMsUwnbFfjf2Tw4cAUGQXx2zs268wEGh1bVTvVR1BtAMdJnGoc13icA5XCQE7bEdBN8ekDNs",
  "key9": "2Mp4gibzZP4kzaMZfB5gkUCz7hT2KgivnhkaLADqi1uCw4dGbCB5WVTw2jxK556xY4w6718njM1aYiftNj3Y3CiK",
  "key10": "2A3eGiyL8sM63whtMrdtePAD7wbmwKoVAnnwb8D4Uo3Y5be7shX6cYCCTDizfwbAzk1a7McY7SEKwgaCyDDh3NME",
  "key11": "4pccKYqTcC7zmfkUak7Mc4ZCZsaJjdK42dMeTmRgb28mRLFfYQgFKjEZ2tXzwLcgGDRCXzgEZat3j7o3PVpuT32f",
  "key12": "4S5DsyY2kNYPy7mZeorSYurky24FEuepXYmY62BH5V3Friz5mrAS55EXafQ2GYmnUykhoTk81ChXHgw1NGrgwRZZ",
  "key13": "YQz8ZpyqKwKgmAMGAGBqVqgLFet64BNApFTgfGtGRqUQYhPwCXDiJkBNv7vMkWieA1tEsMGiHZYDeS32nRHXNCA",
  "key14": "4j4JXBUK5DjHXQhnpRBYDNKiZahsscifABk2EqAAiiWA2M5LHLVwoCzETgM5bhdJtThf6TTjnrrimYx65mVZcGDo",
  "key15": "5NxemoJvF1YyvjSRd1g2bbsiFte1Nf9eVavbPx58wscDgwLC5UzmW4wJKE2Jb5HDcdv8UriCjg17YbPMCG5mmqWd",
  "key16": "6q6q14YHDyNj1oJPq9cRJ2eWk83uCuuHe2aMPtLmsmMj1nnRg1Wx1BnkmLBanUsBHeaaVRV55CmkdGXXAsgW6aw",
  "key17": "3GvrGEfVDQEo6ZLT11UGpf9nA9WQQmREsPzNEKbhRpQNRLp1VLDaN7UHLX22JBgZxjWstTEKJRKwbDq3xzWPaRu9",
  "key18": "2M8GYaiZ4ZVpyuNiCTMr8g4VRZ5wpF6FeTv1MZGnzzFrJZhH8a42rsRZzWnMDkXAs6UUSieEqBYh8tHVB4cCi8g",
  "key19": "5ZsvjV4razmtwggmgFXQTGYqWgSdU8CNdi8LTigbJKDzDwJFseVxhJn8n17kEos2cfEiC3GgryaNTKwX4H1hpW7E",
  "key20": "2HhQVnyQLe684Y92GD8rZNYeZb5SGnADqTb29gYKTDkEzJBevkMfoMR2uubkuy9oyqUtJdUFgdp5BpwaErYyD5J",
  "key21": "2iCfgs3jAczBHTjpkdgCEjcjA6vUjKVZ9FjbiyVWpgdmfiY9B6ZtUfScNU5nitLRaahLrMNjmZ4ajR7rrsYeCqey",
  "key22": "3heCotrcfRGQZj99etjYam2t3karRsDGWP7WeUtUzAc3uW627rXhGWRD6V3TMZpM7hZpX4ynf1uZMgZ6GRJF2zxz",
  "key23": "4YpCS5pye6wyPND9Ey7vzyF44uArCjczPrBxkrciFAKHc9zvhT6uZBDpRLCdPKvPADpPWzXXSHEGb1JFSnkkCBZm",
  "key24": "5iXq1avdeGJU35KDtJDxp95LasjZaAYBBXg2Toi6demik1h6gTneiPJht6oFC8KgGvFTqL7iBkVRFbd5aoxPvyFu",
  "key25": "3XPjr62cE2aAGr5ZF4HWUgjLAXfFNiAMrXnkQu4CRfCWS1hfipuuMjamr2gufFkyD8dGZsnLsLCyn3R4VW9pH8gS",
  "key26": "42y53ZR9QfjJnJmyN6VfFikbwNgyfUwxbyjqGXeSrckGZx4cRN2pLdhD1ujSEHDydzfa56DRtGte7D3476HfHTC8",
  "key27": "5MZ9ZaPA5v9zVPFcenq6e6713F6vW7frDzuuiEoE2MrrZzXTRbmQ9R1fQRKcQ56wMBP34Agq3LE2Fyk9oMr3zvmU",
  "key28": "3W76WYsRt98tSskFzHrZy657nQDXFi98E4PMChpj36QFo5k5NZkEPk83ndF83yrL56F9gKjaCmxmQR6SJqqDsYNh",
  "key29": "LmnFBhumE7Z64RochRu4Up5GErQAAyiJ9CN8323C1yL3v5aQfvJqLq3XPX85muRbfBCSjS6xCZz2FPExxLkPMNU",
  "key30": "4J4eon7kD8eYb3pYsWmamUxhETj9pgqqhkjwkP71gYhXuo6re8a7T5xT1jQDc9t3bgJLqk6Q8F1ZwuzjVJVa86xk",
  "key31": "2vRo3qHbZTmAEXZwY5B1eirupcYCjUr7gAZ64S5u6rj7FERVDXhBbk9r4hFzQ2usUEyX6gX4jbqpCYr3PZX9Fvtp",
  "key32": "24MJcN9F4y7UGy3wG7YmvRUa2pDh417yPonusHMwGsxpwZc2RF6AChB4dYamyqa1rkVhdSQbQJBV9RbaJxbVUxtb",
  "key33": "5qoDpDcZkbJbKJDyN3bHBwMFNDqAuyWmZBM59wrVbTWv4E6CDSMgddJGY7qYebUVoxWsDkNhdwAFKhmEKB7gfM8a",
  "key34": "2ERGhwAy6kkp2AY8JgtDtxdEoDFfumAXJhiaGDUSSU8pTh6SWiTp82KNS8TQUTdah3x6fUH7rmYLDgGdEmL6Lrai",
  "key35": "4QfERHHXwzqEsAUNbgXmkQgTHfExzxBFm9PZzXSjT53DwAXxhYAz54H4cMioe5KG1qWGagJDcwYQ423RDAhjAwNC",
  "key36": "4MjewKBJPZtigKcT3J8zb2zAs4mqwjvBBwjEKhK1g36c3R4GK2n2dLfaAyn1ooH12E8AWX3YgbYCnJzSoHDb3EiG",
  "key37": "61tdKQd4ZN7D6zgtfdAjkCWm46JnQkmxnxk3ThqAyExjEcg8JN4ZUiaUyVSnPCbjEdDTgFDtghHKVMLHSpEt7CC6",
  "key38": "654nb8rD8JBDditeXpsZSNG6U45fevR4evocKTbtsHEoYn9z3khEZN65vaszSSrqZjzCqm5tAP6F8rTbD9fbDdWG",
  "key39": "5HK1UErFotEZ1HtADqraauSasJAAkaLxHNKcX3jo5e9T57SWjFTJw1j6Qs265eaUEkstRzx8BUcCEDWsPyYxHihG"
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
