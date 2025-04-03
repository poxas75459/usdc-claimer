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
    "66Xqxg7sZ231VzTgYKDP1ZmEXMofjDJurfn4mivjBsX426GpBm16BHhoqSHsrUTjJp9ehbJBV7QE1x7bo6aPdyo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnRNiw7MxvB2QvosskZQWvZp1yV3EWiK7h4gAyPb9wKnSmZin3EqJ4oigvvBxcjes28KL2V9uDMPNpzZgYFbyZW",
  "key1": "2FFe2EV7bZEyaSjgX2WSLxcRQQNtYbbyab4wARXTowopwj8BhNxUn9UCiG5rJg4aJEezJVMev5ZfKiVa23gu7gGM",
  "key2": "2Fx44nqNbjEn6uSAqQyU2Dyn87naMXu9LEKY4w2h6CdS89T4fj6Ny3aFVP9wBocyNMo8fxSWgJTsw9eHs2HNsHY7",
  "key3": "5rmBbcdw3xU3fmbZtxnijN96kQwmFb7A1efmYVNNmoXsiAtZvkQjg8hm6NM6htyX3EaV4Q7J4Xd28Unxt9ceiGph",
  "key4": "2kRjV4RMduXf1KFL3YPTmmBiHnrXV3UokdcnpX3eMUD1vEAzFFwoQ3cKwi7dfEnHSxrcqRSDAUenrKpikmPCwtHT",
  "key5": "66QNtJMUGeB9oAiRM7HHcwsHGecuiMMEUM6Fsy4PjDraZycs6tp4g1RtNqS9bpnrG5WCYKovfD2iithcHWCXbcGW",
  "key6": "23eV6TvEw3cUH5kzTnJeud8aLWRM4M8AsbRXHS3aaGziE9sKKHF5UKuX8ZtHBANsfBXPSggnFu9gyNxBUyBNdbsk",
  "key7": "5BAR8vtLynL42AuXTsTYznzoS8aFsuVojq6MrjkmMMmp23sWsuRdPvFAY6ewrfwD7KMbaxPdnzS3G9zbXV2KeHiU",
  "key8": "N6hxEr9E4g7KesQTXeGQtrY1u524Pp8e7LMd2KtKAWa9rHmZbqge25tbpjWM2r8NQC74MbGdrptrKZN2N7Q8nce",
  "key9": "2m8716Qk3zkqT4VoGnw5UH6uxcDSsqqZ8Xp6XK7odtC6vs565ZdM1B5pqEPUW1nkmzXZCfLNTjujFvumsoPLKuZj",
  "key10": "3Zv11Exbge5ECUgHbPgjCsmwUTKwGHbjNsAcgcxMtr4MojESSZWS4kufqH6pim47LjAzWDRnsyzi5zgr1DaY36Lx",
  "key11": "4WE5V7PkMUVNJntZoZB1scfMMmZU2vqEWesSm85MykUPHDv687xQ2fK43hw8UibyruFoqNv8Ui1ddX9dwiqWcPdc",
  "key12": "3V49EiVTqDK7rueZp54HxJtFGBTAbCMbnEBFj4fDtQheNVp9sPAxc5qSb5fgPtvAP9JmvQqNXswffMSrMuQE1Gmu",
  "key13": "2hD5NmNTEEN7eFUUPa39zM4JFNLd4MwKRNchAbgMvJQrjoBVwUFNMtzuZCLQTFjny3Z1ReeNNsV8J4FuxSpxoZbG",
  "key14": "esfL4dp35b11FeoksFu88AsH3Khev5JKsa6HM8nEyrefJejWxUChRLXF1x8MSgdTr83nLLayTWADbRpZCGjbemr",
  "key15": "2WFcw2yRsX8gRnMPhWJdyRc4n2FGwBTZUkbbf6pTQHsBfNHTgYkSeXd6fm8hBdMzjpk12bQY18eLJaJvQrGaoxG6",
  "key16": "37wxAo9Q3gooTcCKjYoz178qxJSuTHpGqtra2k8UAEWQj6JRQbcCWr9vey3aEpbVDrhErGNHYG7412ShNjCkA3nn",
  "key17": "4USuQpW95SD8sgdx933B5ki5KK2Qc725MQVFEwe3jjffnVjMdZsi8p5dejPQySFt4rspgfdkG6L6xPxLPj4sK2eR",
  "key18": "4C8x68suckuEdSuMK2FVeyZzbWVmcFAaFxpjQmQWk51mjMJ55zQZaYNu5eN8JDGmy8UsiNb92PSoTXVZhcnyN7Lv",
  "key19": "2wfit249xWQDCoo68YiDMgLRGBhrGtts2yNBmSF3uBr2oSvHf5aJVQBAjCV9KWf7jUBAEvhaEXgvZKEjThnDMCuC",
  "key20": "4uZDpdH4rU3meR3BnXgHuc19D3XbDqcuDgEeWXTfiqfqatdLsyuNvXGjLPGALcjBkTUf996zaAANqyp4xKEUFRFP",
  "key21": "5WT81pPmVxizLmLZXtKABvgm38JpDUDeP8b2xnLdvyNdCRVu1vrPEJpTdyngeo46TNd2w2z8kHgHbHwdN7M7SUN2",
  "key22": "2GPzERfgYt2RQGUY8vWEWbCiyVeJZAah1UaKtijgiQuDyB5ojHLAgyVyGmfXFMVApYoq6LMf4Rtw7kJPDNGCkZfc",
  "key23": "5RGqp4J8jybpTNRpFynFq5M5fBTQcgz8rd9RRpM1jXjvman6hdWv9hmpWCqVaVzEwZkFKmmJKp2JYzKDPVLD5emq",
  "key24": "2KpwHC5456M5Zy61ya72NcgGYDN7ijRBtupo29G4LXM1j2F44svmb2zES2JzttjhTwWf8kDdcoJecAyrK5AoeWMy",
  "key25": "5ihL7EXNPtFMaazCbpGs4EVfP5YfoCh926XFnm5UEwKZzKc4tqvprKCLRnCxHi3PzhsNUhmYigG9QyjUEcmPdMBL",
  "key26": "3z6cq5ATWjEnmaQpHtK6ZQiALGkVVuQ3HPXuiYUmBGjX9vXBCwztLpkVoJioJwHF24QDubbmPoo2rXq6Y96Dn5R1",
  "key27": "qz4pAJ5499brWiqVi2VXnpq7Uw1yQ1uth1GKGTVUk7mqAfyQNCGcLDCX2Ln8nGjr3S86QwCEyZ3sGkGtrG1GGta",
  "key28": "62B8rz46kxC6rZ6Sxs7DangemJCRVcDBQyFNSuiyqDNfBqKECoNMpY7KTNiVJhaVk49jQDRqjKt6Tofv1PM5VGhJ",
  "key29": "25ae6AfYyF4xEnkDVVHCqqhGXPBC851wdFoUR8i8V36nuGEyN2BnvDC6z4zb7HC5Kv4ArJ13JFkdw7EBgC1rSREL"
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
