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
    "KK419nvvmkgxfu1At33DMBb9fZLs57LokuaiTaKWs7N3pUdZ7H6Pt8fi2EKVCgjrm76dqyHyWgm1UkTE1JojM5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZTmU1C2HYork6hwtEUGN9UM7383R36awo7W6yG25tJz4RKFezpzrdAgRASLZwGQAjCkgjpbPyrELJp5XB96KmJP",
  "key1": "4JL3AFasvcGgjsrkse72WU8V6ekDr1rHFrbGbH8PUzT2FitEowkJSXaZq5cvs2dbbjQVxkBXyPAEFv6YA8NTgUvF",
  "key2": "4BjvGYCVs1Q2N4aVPM8waKLVNWjm2bN2zFiaHsRg3VsThAyoCzpLjcU6MpQ6a1bYeGyq1yKJdfLFDGesxtPNdMnF",
  "key3": "3aS3v6bf5RtFhgUSCUaHqt19rbrbsnLRauUEiiLpvdytY1fKYNAhNmpLfAzn7XZKkYghtXV55t3NMGzLwm1Nd3dN",
  "key4": "47CWEc8vFzmCesPSFigwNAk5jScjsDVFYLUawQFGgviUgRWpBthmUeFqbhS1aH5G5HeSGxHWTihS9BAhjrKsxdWS",
  "key5": "5yaFc6Fys53Vo7GfCtuw52RgfjmLKRjvjAFv1X6L2LJn3QFUoFQvN3VejMc5zLeT6k6mvpLHxZUJdK55uW92Nz5W",
  "key6": "5sfEyocaBMG63mMyqaSFadNiPHZa6CCPEmv65dwK7s8EZrzezrzWGrWXWWYFbxffoxK4uqoHabEcTphBGfi5CJ9B",
  "key7": "3spVF945o7DJycsA8ZSZQ8p4Vq3kVr456Hd7UUdJAGoJeXy9A9aAVZvi2WyXNm5hqCGo5kKrjihR3M9C5r4YXBLf",
  "key8": "3X5BEU3vcH8qfq43PucTDRG2F3856UEX5AGkWRPcUrstZHeiY4e7syLUR2pDTscrjtYeSDuUD88ADji5Vfwg5QVf",
  "key9": "28wxKrXQLME3Lh4kdYDZpZNVJ92mQgJ2LJ1fpQKAqMQiKm9w4b17V3pFC53JirjuLWiUjyxUhAyigNoVrcEyPdha",
  "key10": "hbaCGTvL1F8QoP1TDaxjTBBJHg7vbGWNU9tcvTtJb3kQvF3ztQVzq5Xde9RpbR1uszEyoP5GFcRJEVq7hwb7ufo",
  "key11": "2Vpuk8nkDHEQerr7eakpjReeZCKw8WveZ1heCueWCszU2bPRmDtioaQQhbNJeayazpapJLTvkZd1rNRj8KKkqHXb",
  "key12": "2i5Xa82eRqnmk1TmdmUJnrnMHX1jLUxprcjYZsK4PmXxeh8QymVgUcPuidi5RmzHpT7ec172sCD2MLCaFtyoecy6",
  "key13": "4AypkE2sWBkFMRAgQJf1UdNRsvcFQxvm4rjuZQ1xMaaDSJQ7zcaTJg91VLZqDUEf5JNcwtCVtrqcJ639YCuPc7Rr",
  "key14": "4nKT9cToGroS7s8h7VDdVWrfzhVZQvyrezzhgpiYXDQjLQfcq2sNtpMB4ao6mDefFHZtjNhRtc8VSpQGnuaigukt",
  "key15": "oCqMyQzigTUsJhvwygpipkbxPFpEg1vQkhdSzXYWFn45yzY5MFLhHCxJyQLbUiiZDgaKA2gJtotpWymYxEgtcKz",
  "key16": "3tSUsceAa7zDNnEfH1VghwDaKQrUvxJnk7Xe8LcpMzqfXf32aKdk4oUctoPiXt9D44K9RjDmjCHwEiaYjkCiQujD",
  "key17": "4pAfTPGDKRmJAfaLDXD8LVnmBFdF9jKpqge5Xn4R7oAoNyAUE4vbiGQQTSFn9sFNYucn2rV6G4zS4oLDCWxLXeK2",
  "key18": "3WFR7c7yJnABcJLSAiu3JZjtmDoi83pHBteFBRVeoBFsLipi3zXeXB4MpLspmvVoMap6H5HjCnNxmR2SJmN4sU8L",
  "key19": "5ZEnSEbqiCStWWpCYrtYgcgEDreZkQ8pAvZfJ5arP47Xnku2HzpJHrnZ4Xcqx3Xpb3uNKBcaJw5dTVsp9PurfRSn",
  "key20": "wW1WwyZowzLGS7fsW3K79btQkv6Cs8mCeLMBr57RZUKxf8DEQ2fZ5rZFWnPppNu2aVsKtAj6xUTRiwbjr2os8T4",
  "key21": "JtAAwni2Lr2qM9D4uhxe8cPf72tnu53WEzqRmpz2pn5zUFzkidD5Ymgk571DX5RqzN2P3WKMx1n21LsfoLFGsxS",
  "key22": "LWxaiwnp87spnW7A5x8aLhab1Bv1t8QAqzg2sNMnS5SXnHusb8YWGRgxLVAYc8Hwd8ZMFLuWZm6NmTNEx1Jr7d7",
  "key23": "Sy5FcBFbqibMpF4kQWCmMiZ7ULSCD5Pc12CwBMA6PBPKvH8HABqw7i3AgZNfdbnmU9AyMELjCuhpyivjLd4D6bG",
  "key24": "57AAfvGBSgUJKfyV5FWapKJAZZEr7bUAEchb57KKiHJb5ohP39X8cC6QBbWM75gLSvSGJQZccDJaRaMFhwbZTqzF",
  "key25": "5QSifAe4wAgAgBvUcYH3ddw7y5RBxcBM3icLbqYyG53V4PZKr7cJNc1rHdTxzVCMcr5MbfPnnCkBkDYQ45sZkeX2",
  "key26": "2BWF8SwXugqHXCbPaheYzHTNWKGBrEQNBdMi8kvgebfMrhza7V5ToqiG6fHTnT68ApxE7hVy6yjQg5YnJLh5v5vr",
  "key27": "AN9Vt79496N3U24QvbJChewAT9pUbLc4yLT5LQNsQgUYtEpXppcFc67W8D4ZhnVeVXR3eCGnb2mSGyf5wJXoWQX",
  "key28": "2MqxekkuRtrUcHD3XyXXmSqqhcsRXq9g6NSsWNneAP2vwSg71c6Sm3mbjDPKUnYTErcBJMHb4aonKn5zpaEefHu9",
  "key29": "31F23rPzCiMP3ktHhCXBBWEpq3MZML6g5uYQFG4Ay7S2TDrmZSApKW5vuGmMFNMgksQy1Bi6uQyZhEGhyxSk1q3N",
  "key30": "3HrnqqTGBR1gaBZHiLkPoc9RWGMhyhhaWuujNJbpdVeTzqhCkNudo82qyUmTtxWKB5tesJ8X4CDhteuzFqWpk7yp",
  "key31": "d4wkrMzvzvheiPPV9Yc1XMeMhpfLQ572w3FM3EMmSKDQeXJrXSjdivqxFa8Yew64wVwe7bSHVNb2rDjYSSQbvWm",
  "key32": "5bYvKffxVXoKQtqvyH9aL8Wu28nV7yXa5eGFrtXv78rMr21mqWc426RyqHovEcaYCWV3VTHwgfKem8L6bNj75F33",
  "key33": "5rWEUmeZfbQHLbpVMo32ssDuT2FRV6ZLuKYyi8oNxcGrRUAYmQvTC7vmfqk6wodvcVdavfcH57mc3FgedzPqbEPa",
  "key34": "5UDEqmNcXJPpTdfDZrcxdcyq9JQRmUAWsgTjJFxaSsyBYFNK7jCqT99JJ86j3xokjXRhPFoAtfrYo6jUi6iq9yY9",
  "key35": "4CsJiBRobtK38SQX8WJc2YwZqjZDskFdLVZjStqRHFbJsjuLfgKvXydUPWTcmQRsdSsTRAndiJwtvMDSvkb8oAsm",
  "key36": "WAwqCNj3Pxwn38cGiSWCrCnre1QpYhq4R46eeJ4xwE1AQKgyaPPoZ9hCMyPZQJwWKbgCtzpEowFp5AFSkgr57pU",
  "key37": "2TtPTVS6r68mQPMoDfNz28XAUWxozwLyXqYnJxDhC3zKbN8RsQMaPTP9ekAGk8y69xLYBbQUNjmvYy21H5gcWLdn",
  "key38": "5MsojgCm86rohMLNr8o4oNQQXu5FGrAakLoNgGaWe898MWSgxcga8K3hzm8eFE4XQEFmuu8oZ2zSJEe8Feo8eFJm",
  "key39": "3ficNHjkPr3eewojfGp7JA4Xv436YaSekRW1Rrsah71ucvapnVEST1AZYngjrtRykxA3s3HZXxw4PFD88WX1KN1d",
  "key40": "4uJgkrunN2MxoTpN14emxuxCw9B4UbwKB9q5B7H3yVXFQSdvwvFPERUVUaVZGGXjQsn55rrB6ADvpzKEbCbF99P8",
  "key41": "2fszd2YGhN5MsTjfHcCdHbdmyuQnvMCpHLP3VEjULD68zzxsKQUd2ovFmJUAgt4QS9ribG9xCoDioQnDeLQFtFFx",
  "key42": "669LEnsob9XcS1htUfTMzeCUnBhDj7EE9fh9c6Hy1DenuwDPMLvdSXgofQB3kAbVYwFD1ADWeB7TiKj7JxhFkUsy",
  "key43": "44ehqr7xHB8wk4rNVZDnNLGWDY5kicGMwJyAgeaN8GoRFKkDgMBgNS8hAMgmyu1N1cF464LmoJoHkkht4k3pWsH8",
  "key44": "4QuUBCNkdmG24cVtGodu9Ui5ZABDSBfTaaRcAykDHz14vLUJTvyizsooinny1CoTYpXGcuvPQUfrEBQqFziyKZ7K",
  "key45": "2hKYbbQ2DXq6CAV4cC35oSQ4xcfjr3MW82aC4eF1MbZSe78K16LWX23GQH3FWqvq1iQUapKaLT9714PrZd27FBDt",
  "key46": "52AEV4db9ZaoUWinmbRo7q2cMXAMp6N6T6zngk56AXPVcAnySjMniavZ7V8BaWfvyVDKvNvHSHQy1YHLvg34Jxt7",
  "key47": "5iDmct7CXyofQjSR3qdzGiLac62nquov4t5YCn2b53gpi3h9SdMmZEmfHyiKZrtfgfhZPAJwuXv6UxEEE2u3CDyv"
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
