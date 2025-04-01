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
    "49hKetsq5cajRuqMDNhxYG2jpyjjR8MWtjxCgi5ZhFBUhSq89GJN5yn8J3dr9yVTSeFwhmT5GxLhg1ZB7aijoVXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ouivWSpBqhT2U81h6fmee5YZmjLw8CKb8RcN2BDNTdvMLvNw2kdjy47hp9SpAxi7joJd8W6GNPZQBB4GoYCLoRa",
  "key1": "35WjXAXen4bzAR32KM8Qc4evAn4VGY6kuUyWLN9MZmokhq1HhH62cHS8VfyuXwK2osUYvjsxNGf6Pv5ZKfsnrWHH",
  "key2": "46WvZ5EzCFGWDciiUaafReyuWaYZ2cxsUZoSax7nDrp6vut44RA4gmro88B2QNB7gjQfMQihLgN8j4Rq4pJ5qzLd",
  "key3": "5eL2kppoFE3exUejCYJZ9fbFPN1cHqASNmXqh2eqZcU3dajNiLx7CWLCmZqBQtAsssXJwWSL2MkDpboyBRniBhFx",
  "key4": "4dSmsSnhd1yBGmcphoEfB9D9u7jG41adU9Nik9dAuDuLXjB1rHJuwbc2VWrqmexXGC4C4MqJiUAqp1fYTAeHfzkj",
  "key5": "2zpBm37XYD7u2QhCjQRnNpEzzdSJpqRfKhPiNEWhb1SVWT4Ys7mVdWPp9wUELFwqbhoiCYfSeRRSx4UWJpxKopos",
  "key6": "587AQPTxQEcq9XYjoBTLdfhr9WbLndKU2pYHKAQgxUK1S6zXNATZxjdgGqmSSCQRLD18doZTkPf3nuM6r5Rd9uJz",
  "key7": "3YW7VyXX2b3pBW6YyjEpfHsrwQ8WCGXZgeS6QVrFvKiny9NH3wSNuqDhTV4NKXKFko5Yo7MNZh73NYajJDcUuiZj",
  "key8": "5GFmikW3je6kLGebuPmRbog2DCTiwN34j3UuY3vhA4tA7JXwRHGFXbzU3pQQWU44NGbPZdQg3GgWfNYDZGMMSMgL",
  "key9": "DQPiC5sJsZb4xPg8ocSUyncyH7wXaa6GpTQnJM3qRbaJNXfvdApS86XJYvZVeLSSYanxXqQpgVAtNFM6depp2sq",
  "key10": "36nfpCa4yTzYVKZFmvtk3P2LM9R2CBrXnXC4KVayAmBvbpH53doWmQucBhfxP22wENSw68b4VqjEbQMnTbHWvuLy",
  "key11": "3HwTCZDSXiDgipt9z9V85iB4PHDpjNb5szD3ydssSYg48xL3gAvDpo9shtYDqdX4FDDcFztWmGTHR8TsBjQsPT6t",
  "key12": "55dPp1eEYLMyHipW3FK7GngoEUkQ1mfwGEvCAx2kExyKajhKqSTpLwR65XKDxmUDzwT5RoAS1QfT6JatAaoNGRYw",
  "key13": "2hQvsZkVzK2VXViW3iYjoCK8SiDhazCLr3SdwbpQAggAgCR1HBZmv8P8uunKghgVdiF8LRKX1psd4DfrhAhXLqhv",
  "key14": "59q9tPUrkQi8JvDUTUs4WCk2HWX65BmPgpcZUo85mmwKoW9rUMgdLvcbGpdByaM5gJvkdGTthN8Re78tci4ubKQD",
  "key15": "22fqWkjx4AQmW3pk4N8SToTS2bXGNbLLongrB24q1ZrdrKZcM3Q1Ea5Y9LiKT5VEns8tCpgV9fMsAADSNup28zw9",
  "key16": "3YcXRfvWvJKAavRo4ivKFcyA11JMHLjganchx4ZLL6bSjmQ6D8TY6TgrN43Krbrxwbs2FMJUrH7ucnmEmU6K1C2N",
  "key17": "21KD4heWMWoerCwXp5dg77ZS8NDAbec2WYsk31LpMaAnTgSknsXnTmepLXsTwzFvLaNoyfrSgw2aXfoX8h3hhRGM",
  "key18": "3DCczGkobnj8xvxqzAU9PZrkV8ibkQZwUg25wkUiGpWockLek7hdPV8U9Cw4itm4aVjCnJMPj7Yy7kCtmA5rTtG9",
  "key19": "4Dw9CzPD3eVRDqaa3SVDkZ74U4eFTkuMHzBUw7wqR6opSbYsdAXMkzvRjjgjUnYEyaX2HA8ky238iHDPmzntUHL4",
  "key20": "2v4rLHoDNDkC2LAWwyhgbzCgwvick4riBre1WwsV3J8sFRjG3mtU8iwvjVjqK9weF4DwcPKfqUDX2JYt46pFuE43",
  "key21": "3kbPWXEDShWQtT2FVWQ2PNfRKNySAzYKnrhxQndyyh4HqpHtdJqWQ5QsT2jnZnpfyeERF1ergw9ui5BgBxqUMmeX",
  "key22": "2pt7NjfJQDWbUT5SQ5t5pw98b8xvLBPHx6UaVB6qnhJ1rS8DydAwGagAFCPsQ6HQAhZtaRdXnjgMWxGhJwcSq4TV",
  "key23": "3qtmQtn5Yd3BWHjHQW369vYJJ79oDj4ozLq4x3SzWnukVX6edXtyVnqv95MxwFcGa4reBqyAhZDj4t8fyqdp8itL",
  "key24": "3VyB2jdogLWMqYQg5paRh5onNcPGNPNZwzLZwGbrtnMDGnK57g1dVoHQneWUc5bPfzvRnDW2zubuEo5TJBchNMBz",
  "key25": "5gJ5e431zMViYM3VFpz1umychvk1x9Qr4LzeNfby3Z5D7SusyMGBH7rkcPkjinXBmNwNdDwdcmniDKsarUwnM7ab",
  "key26": "2nXmcXYtNsxfPXGtqEjruNWqE3HD33cTotreXNWgo8DXAjm9gF1c2zvd9LALDMKEBGvVbhnXQbUfkfbqbtypRLtp",
  "key27": "2KnuasvStBMyCfZfq9mAM8vs8LvFsEXv3Lbnrvc5WKykHQrpHxYa9f3d52KDaVh5Sdb3YkSJEgkPyCR6xhoi7taL",
  "key28": "55ffse4ja8dueDx8h1nfaBXSAT4ABjKv7SdGTvSo8gEHRXnYa6gAPAhWFfrkw4RH1Y8ByMhutCeZnTffvSzmEGcn",
  "key29": "5RPrjNGQKXibNhpn5rTmptJLKcwo2eDbKGNjpxDXZXTnhZF8uDHogKnm3MG7T4TsXJJ5M4CU7fv7cpaZb5QQbg6q",
  "key30": "5M3gqqFR3tAEnSa3RxTfdY74mBinYSf46voobebVpvNr849xgNACUL87xHKPL41TyF9kZAuvPuqcwYozPksbT2Rn",
  "key31": "66xkgDcFJigR6ZQWEC7gpGHaRdjR4Z7f1mJPPTMJKty25GtFdWn6JhEucJJdQfBP28jmBVfhgpWWYgWBpfPxwm8q",
  "key32": "5ybJqs9x8YombWjzZJvvPMW9a8FR26UeDQJWjvgHyPeSj75YjQ4eVFZsYNvKMZ2GBpgEcdXiHKDXMdWjcQK5SqSb",
  "key33": "i5MLuCx3kLUTy7gX6uxv2gSBBP7PY2pfh2fLnP5EVaTMReyPw9E6AZv5FJQxXMLKhox1kqvceqJKEebi9biExM2",
  "key34": "4dH6LtHwLnyKauCziQPm6hBiotdYvexKAEU9PvtR4mz3uzDPvAq4jMEeTA7SdDrAtAZSsjdzHSfKqdMxLXdQGJDd"
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
