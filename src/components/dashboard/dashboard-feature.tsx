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
    "2QFmbQjALTe8gcqt1T6Y8Hvh6FHGVDWuE8WKViTRi2f61owFZuLpsaopFZbZZpiHLaU3CXKU6A9vqDa2gmdzJySw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DhF1GtSwnYKULMshcpNgYAJ3UrxW3xEWAaSZemxEV67H7bhseJUPxjJ5dhQMyR7ztAG889SWA2PxciRTqFxJiME",
  "key1": "5HjBdiHgPkfZgA26XreN4dvSC5wZaxaJGT7ym1Dad5BkjQmPh8jLGV6NtqR5DzqQHvDUybBWgXgAGgyX3n6r89dH",
  "key2": "5djJbiaoj2pBDUqvSGp2sUc8iktzEHTdvxNndYgkQWwjyfZzPd88GGJP3FKgsMbjVULZ3KfqixxhoQChy8Kst5q",
  "key3": "4sLpzBoKzwB3Gj5yyC2zMLeC3w9WPJtXsKwKSGhWEDPG9DvhyJGGE1bYbEnts2nmxVmRMHa9C1btEEe48cVZFAVf",
  "key4": "2h2AtXkffxyzrrpRUDpndUCB3cShdw2sP5ha8CuCGDECqr8in8YncFYWx5JCsmfTq4fqeDM6TvZqtg8y4SxFyu4G",
  "key5": "5yEhE8EHHNrq16t2BTGUJPfFAxm7NwLeWVdctToqgekdrSoTZwUdZrtEcnrsmthLbeT3x5mevWqnTuCG5XVMUYzr",
  "key6": "3c8oxXq2HffSJWYaksNK8jm6f1YJP9E8t4RPfpWt81QRcGFchaFyQFit4JhhXxA1atnrdi6Gc5YPXNQiK8bo2bdU",
  "key7": "2PHJs7sghz2ZzxwW3vmdAFH33NSDoM4pVQ4smk9oBKByfWwwFu2qHjaHG7vbsFWQygnzwmxqWKiPcpySV3LxusCU",
  "key8": "5iRcptkiQUmQDdoRicQsVzNVu9JyrFKoUsG7YTRKLhyAPyVbi6d2hiHEHLPxV7vxNFVHRMU7HPFDVC4pmE4t6PBz",
  "key9": "3W5xHAK5SgYiZttLGzmBJrQfc588agbP6SmMvfgfj9FKyCfsfw9t8VPuUG1yZvS2tTqQSMiv5r5s23hyBGsjFMZa",
  "key10": "5CCKgUCuzN6A89kuZ1gQjP9DTjQEvG3r21mn6SEC2Zn9ccvBYp2bReAtB1UzgQuUhRApsM98bEVzckVxrgVEdUXG",
  "key11": "2Va3p86RMSV6UqVDCHQCcJhio4V3DgChYSsv2v2cpsiadxLcjKBzFgTkGo7MaVmZwo115ArcYi4cSAegKjeMLqpr",
  "key12": "5QMgYEH4DkhWPFJwN2LNtqwRFwmNjXKDa9eGBFTvqRYCTtarKgeHjvgytkqSua6Ro2M5bBjWuQw6uqQBpis9WV2B",
  "key13": "d4imPLxiwKpZjvK3rPRPDN6fo5KSrnaggostsfUm4GgDEytTnEJDL6qmsmFAt3myTRUmot5kpe6WLBnyPzW4t7Y",
  "key14": "3wPuvZoXhyScgE185p31YtXnpreM28y2bhTDWhFwDPt66b19CpmCij3JG63nRfFfK9WLEveFTwHFXySxBamnzbF7",
  "key15": "22sqqUB6BPPH4dLCEVHywug9WDPN7B7UYus9RXRD49YxZs8mZ4F242P1VXaFbAGEBKLeSooqoxSPbNdCMTd8phez",
  "key16": "3CPE4nxxKmsBen7sRB6NQKeZSkyXxBwntGj5ixaB5Zn2o1V7Xay6NTfiZHs8M72gfj5X6ndiPi1TuyFjWFAVDJem",
  "key17": "2waqmv8VjdBb4HyyF3is7JghMUmwRuEjf323zg3wCAC97mUcZdVxmbQzJx9cLBvA38k5qpkLptnKK7aLsNf6FoAN",
  "key18": "T7JNJUCLrbQtMY1wFQiHGoTjBrmLiLxHDthXPQB8KPXZDyL9HMQU5UoMSn2LqYLvZGa9XvrC9B6ScbuRB7Ku7HE",
  "key19": "3tX8PkuSuEDeF5Y7iXwmeLZxDjPUSCFpELSoHT22JZZZkcc77Zw8CwiE3vrMLAQJCwZp6hrL9rJnjt3LjRSxzRoB",
  "key20": "3a8K97M1Ri8mom78PYsVR5CGbYeXbX5S7nFba3ExZCP3HqZNUEx3rrfeiwejHkJZqYrSF21AJdMgnZUd4Cyvi88B",
  "key21": "2adAURYjZEHpHb5GiSSkSR4EXUHLphwyU2DgRqKacY3ne4AS4UhfBehgogjPzLjLRkqEer943fTPrPFZvJ3JLhTb",
  "key22": "3md8kWr7RdS7byJV9KMFAsQvFAJyeREReBhbZsTqnGsrFGVZNBC58P6ycZYrZuGqrGQ7oYryL5VBmZFCUJqhZTJ1",
  "key23": "3DtSjkxDHF6mFDA8sjxMpX4qW3TtGaBNEm4DqWx3GiDWJVo8U33gxzanz83yqjnNuuCsSP17e3hLttAuD2jGLaob",
  "key24": "SarHyga5yLn5MPb5jkAk3KmcLxD9tSeAH8ASLeGjJVpQyBherkCFHHxMfRYqDVV3z634wpNCWsbMmH7sWWN1m7M",
  "key25": "4nYkUKZVCC5g1c4xaERFcZhHaphMJdmwioa2TG3C7ZXtyemt18kEDaC44yZgqWk1a95R4Yb4rK9J2aHDDWNaL8h5",
  "key26": "4ajGYszbPfdiVKjtExS6UXWwbwoT6Y1G9ViMaHCqPKzo8HohY41Kq2hiNvSXpGDaNq5Mt8vG6Azk9pNZgaGhbSMs",
  "key27": "4XduULUAhDij1cSAXmCHYHZ1iehAT1JYNqGKx5NybdDAjayhfbPXNnkjrW6ybnTLEAxag4E7jxmJNpAJuirjiyHC",
  "key28": "3dRHJCxiAFVJNiZMmYbTfiyfdG8L4rmS38hQHmvpYjvYbh91H6P4WJbn7HwNazqDLryGXEsCygnACvjSh6axFxnC",
  "key29": "VnQ2VG7LXbatyDwnQMz9b94HUubuVyTxAmHJQQdiAyB7A1WXwkGw6aJMqVnzMnYUr7BzYdAVPG7LbuuxCAv9bna",
  "key30": "E4yCSY3v111cp9oCdm4rRy1TDtb7tiFbUTUcaUhdaFJZtgxvQMRELXzmkZKAz6MBUGyvS2f9o7S3V3GAKtpwDhf",
  "key31": "xUjaBYMXq8k5oPcton4pWmddwvsxXKwrMmMg7UgjjJPkCvw5qTQGU7vr1kgv8AZGw3YSz2GUJoKN9z9vswDGWnq",
  "key32": "4AKHhZrko6pKJ4B31qZKobrmU9MHiJKEMKEN5abysG1F9pSJVZUqaoHqP3nuxNJGLiorJpLDwKBQgtgNdfHUkc7p"
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
