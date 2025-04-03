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
    "3V4wgqqiQktpnk9xUKsu5vPH9rAaMkmeZmzA7RJkfNQSVXgh7SaztnV6gaR79AbnXYcaezBpxjPbCBDwngKJfsNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rr225rUdvZGXrfUk6bv4jbS3gzuzcEfqcKpE4oFG7qYLDrwSPYZHuEEDx9jfEEuFBB2EcrbbYx9sowRxX4EV3Aq",
  "key1": "3xeFnKhiPDFy4jzPLEH2yAcxtBTEg7FfLk9Uj7k9pyWp953VK4VgvVhTSGoJ8dotMspR7vTeyjFFpCm1GN1PNzP4",
  "key2": "4iRt1xJf1GYC2zMWjNBGVpKCtxbp4v7gUtY44bkcsU9qUnkZV1t99FYJP6NtKT6XYAEAQ5NgmoKhLyKQMToSAV66",
  "key3": "3AkjTfzLr2eJJavQeeyrtwhyuydeKAGWb88MWqSDZQVJqDM9jb9SGXhAcWUANj37AsAKK9yUV69mezB5jGiyT4MF",
  "key4": "2SCJteGJKBDMeapCbeZSbfBFQzqqNiu38GUc2zSLTgW96QrmhGJVZnUkuGp1qL1zPFVL3d3pp91hg8ZA5uou9S1Q",
  "key5": "CMGs6if7wj3pmv8MmsJTWdwZsQqqCrgntCVU6EdhQjFcPubZcGaGNei3FCPpniL5pvbWYTLF535p1bxzjPiZYjt",
  "key6": "4HHWMYQtx6RpM1RRut2sddtAFDdiXd6UP27krdXGTDkTWwVLonstTVoBpCk4pi7ATGZvEFpvNGWWpwZaajfgf34H",
  "key7": "3xLoiHRrGDJWbYQdK47TsiR4Wz2nkZ4VFaWocH2zHaJ812XCecEqQ1gkYnhpzPFEYMM7ShjsN9F339pgZW1RMA7m",
  "key8": "3xchhGSiSep7Ntw9WFsTsvwAe9AubMroKR8Zj2P9StpMefWpUETbJRHJyuSWR7h3RSLFZm3P8i1FmiMvRtsKwbf8",
  "key9": "4CTKQcaQmcpSNDsdRafofWxRhmngqM5MTtgtqQ8E9NyRh2J6K9FMrhtqb9KCWiHBNYTSsYvGtwRRtVLRQDMXdrxV",
  "key10": "5KbfbyqD2mGRbNs3FSuh3ahgqT3KMFDeUSUsps2uxL2kL8sko2d4cmyBHoi2Z95CQhVkHPf4LKSaHkbWsMznV6iv",
  "key11": "3Vgmvog3HFzaA9JxGnFfRo7oaeCPAGKqBMmHCo9fsNPvb6Cxj4gQPdcsiZqm2a665oAMC3doTkSobGDUkmrKbunb",
  "key12": "4aAYnhm6kTrLzU9XtY4wwd6prwCWtt6hYGDFoJj9yj184iRNEr8HNELNWBcrxcee1fXBmQRpJWW4MYfi8YgtXxdJ",
  "key13": "CbxJX4hyTwuGmcnuhRLbGt2qk6kKfwjWwtp2k1ts3uPpy2wBMv1qza1pQQtWmC1XhPqSrjNEgorrZMNxummnZcS",
  "key14": "PScrbdhfQPckDxa3skev8jUydoBv3G4xzB23cC7qNand2buuZ2uoN2BwgZw376UMzYAuMGWMfVHWDCFDmsbkHYF",
  "key15": "2vnXY8CoGLFCVGZRdJr6HGn2VU9JYQfYqL6VVdoqiAES7friCpVCsCgZRTp3wt66oepHrPcEUvc9tKUmZ5v7nQJ1",
  "key16": "66HA2zacuagxxRFv3PHpNw2MzQzoEc9PptqaPiewzVyv7nHBgarxasj8srWdUeEnqi28Xm447wVVM4orKUuV5xVQ",
  "key17": "3uW9HP4SsZRb4dG3UojQ7mkXhT3EfyvjVJ7czByK4qNzBuUZs2DfTqsKNDNeMEAcrzQdSpmheg7qZ2L4rpi8x1V8",
  "key18": "4oyoUSnvZWNGrHXiJchSuh1YrBWomt9hCX5msyxK7AndZfjbks2yTpW14sLKYFJGjHP9h9QWetotKnoYkuiNYi6t",
  "key19": "4SpHNAU34GkvUQHNGdZtgNFmTxtt6LBUVnAGoWJUKJVFz9JN7TJ1JaZberJvB4uPFgRdL5U4JJusQnpyTvk32Ug8",
  "key20": "h6N5ekrYactXYSwerPQiDHbbuk3A4MbWuMwAvgqYiotRBcutqjwQWReSnCcQNuDWtA2SZB8ey9yK5e1SfzSmjdR",
  "key21": "5doa7LQNRw3Uha1ugdYEH8hJs7WXDL5cna2LyMMfkKzFtEu1TZSgeHh7SNav1N7M2sgopMjcSsNURP9QLRCVhMDr",
  "key22": "2VxSfsA33cPy9BMEciS5qcmM1omKEK4p5brvC2tXcToQA4Q9AwbugaVxpiTvpcTY7QLMKD7Ug1AoGWzgQTCXxyoQ",
  "key23": "27h6q4ZMsftVCfDLwqkyfP1Xuj7KwHNHkxMsc9fZkq2ckNexBA3hBLTpxGRY7MCQ5gS9CVNz5Ht915UqE6JfzzJp",
  "key24": "2FmvG7M4P1gVLma1x6Pvpry4XTdwruUbALPci6sUigPP1yBAxD4VGz1bubT4aQ6RU2zaD6SgtJWsthbgu4YywRG4",
  "key25": "5jE1utqRZjfBBWoBw5cfnBFQXP7jmYBop8mprh4LZ6ZMj9yHCXoFCDVQAhDBYyq8vuLPGdjJ7FcBMXbVe9XScJFT",
  "key26": "wfbWNqC3hBxGaNTALxLkG514rQbmiTFksFopmbdnMErrsnKUJariD5jgNCeHJxJyZhTjxbMpYuz2n91c7YEPcSN",
  "key27": "4CZf2L4EQNwsomYBdhTHhWCEP1BLe3Dafy6PjMF9jhrJb1NGdR2GQ52EMKBcFKLxEAkEeZ3TgcBg1pycaCkWCvwT",
  "key28": "48RkmjXvi88GsSQsmi7ponvxVDGvCSEfGeffzo2ggRoGSt1MAXEnAttinesjReYs2nR8doUpDmHNZ7UeNcEzvxtA",
  "key29": "5KaYUXNuPqsKkMGL17NWPBkWK3FoHyWXymQZhRijhjm5zP3K9ZcKQgSiuRGzfkE54L12VCqt4c9NLkCWQs5ph4E3",
  "key30": "5PzC7BxtTCPq7Hz8vWBPjdV6uYeYmyk1h2K9eSrDLZ97AnhwGL5mnwyK5RE4axHdXfsU379apZsa8LrkGzB8JcuT"
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
