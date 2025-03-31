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
    "7eDFkPz1QHCqeDnFwcN6nPE9YffxMQJHzRwChKXxxBNgAf539H9ygjAqx7Yamdb8br9BnxjfQ1hYuQQa5KPsSgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PDMBFpR8pD8aYPMh6Eh6ShBLsZJMftn71qgbERS2xVAywLgDrdR4B6StokwrY6ATQ5vM9obK8RHZWwjSYjCEYH6",
  "key1": "5M5gNrr4KF4vKkYh15y4fvp35bQYaqHLy2LUiM2Xw4JDSAdMWUiw81gZy9H4Yu49snG4uLXoiLiEd1PRdZBw4N6R",
  "key2": "1bzWXid9jVL9jcxggPvGFtrKy4F8Pn8ePymUT5QJhRTZZ153ozBMkSQYoZN7G4e5gGvE6PuWAEqW3Z26Jue8MHk",
  "key3": "53TmbMc69HUqaAXcUQubaPYtrCWBK2pnmQ1TWwyjZXWytua1GELdoQ2CSp3woawkaLQU4AbnthUZjMd8751j6Pk9",
  "key4": "2KvmJ7jb8jcUoWRFaQAzguENAUjppg4kscG8xoEsMkm6gYzNHjc8eTCgKSECGjms7bFVGNBFER21Yx1CM2Y57QMz",
  "key5": "4AzL5S5gKn2aBaJvSZAN6KRxAk4Tok7rC5Cc478kQb7xGLUs5Ft9bEmbi88EPMeMeD2VbBhViiXMtdesrraMUDXd",
  "key6": "2XRLUMBEBEHgiLRQw5ffreR2BJ7ikqtJcweGmFKFFjsLCLDvMgVFgr5eF4TGQN6Ypm2y3fgbtaM3pfg48iitiehS",
  "key7": "2687H73SNC8iHkHMwvxdivTG1XZaTWGGSdcM8HB6KNsKR5bzdT1Jn723EZ4FRRssssPzagvepfyvWZEf4VWVLYYB",
  "key8": "5u2BftjA3NZnJsNhMkXdf4mh9pYZUMnxWn5rMtvTYLV8P9tSRoWUMjsSaDQhKGKqfuwgxDX1cyfhf357ouFdtzNg",
  "key9": "2YGGCP8qbbGDDt3fYy1agwmjDeTqtDFm5FMJMYPYNvce8916muiVSsh46Jdm2qcC8zdGB18ApbeKxt85WdrTtr91",
  "key10": "5Np7ri1FfUZFRrZvR3HADzcfSTcThS5zAe3wc1JCyF6yH9F5tSGPa8g4mCkPGi7gLUPtFVhsKzT4TJKRebq2WFJu",
  "key11": "2Xaq5ezbbQWYq8AQ6x3nxN33e55Sm8KyCG2FbxLazMZSN1PeNbLJrxTRq7KfrkpJECzFJCcgvxfrZwA5i5dmLByP",
  "key12": "5aQio9JQbWxbRRrkqiMtnTWmPN3CitaVD7MDmAk1NpjYAUT1x1WfLyuhruKpq6hqEJGsayPrH1LVRW6arQgFqe4H",
  "key13": "62AhP1ybMsyYSBCYjeRJwm6wRDKDvfDohNcZgq5kgYdn1RZMogU9vL5jfpNW7RZjAiAuRRaNRHgtYPDKkXgqXjrk",
  "key14": "3u82VDd1kZCKQQu2ZfRWiM9GphUBCGqWt7ds7aDEJ3uxV5NHwTVS6xn1Jf9feHpguYeN55eo9LYiSgK5b72qKhQ1",
  "key15": "FR7MCwTZfHqFkNfS4NSQ4KoQxdnFVkQ6tEyRG15ETqtLkrDzfwmKL6eSCdL4By5MEgmggvwPS5WHYFxfcQQekew",
  "key16": "5JUsCFMPK3M551Mkbjowfn8sQc7vX4ZpDSzDyQw3mViVRrn8grVQEMaZJG1ECaphtFjjuRNNCKLyKYe4ykYTjery",
  "key17": "3LMqBSmMeJPpXAoiASSgurr5HjAWZwq82bARWLYhvdTNZqTDEYwY2quq6bDQW9SwK8qiVj64UzGrwJUoGyPLN8Rd",
  "key18": "2mr92z2aULtZDc3z7VguE8wFhAQXXnpXLjEq1dGbni5gufa7xW6PvU1kFpjEJzn7E1q8mzz88aZxUMWbvxwTWVxS",
  "key19": "3PrjstL65iqpHKgKAD9DAE9xo4MgiyP6deffTDpfoFnbTDXLgwoqxHhtK3wxCKFa5Mbw7i2CYs7dXUqZWwWbsmtA",
  "key20": "4edcAae29ZmUm52dnwTCs2a9XzziipSsunknioFsBrNsDdnDZipH9n8mGt58vFPqm37ZHAL8U9PeMA2CXHXNLZhM",
  "key21": "237er8mcaQHAh1j4mL5Bu8mnLcuhpjoaEmGUfN1NrXVaWH1qR1v7YLCuZRbafFum8cYYf8mxVnnhGfwGjWCg62Kx",
  "key22": "4nRQ1mqy1bganEy9VAGTRUc5aofyxtbTQpvwr4JFcpSFrJoBRMZSBsLStJkFmyWZKCxUpdS3JfYUQFvYyiBVV55k",
  "key23": "4j7W6XZyWYsJao8iVKypa1d9Fkv9fzWtNC546enPNWYnKzBt7719eH1Gk2a3CfLG5mr7unxBDuk4GY7cas6Btjfz",
  "key24": "ERYH7TNXv94F5pPcu94hwZxFV9ympi7CLJuSmeatUzWa69BY9NorW5CUV7rKc975HVPaRepb2DpacwuyyNV7KGb",
  "key25": "2VLPnfwEkMsSDYi6tGLUQJsKagPAdTc4dDWAAavxkaCY7Z2gd5HJRovB7UnQTdK4yfrs5BneKnYSPnYXiUrZNgyZ",
  "key26": "3Hr574f6PoZzpF2EpXuPHrhDDTnBp2QHXfYyeHQ7utbE9u1mZEf6nd9BVfF3fsKDLYJRFuS2fbZC8dque9FKLKnb",
  "key27": "2y6RJXLkFdQrMDmbLBkTHEuwXs7FXxgr2gJQK6pxxdXV3UfuPkx1K1Nc5GMoHdRwMwA35tj4y9WCzzqZaGefoxAH",
  "key28": "4DkWtEi6niESUeFVsuorP2Zq2viR1DJ89uK45BzCThQWAUfmXxYfH2Mk8TcPRq6wPAFTVCSiTTmCNu7v3yjP87hp",
  "key29": "3N3XWSHknHvYKK8fnoisq3piKY6Kh4CfnAMYEfDvYj8DhhMa5QqaFXF1FcDnPWv4bPZftVnwF1bXYqoy2UxkHrxf",
  "key30": "3DmRiXiY6eJsX7Q38bYDkHh8YziXU5ToSsFPR9E64snxzUgrxaLvyMU9ctKLHCvDRGbZrt9e26aVo49BLDRq3kqF"
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
