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
    "4GabeemxbLx8tCwU2JjKm48ptCEmc6SZqeGfnnCZ2bCQZbRxM4y3fRiPQob1JbVwMaANpS1hf9Ld7nMvEJg5PepE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PGL1LA4Z4XMEndhehzHCE1pDpnESKeqw1PGPUCn9g6MXoxEtuN3kyT1CVuqHhS83hi3SHwCqiAT4NJcPT8F8BZT",
  "key1": "33GTJkMBtvq8MighdQbqU6ob1ep7L4m6oExvxyAkkV3jxPCrigrMTWwMQUWJbiiDMpNWPvJ55GKrzBebSFjTr3xm",
  "key2": "2D9Y1xgBpfNPH2HMQwqNNWzoqQESqhwurhv5Dhx1iANS28ePvojJFGivJzhRg6iEZN4VQoBbZNTPKwC2T32XLLrZ",
  "key3": "4zjXGJbxaFeNZYfLj8VVVjYsvgi6SF21jKTX2RroJRsUue6L6Hvv3QYhFhx58Pk2Uqms2fbnBXpiHooDPULAMu24",
  "key4": "sWc6YApq18K2Rjbnj3cmBgLfrSigbmg2aqrffwxHXwTiYboXGTJ5JM21PpHb2mV44s9Tg1JdirT8esD8xQuiAp8",
  "key5": "4xMK7P7iowvNQcjG9J8bssW2qumcZJnXy6rGmi86CF8FzuzAGEuKqvP8VU9fnKQqqWhYRt6VU6n46EbphUtpXS2R",
  "key6": "4Rh6cAFkL3iSxaGBWMc41AZ4Ztgr1eFZhEkBESsRzv16dn3Q6qrM6DoWhwdDfYDKpWHSESsmnDexkvLMMX5jSRez",
  "key7": "2LCCGL9sHgv9cNN8UvC8Zwc1nHbR4J36Ap452ERoMkBQdXwXfq1CSb361m1bF9AWeX4sPMG41SmaJSdC2cXiRyfy",
  "key8": "27wWcdKv6VRQ8nJngbZvrLoB1Mppy7qLQ3n7dsSfMDVDAcwzMhJT9RSb8ZrxrssnpL9pnVT7tkva6c3ppKtwdQKo",
  "key9": "5JDVKaRSRedkoYbfxC9Fh8ko8VLidGGFjoykqD5ntWLShMjTzWuiJx7BqtHnNEbuS8Zr3HMfsxDWuBFWnzhHcMzu",
  "key10": "ihKfpdcLHjZZk4e8PLDYKvgZ8KFnfctkRzLivbAthYqGSjnMxDrn3pReoL2vZwVSdwgtqhdfVAebq9c57eACxAN",
  "key11": "3UcepdL1BojUss74yT7Tn36J9ow4pgvMp9hjZVoPwSLk42xQVtVUSh5n2A32vUWsdSeHyC7AonBuAF1RybMVYRn9",
  "key12": "3tGwQH5tb9EDKFxupjRXib2oaA4YPTqnbVMjVQsGFsQTH2XNdufW4JWTYkuGJC7mczpzoMHH9N5oie3cGRuMewFW",
  "key13": "xkek4xM3tS3hvcq75H8HoaQLL94u83QukqyfgsRabuFcUi48epU5KajAQws5RE1MpC8N8ZWiaKDWsyMgFYEVMWs",
  "key14": "4XjfH1vSWfFTFvzG4mECc4gDecCq291L3gekFC3cRcCn7eco1JFa1Rj214ws4HPHM3KzzYBe6UTmW3pm6EsjUa63",
  "key15": "5sD29GFH1czSfpqQ8RJ9bLY914PX11zHHapcWb14eHF7NBNncpTY2mdNoQaLonQuWzdq65fq42sLTDnpv2ahBq8S",
  "key16": "3PxXYLfNbqNcCQHrVGu5MvEurzyFUzUrBWUe9gBStvBN92uST8ARKpd8xrFp7MdyqE6oMYErkK94zJDdcW3BGqdb",
  "key17": "yRFRpDSAYW5J3hHYg7QmzydgJ36ZQD9qj6ufPTtWKsjJmmeRgPNfxazvQ5yt4T2BZVL4pvADvyGgxiDPpmFFrsQ",
  "key18": "5nUsexNVctuCv2xnVYvHyKrVJo7YfRvkeP1cwU5yHXU2XApq5qmyttYoxNBuPeRjY9cYRPRbpHkYoa9PygTSq7Rw",
  "key19": "4ZSsiMCo165ejT9KKsNXXyynkxHD95omAB8z4iXQ1WuyBsHSRn5J8jdPtUJ1Vb8cYNFZ12HsMseFAcrTfxkZZ3yU",
  "key20": "2UUvKhp3akhka4gC9kbYF3iZ1t3r1iXX7MYdycrqSn4NMcerv4Xc47hSRDJWq51h2aKkMeiSHazWcG3TBMVJbN59",
  "key21": "4fuoomjBE13yt8ZEZHriT9SGC1bKC8cUJk1BrZmCn4qFDMJxMHUV4k6WUWiXax2FiqfRfC44nVh2KiYzhCuzrR5b",
  "key22": "5ZDG2pUiwThSfgzofqLgn4ByNpwYYyZgRB7UaS1iUALuw1PjQbwaL339Xs1ijHvx3eE4z5mvSjVYs7UJRojbXRBX",
  "key23": "5gP3cK5bprrfwpi1gxYs9UbaMXhW667FwBoHe7AbY42xjJn8hjViuJoEzoJ6YUEYv6Dxv9pDrVQPXkw1D8srFLLL",
  "key24": "cNeGwZyzqS6cp8Ao9gUjV6uvVYLcVeEgvDyLfXJNvHmwA6AULNcPJxJsEU2BtyWAyj3aRHqZjLPX2FVbUg87JsB",
  "key25": "4HKBqQKVLL9HSJ1h9EeJeoHXVMR221rGTyCSVA4W2YzbU7yxfDjtRX61PjBfxAjWt2v87q9VKkhveorkhPS3uDUs",
  "key26": "2qEGY82v5RQQLNmmYd6MHyyYyKMPFTztFEn2t27bdhuidtYn8V9j66GgwWyrb5Wg3Pxk8P1jeEMrHVvfktXd5t8R",
  "key27": "5GYZoWx8zxKkp8h9J7xuedSUq87jmCFtsifov9cpGzqGqPiwTX7VdfyGAfjmJdx7t53uXaR5TyEoqEPwxnmFzcPe",
  "key28": "4FRLoLTJEohdzt8f3uBMgBKwU8nz7eu5L6DrkkvwQ3TDaJDB5cguufNmPrjRo4kwwZ57tby2nqQbPD1cqdh4QYLD",
  "key29": "5um8WnhC8ekzAWGLFfaJdoVf6Wp2PDb6H8s59hoAUZ2iwX9cUsuhvrJVx5f37oFGok1ZWgQXDrvaR656R2qDEjf9",
  "key30": "2dPwQCdKC42d6Zi6ko9oW4uAd6C2434b7MxDKnqBcppmzHxpXYw9XfQeWmJEfq96MUCcV5toxkzUA2bMdG2Dgsjm",
  "key31": "tHydUx3Aqh7Coe43CqLyNg5faAGd3Dv7BGuEvNFWSc6PYFviyGcQEYKg5y3yZnLd9qKhhqRJDakCRxBnWybgf6Y",
  "key32": "46F4BQHLqb3xxAbqrLc4N8bzDgos9QwpU1jmKwVG1nnjdZnPzeA3afpnMpfLLUhDfmpwZ8pVFkuzQ3r1Q6x5jATm",
  "key33": "3ezBZCHxu11KNge4ZCcPRJTLnFqQB3Pj1gdcrcCv2VxpbBeajmsiB1JkYgPF8PH8pTSZaznPLKkzZvv2Mtr5AEyr",
  "key34": "5PFt5SeXhsohs1b4F7LB5MC2qjQchXX7jrzd8H81QNEq7QKjxVhcpr74y5E9Ny1b4fS3KJcG4swd1krLj3f39NLD",
  "key35": "59fxXbT8wMaWsHTUApEsXAkWjKraS1kTiMJZh7BQ8A4krKeRvYshASfHo3Er8JMHFt6RMxM7FwAZ1snW7HfmKfiV",
  "key36": "oD6MBMMJXoF1qh1vdNmeUjxcfL7FYUM436tkneMMVPLhhEprUw26iAAHakG9dsEqhbXUmG82idjz131UbFnz3yf",
  "key37": "oy4wi7bU9pKjuqfXQuyzaoiFmnP6RMLpSVjVx6k5csJXDn1eZUtuoCvXdTma9yh4V7YPPTcjF2kvz6KQxwwrSkC",
  "key38": "3g2X7TdGuzJ5JSdUsC6kk6nqbSEpMitJCmbiqDdsw5SjKtpmeptcvzjqMuXGu5Jd7KxX2uVnLzgKLAsRPsdt7Csz",
  "key39": "5Sau8PArfeqm8ZA5GPjrbkqWoh4Me3diDYtWUcSd7L1iXBy1jTHWy9ijJxA8qZTPeWoeRkMLf9emiGEHPdMHDHeG"
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
