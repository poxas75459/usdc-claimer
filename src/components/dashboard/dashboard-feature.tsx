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
    "2NUUj1H2RP8zuCPLxsHBEaV3t6PuMAy5eBXrGzFq1KfVTmx1ivLTbCZyTmfCztYGfxB8XWV6hJNuMCi371HTxzzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PktdYdPDLM55PS145zeuXDW8TqoTH9Rej7XU65nCXxtqLCubaprTbuPoS2nrow2Uqm5Gj5LZiQNXNzLnURWyh3D",
  "key1": "61X3CsKGBLEzJ1LKt6RhQ5Gj5u1vZZJY29yHr4rZTiX7YgzxgMWJUPJ2zjwaRkZCfkGTe9sFiCYj7LEn4ywthQ8f",
  "key2": "vpEn1ABohGohvjR5s25ihPg9iPtQ8RCrcsHp3Cm6XPvem9seDHJzMNghHCkWbEETuPaVgEhUdGen9DgKFEbDoTw",
  "key3": "24uZtb5HqeUEVV8izZGeHqszwbxUFvzprN3Tz4R9yUWeLv6X6tKhqPLXYEqQFQY7SfQ1S8Rks2EKT92h7ACTpw6R",
  "key4": "YZkQAunNR9MwwdW2wBY5rykSEXJVU88iK2wo4KwYUbu3kaQTzjGuqD66qra4tUpLCa3j935jK5HnQQjE6mLNNVW",
  "key5": "2M3oQdxNHyhBy36B43NswXdTsFqCmTUPcioqpGKtrzBzTC8rGt2KrkNkWXkRKRafn9xTqFe1yY3RZJs9omUDNyzL",
  "key6": "3UEknetqjiw26GnzKkCmswkZayaqd3tQSd47wKKsahFSaVAiZosw7bvXP8y2n8eosdsQ3wczDvDGoKjzfxT4eQ2T",
  "key7": "2urSiV8M1qpp34hxgnGj6orVFeYzL2iJpfsSDkTa2DXShbu2Wo6Xn7TpTyhSGenJKJwR5wVvgfBjsAJErNKiQxLL",
  "key8": "YcWbUdBk2Cp9iVu5cs9TiQjN4t34u9dbH6tSNGniMU5x1MtN8DzbsGEgqmB9oJyfpiFm83RpnzsJemXMpY4xnCL",
  "key9": "2LhpwAgiDE5QuUUJt3Qr72nasedvfvXNmDZW2oY2Ne3B2Ls6APumu6X73RZRYHWWj5qrhPncXXTn5zohztQQB77H",
  "key10": "4TqUVsan6Z3We3NNpy7f9od3K6H9X7Sq4WQak2KH2cdGw7ki1Ghx6jqQc3ET1AnZBNH4BiR8SjEkV6LsBnBRAdCV",
  "key11": "vp2pAy886HGB8B4n8ncQUwWQAVC55v9iuMtjDXcfMQ1REqL3hhQo4SABTiv4rWVtsycdDrkqZWuRZsER5LyWUk5",
  "key12": "nVMSPih3ZDfo12MgXnw4e1WhYm2XumAsBjGyRrLNkY6yaXrrhvrxJxYePbRq1aTNnpuvihTakYi2Uuy6RQA1mBT",
  "key13": "59rr9TXgLKvLQ7uhjdCmgSVDKKHcGn1HFa9vZXtKrPeRhZq5pGdMpx1HBpKqviWCrTvFoXxPmZrWXeApe4qzCTCK",
  "key14": "4FFjRtCBCDpLGUgRhQrknFUY1BUwDTLhUVhBvpXWJtiUa61SJStMBuqNk4VUyDQZDa3cQedQ8ZLkmanFrJvmXDY5",
  "key15": "KX4oCfde8KWJnuzbBmGdfR7Wb3VyMuYpKTRAbYHjuc9FirBVi7whsF5Hi8NRzCUV5iTPB1UBJqWAyaYepS3vsbu",
  "key16": "2A5s86SHTUBqh8tR43UD2gxfBE7mQ3nXuNoiA4NSrgYeQDxjAFeMuzjP7DouEPRKwa2SbYD6KoHrAUUAt2y273Zq",
  "key17": "3ec8GZGMH5sc2RKe4zyrHRAbViHvrVyfa4MaPaniximRRGPbvPQNAXhJAmwhF2k8tyG4HyUF6KukAGkedvmZ727B",
  "key18": "NLtjtGA8CpZbCCatvmGy6zF8K9Bafw6fi1crHrt6fhosDtAvqKQXAByUNVb7d15EfsjRCTPXimynXXHDVH2Bs3i",
  "key19": "2tfCexYUVghfvidw4MCv5Xm9NbETjTiS2RTddvw6QzN5NmnrixeoJCrqMw5CUYY8WxPwrCoQex4QetQJC9AhQBXf",
  "key20": "37SjaFae9JDHoKcfTmA3KBCwUcqDMD43mc7i2pVNGWEKDD38B2hbSRmfgtiBUUstDQQTsJGUiS8AMxqa58SBmyuF",
  "key21": "5CkCx4ERWw4Zx9XZJ8PaLWgJ1C6wGiHWJsmANWNWirHHjNqEmc5f4wBEgVXYaxDsA1vX98iNss5S2UmNFQFHjgcR",
  "key22": "4kFBWUra6Mgf7RF5FYUfbK8wPg25Vwgmy6utmdWu9kN3gKD1GQGGk65Lzd5vPEcGxohgJDLpdsyDkiHqRt6zE51B",
  "key23": "2oJtA7nfGTx1N1LBd26YLnK3BSyrfe4wTfZxtaCuzuSjK9rmdyYNPRRfZxUQGZ2KFTz2EqZELdtttdrseEBScjZn",
  "key24": "4GX2CFigLYYFpbn5gMgjQ12ZpjYuz8TznfgUcJ7J1HgWw5e9ecy4XW6dwqhA3BbD9iBJcBTGzcCzJM1PudAsgt2Y",
  "key25": "4VT9jkR6cUR7iS13i2pni9rvsmyV7qh9HmRzRAgCrZnNyiJxmQDmQQFtkWrPvTGtPyHrm2UVAKaPnSiRmzZ62Y4b",
  "key26": "4b7V7yKmYcfDx49mavEm5DqApnmFEc2tU23fsh8eCTxx85Wh7Xsx23omEo9dhyeuebGAWhXhE1LhACHycdhAvA5e",
  "key27": "65EV2qq95eQ8ggdsSMMAXBYFnyMyQt6vX8JhauWB6BnSyWo1rb4w33eNEPuC7ho7F94uHHHthE4HGH115ZjcRnXK",
  "key28": "48ubQsU8bvwZxH6xHB6BbZkYsHEpmMCc2YtMAVqhUd2McuZ6xwuBp518319T9EiKYLoWVzVa4PJY24qYF74tY3sh",
  "key29": "5yhK4GJWeMAddmnPJmyWzzN6WwiCSQQVHUTfQmZRbSYqVshqAh5NPPhGfjhpPDxgdPxYtK3qqtAB3iXMEjDyWpMj",
  "key30": "4rs2qwGjYCKfdZ5e3cEpr1Y4C7TGpCM2V9mZ8bF3hQneKfQTujUyTK9fSfaG6UX41vVZMnaquDfZfFGXNbQoXvt8",
  "key31": "5ScTLmy1KkMet6KSk1fm2HtQUWSagESLuESE1KrrgrzJYr3ykSLPpudpKAjY3B4spLmJ5BfY55SmPgRFSThkTpiK",
  "key32": "WKChYeLXXwA5QErLCkU1gCpPmn4CUiCZFPisxwHZ6cEm7Ko1XKUVcEeBrnvLnWZknLxeha12tKJHXbYUNePCWk4",
  "key33": "2KHMx5ZbEQyyGjxuAXQgSoibjQCgwChKJJ67ufa54SRBgyVcdgAK9xnTLyZE83Yo4jKj8AWjurCzDJcFJ3ntrq9F",
  "key34": "4iCdRGoK9UPkj7Xvc8SUTjcb9ucfwYYGziRp5cUzjZZDU4TKftBfYScVfy6ojDc71BzBtoXcuKJQo2Jj1nq4Rox",
  "key35": "25PnWmAqx8MXxYVMmfALvCUAJs6D6ftwa9jk4jpeZmJZh1UPKJP75L7JmdLHasj2jYcUATrTikRPrdnDZAd8Gzk3",
  "key36": "3agTfSWs3BWasLSmdW2M1GvbyH4RbvLDMCMPC6xW27VhbVVVHPPsSQhQcxw6YguDDM9ig3xVjrGXSx7zBekzWk3N",
  "key37": "5XCfpSha9hMhrjc831fxRNXYSFF2EbYbYX8xetSKPix31WcyeeYyRq4BmuGJD6s5GopZSXdEgtWW5AciLzkH39SF"
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
