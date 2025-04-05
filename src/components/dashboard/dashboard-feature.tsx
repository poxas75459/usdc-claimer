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
    "22pZuWojLdYE92kHQuSUe4oV8XNJ3PGhb9ydnq6Qrm5fBasmgM4YwyxJu6MeE1YYmCXgFWzwrA8L1nSCmEemM1Yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dQoq8sBaKDm3XmGTJyY6GWQVH6xCKNx8jBwSqJbgfAPBMXbk2JgebmtQdtFvx6ro1EhPT1sfHFp85QDMebayPL5",
  "key1": "26Cv7XK7WcCvip8pt7GDYdivqwTWznVFG67ZECdPXy6S9B4XBosZCkc5tqa3ZWzABJ32YBmKpfoiKoVHddPPjLD5",
  "key2": "44cX2VGn2KF8vqsF8mNJaoCi7fzdcCowhLeWapzt5xKxKQivJwPdJVJchyDkZiUiXUAhzKTu7kdpXdrChST2XH1x",
  "key3": "NrgN9Xkbz6mkjPxYJETm72zNoewvEaHnnb2WXrT2pSXEkCLTxByPaTn7FrSTzyzg8JLp2pSFTw48s3YqmGS1Vh8",
  "key4": "4KBNmV9L4wBnUdspJGBFFX6kDVRRHZoeNyvUwEBvg9ssrSkuacfE8Z27jrrMeDPdj4U8zrd9UHTnmeUSPwS3feX7",
  "key5": "4cMhKqd73UbRPe8Pf794zpiBbq4nxRw3m34MLHVZMXy6yjkgY7rwYssBa2zQRdYoGiFRE8q7n1NHGRLn9UKaTqop",
  "key6": "2pKvdvZiwKzhMAF3iFmpJXmp2kX2BfDsxcpo6YpYCcNTz1mxRAzc8WsBNPMSVnw1S4mmUbx9mnkPjQzvh759Sont",
  "key7": "2JbHoPZjpmEcC7Ep16ckjgcs6k2w6R8dQfr3FWJkKttoKupcVHL9A9HMyFmW3ECssLuwfGCE6poRDDepsXFxtHEh",
  "key8": "3Zya7bxWyypyMRrWkYbhveWVKPA4MQoPau7qjzNRAqRCr61wZ2dNg1w6bCYUdkUMM1GgUvL5hBz4uS3nLXRX3eTS",
  "key9": "4f4uVGBzCVZV9F93TWV5NfWa33WPdqCwpZREaa4YsvLfAHP5YKmpnUUBkQjxukuWEtXvVpBHrMNoTyCdFtXawh3v",
  "key10": "45j2ZJiEbkJMKvLUTJxewbVz5ZEQaDDrKUMwGGqUBsBCDm6UDBrtVKqv6Tjpu8zvCtAMZypF217pqE8pHuxxNqL6",
  "key11": "GN68JWVEQUiVuDCMnuX6dUXofjmLHVgVYMVYPyomedVsreygYrxZbAGwk9pTYeGabQHwAL7YRnSukeujnbf4eZW",
  "key12": "2UE8SFu4vHFuVKPbijqurTkYh7VjmMyzJoD5QQR5exgA17yNQZ4ZzCuP8cmGvbZNWGHMQcTLD56wmnr4H9X3eVVQ",
  "key13": "4UHc15UJaGywzbjie7cTS6VaURymkKUumrMx7mVDFx8CUudYRYpQ6GE71agQBhwggLANNHV5mWLWGrwBwuqPLUVP",
  "key14": "3Cn8nXS45Z4wa4KVmDCtVojEQaTCmdFqKzmHNfJBdRKnpUZ46i5GfwoR2rzXLt362XRrEKwazjgLiaMpdkfaRxmR",
  "key15": "4JnErVWXXQATfF5rrX9cVFTYPdjR8TsCnxYjvMM5QSzeEseZhnkYpirR3iKcPSEUWTBeU3d4cRawKgNHWDHM8get",
  "key16": "5ofXejt7UnsaYGiLYvTvbrbesoLYogKMBRU4gU7HnTxuNQ9dKos1KnMTANqmh81UuNN4o8BRzH9Y4vjSsm4xF8j7",
  "key17": "3dPG2iePtMUGSXvK7YBRS7oUPoF4BS8R1i6DcBqkTUYAwNezkCMdTHGqmdkAdkcd1794AUiSxik5QkdkL7zTaqum",
  "key18": "2XQyvmqwKwaFsq9wbmCN3wjKbmLBXbH5GSSUycxSERsZ3tFPf5rMavnYxzbUv7JgNtmCPSNH6Qg9FgCwiGtPHxpd",
  "key19": "e3D6Qkab592nGWrNpPMfCsSX6bU4eaXCZ6uZ2AGkqHbRCk1ZUrytFJ8YY4g5YpQEGv2K5n7oLQUuCpPJ5nde9yT",
  "key20": "kjyikyevpX67WHHmS5CiPNnEYVyLBRFcZgBoY5G6QM68FwKwnZhq5xkC1G5LNszPbasv7DUHeGZ5PErmoWJQRss",
  "key21": "4JBMo5wV6fmJPreFanXjLMLEX2qxtRXtPJMi6M7Tea49Cn26NdppQ9xCPuuXhgWabLjFBrxmGT7E3rSM7WsS86mK",
  "key22": "4QtPaAV9ov4bCbGDF4XpgzZY8QNiy9N8oroVwVQE4c5QradjMbLK173FiMEfVmCGjxQrgGG7YdzJD5Vt8JFWyw8M",
  "key23": "5xs6H6voXfS9bMujD9jN2Dwc6CcNjWpT2SSrboPoutnJ79bYUtDeGDdy9ywyVJiyCMHX42cbwj2P2TYB4NowN37t",
  "key24": "ZAdf56tNNeRkVMbhTKFez5aS9Myta6JQwCtErR24W149kXCwSy1pN4wX6GwJ28cGg4dwV3qT5cpvDShuypvJkgt",
  "key25": "2WW4EKHTuSp93XAcw7GWotjLNB9vcomZKN2oYBZvAmGGo35cufQd1VoA1AmUFn9dndz2iMJUKjxGmmo54243nT9Z",
  "key26": "64YK7E7ZSD8v2cCmHv91u3K4ag7N1jwjj1nTbAhd5W46QkYYswwEaX4xJ1BoFfVyD8mvfqrEBSRRsoxDSi1RuGrs",
  "key27": "5CWZ1j2uypfjgrPaBUNwBALHAyBvxjMkH7owGrT7xUzGCNfZNh4YJ1SWBB5ujf5i9dP18kSBYCeBZWLzuApAEQt9",
  "key28": "4GCxUSBBbmKy85Err2xJd4mQoPRwBdxRAe9vCYbDb5EfDmRqmpBDzrLyi5JNtGjx7KqqNTv2ctbQCytJ8RwxSpN6",
  "key29": "4VU6bZhdHRywy7kqrsoRdAuN8B8BB6uSzD5814PFBRzYJnPGEWsaynwYfpAWqNC8cHEMiswPMbZGN3vQ5FHW3YYd"
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
