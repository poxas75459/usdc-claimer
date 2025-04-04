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
    "5Ap3WpJkHCoGAJDN3gZ4TwcZ66HEKkCx1XLMpthMLuLnpEEiK6h2TRNfmNGCPTwYH6eLKEF2Wk2S9XrGrGi9SdtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gZVefkpF5PhzPRLhfVu92NLYYb7Jq2ZGonmg4teSfNrgQ8RoQAM7VrSixrdiFfunszwUHGSgkqbYLZAeM7ZAmr",
  "key1": "4jDpSXofZLoL9aY8TUSDE4S1PwYQy1vDHR3mcqNrnVwh4hitK8KVzMYCzNVFHVG7fb9WsMFPHSMMBYh5Rs3vgZTi",
  "key2": "268Yes9PvSkPh9NvRxFa5fLYSTKZd5XDBui2oozs2k5xeMK6AQbj4zsCJ9j1YHakT9eekNjvGzHejthCQwyA8YcB",
  "key3": "63JjhQpNmEoiAe5hPF7Bq1bXg1tLmfi3WU26cHNtv73whkgM2Y4XQgzjxhoQLZkgpngJGmGF83hnffc8w6q3gJwd",
  "key4": "saRkwegENXUi2La37Az3BAZHz2B5TXzoCyEUG8LkYFihur4ez8oAX6EEf8vEuY11LBh4VCHMtYREe4ZLxSbkKnX",
  "key5": "5Cx7xrVerSGBar1QBkAXG8NnNGsk26893m5WwRSpVL8jpCKdQSkLezH1MxnDqbyww7VwJcXBAwRZ64XNc6HLxBw9",
  "key6": "3J7yweTk26FUGZrueBjL61iH7pG7yAupZLt8ifwWt8wKDMHQrhfp8yaDPnjNU9E2YrdpSSNXZYmk9PEDN6gfZUrp",
  "key7": "564ZGAo3ukef6CZ5Aa5GBfYeNazJ1Wfyw3mHENuvdZTVCGPHjSJ7rYbbzKvEAhm7G6UErkLc6Nvjx8KvBy4vwXiN",
  "key8": "4B9i3H5eD85pAGESiB7aFxad7j1saEXyH8E5eXNBFbhyAk2tsgeQ2SExKzk5GAbhioUvjPwHA8dADtY8S5tNDK7v",
  "key9": "EG6PfsdDPrMZ41Bw9tb7S1cnD23gcX2Jwc5PVtEWG5HSW7kRTuR4FpAhwhebeFg6PVsNDgo2NLQN3NHK7FLmxcw",
  "key10": "52nz6ci6LRoYyHT89pTSk6QFqd1ZiVtYaxp94faoXEhQ4Hjin8ce99cvuCajqJBVpk7CRRW1Da9dGxDMnKR32xge",
  "key11": "5UfJiuapuhGuVBajBQjJXncWg5cfR2h3p6R8JyqFsJi7wPwFDw4yLhbDy8wzJw6tTb3iaANKZUm2XUPAYzYzUTTE",
  "key12": "4hah7RwgwbvRgyTWuUVgVJeLj55gBDHdqS8ECxQVqEbdt2X29BmXh4dxxyR92Uv5dNSHj8aMgjw8uaq4ZVUxMKWN",
  "key13": "SJMtJWDiAMmxRZC6S7zKurK46ookc6BmcuiCcaCPxNGYqt6qM7MNkM7vLrkHJHKjKANw81esPSbpD44MZEjd4cV",
  "key14": "2waquUksbvAF1yLa1Ed5bDCWgMkMjgAQgRckYhKZUpgdQ4nGJuo9jppfXRsHc59iBWWFgcHGGhpAXKiT9gNTqDsw",
  "key15": "4Tk1arfyEA6TiyQu5CNZo6KsKzGpiprBZZYKM3JPhDNDn7sMnfaWs62cou27iYSG8uPrr2sg79CphRoRsoFtE6L9",
  "key16": "4NzHdEWsGNfAdNsQrj5HetoEqiTdPESinXfMJjNfqEym7Uo5kHf2Ra4MukKPrD2aogTPPAktC8Lc7S9yRsA1p7ra",
  "key17": "5iXufdgB4M75V9GA8NdKgbX7qsPFuNjTTzwT41SEk82SuR868DEiKreM11G2usQo35UTxSxj3WQtg4zAvNzzQmTm",
  "key18": "4DuroCg9ep47Kfd8cJzyYkNK9XcgTHiYCH4YNwedHCoD7myYE31pgnd9QRtj1YB2BKe6b3g9mBKCCmBKpxHZnTej",
  "key19": "65G3JhMffaYz1rzhd3a3eEwkww9Fp5X49D6eahFfpm5L3uDDgjNBkFrmQintn2imCgzjhvudCC7J8Pz7ktyrrEm9",
  "key20": "2HnvE4xknerPtvdmvyqN1NenFepJovZc5h4MiZ2vanyPeFHj2Co7dHwmvZmF73e9SptBv81j2uKkNic5DZ3UnxEJ",
  "key21": "3nQet4yuVGemG96NVnMSAS5NsS32bLa7mcFZA9QmPFaC9sXSchbtn8oJnL5aXv2Hwt1XJvvJifEWVz9Re1xnfJax",
  "key22": "5fnd81PF78f2mi5y2PYRxJTq2NHFR7n8dgD6S1H1PQTFCWQ6TpLAvnRo42UbCk57puFk49KF7jFMPYCxwxw1PEhJ",
  "key23": "3KJeHcRDXvEUakQjhJS8SRgUJgDkcL7mo8j5YbxS24tXEEyUJjgFqKjRonsursQ1Pr69nhHFRaDzkxkLqbHDBaER",
  "key24": "5nyhfVzNr6Bc1zCSBFKrrunStgTFxuSRurTn8NSt29pQPDWAe2FjcfAHL44pJYhdqDECVEYafPotJ11DqB2j3RwL",
  "key25": "xMaWncKQo3XAepK1CxtUN2t3qqW276Y52oskLRQQtktf9YngoeJXDBccujgBi3SaEsKKbmGGUzW8D7XKU9W7w1T",
  "key26": "5r5pCUYKEwjs612KADReobvsG64aSx8Gku3wF17pnkxyPMHWYHH2jL85eTWMRT5wPuun1pBNoRXyaKbJA513V66f",
  "key27": "5KWwd93zTZkA8f5bwi4HQ3V5fpWUmMC74pyBYc7Erh819QBjD5yskQH3zuwd9F3AwTMJNXtpNFYZZzuzBgxcL8tQ"
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
