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
    "2x6YDAWpW4HgYDXfAVSy6ESYQa9QdPdukUn6hfiDMrFLZrT2BidGq9kcGDMMmikPWkM9NRqfjMnsmzmqfnCvgtNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bsjYrLphRDvR4XZw2qDiqHmqUVBcTb4j7vEa5LZRm3xArME5xA9TDxwKxQDyUXwWaDtn9o1CWMDujQdS5rEhfGh",
  "key1": "5Sz2zbLoeJMCrSfDK6Jfz2yb3rpSP8tYC45EE1C3xF9jhDU1AQZEiyBcXnrytGyKsJMktGqQqELfvmVj6kmWxqUj",
  "key2": "dCLmpqyYgJ4tYaDgJ9JjyPnifpbFuD26LyzWigPauox8z9MHutopxsk1nnyjLBNxaT6UFGAt8RGZSsDuGCdoacL",
  "key3": "4ECo9DMeZEkeT9W1VryZLYQLVozrah4uUXQ16uZLqrAS7Fgyub1MvVX3kK7hPJBdg4GBwqzqe29yyAr84VZoz37M",
  "key4": "3hNg5nC47QS3AViwsK6wNtiopSV42YB4ALLSbe2nPR7uoaDiatTDnRRNHhxKbACsY1c2VeHmJSg6frSpJjnqvpF2",
  "key5": "5nHm3oC7UHAnSbkWxvtQF1mM1D2qGifR7hK2roQ8CGbyi8F4LAgTMJ3gXwHp4fq66dVmCQ6D5knpdXWWfTvu516o",
  "key6": "3cnL7cboqSrF4wtMTGGDf3kPq7Zkh7Showi3xp2MabegnXXk3UGfudT3H6HPW76EdF9eGfmK8fmmVugegECUVN7q",
  "key7": "4A4VCmgyJGBp6pKPBJiYYN13pnbDrhPuNiem5i7L88nF9L4SEg3AN6FSwrgWNGqYosKvhkXrZsDRyb8BuVVpPC7w",
  "key8": "33W6kAjwS8NpjobB5G7eYUTsNq3V8gNTQSe69fdq976yat7B6bjheDrJ9BnMgjeTaGDynVrkrEbXNeHn3SHCNP3X",
  "key9": "hnhWtXHY4AHhfakUS7r56u6zKG7vGHMjcc2MPvz2NTd7yNUcWM5GSQTi4kMGnynhPDHdqJ8N5dgBW6vDt7rPzV7",
  "key10": "51tA5iNRXRtPddstrg7x62E2DpibMRmDZbND3EAiuJ9W6Q6K8wZXwpfpjVdhZkeaL45cXniuE9RYzXrRhPC3jBQ3",
  "key11": "4pTws8BnQkuFRTt46WVu3rjgzrDd1Ndmwwziua6CeJKvmocH26v9vvTG8pwS6mM4JUFWVYN4Kbd9YUp1aFJa5ci6",
  "key12": "5QKxZCU2WrnPXdKdEG3cmUsKB4UZG2CKeiWozLwTs7jjQ1FgGRRQirNR9cKEYGNxitYpqCV1PR8Rviyo3WQV8Gzw",
  "key13": "2Mt1ihpaB3wgCTqcTjWUJ7picbq1dtx8KFuJC2PCtLajXpEMPxKHixrmjJx7ATy3LyUme8pmxZrmNqj9DqL1ihqq",
  "key14": "3VG6JXcfgT8jfm9XWnGJNFXMwddEV972QrEUv8dXvdtrjPFqXNRi6zUqgw3btQbYTnAQX19HJTWHd6JFAf6Ruggy",
  "key15": "4EUpZ5fYPAG3V4RNEs4jA5zj9s6anmgB9KZ9ybKn2ZoNq3dXs3L5iYVauj3SToc3BmGmfWoqNEBnHZoGK14gYmVk",
  "key16": "41ir5tZrUekVfG69MJXip5qTDQJNrSd1WKZbW5j7jU9WBXhHSafEUARCBu4R1vkQRTEEtpFB11KyWSs65c4doJPw",
  "key17": "4XQcngwWA2pDEJXL9fbTb2w5W193JjbKo882yy2PwpWd6Rqt9hAGDwjmfTD2hovNvuMsrDzYSLMdpjS2yHD1tGcE",
  "key18": "2jSPeLhuVc19pmF44gPvuaottPQdf1fFa3VxVxNW27i2LraDZ98Buv9sj8RrMT3U2jw4spdtv3HarkVhyiN97YHR",
  "key19": "5dFFr7dtiUAwKpw1mSfSBQmxoMmgXD6FkDbgonGm3QJCArR75EExbPXuXqYRoH2PceE6ZB4xUa4JSpigjivsx4nu",
  "key20": "2A5EoBAbGgc26twnnhSfFAVbfEBEcTN2415PSfncT7LVDGwFjzSVVUocxEzSQVX4qcStAGnKkNEgwyaMLr1V3r1R",
  "key21": "6Krj3wPrbqrANQEA7S9Xe8pvzh2gYH3G4c8DJoNdp5zYTCm7n4KtbPGP7nkJNCwwu6cS9CRKaatcTckd637rL75",
  "key22": "beNVy4pA4YmmSLigLZXkn6c9fzrJyMtDfVRBvJizKs6asRr585Co73kYPTE3ez29UDHdLrYomboFtmAYNn1zyP9",
  "key23": "2y1PRc9eUCbyC7g9QMEU7C7ajDNMr9GvTvHvR9HJfDdjpmaN8oG5kHd5CZEx479Zdy4uX7wiPhfgF5kBoo8DyZmM",
  "key24": "3Liny9t5wjZKPcqMaorLarFGx1o19kPS1KmCDa6TZFyZRHqLGQYTbtStLwkHFoW9ts5pr1ES1rg7juVrrKwZYXJ",
  "key25": "2JoS5SeipNhaVarQJAgxUF2sQ7aLkiJCS8RKwabATHFVpbuvNDT1QagCZnZnpaCQ3wqHEEAERu98GEeFciu2h8ZL",
  "key26": "4P5FqDTaN6ZvtcQ8qvnzn6ZbDsoKhJA3UpQZdz7TjEY6PrqWHinvkkD1qRfmMWreCnCUBSsG2cf8DU4FYZUqZs9s",
  "key27": "3aHBzNRVRhtNWBjFxN7ytmLBD3LBLmhXp8SQKWKsshUeAEJcoxobWA76dK4NXFhefMEwzeywNgGd2BwmN4zz987G",
  "key28": "3JuaQvt4Vwegwr6mDLUekw1Js753APNeP1At7jrdXkxSbqKBBAuRovbMbPd9TKDBmj2ut8C7uLkNZtuprcpano7v",
  "key29": "5TpfZ3U3LsbzF8zdW6j6nXjAdH773uxfcRmYjLXNcb97wkmEPJ8FQhSfh7ytWCT8LjPNzFX5mJdaW4nZjwdX82nE",
  "key30": "5DTKKbDK4d6JkHe6juU2e7RRGKXz5KZskXK31wvu5cY7wATLcNosXQZV3DzCQyfuggjq2V6KfXXBpdAVpenHKNsZ",
  "key31": "21zgfZgTxHF3joCRRr4sVbm7Autxq1M1KxD8h447t9xfpi7zBq181otVCYrXaNZTqz2cjVKijUf8o3nwJwUhKpKJ",
  "key32": "52Vdd7BhcUuGt29jxX9UxbcECqDPuKkQiACFvnoTf4dmc5iXLmFR6EoY1NKRfkSMjE2WoSWhY3DT1UwrPH4oHHq8",
  "key33": "4ptVn5pvT89FWCpgtXTd1SKMndtk2aSwSLHJmJTpyajZjcQycDpGhC2EbVvpcyu33vBKsiCus9MfjZmSSyoEggEJ",
  "key34": "4U4JntZ1kuAkjUADu9z5tYrEAZstJuJe3gDAq876ywKFpY4X5VLutbW1CGVcHKF2HtY5VehuQFXRXGQhs4cC7y3h",
  "key35": "5jHqXNbTiM9SzmzCnwENFMG8wKfSW2XZzQU3Fk8Ek5f5AnzTusu35NJSDAM9RDnAdSXyPFLDUN13yznnkJL3J2B6",
  "key36": "5MUTmFBrJYrSpzapgmAPnk5i4CvFZzMmFavKES7KoMYykKidUhGX3KD3oxT5w73Y8hvaKTMaJ2G4G9TxYsnVvzfg",
  "key37": "4s6DUHPPaWWsrYomYCfeFBQFFzqEfVxox5cg3RVKNrSQiFWvk8wPb1PKWSCz8abdUorF51XdPeu6Jy6mSH2gvUaF",
  "key38": "3nos2WXZhQMP9JsXU1Q7WzgyadEqJt5BsTaTpeUbKY9ncSdNmL9TbNsogJTGMgLSuPQSR8gzaksqAD3YzgN1N6ve",
  "key39": "5MSRnSkkUj2VoTkP8kEaCaizybg2TzmQ7ysXLnWdWjhgrCwTA388ev32utNXCvhQKmyCfygTUZ5bqqXXSzgJyMez",
  "key40": "4SG148GneGnZDFt41U1NAeWMH8iGiH1sA5Mvk482Yq45HQVDhkocaXtHwe53ksH2unsjFUujJTYhnRa5PeexYPw9",
  "key41": "2SBpZk3P191N1mi3aBpNu6x5En71t799634dvK6xDNzrZpE8C4p8ZjnntYndtGdafLyiMcpv8gbJDkK3bsrKpvkL"
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
