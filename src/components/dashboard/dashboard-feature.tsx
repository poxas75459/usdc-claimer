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
    "4UmqxZhVffkKGQwDAqZSqVbtEgrodpyW1tR4yRkEcqFzjXns5vyxW2QpQtvSH3wbVnfSQNisNkw9v8vs3hiFJyk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NeDRfsmJuNkEawQriFLdq7oNZnct2aXTyzdaY3B13qQRFze4DCFzBKCVPXsZ1TDbrrHfNSkSR97qDhSTRA5skkC",
  "key1": "3KYYSxjRYedjrWP99Gyjfd2ukjhLJ4TwUqgUTZAV4Ary2WsL8HgfW9zmPUFwsHLZHBdDQBGzL6famyyBnEBLuKQE",
  "key2": "37iFheZoBuEk18UkfZGcwsJRAhAogAdS3oHWKetCxFQ5dJdKn1fGn7qjdq6tGwymRFDbcp7VuyCycDQhvDhs6TnX",
  "key3": "58uXWbHErSQSypmegBqf6bCmtsbXfwzUkmWgSM9apttQVGqNjMxWskREvCQkH5vNEAHH8kNqQJvq5EAREbLMPsNn",
  "key4": "512jkh9X84K3bcQb1266BeEjyfQfong6Ec4hWuJbgoTGRMJ6mjxQuhvZPFaftisCrk1pWvKc9V3axUZKBGbNgPL9",
  "key5": "5kjzRM84chSkQxSEEXqs3QWQq5Gc9gb84MHV2vhEighnkpRpiwcX68DH2HBDYu59Efirzmr1ApUCk447DvthXDTY",
  "key6": "45J59hkU6eWAce6zMkmBE6B6fowLqtawXdBCcxaad2cq8n497HDofh4z2VwsnWpVjLaRSVSC7Rn1ds7JHqLHDNMh",
  "key7": "2i4FyheRe7ihoqYZNiBVE3raCzkjfMTDU6uhrPg3ejWQKKKoJt9CzpdxpjxsH2hEaZsDXsjohKUyiQJeSLooVp9K",
  "key8": "V9V1so4hdmgXkmMHqXiZet5w7eXUqxDaUJgVAB3Gr8XnMCbvRyMkq188F858dJ7YaZtT87dC272mtGwdEVvBuKk",
  "key9": "39ketBgrchTW6Pv5knJZ4kozkysicrSdTBXtZJddP1orU6fpU3LaTzbppFAaRY7iGvj4xpCcCFDFJTvhobVjAvKw",
  "key10": "FinY8jqdtJnNuPpAaRpKYjQPD527hbWmYmztdrH56tFkKjCL3pQgmB9YbeVQ21RYTNvDgbP4Y4y2NAaQYg3yRqh",
  "key11": "5XwiiVVDvSmfaP7X4T9hV1D9BU2PdE7SNLCTUwAK2QePwuLKJmhrKnnna6EK3DjPscVyfouL2fSpdYqKYcqNFvdf",
  "key12": "ouboivNYhBzWk4HtmzfrLqn6ahf8MquLebPbCM6ARzKQfdb6oGfJreHDkQHHM9jKsxZbVbkZk8SVYdmvpABVUvM",
  "key13": "2cKnXezMi7Xybh2KkRCkh85W364n5arrFWSkCsRYHh1gQ2aJHD1qkytDjZWwsrSreD79BeCjt1Eu6XTYh7mTK9vc",
  "key14": "64qbkACohyd6FZFB92xUXRZbdZgfTgHSikFxB1Bus7bbGqosGPKtjMgU2SvEx99mkkUXPp8LNHoZgbHTtjha15QN",
  "key15": "5h7f89utWCgyQzXebTn4cbHzfPqB7rE7kCpn2HzkFKZjr9UvCCZwoufhcatBJRGmKpxWc4yTNFc1yrGic6Z5RYDo",
  "key16": "5vfCnjuLrrArXNro3CkDsdbZ4C9GQUkyCas9bp4Y2yH5uuSzkCiqTDaY25scrnJPsBnwhfR8MRvfvWXscAHckP3w",
  "key17": "hQDuxUsV7EC4B4cjnyXRVD8WPbbemE6UFua4yQ5dDxFnpoLMzTgrvWuDDHHCcLWDoDMuzhMdTnA1cTSb5Fzh1Vn",
  "key18": "4D2jkmSzirxxUc2v6qXcNtA6Gq8o625Qn5RV2uKMatkEUD2e69wSFRxZi3Uk1gdvYtohMyHaZbAQyn77TNM2561N",
  "key19": "fw3QcjkNHaxNW36w7AEQ9jeuUUPubADcsVRhELTZF23kn9tAEDqmD2xNGcGUUtr7d6Te5dpncUX6Krc4XUEocNp",
  "key20": "2oENmLkYcpfGdRGhAegSSu9gTxDrxSyb28oprDdCobkgBfSfzT5BLqsxdB9SCWRuKRCVRbQV8g8SAfsgi5xn6u5J",
  "key21": "2j7RQg11bmB5dTuEEc46H5W2za9iq4tmByFSfDiM6VdWTfjDPM4Fg2Wb5itvZ8zvXS13chXdT154uc2fD79n5UYf",
  "key22": "gwdj7d3VT87VLtBpcqvJBYyPRADNadVHHDFkmpgfYR88p5cJyz4oiCdUEN5SnTXfrm3H3qHQGXKKQpWABp8D89s",
  "key23": "5VAYbmqwMXs8oby2XSdh49Q7ud9kkxgP6yCcG2AsS4maPtEZmk7b6rKcrHMG2tTHVinmJJqATGzqqg3j8Lz1FK14",
  "key24": "5ueWM9YUMT4WVzoEyC2TLLn6jAZ4F9SpvzhhH65zcWxTWw1A6rYShacgTesKqHtMRi7fuS81EmbUKF87DziFxePH",
  "key25": "5NQg1zV1pfUax5WiqrzUMZLHabskCotkaXt9jFCt21iygHjF9krGW8nvyYbAqdM9W6s18bmX7EGwaVzaF88bJpAD",
  "key26": "nwSdskJx5DPTYKTJESyBhirqnKgrDtLAaCc9GgetQ6ooRpEwP7T8u4cW1EcpSsWBpPYxoBQGZHznkR4DFQRUG69",
  "key27": "Y9N9qfbRNP2wwhoMSjTsLUV1Va5QrM9ENUfxw3zb4aQdcWtyHziqzaAVdg5qKrdvYGkQhgTVQNoUT1ojgV2ju9g",
  "key28": "3Rkp2y177RDL6k77WWzkkMDM5PHWdXyo9H1xLZyN2AMquXhQLQGBzctxRAExPyNWmBWvXnYTgurbuqAr28HxVbtn",
  "key29": "5RdwZTGji6zJrLEHEV2qxa5y25Q4twBy2cvak5MWT3yK2k55uuaFfPD8vSvz9ubyFkpKb2wGULVWyHuTv52DMnHJ",
  "key30": "3yp2fNPvK1xQ2hzW6Q9uSLueXZMto1WRFuYMShKYmAdshUCc7unP447SNwqNh5ZMXwFuHurcvxBm6mD9VskCLrGo",
  "key31": "2aAKVehRTDJhsTbXZjkF7xnoNGNoYVEq51snzgj5NSgakAAaHyCAnd4yCLnngBTWoV31nZEG64j4gcm14vh6jpqQ",
  "key32": "3YzorPHEGzToGgrDZgkSqQMVn8H4rw7waevKc938eKEb7o7Ax3jjUe2roT29hJ3VFpdxgTMYaFvy1NFh8sKATMnj",
  "key33": "5ZjicYZASrDchxrozkLpaDpyHepw9sD8KskLbJfdbY7rqNsMzxJbWkwcJZwo7zu6HrGjJZk27yqLfxsnpoXdurri"
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
