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
    "81XKJuNHbpKkbgkmXgvCGtLGmNThWYbvdhDgDeADHtkYCpB1EvEZ4vDLpeGA3nY3FEoZWeWuxFeHhuFD5MDck2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bij5Uzm8aziGV3hZcyCCUN5YTdB6tzXYj2UuxzzkmM4K3Y12Bq7gb61NSBCDDTcVZLf5S5DFhQm5hDX1FzsKwit",
  "key1": "3xxCtckggAGQXMa6ukmhMMsBbXbopjbyyTkK9Vmpqyc6qECVVLHXJohfyi2FAGJ6e8qJvoUm2BTG8rSXQ47z84yV",
  "key2": "4CewEgPhkFjpAe7KEkHZASb3KtNdCWBC1vuNnHTyKZEQmcU6wsFwvk2u1DDH7txM6KS6xh2MGjQxHijqLtdWA2Ah",
  "key3": "3TDw8mWYpUxkVRdL7RMxQaqpgwfMQFphrgkWzt327oKeEbrcj3deTVAzdpXiSxaQPSaQtFk25eJFghnPCHQ6iHVb",
  "key4": "29xdc4pZgMPwAzx7hkqu1qbJTc5qwCj9ppeK1PgURjTeAMoiUULL2LbZwGShqhaZz3hrZQKYCiHwjBr3GbB77JTA",
  "key5": "3fesTr9jkzzgLivJZszJEUrCeiegXdL88AHqUHCY1VjimFF7dMB8kvLYGFqY6TCwgxKFFqZSAC3WSvsPBqcKybYX",
  "key6": "4Htp4HibGtKXH22Wnp7GjtEMjEyQALH7xtmyTcSmzdM2ABdexYrJr9tZb3TL2JV7fnfNXbCuWJZ8UbRXEtUZZAdG",
  "key7": "3z3LB3cGoV4D41PKCZNbLD7LvvzXRgGfjHakbiYGkPsBF7HRVmxJPA6NCrjqbrETQzKmYMBed9XRZtgmNSDizbcv",
  "key8": "2T7DUFHyaZNgxpVrUAGHG1NZBLwPhFmD3m1kETt2FAmDbMJWzYhBsVUkCXo1yZuCXcZUibLntx251Da16Q775nQr",
  "key9": "4pFAyivYGhncyduumnPLCor4MvYGNrd35pNBS2CUZPQD5smvqnRR6yiNq15z8W4uHefc6zkhnYCnWUVnazctDAQX",
  "key10": "3J7M2YYLBoix8fT1ZVJPsDUXMwyyzRis3JvoujdzyQsofUSZQcFDWQLWkHyJ7F1CanQzDy3Xkz4jsJC6yr2caDiN",
  "key11": "2EbrtxbQNPqNZhSqyUiPKoLP9rutoptGxRYZ2wBK2ctzSkEX4CuXT8Noutr9ga57VX63gZ9LK1Zdwmtcs7RDxiU9",
  "key12": "3483ugVCZaaYGe3G6KxYQvNPZ4nBAjcQjkPHaqy9veMy5sixDShnyFd4GtytNCCJ4uMHBQeivbBfv49HoevSRc5h",
  "key13": "2uRMJp5viJCSU8yLeWrLn5QcGCcwC4XFugQ3DAJ7yaS9sG4B1TsydPbnAHuRVxjYg9cqZWKHHQUiXzLFNn1s9gH5",
  "key14": "my6qa86jijeHc4HHbc64YMpNSGbYkGkEn796CVEEE2NPe5oq2LoVuNJafhhEnNuD95p7K35TirjpSbUy84Bkcgn",
  "key15": "4zAjqLjHurt9k8cfYyb3GQVW1XrHWupxjqif3mHH8JPnV4jB9KtbNt7WjqTRgtU5jYysZaJacBKgBsD3S2zswNny",
  "key16": "38nBsnBKVmKzHcZ3CxgwN8bFURw3UNApJd4ZscwqZx4ZpdvsVZUpaReeqc62tiMjRQ3iwEPovy7HN3p9xTjAbQre",
  "key17": "53Yo12L8uBLJwsQ7n8dcozQDAMRmrrnQBp5FFXmi61SB1DHb1GAVVubC41RxwWrGrQw34RvN1PUS4V1k6DVzvp1Q",
  "key18": "2QzJxF65V2izQnfHY67cnoyWb1wrpkQmtAb36DuwtENn96sXTiE9X77htgGXvFrj8EtB4Uo4kNVqnsE6JL53TQfF",
  "key19": "3bmv3HH1zfovoizYDN7h9nznK4fqc8HSXgCqKQwHd3fuK7kAAyPD3gg8CUiauZ5GxETk7QXYBijcvvrvWdzr6VC5",
  "key20": "4dDsFsxtkKrrnr5LbC1wJXgJsV8fhjokRNFjmguvQEYkLvnciNpjD4gRfvWS2YrxofiUAZ9iy71xgjjEegngsWQx",
  "key21": "3nnnbDf4M696VzmC9gTk1vihQbpttKYfcAc7hqEXm8JpJR1y561hqJcDB6dnZ7tnHKHc5dmtAB7X34PXPk5oHcqr",
  "key22": "37kkk8TQi3siz5RT5rUvtgeTNuduktThJ6nWMcS7D3cngTCcYjWZrAXjF9KtesS5HB8CiXGVCWsYZRVLyiAiJV4S",
  "key23": "2G814iRRtKky8h5dZd8Zu6SvvvQEGM1H7TvbDmgnk92Qng6uMsxp6SsPiW6H1gaW2nTXpnePUkvnr3zRdUXawTNX",
  "key24": "5hseTaqJMDmmWX45dCTkqQQpgJLdzD11HqHuB7w9HgP6cWw9c1efgwQTf9ZF5ksEKidNsoEdNJCXbBQwwF5ST5bJ",
  "key25": "3bfXY7dGZpVGHsE2YkqVXn256yH1mp29DT5G4rC9peCDCj6Z3o5amXgseEUvp9zZHcDLKBP6X2pWPRzNkeE4JBm1",
  "key26": "3dqZdmphWnUfcGaNEHhjkKTJnWiUvsNAKVCLqXkWEEqtyrwaGMSVCdcXNdecaodUUZQ21kdibhFTe9J6FyJUPYXN",
  "key27": "Bjo7WjwpEXU37oEa2AAaS2AavMeBNK2prc6nLh6UTJ6m8BaP8iMr2hA38AVtiz8EPcTZsz68BhF1ZYgfV64ua8z",
  "key28": "4MQpz74hMfyWPauSzzcSjdec5NqC23tECpou2EUKPvmPqf8aKmrXSSzzxb8o6YoA79CDK3Mqed3QnBamrXwCsid7",
  "key29": "5gbrNPbjqJC5JXAz2nimuQaKMBZQYy5cw2SN11SiUj6uVgydTB2Pgjb68pthBKvFqCFwNKqFE2FtXbjQNs6QSpRC",
  "key30": "2DzR5Nee4Yp4P2xwDE9XiZqLrcBDUmneNTThAYzNcCvWLAZZgBryjfKjNsH15FayY1h8e8fgRSdkr3urLg4oKSex",
  "key31": "hoMAJNSSm51RUmA6Cu4f29UE7RZSXhnAX2xZMVj3S4zvQAGCyWgrttUmhb9Un3aYQMquVSP18hFQ5z8LG6bZewu",
  "key32": "4vgXeQWQkC8UBHqDSEfWKvZ1umdKtLWKPcvNimTuE3mnEC46VPc9eXfw9Qg1YpJZd7fp2DNTGeBhizHRPh8RLFGy",
  "key33": "63qLDhdAiaXbD76jGkPsJcuHW9TShayiKcNL39LHcS56Fp1Jbsm26YUF6cLL6P335XkKGAqsRtW3fVBNCpweZuS2",
  "key34": "2bQLbTjApV2NQJb11MLwaftdYfbgnnvgyeSuuWytCs1SCkXJ1GF38kFy9b747QnRCkWe4fyTsrfkFNH8Np2MJPAW",
  "key35": "24M8Pv7K7PvHajYnhrXqFFGTaeEFimFw7YEifaxjadTSYkg8KUPpyC1toKLe4rHBaW8kunm45EWY1ePWmmdmXdMA",
  "key36": "4sWNW1sA45htwUN7eVuQ6NxCNLsLWC3MSHpFSjyXCjnSs7uZbR6Po8FKNrnLHaGxNVEFiMWhjHQjNYUTKcfXp1qw",
  "key37": "4b93Ar7bzycz811uMQ9zMTP5UjCJ8qMZZY2jSuTiyd7tC4LRDvzjHYQnbFMQh8s476j5CjvfE7W8z28dVTnG5xr8",
  "key38": "6BQCqBo2wRcx4n8KNe9E3wGNbNTyxvypLdrGSBYwvX2pS6wZkEZQqoAibVTBqPQj7KssRHBBmb8U3MVdBhvR9Yt",
  "key39": "YAuiVoxcivUTZFFR8BXmdHqTh94Pip1fRfwiWvzd59ZPAyER3zHkRPq4aVJKp5wMqYxF6c1nTSDdSJDzKz2mzSo"
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
