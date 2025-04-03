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
    "6Zxpqxpfwtc146sDzLoTbA6JK6jV6MxVa2VUSMMP9qWzyuHPoq6U9dpRYmSPnqZDkRpXtt5Yi1ZLFtodA1LAWi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QkydbCPJaj5r2H3EnGCsmGXK1VFeHRdAnrBeznjgHnXc49A5DqbBVBXD6gF94MyWFYedWR6f3yb1XMhmmq1Pzu9",
  "key1": "3CMn11Qzud6wwAUPhmQ9L3bE3g1SiHmW32pagtMEesUrAaTfMymZ7AwRFGqdHHeeyQg2S5hZCP2PqYPw4mmjcqY8",
  "key2": "2r3NkbTwJqZWTd1FNh3cR7osuFZaxTsVrGF6ftkbBPV6xur8NxfVimYYN5EvREMqQHqVRapE6sf76E2Ps8wFdqgZ",
  "key3": "2ySuZCiyauwdzVnxZkkjniVpMJ341DiYkyf65zax7sVbn1hnm3BfvA118yRFm3ZnLatniyeWzRyEDGa5UHXgon3h",
  "key4": "4sYd4sJur1Wqmfv7bh286wXK1hvgqjJrDsDE5byEkQtoYFHFFhGeFGNpYrMbLzvy7fBFPsN1oi7e7W4qauEDyCCQ",
  "key5": "4h4ogt3VnsSJYZ7ZE7EFFaS1gV7uG6LHwDDqrD3o2Kwbuox5iwyWPNQ5HAHDwHrr9hBCSuLRm5Fy6XRCSD3uisKE",
  "key6": "62Bba7CyWPh9GL3GVyiSAAFWnjvpjPZvr9nViCKnCCqWLfomXSaXqk3DbQGdP19cKouz4ATt3R9nwrCRsGwri4D6",
  "key7": "iQm8yJiCUrxCG57h83o7RUPmWA9Ud74NrFC2a52xgBjcPZVz6EUEoLKjG1o4ygHWrLnAXFt5nRDh8qCbaNiDK89",
  "key8": "R59XzYNQWoce2CKKySz6SeUsBMdqRh1B1zbRD7MiPVRXqBQ3cd6VC2tHDVszVuhMb4RZLnMshhc6KfZQbmJCDMK",
  "key9": "tFT1h7DbYbViDjHvvicGMw8NvzEZKzE8ioVtSUPhq2ud3FSDUhLMa3QmnCiNdsT8uekQJPKkap9v62HW7w87npn",
  "key10": "3UuT4aF3CZBJ8yK52knGjYoTaymkcNvUk3buFrAkjfpmvvMjdLibihFMeVwjio3jqzaRGiiJc5Vj3B2cEVkrP3Js",
  "key11": "AstJdnV74MJ8sdeKNPsuBdNUzk6FQ4TRrg9fdEB8aqANESz3C16emsnjHySAmcpdbU7CA5VTayU6u2cY9PgVZZd",
  "key12": "5HKX7a8USejmKxFUWLeusEv1EwBZBrx91Fcut2doV2CfUgu4SE8BjyynmGmrirrZYqNDGxdcFtaxwb5MMCA3PKj",
  "key13": "4mY9Urm3yvdMQRnZumVcqPL69Sp72DK5LUWB9KoR11ekzf31K5FCmquivKRvbQETJcmCjH6VGExZQ51zXaXfdN1y",
  "key14": "QTxtisTSqMsmNNVrVv1wRf1xVPJUwUk7JPZPa2WnvzJPPZJ4LMX2iFjuNiiFkMLCec2qh6ZFGAFHptsr2wvTJUi",
  "key15": "4U8csqaqpp1bbGCE3egQC6peivNSkUsPiR2mc5VPP2mMiL16AHjUMrjZ5q9gFAZdpAkS8TWyHEgccy3HpVJZ2QMr",
  "key16": "3EAukNpn5ssCUS4jFV9RAJ2WZEEiueUfFeikzAH3ZDGrb6FMUDSjTPK3ayR7HpJomPDb78YFxENLd73oLi14yzoX",
  "key17": "ssdt4kCXMXQvVkUCDSEvjNMk9SrkPrsJ6s3z1jXdgZrhWmSu8QPM7ySeAALgzJD5oweP75uakHcxrubZ1xPFHRk",
  "key18": "2d96et1D9b6tXyxLNyFiibP8ZKamVPM35d5nF1uhVWJbv9BdA5rpVVTNDjQwrurbikq7ezfJLWVbd8Wv7CkULm8C",
  "key19": "272UbgZ8QKzAgjD9cmBBw44bWmdXjYUVLiAiyPXpvU3LMkbezWEUD1Qu1KfuhBstKYfvKuivfndbuYr4BJBfDKxF",
  "key20": "5zXG7S8BqpkmYvGJ7Krc6XN3R8Kivapkh6jcsK9vTL8NKpFKqwrdMBdmuU8k5ziweBwh4mxfvXWpNQyqkgK99aFX",
  "key21": "vbTB6Ub245BTVmNG51r6UdVeVh4dPTN1BwEeL6NBMBRtP9KTFDPBaMfgDUHJ2KdpUEJtdSG9TAgHsbtkiL75DfP",
  "key22": "fHX8oTM8DebHyhTihjhyXvaLmiRgNTgCjcJQkYx8NJed3kh1QNC54mrUdvFnwsTd85DBYLhD6a7GDyEF4Hw1z7z",
  "key23": "4yHhnu1Cd5jwykMQgTRwW6UetMQwxfKjyzqcfWhL9PEkUikFyMffU3YpmTSqrxGsSijJBoKCnSTfijoVe8MZmDW8",
  "key24": "4QNFDVYiNBDomuKhDHHwsgCrD5XRbB8NkoQHikQpkE1wWNTpL15jkRBYst2N32fSThmWVi7FwKvSfMPCtRp5Xs7D",
  "key25": "2bWjjxk4273jkejXyxSk4KYSBzfBuVL4N5hp7ApLZ6a1z5C77yFYHC19fJcUX61mMgEmyar76khS3AQDBqjftbyQ",
  "key26": "5KMxF6h1HMsKfxct4DyFtDqZQ9S548VpCf8D4eKDRha8MJtPWSQhs22hMX28dg2LLVggvqry8PTY4KXAjr1toZtz",
  "key27": "EozckqsGVehPRXCti8JqKqpyCibU1qe6iYTkJLb7bQ5s5KvetUG9VSeBP7TRY93jrn5gfd4yqszCpqakEgJZdLm",
  "key28": "618nnLJTtPSmyLL2F52H1yLowLRkb3rJhwkPwt3nkSHpStYyr8wuVwngKkguteJuQovHWZ3UZk8FirC3tTKneQuP",
  "key29": "vCx58fvPHuGBQXzdkRYw7GZA14LieoCmytyx4Z7aJTEEYmkaQVTDiCfozk5Wgx9oq4pD2Ky6sxxTmf66LDy7hG5",
  "key30": "2dFd6GfR7D4htaDQcexxvJ2kxewMy9kaE65726wMk5ejmDwgCtfuja2VgGxXGAeWT9dagYqPyGBiKL6WX4ZzRVXH",
  "key31": "2RDMCuwQAmXX2pHZYh1BUgP2jpVhrAMuMsewnVcSZzq1mVFDYMrovsBsK39hnTvkfAmUGcMViNpHq9sR8yYcYktE",
  "key32": "5VwpuDdkf35pF99tNZ2Ya2vq8jTBsdwCfSPbUaktGieuKuhoUzaZh6foTRGkCEaTXAPifTkShCx9ifvRnFzfPrZe",
  "key33": "5fbtEWjgbpgio5mSKLDchBAMfk7oDkSd854WonPFWq8j4xH7aTPu8vV3BFLah6FiC8ypvAowy4qHJxuTeB8AsZeR",
  "key34": "5MLv3FsqTynxUnQuDaHjb1XjjCcRbqU5qvUcrgjT3HEet17dQXt4XqTMsMbpm82swHDMsGhiys8opJ89YbQDcBSR",
  "key35": "4B4mQ3hMUHPGFFk9AcGmY87DVqqZkWMSrQFGAgMiYfGcte1UvQXLV9gd2LxiZLhJi4vdS7RALRZzjc1N3hnLB7HY",
  "key36": "2R1aZpPx5NgBksTTGoJhHaho8dwrTVVcHNB5qcZVLLQsFrFXw2oVLLcgunQmcaiGWUVnYpnWfABtWMGDFNbt2nao"
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
