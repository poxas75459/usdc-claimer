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
    "4dbZv4RNxJLyaMrJRSEsX6AMLFZdKUSSzeRd7BKPzALtRxdACv29naFG3fbmUDzLYUJbpgkwH6qeenSMc6Vm2H27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kLPoLuVodvvMBNYBdnTSFL8dB2fMKLcKzZvNMruZVEGs6bpjg5LqNZkNfM96CNCz8JzAjECazNZpPswVPpwhsEa",
  "key1": "3CHMeysCCJpskX7oedkwamrUbKbuGH2FomyXGHuRMvxysS27AZtA1yJ6rGEYFNWk6ye5k9SwYCrb8YK1CV1HoY3W",
  "key2": "F8PiXxeW1zE21oN2LJu4pezFf3gAY9ab3jvxVp58FFbAwapLzsGwmpKaUgw8Ww3dBfWoreWKsc8b8Tsu3FBDur4",
  "key3": "3TVdjDJQuYWgDo6TGFo1WMESwg6aasXbeAd7ztncaHRTj61kdiVQ7N7UCZAmT8yG372JBQ12uaeeRTqmixCpKY2b",
  "key4": "3tfyxugrFa7DWiGRSGM46UhXHvY8va5zdgESDAWEb1qH2DFN19vLfRwWGLhfZLgJzasgWcMTBzbXoPjPfi6G7sAh",
  "key5": "wXYZ5vgVxeE3VuKtHeFV2b3pMs5TFfQrnyq4SZQc6kXTf3jdSHjFjucpDeW5xwVg1BG2J1rpmVehFddZ6jzLtEd",
  "key6": "47tU2aV9he5KJChXdBmUTzkLxL3kSR9Uy3kLxAhf69wuUx1kVMQErRdUeFGJL4zr18y39p4meNyYrVxvK3PwNRGa",
  "key7": "JLjZ2P2nhy65YRN4bseNNzTnK16oGJMqHRx47f8gXunC1T4icjhDSy2dR5YbiT5FhYzZLcctPRC1jLKqngASMku",
  "key8": "2W5iZ6twdeG9g9dESbrFZK64kXRRDPww6ee3i1eVs5t11po7j7GQcZr8sHykxGkuw1YTGmggJDhNEtHKyAK5a6gZ",
  "key9": "5vTXctcDNy6dSyyQTcgi3ZnSe3wFB277Pzsz6eQLL24rTSWHRTrHLZEjtfyrUhYhqbw41ZF9RM784UQ67wuUr6ZF",
  "key10": "r3PLAX21oaY637TtYaN1zKQ6mu8pb8NXGgkMA1GgiEkteHd1Xovg5C1yX388yhy6JNmUcK5ybjRm79sHoHdTCLX",
  "key11": "5Yt8Y4JYhFC8PQ2T43swF7BbMSS6Mk1nnGJcsbjjy2U7E3Lsq3J8SATzUGoEt3vHrxmCfAnMVSSpW3KuSPGV8iJk",
  "key12": "XN18JMYEmWQiVncPDavZrVubJd88x4Yu2PTx3W5xfyg4bBQLw3PpWoBfuVTNtPb6UYkJJZeyDrMqbS3daMA1mQX",
  "key13": "1YTKPM2RUDqYoDQwL9UQ7nki3iYUcmftSNuscu2h7No2q6XWwt3Wc5FUsDkYwWEuAJ8DbfjZS2R7r1iBVgpZgmA",
  "key14": "5EJUMQSPsdonQAF2cXUNYKPuX4vacp1sWW525ggHFeTsoC9Du3yEZqKLDsg8NwPSrtFj8Vi1fxQFdpxTXAL3wRXC",
  "key15": "z8kv88S7y8zvMgv7WW9mjeJ6C2mecfmJXd5pWJmdiQGt6yGsqjaxmAqXKrwHHJ2FAZnsVwKnBvPi2YebRenhdS5",
  "key16": "uHhYS5vF2ktyC7zaCNKxqoRpL5zL2fiQk3QGy9L7cUzdWR6zVyJengFr6GNdkmv8ZJmtwE7af29NfwZxzZoMNPo",
  "key17": "nYidqT1r2Hfy2w9HhSe74p87ffWr5sifYa9UcLgWhvk3fnp9aWeqpDq6MDxuNexkhUfzyAnP1mp4usPHFNaeuhU",
  "key18": "2b86gfBu4PfpKnGWcGMFsTKgX7GHigjfeYFRAXocLzpQRKLE7SafW4gDu4mWRT7HayqAdePCFuxAdTMVjZVH2ykc",
  "key19": "iuYv8tiVETB8X1Y2kV7j7VCwSPdTeKmuSW1LvwnXTbXjTrT5Hvf5yDZi8FFzmEwrKMTHp3HLyZMk9eCXK6udcET",
  "key20": "4aQJNrxLjxJyhGFxebTp2WhKrJ5QQHkqNPpfgdtLiudEuJNNSBZboPVCJvHX51NpEm8Brtsj2jvjBLV7vbnu84Q1",
  "key21": "3jN1nnzHWqKGQ9jXK8VMm4zEJBkU9ys6PXhaBMso5SA9QuVJHJKcMJxB8j1r4KgXPpvtmg3eufAaTKr7WUvqiAvd",
  "key22": "5PTbn6jGdR6xkzhzVKjnkuXR4DcmMUzAi4JFUetzct1x2Rv2XFn9HUkjJThkJGU4HhG7cjd3GwVLp4RCQqA1nw2D",
  "key23": "3RngUQxdVESfR1XybRfjhea7g294FuYTjiAAcnyT2aABYkySejCDq9wySgSWeRemLA6jQ3jLLzakpZw8xVS9qeW4",
  "key24": "DrCaDJqVrmQCTmapVFsutfvGXnQUVYP4brHcmw4KwePwfYmwFVz6uPoeuDuiSUrb459MVxmSP8JhRVNmTfywcyy",
  "key25": "2Mbi8GUakT4QhgMk6fhGVknVbWWSUSLxK38EKdzWj6DFM8rHPJKRDvhGogHaKADxSPQagPh8awXxD4NdDMAEAbdh",
  "key26": "peEEf5jaP7CRTq3scXVtFjb6TW5PgMme7L54py4qPsjvgpbUrkzAX8raADa1e34G6NHs8wM3GTupMun68Vf1mgU",
  "key27": "5mtYucEwcSC8LCFYay68ubzXf4D6uqYUQaHgLEK3uyYhsMxMfpnS7De4MXGc4p2yHp4un3rTBM28XGaSMfesUWpF",
  "key28": "5m5SuAeccpEPszSQVfpmva7wfArddLuWGsrfor4ZobS7gv3gykx3wZoYxWGCCZixThQCGHz68JhqXP4QwfXLv5PU",
  "key29": "2ZRz9vx1HaFRJmKfzbETejjzQ8oGaea7qvXgr8UCqwC13XtdfQ6uqHp2e9C8W2jh2aMoaFuNszLfwXSAJjpnbWoD",
  "key30": "5yaZBenecDDTiFLLWQboH4p1auNxkrJmLk9RVr7boi8CW8nx1E9YdkRJfNP8bJFVdu486dwrUtrHdaqZHLDxdXaS"
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
