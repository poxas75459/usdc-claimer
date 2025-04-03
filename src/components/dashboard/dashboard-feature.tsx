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
    "56AUXVM6ETize9pWB3tRN7LMyp5sKS4EaQtr9wQkp8uNcQm81K9xhkLia8CEvXjQ39hLMBrTjU9XLPkVNqMJvdeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SvAja9X5TkD5xvENYzmJLmHpfAjYdu44pkPtFRe9pTL7SBpFcMG9ftDnKkPzcQ79cmm76JrGkKHpiTrCXTxfii2",
  "key1": "261Q7RhHhLbHxKb4YffAuecFUZUeSXms8jVUtdKL8N7zyaYJ9LJVYUyfAmUbPiHLjbC6MxoQ6nQCsNyL7YyuFTbQ",
  "key2": "4YZhpeXXQKPnCaug55JvXUvZE6SU3WM5ksu5zGzrn9x22beNTxk7g4iLBqdJbGEK8uiNySVzNpHdUpSQS8xwtv2P",
  "key3": "2P1gKcCp8VVQvhMVxybeK5xTQGkmgAPWxocBxVBW4hBLSgjVBiafYaxmWjvDpEkHaG751siRRBsVK4sZEbpiAaAZ",
  "key4": "3ECifQPuMAMo3FPC3AhTgBJeG3ZG2Ses1sFbRHdUzZtk2W9uFdwjzuLrQKhoDni2jAH6AKVWxnV3jiR5VuxmcTMz",
  "key5": "5BiTb2nhSVayoshzV51dxURZAurHSYw8VVaGTu7ZbkKfDETvvpH1BDkXchMSjwhFnUmvqRobrXqktUHuJoBiJdrN",
  "key6": "4jtjRVdVN4pw5NXH5Fe3B99TksiussdCMaW8PJo6p4tsmw8rZbeYwyYuN1gCg6umLbhWqQ6y9xuuh233dZgndE3",
  "key7": "4Ghc3qzoEYYKo4GmzWui2D3pi4LfBsevdFzca72gve698ZFg1TYM26FoaCthx1HaEqr1sHTyCVZ6p8R6iA1mcTjr",
  "key8": "Q8ivN95ehFKNrzTmiQ7rVY9SygFEumcdYZArfJ1uJ2K1knYKTMGQg2zLpHVdzVMAeoS5FZiL1sJT692SvZiuKRA",
  "key9": "2hneDTYcSQZDS1g9ddER2AgdWPEzeGABpKpAjrT2r4EThjwm4uodt1Uh3UCWJ4DBJisbQeH637AZNb974pPra1Hw",
  "key10": "63GnegQukGxUUD8hD8jk7aSgRffQ6VF52uD79dwAnZV7x4vpVP8xsAHhfzhNrBW8KSaf9K1fxzFcqLU6zBxTuKtW",
  "key11": "oJptt1orozwKsZ6tXaPFHSjnEmPKgHaoGnP5n3jumTExhKk3DT3KbhuKHtmFaadhrWzktTSb5cy5PVpjiyUV2Vj",
  "key12": "4oeF9mSYpuDBpdEunHYkyyAtJdLXJPX4PuYLJ5Nu1XKhBvQFFLK1db4vZFVaw6TPNHy9e1iJAdLq2Ae6HTaMtMdt",
  "key13": "4YafERt4YX5umLbExciVRRTCm6VxX6QX7i42VYeG8qFK5Y3zaNBMz8dX7CRvvG9Yb2QK5hvuG4FkCFazhHPu8PzX",
  "key14": "4tdFphSYY1PMKTGuNheNt8L4vovf321aVhw6WNKhiys2N7MhKeVAbB3foiELWeBBEGEs1deP2uJeV3xVnzmDkCWf",
  "key15": "aNSgPQtoe3kcP2mNHJmRu512c5ka21kfrweVWsHtAaakwqWdbRnT75gi983EqhBqAKRTMsHpvnhqJPdAGkLS5PP",
  "key16": "5hANZ888RAvfDLZYmpFgy4FjGbuQCaeJAKqbg9pfSt3yaw7kooVFjCgeTK5r69ETaNfozsB3cjvoMMHLoRrXHfzv",
  "key17": "3znpBWTacn9HBUyZ2BbkwQP2nf3Pp4kv189G5YEZcuhLak79Eb9GBgRNdS6rc3iGWFhFnDtwSz9x41WGuYmHJVPH",
  "key18": "57VT78RUWkGuU3AdbgD6iUwu6DXe9SWFd77JBdhKisrAYurRb4dtSznn1skSVisjbg4MUTzBNBSNTr9cAhebNiAb",
  "key19": "2WXS42WA86mT7e21Px3zoYq7xdk4Yhchbdh38RJzo9jaoZPT1YvzbA9FA1huYAAw4xGtDntiUg1gmwxLaU2Q1U73",
  "key20": "21GVs3WhzFU2o6uXfhpLubfkQnHvFmZs1MNNYnoWgDTzZQWDcmWn2Epu726q93ALJocvwASQ8iwM4bhZNURt2BQj",
  "key21": "qE7MkSnPTZdM9JAvREgyUK7Tfk3MPSDecNXGUL8asV4h5R4RHnVXAZmsQL5ttBubpKeEv4ej6mxxdtxjja6NSNS",
  "key22": "2oxGHK2SvoEdyye5cGDDSDmaZ27fydFL82jv9vmgkR8rKn24maD2iG5bPK8VdKCxwzcppu72G6EC8r3x2gr5T5Ub",
  "key23": "4JaELcynb4uwj5XemVoa4USwRWfggM51oyQrw18KgCqkpK4KTfuqukhsvHQnWB7U5M3Vukqn5Cf87oTE3P7MG6iZ",
  "key24": "3kzPpQSK9S2t4K3D2vbqSnCXqJB7gf2Z7J5iSgNfcBhHLYpatvycDWqrXS3PUj5ziNY7U6T16b41sZqy9uyRzwP1",
  "key25": "31nTnrnVGTMbbNUZfjiPxEySamnQ2wjaBMuHWfqpwn8MwSt63NLNafA7Kp4SUUvpUD33XwvurUXeiud3zQxfABiq",
  "key26": "3Wzv1HxGWYzrCugS6a4ZVKyaZE3UEBpoPs5zjBZNvB6sfG4vMFbNsKpeGWWMkwCF5jAtZQZ3r8GULQrqEYR77A7M",
  "key27": "2mRgAjNSaPJjCkGcTKiapgEWNt2S1H2paHF43xvT5jNgUTvqeAagRrjxAS9JD4cbfCxaz72nL1G2iFybrPY872bC",
  "key28": "4kiEydkEMZHWg2daDuDEmkBULG81zosiuYwNom7qei9Thg8Rern6sY7FS8S7N6oHbr8dDvxvBeFjcVSTH3enCSvh",
  "key29": "5WzKSbJNoHYWaAz3dvVc1BKVvVnK3iJwXB71xvFivR1J9DzD4AY3hBGwxpCS5BzBbTqWd9f8ZYPwujmkzu3aTT7o",
  "key30": "3RbLhKvLrCWrRF74kvwT931hGDxtrvfgMeXGtwSWm3beEEs5zLrJX1Po9p4ikXGP7ZjVxWExT87cM9ogYb39vGt9",
  "key31": "4YP1miRHQoTzjWHDmeZt55JZ6McXX92Zi7BK6chgoxNe4qfjurEGkGu9PQ72pBYKnFVjxihaFnthzEygMdMJrhw7",
  "key32": "56SYbTG57vLk4qq4xa66pHSCAbAYJwTbM9MWBwy3kjrYeaiWGrnLCkUDDgQ7WuHwkNLG5NDMtE5snhYVB9pzx4oX",
  "key33": "4o2RiSFs8M8HfRVb9xk7mRbxrzQUCRuDbSrczbArtMeSLWcyr8uh3UpRrVVUFkBSDgjV6W3jNTF5kkZPCZRpdzWA",
  "key34": "jDRvPN5CoSWsKheq5r9W2XBqQg9RT8cyrq5ABg55aC1DezdnSvY4SsndYnMhaNsGd6njcMBxhaTYLxTJiBU59x8"
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
