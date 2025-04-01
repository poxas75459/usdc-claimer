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
    "21G4a2vb9RWpv5kNwk4kxfDswpm2EfEvgneBBdqyEvXJmvkRcASsc7838fTEdhUVast4YuwP339pvWy8RKTsLFDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ShCCD2d5gDKGChKZrgNkCviz8LhnPif5ZbRuKYdknhCDPMPsy8u3yDNr4LFbSDGMCRii5Zq8LijyC6CRTxC4fpB",
  "key1": "3Hc8xE77Aabp3FuXx5HoZpzRLXA5jJEBEM9fRiYzbJVygs4WLxkzZMjTwEHontUGaJgPRW8PXTL2uHwFnuucZf3d",
  "key2": "5bnrmRDPTBrgPHShCaMYpL9SjuZeyT7SGeydGp6xvrCCLAzcZ2cBu346CsG4aUjFjNtan9m65VMS71NuwmhKhSMD",
  "key3": "4fozQaCyQFuq5YKjcstYLyCF4MHMshvRaYEwPeFEMiZSvmixRzBfn7PcCuLXJdY1djNasf6DKeyxsNKMd46JDc7f",
  "key4": "36WgctDWf5N26gEU6s3YaMEUQ2fzn2e7Bd1hkuehhNAdGGuLq9YFvsAcqHrR1JhAY3kBmoTTAPWMN8AhQihj55JW",
  "key5": "4shHMiWaE5YUSWpUPy8JfWqavA198iNxjoqMmozFSKgR4nK4D5yjGgiBLg1XTdi9C1kQRxu18mTaFn57xBuy8Hdt",
  "key6": "3Kdw4YN4y2SzBrwp4JDFuBdA2xogjX6ZVrDjwPiBcwsQhyUL8CBqoiVS8knFwbipxpWsqKzi9UHhkRvWgR77TPNG",
  "key7": "613LvCi2j22ZzMZmtJVyURRgiukwckCVnR1aihhWWmyZ9fjYyCgRdKhT12Lme7FxWCuR5kDaw5wcuL2kd79LbQL8",
  "key8": "3sQ8B3P3yoVfxJBSBkVoFc89wCz3PsLwhMZBbHYdHbPGbyZwrMCCUq1cgt4qFBZzZ9NUWYUzW16U8k74eW2DGEpT",
  "key9": "hqfuFz8uX52ey1mqWs4vYs7aMM7qgD5L48SSmSYedSZji21NnKiMFm5BrygQsL2WVQxh6ByFqVypb7JD1MNJtpg",
  "key10": "2BrJCXrYWbroZkqpsEDXZgGWnxAoDfix5Lp678yKFz91rPNjFRCBWQBJTtMwDQERK6KL2bcbJnfusNjurarRdag9",
  "key11": "N6HaLG96fXy9PxDXVtZWFUQ1b7PMMqDncF8fWUhuLaHNkEooEQwKmLztUD1XkDe59BHV9QKHuYrjRdGw17AAWrb",
  "key12": "5R9Qjm5YfSMG3BofTAiH9i2XmgFWMtcDyAUjnofQJ5iPrHnb7WHC5Cd7iDR3nEZkyWEfBd35zBSENVxvKh9DDFLW",
  "key13": "3fdLCUkB61dqTK7XtNBhRtXJhbPkcJuZkB93c9dN7WbPWrRD3vW2Tu82fQ37zDcTCy3ptfBTUYHgjGbc6VuNrR1",
  "key14": "3RJYMvmHGtk764RfnfNnJxMf6id9wGGXGy6xoGjrTuoqmKoStEqSAUCBDZv4Z4eZfFwJHjCfQGTC3WzAAzbuhA4H",
  "key15": "3BqcJMvEt4atKNWwsM6ZaCqENYgxyGD6eTwmcpE3mhHdB3cHtjZcExvvBSxXwvECg8PRivi7r1t54MXRSBTMMmFS",
  "key16": "TLzos9P4DWVpGUtVxEWU6QS2Lv3bgJw3ZAsvCF5MynVE2qAzAwdnk4KHT2mYMDCZNHhambYwyjwDhRUjCzFaQfF",
  "key17": "2kATBtd4YfsZ7s2HuAF531okWDUEBni4k5FWNhDNAP6tLXe6pRZKJveLCdypwq3PK6zS9s4JHLUTgw6a1CrYy3Le",
  "key18": "3zt8ehy25XPKWVfabyZS26jtnxXcXPz6Eaec5hUYzdQQTvEHFR5DMQMy8VoySwWrgvNe7VMPJciZBHAsZRfgjUXL",
  "key19": "3WxNCH8adrsxH2ce1xYDX5Z3Jmf9abzeErAsDPmfpcUH6HkpLtSmu5QzpiWexGW4GLZHrGNDg71CraKFmQXE2HKS",
  "key20": "2CLfefBNe7jJGcYnFSJFAUF9DvPy1bi7nwCX5DhXRcAn1qHB96nm4AbDZTm96EqHD5S8neHmYLEcC5Jn1wtBN52v",
  "key21": "2bVanBYMAHad2uPBUhEZNkBLStHeWqSbWg6SZXE1gG6QCRJpUQPs5XXgu9BR1pjgXAeiab8GGcDKEM7vG3Ad6W5H",
  "key22": "4TVTmMgH3SRXAYGqbHE4Z9WfMKhEeCe3Kjo37nuehSsRx1ie6QTo5VgTzE23ima8dkFY6bZMCmMdHznNUSuh8Nvd",
  "key23": "4Wu6TJXabv4jECDFWQs8aXqGTFsaq3EtTFWmRhSJYaSfgCg1gE8FoFkh6P79oWjCeGwcwkQy6Gndkhw6koFvCRnv",
  "key24": "4aEbmsEWCGTc8bdrgyVhG3gCwWKBEKrcrcq8yBiBZDDb42p9Ckwvzjnc9imbX4coBw5xyGhKW9SKFwNwafsxTchw",
  "key25": "2LMofLBFtDmD2ffqGg3TLbkVc34dxcvHAcsYDRSaxvZSXNw6AMy9Pe8JDB2vnix6rgepg16rsMHfrExfZn1Qsd6h",
  "key26": "5zDd1yB5bGRyMmUPyCArbPSitZrU7gMFLqdzL2fD14ukvg1TQ2jnDy97cdBVm2wLyTjpXHozLXz1QB1gxQ1jrPos",
  "key27": "qk3nyLThCC23FhexMTcwb3wSwdbfCSqQEffSiD7uvaFQCoBArSG6M93toAnChbbhrFgLChUqA6RCCAGCrVr4NnN",
  "key28": "3P59jEw9yLyVgve2ShRpSvAK83mouWhRNkTVT58ak6xNmVbnwLkQ68SQaiaTop3J1vwwQ327sbwsCvxi7phC7ysg"
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
