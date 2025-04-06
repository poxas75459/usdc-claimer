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
    "8Gnw46WMuC8YhkzJtBWtVJkuyb7XSd8z5vwgqyoffzL57HKbGZf7ddak95KbG4WK5aTWEnaP1AzhCByEHu5t2VL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qK8SbA4MLrD28VzKqtF1ZQUVreoWiCrshFiDU77Zse9ZQkZ8mgYNtMmMrEhQaphzP5RdV1MdESvYKA3YxSuwi6x",
  "key1": "3BXHB91gGhShyAErZA4HSxpBxU5yggY2qKNgBEWWJ4bxQqYna7rM51mpxjkvuqTm2TmGhRap5veudKZJJi9ishQq",
  "key2": "4di19joTFF1WvZ9fuH2dCWDGzGhmw2C1heVYTwNox9oeJSkobhjhkBoRTHMAFogVnRttvDnec1LtXAEFoxvvtHM9",
  "key3": "4n8HqcUasr4LShGEQB5DFBUyb8WaByEhLT7NXpZQFRX1TQGyNusLgbXcGwVtkseHfVmzRELiXidnE1LYLjRRFYGX",
  "key4": "2AvwLHngtzRWcZ3nUCsVbjkGMz9h97PfCvM7Ai7ZVZB135BCHeVBtG1WpaYKmYkMc4Mt7wyEK7Aow5psuecXK4Tf",
  "key5": "2FkSmhHXLQdKJdfM5BrSURVu9RrVWpViQi7NCGqcowbs4s1RCzcPzwcznnnFqu94rBRtEFc8vyPZvkwePsMmHB3t",
  "key6": "3borLbB51sMeF3LP2mV27YXFJWCaTKkwK6BMAn83A11NAnrCVFQzmMTirusaZKu5tEuL2ebXvEgoUS5yjmBvt2at",
  "key7": "3tx5Qpi3pUytfwbG2o2g6gp9DYQAsCdyXKGwED1z4ryABNWE6hSqtxkG1JwXjt3gx1qnVEx747KmE3wzx4nQt9Pm",
  "key8": "58mmzJCqTiKG7KwQq3ZTZ8n1VaHzj1pQvkDz5fT1EnTERX7JMN7ZkAk1HtKjVX61HEkihXGDhYK4T2dPzw4dhMhn",
  "key9": "62YMx7LCxfs9udjpnM1vmGzw2oJ1PfmwXtYqAFTK89E2jzqr9Qi1zqVc7Ch2Yacb6hWkewKLTF7p8vx7VRVGDkY5",
  "key10": "AT1PasTL1XkyHkB9geTcxZysGNt1MqwrEy8zpPevUBq9dTiPAnFT9tmSyiU1Gk2Yq5PG5PSMwBKCZtxaFGd9qqP",
  "key11": "67VNNwTihmDTvGR65hXLSbUKJDUwsvhmMWA29cw9mX6rrTpJ6eAAh5xV24nnmeGP2pnGDzY8CDhwdC7smqLAStHh",
  "key12": "56Z5sJjFjdUsdN8MBFmnmEjw6F6UHvNR5wGe9w5f4YwjLUYtXVx17HT98xaLWvKdSxue2qzzALFJrHx1ZkW9A1Za",
  "key13": "3CLHqMyEJqrZe6fNFK6zxWqKjVPXR7mSnDALgabCm7pLU8samQSaed2RaWbWBg4gUDKsMTwqdrWve5sTHBv1b4fA",
  "key14": "2xpYe4hvowk2hrP1mk6CmNRx8VcNCtMSLon7Wksw4CUy69iQgDGWXkKCYv8jCMtEWgv1qQgMU4WdZTDwbUYt788S",
  "key15": "5J11gwfXhC5ZVsTagSz4n3oGNX4NSo59k6HxsikhAcVhFch31jzxUqmVTz8gVB6fRkMq8qgJVumSJ7YoFNsQT5Qp",
  "key16": "NhmqKSKM1Y2NPJBib2L5syDTz8E9S1cwhK4SpkDE1xa4M2nUMGw7dAW4CjKJVnJE5XWXrs7joyQkTmyYvdX95wr",
  "key17": "3f7WQc41xxHAB4Uygs3NXgBC7L9QWCTJezWZyUM674n9rqJvZcPF6DRzstQ2ixom2k2BubGW1c6iKWB4wbz1kb6S",
  "key18": "2UDYRTzCCW4isMrkNAbUvQ9rsXSXYri25T2275gtRyVJ83sGXGrMbPENcQg636bQyU3UR2TL6ibiPibL7yWJmixZ",
  "key19": "3hodHs8v7NeDZPvM3aT5zhLtB9LGpJXycTMEMXJKpJyNX3kTHWFV1YTGkjAtBe8zP64aPxEiBpkncaAi98der4RX",
  "key20": "4oRYs4DKeZgEvvhBpZGEtBU9nxXF2dh5cm18YLmACJ9iWpnhmuPvgYHihATaAiqsjuEAqbkakPTSAdYPgE4r2Shz",
  "key21": "4Mhrq59r6cJmuH8NCqS4D1qt9EmtZMTBbkBmkBqGhnYngLy94M4XGTn8NXfLb8Dc7woWR6fseg3vGeoXvy9XXA3o",
  "key22": "5XSRsQXkEanXdp269MFF3v7jTHinSSbCQjS1aHL9GnYugnFF6g74qYTS99hyt1ES7uoFUKdN7HQp4BiGFyAanJGm",
  "key23": "38nACWhgkk3PkfK8jSMzPN6FPgpgdjW73X8QaLRD9m5JipEJxJWDhk7ciUA1aenpNNZfPWr8hTx7XNz7ALfhZJP6",
  "key24": "5wauWLDKVYDVDQ8UkQg9GFxJ8DGbCGVBwbiUromaEjSx9TbuMFBy46R1ZPp2xLJzbZVUrfcqXLkMUoVahotsM3ST",
  "key25": "2GFpaq2VEzHakkSbSwtNUkbrYGMmfPiZn6aY3y9kH68N8BAmVx5DKsML6yw3ngWrfSa7zM2NuVEoo2UyjHnUS7zj",
  "key26": "4nVQDbsEuUddvkAJ37mm2i4MGzDQrGbUhzQXsSmzEWSk4E72c67dXopxUUaKQEz38SJSzouBy2RNfcVuHPVtjQnz",
  "key27": "EuTAsjYMhovrygHkqx64FLaWFWEBcCkmBKK5eTVE5zFyPwzqtYqR8zvxnqaqiRKqi9dFGPVqfybNHqQ5GHBbuTF",
  "key28": "3faPaFYkyjEXKrV5CMfKAKrk8V4aPNvYu9Rn3ZayikkqB2hVCF7Kp549MD8jSBaJ9NaKNwVRCZKDxBLafZ7ZfUXj",
  "key29": "3qt4kyWkn9YJWzpVeABszhYpX8u5oh99svzT3LkiPBeShZ7DmnZUz2HCxywmX8NzwuJXaLRXEnKKydufN1MhHp9k",
  "key30": "4yBEFCeM8NxjqRwjG4yYwc1VtPWZWdRbCoYJ5s2K4a7U2KdG5iaYdudUDEvTEFfoLZYhdwow4zdSii63kz9Cks8v",
  "key31": "21KEQGg8bQe5QQ6FhoDGFXwA6mELeF5PscsQeGV7z9Wh1K3XDuYnmS3iHtt5uGN6BiiJCyqVJgYTEFExfNfg5RLG",
  "key32": "41iLe2gNzEDXetTVZBzeCJ1645H8P5MYFFrdPgqspWEsfyNrcqTqKsbRxkx4hL5sPRsrLbzpZ1Sb3zX4wgszUjvm",
  "key33": "4k9r8it3oedTyvkDPYi6FjpQXtx4gf6Cp7fyLyrZZ4HygdC1V9cT6MW6LFcuFGAwxuUHVGA7gsVvYwMdASZgu1iV",
  "key34": "3EwTLFqNk7PgLREsUQPuQhT8ZARSJbkHM5GaePau3NT7J7eHjSGD3iSXRfTcsguuLD7RArTudXjdtP7aXNYBjqoi",
  "key35": "aRwsX5aCUaTGTHFzrjhHpPGcNj2X5b1D4QA8ZkfxpnPSixDiPEpyeYBQeEieFZP5rz8rTLYTJdHM7XZqNgFwzJv",
  "key36": "2dfapawS4kiJXxizc5cChkpkemR2ZwfEhWYCxTmN54RecJeq3DBQ5dX3ZDqRjJhXVUSfMWbxfcJdL6JZC3aG58jk",
  "key37": "5xKQPR525DLkP64YCQhnXi4xe8sjhemvzkXqfPKA46CokcvuUedhWSNXtygQLyWX2CKbipKRfCBeAYLHi7CyKzc7",
  "key38": "R4oEMBvKaeCH78zJf3TRTLqiswgiv1NarQXev4ENmrbvPQHKVPuyJjDrtdjEknF4qF55NibqfcQDNRKgUNHa86t",
  "key39": "2qUkDRoBvYYNo9Ypnb1g5q9XJfdH1MpgDYAf3RWauf5RgajHSWbVpLRNgQh86uRoYfjfYzkvN9Y6CsAGjJcncRZ5",
  "key40": "4VTmefwQDHrXK1XtrgGBmYzZdEQ8Tg5YD7wSwUALEdzBdw3naDmnobKYbN9hTy6DAtnKhqow8ejR1kLfyirpSk29",
  "key41": "33w7qbD1dEaGxRpxTKo7BNNv3JpQBWunr4J1ddFJJzycTSMNyYi2x3LhwrqSCKV1WVkCbZDo5CeDRgYJD3ebSJBV",
  "key42": "2yLJNBgKdGsMJtVciJkiFWRQ51qzGxATZDorravu5Ge2ZP27Rw2FaJFtTKHBCjJ1UYWT9owKXECzxohT7J9BWhpU",
  "key43": "3Vcw5NB8JghDGoUE2PAVtsYgMsEmhsXiLRFobVzsBn788tCS6nLeFfnHTxdPuiRb89FhKEJAjzGgHNfG1bfP2oR9",
  "key44": "3TRetRZrbKAu411GEbqA757iVndcJcS7o1BkcFBYe2c4B5NmHNC7b9NBSzsiL1D3NJdzf9E6GgGNRu5hhmS8WG3x",
  "key45": "4VfUNaUJFcDbwnFUkyfm98rhNjqEUr4daGCksKbRGETwkhtFuD9vyFkf1rBwvC4794WDdqXE4BNQRipxYk82fEeV",
  "key46": "5AoPUW58iZsT2sanENSoL9DaiJPGkAPkUjUf3CuLDg2rok7UUWg2B8NF3DT7UaEKDLoALTSFv7DCUiqx1ajwHEnq",
  "key47": "4svrfoNJRCpv4SuEbtwr74BEurifXDAcZ4JUmsCRFHnYBf7kiXeiBiriUpMqhmvSVdmwQtrrA6dT6J4Zdtnihc3Q",
  "key48": "2MJSwNE2SvbPx73mubtHhNrP6hT33bBAqdDG7ceXQyxfdNwpoe17hkx7ynLrGGW672t9hrCNmPWyfFSTX9TdKNKC",
  "key49": "3VLDDqS34E4cha2vVkVodS6u1xn28hDk4EUk6Be9VPMfsfbJgnfWBkaDo6j8i4uyvmLwRCtN16eR3Nud5HKjnRMx"
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
