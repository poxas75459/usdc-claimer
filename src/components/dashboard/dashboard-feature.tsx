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
    "27mje9wPJRUPm9fq6QUxsNbHGYkkVTa6UMXdeyaesUSmxGT9cdcTVw6Fqtj2PzhLnxF4PdFthfUqxomMZ7aqn2aP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RmWYeNknxauwLuj3apNsFQrePz25XK93Y2tDfofTsSJXZru8ccjUwq3KAjc1CSyXyg8jK6Stg5vJQVsycpjfBup",
  "key1": "5A59rrRkaeKQTRqm33L2J6cFKDRcyN23frkoUvxx1xcCB6GW5h7RKVDPp7eGpwxq9wowAM8pz4zVD1KuvvNgTGZk",
  "key2": "c748JXhmzVdNWd1TfBFC5BSSJ1TJziD2YqWqTstUz3kL77pHYrRHwLz3hdozYBb2LSSzzcjri73gsgMSiRNqLGj",
  "key3": "3wB3YrqQmEH4TUtoWEYY9mkYHgRt9gfMSFERoZpzDT9A1Eiz7X6s2ccw1tqPkHWsDCrUyXwCYYcgp9CESv91xWAh",
  "key4": "zTKbVJKbPCEjNJF7jJGmDHAggyCutEWVEDoJ8jkBx9wftdMdzQFL5ueSffgxrPsAvbrmwFa5jFvGkaCsrfJoGGF",
  "key5": "52PWzoDwMFQAgbJMqPhtkXvb4FsGtF4WKeRFpZstrBs3oruRWSF3V58aMs2u8HYKHmDKeF5CNsjfgHJ4EGNzh3zp",
  "key6": "4nEq3R78yRjEAQgq4m6XsBXxDSkwYgbe9jZcgUfV4ttW4z6EhfmfyP7a1L8rX7zMkpwog8WYRozQ9otGFUkgSeZu",
  "key7": "Vo53AvzcUNftSnaeC5WBP4MDWkisoauBuJKtJigJwsUGwY2Ky12ADRwnBP2hD2UCQSPxrVYqiyLAjEx7xEpWAa4",
  "key8": "3wFgdzskazieSjggHnhJLAvo3sMcL5w8f6FKagnagt4mrV9PCCPCyYZkKBZ4DFoPoBNMay6Tam1Z8TGrq5WNTuwb",
  "key9": "3yxpLbXZtsydTqvvatUcegYQtNjR5gUKB2fJJJAtaAPYrqwTosPNLoLWR6KZiT8gmtGLtj38vmGncPuhp8aKfHtm",
  "key10": "5AKh7HcfMz9Wq7oHgqGkTtcpsooQh236LQCLBcowfVwcCpMB59iaovoSunP1zWZ3r25Gjf9CzGKBAN1mA6mzQYfi",
  "key11": "2zuT7xq1iH4MtNDyBSzCkVvUvC4PLUZnaDXyEYSyHZPUjUN4B2pA6EKiZbmKCsf87KRAGWMWh5rh2W6kVdg5SZ1A",
  "key12": "9gjo2tnjtDm9HqU7oz63Ss27VHUuS8GSDJF1wVtjY6xUyiDxkDXnF398W3ZZYS8vd4dkLkaAsgiMxBmx8XLdkm7",
  "key13": "GwwcsewgHKKVehbhYhdsakav548Kx9kM96GgfbLhzWNsrJEiE4eZ5jK3djXwYD5pczdshioWTp9iv7VGUNK3Fe1",
  "key14": "5vYEvwmE6dWAvhV2oiJA3jRPdc8GdySKx1CVdVSnW1KhGUnrJA9CHGHjnpbZ9NDrRDmp5WBLuYefwE36k81ZBZzy",
  "key15": "5kDh1RFp2supiP71kz4ZxKdqepnX51B2pt8swcvWZfcReV9U992m7uFsow3zGeoaGynGiYGprvrVt8aMhFgKhaeq",
  "key16": "CmNGu3UGdgDk3iZ3cAQNkEq3V78n2GvonNoooeKEDhDkJSwudUtxREfe1aBm1UHf6P7m13SX45e5vty5FQgqypG",
  "key17": "4cHiwhhZoJ3Gb7Yda7dywqZ8htRvrQ8BLcaWDHaxNSAtDnnf8PCutdA2tvv3unufN2KP9Fo68TNqadpfCf8zK1kk",
  "key18": "2ZQm11pESgvM9239WfPEEmmHHediDJZiV6VQE8dFMeSdVY6tGuPq6mtbVHdVJUn8Jo3w2pWtrdepNxXzFc5PZc6p",
  "key19": "5C4Pqob2MaMuXYeomXLbKqD4oBuVZCW2NVJ6FD2goQWhsSgGdCP2nH5YbE5SkKeb6RPD8feaMaeLGLcxsP3afpN5",
  "key20": "5ZktVJwzgDQPVUpHEcntcRyid5e5zBzDjKkxBa41EqhM6foEZNBLHcmB6QHvSPkCjgeAj1MfKxziatEnSjV28DZW",
  "key21": "5ZxXcRHLCyGL8f3QJYD96QrDsn3nMfoW6qB1irtW3FHQB6Rdwx3bv6AhGrJGVxjAmUapw83kjMbqia4XZPxthX25",
  "key22": "2rLMRw7r3G8tjmmxEQbbV4aQ9YfPjjW9zXFBLqAHSLBcSt73nBxjKStKaXM8knwdEe6V8WzuFQshp8MuYUCDhAKj",
  "key23": "2p4DvfXdL85a7sDRUVovSE9u3QprLWq946qRFGnoiggH8PhXKLhoq2bsEJi2TKBs2gmGRkJyMTXA1HEZx3TcZo7J",
  "key24": "5MyAv2fwssc6JVCX5Y7VtnsYLgBpK15ggzheyS5TgcJuaEvWVBiJWavrF565yH32CftnvG1nWMi8hXpPyQqSPHcr",
  "key25": "r4jre4SCVcy6QdkPenReEgocb5kXoBdsJpkABo1PpuH28783KgGvZvVAfpviL47Syn6W4EoC73QKWchXQhMiLLc",
  "key26": "4Ej5Le3QNzCJHWKUKerf4T7LcgY559kKmvoXX7ebNYfLQgkQb9kmTk9MBZELiH5JAfFrpC26VnvfPtFEc4AwFHxW",
  "key27": "5qVPBRuPtHyjD16GQNFuxuZzy5Wykv2F54J6LgT1Mn1W517mxTGmL5Xg3MzGe2PDzDBKH1YUmYgL2J2n4K3G7tjg",
  "key28": "2TPVSX4Vbw9JakdRupT9MYe6jMX5sF4i6SdRNEY7ecizukSCuiYUQNSQ1b3fecu1tPY2AbSGEQXna96TtW5KHkfc",
  "key29": "2EYNpi8hMDeM6tYH3mzShpZKyR8QCpAG3vkDmTMuk1bzKxrcrLByppoSyyriPCeAYW171HLzYkzZyNkkAMPF3Dfk",
  "key30": "4cx38GjddwNPMk6AEpjN9H6t9Q4yj3H7MLMM8NLnWcHKcX8aXjpQ8TUTwp5TZjxQ7SXyUfMvxmq1ovf9rQi7n81T",
  "key31": "5Hsi7AWEZHJFSkE7egtTf4vjhsqtpY67w3afdwuSkPKKUupoA6JhDF1PuEbHEBMUoYcmDPtU4oBKa1VpW47pP6uN",
  "key32": "42FuFuwpRi8GRbvdjGgjDLzsH5DKXs9BdYfnUmF31Vgx8E4GfgmJ7Ha7RRfoFPbFvYCBeuyEoJtqcUkFBVziGDR3"
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
