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
    "4UXdVA3Mv3iJTutLFM2mMS76thZt4pBbvShv6C9JJAZrEDW7SZeRphfyMtL8ar89zodwZiizADWPmcZnKmZDzE1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XNYNaag1W4itnq5aUMEBa2YFUKZChd1HojUog7TVS7d59EvCdL8LeTbG8x3VhFbjWWAMLoAB35ijJcpGpSaqbwd",
  "key1": "2KNge7N4AZcHB5zAfFF3tHTvMuo9V6suPZWtd6jdicmYvpbEyS4m8CZpeBTo8SKyXZFY5GuMLnH4D4DiFsSk82Ja",
  "key2": "5bLhFKrPU4M7xGjgj1KTwz4oNwFPQFyYgTvCMytrnprx7nXfhPBbVPg64XYbeNBoSD5H4wkUYEapvA6Dx8XeDV1v",
  "key3": "5rojTHcgxrQ8JxJ4rtZvbrRpBXsADPPoSiSgE6CQij6Eq8ryvvSDM9RxsMckRbqEMeN65DXiJoH69qTNSE1arP25",
  "key4": "5phA89JcL6p3ydC1YhLHByX614NXHXjGaaiPNCVtS7LRVf8etFNWq4cmGMtd8Evg4eyp7XCWPZQ5Y4VDi9AbQpsy",
  "key5": "2BhtuAoyMTRzXFmVx9XFssCasTccjJaYe1BNEn8ioFPf2nuefaYE4viTCsGQtdug5UANSXa9euQ3axQfHuG8LNLU",
  "key6": "2Tg4fdAhzih2oXfFghkuM4Jx63w3txh4fG1LgijER1jc26eNy5jbCryGxLpcXoLdUB5SbfEdb23NT8J7nu26eyRU",
  "key7": "4uaVWUBARUF9dp7xYexvmpSdZunMWxKhdQWsioy1GwMMN6UN6nQJGnvDfdHcgyqcYyHq5RfwaqyoksmqqCeVY3kR",
  "key8": "2ecYFzgXZasTqcdph32hEs1UhEFy3aZpNwAbwyk3ZEEaLNkNG86cPEqbZWYAJqBZkcs4HHVQyM3swpDsijgVbwDm",
  "key9": "3VSzAcEf2i2uVo7m6yQoK5c1zJ1o76ox4GbW5ewHYd2zcExzMgfRVuieopErVyemvH3GMs5CoyAQjjWJPfnyDFLR",
  "key10": "2ALsi9Du2YSNAGBfxU6rgYxwjfDAmSwfYemauZWgTpaXwxtGghGzX3fu4DbpxkqTZYhSrojbrzQ2T5SBJiwp8d1C",
  "key11": "5vDPo16K8iWSdJs7U2wHEH7zgVV8QLqNpgHTwcJ2qJj2QFfw6GKNeEyVBDQp2LxXeRfBHAwc1PnPTrWJCieKddqd",
  "key12": "M54REeHiWMaGACN2J3NVgWw4DWauow8p4C9PhhezrQAog1bFY7KFDrwDjhvXvvP2FoBdEPFfoEXFZ4QRGPfzWza",
  "key13": "2Euttx8LUKKrNaAFW6VW4zqFh6GMwrG8QQM5V9mMndYYtVHA4HbTKyuAWEmrs4q5GWujWN1Z6YyNgLxsWzTYAKKn",
  "key14": "pXfmtxFXsaSZoLehe6PB5SDxziawZ6eJa5VQDUGc79t6ABTPLer14M3hyfUBXuaQicMNZnB7Sa1Ur1Ee6xkkbvz",
  "key15": "5YMYfQ4pkZuijMTh8BZ1K81KW9KsBnEfrkUGZSPdYV23mkDh8uWhacWckWfMyKFuwZcZ1jnYY1F2czpjBH2TFRgU",
  "key16": "qvSb9qDRgRmF2EeXQy7zqxdUCGNx4L2fQbEU9pCkE1uTgBGeBt86FyccGVhXwziNUnxQq2YoGbMhPztU5UvQz68",
  "key17": "5W6gF95JmdjtFJuyNpo5tHeRYXcFDxgxY4C9qhnAzAFvTujSb55DiWJ1aMm4cGe4yatvBef83xnsJxLdr5CB94uz",
  "key18": "53JSq2YhKWYuKyWcCxGMNwVtYyjYwt6TavxpAawwP8CozTixWsBf3b4d27QuwPRw1o7bxjmnPmoSdMUAegN5efEP",
  "key19": "2CRr61Zun9rfxPv76FjKL71djyb3wABodHmfUGgdWnFBJHMXJQ8hvzCLsxa3CMQXTBzjsidPLnrG5oEF4D2MeVWW",
  "key20": "4GA5jgsBUKnMznL4etr7m6XkwTbe6HA91Ex4xKhPGA3k24cbmnRUjkF15WJMQVR5WGhe3A3JbYoCiJurvNfFaNao",
  "key21": "pGLdEAuGw4L9kxRWSbiQUEB1tLRkrCympZXWbSa82gDyv848CtMw7gbgmEpY8g8BMVKxUm5R35cAW91pFS7HwD3",
  "key22": "atwTF2wo2r7Bt7HJwAZHfb5m4aE9ptUgVU5uQiEZq75hwVnZ7dudouSyNgyArApdXrKQox8tsD3G8hefw5mDQUf",
  "key23": "4TMRcebRZ4goBDFmF1pk8EZ9HH5HwcmTbfqi9em3nXau1Wvo6QpqAwDLBbMCU7Rsu3Zn8cAA8QkmLFGTkiCRvACR",
  "key24": "D3MdoApTB2wCchSoEYVnhZeJ1i4SrhCZJSBnkz8e2mZhSBzf7TwywDWaTH9NcfpRWp2oBnyTaNMG1mtY2s58zGe",
  "key25": "5kLxGPBkiCgXons9mBi1hv3MkSmMXsn9aKg61Tb4N37Koqtn1TXdNUbrZZdLRD16ih2xj792ZozprcayWaNdWkZN",
  "key26": "SxhSihe7SLKiwodrwReNoYcv62yNUfZmtSqgVvKggHAGjf8qfpnbLiMjmdnZQQpAy3BqoG6xy8CwEkFcpEUHgaG",
  "key27": "5sMvG8cKSDrVJWj7VqXzAFihNaZeEZnQP1q1NN2zThrfc4ocHbWohk71dJhLLjoY2Qb9vruf8Djn6QfDXapTn4hF",
  "key28": "bjysQNf8PymmYRdU1BamnpHzGrKcfbNpKCn65JM77aXHC8SB4xvBumUumTmMCNRBVVeibBAsbRp8quSUWFjYLD3",
  "key29": "3cy4QrZbhgP9hKn6SMkeEVZt2qM8DHKgjPp9JEtyGKF7bwQ34kfCuhXcL36dC7vQayxsfFxwQ2jw5TzheNCMvJJe",
  "key30": "spMQiporNiBquQkvEQoNzSReoQ2o3eZQc8f4cFJaEgxFcGsuvx4DozzY6AYaRvEcQk5SZMtYjNQ9RhMiLBR6G57",
  "key31": "4ZzzVGzHQm5wsPgD6hUzGiFhqtMGLtxTQV5W4gAK3MxP66YPAxyEUogszA9WmJYpAv45zba6YYp1hs9Bv7bRbC1",
  "key32": "497hp6fYLWUouvsEk4U4p1jYdYFDzZAPzo1evgNHCrF7Vxnq6gVLchVN3fy5bnpgypCgPAjgBdwLcRo2aZBHbfXD",
  "key33": "2bZGjJEsxcBzjKf2hYjCh1GmQd74wqpE8aW1P5JkhMCdSBNCVuNdLw96o5Vt2FNKbeBAxXCsfaepBV2qDreSxkWu"
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
