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
    "46gF7LM5eaCJwFgXSV4pc4ZysfFugGWJr9HjkDUoCgb8hVd5h5UkqKnCz2EYTpCJm8WsDqzFR5YTN7YW1TSWs1bE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SrNh8pVdez6ua16LAsbdKrr5QNjmJ5AGybYgQKHdro1cgSzK9FymdVigZ54DavbVqhJc25iDGsbvfGWqryzUrV3",
  "key1": "GA6GVQrC5C9e9imhFdYSrjJUgYJVnrUYzudcwGibLAwQsu5LhxchJpdaE8ei3joUbPA9Pw1teFYM3XQxYis4i9T",
  "key2": "5bMAEMzFMDFLbX9PjBLTRBNnjrW3uoCDuTZpZ1xL12oabfBEoe2H844HeK8QVatxNCBQ2KSYbTwxpwAvTUdSWbMz",
  "key3": "CzEJfLbBkgAHwUSXeR3HfbSNmAtfh99oR35fuiysuY7sCYojBku75noeV8gw7Do7HpqJyzbJmF1C15D9LUiwG3S",
  "key4": "5Gkt6vpirqRLhia1axoCjxeZAqzkLEKrUptU7MfYw7JdvEQTC7PJDvMDbH2EcSEf2nE371ZstAaVWiCevzbpyu37",
  "key5": "3r41ydoG7s4xeWJ3QRMy99oG6Sr7CAu3UJ9HT3ofdzHeLv3dyCoXUcx2Uz8X5LnESgAh34NRuugjB5wrfXAH7zdL",
  "key6": "3jwvLYCBqm8uiJm8Vvd31ywUC5xPoCo2PPM52DTPvpzREf8n4mXHMG47gz9h9bAqZn9wmcmF2zUMFUh27x7e1RzB",
  "key7": "4rrVCpHnbGHaLgTbj2tDci87qiTEDHZwhFDcSGXvbM83Jw1NAEejtAK2C2bzUnE9Eq1tmwriLm7yBjaKHAL7jNkS",
  "key8": "2ppvRHDsSqtJ9vw8bajiHCRUiSm2iEEBrtXdnS3vpAsZh9M37ptbsd3z6NZxfHQDhMbGCPc9ChpMJb5BKo4GWFAu",
  "key9": "eKxTMDzPyiz9QiJC1Zeicpy349M9erLsqsgXCW7smuBytHcv1uPYucNysrm9qqijyJdV4rA3wdbPqaaevcTPzGG",
  "key10": "4wcxfaYrkhF4ihU6u6PZstZfzP7baDQ5PSzaNxReRFbYHBSNQX4M6hCBo3gJBoVSqXcHELLBPV3ChThj2xV6msAx",
  "key11": "2pZeTNQKfshUpuRvP542RJWqsgAZoKjWbwd81iGbbLPrPHG9r6brqrVz1GmE16VJwqho2cQaUszRM9W1W3Hjf34w",
  "key12": "FnkFeCVt4xCZC975Kz8T9essGG7iuve74Um4SPtVmMwfvyxZDDxpxzYVvAJ9VqreLXEMkRTtWhHvRc62B4ciXvH",
  "key13": "5gtXqh5Pob3ucwMnyW2qT5nbN2jR4V9yVh3UcBve32ozQJPCFtZDCfNJKszAr1iQforCHLcMCAtfa3Nf3RDBTD4e",
  "key14": "3rjQXYzXR1NXssqnvSVyMPQWDrpVYsvReP7VDNRuuXY48NmrPv3Cc2A3F7GWQy2fNDj75E6v7skuxcfTok9jyvu1",
  "key15": "mzHTB3CHDv9pgzQWdm1hQqcVk9gEPFsmNZCgAQyv49jMR6xsFUFiP8qB1NMyaTqh41dRsBw2QLmMu5tRVYfNeyQ",
  "key16": "4iiUKCR4oufnsxSTw6vQHvt7JoWPoYZhFRQCAeyzRBNsBvKGbr7cgwT8GbYMog9fKZ6rDgtCAkQsm7WKxPAr5XPG",
  "key17": "5dF9xXHowdXCeGe2MwJb43Q4cg8WqhESEtxQhTHhzQcokkpNBQsXc3H1oUoepAWrpBhqMHz81KXWLQn8kr4ux9sM",
  "key18": "2yVnjk2T7vM594yxfGa23x7MdhM5Gi5vDYdvAxyeYzs4urDp4pwbVmGFQbXuhjiJHpW5e9AhLh31EcQcMAPKRdcU",
  "key19": "37GZK9gjXV15vZRWRiu9Rk2PwnL9ag6d1PDXzShrXaGbRwzFd9NkKE8wmW5w2rF1j82ui9v2xycP3u5LQVzqp1ee",
  "key20": "4XzFLL8pnVupnSJx2b7eiwWHkrzhJqd7BeXWktM8JK7ATH2Xhft2q1uM9yDFUh96mCFSYX2jB5DBwEAjZgH349L",
  "key21": "zw2XUAvjUZDbwZwZE69TdA6ps6oDHLhbHTiXZigTF6bd8wauRjjkckNci2n5XZUBo6ohsQ3eG5o99Rsr2XVWEUm",
  "key22": "2qMa6vt8ToVTMshaBJFt31aBGAqnatSt3A8KvmsTsvzjyw155d4FCwjFXTrWdcjxbbDf6YyVaANRkYaP4hexhHZU",
  "key23": "3A1FU9omxKKgACpDA9TVg3uV9ivsoiCM3x4Gyv89qJvuYHGgfhmmmSg8KsHEHSY6ER6ibXrLQrehVzLSBCi7j5Vo",
  "key24": "2Mr5zdzVnMMrEd3LPuuKyipaHMVF1KSMHDkaM8CUZraEi7pp5o1MYHrgZiztDTEsMFQHr8SGCq9p2ZhbN9pUZ954",
  "key25": "4v1CoHdaccDKxvHLZ3sg6QtY22FBjiec8tKbGqiQTWBGhzN18VZy3KDtx2qNjPo1epQFRtV1ctZBYQzwAmThBSjH",
  "key26": "53uMQbBiRZAjxyJreHBzudYdW2N9dzgGraGdkkjn4daUkBoKoNe5ZcTtAXA6gTAAgmqGX4EBJiKXmZqijzD9W3Me",
  "key27": "2nk2wVkoPYceRDnTwnvcEUgvgdYFRFyrQ4n247jwtjWVisRgYPKB3aa2ZG4guVibACmq9PJwqV1bdY4JW4cx1YoF",
  "key28": "6rRoitiVHi9V9MuMbC6fTPfA8rTyDeq3h4nn5ysXApaWEYTAmYPH5trZHzmEmYNKfSDouEn3UpBYbdjH9QPSW4N",
  "key29": "vs7bGyttpKMYMnAfx8JQ7FNCAVhdfyxDdmhoWLPSWL8z1z2DDRxxNRkMNAMGaVCPxMm9p2RhhY4yCppTs9yUEXc",
  "key30": "3v2YzsnonGmvGeBHrUg3DKjeBQqNWejPY385SAUi6FdT49SMKgWHE4jmki6dbCcut9ueKb61BH69w4MR4cY5atji",
  "key31": "3CBhV51ToVq5mrByWxgVBwbknrcwzW4F16tGx32mZrryot1XJddcLGvMbx58HPowxhsoKUVQrkw6vrE3trbzGiMh",
  "key32": "3j2J3gB4WVbKZeS4ayD1kQi4uRP4ZNSohxp1pzMvwStzNye9WSAvozjoSoQ8vdkaPvrKENwjk2yxivBHpJ1XrcMB",
  "key33": "4wgH5v6TyyopGAaEEcf1qMrHNXXaY5sXoHu9vtAEutA1Ph8V6HJ7mprLUBunc2kcbAYmMT1fyZ2cAYdGPPJepnWj"
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
