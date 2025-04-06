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
    "4B6ga8DSQnb8fsk6Jgqxa1aKNt7x1ozNamLjuSEVG2w1fme7o9rsarh3ZbcQz2XmcBrmDg34PmMF51KRuttmwsc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GuEWDEqqbJdS2DCZxPGb2KzuS2GQnEnLxtRCXHXia1iumaZcBm2xLpM28FynW8X9wipUcaDV5ectTyaYNwtHPM6",
  "key1": "4w2PRbwJG7UHNyjJo3514hnvWSgQy93y3pMSsfU4q4ugqMCET7oc7uAyj7T5j8vssqAgtkL3rCtxTqojAsYsiLsD",
  "key2": "5zky8JoJp7AuAWWCtWAfgTK3fhTQDexvvKf7Grt4dH7yjfUGiPGsvgqnfqYW3HYmLAHa55Uw1en5jfDTVP68kZ7k",
  "key3": "C9o2j28Kiiy1ZnEQtXqX4BEaEcpnEjjUcTojqZfVVQDJ4UG9ewaXB9MLq4itgSa1gJ2mvY4K6TWKY1miAfk1H2M",
  "key4": "5jBeUs9sDaJLJMruozSiyC8bo2LtA4oJQ6KQqMXuSnrN9szCJvBAwg6AEByQaXRdqmpvQxVLBWD18yUTkQ5SJhFK",
  "key5": "2w6mnngS98jbN6it5GAciSwKDSWNUgWp1mqrBvqernok6Vx8zAuG2U6de2kKCxXsrf58iu352VjoANauRyX8SEfE",
  "key6": "5AVCTaHn1T989r3hE9nQqJFMaui1KstQy7xDFjC3rN64mGbPGwkK5oJB4hoU3mnci6KFVjUybNyQH2PwpvGMk5rJ",
  "key7": "4VJLKvB3ZFKz6acMiqntJZFqhgUNi7Nv1YpsZ93itBJ1SbGrfPDihRYwSLgmLNrojGuvYWRMPeh3S6Wftt78bEZH",
  "key8": "4mAn4vmQZr6LqgVwLc33yjXM11d7aJmo4SVcVkk8BsrY2epBvSsyWZSN6ke3wvjdpKZphuwt6qvoHFhEoF3FfkpB",
  "key9": "JBFRu8BzspTnWRjyuELhErFhS6fY7v97KR5Yk1tuhEWSF8MHMpdBSEPS8XMnVDKoB3ZUobERK7zZz8TGV2FGuNf",
  "key10": "5LJHN31FMsKds69Fy3SckamojAAwc1tbxaxHeB2ta4W3tkXpVVjyzBhFHi7J9k1YMYCbaP9UaaaVdEsrPDNKoMZh",
  "key11": "R9yuy6BpUaKksdHJxTuAtPbT5UtssmQs4NFQJxxFGMCcatA1STVPovnVJAJ3Sr46rHR8DWjm62isMGNHGKuUHCq",
  "key12": "3zBYebf1JAFiXNm3AdArXrR3Qct6RURBewQoY4y7uCffCoSRJTT4CPn2gAqybnbVB1tsa6VvPWjkrAVME55mCHdH",
  "key13": "21Y8vPeTSgPbp9sahn2vLDs1HXotvULvhxpJY5rFLjrRtbtxx3ajbxHrAHom7czu4FXggrutzNtKgh63nh5Vt4dX",
  "key14": "5R2c8Sw87oiBy1AgThTBRi4efpqYmnKErQB2ZC3mXhJradsF1cspNRFe8jDqvhdcPhp5rWVDirnyx81cNCU5YpqC",
  "key15": "2Yg2BkSSYNDirjgBbvzqEqAFFasCiubXjK39vLMwAjykyxogomX56eh1j58DsECyz3RV47ZYCCQDTPZaRgsHLhet",
  "key16": "ntN3FYSaGXHgNgmpTGAvPnQiMP6XfeUjT92qyVk6kMhh8Hrku6hdHF6xQJ7pUVnyhgRyrwhva3E5xYiyB8DigEo",
  "key17": "XZsmS7dFPEGNdkHsxjrPGKf1xwgMm6J74HNQ6HF9oq8kg4QqAqWfcFH5Hb84v4rQ5G1WJtMHgVRviF3fxeakLg7",
  "key18": "5fFiRw29vuGviaysB381ZjXC6QRkgdhqVGCTjFiYWbBRZ4611EZGQN6wn7gEpxa99cMJo63BWdL1kPAoYY7iwHTK",
  "key19": "2F3iNXvkLBaYepWZueDiVdPr5zuKx56Wncabsa3mhZHYz2URpiUA3r5nYNJ6QkNFAsn6AvPVyDWyAxKUgwGcvbG8",
  "key20": "65wAikrB17QbzQ9iv6wojkaVAbTJAcjfnujev2BohHSdhbVHNDoAFYMTJizM9kKFU8SBPc6Wfw5qFSUUzAy8bnx4",
  "key21": "5enguuKvVKLM1zGfkyDBbNfrbWwhqAbQtgWeWRBCaD3UcbW15upoSyNdFcSX6d6khGbR7vNAY4FG76WMxPpgWPVK",
  "key22": "3VtP8w9u96Z8Hn1jFKakeHHzz5hLCDv6snihgRKZHacNPNDoP9hY8yWTHfhKE1nAzd5qK3srTyugtAxpEnfdjUG5",
  "key23": "3KZnPHxt4BqLsXGjM1LEmKe3je3D67HjcKecP6sMPGuH3aUzmwJeQb8Pqmz52Avg4wbAWqfSbQodxScQVPPzJ3qW",
  "key24": "wChaJD9maeuDLpPYkdk94jGMEyJGh74KfRL7goV61ejqyXMM2UdzXsTXz9cYEZh1NWT7xESD6hGRWpHXYRNUSg9",
  "key25": "4Be4wZ2pAdP5ruuJm6GT2UHkw7pYJ3PYE6bWymVKty8cttkmgaanPd87n6DNAcAoa3FeEoA2kaAaZjY57UC2nwfs",
  "key26": "8Ct17kn26CoemU4NNJ7cRAsaP7iykXA9wF8EDo1ZZuZu23Koh3Z1HvcnX1UsS5CZMGSG3Zvj9gfypDvhu99JgLP",
  "key27": "2LruVRAHyrEE6EoEkaqW2dcAhQg1ALwmoRcKh5AcdukRZqeZ3rzfAX34Qdpumhc85sfHJ3ge7nP4zUenP5CebZJA",
  "key28": "4bix3DXzrTvE9kNVRedoyAkarUWNxCYStuKJ9roNdePqTtA2HxBuetot8BMb33a1z6xFbFLchbogSVFiVCVDpiVe",
  "key29": "4oB2XebAcDZsYX7BruhA9PT3gv7qQB936njnJnV2NAdbGAEbNDEwDF81njbvLXTDeiSbqdWq84M3Mje3YRswYhsc",
  "key30": "2gsEYH7Zqky57egg92chWBpe6EJjSDYWLvH48SURZauXJY9tFkdyaeXUYw4HUXdVAX6Sx1d9A8kVcrtLoCPuLYqU",
  "key31": "5prxHdDpwGjnrJs1DcpZDceMgjftQ29MBXn7zUJN9i88AZaY6U6qY75ZdxdL7HyuXrdW6sVNCpRmXQ76j2Z9VSjH",
  "key32": "pCUs5A41QBK1czM4qcXEfreaVoKejKGDN8gdtvwqqXPom5Cg9KiUrcoD5x8UDkLQC37Jwd7niJxmAaUMZSzqJkn",
  "key33": "5cor3FtxE1Z4Hv8kiLttCvWTzAdQJ6CJUHZ4QD6np9tSS2qxzUTLvLCE8YAd6owWHWEHVhwwZmeuGWQTrizT1NnT",
  "key34": "3A2vuZpNCkr8QYjeZc8H76qtU5TqQTQm1RjgxWihnSfuqBWmYDym7QRmDTZ9bi9y2eMZgrfqZzkorH3TrkJdEcm2",
  "key35": "E5csMwJCkKWA9FEbiB4NebvL1NPQh4uAhF3c1tttxWSXL2VMJuMXzwebQodqJMLtbvPEMLoWqswie7A9AYD5D2Y",
  "key36": "3doYcf9L6tJzK7kNY9YrC9tKPfZRJoHbgdcAv54wcRrjXcFcoX3H9fcNqXcvZQTjajfeB22d8vmUVgWnRhodr32V"
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
