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
    "2SWvFSc7hqoiTCyfevH569FHityta9NZXnbCyuKHnxwqjbmukerXUfGVAK1JDsPZQiKE9UYaFCP6JVai4mpWyEJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GzTi8AKGuN19CmZRxEBfc2uCwSpZRySE8YF28fbr1s6PMoj2h3PH3ytv1MPG6sewF6L74GcK1JjoeLtUpEegdNt",
  "key1": "3F24HyfRLVnbKRarUf4Ab8YsVemphk5sJB1rimUNSt1UzXBhi39RQkHpY3jbQN8QcwMewrdB78KciHVHmLdNJjQU",
  "key2": "4owJpJ48fcKLQcYmhDCrx8Qjk9hVS8BxJbaV7SSeZ4mQTAogcgW1Yupx2XZH5Snhh93diekNmngoYRoaoANpjLeE",
  "key3": "e4jegrds7CY6p9Zmfg1mWB9RmzLybhA83KcA21JY7wdVB6ZSzoriM6XBCKRgU9HoWu7sRb9gjeW8XQGedUMnAWh",
  "key4": "3TU7V1AFnAGkLw6gDxkhqjt2koTrxBYb3z82znYhPj36C89JYkA1XhGyB9umME2aBcYR49BK4KCqda1RxKTVeJhG",
  "key5": "2bXWJnWJm9nM4pSCbusvaah8GdFhUkm7FFkAUvxNJxPqjU5a7ytZc3Cj6wCth36Bee3gNUx9RW2pTHVusF4uBk9w",
  "key6": "4uU72zbm2RRx7TVV3tc3ovxCvNNMvvZEmxMHbnZj1onB9XgGBmeLuKKyvMngiyiTh272Fy7V9bx6MRSfR3VJJ5G6",
  "key7": "1PVE6FRzec8DBEbFbJyprTvgLc6HZnedZ49iaN1N3hF2AmzpB99wSrEp5i2BqMuKAjPzAa5LhyzawBTNDbmW9GJ",
  "key8": "3Cv9yzGjV3hi2ZgkuJFPSVgCatdDv35gExyEFFfhFQt67xQLfZvg6XUauXFXYxs6MgfwJ7bpS4vk5D8VS4pKcCdg",
  "key9": "4GbcNbLgqPKJGU9Mdpfnh5eUXziKY9MhFCakKXCNZqS7KYdsQib8A9imkEgnn7ZnyVoyYnz3GFzjGsAbL5ZLDDoL",
  "key10": "5xWkdp6ktMoMSed65eFKX4fUNLLe8kgArUU3tZ6cFE2z3m6uuw4AtgJUtV42Tyzpk7Uy3sCPCr8TQp3X59kq3dLd",
  "key11": "3W7YDyF7bfUu596PAXVUx7NceJrvHvcaUWFsphsnZc41zX9k1hdYxuVR1MTns6E6a5edSPgfnwN592ZexXsS8Dty",
  "key12": "WyJNXPb7TjDiEtudt5ECuGLW9PMQWxhjubPWqefJsH1M4x1gqCQn9RRDARgSMboECT5kb13k1jhGosSfHkgrife",
  "key13": "2cW5X8Kych3U9bJ2Rr9cnJjB3DM4kN2dauLdXcipAHJckfii3PCgqzfbnmQtp6N52o94RRh29AGDiH6Wgh2HMvoK",
  "key14": "3JqadfDxtyqEG1dQYVn8UP8m9gyg9k5fmKrHLrswHPSnotErncUCcaojfCAVFrE7vL1GEdZbBtLegPXKpwAQss8s",
  "key15": "sujizvGvNr7tLUxJhhYbzeXPwBMvM3qiDmkjUehx6WT6nvkpAzswFJCmuhgQB47AyQqBp2oJKTfvaCPWYBM7bWH",
  "key16": "2nRV83L4CKqbJx1mmQ6T9MY9SntVC7PfPzy45dbviVmnS9ZVD5352uuM35nWRbavBdRuvN9SEbqJBUngVyNx9Qtz",
  "key17": "LdYzSNYCHUP6FwCDEXsKYacD6o6kgJqayFgSX1sPLT4pGfgBizmKWuNjRjiEYUaxRQHcUp2g3cJQvLSakwtZxQ3",
  "key18": "5sK73m7WG24fbUWNkSoHfxGiJpRBcAg68GyJkUFa1efGn3ypkKkyotvZfawgVdTwge7HLU9rwakjeGHjR2M2N8Dw",
  "key19": "EiwwLq2kZiaPNEkS2oiTwjYmLrNHkNSHdSDD4Bwp6z8gwgZxdLcPnZFD4cmnDnXzh5fZPcyKRRZyf5Jred2iJ84",
  "key20": "2X6Tmvm3ew2vBrfQ9LWbzAQJw15BvZ5y1MuH4icJWRxaAMFHcCiWYevxAuFKKKUj2PPfo3Gf8ymcLv6BrFboMD8J",
  "key21": "5Lu84NhsXq4YZuHTczUW6QoqDgPW8VC2ihabGwEP83d5dDRVbKL1Fqco1ocMAwXanNMeXhsnA4Q92dVLU2g4zEDF",
  "key22": "2EymhwMgS3zUdcxadjnLsvFj6FUh76YLKifGNuDGpWNoiTVc7jW4QLk2zBwzNw35iY2vrBf3tTUbUg6gFqiTpUzf",
  "key23": "xStMsSGqUB4phikwhfX5ifYjKoES7JwUysiyjRt8BWZJYK13j1r8DEtLFabX4HJqVjwXZX4XA9x9zCwcXijye4a",
  "key24": "45e5DtFjxCCaRoY9dmdCrvdQAx2MpBXCDehfQXahjZZBqnefs9BzvPZravCyHEwaYNdEFDCciEoFpjqkwyaMyjj7",
  "key25": "5zbrMR6B8s8sEfHiuXCNYbUM8AYrcTxccVi587nXCX3RekQFsMu7ebdEqK1WFyejSXwK4z8wGnmDYdjGFou7ynmk",
  "key26": "52WaywJiB4gmPS4cRAgpK94xtzAiKFkAyLZVdEvAX6cFeiAkeuSDx8eM9CUZM9PhvD4MpE7ix71R9CptHgiDaHSP",
  "key27": "47uq2H3EgbxzacJMi2iPbFW36Rnmerxbi4mUJRvjMPsW1szNUZpoNDu5y6AKJGsGDKE6HaTQdPWfGotyA5AHd6oS",
  "key28": "3DVF73ddm68RYehAbjosvNt7K9KdS7jKc7Pg19jF7XCNVmsYza2brsRoPFc3m3xu4Q6TfDNZ6SLU6a3FQNSGimfh",
  "key29": "VjpZfJXyd9PAHsmRcjhsmUwWUcf1Ti8HxfDoEWT6FBbQ3c5zvNJ6qvfx1dFfJ5MaVR9SWcERWKd6jM8oADHiS4H",
  "key30": "4ke547Cu29NzSJrmf6xX8X7WM4GqrEL8JGwcSgoyBpJfURL1cnHHqcgBpYvvqAXH2mpnrk1harNFmsv7upd9Higi",
  "key31": "4NKJfEmhhNPJNhp5YmoQwqwxH39Z9dHvzX5SVp3nXt7Lb5vt1c6LK9LHLxjJhpKFFqYdGtVuoiYjC4cGzbtpBe85",
  "key32": "265xBwKm71oBWmNauM48Hf4TW3jGbJR7U4GnXCdoS5RoMZZhzmZitoKJxJD8YzJHHTuajNxECEP3NvVSmXWm9fcM",
  "key33": "5PjQm2pV75W17yue5AdnrmTqFBuGmZuDmP92Y59f3p1GU8Wn6XJLWEjhoCfkTXwQSi1zBCkBAwMbu1U6hYD3trK",
  "key34": "4rp8mAWMK2SUGWixaPqtACBCnV2Gp9xnNBJa1T1jsyxtpjuH1a3pLoEgTDNBSPgAVdg8STERNqLU2jgnJq6EP1cy",
  "key35": "4y5K8gzxaQSpDjZuQgrUgen7ZjkqQgk2sJoqv74Bzad4aaQdDAkHfaZ4ULmvnULFXwga7xaTVm3vtY2Dd82ku5Ee",
  "key36": "N4ptHjWEnNAF7gkFJEs1S7hfL3kCVdWGU1FoASZAWRP2NTrTYDNATAWXAnXjXEtLP1P2b4ssPg69BHTDL484rHH",
  "key37": "3c15pEzcWhp4raFbnwZXqW4Nyh7ewt6RXR1Z8Y5SPaPC8d1QVFBpsnGUas2MmeJ26ZtDYRuRAREs9zmV793k34ed",
  "key38": "4mxU1hfxa3uqeX1Esdc6UKb3foCFMXzvkksLvXcah3hy88ZtKaXwffmnCDUNrbfUi3625D7a9ZCoR6dDk9UqHkiR",
  "key39": "4cdQ7iiqHbgCajzPboBL3hFTyLy1z2ydxSzrFGVzcLRqw4aXLViB3E9EiX8sziusDrLevi8D3Eb8qmsmMKou5wKi",
  "key40": "rQsMJKbSKKtErRwnd2X8KGC5ds3WF5kdfXHUhKK9mg2kqRzBDM7m4w8TYfY91qTm2N1N13q3qBXb9KSiasEt7eC"
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
