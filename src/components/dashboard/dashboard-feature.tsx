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
    "5tyrTbZRKDGNggPXPVkQzMbzhmWQbyS2eLwqhia1Jzm1DsRQN14H7Pd8vQuV1SSYXLGvGUy4NHcdGFzjQTNvBGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yUG6JdKdkNaitP1Cabezpqc1THLUgwP4ov5Pku9tU63WPFdiPMsLm2xEHVRQEJygRHnHDud1MM4VBihmBkFC8CY",
  "key1": "2R9P5AvSseGX5eSA4shkLRa7vQQ1z35T29VLkgDVsPJ9pPHXjiVaCh92nhbGsAianSGnUXR56rr9BWytfvCA4aC9",
  "key2": "2XePShXR6LhzSvTovsAKhZ4jwDTWQzDPGcxL3DAL2JAMBPeLuH2FEqovWMgjU5jdy3Px1a3DUyftxA5ykPyAUfaC",
  "key3": "2yQ1iH6NsjJWsJqdJ6AvTbqQUhLX3zvLcVZhGRBihrtKUpmAT9XaorzjP4arF8LAywhtFkuuWuuRzRyH3ZDmToaF",
  "key4": "3QN73LtTJs27HBar2N5MVzZm7bzGTQtTEVVZEC6dUn5YdeZvxgCRMeUs26aNuBmpdRXhCkJqTqSorUkEfxjmRtpL",
  "key5": "4DQiWoB7KKjabis7e21DyxcHRj7voUSS5D9C5c2z95VqNrcgfv2iRPa8Vo8dAqRSYWgo4NqYLAK5FUPzzhy7qEkT",
  "key6": "5hsZJkxR9HjZBqmp2z9ZP4xAxmFHfWgDpCCYCxtmvCWqtoSPG7H9BDeJpWYi7jznHVgSh4P9vgjZsrR5zkSwMpqt",
  "key7": "2F7Ki5Enw11HehWTNrcfXYs5uJnLEDx57UYE2CMq2BUA2gPDTsMomD2gY3qbhnJ3WCLH1xs8tYSu4GaCVTTxbycp",
  "key8": "5nUmhzPq996dc3WAH2sUg6vVpbwfVoNPq4Pnhijwqm6tZPNR32yYh3xBG3drPjMsAZEupP5GiEcMT24xpFw7p8Ua",
  "key9": "2i55nScC8ygWSmNLxUmuD9yfaLm274mtABd5eFXhrNTRy2n9L54EKV84JGhSqYib9DF8CFuH3vpcD3gtmU2Ejhng",
  "key10": "5j96fPDLybNbEM76a6tCKkugxmCcU1vwm9e7LWtxsKdFeG5pmgg5SpmQonuYgBqhWaHc9Mti3rK61kDf54uUPPso",
  "key11": "2BYj6DzDquKTYH9pd2P3EfBqMxWYEw6VaKaFpK2j5JK19qfWEhQo8MnSXimYT4vU2Dm7VNUUaWM6Y788SBp4PK4X",
  "key12": "5K1WAM5Q9N8mmVXYS2L6JfBE66w9Kb8V9EUqMinLiBWxtZ7VyUVMMb7uYSZpAcLR77G4rPSVBFFfzXn8JdwUKk7Q",
  "key13": "3PQS6FvUyd6JvY2ohbK62KyG7bmDD6fjKhDfpvN6mMoNGhPEYdnaJau4PGj6FAKZcvokeCji8jYzd7x8NCRAVtYG",
  "key14": "23JfegfNCsrJ9Z1W5gLnB3kJD5SHZ3HvNauEusJ3JdDEFnyDyYfZYbDNTKacg4MxYATKHtqSQnbymUoKUeJRrL1C",
  "key15": "5DoaC449E3N68T3o5c883ffGmCyZmpy3pxuGUvK1K6ZxXPSoKvSbiSfdXPjNebEQGtpDAz5BQ6xTBB9oU3L54yh3",
  "key16": "3oRst53G3wxhk1BysWWcfWoqwjtZ8mkMu6kNJhGmXGu89PkwmtzLdc6SvrwgeF4pVzKMz7CeRoJES9tvZDkwwd51",
  "key17": "3Y8z4hPXMNVkFSrQN5AFfZnVqmmWp9zZgjpJz2pv1fhEbiDGy4r9y24LdiXGqjvt1YckD2pXQgd1cVH34E1vyR4V",
  "key18": "9cBUnGsKzEyZNQFEoAYngkkPJwwwkEBA6fdrRCmhWS52wD9pzgzXUjmRL7fYC8yDeQLwwRjVYtFjVd593YDeaeh",
  "key19": "2E127FigbAmiLVfUtjPfMug7hmgXCL6VmtXrDVQeVMfhSY1eV69yXfkyziFawbdbj8XSJcmkphNhGBiehn1GhNAM",
  "key20": "2tarf3xRJk8tm1BCP6Fu4oAgsn7drrUdyMm4ET4NWuUmnmen3ViZ93mVMxTTpxpRpZFTHvstjKqvyUzuHhKfebBg",
  "key21": "5KSy2wsjoT86cBduDGLoK4TFSsj1ArojQvQsDCBQp513AFQhR9YnZa68icdNAP9M8kzD8eSK8dE2EkXmykF98cpY",
  "key22": "5T1bCo28f1eD1x2CeEwWWo3N329vAjMhUf9aKm4JPusm3TQcGgnaV1tPvoX9howwxXAqUKyuLnMiqspPWhnFC5c6",
  "key23": "3fgew6aJS4TwsgEFfsbXAHDXvCD7ayZk5UJTf6cBxnuHNUPDfJLC87KYDGJPbc6Xe9AczkahH1UQbjMJnjqbLfeR",
  "key24": "5E1MiisQENCKdVM5oYm5ZnrJSDtqea1RJkttkXseiWhcgkYU4aEgzzzEkCB64AKUGvyGKyf3VYwfjPNoohUeeYtM",
  "key25": "29w78tNFeCTYc19JuHManb6osZ1iXq3wdMtYy2B5QxqhRma9EuDBpGhzeX57BfxqjANeAaAkeTnRd5dKRdKBL688",
  "key26": "3PvRriruNGdK7F7ZxKdyKEt4cCHyDRpe3FxNmZ9KGEsJN2ZkvSWStjaxaV8371r2Ser4BZbTxPYVcm2KWHfk18Je"
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
