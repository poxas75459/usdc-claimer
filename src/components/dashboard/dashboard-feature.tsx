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
    "2opoz7HSr5MXb2ecTZTdMwvi7HiM5mB4za227A7pnSpcvibzyD7ij5NUsexK3SMDnmYgBT7UweRCBdp4U3Se9vgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xHRnH8V3YgML9AnF5Rs6xkrXTL6aPVcMkxLtjWqqJoF8HBbXKR3oLayTjQev6gPbUtruSaMxiDbVLuedhYfBV7e",
  "key1": "4fZXM8ANynHLK7E7bhiD65zhE2rNYFa19syCfHfDg5n8GB6fkdJnzGZk4nLki2WZf2oJkXcpZFRUayxAU1pCqVnR",
  "key2": "5wRULE3Rw7gdPS56aG853N4fFPHvAxqRN4YWhqUdUazmV1znoJzHna3ax9WiDVDSLAE9yGw7e67kbR37a7JH9ZL5",
  "key3": "Jtr2AYuzixQHh7sjArFbshuhNjitBkqknRf2DzXS6C14s6FPcmWWyAzfuWY914shTcM5uyEr8VRfc9928Pk4eUf",
  "key4": "48o8diRkYMkYxRofET9bqqjRXjzruYWyZ2nibr5kRkRvWv742KGJxEJLWbiAg9HGudnLK2E5xTbbVJiNFShNVTiV",
  "key5": "2zZ4DcAh2B695i4aq74MkBFMufHRmp9VfhxCGFC4R8GViQemNntVGcbF7DnPmu6ESV16Jsx8A7tzwMCuvyrGebnS",
  "key6": "3hXSvQaEUmghYzPc15b58NySyRoFqtJPfrfj8VHrZGy7qNvoSxVrWpjPHYBWGxTc6eLAFxRWDggvsg7TdKDV2CzJ",
  "key7": "Wxb2mDkFN8BUQ98ZNkuLjqDojEmgmCc18XL3wTrxRfRgxeUJ6EwJzk2mKpLpgPVUToyaD6ni764vCySUjGkRXVi",
  "key8": "2AtH8iofLvC93ScbFwrDaKUGFxvRyYG7s8A1o8JNDNmp3uaX1gwgyFQxGt17d6PG1tzGin4BU7Mgv9juvpphebEd",
  "key9": "3z6xoMwiMCCrEUVDgsF2gJG1jh189aWeeboiksjqawRbrgngybYXagFr7e44B7iof6E97Zx9M9LdeErnNcjwnxiM",
  "key10": "4e76BhEBok6aytKUvdoqHA5hLj4ZwBwoANfEUYjiUTb6M3J1z5bLVGjsfJjXoXxrbKhhYZx7S7oHNGp5Mi9HTfGc",
  "key11": "2aPUsFKnCcerBZTyqedCoZoDG7xvJgHeXsc5HB8ZwDspojYhLs8EG6BJGnExLdeQAASCvEqGUFQudZaGsh3Qs2Ws",
  "key12": "261iiDZrFonm4a9fdxydttfyCdmptsaqa44zqyCnTftJf6ymHpKi7m7saovuaq8aymF5X1wWtmAeZC7bULF2a4ck",
  "key13": "5XEeAB3iemDuSDFXstr7Wf71y7NaoXT97xM4Mg7bugHjL9zRVnFBKTLcT53fvk7bCLxSdz1P6LdXyRxdJHvA1gYA",
  "key14": "5Pov31nCTJUnM1mA7VeNgTQHS3Q8egovWLEzyCko3jQ7chee4E2xWX5RGijHveF2Upxvp4dSgiTFSaFmfNYYNGcJ",
  "key15": "46cFNa9pS7t32HGeryHuTB9k6muJPMUHH7cmnXqkBEW6UQmnPLJdqhkSLiWKB4YdukQrwYUtTHUgc3JN6TSh78H2",
  "key16": "4PiCsYwAkEH1U6KTzyUenuEtm6zBNh1M7WKxmZoJPmVCauZKQLtyC2nLHyyBDPsx2UpsSHxf1LTyrMUxmJcv4aiu",
  "key17": "2GLgucE7RW62c5BNSQV1ZCu2ujg3gp6TeGTG3DBFsgat2UmNayCbET6jAziPq8JZgmzxN8D8p44VWW5mBXqfxKKj",
  "key18": "3RjQveaYCFF42utfAMjwyFwSsf8d7ADqnuGpVvx6oE69iajCTBd6r4GaKwawi8PJS6g5GmCxF5a1W7JJpDh2sAP7",
  "key19": "5AMiKzH2fSx1ejJxmC9GK3EyT43aHhN4fq8BK3KzawTxyYJftVQwUZv6cJMsnX51zpEFVJLt3W6FgdSvJnuqf8GW",
  "key20": "5mPibsEtqrcJNVCoLnJdBCknYokwFMZrovgRy27TqAQBovHFSe5UBHyg6X18JWztJC5TnGEaqiUkicY5EBrnzt2R",
  "key21": "4CbPDxHvZydL7KgrFSHQZ3bY5roRfVfzpYbuyPQBw8rsF3XNLT5zCWuCNKijK1ix6hF4iKHgCJ8hp8Faq2g2asLo",
  "key22": "4CYixci2fQDsDikdVeMkhW3yQ4jV4QDzBHCbQNoUVWGjDETNx1M6okgjkZF7ES9m9mcWeyjcAymhrEtaswpWGmy5",
  "key23": "7Arrc4T8kRM3GTEvMcuJpz9Uqu3vfVnAw54w1hxumN6FCAGrG8u8DLLoKdRBzWiCFSckDwTXjw2xGUUKAsrBHci",
  "key24": "guet3x9r9T61iK8MAktAvpzUCAbqBJyZgkPWv3bUe3ye9KpmLc5ojiZHduCyVRG1e4H8XhBB7F7HBrtskK5VDZv",
  "key25": "3VaQpZGiiV93VDmdiaYLXbuaNpicy2RDAkkv6XZqGZnMnyHmv1viHk6ePmVWxCdL2PNijjG9J1gcyTWa5BhD9rwW"
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
