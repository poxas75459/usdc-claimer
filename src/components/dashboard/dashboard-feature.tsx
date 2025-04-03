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
    "46ygckrj8wk2kXyndPRmMaxMYmc1PyrRC6obHGVsBLt7WwT2RbrQGv91PsgqbXcGsbPe9iRZ4zKqHnXe6kLDCj6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LViDn6ewpgSL6YPnZhmzoaHchXxnDQPGVRf9Qc9a9noDZkahMB3dQKmYxH1pzjrX1Johi1kwqBf2Nss8HXgTSsU",
  "key1": "2tX2TMzwzRmC1obYNNwepMnCBtLuWVsBkPxU1ChQexDuLp24VNjZMeiLAxsGbcrTXprrrArZBiYGny78koq3MH8g",
  "key2": "3uWdg4dZrjHuDiDCi5FsqU1wpXcmEFRbjr1PFxxptaVUZbZ9VxmXHDmwYkUiARSg56QEs21afzgPUKzVoYy6xHq8",
  "key3": "5WxYbNtkAtQ9Xb1xMbAVcTCXCgAqudg8dB3K11y3nFwR3w2bBVGBk5cbcbj2EULbhZP7yYznppHn5gK6h29xJNQp",
  "key4": "2QQvJqHdLvCg9KUm3sZ7maWYAX2XCAopPFE2dr2Q2Ux9ahMnaxujg1qYoe3er3rCqxrFLgy1HXSb8HM6DdzEhCMb",
  "key5": "qaPnWbvuky7gpGTWwSos1oVWSqwypUTcAgWtQqzXJiCxhswG9yJpjzv914tPuUzx5U45eXR72VAK8S99UrDw5bF",
  "key6": "49Xszb8Xt3j7X474TBG3UYjqXRJ9F9iY69LUyyKK9ZrXixZAhVD8k3finPNTWhBC1oAKatPmbSd3Sp4aCPmkJwqo",
  "key7": "4FvdqZt8SYuGVKN85dHMN81bgpzofdLew1tVVaBPHvi9JE7rZpoWaHBvdjajGMjL54BYEGB6WxVBBbLE7j8Km3i3",
  "key8": "2TqBrMM6mLcpPgAbVjmQ2J96bR9C5RGzR5wxfJ5YMVCEe54vwzEtxTX8AmWyWuRegv1wAmBUTha6DRSBPZiF3cmZ",
  "key9": "4tfnRKxmjKVyV9yRegaVVbkE27kKUuPa7aSRpFXSzznZVuWeUJX2WcZj6Hm4YH9NEgKKZyr2pky4ZBperQyZ2dZC",
  "key10": "WxhpMZZEZNPAhjexpDrbpMew9GCtPNesyvPDbpCNB6Qb18ajmKHrF2enK6WAtkPTmMWR6mjvh3NhzV3TyBAyW4c",
  "key11": "56MDjDrtpFTAQD9ksWRYiSZyBDkyidkfxpSyjCuVoGbhDJ1twVJeckPajhDBZXG9WH5UZ1CMtbVCXMkfv17RJ9jU",
  "key12": "3N6nLsbh8vxpigCeZ28ZWkseFtLbPa3SrZ6MtyNbMSVDLhNchEkSeuZeDxkSWuSkRPCh63sFc64j8qtrADz5DQWD",
  "key13": "4MDUxdVbTDMkqtMp7dJ9RfFnMRBKg43nqtumZJTGo1xfw9toGFsR9RGWKG2ZzuUftbMGbpnYrtKmzGPRzQQHXwX9",
  "key14": "5w5DDA51PF4Q1jaf1URFjjzxYkcwvJEnKgw3j4aXcQCJV1rNKiW3nq87tcqNovV56rT4H3iusonD762RXJqcw9LP",
  "key15": "2qgodeZWC34uogg2kZuijqwy8nn2qLAhfEms51QJUnSdQ2PgNAfE35kTkbxXggHNkDC43ED5gRiSdGd61LYuNXhB",
  "key16": "5zZTb5eKcA18FwLtNpmhsyvRB7dmpv74jAMLi9L5bwNxCKbRFBZt6Lrq3HeRDdiNUxZZLjp7suYz1jCU4vUWEwCE",
  "key17": "8cCLHaE96gsheovo1cohnhMPMaghG7ABxxyKDD4HmNA3RWDkn5ZqZ3HeiMEGuGd2v31p7gGL1ouqkfwJ3WPFcBN",
  "key18": "2FBoEoiPUecV8eQYcuUAkWix1DDnP8GJnKudX9b3ZF6LKCeawmojUsJry6kWs8mS3fM2ZVHpriM96AizK7zVtZYA",
  "key19": "2XxS51Y4Wiu5H3eTnpmezVzYz1a3DeXHHxCgwLr1zxWHUgMYvug1tzyFz2A7LnHbitWN25Ag7YLANF6n5Pnq8ijM",
  "key20": "cJtrXbpC3WsWq65hJ5AC11FTQxMujywroFn3kEoN3wTugCW2BjfJiWbTFJ6CFQ1idLUg9oXgjaLQfptP3bopyob",
  "key21": "2yt9cd6r8xMYEbEj6iHrcW4BXvkwbWse4E7SYaJiAjtq65hcz3PgtKvcHjKvGKHdGBGydPXju8cT1reDjHDLNmTX",
  "key22": "3nd2Y1PwrASFo2poVChzocdpxto9aKYAT163VtLW4Mjfwthr8nSNCkLndxvBUSpR7JaghKgmJiVSQEsE4Mcj8FCW",
  "key23": "GccNe9MP6gsKWWL242pdJuKo4d6rbtBVTZYPifkkT6vaKSFWzW2UW9C21S7kRd82Z9UX1UMf2FpL72yY8GaWGye",
  "key24": "25Tc11T3mZadcQ7usxzz7HxkvcErU6EZbFLA2mwXNhmHvqeMocKZ6cWC5aAGHJsEAUMvBLozuNWXAb5QRbJ4m7Hb",
  "key25": "23NyEpjHAPfirAFbjANzrumX5m5nC3pfBERF6LQpcRtMVfTL5Eqvh2T3ewDSiCyWjB3JoXtVioJSeEZUAUiXzM6p",
  "key26": "3NiciZNk8N7Xd3MR7dLBhzHhEqRnLsiKKx1eyjyNe4fzfWgswoMeHsqbasxDuzuPmhRZ3TLH2LGa7vYX91b2oJ5M",
  "key27": "4euAVDJso22c3vNSx8QdGC72KZAJVyoYyZbufKPhbVthAZEdxi7WSv2pNFBkG1KrHU2SydFck4gCU5NrQDDxK3iy",
  "key28": "33bzhYGXgzeNuaa4t8kMJypknw21amTfhKhgbX3XUeEjZjqkGN25f2rWgm3GNHRZ1EvtpRAjcKXgNzgtbm561gp4",
  "key29": "4kQ4gYhZNk3iWQvTSY2aPAigz811XEFny8X2C62SFHBkEYCBWw3QiGQE2qEEoe12gcxhAvs1i49BxKX5sGKRTamR",
  "key30": "4aFnnXSwTuDT9wpiby9nNz6VupTko9z3MFZfZynoEYWGkDRPgkbh193EQrcPHPeEQRHTHGDEbRDjGbBgDcKSrizw",
  "key31": "4M1KFyaPK3pqsi3CbhJ9xJ2PZMdj9netNMW1rLaFfg1qUXoeqY5cNy8dfMUWBia5aQijMK6a3mGkF2Kt6Tr1J59A",
  "key32": "3cmShzi2FExbBcGS87JMA1hZgw9zUMvmRgZtnzPPCCL8LVW63QuGuWtLzuKM18REXRC9LFCvCEebA7mJDpSmcHnC",
  "key33": "fxakvgzsb8p9CNT21ZumHWgEqTVk4o11pBGF57smr3jkVXd1FhccpmkSTsvAbj5R7UFyHSG6XfR3QHp1XV3vw1x",
  "key34": "5hfD3pzV7zqdcnS3gs1Uk82pYE7jZQKxaumTuVmnz1c6VGAg9PASQxshZhrsrAUHADd3CWd8g74bN3SDLmCfJQsU",
  "key35": "3JQW7RTm3PVjztMgxf5y7g6561EC9PLtnxZHr92jfBQWRzSh2FFQtBSAAksQ7y3bSk2siJMysYCvFoesjBwHowFQ",
  "key36": "JpmTbj7dQXKe3ZY66AAa9Lk5UgFHWu63pz3vDweY5c5j6PdEX2hQMLkSbJ9UK5BCGMtZ7APH4qm1djhiF5UvMTk",
  "key37": "2jsMTuDhnonk3NmTTuvU2cnq5kVEuK6DVfR8iSG33tz5GBDmXam9sDTtu2PbPNiSq53TriGG14SVoG2pCFjYyn1t",
  "key38": "H4cb7nhdrkLdM5LDgxvYrdZhGfh5SHCCknfSH6LBBsajJVN7jytH1Eix4gi9F5ZPB7gsj9MPH51QrrhQWWxEjtW",
  "key39": "3oYTVyRhjLz8fC1RnwXwB5ez26xF47gb5CorhbwpdGdeKumtAeGcDoaK571WoQWswdK9XkAtSVgRsZQHfmtnFC6o",
  "key40": "MoD61nMJj1XFMAF3fe7w8BGEvnmLVaH5fukQnANag55VeQWmzdiyqVUNjxo8uMyQXXYTXMhQSnWU8U6NqCGcPNG",
  "key41": "5MLfVs72bnqYEirgVRNAq2TJRJAkBbFW6wRY7aJqByyLtwRScm1t3s7Q19QMMXpFLHkj9YJ5zKyErNAqAfNXJqGw",
  "key42": "qxD3op2YymEEkDFMXivbComFXbYSxMBovaAgrUhBXwkK6J6V2NvUWzJGdqykfqv7QSbmxyTDP4vt4i98gKfSP1P",
  "key43": "3r3zK6WoocieJjZWN5nhZ7Lr98Em9X3zsEWUW3jnqKdDLUYJ1Yisv5y3qCtFhLHvKw5cknTzhBLDMHSn41WTKTc"
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
