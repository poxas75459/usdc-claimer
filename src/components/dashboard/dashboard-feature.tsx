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
    "2qyrPN9DRLvx8EEHVkesJPZykcBPzmtY7DraUEn6r3WAwiKnf3iaLCXycuCGkoLgFgWSNhZBfF3U1UmKLFXyhCcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XT2wktJZxiTiBLTJ5iLGgGtPXUNXnJf6gXSrDXXyxxy8jU7C92QcGyDt5BCUERVmpWLU3gFrnH5iJUJ7A4XMX46",
  "key1": "2unjJuE7mHFUG6ApY7SkeEdTjCanvYXiXtKJQ71vJCmMZNfwFYWLAW9NVUbw7g5TpWYb7yseL78WqNw4RT6ThG3G",
  "key2": "3swqoPoED213SePp7fHiSobMQUTAcPXHB3HHnbPTkXhVxrQXaznoYggVYWjAe9s4efe3XrLojmW1GrbzVhtCWJC",
  "key3": "64T6cVyiop6YSW1EmZ2gavZeW6GD7PNAiLyNLk5rsU7GF7WPcmrURZKm2jGGwCUhd2NmVTFFvmxX3kNE8qH6NY7k",
  "key4": "47R4unjrgEKp6vd6ZuenpFEKMBMDo8FQ3auYXajqUXb7cSgPbAy5QYs9eNsUXK4v8pRhSBZtpZoNSccW7gxqKCbM",
  "key5": "4xmeVJtcLzDWNnECgPck6jdXegZf7qubMJQVdrkcesmywT8wg9LC74MonUeKuBrcSY3xciHW9RGZCCiYgLdw11g7",
  "key6": "2izx1wGAn949QUmnMtKc1Uu9fNC2aPN9MfR54xkWPkRYXJpnTbrhddP7wRSv2UnkKzAT2yFXTehcjjaMKNDE8j9z",
  "key7": "2aKMRprCBkLSZANb1Amk6sdfpPoPRg6ZCFnzGiL7cBXADoQzQZA3SrTQRBmjJXbcY8jEtft8vvSRv8i8JBjoCZaR",
  "key8": "4QR4fcu7v34cvzNFC87vBSDcJLRGruZQDHwWegiyiewq76Ho6VUvRQJS9scHPATkkJD95quL3Y9nFevs8sTV6pzz",
  "key9": "3CzbTx77FTBJWXuXpx4grjgEBFNe2jZyvCrRjSjdgEd7ftzf5gidmx6yWfGYvgVGV1dAD3YZb1ZrPrcLCxVamoqu",
  "key10": "5KUoHgzTpHop1xZdY7BE6WpWbLX4JExLKnSfrrpTxnqZnUV5NKzsppjeRUNsSQYaGs87NMytAR1YziBqmKxAohhQ",
  "key11": "61gzRhy3AEcAUdebYSeH3uskf7zYojSm5aXhxG5YHec2JcYKhyYrHVABfhbD2CnFCk5iveux8qpCrUbTGUypfHbu",
  "key12": "3URCocfErf8HiqHSXB5MysSsnGJjfRu8msZfWniGHHhmwZNeaWmzceFJZzC2WEQH9okNksFb9b6A3FfD1JYaMTsE",
  "key13": "5rcR5YmUqQoFa7f3KomEJAHVpCGW61QCEEWnFHv6L2PvUfpcApmemm5ZUBUkt4sqoqe6373tPvLXMzBAT4r98XV8",
  "key14": "2FtMv9VGgBsMLNkXYSFkJRpfs6uMR6vMg3PqZsvm92ft81qNNZnGuDtB8eQgE29YLU1k5p9WHmCt541AmnMnwT47",
  "key15": "51fCj8zVgznC1s8SbJ32Y2GQ1T5Etfh6C2qbPkifKqnEoCzT4qSobARcV9bYRQ7qHLasG5GSrKCSDyhQLmUUWVQb",
  "key16": "3rsaXer3BxrcShYZxdFYV9yfuzdbZv2hNrk8hX89B5R68h6MCUoFQbpW4SyCdLe7guCRoNBtsSKDu6VTnLgpY7YF",
  "key17": "N24wy2JQxssKyRqdiT7Bi3Sq78zQrfG7rw8vbU6rD87ygCxugxzukLGkY4fT825omH59WktZEcgau4jSNupcuS4",
  "key18": "3stwjJWLkTf5yFPnLfCwfCYbigrKaq6hg5VK46cSLhoaA389fAASEwzcAUucg3pArPCq2wUnrKxgUhueigjXZWpt",
  "key19": "238n7oBDodMiMhUroyeMw2atGaVoKNsLghiB5ZqnYeh5jV4yoMABTSwGuyAHNEjysVZP4i7eVPgxdPSbi65V4s2S",
  "key20": "ZCwimMKejXbVD9AiSHLcjqEstX51WkkUt1opUQGSGV1onZouCcsQvdWb6xt8ErdmiZdnkxqdcQYWxUh3vTz1Dez",
  "key21": "4KmPVpNpEUtazcxk7aQNjucs5Pf4VsKEVyJTcRcfntpXm2Qf8LyPtLzboxmveUc5qkUKj5dT8qFmSb1jCwrhHYPT",
  "key22": "4dZGE3ufCEbJYPC5gTsuSZz9UiFixULHjhSgz6wnQdt1XRiaojPk5cB1tRYRM2vjr7XREmk7kC4pMno1LTmLKWEK",
  "key23": "3fBMCwU1dvThM6RPjAQrRgXw9xx9rBrM4TBGR6EaGVGeDSNs4mBXPvK9h4ZYACzt3Pv8PJQQJEjKuwRu6aMmdwHd",
  "key24": "2PoGfFY1gjNmbHtQvEVncw8yjWbxbHZKkF6oCMTMAMpm41PnJb6ebzwf2iiUXefQTzSivb16tBFwWKZneEY1P21i",
  "key25": "3jo8PS7x46hD8MsCZ6dfxheZC5BgKfGiPdTVi7t8nXM1jVWLa4EzF5BeVAk6cyG7YH9fZtAfQXkmbnLoE1gTubVh",
  "key26": "23MFrjngzKJNNZvfydoytgp5dx8WKM7eTezn1mykrNkTbvdRFzXjXQxNfrxr7hMwcnpvB6nSTcJuVzAAfUFS67P8",
  "key27": "3pEdjFLjAGAhAAZmD1apv93LcorPMgGkD69vJrUMMmwTYcEPonfZCSXcUkvCGtYRb93VtDxr8hKTox2PJoV2hgFv",
  "key28": "5DWi8w1dtnLVWFQENpdVRze6J89nZBimTf4yMfDDjmUH46kSKt8dYo96NkpXmuJrenJojo6eakrwei4KiwCp2kiF",
  "key29": "2U8mh2KCjds98CwxUZ4xvEQgqfAYioeKPV69Nn2eXNTKzjroftujhwX7LUob17Ap89jTbQQQsLdR5urfroMC3zBF",
  "key30": "5SF6Ns1DwrSHLf4CDuSdTZX6SapjSGUzHs7xNgrwhowJU2CoYRkd8XBPHV4ufwECMcoEgPPRZRbJf1K6DWcE5n2u",
  "key31": "5zEwC6W1TBz6ypbartfT7cZuz3UDmgizgqqmyZdPrRo6AHqaDwFgx6tXj1rigSk9khYmtTQQQEQry7y5DpWe2Ro"
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
