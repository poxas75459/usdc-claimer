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
    "3HMdcRhhhAnWs3oMpFiZMvJ64mY3gMNY93USpntdf6qFrWoP7aJ419MZQsDYyjp67GctpLhYves7mde1m67smPi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zsq9HAhEBXDQbQCGEefH3HgwVSebei1GeuwztaBzKaZWcz4aoXdFLSgeFgY62KsEwSNqQKHNXioNpcDePepZQr8",
  "key1": "2zxFMSJEHJFkuWhVsJZvBLd4pExVPSn3JaMsA5wnL4FXAQfwoEWbWpMS9HD1ibah6ErtLokUKEuenuMVp1Rg5yAM",
  "key2": "3nr7yHnMRYXs498ndGWS6riyCVEKD61w9RZKUmaucXstiWzS6pBzyBtijBS2hwzPXegqBJHjCpCnERhhK6KtJeRi",
  "key3": "48Ds5U2wjvF3sxgzymkuvqr3NEE413CbDe8u4uu4mhvdwdpCuRimPGTGpwtTwRFNzQyFS3ndLtS7k8V1UBjqHQJn",
  "key4": "42hEQR7oCrwdCyVQE3ZV98FDz5AZG4FVtzz3RDzkrAHFzxAqGUpkWdAfixsms3kiTEhtGqR3cAtH1gx4gmcM5zva",
  "key5": "2eKNzHkCt4M6osJhwQ5ALoHt3N6C23hBc4GZtwY25RUcLfF7vXN7j3KEn27KJQS4x2VEMv6U6T8eAGhunzi3ezhE",
  "key6": "2Hnj6D7n9f7ETKYaoewjhfU2PdjAGpZJgvSqV5Jibf453J5Dv81PEREdQjQ3zu9M4v3NH9MQVgH7vJ9gFV5JVF6H",
  "key7": "5y8xQpNXRhfS94yH2tbmhkaxmiVhQ9Xiywk19ZJLRK3HM6zGhwhYmp3pMbaDZmAKTTdko62jWg71s6LRC8BEpqFp",
  "key8": "5YL5wTMCYTYBvCjYpbAYhjTyHXDDo7hndmEnFiJTUAr8mvhHa4YHfAuhnLRDasqNESZZxH1kyS1ZWFxKArT2mawJ",
  "key9": "4bjuE4vjcXzpBrkAAfcJVwpb6vGMrA5my9qJ9xVgUqeeacvbUAVm52FthLwNTtWzVp612Y2GZz6UGy9x8fUvUUos",
  "key10": "5XCnPHuf3pDt4mSu5w2dFnBCYDZnctWf3LTfw43m859cYAzi5PjUiVJqqNbF54eLCqrdUFk2tQEMQipfAvN4at1v",
  "key11": "2EmqH3mJJERyDrxPLbK69xgPkds3eYpVmbbEsyKFS5ZL9nasLM5Y6raPky8YeuwiajjC97bLynKbT2n9jm2MEfzT",
  "key12": "2zo5AJWPXw5iLxufN2PJgKotuKmwfYc8H3wrpJ4fzZxhwjtz7J8YhtaNwVPSjSKMgug6av57s9VPpX2MMGQT5tEt",
  "key13": "2m9fuiBbjFgdavhYQQSNqz7w3hKEXv1MXVbJZPQDpyg3NU5hAvnqkGnThdNMgupqwEWeDcmbGEBtbMGHQNo3LbQH",
  "key14": "fEv1X9hC8UnzLPcTk1UsNvLn9kDfFtDFaEHHz6CyKL6Fgi6yTnaJ1QXvSHpkiXgSCFHJ41U8D7rCRh7yNxkmu7P",
  "key15": "2nwvoJ6AWjFoHZ1QZ7w36NYbmSgocqk9cYwKn3TSfS5aR1Tqii1Wyptupt3bQdmDkSELTYPdW2tFPQ9xWRAfhc8B",
  "key16": "4UJNEbvycGaEsN8zmtjwyP7jTaSUjnDydGK8HejAFsbqEsP3bb9csLrZRXPgeC3Bi2BPd9XwVt66jqaPo3HWAw95",
  "key17": "5RA4zYcUQMvQyYiMxHmxwnmd4XY7Tey3WLJoQ5qsVCJoKymz4j94Hudb8XZAMfUkVPUDhrxkxFasdwD6pBQ6m3dh",
  "key18": "29HmCjsSthpYh4sJiBjrws6ZCvzxqxSgJYoMZ3Vi6BN4spWErU5W9tsJszvk1NcMaSUMVNvDXB6F9b3rNsWNaTJo",
  "key19": "2v4uSYNdjJJFpf7yx9jQ7v5LQnKMTCYCz9xNKN4ixvpzhBzGEXUf3d1ayMRXDCQuxS2YJFq5yYKK3wK4xgw7RvtA",
  "key20": "EBL4jfA9jDUeXhmH723obmf1cXwh4U6Aur8tYK6Xubf1gVnKqgimaSsLKTE6kGH3p7rYH7LUTAveiJGiLEUcHDD",
  "key21": "PwvafBpMZ4k6XAyYH6tFbBCm4a4KJzLBPksyC3ieutVe8KBan2k9FSUgVeUn3bvi8hPQj7jNFw4aZxWezrzxMuT",
  "key22": "2iPKZCeXvQJMrqKfjAqMc5WM85PskhKwVT5b5P59aMXoAhao2STBxDMiuviGDeFRePagxbPoXsgo6DtDjboe5ZHY",
  "key23": "2Cgqt8LciB6MBY7y2TdMJ755UmRgteCMtBjZA25r2zpWoEEdknQzKFBnommqkZNMqn9ytpHsUnACFYrFUsY7cATE",
  "key24": "3pzQ36aAVuPzsXjqFYG8k3EukH1Frb1Z2NP41ZHM8g4QRgceC3BYdSZHGRzRLAJjTvnaXSR2JA8JrGbnhoUHTBtS",
  "key25": "3YtF21qNRWd17DyARSG3j9vWcDmWm3HLC7s515b23CA6kzYEkeqLkbtZujxLZPc2djFLeJohfiTp5PG53Ctk3zJn",
  "key26": "u5TURw3YXjKcAUtxriXtfAYtmyagcox2QaVBcpd8uiiYBjjMLtLWaieFPbCgtson3nR7cyicZf4VtgcXULahkqM",
  "key27": "4ByENKq1xLJc9GPzePr55k6gJjif7vXhwxjmMBuBUApTgbTibr95cDDC1EkQzzMjByk7M3Ear3m8XZcR5sjCc5nc",
  "key28": "4WFopfM429v4bAcd4Gb5eVh3K5JepbmEG4iYLohXsYQxdmutKf923VjGpSZUcqu7eLT3i2ZbBkD5LvKM3fBQ6ocW",
  "key29": "3dzqQBt6ZimT6TK7tKXG2Cf6RLECW8jKez8mfvbAKpesWcJstSpf8SXaJ6SQ6wvKPKUZvSmc3x4EQn2e3ZrRnwXx",
  "key30": "5jDJDBQZudx7ktMnqRS2LXimbEFoTsbeGTcDrgSQcgGWLqkhTuub6yKAyqHfhiK5t5ZDCP8JF45wmXNCw7ZVcZbB",
  "key31": "4WbirkEphRctSSRZ6gPweVwA1iYMpfgLcdvCwfVgmDLN7cJhAeovjzcdX7QMx3XjEMPJJ14euSMkxUP7H8gGDwxA",
  "key32": "41LeDVYADg5nVYUWCorQkA45XkYMESxXzjQpb822XAkXFim9apsrYavjXmJ3mPcAPtqigS56BdKe1sF79wA5P8dz",
  "key33": "278bbtYtMMwP4gAy8UVpqiuZkcCeQQXu9pQJ2bzYDaZWZvrHa14pPtKohGjVzFg3tgNFuZZjLC6DWXbZVvNv6rXQ",
  "key34": "2ZUFZNR2gVuMqp7jKzBh2MyE3bdoRtfMe7AAUViY5FcQwRGTzGbnXWDSyKu97cS8YxhuHERiWPe388pWynnjehuz",
  "key35": "3ckvtNtj8ydD2wutJUfmktnZWY9F8U4MPevfiwypdsheJruCP1EYvf7tNF6Ufy4C31ypTp1dzcrmM8k3fd79XQTx",
  "key36": "YPzASbFps3M4yqjynePwriqMeDe5Xn6kgSW62rDTnWa5f9zu1P63GsASrnQHX19j2VygC9CnUo594Zi6UfNDVej",
  "key37": "3fkXAs4dxcmNbypxEEBPv8ZbfZoELYwDnhegYVqn9agReoVAN6rViskACuSLdWDgzjmSeEFvaMKSdXgdgHbp3S2g",
  "key38": "3cfUANGDQfsuZB1Fg5261WxCJKDC5oAHLHYyG3WZDuBwQfTaqaXr1hL2uPue2grdr2q4UF4WbkL489zkmwjJA8ao",
  "key39": "2PeBUDg5HSkUuEVdYJ6pfNALCN9jyTz3gD5WbiegoVA31rZWg6axH7hcDWzyymRJHiUJVr78G7SnexNdnKWzMNz9",
  "key40": "M8ppCF4PWMVRSZsuUFwtgUKzXsCKTWabej9b8pC9k35xeScMM3A9TTxZ4ssd2qsmbbS1dvYNVxAkWEab8eEqZNB",
  "key41": "5tXqctoSGhKDkxED7Kzf5tDNfS1sB25gUAm9VRimaU7UxgGq8Kw8xAf1x1HipC31bsdS8DcvwQde264AXctN3yz3"
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
